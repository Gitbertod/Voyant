import axios from 'axios';
const api = axios.create({baseURL: 'https://voyant-backend.onrender.com',})

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