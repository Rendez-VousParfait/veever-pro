"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SpaceBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Génération des étoiles
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    twinkleDelay: Math.random() * 5,
  }));

  const milkyWayStars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-violet-900">
      {/* Voie lactée */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 90%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 80% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 150% 100% at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nébuleuses colorées */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          left: '10%',
          top: '20%',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          right: '15%',
          top: '60%',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Étoiles principales */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.twinkleDelay,
          }}
        />
      ))}

      {/* Poussière d'étoiles de la voie lactée */}
      {milkyWayStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '1px',
            height: '1px',
            opacity: star.opacity,
            boxShadow: '0 0 2px rgba(255,255,255,0.5)',
          }}
        />
      ))}

      {/* Effet de parallaxe subtil avec la souris */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Gradient de profondeur */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%),
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)
          `,
        }}
      />
    </div>
  );
} 