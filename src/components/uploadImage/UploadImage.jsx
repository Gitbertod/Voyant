import { useState } from "react";

// UploadImage.jsx
export default function UploadImage({ onUpload }) {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Primero selecciona una imagen");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "voyantPreset");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dvihibg5k/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      setImageUrl(data.secure_url);

      if (onUpload) onUpload(data.secure_url); // 👈 avisamos al padre
    } catch (error) {
      console.error("Error al subir imagen:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Subir imagen a Cloudinary</h2>

      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Subir
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p>Imagen subida con éxito:</p>
          <img src={imageUrl} alt="preview" className="mt-2 max-w-xs rounded" />
          <p className="text-sm text-gray-600 mt-1">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}

