import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css'; // Basic Swiper styles

import 'swiper/css/pagination'; // Optional for pagination
import 'swiper/css/navigation'; // Optional for navigation



const Skills = () => {
  return (

    <section id="skills" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white">
  <div className="container mx-auto">
    <h2 className="text-4xl font-semibold mb-8 text-left">Technologies I Use</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Column - Technologies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {/* Technology Items */}
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-html5 text-4xl text-orange-600"></i>
          <p className="mt-2 text-lg font-medium">HTML</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-css3 text-4xl text-blue-600"></i>
          <p className="mt-2 text-lg font-medium">CSS</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-js text-4xl text-yellow-500"></i>
          <p className="mt-2 text-lg font-medium">JavaScript</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-react text-4xl text-sky-500"></i>
          <p className="mt-2 text-lg font-medium">React</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-solid fa-database text-4xl text-green-600"></i>
          <p className="mt-2 text-lg font-medium">MongoDB</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-node text-4xl text-green-500"></i>
          <p className="mt-2 text-lg font-medium">Node.js</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-node-js text-4xl text-green-400"></i>
          <p className="mt-2 text-lg font-medium">Express.js</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
          <i className="fa-brands fa-wordpress text-4xl text-blue-700"></i>
          <p className="mt-2 text-lg font-medium">WordPress</p>
        </div>
        <div className="p-4 border text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50">
        <i className="fa-brands fa-github text-4xl text-black"></i>
          <p className="mt-2 text-lg font-medium">Git & github</p>
          
        </div>
      </div>

      {/* Right Column - Content */}
      <div className='p-10'>
        <p className="text-lg text-gray-700 leading-relaxed">
          Over the years, I have gained hands-on experience in various technologies. My primary expertise lies in creating modern, responsive, and user-friendly web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). Additionally, I am well-versed in WordPress and other tools for web development. Here are some of the technologies I regularly work with:
        </p>
        <ul className="mt-4 list-disc list-inside text-left text-gray-700">
          <li>Building interactive user interfaces with React.</li>
          <li>Creating server-side applications using Node.js and Express.</li>
          <li>Designing and managing databases with MongoDB.</li>
          <li>Crafting pixel-perfect web designs with HTML5 and CSS3.</li>
          <li>Developing custom themes and plugins for WordPress.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

);
};



export default Skills;
