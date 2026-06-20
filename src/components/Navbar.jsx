import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Premium entrance animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: 'expo.out', delay: 0.2 }
    );
  }, []);

  const links = ['Profile', 'About', 'Skill', 'Project', 'Contact'];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center transition-all duration-500">
      {/* Premium Glassmorphism Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]/40 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-[-1]"></div>
      
      {/* Logo */}
      <div className="text-2xl font-extrabold text-white tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300">
        Syaaxi<span className="text-primary">.</span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex relative items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
        {links.map((link) => (
          <a 
            key={link}
            href={`#${link.toLowerCase()}`} 
            onMouseEnter={() => setActiveTab(link)}
            onMouseLeave={() => setActiveTab(null)}
            className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 z-10"
          >
            {link}
            {activeTab === link && (
              <span className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-fade-in"></span>
            )}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <div className="hidden md:block">
        <a href="#contact" className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Let's Talk
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </nav>
  );
}
