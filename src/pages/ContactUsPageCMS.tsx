import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCMSStore } from '../src/cms/cmsStore';
import { EditableText } from '../src/cms/EditableText';
import { EditableFAQSection } from '../src/cms/EditableFAQSection';
import { EditableCTASection, EditableSection } from '../src/cms';
import { EditableImage } from '../src/cms/EditableImage';
import { submitAppointment } from '../services/api';
import svgPaths from "../imports/svg-caky0u7ahw";
import imgCoverImageSilhouetteOfACameraOperatorFilmingOnAProfessionalSetSurroundedByBrightStudioLightsTheSceneConveysFocusAndCreativeEnergy from "figma:asset/f0ab34e01eb7a68a97d2f698b486de3693299155.png";
import imgCoverImageSilhouettedBandMembersPlayInstrumentsInASmokyWarehouseBacklitByVibrantOrangeAndTealLightsCreatingAMoodyDramaticAmbiance from "figma:asset/0103be52b0be1ee4c947007cec96aea7cc4137fe.png";
import { GlobeAnimation } from '../src/cms/GlobeAnimation';

export function ContactUsPageCMS() {
  const { isEditMode, getContent } = useCMSStore();
  const officeAddress = getContent('contactUs.officeGlobe.address', 'London, UK');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');
    try {
      await submitAppointment({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        service: formData.service || undefined,
        message: formData.message || undefined,
      });
      setSubmitStatus('success');
      setSubmitMessage('Thank you! We will be in touch shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="main" data-framer-generated-page className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <Helmet>
        <title>Contact Us | Nuclear Digital</title>
        <meta name="description" content="Get in touch with Nuclear Digital. Let's discuss your project and build something remarkable together." />
        <meta property="og:title" content="Contact Us | Nuclear Digital" />
        <meta property="og:description" content="Get in touch with Nuclear Digital. Let's discuss your project and build something remarkable together." />
        <meta property="og:url" content="https://www.newcleardigital.com/contact-us" />
        <link rel="canonical" href="https://www.newcleardigital.com/contact-us" />
      </Helmet>

      {/* Hero Section - Let's Connect */}
      <EditableSection sectionId="contact.hero" label="Contact Hero">
      <section aria-label="Contact hero" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] md:pt-[140px] pr-0 pb-[60px] md:pb-[100px] pl-0">

        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[48px] md:gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">

          {/* Hero header - responsive flex */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
            <div className="shrink-0">
              <p className="font-medium uppercase text-white text-[14px] tracking-[-0.16px]" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <EditableText contentKey="contactUs.hero.sectionTag" defaultValue="contact us" as="span" />
              </p>
            </div>
            <div className="flex flex-col gap-[8px] flex-1 md:max-w-lg">
              <div className="font-medium text-white text-[36px] md:text-[57px] tracking-[-1.2px] md:tracking-[-1.8px] leading-[1.1]" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <EditableText contentKey="contactUs.hero.heading" defaultValue="Let's Connect" as="span" />
              </div>
              <div className="opacity-60 font-medium text-[#ddd] text-[16px] leading-[27px] whitespace-pre-wrap" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <EditableText contentKey="contactUs.hero.description1" defaultValue="Connect with our team for collaborations, " as="span" />
                <EditableText contentKey="contactUs.hero.description2" defaultValue="inquiries, and creative opportunities." as="span" />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-[4px] shrink-0">
              <p className="font-medium uppercase text-white text-[14px] tracking-[-0.16px]" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <EditableText contentKey="contactUs.hero.scrollDownText" defaultValue="Scroll down" as="span" />
              </p>
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Grid 2x - Hero Image + Form */}
          <div className="flex flex-col md:flex-row gap-[22px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
            
            {/* Cover Image */}
            <div className="w-full md:flex-[1_0_0] min-h-[300px] md:min-h-px relative self-stretch" data-name="Cover image">
              <div className={`absolute inset-0 overflow-hidden rounded-[12px] ${isEditMode ? '' : 'pointer-events-none'}`}>
                <EditableImage
                  contentKey="contactUs.hero.coverImage"
                  defaultSrc={imgCoverImageSilhouetteOfACameraOperatorFilmingOnAProfessionalSetSurroundedByBrightStudioLightsTheSceneConveysFocusAndCreativeEnergy}
                  alt="Silhouette of a camera operator filming on a professional set"
                  className="absolute h-[106.36%] left-0 max-w-none top-[-3.18%] w-full"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#242424] w-full md:flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="Form">
              <div className="overflow-clip rounded-[inherit] size-full">
                <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                  
                  {/* Name Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">
                          <EditableText
                            contentKey="contactUs.form.nameLabel"
                            defaultValue="Your name:"
                            as="span"
                          />
                        </p>
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
                          style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">
                          <EditableText
                            contentKey="contactUs.form.emailLabel"
                            defaultValue="Email Address"
                            as="span"
                          />
                        </p>
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
                          style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">
                          <EditableText contentKey="contactUs.form.phoneLabel" defaultValue="Phone Number" as="span" />
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px overflow-clip py-[10px] relative w-full">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (310) 000-0000"
                          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-px relative w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14.6px] placeholder:text-[#ddd]"
                          style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select Services */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form label">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">
                          <EditableText
                            contentKey="contactUs.form.serviceLabel"
                            defaultValue="Select Services"
                            as="span"
                          />
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full bg-transparent border-none outline-none font-normal text-[#ddd] text-[14px] appearance-none cursor-pointer"
                          style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
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
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                        <p className="leading-[24px] whitespace-pre-wrap">
                          <EditableText
                            contentKey="contactUs.form.messageLabel"
                            defaultValue="Message"
                            as="span"
                          />
                        </p>
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
                        style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                      />
                      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Status message */}
                  {submitStatus !== 'idle' && (
                    <div className={`w-full px-4 py-3 rounded-lg text-sm font-medium ${submitStatus === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {submitMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Form button">
                    <button type="submit" disabled={submitting} className="bg-[#fdc500] disabled:opacity-60 disabled:cursor-not-allowed content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[1000px] w-full hover:bg-[#fdd520] transition-colors cursor-pointer">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-black tracking-[-0.32px] whitespace-nowrap uppercase" style={{fontFamily:"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                            <p className="leading-[24px]">
                              {submitting ? 'Sending...' : (
                                <EditableText
                                  contentKey="contactUs.form.submitButtonText"
                                  defaultValue="Submit"
                                  as="span"
                                />
                              )}
                            </p>
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
      </EditableSection>

      {/* Google Map Section */}
      <EditableSection sectionId="contact.map" label="Map">
      <section aria-label="Map" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-0 pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div className="content-stretch flex flex-col h-[650px] items-start justify-center relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="Google map">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`}
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
      </EditableSection>

      {/* Contact Info Cards Section */}
      <EditableSection sectionId="contact.info" label="Contact Info">
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
                          <p className="leading-[30.8px] whitespace-pre-wrap">
                            <EditableText
                              contentKey="contactUs.cards.contactCard.title"
                              defaultValue="Contact us"
                              as="span"
                            />
                          </p>
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
                            <p className="leading-[24px]">
                              <EditableText
                                contentKey="contactUs.cards.contactCard.phone"
                                defaultValue="+1 (310) 458-9274"
                                as="span"
                              />
                            </p>
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
                            <p className="cursor-pointer leading-[24px]">
                              <EditableText
                                contentKey="contactUs.cards.contactCard.email"
                                defaultValue="name@email.com"
                                as="span"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                    {/* Location */}
                    <a className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative shrink-0 w-full group hover:opacity-100 transition-opacity duration-200" data-name="Contact link → Contact link" href={`https://www.google.com/maps/search/${encodeURIComponent(officeAddress)}`}>
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
                            <p className="cursor-pointer leading-[24px]">
                              <span>{officeAddress}</span>
                            </p>
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
                          <p className="leading-[30.8px] whitespace-pre-wrap">
                            <EditableText
                              contentKey="contactUs.cards.socialCard.title"
                              defaultValue="Follow us on"
                              as="span"
                            />
                          </p>
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
                            <p className="cursor-pointer leading-[24px]">
                              <EditableText
                                contentKey="contactUs.cards.socialCard.dribbble"
                                defaultValue="Dribbble"
                                as="span"
                              />
                            </p>
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
                            <p className="cursor-pointer leading-[24px]">
                              <EditableText
                                contentKey="contactUs.cards.socialCard.twitter"
                                defaultValue="Twitter-X"
                                as="span"
                              />
                            </p>
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
                            <p className="cursor-pointer leading-[24px]">
                              <EditableText
                                contentKey="contactUs.cards.socialCard.linkedin"
                                defaultValue="Linkedin"
                                as="span"
                              />
                            </p>
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
                <div className="content-stretch flex flex-col items-start pb-[8px] pt-[23px] px-[24px] relative size-full" style={{ minHeight: 380 }}>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-a4b5g0">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.5px] text-white tracking-[-0.44px] w-full">
                          <p className="leading-[30.8px] whitespace-pre-wrap">
                            <EditableText
                              contentKey="contactUs.cards.officeCard.title"
                              defaultValue="Visit our Office"
                              as="span"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Globe */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center" style={{ height: 320 }}>
                    <GlobeAnimation
                      latKey="contactUs.officeGlobe.lat"
                      lngKey="contactUs.officeGlobe.lng"
                      addressKey="contactUs.officeGlobe.address"
                      defaultLat={51.5}
                      defaultLng={-0.13}
                      defaultAddress="London, UK"
                      width={320}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </EditableSection>

      {/* FAQ Section */}
      <EditableSection sectionId="contact.faq" label="FAQ">
      <EditableFAQSection
        defaultFaqs={[]}
        coverImageUrl={imgCoverImageSilhouettedBandMembersPlayInstrumentsInASmokyWarehouseBacklitByVibrantOrangeAndTealLightsCreatingAMoodyDramaticAmbiance}
        coverImageAlt="Dramatic scene with people in fog with orange and teal lighting"
      />
      </EditableSection>

      {/* Let's Work Together Section - CTA */}
      <EditableSection sectionId="contact.cta" label="CTA">
      <EditableCTASection contentKey="contact.cta" />
      </EditableSection>
    </div>
  );
}