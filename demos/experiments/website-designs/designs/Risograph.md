# Risograph Design Reference

Riso printing aesthetic: layered spot colors, visible grain, slight misregistration, soy-based ink texture.

---

## Overview

Risograph printing was invented by the Riso Kagaku Corporation in Japan in 1986, originally designed as a high-speed, cost-effective duplicating system for offices and schools. The machine functions as a hybrid between a photocopier and a screen printer -- it creates a master stencil on a thermal plate, wraps it around a drum filled with soy- and rice-bran-based ink, and pushes ink through the stencil perforations onto paper at remarkable speed. Each color requires a separate pass through the machine with a different ink drum, which means every layer introduces tiny registration shifts, grain variations, and ink density inconsistencies that give Risograph prints their unmistakable handmade warmth. What began as utilitarian office equipment was embraced by artists, zine makers, and independent publishers in the 2000s and 2010s as a medium that delivers the charm of screen printing without the setup complexity.

The Risograph aesthetic is defined by its beautiful imperfections. The soy-based inks are semi-transparent, meaning overlapping color layers produce unexpected secondary hues through physical color mixing. Halftone grain patterns -- either randomized diffusion dither (Grain Touch) or classic dot screens -- give images a tactile, photographic quality. Slight misregistration between color layers, sometimes shifting up to 3mm in any direction, creates a layered depth and lively energy that feels distinctly analog. The limited spot-color palette forces designers to think in terms of color separation and overprint, producing work that is graphic, bold, and refreshingly constrained. Paper stock plays a crucial role too; uncoated, recycled, and textured papers absorb the ink differently, adding further organic variation.

Translating the Risograph aesthetic to the web means recreating these analog artifacts digitally: simulated halftone grain through SVG filters and CSS noise textures, deliberate color-layer offsets using pseudo-elements or CSS transforms, limited spot-color palettes with mix-blend-mode overlaps, and rough paper-like background textures. The result is a web experience that feels warm, handcrafted, and distinctly non-corporate -- a deliberate contrast to the polished gradients and glass effects that dominate modern UI. Riso-inspired web design thrives in portfolios, independent publications, cultural event sites, music platforms, and any project that wants to communicate creative authenticity and print-culture credibility.

---

## Visual Characteristics

### Core Design Traits

- **Limited spot-color palette** -- designs use 1-4 ink colors maximum, forcing bold chromatic decisions and graphic clarity
- **Semi-transparent ink overlaps** -- where two color layers intersect, a third mixed hue emerges through overprinting, creating depth without additional inks
- **Visible halftone grain** -- images and tonal areas are rendered as diffusion dither or dot-screen halftone patterns, giving everything a tactile photographic texture
- **Slight misregistration** -- color layers are intentionally offset by 1-3 pixels, simulating the physical drift of multi-pass printing
- **Soy-based ink texture** -- colors have a matte, slightly chalky quality with uneven ink density rather than smooth digital fills
- **Uncoated paper feel** -- backgrounds emulate the warm, absorbent quality of recycled or uncoated paper stock
- **Flat graphic compositions** -- imagery is reduced to bold shapes and silhouettes rather than photographic detail
- **Overprint color mixing** -- multiply blend mode is the defining visual operation, where layers interact rather than occlude
- **Hand-drawn and imperfect elements** -- wobbly lines, rough edges, and organic shapes reinforce the analog production feel
- **High contrast within simplicity** -- despite limited colors, compositions achieve strong visual impact through bold shapes and tonal range
- **Zine-culture layout sensibility** -- layouts reference DIY publication design with collage elements, torn edges, and asymmetric placement
- **Fluorescent accent colors** -- Risograph's fluorescent pink, orange, and green inks provide eye-catching vibrance unavailable in standard CMYK

### Design Principles

- Embrace imperfection as a design feature; misalignment and grain are not errors but signatures of the medium
- Work within constraints; a limited color palette produces more cohesive and inventive work than unlimited choice
- Layer transparently; every color interaction should feel like physical overprinting rather than digital stacking
- Prioritize graphic boldness; reduce imagery to essential shapes that read clearly through halftone grain
- Let the paper (or background texture) participate in the design as an active element, not just a neutral surface
- Use halftone and grain textures to create tonal variation without introducing new colors
- Design for color separation; think of each hue as an independent layer that overlaps with others
- Balance the rough analog feel with intentional composition; chaos should be controlled, not random

---

## Color Palette

