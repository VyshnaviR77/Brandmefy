import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      company: 'TechNova AI',
      industry: 'B2B SaaS',
      headline: 'Scaled Lead Capture by 340% in 14 Days',
      quote: 'Brandmefy allowed us to launch 5 custom landing pages with automated lead qualification overnight. What took our engineering team 3 weeks now takes 10 minutes.',
      author: 'David Chen',
      role: 'VP of Growth',
      results: ['340% Lead Boost', '10 Min Build Time', '$18k Saved on Dev'],
    },
    {
      company: 'Veloce Digital',
      industry: 'Creative Agency',
      headline: 'Automated 12,000+ Monthly Inquiries',
      quote: 'The built-in automation canvas is pure magic. As soon as a client submits a project brief, Brandmefy routes it, generates an initial estimate, and alerts our Slack channel.',
      author: 'Sophia Martinez',
      role: 'Founder & CEO',
      results: ['12k Tasks/Mo Automated', 'Zero Code Needed', '99.9% Response Rate'],
    },
  ];

  return (
    <section className="py-20 relative" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#FF7E1D] mb-3"
          >
            Proven Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Real Companies. <span className="gradient-text">Autonomous Results.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((s, idx) => (
            <motion.div
              key={s.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-amber-500/20 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg font-bold text-white">{s.company}</span>
                    <span className="text-xs text-slate-400 block font-mono">{s.industry}</span>
                  </div>
                  <Quote className="w-8 h-8 text-[#F59E0B]/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{s.headline}</h3>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{s.quote}"
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FF7E1D] to-[#EF4444] flex items-center justify-center text-white font-bold text-sm">
                    {s.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{s.author}</div>
                    <div className="text-xs text-slate-400">{s.role}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center bg-[#07080d] p-3 rounded-xl border border-white/5">
                  {s.results.map((res) => (
                    <div key={res} className="text-[11px] font-mono font-bold text-[#F59E0B]">
                      {res}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
