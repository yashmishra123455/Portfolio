'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Cpu, Sparkles, Layers } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#090d24] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Banner & Header */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-[#090d24]/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/20 transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Badges Overlay */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/40">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-display">
                    {m.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Overview & Problem Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Overview
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Problem Statement
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" /> Technical Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 font-mono text-[10px] flex items-center justify-center font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Measurable Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Measured Results
                </h4>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-semibold text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" /> View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-xs font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
