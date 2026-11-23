# Color Block Design Reference

## Overview

Color Block is a bold, graphic-driven design aesthetic built on the principle of dividing compositions into large, flat, saturated areas of solid color separated by crisp, hard edges. Rooted in the De Stijl movement of the early twentieth century -- most iconically in Piet Mondrian's grid-based paintings of primary-colored rectangles bounded by thick black lines -- Color Block translates geometric abstraction into a powerful web and graphic design language. The aesthetic strips away gradients, textures, shadows, and photographic complexity in favor of pure, unmodulated hue: each section of the layout is a single, confident slab of color that anchors content and communicates hierarchy through chromatic contrast alone.

In web design, Color Block emerged alongside the flat design revolution of the early 2010s, when designers moved away from skeuomorphic drop shadows and glossy buttons toward clean, two-dimensional interfaces. Color Block takes flat design further by making color itself the primary structural and decorative element. Rather than relying on whitespace or subtle gray borders to separate content areas, a Color Block layout uses dramatic shifts in background hue -- a crimson hero flowing into a cobalt feature section flowing into a sunflower-yellow testimonial band -- to create unmistakable visual division. The result is high-energy, immediately legible, and inherently responsive: solid color panels scale to any viewport without losing fidelity or requiring high-resolution image assets.

The technique is especially effective for brand-forward sites, product landing pages, and portfolio presentations where visual impact matters more than photographic realism. It draws on principles from color theory -- complementary contrast, analogous harmony, triadic balance -- and translates them into layout decisions. Typography in Color Block design is typically bold, geometric, and sans-serif, set in white or black directly against the saturated background for maximum readability. Interactive elements like buttons and cards inherit the surrounding block's color logic, using inverted or accent colors for hover states. When executed well, a Color Block page feels like a walk through a modern art gallery: each scroll reveals a new panel of decisive color, creating rhythm, surprise, and a sense of purposeful composition that makes the content feel curated and intentional.

---

## Visual Characteristics

### Core Design Traits

- **Large solid-color panels** -- entire viewport sections are filled with a single flat, saturated hue, creating bold horizontal (or vertical) bands of color that define the page structure
- **Hard edges and crisp boundaries** -- transitions between color areas are immediate and sharp with no gradients, feathering, or blending; each block meets the next at a clean line
- **Mondrian-influenced grid geometry** -- layouts reference Piet Mondrian's compositions of rectangles divided by strong black lines, using primary and secondary colors in asymmetric but balanced arrangements
- **Flat, textureless surfaces** -- backgrounds are pure solid fills with no noise, grain, pattern, or photographic texture; the color itself is the entire visual statement
- **High saturation and chromatic confidence** -- colors are pushed to full or near-full saturation rather than muted, pastel, or desaturated; the palette is unapologetically vivid
- **Stark figure-ground contrast** -- white or black typography and icons sit directly on saturated backgrounds, creating immediate legibility through maximum value contrast
- **Geometric content containers** -- cards, panels, buttons, and sections are sharp-cornered rectangles or squares; rounded corners and organic shapes are avoided
- **Minimal decorative elements** -- the color blocks themselves are the decoration; icons, illustrations, and images are used sparingly and only to support content
- **Color as wayfinding** -- different sections of the page are identifiable by their color, creating an intuitive color-coded navigation and information hierarchy
- **Edge-to-edge fills** -- color blocks extend to the full width of the viewport with no outer margins, maximizing the immersive impact of each hue
- **Rhythmic color sequencing** -- the order of colors down the page follows a deliberate rhythm (e.g., warm-cool-warm or dark-light-dark) to create visual flow and prevent monotony
- **Reduced imagery** -- photography and illustration take a back seat to color; when images appear, they are often contained within or overlapping color blocks

### Design Principles

- Each color block should serve a clear structural purpose: hero, features, testimonials, call-to-action -- color is the section divider
- Limit the active palette to three to five dominant colors plus black and white; too many colors dilute the boldness that defines the aesthetic
- Contrast is non-negotiable: every text element must meet WCAG AA or AAA contrast ratios against its background block
- Balance warm and cool colors across the page to prevent visual fatigue; alternate hue temperatures between adjacent sections
- Let color do the heavy lifting -- resist the urge to add borders, shadows, or gradients; the flat fill is the design
- Use asymmetric but intentional proportions when dividing space into sub-blocks; reference Mondrian's unequal rectangles rather than uniform grids
- White and black are colors too -- use them as full blocks to provide visual rest between saturated sections
- On smaller screens, maintain the color block identity by stacking panels vertically rather than shrinking them; each block should still feel like a decisive slab of color

---

## Color Palette

Color Block design demands a palette of saturated, confident hues that can stand alone as full-panel backgrounds. The palette draws from Mondrian's primary triad (red, yellow, blue) expanded with contemporary web-friendly secondaries and a strong neutral axis of black, white, and graphite. Each color must be bold enough to fill an entire viewport section while maintaining text legibility.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Mondrian Red** | `#E63946` | Primary accent block, hero backgrounds, call-to-action sections |
| **Primary Blue** | `#1D3557` | Deep anchor block, navigation bars, footer backgrounds |
| **Sunflower Yellow** | `#FFD60A` | Energy block, highlight sections, attention-grabbing panels |
| **Cobalt Blue** | `#2A6FDB` | Feature sections, secondary information blocks, link accents |
| **Pure White** | `#FFFFFF` | Breathing-space blocks, text on dark panels, clean separators |
| **Jet Black** | `#111111` | Typography on light blocks, dramatic dark panels, dividing lines |
| **Emerald Green** | `#2DC653` | Success states, tertiary accent blocks, freshness panels |
| **Hot Coral** | `#FF6B6B` | Secondary accent, hover states, warm-toned feature blocks |
| **Deep Violet** | `#7B2D8E` | Premium or creative sections, card accents, bold variation |
| **Tangerine** | `#FF8C42` | Warm accent blocks, secondary CTAs, energetic panels |
| **Slate Gray** | `#4A4E69` | Subdued text blocks, metadata, secondary content backgrounds |
| **Ivory** | `#F8F7F2` | Soft neutral block alternative to pure white, warm breathing space |
| **Teal** | `#0B8A8A` | Cool accent sections, complementary to coral and tangerine |
| **Charcoal** | `#2B2D42` | Dark block alternative to jet black, sophisticated dark panels |
| **Blush Pink** | `#F4ACB7` | Soft accent, lighter variation block for feminine or gentle contexts |

### CSS Custom Properties

