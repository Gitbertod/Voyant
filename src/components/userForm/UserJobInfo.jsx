export function UserJobInfo({ form, handleChange }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información laboral
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Fecha de ingreso en la empresa
          </label>
          <input
            type="date"
            name="jobDate"
            value={form.jobDate}
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
            name="status"
            value={form.status || true}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Selecciona estado</option>
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
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
    </>
  );
}
