import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Rivera',
      title: 'Founder, DesignGrid',
      text: 'Brandmefy completely redefined how our studio operates. We built, automated, and launched 4 client sites in a single weekend.',
      stars: 5,
    },
    {
      name: 'Emily Zhang',
      title: 'Product Lead, Apex Analytics',
      text: 'The AI layout engine produces cleaner code and sleeker design than any traditional site builder I have ever used.',
      stars: 5,
    },
    {
      name: 'Marcus Brody',
      title: 'Growth Director, Solis Solar',
      text: 'Having automation triggers integrated directly into our site leads reduced our customer response time from hours to under 30 seconds.',
      stars: 5,
    },
    {
      name: 'Clara Oswald',
      title: 'Head of Marketing, FutureTech',
      text: 'The ROI was immediate. We saved over $20k in developer contractor fees in our first month alone.',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 relative bg-[#0c0d14]/40" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-3"
          >
            Loved By Builders
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            What Creators Are <span className="gradient-text">Saying</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <div>
                  <div className="font-bold text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <div className="text-slate-400">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
