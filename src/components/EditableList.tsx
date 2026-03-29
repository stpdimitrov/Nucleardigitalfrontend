import { ReactNode } from 'react';
import { useEditMode } from '../contexts/EditModeContext';

interface EditableListProps {
  id: string;
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
  createNewItem: () => any;
  className?: string;
  gridClassName?: string;
  addButtonLabel?: string;
  emptyMessage?: string;
}

export function EditableList({
  id,
  items,
  renderItem,
  createNewItem,
  className = '',
  gridClassName = '',
  addButtonLabel = 'Add New Item',
  emptyMessage = 'No items yet',
}: EditableListProps) {
  const { isEditMode, editedContent, addListItem } = useEditMode();

  // Use edited list if available, otherwise use original items
  const displayItems = editedContent[id] ?? items;

  const handleAddItem = () => {
    const newItem = createNewItem();
    addListItem(id, newItem);
  };

  return (
    <div className={className}>
      {/* Items Grid */}
      {displayItems.length > 0 ? (
        <div className={gridClassName}>
          {displayItems.map((item: any, index: number) => (
            <div key={item.id || index}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      ) : (
        isEditMode && (
          <div className="flex min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-white/20 bg-white/5">
            <p className="text-white/40">{emptyMessage}</p>
          </div>
        )
      )}

      {/* Add New Button (only in edit mode) */}
      {isEditMode && (
        <button
          onClick={handleAddItem}
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 px-6 py-4 text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-[0.98]"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:scale-110"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-medium">{addButtonLabel}</span>
        </button>
      )}
    </div>
  );
}
