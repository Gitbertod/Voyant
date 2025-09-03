"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";


export function SidebarComponent() {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <SidebarLogo href="#" img="/logoVoyantColor.svg" imgAlt="Voyant logo">
     
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/blog/create" icon={HiInbox}>
            Crear Post
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Somos Voyant
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Voyant 365
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            Kanban
          </SidebarItem>
          <SidebarItem href="/login" onClick={handleLogout} icon={HiArrowSmRight}>
            Log out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
