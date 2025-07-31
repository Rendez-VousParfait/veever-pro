"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SolarSystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Planètes avec des couleurs plus visibles
  const planets = [
    { name: 'Mercury', size: 8, orbit: 150, speed: 88, color: '#FFA726', opacity: 0.8 },
    { name: 'Venus', size: 12, orbit: 200, speed: 224, color: '#FFB74D', opacity: 0.7 },
    { name: 'Earth', size: 14, orbit: 250, speed: 365, color: '#42A5F5', opacity: 0.9 },
    { name: 'Mars', size: 10, orbit: 300, speed: 687, color: '#EF5350', opacity: 0.8 },
    { name: 'Jupiter', size: 35, orbit: 400, speed: 4333, color: '#FF7043', opacity: 0.6 },
    { name: 'Saturn', size: 28, orbit: 480, speed: 10759, color: '#FDD835', opacity: 0.6 },
    { name: 'Uranus', size: 20, orbit: 550, speed: 30687, color: '#26C6DA', opacity: 0.5 },
    { name: 'Neptune', size: 18, orbit: 620, speed: 60190, color: '#5C6BC0', opacity: 0.5 },
  ];

  // Plus d'étoiles et plus visibles
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.4,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fond dégradé plus visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      
      {/* Étoiles plus visibles */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Système solaire centré et plus visible */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Soleil central plus grand et plus lumineux */}
        <motion.div
          className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFA726 0%, #FF6F00 50%, #E65100 100%)',
            boxShadow: '0 0 40px rgba(255, 167, 38, 0.8), 0 0 80px rgba(255, 167, 38, 0.4)',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Orbites des planètes plus visibles */}
        {planets.map((planet, index) => (
          <div key={planet.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Orbite visible */}
            <div
              className="absolute border border-white/10 rounded-full"
              style={{
                width: `${planet.orbit}px`,
                height: `${planet.orbit}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Planète plus visible */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}dd)`,
                top: '50%',
                left: '50%',
                transformOrigin: `0 ${planet.orbit / 2}px`,
                opacity: planet.opacity,
                boxShadow: `0 0 ${planet.size * 2}px ${planet.color}60`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: planet.speed / 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        ))}
      </div>

      {/* Nébuleuses d'arrière-plan */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          right: '15%',
          top: '60%',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Effet de parallaxe plus visible */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 15}% ${50 + mousePosition.y * 15}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 30 }}
      />
    </div>
  );
} 