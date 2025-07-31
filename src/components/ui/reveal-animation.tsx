"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  variant?: 'slide' | 'scale' | 'rotate' | 'blur' | 'wave';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function RevealAnimation({
  children,
  variant = 'slide',
  delay = 0,
  duration = 0.8,
  className = ''
}: RevealAnimationProps) {
  const variants = {
    slide: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5, rotate: -10 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: {
          duration,
          delay,
          ease: "backOut",
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }
      }
    },
    rotate: {
      hidden: { opacity: 0, rotateX: -90, y: 50 },
      visible: { 
        opacity: 1, 
        rotateX: 0, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)', scale: 1.1 },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)', 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    wave: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
          y: {
            type: "spring",
            stiffness: 100,
            damping: 12
          }
        }
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
} 