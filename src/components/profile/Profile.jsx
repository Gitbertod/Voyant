import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import api from "../../api";
import { Avatar } from "flowbite-react";

const Profile = () => {
  const { user, loading, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    first: user?.name.first || "",
    last: user?.name.last || "",
    email: user?.email || "",
  });

  // ✅ sincroniza form cada vez que cambie el user en el contexto
  useEffect(() => {
    if (user) {
      setForm({
        first: user.name.first || "",
        last: user.name.last || "",
        email: user.email || "",
      });
    }
  }, [user]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No estás logueado</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await api.patch("/api/v1/users/updateMe", {
        name: { first: form.first, last: form.last },
        email: form.email,
      });

      // ✅ el usuario actualizado viene en res.data.data.user
      setUser(res.data.data.user);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
        Mi Perfil
      </h2>
      <Avatar img="/vicAvatar.jpg" rounded bordered color="light" size="xl" />

      <div className="space-y-4">
        {isEditing ? (
          <>
            <div>
              <label className="block text-sm font-semibold">Nombre</label>
              <input
                type="text"
                name="first"
                value={form.first}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Apellido</label>
              <input
                type="text"
                name="last"
                value={form.last}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border rounded w-full px-2 py-1"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 w-full"
            >
              Guardar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded mt-2 w-full"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <p className="m-4">
              <span className="font-semibold m-1">Nombre:</span> {user.name.first}{" "}
              {user.name.last}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Rol:</span> {user.role}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 w-full"
            >
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
