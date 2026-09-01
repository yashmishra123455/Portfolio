'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectModal from '@/components/modals/ProjectModal';
import { PROJECTS } from '@/constants/data';
import { Project } from '@/types';
import { Search, ExternalLink, Github, Sparkles, Eye, Layers, ArrowUpRight } from 'lucide-react';

const PROJECT_CATEGORIES = ['All', 'Computer Vision', 'AI/ML', 'Full Stack', 'Data Analytics'] as const;

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[550px] h-[550px] bg-cyan-600/10 bottom-10 left-10" />
      <div className="glow-aurora w-[450px] h-[450px] bg-purple-600/10 top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Portfolio"
          title="Award-Winning AI & Full-Stack Innovations"
          subtitle="Engineered with PyTorch, TensorFlow, OpenCV, MediaPipe, and modern Next.js microservices."
        />

        {/* Controls Bar: Category Pills & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-14">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                      : 'text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              placeholder="Search tech, title, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-hud border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-hud rounded-3xl border border-white/10 hover:border-cyan-400/50 overflow-hidden flex flex-col justify-between group shadow-2xl transition-all duration-300 relative"
              >
                {/* Glowing border highlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent opacity-90" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-[#050816]/85 border border-cyan-500/40 backdrop-blur-xl shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Tag */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-amber-950/85 border border-amber-500/40 flex items-center gap-1.5 backdrop-blur-xl shadow-lg">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Hover Quick Overlay Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 text-xs font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:scale-105 transition-transform flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Explore Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xs font-extrabold text-cyan-400 font-display">
                            {m.value}
                          </div>
                          <div className="text-[9px] text-gray-400 uppercase font-mono tracking-tight mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-gray-300 bg-white/[0.05] border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/10 mt-4 relative z-10">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-gray-300 hover:text-white border border-white/10 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/35 text-cyan-300 border border-cyan-500/40 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <p className="text-gray-400 text-sm font-mono">No projects match criteria "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Expandable Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

