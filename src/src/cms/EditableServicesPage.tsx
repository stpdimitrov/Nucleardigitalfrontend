import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Settings, Plus, Trash2 } from 'lucide-react';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';
import { EditableText } from './EditableText';
import { EditableLetsConnectSection } from './EditableLetsConnectSection';
import { EditableHowWeWorkSection } from './EditableHowWeWorkSection';
import { useDrag, useDrop } from 'react-dnd';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../../lib/animations';
import { useBackendData } from '../../contexts/BackendDataContext';
import { ImageUploadField } from './ImageUploadField';

// Service Card Types
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  layout: 'large' | 'small'; // large = left full height, small = right cards
}

interface EditableServicesPageProps {
  contentKey?: string;
}

const DEFAULT_SERVICES: ServiceCard[] = [
  {
    id: 'service-1',
    title: 'Video Production',
    description: 'We handle every stage from concept to filming, creating visuals that capture emotion and inspire audiences.',
    imageUrl: 'https://images.unsplash.com/photo-1614543608792-e9f1b007602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBzdW5zZXQlMjBjbG91ZHMlMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc3MDU1MDY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Video Production',
    tags: ['Commercials', 'Brand Films', 'Product Videos', 'Corporate Shoots'],
    layout: 'large',
  },
  {
    id: 'service-2',
    title: 'Creative Direction',
    description: 'Strategic vision meets artistic execution in every project we undertake.',
    imageUrl: 'https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwc3RvcmVmcm9udCUyMHByb2R1Y3Rpb24lMjBsaWdodHN8ZW58MXx8fHwxNzcwNTUwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Creative Direction',
    tags: ['Brand Strategy', 'Art Direction', 'Concept Development'],
    layout: 'small',
  },
  {
    id: 'service-3',
    title: 'Post-Production & Editing',
    description: 'Polishing your content to perfection with expert editing and effects.',
    imageUrl: 'https://images.unsplash.com/photo-1609095515245-f6b9d9c32d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBjaW5lbWElMjBwcm9kdWN0aW9uJTIwbmlnaHR8ZW58MXx8fHwxNzcwNTUwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Post-Production & Editing',
    tags: ['Color Grading', 'VFX', 'Sound Design', 'Motion Graphics'],
    layout: 'small',
  },
];

export function EditableServicesPage({ contentKey = 'servicesPage' }: EditableServicesPageProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus } = useCMSStore();
  const { services: backendServices } = useBackendData();

  // Map backend services to ServiceCard format as fallback defaults
  const backendDefaults: ServiceCard[] = backendServices.length > 0
    ? backendServices.map((s, i) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        imageUrl: s.image || DEFAULT_SERVICES[i % DEFAULT_SERVICES.length]?.imageUrl || '',
        imageAlt: s.title,
        tags: Array.isArray(s.features)
          ? (s.features as Array<string | { name?: string; text?: string }>).map(f =>
              typeof f === 'string' ? f : (f.name || f.text || '')
            ).filter(Boolean)
          : [],
        layout: i === 0 ? 'large' : 'small',
      }))
    : DEFAULT_SERVICES;

  // Get services from CMS (falls back to backend-mapped defaults)
  const servicesData = getContent(`${contentKey}.services`, JSON.stringify(backendDefaults));
  const services: ServiceCard[] = JSON.parse(servicesData);

  // Save services
  const saveServices = async (newServices: ServiceCard[]) => {
    try {
      setSaveStatus('saving');
      const servicesString = JSON.stringify(newServices);
      updateContent(`${contentKey}.services`, servicesString);
      await contentAPI.saveContent({ [`${contentKey}.services`]: servicesString });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to save services:', error);
      setSaveStatus('error');
    }
  };

  // Add service
  const addService = () => {
    const newService: ServiceCard = {
      id: `service-${Date.now()}`,
      title: 'New Service',
      description: 'Description for new service',
      imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
      imageAlt: 'New Service',
      tags: ['Tag 1', 'Tag 2'],
      layout: 'small',
    };
    saveServices([...services, newService]);
  };

  // Delete service
  const deleteService = (id: string) => {
    saveServices(services.filter(s => s.id !== id));
  };

  // Update service
  const updateService = (index: number, updatedService: ServiceCard) => {
    const newServices = [...services];
    newServices[index] = updatedService;
    saveServices(newServices);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        className="px-6 py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scrollFadeIn}
      >
        <div className="max-w-[1240px] mx-auto">
          {/* Section Tag */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center h-[22px] pb-px">
              <EditableText
                contentKey={`${contentKey}.hero.tag`}
                defaultValue='<p class="font-medium uppercase text-white text-[14px] tracking-[-0.16px] leading-[22.4px]" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">our services</p>'
                as="div"
                className=""
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-20">
            <EditableText
              contentKey={`${contentKey}.hero.title`}
              defaultValue='<h1 class="font-medium text-white text-[56.7px] leading-[63px] tracking-[-1.8px] mb-2" style="font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif">What We Offer</h1>'
              as="div"
              className=""
            />
            <EditableText
              contentKey={`${contentKey}.hero.description`}
              defaultValue='<p class="font-medium text-[#ddd] text-[16.5px] leading-[27px] opacity-60 max-w-[600px] mx-auto text-center" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">Delivering expert video production services that elevate brands and bring stories to life.</p>'
              as="div"
              className=""
            />
          </div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <ServiceCardComponent
                key={service.id}
                service={service}
                index={index}
                contentKey={contentKey}
                deleteService={deleteService}
                updateService={updateService}
                services={services}
                saveServices={saveServices}
              />
            ))}

            {/* Add Service Button */}
            {isEditMode && (
              <motion.button
                onClick={addService}
                className="border-2 border-dashed border-[#0099FF]/50 bg-[#0099FF]/5 hover:bg-[#0099FF]/10 hover:border-[#0099FF] transition-all flex items-center justify-center group min-h-[400px] rounded-[16px]"
                variants={staggerItem}
              >
                <div className="flex flex-col items-center gap-2">
                  <Plus className="w-8 h-8 text-[#0099FF]" />
                  <p className="text-white/70 text-sm font-medium">Add Service</p>
                </div>
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Inside the Process Section */}
      <EditableHowWeWorkSection />

      {/* Let's Connect Section */}
      <EditableLetsConnectSection />
    </div>
  );
}

