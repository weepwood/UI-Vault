# Paper Cut Design Reference

## Overview

Paper Cut is a design aesthetic that simulates the look and feel of hand-cut paper art translated into digital interfaces. Rooted in centuries-old paper cutting traditions -- from Chinese jianzhi and Polish wycinanki to Japanese kirigami and German scherenschnitte -- this style leverages layered, stacked shapes with carefully orchestrated shadows to create tactile, three-dimensional depth on flat screens. Each element appears to be a discrete sheet of colored paper, physically elevated above the layers beneath it, casting realistic shadows that establish a clear spatial hierarchy.

The aesthetic emerged as a significant graphic design trend in the late 2010s and has continued to evolve, appearing in product landing pages, children's brand identities, editorial illustration, greeting card design, and immersive hero sections. Its appeal lies in the warmth and approachability of handmade craft combined with clean, geometric precision. Unlike skeuomorphism, which attempts photorealistic simulation of materials, Paper Cut embraces an obviously stylized, illustrative quality -- surfaces read as construction paper, not marble or leather. Colors tend to be bold yet slightly muted, evoking the natural pigmentation of dyed cardstock rather than digital neons.

In web and UI design, the Paper Cut aesthetic translates through multiple stacked `box-shadow` layers, `clip-path` silhouettes, layered `z-index` compositions, and subtle gradient overlays that suggest the way light falls across paper edges. Wavy or organic section dividers replace hard horizontal lines, making page transitions feel like one paper layer peeling away to reveal the next. Illustrations built from overlapping colored shapes -- mountains, clouds, cityscapes, foliage -- serve as hero backgrounds, replacing photography with a warmer, more whimsical visual language.

The style works particularly well for brands that want to communicate creativity, craftsmanship, approachability, and a handmade sensibility without sacrificing modern polish. It pairs naturally with bold sans-serif typography and generous whitespace, allowing the layered depth effects to breathe rather than compete for attention.

---

## Visual Characteristics

### Core Design Traits

- **Stacked paper layers** -- multiple overlapping shapes at different z-depths create a tangible sense of elevation and physical hierarchy
- **Layered drop shadows** -- each paper tier casts a soft, realistic shadow onto the layer beneath it, reinforcing the illusion of physical separation
- **Bold, flat color fills** -- shapes use solid, saturated colors reminiscent of construction paper or dyed cardstock rather than gradients or photographic textures
- **Organic silhouette edges** -- wavy, curved, or irregularly cut contours define layer boundaries, mimicking hand-cut paper shapes
- **Craft-inspired illustrations** -- scenery, characters, and decorative elements are composed from overlapping paper-like shapes (mountains, trees, clouds, animals)
- **Subtle paper texture** -- faint grain or fiber overlay on surfaces suggests the tactile quality of real paper stock
- **Dimensional typography** -- letterforms appear cut from paper, sometimes with shadow offsets or layered color behind them to suggest physical depth
- **Section dividers as terrain** -- wavy SVG or `clip-path` borders between page sections look like one paper sheet laid atop another
- **Limited depth palette** -- typically three to five visible layers of depth, enough to feel dimensional without becoming chaotic
- **Rounded, soft geometry** -- corners and edges tend toward gentle curves rather than harsh right angles, maintaining the handmade quality
- **Negative space as a design element** -- cut-away areas reveal underlying layers or background colors, echoing the subtractive nature of paper cutting

### Design Principles

- Depth should feel physically plausible -- shadow distances and blur radii must correspond to the implied elevation of each layer
- Each layer should read as a single, flat sheet of colored paper with no internal gradients (gradients appear only where light falls across edges)
- Maintain a consistent light source direction across all elements so shadows align coherently
- Use color contrast between adjacent layers to ensure clear visual separation at every depth level
- Illustrations should be constructed from simple, overlapping shapes rather than detailed linework
- Whitespace is essential -- paper layers need room to cast their shadows and establish spatial relationships
- Animation, when present, should mimic physical paper motion: gentle lifting, settling, or peeling rather than digital effects like fading or morphing
- Accessibility remains paramount -- ensure text contrast meets WCAG AA standards even when placed on colored paper layers

---

## Color Palette

Paper Cut palettes draw from the natural pigmentation of craft paper, construction paper, and specialty cardstock. Colors are bold but slightly desaturated, warm but never neon. The palette typically includes a light background (the "table" or "backing board"), several mid-tone layer colors, and a few accent shades for detail and emphasis.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Cream Canvas | `#FAF3E8` | Base background, the surface beneath all layers |
| Kraft Brown | `#C9A96E` | Secondary background, exposed underlayer, earthy grounding |
| Paper White | `#F5F0EB` | Top-level card surfaces, clean foreground panels |
| Sky Blue | `#6BAFE2` | Sky layers in illustrations, calm accent, link color |
| Forest Green | `#3D8B5F` | Foliage, nature layers, success states |
| Goldenrod | `#E8B84B` | Warm accent, highlights, call-to-action elements |
| Terracotta | `#C85A3A` | Bold accent, buttons, energetic layer |
| Dusty Rose | `#D4808A` | Soft accent, decorative layers, secondary buttons |
| Deep Navy | `#2A3D5C` | Text color, dark layer elements, contrast |
| Sage Green | `#8DB48E` | Mid-tone foliage, subtle backgrounds, tags |
| Sunset Orange | `#E8844A` | Warm mid-accent, illustration details |
| Cloud Lavender | `#B8A9D4` | Soft accent, decorative background layers |
| Charcoal Paper | `#3E4147` | Dark text, shadow-heavy elements |
| Soft Coral | `#F0A898` | Light warm accent, hover states |
| Pine Dark | `#2D5E45` | Deep green contrast, footer backgrounds |

### CSS Custom Properties

