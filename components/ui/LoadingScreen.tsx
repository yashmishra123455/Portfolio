'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 10;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white"
        >
          {/* Animated Glow Sphere */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 animate-spin-slow opacity-60 blur-md" />
            <div className="relative w-20 h-20 rounded-full bg-[#050816] border border-white/10 flex items-center justify-center shadow-2xl">
              <span className="font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                YM
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-xs text-gray-400 font-mono">
              <span>INITIALIZING SYSTEM...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500 font-mono tracking-widest uppercase">
            Yash Mishra • AI/ML & Full Stack Engineer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
