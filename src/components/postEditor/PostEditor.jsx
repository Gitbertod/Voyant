import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import UploadImage from "../uploadImage/UploadImage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./PostEditor.module.css";

export default function PostEditor({ mode = "create", post = null, onSuccess }) {
  const { id } = useParams();
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  const [image, setImage] = useState(post ? post.image : "");

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
        response = await api.post("api/v1/posts", { title, body, image });
        Swal.fire("Post publicado!", "Tu publicación se guardó con éxito.", "success");
      } else if (mode === "edit" && post) {
        response = await api.patch(`api/v1/posts/${post._id}`, { title, body, image });
        Swal.fire("Post actualizado!", "Los cambios se guardaron con éxito.", "success");
      }

      if (mode === "create") {
        setTitle("");
        setBody("");
        setImage("");
      }

      if (onSuccess) onSuccess(response.data.data);
    } catch (error) {
      console.error("Error al guardar post:", error.message);
      Swal.fire("Error", "Hubo un problema al guardar el post.", "error");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {mode === "create" ? "Crear Nuevo Post" : "Editar Post"}
      </h2>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del post"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Contenido</label>
        <ReactQuill
          theme="snow"
          value={body}
          onChange={setBody}
          className={styles.editor}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Imagen destacada</label>
        <UploadImage onUpload={setImage} />
        {image && (
          <div className={styles.previewWrapper}>
            <p className={styles.previewLabel}>Vista previa:</p>
            <img src={image} alt="preview" className={styles.previewImage} />
          </div>
        )}
      </div>

      <button onClick={handleSubmit} className={styles.button}>
        {mode === "create" ? "Publicar" : "Actualizar"}
      </button>
    </div>
  );
}