// Service Card Component
interface ServiceCardComponentProps {
  service: ServiceCard;
  index: number;
  contentKey: string;
  deleteService: (id: string) => void;
  updateService: (index: number, service: ServiceCard) => void;
  services: ServiceCard[];
  saveServices: (services: ServiceCard[]) => void;
}

function ServiceCardComponent({ 
  service, 
  index, 
  contentKey, 
  deleteService, 
  updateService, 
  services, 
  saveServices 
}: ServiceCardComponentProps) {
  const { isEditMode } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Drag and Drop
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'SERVICE_CARD',
    item: { index },
    canDrag: isEditMode,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [, drop] = useDrop({
    accept: 'SERVICE_CARD',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      
      // Move the services
      const newServices = [...services];
      const [removed] = newServices.splice(dragIndex, 1);
      newServices.splice(hoverIndex, 0, removed);
      saveServices(newServices);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <>
      <motion.div
        ref={ref}
        className={service.layout === 'large' ? 'md:row-span-2' : ''}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: isEditMode ? 'move' : 'default',
        }}
        variants={staggerItem}
        onMouseEnter={isEditMode ? () => setIsHovered(true) : undefined}
        onMouseLeave={isEditMode ? () => setIsHovered(false) : undefined}
      >
        <div className="bg-[rgb(17,17,17)] rounded-[16px] overflow-hidden h-full flex flex-col relative">
          {/* Image */}
          <div className={`relative overflow-hidden ${service.layout === 'large' ? 'h-[500px]' : 'h-[280px]'}`}>
            <img 
              src={service.imageUrl}
              alt={service.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className={service.layout === 'large' ? 'p-8' : 'p-6'}>
            <EditableText
              contentKey={`${contentKey}.service.${service.id}.title`}
              defaultValue={`<h4 class="font-medium text-white ${service.layout === 'large' ? 'text-[28px] leading-[33.6px]' : 'text-[24px] leading-[28.8px]'} tracking-[-0.48px] mb-${service.layout === 'large' ? '3' : '2'}" style="font-family: Ronzino, &quot;Ronzino Placeholder&quot;, sans-serif">${service.title}</h4>`}
              as="div"
              className=""
            />
            <EditableText
              contentKey={`${contentKey}.service.${service.id}.description`}
              defaultValue={`<p class="font-medium text-white ${service.layout === 'large' ? 'text-[16px] leading-[24px] mb-6' : 'text-[14px] leading-[21px] mb-4'} opacity-60" style="font-family: &quot;Apfel Grotezk&quot;, &quot;Apfel Grotezk Placeholder&quot;, sans-serif">${service.description}</p>`}
              as="div"
              className=""
            />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="bg-[rgb(36,36,36)] px-${service.layout === 'large' ? '4' : '3'} py-${service.layout === 'large' ? '2' : '1.5'} rounded-full">
                  <p className={`font-medium text-white ${service.layout === 'large' ? 'text-[14px] leading-[21px]' : 'text-[12px] leading-[18px]'} opacity-80`} style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Edit Controls */}
          {isEditMode && isHovered && (
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg hover:bg-[#0088EE] transition-all"
                title="Service Settings"
              >
                <Settings className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm('Delete this service?')) deleteService(service.id);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all"
                title="Delete Service"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Settings Modal */}
      {showSettings && (
        <ServiceSettingsModal
          service={service}
          onClose={() => setShowSettings(false)}
          onSave={(updatedService) => {
            updateService(index, updatedService);
            setShowSettings(false);
          }}
        />
      )}
    </>
  );
}

