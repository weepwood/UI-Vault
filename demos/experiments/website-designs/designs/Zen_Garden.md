# Zen Garden Design Reference

## Overview

Zen Garden is a web design aesthetic rooted in the philosophy and visual language of Japanese karesansui -- the "dry landscape" rock gardens cultivated by Zen Buddhist monks since the Muromachi period (14th-16th century). Where most design systems seek to fill space, Zen Garden reverses the impulse: emptiness is the primary medium, and every element placed within it must justify its presence through purpose, proportion, or symbolic meaning. The result is an interface that feels less like a product and more like a contemplative space -- quiet, unhurried, and deeply intentional.

The aesthetic draws on seven classical Zen principles that map directly to digital design decisions. Kanso (simplicity) strips interfaces to their essential elements. Fukinsei (asymmetry) creates visual tension through deliberate imbalance rather than rigid centering. Koko (austerity) favors restraint over abundance, choosing one perfectly placed element over ten adequate ones. Shizen (naturalness) ensures that nothing feels forced or artificial -- layouts should appear effortless even when meticulously constructed. Yugen (subtlety) introduces depth through suggestion rather than explicitness, letting shadow, texture, and negative space imply what is not directly shown. Datsuzoku (freedom from habit) encourages moments of unexpected beauty -- an asymmetric break in an otherwise orderly grid, a single accent of moss green against stone gray. Seijaku (tranquility) is the cumulative effect: a stillness that allows the user to focus, breathe, and engage with content without cognitive friction.

Visually, Zen Garden translates the physical materials of a karesansui into digital form. Raked gravel becomes fine-line SVG patterns that suggest flowing water. Moss becomes muted green accents placed sparingly against neutral ground. Stones become anchoring visual elements -- images, cards, or typographic blocks -- positioned with asymmetric precision against vast fields of whitespace. The palette is drawn entirely from nature: warm stone grays, sand, aged wood, bamboo green, and the deep near-black of wet river rock. Typography is thin, upright, and spacious, embodying the Japanese concept of "ma" -- the meaningful pause between elements that gives each one room to resonate.

This is not minimalism for the sake of trend. It is minimalism as philosophy -- the belief that reduction reveals essence, and that the space between things is as important as the things themselves.

---

## Visual Characteristics

### Core Design Traits

- **Extreme whitespace as content** -- empty space is not wasted but is the dominant design element; it creates breathing room and draws the eye to the few elements that remain
- **Raked gravel patterns** -- fine, parallel or concentric SVG line patterns evoke the sand gardens of Ryoan-ji; used as subtle background textures at very low opacity
- **Asymmetric balance (fukinsei)** -- elements are intentionally off-center; visual equilibrium is achieved through weight and proportion rather than mirror symmetry
- **Natural material palette** -- colors and textures drawn from stone, sand, moss, bamboo, and aged wood; nothing synthetic or saturated
- **Single-element focus** -- each section presents one idea, one image, one statement; the scroll reveals content sequentially like stepping stones across a pond
- **Barely-there borders and shadows** -- separation between elements comes from spacing, not from visible lines or elevation; when borders exist, they are hairline-thin
- **Slow, deliberate transitions** -- animations are gentle and unhurried (600-1200ms easing curves); movement should feel like water flowing, not like a machine snapping
- **Vertical rhythm and generous line-height** -- text breathes with 1.8-2.0 line-height for body copy; paragraphs are separated by ample space
- **Organic imperfection** -- inspired by wabi-sabi, small intentional imperfections appear: a slightly uneven border radius, a hand-drawn SVG circle, a texture with natural grain
- **Monochromatic photography** -- imagery is desaturated or sepia-toned, depicting natural scenes: stone, water, bamboo, moss, mist, wooden surfaces
- **Horizontal grounding** -- layouts emphasize width and low profiles, reflecting the grounded, horizontal orientation of Japanese architecture and garden design

### Design Principles

- **Ma (negative space is meaningful)** -- the pause between elements is not absence but presence; whitespace communicates calm, importance, and respect for content
- **Kanso (simplicity)** -- strip every element to its essence; if it can be removed without losing meaning, remove it
- **Fukinsei (asymmetry)** -- perfect symmetry feels rigid and artificial; offset compositions create organic visual interest and subtle tension
- **Koko (austerity)** -- restraint is a virtue; choose one excellent typeface over three mediocre ones, one striking image over a gallery of adequate ones
- **Shizen (naturalness)** -- the design should appear effortless; avoid anything that looks over-engineered, over-decorated, or forced
- **Yugen (subtle profundity)** -- suggest more than you show; let shadows imply depth, let spacing imply hierarchy, let restraint imply sophistication
- **Datsuzoku (freedom from routine)** -- include one unexpected element per page: a single color accent, an asymmetric break in the grid, a moment of visual surprise
- **Seijaku (tranquility)** -- the cumulative effect should be stillness and focus; if any element creates visual noise or anxiety, it does not belong

---

## Color Palette

