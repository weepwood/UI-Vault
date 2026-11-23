# Future Primitive Design Reference

## Overview

Future Primitive is a speculative design aesthetic that fuses the raw, elemental visual language of prehistoric humanity with the sleek precision of advanced technology. It imagines a world where cave paintings flicker as holograms, where ochre pigment meets laser light, and where the oldest marks ever made by human hands are projected through the newest screens. The term draws from architect Sou Fujimoto's "Primitive Future" philosophy -- the idea that moving forward in design sometimes means returning to the most fundamental, intuitive spatial and visual impulses. In Fujimoto's work, the cave is not a relic but a prototype: an undefined, adaptable space that predates and outlasts any designed "nest." Future Primitive extends this logic to the entire visual surface, treating stone textures, hand-drawn marks, and earth pigments as first-class design materials placed in dialogue with holographic overlays, translucent glass panels, and generative geometry.

The color world is defined by the tension between two poles. On one side: the prehistoric palette of ochre, charcoal, raw sienna, burnt umber, and calcium white -- the same iron-oxide reds, manganese blacks, and goethite yellows found on the walls of Lascaux and Altamira. On the other side: cool holographic accents, spectral teals, phosphorescent greens, and plasma blues that suggest projected light and advanced display technology. Neither palette dominates; the aesthetic lives in their collision. Typography follows the same logic, pairing rough, hand-hewn display faces with clean geometric sans-serifs or monospaced fonts that evoke machine readouts. Layouts use organic, asymmetric compositions grounded by rigid grid structures -- irregular stone forms sitting inside precise wireframe scaffolding.

Future Primitive is not retro and not purely futuristic. It is simultaneously ancient and speculative, treating ten-thousand-year-old mark-making traditions as living technology. It appeals to brands and projects exploring sustainability, indigenous futurism, raw materiality, human-technology symbiosis, and the tension between nature and computation. The mood is reverent, austere, and slightly uncanny -- a campfire burning inside a server room.

---

## Visual Characteristics

### Core Design Traits

- **Earth-and-light duality** -- raw natural textures (stone, clay, bark, bone) juxtaposed with holographic glows and translucent overlays
- **Prehistoric mark-making** -- cave-painting-style hand-drawn lines, dot clusters, stenciled handprints, and abstract animal forms used as graphic elements
- **Holographic and spectral accents** -- thin luminous lines, gradient halos, and iridescent sheens layered over matte, tactile surfaces
- **Rough texture fields** -- background surfaces that feel like sandstone, dried earth, rough plaster, or charcoal-rubbed paper
- **Sacred and generative geometry** -- spirals, concentric circles, dot grids, and radial patterns referencing both petroglyphs and algorithmic generation
- **Exposed structural grids** -- faint wireframe scaffolding visible beneath organic compositions, suggesting the technological substrate
- **High contrast with muted midtones** -- deep charcoal blacks and bone whites anchor the palette, with earth tones filling the middle and neon accents punctuating selectively
- **Layered translucency** -- frosted glass panels and semi-transparent overlays that let rough textures bleed through from behind
- **Minimal but intentional ornamentation** -- every decorative mark references either a prehistoric motif or a technological diagram; nothing is purely decorative
- **Analog-digital tension in imagery** -- photography or illustration that combines handmade, imperfect marks with crisp vector geometry or pixel-precise grids
- **Monolithic spatial presence** -- large, weighty visual blocks that feel carved or erected rather than placed, evoking standing stones and megaliths

### Design Principles

- Treat the oldest human visual traditions as living, forward-looking technology -- not nostalgia
- Every surface should carry evidence of either the hand or the machine, ideally both simultaneously
- Light is always meaningful: it is either firelight (warm, flickering, organic) or projected light (cool, precise, spectral)
- Embrace asymmetry and organic irregularity, but anchor it within a visible structural grid
- Materials and textures should feel tangible even on screen -- the viewer should almost feel the grain of stone or the warmth of fired clay
- Reserve holographic and luminous accents for moments of emphasis; the dominant visual ground is always earth, not light
- Whitespace is not empty -- it is the cave wall waiting for a mark
- Design for reverence: the tone is contemplative, not aggressive or playful

---

## Color Palette

