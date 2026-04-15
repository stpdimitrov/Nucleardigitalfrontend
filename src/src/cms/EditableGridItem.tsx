import { useState } from 'react';
import { useCMSStore } from './cmsStore';
import { X, ChevronDown } from 'lucide-react';

interface GridItemConfig {
  span?: number;
  variant?: string;
  direction?: 'horizontal' | 'vertical';
}

interface EditableGridItemProps {
  contentKey: string;
  defaultSpan?: number;
  maxSpan?: number;
  className?: string;
  children: React.ReactNode;
  variants?: string[];
  onConfigChange?: (config: GridItemConfig) => void;
}

export function EditableGridItem({
  contentKey,
  defaultSpan = 1,
  maxSpan = 4,
  className = '',
  children,
  variants = [],
  onConfigChange,
}: EditableGridItemProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus, persistContent } = useCMSStore();
  const [showControls, setShowControls] = useState(false);
  const [showSpanDropdown, setShowSpanDropdown] = useState(false);
  const [showVariantDropdown, setShowVariantDropdown] = useState(false);

  // Get current configuration
  const configKey = `${contentKey}.gridConfig`;
  const configData = getContent(configKey, JSON.stringify({
    span: defaultSpan,
    variant: 'All',
    direction: 'horizontal' as const,
  }));
  
  const config: GridItemConfig = JSON.parse(configData);

  // Save configuration
  const saveConfig = async (newConfig: GridItemConfig) => {
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

  // Update span
  const handleSpanChange = (span: number) => {
    const newConfig = { ...config, span };
    saveConfig(newConfig);
    setShowSpanDropdown(false);
  };

  // Update variant
  const handleVariantChange = (variant: string) => {
    const newConfig = { ...config, variant };
    saveConfig(newConfig);
    setShowVariantDropdown(false);
  };

  // Update direction
  const handleDirectionChange = (direction: 'horizontal' | 'vertical') => {
    const newConfig = { ...config, direction };
    saveConfig(newConfig);
  };

  // Generate span options
  const spanOptions = Array.from({ length: maxSpan }, (_, i) => i + 1);

  // Get grid column class based on span
  const getSpanClass = (span: number) => {
    const spanMap: Record<number, string> = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
    };
    return spanMap[span] || 'col-span-1';
  };

  return (
    <div
      className={`${className} ${getSpanClass(config.span || defaultSpan)} relative`}
      onClick={(e) => {
        if (isEditMode) {
          e.stopPropagation();
          setShowControls(true);
        }
      }}
      style={{
        ...(isEditMode && {
          outline: showControls ? '2px solid #3B82F6' : '1px dashed rgba(59, 130, 246, 0.3)',
          outlineOffset: '2px',
          cursor: 'pointer',
        }),
      }}
    >
      {children}

      {/* Control Panel Modal */}
      {isEditMode && showControls && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={(e) => {
              e.stopPropagation();
              setShowControls(false);
              setShowSpanDropdown(false);
              setShowVariantDropdown(false);
            }}
          />

          {/* Modal */}
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-2xl p-8 z-[9999] w-[520px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-xl font-medium">Grid Item Settings</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowControls(false);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Variant Selector */}
            {variants.length > 0 && (
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-3 block">Variant</label>
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
              <label className="text-gray-400 text-sm mb-3 block">Column Span</label>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSpanDropdown(!showSpanDropdown);
                    setShowVariantDropdown(false);
                  }}
                  className="w-full bg-[#2a2a2a] text-white rounded-xl px-5 py-3.5 text-left flex items-center justify-between hover:bg-[#333] transition-colors border border-[#3a3a3a]"
                >
                  <span>Span {config.span || defaultSpan}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
                
                {showSpanDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl overflow-hidden shadow-xl z-10">
                    {spanOptions.map((span) => (
                      <button
                        key={span}
                        onClick={() => handleSpanChange(span)}
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
              <label className="text-gray-400 text-sm mb-3 block">Direction</label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDirectionChange('horizontal')}
                  className={`flex-1 py-3.5 rounded-xl flex items-center justify-center transition-colors border ${
                    config.direction === 'horizontal'
                      ? 'bg-[#3a3a3a] border-[#4a4a4a] text-white'
                      : 'bg-[#2a2a2a] border-[#3a3a3a] text-gray-400 hover:bg-[#333]'
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDirectionChange('vertical')}
                  className={`flex-1 py-3.5 rounded-xl flex items-center justify-center transition-colors border ${
                    config.direction === 'vertical'
                      ? 'bg-[#3a3a3a] border-[#4a4a4a] text-white'
                      : 'bg-[#2a2a2a] border-[#3a3a3a] text-gray-400 hover:bg-[#333]'
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
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