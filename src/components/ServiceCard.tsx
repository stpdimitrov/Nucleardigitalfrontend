'use client';

// Service Card Component with Motion animations
// CRITICAL: Maintains exact markup from original App.tsx
// Only adds scroll-triggered animations and hover effects

import { motion } from "motion/react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div 
      aria-label="Service card" 
      className="self-start justify-self-start relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15 // Slower stagger for services
      }}
    >
      <motion.div 
        aria-label="Service card" 
        className="items-center flex h-min justify-center relative w-full gap-[10px] min-h-[440px]"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div aria-label="BG blur" className="absolute w-full h-[175px] left-[0%] bottom-0 backdrop-blur-[10px] z-[2] shrink-[0]"></div>
        <motion.div 
          aria-label="Video" 
          className="size-full pointer-events-none absolute left-[0%] top-[0%] z-[1] shrink-[0]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <video src={service.videoUrl} className="size-full object-cover overflow-clip pointer-events-none"></video>
        </motion.div>
        <div aria-label="Text" className="items-start flex flex-col h-min justify-center absolute w-full left-[50%] bottom-0 gap-[16px] p-5 translate-x-[-50%] z-[3] shrink-[0]">
          <div aria-label="Heading" className="items-center flex flex-col h-min justify-center relative w-full gap-[8px] shrink-[0]">
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full z-[2] shrink-[0]">
              <h6 className="font-medium text-left text-white text-[28px] tracking-[-0.84px] leading-[29.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{service.title}</h6>
            </div>
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
              <p className="text-left text-white text-[14px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{service.description}</p>
            </div>
          </div>
          <div aria-label="Wrapper" className="items-center flex flex-wrap h-min justify-start relative w-full gap-[8px] shrink-[0]">
            {service.features.map((feature, i) => (
              <motion.div 
                key={feature.id}
                aria-label="Blog tag" 
                className="items-center flex size-min justify-start overflow-clip relative backdrop-blur-[10px] gap-[8px] pt-1 pr-3 pb-1 pl-3 after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white/10 after:content-['']"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.5 + (i * 0.05) // Stagger tags after card entrance
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{feature.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
