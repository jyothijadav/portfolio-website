import React from 'react';

const Skills = () => {
    const skills = {
        "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "TypeScript", "Next.js"],
        "Styling": ["Tailwind CSS", "Styled Components", "SASS/SCSS", "CSS Modules", "Bootstrap"],
        "Tools": ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Vite"],
        "Other": ["REST APIs", "Responsive Design", "Web Accessibility", "Agile/Scrum", "Jest", "Cypress"]
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">
                    Skills & Technologies
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-dark mb-6 text-center border-b-2 border-primary pb-3">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {skillList.map(skill => (
                                    <span 
                                        key={skill} 
                                        className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transform transition-all duration-200 cursor-default shadow-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;