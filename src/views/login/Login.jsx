import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false); // 👈 nuevo estado

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 activa el spinner
    try {
      await login(user.email, user.password);
      navigate("/admin/manage-users");
    } catch (error) {
      if (error.code === "auth/weak-password") console.log("password débil");
      setError(error.message);
    } finally {
      setLoading(false); // 👈 desactiva el spinner siempre
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        // 👇 mientras carga muestra solo el spinner
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
          ></img>
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-100">
            Login
          </h2>

          <label htmlFor="email" className="mb-1 text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="tucorreo@correo.com"
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-b-4 focus:border-yellow-400 focus:ring-0 text-white placeholder-gray-400 mb-4 transition-all duration-300 ease-in-out"
          />

          <label htmlFor="password" className="mb-1 text-gray-100">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            id="password"
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-b-4 focus:border-yellow-400 focus:ring-0 text-white placeholder-gray-400 mb-4 transition-all duration-300 ease-in-out"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-full text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
