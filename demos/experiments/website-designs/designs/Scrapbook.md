# Scrapbook Design Reference

## Overview

Scrapbook design is a handmade collage aesthetic rooted in the physical craft of assembling photographs, paper cut-outs, stickers, washi tape, and personal mementos onto album pages. When translated to digital and web design, it preserves the tactile, layered quality of its physical counterpart: elements overlap deliberately, edges are torn or irregular, photos tilt as if taped at angles, and decorative embellishments -- tape strips, doodles, stamps, and sticker-like badges -- bind the composition together. The result is a design language that feels deeply personal, warm, and intentionally imperfect.

The aesthetic gained significant traction in web and graphic design during 2024-2025, where the "Structured Scrapbook" trend brought old-school crafting charm into digital formats. Designers adopted cut-out photographs, layered textures and patterns, caption-style text, asymmetric layouts, and nostalgic fonts to mimic real-life scrapbook pages on screen. The style breaks away from rigid grid systems and pixel-perfect precision, instead embracing deliberate imperfection: slightly rotated elements, hand-drawn annotations, visible tape and pin attachments, and mixed media compositions that combine photography, illustration, and typography in a single view.

At its emotional core, Scrapbook design communicates intimacy and authenticity. Every element looks as though a real person placed it there by hand -- choosing that particular photo, tearing that particular edge, writing that particular caption in their own handwriting. This makes it especially effective for personal brands, creative portfolios, journals, photo galleries, event pages, and any context where warmth and approachability matter more than corporate polish. The palette tends toward warm, slightly muted tones -- kraft paper browns, soft pastels, vintage creams -- punctuated by cheerful pops of color from stickers and washi tape. Typography mixes freely between handwritten scripts, typewriter faces, and casual sans-serifs, reinforcing the eclectic, one-of-a-kind character that defines the aesthetic.

---

## Visual Characteristics

### Core Design Traits

- **Collage layering** -- overlapping photographs, paper scraps, stickers, and decorative elements create visual depth, just like a physical scrapbook page
- **Torn and irregular edges** -- paper elements feature rough, torn borders rather than clean cuts, achieved with irregular clip-paths or mask images
- **Washi tape accents** -- semi-transparent decorative tape strips in patterns (stripes, dots, florals) appear to pin or attach elements to the page
- **Polaroid-style photos** -- images framed with thick white borders and slight drop shadows, often tilted at casual angles with handwritten captions beneath
- **Sticker and badge elements** -- decorative shapes, icons, and labels styled to look like peel-off stickers with subtle outlines and soft shadows
- **Handwritten annotations** -- cursive or casual handwriting overlaid on compositions as captions, arrows, dates, or personal notes
- **Paper textures and grain** -- backgrounds feature visible paper fibers, kraft textures, lined notebook patterns, or graph paper grids
- **Slight rotations and offsets** -- elements are deliberately tilted 1-5 degrees as if placed by hand rather than aligned by machine
- **Pin and clip attachments** -- small decorative pins, paper clips, or thumbtacks visually fasten elements in place
- **Mixed media composition** -- photography, illustration, typed text, handwriting, and decorative elements coexist in a single layout
- **Visible shadows and dimension** -- subtle drop shadows under layered elements create the illusion of physical papers stacked on a surface

### Design Principles

- **Imperfection is intentional** -- wobbly edges, uneven spacing, and casual placement are features, not flaws; they communicate authenticity
- **Personal over polished** -- every element should feel like it was chosen and placed by a real person with their own taste and memories
- **Layering creates depth** -- overlapping elements at various angles and z-indexes produce the tactile depth of a physical scrapbook
- **Mixing media builds character** -- combining different visual styles (photo, illustration, handwriting, print) within one layout enriches the narrative
- **Warm and inviting palette** -- colors should feel cozy, nostalgic, and approachable rather than stark or corporate
- **Storytelling through arrangement** -- the layout itself tells a story; placement, grouping, and decoration choices communicate meaning beyond the content
- **Texture grounds the digital** -- paper grain, fabric patterns, and material textures bridge the gap between screen and physical craft
- **Decoration serves connection** -- washi tape, stickers, and embellishments are not mere ornament; they create visual relationships between elements

---

## Color Palette

The Scrapbook palette draws from craft paper, vintage photographs, soft pastels, and cheerful embellishment colors. The foundation is warm and papery -- kraft browns, creamy whites, and soft beiges -- with accent colors pulled from the playful world of stickers, washi tape, and colored cardstock. The overall feeling is warm, slightly faded, and nostalgic, as if the page has been lovingly assembled over time.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Kraft Paper | `#C4A882` | Primary background, base surface texture |
| Cream White | `#FDF8F0` | Photo borders, card backgrounds, clean areas |
| Warm Linen | `#F0E6D6` | Secondary background, layered paper surfaces |
| Soft Blush | `#F2C4C4` | Washi tape accent, sticker backgrounds, gentle highlights |
| Dusty Rose | `#D4919A` | Decorative tape, badge accents, romantic elements |
| Sky Blue | `#A8C8E8` | Sticker accents, caption boxes, cool contrast |
| Sage Mint | `#B5CDB6` | Decorative elements, nature stickers, calming accent |
| Buttercup | `#F2D06B` | Star stickers, highlight badges, warm pop of color |
| Peach Sorbet | `#F5B895` | Washi tape, warm accents, label backgrounds |
| Lavender Mist | `#C9B8D9` | Decorative stickers, soft accent, whimsical touch |
| Denim Blue | `#6B8DAE` | Links, secondary headings, cool grounding tone |
| Rust Ink | `#A05A3C` | Handwritten text, date stamps, vintage ink color |
| Charcoal Pencil | `#4A4543` | Body text, captions, pencil-drawn elements |
| Faded Mauve | `#B89BA8` | Subtle borders, muted decorative strips |
| Polaroid Shadow | `#D6CEC4` | Shadows beneath photos and layered elements |

### CSS Custom Properties

