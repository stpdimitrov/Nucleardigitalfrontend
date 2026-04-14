import { useRef, useState } from 'react';
import { Upload, Link } from 'lucide-react';
import { useCMSStore } from './cmsStore';
import { uploadImage } from '../../services/api';

interface ImageUploadFieldProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  /** Set to true to also accept video files */
  acceptVideo?: boolean;
}

export function ImageUploadField({ value, onChange, label = 'Image', acceptVideo = false }: ImageUploadFieldProps) {
  const { adminToken } = useCMSStore();
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [urlValue, setUrlValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?|$)/i.test(src);

  const handleFile = async (file: File) => {
    if (!adminToken) {
      setError('Not logged in as admin.');
      return;
    }
    setUploading(true);
    setError('');
    try {
      const url = await uploadImage(adminToken, file);
      onChange(url);
      setUrlValue(url);
    } catch (err: any) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const accept = acceptVideo
    ? 'image/*,video/mp4,video/webm,video/ogg'
    : 'image/*';

  return (
    <div className="space-y-3">
      {label && <label className="block text-sm font-medium text-white/60">{label}</label>}

      {/* Tabs */}
      <div className="flex gap-2 rounded-lg bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setActiveTab('upload')}
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === 'upload' ? 'bg-[#0099FF] text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          <Upload className="size-3" /> Upload
        </button>
        <button
          type="button"
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
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onClick={() => !uploading && fileInputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors cursor-pointer ${
            isDragging
              ? 'border-[#0099FF] bg-[#0099FF]/10'
              : uploading
                ? 'border-white/10 bg-white/5 cursor-wait'
                : 'border-white/20 bg-white/5 hover:border-[#0099FF]/60 hover:bg-[#0099FF]/5'
          }`}
        >
          {uploading ? (
            <>
              <div className="size-6 animate-spin rounded-full border-2 border-white/20 border-t-[#0099FF]" />
              <p className="text-xs text-white/60">Uploading...</p>
            </>
          ) : (
            <>
              <Upload className="size-6 text-white/30" />
              <p className="text-xs font-medium text-white">Drop file or click to browse</p>
              <p className="text-xs text-white/40">
                JPG, PNG, WebP, GIF, SVG up to 5MB{acceptVideo ? ' · MP4, WebM up to 50MB' : ''}
              </p>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            className="hidden"
          />
        </div>
      )}

      {/* URL Tab */}
      {activeTab === 'url' && (
        <div className="flex gap-2">
          <input
            type="text"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onChange(urlValue.trim()); } }}
            placeholder="https://..."
            className="flex-1 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#0099FF]/60"
          />
          <button
            type="button"
            onClick={() => onChange(urlValue.trim())}
            disabled={!urlValue.trim()}
            className="rounded-lg bg-[#0099FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0088ee] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Set
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">{error}</p>
      )}

      {/* Preview */}
      {value && (
        <div className="overflow-hidden rounded-lg bg-black/30 h-24 flex items-center justify-center">
          {isVideo(value) ? (
            <video src={value} className="h-full w-full object-cover" muted />
          ) : (
            <img src={value} alt="preview" className="h-full w-full object-contain" />
          )}
        </div>
      )}
    </div>
  );
}
