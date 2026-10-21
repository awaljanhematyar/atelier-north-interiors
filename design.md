# Design System: Atelier North Interiors

## Art direction
Luxury Interior Design Studio visual identity for Canadian homeowners, property developers and commercial design clients.
- Tagline: Spaces That Tell Your Story.
- Tone: credible, refined, contemporary, useful.
- Visual priority: Editorial photography, restrained layout and credible portfolio storytelling.

## Colors
Approved luxury dark redesign (2026-10-22), superseding the original light palette: near-black #111211, charcoal panel #1C1D1B, soft ivory #F3EEE5, champagne #D8C3A3, muted text #B7B2A9. Decorative dividers #41433D; interactive borders #8D806B and form borders #8D8980. Error text/borders #F0C4B5 on #30221E; success panel #252A22 with #AAB9A0 border. Legacy named brand tokens remain available for compatibility; semantic canvas/surface/ink/muted/accent variables drive the actual interface.
- Implement as CSS variables / Tailwind theme tokens.
- Check text and control contrast; decorative accent colors should not carry meaning alone.

## Typography
Cormorant Garamond headings; Inter body.
- Use responsive `clamp()` heading sizes, readable body line heights and a limited type scale.

## Layout
- Max content width around 1200–1280px with responsive gutters.
- Mobile-first 1-column, tablet 2-column, desktop 3–4-column grids where appropriate.
- Keep generous whitespace, coherent alignment, intentional image crops and consistent spacing.
- Desktop sticky navigation, accessible mobile menu and clear CTA hierarchy.

## Components
- Navigation, Footer, Hero, SectionHeading, Cards, Buttons, Inputs, Feedback, EmptyState and relevant feature-specific UI.
- Hover, active, disabled, error and focus states must all be visually distinct.
- Dialogs: close via button and Escape, trap focus when open, return focus to trigger.

## Content and imagery
- Prefer consistent aspect ratios and photographic style; use legally reusable images with verified attribution/licensing where necessary.
- Keep all fictional data and illustrative endorsements clearly labeled.
- Avoid fake urgency, deceptive trust badges or unverified claims.

## Responsive and motion
- Test 375, 768, 1024 and 1440px widths.
- Refined CSS transitions, restrained image zoom on hover and a short hero entrance only; honor `prefers-reduced-motion`.
- Avoid autoplay and unnecessary heavy animations.

## Quality bar
Looks distinctive rather than like a generic template, while preserving fast navigation and accessible UI.

## Approved luxury dark redesign
- User explicitly approved a modern international luxury dark aesthetic and deployment to the existing project on 2026-10-22. This direction replaces earlier light-theme requirements, while preserving content, licensed photographs, all routes, SEO, behaviour and demo boundaries.
- Hero: oversized serif headline beside a cinematic floor-to-ceiling reference image on desktop; stacked text and photograph on mobile. Text stays on an opaque dark surface for dependable contrast, with champagne used sparingly. Existing tagline and photo attribution preserved.
- Navigation: translucent near-black desktop header, thin champagne active underline, refined outlined CTA and accessible inline mobile disclosure.
- Cards: charcoal gradient surfaces, fine borders, generous typographic spacing and restrained image zoom only for hover-capable devices without reduced-motion preference.
- All routes, custom 404, dialogs, filters, FAQs, form controls, validation, success feedback, footer and loading/recovery states share semantic dark surfaces. Native controls opt into dark colour-scheme.
- Typography stays locally hosted Cormorant Garamond/Inter. No font downloads, new imagery, animation packages or dependencies.
- Readability: ivory primary text, warm muted supporting text, champagne accents; target WCAG AA 4.5:1 normal text and 3:1 interactive boundaries. Decorative separators do not represent controls. Visible champagne focus rings, no clipping workaround, enlarged WebKit select wrapping retained.
- Motion is limited to a 700ms hero entrance, 240ms state transitions and a 600ms photographic hover transform. All motion is removed under prefers-reduced-motion; content remains visible without animations or JavaScript animation observers.
- Verify mobile/tablet/desktop at 375/768/1024/1440, plus 320px enlarged text, every page type and existing interactions before release. No automatic scrolling animation, autoplay, gold-heavy decoration or fabricated business claims.