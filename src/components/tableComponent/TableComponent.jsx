import { useEffect, useState } from "react";
import api from "../../api";
import { Avatar } from "flowbite-react";
import DOMPurify from "dompurify";

export function TableComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("api/v1/posts");
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    };
    fetchPost();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await api.delete(`api/v1/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error al eliminar el post", error.message);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Título
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {/* Fecha */}
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                {new Date(post.createdAt).toLocaleDateString("es-PE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                <br></br>
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleTimeString("es-PE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </td>

              {/* Usuario */}
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Avatar img="/vicAvatar.jpg" rounded>
                  <div className="space-y-1 font-medium dark:text-white">
                    <div>{post.user?.name?.first}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.user?.email}
                    </div>
                  </div>
                </Avatar>
              </td>

              {/* Título */}
              <td className="px-6 py-4">{post.title}</td>

              {/* Body con DOMPurify */}
              {/* <td
                className="px-6 py-4 max-w-xs overflow-hidden text-ellipsis"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.body),
                }}
              /> */}

              {/* Acciones */}
              <td className="px-6 py-4 text-right flex gap-2 justify-end">
                <button
                  onClick={() => handleEditPost(post._id)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeletePost(post._id)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
