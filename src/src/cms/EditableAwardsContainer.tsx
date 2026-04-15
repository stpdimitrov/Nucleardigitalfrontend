import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDrag, useDrop } from 'react-dnd';
import { useCMSStore } from './cmsStore';
import { EditableText } from './EditableText';
import { EditableLink } from './EditableLink';
import { Plus, Trash2, X, GripVertical, Pencil } from 'lucide-react';
import svgPaths from "../../imports/svg-oba3n6vetg";

// ─── SVG helpers (unchanged) ─────────────────────────────────────────────────

function Component44() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Component 1">
          <path d={svgPaths.pb055200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component44 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component43 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons1 />
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface AwardItem {
  id: string;
  title: string;
  description: string;
  year: string;
}

const DEFAULT_AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Creative Video Agency',
    description: 'Recognized for producing visually stunning, story-driven videos that inspire audiences and set new creative standards in modern cinematic production.',
    year: '2025',
  },
  {
    id: 'award-2',
    title: 'Excellence in Cinematic Production',
    description: 'Awarded for exceptional craftsmanship, direction, and storytelling that blend creativity and precision to deliver unforgettable cinematic brand experiences.',
    year: '2024',
  },
  {
    id: 'award-3',
    title: 'Innovation in Visual Storytelling',
    description: 'Honored for redefining visual storytelling through innovative ideas, artistic direction, and emotional depth that connect audiences with every frame.',
    year: '2023',
  },
  {
    id: 'award-4',
    title: 'Outstanding Brand Film Award',
    description: 'Celebrated for creating meaningful brand films that combine authenticity, creativity, and emotion to elevate brand presence and audience connection.',
    year: '2022',
  },
];

const STORAGE_KEY = 'about.awards.items';

// ─── Draggable row ────────────────────────────────────────────────────────────

interface DraggableRowProps {
  award: AwardItem;
  index: number;
  isEditMode: boolean;
  onMove: (from: number, to: number) => void;
  onEdit: (award: AwardItem) => void;
  onDelete: (id: string) => void;
}

