import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { scrollFadeIn, viewport } from '../../lib/animations';
import { useCMSStore } from './cmsStore';
import { EditableImage } from './EditableImage';
import { EditableText } from './EditableText';
import { EditableOverlay } from './EditableOverlay';
import { SiteLogo } from './SiteLogo';

interface EditableAboutUsSectionProps {
  contentKey?: string;
  defaultBackgroundImage?: string;
  defaultBackgroundAlt?: string;
  defaultHeading?: string;
  defaultButtonText?: string;
  defaultButtonHref?: string;
  defaultOverlayOpacity?: number;
  defaultOverlayColor?: string;
  showLogo?: boolean;
}

export function EditableAboutUsSection({
  contentKey = 'aboutUsSection',
  defaultBackgroundImage = 'https://framerusercontent.com/images/HEAOCxviii67uzFqzwzTJpBfTw.jpg',
  defaultBackgroundAlt = 'Background',
  defaultHeading = 'The creative agency for studios & production companies.',
  defaultButtonText = 'More about us',
  defaultButtonHref = '/about-us',
  defaultOverlayOpacity = 30,
  defaultOverlayColor = '#000000',
  showLogo = true
}: EditableAboutUsSectionProps) {
  const { isEditMode, getContent } = useCMSStore();

  // Get current values from CMS
  const backgroundAlt = getContent(`${contentKey}.backgroundAlt`, defaultBackgroundAlt);
  const buttonHref = getContent(`${contentKey}.buttonHref`, defaultButtonHref);

  return (
    <motion.section
      aria-label="About us"
      className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      {/* Background Image — EditableImage handles upload, Supabase Storage, and backend persist */}
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <EditableImage
          contentKey={`${contentKey}.backgroundImage`}
          defaultSrc={defaultBackgroundImage}
          alt={backgroundAlt}
          className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]"
        />
      </div>

      {/* Overlay with editable opacity and color */}
      <EditableOverlay
        contentKey={contentKey}
        defaultOpacity={defaultOverlayOpacity}
        defaultColor={defaultOverlayColor}
        className="size-full overflow-clip left-[0%] top-[0%] z-[1] shrink-[0]"
      >
        <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] z-[1] shrink-[0]">
            {showLogo && (
              <SiteLogo
                heightKey="site.logoHeightNavbar"
                defaultHeight={36}
                minHeight={16}
                maxHeight={100}
              />
            )}

            {/* Editable Heading */}
            <div className="flex flex-col justify-start relative w-full shrink-[0]">
              <EditableText
                contentKey={`${contentKey}.heading`}
                defaultValue={`<h2 class="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style="font-family:Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif;text-decoration:rgb(255, 255, 255)">${defaultHeading}</h2>`}
                as="div"
                className=""
              />
            </div>

            {/* Button with Editable Text */}
            <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-2 pr-0 pb-0 pl-0 shrink-[0]">
              <div aria-label="Button" className="relative shrink-[0]">
                <Link to={buttonHref} aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <EditableText
                      contentKey={`${contentKey}.buttonText`}
                      defaultValue={`<p class="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style="font-family:&quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${defaultButtonText}</p>`}
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </EditableOverlay>
    </motion.section>
  );
}

