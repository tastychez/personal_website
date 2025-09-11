// app/components/ExperienceSection.jsx
'use client';

import { forwardRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection = forwardRef((props, ref) => {
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [exp1Ref, isExp1Visible] = useScrollAnimation();
  const [exp2Ref, isExp2Visible] = useScrollAnimation();
  const [exp3Ref, isExp3Visible] = useScrollAnimation();
  const [exp4Ref, isExp4Visible] = useScrollAnimation();
  
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern, Tablet Launcher Team",
      company: "Amazon — Seattle, WA",
      period: "May 2025 – Aug 2025",
      description: "Developed AI-powered tools and infrastructure for internal teams, focusing on automation and efficiency improvements through machine learning integration.",
      achievements: [
        "Designed and built an AI-powered Jira bug root cause analyzer, integrating Jira with Amazon Q (LLM) to cut bug triage time by up to 50% through automated analysis and fix suggestions",
        "Engineered a multi-stage AI pipeline (bug parsing, historical issue retrieval, root cause analysis) that achieved 90–95% accuracy in predicting likely fixes across real-world tickets",
        "Implemented secure authentication using AWS Secrets Manager, replacing legacy token methods and improving adoption and security across multiple teams",
        "Identified and resolved a critical MCP bug that prevented proper Jira tool visibility, directly enabling broader usage across the org",
        "Extended MCP server capabilities by building a Jira attachments integration, unlocking AI-powered log and media analysis for faster debugging and root cause identification"
      ],
      companyLogo: "/amazon.jpg" // Added company logo path
    },
    {
      id: 2,
      title: "Research Assistant, AlmPower",
      company: "Olin Public Interest Technology — Needham, MA",
      period: "Aug 2024 – Feb 2025",
      description: "Investigated bias in Automatic Speech Recognition (ASR) models and fine‑tuned models to improve accuracy for stuttered speech and accents in English and Mandarin.",
      achievements: [
        "Led data collection, bias analysis, reporting, and experimentation for inclusive ASR",
        "Reduced mean Word Error Rate (WER) from 20.4% → 6.2% for stuttered English and mean Character Error Rate (CER) from 66.4% → 19.0% for stuttered Mandarin",
        "Demonstrated robustness across stutter types, addressing challenges like word/sound repetition",
        "Advanced project to the AAAS Science Competition poster round after passing the abstract round"
      ],
      companyLogo: "/AImpower.png" // Added company logo path
    },
    {
      id: 3,
      title: "Sub‑Team Member, Avionics",
      company: "Olin Rocketry — Needham, MA",
      period: "Aug 2024 – Feb 2025",
      description: "Contributed to avionics systems for competition‑grade rockets, focusing on reliable telemetry and data transmission for IREC.",
      achievements: [
        "Developed a custom radio PCB in KiCad for real‑time communication between rocket and ground station",
        "Integrated antenna interfaces and wireless data transmission; programmed avionics using Arduino IDE",
        "Assisted in CAD modeling and 3D printing of radio box components to enhance durability and functionality",
        "Researched advanced sensors for next‑generation rocket systems"
      ],
      companyLogo: "/rocketry.jpeg" // Added company logo path
    },
    {
      id: 4,
      title: "Founder",
      company: "Tone Tutoring — New York, NY",
      period: "Dec 2022 – May 2024",
      description: "Established a volunteer tutoring organization dedicated to supporting low‑income elementary and middle school students across New York City, providing free academic support and personalized learning plans.",
      achievements: [
        "Developed personalized learning plans tailored to individual strengths, challenges, and goals to enhance academic performance",
        "Partnered with 12+ schools citywide to expand access to educational resources and ongoing support",
        "Fostered confidence and skill development by creating a nurturing environment for students to thrive academically"
      ],
      companyLogo: "/tone_tutoring.jpg" // Added company logo path
    }
  ];

  return (
    <section ref={ref} id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className={`text-center mb-20 scroll-reveal ${isHeaderVisible ? 'revealed' : ''}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in the tech industry, working with innovative companies and building impactful solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const expRef = [exp1Ref, exp2Ref, exp3Ref, exp4Ref][index];
              const isExpVisible = [isExp1Visible, isExp2Visible, isExp3Visible, isExp4Visible][index];
              
              return (
                <div
                  key={exp.id}
                  ref={expRef}
                  className={`relative group scroll-reveal ${isExpVisible ? 'revealed' : ''}`}
                >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className={`md:ml-20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'md:mr-20' 
                    : 'md:ml-20'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={exp.companyLogo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg hidden">
                          {exp.company.split(' ')[0][0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;