function DraggableAwardRow({ award, index, isEditMode, onMove, onEdit, onDelete }: DraggableRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'award-row',
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    canDrag: () => isEditMode,
  });

  const [, drop] = useDrop<{ index: number }>({
    accept: 'award-row',
    hover(item) {
      if (item.index === index) return;
      onMove(item.index, index);
      item.index = index;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="group content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative w-full"
      style={{ opacity: isDragging ? 0.4 : 1 }}
    >
      {/* Drag handle */}
      {isEditMode && (
        <div className="absolute left-[-28px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing text-white/30 hover:text-white/70">
          <GripVertical className="size-5" />
        </div>
      )}

      <div className="flex-[0_0_280px]">
        <h3 className="font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]" style={{ fontFamily: '"Inter", sans-serif' }}>
          {award.title}
        </h3>
      </div>
      <div className="flex-[1_1_0] opacity-80">
        <p className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]" style={{ fontFamily: '"Inter", sans-serif' }}>
          {award.description}
        </p>
      </div>
      <div className="flex-[0_0_100px] text-right">
        <p className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]" style={{ fontFamily: '"Inter", sans-serif' }}>
          {award.year}
        </p>
      </div>

      {/* Edit / Delete buttons */}
      {isEditMode && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(award)}
            className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 transition-colors"
          >
            <Pencil className="size-3" /> Edit
          </button>
          <button
            onClick={() => onDelete(award.id)}
            className="flex items-center gap-1 rounded bg-red-500/20 px-2 py-1 text-xs text-red-400 hover:bg-red-500/30 transition-colors"
          >
            <Trash2 className="size-3" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function EditableAwardsContainer() {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const [awards, setAwards] = useState<AwardItem[]>(() => {
    const stored = getContent(STORAGE_KEY, '');
    if (stored) {
      try { return JSON.parse(stored) as AwardItem[]; } catch {}
    }
    return DEFAULT_AWARDS;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingAward, setEditingAward] = useState<AwardItem | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', year: '' });

  const saveAwards = async (items: AwardItem[]) => {
    setAwards(items);
    updateContent(STORAGE_KEY, JSON.stringify(items));
    await persistContent();
  };

  const openAdd = () => {
    setEditingAward(null);
    setFormData({ title: '', description: '', year: new Date().getFullYear().toString() });
    setShowModal(true);
  };

  const openEdit = (award: AwardItem) => {
    setEditingAward(award);
    setFormData({ title: award.title, description: award.description, year: award.year });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    const updated = editingAward
      ? awards.map((a) => (a.id === editingAward.id ? { ...editingAward, ...formData } : a))
      : [...awards, { id: `award-${Date.now()}`, ...formData }];
    await saveAwards(updated);
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    saveAwards(awards.filter((a) => a.id !== id));
  };

  const moveAward = (from: number, to: number) => {
    const next = [...awards];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    saveAwards(next);
  };

  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-full" data-name="Container">
      {/* Header Section */}
      <div className="flex items-start justify-between relative w-full" data-name="Grid 6x">
        <div className="flex flex-col items-start" data-name="Section tag">
          <EditableText
            contentKey="about.awards.sectionTag"
            defaultValue="AWARDS & RECOGNITIONS"
            as="p"
            className="font-medium leading-[22.4px] text-[14px] text-white tracking-[-0.16px] uppercase"
            style={{ fontFamily: '"Inter", sans-serif' }}
          />
        </div>

        <div className="flex flex-col items-start gap-[8px] flex-1 px-[60px]" data-name="Text">
          <EditableText
            contentKey="about.awards.title"
            defaultValue="Our Achievements"
            as="h2"
            className="font-medium leading-[50.4px] text-[45px] text-white tracking-[-1.44px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          />
          <EditableText
            contentKey="about.awards.description"
            defaultValue="Proudly recognized for creativity, innovation, and excellence in delivering outstanding video experiences."
            as="p"
            className="font-medium leading-[24px] opacity-70 text-[#ddd] text-[14px] tracking-[-0.32px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
            multiline
          />
        </div>

        <EditableLink
          contentKey="about.awards.contactLink"
          defaultValue="/contact-us"
          className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] shrink-0"
          data-name="Button → Small"
        >
          <EditableText
            contentKey="about.awards.contactButtonText"
            defaultValue="CONTACT US"
            as="p"
            className="font-medium leading-[22.4px] text-[14px] text-black tracking-[-0.16px] uppercase"
            style={{ fontFamily: '"Inter", sans-serif' }}
          />
          <IconWrapper2 />
        </EditableLink>
      </div>

      {/* Awards Table */}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-7" data-name="Wrapper">
        {/* Table Header */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[#444] pb-[22px] relative shrink-0 w-full">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.table.header.col1"
              defaultValue="Awwwards:"
              as="p"
              className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>
          <div className="flex-[1_1_0]">
            <EditableText
              contentKey="about.awards.table.header.col2"
              defaultValue="Description:"
              as="p"
              className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.table.header.col3"
              defaultValue="Year:"
              as="p"
              className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>
        </div>

        {/* Award Rows */}
        {awards.map((award, index) => (
          <DraggableAwardRow
            key={award.id}
            award={award}
            index={index}
            isEditMode={isEditMode}
            onMove={moveAward}
            onEdit={openEdit}
            onDelete={handleDelete}
          />
        ))}

        {/* Add row button */}
        {isEditMode && (
          <button
            onClick={openAdd}
            className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-white/20 px-4 py-3 text-sm text-white/50 hover:border-[#0099FF]/60 hover:text-[#0099FF] transition-colors w-full justify-center"
          >
            <Plus className="size-4" /> Add Award
          </button>
        )}
      </div>

      {/* Add / Edit Modal */}
      {isEditMode && showModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">
                {editingAward ? 'Edit Award' : 'Add Award'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="size-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Award Name</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
                  placeholder="Best Creative Agency..."
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60 resize-none"
                  placeholder="Award description..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
                  placeholder="2025"
                />
              </div>
            </div>

            <div className="flex gap-2 border-t border-white/10 px-5 py-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!formData.title.trim()}
                className="flex-1 rounded-lg bg-[#0099FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#0088ee] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {editingAward ? 'Save Changes' : 'Add Award'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
