import { CTASection } from '../components/CTASection';
import { EditablePricingSection } from '../src/cms/EditablePricingSection';
import { EditableFAQSection } from '../src/cms/EditableFAQSection';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useCMSStore } from '../src/cms/cmsStore';
import { EditableSection } from '../src/cms/EditableSection';
import { EditableText } from '../src/cms/EditableText';
import { EditableImage } from '../src/cms/EditableImage';
import { EditableLink } from '../src/cms/EditableLink';
import { EditableClientLogos } from '../src/cms/EditableClientLogos';
import { EditableProjectsSection } from '../src/cms/EditableProjectsSection';
import { EditableAboutUsSection } from '../src/cms/EditableAboutUsSection';
import { ServicesSection } from '../components/ServicesSection';
import { EditableWhyChooseUsSection } from '../src/cms/EditableWhyChooseUsSection';
import { EditableHowWeWorkSection } from '../src/cms/EditableHowWeWorkSection';
import { EditableTestimonialsSection } from '../src/cms/EditableTestimonialsSection';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../lib/animations';
import { useMemo } from 'react';
import { useBackendData } from '../contexts/BackendDataContext';

// Animation variants
const heroAnimation = {
  hidden: { opacity: 1, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HomePage() {
  const { isEditMode } = useCMSStore();
  const { projects, services, testimonials } = useBackendData();

  // Transform projects data to match EditableProjectsSection interface
  // useMemo prevents a new array reference on every render, which would
  // otherwise trigger EditableProjectsSection's useEffect and overwrite
  // any locally-saved edits before the backend data refreshes.
  const transformedProjects = useMemo(() => projects.map(p => ({
    id: p.id,
    title: p.title || p.name || 'Untitled',
    slug: p.slug,
    shortDescription: p.description || '',
    date: p.date,
    service: p.service || '',
    serviceId: p.serviceId,
    clientName: p.client || '',
    thumbnailUrl: p.image || p.videoUrl || '',
    videoUrl: p.videoUrl,
  })), [projects, services]);
  
  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">{/* Removed DndProvider */}
      <EditableSection sectionId="home.hero" label="Hero">
      <motion.header aria-label="Hero section" className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0" initial="hidden" animate="visible" variants={heroAnimation}>
        <div className={`absolute left-0 top-0 right-0 bottom-0 ${isEditMode ? '' : 'pointer-events-none'}`}>
          <EditableImage
            contentKey="home.hero.backgroundImage"
            defaultSrc=""
            alt="Silhouette of a person with a camera walking towards vibrant orange light under dim blue streetlights on a misty road at night. Mysterious and atmospheric."
            className="block size-full object-cover overflow-clip aspect-[auto_1536_/_1024]"
          />
        </div>
        <div aria-label="Container" className="items-start flex flex-col grow h-px justify-end overflow-clip relative w-full basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Top wrapper" className="items-center flex h-min justify-start relative w-full gap-[8px] shrink-[0]">
            <div className="flex flex-col grow justify-start relative w-px basis-0 max-w-[600px] shrink-[0] [&_h1]:!text-[clamp(24px,5.5vw,56px)] [&_h1]:!leading-[1.2]">
              <EditableText
                contentKey="home.hero.headline"
                defaultValue="<h1 class='font-medium text-white text-[56px] tracking-[-1.68px] leading-[67.2px]' style='font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'><span class='inline-block' style='text-decoration: rgb(255, 255, 255);'>Create cinematic visuals that captivate every audience</span></h1>"
                as="div"
                className=""
                multiline
              />
            </div>
          </div>
          <div aria-label="Bottom wrapper" className="items-end flex min-h-[100px] md:min-h-[200px] justify-between overflow-clip relative w-full shrink-[0]">
            <div aria-label="Scroll down" className="relative shrink-[0]">
              <div aria-label="Scroll down" className="items-center flex size-min justify-end overflow-hidden relative gap-[4px]">
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey="home.hero.scrollText"
                    defaultValue="<p class='font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'>Scroll down</p>"
                    as="div"
                    className=""
                  />
                </div>
                <div aria-label="Icon" className="aspect-square relative w-[18px] z-[1] shrink-[0] flex items-center justify-center">
                  <ArrowDown className="w-full h-full text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      </EditableSection>
      <EditableSection sectionId="home.intro" label="Introduction">
      <motion.section aria-label="Introduction" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-[60px] md:pb-[100px] pl-0" initial="hidden" whileInView="visible" viewport={viewport} variants={scrollFadeIn}>
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[48px] md:gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 3x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[24px] md:gap-[24px_64px] z-[4] shrink-[0] grid-cols-1 md:grid-cols-3">
            <motion.div aria-label="Section tag" className="self-start justify-self-start relative w-fit" variants={staggerItem}>
              <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey="home.intro.sectionLabel"
                    defaultValue="<p class='font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'>Introduction</p>"
                    as="div"
                    className=""
                  />
                </div>
              </div>
            </motion.div>
            <motion.div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-center justify-self-start relative w-full gap-[28px] md:col-span-2" variants={staggerItem}>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                <EditableText
                  contentKey="home.intro.heading"
                  defaultValue="<h4 class='font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]' style='font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'>We craft cinematic visuals that inspire audiences, elevate storytelling,  and empower brands to create meaningful, lasting impressions  through seamless video production experiences.</h4>"
                  as="div"
                  className=""
                  multiline
                />
              </div>
              <div aria-label="Button" className="relative shrink-[0]">
                <EditableLink
                  contentKey="home.intro.buttonLink"
                  defaultValue="/contact-us"
                  className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]"
                  style={{"textDecoration":"rgb(0, 0, 238)"}}
                >
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <EditableText
                      contentKey="home.intro.buttonText"
                      defaultValue="<p class='font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif;'>Contact us</p>"
                      as="div"
                      className=""
                    />
                  </div>
                  <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                    <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                      <div aria-label="Icon" className="aspect-square relative w-[15px] z-[1] shrink-[0] flex items-center justify-center">
                        <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                      </div>
                      <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                    </div>
                  </div>
                </EditableLink>
              </div>
            </motion.div>
          </div>
          <motion.div aria-label="Grid 4x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(2,min-content)] gap-[12px] z-[4] shrink-[0] grid-cols-2 md:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            <EditableClientLogos defaultLogos={[]} />
          </motion.div>
        </div>
      </motion.section>
      </EditableSection>
      <EditableSection sectionId="home.featured" label="Featured Work">
      <section aria-label="Featured work" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-[60px] md:pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start relative w-px basis-0 gap-[48px] md:gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Featured header" className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full">
            <div aria-label="Section tag" className="shrink-0">
              <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey="home.featured.sectionLabel"
                    defaultValue="<p class='font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'>Featured work</p>"
                    as="div"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div aria-label="Text" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full md:max-w-md gap-[8px] [&_h2]:!text-[clamp(24px,5.5vw,44px)] [&_h2]:!leading-[1.2]">
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                <EditableText
                  contentKey="home.featured.title"
                  defaultValue="<h2 class='font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]' style='font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif; text-decoration: rgb(255, 255, 255);'>Our Best Creations</h2>"
                  as="div"
                  className=""
                />
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                <EditableText
                  contentKey="home.featured.description"
                  defaultValue="<p class='font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; text-decoration: rgb(221, 221, 221);'>Discover our finest projects showcasing creativity, storytelling, and  cinematic excellence.</p>"
                  as="div"
                  className=""
                  multiline
                />
              </div>
            </div>
            <div aria-label="Button" className="shrink-0">
              <EditableLink
                contentKey="home.featured.buttonLink"
                defaultValue="/projects"
                className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]"
                style={{"textDecoration":"rgb(0, 0, 238)"}}
              >
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey="home.featured.buttonText"
                    defaultValue="<p class='font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif;'>All projects</p>"
                    as="div"
                    className=""
                  />
                </div>
                <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                  <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                    <div aria-label="Icon" className="aspect-square relative w-[15px] z-[1] shrink-[0] flex items-center justify-center">
                      <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                    <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                  </div>
                </div>
              </EditableLink>
            </div>
          </div>
          <EditableProjectsSection defaultProjects={transformedProjects} availableServices={services.map(s => ({ id: s.id, title: s.title }))} />
        </div>
      </section>
      </EditableSection>
      <EditableSection sectionId="home.about" label="About Us">
      <EditableAboutUsSection
        contentKey="home.aboutUs"
        defaultBackgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb78f23653961282fd6252e62cd8283d6c0057af5.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843022673805&amp;alt=media"
        defaultBackgroundAlt="A person stands against a vibrant background of orange and yellow wavy patterns. They are wearing a dark coat, looking contemplative and thoughtful."
        defaultHeading="We're a creative video agency turning ideas into cinematic stories that inspire, engage, & elevate brands."
        defaultButtonText="About us"
        defaultButtonHref="/about-us"
      />
      </EditableSection>
      <EditableSection sectionId="home.services" label="Services">
      <ServicesSection services={services} />
      </EditableSection>
      <EditableSection sectionId="home.whychooseus" label="Why Choose Us">
      <EditableWhyChooseUsSection
        contentKey="home.whyChooseUs"
        defaultSectionTag="why choose us"
        defaultSectionTitle="Why work with us"
        defaultSectionDescription="We combine creativity, strategy, and expertise to deliver videos that truly  inspire audiences."
        defaultButtonText="Contact us"
        defaultButtonHref="/contact-us"
      />
      </EditableSection>
      <EditableSection sectionId="home.howwework" label="How We Work">
      <EditableHowWeWorkSection />
      </EditableSection>
      <EditableSection sectionId="home.pricing" label="Pricing">
      <EditablePricingSection defaultPlans={[]} />
      </EditableSection>
      <EditableSection sectionId="home.testimonials" label="Testimonials">
      <EditableTestimonialsSection defaultTestimonials={testimonials} />
      </EditableSection>
      <EditableSection sectionId="home.faq" label="FAQ">
      <EditableFAQSection
        defaultFaqs={[]}
        coverImageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2d3a81b8ccba0e26d61088a5aa4e7ee9ba77f6f4.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843023272576&amp;alt=media"
        coverImageAlt="Silhouetted band members play instruments in a smoky warehouse, backlit by vibrant orange and teal lights, creating a moody, dramatic ambiance."
      />
      </EditableSection>
      <EditableSection sectionId="home.cta" label="CTA">
      <CTASection
        tag="Lets work together"
        heading="Ready to bring your vision to life? Let's create stunning visuals that captivate, inspire, and deliver results."
        buttonText="contact us"
        buttonHref="/contact-us"
        backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media"
        backgroundAlt="Silhouette of a filmmaker with a camera on a tripod in a dimly lit alley, bathed in orange light and mist, creating a moody, cinematic atmosphere."
      />
      </EditableSection>
    </div>
  );
}