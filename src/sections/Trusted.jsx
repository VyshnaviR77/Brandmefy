import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe2, Layers, Cloud, Sparkles } from 'lucide-react';

export default function Trusted() {
  const brands = [
    { name: 'AetherAI', icon: Cpu },
    { name: 'NexGen Cloud', icon: Cloud },
    { name: 'Vortex Global', icon: Globe2 },
    { name: 'HyperStack', icon: Layers },
    { name: 'CyberShield', icon: ShieldCheck },
    { name: 'PulseStudio', icon: Sparkles },
  ];

  const stats = [
    { value: '50,000+', label: 'Websites Built' },
    { value: '4.8M+', label: 'Tasks Automated Daily' },
    { value: '99.99%', label: 'Guaranteed Uptime' },
    { value: '10x', label: 'Faster Time-to-Market' },
  ];

  return (
    <section className="py-12 border-y border-amber-500/10 bg-[#0c0d14]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Powering digital growth for hyper-growth teams worldwide
        </p>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 py-3 px-4 glass-card rounded-xl opacity-70 hover:opacity-100 hover:border-[#F59E0B]/40 transition-all cursor-pointer group"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#F59E0B] transition-colors" />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl text-center border border-white/10 hover:border-[#F59E0B]/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text font-mono">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
