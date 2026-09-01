'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, Award, Brain, Code, Cpu, Target, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/data';

export default function About() {
  const highlights = [
    { icon: Brain, title: 'AI & Deep Learning', desc: 'Specializing in Convolutional Neural Networks, LSTMs, and Transfer Learning models.' },
    { icon: Cpu, title: 'Computer Vision', desc: 'Real-time human pose estimation, keypoint detection with MediaPipe & OpenCV.' },
    { icon: Code, title: 'Full Stack Web Dev', desc: 'Crafting responsive microservices & frontends with Next.js, React, and Flask APIs.' },
    { icon: Target, title: 'Data Analytics', desc: 'Transforming raw telemetry & commercial datasets into executive insights with Power BI & Pandas.' },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-cyan-600/10 top-1/3 right-0" />
      <div className="glow-aurora w-[400px] h-[400px] bg-purple-600/10 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Background & Philosophy"
          title="Engineering Intelligence from High-Dimensional Data"
          subtitle="Specializing in bridging deep learning theory with production-grade web microservices and computer vision solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Narrative & Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
          >
            <div className="glass-hud p-8 rounded-3xl space-y-5 border border-white/10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-sm font-bold border border-cyan-500/30">
                  01
                </span>
                Engineering Philosophy & Core Focus
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> specializing in <strong>Data Science & Artificial Intelligence</strong> at Shri Ramswaroop Memorial University (SRMU).
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My work centers on the synthesis of <strong>Computer Vision, Recurrent Neural Networks, and Scalable Web Systems</strong>. Whether architecting real-time pose safety detectors (Trishul), formulating IEEE-published Fuzzy-CNN image enhancers, or creating smart dietary companions (NutriScan), I focus on building software that solves complex real-world challenges.
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300 font-mono">
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
                    className="glass-hud p-5 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all mb-3 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 font-display group-hover:text-cyan-300 transition-colors">
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

          {/* Right Column: Academic Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="glass-hud p-8 sm:p-9 rounded-3xl border border-white/10 space-y-6 relative flex flex-col justify-between w-full shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">Academic Path</h3>
                      <p className="text-xs text-gray-400 font-mono">Higher Education</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 shadow-sm">
                    2022 - 2026
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-sm font-semibold text-cyan-300 mt-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Specialization in Data Science & Artificial Intelligence
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5 font-mono">
                      Shri Ramswaroop Memorial University (SRMU) / SRMCEM
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Key Specialized Coursework:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Deep Learning', 'Computer Vision', 'Data Structures', 'Machine Learning', 'DBMS & SQL', 'Python for AI', 'Software Architecture'].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-xl text-xs font-mono text-gray-300 bg-white/[0.04] border border-white/10"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed flex items-start gap-3 shadow-inner">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Honors & Distinction:</span> IBM Certified Specialist in Artificial Intelligence & Data Science with peer-reviewed IEEE conference publication.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

