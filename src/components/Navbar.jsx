import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-primary">JADAV JYOTHI</div>

          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-dark hover:text-primary font-medium transition-colors">Home</a></li>
            <li><a href="#about" className="text-dark hover:text-primary font-medium transition-colors">About</a></li>
            <li><a href="#projects" className="text-dark hover:text-primary font-medium transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-dark hover:text-primary font-medium transition-colors">Skills</a></li>
            <li><a href="#contact" className="text-dark hover:text-primary font-medium transition-colors">Contact</a></li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
