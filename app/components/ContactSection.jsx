// app/components/ContactSection.jsx
'use client';

import { forwardRef, useState, useEffect } from 'react';

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mblaaeqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isMounted) {
    return (
      <section ref={ref} id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
            <div className="animate-custom-pulse">
              <div className="h-4 bg-white/10 rounded mb-4"></div>
              <div className="h-4 bg-white/10 rounded mb-4"></div>
              <div className="h-4 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isSubmitted) {
    return (
      <section ref={ref} id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 border border-white/10 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Thank you for reaching out!</h3>
            <p className="text-xl text-gray-300 mb-8">I'll get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-8 animate-fade-in" style={{
          background: 'linear-gradient(to right, white, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-white/10 border rounded-xl focus:outline-none focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400 ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-purple-500/50'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 ml-2">{errors.name}</p>
                )}
              </div>
              <div className="text-left">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-white/10 border rounded-xl focus:outline-none focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-purple-500/50'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 ml-2">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="text-left">
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 bg-white/10 border rounded-xl focus:outline-none focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400 resize-none ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-purple-500/50'
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-2 ml-2">{errors.message}</p>
              )}
            </div>
            
            {errors.submit && (
              <div className="text-red-400 text-center bg-red-400/10 border border-red-400/30 rounded-xl py-3">
                {errors.submit}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform backdrop-blur-sm ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
        
        <div className="mt-20 flex justify-center space-x-8">
          <SocialIcon platform="linkedin" href="https://www.linkedin.com/in/hong-yi-zhang/">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </SocialIcon>
          <SocialIcon platform="github" href="https://github.com/tastychez">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialIcon>
          <SocialIcon platform="instagram" href="https://www.instagram.com/hoongg_/">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;