import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import api from "../../api";
import "./quill-custom.css";

const PostEditor = ({ mode = "create", post = null, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Inicializa valores si estamos en edición
  useEffect(() => {
    if (mode === "edit" && post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [mode, post]);

  // Toolbar básica
  const modules = {
    toolbar: [
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const formats = ["bold", "italic", "list", "bullet", "link"];

  const handleSubmit = async () => {
    try {
      let response;

      if (mode === "create") {
        response = await api.post("api/v1/posts", { title, body });
        Swal.fire("Post publicado!", "Tu publicación se guardó con éxito.", "success");
      } else if (mode === "edit" && post) {
        response = await api.patch(`api/v1/posts/${post._id}`, { title, body });
        Swal.fire("Post actualizado!", "Los cambios se guardaron con éxito.", "success");
      }

      // Reset solo en modo create
      if (mode === "create") {
        setTitle("");
        setBody("");
      }

      // Refrescar lista en el dashboard
      if (onSuccess) onSuccess(response.data.data);

    } catch (error) {
      console.error("Error al guardar post:", error.message);
      Swal.fire("Error", "Hubo un problema al guardar el post.", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">
        {mode === "create" ? "Crear Post" : "Editar Post"}
      </h1>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe el título aquí..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Contenido
        </label>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <ReactQuill
            value={body}
            onChange={setBody}
            theme="snow"
            modules={modules}
            formats={formats}
            className="editor-container"
            placeholder="Escribe tu post aquí..."
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        {mode === "create" ? "Publicar" : "Guardar cambios"}
      </button>
    </div>
  );
};

export default PostEditor;
