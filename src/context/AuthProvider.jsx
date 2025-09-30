// context/AuthProvider.jsx
import { useContext, createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Añade esto

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/users/me");
        const userData = res.data.data;
        setUser(userData);

        // Solo redirigir si estamos en una ruta incorrecta
        const currentPath = window.location.pathname;
        if (userData.role === "admin" && !currentPath.startsWith("/admin")) {
          navigate("/admin/dashboard");
        } else if (userData.role === "user" && !currentPath.startsWith("/user")) {
          navigate("/user/dashboard");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        logout();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]); // Solo depende de navigate

  // ✅ Login con backend
  const login = async (email, password) => {
    try {
      const res = await api.post("users/login", { email, password });
      const { token } = res.data;

      // Guardar token
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Obtener datos del usuario
      const userRes = await api.get("/users/me");
      const userData = userRes.data.data;

      setUser(userData);
      localStorage.setItem("userRole", userData.role); // ✅ guardar rol en localStorage

      return userData; // devolvemos para usar en Login.jsx
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      delete api.defaults.headers.common["Authorization"];
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  // ✅ Signup con backend
  const signup = async (name, email, password, passwordConfirm) => {
    const res = await api.post("/signup", {
      name,
      email,
      password,
      passwordConfirm,
    });

    const { token, data } = res.data;

    setUser(data.user);
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", data.user.role); // ✅ guardar rol también en signup
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    delete api.defaults.headers.common["Authorization"];
  };

  // Si está cargando, muestra un spinner o loading
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ signup, login, user, setUser, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
