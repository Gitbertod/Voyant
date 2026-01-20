import { useState, useEffect } from "react";
import api from "../../api";

export function UserJobInfo({ form, handleChange }) {
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const [loadingPositions, setLoadingPositions] = useState(false);

  // Cargar departamentos al montar el componente
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoadingDepartments(true);
        const response = await api.get('/departments');
        setDepartments(response.data.data);
      } catch (error) {
        console.error('Error al cargar departamentos:', error);
      } finally {
        setLoadingDepartments(false);
      }
    };

    fetchDepartments();
  }, []);

  // Cargar posiciones cuando cambia el departamento
  useEffect(() => {
    const fetchPositions = async () => {
      if (form.department) {
        try {
          setLoadingPositions(true);
          const response = await api.get(`/departments/${form.department}/positions`);
          setPositions(response.data.data);
        } catch (error) {
          console.error('Error al cargar posiciones:', error);
          setPositions([]);
        } finally {
          setLoadingPositions(false);
        }
      } else {
        setPositions([]);
      }
    };

    fetchPositions();
  }, [form.department]);

  // Manejar cambio de departamento
  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    const selectedDept = departments.find(d => d._id === departmentId);

    // Resetear posición cuando cambia el departamento
    handleChange({ target: { name: 'department', value: departmentId } });
    handleChange({ target: { name: 'departmentName', value: selectedDept?.name || '' } });
    handleChange({ target: { name: 'position', value: '' } });
    handleChange({ target: { name: 'positionName', value: '' } });
  };

  // Manejar cambio de posición
  const handlePositionChange = (e) => {
    const positionId = e.target.value;
    const selectedPos = positions.find(p => p._id === positionId);

    handleChange({ target: { name: 'position', value: positionId } });
    handleChange({ target: { name: 'positionName', value: selectedPos?.name || '' } });
  };

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información laboral
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fecha de ingreso */}
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

        {/* Status - CORREGIDO */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Estado del empleado
          </label>
          <select
            name="status"
            value={form.status || 'active'}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Selecciona estado</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="suspended">Suspendido</option>
            <option value="vacation">De vacaciones</option>
          </select>
        </div>

        {/* Departamento - CORREGIDO */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Departamento
          </label>
          <select
            value={form.department || ''}
            onChange={handleDepartmentChange}
            name="department"
            required
            disabled={loadingDepartments}
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none disabled:bg-gray-100"
          >
            <option value="">
              {loadingDepartments ? 'Cargando...' : 'Seleccione departamento'}
            </option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Cargo/Posición - CORREGIDO */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Cargo
          </label>
          <select
            value={form.position || ''}
            onChange={handlePositionChange}
            name="position"
            required
            disabled={!form.department || loadingPositions}
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">
              {loadingPositions
                ? 'Cargando cargos...'
                : form.department
                ? 'Seleccione cargo'
                : 'Primero seleccione un departamento'}
            </option>
            {positions.map((position) => (
              <option key={position._id} value={position._id}>
                {position.name}
              </option>
            ))}
          </select>
        </div>

        {/* Rol */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Rol
          </label>
          <select
            name="role"
            onChange={handleChange}
            value={form.role || 'user'}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="manager">Manager</option>
          </select>
        </div>
      </div>
    </>
  );
}