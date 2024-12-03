import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-5 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Indureka V.A.</a>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-400">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
