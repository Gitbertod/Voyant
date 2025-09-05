import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import api from "../../api";
import "./quill-custom.css"; // 👈 aquí agregamos estilos extra

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Toolbar básica
  const modules = {
    toolbar: [
      ["bold", "italic"], // negrita, cursiva
      [{ list: "ordered" }, { list: "bullet" }], // listas
      ["link"], // enlaces
    ],
  };

  const formats = ["bold", "italic", "list", "bullet", "link"];

  const handleSubmit = async () => {
    try {
      const newPost = { title, body };

      const response = await api.post("api/v1/posts", newPost);
      console.log("Post creado:", response.data.data);

      setTitle("");
      setBody("");

      Swal.fire({
        title: "Post publicado!",
        text: "Tu publicación se guardó con éxito.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al crear post:", error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">Crear Post</h1>

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
        Publicar
      </button>
    </div>
  );
};

export default PostEditor;

