import { useEffect, useState } from "react";
import api from "../../api";
import { Avatar } from "flowbite-react";
import { UserTableFilters } from "./UserTableFilters";

export function UsersTableComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);

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
    setEditingUser(user); // abre el modal con los datos
  };

  const handleCloseModal = () => {
    setEditingUser(null); // cierra el modal
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.patch(`/users/${editingUser._id}`, editingUser);

      // actualiza la lista de usuarios en el estado
      setUsers((prev) =>
        prev.map((u) => (u._id === editingUser._id ? res.data.data : u))
      );

      setEditingUser(null); // cerrar modal
    } catch (err) {
      console.error("Error al editar usuario", err);
    }
  };

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
      {editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Editar Usuario</h2>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded p-2 text-sm"
                  value={editingUser.name?.first || ""}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      name: { ...editingUser.name, first: e.target.value },
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Apellido</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded p-2 text-sm"
                  value={editingUser.name?.last || ""}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      name: { ...editingUser.name, last: e.target.value },
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border rounded p-2 text-sm"
                  value={editingUser.email || ""}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Rol</label>
                <select
                  className="mt-1 block w-full border rounded p-2 text-sm"
                  value={editingUser.role || ""}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, role: e.target.value })
                  }
                >
                  <option value="user">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
