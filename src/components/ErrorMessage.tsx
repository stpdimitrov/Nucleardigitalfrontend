/**
 * Error Message Component
 * Displayed when CMS data fails to load
 */

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorMessage({ 
  message = "Failed to load content. Please try again.", 
  onRetry 
}: ErrorMessageProps) {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-red-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        <div>
          <h3 className="font-['Inter:Medium',sans-serif] font-medium text-white text-[18px] mb-2">
            Oops! Something went wrong
          </h3>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#ddd] text-[14px] opacity-70">
            {message}
          </p>
        </div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-[#fdc500] hover:bg-[#e5b200] transition-colors px-6 py-3 rounded-full"
          >
            <span className="font-['Inter:Medium',sans-serif] font-medium text-black text-[14px] tracking-[-0.16px] uppercase">
              Try Again
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Inline error message (smaller version)
 */
export function InlineErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-red-400 text-[14px]">
          {message || "Failed to load content"}
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="text-[#fdc500] hover:text-[#e5b200] transition-colors underline text-[13px]"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
