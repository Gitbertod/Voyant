// src/components/userForm/UserFormEditWrapper.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import { UserForm } from "./UserForm";

export function UserFormEditWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cargar datos del usuario
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get(`/users/${id}`);
        setInitialData(res.data.data);
      } catch (err) {
        setError("No se pudo cargar el usuario");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  // Handler de actualización
  const handleUpdate = async (payload) => {
    await api.patch(`/users/${id}`, payload);
    navigate("/admin/manage-users");
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <UserForm
      mode="edit"
      initialData={initialData}
      onSubmit={handleUpdate}
      onCancel={() => navigate("/admin/manage-users")}
    />
  );
}
