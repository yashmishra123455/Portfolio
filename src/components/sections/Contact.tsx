'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/constants/data';
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulated server submission delay
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error('Email send failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[550px] h-[550px] bg-cyan-600/15 top-1/2 right-10" />
      <div className="glow-aurora w-[450px] h-[450px] bg-purple-600/15 bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Initiate Connection"
          title="Let's Build Something Exceptional"
          subtitle="Seeking a driven AI/ML Engineer, Data Specialist, or Full-Stack Developer? Drop a message or connect directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-hud p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Telemetry
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you have an inquiry regarding AI/ML project opportunities, deep learning research, computer vision deployments, or full-stack software development, my inbox is open.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-4.5 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-cyan-400/50 transition-all shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider">Email Direct</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all shadow-sm"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-4.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-md">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider">Primary Location</div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-5 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold tracking-wider">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-gray-200 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-gray-200 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-hud p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white font-display mb-6">
              Send a Direct Message
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-10 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40 shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your transmission has been received and I will respond to your message promptly.
                  </p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider font-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="e.g. AI/ML Engineering Role / Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider font-semibold">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Share details about your project, team opportunity, or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <Sparkles className="w-4 h-4 animate-spin text-cyan-300" /> Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

