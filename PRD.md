# Product Requirements Document: Atelier North Interiors

## Product brief
- Product: Atelier North Interiors, a fictional luxury interior design studio portfolio demonstration.
- Market: Vancouver, British Columbia.
- Tagline: Spaces That Tell Your Story.
- Audience: Canadian homeowners, property developers and commercial design clients.
- Goal: a commercially credible, responsive, interactive frontend that can be shown to prospective Canadian clients and adapted to a real business.
- Currency: CAD; language: English.

## Required routes
Home, Projects, Project Details (/projects/:slug), Services, About, Testimonials, Contact, 404.

## Functional scope
category project filters; dynamic project routes; next/previous projects; related projects; keyboard-accessible gallery; FAQ accordion; validated enquiry form with consent.

## Sample data
12 fictional projects in src/data/projects.js with categories residential, commercial, hospitality and renovations, plus multiple photos, scope and material details.

## Scope exclusions and honesty
Project photography is illustrative and must not be presented as proof of completed client work; enquiries are demo-only.
- Clearly identify the brand and data as portfolio demo material, using an unobtrusive but visible disclosure.
- No invented verified reviews, credentials, awards, client relationships or production transactions.
- Every interactive control must work or clearly explain its disabled/demo state.

## Acceptance criteria
1. Every listed route renders with consistent navigation, footer or app shell as appropriate.
2. Every described interaction functions using local data and appropriate React state.
3. No runtime errors, dead links, broken imports or knowingly broken images.
4. Forms validate and communicate clearly that no real submission occurs.
5. Mobile widths 375px, tablet 768px and desktop 1440px are usable without horizontal overflow.
6. Keyboard navigation, visible focus, accessible labels, semantic landmarks and reduced-motion preference are respected.
7. `npm run build` succeeds; meaningful tests pass.
8. README explains run, demo limitations, customization, deployment and integrations needed for production.
9. The implementation stays easy for a junior React developer to modify.

## Priority
Editorial photography, restrained layout and credible portfolio storytelling.

## Definition of done
A reviewer can open the live demo, navigate every page, exercise every primary flow, and understand which features are simulated.
