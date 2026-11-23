# Noir Minimalism Design Reference

## Overview

Noir Minimalism is a dark, restrained design aesthetic that fuses the dramatic visual language of **film noir cinema** with the disciplined economy of **minimalist design**. Rooted in the chiaroscuro lighting techniques of 1940s and 1950s Hollywood -- where German Expressionist emigres like Fritz Lang and Billy Wilder pioneered the interplay of deep shadow and strategic illumination -- this aesthetic translates cinematic tension into digital interfaces. The result is a design philosophy where **black is not merely a background but an active compositional force**, where negative space carries as much narrative weight as the content it frames, and where every element earns its presence through rigorous editorial restraint.

Where standard dark-mode design simply inverts a light interface, Noir Minimalism treats darkness as a medium unto itself. Backgrounds are rich, absorptive blacks and near-blacks that recede infinitely, while content emerges from the void through carefully controlled pools of light -- typographic highlights, thin luminous borders, and restrained accent colors that function like the glow of a cigarette in a shadowed doorway or the gleam of rain on a midnight street. The palette rarely exceeds two or three active hues at any given moment; color is deployed with the precision of a spotlight on a stage.

Typography in Noir Minimalism leans toward **elegant, high-contrast typefaces** -- sharp serifs for editorial authority, geometric sans-serifs for clinical modernity, and generous letter-spacing that allows each character to breathe within the surrounding darkness. Layouts favor extreme whitespace (or rather, "blackspace"), asymmetric compositions, and cinematic aspect ratios that evoke widescreen frames. Imagery, when present, is monochromatic or desaturated, often partially obscured by shadow or cropped to reveal only essential fragments.

The overall mood is one of **sophisticated tension** -- quiet but loaded, elegant but uneasy. Noir Minimalism appeals to luxury brands, photography portfolios, editorial platforms, film and music industry sites, and any context where atmosphere and exclusivity outweigh informational density. It demands that every pixel justify its existence: if an element does not serve the composition, it is consumed by the dark.

---

## Visual Characteristics

### Core Design Traits

