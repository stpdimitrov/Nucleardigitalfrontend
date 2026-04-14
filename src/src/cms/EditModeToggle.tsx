import { useEffect, useState } from 'react';
import { useCMSStore } from './cmsStore';
import { adminLogin } from '../../services/api';

export function EditModeToggle() {
  const { isEditMode, toggleEditMode, setEditMode, saveStatus, resetContent, adminToken, setAdminToken } = useCMSStore();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  // Keyboard shortcut: Cmd/Ctrl + E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        handleToggleEditMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditMode, adminToken]);

  const handleToggleEditMode = () => {
    if (!isEditMode && !adminToken) {
      // Need to log in first
      setShowLoginModal(true);
    } else {
      toggleEditMode();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError('');
    try {
      const token = await adminLogin(email, password);
      setAdminToken(token);
      setShowLoginModal(false);
      setEditMode(true);
      setEmail('');
      setPassword('');
    } catch {
      setLoginError('Invalid credentials. Please try again.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all content to default? This cannot be undone.')) {
      resetContent();
      window.location.reload();
    }
  };

  const handleLogout = () => {
    setAdminToken(null);
    setEditMode(false);
  };

  return (
    <>
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
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeLinecap="round" />
                </svg>
                Saving...
              </>
            )}
            {saveStatus === 'saved' && (
              <>
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Saved
              </>
            )}
            {saveStatus === 'error' && (
              <>
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Sync Error
              </>
            )}
          </div>
        )}

        {/* Edit Mode Toggle */}
        <button
          type="button"
          onClick={handleToggleEditMode}
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
            isEditMode
              ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'border-white/10 bg-black/80 text-white backdrop-blur-sm hover:border-white/20 hover:bg-black/90'
          }`}
          title="Toggle Edit Mode (Cmd+E)"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

        {/* Logout button (visible when logged in as admin) */}
        {adminToken && !isEditMode && (
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-xs text-white/40 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white/60"
            title="Logout from admin"
          >
            Logout
          </button>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-sm rounded-xl border border-[#0099FF]/30 bg-[#1a1a1a] p-6 shadow-[0_0_30px_rgba(0,153,255,0.3)]">
            <h2 className="mb-1 text-lg font-semibold text-white">Admin Login</h2>
            <p className="mb-5 text-sm text-white/50">Sign in to enable content editing</p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#0099FF]/50 focus:outline-none focus:ring-2 focus:ring-[#0099FF]/20"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#0099FF]/50 focus:outline-none focus:ring-2 focus:ring-[#0099FF]/20"
                  placeholder="••••••••"
                />
              </div>

              {loginError && (
                <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">{loginError}</p>
              )}

              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loggingIn}
                  className="flex-1 rounded-lg bg-[#0099FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0088ee] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loggingIn ? 'Signing in...' : 'Sign in'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowLoginModal(false); setLoginError(''); }}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
