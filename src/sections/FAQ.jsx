import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Brandmefy differ from typical website builders?',
      a: 'Traditional builders give you static templates that require manual editing and separate plugin subscriptions for automation. Brandmefy uses an autonomous AI engine that writes clean React code, generates high-converting designs, and connects workflow automations out of the box.',
    },
    {
      q: 'Do I need any coding skills to use Brandmefy?',
      a: 'Zero coding required! You can build entire web applications and automation pipelines using simple natural language prompts or our intuitive visual drag-and-drop studio.',
    },
    {
      q: 'Can I export the underlying React/Vite source code?',
      a: 'Yes! Pro and Enterprise plans allow complete export of your project source code (React, TypeScript, Tailwind CSS) so your developers can self-host or extend it anytime.',
    },
    {
      q: 'How does the workflow automation feature work?',
      a: 'Our visual canvas lets you set triggers (e.g. form submitted, purchase completed, page visited) and connect them to 300+ integrations like Slack, Stripe, HubSpot, and custom Webhooks automatically.',
    },
    {
      q: 'Can I connect my own custom domain?',
      a: 'Absolutely. Every plan includes free SSL certificates and 1-click custom domain mapping with sub-second global CDN distribution.',
    },
  ];

  return (
    <section className="py-20 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#FF7E1D] mb-3"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl border border-amber-500/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#F59E0B] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#F59E0B]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2"
                    >
                      <p className="pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
