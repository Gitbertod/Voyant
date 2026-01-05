import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import api from "../../api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" o "error"
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  // ✅ Validaciones
  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!passwordConfirm) {
      newErrors.passwordConfirm = "Debe confirmar la contraseña";
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await api.patch(`/users/resetPassword/${token}`, {
        password,
        passwordConfirm,
      });

      setMessageType("success");
      setMessage("✅ Contraseña restablecida correctamente. Redirigiendo...");
      setPassword("");
      setPasswordConfirm("");
      setErrors({});

      // Redirigir a login después de 2 segundos
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessageType("error");
      const errorMsg =
        err.response?.data?.message ||
        "Error al restablecer la contraseña. Intenta nuevamente.";
      setMessage(`❌ ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
          Restablecer Contraseña
        </h2>

        <label htmlFor="password" className="mb-1 text-gray-100">
          Nueva Contraseña
        </label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: "" }));
              }
            }}
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
        {errors.password && (
          <p className="text-red-400 text-xs mb-3">{errors.password}</p>
        )}

        <label htmlFor="passwordConfirm" className="mb-1 text-gray-100">
          Confirmar Contraseña
        </label>
        <div className="relative mb-4">
          <input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirma tu nueva contraseña"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              if (errors.passwordConfirm) {
                setErrors((prev) => ({ ...prev, passwordConfirm: "" }));
              }
            }}
            className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-b-4 focus:border-yellow-400 focus:ring-0 text-white placeholder-gray-400 pr-10 transition-all duration-300 ease-in-out"
          />
          <button
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            className="absolute right-0 bottom-2 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            {showPasswordConfirm ? (
              <MdVisibility size={20} />
            ) : (
              <MdVisibilityOff size={20} />
            )}
          </button>
        </div>
        {errors.passwordConfirm && (
          <p className="text-red-400 text-xs mb-3">{errors.passwordConfirm}</p>
        )}

        {message && (
          <p
            className={`text-sm mb-4 p-2 rounded text-center ${
              messageType === "success"
                ? "bg-green-900 text-green-200"
                : "bg-red-900 text-red-200"
            }`}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`transition-colors w-full text-white py-2 rounded font-semibold ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500"
          }`}
        >
          {loading ? "Guardando..." : "Guardar Nueva Contraseña"}
        </button>

        <p
          onClick={() => navigate("/login")}
          className="mt-4 cursor-pointer text-white text-sm text-center hover:underline"
        >
          Volver al login
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
