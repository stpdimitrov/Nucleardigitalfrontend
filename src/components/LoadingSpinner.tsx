/**
 * Loading Spinner Component
 * Used to indicate content is being fetched from CMS
 */

export function LoadingSpinner() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#fdc500] border-t-transparent rounded-full animate-spin" />
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#ddd] text-[14px] tracking-[-0.16px] uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}

/**
 * Inline Loading Spinner (smaller version)
 */
export function InlineLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-8 h-8 border-3 border-[#fdc500] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/**
 * Skeleton loader for project cards
 */
export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-[#1a1a1a] h-[400px] w-full rounded-lg mb-4" />
      <div className="bg-[#1a1a1a] h-6 w-3/4 rounded mb-2" />
      <div className="bg-[#1a1a1a] h-4 w-1/2 rounded" />
    </div>
  );
}

/**
 * Skeleton loader for blog cards
 */
export function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-[#1a1a1a] h-[300px] w-full rounded-lg mb-4" />
      <div className="bg-[#1a1a1a] h-5 w-full rounded mb-3" />
      <div className="bg-[#1a1a1a] h-4 w-full rounded mb-2" />
      <div className="bg-[#1a1a1a] h-4 w-2/3 rounded mb-4" />
      <div className="flex items-center gap-2">
        <div className="bg-[#1a1a1a] w-8 h-8 rounded-full" />
        <div className="bg-[#1a1a1a] h-4 w-24 rounded" />
      </div>
    </div>
  );
}