// Service Settings Modal
interface ServiceSettingsModalProps {
  service: ServiceCard;
  onClose: () => void;
  onSave: (service: ServiceCard) => void;
}

function ServiceSettingsModal({ service, onClose, onSave }: ServiceSettingsModalProps) {
  const [editedService, setEditedService] = useState({ ...service });
  const [activeTab, setActiveTab] = useState<'layout' | 'image' | 'tags'>('layout');

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...editedService.tags];
    newTags[index] = value;
    setEditedService({ ...editedService, tags: newTags });
  };

  const addTag = () => {
    setEditedService({ ...editedService, tags: [...editedService.tags, 'New Tag'] });
  };

  const removeTag = (index: number) => {
    const newTags = editedService.tags.filter((_, i) => i !== index);
    setEditedService({ ...editedService, tags: newTags });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-[#1a1a1a] z-10">
          <h3 className="font-['Inter:Medium',sans-serif] text-lg font-medium text-white">Service Settings</h3>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-6 pt-4">
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'layout' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Layout
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'image' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Image
          </button>
          <button
            onClick={() => setActiveTab('tags')}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === 'tags' ? 'bg-[#0099FF] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Tags
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Layout Tab */}
          {activeTab === 'layout' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Card Layout</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setEditedService({ ...editedService, layout: 'large' })}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      editedService.layout === 'large'
                        ? 'border-[#0099FF] bg-[#0099FF]/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium text-white text-sm mb-1">Large Card</div>
                    <div className="text-xs text-gray-400">Full height, spans 2 rows</div>
                  </button>
                  <button
                    onClick={() => setEditedService({ ...editedService, layout: 'small' })}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      editedService.layout === 'small'
                        ? 'border-[#0099FF] bg-[#0099FF]/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium text-white text-sm mb-1">Small Card</div>
                    <div className="text-xs text-gray-400">Standard height, 1 row</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Image Tab */}
          {activeTab === 'image' && (
            <div className="space-y-4">
              <ImageUploadField
                label="Service Image"
                value={editedService.imageUrl}
                onChange={(url) => setEditedService({ ...editedService, imageUrl: url })}
              />
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Image Alt Text</label>
                <input
                  type="text"
                  value={editedService.imageAlt}
                  onChange={(e) => setEditedService({ ...editedService, imageAlt: e.target.value })}
                  className="w-full bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                  placeholder="Describe the image..."
                />
              </div>
            </div>
          )}

          {/* Tags Tab */}
          {activeTab === 'tags' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-400">Service Tags</label>
                <button
                  onClick={addTag}
                  className="flex items-center gap-1 px-3 py-1 text-xs bg-[#0099FF] text-white rounded hover:bg-[#0088EE] transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  Add Tag
                </button>
              </div>
              <div className="space-y-2">
                {editedService.tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                      className="flex-1 bg-white/5 text-white rounded px-3 py-2 border border-white/20 text-sm focus:outline-none focus:border-[#0099FF]"
                      placeholder="Tag name..."
                    />
                    <button
                      onClick={() => removeTag(index)}
                      className="flex items-center justify-center w-10 h-10 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded">
            <p className="text-yellow-300 text-sm">
              💡 <strong>Tip:</strong> Title and description text can be edited directly on the card when edit mode is enabled. Use this modal for layout, images, and tags.
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
            onClick={() => onSave(editedService)}
            className="flex-1 rounded bg-[#0099FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#0088EE]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}