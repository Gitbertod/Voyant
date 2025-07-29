"use client";

import { Link } from "react-router-dom";

export function FooterVoyant() {
  return (
    
      <footer className="bg-gray-900 dark:bg-gray-900 flex">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logoVoyantColor.svg"
                className="h-8"
                alt="Voyant Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-amber-400 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/nosotros" className="hover:underline me-4 md:me-6">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/soluciones" className="hover:underline me-4 md:me-6">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="/sectores" className="hover:underline me-4 md:me-6">
                  Sectores
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-amber-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-amber-400 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              VOYANT™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    
  );
}
