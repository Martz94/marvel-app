import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 to-red-800 p-4 fixed top-0 right-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link to="/">
        <img src="/logo-marvel.png" alt="Marvel Logo" className="h-7 sm:h-10 animate-pulse" />
        </Link>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/"  className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300">Home</Link>
          <Link to="/comics" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300">Comics</Link>
          <Link to="/series" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300">Series</Link>
          <Link to="/characters" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300">Characters</Link>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden absolute top-16 left-0 w-full bg-red-600 shadow-md`}>
          <div className="flex flex-col space-y-2 py-4 px-6">
            <Link to="/" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300" onClick={toggleMenu}>Home</Link>
            <Link to="/comics" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300" onClick={toggleMenu}>Comics</Link>
            <Link to="/series" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300" onClick={toggleMenu}>Series</Link>
            <Link to="/characters" className="text-white p-2 hover:bg-white hover:text-red-500 rounded-md hover:shadow-lg hover:shadow-neutral-300" onClick={toggleMenu}>Characters</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

