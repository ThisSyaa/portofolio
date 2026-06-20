import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

function AbstractShape() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Icosahedron args={[1, 15]} scale={2.5}>
        <MeshDistortMaterial 
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
          distort={0.4} 
          speed={2} 
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Profile() {
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Epic GSAP Animation
    tl.fromTo(subtitleRef.current, 
      { y: 30, opacity: 0, letterSpacing: "0px" }, 
      { y: 0, opacity: 1, letterSpacing: "8px", duration: 1.5, ease: 'expo.out', delay: 0.5 }
    )
    .fromTo(textRef.current, {
      opacity: 0,
      scale: 0.5,
      filter: "blur(20px)",
      y: 50
    }, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    }, "-=1")
    .fromTo(descRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      "-=1.2"
    );
  }, []);

  return (
    <section id="profile" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AbstractShape />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="z-10 text-center flex flex-col items-center pointer-events-none mt-10">
        <h2 ref={subtitleRef} className="text-primary text-sm md:text-base mb-6 font-semibold uppercase tracking-widest">
          Welcome to my universe
        </h2>
        
        {/* Massive Glowing Text */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl -z-10 rounded-full animate-pulse"></div>
          <h1 
            ref={textRef} 
            className="text-[8rem] md:text-[15rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 tracking-tighter"
            style={{ 
              textShadow: '0 10px 40px rgba(255,255,255,0.1)',
            }}
          >
            Syaa
          </h1>
        </div>

        <p ref={descRef} className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl px-4 pointer-events-auto font-light">
          I craft <strong className="text-white font-semibold">immersive digital experiences</strong> that blend modern aesthetics with cutting-edge web technologies.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
