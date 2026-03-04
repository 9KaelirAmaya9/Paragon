import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS, META } from '../../data/paragon';

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const PricingCard = ({ tier, delay }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.55, ease: 'easeOut' }}
    className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
      tier.featured
        ? 'border-[#FF5F6D]/40 bg-gradient-to-b from-[#FF5F6D]/8 to-[#FF8C42]/4 shadow-[0_0_60px_rgba(255,95,109,0.15)]'
        : 'border-white/8 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.05]'
    }`}
  >
    {/* Featured badge */}
    {tier.badge && (
      <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold ${
        tier.featured
          ? 'bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] text-white'
          : 'bg-white/10 text-white/70 border border-white/15'
      }`}>
        {tier.badge}
      </div>
    )}

    {/* Top accent bar */}
    {tier.featured && (
      <div className="h-0.5 w-full bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42]" aria-hidden="true" />
    )}

    <div className="flex flex-col flex-1 p-8">
      {/* Plan name */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
        <p className="text-sm text-white/50">{tier.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-extrabold text-white">{tier.price}</span>
          <span className="text-sm text-white/40">{tier.period}</span>
        </div>
        <p className="text-xs text-white/40 mt-1">{tier.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1" role="list">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF5F6D] mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-white/70">{f}</span>
          </li>
        ))}
        {tier.notIncluded.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <XCircle className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-white/30 line-through">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={META.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${
          tier.featured
            ? 'bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] text-white shadow-[0_0_24px_rgba(255,95,109,0.35)] hover:shadow-[0_0_40px_rgba(255,95,109,0.5)] hover:opacity-90'
            : 'bg-white/8 border border-white/12 text-white hover:bg-white/14 hover:border-white/20'
        }`}
      >
        {tier.cta}
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  </motion.article>
);

const PricingSection = () => (
  <section
    id="pricing"
    className="relative py-24 px-4 sm:px-6"
    aria-labelledby="pricing-heading"
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/20 to-transparent" aria-hidden="true" />
    {/* Background glow behind featured card */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF5F6D]/5 blur-[120px] pointer-events-none" aria-hidden="true" />

    <div className="max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <SectionLabel>Pricing</SectionLabel>
        </motion.div>
        <motion.h2
          id="pricing-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          Transparent Pricing.
          <br />
          <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
            Zero Surprises.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/55 max-w-md mx-auto"
        >
          Pick the tier that matches where you are now. Upgrade anytime as you grow.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {PRICING_TIERS.map((tier, i) => (
          <PricingCard key={tier.id} tier={tier} delay={i * 0.12} />
        ))}
      </div>

      {/* Custom / enterprise note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center rounded-2xl border border-white/8 bg-white/[0.02] py-5 px-6"
      >
        <p className="text-sm text-white/50">
          Need something bigger?{' '}
          <a
            href={META.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF8C42] hover:underline font-medium"
          >
            Let&apos;s build a custom plan
          </a>{' '}
          — multi-location, enterprise AI, or white-label available.
        </p>
      </motion.div>

      {/* Guarantee strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40"
      >
        <ShieldCheck className="w-4 h-4 text-[#FF5F6D]/60" aria-hidden="true" />
        14-day money-back guarantee on all projects — no questions asked.
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
