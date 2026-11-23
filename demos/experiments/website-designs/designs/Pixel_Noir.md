# Pixel Noir Design Reference

## Overview

Pixel Noir is a hybrid aesthetic that fuses the blocky, constrained visual language of classic pixel art with the moody, shadow-drenched atmosphere of film noir. The result is a dark, narrative-driven style built on severely limited color palettes, deliberate dithering patterns, and a pervasive sense of rain-slicked mystery. Where standard pixel art celebrates bright primaries and playful sprites, Pixel Noir strips the palette down to blacks, deep grays, muted ambers, and the occasional blood-red accent -- evoking smoky detective offices, rain-soaked alleyways, and flickering neon signs rendered at low resolution.

The aesthetic draws from two distinct lineages. On one side, it inherits the technical constraints of 8-bit and 16-bit era gaming: tile-based construction, bitmap fonts, sprite animation, and the creative use of dithering to simulate gradients with only a handful of colors. On the other, it channels the cinematic language of 1940s and 1950s film noir -- chiaroscuro lighting, venetian-blind shadow patterns, fog, cigarette smoke, and morally ambiguous narratives. Games like Pecaminosa (Cereal Games), Pixel Noir (SWDTech Games), and The Red Strings Club have demonstrated how pixel art can carry genuine noir weight, using intricate low-resolution detail to reflect the grimy essence of noir cinema while occasionally introducing vibrant neon tones for mesmerizing contrast.

In web and UI design, Pixel Noir translates to dark, textured backgrounds with visible dithering patterns, monospaced bitmap typography, harsh single-pixel borders, and carefully rationed warm accents that feel like lamplight cutting through darkness. Every element should feel like it was rendered on a CRT monitor in a dimly lit room. The style rewards restraint: limited palettes force creative problem-solving, and the coarse pixel grid demands that every single pixel earn its place. Animation is minimal and deliberate -- a blinking cursor, a flickering light, rain trickling down a window -- never gratuitous. The overall mood is contemplative, atmospheric, and just slightly dangerous.

---

## Visual Characteristics

### Core Design Traits

- **Severely limited color palettes** -- typically 4 to 16 colors maximum, with the majority being dark values and only one or two warm or saturated accents
- **Extensive use of dithering** -- checkerboard, ordered, and fill dithering patterns used to create mid-tones, gradients, and atmospheric fog without introducing new colors
- **Deep black backgrounds** -- near-pure black serves as the dominant canvas, representing shadow, night, and moral ambiguity
- **Chiaroscuro lighting in pixel form** -- harsh pools of light surrounded by deep shadow, mimicking the high-contrast cinematography of classic noir films
- **Bitmap and monospaced typography** -- all text rendered in pixel-grid-aligned fonts with no anti-aliasing or sub-pixel rendering
- **Single-pixel hard borders** -- UI elements, panels, and frames use crisp 1px borders with no rounded corners, no gradients, and no soft shadows
- **CRT and scan line artifacts** -- subtle horizontal scan lines, slight phosphor glow, and vignette darkening at screen edges reinforce the retro-digital atmosphere
- **Rain and atmospheric particle effects** -- animated rain streaks, drifting smoke particles, and fog overlays rendered as dithered pixel patterns
- **Narrative-driven composition** -- layouts suggest story: a case file, a detective's desk, a city map with marked locations; the interface is part of the world
- **Venetian-blind shadow patterns** -- horizontal stripe overlays that reference the iconic shadow motif of film noir cinematography
- **Neon sign accents** -- occasional bright color used sparingly to simulate glowing signage against dark cityscapes, creating focal points
- **Sprite-style iconography** -- UI icons and decorative elements rendered as small pixel sprites, maintaining the low-resolution handcrafted look

### Design Principles

- Darkness is the default state; light must be justified and deliberate
- Every pixel matters -- at low resolution, a single misplaced pixel changes the entire composition
- Dithering is a feature, not a workaround; it creates texture, depth, and atmosphere that flat color cannot achieve
- Color is precious and rationed; each accent color carries narrative meaning (amber for warmth and safety, red for danger, cool blue for isolation)
- The interface should feel diegetic -- as if it exists within the noir world as a terminal, case file, or bulletin board
- Restraint over spectacle; mood over motion; atmosphere over animation
- Typography should be utilitarian and machine-rendered, reinforcing the sense of documents, reports, and data terminals
- Embrace the grid: all elements snap to pixel boundaries with no fractional positioning or anti-aliased edges

---

## Color Palette

