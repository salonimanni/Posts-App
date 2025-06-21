import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex items-center justify-between border-b sticky top-0 z-10">
  <div className="flex items-center gap-3">
    
    <img src="/168.jpg" alt="Logo" className="w-8 h-8" />
    <span className="text-xl font-bold text-blue-700">Edvanta App</span>
  </div>

  <div className="flex gap-6">
    <Link to="/" className="text-lg font-medium text-blue-600 hover:underline">
      Home
    </Link>
    <Link to="/posts" className="text-lg font-medium text-blue-600 hover:underline">
      Posts
    </Link>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>

      <footer className="bg-white border-t mt-12 p-4 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Edvanta Posts App. Built  by Saloni Manni
        </footer>

    </div>
  );
}

export default App;
