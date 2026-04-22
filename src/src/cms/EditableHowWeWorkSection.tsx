import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Settings, Plus, Trash2, Image as ImageIcon, Palette, Layout, Type, Upload, Search, X } from 'lucide-react';
import { useCMSStore } from './cmsStore';
import { uploadMedia } from '../../services/api';
import { EditableText } from './EditableText';
import { useDrag, useDrop } from 'react-dnd';
import { scrollFadeIn, viewport } from '../../lib/animations';
import svgPaths from "../../imports/svg-awqwrfynnl";
import imgCoverImageConnect from "figma:asset/64551b4f8a24e6e0541fe588b92468f0e00c3a5e.png";

// Process Step Interface
interface ProcessStep {
  id: string;
  icon: 'lightning' | 'star' | 'heart' | 'zap' | 'sparkles';
  title: string;
  step: string;
  heading: string;
  description: string;
  coverImage: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  // Visual Customization
  backgroundColor?: string;
  cardBackgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  textColor?: string;
  accentColor?: string;
}

// Section Settings Interface
interface SectionSettings {
  layout: 'horizontal' | 'vertical' | 'grid';
  showStepNumbers: boolean;
  showIcons: boolean;
  cardStyle: 'modern' | 'classic' | 'minimal';
  imagePosition: 'left' | 'right' | 'top' | 'background';
  animationStyle: 'fade' | 'slide' | 'none';
}

interface EditableHowWeWorkSectionProps {
  contentKey?: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    icon: 'lightning',
    title: 'Connect',
    step: '001.',
    heading: 'Connect',
    description: "Start by sharing your vision and goals — we'll collaborate closely to plan a creative direction perfectly suited to your brand.",
    coverImage: imgCoverImageConnect,
    imageAlt: 'Connect - Collaboration and Planning',
    buttonText: 'Contact us',
    buttonHref: '/contact-us',
    backgroundColor: '#000000',
    cardBackgroundColor: '#242424',
    buttonColor: '#fdc500',
    buttonTextColor: '#000000',
    textColor: '#ffffff',
    accentColor: '#0099FF',
  },
  {
    id: 'step-2',
    icon: 'lightning',
    title: 'Create',
    step: '002.',
    heading: 'Create',
    description: "Our team brings your story to life through expert filming, directing, and production—capturing every detail with precision and creativity.",
    coverImage: imgCoverImageConnect,
    imageAlt: 'Create - Production and Filming',
    buttonText: 'Our Services',
    buttonHref: '/services',
    backgroundColor: '#000000',
    cardBackgroundColor: '#242424',
    buttonColor: '#fdc500',
    buttonTextColor: '#000000',
    textColor: '#ffffff',
    accentColor: '#0099FF',
  },
  {
    id: 'step-3',
    icon: 'lightning',
    title: 'Launch',
    step: '003.',
    heading: 'Launch',
    description: "We finalize every element through editing, color grading, and sound design—then deliver your polished video ready to captivate your audience.",
    coverImage: imgCoverImageConnect,
    imageAlt: 'Launch - Final Delivery',
    buttonText: 'View Projects',
    buttonHref: '/projects',
    backgroundColor: '#000000',
    cardBackgroundColor: '#242424',
    buttonColor: '#fdc500',
    buttonTextColor: '#000000',
    textColor: '#ffffff',
    accentColor: '#0099FF',
  },
];

const DEFAULT_SECTION_SETTINGS: SectionSettings = {
  layout: 'horizontal',
  showStepNumbers: true,
  showIcons: true,
  cardStyle: 'modern',
  imagePosition: 'left',
  animationStyle: 'fade',
};

