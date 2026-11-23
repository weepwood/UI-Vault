# Mixed Media Design Reference

## Overview

Mixed Media is a design aesthetic rooted in the deliberate collision of multiple creative mediums -- photography, illustration, 3D rendering, hand-drawn elements, and digital manipulation -- all fused into layered, textured compositions that defy the boundaries of any single discipline. Rather than choosing one visual language, Mixed Media embraces the tension and energy that emerges when disparate media coexist in a single frame. The result is work that feels rich, dimensional, and unmistakably human, even when executed digitally.

The aesthetic draws from a long lineage of collage and assemblage traditions in fine art, from the papier colle experiments of Braque and Picasso to the photomontage work of Hannah Hoch, the zine culture of punk, and the editorial collage techniques of designers like David Carson and Stefan Sagmeister. In its contemporary web and digital form, Mixed Media design translates these analog principles into layered CSS compositions, blended imagery, and cross-medium visual storytelling that feels alive with creative friction.

What distinguishes Mixed Media from pure collage or Dadaist chaos is its intentionality. While Dadaism weaponizes disorder, Mixed Media curates its clashes. Every layer, every blend, every juxtaposition of photograph against illustration or 3D shape against hand-drawn line serves a compositional purpose. The philosophy is one of controlled collision -- elements from different worlds interact meaningfully rather than competing for attention. Depth is built through transparency, blend modes, overlapping planes, and textural contrast, producing compositions that reward extended viewing.

In the current design landscape (2025-2026), Mixed Media has surged in relevance as a counter-movement to algorithmically smooth, AI-generated uniformity. Designers are deliberately incorporating grain, noise, hand-drawn texture, and imperfect edges to signal authenticity and human craft. The trend reflects how people consume media today -- a fragmented, layered stream of images, feeds, and formats all at once. Mixed Media design mirrors that lived experience visually, making it especially effective for editorial work, portfolio sites, brand campaigns, creative agencies, and any context that demands personality over polish.

---

## Visual Characteristics

### Core Design Traits

- **Cross-medium layering** -- Photography, illustration, vector graphics, 3D renders, and hand-drawn elements occupy the same compositional space, interacting through overlap and transparency
- **Textural density** -- Surfaces carry visible grain, noise, paper textures, brushstroke artifacts, and scanned material edges that signal tactile, analog origins
- **Blend mode interactions** -- Elements merge through multiply, overlay, screen, and soft-light blending, creating color interactions impossible with flat placement alone
- **Depth through stacking** -- Multiple visual planes at varying opacities and z-indices create parallax-like depth, guiding the eye from foreground to background
- **Torn and organic edges** -- Clean rectangular crops are replaced by irregular, hand-cut, ripped, or masked edges that break the digital grid
- **Photographic and illustrative fusion** -- Real photographs are partially overlaid with drawn elements, color washes, or vector shapes, blurring the line between mediums
- **3D elements in 2D space** -- Rendered 3D objects (abstract shapes, sculptural forms, metallic orbs) float alongside flat imagery and linework
- **Visible construction marks** -- Grid lines, crop marks, registration dots, and annotation-style text reference the production process itself
- **Color wash and duotone treatment** -- Photographs receive color overlays, split-tone treatments, or gradient maps that unify them with the surrounding palette
- **Typographic integration** -- Text is treated as a visual element, woven into imagery rather than sitting apart from it, sometimes masked by or blending with photographic content
- **Kinetic suggestion** -- Scattered, rotated, and offset elements imply motion and energy even in static compositions
- **Negative space as medium** -- Breathing room between layered elements is deliberately shaped, functioning as its own compositional layer

### Design Principles

- **Controlled collision** -- Combine disparate mediums with compositional intention; every clash should feel purposeful, not random
- **Material honesty** -- Let each medium retain its native characteristics; photographs should look photographic, illustrations should look drawn, 3D should look rendered
- **Layered hierarchy** -- Use depth, scale, and opacity to establish visual priority across overlapping elements
- **Textural contrast** -- Pair smooth digital surfaces with rough analog textures; high-resolution photography with grainy scans; clean vectors with hand-drawn linework
- **Chromatic unification** -- Use color overlays, shared palette constraints, and blend modes to harmonize elements from different sources into a cohesive visual field
- **Embrace imperfection** -- Slight misalignments, visible edges, grain, and noise communicate authenticity and distinguish the work from sterile digital production
- **Cross-medium narrative** -- Each medium should contribute a different emotional register; photography grounds in reality, illustration adds whimsy, 3D adds futurism
- **Iterative refinement** -- Build compositions through additive layering, stepping back to assess balance and adjust opacity, position, and blending at each stage

---

## Color Palette

