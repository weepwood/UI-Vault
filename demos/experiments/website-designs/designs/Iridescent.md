# Iridescent Design Reference

## Overview

Iridescent design is a contemporary digital aesthetic rooted in the optical phenomenon of iridescence -- the property of surfaces that appear to shift in color as the angle of observation changes. Drawn from the shimmering qualities of soap bubbles, oil slicks, abalone shells, butterfly wings, and holographic foil, this aesthetic translates prismatic light behavior into web and graphic design. The result is interfaces that feel alive, luminous, and perpetually in motion even when static, as layered gradients and metallic sheens create the illusion of rainbow refractions dancing across every surface.

At its core, Iridescent design leverages multi-hue gradients that traverse the full visible spectrum -- pinks bleeding into violets, teals shifting to golds, greens dissolving into magentas. Unlike simple two-color gradients, iridescent palettes demand three to seven color stops that flow in sequence, producing the characteristic prismatic band effect. These are frequently layered with semi-transparent overlays, blend modes such as `color-dodge` and `difference`, and subtle animations that shift background positions or rotate conic gradients. The effect simulates how real holographic materials catch light differently depending on the viewer's perspective.

The aesthetic gained particular momentum in the mid-to-late 2010s alongside the broader holographic and vaporwave trends, but it has matured into its own distinct visual language. Where vaporwave leans retro-nostalgic and glitchy, iridescent design tends toward polish, luxury, and futuristic elegance. It finds natural homes in beauty and cosmetics branding, music and entertainment platforms, fashion e-commerce, tech product launches, and portfolio sites seeking a premium, forward-thinking feel. The style also pairs well with glassmorphism -- frosted translucent layers that let iridescent backgrounds glow through.

Technically, modern CSS has made iridescent effects increasingly accessible. Conic gradients, OKLCH color spaces, `backdrop-filter`, `mix-blend-mode`, and `@property`-based animations allow designers to create convincing holographic surfaces without images or JavaScript. The perceptually uniform OKLCH color model is particularly valuable here, producing smoother and more natural-looking transitions between hues than traditional RGB or HSL. When deployed thoughtfully -- as accent elements, hero sections, or interactive hover states rather than blanket surface treatments -- iridescent effects add a captivating sense of dimension and wonder to digital interfaces.

---

## Visual Characteristics

### Core Design Traits

- **Prismatic multi-hue gradients** -- smooth, flowing transitions through five or more spectral colors that mimic rainbow refraction patterns
- **Color-shifting surfaces** -- elements that appear to change hue depending on cursor position, scroll depth, or animation state
- **Holographic foil textures** -- fine-grained, high-frequency rainbow patterns overlaid on surfaces to simulate stamped foil or diffraction gratings
- **Metallic sheens and highlights** -- bright specular reflections and glossy finishes that suggest polished or liquid-metal substrates
- **Pearlescent layering** -- soft, milky translucency with subtle color tints beneath, reminiscent of mother-of-pearl or opal
- **Conic and radial gradient compositions** -- gradients that radiate from a center point or sweep in arcs, creating more organic prismatic effects than linear-only approaches
- **Soft luminous glows** -- diffused colored light halos around elements, simulating light dispersing through a prism
- **Translucent glass overlays** -- frosted or semi-transparent panels that allow iridescent backgrounds to bleed through with a softened, dreamy quality
- **High-contrast dark bases** -- deep charcoal, midnight, or black backgrounds that maximize the luminous impact of spectral colors
- **Fluid, organic shapes** -- blob-like forms, soft curves, and flowing silhouettes that complement the liquid quality of color transitions
- **Micro-animation on interaction** -- hover states and scroll-triggered effects that shift gradient positions, rotate hues, or intensify metallic highlights

### Design Principles

- Treat iridescent effects as focal-point accents, not wallpaper -- selective application creates impact while overuse creates visual noise
- Build on dark or neutral bases so spectral colors have maximum contrast and luminosity
- Layer effects using blend modes (`color-dodge`, `overlay`, `difference`) to create depth and prismatic complexity
- Animate slowly and smoothly -- iridescence in nature is a gentle shift, not a strobe; keep transitions between 3 and 20 seconds per cycle
- Use the OKLCH color space for gradient stops to achieve perceptually uniform hue transitions without muddy midpoints
- Maintain text legibility by placing type on solid or semi-transparent backing panels rather than directly on busy iridescent surfaces
- Balance spectral richness with generous whitespace (or darkspace) so the eye has room to rest between shimmering elements
- Pair with clean, modern typography and minimal UI chrome to let the iridescent effects carry the visual identity

