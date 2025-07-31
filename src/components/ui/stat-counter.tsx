"use client";

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  color?: string;
  delay?: number;
}

export default function StatCounter({ 
  value, 
  label, 
  suffix = '', 
  prefix = '', 
  duration = 2, 
  color = 'from-blue-400 to-purple-600',
  delay = 0 
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, motionValue, delay]);
  
  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        (ref.current as any).textContent = prefix + Math.floor(latest) + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      className="text-center group"
    >
      {/* Effet de lueur */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10">
        {/* Compteur */}
        <motion.div
          ref={ref}
          className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {prefix}0{suffix}
        </motion.div>
        
        {/* Label */}
        <motion.p
          className="text-sm md:text-base opacity-80 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.p>
        
        {/* Ligne décorative */}
        <motion.div
          className={`w-12 h-1 bg-gradient-to-r ${color} mx-auto mt-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
} 