'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ModernCard({ children, className = "", onClick }: ModernCardProps) {
  return (
    <motion.div
      className={`premium-glass rounded-2xl p-6 transition-all duration-300 cursor-pointer ${className}`}
      whileHover={{ 
        y: -8,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Effet de bordure lumineuse au hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        {/* Contenu de la carte */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Effet de particules au hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 