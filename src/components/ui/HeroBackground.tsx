'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Interactive Mouse Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.12), rgba(59, 130, 246, 0.06) 40%, transparent 80%)`,
        }}
      />

      {/* 2. Cybernetic Animated Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70" />

      {/* 3. Glowing Aurora Blobs */}
      <div className="glow-aurora w-[600px] h-[600px] bg-blue-600/20 top-[-100px] left-[-100px] animate-pulse-slow" />
      <div
        className="glow-aurora w-[500px] h-[500px] bg-cyan-500/20 bottom-[-50px] right-[-50px] animate-pulse-slow"
        style={{ animationDelay: '3.5s' }}
      />
      <div className="glow-aurora w-[450px] h-[450px] bg-purple-600/20 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* 4. Digital Floating Squares & Particles */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute border border-cyan-500/20 bg-cyan-500/5 rounded-md"
            style={{
              width: `${16 + (i % 4) * 12}px`,
              height: `${16 + (i % 4) * 12}px`,
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23) % 95}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 8 + (i % 5) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* 5. Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
