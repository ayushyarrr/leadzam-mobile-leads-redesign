import { Mail, User } from "lucide-react";
import type { Lead } from "@/types";
import { StageBadge } from "@/components/StageBadge";

export function LeadCard({ lead }: { lead: Lead }) {
  return (
    <li>
      <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-300">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-gray-900">
              {lead.name}
            </h3>
            <a
              href={`mailto:${lead.email}`}
              className="mt-1 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{lead.email}</span>
            </a>
          </div>
          <StageBadge stage={lead.stage} />
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3 text-sm text-gray-600">
          <User className="h-4 w-4 text-gray-400" aria-hidden="true" />
          <span className="text-gray-500">Assignee:</span>
          <span className="font-medium text-gray-700">{lead.assignee}</span>
        </div>
      </article>
    </li>
  );
}
