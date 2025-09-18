import api from "../../api";
import { UserForm } from "./UserForm";
import { useNavigate } from "react-router-dom";

export function UserFormCreateWrapper() {
  const navigate = useNavigate();

  const handleCreate = async (payload) => {
    await api.post("/users", payload);
    navigate("/admin/manage-users");
  };

  return <UserForm mode="create" onSubmit={handleCreate} />;
}