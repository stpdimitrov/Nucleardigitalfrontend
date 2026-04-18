import { useRef, useEffect, useState, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { useCMSStore } from './cmsStore';

interface EditableTextProps {
  contentKey: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
  placeholder?: string;
  children?: never;
}

export interface TextSettings {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
}

export function parseTextSettings(raw: string): TextSettings {
  try { return JSON.parse(raw); } catch { return {}; }
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
  const { isEditMode, getContent, updateContent, persistContent, setActiveTextKey, setActiveTextEl, textPositionOffsets, setTextPositionOffset, hiddenTextKeys, setTextHidden, textSizes, setTextSize } = useCMSStore();
  const content = getContent(contentKey, defaultValue);
  const rawSettings = getContent(`${contentKey}__style`, '{}');
  const settings: TextSettings = parseTextSettings(rawSettings);
  const posOffset = textPositionOffsets[contentKey] ?? { dx: 0, dy: 0 };
  const isHidden = !!hiddenTextKeys[contentKey];
  const storedSize = textSizes[contentKey] ?? {};

  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideHandleTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastExternalContent = useRef(content);
  const Tag = as;

  const showHandle = () => {
    if (hideHandleTimeout.current) { clearTimeout(hideHandleTimeout.current); hideHandleTimeout.current = null; }
    setIsHovered(true);
    updateHandleRect();
  };

  const scheduleHideHandle = () => {
    hideHandleTimeout.current = setTimeout(() => { setIsHovered(false); setHandleRect(null); }, 120);
  };

  // Local drag offset (smooth — no store re-renders on every pixel)
  const [localOffset, setLocalOffset] = useState(posOffset);
  const dragRef = useRef<{ startMX: number; startMY: number; startDX: number; startDY: number } | null>(null);

  // Local size (smooth resize — no store re-renders on every pixel)
  const [localWidth, setLocalWidth] = useState<number | undefined>(storedSize.width);
  const resizeRef = useRef<{ startMX: number; startW: number } | null>(null);

  // Sync local offset when store changes (e.g. after reload)
  useEffect(() => {
    setLocalOffset(textPositionOffsets[contentKey] ?? { dx: 0, dy: 0 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textPositionOffsets[contentKey]]);

  // When a position offset is active in edit mode, remove overflow:clip from ancestor elements
  // so the translated text isn't clipped by parent containers (e.g. hero overflow-clip).
  const ancestorOverridesRef = useRef<Array<{ el: HTMLElement; prev: string }>>([]);
  useEffect(() => {
    // Restore any previous overrides
    ancestorOverridesRef.current.forEach(({ el, prev }) => {
      if (prev) el.style.overflow = prev;
      else el.style.removeProperty('overflow');
    });
    ancestorOverridesRef.current = [];

    const hasOffset = localOffset.dx !== 0 || localOffset.dy !== 0;
    if (!isEditMode || !hasOffset || !wrapperRef.current) return;

    let el = wrapperRef.current.parentElement;
    while (el && el !== document.body) {
      const cs = window.getComputedStyle(el);
      if (cs.overflow === 'clip' || cs.overflowX === 'clip' || cs.overflowY === 'clip') {
        ancestorOverridesRef.current.push({ el, prev: el.style.overflow });
        el.style.setProperty('overflow', 'visible', 'important');
      }
      el = el.parentElement;
    }

    return () => {
      ancestorOverridesRef.current.forEach(({ el, prev }) => {
        if (prev) el.style.overflow = prev;
        else el.style.removeProperty('overflow');
      });
      ancestorOverridesRef.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, localOffset.dx, localOffset.dy]);

  // Sync local width when store changes
  useEffect(() => {
    setLocalWidth(textSizes[contentKey]?.width);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSizes[contentKey]]);

  // Set innerHTML on mount — sanitize strips any background-color baked into saved HTML
  useEffect(() => {
    if (elementRef.current) elementRef.current.innerHTML = sanitizeHtml(content);
    lastExternalContent.current = content;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply settings to element AND all children whenever rawSettings changes.
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

  const saveContent = (value: string) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        updateContent(contentKey, value);
        await persistContent();
      } catch (err) {
        console.error('Failed to save content:', err);
      }
    }, 600);
  };

  const stripBackground = (el: HTMLElement) => {
    [el, ...Array.from(el.querySelectorAll<HTMLElement>('*'))].forEach(node => {
      node.style.removeProperty('background-color');
      node.style.removeProperty('background');
      node.style.removeProperty('background-image');
    });
  };

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

  const handlePaste = (e: React.ClipboardEvent<HTMLElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    if (elementRef.current) {
      stripBackground(elementRef.current);
      saveContent(sanitizeHtml(elementRef.current.innerHTML || ''));
    }
  };

  const handleInput = () => {
    if (!elementRef.current) return;
    stripBackground(elementRef.current);
    saveContent(sanitizeHtml(elementRef.current.innerHTML || ''));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!isEditMode) return;
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault();
      elementRef.current?.blur();
    }
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
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = { startMX: e.clientX, startMY: e.clientY, startDX: localOffset.dx, startDY: localOffset.dy };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      setLocalOffset({
        dx: dragRef.current.startDX + ev.clientX - dragRef.current.startMX,
        dy: dragRef.current.startDY + ev.clientY - dragRef.current.startMY,
      });
    };

    const onUp = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const finalDX = dragRef.current.startDX + ev.clientX - dragRef.current.startMX;
      const finalDY = dragRef.current.startDY + ev.clientY - dragRef.current.startMY;
      dragRef.current = null;
      setTextPositionOffset(contentKey, { dx: finalDX, dy: finalDY });
      persistContent().catch(console.error);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const handleResetPosition = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalOffset({ dx: 0, dy: 0 });
    setTextPositionOffset(contentKey, null);
    persistContent().catch(console.error);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTextHidden(contentKey, true);
    persistContent().catch(console.error);
  };

  const handleRestore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTextHidden(contentKey, false);
    persistContent().catch(console.error);
  };

  const hasOffset = localOffset.dx !== 0 || localOffset.dy !== 0;

  // Position of the drag handle (fixed, so it escapes overflow:clip parents)
  const [handleRect, setHandleRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const updateHandleRect = () => {
    if (wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setHandleRect({ top: r.top - 18, left: r.left, width: r.width, height: r.height });
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const currentWidth = wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : (localWidth ?? 200);
    resizeRef.current = { startMX: e.clientX, startW: currentWidth };

    const onMove = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      const newW = Math.max(80, resizeRef.current.startW + ev.clientX - resizeRef.current.startMX);
      setLocalWidth(newW);
    };

    const onUp = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      const finalW = Math.max(80, resizeRef.current.startW + ev.clientX - resizeRef.current.startMX);
      resizeRef.current = null;
      setTextSize(contentKey, { width: finalW });
      persistContent().catch(console.error);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // Build computed style: parent style, then settings on top
  const computedStyle: React.CSSProperties = {
    ...style,
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

  const wrapperTransform = (localOffset.dx !== 0 || localOffset.dy !== 0)
    ? `translate(${localOffset.dx}px, ${localOffset.dy}px)`
    : undefined;

  const hasWidth = localWidth !== undefined && localWidth > 0;

  // Hidden in view mode — render nothing
  if (isHidden && !isEditMode) return null;

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        transform: wrapperTransform,
        // Apply width override when set
        ...(hasWidth && { width: localWidth, minWidth: 0 }),
        // In non-edit mode, make wrapper transparent to layout when there's no offset and no width
        ...(!isEditMode && !wrapperTransform && !hasWidth && { display: 'contents' }),
        // Show hidden elements faded in edit mode
        ...(isHidden && isEditMode && { opacity: 0.3 }),
      }}
    >
      {/* Drag handle + resize handle — rendered via portal so overflow:clip parents don't clip it */}
      {isEditMode && isHovered && handleRect && createPortal(
        <>
          {/* Top drag bar */}
          <div
            onMouseEnter={showHandle}
            onMouseLeave={scheduleHideHandle}
            style={{
              position: 'fixed',
              top: handleRect.top,
              left: handleRect.left,
              height: 18,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: isHidden ? '#555' : '#0099FF',
              borderRadius: '4px 4px 0 0',
              padding: '0 4px',
              userSelect: 'none',
              fontSize: 10,
              whiteSpace: 'nowrap',
              pointerEvents: 'auto',
            }}
          >
            {/* Drag grip */}
            {!isHidden && (
              <span
                onMouseDown={handleDragMouseDown}
                style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1, cursor: 'move', padding: '0 2px' }}
              >
                ⠿
              </span>
            )}
            {/* Reset position */}
            {hasOffset && !isHidden && (
              <span
                onClick={handleResetPosition}
                style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', lineHeight: 1, padding: '0 2px' }}
                title="Reset position"
              >
                ↺
              </span>
            )}
            {/* Reset width */}
            {hasWidth && !isHidden && (
              <span
                onClick={(e) => { e.stopPropagation(); setLocalWidth(undefined); setTextSize(contentKey, null); persistContent().catch(console.error); }}
                style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', lineHeight: 1, padding: '0 2px', fontSize: 9 }}
                title="Reset width"
              >
                ↔↺
              </span>
            )}
            {/* Delete / Restore */}
            {isHidden ? (
              <span
                onClick={handleRestore}
                style={{ color: '#aaa', cursor: 'pointer', lineHeight: 1, padding: '0 2px', fontSize: 9 }}
                title="Restore"
              >
                ↩ restore
              </span>
            ) : (
              <span
                onClick={handleDelete}
                style={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', lineHeight: 1, padding: '0 2px' }}
                title="Hide element"
              >
                ×
              </span>
            )}
          </div>

          {/* Bottom-right resize handle */}
          {!isHidden && (
            <div
              onMouseEnter={showHandle}
              onMouseLeave={scheduleHideHandle}
              onMouseDown={handleResizeMouseDown}
              title="Drag to resize width"
              style={{
                position: 'fixed',
                top: handleRect.top + 18 + handleRect.height,
                left: handleRect.left + handleRect.width - 12,
                width: 12,
                height: 12,
                zIndex: 9999,
                background: '#0099FF',
                borderRadius: '0 0 3px 0',
                cursor: 'ew-resize',
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 6L6 2M4 6L6 4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          )}
        </>,
        document.body
      )}

      <Tag
        ref={elementRef as any}
        className={className}
        style={computedStyle}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={isEditMode ? showHandle : undefined}
        onMouseLeave={isEditMode ? scheduleHideHandle : undefined}
        data-content-key={contentKey}
        data-placeholder={placeholder}
      />
    </div>
  );
}
