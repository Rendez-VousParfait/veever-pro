"use client";

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  glarePosition?: string;
  glareBorderRadius?: string;
}

export default function TiltCard({
  children,
  className,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.02,
  transitionSpeed = 1500,
  glareEnable = true,
  glareMaxOpacity = 0.15,
  glareColor = "#ffffff",
  glarePosition = "bottom",
  glareBorderRadius = "8px",
}: TiltCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={tiltMaxAngleX}
        tiltMaxAngleY={tiltMaxAngleY}
        perspective={perspective}
        scale={scale}
        transitionSpeed={transitionSpeed}
        glareEnable={glareEnable}
        glareMaxOpacity={glareMaxOpacity}
        glareColor={glareColor}
        glarePosition={glarePosition}
        glareBorderRadius={glareBorderRadius}
        className={cn("transform-gpu", className)}
      >
        <div className="relative overflow-hidden rounded-lg border bg-card/50 backdrop-blur-sm text-card-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          {children}
        </div>
      </Tilt>
    </motion.div>
  );
} 