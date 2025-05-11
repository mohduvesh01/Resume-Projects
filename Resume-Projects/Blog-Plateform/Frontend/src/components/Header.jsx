import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-wide"
        >
          📝 BlogPlatform
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-4">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/create" className={navLinkClass("/create")}>
            Create Post
          </Link>

          <Link to="/login" className={navLinkClass("/login")}>
            Login
          </Link>
          <Link to="/signup" className={navLinkClass("/signup")}>
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
