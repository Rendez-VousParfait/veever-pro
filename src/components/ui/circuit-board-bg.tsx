"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CircuitBoardBg() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fond dégradé tech */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30" />
      
      {/* Circuit Board Pattern CSS */}
      <div className="absolute inset-0">
        {/* Lignes horizontales principales */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 60px,
                rgba(59, 130, 246, 0.1) 60px,
                rgba(59, 130, 246, 0.1) 62px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 80px,
                rgba(59, 130, 246, 0.1) 80px,
                rgba(59, 130, 246, 0.1) 82px
              )
            `,
          }}
        />

        {/* Lignes diagonales subtiles */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 120px,
                rgba(59, 130, 246, 0.05) 120px,
                rgba(59, 130, 246, 0.05) 121px
              )
            `,
          }}
        />

        {/* Intersections de circuits */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/30"
              style={{
                left: `${15 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 30}%`,
                width: '4px',
                height: '4px',
              }}
              animate={{
                boxShadow: [
                  '0 0 0 rgba(59, 130, 246, 0)',
                  '0 0 8px rgba(59, 130, 246, 0.5)',
                  '0 0 0 rgba(59, 130, 246, 0)',
                ],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.3)',
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(59, 130, 246, 0.3)',
                ]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Lignes de circuit actives */}
        <div className="absolute inset-0">
          {/* Ligne horizontale active */}
          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: '25%',
              left: '10%',
              width: '80%',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut"
            }}
          />

          {/* Ligne verticale active */}
          <motion.div
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
            style={{
              left: '75%',
              top: '10%',
              height: '80%',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 2.5,
              ease: "easeInOut"
            }}
          />

          {/* Ligne diagonale active */}
          <motion.div
            className="absolute bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            style={{
              top: '60%',
              left: '20%',
              width: '60%',
              height: '1px',
              transform: 'rotate(15deg)',
              transformOrigin: 'center',
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 4,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Effet de survol interactif */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            width: '200px',
            height: '200px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particules de données minimalistes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(34, 197, 94, 0.6)',
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Motifs de processeur */}
        <div className="absolute inset-0">
          {[
            { top: '15%', left: '20%' },
            { top: '70%', left: '80%' },
            { top: '40%', left: '60%' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: pos.top,
                left: pos.left,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-blue-500/20 rounded-sm" />
                <div className="absolute inset-1 border border-blue-500/30 rounded-sm" />
                <div className="absolute inset-2 bg-blue-500/10 rounded-sm" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code binaire subtil */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-green-400/30"
              style={{
                left: `${5 + i * 12}%`,
                top: '5%',
              }}
              animate={{
                y: [0, window.innerHeight || 800],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 4,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-4">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 