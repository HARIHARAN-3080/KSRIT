import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="bg-[#061e3e] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-[#facc15] tracking-wide">
          IT Conference 2025
        </div>

        {/* Hamburger menu - mobile only */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      {/* Navigation Links */}
<div
  className={`
    ${isOpen ? 'block' : 'hidden'} 
    md:flex md:space-x-8 md:text-sm md:items-center md:font-medium
    absolute md:static bg-[#061e3e] md:bg-transparent w-full left-0 md:w-auto top-full md:top-auto px-4 md:px-0 py-4 md:py-0
    shadow-md md:shadow-none
  `}
>
  <Link
    to="/"
    onClick={() => setIsOpen(false)}
    className="block md:inline-block py-2 md:py-0 hover:text-[#fb923c] transition"
  >
    Home
  </Link>
  <Link
    to="/updates"
    onClick={() => setIsOpen(false)}
    className="block md:inline-block py-2 md:py-0 hover:text-[#fb923c] transition"
  >
    Updates
  </Link>
  <Link
    to="/department"
    onClick={() => setIsOpen(false)}
    className="block md:inline-block py-2 md:py-0 hover:text-[#fb923c] transition"
  >
    Department
  </Link>

  {/* Admin Login hidden on mobile */}
  <Link
    to="/admin/login"
    onClick={() => setIsOpen(false)}
    className="hidden md:inline-block py-2 md:py-0 hover:text-[#fb923c] transition"
  >
    Admin Login
  </Link>

  {/* Register Button */}
  <Link
    to="/register"
    onClick={() => setIsOpen(false)}
    className="block md:inline-block bg-[#fb923c] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#f97316] transition"
  >
    Register
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
