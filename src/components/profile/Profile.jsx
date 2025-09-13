import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../../context/AuthProvider";
import api from "../../api";
import { Avatar } from "flowbite-react";
import Select from "react-select";
import countryList from "react-select-country-list";

const Profile = () => {
  const { user, loading, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null); // preview de la foto
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    country: null,
    city: "",
    phone: "",
    photo: "", // url final de Cloudinary
  });

  // Lista de países
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    if (user) {
      setForm({
        first: user?.name?.first || "",
        last: user?.name?.last || "",
        email: user?.email || "",
        country: user?.country
          ? options.find((opt) => opt.value === user.country)
          : null,
        city: user?.city || "",
        phone: user?.phone || "",
        photo: user?.photo || "",
      });
      setPreview(user?.photo || null);
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
      setForm((prev) => ({ ...prev, photo: file })); // guardamos el archivo
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result); // mostramos preview
      reader.readAsDataURL(file);
    }
  };

  // ✅ Subida a Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "voyantPreset"); // ⚡ cambia por el tuyo

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvihibg5k/image/upload", // ⚡ cambia por tu cloud_name
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
      let photoUrl = form.photo;

      // si la foto es un archivo, la subimos
      if (form.photo instanceof File) {
        photoUrl = await uploadToCloudinary(form.photo);
      }

      const res = await api.patch("/users/updateMe", {
        name: { first: form.first, last: form.last },
        email: form.email,
        country: form.country ? form.country.value : null,
        city: form.city,
        phone: form.phone,
        photo: photoUrl,
      });

      setUser(res.data.data.user);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
        Mi Perfil
      </h2>

      <div className="flex justify-center mb-4">
        <Avatar img={preview || "/vicAvatar.jpg"} rounded bordered color="light" size="xl" />
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <>
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold">Nombre</label>
              <input
                type="text"
                name="first"
                value={form.first}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            {/* Apellido */}
            <div>
              <label className="block text-sm font-semibold">Apellido</label>
              <input
                type="text"
                name="last"
                value={form.last}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            {/* País */}
            <div>
              <label className="block text-sm font-semibold">País</label>
              <Select
                options={options}
                value={form.country}
                onChange={handleCountryChange}
                placeholder="Selecciona un país"
              />
            </div>

            {/* Ciudad */}
            <div>
              <label className="block text-sm font-semibold">Ciudad</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            {/* Foto */}
            <div>
              <label className="block text-sm font-semibold">Foto</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 w-full"
            >
              Guardar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded mt-2 w-full"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <p className="m-4">
              <span className="font-semibold m-1">Nombre:</span>{" "}
              {user?.name?.first} {user?.name?.last}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-semibold">País:</span>{" "}
              {user?.country || "No especificado"}
            </p>
            <p>
              <span className="font-semibold">Ciudad:</span>{" "}
              {user?.city || "No especificada"}
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span>{" "}
              {user?.phone || "No especificado"}
            </p>
            <p>
              <span className="font-semibold">Rol:</span> {user?.role}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 w-full"
            >
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
