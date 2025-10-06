"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export default function SkillCard({ icon: Icon, title, description, color, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-6 h-full">
        {/* Effet de brillance au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Lueur colorée */}
        <motion.div
          className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`}
        />
        
        {/* Icône animée */}
        <motion.div
          className={`w-16 h-16 rounded-lg ${color} flex items-center justify-center mb-4 relative z-10`}
          whileHover={{ 
            rotate: [0, -10, 10, -5, 5, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />
          
          {/* Particules autour de l'icône */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${25 + i * 5}px 0px`,
              }}
              animate={{
                rotate: 360,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        {/* Contenu */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 text-gradient">{title}</h3>
          <p className="text-sm opacity-90 leading-relaxed">{description}</p>
        </div>
        
        {/* Effet de bordure animée */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, transparent, ${color.replace('bg-gradient-to-r', '').replace('from-', 'rgba(').replace('to-', ', 0.4), rgba(').replace('-500', ', 0.6)')}, transparent)`,
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
      </div>
    </motion.div>
  );
} 