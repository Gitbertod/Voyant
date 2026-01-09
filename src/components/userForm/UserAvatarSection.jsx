import { Avatar } from "flowbite-react";
import UserQR from "../profile/UserQR";
import { useAuth } from "../../context/AuthProvider";
import ProfileHeader from "../profile/ProfileHeader";

export function UserAvatarSection({ preview, handlePhotoChange }) {
  return (
    <div className="flex flex-col items-center mb-6">
      
      <Avatar
        img={preview}
        alt="User avatar"
        rounded
        bordered
        size="lg"
        referrerPolicy="no-referrer" 
      />
      <input
        type="file"
        accept="image/*"
        className="mt-3 text-sm"
        onChange={handlePhotoChange}
      />
      <UserQR userId={"68cac84268fa1cb1ad297ac2"}/>
    </div>
  );
}
