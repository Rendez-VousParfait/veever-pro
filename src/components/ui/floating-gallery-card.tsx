"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface FloatingGalleryCardProps {
  title: string;
  description: string;
  image?: string;
  color: string;
  delay?: number;
  onClick?: () => void;
  githubUrl?: string;
}

export default function FloatingGalleryCard({
  title,
  description,
  color,
  delay = 0,
  onClick,
  githubUrl
}: FloatingGalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group perspective-1000"
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -20,
        rotateX: 5,
        rotateY: 5,
        scale: 1.05,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Ombre volumétrique */}
      <motion.div
        className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}40 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
      />

      {/* Cadre du tableau */}
      <motion.div
        className="relative w-80 h-96 rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)`,
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        {/* Reflet du cadre */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)`,
          }}
        />

        {/* Contenu du tableau */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Zone d'image/icône */}
          <motion.div
            className="w-full h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
            }}
            animate={{
              boxShadow: isHovered 
                ? `0 0 30px ${color}60, inset 0 0 30px ${color}20`
                : `0 0 15px ${color}30, inset 0 0 15px ${color}10`,
            }}
          >
            {/* Effet holographique */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
              }}
              animate={{
                x: isHovered ? '100%' : '-100%',
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            <ExternalLink className="w-16 h-16 text-white/80" />
          </motion.div>

          {/* Informations */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <motion.h3
                className="text-2xl font-bold text-white mb-3"
                animate={{
                  textShadow: isHovered 
                    ? `0 0 20px ${color}80`
                    : '0 0 0px transparent',
                }}
              >
                {title}
              </motion.h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Boutons d'action */}
            <motion.div
              className="flex space-x-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={onClick}
                className="flex-1 py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir le projet
              </motion.button>
              
              {githubUrl && (
                <motion.button
                  onClick={() => window.open(githubUrl, '_blank')}
                  className="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Particules flottantes autour du tableau */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: color,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [-20, -60],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Éclairage ambiant */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
} 