# Scandi Boho Design Reference

## Overview

Scandi Boho is a hybrid design aesthetic that fuses the clean, functional minimalism of Scandinavian design with the warm, textured eclecticism of bohemian style. Where Scandinavian design alone can feel clinical and restrained, and bohemian style alone can tip into visual chaos, their union produces something balanced and deeply livable: spaces and interfaces that are both organized and soulful, structured yet inviting.

The Scandinavian side contributes clean lines, open space, muted neutral backgrounds, and an unwavering commitment to functional simplicity. The bohemian side layers in warmth through handcrafted textures, woven materials, earthy accent colors, and collected-over-time imperfection. Rattan, macrame, jute, and linen sit alongside pale wood and white walls. Terracotta, mustard, and sage accents punctuate a foundation of cream, sand, and warm gray.

In web and digital design, Scandi Boho translates to layouts that breathe with generous whitespace and simple grid structures, but feel human and tactile through subtle textile-inspired textures, warm color palettes, and typography that pairs geometric sans-serifs with refined humanist serifs. Borders are soft, shadows are warm-tinted, and surfaces suggest natural materials rather than glossy screens. The overall effect is a digital equivalent of a sunlit room with linen curtains, a woven rug on pale hardwood floors, and a few carefully chosen ceramics on open shelves.

This aesthetic gained momentum in interior design during the mid-2010s as a reaction against both stark minimalism and overwhelming maximalism, finding a middle path that values simplicity without sacrificing personality. Its digital counterpart appeals to lifestyle brands, wellness platforms, creative portfolios, artisanal shops, and any project that wants to feel curated, warm, and unpretentious. Scandi Boho rejects both corporate sterility and decorative excess in favor of intentional warmth, natural materiality, and quiet confidence.

---

## Visual Characteristics

### Core Design Traits

- **Neutral base with earthy accents**: A foundation of warm whites, creams, and soft grays layered with terracotta, mustard, olive, and dusty rose accents that add life without competing for attention
- **Woven and textile textures**: Macrame, rattan, jute, and linen textures appear as subtle background patterns, decorative elements, or container treatments that evoke handcraft and warmth
- **Clean lines softened by organic forms**: Scandinavian geometric structure is present in grids and layout, but edges are rounded, shapes occasionally irregular, and rigid symmetry is relaxed
- **Natural material references**: Wood grain, raw ceramic surfaces, dried botanicals, and handmade pottery inform the visual language -- everything should feel like it was made by hand or grown from the earth
- **Generous negative space**: Inherited from Scandinavian design, whitespace (or rather, "warm space" in cream and sand tones) is treated as a deliberate element that gives content room to breathe
- **Layered textiles and patterns**: Geometric kilim patterns, subtle herringbone weaves, and organic brushstroke elements are layered at low opacity to create depth without clutter
- **Warm, diffused lighting quality**: Imagery and gradients suggest soft natural light -- golden hour warmth, linen-filtered sunlight, or the gentle glow of candles rather than harsh studio lighting
- **Handcrafted imperfection**: Slightly irregular borders, hand-drawn illustration elements, and organic shapes convey authenticity and human touch rather than machine precision
- **Indoor greenery and dried botanicals**: Eucalyptus, pampas grass, potted plants, and dried flower arrangements appear as decorative motifs and illustration subjects
- **Curated, not cluttered**: Every element feels intentionally chosen and placed, like objects on a well-styled shelf -- nothing random, nothing excessive, but nothing sterile either

### Design Principles

- **Function first, warmth second**: Begin with Scandinavian functional clarity, then layer bohemian warmth on top; never let decoration compromise usability
- **Texture over ornamentation**: Add visual interest through subtle material textures and woven patterns rather than decorative flourishes or bold graphic elements
- **Contrast through material, not color**: Distinguish sections and elements by switching between textures (linen, wood, ceramic) rather than through dramatic color shifts
- **Intentional asymmetry**: Layouts should feel balanced but not rigidly symmetrical; a slight offset or organic irregularity makes the design feel human and lived-in
- **Warmth in every neutral**: Avoid cool grays and blue-whites; every neutral in the palette should lean warm, as though tinted by natural sunlight or candlelight
- **Collected, not matched**: Elements should look like they were gathered over time from different sources, unified by a shared warmth and sensibility rather than identical styling
- **Restraint with personality**: Show character through a few well-chosen bohemian touches (a woven texture, a terracotta accent, a hand-drawn divider) rather than applying boho elements everywhere
- **Sustainability aesthetic**: The visual language should imply longevity, natural materials, and conscious choices -- nothing disposable, trendy, or plasticky

