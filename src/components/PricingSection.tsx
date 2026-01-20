'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PricingCard } from './PricingCard';
import { scrollFadeIn, staggerContainer, viewport } from '../lib/animations';
import type { PricingPlan } from '@/types';

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
}

export function PricingSection({ pricingPlans }: PricingSectionProps) {
  return (
    <motion.section
      aria-label="Pricing"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
          <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / 1 / auto / -1"}}>
            <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
              <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>pricing plan</p>
              </div>
            </div>
          </div>
          <div aria-label="Text" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
              <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Affordable Plans</h2>
            </div>
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We offer flexible pricing plans tailored to your goals, budget, and creative  needs.</p>
            </div>
          </div>
          <div aria-label="Clients wrapper" className="items-center self-end flex h-min justify-start justify-self-end overflow-clip relative w-full gap-[8px] max-w-[200px]">
            <div aria-label="Images wrapper" className="items-center flex h-min justify-start relative w-[101px] gap-[8px] shrink-[0]">
              <div aria-label="Image 01" className="overflow-clip relative w-7 h-7 shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[''] after:rounded-[62.4375rem]">
                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                  <img alt="Smiling man wearing glasses and a casual blue shirt over a white t-shirt, standing in soft natural light with window shadows on a gray wall behind." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F523154952824a8251ffa08e582f0e8f2fed8eacb.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022947976&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                </div>
              </div>
              <div aria-label="Image 02" className="overflow-clip absolute w-7 h-7 left-6 top-[calc(50%-14px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[''] after:rounded-[62.4375rem]">
                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                  <img alt="Smiling man with short hair and beard wearing a beige shirt stands against a softly lit gray background, casting gentle shadows. The mood is warm and joyful." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5b2cc1f459451bb37dd41dcbb8ab81ded1b5532e.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022952958&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                </div>
              </div>
              <div aria-label="Image 03" className="overflow-clip absolute w-7 h-7 left-12 top-[calc(50%-14px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[''] after:rounded-[62.4375rem]">
                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                  <img alt="Smiling person with short dark hair in a black shirt against a plain grey background. The expression conveys warmth and friendliness." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7d5b2a5776de4952d962e4a683cb95e774fd4420.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022987619&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                </div>
              </div>
              <div aria-label="Icon wrapper" className="items-center flex justify-center overflow-clip absolute w-7 h-7 left-[72px] top-[calc(50%-14px)] bg-black gap-[8px] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[''] after:rounded-[62.4375rem]">
                <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-[14px] shrink-[0]">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F187f8114c905a95cec63cf690f36325b2f10c1da.svg?generation=1768843023090278&amp;alt=media" className="block size-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
              <p className="font-medium text-left text-[rgb(221,_221,_221)] text-[10px] tracking-[-0.2px] leading-[12px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}><span className="text-left text-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>10K+</span> Peoples already  subscribed</p>
            </div>
          </div>
        </div>
        <motion.div
          aria-label="Grid 6x"
          className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[14px] shrink-[0]"
          style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
