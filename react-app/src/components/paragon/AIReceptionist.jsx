import { motion } from 'motion/react';
import { MessageCircle, UserCheck, CalendarCheck, Database, BarChart2, RefreshCw, ArrowRight, Bot } from 'lucide-react';
import { AI_RECEPTIONIST } from '../../data/paragon';

const ICON_MAP = { MessageCircle, UserCheck, CalendarCheck, Database, BarChart2, RefreshCw };

// Simulated chat messages for the visual mockup
const CHAT_MESSAGES = [
  { role: 'user', text: 'Hi, what are your hours?' },
  { role: 'bot', text: "Hey! We're available Mon–Fri 8am–6pm. But I can help you right now — want to book a consultation?" },
  { role: 'user', text: 'Yes, tomorrow afternoon works.' },
  { role: 'bot', text: "Perfect. I've got 2 PM and 3:30 PM open tomorrow. Which works better for you?" },
];

const AIReceptionist = () => (
  <section
    id="ai-receptionist"
    className="relative py-24 px-4 sm:px-6 overflow-hidden"
    aria-labelledby="ai-receptionist-heading"
  >
    {/* Full-width gradient band */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F6D]/6 via-transparent to-[#FF8C42]/4" aria-hidden="true" />
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/30 to-transparent" aria-hidden="true" />
    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/20 to-transparent" aria-hidden="true" />

    <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-14 items-center">
      {/* Left: Copy */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
            {AI_RECEPTIONIST.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          id="ai-receptionist-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          {AI_RECEPTIONIST.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/55 text-lg leading-relaxed mb-8"
        >
          {AI_RECEPTIONIST.body}
        </motion.p>

        {/* Feature grid */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="grid sm:grid-cols-2 gap-3 mb-8"
          role="list"
        >
          {AI_RECEPTIONIST.features.map((f) => {
            const Icon = ICON_MAP[f.icon] ?? MessageCircle;
            return (
              <li
                key={f.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF5F6D]/12 border border-[#FF5F6D]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#FF5F6D]" aria-hidden="true" />
                </div>
                <span className="text-sm text-white/70">{f.label}</span>
              </li>
            );
          })}
        </motion.ul>

        {/* Price + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-white">{AI_RECEPTIONIST.price}</span>
              <span className="text-white/40 text-sm">{AI_RECEPTIONIST.period}</span>
            </div>
            <div className="text-xs text-white/35">{AI_RECEPTIONIST.setupFee}</div>
          </div>
          <a
            href={AI_RECEPTIONIST.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] hover:opacity-90 active:scale-95 transition-all shadow-[0_0_28px_rgba(255,95,109,0.35)]"
          >
            {AI_RECEPTIONIST.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Right: Chat mockup */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        aria-label="AI receptionist chat preview"
        className="relative"
      >
        {/* Glow behind widget */}
        <div className="absolute inset-0 -m-8 rounded-3xl bg-[#FF5F6D]/8 blur-[60px]" aria-hidden="true" />

        <div className="relative rounded-2xl border border-white/12 bg-[#0d0d18] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Widget header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8 bg-white/[0.02]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5F6D] to-[#FF8C42] flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Paragon AI</div>
              <div className="flex items-center gap-1 text-xs text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Online — typically replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 min-h-[280px]">
            {CHAT_MESSAGES.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] text-white rounded-br-sm'
                      : 'bg-white/8 border border-white/10 text-white/80 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/8 border border-white/10 flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/40"
                    style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Widget input */}
          <div className="px-5 py-4 border-t border-white/8 bg-white/[0.01]">
            <div className="flex gap-2 items-center bg-white/6 border border-white/10 rounded-xl px-4 py-2.5">
              <span className="text-sm text-white/25 flex-1">Type a message...</span>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF5F6D] to-[#FF8C42] flex items-center justify-center" aria-hidden="true">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AIReceptionist;
