# Digital Collage Design Reference

## Overview

Digital Collage is a mixed-media, scrapbook-inspired design aesthetic that translates the tactile charm of physical cut-and-paste composition into the digital realm. Rooted in the traditions of Dada photomontage, zine culture, and editorial illustration, it assembles disparate visual elements -- photographs, sticker graphics, torn paper textures, cutout figures, hand-drawn doodles, washi tape strips, and typographic fragments -- into densely layered compositions that feel simultaneously curated and spontaneous. The aesthetic thrives on contrast: analog meets digital, rough meets polished, personal meets universal.

Where minimalism strips away, Digital Collage accumulates. Every surface becomes a canvas for layering, and negative space is not empty but an opportunity to paste another fragment, scrawl another annotation, or apply another texture. The resulting compositions feel like opening someone's personal scrapbook or journal -- intimate, expressive, and full of discovered meaning. Elements retain visible edges, overlaps, and imperfections that signal the hand of a maker rather than the precision of a machine.

The style has experienced a significant resurgence in the mid-2020s, driven by a cultural desire for authenticity and human touch in response to AI-generated design proliferation. Social media platforms, particularly Pinterest, TikTok, and Instagram, have amplified the trend as creators share scrapbook-style mood boards, editorial layouts, and collage-driven branding. Fashion editorials, indie music artwork, lifestyle blogs, and creative portfolios have embraced the aesthetic for its ability to convey personality, narrative, and visual richness within a single composition.

On the web, Digital Collage translates into layouts that break rigid grids, layer elements with visible depth (shadows, tape, pins), mix photographic and illustrative content freely, and use typography as both communication and decoration. The color palette tends toward warm, slightly desaturated tones -- kraft paper browns, muted pastels, and vintage photograph hues -- punctuated by bright sticker-like accents and marker strokes. The overall mood is creative, nostalgic, playful, and deeply personal, as though every page were a handmade artifact assembled with scissors, glue, and care.

---

## Visual Characteristics

### Core Design Traits

- **Layered compositions** -- multiple visual elements stacked with visible overlap, creating depth through z-index layering, drop shadows, and partial occlusion
- **Torn paper textures** -- ragged, irregular edges on images, text blocks, and decorative elements that simulate physically ripped paper
- **Cutout photography** -- subjects isolated from their backgrounds with imperfect, hand-cut edges rather than clean digital masking
- **Sticker and badge graphics** -- playful decorative elements with white borders, slight shadows, and a "peeled-and-stuck" appearance
- **Washi tape and adhesive strips** -- translucent, patterned tape elements used as connectors, borders, and decorative accents
- **Hand-drawn doodles and annotations** -- sketchy lines, arrows, stars, hearts, underlines, and margin scrawls that add a personal, journal-like quality
- **Mixed media integration** -- photographs, illustrations, geometric shapes, typed text, and handwritten notes coexisting in a single layout
- **Visible pinning and attachment** -- push pins, paper clips, binder clips, and staples rendered as functional-decorative elements holding the composition together
- **Texture-rich surfaces** -- kraft paper, lined notebook paper, graph paper, cardboard, and canvas backgrounds providing tactile warmth
- **Ephemera and found objects** -- postage stamps, ticket stubs, receipts, pressed flowers, and postcards used as decorative fragments
- **Uneven alignment and rotation** -- elements tilted at slight angles (1-5 degrees) as though placed by hand rather than snapped to a grid

### Design Principles

- **Intentional imperfection** -- embrace rough edges, uneven spacing, and visible construction; perfection reads as sterile
- **Narrative layering** -- each composition should tell a story through the accumulation and juxtaposition of its fragments
- **Tactile warmth** -- the design must feel like something you could touch; textures, shadows, and physical metaphors create this illusion
- **Curated chaos** -- the layout appears organic and spontaneous but is carefully composed to guide the eye through a visual journey
- **Personal expression** -- the aesthetic values uniqueness and individuality; no two collage layouts should feel identical
- **Analog nostalgia** -- reference physical craft materials and techniques to evoke the warmth of handmade objects
- **Contrast and juxtaposition** -- combine disparate elements (old and new, rough and smooth, photographic and illustrative) to create visual interest
- **Depth through shadow** -- use realistic shadows, overlaps, and layering to create a convincing sense of physical depth on a flat screen

---

## Color Palette

The Digital Collage palette draws from the natural tones of craft materials -- kraft paper, canvas, cardboard, aged photographs -- accented by the bright, saturated hues of stickers, markers, washi tape, and decorative ephemera. The base palette is warm and earthy, while accents are cheerful and playful.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Kraft Paper | `#C4A882` | Primary background surface, base layer texture |
| Warm Cream | `#F5EDE0` | Secondary background, card surfaces, light areas |
| Notebook White | `#FAFAF5` | Clean paper areas, text blocks, content backgrounds |
| Cardboard Brown | `#8B7355` | Borders, frames, grounding elements, dividers |
| Aged Photo Sepia | `#A08060` | Vintage photo tint, nostalgic overlays, warm accents |
| Ink Black | `#2B2B2B` | Primary text, outlines, strong borders |
| Pencil Gray | `#7A7A7A` | Secondary text, sketchy annotations, subtle lines |
| Sticker Pink | `#E8668A` | Playful accent, sticker highlights, badges |
| Marker Coral | `#E87461` | Warm accent, underlines, hand-drawn emphasis |
| Washi Mint | `#7EC8A8` | Cool accent, tape strips, decorative elements |
| Doodle Blue | `#5B8DB8` | Ink doodles, annotations, link color |
| Stamp Purple | `#8B6DAF` | Feature accents, decorative stamps, tags |
| Highlighter Yellow | `#F2D166` | Bright emphasis, callouts, badge fills |
| Postcard Teal | `#4A9E9E` | Cool pop accent, interactive hover states |
| Tape Peach | `#F0C4A8` | Washi tape base, soft warm decorative elements |

