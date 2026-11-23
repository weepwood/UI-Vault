# Nature Distilled Design Reference

## Overview

Nature Distilled is a refined, muted design aesthetic that draws its essence from the raw materials of the earth — skin, wood, soil, stone, dried moss, and unglazed clay. Rather than replicating nature photographically, it distills organic elements down to their tonal and textural fundamentals, producing interfaces that feel grounded, warm, and quietly sophisticated. Emerging as a dominant trend in 2025-2026, the style responds to digital fatigue and AI saturation by embracing analog warmth, imperfect textures, and the understated beauty of natural materials stripped of ornamentation.

The palette is built on muted earth tones: soft taupes, warm clay, dusty terracotta, pale mushroom greys, bleached driftwood whites, and deep soil browns. These colors are never fully saturated; instead they carry the gentle, sun-faded quality of materials weathered by time and use. Accents arrive through moss greens and muted olive tones, grounding the warmth with the coolness of living foliage. The effect is one of quiet luxury — a sophisticated restraint that communicates premium quality without resorting to black-and-gold minimalism or sterile corporate neutrals.

Typography in Nature Distilled favors elegant serif typefaces with organic letterforms, paired with clean humanist sans-serifs for functional text. The typographic voice is calm, measured, and editorial — think artisanal brand catalogues, botanical journals, and slow-living magazines. Layouts lean into generous whitespace, asymmetric balance, and content hierarchies that breathe. Photography and imagery emphasize matte surfaces, soft directional lighting, and close-up material textures: the grain of oak, the weave of raw linen, the stippled surface of handmade ceramics.

What sets Nature Distilled apart from broader "organic design" is its deliberate refinement. This is not rustic, cluttered, or bohemian. Every element is curated with intention, every color chosen for its relationship to its neighbors. The aesthetic channels biophilic design principles — the human need for connection to natural environments — through a lens of modern sophistication, producing digital experiences that feel simultaneously ancient and contemporary, restful and compelling.

---

## Visual Characteristics

### Core Design Traits

- **Muted, desaturated earth palette**: Colors drawn from skin, wood, soil, mushroom, clay, and dried botanical matter, never at full saturation but always carrying warmth and depth beneath their quietness
- **Tactile texture overlays**: Subtle grain, linen weave, handmade paper, and unglazed ceramic textures layered onto surfaces to evoke the physical world and counteract flat digital sterility
- **Generous negative space**: Ample breathing room between elements communicates calm confidence and allows the muted palette to resonate without competing for attention
- **Soft, diffused shadows**: Shadows are warm-toned (brown or taupe rather than black), large in radius, and low in opacity, imitating the gentle light of an overcast afternoon filtering through natural materials
- **Organic asymmetry**: Layouts favor slightly off-center compositions and irregular spacing that feel hand-arranged rather than snapped to a rigid grid, echoing the imperfect symmetry found in nature
- **Material-honest photography**: Imagery focuses on raw textures and matte surfaces — the cross-section of aged wood, the edge of torn handmade paper, the crackle of dried earth — lit with soft, directional natural light
- **Rounded but restrained geometry**: Corners are softened with moderate border-radius values (8-16px) that suggest warmth without veering into playful bubble shapes
- **Fine, earthy line work**: Thin borders and dividers in taupe, sand, or pale clay tones delineate sections without creating harsh visual boundaries
- **Serif-forward typography**: Elegant, organic serif typefaces anchor the visual identity, conveying editorial authority and timeless refinement
- **Minimal ornamentation**: Decorative elements are sparse and purposeful — a single botanical line drawing, a subtle tonal gradient, a hairline rule — never competing with the content they frame
- **Warm neutral gradients**: Gentle gradients between adjacent earth tones (sand to clay, taupe to mushroom) add depth without introducing jarring color shifts
- **Matte over glossy**: Every surface, texture, and photographic element favors matte finishes that absorb light softly rather than reflecting it sharply

### Design Principles

- **Distill, do not decorate**: Strip natural inspiration to its essential tones and textures; avoid literal leaf patterns, stock nature imagery, or heavy-handed organic motifs
- **Quiet sophistication over bold statement**: Let the palette and typography speak through understatement; impact comes from cumulative tonal harmony rather than any single loud element
- **Texture communicates depth**: In a muted palette, texture does the work that saturated color does elsewhere — use it to create hierarchy, warmth, and visual interest
- **Warmth with discipline**: Every warm tone and soft edge must serve the layout's purpose; sentimentality without structure produces muddy, unfocused design
- **Honor the material**: Treat each design element as though it were crafted from a specific physical material — linen, oak, stone, clay — and let that material's character guide its visual treatment
- **Breathe generously**: Whitespace (or more accurately, warm-space) is not emptiness but an active design element that gives the muted palette room to resonate
- **Accessible earth**: Ensure sufficient contrast between text and background despite the narrow tonal range; muted does not mean invisible
- **Age gracefully**: Design choices should feel timeless rather than trendy, favoring classic proportions and enduring typefaces over seasonal novelties

---

## Color Palette

