import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ContentValue = string;
export type ContentRegistry = Record<string, ContentValue>;

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

export interface CustomTextBox {
  id: string;
  page: string;   // pathname e.g. '/', '/about-us'
  x: number;      // viewport px from left
  y: number;      // viewport px from top
  width: number;  // px
  height?: number; // px — undefined means auto
  content: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
}

interface CMSState {
  // Edit mode state
  isEditMode: boolean;
  toggleEditMode: () => void;
  setEditMode: (enabled: boolean) => void;

  // Registered sections (non-persisted, for EditModeToggle panel)
  registeredSections: Record<string, string>; // sectionId -> label
  registerSection: (sectionId: string, label: string) => void;
  unregisterSection: (sectionId: string) => void;

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

  // Currently focused editable text key + element (for toolbar in EditModeToggle)
  activeTextKey: string | null;
  setActiveTextKey: (key: string | null) => void;
  activeTextEl: HTMLElement | null;
  setActiveTextEl: (el: HTMLElement | null) => void;

  // Custom text boxes (CRUD + drag positioning)
  customTextBoxes: CustomTextBox[];
  addCustomTextBox: (page: string) => void;
  updateCustomTextBox: (id: string, updates: Partial<CustomTextBox>) => void;
  deleteCustomTextBox: (id: string) => void;

  // Per-key position offsets for existing EditableText elements (transform: translate)
  textPositionOffsets: Record<string, { dx: number; dy: number }>;
  setTextPositionOffset: (key: string, offset: { dx: number; dy: number } | null) => void;

  // Hidden text keys (soft-delete existing EditableText elements)
  hiddenTextKeys: Record<string, boolean>;
  setTextHidden: (key: string, hidden: boolean) => void;

  // Per-key size overrides for EditableText elements
  textSizes: Record<string, { width?: number }>;
  setTextSize: (key: string, size: { width?: number } | null) => void;
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

      // Registered sections
      registeredSections: {},
      registerSection: (sectionId: string, label: string) =>
        set((state) => ({ registeredSections: { ...state.registeredSections, [sectionId]: label } })),
      unregisterSection: (sectionId: string) =>
        set((state) => {
          const next = { ...state.registeredSections };
          delete next[sectionId];
          return { registeredSections: next };
        }),

      // Content
      content: {},
      getContent: (key: string, defaultValue: string) => {
        const registry = get().content ?? {};
        const content = registry[key];
        return content !== undefined && content !== '' ? content : defaultValue;
      },
      updateContent: (key: string, value: string) => {
        set((state) => ({
          content: { ...(state.content ?? {}), [key]: value },
        }));
        // Sync to backend if we have an admin token
        const { adminToken, setSaveStatus, content } = get();
        if (adminToken) {
          const updated = { ...(content ?? {}), [key]: value };
          scheduleSyncToBackend(updated, adminToken, setSaveStatus);
        }
      },
      batchUpdateContent: (updates: ContentRegistry) => {
        set((state) => ({
          content: { ...(state.content ?? {}), ...updates },
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

      // Active text element
      activeTextKey: null,
      setActiveTextKey: (key: string | null) => set({ activeTextKey: key }),
      activeTextEl: null,
      setActiveTextEl: (el: HTMLElement | null) => set({ activeTextEl: el }),

      // Custom text boxes
      customTextBoxes: [],
      addCustomTextBox: (page: string) => {
        const box: CustomTextBox = {
          id: `ctb_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          page,
          x: Math.round(window.innerWidth / 2 - 100),
          y: Math.round(window.scrollY + window.innerHeight / 2 - 20),
          width: 200,
          content: 'Text box',
          color: '#ffffff',
        };
        set((state) => ({ customTextBoxes: [...state.customTextBoxes, box] }));
        const { adminToken, setSaveStatus } = get();
        if (adminToken) scheduleSyncToBackend(get().content, adminToken, setSaveStatus);
      },
      updateCustomTextBox: (id: string, updates: Partial<CustomTextBox>) => {
        set((state) => ({
          customTextBoxes: state.customTextBoxes.map((b) => b.id === id ? { ...b, ...updates } : b),
        }));
      },
      deleteCustomTextBox: (id: string) => {
        set((state) => ({ customTextBoxes: state.customTextBoxes.filter((b) => b.id !== id) }));
        const { adminToken, setSaveStatus } = get();
        if (adminToken) scheduleSyncToBackend(get().content, adminToken, setSaveStatus);
      },

      // Text position offsets
      textPositionOffsets: {},
      setTextPositionOffset: (key: string, offset: { dx: number; dy: number } | null) => {
        set((state) => {
          const next = { ...state.textPositionOffsets };
          if (offset === null) { delete next[key]; } else { next[key] = offset; }
          return { textPositionOffsets: next };
        });
        const { adminToken, setSaveStatus } = get();
        if (adminToken) scheduleSyncToBackend(get().content, adminToken, setSaveStatus);
      },

      // Hidden text keys
      hiddenTextKeys: {},
      setTextHidden: (key: string, hidden: boolean) => {
        set((state) => {
          const next = { ...state.hiddenTextKeys };
          if (!hidden) { delete next[key]; } else { next[key] = true; }
          return { hiddenTextKeys: next };
        });
        const { adminToken, setSaveStatus } = get();
        if (adminToken) scheduleSyncToBackend(get().content, adminToken, setSaveStatus);
      },

      // Text size overrides
      textSizes: {},
      setTextSize: (key: string, size: { width?: number } | null) => {
        set((state) => {
          const next = { ...state.textSizes };
          if (size === null) { delete next[key]; } else { next[key] = size; }
          return { textSizes: next };
        });
        const { adminToken, setSaveStatus } = get();
        if (adminToken) scheduleSyncToBackend(get().content, adminToken, setSaveStatus);
      },
    }),
    {
      name: 'nucleardigital-cms-content',
      version: 1,
      // Only persist content, custom text boxes, position offsets, and hidden keys — not auth token or transient state
      partialize: (state) => ({
        content: state.content,
        customTextBoxes: state.customTextBoxes,
        textPositionOffsets: state.textPositionOffsets,
        hiddenTextKeys: state.hiddenTextKeys,
        textSizes: state.textSizes,
      }),
      // Ensure content is always a valid object after rehydration
      merge: (persisted: unknown, current) => {
        const p = (persisted as Partial<CMSState>) ?? {};
        return {
          ...current,
          ...p,
          content: p.content ?? current.content ?? {},
          customTextBoxes: p.customTextBoxes ?? current.customTextBoxes ?? [],
          textPositionOffsets: p.textPositionOffsets ?? current.textPositionOffsets ?? {},
          hiddenTextKeys: p.hiddenTextKeys ?? current.hiddenTextKeys ?? {},
          textSizes: p.textSizes ?? current.textSizes ?? {},
        };
      },
    }
  )
);
