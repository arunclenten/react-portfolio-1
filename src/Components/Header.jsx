import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/image-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const links = document.querySelectorAll("nav a"); // Select all nav links

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            setActiveLink(`#${id}`);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section should be visible before it's considered "active"
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 navbar">
      <div className="container py-4 flex justify-between items-center relative">
        {/* Logo */}
        <img src={logoImage} alt="logo-image" />

        {/* Menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className={`${
              activeLink === "#home" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 " : "hover:text-gray-400"
            }`}
            onClick={() => handleLinkClick("#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`${
              activeLink === "#about" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 " : "hover:text-gray-400"
            }`}
            onClick={() => handleLinkClick("#about")}
          >
            About
          </a>
          <a
            href="#service"
            className={`${
              activeLink === "#service" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
            }`}
            onClick={() => handleLinkClick("#service")}
          >
            Service
          </a>
          <a
            href="#project"
            className={`${
              activeLink === "#project" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
            }`}
            onClick={() => handleLinkClick("#project")}
          >
            Project
          </a>
          <a
            href="#contact"
            className={`${
              activeLink === "#contact" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
            }`}
            onClick={() => handleLinkClick("#contact")}
          >
            Contact
          </a>
        </div>

        {/* Connect Me Button for Desktop */}
        <a
              href="https://wa.me/6379055616?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Connect Me
            </a>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              onClick={() => handleLinkClick("#home")}
              className={`${
                activeLink === "#home" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className={`${
                activeLink === "#about" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
              }`}
            >
              About
            </a>
            <a
              href="#service"
              onClick={() => handleLinkClick("#service")}
              className={`${
                activeLink === "#service" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
              }`}
            >
              Service
            </a>
            <a
              href="#project"
              onClick={() => handleLinkClick("#project")}
              className={`${
                activeLink === "#project" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
              }`}
            >
              Project
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`${
                activeLink === "#contact" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" : "hover:text-gray-400"
              }`}
            >
              Contact
            </a>
            <a
              href="https://wa.me/6379055616?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Connect Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
            