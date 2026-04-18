import { useRef, useEffect, useState, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import { useCMSStore, type CustomTextBox } from './cmsStore';
import { parseTextSettings } from './EditableText';

// Shared with EditableText
const sanitizeHtml = (html: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  [tmp, ...Array.from(tmp.querySelectorAll<HTMLElement>('*'))].forEach(node => {
    (node as HTMLElement).style?.removeProperty('background-color');
    (node as HTMLElement).style?.removeProperty('background');
    (node as HTMLElement).style?.removeProperty('background-image');
  });
  return tmp.innerHTML;
};

const stripBackground = (el: HTMLElement) => {
  [el, ...Array.from(el.querySelectorAll<HTMLElement>('*'))].forEach(node => {
    node.style.removeProperty('background-color');
    node.style.removeProperty('background');
    node.style.removeProperty('background-image');
  });
};

function CustomTextBoxItem({ box, isEditMode }: { box: CustomTextBox; isEditMode: boolean }) {
  const {
    getContent, updateContent, persistContent,
    updateCustomTextBox, deleteCustomTextBox,
    setActiveTextKey, setActiveTextEl,
  } = useCMSStore();

  // Each box stores its text content and style settings in the CMS content store
  const contentKey = `ctb_${box.id}`;
  const content = getContent(contentKey, box.content);
  const rawSettings = getContent(`${contentKey}__style`, '{}');
  const settings = parseTextSettings(rawSettings);

  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastExternalContent = useRef(content);

  // Local position for smooth drag
  const [pos, setPos] = useState({ x: box.x, y: box.y });
  const dragRef = useRef<{ startMX: number; startMY: number; startX: number; startY: number } | null>(null);

  // Local size for smooth resize
  const [size, setSize] = useState({ w: box.width, h: box.height ?? 0 });
  const resizeRef = useRef<{ startMX: number; startMY: number; startW: number; startH: number } | null>(null);

  // Set innerHTML on mount
  useEffect(() => {
    if (elementRef.current) elementRef.current.innerHTML = sanitizeHtml(content);
    lastExternalContent.current = content;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply text settings to element + all descendants (same as EditableText)
  useEffect(() => {
    const el = elementRef.current;
    if (!el || !isEditMode) return;
    const s = parseTextSettings(rawSettings);
    const all = [el, ...Array.from(el.querySelectorAll<HTMLElement>('*'))];
    all.forEach(node => {
      if (s.fontSize)   node.style.setProperty('font-size',   s.fontSize,   'important');
      if (s.fontWeight) node.style.setProperty('font-weight', s.fontWeight, 'important');
      if (s.textAlign)  node.style.setProperty('text-align',  s.textAlign,  'important');
      if (s.color) {
        node.style.setProperty('color',                   s.color, 'important');
        node.style.setProperty('-webkit-text-fill-color', s.color, 'important');
      }
    });
  }, [rawSettings, isEditMode]);

  // Sync external content changes while not editing
  useEffect(() => {
    if (content !== lastExternalContent.current) {
      lastExternalContent.current = content;
      if (elementRef.current && !isEditing) {
        elementRef.current.innerHTML = sanitizeHtml(content);
      }
    }
  }, [content, isEditing]);

  // Sync position + size from store (e.g. after reload)
  useEffect(() => { setPos({ x: box.x, y: box.y }); }, [box.x, box.y]);
  useEffect(() => { setSize({ w: box.width, h: box.height ?? 0 }); }, [box.width, box.height]);

  const saveContent = (value: string) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        updateContent(contentKey, value);
        await persistContent();
      } catch (err) {
        console.error('Failed to save text box content:', err);
      }
    }, 600);
  };

  const handleInput = () => {
    if (!elementRef.current) return;
    stripBackground(elementRef.current);
    saveContent(sanitizeHtml(elementRef.current.innerHTML || ''));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    if (elementRef.current) {
      stripBackground(elementRef.current);
      saveContent(sanitizeHtml(elementRef.current.innerHTML || ''));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isEditMode) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      if (elementRef.current) elementRef.current.innerHTML = content;
      elementRef.current?.blur();
    }
  };

  const handleFocus = () => {
    setIsEditing(true);
    setActiveTextKey(contentKey);
    setActiveTextEl(elementRef.current);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleDragMouseDown = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
    dragRef.current = { startMX: e.clientX, startMY: e.clientY, startX: pos.x, startY: pos.y };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      setPos({
        x: dragRef.current.startX + ev.clientX - dragRef.current.startMX,
        y: dragRef.current.startY + ev.clientY - dragRef.current.startMY,
      });
    };

    const onUp = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const finalX = dragRef.current.startX + ev.clientX - dragRef.current.startMX;
      const finalY = dragRef.current.startY + ev.clientY - dragRef.current.startMY;
      dragRef.current = null;
      updateCustomTextBox(box.id, { x: finalX, y: finalY });
      persistContent().catch(console.error);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation();
    resizeRef.current = { startMX: e.clientX, startMY: e.clientY, startW: size.w, startH: size.h };

    const onMove = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      setSize({
        w: Math.max(80, resizeRef.current.startW + ev.clientX - resizeRef.current.startMX),
        h: Math.max(0,  resizeRef.current.startH + ev.clientY - resizeRef.current.startMY),
      });
    };

    const onUp = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      const finalW = Math.max(80, resizeRef.current.startW + ev.clientX - resizeRef.current.startMX);
      const finalH = Math.max(0,  resizeRef.current.startH + ev.clientY - resizeRef.current.startMY);
      resizeRef.current = null;
      updateCustomTextBox(box.id, { width: finalW, height: finalH || undefined });
      persistContent().catch(console.error);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const computedStyle: React.CSSProperties = {
    ...(settings.fontSize   && { fontSize:   settings.fontSize }),
    ...(settings.fontWeight && { fontWeight: settings.fontWeight }),
    ...(settings.color      && { color: settings.color, WebkitTextFillColor: settings.color }),
    ...(settings.textAlign  && { textAlign:  settings.textAlign as any }),
    ...(isEditMode && {
      outline:       isEditing ? '2px solid #0099FF' : 'none',
      outlineOffset: '2px',
      cursor:        'text',
      transition:    'box-shadow 0.2s ease-out, outline 0.2s ease-out',
      boxShadow:     isEditing
        ? '0 0 0 3px rgba(0, 153, 255, 0.3)'
        : isHovered
        ? '0 0 0 3px rgba(0, 153, 255, 0.4), 0 0 20px rgba(0, 153, 255, 0.6)'
        : 'none',
      borderRadius: '4px',
    }),
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        width: size.w,
        zIndex: 1001,
        pointerEvents: 'auto',
      }}
    >
      {/* Drag handle — only in edit mode */}
      {isEditMode && (
        <div
          onMouseDown={handleDragMouseDown}
          className="flex items-center justify-between bg-[#0099FF]/80 hover:bg-[#0099FF] px-1.5 rounded-t select-none cursor-move"
          style={{ height: 18, fontSize: 10 }}
        >
          <span className="text-white/80 leading-none">⠿ move</span>
          <button
            type="button"
            className="text-white/70 hover:text-white leading-none px-0.5 cursor-pointer"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => deleteCustomTextBox(box.id)}
            title="Delete text box"
          >
            ×
          </button>
        </div>
      )}

      <div
        ref={elementRef}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        style={{
          ...computedStyle,
          minHeight: 24,
          height: size.h > 0 ? size.h : undefined,
          overflow: size.h > 0 ? 'auto' : undefined,
          padding: '4px 8px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
        data-content-key={contentKey}
      />

      {/* Resize handle — bottom-right corner, edit mode only */}
      {isEditMode && (
        <div
          onMouseDown={handleResizeMouseDown}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 12,
            height: 12,
            cursor: 'nwse-resize',
            background: '#0099FF',
            borderRadius: '2px 0 0 0',
            opacity: 0.8,
          }}
          title="Resize"
        />
      )}
    </div>
  );
}

export function CustomTextBoxLayer() {
  const { isEditMode, customTextBoxes } = useCMSStore();
  const { pathname } = useLocation();

  const boxes = customTextBoxes.filter((b) => b.page === pathname);
  if (boxes.length === 0) return null;

  // Portal into body so overflow:clip on app containers doesn't clip the boxes.
  // The inner div is position:absolute covering the full document, so boxes
  // are anchored to page coordinates and scroll with the content.
  return createPortal(
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1001 }}>
      {boxes.map((box) => (
        <CustomTextBoxItem key={box.id} box={box} isEditMode={isEditMode} />
      ))}
    </div>,
    document.body
  );
}
