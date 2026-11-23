# Crystal Core Design Reference

## Overview

Crystal Core is a gemstone- and mineral-inspired design aesthetic that draws its visual language from the translucent facets, prismatic light refractions, and rich color formations found in natural crystals such as amethyst, quartz, citrine, and sapphire. Born from the broader Crystalcore cultural movement -- which celebrates the mystical energy, healing symbolism, and raw geological beauty of mineral specimens -- Crystal Core translates these physical qualities into digital interfaces through faceted geometry, light-dispersing gradients, and jewel-toned color palettes.

At its heart, Crystal Core is about capturing the way light interacts with crystalline matter. When a beam of light enters a gemstone, it refracts, splits into spectral hues, and exits through angled facets in unpredictable, luminous patterns. This interplay of transparency, color dispersion, and geometric precision is the foundation of every Crystal Core design decision. Surfaces appear translucent rather than opaque. Colors shift from deep amethyst purples through rose quartz pinks to clear quartz whites, echoing the natural gradient banding found inside geodes. Edges are sharp and angular -- mimicking the planar cleavage of mineral crystals -- yet the overall impression remains elegant and precious rather than harsh.

The aesthetic occupies a unique space between the organic softness of nature-inspired design and the geometric rigor of faceted, low-polygon art. It borrows the translucency and layered depth of Glassmorphism, the luminous color work of Aurora Gradient design, and the angular geometry of low-poly illustration, but unifies them under a single material metaphor: the crystal itself. Where Glassmorphism simulates frosted glass and Aurora Gradient channels celestial light shows, Crystal Core grounds itself in geological reality -- the hexagonal lattice of quartz, the conchoidal fracture of obsidian, the banded color zones of agate.

Crystal Core interfaces feel precious, luminous, and grounded. They evoke the experience of holding a polished gemstone up to the light: there is depth beneath the surface, color that shifts with the viewing angle, and a quiet sense of ancient, earth-formed beauty translated into modern digital form.

---

## Visual Characteristics

### Core Design Traits

- **Faceted geometry** -- angular, polygon-based shapes that evoke the cut surfaces of gemstones; hexagons, triangles, and irregular polyhedra appear throughout layouts
- **Translucent layering** -- surfaces have variable opacity, revealing content or color beneath them like light passing through a thin crystal slab
- **Prismatic color dispersion** -- rainbow-spectrum accents and gradient edges simulate the way white light splits into spectral bands when passing through a prism
- **Jewel-toned depth** -- rich, saturated purples, pinks, blues, and golds drawn directly from amethyst, rose quartz, sapphire, and citrine
- **Internal luminescence** -- elements appear to glow from within, as if lit by light trapped inside a crystal cavity
- **Geode-inspired gradients** -- banded color transitions that mirror the concentric layers visible when a geode is cracked open
- **Sharp edges, soft light** -- the contrast between precise geometric forms and diffused, atmospheric lighting defines the aesthetic tension
- **Refraction highlights** -- subtle rainbow or spectral shimmer effects on edges and borders, simulating light bending at crystal facets
- **Mineral texture undertones** -- faint noise, grain, or fracture-line patterns that reference the natural imperfections in raw stone
- **Dark cavern backgrounds** -- deep, near-black or dark violet bases that make the luminous crystal elements feel like glowing specimens in a geode interior
- **Iridescent surface treatments** -- color-shifting hover states and animations that replicate the play-of-color seen in opal and labradorite

### Design Principles

- Let the crystal metaphor guide every decision: if it would not occur naturally in a mineral specimen, question whether it belongs
- Translucency creates depth; use variable opacity to establish hierarchy rather than relying solely on size and weight
- Prismatic color should accent, not overwhelm; reserve rainbow dispersion effects for focal points and interactive states
- Dark backgrounds are essential; luminous crystal surfaces lose their impact on light or white bases
- Angular geometry provides structure, but soften it with diffused light and gradient fills to avoid a cold, mechanical feel
- Every color in the palette should trace back to a real gemstone; this grounding in nature prevents the palette from feeling arbitrary
- Respect the interplay of transparency and occlusion: not everything should be see-through, or the layered effect collapses
- Performance matters; prismatic animations and translucent layers require GPU compositing, so use them purposefully

