import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDrag, useDrop } from 'react-dnd';
import { useCMSStore } from './cmsStore';
import { Plus, Trash2, X, GripVertical, Pencil } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface StoryItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const DEFAULT_ITEMS: StoryItem[] = [
  {
    id: 'story-1',
    number: '001.',
    title: 'Our Story',
    description:
      'Flixen™ began with a simple yet powerful vision — to transform creative ideas into cinematic stories that inspire and connect people everywhere. From our humble beginnings as a small, passionate production team, we\'ve grown into a full-scale creative agency trusted by global brands. Today, we continue crafting visuals that spark emotion, build connection, and elevate every story we tell.',
  },
  {
    id: 'story-2',
    number: '002.',
    title: 'Our Mission',
    description:
      'Our mission is to deliver powerful, emotion-driven videos that deeply engage audiences, strengthen brands, and create lasting impressions. We believe every story deserves to be told with passion, precision, and creativity — transforming ideas into visuals that inspire, connect, and endure. At Flixen™, we turn every client\'s vision into an unforgettable cinematic experience that truly stands out.',
  },
];

const STORAGE_KEY = 'about.story.items';

// ─── Draggable row ────────────────────────────────────────────────────────────

interface DraggableRowProps {
  item: StoryItem;
  index: number;
  isEditMode: boolean;
  onMove: (from: number, to: number) => void;
  onEdit: (item: StoryItem) => void;
  onDelete: (id: string) => void;
}

function DraggableStoryRow({ item, index, isEditMode, onMove, onEdit, onDelete }: DraggableRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'story-row',
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    canDrag: () => isEditMode,
  });

  const [, drop] = useDrop<{ index: number }>({
    accept: 'story-row',
    hover(dragged) {
      if (dragged.index === index) return;
      onMove(dragged.index, index);
      dragged.index = index;
    },
  });

  drag(drop(ref));

  return (
    <>
      <div
        ref={ref}
        className="group relative flex w-full items-start gap-0 py-[32px]"
        style={{ opacity: isDragging ? 0.4 : 1 }}
      >
        {/* Drag handle */}
        {isEditMode && (
          <div className="absolute left-[-28px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing text-white/30 hover:text-white/70">
            <GripVertical className="size-5" />
          </div>
        )}

        {/* Number */}
        <div className="w-[200px] shrink-0">
          <p
            className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {item.number}
          </p>
        </div>

        {/* Title */}
        <div className="w-[400px] shrink-0 -mt-[1px]">
          <p
            className="font-medium leading-[33.6px] text-[30px] text-white tracking-[-0.64px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {item.title}
          </p>
        </div>

        {/* Description */}
        <div className="flex-1 opacity-80">
          <p
            className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {item.description}
          </p>
        </div>

        {/* Edit / Delete */}
        {isEditMode && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(item)}
              className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 transition-colors"
            >
              <Pencil className="size-3" /> Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="flex items-center gap-1 rounded bg-red-500/20 px-2 py-1 text-xs text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <Trash2 className="size-3" />
            </button>
          </div>
        )}
      </div>
      <div className="bg-[#b0b0b0] h-px opacity-30 w-full" />
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function EditableStorySection() {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const [items, setItems] = useState<StoryItem[]>(() => {
    const stored = getContent(STORAGE_KEY, '');
    if (stored) {
      try { return JSON.parse(stored) as StoryItem[]; } catch {}
    }
    return DEFAULT_ITEMS;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<StoryItem | null>(null);
  const [formData, setFormData] = useState({ number: '', title: '', description: '' });

  const saveItems = async (next: StoryItem[]) => {
    setItems(next);
    updateContent(STORAGE_KEY, JSON.stringify(next));
    await persistContent();
  };

  const openAdd = () => {
    setEditingItem(null);
    const nextNum = String(items.length + 1).padStart(3, '0') + '.';
    setFormData({ number: nextNum, title: '', description: '' });
    setShowModal(true);
  };

  const openEdit = (item: StoryItem) => {
    setEditingItem(item);
    setFormData({ number: item.number, title: item.title, description: item.description });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    const updated = editingItem
      ? items.map((i) => (i.id === editingItem.id ? { ...editingItem, ...formData } : i))
      : [...items, { id: `story-${Date.now()}`, ...formData }];
    await saveItems(updated);
    setShowModal(false);
  };

  const handleDelete = (id: string) => saveItems(items.filter((i) => i.id !== id));

  const moveItem = (from: number, to: number) => {
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    saveItems(next);
  };

  return (
    <div className="content-stretch flex flex-col gap-[0px] items-center justify-center relative shrink-0 w-full pl-7">
      {/* Rows */}
      {items.map((item, index) => (
        <DraggableStoryRow
          key={item.id}
          item={item}
          index={index}
          isEditMode={isEditMode}
          onMove={moveItem}
          onEdit={openEdit}
          onDelete={handleDelete}
        />
      ))}

      {/* Add button */}
      {isEditMode && (
        <button
          onClick={openAdd}
          className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-white/20 px-4 py-3 text-sm text-white/50 hover:border-[#0099FF]/60 hover:text-[#0099FF] transition-colors w-full justify-center"
        >
          <Plus className="size-4" /> Add Row
        </button>
      )}

      {/* Modal */}
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
                {editingItem ? 'Edit Row' : 'Add Row'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="size-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Number</label>
                <input
                  type="text"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
                  placeholder="001."
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
                  placeholder="Our Story"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60 resize-none"
                  placeholder="Describe this section..."
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
                {editingItem ? 'Save Changes' : 'Add Row'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
