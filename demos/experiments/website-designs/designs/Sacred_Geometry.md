# Sacred Geometry Design Reference

## Overview

Sacred Geometry is a design aesthetic rooted in the ancient belief that certain mathematical patterns, ratios, and shapes form the fundamental blueprint of creation. From the **Flower of Life** -- a figure of 19 interlocking circles representing the interconnectedness of all living things -- to the **Golden Ratio** (approximately 1.618), known by the Greek letter phi, these patterns recur endlessly in nature, architecture, and art. The **Fibonacci Sequence** (0, 1, 1, 2, 3, 5, 8, 13...) describes the spiral growth found in nautilus shells, sunflower seed heads, and spiral galaxies. **Metatron's Cube**, a two-dimensional figure of 13 circles connected by 78 lines, contains within it all five Platonic Solids -- the tetrahedron, cube, octahedron, dodecahedron, and icosahedron -- making it one of the most complex and symbolically rich figures in the tradition.

In web and digital design, Sacred Geometry translates into layouts governed by precise mathematical proportion, radial symmetry, and deliberate spatial harmony. Grids are derived from the golden ratio rather than arbitrary column counts. Decorative elements draw on the Flower of Life, the Seed of Life, Sri Yantra, Vesica Piscis, and torus forms. Color palettes tend toward **deep cosmic tones** -- midnight indigo, celestial violet, and void black -- punctuated by **luminous gold and white** representing enlightenment and divine light. The overall mood is one of **meditative stillness, cosmic order, and universal interconnection**.

Unlike chaotic or maximalist aesthetics, Sacred Geometry demands **mathematical precision and deliberate restraint**. Every element's size, position, and proportion should feel as though it was derived from a governing geometric principle. Circles, hexagons, and spirals are preferred over arbitrary organic shapes. Symmetry -- radial, bilateral, and rotational -- is the foundational compositional tool. The result is design that feels simultaneously ancient and timeless, spiritual and rational, complex and harmonious. It communicates wisdom, depth, intentionality, and a connection to patterns that transcend any single culture or era.

---

## Visual Characteristics

### Core Design Traits

- **Flower of Life patterns**: Overlapping circles arranged in hexagonal symmetry serve as background textures, section dividers, and decorative overlays, representing unity and the interconnectedness of all things
- **Golden Ratio proportions**: Layout dimensions, spacing, and element sizing follow phi (1.618) ratios, creating compositions that feel naturally balanced and aesthetically harmonious
- **Fibonacci spiral motifs**: Logarithmic spirals derived from the Fibonacci sequence appear as decorative elements, image masks, and navigation path guides
- **Metatron's Cube linework**: Thin, precise lines connecting geometric nodes create intricate overlay patterns used in hero sections, card backgrounds, and loading animations
- **Radial symmetry compositions**: Elements radiate outward from central focal points, echoing mandala structures and the circular patterns found in nature
- **Platonic Solid references**: The five regular polyhedra (tetrahedron, cube, octahedron, dodecahedron, icosahedron) appear as wireframe illustrations, icons, and structural metaphors
- **Luminous gold on deep dark fields**: Bright metallic gold lines and accents emerge from dark indigo or black backgrounds, evoking celestial maps and illuminated manuscripts
- **Vesica Piscis and Seed of Life forms**: The almond-shaped intersection of two circles and the seven-circle Seed of Life pattern provide shapes for containers, frames, and iconography
- **Precise geometric linework**: Ultra-thin lines (0.5-1px) trace geometric constructions with mathematical accuracy, creating an impression of draftsmanship and sacred craft
- **Cosmic and ethereal atmosphere**: Subtle particle effects, soft radial glows, and star-field backgrounds evoke the vastness of space and the micro-macro connection central to sacred geometry
- **Sri Yantra and torus forms**: Nested triangles and donut-shaped energy fields add visual complexity and spiritual depth as tertiary decorative elements
- **Hexagonal grid structures**: Layouts and backgrounds built on hexagonal tessellations reference the honeycomb, one of nature's most efficient geometric structures

### Design Principles

- **Mathematical intention over arbitrary placement**: Every element's size and position should reference a geometric ratio or grid derived from sacred proportions
- **Symmetry as the organizing force**: Radial, bilateral, and rotational symmetry govern compositions; asymmetry is used sparingly and deliberately
- **Stillness through balance**: The design should evoke meditative calm; nothing feels off-center, rushed, or chaotic
- **Light emerging from darkness**: The core visual metaphor is illumination -- golden geometry shining against the cosmic void
- **Complexity through simple repetition**: Intricate patterns arise from the repetition and intersection of basic shapes (circles, triangles, lines), not from freeform complexity
- **Reverence for negative space**: Empty space is not wasted space but the void from which form emerges; allow geometric patterns room to breathe
- **Universal over cultural specificity**: Draw from patterns that appear across all cultures -- the spiral, the circle, the golden mean -- rather than symbols tied to a single tradition
- **Precision as spiritual practice**: Fine lines, exact alignments, and pixel-perfect geometry communicate the care and intentionality central to this aesthetic

---

## Color Palette

The Sacred Geometry palette draws from the cosmos: the deep void of space, the luminous gold of celestial light, and the violet-indigo spectrum associated with spiritual insight and the crown chakra. Earth tones ground the palette, while white and soft silver provide clarity and purity. Every color choice should feel deliberate, resonant, and tied to either the cosmic or the natural world.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Void Black | `#0B0B14` | Primary dark background, the cosmic void from which geometry emerges |
| Deep Indigo | `#1A1040` | Secondary dark surface, card backgrounds, depth layering |
| Midnight Blue | `#0F1B3D` | Alternative dark base, hero sections, deep contrast areas |
| Celestial Gold | `#C8A34D` | Primary accent, geometric linework, sacred pattern strokes |
| Divine Gold | `#E8C547` | Bright gold highlights, active states, luminous focal points |
| Pale Gold | `#F0DFA0` | Soft gold for text, muted accents, secondary line work |
| Spirit Violet | `#7B2FBE` | Tertiary accent, energy nodes, interactive highlights |
| Crown Indigo | `#4B0082` | Deep violet for gradients, spiritual depth, hover states |
| Ether White | `#F0EDE6` | Primary text on dark, purity, light emanation |
| Silver Light | `#C0BFC0` | Secondary text, muted linework, subtle borders |
| Earth Bronze | `#8B6F47` | Grounding accent, tertiary surfaces, natural warmth |
| Cosmic Teal | `#1A6B6A` | Cool accent, balance to warm golds, water element |
| Rose Quartz | `#C47A8A` | Soft warm accent, heart-center references, gentle highlights |
| Nebula Purple | `#2D1650` | Deep purple for gradients, layered depth, card surfaces |
| Starfield Gray | `#2A2A35` | Neutral dark surface, borders, muted backgrounds |

### CSS Custom Properties