The Pixel Noir palette is built on extreme darkness punctuated by carefully rationed warm and cool accents. The majority of the palette lives in the black-to-dark-gray range, with dithering used to create intermediate values. Accent colors are borrowed from the noir visual vocabulary: amber streetlamps, red neon bar signs, cold blue moonlight, and the sickly green of fluorescent tubes in empty hallways.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Void Black** | `#080808` | Primary background, deepest shadows, letterboxing |
| **Soot** | `#121212` | Secondary background, card surfaces, panel fills |
| **Charcoal** | `#1C1C1E` | Elevated surfaces, navigation backgrounds, code blocks |
| **Gunmetal** | `#2A2A2D` | Borders, dividers, inactive UI elements |
| **Smoke** | `#3A3A3E` | Dithering mid-tone, subtle backgrounds, disabled text |
| **Ash** | `#555558` | Secondary text, captions, muted UI labels |
| **Fog** | `#7A7A80` | Tertiary text, timestamps, metadata |
| **Bone** | `#C8C0B0` | Primary text, body copy on dark backgrounds |
| **Lamplight Amber** | `#D4A020` | Primary warm accent, links, active states, highlights |
| **Whiskey Gold** | `#B8860B` | Secondary warm accent, hover states, subtle emphasis |
| **Blood Red** | `#8B1A1A` | Danger states, critical alerts, narrative emphasis |
| **Neon Red** | `#CC2222` | Error states, destructive actions, neon sign glow |
| **Midnight Blue** | `#1A1A2E` | Cool accent backgrounds, moonlit panels |
| **Rain Blue** | `#4A6580` | Cool accent, secondary interactive elements |
| **Fluorescent Green** | `#2A8A2A` | Success states, terminal text, data confirmations |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --noir-bg-void: #080808;
  --noir-bg-soot: #121212;
  --noir-bg-charcoal: #1c1c1e;
  --noir-bg-gunmetal: #2a2a2d;

  /* Grays / Dither tones */
  --noir-smoke: #3a3a3e;
  --noir-ash: #555558;
  --noir-fog: #7a7a80;

  /* Text */
  --noir-text-primary: #c8c0b0;
  --noir-text-secondary: #7a7a80;
  --noir-text-muted: #555558;

  /* Warm accents */
  --noir-amber: #d4a020;
  --noir-gold: #b8860b;
  --noir-red: #8b1a1a;
  --noir-neon-red: #cc2222;

  /* Cool accents */
  --noir-midnight: #1a1a2e;
  --noir-rain-blue: #4a6580;
  --noir-green: #2a8a2a;

  /* Glows (used for box-shadow and text-shadow) */
  --noir-glow-amber: 0 0 6px rgba(212, 160, 32, 0.4), 0 0 20px rgba(212, 160, 32, 0.1);
  --noir-glow-red: 0 0 6px rgba(204, 34, 34, 0.5), 0 0 20px rgba(204, 34, 34, 0.15);

  /* Borders */
  --noir-border: 1px solid #2a2a2d;
  --noir-border-amber: 1px solid rgba(212, 160, 32, 0.3);

  /* Pixel rendering */
  --noir-pixel-size: 4px;
}
```

---

## Typography

Pixel Noir typography is strictly bitmap and monospaced, evoking typewritten case reports, dot-matrix printouts, and old terminal screens. All text must render crisply on the pixel grid with no anti-aliasing, no sub-pixel rendering, and no smooth curves. Letterforms feel stamped, mechanical, and utilitarian -- the kind of text that emerges from a teletype machine in a 1940s police station, filtered through the lo-fi screen of a retro computer.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Press Start 2P** | Bitmap, arcade | Display headings, hero text, titles |
| **VT323** | Terminal monospace | Body text, narrative passages, dialogue |
| **Silkscreen** | Clean bitmap | UI labels, navigation, metadata |
| **Share Tech Mono** | Techy monospace | Data readouts, code blocks, stats |
| **IBM Plex Mono** | Clean monospace | Long-form body text, readable passages |
| **Space Mono** | Retro-futuristic mono | Secondary headings, editorial layouts |
| **DotGothic16** | Japanese pixel | Atmospheric accents, decorative labels |
| **Pixelify Sans** | Modern pixel | Subheadings, badges, tags |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Press Start 2P** (400) | **VT323** (400) | Classic pixel noir, game-inspired |
| **Press Start 2P** (400) | **IBM Plex Mono** (400) | Pixel headings with readable body |
| **Silkscreen** (700) | **VT323** (400) | Clean UI with terminal narrative |
| **Pixelify Sans** (700) | **Share Tech Mono** (400) | Modern pixel with tech readouts |
| **Space Mono** (700) | **VT323** (400) | Retro-futuristic noir editorial |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen:wght@400;700&display=swap');

/* Force pixel-perfect rendering */
* {
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: unset;
  text-rendering: optimizeSpeed;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Press Start 2P', monospace;
  color: var(--noir-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  image-rendering: pixelated;
}

/* Display / Hero text with amber glow */
.noir-display {
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--noir-amber);
  text-shadow: 2px 2px 0 #080808, 0 0 8px rgba(212, 160, 32, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 2;
}

/* Body / narrative text */
body {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--noir-text-primary);
}

/* UI labels */
.noir-label {
  font-family: 'Silkscreen', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--noir-text-secondary);
}

/* Data readout */
.noir-data {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.85rem;
  color: var(--noir-green);
  line-height: 1.6;
}
```

