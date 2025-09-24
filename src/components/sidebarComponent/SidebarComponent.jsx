"use client";

import { MdConnectWithoutContact } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

import {
  Avatar,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Drawer
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiUser,
  HiUsers ,
} from "react-icons/hi";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";
import { useState, useEffect } from "react";

export function SidebarComponent() {
  const [userData, setUserData] = useState(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await api.get("/users/me"); // 👈 endpoint para obtener el user logueado
        setUserData(response.data.data); // asumiendo { data: { name, email, role, picture } }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    fetchDataUser();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="h-screen">
      {/* <SidebarLogo href="#" img="/logoVoyantColor.svg" imgAlt="Voyant logo" /> */}

      {/* Bloque usuario */}
      <div className="flex flex-col items-center mb-6">
        <Avatar
          img={userData?.picture || "/default-avatar-icon.jpg"}
          rounded
          bordered
          color="light"
          size="xl"
          referrerPolicy="no-referrer"
        />
        {userData ? (
          <div className="mt-2 text-center">
            <p className="font-semibold text-gray-900 dark:text-white">
              {userData.name.first} {userData.name.last}
            </p>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-700">
              {userData.role}
            </span>
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">Cargando...</p>
        )}
      </div>

      {/* Menú */}
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem as={Link} to="/admin/profile" icon={HiUser}>
            Mi perfil
          </SidebarItem>

          <SidebarItem as={Link} to="/admin/manage-users" icon={HiUsers }>
            Gestionar usuarios
          </SidebarItem>
          <SidebarItem as={Link} to="/admin/dashboard" icon={HiChartPie}>
            Dashboard Blog
          </SidebarItem>

          <SidebarItem as={Link} to="/admin/blog/create" icon={HiInbox}>
            Crear Post
          </SidebarItem>

          <SidebarItem href="#" icon={GrTechnology}>
            Voyant 365
          </SidebarItem>

          <SidebarItem href="#" icon={MdConnectWithoutContact}>
            Voyant Conecta
          </SidebarItem>

          <SidebarItem
            as={Link}
            to="/login"
            onClick={handleLogout}
            icon={HiArrowSmRight}
          >
            Log out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
