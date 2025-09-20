export function UserSecurityInfo({ form, handleChange, mode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {mode === "create" && (
        <>
          <div>
            <label className="block text-sm font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password || ""}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="passwordConfirm"
              value={form.passwordConfirm || ""}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Rol</label>
            <select>
              <option onChange={handleChange} value={form.role}>
                Admin
              </option>
              <option onChange={handleChange} value={form.role}>
                User
              </option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}
