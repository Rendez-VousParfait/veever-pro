'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Effet de particules interactives
export function InteractiveParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 1,
      color: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]
    }));
    setParticles(newParticles);

    const animate = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.x > window.innerWidth || particle.x < 0 ? -particle.vx : particle.vx,
        vy: particle.y > window.innerHeight || particle.y < 0 ? -particle.vy : particle.vy
      })));
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Bouton avec effet de liquide
export function LiquidButton({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white ${className}`}
      style={{
        background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute rounded-full bg-white/30"
        style={{
          left: springX,
          top: springY,
          width: 100,
          height: 100,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Card avec effet de tilt 3D
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Effet de texte avec morphing
export function MorphingText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {texts.map((text, index) => (
        <motion.span
          key={text}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 50
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}

// Effet de révélation avec masque animé
export function MaskReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Effet de parallaxe avec plusieurs couches
export function MultiLayerParallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-10">
        {children}
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl" />
      </motion.div>
      
      <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-3xl" />
      </motion.div>
    </div>
  );
}

// Effet de curseur magnétique
export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
    </>
  );
}

// Effet de gradient animé pour les backgrounds
export function AnimatedGradient({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
