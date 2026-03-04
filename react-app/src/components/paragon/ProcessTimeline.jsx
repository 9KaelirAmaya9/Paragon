import { motion } from 'motion/react';
import {
  MessageSquare,
  Layout,
  Code2,
  CheckCircle,
  Rocket,
} from 'lucide-react';
import { PROCESS_STEPS, META } from '../../data/paragon';
import { ArrowRight } from 'lucide-react';

const ICON_MAP = { MessageSquare, Layout, Code2, CheckCircle, Rocket };

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const ProcessTimeline = () => (
  <section
    id="process"
    className="relative py-24 px-4 sm:px-6"
    aria-labelledby="process-heading"
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <SectionLabel>Our Process</SectionLabel>
        </motion.div>
        <motion.h2
          id="process-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          From Kickoff to Live —
          <br />
          <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
            In 7 Days
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/55 max-w-lg mx-auto"
        >
          A structured sprint so you always know where things stand. No long waits. No surprises.
        </motion.p>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/30 to-transparent" aria-hidden="true" />

        <ol className="grid grid-cols-5 gap-4" role="list">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] ?? MessageSquare;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border border-[#FF5F6D]/30 bg-gradient-to-br from-[#FF5F6D]/15 to-[#FF8C42]/8 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#FF5F6D]" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FF5F6D] flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>

                <div className="text-xs text-[#FF8C42] font-semibold mb-1">{step.day}</div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{step.body}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: vertical steps */}
      <ol className="lg:hidden flex flex-col gap-0" role="list">
        {PROCESS_STEPS.map((step, i) => {
          const Icon = ICON_MAP[step.icon] ?? MessageSquare;
          const isLast = i === PROCESS_STEPS.length - 1;
          return (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-5"
            >
              {/* Line + icon column */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-[#FF5F6D]/30 bg-gradient-to-br from-[#FF5F6D]/15 to-[#FF8C42]/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#FF5F6D]" aria-hidden="true" />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#FF5F6D]/25 to-transparent my-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1">
                <div className="text-xs text-[#FF8C42] font-semibold mb-0.5">{step.day}</div>
                <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.body}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-white/40 text-sm mb-4">Ready to start your 7-day sprint?</p>
        <a
          href={META.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] hover:opacity-90 active:scale-95 transition-all shadow-[0_0_24px_rgba(255,95,109,0.3)]"
        >
          Book Discovery Call
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProcessTimeline;