The Nature Distilled palette is pulled directly from the materials of the earth: the warm buff of raw linen, the deep umber of turned soil, the grey-green of dried sage, and the dusty rose of weathered terracotta. Colors sit close together in tonal value, creating a harmonious, low-contrast field punctuated by strategic moments of deeper warmth. Saturation is always restrained — these are colors seen through soft natural light, slightly faded by sun and time.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Raw Linen | `#F5F0EB` | Primary background, page canvas, card surfaces |
| Parchment | `#EDE6DB` | Secondary background, alternating section bands |
| Warm Sand | `#D9CEBF` | Tertiary surface, input field backgrounds, subtle borders |
| Driftwood | `#B8A99A` | Muted borders, dividers, placeholder text |
| Mushroom Grey | `#9C9084` | Secondary text, captions, metadata |
| Clay | `#B07D62` | Primary accent, call-to-action elements, active states |
| Terracotta | `#A8644B` | Secondary accent, hover states, warm emphasis |
| Soil Brown | `#5C4033` | Primary text, headings, deep backgrounds |
| Dark Earth | `#3B2A1F` | Darkest tone, footer backgrounds, high-contrast text |
| Dried Sage | `#8A9178` | Nature accent, success states, botanical elements |
| Muted Olive | `#6B6D4E` | Supporting green accent, tags, secondary buttons |
| Stone Grey | `#A3A095` | Cool neutral, disabled states, subtle UI elements |
| Blush Clay | `#C9A99B` | Soft accent, highlights, decorative touches |
| Bone White | `#FAF7F3` | Brightest surface, modal overlays, card highlights |
| Deep Moss | `#4A5240` | Dark accent, footer text, contrast anchoring |

### CSS Custom Properties

```css
:root {
  /* --- Backgrounds & Neutrals --- */
  --nd-raw-linen: #F5F0EB;
  --nd-parchment: #EDE6DB;
  --nd-warm-sand: #D9CEBF;
  --nd-bone-white: #FAF7F3;

  /* --- Mid Tones --- */
  --nd-driftwood: #B8A99A;
  --nd-mushroom: #9C9084;
  --nd-stone-grey: #A3A095;
  --nd-blush-clay: #C9A99B;

  /* --- Earth Accents --- */
  --nd-clay: #B07D62;
  --nd-terracotta: #A8644B;
  --nd-soil-brown: #5C4033;
  --nd-dark-earth: #3B2A1F;

  /* --- Botanical Accents --- */
  --nd-dried-sage: #8A9178;
  --nd-muted-olive: #6B6D4E;
  --nd-deep-moss: #4A5240;

  /* --- Functional Tokens --- */
  --nd-bg: var(--nd-raw-linen);
  --nd-bg-alt: var(--nd-parchment);
  --nd-text: var(--nd-soil-brown);
  --nd-heading: var(--nd-dark-earth);
  --nd-accent: var(--nd-clay);
  --nd-accent-hover: var(--nd-terracotta);
  --nd-link: var(--nd-terracotta);
  --nd-surface: var(--nd-bone-white);
  --nd-border: var(--nd-warm-sand);
  --nd-muted: var(--nd-mushroom);
  --nd-success: var(--nd-dried-sage);
}
```

---

## Typography

Nature Distilled typography is calm, editorial, and deliberately unhurried. Headings use elegant serif typefaces with organic stroke variation that echo the imperfect beauty of hand-set letterpress type. Body text relies on highly legible humanist serifs or clean sans-serifs that prioritize sustained reading comfort. The overall typographic voice channels the measured authority of botanical journals, artisanal catalogues, and slow-living editorial — confident without being loud, refined without being cold.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| DM Serif Display | 400 | Hero headings, display titles, editorial statements | [fonts.google.com/specimen/DM+Serif+Display](https://fonts.google.com/specimen/DM+Serif+Display) |
| Cormorant Garamond | 300, 400, 500, 600, 700 | Section headings, pull quotes, elegant subheadings | [fonts.google.com/specimen/Cormorant+Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| Lora | 400, 500, 600, 700 | Body text, long-form reading, article content | [fonts.google.com/specimen/Lora](https://fonts.google.com/specimen/Lora) |
| Source Serif 4 | 200, 300, 400, 500, 600, 700 | Body text alternative, captions, secondary reading | [fonts.google.com/specimen/Source+Serif+4](https://fonts.google.com/specimen/Source+Serif+4) |
| Libre Baskerville | 400, 700 | Editorial body text, classic serif paragraphs | [fonts.google.com/specimen/Libre+Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) |
| Inter | 300, 400, 500, 600 | UI labels, navigation, buttons, functional text | [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |
| Jost | 300, 400, 500, 600 | Subheadings, tags, meta text, clean sans-serif pairing | [fonts.google.com/specimen/Jost](https://fonts.google.com/specimen/Jost) |
| Playfair Display | 400, 500, 600, 700 | Luxury display headings, feature titles, hero text | [fonts.google.com/specimen/Playfair+Display](https://fonts.google.com/specimen/Playfair+Display) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| DM Serif Display | Lora | Warm editorial authority with highly legible, organic body text |
| Cormorant Garamond 500 | Source Serif 4 | Refined, light-touch elegance paired with crisp, modern serif reading |
| Playfair Display | Libre Baskerville | Luxurious, high-contrast headings grounded by classic bookish body text |
| DM Serif Display | Inter 400 | Organic serif display with clean, functional sans-serif body for modern balance |
| Cormorant Garamond 600 | Jost 400 | Delicate serif grandeur contrasted with geometric sans-serif clarity |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Cormorant+Garamond:wght@400;500;600&family=Lora:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* === Base Typography === */
body {
  font-family: 'Lora', 'Georgia', serif;
  font-size: 1.06rem;
  line-height: 1.85;
  color: var(--nd-text);
  background-color: var(--nd-bg);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'DM Serif Display', 'Georgia', serif;
  color: var(--nd-heading);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  margin-bottom: 0.4em;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 0.5em;
}

h3 {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-weight: 500;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  margin-bottom: 0.6em;
}

a {
  color: var(--nd-link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}

a:hover {
  color: var(--nd-clay);
  text-decoration-color: var(--nd-clay);
}

.label-text {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--nd-muted);
}

.pull-quote {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 1.6rem;
  font-weight: 400;
  font-style: italic;
  color: var(--nd-clay);
  line-height: 1.5;
}
```

---

## Layout Principles

- **Contained, centered content with warm margins**: Keep body content at a 720-900px max-width, surrounded by generous warm-toned margins that frame the content like a page in a well-bound book
- **Generous vertical spacing**: Maintain 64-96px between major sections; the muted palette needs room to breathe and each section should feel like a considered pause rather than a rushed transition
- **Asymmetric two-column layouts**: Use 60/40 or 65/35 column splits for feature sections, placing text alongside material-texture photography in compositions that feel hand-curated rather than templated
- **Alternating warm backgrounds**: Shift between Raw Linen, Parchment, and Bone White backgrounds between sections to create subtle depth and rhythm without introducing strong color contrast
- **Single-column editorial flow for long content**: Extended reading sections should use a single narrow column (640-720px) with generous line-height and paragraph spacing, channeling print editorial design
- **Soft grid with organic breaks**: Start from a 12-column grid but allow select elements — images, pull quotes, decorative rules — to break grid boundaries slightly for organic imperfection
- **Card clusters over rigid grids**: Arrange cards in relaxed 2-3 column configurations with varied spacing rather than pixel-perfect grid alignment, evoking a curated shelf or gallery wall
- **Full-bleed material photography**: Allow texture-rich hero images and section divider images to extend edge-to-edge, bringing the physicality of natural materials to their full visual scale
- **Sticky, minimal navigation**: Keep navigation lightweight and anchored to the top with transparency or a subtle parchment backdrop, never competing with the content below
- **Progressive disclosure over density**: Reveal information gradually through scroll rather than packing dense content into visible areas; every viewport should feel calm and uncluttered
- **Whitespace as structure**: Use empty space to create grouping and hierarchy rather than relying on visible containers, borders, or background changes for every content distinction

---

## CSS / Design Techniques

### Nature Distilled Card

A refined content card with warm texture, soft shadow, and subtle material depth that feels like heavy cotton stock paper resting on a linen surface.

```css
.nd-card {
  background: var(--nd-bone-white);
  border: 1px solid var(--nd-warm-sand);
  border-radius: 12px;
  padding: 36px;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 2px 12px rgba(92, 64, 51, 0.06),
    0 1px 3px rgba(92, 64, 51, 0.04);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.nd-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}

.nd-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 6px 24px rgba(92, 64, 51, 0.1),
    0 2px 6px rgba(92, 64, 51, 0.06);
}

.nd-card h3 {
  font-family: 'DM Serif Display', 'Georgia', serif;
  font-size: 1.4rem;
  color: var(--nd-heading);
  margin-bottom: 12px;
}

.nd-card p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--nd-text);
}

.nd-card .card-tag {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--nd-muted);
  margin-bottom: 16px;
  display: block;
}
```

### Nature Distilled Button

Understated buttons with warm fill, matte finish, and tactile hover states that feel like pressing a smooth river stone.

```css
.nd-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--nd-bone-white);
  background: var(--nd-clay);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(176, 125, 98, 0.2);
}

.nd-btn:hover {
  background: var(--nd-terracotta);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(168, 100, 75, 0.25);
}

.nd-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(168, 100, 75, 0.2);
}