```css
:root {
  /* Primary blocks */
  --cb-red: #e63946;
  --cb-blue-deep: #1d3557;
  --cb-yellow: #ffd60a;
  --cb-blue-cobalt: #2a6fdb;

  /* Neutrals */
  --cb-white: #ffffff;
  --cb-black: #111111;
  --cb-ivory: #f8f7f2;
  --cb-charcoal: #2b2d42;
  --cb-slate: #4a4e69;

  /* Secondary accents */
  --cb-green: #2dc653;
  --cb-coral: #ff6b6b;
  --cb-violet: #7b2d8e;
  --cb-tangerine: #ff8c42;
  --cb-teal: #0b8a8a;
  --cb-blush: #f4acb7;

  /* Functional */
  --cb-text-on-dark: #ffffff;
  --cb-text-on-light: #111111;
  --cb-divider-color: #111111;
  --cb-divider-width: 4px;
  --cb-block-padding: clamp(40px, 6vw, 80px);
  --cb-transition: 0.3s ease;

  /* Shadows (used sparingly -- flat is the default) */
  --cb-shadow-subtle: 0 2px 0 rgba(0, 0, 0, 0.1);
  --cb-shadow-card: 0 4px 0 rgba(0, 0, 0, 0.15);

  /* Typography scale */
  --cb-font-display: clamp(3rem, 7vw, 6rem);
  --cb-font-heading: clamp(1.8rem, 4vw, 3rem);
  --cb-font-subheading: clamp(1.2rem, 2vw, 1.5rem);
  --cb-font-body: 1rem;
  --cb-font-small: 0.85rem;
}
```

---

## Typography

Color Block typography must be as bold and decisive as the color panels it sits on. The ideal typefaces are geometric sans-serifs with uniform stroke widths, strong vertical and horizontal stress, and a confident, architectural presence. Display text is oversized and often uppercase, leveraging the flat color background as a stage. Body text is clean and highly legible, relying on contrast against the background hue rather than decorative styling. Weight contrast is a primary tool: heavy 700-900 headings paired with regular 400 body text create hierarchy without additional ornamentation.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Montserrat** | Geometric sans, wide weight range | Headlines, subheadings, versatile across all contexts |
| **Inter** | Clean grotesque sans | Body text, UI labels, maximum readability |
| **Bebas Neue** | Condensed uppercase display | Hero headlines, dramatic oversized titles |
| **Poppins** | Geometric, rounded terminals | Subheadings, body text, friendly geometric feel |
| **Archivo Black** | Ultra-bold grotesque | Maximum impact display, section titles |
| **Space Grotesk** | Geometric, contemporary | Headings, navigation, tech-forward layouts |
| **Outfit** | Modern geometric sans | Body text, clean and readable at all sizes |
| **Sora** | Geometric, modern variable | Headlines, UI elements, contemporary feel |
| **DM Sans** | Clean geometric | Small text, captions, metadata |
| **Oswald** | Condensed sans-serif | Section labels, uppercase navigation, compact headings |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Bebas Neue** (400) | **Inter** (400) | Bold Mondrian-gallery feel, maximum contrast |
| **Montserrat** (800) | **DM Sans** (400) | Clean geometric harmony, versatile and modern |
| **Archivo Black** (400) | **Outfit** (400) | Ultra-bold poster aesthetic, strong and direct |
| **Space Grotesk** (700) | **Inter** (400) | Contemporary tech-forward, architectural clarity |
| **Oswald** (600) | **Poppins** (400) | Condensed editorial energy, structured and readable |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

/* Headings -- bold, geometric, uppercase */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.0;
  text-transform: uppercase;
}

/* Display / Hero text */
.cb-display {
  font-family: 'Bebas Neue', sans-serif;
  font-size: var(--cb-font-display);
  letter-spacing: 0.03em;
  line-height: 0.92;
  text-transform: uppercase;
}

/* Display text color variants */
.cb-display--light {
  color: var(--cb-text-on-dark);
}

.cb-display--dark {
  color: var(--cb-text-on-light);
}

/* Section heading */
.cb-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: var(--cb-font-heading);
  letter-spacing: 0.03em;
  line-height: 1.05;
  text-transform: uppercase;
  margin-bottom: 24px;
}

/* Body text */
body {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: var(--cb-font-body);
  line-height: 1.7;
  color: var(--cb-black);
}

/* Body text on dark blocks */
.text-on-dark {
  color: rgba(255, 255, 255, 0.9);
}

/* Body text on light blocks */
.text-on-light {
  color: var(--cb-charcoal);
}

/* Label / Eyebrow */
.cb-label {
  font-family: 'Inter', sans-serif;
  font-size: var(--cb-font-small);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Small / Caption */
.cb-caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.75;
}
```

---

## Layout Principles

- **Full-width color bands** -- every major section spans the full viewport width with no outer margins; the color block is the section container, filling edge to edge
- **Stacked horizontal sections** -- the primary layout pattern is a vertical sequence of full-width color blocks, each a different hue, creating a bold striped rhythm as the user scrolls
- **Mondrian sub-grids** -- within a section, content can be arranged in asymmetric grid cells inspired by Mondrian compositions, using CSS Grid with unequal column and row tracks
- **No gutters between blocks** -- adjacent color blocks sit flush against each other with zero spacing; the color change itself is the visual separator
- **Generous internal padding** -- while blocks have no external margins, they contain generous inner padding (48-96px vertical, 5-10% horizontal) to give content room to breathe against the saturated background
- **Color-coded content hierarchy** -- each functional section (hero, features, testimonials, CTA) is assigned its own block color, making the page scannable by color
- **Viewport-height hero sections** -- the opening hero block spans `min-height: 100vh` for a full-screen color immersion; subsequent blocks can be shorter
- **Alternating value rhythm** -- dark and light blocks alternate to prevent adjacent saturated hues from clashing and to give the eye periodic rest
- **Asymmetric internal grids** -- when subdividing a block into multiple content areas, use 2:1 or 3:2 column ratios rather than equal splits, referencing Mondrian's proportional logic
- **Thick black dividers (optional)** -- for a more explicitly Mondrian-inspired look, use 3-6px solid black borders between blocks and grid cells
- **Responsive stacking** -- on mobile, multi-column Mondrian sub-grids collapse to single-column stacks, each cell retaining its block color for identity
- **Minimal image use** -- when images appear, they are contained within one cell of the grid; surrounding cells remain solid color to maintain the Color Block identity

---

## CSS / Design Techniques

### Color Block Card Component

```css
.cb-card {
  background: var(--cb-white);
  border: var(--cb-divider-width) solid var(--cb-black);
  padding: 0;
  overflow: hidden;
  transition: transform var(--cb-transition), box-shadow var(--cb-transition);
}

.cb-card:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 0 var(--cb-black);
}

.cb-card__color-bar {
  height: 8px;
  width: 100%;
}

.cb-card__color-bar--red { background: var(--cb-red); }
.cb-card__color-bar--blue { background: var(--cb-blue-cobalt); }
.cb-card__color-bar--yellow { background: var(--cb-yellow); }
.cb-card__color-bar--green { background: var(--cb-green); }

.cb-card__body {
  padding: 32px;
}

.cb-card__body h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: var(--cb-black);
}

.cb-card__body p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--cb-slate);
  margin-bottom: 20px;
}

/* Card with full-color background variant */
.cb-card--filled {
  background: var(--cb-red);
  border-color: var(--cb-red);
  color: var(--cb-white);
}

