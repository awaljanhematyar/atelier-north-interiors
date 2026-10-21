# Design System: Atelier North Interiors

## Art direction
Luxury Interior Design Studio visual identity for Canadian homeowners, property developers and commercial design clients.
- Tagline: Spaces That Tell Your Story.
- Tone: credible, refined, contemporary, useful.
- Visual priority: Editorial photography, restrained layout and credible portfolio storytelling.

## Colors
ivory #F8F6F2, charcoal #252525, taupe #A89F91, beige #D9CDBF, sage #7A8777.
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
- Subtle CSS transitions only; honor `prefers-reduced-motion`.
- Avoid autoplay and unnecessary heavy animations.

## Quality bar
Looks distinctive rather than like a generic template, while preserving fast navigation and accessible UI.
