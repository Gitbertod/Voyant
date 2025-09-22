import { SidebarComponent } from "../../components/sidebarComponent/SidebarComponent";
import { Outlet } from "react-router-dom";
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  return (
    <div className={styles.dashboard}>
      {/* Sidebar fijo */}
      <div className={styles.sidebar}>
        <SidebarComponent />
      </div>

      {/* Contenido dinámico con scroll */}
      <div className={styles.container}>
        <Outlet /> {/* Aquí se renderizan Dashboard, Profile, etc */}
      </div>
    </div>
  );
};

export default AdminLayout;