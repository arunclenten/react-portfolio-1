import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Ghlindia from "../assets/ghlindia.jpg";
import Ventures from "../assets/ventures.jpg";
import Concordtrustee from "../assets/logo_concord.webp";
import Jamin from "../assets/jamin.png";
import Agro from "../assets/agro.webp";
import Jvr from "../assets/jvr.png";

const projects = [
  {
    id: 1,
    name: "Ghlindia Asset",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, MySQL, jQuery, and Bootstrap.",
    image: Ghlindia,
    link: "https://ghlindia.com/",
  },
  {
    id: 2,
    name: "Ghlindia Ventures",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, MySQL, jQuery, and Bootstrap.",
    image: Ventures,
    link: "https://ghlindiaventures.com/",
  },
  {
    id: 3,
    name: "Concordtrustee",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
    image: Concordtrustee,
    link: "https://concordtrustee.com/",
  },
  {
    id: 4,
    name: "Jamin Properties",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
    image: Jamin,
    link: "https://jaminproperties.com/",
  },
  {
    id: 5,
    name: "Agro India",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
    image: Agro,
    link: "https://aagroindia.com/",
  },
  {
    id: 6,
    name: "JVR Resources",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
    image: Jvr,
    link: "https://www.jvrresources.com/",
  },
];

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      easing: "ease-in-out", // animation easing style
      once: true, // whether animation should happen only once
    });
  }, []);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover cursor-pointer"
                onClick={() => openModal(project.image)}
                data-aos="zoom-in"
              />
              <h3 className="text-2xl font-bold mb-2" data-aos="fade-down">{project.name}</h3>
              <p className="text-gray-400 mb-4" data-aos="fade-down">{project.technolagies}</p>
              <a 
                href={project.link} 
                className="inline-block bg-gradient-to-t from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" data-aos="fade-in">
          <div className="bg-white p-4 rounded-lg max-w-4xl max-h-4xl">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-black rounded-full p-2">X</button>
            <img src={currentImage} alt="Full view" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
