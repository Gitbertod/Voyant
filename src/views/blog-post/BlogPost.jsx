import styles from "./BlogPost.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api"; // 👈 tu helper axios
import { AvatarComponent } from "../../components/avatar/AvatarComponent";
import { CardComponent } from "../../components/Card/CardComponent";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPost = () => {
  const { id } = useParams(); // 👈 capturamos el id de la URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      try {
        const res = await api.get(`/api/v1/posts/${id}`);
        setPost(res.data.data); // 👈 depende cómo devuelves la data en tu backend
      } catch (error) {
        console.error("Error al cargar el post:", error.message);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p className="text-center mt-10">Cargando artículo...</p>;
  }

  return (
    <>
      {/* Imagen principal */}
      {post.image && <img className={styles.img} src={post.image} alt={post.title} />}

      {/* Contenido del post */}
      <div data-aos="fade-up" data-aos-duration="1000" className={styles.postContent}>
        <h1 className={styles.title}>{post.title}</h1>

        {/* Autor */}
        <div className="flex justify-start space-x-2 mt-4 mb-4 ml-4 text-yellow-300 font-bold">
          <AvatarComponent />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-500 dark:text-white">
              {post.user?.name.first} {post.user?.name.last} |
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              {post.user?.role}
            </cite>
          </div>
        </div>

        {/* Fecha */}
        <div className="flex justify-center space-x-2 mt-4 mb-4 text-yellow-300 font-bold">
          <span>{post.category || "Blog"}</span>
          <span>
            {new Date(post.createdAt).toLocaleDateString("es-PE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Cuerpo (puede venir en HTML o texto plano) */}
        <div className={styles.parrafoContainer}>
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-2 mt-8 px-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-yellow-300 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-yellow-400 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Artículos relacionados */}
      <div className="flex justify-center space-x-2 mt-20 mb-4 text-yellow-300 font-bold">
        <h3 className={styles.subtitle}>Más artículos relacionados:</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 items-center">
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default BlogPost;