The Future Primitive palette draws its foundation from the exact pigments available to Paleolithic artists -- iron oxide reds, manganese blacks, calcium whites, and goethite yellows -- augmented by a secondary range of cool, spectral accents that represent projected holographic light. The result is a palette that feels simultaneously ancient and unearthly.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Cave Black** | `#1A1612` | Primary background, deepest ground layer |
| **Charcoal Ash** | `#2E2A25` | Card backgrounds, secondary surfaces |
| **Hearthstone** | `#3D3630` | Elevated panels, nav backgrounds |
| **Mammoth Bone** | `#E8DDD0` | Primary text on dark, bone-white surfaces |
| **Calcium Dust** | `#F5F0E8` | Light background variant, paper textures |
| **Raw Ochre** | `#C8923A` | Primary warm accent, headings, links |
| **Burnt Sienna** | `#A0522D` | Secondary warm accent, borders, icons |
| **Iron Oxide Red** | `#8B3A2A` | Emphasis, alerts, ritual marks |
| **Goethite Yellow** | `#D4A843` | Highlight, hover states, notification pips |
| **Manganese Black** | `#2C1E1E` | Deep accent black, text on light |
| **Holo Teal** | `#3AEDC4` | Primary cool accent, holographic elements |
| **Spectral Blue** | `#4A9FE5` | Secondary cool accent, links, data readouts |
| **Plasma Phosphor** | `#7BF5A5` | Success states, generative geometry lines |
| **Petroglyph Violet** | `#8B6FAE` | Tertiary accent, decorative geometry |
| **Ember Glow** | `#E8662A` | Warning states, fire-light transitions |

### CSS Custom Properties

```css
:root {
  /* Earth grounds */
  --fp-bg-cave: #1a1612;
  --fp-bg-charcoal: #2e2a25;
  --fp-bg-hearth: #3d3630;
  --fp-bg-bone: #e8ddd0;
  --fp-bg-calcium: #f5f0e8;

  /* Prehistoric pigments */
  --fp-ochre: #c8923a;
  --fp-sienna: #a0522d;
  --fp-oxide-red: #8b3a2a;
  --fp-goethite: #d4a843;
  --fp-manganese: #2c1e1e;
  --fp-ember: #e8662a;

  /* Holographic accents */
  --fp-holo-teal: #3aedc4;
  --fp-spectral-blue: #4a9fe5;
  --fp-plasma-green: #7bf5a5;
  --fp-petroglyph-violet: #8b6fae;

  /* Text */
  --fp-text-light: #e8ddd0;
  --fp-text-dark: #2c1e1e;
  --fp-text-muted: #8a7e72;

  /* Glows */
  --fp-glow-teal: 0 0 8px rgba(58, 237, 196, 0.4), 0 0 30px rgba(58, 237, 196, 0.1);
  --fp-glow-ochre: 0 0 8px rgba(200, 146, 58, 0.4), 0 0 30px rgba(200, 146, 58, 0.1);
  --fp-glow-ember: 0 0 8px rgba(232, 102, 42, 0.5), 0 0 30px rgba(232, 102, 42, 0.12);

  /* Borders */
  --fp-border-earth: 1px solid rgba(200, 146, 58, 0.2);
  --fp-border-holo: 1px solid rgba(58, 237, 196, 0.2);
}
```

---

## Typography

### Typeface Characteristics

Future Primitive typography embodies the aesthetic's central tension. Display and heading fonts should feel carved, hewn, or stamped -- suggesting letterforms chiseled into stone or pressed into wet clay. Body text, by contrast, should be clean and technically precise, evoking machine readouts or data inscriptions etched by laser. The interplay between rough, organic headings and crisp geometric body text mirrors the broader cave-meets-hologram duality.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Bungee Shade** | Layered, chiseled | Display headings, hero text, logos |
| **Righteous** | Rounded, bold, monumental | Section headings, subheadings |
| **Secular One** | Heavy, condensed, slab-like | Headlines, navigation labels |
| **Archivo Black** | Dense, sturdy, geometric | Headings, buttons, display text |
| **Chakra Petch** | Angular, semi-futuristic | Subheadings, UI labels, metadata |
| **IBM Plex Mono** | Clean monospace | Body text, data readouts, code |
| **Space Grotesk** | Geometric sans-serif | Body text, paragraphs, captions |
| **Caveat** | Handwritten, organic | Annotations, decorative labels, asides |
| **DM Sans** | Clean geometric sans | Secondary body text, interface labels |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Archivo Black** (400) | **Space Grotesk** (400) | Monolithic headings, clean body -- carved stone meets laser print |
| **Secular One** (400) | **IBM Plex Mono** (400) | Heavy slab headings with technical readout body -- megalith meets machine |
| **Righteous** (400) | **DM Sans** (400) | Rounded monumental headings, neutral body -- standing stone meets data stream |
| **Bungee Shade** (400) | **Space Grotesk** (400) | Layered chiseled display, geometric body -- petroglyph meets hologram |
| **Chakra Petch** (600) | **IBM Plex Mono** (400) | Angular semi-tech headings, monospace body -- blade and circuit |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@400;600&display=swap');