```css
:root {
  /* Paper and base tones */
  --sb-kraft: #c4a882;
  --sb-cream: #fdf8f0;
  --sb-linen: #f0e6d6;
  --sb-parchment: #e8ddc8;

  /* Pastel accents */
  --sb-blush: #f2c4c4;
  --sb-rose: #d4919a;
  --sb-sky: #a8c8e8;
  --sb-mint: #b5cdb6;
  --sb-buttercup: #f2d06b;
  --sb-peach: #f5b895;
  --sb-lavender: #c9b8d9;

  /* Ink and pencil tones */
  --sb-denim: #6b8dae;
  --sb-rust: #a05a3c;
  --sb-charcoal: #4a4543;
  --sb-mauve: #b89ba8;
  --sb-shadow: #d6cec4;

  /* Functional mappings */
  --sb-bg-primary: var(--sb-linen);
  --sb-bg-secondary: var(--sb-cream);
  --sb-bg-card: var(--sb-cream);
  --sb-text-primary: var(--sb-charcoal);
  --sb-text-secondary: var(--sb-rust);
  --sb-text-heading: var(--sb-charcoal);
  --sb-text-handwritten: var(--sb-rust);
  --sb-accent-warm: var(--sb-peach);
  --sb-accent-cool: var(--sb-sky);
  --sb-accent-pop: var(--sb-buttercup);
  --sb-border: var(--sb-shadow);
  --sb-link: var(--sb-denim);
  --sb-link-hover: var(--sb-rose);
  --sb-tape: var(--sb-blush);
}
```

---

## Typography

Scrapbook typography embraces variety and personality. Headings use handwritten or script fonts that feel like someone wrote directly on the page. Subheadings might use a typewriter face for that vintage journaling quality. Body text stays readable with a friendly, rounded sans-serif. The key principle is mixing -- a scrapbook page rarely uses just one font, and the contrast between handwriting, print, and typed text is part of the charm. Fonts should feel casual, warm, and personal rather than formal or corporate.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **Caveat** | Natural handwriting, flowing | Hero headlines, personal captions |
| **Shadows Into Light** | Rounded handwritten, soft | Decorative labels, annotations |
| **Patrick Hand** | Casual handwriting, clear | Subheadings, callout text |
| **Indie Flower** | Playful handwritten, whimsical | Sticker text, decorative captions |
| **Special Elite** | Typewriter, vintage strike | Date stamps, journal entries, tags |
| **Courier Prime** | Clean typewriter, monospace | Code-like labels, structured captions |
| **Nunito** | Rounded sans-serif, friendly | Body text, readable paragraphs |
| **Quicksand** | Geometric rounded sans-serif | Navigation, UI elements, labels |
| **Lora** | Calligraphic serif, elegant | Block quotes, feature paragraphs |
| **Satisfy** | Brush script, flowing | Decorative titles, accent words |

### Font Pairing Table

| Context | Primary Font | Secondary Font | Effect |
|---------|-------------|----------------|--------|
| Hero + Body | Caveat (headline) | Nunito (body) | Personal headline with clean readability |
| Journal style | Special Elite (entries) | Shadows Into Light (annotations) | Vintage journaling with handwritten notes |
| Playful page | Indie Flower (headings) | Quicksand (body) | Whimsical character with modern clarity |
| Elegant scrapbook | Satisfy (display) | Lora (body) | Script elegance balanced by refined serif |
| Mixed craft | Patrick Hand (headings) | Courier Prime (captions) | Casual handwriting meets typewriter charm |

### CSS Typography Example

```css
/* Hero headline -- personal handwriting */
h1 {
  font-family: 'Caveat', 'Shadows Into Light', cursive;
  font-weight: 700;
  font-size: clamp(2.6rem, 6vw, 4.8rem);
  color: var(--sb-text-heading);
  line-height: 1.15;
  letter-spacing: 0.01em;
}

/* Section headings -- casual handwriting */
h2 {
  font-family: 'Patrick Hand', 'Indie Flower', cursive;
  font-weight: 400;
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  color: var(--sb-text-heading);
  line-height: 1.3;
}

/* Subsection headings -- typewriter style */
h3 {
  font-family: 'Special Elite', 'Courier Prime', monospace;
  font-weight: 400;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--sb-rust);
  line-height: 1.4;
  letter-spacing: 0.03em;
}

/* Body text -- rounded and friendly */
body {
  font-family: 'Nunito', 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--sb-text-primary);
}

/* Handwritten annotation overlay */
.sb-handwritten {
  font-family: 'Caveat', 'Shadows Into Light', cursive;
  font-size: 1.3em;
  color: var(--sb-text-handwritten);
  transform: rotate(-2deg);
  display: inline-block;
}

/* Typewriter caption */
.sb-typewriter {
  font-family: 'Special Elite', 'Courier Prime', monospace;
  font-size: 0.85rem;
  color: var(--sb-rust);
  letter-spacing: 0.04em;
}

/* Sticker label text */
.sb-sticker-text {
  font-family: 'Indie Flower', 'Patrick Hand', cursive;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--sb-charcoal);
  text-align: center;
}
```

---

## Layout Principles

- **Asymmetric collage composition** -- avoid rigid grids; position elements at varied angles and overlapping positions to simulate hand-arranged pages
- **Layered z-index stacking** -- photos, tape, stickers, and text occupy different depth layers, with higher elements casting subtle shadows on lower ones
- **Generous whitespace as "page"** -- the background represents the scrapbook page itself; leave breathing room so individual elements read clearly against the surface
- **Clustered groupings** -- related items (a photo with its caption and a decorative sticker) form visual clusters, separated from other clusters by open space
- **Mixed element sizing** -- vary the scale of photos, cards, and embellishments; one large focal image surrounded by smaller supporting elements creates natural hierarchy
- **Rotational variety** -- tilt elements between -5 and +5 degrees, varying the rotation so no two adjacent items share the same angle
- **Edge-breaking elements** -- let some stickers, tape strips, or photo corners extend beyond their container boundaries to break visual monotony
- **Vertical rhythm through decoration** -- use washi tape strips, doodle dividers, and sticker rows as section separators instead of plain lines
- **Responsive de-layering** -- on smaller screens, reduce overlaps and flatten the collage into a more sequential vertical flow while preserving rotations and decorative elements
- **Focal anchoring** -- each section should have one dominant visual element (large photo, hero sticker, bold caption) that anchors the surrounding smaller items

---

## CSS / Design Techniques

### Torn Paper Edge

