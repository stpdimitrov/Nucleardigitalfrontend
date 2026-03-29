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

  // Save status
  saveStatus: SaveStatus;
  setSaveStatus: (status: SaveStatus) => void;

  // Debounced save tracking
  pendingSaves: Set<string>;
  addPendingSave: (key: string) => void;
  removePendingSave: (key: string) => void;
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
      },
      batchUpdateContent: (updates: ContentRegistry) => {
        set((state) => ({
          content: { ...state.content, ...updates },
        }));
      },
      resetContent: () => {
        set({ content: {} });
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
    }),
    {
      name: 'flixen-cms-content',
      partialize: (state) => ({ content: state.content }),
    }
  )
);