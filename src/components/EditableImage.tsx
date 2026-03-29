import { useState } from 'react';
import { useEditMode } from '../contexts/EditModeContext';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  onChange?: (src: string) => void;
}

export function EditableImage({ id, src, alt, className = '', onChange }: EditableImageProps) {
  const { isEditMode, editedContent, updateContent } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [newSrc, setNewSrc] = useState(src);

  // Use edited content if available, otherwise use original src
  const displaySrc = editedContent[id] ?? src;

  const handleClick = (e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      setIsEditing(true);
      setNewSrc(displaySrc);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (newSrc !== displaySrc && newSrc.trim()) {
      updateContent(id, newSrc);
      onChange?.(newSrc);
    }
  };

  const handleCancel = () => {
    setNewSrc(displaySrc);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="relative group">
        <img src={displaySrc} alt={alt} className={`${className} opacity-20`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/90 p-6 backdrop-blur-sm">
          {/* Icon */}
          <div className="rounded-full bg-blue-500/20 p-3">
            <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Input */}
          <div className="w-full max-w-md">
            <label className="mb-2 block text-sm font-medium text-white">Image URL</label>
            <input
              type="text"
              value={newSrc}
              onChange={(e) => setNewSrc(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border-2 border-blue-500 bg-black/50 px-4 py-2.5 text-sm text-white outline-none ring-4 ring-blue-500/10 transition-all placeholder:text-white/40"
              autoFocus
            />
          </div>
          
          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 active:scale-95"
            >
              Save Image
            </button>
            <button
              onClick={handleCancel}
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95"
            >
              Cancel
            </button>
          </div>
          
          {/* Hint */}
          <p className="text-xs text-white/60">Press Enter to save, Escape to cancel</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={displaySrc}
        alt={alt}
        className={`${className} ${isEditMode ? 'cursor-pointer transition-all' : ''} ${
          isHovered && isEditMode ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-black' : ''
        }`}
        onClick={handleClick}
      />
      
      {/* Hover overlay - Framer style */}
      {isEditMode && (
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 ${
            isHovered ? 'bg-black/60 opacity-100 backdrop-blur-sm' : ''
          }`}
          onClick={handleClick}
        >
          <button
            className={`flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-blue-600 active:scale-95 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="5.5" cy="5.5" r="1" fill="currentColor" />
              <path d="M14 10l-3.5-3.5L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Change Image
          </button>
        </div>
      )}
      
      {/* Top label when hovering */}
      {isHovered && isEditMode && (
        <div className="pointer-events-none absolute -top-9 left-0 flex items-center gap-1.5 rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-lg opacity-0 animate-[fadeIn_0.15s_ease-out_forwards]">
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <rect x="1.5" y="1.5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1" />
            <circle cx="4" cy="4" r="0.75" fill="currentColor" />
            <path d="M10.5 7.5l-2.5-2.5L1.5 10.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Click to edit
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