---

## Color Palette

The Scandi Boho palette starts with a warm neutral canvas drawn from Scandinavian design -- creams, linens, and soft sand tones that replace the harsher whites of pure minimalism. Onto this foundation, bohemian earth tones are carefully introduced: terracotta and clay for warmth, sage and olive for organic life, mustard for golden accents, and dusty rose for softness. The palette should feel like a walk through a sunlit craft market: natural, grounded, and gently colorful without ever becoming loud.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Warm Linen | `#FAF6F0` | Primary background; the warm-white canvas |
| Sand Cream | `#F0E8DC` | Card and surface backgrounds |
| Oat Milk | `#E8DFD0` | Alternate surface; section dividers |
| Desert Sand | `#D5C4AD` | Borders, subtle separators, muted accents |
| Terracotta | `#C07856` | Primary accent; CTAs, highlights, warmth |
| Burnt Clay | `#A4613A` | Hover states; deeper terracotta emphasis |
| Mustard Gold | `#D4A843` | Secondary accent; badges, tags, warm pops |
| Sage Green | `#8B9E7E` | Tertiary accent; nature references, balance |
| Olive Dusk | `#6B7153` | Dark green accent; footers, grounding |
| Dusty Rose | `#C9A0A0` | Soft accent; decorative elements, highlights |
| Warm Taupe | `#9E8B7D` | Secondary text; captions, metadata |
| Espresso | `#3D332C` | Primary text; headings, body copy |
| Rattan Brown | `#B89B78` | Decorative borders; woven texture references |
| Pampas Blush | `#E8CFC0` | Hero gradients; soft background washes |
| Stone Gray | `#A49E97` | Muted UI elements; disabled states |

### CSS Custom Properties

```css
:root {
  /* --- Backgrounds --- */
  --sb-linen: #FAF6F0;
  --sb-sand: #F0E8DC;
  --sb-oat: #E8DFD0;

  /* --- Borders & Separators --- */
  --sb-desert: #D5C4AD;
  --sb-rattan: #B89B78;

  /* --- Accents --- */
  --sb-terracotta: #C07856;
  --sb-burnt-clay: #A4613A;
  --sb-mustard: #D4A843;
  --sb-sage: #8B9E7E;
  --sb-olive: #6B7153;
  --sb-dusty-rose: #C9A0A0;
  --sb-pampas: #E8CFC0;

  /* --- Text --- */
  --sb-espresso: #3D332C;
  --sb-taupe: #9E8B7D;
  --sb-stone: #A49E97;

  /* --- Semantic Aliases --- */
  --sb-bg: var(--sb-linen);
  --sb-surface: var(--sb-sand);
  --sb-text: var(--sb-espresso);
  --sb-text-muted: var(--sb-taupe);
  --sb-accent: var(--sb-terracotta);
  --sb-accent-hover: var(--sb-burnt-clay);
  --sb-border: var(--sb-desert);
}
```

---

## Typography

