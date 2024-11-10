'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="contact-section"
      >
        <h2 className="text-4xl font-semibold text-center text-gray-300 mb-8">
          Get In Touch
        </h2>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact-info flex-1 mb-6 md:mb-0"
          >
            <div className="contact-info-item flex items-center space-x-4 mb-6">
              <FaPhone size={30} color="#0077b5" />
              <span className="text-lg">+923172745680</span>
            </div>
            <div className="contact-info-item flex items-center space-x-4 mb-6">
              <FaEnvelope size={30} color="#D44638" />
              <span className="text-lg">danish.haji111@gmail.com</span>
            </div>
            <div className="social-icons flex space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/danish-b5b26b190/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={40} color="#0077b5" />
              </motion.a>
              <motion.a
                href="https://github.com/DanishHaji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub size={40} color="#369" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaFacebook size={40} color="#4267B2" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact-form flex-1"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="contact-input w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="contact-input w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                required
                className="contact-textarea w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="contact-button w-full py-3 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-400 hover:text-black transition duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
