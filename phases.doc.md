# Delivery Phases: Atelier North Interiors

## Phase 0: Repository and specification
- Review six documents; resolve conflicts and missing requirements.
- Initialize React/Vite and dependencies; add scripts, linting, README and Git ignore.
- Deliverable: app starts, builds and shows a shell.
- Gate: `npm run build` passes.

## Phase 1: Visual system and shell
- Add fonts, tokens, typography, responsive navigation, footer, common buttons and page layouts.
- Implement route skeletons and 404.
- Gate: all links navigate; no mobile overflow.

## Phase 2: Content and core pages
- Populate data: 12 fictional projects in src/data/projects.js with categories residential, commercial, hospitality and renovations, plus multiple photos, scope and material details.
- Implement all static pages and realistic demo content.
- Gate: each route displays meaningful content and licensed/fallback imagery.

## Phase 3: Main interactions
- Implement category project filters; dynamic project routes; next/previous projects; related projects; keyboard-accessible gallery; FAQ accordion; validated enquiry form with consent.
- Gate: interactions function, state changes are consistent and demo labels are visible.

## Phase 4: Edge cases and accessibility
- Add validation, empty states, error messages, accessible dialogs, keyboard handling and reduced motion.
- Gate: every project slug resolves; filter counts and empty state; next/previous boundaries; gallery keyboard operation; contact consent validation.

## Phase 5: QA and optimization
- Run build and tests, inspect browser console, check 375/768/1440px layouts, broken images and links.
- Optimize lazy loading and metadata; ensure all demo claims are accurate.
- Gate: zero known critical errors and documented limitations.

## Phase 6: Deploy and handoff
- Add SPA rewrite if required, deploy to Vercel, test direct route URLs and complete README.
- Capture portfolio screenshots and a 30–60 second walkthrough.
- Gate: working public URL, source repository and customization guide.

## Estimated effort
AI-assisted first implementation can take hours; verified production-quality polish may require additional days. Do not mark a phase done without evidence.
