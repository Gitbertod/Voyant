import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../../api";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.patch(`https://voyant-backend.onrender.com/users/resetPassword/${token}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, passwordConfirm }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setMessage("Contraseña restablecida correctamente ✅");
      } else {
        setMessage(data.message || "Error al restablecer contraseña ❌");
      }
    } catch (err) {
      setMessage("Error de conexión con el servidor ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-80 bg-gradient-to-b from-blue-950 via-blue-750 to-blue-900 shadow-lg rounded-lg p-6 flex flex-col">
        <img
            src="/SomosVoyant.png"
            alt="somos voyant logo"
            className="w-32 mx-auto mb-6 object-contain"
          />
        <h2 className="text-xl font-bold mb-4 text-center">Restablecer contraseña</h2>
        <input
          type="password"
          placeholder="Nueva contraseña"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-full text-white py-2 rounded">Guardar nueva contraseña</button>
        {message && <p className="mt-3 text-center text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
