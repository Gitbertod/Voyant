import Select from "react-select";

export function UserLocationInfo({ form, handleChange, handleCountryChange, options }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Ubicación
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
    </>
  );
}
