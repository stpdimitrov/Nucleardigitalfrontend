# 🎯 CRUD Operations - Complete Guide

Your Framer-style CMS now supports **full CRUD operations** for lists and grids - Create, Read, Update, and Delete items with drag-and-drop reordering!

---

## 🎬 Live Demo

**Visit `/services/crud` to see CRUD in action!**

The Services page demonstrates:
- ✅ **Create** - Click "+ Add New Service" button
- ✅ **Read** - Services displayed in grid
- ✅ **Update** - Click any text to edit
- ✅ **Delete** - Click red × button on any card
- ✅ **Reorder** - Drag cards to reorder

---

## 🎨 Visual Overview

```
┌────────────────────────────────────────────────────┐
│  EDIT MODE: ON                            [↶][↷][✏️]│
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │[≡][×]       │  │[≡][×]       │  │[≡][×]       ││ ← Controls
│  │  Service 1  │  │  Service 2  │  │  Service 3  ││
│  │  Edit me... │  │  Drag me... │  │  Delete me..││
│  └─────────────┘  └─────────────┘  └─────────────┘│
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │          + Add New Service                   │  │ ← Add button
│  └──────────────────────────────────────────────┘  │
│                                                     │
└────────────────────────────────────────────────────┘

Controls:
[≡] = Drag handle (blue)
[×] = Delete button (red)
```

---

## 📦 Components

### **1. EditableList** - Container

Wraps your entire list/grid and provides the "Add New" button.

```tsx
import { EditableList } from '../components/EditableList';

<EditableList
  id="my-items-list"              // Unique ID for storage
  items={myItems}                  // Your data array
  createNewItem={createNewItem}    // Function to create new items
  renderItem={(item, index) => ( // Render function
    <div>{item.title}</div>
  )}
  gridClassName="grid grid-cols-3 gap-4"  // Grid styling
  addButtonLabel="+ Add New Item"          // Button text
  emptyMessage="No items yet"              // Empty state
/>
```

### **2. EditableListItem** - Wrapper

Wraps each item and provides drag/delete controls.

```tsx
import { EditableListItem } from '../components/EditableListItem';

<EditableListItem
  listId="my-items-list"  // Must match EditableList id
  index={index}            // Current index
  id={item.id}             // Item's unique ID
  className="group"        // Optional styling
>
  {/* Your item content */}
  <div className="p-4 bg-white rounded">
    <h3>{item.title}</h3>
  </div>
</EditableListItem>
```

### **3. EditableListContainer** - DnD Provider

Wraps everything to enable drag-and-drop.

```tsx
import { EditableListContainer } from '../components/EditableListItem';

<EditableListContainer>
  <EditableList {...props} />
</EditableListContainer>
```

---

## 🛠️ Complete Implementation

### **Step 1: Define Your Data**

```tsx
const defaultItems = [
  {
    id: '1',
    title: 'Item 1',
    description: 'First item',
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Second item',
  },
];
```

### **Step 2: Create Factory Function**

```tsx
const createNewItem = () => ({
  id: Date.now().toString(), // Unique ID
  title: 'New Item',
  description: 'Description here',
});
```

### **Step 3: Build Your Component**

```tsx
import { EditableText } from '../components/EditableText';
import { EditableList } from '../components/EditableList';
import { EditableListItem, EditableListContainer } from '../components/EditableListItem';

export function MyListPage() {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-4xl text-white">My Items</h1>
      
      <EditableListContainer>
        <EditableList
          id="my-items"
          items={defaultItems}
          createNewItem={createNewItem}
          gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          addButtonLabel="+ Add New Item"
          renderItem={(item, index) => (
            <EditableListItem
              key={item.id}
              listId="my-items"
              index={index}
              id={item.id}
            >
              <div className="rounded-lg border border-white/20 bg-white/5 p-6">
                {/* Editable Title */}
                <EditableText
                  id={`item-${item.id}-title`}
                  value={item.title}
                  as="h3"
                  className="mb-2 text-xl font-bold text-white"
                />
                
                {/* Editable Description */}
                <EditableText
                  id={`item-${item.id}-description`}
                  value={item.description}
                  as="p"
                  className="text-gray-400"
                  multiline
                />
              </div>
            </EditableListItem>
          )}
        />
      </EditableListContainer>
    </div>
  );
}
```

---

## 🎮 User Experience

### **Create (Add New)**

```
1. User clicks "+ Add New Item" button
2. New card appears at end of list
3. "Saving..." indicator shows
4. Item is saved to localStorage
5. Can immediately edit the new item
```

### **Delete (Remove)**

```
1. Hover over item → Red × button appears
2. Click × → Confirmation dialog
3. User confirms → Item removed with animation
4. "Saving..." indicator shows
5. List auto-adjusts
```