Risograph inks are soy- and rice-bran-based, semi-transparent, and available in a specific set of spot colors. Unlike CMYK printing, each color is a distinct ink loaded into its own drum. The colors below represent the most popular and commonly stocked Risograph inks, drawn from the official Riso color catalog. In web design, these are used as a constrained palette -- typically picking 2-4 colors per project and using mix-blend-mode: multiply to simulate overprint interactions.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Bright Red** | `#F15060` | Primary accent, headlines, call-to-action elements |
| **Blue** | `#0078BF` | Primary cool tone, body accents, links |
| **Yellow** | `#FFE800` | Warm highlight, secondary accent, background overlays |
| **Fluorescent Pink** | `#FF48B0` | Eye-catching accent, featured elements, artistic emphasis |
| **Fluorescent Orange** | `#FF7477` | Warm vibrant accent, hover states, decorative overlays |
| **Teal** | `#00838A` | Cool secondary, navigational elements, subtle accents |
| **Purple** | `#765BA7` | Creative accent, headings, artistic overlays |
| **Orange** | `#FF6C2F` | Warm mid-tone, buttons, alert elements |
| **Hunter Green** | `#407060` | Earthy accent, nature themes, muted backgrounds |
| **Cornflower** | `#62A8E5` | Soft cool tone, backgrounds, secondary information |
| **Flat Gold** | `#BB8B41` | Warm neutral, vintage feel, tertiary accents |
| **Midnight** | `#435060` | Near-black alternative, text, dark backgrounds |
| **Black** | `#000000` | Text, outlines, primary structural elements |
| **Light Gray** | `#88898A` | Muted text, subtle borders, disabled states |
| **Bisque** | `#F2CDCF` | Soft warm background, paper-toned surfaces |

### CSS Custom Properties

```css
:root {
  /* Primary Riso inks */
  --riso-bright-red: #f15060;
  --riso-blue: #0078bf;
  --riso-yellow: #ffe800;
  --riso-black: #000000;

  /* Fluorescents */
  --riso-fluo-pink: #ff48b0;
  --riso-fluo-orange: #ff7477;
  --riso-fluo-green: #44d62c;

  /* Secondary inks */
  --riso-teal: #00838a;
  --riso-purple: #765ba7;
  --riso-orange: #ff6c2f;
  --riso-hunter-green: #407060;
  --riso-cornflower: #62a8e5;

  /* Neutral inks */
  --riso-midnight: #435060;
  --riso-flat-gold: #bb8b41;
  --riso-light-gray: #88898a;
  --riso-bisque: #f2cdcf;

  /* Paper & background tones */
  --riso-paper: #f5f0e8;
  --riso-paper-warm: #f0e6d3;
  --riso-paper-cool: #eef1ed;
  --riso-paper-cream: #faf6ee;

  /* Semantic tokens */
  --riso-bg-primary: var(--riso-paper);
  --riso-bg-dark: #2c2c2c;
  --riso-text-primary: #2a2a2a;
  --riso-text-secondary: #555555;
  --riso-text-inverse: var(--riso-paper);

  /* Overprint simulation colors (multiply-mixed approximations) */
  --riso-red-blue-mix: #6a3060;
  --riso-red-yellow-mix: #e87830;
  --riso-blue-yellow-mix: #3a8855;
}
```

---

## Typography

