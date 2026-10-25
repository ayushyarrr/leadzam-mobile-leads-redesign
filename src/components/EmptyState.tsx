import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <SearchX className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-gray-900">
        No leads found
      </h3>
      <p className="mt-1 max-w-sm text-sm text-gray-500">
        No leads match your current search or filters. Try adjusting your
        search term or clearing the filters to see all leads.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Reset search & filters
      </button>
    </div>
  );
}
