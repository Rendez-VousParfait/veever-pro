"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  rating, 
  delay = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="relative group perspective-1000"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-8 h-full transform-gpu">
        {/* Effet de brillance */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', skewX: -45 }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Icône de citation */}
        <motion.div
          className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          whileHover={{ 
            rotate: 360,
            scale: 1.2 
          }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Étoiles */}
        <motion.div 
          className="flex gap-1 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.3 + (i * 0.1),
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >
              <Star 
                className={`w-5 h-5 ${
                  i < rating 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-400'
                }`} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Citation */}
        <motion.blockquote
          className="text-lg leading-relaxed mb-6 italic relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          viewport={{ once: true }}
        >
          "{quote}"
        </motion.blockquote>
        
        {/* Auteur */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
          viewport={{ once: true }}
        >
          <div className="font-bold text-gradient text-lg">{author}</div>
          <div className="text-sm opacity-70">{role}</div>
          <div className="text-sm opacity-50 font-medium">{company}</div>
        </motion.div>
        
        {/* Ligne décorative */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: delay + 0.8 }}
          viewport={{ once: true }}
        />
        
        {/* Particules flottantes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 5}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
} 