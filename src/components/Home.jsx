import React from 'react';
import homeImage from '../assets/home.jpg';

const Home = () => {
  return (


//     <section id="home" className="relative bg-cover bg-center py-40" style={{ backgroundImage: "url('../assets/home.jpg')" }}>
//   {/* Gradient overlay to enhance content visibility */}
//   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

//   <div className="relative z-10 container mx-auto text-center text-white px-6">
//     <h1 className="text-5xl font-bold leading-tight mb-4">
//       Crafting Scalable Web Solutions for You
//     </h1>
//     <p className="mt-4 text-lg md:text-xl">
//       A passionate MERN Stack Developer
//     </p>
//     {/* Call to Action Button */}
//     <a
//       href="#projects"
//       className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//     >
//       View My Work
//     </a>
//   </div>
// </section>


// <section 
//   id="home" 
//   className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center py-20 relative overflow-hidden"
// > 


<section
  id="home"
  className="relative bg-cover bg-center py-40"
  style={{
    backgroundImage:`url(${homeImage})`, // Correct path to your image
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
> 

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 blur-sm"></div>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500 opacity-30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <h1 className="text-6xl font-extrabold leading-tight tracking-wide text-white">
      Crafting <span className="text-yellow-500">Scalable Web Solutions</span> for You
    </h1>
    <p className="mt-6 text-2xl text-white/90 font-light">
      A Passionate <span className="font-semibold text-yellow-500">MERN Stack Developer</span>
    </p>
    <a 
      href="#projects" 
      className="mt-8 inline-block bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform duration-300"
    >
      Explore My Work
    </a>
  </div>
</section>



   
  );
};

export default Home;