---

## Layout Principles

- **Full-bleed dark backgrounds** -- the entire viewport is a black canvas; there are no white margins or light gutters
- **Pixel-grid alignment** -- all spacing, padding, and margins are multiples of 4px (the base pixel unit), reinforcing the low-resolution grid feel
- **Single-column narrative layouts** -- primary content flows in a narrow centered column, mimicking a case file, dossier, or typewritten report
- **Asymmetric panel arrangements** -- secondary content uses offset panels suggesting a detective's desk with scattered documents, photos, and notes
- **Hard 1px borders over soft shadows** -- panels and cards are delineated by crisp single-pixel borders, never by drop shadows or gradient edges
- **Dithered section transitions** -- instead of smooth gradients or clean breaks, section boundaries use dithered patterns (checkerboard dissolves) to transition between areas
- **Sparse, deliberate whitespace** -- space is used to create isolation and tension, not openness and airiness; elements feel alone in the dark
- **Fixed-width containers** -- content areas have a maximum width (typically 800-960px) to maintain the compact, screen-like proportion of a retro monitor
- **Layered depth through brightness** -- foreground elements are slightly lighter than background, creating depth without blur or parallax
- **Navigation as file tabs** -- top navigation styled as tabbed file folders or case dossier dividers, reinforcing the investigative narrative
- **Footer as case notes** -- the footer area styled as handwritten marginalia, timestamps, or evidence tags

---

## CSS / Design Techniques

### Dithered Background Pattern

```css
/* Checkerboard dithering pattern using CSS */
.noir-dither {
  background-color: var(--noir-bg-void);
  background-image:
    linear-gradient(45deg,
      var(--noir-bg-soot) 25%, transparent 25%,
      transparent 75%, var(--noir-bg-soot) 75%),
    linear-gradient(45deg,
      var(--noir-bg-soot) 25%, transparent 25%,
      transparent 75%, var(--noir-bg-soot) 75%);
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
}

/* Vertical dither fade (top to bottom) */
.noir-dither-fade {
  position: relative;
}

.noir-dither-fade::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 2px,
      rgba(8, 8, 8, 0.3) 2px,
      rgba(8, 8, 8, 0.3) 4px
    );
  pointer-events: none;
  mix-blend-mode: multiply;
}
```

### Pixel Noir Card Component

```css
.noir-card {
  background: var(--noir-bg-soot);
  border: 1px solid var(--noir-bg-gunmetal);
  padding: 24px;
  position: relative;
  image-rendering: pixelated;
  transition: border-color 0.2s ease;
}

.noir-card:hover {
  border-color: var(--noir-amber);
}

/* Pixel corner accents (case file staple marks) */
.noir-card::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-top: 2px solid var(--noir-amber);
  border-left: 2px solid var(--noir-amber);
}

.noir-card::after {
  content: '';
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  border-bottom: 2px solid var(--noir-amber);
  border-right: 2px solid var(--noir-amber);
}

/* Card with dithered header */
.noir-card__header {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  color: var(--noir-amber);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--noir-bg-gunmetal);
}

.noir-card__body {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: var(--noir-text-primary);
  line-height: 1.7;
}

/* Card grid */
.noir-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

### Pixel Noir Button

```css
.noir-btn {
  display: inline-block;
  background: transparent;
  color: var(--noir-amber);
  border: 2px solid var(--noir-amber);
  padding: 12px 28px;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  image-rendering: pixelated;
  transition: background 0.15s ease, color 0.15s ease;
  position: relative;
}

.noir-btn:hover {
  background: var(--noir-amber);
  color: var(--noir-bg-void);
  box-shadow: var(--noir-glow-amber);
}

.noir-btn:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

/* Pixel shadow (retro press effect) */
.noir-btn--pixel-shadow {
  box-shadow: 4px 4px 0 var(--noir-bg-gunmetal);
}

.noir-btn--pixel-shadow:active {
  box-shadow: none;
  transform: translate(4px, 4px);
}

/* Danger variant */
.noir-btn--danger {
  color: var(--noir-neon-red);
  border-color: var(--noir-neon-red);
}

.noir-btn--danger:hover {
  background: var(--noir-neon-red);
  color: var(--noir-bg-void);
  box-shadow: var(--noir-glow-red);
}

/* Ghost variant (minimal) */
.noir-btn--ghost {
  border-color: var(--noir-bg-gunmetal);
  color: var(--noir-text-secondary);
}

.noir-btn--ghost:hover {
  border-color: var(--noir-amber);
  color: var(--noir-amber);
}
```

### Navigation Bar

```css
.noir-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 24px;
  background: var(--noir-bg-soot);
  border-bottom: 2px solid var(--noir-bg-gunmetal);
}

.noir-nav__logo {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  color: var(--noir-amber);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-shadow: 2px 2px 0 #080808;
}