```css
:root {
  /* Base surfaces */
  --paper-canvas: #faf3e8;
  --paper-kraft: #c9a96e;
  --paper-white: #f5f0eb;

  /* Primary palette */
  --paper-sky: #6bafe2;
  --paper-forest: #3d8b5f;
  --paper-goldenrod: #e8b84b;
  --paper-terracotta: #c85a3a;
  --paper-rose: #d4808a;

  /* Secondary palette */
  --paper-navy: #2a3d5c;
  --paper-sage: #8db48e;
  --paper-sunset: #e8844a;
  --paper-lavender: #b8a9d4;
  --paper-coral: #f0a898;
  --paper-pine: #2d5e45;

  /* Text */
  --paper-text-primary: #2a3d5c;
  --paper-text-secondary: #5a6475;
  --paper-text-light: #f5f0eb;
  --paper-text-dark: #3e4147;

  /* Shadows */
  --paper-shadow-sm: 0 2px 4px rgba(42, 61, 92, 0.10);
  --paper-shadow-md: 0 4px 8px rgba(42, 61, 92, 0.12), 0 2px 4px rgba(42, 61, 92, 0.08);
  --paper-shadow-lg: 0 8px 16px rgba(42, 61, 92, 0.14), 0 4px 8px rgba(42, 61, 92, 0.08);
  --paper-shadow-xl: 0 12px 24px rgba(42, 61, 92, 0.16), 0 6px 12px rgba(42, 61, 92, 0.10);
  --paper-shadow-float: 0 16px 32px rgba(42, 61, 92, 0.18), 0 8px 16px rgba(42, 61, 92, 0.10);

  /* Depth layer elevations */
  --paper-layer-1: 0 1px 3px rgba(42, 61, 92, 0.08);
  --paper-layer-2: 0 3px 6px rgba(42, 61, 92, 0.10), 0 1px 3px rgba(42, 61, 92, 0.06);
  --paper-layer-3: 0 6px 12px rgba(42, 61, 92, 0.12), 0 3px 6px rgba(42, 61, 92, 0.06);
  --paper-layer-4: 0 10px 20px rgba(42, 61, 92, 0.14), 0 4px 8px rgba(42, 61, 92, 0.08);
  --paper-layer-5: 0 14px 28px rgba(42, 61, 92, 0.16), 0 6px 12px rgba(42, 61, 92, 0.08);
}
```

---

## Typography

Paper Cut typography balances the handmade warmth of the aesthetic with modern readability. Display headings can lean into craft-inspired character -- rounded, bold, and slightly playful -- while body text stays clean and legible. The contrast between a whimsical display face and a grounded body font reinforces the "crafted but polished" personality of the style.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **Fredoka** | Rounded, bold, friendly sans-serif | Hero headlines, display text |
| **Baloo 2** | Rounded, bubbly display sans | Section headings, feature titles |
| **Nunito** | Rounded sans-serif, soft terminals | Body text, subheadings |
| **Quicksand** | Rounded geometric sans-serif | UI labels, navigation, buttons |
| **Poppins** | Geometric sans-serif, versatile | Body text alternative, captions |
| **Comfortaa** | Rounded geometric, friendly | Logo text, decorative headings |
| **DM Sans** | Clean geometric sans-serif | Small text, metadata, footnotes |

### Font Pairing Recommendations

| Heading Font | Body Font | Mood |
|--------------|-----------|------|
| **Fredoka** (700) | **Nunito** (400, 600) | Playful, warm, approachable |
| **Baloo 2** (600, 700) | **Poppins** (400, 500) | Bold, modern, energetic |
| **Comfortaa** (600) | **Quicksand** (400, 500) | Gentle, soft, minimal |
| **Fredoka** (600) | **DM Sans** (400, 500) | Crafty headline, professional body |

### CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Quicksand:wght@400;500;600;700&display=swap');

/* Hero / Display headings */
h1 {
  font-family: 'Fredoka', 'Nunito', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--paper-text-primary);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

/* Section headings */
h2 {
  font-family: 'Fredoka', 'Nunito', sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  color: var(--paper-text-primary);
  line-height: 1.25;
}

/* Subsection headings */
h3 {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: var(--paper-terracotta);
  line-height: 1.3;
}

/* Body text */
body {
  font-family: 'Nunito', 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--paper-text-primary);
}

/* UI labels and buttons */
.paper-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* Paper-cut display text with shadow offset */
.paper-cut-text {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--paper-white);
  text-shadow:
    2px 2px 0 var(--paper-terracotta),
    4px 4px 0 rgba(42, 61, 92, 0.15);
  line-height: 1.05;
}
```

---

## Layout Principles

- **Layered z-axis composition** -- design the page as a stack of paper sheets at varying elevations; foreground content sits on the topmost layer while decorative elements recede behind
- **Wavy section dividers** -- replace horizontal rules or hard section breaks with organic, curved `clip-path` or SVG shapes that suggest one paper layer overlapping the next
- **Generous padding and margins** -- paper layers need breathing room to cast visible shadows; cramped layouts collapse the dimensional illusion
- **Card-based content grouping** -- individual content blocks live on their own "paper sheets," each with its own shadow and slight elevation
- **Illustration-driven hero sections** -- large paper-cut landscape or abstract scenes constructed from overlapping colored shapes serve as immersive entry points
- **Asymmetric, organic placement** -- elements can overlap, peek from behind other layers, or extend beyond their container to reinforce the physical paper metaphor
- **Consistent light direction** -- all shadows must fall in the same direction (typically bottom-right) to maintain the illusion of a single overhead light source
- **Limited depth tiers** -- restrict designs to three to five distinct elevation levels to keep the spatial hierarchy readable
- **Responsive layer simplification** -- on smaller screens, reduce the number of visible paper layers and shadow intensity to maintain performance and clarity
- **Full-bleed color sections** -- alternate background colors between sections to represent different "sheets" of colored paper spanning the full viewport width

---

## CSS / Design Techniques

### Paper Layer with Stacked Shadows

The foundational technique for Paper Cut design. Each element gets multi-layered `box-shadow` to simulate physical paper elevation.

```css
/* Base paper layer system */
.paper-layer {
  position: relative;
  background: var(--paper-white);
  border-radius: 12px;
}

