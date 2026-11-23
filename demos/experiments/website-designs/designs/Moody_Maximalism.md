# Moody Maximalism Design Reference

## Overview

Moody Maximalism is a lavishly layered visual aesthetic that fuses the brooding atmosphere of gothic and Victorian-era design with the "more is more" philosophy of maximalism. Born from a cultural rejection of sterile minimalism, it draws on deep jewel tones, vintage curiosities, botanical motifs, ornate typography, and dense textural compositions to create environments that feel like stepping into a richly appointed cabinet of curiosities. Where minimalism strips away, Moody Maximalism accumulates -- every surface tells a story, every corner rewards closer inspection. The style has been described as a "Harry Potter-flavored dark academia reimagining of Victorian interiors," blending the romanticism of antique collecting with the dramatic flair of gothic aesthetics.

At its core, Moody Maximalism is defined by intentional abundance rather than careless clutter. Deep, saturated paint colors -- burgundy, forest green, midnight blue, velvety black -- serve as the foundation upon which layers of pattern, texture, and ornament are built. Damask wallpapers, botanical illustrations, velvet upholstery, brass hardware, and candlelit ambience are hallmarks of the physical style, all of which translate into digital design through rich gradients, ornamental borders, layered background textures, and typographic extravagance. The style thrives on the tension between darkness and opulence: a black background lit by gold filigree, an emerald surface adorned with cream-colored serif text, a burgundy card framed by intricate botanical line art.

In web and UI design, Moody Maximalism manifests through dark, enveloping color schemes with jewel-tone accents, serif and decorative display typefaces, dense visual hierarchies, textured backgrounds (linen, marble, aged paper), ornamental dividers, and generous use of illustration and pattern. The digital interpretation borrows heavily from editorial print design, apothecary labeling, Victorian book covers, and museum exhibition graphics. It appeals to audiences drawn to dark academia, cottagecore's shadowy sibling, gothic romance, and the growing cultural fascination with "vampy" and antiquarian aesthetics -- a trend that Pinterest's 2025 report confirmed with triple-digit search increases for terms like "maximalist accessories" and "poet aesthetic." The result is a design language that feels simultaneously ancient and contemporary, curated and abundant, dark and deeply warm.

---

## Visual Characteristics

### Core Design Traits

- **Deep jewel-tone color foundations** -- burgundy, emerald, sapphire, amethyst, and onyx serve as primary surface colors, creating an immediate sense of richness and depth
- **Layered textural backgrounds** -- multiple texture layers (linen, marble, aged parchment, velvet grain, subtle noise) stacked at low opacity to create tactile visual depth
- **Ornamental borders and dividers** -- decorative line art, filigree, scrollwork, and botanical corner pieces borrowed from Victorian-era print design and apothecary labels
- **Botanical and natural motifs** -- dark florals, ferns, mushrooms, moths, serpents, and other natural history illustration elements woven throughout the design
- **Metallic accent details** -- gold, brass, and antique copper elements for borders, icons, rules, and typographic embellishments that catch the eye against dark backgrounds
- **Rich serif typography** -- ornate display serifs for headings, elegant book serifs for body text, and occasional blackletter or script faces for decorative accents
- **Dense, curated compositions** -- every area of the layout is considered and filled with purpose; negative space is used sparingly and always as a dramatic counterpoint
- **Vintage and antique imagery** -- aged photographs, engraved illustrations, cameo frames, wax seal motifs, and elements that evoke a sense of collected history
- **Moody atmospheric lighting** -- vignette effects, radial gradients, candlelight-inspired warm glows, and shadow-heavy imagery that suggest dim, intimate spaces
- **Checkerboard and damask patterns** -- recurring geometric and ornamental patterns used as backgrounds, section dividers, and decorative textures
- **Velvet and fabric textures** -- visual references to plush materials through color treatment, subtle grain overlays, and soft gradient transitions

### Design Principles

- **Intentional abundance** -- every element is curated and purposeful; the density is by design, not by accident. Clutter is the enemy; richness is the goal
- **Darkness as foundation** -- dark surfaces are not voids to be filled but stages upon which luminous accents perform. The darkness itself is a design element
- **Textural storytelling** -- layers of texture create a sense of history, physicality, and warmth that flat digital surfaces lack. Each texture layer adds narrative depth
- **Contrast through opulence** -- the interplay of matte and metallic, dark and luminous, heavy and delicate creates visual rhythm without requiring minimalist restraint
- **Gothic romanticism** -- the aesthetic embraces the beauty found in darkness, decay, and the passage of time. Imperfection is celebrated when it carries character
- **Color cohesion over chaos** -- despite the visual density, a carefully controlled color palette ties every element together, preventing maximalism from becoming visual noise
- **Hierarchy through weight** -- with so many visual elements competing for attention, strong typographic and spatial hierarchy guides the eye through deliberate contrast in scale, weight, and color
- **Antiquarian reverence** -- the design should feel as though it was assembled by someone who treasures old books, botanical specimens, and objects with provenance

---

## Color Palette

Moody Maximalism anchors its palette in the deepest registers of jewel tones, accented by warm metallics and grounded by near-black neutrals. The palette draws from Victorian parlors, Gothic cathedrals, antique velvet upholstery, and the aged spines of leather-bound books. Every color should feel saturated, weighty, and warm even at its darkest.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Obsidian | `#0F0E0E` | Deepest background, page base, maximum depth |
| Raven | `#1A1718` | Primary background, main surface color |
| Charred Walnut | `#2A2325` | Card backgrounds, elevated surfaces, modals |
| Oxblood | `#6B1A2A` | Primary accent, buttons, active states, key highlights |
| Deep Burgundy | `#8C1127` | Hover states, warm emphasis, links |
| Emerald Velvet | `#1B5E3A` | Secondary accent, success states, botanical elements |
| Dark Jade | `#2D7A50` | Secondary hover, green highlights, nature motifs |
| Midnight Sapphire | `#1A2744` | Tertiary accent, cool contrast, section backgrounds |
| Royal Amethyst | `#4A2060` | Rare accent, decorative elements, special highlights |
| Antique Gold | `#C9A84C` | Metallic accent, borders, ornamental details, icons |
| Tarnished Brass | `#A08030` | Secondary metallic, subtle gold elements, dividers |
| Aged Ivory | `#E8DFD0` | Primary text on dark backgrounds, headings |
| Warm Parchment | `#D4C5A9` | Secondary text, body copy on dark surfaces |
| Dusty Rose | `#B07A7A` | Soft accent, feminine touches, muted highlights |
| Smoke and Ash | `#6B6462` | Muted text, captions, metadata, disabled states |

