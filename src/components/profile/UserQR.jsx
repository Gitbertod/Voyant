const UserQR = ({ userId, size = 32 }) => {
  const qrBaseUrl = import.meta.env.PROD
    ? "https://voyant-backend.onrender.com/api/v1/qr"
    : "/api/v1/qr";

  return (
    <div className="flex-shrink-0 w-full sm:w-32 md:w-auto flex justify-center md:justify-end">
      <div className="bg-white rounded-xl p-4 border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors duration-300 shadow-sm">
        <div
          className="flex items-center justify-center text-sm text-gray-400"
          style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        >
          <img
            src={`${qrBaseUrl}/${userId}`}
            alt="QR del usuario"
            crossOrigin="anonymous"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = "/qr-placeholder.png";
              e.target.onerror = null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserQR;
