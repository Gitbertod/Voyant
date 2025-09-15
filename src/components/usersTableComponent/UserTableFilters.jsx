import { useState } from "react";

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
    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 bg-white p-4 rounded-lg shadow">
      {/* Buscador */}
      <div className="w-full md:w-1/4">
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Nombre o email"
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 w-full transition"
        />
      </div>

      {/* Selector de rol */}
      <div className="w-full md:w-1/5">
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Rol
        </label>
        <select
          value={role}
          onChange={e => onRoleChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 w-full transition"
        >
          <option value="">Todos</option>
          {roles.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Selector de status */}
      <div className="w-full md:w-1/5">
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={e => onStatusChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 w-full transition"
        >
          <option value="">Todos</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>

      {/* Ordenar por fecha */}
      <div className="w-full md:w-1/5">
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Ordenar por fecha
        </label>
        <select
          value={sort}
          onChange={e => onSortChange(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 w-full transition"
        >
          <option value="desc">Más reciente</option>
          <option value="asc">Más antiguo</option>
        </select>
      </div>

      {/* Botón agregar usuario */}
      <div className="w-full md:w-auto flex md:justify-end">
        <button
          onClick={onAddUser}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
        >
          + Agregar usuario
        </button>
      </div>
    </div>
  );
}