# Mediterranean Design Reference

## Overview

Mediterranean design is a warm, sun-drenched aesthetic rooted in the architectural traditions, natural landscapes, and cultural heritage of the countries surrounding the Mediterranean Sea -- primarily Greece, Italy, Spain, southern France, Morocco, and Turkey. The style draws its visual language from **whitewashed village walls, terracotta rooftops, azure coastal waters, olive groves, hand-painted ceramic tiles, and wrought-iron detailing**. It is an aesthetic that embodies relaxed outdoor living, the warmth of baked earth under an open sky, and the timeless elegance of civilizations that built arched doorways and mosaic courtyards thousands of years ago.

In web and UI design, the Mediterranean aesthetic translates into **warm earthy color palettes anchored by terracotta and sandy neutrals, accented with deep azure blues and olive greens**. Layouts favor open, spacious compositions with generous whitespace that evokes sun-bleached courtyards. Arch-shaped containers, tile-inspired patterns, and textured backgrounds reference the region's architectural motifs. Typography leans toward elegant serif display faces paired with clean, warm sans-serifs -- reflecting the blend of ancient classical heritage and modern coastal simplicity. Surfaces may incorporate subtle stucco or linen textures, while ornamental details draw from Moorish geometric tilework and Greco-Roman decorative traditions.

The Mediterranean approach is neither minimalist nor maximalist. It occupies a balanced middle ground: curated warmth with intentional ornamentation. Every element should feel like it has been **warmed by the sun and cooled by the sea** -- natural, inviting, and grounded in centuries of craft. The palette never strays into cold, sterile territory; even the blues carry warmth. The aesthetic is ideal for travel, hospitality, food and wine, real estate, lifestyle, and wellness brands seeking to communicate authenticity, warmth, relaxation, and timeless sophistication.

---

## Visual Characteristics

### Core Design Traits

- **Whitewashed surfaces**: Clean white or off-white backgrounds evoking the lime-washed walls of Greek island villages and Andalusian pueblos blancos
- **Terracotta warmth**: Burnt sienna, clay, and rust tones used as primary warm accents, referencing sun-baked roof tiles, pottery, and earthen floors
- **Azure and cerulean blue accents**: Deep sea blues and bright sky blues used sparingly but boldly, inspired by the Mediterranean Sea and painted shutters of Santorini
- **Arched shapes and doorways**: Rounded arch forms used in containers, image frames, navigation elements, and section headers, drawn from Roman, Moorish, and Byzantine architecture
- **Tile and mosaic patterns**: Geometric or floral repeating patterns inspired by Moroccan zellige, Portuguese azulejo, and Italian majolica tilework
- **Olive and botanical greens**: Muted sage, olive, and cypress greens providing natural contrast and referencing the region's lush groves and herb gardens
- **Wrought-iron ornamental details**: Thin decorative lines, scrollwork borders, and delicate divider motifs inspired by balcony railings and courtyard gates
- **Stucco and plaster textures**: Subtle grainy or rough-textured background surfaces that evoke hand-plastered Mediterranean walls
- **Warm golden light**: Soft amber tones, golden-hour gradients, and warm shadows that capture the quality of Southern European afternoon sunlight
- **Hand-painted and artisanal elements**: Slightly imperfect, organic shapes and brush-stroke accents that reference hand-crafted pottery, frescoes, and market signage

### Design Principles

- **Sun-warmed simplicity**: Favor clean compositions with warm undertones; avoid cold, clinical minimalism
- **Indoor-outdoor fluidity**: Layouts should feel open and airy, as if the boundary between interior and exterior has dissolved into a courtyard
- **Earthy grounding with azure lift**: Anchor designs in terracotta and sandy neutrals, then elevate with strategic touches of Mediterranean blue
- **Artisanal authenticity**: Embrace slight imperfection, organic curves, and hand-crafted texture over machine-precision sterility
- **Classical proportion**: Use balanced, harmonious compositions inspired by Greco-Roman symmetry and the golden ratio
- **Layered materiality**: Combine stucco texture, tile pattern, wrought-iron line, and ceramic glaze visually to create rich, tactile surfaces
- **Generous breathing room**: Allow content ample space; whitespace represents the open plazas and sun-filled terraces of Mediterranean towns
- **Warmth in every detail**: Even utility elements like borders, shadows, and dividers should carry warm, earthy undertones rather than neutral grays

