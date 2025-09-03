import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/blog/create");
    } catch (error) {
      if (error.code === "auth/weak-password") console.log("password débil");

      setError(error.message);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   await loginWithGoogle();
  //   navigate("/blog/create");

  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-80 bg-white shadow-lg rounded-lg p-6 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Login</h2>

        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="tucorreo@correo.com"
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />

        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          id="password"
          onChange={handleChange}
          className="border p-2 mb-4 w-full rounded"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-full text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
