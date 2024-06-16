/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 py-4 bg-white shadow-md relative z-50">
      <div className="w-12 h-12 sm:w-16 sm:h-16">
        <img
          src="src\assets\images\leeza.webp"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:flex gap-4">
        <h6 className="hover:text-purple-300 cursor-pointer">Home</h6>
        <h6 className="hover:text-purple-300 cursor-pointer">Service</h6>
        <h6 className="hover:text-purple-300 cursor-pointer">Contact</h6>
        <h6 className="hover:text-purple-300 cursor-pointer">Blog</h6>
        <h6 className="hover:text-purple-300 cursor-pointer">About</h6>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-40">
          <h6 className="hover:text-purple-300 cursor-pointer">Home</h6>
          <h6 className="hover:text-purple-300 cursor-pointer">Service</h6>
          <h6 className="hover:text-purple-300 cursor-pointer">Contact</h6>
          <h6 className="hover:text-purple-300 cursor-pointer">Blog</h6>
          <h6 className="hover:text-purple-300 cursor-pointer">About</h6>
        </div>
      )}
    </div>
  );
};

export default Navbar;
