import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface EditHistory {
  past: Record<string, any>[];
  present: Record<string, any>;
  future: Record<string, any>[];
}

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  editedContent: Record<string, any>;
  updateContent: (key: string, value: any) => void;
  isSaving: boolean;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  addListItem: (listId: string, item: any) => void;
  deleteListItem: (listId: string, index: number) => void;
  reorderListItem: (listId: string, fromIndex: number, toIndex: number) => void;
  updateListItem: (listId: string, index: number, updates: any) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const [history, setHistory] = useState<EditHistory>(() => {
    // Load from localStorage on init
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nucleardigital-cms-edits');
      const present = saved ? JSON.parse(saved) : {};
      return {
        past: [],
        present,
        future: [],
      };
    }
    return {
      past: [],
      present: {},
      future: [],
    };
  });

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const updateContent = useCallback((key: string, value: any) => {
    setHistory(prev => {
      const newPresent = { ...prev.present, [key]: value };
      
      // Save to localStorage with save indicator
      setIsSaving(true);
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(newPresent));
        }
        setIsSaving(false);
      }, 300);
      
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: [], // Clear future on new edit
      };
    });
  }, []);

  const undo = useCallback(() => {
    setHistory(prev => {
      if (prev.past.length === 0) return prev;
      
      const previous = prev.past[prev.past.length - 1];
      const newPast = prev.past.slice(0, prev.past.length - 1);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(previous));
      }
      
      return {
        past: newPast,
        present: previous,
        future: [prev.present, ...prev.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setHistory(prev => {
      if (prev.future.length === 0) return prev;
      
      const next = prev.future[0];
      const newFuture = prev.future.slice(1);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(next));
      }
      
      return {
        past: [...prev.past, prev.present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const addListItem = useCallback((listId: string, item: any) => {
    setHistory(prev => {
      const newPresent = { ...prev.present };
      if (!Array.isArray(newPresent[listId])) {
        newPresent[listId] = [];
      }
      newPresent[listId].push(item);
      
      // Save to localStorage with save indicator
      setIsSaving(true);
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(newPresent));
        }
        setIsSaving(false);
      }, 300);
      
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: [], // Clear future on new edit
      };
    });
  }, []);

  const deleteListItem = useCallback((listId: string, index: number) => {
    setHistory(prev => {
      const newPresent = { ...prev.present };
      if (Array.isArray(newPresent[listId])) {
        newPresent[listId].splice(index, 1);
      }
      
      // Save to localStorage with save indicator
      setIsSaving(true);
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(newPresent));
        }
        setIsSaving(false);
      }, 300);
      
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: [], // Clear future on new edit
      };
    });
  }, []);

  const reorderListItem = useCallback((listId: string, fromIndex: number, toIndex: number) => {
    setHistory(prev => {
      const newPresent = { ...prev.present };
      if (Array.isArray(newPresent[listId])) {
        const item = newPresent[listId].splice(fromIndex, 1)[0];
        newPresent[listId].splice(toIndex, 0, item);
      }
      
      // Save to localStorage with save indicator
      setIsSaving(true);
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(newPresent));
        }
        setIsSaving(false);
      }, 300);
      
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: [], // Clear future on new edit
      };
    });
  }, []);

  const updateListItem = useCallback((listId: string, index: number, updates: any) => {
    setHistory(prev => {
      const newPresent = { ...prev.present };
      if (Array.isArray(newPresent[listId])) {
        newPresent[listId][index] = { ...newPresent[listId][index], ...updates };
      }
      
      // Save to localStorage with save indicator
      setIsSaving(true);
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('nucleardigital-cms-edits', JSON.stringify(newPresent));
        }
        setIsSaving(false);
      }, 300);
      
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: [], // Clear future on new edit
      };
    });
  }, []);

  return (
    <EditModeContext.Provider value={{ 
      isEditMode, 
      toggleEditMode, 
      editedContent: history.present, 
      updateContent,
      isSaving,
      undo,
      redo,
      canUndo: history.past.length > 0,
      canRedo: history.future.length > 0,
      addListItem,
      deleteListItem,
      reorderListItem,
      updateListItem,
    }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within EditModeProvider');
  }
  return context;
}