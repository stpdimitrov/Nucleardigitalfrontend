import React from 'react';
import { useCMSStore } from './cmsStore';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { EditableLink } from './EditableLink';
import svgPaths from '../../imports/svg-n44m9q5t7y';
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";

interface EditableCTASectionProps {
  contentKey?: string;
  defaultBackgroundImage?: string;
  defaultBackgroundAlt?: string;
  defaultTag?: string;
  defaultHeading?: string;
  defaultButtonText?: string;
  defaultButtonLink?: string;
}

/**
 * Editable CTA Section - "Lets work together"
 * Reusable component based on DivFramer18Y2YvdContainer-194-664.tsx
 * 100% visually identical to the Framer import
 */
export function EditableCTASection({
  contentKey = 'cta',
  defaultBackgroundImage,
  defaultBackgroundAlt = 'Silhouette of a filmmaker with a camera on a tripod in a dimly lit alley, bathed in orange light and mist, creating a moody, cinematic atmosphere.',
  defaultTag = 'Lets work together',
  defaultHeading = "Ready to bring your vision to life?\nLet's create stunning visuals that\ncaptivate, inspire, and deliver results.",
  defaultButtonText = 'contact us',
  defaultButtonLink = '/contact-us',
}: EditableCTASectionProps) {
  const { isEditMode } = useCMSStore();
  
  // Use the imported image as the default if no custom image is provided
  const backgroundImage = defaultBackgroundImage || imgDesktop;

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="div.framer-18y2yvd-container">
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[463.18px] pt-[463.19px] relative shrink-0 w-full" data-name="Desktop">
        {/* Background Image */}
        <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
          <EditableImage
            contentKey={`${contentKey}.backgroundImage`}
            defaultSrc={backgroundImage}
            alt={defaultBackgroundAlt}
            className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full"
          />
        </div>

        {/* Overlay */}
        <div className={`absolute bg-black inset-[0_0_0.02%_0] opacity-30 ${isEditMode ? 'pointer-events-none' : ''}`} data-name="Overlay" />

        {/* Container */}
        <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px] z-10" data-name="Container">
          {/* Wrapper */}
          <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]" data-name="Wrapper">
            
            {/* Section Tag */}
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
              <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <EditableText
                      contentKey={`${contentKey}.tag`}
                      defaultValue={`<div class="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap"><p class="leading-[22.4px]">${defaultTag}</p></div>`}
                      as="div"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-sfb8j">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
                <EditableText
                  contentKey={`${contentKey}.heading`}
                  defaultValue={`<div class="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[45.4px] text-center text-white tracking-[-1.44px] whitespace-nowrap"><p class="mb-0">Ready to bring your vision to life?</p><p class="mb-0">Let's create stunning visuals that</p><p>captivate, inspire, and deliver results.</p></div>`}
                  as="div"
                  className=""
                  multiline
                />
              </div>
            </div>

            {/* Button Wrapper */}
            <div className="content-stretch flex items-center justify-center pt-[9.1px] relative shrink-0 w-full" data-name="Button wrapper">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                <EditableLink
                  contentKey={`${contentKey}.buttonLink`}
                  defaultValue={defaultButtonLink}
                  className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0"
                  data-name="Small"
                >
                  {/* Description */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <EditableText
                        contentKey={`${contentKey}.buttonText`}
                        defaultValue={`<div class="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabindex="0"><p class="cursor-pointer leading-[22.4px] text-[14.1px]">${defaultButtonText}</p></div>`}
                        as="div"
                        className=""
                      />
                    </div>
                  </div>

                  {/* Icon Wrapper */}
                  <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
                    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
                      {/* Icon:mask */}
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="image fill">
                          <div className="relative shrink-0 size-[15px]" data-name="image">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                              <g id="image">
                                <path d={svgPaths.pb055200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Icon */}
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
                    </div>
                  </div>
                </EditableLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}