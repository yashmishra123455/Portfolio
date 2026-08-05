'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background glow aurora */}
      <div className="glow-aurora w-96 h-96 bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-md relative z-10"
      >
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 mx-auto flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-display">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Dimension Not Found</h2>
          <p className="text-xs text-gray-400 font-mono">
            The page coordinate you requested does not exist or has been relocated in the matrix.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-lg hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
}
