import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Wand2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [promptText, setPromptText] = useState('Create a luxury solar energy SaaS site with automated lead capture & CRM');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedSuccess(true);
      setTimeout(() => setGeneratedSuccess(false), 4000);
    }, 1800);
  };

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden" id="hero">
      {/* Background Ambient Glows - Solar Gold & Crimson */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F59E0B]/25 via-[#FF7E1D]/20 to-[#EF4444]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#F59E0B]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#F59E0B]/40 text-[#F59E0B] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 shadow-lg shadow-[#F59E0B]/10"
        >
          <Sparkles className="w-4 h-4 animate-pulse text-[#F59E0B]" />
          <span>Next-Gen Autonomous Website & Automation Studio</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Create Your Website.{' '}
          <span className="gradient-text block sm:inline mt-2 sm:mt-0">Automate The Rest.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Brandmefy combines autonomous AI website design with seamless workflow automation. 
          Build pixel-perfect web apps and connect live business processes in minutes.
        </motion.p>

        {/* Interactive AI Prompt Simulator Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <form onSubmit={handleGenerate} className="glass-panel p-2 sm:p-3 rounded-2xl sm:rounded-full border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-3 pl-4 w-full sm:w-auto flex-1">
              <Wand2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Describe your website or workflow..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none border-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FF7E1D] to-[#EF4444] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/40 hover:opacity-95 transition-all shrink-0"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Building Studio...</span>
                </>
              ) : (
                <>
                  <span>Generate with AI</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {generatedSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#F59E0B] bg-[#F59E0B]/10 px-4 py-1.5 rounded-full border border-[#F59E0B]/30"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>AI Architecture generated! Launching live preview below...</span>
            </motion.div>
          )}
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
            <span>No Coding Required</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF7E1D]" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#EF4444]" />
            <span>Built-in Autonomous Workflows</span>
          </div>
        </motion.div>

        {/* Hero Interactive Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-14 max-w-5xl mx-auto relative rounded-2xl glass-panel p-4 sm:p-6 border border-amber-500/20 shadow-2xl overflow-hidden"
        >
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">brandmefy.ai/workspace/studio-v2</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-[#F59E0B] font-mono">Live Solar Engine Active</span>
            </div>
          </div>

          {/* Interactive Visual Workspace Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="glass-card p-4 rounded-xl space-y-3 border-l-4 border-l-[#F59E0B]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Step 1 • AI Design</div>
              <div className="text-sm font-semibold text-white">Generative Layout Engine</div>
              <p className="text-xs text-slate-300">Creates responsive React components tuned for conversion & visual prestige.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] w-4/5 animate-pulse" />
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl space-y-3 border-l-4 border-l-[#FF7E1D]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Step 2 • Automation</div>
              <div className="text-sm font-semibold text-white">Logic Canvas & Webhooks</div>
              <p className="text-xs text-slate-300">Connects leads, payments, CRMs, and email drip sequences automatically.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF7E1D] w-full animate-pulse" />
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl space-y-3 border-l-4 border-l-[#EF4444]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Step 3 • Deployment</div>
              <div className="text-sm font-semibold text-white">Global Edge Network</div>
              <p className="text-xs text-slate-300">Instant SSL, CDN distribution, and real-time operational dashboard.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#EF4444] w-11/12 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
