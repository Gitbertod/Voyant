import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate("/login");
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate('/login')
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
