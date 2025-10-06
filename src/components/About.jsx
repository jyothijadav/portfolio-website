import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen pt-24 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-light leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Frontend Developer</span> with expertise in React, JavaScript,
              and modern web technologies. I love creating intuitive user experiences
              and solving complex problems through code.
            </p>
            <p className="text-lg text-light leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or writing about web development.
            </p>
            <p className="text-lg text-light leading-relaxed">
              I'm currently looking for new opportunities where I can contribute
              to meaningful projects and continue growing as a developer.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">YN</span>
                </div>
                <p className="text-light font-medium">Your Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
