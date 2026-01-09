import { Avatar } from "flowbite-react";
import { HiUpload } from "react-icons/hi";
import { BsImage } from "react-icons/bs";
import UserQR from "../profile/UserQR";

export function UserAvatarSection({ preview, handlePhotoChange, userId }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40 translate-y-24 -translate-x-24"></div>
      
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Avatar with upload */}
        <div className="flex-shrink-0 relative">
          <div className="relative group">
            {/* Avatar */}
            <div className="ring-4 ring-white rounded-full shadow-xl">
              <Avatar
                img={preview || "/default-avatar-icon.jpg"}
                alt="User avatar"
                rounded
                bordered
                color="light"
                size="xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Upload overlay */}
            <label 
              htmlFor="file-upload"
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-60 rounded-full transition-all duration-300 cursor-pointer group"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                <BsImage className="text-white mb-1" size={32} />
                <span className="text-white text-xs font-medium">Cambiar foto</span>
              </div>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
          
          {/* Upload indicator */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
            <HiUpload size={12} />
            <span>Click para cambiar</span>
          </div>
        </div>

        {/* User info section */}
        <div className="flex-1 text-center md:text-left space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <div className={`w-2 h-2 rounded-full ${userId ? 'bg-blue-500' : 'bg-green-500'} animate-pulse`}></div>
            <span className="text-sm font-medium text-gray-700">
              {userId ? "Modo edición" : "Creando nuevo perfil"}
            </span>
          </div>
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {userId ? "Editar información" : "Agregar nuevo usuario"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {userId 
                ? "Actualiza los datos del usuario y su foto de perfil" 
                : "Completa el formulario con la información del nuevo usuario"}
            </p>
          </div>

          {/* Tips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
            <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 shadow-sm border border-gray-100">
              JPG o PNG
            </span>
            <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 shadow-sm border border-gray-100">
              Máx. 5MB
            </span>
            <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 shadow-sm border border-gray-100">
              Recomendado: 400x400px
            </span>
          </div>
        </div>

        {/* QR Code - Solo en edición */}
        {userId && (
          <div className="flex-shrink-0">
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center mb-3">
                <h4 className="text-sm font-bold text-gray-700 mb-1">Código de acceso</h4>
                <p className="text-xs text-gray-500">Escanea para ver perfil</p>
              </div>
              <UserQR userId={userId} size={28} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}