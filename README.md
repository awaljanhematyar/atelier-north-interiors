# Atelier North Interiors

A fictional Vancouver interior design studio portfolio demo built with React, Vite and JavaScript JSX. This repository currently contains the Phase 0B environment and a minimal application shell only.

## Requirements

Node.js 24.16+ within the Node 24 LTS line and npm 11. Exact installed package versions are recorded in package-lock.json. Use the same runtime locally and in future hosting settings.

## Local development

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run lint
npm test
npm run test:watch
```

On Windows, if command resolution selects an inaccessible system shim, use the actual Node installation in PATH and invoke npm.cmd. No secrets or environment variables are required.

## Architecture

- `src/components/layout`, `ui`, `features`: shared shell, primitives and feature components.
- `src/pages`: future route components.
- `src/data`: future local fictional content records.
- `src/assets`, `public`: bundled and directly served assets.
- `src/hooks`, `src/utils`: reusable hooks and pure utilities when needed.
- `src/test`: Vitest setup; tests live beside their subjects.
- `src/App.jsx`, `main.jsx`, `index.css`: minimal shell, React/router entry and Tailwind import.

Empty directories contain .gitkeep files so the approved structure can be preserved in version control later. Git has not been initialized by this setup.

## Tooling

Tailwind uses the official @tailwindcss/vite plugin and CSS import, with no legacy PostCSS or Tailwind JavaScript configuration. ESLint checks JavaScript, JSX, React Hooks and Fast Refresh. Vitest runs component smoke tests with React Testing Library, jest-dom matchers and jsdom. These tests verify setup only; browser, accessibility and feature coverage will grow with later phases.

## Approved scope and demo boundaries

Future routes: Home, Projects, Project Details, Services, About, Testimonials, Consultation Booking, Contact and 404. Consultation requests and enquiry forms will be local simulations: nothing sent, reserved or stored persistently. Testimonials and project material must be clearly fictional or illustrative. No backend, database, payments or authentication is included.

The five specification documents remain unchanged. memory.md records verified work and approved review decisions. Premium UI, fonts, route pages and project content belong to later phases. The initial HTML is intentionally noindex until the publication/indexing policy is reviewed.

## Customization and future deployment

Follow PRD.md, architecture.md, design.md, rules.md and phases.doc.md. Add brand tokens and fonts during Phase 1, then content in local data modules. Check image licensing before adding photography.

Vercel deployment is deferred. The future static deployment uses the Vite preset, `npm run build`, `dist` output and the supplied SPA rewrite. Verify asset serving and direct route refresh on a preview deployment. Client-rendered metadata and catch-all HTTP status behavior have SEO limitations; route metadata, sitemap, robots policy and social previews require later review.

Real enquiries or scheduling require a separately approved service integration, privacy review and server-side validation. Do not place secrets in client code or VITE-prefixed variables.

## Phase gate

See memory.md for executed commands and actual results. Stop after Phase 0B; Phase 1 requires explicit approval. No deployment or GitHub repository is created by this setup.
