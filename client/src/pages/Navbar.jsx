import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            My Blog
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links - Hidden on Mobile, Shown on larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/signin" className="text-white hover:text-gray-300">
              Sign In
            </Link>
            <Link to="/signup" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Shown when Hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block text-white py-2 hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/signin"
              className="block text-white py-2 hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block text-white py-2 hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
            <Link
              to="/dashboard"
              className="block text-white py-2 hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
