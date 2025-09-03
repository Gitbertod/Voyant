import React from "react";
import { TableComponent } from "../../components/tableComponent/TableComponent";
import styles from "./Dashboard.module.css";
import { SidebarComponent } from "../../components/sidebarComponent/SidebarComponent";
import { Card } from "flowbite-react";
import api from "../../api";
import { useEffect, useState } from "react";
import { comment } from "postcss";

const Dashboard = () => {
  const [stats,setStats] = useState({users:0, posts: 0, comments: 0})
  
  useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await api.get("/api/v1/stats");
      setStats(res.data.data); // { users: 12, posts: 48, comments: 230 }
      
    } catch (error) {
      console.error("Error al cargar estadísticas:", error);
    }
  };

  fetchStats();
}, []);

  
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <SidebarComponent />

      {/* Contenedor principal */}
      <div className={styles.container}>
        {/* Row de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Total Usuarios
            </h5>
            <p className="font-normal text-gray-700">{stats.users}</p>
          </Card>

          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Total Posts
            </h5>
            <p className="font-normal text-gray-700">{stats.posts}</p>
          </Card>

          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Comentarios
            </h5>
            <p className="font-normal text-gray-700">{stats.comments}</p>
          </Card>
        </div>

        {/* Tabla */}
        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