/* Headings -- carved, monumental */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Archivo Black', 'Secular One', sans-serif;
  font-weight: 400;
  color: var(--fp-text-light);
  line-height: 1.15;
  letter-spacing: 0.02em;
}

/* Display / Hero text with warm glow */
.fp-display {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  color: var(--fp-ochre);
  text-shadow: 0 0 20px rgba(200, 146, 58, 0.3), 0 0 60px rgba(200, 146, 58, 0.08);
  line-height: 1.05;
}

/* Body text -- clean, precise */
body {
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--fp-text-light);
}

/* Annotation / handmade labels */
.fp-annotation {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  color: var(--fp-ochre);
  letter-spacing: 0.02em;
}

/* Technical readout text */
.fp-data {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
  color: var(--fp-holo-teal);
  line-height: 1.6;
  letter-spacing: 0.03em;
}

/* UI labels -- angular and compact */
.fp-label {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fp-text-muted);
}
```

---

## Layout Principles

- **Earth-ground canvas** -- the background is never sterile white or pure black; it is warm charcoal, sandstone, or dried clay, textured with noise or grain
- **Monolithic content blocks** -- sections should feel heavy and placed, like standing stones or dolmens; generous padding and defined edges create architectural weight
- **Visible wireframe underlayer** -- faint grid lines, dot grids, or concentric-circle patterns sit beneath content, suggesting the holographic infrastructure beneath the earth surface
- **Organic asymmetry within rigid grids** -- content areas can be irregular or off-center, but they are positioned on a precise underlying grid that shows through subtly
- **Layered depth through translucency** -- semi-transparent panels (frosted glass, smoked quartz) float over textured backgrounds, letting the earth texture bleed through
- **Generous vertical rhythm** -- large section gaps and breathing room echo the scale of cave chambers and open landscapes; the layout should never feel cramped
- **Edge-to-edge texture, contained content** -- background textures and decorative marks run full bleed, but typographic content sits within a narrower centered column
- **Dual-tone sections** -- alternate between dark earth sections and light bone/calcium sections to create rhythm and prevent visual fatigue
- **Decorative marks as structural elements** -- cave-painting dots, handprint stencils, and petroglyph spirals are used as section dividers, bullet markers, and decorative accents rather than traditional lines or icons
- **Focal holographic moments** -- one or two elements per section receive the holographic treatment (a glowing border, a spectral gradient, a teal text-shadow) while the rest remains earth-grounded
- **Responsive degradation preserves texture** -- on smaller screens, reduce holographic effects and grid overlays but always preserve the earth-tone palette and textural backgrounds

---

## CSS / Design Techniques

### Future Primitive Card Component

```css
.fp-card {
  background: rgba(61, 54, 48, 0.7);
  border: 1px solid rgba(200, 146, 58, 0.15);
  border-radius: 2px;
  padding: 32px;
  position: relative;
  backdrop-filter: blur(6px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.fp-card:hover {
  border-color: rgba(58, 237, 196, 0.3);
  box-shadow: var(--fp-glow-teal);
}

/* Petroglyph corner marks */
.fp-card::before,
.fp-card::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--fp-ochre);
  border-style: solid;
  opacity: 0.5;
  transition: opacity 0.3s ease, border-color 0.3s ease;
}

.fp-card::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.fp-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

.fp-card:hover::before,
.fp-card:hover::after {
  border-color: var(--fp-holo-teal);
  opacity: 0.8;
}

/* Card grid */
.fp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

### Future Primitive Button

```css
.fp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--fp-ochre);
  border: 2px solid var(--fp-ochre);
  padding: 14px 36px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  transition: all 0.35s ease;
}

.fp-button:hover {
  background: var(--fp-ochre);
  color: var(--fp-bg-cave);
  box-shadow: var(--fp-glow-ochre);
}

/* Holographic variant */
.fp-button--holo {
  color: var(--fp-holo-teal);
  border-color: var(--fp-holo-teal);
}

.fp-button--holo:hover {
  background: var(--fp-holo-teal);
  color: var(--fp-bg-cave);
  box-shadow: var(--fp-glow-teal);
}

/* Filled earth variant */
.fp-button--earth {
  background: var(--fp-sienna);
  color: var(--fp-text-light);
  border-color: var(--fp-sienna);
}

.fp-button--earth:hover {
  filter: brightness(1.15);
  box-shadow: 0 0 12px rgba(160, 82, 45, 0.4);
}
```

