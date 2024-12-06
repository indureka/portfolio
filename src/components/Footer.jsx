import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Built by Indureka V.A.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/indureka-arulprakasam-7a78582a9/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/indureka/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaGithub size={24} />
          </a>
          <a href="mailto:induarulprakasam94@gmail.com" className="hover:text-yellow-500">
            <FaEnvelope size={24} />
          </a>
        </div>
        <hr />
        <p className="text-sm mt-8">© {new Date().getFullYear()} Indureka V.A. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
