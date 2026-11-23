# Grunge Revival Design Reference

## Overview

Grunge Revival is the modern reinterpretation of the raw, distressed visual language that emerged from 1990s alternative culture -- updated with contemporary layout sensibilities, responsive design awareness, and intentional accessibility. Where the original 90s Grunge aesthetic was born from zine culture, photocopier abuse, and a genuine rejection of mainstream polish, Grunge Revival takes those same visual markers -- torn textures, ink splatters, grain overlays, and hand-drawn typography -- and applies them within a more structured, usable framework. The "mess" is visual rather than structural: navigation hierarchies remain predictable, content architecture stays familiar, and readability is preserved even as the surface layer screams chaos and imperfection.

This aesthetic gained significant momentum through 2025 and into 2026 as a direct reaction against years of hyper-clean minimalism, sanitized corporate branding, and AI-polished uniformity. Designers and audiences alike began craving realness -- something that feels physically touched, hand-assembled, and authentically human. Streetwear brands, independent music labels, alternative media outlets, and Gen Z-oriented platforms adopted Grunge Revival to signal authenticity and countercultural credibility. The approach borrows from David Carson's deconstructed layouts and DIY punk zine culture, but filters those influences through modern CSS capabilities like `clip-path`, CSS filters, blend modes, and fluid typography.

The critical distinction between Grunge Revival and its 90s ancestor is intentionality. Original grunge design was genuinely chaotic -- elements were placed by instinct and analog limitation. Grunge Revival is deliberately imperfect: every tilt, every torn edge, every grain overlay is a conscious design choice executed with precision tools to create the illusion of analog rawness. The grid is still there underneath, gently bent rather than broken. Content remains scannable. Interactive elements provide clear affordances despite their rough appearance. It is controlled rebellion -- the visual language of disorder deployed within an invisible structure that ensures the design actually works for its users. This duality -- surface chaos with underlying order -- is what makes Grunge Revival a viable aesthetic for serious web projects, not just experimental art pieces.

---

## Visual Characteristics

### Core Design Traits

- **Distressed texture overlays** -- grain, noise, scratches, and paper textures layered over backgrounds and images using CSS filters, SVG `feTurbulence`, and blend modes to simulate analog wear
- **Torn and rough edge treatments** -- jagged clip-path dividers, uneven borders, and ripped-paper silhouettes that replace clean horizontal rules and geometric containers
- **Ink splatter and paint drip accents** -- scattered dot decorations, smudge marks, and drip shapes used as dividers, background accents, and decorative noise
- **Film grain and noise overlays** -- persistent low-opacity noise textures applied globally or per-section to evoke lo-fi photography and analog film stock
- **Deliberate element rotation** -- subtle 0.5-3 degree tilts on cards, headings, and containers that suggest hand-placement rather than machine precision
- **High-contrast photographic treatments** -- images processed with heavy contrast, desaturation, and halftone effects to simulate photocopied or screen-printed output
- **Layered, collage-inspired compositions** -- overlapping text, images, and texture panels that reference physical cut-and-paste assemblage
- **Hand-drawn and eroded typography** -- display fonts with marker, brush, or weathered qualities paired with readable monospace or sans-serif body text
- **Dark, moody atmosphere with controlled pops of warmth** -- predominantly deep backgrounds punctuated by rust, amber, and muted red accents
- **Visible "construction" artifacts** -- decorative tape strips, staple marks, pin holes, and adhesive residue rendered in CSS as pseudo-elements
- **Halftone and dot-screen patterns** -- coarse radial-gradient dot overlays that reference cheap printing processes and newsprint reproduction

### Design Principles

- **Controlled chaos** -- the visual surface is rough and imperfect, but the underlying information architecture, navigation flow, and content hierarchy remain clear and predictable
- **Analog warmth in a digital medium** -- every effect should reference a physical process (photocopying, screen-printing, hand-lettering, collaging) rather than appearing purely generative
- **Texture as storytelling** -- distressed surfaces communicate history, wear, and human touch; they are not arbitrary decoration but deliberate signals of authenticity
- **Modern structure, vintage skin** -- use contemporary CSS Grid, Flexbox, and responsive patterns underneath, then dress them with grunge textures and rough edges
- **Readability is non-negotiable** -- body text must remain legible; grain overlays and texture effects should enhance atmosphere without obscuring content
- **Asymmetry with purpose** -- elements are offset, tilted, and unevenly weighted, but always in service of directing the eye and creating visual tension
- **Depth through layering** -- build visual richness by stacking multiple subtle texture layers (background grain, midground content, foreground noise) rather than relying on a single heavy effect
- **Contrast as hierarchy** -- use stark tonal differences and bold typography weights to maintain scanability within the visual noise

---

## Color Palette

Grunge Revival palettes are rooted in dark, desaturated earth tones -- the colors of worn leather, rusted metal, weathered concrete, and rain-soaked wood. Backgrounds skew deep and moody (charcoal, near-black, dark olive) while accent colors draw from oxidized metals and faded natural pigments. Unlike the original 90s Grunge palette which was almost exclusively dark, the Revival allows for slightly more tonal range with muted amber and warm off-whites that improve readability on screens. Every color should look as if it has been left out in the rain, faded by sun, or stained by coffee and ink.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Void Black | `#0C0C0C` | Deepest backgrounds, maximum contrast anchors |
| Asphalt | `#1A1A1E` | Primary dark background, hero sections |
| Worn Charcoal | `#2C2A2A` | Card backgrounds, secondary surfaces |
| Concrete Dust | `#4A4744` | Borders, dividers, muted structural elements |
| Smoke Haze | `#7A7672` | Body text on dark, captions, timestamps |
| Oxidized Rust | `#A04A2D` | Primary warm accent, links, CTAs, emphasis |
| Faded Amber | `#B89234` | Secondary warm accent, headings, callouts |
| Dried Blood | `#6B1515` | Strong emphasis, danger states, intensity |
| Dark Moss | `#3A3F2A` | Earthy accent background, nature-inspired depth |
| Slate Teal | `#3D5A5C` | Cool accent, hover states, secondary interactive |
| Bruise Purple | `#4E3A5C` | Rare accent, expressive highlights |
| Aged Parchment | `#D4C9A8` | Primary text on dark, warm off-white |
| Dirty White | `#E8E2D5` | High-emphasis text, hero titles |
| Tarnished Silver | `#9A9590` | Muted metadata, disabled states |
| Stain Brown | `#8B6F4E` | Decorative mid-tone, warm neutral fill |

