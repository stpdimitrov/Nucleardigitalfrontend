# 🎯 Team CRUD - Complete Guide

Smart CRUD operations for managing your team members with a modal-based interface, just like Framer CMS.

---

## 🎬 Live Demo

**Visit `/about-us/editable` to see Team CRUD in action!**

### What You Can Do:
- ✅ **Create** - Click "+ Add Team Member" button
- ✅ **Read** - View all team members in grid
- ✅ **Update** - Click edit (pencil) button on any card
- ✅ **Delete** - Click delete (×) button on any card
- ✅ **Reorder** - Drag & drop team cards

---

## 📦 Component

### **EditableTeamSection**

Located in: `/src/cms/EditableTeamSection.tsx`

```tsx
import { EditableTeamSection, TeamMember } from '../src/cms/EditableTeamSection';

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Liam Carter',
    role: 'Creative Director',
    image: 'https://...',
    twitter: 'https://x.com/...',
    dribbble: 'https://dribbble.com/...',
    instagram: 'https://www.instagram.com/...',
    linkedin: 'https://www.linkedin.com/...',
  },
  // ... more members
];

<EditableTeamSection defaultMembers={defaultMembers} />
```

---

## 🎨 Features

### **1. Add New Member**

When edit mode is ON:
1. Click "+ Add Team Member" button
2. Modal opens with form fields:
   - Full Name (required)
   - Role / Title (required)
   - Profile Image URL (required)
   - Social Links (optional):
     - Twitter / X
     - Dribbble
     - Instagram
     - LinkedIn
3. Fill in details
4. Click "Save"
5. New member appears in grid

### **2. Edit Existing Member**

1. Hover over team card
2. Click blue **pencil** button (edit)
3. Modal opens pre-filled with current data
4. Make your changes
5. Click "Save"
6. Card updates instantly

### **3. Delete Member**

1. Hover over team card
2. Click red **×** button (delete)
3. Confirmation dialog appears
4. Confirm deletion
5. Member removed from grid

### **4. Reorder Members**

1. In edit mode, hover over any card
2. Click and drag the card
3. Drop it in the new position
4. Order saves automatically

---

## 💾 Data Structure

### **TeamMember Interface**

```typescript
interface TeamMember {
  id: string;              // Unique ID (timestamp or UUID)
  name: string;            // Full name
  role: string;            // Job title
  image: string;           // Profile image URL
  twitter?: string;        // Optional social links
  dribbble?: string;
  instagram?: string;
  linkedin?: string;
}
```

### **Storage Format**

Stored in localStorage under key: `team.members`

```json
{
  "newclear-cms-content": {
    "state": {
      "content": {
        "team.members": "[{\"id\":\"1\",\"name\":\"Liam Carter\",\"role\":\"Creative Director\",\"image\":\"...\",\"twitter\":\"...\"}]"
      }
    }
  }
}
```

---

## 🎭 User Experience

### **Modal Interface**

Inspired by Framer CMS:
- Dark backdrop with blur
- Centered modal with clean form
- Real-time image preview
- Keyboard navigation (Enter to submit, Escape to cancel)
- Validation (required fields)

### **Drag & Drop**

- Smooth animations
- Visual feedback on hover
- Blue ring indicator on drop target
- Auto-save after reorder

### **Edit/Delete Controls**

- Appear on hover (card must be hovered)
- Blue pencil for edit
- Red × for delete
- Positioned top-right of card
- Hidden when edit mode is OFF

---

## 🎯 Visual Design

### **Team Card Layout**

```
┌──────────────────────────────────────────┐
│  [Edit] [Delete]  ← Controls (hover)     │
│  ┌──────────┐  ┌─────────────────────┐  │
│  │          │  │  Name                │  │
│  │  Image   │  │  Role                │  │
│  │          │  │                      │  │
│  │          │  │  [X] [D] [I] [L]     │  │
│  └──────────┘  └─────────────────────┘  │
└──────────────────────────────────────────┘
```

### **Add New Button** (Edit Mode Only)

```
┌──────────────────────────────────────────┐
│         + Add Team Member                │
│  (Dashed border, blue theme)             │
└──────────────────────────────────────────┘
```

### **Modal Form**

```
┌──────────────────────────────────────────┐
│  New Team Member                    [×]  │
│                                          │
│  Full Name                               │
│  ┌────────────────────────────────────┐  │
│  │ e.g. Liam Carter                   │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Role / Title                            │
│  ┌────────────────────────────────────┐  │
│  │ e.g. Creative Director             │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Profile Image URL                       │
│  ┌────────────────────────────────────┐  │
│  │ https://...                        │  │
│  └────────────────────────────────────┘  │
│  [Preview Image]                         │
│                                          │
│  Social Links (Optional)                 │
│  ┌────────────────────────────────────┐  │
│  │ Twitter / X URL                    │  │
│  │ Dribbble URL                       │  │
│  │ Instagram URL                      │  │
│  │ LinkedIn URL                       │  │
│  └────────────────────────────────────┘  │
│                                          │
│  [Cancel]              [Save]            │
└──────────────────────────────────────────┘
```

---

## 🔧 Implementation Guide

### **Step 1: Import Component**

```tsx
import { EditableTeamSection, TeamMember } from '../src/cms/EditableTeamSection';
```

### **Step 2: Define Default Members**

```tsx
const defaultTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Liam Carter',
    role: 'Creative Director',
    image: imgProfileImage,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  // Add more members...
];
```

### **Step 3: Use Component**

