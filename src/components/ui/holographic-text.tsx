"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HolographicTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3';
  gradient?: string;
  glow?: boolean;
}

export default function HolographicText({
  children,
  className = '',
  variant = 'h2',
  gradient = 'from-blue-400 via-purple-500 to-pink-500',
  glow = true
}: HolographicTextProps) {
  const baseClasses = {
    h1: 'text-6xl md:text-8xl font-black',
    h2: 'text-4xl md:text-6xl font-bold',
    h3: 'text-2xl md:text-4xl font-semibold'
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Texte principal avec gradient */}
      <Component
        className={`
          ${baseClasses[variant]}
          bg-gradient-to-r ${gradient}
          bg-clip-text text-transparent
          relative z-10
          ${className}
        `}
      >
        {children}
      </Component>

      {/* Effet de lueur */}
      {glow && (
        <motion.div
          className={`
            absolute inset-0
            ${baseClasses[variant]}
            bg-gradient-to-r ${gradient}
            bg-clip-text text-transparent
            blur-sm opacity-50
          `}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      )}

      {/* Effet de scintillement */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          ],
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{
          maskImage: `linear-gradient(to right, transparent 0%, black 50%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 50%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
} 