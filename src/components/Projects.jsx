import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A full-featured product dashboard with filtering, sorting, and cart functionality built with React and Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "JavaScript", "Context API"],
            features: ["Product Filtering", "Shopping Cart", "Responsive Design", "State Management"]
        },
        {
            id: 2,
            title: "Weather Application",
            description: "Real-time weather app fetching data from OpenWeather API with dynamic backgrounds and geolocation.",
            technologies: ["React", "API Integration", "Tailwind CSS", "Geolocation"],
            features: ["API Integration", "Geolocation", "Responsive Design", "Dynamic UI"]
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Drag-and-drop task manager with local storage persistence and real-time updates.",
            technologies: ["React", "Local Storage", "Tailwind CSS", "Drag & Drop"],
            features: ["Drag & Drop", "Local Storage", "CRUD Operations", "Real-time Updates"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">
                    My Projects
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <p className="font-semibold">Project Preview</p>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                                <p className="text-light mb-4 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <ul className="space-y-2 mb-6">
                                    {project.features.map(feature => (
                                        <li key={feature} className="flex items-center text-light text-sm">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="flex gap-4">
                                    <a href="#" className="flex-1 bg-primary text-white text-center py-2 rounded-lg font-semibold hover:bg-secondary transition-colors">
                                        Live Demo
                                    </a>
                                    <a href="#" className="flex-1 border border-primary text-primary text-center py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;