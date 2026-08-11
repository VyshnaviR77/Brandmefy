import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Sparkles, UserCheck, ChevronRight } from 'lucide-react';

export default function Industries() {
  const verticals = [
    {
      title: 'SaaS & AI Startups',
      icon: Sparkles,
      tag: 'Tech & Software',
      desc: 'Launch product landing pages, interactive documentation, and automated trial signup onboarding in hours.',
      metrics: '3.4x Higher Trial Conversion',
    },
    {
      title: 'E-Commerce & Digital Brands',
      icon: ShoppingBag,
      tag: 'Retail & Storefronts',
      desc: 'Automate order tracking emails, abandoned cart recoveries, and personalized product recommendation pages.',
      metrics: '42% Increase in Repeat Sales',
    },
    {
      title: 'Agencies & Design Studios',
      icon: Building2,
      tag: 'Service Providers',
      desc: 'Deliver client websites 10x faster. Export clean React code or manage client subscriptions seamlessly.',
      metrics: '85% Reduction in Build Overhead',
    },
    {
      title: 'Consultants & Creators',
      icon: UserCheck,
      tag: 'Personal Brands',
      desc: 'Build high-converting portfolio sites with automated calendar booking and instant lead capture forms.',
      metrics: '24/7 Automated Booking Flow',
    },
  ];

  return (
    <section className="py-20 relative bg-[#0c0d14]/50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-3"
          >
            Tailored For Every Vertical
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Built For <span className="gradient-text">Your Industry</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#F59E0B]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30">
                      {v.tag}
                    </span>
                    <Icon className="w-6 h-6 text-[#FF7E1D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{v.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-400 font-bold">{v.metrics}</span>
                  <a href="#contact" className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold">
                    <span>Explore Template</span>
                    <ChevronRight className="w-4 h-4 text-[#F59E0B]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
