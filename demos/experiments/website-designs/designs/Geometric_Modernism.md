# Geometric Modernism Design Reference

## Overview

Geometric Modernism is a design aesthetic rooted in the conviction that pure geometric forms -- circles, squares, triangles, lines, and their mathematically derived compounds -- constitute a universal visual language capable of transcending cultural and linguistic boundaries. Drawing from the foundational work of the Bauhaus school (1919--1933), the De Stijl movement (1917--1931), Russian Constructivism, and the Swiss International Typographic Style, Geometric Modernism distills design to its most elemental components: strong shapes, primary colors, and compositions governed by mathematical precision rather than intuition or ornament.

Where the original Bauhaus and De Stijl movements were tied to specific historical contexts and ideological programs, Geometric Modernism represents their enduring synthesis -- an applied philosophy that treats geometry as the backbone of visual communication. The aesthetic inherits Piet Mondrian's restriction to primary colors and orthogonal grids, Wassily Kandinsky's color-shape correspondences (yellow-triangle, red-square, blue-circle), Theo van Doesburg's dynamic diagonal compositions, and Paul Renner's geometric typeface Futura (1927), which rejected historicist letterforms in favor of shapes built from near-perfect circles, triangles, and straight lines.

In contemporary web and interface design, Geometric Modernism manifests as bold, grid-locked layouts with uncompromising structural clarity. Color palettes center on the three primaries -- red, yellow, and blue -- anchored by black and white, with secondary and tertiary hues used sparingly and deliberately. Typography is geometric sans-serif: Futura, its digital descendants, or Google Fonts equivalents like Jost and Poppins. Every element snaps to an underlying modular grid; whitespace is treated as an active compositional force, not empty leftovers. The resulting designs communicate authority, intellectual rigor, and a crystalline rationality that feels both timeless and decisively modern. There is no room for ambiguity, sentimentality, or decorative excess -- every pixel earns its place through functional and geometric justification.

---

## Visual Characteristics

### Core Design Traits

- **Bold primary geometry** -- circles, squares, triangles, and rectangles are the fundamental building blocks; all visual elements derive from these archetypal forms
- **Primary color dominance** -- red, yellow, and blue command the palette, used in flat, unmodulated fills with maximum chromatic intensity
- **Mathematical grid structure** -- strict modular grids (12-column, 6-column, or golden-ratio) govern every element's placement and proportion
- **Thick black strokes and rules** -- heavy 3--6px lines define boundaries, separate sections, and reinforce the structural skeleton of the layout
- **Flat, unshaded color fields** -- no gradients, drop shadows, or depth simulation; each shape is a solid, confident block of color
- **Geometric sans-serif typography** -- letterforms constructed from circles, straight lines, and uniform stroke widths; Futura-inspired faces dominate
- **Asymmetric dynamic balance** -- compositions achieve equilibrium through calculated weight distribution rather than mirror symmetry
- **High-contrast figure/ground relationships** -- shapes read instantly against their backgrounds; ambiguity is eliminated through stark tonal opposition
- **Overlapping and intersecting forms** -- geometric shapes layer and cross to create depth and compositional energy without violating flatness
- **Diagonal and angular compositions** -- tilted elements and converging lines inject kinetic energy into otherwise static geometric arrangements
- **Type as graphic element** -- headlines are treated as visual shapes equal in compositional weight to geometric forms and color blocks
- **Deliberate negative space** -- whitespace is an active, calculated component of the design, not an absence of content

### Design Principles

- **Reduce to fundamentals** -- strip every composition to its essential geometric vocabulary; if an element cannot be justified, remove it
- **Form follows function** -- the purpose of each element dictates its shape, size, color, and position; decoration is eliminated
- **Universal visual language** -- rely on geometric shapes and primary colors that communicate across cultures and languages
- **Rational composition** -- every design decision must be logically defensible; intuition gives way to mathematical order
- **Honest materiality** -- do not simulate depth, texture, or material that does not exist; the digital surface is flat, and the design acknowledges this
- **Dynamic equilibrium** -- achieve visual balance through asymmetric tension rather than static symmetry; create energy within order
- **Grid as architecture** -- the underlying modular grid is the structural backbone; elements align to grid intersections and proportional divisions
- **Color carries meaning** -- each primary color serves a distinct functional role; color is not decorative but communicative

---

## Color Palette

