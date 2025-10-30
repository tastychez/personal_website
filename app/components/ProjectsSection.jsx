// app/components/ProjectsSection.jsx
'use client';

import { forwardRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection = forwardRef((props, ref) => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [headerRef, isHeaderVisible] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Balloon Tower Defense",
      description: "A fully playable tower defense game built from scratch in Python using Pygame. A faithful recreation of the popular Bloons TD game by Ninja Kiwi, featuring multiple tower types, wave-based gameplay, and strategic defense mechanics.",
      detailedDescription: "• Complete recreation of the classic Bloons Tower Defense game built from scratch\n• Four unique tower types: Dart Monkey, Sniper Monkey, Tac Shooter, Super Monkey\n• Six different balloon enemy types with increasing toughness and speed\n• 20 configurable rounds with varying spawn patterns and difficulty\n• Strategic tower placement and upgrade system along predefined paths\n• Interactive UI controls for tower management and game speed toggling\n• Immersive gameplay with looping soundtrack and visual effects\n• Demonstrates object-oriented programming and game development fundamentals\n\nCheck out the website here: <a href='https://olincollege.github.io/BalloonTD0/' target='_blank' rel='noopener noreferrer' class='text-orange-500 hover:text-amber-400 underline'>https://olincollege.github.io/BalloonTD0/</a>\nCheck out the GitHub repo here: <a href='https://github.com/olincollege/BalloonTD0' target='_blank' rel='noopener noreferrer' class='text-orange-500 hover:text-amber-400 underline'>https://github.com/olincollege/BalloonTD0</a>",
      image: "/balloon-td.png",
      tech: ["Python", "Pygame", "Object-Oriented Programming", "Game Development", "Software Design"],
      link: "https://olincollege.github.io/BalloonTD0/"
    },
    {
      id: 2,
      title: "Hand Gesture Recognition",
      description: "A desktop application that maps real-time hand gestures from webcam input to emojis using Python, OpenCV, MediaPipe, and PyQt6. Features rule-based gesture recognition with live video feed and emoji overlay.",
      detailedDescription: "• Built a desktop application that maps real-time hand gestures from webcam input to emojis\n• Implemented rule-based gesture recognition (thumbs up/down, fist, peace, open palm) from 21 landmark points\n• Added smoothing algorithms for gesture stability and accuracy\n• Designed PyQt6 UI with live video feed and overlay of detected emoji\n• Created legend for gesture reference and user guidance\n• Added CLI mode for quick testing and development\n• Implemented unit tests for gesture classification accuracy\n• Added comprehensive logging for state changes and debugging\n• Achieved ~24 FPS performance on laptop CPU without GPU acceleration\n• Created as a step toward making digital spaces more inclusive\n• Highlights how vision-based interfaces can better represent people who use gestures and sign language\n\nCheck out the repo here: <a href='https://github.com/tastychez/hand_gesture_detector' target='_blank' rel='noopener noreferrer' class='text-orange-500 hover:text-amber-400 underline'>https://github.com/tastychez/hand_gesture_detector</a>",
      image: "/hand-gesture-recognition.png",
      tech: ["Python", "OpenCV", "MediaPipe", "PyQt6", "Computer Vision", "Real-time Processing", "UI/UX Design"],
      link: "#"
    },
    {
      id: 3,
      title: "Arduino Line-Following Robot",
      description: "Designed and built an autonomous robot to navigate a taped track using closed-loop feedback control.",
      detailedDescription: "• Designed and built an autonomous robot to navigate a taped track using closed-loop feedback control\n• Implemented a hierarchical, state-based control algorithm to interpret data from four IR reflectance sensors\n• Controlled two independent DC motors to keep the robot centered on the line and navigate complex turns\n• Designed and 3D-modeled custom modular sensor mounts, enabling rapid iteration and easy adjustment\n• Built a serial command interface to live-tune the robot's base speed from a laptop without recompiling or re-uploading code\n• Logged real-time sensor and motor data to the serial port in CSV format for performance analysis\n• Wrote a Python script with Pandas and Matplotlib to parse and plot the logged data, visualizing the control system's behavior",
      image: "/line-following-robot.jpeg",
      tech: ["C++ (Arduino)", "Python", "Pandas", "Matplotlib", "Arduino", "3D Modeling", "Robotics", "Control Systems", "Sensor Integration"],
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
        <div ref={headerRef} className={`text-center mb-20 scroll-reveal ${isHeaderVisible ? 'revealed' : ''}`}>
          <h2 className="text-5xl font-bold mb-6" style={{
            background: 'linear-gradient(to right, white, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Featured Projects
          </h2>
        </div>

        <div className="flex gap-8 transition-all duration-700 justify-center">
          {projects.map((project, index) => {
            const [projectRef, isProjectVisible] = useScrollAnimation();
            return (
              <div
                key={project.id}
                ref={projectRef}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-700 transform flex-shrink-0 ${
                  expandedProject === project.id 
                    ? 'w-full md:w-2/3 scale-100' 
                    : expandedProject 
                      ? 'w-1/6 md:w-1/6 scale-90 opacity-60 hover:opacity-80' 
                      : 'w-full md:w-1/3 hover:scale-105'
                } hover:shadow-2xl hover:shadow-orange-500/10 ${isProjectVisible ? 'revealed' : ''}`}
              >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-all duration-700 ${
                    expandedProject === project.id ? 'h-96' : 'h-64'
                  } group-hover:scale-110`}
                  style={{ objectPosition: project.id === 2 ? 'left top' : project.id === 3 ? 'center center' : 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className={`p-8 transition-all duration-700 ${
                expandedProject === project.id ? 'pb-12' : ''
              }`}>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="text-gray-300 mb-6 leading-relaxed">
                  {expandedProject === project.id ? (
                    <div 
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
                    />
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-amber-400 transition-colors duration-300 group/link"
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
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;