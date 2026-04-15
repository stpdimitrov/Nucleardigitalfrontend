import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ContentValue = string;
export type ContentRegistry = Record<string, ContentValue>;

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface CMSState {
  // Edit mode state
  isEditMode: boolean;
  toggleEditMode: () => void;
  setEditMode: (enabled: boolean) => void;

  // Content registry
  content: ContentRegistry;
  getContent: (key: string, defaultValue: string) => string;
  updateContent: (key: string, value: string) => void;
  batchUpdateContent: (updates: ContentRegistry) => void;
  resetContent: () => void;

  // Explicit backend persistence (skips debounce — call after critical saves)
  persistContent: () => Promise<void>;

  // Save status
  saveStatus: SaveStatus;
  setSaveStatus: (status: SaveStatus) => void;

  // Debounced save tracking
  pendingSaves: Set<string>;
  addPendingSave: (key: string) => void;
  removePendingSave: (key: string) => void;

  // Admin auth token (not persisted — session only)
  adminToken: string | null;
  setAdminToken: (token: string | null) => void;
}

// Module-level debounce timer for backend sync
let syncTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleSyncToBackend(content: ContentRegistry, token: string, setSaveStatus: (s: SaveStatus) => void) {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    setSaveStatus('saving');
    try {
      // Lazy import to avoid circular deps
      const { adminUpdateSiteSetting } = await import('../../services/api');
      const json = JSON.stringify(content);
      await adminUpdateSiteSetting(token, 'cms_frontend_content', json, json);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err) {
      console.warn('[CMS] Backend sync failed:', err);
      setSaveStatus('error');
    }
  }, 1500);
}

export const useCMSStore = create<CMSState>()(
  persist(
    (set, get) => ({
      // Edit mode
      isEditMode: false,
      toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
      setEditMode: (enabled: boolean) => set({ isEditMode: enabled }),

      // Content
      content: {},
      getContent: (key: string, defaultValue: string) => {
        const content = get().content[key];
        return content !== undefined && content !== '' ? content : defaultValue;
      },
      updateContent: (key: string, value: string) => {
        set((state) => ({
          content: { ...state.content, [key]: value },
        }));
        // Sync to backend if we have an admin token
        const { adminToken, setSaveStatus, content } = get();
        if (adminToken) {
          const updated = { ...content, [key]: value };
          scheduleSyncToBackend(updated, adminToken, setSaveStatus);
        }
      },
      batchUpdateContent: (updates: ContentRegistry) => {
        set((state) => ({
          content: { ...state.content, ...updates },
        }));
      },
      resetContent: () => {
        set({ content: {} });
      },

      // Immediate backend persistence — bypasses the debounce timer
      persistContent: async () => {
        const { adminToken, content, setSaveStatus } = get();
        if (!adminToken) {
          console.warn('[CMS] persistContent: no adminToken, skipping');
          return;
        }
        // Cancel any pending debounced sync before we start our own save
        if (syncTimer) { clearTimeout(syncTimer); syncTimer = null; }
        setSaveStatus('saving');
        try {
          const { adminUpdateSiteSetting } = await import('../../services/api');
          const json = JSON.stringify(content);
          console.log('[CMS] persistContent: saving', Object.keys(content).length, 'keys to backend');
          await adminUpdateSiteSetting(adminToken, 'cms_frontend_content', json, json);
          setSaveStatus('saved');
          setTimeout(() => setSaveStatus('idle'), 2000);
        } catch (err) {
          console.error('[CMS] persistContent failed:', err);
          setSaveStatus('error');
        }
      },

      // Save status
      saveStatus: 'idle',
      setSaveStatus: (status: SaveStatus) => set({ saveStatus: status }),

      // Pending saves
      pendingSaves: new Set(),
      addPendingSave: (key: string) => {
        const pendingSaves = new Set(get().pendingSaves);
        pendingSaves.add(key);
        set({ pendingSaves });
      },
      removePendingSave: (key: string) => {
        const pendingSaves = new Set(get().pendingSaves);
        pendingSaves.delete(key);
        set({ pendingSaves });
      },

      // Admin token (session only — not persisted)
      adminToken: null,
      setAdminToken: (token: string | null) => set({ adminToken: token }),
    }),
    {
      name: 'flixen-cms-content',
      // Only persist content, not auth token or transient state
      partialize: (state) => ({ content: state.content }),
    }
  )
);
