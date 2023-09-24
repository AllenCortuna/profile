import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Navbar</div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          {/* Your navigation links go here */}
          <a href="#" className="text-white hover:bg-blue-700 px-4 py-2">Home</a>
          <a href="#" className="text-white hover:bg-blue-700 px-4 py-2">About</a>
          <a href="#" className="text-white hover:bg-blue-700 px-4 py-2">Services</a>
          <a href="#" className="text-white hover:bg-blue-700 px-4 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

