import React from 'react';
import projectOne from '../assets/project1.png'
import projectTwo from '../assets/project2.png';
import projectThree from '../assets/project3.png';


const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-white">
      
  <div className="container mx-auto text-center p-10">
    <h2 className="text-4xl mt-10 font-semibold">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-10">
    


{/* Project 1 */}
<div className=" p-6 rounded-lg bg-white border-2 border-slate-300 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <img 
          src={projectThree}
          alt="Frontend Design"
          className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold mt-4">Time Tracker</h3>
        <p className="mt-2 text-gray-700">
        The Time Tracker Application is a dynamic and user-friendly web tool designed to enhance productivity and time management.
        </p>

        <a 
    href="https://lucent-entremet-1c50c9.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#041330] via-[#042f4f] to-[#055576] mt-4 mx-auto transition-transform duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11l4-4m0 0l-4-4m4 4H7"></path>
    </svg>
  </a>

      </div>




      {/* Project 2 */}
      <div className=" p-6 rounded-lg bg-white border-2 border-slate-300 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <img 
          src={projectTwo}
          alt="Frontend Design"
          className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold mt-4">Frontend Design</h3>
        <p className="mt-2 text-gray-700">
          The design was centered around a modern, responsive layout with a focus on user experience and aesthetics.
        </p>

        <a 
    href="https://lucent-entremet-1c50c9.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#041330] via-[#042f4f] to-[#055576] mt-4 mx-auto transition-transform duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11l4-4m0 0l-4-4m4 4H7"></path>
    </svg>
  </a>

      </div>

      {/* Project 3 */}
      <div className="p-6 rounded-lg bg-white border-2 border-slate-300 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <img 
          src={projectOne}
          alt="Frontend Design"
          className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold mt-4">Frontend Design</h3>
        <p className="mt-2 text-gray-700">
          The design was centered around a modern, responsive layout with a focus on user experience and aesthetics.
        </p>
        <a 
    href="https://lucent-entremet-1c50c9.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#041330] via-[#042f4f] to-[#055576] mt-4 mx-auto transition-transform duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11l4-4m0 0l-4-4m4 4H7"></path>
    </svg>
  </a>
      </div>
    </div>
  </div>
</section>

  )
}



export default Projects;
