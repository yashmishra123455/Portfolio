'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursor === 'pointer' ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Background Interactive Mouse Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.04) 40%, transparent 80%)`,
        }}
      />

      {/* Primary Glowing Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-screen shadow-[0_0_12px_#06B6D4] hidden md:block"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          scale: isHovered ? 2.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30, mass: 0.08 }}
      />

      {/* Trailing Holographic Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-cyan-400/60 pointer-events-none z-50 hidden md:block shadow-[0_0_15px_rgba(6,182,212,0.3)]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#8B5CF6' : '#06B6D4',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, mass: 0.15 }}
      />
    </>
  );
}

