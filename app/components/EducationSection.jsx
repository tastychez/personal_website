// app/components/EducationSection.jsx
'use client';

import { forwardRef } from 'react';

const EducationSection = forwardRef((props, ref) => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      school: "Olin College of Engineering, Needham, Massachusetts",
      period: "2024 – 2028",
      gpa: "N/A",
      description: "Relevant Coursework: Applied Linear Algebra, Modeling and Simulation, Design Nature.",
      achievements: []
    },
    {
      id: 2,
      degree: "High School Diploma",
      school: "High School for Mathematics, Science and Engineering at City College, Manhattan, New York",
      period: "2020 – 2024",
      gpa: "4.0/4.0",
      description: "Relevant Coursework: AP Computer Science A, AP Calculus BC, AP Physics C: Mechanics.",
      achievements: [
        "Amazon Future Engineer Scholarship: $40,000 for tuition and a guaranteed paid internship at Amazon as a freshman (selected from 5,000+ applicants)",
        "Outstanding Research Award, NYU STEP: Published a 15-page paper and presented research on the impact of AI in cybersecurity",
        "Co-Founder - Coding Club; Co-President - Asian Cultural Society",
        "Participated in NYU CS4CS, a month-long summer program teaching cybersecurity through projects and CTF competitions"
      ]
    }
  ];

  return (
    <section ref={ref} id="education" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            My academic journey and the foundation of my technical expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="relative group"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className={`md:ml-20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'md:mr-20' 
                    : 'md:ml-20'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{edu.school}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center">
                      <span className="text-purple-400 font-medium bg-purple-400/10 px-3 py-1 rounded-full mr-3">
                        {edu.period}
                      </span>
                      <span className="text-yellow-400 font-semibold bg-yellow-400/10 px-3 py-1 rounded-full">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements & Highlights:</h4>
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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

export default EducationSection;