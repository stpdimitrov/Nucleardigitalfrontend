'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../lib/animations';
import type { WhyChooseUsItem } from '@/types';

interface WhyChooseUsSectionProps {
  items: WhyChooseUsItem[];
}

export function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  return (
    <motion.section
      aria-label="Why choose us"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        <SectionHeader
          tag="why choose us"
          title="Why work with us"
          description="We combine creativity, strategy, and expertise to deliver videos that truly  inspire audiences."
          buttonText="Contact us"
          buttonHref="/contact-us"
        />
        <motion.div
          aria-label="Grid 6x"
          className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[16px] shrink-[0]"
          style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))"}}
          variants={staggerContainer}
        >
          <motion.div
            aria-label="Grid 3x"
            className="self-start grid h-min justify-center justify-self-start overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[16px]"
            style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))","gridArea":"auto / span 4"}}
            variants={staggerContainer}
          >
            {/* Logo card */}
            <motion.div aria-label="Logo card" className="items-center self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]" variants={staggerItem}>
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <img alt="A person in a red turtleneck and round red sunglasses stands against a matching red background. The mood is bold and stylish, with vibrant red tones." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64a3270e10de32f130e42361b20a73d502badbb2.jpeg%3Fscale-down-to=512&amp;width=1280&amp;height=1280?generation=1768843022915309&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
              </div>
              <div aria-label="Logo" className="relative shrink-[0]">
                <a href="/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Fast Turnaround Card */}
            <motion.div aria-label="Time card" className="items-center self-start flex flex-col justify-center justify-self-start overflow-clip relative w-full h-[350px] bg-[rgb(36,_36,_36)] p-6" style={{"gridArea":"auto / span 2"}} variants={staggerItem}>
              <div className="flex flex-col justify-start relative w-full shrink-[0]">
                <h5 className="font-medium text-center text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Fast Turnaround & On-Time Delivery</h5>
              </div>
            </motion.div>

            {/* Best Camera Gear Card */}
            <motion.div aria-label="Card" className="items-end self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]" style={{"gridArea":"auto / span 2"}} variants={staggerItem}>
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <img alt="A black Leica camera with a textured body is dramatically lit in red, reflecting on a glossy surface. The red background adds a bold, intense mood." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6a74218317bab3b9d86226f78c9ba136e7e3295e.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1152?generation=1768843022845456&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1152]" />
              </div>
              <div className="flex flex-col grow justify-start relative w-px basis-0 shrink-[0]">
                <h5 className="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Shot with the  best camera gear</h5>
              </div>
            </motion.div>

            {/* 24/7 Support Card */}
            <motion.div aria-label="24/7 support" className="self-start justify-self-start relative w-full h-[349px]" variants={staggerItem}>
              <div aria-label="Support card" className="items-start flex flex-col size-full justify-between overflow-clip relative bg-[rgb(36,_36,_36)] p-[14px]">
                <div aria-label="BG Blur" className="overflow-hidden absolute w-full h-[100px] left-0 bottom-0 backdrop-blur-[20px] z-[3] shrink-[0]"></div>
                <div aria-label="Profile image" className="overflow-clip absolute h-[91%] left-0 right-0 bottom-0 z-[2] shrink-[0]">
                  <div className="absolute left-0 top-0 right-0 bottom-0">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fffc55ccfed2fddbf3312b5052ae7855ffa1394c1.png%3Fwidth=432&amp;height=577?generation=1768843022847170&amp;alt=media" className="block size-full object-contain object-bottom overflow-clip aspect-[auto_432_/_577]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start relative w-full z-[4] shrink-[0]">
                  <h5 className="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Dedicated 24/7 Support</h5>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
