export function UserContactInfo({ form, handleChange }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Contacto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
    </>
  );
}
