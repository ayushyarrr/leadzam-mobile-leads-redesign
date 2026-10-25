export interface FilterState {
  stage: string;
  assignee: string;
}

interface FilterPanelProps {
  filters: FilterState;
  stages: string[];
  assignees: string[];
  onChange: (next: FilterState) => void;
  onClear: () => void;
}

export function FilterPanel({
  filters,
  stages,
  assignees,
  onChange,
  onClear,
}: FilterPanelProps) {
  const hasFilters = Boolean(filters.stage || filters.assignee);

  return (
    <section
      aria-label="Filter leads"
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="stage-filter"
            className="text-sm font-medium text-gray-700"
          >
            Stage
          </label>
          <select
            id="stage-filter"
            value={filters.stage}
            onChange={(e) => onChange({ ...filters, stage: e.target.value })}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All stages</option>
            {stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="assignee-filter"
            className="text-sm font-medium text-gray-700"
          >
            Assignee
          </label>
          <select
            id="assignee-filter"
            value={filters.assignee}
            onChange={(e) =>
              onChange({ ...filters, assignee: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All assignees</option>
            {assignees.map((assignee) => (
              <option key={assignee} value={assignee}>
                {assignee}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasFilters && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClear}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
