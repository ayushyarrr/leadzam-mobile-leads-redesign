import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { LeadCard } from "@/components/LeadCard";
import { FilterPanel, type FilterState } from "@/components/FilterPanel";
import { EmptyState } from "@/components/EmptyState";
import { ASSIGNEES, MOCK_LEADS, STAGES } from "@/data/leads";

const EMPTY_FILTERS: FilterState = { stage: "", assignee: "" };

export default function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [panelOpen, setPanelOpen] = useState(false);

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    return MOCK_LEADS.filter((lead) => {
      const matchesSearch =
        !query ||
        lead.name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query);
      const matchesStage = !filters.stage || lead.stage === filters.stage;
      const matchesAssignee =
        !filters.assignee || lead.assignee === filters.assignee;
      return matchesSearch && matchesStage && matchesAssignee;
    });
  }, [search, filters]);

  const resetAll = () => {
    setSearch("");
    setFilters(EMPTY_FILTERS);
  };

  const hasActiveFilters = Boolean(filters.stage || filters.assignee);
  const isFiltered = Boolean(search.trim()) || hasActiveFilters;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-gray-900">All Leads</h1>
          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>
              {filteredLeads.length}{" "}
              {filteredLeads.length === 1 ? "lead" : "leads"}
              {isFiltered ? " found" : " total"}
            </span>
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <label htmlFor="lead-search" className="sr-only">
              Search leads by name or email
            </label>
            <input
              id="lead-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            aria-controls="filter-panel"
            className={
              "inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
              (panelOpen
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50")
            }
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Filters
            {hasActiveFilters && (
              <span
                className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white"
                aria-label="Active filters"
              >
                {[filters.stage, filters.assignee].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {panelOpen && (
          <div id="filter-panel" className="mt-3">
            <FilterPanel
              filters={filters}
              stages={STAGES}
              assignees={ASSIGNEES}
              onChange={setFilters}
              onClear={() => setFilters(EMPTY_FILTERS)}
            />
          </div>
        )}

        <div className="mt-6">
          {filteredLeads.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLeads.map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </ul>
          ) : (
            <EmptyState onReset={resetAll} />
          )}
        </div>
      </main>
    </div>
  );
}
