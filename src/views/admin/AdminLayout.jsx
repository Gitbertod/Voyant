import { SidebarComponent } from "../../components/sidebarComponent/SidebarComponent";
import { Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.dashboard}>
      {/* 🔹 Header móvil con botón hamburguesa */}
      <div className={styles.mobileHeader}>
        <Button 
          color="gray" 
          size="sm"
          onClick={() => setIsOpen(true)}
          className={styles.menuButton}
        >
          <HiMenu className="h-5 w-5" />
        </Button>
        <span className={styles.mobileTitle}>Admin Panel</span>
      </div>

      {/* 🔹 Sidebar fijo en desktop */}
      <aside className={styles.sidebar}>
        <SidebarComponent />
      </aside>

      {/* 🔹 Drawer en móvil */}
      <Drawer 
        open={isOpen} 
        onClose={handleClose} 
        position="left"
        className={styles.drawer}
      >
        <Drawer.Header 
          title="Menú" 
          titleIcon={HiX}
        />
        <Drawer.Items>
          <div onClick={handleClose}>
            <SidebarComponent />
          </div>
        </Drawer.Items>
      </Drawer>

      {/* 🔹 Contenido dinámico */}
      <main className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;