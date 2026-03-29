import { useState, useRef } from 'react';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';
import { X } from 'lucide-react';

// Editable Image Component with Framer-style glow effect
interface EditableImageProps {
  contentKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  children?: never;
}

export function EditableImage({
  contentKey,
  defaultSrc,
  alt,
  className = '',
  style,
}: EditableImageProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'url' | 'upload'>('url');
  const [urlValue, setUrlValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get current image src
  const currentSrc = getContent(contentKey, defaultSrc);

  // Save new image URL
  const saveImageSrc = async (newSrc: string) => {
    try {
      setSaveStatus('saving');
      updateContent(contentKey, newSrc);
      await contentAPI.saveContent({ [contentKey]: newSrc });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to save image:', error);
      setSaveStatus('error');
    }
  };

  // Handle URL save
  const handleUrlSave = () => {
    if (urlValue.trim()) {
      saveImageSrc(urlValue.trim());
      setShowModal(false);
      setUrlValue('');
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert to base64 for demo (in production, upload to cloud storage)
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      saveImageSrc(base64);
      setShowModal(false);
    };
    reader.readAsDataURL(file);
  };

  // Open modal
  const handleImageClick = () => {
    if (isEditMode) {
      setUrlValue(currentSrc);
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Image with hover wrapper */}
      <div
        className="contents"
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          style={{
            ...style,
            ...(isEditMode && {
              transition: 'box-shadow 0.2s ease-out, outline 0.2s ease-out',
              outline: showModal
                ? '2px solid #0099FF'
                : 'none',
              outlineOffset: '2px',
              boxShadow: showModal
                ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
                : isHovered
                  ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
                  : 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }),
          }}
          onClick={isEditMode ? handleImageClick : undefined}
          data-content-key={contentKey}
        />
      </div>

      {/* Modal */}
      {isEditMode && showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h3 className="font-['Inter:Medium',sans-serif] text-sm font-medium text-white">Image</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Source Section */}
              <div className="space-y-2">
                <label className="block font-['Inter:Medium',sans-serif] text-xs font-medium text-gray-400">
                  Source
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('url')}
                    className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeTab === 'url'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    URL
                  </button>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeTab === 'upload'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* URL Tab */}
              {activeTab === 'url' && (
                <div className="space-y-2">
                  <label className="block font-['Inter:Medium',sans-serif] text-xs font-medium text-gray-400">
                    URL
                  </label>
                  <input
                    type="text"
                    value={urlValue}
                    onChange={(e) => setUrlValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleUrlSave();
                      if (e.key === 'Escape') setShowModal(false);
                    }}
                    placeholder="Enter image URL..."
                    className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 font-['Inter:Medium',sans-serif] text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    autoFocus
                  />
                </div>
              )}

              {/* Upload Tab */}
              {activeTab === 'upload' && (
                <div className="space-y-2">
                  <label className="block font-['Inter:Medium',sans-serif] text-xs font-medium text-gray-400">
                    Image
                  </label>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full rounded border border-dashed border-white/20 bg-white/5 px-4 py-8 font-['Inter:Medium',sans-serif] text-sm text-gray-400 transition-colors hover:border-blue-500 hover:bg-white/10 hover:text-white"
                  >
                    Click to upload image
                  </button>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded bg-white/10 px-4 py-2 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUrlSave}
                  disabled={activeTab === 'url' && !urlValue.trim()}
                  className="flex-1 rounded bg-blue-500 px-4 py-2 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}
    </>
  );
}