export function FormActions({ onCancel, loading, mode }) {
  return (
    <div className="flex gap-3 mt-8 justify-end">
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm"
        >
          Cancelar
        </button>
      )}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm"
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