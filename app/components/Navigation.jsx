// app/components/Navigation.jsx
'use client';

export default function Navigation({ activeTab, setActiveTab, scrollToSection, refs }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold" style={{
            background: 'linear-gradient(to right, #f59e0b, #ea580c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Hong Yi Zhang
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(refs.about, 'about')}
              className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === 'about'
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-300 border-transparent hover:text-amber-400 hover:border-amber-400'
              }`}
            >
              about
            </button>
            <button
              onClick={() => scrollToSection(refs.experience, 'experience')}
              className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === 'experience'
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-300 border-transparent hover:text-amber-400 hover:border-amber-400'
              }`}
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection(refs.projects, 'projects')}
              className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === 'projects'
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-300 border-transparent hover:text-amber-400 hover:border-amber-400'
              }`}
            >
              projects
            </button>
            <button
              onClick={() => scrollToSection(refs.education, 'education')}
              className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === 'education'
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-300 border-transparent hover:text-amber-400 hover:border-amber-400'
              }`}
            >
              education
            </button>
            <button
              onClick={() => scrollToSection(refs.contact, 'contact')}
              className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === 'contact'
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-300 border-transparent hover:text-amber-400 hover:border-amber-400'
              }`}
            >
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}