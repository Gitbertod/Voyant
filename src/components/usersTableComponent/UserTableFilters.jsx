import { Link } from "react-router-dom";
import { MdSearch, MdClear } from "react-icons/md";

export function UserTableFilters({
  search,
  onSearchChange,
  role,
  onRoleChange,
  status,
  onStatusChange,
  sort,
  onSortChange,
  onAddUser,
  roles = [],
}) {
  const hasFilters = search || role || status || sort !== "desc";

  const handleClearFilters = () => {
    onSearchChange("");
    onRoleChange("");
    onStatusChange("");
    onSortChange("desc");
  };

  return (
    <div className="mb-5 bg-white p-2 rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        {hasFilters && (
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded transition"
          >
            <MdClear size={18} />
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid de filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 🔍 Buscador */}
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Buscar
          </label>
          <div className="relative">

            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Nombre o email"
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 pl-10 py-2 w-full transition"
            />
          </div>
        </div>

        {/* 🧑 Rol */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Rol
          </label>
          <select
            value={role}
            onChange={(e) => onRoleChange(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-0 w-full transition appearance-none bg-white"
          >
            <option value="">Todos los roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* ⚙️ Status */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Estado
          </label>
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-0 w-full transition appearance-none bg-white"
          >
            <option value="">Todos los status</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="suspended">Suspendido</option>
            <option value="vacation">De vacaciones</option>
          </select>
        </div>

        {/* 📅 Ordenar */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Ordenar
          </label>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-0 w-full transition appearance-none bg-white"
          >
            <option value="desc">Más reciente</option>
            <option value="asc">Más antiguo</option>
          </select>
        </div>

        {/* ➕ Botón agregar */}
        <div className="flex flex-col">
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Acciones
          </label>
          <Link to="/admin/create-user" className="w-full">
            <button
              onClick={onAddUser}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-md transition duration-200"
            >
              + Nuevo usuario
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
