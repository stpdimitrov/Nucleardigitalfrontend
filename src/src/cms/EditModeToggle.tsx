import { useEffect } from 'react';
import { useCMSStore } from './cmsStore';

export function EditModeToggle() {
  const { isEditMode, toggleEditMode, saveStatus, resetContent } = useCMSStore();

  // Keyboard shortcut: Cmd/Ctrl + E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        toggleEditMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleEditMode]);

  // Handle reset content
  const handleReset = () => {
    if (window.confirm('Reset all content to default? This cannot be undone.')) {
      resetContent();
      window.location.reload();
    }
  };

  return (
    <div className="fixed right-6 top-6 z-[9998] flex items-center gap-3">
      {/* Save Status */}
      {saveStatus !== 'idle' && (
        <div
          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium ${
            saveStatus === 'saving'
              ? 'bg-blue-500/20 text-blue-400'
              : saveStatus === 'saved'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {saveStatus === 'saving' && (
            <>
              <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="60"
                  strokeLinecap="round"
                />
              </svg>
              Saving...
            </>
          )}
          {saveStatus === 'saved' && (
            <>
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Saved
            </>
          )}
          {saveStatus === 'error' && (
            <>
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Error
            </>
          )}
        </div>
      )}

      {/* Edit Mode Toggle */}
      <button
        type="button"
        onClick={toggleEditMode}
        className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
          isEditMode
            ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/50'
            : 'border-white/10 bg-black/80 text-white backdrop-blur-sm hover:border-white/20 hover:bg-black/90'
        }`}
        title="Toggle Edit Mode (Cmd+E)"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        {isEditMode ? 'Exit Edit Mode' : 'Edit Mode'}
      </button>

      {/* Reset Button (only in edit mode) */}
      {isEditMode && (
        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-sm text-white/60 backdrop-blur-sm transition-all hover:border-red-500/50 hover:text-red-400"
          title="Reset all content"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
        </button>
      )}
    </div>
  );
}
