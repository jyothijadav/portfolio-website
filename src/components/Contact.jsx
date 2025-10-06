import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">
                    Get In Touch
                </h2>
                
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-dark mb-4">Let's Connect</h3>
                            <p className="text-lg text-light leading-relaxed">
                                I'm always open to discussing new opportunities, interesting projects, 
                                or just having a chat about web development.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-dark">Email</p>
                                    <p className="text-light">jyothijadav913@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                    <FaPhone className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-dark">Phone</p>
                                    <p className="text-light">+91 8790205370</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-dark">Location</p>
                                    <p className="text-light">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <FaTwitter className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-dark font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-dark font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-dark font-semibold mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter the subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-dark font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your message..."
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;