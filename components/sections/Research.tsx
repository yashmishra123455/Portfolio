'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { RESEARCH_PAPERS } from '@/constants/data';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-purple-600/15 bottom-0 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Scientific Research"
          title="IEEE Publications & Research"
          subtitle="Academic research contributions advancing computer vision, deep learning, and hybrid fuzzy-neural architectures."
        />

        <div className="max-w-4xl mx-auto">
          {RESEARCH_PAPERS.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden space-y-6"
            >
              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>{paper.publisher} Conference Proceedings • {paper.year}</span>
                </div>
                {paper.citationsCount !== undefined && (
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/30">
                    Citations: {paper.citationsCount}
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                  {paper.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-2">
                  Published in: {paper.conference}
                </p>
              </div>

              {/* Abstract */}
              <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Abstract
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{paper.abstract}"
                </p>
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Index Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publication Links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Peer-Reviewed & Indexed</span>
                </div>

                <a
                  href={paper.doiUrl || paper.pdfUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all"
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
