// app/components/AboutSection.jsx
'use client';

import { forwardRef } from 'react';

const AboutSection = forwardRef(({ activeTab, setActiveTab, scrollY }, ref) => {
  const personalInfo = {
    name: "Hong Yi Zhang",
    title: "Electrical & Computer Engineering Student",
    description: "I'm a passionate engineering student at Olin College of Engineering, deeply interested in all things AI, software, and computer systems. I love exploring innovative technologies and building solutions that bridge the gap between hardware and software.",
    email: "hong.yi.zhang@example.com",
    location: "San Francisco, CA",
    photo: "/profile-photo.jpg"
  };

  const skills = ["AI", "Model Context Protocol", "Java", "Python", "Git", "React", "MATLAB", "C++", "Cybersecurity", "SolidWorks", "KiCad", "Shop Machine Trained", "Digital Editing"];

  return (
    <section ref={ref} id="about" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 
                className="text-6xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in"
                style={{ 
                  animationDelay: '200ms',
                  lineHeight: '1.1',
                  marginBottom: '0.5em'
                }}
              >
                Hi, I'm {personalInfo.name.split(' ')[0]}
              </h1>
              <p 
                className="text-3xl text-purple-300 font-light animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                {personalInfo.title}
              </p>
              <p 
                className="text-xl text-gray-300 leading-relaxed animate-fade-in"
                style={{ animationDelay: '600ms' }}
              >
                {personalInfo.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-all duration-300"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1200ms' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="border-2 border-purple-500/50 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative group"
              style={{
                transform: `translateY(${scrollY * -0.3}px)`,
              }}
            >
              <div className="absolute inset-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-96 h-96 rounded-2xl object-cover shadow-2xl border-4 border-white/20 relative z-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;