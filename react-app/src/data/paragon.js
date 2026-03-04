// ─────────────────────────────────────────────────────────────
//  Paragon Web Studio — Content Data
//  Update this file to change copy site-wide.
// ─────────────────────────────────────────────────────────────

export const META = {
  siteName: 'Paragon Web Studio',
  tagline: 'AI Websites That Sell for You',
  description:
    'Paragon builds high-converting websites with built-in AI receptionists and automation that turn visitors into clients — 24/7.',
  url: 'https://paragonweb.studio',
  email: 'hello@paragonweb.studio',
  phone: '+1 (555) 000-0000',
  social: {
    twitter: 'https://twitter.com/paragonwebstudio',
    instagram: 'https://instagram.com/paragonwebstudio',
    linkedin: 'https://linkedin.com/company/paragonwebstudio',
  },
  calendly: 'https://calendly.com/paragonweb/strategy',
  ga: process.env.REACT_APP_GA_ID || '',
};

export const NAV_LINKS = [
  { label: 'Why Paragon', href: '#why' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  eyebrow: '50+ businesses launched',
  headline: 'AI Websites That',
  headlineHighlight: 'Sell for You',
  subline: '—&nbsp;Built in 7 Days',
  body: 'Paragon designs and builds high-converting websites with AI receptionists baked in, so you get leads, booked calls, and paying clients while you sleep.',
  ctaPrimary: { label: 'Book Your Free Strategy Call', href: META.calendly },
  ctaSecondary: { label: 'See Our Work', href: '#case-studies' },
  metrics: [
    { value: '50+', label: 'Sites Launched' },
    { value: '$2M+', label: 'Client Revenue Driven' },
    { value: '7 Days', label: 'Avg. Delivery' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
  guarantee: '14-day money-back guarantee — no questions asked.',
};

export const WHY_PARAGON = {
  eyebrow: 'Why Paragon',
  headline: 'Not Your Average Web Agency',
  body: 'Most agencies hand you a pretty brochure and call it a day. We build revenue-generating systems powered by AI — because your website should be your best salesperson.',
  cards: [
    {
      icon: 'Cpu',
      title: 'AI-First Workflow',
      body: 'Automation is baked into every build, not bolted on later. Your site captures, qualifies, and books leads automatically.',
      highlight: 'No extra apps needed',
    },
    {
      icon: 'Zap',
      title: '7-Day Delivery',
      body: 'From kickoff call to live site in one week — guaranteed. No long agency timelines, no endless back-and-forth.',
      highlight: 'Or we refund you',
    },
    {
      icon: 'TrendingUp',
      title: 'Growth Systems',
      body: 'Your site is a sales machine, not a digital brochure. We track conversions, run SEO, and optimize every click.',
      highlight: 'Data-driven from day one',
    },
  ],
};

export const CASE_STUDIES = [
  {
    id: 1,
    sector: 'Personal Injury Law',
    client: 'Harrison & Cole Law',
    stat: '+340%',
    statLabel: 'qualified leads in 90 days',
    body: 'Replaced a static WordPress site with an AI-driven intake flow. The chat bot pre-qualifies leads and books consultations around the clock.',
    tags: ['AI Receptionist', 'SEO', 'Conversion Funnel'],
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    id: 2,
    sector: 'HVAC & Plumbing',
    client: 'Arctic Air Services',
    stat: '3×',
    statLabel: 'inbound call volume',
    body: 'Deployed SMS + chat AI that answers FAQs, collects job details, and dispatches urgent requests — even at 2 AM.',
    tags: ['SMS Automation', 'AI Receptionist', 'Local SEO'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    sector: 'Med Spa',
    client: 'Revive Aesthetics',
    stat: '+180%',
    statLabel: 'online bookings in 60 days',
    body: 'Integrated an AI booking assistant with their EHR system. Clients self-schedule treatments; staff spend zero time on the phone.',
    tags: ['Booking Automation', 'CRM Sync', 'Social Integration'],
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    id: 4,
    sector: 'Real Estate',
    client: 'Nexus Realty Group',
    stat: '2.4×',
    statLabel: 'lead response rate',
    body: 'Automated follow-up sequences triggered the moment a prospect visits a listing page. Agents now close faster with warm, pre-qualified leads.',
    tags: ['Email Automation', 'Lead Scoring', 'Growth Ops'],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export const SERVICES = [
  {
    id: 'website',
    label: 'Website Build',
    icon: 'Globe',
    tagline: 'A conversion machine, live in 7 days.',
    deliverables: [
      '5-page custom site (Home, About, Services, Blog, Contact)',
      'Mobile-first, pixel-perfect responsive design',
      'On-page SEO — titles, meta, schema, sitemap',
      'Speed-optimized (Lighthouse > 90)',
      'Contact form + CRM integration',
      'CMS so you can update content yourself',
      '2 rounds of revisions included',
      '30 days post-launch support',
    ],
    timeline: '7 business days',
    startingAt: '$1,500',
  },
  {
    id: 'receptionist',
    label: 'AI Receptionist',
    icon: 'Bot',
    tagline: 'Your best employee — works 24/7, never calls in sick.',
    deliverables: [
      'Custom-trained chatbot on your business FAQs',
      'Lead capture + qualification flow',
      'Calendar booking (Google, Calendly, or custom)',
      'SMS + website chat unified inbox',
      'CRM push — leads auto-tagged and routed',
      'Escalation to human agent on demand',
      'Analytics dashboard — chats, leads, bookings',
      'Monthly tuning & retraining included',
    ],
    timeline: '3–5 business days to deploy',
    startingAt: '$149 / mo',
  },
  {
    id: 'growth',
    label: 'Growth Ops',
    icon: 'BarChart3',
    tagline: 'Ongoing systems that compound month over month.',
    deliverables: [
      'Monthly SEO content (4 blog posts)',
      'Google Business Profile management',
      'Email nurture sequences (welcome, re-engage, upsell)',
      'Conversion rate A/B testing',
      'Monthly analytics report + strategy call',
      'Ad landing page builds (Google / Meta)',
      'Review generation automation',
      'Priority turnaround on all requests',
    ],
    timeline: 'Ongoing monthly retainer',
    startingAt: '$1,000 / mo',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    day: 'Day 1',
    body: 'We dive into your goals, target audience, competitors, and positioning. You leave with a clear project scope and timeline.',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Design Sprint',
    day: 'Days 2–3',
    body: 'Wireframes and brand direction delivered for your approval. We move fast without sacrificing quality.',
    icon: 'Layout',
  },
  {
    number: '03',
    title: 'Build & Automate',
    day: 'Days 3–5',
    body: 'Full development, AI receptionist setup, and integrations. Every element is built for performance and conversion.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Review & Refine',
    day: 'Day 6',
    body: 'You review the full build. We incorporate your feedback and polish every detail until you love it.',
    icon: 'CheckCircle',
  },
  {
    number: '05',
    title: 'Launch & Optimize',
    day: 'Day 7',
    body: 'We go live, submit to search engines, and hand you the keys. Analytics and 30-day support included.',
    icon: 'Rocket',
  },
];

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$500',
    period: 'one-time',
    tagline: 'Get online fast.',
    description: 'Perfect for solo operators who need a clean, professional presence — quickly.',
    features: [
      '3-page custom site',
      'Mobile-first design',
      'Contact form',
      'Basic on-page SEO',
      '1 revision round',
      '14-day support',
    ],
    notIncluded: ['AI Receptionist', 'CMS', 'Growth Ops'],
    cta: 'Get Started',
    featured: false,
    badge: null,
  },
  {
    id: 'launch',
    name: 'Launch Pro',
    price: '$1,500',
    period: 'one-time',
    tagline: 'Your full sales machine.',
    description: 'The complete website + AI combo for service businesses ready to scale.',
    features: [
      '5-page custom site',
      'AI Chat Widget (30 days included)',
      'CMS — edit content yourself',
      'Advanced SEO + schema',
      'CRM & calendar integration',
      '2 revision rounds',
      '30-day priority support',
      'Speed-optimized (LH > 90)',
    ],
    notIncluded: ['Monthly Growth Ops'],
    cta: 'Book Strategy Call',
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2,500',
    period: 'first month',
    tagline: 'Compound your results.',
    description: 'Launch Pro + ongoing growth ops so your site improves every single month.',
    features: [
      'Everything in Launch Pro',
      'AI Receptionist (ongoing)',
      'Monthly SEO content (4 posts)',
      'Email automation sequences',
      'Monthly analytics + strategy call',
      'Google Business management',
      'Review generation system',
      'A/B conversion testing',
    ],
    notIncluded: [],
    cta: 'Book Strategy Call',
    featured: false,
    badge: 'Best Value',
  },
];

export const AI_RECEPTIONIST = {
  eyebrow: 'Add-on or Standalone',
  headline: 'Your 24/7 AI Sales Rep',
  body: 'While you sleep, your AI receptionist is answering questions, collecting lead info, and booking appointments directly on your calendar. No missed calls. No lost leads.',
  price: '$149',
  period: '/ month',
  setupFee: '$299 one-time setup',
  features: [
    { icon: 'MessageCircle', label: 'Instant chat + SMS responses' },
    { icon: 'UserCheck', label: 'Lead qualification flow' },
    { icon: 'CalendarCheck', label: 'Calendar booking integration' },
    { icon: 'Database', label: 'CRM auto-sync' },
    { icon: 'BarChart2', label: 'Conversation analytics' },
    { icon: 'RefreshCw', label: 'Monthly retraining included' },
  ],
  cta: 'Add AI Receptionist',
  ctaHref: META.calendly,
};

export const FAQS = [
  {
    q: 'How long does it take to build my website?',
    a: 'Our standard delivery is 7 business days from the kickoff call. We have a structured sprint process — no waiting around for weeks. If we miss the deadline for any reason within our control, you get a partial refund.',
  },
  {
    q: "What if I don't like the design? Is there a money-back guarantee?",
    a: "Yes. Every project comes with a 14-day money-back guarantee. If you're not satisfied with the work and we can't resolve it through revisions, we'll refund your payment — no questions asked. We're confident enough in our work to put our money where our mouth is.",
  },
  {
    q: 'Do I need to provide content and images?',
    a: 'You provide your logo, any brand photos, and a brief about your business. We handle the copy, layout, stock imagery (licensed), and all the tech. If you want custom photography or videography, we can connect you with trusted partners.',
  },
  {
    q: 'What exactly does the AI Receptionist do?',
    a: 'The AI Receptionist is a custom-trained chatbot that lives on your website (and optionally SMS). It answers FAQs, collects lead info, qualifies prospects based on your criteria, and books appointments directly to your calendar. It hands off to a human instantly if a visitor requests it.',
  },
  {
    q: 'Can I update my website myself after launch?',
    a: 'Yes. Every Launch Pro and Growth site includes a CMS (content management system) so you can edit text, images, blog posts, and pricing without touching code. We walk you through it on launch day.',
  },
  {
    q: 'What do your revision rounds include?',
    a: 'A revision round covers any design, copy, or layout feedback — layout restructuring, color adjustments, content rewrites, feature tweaks. Starter includes 1 round; Launch Pro and above include 2 rounds. Additional rounds are $150 each.',
  },
  {
    q: 'Do you offer ongoing support after the 14-day period?',
    a: 'Launch Pro clients get 30 days of priority support post-launch. Growth clients get ongoing support as part of the retainer. For Starter clients, we offer a $99/month maintenance plan covering security updates, uptime monitoring, and 1 hour of content edits.',
  },
  {
    q: 'How do I get started?',
    a: "Book a free 20-minute strategy call using the button below. We'll discuss your business, goals, and which package fits best. No hard sell — just clarity on whether we're the right fit.",
  },
];

export const CONTACT = {
  eyebrow: 'Ready to Launch?',
  headline: 'Book Your Free Strategy Call',
  body: "20 minutes. Zero pressure. You'll leave with a clear picture of what your site should do and what it'll take to get there.",
  guarantee: '14-day money-back guarantee on all paid projects.',
  formFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
    {
      id: 'email',
      label: 'Work Email',
      type: 'email',
      required: true,
      placeholder: 'jane@business.com',
    },
    {
      id: 'business',
      label: 'Business Name',
      type: 'text',
      required: false,
      placeholder: 'Smith & Co.',
    },
    {
      id: 'budget',
      label: 'Approximate Budget',
      type: 'select',
      required: false,
      options: ['< $500', '$500 – $1,500', '$1,500 – $3,000', '$3,000+', 'Not sure yet'],
    },
    {
      id: 'message',
      label: 'Tell us about your project',
      type: 'textarea',
      required: false,
      placeholder: "What do you need, and what's holding you back right now?",
    },
  ],
};

export const FOOTER_LINKS = [
  { label: 'Why Paragon', href: '#why' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
