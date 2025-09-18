export function UserPersonalInfo({ form, setForm, handleChange }) {
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      name: { ...form.name, [name]: value },
    });
  };

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Información personal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-semibold">Nombre</label>
          <input
            type="text"
            name="first"
            value={form.name.first}
            onChange={(e) =>
              handleChange({
                target: { name: "name.first", value: e.target.value },
              })
            }
          />
        </div>

        {/* Apellido */}
        <div>
          <label className="block text-sm font-semibold">Apellido</label>
          <input
            type="text"
            name="last"
            value={form.name.last}
            onChange={(e) =>
              handleChange({
                target: { name: "name.last", value: e.target.value },
              })
            }
          />
        </div>

        {/* DNI / CE */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            DNI / CE
          </label>
          <input
            type="text"
            name="dni"
            value={form.dni}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="block text-sm font-semibold">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>
      </div>
    </>
  );
}
