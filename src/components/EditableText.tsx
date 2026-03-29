import { useState, useRef, useEffect } from 'react';
import { useEditMode } from '../contexts/EditModeContext';

interface EditableTextProps {
  id: string;
  value: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function EditableText({
  id,
  value,
  as: Tag = 'p',
  className = '',
  multiline = false,
  placeholder,
  onChange,
}: EditableTextProps) {
  const { isEditMode, editedContent, updateContent } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use edited content if available, otherwise use original value
  const displayValue = editedContent[id] ?? value;

  useEffect(() => {
    setLocalValue(displayValue);
  }, [displayValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
      
      // Auto-resize textarea
      if (multiline && inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
      }
    }
  }, [isEditing, multiline]);

  // Click outside to save
  useEffect(() => {
    if (!isEditing) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleSave();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isEditing, localValue, displayValue]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (localValue !== displayValue) {
      updateContent(id, localValue);
      onChange?.(localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setLocalValue(displayValue);
      setIsEditing(false);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (multiline && e.currentTarget) {
      e.currentTarget.style.height = 'auto';
      e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
    }
  };

  if (isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';
    return (
      <div ref={containerRef} className="relative">
        <InputComponent
          ref={inputRef as any}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onInput={multiline ? handleInput : undefined}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className={`${className} resize-none rounded-md border-2 border-blue-500 bg-black/50 px-2 py-1 text-white shadow-lg shadow-blue-500/20 outline-none ring-4 ring-blue-500/10 transition-all`}
          placeholder={placeholder}
          rows={multiline ? 1 : undefined}
          style={multiline ? { overflow: 'hidden' } : undefined}
        />
        {/* Editing indicator */}
        <div className="pointer-events-none absolute -top-8 left-0 flex items-center gap-1.5 rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path
              d="M6.5 1.5a1.3 1.3 0 0 1 1.85 0h0c.51.51.51 1.34 0 1.85l-5.2 5.2H1.5v-1.65Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5.9 8.5h2.85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Editing
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tag
        className={`${className} ${
          isEditMode
            ? 'cursor-pointer rounded-md transition-all hover:bg-blue-500/5 hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5)]'
            : ''
        } ${isHovered && isEditMode ? 'bg-blue-500/5' : ''}`}
        onClick={handleClick}
      >
        {displayValue || placeholder}
      </Tag>
      
      {/* Hover controls - Framer style */}
      {isHovered && isEditMode && !isEditing && (
        <div className="pointer-events-none absolute -top-9 left-0 flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-lg opacity-0 animate-[fadeIn_0.15s_ease-out_forwards]">
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path
              d="M6.5 1.5a1.3 1.3 0 0 1 1.85 0h0c.51.51.51 1.34 0 1.85l-5.2 5.2H1.5v-1.65Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5.9 8.5h2.85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
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
