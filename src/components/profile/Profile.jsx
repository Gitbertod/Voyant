import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../../context/AuthProvider";
import api from "../../api";
import countryList from "react-select-country-list";
import SecuritySection from "../security-section/SecuritySection";
import ProfileHeader from "./ProfileHeader";
import ProfileEditForm from "./ProfileEditForm";
import ProfileViewInfo from "./ProfileViewInfo";

const Profile = () => {
  const { user, loading, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null); // preview de la foto
  const [form, setForm] = useState({
    _id: user?._id,
    first: user?.name.first || "",
    last: user?.name.last || "",
    email: user?.email || "",
    birthDate: user?.birthDate || "",
    country: user?.country || "",
    city: user?.city || "",
    phone: user?.phone || "",
    picture: user?.picture || "", // url final de Cloudinary
    departament: user?.departament || "",
  });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  // Lista de países
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    if (user) {
      setForm({
        _id: user?._id,
        first: user?.name?.first || "",
        last: user?.name?.last || "",
        email: user?.email || "",
        dni: user?.dni || "",
        birthDate: formatDate(user?.birthDate),
        country: user?.country
          ? options.find((opt) => opt.value === user.country)
          : null,
        city: user?.city || "",
        phone: user?.phone || "",
        picture: user?.picture || "",
      });
      setPreview(user?.picture || null);
    }
  }, [user, options]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No estás logueado</p>;

  // ✅ Manejo de inputs simples
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Manejo de país
  const handleCountryChange = (value) => {
    setForm((prev) => ({ ...prev, country: value }));
  };

  // ✅ Manejo de foto (preview local con FileReader)
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file })); // <--- usa picture
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // ✅ Subida a Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "voyantPreset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvihibg5k/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const json = await res.json();
    return json.secure_url; // URL final
  };

  // ✅ Guardar cambios
  const handleSave = async () => {
    try {
      let photoUrl = form.picture;
      // Si la foto es un archivo, la subimos
      if (form.picture instanceof File) {
        photoUrl = await uploadToCloudinary(form.picture);
      }
      const res = await api.patch("/users/updateMe", {
        name: { first: form.first, last: form.last },
        email: form.email,
        country: form.country ? form.country.value : null,
        city: form.city,
        phone: form.phone,
        picture: photoUrl, // <--- guarda la URL en el backend
      });
      setUser(res.data.data.user);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-5xl mx-auto">
      {/* Header Profile */}
      <ProfileHeader preview={preview} form={form} user={user} />

      {/* Editable Fields */}
      {isEditing ? (
        <ProfileEditForm
          form={form}
          options={options}
          preview={preview}
          handleChange={handleChange}
          handleCountryChange={handleCountryChange}
          handlePhotoChange={handlePhotoChange}
          handleSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileViewInfo
          user={user}
          formatDate={formatDate}
          onEdit={() => setIsEditing(true)}
        />
      )}

      {/* Sección de Seguridad */}
      <SecuritySection />
    </div>
  );
};

export default Profile;
