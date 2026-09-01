'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 450);
          return 100;
        }
        return prev + 10;
      });
    }, 55);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white select-none"
        >
          {/* Animated Cyber Core Glow Badge */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-spin-slow opacity-70 blur-lg" />
            <div className="relative w-22 h-22 rounded-2xl bg-[#050816] border border-cyan-500/30 flex items-center justify-center shadow-2xl">
              <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-72 space-y-2.5">
            <div className="flex justify-between text-xs text-gray-400 font-mono tracking-wider">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> INITIALIZING AI SYSTEM...
              </span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_12px_#06B6D4]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>

          <p className="mt-5 text-[11px] text-gray-400 font-mono tracking-widest uppercase">
            Yash Mishra • AI/ML Specialist & Software Engineer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