```css
:root {
  /* Dark foundations */
  --sg-void: #0b0b14;
  --sg-deep-indigo: #1a1040;
  --sg-midnight: #0f1b3d;
  --sg-nebula: #2d1650;
  --sg-starfield: #2a2a35;

  /* Sacred golds */
  --sg-gold: #c8a34d;
  --sg-gold-bright: #e8c547;
  --sg-gold-pale: #f0dfa0;
  --sg-gold-dim: #8b7a3a;

  /* Spiritual purples */
  --sg-violet: #7b2fbe;
  --sg-indigo: #4b0082;
  --sg-crown: #6a0dad;

  /* Light and purity */
  --sg-white: #f0ede6;
  --sg-silver: #c0bfc0;
  --sg-pure-white: #fafaf5;

  /* Earth and nature */
  --sg-bronze: #8b6f47;
  --sg-teal: #1a6b6a;
  --sg-rose: #c47a8a;

  /* Glow and emanation effects */
  --sg-glow-gold: rgba(200, 163, 77, 0.35);
  --sg-glow-gold-strong: rgba(232, 197, 71, 0.5);
  --sg-glow-violet: rgba(123, 47, 190, 0.3);
  --sg-glow-white: rgba(240, 237, 230, 0.15);
  --sg-glass: rgba(255, 255, 255, 0.04);
  --sg-glass-gold: rgba(200, 163, 77, 0.06);
  --sg-glass-border: rgba(200, 163, 77, 0.15);

  /* Functional mappings */
  --sg-bg-primary: var(--sg-void);
  --sg-bg-secondary: var(--sg-deep-indigo);
  --sg-bg-surface: var(--sg-glass);
  --sg-text-primary: var(--sg-white);
  --sg-text-secondary: var(--sg-silver);
  --sg-text-accent: var(--sg-gold);
  --sg-accent: var(--sg-gold);
  --sg-accent-strong: var(--sg-gold-bright);
  --sg-accent-secondary: var(--sg-violet);
  --sg-border: var(--sg-glass-border);

  /* Sacred proportions */
  --sg-phi: 1.618;
  --sg-phi-inverse: 0.618;
  --sg-spacing-xs: 0.382rem;
  --sg-spacing-sm: 0.618rem;
  --sg-spacing-md: 1rem;
  --sg-spacing-lg: 1.618rem;
  --sg-spacing-xl: 2.618rem;
  --sg-spacing-2xl: 4.236rem;

  /* Typography scale (golden ratio) */
  --sg-font-xs: 0.75rem;
  --sg-font-sm: 0.875rem;
  --sg-font-base: 1rem;
  --sg-font-md: 1.125rem;
  --sg-font-lg: 1.618rem;
  --sg-font-xl: 2.618rem;
  --sg-font-2xl: 4.236rem;
  --sg-font-3xl: 6.854rem;
}
```

---

## Typography

Sacred Geometry typography favors geometric precision, clean proportions, and a sense of timeless elegance. Headings use geometric or classically proportioned typefaces that echo the mathematical harmony of the aesthetic. Body text prioritizes readability while maintaining a refined, intentional character. Decorative or display uses may reference ancient inscriptions or architectural lettering. The typographic scale itself should follow the golden ratio (1.618) to embody the aesthetic's core principle at every level.

### Recommended Google Fonts

| Font Name | Category | Weight Range | Usage |
|-----------|----------|-------------|-------|
| Cormorant Garamond | Serif | 300-700 | Headings, display text -- elegant, high-contrast serif with classical proportions |
| Cinzel | Serif | 400-900 | Display headings, titles -- inspired by Roman inscriptions, geometric and authoritative |
| Josefin Sans | Sans-serif | 100-700 | Body text, UI elements -- geometric with a vintage elegance and even proportions |
| Raleway | Sans-serif | 100-900 | Body text, navigation -- clean geometric sans with thin-to-bold range |
| Philosopher | Sans-serif | 400-700 | Subheadings, accents -- distinctive with subtle calligraphic flair |
| Poiret One | Display | 400 | Decorative headlines, hero text -- ultra-light geometric Art Deco character |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Cinzel (500) | Raleway (300) | Ancient authority meets modern clarity -- temple inscriptions with geometric precision |
| Cormorant Garamond (400) | Josefin Sans (300) | Classical elegance with mathematical geometry -- illuminated manuscript feeling |
| Poiret One (400) | Raleway (300) | Ethereal, delicate geometry -- cosmic and otherworldly |
| Cinzel (700) | Josefin Sans (300) | Bold sacred authority with refined geometric body -- strongest contrast pair |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Raleway:wght@100;200;300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');

/* Base typography */
body {
  font-family: 'Raleway', 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: var(--sg-font-base);
  line-height: var(--sg-phi);
  color: var(--sg-text-primary);
  letter-spacing: 0.03em;
  -webkit-font-smoothing: antialiased;
}

/* Headings -- golden ratio scale */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cinzel', 'Cormorant Garamond', serif;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sg-text-accent);
}

h1 {
  font-size: var(--sg-font-3xl);
  font-weight: 400;
  letter-spacing: 0.15em;
}

h2 {
  font-size: var(--sg-font-2xl);
  letter-spacing: 0.12em;
}

h3 {
  font-size: var(--sg-font-xl);
  letter-spacing: 0.1em;
}

h4 {
  font-size: var(--sg-font-lg);
}

/* Accent text -- used for labels, section markers, sacred terms */
.sacred-label {
  font-family: 'Cinzel', serif;
  font-size: var(--sg-font-sm);
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sg-gold);
}

/* Body emphasis */
.sacred-lead {
  font-family: 'Cormorant Garamond', serif;
  font-size: var(--sg-font-lg);
  font-weight: 300;
  font-style: italic;
  line-height: var(--sg-phi);
  color: var(--sg-gold-pale);
}

/* Geometric monospace for numbers and ratios */
.sacred-number {
  font-family: 'Josefin Sans', monospace;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--sg-gold-bright);
}
```

---

## Layout Principles

- **Golden Ratio grid**: Divide layouts using phi (1.618) proportions rather than equal columns; a two-column layout should use a ~61.8% / ~38.2% split
- **Radial composition for hero sections**: Arrange hero content and decorative elements radiating from a central focal point, echoing mandala and Flower of Life structures
- **Fibonacci spacing scale**: Use Fibonacci-derived values (1, 1, 2, 3, 5, 8, 13...) or golden-ratio multiples for margin, padding, and gap values to create naturally harmonious rhythm
- **Hexagonal section boundaries**: Use hexagonal or circular clip-paths for section transitions instead of straight horizontal lines
- **Centered, symmetrical content alignment**: Default to centered text and symmetrical element placement; break symmetry only with mathematical justification
- **Concentric layering for depth**: Layer translucent geometric patterns behind content at increasing scales to create depth, like nested circles within the Flower of Life
- **Sacred proportion containers**: Size cards, images, and interactive elements using golden rectangle proportions (1:1.618 aspect ratio)
- **Circular and radial navigation**: Consider arc-based or circular navigation patterns for primary menus, reflecting the aesthetic's preference for curves over straight lines
- **Vertical rhythm via phi**: Set line-height at 1.618 and derive all vertical spacing from multiples of the base line-height for mathematically consistent rhythm
- **Generous negative space**: Allow ample breathing room around geometric patterns; sacred geometry requires space for its precision to be appreciated
- **Torus and spiral scroll metaphors**: Use scroll-triggered animations that reveal content along spiral or expanding-circle paths rather than simple vertical sliding
- **Modular scale for all dimensions**: Derive every measurement from a single base value multiplied by phi, ensuring mathematical coherence across the entire design

---

## CSS / Design Techniques

### Sacred Geometry Card

```css
.sg-card {
  position: relative;
  background: linear-gradient(
    145deg,
    rgba(26, 16, 64, 0.8) 0%,
    rgba(11, 11, 20, 0.9) 100%
  );
  border: 1px solid var(--sg-glass-border);
  border-radius: 2px;
  padding: var(--sg-spacing-xl);
  aspect-ratio: 1 / 1.618; /* golden rectangle */
  overflow: hidden;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}

