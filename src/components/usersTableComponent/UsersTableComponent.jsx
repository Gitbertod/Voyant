import { useEffect, useState } from "react";
import api from "../../api";
import { Avatar } from "flowbite-react";
import { UserTableFilters } from "./UserTableFilters";

export function UsersTableComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <>
    <UserTableFilters></UserTableFilters>
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
                <td className=" flex justify-start align-middle items-center te px-6 py-4 font-medium text-gray-900 ">
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
                      user.active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.active ? "Activo" : "Inactivo"}
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
                    className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
                    // onClick={() => handleEdit(user)}
                    disabled
                  >
                    Editar
                  </button>
                  <button
                    className={`px-3 py-1 text-xs rounded ${
                      user.active
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white`}
                    // onClick={() => handleToggleActive(user)}
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