.paper-layer--1 {
  box-shadow: 0 1px 3px rgba(42, 61, 92, 0.08);
  z-index: 1;
}

.paper-layer--2 {
  box-shadow:
    0 3px 6px rgba(42, 61, 92, 0.10),
    0 1px 3px rgba(42, 61, 92, 0.06);
  z-index: 2;
}

.paper-layer--3 {
  box-shadow:
    0 6px 12px rgba(42, 61, 92, 0.12),
    0 3px 6px rgba(42, 61, 92, 0.06);
  z-index: 3;
}

.paper-layer--4 {
  box-shadow:
    0 10px 20px rgba(42, 61, 92, 0.14),
    0 4px 8px rgba(42, 61, 92, 0.08);
  z-index: 4;
}

.paper-layer--5 {
  box-shadow:
    0 14px 28px rgba(42, 61, 92, 0.16),
    0 6px 12px rgba(42, 61, 92, 0.08);
  z-index: 5;
}

/* Paper texture overlay */
.paper-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}
```

### Card Component

Cards are the primary content container in Paper Cut design, styled as individual paper sheets floating above the background.

```css
.paper-card {
  background: var(--paper-white);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow:
    0 4px 8px rgba(42, 61, 92, 0.10),
    0 2px 4px rgba(42, 61, 92, 0.06);
}

.paper-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 24px rgba(42, 61, 92, 0.14),
    0 4px 8px rgba(42, 61, 92, 0.08);
}

/* Colored card variants */
.paper-card--sky {
  background: var(--paper-sky);
  color: var(--paper-text-light);
}

.paper-card--forest {
  background: var(--paper-forest);
  color: var(--paper-text-light);
}

.paper-card--terracotta {
  background: var(--paper-terracotta);
  color: var(--paper-text-light);
}

.paper-card--goldenrod {
  background: var(--paper-goldenrod);
  color: var(--paper-text-primary);
}

/* Stacked paper card -- shows additional sheets behind */
.paper-card--stacked {
  position: relative;
}

.paper-card--stacked::before,
.paper-card--stacked::after {
  content: '';
  position: absolute;
  left: 4px;
  right: 4px;
  height: 100%;
  border-radius: 16px;
  z-index: -1;
}

.paper-card--stacked::before {
  bottom: -6px;
  background: rgba(42, 61, 92, 0.04);
  box-shadow: 0 2px 4px rgba(42, 61, 92, 0.06);
  transform: rotate(0.5deg);
}

.paper-card--stacked::after {
  bottom: -12px;
  left: 8px;
  right: 8px;
  background: rgba(42, 61, 92, 0.03);
  box-shadow: 0 1px 3px rgba(42, 61, 92, 0.04);
  transform: rotate(-0.5deg);
}
```

### Button Styles

Buttons in Paper Cut design look like small, clickable paper pieces that lift further on hover.

```css
.paper-btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  font-family: 'Quicksand', 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.paper-btn--primary {
  background: var(--paper-terracotta);
  color: var(--paper-text-light);
  box-shadow:
    0 3px 6px rgba(200, 90, 58, 0.25),
    0 1px 3px rgba(200, 90, 58, 0.15);
}

.paper-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 12px rgba(200, 90, 58, 0.30),
    0 3px 6px rgba(200, 90, 58, 0.15);
}

.paper-btn--primary:active {
  transform: translateY(1px);
  box-shadow:
    0 1px 3px rgba(200, 90, 58, 0.20),
    0 1px 2px rgba(200, 90, 58, 0.10);
}

.paper-btn--secondary {
  background: var(--paper-goldenrod);
  color: var(--paper-text-primary);
  box-shadow:
    0 3px 6px rgba(232, 184, 75, 0.25),
    0 1px 3px rgba(232, 184, 75, 0.15);
}

.paper-btn--secondary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 12px rgba(232, 184, 75, 0.30),
    0 3px 6px rgba(232, 184, 75, 0.15);
}

.paper-btn--outline {
  background: transparent;
  color: var(--paper-terracotta);
  border: 2px solid var(--paper-terracotta);
  box-shadow: none;
}

.paper-btn--outline:hover {
  background: var(--paper-terracotta);
  color: var(--paper-text-light);
  transform: translateY(-2px);
  box-shadow:
    0 4px 8px rgba(200, 90, 58, 0.20);
}

/* Paper-fold corner accent on button */
.paper-btn--folded::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: linear-gradient(
    225deg,
    var(--paper-canvas) 50%,
    rgba(42, 61, 92, 0.08) 50%
  );
  border-radius: 0 10px 0 0;
}
```

### Navigation Bar

A navigation bar styled as a paper strip floating above the page content.

```css
.paper-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--paper-white);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:
    0 4px 8px rgba(42, 61, 92, 0.08),
    0 2px 4px rgba(42, 61, 92, 0.04);
}

.paper-nav__brand {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--paper-terracotta);
  text-decoration: none;
}

.paper-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.paper-nav__link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--paper-text-primary);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.paper-nav__link:hover {
  background: var(--paper-goldenrod);
  color: var(--paper-text-primary);
  box-shadow: 0 2px 4px rgba(232, 184, 75, 0.25);
}

.paper-nav__link--active {
  background: var(--paper-terracotta);
  color: var(--paper-text-light);
  box-shadow: 0 2px 4px rgba(200, 90, 58, 0.20);
}

