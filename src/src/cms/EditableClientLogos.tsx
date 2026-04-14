import React, { useState } from 'react';
import { useCMSStore } from './cmsStore';
import { motion } from 'motion/react';
import { useDrag, useDrop } from 'react-dnd';
import { Trash2, Plus, X, Edit2 } from 'lucide-react';
import { staggerItem } from '../../lib/animations';
import ReactDOM from 'react-dom';

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  aspectRatio: string;
}

interface EditableClientLogosProps {
  defaultLogos: ClientLogo[];
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

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
    aspectRatio: logo.aspectRatio.replace(/_/g, ' ')
  });
  const ref = React.useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'CLIENT_LOGO',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveLogo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CLIENT_LOGO',
    item: () => {
      return { id: logo.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  if (isEditMode) {
    drag(drop(ref));
  }

  return (
    <motion.div
      ref={ref}
      aria-label="Client logo"
      className="self-start justify-self-start relative w-full group"
      variants={staggerItem}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
        <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
          <div className="absolute left-0 top-0 right-0 bottom-0">
            <img 
              src={logo.logoUrl} 
              className="block size-full object-contain overflow-clip" 
              style={{ aspectRatio: logo.aspectRatio.replace(/_/g, ' ') }} 
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
                onClick={() => {
                  deleteLogo(logo.id);
                  setShowDeleteConfirm(false);
                }}
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
              <button
                onClick={() => setShowEditModal(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
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
                <label className="block text-sm font-medium text-white mb-1">Logo URL</label>
                <input
                  type="text"
                  value={editedLogo.logoUrl}
                  onChange={(e) => setEditedLogo({ ...editedLogo, logoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Aspect Ratio</label>
                <input
                  type="text"
                  value={editedLogo.aspectRatio}
                  onChange={(e) => setEditedLogo({ ...editedLogo, aspectRatio: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="e.g., auto 1 / 1 or auto 16 / 9"
                />
              </div>

              {editedLogo.logoUrl && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <p className="text-sm text-white/70 mb-2">Preview:</p>
                  <div className="flex items-center justify-center h-[80px] bg-[rgb(36,_36,_36)]">
                    <img 
                      src={editedLogo.logoUrl} 
                      alt="Preview" 
                      className="max-h-full max-w-[120px] object-contain"
                      style={{ aspectRatio: editedLogo.aspectRatio }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    editLogo(logo.id, editedLogo);
                    setShowEditModal(false);
                  }}
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

export function EditableClientLogos({ defaultLogos }: EditableClientLogosProps) {
  const { isEditMode, getContent, updateContent } = useCMSStore();
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
  };

  const moveLogo = (dragIndex: number, hoverIndex: number) => {
    const draggedLogo = logos[dragIndex];
    const newLogos = [...logos];
    newLogos.splice(dragIndex, 1);
    newLogos.splice(hoverIndex, 0, draggedLogo);
    saveLogos(newLogos);
  };

  const deleteLogo = (id: string) => {
    saveLogos(logos.filter(logo => logo.id !== id));
  };

  const editLogo = (id: string, updatedLogo: Omit<ClientLogo, 'id'>) => {
    saveLogos(logos.map(logo => logo.id === id ? { ...logo, ...updatedLogo } : logo));
  };

  const addLogo = () => {
    if (!newLogo.name || !newLogo.logoUrl) return;
    const logo: ClientLogo = { id: `logo-${Date.now()}`, ...newLogo };
    saveLogos([...logos, logo]);
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
      
      {/* Always render button but hide with CSS when not in edit mode */}
      <motion.div
        className="self-start justify-self-start relative w-full"
        variants={staggerItem}
        style={{ display: isEditMode ? 'block' : 'none' }}
      >
        <button
          onClick={() => setShowAddModal(true)}
          className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] hover:bg-[rgb(46,_46,_46)] gap-[8px] border-2 border-dashed border-[#0099FF]/50 hover:border-[#0099FF] transition-all group"
        >
          <div className="flex flex-col items-center gap-2">
            <Plus className="w-8 h-8 text-[#0099FF] group-hover:scale-110 transition-transform" />
            <span className="text-[#0099FF] text-sm font-medium">Add Logo</span>
          </div>
        </button>
      </motion.div>
      
      {showAddModal && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full border border-[#0099FF]/30 shadow-[0_0_30px_rgba(0,153,255,0.3)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Add Client Logo</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
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
                <label className="block text-sm font-medium text-white mb-1">Logo URL</label>
                <input
                  type="text"
                  value={newLogo.logoUrl}
                  onChange={(e) => setNewLogo({ ...newLogo, logoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Aspect Ratio</label>
                <input
                  type="text"
                  value={newLogo.aspectRatio}
                  onChange={(e) => setNewLogo({ ...newLogo, aspectRatio: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                  placeholder="e.g., auto 1 / 1 or auto 16 / 9"
                />
              </div>

              {newLogo.logoUrl && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <p className="text-sm text-white/70 mb-2">Preview:</p>
                  <div className="flex items-center justify-center h-[80px] bg-[rgb(36,_36,_36)]">
                    <img 
                      src={newLogo.logoUrl} 
                      alt="Preview" 
                      className="max-h-full max-w-[120px] object-contain"
                      style={{ aspectRatio: newLogo.aspectRatio }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
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