```css
/* Torn edge effect on paper elements */
.sb-torn-paper {
  position: relative;
  background: var(--sb-cream);
  padding: 2rem;
  box-shadow: 2px 3px 8px rgba(74, 69, 67, 0.1);
}

/* Torn top edge */
.sb-torn-paper::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  right: 0;
  height: 12px;
  background: var(--sb-cream);
  clip-path: polygon(
    0% 100%, 2% 55%, 5% 80%, 8% 35%, 12% 70%, 15% 25%,
    19% 60%, 23% 40%, 27% 75%, 30% 20%, 34% 55%, 38% 30%,
    42% 65%, 46% 15%, 50% 50%, 54% 25%, 58% 70%, 62% 35%,
    66% 60%, 70% 20%, 74% 50%, 78% 40%, 82% 75%, 86% 30%,
    90% 55%, 94% 20%, 97% 65%, 100% 100%
  );
}

/* Torn bottom edge */
.sb-torn-paper::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 12px;
  background: var(--sb-cream);
  clip-path: polygon(
    0% 0%, 3% 60%, 7% 30%, 11% 70%, 14% 20%, 18% 55%,
    22% 35%, 26% 75%, 30% 45%, 34% 80%, 38% 25%, 42% 60%,
    46% 40%, 50% 85%, 54% 30%, 58% 55%, 62% 20%, 66% 65%,
    70% 40%, 74% 70%, 78% 25%, 82% 50%, 86% 35%, 90% 75%,
    94% 45%, 97% 60%, 100% 0%
  );
}
```

### Washi Tape Decoration

```css
/* Base washi tape strip */
.sb-tape {
  position: absolute;
  width: 120px;
  height: 28px;
  opacity: 0.8;
  z-index: 5;
  border-radius: 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

/* Tape position variations */
.sb-tape--top-left {
  top: -10px;
  left: 20px;
  transform: rotate(-8deg);
}

.sb-tape--top-right {
  top: -10px;
  right: 20px;
  transform: rotate(6deg);
}

.sb-tape--center {
  top: -12px;
  left: calc(50% - 60px);
  transform: rotate(-3deg);
}

/* Solid color tape */
.sb-tape--blush { background: var(--sb-blush); }
.sb-tape--mint { background: var(--sb-mint); }
.sb-tape--sky { background: var(--sb-sky); }
.sb-tape--lavender { background: var(--sb-lavender); }
.sb-tape--peach { background: var(--sb-peach); }

/* Striped washi tape */
.sb-tape--striped {
  background: repeating-linear-gradient(
    90deg,
    var(--sb-blush),
    var(--sb-blush) 4px,
    rgba(255, 255, 255, 0.6) 4px,
    rgba(255, 255, 255, 0.6) 8px
  );
}

/* Dotted washi tape */
.sb-tape--dotted {
  background-color: var(--sb-buttercup);
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.6) 2px,
    transparent 2px
  );
  background-size: 8px 8px;
}

/* Checkered washi tape */
.sb-tape--checkered {
  background-image:
    linear-gradient(45deg, var(--sb-mint) 25%, transparent 25%),
    linear-gradient(-45deg, var(--sb-mint) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--sb-mint) 75%),
    linear-gradient(-45deg, transparent 75%, var(--sb-mint) 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
  background-color: rgba(255, 255, 255, 0.7);
}
```

### Polaroid Photo Frame

```css
/* Polaroid-style photo container */
.sb-polaroid {
  display: inline-block;
  background: #fff;
  padding: 10px 10px 40px 10px;
  box-shadow:
    2px 3px 8px rgba(74, 69, 67, 0.15),
    0 0 0 1px rgba(74, 69, 67, 0.05);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sb-polaroid img {
  width: 100%;
  display: block;
  filter: saturate(0.9) contrast(1.05);
}

/* Handwritten caption area */
.sb-polaroid .caption {
  position: absolute;
  bottom: 6px;
  left: 14px;
  right: 14px;
  font-family: 'Caveat', cursive;
  font-size: 1rem;
  color: var(--sb-rust);
  text-align: center;
}

/* Tilted placement variations */
.sb-polaroid:nth-child(odd) { transform: rotate(-3deg); }
.sb-polaroid:nth-child(even) { transform: rotate(2.5deg); }
.sb-polaroid:nth-child(3n) { transform: rotate(-1.5deg); }

.sb-polaroid:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 4px 6px 16px rgba(74, 69, 67, 0.22);
  z-index: 10;
}
```

### Card Component

```css
/* Scrapbook-style card */
.sb-card {
  background: var(--sb-cream);
  border-radius: 2px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 2px 3px 10px rgba(74, 69, 67, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: visible;
}

/* Slight hand-placed rotation */
.sb-card:nth-child(odd) { transform: rotate(-1.2deg); }
.sb-card:nth-child(even) { transform: rotate(0.8deg); }

.sb-card:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 3px 6px 16px rgba(74, 69, 67, 0.18);
  z-index: 5;
}

/* Card with notebook paper lines */
.sb-card--lined {
  background-image: repeating-linear-gradient(
    transparent,
    transparent 27px,
    rgba(164, 194, 220, 0.3) 27px,
    rgba(164, 194, 220, 0.3) 28px
  );
  background-position: 0 1.5rem;
  padding-top: 2rem;
}

/* Card with kraft paper texture */
.sb-card--kraft {
  background-color: var(--sb-kraft);
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  color: var(--sb-cream);
}

/* Card with torn edge */
.sb-card--torn {
  clip-path: polygon(
    0% 2%, 3% 0%, 7% 3%, 12% 0%, 17% 2%, 22% 0%,
    28% 3%, 33% 1%, 38% 3%, 44% 0%, 50% 2%, 56% 0%,
    62% 3%, 67% 0%, 73% 2%, 78% 0%, 83% 3%, 88% 1%,
    93% 3%, 97% 0%, 100% 2%, 100% 98%, 97% 100%, 93% 97%,
    88% 100%, 83% 97%, 78% 100%, 73% 98%, 67% 100%, 62% 97%,
    56% 100%, 50% 98%, 44% 100%, 38% 97%, 33% 100%, 28% 97%,
    22% 100%, 17% 98%, 12% 100%, 7% 97%, 3% 100%, 0% 98%
  );
  padding: 2rem 1.5rem;
}
```

### Button Styles

