import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Web App",
    category: "Fullstack Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "Tailwind"]
  },
  {
    title: "Portfolio 3D Experience",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Three.js", "GSAP", "React"]
  },
  {
    title: "Dashboard Admin Pro",
    category: "UI / UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Figma", "CSS", "HTML"]
  }
];

export default function Project() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(projectsRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: "power4.out" 
      },
      "-=0.4"
    );
  }, []);

  return (
    <section id="project" className="w-full min-h-screen py-24 px-6 bg-[#0a0a0a]">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        
        <div ref={titleRef} className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my recent work. Explore my projects to see how I solve problems and create impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-white/5 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 relative z-20 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent -mt-10 pt-12">
                <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-white text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Project 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}