.noir-nav__links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.noir-nav__links a {
  font-family: 'Silkscreen', monospace;
  font-size: 0.75rem;
  color: var(--noir-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.noir-nav__links a:hover,
.noir-nav__links a.active {
  color: var(--noir-amber);
  border-bottom-color: var(--noir-amber);
}

/* Tab-style nav variant (case file tabs) */
.noir-nav--tabs .noir-nav__links a {
  background: var(--noir-bg-charcoal);
  border: 1px solid var(--noir-bg-gunmetal);
  border-bottom: none;
  padding: 8px 16px;
  position: relative;
  top: 2px;
}

.noir-nav--tabs .noir-nav__links a.active {
  background: var(--noir-bg-soot);
  border-color: var(--noir-amber);
  color: var(--noir-amber);
}
```

### Hero Section

```css
.noir-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  background: var(--noir-bg-void);
  overflow: hidden;
}

/* Scan line overlay */
.noir-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(200, 192, 176, 0.015) 2px,
    rgba(200, 192, 176, 0.015) 4px
  );
  pointer-events: none;
  z-index: 2;
}

/* Venetian blind shadow effect */
.noir-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 20px,
    rgba(0, 0, 0, 0.3) 20px,
    rgba(0, 0, 0, 0.3) 28px
  );
  transform: skewY(-5deg);
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
}

.noir-hero__content {
  position: relative;
  z-index: 3;
  max-width: 700px;
}

.noir-hero__content h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--noir-amber);
  text-shadow: 3px 3px 0 #080808, 0 0 12px rgba(212, 160, 32, 0.25);
  margin-bottom: 2rem;
  line-height: 2;
}

.noir-hero__content p {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  color: var(--noir-text-secondary);
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

/* Rain animation overlay */
@keyframes noir-rain {
  0% { background-position: 0 0; }
  100% { background-position: -20px 200px; }
}

.noir-hero--rain::before {
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(200, 192, 176, 0.015) 2px,
      rgba(200, 192, 176, 0.015) 4px
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='40'%3E%3Crect x='1' y='0' width='1' height='3' fill='rgba(120,140,160,0.15)'/%3E%3C/svg%3E");
  animation: noir-rain 0.8s linear infinite;
}

@media (max-width: 768px) {
  .noir-hero {
    min-height: auto;
    padding: 48px 16px;
  }
}
```

### Venetian Blind Shadow Overlay

```css
/* Standalone venetian blind shadow utility */
.noir-blinds {
  position: relative;
}

.noir-blinds::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 16px,
    rgba(0, 0, 0, 0.25) 16px,
    rgba(0, 0, 0, 0.25) 24px
  );
  transform: skewY(-3deg);
  pointer-events: none;
  opacity: 0.5;
}
```

### Pixel Vignette Effect

```css
/* CRT-style vignette darkening at edges */
.noir-vignette {
  position: relative;
}

.noir-vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(8, 8, 8, 0.6) 100%
  );
  pointer-events: none;
}
```

### Flickering Neon Sign Text

```css
@keyframes noir-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 4px var(--noir-neon-red),
      0 0 12px rgba(204, 34, 34, 0.4),
      0 0 24px rgba(204, 34, 34, 0.15);
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.7;
  }
}

.noir-neon {
  font-family: 'Press Start 2P', monospace;
  color: var(--noir-neon-red);
  animation: noir-flicker 4s infinite;
}

.noir-neon--amber {
  color: var(--noir-amber);
  animation-name: noir-flicker-amber;
}

