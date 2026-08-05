'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/constants/data';
import { Github, GitCommit, GitBranch, Star, Code2, Flame, ExternalLink } from 'lucide-react';

export default function GithubStats() {
  const languages = [
    { name: 'Python', percentage: 55, color: '#3776AB' },
    { name: 'Java', percentage: 20, color: '#b07219' },
    { name: 'TypeScript / JS', percentage: 15, color: '#3178C6' },
    { name: 'SQL & HTML/CSS', percentage: 10, color: '#e34c26' },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-cyan-600/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Open Source & Code"
          title="GitHub Telemetry & Activity"
          subtitle="Real-time open source contributions, repository activity, and programming language distributions."
        />

        {/* GitHub Top Stats Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: GitCommit, label: 'Commit Streak', value: '120+ Days', color: 'text-amber-400' },
            { icon: GitBranch, label: 'Repositories', value: '25+ Public', color: 'text-cyan-400' },
            { icon: Star, label: 'Stars Earned', value: '45+', color: 'text-purple-400' },
            { icon: Flame, label: 'Contributions', value: '500+ / Year', color: 'text-rose-400' },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-cyan-500/40 transition-all"
              >
                <div className={`p-3 rounded-xl bg-white/[0.05] border border-white/10 ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Telemetry Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Top Languages Bar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" /> Language Distribution
              </h3>
              <span className="text-xs font-mono text-gray-400">GitHub Stats</span>
            </div>

            {/* Language Breakdown Progress Bars */}
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 font-semibold">{lang.name}</span>
                    <span className="text-cyan-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Primary Stack: Python / PyTorch</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                View Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: GitHub Heatmap & Cards Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    @myashmishra
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">Active Open Source Contributor</p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Contribution Grid Cells */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Recent Commit Grid Telemetry</span>
                <span className="text-emerald-400">120 Days Active</span>
              </div>
              <div className="grid grid-cols-16 sm:grid-cols-20 gap-1.5 p-4 rounded-xl bg-[#03050e] border border-white/5 overflow-x-auto">
                {Array.from({ length: 120 }).map((_, i) => {
                  const intensities = ['bg-gray-800/40', 'bg-cyan-950/60', 'bg-cyan-700/80', 'bg-cyan-400', 'bg-purple-500'];
                  const intensityClass = intensities[Math.floor((Math.sin(i * 1.5) + 1) * 2.2) % intensities.length];
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-[2px] ${intensityClass} transition-colors hover:scale-125`}
                      title={`Activity index ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-gray-800/40" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950/60" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700/80" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-500" />
                </div>
                <span>More</span>
              </div>
              <span>Updated Daily</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