### Navigation Bar

```css
.fp-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 40px;
  background: rgba(26, 22, 18, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(200, 146, 58, 0.12);
}

.fp-nav__logo {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.15rem;
  color: var(--fp-ochre);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-shadow: 0 0 6px rgba(200, 146, 58, 0.25);
}

.fp-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.fp-nav__links a {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--fp-text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.25s ease, text-shadow 0.25s ease;
}

.fp-nav__links a:hover,
.fp-nav__links a.active {
  color: var(--fp-holo-teal);
  text-shadow: 0 0 6px rgba(58, 237, 196, 0.3);
}
```

### Hero Section

```css
.fp-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 40px;
  background: var(--fp-bg-cave);
  overflow: hidden;
}

/* Stone texture grain overlay */
.fp-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Holographic dot grid underlay */
.fp-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(58, 237, 196, 0.08) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

.fp-hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.fp-hero__content h1 {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  color: var(--fp-ochre);
  text-shadow: 0 0 30px rgba(200, 146, 58, 0.3), 0 0 80px rgba(200, 146, 58, 0.08);
  margin-bottom: 1.5rem;
  line-height: 1.05;
}

.fp-hero__content p {
  font-size: 1.1rem;
  color: var(--fp-text-muted);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .fp-hero {
    min-height: auto;
    padding: 60px 20px;
  }
}
```

### Cave Painting Divider

```css
.fp-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 0;
  color: var(--fp-ochre);
  opacity: 0.4;
}

.fp-divider::before,
.fp-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--fp-ochre),
    transparent
  );
}

/* Spiral petroglyph center mark */
.fp-divider__mark {
  width: 24px;
  height: 24px;
  border: 2px solid var(--fp-ochre);
  border-radius: 50%;
  position: relative;
}

.fp-divider__mark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--fp-ochre);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
```

### Holographic Overlay Panel

```css
.fp-holo-panel {
  background: linear-gradient(
    135deg,
    rgba(58, 237, 196, 0.05),
    rgba(74, 159, 229, 0.05),
    rgba(139, 111, 174, 0.05)
  );
  border: 1px solid rgba(58, 237, 196, 0.12);
  border-radius: 2px;
  padding: 32px;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
}

/* Iridescent shimmer on hover */
.fp-holo-panel::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(58, 237, 196, 0.06),
    transparent,
    rgba(74, 159, 229, 0.06),
    transparent,
    rgba(139, 111, 174, 0.06),
    transparent
  );
  animation: fp-shimmer 12s linear infinite;
  pointer-events: none;
}

@keyframes fp-shimmer {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Stone Texture Background

```css
.fp-stone-bg {
  background-color: var(--fp-bg-charcoal);
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  position: relative;
}

/* Optional: warmer stone variant */
.fp-stone-bg--warm {
  background-color: var(--fp-bg-hearth);
}

