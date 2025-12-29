const ProfileViewInfo = ({ user, formatDate, onEdit }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p>
          <span className="font-semibold">Nombre:</span>{" "}
          {user?.name?.first} {user?.name?.last}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p>
          <span className="font-semibold">País:</span>{" "}
          {user?.country || "No especificado"}
        </p>
        <p>
          <span className="font-semibold">Ciudad:</span>{" "}
          {user?.city || "No especificada"}
        </p>
        <p>
          <span className="font-semibold">Teléfono:</span>{" "}
          {user?.phone || "No especificado"}
        </p>
        <p>
          <span className="font-semibold">Fecha de nacimiento:</span>{" "}
          {formatDate(user?.birthDate) || "No especificado"}
        </p>
        <p>
          <span className="font-semibold">DNI:</span>{" "}
          {user?.dni || "No especificado"}
        </p>
        <p>
          <span className="font-semibold">Cargo:</span>{" "}
          {user?.cargo || "No especificado"}
        </p>
        <p>
          <span className="font-semibold">Rol:</span> {user?.role}
        </p>
      </div>

      <button
        onClick={onEdit}
        className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold mt-6 w-full md:w-auto"
      >
        Editar
      </button>
    </div>
  );
};

export default ProfileViewInfo;
