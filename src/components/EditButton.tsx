import { useEditMode } from '../contexts/EditModeContext';
import { useEffect } from 'react';

export function EditButton() {
  const { isEditMode, toggleEditMode, isSaving, undo, redo, canUndo, canRedo } = useEditMode();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + Z for undo
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      // Cmd/Ctrl + Shift + Z for redo
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && e.shiftKey) {
        e.preventDefault();
        redo();
      }
      // Cmd/Ctrl + E to toggle edit mode
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        toggleEditMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, toggleEditMode]);

  return (
    <>
      {/* Edit Mode Controls - Fixed position like Framer */}
      <div className="fixed right-6 top-6 z-[9999] flex items-center gap-2">
        {/* Undo/Redo buttons (only in edit mode) */}
        {isEditMode && (
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/80 p-1 backdrop-blur-sm">
            <button
              onClick={undo}
              disabled={!canUndo}
              className={`flex h-8 w-8 items-center justify-center rounded transition-all ${
                canUndo
                  ? 'text-white hover:bg-white/10'
                  : 'cursor-not-allowed text-white/30'
              }`}
              title="Undo (Cmd+Z)"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 7h6a3 3 0 0 1 0 6h-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m1.5 9 2-2 2 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={redo}
              disabled={!canRedo}
              className={`flex h-8 w-8 items-center justify-center rounded transition-all ${
                canRedo
                  ? 'text-white hover:bg-white/10'
                  : 'cursor-not-allowed text-white/30'
              }`}
              title="Redo (Cmd+Shift+Z)"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12.5 7h-6a3 3 0 0 0 0 6h2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m14.5 9-2-2-2 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Save indicator */}
        {isSaving && (
          <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-400 backdrop-blur-sm">
            <svg className="h-3 w-3 animate-spin" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="30" strokeLinecap="round" />
            </svg>
            Saving...
          </div>
        )}

        {/* Edit mode toggle button */}
        <button
          type="button"
          onClick={toggleEditMode}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all ${
            isEditMode
              ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'border-white/10 bg-black/80 text-white backdrop-blur-sm hover:border-white/20 hover:bg-black/90'
          }`}
          aria-label={isEditMode ? 'Exit edit mode' : 'Enter edit mode'}
          title={isEditMode ? 'Exit edit mode (Cmd+E)' : 'Enter edit mode (Cmd+E)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path
              d="M8.75 2.25a1.77 1.77 0 0 1 2.5 0h0c.69.69.69 1.81 0 2.5l-7 7h-2.5v-2.5Z"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11.75h3.75"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Edit Mode Indicator - Bottom left like Framer */}
      {isEditMode && (
        <div className="fixed bottom-6 left-6 z-[9999] flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm text-blue-400 backdrop-blur-sm">
          <svg className="h-4 w-4 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span className="font-medium">Edit Mode</span>
          <span className="text-blue-400/60">·</span>
          <span className="text-blue-400/80 text-xs">Click any content to edit</span>
        </div>
      )}
    </>
  );
}
