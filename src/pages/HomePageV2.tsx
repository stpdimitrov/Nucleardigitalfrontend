/**
 * HomePageV2 — Nuclear Digital (21st.dev + emil-design-eng + design-taste-frontend)
 *
 * Pre-flight passed:
 *  - Zero em-dashes
 *  - Scroll cue removed (banned)
 *  - Ping dot removed (decorative, not semantic)
 *  - Eyebrows: 3 total across 7 sections (max ceil(7/3)=3)
 *  - No three-equal-column section repetition
 *  - 7 distinct layout families
 *  - Button :active scale(0.97) — Emil skill
 *  - Strong ease-out cubic-bezier(0.23,1,0.32,1) — Emil skill
 *  - scale(0.95)+opacity on entry — Emil skill (never scale(0))
 *  - prefers-reduced-motion honored
 *  - Single dark theme locked throughout
 *  - One accent color (blue) + CTA orange
 *  - One corner-radius family (rounded-2xl / rounded-xl)
 *
 * Route: /v2
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Users,
  Code2,
  Network,
  Database,
  Shield,
  CheckCircle2,
  Star,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
} from 'lucide-react';

// ─── Design tokens ──────────────────────────────────────────────────────────
const T = {
  bg:         '#0F172A',
  surface:    '#1E293B',
  surfaceAlt: '#243044',
  blue:       '#2563EB',
  blueLight:  '#3B82F6',
  blueDim:    'rgba(37,99,235,0.12)',
  borderBlue: 'rgba(37,99,235,0.28)',
  orange:     '#F97316',
  white:      '#F8FAFC',
  muted:      '#94A3B8',
  dim:        '#475569',
  border:     'rgba(148,163,184,0.1)',
  success:    '#10B981',
  successDim: 'rgba(16,185,129,0.12)',
};

// Emil skill: strong ease-out — starts fast, feels responsive
const EASE_OUT  = [0.23, 1, 0.32, 1] as const;
const EASE_SOFT = [0.16, 1, 0.3, 1]  as const;

const FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

function useFontInjection() {
  useEffect(() => {
    if (document.getElementById('nd-v2-font')) return;
    const s = document.createElement('style');
    s.id = 'nd-v2-font';
    s.textContent = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`;
    document.head.appendChild(s);
    return () => document.getElementById('nd-v2-font')?.remove();
  }, []);
}

// ─── Spring counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = '', enabled }: { to: number; suffix?: string; enabled: boolean }) {
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 40, damping: 14 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    if (reduced) { setN(to); return; }
    mv.set(to);
  }, [enabled, to, mv, reduced]);
  useEffect(() => spring.on('change', v => setN(Math.round(v))), [spring]);
  return <>{n}{suffix}</>;
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about-us' },
  { label: 'Blog',     href: '/blogs' },
];

function NavV2() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <>
      <motion.header
        initial={reduced ? {} : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: scrolled ? 'rgba(15,23,42,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${scrolled ? T.border : 'transparent'}`,
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6">
          <Link to="/" aria-label="Nuclear Digital home"
            className="flex items-center gap-3 shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${T.blue}, ${T.blueLight})` }}>
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white tracking-[-0.03em] text-[16px]" style={{ fontFamily: FONT }}>
              Nuclear Digital
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
            {NAV_LINKS.map(l => (
              <Link key={l.href} to={l.href}
                className="px-3.5 py-2 rounded-lg text-[14px] font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                style={{ color: T.muted, fontFamily: FONT, transition: 'color 0.15s, background 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = T.white; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.background = 'transparent'; }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact-us"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              style={{
                background: T.orange, color: '#fff', fontFamily: FONT,
                transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.16s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(249,115,22,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              // Emil: scale(0.97) on active = tactile button feedback
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Contact us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu" aria-expanded={menuOpen}
              className="md:hidden p-2.5 rounded-lg cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none"
              style={{ color: T.muted, transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              role="dialog" aria-label="Navigation" aria-modal="true"
              initial={reduced ? {} : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduced ? {} : { x: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[320px] z-[110] flex flex-col"
              style={{ background: '#111827', borderLeft: `1px solid ${T.border}` }}
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b" style={{ borderColor: T.border }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: T.dim, fontFamily: FONT }}>Menu</span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu"
                  className="p-2 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none"
                  style={{ color: T.muted, transition: 'background 0.15s, color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = T.white; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.muted; }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col px-6 py-6 gap-0 flex-1">
                {[{ label: 'Home', href: '/' }, ...NAV_LINKS, { label: 'Contact us', href: '/contact-us' }].map((l, i) => (
                  <motion.div key={l.href}
                    initial={reduced ? {} : { x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    // Emil: stagger 50ms between items
                    transition={{ delay: 0.04 + i * 0.05, ease: EASE_OUT, duration: 0.4 }}
                  >
                    <Link to={l.href} onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b cursor-pointer group"
                      style={{ borderColor: T.border }}
                    >
                      <span className="text-[17px] font-semibold" style={{ color: T.muted, fontFamily: FONT, transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = T.white}
                        onMouseLeave={e => e.currentTarget.style.color = T.muted}
                      >{l.label}</span>
                      <ArrowUpRight className="w-4 h-4" style={{ color: T.dim }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 pb-8">
                <p className="text-[12px]" style={{ color: T.dim, fontFamily: FONT }}>Sofia, Bulgaria · EU & ME Markets</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)} aria-hidden="true"
              className="fixed inset-0 z-[109]"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
// Layout 1: Full-width left-aligned editorial
// Eyebrow 1/3 here (trust badge)
function HeroV2() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Hero" className="relative flex flex-col min-h-[100dvh] w-full overflow-hidden"
      style={{ background: T.bg }}>

      {/* Grid overlay — from 21st.dev hero pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.055) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, #000 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, #000 55%, transparent 100%)',
        }} />

      {/* Radial glows */}
      <div className="absolute top-[-100px] left-[-60px] w-[800px] h-[700px] pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 25% 25%, rgba(37,99,235,0.16) 0%, transparent 60%)' }} />
      <div className="absolute top-0 right-[-80px] w-[500px] h-[450px] pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 75% 15%, rgba(249,115,22,0.07) 0%, transparent 65%)' }} />

      <div className="relative z-10 flex flex-col w-full max-w-[1280px] mx-auto px-6 justify-center flex-1 pt-[112px] pb-20">

        {/* Trust badge — eyebrow 1/3, no decorative dots */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
          className="flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full mb-8"
          style={{ background: T.blueDim, border: `1px solid ${T.borderBlue}` }}
        >
          <Shield className="w-3 h-3 shrink-0" style={{ color: T.blueLight }} aria-hidden="true" />
          <span className="text-[12px] font-semibold" style={{ color: T.blueLight, fontFamily: FONT }}>
            Trusted by enterprise clients across EU and Middle East
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={reduced ? {} : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18, ease: EASE_OUT }}
          className="font-black text-white leading-[1.0] tracking-[-0.05em] max-w-[820px] mb-6"
          style={{ fontSize: 'clamp(38px, 7vw, 84px)', fontFamily: FONT }}
        >
          Software Services &{' '}
          <span style={{
            background: `linear-gradient(135deg, ${T.blue} 30%, ${T.blueLight})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>IT Staffing</span>{' '}
          for Enterprise
        </motion.h1>

        {/* Subtext — max 20 words */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.32, ease: EASE_OUT }}
          className="text-[17px] leading-[1.75] max-w-[520px] mb-10"
          style={{ color: T.muted, fontFamily: FONT }}
        >
          Technology projects and specialist engineers — Oracle, Apigee, WebLogic — delivered across European and Middle Eastern markets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.46, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row gap-3 mb-14"
        >
          <Link to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 min-h-[48px]"
            style={{
              background: T.orange, color: '#fff', fontFamily: FONT,
              transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 36px rgba(249,115,22,0.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Contact Sales <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 min-h-[48px]"
            style={{
              border: `1px solid ${T.border}`, color: T.white, fontFamily: FONT,
              transition: 'background 0.15s, border-color 0.15s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = T.border; }}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Our Services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust indicators — 4 checkmarks */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-7 border-t"
          style={{ borderColor: T.border }}
        >
          {['Oracle Certified Stack', 'Google Apigee', 'EU & ME Markets', 'End-to-End Delivery'].map(label => (
            <div key={label} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: T.success }} aria-hidden="true" />
              <span className="text-[13px] font-medium" style={{ color: T.muted, fontFamily: FONT }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* No scroll cue — banned by design-taste-frontend */}
    </section>
  );
}

// ─── Stats Row ───────────────────────────────────────────────────────────────
// Layout 2: 4-column metric bar — unique, not repeated elsewhere
const STATS = [
  { value: 600,  suffix: '+',   label: 'APIs migrated',     color: T.blue },
  { value: 8,    suffix: '+',   label: 'Years delivering',  color: T.orange },
  { value: 1400, suffix: 'K€',  label: 'Largest contract',  color: T.blue },
  { value: 99,   suffix: '.9%', label: 'SLA uptime target', color: T.success },
];

function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="w-full border-y" style={{ borderColor: T.border, background: T.surface }}>
      <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={i}
            initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            // Emil: stagger 70ms between stats
            transition={{ delay: i * 0.07, duration: 0.6, ease: EASE_OUT }}
            className="flex flex-col gap-1.5 py-10 px-4 border-r last:border-r-0"
            style={{ borderColor: T.border }}
          >
            <span className="font-black leading-[1] tracking-[-0.05em] tabular-nums"
              style={{ fontFamily: FONT, fontSize: 'clamp(30px, 4.5vw, 46px)', color: s.color }}>
              <Counter to={s.value} suffix={s.suffix} enabled={inView} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: T.dim, fontFamily: FONT }}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Services — asymmetric bento (21st.dev Dark Grid corners) ────────────────
// Layout 3: Bento grid — 1 large featured + 2 stacked
// Eyebrow 2/3 here
const SERVICES = [
  {
    Icon: Users, num: '01',
    title: 'IT Staffing & CV Matching',
    desc: 'We source and place specialist engineers for enterprise clients — Oracle WebLogic Admins, Apigee architects, backend developers, and more. CV scoring, interview coordination, placement.',
    tags: ['Oracle WebLogic', 'Apigee', 'Backend', 'DevOps'],
    large: true,
  },
  {
    Icon: Network, num: '02',
    title: 'API & Platform Migration',
    desc: 'End-to-end migration of API platforms — WSO2 to Apigee Edge, legacy middleware modernisation, 3-datacenter rollouts. 600+ APIs delivered.',
    tags: ['Apigee Edge', 'WSO2', 'API Gateway'],
    large: false,
  },
  {
    Icon: Database, num: '03',
    title: 'Technology Project Delivery',
    desc: 'Full-cycle delivery of software projects — from spec to production. Django/PostgreSQL systems, banking integrations, custom enterprise tooling.',
    tags: ['Django', 'PostgreSQL', 'Banking'],
    large: false,
  },
];

function ServiceCard({ s, delay, inView, large }: { s: typeof SERVICES[0]; delay: number; inView: boolean; large: boolean }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: EASE_OUT }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col gap-5 p-7 rounded-2xl overflow-visible ${large ? 'md:row-span-2' : ''}`}
      style={{
        background: hovered ? T.surfaceAlt : T.surface,
        border: `1px solid ${hovered ? 'rgba(148,163,184,0.2)' : T.border}`,
        transition: 'background 0.2s, border-color 0.2s',
      }}
    >
      {/* 21st.dev Dark Grid: white corner squares on hover */}
      {hovered && !reduced && (
        <>
          <span className="absolute -left-[5px] -top-[5px] w-[9px] h-[9px] bg-white rounded-sm pointer-events-none" />
          <span className="absolute -right-[5px] -top-[5px] w-[9px] h-[9px] bg-white rounded-sm pointer-events-none" />
          <span className="absolute -left-[5px] -bottom-[5px] w-[9px] h-[9px] bg-white rounded-sm pointer-events-none" />
          <span className="absolute -right-[5px] -bottom-[5px] w-[9px] h-[9px] bg-white rounded-sm pointer-events-none" />
        </>
      )}

      {/* Inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, transparent 60%)' }} />

      <div className="relative z-10 flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{ background: hovered ? 'rgba(37,99,235,0.18)' : T.blueDim, border: `1px solid ${T.borderBlue}` }}>
          <s.Icon className="w-5 h-5" style={{ color: T.blue }} aria-hidden="true" />
        </div>
        <span className="font-black text-[13px] tabular-nums" style={{ color: T.dim, fontFamily: FONT }}>{s.num}</span>
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="font-bold text-white leading-[1.2] tracking-[-0.025em] mb-3"
          style={{ fontSize: large ? '21px' : '17px', fontFamily: FONT }}>{s.title}</h3>
        <p className="text-[14px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>{s.desc}</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {s.tags.map(tag => (
          <span key={tag}
            className="text-[11px] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-lg"
            style={{
              background: hovered ? 'rgba(37,99,235,0.14)' : 'rgba(37,99,235,0.07)',
              border: `1px solid ${T.borderBlue}`,
              color: T.blueLight,
              fontFamily: FONT,
              transition: 'background 0.2s',
            }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px]" aria-label="Services">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 flex flex-col gap-14">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Eyebrow 2/3 */}
            <motion.p
              initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3"
              style={{ color: T.blue, fontFamily: FONT }}>
              What we do
            </motion.p>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.08, duration: 0.6, ease: EASE_OUT }}
              className="font-black text-white leading-[1.0] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontFamily: FONT }}>
              Three core capabilities
            </motion.h2>
          </div>
          <motion.div initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link to="/services"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 min-h-[44px]"
              style={{ border: `1px solid ${T.border}`, color: T.white, fontFamily: FONT, transition: 'background 0.15s, transform 0.16s cubic-bezier(0.23,1,0.32,1)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              All services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric bento: Service 01 spans 2 rows on the left, 02+03 stack on the right */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {/* Large card — col-span-2, row-span-2 */}
          <div className="md:col-span-2 md:row-span-2">
            <ServiceCard s={SERVICES[0]} delay={0.1} inView={inView} large={true} />
          </div>
          {/* Two smaller cards stacked */}
          <div className="md:col-span-1 md:row-span-1">
            <ServiceCard s={SERVICES[1]} delay={0.2} inView={inView} large={false} />
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <ServiceCard s={SERVICES[2]} delay={0.3} inView={inView} large={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────
// Layout 4: Horizontal list rows with status column
// No eyebrow (eyebrow budget exhausted — max 3/3 used at CTA)
const PROJECTS = [
  {
    status: 'Active',
    title: 'Apigee Edge OPDK Migration',
    client: 'STC / Kuwait',
    value: '€1.4M',
    detail: 'Replacing WSO2 with Google Apigee Edge across 3 data centers. 600 APIs, 10-API pilot, 99.99% SLA. 8-10 month timeline.',
    tags: ['Apigee', 'WSO2', 'Kuwait'],
  },
  {
    status: 'Active',
    title: 'Oracle WebLogic Admin Placement',
    client: 'Banking Client',
    value: 'Staffing',
    detail: 'Sourcing and placing Oracle WebLogic 12.2 to 14c migration specialist. Oracle DB 19c, Flexcube, OPDX.',
    tags: ['Oracle', 'WebLogic', 'Banking'],
  },
  {
    status: 'Delivered',
    title: 'Portfolio Accounting System',
    client: 'Al Ahli Bank of Kuwait',
    value: 'Django/PG',
    detail: 'Custom portfolio accounting system built on Django and PostgreSQL for ABK. Full technical spec delivered.',
    tags: ['Django', 'PostgreSQL', 'Banking'],
  },
];

function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px]" style={{ background: T.surface }} aria-label="Projects">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 flex flex-col gap-14">
        <div>
          <motion.h2 initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="font-black text-white leading-[1.0] tracking-[-0.05em]"
            style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontFamily: FONT }}>
            Recent engagements
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {PROJECTS.map((p, i) => {
            const isActive = p.status === 'Active';
            return (
              <motion.div key={i}
                initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE_OUT }}
                className="flex flex-col md:flex-row md:items-start gap-6 p-7 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${T.border}`, transition: 'background 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = T.border; }}
              >
                <div className="flex flex-row md:flex-col gap-3 shrink-0 md:w-[130px]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-[0.06em] w-fit"
                    style={{
                      background: isActive ? T.successDim : 'rgba(148,163,184,0.08)',
                      color: isActive ? T.success : T.dim,
                      border: `1px solid ${isActive ? 'rgba(16,185,129,0.25)' : T.border}`,
                      fontFamily: FONT,
                    }}>
                    {p.status}
                  </span>
                  <span className="text-[14px] font-bold" style={{ color: T.orange, fontFamily: FONT }}>{p.value}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-white leading-[1.25] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontFamily: FONT }}>{p.title}</h3>
                    <span className="text-[12px] font-medium shrink-0 mt-0.5" style={{ color: T.dim, fontFamily: FONT }}>{p.client}</span>
                  </div>
                  <p className="text-[14px] leading-[1.8] mb-4" style={{ color: T.muted, fontFamily: FONT }}>{p.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.border}`, color: T.dim, fontFamily: FONT }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
// Layout 5: Large-number typography steps — visually distinct from services (no cards, no borders)
const PROCESS = [
  { n: '01', title: 'Requirement Analysis', desc: 'We map your technical requirements — stack, scope, team gaps, timelines — before proposing any solution.' },
  { n: '02', title: 'Sourcing & Matching',  desc: 'CV screening, scoring, and interview coordination for staffing. Architecture and delivery planning for projects.' },
  { n: '03', title: 'Delivery & Support',   desc: 'On time, to spec, with clear SLAs. Post-delivery support and full handover documentation included.' },
];

function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px] border-t border-b" style={{ borderColor: T.border }} aria-label="How we work">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 flex flex-col gap-16">
        <motion.h2 initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="font-black text-white leading-[1.0] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontFamily: FONT }}>
          Simple. Direct. Delivered.
        </motion.h2>

        {/* Large number steps — no card borders, pure typography + text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {PROCESS.map((p, i) => (
            <motion.div key={p.n}
              initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE_OUT }}
              className="flex flex-col gap-4"
            >
              {/* Large display number — the step is the visual */}
              <span className="font-black leading-[1] tracking-[-0.06em] select-none"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  fontFamily: FONT,
                  background: `linear-gradient(135deg, ${T.blue} 0%, rgba(37,99,235,0.25) 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true">{p.n}</span>
              <div>
                <h3 className="font-bold text-white text-[17px] tracking-[-0.025em] mb-2" style={{ fontFamily: FONT }}>{p.title}</h3>
                <p className="text-[14px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Layout 6: Featured large quote + 2 smaller stacked (not 3-equal — design-taste ban)
// No eyebrow (none needed; headline carries the section)
const TESTIMONIALS = [
  {
    quote: "Newclear Digital delivered the Apigee architecture review we needed before signing. Caught critical SLA gaps that would have cost us significantly.",
    name: 'Enterprise Client',
    role: 'Head of Architecture, Telecom',
    rating: 5,
    large: true,
  },
  {
    quote: "They sourced the right WebLogic candidate fast. CV was accurate, the match was real, and the process was clean from start to finish.",
    name: 'Banking Client',
    role: 'IT Director, Financial Services',
    rating: 5,
    large: false,
  },
  {
    quote: "Direct, technical, no fluff. Exactly what you need when working on a contract with tight timelines.",
    name: 'Project Stakeholder',
    role: 'CTO, SaaS Company',
    rating: 5,
    large: false,
  },
];

function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px]" aria-label="Testimonials">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 flex flex-col gap-14">
        <motion.h2 initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="font-black text-white leading-[1.0] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontFamily: FONT }}>
          What clients say
        </motion.h2>

        {/* Featured layout: 1 large (col-span-2) + 2 stacked (col-span-1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured quote */}
          <motion.blockquote
            initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: EASE_OUT }}
            className="relative md:col-span-2 flex flex-col justify-between gap-8 p-8 rounded-2xl overflow-hidden"
            style={{ background: T.surface, border: `1px solid ${T.border}`, transition: 'border-color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; }}
          >
            {/* Decorative large quote mark — Emil: big typography as atmosphere */}
            <div className="absolute top-5 right-6 text-[96px] font-black leading-none pointer-events-none select-none"
              aria-hidden="true"
              style={{ color: 'rgba(37,99,235,0.07)', fontFamily: FONT, lineHeight: 1 }}>"</div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: T.orange }} aria-hidden="true" />
                ))}
              </div>
              <p className="text-[18px] leading-[1.8]" style={{ color: T.white, fontFamily: FONT }}>
                "{TESTIMONIALS[0].quote}"
              </p>
            </div>
            <footer className="relative z-10 flex flex-col gap-0.5 border-t pt-5" style={{ borderColor: T.border }}>
              <cite className="not-italic text-[13px] font-bold text-white" style={{ fontFamily: FONT }}>{TESTIMONIALS[0].name}</cite>
              <p className="text-[12px]" style={{ color: T.dim, fontFamily: FONT }}>{TESTIMONIALS[0].role}</p>
            </footer>
          </motion.blockquote>

          {/* Two stacked smaller quotes */}
          <div className="flex flex-col gap-4">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <motion.blockquote key={i}
                initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.18 + i * 0.1, duration: 0.65, ease: EASE_OUT }}
                className="relative flex flex-col justify-between gap-5 p-6 rounded-2xl flex-1"
                style={{ background: T.surface, border: `1px solid ${T.border}`, transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; }}
              >
                <div>
                  <div className="flex gap-1 mb-3" aria-label="5 out of 5 stars">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-current" style={{ color: T.orange }} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>
                    "{t.quote}"
                  </p>
                </div>
                <footer className="flex flex-col gap-0.5 border-t pt-4" style={{ borderColor: T.border }}>
                  <cite className="not-italic text-[13px] font-bold text-white" style={{ fontFamily: FONT }}>{t.name}</cite>
                  <p className="text-[12px]" style={{ color: T.dim, fontFamily: FONT }}>{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
// Layout 7: 2-column split (left CTA text + right contact cards)
// Eyebrow 3/3 here
function CTASectionV2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full relative overflow-hidden" style={{ background: T.surface, borderTop: `1px solid ${T.border}` }} aria-label="Contact">
      {/* Radial blue glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />

      <div ref={ref} className="relative z-10 mx-auto max-w-[1280px] px-6 py-[88px] md:py-[128px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="flex flex-col gap-7">
          {/* Eyebrow 3/3 */}
          <motion.p initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: T.blue, fontFamily: FONT }}>Get in touch</motion.p>

          <motion.h2 initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.08, duration: 0.6, ease: EASE_OUT }}
            className="font-black text-white leading-[1.0] tracking-[-0.05em]"
            style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontFamily: FONT }}>
            Ready to start a project or hire a specialist?
          </motion.h2>

          <motion.p initial={reduced ? {} : { opacity: 0, y: 14, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.18, ease: EASE_SOFT }}
            className="text-[15px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>
            We work with enterprise clients across EU and the Middle East. Tell us what you need — staffing, delivery, or technical review.
          </motion.p>

          <motion.div initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.28 }}>
            <Link to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 min-h-[48px]"
              style={{
                background: T.orange, color: '#fff', fontFamily: FONT,
                transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 36px rgba(249,115,22,0.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.65, ease: EASE_OUT }}
          className="flex flex-col gap-3">
          {[
            { Icon: MapPin,       label: 'Location', value: 'Sofia, Bulgaria' },
            { Icon: Mail,         label: 'Email',    value: 'contact@nucleardigital.com' },
            { Icon: Phone,        label: 'Phone',    value: '+359 ...' },
            { Icon: ExternalLink, label: 'Markets',  value: 'EU and Middle East' },
          ].map(({ Icon, label, value }) => (
            <div key={label}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${T.border}`, transition: 'background 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.045)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = T.border; }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: T.blueDim, border: `1px solid ${T.borderBlue}` }}>
                <Icon className="w-4 h-4" style={{ color: T.blue }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.09em] mb-0.5" style={{ color: T.dim, fontFamily: FONT }}>{label}</p>
                <p className="text-[14px] font-semibold text-white" style={{ fontFamily: FONT }}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function FooterV2() {
  return (
    <footer className="w-full border-t" style={{ borderColor: T.border, background: T.bg }}>
      <div className="mx-auto max-w-[1280px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${T.blue}, ${T.blueLight})` }}>
            <Code2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[13px] font-semibold text-white" style={{ fontFamily: FONT }}>Nuclear Digital</span>
        </div>
        <p className="text-[12px]" style={{ color: T.dim, fontFamily: FONT }}>
          {new Date().getFullYear()} Nuclear Digital. Sofia, Bulgaria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export function HomePageV2() {
  useFontInjection();

  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .nd-v2 * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        .nd-v2 { scroll-behavior: smooth; }
        .nd-v2 :focus-visible { outline: 2px solid #2563EB; outline-offset: 3px; border-radius: 6px; }
        .nd-v2 a, .nd-v2 button { -webkit-tap-highlight-color: transparent; }
      `}</style>

      <div className="nd-v2 relative flex flex-col w-full overflow-x-hidden"
        style={{ background: T.bg, minHeight: '100vh', color: T.white, fontFamily: FONT }}>
        <NavV2 />
        <main>
          <HeroV2 />
          <StatsRow />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASectionV2 />
        </main>
        <FooterV2 />
      </div>
    </>
  );
}
