import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if(loading) return;
  setLoading(true);
  
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    toast.success(data.message || 'Message sent successfully!');
    e.target.reset();
  } catch (err) {
    console.error(err);
    toast.error(err.message || 'Failed to send message');
  }
  finally{
    setLoading(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">Get In Touch</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out! I'm always open to new opportunities and collaborations.
        </p>

        <div className="flex justify-center space-x-6 text-4xl mb-12">
          <a href="mailto:guptavibhavinod@gmail.com" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500 transition duration-300">
            <FaEnvelope />
          </a>
          <a href="https://github.com/vibha32145" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vibha-gupta-257952296/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://x.com/vibha65961" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Optional: A simple contact form */}
        <div className="max-w-xl mx-auto p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Your message..."></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            >
             {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {/* Note: This form needs a backend service (e.g., Formspree, Netlify Forms, custom API) to actually send emails. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;