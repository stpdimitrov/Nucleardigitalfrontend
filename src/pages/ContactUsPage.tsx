import React, { useState } from 'react';
import { FAQSection } from '../components/FAQSection';
import svgPaths from "../imports/svg-caky0u7ahw";
import imgCoverImageSilhouetteOfACameraOperatorFilmingOnAProfessionalSetSurroundedByBrightStudioLightsTheSceneConveysFocusAndCreativeEnergy from "figma:asset/f0ab34e01eb7a68a97d2f698b486de3693299155.png";
import imgCoverImageSilhouettedBandMembersPlayInstrumentsInASmokyWarehouseBacklitByVibrantOrangeAndTealLightsCreatingAMoodyDramaticAmbiance from "figma:asset/0103be52b0be1ee4c947007cec96aea7cc4137fe.png";
import imgGlobe from "figma:asset/e55f19621fc993b2cbf97f430d52ffb48c20a89a.png";
import { imgDiv } from "../imports/svg-rh7ls";
import { EditableCTASection } from '../src/cms';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="main" data-framer-generated-page className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      
      {/* Hero Section - Let's Connect */}
      <section aria-label="Contact hero" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[140px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          
          {/* Grid 6x - Section Tag + Text + Scroll Down */}
          <div className="h-[125px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
            {/* Section Tag */}
            <div className="absolute content-stretch flex flex-col items-start left-0 right-[800px] top-0" data-name="Section tag">
              <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                      <p className="leading-[22.4px]">contact us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text - Heading + Description */}
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57px] text-white tracking-[-1.8px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                  <p className="leading-[63px] whitespace-pre-wrap">Let's Connect</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full">
                <div className="flex flex-col font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full whitespace-pre-wrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                  <p className="mb-0">{`Connect with our team for collaborations, `}</p>
                  <p>inquiries, and creative opportunities.</p>
                </div>
              </div>
            </div>

            {/* Scroll Down */}
            <div className="absolute content-stretch flex gap-[4px] h-[22.41px] items-center justify-end left-[1067.17px] overflow-clip pb-px top-[102.59px]" data-name="Scroll down">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                    <p className="leading-[22.4px]">Scroll down</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[18px]">
                <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[18px]">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute bg-white right-0 size-[18px] top-1/2" />
              </div>
            </div>
          </div>

          {/* Grid 2x - Hero Image + Form */}
          <div className="content-stretch flex gap-[22px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
            
            {/* Cover Image */}
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img alt="Silhouette of a camera operator filming on a professional set" className="absolute h-[106.36%] left-0 max-w-none top-[-3.18%] w-full" src={imgCoverImageSilhouetteOfACameraOperatorFilmingOnAProfessionalSetSurroundedByBrightStudioLightsTheSceneConveysFocusAndCreativeEnergy} />
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Form">
              <div className="overflow-clip rounded-[inherit] size-full">
                <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                  
                  {/* Name Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">Your name:</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px overflow-clip py-[10px] relative w-full">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          required
                          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-px relative w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14.6px] placeholder:text-[#ddd]"
                          style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">Email Address</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px overflow-clip py-[10px] relative w-full">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="testing@gmail.com"
                          required
                          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-px relative w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14.6px] placeholder:text-[#ddd]"
                          style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select Services */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">Select Services</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14px] appearance-none cursor-pointer"
                          style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        >
                          <option value="" className="bg-[#242424]">Select…</option>
                          <option value="video-production" className="bg-[#242424]">Video Production</option>
                          <option value="creative-direction" className="bg-[#242424]">Creative Direction</option>
                          <option value="post-production" className="bg-[#242424]">Post-Production & Editing</option>
                        </select>
                      </div>
                      <div className="absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0 w-[26px]">
                        <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip pl-[10px] py-[12px] relative shrink-0 w-[26px]">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <path d="M3.5 6L8 10.5L12.5 6" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">Message</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start min-h-[150px] overflow-clip relative shrink-0 w-full">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        className="h-[150px] min-h-[150px] overflow-x-clip overflow-y-auto relative shrink-0 w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14.1px] resize-none placeholder:text-[#ddd]"
                        style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                      />
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Form button">
                    <button type="submit" className="bg-[#fdc500] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[1000px] w-full hover:bg-[#fdd520] transition-colors cursor-pointer">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-black tracking-[-0.32px] whitespace-nowrap uppercase" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                            <p className="leading-[24px]">Submit</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section aria-label="Map" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-0 pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div className="content-stretch flex flex-col h-[650px] items-start justify-center relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="Google map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4326!2d-118.37!3d34.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzI0LjAiTiAxMTjCsDIyJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section aria-label="Contact info" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-0 pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[24px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 3x" className="content-stretch flex gap-[20px] items-start justify-center relative size-full" data-name="Grid 3x">
            
            {/* Contact Us Card */}
            <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative" data-name="Contact links card">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
                  {/* Title */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-b7jnuw">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] w-full">
                          <p className="leading-[30.8px] whitespace-pre-wrap">Contact us</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Contact Links */}
                  <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Contact links">
                    {/* Phone */}
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full group hover:opacity-100 transition-opacity duration-200" data-name="Contact link → Contact link">
                      <div className="relative shrink-0 size-[20px] group-hover:scale-110 transition-transform duration-200" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.ped9e318} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                            <path d={svgPaths.pb49d0d0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                            <path d={svgPaths.p8e70680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col items-start min-w-[308px] opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-1jqims8">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.3px] tracking-[-0.32px] whitespace-nowrap">
                            <p className="leading-[24px]">+1 (310) 458-9274</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                    {/* Email */}
                    <a className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative shrink-0 w-full group hover:opacity-100 transition-opacity duration-200" data-name="Contact link → Contact link" href="mailto:name@email.com">
                      <div className="relative shrink-0 size-[20px] group-hover:scale-110 transition-transform duration-200" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p11124300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                            <path d={svgPaths.p12732400} fill="white" />
                            <path d={svgPaths.pdff3d00} fill="white" />
                            <path d={svgPaths.p5156f70} fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col items-start min-w-[308px] opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-1jqims8">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] text-left tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex={0}>
                            <p className="cursor-pointer leading-[24px]">name@email.com</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                    {/* Location */}
                    <a className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative shrink-0 w-full group hover:opacity-100 transition-opacity duration-200" data-name="Contact link → Contact link" href="https://www.google.com/maps/search/92+Crescent+Avenue,+Los+Angeles,+CA/@34.0892625,-118.3685139,578m/data=!3m2!1e3!4b1">
                      <div className="relative shrink-0 size-[20px] group-hover:scale-110 transition-transform duration-200" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p2ccd5b00} fill="white" />
                            <path d={svgPaths.p1c1c9480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                            <path d={svgPaths.p19383700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col items-start min-w-[308px] opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-1jqims8">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] text-left tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex={0}>
                            <p className="cursor-pointer leading-[24px]">Los Angeles, CA</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us On Card */}
            <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Social links card">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[23px] px-[24px] relative size-full">
                  {/* Title */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1tcqeed">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] w-full">
                          <p className="leading-[30.8px] whitespace-pre-wrap">Follow us on</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social Links */}
                  <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Social links">
                    {/* Dribbble */}
                    <a className="content-stretch cursor-pointer flex items-center justify-between relative shrink-0 w-full group" data-name="Social link → Social link" href="https://dribbble.com/">
                      <div className="content-stretch flex flex-col items-start opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-immjyo">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex={0}>
                            <p className="cursor-pointer leading-[24px]">Dribbble</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center opacity-60 group-hover:opacity-100 overflow-clip relative shrink-0 transition-opacity duration-200" data-name="Icon Wrapper">
                        <div className="relative shrink-0 size-[20px] group-hover:translate-x-1 transition-transform duration-200" data-name="Icon:mask-group">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 6">
                              <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <g>
                                    <path d={svgPaths.p3b6ad300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
                        </div>
                      </div>
                    </a>
                    <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                    {/* Twitter-X */}
                    <a className="content-stretch cursor-pointer flex items-center justify-between relative shrink-0 w-full group" data-name="Social link → Social link" href="https://x.com/home">
                      <div className="content-stretch flex flex-col items-start opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-immjyo">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex={0}>
                            <p className="cursor-pointer leading-[24px]">Twitter-X</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center opacity-60 group-hover:opacity-100 overflow-clip relative shrink-0 transition-opacity duration-200" data-name="Icon Wrapper">
                        <div className="relative shrink-0 size-[20px] group-hover:translate-x-1 transition-transform duration-200" data-name="Icon:mask-group">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 6">
                              <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <g>
                                    <path d={svgPaths.p3b6ad300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
                        </div>
                      </div>
                    </a>
                    <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                    {/* LinkedIn */}
                    <a className="content-stretch cursor-pointer flex items-center justify-between relative shrink-0 w-full group" data-name="Social link → Social link" href="https://www.linkedin.com/">
                      <div className="content-stretch flex flex-col items-start opacity-60 group-hover:opacity-100 relative shrink-0 transition-opacity duration-200" data-name="div.framer-immjyo">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex={0}>
                            <p className="cursor-pointer leading-[24px]">Linkedin</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center opacity-60 group-hover:opacity-100 overflow-clip relative shrink-0 transition-opacity duration-200" data-name="Icon Wrapper">
                        <div className="relative shrink-0 size-[20px] group-hover:translate-x-1 transition-transform duration-200" data-name="Icon:mask-group">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 6">
                              <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <g>
                                    <path d={svgPaths.p3b6ad300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Our Office Card with Globe */}
            <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Office card">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start pb-[162px] pt-[23px] px-[24px] relative size-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-a4b5g0">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.5px] text-white tracking-[-0.44px] w-full">
                          <p className="leading-[30.8px] whitespace-pre-wrap">Visit our Office</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Globe */}
                  <div className="absolute bottom-[-202px] content-stretch flex flex-col items-start justify-center right-px w-[369px]" data-name="Globe">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="div">
                      <div className="flex-[1_0_0] h-[372px] max-w-[800px] min-h-px min-w-px relative" data-name="div:mask-group">
                        <div className="-translate-y-1/2 absolute aspect-[369/372] content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_372px] max-w-[800px] pb-[3px] right-0 top-1/2" data-name="div" style={{ maskImage: `url('${imgDiv}')` }}>
                          <div className="h-[369px] relative shrink-0 w-full" data-name="image">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute left-0 max-w-none size-full top-0 animate-[spin_20s_linear_infinite]" src={imgGlobe} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[]}
        coverImageUrl={imgCoverImageSilhouettedBandMembersPlayInstrumentsInASmokyWarehouseBacklitByVibrantOrangeAndTealLightsCreatingAMoodyDramaticAmbiance}
        coverImageAlt="Dramatic scene with people in fog with orange and teal lighting"
      />

      {/* Let's Work Together Section */}
      <EditableCTASection contentKey="contact.cta" />
    </div>
  );
}