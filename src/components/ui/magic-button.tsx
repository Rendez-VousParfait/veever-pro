"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './button';

interface MagicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export default function MagicButton({ 
  children, 
  onClick, 
  variant = "default", 
  size = "default",
  className = ""
}: MagicButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    onClick?.();
  };

  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Effet d'ondulation au clic */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      
      {/* Particules magiques au hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover="hover"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            variants={{
              hover: {
                y: [-5, -15, -5],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              },
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      
      {/* Lueur magique */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg blur-lg"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        className={`relative z-10 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
} 