import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the AOS library

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Set duration of animation
      easing: "ease-out-back",
      delay: 100,
    });
  }, []);

  // Array for projects
  const projects = [
    {
      id: 1,
      name: "Static Resume",
      description: "A well-designed, static resume template created using HTML, CSS, and TypeScript for a clean, professional look.",
      image: "/project1.png",
      languages: ["HTML", "CSS", "TypeScript", "JavaScript"]
    },
    {
      id: 2,
      name: "Birthday Wish Card",
      description: "An interactive birthday card application built with React, offering a personalized greeting experience.",
      image: "/project2.png",
      languages: ["Next.js","HTML","Tailwind","TypeScript","JavaScript"]
    },
    {
      id: 3,
      name: "Todo App",
      description: "A functional to-do list app made with Next.js, allowing users to manage tasks with ease and efficiency.",
      image: "/project3.png",
      languages: ["React","Node.js", "CSS", "TypeScript","JavaScript"]
    },
    {
      id: 4,
      name: "Resume Builder",
      description: "A dynamic resume builder app that enables users to create and style resumes interactively.",
      image: "/project4.png",
      languages: ["HTML", "CSS", "TypeScript","JavaScript"]
    },
    {
      id: 5,
      name: "Weather Widget",
      description: "A real-time weather widget built with Next.js, offering accurate and up-to-date weather information.",
      image: "/project5.png",
      languages: ["Next.js","HTML", "TypeScript","JavaScript"]
    },
    {
      id: 6,
      name: "Countdown Timer",
      description: "A customizable countdown timer built with Next.js, perfect for tracking time to events or deadlines.",
      image: "/project6.png",
      languages: ["Next.js", "HTML", "CSS","TypeScript","JavaScript"]
    },
  ];

  return (
  <section id="project">
    <section className="py-20 bg-base-200 text-center sm:[640px] md:[768px] lg:[1024px]">
      <h2 className="text-4xl font-bold text-highlight mb-12" data-aos="fade-up">
       My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="relative group"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            {/* Project Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>

            {/* Project Info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <h3 className="text-3xl font-bold text-blue-300">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4 flex gap-2 justify-center">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-sm ${
                      lang === "HTML"
                        ? "bg-orange-500"
                        : lang === "CSS"
                        ? "bg-blue-500"
                        : lang === "JavaScript"
                        ? "bg-yellow-500"
                        : lang === "React"
                        ? "bg-blue-600"
                        : lang === "Node.js"
                        ? "bg-green-600"
                        : lang === "HTML"
                        ? "bg-red-600"
                        : lang === "TypeScript"
                        ? "bg-purple-700"
                        : lang === "Python"
                        ? "bg-blue-400"
                        : lang === "Next.js"
                        ? "bg-red-500"
                        : lang === "Tailwind"
                        ? "bg-teal-500"
                        : lang === "Vue"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </section>
  );
};

export default Projects;
