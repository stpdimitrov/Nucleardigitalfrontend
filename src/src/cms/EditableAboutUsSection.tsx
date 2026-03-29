import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Image } from 'lucide-react';
import { scrollFadeIn, viewport } from '../../lib/animations';
import { useCMSStore } from './cmsStore';
import { EditableImage } from './EditableImage';
import { EditableText } from './EditableText';
import { EditableOverlay } from './EditableOverlay';

interface EditableAboutUsSectionProps {
  contentKey?: string;
  defaultBackgroundImage?: string;
  defaultBackgroundAlt?: string;
  defaultHeading?: string;
  defaultButtonText?: string;
  defaultButtonHref?: string;
  defaultOverlayOpacity?: number;
  defaultOverlayColor?: string;
  showLogo?: boolean;
}

export function EditableAboutUsSection({
  contentKey = 'aboutUsSection',
  defaultBackgroundImage = 'https://framerusercontent.com/images/HEAOCxviii67uzFqzwzTJpBfTw.jpg',
  defaultBackgroundAlt = 'Background',
  defaultHeading = 'The creative agency for studios & production companies.',
  defaultButtonText = 'More about us',
  defaultButtonHref = '/about-us',
  defaultOverlayOpacity = 30,
  defaultOverlayColor = '#000000',
  showLogo = true
}: EditableAboutUsSectionProps) {
  const { isEditMode, getContent } = useCMSStore();
  const [showImageEditor, setShowImageEditor] = React.useState(false);
  const [isImageHovered, setIsImageHovered] = React.useState(false);

  // Get current values from CMS
  const backgroundImage = getContent(`${contentKey}.backgroundImage`, defaultBackgroundImage);
  const backgroundAlt = getContent(`${contentKey}.backgroundAlt`, defaultBackgroundAlt);
  const buttonHref = getContent(`${contentKey}.buttonHref`, defaultButtonHref);

  return (
    <motion.section
      aria-label="About us"
      className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
      onMouseEnter={isEditMode ? () => setIsImageHovered(true) : undefined}
      onMouseLeave={isEditMode ? () => setIsImageHovered(false) : undefined}
    >
      {/* Background Image */}
      <div className="absolute left-0 top-0 right-0 bottom-0 pointer-events-none">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]"
          style={{
            ...(isEditMode && isImageHovered && {
              outline: '2px solid rgba(0, 153, 255, 0.5)',
              outlineOffset: '-2px',
            }),
          }}
        />
      </div>

      {/* Background Image Edit Button */}
      {isEditMode && isImageHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowImageEditor(true);
          }}
          className="absolute top-4 left-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all hover:scale-110"
          style={{
            boxShadow: '0 0 0 3px rgba(0, 153, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
          title="Edit Background Image"
        >
          <Image className="h-5 w-5" />
        </button>
      )}

      {/* Image Editor Modal */}
      {isEditMode && showImageEditor && (
        <EditableImageModal
          contentKey={`${contentKey}.backgroundImage`}
          currentSrc={backgroundImage}
          onClose={() => setShowImageEditor(false)}
        />
      )}

      {/* Overlay with editable opacity and color */}
      <EditableOverlay
        contentKey={contentKey}
        defaultOpacity={defaultOverlayOpacity}
        defaultColor={defaultOverlayColor}
        className="size-full overflow-clip left-[0%] top-[0%] z-[1] shrink-[0]"
      >
        <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] z-[1] shrink-[0]">
            {showLogo && (
              <div aria-label="Logo" className="relative shrink-[0]">
                <Link to="/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                  </div>
                </Link>
              </div>
            )}

            {/* Editable Heading */}
            <div className="flex flex-col justify-start relative w-full shrink-[0]">
              <EditableText
                contentKey={`${contentKey}.heading`}
                defaultValue={`<h2 class="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${defaultHeading}</h2>`}
                as="div"
                className=""
              />
            </div>

            {/* Button with Editable Text */}
            <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-2 pr-0 pb-0 pl-0 shrink-[0]">
              <div aria-label="Button" className="relative shrink-[0]">
                <Link to={buttonHref} aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <EditableText
                      contentKey={`${contentKey}.buttonText`}
                      defaultValue={`<p class="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${defaultButtonText}</p>`}
                      as="div"
                      className=""
                    />
                  </div>
                  <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                    <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                      <div aria-label="Icon" className="aspect-square relative w-[15px] z-[1] shrink-[0] flex items-center justify-center">
                        <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                      </div>
                      <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </EditableOverlay>
    </motion.section>
  );
}

// Standalone Image Editor Modal Component
interface EditableImageModalProps {
  contentKey: string;
  currentSrc: string;
  onClose: () => void;
}

function EditableImageModal({ contentKey, currentSrc, onClose }: EditableImageModalProps) {
  const { updateContent, setSaveStatus } = useCMSStore();
  const [activeTab, setActiveTab] = React.useState<'url' | 'upload'>('url');
  const [urlValue, setUrlValue] = React.useState(currentSrc);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Save new image URL
  const saveImageSrc = async (newSrc: string) => {
    try {
      setSaveStatus('saving');
      updateContent(contentKey, newSrc);
      await import('./contentApi').then(({ contentAPI }) =>
        contentAPI.saveContent({ [contentKey]: newSrc })
      );
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
      onClose();
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      saveImageSrc(base64);
      onClose();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h3 className="font-['Inter:Medium',sans-serif] text-sm font-medium text-white">
            Background Image
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <ArrowRight className="size-4 rotate-45" />
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
                    ? 'bg-[#0099FF] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                URL
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'upload'
                    ? 'bg-[#0099FF] text-white'
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
                  if (e.key === 'Escape') onClose();
                }}
                placeholder="Enter image URL..."
                className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 font-['Inter:Medium',sans-serif] text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#0099FF]"
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
                className="w-full rounded border border-dashed border-white/20 bg-white/5 px-4 py-8 font-['Inter:Medium',sans-serif] text-sm text-gray-400 transition-colors hover:border-[#0099FF] hover:bg-white/10 hover:text-white"
              >
                Click to upload image
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={onClose}
              className="flex-1 rounded bg-white/10 px-4 py-2 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              onClick={handleUrlSave}
              disabled={activeTab === 'url' && !urlValue.trim()}
              className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-colors hover:bg-[#0088EE] disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}