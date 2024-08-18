"use client";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Card } from "flowbite-react";

export function CardContact() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc=""
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
        Lima, Perú
      </h5>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="300"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.318020848968!2d-77.00831491843243!3d-12.14089723972546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7eb4e5f76ab%3A0x78fc2d4f18123fe5!2sVoyant!5e0!3m2!1sen!2spe!4v1723930843091!5m2!1sen!2spe"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
        VOYANT SAC
      </h5>
      <div className="flex">
        <FaLocationDot />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Jirón Camino Real 1801, Santiago de Surco 15073, Local C2
        </p>
      </div>
      <div className="flex">
        <BsFillTelephoneFill />
        <a
          href="tel:+51998401212"
          className="font-normal text-gray-700 dark:text-gray-400"
        >
          +51998-401-212
        </a>
      </div>
    </Card>
  );
}