The Geometric Modernism palette is anchored in the three primary colors as defined by Kandinsky's Bauhaus color theory and Mondrian's De Stijl compositions: a bold, warm red; a luminous cadmium yellow; and a deep, authoritative blue. These are framed by absolute black and white, with a small range of grays for structural support. The palette resists secondary and tertiary colors -- when they appear, they are deliberate and functionally justified.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#DD0100](https://via.placeholder.com/24/DD0100/DD0100.png) | `#DD0100` | Primary red -- CTAs, active states, square-associated accents |
| ![#B30009](https://via.placeholder.com/24/B30009/B30009.png) | `#B30009` | Deep red -- hover/pressed states for red elements |
| ![#FAC901](https://via.placeholder.com/24/FAC901/FAC901.png) | `#FAC901` | Primary yellow -- highlights, warnings, triangle-associated accents |
| ![#D4A800](https://via.placeholder.com/24/D4A800/D4A800.png) | `#D4A800` | Dark yellow -- hover/pressed states for yellow elements |
| ![#225095](https://via.placeholder.com/24/225095/225095.png) | `#225095` | Primary blue -- links, informational elements, circle-associated accents |
| ![#1A3D72](https://via.placeholder.com/24/1A3D72/1A3D72.png) | `#1A3D72` | Deep blue -- hover/pressed states for blue elements |
| ![#000000](https://via.placeholder.com/24/000000/000000.png) | `#000000` | Pure black -- text, rules, outlines, structural framework |
| ![#1A1A1A](https://via.placeholder.com/24/1A1A1A/1A1A1A.png) | `#1A1A1A` | Near-black -- dark backgrounds, footer surfaces |
| ![#3C3C3C](https://via.placeholder.com/24/3C3C3C/3C3C3C.png) | `#3C3C3C` | Dark gray -- secondary text, muted structural elements |
| ![#B0B0B0](https://via.placeholder.com/24/B0B0B0/B0B0B0.png) | `#B0B0B0` | Medium gray -- borders, dividers, inactive states |
| ![#E8E8E8](https://via.placeholder.com/24/E8E8E8/E8E8E8.png) | `#E8E8E8` | Light gray -- secondary backgrounds, card surfaces |
| ![#F5F5F5](https://via.placeholder.com/24/F5F5F5/F5F5F5.png) | `#F5F5F5` | Off-white -- page backgrounds, content areas |
| ![#FFFFFF](https://via.placeholder.com/24/FFFFFF/FFFFFF.png) | `#FFFFFF` | Pure white -- primary backgrounds, text on dark surfaces |
| ![#FF6B35](https://via.placeholder.com/24/FF6B35/FF6B35.png) | `#FF6B35` | Accent orange -- sparingly used tertiary accent for emphasis |
| ![#2E8B57](https://via.placeholder.com/24/2E8B57/2E8B57.png) | `#2E8B57` | Accent green -- success states, validation feedback only |

### CSS Custom Properties

```css
:root {
  /* Primary colors */
  --gm-red: #DD0100;
  --gm-yellow: #FAC901;
  --gm-blue: #225095;

  /* Hover / active states */
  --gm-red-dark: #B30009;
  --gm-yellow-dark: #D4A800;
  --gm-blue-dark: #1A3D72;

  /* Neutrals */
  --gm-black: #000000;
  --gm-near-black: #1A1A1A;
  --gm-dark-gray: #3C3C3C;
  --gm-medium-gray: #B0B0B0;
  --gm-light-gray: #E8E8E8;
  --gm-off-white: #F5F5F5;
  --gm-white: #FFFFFF;

  /* Functional accents */
  --gm-accent-orange: #FF6B35;
  --gm-accent-green: #2E8B57;

  /* Backgrounds */
  --gm-bg-primary: #FFFFFF;
  --gm-bg-secondary: #F5F5F5;
  --gm-bg-dark: #1A1A1A;
  --gm-bg-accent: #E8E8E8;

  /* Text */
  --gm-text-primary: #000000;
  --gm-text-secondary: #3C3C3C;
  --gm-text-muted: #B0B0B0;
  --gm-text-inverse: #FFFFFF;

  /* Borders */
  --gm-border-heavy: 4px solid #000000;
  --gm-border-medium: 3px solid #000000;
  --gm-border-light: 1px solid #B0B0B0;
}
```

---

## Typography

Geometric Modernism demands typefaces built from geometric primitives -- circles, straight lines, and consistent stroke widths. The archetype is Paul Renner's Futura (1927), designed at the height of the New Typography movement: its lowercase `o` is a near-perfect circle, its `a` and `e` derive from circular arcs, and its uppercase letters are built from triangles and rectangles. Headings are bold, uppercase, tightly tracked, and assertive. Body text is clean, functional, and readable at sustained lengths. The typographic system communicates rationality, precision, and confident modernity.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Jost** | Geometric sans-serif (Futura-inspired) | Headings, display text; closest web equivalent to Futura |
| **Poppins** | Pure geometric sans-serif | Headings, UI elements, buttons |
| **Raleway** | Elegant geometric sans | Display text, lighter-weight headings |
| **DM Sans** | Low-contrast geometric | Body text, UI labels, form elements |
| **Work Sans** | Geometric grotesque | Body text, editorial layouts, paragraphs |
| **Inter** | Humanist with geometric underpinnings | Screen-optimized body text, small sizes |
| **Archivo** | Grotesque with geometric leanings | Versatile headings and body |
| **Barlow** | Slightly condensed geometric | Navigation, labels, compact layouts |
| **Nunito Sans** | Rounded geometric | Softer interpretation; friendly body text |
| **Exo 2** | Geometric with contemporary edge | Tech-oriented headings, data displays |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Jost** (700/900) | **Work Sans** (400) | Authentic Bauhaus-Futura spirit; rigorous and authoritative |
| **Poppins** (700) | **DM Sans** (400) | Clean geometric consistency; approachable precision |
| **Raleway** (600) | **Inter** (400) | Elegant geometry; excellent screen legibility at all sizes |
| **Archivo** (700) | **Work Sans** (400) | Modern grotesque energy; editorial and versatile |
| **Barlow** (700) | **Barlow** (400) | Monofamily condensed efficiency; space-conscious layouts |
| **Jost** (900) | **DM Sans** (400) | Maximum display impact paired with quiet, readable body |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&family=Work+Sans:wght@400;500&display=swap');

/* Base typography */
body {
  font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--gm-text-secondary);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Jost', 'Futura', 'Century Gothic', sans-serif;
  font-weight: 700;
  color: var(--gm-text-primary);
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

/* Display / Hero text */
.gm-display {
  font-family: 'Jost', sans-serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 0.92;
  text-transform: uppercase;
}

/* Subheading */
.gm-subheading {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gm-dark-gray);
}

/* Labels */
.gm-label {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Caption */
.gm-caption {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--gm-dark-gray);
  line-height: 1.5;
}

/* Blockquote */
.gm-quote {
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.2;
  text-transform: uppercase;
  border-left: 6px solid var(--gm-red);
  padding-left: 24px;
}
```

---

## Layout Principles

- **Strict modular grid** -- use a 12-column grid with consistent 24--32px gutters; every element aligns to grid lines and intersections
- **Asymmetric compositions** -- shift content deliberately off-center to create dynamic visual tension; avoid mirror symmetry
- **Thick black rules as spatial dividers** -- 3--6px solid black horizontal and vertical lines separate sections and define compositional zones
- **Max-width containers** -- content constrained to 1100--1200px for optimal readability; wider viewport space becomes active negative space
- **Overlapping geometric elements** -- shapes, type blocks, and color fields overlap at grid intersections to create compositional energy
- **Geometric section boundaries** -- sections may use non-rectangular dividers: diagonal cuts, stepped edges, or triangular intrusions
- **Proportional spacing system** -- all vertical and horizontal spacing derives from a base unit (8px); margins and padding are multiples of this unit
- **Active whitespace** -- negative space is calculated and intentional, not leftover; it creates rhythm and breathing room between geometric elements
- **Color-blocked regions** -- full-width sections alternate between white, primary-color, and dark backgrounds to create visual rhythm
- **Responsive grid collapse** -- multi-column layouts collapse to single-column below 768px while maintaining geometric proportions via viewport units and `clamp()`
- **Viewport-scaled geometry** -- decorative geometric shapes scale proportionally using `vw`/`vh` units to maintain visual weight at all screen sizes
- **Z-index layering** -- geometric accent shapes may sit behind or in front of content via `position: absolute` and `z-index`, creating depth within the flat aesthetic

---

## CSS / Design Techniques

### Card Component

```css
.gm-card {
  background: var(--gm-white);
  border: 3px solid var(--gm-black);
  padding: 32px;
  position: relative;
  transition: transform 0.2s ease;
}

/* Geometric accent -- colored square in top-left corner */
.gm-card::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 36px;
  height: 36px;
  background: var(--gm-red);
}

/* Alternate accent colors */
.gm-card--blue::before { background: var(--gm-blue); }
.gm-card--yellow::before { background: var(--gm-yellow); }

.gm-card:hover {
  transform: translateY(-4px);
}

.gm-card__title {
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: var(--gm-text-primary);
}

.gm-card__body {
  font-size: 0.95rem;
  color: var(--gm-dark-gray);
  line-height: 1.65;
}

.gm-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
```

### Button Component

```css
.gm-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--gm-black);
  color: var(--gm-white);
  border: 3px solid var(--gm-black);
  border-radius: 0;
  padding: 14px 40px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.gm-button:hover {
  background: var(--gm-red);
  border-color: var(--gm-red);
}

/* Primary color variants */
.gm-button--red {
  background: var(--gm-red);
  border-color: var(--gm-red);
}
.gm-button--red:hover {
  background: var(--gm-red-dark);
  border-color: var(--gm-red-dark);
}

.gm-button--blue {
  background: var(--gm-blue);
  border-color: var(--gm-blue);
}
.gm-button--blue:hover {
  background: var(--gm-blue-dark);
  border-color: var(--gm-blue-dark);
}

.gm-button--yellow {
  background: var(--gm-yellow);
  border-color: var(--gm-yellow);
  color: var(--gm-black);
}
.gm-button--yellow:hover {
  background: var(--gm-yellow-dark);
  border-color: var(--gm-yellow-dark);
}

/* Outline variant */
.gm-button--outline {
  background: transparent;
  color: var(--gm-black);
}
.gm-button--outline:hover {
  background: var(--gm-black);
  color: var(--gm-white);
}

/* Small variant */
.gm-button--sm {
  padding: 10px 24px;
  font-size: 0.8rem;
}
```

### Navigation Bar

```css
.gm-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 40px;
  border-bottom: 4px solid var(--gm-black);
}

.gm-nav__logo {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Jost', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--gm-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.gm-nav__logo-shape {
  width: 30px;
  height: 30px;
  background: var(--gm-red);
}

.gm-nav__logo-shape--circle {
  border-radius: 50%;
  background: var(--gm-blue);
}

.gm-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.gm-nav__links a {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--gm-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
  transition: color 0.2s ease;
}

.gm-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--gm-red);
  transition: width 0.2s ease;
}

.gm-nav__links a:hover {
  color: var(--gm-red);
}

.gm-nav__links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .gm-nav {
    padding: 20px 24px;
  }
  .gm-nav__links {
    gap: 18px;
  }
}
```

### Hero Section

```css
.gm-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px;
  gap: 60px;
  position: relative;
  overflow: hidden;
}

.gm-hero__content {
  flex: 1;
  max-width: 560px;
  z-index: 2;
}

.gm-hero__content h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.92;
  margin-bottom: 1.5rem;
}

.gm-hero__content h1 .red { color: var(--gm-red); }
.gm-hero__content h1 .blue { color: var(--gm-blue); }
.gm-hero__content h1 .yellow { color: var(--gm-yellow); }

.gm-hero__content p {
  font-size: 1.15rem;
  color: var(--gm-dark-gray);
  margin-bottom: 2.5rem;
  max-width: 440px;
  line-height: 1.7;
}

.gm-hero__visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

/* Background geometric accent */
.gm-hero::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 300px;
  height: 300px;
  background: var(--gm-yellow);
  opacity: 0.15;
  z-index: 0;
  transform: rotate(15deg);
}

@media (max-width: 768px) {
  .gm-hero {
    flex-direction: column;
    text-align: center;
    padding: 60px 24px;
    gap: 40px;
  }
  .gm-hero__content p {
    margin-left: auto;
    margin-right: auto;
  }
}
```

### Feature Grid Section

```css
.gm-features {
  background: var(--gm-bg-secondary);
  padding: 80px 0;
  border-top: 4px solid var(--gm-black);
  border-bottom: 4px solid var(--gm-black);
}

.gm-features__header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px 56px;
}

.gm-features__header h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
}

.gm-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.gm-feature {
  background: var(--gm-white);
  border: 3px solid var(--gm-black);
  padding: 32px;
  position: relative;
}

.gm-feature__shape {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
}

.gm-feature__shape--circle {
  background: var(--gm-blue);
  border-radius: 50%;
}

.gm-feature__shape--square {
  background: var(--gm-red);
}

.gm-feature__shape--triangle {
  width: 0;
  height: 0;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-bottom: 48px solid var(--gm-yellow);
  background: transparent;
}

.gm-feature h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.gm-feature p {
  font-size: 0.95rem;
  color: var(--gm-dark-gray);
  line-height: 1.65;
}
```

### Geometric Composition Block

```css
.gm-composition {
  position: relative;
  width: 400px;
  height: 400px;
}

.gm-composition__circle {
  position: absolute;
  width: 180px;
  height: 180px;
  background: var(--gm-blue);
  border-radius: 50%;
  top: 20px;
  right: 30px;
}

.gm-composition__square {
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--gm-red);
  bottom: 40px;
  left: 10px;
}

.gm-composition__triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid var(--gm-yellow);
  top: 160px;
  left: 140px;
}

