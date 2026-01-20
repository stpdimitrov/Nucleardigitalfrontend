'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { scrollFadeIn, viewport } from '../lib/animations';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const mainTestimonial = testimonials[0];

  return (
    <motion.section
      aria-label="Testimonials"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        <SectionHeader
          tag="testimonials"
          title="Our Happy Clients"
          description="Hear from our amazing clients who trusted us to bring their creative  visions to life."
          buttonText="What we do"
          buttonHref="/services"
        />
        {mainTestimonial && (
          <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[20px] shrink-[0]">
            <div className="relative w-full shrink-[0]">
              <div aria-label="1-desktop" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] bg-[rgb(36,_36,_36)] gap-[10px] p-2" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                <div aria-label="Profile image" className="self-start justify-self-start overflow-clip relative w-full h-[450px]" style={{"gridArea":"auto / span 2"}}>
                  <div className="absolute left-0 top-0 right-0 bottom-0">
                    <img alt={mainTestimonial.imageAlt} src={mainTestimonial.imageUrl} className="block size-full object-cover overflow-clip aspect-[auto_902_/_759]" />
                  </div>
                </div>
                <div aria-label="Grid 3x" className="self-start grid size-full justify-center justify-self-start relative grid-rows-[repeat(1,minmax(0px,1fr))] bg-black gap-[8px] p-4" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))","gridArea":"auto / span 4"}}>
                  <div aria-label="Wrapper" className="items-start self-center flex flex-col size-full justify-between justify-self-start overflow-clip relative" style={{"gridArea":"auto / span 2"}}>
                    <div aria-label="Main" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full gap-[20px] shrink-[0]">
                      <div aria-label="Numbers" className="items-start flex flex-col h-min justify-center relative w-full gap-[2px] shrink-[0]">
                        <div className="relative shrink-[0]">
                          <div className="items-center flex font-medium justify-center text-white text-[60px] gap-[4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>
                            <span className="block">{mainTestimonial.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{mainTestimonial.metric}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>"{mainTestimonial.quote}"</p>
                      </div>
                    </div>
                    <div aria-label="User info" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[0px] shrink-[0]">
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                        <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{mainTestimonial.name}</p>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{mainTestimonial.position || mainTestimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center self-end flex h-min justify-end justify-self-end overflow-clip relative w-full gap-[8px]">
                    <div aria-label="Slide Arrow" className="pointer-events-none relative shrink-[0]">
                      <div aria-label="In-active" className="items-center aspect-square flex justify-center overflow-clip pointer-events-none relative w-7 bg-[rgb(36,_36,_36)] gap-[8px] opacity-[0.6] rounded-[62.4375rem]">
                        <div aria-label="Arrow" className="aspect-square pointer-events-none relative w-4 bg-white shrink-[0]"></div>
                      </div>
                    </div>
                    <div aria-label="Slide Arrow" className="relative shrink-[0]">
                      <div aria-label="Active" className="items-center flex justify-center overflow-clip relative w-7 h-7 bg-[rgb(36,_36,_36)] gap-[8px] rounded-[62.4375rem]">
                        <div aria-label="Arrow" className="aspect-square relative w-4 bg-white shrink-[0]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}