import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await emailjs.send(
          "service_873sfgp",
          "template_u0rqe43",
          {
            to_email: formData.email,
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "-RY-iK7BVFbx0Ix5F"
        );

        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!", {
          onClose: () => setFormData({ name: "", email: "", message: "" }),
        });
      } catch (error) {
        console.error("Email sending failed:", error);
        toast.error("Failed to send the email. Please try again later.");
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="bg-black text-white lg:py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>Collaboration starts here. Let’s connect!</p>
            <div className="mb-4 mt-8">
              <a
                href="mailto:Arunclenten@gmail.com"
                className="hover:underline flex items-center"
              >
                <FaEnvelope className="text-green-400 mr-2" />
                arunclenten@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <a
                href="tel:+916379055616"
                className="hover:underline flex items-center"
              >
                <FaPhone className="text-green-400 mr-2" />
                +91 6379055616
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
              <span>Chennai</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 mt-5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}

                <label htmlFor="email" className="block mb-2 mt-5">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <label htmlFor="message" className="block mb-2 mt-5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white lg:w-[40%] md:w-[40%] w-full transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
