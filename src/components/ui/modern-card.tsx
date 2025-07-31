"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid';
  hover?: boolean;
}

export default function ModernCard({
  children,
  className = '',
  variant = 'default',
  hover = true
}: ModernCardProps) {
  const variants = {
    default: "bg-white/5 border border-white/10 backdrop-blur-sm",
    glass: "bg-white/10 border border-white/20 backdrop-blur-md",
    solid: "bg-slate-800/90 border border-slate-700/50"
  };

  return (
    <motion.div
      className={`
        ${variants[variant]}
        rounded-2xl p-6 transition-all duration-300
        ${hover ? 'hover:border-white/30 hover:bg-white/10' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  );
} 