```css
/* Sticker-style button */
.sb-btn {
  display: inline-block;
  padding: 0.65rem 1.5rem;
  font-family: 'Patrick Hand', 'Indie Flower', cursive;
  font-size: 1.05rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

/* Primary sticker button */
.sb-btn--primary {
  background: var(--sb-rose);
  color: #fff;
  box-shadow:
    2px 3px 6px rgba(212, 145, 154, 0.35),
    0 0 0 2px rgba(255, 255, 255, 0.4) inset;
}

.sb-btn--primary:hover {
  transform: translateY(-2px) rotate(-1deg);
  box-shadow:
    3px 5px 12px rgba(212, 145, 154, 0.45),
    0 0 0 2px rgba(255, 255, 255, 0.5) inset;
}

/* Outlined tape-style button */
.sb-btn--tape {
  background: var(--sb-blush);
  color: var(--sb-charcoal);
  border-radius: 2px;
  opacity: 0.85;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.sb-btn--tape:hover {
  opacity: 1;
  transform: translateY(-1px);
}

/* Badge-style button */
.sb-btn--badge {
  background: var(--sb-buttercup);
  color: var(--sb-charcoal);
  border-radius: 50px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  box-shadow: 2px 3px 6px rgba(242, 208, 107, 0.35);
}

.sb-btn--badge:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 3px 5px 10px rgba(242, 208, 107, 0.45);
}

/* Ghost / pencil-outline button */
.sb-btn--ghost {
  background: transparent;
  color: var(--sb-charcoal);
  border: 2px dashed var(--sb-charcoal);
  border-radius: 4px;
  font-family: 'Special Elite', monospace;
}

.sb-btn--ghost:hover {
  background: rgba(74, 69, 67, 0.06);
  transform: translateY(-1px);
}
```

### Navigation

```css
/* Scrapbook-style navigation bar */
.sb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--sb-cream);
  box-shadow: 0 2px 8px rgba(74, 69, 67, 0.08);
  position: relative;
  z-index: 100;
}

/* Logo styled like a handwritten label */
.sb-nav__logo {
  font-family: 'Caveat', cursive;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--sb-charcoal);
  text-decoration: none;
  transform: rotate(-2deg);
  display: inline-block;
}

/* Navigation links as tab-like stickers */
.sb-nav__links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sb-nav__link {
  font-family: 'Patrick Hand', cursive;
  font-size: 1.05rem;
  color: var(--sb-charcoal);
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 16px;
  transition: background 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.sb-nav__link:hover {
  background: var(--sb-blush);
  transform: rotate(-1.5deg) scale(1.04);
}

.sb-nav__link--active {
  background: var(--sb-peach);
  color: var(--sb-charcoal);
  transform: rotate(-1deg);
  box-shadow: 1px 2px 4px rgba(245, 184, 149, 0.3);
}

/* Washi tape accent strip under nav */
.sb-nav::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    var(--sb-blush),
    var(--sb-blush) 5px,
    rgba(255, 255, 255, 0.5) 5px,
    rgba(255, 255, 255, 0.5) 10px
  );
  opacity: 0.6;
}

/* Mobile hamburger menu */
.sb-nav__toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--sb-charcoal);
}

@media (max-width: 700px) {
  .sb-nav__toggle { display: block; }
  .sb-nav__links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--sb-cream);
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(74, 69, 67, 0.1);
  }
  .sb-nav__links.open { display: flex; }
}
```

### Hero Section

```css
/* Scrapbook-style hero section */
.sb-hero {
  position: relative;
  padding: 5rem 2rem 4rem;
  text-align: center;
  background: var(--sb-linen);
  overflow: hidden;
}

/* Paper texture overlay */
.sb-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.sb-hero > * {
  position: relative;
  z-index: 1;
}

.sb-hero h1 {
  font-family: 'Caveat', cursive;
  font-size: clamp(3rem, 7vw, 5.5rem);
  color: var(--sb-charcoal);
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.sb-hero .subtitle {
  font-family: 'Special Elite', monospace;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--sb-rust);
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  display: inline-block;
  transform: rotate(-1deg);
}

/* Decorative washi tape strips in hero */
.sb-hero__tape-left {
  position: absolute;
  top: 30px;
  left: -20px;
  width: 160px;
  height: 28px;
  background: var(--sb-mint);
  opacity: 0.5;
  transform: rotate(-12deg);
  z-index: 0;
}

.sb-hero__tape-right {
  position: absolute;
  bottom: 40px;
  right: -15px;
  width: 140px;
  height: 28px;
  opacity: 0.5;
  transform: rotate(8deg);
  z-index: 0;
  background: repeating-linear-gradient(
    90deg,
    var(--sb-lavender),
    var(--sb-lavender) 4px,
    rgba(255, 255, 255, 0.5) 4px,
    rgba(255, 255, 255, 0.5) 8px
  );
}

/* Sticker decoration in hero */
.sb-hero__sticker {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Indie Flower', cursive;
  font-size: 0.75rem;
  color: var(--sb-charcoal);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 2;
}

.sb-hero__sticker--top {
  top: 20%;
  right: 12%;
  background: var(--sb-buttercup);
  transform: rotate(12deg);
}

.sb-hero__sticker--bottom {
  bottom: 15%;
  left: 10%;
  background: var(--sb-blush);
  transform: rotate(-8deg);
}
```

### Sticker and Embellishment Elements

```css
/* Round sticker badge */
.sb-sticker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-family: 'Indie Flower', 'Patrick Hand', cursive;
  font-size: 0.85rem;
  box-shadow:
    1px 2px 4px rgba(0, 0, 0, 0.08),
    0 0 0 2px rgba(255, 255, 255, 0.5) inset;
  transition: transform 0.2s ease;
}

.sb-sticker:hover {
  transform: scale(1.08) rotate(-2deg);
}

.sb-sticker--blush { background: var(--sb-blush); color: var(--sb-charcoal); }
.sb-sticker--sky { background: var(--sb-sky); color: var(--sb-charcoal); }
.sb-sticker--mint { background: var(--sb-mint); color: var(--sb-charcoal); }
.sb-sticker--buttercup { background: var(--sb-buttercup); color: var(--sb-charcoal); }
.sb-sticker--lavender { background: var(--sb-lavender); color: var(--sb-charcoal); }

/* Star-shaped sticker */
.sb-sticker--star {
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2% 35%, 39% 35%
  );
  width: 60px;
  height: 60px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

/* Paper clip decoration */
.sb-paperclip {
  position: absolute;
  top: -8px;
  right: 20px;
  width: 20px;
  height: 50px;
  border: 3px solid var(--sb-denim);
  border-radius: 10px 10px 0 0;
  border-bottom: none;
  transform: rotate(5deg);
  z-index: 6;
}

.sb-paperclip::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 3px;
  width: 8px;
  height: 30px;
  border: 3px solid var(--sb-denim);
  border-radius: 0 0 6px 6px;
  border-top: none;
}

/* Pushpin decoration */
.sb-pushpin {
  position: absolute;
  top: -6px;
  left: calc(50% - 8px);
  width: 16px;
  height: 16px;
  background: radial-gradient(circle at 40% 40%, #e84040, #b52020);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 6;
}

.sb-pushpin::after {
  content: '';
  position: absolute;
  top: 14px;
  left: 6px;
  width: 3px;
  height: 8px;
  background: #888;
  border-radius: 0 0 1px 1px;
}
```