### CSS Custom Properties

```css
:root {
  /* Base tones */
  --collage-kraft: #C4A882;
  --collage-cream: #F5EDE0;
  --collage-white: #FAFAF5;
  --collage-cardboard: #8B7355;
  --collage-sepia: #A08060;

  /* Neutrals */
  --collage-ink: #2B2B2B;
  --collage-pencil: #7A7A7A;

  /* Playful accents */
  --collage-pink: #E8668A;
  --collage-coral: #E87461;
  --collage-mint: #7EC8A8;
  --collage-blue: #5B8DB8;
  --collage-purple: #8B6DAF;
  --collage-yellow: #F2D166;
  --collage-teal: #4A9E9E;
  --collage-peach: #F0C4A8;

  /* Functional mappings */
  --collage-bg-primary: var(--collage-cream);
  --collage-bg-surface: var(--collage-white);
  --collage-text-primary: var(--collage-ink);
  --collage-text-secondary: var(--collage-pencil);
  --collage-accent: var(--collage-pink);
  --collage-link: var(--collage-blue);
  --collage-border: var(--collage-cardboard);
}
```

---

## Typography

Digital Collage typography mixes formal and informal type -- combining clean serif or sans-serif fonts for readable body text with handwritten, marker-style, or typewriter fonts for headlines, annotations, and decorative text. The key is variety within a cohesive warmth, as though different writing tools were used on the same scrapbook page.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Caveat** | 400, 500, 600, 700 | Handwritten headlines, annotations, personal notes | [Caveat](https://fonts.google.com/specimen/Caveat) |
| **Patrick Hand** | 400 | Casual handwriting for labels, captions, doodle text | [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand) |
| **Lora** | 400, 500, 600, 700 | Elegant serif body text, editorial content | [Lora](https://fonts.google.com/specimen/Lora) |
| **Nunito** | 300, 400, 600, 700 | Clean sans-serif body text, UI elements | [Nunito](https://fonts.google.com/specimen/Nunito) |
| **Permanent Marker** | 400 | Bold marker headlines, emphasis text, loud callouts | [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker) |
| **Special Elite** | 400 | Typewriter text, vintage labels, caption blocks | [Special Elite](https://fonts.google.com/specimen/Special+Elite) |
| **Shadows Into Light** | 400 | Whimsical handwriting for decorative text, quotes | [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light) |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Caveat 700 | Lora 400 | Personal journal, editorial scrapbook |
| Permanent Marker 400 | Nunito 400 | Bold and playful, creative portfolio |
| Patrick Hand 400 | Lora 400 | Casual warmth, lifestyle blog |
| Caveat 600 | Nunito 300 | Light and airy, mood board aesthetic |
| Special Elite 400 | Lora 400 | Vintage editorial, retro scrapbook |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Patrick+Hand&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Nunito:wght@300;400;600;700&family=Permanent+Marker&family=Special+Elite&family=Shadows+Into+Light&display=swap');

body {
  font-family: 'Lora', 'Georgia', serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--collage-ink);
}

h1, h2 {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  line-height: 1.15;
  color: var(--collage-ink);
}

h3, h4 {
  font-family: 'Patrick Hand', cursive;
  font-weight: 400;
  line-height: 1.3;
  color: var(--collage-cardboard);
}

/* Marker-style emphasis */
.collage-marker {
  font-family: 'Permanent Marker', cursive;
  display: inline-block;
  transform: rotate(-1deg);
}

/* Typewriter caption */
.collage-caption {
  font-family: 'Special Elite', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  color: var(--collage-pencil);
}

/* Handwritten annotation */
.collage-note {
  font-family: 'Shadows Into Light', cursive;
  font-size: 0.9rem;
  color: var(--collage-blue);
  transform: rotate(-2deg);
  display: inline-block;
}
```

---

## Layout Principles

- **Broken grid composition** -- elements overlap, extend beyond containers, and break out of rigid column structures to simulate the freedom of physical collage
- **Layered depth** -- use box-shadows, slight rotations, and overlapping z-index to create the illusion that paper fragments sit on top of one another
- **Asymmetric balance** -- avoid perfect symmetry; distribute visual weight unevenly across the layout so it feels hand-arranged rather than computed
- **Rotated elements** -- tilt cards, images, and text blocks by small angles (1-4 degrees) to evoke the imprecision of physical placement
- **Mixed content zones** -- combine full-bleed images, framed photographs, text blocks, sticker clusters, and drawn elements within a single viewport
- **Visible attachment metaphors** -- use washi tape, push pins, paper clips, and staple graphics as connective elements between sections
- **Texture-driven backgrounds** -- layer kraft paper, canvas, lined notebook, or corkboard textures beneath content to establish the scrapbook surface
- **Responsive collapsing** -- on smaller screens, the layered collage compresses into a single-column flow but retains slight rotations, shadows, and torn-edge treatments to preserve the handmade feel
- **Generous but uneven spacing** -- padding and margins vary between elements rather than following a strict spacing scale, simulating organic placement
- **Edge bleeding** -- allow certain elements (tape strips, doodles, sticker edges) to extend to or beyond the viewport boundary, implying the collage continues off-screen
- **Focal clustering** -- group related elements in tight, overlapping clusters with breathing room between clusters, mimicking how a scrapbook page organizes themes

---

## CSS / Design Techniques

### Collage Card

```css
.collage-card {
  background: var(--collage-white);
  border: none;
  padding: 1.5rem;
  max-width: 420px;
  position: relative;
  transform: rotate(calc(var(--tilt, -1.5) * 1deg));
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.collage-card:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Torn top edge */
.collage-card::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--collage-white);
  clip-path: polygon(
    0% 100%, 3% 40%, 6% 80%, 9% 20%, 12% 70%, 15% 30%,
    18% 85%, 21% 15%, 24% 60%, 27% 35%, 30% 90%, 33% 25%,
    36% 70%, 39% 45%, 42% 80%, 45% 10%, 48% 55%, 51% 30%,
    54% 75%, 57% 20%, 60% 65%, 63% 40%, 66% 85%, 69% 15%,
    72% 60%, 75% 35%, 78% 80%, 81% 25%, 84% 70%, 87% 45%,
    90% 90%, 93% 20%, 96% 55%, 100% 40%, 100% 100%
  );
}

/* Washi tape strip */
.collage-card::after {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(var(--tape-tilt, 2deg));
  width: 80px;
  height: 24px;
  background: var(--collage-peach);
  opacity: 0.7;
  border-left: 1px dashed rgba(0, 0, 0, 0.08);
  border-right: 1px dashed rgba(0, 0, 0, 0.08);
}
```

### Collage Button

```css
.collage-button {
  display: inline-block;
  padding: 0.65rem 1.6rem;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.1rem;
  color: var(--collage-ink);
  background: var(--collage-yellow);
  border: 2px solid var(--collage-cardboard);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.collage-button:hover {
  transform: rotate(1deg) translateY(-2px);
  box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.15);
  background: var(--collage-coral);
  color: var(--collage-white);
}

.collage-button:active {
  transform: rotate(0deg) translateY(0);
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* Sticker variant */
.collage-button--sticker {
  background: var(--collage-pink);
  color: var(--collage-white);
  border: 3px solid var(--collage-white);
  border-radius: 20px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: rotate(2deg);
}

.collage-button--sticker:hover {
  transform: rotate(-1deg) scale(1.05);
  background: var(--collage-purple);
}
```

### Collage Navigation

```css
.collage-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 1rem 1.5rem;
  background:
    linear-gradient(to bottom, var(--collage-cream) 0%, var(--collage-kraft) 100%);
  border-bottom: 3px solid var(--collage-cardboard);
  position: relative;
}

.collage-nav a {
  font-family: 'Patrick Hand', cursive;
  font-size: 1rem;
  color: var(--collage-ink);
  text-decoration: none;
  padding: 0.35rem 0.9rem;
  background: var(--collage-white);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.collage-nav a:nth-child(1) { transform: rotate(-1.5deg); }
.collage-nav a:nth-child(2) { transform: rotate(1deg); }
.collage-nav a:nth-child(3) { transform: rotate(-0.5deg); }
.collage-nav a:nth-child(4) { transform: rotate(2deg); }
.collage-nav a:nth-child(5) { transform: rotate(-1deg); }

.collage-nav a:hover {
  transform: rotate(0deg) translateY(-3px);
  box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: var(--collage-yellow);
}

/* Decorative tape strip on nav */
.collage-nav::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 10%;
  width: 60px;
  height: 20px;
  background: var(--collage-mint);
  opacity: 0.5;
  transform: rotate(-3deg);
}
```

### Collage Hero Section

```css
.collage-hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  background:
    /* Kraft paper texture simulation */
    radial-gradient(circle at 20% 30%, rgba(196, 168, 130, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(196, 168, 130, 0.1) 0%, transparent 40%),
    var(--collage-cream);
}

.collage-hero h1 {
  font-family: 'Caveat', cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: var(--collage-ink);
  text-align: center;
  position: relative;
  z-index: 2;
  line-height: 1.1;
}

/* Decorative doodle circle behind heading */
.collage-hero h1::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -30px;
  right: -30px;
  bottom: -15px;
  border: 3px dashed var(--collage-coral);
  border-radius: 50%;
  transform: rotate(-3deg);
  opacity: 0.4;
  z-index: -1;
}

/* Scattered decorative sticker */
.collage-hero .sticker {
  position: absolute;
  width: 80px;
  height: 80px;
  background: var(--collage-pink);
  border: 3px solid var(--collage-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 0.75rem;
  color: var(--collage-white);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  z-index: 3;
}

/* Scattered torn paper fragment */
.collage-hero .fragment {
  position: absolute;
  background: var(--collage-white);
  padding: 0.5rem 1rem;
  font-family: 'Special Elite', monospace;
  font-size: 0.7rem;
  color: var(--collage-pencil);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
  pointer-events: none;
}
```

### Torn Paper Divider

```css
.collage-torn-divider {
  border: none;
  height: 16px;
  position: relative;
  margin: 2rem 0;
  overflow: visible;
}

/* Upper torn edge */
.collage-torn-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--collage-kraft);
  clip-path: polygon(
    0% 0%, 2% 70%, 5% 20%, 8% 80%, 11% 30%, 14% 65%,
    17% 10%, 20% 50%, 23% 85%, 26% 35%, 29% 75%, 32% 15%,
    35% 60%, 38% 25%, 41% 70%, 44% 40%, 47% 90%, 50% 20%,
    53% 55%, 56% 5%, 59% 45%, 62% 80%, 65% 30%, 68% 65%,
    71% 10%, 74% 50%, 77% 85%, 80% 35%, 83% 70%, 86% 20%,
    89% 60%, 92% 40%, 95% 80%, 98% 25%, 100% 55%,
    100% 0%
  );
}

