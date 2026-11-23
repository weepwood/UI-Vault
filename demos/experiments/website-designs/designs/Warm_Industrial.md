# Warm Industrial Design Reference

## Overview

Warm Industrial is a design aesthetic that tempers the raw, utilitarian honesty of industrial architecture with inviting warmth drawn from natural materials, soft lighting, and artisanal craftsmanship. Where pure industrial design celebrates exposed steel, concrete, and mechanical infrastructure in austere, sometimes cold compositions, Warm Industrial introduces rich wood tones, aged leather, Edison-style filament bulbs, and textured textiles to create environments that feel simultaneously rugged and welcoming. The style emerged from the adaptive reuse of warehouses, factories, and lofts in cities like Brooklyn, Detroit, and East London -- spaces where residents softened cavernous steel-and-brick interiors with reclaimed wood tables, vintage leather armchairs, and pendant lighting that cast a golden amber glow.

The web design translation of Warm Industrial relies on a carefully balanced palette of cool structural grays and warm organic browns, with copper and brass metallic accents providing the connective tissue between the two temperature zones. Backgrounds reference concrete, weathered brick, and raw plaster through subtle texture overlays, while typography pairs bold, squared industrial sans-serifs for headings with warm, readable humanist typefaces for body text. The visual rhythm alternates between hard-edged grid structures -- evoking steel framing and factory floor plans -- and softer organic touches like rounded card corners, warm gradients, and generous whitespace that lets content breathe. Edison bulb imagery, exposed rivet details, and matte metal finishes recur as decorative motifs, reinforcing the industrial origin story without letting the design feel cold or unwelcoming.

The aesthetic appeals to craft breweries, artisanal coffee roasters, co-working spaces, maker studios, boutique hotels, and lifestyle brands that want to project authenticity, craftsmanship, and approachable sophistication. It communicates "we build real things by hand" with the warmth of "come sit by the fire." The key to executing Warm Industrial successfully in web design is maintaining that tension -- the steel must feel genuinely structural, and the warmth must feel genuinely earned, not decorative. Neither element should overwhelm the other; the beauty of the style lies in the balance between the two.

---

## Visual Characteristics

### Core Design Traits

- **Exposed structural elements**: Steel beams, visible rivets, bolt patterns, I-beam profiles, and pipe fittings treated as decorative features rather than hidden infrastructure
- **Warm wood surfaces**: Reclaimed timber, live-edge slabs, weathered oak, and walnut planks provide organic warmth against hard metal and concrete
- **Edison bulb lighting**: Exposed-filament light bulbs in vintage fixtures cast a warm amber glow, serving as both functional illumination and decorative motif
- **Aged leather textures**: Distressed leather in cognac, saddle brown, and caramel tones adds rich warmth to seating and surface imagery
- **Exposed brick walls**: Red, terracotta, and whitewashed brick surfaces provide textural depth and historical grounding
- **Matte metal finishes**: Brushed steel, blackened iron, weathered bronze, and hammered copper replace chrome and polished surfaces
- **Concrete and raw plaster**: Unfinished gray surfaces with visible aggregate, trowel marks, and natural imperfections serve as neutral anchoring backgrounds
- **Mixed material contrasts**: Deliberate juxtaposition of rough and smooth, warm and cool, organic and manufactured within single compositions
- **Utilitarian hardware details**: Exposed hinges, turnbuckles, pipe flanges, and industrial clamps used as decorative accents
- **Warm ambient glow**: Golden-hour color temperature pervades the lighting, softening hard industrial edges and unifying disparate materials
- **Handcrafted imperfection**: Visible tool marks, irregular edges, and artisanal inconsistencies valued over machine precision

### Design Principles

- **Balance temperature zones**: Every cool element (steel, concrete, gray) should be paired with a warm counterpart (wood, leather, amber) to maintain equilibrium
- **Let materials speak**: Surfaces should show their true character -- grain, patina, oxidation, wear -- rather than being masked by flat digital fills
- **Structural honesty**: Design structure should be visible and intentional, not hidden; grids, borders, and frames reference architectural framing
- **Contrast through texture**: Visual interest comes from material contrast (rough brick against smooth leather, matte steel against polished wood) rather than bold color
- **Amber warmth as unifier**: A consistent warm color temperature -- as if lit by Edison filaments -- ties disparate elements together
- **Functional first, decorative second**: Every element should appear to serve a structural or practical purpose, even when purely aesthetic
- **Restrained palette, rich texture**: Color range is narrow (grays, browns, ambers) but textural range is wide, creating depth through surface variation rather than hue

---

## Color Palette

