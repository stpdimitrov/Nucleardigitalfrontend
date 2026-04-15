import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useCMSStore } from './cmsStore';
import { X, Upload, Link, ImageIcon } from 'lucide-react';
import { uploadImage } from '../../services/api';

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
  const { isEditMode, updateContent, setSaveStatus, adminToken, persistContent } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [urlValue, setUrlValue] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use direct selector so component re-renders when content[contentKey] changes
  const currentSrc = useCMSStore((s) => s.content[contentKey] ?? defaultSrc);
  const isVideo = currentSrc.match(/\.(mp4|webm|ogg)(\?|$)/i);

  const saveMediaSrc = async (newSrc: string) => {
    updateContent(contentKey, newSrc);
    setShowModal(false);
    setUrlValue('');
    setUploadError('');
    // Persist to backend immediately (don't rely on debounced sync)
    await persistContent();
  };

  const handleUrlSave = () => {
    if (urlValue.trim()) saveMediaSrc(urlValue.trim());
  };

  const handleFile = async (file: File) => {
    console.log('[CMS] EditableImage.handleFile called, contentKey:', contentKey, 'adminToken:', adminToken ? 'SET' : 'NULL');
    if (!adminToken) {
      setUploadError('Not logged in as admin.');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      setSaveStatus('saving');
      const url = await uploadImage(adminToken, file);
      await saveMediaSrc(url);
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please try again.');
      setSaveStatus('error');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const editStyle = isEditMode ? {
    transition: 'box-shadow 0.2s ease-out, outline 0.2s ease-out',
    outline: showModal ? '2px solid #0099FF' : 'none',
    outlineOffset: '2px',
    boxShadow: showModal
      ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
      : isHovered
        ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
        : 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } : {};

  return (
    <>
      <div
        className="contents"
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        {isVideo ? (
          <video
            src={currentSrc}
            className={className}
            style={{ ...style, ...editStyle }}
            onClick={isEditMode ? () => setShowModal(true) : undefined}
            autoPlay
            muted
            loop
            playsInline
            data-content-key={contentKey}
          />
        ) : (
          <img
            src={currentSrc}
            alt={alt}
            className={className}
            style={{ ...style, ...editStyle }}
            onClick={isEditMode ? () => setShowModal(true) : undefined}
            data-content-key={contentKey}
          />
        )}

        {/* Edit overlay badge — shown on hover */}
        {isEditMode && isHovered && !showModal && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <ImageIcon className="mr-1.5 inline-block size-3" />
              Click to change
            </div>
          </div>
        )}

        {/* Always-visible edit button in edit mode — ensures the image is reachable even when covered by content */}
        {isEditMode && !showModal && (
          <button
            onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
            className="absolute top-3 left-3 z-[100] flex items-center gap-1.5 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/90 transition-colors"
            title="Change background image"
          >
            <ImageIcon className="size-3" />
            Change Image
          </button>
        )}
      </div>

      {/* Modal — rendered via portal so CSS transforms on ancestors don't break fixed positioning */}
      {isEditMode && showModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h3 className="text-sm font-semibold text-white">Change Image / Video</h3>
              <button onClick={() => setShowModal(false)} className="text-white/40 transition-colors hover:text-white">
                <X className="size-4" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Tabs */}
              <div className="flex gap-2 rounded-lg bg-white/5 p-1">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === 'upload' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Upload className="size-3" /> Upload
                </button>
                <button
                  onClick={() => setActiveTab('url')}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === 'url' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Link className="size-3" /> URL
                </button>
              </div>

              {/* Upload Tab */}
              {activeTab === 'upload' && (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => !uploading && fileInputRef.current?.click()}
                  className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-4 py-10 text-center transition-colors cursor-pointer ${
                    isDragging
                      ? 'border-[#0099FF] bg-[#0099FF]/10'
                      : uploading
                        ? 'border-white/10 bg-white/5 cursor-wait'
                        : 'border-white/20 bg-white/5 hover:border-[#0099FF]/60 hover:bg-[#0099FF]/5'
                  }`}
                >
                  {uploading ? (
                    <>
                      <div className="size-8 animate-spin rounded-full border-2 border-white/20 border-t-[#0099FF]" />
                      <p className="text-sm text-white/60">Uploading...</p>
                    </>
                  ) : (
                    <>
                      <Upload className="size-8 text-white/30" />
                      <div>
                        <p className="text-sm font-medium text-white">Drop file here or click to browse</p>
                        <p className="mt-1 text-xs text-white/40">JPG, PNG, WebP, GIF, SVG up to 5MB · MP4, WebM up to 50MB</p>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* URL Tab */}
              {activeTab === 'url' && (
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-white/60">Image or video URL</label>
                  <input
                    type="text"
                    value={urlValue}
                    onChange={(e) => setUrlValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleUrlSave();
                      if (e.key === 'Escape') setShowModal(false);
                    }}
                    placeholder="https://..."
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
                    autoFocus
                  />
                </div>
              )}

              {/* Current preview */}
              {currentSrc && (
                <div className="space-y-1">
                  <p className="text-xs text-white/40">Current</p>
                  <div className="overflow-hidden rounded-lg bg-black/30 h-20 flex items-center justify-center">
                    {currentSrc.match(/\.(mp4|webm|ogg)(\?|$)/i) ? (
                      <video src={currentSrc} className="h-full w-full object-cover" muted />
                    ) : (
                      <img src={currentSrc} alt="current" className="h-full w-full object-contain" />
                    )}
                  </div>
                </div>
              )}

              {uploadError && (
                <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">{uploadError}</p>
              )}

              {/* Actions */}
              {activeTab === 'url' && (
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUrlSave}
                    disabled={!urlValue.trim()}
                    className="flex-1 rounded-lg bg-[#0099FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0088ee] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>,
        document.body
      )}

      {/* File input outside portal — stays mounted to avoid onChange race condition with modal unmount */}
      {isEditMode && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/mp4,video/webm,video/ogg"
          onChange={handleFileChange}
          className="hidden"
        />
      )}
    </>
  );
}