### **Reorder (Drag & Drop)**

```
1. Hover over item → Blue ≡ handle appears
2. Click and drag → Item follows mouse
3. Hover over target position → Blue highlight
4. Release → Item snaps to new position
5. "Saving..." indicator shows
6. New order persisted
```

### **Update (Edit Content)**

```
1. Click any EditableText in item
2. Edit inline (same as before)
3. Press Enter or click away
4. "Saving..." indicator shows
5. Changes saved to that specific item
```

---

## 🎯 Context Functions

The `useEditMode()` hook provides these CRUD functions:

```tsx
const {
  // Create
  addListItem: (listId: string, item: any) => void,
  
  // Delete
  deleteListItem: (listId: string, index: number) => void,
  
  // Reorder
  reorderListItem: (listId: string, fromIndex: number, toIndex: number) => void,
  
  // Update individual item
  updateListItem: (listId: string, index: number, updates: any) => void,
} = useEditMode();
```

### **Manual Usage (Advanced)**

```tsx
import { useEditMode } from '../contexts/EditModeContext';

function MyComponent() {
  const { addListItem, deleteListItem, reorderListItem } = useEditMode();
  
  // Add item
  const handleAdd = () => {
    addListItem('my-list', { id: '123', title: 'New' });
  };
  
  // Delete item
  const handleDelete = () => {
    deleteListItem('my-list', 2); // Delete index 2
  };
  
  // Reorder
  const handleReorder = () => {
    reorderListItem('my-list', 0, 2); // Move item 0 to position 2
  };
  
  return (
    <button onClick={handleAdd}>Add Item</button>
  );
}
```

---

## 🎨 Styling & Animation

### **Drag State**

```tsx
// Item being dragged
opacity-50

// Drop target
scale-105
ring-2 ring-blue-500
```

### **Hover States**

```tsx
// Drag handle
bg-blue-500 hover:bg-blue-600
cursor-move active:cursor-grabbing

// Delete button
bg-red-500 hover:bg-red-600
active:scale-95
```

### **Add Button**

```tsx
border-2 border-dashed border-blue-500/30
hover:border-blue-500/50
hover:bg-blue-500/10
active:scale-[0.98]
```

---

## 💾 Data Storage

### **Storage Structure**

```javascript
// localStorage key: 'newclear-cms-edits'
{
  // Individual content
  "hero-title": "Welcome",
  
  // Lists are stored as arrays
  "my-items": [
    {
      id: '1',
      title: 'Item 1',
      description: 'First item'
    },
    {
      id: '2',
      title: 'Item 2',
      description: 'Second item'
    }
  ],
  
  // Individual item properties (optional)
  "item-1-title": "Custom Title",
  "item-1-description": "Custom Description"
}
```

### **How It Works**

1. **Initial Load**: Uses `items` prop from component
2. **After Edit**: Checks `editedContent[listId]` for saved version
3. **Display**: Shows saved version if available, else original
4. **Create/Delete/Reorder**: Updates entire array
5. **Edit Text**: Updates individual properties

---

## 🔥 Real-World Examples

### **Example 1: Services Grid**

```tsx
<EditableList
  id="services-list"
  items={[
    { id: '1', title: 'Video Editing', icon: '🎬' },
    { id: '2', title: 'Motion Graphics', icon: '⚡' },
  ]}
  createNewItem={() => ({
    id: Date.now().toString(),
    title: 'New Service',
    icon: '✨',
  })}
  renderItem={(service, index) => (
    <EditableListItem listId="services-list" index={index} id={service.id}>
      <ServiceCard service={service} />
    </EditableListItem>
  )}
/>
```

### **Example 2: Team Members**

```tsx
<EditableList
  id="team-members"
  items={teamMembers}
  createNewItem={() => ({
    id: Date.now().toString(),
    name: 'New Team Member',
    role: 'Position',
    image: 'https://via.placeholder.com/300',
  })}
  gridClassName="grid grid-cols-4 gap-6"
  renderItem={(member, index) => (
    <EditableListItem listId="team-members" index={index} id={member.id}>
      <div className="text-center">
        <EditableImage
          id={`member-${member.id}-image`}
          src={member.image}
          alt={member.name}
          className="mb-4 h-40 w-40 rounded-full object-cover"
        />
        <EditableText
          id={`member-${member.id}-name`}
          value={member.name}
          as="h3"
          className="text-xl font-bold text-white"
        />
        <EditableText
          id={`member-${member.id}-role`}
          value={member.role}
          as="p"
          className="text-gray-400"
        />
      </div>
    </EditableListItem>
  )}
/>
```

### **Example 3: Testimonials Carousel**

