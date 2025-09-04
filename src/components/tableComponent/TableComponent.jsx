import { useEffect, useState } from "react";
import api from "../../api";
import PostEditor from "../postEditor/PostEditor";
import { Avatar } from "flowbite-react";

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
              email
            </th>
            <th scope="col" className="px-6 py-3">
              Titulo
            </th>
            <th scope="col" className="px-6 py-3">
              Body
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
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Avatar img="/images/people/profile-picture-5.jpg" rounded>
                  <div className="space-y-1 font-medium dark:text-white">
                    <div>{post.user.name.first}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.user.email}
                    </div>
                  </div>
                </Avatar>
              </td>
              <td className="px-6 py-4">{post.title}</td>
              <td className="px-6 py-4">{post.body}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeletePost(post._id)}
                  className="text-red-600 hover:underline"
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
