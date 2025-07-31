"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SpaceSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'floating' | 'transparent';
  id?: string;
}

export default function SpaceSection({
  children,
  className = '',
  variant = 'default',
  id
}: SpaceSectionProps) {
  const variants = {
    default: "py-32 relative",
    floating: "py-32 relative overflow-hidden",
    transparent: "py-24 relative"
  };

  return (
    <motion.section
      id={id}
      className={`${variants[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {variant === 'floating' && (
        <>
          {/* Éclairage ambiant */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 100% 50% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 70%),
                radial-gradient(ellipse 80% 50% at 20% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 70%),
                radial-gradient(ellipse 80% 50% at 80% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)
              `,
            }}
          />
          
          {/* Particules flottantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </motion.section>
  );
} 