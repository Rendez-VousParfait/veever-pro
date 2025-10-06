'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Hero Section avec effet de parallaxe et morphing
export function SpectacularHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background animé avec particules */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Formes géométriques flottantes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-lg opacity-40"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-25"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Contenu principal avec effet de parallaxe */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo avec animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="text-6xl lg:text-8xl font-bold">
              <motion.span
                className="text-white"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                VEEVER
              </motion.span>
              <motion.span
                className="text-blue-400 ml-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.5)",
                    "0 0 40px rgba(147, 51, 234, 0.8)",
                    "0 0 20px rgba(147, 51, 234, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                PRO
              </motion.span>
            </div>
          </motion.div>

          {/* Titre principal avec effet de révélation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Renforcez votre{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              marque employeur
            </motion.span>
            <br />
            avec des expériences d'entreprise{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500"
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              clés en main
            </motion.span>
            <br />
            à Bordeaux
          </motion.h1>

          {/* Sous-titre avec animation de typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Onboarding, célébrations, cohésion, bien-être : Veever conçoit et organise pour vous des moments authentiques qui transforment vos équipes.
          </motion.p>

          {/* Boutons CTA avec effets hover spectaculaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Demander un devis gratuit</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Découvrir nos formats
            </motion.button>
          </motion.div>

          {/* Indicateurs de confiance avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-16"
          >
            {[
              { icon: "👥", text: "+200 entreprises", color: "text-blue-400" },
              { icon: "⭐", text: "4.9/5 satisfaction", color: "text-yellow-400" },
              { icon: "📍", text: "Bordeaux & région", color: "text-green-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={`font-semibold ${item.color}`}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Section avec effet de glassmorphism
export function GlassmorphismSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative py-20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-sm" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}

// Card avec effet de glassmorphism et animations
export function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
      viewport={{ once: true }}
      className={`backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl p-8 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      {children}
    </motion.div>
  );
}

// Effet de liquide morphing pour les backgrounds
export function LiquidBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-500/20"
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%"
          ],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-pink-400/20 to-orange-500/20"
        animate={{
          borderRadius: [
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%"
          ],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
    </div>
  );
}
