import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Workflow, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Prompt & AI Generation',
      subtitle: 'Describe your vision in plain language',
      icon: Wand2,
      color: '#F59E0B',
      details: 'Our AI analyzes your business goal, generates a bespoke React layout, writes compelling copy, and sets up high-converting design systems instantly.',
      previewText: 'System output: Created 6 page routes, 14 UI sections, and Solar Gold palette in 1.4 seconds.',
    },
    {
      num: '02',
      title: 'Connect Automations',
      subtitle: 'Automate forms, leads, & workflows',
      icon: Workflow,
      color: '#FF7E1D',
      details: 'Select pre-configured automation templates or drag & drop triggers to connect your site to Slack, HubSpot, Stripe, and Email drip campaigns.',
      previewText: 'System output: Form Submission Trigger → Instant SMS Alert → Stripe Payment Link generated.',
    },
    {
      num: '03',
      title: 'One-Click Global Launch',
      subtitle: 'Deploy live with sub-second speeds',
      icon: Rocket,
      color: '#EF4444',
      details: 'Hit publish to immediately distribute your website to global edge servers with free SSL certificates and automated analytics telemetry.',
      previewText: 'System output: Edge CDN deployed globally. Performance score: 99/100.',
    },
  ];

  return (
    <section className="py-20 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-3"
          >
            Streamlined Execution Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            From Concept To Live Site In <span className="gradient-text">3 Simple Steps</span>
          </motion.h2>
        </div>

        {/* Process Step Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer p-6 rounded-2xl transition-all border ${
                  isActive
                    ? 'glass-panel border-[#F59E0B]/50 shadow-xl shadow-[#F59E0B]/10'
                    : 'glass-card border-white/5 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-slate-300">
                    Step {step.num}
                  </span>
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400">{step.subtitle}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Engine State</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {steps[activeStep].details}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:underline"
              >
                <span>Try this step live in demo studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#08090e] p-6 rounded-2xl border border-white/10 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between text-slate-500 border-b border-white/10 pb-2">
                <span>Terminal Log</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>
              <div className="text-amber-400">✓ Initializing Brandmefy Engine...</div>
              <div className="text-slate-300">&gt; {steps[activeStep].previewText}</div>
              <div className="text-slate-400 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>Status: Ready</span>
                <span className="text-[#F59E0B]">Latency: 12ms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
