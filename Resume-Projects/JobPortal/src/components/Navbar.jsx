import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Employ<span className="text-blue-600">Link</span>
        </Link>
        <div className="flex items-center w-full max-w-md mx-auto border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full outline-none text-sm text-gray-700 bg-transparent"
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-green-600">
            Jobs
          </Link>
          <Link to="/login" className="hover:text-green-600">
            Login
          </Link>
          <Link to="/signup" className="hover:text-green-600">
            Signup
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-green-600"
          >
            Jobs
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-green-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-green-600"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
