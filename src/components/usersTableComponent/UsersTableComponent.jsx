import { useEffect, useState, useMemo } from "react";
import api from "../../api";
import { UserTableFilters } from "./UserTableFilters";
import { useNavigate } from "react-router-dom";
import { Avatar } from "flowbite-react";
import UsersBy from "../usersBy/UsersBy";

export function UsersTableComponent() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Estados para filtrado
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("desc");

  // Cargar usuarios
  useEffect(() => {
    Promise.all([api.get("/users"), api.get("/stats")])
      .then(([usersRes, statsRes]) => {
        setUsers(usersRes.data.data);
        setStats(statsRes.data.data);
      })
      .catch(() => setError("Error al cargar datos"))
      .finally(() => setLoading(false));
  }, []);

  // Filtrado y ordenamiento optimizado con useMemo
  const filteredUsers = useMemo(() => {
    let result = [...users];

    // Filtrar por búsqueda (nombre o email)
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (user) =>
          `${user.name?.first} ${user.name?.last}`
            .toLowerCase()
            .includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
      );
    }

    // Filtrar por rol
    if (role) {
      result = result.filter((user) => user.role === role);
    }

    // 👇 CORREGIDO: Filtrar por status (ahora es string)
    if (status) {
      result = result.filter((user) => user.status === status);
    }

    // Ordenar por fecha de creación
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sort === "desc" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [users, search, role, status, sort]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-gray-500">Cargando...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  const handleEdit = (user) => {
    navigate(`/admin/edit-user/${user._id}`);
  };

  const handleAddUser = () => {
    navigate("/admin/create-user");
  };

  // 👇 NUEVA FUNCIÓN: Para obtener estilos del status
  const getStatusStyle = (status) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-red-100 text-red-800",
      suspended: "bg-orange-100 text-orange-800",
      vacation: "bg-blue-100 text-blue-800"
    };
    return styles[status] || "bg-gray-100 text-gray-800";
  };

  // 👇 NUEVA FUNCIÓN: Para traducir status al español
  const getStatusLabel = (status) => {
    const labels = {
      active: "Activo",
      inactive: "Inactivo",
      suspended: "Suspendido",
      vacation: "De vacaciones"
    };
    return labels[status] || status;
  };

  return (
    <>
      {/* Row de Cards dinámicas */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
          <UsersBy titulo="Usuarios por rol" data={stats.usersByRole} />
          <UsersBy
            titulo="Usuarios activos/inactivos"
            data={stats.usersByStatus}
          />
          <UsersBy
            titulo="Usuarios por departamento"
            data={stats.usersByDepartament}
          />
        </div>
      )}

      {/* Filtros */}
      <UserTableFilters
        search={search}
        onSearchChange={setSearch}
        role={role}
        onRoleChange={setRole}
        status={status}
        onStatusChange={setStatus}
        sort={sort}
        onSortChange={setSort}
        onAddUser={handleAddUser}
      />

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-gray-600">
        Mostrando <span className="font-semibold">{filteredUsers.length}</span> de{" "}
        <span className="font-semibold">{users.length}</span> usuarios
      </div>

      {/* Tabla */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {filteredUsers.length === 0 ? (
          <div className="w-full text-center py-8 bg-white">
            <p className="text-gray-500">
              No se encontraron usuarios que coincidan con los filtros
            </p>
          </div>
        ) : (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Usuario</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Rol</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Departamento</th>
                <th className="px-6 py-3">Fecha de creación</th>
                <th className="px-6 py-3">Última Conexión</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-medium text-gray-900">
                    <Avatar
                      img={user.picture || "/default-avatar-icon.jpg"}
                      rounded
                      alt="avatar"
                      className="w-12 h-12 min-w-[3rem] min-h-[3rem] object-cover"
                    />
                    <div className="p-2">
                      {user.name?.first} {user.name?.last}
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs">
                      {user.role}
                    </span>
                  </td>
                  {/* 👇 CORREGIDO: Status como string */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs ${getStatusStyle(user.status)}`}
                    >
                      {getStatusLabel(user.status)}
                    </span>
                  </td>
                  {/* 👇 CORREGIDO: departament → departmentName */}
                  <td className="px-6 py-4">{user.departmentName || 'N/A'}</td>
                  <td className="px-6 py-4">
                    {new Date(user.createdAt).toLocaleDateString("es-PE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {user.lastLogin
                      ? new Date(user.lastLogin).toLocaleString()
                      : "Nunca ha iniciado sesión"}
                    <br />
                    <small>{user.lastLoginIp}</small>
                    <br />
                    <small>
                      {user.lastLoginLocation
                        ? `${user.lastLoginLocation.city}, ${user.lastLoginLocation.region}, ${user.lastLoginLocation.country}`
                        : "Ubicación desconocida"}
                    </small>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      className="px-3 py-1 text-xs rounded bg-blue-800 text-white hover:bg-blue-600"
                      onClick={() => handleEdit(user)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}