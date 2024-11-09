import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const service = [
  {
    id: 1,
    name: "Web Technologies",
    description: "HTML, CSS, JavaScript, jQuery, PHP",
  },
  {
    id: 2,
    name: "Frontend",
    description: "React.js, Bootstrap, Tailwind CSS",
  },
  {
    id: 3,
    name: "Backend",
    description: "Node.js, Express.js, PHP",
  },
  {
    id: 4,
    name: "Database",
    description: "MongoDB, MySQL",
  },
  {
    id: 5,
    name: "SEO Skills",
    description:
      "Keyword Research, On-Page SEO, Content Optimization, Technical SEO, Google Analytics, Search Console",
  },
  {
    id: 6,
    name: "Version Control",
    description: "Git, GitHub",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      offset: 100, // Offset to trigger animation
      easing: "ease-in-out", // Easing function for the animations
      once: false, // Repeats animation on scroll
    });
  }, []);

  return (
    <section className="bg-black text-white lg:py-20 pt-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transition-transform duration-300"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="500"
              data-aos-delay={index * 100}
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500">
                {service.name}
              </h3>
              <ul className="mt-2 text-gray-300 list-disc pl-5">
                {service.description.split(", ").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
