import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-lg mb-2">
          &copy; {new Date().getFullYear()} Vibha Gupta. All rights reserved.
        </p>
        <p className="text-sm">
          {/* Built with <span className="text-indigo-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>. */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;