import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-grow px-6 py-20 text-center bg-gradient-to-br from-blue-100 to-green-50">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          🚀 Welcome to Edvanta Posts App
        </h1>
       <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
  Dive into a collection of <span className="font-semibold text-blue-800">interesting posts</span> where you can read and explore different types of content — from thoughts and ideas to unique stories. Click on any post to learn more!
</p>

        <Link
          to="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;