### CSS Custom Properties

```css
:root {
  /* Deep neutrals */
  --moody-obsidian: #0f0e0e;
  --moody-raven: #1a1718;
  --moody-walnut: #2a2325;
  --moody-ash: #6b6462;

  /* Jewel-tone accents */
  --moody-oxblood: #6b1a2a;
  --moody-burgundy: #8c1127;
  --moody-emerald: #1b5e3a;
  --moody-jade: #2d7a50;
  --moody-sapphire: #1a2744;
  --moody-amethyst: #4a2060;

  /* Metallic accents */
  --moody-gold: #c9a84c;
  --moody-brass: #a08030;

  /* Warm lights */
  --moody-ivory: #e8dfd0;
  --moody-parchment: #d4c5a9;
  --moody-rose: #b07a7a;

  /* Functional mappings */
  --moody-bg-page: var(--moody-obsidian);
  --moody-bg-primary: var(--moody-raven);
  --moody-bg-surface: var(--moody-walnut);
  --moody-text-primary: var(--moody-ivory);
  --moody-text-secondary: var(--moody-parchment);
  --moody-text-muted: var(--moody-ash);
  --moody-accent-primary: var(--moody-oxblood);
  --moody-accent-secondary: var(--moody-emerald);
  --moody-accent-metallic: var(--moody-gold);
  --moody-border-ornate: var(--moody-brass);
  --moody-border-subtle: rgba(200, 168, 76, 0.2);
}
```

---

## Typography

Moody Maximalism typography is unapologetically expressive. Headings command attention through ornate serif and display faces that evoke antique book covers, Victorian signage, and apothecary labels. Body text remains legible through well-proportioned serif faces designed for sustained reading. Occasional blackletter, script, or decorative faces appear in accents, pull quotes, and decorative elements. The type system embraces contrast in weight and style -- pairing a heavy display serif with a delicate italic body, or an ornate script drop cap with crisp roman text.

### Recommended Google Fonts

| Font Name | Category | Weight(s) | Usage |
|-----------|----------|-----------|-------|
| Playfair Display | Serif (Display) | 400, 700, 900 | Hero headings, page titles, dramatic display |
| Cormorant Garamond | Serif (Display) | 300, 400, 600, 700 | Section headings, subheadings, elegant display |
| Lora | Serif (Body) | 400, 500, 600, 700 | Body text, paragraphs, long-form reading |
| EB Garamond | Serif (Body) | 400, 500, 600, 700 | Alternative body text, refined paragraphs |
| UnifrakturMaguntia | Blackletter | 400 | Decorative accents, drop caps, ornamental use |
| Cinzel | Serif (Display) | 400, 700, 900 | All-caps headings, labels, navigation |
| Cinzel Decorative | Serif (Display) | 400, 700, 900 | Hero titles, splash screens, ultra-decorative use |
| Great Vibes | Script | 400 | Pull quotes, decorative accents, flourish text |

### Font Pairings

| Pairing | Heading | Body | Character |
|---------|---------|------|-----------|
| Victorian Opulence | Playfair Display 900 | Lora 400 | Rich, editorial, high contrast between display and text |
| Gothic Elegance | Cinzel 700 | EB Garamond 400 | Classical authority with refined readability |
| Romantic Antiquarian | Cormorant Garamond 600 | Lora 400 | Soft, literary, old-world bookish warmth |
| Dark Cathedral | UnifrakturMaguntia 400 | EB Garamond 400 | Dramatic blackletter headings with clean serif body |
| Gilded Script | Great Vibes 400 | Cormorant Garamond 400 | Decorative flourish paired with elegant serif |

### CSS Example

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');

/* Typography scale */
:root {
  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-heading: 'Cinzel', 'Times New Roman', serif;
  --font-body: 'Lora', 'Georgia', serif;
  --font-accent: 'Cormorant Garamond', 'Garamond', serif;

  --text-xs: clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem);
  --text-sm: clamp(0.83rem, 0.78rem + 0.25vw, 0.95rem);
  --text-base: clamp(1rem, 0.93rem + 0.35vw, 1.15rem);
  --text-lg: clamp(1.2rem, 1.1rem + 0.5vw, 1.44rem);
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-2xl: clamp(2rem, 1.6rem + 2vw, 3rem);
  --text-3xl: clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem);
  --text-hero: clamp(3rem, 2rem + 5vw, 6.5rem);
}

h1, .h1 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-3xl);
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: var(--moody-ivory);
}

h2, .h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-2xl);
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--moody-gold);
}

h3, .h3 {
  font-family: var(--font-accent);
  font-weight: 600;
  font-size: var(--text-xl);
  line-height: 1.3;
  font-style: italic;
  color: var(--moody-parchment);
}

body, p, .body-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--moody-parchment);
}

blockquote {
  font-family: var(--font-accent);
  font-weight: 300;
  font-size: var(--text-lg);
  font-style: italic;
  line-height: 1.6;
  color: var(--moody-rose);
  border-left: 3px solid var(--moody-gold);
  padding-left: 1.5rem;
}

