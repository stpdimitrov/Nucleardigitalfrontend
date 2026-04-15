import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { useCMSStore } from './cmsStore';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../../lib/animations';
import { EditableText } from './EditableText';
import { Settings, Plus, Trash2, GripVertical } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';

// Card Types
type CardType = 'logo' | 'text' | 'image-text' | 'profile';

interface WhyChooseUsCard {
  id: string;
  type: CardType;
  title?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  backgroundColor?: string;
  profileImage?: string;
  gridSpan?: number; // 1, 2, or 3
}

interface EditableWhyChooseUsSectionProps {
  contentKey?: string;
  defaultSectionTag?: string;
  defaultSectionTitle?: string;
  defaultSectionDescription?: string;
  defaultButtonText?: string;
  defaultButtonHref?: string;
  defaultCards?: WhyChooseUsCard[];
}

const DEFAULT_CARDS: WhyChooseUsCard[] = [
  {
    id: 'card-1',
    type: 'logo',
    gridSpan: 1,
    backgroundImage: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64a3270e10de32f130e42361b20a73d502badbb2.jpeg%3Fscale-down-to=512&width=1280&height=1280?generation=1768843022915309&alt=media',
    backgroundAlt: 'A person in a red turtleneck and round red sunglasses stands against a matching red background. The mood is bold and stylish, with vibrant red tones.',
  },
  {
    id: 'card-2',
    type: 'text',
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
    backgroundAlt: 'A black Leica camera with a textured body is dramatically lit in red, reflecting on a glossy surface. The red background adds a bold, intense mood.',
  },
  {
    id: 'card-4',
    type: 'profile',
    gridSpan: 1,
    title: 'Dedicated 24/7 Support',
    backgroundColor: 'rgb(36, 36, 36)',
    profileImage: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fffc55ccfed2fddbf3312b5052ae7855ffa1394c1.png%3Fwidth=432&height=577?generation=1768843022847170&alt=media',
  },
];

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

  // Get cards from CMS
  const cardsData = getContent(`${contentKey}.cards`, JSON.stringify(defaultCards));
  const cards: WhyChooseUsCard[] = JSON.parse(cardsData);

  // Save cards
  const saveCards = async (newCards: WhyChooseUsCard[]) => {
    try {
      setSaveStatus('saving');
      const cardsString = JSON.stringify(newCards);
      updateContent(`${contentKey}.cards`, cardsString);
      await persistContent();
    } catch (error) {
      console.error('Failed to save cards:', error);
      setSaveStatus('error');
    }
  };

  // Add card
  const addCard = () => {
    const newCard: WhyChooseUsCard = {
      id: `card-${Date.now()}`,
      type: 'text',
      gridSpan: 1,
      title: 'New Card',
      backgroundColor: 'rgb(36, 36, 36)',
    };
    saveCards([...cards, newCard]);
  };

  // Delete card
  const deleteCard = (id: string) => {
    saveCards(cards.filter(c => c.id !== id));
  };

  // Update card
  const updateCard = (index: number, updatedCard: WhyChooseUsCard) => {
    const newCards = [...cards];
    newCards[index] = updatedCard;
    saveCards(newCards);
  };

  return (
    <motion.section
      aria-label="Why choose us"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        {/* Section Header */}
        <div aria-label="Header" className="items-center flex flex-col h-min justify-start relative w-full gap-[24px] max-w-[790px] shrink-[0]">
          <div aria-label="Top wrapper" className="items-center flex flex-col h-min justify-start relative w-full gap-[8px] shrink-[0]">
            <div aria-label="Tag" className="relative shrink-[0]">
              <div className="items-center flex size-min justify-start overflow-clip relative bg-white/5 gap-[8px] pt-2 pr-4 pb-2 pl-4 rounded-[62.5rem]">
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey={`${contentKey}.sectionTag`}
                    defaultValue={`<p class="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${defaultSectionTag}</p>`}
                    as="div"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start relative w-full shrink-[0]">
              <EditableText
                contentKey={`${contentKey}.sectionTitle`}
                defaultValue={`<h2 class="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${defaultSectionTitle}</h2>`}
                as="div"
                className=""
              />
            </div>
          </div>
          <div aria-label="Bottom wrapper" className="items-center flex flex-col h-min justify-start relative w-full gap-[16px] shrink-[0]">
            <div className="flex flex-col justify-start relative w-full shrink-[0]">
              <EditableText
                contentKey={`${contentKey}.sectionDescription`}
                defaultValue={`<p class="text-center text-white/70 text-[18px] tracking-[-0.18px] leading-[27px]" style="font-family:&quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${defaultSectionDescription}</p>`}
                as="div"
                className=""
              />
            </div>
            <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] shrink-[0]">
              <div aria-label="Button" className="relative shrink-[0]">
                <a
                  href={getContent(`${contentKey}.buttonHref`, defaultButtonHref)}
                  aria-label="Small"
                  className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]"
                  style={{ textDecoration: 'rgb(0, 0, 238)' }}
                >
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <EditableText
                      contentKey={`${contentKey}.buttonText`}
                      defaultValue={`<p class="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${defaultButtonText}</p>`}
                      as="div"
                      className=""
                    />
                  </div>
                  <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                    <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                      <div aria-label="Icon" className="aspect-square relative w-[15px] z-[1] shrink-[0] flex items-center justify-center">
                        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          aria-label="Grid 6x"
          className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[16px] shrink-[0]"
          style={{ gridTemplateColumns: 'repeat(4, minmax(50px, 1fr))' }}
          variants={staggerContainer}
        >
          <motion.div
            aria-label="Grid 3x"
            className="self-start grid h-min justify-center justify-self-start overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[16px]"
            style={{ gridTemplateColumns: 'repeat(3, minmax(50px, 1fr))', gridArea: 'auto / span 4' }}
            variants={staggerContainer}
          >
            {cards.map((card, index) => (
              <CardComponent
                key={card.id}
                card={card}
                index={index}
                contentKey={contentKey}
                deleteCard={deleteCard}
                updateCard={updateCard}
                cards={cards}
                saveCards={saveCards}
              />
            ))}

            {/* Add Card Button */}
            {isEditMode && (
              <motion.button
                onClick={addCard}
                className="self-start justify-self-start relative w-full h-[350px] border-2 border-dashed border-[#0099FF]/50 bg-[#0099FF]/5 hover:bg-[#0099FF]/10 hover:border-[#0099FF] transition-all flex items-center justify-center group"
                variants={staggerItem}
              >
                <div className="flex flex-col items-center gap-2">
                  <Plus className="w-8 h-8 text-[#0099FF]" />
                  <p className="text-white/70 text-sm font-medium">Add Card</p>
                </div>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Card Component
interface CardComponentProps {
  card: WhyChooseUsCard;
  index: number;
  contentKey: string;
  deleteCard: (id: string) => void;
  updateCard: (index: number, card: WhyChooseUsCard) => void;
  cards: WhyChooseUsCard[];
  saveCards: (cards: WhyChooseUsCard[]) => void;
}

function CardComponent({ card, index, contentKey, deleteCard, updateCard, cards, saveCards }: CardComponentProps) {
  const { isEditMode } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const gridSpanClass = card.gridSpan === 2 ? 'col-span-2' : card.gridSpan === 3 ? 'col-span-3' : '';

  // Drag and Drop
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'WHY_CHOOSE_US_CARD',
    item: { index },
    canDrag: isEditMode,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [, drop] = useDrop({
    accept: 'WHY_CHOOSE_US_CARD',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      
      // Move the cards
      const newCards = [...cards];
      const [removed] = newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, removed);
      saveCards(newCards);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <>
      <motion.div
        ref={ref}
        aria-label={`${card.type} card`}
        className={`relative ${gridSpanClass}`}
        style={{
          gridArea: card.gridSpan ? `auto / span ${card.gridSpan}` : undefined,
          opacity: isDragging ? 0.5 : 1,
          cursor: isEditMode ? 'move' : 'default',
        }}
        variants={staggerItem}
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        {/* Card Content */}
        {card.type === 'logo' && <LogoCard card={card} contentKey={contentKey} />}
        {card.type === 'text' && <TextCard card={card} contentKey={contentKey} />}
        {card.type === 'image-text' && <ImageTextCard card={card} contentKey={contentKey} />}
        {card.type === 'profile' && <ProfileCard card={card} contentKey={contentKey} />}

        {/* Edit Controls */}
        {isEditMode && isHovered && (
          <div className="absolute top-2 right-2 z-50 flex gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all"
              title="Card Settings"
            >
              <Settings className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                if (confirm('Delete this card?')) deleteCard(card.id);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all"
              title="Delete Card"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </motion.div>

      {/* Settings Modal */}
      {showSettings && (
        <CardSettingsModal
          card={card}
          onClose={() => setShowSettings(false)}
          onSave={(updatedCard) => {
            updateCard(index, updatedCard);
            setShowSettings(false);
          }}
        />
      )}
    </>
  );
}

// Logo Card
function LogoCard({ card }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-center self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]">
      {card.backgroundImage && (
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <img alt={card.backgroundAlt || ''} src={card.backgroundImage} className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
        </div>
      )}
      <div aria-label="Logo" className="relative shrink-[0]">
        <a href="/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{ textDecoration: 'rgb(0, 0, 238)' }}>
          <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&height=42?generation=1768843022438331&alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
            </div>
          </div>
          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
            <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{ fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif', textDecoration: 'rgb(255, 255, 255)' }}>Flixen™</p>
          </div>
        </a>
      </div>
    </div>
  );
}

// Text Card
function TextCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-center self-start flex flex-col justify-center justify-self-start overflow-clip relative w-full h-[350px] p-6" style={{ backgroundColor: card.backgroundColor || 'rgb(36, 36, 36)' }}>
      <div className="flex flex-col justify-start relative w-full shrink-[0]">
        <EditableText
          contentKey={`${contentKey}.card.${card.id}.title`}
          defaultValue={`<h5 class="font-medium text-center text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${card.title || ''}</h5>`}
          as="div"
          className=""
        />
      </div>
    </div>
  );
}

// Image-Text Card
function ImageTextCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="items-end self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]">
      {card.backgroundImage && (
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <img alt={card.backgroundAlt || ''} src={card.backgroundImage} className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1152]" />
        </div>
      )}
      <div className="flex flex-col grow justify-start relative w-px basis-0 shrink-[0]">
        <EditableText
          contentKey={`${contentKey}.card.${card.id}.title`}
          defaultValue={`<h5 class="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${card.title || ''}</h5>`}
          as="div"
          className=""
        />
      </div>
    </div>
  );
}

