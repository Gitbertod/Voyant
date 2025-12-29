import { useState } from "react";
import api from "../../api";

const SecuritySection = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    passwordCurrent: "",
    newPassword: "",
    confirmPassword: "",
  });

  // ✅ Manejo de cambio de contraseña
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Guardar cambio de contraseña
  const handleSavePassword = async () => {
    if (
      !passwordForm.passwordCurrent ||
      !passwordForm.newPassword ||
      !passwordForm.confirmPassword
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await api.patch("/users/updateMyPassword", {
        passwordCurrent: passwordForm.passwordCurrent,
        password: passwordForm.newPassword,
        passwordConfirm: passwordForm.confirmPassword,
      });
      alert("Contraseña actualizada exitosamente");
      setPasswordForm({
        passwordCurrent: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsChangingPassword(false);
    } catch (error) {
      alert(error.response?.data?.message || "Error al cambiar la contraseña");
    }
  };

  return (
    <div className="mt-12 pt-8 border-t">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Seguridad
            </h3>
            <p className="text-gray-600 mt-1">
              Actualiza tu contraseña para mantener tu cuenta segura
            </p>
          </div>
          {!isChangingPassword && (
            <button
              onClick={() => setIsChangingPassword(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Cambiar Contraseña
            </button>
          )}
        </div>

        {isChangingPassword && (
          <div className="space-y-4 mt-6">
            {/* Contraseña Actual */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contraseña Actual
              </label>
              <input
                type="password"
                name="passwordCurrent"
                value={passwordForm.passwordCurrent}
                onChange={handlePasswordChange}
                placeholder="Ingresa tu contraseña actual"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
            </div>

            {/* Nueva Contraseña */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nueva Contraseña
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                placeholder="Ingresa tu nueva contraseña"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Mínimo 6 caracteres
              </p>
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirmar Nueva Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirma tu nueva contraseña"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
            </div>

            {/* Botones de Acción */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-blue-300">
              <button
                onClick={handleSavePassword}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Confirmar Cambio
              </button>
              <button
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordForm({
                    passwordCurrent: "",
                    newPassword: "",
                    confirmPassword: "",
                  });
                }}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecuritySection;
