import { ReactNode, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCMSStore } from './cmsStore';

interface EditableSectionProps {
  sectionId: string;
  label: string;
  children: ReactNode;
}

export function EditableSection({ sectionId, label, children }: EditableSectionProps) {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const isHidden = getContent(`visibility.section.${sectionId}`, 'false') === 'true';
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [btnPos, setBtnPos] = useState<{ top: number; right: number } | null>(null);

  const toggle = () => {
    updateContent(`visibility.section.${sectionId}`, isHidden ? 'false' : 'true');
    persistContent();
  };

  // Track section position for the fixed button
  useEffect(() => {
    if (!isEditMode || !wrapperRef.current) return;
    const update = () => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (rect) {
        setBtnPos({
          top: Math.max(rect.top + 16, 80),
          right: 24,
        });
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isEditMode]);

  if (!isEditMode && isHidden) return null;

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      {children}

      {isEditMode && isHidden && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50, pointerEvents: 'none',
        }}>
          <span style={{
            background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(239,68,68,0.3)',
            padding: '8px 16px', borderRadius: 8,
            color: 'rgba(248,113,113,0.8)', fontSize: 14, fontWeight: 500,
          }}>
            {label} — Hidden
          </span>
        </div>
      )}

      {isEditMode && btnPos && createPortal(
        <button
          onClick={toggle}
          style={{
            position: 'fixed',
            top: btnPos.top,
            right: btnPos.right,
            zIndex: 9990,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
            border: isHidden
              ? '1px solid rgba(239,68,68,0.4)'
              : '1px solid rgba(255,255,255,0.15)',
            background: isHidden
              ? 'rgba(239,68,68,0.15)'
              : 'rgba(0,0,0,0.85)',
            color: isHidden ? 'rgb(248,113,113)' : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
            fontFamily: 'Arial, sans-serif',
          }}
          title={`${isHidden ? 'Show' : 'Hide'} ${label}`}
        >
          {isHidden ? '👁 Show' : '🙈 Hide'} · {label}
        </button>,
        document.body
      )}
    </div>
  );
}