/* Wavy bottom edge on nav */
.paper-nav--wavy {
  clip-path: polygon(
    0 0, 100% 0, 100% 75%,
    95% 85%, 90% 78%, 85% 88%, 80% 80%,
    75% 90%, 70% 82%, 65% 92%, 60% 84%,
    55% 90%, 50% 80%, 45% 88%, 40% 78%,
    35% 86%, 30% 80%, 25% 90%, 20% 82%,
    15% 88%, 10% 78%, 5% 85%, 0 75%
  );
  padding-bottom: 2rem;
}
```

### Hero Section

A paper-cut landscape hero section with layered mountain/wave silhouettes.

```css
.paper-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem 8rem;
  background: var(--paper-sky);
  color: var(--paper-text-light);
  overflow: hidden;
}

.paper-hero__content {
  position: relative;
  z-index: 10;
  max-width: 700px;
}

.paper-hero__title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 2px 3px 0 rgba(42, 61, 92, 0.15);
}

.paper-hero__subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 2rem;
}

/* Layered mountain silhouettes */
.paper-hero__layer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.paper-hero__layer--back {
  height: 35%;
  background: var(--paper-sage);
  clip-path: polygon(
    0 60%, 5% 50%, 10% 55%, 15% 40%, 20% 48%,
    25% 35%, 30% 42%, 35% 30%, 40% 38%, 45% 28%,
    50% 35%, 55% 25%, 60% 32%, 65% 22%, 70% 30%,
    75% 20%, 80% 28%, 85% 35%, 90% 25%, 95% 40%,
    100% 30%, 100% 100%, 0 100%
  );
  z-index: 2;
  filter: drop-shadow(0 -3px 4px rgba(42, 61, 92, 0.08));
}

.paper-hero__layer--mid {
  height: 28%;
  background: var(--paper-forest);
  clip-path: polygon(
    0 65%, 8% 50%, 15% 58%, 22% 42%, 28% 55%,
    35% 38%, 42% 48%, 48% 35%, 55% 45%, 62% 30%,
    68% 42%, 75% 32%, 82% 45%, 88% 35%, 95% 50%,
    100% 40%, 100% 100%, 0 100%
  );
  z-index: 3;
  filter: drop-shadow(0 -4px 6px rgba(42, 61, 92, 0.10));
}

.paper-hero__layer--front {
  height: 20%;
  background: var(--paper-pine);
  clip-path: polygon(
    0 70%, 10% 55%, 20% 65%, 30% 50%, 40% 60%,
    50% 45%, 60% 55%, 70% 42%, 80% 55%, 90% 48%,
    100% 58%, 100% 100%, 0 100%
  );
  z-index: 4;
  filter: drop-shadow(0 -5px 8px rgba(42, 61, 92, 0.12));
}

/* Sun/Moon circle element */
.paper-hero__sun {
  position: absolute;
  top: 15%;
  right: 18%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--paper-goldenrod);
  box-shadow:
    0 4px 12px rgba(232, 184, 75, 0.40),
    0 0 40px rgba(232, 184, 75, 0.15);
  z-index: 1;
}

/* Cloud cutout */
.paper-hero__cloud {
  position: absolute;
  width: 120px;
  height: 40px;
  background: var(--paper-white);
  border-radius: 40px;
  opacity: 0.8;
  z-index: 1;
  box-shadow: 0 2px 6px rgba(42, 61, 92, 0.06);
}

.paper-hero__cloud::before,
.paper-hero__cloud::after {
  content: '';
  position: absolute;
  background: var(--paper-white);
  border-radius: 50%;
}

.paper-hero__cloud::before {
  width: 50px;
  height: 50px;
  top: -20px;
  left: 20px;
}

.paper-hero__cloud::after {
  width: 35px;
  height: 35px;
  top: -15px;
  left: 55px;
}
```

### Wavy Section Divider

Organic, paper-like dividers between page sections.

```css
/* Wavy divider -- one paper layer overlapping the next */
.paper-divider {
  position: relative;
  height: 80px;
  margin-top: -80px;
  z-index: 5;
}

.paper-divider svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* CSS-only wavy divider alternative */
.paper-divider--css {
  position: relative;
  height: 60px;
  margin-top: -60px;
  z-index: 5;
  background: var(--paper-canvas);
  clip-path: polygon(
    0 40%, 2% 35%, 5% 42%, 8% 30%, 12% 38%,
    16% 25%, 20% 35%, 24% 20%, 28% 32%, 32% 22%,
    36% 30%, 40% 18%, 44% 28%, 48% 15%, 52% 25%,
    56% 18%, 60% 30%, 64% 20%, 68% 28%, 72% 15%,
    76% 25%, 80% 18%, 84% 30%, 88% 22%, 92% 32%,
    96% 25%, 100% 35%, 100% 100%, 0 100%
  );
}

/* Smooth wave using SVG inline */
.paper-wave {
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: relative;
  margin-top: -1px;
}

.paper-wave svg {
  display: block;
  width: 100%;
  height: 100%;
}
```

### Paper Fold / Dog-Ear Corner

A folded corner detail that appears on cards and containers.

```css
/* Dog-ear fold corner effect */
.paper-fold {
  position: relative;
  overflow: hidden;
}

.paper-fold::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 40px 40px 0;
  border-color: transparent var(--paper-canvas) transparent transparent;
  filter: drop-shadow(-2px 2px 3px rgba(42, 61, 92, 0.10));
}

