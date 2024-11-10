'use client'; // Ensures client-side rendering for useState, useEffect, etc.

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex-1">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-section"
      >
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="profile-img w-full lg:w-1/3 mb-8 lg:mb-0"
          >
            <Image
              src="/about.png" // Replace with the correct path to your profile image
              alt="About Image"
              width={400}
              height={400}
              className="about-profile-img rounded-badge border-gray-300 object-cover mx-auto"
            />
          </motion.div>

          {/* About Text */}
          <div className="about-text w-full lg:w-2/3 text-center lg:text-left">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="about-heading text-5xl font-semibold text-gray-200 mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="about-description text-[24px] text-gray-500 mb-6 px-4 md:px-0"
            >
              I&apos;m Danish Haji, a dedicated web developer with a passion for creating dynamic, visually appealing,
              and user-friendly websites. With a keen eye for design and a solid understanding of modern web technologies,
              I enjoy transforming creative ideas into seamless digital experiences.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="about-description text-[22px] text-gray-500 italic px-4 md:px-0"
            >
              &quot; My goal is to continuously grow my skills and bring meaningful projects to life that provide value to users. 
              Let&apos;s build something great together! &quot;
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;