---

## Color Palette

The Crystal Core palette is drawn directly from the mineral kingdom. Each color is named for the gemstone it references, grounding the digital palette in geological reality. The range spans from the deep violet interior of an amethyst geode through the warm gold of citrine to the cool clarity of rock crystal quartz.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Amethyst Deep** | `#2D1854` | Deepest background, page base, geode interior |
| **Amethyst Core** | `#6B3FA0` | Primary brand purple, headings, key accents |
| **Amethyst Light** | `#9B72CF` | Secondary purple, hover states, tags |
| **Rose Quartz** | `#F7CAD0` | Soft pink accent, gentle highlights, badges |
| **Rose Quartz Deep** | `#D4849A` | Warm mid-tone pink, secondary interactive |
| **Smoky Quartz** | `#3B2F3D` | Elevated surface, card base, sidebar |
| **Clear Quartz** | `#F0EDF4` | Primary text on dark, bright highlights |
| **Citrine Gold** | `#E4D00A` | Warning state, premium accent, call-to-action glow |
| **Citrine Warm** | `#C9A227` | Secondary gold, icon accents, borders |
| **Sapphire** | `#1E3A6E` | Cool blue accent, info states, links |
| **Sapphire Light** | `#5B8DBE` | Light blue, secondary links, hover text |
| **Tourmaline Green** | `#1B8C6B` | Success state, positive indicators, growth accents |
| **Obsidian** | `#0D0A12` | True-dark base, footer, overlay backgrounds |
| **Opal Shimmer** | `#C8BFE7` | Muted lavender, secondary text, descriptions |
| **Prismatic White** | `#FAFBFF` | Maximum contrast text, bright display |

### CSS Custom Properties

```css
:root {
  /* Dark bases */
  --crystal-obsidian: #0d0a12;
  --crystal-amethyst-deep: #2d1854;
  --crystal-smoky-quartz: #3b2f3d;

  /* Amethyst spectrum */
  --crystal-amethyst-core: #6b3fa0;
  --crystal-amethyst-light: #9b72cf;

  /* Rose quartz */
  --crystal-rose-quartz: #f7cad0;
  --crystal-rose-quartz-deep: #d4849a;

  /* Citrine */
  --crystal-citrine-gold: #e4d00a;
  --crystal-citrine-warm: #c9a227;

  /* Cool tones */
  --crystal-sapphire: #1e3a6e;
  --crystal-sapphire-light: #5b8dbe;
  --crystal-tourmaline: #1b8c6b;

  /* Light / text */
  --crystal-clear-quartz: #f0edf4;
  --crystal-opal-shimmer: #c8bfe7;
  --crystal-prismatic-white: #fafbff;

  /* Signature gradients */
  --crystal-gradient-amethyst: linear-gradient(135deg, #2d1854, #6b3fa0, #9b72cf);
  --crystal-gradient-geode: linear-gradient(135deg, #2d1854, #6b3fa0, #d4849a, #f7cad0);
  --crystal-gradient-prismatic: linear-gradient(135deg, #6b3fa0, #5b8dbe, #1b8c6b, #e4d00a, #d4849a);
  --crystal-gradient-rose: linear-gradient(135deg, #d4849a, #f7cad0, #c8bfe7);

  /* Glass surfaces */
  --crystal-glass-bg: rgba(109, 63, 160, 0.08);
  --crystal-glass-border: rgba(200, 191, 231, 0.15);
  --crystal-glass-blur: 14px;

  /* Prismatic accent */
  --crystal-prismatic-border: linear-gradient(
    90deg,
    #6b3fa0,
    #5b8dbe,
    #1b8c6b,
    #e4d00a,
    #d4849a,
    #6b3fa0
  );
}
```

---

## Typography