The Warm Industrial palette is built on two temperature zones held in careful tension. The cool zone -- concrete grays, steel silvers, and charcoal blacks -- provides structural authority and grounding. The warm zone -- walnut browns, cognac ambers, terracotta, and copper metallics -- delivers the inviting human warmth that distinguishes this aesthetic from pure industrial design. Accent colors are drawn from patina, oxidation, and aged materials: the verdigris of weathered copper, the deep rust of oxidized iron, the warm gold of brass hardware. The overall effect should feel like late-afternoon sunlight pouring through a factory window onto a reclaimed-wood table.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Charcoal Steel | `#2B2D2F` | Primary dark background, deep sections, header/footer |
| Concrete Gray | `#4A4D50` | Secondary backgrounds, elevated surfaces, sidebar panels |
| Weathered Silver | `#7A7D82` | Muted borders, secondary text, structural dividers |
| Raw Plaster | `#B8B2A8` | Tertiary surfaces, disabled states, subtle backgrounds |
| Warm Linen | `#F0EBE1` | Primary light background, page base, content surfaces |
| Parchment White | `#FAF7F2` | Card surfaces, modal backgrounds, clean whitespace |
| Walnut Brown | `#5C3D2E` | Primary warm accent, headings on light backgrounds, anchoring elements |
| Saddle Leather | `#8B5E3C` | Secondary warm accent, interactive highlights, tags |
| Cognac Amber | `#C48A3F` | Tertiary warm accent, hover states, active borders |
| Edison Gold | `#E8B44C` | Feature accent, call-to-action highlights, warm glow effects |
| Aged Copper | `#B87333` | Metallic accent, decorative borders, icon fills |
| Brick Terracotta | `#9C4A3A` | Warm anchor accent, alert states, brick-reference elements |
| Patina Green | `#5E7A6A` | Cool organic accent, success states, nature-tinged details |
| Oxidized Rust | `#8B4513` | Deep warm accent, hover emphasis, aged-metal references |
| Forge Black | `#1A1A1C` | Deepest dark, text on light, high-contrast anchoring |

### CSS Custom Properties

```css
:root {
  /* Cool structural tones */
  --wi-charcoal: #2B2D2F;
  --wi-concrete: #4A4D50;
  --wi-silver: #7A7D82;
  --wi-plaster: #B8B2A8;

  /* Warm base tones */
  --wi-linen: #F0EBE1;
  --wi-parchment: #FAF7F2;

  /* Warm accent tones */
  --wi-walnut: #5C3D2E;
  --wi-leather: #8B5E3C;
  --wi-cognac: #C48A3F;
  --wi-edison: #E8B44C;
  --wi-copper: #B87333;

  /* Material accents */
  --wi-brick: #9C4A3A;
  --wi-patina: #5E7A6A;
  --wi-rust: #8B4513;
  --wi-forge: #1A1A1C;

  /* Functional assignments */
  --wi-bg-primary: var(--wi-linen);
  --wi-bg-secondary: var(--wi-parchment);
  --wi-bg-dark: var(--wi-charcoal);
  --wi-bg-surface: var(--wi-parchment);
  --wi-text-primary: var(--wi-forge);
  --wi-text-secondary: var(--wi-concrete);
  --wi-text-muted: var(--wi-silver);
  --wi-text-on-dark: var(--wi-linen);
  --wi-accent-primary: var(--wi-cognac);
  --wi-accent-warm: var(--wi-edison);
  --wi-accent-metallic: var(--wi-copper);
  --wi-border: var(--wi-plaster);
  --wi-border-strong: var(--wi-silver);
}
```

---

## Typography

Warm Industrial typography pairs the structural boldness of squared, industrial sans-serifs with the approachable warmth of humanist typefaces. Headings should feel engineered and confident -- like stenciled warehouse labels or stamped steel plates -- while body text must remain comfortable and readable, carrying the warmth of a handwritten shop ledger or a well-worn book. The contrast between hard display type and soft body type mirrors the core aesthetic tension between steel and wood.

### Recommended Google Fonts

| Font | Weight(s) | Style | Usage |
|------|-----------|-------|-------|
| **Oswald** | 400, 500, 600, 700 | Condensed industrial sans-serif with strong vertical emphasis | Primary headlines, section titles, navigation |
| **Barlow Condensed** | 400, 500, 600, 700 | Slightly rounded condensed sans with industrial character | Alternative headlines, subheadings, labels |
| **Source Sans 3** | 300, 400, 600 | Humanist sans-serif with warmth and excellent readability | Primary body text, paragraphs, UI elements |
| **Lora** | 400, 500, 600, 700 | Warm contemporary serif with brushed calligraphic roots | Alternative body text, editorial content, blockquotes |
| **Roboto Slab** | 300, 400, 700 | Geometric slab-serif with mechanical precision | Accent headings, feature labels, pricing |
| **DM Sans** | 400, 500, 700 | Clean geometric sans with warm neutrality | Secondary body text, captions, metadata |
| **Libre Baskerville** | 400, 700 | Refined serif optimized for screen readability | Long-form body text, article content |
| **Bebas Neue** | 400 | Bold, condensed, all-caps display face | Hero text, banner headlines, decorative display |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Oswald 600 | Source Sans 3 400 | Bold industrial structure with readable warmth |
| Bebas Neue 400 | Lora 400 | Stamped-steel display with editorial softness |
| Barlow Condensed 600 | DM Sans 400 | Modern factory signage with clean body readability |
| Roboto Slab 700 | Source Sans 3 300 | Mechanical slab precision with light, airy body |
| Oswald 700 | Libre Baskerville 400 | Heavy industrial heading with refined literary body |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

