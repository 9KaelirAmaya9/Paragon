import { META, FOOTER_LINKS } from '../../data/paragon';

const ParagonFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/6 bg-white/[0.01]" role="contentinfo">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#FF5F6D]/25 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5F6D] to-[#FF8C42] flex items-center justify-center" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" fill="white" fillOpacity="0.9" />
                </svg>
              </span>
              <span className="font-bold text-white text-lg">
                Paragon<span className="text-[#FF5F6D]">.</span>
              </span>
            </a>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              AI-powered websites and automation that turn visitors into clients — built in 7 days.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Twitter / X', href: META.social.twitter, icon: 'X' },
                { label: 'Instagram', href: META.social.instagram, icon: 'IG' },
                { label: 'LinkedIn', href: META.social.linkedin, icon: 'in' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href={`mailto:${META.email}`}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {META.email}
                </a>
              </li>
              <li>
                <a
                  href={META.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FF8C42] hover:text-[#FF5F6D] transition-colors"
                >
                  Book a Free Call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {year} Paragon Web Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ParagonFooter;