Mixed Media palettes tend toward muted, naturalistic base tones punctuated by selective saturated accents. The goal is to allow layered elements from different mediums to harmonize visually without any single color overpowering the textural complexity. Earth tones, dusty pastels, and warm neutrals provide cohesion, while pops of vivid color draw attention to focal points and create energy within the composition.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Canvas Cream | `#F5F0E8` | Primary background; warm paper-like base for layered elements |
| Charcoal Depth | `#2C2C2E` | Deep text, shadows, and grounding dark layers |
| Ink Wash | `#3A3A3C` | Secondary dark tone for overlapping typographic elements |
| Dusty Rose | `#C4858A` | Warm accent for photographic tints and illustrative highlights |
| Terracotta Burn | `#C0603D` | Strong warm accent; focal point color for buttons and callouts |
| Aged Ochre | `#D4A95A` | Golden mid-tone for highlight washes and textural overlays |
| Sage Patina | `#7A9E7E` | Muted green for secondary accents and organic illustrative elements |
| Slate Blue | `#5B7A94` | Cool counterbalance; used in 3D elements and cool-toned photography |
| Deep Plum | `#5C3A5E` | Rich dark accent for overlays, blend-mode interactions, and depth |
| Parchment Tan | `#D9CEBC` | Warm neutral for card surfaces, layered panels, and muted backgrounds |
| Coral Flash | `#E8725A` | High-energy accent for interactive elements and attention markers |
| Fog Gray | `#B8B4AD` | Neutral mid-tone for borders, dividers, and de-emphasized content |
| Soft Lavender | `#A698B8` | Gentle cool accent for 3D rendered elements and gradient endpoints |
| Raw Umber | `#6B5744` | Earthy dark accent for organic textures and grounding elements |
| Cloud White | `#FAFAF7` | Clean highlight tone for text on dark layers and bright focal areas |

### CSS Custom Properties

```css
:root {
  --mm-canvas: #F5F0E8;
  --mm-charcoal: #2C2C2E;
  --mm-ink: #3A3A3C;
  --mm-rose: #C4858A;
  --mm-terracotta: #C0603D;
  --mm-ochre: #D4A95A;
  --mm-sage: #7A9E7E;
  --mm-slate: #5B7A94;
  --mm-plum: #5C3A5E;
  --mm-parchment: #D9CEBC;
  --mm-coral: #E8725A;
  --mm-fog: #B8B4AD;
  --mm-lavender: #A698B8;
  --mm-umber: #6B5744;
  --mm-cloud: #FAFAF7;
}
```

---

## Typography

Mixed Media typography reflects the aesthetic's core philosophy of cross-medium blending. Display type tends toward expressive, elastic forms -- oversized sans-serifs, hand-drawn scripts, and variable-weight typefaces that can stretch and compress to interact with surrounding imagery. Body text remains legible and grounded, providing a stable reading experience amid the visual density. The interplay between structured body type and expressive display type mirrors the broader tension between control and collision that defines the aesthetic.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **DM Sans** | 400, 500, 700 | Primary body text; clean and modern with subtle warmth | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Instrument Serif** | 400 | Display headlines; editorial elegance with character | [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) |
| **Space Grotesk** | 400, 500, 700 | UI elements, labels, and navigation; geometric with personality | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| **Caveat** | 400, 700 | Hand-drawn annotations, overlay text, and illustrative labels | [Caveat](https://fonts.google.com/specimen/Caveat) |
| **Syne** | 400, 500, 600, 700, 800 | Bold display type; wide letterforms for impactful headlines | [Syne](https://fonts.google.com/specimen/Syne) |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Instrument Serif 400 | DM Sans 400 | Editorial sophistication, gallery-like refinement |
| Syne 700 | DM Sans 400 | Bold creative energy, studio/agency feel |
| Caveat 700 + Syne 600 (mixed) | Space Grotesk 400 | Playful layered collage, workshop aesthetic |
| Instrument Serif 400 | Space Grotesk 400 | Balanced contrast, modern editorial |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Instrument+Serif&family=Space+Grotesk:wght@400;500;700&family=Caveat:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--mm-charcoal);
  -webkit-font-smoothing: antialiased;
}

h1, h2 {
  font-family: 'Instrument Serif', Georgia, serif;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h3, h4 {
  font-family: 'Syne', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.annotation, .handwritten {
  font-family: 'Caveat', cursive;
  font-weight: 400;
  font-size: 1.2em;
}

nav, .label, .meta {
  font-family: 'Space Grotesk', monospace;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
```

---

## Layout Principles

- **Layered planes** -- Compose layouts as stacked transparent planes; foreground content, mid-ground imagery, and background textures each occupy distinct depth levels managed through z-index and opacity
- **Asymmetric grid with breakouts** -- Use a baseline grid for structure but allow key elements (images, illustrations, 3D objects) to break out of column boundaries and overlap adjacent content
- **Overlapping containers** -- Cards, image frames, and text blocks intentionally overlap by 10-30%, creating visual collisions that unify disparate content areas
- **Mixed-scale elements** -- Combine full-bleed photography with small inset illustrations, oversized display type with compact body text, and large 3D shapes with fine linework
- **Organic flow over rigid structure** -- Content areas follow a loose reading path guided by visual weight rather than strict top-to-bottom linear order
- **Generous but shaped negative space** -- White space is not empty; it is sculpted by the irregular edges of layered elements and functions as a compositional element
- **Viewport-aware depth** -- On larger screens, leverage wide compositions with horizontal layering; on smaller screens, stack layers vertically while maintaining overlap and textural depth
- **Scroll-triggered reveals** -- Layer elements that enter the viewport at staggered intervals, building the composition progressively as the user scrolls
- **Anchor zones** -- Despite the layered complexity, establish clear anchor points (hero headline, primary CTA, section starts) where the eye can rest and orient
- **Edge bleeding** -- Allow photographic and illustrative elements to extend beyond their containers and bleed off-screen, implying the composition extends beyond the visible frame
- **Textural backgrounds** -- Base layers carry subtle grain, paper textures, or noise that unify the entire page and prevent the sterile flatness of pure digital backgrounds

---

## CSS / Design Techniques

### Layered Card

```css
.mm-card {
  background: var(--mm-cloud);
  border-radius: 4px;
  padding: 32px 28px;
  max-width: 480px;
  position: relative;
  box-shadow:
    0 2px 8px rgba(44, 44, 46, 0.08),
    0 12px 32px rgba(44, 44, 46, 0.06);
  overflow: visible;
}

/* Torn-paper texture edge along the top */
.mm-card::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  right: 0;
  height: 12px;
  background: var(--mm-cloud);
  clip-path: polygon(
    0% 60%, 3% 20%, 6% 70%, 10% 30%, 14% 65%, 18% 15%,
    22% 55%, 26% 25%, 30% 70%, 34% 10%, 38% 60%, 42% 35%,
    46% 75%, 50% 20%, 54% 60%, 58% 30%, 62% 70%, 66% 15%,
    70% 55%, 74% 40%, 78% 65%, 82% 20%, 86% 50%, 90% 30%,
    94% 70%, 97% 25%, 100% 60%, 100% 100%, 0% 100%
  );
}

/* Illustrative accent stroke -- simulates a hand-drawn underline */
.mm-card::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 15%;
  width: 70%;
  height: 3px;
  background: var(--mm-terracotta);
  border-radius: 2px;
  transform: rotate(-0.5deg);
  opacity: 0.7;
}

/* Floating annotation label */
.mm-card .annotation {
  position: absolute;
  top: -18px;
  right: 24px;
  font-family: 'Caveat', cursive;
  font-size: 1rem;
  color: var(--mm-terracotta);
  transform: rotate(-3deg);
}

/* Overlapping image layer within card */
.mm-card .card-image {
  width: 110%;
  margin-left: -5%;
  margin-top: -48px;
  border-radius: 2px;
  mix-blend-mode: multiply;
  filter: grayscale(20%) contrast(1.05);
}
```

### Mixed Media Button

```css
.mm-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--mm-charcoal);
  color: var(--mm-cloud);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Layered texture overlay on the button surface */