/* --- Secondary / Outline Variant --- */
.nd-btn--outline {
  color: var(--nd-clay);
  background: transparent;
  border: 1.5px solid var(--nd-clay);
  box-shadow: none;
}

.nd-btn--outline:hover {
  color: var(--nd-bone-white);
  background: var(--nd-clay);
  box-shadow: 0 2px 8px rgba(176, 125, 98, 0.2);
}

/* --- Botanical Accent Variant --- */
.nd-btn--sage {
  background: var(--nd-dried-sage);
  box-shadow: 0 2px 8px rgba(138, 145, 120, 0.2);
}

.nd-btn--sage:hover {
  background: var(--nd-muted-olive);
}
```

### Nature Distilled Navigation

A lightweight, transparent navigation bar that sits atop the content like a fine linen ribbon, anchoring the page without dominating it.

```css
.nd-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: rgba(245, 240, 235, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(217, 206, 191, 0.6);
  transition: background 0.3s ease;
}

.nd-nav__logo {
  font-family: 'DM Serif Display', 'Georgia', serif;
  font-size: 1.3rem;
  color: var(--nd-heading);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nd-nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nd-nav__links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--nd-mushroom);
  transition: color 0.3s ease;
  position: relative;
}

.nd-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--nd-clay);
  transition: width 0.3s ease;
}

.nd-nav__links a:hover {
  color: var(--nd-clay);
}

.nd-nav__links a:hover::after {
  width: 100%;
}

.nd-nav__cta {
  padding: 10px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--nd-bone-white);
  background: var(--nd-clay);
  border-radius: 6px;
  transition: background 0.3s ease;
}

.nd-nav__cta:hover {
  background: var(--nd-terracotta);
}
```

### Nature Distilled Hero Section

A full-width hero with layered texture, generous typography, and a warm gradient that grounds the viewer in the earthy palette from the first scroll position.

```css
.nd-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 80px 40px;
  background:
    linear-gradient(
      170deg,
      var(--nd-parchment) 0%,
      var(--nd-raw-linen) 40%,
      var(--nd-bone-white) 100%
    );
  overflow: hidden;
  text-align: center;
}

.nd-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}

.nd-hero__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.nd-hero__eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--nd-clay);
  margin-bottom: 20px;
}

.nd-hero__title {
  font-family: 'DM Serif Display', 'Georgia', serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  color: var(--nd-heading);
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.nd-hero__subtitle {
  font-family: 'Lora', 'Georgia', serif;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--nd-mushroom);
  max-width: 580px;
  margin: 0 auto 40px;
}

.nd-hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
```

### Textured Section Divider

A horizontal break between sections that uses layered earth-tone lines to evoke geological strata.

```css
.nd-divider {
  position: relative;
  height: 6px;
  margin: 80px auto;
  max-width: 120px;
  background: transparent;
  border: none;
}

