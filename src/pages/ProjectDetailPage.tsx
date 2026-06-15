import { useParams, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import svgPaths from "../imports/svg-lcn8oo4q1c";
import svgPathsDetails from "../imports/svg-k2fmqh99j6";
import { EditableCTASection, EditableText, EditableImage, useCMSStore } from '../src/cms';
import { EditableSection } from '../src/cms/EditableSection';
import { useBackendData } from '../contexts/BackendDataContext';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects, services } = useBackendData();

  const project = projects.find((p) => p.slug === slug);

  const isVideo = (url?: string) => !!url && /\.(mp4|webm|ogg)(\?|$)/i.test(url);
  const heroMedia = project?.videoUrl || project?.image || '';
  const projectTitle = project?.title || project?.name || 'Untitled Project';
  const projectDescription = project?.description || '';
  const projectService = services.find(s => s.id === project?.serviceId)?.title
    || services.find(s => s.title.toLowerCase() === (project?.service || '').toLowerCase())?.title
    || project?.service || project?.category || '';
  const projectClient = project?.client || '';
  const projectOverview = project?.overview || '';
  const projectProcess = project?.process || '';
  const projectResult = project?.result || '';

  return (
    <div className="w-full bg-black relative">
      <Helmet>
        <title>{projectTitle} | Nuclear Digital</title>
        <meta name="description" content={projectDescription || `${projectTitle} — a project by Nuclear Digital.`} />
        <meta property="og:title" content={`${projectTitle} | Nuclear Digital`} />
        <meta property="og:description" content={projectDescription || `${projectTitle} — a project by Nuclear Digital.`} />
        <meta property="og:url" content={`https://www.newcleardigital.com/projects/${slug}`} />
        {heroMedia && !heroMedia.match(/\.(mp4|webm|ogg)/i) && <meta property="og:image" content={heroMedia} />}
        <link rel="canonical" href={`https://www.newcleardigital.com/projects/${slug}`} />
      </Helmet>
      {/* Hero Section */}
      <EditableSection sectionId={`projectDetail.${slug}.hero`} label="Hero">
      <section className="relative w-full min-h-screen flex items-end justify-center pb-24">
        {/* Background — project's own video or image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {isVideo(heroMedia) ? (
            <video
              src={heroMedia}
              className="absolute h-full left-0 w-full object-cover"
              autoPlay muted loop playsInline
            />
          ) : heroMedia ? (
            <img
              src={heroMedia}
              alt=""
              className="absolute h-full left-0 w-full object-cover"
            />
          ) : null}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6 pb-6">
          <div className="flex items-end justify-between w-full">
            {/* Title and Description */}
            <div className="flex flex-col gap-3 max-w-[600px]">
              <EditableText
                contentKey={`project.${slug}.title`}
                defaultValue={projectTitle}
                as="h1"
                className="font-medium text-[57px] text-white tracking-[-1.8px] leading-[63px]"
                style={{ fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif' }}
              />
              {projectService && (
                <div className="flex items-center gap-2">
                  <div className="items-center flex size-min justify-center overflow-clip relative bg-white/10 gap-[4px] pt-1 pr-3 pb-1 pl-3 rounded-[62.5rem] border border-white/20 backdrop-blur-[10px] shrink-0">
                    <p className="font-medium uppercase text-white text-[11px] tracking-[-0.16px] leading-[16px]"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>
                      {projectService}
                    </p>
                  </div>
                </div>
              )}
              <EditableText
                contentKey={`project.${slug}.description`}
                defaultValue={projectDescription}
                as="p"
                className="font-medium text-[#ddd] text-[16px] leading-[27px] opacity-70"
                style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                multiline
              />
            </div>

            {/* Scroll Down */}
            <div className="flex items-center gap-1 shrink-0">
              <p className="font-medium text-white text-[14px] tracking-[-0.16px] uppercase leading-[22px]"
                style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>
                Scroll down
              </p>
              <div className="w-[18px] h-[18px] relative">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      </EditableSection>

      {/* Details Section */}
      <EditableSection sectionId={`projectDetail.${slug}.details`} label="Project Details">
      <div className="w-full flex items-center justify-center py-[100px] relative z-10">
        <div className="flex flex-col gap-[64px] items-center w-full max-w-[1240px] px-6">

          {/* Description + Metadata */}
          <div className="flex gap-[8px] items-start justify-center w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px self-stretch" />

            <div className="flex flex-[1_0_0] flex-col gap-[26px] items-start min-w-px">
              {/* Description */}
              <div className="opacity-70 w-full">
                <EditableText
                  contentKey={`project.${slug}.heroDescription`}
                  defaultValue={projectDescription}
                  as="div"
                  className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                  multiline
                />
              </div>

              {/* Metadata rows */}
              <div className="flex flex-col gap-[12px] w-full">
                <div className="flex gap-[8px] items-start w-full">
                  <div className="flex-[1_0_0] opacity-80">
                    <p className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Project Name</p>
                  </div>
                  <div className="flex-[1_0_0]">
                    <EditableText
                      contentKey={`project.${slug}.detailName`}
                      defaultValue={projectTitle}
                      as="p"
                      className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                    />
                  </div>
                </div>
                <div className="bg-[#444] h-px w-full" />

                <div className="flex gap-[8px] items-start w-full">
                  <div className="flex-[1_0_0] opacity-80">
                    <p className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Service Provided</p>
                  </div>
                  <div className="flex-[1_0_0]">
                    <EditableText
                      contentKey={`project.${slug}.detailService`}
                      defaultValue={projectService}
                      as="p"
                      className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                    />
                  </div>
                </div>
                <div className="bg-[#444] h-px w-full" />

                <div className="flex gap-[8px] items-start w-full">
                  <div className="flex-[1_0_0] opacity-80">
                    <p className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Client</p>
                  </div>
                  <div className="flex-[1_0_0]">
                    <EditableText
                      contentKey={`project.${slug}.detailClient`}
                      defaultValue={projectClient}
                      as="p"
                      className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                      style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery — 2 editable images */}
          <div className="flex gap-[20px] items-start w-full">
            <div className="flex-[1_0_0] relative overflow-hidden" style={{ height: 'clamp(160px, 36.3vw, 450px)' }}>
              <EditableImage
                contentKey={`project.${slug}.gallery1`}
                defaultSrc=""
                alt="Project gallery image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex-[1_0_0] relative overflow-hidden" style={{ height: 'clamp(160px, 36.3vw, 450px)' }}>
              <EditableImage
                contentKey={`project.${slug}.gallery2`}
                defaultSrc=""
                alt="Project gallery image 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Overview / Process / Result */}
          <div className="flex flex-col items-center w-full">
            <div className="flex gap-[8px] items-start justify-center overflow-clip pb-[22px] relative w-full border-b border-[#444]">
              <div className="shrink-0 w-[392px]">
                <p className="font-medium text-[14px] text-white tracking-[-0.16px] uppercase leading-[22px]"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Project overview</p>
              </div>
              <div className="flex-[1_0_0] opacity-70">
                <EditableText
                  contentKey={`project.${slug}.overview`}
                  defaultValue={projectOverview}
                  as="div"
                  className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                  multiline
                />
              </div>
            </div>

            <div className="flex gap-[8px] items-start justify-center overflow-clip py-[22px] relative w-full border-b border-[#444]">
              <div className="shrink-0 w-[392px]">
                <p className="font-medium text-[14px] text-white tracking-[-0.16px] uppercase leading-[22px]"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Project process</p>
              </div>
              <div className="flex-[1_0_0] opacity-70">
                <EditableText
                  contentKey={`project.${slug}.process`}
                  defaultValue={projectProcess}
                  as="div"
                  className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                  multiline
                />
              </div>
            </div>

            <div className="flex gap-[8px] items-start justify-center overflow-clip pt-[22px] relative w-full">
              <div className="shrink-0 w-[392px]">
                <p className="font-medium text-[14px] text-white tracking-[-0.16px] uppercase leading-[22px]"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>Final result</p>
              </div>
              <div className="flex-[1_0_0] opacity-70">
                <EditableText
                  contentKey={`project.${slug}.result`}
                  defaultValue={projectResult}
                  as="div"
                  className="font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px] w-full whitespace-pre-wrap"
                  style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}
                  multiline
                />
              </div>
            </div>
          </div>

          {/* Final media — editable image/video */}
          <div className="relative w-full overflow-hidden" style={{ height: 'clamp(250px, 56.5vw, 700px)' }}>
            <EditableImage
              contentKey={`project.${slug}.finalMedia`}
              defaultSrc=""
              alt="Project final result media"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between w-full">
            <Link
              to="/projects"
              className="bg-[#242424] flex gap-[14px] items-center p-[14px] hover:bg-[#333] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsDetails.p47d8a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
              </svg>
              <p className="font-medium text-[13px] text-white tracking-[-0.14px] uppercase leading-[20px]"
                style={{ fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif' }}>All Projects</p>
            </Link>
          </div>

        </div>
      </div>
      </EditableSection>

      {/* CTA Section */}
      <EditableSection sectionId="projectDetail.cta" label="Let's Connect">
        <EditableCTASection contentKey="projectDetail.cta" />
      </EditableSection>
    </div>
  );
}