.mm-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.03) 4px,
    rgba(255, 255, 255, 0.03) 5px
  );
  pointer-events: none;
}

/* Hand-drawn circle accent */
.mm-button::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -12px;
  width: 28px;
  height: 28px;
  border: 2px solid var(--mm-terracotta);
  border-radius: 50%;
  transform: translateY(-50%) rotate(5deg);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.mm-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(44, 44, 46, 0.2);
}

.mm-button:hover::after {
  opacity: 1;
}

/* Secondary variant with warm accent */
.mm-button--warm {
  background: var(--mm-terracotta);
  color: var(--mm-cloud);
}

.mm-button--outline {
  background: transparent;
  color: var(--mm-charcoal);
  border: 2px solid var(--mm-charcoal);
}
```

### Navigation Bar

```css
.mm-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: var(--mm-canvas);
  position: relative;
  z-index: 100;
}

/* Subtle textured border replacing hard line */
.mm-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--mm-terracotta) 0%,
    var(--mm-ochre) 25%,
    var(--mm-sage) 50%,
    var(--mm-slate) 75%,
    var(--mm-plum) 100%
  );
  opacity: 0.6;
}

.mm-nav__logo {
  font-family: 'Instrument Serif', serif;
  font-size: 1.5rem;
  color: var(--mm-charcoal);
  text-decoration: none;
  position: relative;
}

/* Handwritten annotation next to logo */
.mm-nav__logo::after {
  content: 'studio';
  font-family: 'Caveat', cursive;
  font-size: 0.75rem;
  color: var(--mm-terracotta);
  position: absolute;
  top: -8px;
  right: -30px;
  transform: rotate(-5deg);
}

.mm-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mm-nav__links a {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--mm-ink);
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

/* Illustrative underline on hover -- wavy, not straight */
.mm-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--mm-terracotta);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  border-radius: 1px;
}

.mm-nav__links a:hover {
  color: var(--mm-terracotta);
}

.mm-nav__links a:hover::after {
  transform: scaleX(1);
}
```

### Hero Section

```css
.mm-hero {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 60px 40px;
  background: var(--mm-canvas);
  position: relative;
  overflow: hidden;
}

/* Base grain texture across hero */
.mm-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.mm-hero__content {
  position: relative;
  z-index: 10;
  padding-right: 40px;
}

.mm-hero__title {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 1.05;
  color: var(--mm-charcoal);
  margin-bottom: 24px;
}

/* Highlight span within title -- color wash effect */
.mm-hero__title .highlight {
  position: relative;
  white-space: nowrap;
}

.mm-hero__title .highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: -4px;
  right: -4px;
  height: 35%;
  background: var(--mm-ochre);
  opacity: 0.3;
  z-index: -1;
  transform: rotate(-1deg);
  border-radius: 2px;
}

.mm-hero__subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--mm-ink);
  max-width: 440px;
  margin-bottom: 32px;
}

/* Layered image composition area */
.mm-hero__media {
  position: relative;
  height: 100%;
  min-height: 500px;
}

/* Primary photographic layer */
.mm-hero__media .photo-layer {
  position: absolute;
  top: 5%;
  left: 10%;
  width: 75%;
  height: 70%;
  object-fit: cover;
  border-radius: 2px;
  filter: contrast(1.05) saturate(0.9);
  z-index: 2;
}

/* Illustrative overlay layer */
.mm-hero__media .illustration-layer {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 60%;
  mix-blend-mode: multiply;
  opacity: 0.7;
  z-index: 3;
}

/* 3D element floating layer */
.mm-hero__media .shape-layer {
  position: absolute;
  bottom: 10%;
  left: -5%;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--mm-terracotta), var(--mm-ochre));
  border-radius: 50%;
  mix-blend-mode: overlay;
  z-index: 4;
  animation: float-shape 6s ease-in-out infinite;
}

