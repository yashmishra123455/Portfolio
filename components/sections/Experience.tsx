'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCES } from '@/constants/data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-blue-600/10 top-1/2 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Career & Education"
          title="Experience & Qualifications"
          subtitle="A track record of high-impact AI/ML engineering, software development internships, and academic excellence."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
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
                  {/* Timeline Badge Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
                      {/* Period Badge */}
                      <div className={`flex items-center gap-2 text-xs font-mono text-cyan-400 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                        <span className="text-gray-500">•</span>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-purple-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className={`flex items-start gap-2 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Measurable Achievements */}
                      <div className="pt-3 border-t border-white/10 space-y-1.5">
                        <div className="text-[11px] font-mono uppercase text-gray-400 font-bold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          Key Impact & Measurable Achievements
                        </div>
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="text-xs text-cyan-200 bg-cyan-950/30 p-2 rounded-lg border border-cyan-500/20 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[10px] font-mono text-gray-300 bg-white/[0.04] border border-white/10"
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