Scandi Boho typography blends the geometric clarity of Scandinavian sans-serifs with the warm, humanist character of serif faces that echo bohemian artisanship. Headings use clean, slightly warm sans-serifs or refined display serifs, while body text prioritizes readability with generous line height. An optional handwritten or brush-style accent font can be used sparingly for labels, pull quotes, or decorative text to inject bohemian personality. Weights stay in the light-to-medium range; heavy bold weights feel too aggressive for this aesthetic.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Albert Sans** | 300, 400, 500, 600 | Headings; geometric sans with Scandinavian warmth | [Albert Sans](https://fonts.google.com/specimen/Albert+Sans) |
| **Lora** | 400, 500, 600 | Body text; humanist serif with bohemian warmth | [Lora](https://fonts.google.com/specimen/Lora) |
| **DM Sans** | 300, 400, 500 | UI labels, navigation; clean geometric sans | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Cormorant Garamond** | 300, 400, 500 | Display headings; refined, elegant serif | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Caveat** | 400, 500, 600 | Handwritten accents, quotes, decorative labels | [Caveat](https://fonts.google.com/specimen/Caveat) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Albert Sans 500 | Lora 400 | Clean Scandinavian structure with warm serif readability |
| Cormorant Garamond 400 | DM Sans 400 | Elegant editorial with functional body text |
| Albert Sans 600 | DM Sans 300 | All sans-serif; minimal Scandi with soft weight contrast |
| Cormorant Garamond 500 | Lora 400 | Rich serif pairing for content-heavy, literary layouts |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&family=Caveat:wght@400;500;600&display=swap');

body {
  font-family: 'Lora', 'Georgia', serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #3D332C;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Albert Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #3D332C;
  line-height: 1.25;
}

h1 { font-size: 2.4rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.3rem; }

.label, .nav-link {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.handwritten {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem;
  color: #9E8B7D;
}
```

---

## Layout Principles

- **Warm whitespace as foundation**: Generous margins and padding in warm cream/linen tones create a sense of spacious calm inherited from Scandinavian design; the page should feel like a sunlit room, not a packed shelf
- **Simple, modular grids**: Two- or three-column grids with generous gaps (24-40px) provide structure without rigidity; avoid complex multi-column magazine layouts
- **Centered content with comfortable max-widths**: Text-heavy content at 700-850px, grid layouts at 1000-1200px; never stretch to full viewport width
- **Gentle asymmetry**: Content blocks can be offset or unevenly weighted (e.g., 2fr/3fr splits) to feel organic and curated rather than rigidly mirrored
- **Single-purpose sections**: Each scroll section presents one idea or content group, separated by generous vertical spacing or subtle dividers
- **Layered surface depth**: Cards and containers sit on slightly different background tones (linen on sand, sand on oat) to create depth through tonal layering rather than heavy shadows
- **Responsive stacking**: Multi-column layouts gracefully collapse to single-column on mobile; maintain generous padding and warm backgrounds at all breakpoints
- **Horizontal rhythm**: Elements align to a consistent horizontal rhythm; left-aligned text with consistent start points creates a calm, readable flow
- **Botanical and woven dividers**: Section breaks use organic motifs (a brushstroke line, a woven pattern strip, a simple leaf SVG) rather than hard horizontal rules
- **Image containers with soft edges**: Photos use rounded corners (8-16px) and warm-tinted shadows; images should feel mounted on natural surfaces, not floating in void

---

## CSS / Design Techniques

### Scandi Boho Card

```css
.sb-card {
  background: #F0E8DC;
  border: 1px solid #D5C4AD;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(61, 51, 44, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.sb-card:hover {
  box-shadow: 0 4px 16px rgba(61, 51, 44, 0.1);
  transform: translateY(-2px);
}

.sb-card h3 {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: #3D332C;
  margin-bottom: 12px;
}

.sb-card p {
  font-family: 'Lora', serif;
  color: #9E8B7D;
  line-height: 1.7;
}
```

### Scandi Boho Button

```css
.sb-button {
  background: #C07856;
  color: #FAF6F0;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(192, 120, 86, 0.25);
}

.sb-button:hover {
  background: #A4613A;
  box-shadow: 0 4px 12px rgba(192, 120, 86, 0.35);
  transform: translateY(-1px);
}

/* Secondary / outlined variant */
.sb-button--outline {
  background: transparent;
  color: #C07856;
  border: 1.5px solid #C07856;
  box-shadow: none;
}

.sb-button--outline:hover {
  background: rgba(192, 120, 86, 0.08);
  box-shadow: none;
  transform: none;
}
```

### Navigation Bar

```css
.sb-nav {
  background: #FAF6F0;
  border-bottom: 1px solid #D5C4AD;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sb-nav__brand {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #3D332C;
  text-decoration: none;
  letter-spacing: 0.02em;
}

.sb-nav__links {
  display: flex;
  gap: 8px;
  list-style: none;
}

.sb-nav__links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #9E8B7D;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
}

.sb-nav__links a:hover,
.sb-nav__links a.active {
  color: #C07856;
  background: rgba(192, 120, 86, 0.08);
}
```

### Hero Section

```css
.sb-hero {
  background: linear-gradient(
    175deg,
    #FAF6F0 0%,
    #F0E8DC 40%,
    #E8CFC0 100%
  );
  padding: 100px 40px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.sb-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, transparent, #FAF6F0);
}

.sb-hero h1 {
  font-family: 'Albert Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: #3D332C;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.sb-hero p {
  font-family: 'Lora', serif;
  font-size: 1.2rem;
  color: #9E8B7D;
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.8;
}
```

### Woven Texture Background

```css
/* Linen weave pattern inspired by jute and natural textiles */
.sb-woven-bg {
  background-color: #FAF6F0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(61, 51, 44, 0.02) 3px,
      rgba(61, 51, 44, 0.02) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(61, 51, 44, 0.015) 3px,
      rgba(61, 51, 44, 0.015) 4px
    );
}

/* Rattan-inspired crosshatch for card surfaces */
.sb-rattan-texture {
  background-color: #F0E8DC;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 6px,
      rgba(184, 155, 120, 0.06) 6px,
      rgba(184, 155, 120, 0.06) 7px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 6px,
      rgba(184, 155, 120, 0.04) 6px,
      rgba(184, 155, 120, 0.04) 7px
    );
}
```

### Warm Gradient Backgrounds

```css
/* Sunrise warmth -- hero and feature sections */
.sb-gradient-sunrise {
  background: linear-gradient(
    175deg,
    #FAF6F0 0%,
    #E8CFC0 50%,
    #F0E8DC 100%
  );
}

/* Sand dune -- subtle depth for content areas */
.sb-gradient-sand {
  background: linear-gradient(
    180deg,
    #FAF6F0 0%,
    #F0E8DC 50%,
    #E8DFD0 100%
  );
}

/* Terracotta wash -- warm accent sections */
.sb-gradient-terracotta {
  background: linear-gradient(
    160deg,
    #F0E8DC 0%,
    rgba(192, 120, 86, 0.08) 50%,
    #FAF6F0 100%
  );
}

/* Sage mist -- nature-inspired sections */
.sb-gradient-sage {
  background: linear-gradient(
    170deg,
    #FAF6F0 0%,
    rgba(139, 158, 126, 0.06) 50%,
    #F0E8DC 100%
  );
}
```

### Section Divider

```css
/* Organic brushstroke-style divider */
.sb-divider {
  border: none;
  height: 2px;
  max-width: 120px;
  margin: 48px auto;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #D5C4AD 20%,
    #C07856 50%,
    #D5C4AD 80%,
    transparent 100%
  );
  border-radius: 2px;
}

