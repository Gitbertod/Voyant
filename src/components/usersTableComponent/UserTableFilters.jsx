import { Link } from "react-router-dom";

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
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-lg shadow">
      {/* 🔍 Buscador */}

      {/* 🧑 Rol */}
      <div className="flex-1 min-w-[200px]">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Nombre o email"
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 w-full transition"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-700 mb-1 text-center md:text-left">
        
        </label>
        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-1 w-[160px] transition"
        >
          <option value="">Todos los roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* ⚙️ Status */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-700 mb-1 text-center md:text-left">
         
        </label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-1 w-[150px] transition"
        >
          <option value="">Todos</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>

      {/* 📅 Ordenar */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-700 mb-1 text-center md:text-left">
          
        </label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-1 w-[160px] transition"
        >
          <option value="desc">Más reciente</option>
          <option value="asc">Más antiguo</option>
        </select>
      </div>

      {/* ➕ Botón agregar */}
      <div className="flex items-center justify-center">
        <Link to="/admin/create-user">
          <button
            onClick={onAddUser}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
          >
            + Agregar usuario
          </button>
        </Link>
      </div>
    </div>
  );
}
