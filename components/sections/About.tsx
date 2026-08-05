'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, Award, Brain, Code, Cpu, Target, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/data';

export default function About() {
  const highlights = [
    { icon: Brain, title: 'AI & Deep Learning', desc: 'Specializing in Convolutional Neural Networks, LSTMs, and Transfer Learning models.' },
    { icon: Cpu, title: 'Computer Vision', desc: 'Real-time human pose estimation, keypoint detection with MediaPipe & OpenCV.' },
    { icon: Code, title: 'Full Stack Web Dev', desc: 'Crafting responsive microservices & frontends with Next.js, React, and Flask APIs.' },
    { icon: Target, title: 'Data Analytics', desc: 'Transforming raw telemetry & commercial datasets into executive insights with Power BI & Pandas.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-cyan-600/10 top-1/3 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Engineering Intelligence from Data"
          subtitle="A passionate AI/ML Specialist & Software Developer bridging deep learning research with production-grade engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-4 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-sm font-bold">
                  01
                </span>
                My Journey & Passion
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> with a specialization in <strong>Data Science & Artificial Intelligence</strong> at Shri Ramswaroop Memorial University (SRMU).
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My core expertise lies at the intersection of <strong>Computer Vision, Deep Learning, and Full Stack Web Architecture</strong>. Whether building real-time human pose safety monitoring systems (Trishul), formulating IEEE-published Fuzzy-CNN low-light image enhancers, or crafting AI personal nutrition trackers (NutriScan), I thrive on converting complex algorithms into real-world utility.
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Production AI Endpoint Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Sub-40ms Computer Vision Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>IEEE Published Researcher</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>IBM Professional Certified</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card p-5 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Education Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Education</h3>
                    <p className="text-xs text-gray-400 font-mono">Academic Background</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30">
                  2022 - 2026
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-sm font-semibold text-cyan-400">
                    Specialization in Data Science & Artificial Intelligence
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Shri Ramswaroop Memorial University (SRMU) / SRMCEM
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Key Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Deep Learning', 'Computer Vision', 'Data Structures', 'Machine Learning', 'DBMS & SQL', 'Python Programming', 'Software Engineering'].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-gray-300 bg-white/[0.04] border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Academic Distinction:</span> Awarded IBM Professional Learning Path certification in Data Science & AI alongside active IEEE research.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
