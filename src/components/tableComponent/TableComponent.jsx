import { useEffect, useState } from "react";
import api from "../../api";
import { Avatar, Modal } from "flowbite-react";
import PostEditor from "../postEditor/PostEditor";

export function TableComponent() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await api.get("api/v1/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching post:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const confirmDeletePost = (post) => {
    setPostToDelete(post);
    setIsDeleteModalOpen(true);
  };

  const handleDeletePost = async () => {
    if (!postToDelete) return;
    try {
      await api.delete(`api/v1/posts/${postToDelete._id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postToDelete._id));
      setIsDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (error) {
      console.error("Error al eliminar el post", error.message);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingPost(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                <br />
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleTimeString("es-PE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </td>

              {/* Usuario */}
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <div className="flex items-start">
                  <Avatar img="/vicAvatar.jpg" rounded>
                    <div className="space-y-1 font-medium dark:text-white text-left">
                      <div>{post.user?.name?.first}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.user?.email}
                      </div>
                    </div>
                  </Avatar>
                </div>
              </td>

              {/* Título */}
              <td className="px-6 py-4">{post.title}</td>

              {/* Acciones */}
              <td className="px-6 py-4 flex gap-2">
                <button
                  onClick={() => handleEditPost(post)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => confirmDeletePost(post)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de edición */}
      <Modal show={isModalOpen} onClose={handleCloseModal} size="4xl">
        <Modal.Header>Editar Post</Modal.Header>
        <Modal.Body>
          {editingPost && (
            <PostEditor
            mode="edit"
            post={editingPost}
            onSuccess={() => {
              fetchPosts();
              handleCloseModal();
            }}
            />
          )}
        </Modal.Body>
      </Modal>

      {/* Modal de confirmación de eliminación */}
      <Modal show={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <Modal.Header>Confirmar eliminación</Modal.Header>
        <Modal.Body>
          <p className="text-gray-600 dark:text-gray-300">
            ¿Estás seguro de que deseas eliminar el post:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              "{postToDelete?.title}"
            </span>
            ? Esta acción no se puede deshacer.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleDeletePost}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            Eliminar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