.cb-card--filled .cb-card__body h3 {
  color: var(--cb-white);
}

.cb-card--filled .cb-card__body p {
  color: rgba(255, 255, 255, 0.85);
}

.cb-card--filled:hover {
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);
}

/* Card grid */
.cb-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0;
  border: var(--cb-divider-width) solid var(--cb-black);
}

.cb-card-grid .cb-card {
  border: none;
  border-right: var(--cb-divider-width) solid var(--cb-black);
  border-bottom: var(--cb-divider-width) solid var(--cb-black);
}

.cb-card-grid .cb-card:hover {
  transform: none;
  box-shadow: inset 0 0 0 4px var(--cb-red);
}

@media (max-width: 768px) {
  .cb-card-grid {
    grid-template-columns: 1fr;
  }

  .cb-card-grid .cb-card {
    border-right: none;
  }
}
```

### Color Block Button

```css
.cb-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: var(--cb-font-small);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 3px solid var(--cb-black);
  cursor: pointer;
  position: relative;
  transition: all var(--cb-transition);
}

/* Primary -- solid black */
.cb-btn--primary {
  background: var(--cb-black);
  color: var(--cb-white);
  border-color: var(--cb-black);
}

.cb-btn--primary:hover {
  background: var(--cb-red);
  border-color: var(--cb-red);
  color: var(--cb-white);
}

/* Secondary -- outlined */
.cb-btn--secondary {
  background: transparent;
  color: var(--cb-black);
  border-color: var(--cb-black);
}

.cb-btn--secondary:hover {
  background: var(--cb-black);
  color: var(--cb-white);
}

/* On dark backgrounds */
.cb-btn--on-dark {
  background: var(--cb-white);
  color: var(--cb-black);
  border-color: var(--cb-white);
}

.cb-btn--on-dark:hover {
  background: var(--cb-yellow);
  border-color: var(--cb-yellow);
  color: var(--cb-black);
}

/* Color-filled variants */
.cb-btn--red {
  background: var(--cb-red);
  color: var(--cb-white);
  border-color: var(--cb-red);
}

.cb-btn--red:hover {
  background: var(--cb-white);
  color: var(--cb-red);
  border-color: var(--cb-red);
}

.cb-btn--yellow {
  background: var(--cb-yellow);
  color: var(--cb-black);
  border-color: var(--cb-yellow);
}

.cb-btn--yellow:hover {
  background: var(--cb-black);
  color: var(--cb-yellow);
  border-color: var(--cb-black);
}

/* Hard shadow offset button (Mondrian-inspired) */
.cb-btn--shadow {
  box-shadow: 4px 4px 0 var(--cb-black);
}

.cb-btn--shadow:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--cb-black);
}

.cb-btn--shadow:active {
  transform: translate(4px, 4px);
  box-shadow: none;
}
```

### Navigation Bar

```css
.cb-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: var(--cb-white);
  border-bottom: var(--cb-divider-width) solid var(--cb-black);
  z-index: 100;
}

.cb-nav__logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  color: var(--cb-black);
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Mondrian-style colored square beside logo */
.cb-nav__logo::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background: var(--cb-red);
  border: 2px solid var(--cb-black);
}

.cb-nav__links {
  display: flex;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.cb-nav__links li {
  height: 100%;
}

.cb-nav__links a {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: var(--cb-font-small);
  color: var(--cb-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 2px solid var(--cb-black);
  transition: background var(--cb-transition), color var(--cb-transition);
}

.cb-nav__links a:hover {
  background: var(--cb-black);
  color: var(--cb-white);
}

.cb-nav__links a.active {
  background: var(--cb-red);
  color: var(--cb-white);
}

/* Mobile hamburger */
.cb-nav__toggle {
  display: none;
  width: 32px;
  height: 24px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
}

.cb-nav__toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--cb-black);
}

@media (max-width: 768px) {
  .cb-nav {
    padding: 0 24px;
  }

  .cb-nav__links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--cb-white);
    border-bottom: var(--cb-divider-width) solid var(--cb-black);
  }

  .cb-nav__links.open {
    display: flex;
  }

  .cb-nav__links a {
    border-left: none;
    border-top: 2px solid var(--cb-black);
    padding: 16px 24px;
    height: auto;
  }

  .cb-nav__toggle {
    display: flex;
  }
}
```

### Hero Section -- Full-Block Color Immersion

```css
.cb-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--cb-block-padding);
  padding-top: calc(var(--cb-block-padding) + 64px); /* account for fixed nav */
  position: relative;
  overflow: hidden;
}

/* Hero color variants */
.cb-hero--red { background: var(--cb-red); color: var(--cb-white); }
.cb-hero--blue { background: var(--cb-blue-deep); color: var(--cb-white); }
.cb-hero--yellow { background: var(--cb-yellow); color: var(--cb-black); }
.cb-hero--white { background: var(--cb-white); color: var(--cb-black); }
.cb-hero--charcoal { background: var(--cb-charcoal); color: var(--cb-white); }

.cb-hero__content {
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.cb-hero__content .cb-label {
  margin-bottom: 20px;
  opacity: 0.8;
}

.cb-hero__content h1 {
  font-size: var(--cb-font-display);
  margin-bottom: 28px;
  line-height: 0.92;
}

.cb-hero__content p {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.85;
}

.cb-hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Decorative Mondrian-style geometric elements in the hero */
.cb-hero__decor {
  position: absolute;
  border: var(--cb-divider-width) solid var(--cb-black);
}

.cb-hero__decor--1 {
  width: 120px;
  height: 180px;
  background: var(--cb-yellow);
  top: 10%;
  right: 8%;
}

.cb-hero__decor--2 {
  width: 80px;
  height: 80px;
  background: var(--cb-blue-cobalt);
  bottom: 15%;
  left: 5%;
}

.cb-hero__decor--3 {
  width: 200px;
  height: 60px;
  background: var(--cb-white);
  bottom: 25%;
  right: 12%;
}

@media (max-width: 768px) {
  .cb-hero {
    min-height: 80vh;
    padding: 80px 24px 48px;
  }

  .cb-hero__decor {
    display: none;
  }

  .cb-hero__actions {
    flex-direction: column;
    align-items: center;
  }
}
```

### Mondrian Grid Layout

A CSS Grid layout that divides a section into asymmetric rectangular cells, each filled with a different color -- directly inspired by Piet Mondrian's compositions.

```css
.cb-mondrian {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: var(--cb-divider-width);
  min-height: 80vh;
  background: var(--cb-black); /* gap color = divider color */
  border: var(--cb-divider-width) solid var(--cb-black);
}

.cb-mondrian__cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

/* Named cell positions and colors */
.cb-mondrian__cell--a {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: var(--cb-red);
  color: var(--cb-white);
}

.cb-mondrian__cell--b {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  background: var(--cb-white);
  color: var(--cb-black);
}

.cb-mondrian__cell--c {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: var(--cb-yellow);
  color: var(--cb-black);
}

.cb-mondrian__cell--d {
  grid-column: 3 / 4;
  grid-row: 2 / 4;
  background: var(--cb-blue-cobalt);
  color: var(--cb-white);
}

.cb-mondrian__cell--e {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  background: var(--cb-ivory);
  color: var(--cb-black);
}

.cb-mondrian__cell h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.cb-mondrian__cell p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .cb-mondrian {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    min-height: auto;
  }

  .cb-mondrian__cell--a,
  .cb-mondrian__cell--b,
  .cb-mondrian__cell--c,
  .cb-mondrian__cell--d,
  .cb-mondrian__cell--e {
    grid-column: 1;
    grid-row: auto;
    min-height: 200px;
  }
}
```

### Full-Width Color Sections

The fundamental building block: a full-width section filled with a single solid color.

```css
.cb-section {
  width: 100%;
  padding: var(--cb-block-padding);
  position: relative;
}

