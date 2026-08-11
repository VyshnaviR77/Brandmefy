import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Workflow, Sparkles, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function DashboardShowcase() {
  const [tab, setTab] = useState('analytics');

  return (
    <section className="py-20 relative" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#FF7E1D] mb-3"
          >
            Unified Command Center
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Manage Sites & Automations <span className="gradient-text">In One Dashboard</span>
          </motion.h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { id: 'analytics', label: 'Live Analytics & Traffic', icon: TrendingUp },
            { id: 'leads', label: 'Lead CRM & Pipeline', icon: Users },
            { id: 'canvas', label: 'Automation Nodes', icon: Workflow },
            { id: 'ai', label: 'AI Co-pilot Stream', icon: Sparkles },
          ].map((t) => {
            const Icon = t.icon;
            const isActive = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F59E0B] via-[#FF7E1D] to-[#EF4444] text-white shadow-lg shadow-[#F59E0B]/30 scale-105'
                    : 'glass-panel text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Screen Mockup */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 shadow-2xl bg-[#0b0c14]"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5 text-[#F59E0B]" />
              <span className="font-bold text-white text-sm">Brandmefy Workspace / TechStudio.ai</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> 8 Workflows Active
              </span>
              <span className="text-slate-400 font-mono">Region: us-east (Edge)</span>
            </div>
          </div>

          {/* Dynamic Content based on tab */}
          {tab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-mono">Total Visitors</div>
                <div className="text-3xl font-extrabold text-white mt-1 font-mono">142,890</div>
                <div className="text-xs text-amber-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +34.2% this week
                </div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-mono">Conversion Rate</div>
                <div className="text-3xl font-extrabold text-[#F59E0B] mt-1 font-mono">4.85%</div>
                <div className="text-xs text-amber-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +1.2% after AI optimization
                </div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-mono">Time Saved / Month</div>
                <div className="text-3xl font-extrabold text-[#EF4444] mt-1 font-mono">128 Hours</div>
                <div className="text-xs text-slate-400 mt-2">Automated task equivalent</div>
              </div>
            </div>
          )}

          {tab === 'leads' && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase">Recent AI Lead Activity</div>
              {[
                { name: 'Sarah Jenkins', company: 'Apex Ventures', status: 'High Intent (94%)', action: 'Drip Email Triggered' },
                { name: 'Marcus Vance', company: 'CloudCore Inc', status: 'Booked Demo', action: 'Calendar Synced' },
                { name: 'Elena Rostova', company: 'NovaDesign Studio', status: 'Quote Requested', action: 'Slack Alert Sent' },
              ].map((lead) => (
                <div key={lead.name} className="glass-card p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 text-sm">
                  <div>
                    <div className="font-bold text-white">{lead.name}</div>
                    <div className="text-xs text-slate-400">{lead.company}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
                    {lead.status}
                  </span>
                  <div className="text-xs text-slate-300 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-[#FF7E1D]" />
                    <span>{lead.action}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'canvas' && (
            <div className="p-6 rounded-2xl bg-[#07080e] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="glass-card p-4 rounded-xl border-l-4 border-l-[#F59E0B] w-full md:w-auto">
                <div className="text-xs font-mono text-slate-400">TRIGGER</div>
                <div className="font-bold text-white text-sm mt-1">Form Submission</div>
              </div>
              <div className="text-slate-500 font-mono text-xs">→ AI Analysis →</div>
              <div className="glass-card p-4 rounded-xl border-l-4 border-l-[#FF7E1D] w-full md:w-auto">
                <div className="text-xs font-mono text-slate-400">ACTION 1</div>
                <div className="font-bold text-white text-sm mt-1">Sync HubSpot & Stripe</div>
              </div>
              <div className="text-slate-500 font-mono text-xs">→ Edge Push →</div>
              <div className="glass-card p-4 rounded-xl border-l-4 border-l-[#EF4444] w-full md:w-auto">
                <div className="text-xs font-mono text-slate-400">ACTION 2</div>
                <div className="font-bold text-white text-sm mt-1">Send Custom Onboarding Email</div>
              </div>
            </div>
          )}

          {tab === 'ai' && (
            <div className="p-6 rounded-2xl bg-[#07080e] border border-white/10 space-y-4 text-sm font-mono">
              <div className="flex items-center gap-2 text-[#F59E0B]">
                <Sparkles className="w-4 h-4" />
                <span>AI Co-Pilot Suggestion:</span>
              </div>
              <p className="text-slate-300">
                "We noticed a 14% drop-off on your pricing CTA. Would you like me to generate a 2-variant A/B test with personalized headline copy?"
              </p>
              <div className="flex gap-3 pt-2">
                <button className="px-4 py-2 rounded-xl bg-[#F59E0B] text-black text-xs font-bold hover:opacity-90">
                  Apply A/B Test Now
                </button>
                <button className="px-4 py-2 rounded-xl glass-card text-slate-300 text-xs font-medium">
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
