"use client";

import { motion } from 'framer-motion';
import { Sun, Moon, Stars } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ThemeSwitcherProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function ThemeSwitcher({ darkMode, onToggle }: ThemeSwitcherProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative w-16 h-8 rounded-full border-2 border-white/20 bg-gradient-to-r from-slate-700 to-slate-800 p-1 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
          : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
      }}
    >
      {/* Étoiles pour le mode sombre */}
      {darkMode && (
        <>
          <motion.div
            className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </>
      )}

      {/* Nuages pour le mode clair */}
      {!darkMode && (
        <motion.div
          className="absolute top-2 right-2 w-2 h-1 bg-white/60 rounded-full"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Commutateur animé */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: darkMode ? 0 : 24,
          rotate: darkMode ? 0 : 180,
          background: darkMode 
            ? 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
          duration: 0.5
        }}
      >
        <motion.div
          animate={{ 
            scale: isAnimating ? [1, 0, 1] : 1,
            rotate: isAnimating ? 360 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? (
            <Moon className="w-4 h-4 text-slate-700" />
          ) : (
            <Sun className="w-4 h-4 text-white" />
          )}
        </motion.div>
      </motion.div>

      {/* Effet de glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: darkMode 
            ? '0 0 20px rgba(147, 197, 253, 0.3), inset 0 0 20px rgba(147, 197, 253, 0.1)'
            : '0 0 20px rgba(251, 191, 36, 0.4), inset 0 0 20px rgba(251, 191, 36, 0.1)'
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
} 