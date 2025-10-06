'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Bouton corporate premium - animations subtiles
interface CorporateButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function CorporateButton({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  onClick 
}: CorporateButtonProps) {
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200',
    outline: 'bg-transparent text-slate-900 hover:bg-slate-50 border border-slate-300'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-lg font-medium transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2
        ${className}
      `}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// Carte corporate premium - animations minimales
interface CorporateCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function CorporateCard({ children, className = '', hover = true }: CorporateCardProps) {
  return (
    <motion.div
      className={`
        bg-white border border-slate-200 rounded-xl shadow-sm
        ${hover ? 'hover:shadow-md hover:border-slate-300' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Section corporate premium - révélations subtiles
interface CorporateSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function CorporateSection({ children, className = '', id }: CorporateSectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 px-4 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}

// Titre corporate premium - animations élégantes
interface CorporateTitleProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function CorporateTitle({ children, className = '', level = 2 }: CorporateTitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      viewport={{ once: true }}
    >
      <Tag className={`font-bold text-slate-900 ${className}`}>
        {children}
      </Tag>
    </motion.div>
  );
}

// Texte corporate premium - révélations progressives
interface CorporateTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function CorporateText({ children, className = '', delay = 0 }: CorporateTextProps) {
  return (
    <motion.div
      className={`text-slate-600 leading-relaxed ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
