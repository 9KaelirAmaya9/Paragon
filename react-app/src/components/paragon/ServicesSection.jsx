import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Bot, BarChart3, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { SERVICES, META } from '../../data/paragon';

const ICON_MAP = { Globe, Bot, BarChart3 };

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const ServicesSection = () => {
  const [active, setActive] = useState('website');
  const service = SERVICES.find((s) => s.id === active);
  const Icon = ICON_MAP[service.icon] ?? Globe;

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/20 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Services</SectionLabel>
          </motion.div>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          >
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
              Grow Online
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 max-w-lg mx-auto"
          >
            Three integrated offerings — use one or combine them all into a full growth system.
          </motion.p>
        </div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          role="tablist"
          aria-label="Services"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {SERVICES.map((s) => {
            const TabIcon = ICON_MAP[s.icon] ?? Globe;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${s.id}`}
                id={`service-tab-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] text-white shadow-[0_0_24px_rgba(255,95,109,0.35)]'
                    : 'text-white/60 border border-white/10 bg-white/5 hover:text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <TabIcon className="w-4 h-4" aria-hidden="true" />
                {s.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            id={`service-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${active}`}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left: info */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF8C42]/10 border border-[#FF5F6D]/20 mb-6">
                <Icon className="w-7 h-7 text-[#FF5F6D]" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{service.label}</h3>
              <p className="text-[#FF8C42] font-medium mb-4">{service.tagline}</p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-sm text-white/50">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {service.timeline}
                </div>
                <div className="text-sm font-bold text-white">
                  Starting at{' '}
                  <span className="text-[#FF8C42]">{service.startingAt}</span>
                </div>
              </div>

              <a
                href={META.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] hover:opacity-90 active:scale-95 transition-all shadow-[0_0_24px_rgba(255,95,109,0.3)]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Right: deliverables */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
              <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-5">
                What&apos;s included
              </p>
              <ul className="space-y-3" role="list">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 text-[#FF5F6D] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
