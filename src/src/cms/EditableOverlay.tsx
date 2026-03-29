import { useState } from 'react';
import { useCMSStore } from './cmsStore';
import { contentAPI } from './contentApi';
import { Settings, X } from 'lucide-react';

interface OverlayConfig {
  enabled: boolean;
  opacity: number;
  color: string;
}

interface EditableOverlayProps {
  contentKey: string;
  defaultOpacity?: number;
  defaultColor?: string;
  defaultEnabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function EditableOverlay({
  contentKey,
  defaultOpacity = 30,
  defaultColor = '#000000',
  defaultEnabled = true,
  className = '',
  children,
}: EditableOverlayProps) {
  const { isEditMode, getContent, updateContent, setSaveStatus } = useCMSStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Get current configuration
  const configKey = `${contentKey}.overlayConfig`;
  const configData = getContent(
    configKey,
    JSON.stringify({
      enabled: defaultEnabled,
      opacity: defaultOpacity,
      color: defaultColor,
    })
  );

  const config: OverlayConfig = JSON.parse(configData);

  // Save configuration
  const saveConfig = async (newConfig: OverlayConfig) => {
    try {
      setSaveStatus('saving');
      const configString = JSON.stringify(newConfig);
      updateContent(configKey, configString);
      await contentAPI.saveContent({ [configKey]: configString });
      setSaveStatus('saved');

      setTimeout(() => {
        setSaveStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Failed to save overlay config:', error);
      setSaveStatus('error');
    }
  };

  // Handle changes
  const handleToggleEnabled = () => {
    saveConfig({ ...config, enabled: !config.enabled });
  };

  const handleOpacityChange = (opacity: number) => {
    saveConfig({ ...config, opacity });
  };

  const handleColorChange = (color: string) => {
    saveConfig({ ...config, color });
  };

  return (
    <>
      {/* Overlay (only render if enabled) */}
      {config.enabled && (
        <div
          className={`absolute ${className}`}
          style={{
            backgroundColor: config.color,
            opacity: config.opacity / 100,
            ...(isEditMode &&
              isHovered && {
                outline: '2px dashed rgba(59, 130, 246, 0.8)',
                outlineOffset: '-4px',
              }),
          }}
          data-name="Overlay"
          onMouseEnter={() => isEditMode && setIsHovered(true)}
          onMouseLeave={() => isEditMode && setIsHovered(false)}
          onClick={(e) => {
            if (isEditMode) {
              e.stopPropagation();
              setShowModal(true);
            }
          }}
        />
      )}

      {/* Settings Button (appears on hover in edit mode) */}
      {isEditMode && isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          className="absolute top-4 right-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
          title="Overlay Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      )}

      {/* Show placeholder in edit mode when disabled */}
      {isEditMode && !config.enabled && (
        <div
          className="absolute inset-0 border-2 border-dashed border-yellow-500/50 bg-yellow-500/5 flex items-center justify-center cursor-pointer z-[90]"
          onClick={() => setShowModal(true)}
        >
          <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30">
            <p className="text-yellow-300 text-sm font-medium">Overlay Disabled (Click to Enable)</p>
          </div>
        </div>
      )}

      {/* Children (content inside overlay) */}
      {children}

      {/* Settings Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-2xl p-8 z-[9999] w-[480px] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-xl font-medium">Overlay Settings</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Enable/Disable Toggle */}
            <div className="mb-6">
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-gray-300 text-base font-medium">Enable Overlay</span>
                <div
                  onClick={handleToggleEnabled}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    config.enabled ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      config.enabled ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </div>
              </label>
            </div>

            {/* Opacity Slider */}
            <div className="mb-6">
              <label className="text-gray-300 text-base mb-3 block">
                Opacity: <span className="text-white font-medium">{config.opacity}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={config.opacity}
                onChange={(e) => handleOpacityChange(Number(e.target.value))}
                className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${config.opacity}%, #2a2a2a ${config.opacity}%, #2a2a2a 100%)`,
                }}
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Color Picker */}
            <div className="mb-6">
              <label className="text-gray-300 text-base mb-3 block">Background Color</label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={config.color}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer border-2 border-[#3a3a3a] bg-[#2a2a2a]"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={config.color}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-[#3a3a3a] font-mono text-sm focus:outline-none focus:border-blue-500"
                    placeholder="#000000"
                  />
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleColorChange('#000000')}
                      className="flex-1 bg-black border border-[#3a3a3a] rounded-lg h-8 hover:border-blue-500 transition-colors"
                      title="Black"
                    />
                    <button
                      onClick={() => handleColorChange('#ffffff')}
                      className="flex-1 bg-white border border-[#3a3a3a] rounded-lg h-8 hover:border-blue-500 transition-colors"
                      title="White"
                    />
                    <button
                      onClick={() => handleColorChange('#1a1a1a')}
                      className="flex-1 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg h-8 hover:border-blue-500 transition-colors"
                      title="Dark Gray"
                    />
                    <button
                      onClick={() => handleColorChange('#3b82f6')}
                      className="flex-1 bg-blue-500 border border-[#3a3a3a] rounded-lg h-8 hover:border-blue-400 transition-colors"
                      title="Blue"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="mb-4">
              <label className="text-gray-300 text-base mb-3 block">Preview</label>
              <div className="relative h-24 rounded-lg overflow-hidden border border-[#3a3a3a] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
                {config.enabled && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: config.color,
                      opacity: config.opacity / 100,
                    }}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-medium z-10">Background Content</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
}
