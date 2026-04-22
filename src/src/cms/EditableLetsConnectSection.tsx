import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Upload, ImageIcon, Trash2, X, Search } from 'lucide-react';
import { useCMSStore } from './cmsStore';
import { uploadMedia } from '../../services/api';
import { EditableText } from './EditableText';
import svgPaths from '../../imports/svg-caky0u7ahw';

interface EditableLetsConnectSectionProps {
  contentKey?: string;
}

export function EditableLetsConnectSection({ contentKey = 'letsConnectSection' }: EditableLetsConnectSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, adminToken, persistContent } = useCMSStore();
  const [showImageControls, setShowImageControls] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Default background image from the original homepage
  const defaultBackgroundImage = 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg?generation=1768843023470915&alt=media';
  
  // Get background image from CMS
  const storedBackgroundImage = getContent(`${contentKey}.backgroundImage`, defaultBackgroundImage);
  const backgroundImage = storedBackgroundImage || defaultBackgroundImage;
  const backgroundColor = getContent(`${contentKey}.backgroundColor`, '#000000');

  // Save background image
  const saveBackgroundImage = async (image: string) => {
    try {
      updateContent(`${contentKey}.backgroundImage`, image);
      await persistContent();
    } catch (error) {
      console.error('Failed to save background image:', error);
      setSaveStatus('error');
    }
  };

  // Save background color
  const saveBackgroundColor = async (color: string) => {
    try {
      updateContent(`${contentKey}.backgroundColor`, color);
      await persistContent();
    } catch (error) {
      console.error('Failed to save background color:', error);
      setSaveStatus('error');
    }
  };

  // Quick upload image
  const handleQuickUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!adminToken) {
      console.warn('[LetsConnect] No adminToken — cannot upload');
      return;
    }
    try {
      setSaveStatus('saving');
      const url = await uploadMedia(adminToken, file);
      await saveBackgroundImage(url);
    } catch (err: any) {
      console.error('Upload failed:', err);
      setSaveStatus('error');
    }
  };

  // Delete background image
  const handleDeleteImage = () => {
    if (confirm('Remove background image?')) {
      saveBackgroundImage('');
    }
  };

  return (
    <section 
      aria-label="Contact hero" 
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-[60px] md:pb-[100px] pl-0"
      style={{ 
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onMouseEnter={() => isEditMode && setShowImageControls(true)}
      onMouseLeave={() => isEditMode && setShowImageControls(false)}
    >
      {/* Background Image Overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      {/* Background Edit Controls Overlay */}
      {isEditMode && showImageControls && (
        <div className="absolute top-4 right-4 z-50 flex gap-2 pointer-events-auto">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleQuickUpload}
            className="hidden"
            accept="image/*"
          />
          
          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-[#0099FF] text-white rounded-lg shadow-lg hover:bg-[#0088EE] transition-all text-sm font-medium"
            title="Upload Background Image"
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>

          {/* Change Button */}
          <button
            onClick={() => setShowImageModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#0099FF] text-white rounded-lg shadow-lg hover:bg-[#0088EE] transition-all text-sm font-medium"
            title="Change Background"
          >
            <ImageIcon className="w-4 h-4" />
            Change
          </button>

          {/* Delete Button */}
          {backgroundImage && (
            <button
              onClick={handleDeleteImage}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all text-sm font-medium"
              title="Remove Background Image"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          )}
        </div>
      )}

      <div aria-label="Container" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 w-full max-w-[1240px] px-6 z-10">

        {/* Left: tag + heading + description */}
        <div className="flex flex-col gap-3 md:gap-2">
          {/* Section Tag */}
          <EditableText
            contentKey={`${contentKey}.tag`}
            defaultValue='<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif"><p class="leading-[22.4px]">contact us</p></div>'
            as="div"
            className=""
          />
          {/* Heading */}
          <div className="about-heading">
            <EditableText
              contentKey={`${contentKey}.heading`}
              defaultValue={"<div class=\"flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57px] text-white tracking-[-1.8px] w-full\" style=\"font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif\"><p class=\"leading-[63px] whitespace-pre-wrap\">Let's Connect</p></div>"}
              as="div"
              className=""
            />
          </div>
          {/* Description */}
          <div className="opacity-60">
            <EditableText
              contentKey={`${contentKey}.description`}
              defaultValue={"<div class=\"flex flex-col font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full whitespace-pre-wrap\" style=\"font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif\"><p class=\"mb-0\">Connect with our team for collaborations, </p><p>inquiries, and creative opportunities.</p></div>"}
              as="div"
              className=""
            />
          </div>
        </div>

        {/* Right: Scroll down (desktop only) */}
        <div className="hidden md:flex items-center gap-[4px] shrink-0">
          <EditableText
            contentKey={`${contentKey}.scrollText`}
            defaultValue='<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif"><p class="leading-[22.4px]">Scroll down</p></div>'
            as="div"
            className=""
          />
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g>
                <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Background Management Modal */}
      {showImageModal && createPortal(
        <BackgroundImageModal
          currentImage={backgroundImage}
          currentColor={backgroundColor}
          onClose={() => setShowImageModal(false)}
          onSaveImage={saveBackgroundImage}
          onSaveColor={saveBackgroundColor}
        />,
        document.body
      )}
    </section>
  );
}

// Background Image Management Modal
interface BackgroundImageModalProps {
  currentImage: string;
  currentColor: string;
  onClose: () => void;
  onSaveImage: (image: string) => void;
  onSaveColor: (color: string) => void;
}

function BackgroundImageModal({
  currentImage,
  currentColor,
  onClose,
  onSaveImage,
  onSaveColor
}: BackgroundImageModalProps) {
  const { adminToken } = useCMSStore();
  const [imageSource, setImageSource] = useState<'url' | 'upload' | 'search' | 'color'>('url');
  const [imageUrl, setImageUrl] = useState(currentImage);
  const [backgroundColor, setBackgroundColor] = useState(currentColor);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Search images using Unsplash
  const handleImageSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      // Mock Unsplash search results
      const mockResults = [
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},1`,
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},2`,
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},3`,
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},4`,
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},5`,
        `https://source.unsplash.com/1600x900/?${encodeURIComponent(searchQuery)},6`,
      ];
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Image search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!adminToken) {
      setUploadError('Not logged in as admin.');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      const url = await uploadMedia(adminToken, file);
      onSaveImage(url);
      onClose();
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-4xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="text-lg font-medium text-white">Background Settings</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          <button
            onClick={() => setImageSource('url')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              imageSource === 'url' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Image URL
          </button>
          <button
            onClick={() => setImageSource('upload')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              imageSource === 'upload' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Upload Image
          </button>
          <button
            onClick={() => setImageSource('search')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              imageSource === 'search' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Search Images
          </button>
          <button
            onClick={() => setImageSource('color')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              imageSource === 'color' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Solid Color
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* URL Tab */}
          {imageSource === 'url' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Background Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {imageUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Preview</label>
                  <div className="w-full h-48 rounded overflow-hidden">
                    <img src={imageUrl} alt="Background preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Upload Tab */}
          {imageSource === 'upload' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Upload Background Image</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[#0099FF] file:text-white hover:file:bg-[#0088EE] file:cursor-pointer disabled:opacity-50"
                  accept="image/*"
                  disabled={uploading}
                />
                {uploading && <p className="mt-2 text-xs text-blue-400">Uploading...</p>}
                {uploadError && <p className="mt-2 text-xs text-red-400">{uploadError}</p>}
                {!uploading && !uploadError && <p className="mt-2 text-xs text-gray-400">Recommended: 1920x1080px or larger for best quality</p>}
              </div>
            </div>
          )}

          {/* Search Tab */}
          {imageSource === 'search' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Search Stock Images</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleImageSearch()}
                    className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    placeholder="e.g., office, nature, abstract..."
                  />
                  <button
                    onClick={handleImageSearch}
                    disabled={isSearching}
                    className="px-6 py-2 bg-[#0099FF] text-white rounded font-medium text-sm hover:bg-[#0088EE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </div>
              {searchResults.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Results (Click to select)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {searchResults.map((result, index) => (
                      <div 
                        key={index} 
                        className="relative group cursor-pointer rounded overflow-hidden aspect-video"
                        onClick={() => {
                          onSaveImage(result);
                          onClose();
                        }}
                      >
                        <img
                          src={result}
                          alt={`Search result ${index + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0099FF] text-white px-4 py-2 rounded text-sm font-medium">
                            Select
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Color Tab */}
          {imageSource === 'color' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Background Color</label>
                <div className="flex gap-3">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="h-12 w-20 rounded border border-white/20 bg-white/5 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    placeholder="#000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preview</label>
                <div className="w-full h-32 rounded border border-white/20" style={{ backgroundColor }} />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <p className="col-span-6 text-xs text-gray-400 mb-1">Quick Colors:</p>
                {['#000000', '#1a1a1a', '#2d2d2d', '#0f172a', '#1e293b', '#334155', '#1e40af', '#7c3aed', '#be185d', '#dc2626', '#ea580c', '#059669'].map(color => (
                  <button
                    key={color}
                    onClick={() => setBackgroundColor(color)}
                    className="h-10 rounded border-2 border-white/20 hover:border-[#0099FF] transition-colors"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded">
            <p className="text-blue-300 text-sm">
              💡 <strong>Tip:</strong> Use high-resolution images (1920x1080 or larger) for best quality. A semi-transparent overlay is automatically applied for text readability.
            </p>
          </div>
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
            onClick={() => {
              if (imageSource === 'color') {
                onSaveColor(backgroundColor);
                onSaveImage(''); // Clear image when using solid color
              } else {
                onSaveImage(imageUrl);
              }
              onClose();
            }}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
}