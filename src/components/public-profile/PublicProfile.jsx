import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

function PublicProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/users/public/${id}`);
        setUser(res.data.data.user);
      } catch (err) {
        setError(err.response?.data?.message || "Error al obtener usuario");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // 👇 FUNCIÓN HELPER: Obtener configuración por status
  const getStatusConfig = (status) => {
    const configs = {
      active: {
        isAvailable: true,
        badge: {
          bg: "bg-green-100",
          text: "text-green-800",
          dot: "bg-green-500",
          label: "Activo",
          pulse: true
        },
        banner: null,
        alert: null,
        overlay: false,
        seal: {
          bg: "bg-green-50",
          icon: "text-green-500",
          text: "text-green-600",
          label: "Perfil verificado por Voyant"
        }
      },
      inactive: {
        isAvailable: false,
        badge: {
          bg: "bg-red-100",
          text: "text-red-800",
          dot: "bg-red-500",
          label: "Inactivo",
          pulse: false
        },
        banner: {
          bg: "from-red-500 to-red-600",
          label: "USUARIO INACTIVO"
        },
        alert: {
          title: "Este usuario está inactivo",
          message: "Este perfil ha sido desactivado y puede que no esté disponible para contacto o colaboración."
        },
        overlay: true,
        seal: {
          bg: "bg-gray-100",
          icon: "text-gray-400",
          text: "text-gray-500",
          label: "Perfil verificado por Voyant"
        }
      },
      suspended: {
        isAvailable: false,
        badge: {
          bg: "bg-orange-100",
          text: "text-orange-800",
          dot: "bg-orange-500",
          label: "Suspendido",
          pulse: false
        },
        banner: {
          bg: "from-orange-500 to-orange-600",
          label: "USUARIO SUSPENDIDO"
        },
        alert: {
          title: "Este usuario está temporalmente suspendido",
          message: "Este perfil ha sido suspendido temporalmente y no está disponible para colaboración."
        },
        overlay: true,
        seal: {
          bg: "bg-gray-100",
          icon: "text-gray-400",
          text: "text-gray-500",
          label: "Perfil verificado por Voyant"
        }
      },
      vacation: {
        isAvailable: false,
        badge: {
          bg: "bg-blue-100",
          text: "text-blue-800",
          dot: "bg-blue-500",
          label: "De vacaciones",
          pulse: false
        },
        banner: {
          bg: "from-blue-500 to-blue-600",
          label: "USUARIO DE VACACIONES"
        },
        alert: {
          title: "Este usuario está de vacaciones",
          message: "Este colaborador está de vacaciones y no se encuentra disponible temporalmente."
        },
        overlay: false, // No oscurecemos tanto porque volverá
        seal: {
          bg: "bg-blue-50",
          icon: "text-blue-500",
          text: "text-blue-600",
          label: "Perfil verificado por Voyant"
        }
      }
    };

    return configs[status] || configs.inactive; // Default a inactive si no reconoce el status
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600 p-4 rounded-lg bg-red-50 border border-red-200">
          <p>⚠️ {error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  // 👇 Obtener configuración según el status del usuario
  const statusConfig = getStatusConfig(user.status);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className={`bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl relative overflow-hidden ${!statusConfig.isAvailable ? 'border-2 border-red-400' : ''}`}>
        
        {/* Banner de estado */}
        {statusConfig.banner && (
          <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${statusConfig.banner.bg} text-white py-3 px-6 flex items-center justify-center space-x-3 shadow-lg`}>
            <svg 
              className="w-6 h-6 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="font-bold text-lg">{statusConfig.banner.label}</span>
            <svg 
              className="w-6 h-6 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}

        {/* Header con Avatar */}
        <div className={`flex flex-col items-center mb-8 ${statusConfig.banner ? 'mt-12' : ''}`}>
          <div className="w-32 h-32 relative mb-4 flex-shrink-0">
            {/* Overlay sobre el avatar */}
            {statusConfig.overlay && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-60 rounded-full flex items-center justify-center z-10">
                <svg 
                  className="w-16 h-16 text-red-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            )}
            <img
              src={user.picture || "/default-avatar-icon.jpg"}
              alt={`${user.name?.first} ${user.name?.last}`}
              className={`w-32 h-32 rounded-full object-cover border-4 border-gray-200 ${statusConfig.overlay ? 'grayscale opacity-60' : ''}`}
            />
          </div>
          <h1 className={`text-3xl font-bold ${statusConfig.isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
            {user.name?.first} {user.name?.last}
          </h1>
          <p className={`${statusConfig.isAvailable ? 'text-gray-600' : 'text-gray-400'}`}>
            {user.positionName || "Colaborador Voyant"}
          </p>

          {/* Badge de estado */}
          <div className="mt-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig.badge.bg} ${statusConfig.badge.text}`}>
              <span className={`w-2 h-2 mr-1.5 ${statusConfig.badge.dot} rounded-full ${statusConfig.badge.pulse ? 'animate-pulse' : ''}`}></span>
              {statusConfig.badge.label}
            </span>
          </div>
        </div>

        {/* Alerta de estado */}
        {statusConfig.alert && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex items-start">
              <svg 
                className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
              <div>
                <h3 className="text-sm font-bold text-red-800 mb-1">
                  {statusConfig.alert.title}
                </h3>
                <p className="text-sm text-red-700">
                  {statusConfig.alert.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Información de contacto */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ${!statusConfig.isAvailable ? 'opacity-60' : ''}`}>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Email</h3>
              <p className="text-gray-800">{user.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Teléfono</h3>
              <p className="text-gray-800">{user.phone || "No especificado"}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">
                Departamento
              </h3>
              <p className="text-gray-800">
                {user.departmentName || user.department?.name || "No especificado"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Ubicación</h3>
              <p className="text-gray-800">
                {user.city && user.country
                  ? `${user.city}, ${user.country}`
                  : "No especificada"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Cargo</h3>
              <p className="text-gray-800">
                {user.positionName || "No especificado"}
              </p>
            </div>
          </div>
        </div>

        {/* Sello de verificación */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className={`inline-flex items-center justify-center space-x-2 ${statusConfig.seal.bg} px-4 py-2 rounded-full`}>
            <svg
              className={`w-5 h-5 ${statusConfig.seal.icon}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={`text-sm font-medium ${statusConfig.seal.text}`}>
              {statusConfig.seal.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;