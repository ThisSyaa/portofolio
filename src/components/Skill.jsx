import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaFigma 
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiVite } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", category: "Frontend" },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]", category: "Frontend" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", category: "Backend" },
  { name: "PHP", icon: FaPhp, color: "text-[#777BB4]", category: "Backend" },
  { name: "Laravel", icon: FaLaravel, color: "text-[#FF2D20]", category: "Backend" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", category: "Backend" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]", category: "Tools" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", category: "Tools" },
  { name: "GitHub", icon: FaGithub, color: "text-white", category: "Tools" },
  { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]", category: "Tools" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]", category: "Design" }
];

export default function Skill() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".skill-heading", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(cardRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power4.out",
      },
      "-=0.4"
    )
    .fromTo(itemsRef.current,
      { opacity: 0, scale: 0.5, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(2)"
      },
      "-=0.8"
    );
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth 3D tilt effect for the entire unified card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Subtle 5 deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power2.out"
    });

    // Dynamic glow following the mouse
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section id="skill" className="w-full min-h-screen py-24 px-6 bg-[#050505] relative overflow-hidden flex items-center">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div ref={containerRef} className="max-w-5xl mx-auto w-full relative z-10 perspective-1000">
        
        <div className="text-center mb-16 skill-heading">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
            My Arsenal
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-6">
            A comprehensive toolkit I use to design, build, and deploy premium digital experiences.
          </p>
        </div>

        {/* Single Unified 3D Glass Card */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mouse-following gradient glow */}
          <div 
            className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              background: `radial-gradient(800px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)`
            }}
          />

          {/* Content layer translated in Z for Parallax Depth */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6" style={{ transform: "translateZ(40px)" }}>
            {allSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-xl"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color} drop-shadow-md group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
