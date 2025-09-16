import { useState } from "react";
import api from "../../api";
import { Avatar } from "flowbite-react";

export function UserCreateForm({ onClose, onCreated }) {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    role: "",
    picture: "",
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Manejo de inputs
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Manejo de foto (preview local)
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Subida a Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "voyant_users"); // tu preset de Cloudinary
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/voyant/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const json = await res.json();
    return json.secure_url;
  };

  // Crear usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let photoUrl = "";
      if (form.picture instanceof File) {
        photoUrl = await uploadToCloudinary(form.picture);
      }
      await api.post("/users", {
        name: { first: form.first, last: form.last },
        email: form.email,
        password: form.password,
        role: form.role,
        picture: photoUrl,
      });
      if (onCreated) onCreated();
      if (onClose) onClose();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Error al crear usuario. Verifica los datos."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-bold mb-4">Agregar nuevo usuario</h2>
      {error && (
        <div className="mb-3 text-red-500 text-sm">{error}</div>
      )}
      <div className="flex flex-col items-center mb-4">
        <Avatar
          img={preview || "/default-avatar-icon.jpg"}
          rounded
          size="xl"
          alt="avatar"
        />
        <input
          type="file"
          accept="image/*"
          className="mt-2"
          onChange={handlePhotoChange}
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Nombre</label>
        <input
          type="text"
          name="first"
          value={form.first}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Apellido</label>
        <input
          type="text"
          name="last"
          value={form.last}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Rol</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">Selecciona un rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
          {/* Agrega más roles si lo necesitas */}
        </select>
      </div>
      <div className="flex gap-2 mt-6">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full"
        >
          {loading ? "Creando..." : "Crear usuario"}
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded font-semibold w-full"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}