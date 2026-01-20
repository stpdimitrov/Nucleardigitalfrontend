'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';
import { viewport } from '../lib/animations';
import type { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  console.log('ServicesSection rendering with', services.length, 'services');
  
  return (
    <section
      aria-label="Services"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
    >
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        <SectionHeader
          tag="Our services"
          title="What We Offer"
          description="We create impactful videos that inspire audiences, tell stories, and elevate  your brand."
          buttonText="Contact us"
          buttonHref="/contact-us"
        />
        <div
          aria-label="Services wrapper"
          className="items-center flex flex-col h-min justify-center relative w-full gap-[30px] shrink-[0]"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              aria-label="Service card"
              className="relative w-full z-[4] shrink-[0]"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.2
              }}
              onViewportEnter={() => console.log(`Card ${index} entered viewport`)}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}