import React from "react";
import { ReactTyped as Typed } from "react-typed";
import HeroImage from "../assets/avater.jpg";

export const Hero = () => {
  const handleResumeClick = () => {
    // Open the resume file in a new tab
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, "_blank");
  };
  return (
    <section className="bg-black text-white text-center py-16" id="home">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Hero Image with Entrance Animation */}
        <img
          src={HeroImage}
          alt="Arun Clenten"
          className="mx-auto mb-8 w-48 h-48 rounded-full mt-10 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 animate-fade-in-up"
        />

        {/* Typing Effect for Title */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          <Typed
            strings={[
              "I'm ",
              "I'm Arun ",
              "I'm Arun Clenten",
              "I'm Arun Clenten, Web ",
              "I'm Arun Clenten, Web Developer",
            ]}
            typeSpeed={30}
            backSpeed={30}
            startDelay={500}
            loop={false}
            showCursor={false}
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"></span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 animate-fade-in mx-5">
          A Web Developer builds and maintains websites using technologies like
          HTML, CSS, JavaScript, and frameworks like React . They
          ensure sites are functional, user-friendly, and optimized for
          performance across devices.
        </p>

        {/* Action Buttons with Hover Effects */}
        <div className="mt-8 space-x-4">
          <a
            href="https://wa.me/6379055616?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
          >
            Contact Me
          </a>
          <button
            onClick={handleResumeClick}
            className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};