```tsx
<EditableList
  id="testimonials"
  items={testimonials}
  createNewItem={() => ({
    id: Date.now().toString(),
    quote: 'Your testimonial here',
    author: 'Client Name',
    company: 'Company Name',
  })}
  gridClassName="space-y-4"
  renderItem={(testimonial, index) => (
    <EditableListItem listId="testimonials" index={index} id={testimonial.id}>
      <blockquote className="rounded-lg border border-white/10 bg-white/5 p-6">
        <EditableText
          id={`testimonial-${testimonial.id}-quote`}
          value={testimonial.quote}
          as="p"
          className="mb-4 text-lg italic text-white"
          multiline
        />
        <div className="flex items-center gap-3">
          <EditableText
            id={`testimonial-${testimonial.id}-author`}
            value={testimonial.author}
            as="span"
            className="font-bold text-white"
          />
          <span className="text-gray-500">•</span>
          <EditableText
            id={`testimonial-${testimonial.id}-company`}
            value={testimonial.company}
            as="span"
            className="text-gray-400"
          />
        </div>
      </blockquote>
    </EditableListItem>
  )}
/>
```

---

## ⌨️ Keyboard & Mouse

| Action | Interaction |
|--------|-------------|
| **Add item** | Click "+ Add" button |
| **Delete item** | Click red × button → Confirm |
| **Drag to reorder** | Click blue ≡ and drag |
| **Edit content** | Click any EditableText |
| **Undo** | Cmd+Z |
| **Redo** | Cmd+Shift+Z |

---

## 🎯 Best Practices

### **✅ DO:**

- Use unique, stable IDs for items (UUIDs or timestamps)
- Keep factory functions simple
- Use descriptive list IDs (`services-list`, not `list1`)
- Wrap EditableListItem content in styled containers
- Test with 0 items, 1 item, and many items

### **❌ DON'T:**

- Don't use array index as item ID (unstable on reorder)
- Don't forget EditableListContainer wrapper
- Don't nest EditableList inside EditableListItem
- Don't use same listId for different lists
- Don't manipulate the list array directly

---

## 🚀 Advanced Features

### **Conditional Add Button**

```tsx
<EditableList
  {...props}
  renderItem={(item, index) => {
    // Only show add button if less than 6 items
    const maxItems = 6;
    const itemCount = editedContent['my-list']?.length || items.length;
    
    if (itemCount >= maxItems) {
      return null; // Hides add button
    }
    
    return <EditableListItem {...itemProps} />;
  }}
/>
```

### **Custom Delete Confirmation**

```tsx
<EditableListItem
  {...props}
  onDelete={() => {
    // Custom callback after delete
    console.log('Item deleted!');
    // Trigger analytics, API call, etc.
  }}
/>
```

### **Programmatic CRUD**

```tsx
function MyComponent() {
  const { addListItem, deleteListItem } = useEditMode();
  
  useEffect(() => {
    // Auto-add welcome item on mount
    const hasWelcome = editedContent['items']?.some(
      item => item.id === 'welcome'
    );
    
    if (!hasWelcome) {
      addListItem('items', {
        id: 'welcome',
        title: 'Welcome!',
      });
    }
  }, []);
}
```

---

## 🎬 Try It Now!

1. **Visit `/services/crud`**
2. **Click the pencil icon** (✏️) to enable edit mode
3. **See the controls** appear on each service card:
   - 🔵 Blue ≡ = Drag handle
   - 🔴 Red × = Delete button
4. **Try these actions:**
   - Drag a service card to reorder
   - Click × to delete a service
   - Click "+ Add New Service" to create
   - Edit any text by clicking it
5. **Press Cmd+Z** to undo any action!

---

## 📊 Feature Comparison

| Feature | Framer CMS | Your Custom CMS |
|---------|-----------|----------------|
| Add items | ✅ | ✅ |
| Delete items | ✅ | ✅ |
| Reorder with drag | ✅ | ✅ |
| Inline editing | ✅ | ✅ |
| Undo/Redo | ✅ | ✅ |
| Visual feedback | ✅ | ✅ |
| Auto-save | ✅ | ✅ |
| Keyboard shortcuts | ✅ | ✅ |
| Custom styling | ❌ | ✅ (Full control!) |
| No vendor lock-in | ❌ | ✅ |

---

## 🎉 Summary

You now have **complete CRUD operations** for any list or grid in your app:

✅ **Create** - Click + button to add new items
✅ **Read** - Items display from localStorage or defaults
✅ **Update** - Click any text/image to edit inline
✅ **Delete** - Click × button with confirmation
✅ **Reorder** - Drag and drop with visual feedback
✅ **Undo/Redo** - Full history tracking
✅ **Auto-save** - All changes persist automatically

**Your CMS now matches (and exceeds!) Framer's capabilities.** 🚀
