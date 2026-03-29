import { useState, useRef, ReactNode } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEditMode } from '../contexts/EditModeContext';

interface EditableListItemProps {
  listId: string;
  index: number;
  id?: string;
  children: ReactNode;
  onDelete?: () => void;
  className?: string;
}

const ItemType = 'LIST_ITEM';

function DraggableItem({
  listId,
  index,
  children,
  onDelete,
  className = '',
}: Omit<EditableListItemProps, 'id'>) {
  const { isEditMode, deleteListItem, reorderListItem } = useEditMode();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Drag and Drop
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { listId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    hover: (item: { listId: string; index: number }) => {
      if (!ref.current) return;
      if (item.listId !== listId) return;
      if (item.index === index) return;

      reorderListItem(listId, item.index, index);
      item.index = index;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    canDrop: (item) => item.listId === listId,
  });

  drag(drop(ref));

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteListItem(listId, index);
      onDelete?.();
    }
  };

  return (
    <div
      ref={ref}
      className={`relative ${className} ${isDragging ? 'opacity-50' : ''} ${
        isOver ? 'scale-105' : ''
      } transition-all`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Drag & Delete Controls (only in edit mode) */}
      {isEditMode && (
        <div
          className={`absolute -left-3 -top-3 z-10 flex gap-1 transition-all ${
            isHovered ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
          }`}
        >
          {/* Drag Handle */}
          <div
            className="flex h-7 w-7 cursor-move items-center justify-center rounded-md bg-blue-500 text-white shadow-lg hover:bg-blue-600 active:cursor-grabbing"
            title="Drag to reorder"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3h4M6 8h4M6 13h4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-white shadow-lg transition-all hover:bg-red-600 active:scale-95"
            title="Delete item"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Item Content */}
      <div
        className={`${
          isEditMode
            ? 'cursor-move rounded-lg transition-all hover:ring-2 hover:ring-blue-500/50 hover:ring-offset-2 hover:ring-offset-black'
            : ''
        }`}
      >
        {children}
      </div>

      {/* Reorder indicator */}
      {isOver && (
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-black" />
      )}
    </div>
  );
}

export function EditableListItem(props: EditableListItemProps) {
  const { isEditMode } = useEditMode();

  // Only wrap with DndProvider if in edit mode
  if (!isEditMode) {
    return <div className={props.className}>{props.children}</div>;
  }

  return <DraggableItem {...props} />;
}

// Wrapper component to provide DnD context for entire list
export function EditableListContainer({ children }: { children: ReactNode }) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
