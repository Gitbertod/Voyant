import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      //navigate('/')
    } catch (error) {
      if (error.code === "auth/weak-password") console.log("password debil");

      setError(error.message);
    }
  };
  return (
    <div className="flex justify-center">
      {error && <p>{error}</p>  }
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="tucorreo@correo.com"
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          id="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