Crystal Core typography balances the angular precision of faceted geometry with the elegance of fine jewelry design. Typefaces should feel refined and slightly luxurious -- clean enough for modern interfaces but with enough character to evoke the artisanal quality of cut gemstones. Geometric sans-serifs with crisp terminals work best for headings, while humanist or slightly rounded families maintain readability in body text against translucent, complex backgrounds.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Weight(s) | Best For |
|------|-------|-----------|----------|
| **Raleway** | Elegant geometric sans | 300, 400, 600, 700 | Headlines, display text -- thin strokes echo crystal edges |
| **Outfit** | Modern geometric | 300, 400, 500, 600 | Headlines, navigation -- clean faceted feel |
| **Inter** | Screen-optimized humanist | 400, 500, 600 | Body text, UI labels -- legibility on translucent surfaces |
| **Figtree** | Geometric, friendly | 400, 500, 600 | Body text, descriptions -- warm, approachable |
| **Cormorant Garamond** | Elegant serif | 400, 500, 600 | Accent text, quotes -- gemstone luxury |
| **Space Grotesk** | Geometric grotesque | 400, 500, 700 | Technical labels, metrics -- structured precision |
| **Josefin Sans** | Art-deco geometric | 300, 400, 600 | Decorative headings -- angular, faceted character |
| **Plus Jakarta Sans** | Rounded geometric | 400, 500, 700 | Friendly body text, accessible reading |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Raleway** (600) | **Inter** (400) | Elegant crystal facets meet crisp readability |
| **Outfit** (600) | **Figtree** (400) | Modern geometry, warm and approachable body |
| **Josefin Sans** (600) | **Inter** (400) | Art-deco angular display, clear body text |
| **Raleway** (700) | **Cormorant Garamond** (400) | Full luxury: geometric meets classic serif |
| **Space Grotesk** (700) | **Plus Jakarta Sans** (400) | Technical precision meets friendly readability |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: var(--crystal-clear-quartz);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.crystal-display {
  font-family: 'Raleway', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: var(--crystal-gradient-geode);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--crystal-opal-shimmer);
}

.crystal-label {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--crystal-amethyst-light);
}

.crystal-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--crystal-opal-shimmer);
}
```

---

## Layout Principles

- **Geode interior metaphor** -- the page should feel like stepping inside a crystal cave: dark surroundings with luminous, precious surfaces catching the light
- **Faceted card grids** -- content cards use angular shapes or clipped corners, arranged in grid layouts that suggest the flat planes of a crystal cluster
- **Translucent layered depth** -- multiple semi-transparent layers at different opacities create parallax-like visual depth, mimicking the internal planes visible inside a clear crystal
- **Dark base, luminous foreground** -- deep obsidian or amethyst backgrounds with bright, glowing content surfaces; this contrast is non-negotiable for the aesthetic to work
- **Centered, constrained content** -- max-width containers (1100-1200px) keep content focused, like a specimen centered in a display case
- **Generous vertical spacing** -- 80-140px between major sections allows the dark background to breathe and individual crystal-like elements to register as distinct specimens
- **Angular section dividers** -- instead of wavy or flat dividers, use angled or zigzag SVG shapes that echo the fractured geometry of crystal cleavage planes
- **Asymmetric accent placement** -- prismatic highlight elements (rainbow borders, spectral glow spots) placed off-center to mimic the unpredictable way light exits a cut gemstone
- **Progressive disclosure through opacity** -- background elements at 5-10% opacity, secondary content at 40-60%, primary content fully opaque, guiding the eye like light through crystal layers
- **Responsive crystal grid** -- on mobile, faceted cards stack vertically while retaining their angular character; translucency effects can simplify for performance

---

## CSS / Design Techniques

### Faceted Crystal Card

```css
.crystal-card {
  background: var(--crystal-glass-bg);
  backdrop-filter: blur(var(--crystal-glass-blur));
  -webkit-backdrop-filter: blur(var(--crystal-glass-blur));
  border: 1px solid var(--crystal-glass-border);
  border-radius: 4px 16px 4px 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

/* Prismatic edge highlight */
.crystal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--crystal-prismatic-border);
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.crystal-card:hover {
  background: rgba(109, 63, 160, 0.12);
  border-color: rgba(200, 191, 231, 0.25);
  transform: translateY(-4px);
}

.crystal-card:hover::before {
  opacity: 1;
  animation: prismaticShift 3s linear infinite;
}

