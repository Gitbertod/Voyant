import {
  MdPerson,
  MdEmail,
  MdPublic,
  MdLocationCity,
  MdPhone,
  MdCake,
  MdBadge,
  MdWork,
  MdSecurity,
  MdEdit,
} from "react-icons/md";

const ProfileViewInfo = ({ user, formatDate, onEdit }) => {
  const infoItems = [
    {
      icon: <MdPerson className="text-2xl text-blue-800" />,
      label: "Nombre",
      value: `${user?.name?.first} ${user?.name?.last}`,
    },
    {
      icon: <MdEmail className="text-2xl text-blue-800" />,
      label: "Email",
      value: user?.email,
    },
    {
      icon: <MdPublic className="text-2xl text-blue-800" />,
      label: "País",
      value: user?.country || "No especificado",
    },
    {
      icon: <MdLocationCity className="text-2xl text-blue-800" />,
      label: "Ciudad",
      value: user?.city || "No especificada",
    },
    {
      icon: <MdPhone className="text-2xl text-blue-800" />,
      label: "Teléfono",
      value: user?.phone || "No especificado",
    },
    {
      icon: <MdCake className="text-2xl text-blue-800" />,
      label: "Fecha de nacimiento",
      value: formatDate(user?.birthDate) || "No especificado",
    },
    {
      icon: <MdBadge className="text-2xl text-blue-800" />,
      label: "DNI",
      value: user?.dni || "No especificado",
    },
    {
      icon: <MdWork className="text-2xl text-blue-800" />,
      label: "Cargo",
      value: user?.cargo || "No especificado",
    },
    {
      icon: <MdSecurity className="text-2xl text-blue-800" />,
      label: "Rol",
      value: user?.role,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Información en tarjetas mejoradas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              {item.icon}
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-gray-800 font-medium mt-1 break-words">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Editar mejorado */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={onEdit}
          className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <MdEdit className="w-5 h-5" />
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileViewInfo;
