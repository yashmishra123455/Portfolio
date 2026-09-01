'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[600px] h-[600px] bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-aurora w-[400px] h-[400px] bg-cyan-600/15 top-1/4 left-1/4" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-hud p-10 sm:p-12 rounded-3xl border border-white/10 max-w-md w-full relative z-10 space-y-6 shadow-2xl"
      >
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 mx-auto flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 font-display tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white font-display flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Dimension Out Of Scope
          </h2>
          <p className="text-xs text-gray-300 font-mono leading-relaxed">
            The page telemetry coordinate you requested does not exist or has been relocated in the matrix.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-xs font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Primary Portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
}

