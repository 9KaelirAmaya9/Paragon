import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CASE_STUDIES, META } from '../../data/paragon';

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const CaseCard = ({ study, isActive }) => (
  <motion.article
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
    className={`relative rounded-2xl border overflow-hidden ${
      isActive
        ? 'border-[#FF5F6D]/30 bg-gradient-to-br from-white/[0.05] to-white/[0.02]'
        : 'border-white/8 bg-white/[0.02]'
    }`}
  >
    {/* Gradient accent bar */}
    <div className={`h-1 w-full bg-gradient-to-r ${study.gradient}`} aria-hidden="true" />

    <div className="p-8">
      {/* Sector label */}
      <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-medium">
        {study.sector}
      </div>

      {/* Client name */}
      <h3 className="text-xl font-bold text-white mb-6">{study.client}</h3>

      {/* Stat highlight */}
      <div className="mb-6">
        <div className={`text-5xl font-extrabold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent leading-none`}>
          {study.stat}
        </div>
        <div className="text-sm text-white/50 mt-1">{study.statLabel}</div>
      </div>

      {/* Body */}
      <p className="text-white/60 text-sm leading-relaxed mb-6">{study.body}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const CaseStudies = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => (v === 0 ? CASE_STUDIES.length - 1 : v - 1));
  const next = () => setActive((v) => (v === CASE_STUDIES.length - 1 ? 0 : v + 1));

  return (
    <section
      id="case-studies"
      className="relative py-24 px-4 sm:px-6"
      aria-labelledby="case-studies-heading"
    >
      {/* Top divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex mb-4"
            >
              <SectionLabel>Real Results</SectionLabel>
            </motion.div>
            <motion.h2
              id="case-studies-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white"
            >
              Clients Who Grew
              <br />
              <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
                With Paragon
              </span>
            </motion.h2>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop grid: all 4 cards */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <CaseCard study={study} isActive={i === active} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: carousel */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <CaseCard key={CASE_STUDIES[active].id} study={CASE_STUDIES[active]} isActive />
          </AnimatePresence>

          {/* Dots + arrows */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={prev}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white transition-all"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Case study navigation">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-[#FF5F6D]' : 'w-1.5 bg-white/20'
                  }`}
                  aria-label={`Case study ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white transition-all"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={META.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FF8C42] text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            Want results like these? Let&apos;s talk
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
