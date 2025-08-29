// app/components/ProjectsSection.jsx
'use client';

import { forwardRef, useState } from 'react';

const ProjectsSection = forwardRef((props, ref) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project Coming Soon",
      description: "Exciting new project in development. Stay tuned for updates on this innovative solution that combines cutting-edge technology with practical applications.",
      detailedDescription: "This project will showcase advanced AI integration techniques, combining machine learning algorithms with real-time data processing. The solution will address complex engineering challenges through innovative software architecture and user-centered design principles.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Coming+Soon",
      tech: ["In Development"],
      link: "#"
    },
    {
      id: 2,
      title: "Project Coming Soon",
      description: "Another exciting project currently in the works. This will showcase advanced engineering concepts and real-world problem solving.",
      detailedDescription: "This upcoming project focuses on hardware-software integration, featuring embedded systems design and IoT connectivity. It will demonstrate practical applications of electrical engineering principles in modern technology solutions.",
      image: "https://placehold.co/600x400/06b6d4/ffffff?text=Coming+Soon",
      tech: ["In Development"],
      link: "#"
    },
    {
      id: 3,
      title: "Project Coming Soon",
      description: "A third innovative project that's currently being developed. This will demonstrate practical applications of engineering principles.",
      detailedDescription: "This project explores cybersecurity applications and digital signal processing, incorporating both theoretical knowledge and hands-on implementation. It will feature robust security protocols and efficient data handling systems.",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Coming+Soon",
      tech: ["In Development"],
      link: "#"
    }
  ];

  const handleProjectClick = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section ref={ref} id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Cutting-edge solutions that push the boundaries of what's possible in web development.
          </p>
        </div>

        <div className="flex gap-8 transition-all duration-700 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-700 transform flex-shrink-0 ${
                expandedProject === project.id 
                  ? 'w-full md:w-2/3 scale-100' 
                  : expandedProject 
                    ? 'w-1/6 md:w-1/6 scale-90 opacity-60 hover:opacity-80' 
                    : 'w-full md:w-1/3 hover:scale-105'
              } hover:shadow-2xl hover:shadow-purple-500/10`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-all duration-700 ${
                    expandedProject === project.id ? 'h-96' : 'h-64'
                  } group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className={`p-8 transition-all duration-700 ${
                expandedProject === project.id ? 'pb-12' : ''
              }`}>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {expandedProject === project.id ? project.detailedDescription : project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 group/link"
                >
                  {expandedProject === project.id ? 'Close Project' : 'View Project'}
                  <svg 
                    className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                      expandedProject === project.id ? 'rotate-180' : 'group-hover/link:translate-x-1'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;