/* Lower torn edge */
.collage-torn-divider::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--collage-kraft);
  clip-path: polygon(
    0% 100%, 3% 30%, 6% 70%, 9% 15%, 12% 55%, 15% 80%,
    18% 25%, 21% 65%, 24% 10%, 27% 50%, 30% 75%, 33% 35%,
    36% 85%, 39% 20%, 42% 60%, 45% 5%, 48% 45%, 51% 90%,
    54% 30%, 57% 70%, 60% 15%, 63% 55%, 66% 80%, 69% 25%,
    72% 65%, 75% 10%, 78% 50%, 81% 75%, 84% 35%, 87% 85%,
    90% 20%, 93% 60%, 96% 40%, 100% 70%,
    100% 100%
  );
}
```

### Washi Tape Effect

```css
.collage-tape {
  position: relative;
  display: inline-block;
}

/* Semi-transparent tape strip */
.collage-tape::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(var(--tape-angle, 2deg));
  width: var(--tape-width, 80px);
  height: 22px;
  opacity: 0.55;
  border-left: 1px dashed rgba(0, 0, 0, 0.05);
  border-right: 1px dashed rgba(0, 0, 0, 0.05);
  pointer-events: none;
}

/* Color variants */
.collage-tape--mint::before { background: var(--collage-mint); }
.collage-tape--peach::before { background: var(--collage-peach); }
.collage-tape--yellow::before { background: var(--collage-yellow); }
.collage-tape--pink::before { background: var(--collage-pink); opacity: 0.4; }

