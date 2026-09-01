'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCES } from '@/constants/data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-blue-600/10 top-1/2 right-0" />
      <div className="glow-aurora w-[400px] h-[400px] bg-purple-600/10 bottom-10 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Career & Education"
          title="Experience & Academic Qualifications"
          subtitle="Track record of high-impact AI/ML engineering, deep learning optimization, and academic excellence."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Glowing Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 -translate-x-1/2 opacity-40 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

          <div className="space-y-14">
            {EXPERIENCES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Center Badge with Pulse */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-[0_0_20px_rgba(6,182,212,0.7)] group">
                    <Briefcase className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping opacity-75" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass-hud p-7 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 space-y-4 group shadow-xl relative overflow-hidden">
                      {/* Ambient background glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

                      {/* Period & Location Badge */}
                      <div className={`flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-purple-300 mt-0.5 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          {item.company}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className={`flex items-start gap-2 ${isEven ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_8px_#06B6D4]" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Measurable Achievements */}
                      <div className="pt-3.5 border-t border-white/10 space-y-2">
                        <div className="text-[10px] font-mono uppercase text-gray-400 font-bold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          Key Impact & Engineering Results
                        </div>
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="text-xs text-cyan-200 bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-500/30 flex items-start gap-2 shadow-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-gray-300 bg-white/[0.05] border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