---

## Color Palette

### Iridescent Core Palette

The iridescent palette spans the full visible spectrum, anchored by cool-toned bases and punctuated by prismatic accent colors. Each swatch represents a key stop in the holographic gradient sequence, from cool violets through warm pinks and back to aquatic teals. The deep base tones provide the dark canvas against which spectral colors appear most luminous.

| Color Name | Hex | Role / Usage |
|------------|-----|-------------|
| **Void Black** | `#0A0A0F` | Deepest background, page base for maximum spectral contrast |
| **Obsidian** | `#141420` | Primary surface, card base before glass or foil overlay |
| **Deep Indigo** | `#1A1A3E` | Elevated surfaces, section backgrounds, nav bars |
| **Prism Violet** | `#7B2FBE` | Primary purple gradient stop, anchor hue for prismatic sweeps |
| **Holographic Pink** | `#E84FAD` | Warm gradient stop, CTA highlights, accent badges |
| **Laser Magenta** | `#FF3CAC` | High-energy accent, hover states, active indicators |
| **Refraction Rose** | `#F2A1C2` | Soft pink, pearlescent overlays, secondary accents |
| **Spectral Blue** | `#3A86FF` | Cool gradient stop, links, informational elements |
| **Opal Cyan** | `#00D4FF` | Teal-cyan gradient stop, interactive elements, highlights |
| **Prism Green** | `#08D9A0` | Green gradient stop, success states, positive indicators |
| **Foil Gold** | `#FFD700` | Warm metallic accent, premium indicators, warm gradient stop |
| **Pearl White** | `#F0EFF4` | Primary text on dark backgrounds, high-contrast labels |
| **Mist Lavender** | `#C4B5FD` | Secondary text, descriptions, muted headings |
| **Haze Silver** | `#9CA3AF` | Tertiary text, captions, disabled states |
| **Iridescent Peach** | `#FFCBA4` | Warm secondary, pearlescent highlights, soft CTA variant |

### CSS Custom Properties

```css
:root {
  /* Dark bases */
  --iri-void: #0a0a0f;
  --iri-obsidian: #141420;
  --iri-deep-indigo: #1a1a3e;

  /* Prismatic spectrum */
  --iri-violet: #7b2fbe;
  --iri-pink: #e84fad;
  --iri-magenta: #ff3cac;
  --iri-rose: #f2a1c2;
  --iri-blue: #3a86ff;
  --iri-cyan: #00d4ff;
  --iri-green: #08d9a0;
  --iri-gold: #ffd700;
  --iri-peach: #ffcba4;

  /* Text */
  --iri-text-primary: #f0eff4;
  --iri-text-secondary: #c4b5fd;
  --iri-text-muted: #9ca3af;

  /* Signature gradients */
  --iri-gradient-full: linear-gradient(
    135deg,
    #7b2fbe, #e84fad, #ff3cac, #3a86ff, #00d4ff, #08d9a0, #ffd700
  );
  --iri-gradient-cool: linear-gradient(135deg, #7b2fbe, #3a86ff, #00d4ff, #08d9a0);
  --iri-gradient-warm: linear-gradient(135deg, #ff3cac, #e84fad, #ffcba4, #ffd700);
  --iri-gradient-foil: conic-gradient(
    from 0deg,
    #7b2fbe, #3a86ff, #00d4ff, #08d9a0, #ffd700, #ff3cac, #e84fad, #7b2fbe
  );

  /* Glass / overlay */
  --iri-glass-bg: rgba(255, 255, 255, 0.04);
  --iri-glass-border: rgba(255, 255, 255, 0.08);
  --iri-glass-blur: 18px;

  /* Metallic sheen overlay */
  --iri-sheen: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.15) 45%,
    rgba(255, 255, 255, 0.05) 55%,
    transparent 60%
  );
}
```

---

## Typography

### Typeface Characteristics

Iridescent typography serves as a calm, legible counterpoint to the visual richness of prismatic backgrounds. Fonts should be:

- **Clean and geometric** -- modern sans-serifs that avoid decorative distractions and let spectral effects take center stage
- **Medium to light weight** -- thinner strokes breathe alongside shimmering surfaces; avoid heavy black weights that dominate
- **High x-height and open counters** -- essential for readability when text sits near or on top of multicolored gradient backgrounds
- **Variable-weight capable** -- variable fonts allow fine-tuning weight for different hierarchy levels without loading multiple files
- **Subtly futuristic** -- slightly rounded or geometric letterforms that match the forward-looking, polished mood of holographic design

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Space Grotesk** | Geometric, slightly quirky | Headlines, hero text -- futuristic yet approachable |
| **Inter** | Screen-optimized, versatile | Body text, UI labels, all-purpose readability |
| **Outfit** | Geometric, contemporary | Headlines, navigation, clean modern display |
| **Sora** | Geometric, modern, variable | Display headings, metrics, gradient-clipped text |
| **DM Sans** | Clean geometric, open | Body text, cards, descriptions |
| **Urbanist** | Tall, geometric, elegant | Headlines, premium-feel headers |
| **Figtree** | Geometric, friendly, open | Body text, approachable interfaces |
| **Manrope** | Semi-condensed, geometric | Headlines, UI elements, compact layouts |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Space Grotesk** (600) | **Inter** (400) | Futuristic display meets universal readability |
| **Outfit** (600) | **DM Sans** (400) | Contemporary elegance, clean throughout |
| **Sora** (700) | **Figtree** (400) | Bold gradient-ready headlines, warm body text |
| **Urbanist** (600) | **Inter** (400) | Tall, premium headers with crisp paragraphs |
| **Manrope** (700) | **DM Sans** (400) | Compact, modern, technically polished |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  color: var(--iri-text-primary);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Iridescent gradient-clipped display heading */
.iri-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  background: var(--iri-gradient-full);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: iriTextShift 6s ease-in-out infinite alternate;
}

@keyframes iriTextShift {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--iri-text-secondary);
}

.iri-label {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--iri-text-muted);
}

.iri-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--iri-text-secondary);
}
```

---

## Layout Principles

- **Dark, uncluttered canvases** -- iridescent effects demand generous dark space around them to glow; avoid crowded layouts that flatten the prismatic impact
- **Centered, constrained content** -- max-width of 1100-1200px keeps content focused; iridescent backgrounds can extend full-bleed behind constrained foreground
- **Glassmorphic card layers** -- translucent frosted panels float above iridescent backgrounds, creating a natural depth hierarchy of base > glow > glass > content
- **Asymmetric accent placement** -- position iridescent gradient orbs, foil strips, or prismatic shapes off-center to create dynamic compositions
- **Vertical rhythm through spectral shifts** -- sections can transition through different hue regions of the spectrum, guiding the eye downward
- **Full-viewport hero sections** -- the hero is the natural home for the most intense iridescent effect; let it occupy at least 80vh
- **Grid layouts for feature cards** -- 2-3 column grids of glass cards on iridescent backgrounds create a clean, premium product feel
- **Generous vertical spacing** -- 100-140px between sections prevents the prismatic effects from competing with each other
- **Floating accent elements** -- subtle animated gradient blobs positioned absolutely behind content add depth without obstructing
- **Responsive simplification** -- on mobile, reduce gradient complexity (fewer stops), lower blur values, and stack cards vertically while preserving the spectral color story

---

## CSS / Design Techniques

### Iridescent Background

```css
.iri-bg {
  background: var(--iri-void);
  position: relative;
  overflow: hidden;
}

.iri-bg::before,
.iri-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  animation: iriFloat 15s ease-in-out infinite alternate;
}

.iri-bg::before {
  width: 60vw;
  height: 60vw;
  top: -20%;
  left: -10%;
  background: conic-gradient(
    from 0deg,
    rgba(123,47,190,0.4),
    rgba(58,134,255,0.3),
    rgba(0,212,255,0.35),
    rgba(8,217,160,0.3),
    rgba(255,215,0,0.25),
    rgba(255,60,172,0.35),
    rgba(123,47,190,0.4)
  );
}

.iri-bg::after {
  width: 50vw;
  height: 50vw;
  bottom: -15%;
  right: -10%;
  background: conic-gradient(
    from 180deg,
    rgba(255,60,172,0.35),
    rgba(232,79,173,0.3),
    rgba(255,203,164,0.25),
    rgba(255,215,0,0.3),
    rgba(8,217,160,0.3),
    rgba(0,212,255,0.35),
    rgba(255,60,172,0.35)
  );
  animation-delay: -7s;
  animation-direction: alternate-reverse;
}