export function EditableHowWeWorkSection({ contentKey = 'howWeWorkSection' }: EditableHowWeWorkSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, persistContent } = useCMSStore();
  const [activeTab, setActiveTab] = useState(0);
  const [showSectionSettings, setShowSectionSettings] = useState(false);

  // Get steps from CMS
  const stepsData = getContent(`${contentKey}.steps`, JSON.stringify(DEFAULT_STEPS));
  const steps: ProcessStep[] = JSON.parse(stepsData);

  // Get section settings
  const settingsData = getContent(`${contentKey}.settings`, JSON.stringify(DEFAULT_SECTION_SETTINGS));
  const sectionSettings: SectionSettings = JSON.parse(settingsData);

  const currentStep = steps[activeTab] || steps[0];

  // Save steps
  const saveSteps = async (newSteps: ProcessStep[]) => {
    try {
      const stepsString = JSON.stringify(newSteps);
      updateContent(`${contentKey}.steps`, stepsString);
      await persistContent();
    } catch (error) {
      console.error('Failed to save steps:', error);
      setSaveStatus('error');
    }
  };

  // Save section settings
  const saveSectionSettings = async (newSettings: SectionSettings) => {
    try {
      const settingsString = JSON.stringify(newSettings);
      updateContent(`${contentKey}.settings`, settingsString);
      await persistContent();
    } catch (error) {
      console.error('Failed to save section settings:', error);
      setSaveStatus('error');
    }
  };

  // Add step
  const addStep = () => {
    const newStep: ProcessStep = {
      id: `step-${Date.now()}`,
      icon: 'lightning',
      title: 'New Step',
      step: `00${steps.length + 1}.`,
      heading: 'New Step',
      description: 'Description for the new step in your process.',
      coverImage: imgCoverImageConnect,
      imageAlt: 'New Step',
      buttonText: 'Learn More',
      buttonHref: '#',
      backgroundColor: '#000000',
      cardBackgroundColor: '#242424',
      buttonColor: '#fdc500',
      buttonTextColor: '#000000',
      textColor: '#ffffff',
      accentColor: '#0099FF',
    };
    saveSteps([...steps, newStep]);
  };

  // Delete step
  const deleteStep = (id: string) => {
    if (steps.length <= 1) {
      alert('You must have at least one step');
      return;
    }
    saveSteps(steps.filter(s => s.id !== id));
    if (activeTab >= steps.length - 1) {
      setActiveTab(Math.max(0, steps.length - 2));
    }
  };

  // Update step
  const updateStep = (index: number, updatedStep: ProcessStep) => {
    const newSteps = [...steps];
    newSteps[index] = updatedStep;
    saveSteps(newSteps);
  };

  return (
    <motion.section 
      aria-label="How we work" 
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-[60px] md:pb-[100px] pl-0 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
      >
        <div aria-label="Container" className="content-stretch flex flex-col gap-[48px] md:gap-[62.99px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-full">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full relative" data-name="Grid 6x">
            {/* Section Tag */}
            <div className="shrink-0" data-name="Section tag">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <EditableText
                  contentKey={`${contentKey}.header.tag`}
                  defaultValue='<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif"><p class="leading-[22.4px]">How we work</p></div>'
                  as="div"
                  className=""
                />
              </div>
            </div>

            {/* Text Wrapper */}
            <div className="flex flex-col gap-[8px] flex-1 md:max-w-lg" data-name="Text wrapper">
              <EditableText
                contentKey={`${contentKey}.header.title`}
                defaultValue='<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.4px] text-white tracking-[-1.44px] whitespace-nowrap" style="font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif"><p class="leading-[50.4px]">Inside the Process</p></div>'
                as="div"
                className=""
              />
              <div className="opacity-70">
                <EditableText
                  contentKey={`${contentKey}.header.description`}
                  defaultValue='<div class="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif"><p class="mb-0">From concept to screen, our process transforms ideas into </p><p>powerful visual stories that inspire.</p></div>'
                  as="div"
                  className=""
                />
              </div>
            </div>

            {/* Button */}
            <Link
              to={getContent(`${contentKey}.header.buttonHref`, '/services')}
              className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] hover:bg-[#fdd520] transition-colors shrink-0 self-start md:self-auto"
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <EditableText
                    contentKey={`${contentKey}.header.buttonText`}
                    defaultValue='<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif"><p class="cursor-pointer leading-[22.4px]">what we do</p></div>'
                    as="div"
                    className=""
                  />
                </div>
              </div>
              <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
                <div className="overflow-clip relative shrink-0 size-[15px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center">
                    <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Section Settings Button */}
            {isEditMode && (
              <button
                onClick={() => setShowSectionSettings(true)}
                className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all z-50"
                title="Section Settings"
              >
                <Settings className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Content Section with Tabs */}
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
            
            {/* Top Tabs */}
            <div className="flex gap-[14px] items-start relative w-full overflow-x-auto pb-1" data-name="Top tabs">
              {steps.map((step, index) => (
                <ProcessTabButton
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                  steps={steps}
                  saveSteps={saveSteps}
                  updateStep={updateStep}
                  deleteStep={deleteStep}
                  showIcons={sectionSettings.showIcons}
                />
              ))}
              
              {/* Add Step Button */}
              {isEditMode && (
                <button
                  onClick={addStep}
                  className="content-stretch flex flex-[0.5_0_0] gap-[8px] items-center justify-center min-h-px min-w-px pb-[12px] relative border-2 border-dashed border-[#0099FF]/50 bg-[#0099FF]/5 hover:bg-[#0099FF]/10 hover:border-[#0099FF] transition-all rounded-lg"
                >
                  <Plus className="w-5 h-5 text-[#0099FF]" />
                  <span className="text-xs text-[#0099FF] font-medium">Add Step</span>
                </button>
              )}
            </div>

            {/* Tab Content */}
            {currentStep && (
              <ProcessStepContent
                step={currentStep}
                stepIndex={activeTab}
                contentKey={contentKey}
                updateStep={updateStep}
                sectionSettings={sectionSettings}
              />
            )}
          </div>
        </div>

        {/* Section Settings Modal */}
        {showSectionSettings && createPortal(
          <SectionSettingsModal
            settings={sectionSettings}
            onClose={() => setShowSectionSettings(false)}
            onSave={(newSettings) => {
              saveSectionSettings(newSettings);
              setShowSectionSettings(false);
            }}
          />,
          document.body
        )}
      </motion.section>
  );
}

