import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vibha Gupta</span>, a passionate web developer with 6 months of experience building dynamic and responsive web applications. My journey into programming started with a fascination for how things work on the internet, which quickly evolved into a love for creating intuitive user experiences and robust backend systems.
          </p>
          <p>
            I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy tackling complex problems to deliver clean, efficient, and scalable solutions. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me [reading some motivational books, e.g., Atomic Habits, Rich Dad Poor Dad, Psychology of Money]. I believe in continuous learning and bringing creativity to every project I undertake.
          </p>
          <a
            href="https://www.linkedin.com/in/vibha-gupta-257952296/overlay/1760329655319/single-media-viewer/?profileId=ACoAAEev7-MBNW-uIGKjO9x2Yf7BtK9sCLsScCg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;