@keyframes iriFloat {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(3%, -2%) rotate(60deg) scale(1.05); }
  66% { transform: translate(-2%, 3%) rotate(120deg) scale(0.95); }
  100% { transform: translate(1%, -1%) rotate(180deg) scale(1); }
}
```

### Holographic Foil Card

```css
.iri-card {
  position: relative;
  background: var(--iri-glass-bg);
  backdrop-filter: blur(var(--iri-glass-blur));
  -webkit-backdrop-filter: blur(var(--iri-glass-blur));
  border: 1px solid var(--iri-glass-border);
  border-radius: 16px;
  padding: 32px;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

/* Holographic foil sheen overlay */
.iri-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from var(--iri-foil-angle, 0deg),
    transparent,
    rgba(255,60,172,0.08),
    rgba(0,212,255,0.08),
    rgba(8,217,160,0.06),
    rgba(255,215,0,0.06),
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: inherit;
}

/* Metallic sheen sweep */
.iri-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--iri-sheen);
  background-size: 250% 100%;
  background-position: 200% 0;
  transition: background-position 0.6s ease;
  pointer-events: none;
  border-radius: inherit;
}

.iri-card:hover {
  border-color: rgba(200, 180, 255, 0.2);
  transform: translateY(-4px);
}

.iri-card:hover::before {
  opacity: 1;
}

.iri-card:hover::after {
  background-position: -50% 0;
}
```

### Iridescent Button

```css
.iri-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  background: var(--iri-gradient-full);
  background-size: 300% 100%;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 14px 36px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  animation: iriButtonShift 6s ease infinite;
}

@keyframes iriButtonShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Metallic highlight sweep on hover */
.iri-button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255,255,255,0.3) 45%,
    rgba(255,255,255,0.1) 55%,
    transparent 65%
  );
  background-size: 250% 100%;
  background-position: 200% 0;
  transition: background-position 0.5s ease;
  border-radius: inherit;
}

.iri-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 32px rgba(123, 47, 190, 0.25),
    0 4px 16px rgba(0, 212, 255, 0.15);
}

.iri-button:hover::after {
  background-position: -50% 0;
}

/* Glass variant */
.iri-button--glass {
  background: var(--iri-glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--iri-glass-border);
  color: var(--iri-text-primary);
  animation: none;
}

.iri-button--glass:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(200, 180, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
```

### Navigation Bar

```css
.iri-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
  z-index: 10;
}

.iri-nav__logo {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  background: var(--iri-gradient-full);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  animation: iriTextShift 5s ease-in-out infinite alternate;
}

.iri-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.iri-nav__links a {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--iri-text-secondary);
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

.iri-nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--iri-gradient-full);
  background-size: 200% auto;
  transition: width 0.3s ease;
}

.iri-nav__links a:hover {
  color: var(--iri-text-primary);
}

.iri-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.iri-hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  position: relative;
  z-index: 1;
}

.iri-hero__content {
  max-width: 720px;
}

.iri-hero h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  background: var(--iri-gradient-full);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: iriTextShift 8s ease-in-out infinite alternate;
}