.nd-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--nd-driftwood) 20%,
    var(--nd-clay) 50%,
    var(--nd-driftwood) 80%,
    transparent 100%
  );
}

.nd-divider::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--nd-warm-sand) 30%,
    var(--nd-warm-sand) 70%,
    transparent 100%
  );
}
```

### Material Texture Background

A reusable CSS class that applies a subtle, handmade-paper texture to any container, adding the tactile quality central to the aesthetic.

```css
.nd-texture {
  position: relative;
}

.nd-texture::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(92, 64, 51, 0.008) 3px,
      rgba(92, 64, 51, 0.008) 6px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(92, 64, 51, 0.006) 3px,
      rgba(92, 64, 51, 0.006) 6px
    );
  pointer-events: none;
  z-index: 0;
}

.nd-texture > * {
  position: relative;
  z-index: 1;
}
```

### Feature Grid Section

A responsive grid for showcasing content features or values using the Nature Distilled card system.

```css
.nd-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  padding: 80px 40px;
  max-width: 1120px;
  margin: 0 auto;
}

.nd-feature-grid__item {
  padding: 40px 32px;
  background: var(--nd-bone-white);
  border: 1px solid var(--nd-warm-sand);
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.nd-feature-grid__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(92, 64, 51, 0.08);
}

.nd-feature-grid__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nd-parchment);
  border-radius: 10px;
  margin-bottom: 20px;
  color: var(--nd-clay);
  font-size: 1.2rem;
}

.nd-feature-grid__item h3 {
  font-family: 'DM Serif Display', 'Georgia', serif;
  font-size: 1.25rem;
  color: var(--nd-heading);
  margin-bottom: 10px;
}

.nd-feature-grid__item p {
  font-family: 'Lora', 'Georgia', serif;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--nd-mushroom);
}
```

### Pull Quote Block

An editorial-style pull quote component that draws attention through typographic scale and earth-toned accent lines.

```css
.nd-quote {
  position: relative;
  max-width: 680px;
  margin: 64px auto;
  padding: 40px 0 40px 32px;
  border-left: 3px solid var(--nd-clay);
}

.nd-quote blockquote {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.6;
  color: var(--nd-soil-brown);
  margin: 0;
}

.nd-quote cite {
  display: block;
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--nd-muted);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use muted, desaturated earth tones pulled from real materials**: Every color should feel like it could be sampled from a photograph of natural materials — clay, wood, soil, stone, dried herbs — viewed under soft, ambient light
- **Do invest in high-quality material photography**: Close-up textures of raw linen, unglazed ceramics, aged wood grain, and handmade paper elevate the aesthetic from generic "earthy" to genuinely refined
- **Do maintain generous whitespace and breathing room**: The muted palette needs space to resonate; cramped layouts make earth tones feel heavy and oppressive rather than calm and sophisticated
- **Do use serif typefaces with organic stroke variation for headings**: The slight irregularity of well-drawn serif letterforms mirrors the natural imperfection central to the aesthetic
- **Do layer subtle textures onto surfaces**: Fine grain, linen weave, or paper fiber overlays at very low opacity (2-5%) add the tactile warmth that distinguishes Nature Distilled from flat minimalism
- **Do pair warm and cool earth tones for balance**: Anchor warm clays and terracottas with cooler sage greens and stone greys to prevent the palette from feeling monotonously warm
- **Do ensure accessibility with sufficient contrast ratios**: Test all text-background combinations against WCAG AA standards; the narrow tonal range of this palette requires extra attention to legibility
- **Do use warm-toned shadows instead of black**: Shadows cast in `rgba(92, 64, 51, 0.08)` rather than `rgba(0, 0, 0, 0.1)` maintain the cohesive warmth of the entire system

### Don'ts

- **Don't use saturated or vivid colors**: Bright greens, electric blues, hot pinks, or pure reds shatter the tonal harmony; every color must pass through the filter of natural muting
- **Don't apply glossy, shiny, or reflective effects**: Chrome, glass morphism, metallic gradients, and sharp specular highlights contradict the matte, material-honest philosophy of the aesthetic
- **Don't use literal nature clipart or stock leaf imagery**: The "distilled" in Nature Distilled means abstraction; use tones and textures from nature, not cartoon leaves, tree silhouettes, or watercolor flowers
- **Don't crowd the layout with dense content**: Information-heavy layouts with tight spacing undermine the calm, considered quality that defines the aesthetic; edit ruthlessly and space generously
- **Don't pair earth tones with cold, clinical greys**: Blue-toned greys, pure whites (#FFFFFF), or cool silvers create jarring temperature conflicts; all neutrals should carry warmth
- **Don't use thin, geometric sans-serifs as heading fonts**: Typefaces like Futura, Montserrat, or Helvetica in headings feel too mechanical and sterile for the organic warmth this aesthetic requires
- **Don't over-texture surfaces**: Texture should be felt rather than seen; if the grain overlay is visible at a normal viewing distance, the opacity is too high and the result will look grungy rather than refined
- **Don't sacrifice readability for aesthetic muting**: If body text is hard to read against the background, darken the text or lighten the surface; elegance is never an excuse for poor usability

---

## Related Aesthetics