/* Patterned tape with dots */
.collage-tape--dotted::before {
  background:
    radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px),
    var(--collage-mint);
  background-size: 8px 8px;
}

/* Patterned tape with stripes */
.collage-tape--striped::before {
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(255,255,255,0.3) 3px,
      rgba(255,255,255,0.3) 6px
    ),
    var(--collage-peach);
}
```

### Sticker Element

```css
.collage-sticker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  font-family: 'Patrick Hand', cursive;
  font-size: 0.9rem;
  color: var(--collage-white);
  background: var(--collage-pink);
  border: 3px solid var(--collage-white);
  border-radius: 20px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: rotate(var(--sticker-tilt, -2deg));
  cursor: default;
}

/* Color variants */
.collage-sticker--mint {
  background: var(--collage-mint);
  color: var(--collage-ink);
}

.collage-sticker--yellow {
  background: var(--collage-yellow);
  color: var(--collage-ink);
}

.collage-sticker--purple {
  background: var(--collage-purple);
}

/* Star-shaped sticker */
.collage-sticker--star {
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 0;
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2% 35%, 39% 35%
  );
  border: none;
}
```

### Cutout Photo Effect

```css
.collage-cutout {
  position: relative;
  display: inline-block;
  transform: rotate(var(--cut-tilt, -2deg));
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.15);
}

.collage-cutout img {
  display: block;
  width: 100%;
  height: auto;
}

/* Rough cut edge simulation */
.collage-cutout::after {
  content: '';
  position: absolute;
  inset: -2px;
  border: 3px solid var(--collage-white);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}

/* Polaroid-style photo variant */
.collage-cutout--polaroid {
  background: var(--collage-white);
  padding: 10px 10px 40px 10px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.04);
}

.collage-cutout--polaroid::after {
  display: none;
}

