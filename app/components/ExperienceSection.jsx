// app/components/ExperienceSection.jsx
'use client';

import { forwardRef } from 'react';

const ExperienceSection = forwardRef((props, ref) => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud infrastructure. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Led migration of legacy system to microservices architecture",
        "Improved application performance by 40% through optimization",
        "Mentored 3 junior developers in best practices"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description: "Developed responsive user interfaces for enterprise clients using React and modern frontend technologies. Collaborated with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Built 15+ client-facing applications with 95%+ user satisfaction",
        "Implemented design system that reduced development time by 30%",
        "Integrated analytics and A/B testing frameworks"
      ]
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Startup Ventures",
      period: "2018 - 2020",
      description: "Contributed to full product lifecycle from concept to deployment. Worked on both frontend and backend components of web applications.",
      achievements: [
        "Developed MVP that secured $2M in seed funding",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built RESTful APIs serving 10K+ daily active users"
      ]
    }
  ];

  return (
    <section ref={ref} id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent animate-fade-in">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            My journey in the tech industry, working with innovative companies and building impactful solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative group"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className={`md:ml-20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'md:mr-20' 
                    : 'md:ml-20'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;