// Process Tab Button Component
interface ProcessTabButtonProps {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  onClick: () => void;
  steps: ProcessStep[];
  saveSteps: (steps: ProcessStep[]) => void;
  updateStep: (index: number, step: ProcessStep) => void;
  deleteStep: (id: string) => void;
  showIcons: boolean;
}

function ProcessTabButton({ 
  step, 
  index, 
  isActive, 
  onClick, 
  steps, 
  saveSteps,
  updateStep,
  deleteStep,
  showIcons
}: ProcessTabButtonProps) {
  const { isEditMode } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Drag and Drop
  const ref = useRef<HTMLButtonElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'PROCESS_STEP_TAB',
    item: { index },
    canDrag: isEditMode,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [, drop] = useDrop({
    accept: 'PROCESS_STEP_TAB',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      
      const newSteps = [...steps];
      const [removed] = newSteps.splice(dragIndex, 1);
      newSteps.splice(hoverIndex, 0, removed);
      saveSteps(newSteps);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <>
      <div 
        className="relative"
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        <button
          ref={ref}
          onClick={onClick}
          className={`content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px pb-[12px] relative transition-opacity duration-200 ${
            isActive ? '' : 'opacity-60 hover:opacity-80'
          }`}
          style={{
            opacity: isDragging ? 0.5 : undefined,
            cursor: isEditMode ? 'move' : 'pointer',
          }}
        >
          {showIcons && (
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  {isActive && (
                    <path d={svgPaths.p318b9b80} fill="white" />
                  )}
                  <path d={svgPaths.p318b9b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                </g>
              </svg>
            </div>
          )}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="leading-[22.4px] whitespace-pre-wrap">{step.title}</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-[1px_0_0_0]">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
        </button>

        {/* Edit Controls - Outside the button */}
        {isEditMode && isHovered && (
          <div className="absolute -top-2 right-0 z-50 flex gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSettings(true);
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all"
              title="Step Settings"
            >
              <Settings className="h-3 w-3" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (confirm('Delete this step?')) deleteStep(step.id);
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all"
              title="Delete Step"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      {/* Step Settings Modal */}
      {showSettings && createPortal(
        <ProcessStepSettingsModal
          step={step}
          onClose={() => setShowSettings(false)}
          onSave={(updatedStep) => {
            updateStep(index, updatedStep);
            setShowSettings(false);
          }}
        />,
        document.body
      )}
    </>
  );
}

// Process Step Content Component
interface ProcessStepContentProps {
  step: ProcessStep;
  stepIndex: number;
  contentKey: string;
  updateStep: (index: number, step: ProcessStep) => void;
  sectionSettings: SectionSettings;
}

function ProcessStepContent({ step, stepIndex, contentKey, updateStep, sectionSettings }: ProcessStepContentProps) {
  const { isEditMode, adminToken } = useCMSStore();
  const [showImageControls, setShowImageControls] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quick upload image
  const handleQuickUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!adminToken) {
      console.warn('[HowWeWork] No adminToken — cannot upload');
      return;
    }
    try {
      const url = await uploadMedia(adminToken, file);
      updateStep(stepIndex, { ...step, coverImage: url });
    } catch (err: any) {
      console.error('Upload failed:', err);
    }
  };

  // Delete image
  const handleDeleteImage = () => {
    if (confirm('Remove this image and reset to default?')) {
      updateStep(stepIndex, { ...step, coverImage: imgCoverImageConnect });
    }
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" style={{ backgroundColor: step.cardBackgroundColor || '#242424' }}>
        <div className="flex flex-row justify-center size-full">
          <div className="flex flex-col md:flex-row gap-[14px] items-start p-[20px] relative w-full">

            {/* Cover Image */}
            <div
              className="w-full md:flex-[1_0_0] h-[260px] md:h-[473px] overflow-clip relative rounded-[12px]"
              data-name="Cover image"
              onMouseEnter={() => isEditMode && setShowImageControls(true)}
              onMouseLeave={() => isEditMode && setShowImageControls(false)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                <img alt={step.imageAlt} className="absolute h-[161.38%] left-0 max-w-none top-[-30.69%] w-full object-cover" src={step.coverImage} />
              </div>

              {/* Image Edit Controls Overlay */}
              {isEditMode && showImageControls && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center gap-3 z-10 rounded-[12px] transition-all pointer-events-auto">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleQuickUpload}
                    className="hidden"
                    accept="image/*"
                  />
                  
                  {/* Upload Button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center gap-2 px-6 py-4 bg-[#0099FF] text-white rounded-lg shadow-lg hover:bg-[#0088EE] transition-all"
                    title="Upload Image"
                  >
                    <Upload className="w-6 h-6" />
                    <span className="text-sm font-medium">Upload</span>
                  </button>

                  {/* Change Button */}
                  <button
                    onClick={() => setShowImageModal(true)}
                    className="flex flex-col items-center gap-2 px-6 py-4 bg-[#0099FF] text-white rounded-lg shadow-lg hover:bg-[#0088EE] transition-all"
                    title="Change Image"
                  >
                    <ImageIcon className="w-6 h-6" />
                    <span className="text-sm font-medium">Change</span>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={handleDeleteImage}
                    className="flex flex-col items-center gap-2 px-6 py-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all"
                    title="Delete Image"
                  >
                    <Trash2 className="w-6 h-6" />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col gap-[22px] relative w-full md:w-[374.66px] shrink-0">

              {/* Top Content */}
              <div className="flex flex-col gap-[22px] items-start w-full">
                {/* Step Number */}
                {sectionSettings.showStepNumbers && (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <EditableText
                        contentKey={`${contentKey}.step.${step.id}.stepNumber`}
                        defaultValue={`<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] tracking-[-0.16px] uppercase w-full" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; color: ${step.accentColor || '#0099FF'}"><p class="leading-[22.4px] whitespace-pre-wrap">${step.step}</p></div>`}
                        as="div"
                        className=""
                      />
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="flex flex-col gap-[8px] w-full">
                  <EditableText
                    contentKey={`${contentKey}.step.${step.id}.heading`}
                    defaultValue={`<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] tracking-[-1.44px] whitespace-nowrap" style="font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif; color: ${step.textColor || '#ffffff'}"><p class="leading-[50.4px]">${step.heading}</p></div>`}
                    as="div"
                    className=""
                  />
                  <div className="opacity-60">
                    <EditableText
                      contentKey={`${contentKey}.step.${step.id}.description`}
                      defaultValue={`<div class="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[14.3px] tracking-[-0.32px]" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; color: ${step.textColor || '#dddddd'}"><p class="whitespace-pre-wrap">${step.description}</p></div>`}
                      as="div"
                      className=""
                    />
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link
                to={step.buttonHref}
                className="content-stretch cursor-pointer flex items-center justify-between overflow-clip pl-[20px] pr-[8.01px] py-[8px] rounded-[1000px] transition-all hover:opacity-90 mt-auto"
                style={{ backgroundColor: step.buttonColor || '#fdc500' }}
              >
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <EditableText
                      contentKey={`${contentKey}.step.${step.id}.buttonText`}
                      defaultValue={`<div class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-left tracking-[-0.16px] uppercase whitespace-nowrap" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif; color: ${step.buttonTextColor || '#000000'}"><p class="cursor-pointer leading-[22.4px]">${step.buttonText}</p></div>`}
                      as="div"
                      className=""
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" style={{ backgroundColor: step.buttonTextColor || '#000000' }}>
                  <div className="overflow-clip relative shrink-0 size-[15px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center">
                      <ArrowRight className="w-full h-full" style={{ color: step.buttonColor || '#fdc500' }} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Management Modal */}
      {showImageModal && createPortal(
        <ImageManagementModal
          step={step}
          onClose={() => setShowImageModal(false)}
          onSave={(updatedImage, updatedAlt) => {
            updateStep(stepIndex, { ...step, coverImage: updatedImage, imageAlt: updatedAlt });
            setShowImageModal(false);
          }}
        />,
        document.body
      )}
    </div>
  );
}

// Process Step Settings Modal
interface ProcessStepSettingsModalProps {
  step: ProcessStep;
  onClose: () => void;
  onSave: (step: ProcessStep) => void;
}

function ProcessStepSettingsModal({ step, onClose, onSave }: ProcessStepSettingsModalProps) {
  const { adminToken } = useCMSStore();
  const [editedStep, setEditedStep] = useState({ ...step });
  const [activeTab, setActiveTab] = useState<'content' | 'image' | 'button' | 'colors'>('content');
  const [imageSource, setImageSource] = useState<'url' | 'upload' | 'search'>('url');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Search images using Unsplash
  const handleImageSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      // Simulating Unsplash search - in reality you'd call unsplash_tool
      // For now, we'll create a mock implementation
      const mockResults = [
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},1`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},2`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},3`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},4`,
      ];
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Image search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!adminToken) {
      setUploadError('Not logged in as admin.');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      const url = await uploadMedia(adminToken, file);
      setEditedStep((prev) => ({ ...prev, coverImage: url }));
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // Delete image
  const handleDeleteImage = () => {
    if (confirm('Are you sure you want to remove this image?')) {
      setEditedStep((prev) => ({ ...prev, coverImage: imgCoverImageConnect }));
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="text-lg font-medium text-white">Process Step Settings</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              activeTab === 'content' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Type className="w-4 h-4" />
            Content
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              activeTab === 'image' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Image
          </button>
          <button
            onClick={() => setActiveTab('button')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              activeTab === 'button' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layout className="w-4 h-4" />
            Button
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              activeTab === 'colors' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Palette className="w-4 h-4" />
            Colors
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tab Title</label>
                <input
                  type="text"
                  value={editedStep.title}
                  onChange={(e) => setEditedStep({ ...editedStep, title: e.target.value })}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="Connect"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Step Number</label>
                <input
                  type="text"
                  value={editedStep.step}
                  onChange={(e) => setEditedStep({ ...editedStep, step: e.target.value })}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="001."
                />
              </div>
            </div>
          )}

          {/* Image Tab */}
          {activeTab === 'image' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-400 mb-2">Image Source</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setImageSource('url')}
                    className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                      imageSource === 'url' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    URL
                  </button>
                  <button
                    onClick={() => setImageSource('upload')}
                    className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                      imageSource === 'upload' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => setImageSource('search')}
                    className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                      imageSource === 'search' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Search
                  </button>
                </div>
              </div>

              {imageSource === 'url' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Cover Image URL</label>
                  <input
                    type="text"
                    value={editedStep.coverImage}
                    onChange={(e) => setEditedStep({ ...editedStep, coverImage: e.target.value })}
                    className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    placeholder="https://..."
                  />
                </div>
              )}

              {imageSource === 'upload' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Upload Image</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    accept="image/*"
                  />
                </div>
              )}

              {imageSource === 'search' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Search Images</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                      placeholder="Search..."
                    />
                    <button
                      onClick={handleImageSearch}
                      className="px-2 py-1 text-sm font-medium rounded transition-colors bg-[#0099FF] text-white"
                    >
                      {isSearching ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                  {searchResults.length > 0 && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {searchResults.map((result, index) => (
                        <div key={index} className="relative">
                          <img
                            src={result}
                            alt="Search Result"
                            className="w-full h-20 object-cover rounded"
                            onClick={() => setEditedStep({ ...editedStep, coverImage: result })}
                          />
                          <button
                            onClick={() => setEditedStep({ ...editedStep, coverImage: result })}
                            className="absolute inset-0 bg-black/50 text-white flex items-center justify-center rounded"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Image Alt Text</label>
                <input
                  type="text"
                  value={editedStep.imageAlt}
                  onChange={(e) => setEditedStep({ ...editedStep, imageAlt: e.target.value })}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="Describe the image..."
                />
              </div>
              {editedStep.coverImage && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Preview</label>
                  <img src={editedStep.coverImage} alt={editedStep.imageAlt} className="w-full h-48 object-cover rounded" />
                  <button
                    onClick={handleDeleteImage}
                    className="mt-2 px-2 py-1 text-sm font-medium rounded transition-colors bg-red-500 text-white"
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Button Tab */}
          {activeTab === 'button' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Button Link (href)</label>
                <input
                  type="text"
                  value={editedStep.buttonHref}
                  onChange={(e) => setEditedStep({ ...editedStep, buttonHref: e.target.value })}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="/contact-us"
                />
              </div>
            </div>
          )}

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ColorPicker 
                  label="Card Background" 
                  value={editedStep.cardBackgroundColor || '#242424'}
                  onChange={(color) => setEditedStep({ ...editedStep, cardBackgroundColor: color })}
                />
                <ColorPicker 
                  label="Text Color" 
                  value={editedStep.textColor || '#ffffff'}
                  onChange={(color) => setEditedStep({ ...editedStep, textColor: color })}
                />
                <ColorPicker 
                  label="Accent Color" 
                  value={editedStep.accentColor || '#0099FF'}
                  onChange={(color) => setEditedStep({ ...editedStep, accentColor: color })}
                />
                <ColorPicker 
                  label="Button Color" 
                  value={editedStep.buttonColor || '#fdc500'}
                  onChange={(color) => setEditedStep({ ...editedStep, buttonColor: color })}
                />
                <ColorPicker 
                  label="Button Text Color" 
                  value={editedStep.buttonTextColor || '#000000'}
                  onChange={(color) => setEditedStep({ ...editedStep, buttonTextColor: color })}
                />
              </div>
            </div>
          )}

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded">
            <p className="text-blue-300 text-sm">
              💡 <strong>Tip:</strong> Heading and description text can be edited directly on the card. Use this modal for structural changes, images, and colors.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1a1a1a]">
          <button
            onClick={onClose}
            className="flex-1 rounded bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedStep)}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Section Settings Modal
interface SectionSettingsModalProps {
  settings: SectionSettings;
  onClose: () => void;
  onSave: (settings: SectionSettings) => void;
}

function SectionSettingsModal({ settings, onClose, onSave }: SectionSettingsModalProps) {
  const [editedSettings, setEditedSettings] = useState({ ...settings });

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-medium text-white">Section Settings</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Show Step Numbers</label>
                <p className="text-xs text-gray-400">Display step numbers like "001." in the content</p>
              </div>
              <button
                onClick={() => setEditedSettings({ ...editedSettings, showStepNumbers: !editedSettings.showStepNumbers })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  editedSettings.showStepNumbers ? 'bg-[#0099FF]' : 'bg-gray-600'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  editedSettings.showStepNumbers ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Show Icons</label>
                <p className="text-xs text-gray-400">Display icons in the tab navigation</p>
              </div>
              <button
                onClick={() => setEditedSettings({ ...editedSettings, showIcons: !editedSettings.showIcons })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  editedSettings.showIcons ? 'bg-[#0099FF]' : 'bg-gray-600'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  editedSettings.showIcons ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 px-6 py-4">
          <button
            onClick={onClose}
            className="flex-1 rounded bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedSettings)}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Color Picker Component
interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-16 rounded border border-white/20 bg-white/5 cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}

// Image Management Modal
interface ImageManagementModalProps {
  step: ProcessStep;
  onClose: () => void;
  onSave: (image: string, alt: string) => void;
}

function ImageManagementModal({ step, onClose, onSave }: ImageManagementModalProps) {
  const { adminToken } = useCMSStore();
  const [imageSource, setImageSource] = useState<'url' | 'upload' | 'search'>('url');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Search images using Unsplash
  const handleImageSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      // Simulating Unsplash search - in reality you'd call unsplash_tool
      // For now, we'll create a mock implementation
      const mockResults = [
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},1`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},2`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},3`,
        `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)},4`,
      ];
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Image search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!adminToken) {
      setUploadError('Not logged in as admin.');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      const url = await uploadMedia(adminToken, file);
      onSave(url, step.imageAlt);
      onClose();
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="text-lg font-medium text-white">Manage Image</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          <button
            onClick={() => setImageSource('url')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              imageSource === 'url' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Type className="w-4 h-4" />
            URL
          </button>
          <button
            onClick={() => setImageSource('upload')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              imageSource === 'upload' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>
          <button
            onClick={() => setImageSource('search')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors flex items-center gap-2 ${
              imageSource === 'search' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* URL Tab */}
          {imageSource === 'url' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Cover Image URL</label>
                <input
                  type="text"
                  value={step.coverImage}
                  onChange={(e) => onSave(e.target.value, step.imageAlt)}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="https://..."
                />
              </div>
            </div>
          )}

          {/* Upload Tab */}
          {imageSource === 'upload' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Upload Image</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  accept="image/*"
                />
              </div>
            </div>
          )}

          {/* Search Tab */}
          {imageSource === 'search' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-400 mb-2">Search Images</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                    placeholder="Search..."
                  />
                  <button
                    onClick={handleImageSearch}
                    className="px-2 py-1 text-sm font-medium rounded transition-colors bg-[#0099FF] text-white"
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </div>
              {searchResults.length > 0 && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {searchResults.map((result, index) => (
                    <div key={index} className="relative">
                      <img
                        src={result}
                        alt="Search Result"
                        className="w-full h-20 object-cover rounded"
                        onClick={() => onSave(result, step.imageAlt)}
                      />
                      <button
                        onClick={() => onSave(result, step.imageAlt)}
                        className="absolute inset-0 bg-black/50 text-white flex items-center justify-center rounded"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded">
            <p className="text-blue-300 text-sm">
              💡 <strong>Tip:</strong> You can also upload an image directly from your device or use a URL to link to an existing image.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1a1a1a]">
          <button
            onClick={onClose}
            className="flex-1 rounded bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(step.coverImage, step.imageAlt)}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}