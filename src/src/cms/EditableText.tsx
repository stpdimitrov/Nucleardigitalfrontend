import { useRef, useEffect, useState, KeyboardEvent } from 'react';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';

interface EditableTextProps {
  contentKey: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
  placeholder?: string;
  children?: never; // Prevent children - content comes from store
}

export function EditableText({
  contentKey,
  defaultValue,
  as = 'div',
  className = '',
  style = {},
  multiline = false,
  placeholder = '',
}: EditableTextProps) {
  const { isEditMode, getContent, updateContent } = useCMSStore();
  const content = getContent(contentKey, defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const elementRef = useRef<HTMLElement>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastExternalContent = useRef(content);
  const Tag = as;

  // Set content on mount
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.innerHTML = content;
    }
    lastExternalContent.current = content;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync external content changes only when not actively editing
  useEffect(() => {
    if (content !== lastExternalContent.current) {
      lastExternalContent.current = content;
      if (elementRef.current && !isEditing) {
        elementRef.current.innerHTML = content;
      }
    }
  }, [content, isEditing]);


  // Auto-save with debounce
  const saveContent = async (value: string) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        setSaveStatus('saving');
        updateContent(contentKey, value);
        await contentAPI.saveContent({ [contentKey]: value });
        setSaveStatus('saved');
        
        // Clear "saved" status after 2s
        setTimeout(() => {
          setSaveStatus('idle');
        }, 2000);
      } catch (error) {
        console.error('Failed to save content:', error);
        setSaveStatus('error');
      }
    }, 600);
  };

  // Handle content changes — do NOT call setState here to avoid re-render that resets cursor
  const handleInput = () => {
    if (!elementRef.current) return;
    const newValue = elementRef.current.innerHTML || '';
    saveContent(newValue);
  };

  // Handle key presses
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!isEditMode) return;

    // Enter without Shift on single-line: blur (save and exit)
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault();
      elementRef.current?.blur();
    }

    // Escape: revert changes
    if (e.key === 'Escape') {
      e.preventDefault();
      if (elementRef.current) {
        elementRef.current.innerHTML = content;
      }
      elementRef.current?.blur();
    }
  };

  // Handle focus
  const handleFocus = () => {
    setIsEditing(true);
  };

  // Handle blur
  const handleBlur = () => {
    setIsEditing(false);
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Render the element
  return (
    <Tag
      ref={elementRef as any}
      className={className}
      style={{
        ...style,
        ...(isEditMode && {
          outline: isEditing 
            ? '2px solid #0099FF' 
            : 'none',
          outlineOffset: '2px',
          cursor: 'text',
          transition: 'box-shadow 0.2s ease-out, outline 0.2s ease-out',
          boxShadow: isEditing 
            ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
            : isHovered 
              ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
              : 'none',
          borderRadius: '4px',
        }),
      }}
      contentEditable={isEditMode}
      suppressContentEditableWarning
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={isEditMode ? handleMouseEnter : undefined}
      onMouseLeave={isEditMode ? handleMouseLeave : undefined}
      data-content-key={contentKey}
      data-placeholder={placeholder}
    />
  );
}