/* Flower of Life background overlay */
.sg-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background-image:
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%),
    radial-gradient(circle, transparent 28%, var(--sg-glass-border) 28.5%, transparent 29%);
  background-size: 60px 60px;
  background-position:
    0 0,
    30px 0,
    15px 26px,
    -15px 26px,
    30px 52px,
    60px 26px,
    45px 52px;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}

/* Gold corner accents */
.sg-card::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border: 1px solid rgba(200, 163, 77, 0.12);
  border-radius: 1px;
  pointer-events: none;
  z-index: 0;
}

.sg-card:hover {
  border-color: var(--sg-gold-dim);
  box-shadow:
    0 0 20px var(--sg-glow-gold),
    0 0 60px rgba(200, 163, 77, 0.1);
}

.sg-card__title {
  font-family: 'Cinzel', serif;
  font-size: var(--sg-font-lg);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sg-gold);
  margin-bottom: var(--sg-spacing-md);
  position: relative;
  z-index: 1;
}

.sg-card__body {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: var(--sg-font-base);
  line-height: var(--sg-phi);
  color: var(--sg-silver);
  position: relative;
  z-index: 1;
}
```

### Sacred Geometry Button

```css
.sg-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sg-spacing-sm);
  padding: var(--sg-spacing-sm) var(--sg-spacing-xl);
  font-family: 'Cinzel', serif;
  font-size: var(--sg-font-sm);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sg-gold);
  background: transparent;
  border: 1px solid var(--sg-gold-dim);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

/* Hexagonal clip-path variant */
.sg-button--hex {
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  padding: var(--sg-spacing-sm) var(--sg-spacing-2xl);
  background: var(--sg-deep-indigo);
  border: none;
}

/* Inner geometric decoration */
.sg-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--sg-glow-gold) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
  z-index: 0;
}

.sg-button:hover::before {
  width: 300%;
  height: 300%;
}

.sg-button:hover {
  color: var(--sg-gold-bright);
  border-color: var(--sg-gold);
  box-shadow:
    0 0 15px var(--sg-glow-gold),
    inset 0 0 15px rgba(200, 163, 77, 0.1);
}

.sg-button span {
  position: relative;
  z-index: 1;
}

/* Ghost variant */
.sg-button--ghost {
  border-color: var(--sg-glass-border);
  color: var(--sg-silver);
}

.sg-button--ghost:hover {
  border-color: var(--sg-gold-dim);
  color: var(--sg-gold);
}

/* Filled variant */
.sg-button--filled {
  background: linear-gradient(135deg, var(--sg-gold-dim) 0%, var(--sg-gold) 50%, var(--sg-gold-dim) 100%);
  color: var(--sg-void);
  border-color: var(--sg-gold);
  font-weight: 700;
}

.sg-button--filled:hover {
  background: linear-gradient(135deg, var(--sg-gold) 0%, var(--sg-gold-bright) 50%, var(--sg-gold) 100%);
  box-shadow:
    0 0 25px var(--sg-glow-gold-strong),
    0 0 60px var(--sg-glow-gold);
}
```

### Navigation Bar

```css
.sg-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sg-spacing-md) var(--sg-spacing-xl);
  background: rgba(11, 11, 20, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--sg-glass-border);
}

.sg-nav__logo {
  font-family: 'Cinzel', serif;
  font-size: var(--sg-font-lg);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sg-gold);
  text-decoration: none;
}

/* Decorative golden dot separator */
.sg-nav__logo::after {
  content: ' \25C7'; /* diamond */
  font-size: 0.5em;
  vertical-align: middle;
  margin-left: 0.5em;
  color: var(--sg-gold-dim);
}

.sg-nav__links {
  display: flex;
  align-items: center;
  gap: var(--sg-spacing-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.sg-nav__link {
  font-family: 'Raleway', sans-serif;
  font-size: var(--sg-font-sm);
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--sg-silver);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

/* Golden underline reveal on hover */
.sg-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--sg-gold);
  transition: width 0.3s ease, left 0.3s ease;
}

.sg-nav__link:hover {
  color: var(--sg-gold);
}

.sg-nav__link:hover::after {
  width: 100%;
  left: 0;
}

/* Active state -- small circle indicator */
.sg-nav__link--active {
  color: var(--sg-gold);
}

.sg-nav__link--active::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--sg-gold);
  transform: translateY(-50%);
}
```

### Hero Section

```css
.sg-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--sg-spacing-2xl);
  text-align: center;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    var(--sg-deep-indigo) 0%,
    var(--sg-void) 70%
  );
}

/* Central Flower of Life emanation */
.sg-hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 45%, rgba(200, 163, 77, 0.06) 45.5%, transparent 46%),
    radial-gradient(circle at 25% 50%, transparent 30%, rgba(200, 163, 77, 0.04) 30.5%, transparent 31%),
    radial-gradient(circle at 75% 50%, transparent 30%, rgba(200, 163, 77, 0.04) 30.5%, transparent 31%),
    radial-gradient(circle at 50% 25%, transparent 30%, rgba(200, 163, 77, 0.04) 30.5%, transparent 31%),
    radial-gradient(circle at 50% 75%, transparent 30%, rgba(200, 163, 77, 0.04) 30.5%, transparent 31%);
  opacity: 0.6;
  animation: sg-rotate 120s linear infinite;
  pointer-events: none;
  z-index: 0;
}

/* Outer ring */
.sg-hero::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(200, 163, 77, 0.1);
  box-shadow:
    0 0 80px rgba(200, 163, 77, 0.05),
    inset 0 0 80px rgba(200, 163, 77, 0.03);
  pointer-events: none;
  z-index: 0;
}

@keyframes sg-rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.sg-hero__label {
  font-family: 'Cinzel', serif;
  font-size: var(--sg-font-xs);
  font-weight: 600;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--sg-gold-dim);
  margin-bottom: var(--sg-spacing-lg);
  position: relative;
  z-index: 1;
}

.sg-hero__title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 8vw, var(--sg-font-3xl));
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--sg-gold);
  line-height: 1.1;
  margin-bottom: var(--sg-spacing-lg);
  position: relative;
  z-index: 1;
  text-shadow: 0 0 40px var(--sg-glow-gold);
}

