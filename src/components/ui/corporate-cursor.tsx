'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Curseur corporate premium - discret et professionnel
export default function CorporateCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Écouter les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

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
      {/* Curseur principal - très discret */}
      <motion.div
        className="fixed w-2 h-2 bg-slate-800 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.3
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      />
      
      {/* Anneau externe - seulement sur les éléments interactifs */}
      {isHovering && (
        <motion.div
          className="fixed w-8 h-8 border border-slate-600/40 rounded-full pointer-events-none z-40"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: [0.8, 1],
            opacity: [0, 0.6, 0.3]
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      )}
    </>
  );
}
