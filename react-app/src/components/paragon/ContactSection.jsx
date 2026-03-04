import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Phone, Mail, CalendarDays } from 'lucide-react';
import { CONTACT, META } from '../../data/paragon';

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F6D]/25 bg-[#FF5F6D]/8 text-[#FF8C42] text-xs font-semibold tracking-widest uppercase">
    {children}
  </span>
);

const INITIAL_STATE = Object.fromEntries(
  CONTACT.formFields.map((f) => [f.id, ''])
);

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with real form endpoint (Formspree, Netlify Forms, etc.)
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm text-white/80 bg-white/5 border border-white/10 placeholder-white/25 focus:outline-none focus:border-[#FF5F6D]/50 focus:bg-white/8 transition-all duration-200';

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF5F6D]/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/20 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionLabel>{CONTACT.eyebrow}</SectionLabel>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          >
            {CONTACT.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            {CONTACT.body}
          </motion.p>

          {/* Contact details */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="space-y-3 mb-8"
            role="list"
          >
            <li className="flex items-center gap-3 text-sm text-white/55">
              <Mail className="w-4 h-4 text-[#FF5F6D]/70" aria-hidden="true" />
              <a href={`mailto:${META.email}`} className="hover:text-white transition-colors">
                {META.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/55">
              <Phone className="w-4 h-4 text-[#FF5F6D]/70" aria-hidden="true" />
              <a href={`tel:${META.phone}`} className="hover:text-white transition-colors">
                {META.phone}
              </a>
            </li>
          </motion.ul>

          {/* Calendly CTA */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={META.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#FF5F6D]/30 bg-[#FF5F6D]/8 text-white hover:bg-[#FF5F6D]/15 hover:border-[#FF5F6D]/50 transition-all duration-200 group"
          >
            <CalendarDays className="w-5 h-5 text-[#FF5F6D]" aria-hidden="true" />
            <div>
              <div className="text-sm font-bold">Or skip the form</div>
              <div className="text-xs text-white/45">Book a 20-min strategy call directly</div>
            </div>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all ml-auto" aria-hidden="true" />
          </motion.a>

          {/* Guarantee */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-1.5 text-xs text-white/30 mt-5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5F6D]/50" aria-hidden="true" />
            {CONTACT.guarantee}
          </motion.p>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/8 p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
              <p className="text-white/55 text-sm">
                We&apos;ll reach out within one business day. Can&apos;t wait that long?{' '}
                <a
                  href={META.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF8C42] hover:underline"
                >
                  Book a call now.
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 sm:p-8 space-y-5"
              aria-label="Contact form"
            >
              {CONTACT.formFields.map((field) => {
                if (field.type === 'select') {
                  return (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs text-white/45 font-medium mb-1.5">
                        {field.label}
                      </label>
                      <select
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                        className={`${inputBase} cursor-pointer`}
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <option value="" disabled>Select budget range</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt} style={{ background: '#0d0d18' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }
                if (field.type === 'textarea') {
                  return (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs text-white/45 font-medium mb-1.5">
                        {field.label}
                      </label>
                      <textarea
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={4}
                        className={`${inputBase} resize-none`}
                      />
                    </div>
                  );
                }
                return (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs text-white/45 font-medium mb-1.5">
                      {field.label}
                      {field.required && <span className="text-[#FF5F6D] ml-0.5">*</span>}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className={inputBase}
                      autoComplete={field.id === 'email' ? 'email' : field.id === 'name' ? 'name' : 'off'}
                    />
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5F6D] to-[#FF8C42] hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-[0_0_28px_rgba(255,95,109,0.3)]"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
