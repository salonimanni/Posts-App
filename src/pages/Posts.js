import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import PostCard from "../Components/PostCard";

function Posts() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
   

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-green-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">All Posts</h1>

      {status === "loading" && <p className="text-center text-blue-600">Loading...</p>}
      {status === "failed" && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {status === "succeeded" &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default Posts;