### CSS Custom Properties

```css
:root {
  /* Darkest tones */
  --revival-void: #0c0c0c;
  --revival-asphalt: #1a1a1e;
  --revival-charcoal: #2c2a2a;
  --revival-concrete: #4a4744;
  --revival-smoke: #7a7672;

  /* Warm accents */
  --revival-rust: #a04a2d;
  --revival-amber: #b89234;
  --revival-blood: #6b1515;
  --revival-stain: #8b6f4e;

  /* Cool accents */
  --revival-moss: #3a3f2a;
  --revival-teal: #3d5a5c;
  --revival-bruise: #4e3a5c;

  /* Light tones */
  --revival-parchment: #d4c9a8;
  --revival-white: #e8e2d5;
  --revival-silver: #9a9590;

  /* Functional mappings */
  --revival-bg-primary: var(--revival-asphalt);
  --revival-bg-secondary: var(--revival-charcoal);
  --revival-bg-surface: var(--revival-concrete);
  --revival-text-primary: var(--revival-white);
  --revival-text-secondary: var(--revival-parchment);
  --revival-text-muted: var(--revival-smoke);
  --revival-accent-warm: var(--revival-rust);
  --revival-accent-cool: var(--revival-teal);
  --revival-accent-highlight: var(--revival-amber);
  --revival-border: var(--revival-concrete);
}
```

---

## Typography

Grunge Revival typography balances raw expressiveness with modern readability. Display and heading fonts carry the distressed, hand-made energy -- marker strokes, eroded serifs, brush textures -- while body text uses clean monospace or humanist sans-serif fonts that remain legible beneath grain overlays. The key shift from 90s Grunge is that body copy is designed to be comfortably read, not merely endured. Headings can be rough, tilted, and confrontational; paragraphs should flow cleanly.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **Permanent Marker** | Bold hand-drawn marker | Hero headlines, section titles, confrontational display |
| **Rubik Dirt** | Bold with ink-pressed texture | Large display text, poster-style headings |
| **Rock Salt** | Rough handwritten scrawl | Subheadings, annotations, margin scrawls |
| **Special Elite** | Distressed typewriter | Section headings, labels, analog-feel text |
| **Londrina Solid** | Hand-drawn bold sans | Friendly heading alternative, zine-style titles |
| **Inter** | Clean geometric sans | Body text for maximum readability (modern approach) |
| **IBM Plex Mono** | Technical monospace | Body text, code blocks, structured content |
| **Courier Prime** | Typewriter monospace | Body text alternative, lo-fi narrative content |
| **Share Tech Mono** | Technical monospace | Metadata, timestamps, labels, small text |

### Font Pairing Suggestions

| Pairing | Headings | Body | Mood |
|---------|----------|------|------|
| **Modern Raw** | Permanent Marker | Inter | Raw display energy meets clean modern readability |
| **Typewriter Grit** | Special Elite | IBM Plex Mono | Analog machine aesthetic with technical precision |
| **Poster Wall** | Rubik Dirt | Courier Prime | Inky, bold display over lo-fi typewriter body |
| **Zine Pages** | Rock Salt | Inter | Intimate hand-scrawled headings with clean text |
| **Underground Press** | Londrina Solid | Share Tech Mono | Hand-drawn boldness with technical metadata feel |

### CSS Example

```css
/* Import Grunge Revival Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rubik+Dirt&family=Rock+Salt&family=Special+Elite&family=Londrina+Solid&family=Inter:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500;700&family=Courier+Prime:wght@400;700&family=Share+Tech+Mono&display=swap');

/* Hero / Display -- aggressive marker energy */
h1 {
  font-family: 'Permanent Marker', 'Rubik Dirt', cursive;
  font-size: clamp(2.5rem, 7vw, 5rem);
  letter-spacing: -0.02em;
  line-height: 0.95;
  color: var(--revival-white);
  text-transform: uppercase;
  transform: rotate(-1.5deg);
  text-shadow:
    3px 3px 0 rgba(0, 0, 0, 0.6),
    -1px -1px 0 rgba(0, 0, 0, 0.25);
}

/* Section headings -- hand-drawn with attitude */
h2 {
  font-family: 'Rock Salt', 'Permanent Marker', cursive;
  font-size: clamp(1.3rem, 3.5vw, 2rem);
  color: var(--revival-amber);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transform: rotate(-0.6deg);
  margin-bottom: 1.2rem;
}

/* Sub-headings -- distressed typewriter */
h3 {
  font-family: 'Special Elite', 'Courier New', monospace;
  font-size: 1.15rem;
  color: var(--revival-parchment);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Body text -- clean and readable (modern revival approach) */
body {
  font-family: 'Inter', 'IBM Plex Mono', system-ui, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--revival-text-secondary);
}

/* Alternative body -- typewriter feel */
.revival-body-mono {
  font-family: 'IBM Plex Mono', 'Courier Prime', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
}

/* Metadata, labels, tags */
.revival-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--revival-smoke);
}

/* Oversized display -- inky poster text */
.revival-display {
  font-family: 'Rubik Dirt', 'Permanent Marker', cursive;
  font-size: clamp(3rem, 9vw, 7rem);
  color: var(--revival-rust);
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
  line-height: 0.85;
}

/* Handwritten annotation scrawl */
.revival-scrawl {
  font-family: 'Rock Salt', cursive;
  font-size: 0.8rem;
  color: var(--revival-rust);
  transform: rotate(-2.5deg);
  display: inline-block;
}
```

