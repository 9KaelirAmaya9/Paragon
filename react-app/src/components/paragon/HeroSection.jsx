import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { HERO, META } from '../../data/paragon';

const Metric = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    className="text-center px-6 py-4 border-r border-white/10 last:border-0"
  >
    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-xs text-white/50 mt-0.5 whitespace-nowrap">{label}</div>
  </motion.div>
);

const HeroSection = () => {
  const handleScrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF5F6D]/8 blur-[120px]" />
        <div className="absolute top-3/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF8C42]/6 blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-600/6 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF5F6D]/30 bg-[#FF5F6D]/10 text-[#FF8C42] text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F6D] animate-pulse" aria-hidden="true" />
          {HERO.eyebrow}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white"
        >
          {HERO.headline}
          <br />
          <span className="bg-gradient-to-r from-[#FF5F6D] via-[#FF7B54] to-[#FF8C42] bg-clip-text text-transparent">
            {HERO.headlineHighlight}
          </span>
          <span className="text-white/60 font-light"> {HERO.subline.replace('&nbsp;', ' ')}</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.6, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          {HERO.body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={META.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] hover:opacity-90 active:scale-95 transition-all duration-200 shadow-[0_0_35px_rgba(255,95,109,0.4)] hover:shadow-[0_0_50px_rgba(255,95,109,0.55)]"
          >
            {HERO.ctaPrimary.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => handleScrollTo(HERO.ctaSecondary.href)}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-200"
          >
            <PlayCircle className="w-4 h-4" aria-hidden="true" />
            {HERO.ctaSecondary.label}
          </button>
        </motion.div>

        {/* Guarantee micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex items-center gap-1.5 text-xs text-white/35"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF5F6D]/60" aria-hidden="true" />
          {HERO.guarantee}
        </motion.p>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl mt-4"
        >
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm flex flex-wrap justify-center divide-x divide-white/10">
            {HERO.metrics.map((m, i) => (
              <Metric key={m.label} value={m.value} label={m.label} delay={0.7 + i * 0.08} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
