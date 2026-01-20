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
          <select value={form.department} onChange={handleChange} name="department" className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none">
            <option value="">Seleccione departamento</option>
            <option value="gerencia">Gerencia</option>
            <option value="supervisores">Supervisores</option>
            <option value="Tecnicos">Tecnicos</option>
            <option value="ssoma">SSOMA</option>
            <option value="finanzas">Finanzas</option>
            <option value="administracion">Administracion</option>
          </select>
          
        </div>
        <div>
          <label className="block text-sm font-semibold">Cargo</label>
          <select value={form.department} onChange={handleChange} name="department" className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none">
            <option value="">Seleccione cargo</option>
            <option value="ventas">Gerente de cultura y ambiente</option>
            <option value="soporte">Gerente de control de gestión</option>
            <option value="soporte">Gerente comercial</option>
            <option value="soporte">Gerente de operaciones</option>
            <option value="soporte">Gerente de operaciones</option>
            <option value="IT">IT</option>
          </select>|
        </div>
        <div>
          <label className="block text-sm font-semibold">Rol</label>
          <select name="role" onChange={handleChange} value={form.role} className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none" >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>
    </>
  );
}