/* Color variants */
.cb-section--red { background: var(--cb-red); color: var(--cb-text-on-dark); }
.cb-section--blue { background: var(--cb-blue-deep); color: var(--cb-text-on-dark); }
.cb-section--cobalt { background: var(--cb-blue-cobalt); color: var(--cb-text-on-dark); }
.cb-section--yellow { background: var(--cb-yellow); color: var(--cb-text-on-light); }
.cb-section--green { background: var(--cb-green); color: var(--cb-text-on-light); }
.cb-section--white { background: var(--cb-white); color: var(--cb-text-on-light); }
.cb-section--ivory { background: var(--cb-ivory); color: var(--cb-text-on-light); }
.cb-section--charcoal { background: var(--cb-charcoal); color: var(--cb-text-on-dark); }
.cb-section--black { background: var(--cb-black); color: var(--cb-text-on-dark); }
.cb-section--coral { background: var(--cb-coral); color: var(--cb-text-on-dark); }
.cb-section--teal { background: var(--cb-teal); color: var(--cb-text-on-dark); }
.cb-section--violet { background: var(--cb-violet); color: var(--cb-text-on-dark); }

.cb-section__inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* Optional thick black border between sections */
.cb-section--bordered {
  border-bottom: var(--cb-divider-width) solid var(--cb-black);
}

/* Two-column split within a block */
.cb-section__split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

