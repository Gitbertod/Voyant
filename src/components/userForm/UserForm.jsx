import { useEffect, useState } from "react";
import { Avatar } from "flowbite-react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useParams } from "react-router-dom";
import api from "../../api";

export function UserForm({
  mode = "create",
  initialData = {},
  onSubmit,
  onCancel,
}) {
  const { id } = useParams(); // Obtiene el id de la URL
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    birthDate: "",
    department: "",
    position: "",
    role: "",
    picture: "",
    ...initialData,
  });

  const [preview, setPreview] = useState(
    initialData?.picture || "/default-avatar-icon.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const options = countryList().getData();

  // Si estamos en modo edición y hay id, obtenemos los datos del usuario
  useEffect(() => {
    if (mode === "edit" && id) {
      setLoading(true);
      api
        .get(`/users/${id}`)
        .then((res) => {
          const user = res.data.data;
          setForm({
            first: user.name?.first || "",
            last: user.name?.last || "",
            email: user.email || "",
            phone: user.phone || "",
            country: user.country || "",
            city: user.city || "",
            birthDate: user.birthDate || "",
            department: user.department || "",
            position: user.position || "",
            role: user.role || "",
            picture: user.picture || "",
            password: "",
            passwordConfirm: "",
          });
          setPreview(user.picture || "/default-avatar-icon.jpg");
        })
        .catch(() => setError("No se pudo cargar el usuario"))
        .finally(() => setLoading(false));
    }
  }, [mode, id]);

  // Manejo de inputs
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Manejo de país
  const handleCountryChange = (option) => {
    setForm((prev) => ({
      ...prev,
      country: option ? option.value : "",
    }));
  };

  // Manejo de foto
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
    data.append("upload_preset", "voyant_users");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/voyant/image/upload",
      { method: "POST", body: data }
    );
    const json = await res.json();
    return json.secure_url;
  };

  // Guardar datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let photoUrl = form.picture;
      if (form.picture instanceof File) {
        photoUrl = await uploadToCloudinary(form.picture);
      }
      const payload = {
        name: { first: form.first, last: form.last },
        email: form.email,
        phone: form.phone,
        country: form.country,
        city: form.city,
        birthDate: form.birthDate,
        department: form.department,
        position: form.position,
        role: form.role,
        picture: photoUrl,
        // Solo en creación:
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      };
      if (onSubmit) {
        await onSubmit(payload);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error al crear usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
        {mode === "create" ? "Agregar nuevo usuario" : "Editar usuario"}
      </h2>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
      )}

      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <Avatar img={preview} rounded size="xl" alt="avatar" />
        <input
          type="file"
          accept="image/*"
          className="mt-3 text-sm"
          onChange={handlePhotoChange}
        />
      </div>

      {/* Grid de inputs */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información personal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Nombre</label>
          <input
            type="text"
            name="first"
            value={form.first}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Apellido</label>
          <input
            type="text"
            name="last"
            value={form.last}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            DNI / CE
          </label>
          <input
            type="text"
            name="dni"
            value={form.dni || ""}
            onChange={handleChange}
            required
            placeholder="Ingresa DNI o CE"
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Contacto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Ubicacíon
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">País</label>
          <Select
            options={options}
            value={options.find((opt) => opt.value === form.country) || null}
            onChange={handleCountryChange}
            placeholder="Selecciona un país"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Ciudad</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Informacion laboral
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <label className="block text-sm font-semibold">Departamento</label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Puesto</label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
      {/* Seguridad */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Seguridad
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Rol</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          >
            <option value="">Selecciona un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </div>
        {mode === "create" && (
          <>
            <div>
              <label className="block text-sm font-semibold">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="border rounded-lg px-3 py-2 w-full text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="passwordConfirm"
                value={form.passwordConfirm}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="border rounded-lg px-3 py-2 w-full text-sm"
              />
            </div>
          </>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-3 mt-8 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm"
        >
          {loading
            ? mode === "create"
              ? "Creando..."
              : "Guardando..."
            : mode === "create"
            ? "Crear usuario"
            : "Guardar cambios"}
        </button>
      </div>
    </form>
  );
}
