import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import { useCMSStore } from './cmsStore';
import { adminLogin } from '../../services/api';
import { parseTextSettings, type TextSettings } from './EditableText';

const FONT_SIZES = ['10','11','12','13','14','15','16','18','20','22','24','28','32','36','40','48','56','64','72','80','96'];

function TextFormatBar() {
  const { activeTextKey, activeTextEl, getContent, updateContent, persistContent } = useCMSStore();
  const [applyCount, setApplyCount] = useState(0);

  if (!activeTextKey) return null;

  const rawSettings = getContent(`${activeTextKey}__style`, '{}');
  const settings: TextSettings = parseTextSettings(rawSettings);
  const isBold = settings.fontWeight === 'bold' || settings.fontWeight === '700';

  const apply = (next: TextSettings) => {
    setApplyCount(c => c + 1);
    console.log('[TextFormatBar] apply', activeTextKey, next);

    // 1. Update store (triggers re-render of EditableText via React style prop)
    updateContent(`${activeTextKey}__style`, JSON.stringify(next));
    persistContent().catch(console.error);

    // 2. Apply directly to DOM — including ALL child elements (child Tailwind classes override parent styles)
    const el = activeTextEl;
    if (el) {
      const all = [el, ...Array.from(el.querySelectorAll<HTMLElement>('*'))];
      all.forEach(node => {
        if (next.fontSize)   node.style.setProperty('font-size',   next.fontSize,   'important');
        if (next.fontWeight) node.style.setProperty('font-weight', next.fontWeight, 'important');
        if (next.textAlign)  node.style.setProperty('text-align',  next.textAlign,  'important');
        if (next.color) {
          node.style.setProperty('color',                   next.color, 'important');
          node.style.setProperty('-webkit-text-fill-color', next.color, 'important');
        }
      });
    } else {
      console.warn('[TextFormatBar] no activeTextEl');
    }
  };

  const btn = (active: boolean) =>
    `flex items-center justify-center w-7 h-7 rounded cursor-pointer transition-colors text-white text-xs select-none ${active ? 'bg-white/30' : 'hover:bg-white/15'}`;

  return (
    <div className="flex items-center gap-1 bg-[#111] border border-white/20 rounded-lg px-2 py-1 shadow-xl">
      <span className="text-white/40 text-xs pr-1 select-none" title={activeTextKey ?? ''}>T</span>
      {applyCount > 0 && <span className="text-green-400 text-xs px-1 select-none">✓{applyCount}</span>}

      <select
        value={settings.fontSize || ''}
        onChange={(e) => apply({ ...settings, fontSize: e.target.value || undefined })}
        className="bg-[#222] text-white text-xs border border-white/20 rounded px-1.5 py-0.5 cursor-pointer outline-none"
        style={{ minWidth: 68, fontFamily: 'Arial, sans-serif' }}
      >
        <option value="">Size</option>
        {FONT_SIZES.map(s => <option key={s} value={`${s}px`}>{s}px</option>)}
      </select>

      <div className="w-px h-5 bg-white/20 mx-0.5" />

      <button type="button" className={btn(isBold)}
        onClick={() => apply({ ...settings, fontWeight: isBold ? 'normal' : 'bold' })}>
        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>B</span>
      </button>

      <div className="w-px h-5 bg-white/20 mx-0.5" />

      <button type="button" className={btn(settings.textAlign === 'left')}
        onClick={() => apply({ ...settings, textAlign: 'left' })} title="Align left">
        <svg width="13" height="11" viewBox="0 0 13 11" fill="currentColor">
          <rect y="0" width="13" height="2" rx="1"/><rect y="4.5" width="8" height="2" rx="1"/><rect y="9" width="13" height="2" rx="1"/>
        </svg>
      </button>
      <button type="button" className={btn(settings.textAlign === 'center')}
        onClick={() => apply({ ...settings, textAlign: 'center' })} title="Center">
        <svg width="13" height="11" viewBox="0 0 13 11" fill="currentColor">
          <rect y="0" width="13" height="2" rx="1"/><rect x="2.5" y="4.5" width="8" height="2" rx="1"/><rect y="9" width="13" height="2" rx="1"/>
        </svg>
      </button>
      <button type="button" className={btn(settings.textAlign === 'right')}
        onClick={() => apply({ ...settings, textAlign: 'right' })} title="Align right">
        <svg width="13" height="11" viewBox="0 0 13 11" fill="currentColor">
          <rect y="0" width="13" height="2" rx="1"/><rect x="5" y="4.5" width="8" height="2" rx="1"/><rect y="9" width="13" height="2" rx="1"/>
        </svg>
      </button>

      <div className="w-px h-5 bg-white/20 mx-0.5" />

      <label className="flex items-center gap-1.5 cursor-pointer px-1" title="Text color">
        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: 12, color: settings.color || '#fff' }}>A</span>
        <input
          type="color"
          value={settings.color || '#ffffff'}
          onChange={(e) => apply({ ...settings, color: e.target.value })}
          className="w-5 h-5 cursor-pointer rounded"
          style={{ border: '1px solid rgba(255,255,255,0.2)', padding: 0 }}
        />
      </label>
    </div>
  );
}

