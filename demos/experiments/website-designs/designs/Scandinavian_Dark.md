# Scandinavian Dark Design Reference

## Overview

Scandinavian Dark -- also known as **Nordic Noir** in interior and visual design circles -- is the moody, inverted sibling of traditional Scandinavian minimalism. Where classic Scandinavian design celebrates airy whites, pale birch, and light-flooded interiors, Scandinavian Dark takes the same foundational principles of **functional simplicity, clean geometry, natural material reverence, and restrained composition** and submerges them in a palette of matte blacks, deep charcoals, smoked oak, and cool slate grays. The result is an aesthetic that feels simultaneously warm and austere, intimate and expansive -- a design language shaped by the long, dark Nordic winters rather than the bright midnight sun of summer.

Rooted in the Danish concept of *hygge* (cozy well-being) and the broader Scandinavian commitment to *lagom* (balance, "just enough"), Scandinavian Dark achieves coziness not through brightness but through **layered texture, warm undertones within dark palettes, and the interplay of matte and organic surfaces**. Charred timber (*shou sugi ban*), blackened steel, dark stoneware ceramics, slate, and brushed concrete replace the bleached woods and white ceramics of their lighter counterpart. Accent warmth comes from cognac leather, amber-toned lighting, deep forest greens, and the occasional muted copper or brass detail.

In web and UI design, Scandinavian Dark translates into **dark-mode interfaces with exceptional whitespace discipline, understated typography using geometric sans-serifs, subtle micro-interactions, and a material-inspired approach to surface elevation**. Cards and containers use slight tonal shifts rather than harsh borders. Imagery favors desaturated, high-contrast photography with natural subject matter -- forests, stone, still water, architectural concrete. The overall impression is one of **quiet authority**: the interface never shouts, but every element is precisely placed and purposeful. It borrows confidence from the broader Nordic design tradition -- the idea that removing the unnecessary makes the necessary speak -- while wrapping that philosophy in a darker, more dramatic visual envelope. Unlike generic "dark mode," Scandinavian Dark is specifically warm, textured, and organic where standard dark themes are often cold and flat.

---

## Visual Characteristics

### Core Design Traits

- **Matte black and charcoal surfaces** -- backgrounds and containers use deep, non-reflective dark tones that absorb visual noise and create a sense of depth without glossiness
- **Dark natural wood grain** -- smoked oak, charred timber, walnut, and ebonized ash textures provide organic warmth within the dark palette
- **Layered tonal grays** -- multiple shades of gray (from near-black to mid-tone slate) create hierarchy and separation without introducing color
- **Warm accent restraint** -- cognac leather, amber, muted copper, and deep forest green appear sparingly as accent colors, never dominating the composition
- **Generous negative space** -- true to Scandinavian minimalism, the dark canvas is left largely open; whitespace (or rather, "darkspace") is a deliberate design element
- **Subtle texture and materiality** -- surfaces hint at physical materials through fine grain, soft noise overlays, or gentle gradients rather than flat solid fills
- **Soft, diffused lighting cues** -- UI shadows and glows simulate the warm, indirect light of Nordic interiors; harsh drop shadows are replaced by gentle ambient occlusion
- **High-contrast typography** -- light text on dark backgrounds uses careful contrast ratios; display text may use off-white or warm ivory rather than pure white to reduce harshness
- **Organic geometric forms** -- shapes are clean and geometric but softened with gentle border-radius values; hard angles are rare, rounded rectangles and ellipses are preferred
- **Desaturated photography** -- imagery is muted, high-contrast, and favors natural subjects: stone, water, forest, fog, architectural concrete, dark ceramics
- **Minimal decorative elements** -- ornamentation is nearly absent; thin hairline rules, monochromatic icons, and subtle dividers replace borders and decorative graphics
- **Atmospheric depth** -- subtle background gradients, layered translucent surfaces, and z-axis elevation create a sense of three-dimensional space within the dark environment

### Design Principles

- **Function dictates form** -- every visual element must serve a purpose; decoration for its own sake is antithetical to the aesthetic
- **Less, but better** -- directly echoing Dieter Rams, Scandinavian Dark reduces elements to their essential expression, then refines what remains
- **Warmth within darkness** -- the palette is dark but never cold or sterile; warm undertones, natural textures, and amber-toned accents prevent the design from feeling clinical
- **Material honesty** -- surfaces should suggest real materials (wood, stone, leather, metal) rather than arbitrary color; the digital interface references the physical world
- **Democratic clarity** -- information architecture is clear and accessible; the dark palette enhances focus on content rather than obscuring it
- **Quiet confidence** -- the design does not compete for attention; it creates a calm, authoritative environment where content speaks and the interface recedes
- **Sustainable simplicity** -- fewer visual elements mean faster load times, lower energy consumption on OLED displays, and reduced cognitive load; the aesthetic aligns with ecological values
- **Contrast as hierarchy** -- rather than color-coding, hierarchy is established through tonal contrast, scale, weight, and spatial relationships

