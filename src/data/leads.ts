import type { Lead, Stage } from "@/types";

export const STAGES: Stage[] = [
  "Fresh",
  "Attempting Call",
  "Qualified",
  "Follow-up",
  "Negotiation",
];

export const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Ananya Iyer",
    email: "ananya.iyer@example.com",
    stage: "Negotiation",
    assignee: "Priya Sharma",
  },
  {
    id: "2",
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    stage: "Fresh",
    assignee: "Rahul Verma",
  },
  {
    id: "3",
    name: "Emily Carter",
    email: "emily.carter@example.com",
    stage: "Attempting Call",
    assignee: "Priya Sharma",
  },
  {
    id: "4",
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    stage: "Qualified",
    assignee: "Rahul Verma",
  },
  {
    id: "5",
    name: "Sofia Khan",
    email: "sofia.khan@example.com",
    stage: "Fresh",
    assignee: "Priya Sharma",
  },
  {
    id: "6",
    name: "Noah Williams",
    email: "noah.williams@example.com",
    stage: "Follow-up",
    assignee: "Rahul Verma",
  },
];

export const ASSIGNEES = Array.from(
  new Set(MOCK_LEADS.map((lead) => lead.assignee))
).sort();
