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
    <section id="achievements" className="py-28 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-purple-600/10 top-1/2 left-0" />
      <div className="glow-aurora w-[400px] h-[400px] bg-cyan-600/10 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honors & Recognition"
          title="Achievements & Engineering Milestones"
          subtitle="Recognition for scientific research, hackathon performance, open-source dedication, and professional certifications."
        />

        {/* Counter Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'IEEE Publication', value: '1', sub: 'Peer-reviewed Paper' },
            { label: 'IBM Certifications', value: '3+', sub: 'Professional AI Track' },
            { label: 'GitHub Streak', value: '120+', sub: 'Days Active Code' },
            { label: 'Projects Built', value: '15+', sub: 'AI & Microservices' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-hud p-6 rounded-3xl border border-white/10 text-center space-y-1 relative overflow-hidden group hover:border-cyan-400/50 shadow-xl"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 font-display">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white font-sans">{stat.label}</div>
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
                className="glass-hud p-7 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Ambient glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-400/20 transition-colors" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.metric && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 shadow-sm">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider font-bold">
                      {item.category} • {item.date}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display mt-1 group-hover:text-cyan-300 transition-colors leading-snug">
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

