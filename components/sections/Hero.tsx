'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Code2, Brain, Database, ShieldCheck } from 'lucide-react';
import Hero3DCanvas from '@/components/canvas/Hero3DCanvas';
import { PERSONAL_INFO } from '@/constants/data';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = PERSONAL_INFO.taglines;

  // Typewriter effect loop
  useEffect(() => {
    const targetText = taglines[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.slice(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(targetText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, taglines]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-animated"
    >
      {/* Three.js Subtle Background Canvas */}
      <Hero3DCanvas />

      {/* Glowing Aurora Blobs */}
      <div className="glow-aurora w-[500px] h-[500px] bg-blue-600/20 top-10 left-10 animate-pulse-slow" />
      <div className="glow-aurora w-[400px] h-[400px] bg-cyan-500/20 bottom-10 right-10 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="glow-aurora w-[350px] h-[350px] bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>Welcoming AI & Full Stack Opportunities</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-sm uppercase tracking-widest text-gray-400 font-mono">
                Engineered for Innovation
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                Hi, I'm{' '}
                <span className="gradient-text font-black">
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
              <span className="text-xl sm:text-3xl font-semibold text-gray-300 font-mono">
                I am a{' '}
                <span className="text-cyan-400 border-b-2 border-cyan-400 pb-0.5">
                  {displayText}
                </span>
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </motion.div>

            {/* One-Line Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-sans"
            >
              Transforming complex data into intelligent, high-impact solutions. Specialized in Deep Learning, Computer Vision pose estimation, low-light image optimization, and responsive web microservices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-105"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-sm font-semibold text-gray-200 hover:text-white backdrop-blur-md transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl font-extrabold text-white font-display">15+</div>
                <div className="text-xs text-gray-400 font-mono">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-display">120+</div>
                <div className="text-xs text-gray-400 font-mono">GitHub Streak</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-display">1 IEEE</div>
                <div className="text-xs text-gray-400 font-mono">Publication</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Profile & Floating AI Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing Ring */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-600 animate-spin-slow shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full rounded-full bg-[#050816] p-3">
                <div className="w-full h-full rounded-full overflow-hidden relative border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Yash Mishra Profile"
                    className="w-full h-full object-cover filter saturate-110 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Deep Learning */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Deep Learning</div>
                <div className="text-[10px] text-gray-400 font-mono">TensorFlow & PyTorch</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Computer Vision */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 px-4 py-2.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Computer Vision</div>
                <div className="text-[10px] text-gray-400 font-mono">MediaPipe & OpenCV</div>
              </div>
            </motion.div>

            {/* Floating Badge 3: IEEE Paper */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-purple-950/60 backdrop-blur-xl border border-purple-500/30 shadow-2xl flex items-center gap-2 hidden sm:flex"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-200">IEEE Author</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
