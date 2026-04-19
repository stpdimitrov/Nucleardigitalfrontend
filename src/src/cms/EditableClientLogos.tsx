import React, { useState, useRef } from 'react';
import { useCMSStore } from './cmsStore';
import { motion } from 'motion/react';
import { useDrag, useDrop } from 'react-dnd';
import { Trash2, Plus, X, Edit2, Upload, Link } from 'lucide-react';
import { staggerItem } from '../../lib/animations'; // still used by EditableLogoCard
import ReactDOM from 'react-dom';
import { uploadMedia } from '../../services/api';

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  aspectRatio: string;
  scale?: number;
}

interface EditableClientLogosProps {
  defaultLogos: ClientLogo[];
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

// ─── Shared image picker used in both Add and Edit modals ─────────────────────

function ImagePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const { adminToken, setSaveStatus } = useCMSStore();
  const [tab, setTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!adminToken) { setUploadError('Not logged in as admin.'); return; }
    setUploading(true);
    setUploadError('');
    try {
      setSaveStatus('saving');
      const url = await uploadMedia(adminToken, file);
      onChange(url);
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please try again.');
      setSaveStatus('error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {/* Tabs */}
      <div className="flex gap-2 rounded-lg bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setTab('upload')}
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            tab === 'upload' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          <Upload className="size-3" /> Upload
        </button>
        <button
          type="button"
          onClick={() => setTab('url')}
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            tab === 'url' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          <Link className="size-3" /> URL
        </button>
      </div>

      {tab === 'upload' && (
        <div
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onClick={() => !uploading && fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-4 py-8 text-center cursor-pointer transition-colors ${
            isDragging ? 'border-[#0099FF] bg-[#0099FF]/10' :
            uploading ? 'border-white/10 bg-white/5 cursor-wait' :
            'border-white/20 bg-white/5 hover:border-[#0099FF]/60 hover:bg-[#0099FF]/5'
          }`}
        >
          {uploading ? (
            <>
              <div className="size-8 animate-spin rounded-full border-2 border-white/20 border-t-[#0099FF]" />
              <p className="text-sm text-white/60">Uploading…</p>
            </>
          ) : (
            <>
              <Upload className="size-7 text-white/30" />
              <p className="text-sm font-medium text-white">Drop file or click to browse</p>
              <p className="text-xs text-white/40">JPG, PNG, WebP, SVG up to 5 MB · MP4, WebM up to 50 MB</p>
            </>
          )}
        </div>
      )}

      {tab === 'url' && (
        <div className="flex gap-2">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { onChange(urlInput.trim()); } }}
            placeholder="https://..."
            className="flex-1 px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
          />
          <button
            type="button"
            onClick={() => { if (urlInput.trim()) onChange(urlInput.trim()); }}
            disabled={!urlInput.trim()}
            className="px-3 py-2 bg-[#0099FF] hover:bg-[#0088ee] disabled:opacity-40 text-white rounded-lg text-sm transition-colors"
          >
            Set
          </button>
        </div>
      )}

      {uploadError && (
        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">{uploadError}</p>
      )}

      {value && (
        <div className="space-y-1">
          <p className="text-xs text-white/40">Preview</p>
          <div className="flex h-16 items-center justify-center rounded-lg bg-[rgb(36,36,36)]">
            <img src={value} alt="preview" className="max-h-full max-w-[120px] object-contain" />
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/mp4,video/webm,video/ogg"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        className="hidden"
      />
    </div>
  );
}

// ─── Logo card ────────────────────────────────────────────────────────────────

function EditableLogoCard({ logo, index, moveLogo, deleteLogo, editLogo }: {
  logo: ClientLogo;
  index: number;
  moveLogo: (dragIndex: number, hoverIndex: number) => void;
  deleteLogo: (id: string) => void;
  editLogo: (id: string, updatedLogo: Omit<ClientLogo, 'id'>) => void;
}) {
  const { isEditMode } = useCMSStore();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedLogo, setEditedLogo] = useState({
    name: logo.name,
    logoUrl: logo.logoUrl,
    aspectRatio: (logo.aspectRatio ?? 'auto 1 / 1').replace(/_/g, ' '),
    scale: logo.scale ?? 1,
  });
  const ref = React.useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'CLIENT_LOGO',
    collect(monitor) { return { handlerId: monitor.getHandlerId() }; },
    hover(item: DragItem, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveLogo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CLIENT_LOGO',
    item: () => ({ id: logo.id, index }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  if (isEditMode) drag(drop(ref));

  return (
    <motion.div
      ref={ref}
      aria-label="Client logo"
      className="self-start justify-self-start relative w-full group"
      variants={staggerItem}
      style={{ opacity: isDragging ? 0.4 : 1, cursor: isEditMode ? 'grab' : 'default' }}
      data-handler-id={handlerId}
    >
      <div
        aria-label="Client logo"
        className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]"
        style={isEditMode ? { outline: '1px dashed rgba(0,153,255,0.3)' } : undefined}
      >
        <div
          aria-label="Logo"
          className="relative w-[140px] h-[52px] shrink-[0]"
          style={{ transform: `scale(${logo.scale ?? 1})` }}
        >
          <div className="absolute left-0 top-0 right-0 bottom-0">
            <img
              src={logo.logoUrl}
              className="block size-full object-contain"
              style={{ aspectRatio: (logo.aspectRatio ?? 'auto 1 / 1').replace(/_/g, ' ') }}
              alt={logo.name}
            />
          </div>
        </div>

        {isEditMode && (
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={() => setShowEditModal(true)}
              className="p-2 bg-[#0099FF]/90 hover:bg-[#0099FF] text-white rounded-lg shadow-lg transition-all"
              title="Edit logo"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="p-2 bg-red-500/90 hover:bg-red-600 text-white rounded-lg shadow-lg transition-all"
              title="Delete logo"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {showDeleteConfirm && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20 rounded-lg">
          <div className="text-center px-4">
            <p className="text-white text-sm mb-3">Delete this logo?</p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => { deleteLogo(logo.id); setShowDeleteConfirm(false); }}
                className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full border border-[#0099FF]/30 shadow-[0_0_30px_rgba(0,153,255,0.3)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Edit Client Logo</h3>
              <button onClick={() => setShowEditModal(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Client Name</label>
                <input
                  type="text"
                  value={editedLogo.name}
                  onChange={(e) => setEditedLogo({ ...editedLogo, name: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="e.g., Acme Corp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Logo Image</label>
                <ImagePicker
                  value={editedLogo.logoUrl}
                  onChange={(url) => setEditedLogo({ ...editedLogo, logoUrl: url })}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-white">Scale</label>
                  <span className="text-xs text-white/50">{Math.round(editedLogo.scale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={200}
                  value={Math.round(editedLogo.scale * 100)}
                  onChange={(e) => setEditedLogo({ ...editedLogo, scale: parseInt(e.target.value) / 100 })}
                  className="w-full accent-[#0099FF]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { editLogo(logo.id, editedLogo); setShowEditModal(false); }}
                  disabled={!editedLogo.name || !editedLogo.logoUrl}
                  className="flex-1 px-4 py-2 bg-[#0099FF] hover:bg-[#0088ee] disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </motion.div>
  );
}

// ─── Container ────────────────────────────────────────────────────────────────

export function EditableClientLogos({ defaultLogos }: EditableClientLogosProps) {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const [logos, setLogos] = useState<ClientLogo[]>(() => {
    const stored = getContent('home.clientLogos', '');
    try { return stored ? JSON.parse(stored) : defaultLogos; }
    catch { return defaultLogos; }
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLogo, setNewLogo] = useState({ name: '', logoUrl: '', aspectRatio: 'auto 1 / 1' });

  const saveLogos = (newLogos: ClientLogo[]) => {
    setLogos(newLogos);
    updateContent('home.clientLogos', JSON.stringify(newLogos));
    persistContent();
  };

  const moveLogo = (dragIndex: number, hoverIndex: number) => {
    const draggedLogo = logos[dragIndex];
    const newLogos = [...logos];
    newLogos.splice(dragIndex, 1);
    newLogos.splice(hoverIndex, 0, draggedLogo);
    saveLogos(newLogos);
  };

  const deleteLogo = (id: string) => saveLogos(logos.filter(logo => logo.id !== id));

  const editLogo = (id: string, updatedLogo: Omit<ClientLogo, 'id'>) =>
    saveLogos(logos.map(logo => logo.id === id ? { ...logo, ...updatedLogo } : logo));

  const addLogo = () => {
    if (!newLogo.name || !newLogo.logoUrl) return;
    saveLogos([...logos, { id: `logo-${Date.now()}`, ...newLogo }]);
    setNewLogo({ name: '', logoUrl: '', aspectRatio: 'auto 1 / 1' });
    setShowAddModal(false);
  };

  return (
    <>
      {logos.map((logo, index) => (
        <EditableLogoCard
          key={logo.id}
          logo={logo}
          index={index}
          moveLogo={moveLogo}
          deleteLogo={deleteLogo}
          editLogo={editLogo}
        />
      ))}

      {isEditMode && (
        <div className="self-start justify-self-start relative w-full">
          <button
            onClick={() => setShowAddModal(true)}
            className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] hover:bg-[rgb(46,_46,_46)] gap-[8px] border-2 border-dashed border-[#0099FF]/50 hover:border-[#0099FF] transition-all group"
          >
            <div className="flex flex-col items-center gap-2">
              <Plus className="w-8 h-8 text-[#0099FF] group-hover:scale-110 transition-transform" />
              <span className="text-[#0099FF] text-sm font-medium">Add Logo</span>
            </div>
          </button>
        </div>
      )}

      {/* Empty state placeholder — keeps the grid row visible so users know logos go here */}
      {logos.length === 0 && !isEditMode && (
        <div className="col-span-4 flex items-center justify-center h-[120px] opacity-20">
          <span className="text-white text-sm">Client logos</span>
        </div>
      )}

      {showAddModal && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full border border-[#0099FF]/30 shadow-[0_0_30px_rgba(0,153,255,0.3)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Add Client Logo</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Client Name</label>
                <input
                  type="text"
                  value={newLogo.name}
                  onChange={(e) => setNewLogo({ ...newLogo, name: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="e.g., Acme Corp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Logo Image</label>
                <ImagePicker
                  value={newLogo.logoUrl}
                  onChange={(url) => setNewLogo({ ...newLogo, logoUrl: url })}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={addLogo}
                  disabled={!newLogo.name || !newLogo.logoUrl}
                  className="flex-1 px-4 py-2 bg-[#0099FF] hover:bg-[#0088ee] disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
                >
                  Add Logo
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