/* Inner triangle shadow for realism */
.paper-fold::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    225deg,
    transparent 50%,
    rgba(42, 61, 92, 0.06) 50%
  );
  z-index: 1;
}
```

### Torn Paper Edge

Simulating a torn or ripped paper edge using `clip-path`.

```css
/* Torn paper top edge */
.paper-torn--top {
  clip-path: polygon(
    0% 4%, 2% 1%, 4% 3%, 7% 0%, 10% 2%, 13% 1%,
    16% 3%, 19% 0%, 22% 2%, 25% 1%, 28% 4%, 31% 1%,
    34% 3%, 37% 0%, 40% 2%, 43% 1%, 46% 3%, 49% 0%,
    52% 2%, 55% 1%, 58% 4%, 61% 1%, 64% 3%, 67% 0%,
    70% 2%, 73% 1%, 76% 3%, 79% 0%, 82% 2%, 85% 1%,
    88% 4%, 91% 1%, 94% 3%, 97% 0%, 100% 2%,
    100% 100%, 0% 100%
  );
  padding-top: 1.5rem;
}

/* Torn paper bottom edge */
.paper-torn--bottom {
  clip-path: polygon(
    0 0, 100% 0,
    100% 96%, 98% 99%, 96% 97%, 93% 100%, 90% 98%,
    87% 99%, 84% 97%, 81% 100%, 78% 98%, 75% 99%,
    72% 96%, 69% 99%, 66% 97%, 63% 100%, 60% 98%,
    57% 99%, 54% 97%, 51% 100%, 48% 98%, 45% 99%,
    42% 96%, 39% 99%, 36% 97%, 33% 100%, 30% 98%,
    27% 99%, 24% 97%, 21% 100%, 18% 98%, 15% 99%,
    12% 96%, 9% 99%, 6% 97%, 3% 100%, 0 98%
  );
  padding-bottom: 1.5rem;
}
```

---

## Design Do's and Don'ts

### Do's

- **Do** maintain a consistent shadow direction across all elements to suggest a single, believable light source
- **Do** use multi-layered box-shadows (tight near-shadow plus softer far-shadow) for realistic paper elevation
- **Do** embrace organic, wavy, and curved edges to differentiate from typical boxy web layouts
- **Do** restrict your depth to three to five distinct layers to keep the hierarchy readable and intuitive
- **Do** apply subtle paper grain or noise textures to surfaces to reinforce the tactile, physical quality
- **Do** use bold, flat colors inspired by construction paper and craft materials rather than gradients or photographic fills
- **Do** test all text-on-color combinations for WCAG AA contrast, especially with colored paper backgrounds

### Don'ts

- **Don't** apply gradient fills within paper shapes -- real construction paper is a single, solid color per sheet
- **Don't** use glossy or metallic effects -- the aesthetic is matte, fibrous, and handmade, not slick or digital
- **Don't** stack more than five depth layers in a single composition, as it becomes visually overwhelming and spatially confusing
- **Don't** mix shadow directions -- a shadow falling down-right on one element and down-left on another breaks the physical illusion
- **Don't** neglect performance -- excessive `box-shadow` layers and `filter: drop-shadow` on animated elements can cause jank, especially on mobile
- **Don't** use hard geometric patterns or pixel-sharp edges -- the aesthetic demands soft, organic, slightly irregular forms
- **Don't** clutter the composition with too many overlapping layers -- leave enough negative space for shadows to be visible and the depth to be readable
- **Don't** forget to simplify the layered effects on smaller viewports -- shadows and depth that look great on desktop can become muddy on mobile

---

## Related Aesthetics

| Aesthetic | Relationship to Paper Cut |
|-----------|--------------------------|
| **Flat Design** | Shares the emphasis on bold, solid color shapes and simple geometry; Paper Cut adds the dimensional depth that Flat Design explicitly avoids |
| **Material Design** | Google's system also uses layered elevation and shadow to create hierarchy; Paper Cut applies a warmer, more illustrative, craft-inspired take on the same principle |
| **Claymorphism** | Both create tactile, three-dimensional effects; Claymorphism inflates surfaces like clay while Paper Cut stacks flat sheets with edge shadows |
| **Craftcore** | Shares the handmade, artisanal sensibility; Craftcore is rooted in textile and fiber arts while Paper Cut draws from paper-cutting traditions specifically |
| **Skeuomorphism** | Paper Cut borrows the idea of mimicking physical materials but stays stylized and illustrative rather than photorealistic |
| **Glassmorphism** | Both create depth through layered surfaces; Glassmorphism uses transparency and blur while Paper Cut uses opaque, solid-color sheets |
| **Light Skeuomorphism** | A subtler relative that also uses soft shadows and physical-object metaphors, but with less emphasis on the craft/illustration dimension |
| **Kirigami / Origami UI** | A close cousin focused specifically on folding and 3D paper geometry rather than flat cut layers |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paper Cut Design</title>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --paper-canvas: #faf3e8;
      --paper-white: #f5f0eb;
      --paper-sky: #6bafe2;
      --paper-forest: #3d8b5f;
      --paper-goldenrod: #e8b84b;
      --paper-terracotta: #c85a3a;
      --paper-rose: #d4808a;
      --paper-navy: #2a3d5c;
      --paper-sage: #8db48e;
      --paper-pine: #2d5e45;
      --paper-text-primary: #2a3d5c;
      --paper-text-light: #f5f0eb;
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--paper-canvas);
      color: var(--paper-text-primary);
      font-family: 'Nunito', sans-serif;
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1, h2, h3 { font-family: 'Fredoka', sans-serif; line-height: 1.2; }
    a { color: var(--paper-sky); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* -- Navigation -- */
    .nav {
      position: sticky; top: 0; z-index: 100;
      background: var(--paper-white);
      padding: 1rem 2rem;
      display: flex; align-items: center; justify-content: space-between;
      box-shadow: 0 4px 8px rgba(42,61,92,.08), 0 2px 4px rgba(42,61,92,.04);
    }
    .nav__brand {
      font-family: 'Fredoka', sans-serif; font-weight: 700;
      font-size: 1.5rem; color: var(--paper-terracotta); text-decoration: none;
    }
    .nav__links { display: flex; gap: 1.5rem; list-style: none; }
    .nav__link {
      font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.9rem;
      color: var(--paper-text-primary); text-decoration: none;
      padding: 0.35rem 0.75rem; border-radius: 8px;
      transition: background .2s, color .2s, box-shadow .2s;
    }
    .nav__link:hover {
      background: var(--paper-goldenrod);
      box-shadow: 0 2px 4px rgba(232,184,75,.25); text-decoration: none;
    }

    /* -- Hero with paper-cut landscape -- */
    .hero {
      position: relative; min-height: 85vh;
      display: flex; align-items: center; justify-content: center; text-align: center;
      padding: 4rem 2rem 10rem;
      background: linear-gradient(180deg, #7fc4ed 0%, var(--paper-sky) 100%);
      overflow: hidden;
    }
    .hero__content { position: relative; z-index: 10; max-width: 650px; }
    .hero__title {
      font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 700;
      color: var(--paper-white); text-shadow: 2px 3px 0 rgba(42,61,92,.12);
      margin-bottom: 1rem;
    }
    .hero__subtitle {
      font-size: 1.15rem; color: rgba(245,240,235,.9);
      margin-bottom: 2rem; max-width: 500px; margin-inline: auto;
    }
    .hero__sun {
      position: absolute; top: 12%; right: 15%; width: 90px; height: 90px;
      border-radius: 50%; background: var(--paper-goldenrod);
      box-shadow: 0 4px 12px rgba(232,184,75,.4), 0 0 50px rgba(232,184,75,.15);
      z-index: 1;
    }
    .hero__cloud {
      position: absolute; background: var(--paper-white);
      border-radius: 40px; opacity: .7; z-index: 2;
      box-shadow: 0 2px 6px rgba(42,61,92,.05);
    }
    .hero__cloud::before, .hero__cloud::after {
      content: ''; position: absolute; background: var(--paper-white); border-radius: 50%;
    }
    .hero__cloud--1 { width: 120px; height: 36px; top: 20%; left: 10%; }
    .hero__cloud--1::before { width: 48px; height: 48px; top: -22px; left: 18px; }
    .hero__cloud--1::after  { width: 32px; height: 32px; top: -14px; left: 52px; }
    .hero__cloud--2 { width: 100px; height: 30px; top: 30%; right: 30%; }
    .hero__cloud--2::before { width: 40px; height: 40px; top: -18px; left: 14px; }
    .hero__cloud--2::after  { width: 28px; height: 28px; top: -12px; left: 44px; }

    /* Mountain layers */
    .hero__mountains { position: absolute; left: 0; right: 0; bottom: 0; }
    .mountain-layer { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; }
    .mountain-layer--back {
      height: 40%; background: var(--paper-sage); z-index: 3;
      clip-path: polygon(0 55%,6% 42%,12% 50%,18% 35%,24% 45%,30% 30%,36% 40%,42% 28%,48% 38%,54% 25%,60% 35%,66% 22%,72% 33%,78% 20%,84% 30%,90% 38%,96% 28%,100% 38%,100% 100%,0 100%);
      filter: drop-shadow(0 -3px 5px rgba(42,61,92,.08));
    }
    .mountain-layer--mid {
      height: 32%; background: var(--paper-forest); z-index: 4;
      clip-path: polygon(0 60%,8% 45%,16% 55%,24% 38%,32% 50%,38% 35%,44% 48%,52% 32%,58% 42%,66% 28%,72% 40%,80% 30%,88% 42%,94% 35%,100% 45%,100% 100%,0 100%);
      filter: drop-shadow(0 -4px 6px rgba(42,61,92,.10));
    }
    .mountain-layer--front {
      height: 22%; background: var(--paper-pine); z-index: 5;
      clip-path: polygon(0 65%,10% 50%,20% 60%,30% 45%,40% 55%,50% 40%,60% 52%,70% 38%,80% 50%,90% 42%,100% 55%,100% 100%,0 100%);
      filter: drop-shadow(0 -5px 8px rgba(42,61,92,.12));
    }

    /* -- Shared section styles -- */
    .wave-divider { display: block; width: 100%; height: auto; margin-top: -2px; }
    .section { padding: 5rem 2rem; }
    .section__inner { max-width: 1100px; margin: 0 auto; }
    .section__heading {
      text-align: center; font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700; color: var(--paper-text-primary); margin-bottom: 3rem;
    }
    .grid { display: grid; gap: 2rem; }
    .grid--3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

    /* -- Card -- */
    .card {
      background: var(--paper-white); border-radius: 16px; padding: 2rem;
      position: relative;
      transition: transform .3s ease, box-shadow .3s ease;
      box-shadow: 0 4px 8px rgba(42,61,92,.10), 0 2px 4px rgba(42,61,92,.06);
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(42,61,92,.14), 0 4px 8px rgba(42,61,92,.08);
    }
    .card__icon {
      width: 56px; height: 56px; border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.6rem; margin-bottom: 1.25rem;
      box-shadow: 0 2px 4px rgba(42,61,92,.08);
    }
    .card__icon--sky       { background: var(--paper-sky); }
    .card__icon--forest    { background: var(--paper-forest); }
    .card__icon--goldenrod { background: var(--paper-goldenrod); }
    .card__title {
      font-family: 'Fredoka', sans-serif; font-weight: 600;
      font-size: 1.25rem; margin-bottom: .75rem;
    }
    .card__text { font-size: .95rem; color: #5a6475; line-height: 1.65; }

    /* Stacked-paper pseudo-layers behind card */
    .card--stacked::before, .card--stacked::after {
      content: ''; position: absolute; left: 5px; right: 5px;
      height: 100%; border-radius: 16px; z-index: -1;
    }
    .card--stacked::before {
      bottom: -7px; background: rgba(42,61,92,.04);
      box-shadow: 0 2px 4px rgba(42,61,92,.05); transform: rotate(.6deg);
    }
    .card--stacked::after {
      bottom: -13px; left: 10px; right: 10px;
      background: rgba(42,61,92,.025);
      box-shadow: 0 1px 3px rgba(42,61,92,.03); transform: rotate(-.6deg);
    }

    /* -- Colored showcase section -- */
    .showcase {
      background: var(--paper-forest); color: var(--paper-text-light);
      padding: 5rem 2rem;
    }
    .showcase__inner {
      max-width: 900px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;
    }
    .showcase__heading { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 700; margin-bottom: 1rem; }
    .showcase__text { opacity: .9; line-height: 1.75; margin-bottom: 1.5rem; }
    .showcase__sheet {
      padding: 1.25rem 1.5rem; border-radius: 12px;
      font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: .9rem;
    }
    .showcase__sheet--1 { background: var(--paper-goldenrod); color: var(--paper-text-primary); z-index: 4; box-shadow: 0 4px 8px rgba(42,61,92,.15); transform: rotate(-1deg); }
    .showcase__sheet--2 { background: var(--paper-terracotta); color: var(--paper-text-light); z-index: 3; margin-top: -8px; margin-left: 12px; box-shadow: 0 3px 6px rgba(42,61,92,.12); transform: rotate(.8deg); }
    .showcase__sheet--3 { background: var(--paper-sky); color: var(--paper-text-light); z-index: 2; margin-top: -8px; margin-left: 6px; box-shadow: 0 2px 4px rgba(42,61,92,.10); transform: rotate(-.5deg); }
    .showcase__sheet--4 { background: var(--paper-rose); color: var(--paper-text-light); z-index: 1; margin-top: -8px; margin-left: 18px; box-shadow: 0 1px 3px rgba(42,61,92,.08); transform: rotate(1.2deg); }

    /* -- Buttons -- */
    .btn {
      display: inline-block; padding: .75rem 1.75rem;
      font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: .95rem;
      border: none; border-radius: 10px; cursor: pointer; text-decoration: none;
      transition: transform .2s ease, box-shadow .2s ease;
    }
    .btn--primary {
      background: var(--paper-terracotta); color: var(--paper-text-light);
      box-shadow: 0 3px 6px rgba(200,90,58,.25), 0 1px 3px rgba(200,90,58,.15);
    }
    .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(200,90,58,.30), 0 3px 6px rgba(200,90,58,.15); text-decoration: none; }
    .btn--secondary {
      background: var(--paper-goldenrod); color: var(--paper-text-primary);
      box-shadow: 0 3px 6px rgba(232,184,75,.25), 0 1px 3px rgba(232,184,75,.15);
    }
    .btn--secondary:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(232,184,75,.30), 0 3px 6px rgba(232,184,75,.15); text-decoration: none; }
    .btn--white {
      background: var(--paper-white); color: var(--paper-text-primary);
      box-shadow: 0 3px 6px rgba(42,61,92,.12), 0 1px 3px rgba(42,61,92,.06);
    }
    .btn--white:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(42,61,92,.16), 0 3px 6px rgba(42,61,92,.08); text-decoration: none; }

    /* -- Testimonial -- */
    .testimonial {
      background: var(--paper-white); border-radius: 16px; padding: 2rem;
      box-shadow: 0 4px 8px rgba(42,61,92,.10), 0 2px 4px rgba(42,61,92,.06);
      border-left: 5px solid var(--paper-goldenrod);
    }
    .testimonial__quote { font-style: italic; color: #5a6475; line-height: 1.7; margin-bottom: 1.25rem; }
    .testimonial__author { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: .9rem; }
    .testimonial__role { font-size: .8rem; color: #8a93a5; }

    /* -- Footer -- */
    .footer {
      background: var(--paper-navy); color: rgba(245,240,235,.8);
      padding: 3rem 2rem; text-align: center;
    }
    .footer__inner { max-width: 800px; margin: 0 auto; }
    .footer__brand { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 1.4rem; color: var(--paper-goldenrod); margin-bottom: .5rem; }
    .footer__text { font-size: .9rem; opacity: .7; }
    .footer__links { display: flex; justify-content: center; gap: 1.5rem; list-style: none; margin-top: 1.5rem; }
    .footer__link { color: rgba(245,240,235,.6); font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: .85rem; text-decoration: none; transition: color .2s; }
    .footer__link:hover { color: var(--paper-goldenrod); text-decoration: none; }

    /* -- Responsive -- */
    @media (max-width: 768px) {
      .nav__links { gap: .75rem; }
      .nav__link { font-size: .8rem; padding: .3rem .5rem; }
      .hero { min-height: 70vh; padding-bottom: 8rem; }
      .showcase__inner { grid-template-columns: 1fr; text-align: center; }
      .grid--3 { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__brand">PaperCraft</a>
    <ul class="nav__links">
      <li><a href="#features" class="nav__link">Features</a></li>
      <li><a href="#showcase" class="nav__link">Showcase</a></li>
      <li><a href="#testimonials" class="nav__link">Voices</a></li>
      <li><a href="#" class="nav__link btn btn--primary" style="color:var(--paper-text-light)">Get Started</a></li>
    </ul>
  </nav>

  <!-- Hero with paper-cut landscape -->
  <section class="hero">
    <div class="hero__sun"></div>
    <div class="hero__cloud hero__cloud--1"></div>
    <div class="hero__cloud hero__cloud--2"></div>
    <div class="hero__content">
      <h1 class="hero__title">Crafted with Layers</h1>
      <p class="hero__subtitle">
        Beautiful depth through stacked paper cutouts,
        colored layers, and craft-inspired 3D shadows.
      </p>
      <a href="#features" class="btn btn--white">Explore</a>
    </div>
    <div class="hero__mountains">
      <div class="mountain-layer mountain-layer--back"></div>
      <div class="mountain-layer mountain-layer--mid"></div>
      <div class="mountain-layer mountain-layer--front"></div>
    </div>
  </section>

  <!-- Wave Divider -->
  <svg class="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,40 C120,65 240,10 360,35 C480,60 600,15 720,40 C840,65 960,20 1080,40 C1200,60 1320,25 1440,45 L1440,80 L0,80 Z" fill="#faf3e8"/>
  </svg>

  <!-- Features -->
  <section class="section" id="features">
    <div class="section__inner">
      <h2 class="section__heading">Why Paper Cut?</h2>
      <div class="grid grid--3">
        <div class="card card--stacked">
          <div class="card__icon card__icon--sky">&#9729;</div>
          <h3 class="card__title">Tactile Depth</h3>
          <p class="card__text">Stacked layers with realistic shadows create a physical, three-dimensional feel that flat design cannot achieve.</p>
        </div>
        <div class="card card--stacked">
          <div class="card__icon card__icon--forest">&#9752;</div>
          <h3 class="card__title">Craft Warmth</h3>
          <p class="card__text">Inspired by centuries of paper cutting traditions, every surface feels handmade, approachable, and authentically crafted.</p>
        </div>
        <div class="card card--stacked">
          <div class="card__icon card__icon--goldenrod">&#9733;</div>
          <h3 class="card__title">Bold Simplicity</h3>
          <p class="card__text">Solid color sheets and clean shapes keep the design readable while the layered depth adds visual richness.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Colored Showcase Section -->
  <section class="showcase" id="showcase">
    <div class="showcase__inner">
      <div>
        <h2 class="showcase__heading">Stacked Paper Layers</h2>
        <p class="showcase__text">Each layer is a discrete sheet of colored paper at its own elevation. Shadows fall consistently, building a clear hierarchy from back to front.</p>
        <a href="#" class="btn btn--secondary">Learn More</a>
      </div>
      <div>
        <div class="showcase__sheet showcase__sheet--1">Layer 1 -- Goldenrod</div>
        <div class="showcase__sheet showcase__sheet--2">Layer 2 -- Terracotta</div>
        <div class="showcase__sheet showcase__sheet--3">Layer 3 -- Sky Blue</div>
        <div class="showcase__sheet showcase__sheet--4">Layer 4 -- Dusty Rose</div>
      </div>
    </div>
  </section>

  <!-- Wave Divider -->
  <svg class="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,30 C180,55 360,5 540,30 C720,55 900,10 1080,35 C1200,50 1320,15 1440,40 L1440,80 L0,80 Z" fill="#faf3e8"/>
  </svg>

  <!-- Testimonials -->
  <section class="section" id="testimonials">
    <div class="section__inner">
      <h2 class="section__heading">What Designers Say</h2>
      <div class="grid grid--3">
        <div class="testimonial">
          <p class="testimonial__quote">"The layered paper approach gives our brand a warmth and dimensionality that no gradient or glass effect could match."</p>
          <p class="testimonial__author">Elara Chen</p>
          <p class="testimonial__role">Brand Director, Folio Studio</p>
        </div>
        <div class="testimonial">
          <p class="testimonial__quote">"Clients love the tactile quality. It feels like you could reach into the screen and peel back each layer."</p>
          <p class="testimonial__author">Marcus Webb</p>
          <p class="testimonial__role">UI Designer, CraftLab</p>
        </div>
        <div class="testimonial">
          <p class="testimonial__quote">"Paper Cut is the sweet spot between playful and professional. It brings craft into corporate without losing credibility."</p>
          <p class="testimonial__author">Sofia Reyes</p>
          <p class="testimonial__role">Creative Lead, Origami Digital</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__brand">PaperCraft</p>
      <p class="footer__text">Layered paper cutout depth effects -- stacked shadows, colored layers, craft-inspired 3D.</p>
      <ul class="footer__links">
        <li><a href="#" class="footer__link">About</a></li>
        <li><a href="#" class="footer__link">Portfolio</a></li>
        <li><a href="#" class="footer__link">Contact</a></li>
        <li><a href="#" class="footer__link">Blog</a></li>
      </ul>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Layer your shadows progressively** -- start with `0 1px 3px` for the closest layer and increase offset and blur for each subsequent elevation. Use a consistent scale (e.g., doubling the offset per level) so the spatial hierarchy reads naturally.
- **Use `filter: drop-shadow()` for non-rectangular shapes** -- `box-shadow` only works on the bounding rectangle; `drop-shadow()` follows the actual shape outline created by `clip-path`, making it essential for wavy dividers and irregular silhouettes.
- **Keep `clip-path` points minimal for performance** -- overly complex polygon values slow down rendering, particularly on mobile. Aim for 20-30 points maximum per divider; use SVG elements for more detailed shapes.
- **Provide a paper texture subtly** -- use an inline SVG `feTurbulence` noise filter at 2-4% opacity as a `::before` pseudo-element overlay. This adds tactile warmth without requiring an external image asset or noticeable rendering cost.
- **Simplify layers on mobile** -- reduce the number of visible depth tiers from five to two or three on screens below 768px, and decrease shadow blur values proportionally. This prevents visual muddiness on smaller displays.
- **Animate with `transform` only** -- when adding hover or scroll interactions, stick to `translateY`, `scale`, and `rotate` for paper-lifting effects. Avoid animating `box-shadow` directly; instead, layer the hover shadow on a `::after` pseudo-element and animate its `opacity` for GPU-accelerated transitions.
- **Test shadow rendering across browsers** -- multiple stacked `box-shadow` values can render slightly differently in Safari versus Chrome; validate the layered depth appearance on both WebKit and Blink engines.
- **Consider `prefers-reduced-motion`** -- wrap all hover-lift and parallax animations in a `@media (prefers-reduced-motion: no-preference)` block so users who are sensitive to motion see a static version that retains the paper-cut visual style without the movement.
