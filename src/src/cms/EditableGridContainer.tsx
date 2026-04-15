import { useState } from 'react';
import { useCMSStore } from './cmsStore';
import { Settings, X, ChevronDown } from 'lucide-react';

interface GridConfig {
  variant: string;
  columnSpan: number;
  direction: 'horizontal' | 'vertical';
}

interface EditableGridContainerProps {
  contentKey: string;
  defaultColumnSpan?: number;
  maxColumnSpan?: number;
  variants?: string[];
  className?: string;
  children: React.ReactNode;
  onConfigChange?: (config: GridConfig) => void;
}

export function EditableGridContainer({
  contentKey,
  defaultColumnSpan = 3,
  maxColumnSpan = 4,
  variants = [],
  className = '',
  children,
  onConfigChange,
}: EditableGridContainerProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, persistContent } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVariantDropdown, setShowVariantDropdown] = useState(false);
  const [showSpanDropdown, setShowSpanDropdown] = useState(false);

  // Get current configuration
  const configKey = `${contentKey}.gridConfig`;
  const configData = getContent(
    configKey,
    JSON.stringify({
      variant: 'All',
      columnSpan: defaultColumnSpan,
      direction: 'horizontal' as const,
    })
  );

  const config: GridConfig = JSON.parse(configData);

  // Save configuration
  const saveConfig = async (newConfig: GridConfig) => {
    try {
      setSaveStatus('saving');
      const configString = JSON.stringify(newConfig);
      updateContent(configKey, configString);
      await persistContent();

      if (onConfigChange) {
        onConfigChange(newConfig);
      }
    } catch (error) {
      console.error('Failed to save grid config:', error);
      setSaveStatus('error');
    }
  };

  // Update variant
  const handleVariantChange = (variant: string) => {
    const newConfig = { ...config, variant };
    saveConfig(newConfig);
    setShowVariantDropdown(false);
  };

  // Update column span
  const handleColumnSpanChange = (columnSpan: number) => {
    const newConfig = { ...config, columnSpan };
    saveConfig(newConfig);
    setShowSpanDropdown(false);
  };

  // Update direction
  const handleDirectionChange = (direction: 'horizontal' | 'vertical') => {
    const newConfig = { ...config, direction };
    saveConfig(newConfig);
  };

  // Generate span options (2, 3, 4, etc.)
  const spanOptions = Array.from({ length: maxColumnSpan - 1 }, (_, i) => i + 2);

  // Get grid column class based on column span
  const getGridColumnsClass = (span: number) => {
    const spanMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };
    return spanMap[span] || 'grid-cols-1 md:grid-cols-3';
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => isEditMode && setIsHovered(true)}
      onMouseLeave={() => isEditMode && setIsHovered(false)}
    >
      {/* Grid Container with Hover Outline */}
      <div
        className={`grid ${getGridColumnsClass(config.columnSpan)} ${className}`}
        style={{
          ...(isEditMode &&
            isHovered && {
              outline: '2px dashed rgba(59, 130, 246, 0.5)',
              outlineOffset: '8px',
            }),
        }}
      >
        {children}
      </div>

      {/* Settings Button (appears on hover in edit mode) */}
      {isEditMode && isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          className="absolute -top-4 -right-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
          title="Grid Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      )}

      {/* Settings Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => {
              setShowModal(false);
              setShowVariantDropdown(false);
              setShowSpanDropdown(false);
            }}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-2xl p-8 z-[9999] w-[520px] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-xl font-medium">Projects filter</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Variant Selector */}
            {variants.length > 0 && (
              <div className="mb-6">
                <label className="text-gray-300 text-base mb-3 block">Variant</label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowVariantDropdown(!showVariantDropdown);
                      setShowSpanDropdown(false);
                    }}
                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-5 py-3.5 text-left flex items-center justify-between hover:bg-[#333] transition-colors border border-[#3a3a3a]"
                  >
                    <span>{config.variant || 'All'}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>

                  {showVariantDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl overflow-hidden shadow-xl z-10">
                      <button
                        onClick={() => handleVariantChange('All')}
                        className="w-full px-5 py-3 text-left text-white hover:bg-[#333] transition-colors"
                      >
                        All
                      </button>
                      {variants.map((variant) => (
                        <button
                          key={variant}
                          onClick={() => handleVariantChange(variant)}
                          className="w-full px-5 py-3 text-left text-white hover:bg-[#333] transition-colors"
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Column Span Selector */}
            <div className="mb-6">
              <label className="text-gray-300 text-base mb-3 block">Column Span</label>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSpanDropdown(!showSpanDropdown);
                    setShowVariantDropdown(false);
                  }}
                  className="w-full bg-[#2a2a2a] text-white rounded-xl px-5 py-3.5 text-left flex items-center justify-between hover:bg-[#333] transition-colors border border-[#3a3a3a]"
                >
                  <span>Span {config.columnSpan}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>

                {showSpanDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl overflow-hidden shadow-xl z-10">
                    {spanOptions.map((span) => (
                      <button
                        key={span}
                        onClick={() => handleColumnSpanChange(span)}
                        className="w-full px-5 py-3 text-left text-white hover:bg-[#333] transition-colors"
                      >
                        Span {span}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Direction Selector */}
            <div>
              <label className="text-gray-300 text-base mb-3 block">Direction</label>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDirectionChange('horizontal')}
                  className={`flex-1 py-4 rounded-xl flex items-center justify-center transition-colors border ${
                    config.direction === 'horizontal'
                      ? 'bg-[#3a3a3a] border-[#4a4a4a] text-white'
                      : 'bg-[#2a2a2a] border-[#3a3a3a] text-gray-400 hover:bg-[#333]'
                  }`}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 16h16M16 8l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDirectionChange('vertical')}
                  className={`flex-1 py-4 rounded-xl flex items-center justify-center transition-colors border ${
                    config.direction === 'vertical'
                      ? 'bg-[#3a3a3a] border-[#4a4a4a] text-white'
                      : 'bg-[#2a2a2a] border-[#3a3a3a] text-gray-400 hover:bg-[#333]'
                  }`}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8v16M8 16l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
