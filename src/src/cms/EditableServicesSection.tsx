import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';
import { useDrag, useDrop } from 'react-dnd';
import { X, GripVertical, Pencil, Trash2 } from 'lucide-react';
import type { Service } from '@/types';

interface DraggableServiceCardProps {
  service: Service;
  index: number;
  isEditMode: boolean;
  onEdit: () => void;
  onDelete: () => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  serviceImages: string[];
}

function DraggableServiceCard({
  service,
  index,
  isEditMode,
  onEdit,
  onDelete,
  moveCard,
  serviceImages,
}: DraggableServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'service-card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'service-card',
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  preview(drop(ref));

  // Determine if image should be on left or right based on index
  const isImageLeft = index % 2 === 0;

  // Map image based on index (cycling through the 3 imported images)
  const getImageForIndex = (idx: number) => {
    return service.image || serviceImages[idx % 3];
  };

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className="content-stretch flex gap-[8px] items-start justify-center overflow-visible relative shrink-0 w-full"
      data-name={`Service card → ${index + 1}-desktop`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isEditMode ? 'move' : 'default',
        flexDirection: isImageLeft ? 'row' : 'row-reverse',
      }}
    >
      {/* Image Section */}
      <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={getImageForIndex(index)} />
        </div>
      </div>

      {/* Content Section */}
      <div className="content-stretch flex flex-col items-start justify-between overflow-visible p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
        {/* Edit Mode Controls */}
        {isEditMode && (
          <div className="absolute -top-3 right-2 z-10 flex gap-2">
            <button
              ref={drag}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 transition-all cursor-move"
              title="Drag to reorder"
            >
              <GripVertical className="h-4 w-4" />
            </button>
            <button
              onClick={onEdit}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all"
              title="Edit service"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={onDelete}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all"
              title="Delete service"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="flex flex-col gap-[8px] w-full" data-name="Top wrapper">
          <div className="content-stretch flex flex-col items-start" data-name="h4.framer-text">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.2px] text-white tracking-[-0.72px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
              <p className="leading-[50.4px]">{service.title}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start opacity-60 max-w-[90%]" data-name="div.framer-11rxj8d">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="mb-0">{service.description.substring(0, service.description.lastIndexOf(' '))}</p>
                <p>{service.description.substring(service.description.lastIndexOf(' ') + 1)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[8px] w-full" data-name="Bottom wrapper">
          {service.features.map((feature, idx) => {
            const featureName = typeof feature === 'string' ? feature : feature.name || feature.text || '';
            return (
              <div key={idx} className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[24px]">{featureName}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: Service) => void;
}

function ServiceModal({ service, isOpen, onClose, onSave }: ServiceModalProps) {
  const [formData, setFormData] = useState<Service>({
    id: '',
    title: '',
    description: '',
    image: '',
    features: [],
  });
  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData({
        id: `service-${Date.now()}`,
        title: '',
        description: '',
        image: '',
        features: [],
      });
    }
  }, [service, isOpen]);

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput.trim()],
      });
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-2xl p-8 z-[9999] w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-2xl font-medium">
            {service ? 'Edit Service' : 'Add Service'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 border border-[#3a3a3a] focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="e.g., Video Production"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 border border-[#3a3a3a] focus:border-blue-500 focus:outline-none transition-colors min-h-[100px] resize-y"
              placeholder="Service description..."
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Image URL (optional)</label>
            <input
              type="text"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 border border-[#3a3a3a] focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Features */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Features/Categories</label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddFeature();
                  }
                }}
                className="flex-1 bg-[#2a2a2a] text-white rounded-lg px-4 py-2 border border-[#3a3a3a] focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., Commercials"
              />
              <button
                onClick={handleAddFeature}
                className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.features.map((feature, index) => {
                const featureName = typeof feature === 'string' ? feature : feature.name || feature.text || '';
                return (
                  <div
                    key={index}
                    className="bg-[#2a2a2a] text-white rounded-lg px-3 py-2 flex items-center gap-2 border border-[#3a3a3a]"
                  >
                    <span className="text-sm">{featureName}</span>
                    <button
                      onClick={() => handleRemoveFeature(index)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 bg-[#2a2a2a] text-white rounded-lg px-6 py-3 hover:bg-[#333] transition-colors border border-[#3a3a3a]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            {service ? 'Save Changes' : 'Add Service'}
          </button>
        </div>
      </div>
    </>
  );
}

interface EditableServicesSectionProps {
  defaultServices: Service[];
  serviceImages: string[];
}

export function EditableServicesSection({ defaultServices, serviceImages }: EditableServicesSectionProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus } = useCMSStore();
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);

  // Load services from CMS
  useEffect(() => {
    const savedServices = getContent('home.services', JSON.stringify(defaultServices));
    try {
      setServices(JSON.parse(savedServices));
    } catch (e) {
      console.error('Failed to parse services:', e);
      setServices(defaultServices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save services to CMS
  const saveServices = useCallback(async (newServices: Service[]) => {
    try {
      setSaveStatus('saving');
      const servicesString = JSON.stringify(newServices);
      updateContent('home.services', servicesString);
      await contentAPI.saveContent({ 'home.services': servicesString });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to save services:', error);
      setSaveStatus('error');
    }
  }, [updateContent, setSaveStatus]);

  // Handle drag and drop
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setServices((prevServices) => {
      const newServices = [...prevServices];
      const draggedService = newServices[dragIndex];
      newServices.splice(dragIndex, 1);
      newServices.splice(hoverIndex, 0, draggedService);
      saveServices(newServices);
      return newServices;
    });
  }, [saveServices]);

  // Handle add service
  const handleAddService = () => {
    setModalService(null);
    setIsModalOpen(true);
  };

  // Handle edit service
  const handleEditService = (service: Service) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  // Handle delete service
  const handleDeleteService = (serviceId: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const newServices = services.filter((s) => s.id !== serviceId);
      setServices(newServices);
      saveServices(newServices);
    }
  };

  // Handle save service
  const handleSaveService = (service: Service) => {
    let newServices: Service[];
    if (modalService) {
      // Update existing service
      newServices = services.map((s) => (s.id === service.id ? service : s));
    } else {
      // Add new service
      newServices = [...services, service];
    }
    setServices(newServices);
    saveServices(newServices);
    setIsModalOpen(false);
  };

  // Handle reset to defaults
  const handleResetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all services to defaults? This cannot be undone.')) {
      setServices(defaultServices);
      saveServices(defaultServices);
    }
  };

  return (
    <>
      <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Services wrapper">
        {services.map((service, index) => (
          <DraggableServiceCard
            key={service.id}
            service={service}
            index={index}
            isEditMode={isEditMode}
            onEdit={() => handleEditService(service)}
            onDelete={() => handleDeleteService(service.id)}
            moveCard={moveCard}
            serviceImages={serviceImages}
          />
        ))}

        {/* Add New Button (only in edit mode) */}
        {isEditMode && (
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handleAddService}
              className="group flex w-full max-w-md items-center justify-center gap-3 rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 px-6 py-6 text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-[0.98]"
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
              <span className="text-lg font-medium">Add Service</span>
            </button>
          </div>
        )}

        {/* Reset to Defaults Button (only in edit mode) */}
        {isEditMode && (
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handleResetToDefaults}
              className="group flex w-full max-w-md items-center justify-center gap-3 rounded-lg border-2 border-dashed border-red-500/30 bg-red-500/5 px-6 py-6 text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 active:scale-[0.98]"
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
          </div>
        )}
      </div>

      {/* Modal */}
      <ServiceModal
        service={modalService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveService}
      />
    </>
  );
}