.sg-hero__subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: var(--sg-font-lg);
  font-weight: 300;
  font-style: italic;
  color: var(--sg-gold-pale);
  max-width: 38em;
  margin-bottom: var(--sg-spacing-2xl);
  line-height: var(--sg-phi);
  position: relative;
  z-index: 1;
}

.sg-hero__cta {
  position: relative;
  z-index: 1;
}
```

### Golden Ratio Spiral SVG Decoration

```css
.sg-spiral-decoration {
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.1;
  pointer-events: none;
}

.sg-spiral-decoration svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--sg-gold);
  stroke-width: 0.5;
}

/* Fibonacci spiral via CSS approximation */
.sg-fibonacci {
  position: relative;
  width: 300px;
  height: 300px;
}

.sg-fibonacci__arc {
  position: absolute;
  border: 1px solid var(--sg-gold-dim);
  border-radius: 50%;
  opacity: 0.3;
}

.sg-fibonacci__arc:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 0;
  left: 0;
  clip-path: inset(0 50% 50% 0);
}

.sg-fibonacci__arc:nth-child(2) {
  width: 185px;
  height: 185px;
  top: 0;
  right: 0;
  clip-path: inset(0 0 50% 50%);
}

.sg-fibonacci__arc:nth-child(3) {
  width: 115px;
  height: 115px;
  bottom: 0;
  right: 0;
  clip-path: inset(50% 0 0 50%);
}

.sg-fibonacci__arc:nth-child(4) {
  width: 70px;
  height: 70px;
  bottom: 0;
  left: 57px;
  clip-path: inset(50% 50% 0 0);
}
```

### Metatron's Cube Overlay

```css
/* Metatron's Cube -- 13 circles connected by lines */
/* Best implemented as an inline SVG, styled with CSS */
.sg-metatron {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  opacity: 0.08;
  pointer-events: none;
  animation: sg-pulse 8s ease-in-out infinite;
}

.sg-metatron circle {
  fill: none;
  stroke: var(--sg-gold);
  stroke-width: 0.5;
}

.sg-metatron line {
  stroke: var(--sg-gold);
  stroke-width: 0.3;
  opacity: 0.5;
}

@keyframes sg-pulse {
  0%, 100% { opacity: 0.08; }
  50% { opacity: 0.14; }
}

/* Seed of Life variation (7 circles) */
.sg-seed-of-life {
  position: relative;
  width: 200px;
  height: 200px;
}

.sg-seed-of-life__circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--sg-gold-dim);
  opacity: 0.25;
}

.sg-seed-of-life__circle:nth-child(1) { top: 50px; left: 50px; } /* center */
.sg-seed-of-life__circle:nth-child(2) { top: 0; left: 50px; }
.sg-seed-of-life__circle:nth-child(3) { top: 25px; left: 93px; }
.sg-seed-of-life__circle:nth-child(4) { top: 75px; left: 93px; }
.sg-seed-of-life__circle:nth-child(5) { top: 100px; left: 50px; }
.sg-seed-of-life__circle:nth-child(6) { top: 75px; left: 7px; }
.sg-seed-of-life__circle:nth-child(7) { top: 25px; left: 7px; }
```

### Sacred Geometry Divider

```css
.sg-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sg-spacing-md);
  padding: var(--sg-spacing-xl) 0;
  width: 100%;
}

.sg-divider__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--sg-gold-dim) 50%,
    transparent 100%
  );
  opacity: 0.4;
}

/* Central diamond / Vesica Piscis shape */
.sg-divider__symbol {
  width: 12px;
  height: 12px;
  border: 1px solid var(--sg-gold-dim);
  transform: rotate(45deg);
  opacity: 0.6;
  flex-shrink: 0;
}

/* Variant with three diamonds */
.sg-divider--triple .sg-divider__symbol {
  width: 8px;
  height: 8px;
}

/* Flower of Life dot pattern divider */
.sg-divider--dots {
  gap: var(--sg-spacing-sm);
}

.sg-divider--dots .sg-divider__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--sg-gold-dim);
  opacity: 0.5;
  flex-shrink: 0;
}

.sg-divider--dots .sg-divider__dot:nth-child(odd) {
  opacity: 0.3;
  width: 3px;
  height: 3px;
}
```

### Geometric Glow Effects

```css
/* Radial emanation from a point */
.sg-emanation {
  position: relative;
}

.sg-emanation::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    var(--sg-glow-gold) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: -1;
}

/* Golden line glow on hover */
.sg-glow-line {
  position: relative;
  transition: all 0.4s ease;
}

.sg-glow-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--sg-gold);
  box-shadow: 0 0 8px var(--sg-glow-gold), 0 0 20px var(--sg-glow-gold);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.sg-glow-line:hover::after {
  opacity: 1;
}

/* Concentric circle reveal animation */
@keyframes sg-concentric-reveal {
  0% {
    clip-path: circle(0% at 50% 50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    clip-path: circle(75% at 50% 50%);
    opacity: 1;
  }
}

.sg-reveal {
  animation: sg-concentric-reveal 1s ease-out forwards;
}

/* Rotating geometric border */
@keyframes sg-border-rotate {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 200% 50%;
  }
}

.sg-golden-border {
  position: relative;
  padding: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--sg-gold-dim) 25%,
    var(--sg-gold) 50%,
    var(--sg-gold-dim) 75%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: sg-border-rotate 4s linear infinite;
}

