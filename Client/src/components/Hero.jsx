import React from 'react';
import profilePic from '../assets/profile1.jpeg'; // Make sure to add your profile image

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex items-center justify-center p-6">
      {/* Background circles for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 text-center md:text-left">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in-up">
            Hi, I'm <span className="text-yellow-300">Vibha Gupta</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-light animate-fade-in-up animation-delay-500">
            A passionate <span className="font-semibold">Web Developer</span>
          </p>
          <p className="mt-6 text-lg max-w-lg mx-auto md:mx-0 animate-fade-in-up animation-delay-1000">
            Building elegant and efficient web solutions with modern technologies.
          </p>
          <div className="mt-10 flex justify-center md:justify-start space-x-4 animate-fade-in-up animation-delay-1500">
            <a
              href="#projects"
              className="px-8 py-3 bg-yellow-400 text-indigo-800 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in-right animation-delay-2000">
          <img
            src={profilePic}
            alt="Your Name - Profile"
            className="w-65 9-65 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;