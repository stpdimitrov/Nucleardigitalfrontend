import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from '../imports/svg-gfkecmw87r';
import { scrollFadeIn, viewport } from '../lib/animations';
import type { Testimonial } from '@/types';
import imgLiamCarter from "figma:asset/7e73c7aabad20943e4272bca350bb8114758102b.png";
import imgSofiaLane from "figma:asset/4b463d6fb2243401ecb681d36cb89dcaf0c09986.png";
import imgEthanRoss from "figma:asset/92e2965cd21a86fe0952e28b698ba606d7a53405.png";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// Map image URLs to imported images
const imageMap: Record<string, string> = {
  "figma:asset/7e73c7aabad20943e4272bca350bb8114758102b.png": imgLiamCarter,
  "figma:asset/4b463d6fb2243401ecb681d36cb89dcaf0c09986.png": imgSofiaLane,
  "figma:asset/92e2965cd21a86fe0952e28b698ba606d7a53405.png": imgEthanRoss,
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-play carousel - disabled for manual navigation
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? testimonials.length - 1 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section
      aria-label="Testimonials"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]">
        
        {/* Header Section */}
        <div className="h-[106.41px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
          {/* Section Tag */}
          <div className="absolute content-stretch flex h-[22.41px] items-center justify-center left-0 overflow-clip pb-px top-0" data-name="Section tag → Section tag">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="leading-[22.4px]">testimonials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Wrapper */}
          <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text wrapper">
            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.6px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                <p className="leading-[50.4px]">Our Happy Clients</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="mb-0">{`Hear from our amazing clients who trusted us to bring their `}</p>
                <p>creative visions to life.</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to="/services" className="absolute bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center left-[1035.39px] overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] top-[62.41px] hover:bg-[#fdd520] transition-colors" data-name="Button → Small">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}} role="link" tabIndex={0}>
                  <p className="cursor-pointer leading-[22.4px]">What we do</p>
                </div>
              </div>
            </div>
            <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
              <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 5">
                    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <g>
                          <path d={svgPaths.pb055200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center" data-name="Icon">
                  <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Testimonials Content */}
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
          
          {/* Main Large Testimonial Card */}
          <div className="bg-[#242424] relative shrink-0 w-full" data-name="1-desktop">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex gap-[10px] items-start justify-center p-[8px] relative w-full">
                
                {/* Profile Image */}
                <div className="h-[450px] overflow-clip relative shrink-0 w-[385.33px]" data-name="Profile image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-19.37%] max-w-none top-0 w-[138.73%]" src={currentTestimonial.imageUrl ? imageMap[currentTestimonial.imageUrl] : imageMap["figma:asset/7e73c7aabad20943e4272bca350bb8114758102b.png"]} />
                  </div>
                </div>

                {/* Grid 3x */}
                <div className="bg-black content-stretch flex gap-[8px] items-end justify-center p-[16px] relative self-stretch shrink-0" data-name="Grid 3x">
                  {/* Wrapper */}
                  <div className="content-stretch flex flex-col h-full items-start justify-between min-w-[496.44000244140625px] overflow-clip relative shrink-0" data-name="Wrapper">
                    
                    {/* Main */}
                    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Main">
                      {/* Numbers */}
                      <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="Numbers">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1a7d5hi-container">
                          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[4px] relative shrink-0" data-name="div">
                            <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="span">
                              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-white whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                                <p className="leading-[normal]">{currentTestimonial.rating}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-1xvoiz6">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                              <p className="leading-[24px]">{currentTestimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-[446.78px]" data-name="div.framer-1xkec49">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p>"{currentTestimonial.quote}"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="h-[54.8px] overflow-clip relative shrink-0 w-full" data-name="User info">
                      <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[30.8px]">{currentTestimonial.name}</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[30.8px]" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px]">{currentTestimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip pl-[180.21px] pr-[0.01px] relative shrink-0" data-name="div.framer-1nj2aky">
                    {/* Left Arrow */}
                    <button 
                      onClick={handlePrev}
                      className="content-stretch flex flex-col items-start relative shrink-0" 
                      data-name="Slide Arrow"
                      aria-label="Previous testimonial"
                    >
                      <div className={`aspect-[28/28] bg-[#242424] content-stretch flex items-center justify-center overflow-clip py-[6px] relative rounded-[999px] shrink-0 cursor-pointer hover:opacity-100 transition-opacity ${currentIndex === 0 ? 'opacity-60' : 'opacity-100'}`} data-name="In-active">
                        <ChevronLeft className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                    </button>

                    {/* Right Arrow */}
                    <button 
                      onClick={handleNext}
                      className="content-stretch flex flex-col items-start relative shrink-0" 
                      data-name="Slide Arrow"
                      aria-label="Next testimonial"
                    >
                      <div className={`bg-[#242424] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[28px] cursor-pointer hover:opacity-100 transition-opacity ${currentIndex === testimonials.length - 1 ? 'opacity-60' : 'opacity-100'}`} data-name="Active">
                        <ChevronRight className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Horizontal Scrolling Film Reel - Small Testimonial Cards */}
          <div className="relative w-full overflow-hidden max-w-[1240px]">
            <div className="flex gap-[14px]">
              {/* First set of cards */}
              <motion.div
                className="flex gap-[14px] shrink-0"
                animate={{
                  x: [0, -1092], // Width of 3 cards + gaps: (350 * 3) + (14 * 2) = 1078
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`first-${index}`}
                    className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] shrink-0 w-[350px]"
                    data-name="Testimonial card → Testimonials card"
                  >
                    {/* Top Wrapper */}
                    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
                          {/* Numbers */}
                          <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Numbers">
                            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
                              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32.8px] text-white tracking-[-0.72px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                                <p className="leading-[50.4px]">{testimonial.rating}</p>
                              </div>
                            </div>
                            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[54.4px]" data-name="p.framer-text">
                              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.6px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                                <p className="leading-[19.6px]">{testimonial.company}</p>
                              </div>
                            </div>
                          </div>
                          {/* Quote */}
                          <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
                            <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                              <p>{testimonial.quote}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* User Info */}
                    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
                      <div className="overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="User profile">
                        <div className="absolute inset-0 rounded-[999px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={testimonial.imageUrl ? imageMap[testimonial.imageUrl] : ''} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[16px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="leading-[27px] whitespace-pre-wrap">{testimonial.name}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.4px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="leading-[19.6px] whitespace-pre-wrap">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Second set of cards (duplicate for seamless loop) */}
              <motion.div
                className="flex gap-[14px] shrink-0"
                animate={{
                  x: [0, -1092],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`second-${index}`}
                    className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] shrink-0 w-[350px]"
                    data-name="Testimonial card → Testimonials card"
                  >
                    {/* Top Wrapper */}
                    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
                          {/* Numbers */}
                          <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Numbers">
                            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
                              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32.8px] text-white tracking-[-0.72px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                                <p className="leading-[50.4px]">{testimonial.rating}</p>
                              </div>
                            </div>
                            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[54.4px]" data-name="p.framer-text">
                              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.6px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                                <p className="leading-[19.6px]">{testimonial.company}</p>
                              </div>
                            </div>
                          </div>
                          {/* Quote */}
                          <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
                            <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                              <p>{testimonial.quote}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* User Info */}
                    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
                      <div className="overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="User profile">
                        <div className="absolute inset-0 rounded-[999px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={testimonial.imageUrl ? imageMap[testimonial.imageUrl] : ''} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[16px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="leading-[27px] whitespace-pre-wrap">{testimonial.name}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.4px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="leading-[19.6px] whitespace-pre-wrap">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}