// Profile Card
function ProfileCard({ card, contentKey }: { card: WhyChooseUsCard; contentKey: string }) {
  return (
    <div className="self-start justify-self-start relative w-full h-[349px]">
      <div className="items-start flex flex-col size-full justify-between overflow-clip relative p-[14px]" style={{ backgroundColor: card.backgroundColor || 'rgb(36, 36, 36)' }}>
        <div aria-label="BG Blur" className="overflow-hidden absolute w-full h-[100px] left-0 bottom-0 backdrop-blur-[20px] z-[3] shrink-[0]"></div>
        {card.profileImage && (
          <div aria-label="Profile image" className="overflow-clip absolute h-[91%] left-0 right-0 bottom-0 z-[2] shrink-[0]">
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <img src={card.profileImage} className="block size-full object-contain object-bottom overflow-clip aspect-[auto_432_/_577]" />
            </div>
          </div>
        )}
        <div className="flex flex-col justify-start relative w-full z-[4] shrink-[0]">
          <EditableText
            contentKey={`${contentKey}.card.${card.id}.title`}
            defaultValue={`<h5 class="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${card.title || ''}</h5>`}
            as="div"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

// Card Settings Modal
interface CardSettingsModalProps {
  card: WhyChooseUsCard;
  onClose: () => void;
  onSave: (card: WhyChooseUsCard) => void;
}

function CardSettingsModal({ card, onClose, onSave }: CardSettingsModalProps) {
  const [editedCard, setEditedCard] = useState({ ...card });
  const [activeTab, setActiveTab] = useState<'type' | 'style' | 'content'>('type');

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="font-['Inter:Medium',sans-serif] text-lg font-medium text-white">Card Settings</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          <button
            onClick={() => setActiveTab('type')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'type' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Type
          </button>
          <button
            onClick={() => setActiveTab('style')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'style' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Style
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'content' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Content
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Type Tab */}
          {activeTab === 'type' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Card Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'logo', label: 'Logo Card', desc: 'Display logo with background' },
                    { value: 'text', label: 'Text Card', desc: 'Solid color with centered text' },
                    { value: 'image-text', label: 'Image + Text', desc: 'Background image with text overlay' },
                    { value: 'profile', label: 'Profile Card', desc: 'Person image with title' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setEditedCard({ ...editedCard, type: type.value as CardType })}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        editedCard.type === type.value
                          ? 'border-[#0099FF] bg-[#0099FF]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="font-medium text-white text-sm mb-1">{type.label}</div>
                      <div className="text-xs text-gray-400">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Grid Span</label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((span) => (
                    <button
                      key={span}
                      onClick={() => setEditedCard({ ...editedCard, gridSpan: span })}
                      className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                        editedCard.gridSpan === span
                          ? 'bg-[#0099FF] text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {span} Column{span > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Style Tab */}
          {activeTab === 'style' && (
            <div className="space-y-4">
              {(editedCard.type === 'text' || editedCard.type === 'profile') && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Background Color</label>
                  <div className="flex gap-3">
                    <input
                      type="color"
                      value={editedCard.backgroundColor || '#242424'}
                      onChange={(e) => setEditedCard({ ...editedCard, backgroundColor: e.target.value })}
                      className="w-16 h-16 rounded cursor-pointer border-2 border-white/20"
                    />
                    <input
                      type="text"
                      value={editedCard.backgroundColor || '#242424'}
                      onChange={(e) => setEditedCard({ ...editedCard, backgroundColor: e.target.value })}
                      className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 font-mono text-sm focus:outline-none focus:border-[#0099FF]"
                      placeholder="#242424"
                    />
                  </div>
                </div>
              )}

              {(editedCard.type === 'logo' || editedCard.type === 'image-text') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Background Image URL</label>
                    <input
                      type="text"
                      value={editedCard.backgroundImage || ''}
                      onChange={(e) => setEditedCard({ ...editedCard, backgroundImage: e.target.value })}
                      className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Image Alt Text</label>
                    <input
                      type="text"
                      value={editedCard.backgroundAlt || ''}
                      onChange={(e) => setEditedCard({ ...editedCard, backgroundAlt: e.target.value })}
                      className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                      placeholder="Describe the image..."
                    />
                  </div>
                </>
              )}

              {editedCard.type === 'profile' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Profile Image URL</label>
                  <input
                    type="text"
                    value={editedCard.profileImage || ''}
                    onChange={(e) => setEditedCard({ ...editedCard, profileImage: e.target.value })}
                    className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    placeholder="https://..."
                  />
                </div>
              )}
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              {editedCard.type !== 'logo' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                  <textarea
                    value={editedCard.title || ''}
                    onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
                    className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF] min-h-[100px]"
                    placeholder="Enter card title..."
                  />
                </div>
              )}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded">
                <p className="text-yellow-300 text-sm">
                  💡 <strong>Tip:</strong> Text content can also be edited directly on the card when edit mode is enabled. This modal is for changing card type, layout, and images.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1a1a1a]">
          <button
            onClick={onClose}
            className="flex-1 rounded bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedCard)}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}