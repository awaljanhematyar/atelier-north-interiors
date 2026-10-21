# Supplemental image optimization record

The original photography register and 24 downloaded WebP files in IMAGE_CREDITS.md are preserved unchanged. This record covers one additional locally derived responsive variant, created on 2026-10-21.

| Derivative | Original local source | Photographer and licence |
|---|---|---|
| `public/images/optimized/28450649-960.webp` | `public/images/28450649-1600.webp` | Masood Aslami; [original Pexels photo](https://www.pexels.com/photo/elegant-modern-interior-of-a-wooden-restaurant-28450649/), [Pexels License](https://www.pexels.com/license/) |

The bundled Sharp QA runtime resized the existing licensed source proportionally to 960 × 1440 pixels, WebP quality 80, without enlargement or content alteration. The new file is 101,014 bytes; the original is 210,380 bytes. At this intermediate size it saves 109,366 bytes (52%) compared with the original 1600px file. Both original 640/1600px variants remain available. Browser selection depends on viewport size and device pixel ratio.

This addresses the mobile Lighthouse image-delivery finding for the portrait reference. The shared image-source helper supplies the same responsive candidates to image elements and build-time preload hints. Existing on-page photographer credits, descriptive alt text and fictional-reference disclosures remain in place. No new photograph, endorsement, studio authorship or client relationship is implied.
