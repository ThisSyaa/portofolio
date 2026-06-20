import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-white/5 bg-[#050505]">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Syaaxi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