@keyframes prismaticShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
```

### Crystal Button

```css
.crystal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--crystal-gradient-amethyst);
  color: var(--crystal-prismatic-white);
  border: none;
  border-radius: 8px;
  padding: 14px 36px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

/* Inner light refraction */
.crystal-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.crystal-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 30px rgba(107, 63, 160, 0.35),
    0 0 20px rgba(155, 114, 207, 0.15);
}

.crystal-button--outline {
  background: transparent;
  border: 1px solid var(--crystal-amethyst-light);
  color: var(--crystal-amethyst-light);
}

.crystal-button--outline:hover {
  background: rgba(107, 63, 160, 0.1);
  border-color: var(--crystal-clear-quartz);
  color: var(--crystal-clear-quartz);
}
```

### Crystal Navigation

```css
.crystal-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
  z-index: 10;
}

.crystal-nav--sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  padding: 16px 40px;
  background: rgba(13, 10, 18, 0.7);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border-bottom: 1px solid var(--crystal-glass-border);
  z-index: 100;
}

.crystal-nav__logo {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  background: var(--crystal-gradient-geode);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.crystal-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.crystal-nav__links a {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--crystal-opal-shimmer);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.crystal-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--crystal-gradient-prismatic);
  transition: width 0.3s ease;
}

.crystal-nav__links a:hover {
  color: var(--crystal-prismatic-white);
}

.crystal-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.crystal-hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Floating crystal light orbs */
.crystal-hero::before,
.crystal-hero::after {
  content: '';
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
  animation: crystalFloat 15s ease-in-out infinite alternate;
}

.crystal-hero::before {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(107, 63, 160, 0.5), rgba(91, 141, 190, 0.2));
  top: -10%;
  right: -5%;
}

.crystal-hero::after {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(212, 132, 154, 0.4), rgba(228, 208, 10, 0.1));
  bottom: -10%;
  left: -5%;
  animation-delay: -7s;
}

@keyframes crystalFloat {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -30px) scale(1.05); }
  100% { transform: translate(-10px, 15px) scale(0.95); }
}

.crystal-hero h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  background: var(--crystal-gradient-geode);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.crystal-hero p {
  font-size: 1.2rem;
  color: var(--crystal-opal-shimmer);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}
```

### Prismatic Border Effect

```css
/* A wrapper that gives any child a rainbow prismatic border */
.crystal-prismatic-border {
  position: relative;
  border-radius: 16px;
  padding: 2px;
  background: var(--crystal-prismatic-border);
  background-size: 300% 100%;
  animation: prismaticShift 4s linear infinite;
}

.crystal-prismatic-border > * {
  border-radius: 14px;
  background: var(--crystal-obsidian);
}

@keyframes prismaticShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
```

### Internal Glow Effect

```css
.crystal-glow {
  position: relative;
}

