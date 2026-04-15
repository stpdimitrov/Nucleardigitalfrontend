import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { useCMSStore } from './cmsStore';

interface EditableLinkProps {
  contentKey: string;
  defaultValue: string;
  className?: string;
  style?: React.CSSProperties;
  external?: boolean;
  children?: React.ReactNode;
  'data-name'?: string;
}

export function EditableLink({
  contentKey,
  defaultValue,
  children,
  className = '',
  style = {},
  external = false,
  dataName,
}: EditableLinkProps) {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const [currentHref, setCurrentHref] = useState(defaultValue);
  const [showEditor, setShowEditor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const editorRef = useRef<HTMLDivElement>(null);

  // Get current value
  useEffect(() => {
    const href = getContent(contentKey, defaultValue);
    setCurrentHref(href);
  }, [contentKey, defaultValue, getContent]);

  // Close editor on click outside
  useEffect(() => {
    if (!showEditor) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(e.target as Node)) {
        setShowEditor(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showEditor]);

  // Save changes
  const handleSave = async () => {
    try {
      setSaveStatus('saving');
      updateContent(contentKey, currentHref);
      await persistContent();
      setShowEditor(false);
    } catch (error) {
      console.error('Failed to save link:', error);
      setSaveStatus('error');
    }
  };

  // Handle click
  const handleClick = (e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      setShowEditor(true);
    }
  };

  // Render link content
  const linkContent = children;

  // Render the link
  const linkElement = external ? (
    <a
      href={currentHref}
      className={className}
      style={{
        ...style,
        ...(isEditMode && {
          outline: showEditor 
            ? '2px solid #0099FF' 
            : 'none',
          outlineOffset: '2px',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s ease-out, outline 0.2s ease-out',
          boxShadow: showEditor
            ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
            : isHovered
              ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
              : 'none',
          borderRadius: '4px',
        }),
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-content-key={contentKey}
      data-name={dataName}
    >
      {linkContent}
    </a>
  ) : (
    <Link
      to={currentHref}
      className={className}
      style={{
        ...style,
        ...(isEditMode && {
          outline: showEditor 
            ? '2px solid #0099FF' 
            : 'none',
          outlineOffset: '2px',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s ease-out, outline 0.2s ease-out',
          boxShadow: showEditor
            ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
            : isHovered
              ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
              : 'none',
          borderRadius: '4px',
        }),
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-content-key={contentKey}
      data-name={dataName}
    >
      {linkContent}
    </Link>
  );

  return (
    <>
      {linkElement}

      {/* Edit Modal */}
      {isEditMode && showEditor && (
        <div
          ref={editorRef}
          className="fixed left-1/2 top-1/2 z-[9999] w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="mb-4 text-sm font-medium text-white">Edit Link URL</h3>

          {/* Href input */}
          <div className="mb-4">
            <label className="mb-1 block text-xs text-gray-400">URL</label>
            <input
              type="text"
              value={currentHref}
              onChange={(e) => setCurrentHref(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') setShowEditor(false);
              }}
              className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="/path or https://..."
              autoFocus
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowEditor(false)}
              className="flex-1 rounded bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}