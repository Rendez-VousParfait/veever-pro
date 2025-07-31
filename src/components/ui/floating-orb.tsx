"use client";

import { motion } from 'framer-motion';

export default function FloatingOrb({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="w-32 h-32 relative"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Orbe principal */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-80 blur-sm animate-pulse" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-90" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 opacity-70 animate-spin" 
             style={{ animationDuration: '10s' }} />
        
        {/* Effets de brillance */}
        <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full opacity-60 blur-sm animate-bounce" />
        <div className="absolute top-8 right-6 w-2 h-2 bg-white rounded-full opacity-80 animate-ping" />
        
        {/* Anneaux orbitaux */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border border-pink-400/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Particules orbitales */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: `${40 + i * 10}px 0px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
} 