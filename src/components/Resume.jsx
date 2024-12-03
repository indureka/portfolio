import React from 'react';

const Resume = () => {
  const resumeLink = '/src/assets/indureka_VA_resume.pdf'; // Provide the correct path
  return (
    <section id="resume" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Resume</h2>
        <p className="text-xl mb-6">Download my resume here:</p>
        <a href={resumeLink} download="Indureka_VA_Resume.pdf" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
