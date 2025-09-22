import { useEffect, useState } from "react";
import api from "../../api";
import { Avatar, Card, Progress } from "flowbite-react";
import { UserTableFilters } from "./UserTableFilters";
import { useNavigate } from "react-router-dom";
import { HiUsers } from "react-icons/hi2";
import UsersBy from "../usersBy/UsersBy";

export function UsersTableComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/users")
      .then((res) => setUsers(res.data.data))
      .catch(() => setError("Error al cargar usuarios"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-gray-500">Cargando usuarios...</span>
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

  // 🔹 Ejemplo de datos: puedes pasarlos por props si quieres hacerlo dinámico
  const roles = [
    { name: "Admin", count: 12, color: "blue" },
    { name: "Editor", count: 8, color: "purple" },
    { name: "User", count: 29, color: "green" },
  ];

  const total = roles.reduce((sum, role) => sum + role.count, 0);

  return (
    <>
      {/* Row de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        <UsersBy titulo={"Usuarios por rol"}  />
        <UsersBy titulo={"Usuarios activos / inactivos"}  />
        <UsersBy titulo={"Usuarios activos / inactivos"}  />
        
      </div>

      <UserTableFilters />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Usuario</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Rol</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Fecha de creación</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                <td className="flex items-center px-6 py-4 font-medium text-gray-900">
                  <Avatar
                    img={user.picture || "/default-avatar-icon.jpg"}
                    rounded
                    size="md"
                    alt="avatar"
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
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs ${
                      user.status
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString("es-PE", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    className="px-3 py-1 text-xs rounded bg-blue-800 text-white hover:bg-blue-600"
                    onClick={() => handleEdit(user)}
                  >
                    Editar
                  </button>
                  <button
                    className={`px-3 py-1 text-xs rounded ${
                      user.active
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white`}
                    disabled
                  >
                    {user.active ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
