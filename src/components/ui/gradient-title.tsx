"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientTitleProps {
  children: ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3';
  theme?: 'primary' | 'secondary' | 'accent' | 'warm' | 'cool';
  animated?: boolean;
  spacing?: string;
}

export default function GradientTitle({
  children,
  className = '',
  variant = 'h2',
  theme = 'primary',
  animated = true,
  spacing = 'mb-4',
}: GradientTitleProps) {
  const baseClasses = {
    h1: 'text-5xl md:text-7xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold'
  };

  const themes = {
    primary: {
      gradient: 'from-white via-slate-200 to-slate-300',
      shadow: 'text-shadow-lg',
      accent: 'from-indigo-400 to-purple-500'
    },
    secondary: {
      gradient: 'from-slate-100 via-white to-slate-200',
      shadow: 'text-shadow-md',
      accent: 'from-purple-400 to-pink-500'
    },
    accent: {
      gradient: 'from-indigo-200 via-purple-200 to-pink-200',
      shadow: 'text-shadow-md',
      accent: 'from-cyan-400 to-blue-500'
    },
    warm: {
      gradient: 'from-orange-200 via-yellow-200 to-red-200',
      shadow: 'text-shadow-lg',
      accent: 'from-orange-400 to-red-500'
    },
    cool: {
      gradient: 'from-blue-200 via-cyan-200 to-teal-200',
      shadow: 'text-shadow-md',
      accent: 'from-blue-400 to-teal-500'
    }
  };

  const currentTheme = themes[theme];
  const Component = variant as keyof JSX.IntrinsicElements;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <motion.div
      className={`relative inline-block w-full`}
      initial={animated ? "hidden" : "visible"}
      whileInView={animated ? "visible" : "visible"}
      viewport={{ once: true }}
      variants={animated ? titleVariants : {}}
    >
      {/* Titre principal */}
      <Component
        className={`
          ${baseClasses[variant]}
          bg-gradient-to-r ${currentTheme.gradient}
          bg-clip-text text-transparent
          font-display leading-tight tracking-tight
          relative z-10
          ${spacing}
          ${className}
        `}
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        {children}
      </Component>

      {/* Accent décoratif subtil */}
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1 mx-auto"
        style={{ width: '60%' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={`h-full bg-gradient-to-r ${currentTheme.accent} rounded-full opacity-60`} />
      </motion.div>

      {/* Marge sous la barre décorative */}
      <div className="mb-6" />

      {/* Effet de lueur très subtil */}
      <motion.div
        className={`
          absolute inset-0 
          ${baseClasses[variant]}
          bg-gradient-to-r ${currentTheme.accent}
          bg-clip-text text-transparent
          opacity-20 blur-sm -z-10
        `}
        animate={animated ? {
          opacity: [0.1, 0.3, 0.1],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 