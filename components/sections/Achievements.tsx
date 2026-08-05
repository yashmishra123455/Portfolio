'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ACHIEVEMENTS } from '@/constants/data';
import { Trophy, Award, FileText, GitCommit, Sparkles, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const iconMap: Record<string, React.ElementType> = {
    FileText,
    Award,
    Trophy,
    GitCommit,
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-purple-600/10 top-1/2 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honors & Recognition"
          title="Achievements & Milestones"
          subtitle="Recognition for academic excellence, hackathon performance, open-source dedication, and scientific publications."
        />

        {/* Counter Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'IEEE Publication', value: '1', sub: 'Peer-reviewed paper' },
            { label: 'IBM Certifications', value: '3+', sub: 'Professional Learning Path' },
            { label: 'GitHub Streak', value: '120+', sub: 'Days of active code' },
            { label: 'Projects Engineered', value: '15+', sub: 'AI & Full Stack' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-1 relative overflow-hidden group hover:border-cyan-500/40"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-display">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <div className="text-xs text-gray-400 font-mono">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.metric && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                      {item.category} • {item.date}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display mt-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