| Aesthetic | Relationship | Key Differences |
|-----------|-------------|-----------------|
| Japandi | Close cousin in restraint and natural materials | Japandi leans cooler and more minimal with stronger Japanese zen influence; Nature Distilled is warmer and more Western-editorial |
| Wabi-Sabi | Shared appreciation for imperfection and aging | Wabi-Sabi embraces visible wear and decay as beauty; Nature Distilled refines imperfection into polished sophistication |
| Organic Modern | Overlapping palette and material focus | Organic Modern uses bolder curves and more saturated greens; Nature Distilled is more muted and typographically editorial |
| Quiet Luxury | Shared principle of understated sophistication | Quiet Luxury tends toward fashion-forward monochrome and cooler tones; Nature Distilled is explicitly earth-toned and warmer |
| Cottagecore | Both draw from rural, natural imagery | Cottagecore is nostalgic, pattern-heavy, and whimsical; Nature Distilled is contemporary, minimal, and composed |
| Biophilic Design | Shared roots in human-nature connection | Biophilic Design prioritizes literal living elements (plants, water, light); Nature Distilled abstracts nature into tone and texture |
| Scandinavian Minimalism | Overlapping love of whitespace and restraint | Scandinavian leans cool-white and functional; Nature Distilled replaces white with warm parchment and adds textural depth |
| Brutalist Organic | Both reject hyper-polished digital sterility | Brutalist Organic is deliberately raw and confrontational; Nature Distilled channels that rawness into quiet refinement |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nature Distilled - Quick Start Template</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Serif+Display&family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">

  <style>
    /* ============================================
       NATURE DISTILLED - DESIGN SYSTEM
       Muted earthy refined naturalism
    ============================================ */

    /* --- CSS Custom Properties --- */
    :root {
      /* Backgrounds & Neutrals */
      --nd-raw-linen: #F5F0EB;
      --nd-parchment: #EDE6DB;
      --nd-warm-sand: #D9CEBF;
      --nd-bone-white: #FAF7F3;

      /* Mid Tones */
      --nd-driftwood: #B8A99A;
      --nd-mushroom: #9C9084;
      --nd-stone-grey: #A3A095;
      --nd-blush-clay: #C9A99B;

      /* Earth Accents */
      --nd-clay: #B07D62;
      --nd-terracotta: #A8644B;
      --nd-soil-brown: #5C4033;
      --nd-dark-earth: #3B2A1F;

      /* Botanical Accents */
      --nd-dried-sage: #8A9178;
      --nd-muted-olive: #6B6D4E;
      --nd-deep-moss: #4A5240;

      /* Functional Tokens */
      --nd-bg: var(--nd-raw-linen);
      --nd-bg-alt: var(--nd-parchment);
      --nd-text: var(--nd-soil-brown);
      --nd-heading: var(--nd-dark-earth);
      --nd-accent: var(--nd-clay);
      --nd-accent-hover: var(--nd-terracotta);
      --nd-link: var(--nd-terracotta);
      --nd-surface: var(--nd-bone-white);
      --nd-border: var(--nd-warm-sand);
      --nd-muted: var(--nd-mushroom);
      --nd-success: var(--nd-dried-sage);

      /* Spacing */
      --nd-space-xs: 8px;
      --nd-space-sm: 16px;
      --nd-space-md: 24px;
      --nd-space-lg: 48px;
      --nd-space-xl: 80px;
      --nd-space-2xl: 120px;

      /* Radius */
      --nd-radius-sm: 6px;
      --nd-radius-md: 10px;
      --nd-radius-lg: 14px;
    }

    /* --- Reset --- */
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* --- Base Typography --- */
    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Lora', 'Georgia', serif;
      font-size: 1.06rem;
      line-height: 1.85;
      color: var(--nd-text);
      background-color: var(--nd-bg);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4 {
      font-family: 'DM Serif Display', 'Georgia', serif;
      color: var(--nd-heading);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    h1 { font-size: clamp(2.6rem, 7vw, 5rem); }
    h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
    h3 {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-weight: 500;
      font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    }

    a {
      color: var(--nd-link);
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--nd-clay);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* --- Utility: Label Text --- */
    .label {
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nd-muted);
    }

    /* --- Utility: Container --- */
    .container {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .container--narrow {
      max-width: 780px;
    }

    /* ============================================
       NAVIGATION
    ============================================ */
    .nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 40px;
      background: rgba(245, 240, 235, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(217, 206, 191, 0.5);
    }

    .nav__logo {
      font-family: 'DM Serif Display', 'Georgia', serif;
      font-size: 1.3rem;
      color: var(--nd-heading);
      text-decoration: none;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--nd-mushroom);
      position: relative;
      transition: color 0.3s ease;
    }

    .nav__links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--nd-clay);
      transition: width 0.3s ease;
    }

    .nav__links a:hover {
      color: var(--nd-clay);
    }

    .nav__links a:hover::after {
      width: 100%;
    }

    .nav__cta {
      padding: 10px 24px;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--nd-bone-white) !important;
      background: var(--nd-clay);
      border-radius: var(--nd-radius-sm);
      transition: background 0.3s ease;
    }

    .nav__cta:hover {
      background: var(--nd-terracotta);
      color: var(--nd-bone-white) !important;
    }

    .nav__cta::after {
      display: none;
    }

    /* ============================================
       HERO SECTION
    ============================================ */
    .hero {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 88vh;
      padding: var(--nd-space-xl) 40px;
      background:
        linear-gradient(
          170deg,
          var(--nd-parchment) 0%,
          var(--nd-raw-linen) 40%,
          var(--nd-bone-white) 100%
        );
      text-align: center;
      overflow: hidden;
    }

    /* Subtle paper grain texture overlay */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(92, 64, 51, 0.01) 2px,
          rgba(92, 64, 51, 0.01) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(92, 64, 51, 0.008) 2px,
          rgba(92, 64, 51, 0.008) 4px
        );
      pointer-events: none;
    }

    .hero__content {
      position: relative;
      z-index: 1;
      max-width: 720px;
    }

    .hero__eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.73rem;
      font-weight: 500;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nd-clay);
      margin-bottom: 20px;
    }

    .hero__title {
      font-size: clamp(2.8rem, 7vw, 5rem);
      color: var(--nd-heading);
      margin-bottom: 24px;
      letter-spacing: -0.02em;
      line-height: 1.08;
    }

    .hero__subtitle {
      font-family: 'Lora', 'Georgia', serif;
      font-size: clamp(1.05rem, 2vw, 1.2rem);
      line-height: 1.85;
      color: var(--nd-mushroom);
      max-width: 560px;
      margin: 0 auto 40px;
    }

    .hero__actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Decorative circle behind hero */
    .hero__deco {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(176, 125, 98, 0.06) 0%,
        transparent 70%
      );
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    /* ============================================
       BUTTONS
    ============================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 32px;
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      text-decoration: none;
      border: none;
      border-radius: var(--nd-radius-sm);
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, color 0.3s ease;
    }

    .btn--primary {
      color: var(--nd-bone-white);
      background: var(--nd-clay);
      box-shadow: 0 2px 8px rgba(176, 125, 98, 0.2);
    }

    .btn--primary:hover {
      background: var(--nd-terracotta);
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(168, 100, 75, 0.25);
      color: var(--nd-bone-white);
    }

    .btn--outline {
      color: var(--nd-clay);
      background: transparent;
      border: 1.5px solid var(--nd-clay);
      box-shadow: none;
    }

    .btn--outline:hover {
      color: var(--nd-bone-white);
      background: var(--nd-clay);
      box-shadow: 0 2px 8px rgba(176, 125, 98, 0.2);
    }

    /* ============================================
       DIVIDER
    ============================================ */
    .divider {
      position: relative;
      height: 6px;
      max-width: 100px;
      margin: 0 auto;
      border: none;
      background: transparent;
    }

    .divider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--nd-clay) 50%,
        transparent
      );
    }

    .divider::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--nd-warm-sand) 50%,
        transparent
      );
    }

    /* ============================================
       ABOUT / INTRO SECTION
    ============================================ */
    .about {
      padding: var(--nd-space-2xl) 40px;
      background: var(--nd-bg);
    }

    .about__inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      max-width: 1080px;
      margin: 0 auto;
    }

    .about__image {
      width: 100%;
      aspect-ratio: 4 / 5;
      background:
        linear-gradient(
          145deg,
          var(--nd-warm-sand) 0%,
          var(--nd-driftwood) 100%
        );
      border-radius: var(--nd-radius-lg);
      border: 1px solid var(--nd-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nd-mushroom);
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .about__text h2 {
      margin-bottom: var(--nd-space-md);
    }

    .about__text .label {
      margin-bottom: var(--nd-space-sm);
      display: block;
    }

    .about__text p {
      margin-bottom: var(--nd-space-sm);
      color: var(--nd-text);
    }

    /* ============================================
       FEATURES GRID
    ============================================ */
    .features {
      padding: var(--nd-space-2xl) 40px;
      background: var(--nd-bg-alt);
    }

    .features__header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto var(--nd-space-xl);
    }

    .features__header .label {
      display: block;
      margin-bottom: var(--nd-space-sm);
    }

    .features__header p {
      margin-top: var(--nd-space-sm);
      color: var(--nd-muted);
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 28px;
      max-width: 1120px;
      margin: 0 auto;
    }

    .feature-card {
      background: var(--nd-surface);
      border: 1px solid var(--nd-border);
      border-radius: var(--nd-radius-md);
      padding: 40px 32px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .feature-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 24px rgba(92, 64, 51, 0.08);
    }

    .feature-card__icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--nd-parchment);
      border-radius: var(--nd-radius-md);
      margin-bottom: 20px;
      font-size: 1.3rem;
    }

    .feature-card h3 {
      font-family: 'DM Serif Display', 'Georgia', serif;
      font-size: 1.25rem;
      color: var(--nd-heading);
      margin-bottom: 10px;
    }

    .feature-card p {
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--nd-muted);
    }

    /* ============================================
       QUOTE / TESTIMONIAL
    ============================================ */
    .quote-section {
      padding: var(--nd-space-2xl) 40px;
      background: var(--nd-bg);
    }

    .quote-block {
      max-width: 680px;
      margin: 0 auto;
      padding-left: 32px;
      border-left: 3px solid var(--nd-clay);
    }

    .quote-block blockquote {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-size: clamp(1.4rem, 3vw, 1.85rem);
      font-weight: 400;
      font-style: italic;
      line-height: 1.6;
      color: var(--nd-soil-brown);
    }

    .quote-block cite {
      display: block;
      margin-top: 20px;
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nd-muted);
    }

    /* ============================================
       CARDS SHOWCASE
    ============================================ */
    .cards-section {
      padding: var(--nd-space-2xl) 40px;
      background: var(--nd-bg-alt);
    }

    .cards-section__header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto var(--nd-space-xl);
    }

    .cards-section__header .label {
      display: block;
      margin-bottom: var(--nd-space-sm);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      max-width: 1120px;
      margin: 0 auto;
    }

    .card {
      background: var(--nd-surface);
      border: 1px solid var(--nd-border);
      border-radius: var(--nd-radius-lg);
      overflow: hidden;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow:
        0 8px 28px rgba(92, 64, 51, 0.08),
        0 2px 6px rgba(92, 64, 51, 0.04);
    }

    .card__image {
      width: 100%;
      aspect-ratio: 16 / 10;
      background:
        linear-gradient(
          135deg,
          var(--nd-warm-sand) 0%,
          var(--nd-blush-clay) 50%,
          var(--nd-driftwood) 100%
        );
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nd-mushroom);
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .card__body {
      padding: 28px 28px 32px;
    }

    .card__body .label {
      display: block;
      margin-bottom: 12px;
      color: var(--nd-clay);
    }

    .card__body h3 {
      font-family: 'DM Serif Display', serif;
      font-size: 1.3rem;
      color: var(--nd-heading);
      margin-bottom: 10px;
    }

    .card__body p {
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--nd-muted);
      margin-bottom: 20px;
    }

    .card__body a {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--nd-clay);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .card__body a:hover {
      color: var(--nd-terracotta);
    }

    /* ============================================
       CTA BANNER
    ============================================ */
    .cta {
      padding: var(--nd-space-2xl) 40px;
      background:
        linear-gradient(
          160deg,
          var(--nd-soil-brown) 0%,
          var(--nd-dark-earth) 100%
        );
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(245, 240, 235, 0.015) 3px,
          rgba(245, 240, 235, 0.015) 6px
        );
      pointer-events: none;
    }

    .cta__inner {
      position: relative;
      z-index: 1;
      max-width: 600px;
      margin: 0 auto;
    }

    .cta h2 {
      color: var(--nd-raw-linen);
      margin-bottom: var(--nd-space-sm);
    }

    .cta p {
      color: var(--nd-driftwood);
      margin-bottom: var(--nd-space-lg);
      font-size: 1.05rem;
    }

    .cta .btn--primary {
      background: var(--nd-clay);
    }

    .cta .btn--primary:hover {
      background: var(--nd-terracotta);
    }

    /* ============================================
       FOOTER
    ============================================ */
    .footer {
      padding: var(--nd-space-xl) 40px var(--nd-space-lg);
      background: var(--nd-dark-earth);
      color: var(--nd-driftwood);
    }

    .footer__inner {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
      max-width: 1120px;
      margin: 0 auto;
    }

    .footer__brand {
      font-family: 'DM Serif Display', 'Georgia', serif;
      font-size: 1.3rem;
      color: var(--nd-raw-linen);
      margin-bottom: 16px;
    }

    .footer__desc {
      font-size: 0.92rem;
      line-height: 1.7;
      color: var(--nd-mushroom);
    }

    .footer h4 {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nd-warm-sand);
      margin-bottom: 20px;
    }

    .footer ul {
      list-style: none;
    }

    .footer ul li {
      margin-bottom: 10px;
    }

    .footer ul a {
      font-family: 'Lora', serif;
      font-size: 0.9rem;
      color: var(--nd-mushroom);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer ul a:hover {
      color: var(--nd-raw-linen);
    }

    .footer__bottom {
      max-width: 1120px;
      margin: var(--nd-space-lg) auto 0;
      padding-top: var(--nd-space-md);
      border-top: 1px solid rgba(184, 169, 154, 0.15);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: var(--nd-mushroom);
    }

    .footer__bottom a {
      color: var(--nd-driftwood);
      text-decoration: none;
    }

    .footer__bottom a:hover {
      color: var(--nd-raw-linen);
    }

    /* ============================================
       RESPONSIVE
    ============================================ */
    @media (max-width: 900px) {
      .nav__links {
        display: none;
      }

      .about__inner {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .about__image {
        max-width: 400px;
        margin: 0 auto;
      }

      .footer__inner {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
    }

    @media (max-width: 600px) {
      .nav {
        padding: 14px 20px;
      }

      .hero {
        padding: 60px 20px;
        min-height: 70vh;
      }

      .about,
      .features,
      .quote-section,
      .cards-section,
      .cta {
        padding: var(--nd-space-xl) 20px;
      }

      .footer__inner {
        grid-template-columns: 1fr;
        gap: 28px;
      }

      .footer__bottom {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }

      .hero__actions {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <!-- ========== NAVIGATION ========== -->
  <nav class="nav">
    <a href="#" class="nav__logo">Terrain</a>
    <ul class="nav__links">
      <li><a href="#about">About</a></li>
      <li><a href="#features">Process</a></li>
      <li><a href="#journal">Journal</a></li>
      <li><a href="#contact" class="nav__cta">Get in Touch</a></li>
    </ul>
  </nav>

  <!-- ========== HERO ========== -->
  <section class="hero">
    <div class="hero__deco" aria-hidden="true"></div>
    <div class="hero__content">
      <p class="hero__eyebrow">Rooted in Craft</p>
      <h1 class="hero__title">Design Drawn from the Earth</h1>
      <p class="hero__subtitle">
        We create thoughtful, enduring work shaped by the textures, tones, and
        quiet rhythms of the natural world. Refined simplicity, grounded in
        material truth.
      </p>
      <div class="hero__actions">
        <a href="#features" class="btn btn--primary">Explore Our Process</a>
        <a href="#journal" class="btn btn--outline">Read the Journal</a>
      </div>
    </div>
  </section>

  <!-- ========== ABOUT ========== -->
  <section class="about" id="about">
    <div class="about__inner">
      <div class="about__image" aria-label="Textured natural material photograph">
        Material Photograph
      </div>
      <div class="about__text">
        <span class="label">Our Philosophy</span>
        <h2>Distilled to What Matters</h2>
        <p>
          We believe the most compelling design begins with restraint. By
          stripping away the unnecessary, we reveal the essential character of
          every project — its texture, its warmth, its quiet strength.
        </p>
        <p>
          Our approach is rooted in the physical world: the grain of aged oak,
          the softness of raw linen, the muted warmth of sun-dried clay. These
          materials guide our choices in color, typography, and composition,
          producing work that feels both timeless and deeply contemporary.
        </p>
      </div>
    </div>
  </section>

  <!-- ========== DIVIDER ========== -->
  <div class="divider" role="separator"></div>

  <!-- ========== FEATURES ========== -->
  <section class="features" id="features">
    <div class="features__header">
      <span class="label">Our Process</span>
      <h2>Crafted with Intention</h2>
      <p>
        Every decision passes through our core principles of material honesty,
        tonal harmony, and purposeful restraint.
      </p>
    </div>
    <div class="features__grid">
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9672;</div>
        <h3>Material Research</h3>
        <p>
          We begin each project by studying the physical materials that define
          its context — wood, stone, clay, fiber — and translate their
          character into digital form.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9673;</div>
        <h3>Tonal Calibration</h3>
        <p>
          Colors are selected from nature and desaturated to their most
          refined state, ensuring every tone harmonizes within the muted
          earth palette.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9674;</div>
        <h3>Typographic Voice</h3>
        <p>
          We pair organic serif headings with clean functional body text
          to create a voice that is editorially confident yet warmly
          approachable.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9675;</div>
        <h3>Textural Layering</h3>
        <p>
          Subtle grain, linen weave, and paper-fiber overlays add the
          tactile depth that distinguishes refined naturalism from flat
          minimalism.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9676;</div>
        <h3>Spatial Breathing</h3>
        <p>
          Generous whitespace gives the muted palette room to resonate,
          creating layouts that feel calm, considered, and never
          overcrowded.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">&#9677;</div>
        <h3>Enduring Craft</h3>
        <p>
          We design for longevity over trendiness, choosing classic
          proportions and timeless typefaces that age gracefully across
          seasons and years.
        </p>
      </div>
    </div>
  </section>

  <!-- ========== QUOTE ========== -->
  <section class="quote-section">
    <div class="quote-block">
      <blockquote>
        &ldquo;The most beautiful things are not made, they are
        uncovered — layers removed until only the essential remains,
        warm and honest as turned earth.&rdquo;
      </blockquote>
      <cite>Terrain Studio, Design Principles</cite>
    </div>
  </section>

  <!-- ========== CARDS / JOURNAL ========== -->
  <section class="cards-section" id="journal">
    <div class="cards-section__header">
      <span class="label">Journal</span>
      <h2>Recent Reflections</h2>
    </div>
    <div class="cards-grid">
      <article class="card">
        <div class="card__image" aria-label="Article thumbnail">
          Texture Study
        </div>
        <div class="card__body">
          <span class="label">Material</span>
          <h3>The Grain of Things</h3>
          <p>
            How close observation of wood grain, stone fracture, and
            clay surface informs our approach to digital texture and
            visual depth.
          </p>
          <a href="#">Read More &rarr;</a>
        </div>
      </article>
      <article class="card">
        <div class="card__image" aria-label="Article thumbnail">
          Color Field
        </div>
        <div class="card__body">
          <span class="label">Palette</span>
          <h3>Muted by Nature</h3>
          <p>
            Exploring how natural light desaturates color and why the
            most sophisticated palettes are the quietest ones.
          </p>
          <a href="#">Read More &rarr;</a>
        </div>
      </article>
      <article class="card">
        <div class="card__image" aria-label="Article thumbnail">
          Botanical Line
        </div>
        <div class="card__body">
          <span class="label">Process</span>
          <h3>Distillation as Method</h3>
          <p>
            Our process of reducing visual complexity to reveal the
            essential character of every project we undertake.
          </p>
          <a href="#">Read More &rarr;</a>
        </div>
      </article>
    </div>
  </section>

  <!-- ========== CTA ========== -->
  <section class="cta" id="contact">
    <div class="cta__inner">
      <h2>Begin a Conversation</h2>
      <p>
        Every project starts with listening. Tell us about your vision and
        we will find its natural form together.
      </p>
      <a href="#" class="btn btn--primary">Start a Project</a>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="footer__inner">
      <div>
        <div class="footer__brand">Terrain</div>
        <p class="footer__desc">
          A design studio rooted in material honesty and refined
          naturalism. We create work that endures.
        </p>
      </div>
      <div>
        <h4>Studio</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4>Work</h4>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Journal</a></li>
        </ul>
      </div>
      <div>
        <h4>Connect</h4>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>&copy; 2026 Terrain Studio. All rights reserved.</span>
      <a href="#">Privacy Policy</a>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Test contrast ratios rigorously**: The narrow tonal range of the Nature Distilled palette means text-background combinations can easily fall below WCAG AA thresholds; use tools like WebAIM Contrast Checker on every pairing, especially Mushroom Grey (#9C9084) text on Parchment (#EDE6DB) backgrounds
- **Use texture overlays at extremely low opacity (2-5%)**: The paper grain and linen weave pseudo-elements should be felt subconsciously rather than seen consciously; if a texture is visible on a casual glance, halve its opacity
- **Serve high-resolution material photography**: The aesthetic depends on the visible quality of natural textures; compressed, low-resolution images of wood grain or clay surfaces will undermine the entire design language
- **Prefer CSS-generated textures over image assets for backgrounds**: The SVG noise filter and repeating-linear-gradient techniques shown above are resolution-independent and add zero HTTP requests, keeping page weight low while maintaining tactile quality
- **Use warm-toned box-shadows consistently**: Replace all default `rgba(0, 0, 0, ...)` shadows with `rgba(92, 64, 51, ...)` (Soil Brown) to maintain thermal cohesion across the entire interface
- **Implement responsive typography with clamp()**: The `clamp()` function ensures headings scale gracefully between mobile and desktop without jarring breakpoint jumps, which would contradict the aesthetic's smooth, organic character
- **Avoid pure white (#FFFFFF) anywhere in the design**: The brightest value in the system is Bone White (#FAF7F3); even modal overlays, input backgrounds, and browser chrome should use warm-shifted whites to prevent cold spots from breaking the tonal envelope
- **Load fonts with `display=swap` and preconnect**: Nature Distilled's serif-heavy typographic hierarchy means visible font-loading shifts (FOUT) are especially disruptive; preconnect to Google Fonts and use `font-display: swap` to minimize layout instability
