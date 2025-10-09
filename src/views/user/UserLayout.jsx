import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { FooterVoyant } from "../../components/footer/FooterVoyant";
import { Button, Drawer } from "flowbite-react"; // Add this import
import { HiMenu } from "react-icons/hi"; // Add this import
import { useState } from "react"; // Add this import

const UserLayout = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Add state for drawer

  // Create a sidebar content component to avoid duplication
  const SidebarContent = () => (
    <>
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
          onClick={() => setIsOpen(false)} // Close drawer when clicking a link
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
          onClick={() => setIsOpen(false)} // Close drawer when clicking a link
        >
          Mi Perfil
        </NavLink>

        <button
          onClick={() => {
            logout();
            setIsOpen(false);
          }}
          className="mt-6 px-3 py-2 text-left rounded-md text-red-600 hover:bg-red-50"
        >
          Cerrar sesión
        </button>
      </nav>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hamburger menu button - visible only on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button color="gray" onClick={() => setIsOpen(true)}>
          <HiMenu className="h-6 w-6" />
        </Button>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <SidebarContent />
        </aside>

        {/* Drawer for mobile */}
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          position="left"
          className="md:hidden"
        >
          <div className="h-screen overflow-y-auto bg-white">
            <SidebarContent />
          </div>
        </Drawer>

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
