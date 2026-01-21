import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import api from "../../api";

// Mapeo de errores específicos del backend
const ERROR_MESSAGES = {
  "Cannot find user with that email": "El correo no está registrado en nuestro sistema",
  "Password is incorrect": "Contraseña incorrecta",
  "Invalid email or password": "Email o contraseña inválidos",
  "User account is not active": "Tu cuenta ha sido desactivada. Contacta con administración",
  "User not found": "El usuario no existe",
  "Email or password incorrect": "Email o contraseña incorrectos",
  "has been deactivated": "Tu cuenta ha sido desactivada. Contacta con administración",
  "Your account has been deactivated": "Tu cuenta ha sido desactivada. Contacta con administración",
  "Network error": "Error de conexión, verifica tu internet",
  "timeout of": "El servidor está tardando, intenta de nuevo",
};

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Función para extraer el mensaje de error
  const getErrorMessage = (error) => {
    console.log("Error object:", error); // Debug
    
    // Si es un Error lanzado desde AuthProvider con el mensaje directo
    if (error.message) {
      const msg = error.message;
      
      // Buscar coincidencias en el mapeo
      for (const [key, value] of Object.entries(ERROR_MESSAGES)) {
        if (msg.toLowerCase().includes(key.toLowerCase())) {
          return value;
        }
      }
      
      // Si no coincide, devolver el mensaje del error
      return msg;
    }

    // Error 403 - Cuenta desactivada (si viene con response)
    if (error.response?.status === 403) {
      return error.response?.data?.message || "Tu cuenta ha sido desactivada. Contacta con administración";
    }

    // Si el error tiene un mensaje específico del backend (con response)
    if (error.response?.data?.message) {
      const backendMsg = error.response.data.message;
      
      // Buscar coincidencias en el mapeo
      for (const [key, value] of Object.entries(ERROR_MESSAGES)) {
        if (backendMsg.toLowerCase().includes(key.toLowerCase())) {
          return value;
        }
      }
      
      // Si no coincide con ninguno, devolver el mensaje del backend
      return backendMsg;
    }

    // Manejo de errores de red
    if (error.message === "Network Error") {
      return ERROR_MESSAGES["Network error"];
    }

    // Error por timeout
    if (error.code === "ECONNABORTED") {
      return ERROR_MESSAGES["timeout of"];
    }

    // Error genérico
    return "Algo salió mal. Por favor, intenta de nuevo.";
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isForgotPassword) {
        // Validar email en recuperación
        if (!user.email || !user.email.includes("@")) {
          toast.warning("Ingresa un email válido", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
          return;
        }

        try {
          await api.post("/users/forgotPassword", {
            email: user.email,
          });

          toast.success("✅ Se ha enviado un enlace a tu correo", {
            position: "top-right",
            autoClose: 4000,
          });

          setIsForgotPassword(false);
          setUser({ email: "", password: "" });
        } catch (error) {
          const errorMsg = getErrorMessage(error);
          toast.error(errorMsg, {
            position: "top-right",
            autoClose: 4000,
          });
        }
      } else {
        // Login normal
        if (!user.email || !user.password) {
          toast.warning("Completa todos los campos", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
          return;
        }

        const result = await login(user.email, user.password);
        
        toast.success("✅ Sesión iniciada correctamente", {
          position: "top-right",
          autoClose: 3000,
        });

        if (result.role === "admin") {
          navigate("/admin/manage-users");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      
      // Si es error de cuenta desactivada, mostrar con más contexto
      if (
        error.message?.toLowerCase().includes("deactivated") ||
        errorMsg.includes("desactivada")
      ) {
        toast.error(
          "🔒 " + errorMsg + " 🔒",
          {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
          }
        );
      } else {
        toast.error(errorMsg, {
          position: "top-right",
          autoClose: 4000,
        });
      }

      console.error("Error detalles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-gradient-to-b from-blue-950 via-blue-750 to-blue-900 shadow-lg rounded-lg p-8 flex flex-col"
        >
          <img
            src="/SomosVoyant.png"
            alt="somos voyant logo"
            className="w-32 mx-auto mb-6 object-contain"
          />
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-100">
            {isForgotPassword ? "Recuperar contraseña" : "Login"}
          </h2>

          <label htmlFor="email" className="mb-1 text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="tucorreo@correo.com"
            onChange={handleChange}
            value={user.email}
            required
            autoComplete="email"
            className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-b-4 focus:border-yellow-400 focus:ring-0 text-white placeholder-gray-400 mb-4 transition-all duration-300 ease-in-out"
          />

          {!isForgotPassword && (
            <>
              <label htmlFor="password" className="mb-1 text-gray-100">
                Password
              </label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  onChange={handleChange}
                  value={user.password}
                  required
                  autoComplete="current-password"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-b-4 focus:border-yellow-400 focus:ring-0 text-white placeholder-gray-400 pr-10 transition-all duration-300 ease-in-out"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2 text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {showPassword ? (
                    <MdVisibility size={20} />
                  ) : (
                    <MdVisibilityOff size={20} />
                  )}
                </button>
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-full text-white py-2 rounded"
          >
            {isForgotPassword ? "Enviar enlace" : "Login"}
          </button>

          <p
            onClick={() => setIsForgotPassword(!isForgotPassword)}
            className="mt-4 cursor-pointer text-white text-sm text-center hover:underline"
          >
            {isForgotPassword ? "Volver al login" : "¿Olvidó su contraseña?"}
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
