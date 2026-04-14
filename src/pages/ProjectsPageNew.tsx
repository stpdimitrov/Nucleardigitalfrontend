import { EditableText } from '../src/cms/EditableText';
import { EditableProjectsSection } from '../src/cms/EditableProjectsSection';
import { EditableCTASection } from '../src/cms/EditableCTASection';
import { useBackendData } from '../contexts/BackendDataContext';

export function ProjectsPageNew() {
  const { projects: backendProjects } = useBackendData();

  const defaultProjects = backendProjects.map(p => ({
    id: p.id,
    title: p.title || p.name || 'Untitled',
    slug: p.slug,
    shortDescription: p.description || '',
    date: p.date,
    service: p.service || p.category || 'Video Production',
    clientName: '',
    thumbnailUrl: p.image || p.videoUrl || '',
    videoUrl: p.videoUrl,
  }));

  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <div className="relative w-full bg-black flex justify-center pt-[100px] pb-[150px]">
        <div className="w-full max-w-[1240px] px-[24px]">
          <div className="flex flex-col gap-[64px]">

            {/* Header */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[8px]">
                <EditableText
                  contentKey="projects.title"
                  defaultValue="<h1 class='font-medium text-white text-[57px] tracking-[-1.8px] leading-[63px]'>Our projects</h1>"
                  as="div"
                  multiline
                />
                <EditableText
                  contentKey="projects.description"
                  defaultValue="<p class='text-[#ddd] text-[14px] leading-[27px] opacity-60'>Showcasing our finest video projects crafted with creativity, passion, &amp; cinematic excellence.</p>"
                  as="div"
                  multiline
                />
              </div>
              <p className="font-medium text-[#ddd] text-[14px] tracking-[-0.32px] leading-[24px] shrink-0">2020-2025</p>
            </div>

            {/* Projects Grid with full CMS CRUD */}
            <EditableProjectsSection defaultProjects={defaultProjects} />

          </div>
        </div>
      </div>

      <EditableCTASection contentKey="projects.cta" />
    </div>
  );
}