@keyframes float-shape {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-16px) rotate(8deg); }
}

/* Scattered annotation */
.mm-hero__media .annotation {
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  color: var(--mm-terracotta);
  transform: rotate(-4deg);
  z-index: 5;
}
```

### Blend Mode Image Stack

```css
.mm-image-stack {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 4px;
}

/* Base photographic layer */
.mm-image-stack__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* Color wash overlay for chromatic unification */
.mm-image-stack__wash {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(192, 96, 61, 0.25),
    rgba(91, 122, 148, 0.2)
  );
  mix-blend-mode: overlay;
  z-index: 2;
}

/* Illustrative texture layer */
.mm-image-stack__texture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  opacity: 0.35;
  z-index: 3;
}

/* Grain overlay for analog feel */
.mm-image-stack__grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.08'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 4;
}
```

### Collage Section Layout

```css
.mm-collage-section {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 0;
  padding: 80px 40px;
  position: relative;
  background: var(--mm-canvas);
}

/* Large featured image spanning columns */
.mm-collage-section__feature {
  grid-column: 1 / 8;
  grid-row: 1 / 3;
  position: relative;
  z-index: 2;
}

.mm-collage-section__feature img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.85) contrast(1.08);
}

/* Overlapping text block */
.mm-collage-section__text {
  grid-column: 6 / 13;
  grid-row: 2 / 4;
  background: var(--mm-cloud);
  padding: 48px 40px;
  z-index: 3;
  position: relative;
  box-shadow: -8px 0 32px rgba(44, 44, 46, 0.06);
}

/* Illustrative accent element breaking the grid */
.mm-collage-section__accent {
  grid-column: 10 / 13;
  grid-row: 1 / 2;
  z-index: 4;
  transform: translate(-20px, 30px) rotate(5deg);
  mix-blend-mode: multiply;
  opacity: 0.6;
}

/* Small detail image overlapping the main feature */
.mm-collage-section__detail {
  grid-column: 2 / 5;
  grid-row: 3 / 4;
  z-index: 5;
  transform: translateY(-40px);
  border: 4px solid var(--mm-cloud);
  box-shadow: 0 4px 16px rgba(44, 44, 46, 0.1);
}

.mm-collage-section__detail img {
  width: 100%;
  display: block;
  mix-blend-mode: normal;
  filter: grayscale(30%);
}
```

### Duotone Photo Treatment

```css
.mm-duotone {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.mm-duotone img {
  display: block;
  width: 100%;
  filter: grayscale(100%) contrast(1.1);
  mix-blend-mode: darken;
}

/* Shadow tone (dark color) */
.mm-duotone::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--mm-plum);
  mix-blend-mode: lighten;
  z-index: 1;
}

/* Highlight tone (light color) */
.mm-duotone::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--mm-ochre);
  mix-blend-mode: multiply;
  z-index: 2;
  opacity: 0.6;
}
```

### Floating 3D Shape Accent

```css
.mm-shape {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--mm-slate),
    var(--mm-lavender)
  );
  box-shadow:
    inset -8px -8px 16px rgba(0, 0, 0, 0.15),
    inset 8px 8px 16px rgba(255, 255, 255, 0.2),
    0 8px 24px rgba(91, 122, 148, 0.3);
  mix-blend-mode: overlay;
  opacity: 0.7;
  z-index: 10;
  pointer-events: none;
  animation: mm-float 8s ease-in-out infinite;
}

.mm-shape--small {
  width: 48px;
  height: 48px;
  animation-duration: 6s;
  animation-delay: -2s;
}

.mm-shape--large {
  width: 180px;
  height: 180px;
  animation-duration: 10s;
  animation-delay: -4s;
}

.mm-shape--torus {
  border-radius: 50%;
  background: transparent;
  border: 16px solid var(--mm-terracotta);
  box-shadow:
    inset 0 0 12px rgba(192, 96, 61, 0.3),
    0 6px 20px rgba(192, 96, 61, 0.2);
  opacity: 0.5;
}

