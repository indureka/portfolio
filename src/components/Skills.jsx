import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper-bundle.min.css';

import 'swiper/css'; // Basic Swiper styles

import 'swiper/css/pagination'; // Optional for pagination
import 'swiper/css/navigation'; // Optional for navigation

// import { Autoplay } from 'swiper';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-left">Technologies I use</h2>
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Number of visible slides
          loop={true} // Enables looping of the carousel
          // autoplay={{ delay: 2000 }} // Auto sliding every 2 seconds
          // modules={[Autoplay]}  
          className="mySwiper"
        >
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-html5 text-4xl px-4"></i>HTML</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-css3 text-4xl px-4"></i>CSS</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-js text-4xl px-4"></i>JavaScript</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-react text-4xl px-4"></i> React</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-solid fa-database text-4xl px-4"></i>MongoDB</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-node text-4xl px-4"></i>Node.js</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-node-js text-4xl px-4"></i>Express.js</div></SwiperSlide>
          <SwiperSlide><div className="p-4 border text-3xl rounded-lg shadow-md hover:bg-gray-100">
          <i class="fa-brands fa-wordpress text-4xl px-4"></i>WordPress</div></SwiperSlide>
          {/* Add more skills here if needed */}
        </Swiper>
      </div>
    </section>
  );
};










// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-semibold mb-8">Skills</h2>
//         <div className="overflow-x-auto">
//         {/* <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"> */}

//         <ul className="flex space-x-10">
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">HTML</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">CSS</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">JavaScript</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">React</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">MongoDB</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">Node.js</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">Express.js</li>
//           <li className="p-4 border rounded-lg shadow-md hover:bg-gray-100">WordPress</li>
//         </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Skills;
