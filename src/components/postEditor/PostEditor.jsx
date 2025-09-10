import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import UploadImage from "../uploadImage/UploadImage";

export default function PostEditor({ mode = "create", post = null, onSuccess }) {
  const { id } = useParams();
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  const [image, setImage] = useState(post ? post.image : ""); // 👈 nuevo estado

  useEffect(() => {
    if (mode === "edit" && id && !post) {
      const fetchPost = async () => {
        try {
          const response = await api.get(`api/v1/posts/${id}`);
          const fetchedPost = response.data;
          setTitle(fetchedPost.title);
          setBody(fetchedPost.body);
          setImage(fetchedPost.image || "");
        } catch (error) {
          console.error("Error al obtener el post:", error.message);
          Swal.fire("Error", "No se pudo cargar el post.", "error");
        }
      };
      fetchPost();
    }
  }, [id, mode, post]);

  const handleSubmit = async () => {
    try {
      let response;

      if (mode === "create") {
        response = await api.post("api/v1/posts", { 
          title, 
          body,
          image // 👈 ahora mandamos la URL a MongoDB
        });
        Swal.fire("Post publicado!", "Tu publicación se guardó con éxito.", "success");
      } else if (mode === "edit" && post) {
        response = await api.patch(`api/v1/posts/${post._id}`, { 
          title, 
          body,
          image 
        });
        Swal.fire("Post actualizado!", "Los cambios se guardaron con éxito.", "success");
      }

      if (mode === "create") {
        setTitle("");
        setBody("");
        setImage(""); // reset imagen
      }

      if (onSuccess) onSuccess(response.data.data);

    } catch (error) {
      console.error("Error al guardar post:", error.message);
      Swal.fire("Error", "Hubo un problema al guardar el post.", "error");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {mode === "create" ? "Crear Nuevo Post" : "Editar Post"}
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del post"
        className="w-full p-2 border rounded mb-3"
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Contenido del post"
        className="w-full p-2 border rounded mb-3"
      />

      {/* Subida de imagen */}
      <UploadImage onUpload={setImage} />

      {image && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Imagen seleccionada:</p>
          <img src={image} alt="preview" className="mt-2 max-w-xs rounded" />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
      >
        {mode === "create" ? "Publicar" : "Actualizar"}
      </button>
    </div>
  );
}
