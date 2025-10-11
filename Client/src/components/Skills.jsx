import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,  FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiC, SiCplusplus, SiVercel} from 'react-icons/si';

// Don't forget to install react-icons: npm install react-icons

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-600 dark:text-gray-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-blue-700" /> },
  { name: 'C', icon: <SiC className="text-blue-700" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-6xl mb-4">
                {skill.icon}
              </div>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;