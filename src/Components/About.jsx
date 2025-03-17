import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import AboutImage from "../assets/arun-image.gif";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out", // Easing function for the animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="about" className="bg-black text-white lg:py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.img
            src={AboutImage}
            alt="Arun Resume"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 bg-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          />

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <p className="text-lg mb-8">
              A web developer and SEO specialist with one year of hands-on experience
              in PHP, HTML, CSS, JavaScript, and SEO optimization techniques.
              Currently expanding skills in React and the MERN stack. Eager to apply
              my expertise in web development and SEO to contribute effectively to
              innovative projects and help drive business growth through improved
              website performance and search engine rankings.
            </p>

            {/* Scrollable stats section */}
            <div className="mt-12 overflow-y-auto max-h-32 space-y-4" data-aos="fade-up">
              <div className="flex justify-between text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  data-aos="zoom-in"
                >
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500">
                    1+
                  </h3>
                  <p>Years Experience</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  data-aos="zoom-in"
                >
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500">
                    6+
                  </h3>
                  <p>Project Completed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  data-aos="zoom-in"
                >
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500">
                    2+
                  </h3>
                  <p>Happy Clients</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
