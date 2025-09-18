import { Avatar } from "flowbite-react";

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
    </div>
  );
}