.iri-hero p {
  font-size: 1.2rem;
  color: var(--iri-text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.iri-hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
```

### Foil Divider

```css
.iri-divider {
  height: 2px;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--iri-gradient-full);
  background-size: 300% 100%;
  animation: iriDividerShift 8s ease infinite;
  border-radius: 1px;
  opacity: 0.4;
}

@keyframes iriDividerShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Prismatic Badge

```css
.iri-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 100px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: relative;
  color: var(--iri-text-primary);
  background: var(--iri-glass-bg);
  border: 1px solid var(--iri-glass-border);
  overflow: hidden;
}

.iri-badge::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--iri-gradient-full);
  opacity: 0.12;
  border-radius: inherit;
}
```

### Holographic Hover Image

```css
.iri-image-wrap {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.iri-image-wrap img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.4s ease;
}

.iri-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from 0deg,
    transparent 30%,
    rgba(123,47,190,0.15),
    rgba(0,212,255,0.12),
    rgba(255,215,0,0.1),
    rgba(255,60,172,0.12),
    transparent 70%
  );
  mix-blend-mode: color-dodge;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.iri-image-wrap:hover img {
  transform: scale(1.03);
}

.iri-image-wrap:hover::after {
  opacity: 1;
}
```

---

## Design Do's and Don'ts

### Do

- Use iridescent gradients as hero focal points and accent elements, not as blanket background fills across every surface
- Build on dark or very deep-toned bases (near-black, deep indigo) to maximize luminous spectral contrast
- Animate gradient shifts slowly (4-20 second cycles) to simulate natural light refraction rather than digital flashing
- Layer conic and linear gradients together for more convincing holographic depth than single-gradient approaches
- Apply metallic sheen sweeps on hover to create tactile, foil-like interactivity on cards and buttons
- Use the OKLCH color model when defining gradient stops for perceptually smooth hue transitions
- Place text on solid or frosted-glass backing panels to preserve readability over complex prismatic backgrounds
- Test on multiple screens -- iridescent effects can look dramatically different across color profiles and brightness levels

### Don't

- Overload the page with iridescent effects on every element -- the result is visual fatigue and a loss of focal hierarchy
- Use iridescent gradients on light or white backgrounds -- the spectral colors lose their luminous punch and look washed out
- Create fast, strobing, or erratic color animations -- iridescence in nature is smooth and gradual; rapid cycling feels aggressive
- Ignore accessibility -- spectral gradients can produce poor contrast ratios for text; always verify WCAG compliance on all type
- Stack too many blend-mode layers -- performance degrades rapidly, especially on mobile devices and integrated GPUs
- Pair with ornate, decorative, or serif-heavy typography -- the visual complexity clashes with the already rich surface treatments
- Use iridescent effects as the sole design system -- they work best as a premium layer on top of solid structural foundations
- Forget to provide reduced-motion alternatives -- users with vestibular sensitivities need `prefers-reduced-motion` support

---

## Related Aesthetics

| Aesthetic | Relationship to Iridescent |
|-----------|---------------------------|
| **Chromecore** | Shares the metallic, reflective surface obsession but stays monochromatic silver/chrome rather than full-spectrum prismatic |
| **Glassmorphism** | Natural complement; frosted glass panels layered over iridescent backgrounds create the signature holographic-under-glass look |
| **Aurora Gradient** | Sibling aesthetic; both use multi-stop flowing gradients on dark bases, but aurora favors natural-light tones while iridescent pushes toward full-spectrum foil |
| **Y2K Glam** | Precursor; early-2000s holographic and metallic trends that iridescent design refines with modern CSS and smoother execution |
| **Vaporwave** | Shares the rainbow/holographic palette but diverges in mood -- vaporwave is ironic and retro; iridescent is polished and forward-looking |
| **Cyberpunk** | Both favor neon-on-dark compositions but cyberpunk emphasizes grit, dystopia, and hard edges vs. iridescent's clean luxury |
| **Acid Design** | Overlaps in vivid color intensity, but acid design pushes toward distortion, chaos, and counter-culture while iridescent maintains elegance |
| **Dark Mode Neon** | Shares the dark-base-with-vivid-color formula but neon stays within 2-3 saturated hues rather than full spectral sweeps |
| **Dopamine Design** | Both evoke joy through color, but dopamine design uses flat, solid-color blocks rather than gradient-based prismatic effects |
| **Frutiger Aero** | Predecessor in glossy, luminous UI; iridescent extends Frutiger Aero's sheen with full holographic spectral treatment |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iridescent Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       CSS CUSTOM PROPERTIES
       ======================================== */
    :root {
      /* Dark bases */
      --iri-void: #0a0a0f;
      --iri-obsidian: #141420;
      --iri-deep-indigo: #1a1a3e;

      /* Prismatic spectrum */
      --iri-violet: #7b2fbe;
      --iri-pink: #e84fad;
      --iri-magenta: #ff3cac;
      --iri-rose: #f2a1c2;
      --iri-blue: #3a86ff;
      --iri-cyan: #00d4ff;
      --iri-green: #08d9a0;
      --iri-gold: #ffd700;
      --iri-peach: #ffcba4;

      /* Text */
      --iri-text-primary: #f0eff4;
      --iri-text-secondary: #c4b5fd;
      --iri-text-muted: #9ca3af;

      /* Gradients */
      --iri-gradient-full: linear-gradient(
        135deg, #7b2fbe, #e84fad, #ff3cac, #3a86ff, #00d4ff, #08d9a0, #ffd700
      );
      --iri-gradient-cool: linear-gradient(135deg, #7b2fbe, #3a86ff, #00d4ff, #08d9a0);
      --iri-gradient-warm: linear-gradient(135deg, #ff3cac, #e84fad, #ffcba4, #ffd700);

      /* Glass */
      --iri-glass-bg: rgba(255, 255, 255, 0.04);
      --iri-glass-border: rgba(255, 255, 255, 0.08);
      --iri-glass-blur: 18px;

      /* Sheen */
      --iri-sheen: linear-gradient(
        105deg,
        transparent 40%,
        rgba(255,255,255,0.15) 45%,
        rgba(255,255,255,0.05) 55%,
        transparent 60%
      );
    }

    /* ========================================
       RESET & BASE
       ======================================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--iri-void);
      color: var(--iri-text-secondary);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.7;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      color: var(--iri-text-primary);
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    a { color: inherit; text-decoration: none; }
    img { display: block; max-width: 100%; }

    /* ========================================
       IRIDESCENT BACKGROUND EFFECT
       ======================================== */
    .iri-bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .iri-bg__orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.6;
    }

    .iri-bg__orb--1 {
      width: 60vw;
      height: 60vw;
      top: -20%;
      left: -15%;
      background: conic-gradient(
        from 0deg,
        rgba(123,47,190,0.4),
        rgba(58,134,255,0.3),
        rgba(0,212,255,0.35),
        rgba(8,217,160,0.3),
        rgba(255,215,0,0.2),
        rgba(255,60,172,0.35),
        rgba(123,47,190,0.4)
      );
      animation: iriOrb1 18s ease-in-out infinite alternate;
    }

    .iri-bg__orb--2 {
      width: 50vw;
      height: 50vw;
      bottom: -15%;
      right: -10%;
      background: conic-gradient(
        from 180deg,
        rgba(255,60,172,0.35),
        rgba(232,79,173,0.3),
        rgba(255,203,164,0.2),
        rgba(255,215,0,0.25),
        rgba(8,217,160,0.3),
        rgba(0,212,255,0.35),
        rgba(255,60,172,0.35)
      );
      animation: iriOrb2 22s ease-in-out infinite alternate;
    }

    .iri-bg__orb--3 {
      width: 35vw;
      height: 35vw;
      top: 40%;
      left: 30%;
      background: conic-gradient(
        from 90deg,
        rgba(0,212,255,0.2),
        rgba(123,47,190,0.15),
        rgba(255,215,0,0.15),
        rgba(0,212,255,0.2)
      );
      animation: iriOrb3 25s ease-in-out infinite alternate;
    }

    @keyframes iriOrb1 {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(5%, 3%) rotate(180deg); }
    }

    @keyframes iriOrb2 {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(-4%, -3%) rotate(-180deg); }
    }

    @keyframes iriOrb3 {
      0% { transform: translate(0, 0) rotate(0deg) scale(1); }
      100% { transform: translate(3%, -5%) rotate(120deg) scale(1.1); }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .iri-bg__orb,
      .iri-display,
      .iri-btn,
      .iri-divider-line {
        animation: none !important;
      }
    }

    /* ========================================
       CONTENT WRAPPER
       ======================================== */
    .content {
      position: relative;
      z-index: 1;
    }

    /* ========================================
       NAVIGATION
       ======================================== */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 40px;
    }

    .nav__logo {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      background: var(--iri-gradient-full);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: iriTextShift 5s ease-in-out infinite alternate;
    }

    @keyframes iriTextShift {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }

    .nav__links {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    .nav__links a {
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--iri-text-secondary);
      position: relative;
      transition: color 0.2s ease;
    }

    .nav__links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: var(--iri-gradient-full);
      transition: width 0.3s ease;
    }

    .nav__links a:hover { color: var(--iri-text-primary); }
    .nav__links a:hover::after { width: 100%; }

    /* ========================================
       HERO SECTION
       ======================================== */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 40px;
    }

    .hero__inner {
      max-width: 720px;
    }

    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      border-radius: 100px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--iri-text-primary);
      background: var(--iri-glass-bg);
      border: 1px solid var(--iri-glass-border);
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    }

    .hero__badge::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--iri-gradient-full);
      opacity: 0.1;
      border-radius: inherit;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.8rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      letter-spacing: -0.03em;
      line-height: 1.05;
      background: var(--iri-gradient-full);
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: iriTextShift 8s ease-in-out infinite alternate;
    }

    .hero p {
      font-size: 1.15rem;
      color: var(--iri-text-secondary);
      margin-bottom: 2.5rem;
      line-height: 1.8;
    }

    .hero__actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ========================================
       BUTTONS
       ======================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      position: relative;
      background: var(--iri-gradient-full);
      background-size: 300% 100%;
      color: #ffffff;
      border: none;
      border-radius: 12px;
      padding: 14px 36px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      animation: iriButtonShift 6s ease infinite;
    }

    @keyframes iriButtonShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--iri-sheen);
      background-size: 250% 100%;
      background-position: 200% 0;
      transition: background-position 0.5s ease;
      border-radius: inherit;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow:
        0 8px 32px rgba(123,47,190,0.25),
        0 4px 16px rgba(0,212,255,0.15);
    }

    .btn:hover::after {
      background-position: -50% 0;
    }

    .btn--glass {
      background: var(--iri-glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--iri-glass-border);
      color: var(--iri-text-primary);
      animation: none;
    }

    .btn--glass:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(200,180,255,0.2);
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    }

    /* ========================================
       DIVIDER
       ======================================== */
    .iri-divider-line {
      height: 2px;
      max-width: 1200px;
      margin: 0 auto;
      background: var(--iri-gradient-full);
      background-size: 300% 100%;
      animation: iriDividerShift 8s ease infinite;
      border-radius: 1px;
      opacity: 0.35;
    }

    @keyframes iriDividerShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* ========================================
       FEATURES SECTION
       ======================================== */
    .features {
      padding: 100px 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .features__header {
      text-align: center;
      margin-bottom: 56px;
    }

    .features__header h2 {
      font-size: 2.2rem;
      margin-bottom: 12px;
    }

    .features__header p {
      font-size: 1.05rem;
      color: var(--iri-text-muted);
      max-width: 520px;
      margin: 0 auto;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    /* ========================================
       GLASS CARD (with holographic foil)
       ======================================== */
    .card {
      position: relative;
      background: var(--iri-glass-bg);
      backdrop-filter: blur(var(--iri-glass-blur));
      -webkit-backdrop-filter: blur(var(--iri-glass-blur));
      border: 1px solid var(--iri-glass-border);
      border-radius: 16px;
      padding: 32px;
      overflow: hidden;
      transition: border-color 0.3s ease, transform 0.3s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: conic-gradient(
        from 0deg,
        transparent,
        rgba(255,60,172,0.06),
        rgba(0,212,255,0.06),
        rgba(8,217,160,0.05),
        rgba(255,215,0,0.05),
        transparent
      );
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      border-radius: inherit;
    }

    .card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--iri-sheen);
      background-size: 250% 100%;
      background-position: 200% 0;
      transition: background-position 0.6s ease;
      pointer-events: none;
      border-radius: inherit;
    }

    .card:hover {
      border-color: rgba(200,180,255,0.2);
      transform: translateY(-4px);
    }

    .card:hover::before { opacity: 1; }
    .card:hover::after { background-position: -50% 0; }

    .card__icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .card h3 {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
      position: relative;
      z-index: 1;
    }

    .card p {
      font-size: 0.95rem;
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }

    /* ========================================
       SHOWCASE / STATS SECTION
       ======================================== */
    .showcase {
      padding: 100px 40px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .showcase h2 {
      font-size: 2.2rem;
      margin-bottom: 48px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
    }

    .stat {
      background: var(--iri-glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--iri-glass-border);
      border-radius: 16px;
      padding: 32px 20px;
    }

    .stat__number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      background: var(--iri-gradient-full);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: iriTextShift 6s ease-in-out infinite alternate;
      margin-bottom: 8px;
    }

    .stat__label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--iri-text-muted);
    }

    /* ========================================
       CTA SECTION
       ======================================== */
    .cta {
      padding: 100px 40px;
      text-align: center;
    }

    .cta__inner {
      background: var(--iri-glass-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--iri-glass-border);
      border-radius: 24px;
      padding: 64px 40px;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .cta__inner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: conic-gradient(
        from 0deg at 50% 100%,
        transparent 30%,
        rgba(123,47,190,0.08),
        rgba(0,212,255,0.06),
        rgba(255,215,0,0.05),
        rgba(255,60,172,0.08),
        transparent 70%
      );
      pointer-events: none;
    }

    .cta h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .cta p {
      margin-bottom: 2rem;
      font-size: 1.05rem;
      position: relative;
      z-index: 1;
    }

    .cta .btn {
      position: relative;
      z-index: 1;
    }

    /* ========================================
       FOOTER
       ======================================== */
    footer {
      text-align: center;
      padding: 40px;
      font-size: 0.85rem;
      color: var(--iri-text-muted);
    }

    footer a {
      color: var(--iri-text-secondary);
      transition: color 0.2s;
    }

    footer a:hover {
      color: var(--iri-text-primary);
    }

    /* ========================================
       RESPONSIVE
       ======================================== */
    @media (max-width: 768px) {
      .nav { padding: 16px 20px; }
      .nav__links { gap: 20px; }
      .hero {
        min-height: 70vh;
        padding: 60px 20px;
      }
      .features { padding: 60px 20px; }
      .showcase { padding: 60px 20px; }
      .cta { padding: 60px 20px; }
      .cta__inner { padding: 40px 24px; }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .nav__links { gap: 16px; font-size: 0.8rem; }
      .hero__actions { flex-direction: column; align-items: center; }
      .stats-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Iridescent background orbs -->
  <div class="iri-bg">
    <div class="iri-bg__orb iri-bg__orb--1"></div>
    <div class="iri-bg__orb iri-bg__orb--2"></div>
    <div class="iri-bg__orb iri-bg__orb--3"></div>
  </div>

  <div class="content">

    <!-- Navigation -->
    <nav class="nav">
      <a href="#" class="nav__logo">Prism</a>
      <ul class="nav__links">
        <li><a href="#">Product</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero__inner">
        <span class="hero__badge">New -- Holographic UI Kit</span>
        <h1>Surfaces that shift with light</h1>
        <p>
          Experience interfaces inspired by prismatic refraction. Holographic gradients,
          metallic sheens, and foil effects create designs that feel alive and luminous.
        </p>
        <div class="hero__actions">
          <a href="#" class="btn">Explore the Spectrum</a>
          <a href="#" class="btn btn--glass">View Gallery</a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="iri-divider-line"></div>

    <!-- Features -->
    <section class="features">
      <div class="features__header">
        <h2>Prismatic by design</h2>
        <p>Every surface catches light differently, creating depth and dimension across your interface.</p>
      </div>
      <div class="features__grid">

        <div class="card">
          <div class="card__icon" style="background: rgba(123,47,190,0.15);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#7b2fbe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Layered Refraction</h3>
          <p>Stacked translucent surfaces reveal prismatic backgrounds beneath, creating natural visual hierarchy through light and color.</p>
        </div>

        <div class="card">
          <div class="card__icon" style="background: rgba(0,212,255,0.15);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" stroke="#00d4ff" stroke-width="2"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#00d4ff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Spectral Motion</h3>
          <p>Gradients shift smoothly through the full color spectrum, simulating how holographic foil catches and disperses ambient light.</p>
        </div>

        <div class="card">
          <div class="card__icon" style="background: rgba(255,60,172,0.15);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ff3cac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Foil Interactivity</h3>
          <p>Metallic sheen effects respond to hover and interaction, creating tactile, premium-feeling surfaces that reward engagement.</p>
        </div>

      </div>
    </section>

    <!-- Divider -->
    <div class="iri-divider-line"></div>

    <!-- Showcase / Stats -->
    <section class="showcase">
      <h2>Numbers that shimmer</h2>
      <div class="stats-grid">
        <div class="stat">
          <div class="stat__number">7+</div>
          <div class="stat__label">Spectral Hues</div>
        </div>
        <div class="stat">
          <div class="stat__number">360&deg;</div>
          <div class="stat__label">Color Rotation</div>
        </div>
        <div class="stat">
          <div class="stat__number">18px</div>
          <div class="stat__label">Glass Blur</div>
        </div>
        <div class="stat">
          <div class="stat__number">&infin;</div>
          <div class="stat__label">Refraction Angles</div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta__inner">
        <h2>Ready to refract?</h2>
        <p>Join designers creating holographic interfaces that captivate and convert.</p>
        <a href="#" class="btn">Get Started Free</a>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>Built with the Iridescent aesthetic. Prismatic, luminous, alive.</p>
    </footer>

  </div>

</body>
</html>
```

---

## Implementation Tips

- **Start with the background layer** -- build the iridescent conic-gradient orbs and animate them first, then layer glass panels and content on top; this establishes the prismatic foundation before adding detail
- **Use `will-change: transform` sparingly** -- apply it only to the animated gradient orbs, not to every element; excessive `will-change` declarations consume GPU memory and can degrade performance
- **Test gradient smoothness in OKLCH** -- if your target browsers support it, define gradient stops in `oklch()` instead of hex for perceptually uniform transitions that avoid muddy midpoints between distant hues
- **Provide `prefers-reduced-motion` fallbacks** -- wrap all animations in a media query check and provide static gradient versions for users with vestibular sensitivities; this is both an accessibility requirement and a UX best practice
- **Profile blend-mode performance on mobile** -- `mix-blend-mode` and `background-blend-mode` are GPU-intensive operations; on lower-powered devices, consider replacing blended layers with pre-baked gradient images or simplified single-layer gradients
- **Use `backdrop-filter` with a fallback** -- not all browsers fully support `backdrop-filter`; provide a solid semi-transparent `background-color` fallback so glass panels remain visually distinct even without blur
- **Keep iridescent effects above the fold** -- the strongest prismatic impact should land in the hero and navigation area; deeper sections can use subtler, single-accent-color treatments to maintain performance and prevent visual fatigue
- **Calibrate on multiple displays** -- iridescent effects look dramatically different on wide-gamut P3 displays versus standard sRGB monitors; test on both to ensure the spectral palette reads well across the range