body {
  font-family: 'Source Sans 3', 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: var(--wi-text-primary);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Oswald', 'Barlow Condensed', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.15;
  color: var(--wi-walnut);
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.25rem); }
h3 { font-size: clamp(1.1rem, 2.5vw, 1.5rem); letter-spacing: 0.08em; }

/* Hero display text */
.wi-display {
  font-family: 'Bebas Neue', 'Oswald', sans-serif;
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.0;
  color: var(--wi-charcoal);
}

/* Warm editorial accent */
.wi-serif {
  font-family: 'Lora', Georgia, serif;
  font-weight: 400;
  font-style: italic;
  color: var(--wi-leather);
}

/* Industrial label text */
.wi-label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--wi-silver);
}
```

---

## Layout Principles

- **Visible grid structure**: Use explicit borders, dividers, and framing elements to make the underlying grid visible, referencing steel framing and architectural blueprints
- **Asymmetric balance**: Offset content blocks to create visual interest, like a workshop where tools and materials are arranged functionally rather than symmetrically
- **Generous whitespace as breathing room**: Wide margins and padding between sections let the eye rest, mimicking the open floor plans of converted loft spaces
- **Mixed-width sections**: Alternate between full-width atmospheric sections (hero, feature bands) and contained narrow-width content areas (600-800px body text)
- **Horizontal dividers as structural beams**: Use thick horizontal rules, border treatments, or decorative dividers between sections to reference I-beams and load-bearing elements
- **Card-based content organization**: Present information in distinct card containers that suggest individual material samples, specification sheets, or pinned workshop notes
- **Two-column and three-column grids**: Modular grids with visible gutters reference factory floor plans and industrial shelving systems
- **Dark and light section alternation**: Alternate between warm light sections (linen/parchment backgrounds) and dark structural sections (charcoal/forge backgrounds) to create visual rhythm and depth
- **Image-heavy with texture integration**: Photography of wood grain, brick, metal, and leather should bleed into layouts as background textures, not sit in isolated containers
- **Mobile stacking with preserved warmth**: On small screens, collapse grids to single-column but maintain warm background tones, texture overlays, and typographic contrast

---

## CSS / Design Techniques

### Warm Industrial Card

```css
.wi-card {
  background: var(--wi-parchment);
  border: 1px solid var(--wi-plaster);
  border-radius: 4px;
  padding: 32px;
  position: relative;
  box-shadow:
    0 1px 3px rgba(26, 26, 28, 0.06),
    0 6px 16px rgba(26, 26, 28, 0.04);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.wi-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--wi-copper),
    var(--wi-cognac),
    var(--wi-edison)
  );
  border-radius: 4px 4px 0 0;
}

.wi-card:hover {
  border-color: var(--wi-cognac);
  box-shadow:
    0 2px 6px rgba(26, 26, 28, 0.08),
    0 12px 28px rgba(26, 26, 28, 0.06);
}

.wi-card h3 {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--wi-walnut);
  margin-bottom: 12px;
}

.wi-card p {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--wi-concrete);
}

.wi-card .tag {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--wi-copper);
  border: 1px solid var(--wi-copper);
  padding: 4px 12px;
  margin-top: 16px;
  border-radius: 2px;
}
```

### Warm Industrial Button

```css
.wi-button {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 12px 32px;
  border: 2px solid var(--wi-walnut);
  background: var(--wi-walnut);
  color: var(--wi-linen);
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;
}

.wi-button:hover {
  background: var(--wi-cognac);
  border-color: var(--wi-cognac);
  color: var(--wi-forge);
  box-shadow: 0 4px 12px rgba(196, 138, 63, 0.25);
}

.wi-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 6px rgba(196, 138, 63, 0.2);
}

/* Ghost variant */
.wi-button--ghost {
  background: transparent;
  color: var(--wi-walnut);
}

.wi-button--ghost:hover {
  background: var(--wi-walnut);
  color: var(--wi-linen);
  box-shadow: 0 4px 12px rgba(92, 61, 46, 0.2);
}

/* Copper metallic variant */
.wi-button--copper {
  background: linear-gradient(
    135deg,
    var(--wi-copper),
    var(--wi-cognac),
    var(--wi-edison)
  );
  border: none;
  color: var(--wi-forge);
  padding: 13px 33px;
}

.wi-button--copper:hover {
  background: linear-gradient(
    135deg,
    var(--wi-edison),
    var(--wi-cognac),
    var(--wi-copper)
  );
  box-shadow: 0 4px 16px rgba(184, 115, 51, 0.3);
}
```

### Warm Industrial Navigation

```css
.wi-nav {
  background: var(--wi-charcoal);
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border-bottom: 3px solid var(--wi-copper);
  position: sticky;
  top: 0;
  z-index: 100;
}

.wi-nav-logo {
  font-family: 'Bebas Neue', 'Oswald', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  color: var(--wi-edison);
  text-decoration: none;
}

.wi-nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.wi-nav-links a {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--wi-plaster);
  text-decoration: none;
  padding: 4px 0;
  position: relative;
  transition: color 0.25s ease;
}

