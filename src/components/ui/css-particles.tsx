"use client";

import { motion } from 'framer-motion';

export default function CSSParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Particules flottantes */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Particules plus grosses */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
            scale: [0.3, 1.2, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Étoiles scintillantes */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-white opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 8 + 4}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
} 