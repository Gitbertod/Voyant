import { useAuth } from "../../context/AuthProvider";

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Hola, {user?.name?.first} 👋
      </h1>

      <p className="text-gray-600">
        Este es tu panel personal. Aquí puedes gestionar tu cuenta y ver tu
        información.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="font-semibold text-gray-700">Rol</h2>
          <p className="text-gray-600 capitalize">{user?.role}</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="font-semibold text-gray-700">Última actividad</h2>
          <p className="text-gray-600">Hace 2 horas</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
