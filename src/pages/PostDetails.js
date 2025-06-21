import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === parseInt(id))
  );

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-red-600 text-xl">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to Posts
      </button>
      <h1 className="text-4xl font-bold text-blue-800">{post.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
    </div>
  );
}

export default PostDetails;

