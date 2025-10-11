import React from 'react';
// Import your project images here

import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

const projects = [
  {
    title: 'Hotel-Management',
    description: 'A full-stack hotel management solution built with MERN stack, featuring user authentication, room booking, and payment integration.',
    image: project1Image,
    liveLink: 'https://quickstay-seven-rho.vercel.app',
    githubLink: 'https://github.com/vibha32145/Hotel-Booking',
  },
  {
    title: 'Social-Media-Platform',
    description: 'A responsive social media platform built with MERN stack, featuring user authentication, real-time chat, and post management.',
    image: project2Image,
    liveLink: 'https://ping-up-ten-eta.vercel.app',
    githubLink: 'https://github.com/vibha32145/PingUP',
  },
  {
    title: 'Weather-App',
    description: 'A weather application built with React and Tailwind CSS, featuring real-time weather updates and a sleek user interface.',
    image: project3Image,
    liveLink: '#', // Link to itself or another version
    githubLink: 'https://github.com/vibha32145/Weather-App-with-dynamic',
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
   <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"> <img 
   src={project.image} 
   alt={project.title} 
   className="w-full h-56 object-cover object-center group-hover:opacity-80 transition-opacity duration-300" 
   />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;