- **Black-dominant color fields** -- deep, absorptive blacks (#000000 to #0A0A0A) form the primary spatial fabric, consuming 70-85% of any given viewport and creating a sense of infinite depth
- **Chiaroscuro contrast** -- borrowed from film noir cinematography, the dramatic interplay between near-total darkness and sharp highlights creates visual tension and directs the eye with precision
- **Strategic luminance** -- light is treated as a scarce, valuable resource; thin glowing borders, subtle text highlights, and isolated bright elements emerge from the dark like practical lights in a noir scene
- **Cinematic aspect ratios** -- hero sections, cards, and image containers favor wide proportions (16:9, 2.39:1) that evoke the widescreen framing of classic and neo-noir cinema
- **Monochromatic imagery** -- photographs and illustrations are desaturated, high-contrast, and often partially masked by shadow; pure black-and-white with crushed midtones is the default
- **Extreme negative space** -- generous margins, padding, and emptiness surround each element; the darkness itself is a design element that communicates restraint and luxury
- **Razor-thin line work** -- 1px borders, hairline dividers, and fine geometric outlines define structure without mass, creating an etched quality against the dark background
- **Subtle gradient depth** -- near-black to slightly-less-black gradients provide spatial layering without introducing discernible color, creating the illusion of receding planes
- **Selective reveal animations** -- content fades or slides into view from darkness, echoing the cinematic technique of figures emerging from shadow into pools of light
- **Restrained material surfaces** -- matte finishes dominate, with occasional glass-morphism or soft glows reserved for interactive focal points; nothing is glossy or loud
- **Shadow as positive space** -- unlike most design systems where shadow is supplementary, here darkness is the dominant visual mass from which content is carved

### Design Principles

- **Economy of means** -- every element must earn its presence; if it does not serve narrative, hierarchy, or atmosphere, it is removed and the dark closes in around what remains
- **Light is information** -- brightness and luminance are not decorative but functional; the brightest element on screen is always the most important, creating an instinctive visual hierarchy
- **Cinematic restraint** -- the pacing and reveal of information follows filmic logic: slow, deliberate, and suspenseful rather than data-dense or overwhelming
- **Tension through contrast** -- the aesthetic draws power from extremes: near-total darkness against razor-sharp highlights, massive emptiness against tightly composed content clusters
- **Atmosphere over ornament** -- mood and emotional tone take precedence over decorative embellishment; the design should feel like a place, not a page
- **Typography as protagonist** -- in the absence of heavy imagery or color, the typeface, its weight, its spacing, and its scale become the primary expressive vehicle
- **Intentional absence** -- what is left out of the design carries as much meaning as what is included; emptiness communicates confidence and exclusivity
- **Depth through subtlety** -- spatial relationships are established through micro-differences in darkness, barely perceptible gradients, and thin luminous edges rather than heavy drop shadows or bold color blocks

---

## Color Palette

The Noir Minimalism palette is built on a foundation of deep blacks and near-blacks, structured through a grayscale hierarchy, and punctuated by one or two carefully rationed accent tones. Color is never abundant -- it appears as a flash of warmth in a cold scene, a signal flare in the dark. The palette draws inspiration from the silver halide grain of black-and-white film stock, the amber glow of tungsten lighting through venetian blinds, and the cold steel-blue of moonlit urban landscapes.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Void Black | `#000000` | True black, hero backgrounds, maximum depth fields |
| Onyx | `#0A0A0A` | Primary surface background, slightly lifted from void |
| Obsidian | `#111111` | Card backgrounds, elevated surface panels |
| Charcoal Noir | `#1A1A1A` | Secondary surfaces, modal overlays, nav backgrounds |
| Graphite | `#242424` | Tertiary surface, sidebar backgrounds, input fields |
| Gunmetal | `#2E2E2E` | Borders on dark surfaces, subtle structural dividers |
| Ash | `#3A3A3A` | Disabled states, inactive elements, muted borders |
| Smoke | `#6B6B6B` | Muted body text, captions, timestamps, metadata |
| Silver Screen | `#9A9A9A` | Secondary text, descriptions, supporting copy |
| Platinum | `#C8C8C8` | Primary body text on dark backgrounds |
| Bone White | `#E8E8E8` | High-emphasis text, headings, strong labels |
| Pure Light | `#F5F5F5` | Maximum emphasis text, hero titles, focal highlights |
| Tungsten Amber | `#C9A84C` | Primary warm accent -- links, CTAs, gold highlights |
| Steel Blue | `#4A6D8C` | Primary cool accent -- secondary actions, informational |
| Blood Red | `#8B1A1A` | Danger, alert, noir crimson accent (use sparingly) |

### CSS Custom Properties

```css
:root {
  /* Black spectrum */
  --noir-void: #000000;
  --noir-onyx: #0a0a0a;
  --noir-obsidian: #111111;
  --noir-charcoal: #1a1a1a;
  --noir-graphite: #242424;
  --noir-gunmetal: #2e2e2e;
  --noir-ash: #3a3a3a;

  /* Grayscale hierarchy */
  --noir-smoke: #6b6b6b;
  --noir-silver: #9a9a9a;
  --noir-platinum: #c8c8c8;
  --noir-bone: #e8e8e8;
  --noir-light: #f5f5f5;

  /* Accent tones */
  --noir-amber: #c9a84c;
  --noir-steel: #4a6d8c;
  --noir-crimson: #8b1a1a;

  /* Functional mappings */
  --noir-bg-primary: var(--noir-onyx);
  --noir-bg-secondary: var(--noir-charcoal);
  --noir-bg-surface: var(--noir-obsidian);
  --noir-bg-elevated: var(--noir-graphite);
  --noir-text-primary: var(--noir-light);
  --noir-text-secondary: var(--noir-platinum);
  --noir-text-muted: var(--noir-smoke);
  --noir-accent-primary: var(--noir-amber);
  --noir-accent-secondary: var(--noir-steel);
  --noir-accent-danger: var(--noir-crimson);
  --noir-border: var(--noir-gunmetal);
  --noir-border-subtle: rgba(255, 255, 255, 0.06);
  --noir-glow: rgba(201, 168, 76, 0.15);
}
```

---

## Typography

Noir Minimalism typography prioritizes **clarity, elegance, and dramatic contrast**. Typefaces are chosen for their ability to command attention in isolation -- standing alone against vast dark fields without ornamental support. Sharp, high-contrast serifs echo the editorial authority of mid-century newspapers and detective fiction covers, while geometric sans-serifs provide a clinical, modern counterweight. Letter-spacing is generous, allowing characters to breathe and reinforcing the sense of deliberate, unhurried composition.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **Playfair Display** | High-contrast serif | Hero headlines, editorial titles, dramatic display text |
| **Cormorant Garamond** | Elegant light serif | Subheadings, pull quotes, refined secondary headings |
| **DM Serif Display** | Sharp modern serif | Section headers, card titles, mid-weight emphasis |
| **Inter** | Clean geometric sans | Primary body text, UI elements, readable long-form |
| **Outfit** | Modern geometric sans | Alternative body, navigation labels, buttons |
| **Space Grotesk** | Technical geometric sans | Code-adjacent text, metadata, technical labels |
| **Bebas Neue** | Condensed all-caps sans | Oversized display, cinematic hero titles, section markers |
| **JetBrains Mono** | Monospace | Code blocks, timestamps, data labels, technical detail |
| **Libre Baskerville** | Classic book serif | Long-form reading, article body text on dark |

### Font Pairing Suggestions

| Pairing | Headings | Body | Mood |
|---------|----------|------|------|
| **Classic Noir** | Playfair Display | Inter | Editorial elegance meets clean modernity |
| **Cinematic Title** | Bebas Neue | Outfit | Bold widescreen energy, movie-poster authority |
| **Literary Dark** | Cormorant Garamond | Libre Baskerville | Refined, bookish, detective-novel atmosphere |
| **Modern Thriller** | DM Serif Display | Space Grotesk | Sharp precision, contemporary noir tension |
| **Technical Shadow** | Space Grotesk | JetBrains Mono | Developer-noir, data-driven dark interface |

### CSS Example

```css
/* Import noir-appropriate Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=DM+Serif+Display&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;700&family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500&family=Libre+Baskerville:wght@400;700&display=swap');

/* Hero / Display -- dramatic serif authority */
h1 {
  font-family: 'Playfair Display', 'DM Serif Display', Georgia, serif;
  font-weight: 900;
  font-size: clamp(2.8rem, 7vw, 6rem);
  letter-spacing: -0.02em;
  line-height: 1.0;
  color: var(--noir-light);
  text-transform: none;
}

/* Section headings -- refined serif */
h2 {
  font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  font-weight: 300;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  color: var(--noir-bone);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

/* Sub-headings -- sharp modern serif */
h3 {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.25rem;
  color: var(--noir-platinum);
  letter-spacing: 0.02em;
}

/* Body text -- clean, legible sans-serif */
body {
  font-family: 'Inter', 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--noir-text-secondary);
}

/* Metadata, labels, timestamps */
.noir-label {
  font-family: 'Space Grotesk', 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--noir-smoke);
}

/* Cinematic oversized display */
.noir-display {
  font-family: 'Bebas Neue', 'Playfair Display', Impact, serif;
  font-size: clamp(4rem, 12vw, 10rem);
  letter-spacing: 0.05em;
  line-height: 0.9;
  color: var(--noir-light);
  text-transform: uppercase;
}

/* Pull quotes and editorial emphasis */
blockquote {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--noir-amber);
  border-left: 1px solid var(--noir-amber);
  padding-left: 1.5rem;
}
```

---

## Layout Principles

- **Blackspace dominance** -- negative space in Noir Minimalism is black, not white; at least 40-60% of any viewport should be unoccupied dark area that gives content room to breathe and creates a sense of cinematic scope
- **Asymmetric compositions** -- content clusters are offset from center, creating visual tension reminiscent of noir cinematography where subjects are framed against expansive shadow
- **Cinematic horizontal flow** -- layouts favor wide, horizontally-oriented sections that echo widescreen film frames; vertical scrolling reveals new "scenes" rather than continuous content streams
- **Single-column narrative** -- body content is typically constrained to a narrow column (50-65ch) centered or offset within the dark expanse, focusing the reader's attention like a spotlight
- **Vertical rhythm through emptiness** -- sections are separated by generous vertical space (8rem-12rem) rather than decorative dividers, allowing the darkness itself to structure the page
- **Grid as invisible scaffold** -- underlying grids are strict and geometric but never visible; structure is felt rather than seen, with elements snapping to an unseen framework
- **Layered z-depth through luminance** -- spatial hierarchy is communicated through brightness levels rather than size or shadow; closer elements are subtly brighter, distant elements fade toward black
- **Edge-to-edge hero areas** -- full-bleed sections that stretch to viewport edges establish immersive atmosphere before content is introduced within contained widths
- **Strategic alignment breaks** -- occasional elements (an image, a pull quote, a decorative line) break the grid deliberately, creating the controlled irregularity of a composed photograph
- **Fixed vertical landmarks** -- persistent navigation elements or thin lateral lines anchor the scrolling experience, providing subtle orientation within the dark environment

---

## CSS / Design Techniques

### Card Component

```css
.noir-card {
  background: var(--noir-obsidian);
  border: 1px solid var(--noir-border-subtle);
  border-radius: 2px;
  padding: 2rem 2.25rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.noir-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--noir-amber) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.noir-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}

.noir-card:hover::before {
  opacity: 1;
}

.noir-card__title {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.25rem;
  color: var(--noir-bone);
  margin-bottom: 0.75rem;
}

.noir-card__text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--noir-smoke);
}

.noir-card__meta {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--noir-ash);
  margin-top: 1.5rem;
}
```

### Button Styles

```css
/* Primary button -- amber accent with cinematic hover */
.noir-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--noir-light);
  background: transparent;
  border: 1px solid var(--noir-amber);
  padding: 0.875rem 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, background 0.3s ease;
}

.noir-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--noir-amber);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}

.noir-btn:hover::before {
  transform: scaleX(1);
}

.noir-btn:hover {
  color: var(--noir-void);
}

/* Ghost button -- minimal, outline only */
.noir-btn--ghost {
  border-color: var(--noir-gunmetal);
  color: var(--noir-silver);
}

.noir-btn--ghost:hover {
  border-color: var(--noir-platinum);
  color: var(--noir-light);
  background: rgba(255, 255, 255, 0.03);
}

.noir-btn--ghost::before {
  display: none;
}

/* Small variant */
.noir-btn--sm {
  font-size: 0.65rem;
  padding: 0.625rem 1.25rem;
  letter-spacing: 0.18em;
}
```

### Navigation

```css
.noir-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--noir-border-subtle);
  transition: background 0.3s ease;
}

.noir-nav__logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.15em;
  color: var(--noir-light);
  text-decoration: none;
  text-transform: uppercase;
}

.noir-nav__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.noir-nav__link {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--noir-smoke);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.noir-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--noir-amber);
  transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.noir-nav__link:hover {
  color: var(--noir-light);
}

.noir-nav__link:hover::after {
  width: 100%;
}

.noir-nav__link--active {
  color: var(--noir-amber);
}

.noir-nav__link--active::after {
  width: 100%;
  background: var(--noir-amber);
}
```

### Hero Section

```css
.noir-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem 3rem;
  background: var(--noir-void);
  overflow: hidden;
}

.noir-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 30% 50%,
    rgba(201, 168, 76, 0.04) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.noir-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, var(--noir-onyx), transparent);
  pointer-events: none;
}

.noir-hero__overline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--noir-amber);
  margin-bottom: 1.5rem;
}

.noir-hero__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 900;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 1.0;
  color: var(--noir-light);
  max-width: 14ch;
  margin-bottom: 2rem;
}

.noir-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.8;
  color: var(--noir-silver);
  max-width: 45ch;
  margin-bottom: 3rem;
}

.noir-hero__divider {
  width: 60px;
  height: 1px;
  background: var(--noir-amber);
  margin-bottom: 2.5rem;
}
```

### Reveal / Fade-In Animation

```css
/* Cinematic content reveal -- elements emerge from the dark */
.noir-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.noir-reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered reveal for lists and grids */
.noir-reveal:nth-child(1) { transition-delay: 0.0s; }
.noir-reveal:nth-child(2) { transition-delay: 0.1s; }
.noir-reveal:nth-child(3) { transition-delay: 0.2s; }
.noir-reveal:nth-child(4) { transition-delay: 0.3s; }
.noir-reveal:nth-child(5) { transition-delay: 0.4s; }

/* Horizontal wipe -- like a spotlight sweeping across */
.noir-wipe {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.noir-wipe--visible {
  clip-path: inset(0 0 0 0);
}

/* Subtle glow pulse for focal elements */
@keyframes noir-glow {
  0%, 100% { box-shadow: 0 0 0 rgba(201, 168, 76, 0); }
  50% { box-shadow: 0 0 20px rgba(201, 168, 76, 0.08); }
}

.noir-glow-pulse {
  animation: noir-glow 4s ease-in-out infinite;
}
```

### Luminous Divider

```css
/* Thin glowing horizontal rule */
.noir-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--noir-gunmetal) 20%,
    var(--noir-amber) 50%,
    var(--noir-gunmetal) 80%,
    transparent 100%
  );
  margin: 4rem 0;
  opacity: 0.6;
}

/* Vertical accent line */
.noir-vline {
  width: 1px;
  height: 80px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--noir-amber),
    transparent
  );
  margin: 2rem auto;
}
```

### Image Treatment

```css
/* Noir image -- desaturated with vignette */
.noir-image {
  position: relative;
  overflow: hidden;
  line-height: 0;
}

.noir-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2) brightness(0.85);
  transition: filter 0.6s ease, transform 0.6s ease;
}

.noir-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}

.noir-image:hover img {
  filter: grayscale(60%) contrast(1.1) brightness(0.9);
  transform: scale(1.03);
}
```

### Footer

```css
.noir-footer {
  background: var(--noir-void);
  border-top: 1px solid var(--noir-border-subtle);
  padding: 4rem 3rem 2rem;
}

.noir-footer__grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.noir-footer__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--noir-smoke);
  margin-bottom: 1.25rem;
}

.noir-footer__link {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--noir-ash);
  text-decoration: none;
  padding: 0.3rem 0;
  transition: color 0.3s ease;
}

.noir-footer__link:hover {
  color: var(--noir-amber);
}

.noir-footer__bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--noir-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.noir-footer__copyright {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--noir-ash);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use blackspace generously** -- let darkness surround and isolate each element; the void is your most powerful compositional tool and communicates luxury and confidence
- **Do maintain strict luminance hierarchy** -- ensure the brightest element on screen is always the intended focal point; test by squinting at the screen to verify visual priority
- **Do treat accent color as a scarce resource** -- amber, gold, or your chosen accent should appear in no more than 5-10% of the viewport; overuse dilutes its dramatic impact
- **Do invest in typography quality** -- with so few visual elements competing for attention, every typographic choice (weight, spacing, size) is magnified and must be precise
- **Do provide sufficient contrast for accessibility** -- dark interfaces risk failing WCAG standards; ensure body text on dark backgrounds maintains at least 4.5:1 contrast ratio and test with tools like axe or Lighthouse
- **Do use subtle animation** -- slow, deliberate transitions (0.4s-1.0s) reinforce the cinematic mood; elements should emerge from darkness gracefully, not snap into view
- **Do design for OLED awareness** -- pure black (#000000) creates true pixel-off on OLED screens, which can cause smearing during scroll; use #0A0A0A for scrollable surfaces
- **Do layer darkness** -- create spatial depth through multiple barely-distinguishable dark values rather than relying on a single flat black across the entire interface

### Don'ts

- **Don't use pure white text on pure black** -- the extreme contrast causes halation (optical bloom) and eye strain during extended reading; soften text to #E8E8E8 or #F5F5F5 and lift backgrounds to #0A0A0A
- **Don't introduce saturated color casually** -- a bright blue link or a vivid green success state can shatter the noir mood; desaturate all functional colors to match the muted palette
- **Don't over-decorate** -- drop shadows, heavy gradients, patterned backgrounds, and ornamental borders contradict the minimalist discipline; if it feels decorative rather than structural, remove it
- **Don't neglect dark-on-dark contrast** -- adjacent dark elements (card on background, input on surface) need at least a perceptible border or luminance shift to remain distinguishable
- **Don't use busy imagery** -- photographs with complex, colorful compositions compete with the noir atmosphere; all imagery should be high-contrast, desaturated, and editorially cropped
- **Don't animate aggressively** -- fast, bouncy, or attention-grabbing animations break the cinematic pacing; avoid spring physics, overshooting eases, or anything that feels playful
- **Don't fill every gap with content** -- the temptation to fill dark emptiness with additional elements undermines the aesthetic; trust the void and let the design breathe
- **Don't ignore light mode entirely** -- while Noir Minimalism is inherently a dark aesthetic, consider providing a high-contrast light alternative for accessibility or user preference, even if the dark version is the canonical design

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Dark Mode UI** | Shares the dark surface foundation but Noir Minimalism adds cinematic atmosphere and editorial restraint beyond standard dark interface patterns |
| **Brutalism** | Both strip away ornamentation, but Brutalism embraces raw, confrontational maximalism while Noir Minimalism is refined and controlled |
| **Corporate Dark** | Noir Minimalism's commercial cousin; uses dark palettes for professionalism rather than cinematic mood, tends toward more conventional layouts |
| **Film Noir (Cinema)** | The direct aesthetic ancestor -- chiaroscuro lighting, shadow-dominant compositions, morally ambiguous atmosphere translated from screen to pixel |
| **Art Deco** | Shares the gold-on-black palette and geometric precision but Art Deco is ornamented and symmetrical where Noir Minimalism is stripped and asymmetric |
| **Swiss / International Style** | Both value typographic hierarchy and grid discipline but Swiss Design is typically light-background and content-dense |
| **Gothic / Dark Academia** | Shares moodiness and dark palettes but Gothic leans toward maximalist ornamentation, texture, and historical pastiche |
| **Neo-Minimalism** | Contemporary minimalism that favors dark palettes and restrained interaction; Noir Minimalism adds the specific cinematic noir influence |
| **Luxury / High Fashion** | Fashion and luxury brands frequently adopt noir-minimal aesthetics for their web presence; shared values of exclusivity and restraint |
| **Cyberpunk** | Both use dark backgrounds with accent lighting, but Cyberpunk is neon-saturated and dystopian while Noir Minimalism is muted and controlled |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Noir Minimalism -- Design Template</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=DM+Serif+Display&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;700&family=Bebas+Neue&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">

  <style>
    /* =============================================
       CSS RESET & CUSTOM PROPERTIES
       ============================================= */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      /* Black spectrum */
      --noir-void: #000000;
      --noir-onyx: #0a0a0a;
      --noir-obsidian: #111111;
      --noir-charcoal: #1a1a1a;
      --noir-graphite: #242424;
      --noir-gunmetal: #2e2e2e;
      --noir-ash: #3a3a3a;

      /* Grayscale hierarchy */
      --noir-smoke: #6b6b6b;
      --noir-silver: #9a9a9a;
      --noir-platinum: #c8c8c8;
      --noir-bone: #e8e8e8;
      --noir-light: #f5f5f5;

      /* Accent tones */
      --noir-amber: #c9a84c;
      --noir-steel: #4a6d8c;
      --noir-crimson: #8b1a1a;

      /* Functional mappings */
      --noir-bg-primary: var(--noir-onyx);
      --noir-bg-secondary: var(--noir-charcoal);
      --noir-bg-surface: var(--noir-obsidian);
      --noir-bg-elevated: var(--noir-graphite);
      --noir-text-primary: var(--noir-light);
      --noir-text-secondary: var(--noir-platinum);
      --noir-text-muted: var(--noir-smoke);
      --noir-accent-primary: var(--noir-amber);
      --noir-accent-secondary: var(--noir-steel);
      --noir-border: var(--noir-gunmetal);
      --noir-border-subtle: rgba(255, 255, 255, 0.06);
      --noir-glow: rgba(201, 168, 76, 0.15);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--noir-text-secondary);
      background: var(--noir-bg-primary);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    a {
      color: var(--noir-amber);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--noir-light);
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* =============================================
       NAVIGATION
       ============================================= */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 3rem;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--noir-border-subtle);
    }

    .nav__logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0.15em;
      color: var(--noir-light);
      text-decoration: none;
      text-transform: uppercase;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      list-style: none;
    }

    .nav__link {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--noir-smoke);
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
      background: var(--noir-amber);
      transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .nav__link:hover {
      color: var(--noir-light);
    }

    .nav__link:hover::after {
      width: 100%;
    }

    /* =============================================
       HERO SECTION
       ============================================= */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8rem 3rem 6rem;
      background: var(--noir-void);
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 25% 50%,
        rgba(201, 168, 76, 0.04) 0%,
        transparent 55%
      );
      pointer-events: none;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 200px;
      background: linear-gradient(to top, var(--noir-onyx), transparent);
      pointer-events: none;
    }

    .hero__inner {
      max-width: 900px;
      position: relative;
      z-index: 1;
    }

    .hero__overline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.35em;
      color: var(--noir-amber);
      margin-bottom: 1.5rem;
    }

    .hero__title {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 900;
      font-size: clamp(3rem, 8vw, 6.5rem);
      line-height: 1.0;
      color: var(--noir-light);
      margin-bottom: 2rem;
    }

    .hero__title em {
      font-style: italic;
      color: var(--noir-amber);
    }

    .hero__divider {
      width: 60px;
      height: 1px;
      background: var(--noir-amber);
      margin-bottom: 2rem;
    }

    .hero__subtitle {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      line-height: 1.8;
      color: var(--noir-silver);
      max-width: 48ch;
      margin-bottom: 3rem;
    }

    .hero__actions {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    /* =============================================
       BUTTONS
       ============================================= */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--noir-light);
      background: transparent;
      border: 1px solid var(--noir-amber);
      padding: 0.875rem 2rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: color 0.3s ease;
      text-decoration: none;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--noir-amber);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      z-index: -1;
    }

    .btn:hover {
      color: var(--noir-void);
    }

    .btn:hover::before {
      transform: scaleX(1);
    }

    .btn--ghost {
      border-color: var(--noir-gunmetal);
      color: var(--noir-silver);
    }

    .btn--ghost::before {
      display: none;
    }

    .btn--ghost:hover {
      border-color: var(--noir-platinum);
      color: var(--noir-light);
      background: rgba(255, 255, 255, 0.03);
    }

    /* =============================================
       SECTION UTILITY
       ============================================= */
    .section {
      padding: 7rem 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section--full {
      max-width: none;
      padding-left: 0;
      padding-right: 0;
    }

    .section__overline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      color: var(--noir-amber);
      margin-bottom: 1rem;
    }

    .section__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 300;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      color: var(--noir-bone);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .section__subtitle {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      color: var(--noir-smoke);
      max-width: 55ch;
      margin-bottom: 3.5rem;
    }

    /* Luminous divider */
    .divider {
      border: none;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--noir-gunmetal) 20%,
        var(--noir-amber) 50%,
        var(--noir-gunmetal) 80%,
        transparent 100%
      );
      margin: 0;
      opacity: 0.5;
    }

    /* =============================================
       CARD GRID
       ============================================= */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--noir-bg-surface);
      border: 1px solid var(--noir-border-subtle);
      border-radius: 2px;
      padding: 2.25rem;
      position: relative;
      overflow: hidden;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--noir-amber) 50%,
        transparent 100%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    .card:hover::before {
      opacity: 1;
    }

    .card__number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.5rem;
      color: var(--noir-graphite);
      line-height: 1;
      margin-bottom: 1.25rem;
    }

    .card__title {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 1.2rem;
      color: var(--noir-bone);
      margin-bottom: 0.75rem;
    }

    .card__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      line-height: 1.7;
      color: var(--noir-smoke);
    }

    .card__tag {
      display: inline-block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.6rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--noir-ash);
      border: 1px solid var(--noir-gunmetal);
      padding: 0.3rem 0.75rem;
      margin-top: 1.5rem;
    }

    /* =============================================
       FEATURED / SPLIT SECTION
       ============================================= */
    .split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      min-height: 70vh;
    }

    .split__image {
      position: relative;
      overflow: hidden;
      background: var(--noir-charcoal);
    }

    .split__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) contrast(1.15) brightness(0.8);
      transition: filter 0.6s ease, transform 0.6s ease;
    }

    .split__image::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at center,
        transparent 30%,
        rgba(0, 0, 0, 0.6) 100%
      );
      pointer-events: none;
    }

    .split__image:hover img {
      filter: grayscale(70%) contrast(1.1) brightness(0.85);
      transform: scale(1.02);
    }

    .split__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 4rem;
      background: var(--noir-bg-primary);
    }

    .split__quote {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 300;
      font-style: italic;
      font-size: 1.6rem;
      line-height: 1.6;
      color: var(--noir-amber);
      border-left: 1px solid var(--noir-amber);
      padding-left: 1.5rem;
      margin-bottom: 2rem;
    }

    .split__attribution {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--noir-ash);
    }

    /* =============================================
       STATS / METRICS ROW
       ============================================= */
    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      border-top: 1px solid var(--noir-border-subtle);
      border-bottom: 1px solid var(--noir-border-subtle);
    }

    .stat {
      text-align: center;
      padding: 3rem 1.5rem;
      border-right: 1px solid var(--noir-border-subtle);
    }

    .stat:last-child {
      border-right: none;
    }

    .stat__number {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: var(--noir-light);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .stat__label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: var(--noir-smoke);
    }

    /* =============================================
       FOOTER
       ============================================= */
    .footer {
      background: var(--noir-void);
      border-top: 1px solid var(--noir-border-subtle);
      padding: 4rem 3rem 2rem;
    }

    .footer__grid {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer__brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.3rem;
      letter-spacing: 0.15em;
      color: var(--noir-light);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .footer__desc {
      font-size: 0.85rem;
      color: var(--noir-ash);
      max-width: 30ch;
      line-height: 1.6;
    }

    .footer__heading {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.62rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: var(--noir-smoke);
      margin-bottom: 1.25rem;
    }

    .footer__link {
      display: block;
      font-size: 0.85rem;
      color: var(--noir-ash);
      text-decoration: none;
      padding: 0.3rem 0;
      transition: color 0.3s ease;
    }

    .footer__link:hover {
      color: var(--noir-amber);
    }

    .footer__bottom {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--noir-border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }

    .footer__copyright {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.62rem;
      letter-spacing: 0.15em;
      color: var(--noir-ash);
    }

    /* =============================================
       REVEAL ANIMATIONS
       ============================================= */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .reveal--visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* =============================================
       RESPONSIVE
       ============================================= */
    @media (max-width: 768px) {
      .nav {
        padding: 1rem 1.5rem;
      }

      .nav__links {
        gap: 1.25rem;
      }

      .hero {
        padding: 7rem 1.5rem 4rem;
      }

      .section {
        padding: 4rem 1.5rem;
      }

      .split {
        grid-template-columns: 1fr;
      }

      .split__content {
        padding: 3rem 1.5rem;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .stat:nth-child(2) {
        border-right: none;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .footer__grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 480px) {
      .nav__links {
        display: none;
      }

      .stats {
        grid-template-columns: 1fr;
      }

      .stat {
        border-right: none;
        border-bottom: 1px solid var(--noir-border-subtle);
      }

      .stat:last-child {
        border-bottom: none;
      }

      .footer__grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- ============================================
       NAVIGATION
       ============================================ -->
  <nav class="nav">
    <a href="#" class="nav__logo">Noir</a>
    <ul class="nav__links">
      <li><a href="#work" class="nav__link">Work</a></li>
      <li><a href="#about" class="nav__link">About</a></li>
      <li><a href="#journal" class="nav__link">Journal</a></li>
      <li><a href="#contact" class="nav__link">Contact</a></li>
    </ul>
  </nav>

  <!-- ============================================
       HERO SECTION
       ============================================ -->
  <section class="hero">
    <div class="hero__inner">
      <p class="hero__overline">Design Studio</p>
      <h1 class="hero__title">
        Where Light<br>
        Meets <em>Shadow</em>
      </h1>
      <div class="hero__divider"></div>
      <p class="hero__subtitle">
        We craft digital experiences defined by cinematic restraint,
        precise typography, and the dramatic interplay of darkness
        and light. Every element earns its place.
      </p>
      <div class="hero__actions">
        <a href="#work" class="btn">View Work</a>
        <a href="#about" class="btn btn--ghost">Our Process</a>
      </div>
    </div>
  </section>

  <!-- ============================================
       LUMINOUS DIVIDER
       ============================================ -->
  <hr class="divider">

  <!-- ============================================
       STATS ROW
       ============================================ -->
  <section class="stats">
    <div class="stat reveal">
      <div class="stat__number">147</div>
      <div class="stat__label">Projects Delivered</div>
    </div>
    <div class="stat reveal">
      <div class="stat__number">12</div>
      <div class="stat__label">Design Awards</div>
    </div>
    <div class="stat reveal">
      <div class="stat__number">98%</div>
      <div class="stat__label">Client Retention</div>
    </div>
    <div class="stat reveal">
      <div class="stat__number">2018</div>
      <div class="stat__label">Established</div>
    </div>
  </section>

  <hr class="divider">

  <!-- ============================================
       WORK / CARD GRID
       ============================================ -->
  <section id="work" class="section">
    <p class="section__overline">Selected Work</p>
    <h2 class="section__title">Recent Projects</h2>
    <p class="section__subtitle">
      A curated selection of our most compelling work, where
      darkness serves as both canvas and collaborator.
    </p>

    <div class="card-grid">
      <article class="card reveal">
        <div class="card__number">01</div>
        <h3 class="card__title">Meridian Hotel Brand</h3>
        <p class="card__text">
          Complete brand identity and web experience for a luxury
          boutique hotel. Darkness, gold, and restraint define
          every touchpoint.
        </p>
        <span class="card__tag">Branding</span>
      </article>

      <article class="card reveal">
        <div class="card__number">02</div>
        <h3 class="card__title">Obsidian Gallery</h3>
        <p class="card__text">
          A digital exhibition space for contemporary photography.
          Monochromatic imagery emerges from pure black canvases
          with cinematic pacing.
        </p>
        <span class="card__tag">Web Design</span>
      </article>

      <article class="card reveal">
        <div class="card__number">03</div>
        <h3 class="card__title">Vesper Watchmakers</h3>
        <p class="card__text">
          E-commerce experience for artisan timepieces. Each product
          is revealed through chiaroscuro lighting and deliberate
          scroll-driven narratives.
        </p>
        <span class="card__tag">E-Commerce</span>
      </article>
    </div>
  </section>

  <hr class="divider">

  <!-- ============================================
       SPLIT / FEATURED SECTION
       ============================================ -->
  <section id="about" class="section section--full">
    <div class="split">
      <div class="split__image">
        <!-- Replace with your own image -->
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Portrait in shadow">
      </div>
      <div class="split__content">
        <p class="section__overline">Philosophy</p>
        <h2 class="section__title">Cinematic Restraint</h2>
        <blockquote class="split__quote">
          "The most powerful design decisions are the ones
          where you choose to leave something out."
        </blockquote>
        <p class="split__attribution">-- Studio Manifesto, 2021</p>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- ============================================
       JOURNAL / SECONDARY CARDS
       ============================================ -->
  <section id="journal" class="section">
    <p class="section__overline">Journal</p>
    <h2 class="section__title">Thoughts on Design</h2>
    <p class="section__subtitle">
      Essays on craft, restraint, and the disciplined pursuit
      of atmosphere in digital design.
    </p>

    <div class="card-grid">
      <article class="card reveal">
        <h3 class="card__title">On the Weight of Darkness</h3>
        <p class="card__text">
          How black space carries more visual mass than any
          element placed within it, and why that matters for
          hierarchy.
        </p>
        <span class="card__tag">Essay</span>
      </article>

      <article class="card reveal">
        <h3 class="card__title">Typography as Light Source</h3>
        <p class="card__text">
          When color and imagery are stripped away, the letterform
          becomes the brightest object in the room. A study in
          typographic luminance.
        </p>
        <span class="card__tag">Process</span>
      </article>

      <article class="card reveal">
        <h3 class="card__title">Accessible Darkness</h3>
        <p class="card__text">
          Maintaining WCAG compliance in ultra-dark interfaces.
          Practical strategies for contrast, focus states, and
          inclusive design within noir aesthetics.
        </p>
        <span class="card__tag">Accessibility</span>
      </article>
    </div>
  </section>

  <hr class="divider">

  <!-- ============================================
       FOOTER
       ============================================ -->
  <footer id="contact" class="footer">
    <div class="footer__grid">
      <div>
        <div class="footer__brand">Noir Studio</div>
        <p class="footer__desc">
          Design defined by cinematic restraint
          and the eloquence of darkness.
        </p>
      </div>
      <div>
        <h4 class="footer__heading">Navigation</h4>
        <a href="#work" class="footer__link">Work</a>
        <a href="#about" class="footer__link">About</a>
        <a href="#journal" class="footer__link">Journal</a>
        <a href="#contact" class="footer__link">Contact</a>
      </div>
      <div>
        <h4 class="footer__heading">Connect</h4>
        <a href="#" class="footer__link">Twitter / X</a>
        <a href="#" class="footer__link">Dribbble</a>
        <a href="#" class="footer__link">Behance</a>
        <a href="#" class="footer__link">LinkedIn</a>
      </div>
      <div>
        <h4 class="footer__heading">Inquiries</h4>
        <a href="mailto:hello@noir.studio" class="footer__link">hello@noir.studio</a>
        <a href="#" class="footer__link">Start a Project</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copyright">&copy; 2026 Noir Studio. All rights reserved.</span>
      <span class="footer__copyright">Crafted in darkness.</span>
    </div>
  </footer>

  <!-- ============================================
       REVEAL ANIMATION SCRIPT
       ============================================ -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const reveals = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      reveals.forEach((el) => observer.observe(el));
    });
  </script>

</body>
</html>
```

---

## Implementation Tips

- **OLED smearing prevention** -- avoid pure #000000 for large scrollable surfaces; use #0A0A0A or #0B0B0B to prevent the pixel-off smearing artifact common on OLED displays while maintaining the deep-black aesthetic
- **Contrast ratio vigilance** -- dark interfaces are prone to WCAG failures; use browser dev tools or dedicated contrast checkers to verify that body text (#C8C8C8 on #0A0A0A = ~13.2:1) and muted text (#6B6B6B on #0A0A0A = ~4.6:1) pass AA standards
- **Font rendering optimization** -- enable `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` globally; light text on dark backgrounds benefits from subpixel rendering suppression to avoid color fringing
- **Accent color as system** -- define your accent (Tungsten Amber #C9A84C) in a single CSS custom property and reference it everywhere; changing the accent in one place should transform the entire interface, making client customization effortless
- **Performance-conscious imagery** -- since all images are desaturated via CSS `filter: grayscale(100%)`, you can serve standard color photographs and let the browser handle the conversion; no need to prepare separate monochrome assets
- **Progressive enhancement for animations** -- wrap scroll-triggered reveals in a `prefers-reduced-motion` media query; respect users who have motion sensitivity by providing a no-animation fallback where all `.reveal` elements are immediately visible
- **Dark mode as default, light mode as option** -- use `color-scheme: dark` in your CSS and HTML meta tag to inform browsers and system UI elements (scrollbars, form controls) that the interface is dark-first
- **Test in ambient light conditions** -- dark interfaces behave differently in bright environments; test your design in both dim and well-lit settings to ensure text remains legible and the atmospheric qualities survive varied viewing conditions
