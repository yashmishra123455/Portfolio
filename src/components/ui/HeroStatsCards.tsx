'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Briefcase, FileText, Trophy } from 'lucide-react';

interface StatItem {
  id: string;
  count: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
}

const STATS: StatItem[] = [
  {
    id: 'projects',
    count: 15,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'AI, ML & Full Stack',
    icon: Cpu,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    borderColor: 'group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]',
  },
  {
    id: 'internship',
    count: 1,
    suffix: '+ Yr',
    label: 'AI/ML Internship',
    sublabel: 'Real-world Experience',
    icon: Briefcase,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    borderColor: 'group-hover:border-blue-400/50 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]',
  },
  {
    id: 'research',
    count: 1,
    label: 'IEEE Research Paper',
    sublabel: 'Published Author',
    icon: FileText,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    borderColor: 'group-hover:border-purple-400/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]',
  },
  {
    id: 'hackathons',
    count: 3,
    prefix: 'Top ',
    label: 'Hackathon Finalist',
    sublabel: 'National Awards',
    icon: Trophy,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    borderColor: 'group-hover:border-amber-400/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]',
  },
];

// Helper Counter Component
function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-extrabold text-2xl sm:text-3xl text-white font-display">
      {prefix}{current}{suffix}
    </span>
  );
}

export default function HeroStatsCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full">
      {STATS.map((stat, idx) => {
        const IconComponent = stat.icon;

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
            className="group relative cursor-pointer"
          >
            <div
              className={`p-3.5 sm:p-4 rounded-2xl glass-hud border border-white/10 transition-all duration-300 transform group-hover:-translate-y-1.5 flex flex-col justify-between ${stat.borderColor}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-2 rounded-xl border ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              </div>

              <div>
                <AnimatedCounter value={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
                <h4 className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors mt-0.5">
                  {stat.label}
                </h4>
                <p className="text-[10px] text-gray-400 font-mono tracking-tight mt-0.5">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
