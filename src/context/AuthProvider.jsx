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
    const res = await api.post("/api/v1/users/login", { email, password });
    const { token, data } = res.data;

    setUser(data.user);
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // ✅ Signup con backend
  const signup = async (name, email, password, passwordConfirm) => {
    const res = await api.post("/api/v1/signup", {
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
        .get("/api/v1/users/me")
        .then((res) => {
          setUser(res.data.data);
        })
        .catch(() => {
          logout(); // Si el token no es válido
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

