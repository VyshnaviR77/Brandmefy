import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Workflow, BarChart3, Rocket, Bot, Shield, Check, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: 'Autonomous AI Web Studio',
      description: 'Generate high-converting, responsive websites and web applications in seconds with natural language prompts.',
      color: '#F59E0B',
      features: ['Real-time React/Vite generation', 'Custom theme & palette engine', 'Full source code export'],
    },
    {
      icon: Workflow,
      title: 'Visual Automation Canvas',
      description: 'Connect triggers and actions seamlessly. Automate customer emails, CRM sync, payments, and data collection.',
      color: '#FF7E1D',
      features: ['Drag-and-drop node graph', '300+ Pre-built integration triggers', 'Zero-code webhook management'],
    },
    {
      icon: BarChart3,
      title: 'AI Customer Intelligence',
      description: 'Track visitor interaction, score leads automatically, and let AI trigger tailored sales outreach in real-time.',
      color: '#EF4444',
      features: ['Live behavioral heatmap', 'Automated lead qualification', 'Predictive conversion insights'],
    },
    {
      icon: Rocket,
      title: 'Global Edge Hosting',
      description: 'Deploy instantly with global CDN acceleration, automatic SSL certificates, and zero-downtime updates.',
      color: '#F59E0B',
      features: ['Sub-second page load times', 'Custom domain mapping', 'Infinite auto-scaling infrastructure'],
    },
    {
      icon: Bot,
      title: 'Embedded AI Co-pilot',
      description: 'A dedicated virtual teammate built into your dashboard that writes copy, optimizes layout, and runs campaigns.',
      color: '#FF7E1D',
      features: ['24/7 Copywriting Assistant', 'Automated SEO optimization', 'Dynamic layout recommendations'],
    },
    {
      icon: Shield,
      title: 'Enterprise Trust & Compliance',
      description: 'Bank-grade encryption, SOC2 readiness, role-based access control, and guaranteed data privacy.',
      color: '#EF4444',
      features: ['End-to-end data encryption', 'Automated daily backups', 'Granular team permissions'],
    },
  ];

  return (
    <section className="py-20 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-3"
          >
            All-In-One Platform Engine
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Everything You Need To <span className="gradient-text">Build & Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg"
          >
            Replace fragmented web builders, Zapier subscriptions, and analytics tools with one unified, intelligent OS.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl relative group flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)`,
                      border: `1px solid ${service.color}50`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between group-hover:text-[#F59E0B] transition-colors">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#F59E0B]" />
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
