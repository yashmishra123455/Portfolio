'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILLS } from '@/constants/data';
import { Brain, Code2, Database, Layers, Sparkles, CheckCircle } from 'lucide-react';

const CATEGORIES = ['All', 'Programming', 'AI/ML', 'Data Analytics', 'Development'] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[450px] h-[450px] bg-purple-600/10 top-1/4 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Technical Stack & Expertise"
          subtitle="Comprehensive mastery across deep learning frameworks, data analytics tools, programming languages, and full-stack development."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat === 'AI/ML' && <Brain className="w-3.5 h-3.5" />}
                  {cat === 'Programming' && <Code2 className="w-3.5 h-3.5" />}
                  {cat === 'Data Analytics' && <Database className="w-3.5 h-3.5" />}
                  {cat === 'Development' && <Layers className="w-3.5 h-3.5" />}
                  {cat}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-display">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded border border-cyan-500/30">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill Description */}
                  <p className="text-xs text-gray-300 leading-relaxed min-h-[36px]">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Level Bar */}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-1.5">
                  <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