@keyframes noir-flicker-amber {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 4px var(--noir-amber),
      0 0 12px rgba(212, 160, 32, 0.4),
      0 0 24px rgba(212, 160, 32, 0.15);
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.7;
  }
}
```

---

## Design Do's and Don'ts

### Do's

- **Use dithering deliberately** -- checkerboard and ordered dithering patterns add authentic pixel texture and create depth without new colors
- **Restrict your palette ruthlessly** -- work with 8-12 colors maximum; let constraints drive creativity, just as hardware limitations did for classic pixel artists
- **Apply `image-rendering: pixelated`** to all pixel art elements so they scale sharply without browser anti-aliasing
- **Reserve bright accent colors for narrative emphasis** -- amber for clues, red for danger, green for success; every color carries meaning
- **Use monospaced bitmap fonts exclusively** -- consistency with the pixel grid is paramount; avoid any font with curves that won't align to the raster
- **Add subtle CRT effects** -- scan lines, vignetting, and slight flicker create atmosphere without overwhelming the content
- **Maintain high luminance contrast for readability** -- bone-white or warm-gray text on near-black backgrounds ensures legibility
- **Treat your layout as a narrative artifact** -- the UI should feel like a case file, evidence board, or terminal within the noir world

### Don'ts

- **Don't use white or light backgrounds** -- they shatter the noir atmosphere completely; the world is dark by definition
- **Don't apply anti-aliasing to pixel elements** -- smooth edges destroy the crispness that defines pixel art; every edge must be hard
- **Don't use rounded corners, smooth gradients, or soft box shadows** -- these belong to modern glass-like aesthetics, not to a pixel grid world
- **Don't overuse neon or bright accents** -- when too many things glow, nothing has emphasis; limit bright colors to one or two per viewport
- **Don't animate excessively** -- noir is slow and deliberate; limit animation to subtle atmospheric effects like rain, flicker, and blinking cursors
- **Don't use photographic images directly** -- all imagery should be pixel art or at minimum processed to look like dithered low-resolution graphics
- **Don't mix pixel and vector aesthetics** -- scalable vector icons and smooth SVG illustrations clash with the intentionally coarse pixel grid
- **Don't use playful or decorative typefaces** -- no script fonts, no handwriting fonts, no display fonts with curves; everything is monospaced and mechanical

---

## Related Aesthetics

| Aesthetic | Relationship to Pixel Noir |
|-----------|---------------------------|
| **8-Bit** | Shares pixel grid constraints and bitmap fonts, but 8-Bit is bright, playful, and colorful while Pixel Noir is dark, moody, and restrained |
| **Cyberpunk** | Both use dark backgrounds with colored accents, but Cyberpunk is neon-saturated and futuristic while Pixel Noir is desaturated and retro-nostalgic |
| **Dark Mode Neon** | Shares the dark-canvas-with-accents approach, but lacks the pixel grid constraints and noir narrative atmosphere |
| **Dark Academia** | Both evoke moodiness and intellectual mystery, but Dark Academia uses rich textures and serif typography rather than pixel grids |
| **Film Noir (classic)** | The direct cinematic ancestor; Pixel Noir translates noir's chiaroscuro, shadows, and moral ambiguity into low-resolution digital form |
| **Synthwave / Laser Grid** | Shares retro-digital nostalgia and dark palettes, but Synthwave is vibrant and celebratory where Pixel Noir is somber and investigative |
| **Industrial Gothic** | Both are dark and atmospheric, but Industrial Gothic uses metal textures and heavy type while Pixel Noir uses pixel grids and bitmap fonts |
| **Four Colors** | Shares the severely limited palette concept, but Four Colors is a general constraint exercise while Pixel Noir applies it to a specific noir narrative |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pixel Noir Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Backgrounds */
      --noir-bg-void: #080808;
      --noir-bg-soot: #121212;
      --noir-bg-charcoal: #1c1c1e;
      --noir-bg-gunmetal: #2a2a2d;

      /* Grays */
      --noir-smoke: #3a3a3e;
      --noir-ash: #555558;
      --noir-fog: #7a7a80;

      /* Text */
      --noir-text-primary: #c8c0b0;
      --noir-text-secondary: #7a7a80;
      --noir-text-muted: #555558;

      /* Accents */
      --noir-amber: #d4a020;
      --noir-gold: #b8860b;
      --noir-red: #8b1a1a;
      --noir-neon-red: #cc2222;
      --noir-midnight: #1a1a2e;
      --noir-rain-blue: #4a6580;
      --noir-green: #2a8a2a;

      /* Glows */
      --noir-glow-amber: 0 0 6px rgba(212, 160, 32, 0.4), 0 0 20px rgba(212, 160, 32, 0.1);
      --noir-glow-red: 0 0 6px rgba(204, 34, 34, 0.5), 0 0 20px rgba(204, 34, 34, 0.15);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: unset;
    }

    body {
      background: var(--noir-bg-void);
      color: var(--noir-text-primary);
      font-family: 'VT323', monospace;
      font-size: 1.25rem;
      line-height: 1.8;
      image-rendering: pixelated;
    }

    h1, h2, h3, h4 {
      font-family: 'Press Start 2P', monospace;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 2;
    }

    a {
      color: var(--noir-amber);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s;
    }

    a:hover {
      border-bottom-color: var(--noir-amber);
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ---------- NAVIGATION ---------- */

    nav {
      background: var(--noir-bg-soot);
      border-bottom: 2px solid var(--noir-bg-gunmetal);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 960px;
      margin: 0 auto;
      padding: 12px 24px;
    }

    .logo {
      font-family: 'Press Start 2P', monospace;
      font-size: 0.7rem;
      color: var(--noir-amber);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      text-shadow: 2px 2px 0 #080808;
      border-bottom: none;
    }

    .logo:hover {
      border-bottom: none;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Silkscreen', monospace;
      font-size: 0.75rem;
      color: var(--noir-text-secondary);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 0;
      border-bottom: 2px solid transparent;
      transition: color 0.2s, border-color 0.2s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--noir-amber);
      border-bottom-color: var(--noir-amber);
    }

    /* ---------- HERO ---------- */

    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 24px;
      overflow: hidden;
    }

    /* Scan lines */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(200, 192, 176, 0.015) 2px,
        rgba(200, 192, 176, 0.015) 4px
      );
      pointer-events: none;
      z-index: 2;
    }

    /* Venetian blind shadows */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent 0px,
        transparent 20px,
        rgba(0, 0, 0, 0.3) 20px,
        rgba(0, 0, 0, 0.3) 28px
      );
      transform: skewY(-5deg);
      pointer-events: none;
      z-index: 1;
      opacity: 0.35;
    }

    .hero-content {
      position: relative;
      z-index: 3;
      max-width: 680px;
    }

    .hero-content h1 {
      font-size: clamp(1.2rem, 3.5vw, 2rem);
      color: var(--noir-amber);
      text-shadow: 3px 3px 0 #080808, 0 0 12px rgba(212, 160, 32, 0.2);
      margin-bottom: 2rem;
    }

    .hero-content .tagline {
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      color: var(--noir-text-secondary);
      margin-bottom: 2.5rem;
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn {
      display: inline-block;
      background: transparent;
      color: var(--noir-amber);
      border: 2px solid var(--noir-amber);
      padding: 12px 28px;
      font-family: 'Press Start 2P', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      box-shadow: 4px 4px 0 var(--noir-bg-gunmetal);
    }

    .btn:hover {
      background: var(--noir-amber);
      color: var(--noir-bg-void);
      box-shadow: var(--noir-glow-amber);
      border-bottom-color: var(--noir-amber);
    }

    .btn:active {
      transform: translate(4px, 4px);
      box-shadow: none;
    }

    .btn--danger {
      color: var(--noir-neon-red);
      border-color: var(--noir-neon-red);
      box-shadow: 4px 4px 0 var(--noir-bg-gunmetal);
    }

    .btn--danger:hover {
      background: var(--noir-neon-red);
      color: var(--noir-bg-void);
      box-shadow: var(--noir-glow-red);
    }

    /* ---------- DITHERED DIVIDER ---------- */

    .dither-divider {
      height: 8px;
      background-color: var(--noir-bg-void);
      background-image:
        linear-gradient(45deg,
          var(--noir-bg-soot) 25%, transparent 25%,
          transparent 75%, var(--noir-bg-soot) 75%),
        linear-gradient(45deg,
          var(--noir-bg-soot) 25%, transparent 25%,
          transparent 75%, var(--noir-bg-soot) 75%);
      background-size: 4px 4px;
      background-position: 0 0, 2px 2px;
    }

    /* ---------- CASE FILES SECTION ---------- */

    .case-files {
      padding: 64px 0;
    }

    .case-files h2 {
      font-size: 0.85rem;
      color: var(--noir-text-primary);
      margin-bottom: 8px;
    }

    .case-files .subtitle {
      font-family: 'VT323', monospace;
      font-size: 1.1rem;
      color: var(--noir-text-secondary);
      margin-bottom: 40px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--noir-bg-gunmetal);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }

    .card {
      background: var(--noir-bg-soot);
      border: 1px solid var(--noir-bg-gunmetal);
      padding: 24px;
      position: relative;
      transition: border-color 0.2s;
    }

    .card:hover {
      border-color: var(--noir-amber);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 8px;
      height: 8px;
      border-top: 2px solid var(--noir-amber);
      border-left: 2px solid var(--noir-amber);
    }

    .card::after {
      content: '';
      position: absolute;
      bottom: 4px;
      right: 4px;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid var(--noir-amber);
      border-right: 2px solid var(--noir-amber);
    }

    .card-label {
      font-family: 'Silkscreen', monospace;
      font-size: 0.7rem;
      color: var(--noir-amber);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }

    .card h3 {
      font-size: 0.65rem;
      color: var(--noir-text-primary);
      margin-bottom: 12px;
    }

    .card p {
      font-size: 1.1rem;
      color: var(--noir-text-secondary);
      line-height: 1.6;
    }

    .card-status {
      display: inline-block;
      font-family: 'Silkscreen', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 8px;
      margin-top: 16px;
      border: 1px solid;
    }

    .card-status--open {
      color: var(--noir-neon-red);
      border-color: var(--noir-neon-red);
    }

    .card-status--closed {
      color: var(--noir-green);
      border-color: var(--noir-green);
    }

    .card-status--cold {
      color: var(--noir-rain-blue);
      border-color: var(--noir-rain-blue);
    }

    /* ---------- NARRATIVE SECTION ---------- */

    .narrative {
      padding: 64px 0;
      max-width: 640px;
      margin: 0 auto;
    }

    .narrative h2 {
      font-size: 0.85rem;
      color: var(--noir-amber);
      margin-bottom: 24px;
    }

    .narrative p {
      margin-bottom: 1.5rem;
      color: var(--noir-text-primary);
    }

    .narrative blockquote {
      border-left: 3px solid var(--noir-amber);
      padding-left: 20px;
      margin: 24px 0;
      color: var(--noir-text-secondary);
      font-style: italic;
    }

    /* ---------- EVIDENCE TABLE ---------- */

    .evidence {
      padding: 64px 0;
    }

    .evidence h2 {
      font-size: 0.85rem;
      color: var(--noir-text-primary);
      margin-bottom: 24px;
    }

    .noir-table {
      width: 100%;
      border-collapse: collapse;
      font-family: 'VT323', monospace;
      font-size: 1.1rem;
    }

    .noir-table th {
      font-family: 'Silkscreen', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--noir-amber);
      text-align: left;
      padding: 12px 16px;
      border-bottom: 2px solid var(--noir-bg-gunmetal);
    }

    .noir-table td {
      padding: 10px 16px;
      color: var(--noir-text-primary);
      border-bottom: 1px solid var(--noir-bg-gunmetal);
    }

    .noir-table tr:hover td {
      background: rgba(212, 160, 32, 0.03);
    }

    /* ---------- CTA SECTION ---------- */

    .cta {
      text-align: center;
      padding: 64px 24px;
      position: relative;
    }

    /* Dithered background */
    .cta::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--noir-bg-void);
      background-image:
        linear-gradient(45deg,
          var(--noir-bg-soot) 25%, transparent 25%,
          transparent 75%, var(--noir-bg-soot) 75%),
        linear-gradient(45deg,
          var(--noir-bg-soot) 25%, transparent 25%,
          transparent 75%, var(--noir-bg-soot) 75%);
      background-size: 4px 4px;
      background-position: 0 0, 2px 2px;
      z-index: 0;
    }

    .cta > * {
      position: relative;
      z-index: 1;
    }

    .cta h2 {
      font-size: 0.85rem;
      color: var(--noir-neon-red);
      text-shadow: 0 0 8px rgba(204, 34, 34, 0.3);
      margin-bottom: 16px;
    }

    .cta p {
      color: var(--noir-text-secondary);
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }

    /* ---------- FOOTER ---------- */

    footer {
      border-top: 2px solid var(--noir-bg-gunmetal);
      padding: 24px;
      text-align: center;
    }

    .footer-inner {
      max-width: 960px;
      margin: 0 auto;
      font-family: 'Silkscreen', monospace;
      font-size: 0.65rem;
      color: var(--noir-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .footer-inner .case-number {
      color: var(--noir-fog);
    }

    /* ---------- NEON FLICKER ---------- */

    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
        text-shadow: 0 0 4px var(--noir-neon-red),
                     0 0 12px rgba(204, 34, 34, 0.4);
      }
      20%, 24%, 55% {
        opacity: 0.7;
        text-shadow: none;
      }
    }

    .neon-flicker {
      animation: flicker 4s infinite;
    }

    /* ---------- CRT VIGNETTE ---------- */

    .vignette {
      position: fixed;
      inset: 0;
      background: radial-gradient(
        ellipse at center,
        transparent 60%,
        rgba(8, 8, 8, 0.5) 100%
      );
      pointer-events: none;
      z-index: 9999;
    }

    /* ---------- RESPONSIVE ---------- */

    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding: 48px 16px;
      }

      .nav-inner {
        flex-direction: column;
        gap: 12px;
      }

      .nav-links {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .noir-table {
        font-size: 1rem;
      }

      .noir-table th,
      .noir-table td {
        padding: 8px;
      }
    }

    @media (max-width: 480px) {
      .hero-content h1 {
        font-size: 0.9rem;
      }

      .hero-content .tagline {
        font-size: 1.1rem;
      }

      .btn {
        padding: 10px 20px;
        font-size: 0.5rem;
      }
    }
  </style>
</head>
<body>

  <!-- CRT Vignette Overlay -->
  <div class="vignette"></div>

  <!-- Navigation -->
  <nav>
    <div class="nav-inner">
      <a href="#" class="logo">Shade City</a>
      <ul class="nav-links">
        <li><a href="#cases" class="active">Cases</a></li>
        <li><a href="#narrative">Dispatch</a></li>
        <li><a href="#evidence">Evidence</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>The rain never stops in this city</h1>
      <p class="tagline">
        Private investigations. Missing persons. Corporate secrets.
        Every case has a price. Every shadow hides a story.
      </p>
      <a href="#cases" class="btn">Open case file</a>
    </div>
  </section>

  <!-- Dithered Divider -->
  <div class="dither-divider"></div>

  <!-- Case Files Section -->
  <section class="case-files" id="cases">
    <div class="container">
      <h2>Active case files</h2>
      <p class="subtitle">
        // Case archive -- Shade City Private Investigations
      </p>
      <div class="card-grid">

        <div class="card">
          <div class="card-label">Case #0041</div>
          <h3>The Vanishing Witness</h3>
          <p>
            Key witness in the Mallory embezzlement case disappeared from
            a locked apartment on 5th and Vine. No signs of forced entry.
            Neighbors heard nothing but rain.
          </p>
          <span class="card-status card-status--open">Open</span>
        </div>

        <div class="card">
          <div class="card-label">Case #0038</div>
          <h3>Neon District Forgeries</h3>
          <p>
            Series of counterfeit documents circulating through the harbor
            district. Paper stock traced to a decommissioned print shop
            on Water Street.
          </p>
          <span class="card-status card-status--open">Open</span>
        </div>

        <div class="card">
          <div class="card-label">Case #0035</div>
          <h3>The Ashworth Letters</h3>
          <p>
            Anonymous letters threatening city councilwoman Ashworth.
            Typewriter analysis matches a 1947 Remington. Only six
            known registered owners remain in the city.
          </p>
          <span class="card-status card-status--cold">Cold</span>
        </div>

        <div class="card">
          <div class="card-label">Case #0029</div>
          <h3>Dockside Double Cross</h3>
          <p>
            Insurance fraud at the harbor. Cargo manifest discrepancies
            point to systematic rerouting. Trail leads to the shipping
            magnate's private office.
          </p>
          <span class="card-status card-status--closed">Closed</span>
        </div>

      </div>
    </div>
  </section>

  <!-- Dithered Divider -->
  <div class="dither-divider"></div>

  <!-- Narrative Section -->
  <section class="narrative" id="narrative">
    <div class="container">
      <h2>// Field Dispatch</h2>
      <p>
        The call came in at 2 AM. That is when they always come. Nobody
        calls a private investigator during business hours -- those people
        have lawyers. The ones who call at 2 AM have problems that lawyers
        cannot fix.
      </p>
      <p>
        She said her name was Marlowe. I did not ask if it was real. In
        this line of work, you learn that names are just another kind of
        shadow -- they look solid until the light shifts.
      </p>
      <blockquote>
        "The city keeps its secrets in the spaces between streetlights.
        You have to learn to read the dark."
      </blockquote>
      <p>
        I took the case. I always take the case. The rent does not pay
        itself, and curiosity is the only vice I have not managed to quit.
        Three days later I was standing in the rain outside a warehouse on
        the east side, watching a door that nobody was supposed to know
        about.
      </p>
    </div>
  </section>

  <!-- Dithered Divider -->
  <div class="dither-divider"></div>

  <!-- Evidence Table -->
  <section class="evidence" id="evidence">
    <div class="container">
      <h2>Evidence log</h2>
      <table class="noir-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matchbook (Club Paradox)</td>
            <td>Physical</td>
            <td>Apartment 4B</td>
            <td>Logged</td>
          </tr>
          <tr>
            <td>Typewritten letter fragment</td>
            <td>Document</td>
            <td>Waste bin, alley</td>
            <td>Analysis pending</td>
          </tr>
          <tr>
            <td>Photograph (dock, 3 subjects)</td>
            <td>Photo</td>
            <td>Hidden compartment</td>
            <td>Identified (2/3)</td>
          </tr>
          <tr>
            <td>Ledger pages (partial)</td>
            <td>Financial</td>
            <td>Print shop basement</td>
            <td>Cross-referencing</td>
          </tr>
          <tr>
            <td>Audio reel (conversation)</td>
            <td>Recording</td>
            <td>Office safe</td>
            <td>Transcribed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Dithered Divider -->
  <div class="dither-divider"></div>

  <!-- CTA Section -->
  <section class="cta" id="contact">
    <h2 class="neon-flicker">Got a case?</h2>
    <p>
      Leave a message at the front desk. I will find you.
    </p>
    <a href="#" class="btn btn--danger">Make contact</a>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <p>
        <span class="case-number">[Shade City Private Investigations]</span>
        // Est. 1947 // All records confidential
      </p>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use `image-rendering: pixelated` (or `-ms-interpolation-mode: nearest-neighbor` for IE) on all pixel art assets** to prevent browsers from smoothing scaled-up sprites with bilinear filtering; sharp, blocky edges are essential to the aesthetic
- **Build your dithering patterns in CSS** rather than as image files when possible; repeating-linear-gradient with 2-4px steps creates authentic checkerboard and ordered dither patterns that scale without artifacts
- **Set font sizes in pixel multiples (8px, 16px, 24px, 32px)** to keep bitmap fonts aligned to the pixel grid; avoid rem or em units that may produce fractional pixel values
- **Disable font smoothing** with `-webkit-font-smoothing: none` and `text-rendering: optimizeSpeed` to ensure bitmap fonts render with hard pixel edges rather than sub-pixel anti-aliased curves
- **Apply the CRT vignette as a fixed overlay** using `position: fixed` and `pointer-events: none` so it persists across scroll without interfering with interaction; use a radial-gradient from transparent center to dark edges
- **Keep animations to CSS only** -- subtle flicker effects, blinking cursors, and scan line shimmer can all be achieved with `@keyframes` and do not require JavaScript, reducing load and maintaining the stripped-down aesthetic
- **Test your palette for WCAG contrast compliance** -- noir palettes are inherently dark, so ensure your primary text color (bone/warm gray on near-black) achieves at least a 7:1 contrast ratio for body text and 4.5:1 for large headings
- **Use a 4px base grid for all spacing** -- margins, paddings, border widths, and element sizes should be multiples of 4px (or 8px for a coarser pixel feel), maintaining visual consistency with the low-resolution grid language
