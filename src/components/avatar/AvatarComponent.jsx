"use client";

import { Avatar } from "flowbite-react";

export function AvatarComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/vicAvatar.jpg" rounded bordered />  
    </div>
  );
}