# Atelier North Interiors

A fictional Vancouver interior design studio portfolio demo built with React, Vite and JavaScript JSX. Phase 3 adds portfolio filters, an accessible reference gallery, project navigation, FAQ accordion and local-only demo enquiry/consultation forms to the existing editorial pages.

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
- `src/hooks`, `src/utils`: page-title hook, pure portfolio selection/navigation helpers and demo validation/date utilities.
- `src/test`: Vitest setup; tests live beside their subjects.
- `src/App.jsx`, `main.jsx`, `index.css`, `content.css`, `interactions.css`: routes, React entry, preserved theme/shell, editorial styles and interaction states.

Empty directories contain .gitkeep files to preserve the approved structure in version control. The project is tracked on `main` in the existing public [GitHub repository](https://github.com/awaljanhematyar/atelier-north-interiors).

## Tooling

Tailwind uses the official @tailwindcss/vite plugin and CSS-first theme tokens, with no legacy PostCSS or Tailwind JavaScript configuration. ESLint checks JavaScript, JSX, React Hooks and Fast Refresh. Vitest uses React Testing Library, jest-dom and jsdom to test existing shell/content coverage plus filters, gallery controls/focus, navigation boundaries, accordions, validation, local-only completion and reset. Dialog methods are stubbed only in jsdom; real-browser checks verify native modality and background isolation. No dependencies were added for Phase 3.

## Visual system and navigation

The exact ivory, charcoal, taupe, beige and sage palette is defined in `src/index.css`, alongside spacing, responsive gutters, an 80rem container and fluid heading sizes. Cormorant Garamond and Inter are locally hosted with font-display: swap; font provenance and SIL licenses are in `public/fonts`. English Latin subsets are included. Taupe and sage serve as decorative accents; text uses charcoal against ivory/beige or the reverse.

The desktop header is sticky from 1024px. Smaller layouts use an inline navigation disclosure with native link/button keyboard behavior, expanded state, Escape dismissal and focus return. It closes on navigation, focus leaving the header or a breakpoint change. The menu is not a modal dialog and does not trap focus. Route changes focus the main landmark; the skip link bypasses navigation. Motion is limited to CSS state transitions and disabled for reduced-motion preference.

## Approved scope and demo boundaries

Core routes: `/`, `/projects`, `/projects/:slug`, `/services`, `/about`, `/testimonials`, `/consultation`, `/contact` and a catch-all 404. Unknown project slugs show the custom not-found page. The twelve project records and image credits are unchanged.

Category buttons show accurate counts and store only the selected category in a query parameter, supporting direct links and browser history without reloads. Filter changes preserve keyboard focus and scroll. All Projects is the default; unknown URL categories safely display all concepts. Project navigation follows data order and does not wrap at the first/last concept. Related previews prioritize the same category, then fill from the remaining source order.

Gallery triggers open a native modal dialog. Previous/next images wrap; Left/Right arrows browse, Escape/Close dismiss, Tab stays in the dialog and focus returns to the opener. Background interaction and scrolling are blocked while open. Missing/failed images retain an accessible fallback. Service FAQs use independently controlled buttons with expanded states and associated answer IDs.

Contact and Consultation are controlled local React demos. Required fields, trimmed empty values, basic email format, category and acknowledgment are validated; Consultation additionally validates a real calendar date, no dates before today in Vancouver, and an allowed time window. Errors retain entries, announce feedback and focus the first invalid field. Completion is immediate, guarded against duplicates, and clears entered data. Start again/Clear form resets state and restores focus to the name field.

No form fetch, email, calendar, backend, storage write or real reservation occurs. Enter sample values only: input exists temporarily in component memory until completion, reset or navigation. Consultation confirmation explicitly says: “This is a demo. No appointment has been booked.” Contact confirmation says no message has been delivered. Contact information uses a reserved `.example` address and no real office location.

Dates use `Intl.DateTimeFormat` with `America/Vancouver`, not the device's local calendar or a hard-coded offset. Keep browser/runtime timezone data current. B.C. adopted permanent daylight time in 2026; the earlier seasonal-time copy was corrected after checking [the official provincial notice](https://news.gov.bc.ca/releases/2026AG0013-000209). This demo does not model appointment duration, availability or a scheduling service.

Testimonials are explicitly fictional examples at page and quotation level, without real identities, ratings or verified-review claims. No backend, database, payments or authentication is included.

The five specification documents remain unchanged. memory.md records verified work and approved review decisions. HTML remains intentionally noindex until the publication/indexing policy is reviewed.

## Reference photography

See [IMAGE_CREDITS.md](IMAGE_CREDITS.md) for twelve original Pexels photo pages, photographers, licence links, verification date and download recipe. Twenty-four local WebP variants (640/1600px) use responsive srcSet/sizes, lazy loading for supporting images and accessible fallback text. Photographer credits are also shown beside imagery. Photos are illustrative references assembled from separate spaces, not completed work or real project documentation by Atelier North. No runtime external image request is needed.

## Customization and future deployment

Follow PRD.md, architecture.md, design.md, rules.md and phases.doc.md. Reuse the components in `src/components/ui` and the theme tokens when adding content. Check image licensing before adding photography.

Vercel deployment is deferred. The future static deployment uses the Vite preset, `npm run build`, `dist` output and the supplied SPA rewrite. Verify asset serving and direct route refresh on a preview deployment. Client-rendered metadata and catch-all HTTP status behavior have SEO limitations; route metadata, sitemap, robots policy and social previews require later review.

Real enquiries or scheduling require a separately approved service integration, privacy review and server-side validation. Do not place secrets in client code or VITE-prefixed variables.

## Phase gate

See memory.md for executed commands and actual results. Phase 3 is complete; Phase 4 requires explicit approval. No deployment has been performed.