### Doodle Dividers and Decorations

```css
/* Wavy hand-drawn divider */
.sb-divider-wave {
  width: 100%;
  height: 20px;
  margin: 2rem 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M0 10 Q15 3 30 10 T60 10 T90 10 T120 10 T150 10 T180 10 T200 10' fill='none' stroke='%23c4a882' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: 200px 20px;
  background-position: center;
}

/* Dashed pencil-line divider */
.sb-divider-pencil {
  width: 80%;
  max-width: 500px;
  height: 2px;
  margin: 2.5rem auto;
  border: none;
  border-top: 2px dashed var(--sb-shadow);
}

/* Heart doodle row */
.sb-divider-hearts {
  width: 100%;
  height: 24px;
  margin: 2rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--sb-rose);
  letter-spacing: 1rem;
  font-family: serif;
  line-height: 24px;
}
```

---

## Design Do's and Don'ts

### Do's

- **Do layer elements at varied depths** -- overlapping photos, paper, tape, and stickers is the essence of the scrapbook look; use z-index and subtle shadows to create physical depth
- **Do use torn and irregular edges** -- apply clip-path polygons or mask images to break clean rectangles into organic, hand-torn shapes
- **Do include handwritten typography** -- at least one handwriting or script font should appear in the design for annotations, captions, or headings
- **Do rotate elements slightly** -- tilt photos, cards, and decorations 1-5 degrees to simulate hand-placement on a page
- **Do maintain a warm, papery base** -- cream, kraft, and linen backgrounds ground the collage elements and reinforce the physical scrapbook metaphor
- **Do decorate with purpose** -- washi tape should appear to attach elements, stickers should mark categories or emotions, pins should hold photos in place
- **Do mix photographic and illustrative elements** -- combining real photos with doodles, stamps, and drawn borders creates authentic scrapbook richness
- **Do preserve readability** -- despite the decorative layering, body text should remain on clean, uncluttered surfaces with sufficient contrast

### Don'ts

- **Don't use perfectly aligned grids** -- rigid, pixel-perfect alignment undermines the handmade aesthetic; slight imperfection is essential
- **Don't over-saturate colors** -- scrapbook palettes are warm and slightly muted; neon or hyper-saturated colors feel foreign to the craft
- **Don't use corporate or geometric typography** -- clean, technical fonts like Helvetica or Roboto break the personal, handmade illusion
- **Don't flatten the composition** -- without shadows, rotations, and overlaps, the design loses its characteristic dimensional quality
- **Don't clutter every surface** -- while layering is key, the scrapbook page itself should show through; overcrowding makes the design illegible
- **Don't forget the paper metaphor** -- every element should feel like it could exist on a physical scrapbook page; floating neon gradients or glass morphism effects conflict with the aesthetic
- **Don't make decorations interactive obstacles** -- tape strips, stickers, and pins should not obscure clickable elements or interfere with usability
- **Don't neglect responsive adaptation** -- on small screens, reduce overlaps and simplify rotations so the collage remains navigable

---

## Related Aesthetics

