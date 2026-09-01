'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050d] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[600px] h-[600px] bg-blue-600/10 bottom-0 left-1/2 -translate-x-1/2" />
      <div className="glow-aurora w-[400px] h-[400px] bg-cyan-600/10 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[1.5px] shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center">
                  <Terminal className="w-5.5 h-5.5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white font-display">
                  Yash Mishra
                </span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase -mt-0.5">
                  AI/ML & Software Engineer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
              Architecting intelligent computer vision systems, deep learning architectures, and high-performance microservices. IEEE published researcher passionate about advancing AI frontiers.
            </p>

            {/* Live Beacon Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for AI/ML & Engineering Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-gray-400">
                <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a></li>
                <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Skill Stack</a></li>
                <li><a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4">
                Highlights
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-gray-400">
                <li><a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a></li>
                <li><a href="#research" className="hover:text-cyan-300 transition-colors">IEEE Publication</a></li>
                <li><a href="#github" className="hover:text-cyan-300 transition-colors">GitHub Live</a></li>
                <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact Form</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-6">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 shadow-md"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 shadow-md"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl glass-hud border border-white/15 text-xs font-mono font-bold text-gray-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg"
            >
              <span>Scroll To Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© {new Date().getFullYear()} Yash Mishra. Engineered with Next.js 14, Three.js & Framer Motion.</p>
          <p className="flex items-center gap-1.5">
            Crafted for <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AI & Software Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}