export function EditModeToggle() {
  const { isEditMode, toggleEditMode, setEditMode, saveStatus, resetContent, adminToken, setAdminToken, activeTextKey, setActiveTextKey, addCustomTextBox, registeredSections, getContent, updateContent, persistContent } = useCMSStore();
  const { pathname } = useLocation();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSectionsPanel, setShowSectionsPanel] = useState(false);
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
      console.log('[CMS] Login successful, token stored, length:', token.length);
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

  const handleReset = async () => {
    if (window.confirm('Reset all content to default? This cannot be undone.')) {
      resetContent();
      // Persist the empty content to backend so it doesn't reload old data on next visit
      await persistContent();
      window.location.reload();
    }
  };

  const handleLogout = () => {
    setAdminToken(null);
    setEditMode(false);
    setActiveTextKey(null);
  };

  return (
    <>
      <div className="fixed right-6 top-6 z-[9998] flex flex-col items-end gap-2">
        {/* Save Status */}
        {/* Text format bar — shown when an editable text element is focused */}
        {isEditMode && activeTextKey && <TextFormatBar />}

        <div className="flex items-center gap-3">
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

        {/* Add Text Box (only in edit mode) */}
        {isEditMode && (
          <button
            type="button"
            onClick={() => addCustomTextBox(pathname)}
            className="rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-sm text-white/60 backdrop-blur-sm transition-all hover:border-[#0099FF]/50 hover:text-[#0099FF]"
            title="Add text box"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
            </svg>
          </button>
        )}

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

        {/* Sections toggle button */}
        {isEditMode && Object.keys(registeredSections).length > 0 && (
          <button
            type="button"
            onClick={() => setShowSectionsPanel(p => !p)}
            className="rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white"
            style={{ fontFamily: 'Arial,sans-serif' }}
          >
            {showSectionsPanel ? 'Close Sections' : `Sections (${Object.keys(registeredSections).length})`}
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

      {/* Sections Panel — portal so it's never clipped */}
      {isEditMode && showSectionsPanel && createPortal(
        <div style={{
          position: 'fixed', top: 80, right: 24, zIndex: 9997,
          background: 'rgba(10,10,10,0.97)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 10, width: 240,
          boxShadow: '0 4px 24px rgba(0,0,0,0.8)',
          maxHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            padding: '10px 12px 8px', borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'Arial,sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Sections
            </span>
            <button
              type="button"
              onClick={() => setShowSectionsPanel(false)}
              style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: '0 2px' }}
            >×</button>
          </div>
          <div style={{ overflowY: 'auto', padding: '6px 12px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {Object.entries(registeredSections).map(([sectionId, label]) => {
              const isHidden = getContent(`visibility.section.${sectionId}`, 'false') === 'true';
              return (
                <div key={sectionId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '3px 0' }}>
                  <span style={{
                    color: isHidden ? 'rgba(248,113,113,0.85)' : 'rgba(255,255,255,0.75)',
                    fontSize: 12, fontFamily: 'Arial,sans-serif',
                    textDecoration: isHidden ? 'line-through' : 'none',
                    flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {label}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      updateContent(`visibility.section.${sectionId}`, isHidden ? 'false' : 'true');
                      persistContent();
                    }}
                    style={{
                      flexShrink: 0, padding: '2px 8px', borderRadius: 5, fontSize: 11, cursor: 'pointer',
                      fontFamily: 'Arial,sans-serif', fontWeight: 500,
                      border: isHidden ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.2)',
                      background: isHidden ? 'rgba(220,38,38,0.25)' : 'rgba(255,255,255,0.08)',
                      color: isHidden ? 'rgb(248,113,113)' : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {isHidden ? 'Show' : 'Hide'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
