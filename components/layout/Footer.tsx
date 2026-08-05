'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-blue-600/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white font-display">
                Yash Mishra
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              AI/ML Engineer & Full Stack Developer crafting intelligent computer vision systems, deep learning models, and intuitive digital experiences.
            </p>

            {/* Live Beacon Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for AI/ML & Full-Stack Opportunities
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 font-mono mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 font-mono mb-4">
                Highlights
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a></li>
                <li><a href="#research" className="hover:text-cyan-400 transition-colors">Research Paper</a></li>
                <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a></li>
                <li><a href="#github" className="hover:text-cyan-400 transition-colors">GitHub Live</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
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
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Yash Mishra. Built with Next.js 14, Tailwind CSS & Framer Motion.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for AI Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
