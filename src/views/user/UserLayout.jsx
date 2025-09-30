import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { FooterVoyant } from "../../components/footer/FooterVoyant";

const UserLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
  

      {/* Contenedor principal */}
      <div className="flex flex-1">
        {/* Sidebar simple */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              {user?.name?.first} {user?.name?.last}
            </h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <nav className="p-4 flex flex-col gap-3">
            <NavLink
              to="/user/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/user/profile"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Mi Perfil
            </NavLink>

            <button
              onClick={logout}
              className="mt-6 px-3 py-2 text-left rounded-md text-red-600 hover:bg-red-50"
            >
              Cerrar sesión
            </button>
          </nav>
        </aside>

        {/* Contenido dinámico */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <FooterVoyant />
    </div>
  );
};

export default UserLayout;
