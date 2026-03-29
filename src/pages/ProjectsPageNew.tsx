import { Link } from 'react-router';
import svgPaths from '../imports/svg-0mgrizih5p';
import { imgDivFramer1Ovcviq, imgDivFramer1Niw85W } from '../imports/svg-rhqhz';
import { useProjects } from '../hooks/useCMS';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { EditableText } from '../components/EditableText';
import { EditableList } from '../components/EditableList';
import { EditableListItem, EditableListContainer } from '../components/EditableListItem';
import { useEditMode } from '../contexts/EditModeContext';
import { EditableCTASection } from '../src/cms';

export function ProjectsPageNew() {
  const { data: projects, loading, error, refetch } = useProjects();
  
  // Show loading state
  if (loading) {
    return (
      <div className="items-center flex h-screen justify-center w-full bg-black">
        <LoadingSpinner />
      </div>
    );
  }
  
  // Show error state
  if (error || !projects) {
    return (
      <div className="items-center flex h-screen justify-center w-full bg-black">
        <ErrorMessage message={error || 'Failed to load projects'} onRetry={refetch} />
      </div>
    );
  }
  
  // Featured project is the first one
  const featuredProject = projects[0];
  
  // Grid projects are the rest (up to 6 total for the grid layout)
  const gridProjects = projects.slice(1, 7);
  
  // Safety check
  if (!featuredProject) {
    return (
      <div className="items-center flex h-screen justify-center w-full bg-black">
        <ErrorMessage message="No projects available" onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      {/* Main Content Container - Centered with max-width */}
      <div className="relative w-full bg-black flex justify-center pt-[100px] pb-[150px]">
        <div className="w-[1240px] px-[24px]">
          <div className="flex flex-col gap-[64px]">
            
            {/* Header - Year, Title, Scroll Down */}
            <div className="h-[125px] relative w-[1192px]">
              {/* Scroll Down (Right) */}
              <div className="absolute h-[22.41px] left-[1142.59px] top-[102.59px] w-[49.41px]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium items-end justify-center leading-[0] left-0 not-italic text-[14.1px] text-white top-[11.2px] tracking-[-0.16px] uppercase whitespace-nowrap">
                  <p className="leading-[22.4px]">Scroll down</p>
                </div>
              </div>

              {/* Title and Description (Center) */}
              <div className="absolute flex flex-col gap-[8px] h-[117px] left-[400px] pb-[46px] top-0 w-[392px]">
                <div className="h-[63px] relative w-[392px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[57.1px] text-white top-[31.5px] tracking-[-1.8px] whitespace-nowrap">
                    <EditableText
                      id="projects-page-title"
                      value="Our projects"
                      className="leading-[63px]"
                    />
                  </div>
                </div>
                <div className="h-[54px] opacity-60 relative w-[392px]">
                  <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[54px] leading-[0] left-0 not-italic text-[#ddd] text-[14.6px] top-0 w-[392px] whitespace-nowrap">
                    <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[80.05px] top-[40px]">
                      <EditableText
                        id="projects-page-description-2"
                        value="creativity, passion, & cinematic excellence."
                        className="leading-[27px]"
                      />
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[0.05px] top-[13.8px]">
                      <EditableText
                        id="projects-page-description-1"
                        value="Showcasing our finest video projects crafted with "
                        className="leading-[27px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Year (Left) */}
              <div className="absolute h-[24px] left-0 top-[101px] w-[392px]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#ddd] text-[14.4px] top-[11.5px] tracking-[-0.32px] whitespace-nowrap">
                  <p className="leading-[24px]">2020-2025</p>
                </div>
              </div>
            </div>

            {/* Featured Project */}
            <Link 
              to={`/projects/${featuredProject.slug}`}
              className="h-[650px] relative w-[1192px] overflow-hidden" 
            >
              {/* Video/Image */}
              <div className="absolute h-[650px] left-0 top-0 w-[1192px]">
                {featuredProject.videoUrl ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster={featuredProject.image}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={featuredProject.videoUrl}
                  />
                ) : featuredProject.image ? (
                  <img 
                    alt={featuredProject.title || featuredProject.name || 'Featured Project'}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={featuredProject.image}
                  />
                ) : null}
              </div>

              {/* BG Blur Mask */}
              <div className="absolute left-0 top-[354px] pointer-events-none">
                <div 
                  className="h-[296px] w-[1192px]" 
                  style={{ 
                    maskImage: `url('${imgDivFramer1Ovcviq}')`,
                    WebkitMaskImage: `url('${imgDivFramer1Ovcviq}')`,
                    maskSize: '1192px 296px',
                    WebkitMaskSize: '1192px 296px',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
              </div>

              {/* Text Content Overlay */}
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[296px] left-0 pb-[28px] pt-[62px] px-[28px] to-black top-[354px] w-[1192px]">
                <div className="flex flex-col gap-[22px]">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="h-[50.41px] relative w-[1136px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[34px] text-white top-[24.8px] tracking-[-0.72px] whitespace-nowrap">
                        <p className="leading-[50.4px]">{featuredProject.title || featuredProject.name || 'Untitled Project'}</p>
                      </div>
                    </div>
                    {featuredProject.description && (
                      <div className="h-[48px] opacity-70 relative w-[500px]">
                        <div className="absolute h-[48px] left-0 top-0 w-[500px]">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
                            <div className="flex flex-col justify-center relative">
                              <p className="leading-[24px]">{featuredProject.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex gap-[8px]">
                    <div className="backdrop-blur-[5px] h-[28px] relative w-[122.61px]">
                      <div className="border border-[rgba(255,255,255,0.1)] border-solid overflow-clip px-[12px] py-[4px] relative rounded-[4px] size-full">
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[11.5px] not-italic text-[#ddd] text-[12.6px] top-[13.6px] whitespace-nowrap">
                          <p className="leading-[19.6px]">{featuredProject.category || featuredProject.service || 'Video Production'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="backdrop-blur-[5px] h-[28px] relative w-[98.84px]">
                      <div className="border border-[rgba(255,255,255,0.1)] border-solid overflow-clip px-[12px] py-[4px] relative rounded-[4px] size-full">
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[11.5px] not-italic text-[#ddd] text-[12px] top-[13.6px] whitespace-nowrap">
                          <p className="leading-[19.6px]">{featuredProject.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Projects Grid Section */}
            <div className="flex flex-col gap-[48px] pb-[103px] w-[1192px]">
              
              {/* Search by Filter Header */}
              <div className="h-[52px] relative w-[1192px]">
                {/* Filter Dropdown */}
                <div className="absolute bg-[#242424] h-[52px] left-[812px] top-0 w-[380px]">
                  <div className="absolute h-[24px] left-[14px] top-[14px] w-[352px]">
                    <div className="h-[24px] relative w-[72.34px]">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#ddd] text-[14.4px] top-[11.5px] tracking-[-0.32px] whitespace-nowrap">
                        <p className="leading-[24px]">All Works</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search by filter text */}
                <div className="absolute h-[29.41px] left-0 top-[11.3px] w-[804px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[26.5px] text-white top-[14.8px] tracking-[-0.84px] whitespace-nowrap">
                    <p className="leading-[29.4px]">Search by filter</p>
                  </div>
                </div>
              </div>

              {/* Project Grid - 6 cards in 2 rows */}
              <div className="h-[900px] relative w-[1192px]">
                {gridProjects.map((project, index) => {
                  const positions = [
                    { left: 0, top: 0 },
                    { left: 404, top: 0 },
                    { left: 808, top: 0 },
                    { left: 0, top: 460 },
                    { left: 404, top: 460 },
                    { left: 808, top: 460 },
                  ];
                  
                  if (index >= positions.length) return null;
                  const pos = positions[index];
                  
                  return (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      left={pos.left}
                      top={pos.top}
                    />
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
      
      {/* CTA Section - Lets work together */}
      <EditableCTASection contentKey="projects.cta" />
    </div>
  );
}

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    name?: string;
    title?: string;
    videoUrl?: string;
    image?: string;
    service?: string;
    category?: string;
    date: string;
  };
  left: number;
  top: number;
}

function ProjectCard({ project, left, top }: ProjectCardProps) {
  const displayTitle = project.title || project.name || 'Untitled Project';
  const displayCategory = project.category || project.service || 'Creative Direction';
  const displayImage = project.image || project.videoUrl;
  
  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="absolute h-[440px] w-[384px] overflow-hidden" 
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      {/* Video/Image */}
      <div className="relative size-[373.33px]">
        {project.videoUrl ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster={project.image}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={project.videoUrl}
          />
        ) : project.image ? (
          <img 
            alt={displayTitle}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={displayImage}
          />
        ) : null}
      </div>

      {/* BG Blur Mask */}
      <div className="absolute left-0 top-[265px] pointer-events-none">
        <div 
          className="h-[175px] w-[384px]" 
          style={{ 
            maskImage: `url('${imgDivFramer1Niw85W}')`,
            WebkitMaskImage: `url('${imgDivFramer1Niw85W}')`,
            maskSize: '384px 175px',
            WebkitMaskSize: '384px 175px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }} 
        />
      </div>

      {/* Text Content */}
      <div className="absolute h-[148px] left-[20px] top-[292px] w-[344px]">
        <div className="flex flex-col gap-[16px]">
          {/* Title */}
          <div className="h-[29.41px] relative w-[344px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[26.2px] text-white top-[14.1px] tracking-[-0.84px] whitespace-nowrap">
              <p className="leading-[29.4px]">{displayTitle}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-[8px]">
            <div className="backdrop-blur-[5px] h-[28px] relative w-[123.97px]">
              <div className="border border-[rgba(255,255,255,0.1)] border-solid overflow-clip px-[12px] py-[4px] relative rounded-[4px] size-full">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[11.5px] not-italic text-[#ddd] text-[12.6px] top-[13.6px] whitespace-nowrap">
                  <p className="leading-[19.6px]">{displayCategory}</p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[5px] h-[28px] relative w-[96.29px]">
              <div className="border border-[rgba(255,255,255,0.1)] border-solid overflow-clip px-[12px] py-[4px] relative rounded-[4px] size-full">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[11.5px] not-italic text-[#ddd] text-[12px] top-[13.6px] whitespace-nowrap">
                  <p className="leading-[19.6px]">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}