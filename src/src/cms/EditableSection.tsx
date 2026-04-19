import { ReactNode } from 'react';
import { useCMSStore } from './cmsStore';
import { Eye, EyeOff } from 'lucide-react';

interface EditableSectionProps {
  sectionId: string;
  label: string;
  children: ReactNode;
}

export function EditableSection({ sectionId, label, children }: EditableSectionProps) {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const isHidden = getContent(`visibility.section.${sectionId}`, 'false') === 'true';

  const toggle = () => {
    updateContent(`visibility.section.${sectionId}`, isHidden ? 'false' : 'true');
    persistContent();
  };

  if (!isEditMode && isHidden) return null;

  return (
    <div className="relative">
      {children}
      {isEditMode && (
        <>
          <button
            onClick={toggle}
            className={`absolute top-4 right-6 z-[60] flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium backdrop-blur-sm border transition-all ${
              isHidden
                ? 'bg-red-500/20 border-red-500/40 text-red-400 hover:bg-red-500/30'
                : 'bg-black/70 border-white/10 text-white/60 hover:text-white hover:bg-black/90'
            }`}
          >
            {isHidden ? <Eye className="size-3" /> : <EyeOff className="size-3" />}
            {isHidden ? 'Show' : 'Hide'}
          </button>
          {isHidden && (
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] flex items-center justify-center z-50 pointer-events-none">
              <span className="bg-black/80 border border-red-500/30 px-4 py-2 rounded-lg text-red-400/80 text-sm font-medium tracking-wide">
                {label} — Hidden
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