@keyframes mm-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-12px) rotate(4deg);
  }
  66% {
    transform: translateY(6px) rotate(-3deg);
  }
}
```

---

## Design Do's and Don'ts

### Do's

- **Layer with intention** -- Every overlapping element should serve a compositional purpose; depth, contrast, narrative, or visual rhythm
- **Preserve medium identity** -- Let photographs look photographic, illustrations look hand-drawn, and 3D renders look three-dimensional; the collision of identifiable mediums creates the energy
- **Use blend modes to unify** -- Apply multiply, overlay, screen, and soft-light blending to create color interactions that tie disparate elements into a cohesive palette
- **Add analog texture** -- Incorporate grain, noise, paper texture, visible brushstrokes, or scanned material edges to counterbalance digital precision and signal human touch
- **Shape negative space deliberately** -- The gaps between layered elements are compositional tools; sculpt them to guide the eye and provide breathing room
- **Establish clear anchor points** -- Despite the layered complexity, ensure the viewer always has a clear entry point and primary focal area
- **Iterate through addition and subtraction** -- Build compositions by adding layers, then selectively remove or reduce opacity on elements that compete without contributing
- **Test at multiple viewports** -- Layered compositions can become chaotic or lose their depth at different screen sizes; verify the overlap relationships at every breakpoint

### Don'ts

- **Don't layer without hierarchy** -- Piling elements without establishing foreground, mid-ground, and background creates visual mud rather than rich depth
- **Don't use blend modes indiscriminately** -- Every blend mode interaction should be evaluated for its effect on color, contrast, and readability; accidental results often degrade the composition
- **Don't abandon legibility** -- Text that interacts with imagery through blending or overlap must remain readable; test against all background variations
- **Don't homogenize mediums** -- If all elements are processed to look the same (same filter, same color treatment, same texture), the cross-medium collision that defines the aesthetic is lost
- **Don't ignore performance** -- Multiple layered images, blend modes, and high-resolution textures carry real performance costs; optimize assets and test load times
- **Don't force symmetry** -- Mixed Media compositions thrive on asymmetric balance; rigid symmetry undermines the organic, collage-derived energy of the aesthetic
- **Don't use pure white or pure black backgrounds** -- Warm neutrals, cream, parchment, and off-whites provide a more appropriate surface that harmonizes with layered elements

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Dadaism** | Historical ancestor; Dada's collage and photomontage techniques laid the groundwork, though Mixed Media favors controlled composition over anarchic disorder |
| **Cluttercore** | Shares the density and layered maximalism, but Cluttercore celebrates accumulation for its own sake while Mixed Media curates its collisions |
| **Maximalism** | Both embrace visual richness and reject minimalist restraint; Mixed Media adds the specific dimension of cross-medium material blending |
| **Graffiti Pop** | Shares the street-art sensibility of mixing drawn, painted, and photographic elements in raw, energetic compositions |
| **Corporate Grunge** | Applies deliberate textural roughness to polished layouts; a more restrained, commercially-oriented cousin of Mixed Media layering |
| **DIY Punk** | Shares the cut-and-paste, handmade collage language; Mixed Media refines the rawness into more controlled, editorial-quality compositions |
| **Surrealism** | Both blend photographic reality with impossible or fantastical elements; Surrealism uses dream logic while Mixed Media uses material contrast |
| **Glassmorphism** | Shares the interest in layered transparency and depth, though Glassmorphism achieves this through a single medium (frosted glass) rather than cross-medium collision |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mixed Media Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Instrument+Serif&family=Space+Grotesk:wght@400;500;700&family=Caveat:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       RESET & CUSTOM PROPERTIES
       ============================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --mm-canvas: #F5F0E8;
      --mm-charcoal: #2C2C2E;
      --mm-ink: #3A3A3C;
      --mm-rose: #C4858A;
      --mm-terracotta: #C0603D;
      --mm-ochre: #D4A95A;
      --mm-sage: #7A9E7E;
      --mm-slate: #5B7A94;
      --mm-plum: #5C3A5E;
      --mm-parchment: #D9CEBC;
      --mm-coral: #E8725A;
      --mm-fog: #B8B4AD;
      --mm-lavender: #A698B8;
      --mm-umber: #6B5744;
      --mm-cloud: #FAFAF7;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      color: var(--mm-charcoal);
      background: var(--mm-canvas);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* ============================================
       GRAIN OVERLAY (global analog texture)
       ============================================ */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 48px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(245, 240, 232, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .nav::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        var(--mm-terracotta),
        var(--mm-ochre),
        var(--mm-sage),
        var(--mm-slate),
        var(--mm-plum)
      );
      opacity: 0.5;
    }

    .nav__logo {
      font-family: 'Instrument Serif', serif;
      font-size: 1.5rem;
      color: var(--mm-charcoal);
      position: relative;
    }

    .nav__logo .script {
      font-family: 'Caveat', cursive;
      font-size: 0.8rem;
      color: var(--mm-terracotta);
      position: absolute;
      top: -10px;
      right: -36px;
      transform: rotate(-6deg);
    }

    .nav__links {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--mm-ink);
      position: relative;
      transition: color 0.2s ease;
    }

    .nav__links a::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--mm-terracotta);
      border-radius: 1px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    .nav__links a:hover {
      color: var(--mm-terracotta);
    }

    .nav__links a:hover::after {
      transform: scaleX(1);
    }

    /* ============================================
       HERO SECTION
       ============================================ */
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 120px 48px 80px;
      position: relative;
      overflow: hidden;
    }

    .hero__content {
      position: relative;
      z-index: 10;
      padding-right: 48px;
    }

    .hero__label {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--mm-terracotta);
      margin-bottom: 16px;
    }

    .hero__title {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(2.8rem, 5.5vw, 5rem);
      line-height: 1.05;
      color: var(--mm-charcoal);
      margin-bottom: 24px;
    }

    .hero__title .highlight {
      position: relative;
      white-space: nowrap;
    }

    .hero__title .highlight::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: -6px;
      right: -6px;
      height: 35%;
      background: var(--mm-ochre);
      opacity: 0.3;
      z-index: -1;
      transform: rotate(-1deg);
      border-radius: 2px;
    }

    .hero__text {
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--mm-ink);
      max-width: 420px;
      margin-bottom: 36px;
    }

    .hero__cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 32px;
      background: var(--mm-charcoal);
      color: var(--mm-cloud);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hero__cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(44, 44, 46, 0.2);
    }

    .hero__cta .arrow {
      transition: transform 0.3s ease;
    }

    .hero__cta:hover .arrow {
      transform: translateX(4px);
    }

    /* --- Hero media composition --- */
    .hero__media {
      position: relative;
      height: 100%;
      min-height: 520px;
    }

    .hero__photo {
      position: absolute;
      top: 8%;
      left: 8%;
      width: 72%;
      height: 65%;
      background: var(--mm-parchment);
      border-radius: 2px;
      overflow: hidden;
      z-index: 2;
      box-shadow: 0 8px 32px rgba(44, 44, 46, 0.12);
    }

    .hero__photo-inner {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        var(--mm-parchment) 0%,
        var(--mm-fog) 50%,
        var(--mm-slate) 100%
      );
      filter: contrast(1.05) saturate(0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Caveat', cursive;
      font-size: 1.2rem;
      color: var(--mm-ink);
      opacity: 0.5;
    }

    .hero__illustration {
      position: absolute;
      top: -2%;
      right: 2%;
      width: 55%;
      height: 55%;
      z-index: 3;
      mix-blend-mode: multiply;
      opacity: 0.6;
    }

    .hero__illustration-inner {
      width: 100%;
      height: 100%;
      background: repeating-conic-gradient(
        var(--mm-terracotta) 0% 25%,
        transparent 0% 50%
      ) 50% / 30px 30px;
      opacity: 0.3;
      border-radius: 4px;
    }

    /* Floating 3D shapes */
    .hero__shape {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 4;
    }

    .hero__shape--1 {
      bottom: 12%;
      left: -4%;
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, var(--mm-terracotta), var(--mm-ochre));
      box-shadow:
        inset -6px -6px 12px rgba(0, 0, 0, 0.15),
        inset 6px 6px 12px rgba(255, 255, 255, 0.2),
        0 6px 20px rgba(192, 96, 61, 0.3);
      mix-blend-mode: overlay;
      opacity: 0.7;
      animation: float-a 7s ease-in-out infinite;
    }

    .hero__shape--2 {
      top: 4%;
      left: 55%;
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--mm-sage), var(--mm-slate));
      box-shadow:
        inset -3px -3px 8px rgba(0, 0, 0, 0.12),
        inset 3px 3px 8px rgba(255, 255, 255, 0.15),
        0 4px 12px rgba(122, 158, 126, 0.25);
      opacity: 0.6;
      animation: float-b 5s ease-in-out infinite;
    }

    .hero__shape--3 {
      bottom: 25%;
      right: 5%;
      width: 64px;
      height: 64px;
      background: transparent;
      border: 10px solid var(--mm-plum);
      box-shadow:
        inset 0 0 8px rgba(92, 58, 94, 0.25),
        0 4px 16px rgba(92, 58, 94, 0.2);
      opacity: 0.5;
      animation: float-a 9s ease-in-out infinite -3s;
    }

    .hero__annotation {
      position: absolute;
      bottom: 8%;
      right: 8%;
      font-family: 'Caveat', cursive;
      font-size: 1rem;
      color: var(--mm-terracotta);
      transform: rotate(-5deg);
      z-index: 5;
    }

    @keyframes float-a {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-14px) rotate(6deg); }
    }

    @keyframes float-b {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      33% { transform: translateY(-8px) rotate(-4deg); }
      66% { transform: translateY(4px) rotate(3deg); }
    }

    /* ============================================
       ABOUT / COLLAGE SECTION
       ============================================ */
    .collage-section {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 0;
      padding: 100px 48px;
      position: relative;
    }

    .collage-section__feature {
      grid-column: 1 / 7;
      grid-row: 1 / 3;
      position: relative;
      z-index: 2;
      border-radius: 2px;
      overflow: hidden;
      min-height: 400px;
    }

    .collage-section__feature-inner {
      width: 100%;
      height: 100%;
      min-height: 400px;
      background: linear-gradient(
        160deg,
        var(--mm-slate) 0%,
        var(--mm-plum) 60%,
        var(--mm-umber) 100%
      );
      filter: saturate(0.8) contrast(1.05);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Caveat', cursive;
      color: var(--mm-cloud);
      font-size: 1.1rem;
      opacity: 0.6;
    }

    .collage-section__text {
      grid-column: 6 / 13;
      grid-row: 2 / 4;
      background: var(--mm-cloud);
      padding: 48px 44px;
      z-index: 3;
      position: relative;
      box-shadow: -6px 0 24px rgba(44, 44, 46, 0.06);
    }

    .collage-section__text h2 {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(2rem, 3.5vw, 3rem);
      line-height: 1.1;
      color: var(--mm-charcoal);
      margin-bottom: 20px;
    }

    .collage-section__text p {
      font-size: 1rem;
      line-height: 1.75;
      color: var(--mm-ink);
      max-width: 480px;
    }

    .collage-section__text p + p {
      margin-top: 16px;
    }

    .collage-section__accent {
      grid-column: 10 / 13;
      grid-row: 1 / 2;
      z-index: 4;
      transform: translate(-24px, 40px) rotate(6deg);
      opacity: 0.5;
    }

    .collage-section__accent-inner {
      width: 100%;
      aspect-ratio: 1;
      background: repeating-linear-gradient(
        45deg,
        var(--mm-terracotta) 0px,
        var(--mm-terracotta) 2px,
        transparent 2px,
        transparent 10px
      );
      border-radius: 2px;
      mix-blend-mode: multiply;
    }

    /* ============================================
       CARDS SECTION
       ============================================ */
    .cards-section {
      padding: 80px 48px;
      position: relative;
    }

    .cards-section__header {
      text-align: center;
      margin-bottom: 56px;
    }

    .cards-section__header h2 {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(2rem, 3vw, 2.8rem);
      color: var(--mm-charcoal);
      margin-bottom: 12px;
    }

    .cards-section__header p {
      font-family: 'Caveat', cursive;
      font-size: 1.2rem;
      color: var(--mm-terracotta);
      transform: rotate(-1deg);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .card {
      background: var(--mm-cloud);
      border-radius: 4px;
      overflow: visible;
      position: relative;
      box-shadow:
        0 2px 8px rgba(44, 44, 46, 0.07),
        0 12px 28px rgba(44, 44, 46, 0.05);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow:
        0 4px 12px rgba(44, 44, 46, 0.1),
        0 20px 40px rgba(44, 44, 46, 0.08);
    }

    /* Torn-paper top edge */
    .card::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 0;
      right: 0;
      height: 10px;
      background: var(--mm-cloud);
      clip-path: polygon(
        0% 55%, 4% 20%, 8% 65%, 13% 30%, 18% 70%, 23% 15%,
        28% 55%, 33% 35%, 38% 70%, 43% 20%, 48% 60%, 53% 30%,
        58% 75%, 63% 15%, 68% 50%, 73% 35%, 78% 65%, 83% 20%,
        88% 55%, 93% 30%, 97% 60%, 100% 40%, 100% 100%, 0% 100%
      );
      z-index: 1;
    }

    .card__image {
      width: 100%;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      position: relative;
    }

    .card__image-inner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Caveat', cursive;
      color: var(--mm-cloud);
      opacity: 0.5;
    }

    .card:nth-child(1) .card__image-inner {
      background: linear-gradient(135deg, var(--mm-terracotta), var(--mm-ochre));
    }

    .card:nth-child(2) .card__image-inner {
      background: linear-gradient(135deg, var(--mm-slate), var(--mm-sage));
    }

    .card:nth-child(3) .card__image-inner {
      background: linear-gradient(135deg, var(--mm-plum), var(--mm-rose));
    }

    /* Color wash overlay on card images */
    .card__image::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(192, 96, 61, 0.15),
        rgba(91, 122, 148, 0.1)
      );
      mix-blend-mode: overlay;
      pointer-events: none;
    }

    .card__body {
      padding: 28px 24px 32px;
    }

    .card__tag {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--mm-terracotta);
      margin-bottom: 10px;
    }

    .card__title {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.3;
      color: var(--mm-charcoal);
      margin-bottom: 10px;
    }

    .card__text {
      font-size: 0.92rem;
      line-height: 1.65;
      color: var(--mm-ink);
    }

    /* Annotation on hovered card */
    .card__annotation {
      position: absolute;
      top: -16px;
      right: 20px;
      font-family: 'Caveat', cursive;
      font-size: 0.9rem;
      color: var(--mm-terracotta);
      transform: rotate(-4deg);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover .card__annotation {
      opacity: 1;
    }

    /* ============================================
       CTA BAND
       ============================================ */
    .cta-band {
      padding: 80px 48px;
      background: var(--mm-charcoal);
      color: var(--mm-cloud);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    /* Textural cross-hatch pattern */
    .cta-band::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 8px,
        rgba(255, 255, 255, 0.015) 8px,
        rgba(255, 255, 255, 0.015) 9px
      );
      pointer-events: none;
    }

    .cta-band h2 {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1.15;
      margin-bottom: 16px;
      position: relative;
    }

    .cta-band p {
      font-size: 1.05rem;
      color: var(--mm-fog);
      max-width: 500px;
      margin: 0 auto 32px;
      position: relative;
    }

    .cta-band__button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 36px;
      background: var(--mm-terracotta);
      color: var(--mm-cloud);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-band__button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(192, 96, 61, 0.35);
    }

    /* ============================================
       FOOTER
       ============================================ */
    .footer {
      padding: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--mm-fog);
    }

    .footer__brand {
      font-family: 'Instrument Serif', serif;
      font-size: 1.2rem;
      color: var(--mm-charcoal);
    }

    .footer__links {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    .footer__links a {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--mm-ink);
      transition: color 0.2s ease;
    }

    .footer__links a:hover {
      color: var(--mm-terracotta);
    }

    .footer__note {
      font-family: 'Caveat', cursive;
      font-size: 0.95rem;
      color: var(--mm-fog);
      transform: rotate(-2deg);
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 900px) {
      .nav {
        padding: 16px 24px;
      }

      .nav__links {
        gap: 20px;
      }

      .hero {
        grid-template-columns: 1fr;
        padding: 120px 24px 60px;
        min-height: auto;
      }

      .hero__content {
        padding-right: 0;
        margin-bottom: 48px;
      }

      .hero__media {
        min-height: 360px;
      }

      .collage-section {
        grid-template-columns: 1fr;
        padding: 60px 24px;
        gap: 24px;
      }

      .collage-section__feature {
        grid-column: 1 / -1;
        grid-row: auto;
      }

      .collage-section__text {
        grid-column: 1 / -1;
        grid-row: auto;
        box-shadow: none;
      }

      .collage-section__accent {
        display: none;
      }

      .cards-section {
        padding: 60px 24px;
      }

      .cards-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .cta-band {
        padding: 60px 24px;
      }

      .footer {
        flex-direction: column;
        gap: 20px;
        text-align: center;
        padding: 36px 24px;
      }
    }

    @media (max-width: 600px) {
      .nav__links a {
        font-size: 0.7rem;
      }

      .hero__title {
        font-size: 2.2rem;
      }

      .hero__photo {
        width: 85%;
        left: 4%;
      }

      .hero__illustration {
        width: 50%;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__logo">
      Mixed Media
      <span class="script">studio</span>
    </a>
    <ul class="nav__links">
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#journal">Journal</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero__content">
      <p class="hero__label">Photography + Illustration + 3D</p>
      <h1 class="hero__title">
        Where Mediums<br>
        <span class="highlight">Collide</span>
      </h1>
      <p class="hero__text">
        We layer photography, illustration, and three-dimensional form
        into compositions that feel alive with creative friction --
        authentic, textured, and unmistakably human.
      </p>
      <button class="hero__cta">
        Explore the Work <span class="arrow">&rarr;</span>
      </button>
    </div>

    <div class="hero__media">
      <!-- Primary photographic layer -->
      <div class="hero__photo">
        <div class="hero__photo-inner">[photograph layer]</div>
      </div>
      <!-- Illustrative overlay -->
      <div class="hero__illustration">
        <div class="hero__illustration-inner"></div>
      </div>
      <!-- Floating 3D shapes -->
      <div class="hero__shape hero__shape--1"></div>
      <div class="hero__shape hero__shape--2"></div>
      <div class="hero__shape hero__shape--3"></div>
      <!-- Handwritten annotation -->
      <span class="hero__annotation">layers upon layers &darr;</span>
    </div>
  </section>

  <!-- Collage Section -->
  <section class="collage-section" id="about">
    <div class="collage-section__feature">
      <div class="collage-section__feature-inner">[featured image]</div>
    </div>
    <div class="collage-section__text">
      <h2>Controlled Collision</h2>
      <p>
        Mixed Media design is built on the deliberate tension between
        mediums. A photograph grounds the viewer in reality. An
        illustration drawn over it adds narrative, warmth, and the
        unmistakable trace of a human hand. A 3D shape floating
        alongside both introduces dimension and futurism.
      </p>
      <p>
        The result is work that refuses to be categorized -- layered
        compositions where each element retains its native character
        while contributing to something greater than any single
        medium could achieve alone.
      </p>
    </div>
    <div class="collage-section__accent">
      <div class="collage-section__accent-inner"></div>
    </div>
  </section>

  <!-- Cards Section -->
  <section class="cards-section" id="work">
    <div class="cards-section__header">
      <h2>Selected Projects</h2>
      <p>hover to reveal the layers</p>
    </div>
    <div class="cards-grid">
      <div class="card">
        <span class="card__annotation">photo + vector</span>
        <div class="card__image">
          <div class="card__image-inner">[project image]</div>
        </div>
        <div class="card__body">
          <p class="card__tag">Editorial</p>
          <h3 class="card__title">Analog Futures</h3>
          <p class="card__text">
            A layered editorial series blending archival photography
            with geometric vector overlays and hand-drawn annotations.
          </p>
        </div>
      </div>

      <div class="card">
        <span class="card__annotation">3D + illustration</span>
        <div class="card__image">
          <div class="card__image-inner">[project image]</div>
        </div>
        <div class="card__body">
          <p class="card__tag">Branding</p>
          <h3 class="card__title">Material Worlds</h3>
          <p class="card__text">
            Brand identity system combining rendered 3D forms with
            loose brushwork and textured paper backgrounds.
          </p>
        </div>
      </div>

      <div class="card">
        <span class="card__annotation">cross-medium</span>
        <div class="card__image">
          <div class="card__image-inner">[project image]</div>
        </div>
        <div class="card__body">
          <p class="card__tag">Campaign</p>
          <h3 class="card__title">Tangible Digital</h3>
          <p class="card__text">
            Campaign visuals fusing product photography with collage
            textures, duotone washes, and floating sculptural accents.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section class="cta-band" id="contact">
    <h2>Let's Build<br>Something Layered</h2>
    <p>
      Every great composition starts with a first layer.
      Reach out and we will begin stacking.
    </p>
    <button class="cta-band__button">
      Start a Project <span>&rarr;</span>
    </button>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <span class="footer__brand">Mixed Media Studio</span>
    <ul class="footer__links">
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Behance</a></li>
      <li><a href="#">Dribbble</a></li>
    </ul>
    <span class="footer__note">made by hand + machine</span>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Optimize layered assets aggressively** -- Multiple overlapping images and blend mode compositions are render-intensive; compress photographs to WebP, use SVG for illustrative overlays, and keep grain textures as lightweight inline SVG or CSS patterns rather than raster images
- **Use CSS `mix-blend-mode` over image-editor blending** -- Applying blend modes in CSS keeps compositions responsive, editable, and performant; reserve pre-composited raster images only for complex interactions that CSS cannot replicate
- **Establish a z-index scale early** -- With many overlapping layers, z-index management becomes critical; define a clear scale (e.g., background 0-10, mid-ground 11-20, foreground 21-30, UI 100+) and document it
- **Test blend modes across browsers** -- While `mix-blend-mode` and `background-blend-mode` enjoy broad support, rendering can vary subtly between engines; verify critical compositions in Chrome, Firefox, and Safari
- **Use `will-change` sparingly for animated layers** -- Floating 3D shapes and parallax elements benefit from `will-change: transform` for GPU acceleration, but applying it to too many elements can increase memory consumption
- **Provide meaningful fallbacks** -- When blend modes or backdrop-filter are not supported, ensure the composition degrades gracefully; stacked layers without blending should still maintain visual hierarchy and readability
- **Keep body text out of blend mode zones** -- Running text should sit in a clean, unblended layer with solid or semi-opaque backgrounds to guarantee readability across all compositions
- **Audit the composition at 1x and 2x density** -- Grain textures, thin illustrative lines, and subtle blend mode interactions can appear very different on standard-density versus retina displays; verify visual fidelity at both