.wi-nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--wi-cognac);
  transition: width 0.3s ease;
}

.wi-nav-links a:hover {
  color: var(--wi-edison);
}

.wi-nav-links a:hover::after {
  width: 100%;
}
```

### Warm Industrial Hero

```css
.wi-hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  background: var(--wi-charcoal);
  position: relative;
  overflow: hidden;
}

/* Subtle concrete texture overlay */
.wi-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.5;
  pointer-events: none;
}

/* Warm ambient glow from below */
.wi-hero::after {
  content: '';
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(232, 180, 76, 0.08) 0%,
    rgba(196, 138, 63, 0.04) 40%,
    transparent 70%
  );
  pointer-events: none;
}

.wi-hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.wi-hero-title {
  font-family: 'Bebas Neue', 'Oswald', sans-serif;
  font-size: clamp(3rem, 10vw, 7rem);
  letter-spacing: 0.08em;
  line-height: 1.0;
  color: var(--wi-linen);
  margin-bottom: 24px;
}

.wi-hero-subtitle {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--wi-plaster);
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto 40px;
}

.wi-hero-divider {
  width: 60px;
  height: 3px;
  background: var(--wi-copper);
  margin: 0 auto 40px;
}
```

### Edison Glow Effect

```css
/* Warm ambient glow for accent elements */
.wi-glow {
  position: relative;
}

.wi-glow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    rgba(232, 180, 76, 0.12) 0%,
    rgba(196, 138, 63, 0.06) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: -1;
}

/* Edison bulb icon using CSS */
.wi-edison-bulb {
  width: 40px;
  height: 56px;
  border: 2px solid var(--wi-cognac);
  border-radius: 50% 50% 8px 8px;
  position: relative;
  margin: 0 auto;
}

.wi-edison-bulb::before {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 12px;
  border: 2px solid var(--wi-cognac);
  border-top: none;
  border-radius: 0 0 4px 4px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    var(--wi-cognac) 2px,
    var(--wi-cognac) 4px
  );
}

.wi-edison-bulb::after {
  content: '';
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--wi-edison);
  box-shadow:
    0 0 12px rgba(232, 180, 76, 0.5),
    0 0 32px rgba(232, 180, 76, 0.2);
  animation: filament-flicker 4s ease-in-out infinite;
}

@keyframes filament-flicker {
  0%, 100% { opacity: 0.85; box-shadow: 0 0 12px rgba(232,180,76,0.5), 0 0 32px rgba(232,180,76,0.2); }
  50% { opacity: 1; box-shadow: 0 0 16px rgba(232,180,76,0.6), 0 0 48px rgba(232,180,76,0.3); }
  73% { opacity: 0.9; }
  74% { opacity: 0.7; }
  75% { opacity: 0.95; }
}
```

### Structural Dividers

```css
/* Steel beam divider */
.wi-divider {
  border: none;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--wi-plaster) 15%,
    var(--wi-silver) 50%,
    var(--wi-plaster) 85%,
    transparent 100%
  );
  margin: 48px 0;
}

/* Rivet-accented divider */
.wi-divider--rivet {
  border: none;
  height: 1px;
  background: var(--wi-plaster);
  margin: 48px 0;
  position: relative;
}

.wi-divider--rivet::before,
.wi-divider--rivet::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--wi-silver);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
}

.wi-divider--rivet::before { left: 20px; }
.wi-divider--rivet::after { right: 20px; }

/* Copper accent rule */
.wi-divider--copper {
  border: none;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--wi-copper),
    var(--wi-cognac),
    var(--wi-edison),
    var(--wi-cognac),
    var(--wi-copper)
  );
  margin: 48px auto;
  width: 120px;
}
```

### Dark Section with Texture

```css
.wi-section-dark {
  background: var(--wi-charcoal);
  color: var(--wi-linen);
  padding: 80px 40px;
  position: relative;
}

/* Concrete noise texture */
.wi-section-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
}

.wi-section-dark h2 {
  color: var(--wi-edison);
}

.wi-section-dark p {
  color: var(--wi-plaster);
}

/* Warm section variant */
.wi-section-warm {
  background: linear-gradient(
    180deg,
    var(--wi-linen) 0%,
    #EDE6DA 100%
  );
  padding: 80px 40px;
}
```

### Copper Metallic Gradient

```css
/* Copper metallic gradient for borders and accents */
.wi-copper-border {
  border: 2px solid transparent;
  border-image: linear-gradient(
    135deg,
    #8B5E3C,
    #B87333,
    #D4A04A,
    #B87333,
    #8B5E3C
  ) 1;
}

