import { useNavigate } from "react-router-dom";

export function FormActions({ loading, mode }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/admin/manage-users");
  };

  return (
    <div className="flex gap-3 justify-end w-full">
      <button
        type="button"
        onClick={handleCancel}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
      >
        Cancelar
      </button>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
      >
        {loading
          ? mode === "create"
            ? "Creando..."
            : "Guardando..."
          : mode === "create"
          ? "Crear usuario"
          : "Guardar cambios"}
      </button>
    </div>
  );
}