.gm-composition__line-h {
  position: absolute;
  height: 4px;
  width: 320px;
  background: var(--gm-black);
  top: 200px;
  left: 40px;
}

.gm-composition__line-v {
  position: absolute;
  width: 4px;
  height: 280px;
  background: var(--gm-black);
  top: 60px;
  left: 200px;
}

.gm-composition__line-d {
  position: absolute;
  height: 4px;
  width: 260px;
  background: var(--gm-black);
  transform: rotate(-20deg);
  top: 300px;
  left: 80px;
}
```

### Mondrian Grid Section

```css
.gm-mondrian {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 200px 120px 160px;
  gap: 4px;
  background: var(--gm-black);
  border: 4px solid var(--gm-black);
  max-width: 800px;
  margin: 0 auto;
}

.gm-mondrian__cell {
  background: var(--gm-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.gm-mondrian__cell--red { background: var(--gm-red); color: var(--gm-white); }
.gm-mondrian__cell--blue { background: var(--gm-blue); color: var(--gm-white); }
.gm-mondrian__cell--yellow { background: var(--gm-yellow); color: var(--gm-black); }
.gm-mondrian__cell--span-rows { grid-row: span 2; }
.gm-mondrian__cell--span-cols { grid-column: span 2; }
```

### Statement / Manifesto Banner

```css
.gm-statement {
  background: var(--gm-red);
  color: var(--gm-white);
  text-align: center;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}

.gm-statement h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: var(--gm-white);
}

.gm-statement p {
  font-size: 1.2rem;
  max-width: 540px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  line-height: 1.7;
}

/* Decorative circle behind text */
.gm-statement::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.gm-statement .gm-button {
  background: var(--gm-white);
  color: var(--gm-red);
  border-color: var(--gm-white);
}

.gm-statement .gm-button:hover {
  background: var(--gm-black);
  color: var(--gm-white);
  border-color: var(--gm-black);
}
```

---

## Design Do's and Don'ts

### Do

- **Use primary colors decisively** -- red, yellow, and blue should dominate the chromatic palette; use them in bold, flat fills
- **Build from geometric primitives** -- circles, squares, triangles, and straight lines are your entire formal vocabulary
- **Employ thick black rules** -- heavy 3--6px strokes define structure, separate sections, and reinforce the grid skeleton
- **Choose geometric sans-serif typefaces** -- Futura-inspired fonts (Jost, Poppins) for headings; clean geometric faces for body text
- **Maintain strict grid alignment** -- every element should snap to the underlying modular grid, even in asymmetric compositions
- **Treat typography as graphic form** -- headlines are shapes; use dramatic scale contrast, uppercase, and tight tracking
- **Use active whitespace** -- calculate negative space as deliberately as positive space; it is a compositional element
- **Create asymmetric balance** -- achieve equilibrium through weight distribution, not mirror symmetry

### Don't

- **Use gradients, drop shadows, or blur effects** -- these violate the flat, honest surface; all fills must be solid
- **Apply ornamental decoration** -- no flourishes, serif typefaces, or decorative borders; every element must be functional
- **Use soft, pastel, or muted palettes** -- Geometric Modernism demands high-saturation primaries and stark black/white contrast
- **Create perfectly symmetrical layouts** -- static mirror symmetry is inert; dynamic asymmetry is the goal
- **Add rounded corners** -- sharp right angles define the aesthetic (circles are full circles, not rounded rectangles)
- **Introduce photographic imagery without geometric treatment** -- photos must be masked, clipped, or framed by geometric shapes
- **Mix too many secondary or tertiary colors** -- the palette is deliberately constrained; straying beyond primaries weakens the system
- **Ignore the grid** -- randomness and freeform placement contradict the mathematical precision that defines Geometric Modernism

---

## Related Aesthetics

| Aesthetic | Relationship to Geometric Modernism |
|-----------|-------------------------------------|
| **Bauhaus** | Direct ancestor; Geometric Modernism inherits its shape-color theory, grid discipline, and "form follows function" philosophy |
| **De Stijl** | Foundational influence; Mondrian's primary-color, grid-locked compositions are a core reference for the entire aesthetic |
| **Constructivism** | Parallel avant-garde; shares the integration of art and industry with bold geometric compositions and propagandistic energy |
| **Swiss International Style** | Direct successor; formalized the Bauhaus grid and sans-serif typography into a systematic, objective design methodology |
| **Flat Design** | Digital descendant; applies Geometric Modernism's flat-color, geometric, function-first principles to modern UI design |
| **Minimalism** | Philosophical sibling; shares the reductive impulse but takes it further, often eliminating color and shape variety |
| **Material Design** | Google's system borrows grid discipline and flat color but reintroduces shadow and motion for hierarchy |
| **Neubrutalism** | Shares bold graphic presence and raw honesty but deliberately violates Modernist refinement with roughness and irony |
| **Memphis Design** | Postmodern reaction against Geometric Modernism; deliberately breaks every rule with pattern, decoration, and pastels |
| **Op Art** | Geometric sibling; uses precise geometric patterns but pursues optical illusion and perceptual effects rather than clarity |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geometric Modernism</title>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&family=Work+Sans:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Primary colors */
      --gm-red: #DD0100;
      --gm-yellow: #FAC901;
      --gm-blue: #225095;

      /* Hover states */
      --gm-red-dark: #B30009;
      --gm-yellow-dark: #D4A800;
      --gm-blue-dark: #1A3D72;

      /* Neutrals */
      --gm-black: #000000;
      --gm-near-black: #1A1A1A;
      --gm-dark-gray: #3C3C3C;
      --gm-medium-gray: #B0B0B0;
      --gm-light-gray: #E8E8E8;
      --gm-off-white: #F5F5F5;
      --gm-white: #FFFFFF;
    }

    /* =============================================
       RESET & BASE
    ============================================= */

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--gm-white);
      color: var(--gm-black);
      font-family: 'Work Sans', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Jost', 'Futura', 'Century Gothic', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.05;
      letter-spacing: -0.01em;
    }

    a { color: inherit; }
    img { max-width: 100%; display: block; }

    /* =============================================
       NAVIGATION
    ============================================= */

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 40px;
      border-bottom: 4px solid var(--gm-black);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 14px;
      font-family: 'Jost', sans-serif;
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--gm-black);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .logo-mark {
      display: flex;
      gap: 4px;
      align-items: flex-end;
    }

    .logo-mark .sq {
      width: 14px;
      height: 14px;
      background: var(--gm-red);
    }

    .logo-mark .ci {
      width: 14px;
      height: 14px;
      background: var(--gm-blue);
      border-radius: 50%;
    }

    .logo-mark .tr {
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 14px solid var(--gm-yellow);
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Jost', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      color: var(--gm-black);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      position: relative;
      transition: color 0.2s;
    }

    nav ul a::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 3px;
      background: var(--gm-red);
      transition: width 0.25s ease;
    }

    nav ul a:hover { color: var(--gm-red); }
    nav ul a:hover::after { width: 100%; }

    /* =============================================
       HERO
    ============================================= */

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 100px 40px;
      gap: 60px;
      position: relative;
    }

    .hero-content {
      flex: 1;
      max-width: 560px;
      z-index: 2;
    }

    .hero h1 {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      line-height: 0.92;
    }

    .hero h1 .red { color: var(--gm-red); }
    .hero h1 .blue { color: var(--gm-blue); }
    .hero h1 .yellow { color: var(--gm-yellow); }

    .hero p {
      font-size: 1.15rem;
      color: var(--gm-dark-gray);
      margin-bottom: 2.5rem;
      max-width: 440px;
    }

    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* =============================================
       BUTTONS
    ============================================= */

    .btn {
      display: inline-block;
      background: var(--gm-black);
      color: var(--gm-white);
      border: 3px solid var(--gm-black);
      padding: 14px 40px;
      font-family: 'Jost', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }

    .btn:hover {
      background: var(--gm-red);
      border-color: var(--gm-red);
    }

    .btn--outline {
      background: transparent;
      color: var(--gm-black);
    }

    .btn--outline:hover {
      background: var(--gm-black);
      color: var(--gm-white);
    }

    .btn--blue {
      background: var(--gm-blue);
      border-color: var(--gm-blue);
    }

    .btn--blue:hover {
      background: var(--gm-blue-dark);
      border-color: var(--gm-blue-dark);
    }

    .btn-group {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    /* =============================================
       DIVIDER
    ============================================= */

    .divider {
      max-width: 1200px;
      margin: 0 auto;
      height: 4px;
      background: var(--gm-black);
    }

    /* =============================================
       FEATURES
    ============================================= */

    .features {
      background: var(--gm-off-white);
      padding: 80px 0;
      border-top: 4px solid var(--gm-black);
      border-bottom: 4px solid var(--gm-black);
    }

    .features-header {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px 56px;
    }

    .features-header h2 {
      font-size: 2.5rem;
    }

    .features-header p {
      margin-top: 12px;
      color: var(--gm-dark-gray);
      max-width: 540px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .feature {
      background: var(--gm-white);
      border: 3px solid var(--gm-black);
      padding: 32px;
      position: relative;
    }

    /* Corner geometric accent */
    .feature::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      width: 32px;
      height: 32px;
    }

    .feature:nth-child(3n+1)::before { background: var(--gm-red); }
    .feature:nth-child(3n+2)::before { background: var(--gm-blue); }
    .feature:nth-child(3n+3)::before { background: var(--gm-yellow); }

    .feature .shape {
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
    }

    .shape-circle {
      background: var(--gm-blue);
      border-radius: 50%;
    }

    .shape-square {
      background: var(--gm-red);
    }

    .shape-triangle {
      width: 0 !important;
      height: 0 !important;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 48px solid var(--gm-yellow);
      background: transparent !important;
    }

    .feature h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    .feature p {
      color: var(--gm-dark-gray);
      font-size: 0.95rem;
      line-height: 1.65;
    }

    /* =============================================
       MONDRIAN GRID
    ============================================= */

    .mondrian-section {
      padding: 80px 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .mondrian-section h2 {
      font-size: 2.5rem;
      margin-bottom: 48px;
    }

    .mondrian-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 180px 100px 140px;
      gap: 4px;
      background: var(--gm-black);
      border: 4px solid var(--gm-black);
    }

    .m-cell {
      background: var(--gm-white);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: 'Jost', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .m-cell--red {
      background: var(--gm-red);
      color: var(--gm-white);
      grid-row: span 2;
    }

    .m-cell--blue {
      background: var(--gm-blue);
      color: var(--gm-white);
    }

    .m-cell--yellow {
      background: var(--gm-yellow);
      color: var(--gm-black);
      grid-column: span 2;
    }

    .m-cell--tall {
      grid-row: span 2;
    }

    .m-cell--wide {
      grid-column: span 2;
    }

    /* =============================================
       STATEMENT BANNER
    ============================================= */

    .statement {
      background: var(--gm-blue);
      color: var(--gm-white);
      text-align: center;
      padding: 100px 40px;
      position: relative;
      overflow: hidden;
    }

    .statement::before {
      content: '';
      position: absolute;
      width: 320px;
      height: 320px;
      border: 4px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .statement::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border: 4px solid rgba(255, 255, 255, 0.08);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      pointer-events: none;
    }

    .statement h2 {
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: var(--gm-white);
      position: relative;
      z-index: 1;
    }

    .statement p {
      font-size: 1.2rem;
      max-width: 520px;
      margin: 0 auto 2.5rem;
      opacity: 0.9;
      position: relative;
      z-index: 1;
    }

    .statement .btn {
      background: var(--gm-white);
      color: var(--gm-blue);
      border-color: var(--gm-white);
      position: relative;
      z-index: 1;
    }

    .statement .btn:hover {
      background: var(--gm-black);
      color: var(--gm-white);
      border-color: var(--gm-black);
    }

    /* =============================================
       PRINCIPLES LIST
    ============================================= */

    .principles {
      padding: 80px 0;
      border-bottom: 4px solid var(--gm-black);
    }

    .principles-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }

    .principles h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .principles p.lead {
      color: var(--gm-dark-gray);
      font-size: 1.1rem;
      line-height: 1.7;
    }

    .principles-list {
      list-style: none;
      counter-reset: principle;
    }

    .principles-list li {
      counter-increment: principle;
      padding: 20px 0;
      border-bottom: 2px solid var(--gm-light-gray);
      display: flex;
      gap: 20px;
      align-items: baseline;
    }

    .principles-list li::before {
      content: counter(principle, decimal-leading-zero);
      font-family: 'Jost', sans-serif;
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--gm-red);
      flex-shrink: 0;
    }

    .principles-list li strong {
      font-family: 'Jost', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    /* =============================================
       COLOR BLOCKS ROW
    ============================================= */

    .color-row {
      display: flex;
      border-top: 4px solid var(--gm-black);
      border-bottom: 4px solid var(--gm-black);
    }

    .color-block {
      flex: 1;
      padding: 60px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .color-block--red { background: var(--gm-red); color: var(--gm-white); }
    .color-block--yellow { background: var(--gm-yellow); color: var(--gm-black); }
    .color-block--blue { background: var(--gm-blue); color: var(--gm-white); }

    .color-block h3 {
      font-size: 1.3rem;
      margin-bottom: 8px;
      color: inherit;
    }

    .color-block p {
      font-size: 0.95rem;
      opacity: 0.85;
      line-height: 1.6;
    }

    /* =============================================
       FOOTER
    ============================================= */

    footer {
      background: var(--gm-near-black);
      color: var(--gm-medium-gray);
      border-top: 4px solid var(--gm-black);
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 40px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
    }

    .footer-brand .logo {
      color: var(--gm-white);
      margin-bottom: 16px;
    }

    .footer-brand p {
      font-size: 0.9rem;
      line-height: 1.6;
      max-width: 280px;
    }

    .footer-col h4 {
      font-family: 'Jost', sans-serif;
      font-size: 0.85rem;
      color: var(--gm-white);
      margin-bottom: 16px;
      letter-spacing: 0.06em;
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 8px;
    }

    .footer-col ul a {
      font-size: 0.85rem;
      color: var(--gm-medium-gray);
      text-decoration: none;
      transition: color 0.2s;
    }

    .footer-col ul a:hover {
      color: var(--gm-white);
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 40px;
      border-top: 1px solid var(--gm-dark-gray);
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
    }

    /* =============================================
       RESPONSIVE
    ============================================= */

    @media (max-width: 768px) {
      nav { padding: 20px 24px; }
      nav ul { gap: 16px; }

      .hero {
        flex-direction: column;
        text-align: center;
        padding: 60px 24px;
        gap: 40px;
      }

      .hero p {
        margin-left: auto;
        margin-right: auto;
      }

      .features-header { padding: 0 24px 40px; }
      .features-grid { padding: 0 24px; }

      .mondrian-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
      }

      .m-cell--tall { grid-row: auto; }
      .m-cell--wide { grid-column: auto; }

      .principles-inner {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 0 24px;
      }

      .color-row {
        flex-direction: column;
      }

      .footer-inner {
        grid-template-columns: 1fr 1fr;
        padding: 40px 24px;
      }

      .statement { padding: 60px 24px; }
    }

    @media (max-width: 480px) {
      nav ul { gap: 12px; }
      nav ul a { font-size: 0.75rem; }

      .footer-inner { grid-template-columns: 1fr; }

      .mondrian-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- NAVIGATION -->
  <nav>
    <a href="#" class="logo">
      <span class="logo-mark">
        <span class="sq"></span>
        <span class="ci"></span>
        <span class="tr"></span>
      </span>
      Geometrik
    </a>
    <ul>
      <li><a href="#principles">Principles</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#manifesto">Manifesto</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <h1><span class="red">Shape.</span> <span class="blue">Color.</span> <span class="yellow">Order.</span></h1>
      <p>Design reduced to geometric essence. Every circle, every square, every line exists because mathematics and function demand it.</p>
      <div class="btn-group">
        <a href="#" class="btn">Explore</a>
        <a href="#" class="btn btn--outline">Learn More</a>
      </div>
    </div>
    <div class="hero-visual">
      <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Blue circle -->
        <circle cx="210" cy="110" r="95" fill="#225095"/>
        <!-- Red square -->
        <rect x="30" y="190" width="150" height="150" fill="#DD0100"/>
        <!-- Yellow triangle -->
        <polygon points="250,370 330,210 410,370" fill="#FAC901"/>
        <!-- Structural lines -->
        <line x1="10" y1="180" x2="370" y2="180" stroke="#000000" stroke-width="4"/>
        <line x1="190" y1="10" x2="190" y2="370" stroke="#000000" stroke-width="4"/>
        <!-- Diagonal -->
        <line x1="40" y1="340" x2="340" y2="60" stroke="#000000" stroke-width="3"/>
        <!-- Small accent circle -->
        <circle cx="320" cy="320" r="30" fill="none" stroke="#000000" stroke-width="3"/>
      </svg>
    </div>
  </section>

  <div class="divider"></div>

  <!-- FEATURES -->
  <section class="features">
    <div class="features-header">
      <h2>Foundations</h2>
      <p>Three shapes. Three colors. Infinite compositions built on mathematical precision.</p>
    </div>
    <div class="features-grid">
      <div class="feature">
        <div class="shape shape-circle"></div>
        <h3>Unity</h3>
        <p>Art and technology united into a single discipline. Design that serves industry without sacrificing geometric beauty.</p>
      </div>
      <div class="feature">
        <div class="shape shape-square"></div>
        <h3>Function</h3>
        <p>Every element justified by purpose. Ornament is eliminated; only honest, rational structure remains.</p>
      </div>
      <div class="feature">
        <div class="shape shape-triangle"></div>
        <h3>Precision</h3>
        <p>Circle, square, triangle. The universal geometric vocabulary reduced to its mathematical fundamentals.</p>
      </div>
      <div class="feature">
        <div class="shape shape-circle"></div>
        <h3>Balance</h3>
        <p>Asymmetric equilibrium through calculated weight distribution. Dynamic tension within ordered composition.</p>
      </div>
      <div class="feature">
        <div class="shape shape-square"></div>
        <h3>Grid</h3>
        <p>The modular grid is architecture. Every pixel aligns to the structural backbone of mathematical proportion.</p>
      </div>
      <div class="feature">
        <div class="shape shape-triangle"></div>
        <h3>Clarity</h3>
        <p>Communication without distraction. The message speaks through form, not decoration or embellishment.</p>
      </div>
    </div>
  </section>

  <!-- COLOR ROW -->
  <section class="color-row">
    <div class="color-block color-block--red">
      <h3>Red / Square</h3>
      <p>Energy, physicality, action. The commanding warmth of pure red anchors the material world.</p>
    </div>
    <div class="color-block color-block--yellow">
      <h3>Yellow / Triangle</h3>
      <p>Light, intellect, sharpness. Yellow radiates outward with angular, penetrating intensity.</p>
    </div>
    <div class="color-block color-block--blue">
      <h3>Blue / Circle</h3>
      <p>Depth, spirit, infinity. Blue recedes into contemplative, circular completeness.</p>
    </div>
  </section>

  <!-- MONDRIAN GRID -->
  <section class="mondrian-section">
    <h2>Composition</h2>
    <div class="mondrian-grid">
      <div class="m-cell m-cell--red">Structure</div>
      <div class="m-cell">Form</div>
      <div class="m-cell m-cell--blue">Rhythm</div>
      <div class="m-cell">Balance</div>
      <div class="m-cell m-cell--yellow">Proportion</div>
      <div class="m-cell">Tension</div>
      <div class="m-cell">Harmony</div>
      <div class="m-cell">Order</div>
      <div class="m-cell">Grid</div>
    </div>
  </section>

  <!-- PRINCIPLES -->
  <section class="principles" id="principles">
    <div class="principles-inner">
      <div>
        <h2>Principles</h2>
        <p class="lead">Geometric Modernism is not a style to be applied. It is a discipline to be practiced -- a commitment to rational beauty through mathematical order and chromatic honesty.</p>
      </div>
      <ol class="principles-list">
        <li><strong>Reduce</strong> -- strip to geometric essentials; if it cannot be justified, eliminate it</li>
        <li><strong>Construct</strong> -- build from circles, squares, and triangles; compound forms emerge from primitives</li>
        <li><strong>Align</strong> -- every element snaps to the grid; mathematical precision governs placement</li>
        <li><strong>Balance</strong> -- achieve dynamic equilibrium through asymmetry, not mirror reflection</li>
        <li><strong>Color</strong> -- red, yellow, blue, black, white; each hue carries functional meaning</li>
        <li><strong>Communicate</strong> -- the design speaks through clarity, not decoration or excess</li>
      </ol>
    </div>
  </section>

  <!-- STATEMENT -->
  <section class="statement" id="manifesto">
    <h2>Less Decoration. More Geometry.</h2>
    <p>Every pixel is a decision. Every shape is a statement. Geometric Modernism demands that design earn its existence through mathematical precision and functional honesty.</p>
    <a href="#" class="btn">Read the Manifesto</a>
  </section>

  <!-- FOOTER -->
  <footer id="contact">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="#" class="logo">
          <span class="logo-mark">
            <span class="sq"></span>
            <span class="ci"></span>
            <span class="tr"></span>
          </span>
          Geometrik
        </a>
        <p>Design built on geometric fundamentals. Circles, squares, triangles, and primary colors -- nothing more, nothing less.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="#">Principles</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Manifesto</a></li>
          <li><a href="#">Archive</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Style Guide</a></li>
          <li><a href="#">Grid System</a></li>
          <li><a href="#">Color Theory</a></li>
          <li><a href="#">Typography</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Dribbble</a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Built on geometric principles.</span>
      <span>Shape. Color. Order.</span>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the grid** -- define your column structure and base spacing unit (8px multiples) before placing any content; the grid is the architectural foundation from which all decisions follow
- **Limit your palette ruthlessly** -- resist the temptation to add colors beyond the primaries, black, and white; chromatic discipline is what gives Geometric Modernism its visual authority
- **Use CSS custom properties** -- define all colors, border weights, and spacing values as custom properties so the entire design system can be tuned from a single location
- **Test geometric shapes at all breakpoints** -- SVG and CSS shapes must scale proportionally; use `clamp()`, viewport units, and `aspect-ratio` to maintain geometric precision on every screen size
- **Favor `border` over `box-shadow`** -- thick solid borders are a defining characteristic; shadows violate the flat, honest surface principle
- **Pair heading and body fonts from the same geometric family** -- consistency in geometric construction (Jost + Work Sans, Poppins + DM Sans) reinforces the aesthetic's rational unity
- **Use `text-transform: uppercase` and tight `letter-spacing` for headings** -- this transforms type into visual blocks that function as geometric elements within the composition
- **Validate against the grid constantly** -- use browser dev tools' grid overlay or CSS Grid's `outline` debugging technique to ensure every element aligns; a single misaligned pixel undermines the entire system's credibility
