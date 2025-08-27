// app/components/ContactSection.jsx
'use client';

import { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  const SocialIcon = ({ platform, href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 group"
    >
      <div className="relative">
        {children}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </a>
  );

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent animate-fade-in">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Send Message
            </button>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center space-x-8">
          <SocialIcon platform="linkedin" href="https://linkedin.com/in/yourusername">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </SocialIcon>
          <SocialIcon platform="github" href="https://github.com/yourusername">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialIcon>
          <SocialIcon platform="instagram" href="https://instagram.com/yourusername">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12s5.374 12 12 12 12-5.373 12-12-5.374-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm8-11h-16v2h16v-2zm0 4h-16v2h16v-2zm0-8h-16v2h16v-2zm-8 10c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/>
            </svg>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;