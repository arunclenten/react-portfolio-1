import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email address.");
      return;
    } else if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_873sfgp", // Replace with your EmailJS service ID
        "template_u8u8nzh", // Replace with your EmailJS template ID
        {
          user_email: email,
          message: "Thank you for subscribing to our newsletter!",
        },
        "-RY-iK7BVFbx0Ix5F" // Replace with your EmailJS user ID
      );

      toast.success("Subscription successful! Confirmation email sent.");
      setEmail("");
    } catch (error) {
      toast.error("Failed to send confirmation email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Arunclenten</h3>
            <p className="text-gray-400"> Web Developer</p>
          </div>
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-r-lg"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Arun Clenten. All rights reserved.</p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/arunclenten/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arunclenten" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://wa.me/6379055616?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;