// app/components/Footer.jsx
export default function Footer() {
    const personalInfo = {
      name: "Hong Yi Zhang"
    };
  
    return (
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    );
  }