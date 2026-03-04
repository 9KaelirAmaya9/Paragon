import { motion } from 'motion/react';
import { Cpu, Zap, TrendingUp } from 'lucide-react';
import { WHY_PARAGON } from '../../data/paragon';

const ICON_MAP = { Cpu, Zap, TrendingUp };

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const WhyParagon = () => (
  <section
    id="why"
    className="relative py-24 px-4 sm:px-6 overflow-hidden"
    aria-labelledby="why-heading"
  >
    {/* Subtle glow */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/30 to-transparent" aria-hidden="true" />

    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <SectionLabel>{WHY_PARAGON.eyebrow}</SectionLabel>
        </motion.div>
        <motion.h2
          id="why-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          {WHY_PARAGON.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/55 max-w-xl mx-auto text-lg"
        >
          {WHY_PARAGON.body}
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {WHY_PARAGON.cards.map((card, i) => {
          const Icon = ICON_MAP[card.icon] ?? Cpu;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 hover:border-[#FF5F6D]/25 hover:bg-[#FF5F6D]/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,95,109,0.08), transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF8C42]/10 border border-[#FF5F6D]/20">
                <Icon className="w-6 h-6 text-[#FF5F6D]" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{card.body}</p>

              {/* Highlight chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5F6D]/10 border border-[#FF5F6D]/20 text-[#FF8C42] text-xs font-semibold">
                <span className="w-1 h-1 rounded-full bg-[#FF5F6D]" aria-hidden="true" />
                {card.highlight}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyParagon;
