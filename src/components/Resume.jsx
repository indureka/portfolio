import React from 'react';

const Resume = () => {
  const resumeLink = '/src/assets/indureka_VA_resume.pdf'; // Provide the correct path
  return (

    <section id="resume" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white text-center">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-gray-800">Resume</h2>
    <p className="text-xl text-gray-700 mb-8">Click below to download my latest resume and explore my professional journey!</p>
    <div className="relative inline-block group">
      <a 
        href={resumeLink} 
        download="Indureka_VA_Resume.pdf" 
        className="relative z-10 bg-yellow-500 text-white py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105 hover:bg-yellow-600"
      >
        Download Resume
      </a>
      <span 
        className="absolute top-0 left-0 w-full h-full rounded-lg transform scale-105 transition-transform duration-300 group-hover:scale-110"
      ></span>
    </div>
    <p className="mt-8 text-gray-500 italic">
      "Feel free to reach out if you have any questions or exciting opportunities to discuss!"
    </p>
  </div>
</section>


   
  );
};



export default Resume;


