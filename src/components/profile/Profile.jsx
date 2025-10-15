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
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6 mb-6">
        {/* Avatar */}
        <Avatar
          img={preview || "/default-avatar-icon.jpg"}
          rounded
          bordered
          color="light"
          size="xl"
        />

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            {form.first} {form.last}
          </h2>
          <p className="text-gray-500">{form.email}</p>
        </div>

        {/* QR Placeholder */}
        <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-400">
          <img
            src={`${import.meta.env.PROD 
              ? "https://voyant-backend.onrender.com/api/v1/qr"  // URL de producción
              : "/api/v1/qr"}/${user._id}`}                      // URL local (usando proxy)
            alt="QR del usuario"
            width="200"
            crossOrigin="anonymous"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = "/qr-placeholder.png";
              e.target.onerror = null;
            }}
          />
        </div>
      </div>

      {/* Editable Fields */}
      <div className="space-y-5">
        {isEditing ? (
          <>
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="first"
                value={form.first}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Apellido */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Apellido
              </label>
              <input
                type="text"
                name="last"
                value={form.last}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* País */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                País
              </label>
              <Select
                options={options}
                value={form.country}
                onChange={handleCountryChange}
                placeholder="Selecciona un país"
                className="w-full"
              />
            </div>

            {/* Ciudad */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ciudad
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="last"
                value={form.last}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:ring-0 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Foto */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Foto
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
              />
            </div>

            {/* Botones */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Guardar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p>
                <span className="font-semibold">Nombre:</span>{" "}
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
                <span className="font-semibold">Fecha de nacimiento:</span>{" "}
                {formatDate(user?.birthDate) || "No especificado"}
              </p>
              <p>
                <span className="font-semibold">DNI:</span>{" "}
                {user?.dni || "No especificado"}
              </p>
              <p>
                <span className="font-semibold">Cargo:</span>{" "}
                {user?.cargo || "No especificado"}
              </p>
              <p>
                <span className="font-semibold">Rol:</span> {user?.role}
              </p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold mt-6 w-full md:w-auto"
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
