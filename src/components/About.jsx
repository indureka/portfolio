import React from 'react';
import aboutImage from '../assets/profile.jpeg';

const About = () => {
  return (
    <section
      id="about" 
    className="bg-white py-10 text-gray-800 overflow-hidden"
  >

      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left side (Content) */}
        <div className="md:w-1/2 text-center md:text-left md:pl-10 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 opacity-90 mb-6">
            I’m a passionate MERN stack developer with a strong focus on creating scalable and dynamic web applications. I bring ideas to life by building responsive, user-friendly digital experiences.
          </p>
          <p className="text-lg text-gray-700 opacity-80">
            Constantly learning and evolving with technology, I’m committed to delivering high-quality web solutions and excited to collaborate on innovative projects.
          </p>
        </div>

        {/* Right side (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-70 h-80 p-2 bg-white rounded-lg shadow-xl overflow-hidden">

          <img 
              src={aboutImage}
              alt="Indu's Image"
              className="w-full h-full object-contain rounded-lg"
            />
 

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;










