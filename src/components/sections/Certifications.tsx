'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { CERTIFICATIONS } from '@/constants/data';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-blue-600/10 top-1/3 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Specializations"
          subtitle="Industry-recognized certifications powered by IBM Skills Network and cognitive class credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px]">
                    <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center text-cyan-400">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-400 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    Issued by: {cert.issuer}
                  </p>
                </div>

                {/* Skills Learned Badges */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-gray-400">
                    Competencies Verified:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-xs font-mono text-gray-300 bg-white/[0.04] border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Authenticated Certificate</span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
