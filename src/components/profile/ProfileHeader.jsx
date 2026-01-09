import { Avatar } from "flowbite-react";
import UserQR from "./UserQR";

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

      {/* QR */}
      <UserQR userId={user._id} />

    </div>
  );
};

export default ProfileHeader;

