import { Avatar } from "flowbite-react";

const ProfileHeader = ({ preview, form, user }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6 mb-6">
      {/* Avatar */}
      <Avatar
        img={preview || "/default-avatar-icon.jpg"}
        rounded
        bordered
        color="light"
        size="xl"
      />

      {/* User Info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          {form.first} {form.last}
        </h2>
        <p className="text-gray-500">{form.email}</p>
      </div>

      {/* QR Placeholder */}
      <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-400">
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
  );
};

export default ProfileHeader;
