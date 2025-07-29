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

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/blog/create");

  };

  
  return (
    <div className="flex flex-col items-center justify-center ">
      <form onSubmit={handleSubmit} className="w-64">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="tucorreo@correo.com"
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          id="password"
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-yellow-400 w-full text-white py-2 rounded"
        >
          Login
        </button>
      </form>

      <button
        className="bg-yellow-400 p-3 text-white py-2 rounded"
        onClick={handleGoogleSignIn}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