@media (max-width: 768px) {
  .cb-section__split {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

### Color Block Feature Grid

A grid of feature items where each item is its own mini color block.

```css
.cb-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  border: var(--cb-divider-width) solid var(--cb-black);
}

.cb-feature {
  padding: 48px 32px;
  border-right: var(--cb-divider-width) solid var(--cb-black);
  border-bottom: var(--cb-divider-width) solid var(--cb-black);
  transition: transform var(--cb-transition);
}

.cb-feature:hover {
  transform: scale(1.02);
  z-index: 2;
}

/* Each feature gets its own color */
.cb-feature:nth-child(1) { background: var(--cb-red); color: var(--cb-white); }
.cb-feature:nth-child(2) { background: var(--cb-yellow); color: var(--cb-black); }
.cb-feature:nth-child(3) { background: var(--cb-blue-cobalt); color: var(--cb-white); }
.cb-feature:nth-child(4) { background: var(--cb-green); color: var(--cb-white); }
.cb-feature:nth-child(5) { background: var(--cb-tangerine); color: var(--cb-black); }
.cb-feature:nth-child(6) { background: var(--cb-teal); color: var(--cb-white); }

.cb-feature__icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cb-feature h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}

.cb-feature p {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
}

@media (max-width: 768px) {
  .cb-features {
    grid-template-columns: 1fr;
  }

  .cb-feature {
    border-right: none;
  }
}
```

### Scroll-Triggered Block Reveal

Color blocks that slide into view from alternating directions as the user scrolls, emphasizing the bold color transitions.

```css
.cb-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.cb-reveal--left {
  transform: translateX(-60px);
}

.cb-reveal--right {
  transform: translateX(60px);
}

.cb-reveal.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

/* Staggered children within a block */
.cb-reveal.is-visible .cb-reveal__child {
  opacity: 1;
  transform: translateY(0);
}

.cb-reveal__child {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.cb-reveal__child:nth-child(1) { transition-delay: 0.1s; }
.cb-reveal__child:nth-child(2) { transition-delay: 0.2s; }
.cb-reveal__child:nth-child(3) { transition-delay: 0.3s; }
.cb-reveal__child:nth-child(4) { transition-delay: 0.4s; }
```

---

## Design Do's and Don'ts

### Do's

- **Do** use full-saturation, confident colors for block backgrounds -- half-measures dilute the aesthetic; commit to bold hues
- **Do** ensure every text element meets at least WCAG AA contrast against its color block -- use white text on dark/saturated blocks and black text on light/bright blocks
- **Do** keep surfaces flat and textureless -- the purity of the solid color fill is the entire point of the aesthetic
- **Do** use thick black borders (3-6px) between blocks and grid cells to reference the Mondrian origin and add structural clarity
- **Do** alternate warm and cool blocks to create visual rhythm and prevent the eye from fatiguing on a single temperature
- **Do** limit your active palette to three to five dominant hues plus black and white; a controlled palette is more impactful than a rainbow
- **Do** use geometric, bold sans-serif typefaces that match the architectural confidence of the color blocks
- **Do** test your color combinations for accessibility -- saturated does not automatically mean accessible; verify contrast ratios with tools

### Don'ts

- **Don't** add gradients, shadows, or textures to block backgrounds -- these undermine the flat, graphic identity of Color Block design
- **Don't** use more than five or six saturated hues on a single page -- excessive color variety creates visual noise rather than bold impact
- **Don't** round corners on blocks, cards, or buttons -- the aesthetic demands sharp, geometric rectangles with crisp 90-degree angles
- **Don't** use thin, lightweight typefaces -- they disappear against saturated backgrounds; stick to bold, heavy weights for headings
- **Don't** place saturated text on a saturated background of a similar value (e.g., red text on blue) -- this causes vibration and illegibility
- **Don't** rely on color alone to convey information -- always pair color coding with text labels or icons for accessibility
- **Don't** add decorative illustrations, complex icons, or photographic backgrounds that compete with the color blocks for attention
- **Don't** use soft, muted, or pastel tones as primary block colors -- reserve these for minor accents only; the aesthetic requires chromatic confidence

---

## Related Aesthetics

| Aesthetic | Relationship to Color Block |
|-----------|---------------------------|
| **Flat Design** | Shares the rejection of gradients, shadows, and textures; Color Block amplifies flat design's color use to full-section scale |
| **De Stijl / Neoplasticism** | The direct art-historical origin; Mondrian's primary-color rectangles and black grid lines are the template |
| **Swiss / International Style** | Shares the grid-based structure and typographic discipline; Color Block adds saturated background fills |
| **Bauhaus** | Overlaps in geometric simplicity and primary color use; Bauhaus adds more material and industrial texture |
| **Material Design** | Both use bold flat colors for UI surfaces; Material Design adds elevation shadows and motion that Color Block avoids |
| **Neubrutalism** | Both favor thick borders and bold fills; Neubrutalism adds intentional roughness and asymmetry that Color Block keeps cleaner |
| **Memphis Design** | Shares the bold, graphic color approach but adds patterns, squiggles, and terrazzo textures that Color Block strips away |
| **Pop Art** | Both celebrate bold, saturated color; Pop Art adds halftone textures, photographic elements, and irony |
| **Minimalism** | Shares the reductive philosophy; Minimalism uses whitespace as the primary tool while Color Block uses saturated fills |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Block -- Design Template</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* ============================================
       CSS CUSTOM PROPERTIES
       ============================================ */
    :root {
      /* Primary blocks */
      --cb-red: #e63946;
      --cb-blue-deep: #1d3557;
      --cb-yellow: #ffd60a;
      --cb-blue-cobalt: #2a6fdb;

      /* Neutrals */
      --cb-white: #ffffff;
      --cb-black: #111111;
      --cb-ivory: #f8f7f2;
      --cb-charcoal: #2b2d42;
      --cb-slate: #4a4e69;

      /* Secondary accents */
      --cb-green: #2dc653;
      --cb-coral: #ff6b6b;
      --cb-violet: #7b2d8e;
      --cb-tangerine: #ff8c42;
      --cb-teal: #0b8a8a;
      --cb-blush: #f4acb7;

      /* Functional */
      --cb-text-on-dark: #ffffff;
      --cb-text-on-light: #111111;
      --cb-divider-width: 4px;
      --cb-block-padding: clamp(40px, 6vw, 80px);
      --cb-transition: 0.3s ease;

      /* Typography scale */
      --cb-font-display: clamp(3rem, 7vw, 6rem);
      --cb-font-heading: clamp(1.8rem, 4vw, 3rem);
      --cb-font-subheading: clamp(1.2rem, 2vw, 1.5rem);
      --cb-font-body: 1rem;
      --cb-font-small: 0.85rem;
    }

    /* ============================================
       RESET & BASE
       ============================================ */
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      font-size: var(--cb-font-body);
      line-height: 1.7;
      color: var(--cb-black);
      background: var(--cb-white);
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Bebas Neue', 'Arial Black', sans-serif;
      font-weight: 400;
      letter-spacing: 0.04em;
      line-height: 1.0;
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    .cb-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 48px;
      height: 64px;
      background: var(--cb-white);
      border-bottom: var(--cb-divider-width) solid var(--cb-black);
      z-index: 100;
    }

    .cb-nav__logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.8rem;
      color: var(--cb-black);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .cb-nav__logo::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: var(--cb-red);
      border: 2px solid var(--cb-black);
    }

    .cb-nav__links {
      display: flex;
      gap: 0;
      list-style: none;
      height: 100%;
    }

    .cb-nav__links li {
      height: 100%;
    }

    .cb-nav__links a {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: var(--cb-font-small);
      color: var(--cb-black);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0 24px;
      height: 100%;
      display: flex;
      align-items: center;
      border-left: 2px solid var(--cb-black);
      transition: background var(--cb-transition), color var(--cb-transition);
    }

    .cb-nav__links a:hover {
      background: var(--cb-black);
      color: var(--cb-white);
    }

    .cb-nav__toggle {
      display: none;
      width: 32px;
      height: 24px;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;
    }

    .cb-nav__toggle span {
      display: block;
      width: 100%;
      height: 3px;
      background: var(--cb-black);
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .cb-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px 40px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: var(--cb-font-small);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 3px solid var(--cb-black);
      cursor: pointer;
      transition: all var(--cb-transition);
    }

    .cb-btn--primary {
      background: var(--cb-black);
      color: var(--cb-white);
    }

    .cb-btn--primary:hover {
      background: var(--cb-red);
      border-color: var(--cb-red);
    }

    .cb-btn--on-dark {
      background: var(--cb-white);
      color: var(--cb-black);
      border-color: var(--cb-white);
    }

    .cb-btn--on-dark:hover {
      background: var(--cb-yellow);
      border-color: var(--cb-yellow);
    }

    .cb-btn--secondary {
      background: transparent;
      color: var(--cb-black);
    }

    .cb-btn--secondary:hover {
      background: var(--cb-black);
      color: var(--cb-white);
    }

    .cb-btn--shadow {
      box-shadow: 4px 4px 0 var(--cb-black);
    }

    .cb-btn--shadow:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 var(--cb-black);
    }

    /* ============================================
       HERO SECTION
       ============================================ */
    .cb-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--cb-block-padding);
      padding-top: calc(var(--cb-block-padding) + 64px);
      background: var(--cb-red);
      color: var(--cb-white);
      position: relative;
      overflow: hidden;
    }

    .cb-hero__content {
      max-width: 800px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .cb-hero__label {
      font-family: 'Inter', sans-serif;
      font-size: var(--cb-font-small);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 20px;
      opacity: 0.85;
    }

    .cb-hero__content h1 {
      font-size: var(--cb-font-display);
      margin-bottom: 28px;
      line-height: 0.92;
    }

    .cb-hero__content p {
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 40px;
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.9;
    }

    .cb-hero__actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Decorative floating blocks */
    .cb-hero__decor {
      position: absolute;
      border: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-hero__decor--1 {
      width: 120px;
      height: 180px;
      background: var(--cb-yellow);
      top: 12%;
      right: 8%;
    }

    .cb-hero__decor--2 {
      width: 80px;
      height: 80px;
      background: var(--cb-blue-cobalt);
      bottom: 18%;
      left: 6%;
    }

    .cb-hero__decor--3 {
      width: 160px;
      height: 50px;
      background: var(--cb-white);
      bottom: 30%;
      right: 14%;
      opacity: 0.3;
    }

    .cb-hero__decor--4 {
      width: 60px;
      height: 120px;
      background: var(--cb-charcoal);
      top: 25%;
      left: 10%;
      opacity: 0.4;
    }

    /* ============================================
       SECTIONS (Full-width color blocks)
       ============================================ */
    .cb-section {
      width: 100%;
      padding: var(--cb-block-padding);
    }

    .cb-section--white { background: var(--cb-white); color: var(--cb-text-on-light); }
    .cb-section--ivory { background: var(--cb-ivory); color: var(--cb-text-on-light); }
    .cb-section--yellow { background: var(--cb-yellow); color: var(--cb-text-on-light); }
    .cb-section--blue { background: var(--cb-blue-deep); color: var(--cb-text-on-dark); }
    .cb-section--cobalt { background: var(--cb-blue-cobalt); color: var(--cb-text-on-dark); }
    .cb-section--charcoal { background: var(--cb-charcoal); color: var(--cb-text-on-dark); }
    .cb-section--green { background: var(--cb-green); color: var(--cb-text-on-dark); }
    .cb-section--teal { background: var(--cb-teal); color: var(--cb-text-on-dark); }
    .cb-section--coral { background: var(--cb-coral); color: var(--cb-text-on-dark); }
    .cb-section--bordered { border-bottom: var(--cb-divider-width) solid var(--cb-black); }

    .cb-section__inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .cb-section__header {
      text-align: center;
      margin-bottom: 56px;
    }

    .cb-section__header h2 {
      font-size: var(--cb-font-heading);
      margin-bottom: 16px;
    }

    .cb-section__header p {
      font-size: 1.05rem;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.85;
    }

    /* ============================================
       FEATURE GRID (color-blocked items)
       ============================================ */
    .cb-features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-feature {
      padding: 48px 32px;
      border-right: var(--cb-divider-width) solid var(--cb-black);
      border-bottom: var(--cb-divider-width) solid var(--cb-black);
      transition: transform var(--cb-transition);
      position: relative;
    }

    .cb-feature:hover {
      transform: scale(1.03);
      z-index: 2;
    }

    .cb-feature:nth-child(1) { background: var(--cb-red); color: var(--cb-white); }
    .cb-feature:nth-child(2) { background: var(--cb-yellow); color: var(--cb-black); }
    .cb-feature:nth-child(3) { background: var(--cb-blue-cobalt); color: var(--cb-white); }
    .cb-feature:nth-child(4) { background: var(--cb-teal); color: var(--cb-white); }
    .cb-feature:nth-child(5) { background: var(--cb-tangerine); color: var(--cb-black); }
    .cb-feature:nth-child(6) { background: var(--cb-green); color: var(--cb-white); }

    .cb-feature__icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    .cb-feature h3 {
      font-size: 1.4rem;
      letter-spacing: 0.04em;
      margin-bottom: 12px;
    }

    .cb-feature p {
      font-size: 0.9rem;
      line-height: 1.6;
      opacity: 0.85;
    }

    /* ============================================
       MONDRIAN GRID
       ============================================ */
    .cb-mondrian {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 1.2fr 0.8fr 1fr;
      gap: var(--cb-divider-width);
      min-height: 70vh;
      background: var(--cb-black);
      border: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-mondrian__cell {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 40px;
    }

    .cb-mondrian__cell h3 {
      font-size: clamp(1.4rem, 2.5vw, 2rem);
      margin-bottom: 12px;
    }

    .cb-mondrian__cell p {
      font-size: 0.9rem;
      line-height: 1.6;
      opacity: 0.85;
    }

    .cb-mondrian__cell--a {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      background: var(--cb-red);
      color: var(--cb-white);
    }

    .cb-mondrian__cell--b {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
      background: var(--cb-white);
      color: var(--cb-black);
    }

    .cb-mondrian__cell--c {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      background: var(--cb-yellow);
      color: var(--cb-black);
    }

    .cb-mondrian__cell--d {
      grid-column: 3 / 4;
      grid-row: 2 / 4;
      background: var(--cb-blue-cobalt);
      color: var(--cb-white);
    }

    .cb-mondrian__cell--e {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      background: var(--cb-ivory);
      color: var(--cb-black);
    }

    /* ============================================
       CARDS
       ============================================ */
    .cb-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 0;
      border: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-card {
      background: var(--cb-white);
      overflow: hidden;
      border-right: var(--cb-divider-width) solid var(--cb-black);
      border-bottom: var(--cb-divider-width) solid var(--cb-black);
      transition: box-shadow var(--cb-transition);
    }

    .cb-card:hover {
      box-shadow: inset 0 0 0 4px var(--cb-red);
    }

    .cb-card__color-bar {
      height: 8px;
      width: 100%;
    }

    .cb-card__body {
      padding: 32px;
    }

    .cb-card__body h3 {
      font-size: 1.5rem;
      margin-bottom: 12px;
      color: var(--cb-black);
    }

    .cb-card__body p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--cb-slate);
      margin-bottom: 20px;
    }

    /* ============================================
       SPLIT SECTION (two-color side-by-side)
       ============================================ */
    .cb-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 60vh;
    }

    .cb-split__panel {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: var(--cb-block-padding);
    }

    .cb-split__panel h2 {
      font-size: var(--cb-font-heading);
      margin-bottom: 20px;
    }

    .cb-split__panel p {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 28px;
      max-width: 480px;
      opacity: 0.9;
    }

    /* ============================================
       STATS BAR (color-coded stats)
       ============================================ */
    .cb-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      border-top: var(--cb-divider-width) solid var(--cb-black);
      border-bottom: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-stat {
      padding: 48px 32px;
      text-align: center;
      border-right: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-stat:last-child {
      border-right: none;
    }

    .cb-stat__number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1;
      margin-bottom: 8px;
    }

    .cb-stat__label {
      font-family: 'Inter', sans-serif;
      font-size: var(--cb-font-small);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
    }

    /* ============================================
       TESTIMONIAL
       ============================================ */
    .cb-testimonial {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }

    .cb-testimonial blockquote {
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.8;
      font-style: italic;
      margin-bottom: 28px;
    }

    .cb-testimonial cite {
      font-family: 'Inter', sans-serif;
      font-size: var(--cb-font-small);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-style: normal;
    }

    /* ============================================
       CTA SECTION
       ============================================ */
    .cb-cta {
      text-align: center;
      padding: var(--cb-block-padding);
    }

    .cb-cta h2 {
      font-size: var(--cb-font-heading);
      margin-bottom: 20px;
    }

    .cb-cta p {
      font-size: 1.05rem;
      margin-bottom: 36px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.85;
    }

    /* ============================================
       FOOTER
       ============================================ */
    .cb-footer {
      background: var(--cb-black);
      color: var(--cb-white);
      border-top: var(--cb-divider-width) solid var(--cb-black);
    }

    .cb-footer__inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 64px var(--cb-block-padding);
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
    }

    .cb-footer__brand h3 {
      font-size: 1.8rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .cb-footer__brand h3::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background: var(--cb-red);
      border: 2px solid var(--cb-white);
    }

    .cb-footer__brand p {
      font-size: 0.9rem;
      opacity: 0.7;
      line-height: 1.6;
    }

    .cb-footer__col h4 {
      font-size: 1rem;
      letter-spacing: 0.08em;
      margin-bottom: 20px;
    }

    .cb-footer__col ul {
      list-style: none;
    }

    .cb-footer__col ul li {
      margin-bottom: 10px;
    }

    .cb-footer__col ul a {
      font-size: 0.9rem;
      opacity: 0.7;
      transition: opacity var(--cb-transition);
    }

    .cb-footer__col ul a:hover {
      opacity: 1;
    }

    .cb-footer__bar {
      border-top: 2px solid rgba(255, 255, 255, 0.15);
      padding: 24px var(--cb-block-padding);
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .cb-footer__bar p {
      font-size: 0.8rem;
      opacity: 0.5;
    }

    .cb-footer__colors {
      display: flex;
      gap: 6px;
    }

    .cb-footer__colors span {
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    /* ============================================
       SCROLL REVEAL ANIMATION
       ============================================ */
    .cb-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .cb-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 1024px) {
      .cb-footer__inner {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 768px) {
      .cb-nav {
        padding: 0 24px;
      }

      .cb-nav__links {
        display: none;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--cb-white);
        border-bottom: var(--cb-divider-width) solid var(--cb-black);
      }

      .cb-nav__links.open {
        display: flex;
      }

      .cb-nav__links a {
        border-left: none;
        border-top: 2px solid var(--cb-black);
        padding: 16px 24px;
        height: auto;
      }

      .cb-nav__toggle {
        display: flex;
      }

      .cb-hero {
        min-height: 80vh;
        padding: 100px 24px 48px;
      }

      .cb-hero__decor {
        display: none;
      }

      .cb-hero__actions {
        flex-direction: column;
        align-items: center;
      }

      .cb-features {
        grid-template-columns: 1fr;
      }

      .cb-feature {
        border-right: none;
      }

      .cb-mondrian {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        min-height: auto;
      }

      .cb-mondrian__cell--a,
      .cb-mondrian__cell--b,
      .cb-mondrian__cell--c,
      .cb-mondrian__cell--d,
      .cb-mondrian__cell--e {
        grid-column: 1;
        grid-row: auto;
        min-height: 200px;
      }

      .cb-card-grid {
        grid-template-columns: 1fr;
      }

      .cb-card {
        border-right: none;
      }

      .cb-split {
        grid-template-columns: 1fr;
      }

      .cb-split__panel {
        min-height: 50vh;
      }

      .cb-stats {
        grid-template-columns: 1fr 1fr;
      }

      .cb-stat {
        border-bottom: var(--cb-divider-width) solid var(--cb-black);
      }

      .cb-stat:nth-child(odd) {
        border-right: var(--cb-divider-width) solid var(--cb-black);
      }

      .cb-stat:nth-child(even) {
        border-right: none;
      }

      .cb-footer__inner {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .cb-footer__bar {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  </style>
</head>

<body>

  <!-- ===================== NAVIGATION ===================== -->
  <nav class="cb-nav">
    <a href="#" class="cb-nav__logo">Chromabloc</a>
    <button class="cb-nav__toggle" aria-label="Toggle menu" onclick="document.querySelector('.cb-nav__links').classList.toggle('open')">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="cb-nav__links">
      <li><a href="#features">Features</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- ===================== HERO ===================== -->
  <section class="cb-hero">
    <div class="cb-hero__decor cb-hero__decor--1"></div>
    <div class="cb-hero__decor cb-hero__decor--2"></div>
    <div class="cb-hero__decor cb-hero__decor--3"></div>
    <div class="cb-hero__decor cb-hero__decor--4"></div>

    <div class="cb-hero__content">
      <div class="cb-hero__label">Bold. Flat. Geometric.</div>
      <h1>Design in Pure Color</h1>
      <p>
        Harness the power of flat, saturated color blocks and Mondrian-inspired geometry
        to create web experiences that are bold, legible, and unforgettable.
      </p>
      <div class="cb-hero__actions">
        <a href="#features" class="cb-btn cb-btn--on-dark cb-btn--shadow">Explore Features</a>
        <a href="#work" class="cb-btn cb-btn--secondary" style="color: var(--cb-white); border-color: rgba(255,255,255,0.5);">View Work</a>
      </div>
    </div>
  </section>

  <!-- ===================== FEATURES (Color-Blocked Grid) ===================== -->
  <section id="features" class="cb-section cb-section--white cb-section--bordered">
    <div class="cb-section__inner">
      <div class="cb-section__header">
        <h2>What We Do</h2>
        <p>Each capability is its own bold color block -- decisive, clear, and impossible to ignore.</p>
      </div>

      <div class="cb-features">
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#9632;</div>
          <h3>Brand Identity</h3>
          <p>We craft visual identities built on bold color systems and geometric clarity that command instant recognition.</p>
        </div>
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#9650;</div>
          <h3>Web Design</h3>
          <p>Full-width color-blocked layouts that turn every scroll into a new visual experience of saturated immersion.</p>
        </div>
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#9679;</div>
          <h3>UI Systems</h3>
          <p>Component libraries built on flat color tokens, hard edges, and geometric consistency across every touchpoint.</p>
        </div>
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#9674;</div>
          <h3>Print Design</h3>
          <p>Posters, packaging, and editorial layouts that translate the digital color block language into tactile media.</p>
        </div>
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#9733;</div>
          <h3>Motion Graphics</h3>
          <p>Animated color transitions and geometric shape choreography that bring flat design into dynamic motion.</p>
        </div>
        <div class="cb-feature cb-reveal">
          <div class="cb-feature__icon">&#10070;</div>
          <h3>Strategy</h3>
          <p>Color psychology and visual hierarchy consulting to ensure your palette communicates the right message.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== STATS BAR ===================== -->
  <div class="cb-stats" style="background: var(--cb-yellow); color: var(--cb-black);">
    <div class="cb-stat">
      <div class="cb-stat__number">147</div>
      <div class="cb-stat__label">Projects Completed</div>
    </div>
    <div class="cb-stat">
      <div class="cb-stat__number">89</div>
      <div class="cb-stat__label">Happy Clients</div>
    </div>
    <div class="cb-stat">
      <div class="cb-stat__number">12</div>
      <div class="cb-stat__label">Design Awards</div>
    </div>
    <div class="cb-stat">
      <div class="cb-stat__number">5</div>
      <div class="cb-stat__label">Bold Colors</div>
    </div>
  </div>

  <!-- ===================== ABOUT (Two-Color Split) ===================== -->
  <section id="about" class="cb-split">
    <div class="cb-split__panel" style="background: var(--cb-blue-deep); color: var(--cb-white);">
      <div class="cb-hero__label" style="opacity: 0.7;">Our Philosophy</div>
      <h2>Color Is Structure</h2>
      <p>
        We believe that color is not decoration -- it is architecture. Every saturated block on the page
        serves a structural purpose: dividing content, establishing hierarchy, and guiding the eye.
        Inspired by Mondrian's compositions and the flat design movement, we strip away gradients,
        shadows, and unnecessary ornamentation to let pure color speak.
      </p>
      <a href="#work" class="cb-btn cb-btn--on-dark">See Our Approach</a>
    </div>
    <div class="cb-split__panel" style="background: var(--cb-ivory); color: var(--cb-black);">
      <div class="cb-hero__label">Since 2018</div>
      <h2>Bold by Design</h2>
      <p>
        For over six years, our studio has championed the Color Block aesthetic across web, print,
        and environmental design. We work with brands that are ready to be bold -- that understand
        a confident palette is worth a thousand stock photos.
      </p>
      <a href="#contact" class="cb-btn cb-btn--secondary cb-btn--shadow">Get in Touch</a>
    </div>
  </section>

  <!-- ===================== WORK (Mondrian Grid) ===================== -->
  <section id="work" class="cb-section cb-section--white cb-section--bordered">
    <div class="cb-section__inner">
      <div class="cb-section__header">
        <h2>Selected Work</h2>
        <p>A Mondrian-inspired showcase of our recent projects, arranged in asymmetric grid harmony.</p>
      </div>

      <div class="cb-mondrian">
        <div class="cb-mondrian__cell cb-mondrian__cell--a">
          <h3>Volta Rebrand</h3>
          <p>Complete visual identity for a sustainable energy startup, built on a bold red-and-white color system.</p>
        </div>
        <div class="cb-mondrian__cell cb-mondrian__cell--b">
          <h3>Geometric Gallery</h3>
          <p>Exhibition microsite for a modern art gallery featuring full-viewport color blocks and scroll-driven transitions.</p>
        </div>
        <div class="cb-mondrian__cell cb-mondrian__cell--c">
          <h3>Sol Finance</h3>
          <p>Dashboard UI with color-coded data categories.</p>
        </div>
        <div class="cb-mondrian__cell cb-mondrian__cell--d">
          <h3>Bloc Magazine</h3>
          <p>Digital editorial platform with color-blocked article layouts and bold typographic hierarchy.</p>
        </div>
        <div class="cb-mondrian__cell cb-mondrian__cell--e">
          <h3>Prism Packaging</h3>
          <p>Product packaging system using flat primary colors and thick black borders for shelf impact and brand recognition.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== TESTIMONIALS ===================== -->
  <section id="testimonials" class="cb-section cb-section--cobalt">
    <div class="cb-section__inner">
      <div class="cb-section__header">
        <h2>What Clients Say</h2>
      </div>

      <div class="cb-testimonial">
        <blockquote>
          "They understood that our brand needed to be loud, clear, and impossible to scroll past.
          The color block system they created for us has become our most recognizable asset --
          people see those colors and instantly know it's us."
        </blockquote>
        <cite>-- Alina Voss, Creative Director at Volta Energy</cite>
      </div>
    </div>
  </section>

  <!-- ===================== CARDS SECTION ===================== -->
  <section class="cb-section cb-section--ivory cb-section--bordered">
    <div class="cb-section__inner">
      <div class="cb-section__header" style="color: var(--cb-black);">
        <h2>Our Process</h2>
        <p>Three decisive steps from concept to chromatic impact.</p>
      </div>

      <div class="cb-card-grid">
        <div class="cb-card">
          <div class="cb-card__color-bar" style="background: var(--cb-red);"></div>
          <div class="cb-card__body">
            <h3>01 -- Discover</h3>
            <p>We immerse ourselves in your brand, audience, and goals to define a color strategy rooted in purpose.</p>
            <a href="#" class="cb-btn cb-btn--secondary" style="font-size: 0.75rem; padding: 10px 24px;">Learn More</a>
          </div>
        </div>
        <div class="cb-card">
          <div class="cb-card__color-bar" style="background: var(--cb-yellow);"></div>
          <div class="cb-card__body">
            <h3>02 -- Design</h3>
            <p>Bold compositions take shape as flat color panels, geometric grids, and typographic pairings come together.</p>
            <a href="#" class="cb-btn cb-btn--secondary" style="font-size: 0.75rem; padding: 10px 24px;">Learn More</a>
          </div>
        </div>
        <div class="cb-card">
          <div class="cb-card__color-bar" style="background: var(--cb-blue-cobalt);"></div>
          <div class="cb-card__body">
            <h3>03 -- Deliver</h3>
            <p>We build pixel-perfect, accessible implementations with a full design system and token library for scale.</p>
            <a href="#" class="cb-btn cb-btn--secondary" style="font-size: 0.75rem; padding: 10px 24px;">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CTA SECTION ===================== -->
  <section id="contact" class="cb-cta" style="background: var(--cb-charcoal); color: var(--cb-white);">
    <h2>Ready to Go Bold?</h2>
    <p>
      Let's build something that fills the screen with color and fills your audience with confidence.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
      <a href="#" class="cb-btn cb-btn--on-dark cb-btn--shadow">Start a Project</a>
      <a href="#" class="cb-btn" style="color: var(--cb-white); border-color: rgba(255,255,255,0.4);">View Pricing</a>
    </div>
  </section>

  <!-- ===================== FOOTER ===================== -->
  <footer class="cb-footer">
    <div class="cb-footer__inner">
      <div class="cb-footer__brand">
        <h3>Chromabloc</h3>
        <p>Bold design studio specializing in color-blocked visual systems, geometric layouts, and flat-color brand identities.</p>
      </div>
      <div class="cb-footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Brand Identity</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">UI Systems</a></li>
          <li><a href="#">Print Design</a></li>
        </ul>
      </div>
      <div class="cb-footer__col">
        <h4>Studio</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="cb-footer__col">
        <h4>Connect</h4>
        <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Dribbble</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="cb-footer__bar">
      <p>&copy; 2026 Chromabloc Studio. All rights reserved.</p>
      <div class="cb-footer__colors">
        <span style="background: var(--cb-red);"></span>
        <span style="background: var(--cb-yellow);"></span>
        <span style="background: var(--cb-blue-cobalt);"></span>
        <span style="background: var(--cb-white);"></span>
        <span style="background: var(--cb-black);"></span>
      </div>
    </div>
  </footer>

  <!-- ===================== SCROLL REVEAL SCRIPT ===================== -->
  <script>
    // Intersection Observer for scroll-triggered reveal animations
    const revealElements = document.querySelectorAll('.cb-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Start with the palette, not the layout** -- define your three to five primary block colors as CSS custom properties first; the layout will follow naturally from the color decisions
- **Use CSS Grid `gap` as dividers** -- set the grid container's `background` to black and `gap` to 3-4px; the gap becomes the Mondrian-style black line between cells without needing extra border declarations
- **Test color contrast early and often** -- use tools like the WebAIM Contrast Checker to verify every text-on-background combination meets WCAG AA (4.5:1 for body text, 3:1 for large text); saturated backgrounds can be deceptive
- **Leverage `clamp()` for responsive typography** -- Color Block display text must remain impactful on all screen sizes; `clamp(3rem, 7vw, 6rem)` ensures headings scale smoothly from mobile to desktop without breakpoint jumps
- **Avoid gradients entirely** -- even subtle gradients between blocks undermine the aesthetic; use hard color changes with no transition between adjacent sections
- **Use semantic HTML sections as block containers** -- each `<section>` is a color block; apply background color and text color directly to the section element, keeping the HTML structure clean and accessible
- **Design with a reduced image budget** -- Color Block's power comes from the colors themselves; limit photography to accent roles (e.g., one image per Mondrian cell) and let flat fills carry the visual weight
- **Provide a color mode toggle with care** -- if implementing dark mode, remap block colors to darker saturated variants rather than inverting them; the palette identity should remain recognizable across modes