Risograph typography draws from two traditions: the hand-lettered, DIY spirit of zine culture and the bold graphic punch of screen-printed posters. Typefaces should feel slightly imperfect, characterful, and warm. Geometric sans-serifs with personality work well for headings, while humanist or slightly irregular body fonts reinforce the handmade quality. Monospaced and slab-serif faces add a utilitarian print-shop feel. Avoid overly refined or corporate typefaces -- the Riso aesthetic demands type that feels like it was chosen by an artist, not a brand guidelines committee.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Space Grotesk** | 400, 500, 700 | Headings, display text | [fonts.google.com/specimen/Space+Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| **Space Mono** | 400, 700 | Code, labels, captions | [fonts.google.com/specimen/Space+Mono](https://fonts.google.com/specimen/Space+Mono) |
| **Work Sans** | 400, 500, 600, 700 | Body text, UI elements | [fonts.google.com/specimen/Work+Sans](https://fonts.google.com/specimen/Work+Sans) |
| **Outfit** | 400, 600, 700, 800 | Bold headings, display | [fonts.google.com/specimen/Outfit](https://fonts.google.com/specimen/Outfit) |
| **DM Sans** | 400, 500, 700 | Clean body text | [fonts.google.com/specimen/DM+Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Karla** | 400, 500, 700 | Friendly body and UI text | [fonts.google.com/specimen/Karla](https://fonts.google.com/specimen/Karla) |
| **IBM Plex Mono** | 400, 500, 700 | Monospaced labels, captions | [fonts.google.com/specimen/IBM+Plex+Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| **Syne** | 400, 500, 700, 800 | Expressive headings | [fonts.google.com/specimen/Syne](https://fonts.google.com/specimen/Syne) |
| **Schibsted Grotesk** | 400, 500, 700 | Modern body text | [fonts.google.com/specimen/Schibsted+Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) |
| **Inconsolata** | 400, 700 | Monospaced alternative | [fonts.google.com/specimen/Inconsolata](https://fonts.google.com/specimen/Inconsolata) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| **Space Grotesk** (700) | **Work Sans** (400) | Clean graphic poster feel |
| **Syne** (800) | **Karla** (400) | Expressive and approachable |
| **Outfit** (800) | **DM Sans** (400) | Bold modern riso-zine |
| **Space Grotesk** (700) | **Space Mono** (400) | Unified print-shop aesthetic |
| **Syne** (700) | **IBM Plex Mono** (400) | Art-school editorial |
| **Outfit** (700) | **Schibsted Grotesk** (400) | Contemporary with character |

### CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  color: var(--riso-text-primary);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Display / Hero text */
.riso-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.0;
}

/* Body text */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--riso-text-secondary);
}

/* Monospaced labels and captions */
.riso-mono {
  font-family: 'Space Mono', 'Courier New', monospace;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* Caption / Meta text */
.riso-caption {
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--riso-light-gray);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

---

## Layout Principles

- **Asymmetric collage-style compositions** -- elements are placed with deliberate off-center positioning, referencing zine and poster design rather than rigid web grids
- **Generous white (or paper-toned) space** -- the paper background is an active design element; do not fill every pixel with content
- **Overlapping color layers** -- visual elements overlap with multiply blend modes to simulate overprint, creating depth through transparency
- **Rough grid with intentional breakouts** -- use a loose grid (8-12 columns) but allow elements to break the grid occasionally for visual energy
- **Visible texture everywhere** -- backgrounds, cards, and sections should carry subtle grain or paper texture; no surface should feel perfectly smooth
- **Color blocks as section dividers** -- instead of subtle lines, use full-width or offset color bands to separate content zones
- **Mixed media feel** -- combine illustration, bold typography, and geometric shapes in a single layout as if assembling a printed collage
- **Stacked layer depth** -- create visual depth not through shadows but through offset colored layers and slight transform shifts
- **Compact content widths** -- max-width around 1000-1100px keeps the intimate, print-publication scale
- **Responsive simplification** -- on mobile, reduce overlapping layers to sequential stacking while maintaining grain textures and color personality
- **Poster-section rhythm** -- each scroll section should feel like a standalone poster or zine page with its own color story
- **Registration-mark details** -- decorative crop marks, color targets, and printer's marks add authentic print-culture flavor to margins and corners

---

## CSS / Design Techniques

### Grain Texture Overlay

The hallmark of the Risograph aesthetic is visible grain. This SVG filter creates a subtle noise texture that can be applied as an overlay to any element, simulating the diffusion dither pattern of actual Riso prints.

```css
/* SVG filter defined inline or in the HTML */
/*
<svg style="position:absolute;width:0;height:0;">
  <filter id="riso-grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feBlend in="SourceGraphic" mode="multiply"/>
  </filter>
</svg>
*/

.riso-grain-overlay {
  position: relative;
}

.riso-grain-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.3;
  z-index: 1;
}
```

### Misregistration Effect

Simulating the slight color-layer offset that occurs when paper feeds through a Risograph multiple times. Each pseudo-element represents a separate "ink pass" that is shifted by a few pixels.

```css
.riso-misregister {
  position: relative;
  color: var(--riso-bright-red);
}

.riso-misregister::before,
.riso-misregister::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.riso-misregister::before {
  color: var(--riso-blue);
  transform: translate(2px, -1px);
  mix-blend-mode: multiply;
  z-index: -1;
}

.riso-misregister::after {
  color: var(--riso-yellow);
  transform: translate(-1px, 2px);
  mix-blend-mode: multiply;
  z-index: -2;
}
```

### Riso Card Component

Cards in the Riso aesthetic avoid perfect shadows and rounded corners. Instead, they use offset colored layers, paper textures, and visible borders to create depth.

```css
.riso-card {
  background: var(--riso-paper);
  border: 2px solid var(--riso-text-primary);
  padding: 28px;
  position: relative;
  transition: transform 0.2s ease;
}

/* Offset colored layer behind the card */
.riso-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--riso-bright-red);
  transform: translate(6px, 6px);
  z-index: -1;
  border: 2px solid var(--riso-text-primary);
}

.riso-card:hover {
  transform: translate(-2px, -2px);
}

.riso-card:hover::before {
  transform: translate(8px, 8px);
}

.riso-card__label {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--riso-bright-red);
  margin-bottom: 8px;
}

.riso-card__title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--riso-text-primary);
}

.riso-card__body {
  font-size: 0.95rem;
  color: var(--riso-text-secondary);
  line-height: 1.6;
}

.riso-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}
```

### Riso Button

Buttons use flat spot colors with offset layers or bold outlines. Hover states shift the registration or reveal the underlying color layer.

```css
.riso-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--riso-bright-red);
  color: var(--riso-paper);
  border: 2px solid var(--riso-text-primary);
  padding: 12px 32px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.riso-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--riso-blue);
  border: 2px solid var(--riso-text-primary);
  transform: translate(4px, 4px);
  z-index: -1;
  transition: transform 0.15s ease;
}

.riso-button:hover {
  transform: translate(-2px, -2px);
}

.riso-button:hover::before {
  transform: translate(6px, 6px);
}

/* Outline variant */
.riso-button--outline {
  background: transparent;
  color: var(--riso-text-primary);
}

.riso-button--outline:hover {
  background: var(--riso-yellow);
}

/* Color variants */
.riso-button--blue {
  background: var(--riso-blue);
}

.riso-button--blue::before {
  background: var(--riso-bright-red);
}

.riso-button--teal {
  background: var(--riso-teal);
}

.riso-button--teal::before {
  background: var(--riso-purple);
}
```

### Riso Navigation

Navigation embraces the print-shop feel with monospaced type, visible borders, and spot-color accents.

```css
.riso-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 32px;
  border-bottom: 2px solid var(--riso-text-primary);
  background: var(--riso-paper);
}

.riso-nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--riso-text-primary);
  text-decoration: none;
}

.riso-nav__logo-mark {
  width: 24px;
  height: 24px;
  background: var(--riso-bright-red);
  border-radius: 50%;
  position: relative;
}

.riso-nav__logo-mark::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background: var(--riso-blue);
  border-radius: 50%;
  top: -3px;
  left: 4px;
  mix-blend-mode: multiply;
  z-index: -1;
}

.riso-nav__links {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.riso-nav__links a {
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--riso-text-primary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
}

.riso-nav__links a:hover {
  color: var(--riso-bright-red);
}
```

### Riso Hero Section

The hero uses overlapping color blocks, misregistered type, and grain texture to immediately establish the analog print aesthetic.

```css
.riso-hero {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  overflow: hidden;
}

.riso-hero__content {
  position: relative;
  z-index: 2;
}

.riso-hero__content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.0;
  margin-bottom: 1.25rem;
  position: relative;
}

/* Misregistered color shadow on hero heading */
.riso-hero__content h1::before {
  content: attr(data-text);
  position: absolute;
  top: 3px;
  left: -3px;
  color: var(--riso-blue);
  z-index: -1;
  mix-blend-mode: multiply;
  opacity: 0.6;
}

.riso-hero__content p {
  font-size: 1.05rem;
  color: var(--riso-text-secondary);
  max-width: 420px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.riso-hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Decorative overprinted circles */
.riso-hero__visual .circle-red {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--riso-bright-red);
  position: absolute;
  right: 20px;
  top: 0;
}

.riso-hero__visual .circle-blue {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--riso-blue);
  position: absolute;
  right: 80px;
  top: 40px;
  mix-blend-mode: multiply;
}

@media (max-width: 768px) {
  .riso-hero {
    grid-template-columns: 1fr;
    padding: 60px 24px;
    text-align: center;
  }

  .riso-hero__visual {
    height: 200px;
  }
}
```

### Overprint Color Block

A versatile section component that uses multiply blending to create the signature Riso overprint effect with overlapping color rectangles.

```css
.riso-overprint-block {
  position: relative;
  padding: 60px 32px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
}

.riso-overprint-block__layer {
  position: absolute;
  mix-blend-mode: multiply;
}

.riso-overprint-block__layer--red {
  background: var(--riso-bright-red);
  width: 60%; height: 80%; top: 10%; left: 5%; opacity: 0.85;
}

.riso-overprint-block__layer--blue {
  background: var(--riso-blue);
  width: 55%; height: 75%; top: 15%; right: 5%; opacity: 0.85;
}

.riso-overprint-block__layer--yellow {
  background: var(--riso-yellow);
  width: 40%; height: 50%; bottom: 10%; left: 30%; opacity: 0.7;
}

.riso-overprint-block__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--riso-paper);
  max-width: 600px;
}
```

### Halftone Dot Pattern

CSS-only halftone dot effect for backgrounds and image overlays, emulating the classic screen-covered gradient mode of Risograph printers.

```css
.riso-halftone {
  position: relative;
  overflow: hidden;
}

.riso-halftone::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--riso-text-primary) 1px, transparent 1px);
  background-size: 6px 6px;
  mix-blend-mode: multiply;
  opacity: 0.15;
  pointer-events: none;
  z-index: 1;
}

.riso-halftone--large::after {
  background-image: radial-gradient(circle, var(--riso-text-primary) 2px, transparent 2px);
  background-size: 10px 10px;
  opacity: 0.12;
}
```

---

## Design Do's and Don'ts

### Do's

- **Use mix-blend-mode: multiply** on overlapping color elements to simulate authentic overprint color mixing
- **Limit your palette to 2-4 spot colors** per project, chosen from actual Risograph ink colors for authenticity
- **Add grain and noise textures** to backgrounds, images, and color blocks to maintain the tactile print feel
- **Embrace slight misalignment** in layered elements; offset pseudo-elements by 1-4px for registration drift
- **Use uncoated paper-toned backgrounds** (warm creams, off-whites) instead of pure #FFFFFF
- **Include print-culture details** like crop marks, color registration targets, and ink swatch labels as decorative elements
- **Keep imagery bold and graphic** with high-contrast silhouettes, duotone treatments, and halftone textures
- **Let colors overlap and interact** rather than placing them in isolated non-touching zones

### Don'ts

- **Avoid drop shadows and box-shadows** for depth; use offset colored layers instead
- **Do not use smooth gradients** -- tonal transitions should be achieved through halftone patterns or grain, not CSS linear-gradient
- **Avoid more than 4 colors** in a single composition; the constraint is essential to the aesthetic
- **Do not use pure white backgrounds** -- always tint toward warm paper tones or apply a subtle texture
- **Avoid glossy or glass effects** like glassmorphism, metallic sheen, or reflections that contradict the matte ink feel
- **Do not over-refine** typography or layout; the aesthetic demands visible character, not pixel-perfect corporate polish
- **Avoid photographic imagery without treatment** -- photos should be processed through duotone, halftone, or high-contrast filters before use
- **Do not use border-radius on major containers** -- cards and sections should have sharp or slightly rough edges, not rounded corners

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| [Duotone](Duotone.md) | Shares the limited-color approach; duotone is the digital cousin of Riso's two-color printing |
| [90s Grunge](90s_Grunge.md) | Both embrace imperfection and analog texture; grunge is more distressed while Riso is more controlled |
| [DIY Punk](DIY_Punk.md) | Zine culture origins overlap heavily; DIY Punk is more chaotic, Riso is more aesthetically deliberate |
| [Pop Art](Pop_Art.md) | Shares bold flat color and halftone patterns, though Pop Art references mass media while Riso references independent print culture |
| [Flat Design](Flat_Design.md) | Both use flat color fills without gradients, but Riso adds grain, texture, and analog imperfection |
| [Neubrutalism](Neubrutalism.md) | Shares raw graphic boldness and visible borders; Neubrutalism is more digital-native while Riso references print |
| [Constructivism](Constructivism.md) | Both use bold graphic shapes and limited color; Constructivism is more political and geometric |
| [Corporate Memphis](Corporate_Memphis.md) | Both use flat spot-color illustration, but Corporate Memphis is slick and corporate where Riso is independent and textured |
| [Polish Poster School](Polish_Poster_School.md) | Shares the poster-art sensibility and bold graphic approach with hand-crafted printing techniques |
| [Dadaism](Dadaism.md) | Shares collage sensibility and anti-corporate ethos; Dada is more confrontational, Riso more warmly handmade |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Risograph -- Print-Inspired Design</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* -- Custom Properties -- */
    :root {
      --riso-bright-red: #f15060;
      --riso-blue: #0078bf;
      --riso-yellow: #ffe800;
      --riso-black: #000000;
      --riso-fluo-pink: #ff48b0;
      --riso-fluo-orange: #ff7477;
      --riso-teal: #00838a;
      --riso-purple: #765ba7;
      --riso-orange: #ff6c2f;
      --riso-cornflower: #62a8e5;
      --riso-midnight: #435060;
      --riso-flat-gold: #bb8b41;
      --riso-light-gray: #88898a;
      --riso-bisque: #f2cdcf;
      --riso-paper: #f5f0e8;
      --riso-paper-warm: #f0e6d3;
      --riso-text-primary: #2a2a2a;
      --riso-text-secondary: #555555;
      --riso-text-inverse: #f5f0e8;
    }

    /* -- Reset & Base -- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--riso-paper);
      color: var(--riso-text-primary);
      font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* -- Grain Texture Overlay -- */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: multiply;
      opacity: 0.4;
      z-index: 9999;
    }

    /* -- Container -- */
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* -- Navigation -- */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px 32px;
      border-bottom: 2px solid var(--riso-text-primary);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--riso-text-primary);
    }

    .logo-mark {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--riso-bright-red);
      position: relative;
      flex-shrink: 0;
    }

    .logo-mark::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--riso-blue);
      top: -4px;
      left: 5px;
      mix-blend-mode: multiply;
      z-index: -1;
    }

    nav ul {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--riso-text-primary);
      transition: color 0.2s;
    }

    nav ul a:hover {
      color: var(--riso-bright-red);
    }

    /* -- Hero Section -- */
    .hero {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 40px;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      padding: 80px 32px;
      position: relative;
    }

    .hero-content h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      line-height: 1.0;
      margin-bottom: 1.25rem;
      position: relative;
    }

    /* Misregistered shadow layer */
    .hero-content h1::after {
      content: 'Layer by Layer';
      position: absolute;
      top: 3px;
      left: -3px;
      color: var(--riso-blue);
      z-index: -1;
      mix-blend-mode: multiply;
      opacity: 0.5;
    }

    .hero-content h1 .accent {
      color: var(--riso-bright-red);
    }

    .hero-content .subtitle {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--riso-bright-red);
      margin-bottom: 12px;
      display: block;
    }

    .hero-content p {
      font-size: 1.05rem;
      color: var(--riso-text-secondary);
      max-width: 420px;
      margin-bottom: 2rem;
    }

    .hero-visual {
      position: relative;
      height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-visual .shape {
      position: absolute;
      border-radius: 50%;
    }

    .hero-visual .shape--red {
      width: 240px;
      height: 240px;
      background: var(--riso-bright-red);
      top: 20px;
      right: 10px;
      opacity: 0.9;
    }

    .hero-visual .shape--blue {
      width: 240px;
      height: 240px;
      background: var(--riso-blue);
      top: 60px;
      right: 70px;
      mix-blend-mode: multiply;
      opacity: 0.9;
    }

    .hero-visual .shape--yellow {
      width: 180px;
      height: 180px;
      background: var(--riso-yellow);
      bottom: 20px;
      right: 30px;
      mix-blend-mode: multiply;
      opacity: 0.8;
    }

    /* Halftone dot overlay on hero visual */
    .hero-visual::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle, var(--riso-text-primary) 1px, transparent 1px);
      background-size: 6px 6px;
      mix-blend-mode: multiply;
      opacity: 0.08;
      pointer-events: none;
    }

    /* -- Buttons -- */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: var(--riso-bright-red);
      color: var(--riso-paper);
      border: 2px solid var(--riso-text-primary);
      padding: 12px 32px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform 0.15s ease;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--riso-blue);
      border: 2px solid var(--riso-text-primary);
      transform: translate(4px, 4px);
      z-index: -1;
      transition: transform 0.15s ease;
    }

    .btn:hover {
      transform: translate(-2px, -2px);
    }

    .btn:hover::before {
      transform: translate(6px, 6px);
    }

    .btn--outline {
      background: transparent;
      color: var(--riso-text-primary);
    }

    .btn--outline::before {
      background: var(--riso-yellow);
    }

    .btn--outline:hover {
      background: var(--riso-yellow);
    }

    /* -- About Section -- */
    .about {
      max-width: 1100px;
      margin: 0 auto;
      padding: 80px 32px;
      border-top: 2px solid var(--riso-text-primary);
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: start;
    }

    .about-label { font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--riso-bright-red); margin-bottom: 16px; }
    .about h2 { font-size: 2rem; margin-bottom: 1rem; }
    .about p { color: var(--riso-text-secondary); margin-bottom: 1rem; line-height: 1.7; }
    .about p:last-child { margin-bottom: 0; }

    /* -- Feature Cards -- */
    .features {
      padding: 80px 0;
      border-top: 2px solid var(--riso-text-primary);
      position: relative;
    }

    .features-header {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px 48px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .features-header h2 { font-size: 2.25rem; }
    .features-header .count { font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--riso-light-gray); }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 36px;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    .card {
      background: var(--riso-paper);
      border: 2px solid var(--riso-text-primary);
      padding: 28px;
      position: relative;
      transition: transform 0.2s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--riso-bright-red);
      transform: translate(5px, 5px);
      z-index: -1;
      border: 2px solid var(--riso-text-primary);
      transition: transform 0.2s ease;
    }

    .card:nth-child(2)::before {
      background: var(--riso-blue);
    }

    .card:nth-child(3)::before {
      background: var(--riso-teal);
    }

    .card:hover {
      transform: translate(-2px, -2px);
    }

    .card:hover::before {
      transform: translate(7px, 7px);
    }

    .card-number { font-family: 'Space Grotesk', sans-serif; font-size: 3rem; font-weight: 700; color: var(--riso-bright-red); line-height: 1; margin-bottom: 16px; opacity: 0.3; }
    .card:nth-child(2) .card-number { color: var(--riso-blue); }
    .card:nth-child(3) .card-number { color: var(--riso-teal); }
    .card h3 { font-size: 1.15rem; margin-bottom: 10px; }
    .card p { font-size: 0.9rem; color: var(--riso-text-secondary); line-height: 1.6; }

    /* -- Color Overprint Section -- */
    .overprint-section {
      position: relative;
      padding: 100px 32px;
      overflow: hidden;
      isolation: isolate;
      border-top: 2px solid var(--riso-text-primary);
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .overprint-section .layer {
      position: absolute;
      mix-blend-mode: multiply;
    }

    .overprint-section .layer--1 {
      background: var(--riso-bright-red);
      width: 55%;
      height: 85%;
      top: 8%;
      left: 2%;
      opacity: 0.85;
    }

    .overprint-section .layer--2 {
      background: var(--riso-blue);
      width: 50%;
      height: 80%;
      top: 12%;
      right: 2%;
      opacity: 0.85;
    }

    .overprint-section .layer--3 {
      background: var(--riso-yellow);
      width: 35%;
      height: 45%;
      bottom: 8%;
      left: 32%;
      opacity: 0.75;
    }

    .overprint-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 550px;
    }

    .overprint-content .label { font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--riso-paper); margin-bottom: 12px; display: block; }
    .overprint-content h2 { color: var(--riso-paper); font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
    .overprint-content p { color: var(--riso-paper); font-size: 1rem; margin-bottom: 2rem; opacity: 0.9; }
    .overprint-content .btn { background: var(--riso-paper); color: var(--riso-text-primary); }
    .overprint-content .btn::before { background: var(--riso-midnight); }

    /* -- Ink Swatches -- */
    .swatches {
      padding: 80px 0;
      border-top: 2px solid var(--riso-text-primary);
    }

    .swatches-header {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px 48px;
    }

    .swatches-header h2 { font-size: 2rem; margin-bottom: 8px; }
    .swatches-header p { font-size: 0.95rem; color: var(--riso-text-secondary); max-width: 500px; }

    .swatch-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 20px;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    .swatch {
      border: 2px solid var(--riso-text-primary);
      overflow: hidden;
    }

    .swatch-color { height: 80px; position: relative; }
    .swatch-color::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
      background-size: 4px 4px;
    }
    .swatch-info { padding: 10px 12px; background: var(--riso-paper); }
    .swatch-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 0.75rem; margin-bottom: 2px; }
    .swatch-hex { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: var(--riso-light-gray); text-transform: uppercase; }

    /* -- Pull Quote -- */
    .pullquote {
      max-width: 1100px;
      margin: 0 auto;
      padding: 80px 32px;
      border-top: 2px solid var(--riso-text-primary);
      text-align: center;
    }

    .pullquote blockquote { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; line-height: 1.3; max-width: 700px; margin: 0 auto 1.5rem; position: relative; color: var(--riso-text-primary); }
    .pullquote blockquote::before { content: '\201C'; position: absolute; top: -20px; left: -30px; font-size: 5rem; color: var(--riso-bright-red); opacity: 0.3; font-family: 'Space Grotesk', sans-serif; line-height: 1; }
    .pullquote cite { font-family: 'Space Mono', monospace; font-size: 0.75rem; font-style: normal; text-transform: uppercase; letter-spacing: 0.06em; color: var(--riso-light-gray); }

    /* -- Footer -- */
    footer {
      border-top: 2px solid var(--riso-text-primary);
      background: var(--riso-text-primary);
      color: var(--riso-paper);
      padding: 48px 32px;
    }

    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 40px;
    }

    .footer-brand { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.1rem; margin-bottom: 12px; }
    .footer-tagline { font-size: 0.85rem; opacity: 0.6; line-height: 1.5; }
    .footer-col h4 { font-family: 'Space Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; opacity: 0.5; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 8px; }
    .footer-col ul a { font-size: 0.85rem; color: var(--riso-paper); opacity: 0.7; transition: opacity 0.2s; }
    .footer-col ul a:hover { opacity: 1; color: var(--riso-bright-red); }
    .footer-bottom { max-width: 1100px; margin: 40px auto 0; padding-top: 24px; border-top: 1px solid rgba(245, 240, 232, 0.15); display: flex; justify-content: space-between; align-items: center; font-family: 'Space Mono', monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.4; }

    /* -- Registration Marks -- */
    .reg-mark {
      position: fixed;
      width: 20px;
      height: 20px;
      opacity: 0.15;
      pointer-events: none;
      z-index: 9998;
    }

    .reg-mark::before, .reg-mark::after { content: ''; position: absolute; background: var(--riso-text-primary); }
    .reg-mark::before { width: 20px; height: 1px; top: 50%; left: 0; }
    .reg-mark::after { width: 1px; height: 20px; left: 50%; top: 0; }
    .reg-mark--tl { top: 16px; left: 16px; }
    .reg-mark--tr { top: 16px; right: 16px; }
    .reg-mark--bl { bottom: 16px; left: 16px; }
    .reg-mark--br { bottom: 16px; right: 16px; }

    /* -- Responsive -- */
    @media (max-width: 768px) {
      .hero { grid-template-columns: 1fr; padding: 60px 24px; text-align: center; }
      .hero-content p { margin-left: auto; margin-right: auto; }
      .hero-visual { height: 220px; }
      .hero-visual .shape--red, .hero-visual .shape--blue { width: 160px; height: 160px; }
      .hero-visual .shape--yellow { width: 120px; height: 120px; }
      .about { grid-template-columns: 1fr; padding: 60px 24px; gap: 24px; }
      nav { padding: 16px 24px; }
      nav ul { gap: 14px; }
      .features-header { padding: 0 24px 36px; flex-direction: column; align-items: flex-start; gap: 8px; }
      .card-grid { padding: 0 24px; }
      .overprint-section { padding: 80px 24px; }
      .swatch-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); padding: 0 24px; }
      .swatches-header { padding: 0 24px 36px; }
      .pullquote { padding: 60px 24px; }
      .footer-inner { grid-template-columns: 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
    }
  </style>