---

## Color Palette

The Mediterranean palette is drawn directly from the region's natural environment: sun-baked earth, whitewashed architecture, azure sea, olive groves, and golden afternoon light. Warm tones dominate, with blues serving as the essential cool-temperature counterpoint.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Whitewash | `#FAF7F2` | Primary background, open surfaces, breathing space |
| Stucco Cream | `#F0E6D6` | Secondary background, card surfaces, warm panels |
| Sand Dune | `#D9C6A5` | Tertiary surfaces, footer areas, subtle fills |
| Terracotta | `#C65D3B` | Primary warm accent, buttons, headings, key highlights |
| Burnt Sienna | `#A0432E` | Deep warm accent, hover states, active elements |
| Clay Pot | `#8B5E3C` | Body text on light backgrounds, earthy UI elements |
| Azure Sea | `#1B6B93` | Primary cool accent, links, interactive elements |
| Aegean Blue | `#2E96C7` | Secondary blue accent, badges, tags, info highlights |
| Santorini Sky | `#A8D4E6` | Light blue tinted backgrounds, hover states |
| Olive Grove | `#6B7F3A` | Botanical accent, success states, nature elements |
| Sage Leaf | `#A3B18A` | Soft green backgrounds, secondary decorative accent |
| Golden Hour | `#D4A843` | Warm metallic accent, ornamental details, star ratings |
| Cypress Shadow | `#3D3929` | Dark text, deep header backgrounds, contrast surfaces |
| Lavender Field | `#9B8EC4` | Tertiary accent, decorative highlights, tags |
| Pomegranate | `#B5334E` | Error states, urgent call-to-action, warm emphasis |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --med-whitewash: #faf7f2;
  --med-stucco: #f0e6d6;
  --med-sand: #d9c6a5;

  /* Warm accents */
  --med-terracotta: #c65d3b;
  --med-sienna: #a0432e;
  --med-clay: #8b5e3c;
  --med-golden: #d4a843;
  --med-pomegranate: #b5334e;

  /* Cool accents */
  --med-azure: #1b6b93;
  --med-aegean: #2e96c7;
  --med-sky: #a8d4e6;
  --med-lavender: #9b8ec4;

  /* Greens */
  --med-olive: #6b7f3a;
  --med-sage: #a3b18a;

  /* Dark */
  --med-cypress: #3d3929;

  /* Functional mappings */
  --med-bg-primary: var(--med-whitewash);
  --med-bg-secondary: var(--med-stucco);
  --med-bg-accent: var(--med-sky);
  --med-text-primary: var(--med-cypress);
  --med-text-secondary: var(--med-clay);
  --med-accent-warm: var(--med-terracotta);
  --med-accent-cool: var(--med-azure);
  --med-accent-light: var(--med-sand);
  --med-border: rgba(139, 94, 60, 0.2);
  --med-cta: var(--med-terracotta);
}
```

---

## Typography

Mediterranean typography balances the region's classical heritage with modern readability. Display and heading typefaces draw from elegant serif traditions reminiscent of Roman inscriptions, Italian Renaissance printing, and Spanish colonial signage. Body text uses warm, open sans-serifs that feel approachable and sunlit rather than cold or technical.

### Recommended Google Fonts

| Font | Weight(s) | Style | Usage |
|------|-----------|-------|-------|
| **Cormorant Garamond** | 300, 400, 600, 700 | Refined, high-contrast transitional serif | Hero headlines, display text |
| **Playfair Display** | 400, 600, 700 | Elegant, high-contrast serif with dramatic terminals | Section headings, editorial titles |
| **Spectral** | 300, 400, 600 | Warm, screen-optimized serif | Subheadings, pull quotes, body alternative |
| **Lato** | 300, 400, 700 | Warm humanist sans-serif | Primary body text, UI elements |
| **Raleway** | 300, 400, 500, 600 | Elegant geometric sans with thin weights | Navigation, labels, subheadings |
| **Forum** | 400 | Antique Roman display serif | Decorative headings, accent titles |
| **Josefin Sans** | 300, 400, 600 | Vintage geometric sans-serif | Captions, tags, uppercase labels |
| **Caveat** | 400, 700 | Casual handwritten style | Annotations, informal accents, taglines |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Cormorant Garamond 600 | Lato 400 | Classical elegance with warm readability |
| Playfair Display 700 | Raleway 400 | Sophisticated editorial, travel-magazine feel |
| Forum 400 | Lato 300 | Ancient-meets-modern, archaeological warmth |
| Cormorant Garamond 300 Italic | Spectral 400 | Refined literary, wine-label aesthetics |
| Playfair Display 600 | Josefin Sans 300 | Boutique hospitality, modern Mediterranean |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Raleway:wght@300;400;500;600&family=Caveat:wght@400;700&display=swap');

body {
  font-family: 'Lato', 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.8;
  letter-spacing: 0.01em;
  color: var(--med-clay);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  color: var(--med-cypress);
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
}

/* Display / Hero text */
.med-display {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.03em;
  line-height: 1.15;
  color: var(--med-cypress);
}

/* Handwritten accent */
.med-handwritten {
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
  color: var(--med-terracotta);
  font-weight: 400;
}

/* Navigation and label text */
nav a, .med-label {
  font-family: 'Raleway', 'Josefin Sans', sans-serif;
  text-transform: uppercase;
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  font-weight: 500;
  color: var(--med-clay);
}
```

