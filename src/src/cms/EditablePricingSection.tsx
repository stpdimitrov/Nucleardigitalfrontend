import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';
import { EditableText } from './EditableText';
import svgPaths from '../../imports/svg-c96gl1ahfs';
import { scrollFadeIn, viewport } from '../../lib/animations';
import type { PricingPlan, PricingFeature } from '@/types';
import imgSmilingManWearingGlasses from "figma:asset/ad8e44f82010d6d3555a4658497f155a131ede8e.png";
import imgSmilingManWithShortHair from "figma:asset/be285e0068bd5e11f8149ab60eed991f42ec0858.png";
import imgSmilingPersonWithShortDarkHair from "figma:asset/5d8ac90c565e0b90a30d781dbdcbf707c872b1ce.png";

interface PricingPlanModalProps {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (plan: PricingPlan) => void;
}

function PricingPlanModal({ plan, isOpen, onClose, onSave }: PricingPlanModalProps) {
  const [formData, setFormData] = useState<PricingPlan>(
    plan || {
      id: Date.now().toString(),
      name: '',
      price: '',
      period: 'per project',
      description: '',
      isPopular: false,
      features: [],
      ctaText: 'Contact us',
      ctaUrl: '/contact-us',
    }
  );

  const [newFeature, setNewFeature] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      const feature: PricingFeature = {
        id: `feature-${Date.now()}`,
        text: newFeature.trim(),
        included: true,
      };
      setFormData({ ...formData, features: [...formData.features, feature] });
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (id: string) => {
    setFormData({
      ...formData,
      features: formData.features.filter((f) => f.id !== id),
    });
  };

  const handleToggleFeatureIncluded = (id: string) => {
    setFormData({
      ...formData,
      features: formData.features.map((f) =>
        f.id === id ? { ...f, included: !f.included } : f
      ),
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[700px] my-8 rounded-xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">
              {plan ? 'Edit Pricing Plan' : 'New Pricing Plan'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {/* Plan Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Plan Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                placeholder="e.g. Professional Plan"
              />
            </div>

            {/* Price & Period */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Price
                </label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                  placeholder="e.g. $999"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Period
                </label>
                <input
                  type="text"
                  required
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                  placeholder="e.g. per project"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Description
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10 resize-none"
                placeholder="Brief description of this plan..."
              />
            </div>

            {/* CTA Settings */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  CTA Text
                </label>
                <input
                  type="text"
                  required
                  value={formData.ctaText}
                  onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                  placeholder="e.g. Contact us"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  CTA URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.ctaUrl}
                  onChange={(e) => setFormData({ ...formData, ctaUrl: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                  placeholder="e.g. /contact-us"
                />
              </div>
            </div>

            {/* Is Popular */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isPopular"
                checked={formData.isPopular || false}
                onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="isPopular" className="text-sm font-medium text-white">
                Mark as Popular/Best Value
              </label>
            </div>

            {/* Features Section */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-3 text-sm font-medium text-white/80">Features</h3>
              
              {/* Feature List */}
              <div className="mb-3 max-h-[200px] space-y-2 overflow-y-auto">
                {formData.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <input
                      type="checkbox"
                      checked={feature.included}
                      onChange={() => handleToggleFeatureIncluded(feature.id)}
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500"
                      title={feature.included ? 'Included' : 'Not included'}
                    />
                    <span className={`flex-1 text-sm ${feature.included ? 'text-white' : 'text-white/40 line-through'}`}>
                      {feature.text}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(feature.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Add New Feature */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddFeature();
                    }
                  }}
                  className="flex-1 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                  placeholder="Add a feature..."
                />
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="rounded bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface DraggablePricingCardProps {
  plan: PricingPlan;
  index: number;
  isEditMode: boolean;
  onEdit: () => void;
  onDelete: () => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

function DraggablePricingCard({
  plan,
  index,
  isEditMode,
  onEdit,
  onDelete,
  moveCard,
}: DraggablePricingCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'PRICING_PLAN',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'PRICING_PLAN',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative transition-all ${
        isDragging ? 'opacity-50' : ''
      } ${isOver ? 'scale-[1.02]' : ''} ${isEditMode ? 'group' : ''}`}
      data-name="Pricing card → Pricing card"
    >
      {/* Edit/Delete Controls */}
      {isEditMode && (
        <div className="absolute -right-2 -top-2 z-10 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={onEdit}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
            title="Edit"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600"
            title="Delete"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start p-[24px] relative w-full">
          {/* Top Wrapper */}
          <div className="h-[160.81px] relative shrink-0 w-full" data-name="Top wrapper">
            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 top-[-1px]" data-name="Description">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="leading-[22.4px]">{plan.name}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[29.4px]" data-name="h2.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[44.4px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="leading-[50.4px]">{plan.price}</p>
              </div>
            </div>
            
            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[88.81px]" data-name="p.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px]" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="whitespace-pre-wrap">{plan.description}</p>
              </div>
            </div>
            
            {plan.isPopular && (
              <div className="absolute bg-[#333] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[-0.92px] top-0" data-name="Tag">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.7px] text-white tracking-[-0.24px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[14.4px]">Popular</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Line */}
          <div className="bg-[#b0b0b0] h-px opacity-30 shrink-0 w-full" data-name="Line" />

          {/* Features Wrapper */}
          <div className="content-stretch flex flex-col gap-[12px] items-center justify-center opacity-60 relative shrink-0 w-full" data-name="Features wrapper">
            {plan.features.map((feature) => (
              <div key={feature.id} className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature">
                <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p3f4c7900} stroke={feature.included ? "white" : "#666"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p4ddb00} stroke={feature.included ? "white" : "#666"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M3 19.5H21" stroke={feature.included ? "white" : "#666"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className={`flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] tracking-[-0.32px] w-full ${feature.included ? 'text-[#ddd]' : 'text-[#666] line-through'}`} style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[24px] whitespace-pre-wrap">{feature.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link to={plan.ctaUrl} className="bg-[#fdc500] cursor-pointer relative rounded-[1000px] shrink-0 w-full hover:bg-[#fdd520] transition-colors" data-name="Button → Large">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between pl-[20px] pr-[8px] py-[8px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}} role="link" tabIndex={0}>
                      <p className="cursor-pointer leading-[22.4px]">{plan.ctaText}</p>
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
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Drag indicator overlay */}
      {isOver && isEditMode && (
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-black" />
      )}
    </div>
  );
}

interface EditablePricingSectionProps {
  defaultPlans: PricingPlan[];
}

export function EditablePricingSection({ defaultPlans = [] }: EditablePricingSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus } = useCMSStore();
  const [modalPlan, setModalPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get pricing plans from store or use defaults
  const storedPlansStr = getContent('pricing.plans', '');
  
  const plans = useMemo(() => {
    if (storedPlansStr && storedPlansStr.trim() !== '') {
      try {
        const parsed = JSON.parse(storedPlansStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          console.log('Loaded pricing plans from CMS:', parsed);
          return parsed as PricingPlan[];
        }
      } catch (error) {
        console.error('Failed to parse pricing plans:', error);
      }
    }
    
    console.log('Using default pricing plans:', defaultPlans);
    return Array.isArray(defaultPlans) ? defaultPlans : [];
  }, [storedPlansStr, defaultPlans]);

  const savePlans = async (updatedPlans: PricingPlan[]) => {
    try {
      setSaveStatus('saving');
      const serialized = JSON.stringify(updatedPlans);
      updateContent('pricing.plans', serialized);
      await contentAPI.saveContent({ 'pricing.plans': serialized });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to save pricing plans:', error);
      setSaveStatus('error');
    }
  };

  const handleAddPlan = () => {
    setModalPlan(null);
    setIsModalOpen(true);
  };

  const handleEditPlan = (plan: PricingPlan) => {
    setModalPlan(plan);
    setIsModalOpen(true);
  };

  const handleDeletePlan = (id: string) => {
    if (window.confirm('Are you sure you want to delete this pricing plan?')) {
      const updated = plans.filter((p) => p.id !== id);
      savePlans(updated);
    }
  };

  const handleSavePlan = (plan: PricingPlan) => {
    let updated: PricingPlan[];
    if (modalPlan) {
      // Edit existing
      updated = plans.map((p) => (p.id === plan.id ? plan : p));
    } else {
      // Add new
      updated = [...plans, plan];
    }
    savePlans(updated);
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const updated = [...plans];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(hoverIndex, 0, removed);
    savePlans(updated);
  };

  const handleResetToDefaults = async () => {
    if (window.confirm('Reset pricing plans to defaults? This will delete all custom changes.')) {
      try {
        setSaveStatus('saving');
        updateContent('pricing.plans', '');
        await contentAPI.saveContent({ 'pricing.plans': '' });
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
        window.location.reload();
      } catch (error) {
        console.error('Failed to reset pricing plans:', error);
        setSaveStatus('error');
      }
    }
  };

  return (
    <>
      <motion.section
        aria-label="Pricing"
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
                  <EditableText
                    contentKey="pricing.sectionLabel"
                    defaultValue="<div class='flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif'><p class='leading-[22.4px]'>pricing plan</p></div>"
                    as="div"
                    className=""
                  />
                </div>
              </div>
            </div>

            {/* Text Wrapper */}
            <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
              <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
                <EditableText
                  contentKey="pricing.title"
                  defaultValue="<div class='flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.6px] text-white tracking-[-1.44px] whitespace-nowrap' style='font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif'><p class='leading-[50.4px]'>Affordable Plans</p></div>"
                  as="div"
                  className=""
                />
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
                <EditableText
                  contentKey="pricing.subtitle"
                  defaultValue="<div class='flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif'><p class='mb-0'>We offer flexible pricing plans tailored to your goals, </p><p>budget, and creative needs.</p></div>"
                  as="div"
                  className=""
                  multiline
                />
              </div>
            </div>

            {/* Clients Wrapper */}
            <div className="absolute content-stretch flex gap-[8px] items-center left-[992px] max-w-[200px] overflow-clip right-0 top-[78.41px]" data-name="Clients wrapper">
              <div className="content-stretch flex items-center relative shrink-0 w-[101px]" data-name="Images wrapper">
                <div className="overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-name="Image 01">
                  <div className="absolute inset-0 rounded-[999px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingManWearingGlasses} />
                    </div>
                  </div>
                  <div className="absolute border border-[#b0b0b0] border-solid inset-0 rounded-[999px]" data-name="::after" />
                </div>
                
                <div className="absolute left-[24px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Image 02">
                  <div className="absolute inset-0 rounded-[999px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingManWithShortHair} />
                    </div>
                  </div>
                  <div className="absolute border border-[#b0b0b0] border-solid left-0 rounded-[999px] size-[28px] top-0" data-name="::after" />
                </div>
                
                <div className="absolute left-[48px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Image 03">
                  <div className="absolute inset-0 rounded-[999px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingPersonWithShortDarkHair} />
                    </div>
                  </div>
                  <div className="absolute border border-[#b0b0b0] border-solid left-0 rounded-[999px] size-[28px] top-0" data-name="::after" />
                </div>
                
                <div className="absolute bg-black content-stretch flex items-center justify-center left-[72px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Icon wrapper">
                  <div className="relative shrink-0 size-[14px]" data-name="Component 1">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <g>
                        <path d="M2.1875 7H11.8125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                        <path d="M7 2.1875V11.8125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-0 rounded-[999px] size-[28px] top-0" data-name="::after">
                    <div aria-hidden="true" className="absolute border border-[#b0b0b0] border-solid inset-0 pointer-events-none rounded-[999px]" />
                  </div>
                </div>
              </div>
              
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1gnekca">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <EditableText
                    contentKey="pricing.subscribersText"
                    defaultValue="<div class='flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.2px] tracking-[-0.2px] w-full whitespace-pre-wrap' style='font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif'><p class='mb-0'><span class='leading-[12px] text-white'>10K+</span><span class='leading-[12px] text-[#ddd]'> Peoples already </span></p><p class='leading-[12px] text-[#ddd]'>subscribed</p></div>"
                    as="div"
                    className=""
                    multiline
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="content-stretch flex gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Grid 6x">
            {plans.map((plan, index) => (
              <DraggablePricingCard
                key={plan.id}
                plan={plan}
                index={index}
                isEditMode={isEditMode}
                onEdit={() => handleEditPlan(plan)}
                onDelete={() => handleDeletePlan(plan.id)}
                moveCard={moveCard}
              />
            ))}
          </div>

          {/* Add New Button (only in edit mode) */}
          {isEditMode && (
            <button
              onClick={handleAddPlan}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 px-6 py-6 text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-[0.98]"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-medium">Add Pricing Plan</span>
            </button>
          )}

          {/* Reset to Defaults Button (only in edit mode) */}
          {isEditMode && (
            <button
              onClick={handleResetToDefaults}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-red-500/30 bg-red-500/5 px-6 py-6 text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 active:scale-[0.98]"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              <span className="text-lg font-medium">Reset to Defaults</span>
            </button>
          )}
        </div>
      </motion.section>

      {/* Modal */}
      <PricingPlanModal
        plan={modalPlan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePlan}
      />
    </>
  );
}
