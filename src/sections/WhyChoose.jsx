import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

export default function WhyChoose() {
  const comparisons = [
    { feature: 'Autonomous Website Build Time', brandmefy: '< 3 Minutes', traditional: '2 to 6 Weeks' },
    { feature: 'Built-in Native Workflow Automation', brandmefy: 'Included (Zero Code)', traditional: 'Paid 3rd-Party Add-ons' },
    { feature: '24/7 AI Copywriting & Optimization', brandmefy: 'Unlimited Real-time AI', traditional: 'Manual / Freelancer Costs' },
    { feature: 'Real-time Lead Qualification & CRM', brandmefy: 'Native AI Pipeline', traditional: 'Complex Integration Setup' },
    { feature: 'Deployment & Global Edge Hosting', brandmefy: 'Instant Edge SSL/CDN', traditional: 'Manual Server Management' },
    { feature: 'Monthly Operating Cost', brandmefy: '$29 / Month', traditional: '$1,500+ / Month' },
  ];

  return (
    <section className="py-20 relative bg-[#0c0d14]/40" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#FF7E1D] mb-3"
          >
            The Brandmefy Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Smart Teams Choose <span className="gradient-text">Brandmefy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg"
          >
            Stop spending thousands on fragmented tools and agencies. See how Brandmefy compares to traditional setups.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="py-5 px-6 text-sm font-bold text-slate-300">Feature / Capability</th>
                  <th className="py-5 px-6 text-sm font-extrabold text-white bg-gradient-to-r from-[#F59E0B]/20 to-[#EF4444]/20 border-x border-[#F59E0B]/30">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                      <span>Brandmefy AI OS</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400">Traditional Agency / Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-[#F59E0B] bg-gradient-to-r from-[#F59E0B]/10 to-[#EF4444]/10 border-x border-[#F59E0B]/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#F59E0B]" />
                        <span>{row.brandmefy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
