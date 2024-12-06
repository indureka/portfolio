import React from 'react';



const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#041330] to-[#042f4f] border-b-2 border-[#14f0ff] text-white p-5 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-3xl font-extrabold text-white hover:text-yellow-500 transition-colors duration-300">
          Indureka V.A.
        </a>
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-lg hover:text-yellow-500 transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="text-lg hover:text-yellow-500 transition-colors duration-300">About Me</a></li>
          <li><a href="#skills" className="text-lg hover:text-yellow-500 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="text-lg hover:text-yellow-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#resume" className="text-lg hover:text-yellow-500 transition-colors duration-300">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};


// const Header = () => {
//   return (
//     <header className="bg-white text-gray-950 p-5 shadow-md sticky top-0 z-50">
//       <nav className="container mx-auto flex justify-between items-center">
//         <a href="#home" className="text-2xl font-bold">Indureka V.A.</a>
//         <ul className="flex space-x-6">
//           <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-500">About Me</a></li>
//           <li><a href="#skills" className="hover:text-yellow-500">Skills</a></li>
//           <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
//           <li><a href="#resume" className="hover:text-yellow-500">Resume</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default Header;
