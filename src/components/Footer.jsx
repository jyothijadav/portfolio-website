import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-300 mb-2">
                            &copy; {currentYear} Jyothi Jadav. All rights reserved.
                        </p>
                        <p className="text-gray-400">
                            Built with ❤️ using React & Tailwind CSS
                        </p>
                    </div>
                    
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            GitHub
                        </a>
                        {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            Twitter
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;