---

## Layout Principles

- **Grid underneath, chaos on top** -- use CSS Grid and Flexbox for structural positioning, then apply visual roughness (tilts, torn edges, texture overlays) as a cosmetic layer that does not break the underlying order
- **Readable content width** -- constrain body text to 650-800px columns for comfortable reading, even as background textures and decorative elements bleed edge-to-edge
- **Asymmetric but balanced** -- offset elements from center, vary card tilts, and use uneven spacing, but ensure the overall visual weight is distributed so the page does not feel lopsided
- **Layered depth model** -- think in three layers: background (dark surface + grain), midground (content cards, text, images), and foreground (noise overlay, decorative artifacts, tape strips)
- **Torn-edge section transitions** -- use `clip-path` polygons with irregular vertices to create jagged, ripped-paper boundaries between sections instead of clean divider lines
- **Full-bleed texture, contained content** -- dark, noisy backgrounds extend to viewport edges while readable content stays in a centered, comfortable column
- **Collage regions as accent areas** -- designate specific layout zones (not the entire page) for overlapping, absolute-positioned collage pieces; keep primary content in normal document flow
- **Deliberate whitespace (darkspace)** -- use generous padding between sections to let the moody atmosphere breathe; not every inch needs to be layered with texture
- **Responsive degradation of chaos** -- on mobile, reduce rotation angles, collapse collage zones to stacked layouts, and simplify texture layers for performance
- **Vertical rhythm through irregularity** -- vary section padding slightly (3-5rem range) and let torn-edge heights differ so the page feels hand-assembled rather than machine-stamped
- **Sticky navigation, rough surface** -- keep navigation fixed or sticky for usability, but dress it in grunge textures so it does not break the aesthetic

---

## CSS / Design Techniques

### Card Component

```css
/* Grunge Revival card -- distressed surface with tape and torn edge */
.revival-card {
  background:
    radial-gradient(circle at 25% 20%, rgba(160, 74, 45, 0.04) 0%, transparent 50%),
    var(--revival-charcoal);
  border: 1px solid rgba(160, 74, 45, 0.2);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transform: rotate(calc(var(--tilt, -0.6) * 1deg));
  box-shadow:
    4px 4px 0 rgba(0, 0, 0, 0.45),
    0 0 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover lifts the card slightly */
.revival-card:hover {
  transform: rotate(calc(var(--tilt, -0.6) * 0.3deg)) translateY(-2px);
  box-shadow:
    6px 6px 0 rgba(0, 0, 0, 0.5),
    0 0 35px rgba(0, 0, 0, 0.25);
}

/* Tape strip pseudo-element */
.revival-card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: calc(35% + var(--tape-offset, 0px));
  width: 70px;
  height: 20px;
  background: rgba(212, 201, 168, 0.15);
  border: 1px solid rgba(212, 201, 168, 0.08);
  transform: rotate(calc(var(--tape-tilt, 2) * 1deg));
  z-index: 2;
}

/* Torn bottom edge */
.revival-card::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--revival-charcoal);
  clip-path: polygon(
    0% 0%, 3% 60%, 7% 20%, 11% 70%, 16% 25%, 21% 75%,
    26% 15%, 31% 65%, 36% 30%, 41% 80%, 47% 10%, 52% 55%,
    57% 35%, 62% 80%, 67% 20%, 72% 60%, 77% 40%, 82% 70%,
    87% 15%, 92% 55%, 97% 25%, 100% 45%, 100% 100%, 0% 100%
  );
}

/* Card title */
.revival-card h3 {
  font-family: 'Permanent Marker', cursive;
  color: var(--revival-amber);
  margin-bottom: 0.75rem;
  transform: rotate(-0.4deg);
}

/* Card body text */
.revival-card p {
  font-family: 'Inter', sans-serif;
  color: var(--revival-parchment);
  line-height: 1.7;
  font-size: 0.95rem;
}
```

### Button Component

```css
/* Primary button -- rough, tactile, hand-stamped feel */
.revival-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  font-family: 'Permanent Marker', 'Special Elite', cursive;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--revival-white);
  background: var(--revival-asphalt);
  border: 2px solid var(--revival-rust);
  cursor: pointer;
  position: relative;
  transform: rotate(-0.8deg);
  transition: all 0.15s ease;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.45);
}

.revival-btn:hover {
  background: var(--revival-rust);
  color: var(--revival-void);
  transform: rotate(0.4deg) translate(-1px, -1px);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.55);
}

.revival-btn:active {
  transform: rotate(0deg) translate(2px, 2px);
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
}

.revival-btn:focus-visible {
  outline: 2px solid var(--revival-amber);
  outline-offset: 3px;
}

/* Ghost variant -- transparent with rough border */
.revival-btn--ghost {
  background: transparent;
  border: 2px solid var(--revival-smoke);
  color: var(--revival-parchment);
}

.revival-btn--ghost:hover {
  border-color: var(--revival-amber);
  color: var(--revival-amber);
  background: rgba(184, 146, 52, 0.06);
}

/* Sticker variant -- looks like a peeling label */
.revival-btn--sticker {
  background: var(--revival-amber);
  color: var(--revival-void);
  border: 2px solid var(--revival-void);
  transform: rotate(1.5deg);
}

.revival-btn--sticker:hover {
  transform: rotate(-0.5deg) scale(1.04);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
}

/* Distressed variant -- eroded edge effect */
.revival-btn--distressed {
  border-style: dashed;
  border-color: var(--revival-concrete);
  background:
    radial-gradient(circle at 80% 30%, rgba(160, 74, 45, 0.08) 0%, transparent 60%),
    var(--revival-charcoal);
}
```

### Navigation Bar

