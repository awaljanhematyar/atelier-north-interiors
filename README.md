# Atelier North Interiors

A fictional Vancouver interior design studio portfolio demo built with React, Vite and JavaScript JSX. Phase 2 adds editorial core pages, twelve fictional project briefs and licensed local reference photography to the existing visual system and responsive shell. Advanced interactions remain pending.

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
- `src/pages`: Home, Projects, dynamic Project Details, Services, About, Testimonials, shared Contact/Consultation layout and custom not-found page.
- `src/data`: twelve project records, category labels, studio/services/process/FAQ/testimonial copy and navigation.
- `src/assets`, `public`: bundled and directly served assets.
- `src/hooks`, `src/utils`: reusable hooks and pure utilities when needed.
- `src/test`: Vitest setup; tests live beside their subjects.
- `src/App.jsx`, `main.jsx`, `index.css`, `content.css`: route definitions, React/router entry, preserved Tailwind theme/shell and editorial content styles.

Empty directories contain .gitkeep files to preserve the approved structure in version control. The project is tracked on `main` in the existing public [GitHub repository](https://github.com/awaljanhematyar/atelier-north-interiors).

## Tooling

Tailwind uses the official @tailwindcss/vite plugin and CSS-first theme tokens, with no legacy PostCSS or Tailwind JavaScript configuration. ESLint checks JavaScript, JSX, React Hooks and Fast Refresh. Vitest uses React Testing Library, jest-dom and jsdom to test shell navigation/accessibility, project data and local WebP integrity, all twelve detail routes, invalid slugs, card navigation, static FAQ/testimonial content, disabled form previews and image fallback/recovery. These tests do not replace real-browser or assistive-technology review.

## Visual system and navigation

The exact ivory, charcoal, taupe, beige and sage palette is defined in `src/index.css`, alongside spacing, responsive gutters, an 80rem container and fluid heading sizes. Cormorant Garamond and Inter are locally hosted with font-display: swap; font provenance and SIL licenses are in `public/fonts`. English Latin subsets are included. Taupe and sage serve as decorative accents; text uses charcoal against ivory/beige or the reverse.

The desktop header is sticky from 1024px. Smaller layouts use an inline navigation disclosure with native link/button keyboard behavior, expanded state, Escape dismissal and focus return. It closes on navigation, focus leaving the header or a breakpoint change. The menu is not a modal dialog and does not trap focus. Route changes focus the main landmark; the skip link bypasses navigation. Motion is limited to CSS state transitions and disabled for reduced-motion preference.

## Approved scope and demo boundaries

Core routes: `/`, `/projects`, `/projects/:slug`, `/services`, `/about`, `/testimonials`, `/consultation`, `/contact` and a catch-all 404. Unknown project slugs show the custom not-found page. Each category has three fictional project records with three independent reference photos per concept. Related previews use the same category. There is no category-filter UI, next/previous interaction, gallery viewer or FAQ accordion yet.

Contact and Consultation contain labelled fields inside disabled fieldsets, visible preview notices and disabled submit buttons. They collect, persist and submit nothing. Consultation preferences use Vancouver time (`America/Vancouver`), with no live availability or reservations. Contact details use a reserved `.example` address and no real office location. Phase 3 will add local demo interactions and validation only; real integrations require separate approval.

Testimonials are explicitly fictional examples at page and quotation level, without real identities, ratings or verified-review claims. No backend, database, payments or authentication is included.

The five specification documents remain unchanged. memory.md records verified work and approved review decisions. HTML remains intentionally noindex until the publication/indexing policy is reviewed.

## Reference photography

See [IMAGE_CREDITS.md](IMAGE_CREDITS.md) for twelve original Pexels photo pages, photographers, licence links, verification date and download recipe. Twenty-four local WebP variants (640/1600px) use responsive srcSet/sizes, lazy loading for supporting images and accessible fallback text. Photographer credits are also shown beside imagery. Photos are illustrative references assembled from separate spaces, not completed work or real project documentation by Atelier North. No runtime external image request is needed.

## Customization and future deployment

Follow PRD.md, architecture.md, design.md, rules.md and phases.doc.md. Reuse the components in `src/components/ui` and the theme tokens when adding content. Check image licensing before adding photography.

Vercel deployment is deferred. The future static deployment uses the Vite preset, `npm run build`, `dist` output and the supplied SPA rewrite. Verify asset serving and direct route refresh on a preview deployment. Client-rendered metadata and catch-all HTTP status behavior have SEO limitations; route metadata, sitemap, robots policy and social previews require later review.

Real enquiries or scheduling require a separately approved service integration, privacy review and server-side validation. Do not place secrets in client code or VITE-prefixed variables.

## Phase gate

See memory.md for executed commands and actual results. Phase 2 is complete; Phase 3 requires explicit approval. No deployment has been performed.
