import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCMSStore } from './cmsStore';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { EditableGridItem } from './EditableGridItem';
import { ImageUploadField } from './ImageUploadField';
import { adminCreateProject, adminUpdateProject, adminDeleteProject } from '../../services/api';

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  date: string;
  service: string;
  serviceId?: string;
  clientName: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  availableServices: ServiceOption[];
}

function ProjectModal({ project, isOpen, onClose, onSave, availableServices }: ProjectModalProps) {
  const emptyProject = (): Project => ({
    id: Date.now().toString(),
    title: '',
    slug: '',
    shortDescription: '',
    date: new Date().toISOString().split('T')[0],
    service: '',
    clientName: '',
    thumbnailUrl: '',
    videoUrl: '',
  });

  const [formData, setFormData] = useState<Project>(project || emptyProject());

  // Reset form whenever the modal opens or the target project changes
  useEffect(() => {
    if (isOpen) {
      const base = project || emptyProject();
      // If no service is assigned yet, default to the first available service
      if (!base.serviceId && !base.service && availableServices.length > 0) {
        const first = availableServices[0];
        base.serviceId = first.id;
        base.service = first.title;
      }
      setFormData(base);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, project?.id]);

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
      <div className="relative z-10 w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">
              {project ? 'Edit Project' : 'New Item'}
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
            {/* Project Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Project Name
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-[#333]"
                placeholder="e.g. Lumen Brew"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Slug
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') }))}
                className="w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-[#333]"
                placeholder="e.g. lumen-brew"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Short description
              </label>
              <input
                type="text"
                required
                value={formData.shortDescription}
                onChange={(e) => setFormData((prev) => ({ ...prev, shortDescription: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-[#333]"
                placeholder="Brief project description"
              />
            </div>

            {/* Services */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Services
              </label>
              <select
                required
                value={formData.serviceId || formData.service}
                onChange={(e) => {
                  const chosen = availableServices.find(s => s.id === e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    serviceId: chosen?.id || '',
                    service: chosen?.title || e.target.value,
                  }));
                }}
                className="w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-[#333]"
              >
                {availableServices.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Client Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Client Name
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData((prev) => ({ ...prev, clientName: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-[#333]"
                placeholder="Client or company name"
              />
            </div>

            {/* Thumbnail Image */}
            <ImageUploadField
              label="Thumbnail Image / Video"
              value={formData.thumbnailUrl}
              onChange={(url) => setFormData((prev) => ({ ...prev, thumbnailUrl: url }))}
              acceptVideo
            />

            {/* Video (Optional) */}
            <ImageUploadField
              label="Video (Optional)"
              value={formData.videoUrl || ''}
              onChange={(url) => setFormData((prev) => ({ ...prev, videoUrl: url }))}
              acceptVideo
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-[#333] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#444]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-[#999] px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-[#aaa]"
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

interface DraggableProjectCardProps {
  project: Project;
  index: number;
  isEditMode: boolean;
  onEdit: () => void;
  onDelete: () => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  availableServices: ServiceOption[];
}

function DraggableProjectCard({
  project,
  index,
  isEditMode,
  onEdit,
  onDelete,
  moveCard,
  availableServices,
}: DraggableProjectCardProps) {
  const serviceLabel =
    availableServices.find(s => s.id === project.serviceId)?.title ||
    availableServices.find(s => s.title.toLowerCase() === project.service?.toLowerCase())?.title ||
    (availableServices.length > 0 ? '' : project.service);
  const [{ isDragging }, drag] = useDrag({
    type: 'PROJECT',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'PROJECT',
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
    <motion.div
      ref={(node) => drag(drop(node))}
      aria-label="Project card"
      className={`self-start justify-self-start relative w-full group transition-all ${isDragging ? 'opacity-50' : ''} ${
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

      {/* Project Card */}
      <Link
        to={isEditMode ? '#' : `/projects/${project.slug}`}
        aria-label="Project card"
        className={`items-center flex h-min justify-center relative w-full text-[rgb(0,_0,_238)] gap-[10px] min-h-[440px] ${
          isEditMode ? 'pointer-events-none cursor-move' : ''
        }`}
        style={{"textDecoration":"rgb(0, 0, 238)"}}
        onClick={(e) => isEditMode && e.preventDefault()}
      >
        <div aria-label="BG blur" className="absolute w-full h-[175px] left-[0%] bottom-0 backdrop-blur-[10px] z-[2] shrink-[0]"></div>
        <div aria-label="Video" className="size-full pointer-events-none absolute left-[0%] top-[0%] z-[1] shrink-[0]">
          {(() => {
            const isVideo = (url?: string) => !!url && /\.(mp4|webm|ogg)(\?|$)/i.test(url);
            const videoSrc = isVideo(project.videoUrl) ? project.videoUrl : isVideo(project.thumbnailUrl) ? project.thumbnailUrl : null;
            return videoSrc ? (
              <video src={videoSrc} className="size-full object-cover overflow-clip pointer-events-none" autoPlay muted loop playsInline></video>
            ) : (
              <img
                src={project.thumbnailUrl || project.videoUrl}
                alt={project.title}
                className="size-full object-cover overflow-clip pointer-events-none"
              />
            );
          })()}
        </div>
        <div aria-label="Text" className="items-start flex flex-col h-min justify-center absolute w-full left-[50%] bottom-0 gap-[16px] p-5 translate-x-[-50%] z-[3] shrink-[0]">
          <div aria-label="Heading" className="items-center flex flex-col h-min justify-center relative w-full gap-[8px] shrink-[0]">
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full z-[2] shrink-[0]">
              <h6 className="font-medium text-left text-white text-[28px] tracking-[-0.84px] leading-[29.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{project.title}</h6>
            </div>
          </div>
          {serviceLabel && (
            <div aria-label="Details" className="items-center flex h-min justify-start relative w-full gap-[8px] shrink-[0]">
              <div aria-label="Service" className="items-center flex size-min justify-center overflow-clip relative bg-white/10 gap-[4px] pt-1 pr-3 pb-1 pl-3 rounded-[62.5rem] border-[0.8px] border-solid border-white/20 backdrop-blur-[10px] shrink-[0]">
                <div aria-label="Label" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-white text-[11px] tracking-[-0.16px] leading-[16px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>
                    {serviceLabel}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Drag indicator overlay */}
      {isOver && isEditMode && (
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-black" />
      )}
    </motion.div>
  );
}

interface ServiceOption { id: string; title: string; }

interface EditableProjectsSectionProps {
  defaultProjects: Project[];
  availableServices?: ServiceOption[];
}

export function EditableProjectsSection({ defaultProjects = [], availableServices = [] }: EditableProjectsSectionProps) {
  const { isEditMode, content, updateContent, setSaveStatus, adminToken } = useCMSStore();
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGridSettings, setShowGridSettings] = useState(false);

  // Get grid columns from store or use default - read directly from content object for reactivity
  const gridColumns = parseInt(content['home.projectsGrid.columns'] || '3') || 3;

  // Sync from backend data whenever it updates
  useEffect(() => {
    if (defaultProjects.length > 0) {
      setProjects(defaultProjects);
    }
  }, [defaultProjects]);

  const handleDeleteProject = (id: string) => {
    if (!adminToken) return;
    if (window.confirm('Are you sure you want to delete this project?')) {
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      if (isUUID) {
        adminDeleteProject(adminToken, id).catch((err) => {
          console.error('Failed to delete project:', err);
          setSaveStatus('error');
        });
      }
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleSaveProject = async (project: Project) => {
    console.log('[CMS] handleSaveProject called, adminToken:', adminToken ? 'SET' : 'NULL');
    if (!adminToken) { console.warn('[CMS] Aborted — not logged in as admin'); setSaveStatus('error'); return; }
    setSaveStatus('saving');
    try {
      const isVideo = (url?: string) => !!url && /\.(mp4|webm|ogg)(\?|$)/i.test(url);
      const thumbIsVideo = isVideo(project.thumbnailUrl);
      const payload = {
        slug: project.slug,
        service_id: project.serviceId || undefined,
        data: {
          title: project.title,
          description: project.shortDescription,
          image: thumbIsVideo ? undefined : (project.thumbnailUrl || undefined),
          videoUrl: project.videoUrl || (thumbIsVideo ? project.thumbnailUrl : undefined),
          date: project.date,
          service: project.service,
          client: project.clientName,
        },
      };

      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(project.id);

      if (modalProject && isUUID) {
        // Update existing backend record
        await adminUpdateProject(adminToken, project.id, payload);
        setProjects((prev) => prev.map((p) => (p.id === project.id ? project : p)));
      } else {
        // Create new — either a brand-new project or a mock placeholder being persisted for the first time
        const created = await adminCreateProject(adminToken, payload);
        setProjects((prev) => [
          ...prev.filter((p) => p.id !== project.id),
          { ...project, id: created.id },
        ]);
      }
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to save project:', err);
      setSaveStatus('error');
    }
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    setProjects((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, removed);
      return updated;
    });
    // Note: reorder is local only — no backend reorder endpoint
  };

  const handleAddProject = () => {
    setModalProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset projects to defaults? This will show backend data.')) {
      setProjects(defaultProjects);
    }
  };

  const handleGridColumnsChange = async (cols: number) => {
    try {
      setSaveStatus('saving');
      updateContent('home.projectsGrid.columns', cols.toString());
      // Grid column preference stays in CMS store
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
      setShowGridSettings(false);
    } catch (error) {
      console.error('Failed to save grid columns:', error);
      setSaveStatus('error');
    }
  };

  return (
    <>
      <div aria-label="Projects wrapper" className="grid h-min justify-center relative w-full gap-[20px] shrink-[0]" style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(50px, 1fr))` }}>
        {/* Grid Settings Button (edit mode only) */}
        {isEditMode && (
          <button
            onClick={() => setShowGridSettings(!showGridSettings)}
            className="absolute -top-12 -right-2 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
            title="Grid Settings"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m-5.196-13.196l4.243 4.243m4.243 4.243l4.243 4.243M1 12h6m6 0h6M2.804 19.196l4.243-4.243m4.243-4.243l4.243-4.243" />
            </svg>
          </button>
        )}

        {/* Grid Settings Modal */}
        {showGridSettings && createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setShowGridSettings(false)}
            />

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-2xl p-8 z-[9999] w-[520px] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white text-xl font-medium">Grid Settings</h3>
                <button
                  onClick={() => setShowGridSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Column Span Selector */}
              <div className="mb-6">
                <label className="text-gray-300 text-base mb-3 block">Number of Columns</label>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 3, 4, 5].map((cols) => (
                    <button
                      key={cols}
                      onClick={() => handleGridColumnsChange(cols)}
                      className={`py-3 px-4 rounded-lg border transition-colors ${
                        gridColumns === cols
                          ? 'bg-blue-500 border-blue-600 text-white'
                          : 'bg-[#2a2a2a] border-[#3a3a3a] text-white hover:bg-[#333]'
                      }`}
                    >
                      {cols}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}

        {/* Projects */}
        {projects.map((project, index) => (
          <EditableGridItem
            key={project.id}
            contentKey={`home.projects.${project.id}`}
            defaultSpan={1}
            maxSpan={gridColumns}
            className=""
          >
            <DraggableProjectCard
              project={project}
              index={index}
              isEditMode={isEditMode}
              onEdit={() => handleEditProject(project)}
              onDelete={() => handleDeleteProject(project.id)}
              moveCard={moveCard}
              availableServices={availableServices}
            />
          </EditableGridItem>
        ))}

        {/* Add New Button (only in edit mode) */}
        {isEditMode && (
          <div className="flex items-center justify-center" style={{ gridColumn: `span ${gridColumns}` }}>
            <button
              onClick={handleAddProject}
              className="group flex w-full max-w-md items-center justify-center gap-3 rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 px-6 py-6 text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-[0.98]"
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
              <span className="text-lg font-medium">Add Project</span>
            </button>
          </div>
        )}

        {/* Reset to Defaults Button (only in edit mode) */}
        {isEditMode && (
          <div className="flex items-center justify-center" style={{ gridColumn: `span ${gridColumns}` }}>
            <button
              onClick={handleResetToDefaults}
              className="group flex w-full max-w-md items-center justify-center gap-3 rounded-lg border-2 border-dashed border-red-500/30 bg-red-500/5 px-6 py-6 text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 active:scale-[0.98]"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              <span className="text-lg font-medium">Reset to Defaults</span>
            </button>
          </div>
        )}
      </div>
      
      {/* Modal */}
      <ProjectModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
        availableServices={availableServices}
      />
    </>
  );
}