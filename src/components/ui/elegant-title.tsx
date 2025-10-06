"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ElegantTitleProps {
  children: ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3';
  style?: 'minimal' | 'underlined' | 'highlighted' | 'modern';
  animated?: boolean;
}

export default function ElegantTitle({
  children,
  className = '',
  variant = 'h2',
  style = 'minimal',
  animated = true
}: ElegantTitleProps) {
  const baseClasses = {
    h1: 'text-5xl md:text-7xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold'
  };

  const styles = {
    minimal: {
      titleClass: 'text-white font-display leading-tight tracking-tight',
      decoration: null
    },
    underlined: {
      titleClass: 'text-white font-display leading-tight tracking-tight',
      decoration: (
        <motion.div
          className="mt-2 mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )
    },
    highlighted: {
      titleClass: 'text-white font-display leading-tight tracking-tight relative',
      decoration: (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent rounded-lg -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      )
    },
    modern: {
      titleClass: 'text-white font-display leading-tight tracking-tight relative',
      decoration: (
        <motion.div
          className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )
    }
  };

  const currentStyle = styles[style];
  const Component = variant as keyof JSX.IntrinsicElements;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <motion.div
      className="relative"
      initial={animated ? "hidden" : "visible"}
      whileInView={animated ? "visible" : "visible"}
      viewport={{ once: true }}
      variants={animated ? titleVariants : {}}
    >
      <Component
        className={`
          ${baseClasses[variant]}
          ${currentStyle.titleClass}
          ${className}
        `}
      >
        {children}
      </Component>
      {currentStyle.decoration}
    </motion.div>
  );
} 