export type Stage =
  | "Fresh"
  | "Attempting Call"
  | "Qualified"
  | "Follow-up"
  | "Negotiation";

export interface Lead {
  id: string;
  name: string;
  email: string;
  stage: Stage;
  assignee: string;
}
