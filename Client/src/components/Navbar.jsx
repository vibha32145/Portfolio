import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          <a href="#hero">Vibha Gupta</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 pt-2 pb-4">
          <NavLink href="#about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#skills" mobile onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#projects" mobile onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink href="#contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-300
      ${mobile ? 'text-lg text-center' : 'text-lg'}
    `}
  >
    {children}
  </a>
);

export default Navbar;