---

## Layout Principles

- **Open courtyard composition**: Structure pages like Mediterranean courtyards -- a central open area surrounded by content, with generous padding and margin throughout
- **Arch-shaped containers**: Use `border-radius: 50% 50% 0 0` or large top-radius values on image frames, cards, and section headers to reference arched doorways and windows
- **Wide, relaxed containers**: Max-width of 1100-1300px with comfortable side margins; never let content feel cramped or edge-to-edge
- **Full-width hero sections with warm overlays**: Large landscape or architectural images spanning the viewport with terracotta or golden gradient overlays
- **Card-based content grouping**: Rounded-corner cards with soft warm shadows for organizing information, evoking ceramic tiles arranged on a wall
- **Asymmetric organic balance**: Slightly staggered layouts with natural, organic placement rather than rigid grid symmetry
- **Generous vertical spacing**: 5-8rem between major sections, letting each content block breathe like rooms opening onto a terrace
- **Tile-grid patterns for galleries**: CSS grid layouts with mixed-size cells inspired by mosaic tilework for image galleries and portfolio displays
- **Subtle textured dividers**: Ornamental line dividers, wrought-iron-inspired SVG borders, or simple warm-toned horizontal rules between sections
- **Two-column storytelling**: Content and image side-by-side layouts with the image framed in an arch shape, evoking a view through a Mediterranean window

---

## CSS / Design Techniques

### Mediterranean Card Component

```css
.med-card {
  background: var(--med-whitewash);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  box-shadow:
    0 2px 8px rgba(61, 57, 41, 0.06),
    0 8px 24px rgba(61, 57, 41, 0.04);
  border: 1px solid rgba(198, 93, 59, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Subtle terracotta top accent line */
.med-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--med-terracotta),
    var(--med-golden),
    var(--med-terracotta),
    transparent
  );
  border-radius: 0 0 2px 2px;
}

.med-card:hover {
  box-shadow:
    0 4px 12px rgba(61, 57, 41, 0.08),
    0 16px 40px rgba(61, 57, 41, 0.06);
  transform: translateY(-3px);
}

/* Arch-topped card variant */
.med-card--arch {
  border-radius: 120px 120px 16px 16px;
  padding-top: 3rem;
  text-align: center;
}
```

### Mediterranean Button Component

```css
/* Primary -- Terracotta */
.med-btn {
  display: inline-block;
  padding: 0.8rem 2.2rem;
  border-radius: 8px;
  border: none;
  background: var(--med-terracotta);
  color: var(--med-whitewash);
  font-family: 'Raleway', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(198, 93, 59, 0.25);
  transition: all 0.3s ease;
}

.med-btn:hover {
  background: var(--med-sienna);
  box-shadow: 0 6px 20px rgba(198, 93, 59, 0.35);
  transform: translateY(-2px);
}

/* Secondary -- Outlined */
.med-btn--outline {
  background: transparent;
  color: var(--med-terracotta);
  border: 2px solid var(--med-terracotta);
  box-shadow: none;
}

.med-btn--outline:hover {
  background: var(--med-terracotta);
  color: var(--med-whitewash);
  box-shadow: 0 4px 14px rgba(198, 93, 59, 0.25);
}

/* Azure variant */
.med-btn--azure {
  background: var(--med-azure);
  box-shadow: 0 4px 14px rgba(27, 107, 147, 0.25);
}

.med-btn--azure:hover {
  background: #155a7d;
  box-shadow: 0 6px 20px rgba(27, 107, 147, 0.35);
}
```

