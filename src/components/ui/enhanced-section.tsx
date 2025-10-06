"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface EnhancedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'gradient' | 'pattern' | 'glass';
  reveal?: 'fade' | 'slide' | 'zoom' | 'split' | 'cascade';
  parallax?: boolean;
  divider?: boolean;
}

export default function EnhancedSection({
  children,
  id,
  className = '',
  background = 'default',
  reveal = 'fade',
  parallax = false,
  divider = true
}: EnhancedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [100, -100] : [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const backgroundVariants = {
    default: '',
    gradient: 'bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50',
    pattern: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-indigo-900/20',
    glass: 'bg-white/5 backdrop-blur-sm border-y border-white/10'
  };

  const revealVariants = {
    fade: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
      }
    },
    slide: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
      }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] as any }
      }
    },
    split: {
      hidden: { opacity: 0, scaleX: 0 },
      visible: { 
        opacity: 1, 
        scaleX: 1,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
      }
    },
    cascade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.8,
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    }
  };

  return (
    <>
      <motion.section
        ref={ref}
        id={id}
        className={`
          relative py-20 px-6 overflow-hidden
          ${backgroundVariants[background]}
          ${className}
        `}
        style={{ y: parallax ? y : undefined }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants[reveal]}
      >
        {/* Éléments décoratifs de fond */}
        {background === 'pattern' && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
          </>
        )}

        {/* Grille décorative pour le fond glass */}
        {background === 'glass' && (
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>
        )}

        {/* Contenu principal */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {children}
        </div>

        {/* Particules flottantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.section>

      {/* Diviseur de section animé */}
      {divider && (
        <motion.div
          className="relative w-full h-px overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          {/* Effet de pulse sur le diviseur */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </>
  );
} 