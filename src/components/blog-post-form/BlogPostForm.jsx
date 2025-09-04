import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body: content,
      userId: user?.uid || "79c1b7e3-46e4-4dc7-b3cb-77a34e18e854",
    };

    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        console.log("Post creado exitosamente");
        setTitle("");
        setContent("");
      } else {
        console.error("Error al crear el post");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (!user) return <h1>No hay usuario logueado</h1>;

  return (
    <div className="max-w-md mx-auto p-4">
      
      <h2 className="text-xl font-semibold mb-4">
        Bienvenido {user.displayName || user.email}
      </h2>
      {user.photoURL && <img src={user.photoURL} alt="User avatar" />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Título:
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">
            Contenido:
          </label>
          <textarea
            id="content"
            className="w-full border rounded p-2"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;
