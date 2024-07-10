import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-300 text-black shadow-lg">
      <div className="container mx-auto p-0 flex justify-between items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`md:flex md:justify-start md:items-center md:p-4 md:space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-yellow-400 font-b px-3 py-2 rounded transition duration-300'
              : 'hover:bg-yellow-500 font-b hover:text-black px-3 py-2 text-xl md:text-2xl font-bold rounded transition duration-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalogue"
          className={({ isActive }) =>
            isActive
              ? 'bg-yellow-400 font-b px-3 py-2 rounded transition duration-300'
              : 'hover:bg-yellow-500 font-b hover:text-black px-3 py-2 text-xl md:text-2xl font-bold rounded transition duration-300'
          }
        >
          Catalogue
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'bg-yellow-400 font-b px-3 py-2 rounded transition duration-300'
              : 'hover:bg-yellow-500 font-b hover:text-black px-3 py-2 text-xl md:text-2xl font-bold rounded transition duration-300'
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