The Zen Garden palette is drawn exclusively from the materials found in a traditional karesansui garden: raked white gravel, weathered granite, river stones, aged wood, moss, bamboo, and the occasional splash of plum blossom. Colors are desaturated, earthy, and tonal -- they coexist without competing. The overall impression should be a quiet room with natural light filtering through shoji screens.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#F7F5F0](https://via.placeholder.com/20/F7F5F0/F7F5F0) | `#F7F5F0` | **Raked Sand** -- primary background; warm off-white evoking dry garden gravel |
| ![#EDEBE5](https://via.placeholder.com/20/EDEBE5/EDEBE5) | `#EDEBE5` | **Washed Stone** -- secondary background; card surfaces and alternating sections |
| ![#E0DDD5](https://via.placeholder.com/20/E0DDD5/E0DDD5) | `#E0DDD5` | **Pale Clay** -- tertiary surface; subtle depth layering and inset panels |
| ![#C8C3B8](https://via.placeholder.com/20/C8C3B8/C8C3B8) | `#C8C3B8` | **Dry Gravel** -- borders, dividers, and muted UI elements |
| ![#A39E93](https://via.placeholder.com/20/A39E93/A39E93) | `#A39E93` | **Weathered Stone** -- secondary text, captions, and metadata |
| ![#8A8578](https://via.placeholder.com/20/8A8578/8A8578) | `#8A8578` | **Aged Granite** -- icons, subtle labels, and placeholder text |
| ![#5C564B](https://via.placeholder.com/20/5C564B/5C564B) | `#5C564B` | **Dark Earth** -- primary text on light backgrounds; headings |
| ![#3A3630](https://via.placeholder.com/20/3A3630/3A3630) | `#3A3630` | **Wet Rock** -- strong emphasis text and high-contrast elements |
| ![#2A2722](https://via.placeholder.com/20/2A2722/2A2722) | `#2A2722` | **Charred Wood** -- deepest accent; footer backgrounds, overlays |
| ![#6B7F5E](https://via.placeholder.com/20/6B7F5E/6B7F5E) | `#6B7F5E` | **Temple Moss** -- primary accent; links, active states, and focal highlights |
| ![#8B9E7A](https://via.placeholder.com/20/8B9E7A/8B9E7A) | `#8B9E7A` | **Bamboo Leaf** -- secondary green accent; hover states and success indicators |
| ![#B8A088](https://via.placeholder.com/20/B8A088/B8A088) | `#B8A088` | **Hinoki Wood** -- warm accent; callout backgrounds and decorative elements |
| ![#C4A882](https://via.placeholder.com/20/C4A882/C4A882) | `#C4A882` | **Golden Sand** -- tertiary warm accent; highlights and selected states |
| ![#7A6E5D](https://via.placeholder.com/20/7A6E5D/7A6E5D) | `#7A6E5D` | **River Pebble** -- muted brown for secondary UI elements and tags |
| ![#4A5A42](https://via.placeholder.com/20/4A5A42/4A5A42) | `#4A5A42` | **Deep Moss** -- dark green for emphasis; footer accents and dark-mode elements |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --zen-bg-primary: #F7F5F0;
  --zen-bg-secondary: #EDEBE5;
  --zen-bg-tertiary: #E0DDD5;

  /* Surfaces */
  --zen-surface: #EDEBE5;
  --zen-surface-raised: #F7F5F0;
  --zen-surface-sunken: #E0DDD5;

  /* Text */
  --zen-text-primary: #3A3630;
  --zen-text-secondary: #5C564B;
  --zen-text-muted: #A39E93;
  --zen-text-faint: #C8C3B8;

  /* Borders */
  --zen-border: #E0DDD5;
  --zen-border-subtle: #EDEBE5;
  --zen-border-strong: #C8C3B8;

  /* Accents */
  --zen-accent-moss: #6B7F5E;
  --zen-accent-moss-light: #8B9E7A;
  --zen-accent-wood: #B8A088;
  --zen-accent-sand: #C4A882;
  --zen-accent-pebble: #7A6E5D;
  --zen-accent-deep-moss: #4A5A42;

  /* Darks */
  --zen-dark: #2A2722;
  --zen-dark-soft: #3A3630;

  /* Shadows */
  --zen-shadow-sm: 0 1px 3px rgba(42, 39, 34, 0.04);
  --zen-shadow-md: 0 2px 8px rgba(42, 39, 34, 0.06);
  --zen-shadow-lg: 0 4px 16px rgba(42, 39, 34, 0.08);

  /* Transitions */
  --zen-transition-slow: 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
  --zen-transition-medium: 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
  --zen-transition-fast: 300ms cubic-bezier(0.25, 0.1, 0.25, 1);

  /* Spacing */
  --zen-space-xs: 0.5rem;
  --zen-space-sm: 1rem;
  --zen-space-md: 2rem;
  --zen-space-lg: 4rem;
  --zen-space-xl: 6rem;
  --zen-space-2xl: 10rem;
}
```

---

## Typography

Zen Garden typography is quiet, precise, and spacious. The goal is readability without visual noise -- type should feel like calligraphy viewed from a distance: elegant, deliberate, and never rushed. Heading fonts lean toward thin, refined serifs or clean humanist sans-serifs that echo the restrained elegance of Japanese woodblock printing. Body text prioritizes generous line-height and moderate letter-spacing to create breathing room within paragraphs, embodying the principle of "ma" at the typographic level. Japanese-influenced fonts like the Zen family on Google Fonts and Noto Serif offer excellent bridges between Western and Japanese design sensibilities.

### Google Fonts

| Font | Style | Weight Range | Usage |
|------|-------|-------------|-------|
| **Cormorant Garamond** | Refined, high-contrast serif | 300-600 | Display headings, hero text, pull quotes |
| **Noto Serif Display** | Elegant transitional serif | 300-500 | Headings, section titles |
| **Zen Old Mincho** | Japanese-influenced traditional serif | 400-700 | Decorative headings, Japanese-flavored accents |
| **Zen Kaku Gothic New** | Clean Japanese gothic sans | 300-700 | Body text in Japanese-inspired contexts |
| **Work Sans** | Humanist sans-serif | 300-500 | Primary body text, UI elements |
| **Inter** | Neutral screen-optimized sans | 300-500 | Secondary body, labels, navigation |
| **DM Sans** | Clean geometric sans | 300-500 | Captions, metadata, small text |
| **Zen Maru Gothic** | Rounded Japanese gothic | 400-500 | Friendly accent text, tags |

### Font Pairings

| Heading Font | Body Font | Mood |
|-------------|-----------|------|
| Cormorant Garamond Light | Work Sans Light | Serene editorial -- the canonical Zen Garden pairing |
| Noto Serif Display Light | Inter Regular | Refined simplicity -- modern with classical undertones |
| Zen Old Mincho Regular | DM Sans Regular | Japanese-Western fusion -- culturally rooted yet accessible |
| Cormorant Garamond Regular | Inter Light | Contemplative minimalism -- elegant contrast with neutral body |

### CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Work+Sans:wght@300;400;500&family=Inter:wght@300;400;500&family=Noto+Serif+Display:wght@300;400;500&display=swap');

/* Display / Hero headings -- thin, spacious, commanding through restraint */
h1 {
  font-family: 'Cormorant Garamond', 'Noto Serif Display', serif;
  font-weight: 300;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.15;
  letter-spacing: 0.02em;
  color: var(--zen-text-primary);
}

/* Section headings */
h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  line-height: 1.2;
  letter-spacing: 0.015em;
  color: var(--zen-text-primary);
}

/* Subsection headings */
h3 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: var(--zen-text-secondary);
}

/* Body text -- generous line-height for breathing room */
body {
  font-family: 'Work Sans', 'Inter', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--zen-text-secondary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Overline labels -- wide-tracked uppercase, very small */
.zen-label {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--zen-text-muted);
}

/* Pull quotes -- italic serif, contemplative */
.zen-quote {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.5;
  color: var(--zen-accent-moss);
}
```

---

## Layout Principles

- **"Ma" as structural element** -- whitespace is not leftover space but a deliberate, planned design element; margins of 6-10rem between major sections create meditative pacing
- **Narrow content widths** -- body text columns of 600-720px; overall content containers of 900-1000px; never stretch to full viewport width -- containment creates focus
- **Asymmetric two-column grids** -- a 2:3 or 1:2 ratio split, with text on one side and an image or empty space on the other; perfect symmetry is avoided
- **Single-focus sections** -- each viewport-height section presents one idea, one image, one message; scrolling reveals content like turning stones along a garden path
- **Horizontal grounding** -- elements sit low and wide; avoid tall, dramatic hero sections; prefer landscape-oriented images and short, calm section heights
- **Stepping-stone navigation** -- content sections are spaced apart like tobi-ishi (stepping stones), with generous vertical gaps that create rhythm and anticipation
- **Off-center alignment** -- headings and images are placed at 1/3 or 2/3 positions rather than dead center; this creates the asymmetric balance (fukinsei) central to Zen aesthetics
- **Minimal grid complexity** -- one or two columns maximum for most content; grid layouts of three columns only for card collections; complexity contradicts tranquility
- **Vertical scroll only** -- no horizontal scrolling, no carousel sliders, no parallax gimmicks; the scroll should feel like walking through a garden along a single path
- **Responsive through simplification** -- on smaller screens, layouts collapse to single columns with even more whitespace between elements; nothing is compressed or cramped

---

## CSS / Design Techniques

### Raked Sand Pattern Background

```css
/* Fine parallel lines evoking raked gravel patterns */
.zen-raked-sand {
  position: relative;
  background: var(--zen-bg-primary);
}

.zen-raked-sand::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 11px,
    #8A8578 11px,
    #8A8578 12px
  );
  pointer-events: none;
}

/* Concentric circle variant -- water ripple around a stone */
.zen-ripple-pattern {
  position: relative;
  background: var(--zen-bg-primary);
}

.zen-ripple-pattern::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: repeating-radial-gradient(
    circle at 50% 50%,
    transparent 0px,
    transparent 30px,
    #8A8578 30px,
    #8A8578 31px
  );
  pointer-events: none;
}
```

### Card (Stone Card)

```css
/* Cards inspired by smooth river stones: minimal, grounded, barely elevated */
.zen-card {
  background: var(--zen-surface);
  border: 1px solid var(--zen-border-subtle);
  border-radius: 4px;
  padding: 2.5rem;
  transition: var(--zen-transition-medium);
  transition-property: box-shadow, border-color;
}

.zen-card:hover {
  border-color: var(--zen-border-strong);
  box-shadow: var(--zen-shadow-md);
}

/* Accent card with moss-green left border */
.zen-card--accent {
  border-left: 2px solid var(--zen-accent-moss);
  border-radius: 0 4px 4px 0;
}

/* Minimal card -- no visible border, differentiated by background only */
.zen-card--minimal {
  background: var(--zen-bg-secondary);
  border: none;
  border-radius: 2px;
  padding: 2rem 2.5rem;
  box-shadow: none;
}

.zen-card--minimal:hover {
  background: var(--zen-surface-sunken);
}
```

### Button (Pebble Button)

```css
/* Buttons: quiet, understated, action through restraint */
.zen-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--zen-text-primary);
  color: var(--zen-bg-primary);
  border: none;
  border-radius: 2px;
  padding: 14px 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--zen-transition-medium);
  transition-property: opacity, transform;
}

.zen-button:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

/* Ghost button -- outline only */
.zen-button--ghost {
  background: transparent;
  color: var(--zen-text-primary);
  border: 1px solid var(--zen-border-strong);
}

.zen-button--ghost:hover {
  border-color: var(--zen-text-primary);
  background: rgba(58, 54, 48, 0.03);
}

/* Moss accent button */
.zen-button--moss {
  background: var(--zen-accent-moss);
  color: #F7F5F0;
}

.zen-button--moss:hover {
  background: var(--zen-accent-deep-moss);
  opacity: 1;
}
```

### Navigation (Torii Nav)

```css
/* Navigation: spare, floating, transparent until scrolled */
.zen-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background: transparent;
  transition: var(--zen-transition-medium);
  transition-property: background, backdrop-filter, border-color;
  border-bottom: 1px solid transparent;
}

.zen-nav--scrolled {
  background: rgba(247, 245, 240, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--zen-border-subtle);
}

.zen-nav-brand {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  color: var(--zen-text-primary);
  text-decoration: none;
}

.zen-nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.zen-nav-links a {
  color: var(--zen-text-muted);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--zen-transition-fast);
}

.zen-nav-links a:hover {
  color: var(--zen-accent-moss);
}

.zen-nav-links a.active {
  color: var(--zen-text-primary);
}
```

### Hero Section (Karesansui Hero)

```css
/* Hero: vast whitespace with a single, centered statement */
.zen-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.zen-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--zen-text-primary);
  max-width: 800px;
}

.zen-hero p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--zen-text-muted);
  max-width: 480px;
  margin-top: 2rem;
}

/* Decorative enso circle behind hero text */
.zen-hero::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  border: 1px solid var(--zen-border);
  border-radius: 50%;
  border-top-color: transparent;
  transform: rotate(-25deg);
  opacity: 0.25;
  pointer-events: none;
}

/* Scroll indicator -- gentle downward arrow */
.zen-scroll-hint {
  position: absolute;
  bottom: 3rem;
  width: 1px;
  height: 40px;
  background: linear-gradient(
    180deg,
    var(--zen-border-strong) 0%,
    transparent 100%
  );
  animation: zen-drift 3s ease-in-out infinite;
}

@keyframes zen-drift {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 0.7; transform: translateY(8px); }
}
```

### Section Dividers (Garden Path)

```css
/* Subtle centered dividers -- like stepping stones between content */
.zen-divider {
  border: none;
  height: 1px;
  max-width: 80px;
  margin: var(--zen-space-xl) auto;
  background: var(--zen-border-strong);
  opacity: 0.5;
}

/* Three-dot divider -- like three stones in a garden */
.zen-divider--stones {
  border: none;
  height: auto;
  text-align: center;
  margin: var(--zen-space-xl) auto;
  background: none;
}

.zen-divider--stones::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--zen-border-strong);
  box-shadow:
    -20px 0 0 var(--zen-border-strong),
    20px 0 0 var(--zen-border-strong);
  opacity: 0.4;
}

/* Enso circle divider */
.zen-divider--enso {
  border: none;
  text-align: center;
  margin: var(--zen-space-xl) auto;
}

.zen-divider--enso::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--zen-accent-moss);
  border-radius: 50%;
  border-top-color: transparent;
  transform: rotate(-30deg);
  opacity: 0.35;
}
```

### Asymmetric Split Layout

```css
/* Two-column layout with deliberate asymmetry */
.zen-split {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: var(--zen-space-lg);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--zen-space-xl) var(--zen-space-md);
}

/* Reversed split -- image left, text right */
.zen-split--reverse {
  grid-template-columns: 7fr 5fr;
}

.zen-split-text {
  padding: var(--zen-space-md) 0;
}

.zen-split-image {
  overflow: hidden;
  border-radius: 2px;
}

.zen-split-image img {
  width: 100%;
  height: auto;
  display: block;
  filter: saturate(0.6) contrast(0.95);
  transition: filter var(--zen-transition-slow);
}

.zen-split-image:hover img {
  filter: saturate(0.8) contrast(1);
}

@media (max-width: 768px) {
  .zen-split,
  .zen-split--reverse {
    grid-template-columns: 1fr;
    gap: var(--zen-space-md);
  }
}
```

### Fade-In Scroll Animation

```css
/* Elements fade in gently as they enter the viewport */
.zen-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1),
    transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.zen-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delay for child elements */
.zen-reveal-group > *:nth-child(1) { transition-delay: 0ms; }
.zen-reveal-group > *:nth-child(2) { transition-delay: 150ms; }
.zen-reveal-group > *:nth-child(3) { transition-delay: 300ms; }
.zen-reveal-group > *:nth-child(4) { transition-delay: 450ms; }
```

---

## Design Do's and Don'ts

### Do's

- **Do use whitespace as your primary design element** -- let 60-70% of the viewport be empty; the remaining content will feel more significant for it
- **Do favor asymmetric placement** -- position key elements at the 1/3 or 2/3 mark rather than dead center; this creates organic visual interest
- **Do choose one accent color and use it sparingly** -- a single moss green link or a thin border is more impactful than a page full of color
- **Do let transitions breathe** -- use easing durations of 500-1000ms; the slow reveal of content mirrors the meditative pace of a garden walk
- **Do embrace imperfection** -- a slightly uneven SVG stroke, a hand-textured background, or an intentionally broken grid line adds wabi-sabi warmth
- **Do use restrained photography** -- desaturated, softly lit images of natural materials (stone, wood, water, moss) reinforce the aesthetic; avoid bright, saturated stock photos
- **Do maintain strict vertical rhythm** -- consistent spacing between sections creates a predictable, calming cadence that rewards unhurried scrolling
- **Do test with content removed** -- if the page still feels intentional and beautiful with half the content stripped away, the layout is working

### Don'ts

- **Don't fill every available space** -- the urge to add "one more element" is the enemy of Zen Garden design; emptiness is not a problem to solve
- **Don't use bright, saturated colors** -- no electric blues, hot pinks, or neon greens; every color should look like it could exist in nature
- **Don't center everything symmetrically** -- a perfectly centered, perfectly balanced layout feels rigid and artificial; break symmetry intentionally
- **Don't use heavy font weights** -- bold and extra-bold weights create visual loudness; stick to light (300) and regular (400) for body, medium (500) at most for headings
- **Don't add animations for novelty** -- every animation must serve a purpose (reveal content, indicate state change); no bouncing icons, spinning logos, or parallax scroll effects
- **Don't use complex multi-column grids** -- three columns is the maximum for card layouts; most content should live in one or two columns with generous margins
- **Don't over-decorate** -- no drop shadows deeper than 16px, no gradients with more than two stops, no borders wider than 2px; decoration should be nearly invisible
- **Don't use carousels, sliders, or auto-playing media** -- these break the contemplative pace; content should be revealed through the user's own scrolling

---

## Related Aesthetics

| Aesthetic | Relationship to Zen Garden |
|-----------|---------------------------|
| **Japandi** | Closest relative; Japandi blends Japanese and Scandinavian design but is warmer and more furniture-focused; Zen Garden is more austere and whitespace-driven |
| **Cyberminimalism** | Shares the extreme whitespace and single-focus sections, but uses dark mode, gradients, and tech-forward typography; Zen Garden is natural and warm where Cyberminimalism is digital and cool |
| **Flat Design** | Both reject ornamentation and skeuomorphism; Flat Design is more geometric and UI-focused, while Zen Garden draws from nature and philosophy |
| **Wabi-Sabi** | The philosophical foundation of Zen Garden; Wabi-Sabi as a standalone aesthetic embraces imperfection and decay more explicitly, with rougher textures and visible aging |
| **Earth Tones** | Shares the natural, desaturated palette; Earth Tones is broader and more pattern-rich, while Zen Garden is more minimal and whitespace-dominant |
| **Hygge** | Both create calm, contemplative atmospheres; Hygge is warmer, cozier, and more textile-focused (wool, candles, warmth), while Zen Garden is cooler and more austere (stone, sand, stillness) |
| **International Typographic Style** | Shares the grid discipline and belief in whitespace as structure; Swiss Style is more geometric and systematic, while Zen Garden allows asymmetric organic compositions |
| **Minimalism** | The parent category; Zen Garden is a specific cultural expression of minimalism filtered through Japanese philosophy and karesansui garden design |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zen Garden -- Template</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Work+Sans:wght@300;400;500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    /* =====================================================
       ZEN GARDEN -- CSS CUSTOM PROPERTIES
       ===================================================== */
    :root {
      /* Backgrounds */
      --zen-bg-primary: #F7F5F0;
      --zen-bg-secondary: #EDEBE5;
      --zen-bg-tertiary: #E0DDD5;

      /* Surfaces */
      --zen-surface: #EDEBE5;
      --zen-surface-sunken: #E0DDD5;

      /* Text */
      --zen-text-primary: #3A3630;
      --zen-text-secondary: #5C564B;
      --zen-text-muted: #A39E93;
      --zen-text-faint: #C8C3B8;

      /* Borders */
      --zen-border: #E0DDD5;
      --zen-border-subtle: #EDEBE5;
      --zen-border-strong: #C8C3B8;

      /* Accents */
      --zen-accent-moss: #6B7F5E;
      --zen-accent-moss-light: #8B9E7A;
      --zen-accent-wood: #B8A088;
      --zen-accent-sand: #C4A882;
      --zen-accent-pebble: #7A6E5D;
      --zen-accent-deep-moss: #4A5A42;

      /* Darks */
      --zen-dark: #2A2722;
      --zen-dark-soft: #3A3630;

      /* Shadows */
      --zen-shadow-sm: 0 1px 3px rgba(42, 39, 34, 0.04);
      --zen-shadow-md: 0 2px 8px rgba(42, 39, 34, 0.06);

      /* Transitions */
      --zen-transition-slow: 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      --zen-transition-medium: 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
      --zen-transition-fast: 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    /* =====================================================
       RESET & BASE
       ===================================================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--zen-bg-primary);
      color: var(--zen-text-secondary);
      font-family: 'Work Sans', 'Inter', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.85;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    a {
      color: var(--zen-accent-moss);
      text-decoration: none;
      transition: color var(--zen-transition-fast);
    }

    a:hover {
      color: var(--zen-accent-deep-moss);
    }

    /* =====================================================
       TYPOGRAPHY
       ===================================================== */
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(2.5rem, 6vw, 5rem);
      line-height: 1.1;
      letter-spacing: 0.02em;
      color: var(--zen-text-primary);
    }

    h2 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: clamp(1.75rem, 3.5vw, 2.75rem);
      line-height: 1.2;
      letter-spacing: 0.015em;
      color: var(--zen-text-primary);
    }

    h3 {
      font-family: 'Work Sans', sans-serif;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.3;
      color: var(--zen-text-secondary);
    }

    p {
      max-width: 640px;
    }

    .label {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--zen-text-muted);
    }

    .quote {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-style: italic;
      font-size: clamp(1.375rem, 3vw, 2rem);
      line-height: 1.5;
      color: var(--zen-accent-pebble);
      max-width: 600px;
    }

    /* =====================================================
       NAVIGATION
       ===================================================== */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 3rem;
      background: transparent;
      transition: var(--zen-transition-medium);
      transition-property: background, backdrop-filter, border-color;
      border-bottom: 1px solid transparent;
    }

    nav.scrolled {
      background: rgba(247, 245, 240, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom-color: var(--zen-border-subtle);
    }

    .nav-brand {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: 1.25rem;
      letter-spacing: 0.06em;
      color: var(--zen-text-primary);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
    }

    .nav-links a {
      color: var(--zen-text-muted);
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .nav-links a:hover {
      color: var(--zen-accent-moss);
    }

    /* =====================================================
       HERO
       ===================================================== */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 8rem 2rem 6rem;
      position: relative;
      overflow: hidden;
    }

    /* Enso circle decoration */
    .hero::before {
      content: '';
      position: absolute;
      width: 380px;
      height: 380px;
      border: 1px solid var(--zen-border-strong);
      border-radius: 50%;
      border-top-color: transparent;
      transform: rotate(-25deg);
      opacity: 0.18;
      pointer-events: none;
    }

    .hero h1 {
      position: relative;
      z-index: 1;
    }

    .hero p {
      margin-top: 2rem;
      font-size: 1.1rem;
      color: var(--zen-text-muted);
      max-width: 460px;
      position: relative;
      z-index: 1;
    }

    .hero-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 3rem;
      padding: 14px 36px;
      background: var(--zen-text-primary);
      color: var(--zen-bg-primary);
      border: none;
      border-radius: 2px;
      font-family: 'Work Sans', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: var(--zen-transition-medium);
      transition-property: opacity, transform;
      position: relative;
      z-index: 1;
    }

    .hero-cta:hover {
      opacity: 0.8;
      transform: translateY(-1px);
      color: var(--zen-bg-primary);
    }

    .scroll-hint {
      position: absolute;
      bottom: 3rem;
      width: 1px;
      height: 40px;
      background: linear-gradient(
        180deg,
        var(--zen-border-strong) 0%,
        transparent 100%
      );
      animation: drift 3s ease-in-out infinite;
    }

    @keyframes drift {
      0%, 100% { opacity: 0.3; transform: translateY(0); }
      50% { opacity: 0.6; transform: translateY(8px); }
    }

    /* =====================================================
       SECTION CONTAINERS
       ===================================================== */
    .section {
      max-width: 1000px;
      margin: 0 auto;
      padding: 6rem 2rem;
    }

    .section--narrow {
      max-width: 720px;
    }

    .section--wide {
      max-width: 1100px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header .label {
      display: block;
      margin-bottom: 1rem;
    }

    .section-header p {
      margin: 1.5rem auto 0;
      text-align: center;
    }

    /* =====================================================
       DIVIDERS
       ===================================================== */
    .divider {
      border: none;
      height: 1px;
      max-width: 80px;
      margin: 6rem auto;
      background: var(--zen-border-strong);
      opacity: 0.4;
    }

    .divider--stones {
      border: none;
      height: auto;
      text-align: center;
      margin: 6rem auto;
      background: none;
      max-width: none;
    }

    .divider--stones::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--zen-border-strong);
      box-shadow:
        -20px 0 0 var(--zen-border-strong),
        20px 0 0 var(--zen-border-strong);
      opacity: 0.4;
    }

    /* =====================================================
       SPLIT LAYOUT
       ===================================================== */
    .split {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 4rem;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
      padding: 6rem 2rem;
    }

    .split--reverse {
      grid-template-columns: 7fr 5fr;
    }

    .split-image {
      overflow: hidden;
      border-radius: 2px;
      background: var(--zen-bg-secondary);
      aspect-ratio: 4 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--zen-text-faint);
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* =====================================================
       CARDS
       ===================================================== */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .card {
      background: var(--zen-surface);
      border: 1px solid var(--zen-border-subtle);
      border-radius: 4px;
      padding: 2.5rem 2rem;
      transition: var(--zen-transition-medium);
      transition-property: border-color, box-shadow;
    }

    .card:hover {
      border-color: var(--zen-border-strong);
      box-shadow: var(--zen-shadow-md);
    }

    .card .label {
      display: block;
      margin-bottom: 0.75rem;
    }

    .card h3 {
      margin-bottom: 1rem;
    }

    .card p {
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--zen-text-muted);
    }

    /* =====================================================
       QUOTE SECTION
       ===================================================== */
    .quote-section {
      text-align: center;
      padding: 8rem 2rem;
      background: var(--zen-bg-secondary);
    }

    .quote-section .quote {
      margin: 0 auto;
    }

    .quote-section .attribution {
      margin-top: 2rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--zen-text-faint);
    }

    /* =====================================================
       RAKED SAND BACKGROUND
       ===================================================== */
    .raked-sand {
      position: relative;
    }

    .raked-sand::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 11px,
        #8A8578 11px,
        #8A8578 12px
      );
      pointer-events: none;
    }

    /* =====================================================
       FOOTER
       ===================================================== */
    footer {
      background: var(--zen-dark);
      color: var(--zen-text-faint);
      padding: 4rem 2rem;
      text-align: center;
    }

    footer .nav-brand {
      color: var(--zen-bg-secondary);
      display: block;
      margin-bottom: 1.5rem;
    }

    footer p {
      font-size: 0.85rem;
      line-height: 1.7;
      max-width: 400px;
      margin: 0 auto;
    }

    footer .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      list-style: none;
      margin-top: 2rem;
    }

    footer .footer-links a {
      color: var(--zen-text-muted);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    footer .footer-links a:hover {
      color: var(--zen-accent-moss-light);
    }

    footer .copyright {
      margin-top: 3rem;
      font-size: 0.7rem;
      color: var(--zen-accent-pebble);
      letter-spacing: 0.05em;
    }

    /* =====================================================
       SCROLL REVEAL
       ===================================================== */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition:
        opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1),
        transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* =====================================================
       RESPONSIVE
       ===================================================== */
    @media (max-width: 768px) {
      nav {
        padding: 1.25rem 1.5rem;
      }

      .nav-links {
        gap: 1.5rem;
      }

      .hero {
        padding: 6rem 1.5rem 4rem;
      }

      .hero::before {
        width: 260px;
        height: 260px;
      }

      .split,
      .split--reverse {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 4rem 1.5rem;
      }

      .cards {
        grid-template-columns: 1fr;
      }

      .section {
        padding: 4rem 1.5rem;
      }

      .divider,
      .divider--stones {
        margin: 4rem auto;
      }
    }
  </style>
</head>
<body>

  <!-- ========== NAVIGATION ========== -->
  <nav id="navbar">
    <a href="#" class="nav-brand">Zen Garden</a>
    <ul class="nav-links">
      <li><a href="#philosophy">Philosophy</a></li>
      <li><a href="#principles">Principles</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- ========== HERO ========== -->
  <section class="hero raked-sand">
    <h1>In stillness,<br>clarity arises</h1>
    <p>A design philosophy rooted in Japanese Zen gardens -- where emptiness is meaningful, restraint is strength, and every element exists with intention.</p>
    <a href="#philosophy" class="hero-cta">Begin the path</a>
    <div class="scroll-hint"></div>
  </section>

  <!-- ========== PHILOSOPHY SECTION ========== -->
  <hr class="divider">

  <section id="philosophy" class="section section--narrow">
    <div class="section-header reveal">
      <span class="label">Philosophy</span>
      <h2>The beauty of less</h2>
      <p>In the tradition of karesansui, the dry landscape garden, we find that the most profound statements are made not by what is present, but by what is deliberately absent. Sand raked into flowing patterns becomes water. A single stone becomes a mountain. Space becomes meaning.</p>
    </div>
  </section>

  <!-- ========== QUOTE ========== -->
  <section class="quote-section">
    <p class="quote reveal">"In the beginner's mind there are many possibilities, but in the expert's mind there are few."</p>
    <p class="attribution reveal">Shunryu Suzuki</p>
  </section>

  <!-- ========== PRINCIPLES CARDS ========== -->
  <hr class="divider--stones">

  <section id="principles" class="section section--wide">
    <div class="section-header reveal">
      <span class="label">Seven Principles</span>
      <h2>Foundations of Zen design</h2>
      <p>Each principle from the karesansui tradition maps directly to a decision in digital design.</p>
    </div>

    <div class="cards">
      <div class="card reveal">
        <span class="label">01</span>
        <h3>Kanso</h3>
        <p>Simplicity. Eliminate clutter and strip every element to its essential purpose. What remains is what matters.</p>
      </div>
      <div class="card reveal">
        <span class="label">02</span>
        <h3>Fukinsei</h3>
        <p>Asymmetry. Reject rigid mirror-balance in favor of organic, weighted compositions that feel alive.</p>
      </div>
      <div class="card reveal">
        <span class="label">03</span>
        <h3>Koko</h3>
        <p>Austerity. Prefer one perfectly chosen element over many adequate ones. Scarcity creates value.</p>
      </div>
      <div class="card reveal">
        <span class="label">04</span>
        <h3>Shizen</h3>
        <p>Naturalness. Nothing should feel forced. The best design appears effortless, as if it arranged itself.</p>
      </div>
      <div class="card reveal">
        <span class="label">05</span>
        <h3>Yugen</h3>
        <p>Subtle profundity. Suggest rather than declare. Let shadow, space, and restraint communicate depth.</p>
      </div>
      <div class="card reveal">
        <span class="label">06</span>
        <h3>Seijaku</h3>
        <p>Tranquility. The cumulative result of all principles -- a stillness that invites focus and contemplation.</p>
      </div>
    </div>
  </section>

  <!-- ========== SPLIT SECTION ========== -->
  <hr class="divider">

  <section id="gallery" class="split reveal">
    <div class="split-text">
      <span class="label">Practice</span>
      <h2>Stone and space</h2>
      <p>In a Zen garden, stones are placed first -- they anchor the composition. Everything else is defined by the relationship between solid and void. In digital design, your content is the stone. The whitespace around it determines its weight.</p>
    </div>
    <div class="split-image">
      Stone Arrangement
    </div>
  </section>

  <section class="split split--reverse reveal">
    <div class="split-image">
      Raked Gravel Patterns
    </div>
    <div class="split-text">
      <span class="label">Texture</span>
      <h2>Patterns in stillness</h2>
      <p>Raked gravel represents flowing water without a single drop being present. In the same way, subtle CSS patterns and textures can evoke depth and movement without adding visual weight or distraction.</p>
    </div>
  </section>

  <!-- ========== QUOTE ========== -->
  <section class="quote-section raked-sand">
    <p class="quote reveal">"The space between the notes is as important as the notes themselves."</p>
    <p class="attribution reveal">Claude Debussy</p>
  </section>

  <!-- ========== CONTACT / CTA ========== -->
  <hr class="divider--stones">

  <section id="contact" class="section section--narrow" style="text-align: center;">
    <div class="reveal">
      <span class="label">Begin</span>
      <h2>Walk the garden path</h2>
      <p style="margin: 1.5rem auto 0;">Every journey toward simplicity begins with a single step. Let emptiness guide your next design.</p>
      <a href="#" class="hero-cta" style="margin-top: 2.5rem;">Start your journey</a>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer>
    <a href="#" class="nav-brand">Zen Garden</a>
    <p>A contemplative approach to digital design, inspired by the karesansui gardens of Japan.</p>
    <ul class="footer-links">
      <li><a href="#philosophy">Philosophy</a></li>
      <li><a href="#principles">Principles</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <p class="copyright">Designed with intention and restraint</p>
  </footer>

  <!-- ========== SCRIPTS ========== -->
  <script>
    /* Scroll-triggered nav background */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    /* Scroll-triggered reveal */
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Start with whitespace, not content** -- design your margins, padding, and section spacing first; place content into the emptiness rather than filling a layout with elements and then trying to create breathing room
- **Use the 1/3 rule for placement** -- position key visual elements at the 1/3 or 2/3 mark of the viewport width rather than dead center; this creates the asymmetric balance (fukinsei) that defines the aesthetic
- **Limit your palette to 3-4 colors maximum** -- one background neutral, one text color, one muted secondary, and one accent (moss green); every additional color dilutes the meditative calm
- **Set transitions to 500ms minimum** -- the default 200-300ms of most UI frameworks feels too snappy for Zen Garden; slow everything down to match the contemplative pace of a garden walk
- **Test with the squint test** -- squint at your page from a distance; if you see blocks of color, heavy shadows, or visual clutter, the design has strayed from Zen principles; you should see mostly soft warmth with a few anchoring elements
- **Use `filter: saturate(0.5-0.7)` on photography** -- this single CSS rule transforms ordinary stock photos into Zen-appropriate imagery by muting colors to match the desaturated palette
- **Prefer `border: 1px solid` over `box-shadow` for card separation** -- shadows imply elevation and floating, which contradicts the grounded, earthbound quality of Zen Garden; borders feel more like the thin wooden frames of shoji screens
- **Implement scroll-triggered reveals with generous thresholds** -- use `IntersectionObserver` with a threshold of 0.1-0.2 and a slow opacity transition (800-1200ms) so content appears gently, like mist clearing to reveal a stone
