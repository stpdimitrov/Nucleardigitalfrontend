import { ReactNode, useEffect } from 'react';
import { useCMSStore } from './cmsStore';

interface EditableSectionProps {
  sectionId: string;
  label: string;
  children: ReactNode;
}

export function EditableSection({ sectionId, label, children }: EditableSectionProps) {
  const isEditMode = useCMSStore((s) => s.isEditMode);
  const getContent = useCMSStore((s) => s.getContent);
  const registerSection = useCMSStore((s) => s.registerSection);
  const unregisterSection = useCMSStore((s) => s.unregisterSection);

  const isHidden = getContent(`visibility.section.${sectionId}`, 'false') === 'true';

  useEffect(() => {
    registerSection(sectionId, label);
    return () => unregisterSection(sectionId);
  }, [sectionId, label]);

  if (!isEditMode && isHidden) return null;

  return (
    <div style={{ position: 'relative' }}>
      {isEditMode && isHidden && (
        <div style={{
          background: 'repeating-linear-gradient(45deg, rgba(220,38,38,0.15), rgba(220,38,38,0.15) 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)',
          border: '2px dashed rgba(220,38,38,0.6)',
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(248,113,113,0.9)', fontSize: 13, fontFamily: 'Arial,sans-serif',
          fontWeight: 600,
        }}>
          {label} — Hidden (use the Sections panel to show)
        </div>
      )}
      {children}
    </div>
  );
}