---

## Color Palette

The Scandinavian Dark palette draws from the natural environments of the Nordic landscape: volcanic basalt, charred pine forests, slate fjord cliffs, dark winter seas, and the warm amber glow of candlelight against dark interiors. Colors are deeply desaturated, leaning warm in the neutrals and cool in the accents, with a few restrained earth tones for interactive elements and emphasis.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Midnight Black | `#0E0E10` | Deepest background, page canvas, OLED-friendly base |
| Charcoal | `#1A1A1E` | Primary background, main content area fills |
| Dark Slate | `#242428` | Elevated surfaces, card backgrounds, modal overlays |
| Graphite | `#2E2E34` | Secondary surfaces, sidebar backgrounds, input fields |
| Ash Gray | `#3C3C44` | Borders, subtle dividers, inactive element backgrounds |
| Stone | `#5A5A64` | Muted text, placeholder copy, disabled states |
| Fog | `#8A8A94` | Secondary body text, captions, metadata |
| Smoke White | `#C8C8CE` | Primary body text, readable content on dark surfaces |
| Nordic Ivory | `#E8E4DE` | High-emphasis text, headings, display typography |
| Warm White | `#F5F0E8` | Maximum contrast text, hero titles, critical labels |
| Smoked Oak | `#6B5340` | Warm accent, natural material reference, subtle highlights |
| Cognac | `#A0714A` | Primary warm accent, interactive elements, links, CTAs |
| Amber Glow | `#D4A054` | Highlight accent, hover states, active indicators |
| Forest Pine | `#2A4A3A` | Cool accent, success states, nature-inspired depth |
| Fjord Blue | `#3A4A5A` | Cool neutral accent, secondary interactive states |

### CSS Custom Properties

```css
:root {
  /* Dark base tones */
  --scandi-midnight: #0e0e10;
  --scandi-charcoal: #1a1a1e;
  --scandi-dark-slate: #242428;
  --scandi-graphite: #2e2e34;
  --scandi-ash: #3c3c44;

  /* Neutral grays */
  --scandi-stone: #5a5a64;
  --scandi-fog: #8a8a94;

  /* Light tones */
  --scandi-smoke-white: #c8c8ce;
  --scandi-ivory: #e8e4de;
  --scandi-warm-white: #f5f0e8;

  /* Warm accents */
  --scandi-smoked-oak: #6b5340;
  --scandi-cognac: #a0714a;
  --scandi-amber: #d4a054;

  /* Cool accents */
  --scandi-pine: #2a4a3a;
  --scandi-fjord: #3a4a5a;

  /* Functional mappings */
  --scandi-bg-primary: var(--scandi-charcoal);
  --scandi-bg-secondary: var(--scandi-dark-slate);
  --scandi-bg-surface: var(--scandi-graphite);
  --scandi-bg-elevated: var(--scandi-ash);
  --scandi-text-primary: var(--scandi-ivory);
  --scandi-text-body: var(--scandi-smoke-white);
  --scandi-text-muted: var(--scandi-fog);
  --scandi-text-disabled: var(--scandi-stone);
  --scandi-accent-primary: var(--scandi-cognac);
  --scandi-accent-highlight: var(--scandi-amber);
  --scandi-accent-success: var(--scandi-pine);
  --scandi-border: var(--scandi-ash);
  --scandi-border-subtle: rgba(255, 255, 255, 0.06);
}
```

---

## Typography

Typography in Scandinavian Dark design is clean, geometric, and precisely spaced. The tradition favors sans-serif typefaces that embody the functional clarity of Nordic graphic design -- typefaces with even stroke widths, open apertures, and a humanist warmth that prevents them from feeling mechanical. Headings use generous letter-spacing and tend toward lighter weights to maintain the airy minimalism even within the dark palette. Body text prioritizes readability with comfortable line-heights and careful contrast ratios against dark backgrounds.

### Recommended Google Fonts

| Font | Style | Weight Range | Usage |
|------|-------|-------------|-------|
| Inter | Geometric Sans | 300 -- 700 | Body text, UI elements, all-purpose |
| DM Sans | Geometric Humanist | 400 -- 700 | Headings, subheadings, nav labels |
| Josefin Sans | Elegant Geometric | 300 -- 600 | Display headings, hero text, titles |
| Work Sans | Functional Sans | 300 -- 600 | Body text, secondary content, captions |
| Cormorant Garamond | Classical Serif | 300 -- 600 | Editorial accent, pull quotes, contrast pairing |
| Source Serif 4 | Modern Serif | 400 -- 700 | Long-form body text, article content |

### Font Pairings

| Heading | Body | Mood |
|---------|------|------|
| Josefin Sans (300) | Inter (400) | Elegant and functional, classic Scandinavian feel |
| DM Sans (500) | Work Sans (400) | Modern and approachable, balanced weight |
| Josefin Sans (300) | Source Serif 4 (400) | Editorial contrast, warm and refined |
| DM Sans (700) | Inter (300) | Bold and clean, strong hierarchy |
| Cormorant Garamond (300) | Work Sans (400) | Sophisticated serif/sans contrast, Nordic editorial |

