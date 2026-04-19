// Shared site logo component — used in navbar, footer, and inline sections.
// All instances share the same CMS keys for image, name, and size.

import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useCMSStore } from './cmsStore';
import { EditableText } from './EditableText';
import { uploadMedia } from '../../services/api';
import { Upload, Link, X, ImageIcon } from 'lucide-react';

interface SiteLogoProps {
  /** CMS key for height. Defaults to 'site.logoHeightNavbar' */
  heightKey?: string;
  defaultHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  /** Wrap in an anchor? Pass href to enable. */
  href?: string;
  defaultLogoUrl?: string;
  defaultSiteName?: string;
}

export function SiteLogo({
  heightKey = 'site.logoHeightNavbar',
  defaultHeight = 36,
  minHeight = 16,
  maxHeight = 100,
  href = '/',
  defaultLogoUrl = 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&height=42?generation=1768843022438331&alt=media',
  defaultSiteName = 'Nuclear Digital',
}: SiteLogoProps) {
  const { isEditMode, getContent, updateContent, persistContent, adminToken, setSaveStatus } = useCMSStore();
  const logoUrl = getContent('site.logoUrl', defaultLogoUrl);
  const logoHeight = parseInt(getContent(heightKey, String(defaultHeight)), 10);
  const fontSize = Math.round(logoHeight * 0.4);

  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState('');
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
      updateContent('site.logoUrl', url);
      persistContent();
      setSaveStatus('idle');
      setShowModal(false);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed.');
      setSaveStatus('error');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSave = () => {
    if (!urlInput.trim()) return;
    updateContent('site.logoUrl', urlInput.trim());
    persistContent();
    setShowModal(false);
    setUrlInput('');
  };

  const logoMark = (
    <div className="flex items-center gap-[4px]">
      <div className="relative shrink-0" style={{ width: logoHeight, height: logoHeight }}>
        <div className="absolute inset-0">
          <img src={logoUrl} className="w-full h-full object-contain" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
        <EditableText
          contentKey="navbar.siteName"
          defaultValue={defaultSiteName}
          as="p"
          className="font-medium uppercase text-white tracking-[-0.72px]"
          style={{
            fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif',
            fontSize,
            lineHeight: `${fontSize}px`,
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-2 shrink-0">
      {href ? (
        <a href={href} aria-label="Logo" className="flex items-center">
          {logoMark}
        </a>
      ) : (
        logoMark
      )}

      {isEditMode && (
        <div className="flex items-center gap-1.5 rounded-lg bg-black/80 border border-white/10 px-2 py-1 backdrop-blur-sm whitespace-nowrap shrink-0">
          {/* Image change button */}
          <button
            onClick={() => setShowModal(true)}
            style={{ padding: '3px 6px', background: 'rgba(0,153,255,0.9)', border: 'none', borderRadius: 5, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', gap: 3 }}
            title="Change logo image"
          >
            <ImageIcon style={{ width: 11, height: 11 }} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>Image</span>
          </button>

          <span className="text-[10px] text-white/40 uppercase tracking-wide">Size</span>
          <input
            type="range"
            min={minHeight}
            max={maxHeight}
            value={logoHeight}
            onChange={(e) => updateContent(heightKey, e.target.value)}
            onMouseUp={() => persistContent()}
            onTouchEnd={() => persistContent()}
            className="w-16 accent-[#0099FF]"
          />
          <span className="text-[10px] text-white w-6 text-right">{logoHeight}</span>
        </div>
      )}

      {showModal && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full border border-[#0099FF]/30 shadow-[0_0_30px_rgba(0,153,255,0.3)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Change Site Logo</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Current logo preview */}
            <div className="mb-4 flex items-center justify-center h-16 rounded-lg bg-[#242424]">
              <img src={logoUrl} alt="current logo" className="max-h-full max-w-[120px] object-contain" />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 rounded-lg bg-white/5 p-1 mb-4">
              <button
                type="button"
                onClick={() => setTab('upload')}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${tab === 'upload' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'}`}
              >
                <Upload className="size-3" /> Upload
              </button>
              <button
                type="button"
                onClick={() => setTab('url')}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${tab === 'url' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'}`}
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
                    <p className="text-xs text-white/40">SVG, PNG, WebP up to 5 MB</p>
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
                  onKeyDown={(e) => { if (e.key === 'Enter') handleUrlSave(); }}
                  placeholder="https://..."
                  className="flex-1 px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0099FF]/50"
                />
                <button
                  type="button"
                  onClick={handleUrlSave}
                  disabled={!urlInput.trim()}
                  className="px-3 py-2 bg-[#0099FF] hover:bg-[#0088ee] disabled:opacity-40 text-white rounded-lg text-sm transition-colors"
                >
                  Set
                </button>
              </div>
            )}

            {uploadError && (
              <p className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">{uploadError}</p>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
              className="hidden"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