```css
/* Grunge Revival navigation -- structured usability, rough surface */
.revival-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--revival-void);
  border-bottom: 2px solid var(--revival-concrete);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Subtle noise on nav bar */
.revival-nav::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.revival-nav__brand {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.3rem;
  color: var(--revival-white);
  text-decoration: none;
  transform: rotate(-0.8deg);
  display: inline-block;
  letter-spacing: 0.03em;
}

.revival-nav__links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.revival-nav__link {
  font-family: 'Special Elite', monospace;
  font-size: 0.85rem;
  color: var(--revival-smoke);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease;
}

.revival-nav__link:hover {
  color: var(--revival-amber);
  border-bottom-color: var(--revival-amber);
}

.revival-nav__link--active {
  color: var(--revival-rust);
  border-bottom-color: var(--revival-rust);
}

/* Mobile nav toggle */
@media (max-width: 640px) {
  .revival-nav {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .revival-nav__links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
```

### Hero Section

```css
/* Full-bleed hero with layered distressed textures */
.revival-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 2rem;
  background:
    /* Vignette */
    radial-gradient(ellipse at center, transparent 35%, rgba(12, 12, 12, 0.7) 100%),
    /* Warm light leak */
    radial-gradient(circle at 15% 75%, rgba(160, 74, 45, 0.06) 0%, transparent 50%),
    /* Cool shadow */
    radial-gradient(circle at 85% 20%, rgba(58, 63, 42, 0.08) 0%, transparent 40%),
    var(--revival-void);
  overflow: hidden;
}

/* Grain noise overlay */
.revival-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  background-size: 512px 512px;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
}

/* Diagonal scratch lines */
.revival-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      -25deg,
      transparent,
      transparent 12px,
      rgba(255, 255, 255, 0.008) 12px,
      rgba(255, 255, 255, 0.008) 13px
    ),
    repeating-linear-gradient(
      40deg,
      transparent,
      transparent 16px,
      rgba(255, 255, 255, 0.006) 16px,
      rgba(255, 255, 255, 0.006) 17px
    );
  pointer-events: none;
  z-index: 1;
}

.revival-hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.revival-hero__title {
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  line-height: 0.92;
  color: var(--revival-white);
  text-transform: uppercase;
  transform: rotate(-1.8deg);
  margin-bottom: 1.5rem;
  text-shadow:
    4px 4px 0 rgba(0, 0, 0, 0.6),
    -2px -2px 0 rgba(0, 0, 0, 0.2);
}

.revival-hero__subtitle {
  font-family: 'Special Elite', monospace;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: var(--revival-smoke);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transform: rotate(0.4deg);
  display: inline-block;
}
```

### Torn Paper Edge Divider

```css
/* Torn paper edge between sections */
.revival-torn-edge {
  height: 16px;
  background: var(--revival-asphalt);
  clip-path: polygon(
    0% 0%, 2% 55%, 5% 18%, 8% 72%, 12% 28%, 15% 78%,
    19% 12%, 22% 62%, 25% 32%, 29% 82%, 32% 18%, 35% 68%,
    38% 8%, 41% 52%, 44% 72%, 47% 18%, 50% 58%, 53% 32%,
    56% 78%, 59% 12%, 62% 58%, 65% 28%, 68% 72%, 71% 38%,
    74% 88%, 77% 22%, 80% 62%, 83% 8%, 86% 48%, 89% 72%,
    92% 28%, 95% 62%, 98% 18%, 100% 48%,
    100% 100%, 0% 100%
  );
}

/* Inverse variant for dark-to-darker transitions */
.revival-torn-edge--inverse {
  background: var(--revival-void);
}

/* Lighter variant */
.revival-torn-edge--light {
  background: var(--revival-charcoal);
}
```

### Distressed Texture Overlay

```css
/* Global grain/noise overlay -- apply to body or specific containers */
.revival-grain {
  position: relative;
}

.revival-grain::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  background-size: 512px 512px;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 9999;
}

/* Halftone dot pattern overlay */
.revival-halftone::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.7) 0.7px, transparent 0.7px);
  background-size: 4px 4px;
  opacity: 0.035;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* Photocopy treatment for images */
.revival-xerox {
  filter: contrast(1.7) grayscale(1) brightness(1.12);
  mix-blend-mode: luminosity;
}

.revival-xerox--heavy {
  filter: contrast(2.5) grayscale(1) brightness(1.25);
  opacity: 0.9;
}
```

### Splatter Divider

```css
/* Ink splatter horizontal divider */
.revival-splatter {
  border: none;
  height: 1px;
  background: var(--revival-concrete);
  position: relative;
  margin: 3rem 0;
  opacity: 0.35;
}

/* Splatter dots scattered along the line */
.revival-splatter::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 15%;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--revival-rust);
  box-shadow:
    28px 3px 0 2px var(--revival-rust),
    60px -2px 0 1px var(--revival-rust),
    100px 4px 0 3px var(--revival-rust),
    155px -1px 0 1px var(--revival-rust),
    220px 2px 0 2px var(--revival-rust);
  opacity: 0.3;
}

/* Secondary splatter layer */
.revival-splatter::after {
  content: '';
  position: absolute;
  top: -3px;
  right: 20%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--revival-amber);
  box-shadow:
    -25px 2px 0 1px var(--revival-amber),
    -65px -1px 0 2px var(--revival-amber),
    -110px 3px 0 1px var(--revival-amber);
  opacity: 0.2;
}
```

### Blockquote / Callout

