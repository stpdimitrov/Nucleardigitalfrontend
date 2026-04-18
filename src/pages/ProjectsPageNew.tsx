import { EditableText } from '../src/cms/EditableText';
import { EditableImage } from '../src/cms/EditableImage';
import { EditableProjectsSection } from '../src/cms/EditableProjectsSection';
import { EditableCTASection } from '../src/cms/EditableCTASection';
import { EditableSection } from '../src/cms/EditableSection';
import { useBackendData } from '../contexts/BackendDataContext';

export function ProjectsPageNew() {
  const { projects: backendProjects, services } = useBackendData();

  const defaultProjects = backendProjects.map(p => ({
    id: p.id,
    title: p.title || p.name || 'Untitled',
    slug: p.slug,
    shortDescription: p.description || '',
    date: p.date,
    service: p.service || p.category || '',
    serviceId: p.serviceId,
    clientName: '',
    thumbnailUrl: p.image || p.videoUrl || '',
    videoUrl: p.videoUrl,
  }));

  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      {/* Hero */}
      <EditableSection sectionId="projects.hero" label="Hero">
        <div className="relative w-full overflow-hidden flex items-end" style={{ height: 'clamp(180px, 32.3vw, 400px)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <EditableImage
              contentKey="projects.hero.backgroundImage"
              defaultSrc=""
              alt="Projects hero background"
              className="block size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pb-10">
            <EditableText
              contentKey="projects.hero.title"
              defaultValue="<h1 class='font-medium text-white text-[57px] tracking-[-1.8px] leading-[63px]'>Our projects</h1>"
              as="div"
              multiline
            />
          </div>
        </div>
      </EditableSection>

      <EditableSection sectionId="projects.grid" label="Projects Grid">
        <div className="relative w-full bg-black flex justify-center pt-[64px] pb-[150px]">
          <div className="w-full max-w-[1240px] px-[24px]">
            <div className="flex flex-col gap-[64px]">
              <EditableProjectsSection defaultProjects={defaultProjects} availableServices={services.map(s => ({ id: s.id, title: s.title }))} />
            </div>
          </div>
        </div>
      </EditableSection>

      <EditableSection sectionId="projects.cta" label="Let's Connect">
        <EditableCTASection contentKey="projects.cta" />
      </EditableSection>
    </div>
  );
}