### Navigation Bar

```css
.med-nav {
  background: rgba(250, 247, 242, 0.92);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid rgba(139, 94, 60, 0.12);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.med-nav__brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--med-cypress);
  letter-spacing: 0.04em;
}

.med-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.med-nav__links a {
  font-family: 'Raleway', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--med-clay);
  transition: color 0.3s ease;
  position: relative;
}

.med-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--med-terracotta);
  transition: width 0.3s ease;
}

.med-nav__links a:hover {
  color: var(--med-terracotta);
}

.med-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.med-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(250, 247, 242, 0) 0%,
      rgba(250, 247, 242, 0.4) 40%,
      rgba(240, 230, 214, 0.7) 100%
    ),
    linear-gradient(
      135deg,
      var(--med-stucco) 0%,
      var(--med-whitewash) 50%,
      var(--med-sky) 100%
    );
}

/* Warm golden-hour radial glow */
.med-hero::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    ellipse,
    rgba(212, 168, 67, 0.15) 0%,
    rgba(198, 93, 59, 0.06) 40%,
    transparent 70%
  );
  pointer-events: none;
}

.med-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--med-cypress);
  line-height: 1.1;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.med-hero p {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--med-clay);
  max-width: 520px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Ornamental divider below hero heading */
.med-hero .ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 1.5rem auto;
  max-width: 200px;
  position: relative;
  z-index: 1;
}

.med-hero .ornament::before,
.med-hero .ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--med-terracotta),
    transparent
  );
}

.med-hero .ornament span {
  width: 8px;
  height: 8px;
  background: var(--med-terracotta);
  border-radius: 50%;
  opacity: 0.6;
}
```

### Stucco Texture Overlay

```css
/* Subtle plaster/stucco texture for backgrounds */
.med-stucco-texture {
  position: relative;
}

.med-stucco-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.55' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.5;
}
```

### Mosaic Tile Pattern Border

```css
/* Geometric tile-inspired repeating pattern border */
.med-tile-border {
  border: none;
  height: 12px;
  margin: 3rem auto;
  width: 80%;
  max-width: 600px;
  background: repeating-linear-gradient(
    90deg,
    var(--med-terracotta) 0px,
    var(--med-terracotta) 8px,
    var(--med-whitewash) 8px,
    var(--med-whitewash) 10px,
    var(--med-azure) 10px,
    var(--med-azure) 18px,
    var(--med-whitewash) 18px,
    var(--med-whitewash) 20px,
    var(--med-golden) 20px,
    var(--med-golden) 28px,
    var(--med-whitewash) 28px,
    var(--med-whitewash) 30px
  );
  border-radius: 2px;
}

/* Diamond-pattern mosaic background */
.med-mosaic-bg {
  background-image:
    linear-gradient(45deg, var(--med-sand) 25%, transparent 25%),
    linear-gradient(-45deg, var(--med-sand) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--med-sand) 75%),
    linear-gradient(-45deg, transparent 75%, var(--med-sand) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0px;
  opacity: 0.3;
}
```

### Arch Frame for Images

```css
/* Arch-shaped image container */
.med-arch-frame {
  border-radius: 200px 200px 12px 12px;
  overflow: hidden;
  box-shadow:
    0 4px 16px rgba(61, 57, 41, 0.1),
    0 1px 4px rgba(61, 57, 41, 0.06);
  border: 4px solid var(--med-whitewash);
  outline: 1px solid rgba(139, 94, 60, 0.12);
}

.med-arch-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Warm overlay on arch image */
.med-arch-frame--warm {
  position: relative;
}

.med-arch-frame--warm::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 200px 200px 12px 12px;
  background: linear-gradient(
    180deg,
    rgba(212, 168, 67, 0.0) 40%,
    rgba(198, 93, 59, 0.15) 100%
  );
  pointer-events: none;
}
```

### Wrought-Iron Ornamental Divider

