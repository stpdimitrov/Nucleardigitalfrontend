import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useCMSStore } from './cmsStore';

interface EditableSectionProps {
  sectionId: string;
  label: string;
  children: ReactNode;
}

export function EditableSection({ sectionId, label, children }: EditableSectionProps) {
  // Use selector to subscribe only to isEditMode — more reliable re-render trigger
  const isEditMode = useCMSStore((s) => s.isEditMode);
  const getContent = useCMSStore((s) => s.getContent);
  const updateContent = useCMSStore((s) => s.updateContent);
  const persistContent = useCMSStore((s) => s.persistContent);

  const isHidden = getContent(`visibility.section.${sectionId}`, 'false') === 'true';

  const toggle = () => {
    updateContent(`visibility.section.${sectionId}`, isHidden ? 'false' : 'true');
    persistContent();
  };

  if (!isEditMode && isHidden) return null;

  return (
    <div style={{ position: 'relative' }}>
      {isEditMode && (
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '4px 12px',
          background: isHidden ? 'rgba(220,38,38,0.15)' : 'rgba(0,0,0,0.4)',
          borderBottom: isHidden ? '1px solid rgba(220,38,38,0.3)' : '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          zIndex: 9980,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'Arial,sans-serif', marginRight: 'auto' }}>
            {label}
          </span>
          <button
            onClick={toggle}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 10px', borderRadius: 6,
              fontSize: 11, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'Arial,sans-serif',
              border: isHidden ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.2)',
              background: isHidden ? 'rgba(220,38,38,0.2)' : 'rgba(255,255,255,0.08)',
              color: isHidden ? 'rgb(248,113,113)' : 'rgba(255,255,255,0.7)',
            }}
          >
            {isHidden ? '👁 Show' : '🙈 Hide'}
          </button>
        </div>
      )}

      {children}

      {isEditMode && isHidden && createPortal(
        <div style={{
          position: 'fixed', inset: 0, pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9970,
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(220,38,38,0.4)',
            padding: '10px 20px', borderRadius: 8,
            color: 'rgba(248,113,113,0.9)', fontSize: 14, fontWeight: 500,
            fontFamily: 'Arial,sans-serif',
          }}>
            {label} — Hidden
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
