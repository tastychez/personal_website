// app/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  
  // Create refs for all sections
  const refs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionRef, tabName) => {
    setActiveTab(tabName);
    if (sectionRef.current) {
      const element = sectionRef.current;
      
      if (tabName === 'about') {
        // For about section, scroll to the very top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // For other sections, use the offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + 25; // 20px offset from top
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const sections = [
      { ref: refs.about, tab: 'about' },
      { ref: refs.experience, tab: 'experience' },
      { ref: refs.projects, tab: 'projects' },
      { ref: refs.education, tab: 'education' },
      { ref: refs.contact, tab: 'contact' }
    ];

    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + windowHeight * 0.3; // 30% from top

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionHeight = section.ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(section.tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        scrollToSection={scrollToSection}
        refs={refs}
      />

      <main>
        <AboutSection 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          scrollY={scrollY}
          ref={refs.about}
        />
        
        <ExperienceSection ref={refs.experience} />
        
        <ProjectsSection ref={refs.projects} />
        
        <EducationSection ref={refs.education} />
        
        <ContactSection ref={refs.contact} />
      </main>

      <Footer />
    </div>
  );
}