```css
/* Decorative wrought-iron-style divider */
.med-iron-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 3rem auto;
  max-width: 400px;
  color: var(--med-clay);
  opacity: 0.4;
}

.med-iron-divider::before,
.med-iron-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: currentColor;
}

/* Central ornament -- a diamond shape */
.med-iron-divider span {
  width: 10px;
  height: 10px;
  border: 1.5px solid currentColor;
  transform: rotate(45deg);
}
```

---

## Design Do's and Don'ts

### Do

- Use terracotta and warm earth tones as your primary accent palette, grounding the design in Southern European warmth
- Incorporate arch shapes in image frames, card tops, and decorative elements to reference Mediterranean architecture
- Apply subtle stucco or linen textures to backgrounds for tactile depth without overwhelming content
- Pair high-contrast serif display fonts with warm, readable sans-serif body text for classical elegance
- Use azure blue sparingly and intentionally as the cool counterpoint to the warm earth palette
- Allow generous whitespace throughout, evoking the open plazas and sun-drenched terraces of coastal towns
- Include ornamental dividers and decorative borders inspired by wrought iron and ceramic tilework
- Let photography of natural materials, landscapes, and architecture carry the aesthetic when possible

### Don't

- Use cold, sterile grays or neon-bright accent colors that break the warm, natural palette
- Apply flat, unadorned industrial aesthetics; the Mediterranean style values craft and ornamentation
- Overload the page with tile patterns or textures at high opacity; subtlety maintains elegance
- Use sharp, angular, brutalist typography that contradicts the soft, curved character of the aesthetic
- Create dense, cramped layouts; Mediterranean design demands breathing room and leisurely spacing
- Mix in dark-mode-first or cyberpunk elements; this aesthetic belongs in warm, sunlit territory
- Rely solely on blue as the primary color; blue is the accent, terracotta and earth are the foundation
- Forget the warmth in shadows and borders; even functional elements should carry warm undertones, not cold gray

---

## Related Aesthetics

