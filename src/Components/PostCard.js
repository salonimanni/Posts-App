import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-in-out h-full">
        <h2 className="text-xl font-bold text-blue-800 mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.body.slice(0, 120)}...</p>
      </div>
    </Link>
  );
}

export default PostCard;
