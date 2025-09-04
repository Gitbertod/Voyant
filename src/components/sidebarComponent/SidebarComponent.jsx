"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

export function SidebarComponent() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <SidebarLogo href="#" img="/logoVoyantColor.svg" imgAlt="Voyant logo" />

      <SidebarItems>
        <SidebarItemGroup>
          {/* ✅ rutas absolutas usando Link */}
          <SidebarItem as={Link} to="/admin/profile" icon={HiUser}>
            Mi perfil
          </SidebarItem>

          <SidebarItem as={Link} to="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>

          <SidebarItem as={Link} to="/admin/blog/create" icon={HiInbox}>
            Crear Post
          </SidebarItem>

          <SidebarItem href="#" icon={HiShoppingBag}>
            Voyant 365
          </SidebarItem>

          <SidebarItem href="#" icon={HiViewBoards}>
            Kanban
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