### CSS Example

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&display=swap');

/* Base typography */
body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--scandi-text-body);
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Display heading -- hero and page titles */
h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.15;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--scandi-text-primary);
}

/* Section heading */
h2 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.25;
  letter-spacing: 0.02em;
  color: var(--scandi-text-primary);
}

/* Subsection heading */
h3 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.35;
  letter-spacing: 0.015em;
  color: var(--scandi-text-body);
}

/* Small caps label */
.label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--scandi-text-muted);
}

/* Pull quote */
blockquote {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--scandi-accent-primary);
  border-left: 2px solid var(--scandi-accent-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
}
```

---

## Layout Principles

- **Maximum content width of 1200px** -- content is contained within a comfortable reading frame; wider viewports show the dark canvas as a framing device
- **Generous vertical spacing** -- sections are separated by 6rem--10rem of vertical space; elements breathe within generous padding
- **Asymmetric grid with balance** -- layouts use off-center compositions (e.g., 7/5 or 8/4 column splits) but maintain visual balance through weight and spacing
- **Single-column reading flow** -- long-form content defaults to a single column (max 65ch) for optimal readability
- **Card-based content grouping** -- related content is grouped in elevated card surfaces with subtle tonal differentiation rather than visible borders
- **Sticky minimal navigation** -- navigation is slim, fixed, and uses translucent dark backgrounds with backdrop-blur to maintain immersion
- **Full-bleed imagery with dark overlays** -- hero sections and feature images extend edge-to-edge with dark gradient overlays that integrate them into the dark palette
- **Vertical rhythm from consistent spacing scale** -- use a base unit (8px) and a modular scale (8, 16, 24, 32, 48, 64, 96, 128) for all margins, padding, and gaps
- **Progressive disclosure** -- content is revealed through scroll, not crammed above the fold; the dark canvas creates a theater-like focus experience
- **Minimal grid lines** -- the layout grid is invisible; alignment is achieved through consistent spacing, not visible borders or column markers
- **Z-axis depth hierarchy** -- important content sits on elevated surfaces (lighter dark tones); less important content recedes into the background
- **Responsive simplification** -- on mobile, layouts collapse gracefully into single-column stacks with maintained vertical rhythm and touch-friendly spacing (minimum 44px tap targets)

---

## CSS / Design Techniques

### Card Component

Cards in Scandinavian Dark use subtle surface elevation through tonal shifts rather than borders or strong shadows. The effect suggests a physical surface -- like a slate tile resting on a dark stone counter.

```css
.scandi-card {
  background: var(--scandi-bg-secondary);
  border: 1px solid var(--scandi-border-subtle);
  border-radius: 12px;
  padding: 2rem;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.scandi-card:hover {
  background: var(--scandi-bg-surface);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.scandi-card__label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--scandi-accent-primary);
  margin-bottom: 0.75rem;
}

.scandi-card__title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--scandi-text-primary);
  margin-bottom: 0.5rem;
}

.scandi-card__body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--scandi-text-muted);
}
```

### Button Component

Buttons are understated and geometric. The primary button uses the warm cognac accent against the dark canvas; secondary buttons are ghost-style with subtle borders. Transitions are smooth and deliberate.

```css
.scandi-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.scandi-btn--primary {
  background: var(--scandi-accent-primary);
  color: var(--scandi-warm-white);
  box-shadow: 0 2px 8px rgba(160, 113, 74, 0.25);
}

.scandi-btn--primary:hover {
  background: var(--scandi-accent-highlight);
  color: var(--scandi-midnight);
  box-shadow: 0 4px 16px rgba(212, 160, 84, 0.3);
  transform: translateY(-1px);
}

.scandi-btn--secondary {
  background: transparent;
  color: var(--scandi-text-body);
  border: 1px solid var(--scandi-ash);
}

.scandi-btn--secondary:hover {
  border-color: var(--scandi-accent-primary);
  color: var(--scandi-accent-primary);
  background: rgba(160, 113, 74, 0.08);
}

.scandi-btn--ghost {
  background: transparent;
  color: var(--scandi-text-muted);
  border: none;
  padding: 0.875rem 1rem;
}

.scandi-btn--ghost:hover {
  color: var(--scandi-text-primary);
}
```

### Navigation Component

Navigation in Scandinavian Dark is minimal, fixed, and uses a translucent dark background with backdrop-filter for depth. Links are understated with subtle hover transitions.

```css
.scandi-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 72px;
  background: rgba(14, 14, 16, 0.85);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border-bottom: 1px solid var(--scandi-border-subtle);
}

.scandi-nav__logo {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--scandi-text-primary);
  text-decoration: none;
}

.scandi-nav__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.scandi-nav__link {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--scandi-text-muted);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.scandi-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--scandi-accent-primary);
  transition: width 0.3s ease;
}