/* Handwritten caption under polaroid */
.collage-cutout--polaroid .caption {
  font-family: 'Shadows Into Light', cursive;
  font-size: 0.85rem;
  color: var(--collage-pencil);
  text-align: center;
  margin-top: 8px;
}
```

---

## Design Do's and Don'ts

### Do's

- Layer elements with visible depth using shadows, overlaps, and slight rotations to create the illusion of physical paper on a surface
- Mix media types freely -- combine photographs, illustrations, hand-drawn elements, typed text, and decorative ephemera in a single composition
- Use torn paper edges, washi tape, and push pin graphics to reinforce the handmade scrapbook metaphor
- Embrace slight imperfections in alignment and spacing; hand-placed elements should not snap to a perfect grid
- Restrict your core palette to warm, craft-material tones and use bright sticker-like accents sparingly for emphasis
- Apply different typographic voices for different purposes -- handwritten for annotations, serif for body text, marker for bold callouts
- Create a consistent sense of surface by using textured backgrounds (kraft paper, canvas, notebook paper) throughout the design
- Leave some visual "breathing room" between collage clusters so the composition does not become overwhelming

### Don'ts

- Use clinical, flat, perfectly aligned layouts with no texture or depth; the design should never feel machine-generated or sterile
- Overdo the layering to the point where content becomes unreadable or the page feels cluttered without purpose
- Mix too many bright accent colors at once; the palette should be predominantly warm and earthy with selective pops of color
- Use sharp, perfectly masked cutouts on photos; edges should feel hand-cut, slightly rough, or have visible white borders
- Apply overly polished effects like smooth gradients, glass reflections, or metallic sheens that break the analog craft feeling
- Neglect accessibility -- even within a layered, rotated composition, text must remain readable and interactive elements must be clearly identifiable
- Use the same rotation angle on all elements; vary the tilt so each piece feels individually placed
- Forget to optimize -- layered shadows, textures, and decorative elements can impact performance if not managed carefully with appropriate image compression and CSS efficiency

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Dadaism** | Historical ancestor; Dada's photomontage and cut-and-paste collage techniques are the conceptual foundation of Digital Collage, though Dada is more chaotic and anti-art while Digital Collage is warmer and more curated |
| **DIY Punk** | Shares the handmade, cut-and-paste construction method, but Punk is aggressive and anti-establishment while Digital Collage is personal and nostalgic |
| **Scrapbook / Junk Journal** | The most direct relative in physical craft; Digital Collage is essentially scrapbooking translated to the screen, retaining the layered ephemera and personal narrative |
| **Cluttercore** | Shares the maximalist layering and densely curated aesthetic, though Cluttercore applies to physical spaces while Digital Collage applies to two-dimensional compositions |
| **Cottagecore** | Overlaps in warmth, nostalgia, and handmade quality; Cottagecore's natural, pastoral imagery often appears as content within Digital Collage layouts |
| **Gen Z Maximalism** | Both embrace visual abundance and layering, but Gen Z Maximalism uses saturated neon colors and digital effects while Digital Collage leans toward warm, analog textures |
| **Zine Culture** | Shares the DIY production aesthetic and mixed-media approach; zines are collage's printed sibling, emphasizing photocopied, hand-assembled publications |
| **Wabi-Sabi** | Both value imperfection and the beauty of the handmade; Wabi-Sabi's acceptance of wear and irregularity aligns with Digital Collage's embrace of rough edges and visible construction |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Collage Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Patrick+Hand&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@300;400;600;700&family=Permanent+Marker&family=Special+Elite&family=Shadows+Into+Light&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      /* Base tones */
      --collage-kraft: #C4A882;
      --collage-cream: #F5EDE0;
      --collage-white: #FAFAF5;
      --collage-cardboard: #8B7355;
      --collage-sepia: #A08060;

      /* Neutrals */
      --collage-ink: #2B2B2B;
      --collage-pencil: #7A7A7A;

      /* Playful accents */
      --collage-pink: #E8668A;
      --collage-coral: #E87461;
      --collage-mint: #7EC8A8;
      --collage-blue: #5B8DB8;
      --collage-purple: #8B6DAF;
      --collage-yellow: #F2D166;
      --collage-teal: #4A9E9E;
      --collage-peach: #F0C4A8;
    }

    body {
      font-family: 'Lora', Georgia, serif;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--collage-ink);
      background: var(--collage-cream);
      overflow-x: hidden;
      position: relative;
    }

    /* Subtle paper grain overlay */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      mix-blend-mode: multiply;
      z-index: 9999;
    }

    /* ===== NAVIGATION ===== */

    .nav {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 1rem 2rem;
      background:
        linear-gradient(to bottom, var(--collage-cream), rgba(196, 168, 130, 0.15));
      border-bottom: 3px solid var(--collage-cardboard);
      position: relative;
    }

    .nav .logo {
      font-family: 'Caveat', cursive;
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--collage-ink);
      margin-right: auto;
      transform: rotate(-1deg);
    }

    .nav a {
      font-family: 'Patrick Hand', cursive;
      font-size: 1rem;
      color: var(--collage-ink);
      text-decoration: none;
      padding: 0.3rem 0.8rem;
      background: var(--collage-white);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .nav a:nth-child(2) { transform: rotate(-1deg); }
    .nav a:nth-child(3) { transform: rotate(1.5deg); }
    .nav a:nth-child(4) { transform: rotate(-0.5deg); }
    .nav a:nth-child(5) { transform: rotate(2deg); }

    .nav a:hover {
      transform: rotate(0deg) translateY(-2px);
      box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.08);
      background: var(--collage-yellow);
    }

    /* Decorative tape on nav */
    .nav::after {
      content: '';
      position: absolute;
      bottom: -5px;
      right: 15%;
      width: 55px;
      height: 18px;
      background: var(--collage-mint);
      opacity: 0.45;
      transform: rotate(-4deg);
      pointer-events: none;
    }

    /* ===== HERO SECTION ===== */

    .hero {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;
      background:
        radial-gradient(ellipse at 25% 35%, rgba(196, 168, 130, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 65%, rgba(240, 196, 168, 0.1) 0%, transparent 40%),
        var(--collage-cream);
    }

    .hero h1 {
      font-family: 'Caveat', cursive;
      font-size: clamp(3rem, 9vw, 6.5rem);
      font-weight: 700;
      color: var(--collage-ink);
      text-align: center;
      line-height: 1.05;
      position: relative;
      z-index: 2;
    }

    /* Doodle circle around heading */
    .hero h1::before {
      content: '';
      position: absolute;
      top: -15px;
      left: -25px;
      right: -25px;
      bottom: -10px;
      border: 3px dashed var(--collage-coral);
      border-radius: 50%;
      transform: rotate(-2deg);
      opacity: 0.35;
      z-index: -1;
    }

    .hero .subtitle {
      font-family: 'Special Elite', monospace;
      font-size: 1rem;
      color: var(--collage-pencil);
      margin-top: 1rem;
      transform: rotate(1deg);
      display: inline-block;
      letter-spacing: 0.04em;
    }

    .hero .hero-btn {
      margin-top: 2rem;
      display: inline-block;
      padding: 0.7rem 2rem;
      font-family: 'Patrick Hand', cursive;
      font-size: 1.15rem;
      color: var(--collage-white);
      background: var(--collage-pink);
      border: 3px solid var(--collage-white);
      border-radius: 24px;
      text-decoration: none;
      box-shadow:
        0 3px 8px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transform: rotate(-1deg);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      z-index: 2;
    }

    .hero .hero-btn:hover {
      transform: rotate(1deg) translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    /* Scattered decorative sticker in hero */
    .hero .sticker {
      position: absolute;
      width: 70px;
      height: 70px;
      background: var(--collage-yellow);
      border: 3px solid var(--collage-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Permanent Marker', cursive;
      font-size: 0.65rem;
      color: var(--collage-ink);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }

    .hero .sticker--top-right {
      top: 12%;
      right: 10%;
      transform: rotate(12deg);
    }

    .hero .sticker--bottom-left {
      bottom: 15%;
      left: 8%;
      transform: rotate(-8deg);
      background: var(--collage-mint);
    }

    /* Scattered torn paper fragment */
    .hero .fragment {
      position: absolute;
      background: var(--collage-white);
      padding: 0.4rem 0.8rem;
      font-family: 'Special Elite', monospace;
      font-size: 0.65rem;
      color: var(--collage-pencil);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.06);
      z-index: 1;
    }

    .hero .fragment--1 {
      top: 20%;
      left: 5%;
      transform: rotate(-5deg);
    }

    .hero .fragment--2 {
      bottom: 25%;
      right: 6%;
      transform: rotate(3deg);
    }

    /* ===== TORN DIVIDER ===== */

    .torn-divider {
      border: none;
      height: 14px;
      position: relative;
      margin: 0;
      overflow: visible;
    }

    .torn-divider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 14px;
      background: var(--collage-kraft);
      clip-path: polygon(
        0% 0%, 2% 65%, 5% 25%, 8% 75%, 11% 15%, 14% 55%,
        17% 85%, 20% 30%, 23% 70%, 26% 10%, 29% 50%, 32% 80%,
        35% 20%, 38% 65%, 41% 35%, 44% 90%, 47% 25%, 50% 60%,
        53% 5%, 56% 45%, 59% 75%, 62% 30%, 65% 85%, 68% 20%,
        71% 55%, 74% 10%, 77% 40%, 80% 70%, 83% 25%, 86% 80%,
        89% 45%, 92% 15%, 95% 60%, 98% 35%, 100% 70%,
        100% 0%
      );
    }

    /* ===== MAIN CONTENT ===== */

    .content {
      max-width: 900px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .section-title {
      font-family: 'Caveat', cursive;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      color: var(--collage-ink);
      margin-bottom: 1.5rem;
      transform: rotate(-1deg);
      display: inline-block;
      position: relative;
    }

    /* Marker underline on section title */
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: -4px;
      right: -4px;
      height: 8px;
      background: var(--collage-yellow);
      opacity: 0.5;
      transform: rotate(0.5deg);
      z-index: -1;
      border-radius: 2px;
    }

    .subsection-title {
      font-family: 'Patrick Hand', cursive;
      font-size: 1.3rem;
      color: var(--collage-cardboard);
      margin: 2rem 0 0.75rem;
      transform: rotate(0.5deg);
      display: inline-block;
    }

    p {
      margin-bottom: 1rem;
      max-width: 65ch;
    }

    /* ===== COLLAGE CARD GRID ===== */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }

    .card {
      background: var(--collage-white);
      padding: 1.5rem;
      position: relative;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.06),
        0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:nth-child(1) { transform: rotate(-1.5deg); }
    .card:nth-child(2) { transform: rotate(1deg); }
    .card:nth-child(3) { transform: rotate(-0.5deg); }

    .card:hover {
      transform: rotate(0deg) translateY(-5px);
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.08),
        0 10px 28px rgba(0, 0, 0, 0.1);
    }

    /* Washi tape on card */
    .card::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%) rotate(2deg);
      width: 70px;
      height: 20px;
      opacity: 0.55;
    }

    .card:nth-child(1)::before { background: var(--collage-peach); }
    .card:nth-child(2)::before { background: var(--collage-mint); }
    .card:nth-child(3)::before { background: var(--collage-yellow); transform: translateX(-50%) rotate(-3deg); }

    .card .card-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      display: block;
      margin-bottom: 1rem;
      border: 2px solid var(--collage-white);
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
    }

    .card h3 {
      font-family: 'Patrick Hand', cursive;
      font-size: 1.2rem;
      color: var(--collage-ink);
      margin-bottom: 0.5rem;
    }

    .card p {
      font-size: 0.9rem;
      color: var(--collage-pencil);
      line-height: 1.6;
    }

    /* Sticker tag on card */
    .card .tag {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      font-family: 'Patrick Hand', cursive;
      font-size: 0.75rem;
      color: var(--collage-white);
      background: var(--collage-pink);
      border-radius: 12px;
      margin-top: 0.75rem;
      transform: rotate(-1deg);
    }

    /* ===== ANNOTATION / NOTE ===== */

    .annotation {
      font-family: 'Shadows Into Light', cursive;
      font-size: 0.85rem;
      color: var(--collage-blue);
      transform: rotate(-2deg);
      display: inline-block;
      margin-left: 0.5rem;
    }

    /* Marker highlight */
    .highlight {
      background: linear-gradient(transparent 55%, var(--collage-yellow) 55%);
      padding: 0 0.15em;
    }

    /* Handwritten note box */
    .note-box {
      background: var(--collage-white);
      border-left: 4px solid var(--collage-coral);
      padding: 1rem 1.25rem;
      margin: 1.5rem 0;
      transform: rotate(0.5deg);
      font-family: 'Caveat', cursive;
      font-size: 1.1rem;
      line-height: 1.6;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
      position: relative;
    }

    .note-box::before {
      content: '';
      position: absolute;
      top: -6px;
      right: 20%;
      width: 50px;
      height: 18px;
      background: var(--collage-peach);
      opacity: 0.5;
      transform: rotate(5deg);
    }

    /* ===== BUTTON STYLES ===== */

    .btn {
      display: inline-block;
      padding: 0.6rem 1.5rem;
      font-family: 'Patrick Hand', cursive;
      font-size: 1.05rem;
      color: var(--collage-ink);
      background: var(--collage-yellow);
      border: 2px solid var(--collage-cardboard);
      border-radius: 2px;
      text-decoration: none;
      cursor: pointer;
      transform: rotate(-1deg);
      box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn:hover {
      transform: rotate(1deg) translateY(-2px);
      box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.12);
      background: var(--collage-coral);
      color: var(--collage-white);
    }

    .btn--sticker {
      background: var(--collage-pink);
      color: var(--collage-white);
      border: 3px solid var(--collage-white);
      border-radius: 20px;
      box-shadow:
        0 2px 5px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
      transform: rotate(2deg);
    }

    .btn--sticker:hover {
      transform: rotate(-1deg) scale(1.05);
      background: var(--collage-purple);
    }

    /* ===== POLAROID PHOTO ===== */

    .polaroid {
      display: inline-block;
      background: var(--collage-white);
      padding: 10px 10px 36px 10px;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(0, 0, 0, 0.03);
      transform: rotate(var(--photo-tilt, -3deg));
      transition: transform 0.3s ease;
    }

    .polaroid:hover {
      transform: rotate(0deg) scale(1.02);
    }

    .polaroid img {
      display: block;
      width: 100%;
      height: auto;
    }

    .polaroid .caption {
      font-family: 'Shadows Into Light', cursive;
      font-size: 0.85rem;
      color: var(--collage-pencil);
      text-align: center;
      margin-top: 8px;
    }

    /* ===== FOOTER ===== */

    .footer {
      padding: 2rem;
      text-align: center;
      border-top: 3px solid var(--collage-cardboard);
      background:
        linear-gradient(to top, rgba(196, 168, 130, 0.12), transparent);
    }

    .footer p {
      font-family: 'Special Elite', monospace;
      font-size: 0.85rem;
      color: var(--collage-pencil);
      max-width: 100%;
    }

    .footer .doodle-heart {
      font-family: 'Caveat', cursive;
      font-size: 1.2rem;
      color: var(--collage-coral);
      display: inline-block;
      transform: rotate(-5deg);
    }

    /* ===== RESPONSIVE ===== */

    @media (max-width: 768px) {
      .hero {
        min-height: 60vh;
        padding: 3rem 1.5rem;
      }

      .hero .sticker,
      .hero .fragment {
        display: none;
      }

      .content {
        padding: 2rem 1.25rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .card:nth-child(1),
      .card:nth-child(2),
      .card:nth-child(3) {
        transform: rotate(calc(var(--tilt, -1) * 0.5deg));
      }

      .nav {
        padding: 0.75rem 1rem;
        gap: 6px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <span class="logo">My Collage</span>
    <a href="#">Home</a>
    <a href="#">Gallery</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="sticker sticker--top-right">NEW!</div>
    <div class="sticker sticker--bottom-left">HELLO</div>
    <div class="fragment fragment--1">collect moments, not things</div>
    <div class="fragment fragment--2">est. 2025</div>
    <h1>Cut, Paste,<br>Create</h1>
    <span class="subtitle">a mixed-media scrapbook experience</span>
    <a href="#content" class="hero-btn">Explore the Collage</a>
  </section>

  <hr class="torn-divider">

  <!-- Main Content -->
  <main class="content" id="content">
    <h2 class="section-title">Latest Pieces</h2>
    <p>
      Welcome to a world of layered textures, torn edges, and
      <span class="highlight">handmade charm</span>. Each piece is
      assembled from fragments of memory and imagination.
      <span class="annotation">&larr; start here!</span>
    </p>

    <!-- Card Grid -->
    <div class="card-grid">
      <div class="card">
        <div style="width:100%;height:180px;background:linear-gradient(135deg, var(--collage-peach), var(--collage-coral));border-radius:2px;margin-bottom:1rem;"></div>
        <h3>Summer Fragments</h3>
        <p>Sun-bleached photos layered with pressed wildflowers and handwritten postcards.</p>
        <span class="tag">Seasonal</span>
      </div>
      <div class="card">
        <div style="width:100%;height:180px;background:linear-gradient(135deg, var(--collage-mint), var(--collage-teal));border-radius:2px;margin-bottom:1rem;"></div>
        <h3>Urban Mosaic</h3>
        <p>City textures, ticket stubs, and magazine cutouts arranged into a metropolitan narrative.</p>
        <span class="tag">Urban</span>
      </div>
      <div class="card">
        <div style="width:100%;height:180px;background:linear-gradient(135deg, var(--collage-purple), var(--collage-pink));border-radius:2px;margin-bottom:1rem;"></div>
        <h3>Dream Journal</h3>
        <p>Surreal photo cutouts floating on notebook paper with scattered ink doodles.</p>
        <span class="tag">Abstract</span>
      </div>
    </div>

    <h3 class="subsection-title">A Note from the Maker</h3>

    <div class="note-box">
      Every collage begins with a single scrap of paper and a feeling.
      Layer by layer, something new emerges from the fragments --
      something that could never exist on its own.
    </div>

    <p>
      The beauty of collage is in the <span class="highlight">unexpected combinations</span>.
      A vintage photograph meets a modern illustration. Torn paper reveals
      hidden text beneath. Each layer adds meaning to the one below.
    </p>

    <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:2rem 0;">
      <a href="#" class="btn">Learn More</a>
      <a href="#" class="btn btn--sticker">Join the Studio</a>
    </div>

    <!-- Polaroid Section -->
    <h2 class="section-title" style="margin-top:3rem;">Pinned Moments</h2>
    <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin:1.5rem 0;">
      <div class="polaroid" style="--photo-tilt:-3deg;">
        <div style="width:200px;height:200px;background:linear-gradient(135deg,var(--collage-sepia),var(--collage-kraft));"></div>
        <div class="caption">morning light</div>
      </div>
      <div class="polaroid" style="--photo-tilt:2deg;">
        <div style="width:200px;height:200px;background:linear-gradient(135deg,var(--collage-blue),var(--collage-teal));"></div>
        <div class="caption">found at the market</div>
      </div>
      <div class="polaroid" style="--photo-tilt:-1deg;">
        <div style="width:200px;height:200px;background:linear-gradient(135deg,var(--collage-coral),var(--collage-pink));"></div>
        <div class="caption">golden hour</div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>
      Assembled with <span class="doodle-heart">scissors & glue</span>
      &mdash; a digital collage experience
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Optimize texture assets** -- if using raster images for paper textures or torn edges, compress them aggressively and consider using CSS-only alternatives (gradients, clip-paths, SVG filters) for lightweight reproductions
- **Use CSS custom properties for theming** -- define all collage colors as custom properties so the palette can be swapped easily for different moods (warm/cool, light/dark) without rewriting component styles
- **Layer with purpose** -- every overlapping element should serve a role (depth, narrative, decoration); avoid stacking elements purely for density, as this degrades readability and accessibility
- **Maintain text readability** -- despite the layered, rotated aesthetic, ensure all meaningful text sits on a solid, opaque background with sufficient contrast; decorative text can afford lower contrast, but content text cannot
- **Progressive enhancement for decorative effects** -- torn edges (clip-path), washi tape (pseudo-elements), and sticker shadows are visual flourishes; ensure the layout remains functional if these are not rendered
- **Performance considerations** -- multiple box-shadows, pseudo-elements with clip-paths, and SVG noise filters can strain rendering; test on lower-powered devices and simplify decorative layers if frame rates drop
- **Accessibility compliance** -- rotated text should not exceed 3-4 degrees for body content; provide focus styles on all interactive elements that are visible even within the layered composition; use semantic HTML beneath the visual styling
- **Print-friendly fallback** -- when designing for content that may be printed, provide a `@media print` stylesheet that removes textures, shadows, and rotations for clean output
