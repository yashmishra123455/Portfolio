'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/constants/data';
import { Github, GitCommit, GitBranch, Star, Code2, Flame, ExternalLink, Sparkles } from 'lucide-react';

export default function GithubStats() {
  const languages = [
    { name: 'Python', percentage: 55, color: '#38BDF8' },
    { name: 'Java', percentage: 20, color: '#F59E0B' },
    { name: 'TypeScript / JS', percentage: 15, color: '#818CF8' },
    { name: 'SQL & HTML/CSS', percentage: 10, color: '#EC4899' },
  ];

  return (
    <section id="github" className="py-28 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-cyan-600/10 bottom-0 left-1/2 -translate-x-1/2" />
      <div className="glow-aurora w-[400px] h-[400px] bg-purple-600/10 top-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Open Source & Telemetry"
          title="GitHub Engineering Activity & Metrics"
          subtitle="Real-time open source contributions, public repository metrics, and programming language breakdown."
        />

        {/* GitHub Top Stats Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {[
            { icon: GitCommit, label: 'Commit Streak', value: '120+ Days', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
            { icon: GitBranch, label: 'Repositories', value: '25+ Public', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
            { icon: Star, label: 'Stars Earned', value: '45+', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
            { icon: Flame, label: 'Contributions', value: '500+ / Year', color: 'text-rose-400 border-rose-500/30 bg-rose-500/10' },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-hud p-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 transition-all shadow-xl group"
              >
                <div className={`p-3.5 rounded-2xl border ${stat.color} group-hover:scale-110 transition-transform shadow-md`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Telemetry Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Top Languages Bar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-hud p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> Language Distribution
                </h3>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">Telemetry</span>
              </div>

              {/* Language Breakdown Progress Bars */}
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-200 font-semibold">{lang.name}</span>
                      <span className="text-cyan-400 font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5 border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full shadow-sm"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Primary Stack: Python & PyTorch</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline flex items-center gap-1 font-bold"
              >
                View Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: GitHub Heatmap Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-hud p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white shadow-md">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    @myashmishra
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">Active Open Source Contributor</p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-white transition-all shadow-md"
              >
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Contribution Grid Cells */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Commit Telemetry Visualizer</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 120 Days Active
                </span>
              </div>
              <div className="grid grid-cols-16 sm:grid-cols-20 gap-1.5 p-4.5 rounded-2xl bg-[#03050e] border border-white/10 overflow-x-auto shadow-inner">
                {Array.from({ length: 120 }).map((_, i) => {
                  const intensities = ['bg-gray-800/40', 'bg-cyan-950/70', 'bg-cyan-600/80', 'bg-cyan-400', 'bg-purple-500'];
                  const intensityClass = intensities[Math.floor((Math.sin(i * 1.5) + 1) * 2.2) % intensities.length];
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-[3px] ${intensityClass} transition-transform hover:scale-150 cursor-pointer shadow-sm`}
                      title={`Commit Activity Cell ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-2">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-[2px] bg-gray-800/40" />
                  <span className="w-3 h-3 rounded-[2px] bg-cyan-950/70" />
                  <span className="w-3 h-3 rounded-[2px] bg-cyan-600/80" />
                  <span className="w-3 h-3 rounded-[2px] bg-cyan-400" />
                  <span className="w-3 h-3 rounded-[2px] bg-purple-500" />
                </div>
                <span>More</span>
              </div>
              <span>Updated Live</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

