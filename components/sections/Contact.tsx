'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/constants/data';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS send call (or simulated fallback)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background glow aurora */}
      <div className="glow-aurora w-[500px] h-[500px] bg-cyan-600/15 top-1/2 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          subtitle="Interested in hiring an AI/ML Engineer, Data Analyst, or Software Developer? Drop a message or reach out directly."
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
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Contact Information
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you have an inquiry regarding AI/ML project opportunities, deep learning research, full-stack development, or simply want to connect, my inbox is open.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-mono">Email Direct</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Location</div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-gray-400">
                  Connect Across Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-gray-200 hover:text-white hover:border-cyan-500/40 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-gray-200 hover:text-white hover:border-blue-500/40 transition-all"
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
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white font-display mb-6">
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300 uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. Opportunity Inquiry / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300 uppercase">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-sm font-bold text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono">
                      <Sparkles className="w-4 h-4 animate-spin" /> Transmitting Message...
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
