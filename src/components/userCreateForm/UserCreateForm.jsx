import { useState, useMemo } from "react";
import api from "../../api";
import { Avatar } from "flowbite-react";
import Select from "react-select";
import countryList from "react-select-country-list";

export function UserCreateForm({ onClose, onCreated }) {
  const options = useMemo(() => countryList().getData(), []);

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    role: "",
    country: null,
    city: "",
    dni: "",
    picture: "",
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCountryChange = (selected) => {
    setForm((prev) => ({
      ...prev,
      country: selected,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "voyant_users");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let photoUrl = "";
      if (form.picture instanceof File) {
        photoUrl = await uploadToCloudinary(form.picture);
      }

      await api.post("/users/signup", {
        name: { first: form.first, last: form.last },
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
        phone: form.phone,
        role: form.role,
        country: form.country ? form.country.value : "",
        city: form.city,
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
      className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
        Agregar nuevo usuario
      </h2>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
      )}

      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <Avatar
          img={preview || "/default-avatar-icon.jpg"}
          rounded
          size="xl"
          alt="avatar"
        />
        <input
          type="file"
          accept="image/*"
          className="mt-3 text-sm"
          onChange={handlePhotoChange}
        />
      </div>

      {/* Información personal */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información personal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="first"
            value={form.first}
            onChange={handleChange}
            required
            placeholder="Ingresa nombre"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            name="last"
            value={form.last}
            onChange={handleChange}
            required
            placeholder="Ingresa apellido"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            DNI / CE
          </label>
          <input
            type="text"
            name="first"
            value={form.first}
            onChange={handleChange}
            required
            placeholder="Ingresa DNI o CE"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Contacto */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Contacto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ejemplo@correo.com"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+51 999 12345"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Ubicación */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Ubicación
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            País
          </label>
          <Select
            options={options}
            value={form.country}
            onChange={handleCountryChange}
            placeholder="Selecciona un país"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Ej: Lima"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Información laboral */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información laboral
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Fecha de ingreso en la empresa
          </label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Estado del empleado
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Activo</option>
            <option value="admin">Inactivo</option>
            <option value="user">En licencia</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Departamento
          </label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
            placeholder="Ej: Ventas"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Puesto
          </label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            placeholder="Ej: Ejecutivo"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Seguridad */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Seguridad
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Rol
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Selecciona un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Confirmar contraseña
          </label>
          <input
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-3 mt-10 justify-end">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
        >
          {loading ? "Creando..." : "Crear usuario"}
        </button>
      </div>
    </form>
  );
}
