import { SidebarComponent } from "../../components/sidebarComponent/SidebarComponent";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dashboard}>
      {/* 🔹 Botón hamburguesa visible solo en móviles */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button color="gray" onClick={() => setIsOpen(true)}>
          <HiMenu className="h-6 w-6" />
        </Button>
      </div>

      {/* 🔹 Sidebar fijo en desktop */}
      <div className={`${styles.sidebar} hidden md:block`}>
        <SidebarComponent />
      </div>

      {/* 🔹 Drawer en móvil */}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="left">
        <Drawer.Header title="Menú" />
        <Drawer.Items>
          <SidebarComponent />
        </Drawer.Items>
      </Drawer>

      {/* 🔹 Contenido dinámico */}
      <div className={styles.container}>
        <Outlet /> {/* Aquí se renderizan Dashboard, Profile, etc */}
      </div>
    </div>
  );
};

export default AdminLayout;
