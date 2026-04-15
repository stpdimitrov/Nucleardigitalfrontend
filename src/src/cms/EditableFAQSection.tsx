import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { ArrowRight, Plus, Edit2, Trash2, X } from 'lucide-react';
import { useCMSStore } from './cmsStore';
import { EditableImage } from './EditableImage';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../../lib/animations';
import type { FAQ } from '@/types';

interface FAQModalProps {
  faq: FAQ | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (faq: FAQ) => void;
}

function FAQModal({ faq, isOpen, onClose, onSave }: FAQModalProps) {
  const [formData, setFormData] = useState<FAQ>(
    faq || {
      id: Date.now().toString(),
      question: '',
      answer: '',
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[600px] my-8 rounded-xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">
              {faq ? 'Edit FAQ' : 'New FAQ'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Question */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Question
              </label>
              <input
                type="text"
                required
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10"
                placeholder="Enter FAQ question..."
              />
            </div>

            {/* Answer */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Answer
              </label>
              <textarea
                required
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:bg-white/10 min-h-[120px]"
                placeholder="Enter FAQ answer..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-6 py-3 text-white transition-colors hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#fdc500] px-6 py-3 font-medium text-black transition-colors hover:bg-[#fdd520]"
            >
              {faq ? 'Save Changes' : 'Add FAQ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface EditableFAQSectionProps {
  defaultFaqs: FAQ[];
  coverImageUrl?: string;
  coverImageAlt?: string;
  contentKey?: string;
}

export function EditableFAQSection({ defaultFaqs, coverImageUrl, coverImageAlt, contentKey = 'home.faqs' }: EditableFAQSectionProps) {
  const { isEditMode, getContent, updateContent } = useCMSStore();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [faqs, setFaqs] = useState<FAQ[]>(() => {
    const stored = getContent(contentKey, '');
    try { return stored ? JSON.parse(stored) : defaultFaqs; }
    catch { return defaultFaqs; }
  });
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to track section visibility
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '-100px 0px -100px 0px', // Adjust when the panel appears
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleAddFaq = () => {
    setEditingFaq(null);
    setIsModalOpen(true);
  };

  const handleEditFaq = (faq: FAQ, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleDeleteFaq = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this FAQ?')) {
      const updated = faqs.filter((f) => f.id !== id);
      setFaqs(updated);
      updateContent(contentKey, JSON.stringify(updated));
      if (openIndex >= updated.length) {
        setOpenIndex(Math.max(0, updated.length - 1));
      }
    }
  };

  const handleSaveFaq = (faq: FAQ) => {
    let updated: FAQ[];
    if (editingFaq) {
      updated = faqs.map((f) => (f.id === faq.id ? faq : f));
    } else {
      updated = [...faqs, faq];
    }
    setFaqs(updated);
    updateContent(contentKey, JSON.stringify(updated));
  };

  return (
    <>
      <motion.div 
        ref={sectionRef}
        aria-label="FAQ" 
        className="relative w-full"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scrollFadeIn}
      >
        <section aria-label="Desktop" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
          <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
            <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
              <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / span 2"}}>
                <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>FAQ</p>
                  </div>
                </div>
              </div>
              <div aria-label="Text" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                  <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Got Questions?</h2>
                </div>
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                  <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Find clear answers to common questions about  our services, process, and how we bring your  ideas to life.</p>
                </div>
              </div>
              <div aria-label="Button" className="self-end justify-self-end relative w-fit" style={{"gridArea":"auto / span 2"}}>
                <a href="/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Contact us</p>
                  </div>
                  <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                    <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                      <div aria-label="Icon" className="aspect-square relative w-[15px] z-[1] shrink-[0] flex items-center justify-center">
                        <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                      </div>
                      <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* CMS Controls */}
            {isEditMode && isVisible && (
              <div className="fixed top-24 right-6 z-[999] flex flex-col gap-3 rounded-xl border border-white/10 bg-[#1a1a1a]/95 p-4 shadow-2xl backdrop-blur-sm transition-opacity duration-300">
                <div className="text-sm font-medium text-white">FAQ CMS</div>
                <button
                  onClick={handleAddFaq}
                  className="flex items-center gap-2 rounded-lg bg-[#fdc500] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#fdd520]"
                >
                  <Plus className="h-4 w-4" />
                  Add FAQ
                </button>
                <div className="text-xs text-white/60">{faqs.length} FAQs</div>
              </div>
            )}

            <motion.div
              aria-label="Grid 3x"
              className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[20px] shrink-[0]"
              style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}
              variants={staggerContainer}
            >
              {coverImageUrl && (
                <motion.div aria-label="Cover image" className="self-start size-full justify-self-start overflow-clip relative" variants={staggerItem}>
                  <div className={`absolute left-0 top-0 right-0 bottom-0 ${isEditMode ? '' : 'pointer-events-none'}`}>
                    <EditableImage
                      contentKey="contactUs.faq.coverImage"
                      defaultSrc={coverImageUrl}
                      alt={coverImageAlt || "FAQ cover image"}
                      className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]"
                    />
                  </div>
                </motion.div>
              )}
              <div aria-label="FAQ item" className="self-start justify-self-start relative w-full" style={{"gridArea":coverImageUrl ? "auto / span 2" : "auto / span 3"}}>
                <div aria-label="1" className="items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px]">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      aria-label="FAQ item"
                      className="relative w-full shrink-[0]"
                      variants={staggerItem}
                    >
                      <div
                        aria-label={openIndex === index ? "Open" : "Close"}
                        className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5 cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      >
                        <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                            <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{faq.question}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {/* Edit/Delete buttons (only in edit mode) */}
                            {isEditMode && (
                              <div className="flex gap-1 mr-2" onClick={(e) => e.stopPropagation()}>
                                <button
                                  onClick={(e) => handleEditFaq(faq, e)}
                                  className="rounded p-1.5 bg-blue-500 text-white transition-colors hover:bg-blue-600"
                                  title="Edit FAQ"
                                >
                                  <Edit2 className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={(e) => handleDeleteFaq(faq.id, e)}
                                  className="rounded p-1.5 bg-red-500 text-white transition-colors hover:bg-red-600"
                                  title="Delete FAQ"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            )}
                            <div aria-label="Icon" role="presentation" className={`aspect-square overflow-hidden relative w-4 shrink-[0] transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                              <img src={openIndex === index ? "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7cc50ab84b3abc05e6ca2ba11d88a374140dc28b.svg?generation=1768843023256201&amp;alt=media" : "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media"} className="block size-full" />
                            </div>
                          </div>
                        </div>
                        {openIndex === index && (
                          <motion.div
                            className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.8]"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 0.8, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Modal */}
      {isModalOpen && createPortal(
        <FAQModal
          faq={editingFaq}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveFaq}
        />,
        document.body
      )}
    </>
  );
}