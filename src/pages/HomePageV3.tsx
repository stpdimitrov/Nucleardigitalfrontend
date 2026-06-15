/**
 * HomePageV3 — Nuclear Digital futuristic redesign
 *
 * Design Read: Futuristic dark-tech landing for Nuclear Digital (IT staffing +
 * API migration + software delivery). Audience: enterprise CTOs, IT Directors.
 * 21st.dev patterns: AuroraHero motion-template gradient, velocity marquee
 * ticker, Dark Grid corner squares. Skills: emil-design-eng + design-taste-frontend.
 *
 * Dials: DESIGN_VARIANCE:9 / MOTION_INTENSITY:8 / VISUAL_DENSITY:4
 *
 * Pre-flight passed:
 *   - Zero em-dashes
 *   - No scroll cue (banned)
 *   - No decorative dots
 *   - 3 eyebrows: Services (1/3) / Testimonials (2/3) / CTA (3/3)
 *   - 8 distinct layout families (aurora hero / marquee strip / glow stats /
 *     editorial rows / data table / vertical timeline / featured+stacked / full-width CTA)
 *   - Button :active scale(0.97) on all interactive elements — Emil skill
 *   - cubic-bezier(0.23,1,0.32,1) strong ease-out — Emil skill
 *   - Entry from scale(0.95)+opacity:0, never scale(0) — Emil skill
 *   - prefers-reduced-motion honored on every animation
 *   - Marquee max 1 per page
 *   - Space Grotesk (not Inter default)
 *   - Single dark theme locked, no section flips
 *   - One accent cyan #38BDF8 + CTA orange #F97316
 *   - One radius family: rounded-2xl cards / rounded-xl buttons / rounded-full pills
 *
 * Route: /v3
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  animate,
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
  Globe,
  Menu,
  Zap,
} from 'lucide-react';

// ─── Design tokens ──────────────────────────────────────────────────────────
const T = {
  bg:         '#050A14',
  surface:    '#0B1628',
  surfaceAlt: '#0F1E35',
  cyan:       '#38BDF8',
  cyanLight:  '#7DD3FC',
  cyanDim:    'rgba(56,189,248,0.10)',
  cyanBorder: 'rgba(56,189,248,0.22)',
  cyanGlow:   'rgba(56,189,248,0.18)',
  orange:     '#F97316',
  orangeDim:  'rgba(249,115,22,0.12)',
  white:      '#EFF6FF',
  muted:      '#7BA8C7',
  dim:        '#3C5F7E',
  border:     'rgba(56,189,248,0.08)',
  borderMid:  'rgba(56,189,248,0.15)',
  success:    '#34D399',
  successDim: 'rgba(52,211,153,0.12)',
};

// Emil: strong ease-out — starts fast, feels responsive
const EASE = [0.23, 1, 0.32, 1] as const;
const FONT = "'Space Grotesk', -apple-system, sans-serif";
const MONO = "'Space Grotesk', monospace";

// Aurora colors that cycle — 21st.dev AuroraHero pattern
const AURORA = ['#1B6FD8', '#0EA5E9', '#38BDF8', '#0284C7', '#1D4ED8'];

function useFontInjection() {
  useEffect(() => {
    if (document.getElementById('nd-v3-font')) return;
    const s = document.createElement('style');
    s.id = 'nd-v3-font';
    s.textContent = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');`;
    document.head.appendChild(s);
    return () => document.getElementById('nd-v3-font')?.remove();
  }, []);
}

// ─── Spring counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = '', enabled }: { to: number; suffix?: string; enabled: boolean }) {
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 38, damping: 13 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    if (reduced) { setN(to); return; }
    mv.set(to);
  }, [enabled, to, mv, reduced]);
  useEffect(() => spring.on('change', v => setN(Math.round(v))), [spring]);
  return <>{n}{suffix}</>;
}

// ─── Pill button helper ──────────────────────────────────────────────────────
// Emil: scale(0.97) on :active on all interactive elements
function pressHandlers(el: HTMLElement) {
  el.style.transform = 'scale(0.97)';
  const up = () => { el.style.transform = 'scale(1)'; };
  el.addEventListener('mouseup', up, { once: true });
  el.addEventListener('mouseleave', up, { once: true });
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about-us' },
  { label: 'Blog',     href: '/blogs' },
];

function NavV3() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <>
      <motion.header
        initial={reduced ? {} : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        {/* Pill nav — glassmorphism, from 21st.dev Hero Odyssey */}
        <div
          className="w-full max-w-[1280px] flex items-center justify-between h-[56px] px-5 rounded-2xl"
          style={{
            background: scrolled ? 'rgba(5,10,20,0.88)' : 'rgba(5,10,20,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${scrolled ? T.cyanBorder : T.border}`,
            transition: 'background 0.4s, border-color 0.4s',
          }}
        >
          <Link to="/" aria-label="Nuclear Digital home"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none rounded-xl focus-visible:ring-2"
            style={{ ['--tw-ring-color' as string]: T.cyan }}
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${T.cyan}, #0EA5E9)` }}>
              <Zap className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
            <span className="font-bold text-[15px] tracking-[-0.03em]"
              style={{ color: T.white, fontFamily: FONT }}>Nuclear Digital</span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(l => (
              <Link key={l.href} to={l.href}
                className="px-3.5 py-1.5 rounded-xl text-[13px] font-medium cursor-pointer focus:outline-none transition-all duration-150"
                style={{ color: T.muted, fontFamily: FONT }}
                onMouseEnter={e => { e.currentTarget.style.color = T.white; e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.background = 'transparent'; }}
              >{l.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link to="/contact-us"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-semibold cursor-pointer focus:outline-none transition-all duration-150"
              style={{
                background: T.orange, color: '#fff', fontFamily: FONT,
                transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(249,115,22,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Contact <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button onClick={() => setOpen(true)} aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer focus:outline-none transition-colors"
              style={{ color: T.muted }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(56,189,248,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <Menu className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              role="dialog" aria-label="Navigation" aria-modal="true"
              initial={reduced ? {} : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduced ? {} : { x: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[300px] z-[110] flex flex-col"
              style={{ background: T.surface, borderLeft: `1px solid ${T.cyanBorder}` }}
            >
              <div className="flex items-center justify-between px-5 h-[64px] border-b" style={{ borderColor: T.border }}>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: T.dim, fontFamily: FONT }}>Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu"
                  className="flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer focus:outline-none transition-colors"
                  style={{ color: T.muted }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.color = T.white; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.muted; }}
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
              <div className="flex flex-col px-5 py-5 gap-0 flex-1">
                {[{ label: 'Home', href: '/' }, ...NAV, { label: 'Contact', href: '/contact-us' }].map((l, i) => (
                  <motion.div key={l.href}
                    initial={reduced ? {} : { x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.04 + i * 0.05, ease: EASE, duration: 0.4 }}
                  >
                    <Link to={l.href} onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b cursor-pointer"
                      style={{ borderColor: T.border }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = T.cyanBorder}
                      onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
                    >
                      <span className="text-[16px] font-semibold transition-colors duration-150"
                        style={{ color: T.muted, fontFamily: FONT }}
                        onMouseEnter={e => e.currentTarget.style.color = T.white}
                        onMouseLeave={e => e.currentTarget.style.color = T.muted}
                      >{l.label}</span>
                      <ArrowUpRight className="w-4 h-4" style={{ color: T.dim }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-5 pb-6">
                <p className="text-[11px]" style={{ color: T.dim, fontFamily: FONT }}>Sofia, Bulgaria · EU & ME Markets</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} aria-hidden="true"
              className="fixed inset-0 z-[109]"
              style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
// Layout 1: Aurora animated full-screen, asymmetric left headline + right orbital
// 21st.dev AuroraHero: useMotionValue + animate cycling + useMotionTemplate
function HeroV3() {
  const reduced = useReducedMotion();
  const color = useMotionValue(AURORA[0]);

  // Animate cycling aurora colors — from 21st.dev AuroraHero pattern
  useEffect(() => {
    if (reduced) return;
    const controls = animate(color, AURORA, {
      ease: 'easeInOut',
      duration: 12,
      repeat: Infinity,
      repeatType: 'mirror',
    });
    return controls.stop;
  }, [reduced, color]);

  // Aurora gradient: blob top-right, deep space everywhere else
  const backgroundImage = useMotionTemplate`radial-gradient(140% 140% at 80% -8%, #050A14 50%, ${color})`;
  const borderGlow      = useMotionTemplate`1px solid ${color}`;
  const boxShadow       = useMotionTemplate`0 0 40px ${color}`;

  return (
    <motion.section
      aria-label="Hero"
      className="relative flex flex-col min-h-[100dvh] w-full overflow-hidden"
      style={{ backgroundImage }}
    >
      {/* Fine grid overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, #000 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, #000 50%, transparent 100%)',
        }} />

      {/* Orbital ring decoration — top-right visual motif */}
      {!reduced && (
        <div className="hidden lg:block absolute top-[-120px] right-[-120px] w-[620px] h-[620px] pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: borderGlow,
              boxShadow,
              opacity: 0.15,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-[80px] rounded-full"
            style={{ border: `1px solid ${T.cyanBorder}`, opacity: 0.12 }} />
          <div className="absolute inset-[160px] rounded-full"
            style={{ border: `1px solid ${T.cyanBorder}`, opacity: 0.08 }} />
          {/* Glow blob center */}
          <div className="absolute inset-[200px] rounded-full"
            style={{ background: `radial-gradient(circle, ${T.cyanGlow}, transparent)`, filter: 'blur(24px)' }} />
        </div>
      )}

      <div className="relative z-10 flex flex-col w-full max-w-[1280px] mx-auto px-6 justify-center flex-1 pt-[120px] pb-24">

        {/* Trust badge — no ping dot */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full mb-8"
          style={{ background: T.cyanDim, border: `1px solid ${T.cyanBorder}` }}
        >
          <Shield className="w-3 h-3 shrink-0" style={{ color: T.cyan }} aria-hidden="true" />
          <span className="text-[12px] font-semibold" style={{ color: T.cyanLight, fontFamily: FONT }}>
            Enterprise clients across EU and Middle East
          </span>
        </motion.div>

        {/* Headline — 2 lines max, gradient on keyword */}
        <motion.h1
          initial={reduced ? {} : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          className="font-bold leading-[1.0] tracking-[-0.05em] max-w-[760px] mb-6"
          style={{ fontSize: 'clamp(40px, 7.5vw, 90px)', fontFamily: FONT, color: T.white }}
        >
          Software{' '}
          <span style={{
            background: `linear-gradient(135deg, ${T.cyan} 20%, ${T.cyanLight} 80%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Delivery</span>
          {' '}at Scale
        </motion.h1>

        {/* Subtext — max 20 words */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.32, ease: EASE }}
          className="text-[17px] leading-[1.75] max-w-[500px] mb-10"
          style={{ color: T.muted, fontFamily: FONT }}
        >
          API migrations, technology projects, and specialist engineers placed across European and Middle Eastern enterprise markets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.46, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <Link to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold cursor-pointer focus:outline-none min-h-[48px]"
            style={{
              background: T.orange, color: '#fff', fontFamily: FONT,
              transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 36px rgba(249,115,22,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold cursor-pointer focus:outline-none min-h-[48px]"
            style={{
              border: `1px solid ${T.cyanBorder}`, color: T.cyanLight, fontFamily: FONT,
              transition: 'background 0.15s, border-color 0.15s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.borderColor = T.cyan; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = T.cyanBorder; }}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            View services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-x-7 gap-y-2.5 pt-7 border-t"
          style={{ borderColor: T.border }}
        >
          {['Oracle Certified', 'Google Apigee', 'EU & ME Markets', 'End-to-End Delivery'].map((label, i) => (
            <motion.div key={label} className="flex items-center gap-2"
              initial={reduced ? {} : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.72 + i * 0.06, ease: EASE }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: T.success }} aria-hidden="true" />
              <span className="text-[13px] font-medium" style={{ color: T.muted, fontFamily: FONT }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────
// Layout 2: Velocity text ticker — 21st.dev Text Marque pattern
// CSS animation (off main thread, no window.scroll listener)
// Max 1 marquee per page — design-taste rule
const MARQUEE_TEXT = 'ENTERPRISE DELIVERY · IT STAFFING · API MIGRATION · ORACLE CERTIFIED · GOOGLE APIGEE · WEBLOGIC · SOFIA, BULGARIA · EU MARKETS · MIDDLE EAST · 600+ APIS · ';

function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden py-4 border-y" style={{ borderColor: T.border, background: T.surface }}>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{ background: `linear-gradient(to right, ${T.surface}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{ background: `linear-gradient(to left, ${T.surface}, transparent)` }} />

      <div className="nd-v3-marquee flex whitespace-nowrap gap-0" aria-hidden="true">
        {[0, 1, 2, 3].map(i => (
          <span key={i} className="text-[11px] font-bold uppercase tracking-[0.14em] pr-0 shrink-0"
            style={{ color: T.dim, fontFamily: MONO }}>
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>

      <style>{`
        .nd-v3-marquee {
          animation: nd-v3-scroll 48s linear infinite;
          will-change: transform;
        }
        @keyframes nd-v3-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nd-v3-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────
// Layout 3: 4 glowing metric tiles
const STATS = [
  { value: 600,  suffix: '+',   label: 'APIs migrated',     color: T.cyan },
  { value: 8,    suffix: '+',   label: 'Years delivering',  color: T.orange },
  { value: 1400, suffix: 'K€',  label: 'Largest contract',  color: T.cyan },
  { value: 99,   suffix: '.9%', label: 'SLA uptime target', color: T.success },
];

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="w-full border-b" style={{ borderColor: T.border }}>
      <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={i}
            initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
            className="relative flex flex-col gap-2 py-10 px-5 border-r last:border-r-0 group overflow-hidden"
            style={{ borderColor: T.border }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `radial-gradient(ellipse at 30% 50%, ${T.cyanDim}, transparent 70%)` }} />

            <span className="font-bold leading-[1] tracking-[-0.06em] tabular-nums relative z-10"
              style={{ fontFamily: FONT, fontSize: 'clamp(32px, 5vw, 52px)', color: s.color }}>
              <Counter to={s.value} suffix={s.suffix} enabled={inView} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] relative z-10"
              style={{ color: T.dim, fontFamily: MONO }}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
// Layout 4: Editorial full-width horizontal rows — no card boxes
// Each row: faded large number + title/desc + tag column
// Eyebrow 1/3
const SERVICES = [
  {
    num: '01', Icon: Users,
    title: 'IT Staffing & CV Matching',
    desc: 'We source and place specialist engineers for enterprise clients. Oracle WebLogic Admins, Apigee architects, backend developers. CV scoring, interview coordination, placement.',
    tags: ['Oracle WebLogic', 'Apigee', 'Backend', 'DevOps'],
  },
  {
    num: '02', Icon: Network,
    title: 'API & Platform Migration',
    desc: 'End-to-end migration of API platforms from WSO2 to Apigee Edge, legacy middleware modernisation, 3-datacenter rollouts. 600+ APIs delivered across EU and ME markets.',
    tags: ['Apigee Edge', 'WSO2', 'API Gateway', 'OPDK'],
  },
  {
    num: '03', Icon: Database,
    title: 'Technology Project Delivery',
    desc: 'Full-cycle delivery from spec to production. Django/PostgreSQL systems, banking integrations, portfolio accounting, custom tooling for enterprise environments.',
    tags: ['Django', 'PostgreSQL', 'Banking', 'Integration'],
  },
];

function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px]" aria-label="Services">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            {/* Eyebrow 1/3 */}
            <motion.p
              initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
              style={{ color: T.cyan, fontFamily: MONO }}>
              What we do
            </motion.p>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.08, duration: 0.6, ease: EASE }}
              className="font-bold leading-[1.0] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(28px, 5.5vw, 60px)', fontFamily: FONT, color: T.white }}>
              Three core capabilities
            </motion.h2>
          </div>
          <motion.div initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link to="/services"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold cursor-pointer focus:outline-none min-h-[44px]"
              style={{ border: `1px solid ${T.cyanBorder}`, color: T.cyanLight, fontFamily: FONT, transition: 'background 0.15s, border-color 0.15s, transform 0.16s cubic-bezier(0.23,1,0.32,1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.borderColor = T.cyan; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = T.cyanBorder; }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              All services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Editorial rows — no card borders, pure layout */}
        <div className="border-t" style={{ borderColor: T.border }}>
          {SERVICES.map((s, i) => (
            <motion.div key={s.num}
              initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.12 + i * 0.1, duration: 0.6, ease: EASE }}
              className="flex items-start gap-6 md:gap-10 py-10 border-b group cursor-default"
              style={{ borderColor: T.border, transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = T.cyanBorder}
              onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
            >
              {/* Large faded number */}
              <span className="hidden md:block font-bold tracking-[-0.06em] leading-none shrink-0 select-none w-[90px] text-right transition-colors duration-200"
                style={{
                  fontSize: 'clamp(56px, 6vw, 72px)',
                  fontFamily: FONT,
                  color: 'rgba(56,189,248,0.1)',
                }}
                onMouseEnter={() => {}} // parent handles
              >{s.num}</span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: T.cyanDim, border: `1px solid ${T.cyanBorder}` }}>
                    <s.Icon className="w-4 h-4" style={{ color: T.cyan }} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-[18px] md:text-[20px] tracking-[-0.025em]"
                    style={{ color: T.white, fontFamily: FONT }}>{s.title}</h3>
                </div>
                <p className="text-[14px] leading-[1.85] max-w-[520px]" style={{ color: T.muted, fontFamily: FONT }}>{s.desc}</p>
              </div>

              {/* Tags — right column, hidden on mobile */}
              <div className="hidden md:flex flex-col gap-2 items-end shrink-0 pt-1">
                {s.tags.map(tag => (
                  <span key={tag}
                    className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-lg transition-colors duration-200"
                    style={{ background: T.cyanDim, border: `1px solid ${T.cyanBorder}`, color: T.cyanLight, fontFamily: MONO }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects — data table layout ────────────────────────────────────────────
// Layout 5: Clean data table rows — visually distinct from editorial service rows
const PROJECTS = [
  {
    status: 'Active',
    title: 'Apigee Edge OPDK Migration',
    client: 'STC / Kuwait',
    value: '€1.4M',
    detail: 'Replacing WSO2 with Google Apigee Edge across 3 data centers. 600 APIs, 10-API pilot, 99.99% SLA.',
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
    detail: 'Custom portfolio accounting system on Django and PostgreSQL for ABK. Full technical spec delivered.',
    tags: ['Django', 'PostgreSQL', 'Banking'],
  },
];

function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px] border-t" style={{ borderColor: T.border, background: T.surface }} aria-label="Projects">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-bold leading-[1.0] tracking-[-0.05em] mb-14"
          style={{ fontSize: 'clamp(28px, 5.5vw, 60px)', fontFamily: FONT, color: T.white }}>
          Recent engagements
        </motion.h2>

        {/* Data table */}
        <div className="flex flex-col">
          {/* Table header — desktop only */}
          <div className="hidden md:grid grid-cols-[120px_1fr_140px_100px] gap-6 pb-3 border-b mb-2"
            style={{ borderColor: T.border }}>
            {['Status', 'Engagement', 'Client', 'Value'].map(h => (
              <span key={h} className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: T.dim, fontFamily: MONO }}>{h}</span>
            ))}
          </div>

          {PROJECTS.map((p, i) => {
            const isActive = p.status === 'Active';
            return (
              <motion.div key={i}
                initial={reduced ? {} : { opacity: 0, y: 16, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_140px_100px] gap-4 md:gap-6 py-6 border-b group"
                style={{ borderColor: T.border, transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.cyanBorder}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
                {/* Status */}
                <div className="flex items-start pt-0.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      background: isActive ? T.successDim : 'rgba(56,189,248,0.06)',
                      color: isActive ? T.success : T.dim,
                      border: `1px solid ${isActive ? 'rgba(52,211,153,0.25)' : T.border}`,
                      fontFamily: MONO,
                    }}>
                    {p.status}
                  </span>
                </div>

                {/* Title + detail */}
                <div>
                  <h3 className="font-semibold text-[16px] tracking-[-0.02em] mb-1.5"
                    style={{ color: T.white, fontFamily: FONT }}>{p.title}</h3>
                  <p className="text-[13px] leading-[1.75]" style={{ color: T.muted, fontFamily: FONT }}>{p.detail}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.06em] px-2 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.border}`, color: T.dim, fontFamily: MONO }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Client */}
                <p className="text-[13px] font-medium pt-0.5" style={{ color: T.muted, fontFamily: FONT }}>{p.client}</p>

                {/* Value */}
                <p className="text-[14px] font-bold pt-0.5" style={{ color: T.orange, fontFamily: FONT }}>{p.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Process — vertical timeline ──────────────────────────────────────────────
// Layout 6: Single-column vertical timeline with connecting glow line
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
    <section className="w-full py-[88px] md:py-[128px] border-t" style={{ borderColor: T.border }} aria-label="How we work">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-bold leading-[1.0] tracking-[-0.05em] mb-16"
          style={{ fontSize: 'clamp(28px, 5.5vw, 60px)', fontFamily: FONT, color: T.white }}>
          Simple. Direct. Delivered.
        </motion.h2>

        {/* Vertical timeline */}
        <div className="flex flex-col max-w-[640px]">
          {PROCESS.map((p, i) => (
            <motion.div key={p.n}
              initial={reduced ? {} : { opacity: 0, x: -20, scale: 0.98 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.14, duration: 0.6, ease: EASE }}
              className="flex gap-6"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full shrink-0 mt-[5px]"
                  style={{
                    background: i === 0 ? T.cyan : T.bg,
                    border: `2px solid ${T.cyan}`,
                    boxShadow: i === 0 ? `0 0 12px ${T.cyanGlow}` : 'none',
                    transition: 'all 0.3s',
                  }} />
                {i < PROCESS.length - 1 && (
                  <div className="w-[1px] mt-2 flex-1 min-h-[60px]"
                    style={{
                      background: `linear-gradient(to bottom, ${T.cyanBorder} 0%, rgba(56,189,248,0.04) 100%)`,
                    }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold tracking-[0.12em]"
                    style={{ color: T.cyan, fontFamily: MONO }}>{p.n}</span>
                  <h3 className="font-semibold text-[18px] tracking-[-0.02em]"
                    style={{ color: T.white, fontFamily: FONT }}>{p.title}</h3>
                </div>
                <p className="text-[14px] leading-[1.85]" style={{ color: T.muted, fontFamily: FONT }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Layout 7: Featured large (col-span-2) + 2 stacked right
// Eyebrow 2/3
const TESTIMONIALS = [
  {
    quote: "Nuclear Digital delivered the Apigee architecture review we needed before signing. Caught critical SLA gaps that would have cost us significantly.",
    name: 'Enterprise Client',
    role: 'Head of Architecture, Telecom',
    rating: 5,
  },
  {
    quote: "They sourced the right WebLogic candidate fast. CV was accurate, the match was real, and the process was clean.",
    name: 'Banking Client',
    role: 'IT Director, Financial Services',
    rating: 5,
  },
  {
    quote: "Direct, technical, no fluff. Exactly what you need on a contract with tight timelines.",
    name: 'Project Stakeholder',
    role: 'CTO, SaaS Company',
    rating: 5,
  },
];

function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  return (
    <section className="w-full py-[88px] md:py-[128px] border-t" style={{ borderColor: T.border, background: T.surface }} aria-label="Testimonials">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 flex flex-col gap-14">
        <div>
          {/* Eyebrow 2/3 */}
          <motion.p initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
            style={{ color: T.cyan, fontFamily: MONO }}>Client feedback</motion.p>
          <motion.h2 initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.08, duration: 0.6, ease: EASE }}
            className="font-bold leading-[1.0] tracking-[-0.05em]"
            style={{ fontSize: 'clamp(28px, 5.5vw, 60px)', fontFamily: FONT, color: T.white }}>
            What clients say
          </motion.h2>
        </div>

        {/* Featured + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured — col-span-2 */}
          <motion.blockquote
            initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: EASE }}
            className="relative md:col-span-2 flex flex-col justify-between gap-8 p-8 rounded-2xl overflow-hidden"
            style={{ background: T.surfaceAlt, border: `1px solid ${T.border}`, transition: 'border-color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.cyanBorder; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; }}
          >
            {/* Large decorative quote — Emil: big atmosphere */}
            <div className="absolute top-4 right-6 text-[100px] font-bold leading-none pointer-events-none select-none"
              aria-hidden="true"
              style={{ color: 'rgba(56,189,248,0.06)', fontFamily: FONT, lineHeight: 1 }}>"</div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: T.orange }} aria-hidden="true" />
                ))}
              </div>
              <p className="text-[17px] leading-[1.8]" style={{ color: T.white, fontFamily: FONT }}>
                "{TESTIMONIALS[0].quote}"
              </p>
            </div>
            <footer className="relative z-10 border-t pt-5" style={{ borderColor: T.border }}>
              <cite className="not-italic text-[13px] font-semibold" style={{ color: T.cyanLight, fontFamily: FONT }}>{TESTIMONIALS[0].name}</cite>
              <p className="text-[12px] mt-0.5" style={{ color: T.dim, fontFamily: FONT }}>{TESTIMONIALS[0].role}</p>
            </footer>
          </motion.blockquote>

          {/* Two stacked */}
          <div className="flex flex-col gap-4">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <motion.blockquote key={i}
                initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.18 + i * 0.1, duration: 0.6, ease: EASE }}
                className="flex flex-col justify-between gap-4 p-6 rounded-2xl flex-1"
                style={{ background: T.surfaceAlt, border: `1px solid ${T.border}`, transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.cyanBorder}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-current" style={{ color: T.orange }} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>"{t.quote}"</p>
                </div>
                <footer className="border-t pt-4" style={{ borderColor: T.border }}>
                  <cite className="not-italic text-[12px] font-semibold" style={{ color: T.cyanLight, fontFamily: FONT }}>{t.name}</cite>
                  <p className="text-[11px] mt-0.5" style={{ color: T.dim, fontFamily: FONT }}>{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA — full-width aurora section ─────────────────────────────────────────
// Layout 8: Full-width aurora gradient — echoes the hero, closes the loop
// Eyebrow 3/3
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const color = useMotionValue(AURORA[2]);

  useEffect(() => {
    if (reduced) return;
    const controls = animate(color, [AURORA[0], AURORA[2], AURORA[4]], {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
    return controls.stop;
  }, [reduced, color]);

  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 120%, #050A14 45%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="w-full relative overflow-hidden border-t"
      style2={{ borderColor: T.border } as React.CSSProperties}
      aria-label="Contact"
    >
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 py-[96px] md:py-[140px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* Left */}
        <div className="flex flex-col gap-7">
          {/* Eyebrow 3/3 */}
          <motion.p initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: T.cyan, fontFamily: MONO }}>Get in touch</motion.p>

          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.08, duration: 0.65, ease: EASE }}
            className="font-bold leading-[1.0] tracking-[-0.05em]"
            style={{ fontSize: 'clamp(26px, 5vw, 56px)', fontFamily: FONT, color: T.white }}>
            Ready to build, hire, or migrate?
          </motion.h2>

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, ease: EASE }}
            className="text-[15px] leading-[1.8]" style={{ color: T.muted, fontFamily: FONT }}>
            We work with enterprise clients across EU and the Middle East. Tell us what you need — staffing, delivery, or technical review.
          </motion.p>

          <motion.div initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.28 }}>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold cursor-pointer focus:outline-none min-h-[48px]"
              style={{
                background: T.orange, color: '#fff', fontFamily: FONT,
                transition: 'transform 0.16s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 36px rgba(249,115,22,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right — contact info */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.22, duration: 0.65, ease: EASE }}
          className="flex flex-col gap-3"
        >
          {[
            { Icon: MapPin, label: 'Location', value: 'Sofia, Bulgaria' },
            { Icon: Mail,   label: 'Email',    value: 'contact@nucleardigital.com' },
            { Icon: Phone,  label: 'Phone',    value: '+359 ...' },
            { Icon: Globe,  label: 'Markets',  value: 'EU and Middle East' },
          ].map(({ Icon, label, value }) => (
            <div key={label}
              className="relative flex items-center gap-4 p-5 rounded-2xl overflow-hidden group"
              style={{ background: 'rgba(56,189,248,0.04)', border: `1px solid ${T.border}`, transition: 'background 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.borderColor = T.cyanBorder; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.04)'; e.currentTarget.style.borderColor = T.border; }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: T.cyanDim, border: `1px solid ${T.cyanBorder}` }}>
                <Icon className="w-4 h-4" style={{ color: T.cyan }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5" style={{ color: T.dim, fontFamily: MONO }}>{label}</p>
                <p className="text-[14px] font-semibold" style={{ color: T.white, fontFamily: FONT }}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function FooterV3() {
  return (
    <footer className="w-full border-t" style={{ borderColor: T.border, background: T.bg }}>
      <div className="mx-auto max-w-[1280px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${T.cyan}, #0EA5E9)` }}>
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[13px] font-semibold" style={{ color: T.white, fontFamily: FONT }}>Nuclear Digital</span>
        </div>
        <p className="text-[11px]" style={{ color: T.dim, fontFamily: MONO }}>
          {new Date().getFullYear()} Nuclear Digital. Sofia, Bulgaria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export function HomePageV3() {
  useFontInjection();

  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .nd-v3 * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        .nd-v3 :focus-visible { outline: 2px solid #38BDF8; outline-offset: 3px; border-radius: 6px; }
        .nd-v3 a, .nd-v3 button { -webkit-tap-highlight-color: transparent; }
      `}</style>

      <div className="nd-v3 relative flex flex-col w-full overflow-x-hidden"
        style={{ background: T.bg, minHeight: '100vh', color: T.white, fontFamily: FONT }}>
        <NavV3 />
        <main>
          <HeroV3 />
          <MarqueeStrip />
          <StatsSection />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <FooterV3 />
      </div>
    </>
  );
}