/* Light bone variant for alternating sections */
.fp-stone-bg--light {
  background-color: var(--fp-bg-calcium);
}
```

### Petroglyph Animation

```css
@keyframes fp-etch {
  0% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.fp-petroglyph svg path {
  stroke: var(--fp-ochre);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: fp-etch 4s ease-out forwards;
}

/* Holographic variant draws in teal */
.fp-petroglyph--holo svg path {
  stroke: var(--fp-holo-teal);
  filter: drop-shadow(0 0 4px rgba(58, 237, 196, 0.3));
}
```

---

## Design Do's and Don'ts

### Do

- Use warm, textured backgrounds (stone grain, noise overlays, earth-toned surfaces) as the primary visual ground
- Apply holographic accents sparingly and purposefully -- they should feel like projected light landing on a cave wall, not a rave
- Mix hand-drawn, organic marks (dots, spirals, handprints) with precise geometric grids and wireframes
- Pair heavy, monumental heading fonts with clean, technical body fonts to embody the raw-meets-refined tension
- Use the prehistoric pigment palette (ochre, sienna, oxide red, charcoal) as the dominant color range and reserve cool spectral tones for interactive accents
- Create layered depth through semi-transparent panels that let background textures show through
- Reference real cave-painting conventions: negative handprints, dot clusters, abstracted animal silhouettes, concentric circles
- Ensure text contrast meets accessibility standards -- ochre on charcoal and teal on dark earth both need careful calibration

### Don't

- Use pure white (#ffffff) or pure black (#000000) backgrounds -- they are too sterile and break the earthen atmosphere
- Overload the interface with holographic effects -- if everything glows, the primal ground is lost
- Use cute, rounded, or playful typefaces -- the tone is reverent and monumental, not whimsical
- Treat the "primitive" element as decoration or costume -- cave-painting marks should be structurally integrated, not scattered randomly
- Apply drop shadows or traditional card elevation -- depth comes from translucency and texture layering, not Material-style shadows
- Mix in bright, saturated hues outside the defined palette -- no candy pink, electric yellow, or stock-photo blue
- Use stock photography of caves or "tribal" imagery as background images -- this risks superficiality and cultural appropriation
- Forget the duality: a design that is all earth with no tech, or all hologram with no earth, is not Future Primitive

---

## Related Aesthetics

| Aesthetic | Relationship to Future Primitive |
|-----------|----------------------------------|
| **Afrofuturism** | Shares the fusion of ancestral visual language with speculative technology, but Afrofuturism centers the African diaspora experience specifically |
| **Cyberpunk** | Both use holographic overlays on dark grounds, but Cyberpunk is urban-synthetic while Future Primitive is earth-organic |
| **Wabi-Sabi** | Shares the reverence for imperfection, natural materials, and patina, but lacks the technological overlay |
| **Brutalism (web)** | Both favor raw, heavy, unpolished surfaces and exposed structure, but Brutalism is concrete-industrial, not earth-organic |
| **Earth Tones** | Shares the warm natural palette but has no futuristic or speculative component |
| **Japandi** | Shares the tension between raw materiality and minimal precision, but Japandi is domestic and quiet, not monumental |
| **Neo-Tribal / Cybersigilism** | Shares the fusion of tribal mark-making with contemporary tech aesthetics, but Cybersigilism is dark, sharp, and aggressive |
| **Solarpunk** | Both imagine positive human-technology-nature futures, but Solarpunk is green and optimistic while Future Primitive is austere and reverent |
| **Dark Academia** | Both value ancient knowledge and patinated surfaces, but Dark Academia is literary-European, not prehistoric-universal |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Future Primitive</title>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@400;600&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       FUTURE PRIMITIVE -- Quick-Start Template
       Cave-art meets hologram. Raw meets refined.
       ============================================ */

    :root {
      /* Earth grounds */
      --fp-bg-cave: #1a1612;
      --fp-bg-charcoal: #2e2a25;
      --fp-bg-hearth: #3d3630;
      --fp-bg-bone: #e8ddd0;
      --fp-bg-calcium: #f5f0e8;

      /* Prehistoric pigments */
      --fp-ochre: #c8923a;
      --fp-sienna: #a0522d;
      --fp-oxide-red: #8b3a2a;
      --fp-goethite: #d4a843;
      --fp-manganese: #2c1e1e;
      --fp-ember: #e8662a;

      /* Holographic accents */
      --fp-holo-teal: #3aedc4;
      --fp-spectral-blue: #4a9fe5;
      --fp-plasma-green: #7bf5a5;
      --fp-petroglyph-violet: #8b6fae;

      /* Text */
      --fp-text-light: #e8ddd0;
      --fp-text-dark: #2c1e1e;
      --fp-text-muted: #8a7e72;

      /* Glows */
      --fp-glow-teal: 0 0 8px rgba(58, 237, 196, 0.4), 0 0 30px rgba(58, 237, 196, 0.1);
      --fp-glow-ochre: 0 0 8px rgba(200, 146, 58, 0.4), 0 0 30px rgba(200, 146, 58, 0.1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--fp-bg-cave);
      color: var(--fp-text-light);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem;
      line-height: 1.75;
    }

    h1, h2, h3, h4 {
      font-family: 'Archivo Black', sans-serif;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: 0.02em;
    }

    /* ---- NAVIGATION ---- */

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      margin: 0 auto;
      padding: 18px 40px;
      border-bottom: 1px solid rgba(200, 146, 58, 0.12);
    }

    nav a.logo {
      font-family: 'Archivo Black', sans-serif;
      font-size: 1.15rem;
      color: var(--fp-ochre);
      text-decoration: none;
      letter-spacing: 0.08em;
      text-shadow: 0 0 6px rgba(200, 146, 58, 0.25);
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      color: var(--fp-text-muted);
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      transition: color 0.25s, text-shadow 0.25s;
    }

    nav ul a:hover {
      color: var(--fp-holo-teal);
      text-shadow: 0 0 6px rgba(58, 237, 196, 0.3);
    }

    /* ---- HERO SECTION ---- */

    .hero {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 90vh;
      padding: 100px 40px;
      overflow: hidden;
    }

    /* Stone grain overlay */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 1;
    }

    /* Holographic dot grid */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        rgba(58, 237, 196, 0.06) 1px,
        transparent 1px
      );
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 1;
      opacity: 0.5;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      color: var(--fp-ochre);
      text-shadow: 0 0 30px rgba(200, 146, 58, 0.3), 0 0 80px rgba(200, 146, 58, 0.08);
      margin-bottom: 1.5rem;
      line-height: 1.05;
    }

    .hero .subtitle {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.9rem;
      color: var(--fp-holo-teal);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-shadow: 0 0 8px rgba(58, 237, 196, 0.2);
    }

    .hero p {
      color: var(--fp-text-muted);
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 2.5rem;
    }

    .btn {
      display: inline-block;
      background: transparent;
      color: var(--fp-ochre);
      border: 2px solid var(--fp-ochre);
      padding: 14px 40px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.35s;
    }

    .btn:hover {
      background: var(--fp-ochre);
      color: var(--fp-bg-cave);
      box-shadow: 0 0 8px rgba(200, 146, 58, 0.4), 0 0 30px rgba(200, 146, 58, 0.1);
    }

    .btn--holo {
      color: var(--fp-holo-teal);
      border-color: var(--fp-holo-teal);
      margin-left: 16px;
    }

    .btn--holo:hover {
      background: var(--fp-holo-teal);
      color: var(--fp-bg-cave);
      box-shadow: var(--fp-glow-teal);
    }

    /* ---- DIVIDER ---- */

    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 24px 40px;
      opacity: 0.35;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--fp-ochre), transparent);
    }

    .divider span {
      width: 10px;
      height: 10px;
      border: 2px solid var(--fp-ochre);
      border-radius: 50%;
    }

    /* ---- FEATURES / PRINCIPLES SECTION ---- */

    .features {
      padding: 80px 0;
      background: var(--fp-bg-charcoal);
      position: relative;
    }

    /* Subtle noise on section */
    .features::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .features h2 {
      text-align: center;
      font-size: 2rem;
      color: var(--fp-text-light);
      margin-bottom: 12px;
      position: relative;
    }

    .features .section-subtitle {
      text-align: center;
      font-family: 'Caveat', cursive;
      font-size: 1.15rem;
      color: var(--fp-ochre);
      margin-bottom: 48px;
      position: relative;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
    }

    .feature {
      background: rgba(26, 22, 18, 0.6);
      border: 1px solid rgba(200, 146, 58, 0.1);
      padding: 32px;
      position: relative;
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    .feature:hover {
      border-color: rgba(58, 237, 196, 0.25);
      box-shadow: 0 0 12px rgba(58, 237, 196, 0.08);
    }

    /* Corner marks */
    .feature::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      width: 16px;
      height: 16px;
      border-top: 2px solid var(--fp-ochre);
      border-left: 2px solid var(--fp-ochre);
      opacity: 0.4;
      transition: opacity 0.3s, border-color 0.3s;
    }

    .feature:hover::before {
      border-color: var(--fp-holo-teal);
      opacity: 0.7;
    }

    .feature-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--fp-holo-teal);
      margin-bottom: 14px;
      text-shadow: 0 0 4px rgba(58, 237, 196, 0.2);
    }

    .feature h3 {
      font-size: 1.15rem;
      color: var(--fp-text-light);
      margin-bottom: 0.75rem;
    }

    .feature p {
      color: var(--fp-text-muted);
      font-size: 0.95rem;
    }

    /* ---- LIGHT SECTION (bone/calcium) ---- */

    .light-section {
      background: var(--fp-bg-calcium);
      color: var(--fp-text-dark);
      padding: 80px 40px;
      text-align: center;
    }

    .light-section h2 {
      color: var(--fp-manganese);
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .light-section .section-subtitle {
      font-family: 'Caveat', cursive;
      font-size: 1.15rem;
      color: var(--fp-sienna);
      margin-bottom: 40px;
    }

    .light-section p {
      color: #5a4f44;
      max-width: 700px;
      margin: 0 auto 2rem;
      font-size: 1.05rem;
    }

    .light-section .btn {
      color: var(--fp-sienna);
      border-color: var(--fp-sienna);
    }

    .light-section .btn:hover {
      background: var(--fp-sienna);
      color: var(--fp-bg-calcium);
    }

    /* ---- GALLERY / ARTIFACTS SECTION ---- */

    .artifacts {
      padding: 80px 0;
      background: var(--fp-bg-cave);
    }

    .artifacts h2 {
      text-align: center;
      font-size: 2rem;
      color: var(--fp-text-light);
      margin-bottom: 12px;
    }

    .artifacts .section-subtitle {
      text-align: center;
      font-family: 'Caveat', cursive;
      font-size: 1.15rem;
      color: var(--fp-holo-teal);
      margin-bottom: 48px;
    }

    .artifacts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .artifact {
      aspect-ratio: 1;
      background: var(--fp-bg-hearth);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      position: relative;
      overflow: hidden;
      transition: background 0.3s;
    }

    .artifact:hover {
      background: var(--fp-bg-charcoal);
    }

    .artifact-icon {
      font-size: 2.5rem;
      margin-bottom: 12px;
      color: var(--fp-ochre);
      transition: color 0.3s, text-shadow 0.3s;
    }

    .artifact:hover .artifact-icon {
      color: var(--fp-holo-teal);
      text-shadow: 0 0 8px rgba(58, 237, 196, 0.4);
    }

    .artifact-title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--fp-text-muted);
    }

    /* ---- CTA SECTION ---- */

    .cta {
      text-align: center;
      padding: 100px 40px;
      background: var(--fp-bg-charcoal);
      position: relative;
    }

    /* Holographic radial pulse */
    .cta::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 500px;
      transform: translate(-50%, -50%);
      background: radial-gradient(
        circle,
        rgba(58, 237, 196, 0.04) 0%,
        transparent 70%
      );
      pointer-events: none;
    }

    .cta h2 {
      font-size: 2.2rem;
      color: var(--fp-holo-teal);
      text-shadow: 0 0 15px rgba(58, 237, 196, 0.3);
      margin-bottom: 1rem;
      position: relative;
    }

    .cta p {
      color: var(--fp-text-muted);
      margin-bottom: 2rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }

    .cta .btn {
      position: relative;
      color: var(--fp-holo-teal);
      border-color: var(--fp-holo-teal);
    }

    .cta .btn:hover {
      background: var(--fp-holo-teal);
      color: var(--fp-bg-cave);
      box-shadow: var(--fp-glow-teal);
    }

    /* ---- FOOTER ---- */

    footer {
      border-top: 1px solid rgba(200, 146, 58, 0.1);
      text-align: center;
      padding: 32px 40px;
      color: var(--fp-text-muted);
      font-size: 0.8rem;
      font-family: 'IBM Plex Mono', monospace;
    }

    footer span {
      color: var(--fp-ochre);
      opacity: 0.6;
    }

    /* ---- RESPONSIVE ---- */

    @media (max-width: 768px) {
      nav {
        padding: 14px 20px;
        flex-wrap: wrap;
        gap: 12px;
      }
      nav ul { gap: 16px; }
      .hero { min-height: auto; padding: 60px 20px; }
      .features-grid,
      .artifacts-grid { padding: 0 20px; }
      .artifacts-grid { grid-template-columns: repeat(2, 1fr); }
      .light-section,
      .cta { padding: 60px 20px; }
      .btn--holo { margin-left: 0; margin-top: 12px; }
    }

    @media (max-width: 480px) {
      .artifacts-grid { grid-template-columns: 1fr; }
      nav ul { gap: 12px; font-size: 0.75rem; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <a href="#" class="logo">Lithosphere</a>
    <ul>
      <li><a href="#">Origins</a></li>
      <li><a href="#">Artifacts</a></li>
      <li><a href="#">Signals</a></li>
      <li><a href="#">Archive</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="subtitle">// Transmission from the deep past</div>
      <h1>Where stone meets signal</h1>
      <p>We carry ten thousand years of mark-making in our hands. Future Primitive channels that impulse through holographic light -- ancient forms rendered in spectral frequencies.</p>
      <a href="#" class="btn">Enter the cave</a>
      <a href="#" class="btn btn--holo">Scan the grid</a>
    </div>
  </section>

  <!-- Divider -->
  <div class="divider">
    <span></span>
  </div>

  <!-- Features Section -->
  <section class="features">
    <h2>Core Principles</h2>
    <div class="section-subtitle">carved into the substrate</div>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-label">// principle.01</div>
        <h3>Raw Materiality</h3>
        <p>Every surface carries the grain of stone, the warmth of fired clay, or the roughness of charcoal. Digital polish yields to tactile honesty.</p>
      </div>
      <div class="feature">
        <div class="feature-label">// principle.02</div>
        <h3>Spectral Light</h3>
        <p>Holographic accents do not decorate -- they illuminate. Teal and plasma green emerge like bioluminescence in a dark cavern, marking paths and focal points.</p>
      </div>
      <div class="feature">
        <div class="feature-label">// principle.03</div>
        <h3>Adaptive Space</h3>
        <p>Inspired by Fujimoto's cave-over-nest philosophy: spaces are open, interpretable, and resist rigid prescription. The user defines the function.</p>
      </div>
      <div class="feature">
        <div class="feature-label">// principle.04</div>
        <h3>Ancestral Marks</h3>
        <p>Dots, spirals, handprints, and abstract silhouettes drawn from Paleolithic conventions serve as navigation, emphasis, and structural rhythm.</p>
      </div>
      <div class="feature">
        <div class="feature-label">// principle.05</div>
        <h3>Monolithic Scale</h3>
        <p>Sections feel placed like megaliths -- heavy, intentional, permanent. Generous spacing and architectural padding create chamber-like depth.</p>
      </div>
      <div class="feature">
        <div class="feature-label">// principle.06</div>
        <h3>Dual Temporality</h3>
        <p>Nothing here is purely old or purely new. Every element exists in two times at once -- the handprint and the hologram, the ochre and the algorithm.</p>
      </div>
    </div>
  </section>

  <!-- Light Section -->
  <section class="light-section">
    <h2>The Calcium Layer</h2>
    <div class="section-subtitle">light rises from bone and chalk</div>
    <p>Not every stratum is dark. The calcium deposits beneath the cave surface are pale, warm, and luminous. Future Primitive alternates between dark earth and light bone to create visual rhythm -- like moving between chambers.</p>
    <a href="#" class="btn">Explore the strata</a>
  </section>

  <!-- Artifacts Section -->
  <section class="artifacts">
    <h2>Signal Artifacts</h2>
    <div class="section-subtitle">holographic residues from the substrate</div>
    <div class="artifacts-grid">
      <div class="artifact">
        <div class="artifact-icon">&#9753;</div>
        <div class="artifact-title">Petroglyph</div>
      </div>
      <div class="artifact">
        <div class="artifact-icon">&#9700;</div>
        <div class="artifact-title">Handprint</div>
      </div>
      <div class="artifact">
        <div class="artifact-icon">&#10022;</div>
        <div class="artifact-title">Star Map</div>
      </div>
      <div class="artifact">
        <div class="artifact-icon">&#9081;</div>
        <div class="artifact-title">Spiral</div>
      </div>
      <div class="artifact">
        <div class="artifact-icon">&#9062;</div>
        <div class="artifact-title">Grid Scan</div>
      </div>
      <div class="artifact">
        <div class="artifact-icon">&#8859;</div>
        <div class="artifact-title">Focal Point</div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <h2>Transmit your mark</h2>
    <p>The cave wall is the first interface. The hologram is the latest. Future Primitive is the bridge between them.</p>
    <a href="#" class="btn">Begin the etch</a>
  </section>

  <!-- Footer -->
  <footer>
    <p><span>&#9753;</span> LITHOSPHERE SYSTEMS <span>//</span> Where stone meets signal <span>//</span> Built from ochre and light</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Texture is non-negotiable** -- use CSS noise filters, SVG `feTurbulence` overlays, or subtle background images to give every surface a tactile quality; flat untextured backgrounds will feel generic and defeat the aesthetic
- **Calibrate your earth-to-holo ratio** -- aim for roughly 80% earth-grounded elements to 20% holographic accents; the primal should dominate, with technology as punctuation
- **Test ochre-on-charcoal contrast** -- the default pairing of `#C8923A` on `#1A1612` yields roughly 5.8:1 contrast, which passes WCAG AA; verify your specific combinations with a contrast checker
- **Use SVG for cave-painting marks** -- hand-drawn spirals, dots, and silhouettes are best delivered as SVGs with stroke-dasharray animation for the "etching" reveal effect; raster images will look flat
- **Layer `backdrop-filter: blur()` carefully** -- it is the key to the frosted-cave-wall holographic panel effect, but it is GPU-intensive; limit to 2-3 blurred elements per viewport and provide a solid fallback
- **Animate sparingly and slowly** -- Future Primitive is contemplative; use long durations (3-6 seconds), ease-out curves, and subtle opacity transitions rather than fast, bouncy movements
- **Consider `prefers-reduced-motion`** -- disable the shimmer, etch, and floating particle animations for users who request reduced motion; the static design should be equally strong
- **Mind the cultural weight** -- prehistoric mark-making traditions belong to all of humanity, but specific iconography (Maori ta moko, Aboriginal dot painting, Pacific Northwest formline) belongs to living cultures; use abstract, universal marks unless collaborating directly with those communities
