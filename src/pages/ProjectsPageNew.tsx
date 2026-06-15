import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { EditableText } from '../src/cms/EditableText';
import { EditableImage } from '../src/cms/EditableImage';
import { EditableProjectsSection } from '../src/cms/EditableProjectsSection';
import { EditableCTASection } from '../src/cms/EditableCTASection';
import { EditableSection } from '../src/cms/EditableSection';
import { useBackendData } from '../contexts/BackendDataContext';

export function ProjectsPageNew() {
  const { projects: backendProjects, services } = useBackendData();

  const defaultProjects = useMemo(() => backendProjects.map(p => {
    const resolvedService =
      services.find(s => s.id === p.serviceId)?.title ||
      services.find(s => s.title.toLowerCase() === (p.service || p.category || '').toLowerCase())?.title ||
      p.service || '';
    return {
      id: p.id,
      title: p.title || p.name || 'Untitled',
      slug: p.slug,
      shortDescription: p.description || '',
      date: p.date,
      service: resolvedService,
      serviceId: p.serviceId,
      clientName: p.client || '',
      thumbnailUrl: p.image || p.videoUrl || '',
      videoUrl: p.videoUrl,
    };
  }), [backendProjects, services]);

  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <Helmet>
        <title>Projects | Nuclear Digital</title>
        <meta name="description" content="Explore Nuclear Digital's portfolio of custom web apps, AI integrations, and enterprise software projects built for forward-thinking clients." />
        <meta property="og:title" content="Projects | Nuclear Digital" />
        <meta property="og:description" content="Explore Nuclear Digital's portfolio of custom web apps, AI integrations, and enterprise software projects built for forward-thinking clients." />
        <meta property="og:url" content="https://www.newcleardigital.com/projects" />
        <link rel="canonical" href="https://www.newcleardigital.com/projects" />
      </Helmet>
      {/* Hero */}
      <EditableSection sectionId="projects.hero" label="Hero">
        <div className="relative w-full overflow-hidden flex items-end" style={{ minHeight: 'clamp(160px, 40vw, 400px)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <EditableImage
              contentKey="projects.hero.backgroundImage"
              defaultSrc=""
              alt="Projects hero background"
              className="block size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pb-6 md:pb-10">
            <div className="hero-heading">
              <EditableText
                contentKey="projects.hero.title"
                defaultValue="<h1 class='font-medium text-white text-[57px] tracking-[-1.8px] leading-[63px]'>Our projects</h1>"
                as="div"
                multiline
              />
            </div>
          </div>
        </div>
      </EditableSection>

      <EditableSection sectionId="projects.grid" label="Projects Grid">
        <div className="relative w-full bg-black flex justify-center pt-8 md:pt-[64px] pb-16 md:pb-[150px]">
          <div className="w-full max-w-[1240px] px-[24px]">
            <div className="flex flex-col gap-4 md:gap-[64px]">
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
