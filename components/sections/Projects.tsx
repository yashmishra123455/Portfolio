'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectModal from '@/components/modals/ProjectModal';
import { PROJECTS } from '@/constants/data';
import { Project } from '@/types';
import { Search, ExternalLink, Github, Sparkles, Eye, Layers } from 'lucide-react';

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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#040612]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-cyan-600/10 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Work"
          title="Award-Winning AI & Full-Stack Projects"
          subtitle="Explore deep learning computer vision architectures, full-stack microservices, and exploratory data analytics applications."
        />

        {/* Controls Bar: Search & Category Filter Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-400 hover:text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by keyword, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
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
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between group shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                    {/* Category Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-[#050816]/80 border border-cyan-500/40 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Tag */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 flex items-center gap-1 backdrop-blur-md">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xs font-extrabold text-cyan-400 font-display">
                            {m.value}
                          </div>
                          <div className="text-[9px] text-gray-400 uppercase font-mono">
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
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-300 bg-white/[0.04] border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-white/5 mt-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/10 transition-colors"
                      aria-label="GitHub repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
                        aria-label="Live Demo"
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

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-gray-400 text-sm">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-cyan-400 underline hover:text-cyan-300"
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
