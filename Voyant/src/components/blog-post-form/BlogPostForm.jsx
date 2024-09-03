import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom"

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {user,logout, loading} = useAuth()

  const navigate = useNavigate("/register");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del post al servidor o realizar otras acciones

    const post = {
      title,
      body: content,
      userId: "79c1b7e3-46e4-4dc7-b3cb-77a34e18e854",
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
        //Limpio el formulario
        setTitle("");
        setContent("");
      } else {
        console.error("Error al crear el post");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  if(loading) return <h1>Loading</h1>
  console.log(user)
  return (
    <div className="max-w-md mx-auto p-4">
      <button className="bg-yellow-400 w-20" onClick={handleLogout}>
        Logout
      </button>
      <h2 className="text-xl font-semibold mb-4">Bienvenido {  user.displayName || user.email}</h2>
      <img src={user.photoURL}></img>
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
            onChange={handleTitleChange}
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
            onChange={handleContentChange}
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