.scandi-nav__link:hover {
  color: var(--scandi-text-primary);
}

.scandi-nav__link:hover::after {
  width: 100%;
}

.scandi-nav__link--active {
  color: var(--scandi-accent-primary);
}

.scandi-nav__link--active::after {
  width: 100%;
}
```

### Hero Section

The hero section uses a full-viewport dark canvas with centered, generously spaced typography. A subtle background texture or gradient provides depth without competing with the text.

```css
.scandi-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 6rem 2rem;
  text-align: center;
  background: var(--scandi-bg-primary);
  overflow: hidden;
}

.scandi-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 40%,
    rgba(160, 113, 74, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.scandi-hero__label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--scandi-accent-primary);
  margin-bottom: 1.5rem;
}

.scandi-hero__title {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 1.1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--scandi-text-primary);
  max-width: 14ch;
  margin-bottom: 1.5rem;
}

.scandi-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: var(--scandi-text-muted);
  max-width: 48ch;
  margin-bottom: 3rem;
}

.scandi-hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
```

### Surface Elevation System

A systematic approach to depth using tonal shifts rather than shadows, inspired by the concept of layered dark materials (stone on slate on basalt).

```css
/* Elevation levels for dark surfaces */
.surface-0 { background: var(--scandi-midnight); }    /* Base canvas */
.surface-1 { background: var(--scandi-charcoal); }    /* Primary background */
.surface-2 { background: var(--scandi-dark-slate); }  /* Cards, containers */
.surface-3 { background: var(--scandi-graphite); }    /* Elevated cards, modals */
.surface-4 { background: var(--scandi-ash); }         /* Tooltips, dropdowns */

/* Ambient shadow system */
.elevation-1 {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2),
              0 1px 3px rgba(0, 0, 0, 0.15);
}

.elevation-2 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25),
              0 4px 12px rgba(0, 0, 0, 0.15);
}

.elevation-3 {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
              0 16px 48px rgba(0, 0, 0, 0.15);
}
```

### Input and Form Elements

Form elements maintain the dark surface language with clear focus states using the warm accent color.

```css
.scandi-input {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--scandi-text-body);
  background: var(--scandi-bg-surface);
  border: 1px solid var(--scandi-border-subtle);
  border-radius: 8px;
  padding: 0.875rem 1.25rem;
  width: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

.scandi-input::placeholder {
  color: var(--scandi-text-disabled);
}

.scandi-input:focus {
  border-color: var(--scandi-accent-primary);
  box-shadow: 0 0 0 3px rgba(160, 113, 74, 0.15);
}

.scandi-input-label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--scandi-text-muted);
  display: block;
  margin-bottom: 0.5rem;
}
```

### Divider and Section Separator

Minimal separators that suggest the grain of natural materials rather than harsh graphical lines.

```css
.scandi-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--scandi-ash) 20%,
    var(--scandi-ash) 80%,
    transparent 100%
  );
  margin: 4rem 0;
}

.scandi-divider--accent {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--scandi-accent-primary) 30%,
    var(--scandi-accent-primary) 70%,
    transparent 100%
  );
}

.scandi-section-gap {
  height: 8rem;
}
```

### Footer Component

```css
.scandi-footer {
  background: var(--scandi-midnight);
  border-top: 1px solid var(--scandi-border-subtle);
  padding: 4rem 3rem 2rem;
}

.scandi-footer__grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.scandi-footer__brand {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--scandi-text-primary);
  margin-bottom: 1rem;
}

.scandi-footer__text {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--scandi-text-muted);
  max-width: 30ch;
}

.scandi-footer__heading {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--scandi-text-muted);
  margin-bottom: 1.25rem;
}

.scandi-footer__link {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--scandi-fog);
  text-decoration: none;
  display: block;
  padding: 0.25rem 0;
  transition: color 0.3s ease;
}

.scandi-footer__link:hover {
  color: var(--scandi-accent-primary);
}

