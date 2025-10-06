

import React from 'react';

const Hero = () => {
  return (
    
    <section
      id="home"
      className="w-screen min-h-screen pt-24 
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 flex flex-col justify-center items-center text-center"
    >
      {/* INNER CONTENT */}
      <div className="px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">JADAV JYOTHI</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          I create beautiful, responsive, and user-friendly web applications using modern
          technologies like React, JavaScript, and Tailwind CSS.
        </p>

        <div className="mt-8 flex space-x-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-primary px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
