"use client";

import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/teamVoyant.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Un hito en la infraestructura digital del Perú. 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Un equipo que lo hizo posible.
      </p>
    </Card>
  );
}