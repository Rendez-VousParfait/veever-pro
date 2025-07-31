"use client";

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface InteractiveElementProps {
  children: ReactNode;
  className?: string;
  effect?: 'magnetic' | 'ripple' | 'glow' | 'float' | 'tilt';
  intensity?: 'low' | 'medium' | 'high';
}

export default function InteractiveElement({
  children,
  className = '',
  effect = 'magnetic',
  intensity = 'medium'
}: InteractiveElementProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const intensityValues = {
    low: { scale: 1.02, rotate: 2, magnetic: 5 },
    medium: { scale: 1.05, rotate: 5, magnetic: 10 },
    high: { scale: 1.08, rotate: 8, magnetic: 15 }
  };

  const currentIntensity = intensityValues[intensity];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (effect === 'magnetic') {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / currentIntensity.magnetic;
      const y = (e.clientY - centerY) / currentIntensity.magnetic;
      setMousePosition({ x, y });
    }
  };

  const getAnimationProps = () => {
    switch (effect) {
      case 'magnetic':
        return {
          whileHover: { 
            scale: currentIntensity.scale,
            x: mousePosition.x,
            y: mousePosition.y
          },
          transition: { type: "spring", stiffness: 300, damping: 20 }
        };
      
      case 'ripple':
        return {
          whileHover: { scale: currentIntensity.scale },
          whileTap: { scale: 0.95 },
          transition: { type: "spring", stiffness: 400, damping: 17 }
        };
      
      case 'glow':
        return {
          whileHover: { 
            scale: currentIntensity.scale,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
          },
          transition: { duration: 0.3 }
        };
      
      case 'float':
        return {
          whileHover: { 
            y: -8,
            scale: currentIntensity.scale,
            rotateX: 5
          },
          transition: { type: "spring", stiffness: 300, damping: 20 }
        };
      
      case 'tilt':
        return {
          whileHover: { 
            scale: currentIntensity.scale,
            rotateY: currentIntensity.rotate,
            rotateX: -currentIntensity.rotate / 2
          },
          transition: { type: "spring", stiffness: 300, damping: 20 }
        };
      
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`${className} ${effect === 'glow' ? 'hover:shadow-xl' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...getAnimationProps()}
      style={{ 
        transformStyle: 'preserve-3d',
        ...(effect === 'tilt' && { perspective: '1000px' })
      }}
    >
      {children}
      
      {/* Effet de ripple */}
      {effect === 'ripple' && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400/50 pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
} 