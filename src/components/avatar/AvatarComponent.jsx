"use client";

import { Avatar } from "flowbite-react";

export function AvatarComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="https://pbs.twimg.com/profile_images/1321409443519778817/HFZsyIf9_400x400.jpg" rounded bordered />  
    </div>
  );
}