```css
/* Rough-edged callout with paint-stroke left border */
.revival-quote {
  border-left: 4px solid var(--revival-rust);
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  margin: 2.5rem 0;
  background: rgba(58, 63, 42, 0.15);
  transform: rotate(-0.3deg);
  position: relative;
  font-style: italic;
  color: var(--revival-white);
  font-family: 'Courier Prime', monospace;
  line-height: 1.7;
}

.revival-quote::before {
  content: '\201C';
  position: absolute;
  top: -0.4rem;
  left: 0.5rem;
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  color: var(--revival-rust);
  opacity: 0.25;
  line-height: 1;
}

.revival-quote cite {
  display: block;
  margin-top: 1rem;
  font-family: 'Share Tech Mono', monospace;
  font-style: normal;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--revival-smoke);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do** layer subtle grain/noise overlays on backgrounds to create analog warmth -- use SVG `feTurbulence` with low opacity (0.04-0.08) so text remains readable
- **Do** tilt elements slightly (0.5-2.5 degrees) for a hand-placed feel, but keep the rotations small enough that they do not disrupt scanning or create awkward whitespace gaps
- **Do** use dark, desaturated earth tones as your foundation -- rust, charcoal, moss, amber, and aged parchment form the core vocabulary
- **Do** pair expressive display fonts (Permanent Marker, Rubik Dirt) with clean, readable body fonts (Inter, IBM Plex Mono) to balance chaos with usability
- **Do** maintain clear focus states, keyboard navigation, and semantic HTML underneath the visual roughness -- accessibility is not optional even in grunge
- **Do** use `clip-path` for torn-edge section dividers and `box-shadow` with hard offsets for that physical, pasted-on depth
- **Do** treat the grid as invisible scaffolding -- the structure should be there, but the visual surface should obscure it with texture, tilts, and overlapping elements
- **Do** let sections breathe with generous dark padding so the moody atmosphere has room to resonate

### Don'ts

- **Don't** sacrifice body text readability for aesthetic effect -- grain overlays, rotation, and texture should never make paragraphs hard to read
- **Don't** use bright, saturated, or neon colors -- Grunge Revival is muted, oxidized, and desaturated; reserve high-saturation accents for tiny emphasis details only
- **Don't** apply distressed effects uniformly to every element -- vary the intensity so some areas feel rougher while others are relatively calm; monotonous texture is boring texture
- **Don't** forget the underlying responsive structure -- on mobile, reduce rotation angles, simplify texture layers, and collapse collage areas into stacked linear layouts
- **Don't** confuse Grunge Revival with 90s Grunge -- the revival preserves usability, hierarchy, and structural clarity that the original actively rejected
- **Don't** use glossy gradients, smooth drop shadows, or material-design-style elevation -- everything should feel matte, physical, and weathered
- **Don't** overload the page with too many overlapping pseudo-elements and heavy SVG filters -- performance matters, especially on mobile; test and optimize
- **Don't** mix in clean, corporate design patterns (pill buttons, perfect rounded corners, smooth cards) -- they break the illusion of analog rawness

---

## Related Aesthetics

| Aesthetic | Relationship to Grunge Revival |
|-----------|-------------------------------|
| **90s Grunge** | Direct ancestor; Grunge Revival modernizes its textures, typography, and palette while adding structural clarity and responsive awareness that the original lacked |
| **Corporate Grunge** | Commercialized cousin; both use grunge textures within structured layouts, but Corporate Grunge serves corporate branding while Revival maintains countercultural edge |
| **DIY Punk** | Ideological parent; shares anti-establishment ethos and cut-and-paste collage language, but punk is more overtly political and aggressive |
| **Brutalist Web Design** | Spiritual ally; both reject polish, but Brutalism strips to raw HTML minimalism while Grunge Revival layers texture and warmth |
| **Industrial Gothic** | Shares dark palettes and gritty atmosphere; Industrial leans colder, metallic, and mechanical where Revival is warmer and more organic |
| **Anti-Design** | Fellow rule-breaker; both intentionally violate conventions, but Anti-Design is more conceptual and provocative while Revival is more atmospheric |
| **Dark Academia** | Overlaps in muted earth tones and moody ambiance; Dark Academia is refined and scholarly where Revival is rough and visceral |
| **Acid Design** | Both embrace visual chaos and layered compositions, but Acid Design uses neon fluorescents and psychedelic distortion while Revival stays muted and earthy |
| **Cyberpunk** | Shares anti-corporate sentiment and dark foundations, but Cyberpunk adds neon highlights and sci-fi futurism |
| **Weirdcore** | Both embrace distortion and lo-fi qualities, but Weirdcore leans surreal and dreamlike rather than gritty and physical |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grunge Revival</title>
  <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rock+Salt&family=Special+Elite&family=Rubik+Dirt&family=Londrina+Solid&family=Inter:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <style>
    :root {
      --revival-void: #0c0c0c;
      --revival-asphalt: #1a1a1e;
      --revival-charcoal: #2c2a2a;
      --revival-concrete: #4a4744;
      --revival-smoke: #7a7672;
      --revival-rust: #a04a2d;
      --revival-amber: #b89234;
      --revival-blood: #6b1515;
      --revival-stain: #8b6f4e;
      --revival-moss: #3a3f2a;
      --revival-teal: #3d5a5c;
      --revival-bruise: #4e3a5c;
      --revival-parchment: #d4c9a8;
      --revival-white: #e8e2d5;
      --revival-silver: #9a9590;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--revival-asphalt);
      color: var(--revival-parchment);
      font-family: 'Inter', 'IBM Plex Mono', system-ui, sans-serif;
      font-size: 1rem;
      line-height: 1.75;
      overflow-x: hidden;
      position: relative;
    }

    /* ---- Global grain overlay ---- */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      opacity: 0.06;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      mix-blend-mode: overlay;
      z-index: 9999;
    }

    /* ---- Navigation ---- */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--revival-void);
      border-bottom: 2px solid var(--revival-concrete);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    nav .brand {
      font-family: 'Permanent Marker', cursive;
      font-size: 1.3rem;
      color: var(--revival-white);
      text-decoration: none;
      transform: rotate(-0.8deg);
      display: inline-block;
    }

    nav ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }

    nav a {
      font-family: 'Special Elite', monospace;
      font-size: 0.85rem;
      color: var(--revival-smoke);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.2rem;
      transition: all 0.15s ease;
    }

    nav a:hover,
    nav a.active {
      color: var(--revival-amber);
      border-bottom-color: var(--revival-amber);
    }

    /* ---- Hero Section ---- */
    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5rem 2rem;
      background:
        radial-gradient(ellipse at center, transparent 35%, rgba(12, 12, 12, 0.7) 100%),
        radial-gradient(circle at 15% 75%, rgba(160, 74, 45, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 85% 20%, rgba(58, 63, 42, 0.08) 0%, transparent 40%),
        var(--revival-void);
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hg)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      mix-blend-mode: overlay;
      z-index: 1;
    }

    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(-25deg, transparent, transparent 12px, rgba(255,255,255,0.008) 12px, rgba(255,255,255,0.008) 13px),
        repeating-linear-gradient(40deg, transparent, transparent 16px, rgba(255,255,255,0.006) 16px, rgba(255,255,255,0.006) 17px);
      pointer-events: none;
      z-index: 1;
    }

    .hero-content {
      max-width: 800px;
      position: relative;
      z-index: 2;
    }

    .hero h1 {
      font-family: 'Permanent Marker', cursive;
      font-size: clamp(2.8rem, 8vw, 5.5rem);
      line-height: 0.92;
      color: var(--revival-white);
      text-transform: uppercase;
      transform: rotate(-1.8deg);
      margin-bottom: 1.5rem;
      text-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.6),
        -2px -2px 0 rgba(0, 0, 0, 0.2);
    }

    .hero h1 em {
      color: var(--revival-rust);
      font-style: normal;
    }

    .hero .tagline {
      font-family: 'Special Elite', monospace;
      font-size: clamp(0.85rem, 1.8vw, 1.15rem);
      color: var(--revival-smoke);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      transform: rotate(0.4deg);
      display: inline-block;
      margin-bottom: 2rem;
    }

    /* ---- Torn Edge Divider ---- */
    .torn-edge {
      height: 16px;
      background: var(--revival-asphalt);
      clip-path: polygon(
        0% 0%, 2% 55%, 5% 18%, 8% 72%, 12% 28%, 15% 78%,
        19% 12%, 22% 62%, 25% 32%, 29% 82%, 32% 18%, 35% 68%,
        38% 8%, 41% 52%, 44% 72%, 47% 18%, 50% 58%, 53% 32%,
        56% 78%, 59% 12%, 62% 58%, 65% 28%, 68% 72%, 71% 38%,
        74% 88%, 77% 22%, 80% 62%, 83% 8%, 86% 48%, 89% 72%,
        92% 28%, 95% 62%, 98% 18%, 100% 48%,
        100% 100%, 0% 100%
      );
    }

    .torn-edge--dark {
      background: var(--revival-void);
    }

    /* ---- Section Styles ---- */
    section {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    section h2 {
      font-family: 'Rock Salt', 'Permanent Marker', cursive;
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      color: var(--revival-amber);
      text-transform: uppercase;
      transform: rotate(-0.6deg);
      margin-bottom: 1.5rem;
      letter-spacing: 0.02em;
    }

    section h3 {
      font-family: 'Special Elite', monospace;
      font-size: 1.05rem;
      color: var(--revival-parchment);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 2rem 0 0.75rem;
    }

    section p {
      margin-bottom: 1rem;
    }

    /* ---- Card Grid ---- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }

    .card {
      background:
        radial-gradient(circle at 25% 25%, rgba(160, 74, 45, 0.04) 0%, transparent 50%),
        var(--revival-charcoal);
      border: 1px solid rgba(160, 74, 45, 0.18);
      padding: 1.8rem;
      position: relative;
      transform: rotate(calc(var(--tilt, -0.5) * 1deg));
      box-shadow:
        4px 4px 0 rgba(0, 0, 0, 0.4),
        0 0 25px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: rotate(calc(var(--tilt, -0.5) * 0.3deg)) translateY(-2px);
      box-shadow:
        6px 6px 0 rgba(0, 0, 0, 0.5),
        0 0 35px rgba(0, 0, 0, 0.25);
    }

    /* Tape strip */
    .card::before {
      content: '';
      position: absolute;
      top: -5px;
      left: calc(35% + var(--tape-x, 0px));
      width: 68px;
      height: 18px;
      background: rgba(212, 201, 168, 0.14);
      border: 1px solid rgba(212, 201, 168, 0.07);
      transform: rotate(calc(var(--tape-tilt, 2) * 1deg));
      z-index: 2;
    }

    /* Torn bottom edge */
    .card::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 9px;
      background: var(--revival-charcoal);
      clip-path: polygon(
        0% 0%, 4% 60%, 9% 20%, 14% 70%, 19% 25%, 24% 75%,
        29% 15%, 34% 65%, 39% 30%, 44% 80%, 50% 10%, 55% 55%,
        60% 35%, 65% 80%, 70% 20%, 75% 60%, 80% 40%, 85% 70%,
        90% 15%, 95% 55%, 100% 30%, 100% 100%, 0% 100%
      );
    }

    .card .label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--revival-smoke);
      margin-bottom: 0.5rem;
      display: block;
    }

    .card h4 {
      font-family: 'Permanent Marker', cursive;
      color: var(--revival-amber);
      font-size: 1.1rem;
      margin-bottom: 0.6rem;
      transform: rotate(-0.4deg);
    }

    .card p {
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--revival-parchment);
      margin-bottom: 0;
    }

    /* ---- Accent Band ---- */
    .accent-band {
      height: 6px;
      background: repeating-linear-gradient(
        90deg,
        var(--revival-moss) 0px,
        var(--revival-moss) 8px,
        var(--revival-rust) 8px,
        var(--revival-rust) 10px,
        var(--revival-moss) 10px,
        var(--revival-moss) 16px,
        var(--revival-teal) 16px,
        var(--revival-teal) 18px
      );
      opacity: 0.55;
    }

    /* ---- Buttons ---- */
    .btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      font-family: 'Permanent Marker', cursive;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--revival-white);
      background: var(--revival-asphalt);
      border: 2px solid var(--revival-rust);
      cursor: pointer;
      transform: rotate(-0.8deg);
      transition: all 0.15s ease;
      box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.45);
    }

    .btn:hover {
      background: var(--revival-rust);
      color: var(--revival-void);
      transform: rotate(0.4deg) translate(-1px, -1px);
      box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.55);
    }

    .btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
    }

    .btn:focus-visible {
      outline: 2px solid var(--revival-amber);
      outline-offset: 3px;
    }

    .btn--ghost {
      background: transparent;
      border-color: var(--revival-smoke);
      color: var(--revival-parchment);
    }

    .btn--ghost:hover {
      border-color: var(--revival-amber);
      color: var(--revival-amber);
      background: rgba(184, 146, 52, 0.06);
    }

    .btn--sticker {
      background: var(--revival-amber);
      color: var(--revival-void);
      border-color: var(--revival-void);
      transform: rotate(1.5deg);
    }

    .btn--sticker:hover {
      transform: rotate(-0.5deg) scale(1.04);
    }

    .btn-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 2rem 0;
    }

    /* ---- Splatter Divider ---- */
    .splatter-divider {
      border: none;
      height: 1px;
      background: var(--revival-concrete);
      position: relative;
      margin: 3rem 0;
      opacity: 0.35;
    }

    .splatter-divider::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 15%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--revival-rust);
      box-shadow:
        28px 3px 0 2px var(--revival-rust),
        60px -2px 0 1px var(--revival-rust),
        100px 4px 0 3px var(--revival-rust),
        155px -1px 0 1px var(--revival-rust),
        220px 2px 0 2px var(--revival-rust);
      opacity: 0.3;
    }

    /* ---- Blockquote ---- */
    blockquote {
      border-left: 4px solid var(--revival-rust);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      margin: 2.5rem 0;
      background: rgba(58, 63, 42, 0.15);
      transform: rotate(-0.3deg);
      position: relative;
      font-style: italic;
      color: var(--revival-white);
    }

    blockquote::before {
      content: '\201C';
      position: absolute;
      top: -0.4rem;
      left: 0.5rem;
      font-family: 'Permanent Marker', cursive;
      font-size: 3rem;
      color: var(--revival-rust);
      opacity: 0.25;
      line-height: 1;
    }

    /* ---- Collage Section ---- */
    .collage {
      position: relative;
      min-height: 350px;
      margin: 2rem 0;
    }

    .collage-piece {
      position: absolute;
      background: var(--revival-parchment);
      color: var(--revival-void);
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transform: rotate(calc(var(--r, 0) * 1deg));
      z-index: var(--z, 1);
      max-width: 260px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.18);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.8rem;
      line-height: 1.6;
    }

    .collage-piece::before {
      content: '';
      position: absolute;
      top: -6px;
      right: 18%;
      width: 52px;
      height: 16px;
      background: rgba(212, 201, 168, 0.28);
      transform: rotate(calc(var(--tape-r, 3) * 1deg));
    }

    .collage-piece--dark {
      background: var(--revival-void);
      color: var(--revival-white);
      font-family: 'Permanent Marker', cursive;
      font-size: 1.15rem;
      text-transform: uppercase;
    }

    .collage-piece--teal {
      background: var(--revival-teal);
      color: var(--revival-white);
      font-family: 'Londrina Solid', sans-serif;
      font-size: 1rem;
    }

    /* ---- Scrawled Annotation ---- */
    .scrawl {
      font-family: 'Rock Salt', cursive;
      font-size: 0.75rem;
      color: var(--revival-rust);
      transform: rotate(-2.5deg);
      display: inline-block;
    }

    /* ---- Feature Banner ---- */
    .feature-banner {
      background:
        radial-gradient(circle at 30% 50%, rgba(160, 74, 45, 0.05) 0%, transparent 50%),
        var(--revival-charcoal);
      border-top: 2px solid var(--revival-concrete);
      border-bottom: 2px solid var(--revival-concrete);
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
    }

    .feature-banner h2 {
      font-family: 'Rubik Dirt', cursive;
      font-size: clamp(2rem, 6vw, 4rem);
      color: var(--revival-rust);
      text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
      margin-bottom: 1rem;
      transform: rotate(-1deg);
    }

    .feature-banner p {
      max-width: 600px;
      margin: 0 auto;
      color: var(--revival-smoke);
      font-size: 0.95rem;
    }

    /* ---- Links ---- */
    a.text-link {
      color: var(--revival-rust);
      text-decoration: none;
      border-bottom: 1px solid rgba(160, 74, 45, 0.35);
      transition: color 0.15s;
    }

    a.text-link:hover {
      color: var(--revival-amber);
      border-bottom-color: var(--revival-amber);
    }

    /* ---- Footer ---- */
    footer {
      text-align: center;
      padding: 3rem 2rem;
      background: var(--revival-void);
      border-top: 2px solid var(--revival-concrete);
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--revival-smoke);
    }

    footer a {
      color: var(--revival-rust);
      text-decoration: none;
      border-bottom: 1px solid rgba(160, 74, 45, 0.3);
    }

    footer a:hover {
      color: var(--revival-amber);
    }

    /* ---- Responsive ---- */
    @media (max-width: 640px) {
      nav {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
      }

      nav ul {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero {
        min-height: 65vh;
        padding: 3.5rem 1.5rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .collage {
        min-height: auto;
        position: static;
      }

      .collage-piece {
        position: static;
        transform: rotate(calc(var(--r, 0) * 0.4deg));
        max-width: 100%;
        margin-bottom: 1rem;
      }

      .feature-banner {
        padding: 2rem 1.5rem;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <a href="#" class="brand">REVIVAL.studio</a>
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1>Raw Design<br><em>Revived</em></h1>
      <p class="tagline">Distressed textures // Modern structure // Analog soul</p>
      <div class="btn-group">
        <a href="#" class="btn">Explore Work</a>
        <a href="#" class="btn btn--ghost">Read More</a>
      </div>
    </div>
  </section>

  <div class="torn-edge"></div>

  <!-- About Section -->
  <section>
    <h2>the revival</h2>
    <p>After years of hyper-clean minimalism and sterile corporate branding, designers are reaching back to the raw, imperfect visual language of analog production. Grunge Revival takes the distressed textures, hand-drawn typography, and moody earth tones of 90s counterculture and filters them through modern layout sensibilities. The result is design that <em>feels</em> human -- touched, weathered, and real -- while remaining structurally sound and genuinely usable.</p>

    <hr class="splatter-divider">

    <blockquote>
      The mess is visual, not structural. Navigation stays predictable. Content stays readable. But the surface screams authenticity -- every grain overlay, every torn edge, every tilted card whispers that a human hand was here.
    </blockquote>

    <p>This is controlled rebellion: the visual language of disorder deployed within an invisible grid that ensures the design actually works.</p>
  </section>

  <div class="accent-band"></div>

  <!-- Cards Section -->
  <section>
    <h2>core elements</h2>
    <div class="card-grid">
      <div class="card" style="--tilt: -0.8; --tape-tilt: 3; --tape-x: -10px">
        <span class="label">01 // surface</span>
        <h4>Distressed Textures</h4>
        <p>Grain, noise, scratches, and torn edges layered over dark backgrounds. Every surface looks weathered, physically handled, and marked by time.</p>
      </div>
      <div class="card" style="--tilt: 0.6; --tape-tilt: -2; --tape-x: 15px">
        <span class="label">02 // type</span>
        <h4>Expressive Headings</h4>
        <p>Hand-drawn marker fonts and eroded typewriter faces for display text, paired with clean sans-serifs for body copy that stays comfortable to read.</p>
      </div>
      <div class="card" style="--tilt: -0.4; --tape-tilt: 1; --tape-x: 5px">
        <span class="label">03 // palette</span>
        <h4>Oxidized Earth Tones</h4>
        <p>Rust, charcoal, aged parchment, dark moss, and tarnished amber. Colors that feel faded, weathered, and touched by the elements.</p>
      </div>
    </div>
  </section>

  <div class="torn-edge torn-edge--dark"></div>

  <!-- Feature Banner -->
  <div class="feature-banner">
    <h2>Analog Soul. Digital Craft.</h2>
    <p>Every effect references a physical process. Photocopied grain. Screen-printed halftone. Hand-lettered markers. The digital medium disappears behind the illusion of analog warmth.</p>
  </div>

  <div class="torn-edge"></div>

  <!-- Collage Section -->
  <section>
    <h2>collage culture</h2>
    <p>The cut-and-paste ethos of zine culture lives on in overlapping panels, scattered text fragments, and compositions that feel assembled by hand rather than generated by algorithm.</p>

    <div class="collage">
      <div class="collage-piece" style="--r: -2.5; --z: 2; --tape-r: 4; top: 10px; left: 5%;">
        The grid is still there underneath, but you would never know it. Structure is invisible. Only texture, tilt, and raw energy are visible to the eye.
      </div>
      <div class="collage-piece collage-piece--dark" style="--r: 1.8; --z: 3; top: 25px; right: 5%;">
        Controlled chaos
      </div>
      <div class="collage-piece collage-piece--teal" style="--r: -1; --z: 4; top: 160px; left: 20%;">
        Imperfection is the new premium. Audiences crave what feels real.
      </div>
    </div>
  </section>

  <div class="accent-band"></div>

  <!-- Buttons Section -->
  <section>
    <h2>interactions</h2>
    <h3>Button Variants</h3>
    <div class="btn-group">
      <a href="#" class="btn">Primary</a>
      <a href="#" class="btn btn--ghost">Ghost</a>
      <a href="#" class="btn btn--sticker">Sticker</a>
    </div>
    <br>
    <p>Interactive elements carry the same distressed energy as the rest of the page. Buttons tilt, hover states shift like papers on a table, and shadows suggest physical depth. But focus states are clear, hit targets are generous, and keyboard navigation works flawlessly. <span class="scrawl">^ yes, they all work</span></p>
  </section>

  <div class="torn-edge torn-edge--dark"></div>

  <!-- Footer -->
  <footer>
    <p>assembled with intention &mdash; distressed with care &mdash; <a href="#">REVIVAL.studio</a> &mdash; raw since 2025</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the grain overlay** -- apply a single global `body::before` noise texture at low opacity (0.04-0.07) using an inline SVG `feTurbulence` filter; this single layer instantly shifts any design toward the grunge aesthetic without additional assets
- **Use CSS custom properties for all colors** -- define your palette as `--revival-*` variables so you can quickly adjust the mood of the entire design from a single `:root` block; this also makes dark/light variant exploration trivial
- **Layer textures progressively** -- start with a clean layout, add grain, then torn edges, then splatter accents; each layer should be removable without breaking the design, which helps with performance optimization and responsive adaptation
- **Test grain and noise on mobile** -- SVG-based `feTurbulence` backgrounds can impact rendering performance on lower-powered devices; consider reducing opacity, simplifying `numOctaves`, or removing grain overlays entirely below certain breakpoints
- **Use CSS `clip-path` for torn edges rather than images** -- polygon-based clip-paths render crisply at every resolution, add zero network requests, and can be adjusted in code without external asset management
- **Keep rotation values in CSS custom properties** -- define tilts as `--tilt` variables on elements so they can be easily varied per instance and reduced to near-zero on mobile for a cleaner responsive experience
- **Maintain semantic HTML and ARIA attributes** -- the visual chaos should exist entirely in CSS; the underlying HTML should use proper headings, landmarks, labels, and focus management so screen readers and keyboard users experience clean structure
- **Pair with a build tool for texture assets** -- if using raster texture images (paper, splatter PNGs), compress aggressively and consider lazy-loading decorative assets that are not critical to initial content rendering
