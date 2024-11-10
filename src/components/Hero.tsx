'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from './Hero.module.css'; // Importing CSS module

const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="home">
      <section className={`${styles['hero-section']} relative flex items-center justify-center`}>
        <div className={`${styles.overlay} absolute inset-0`}></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative z-10 text-white px-6 sm:px-12">
          {/* Profile Image on Left */}
          <div
            className="lg:w-1/3 mb-4 sm:mb-6 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <img
              src="/profile.png"
              alt="Your Profile"
              className={`${styles['profile-img']} rounded-full border-4 border-white mx-auto lg:mx-0`}
            />
          </div>
          {/* Hero Content on Right */}
          <div
            data-aos="fade-up"
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-[#00FFFF] drop-shadow-lg">
              Hi, I'm Danish Haji
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto lg:mx-0 text-[#E5E5E5] font-medium tracking-wide leading-relaxed">
              "I am a passionate web developer dedicated to crafting visually engaging and highly functional websites.
              With a strong foundation in modern web technologies, I strive to build seamless, user-centered digital experiences
              that leave a lasting impression. My focus is on clean code, responsive design, and bringing creative visions to life."
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {/* Social Icons */}
              <a
                href="https://github.com/DanishHaji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl md:text-5xl text-[#6A5ACD] hover:text-[#00FFFF] transition-all duration-300"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/danish-b5b26b190/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl md:text-5xl text-[#6A5ACD] hover:text-[#00FFFF] transition-all duration-300"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              {/* Hire Me Button with Envelope Icon */}
              <a
                href="mailto:danish.haji111@gmail.com"
                className="inline-block bg-[#6A5ACD] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#00FFFF] hover:text-black transition-all duration-300 flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
                title="Hire Me via Email"
              >
                <FaEnvelope className="mr-2" /> Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
