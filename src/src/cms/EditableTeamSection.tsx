import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useDrag, useDrop } from 'react-dnd';
import { useCMSStore } from './cmsStore';
import { EditableGridItem } from './EditableGridItem';
import { EditableGridContainer } from './EditableGridContainer';
import { EditableText } from './EditableText';
import { EditableLink } from './EditableLink';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  twitter?: string;
  dribbble?: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
}

function TeamMemberModal({ member, isOpen, onClose, onSave }: TeamMemberModalProps) {
  const [formData, setFormData] = useState<TeamMember>(
    member || {
      id: Date.now().toString(),
      name: '',
      role: '',
      image: '',
      twitter: '',
      dribbble: '',
      instagram: '',
      linkedin: '',
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[600px] rounded-xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">
              {member ? 'Edit Team Member' : 'New Team Member'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                placeholder="e.g. Liam Carter"
              />
            </div>

            {/* Role */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Role / Title
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                placeholder="e.g. Creative Director"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Profile Image URL
              </label>
              <input
                type="url"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                placeholder="https://..."
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 h-24 w-24 rounded-lg object-cover"
                />
              )}
            </div>

            {/* Social Links */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-3 text-sm font-medium text-white/80">Social Links (Optional)</h3>
              <div className="space-y-3">
                <input
                  type="url"
                  value={formData.twitter || ''}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                  placeholder="Twitter / X URL"
                />
                <input
                  type="url"
                  value={formData.dribbble || ''}
                  onChange={(e) => setFormData({ ...formData, dribbble: e.target.value })}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                  placeholder="Dribbble URL"
                />
                <input
                  type="url"
                  value={formData.instagram || ''}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                  placeholder="Instagram URL"
                />
                <input
                  type="url"
                  value={formData.linkedin || ''}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                  placeholder="LinkedIn URL"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

interface DraggableTeamCardProps {
  member: TeamMember;
  index: number;
  isEditMode: boolean;
  onEdit: () => void;
  onDelete: () => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

function DraggableTeamCard({
  member,
  index,
  isEditMode,
  onEdit,
  onDelete,
  moveCard,
}: DraggableTeamCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'TEAM_MEMBER',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'TEAM_MEMBER',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`group relative transition-all ${isDragging ? 'opacity-50' : ''} ${
        isOver ? 'scale-[1.02]' : ''
      }`}
    >
      {/* Edit/Delete Controls */}
      {isEditMode && (
        <div className="absolute -right-2 -top-2 z-10 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={onEdit}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
            title="Edit"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600"
            title="Delete"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Team Card */}
      <div
        className={`bg-[#242424] content-stretch flex gap-[18px] items-start justify-center overflow-clip p-[12px] w-full ${
          isEditMode ? 'cursor-move' : ''
        }`}
      >
        {/* Profile Image */}
        <div className="flex-[1_0_0] h-[250px] min-h-px min-w-px overflow-clip relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={member.name}
              className="absolute h-[110.53%] left-0 max-w-none top-[-5.27%] w-full object-cover"
              src={member.image}
            />
          </div>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px overflow-clip relative self-stretch">
          {/* Name & Role */}
          <div className="content-stretch flex flex-col gap-[1.99px] items-start overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.6px] text-white tracking-[-0.84px] w-full">
                <p className="leading-[29.4px] whitespace-pre-wrap">{member.name}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full">
                <p className="leading-[24px] whitespace-pre-wrap">{member.role}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[8px] relative shrink-0 border border-[rgba(255,255,255,0.2)] hover:border-white/40"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path d="M15 3.125L10 8.125M10 11.875L5 16.875M16.25 3.125L11.1033 8.78667M8.89667 11.2133L3.75 16.875" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {member.dribbble && (
              <a
                href={member.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[8px] relative shrink-0 border border-[rgba(255,255,255,0.2)] hover:border-white/40"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.25" />
                </svg>
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[8px] relative shrink-0 border border-[rgba(255,255,255,0.2)] hover:border-white/40"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <rect x="3.75" y="3.75" width="12.5" height="12.5" rx="3.75" stroke="white" strokeWidth="1.25" />
                  <circle cx="10" cy="10" r="3.125" stroke="white" strokeWidth="1.25" />
                </svg>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[8px] relative shrink-0 border border-[rgba(255,255,255,0.2)] hover:border-white/40"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path d="M13.75 6.875C14.7446 6.875 15.6984 7.27009 16.4017 7.97335C17.1049 8.67661 17.5 9.63044 17.5 10.625V17.5H14.375V10.625C14.375 10.2935 14.2433 9.97554 14.0089 9.74112C13.7745 9.5067 13.4565 9.375 13.125 9.375C12.7935 9.375 12.4755 9.5067 12.2411 9.74112C12.0067 9.97554 11.875 10.2935 11.875 10.625V17.5H8.75V10.625C8.75 9.63044 9.14509 8.67661 9.84835 7.97335C10.5516 7.27009 11.5054 6.875 12.5 6.875H13.75Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.625 8.125H2.5V17.5H5.625V8.125Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.0625 5.625C4.92591 5.625 5.625 4.92591 5.625 4.0625C5.625 3.19909 4.92591 2.5 4.0625 2.5C3.19909 2.5 2.5 3.19909 2.5 4.0625C2.5 4.92591 3.19909 5.625 4.0625 5.625Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Drag indicator overlay */}
      {isOver && isEditMode && (
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-black" />
      )}
    </div>
  );
}

interface EditableTeamSectionProps {
  defaultMembers: TeamMember[];
}

export function EditableTeamSection({ defaultMembers = [] }: EditableTeamSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, persistContent } = useCMSStore();
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get team members from store or use defaults
  const storedMembersStr = getContent('team.members', '');
  
  const members = useMemo(() => {
    // Parse stored members safely
    if (storedMembersStr && storedMembersStr.trim() !== '') {
      try {
        const parsed = JSON.parse(storedMembersStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          console.log('Loaded team members from CMS:', parsed);
          return parsed as TeamMember[];
        }
      } catch (error) {
        console.error('Failed to parse team members:', error);
      }
    }
    
    // Return default members if no stored members or parsing failed
    console.log('Using default team members:', defaultMembers);
    return Array.isArray(defaultMembers) ? defaultMembers : [];
  }, [storedMembersStr, defaultMembers]);

  const saveMembers = async (updatedMembers: TeamMember[]) => {
    try {
      setSaveStatus('saving');
      const serialized = JSON.stringify(updatedMembers);
      updateContent('team.members', serialized);
      await persistContent();
    } catch (error) {
      console.error('Failed to save team members:', error);
      setSaveStatus('error');
    }
  };

  const handleAddMember = () => {
    setModalMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setModalMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id: string) => {
    if (window.confirm('Are you sure you want to remove this team member?')) {
      const updated = members.filter((m) => m.id !== id);
      saveMembers(updated);
    }
  };

  const handleSaveMember = (member: TeamMember) => {
    let updated: TeamMember[];
    if (modalMember) {
      // Edit existing
      updated = members.map((m) => (m.id === member.id ? member : m));
    } else {
      // Add new
      updated = [...members, member];
    }
    saveMembers(updated);
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const updated = [...members];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(hoverIndex, 0, removed);
    saveMembers(updated);
  };

  const handleResetToDefaults = async () => {
    if (window.confirm('Reset team members to defaults? This will delete all custom changes.')) {
      try {
        setSaveStatus('saving');
        // Clear from store
        updateContent('team.members', '');
        await persistContent();
        // Force page reload to show defaults
        window.location.reload();
      } catch (error) {
        console.error('Failed to reset team members:', error);
        setSaveStatus('error');
      }
    }
  };

  return (
    <>
      <div className="content-stretch flex flex-col gap-[64px] items-center pb-[72px] pt-[100px] px-[24px] md:px-[60px] lg:px-[100px] xl:px-[140px] 2xl:px-[340px] relative w-full">{/* Removed DndProvider wrapper */}
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0">
          {/* Header */}
          <div className="flex items-start justify-between overflow-clip relative shrink-0 w-full gap-[40px]">
            <div className="content-stretch flex items-center justify-center overflow-clip shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <EditableText
                    contentKey="team.sectionLabel"
                    defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap'><p class='leading-[22.4px]'>Our team</p></div>"
                    as="div"
                    className=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[8px] overflow-clip flex-1">
              <div className="content-stretch flex flex-col items-center">
                <EditableText
                  contentKey="team.title"
                  defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.4px] text-white tracking-[-1.44px] whitespace-nowrap'><p class='leading-[50.4px]'>The Creative Team</p></div>"
                  as="div"
                  className=""
                />
              </div>
              <div className="content-stretch flex flex-col items-center opacity-70">
                <EditableText
                  contentKey="team.subtitle"
                  defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] text-center'><p class='mb-0'>Meet the talented creatives behind Newclear Digital, dedicated to </p><p>crafting exceptional visuals &amp; bringing every story to life.</p></div>"
                  as="div"
                  className=""
                  multiline
                />
              </div>
            </div>

            <EditableLink
              contentKey="team.joinTeamLink"
              defaultValue="https://primary-words-404174.framer.app/contact-us"
              className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] shrink-0"
            >
              <EditableText
                contentKey="team.joinTeamText"
                defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap'><p class='cursor-pointer leading-[22.4px]'>Join our team</p></div>"
                as="div"
                className=""
              />
              <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
                <svg className="h-4 w-4" viewBox="0 0 15 15" fill="none">
                  <path d="M5.625 3.75L9.375 7.5L5.625 11.25" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </EditableLink>
          </div>

          {/* Team Grid */}
          <EditableGridContainer
            contentKey="team.grid"
            defaultColumnSpan={2}
            maxColumnSpan={4}
            variants={[]}
            className="gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          >
            {members.map((member, index) => (
              <DraggableTeamCard
                key={member.id}
                member={member}
                index={index}
                isEditMode={isEditMode}
                onEdit={() => handleEditMember(member)}
                onDelete={() => handleDeleteMember(member.id)}
                moveCard={moveCard}
              />
            ))}
          </EditableGridContainer>

          {/* Add New Button (only in edit mode) */}
          {isEditMode && (
            <button
              onClick={handleAddMember}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 px-6 py-6 text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-[0.98]"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-medium">Add Team Member</span>
            </button>
          )}

          {/* Reset to Defaults Button (only in edit mode) */}
          {isEditMode && (
            <button
              onClick={handleResetToDefaults}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-red-500/30 bg-red-500/5 px-6 py-6 text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 active:scale-[0.98]"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-medium">Reset to Defaults</span>
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        member={modalMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveMember}
      />
    </>
  );
}