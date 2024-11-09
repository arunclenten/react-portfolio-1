import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Employeeimage from "../assets/image-3.png";
import Image1 from "../assets/GHLVLOGO.jpg";
import Image2 from "../assets/logo.jpg";

const projects = [
  {
    id: 1,
    name: "Ghlindia Asset",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, MySQL, jQuery, and Bootstrap.",
    image: Image2,
    link: "https://ghlindia.com/",
  },
  {
    id: 2,
    name: "Ghlindia Ventures",
    technolagies: "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, MySQL, jQuery, and Bootstrap.",
    image: Image1,
    link: "https://ghlindiaventures.com/",
  },
  {
    id: 3,
    name: "Mini e-commerce",
    technolagies: "Developed a mini e-commerce site using the MERN stack in list the prodct and order the product (MongoDB, Express.js, React, Node.js)",
    image: Employeeimage,
    link: "https://github.com/arunclenten/e-commerce-project-mern",
  }
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
              <h3 className="text-2xl font-bold mb-2" data-aos="fade-right">{project.name}</h3>
              <p className="text-gray-400 mb-4" data-aos="fade-left">{project.technolagies}</p>
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