```tsx
export function AboutUsPageEditable() {
  return (
    <div className="bg-black flex flex-col min-h-screen relative w-full">
      <EditableHeroSection />
      <EditableTeamSection defaultMembers={defaultTeamMembers} />
      <VideoSection />
    </div>
  );
}
```

---

## 🎮 How to Use

### **Enable Edit Mode**

1. Press `Cmd+E` (Mac) or `Ctrl+E` (Windows)
2. Or click "Edit Mode" button (top-right)

### **Add a Team Member**

1. Enable edit mode
2. Scroll to team section
3. Click "+ Add Team Member" (blue dashed button)
4. Fill in the form:
   - Full Name: `John Doe`
   - Role: `Lead Designer`
   - Image URL: `https://via.placeholder.com/300`
   - Optional: Add social links
5. Click "Save"
6. New card appears!

### **Edit a Team Member**

1. Enable edit mode
2. Hover over any team card
3. Click blue **pencil** icon (top-right)
4. Update any fields
5. Click "Save"

### **Delete a Team Member**

1. Enable edit mode
2. Hover over team card
3. Click red **×** icon (top-right)
4. Confirm deletion
5. Card removed

### **Reorder Team**

1. Enable edit mode
2. Click and hold on any card
3. Drag to new position
4. Release
5. Order saved automatically

---

## 💡 Advanced Usage

### **Custom Default Members**

```tsx
import { EditableTeamSection, TeamMember } from '../src/cms/EditableTeamSection';

// Load from API
const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

useEffect(() => {
  fetch('/api/team')
    .then(res => res.json())
    .then(data => setTeamMembers(data));
}, []);

<EditableTeamSection defaultMembers={teamMembers} />
```

### **Sync with Backend**

The component already saves to localStorage. To sync with backend:

Update `/src/cms/contentApi.ts`:

```typescript
async saveContent(patch: Partial<ContentRegistry>): Promise<void> {
  // Save to localStorage (existing)
  // ...
  
  // Also save to backend
  if (patch['team.members']) {
    await fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: patch['team.members'],
    });
  }
}
```

### **Image Upload Integration**

Replace URL input with file upload:

```tsx
// In TeamMemberModal component
const handleImageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });
  
  const { url } = await response.json();
  setFormData({ ...formData, image: url });
};
```

---

## 🎨 Customization

### **Change Card Style**

Edit `/src/cms/EditableTeamSection.tsx`:

```tsx
// Update card background
<div className="bg-[#242424]...">
  ↓
<div className="bg-gradient-to-br from-gray-800 to-gray-900...">
```

### **Change Modal Style**

```tsx
// Update modal container
<div className="bg-[#1a1a1a]...">
  ↓
<div className="bg-gradient-to-b from-gray-900 to-black...">
```

### **Add More Fields**

```typescript
// Update TeamMember interface
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;        // ← New field
  email?: string;      // ← New field
  // ... existing social links
}

// Add to modal form
<div>
  <label>Bio</label>
  <textarea
    value={formData.bio || ''}
    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
  />
</div>
```

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle Edit Mode | `Cmd/Ctrl + E` |
| Submit Modal | `Enter` |
| Close Modal | `Escape` |
| Save Changes | Click outside or `Enter` |

---

## 🚀 Best Practices

### ✅ DO:

- Use high-quality profile images (min 300x300px)
- Keep role titles short and clear
- Provide at least one social link
- Use stable IDs (timestamps work well)
- Test with 0, 1, and many members

### ❌ DON'T:

- Don't use random IDs that change
- Don't leave required fields empty
- Don't use broken image URLs
- Don't skip the confirmation on delete
- Don't forget to save after editing

---

## 🔍 Troubleshooting

### Team Members Not Saving

1. Check console for errors
2. Verify localStorage quota not exceeded
3. Check network tab for API errors
4. Clear localStorage and try again

### Drag & Drop Not Working

1. Ensure edit mode is ON
2. Check if react-dnd is installed: `npm install react-dnd react-dnd-html5-backend`
3. Verify DndProvider wraps the component

### Modal Not Opening

1. Check if `isEditMode` is true
2. Verify modal state is managed correctly
3. Check z-index conflicts (modal uses z-[9999])

---

## 📊 Comparison: Before & After

| Feature | Before | With CRUD |
|---------|--------|-----------|
| Add member | Edit code | Click button |
| Edit member | Edit code | Click pencil |
| Delete member | Edit code | Click × |
| Reorder | Edit code | Drag & drop |
| Update time | Deploy | Instant |
| Technical skill | Developer | Anyone |

---

## 🎯 Real-World Example

### Use Case: Agency Team Page

**Scenario:** Marketing manager wants to add new hire

**Before (Manual):**
1. Ask developer
2. Wait for availability
3. Provide details via email
4. Wait for code changes
5. Wait for deployment
6. **Time: 2-3 days**

**After (CRUD):**
1. Enable edit mode (Cmd+E)
2. Click "+ Add Team Member"
3. Fill in form
4. Click "Save"
5. **Time: 30 seconds** ✅

---

## 🎉 Summary

You now have **smart CRUD operations** for team management:

✅ **Modal-based interface** (like Framer CMS)
✅ **Full CRUD** (Create, Read, Update, Delete)
✅ **Drag & drop reordering**
✅ **Edit/Delete on hover** (professional UX)
✅ **Image preview in modal**
✅ **Social links support**
✅ **Auto-save to localStorage**
✅ **Keyboard navigation**
✅ **Confirmation dialogs**
✅ **TypeScript types**

**Try it now at `/about-us/editable`!** 🚀
