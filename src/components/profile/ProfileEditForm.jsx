import Select from "react-select";

const ProfileEditForm = ({
  form,
  options,
  preview,
  handleChange,
  handleCountryChange,
  handlePhotoChange,
  handleSave,
  onCancel,
}) => {
  return (
    <div className="space-y-5">
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
          onClick={onCancel}
          className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ProfileEditForm;
