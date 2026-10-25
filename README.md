# LeadZam — Mobile Leads Management Redesign

A focused UI/UX improvement and frontend prototype for the LeadZam CRM, built as part of the UI/UX & Frontend Intern practical assessment.

## Overview

This project explores improvements to the mobile leads-management experience. The goal is to help sales users find leads quickly, narrow results using filters, and understand when no leads match their search.

## Problem Identified

The audit identified that the leads table requires horizontal scrolling on narrow mobile screens, making it harder to scan lead information.

## Proposed Solution

The prototype presents leads as responsive cards and includes:

- Search by lead name or email
- Filtering by lead stage
- Filtering by assignee
- Combined search and filtering
- A dynamic result count
- An empty state with a reset action
- Responsive layouts for mobile and desktop

The application uses sample data and does not connect to a live LeadZam backend.

## Technology Stack

- React
- TypeScript
- Vite
- CSS / Tailwind CSS
- Local mock data

## Run Locally

Prerequisites: Node.js and npm.

1. Clone this repository.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal.

## Design Decisions

The redesign prioritizes readable lead information, clear stage labels, simple filtering, and a mobile-first layout. Search and filters can be combined so users can narrow the lead list without navigating to another page.

## Scope and Trade-offs

This is a focused frontend prototype, not a full CRM implementation. It uses mock data and does not include authentication, backend integration, persistent data, or live lead updates. The design prioritizes the selected workflow over unrelated CRM features.

## Validation

The prototype was exercised in Bolt's preview. Search, stage filtering, combined stage and assignee filtering, and the no-results state were checked. Bolt reported successful build and TypeScript checks. The uploaded GitHub copy has not been independently built in a local environment.

Before production, I would validate the design with sales users, test on a wider range of devices, review accessibility with keyboard and assistive technologies, and compare task completion time against the existing experience.

## AI Usage Notes

I used ChatGPT to support the LeadZam product audit, organize findings, and evaluate UX recommendations. I used Bolt to generate and develop the React and TypeScript frontend prototype.

### AI Suggestions I Changed or Challenged

**1. Mobile leads table — avoid compressing or hiding important information**

**AI suggestion:** One possible approach to a narrow mobile table was to retain the tabular layout by compressing columns and reducing spacing, or to hide secondary columns on smaller screens.

**My decision:** I chose a responsive card-based layout instead. Compressing the table would preserve the horizontal-scrolling problem, while hiding columns could make useful information harder to access. The redesigned cards prioritize lead name, stage, and assignee, making the list easier to scan on mobile.

**2. Add Lead validation — explain requirements before submission**

**AI suggestion:** A conventional form-validation approach could show an error message after a user submits an empty form.

**My decision:** The audit identified that LeadZam already displays a generic error after an empty submission. I recommended communicating the minimum information required before submission, helping users avoid the error in the first place. This remains an audit recommendation rather than an implemented prototype feature.

**3. Audit Log — translate technical events into understandable activity**

**AI suggestion:** A technical activity view could expose internal event names and raw JSON metadata directly to users.

**My decision:** The audit identified this pattern in LeadZam's existing Audit Log. I recommended readable activity descriptions, with raw metadata retained in an expandable technical-details section. This would improve clarity for administrators without removing access to technical information. This recommendation has not been implemented in the prototype.

### Verification

I reviewed the generated frontend and exercised search, stage filtering, combined filtering, and the no-results state in Bolt's preview. Bolt reported successful build and TypeScript checks.

I also kept the audit's priorities provisional where actual user impact, usage frequency, or business rules were unknown. The prototype uses local mock data and has not been validated with real users. Before production, I would conduct usability testing, review relevant product analytics, verify accessibility and responsive behavior, and compare task completion and error rates against the existing experience.

## Limitations

- Uses local sample data.
- No live backend or authentication.
- No production usability study has been conducted.

## Author

Ayush Shukla