.crystal-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(155, 114, 207, 0.2) 0%,
    rgba(107, 63, 160, 0.1) 40%,
    transparent 70%
  );
  pointer-events: none;
  border-radius: 50%;
  filter: blur(30px);
}
```

### Faceted Clip-Path Shapes

```css
/* Hexagonal crystal shape */
.crystal-hex {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

/* Angular gemstone cut */
.crystal-gem {
  clip-path: polygon(20% 0%, 80% 0%, 100% 30%, 100% 70%, 80% 100%, 20% 100%, 0% 70%, 0% 30%);
}

/* Diamond / rhombus */
.crystal-diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* Brilliant cut top-down view */
.crystal-brilliant {
  clip-path: polygon(
    50% 0%, 68% 8%, 85% 25%, 92% 50%,
    85% 75%, 68% 92%, 50% 100%,
    32% 92%, 15% 75%, 8% 50%,
    15% 25%, 32% 8%
  );
}
```

---

## Design Do's and Don'ts

### Do

- Ground every color choice in a real gemstone reference to maintain the geological authenticity of the palette
- Use translucent, layered surfaces to create depth that mimics looking into the interior of a crystal
- Apply prismatic rainbow accents sparingly, on borders and hover states, to simulate light refraction at facet edges
- Pair angular, faceted shapes with soft diffused glows to balance geometric precision with organic warmth
- Maintain dark backgrounds (obsidian, deep amethyst) so that luminous crystal surfaces achieve maximum visual impact
- Animate prismatic effects slowly and subtly -- light moving through a crystal is gentle, not frantic
- Test translucent surfaces against their backgrounds to ensure text remains legible through the layers
- Use CSS `clip-path` to create hexagonal, octagonal, or gemstone-shaped containers for images and decorative elements

### Don't

- Use flat, bright, or pure white backgrounds -- they destroy the geode-interior atmosphere that defines Crystal Core
- Overload the page with prismatic rainbow effects; the spectral dispersion should feel rare and precious, not garish
- Apply the crystalline treatment to every single element; reserve the effect for primary cards, heroes, and navigation to maintain impact
- Mix the gemstone palette with unrelated neon or candy colors that break the geological grounding
- Use rounded, bubbly shapes exclusively -- Crystal Core requires angular geometry to reference the planar surfaces of mineral crystals
- Stack too many translucent layers; beyond 2-3 `backdrop-filter` layers, performance degrades and the effect becomes muddy
- Forget hover and focus states; prismatic shifts and internal glow effects are ideal for interactive feedback
- Ignore accessibility: amethyst-on-obsidian can fail WCAG contrast requirements, so always verify ratios and provide clear quartz text alternatives

---

## Related Aesthetics

| Aesthetic | Relationship to Crystal Core |
|-----------|------------------------------|
| **Glassmorphism** | Shares the translucent surface technique; Crystal Core adds faceted geometry and gemstone color where Glassmorphism stays neutral |
| **Aurora Gradient** | Both use luminous gradients on dark backgrounds; Aurora channels celestial light while Crystal Core channels geological light |
| **Dark Aero** | Overlaps in dark-base translucency; Crystal Core adds the mineral color palette and angular shapes |
| **Frutiger Aero** | Glossy, nature-inspired predecessor; Crystal Core replaces organic nature with geological mineral forms |
| **Laser Grid** | Both use vivid color on dark backgrounds; Laser Grid is rectilinear and synthetic, Crystal Core is faceted and natural |
| **Maximalism** | Crystal Core's jewel tones and layered surfaces can push toward maximalist richness, but the palette stays geologically disciplined |
| **Art Deco** | Shares the love of geometric luxury and precious materials; Art Deco uses gold and symmetry, Crystal Core uses amethyst and prismatic light |
| **Cyberpunk** | Both feature dark backgrounds with vivid accents; Cyberpunk is gritty and urban, Crystal Core is precious and geological |
| **Neumorphism** | Contrasting approach: embossed monochrome surfaces vs. translucent jewel-toned layers |
| **Frosted Touch** | Related through translucency and blur effects; Frosted Touch is cooler and more minimal, Crystal Core is richer and more colorful |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crystal Core Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --crystal-obsidian: #0d0a12;
      --crystal-amethyst-deep: #2d1854;
      --crystal-smoky-quartz: #3b2f3d;
      --crystal-amethyst-core: #6b3fa0;
      --crystal-amethyst-light: #9b72cf;
      --crystal-rose-quartz: #f7cad0;
      --crystal-rose-quartz-deep: #d4849a;
      --crystal-citrine-gold: #e4d00a;
      --crystal-citrine-warm: #c9a227;
      --crystal-sapphire: #1e3a6e;
      --crystal-sapphire-light: #5b8dbe;
      --crystal-tourmaline: #1b8c6b;
      --crystal-clear-quartz: #f0edf4;
      --crystal-opal-shimmer: #c8bfe7;
      --crystal-prismatic-white: #fafbff;
      --crystal-gradient-amethyst: linear-gradient(135deg, #2d1854, #6b3fa0, #9b72cf);
      --crystal-gradient-geode: linear-gradient(135deg, #2d1854, #6b3fa0, #d4849a, #f7cad0);
      --crystal-gradient-prismatic: linear-gradient(135deg, #6b3fa0, #5b8dbe, #1b8c6b, #e4d00a, #d4849a);
      --crystal-gradient-rose: linear-gradient(135deg, #d4849a, #f7cad0, #c8bfe7);
      --crystal-glass-bg: rgba(109, 63, 160, 0.08);
      --crystal-glass-border: rgba(200, 191, 231, 0.15);
      --crystal-glass-blur: 14px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--crystal-obsidian);
      color: var(--crystal-opal-shimmer);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1, h2, h3, h4 {
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      color: var(--crystal-clear-quartz);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    a { color: var(--crystal-sapphire-light); text-decoration: none; transition: color 0.2s; }
    a:hover { color: var(--crystal-prismatic-white); }

    /* ------------------------------------------------
       Background: Geode Interior Light
    ------------------------------------------------ */
    .crystal-bg {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    .crystal-bg::before {
      content: '';
      position: absolute;
      width: 150%; height: 150%;
      top: -25%; left: -25%;
      background:
        radial-gradient(ellipse at 25% 40%, rgba(107, 63, 160, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 20%, rgba(212, 132, 154, 0.18) 0%, transparent 45%),
        radial-gradient(ellipse at 60% 80%, rgba(91, 141, 190, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 15% 75%, rgba(228, 208, 10, 0.08) 0%, transparent 40%);
      animation: geodeShift 25s ease-in-out infinite alternate;
    }

    @keyframes geodeShift {
      0%   { transform: translate(0, 0) rotate(0deg) scale(1); }
      33%  { transform: translate(-3%, 2%) rotate(0.5deg) scale(1.02); }
      66%  { transform: translate(2%, -3%) rotate(-0.5deg) scale(0.98); }
      100% { transform: translate(-1%, 1%) rotate(0.3deg) scale(1.01); }
    }

    /* All content above background */
    .content { position: relative; z-index: 1; }

    /* ------------------------------------------------
       Navigation
    ------------------------------------------------ */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 40px;
    }

    nav .logo {
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      background: var(--crystal-gradient-geode);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-decoration: none;
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      color: var(--crystal-opal-shimmer);
      font-weight: 500;
      font-size: 0.9rem;
      position: relative;
    }

    nav ul a::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0;
      width: 0; height: 2px;
      background: var(--crystal-gradient-prismatic);
      transition: width 0.3s ease;
    }

    nav ul a:hover::after { width: 100%; }

    /* ------------------------------------------------
       Hero
    ------------------------------------------------ */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 40px;
      position: relative;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 1.5rem;
      background: var(--crystal-gradient-geode);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero p {
      font-size: 1.15rem;
      margin-bottom: 2.5rem;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
    }

    .hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* ------------------------------------------------
       Buttons
    ------------------------------------------------ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 36px;
      border-radius: 8px;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      cursor: pointer;
      border: none;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn--primary {
      background: var(--crystal-gradient-amethyst);
      color: var(--crystal-prismatic-white);
    }

    .btn--primary::after {
      content: '';
      position: absolute;
      top: -50%; left: -50%;
      width: 200%; height: 200%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 50%);
      pointer-events: none;
    }

    .btn--primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(107, 63, 160, 0.35), 0 0 20px rgba(155, 114, 207, 0.15);
    }

    .btn--outline {
      background: transparent;
      color: var(--crystal-amethyst-light);
      border: 1px solid var(--crystal-amethyst-light);
    }

    .btn--outline:hover {
      background: rgba(107, 63, 160, 0.1);
      color: var(--crystal-clear-quartz);
      border-color: var(--crystal-clear-quartz);
      transform: translateY(-2px);
    }

    /* ------------------------------------------------
       Feature Cards
    ------------------------------------------------ */
    .features {
      padding: 100px 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .features h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 16px;
    }

    .features .subtitle {
      text-align: center;
      color: var(--crystal-opal-shimmer);
      margin-bottom: 56px;
      font-size: 1.05rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--crystal-glass-bg);
      backdrop-filter: blur(var(--crystal-glass-blur));
      -webkit-backdrop-filter: blur(var(--crystal-glass-blur));
      border: 1px solid var(--crystal-glass-border);
      border-radius: 4px 16px 4px 16px;
      padding: 32px;
      position: relative;
      overflow: hidden;
      transition: background 0.3s, border-color 0.3s, transform 0.3s;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, #6b3fa0, #5b8dbe, #1b8c6b, #e4d00a, #d4849a, #6b3fa0);
      background-size: 200% 100%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card:hover {
      background: rgba(109, 63, 160, 0.12);
      border-color: rgba(200, 191, 231, 0.25);
      transform: translateY(-4px);
    }

    .card:hover::before {
      opacity: 1;
      animation: prismaticSlide 3s linear infinite;
    }

    @keyframes prismaticSlide {
      0%   { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }

    .card-icon {
      width: 52px; height: 52px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .card h3 { font-size: 1.15rem; margin-bottom: 0.75rem; }
    .card p  { font-size: 0.95rem; line-height: 1.65; }

    /* ------------------------------------------------
       Showcase / Geode Section
    ------------------------------------------------ */
    .showcase {
      padding: 100px 40px;
      text-align: center;
      position: relative;
    }

    .showcase h2 { font-size: 2rem; margin-bottom: 16px; }
    .showcase .subtitle { margin-bottom: 48px; font-size: 1.05rem; }

    .specimen-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .specimen {
      aspect-ratio: 1;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      color: var(--crystal-clear-quartz);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .specimen:hover {
      transform: scale(1.03);
      box-shadow: 0 12px 40px rgba(107, 63, 160, 0.3);
    }

    .specimen--amethyst {
      background: linear-gradient(135deg, #2d1854 0%, #6b3fa0 50%, #9b72cf 100%);
    }

    .specimen--rose {
      background: linear-gradient(135deg, #3b2f3d 0%, #d4849a 50%, #f7cad0 100%);
    }

    .specimen--sapphire {
      background: linear-gradient(135deg, #0d0a12 0%, #1e3a6e 50%, #5b8dbe 100%);
    }

    .specimen--citrine {
      background: linear-gradient(135deg, #3b2f3d 0%, #c9a227 50%, #e4d00a 100%);
    }

    /* Inner crystal light */
    .specimen::after {
      content: '';
      position: absolute;
      width: 80%; height: 80%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    /* ------------------------------------------------
       CTA Section
    ------------------------------------------------ */
    .cta {
      text-align: center;
      padding: 100px 40px;
    }

    .cta-inner {
      background: var(--crystal-glass-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--crystal-glass-border);
      border-radius: 24px;
      padding: 64px 40px;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    /* Prismatic border wrap */
    .cta-inner::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #6b3fa0, #5b8dbe, #1b8c6b, #e4d00a, #d4849a, #6b3fa0);
      background-size: 300% 100%;
      animation: prismaticSlide 4s linear infinite;
    }

    .cta h2 { font-size: 2rem; margin-bottom: 1rem; }
    .cta p  { margin-bottom: 2rem; font-size: 1.05rem; }

    /* ------------------------------------------------
       Footer
    ------------------------------------------------ */
    footer {
      text-align: center;
      padding: 48px 40px;
      font-size: 0.85rem;
      color: var(--crystal-amethyst-light);
      border-top: 1px solid rgba(200, 191, 231, 0.08);
    }

    footer .footer-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 16px;
      list-style: none;
    }

    footer .footer-links a {
      color: var(--crystal-opal-shimmer);
      font-size: 0.85rem;
    }

    footer .footer-links a:hover {
      color: var(--crystal-prismatic-white);
    }

    /* ------------------------------------------------
       Responsive
    ------------------------------------------------ */
    @media (max-width: 768px) {
      nav { padding: 16px 20px; }
      nav ul { gap: 16px; }
      .hero { min-height: 70vh; padding: 60px 20px; }
      .hero-buttons { flex-direction: column; align-items: center; }
      .features { padding: 60px 20px; }
      .features-grid { grid-template-columns: 1fr; }
      .showcase { padding: 60px 20px; }
      .specimen-grid { grid-template-columns: repeat(2, 1fr); }
      .cta-inner { padding: 40px 24px; }
      footer { padding: 32px 20px; }
    }

    @media (max-width: 480px) {
      .specimen-grid { grid-template-columns: 1fr; }
      nav ul { gap: 12px; font-size: 0.8rem; }
    }
  </style>
</head>
<body>
  <div class="crystal-bg"></div>

  <div class="content">

    <!-- Navigation -->
    <nav>
      <a href="#" class="logo">Crystalline</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#specimens">Specimens</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div>
        <h1>Light refracted through<br>digital stone</h1>
        <p>Interfaces inspired by the translucent depths of amethyst,
           the soft glow of rose quartz, and the prismatic fire of
           light passing through faceted crystal.</p>
        <div class="hero-buttons">
          <a href="#" class="btn btn--primary">Explore the Geode</a>
          <a href="#" class="btn btn--outline">View Collection</a>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features" id="features">
      <h2>Faceted by design</h2>
      <p class="subtitle">Every surface catches the light differently.</p>
      <div class="features-grid">
        <div class="card">
          <div class="card-icon" style="background: rgba(107, 63, 160, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b72cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22 8.5 12 15.5 2 8.5"/>
              <polyline points="2 15.5 12 8.5 22 15.5"/>
            </svg>
          </div>
          <h3>Faceted Geometry</h3>
          <p>Angular, crystalline shapes create structured layouts
             that reference the planar cleavage of natural minerals.
             Every edge catches the light.</p>
        </div>
        <div class="card">
          <div class="card-icon" style="background: rgba(212, 132, 154, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4849a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3>Prismatic Light</h3>
          <p>Rainbow-spectrum accents on borders and hover states
             simulate the dispersion of white light through
             crystal facets into spectral bands.</p>
        </div>
        <div class="card">
          <div class="card-icon" style="background: rgba(91, 141, 190, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8dbe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>Translucent Depth</h3>
          <p>Layered semi-transparent surfaces reveal content
             beneath, creating the illusion of looking through
             the internal planes of a clear crystal.</p>
        </div>
      </div>
    </section>

    <!-- Specimen Showcase -->
    <section class="showcase" id="specimens">
      <h2>The mineral palette</h2>
      <p class="subtitle">Colors drawn from the earth, refined for the screen.</p>
      <div class="specimen-grid">
        <div class="specimen specimen--amethyst">Amethyst</div>
        <div class="specimen specimen--rose">Rose Quartz</div>
        <div class="specimen specimen--sapphire">Sapphire</div>
        <div class="specimen specimen--citrine">Citrine</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta" id="about">
      <div class="cta-inner">
        <h2>Step inside the crystal</h2>
        <p>Build interfaces that feel precious, luminous, and grounded
           in the ancient beauty of the mineral world.</p>
        <a href="#" class="btn btn--primary">Get Started</a>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <ul class="footer-links">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Specimens</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>Built with Crystal Core aesthetics. Faceted, luminous, geological.</p>
    </footer>

  </div>
</body>
</html>
```

---

## Implementation Tips

- **Always include `-webkit-` prefixes** for `backdrop-filter` and `background-clip: text` -- Safari and older WebKit browsers require `-webkit-backdrop-filter` and `-webkit-background-clip` respectively
- **Dark backgrounds are mandatory** -- the translucent crystal surfaces, prismatic borders, and internal glow effects lose all visual impact against light or white backgrounds; always start with obsidian or deep amethyst
- **Test prismatic animations for performance** -- animated gradient borders with `background-size` shifts trigger GPU compositing; limit to 2-3 simultaneously animated elements per viewport
- **Provide `@supports` fallbacks** for browsers that do not support `backdrop-filter`; fall back to a solid semi-transparent background in the amethyst or smoky quartz range
- **Verify WCAG contrast ratios** -- the gemstone palette is rich but dark; pair `--crystal-clear-quartz` (#F0EDF4) or `--crystal-prismatic-white` (#FAFBFF) text against deep backgrounds to meet AA standards (minimum 4.5:1)
- **Use `clip-path` progressively** -- faceted hexagonal and gem-cut shapes add strong Crystal Core character, but always ensure the clipped content remains accessible and the interactive hit area is not confusingly reduced
- **Layer translucency purposefully** -- no more than 2-3 stacked `backdrop-filter` elements; each layer should serve a clear hierarchy purpose (background wash, card surface, modal overlay) rather than existing for decoration alone
- **Animate slowly** -- prismatic border shifts, internal glow pulses, and floating light orbs should all move at 4-25 second cycles to match the quiet, geological timescale of the crystal metaphor
