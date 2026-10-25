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

AI tools were used to help scaffold the React and TypeScript prototype and support implementation. I reviewed the generated interface and tested the main search and filtering interactions rather than relying solely on the generated output.

One important implementation decision was to keep the scope focused on mobile lead management instead of generating a complete CRM. The prototype uses mock data, so backend behavior and production integration remain outside the scope of this assessment.

## Limitations

- Uses local sample data.
- No live backend or authentication.
- No production usability study has been conducted.
- The GitHub copy still requires an independent local build check.

## Author

Ayush Shukla
