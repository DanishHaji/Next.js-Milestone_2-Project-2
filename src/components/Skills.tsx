import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaComments, FaUserFriends, FaLightbulb, FaHandsHelping, FaTasks } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
  <section id="skills">
    <section className="py-20 px-4 sm:px-10 bg-#333333 sm:[640px] md:[768px] lg:[1024px]">
      <h2 className="text-4xl font-bold text-highlight mb-12 text-center">Skills</h2>

      {/* Technical Skills */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
      <div className="skillsList grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Skill Item */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaHtml5 size={50} color="#E34F26" />
          <span className="mt-3 text-lg font-medium text-gray-500">HTML</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaCss3Alt size={50} color="#1572B6" />
          <span className="mt-3 text-lg font-medium text-gray-500">CSS</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaJsSquare size={50} color="#F7DF1E" />
          <span className="mt-3 text-lg font-medium text-gray-500">JavaScript</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <SiTypescript size={50} color="#007ACC" />
          <span className="mt-3 text-lg font-medium text-gray-500">TypeScript</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <SiNextdotjs size={50} color="#000000" />
          <span className="mt-3 text-lg font-medium text-gray-500">Next.js</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaReact size={50} color="#61DAFB" />
          <span className="mt-3 text-lg font-medium text-gray-500">React</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaNodeJs size={50} color="#339933" />
          <span className="mt-3 text-lg font-medium text-gray-500">Node.js</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <SiFramer size={50} color="#FF0054" />
          <span className="mt-3 text-lg font-medium text-gray-500">Framer Motion</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaGitAlt size={50} color="#F05032" />
          <span className="mt-3 text-lg font-medium text-gray-500">Git</span>
        </motion.div>
      </div>

      {/* Soft Skills */}
      <h3 className="text-2xl font-semibold mb-6 mt-12 text-center">Soft Skills</h3>
      <div className="skillsList grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Skill Item */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaComments size={50} color="#6D4C41" />
          <span className="mt-3 text-lg font-medium text-gray-500">Communication</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaUserFriends size={50} color="#4CAF50" />
          <span className="mt-3 text-lg font-medium text-gray-500">Teamwork</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaLightbulb size={50} color="#FFEB3B" />
          <span className="mt-3 text-lg font-medium text-gray-500">Problem Solving</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaHandsHelping size={50} color="#FF5722" />
          <span className="mt-3 text-lg font-medium text-gray-500">Adaptability</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="skillItem flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-200"
        >
          <FaTasks size={50} color="#607D8B" />
          <span className="mt-3 text-lg font-medium text-gray-500">Time Management</span>
        </motion.div>
      </div>
    </section>
  </section>
  );
};

export default Skills;
