'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { RESEARCH_PAPERS } from '@/constants/data';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Sparkles, Award } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-28 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-purple-600/15 bottom-0 right-10" />
      <div className="glow-aurora w-[400px] h-[400px] bg-blue-600/10 top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Peer-Reviewed Science"
          title="IEEE Publications & Research Contributions"
          subtitle="Original research advancing computer vision, low-light image enhancement, and hybrid fuzzy-neural networks."
        />

        <div className="max-w-4xl mx-auto">
          {RESEARCH_PAPERS.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-hud p-8 sm:p-11 rounded-3xl border border-purple-500/40 hover:border-purple-400/70 shadow-[0_0_40px_rgba(139,92,246,0.2)] relative overflow-hidden space-y-6 group"
            >
              {/* Ambient glow accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/30 transition-colors" />

              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 shadow-md">
                  <BookOpen className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span>{paper.publisher} Conference Proceedings • {paper.year}</span>
                </div>
                {paper.citationsCount !== undefined && (
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-500/40 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Citations: {paper.citationsCount}
                  </span>
                )}
              </div>

              {/* Title & Conference */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight group-hover:text-purple-300 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-2.5 flex items-center gap-2 font-mono">
                  <Award className="w-4 h-4 text-amber-400" />
                  Published in: {paper.conference}
                </p>
              </div>

              {/* Abstract Callout */}
              <div className="space-y-2.5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative z-10 shadow-inner">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" /> Executive Abstract
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic font-sans">
                  "{paper.abstract}"
                </p>
              </div>

              {/* Index Keywords */}
              <div className="space-y-2.5 relative z-10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                  IEEE Index Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 shadow-sm"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publication Footer Link */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="text-xs text-gray-300 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                  <span>Peer-Reviewed & Archived on IEEE Xplore</span>
                </div>

                <a
                  href={paper.doiUrl || paper.pdfUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-xs font-bold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
                >
                  <span>View Publication on IEEE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

