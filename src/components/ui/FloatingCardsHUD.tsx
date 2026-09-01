'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Eye, BarChart3, Cloud, ShieldCheck } from 'lucide-react';

interface FloatingCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  position: string;
  delay: number;
  duration: number;
  rotate: number;
  lineTarget: { x: number; y: number };
}

const CARDS: FloatingCard[] = [
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    subtitle: 'TensorFlow + PyTorch',
    icon: Brain,
    color: 'text-blue-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-blue-500/30',
    position: 'top-2 -left-2 sm:top-4 sm:-left-6',
    delay: 0,
    duration: 5,
    rotate: -2,
    lineTarget: { x: 20, y: 15 },
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    subtitle: 'OpenCV + MediaPipe',
    icon: Eye,
    color: 'text-cyan-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-cyan-500/30',
    position: 'top-20 -right-2 sm:top-14 sm:-right-8',
    delay: 1,
    duration: 6,
    rotate: 3,
    lineTarget: { x: 80, y: 25 },
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Scikit-Learn',
    icon: Cpu,
    color: 'text-indigo-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border-indigo-500/30',
    position: 'top-1/2 -left-6 sm:top-1/2 sm:-left-12 -translate-y-1/2',
    delay: 0.5,
    duration: 5.5,
    rotate: -3,
    lineTarget: { x: 12, y: 50 },
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    subtitle: 'Power BI + SQL',
    icon: BarChart3,
    color: 'text-purple-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border-purple-500/30',
    position: 'bottom-24 -left-2 sm:bottom-20 sm:-left-6',
    delay: 1.5,
    duration: 6.5,
    rotate: 2,
    lineTarget: { x: 22, y: 80 },
  },
  {
    id: 'cloud-ready',
    title: 'Cloud Ready',
    subtitle: 'Docker + GitHub',
    icon: Cloud,
    color: 'text-sky-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] border-sky-500/30',
    position: 'bottom-4 -right-2 sm:bottom-6 sm:-right-6',
    delay: 2,
    duration: 5.2,
    rotate: -2,
    lineTarget: { x: 78, y: 85 },
  },
  {
    id: 'ieee-research',
    title: 'IEEE Research',
    subtitle: 'Published Author',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] border-emerald-500/30',
    position: 'top-1/2 -right-6 sm:top-1/2 sm:-right-12 -translate-y-1/2 hidden sm:flex',
    delay: 0.8,
    duration: 5.8,
    rotate: 4,
    lineTarget: { x: 88, y: 50 },
  },
];

export default function FloatingCardsHUD() {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center pointer-events-none">
      {/* SVG Connecting Pulse Lines from AI Core */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {CARDS.map((card) => (
          <g key={`line-${card.id}`}>
            <line
              x1="50%"
              y1="50%"
              x2={`${card.lineTarget.x}%`}
              y2={`${card.lineTarget.y}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </g>
        ))}
      </svg>

      {/* Floating Cards */}
      <div className="relative z-10 w-full h-full">
        {CARDS.map((card) => {
          const IconComp = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
                rotate: [card.rotate, card.rotate + 1.5, card.rotate],
              }}
              transition={{
                y: {
                  duration: card.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.delay,
                },
                rotate: {
                  duration: card.duration * 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.delay,
                },
                opacity: { duration: 0.6, delay: card.delay },
                scale: { duration: 0.6, delay: card.delay },
              }}
              className={`absolute ${card.position} pointer-events-auto cursor-pointer group`}
            >
              <div
                className={`flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl glass-hud border transition-all duration-300 transform group-hover:scale-105 ${card.glowColor}`}
              >
                <div
                  className={`p-2 rounded-xl bg-white/[0.06] border border-white/10 ${card.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-tight">
                    {card.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
