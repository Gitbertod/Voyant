import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Avatar } from "flowbite-react";

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

  if (!user) {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
      <p className="text-center mt-10"> Cargando profile...</p>
    </div>)
  }

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
  //         <p className="text-gray-600">Cargando perfil...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600 p-4 rounded-lg bg-red-50 border border-red-200">
          <p>⚠️ {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        {/* Header con Avatar */}
        <div className="flex flex-col items-center mb-8">
          <Avatar
            img={user.picture || "/default-avatar-icon.jpg"}
            size="xl"
            rounded
            bordered
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            {user.name?.first} {user.name?.last}
          </h1>
          <p className="text-gray-600">
            {user.position || "Colaborador Voyant"}
          </p>
        </div>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
                {user.department || "No especificado"}
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
                {user.position || "No especificado"}
              </p>
            </div>
          </div>
        </div>

        {/* Sello de verificación */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-green-600">
              Perfil verificado por Voyant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
