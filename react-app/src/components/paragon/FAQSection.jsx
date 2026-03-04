import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS, META } from '../../data/paragon';

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div className="border-b border-white/8 last:border-0">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
      id={`faq-question-${index}`}
      className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F6D]/50 rounded-lg"
    >
      <span className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
        {faq.q}
      </span>
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-250 ${
          isOpen
            ? 'bg-[#FF5F6D] border-[#FF5F6D] text-white'
            : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
        }`}
        aria-hidden="true"
      >
        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-sm text-white/55 leading-relaxed pb-5 pr-10">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="faq"
      className="relative py-24 px-4 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>FAQ</SectionLabel>
          </motion.div>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          >
            Questions? We&apos;ve Got
            <br />
            <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
              Honest Answers.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-lg mx-auto"
          >
            No agency fluff. Real answers to the questions we hear most.
          </motion.p>
        </div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/8 bg-white/[0.02] px-6 sm:px-8"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/40 mt-8"
        >
          Still have questions?{' '}
          <a
            href={`mailto:${META.email}`}
            className="text-[#FF8C42] hover:underline"
          >
            Email us directly
          </a>{' '}
          or{' '}
          <a
            href={META.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF8C42] hover:underline"
          >
            book a free call.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;
