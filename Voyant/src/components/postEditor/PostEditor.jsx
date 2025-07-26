import React, { useEffect, useState } from "react";
import api from "../../api";
import styles from "./PostEditor.module.css";
import Swal from "sweetalert2";

const PostEditor = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    try {
      const newPost = {
        userId,
        title,
        body,
      };

      const response = await api.post("/posts", newPost);
      console.log("Post creado:", response.data.data);

      //Limpiar formulario
      setUserId("");
      setTitle("");
      setBody("");
      
      Swal.fire({
        title: "Post publicado!",
        text: "You clicked the button!",
        icon: "success",
      });

    } catch (error) {
      console.error("Error al crear post:", error.message);
    }
  };

  return (
    <div>
      <div className="flex">
        <label className="font-medium">User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mt-1 border px-2 py-1 rounded max-w-sm"
        ></input>
      </div>

      <div className="flex">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <label>Body</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit} className={styles.button}>
        Publicar
      </button>
    </div>
  );
};

export default PostEditor;
