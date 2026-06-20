import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(imageRef.current, 
      { x: -100, opacity: 0, rotateY: 15 }, 
      { x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-[#0a0a0a]">
      <div ref={containerRef} className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image / Photo */}
        <div ref={imageRef} className="relative group" style={{ perspective: '1000px' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gray-900 transform transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Text Content */}
        <div ref={textRef} className="flex flex-col gap-6">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm <span className="text-primary font-semibold">Syaa</span>, a passionate developer who loves creating beautiful, interactive, and user-centered digital experiences. 
            I specialize in bringing ideas to life through code, blending aesthetics with performance.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With a keen eye for design and a strong foundation in modern web technologies, I always strive to push the boundaries of what's possible on the web. Let's build something amazing together!
          </p>
          <div className="mt-6">
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-primary/10 border border-primary/50 text-primary font-semibold hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
