import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import api from "../../api";
import Swal from 'sweetalert2';

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isForgotPassword, setIsForgotPassword] = useState(false); // 👈 nuevo estado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isForgotPassword) {
        try {
          await api.post("/users/forgotPassword", {
            email: user.email,
          });

          await Swal.fire({
            icon: 'success',
            title: '¡Enlace enviado!',
            text: 'Se ha enviado un enlace de recuperación a tu correo',
            confirmButtonColor: '#EAB308',
            confirmButtonText: 'Entendido'
          });

          setIsForgotPassword(false);
          setUser({ email: "", password: "" });
        } catch (error) {
          console.error('Error details:', error.response || error);
          
          await Swal.fire({
            icon: 'error',
            title: 'Error al enviar el correo',
            text: error.response?.data?.message || 
                  'Hubo un problema al enviar el correo de recuperación. Por favor, intenta más tarde.',
            confirmButtonColor: '#EAB308',
            confirmButtonText: 'Entendido'
          });
        }
      } else {
        // Lógica de login normal
        const result = await login(user.email, user.password);
        if (result.role === "admin") {
          navigate("/admin/manage-users");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (error) {
      console.error('Full error:', error);
      setError(error.response?.data?.message || "Error en la operación");
      
      await Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: error.response?.data?.message || "Error en la operación",
        confirmButtonColor: '#EAB308',
        confirmButtonText: 'Intentar de nuevo'
      });
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
          className="w-80 bg-gradient-to-b from-blue-950 via-blue-750 to-blue-900 shadow-lg rounded-lg p-6 flex flex-col"
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

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

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