.scandi-footer__bottom {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--scandi-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scandi-footer__copyright {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: var(--scandi-text-disabled);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do maintain warm undertones in your dark palette** -- use hex values with slight warm bias (e.g., `#1A1A1E` rather than pure `#1A1A1A`) to avoid a cold, sterile appearance
- **Do use generous whitespace (darkspace)** -- the dark canvas is a design tool; let elements breathe with ample margins and padding
- **Do limit your accent palette to 1-2 warm tones** -- cognac, amber, or muted copper; restraint is the hallmark of Scandinavian design
- **Do reference natural materials** -- incorporate subtle wood grain textures, stone patterns, or organic photography to maintain the connection to nature
- **Do test contrast ratios rigorously** -- dark backgrounds demand WCAG AA minimum (4.5:1 for body text, 3:1 for large text); warm off-whites often pass better than pure white
- **Do use smooth, deliberate transitions** -- ease curves of 0.3s--0.5s for hover states, transforms, and color changes reflect the calm, unhurried Nordic character
- **Do leverage subtle typography hierarchy** -- use weight, size, spacing, and color to differentiate content levels rather than color or decoration

### Don'ts

- **Don't use pure black (#000000)** -- pure black creates harsh contrast and feels digital rather than organic; always shift toward dark gray or add slight color tint
- **Don't add unnecessary decoration** -- if a border, icon, gradient, or animation does not serve a clear functional purpose, remove it
- **Don't introduce saturated or bright colors** -- neon accents, vivid gradients, or high-saturation colors violate the muted, natural palette of Scandinavian Dark
- **Don't use thin, low-contrast text** -- while light weights are part of the aesthetic, never sacrifice readability; text below 14px on dark backgrounds needs adequate weight and contrast
- **Don't crowd the layout** -- dense, tightly packed interfaces contradict the core principle of breathing space; when in doubt, add more margin
- **Don't use hard drop shadows** -- heavy, offset shadows feel artificial; prefer ambient, multi-layered, low-opacity shadows that simulate diffused interior lighting
- **Don't mix too many typefaces** -- two font families (one for headings, one for body) is ideal; three is the absolute maximum
- **Don't ignore dark mode accessibility** -- ensure focus indicators are visible, interactive elements have sufficient contrast, and motion-reduced preferences are respected

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| Scandinavian Minimalism | Direct parent -- Scandinavian Dark inverts the light palette while preserving all other principles |
| Nordic Noir | Near-synonym -- often used interchangeably, though Nordic Noir can lean more dramatically moody |
| Japandi | Shares material honesty and restrained palettes; blends Japanese wabi-sabi with Scandinavian function |
| Dark Mode UI | Technical cousin -- Scandinavian Dark is a specific, warm, textured approach to dark interface design |
| Industrial Minimalism | Shares raw material references (concrete, steel, dark metal) but Scandinavian Dark is warmer and more refined |
| Hygge Design | The cozy, candlelit warmth within Scandinavian Dark directly channels hygge philosophy |
| Brutalist Web Design | Both reject decoration, but Brutalism is intentionally raw while Scandinavian Dark is quietly polished |
| Wabi-Sabi | Shares appreciation for natural imperfection and material authenticity, but wabi-sabi embraces visible aging more openly |
| Organic Minimalism | Overlapping emphasis on natural textures and clean lines, but Organic Minimalism typically uses lighter palettes |
| Muted Corporate | Shares the restrained palette and professional tone, but lacks Scandinavian Dark's warmth and material depth |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scandinavian Dark -- Nordic Noir Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       CSS RESET & BASE
       ======================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* Dark base tones */
      --scandi-midnight: #0e0e10;
      --scandi-charcoal: #1a1a1e;
      --scandi-dark-slate: #242428;
      --scandi-graphite: #2e2e34;
      --scandi-ash: #3c3c44;

      /* Neutral grays */
      --scandi-stone: #5a5a64;
      --scandi-fog: #8a8a94;

      /* Light tones */
      --scandi-smoke-white: #c8c8ce;
      --scandi-ivory: #e8e4de;
      --scandi-warm-white: #f5f0e8;

      /* Warm accents */
      --scandi-smoked-oak: #6b5340;
      --scandi-cognac: #a0714a;
      --scandi-amber: #d4a054;

      /* Cool accents */
      --scandi-pine: #2a4a3a;
      --scandi-fjord: #3a4a5a;

      /* Functional tokens */
      --bg-primary: var(--scandi-charcoal);
      --bg-secondary: var(--scandi-dark-slate);
      --bg-surface: var(--scandi-graphite);
      --text-primary: var(--scandi-ivory);
      --text-body: var(--scandi-smoke-white);
      --text-muted: var(--scandi-fog);
      --text-disabled: var(--scandi-stone);
      --accent: var(--scandi-cognac);
      --accent-hover: var(--scandi-amber);
      --border-subtle: rgba(255, 255, 255, 0.06);

      /* Spacing scale (8px base) */
      --space-xs: 0.5rem;
      --space-sm: 1rem;
      --space-md: 1.5rem;
      --space-lg: 2rem;
      --space-xl: 3rem;
      --space-2xl: 4rem;
      --space-3xl: 6rem;
      --space-4xl: 8rem;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.7;
      color: var(--text-body);
      background: var(--scandi-midnight);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--accent-hover);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* ========================================
       NAVIGATION
       ======================================== */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--space-xl);
      height: 72px;
      background: rgba(14, 14, 16, 0.88);
      backdrop-filter: blur(24px) saturate(1.2);
      -webkit-backdrop-filter: blur(24px) saturate(1.2);
      border-bottom: 1px solid var(--border-subtle);
    }

    .nav__logo {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 1.05rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--text-primary);
      text-decoration: none;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      list-style: none;
    }

    .nav__link {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      color: var(--text-muted);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav__link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent);
      transition: width 0.3s ease;
    }

    .nav__link:hover {
      color: var(--text-primary);
    }

    .nav__link:hover::after {
      width: 100%;
    }

    .nav__cta {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.8rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 0.6rem 1.4rem;
      border: 1px solid var(--scandi-ash);
      border-radius: 6px;
      color: var(--text-body);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .nav__cta:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(160, 113, 74, 0.08);
    }

    /* ========================================
       HERO
       ======================================== */
    .hero {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: var(--space-4xl) var(--space-lg);
      text-align: center;
      background: var(--bg-primary);
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 50% 35%, rgba(160, 113, 74, 0.07) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(58, 74, 90, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero__label {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--space-md);
      position: relative;
    }

    .hero__title {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: clamp(2.6rem, 6vw, 4.8rem);
      line-height: 1.1;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--text-primary);
      max-width: 15ch;
      margin-bottom: var(--space-md);
      position: relative;
    }

    .hero__subtitle {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: clamp(1rem, 2vw, 1.2rem);
      line-height: 1.8;
      color: var(--text-muted);
      max-width: 50ch;
      margin-bottom: var(--space-xl);
      position: relative;
    }

    .hero__actions {
      display: flex;
      gap: var(--space-sm);
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
    }

    /* ========================================
       BUTTONS
       ======================================== */
    .btn {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.9rem 2.2rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    .btn--primary {
      background: var(--accent);
      color: var(--scandi-warm-white);
      box-shadow: 0 2px 10px rgba(160, 113, 74, 0.2);
    }

    .btn--primary:hover {
      background: var(--accent-hover);
      color: var(--scandi-midnight);
      box-shadow: 0 4px 20px rgba(212, 160, 84, 0.25);
      transform: translateY(-1px);
    }

    .btn--secondary {
      background: transparent;
      color: var(--text-body);
      border: 1px solid var(--scandi-ash);
    }

    .btn--secondary:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(160, 113, 74, 0.06);
    }

    /* ========================================
       SECTION LAYOUT
       ======================================== */
    .section {
      padding: var(--space-4xl) var(--space-lg);
    }

    .section__inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section__label {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--space-sm);
    }

    .section__title {
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      line-height: 1.2;
      letter-spacing: 0.02em;
      color: var(--text-primary);
      margin-bottom: var(--space-sm);
    }

    .section__subtitle {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      color: var(--text-muted);
      max-width: 55ch;
      margin-bottom: var(--space-2xl);
    }

    .divider {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--scandi-ash), transparent);
      margin: 0;
    }

    /* ========================================
       CARDS GRID
       ======================================== */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-lg);
    }

    .card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: var(--space-lg);
      transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      background: var(--bg-surface);
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }

    .card__icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: rgba(160, 113, 74, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-md);
      font-size: 1.4rem;
    }

    .card__title {
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      font-size: 1.15rem;
      color: var(--text-primary);
      margin-bottom: var(--space-xs);
    }

    .card__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--text-muted);
    }

    /* ========================================
       FEATURE SECTION (SPLIT LAYOUT)
       ======================================== */
    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: center;
    }

    .feature--reverse {
      direction: rtl;
    }

    .feature--reverse > * {
      direction: ltr;
    }

    .feature__image {
      aspect-ratio: 4 / 3;
      background: var(--bg-secondary);
      border-radius: 12px;
      border: 1px solid var(--border-subtle);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .feature__image-placeholder {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-disabled);
    }

    .feature__content {
      padding: var(--space-lg) 0;
    }

    .feature__label {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--space-sm);
    }

    .feature__title {
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.25;
      color: var(--text-primary);
      margin-bottom: var(--space-sm);
    }

    .feature__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--text-muted);
      margin-bottom: var(--space-lg);
    }

    /* ========================================
       QUOTE / TESTIMONIAL
       ======================================== */
    .quote-section {
      text-align: center;
      padding: var(--space-4xl) var(--space-lg);
    }

    .quote {
      max-width: 700px;
      margin: 0 auto;
    }

    .quote__text {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-style: italic;
      font-size: clamp(1.3rem, 2.5vw, 1.8rem);
      line-height: 1.6;
      color: var(--text-primary);
      margin-bottom: var(--space-lg);
    }

    .quote__attribution {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-disabled);
    }

    .quote__attribution span {
      color: var(--accent);
    }

    /* ========================================
       FORM / CONTACT
       ======================================== */
    .form {
      max-width: 560px;
    }

    .form__group {
      margin-bottom: var(--space-md);
    }

    .form__label {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      display: block;
      margin-bottom: var(--space-xs);
    }

    .form__input,
    .form__textarea {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      color: var(--text-body);
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 0.875rem 1.25rem;
      width: 100%;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .form__input:focus,
    .form__textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(160, 113, 74, 0.12);
    }

    .form__input::placeholder,
    .form__textarea::placeholder {
      color: var(--text-disabled);
    }

    .form__textarea {
      resize: vertical;
      min-height: 140px;
    }

    /* ========================================
       FOOTER
       ======================================== */
    .footer {
      background: var(--scandi-midnight);
      border-top: 1px solid var(--border-subtle);
      padding: var(--space-2xl) var(--space-xl) var(--space-lg);
    }

    .footer__inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer__grid {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: var(--space-xl);
      margin-bottom: var(--space-2xl);
    }

    .footer__brand {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 0.95rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-primary);
      margin-bottom: var(--space-sm);
    }

    .footer__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      line-height: 1.7;
      color: var(--text-muted);
      max-width: 28ch;
    }

    .footer__heading {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.68rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: var(--space-sm);
    }

    .footer__links {
      list-style: none;
    }

    .footer__link {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: var(--scandi-fog);
      text-decoration: none;
      display: block;
      padding: 0.2rem 0;
      transition: color 0.3s ease;
    }

    .footer__link:hover {
      color: var(--accent);
    }

    .footer__bottom {
      padding-top: var(--space-lg);
      border-top: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer__copy {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: var(--text-disabled);
    }

    .footer__socials {
      display: flex;
      gap: var(--space-sm);
    }

    .footer__social {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      transition: all 0.3s ease;
    }

    .footer__social:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(160, 113, 74, 0.08);
    }

    /* ========================================
       RESPONSIVE
       ======================================== */
    @media (max-width: 768px) {
      .nav {
        padding: 0 var(--space-md);
      }

      .nav__links {
        display: none;
      }

      .hero {
        padding: 8rem var(--space-md) var(--space-3xl);
      }

      .section {
        padding: var(--space-3xl) var(--space-md);
      }

      .feature {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
      }

      .feature--reverse {
        direction: ltr;
      }

      .footer__grid {
        grid-template-columns: 1fr 1fr;
      }

      .footer__bottom {
        flex-direction: column;
        gap: var(--space-sm);
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .cards {
        grid-template-columns: 1fr;
      }

      .footer__grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- ====== NAVIGATION ====== -->
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <a href="#" class="nav__logo">Nordvik</a>
    <ul class="nav__links">
      <li><a href="#features" class="nav__link">Features</a></li>
      <li><a href="#work" class="nav__link">Work</a></li>
      <li><a href="#about" class="nav__link">About</a></li>
      <li><a href="#contact" class="nav__link">Contact</a></li>
    </ul>
    <a href="#contact" class="nav__cta">Get in Touch</a>
  </nav>

  <!-- ====== HERO ====== -->
  <section class="hero">
    <p class="hero__label">Nordic Design Studio</p>
    <h1 class="hero__title">Designed in Darkness</h1>
    <p class="hero__subtitle">
      We craft digital experiences rooted in Scandinavian minimalism --
      where dark palettes meet warm materials, and every pixel serves a purpose.
    </p>
    <div class="hero__actions">
      <a href="#work" class="btn btn--primary">View Our Work</a>
      <a href="#about" class="btn btn--secondary">Learn More</a>
    </div>
  </section>

  <hr class="divider">

  <!-- ====== FEATURES / CARDS ====== -->
  <section class="section" id="features">
    <div class="section__inner">
      <p class="section__label">What We Do</p>
      <h2 class="section__title">Crafted with Intention</h2>
      <p class="section__subtitle">
        Every project begins with restraint. We remove the unnecessary
        until only the essential remains -- then we refine it.
      </p>

      <div class="cards">
        <article class="card">
          <div class="card__icon" aria-hidden="true">&#9670;</div>
          <h3 class="card__title">Brand Identity</h3>
          <p class="card__text">
            Minimal, enduring brand systems built on Scandinavian design
            principles. From mark to motion, every element is purposeful.
          </p>
        </article>

        <article class="card">
          <div class="card__icon" aria-hidden="true">&#9671;</div>
          <h3 class="card__title">Digital Product</h3>
          <p class="card__text">
            Dark-mode-first interfaces with exceptional usability.
            We design products that feel calm, confident, and natural.
          </p>
        </article>

        <article class="card">
          <div class="card__icon" aria-hidden="true">&#9672;</div>
          <h3 class="card__title">Art Direction</h3>
          <p class="card__text">
            Photography, material selection, and visual tone guided
            by the Nordic landscape -- fog, stone, timber, and quiet light.
          </p>
        </article>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- ====== FEATURE SPLIT 1 ====== -->
  <section class="section" id="work">
    <div class="section__inner">
      <div class="feature">
        <div class="feature__image">
          <span class="feature__image-placeholder">Project Image</span>
        </div>
        <div class="feature__content">
          <p class="feature__label">Case Study</p>
          <h2 class="feature__title">Fjord Living Interiors</h2>
          <p class="feature__text">
            A complete brand and digital platform for a Norwegian furniture
            studio specializing in charred oak and blackened steel pieces.
            The interface mirrors the materiality of the product -- dark,
            warm, and tactile.
          </p>
          <a href="#" class="btn btn--secondary">View Project</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== FEATURE SPLIT 2 (REVERSED) ====== -->
  <section class="section">
    <div class="section__inner">
      <div class="feature feature--reverse">
        <div class="feature__image">
          <span class="feature__image-placeholder">Project Image</span>
        </div>
        <div class="feature__content">
          <p class="feature__label">Case Study</p>
          <h2 class="feature__title">Skov Ceramics</h2>
          <p class="feature__text">
            E-commerce experience for a Danish ceramics brand. Dark stoneware
            demanded a dark interface -- matte surfaces, amber lighting cues,
            and photography that celebrates the texture of each piece.
          </p>
          <a href="#" class="btn btn--secondary">View Project</a>
        </div>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- ====== QUOTE ====== -->
  <section class="quote-section">
    <div class="quote">
      <p class="quote__text">
        "The best design is the least design. In darkness, what remains
        is what matters -- form, material, and the warmth of intention."
      </p>
      <p class="quote__attribution">
        -- <span>Astrid Lindberg</span>, Creative Director
      </p>
    </div>
  </section>

  <hr class="divider">

  <!-- ====== ABOUT / CONTACT ====== -->
  <section class="section" id="about">
    <div class="section__inner">
      <div class="feature">
        <div class="feature__content" id="contact">
          <p class="feature__label">Get in Touch</p>
          <h2 class="feature__title">Start a Conversation</h2>
          <p class="feature__text">
            We work with brands that value simplicity, quality, and the
            quiet confidence of Nordic design. Tell us about your project.
          </p>
          <form class="form" onsubmit="return false;">
            <div class="form__group">
              <label class="form__label" for="name">Name</label>
              <input class="form__input" type="text" id="name" placeholder="Your name">
            </div>
            <div class="form__group">
              <label class="form__label" for="email">Email</label>
              <input class="form__input" type="email" id="email" placeholder="your@email.com">
            </div>
            <div class="form__group">
              <label class="form__label" for="message">Message</label>
              <textarea class="form__textarea" id="message" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="btn btn--primary">Send Message</button>
          </form>
        </div>
        <div class="feature__image">
          <span class="feature__image-placeholder">Studio Photo</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== FOOTER ====== -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__grid">
        <div>
          <p class="footer__brand">Nordvik</p>
          <p class="footer__text">
            A Nordic design studio crafting dark, warm,
            and purposeful digital experiences.
          </p>
        </div>
        <div>
          <p class="footer__heading">Studio</p>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">About</a></li>
            <li><a href="#" class="footer__link">Careers</a></li>
            <li><a href="#" class="footer__link">Process</a></li>
            <li><a href="#" class="footer__link">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="footer__heading">Work</p>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">Projects</a></li>
            <li><a href="#" class="footer__link">Case Studies</a></li>
            <li><a href="#" class="footer__link">Archive</a></li>
          </ul>
        </div>
        <div>
          <p class="footer__heading">Connect</p>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">Instagram</a></li>
            <li><a href="#" class="footer__link">Dribbble</a></li>
            <li><a href="#" class="footer__link">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">&copy; 2026 Nordvik Studio. All rights reserved.</p>
        <div class="footer__socials">
          <a href="#" class="footer__social" aria-label="Instagram">Ig</a>
          <a href="#" class="footer__social" aria-label="Dribbble">Dr</a>
          <a href="#" class="footer__social" aria-label="LinkedIn">Li</a>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the dark canvas and work upward** -- set the page background to `--scandi-midnight` or `--scandi-charcoal`, then layer surfaces on top using progressively lighter dark tones; never design light-first and invert
- **Use OLED-friendly near-black instead of pure black** -- values like `#0E0E10` or `#1A1A1E` prevent the "infinite void" effect on OLED screens while still appearing deep black in most lighting conditions
- **Test typography contrast early** -- use a tool like WebAIM or the Chrome DevTools contrast checker to verify that your text/background combinations meet WCAG AA (4.5:1 for body) or AAA (7:1) standards; warm off-whites on dark grays can be deceptively low-contrast
- **Apply `font-smoothing: antialiased`** -- on macOS/WebKit browsers, this prevents light-on-dark text from appearing overly bold due to subpixel rendering; without it, thin weights will look heavier than intended
- **Use CSS custom properties for theming** -- define all colors, spacing, and border values as custom properties so the entire theme can be adjusted from a single `:root` block, and so a future light-mode toggle becomes straightforward
- **Optimize images for dark contexts** -- desaturate and slightly darken hero images, product shots, and illustrations so they integrate naturally with the dark palette rather than creating jarring bright rectangles
- **Prefer `rgba()` borders over solid colors** -- borders defined as `rgba(255, 255, 255, 0.06)` adapt automatically to surface changes and feel more natural than hard-coded gray values
- **Respect `prefers-reduced-motion`** -- wrap all hover transforms, transitions, and scroll-triggered animations in a `@media (prefers-reduced-motion: no-preference)` query; the calm, intentional character of Scandinavian Dark should extend to accessibility considerations