</head>
<body>

  <!-- Registration marks (decorative print-culture detail) -->
  <div class="reg-mark reg-mark--tl"></div>
  <div class="reg-mark reg-mark--tr"></div>
  <div class="reg-mark reg-mark--bl"></div>
  <div class="reg-mark reg-mark--br"></div>

  <!-- Navigation -->
  <nav>
    <a href="#" class="logo">
      <div class="logo-mark"></div>
      Risoprint Studio
    </a>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#colors">Colors</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <span class="subtitle">Soy-based ink on paper</span>
      <h1><span class="accent">Layer</span> by Layer</h1>
      <p>We create prints with warmth, grain, and the beautiful imperfections that only Risograph can deliver. Every pass through the drum adds character.</p>
      <a href="#work" class="btn">View Our Prints</a>
    </div>
    <div class="hero-visual">
      <div class="shape shape--red"></div>
      <div class="shape shape--blue"></div>
      <div class="shape shape--yellow"></div>
    </div>
  </section>

  <!-- About -->
  <section class="about" id="about">
    <div>
      <div class="about-label">About the Process</div>
      <h2>Analog Warmth in a Digital World</h2>
    </div>
    <div>
      <p>Risograph printing uses soy-based inks on a rotating drum, one color at a time. Each layer brings slight shifts in registration, visible grain, and the kind of happy accidents that make every print unique.</p>
      <p>Our studio stocks 18 ink colors -- from Bright Red and Blue to Fluorescent Pink and Flat Gold. We embrace the constraints of spot-color printing because limitation breeds creativity.</p>
    </div>
  </section>

  <!-- Features -->
  <section class="features" id="work">
    <div class="features-header">
      <h2>What Makes Riso Special</h2>
      <span class="count">03 Principles</span>
    </div>
    <div class="card-grid">
      <div class="card">
        <div class="card-number">01</div>
        <h3>Overprint Magic</h3>
        <p>Semi-transparent inks overlap to create unexpected secondary colors. Two inks become three, four, or more through the physics of light and pigment.</p>
      </div>
      <div class="card">
        <div class="card-number">02</div>
        <h3>Beautiful Grain</h3>
        <p>The diffusion dither and halftone patterns give every image a tactile, photographic texture that feels warm and handmade rather than cold and digital.</p>
      </div>
      <div class="card">
        <div class="card-number">03</div>
        <h3>Happy Misalignment</h3>
        <p>Each color pass shifts slightly -- up to 3mm in any direction. These registration drifts add energy and life that perfect alignment could never achieve.</p>
      </div>
    </div>
  </section>

  <!-- Overprint Color Section -->
  <section class="overprint-section">
    <div class="layer layer--1"></div>
    <div class="layer layer--2"></div>
    <div class="layer layer--3"></div>
    <div class="overprint-content">
      <span class="label">Color Interaction</span>
      <h2>Where Colors Collide</h2>
      <p>The multiply blend is the soul of Risograph. When red meets blue, you get deep purple. When yellow crosses blue, green emerges. Every overlap is a discovery.</p>
      <a href="#colors" class="btn">Explore Palette</a>
    </div>
  </section>

  <!-- Ink Swatch Gallery -->
  <section class="swatches" id="colors">
    <div class="swatches-header">
      <h2>Ink Library</h2>
      <p>A selection from the Risograph spot-color catalog. Each ink is soy-based, semi-transparent, and loaded into its own drum.</p>
    </div>
    <div class="swatch-grid">
      <div class="swatch">
        <div class="swatch-color" style="background: #f15060;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Bright Red</div>
          <div class="swatch-hex">#f15060</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #0078bf;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Blue</div>
          <div class="swatch-hex">#0078bf</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #ffe800;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Yellow</div>
          <div class="swatch-hex">#ffe800</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #ff48b0;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Fluo Pink</div>
          <div class="swatch-hex">#ff48b0</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #00838a;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Teal</div>
          <div class="swatch-hex">#00838a</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #765ba7;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Purple</div>
          <div class="swatch-hex">#765ba7</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #ff6c2f;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Orange</div>
          <div class="swatch-hex">#ff6c2f</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #407060;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Hunter Green</div>
          <div class="swatch-hex">#407060</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #bb8b41;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Flat Gold</div>
          <div class="swatch-hex">#bb8b41</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background: #435060;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Midnight</div>
          <div class="swatch-hex">#435060</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pull Quote -->
  <section class="pullquote">
    <blockquote>
      The beauty of Risograph is that every print is an original. The machine does not make copies -- it makes variations.
    </blockquote>
    <cite>-- The Riso Printing Ethos</cite>
  </section>

  <!-- Footer -->
  <footer id="contact">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">Risoprint Studio</div>
        <div class="footer-tagline">Soy-based inks. Grain textures. Happy accidents. We print things that feel alive.</div>
      </div>
      <div class="footer-col">
        <h4>Studio</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Ink Colors</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Are.na</a></li>
          <li><a href="#">Email Us</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Risograph Design Template</span>
      <span>Printed with love and soy ink</span>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **SVG noise filters perform better than image-based grain** -- use inline SVG `<feTurbulence>` for grain overlays, as they scale infinitely and do not require additional HTTP requests
- **Use `mix-blend-mode: multiply` on a dedicated layer** rather than applying it to content elements directly; this prevents text legibility issues and allows you to control opacity independently
- **Apply `isolation: isolate` on parent containers** when using blend modes to prevent color mixing from bleeding into unrelated sibling elements
- **Test overprint color combinations** by placing actual Riso ink hex values in overlapping divs with multiply blending to preview the resulting mixed hues before committing to a palette
- **Keep halftone dot patterns small (4-8px background-size)** to maintain the subtle grain feel; larger dots become distracting and lose the Riso character at screen viewing distances
- **Use `pointer-events: none` on all texture overlay pseudo-elements** to ensure they do not interfere with user interactions like clicks, text selection, or hover states
- **Paper-tone backgrounds should be warm** (`#f5f0e8` or similar) rather than pure white; this single change does more to establish the Riso feel than any other technique
- **Misregistration offsets should be subtle (1-4px)** -- larger shifts look intentionally broken rather than authentically analog; the effect should be noticed subconsciously, not obviously