.sg-golden-border > * {
  background: var(--sg-void);
}
```

---

## Design Do's and Don'ts

### Do

- **Do use the golden ratio** to determine layout proportions, spacing, and typographic scale -- it is the mathematical heart of this aesthetic
- **Do favor radial and circular compositions** over rigid rectangular grids; let the circle be your primary compositional unit
- **Do keep geometric linework extremely thin and precise** (0.5-1px); thick lines feel clumsy and break the meditative quality
- **Do let gold emerge from darkness** -- the interplay of luminous golden accents on deep void backgrounds is the core visual signature
- **Do use generous negative space** around geometric patterns; sacred geometry needs room to breathe and be contemplated
- **Do maintain perfect symmetry** in decorative elements and layouts; even minor misalignments are immediately noticeable in this precision-driven aesthetic
- **Do use slow, subtle animations** (rotation, pulse, fade) that evoke cosmic time scales; animations should feel eternal, not attention-grabbing
- **Do incorporate real SVG geometric constructions** (Flower of Life, Metatron's Cube) rather than raster images, ensuring crisp rendering at all resolutions

### Don't

- **Don't use bright, saturated colors** against the dark backgrounds; this aesthetic values muted luminosity over neon vibrancy
- **Don't apply chaotic, random, or asymmetric layouts**; every element must feel mathematically justified and deliberately placed
- **Don't use fast, flashy, or attention-seeking animations**; rapid motion contradicts the meditative stillness of sacred geometry
- **Don't mix too many competing geometric patterns** in one view; choose one or two primary patterns (e.g., Flower of Life + spiral) and let them breathe
- **Don't use drop shadows or material-design elevation** effects; depth should come from glow, opacity, and layered transparency, not simulated physical shadow
- **Don't ignore mathematical accuracy** in geometric constructions; approximate or distorted sacred geometry patterns feel immediately wrong to viewers
- **Don't use rounded, bubbly, or playful UI elements**; the aesthetic demands sharp precision, not friendly softness
- **Don't crowd the page with content** -- if the layout feels dense or cluttered, the contemplative quality is lost

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| Mystical / Occult | Shares esoteric symbolism and dark, gold-accented palettes; Sacred Geometry is the mathematical foundation beneath occult visual language |
| Cosmic / Space | Both use dark void backgrounds and radial emanation; Sacred Geometry adds mathematical precision to cosmic wonder |
| Art Deco | Both emphasize geometric precision, symmetry, and gold accents; Art Deco applies these principles to glamour and luxury |
| Minimalism | Shared appreciation for negative space and restraint; Sacred Geometry fills that space with mathematical meaning |
| Brutalist Web | Both reject conventional decoration; where Brutalism strips away, Sacred Geometry replaces ornament with mathematics |
| New Age / Spiritual | Overlapping subject matter (crystals, energy, meditation); Sacred Geometry is the mathematical rigor beneath spiritual visual culture |
| Mandala Art | Mandalas are a direct expression of sacred geometry principles through concentric radial symmetry |
| Cyberpunk | Both use dark backgrounds with luminous accents; Cyberpunk uses neon while Sacred Geometry uses gold |
| Neomorphism | Both employ subtle, refined visual effects; but Sacred Geometry derives form from mathematics, not skeuomorphic material simulation |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sacred Geometry -- Design Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Raleway:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       SACRED GEOMETRY -- DESIGN TOKEN SYSTEM
       ============================================ */

    :root {
      /* Dark foundations */
      --sg-void: #0b0b14;
      --sg-deep-indigo: #1a1040;
      --sg-midnight: #0f1b3d;
      --sg-nebula: #2d1650;
      --sg-starfield: #2a2a35;

      /* Sacred golds */
      --sg-gold: #c8a34d;
      --sg-gold-bright: #e8c547;
      --sg-gold-pale: #f0dfa0;
      --sg-gold-dim: #8b7a3a;

      /* Spiritual purples */
      --sg-violet: #7b2fbe;
      --sg-indigo: #4b0082;
      --sg-crown: #6a0dad;

      /* Light and purity */
      --sg-white: #f0ede6;
      --sg-silver: #c0bfc0;

      /* Earth and nature */
      --sg-bronze: #8b6f47;
      --sg-teal: #1a6b6a;
      --sg-rose: #c47a8a;

      /* Glow effects */
      --sg-glow-gold: rgba(200, 163, 77, 0.35);
      --sg-glow-gold-strong: rgba(232, 197, 71, 0.5);
      --sg-glow-violet: rgba(123, 47, 190, 0.3);
      --sg-glass: rgba(255, 255, 255, 0.04);
      --sg-glass-gold: rgba(200, 163, 77, 0.06);
      --sg-glass-border: rgba(200, 163, 77, 0.15);

      /* Sacred proportions */
      --sg-phi: 1.618;
      --sg-spacing-xs: 0.382rem;
      --sg-spacing-sm: 0.618rem;
      --sg-spacing-md: 1rem;
      --sg-spacing-lg: 1.618rem;
      --sg-spacing-xl: 2.618rem;
      --sg-spacing-2xl: 4.236rem;

      /* Typography scale */
      --sg-font-xs: 0.75rem;
      --sg-font-sm: 0.875rem;
      --sg-font-base: 1rem;
      --sg-font-md: 1.125rem;
      --sg-font-lg: 1.618rem;
      --sg-font-xl: 2.618rem;
      --sg-font-2xl: 4.236rem;
      --sg-font-3xl: 6.854rem;
    }

    /* ============================================
       RESET & BASE
       ============================================ */

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      font-size: var(--sg-font-base);
      line-height: var(--sg-phi);
      color: var(--sg-white);
      background-color: var(--sg-void);
      letter-spacing: 0.03em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    a {
      color: var(--sg-gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--sg-gold-bright);
    }

    /* ============================================
       NAVIGATION
       ============================================ */

    .sg-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--sg-spacing-md) var(--sg-spacing-xl);
      background: rgba(11, 11, 20, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--sg-glass-border);
    }

    .sg-nav__logo {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-lg);
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--sg-gold);
      text-decoration: none;
    }

    .sg-nav__logo::after {
      content: ' \25C7';
      font-size: 0.5em;
      vertical-align: middle;
      margin-left: 0.5em;
      color: var(--sg-gold-dim);
    }

    .sg-nav__links {
      display: flex;
      align-items: center;
      gap: var(--sg-spacing-xl);
      list-style: none;
    }

    .sg-nav__link {
      font-family: 'Raleway', sans-serif;
      font-size: var(--sg-font-sm);
      font-weight: 400;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--sg-silver);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .sg-nav__link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 1px;
      background: var(--sg-gold);
      transition: width 0.3s ease, left 0.3s ease;
    }

    .sg-nav__link:hover {
      color: var(--sg-gold);
    }

    .sg-nav__link:hover::after {
      width: 100%;
      left: 0;
    }

    /* ============================================
       HERO SECTION
       ============================================ */

    .sg-hero {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: var(--sg-spacing-2xl);
      text-align: center;
      overflow: hidden;
      background: radial-gradient(
        ellipse at center,
        var(--sg-deep-indigo) 0%,
        var(--sg-void) 70%
      );
    }

    /* Metatron's Cube SVG will be placed here */
    .sg-hero__geometry {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 700px;
      opacity: 0.07;
      animation: sg-slow-rotate 180s linear infinite;
      pointer-events: none;
    }

    .sg-hero__geometry circle {
      fill: none;
      stroke: var(--sg-gold);
      stroke-width: 0.5;
    }

    .sg-hero__geometry line {
      stroke: var(--sg-gold);
      stroke-width: 0.3;
      opacity: 0.6;
    }

    @keyframes sg-slow-rotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    /* Outer glowing ring */
    .sg-hero::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 550px;
      height: 550px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 1px solid rgba(200, 163, 77, 0.08);
      box-shadow: 0 0 80px rgba(200, 163, 77, 0.04);
      pointer-events: none;
    }

    .sg-hero__label {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-xs);
      font-weight: 600;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: var(--sg-gold-dim);
      margin-bottom: var(--sg-spacing-lg);
      position: relative;
      z-index: 1;
    }

    .sg-hero__title {
      font-family: 'Cinzel', serif;
      font-size: clamp(2.5rem, 8vw, var(--sg-font-3xl));
      font-weight: 400;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--sg-gold);
      line-height: 1.1;
      margin-bottom: var(--sg-spacing-lg);
      position: relative;
      z-index: 1;
      text-shadow: 0 0 40px var(--sg-glow-gold);
    }

    .sg-hero__subtitle {
      font-family: 'Cormorant Garamond', serif;
      font-size: var(--sg-font-lg);
      font-weight: 300;
      font-style: italic;
      color: var(--sg-gold-pale);
      max-width: 36em;
      margin-bottom: var(--sg-spacing-2xl);
      line-height: var(--sg-phi);
      position: relative;
      z-index: 1;
    }

    .sg-hero__cta {
      position: relative;
      z-index: 1;
    }

    /* ============================================
       BUTTONS
       ============================================ */

    .sg-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--sg-spacing-sm);
      padding: var(--sg-spacing-sm) var(--sg-spacing-xl);
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-sm);
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--sg-gold);
      background: transparent;
      border: 1px solid var(--sg-gold-dim);
      cursor: pointer;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .sg-button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, var(--sg-glow-gold) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: width 0.5s ease, height 0.5s ease;
      z-index: 0;
    }

    .sg-button:hover::before {
      width: 300%;
      height: 300%;
    }

    .sg-button:hover {
      color: var(--sg-gold-bright);
      border-color: var(--sg-gold);
      box-shadow: 0 0 15px var(--sg-glow-gold), inset 0 0 15px rgba(200, 163, 77, 0.1);
    }

    .sg-button span {
      position: relative;
      z-index: 1;
    }

    .sg-button--filled {
      background: linear-gradient(135deg, var(--sg-gold-dim), var(--sg-gold), var(--sg-gold-dim));
      color: var(--sg-void);
      border-color: var(--sg-gold);
      font-weight: 700;
    }

    .sg-button--filled:hover {
      background: linear-gradient(135deg, var(--sg-gold), var(--sg-gold-bright), var(--sg-gold));
      box-shadow: 0 0 25px var(--sg-glow-gold-strong), 0 0 60px var(--sg-glow-gold);
    }

    /* ============================================
       DIVIDER
       ============================================ */

    .sg-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--sg-spacing-md);
      padding: var(--sg-spacing-2xl) var(--sg-spacing-xl);
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }

    .sg-divider__line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--sg-gold-dim), transparent);
      opacity: 0.4;
    }

    .sg-divider__diamond {
      width: 8px;
      height: 8px;
      border: 1px solid var(--sg-gold-dim);
      transform: rotate(45deg);
      opacity: 0.6;
      flex-shrink: 0;
    }

    /* ============================================
       ABOUT / PRINCIPLES SECTION
       ============================================ */

    .sg-section {
      padding: var(--sg-spacing-2xl) var(--sg-spacing-xl);
      max-width: 1100px;
      margin: 0 auto;
    }

    .sg-section--dark {
      background: var(--sg-deep-indigo);
    }

    .sg-section__label {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-xs);
      font-weight: 600;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: var(--sg-gold-dim);
      text-align: center;
      margin-bottom: var(--sg-spacing-sm);
    }

    .sg-section__title {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-2xl);
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--sg-gold);
      text-align: center;
      margin-bottom: var(--sg-spacing-lg);
    }

    .sg-section__intro {
      font-family: 'Cormorant Garamond', serif;
      font-size: var(--sg-font-md);
      font-weight: 300;
      font-style: italic;
      color: var(--sg-gold-pale);
      text-align: center;
      max-width: 42em;
      margin: 0 auto var(--sg-spacing-2xl);
      line-height: var(--sg-phi);
    }

    /* ============================================
       GOLDEN RATIO GRID (61.8% / 38.2%)
       ============================================ */

    .sg-golden-grid {
      display: grid;
      grid-template-columns: 1fr 0.618fr;
      gap: var(--sg-spacing-xl);
      align-items: start;
    }

    @media (max-width: 768px) {
      .sg-golden-grid {
        grid-template-columns: 1fr;
      }
    }

    /* ============================================
       CARDS
       ============================================ */

    .sg-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--sg-spacing-xl);
    }

    .sg-card {
      position: relative;
      background: linear-gradient(145deg, rgba(26, 16, 64, 0.6), rgba(11, 11, 20, 0.8));
      border: 1px solid var(--sg-glass-border);
      border-radius: 2px;
      padding: var(--sg-spacing-xl);
      overflow: hidden;
      transition: border-color 0.5s ease, box-shadow 0.5s ease;
    }

    .sg-card::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 1px solid rgba(200, 163, 77, 0.08);
      pointer-events: none;
    }

    .sg-card:hover {
      border-color: var(--sg-gold-dim);
      box-shadow: 0 0 20px var(--sg-glow-gold), 0 0 60px rgba(200, 163, 77, 0.08);
    }

    .sg-card__icon {
      width: 48px;
      height: 48px;
      margin-bottom: var(--sg-spacing-md);
      opacity: 0.7;
    }

    .sg-card__icon svg {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: var(--sg-gold);
      stroke-width: 1;
    }

    .sg-card__title {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-md);
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--sg-gold);
      margin-bottom: var(--sg-spacing-sm);
    }

    .sg-card__text {
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      font-size: var(--sg-font-base);
      line-height: var(--sg-phi);
      color: var(--sg-silver);
    }

    /* ============================================
       FEATURE / GOLDEN RATIO SPLIT
       ============================================ */

    .sg-feature {
      position: relative;
      padding: var(--sg-spacing-2xl) 0;
    }

    .sg-feature__content {
      max-width: 36em;
    }

    .sg-feature__title {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-xl);
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--sg-gold);
      margin-bottom: var(--sg-spacing-md);
    }

    .sg-feature__text {
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      line-height: var(--sg-phi);
      color: var(--sg-silver);
      margin-bottom: var(--sg-spacing-lg);
    }

    /* Geometric illustration placeholder */
    .sg-feature__visual {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1;
      position: relative;
    }

    .sg-feature__visual svg {
      width: 80%;
      height: 80%;
      opacity: 0.3;
    }

    /* ============================================
       TESTIMONIAL / QUOTE
       ============================================ */

    .sg-quote {
      text-align: center;
      padding: var(--sg-spacing-2xl);
      position: relative;
    }

    .sg-quote__text {
      font-family: 'Cormorant Garamond', serif;
      font-size: var(--sg-font-xl);
      font-weight: 300;
      font-style: italic;
      color: var(--sg-gold-pale);
      line-height: 1.4;
      max-width: 28em;
      margin: 0 auto var(--sg-spacing-lg);
    }

    .sg-quote__text::before {
      content: '\201C';
      font-size: 3em;
      color: var(--sg-gold-dim);
      display: block;
      line-height: 0.5;
      margin-bottom: var(--sg-spacing-sm);
    }

    .sg-quote__attribution {
      font-family: 'Cinzel', serif;
      font-size: var(--sg-font-sm);
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--sg-gold-dim);
    }

    /* ============================================
       FOOTER
       ============================================ */

    .sg-footer {
      padding: var(--sg-spacing-2xl) var(--sg-spacing-xl);
      text-align: center;
      border-top: 1px solid var(--sg-glass-border);
      background: rgba(11, 11, 20, 0.5);
    }

    .sg-footer__symbol {
      width: 40px;
      height: 40px;
      margin: 0 auto var(--sg-spacing-md);
      opacity: 0.4;
    }

    .sg-footer__symbol svg {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: var(--sg-gold);
      stroke-width: 0.5;
    }

    .sg-footer__text {
      font-family: 'Raleway', sans-serif;
      font-size: var(--sg-font-sm);
      font-weight: 300;
      letter-spacing: 0.1em;
      color: var(--sg-silver);
      opacity: 0.6;
    }

    .sg-footer__links {
      display: flex;
      justify-content: center;
      gap: var(--sg-spacing-lg);
      margin-bottom: var(--sg-spacing-lg);
      list-style: none;
    }

    .sg-footer__link {
      font-family: 'Raleway', sans-serif;
      font-size: var(--sg-font-sm);
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--sg-silver);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .sg-footer__link:hover {
      color: var(--sg-gold);
    }

    /* ============================================
       UTILITY CLASSES
       ============================================ */

    .sg-text-center { text-align: center; }
    .sg-text-gold { color: var(--sg-gold); }
    .sg-text-pale { color: var(--sg-gold-pale); }
    .sg-mt-lg { margin-top: var(--sg-spacing-lg); }
    .sg-mb-lg { margin-bottom: var(--sg-spacing-lg); }
    .sg-mt-xl { margin-top: var(--sg-spacing-xl); }
    .sg-mb-xl { margin-bottom: var(--sg-spacing-xl); }

    /* ============================================
       RESPONSIVE
       ============================================ */

    @media (max-width: 768px) {
      .sg-nav {
        flex-direction: column;
        gap: var(--sg-spacing-md);
        padding: var(--sg-spacing-sm) var(--sg-spacing-md);
      }

      .sg-nav__links {
        gap: var(--sg-spacing-md);
      }

      .sg-hero__title {
        letter-spacing: 0.08em;
      }

      .sg-section__title {
        font-size: var(--sg-font-xl);
      }

      .sg-cards {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- ========================================
       NAVIGATION
       ======================================== -->
  <nav class="sg-nav">
    <a href="#" class="sg-nav__logo">Geometria</a>
    <ul class="sg-nav__links">
      <li><a href="#principles" class="sg-nav__link">Principles</a></li>
      <li><a href="#patterns" class="sg-nav__link">Patterns</a></li>
      <li><a href="#golden-ratio" class="sg-nav__link">Golden Ratio</a></li>
      <li><a href="#wisdom" class="sg-nav__link">Wisdom</a></li>
    </ul>
  </nav>

  <!-- ========================================
       HERO
       ======================================== -->
  <section class="sg-hero">
    <!-- Metatron's Cube SVG (simplified) -->
    <svg class="sg-hero__geometry" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <!-- Central circle -->
      <circle cx="250" cy="250" r="30"/>
      <!-- Inner ring: 6 circles -->
      <circle cx="250" cy="180" r="30"/>
      <circle cx="310" cy="215" r="30"/>
      <circle cx="310" cy="285" r="30"/>
      <circle cx="250" cy="320" r="30"/>
      <circle cx="190" cy="285" r="30"/>
      <circle cx="190" cy="215" r="30"/>
      <!-- Outer ring: 6 circles -->
      <circle cx="250" cy="110" r="30"/>
      <circle cx="371" cy="180" r="30"/>
      <circle cx="371" cy="320" r="30"/>
      <circle cx="250" cy="390" r="30"/>
      <circle cx="129" cy="320" r="30"/>
      <circle cx="129" cy="180" r="30"/>
      <!-- Connecting lines (subset for visual clarity) -->
      <line x1="250" y1="110" x2="371" y2="180"/>
      <line x1="371" y1="180" x2="371" y2="320"/>
      <line x1="371" y1="320" x2="250" y2="390"/>
      <line x1="250" y1="390" x2="129" y2="320"/>
      <line x1="129" y1="320" x2="129" y2="180"/>
      <line x1="129" y1="180" x2="250" y2="110"/>
      <line x1="250" y1="110" x2="371" y2="320"/>
      <line x1="371" y1="180" x2="129" y2="320"/>
      <line x1="371" y1="320" x2="129" y2="180"/>
      <line x1="250" y1="390" x2="250" y2="110"/>
      <line x1="129" y1="180" x2="371" y2="180"/>
      <line x1="129" y1="320" x2="371" y2="320"/>
      <line x1="250" y1="110" x2="250" y2="390"/>
      <line x1="250" y1="110" x2="129" y2="320"/>
      <line x1="371" y1="180" x2="250" y2="390"/>
      <!-- Outer circle encompassing all -->
      <circle cx="250" cy="250" r="200" stroke-width="0.3"/>
    </svg>

    <span class="sg-hero__label">As Above, So Below</span>
    <h1 class="sg-hero__title">Sacred<br>Geometry</h1>
    <p class="sg-hero__subtitle">
      The mathematical language of creation -- where the Flower of Life blooms,
      the Golden Ratio spirals, and Metatron's Cube reveals the architecture of the universe.
    </p>
    <div class="sg-hero__cta">
      <button class="sg-button">
        <span>Explore the Patterns</span>
      </button>
    </div>
  </section>

  <!-- ========================================
       DIVIDER
       ======================================== -->
  <div class="sg-divider">
    <div class="sg-divider__line"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__line"></div>
  </div>

  <!-- ========================================
       PRINCIPLES SECTION
       ======================================== -->
  <section id="principles" class="sg-section">
    <span class="sg-section__label">The Foundation</span>
    <h2 class="sg-section__title">Eternal Principles</h2>
    <p class="sg-section__intro">
      Sacred geometry reveals the hidden mathematical order beneath the visible world --
      patterns that govern the growth of shells, the arrangement of petals,
      and the structure of galaxies.
    </p>

    <div class="sg-cards">
      <div class="sg-card">
        <div class="sg-card__icon">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20"/>
            <circle cx="24" cy="24" r="12"/>
            <circle cx="24" cy="24" r="4"/>
          </svg>
        </div>
        <h3 class="sg-card__title">Unity</h3>
        <p class="sg-card__text">
          The circle -- without beginning or end -- represents the
          infinite wholeness from which all forms emerge. It is the
          first shape, the seed of all geometry.
        </p>
      </div>

      <div class="sg-card">
        <div class="sg-card__icon">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <polygon points="24,4 44,40 4,40"/>
          </svg>
        </div>
        <h3 class="sg-card__title">Trinity</h3>
        <p class="sg-card__text">
          The triangle embodies the principle of three -- the minimum
          vertices needed to define a plane. It represents balance,
          strength, and the dynamic equilibrium of opposing forces.
        </p>
      </div>

      <div class="sg-card">
        <div class="sg-card__icon">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <polygon points="24,2 46,14 46,38 24,46 2,38 2,14"/>
          </svg>
        </div>
        <h3 class="sg-card__title">Harmony</h3>
        <p class="sg-card__text">
          The hexagon -- nature's most efficient tiling shape -- appears
          in honeycombs, snowflakes, and basalt columns. It represents
          optimal structure and effortless order.
        </p>
      </div>
    </div>
  </section>

  <!-- ========================================
       DIVIDER
       ======================================== -->
  <div class="sg-divider">
    <div class="sg-divider__line"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__line"></div>
  </div>

  <!-- ========================================
       GOLDEN RATIO SECTION
       ======================================== -->
  <section id="golden-ratio" class="sg-section">
    <span class="sg-section__label">Phi = 1.618...</span>
    <h2 class="sg-section__title">The Golden Ratio</h2>
    <p class="sg-section__intro">
      The divine proportion that governs the spiral of a nautilus shell,
      the branching of trees, and the proportions of the Parthenon.
    </p>

    <div class="sg-golden-grid">
      <div class="sg-feature__content">
        <h3 class="sg-feature__title">Divine Proportion</h3>
        <p class="sg-feature__text">
          The Golden Ratio, approximately 1.618, is found when a line is
          divided such that the ratio of the whole to the longer part equals
          the ratio of the longer part to the shorter. This single number
          governs the Fibonacci spiral that appears in pinecone scales,
          sunflower seed arrangements, and the arms of spiral galaxies.
        </p>
        <p class="sg-feature__text">
          In design, phi provides the mathematical basis for layouts that
          feel instinctively balanced. A two-column layout split at 61.8%
          and 38.2% mirrors the proportions found throughout the natural
          world, creating harmony without conscious effort.
        </p>
        <button class="sg-button--filled sg-button">
          <span>Learn More</span>
        </button>
      </div>

      <div class="sg-feature__visual">
        <!-- Golden Spiral SVG -->
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#c8a34d" stroke-width="0.8">
          <!-- Golden rectangles (nested) -->
          <rect x="10" y="10" width="280" height="173" rx="0"/>
          <rect x="10" y="183" width="173" height="107" rx="0"/>
          <rect x="183" y="183" width="107" height="66" rx="0"/>
          <rect x="183" y="249" width="66" height="41" rx="0"/>
          <rect x="249" y="249" width="41" height="25" rx="0"/>
          <!-- Spiral approximation using arcs -->
          <path d="M 290 10 A 280 173 0 0 1 10 183" stroke-width="1" opacity="0.6"/>
          <path d="M 10 183 A 173 107 0 0 1 183 290" stroke-width="1" opacity="0.6"/>
          <path d="M 183 290 A 107 66 0 0 1 290 249" stroke-width="1" opacity="0.6"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- ========================================
       PATTERNS SECTION (full-width dark)
       ======================================== -->
  <section id="patterns" style="background: var(--sg-deep-indigo); padding: var(--sg-spacing-2xl) 0;">
    <div class="sg-section" style="padding-top: 0; padding-bottom: 0;">
      <span class="sg-section__label">Sacred Forms</span>
      <h2 class="sg-section__title">The Patterns</h2>
      <p class="sg-section__intro">
        From the simplest circle to the most complex polyhedra, sacred geometry
        traces the unfolding of form from unity into infinite diversity.
      </p>

      <div class="sg-cards">
        <div class="sg-card">
          <h3 class="sg-card__title">Flower of Life</h3>
          <p class="sg-card__text">
            Nineteen interlocking circles arranged in hexagonal symmetry, each
            circle's center touching the circumference of its neighbors. Within
            this pattern lie the Seed of Life, the Egg of Life, and the Fruit
            of Life -- a progression from simplicity to complexity.
          </p>
        </div>

        <div class="sg-card">
          <h3 class="sg-card__title">Metatron's Cube</h3>
          <p class="sg-card__text">
            Thirteen circles connected by 78 lines from center to center,
            forming a figure of extraordinary complexity. Within its web,
            all five Platonic Solids can be traced -- the tetrahedron, cube,
            octahedron, dodecahedron, and icosahedron.
          </p>
        </div>

        <div class="sg-card">
          <h3 class="sg-card__title">Fibonacci Spiral</h3>
          <p class="sg-card__text">
            The sequence 0, 1, 1, 2, 3, 5, 8, 13, 21... generates a spiral
            that approximates the Golden Ratio as it grows. This pattern
            describes the growth of nautilus shells, hurricane formations,
            and the spiral arms of galaxies.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================
       QUOTE / WISDOM SECTION
       ======================================== -->
  <div class="sg-divider">
    <div class="sg-divider__line"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__diamond"></div>
    <div class="sg-divider__line"></div>
  </div>

  <section id="wisdom" class="sg-section">
    <div class="sg-quote">
      <p class="sg-quote__text">
        Geometry is knowledge of the eternally existent. Numbers have
        a way of taking a man by the hand and leading him along the
        path of reason.
      </p>
      <span class="sg-quote__attribution">Plato</span>
    </div>
  </section>

  <!-- ========================================
       FOOTER
       ======================================== -->
  <footer class="sg-footer">
    <div class="sg-footer__symbol">
      <!-- Seed of Life (simplified) -->
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8"/>
        <circle cx="20" cy="12" r="8"/>
        <circle cx="27" cy="16" r="8"/>
        <circle cx="27" cy="24" r="8"/>
        <circle cx="20" cy="28" r="8"/>
        <circle cx="13" cy="24" r="8"/>
        <circle cx="13" cy="16" r="8"/>
      </svg>
    </div>
    <ul class="sg-footer__links">
      <li><a href="#" class="sg-footer__link">Principles</a></li>
      <li><a href="#" class="sg-footer__link">Patterns</a></li>
      <li><a href="#" class="sg-footer__link">Golden Ratio</a></li>
      <li><a href="#" class="sg-footer__link">Wisdom</a></li>
    </ul>
    <p class="sg-footer__text">
      As above, so below. As within, so without. &mdash; The Emerald Tablet
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use SVG for all geometric constructions**: The Flower of Life, Metatron's Cube, Seed of Life, and Fibonacci spirals must be vector-based to maintain mathematical precision at any resolution; raster images of geometry lose their essential crispness
- **Derive your spacing scale from phi**: Set a base value (e.g., 1rem) and multiply by 1.618 for each step up (1rem, 1.618rem, 2.618rem, 4.236rem); this embeds the golden ratio into the invisible rhythm of the page
- **Keep geometric overlays at very low opacity** (0.05-0.15): Sacred geometry patterns should enhance without overwhelming; they form a subtle mathematical substrate beneath the content, not a competing visual layer
- **Animate with cosmic patience**: Rotation speeds of 120-180 seconds per revolution and pulse durations of 6-10 seconds reflect the vast time scales that sacred geometry references; anything faster than 3 seconds feels jarring
- **Test symmetry at multiple viewport widths**: The precision demanded by this aesthetic means that even slight asymmetries from responsive reflow are noticeable; use CSS clamp() and careful breakpoint management to maintain visual balance
- **Consider prefers-reduced-motion**: Wrap all rotation and pulse animations in a `@media (prefers-reduced-motion: no-preference)` query; the aesthetic should work as a still composition, with motion as progressive enhancement
- **Use CSS custom properties for the phi-based scale**: Defining all proportions as variables ensures mathematical consistency when adjusting the design, and makes it easy to re-derive the entire scale from a single base value change
- **Layer geometric patterns using z-index and pointer-events: none**: Decorative geometry should exist on separate layers that do not interfere with content interaction; use pseudo-elements (::before, ::after) for pattern overlays to keep the HTML semantic and clean
