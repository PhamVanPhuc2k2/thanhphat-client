export default function ProductLoading() {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-5 py-2">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />

      {/* Banner skeleton */}
      <div className="w-full h-32 md:h-48 bg-gray-200 rounded-xl animate-pulse" />

      {/* Brand filter skeleton */}
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 w-20 shrink-0 bg-gray-200 rounded-full animate-pulse" />
        ))}
      </div>

      {/* Sort bar skeleton */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-36 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Product grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-100 bg-white overflow-hidden">
            <div className="bg-gray-200 aspect-square animate-pulse" />
            <div className="p-3 space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
