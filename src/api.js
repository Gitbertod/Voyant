import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://voyant-backend.onrender.com/api/v1" // 👉 backend en Render
    : "http://localhost:3001/api/v1",              // 👉 backend local
  withCredentials: true, // si manejas cookies/sesión
});

//const local = 'http://127.0.0.1:3001';

// Interceptor para añadir el token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // 👈 o donde lo guardes
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;