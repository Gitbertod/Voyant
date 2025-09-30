// context/AuthProvider.jsx
import { useContext, createContext, useEffect, useState } from "react";
import api from "../api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Login con backend
  const login = async (email, password) => {
    try {
      // Login request
      const res = await api.post("users/login", { email, password });
      const { token } = res.data;

      // Guardar token
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Obtener datos del usuario
      const userRes = await api.get("/users/me");
      const userData = userRes.data.data;

      setUser(userData);

      // Retornar los datos del usuario incluyendo el rol
      return userData; // Esto es importante para que Login.jsx tenga acceso al rol
    } catch (error) {
      localStorage.removeItem("token");
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
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // ✅ Logout (borra token y user)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  };

  // ✅ Mantener login si hay token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      api
        .get("/users/me")
        .then((res) => {
          setUser(res.data.data);
          // Redirigir según el rol si está en una ruta incorrecta
          const currentPath = window.location.pathname;
          const userRole = res.data.data.role;

          if (userRole === "admin" && !currentPath.startsWith("/admin")) {
            window.location.href = "/admin/dashboard";
          } else if (userRole === "user" && !currentPath.startsWith("/user")) {
            window.location.href = "/user/dashboard";
          }
        })
        .catch(() => {
          logout();
        });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, login, user, setUser, logout, loading }} // 👈 ahora expone setUser
    >
      {children}
    </AuthContext.Provider>
  );
}

