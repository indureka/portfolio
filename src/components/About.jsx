import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side (Content) */}
        <div className="md:w-1/2 text-center md:text-left px-10">
          <h2 className="text-4xl font-semibold">About</h2>
         
          <p className="mt-4 text-lg text-gray-700">
            As a passionate MERN stack developer, I specialize in creating dynamic and scalable web applications. With a strong foundation in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I thrive on turning ideas into user-friendly digital experiences.
          </p>
          <p className="mt-4 text-lg text-gray-700">I’m constantly learning and evolving to stay ahead in the ever-changing world of technology. Let’s build something amazing together!

          </p>
        </div>

        {/* Right side (Image) */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
             src={ aboutImage }
            alt="Your Image" 
            className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg m-20" 
          />
        </div>
      </div>
    </section>
  );
};


export default About;
