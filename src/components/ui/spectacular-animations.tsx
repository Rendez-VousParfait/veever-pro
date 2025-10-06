'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animation de texte avec effet de révélation
export function RevealText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animation de texte avec effet de typewriter
export function TypewriterText({ text, className = "", speed = 50 }: { text: string; className?: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-blue-600"
      >
        |
      </motion.span>
    </span>
  );
}

// Effet de glassmorphism avec animation
export function GlassCard({ children, className = "", intensity = 0.1 }: { children: React.ReactNode; className?: string; intensity?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl ${className}`}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,${intensity}) 0%, rgba(255,255,255,${intensity * 0.5}) 100%)`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      {children}
    </motion.div>
  );
}

// Animation de particules flottantes
export function FloatingParticles({ count = 50 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Effet de morphing géométrique
export function MorphingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "20%", "50%"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-lg"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
          borderRadius: ["50%", "0%", "50%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}

// Animation de parallaxe avancée
export function ParallaxSection({ children, className = "", speed = 0.5 }: { children: React.ReactNode; className?: string; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Effet de révélation avec masque
export function MaskReveal({ children, className = "", direction = "up" }: { children: React.ReactNode; className?: string; direction?: "up" | "down" | "left" | "right" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      clipPath: direction === "up" ? "inset(100% 0 0 0)" :
                direction === "down" ? "inset(0 0 100% 0)" :
                direction === "left" ? "inset(0 100% 0 0)" :
                "inset(0 0 0 100%)"
    },
    visible: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animation de curseur personnalisé
export function CustomCursor() {
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
        className="fixed top-0 left-0 w-6 h-6 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1
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

// Animation de gradient animé
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

// Effet de liquide morphing
export function LiquidMorph({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "30% 70% 70% 30% / 30% 30% 70% 70%"
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
      }}
    />
  );
}