/* Bohemian dot divider */
.sb-divider--dots {
  border: none;
  height: auto;
  text-align: center;
  margin: 40px 0;
  color: #D5C4AD;
  font-size: 1.2rem;
  letter-spacing: 0.6em;
}

.sb-divider--dots::before {
  content: '\25CF  \25CB  \25CF  \25CB  \25CF';
}
```

### Form Input

```css
.sb-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #D5C4AD;
  border-radius: 8px;
  background: #FAF6F0;
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: #3D332C;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.sb-input::placeholder {
  color: #A49E97;
  font-style: italic;
}

.sb-input:focus {
  outline: none;
  border-color: #C07856;
  box-shadow: 0 0 0 3px rgba(192, 120, 86, 0.12);
}

.sb-input-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #9E8B7D;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
  display: block;
}
```

---

## Design Do's and Don'ts

### Do's

- Use warm-tinted neutrals (cream, linen, sand) as backgrounds instead of pure white or cool gray -- every surface should feel sun-warmed
- Layer subtle textile textures (linen weave, jute crosshatch, rattan pattern) at very low opacity for tactile depth
- Pair clean geometric sans-serif headings with warm humanist serif body text to balance the Scandi and boho sides
- Add terracotta, sage, or mustard accents sparingly -- a few well-placed pops are more effective than saturating the layout
- Use rounded corners (8-16px) on cards and containers; soft edges evoke handcrafted pottery and natural forms
- Tint all box-shadows with warm brown (`rgba(61, 51, 44, ...)`) rather than pure black for a softer, more natural feel
- Incorporate organic SVG elements (dried botanicals, brushstroke dividers, woven patterns) as section decorations
- Apply warm photo filters (`filter: saturate(90%) sepia(5%)`) to maintain palette cohesion across imagery

### Don'ts

- Avoid pure white (`#FFFFFF`) backgrounds and cool-toned grays; they clash with the warm, earthy palette and feel clinical
- Do not use neon colors, electric accents, or high-saturation hues; they break the natural, muted harmony
- Avoid heavy drop shadows, gloss effects, or chrome-like surfaces; the aesthetic is matte, tactile, and grounded
- Do not overcomplicate layouts with too many columns, dense grids, or cluttered arrangements; Scandinavian simplicity must anchor the design
- Avoid purely geometric, machine-precise patterns; every pattern should feel slightly organic, hand-drawn, or textile-derived
- Do not use dark mode with black backgrounds; the aesthetic is fundamentally warm and light, rooted in natural illumination
- Avoid heavy bold font weights (700+) for extended text; they feel aggressive and undermine the soft, unhurried tone
- Do not mix too many bohemian accent colors at once; restraint is what separates Scandi Boho from pure bohemian maximalism

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Japandi** | Close sibling; both blend Scandinavian minimalism with another tradition's warmth, but Japandi draws from Japanese wabi-sabi while Scandi Boho draws from bohemian eclecticism |
| **Hygge** | Shares the Scandinavian warmth and coziness, but Hygge is purely Nordic without bohemian layering; Scandi Boho adds textured eclecticism to Hygge's fireside intimacy |
| **Cottagecore** | Both celebrate natural materials and handcraft, but Cottagecore is more overtly romantic and pastoral; Scandi Boho is more restrained and modern |
| **Earth Tones** | Shares the warm, natural color palette; Earth Tones is a broader approach while Scandi Boho applies it within a specific structural framework |
| **Geo-Boho** | Scandi Boho's pattern-heavy cousin; Geo-Boho emphasizes bold geometric patterns inspired by global textiles, while Scandi Boho keeps patterns subtle and secondary to clean structure |
| **Ethnic Chic** | Both draw from global craft traditions, but Ethnic Chic leans into bold cultural patterns and saturated colors; Scandi Boho filters these influences through Nordic restraint |
| **Coastal Style** | Shares the light, airy quality and natural materials, but Coastal uses cool ocean tones where Scandi Boho uses warm earth tones |
| **Danish Pastel** | Both originate from Scandinavian sensibilities, but Danish Pastel uses candy-like pastels while Scandi Boho grounds itself in earthy warmth |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scandi Boho Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&family=Caveat:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       SCANDI BOHO -- Quick-Start Template
       Scandinavian minimalism + bohemian warmth
       ============================================ */

    /* --- Reset & Base --- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --sb-linen: #FAF6F0;
      --sb-sand: #F0E8DC;
      --sb-oat: #E8DFD0;
      --sb-desert: #D5C4AD;
      --sb-rattan: #B89B78;
      --sb-terracotta: #C07856;
      --sb-burnt-clay: #A4613A;
      --sb-mustard: #D4A843;
      --sb-sage: #8B9E7E;
      --sb-olive: #6B7153;
      --sb-dusty-rose: #C9A0A0;
      --sb-pampas: #E8CFC0;
      --sb-espresso: #3D332C;
      --sb-taupe: #9E8B7D;
      --sb-stone: #A49E97;
    }

    body {
      font-family: 'Lora', 'Georgia', serif;
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--sb-espresso);
      background-color: var(--sb-linen);
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(61, 51, 44, 0.02) 3px,
          rgba(61, 51, 44, 0.02) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 3px,
          rgba(61, 51, 44, 0.015) 3px,
          rgba(61, 51, 44, 0.015) 4px
        );
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      color: var(--sb-terracotta);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: var(--sb-burnt-clay);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* --- Navigation --- */
    .nav {
      background: var(--sb-linen);
      border-bottom: 1px solid var(--sb-desert);
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(8px);
      background: rgba(250, 246, 240, 0.92);
    }

    .nav__brand {
      font-family: 'Albert Sans', sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--sb-espresso);
      text-decoration: none;
      letter-spacing: 0.02em;
    }

    .nav__links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--sb-taupe);
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 6px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      transition: color 0.2s ease, background 0.2s ease;
    }

    .nav__links a:hover,
    .nav__links a.active {
      color: var(--sb-terracotta);
      background: rgba(192, 120, 86, 0.08);
    }

    /* --- Hero --- */
    .hero {
      background: linear-gradient(
        175deg,
        var(--sb-linen) 0%,
        var(--sb-sand) 40%,
        var(--sb-pampas) 100%
      );
      padding: 100px 40px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(192, 120, 86, 0.06) 0%,
        transparent 70%
      );
      pointer-events: none;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(180deg, transparent, var(--sb-linen));
    }

    .hero__label {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--sb-terracotta);
      margin-bottom: 16px;
    }

    .hero h1 {
      font-family: 'Albert Sans', sans-serif;
      font-size: 3rem;
      font-weight: 300;
      color: var(--sb-espresso);
      margin-bottom: 16px;
      letter-spacing: -0.01em;
      line-height: 1.2;
    }

    .hero h1 em {
      font-family: 'Lora', serif;
      font-style: italic;
      font-weight: 400;
    }

    .hero p {
      font-family: 'Lora', serif;
      font-size: 1.15rem;
      color: var(--sb-taupe);
      max-width: 540px;
      margin: 0 auto 36px;
      line-height: 1.8;
    }

    /* --- Buttons --- */
    .btn {
      display: inline-block;
      padding: 12px 32px;
      border-radius: 8px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.25s ease;
      text-decoration: none;
      border: none;
    }

    .btn--primary {
      background: var(--sb-terracotta);
      color: var(--sb-linen);
      box-shadow: 0 2px 8px rgba(192, 120, 86, 0.25);
    }

    .btn--primary:hover {
      background: var(--sb-burnt-clay);
      color: var(--sb-linen);
      box-shadow: 0 4px 16px rgba(192, 120, 86, 0.35);
      transform: translateY(-1px);
    }

    .btn--outline {
      background: transparent;
      color: var(--sb-terracotta);
      border: 1.5px solid var(--sb-terracotta);
    }

    .btn--outline:hover {
      background: rgba(192, 120, 86, 0.08);
      color: var(--sb-burnt-clay);
    }

    /* --- Divider --- */
    .divider {
      border: none;
      height: 2px;
      max-width: 120px;
      margin: 48px auto;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--sb-desert) 20%,
        var(--sb-terracotta) 50%,
        var(--sb-desert) 80%,
        transparent 100%
      );
      border-radius: 2px;
    }

    /* --- Container --- */
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .container--narrow {
      max-width: 720px;
    }

    /* --- Section --- */
    .section {
      padding: 64px 0;
    }

    .section__label {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--sb-terracotta);
      margin-bottom: 8px;
    }

    .section__title {
      font-family: 'Albert Sans', sans-serif;
      font-size: 2rem;
      font-weight: 400;
      color: var(--sb-espresso);
      margin-bottom: 16px;
    }

    .section__intro {
      color: var(--sb-taupe);
      max-width: 600px;
      margin-bottom: 40px;
    }

    /* --- Card Grid --- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .card {
      background: var(--sb-sand);
      border: 1px solid var(--sb-desert);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 2px 8px rgba(61, 51, 44, 0.06);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 4px 16px rgba(61, 51, 44, 0.1);
      transform: translateY(-2px);
    }

    .card__icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    .card__icon--terracotta {
      background: rgba(192, 120, 86, 0.12);
      color: var(--sb-terracotta);
    }

    .card__icon--sage {
      background: rgba(139, 158, 126, 0.15);
      color: var(--sb-sage);
    }

    .card__icon--mustard {
      background: rgba(212, 168, 67, 0.12);
      color: var(--sb-mustard);
    }

    .card h3 {
      font-family: 'Albert Sans', sans-serif;
      font-weight: 500;
      font-size: 1.15rem;
      color: var(--sb-espresso);
      margin-bottom: 8px;
    }

    .card p {
      color: var(--sb-taupe);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* --- Feature Split --- */
    .feature-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
      padding: 64px 0;
    }

    .feature-split--reverse {
      direction: rtl;
    }

    .feature-split--reverse > * {
      direction: ltr;
    }

    .feature-split__image {
      border-radius: 16px;
      overflow: hidden;
      background: var(--sb-sand);
      aspect-ratio: 4 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--sb-desert);
    }

    .feature-split__image-placeholder {
      font-family: 'Caveat', cursive;
      font-size: 1.3rem;
      color: var(--sb-rattan);
    }

    .feature-split__content h2 {
      font-family: 'Albert Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--sb-espresso);
      margin-bottom: 16px;
    }

    .feature-split__content p {
      color: var(--sb-taupe);
      margin-bottom: 24px;
    }

    /* --- Testimonial --- */
    .testimonial {
      background: var(--sb-sand);
      border-radius: 16px;
      padding: 48px;
      text-align: center;
      border: 1px solid var(--sb-desert);
      position: relative;
    }

    .testimonial::before {
      content: '\201C';
      font-family: 'Cormorant Garamond', serif;
      font-size: 5rem;
      color: var(--sb-terracotta);
      opacity: 0.2;
      position: absolute;
      top: 16px;
      left: 32px;
      line-height: 1;
    }

    .testimonial blockquote {
      font-family: 'Lora', serif;
      font-size: 1.2rem;
      font-style: italic;
      color: var(--sb-espresso);
      max-width: 600px;
      margin: 0 auto 20px;
      line-height: 1.8;
    }

    .testimonial cite {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-size: 0.85rem;
      color: var(--sb-taupe);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* --- Newsletter --- */
    .newsletter {
      background: linear-gradient(
        170deg,
        var(--sb-sand) 0%,
        var(--sb-pampas) 100%
      );
      border-radius: 16px;
      padding: 48px;
      text-align: center;
      border: 1px solid var(--sb-desert);
    }

    .newsletter h2 {
      font-family: 'Albert Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--sb-espresso);
      margin-bottom: 8px;
    }

    .newsletter p {
      color: var(--sb-taupe);
      margin-bottom: 24px;
    }

    .newsletter__form {
      display: flex;
      gap: 12px;
      max-width: 460px;
      margin: 0 auto;
    }

    .newsletter__input {
      flex: 1;
      padding: 12px 16px;
      border: 1.5px solid var(--sb-desert);
      border-radius: 8px;
      background: var(--sb-linen);
      font-family: 'Lora', serif;
      font-size: 0.95rem;
      color: var(--sb-espresso);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .newsletter__input::placeholder {
      color: var(--sb-stone);
      font-style: italic;
    }

    .newsletter__input:focus {
      outline: none;
      border-color: var(--sb-terracotta);
      box-shadow: 0 0 0 3px rgba(192, 120, 86, 0.12);
    }

    /* --- Footer --- */
    .footer {
      background: var(--sb-oat);
      border-top: 1px solid var(--sb-desert);
      padding: 48px 0 32px;
      margin-top: 64px;
    }

    .footer__inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 40px;
    }

    .footer__brand {
      font-family: 'Albert Sans', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--sb-espresso);
      margin-bottom: 8px;
    }

    .footer__tagline {
      font-family: 'Caveat', cursive;
      font-size: 1.1rem;
      color: var(--sb-rattan);
    }

    .footer__links h4 {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--sb-taupe);
      margin-bottom: 12px;
    }

    .footer__links ul {
      list-style: none;
    }

    .footer__links li {
      margin-bottom: 8px;
    }

    .footer__links a {
      font-family: 'Lora', serif;
      font-size: 0.9rem;
      color: var(--sb-taupe);
    }

    .footer__links a:hover {
      color: var(--sb-terracotta);
    }

    .footer__bottom {
      text-align: center;
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid var(--sb-desert);
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem;
      color: var(--sb-stone);
    }

    /* --- Responsive --- */
    @media (max-width: 768px) {
      .nav {
        padding: 12px 20px;
      }

      .nav__links {
        gap: 0;
      }

      .nav__links a {
        padding: 6px 10px;
        font-size: 0.8rem;
      }

      .hero {
        padding: 64px 24px 56px;
      }

      .hero h1 {
        font-size: 2.2rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .feature-split {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .feature-split--reverse {
        direction: ltr;
      }

      .newsletter__form {
        flex-direction: column;
      }

      .footer__inner {
        flex-direction: column;
        gap: 24px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__brand">Scandi Boho</a>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Collection</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <p class="hero__label">Minimal warmth, textured calm</p>
    <h1>Where Clean Lines Meet <em>Woven Warmth</em></h1>
    <p>Scandinavian simplicity and bohemian soul, woven together into
       spaces that breathe with intention and glow with natural light.</p>
    <div style="display: flex; gap: 12px; justify-content: center;">
      <a href="#" class="btn btn--primary">Explore Collection</a>
      <a href="#" class="btn btn--outline">Our Story</a>
    </div>
  </section>

  <!-- Features -->
  <section class="section">
    <div class="container">
      <p class="section__label">What We Offer</p>
      <h2 class="section__title">Curated with Intention</h2>
      <p class="section__intro">
        Every piece is chosen for its craft, its material honesty, and
        the quiet warmth it brings to a space.
      </p>

      <div class="card-grid">
        <div class="card">
          <div class="card__icon card__icon--terracotta">&#9672;</div>
          <h3>Natural Materials</h3>
          <p>Rattan, jute, linen, and raw wood -- materials that age
             beautifully and connect you to the earth.</p>
        </div>
        <div class="card">
          <div class="card__icon card__icon--sage">&#9752;</div>
          <h3>Clean Simplicity</h3>
          <p>Scandinavian structure brings order and calm, ensuring
             every element has purpose and space to breathe.</p>
        </div>
        <div class="card">
          <div class="card__icon card__icon--mustard">&#9733;</div>
          <h3>Artisan Touch</h3>
          <p>Handcrafted details and collected textures bring bohemian
             soul to every surface and corner.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="container"><hr class="divider"></div>

  <!-- Feature Split -->
  <section class="container">
    <div class="feature-split">
      <div class="feature-split__image">
        <span class="feature-split__image-placeholder">woven textures + warm light</span>
      </div>
      <div class="feature-split__content">
        <p class="section__label">Our Philosophy</p>
        <h2>Less, but Warmer</h2>
        <p>We believe in the Scandinavian principle of owning fewer, better
           things -- and the bohemian wisdom that those things should have
           a story, a texture, and a human touch.</p>
        <a href="#" class="btn btn--primary">Learn More</a>
      </div>
    </div>

    <div class="feature-split feature-split--reverse">
      <div class="feature-split__image">
        <span class="feature-split__image-placeholder">dried botanicals + ceramic</span>
      </div>
      <div class="feature-split__content">
        <p class="section__label">Sustainability</p>
        <h2>Made to Last</h2>
        <p>Every material is chosen for longevity and low impact. Natural
           fibers, responsible sourcing, and timeless design that won't
           end up in landfill next season.</p>
        <a href="#" class="btn btn--outline">Our Materials</a>
      </div>
    </div>
  </section>

  <div class="container"><hr class="divider"></div>

  <!-- Testimonial -->
  <section class="section">
    <div class="container container--narrow">
      <div class="testimonial">
        <blockquote>
          The balance is what makes it special -- clean enough to think
          clearly, warm enough to feel at home. It is a rare thing when
          simplicity and soul coexist this naturally.
        </blockquote>
        <cite>Astrid Larsen, Interior Stylist</cite>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="section">
    <div class="container container--narrow">
      <div class="newsletter">
        <h2>Stay in the Loop</h2>
        <p>New pieces, styling ideas, and slow-living inspiration
           -- delivered to your inbox.</p>
        <form class="newsletter__form">
          <input type="email" class="newsletter__input" placeholder="your@email.com">
          <button type="submit" class="btn btn--primary">Subscribe</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div>
          <p class="footer__brand">Scandi Boho</p>
          <p class="footer__tagline">where clean lines meet woven warmth</p>
        </div>
        <div class="footer__links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div class="footer__links">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__bottom">Scandi Boho Studio. Crafted with intention.</p>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Linen texture via CSS**: Use `repeating-linear-gradient` in two perpendicular directions at very low opacity (`0.015-0.025`) to simulate woven textile without loading image assets; this creates a warm, tactile background with zero performance cost
- **Warm shadow tinting**: Always derive box-shadow colors from `rgba(61, 51, 44, ...)` (the espresso text color) rather than pure black; even at identical opacity values, warm-tinted shadows feel softer and more cohesive with the palette
- **Photo treatment for cohesion**: Apply `filter: saturate(90%) sepia(5%) brightness(102%)` to photographs to gently pull them into the warm, slightly desaturated Scandi Boho palette; this prevents jarring color clashes from untreated stock images
- **Terracotta as anchor accent**: Use terracotta (`#C07856`) as your single dominant accent for CTAs, active navigation states, and key highlights; introduce sage and mustard as secondary accents only in supporting roles to maintain visual hierarchy
- **Avoid pure white anywhere**: Replace `#FFFFFF` with `#FAF6F0` or `#F0E8DC` for all backgrounds and surfaces; pure white reads as cold and clinical against the warm palette and breaks the Scandi Boho illusion
- **SVG botanicals over icon fonts**: Use simple, single-color inline SVGs of dried branches, eucalyptus leaves, or pampas grass for decorative elements; keep them at low opacity (0.15-0.3) so they enhance texture without competing with content
- **Border radius sweet spot**: Keep border-radius between 8-16px for containers and 6-8px for buttons and inputs; avoid both sharp corners (too corporate) and fully rounded pills (too playful) -- the Scandi Boho radius should feel like gently smoothed pottery
- **Responsive texture scaling**: On mobile viewports, reduce or remove background texture patterns and increase padding slightly; the woven texture can feel noisy at small sizes, so let warm solid backgrounds carry the aesthetic on smaller screens
