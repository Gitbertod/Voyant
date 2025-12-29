import { Avatar } from "flowbite-react";

const ProfileHeader = ({ preview, form, user }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 border-b border-gray-200 pb-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 shadow-sm">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Avatar
          img={preview || "/default-avatar-icon.jpg"}
          rounded
          bordered
          color="light"
          size="xl"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 text-center md:text-left w-full md:w-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          {form.first} {form.last}
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base break-all hover:text-gray-800 transition-colors">
          {form.email}
        </p>
      </div>

      {/* QR Placeholder */}
      <div className="flex-shrink-0 w-full sm:w-32 md:w-auto flex justify-center md:justify-end">
        <div className="bg-white rounded-xl p-4 border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors duration-300 shadow-sm">
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center text-sm text-gray-400">
            <img
              src={`${
                import.meta.env.PROD
                  ? "https://voyant-backend.onrender.com/api/v1/qr"
                  : "/api/v1/qr"
              }/${user._id}`}
              alt="QR del usuario"
              width="200"
              crossOrigin="anonymous"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = "/qr-placeholder.png";
                e.target.onerror = null;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
