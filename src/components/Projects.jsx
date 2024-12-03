import React from 'react';
import ImageOne from '../assets/1.jpg';
import ImageTwo from '../assets/2.jpg';
import ImageThree from '../assets/3.jpg';

const Projects = () => {
  return (


    <section id="projects" className="py-20 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-8">My Works</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Project 1 */}
      <div className="bg-sky-300 p-4 rounded-lg shadow-md">
      <img 
             src={ ImageTwo }
            alt="Your Image" 
            className="w-[250px] h-[250px] object-contain rounded-lg shadow-lg m-8" 
          />
        <h3 className="text-2xl font-semibold">Time Tracker</h3>
        <p className="mt-4">The Time Tracker Application is a dynamic and user-friendly web tool designed to enhance productivity and time management.</p>
        <a href="https://lucent-entremet-1c50c9.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl inline-block text-blue-950 hover:underline">
          View Project
        </a>
      </div> 
      {/* Project 2 */}
      <div className="bg-sky-300 p-6 rounded-lg shadow-md">
      <img 
             src={ ImageOne }
            alt="Your Image" 
            className="w-[250px] h-[250px] object-contain rounded-lg shadow-lg m-8" 
          />
        <h3 className="text-2xl font-semibold">Frontend Design</h3>
        <p className="mt-4">The design was centered around a modern, responsive layout with a focus on user experience and aesthetics.</p>
        <a href="https://brilliant-hotteok-79c410.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl inline-block text-blue-950 hover:underline">
          View Project
        </a>
      </div>
      {/* Project 3 */}
      <div className="bg-sky-300 p-6 rounded-lg shadow-md">
      <img 
             src={ ImageThree }
            alt="Your Image" 
            className="w-[250px] h-[250px] object-contain rounded-lg shadow-lg m-8" 
          />
        <h3 className="text-2xl font-semibold">Frontend Design</h3>
        <p className="mt-4 ">The design was centered around a modern, responsive layout with a focus on user experience and aesthetics.</p>
        <a href="https://golden-toffee-3512b7.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl inline-block text-blue-950 hover:underline">
          View Project
        </a>
      </div>
    </div>
  </div>
</section>







    // <section id="projects" className="py-20 bg-gray-100">
    //   <div className="container mx-auto text-center">
    //     <h2 className="text-4xl font-semibold mb-8">My Works</h2>
    //     <div className="space-y-6">
    //       <div className="bg-white p-6 rounded-lg shadow-md">
    //         <h3 className="text-2xl font-semibold">Time Tracker</h3>
    //         <p className="mt-4">The Time Tracker Application is a dynamic and user-friendly web tool designed to enhance productivity and time management. This application allows users to track the time spent on various tasks and projects, providing insightful visualizations and detailed reports. </p>
    //         <a href="link-to-project" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
    //           View Project
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;
