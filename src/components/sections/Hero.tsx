'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Terminal, Github, Linkedin } from 'lucide-react';
import Hero3DCanvas from '@/components/canvas/Hero3DCanvas';
import HeroBackground from '@/components/ui/HeroBackground';
import FloatingCardsHUD from '@/components/ui/FloatingCardsHUD';
import HeroStatsCards from '@/components/ui/HeroStatsCards';
import { PERSONAL_INFO } from '@/constants/data';

const TYPING_TAGLINES = [
  'AI/ML Engineer',
  'Data Analyst',
  'Software Developer',
  'Computer Vision Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const targetText = TYPING_TAGLINES[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.slice(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(targetText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % TYPING_TAGLINES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#050816]"
    >
      {/* Enhanced Hero Background Layer */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Typewriter & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>Seeking AI/ML & Engineering Opportunities</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* Main Greeting & Name with Exclusive Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400/90 font-mono font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Next-Gen Intelligent Systems</span>
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                Hi, I'm{' '}
                <span className="gradient-name-text font-black block sm:inline">
                  Yash Mishra
                </span>
              </h1>
            </motion.div>

            {/* Animated Typing Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-3xl font-semibold text-gray-200 font-mono">
                I am a{' '}
                <span className="text-cyan-300 border-b-2 border-cyan-400/70 pb-0.5 shadow-[0_4px_12px_rgba(6,182,212,0.3)]">
                  {displayText}
                </span>
                <span className="animate-pulse text-purple-400 font-extrabold ml-1">|</span>
              </span>
            </motion.div>

            {/* Concise Bio / Core Specialization */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-sans"
            >
              Architecting cutting-edge Deep Learning models, real-time Computer Vision pose tracking pipelines, and high-throughput data microservices. IEEE published researcher passionate about bridging AI theory with scalable software execution.
            </motion.p>

            {/* CTA Action Buttons & Social Profile Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary CTA Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-sm font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] transition-all duration-300 hover:-translate-y-1"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              {/* Secondary CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl glass-hud border border-white/15 text-sm font-semibold text-gray-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Icon Profile Links */}
              <div className="flex items-center gap-3 pl-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-xl glass-hud border border-white/15 text-gray-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-xl glass-hud border border-white/15 text-gray-300 hover:text-white hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic AI Core Centerpiece */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            {/* 3D Holographic AI Canvas */}
            <Hero3DCanvas />

            {/* Floating Technology Badges HUD with Connective Lines */}
            <FloatingCardsHUD />
          </div>
        </div>

        {/* Statistics Cards Row */}
        <div className="mt-14 sm:mt-20">
          <HeroStatsCards />
        </div>
      </div>
    </section>
  );
}