.label, .caption {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--moody-ash);
}
```

---

## Layout Principles

- **Dark, enveloping page foundations** -- the entire viewport should feel wrapped in darkness; use near-black backgrounds with no white space visible at the edges
- **Generous vertical rhythm with dense horizontal fills** -- sections breathe vertically with ample padding, but content within sections fills the horizontal space richly
- **Asymmetric grid with classical bones** -- use a 12-column grid as the structural skeleton, but allow elements to span uneven column counts and overlap for visual interest
- **Layered depth through z-index** -- stack decorative elements (borders, textures, botanical illustrations) behind and in front of content to create dimensional depth
- **Ornamental section transitions** -- replace simple horizontal rules with decorative dividers, filigree, or botanical flourish SVGs between major sections
- **Full-bleed hero sections** -- hero areas should stretch edge to edge with dramatic imagery, dark overlays, and centered typographic compositions
- **Card-based content clusters** -- group related content in richly styled cards with textured backgrounds, ornamental borders, and clear internal hierarchy
- **Centered typographic compositions** -- headings and introductory text benefit from centered alignment, echoing classical book typography and exhibition graphics
- **Vignette framing** -- use radial gradients and shadow overlays to draw focus inward, creating a natural vignette effect that mimics candlelit illumination
- **Generous max-width constraints** -- while backgrounds bleed to the edge, text content should be constrained to 65-75ch for comfortable reading on wide screens
- **Layered background treatments** -- combine a base color, a subtle texture image, a noise overlay, and a radial gradient vignette for rich, multi-dimensional backgrounds
- **Intentional visual weight distribution** -- heavier, darker elements anchor the top and bottom of compositions while lighter, more ornate elements float in between

---

## CSS / Design Techniques

### Textured Dark Background

The foundation of every Moody Maximalism design is a layered, textured dark background that feels physical rather than flat.

```css
.moody-bg {
  background-color: var(--moody-raven);
  background-image:
    radial-gradient(ellipse at 50% 0%, rgba(107, 26, 42, 0.15) 0%, transparent 70%),
    radial-gradient(ellipse at 50% 100%, rgba(27, 94, 58, 0.1) 0%, transparent 60%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="300" height="300" filter="url(%23n)" opacity="0.04"/></svg>');
  background-size: 100% 100%, 100% 100%, 300px 300px;
  background-repeat: no-repeat, no-repeat, repeat;
}

.moody-vignette {
  position: relative;
}

.moody-vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(15, 14, 14, 0.6) 100%);
  pointer-events: none;
  z-index: 1;
}
```

### Card Component

Cards in Moody Maximalism feel like individual treasures -- framed, textured, and layered with ornamental detail.

```css
.moody-card {
  background: linear-gradient(145deg, var(--moody-walnut), rgba(26, 23, 24, 0.95));
  border: 1px solid var(--moody-border-subtle);
  border-radius: 2px;
  padding: 2rem 2.25rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.moody-card::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(200, 168, 76, 0.1);
  border-radius: 1px;
  pointer-events: none;
}

.moody-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.moody-card:hover {
  border-color: rgba(200, 168, 76, 0.35);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(200, 168, 76, 0.08),
    inset 0 1px 0 rgba(200, 168, 76, 0.06);
}

.moody-card:hover::after {
  opacity: 1;
}

.moody-card__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--moody-ivory);
  margin-bottom: 0.5rem;
}

.moody-card__subtitle {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--moody-gold);
  margin-bottom: 1rem;
}

.moody-card__body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--moody-parchment);
}
```

### Button Component

Buttons in Moody Maximalism are deliberate, weighty, and adorned -- never flat or minimal.

```css
.moody-btn {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--moody-ivory);
  background: linear-gradient(135deg, var(--moody-oxblood), #7a1e32);
  border: 1px solid rgba(200, 168, 76, 0.3);
  padding: 0.875rem 2.25rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.moody-btn::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(200, 168, 76, 0.15);
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.moody-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(200, 168, 76, 0.12), transparent);
  transition: left 0.5s ease;
}

.moody-btn:hover {
  background: linear-gradient(135deg, #7a1e32, var(--moody-burgundy));
  border-color: var(--moody-gold);
  box-shadow: 0 4px 20px rgba(107, 26, 42, 0.4), 0 0 12px rgba(200, 168, 76, 0.15);
  transform: translateY(-1px);
}

.moody-btn:hover::before {
  border-color: rgba(200, 168, 76, 0.3);
}

.moody-btn:hover::after {
  left: 100%;
}

.moody-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(107, 26, 42, 0.3);
}

/* Ghost variant */
.moody-btn--ghost {
  background: transparent;
  border: 1px solid var(--moody-gold);
  color: var(--moody-gold);
}

.moody-btn--ghost:hover {
  background: rgba(200, 168, 76, 0.1);
  color: var(--moody-ivory);
  box-shadow: 0 0 20px rgba(200, 168, 76, 0.15);
}

/* Emerald variant */
.moody-btn--emerald {
  background: linear-gradient(135deg, var(--moody-emerald), #24734a);
  border-color: rgba(200, 168, 76, 0.2);
}

.moody-btn--emerald:hover {
  background: linear-gradient(135deg, #24734a, var(--moody-jade));
  border-color: var(--moody-gold);
  box-shadow: 0 4px 20px rgba(27, 94, 58, 0.4), 0 0 12px rgba(200, 168, 76, 0.15);
}
```

### Navigation Component

Navigation in Moody Maximalism is an ornamental frame -- a persistent, weighty structure that grounds the page.

```css
.moody-nav {
  background: linear-gradient(180deg, rgba(15, 14, 14, 0.97), rgba(26, 23, 24, 0.95));
  border-bottom: 1px solid var(--moody-border-subtle);
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
}

.moody-nav::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
  opacity: 0.4;
}

.moody-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  height: 4.5rem;
}

.moody-nav__brand {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-lg);
  color: var(--moody-ivory);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.moody-nav__brand span {
  color: var(--moody-gold);
}

.moody-nav__links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.moody-nav__link {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: var(--text-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--moody-parchment);
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.3s ease;
}

.moody-nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  right: 50%;
  height: 1px;
  background: var(--moody-gold);
  transition: left 0.3s ease, right 0.3s ease;
}

.moody-nav__link:hover {
  color: var(--moody-gold);
}

.moody-nav__link:hover::after {
  left: 0;
  right: 0;
}

.moody-nav__link--active {
  color: var(--moody-gold);
}

