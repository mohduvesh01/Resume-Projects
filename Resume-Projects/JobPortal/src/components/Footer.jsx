import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">EmployLink</h2>
          <p className="text-sm text-gray-400">
            Connecting talents with opportunities. Your future starts here.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:underline">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:underline">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-white" />
            </a>
            <a href="#">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EmployLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
