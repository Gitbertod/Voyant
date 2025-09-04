import React, { useEffect, useState } from "react";
import { TableComponent } from "../../components/tableComponent/TableComponent";
import { Card } from "flowbite-react";
import api from "../../api";

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 });
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get("/api/v1/users/me");
        setUser(res.data.data);
      } catch (error) {
        console.error("Error al cargar datos de usuario:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="w-full">
      <h3 className="mb-6 text-xl font-semibold">
        Hola, {user ? `${user?.name.first}` : "cargando..."} 👋
      </h3>

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
  );
};

export default Dashboard;