.moody-nav__link--active::after {
  left: 0;
  right: 0;
}
```

### Hero Section

The hero section is the dramatic entrance -- a full-bleed, atmospheric composition that establishes the mood immediately.

```css
.moody-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  overflow: hidden;
  background: var(--moody-obsidian);
}

.moody-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3) saturate(0.8);
  transform: scale(1.05);
  transition: transform 8s ease-out;
}

.moody-hero:hover .moody-hero__bg {
  transform: scale(1);
}

.moody-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(15, 14, 14, 0.7) 100%),
    linear-gradient(180deg, rgba(15, 14, 14, 0.3) 0%, transparent 30%, transparent 70%, rgba(15, 14, 14, 0.8) 100%);
  z-index: 1;
}

.moody-hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.moody-hero__label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--moody-gold);
  margin-bottom: 1.5rem;
}

.moody-hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-hero);
  line-height: 1.05;
  color: var(--moody-ivory);
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.moody-hero__subtitle {
  font-family: var(--font-accent);
  font-weight: 300;
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--moody-parchment);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.moody-hero__divider {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
  margin: 0 auto 2.5rem;
}
```

### Ornamental Divider

Decorative section breaks that replace simple horizontal rules with character and elegance.

```css
.moody-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0;
  color: var(--moody-gold);
  opacity: 0.5;
}

.moody-divider::before,
.moody-divider::after {
  content: '';
  flex: 1;
  max-width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--moody-gold));
}

.moody-divider::after {
  background: linear-gradient(90deg, var(--moody-gold), transparent);
}

.moody-divider__symbol {
  font-size: 1.25rem;
  line-height: 1;
}

/* Diamond variant */
.moody-divider--diamond .moody-divider__symbol {
  width: 8px;
  height: 8px;
  background: var(--moody-gold);
  transform: rotate(45deg);
  font-size: 0;
}

/* Botanical variant with SVG flourish */
.moody-divider--botanical .moody-divider__symbol {
  font-family: serif;
  font-size: 1.5rem;
}
```

### Blockquote / Pull Quote

Pull quotes in Moody Maximalism serve as dramatic typographic moments that punctuate the visual flow.

```css
.moody-quote {
  position: relative;
  padding: 2.5rem 3rem;
  margin: 3rem 0;
  background: linear-gradient(135deg, rgba(42, 35, 37, 0.6), rgba(26, 23, 24, 0.4));
  border-left: 3px solid var(--moody-gold);
}

.moody-quote::before {
  content: '\201C';
  position: absolute;
  top: -0.25rem;
  left: 1rem;
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--moody-gold);
  opacity: 0.25;
  line-height: 1;
}

.moody-quote__text {
  font-family: var(--font-accent);
  font-weight: 300;
  font-size: var(--text-lg);
  font-style: italic;
  line-height: 1.7;
  color: var(--moody-parchment);
}

.moody-quote__attribution {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--moody-gold);
  margin-top: 1rem;
}

.moody-quote__attribution::before {
  content: '\2014\00a0';
}
```

### Section Header

Ornamental section headings that establish hierarchy and visual rhythm between content blocks.

```css
.moody-section-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  position: relative;
}

.moody-section-header__label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--moody-gold);
  margin-bottom: 1rem;
}

.moody-section-header__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-2xl);
  color: var(--moody-ivory);
  margin-bottom: 1rem;
}

.moody-section-header__rule {
  width: 60px;
  height: 1px;
  background: var(--moody-gold);
  margin: 1.5rem auto;
}