| Aesthetic | Relationship to Scrapbook |
|-----------|--------------------------|
| **Craftcore** | Shares handmade, tactile values and visible craft techniques; Craftcore focuses on textile arts (knitting, embroidery) rather than paper collage |
| **DIY Punk** | Both celebrate handmade, imperfect visuals; DIY Punk is rawer, more political, and uses photocopied zine aesthetics rather than decorative warmth |
| **Cluttercore** | Shares maximalist layering and personal object accumulation; Cluttercore is about collected possessions while Scrapbook is about curated memory-keeping |
| **Cottagecore** | Overlaps in warmth, nostalgia, and handmade appreciation; Cottagecore emphasizes pastoral lifestyle rather than paper craft and collage |
| **Collage Art** | Direct ancestor -- fine art collage techniques (Dadaism, Surrealism) inspire Scrapbook's cut-and-paste layering, but Scrapbook is warmer and more personal |
| **Journaling / Bullet Journal** | Shares handwritten annotations, stickers, and washi tape usage; Bullet Journal is more structured and planning-oriented than memory-focused Scrapbook |
| **Grandmillennial** | Both draw on nostalgia and traditional domestic crafts; Grandmillennial leans toward chintz, florals, and interior design rather than paper collage |
| **Y2K Glam** | Early-2000s scrapbooking overlaps with Y2K aesthetics in sticker culture and embellishment; Y2K is shinier, more digital, and more pop-culture oriented |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scrapbook Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&family=Indie+Flower&family=Special+Elite&family=Nunito:wght@400;600;700&family=Quicksand:wght@500;600;700&family=Shadows+Into+Light&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       CSS Custom Properties
       ============================================ */
    :root {
      --sb-kraft: #c4a882;
      --sb-cream: #fdf8f0;
      --sb-linen: #f0e6d6;
      --sb-parchment: #e8ddc8;

      --sb-blush: #f2c4c4;
      --sb-rose: #d4919a;
      --sb-sky: #a8c8e8;
      --sb-mint: #b5cdb6;
      --sb-buttercup: #f2d06b;
      --sb-peach: #f5b895;
      --sb-lavender: #c9b8d9;

      --sb-denim: #6b8dae;
      --sb-rust: #a05a3c;
      --sb-charcoal: #4a4543;
      --sb-mauve: #b89ba8;
      --sb-shadow: #d6cec4;
    }

    /* ============================================
       Reset and Base
       ============================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--sb-charcoal);
      background-color: var(--sb-linen);
      background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    }

    a { color: var(--sb-denim); text-decoration: none; }
    a:hover { color: var(--sb-rose); }
    img { max-width: 100%; display: block; }

    /* ============================================
       Navigation
       ============================================ */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--sb-cream);
      box-shadow: 0 2px 8px rgba(74, 69, 67, 0.08);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 8px;
      background: repeating-linear-gradient(
        90deg,
        var(--sb-blush),
        var(--sb-blush) 5px,
        rgba(255, 255, 255, 0.5) 5px,
        rgba(255, 255, 255, 0.5) 10px
      );
      opacity: 0.55;
    }

    .nav__logo {
      font-family: 'Caveat', cursive;
      font-size: 1.9rem;
      font-weight: 700;
      color: var(--sb-charcoal);
      text-decoration: none;
      transform: rotate(-2deg);
      display: inline-block;
    }

    .nav__links {
      display: flex;
      gap: 0.4rem;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Patrick Hand', cursive;
      font-size: 1.05rem;
      color: var(--sb-charcoal);
      padding: 0.4rem 1rem;
      border-radius: 16px;
      transition: background 0.2s, transform 0.2s;
    }

    .nav__links a:hover {
      background: var(--sb-blush);
      transform: rotate(-1.5deg) scale(1.03);
    }

    .nav__links a.active {
      background: var(--sb-peach);
      transform: rotate(-1deg);
    }

    .nav__toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--sb-charcoal);
    }

    /* ============================================
       Hero Section
       ============================================ */
    .hero {
      position: relative;
      text-align: center;
      padding: 6rem 2rem 5rem;
      overflow: hidden;
      background: var(--sb-linen);
    }

    .hero h1 {
      font-family: 'Caveat', cursive;
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 700;
      color: var(--sb-charcoal);
      line-height: 1.1;
      margin-bottom: 0.5rem;
      position: relative;
      z-index: 2;
    }

    .hero .subtitle {
      font-family: 'Special Elite', monospace;
      font-size: clamp(1rem, 2vw, 1.3rem);
      color: var(--sb-rust);
      letter-spacing: 0.05em;
      display: inline-block;
      transform: rotate(-1.5deg);
      position: relative;
      z-index: 2;
      margin-bottom: 2rem;
    }

    .hero .cta-row {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 2;
    }

    /* Decorative tape strips in hero */
    .hero__tape-1 {
      position: absolute;
      top: 30px;
      left: -20px;
      width: 150px;
      height: 26px;
      background: var(--sb-mint);
      opacity: 0.45;
      transform: rotate(-14deg);
      z-index: 0;
    }

    .hero__tape-2 {
      position: absolute;
      bottom: 50px;
      right: -10px;
      width: 130px;
      height: 26px;
      opacity: 0.45;
      transform: rotate(10deg);
      z-index: 0;
      background: repeating-linear-gradient(
        90deg,
        var(--sb-lavender),
        var(--sb-lavender) 4px,
        rgba(255, 255, 255, 0.5) 4px,
        rgba(255, 255, 255, 0.5) 8px
      );
    }

    .hero__tape-3 {
      position: absolute;
      top: 45%;
      left: 5%;
      width: 100px;
      height: 26px;
      background: var(--sb-buttercup);
      opacity: 0.35;
      transform: rotate(20deg);
      z-index: 0;
    }

    /* Decorative sticker in hero */
    .hero__sticker {
      position: absolute;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Indie Flower', cursive;
      font-size: 0.7rem;
      color: var(--sb-charcoal);
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
      z-index: 1;
    }

    .hero__sticker--1 {
      top: 18%;
      right: 10%;
      background: var(--sb-buttercup);
      transform: rotate(15deg);
    }

    .hero__sticker--2 {
      bottom: 18%;
      left: 8%;
      background: var(--sb-blush);
      transform: rotate(-10deg);
    }

    /* ============================================
       Buttons
       ============================================ */
    .btn {
      display: inline-block;
      padding: 0.65rem 1.5rem;
      font-family: 'Patrick Hand', cursive;
      font-size: 1.05rem;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
    }

    .btn--primary {
      background: var(--sb-rose);
      color: #fff;
      box-shadow:
        2px 3px 6px rgba(212, 145, 154, 0.35),
        0 0 0 2px rgba(255, 255, 255, 0.35) inset;
    }

    .btn--primary:hover {
      color: #fff;
      transform: translateY(-2px) rotate(-1deg);
      box-shadow:
        3px 5px 12px rgba(212, 145, 154, 0.45),
        0 0 0 2px rgba(255, 255, 255, 0.5) inset;
    }

    .btn--ghost {
      background: transparent;
      color: var(--sb-charcoal);
      border: 2px dashed var(--sb-charcoal);
      border-radius: 4px;
      font-family: 'Special Elite', monospace;
      font-size: 0.95rem;
    }

    .btn--ghost:hover {
      background: rgba(74, 69, 67, 0.06);
      color: var(--sb-charcoal);
      transform: translateY(-1px);
    }

    /* ============================================
       Wavy Divider
       ============================================ */
    .divider-wave {
      width: 100%;
      height: 20px;
      margin: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M0 10 Q15 3 30 10 T60 10 T90 10 T120 10 T150 10 T180 10 T200 10' fill='none' stroke='%23c4a882' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: repeat-x;
      background-size: 200px 20px;
      background-position: center;
      background-color: var(--sb-linen);
    }

    /* ============================================
       Section Title
       ============================================ */
    .section-title {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .section-title h2 {
      font-family: 'Patrick Hand', cursive;
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      color: var(--sb-charcoal);
      margin-bottom: 0.3rem;
    }

    .section-title .underline {
      display: inline-block;
      font-family: 'Shadows Into Light', cursive;
      font-size: 1rem;
      color: var(--sb-rust);
      transform: rotate(-1deg);
    }

    /* ============================================
       Polaroid Gallery Section
       ============================================ */
    .gallery-section {
      padding: 4rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .polaroid-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 1rem;
    }

    .polaroid {
      background: #fff;
      padding: 10px 10px 44px 10px;
      box-shadow:
        2px 3px 10px rgba(74, 69, 67, 0.15),
        0 0 0 1px rgba(74, 69, 67, 0.04);
      width: 220px;
      position: relative;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .polaroid:nth-child(1) { transform: rotate(-4deg); }
    .polaroid:nth-child(2) { transform: rotate(2.5deg); }
    .polaroid:nth-child(3) { transform: rotate(-1.5deg); }
    .polaroid:nth-child(4) { transform: rotate(3deg); }

    .polaroid:hover {
      transform: rotate(0deg) scale(1.06);
      box-shadow: 4px 8px 20px rgba(74, 69, 67, 0.22);
      z-index: 10;
    }

    .polaroid img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      filter: saturate(0.85) contrast(1.05) brightness(1.02);
    }

    .polaroid .caption {
      position: absolute;
      bottom: 8px;
      left: 14px;
      right: 14px;
      font-family: 'Caveat', cursive;
      font-size: 1rem;
      color: var(--sb-rust);
      text-align: center;
    }

    /* Washi tape on polaroids */
    .polaroid .tape {
      position: absolute;
      width: 100px;
      height: 24px;
      opacity: 0.75;
      z-index: 5;
      border-radius: 1px;
    }

    .polaroid:nth-child(1) .tape {
      top: -10px;
      left: calc(50% - 50px);
      transform: rotate(-6deg);
      background: var(--sb-blush);
    }

    .polaroid:nth-child(2) .tape {
      top: -10px;
      left: calc(50% - 50px);
      transform: rotate(4deg);
      background: repeating-linear-gradient(
        90deg, var(--sb-sky), var(--sb-sky) 4px,
        rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 8px
      );
    }

    .polaroid:nth-child(3) .tape {
      top: -10px;
      left: calc(50% - 50px);
      transform: rotate(-3deg);
      background: var(--sb-mint);
    }

    .polaroid:nth-child(4) .tape {
      top: -10px;
      left: calc(50% - 50px);
      transform: rotate(7deg);
      background-color: var(--sb-buttercup);
      background-image: radial-gradient(
        circle, rgba(255,255,255,0.5) 2px, transparent 2px
      );
      background-size: 7px 7px;
    }

    /* ============================================
       Cards Section
       ============================================ */
    .cards-section {
      padding: 4rem 2rem;
      background: var(--sb-parchment);
      position: relative;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2.5rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .card {
      background: var(--sb-cream);
      border-radius: 2px;
      padding: 1.8rem 1.5rem;
      position: relative;
      box-shadow: 2px 3px 10px rgba(74, 69, 67, 0.12);
      transition: transform 0.3s, box-shadow 0.3s;
      overflow: visible;
    }

    .card:nth-child(1) { transform: rotate(-1.3deg); }
    .card:nth-child(2) { transform: rotate(0.9deg); }
    .card:nth-child(3) { transform: rotate(-0.6deg); }

    .card:hover {
      transform: rotate(0deg) translateY(-4px);
      box-shadow: 3px 6px 16px rgba(74, 69, 67, 0.18);
      z-index: 5;
    }

    /* Notebook lines inside card */
    .card--lined {
      background-image: repeating-linear-gradient(
        transparent, transparent 27px,
        rgba(164, 194, 220, 0.3) 27px,
        rgba(164, 194, 220, 0.3) 28px
      );
      background-position: 0 1.8rem;
    }

    .card .sticker-tag {
      display: inline-block;
      padding: 0.25rem 0.7rem;
      border-radius: 14px;
      font-family: 'Indie Flower', cursive;
      font-size: 0.8rem;
      margin-bottom: 0.8rem;
      box-shadow:
        1px 1px 3px rgba(0,0,0,0.06),
        0 0 0 1.5px rgba(255,255,255,0.4) inset;
    }

    .sticker-tag--blush { background: var(--sb-blush); }
    .sticker-tag--sky { background: var(--sb-sky); }
    .sticker-tag--mint { background: var(--sb-mint); }
    .sticker-tag--buttercup { background: var(--sb-buttercup); }

    .card h3 {
      font-family: 'Patrick Hand', cursive;
      font-size: 1.35rem;
      color: var(--sb-charcoal);
      margin-bottom: 0.5rem;
    }

    .card p {
      font-size: 0.95rem;
      color: var(--sb-charcoal);
      line-height: 1.7;
    }

    .card .date {
      font-family: 'Special Elite', monospace;
      font-size: 0.78rem;
      color: var(--sb-rust);
      margin-top: 1rem;
      letter-spacing: 0.04em;
    }

    /* Tape on cards */
    .card .card-tape {
      position: absolute;
      top: -11px;
      left: calc(50% - 50px);
      width: 100px;
      height: 24px;
      opacity: 0.7;
      z-index: 5;
      border-radius: 1px;
    }

    .card:nth-child(1) .card-tape {
      background: var(--sb-peach);
      transform: rotate(-5deg);
    }

    .card:nth-child(2) .card-tape {
      background: repeating-linear-gradient(
        90deg, var(--sb-lavender), var(--sb-lavender) 3px,
        rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 6px
      );
      transform: rotate(4deg);
    }

    .card:nth-child(3) .card-tape {
      background: var(--sb-mint);
      transform: rotate(-3deg);
    }

    /* ============================================
       Quote Section
       ============================================ */
    .quote-section {
      padding: 4rem 2rem;
      text-align: center;
      position: relative;
    }

    .quote-card {
      max-width: 600px;
      margin: 0 auto;
      background: var(--sb-cream);
      padding: 3rem 2.5rem;
      position: relative;
      box-shadow: 3px 4px 12px rgba(74, 69, 67, 0.12);
      transform: rotate(-1deg);
    }

    .quote-card blockquote {
      font-family: 'Shadows Into Light', cursive;
      font-size: 1.5rem;
      color: var(--sb-charcoal);
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .quote-card cite {
      font-family: 'Special Elite', monospace;
      font-size: 0.9rem;
      color: var(--sb-rust);
      font-style: normal;
    }

    /* Pushpin on quote card */
    .quote-card .pushpin {
      position: absolute;
      top: -7px;
      left: calc(50% - 9px);
      width: 18px;
      height: 18px;
      background: radial-gradient(circle at 40% 40%, #e84040, #b52020);
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 6;
    }

    /* ============================================
       Footer
       ============================================ */
    .footer {
      text-align: center;
      padding: 3rem 2rem 2rem;
      background: var(--sb-parchment);
      position: relative;
    }

    .footer::before {
      content: '';
      display: block;
      width: 100%;
      height: 8px;
      background: repeating-linear-gradient(
        90deg,
        var(--sb-mint),
        var(--sb-mint) 5px,
        rgba(255,255,255,0.5) 5px,
        rgba(255,255,255,0.5) 10px
      );
      opacity: 0.5;
      margin-bottom: 2rem;
    }

    .footer p {
      font-family: 'Caveat', cursive;
      font-size: 1.2rem;
      color: var(--sb-charcoal);
    }

    .footer .footer-links {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .footer .footer-links a {
      font-family: 'Patrick Hand', cursive;
      font-size: 1rem;
      color: var(--sb-denim);
      padding: 0.3rem 0.8rem;
      border-radius: 12px;
      transition: background 0.2s;
    }

    .footer .footer-links a:hover {
      background: var(--sb-blush);
      color: var(--sb-charcoal);
    }

    .footer .copyright {
      font-family: 'Special Elite', monospace;
      font-size: 0.78rem;
      color: var(--sb-rust);
      margin-top: 1.5rem;
      letter-spacing: 0.04em;
    }

    /* ============================================
       Responsive Adjustments
       ============================================ */
    @media (max-width: 768px) {
      .nav__toggle { display: block; }
      .nav__links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--sb-cream);
        padding: 1rem;
        box-shadow: 0 4px 12px rgba(74, 69, 67, 0.1);
      }
      .nav__links.open { display: flex; }

      .hero { padding: 4rem 1.5rem 3rem; }
      .hero__sticker--1,
      .hero__sticker--2 { display: none; }
      .hero__tape-3 { display: none; }

      .polaroid-grid {
        gap: 1.5rem;
      }

      .polaroid {
        width: 180px;
      }

      .polaroid img {
        width: 160px;
        height: 160px;
      }

      .cards-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .card:nth-child(n) {
        transform: rotate(0deg);
      }

      .card:hover {
        transform: translateY(-3px);
      }

      .quote-card {
        padding: 2rem 1.5rem;
        transform: rotate(0deg);
      }

      .quote-card blockquote {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 480px) {
      .polaroid-grid {
        flex-direction: column;
        align-items: center;
      }

      .polaroid:nth-child(n) {
        transform: rotate(0deg);
      }

      .polaroid:hover {
        transform: scale(1.03);
      }

      .hero .cta-row {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__logo">My Scrapbook</a>
    <button class="nav__toggle" aria-label="Menu" onclick="document.querySelector('.nav__links').classList.toggle('open')">
      &#9776;
    </button>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Memories</a></li>
      <li><a href="#">Photos</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__tape-1"></div>
    <div class="hero__tape-2"></div>
    <div class="hero__tape-3"></div>
    <div class="hero__sticker hero__sticker--1">NEW!</div>
    <div class="hero__sticker hero__sticker--2">&#10084;</div>
    <h1>Little Moments, Big Memories</h1>
    <p class="subtitle">a collection of favorite things</p>
    <div class="cta-row">
      <a href="#" class="btn btn--primary">Explore Pages</a>
      <a href="#" class="btn btn--ghost">View All Photos</a>
    </div>
  </section>

  <!-- Wavy Divider -->
  <div class="divider-wave"></div>

  <!-- Polaroid Gallery -->
  <section class="gallery-section">
    <div class="section-title">
      <h2>Photo Wall</h2>
      <span class="underline">-- pinned with love --</span>
    </div>
    <div class="polaroid-grid">
      <div class="polaroid">
        <div class="tape"></div>
        <img src="https://picsum.photos/seed/sb1/200/200" alt="Memory 1">
        <span class="caption">Summer road trip</span>
      </div>
      <div class="polaroid">
        <div class="tape"></div>
        <img src="https://picsum.photos/seed/sb2/200/200" alt="Memory 2">
        <span class="caption">Birthday party!</span>
      </div>
      <div class="polaroid">
        <div class="tape"></div>
        <img src="https://picsum.photos/seed/sb3/200/200" alt="Memory 3">
        <span class="caption">Lazy Sunday</span>
      </div>
      <div class="polaroid">
        <div class="tape"></div>
        <img src="https://picsum.photos/seed/sb4/200/200" alt="Memory 4">
        <span class="caption">Coffee & books</span>
      </div>
    </div>
  </section>

  <!-- Wavy Divider -->
  <div class="divider-wave"></div>

  <!-- Journal Cards -->
  <section class="cards-section">
    <div class="section-title">
      <h2>Journal Entries</h2>
      <span class="underline">-- notes to self --</span>
    </div>
    <div class="cards-grid">
      <div class="card card--lined">
        <div class="card-tape"></div>
        <span class="sticker-tag sticker-tag--blush">Travel</span>
        <h3>The Coastal Path</h3>
        <p>Walked the whole clifftop trail today. The wind was wild and the waves crashed so loud we could barely hear each other laughing. Found the prettiest shell to glue in here later.</p>
        <div class="date">March 12, 2025</div>
      </div>
      <div class="card">
        <div class="card-tape"></div>
        <span class="sticker-tag sticker-tag--buttercup">Recipe</span>
        <h3>Grandma's Lemon Cake</h3>
        <p>Finally got the recipe right. The secret is the zest of two whole lemons and a splash of buttermilk. Tastes exactly like childhood Sunday dinners.</p>
        <div class="date">February 28, 2025</div>
      </div>
      <div class="card card--lined">
        <div class="card-tape"></div>
        <span class="sticker-tag sticker-tag--mint">Thought</span>
        <h3>On Keeping Things</h3>
        <p>Sometimes the smallest things take up the most room in your heart. A ticket stub, a pressed flower, a note scribbled on a napkin. That is what scrapbooks are for.</p>
        <div class="date">January 15, 2025</div>
      </div>
    </div>
  </section>

  <!-- Quote -->
  <section class="quote-section">
    <div class="quote-card">
      <div class="pushpin"></div>
      <blockquote>"Collect moments, not things."</blockquote>
      <cite>-- handwritten on a postcard, found in a flea market</cite>
    </div>
  </section>

  <!-- Wavy Divider -->
  <div class="divider-wave"></div>

  <!-- Footer -->
  <footer class="footer">
    <p>Thanks for flipping through my pages.</p>
    <div class="footer-links">
      <a href="#">Home</a>
      <a href="#">Memories</a>
      <a href="#">Photos</a>
      <a href="#">Contact</a>
    </div>
    <p class="copyright">Made with paper, tape & love &mdash; 2025</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use `clip-path: polygon(...)` for torn edges** -- define irregular polygon coordinates to simulate the organic look of hand-torn paper; vary the coordinates between elements so no two tears look identical
- **Apply `filter: saturate(0.85) contrast(1.05)` to photos** -- slightly desaturating and boosting contrast on images gives them the warm, slightly faded look of printed photographs taped into a scrapbook
- **Layer with `position: relative` and `z-index`** -- every collage element needs a stacking context; tape and pins sit above (z-index 5-6), content in the middle (1-4), and decorative backgrounds below (0)
- **Use CSS `transform: rotate()` with small values** -- rotations between -5deg and +5deg simulate hand-placement; apply different angles to adjacent elements using `:nth-child()` selectors
- **Leverage CSS custom properties for tape colors** -- since washi tape appears frequently, defining tape colors as variables allows rapid theme changes and consistent decoration throughout the page
- **Combine `box-shadow` stacks for physical depth** -- a main shadow (2-4px offset) plus a subtle outline shadow (0 0 0 1px) on photos and cards creates the layered-paper-on-surface illusion
- **Degrade gracefully on mobile** -- reduce rotations to 0deg, flatten overlaps into vertical stacks, and hide purely decorative elements (corner stickers, extra tape strips) on narrow viewports to preserve usability
- **Keep body text on clean surfaces** -- despite the decorative layering, paragraphs and readable content should sit on uncluttered, high-contrast backgrounds; reserve the collage effects for frames, headers, and decorative sections
