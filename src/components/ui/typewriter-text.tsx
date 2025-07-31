"use client";

import { TypeAnimation } from 'react-type-animation';

interface TypewriterTextProps {
  sequence: (string | number)[];
  className?: string;
  speed?: number;
}

export default function TypewriterText({ sequence, className, speed = 50 }: TypewriterTextProps) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={speed}
      className={className}
      repeat={Infinity}
    />
  );
} 