.moody-section-header__desc {
  font-family: var(--font-accent);
  font-weight: 300;
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--moody-parchment);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}
```

---

## Design Do's and Don'ts

### Do's

- **Do anchor every composition in darkness** -- start with near-black backgrounds and build luminosity outward through jewel-tone accents and metallic details
- **Do layer textures intentionally** -- combine 2-3 subtle texture layers (noise, linen, parchment) at low opacity for tactile depth without visual noise
- **Do use metallic gold sparingly and meaningfully** -- reserve gold for borders, dividers, labels, and key interactive elements; overuse dilutes its impact
- **Do embrace serif and display typefaces** -- this is one of the few aesthetics where ornate serifs, blackletter, and script faces are not only appropriate but essential
- **Do create visual hierarchy through contrast** -- with dense compositions, readers need clear guidance; use scale, color, and weight differences boldly
- **Do incorporate botanical and natural motifs** -- dark florals, ferns, moths, mushrooms, and other natural illustrations are signature elements of the style
- **Do treat every section transition as a design moment** -- ornamental dividers, decorative rules, and flourish elements between sections reinforce the aesthetic
- **Do maintain color cohesion across all elements** -- the palette should feel unified and intentional; every color should relate to the established jewel-tone and metallic system

### Don'ts

- **Don't confuse maximalism with clutter** -- every element must earn its place; density without purpose becomes visual chaos rather than curated richness
- **Don't use pure white backgrounds or large white surfaces** -- white space in Moody Maximalism should always be warm (ivory, parchment) and used within dark contexts
- **Don't flatten the design with solid backgrounds** -- untextured, single-color backgrounds feel lifeless; always add at least a subtle gradient or noise layer
- **Don't rely on neon or fluorescent colors** -- the palette is saturated but deep; bright, electric colors violate the moody foundation
- **Don't use sans-serif fonts as primary typefaces** -- sans-serif fonts can appear in small UI labels or metadata, but serifs should dominate headings and body text
- **Don't neglect accessibility in pursuit of atmosphere** -- dark-on-dark text can become illegible; maintain WCAG AA contrast ratios for all functional text
- **Don't overuse decorative typefaces** -- blackletter, script, and ornate display faces should be reserved for accents; using them for body text sacrifices readability
- **Don't make it feel cold or clinical** -- the darkness should always feel warm, inviting, and intimate rather than sterile, harsh, or foreboding

---

## Related Aesthetics

| Aesthetic | Relationship | Key Difference |
|-----------|-------------|---------------|
| Dark Academia | Close cousin | Dark Academia emphasizes scholarly and literary themes with a narrower color range; Moody Maximalism is more decorative and eclectic |
| Gothic Revival | Strong influence | Gothic Revival focuses specifically on medieval and ecclesiastical architecture; Moody Maximalism is broader in its historical references |
| Victorian | Foundational ancestor | Victorian design is the historical origin; Moody Maximalism reinterprets it through a modern, darker lens |
| Cottagecore (Dark) | Tonal sibling | Dark Cottagecore shares the botanical and vintage elements but favors rural simplicity over ornamental density |
| Art Nouveau | Stylistic overlap | Art Nouveau shares the organic ornamentation and flowing lines but uses lighter, more pastel palettes |
| Baroque | Maximalist ancestor | Baroque shares the love of excess and ornamentation but operates in a lighter, more gilded register |
| Dark Romanticism | Mood overlap | Dark Romanticism shares the emotional tone and literary darkness but is less concerned with decorative density |
| Witchcore | Cultural adjacent | Witchcore shares the candles, botanicals, and dark palette but leans more overtly occult and less refined |
| Regencycore | Period overlap | Regencycore shares the vintage aesthetic but focuses on the lighter, more restrained Regency era rather than heavy Victorian maximalism |
| Steampunk | Mechanical cousin | Steampunk shares the Victorian-era reference and brass/copper metallics but adds industrial and mechanical elements |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moody Maximalism - Design Reference</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --moody-obsidian: #0f0e0e; --moody-raven: #1a1718; --moody-walnut: #2a2325;
      --moody-ash: #6b6462; --moody-oxblood: #6b1a2a; --moody-burgundy: #8c1127;
      --moody-emerald: #1b5e3a; --moody-jade: #2d7a50; --moody-sapphire: #1a2744;
      --moody-amethyst: #4a2060; --moody-gold: #c9a84c; --moody-brass: #a08030;
      --moody-ivory: #e8dfd0; --moody-parchment: #d4c5a9; --moody-rose: #b07a7a;
      --moody-bg-page: var(--moody-obsidian);
      --moody-bg-primary: var(--moody-raven);
      --moody-bg-surface: var(--moody-walnut);
      --moody-text-primary: var(--moody-ivory);
      --moody-text-secondary: var(--moody-parchment);
      --moody-text-muted: var(--moody-ash);
      --moody-border-subtle: rgba(200, 168, 76, 0.2);
      --font-display: 'Playfair Display', Georgia, serif;
      --font-heading: 'Cinzel', 'Times New Roman', serif;
      --font-body: 'Lora', Georgia, serif;
      --font-accent: 'Cormorant Garamond', Garamond, serif;
      --text-xs: clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem);
      --text-sm: clamp(0.83rem, 0.78rem + 0.25vw, 0.95rem);
      --text-base: clamp(1rem, 0.93rem + 0.35vw, 1.15rem);
      --text-lg: clamp(1.2rem, 1.1rem + 0.5vw, 1.44rem);
      --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
      --text-2xl: clamp(2rem, 1.6rem + 2vw, 3rem);
      --text-hero: clamp(3rem, 2rem + 5vw, 6.5rem);
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body {
      font-family: var(--font-body); font-size: var(--text-base); line-height: 1.75;
      color: var(--moody-text-secondary); background-color: var(--moody-bg-page);
      background-image:
        radial-gradient(ellipse at 50% 0%, rgba(107,26,42,0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 100%, rgba(27,94,58,0.06) 0%, transparent 50%);
      min-height: 100vh; overflow-x: hidden;
    }
    a { color: var(--moody-gold); text-decoration: none; transition: color 0.3s; }
    a:hover { color: var(--moody-ivory); }
    img { max-width: 100%; display: block; }

    /* -- Navigation -- */
    .nav {
      background: linear-gradient(180deg, rgba(15,14,14,0.97), rgba(26,23,24,0.95));
      border-bottom: 1px solid var(--moody-border-subtle);
      padding: 0 2rem; position: sticky; top: 0; z-index: 100;
      backdrop-filter: blur(12px);
    }
    .nav::after {
      content: ''; position: absolute; bottom: -1px; left: 10%; right: 10%;
      height: 1px; background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
      opacity: 0.4;
    }
    .nav__inner {
      display: flex; align-items: center; justify-content: space-between;
      max-width: 1280px; margin: 0 auto; height: 4.5rem;
    }
    .nav__brand {
      font-family: var(--font-display); font-weight: 900;
      font-size: var(--text-lg); color: var(--moody-text-primary); text-decoration: none;
    }
    .nav__brand span { color: var(--moody-gold); }
    .nav__links { display: flex; gap: 2.5rem; list-style: none; }
    .nav__link {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--moody-text-secondary); text-decoration: none;
      position: relative; padding: 0.25rem 0; transition: color 0.3s;
    }
    .nav__link::after {
      content: ''; position: absolute; bottom: -2px; left: 50%; right: 50%;
      height: 1px; background: var(--moody-gold);
      transition: left 0.3s, right 0.3s;
    }
    .nav__link:hover { color: var(--moody-gold); }
    .nav__link:hover::after, .nav__link--active::after { left: 0; right: 0; }
    .nav__link--active { color: var(--moody-gold); }

    /* -- Hero -- */
    .hero {
      position: relative; min-height: 100vh; display: flex;
      align-items: center; justify-content: center; text-align: center;
      padding: 6rem 2rem; overflow: hidden; background: var(--moody-bg-page);
    }
    .hero__bg {
      position: absolute; inset: 0;
      background:
        linear-gradient(135deg, rgba(107,26,42,0.15), transparent 50%),
        linear-gradient(225deg, rgba(27,94,58,0.1), transparent 50%),
        linear-gradient(315deg, rgba(74,32,96,0.08), transparent 50%);
    }
    .hero__overlay {
      position: absolute; inset: 0; z-index: 1;
      background: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(15,14,14,0.65) 100%);
    }
    .hero__noise {
      position: absolute; inset: 0; opacity: 0.03; z-index: 2;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 300px 300px;
    }
    .hero__content { position: relative; z-index: 3; max-width: 800px; }
    .hero__label {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.35em; text-transform: uppercase;
      color: var(--moody-gold); margin-bottom: 1.5rem;
    }
    .hero__title {
      font-family: var(--font-display); font-weight: 900;
      font-size: var(--text-hero); line-height: 1.05;
      color: var(--moody-text-primary); margin-bottom: 1.5rem;
      text-shadow: 0 2px 30px rgba(0,0,0,0.5);
    }
    .hero__title em { font-style: italic; color: var(--moody-gold); }
    .hero__rule {
      width: 80px; height: 1px; margin: 0 auto 2rem;
      background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
    }
    .hero__subtitle {
      font-family: var(--font-accent); font-weight: 300;
      font-size: var(--text-lg); font-style: italic;
      color: var(--moody-text-secondary); margin-bottom: 2.5rem;
      line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto;
    }
    .hero__actions { display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap; }

    /* -- Buttons -- */
    .btn {
      font-family: var(--font-heading); font-weight: 700; font-size: var(--text-sm);
      letter-spacing: 0.18em; text-transform: uppercase; color: var(--moody-text-primary);
      background: linear-gradient(135deg, var(--moody-oxblood), #7a1e32);
      border: 1px solid rgba(200,168,76,0.3); padding: 0.875rem 2.25rem;
      cursor: pointer; position: relative; overflow: hidden;
      transition: all 0.3s; display: inline-block; text-decoration: none;
    }
    .btn::before {
      content: ''; position: absolute; inset: 3px;
      border: 1px solid rgba(200,168,76,0.15); pointer-events: none;
      transition: border-color 0.3s;
    }
    .btn::after {
      content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(200,168,76,0.12), transparent);
      transition: left 0.5s;
    }
    .btn:hover {
      background: linear-gradient(135deg, #7a1e32, var(--moody-burgundy));
      border-color: var(--moody-gold); transform: translateY(-1px);
      box-shadow: 0 4px 20px rgba(107,26,42,0.4), 0 0 12px rgba(200,168,76,0.15);
      color: var(--moody-text-primary);
    }
    .btn:hover::before { border-color: rgba(200,168,76,0.3); }
    .btn:hover::after { left: 100%; }
    .btn--ghost { background: transparent; border: 1px solid var(--moody-gold); color: var(--moody-gold); }
    .btn--ghost:hover {
      background: rgba(200,168,76,0.1); color: var(--moody-text-primary);
      box-shadow: 0 0 20px rgba(200,168,76,0.15);
    }

    /* -- Divider -- */
    .divider {
      display: flex; align-items: center; justify-content: center;
      gap: 1.25rem; padding: 3.5rem 0; color: var(--moody-gold); opacity: 0.5;
    }
    .divider::before, .divider::after {
      content: ''; flex: 1; max-width: 200px; height: 1px;
      background: linear-gradient(90deg, transparent, var(--moody-gold));
    }
    .divider::after { background: linear-gradient(90deg, var(--moody-gold), transparent); }
    .divider__diamond { width: 8px; height: 8px; background: var(--moody-gold); transform: rotate(45deg); }

    /* -- Section Header -- */
    .section-header { text-align: center; padding: 4rem 2rem 3rem; }
    .section-header__label {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.3em; text-transform: uppercase;
      color: var(--moody-gold); margin-bottom: 0.75rem;
    }
    .section-header__title {
      font-family: var(--font-display); font-weight: 900;
      font-size: var(--text-2xl); color: var(--moody-text-primary); margin-bottom: 1rem;
    }
    .section-header__rule { width: 60px; height: 1px; background: var(--moody-gold); margin: 1.5rem auto; }
    .section-header__desc {
      font-family: var(--font-accent); font-weight: 300; font-size: var(--text-lg);
      font-style: italic; color: var(--moody-text-secondary);
      max-width: 600px; margin: 0 auto; line-height: 1.6;
    }

    /* -- Cards -- */
    .cards {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem; max-width: 1280px; margin: 0 auto; padding: 0 2rem 4rem;
    }
    .card {
      background: linear-gradient(145deg, var(--moody-bg-surface), rgba(26,23,24,0.95));
      border: 1px solid var(--moody-border-subtle); border-radius: 2px;
      padding: 2.25rem 2rem; position: relative; overflow: hidden;
      transition: border-color 0.4s, box-shadow 0.4s;
    }
    .card::before {
      content: ''; position: absolute; inset: 6px;
      border: 1px solid rgba(200,168,76,0.08); border-radius: 1px; pointer-events: none;
    }
    .card::after {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--moody-gold), transparent);
      opacity: 0; transition: opacity 0.4s;
    }
    .card:hover {
      border-color: rgba(200,168,76,0.35);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(200,168,76,0.06);
    }
    .card:hover::after { opacity: 1; }
    .card__icon { font-size: 2rem; margin-bottom: 1.25rem; display: block; }
    .card__title {
      font-family: var(--font-display); font-weight: 700;
      font-size: var(--text-xl); color: var(--moody-text-primary); margin-bottom: 0.5rem;
    }
    .card__subtitle {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--moody-gold); margin-bottom: 1rem;
    }
    .card__body { font-size: var(--text-base); line-height: 1.75; color: var(--moody-text-secondary); }

    /* -- About Section -- */
    .about {
      max-width: 1280px; margin: 0 auto; padding: 0 2rem 4rem;
      display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
    }
    .about__text { max-width: 560px; }
    .about__title {
      font-family: var(--font-display); font-weight: 900;
      font-size: var(--text-2xl); color: var(--moody-text-primary); margin-bottom: 1.5rem;
    }
    .about__body { font-size: var(--text-base); line-height: 1.85; color: var(--moody-text-secondary); margin-bottom: 1.5rem; }
    .about__image-frame {
      position: relative; aspect-ratio: 4/5;
      background: linear-gradient(145deg, var(--moody-bg-surface), var(--moody-bg-primary));
      border: 1px solid var(--moody-border-subtle);
      display: flex; align-items: center; justify-content: center;
    }
    .about__image-frame::before {
      content: ''; position: absolute; inset: 8px; border: 1px solid rgba(200,168,76,0.12);
    }
    .about__image-placeholder {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.2em; text-transform: uppercase; color: var(--moody-text-muted);
    }

    /* -- Blockquote -- */
    .quote-section { max-width: 800px; margin: 0 auto; padding: 2rem 2rem 4rem; }
    .quote {
      position: relative; padding: 2.5rem 3rem;
      background: linear-gradient(135deg, rgba(42,35,37,0.6), rgba(26,23,24,0.4));
      border-left: 3px solid var(--moody-gold);
    }
    .quote::before {
      content: '\201C'; position: absolute; top: -0.25rem; left: 1rem;
      font-family: var(--font-display); font-size: 5rem;
      color: var(--moody-gold); opacity: 0.2; line-height: 1;
    }
    .quote__text {
      font-family: var(--font-accent); font-weight: 300;
      font-size: var(--text-lg); font-style: italic;
      line-height: 1.7; color: var(--moody-text-secondary);
    }
    .quote__attribution {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--moody-gold); margin-top: 1.25rem;
    }

    /* -- Palette Showcase -- */
    .palette { max-width: 1280px; margin: 0 auto; padding: 0 2rem 4rem; }
    .palette__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
    .palette__swatch {
      aspect-ratio: 1; border-radius: 2px; display: flex; flex-direction: column;
      justify-content: flex-end; padding: 0.75rem;
      border: 1px solid rgba(200,168,76,0.1); transition: transform 0.3s, box-shadow 0.3s;
    }
    .palette__swatch:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.3); }
    .palette__name { font-family: var(--font-heading); font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.15rem; }
    .palette__hex { font-family: 'Courier New', monospace; font-size: 0.7rem; opacity: 0.8; }
    .palette__swatch--light .palette__name, .palette__swatch--light .palette__hex { color: var(--moody-raven); }
    .palette__swatch--dark .palette__name, .palette__swatch--dark .palette__hex { color: var(--moody-ivory); }

    /* -- Footer -- */
    .footer { border-top: 1px solid var(--moody-border-subtle); padding: 3rem 2rem; text-align: center; position: relative; }
    .footer::before {
      content: ''; position: absolute; top: -1px; left: 15%; right: 15%; height: 1px;
      background: linear-gradient(90deg, transparent, var(--moody-gold), transparent); opacity: 0.3;
    }
    .footer__brand { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); color: var(--moody-text-primary); margin-bottom: 0.75rem; }
    .footer__brand span { color: var(--moody-gold); }
    .footer__text { font-family: var(--font-accent); font-size: var(--text-sm); font-style: italic; color: var(--moody-text-muted); margin-bottom: 1.5rem; }
    .footer__links { display: flex; gap: 2rem; justify-content: center; list-style: none; }
    .footer__link {
      font-family: var(--font-heading); font-size: var(--text-xs);
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--moody-text-muted); text-decoration: none; transition: color 0.3s;
    }
    .footer__link:hover { color: var(--moody-gold); }

    /* -- Responsive -- */
    @media (max-width: 768px) {
      .nav__links { display: none; }
      .about { grid-template-columns: 1fr; gap: 2rem; }
      .cards { grid-template-columns: 1fr; }
      .hero__actions { flex-direction: column; align-items: center; }
      .quote { padding: 2rem 1.5rem; }
      .palette__grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="nav__inner">
      <a href="#" class="nav__brand">Moody<span>&amp;</span>Maximal</a>
      <ul class="nav__links">
        <li><a href="#home" class="nav__link nav__link--active">Home</a></li>
        <li><a href="#collection" class="nav__link">Collection</a></li>
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#palette" class="nav__link">Palette</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero -->
  <section id="home" class="hero">
    <div class="hero__bg"></div>
    <div class="hero__overlay"></div>
    <div class="hero__noise"></div>
    <div class="hero__content">
      <p class="hero__label">Curated Darkness &middot; Intentional Abundance</p>
      <h1 class="hero__title">Where Darkness Meets <em>Opulence</em></h1>
      <div class="hero__rule"></div>
      <p class="hero__subtitle">
        An exploration of layered richness, jewel-tone depth, and the beauty
        found in gothic romanticism and antiquarian curiosity.
      </p>
      <div class="hero__actions">
        <a href="#collection" class="btn">Explore the Collection</a>
        <a href="#about" class="btn btn--ghost">Our Philosophy</a>
      </div>
    </div>
  </section>

  <div class="divider"><div class="divider__diamond"></div></div>

  <!-- Cards Section -->
  <section id="collection">
    <div class="section-header">
      <p class="section-header__label">The Collection</p>
      <h2 class="section-header__title">Cabinet of Curiosities</h2>
      <div class="section-header__rule"></div>
      <p class="section-header__desc">
        Each piece is curated with intention, layered with history,
        and steeped in the rich darkness of a well-appointed parlor.
      </p>
    </div>
    <div class="cards">
      <article class="card">
        <span class="card__icon">&#x2698;</span>
        <h3 class="card__title">Botanical Specimens</h3>
        <p class="card__subtitle">Natural History</p>
        <p class="card__body">
          Pressed ferns, dried florals, and hand-drawn botanical illustrations
          rendered in ink on aged parchment. Each specimen tells a story of
          careful observation and quiet reverence for the natural world.
        </p>
      </article>
      <article class="card">
        <span class="card__icon">&#x2766;</span>
        <h3 class="card__title">Velvet &amp; Brocade</h3>
        <p class="card__subtitle">Textile Arts</p>
        <p class="card__body">
          Rich fabrics in deep emerald, oxblood, and midnight blue.
          Damask patterns woven with gold thread, draped across
          surfaces to create layers of tactile warmth and visual weight.
        </p>
      </article>
      <article class="card">
        <span class="card__icon">&#x2623;</span>
        <h3 class="card__title">Apothecary Collection</h3>
        <p class="card__subtitle">Vintage Curiosities</p>
        <p class="card__body">
          Amber glass bottles, brass instruments, wax-sealed letters,
          and leather-bound volumes. Collected objects that carry the
          patina of time and the mystery of forgotten purposes.
        </p>
      </article>
    </div>
  </section>

  <div class="divider"><div class="divider__diamond"></div></div>

  <!-- About Section -->
  <section id="about">
    <div class="section-header">
      <p class="section-header__label">Philosophy</p>
      <h2 class="section-header__title">Intentional Abundance</h2>
      <div class="section-header__rule"></div>
    </div>
    <div class="about">
      <div class="about__text">
        <h3 class="about__title">More Is More, When More Has Meaning</h3>
        <p class="about__body">
          Moody Maximalism is not about filling space for the sake of fullness.
          It is the careful accumulation of objects, textures, and colors that
          each carry weight and purpose. Every element is chosen, every layer
          is deliberate, every dark corner is an invitation to look closer.
        </p>
        <p class="about__body">
          We draw from the Victorian fascination with natural history, the
          gothic romantics' love of shadow and atmosphere, and the maximalist's
          refusal to believe that beauty must be spare. The result is a space
          that feels lived-in, storied, and impossibly rich.
        </p>
        <a href="#contact" class="btn">Begin Your Collection</a>
      </div>
      <div class="about__image-frame">
        <span class="about__image-placeholder">Image Placeholder</span>
      </div>
    </div>
  </section>

  <div class="divider"><div class="divider__diamond"></div></div>

  <!-- Pull Quote -->
  <section class="quote-section">
    <blockquote class="quote">
      <p class="quote__text">
        There is no exquisite beauty without some strangeness in the proportion.
        In the layering of dark upon dark, of velvet upon gilt, of the ancient
        beside the intimate, we find a richness that minimalism could never know.
      </p>
      <footer class="quote__attribution">Edgar Allan Poe, adapted</footer>
    </blockquote>
  </section>

  <div class="divider"><div class="divider__diamond"></div></div>

  <!-- Color Palette Showcase -->
  <section id="palette">
    <div class="section-header">
      <p class="section-header__label">Palette</p>
      <h2 class="section-header__title">The Colors of Darkness</h2>
      <div class="section-header__rule"></div>
      <p class="section-header__desc">
        Deep jewel tones anchored in near-black neutrals,
        illuminated by warm metallic accents.
      </p>
    </div>
    <div class="palette">
      <div class="palette__grid">
        <div class="palette__swatch palette__swatch--dark" style="background:#0f0e0e"><span class="palette__name">Obsidian</span><span class="palette__hex">#0F0E0E</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#1a1718"><span class="palette__name">Raven</span><span class="palette__hex">#1A1718</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#2a2325"><span class="palette__name">Charred Walnut</span><span class="palette__hex">#2A2325</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#6b1a2a"><span class="palette__name">Oxblood</span><span class="palette__hex">#6B1A2A</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#8c1127"><span class="palette__name">Deep Burgundy</span><span class="palette__hex">#8C1127</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#1b5e3a"><span class="palette__name">Emerald Velvet</span><span class="palette__hex">#1B5E3A</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#2d7a50"><span class="palette__name">Dark Jade</span><span class="palette__hex">#2D7A50</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#1a2744"><span class="palette__name">Midnight Sapphire</span><span class="palette__hex">#1A2744</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#4a2060"><span class="palette__name">Royal Amethyst</span><span class="palette__hex">#4A2060</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#c9a84c"><span class="palette__name">Antique Gold</span><span class="palette__hex">#C9A84C</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#a08030"><span class="palette__name">Tarnished Brass</span><span class="palette__hex">#A08030</span></div>
        <div class="palette__swatch palette__swatch--light" style="background:#e8dfd0"><span class="palette__name">Aged Ivory</span><span class="palette__hex">#E8DFD0</span></div>
        <div class="palette__swatch palette__swatch--light" style="background:#d4c5a9"><span class="palette__name">Warm Parchment</span><span class="palette__hex">#D4C5A9</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#b07a7a"><span class="palette__name">Dusty Rose</span><span class="palette__hex">#B07A7A</span></div>
        <div class="palette__swatch palette__swatch--dark" style="background:#6b6462"><span class="palette__name">Smoke &amp; Ash</span><span class="palette__hex">#6B6462</span></div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact" class="footer">
    <p class="footer__brand">Moody<span>&amp;</span>Maximal</p>
    <p class="footer__text">Curated darkness, intentional abundance, gothic elegance.</p>
    <ul class="footer__links">
      <li><a href="#" class="footer__link">Instagram</a></li>
      <li><a href="#" class="footer__link">Pinterest</a></li>
      <li><a href="#" class="footer__link">Newsletter</a></li>
      <li><a href="#" class="footer__link">Contact</a></li>
    </ul>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the dark foundation first** -- establish your near-black background colors and ensure they render correctly across devices before layering textures and accents. OLED screens will display true blacks differently than LCD panels
- **Test gold/metallic elements at multiple sizes** -- the `#C9A84C` antique gold reads beautifully at large display sizes but can appear muddy at small text sizes; increase lightness to `#D4B85C` for captions and small labels if needed
- **Layer textures at very low opacity** -- background textures (noise, linen, parchment) should be at 2-5% opacity; going higher makes the design feel gritty rather than rich. The texture should be felt, not seen
- **Use `backdrop-filter: blur()` for glass-like depth** -- sticky navigation and modal overlays benefit from a subtle backdrop blur that creates a sense of frosted glass over the textured backgrounds beneath
- **Implement `prefers-color-scheme` carefully** -- Moody Maximalism is inherently a dark aesthetic, but if a light mode is required, shift backgrounds to warm creams and ivories while keeping the jewel-tone accent structure intact
- **Prioritize font loading performance** -- with 3-4 Google Font families, use `font-display: swap` and preconnect hints to prevent layout shift. Consider subsetting fonts if only Latin characters are needed
- **Ensure WCAG AA contrast compliance** -- the combination of `--moody-parchment` (#D4C5A9) on `--moody-raven` (#1A1718) achieves approximately 10:1 contrast ratio, well above the 4.5:1 minimum. Test all text/background combinations with a contrast checker
- **Use CSS `color-mix()` for dynamic opacity** -- instead of hardcoding `rgba()` values for border and overlay colors, modern browsers support `color-mix(in srgb, var(--moody-gold) 20%, transparent)` for more maintainable code