| Aesthetic | Relationship to Mediterranean |
|-----------|-------------------------------|
| **Coastal Style** | Close sibling; shares ocean-inspired blues and airy layouts, but Coastal is cooler and more nautical while Mediterranean is warmer and more architectural |
| **Earth Tones** | Overlapping warm palette foundations; Earth Tones is a broader, more muted aesthetic while Mediterranean has specific cultural and architectural references |
| **Japandi** | Shared appreciation for natural materials and balanced simplicity; Japandi is more restrained and cool-toned, Mediterranean is warmer and more ornamental |
| **Grandmillennial** | Both value traditional craft and classical decorative elements; Grandmillennial leans floral and preppy, Mediterranean leans terracotta and tile |
| **Art Nouveau** | Shared love of organic curves and ornamental detail; Art Nouveau is more stylized and whiplash-curvilinear, Mediterranean is more grounded and architectural |
| **Ethnic Chic** | Overlapping appreciation for handcrafted global motifs; Ethnic Chic draws from a broader cultural range while Mediterranean is geographically specific |
| **Hygge** | Both create warm, inviting, lived-in atmospheres; Hygge is Nordic, cozy, and inward-facing while Mediterranean is Southern European, sun-drenched, and outward-facing |
| **French Provincial Style** | Adjacent Southern European aesthetic; shares warm earthy palettes but French Provincial has lavender-countryside and toile-fabric emphasis |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mediterranean Style</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Lato:wght@300;400;700&family=Raleway:wght@300;400;500;600&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Backgrounds */
      --med-whitewash: #faf7f2;
      --med-stucco: #f0e6d6;
      --med-sand: #d9c6a5;

      /* Warm accents */
      --med-terracotta: #c65d3b;
      --med-sienna: #a0432e;
      --med-clay: #8b5e3c;
      --med-golden: #d4a843;

      /* Cool accents */
      --med-azure: #1b6b93;
      --med-aegean: #2e96c7;
      --med-sky: #a8d4e6;

      /* Greens */
      --med-olive: #6b7f3a;
      --med-sage: #a3b18a;

      /* Dark */
      --med-cypress: #3d3929;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--med-whitewash);
      color: var(--med-clay);
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 1.05rem;
      line-height: 1.8;
      letter-spacing: 0.01em;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      color: var(--med-cypress);
      font-weight: 600;
      letter-spacing: 0.02em;
      line-height: 1.25;
    }

    a {
      color: var(--med-azure);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--med-terracotta);
    }

    /* ============================================
       NAVIGATION
       ============================================ */

    nav {
      background: rgba(250, 247, 242, 0.92);
      backdrop-filter: blur(16px) saturate(1.2);
      -webkit-backdrop-filter: blur(16px) saturate(1.2);
      border-bottom: 1px solid rgba(139, 94, 60, 0.12);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-brand {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--med-cypress);
      letter-spacing: 0.04em;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Raleway', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--med-clay);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--med-terracotta);
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--med-terracotta);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    /* ============================================
       HERO
       ============================================ */

    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 8rem 2rem 6rem;
      overflow: hidden;
      background:
        linear-gradient(
          180deg,
          rgba(250, 247, 242, 0.0) 0%,
          rgba(240, 230, 214, 0.5) 60%,
          var(--med-stucco) 100%
        ),
        linear-gradient(
          135deg,
          var(--med-whitewash) 0%,
          #e8dfd2 50%,
          var(--med-sky) 100%
        );
    }

    /* Golden-hour ambient glow */
    .hero::before {
      content: '';
      position: absolute;
      top: -10%;
      right: -5%;
      width: 600px;
      height: 600px;
      background: radial-gradient(
        ellipse,
        rgba(212, 168, 67, 0.12) 0%,
        rgba(198, 93, 59, 0.05) 40%,
        transparent 70%
      );
      pointer-events: none;
    }

    .hero-script {
      font-family: 'Caveat', cursive;
      font-size: 1.6rem;
      color: var(--med-terracotta);
      margin-bottom: 0.5rem;
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      font-weight: 300;
      font-style: italic;
      line-height: 1.1;
      color: var(--med-cypress);
      position: relative;
      z-index: 1;
    }

    .hero-subtitle {
      margin-top: 1.5rem;
      font-family: 'Raleway', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      color: var(--med-clay);
      max-width: 520px;
      position: relative;
      z-index: 1;
    }

    /* Ornamental divider */
    .ornament {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 1.5rem auto;
      max-width: 200px;
      position: relative;
      z-index: 1;
    }

    .ornament::before,
    .ornament::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        var(--med-terracotta),
        transparent
      );
    }

    .ornament span {
      width: 8px;
      height: 8px;
      background: var(--med-terracotta);
      border-radius: 50%;
      opacity: 0.5;
    }

    /* ============================================
       TILE DIVIDER
       ============================================ */

    .tile-divider {
      height: 10px;
      border: none;
      background: repeating-linear-gradient(
        90deg,
        var(--med-terracotta) 0px,
        var(--med-terracotta) 8px,
        var(--med-whitewash) 8px,
        var(--med-whitewash) 10px,
        var(--med-azure) 10px,
        var(--med-azure) 18px,
        var(--med-whitewash) 18px,
        var(--med-whitewash) 20px,
        var(--med-golden) 20px,
        var(--med-golden) 28px,
        var(--med-whitewash) 28px,
        var(--med-whitewash) 30px
      );
    }

    /* ============================================
       CONTENT SECTIONS
       ============================================ */

    .section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 5rem 2rem;
    }

    .section--stucco {
      background: var(--med-stucco);
      max-width: 100%;
    }

    .section--stucco .section-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    .section-header p {
      font-size: 1rem;
      color: var(--med-clay);
      max-width: 560px;
      margin: 0 auto;
    }

    /* ============================================
       CARDS
       ============================================ */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--med-whitewash);
      border-radius: 16px;
      padding: 2rem 2rem 2.5rem;
      box-shadow:
        0 2px 8px rgba(61, 57, 41, 0.06),
        0 8px 24px rgba(61, 57, 41, 0.04);
      border: 1px solid rgba(198, 93, 59, 0.08);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 3px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--med-terracotta),
        var(--med-golden),
        var(--med-terracotta),
        transparent
      );
      border-radius: 0 0 2px 2px;
    }

    .card:hover {
      box-shadow:
        0 4px 12px rgba(61, 57, 41, 0.08),
        0 16px 40px rgba(61, 57, 41, 0.06);
      transform: translateY(-3px);
    }

    .card h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .card p {
      color: var(--med-clay);
      line-height: 1.7;
    }

    .card .tag {
      display: inline-block;
      margin-top: 1rem;
      font-family: 'Raleway', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--med-terracotta);
      border: 1px solid rgba(198, 93, 59, 0.25);
      border-radius: 100px;
      padding: 0.3rem 1rem;
    }

    /* Arch card variant */
    .card--arch {
      border-radius: 120px 120px 16px 16px;
      padding-top: 3rem;
      text-align: center;
    }

    /* ============================================
       FEATURE SECTION (Image + Text)
       ============================================ */

    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .feature-image {
      border-radius: 200px 200px 16px 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(61, 57, 41, 0.1);
      border: 4px solid var(--med-whitewash);
      outline: 1px solid rgba(139, 94, 60, 0.1);
      aspect-ratio: 3 / 4;
      background: linear-gradient(
        180deg,
        var(--med-sky) 0%,
        var(--med-stucco) 100%
      );
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .feature-image svg {
      width: 80px;
      height: 80px;
      opacity: 0.3;
    }

    .feature-text h2 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      margin-bottom: 1rem;
    }

    .feature-text p {
      margin-bottom: 1.5rem;
    }

    /* ============================================
       BUTTONS
       ============================================ */

    .btn {
      display: inline-block;
      padding: 0.8rem 2.2rem;
      border-radius: 8px;
      border: none;
      background: var(--med-terracotta);
      color: var(--med-whitewash);
      font-family: 'Raleway', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(198, 93, 59, 0.25);
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: var(--med-sienna);
      color: var(--med-whitewash);
      box-shadow: 0 6px 20px rgba(198, 93, 59, 0.35);
      transform: translateY(-2px);
    }

    .btn--outline {
      background: transparent;
      color: var(--med-terracotta);
      border: 2px solid var(--med-terracotta);
      box-shadow: none;
    }

    .btn--outline:hover {
      background: var(--med-terracotta);
      color: var(--med-whitewash);
    }

    .btn--azure {
      background: var(--med-azure);
      box-shadow: 0 4px 14px rgba(27, 107, 147, 0.25);
    }

    .btn--azure:hover {
      background: #155a7d;
      box-shadow: 0 6px 20px rgba(27, 107, 147, 0.35);
    }

    /* ============================================
       IRON DIVIDER
       ============================================ */

    .iron-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 3rem auto;
      max-width: 400px;
      color: var(--med-clay);
      opacity: 0.35;
    }

    .iron-divider::before,
    .iron-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: currentColor;
    }

    .iron-divider span {
      width: 10px;
      height: 10px;
      border: 1.5px solid currentColor;
      transform: rotate(45deg);
    }

    /* ============================================
       CTA SECTION
       ============================================ */

    .cta {
      text-align: center;
      padding: 5rem 2rem;
      background:
        linear-gradient(
          180deg,
          var(--med-whitewash) 0%,
          var(--med-stucco) 100%
        );
    }

    .cta h2 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-style: italic;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    .cta p {
      margin-bottom: 2rem;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta .btn-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ============================================
       FOOTER
       ============================================ */

    footer {
      background: var(--med-cypress);
      color: var(--med-sand);
      text-align: center;
      padding: 3rem 2rem;
    }

    footer .footer-brand {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--med-whitewash);
      letter-spacing: 0.04em;
      margin-bottom: 0.75rem;
    }

    footer p {
      font-family: 'Raleway', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: var(--med-sand);
      opacity: 0.7;
    }

    footer .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      list-style: none;
      margin-bottom: 1.5rem;
    }

    footer .footer-links a {
      font-family: 'Raleway', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--med-sand);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    footer .footer-links a:hover {
      color: var(--med-terracotta);
    }

    /* ============================================
       RESPONSIVE
       ============================================ */

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 0.75rem;
      }

      .nav-links {
        gap: 1.25rem;
      }

      .hero h1 {
        font-size: clamp(2rem, 8vw, 3.5rem);
      }

      .feature {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <a href="#" class="nav-brand">Mediterraneo</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#discover">Discover</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <span class="hero-script">Welcome to the</span>
    <h1>Mediterranean Coast</h1>
    <div class="ornament">
      <span></span>
    </div>
    <p class="hero-subtitle">
      Sun-soaked terracotta, azure waters, and the timeless warmth
      of Southern European design -- where every detail is kissed by golden light.
    </p>
    <div style="margin-top: 2.5rem; position: relative; z-index: 1;">
      <a href="#discover" class="btn">Explore</a>
      <a href="#features" class="btn btn--outline" style="margin-left: 0.75rem;">Learn More</a>
    </div>
  </header>

  <!-- Tile Divider -->
  <hr class="tile-divider">

  <!-- Discover Section -->
  <section class="section" id="discover">
    <div class="section-header">
      <h2>Discover the Aesthetic</h2>
      <p>Ancient architecture meets sun-drenched simplicity in a design language
         shaped by centuries of Mediterranean craft and coastal living.</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <h3>Terracotta & Earth</h3>
        <p>Warm, sun-baked clay tones ground every composition in the rich
           earth of Southern European hillsides and ancient pottery traditions.</p>
        <span class="tag">Warmth</span>
      </div>
      <div class="card">
        <h3>Azure Waters</h3>
        <p>Deep cerulean and bright sky blue provide the essential cool contrast,
           reflecting the endless Mediterranean horizon where sea meets sky.</p>
        <span class="tag">Contrast</span>
      </div>
      <div class="card">
        <h3>Arches & Columns</h3>
        <p>Rounded archways, vaulted ceilings, and columned courtyards define
           the architectural vocabulary, bringing classical grandeur to every frame.</p>
        <span class="tag">Structure</span>
      </div>
    </div>
  </section>

  <!-- Iron Divider -->
  <div class="iron-divider">
    <span></span>
  </div>

  <!-- Feature Section -->
  <section class="section--stucco" id="features">
    <div class="section-inner" style="padding: 5rem 2rem;">
      <div class="feature">
        <div class="feature-image">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 60 L10 30 Q10 10 40 10 Q70 10 70 30 L70 60 Z"
                  stroke="currentColor" stroke-width="2" fill="none"/>
            <line x1="25" y1="60" x2="25" y2="35" stroke="currentColor" stroke-width="1.5"/>
            <line x1="40" y1="60" x2="40" y2="30" stroke="currentColor" stroke-width="1.5"/>
            <line x1="55" y1="60" x2="55" y2="35" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="feature-text">
          <h2>Classical Proportions, Modern Craft</h2>
          <p>Mediterranean design draws from millennia of architectural tradition.
             Roman arches, Moorish geometric tilework, and Byzantine mosaics inform
             a visual language that feels both ancient and effortlessly contemporary.</p>
          <p>Every element is placed with the same care as a hand-painted ceramic tile --
             purposeful, warm, and built to endure.</p>
          <a href="#" class="btn btn--azure">View Gallery</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta" id="contact">
    <h2>Begin Your Mediterranean Journey</h2>
    <p>Let the warmth of terracotta, the depth of azure, and the
       elegance of ancient craft guide your next design.</p>
    <div class="btn-group">
      <a href="#" class="btn">Get Started</a>
      <a href="#" class="btn btn--outline">View Collection</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-brand">Mediterraneo</div>
    <ul class="footer-links">
      <li><a href="#">Designs</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p>Designed in the spirit of the sun-soaked Mediterranean coast.</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use CSS custom properties for the full color system** so that palette adjustments require changing values in only one place; this also simplifies creating seasonal or regional palette variants (e.g., a Greek-island variant with more blue, or a Tuscan variant with deeper golds)
- **Apply the stucco texture overlay at very low opacity (0.03-0.05)** to avoid visual noise; the texture should be felt more than seen, adding subtle tactile depth without competing with content
- **Build arch-shaped containers with `border-radius: 50% 50% 0 0` or large fixed top-radius values** rather than clip-path, as border-radius is more performant and gracefully degrades on older browsers
- **Pair terracotta with azure at approximately a 3:1 ratio** -- earth tones should dominate the visual weight while blue provides intentional, eye-catching contrast points at links, buttons, and key interactive elements
- **Use warm-toned box-shadows** (e.g., `rgba(61, 57, 41, 0.08)` rather than `rgba(0, 0, 0, 0.08)`) to maintain the warm atmosphere even in structural shadow details
- **Implement the tile-pattern dividers as CSS gradients rather than images** for crisp rendering at all resolutions and easy color customization through CSS custom properties
- **Load Google Fonts with `display=swap`** and subset to Latin characters to minimize render-blocking time, especially important for image-heavy Mediterranean layouts where perceived performance matters
- **Test the warm palette against WCAG contrast requirements** -- some terracotta and sand combinations may fall below AA contrast ratios for body text, so use the darker Clay Pot or Cypress Shadow values for readable text on light backgrounds
