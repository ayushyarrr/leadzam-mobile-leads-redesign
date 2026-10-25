import type { Stage } from "@/types";

const STAGE_STYLES: Record<Stage, string> = {
  Fresh: "bg-blue-50 text-blue-700 ring-blue-200",
  "Attempting Call": "bg-amber-50 text-amber-700 ring-amber-200",
  Qualified: "bg-violet-50 text-violet-700 ring-violet-200",
  "Follow-up": "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Negotiation: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset " +
        STAGE_STYLES[stage]
      }
    >
      {stage}
    </span>
  );
}
