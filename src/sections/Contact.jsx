import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Shield, Mail } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-8 sm:p-14 border border-amber-500/30 shadow-2xl overflow-hidden text-center bg-gradient-to-b from-[#13141f] to-[#090a0f]">
          {/* Background Ambient Blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Instant Access • 14-Day Free Trial</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready To Automate Your <span className="gradient-text">Web Presence?</span>
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Join thousands of founders, agencies, and creators building high-converting websites and autonomous workflows in minutes.
            </p>

            {/* Email Signup Form */}
            <div className="mt-8 max-w-xl mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-full glass-card border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FF7E1D] to-[#EF4444] text-white font-bold text-sm shadow-lg shadow-[#F59E0B]/40 hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Welcome aboard! Check your inbox to launch your first studio workspace.</span>
                </motion.div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" /> No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#FF7E1D]" /> Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#EF4444]" /> Setup in under 2 minutes
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