/* Copper metallic text */
.wi-copper-text {
  background: linear-gradient(
    135deg,
    #8B5E3C,
    #B87333,
    #D4A04A,
    #E8B44C,
    #D4A04A,
    #B87333
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Brushed metal surface */
.wi-brushed-metal {
  background:
    repeating-linear-gradient(
      90deg,
      rgba(122, 125, 130, 0.03) 0px,
      rgba(122, 125, 130, 0.03) 1px,
      transparent 1px,
      transparent 3px
    ),
    linear-gradient(
      180deg,
      #3A3C3F,
      #4A4D50,
      #3A3C3F
    );
}
```

---

## Design Do's and Don'ts

### Do's

- Balance every cold industrial element (steel, concrete, gray) with a warm organic counterpart (wood tone, leather, amber glow) to maintain the signature tension
- Use subtle texture overlays (noise, grain, linen patterns) to give flat digital surfaces the tactile quality of real materials
- Apply the copper-to-gold gradient sparingly as a premium accent; its impact depends on scarcity against the neutral palette
- Let typography do the heavy structural work; bold condensed uppercase headings with generous letter-spacing evoke stamped steel labels
- Include visible borders, dividers, and framing elements that reference architectural steel framing and structural beams
- Use warm box-shadows with a slight amber tint (rgba(196, 138, 63, 0.08)) rather than pure black to integrate shadows with the warm palette
- Alternate between dark (charcoal) and light (linen) sections to create visual rhythm that mirrors the material contrast of the aesthetic
- Choose photography and imagery that features real textures: reclaimed wood grain, weathered brick, patina on metal, aged leather

### Don'ts

- Allow the palette to go entirely cold and gray; without the warm wood-and-amber counterbalance, the design becomes generic industrial or brutalist
- Use pure black (#000000) or pure white (#FFFFFF); warm industrial lives in the tonal middle ground of off-blacks and warm whites
- Apply glossy, polished, or chrome-bright metallic finishes; the metals in this aesthetic are matte, brushed, weathered, and oxidized
- Over-decorate with rustic cliches (gear icons, wrench illustrations, excessive exposed-brick photography); the aesthetic should feel lived-in, not themed
- Use bright, saturated accent colors (neon, electric blue, hot pink); accents should be drawn from material oxidation and patina, not synthetic dyes
- Forget texture entirely by using flat, solid-color backgrounds; even subtle noise or grain overlay adds essential material character
- Pair only warm elements together without structural contrast; wood + leather + amber without any steel or concrete reads as rustic, not industrial
- Make interactive elements too subtle; buttons and links need clear affordance through border weight, color contrast, and hover state definition

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Industrial Gothic** | Shares exposed infrastructure and metal textures but Industrial Gothic is dramatically darker, more oppressive, and emphasizes decay and dread where Warm Industrial emphasizes comfort and craft |
| **Japandi** | Both blend warm natural materials with structural restraint; Japandi is quieter, more minimal, and draws from Japanese-Scandinavian refinement where Warm Industrial is bolder, heavier, and factory-rooted |
| **Craftcore** | Overlapping celebration of handmade materials and artisanal imperfection; Craftcore is textile-focused and folk-inspired while Warm Industrial centers on steel-and-wood construction |
| **Dark Luxe** | Both use rich dark palettes with metallic gold/copper accents; Dark Luxe is glamorous, polished, and aspirational while Warm Industrial is utilitarian, textured, and authenticity-driven |
| **Earth Tones** | Shares the warm brown-amber-terracotta color range and natural material focus; Earth Tones is softer, more organic, and nature-rooted while Warm Industrial retains hard structural edges |
| **Hygge** | Both prioritize warmth and comfort; Hygge achieves it through soft textiles, candles, and rounded forms while Warm Industrial achieves it through Edison bulbs, leather, and wood against hard metal |
| **Arts and Crafts** | Shared philosophy of material honesty and visible craftsmanship; Arts and Crafts is ornamental and pattern-rich while Warm Industrial is more austere and structurally minimal |
| **Frasurbane** | Both reference the late-90s/early-2000s urban loft aesthetic with leather, wood, and muted tones; Frasurbane is more domestic and upper-middle-class while Warm Industrial is grittier and workshop-adjacent |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warm Industrial -- Forge & Foundry</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      /* Cool structural tones */
      --wi-charcoal: #2B2D2F;
      --wi-concrete: #4A4D50;
      --wi-silver: #7A7D82;
      --wi-plaster: #B8B2A8;

      /* Warm base tones */
      --wi-linen: #F0EBE1;
      --wi-parchment: #FAF7F2;

      /* Warm accent tones */
      --wi-walnut: #5C3D2E;
      --wi-leather: #8B5E3C;
      --wi-cognac: #C48A3F;
      --wi-edison: #E8B44C;
      --wi-copper: #B87333;

      /* Material accents */
      --wi-brick: #9C4A3A;
      --wi-patina: #5E7A6A;
      --wi-rust: #8B4513;
      --wi-forge: #1A1A1C;

      /* Functional */
      --wi-bg-primary: var(--wi-linen);
      --wi-bg-dark: var(--wi-charcoal);
      --wi-text-primary: var(--wi-forge);
      --wi-text-on-dark: var(--wi-linen);
    }

    body {
      font-family: 'Source Sans 3', 'DM Sans', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--wi-text-primary);
      background: var(--wi-bg-primary);
      -webkit-font-smoothing: antialiased;
    }

    /* ================================
       NAVIGATION
       ================================ */
    .nav {
      background: var(--wi-charcoal);
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
      border-bottom: 3px solid var(--wi-copper);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0.1em;
      color: var(--wi-edison);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 32px;
    }

    .nav-links a {
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--wi-plaster);
      text-decoration: none;
      padding: 4px 0;
      position: relative;
      transition: color 0.25s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--wi-cognac);
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--wi-edison);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    /* ================================
       HERO SECTION
       ================================ */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 40px;
      background: var(--wi-charcoal);
      position: relative;
      overflow: hidden;
    }

    /* Noise texture */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.5;
      pointer-events: none;
    }

    /* Warm Edison glow from below */
    .hero::after {
      content: '';
      position: absolute;
      bottom: -15%;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 55%;
      background: radial-gradient(
        ellipse at center,
        rgba(232, 180, 76, 0.1) 0%,
        rgba(196, 138, 63, 0.05) 40%,
        transparent 70%
      );
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 800px;
    }

    .hero-label {
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--wi-copper);
      margin-bottom: 20px;
    }

    .hero-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(3rem, 10vw, 7rem);
      letter-spacing: 0.08em;
      line-height: 1.0;
      color: var(--wi-linen);
      margin-bottom: 24px;
    }

    .hero-subtitle {
      font-family: 'Lora', Georgia, serif;
      font-style: italic;
      font-size: clamp(1rem, 2.5vw, 1.35rem);
      color: var(--wi-plaster);
      line-height: 1.65;
      max-width: 540px;
      margin: 0 auto 40px;
    }

    .hero-divider {
      width: 60px;
      height: 3px;
      background: var(--wi-copper);
      margin: 0 auto 40px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ================================
       BUTTONS
       ================================ */
    .button {
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 13px 32px;
      border: 2px solid var(--wi-linen);
      background: var(--wi-linen);
      color: var(--wi-walnut);
      border-radius: 3px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .button:hover {
      background: var(--wi-cognac);
      border-color: var(--wi-cognac);
      color: var(--wi-forge);
      box-shadow: 0 4px 16px rgba(196, 138, 63, 0.3);
    }

    .button--ghost {
      background: transparent;
      color: var(--wi-linen);
    }

    .button--ghost:hover {
      background: var(--wi-linen);
      border-color: var(--wi-linen);
      color: var(--wi-walnut);
      box-shadow: 0 4px 16px rgba(240, 235, 225, 0.15);
    }

    .button--copper {
      background: linear-gradient(135deg, var(--wi-copper), var(--wi-cognac), var(--wi-edison));
      border: none;
      color: var(--wi-forge);
      padding: 15px 34px;
    }

    .button--copper:hover {
      background: linear-gradient(135deg, var(--wi-edison), var(--wi-cognac), var(--wi-copper));
      box-shadow: 0 4px 20px rgba(184, 115, 51, 0.35);
    }

    /* ================================
       DIVIDERS
       ================================ */
    .divider {
      border: none;
      height: 1px;
      background: var(--wi-plaster);
      margin: 0;
    }

    .divider--copper {
      height: 2px;
      background: linear-gradient(
        90deg,
        var(--wi-copper),
        var(--wi-cognac),
        var(--wi-edison),
        var(--wi-cognac),
        var(--wi-copper)
      );
      width: 100px;
      margin: 0 auto;
    }

    /* ================================
       INTRO / ABOUT SECTION
       ================================ */
    .intro {
      padding: 80px 40px;
      max-width: 780px;
      margin: 0 auto;
      text-align: center;
    }

    .intro h2 {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: 1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wi-walnut);
      margin-bottom: 16px;
    }

    .intro-lead {
      font-family: 'Lora', Georgia, serif;
      font-style: italic;
      font-size: 1.1rem;
      color: var(--wi-leather);
      margin-bottom: 24px;
    }

    .intro p {
      font-size: 1rem;
      color: var(--wi-concrete);
      line-height: 1.8;
    }

    /* ================================
       CARD GRID
       ================================ */
    .section {
      padding: 80px 40px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-header h2 {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: 1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wi-walnut);
      margin-bottom: 8px;
    }

    .section-header p {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 0.95rem;
      color: var(--wi-silver);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      max-width: 1080px;
      margin: 0 auto;
    }

    .card {
      background: var(--wi-parchment);
      border: 1px solid var(--wi-plaster);
      border-radius: 4px;
      padding: 32px;
      position: relative;
      box-shadow:
        0 1px 3px rgba(26, 26, 28, 0.06),
        0 6px 16px rgba(26, 26, 28, 0.04);
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--wi-copper),
        var(--wi-cognac),
        var(--wi-edison)
      );
      border-radius: 4px 4px 0 0;
    }

    .card:hover {
      border-color: var(--wi-cognac);
      box-shadow:
        0 2px 6px rgba(26, 26, 28, 0.08),
        0 12px 28px rgba(26, 26, 28, 0.06);
    }

    .card-icon {
      font-size: 1.75rem;
      margin-bottom: 16px;
    }

    .card h3 {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wi-walnut);
      margin-bottom: 12px;
    }

    .card p {
      font-size: 0.93rem;
      line-height: 1.7;
      color: var(--wi-concrete);
    }

    .tag {
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--wi-copper);
      border: 1px solid var(--wi-copper);
      padding: 3px 10px;
      margin-top: 16px;
      border-radius: 2px;
    }

    /* ================================
       DARK FEATURE SECTION
       ================================ */
    .feature-dark {
      background: var(--wi-charcoal);
      padding: 80px 40px;
      position: relative;
      overflow: hidden;
    }

    .feature-dark::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      max-width: 1000px;
      margin: 0 auto;
      align-items: center;
      position: relative;
      z-index: 10;
    }

    .feature-text h2 {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: 1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wi-edison);
      margin-bottom: 16px;
    }

    .feature-text p {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 1rem;
      line-height: 1.8;
      color: var(--wi-plaster);
      margin-bottom: 24px;
    }

    .feature-list {
      list-style: none;
      padding: 0;
    }

    .feature-list li {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 0.95rem;
      color: var(--wi-plaster);
      padding: 8px 0;
      border-bottom: 1px solid rgba(184, 178, 168, 0.12);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .feature-list li::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--wi-copper);
      flex-shrink: 0;
    }

    .feature-image {
      background: var(--wi-concrete);
      border-radius: 4px;
      aspect-ratio: 4 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(184, 178, 168, 0.15);
    }

    .feature-image-label {
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wi-silver);
    }

    /* Copper border accent on image */
    .feature-image::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--wi-copper),
        var(--wi-cognac),
        var(--wi-edison)
      );
    }

    /* ================================
       QUOTE / TESTIMONIAL
       ================================ */
    .quote-section {
      padding: 80px 40px;
      text-align: center;
      background: linear-gradient(180deg, var(--wi-linen) 0%, #EDE6DA 100%);
    }

    .quote-section blockquote {
      font-family: 'Lora', Georgia, serif;
      font-style: italic;
      font-size: clamp(1.15rem, 2.5vw, 1.5rem);
      line-height: 1.7;
      color: var(--wi-walnut);
      max-width: 680px;
      margin: 0 auto 20px;
    }

    .quote-section cite {
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--wi-silver);
      font-style: normal;
    }

    /* ================================
       CTA BAND
       ================================ */
    .cta-band {
      background: var(--wi-walnut);
      padding: 56px 40px;
      text-align: center;
      position: relative;
    }

    .cta-band::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--wi-copper), var(--wi-edison), var(--wi-copper));
    }

    .cta-band h2 {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wi-linen);
      margin-bottom: 12px;
    }

    .cta-band p {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 0.95rem;
      color: var(--wi-plaster);
      margin-bottom: 28px;
    }

    /* ================================
       FOOTER
       ================================ */
    .footer {
      background: var(--wi-forge);
      padding: 48px 40px;
      text-align: center;
      border-top: 3px solid var(--wi-copper);
    }

    .footer-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.3rem;
      letter-spacing: 0.1em;
      color: var(--wi-edison);
      margin-bottom: 16px;
    }

    .footer p {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 0.85rem;
      color: var(--wi-silver);
      line-height: 1.6;
    }

    .footer-links {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 28px;
    }

    .footer-links a {
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--wi-plaster);
      text-decoration: none;
      transition: color 0.25s ease;
    }

    .footer-links a:hover {
      color: var(--wi-edison);
    }

    /* ================================
       RESPONSIVE
       ================================ */
    @media (max-width: 768px) {
      .nav { padding: 0 20px; height: 56px; }
      .nav-links { gap: 20px; }
      .nav-links a { font-size: 0.7rem; }

      .hero { min-height: 70vh; padding: 60px 24px; }
      .hero-actions { flex-direction: column; align-items: center; }

      .intro { padding: 60px 24px; }
      .section { padding: 60px 24px; }
      .cards { grid-template-columns: 1fr; gap: 20px; }

      .feature-dark { padding: 60px 24px; }
      .feature-grid { grid-template-columns: 1fr; gap: 40px; }
      .feature-image { order: -1; }

      .quote-section { padding: 60px 24px; }
      .cta-band { padding: 48px 24px; }
      .footer { padding: 40px 24px; }
      .footer-links { flex-wrap: wrap; gap: 16px; }
    }

    @media (max-width: 480px) {
      .nav-links a:nth-child(4) { display: none; }
      .hero-title { letter-spacing: 0.04em; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav-logo">FORGE & FOUNDRY</a>
    <div class="nav-links">
      <a href="#">Workshop</a>
      <a href="#">Materials</a>
      <a href="#">Process</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="hero-content">
      <div class="hero-label">Est. 2024 -- Handcrafted with Purpose</div>
      <h1 class="hero-title">WARM INDUSTRIAL</h1>
      <div class="hero-divider"></div>
      <p class="hero-subtitle">Where raw steel meets warm timber, and Edison filaments
        cast amber light across surfaces shaped by hand and time.</p>
      <div class="hero-actions">
        <a href="#" class="button">Explore the Workshop</a>
        <a href="#" class="button button--ghost">View Materials</a>
      </div>
    </div>
  </header>

  <!-- Intro -->
  <section class="intro">
    <h2>Built to Last, Designed to Welcome</h2>
    <p class="intro-lead">We believe the most beautiful spaces hold tension between
      strength and warmth, between structure and soul.</p>
    <p>Every piece in our collection honors the raw honesty of industrial
      craft while embracing the warmth of natural materials. Reclaimed oak
      meets blackened steel. Hand-stitched leather rests against weathered
      concrete. The result is a space that feels both engineered and alive --
      a workshop where you would want to linger.</p>
  </section>

  <hr class="divider--copper">

  <!-- Cards -->
  <section class="section">
    <div class="section-header">
      <h2>Our Materials</h2>
      <p>Sourced with intention. Crafted with care.</p>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-icon">&#9670;</div>
        <h3>Reclaimed Timber</h3>
        <p>Salvaged oak and walnut beams, each carrying decades of patina
          and character. No two pieces share the same grain story.</p>
        <span class="tag">Wood</span>
      </div>
      <div class="card">
        <div class="card-icon">&#9670;</div>
        <h3>Blackened Steel</h3>
        <p>Hot-rolled steel with a matte black oxide finish, hand-welded
          into frames, brackets, and structural accents that anchor every space.</p>
        <span class="tag">Metal</span>
      </div>
      <div class="card">
        <div class="card-icon">&#9670;</div>
        <h3>Saddle Leather</h3>
        <p>Full-grain vegetable-tanned leather in cognac and caramel tones,
          developing a rich patina with every year of use and touch.</p>
        <span class="tag">Leather</span>
      </div>
    </div>
  </section>

  <!-- Dark Feature Section -->
  <section class="feature-dark">
    <div class="feature-grid">
      <div class="feature-text">
        <h2>The Workshop Process</h2>
        <p>Every piece begins with material selection and ends with hand
          finishing. We do not rush. We do not mass-produce. Each weld is
          ground smooth by hand. Each board is planed and oiled until the
          grain sings.</p>
        <ul class="feature-list">
          <li>Hand-selected reclaimed materials</li>
          <li>Traditional joinery techniques</li>
          <li>Matte blackened steel fabrication</li>
          <li>Natural oil and wax finishing</li>
          <li>Edison-style ambient lighting design</li>
        </ul>
      </div>
      <div class="feature-image">
        <span class="feature-image-label">[ Workshop Photo ]</span>
      </div>
    </div>
  </section>

  <!-- Quote -->
  <section class="quote-section">
    <hr class="divider--copper" style="margin-bottom: 40px;">
    <blockquote>&ldquo;The beauty of warm industrial design is the tension it holds --
      steel strong enough to bear weight, wood warm enough to touch, light
      soft enough to linger by.&rdquo;</blockquote>
    <cite>-- The Workshop Journal</cite>
    <hr class="divider--copper" style="margin-top: 40px;">
  </section>

  <!-- CTA Band -->
  <section class="cta-band">
    <h2>Start Your Commission</h2>
    <p>Every project begins with a conversation about materials, space, and purpose.</p>
    <a href="#" class="button--copper button">Begin a Project</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-logo">FORGE & FOUNDRY</div>
    <p>Handcrafted goods at the intersection of steel and warmth.</p>
    <div class="footer-links">
      <a href="#">Workshop</a>
      <a href="#">Materials</a>
      <a href="#">Process</a>
      <a href="#">Journal</a>
      <a href="#">Contact</a>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use SVG noise for concrete texture instead of image assets** -- inline SVG `feTurbulence` filters at 3-5% opacity with `mix-blend-mode: overlay` produce convincing concrete and plaster grain without loading external textures, keeping page weight minimal
- **Warm your shadows intentionally** -- standard `box-shadow` with pure black `rgba(0,0,0,x)` creates cold, lifeless depth; add a faint warm component like `rgba(139, 94, 60, 0.06)` to shadow values to integrate them with the leather-and-wood palette
- **Copper gradients need at least 4 stops** -- a convincing brushed-copper metallic effect requires alternating between darker (#8B5E3C) and brighter (#E8B44C) copper tones across multiple gradient stops; two-stop gradients read as flat orange rather than metal
- **Calibrate text weight on dark backgrounds** -- light text on the charcoal sections appears optically heavier than dark text on linen; reduce body font-weight to 300 and add 0.02em letter-spacing on dark backgrounds to compensate
- **Test warm whites across displays** -- the distinction between `#F0EBE1` (linen) and `#FAF7F2` (parchment) can collapse on cheaper monitors or non-color-managed displays; ensure key content contrast does not depend solely on the difference between these two values
- **Provide `@supports` fallbacks for `backdrop-filter`** -- if you extend the nav or cards with frosted-glass effects, not all browsers support `backdrop-filter`; always include a solid warm-charcoal fallback
- **Use `border-image` for metallic gradient borders** -- standard `border-color` cannot accept gradients; use `border-image: linear-gradient(...) 1` for copper accent borders, but note this disables `border-radius` so use it only on rectangular elements
- **Keep Edison glow animations subtle** -- the filament-flicker animation should have very gentle opacity variation (0.85 to 1.0) and long durations (3-5 seconds); aggressive flickering reads as a broken light rather than warm ambiance
