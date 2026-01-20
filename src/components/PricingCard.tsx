'use client';

// Pricing Card Component with Motion animations
// CRITICAL: Maintains exact markup from original App.tsx
// Only adds scroll-triggered animations and hover effects

import { motion } from "motion/react";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div 
      aria-label="Pricing card" 
      className="self-start justify-self-start relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12
      }}
    >
      <motion.div 
        aria-label="Pricing card" 
        className="items-center flex flex-col h-min justify-center overflow-clip relative w-full backdrop-blur-[10px] gap-[32px] pt-8 pr-8 pb-8 pl-8 after:border-2 after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white/10 after:content-['']"
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
      >
        {plan.isPopular && (
          <motion.div 
            aria-label="Popular badge" 
            className="items-center flex size-min justify-center overflow-clip absolute left-[50%] top-[-18px] backdrop-blur-[10px] gap-[8px] pt-1 pr-5 pb-1 pl-5 translate-x-[-50%] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white/10 after:content-['']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
              <p className="font-medium uppercase text-[rgb(253,_197,_0)] text-[14px] tracking-[2.1px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(253, 197, 0)"}}>Popular</p>
            </div>
          </motion.div>
        )}
        <div aria-label="Header" className="items-center flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0]">
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
            <h6 className="font-medium text-center text-white text-[28px] tracking-[-0.84px] leading-[29.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{plan.name}</h6>
          </div>
          <div aria-label="Price" className="items-center flex h-min justify-center relative w-full gap-[4px] shrink-[0]">
            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
              <h2 className="font-medium text-white text-[48px] tracking-[-1.92px] leading-[50.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{plan.price}</h2>
            </div>
            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
              <p className="text-white text-[16px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{plan.period}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
            <p className="text-center text-white text-[14px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{plan.description}</p>
          </div>
        </div>
        <div aria-label="Divider" className="relative w-full h-px bg-[rgb(68,_68,_68)] shrink-[0]"></div>
        <div aria-label="Features" className="items-start flex flex-col h-min justify-center relative w-full gap-[16px] shrink-[0]">
          {plan.features.map((feature, i) => (
            <motion.div 
              key={feature.id}
              aria-label="Feature" 
              className="items-center flex h-min justify-start relative w-full gap-[12px] shrink-[0]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: 0.6 + (i * 0.08) // Stagger features
              }}
            >
              <div aria-label="Icon" className="relative shrink-[0]">
                <div className={`relative ${feature.included ? 'w-5 h-5' : 'aspect-square w-6'} shrink-[0]`}>
                  <div className="absolute left-0 top-0 right-0 bottom-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 256 256" 
                      focusable="false" 
                      className={`block size-full object-cover overflow-clip ${feature.included ? 'text-white' : 'text-white/30'}`}
                      style={{color: feature.included ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.3)"}}
                    >
                      {feature.included ? (
                        <g color="rgb(255, 255, 255)"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></g>
                      ) : (
                        <g color="rgba(255, 255, 255, 0.3)"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></g>
                      )}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap grow basis-0 shrink-[0] opacity-[0.8]">
                <p className="text-left text-white text-[16px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div aria-label="Button" className="relative w-full shrink-[0]">
          <motion.a 
            href={plan.ctaUrl}
            aria-label="Button" 
            className="items-center flex h-min justify-center overflow-clip relative w-full text-[rgb(0,_0,_238)] gap-[8px] pt-3 pr-6 pb-3 pl-6 after:border-2 after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-['']" 
            style={{"textDecoration":"rgb(0, 0, 238)"}}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
              <p className="font-medium uppercase text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{plan.ctaText}</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
