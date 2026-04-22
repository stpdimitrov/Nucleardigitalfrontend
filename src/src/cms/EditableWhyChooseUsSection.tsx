import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { useCMSStore } from './cmsStore';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../../lib/animations';
import { EditableText } from './EditableText';
import { SiteLogo } from './SiteLogo';
import { Settings, Plus, Trash2 } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import { ImageUploadField } from './ImageUploadField';

type CardType = 'logo' | 'text' | 'clock' | 'image-text' | 'profile' | 'person' | 'quote' | 'stats';

interface WhyChooseUsCard {
  id: string;
  type: CardType;
  title?: string;
  subtitle?: string;      // role for profile/quote cards
  backgroundImage?: string;
  backgroundAlt?: string;
  backgroundColor?: string;
  profileImage?: string;
  gridSpan?: number;
  rowSpan?: number;
  customHeight?: number;  // explicit px height override (drag-to-resize)
  sidebar?: boolean;      // if true, renders in the right sidebar column
  showOnline?: boolean;
  quote?: string;
  statNumber?: string;
  statLabel?: string;
  avatars?: string[];
}

const DEFAULT_CARDS: WhyChooseUsCard[] = [
  {
    id: 'card-2',
    type: 'clock',
    gridSpan: 2,
    title: 'Fast Turnaround & On-Time Delivery',
    backgroundColor: 'rgb(36, 36, 36)',
  },
  {
    id: 'card-3',
    type: 'image-text',
    gridSpan: 2,
    title: 'Shot with the  best camera gear',
    backgroundImage: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6a74218317bab3b9d86226f78c9ba136e7e3295e.jpeg%3Fscale-down-to=1024&width=1280&height=1152?generation=1768843022845456&alt=media',
    backgroundAlt: 'A black Leica camera dramatically lit in red.',
  },
  {
    id: 'card-4',
    type: 'profile',
    gridSpan: 1,
    rowSpan: 2,
    title: 'Emma Reed',
    subtitle: 'Client Support Manager',
    backgroundColor: 'rgb(36, 36, 36)',
    profileImage: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fffc55ccfed2fddbf3312b5052ae7855ffa1394c1.png%3Fwidth=432&height=577?generation=1768843022847170&alt=media',
    showOnline: true,
  },
  {
    id: 'card-5',
    type: 'person',
    sidebar: true,
    backgroundImage: '',
    backgroundAlt: 'Team member',
    backgroundColor: 'rgb(60, 20, 20)',
  },
  {
    id: 'card-6',
    type: 'quote',
    sidebar: true,
    quote: '"At Flixen™, our goal is simple — to turn ideas into visuals that move people. Every project is a chance to tell a story worth remembering."',
    title: 'Dylan Cross',
    subtitle: 'CEO & Co-Founder',
    backgroundColor: 'rgb(36, 36, 36)',
  },
  {
    id: 'card-7',
    type: 'stats',
    sidebar: true,
    statNumber: '10K+',
    statLabel: 'Satisfied clients',
    backgroundColor: 'rgb(36, 36, 36)',
    avatars: [],
  },
];

// ─── Animated Clock ──────────────────────────────────────────────────────────

function AnimatedClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours() % 12;

  const secDeg  = s * 6;
  const minDeg  = m * 6 + s * 0.1;
  const hourDeg = h * 30 + m * 0.5;

  // rotate-based transform so CSS transition works cleanly on the hands
  const handStyle = (deg: number): React.CSSProperties => ({
    transformOrigin: '100px 100px',
    transform: `rotate(${deg}deg)`,
    transition: 'transform 0.3s cubic-bezier(0.4,2.2,0.6,1)',
  });
  const secStyle: React.CSSProperties = {
    transformOrigin: '100px 100px',
    transform: `rotate(${secDeg}deg)`,
    // snap tick (no transition) so the second hand ticks crisply
  };

  return (
    <svg viewBox="0 0 200 200" style={{ overflow: 'visible', width: 'clamp(120px, 18vw, 224px)', height: 'clamp(120px, 18vw, 224px)' }}>
      <defs>
        {/* Glow filter for second hand */}
        <filter id="secGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Subtle glow for hour/minute hands */}
        <filter id="handGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Inner ring subtle */}
      <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

      {/* Tick marks — 60 minute ticks + bold hour ticks */}
      {Array.from({ length: 60 }, (_, i) => {
        const a = (i * 6 * Math.PI) / 180;
        const isHour = i % 5 === 0;
        const inner = isHour ? 74 : 83;
        return (
          <line
            key={i}
            x1={100 + inner * Math.sin(a)}
            y1={100 - inner * Math.cos(a)}
            x2={100 + 88 * Math.sin(a)}
            y2={100 - 88 * Math.cos(a)}
            stroke={isHour ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.2)'}
            strokeWidth={isHour ? 2.5 : 0.8}
            strokeLinecap="round"
          />
        );
      })}

      {/* Hour hand */}
      <line x1="100" y1="108" x2="100" y2="62"
        stroke="white" strokeWidth="4.5" strokeLinecap="round"
        style={handStyle(hourDeg)} filter="url(#handGlow)" />

      {/* Minute hand */}
      <line x1="100" y1="112" x2="100" y2="44"
        stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinecap="round"
        style={handStyle(minDeg)} filter="url(#handGlow)" />

      {/* Second hand with glow */}
      <line x1="100" y1="118" x2="100" y2="34"
        stroke="#ff3333" strokeWidth="1.5" strokeLinecap="round"
        style={secStyle} filter="url(#secGlow)" />
      {/* Second hand tail */}
      <line x1="100" y1="118" x2="100" y2="128"
        stroke="#ff3333" strokeWidth="2.5" strokeLinecap="round"
        style={secStyle} />

      {/* Center rings */}
      <circle cx="100" cy="100" r="5" fill="white" />
      <circle cx="100" cy="100" r="2.5" fill="#ff3333" />
    </svg>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

interface EditableWhyChooseUsSectionProps {
  contentKey?: string;
  defaultSectionTag?: string;
  defaultSectionTitle?: string;
  defaultSectionDescription?: string;
  defaultButtonText?: string;
  defaultButtonHref?: string;
  defaultCards?: WhyChooseUsCard[];
}

export function EditableWhyChooseUsSection({
  contentKey = 'whyChooseUs',
  defaultSectionTag = 'why choose us',
  defaultSectionTitle = 'Why work with us',
  defaultSectionDescription = 'We combine creativity, strategy, and expertise to deliver videos that truly  inspire audiences.',
  defaultButtonText = 'Contact us',
  defaultButtonHref = '/contact-us',
  defaultCards = DEFAULT_CARDS,
}: EditableWhyChooseUsSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, persistContent } = useCMSStore();

  const rawCardsFromStore = useCMSStore(state => state.content[`${contentKey}.cards`]);
  const rawSidebarWidth   = useCMSStore(state => state.content[`${contentKey}.sidebarWidth`]);

  // Local state for immediate rendering — store is the source of truth on mount
  const [cards, setCards] = useState<WhyChooseUsCard[]>(() => {
    try { return JSON.parse(rawCardsFromStore ?? JSON.stringify(defaultCards)); } catch { return defaultCards; }
  });

  // Mobile detection
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Sidebar width state
  const [sidebarWidth, setSidebarWidth] = useState<number | undefined>(() => {
    const n = parseFloat(rawSidebarWidth ?? '');
    return isNaN(n) ? undefined : n;
  });
  const sidebarWidthRef = useRef(sidebarWidth);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const sidebarResizeRef = useRef<{ startX: number; startW: number } | null>(null);

  useEffect(() => {
    const n = parseFloat(rawSidebarWidth ?? '');
    const v = isNaN(n) ? undefined : n;
    setSidebarWidth(v);
    sidebarWidthRef.current = v;
  }, [rawSidebarWidth]);

  const handleSidebarWidthMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    const currentW = sidebarContainerRef.current
      ? sidebarContainerRef.current.getBoundingClientRect().width
      : (sidebarWidth ?? 250);
    sidebarResizeRef.current = { startX: e.clientX, startW: currentW };
    const onMove = (ev: MouseEvent) => {
      if (!sidebarResizeRef.current) return;
      // Dragging left → wider sidebar (sidebar is on the right)
      const newW = Math.max(80, sidebarResizeRef.current.startW - (ev.clientX - sidebarResizeRef.current.startX));
      setSidebarWidth(newW);
      sidebarWidthRef.current = newW;
    };
    const onUp = () => {
      if (!sidebarResizeRef.current) return;
      sidebarResizeRef.current = null;
      updateContent(`${contentKey}.sidebarWidth`, String(sidebarWidthRef.current ?? ''));
      persistContent().catch(console.error);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // Keep local state in sync if the store changes from outside (e.g. backend load)
  const prevRaw = useRef(rawCardsFromStore);
  useEffect(() => {
    if (rawCardsFromStore !== prevRaw.current) {
      prevRaw.current = rawCardsFromStore;
      try { setCards(JSON.parse(rawCardsFromStore!)); } catch { /* ignore */ }
    }
  }, [rawCardsFromStore]);

  const saveCards = async (newCards: WhyChooseUsCard[]) => {
    setCards(newCards); // immediate local update
    try {
      setSaveStatus('saving');
      updateContent(`${contentKey}.cards`, JSON.stringify(newCards));
      await persistContent();
    } catch { setSaveStatus('error'); }
  };

  const addCard = () => {
    saveCards([...cards, { id: `card-${Date.now()}`, type: 'text', gridSpan: 1, title: 'New Card', backgroundColor: 'rgb(36, 36, 36)' }]);
  };

  const deleteCard = (id: string) => saveCards(cards.filter(c => c.id !== id));
  const updateCard = (index: number, updatedCard: WhyChooseUsCard) => {
    const next = [...cards]; next[index] = updatedCard; saveCards(next);
  };

  const mainCards    = cards.filter(c => !c.sidebar);
  const sidebarCards = cards.filter(c => c.sidebar);

  const cardProps = (card: WhyChooseUsCard) => ({
    card, contentKey,
    index: cards.findIndex(c => c.id === card.id),
    deleteCard, updateCard, cards, saveCards,
  });

  return (
    <motion.section
      aria-label="Why choose us"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-[60px] md:pb-[100px] pl-0"
      initial="hidden" whileInView="visible" viewport={viewport} variants={scrollFadeIn}
    >
      <div className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">

        {/* Header — left: tag + title + description / right: button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-6">
          {/* Left */}
          <div className="flex flex-col gap-[16px] [&_h2]:!text-[clamp(24px,5.5vw,44px)] [&_h2]:!leading-[1.2]">
            <div className="flex flex-col gap-[8px]">
              <div className="items-center flex size-min justify-start overflow-clip relative bg-white/5 gap-[8px] pt-2 pr-4 pb-2 pl-4 rounded-[62.5rem]">
                <EditableText contentKey={`${contentKey}.sectionTag`} defaultValue={`<p class="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, sans-serif">${defaultSectionTag}</p>`} as="div" className="" />
              </div>
              <EditableText contentKey={`${contentKey}.sectionTitle`} defaultValue={`<h2 class="font-medium text-left text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style="font-family:Ronzino, sans-serif">${defaultSectionTitle}</h2>`} as="div" className="" />
            </div>
            <EditableText contentKey={`${contentKey}.sectionDescription`} defaultValue={`<p class="text-left text-white/70 text-[18px] tracking-[-0.18px] leading-[27px]" style="font-family:&quot;Apfel Grotezk&quot;, sans-serif">${defaultSectionDescription}</p>`} as="div" className="max-w-[480px]" />
          </div>
          {/* Right — button */}
          <div className="shrink-0 flex flex-col items-end gap-2">
            <a href={getContent(`${contentKey}.buttonHref`, defaultButtonHref)} className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,197,0)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]">
              <EditableText contentKey={`${contentKey}.buttonText`} defaultValue={`<p class="font-medium uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, sans-serif">${defaultButtonText}</p>`} as="div" className="" />
              <div className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                <svg className="w-[15px] h-[15px] text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
            {isEditMode && (
              <button
                onClick={() => { if (confirm('Reset cards to default layout?')) saveCards(defaultCards); }}
                className="text-xs text-white/40 hover:text-white/70 transition-colors px-2 py-1 border border-white/10 rounded"
              >
                Reset layout
              </button>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 w-full items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          {/* Main grid — 3 columns on desktop, 1 on mobile */}
          <div
            className="grid gap-4"
            style={{ flex: isMobile ? undefined : 3, width: isMobile ? '100%' : undefined, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gridAutoRows: 'minmax(clamp(180px, 27vw, 350px), auto)', alignItems: 'stretch' }}
          >
            {mainCards.map((card) => (
              <CardComponent key={card.id} {...cardProps(card)} />
            ))}
          </div>

          {/* Sidebar column — stretches to full height of the grid */}
          <div
            ref={sidebarContainerRef}
            className="flex flex-col gap-4 relative"
            style={isMobile ? { width: '100%' } : (sidebarWidth ? { width: sidebarWidth, flexShrink: 0 } : { flex: 1 })}
          >
            {sidebarCards.map((card, i) => (
              <CardComponent key={card.id} {...cardProps(card)} sidebar sidebarFirst={i === 0} />
            ))}
            {/* Sidebar width resize handle — left edge */}
            {isEditMode && (
              <div
                onMouseDown={handleSidebarWidthMouseDown}
                style={{
                  position: 'absolute', top: 0, bottom: 0, left: -10, width: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'ew-resize', zIndex: 50,
                  background: 'linear-gradient(to right, rgba(0,153,255,0.35), transparent)',
                }}
              >
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  background: '#0099FF', borderRadius: 999, padding: '8px 3px',
                  userSelect: 'none',
                }}>
                  <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                    <path d="M2 2v12M6 2v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: 10, color: 'white', fontFamily: 'monospace', writingMode: 'vertical-rl' }}>
                    {sidebarWidth ? `${Math.round(sidebarWidth)}px` : 'width'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Add card buttons — always visible in edit mode, outside the animated grid */}
        {isEditMode && (
          <div className="flex gap-3 w-full">
            <button
              onClick={addCard}
              className="flex items-center gap-2 px-4 py-2 border border-dashed border-[#0099FF]/60 bg-[#0099FF]/5 hover:bg-[#0099FF]/15 hover:border-[#0099FF] text-[#0099FF] text-sm font-medium transition-all rounded"
            >
              <Plus className="w-4 h-4" />
              Add Main Card
            </button>
            <button
              onClick={() => saveCards([...cards, { id: `card-${Date.now()}`, type: 'person', sidebar: true, backgroundColor: 'rgb(36, 36, 36)' }])}
              className="flex items-center gap-2 px-4 py-2 border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white/60 text-sm font-medium transition-all rounded"
            >
              <Plus className="w-4 h-4" />
              Add Sidebar Card
            </button>
          </div>
        )}

      </div>
    </motion.section>
  );
}

// ─── Card Component wrapper ───────────────────────────────────────────────────

interface CardComponentProps {
  card: WhyChooseUsCard;
  index: number;
  contentKey: string;
  deleteCard: (id: string) => void;
  updateCard: (index: number, card: WhyChooseUsCard) => void;
  cards: WhyChooseUsCard[];
  saveCards: (cards: WhyChooseUsCard[]) => void;
  sidebar?: boolean;
  sidebarFirst?: boolean; // first sidebar card grows to fill height
}

function CardComponent({ card, index, contentKey, deleteCard, updateCard, cards, saveCards, sidebar, sidebarFirst }: CardComponentProps) {
  const { isEditMode } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'WHY_CHOOSE_US_CARD',
    item: { index },
    canDrag: isEditMode,
    collect: m => ({ isDragging: m.isDragging() }),
  });
  const [, drop] = useDrop({
    accept: 'WHY_CHOOSE_US_CARD',
    hover(item: { index: number }) {
      if (!ref.current || item.index === index) return;
      const next = [...cards];
      const [removed] = next.splice(item.index, 1);
      next.splice(index, 0, removed);
      saveCards(next);
      item.index = index;
    },
  });
  drag(drop(ref));

  // ── Height resize ──────────────────────────────────────────────────────────
  const [localHeight, setLocalHeight] = useState<number | undefined>(card.customHeight);
  const heightResizeRef = useRef<{ startY: number; startH: number } | null>(null);
  useEffect(() => { setLocalHeight(card.customHeight); }, [card.customHeight]);

  const handleHeightResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    const currentH = ref.current ? ref.current.getBoundingClientRect().height : (localHeight ?? 350);
    heightResizeRef.current = { startY: e.clientY, startH: currentH };
    const onMove = (ev: MouseEvent) => {
      if (!heightResizeRef.current) return;
      setLocalHeight(Math.max(100, heightResizeRef.current.startH + ev.clientY - heightResizeRef.current.startY));
    };
    const onUp = (ev: MouseEvent) => {
      if (!heightResizeRef.current) return;
      const finalH = Math.max(100, heightResizeRef.current.startH + ev.clientY - heightResizeRef.current.startY);
      heightResizeRef.current = null;
      updateCard(index, { ...card, customHeight: finalH });
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // ── Width resize (snaps to column spans 1–3, main grid only) ──────────────
  const [localSpan, setLocalSpan] = useState<number>(card.gridSpan ?? 1);
  // Ref so onUp closure always sees the latest span (avoids stale closure)
  const localSpanRef = useRef(localSpan);
  const widthResizeRef = useRef<{ startX: number; colWidth: number } | null>(null);
  useEffect(() => {
    setLocalSpan(card.gridSpan ?? 1);
    localSpanRef.current = card.gridSpan ?? 1;
  }, [card.gridSpan]);

  const handleWidthResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    if (!ref.current) return;
    const cardW = ref.current.getBoundingClientRect().width;
    const colWidth = cardW / (card.gridSpan ?? 1);
    widthResizeRef.current = { startX: e.clientX, colWidth };
    const onMove = (ev: MouseEvent) => {
      if (!widthResizeRef.current) return;
      const newW = cardW + ev.clientX - widthResizeRef.current.startX;
      const newSpan = Math.max(1, Math.min(3, Math.round(newW / widthResizeRef.current.colWidth)));
      setLocalSpan(newSpan);
      localSpanRef.current = newSpan;
    };
    const onUp = () => {
      if (!widthResizeRef.current) return;
      widthResizeRef.current = null;
      updateCard(index, { ...card, gridSpan: localSpanRef.current });
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // Grid placement — outer div owns position:relative so handles escape card overflow clipping
  const gridItemStyle: React.CSSProperties = !sidebar ? {
    gridColumn: localSpan > 1 ? `span ${localSpan}` : undefined,
    gridRow:    card.rowSpan && card.rowSpan > 1 ? `span ${card.rowSpan}` : undefined,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    ...(localHeight && { minHeight: localHeight }),
  } : {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    ...(localHeight ? { minHeight: localHeight } : sidebarFirst ? { flex: 1, minHeight: 'clamp(220px, 54vw, 716px)' } : {}),
  };

  return (
    <>
      {/* Outer div: grid placement + resize handle anchor (no overflow clipping here) */}
      <div
        ref={ref}
        style={gridItemStyle}
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        {/* Animated card content */}
        <motion.div
          style={{ opacity: isDragging ? 0.5 : 1, cursor: isEditMode ? 'move' : 'default', flex: 1, display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isDragging ? 0.5 : 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {card.type === 'logo'       && <LogoCard       card={card} contentKey={contentKey} />}
          {card.type === 'text'       && <TextCard        card={card} contentKey={contentKey} />}
          {card.type === 'clock'      && <ClockCard       card={card} contentKey={contentKey} />}
          {card.type === 'image-text' && <ImageTextCard   card={card} contentKey={contentKey} />}
          {card.type === 'profile'    && <ProfileCard     card={card} contentKey={contentKey} />}
          {card.type === 'person'     && <PersonCard      card={card} contentKey={contentKey} />}
          {card.type === 'quote'      && <QuoteCard       card={card} contentKey={contentKey} />}
          {card.type === 'stats'      && <StatsCard       card={card} contentKey={contentKey} />}
        </motion.div>

        {/* Settings / delete buttons — outside motion.div so no clipping */}
        {isEditMode && isHovered && (
          <div className="absolute top-2 right-2 z-50 flex gap-2">
            <button onClick={() => setShowSettings(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all">
              <Settings className="h-4 w-4" />
            </button>
            <button onClick={() => { if (confirm('Delete this card?')) deleteCard(card.id); }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Height resize handle — bottom center, always visible in edit mode */}
        {isEditMode && (
          <div
            onMouseDown={handleHeightResizeMouseDown}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'ns-resize', zIndex: 50,
              background: 'linear-gradient(to top, rgba(0,153,255,0.25), transparent)',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: '#0099FF', borderRadius: 999, padding: '2px 10px',
              pointerEvents: 'none', userSelect: 'none',
            }}>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M2 2h12M2 6h12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 10, color: 'white', fontFamily: 'monospace' }}>
                {localHeight ? `${Math.round(localHeight)}px` : 'height'}
              </span>
            </div>
          </div>
        )}

        {/* Width resize handle — right edge, main grid only, always visible in edit mode */}
        {isEditMode && !sidebar && (
          <div
            onMouseDown={handleWidthResizeMouseDown}
            style={{
              position: 'absolute', top: 0, bottom: 0, right: 0, width: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'ew-resize', zIndex: 50,
              background: 'linear-gradient(to left, rgba(0,153,255,0.25), transparent)',
            }}
          >
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              background: '#0099FF', borderRadius: 999, padding: '10px 2px',
              pointerEvents: 'none', userSelect: 'none',
            }}>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path d="M2 2v12M6 2v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 10, color: 'white', fontFamily: 'monospace', writingMode: 'vertical-rl' }}>
                {localSpan}col
              </span>
            </div>
          </div>
        )}
      </div>

      {showSettings && (
        <CardSettingsModal card={card} onClose={() => setShowSettings(false)}
          onSave={(updated) => { updateCard(index, updated); setShowSettings(false); }} />
      )}
    </>
  );
}

// ─── Card renders ─────────────────────────────────────────────────────────────

function LogoCard({ card }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-center flex justify-center overflow-clip relative w-full h-full p-[22px]">
      {card.backgroundImage && (
        <div className="absolute inset-0">
          <img src={card.backgroundImage} alt={card.backgroundAlt || ''} className="block size-full object-cover" />
        </div>
      )}
      <div className="relative z-10">
        <SiteLogo heightKey="site.logoHeightNavbar" defaultHeight={36} minHeight={16} maxHeight={100} />
      </div>
    </div>
  );
}

function TextCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-center flex flex-col justify-center overflow-clip relative w-full h-full p-6" style={{ backgroundColor: card.backgroundColor || 'rgb(36,36,36)' }}>
      <EditableText contentKey={`${contentKey}.card.${card.id}.title`} defaultValue={`<h5 class="font-medium text-center text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style="font-family:Ronzino,sans-serif">${card.title || ''}</h5>`} as="div" className="" />
    </div>
  );
}

function ClockCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden relative w-full h-full pt-6 pb-6 px-6"
      style={{ backgroundColor: card.backgroundColor || 'rgb(36,36,36)' }}>
      <EditableText
        contentKey={`${contentKey}.card.${card.id}.title`}
        defaultValue={`<h5 class="font-medium text-center text-white text-[28px] tracking-[-0.6px] leading-[30px]" style="font-family:Ronzino,sans-serif">${card.title || ''}</h5>`}
        as="div" className="" />
      <div className="flex items-center justify-center flex-1">
        <AnimatedClock />
      </div>
    </div>
  );
}

function ImageTextCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-end flex justify-center overflow-clip relative w-full h-full p-[22px]">
      {card.backgroundImage && (
        <div className="absolute inset-0">
          <img src={card.backgroundImage} alt={card.backgroundAlt || ''} className="block size-full object-cover" />
        </div>
      )}
      <div className="relative z-10 w-full">
        <EditableText contentKey={`${contentKey}.card.${card.id}.title`} defaultValue={`<h5 class="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style="font-family:Ronzino,sans-serif">${card.title || ''}</h5>`} as="div" className="" />
      </div>
    </div>
  );
}

function ProfileCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: card.backgroundColor || 'rgb(36,36,36)' }}>
      {/* 24/7 watermark — scrolls right to left behind the image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 1 }}>
        <motion.span
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            fontSize: 'clamp(80px, 13vw, 160px)',
            fontWeight: 800,
            fontFamily: 'Ronzino, sans-serif',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '-0.04em',
          }}
          animate={{ x: [340, -380], y: '-50%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 0 }}
        >
          24/7
        </motion.span>
      </div>

      {/* Profile image */}
      {card.profileImage && (
        <div className="absolute bottom-0 left-0 right-0 h-[91%]" style={{ zIndex: 2 }}>
          <img src={card.profileImage} className="block w-full h-full object-contain object-bottom" />
        </div>
      )}

      {/* Bottom blur + info */}
      <div className="absolute bottom-0 left-0 right-0 h-[90px] backdrop-blur-[20px]" style={{ zIndex: 3 }} />
      <div className="absolute bottom-0 left-0 right-0 p-3" style={{ zIndex: 4 }}>
        <EditableText contentKey={`${contentKey}.card.${card.id}.title`} defaultValue={`<p class="font-semibold text-white text-[16px] leading-[20px]">${card.title || 'Name'}</p>`} as="div" className="" />
        <EditableText contentKey={`${contentKey}.card.${card.id}.subtitle`} defaultValue={`<p class="text-white/60 text-[12px] leading-[16px]">${card.subtitle || 'Role'}</p>`} as="div" className="" />
      </div>

      {/* Online indicator */}
      {card.showOnline && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5" style={{ zIndex: 5 }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span style={{ fontSize: 12, color: '#4ade80', fontFamily: 'sans-serif' }}>Online</span>
        </div>
      )}
    </div>
  );
}

function PersonCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="relative w-full overflow-hidden flex-1" style={{ minHeight: 'clamp(180px, 29vw, 360px)', backgroundColor: card.backgroundColor || 'rgb(60,20,20)' }}>
      {card.backgroundImage ? (
        <img src={card.backgroundImage} alt={card.backgroundAlt || ''} className="block w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 14 }}>No image — add via settings</span>
        </div>
      )}
      {card.title && (
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ zIndex: 2, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
          <EditableText contentKey={`${contentKey}.card.${card.id}.title`} defaultValue={`<p class="font-semibold text-white text-[16px]">${card.title}</p>`} as="div" className="" />
        </div>
      )}
    </div>
  );
}

function QuoteCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="relative w-full p-5 flex flex-col justify-between" style={{ minHeight: 'clamp(100px, 14.5vw, 180px)', backgroundColor: card.backgroundColor || 'rgb(36,36,36)' }}>
      <EditableText
        contentKey={`${contentKey}.card.${card.id}.quote`}
        defaultValue={`<p class="text-white/80 text-[14px] leading-[22px]" style="font-family:sans-serif">${card.quote || '"Your quote here"'}</p>`}
        as="div" className="" multiline />
      <div className="mt-4">
        <EditableText contentKey={`${contentKey}.card.${card.id}.title`} defaultValue={`<p class="font-semibold text-white text-[15px]">${card.title || 'Name'}</p>`} as="div" className="" />
        <EditableText contentKey={`${contentKey}.card.${card.id}.subtitle`} defaultValue={`<p class="text-white/50 text-[12px]">${card.subtitle || 'Role'}</p>`} as="div" className="" />
      </div>
    </div>
  );
}

function StatsCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="relative w-full p-5 flex flex-col gap-3" style={{ minHeight: 'clamp(80px, 9.7vw, 120px)', backgroundColor: card.backgroundColor || 'rgb(36,36,36)' }}>
      <div>
        <EditableText contentKey={`${contentKey}.card.${card.id}.statNumber`} defaultValue={`<p class="font-bold text-white text-[36px] leading-[40px]" style="font-family:Ronzino,sans-serif">${card.statNumber || '0'}</p>`} as="div" className="" />
        <EditableText contentKey={`${contentKey}.card.${card.id}.statLabel`} defaultValue={`<p class="text-white/50 text-[13px]">${card.statLabel || 'Label'}</p>`} as="div" className="" />
      </div>
      {/* Avatar row */}
      {card.avatars && card.avatars.length > 0 && (
        <div className="flex items-center">
          {card.avatars.slice(0, 5).map((src, i) => (
            <img key={i} src={src} className="w-8 h-8 rounded-full object-cover border-2 border-[rgb(36,36,36)]" style={{ marginLeft: i > 0 ? -10 : 0 }} />
          ))}
          <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-[rgb(36,36,36)] flex items-center justify-center" style={{ marginLeft: -10 }}>
            <span className="text-white/60 text-xs font-bold">+</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Settings Modal ───────────────────────────────────────────────────────────

function CardSettingsModal({ card, onClose, onSave }: { card: WhyChooseUsCard; onClose: () => void; onSave: (c: WhyChooseUsCard) => void }) {
  const [edited, setEdited] = useState({ ...card });
  const [tab, setTab] = useState<'type' | 'style' | 'content'>('type');

  const tabBtn = (t: typeof tab) =>
    `px-4 py-2 text-sm font-medium rounded-t transition-colors ${tab === t ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="text-lg font-medium text-white">Card Settings</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          {(['type', 'style', 'content'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={tabBtn(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        <div className="p-6 space-y-6">
          {tab === 'type' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Card Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'logo',       label: 'Logo Card',       desc: 'Brand logo with background image' },
                    { value: 'text',       label: 'Text Card',       desc: 'Solid color with centered text' },
                    { value: 'clock',      label: 'Clock Card',      desc: 'Animated real-time clock + title' },
                    { value: 'image-text', label: 'Image + Text',    desc: 'Background image with text overlay' },
                    { value: 'profile',    label: 'Profile Card',    desc: 'Person photo with name & role' },
                    { value: 'person',     label: 'Person Photo',    desc: 'Large portrait photo' },
                    { value: 'quote',      label: 'Quote Card',      desc: 'Testimonial quote + attribution' },
                    { value: 'stats',      label: 'Stats Card',      desc: 'Number, label, and avatars' },
                  ].map(type => (
                    <button key={type.value} onClick={() => setEdited({ ...edited, type: type.value as CardType })}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${edited.type === type.value ? 'border-[#0099FF] bg-[#0099FF]/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                      <div className="font-medium text-white text-sm mb-1">{type.label}</div>
                      <div className="text-xs text-gray-400">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              {!edited.sidebar && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Column Span</label>
                    <div className="flex gap-2">
                      {[1, 2, 3].map(span => (
                        <button key={span} onClick={() => setEdited({ ...edited, gridSpan: span })}
                          className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${(edited.gridSpan ?? 1) === span ? 'bg-[#0099FF] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                          {span} Col{span > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Row Span</label>
                    <div className="flex gap-2">
                      {[1, 2, 3].map(span => (
                        <button key={span} onClick={() => setEdited({ ...edited, rowSpan: span })}
                          className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${(edited.rowSpan ?? 1) === span ? 'bg-[#0099FF] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                          {span} Row{span > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={!!edited.sidebar} onChange={e => setEdited({ ...edited, sidebar: e.target.checked })} className="w-4 h-4 accent-[#0099FF]" />
                  <span className="text-sm text-white">Sidebar card (right column)</span>
                </label>
              </div>
            </div>
          )}

          {tab === 'style' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Background Color</label>
                <div className="flex gap-3">
                  <input type="color" value={edited.backgroundColor || '#242424'} onChange={e => setEdited({ ...edited, backgroundColor: e.target.value })} className="w-14 h-14 rounded cursor-pointer border-2 border-white/20" />
                  <input type="text" value={edited.backgroundColor || '#242424'} onChange={e => setEdited({ ...edited, backgroundColor: e.target.value })} className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 font-mono text-sm focus:outline-none focus:border-[#0099FF]" />
                </div>
              </div>
              {['logo', 'image-text', 'person'].includes(edited.type) && (
                <>
                  <ImageUploadField label="Background / Portrait Image" value={edited.backgroundImage || ''} onChange={url => setEdited({ ...edited, backgroundImage: url })} acceptVideo />
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Image Alt Text</label>
                    <input type="text" value={edited.backgroundAlt || ''} onChange={e => setEdited({ ...edited, backgroundAlt: e.target.value })} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" placeholder="Describe the image..." />
                  </div>
                </>
              )}
              {edited.type === 'profile' && (
                <>
                  <ImageUploadField label="Profile Image" value={edited.profileImage || ''} onChange={url => setEdited({ ...edited, profileImage: url })} acceptVideo />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={!!edited.showOnline} onChange={e => setEdited({ ...edited, showOnline: e.target.checked })} className="w-4 h-4 accent-green-500" />
                    <span className="text-sm text-white">Show Online indicator</span>
                  </label>
                </>
              )}
            </div>
          )}

          {tab === 'content' && (
            <div className="space-y-4">
              {['text', 'clock', 'image-text', 'profile', 'person'].includes(edited.type) && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Title / Name</label>
                  <input type="text" value={edited.title || ''} onChange={e => setEdited({ ...edited, title: e.target.value })} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" />
                </div>
              )}
              {['profile', 'quote'].includes(edited.type) && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Subtitle / Role</label>
                  <input type="text" value={edited.subtitle || ''} onChange={e => setEdited({ ...edited, subtitle: e.target.value })} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" />
                </div>
              )}
              {edited.type === 'quote' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Quote Text</label>
                  <textarea value={edited.quote || ''} onChange={e => setEdited({ ...edited, quote: e.target.value })} rows={4} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" />
                </div>
              )}
              {edited.type === 'stats' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Stat Number</label>
                    <input type="text" value={edited.statNumber || ''} onChange={e => setEdited({ ...edited, statNumber: e.target.value })} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" placeholder="10K+" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Stat Label</label>
                    <input type="text" value={edited.statLabel || ''} onChange={e => setEdited({ ...edited, statLabel: e.target.value })} className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]" placeholder="Satisfied clients" />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-3 border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1a1a1a]">
          <button onClick={onClose} className="flex-1 rounded bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20">Cancel</button>
          <button onClick={() => onSave(edited)} className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white hover:bg-[#0088EE]">Save Changes</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
