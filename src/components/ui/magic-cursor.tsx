"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Ajouter les événements sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Traînée de particules */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full pointer-events-none z-40 opacity-60"
          style={{
            left: mousePosition.x - 4,
            top: mousePosition.y - 4,
          }}
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: [1, 0],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Anneau externe */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-purple-400/30 rounded-full pointer-events-none z-40"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
} 