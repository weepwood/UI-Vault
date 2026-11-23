# Dark Romance Design Reference

## Overview

Dark Romance is a brooding, sensuous design aesthetic rooted in Gothic romanticism that interweaves moody florals, deep jewel tones, ornate gilded details, and the warm, flickering glow of candlelight into richly atmospheric visual experiences. The aesthetic draws from the intersection of 18th- and 19th-century Romantic-era painting, Victorian mourning culture, Gothic Revival architecture, and the lush decadence of Pre-Raphaelite art. Where pure Gothic design emphasizes structural gravitas and medieval architecture, Dark Romance softens those edges with botanical abundance -- overblown roses, trailing wisteria, wilting peonies -- and replaces cold stone with velvet, lace, and brocade. The emotional register is one of passionate intensity held in tension with melancholy: love letters written by candlelight, dried flowers pressed between the pages of leather-bound books, rain-streaked windowpanes overlooking overgrown gardens.

In web and UI design, the Dark Romance aesthetic translates to deeply saturated backgrounds in near-blacks and midnight hues, layered with subtle damask or floral textures. Typography favors high-contrast serifs and elegant scripts that recall Victorian lettering and romantic calligraphy. Color accents are drawn from jewel tones -- burgundy, deep plum, garnet, antique gold -- applied with restraint against expansive dark canvases so that each point of color feels like candlelight emerging from shadow. Interactive elements incorporate ornate borders, delicate filigree, and soft vignette effects that suggest the edges of an old photograph or a scene viewed through a rain-blurred window. Imagery leans heavily on dark florals, vintage botanical illustrations, antique textures, and chiaroscuro lighting reminiscent of Caravaggio or Rembrandt. The overall effect is simultaneously opulent and intimate, dramatic yet deeply personal -- a digital space that feels like stepping into a candlelit parlor filled with dark roses and whispered secrets.

---

## Visual Characteristics

### Core Design Traits

- **Moody floral abundance** -- overblown roses, drooping peonies, trailing ivy, wilting blooms, and dark botanical illustrations used as hero imagery, background textures, card accents, and decorative borders throughout the design
- **Jewel-tone color dominance** -- deep burgundy, garnet red, plum purple, midnight blue, and emerald green serve as the primary accent palette against near-black backgrounds, evoking precious stones glowing in dim light
- **Candlelit warmth and glow** -- warm amber and gold highlights simulate candlelight through radial gradients, soft glows on text, and warm-toned vignettes that make content feel illuminated from within
- **Ornate gilded detailing** -- gold filigree borders, decorative flourishes, ornamental dividers, and antique frame motifs applied to cards, sections, and navigation elements for a sense of opulent craftsmanship
- **Velvet and textile textures** -- subtle background overlays suggesting crushed velvet, damask brocade, aged lace, and woven silk that add tactile richness and depth to flat digital surfaces
- **Chiaroscuro lighting** -- dramatic contrasts between deep shadow and focused warm illumination, inspired by Baroque and Romantic-era painting, creating depth and emotional intensity
- **Victorian typographic elegance** -- high-contrast serif typefaces, decorative script initials, and elegant letter-spacing that reference 19th-century romantic printing and love-letter calligraphy
- **Antique and aged materiality** -- textures and treatments suggesting aged parchment, tarnished metal, patinated brass, weathered leather, and faded ink that ground the aesthetic in historical romance
- **Vignette and soft-focus edges** -- dark edge vignettes on images and sections that draw the eye inward and create the intimate, enclosed atmosphere of a candlelit room
- **Symbolic romantic motifs** -- dark roses, antique keys, ornate mirrors, dripping candles, broken chains, vintage cameos, and moth/butterfly silhouettes used as decorative icons and illustrative accents

### Design Principles

- **Darkness as embrace, not void** -- the dark backgrounds should feel warm and enveloping like a velvet-draped room, not cold and empty; achieve this through warm undertones (deep brown-blacks, midnight plums) rather than pure black
- **Restrained opulence** -- gold accents, ornate borders, and floral details are most powerful when used selectively; every gilded element should feel precious, not overwhelming
- **Emotional chiaroscuro** -- create strong contrasts between illuminated focal points and shadowed surrounds to guide the eye and evoke the dramatic lighting of Romantic-era paintings
- **Botanical narrative** -- flowers are not mere decoration but carry symbolic weight; roses suggest passion and thorns, wilting blooms evoke bittersweet beauty, ivy represents enduring attachment
- **Intimacy over grandeur** -- unlike pure Gothic design which seeks cathedral-scale awe, Dark Romance should feel personal and enclosed, like a private chamber or secret garden
- **Texture as storytelling** -- every surface should suggest a material (velvet, lace, aged paper, tarnished gold) that reinforces the narrative of romantic antiquity
- **Warm light, cool shadow** -- maintain a temperature contrast where highlights lean warm (amber, gold, candlelight) and shadows lean cool (midnight blue, deep plum) for atmospheric depth
- **Graceful transitions** -- animations should be slow, smooth, and elegant (fading, blooming, flickering) rather than sharp or mechanical, matching the languid mood of the aesthetic

---

## Color Palette

The Dark Romance palette is built on a foundation of warm near-blacks and rich dark tones, punctuated by deep jewel-tone accents and warm gold highlights. Colors should feel like they are emerging from shadow -- saturated but never garish, warm but never bright. The overall impression is of precious materials viewed by candlelight: garnets, burgundy velvet, tarnished gold, aged ivory.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Midnight Velvet | `#0D0A0E` | Deepest background, shadow areas, page base |
| Ebony Rose | `#1A1318` | Primary dark background, card surfaces |
| Twilight Plum | `#2A1F28` | Elevated surfaces, secondary panels, input fields |
| Dusty Mauve | `#4A3A48` | Borders, dividers, muted UI elements |
| Faded Orchid | `#7A6878` | Secondary text, captions, disabled states |
| Antique Ivory | `#E8DDD0` | Primary body text on dark backgrounds |
| Parchment Cream | `#F4EDE4` | High-emphasis headings, bright highlights |
| Garnet | `#8B1A2B` | Primary warm accent, emphasis, call-to-action |
| Burgundy Wine | `#6B1028` | Deep red accent, hover states, decorative borders |
| Rose Blush | `#C4707A` | Soft accent, tags, secondary interactive elements |
| Plum Royale | `#5A1A4A` | Rich purple accent, atmospheric tints |
| Midnight Amethyst | `#3A1838` | Purple background tints, gradient endpoints |
| Antique Gold | `#C8A050` | Gold highlights, ornamental borders, key headings |
| Candlelight Amber | `#D4A030` | Warm glow effects, hover highlights |
| Tarnished Brass | `#8A7A50` | Muted metallic accents, secondary borders |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --dr-midnight: #0D0A0E;
  --dr-ebony: #1A1318;
  --dr-twilight: #2A1F28;
  --dr-plum-bg: #3A1838;

  /* Neutral / Stone */
  --dr-mauve: #4A3A48;
  --dr-orchid: #7A6878;
  --dr-ivory: #E8DDD0;
  --dr-cream: #F4EDE4;

  /* Jewel Accents */
  --dr-garnet: #8B1A2B;
  --dr-burgundy: #6B1028;
  --dr-rose: #C4707A;
  --dr-plum: #5A1A4A;
  --dr-amethyst: #3A1838;

  /* Gold and Warm Light */
  --dr-gold: #C8A050;
  --dr-amber: #D4A030;
  --dr-brass: #8A7A50;

  /* Semantic Aliases */
  --dr-bg-primary: var(--dr-midnight);
  --dr-bg-surface: var(--dr-ebony);
  --dr-bg-elevated: var(--dr-twilight);
  --dr-text-primary: var(--dr-ivory);
  --dr-text-bright: var(--dr-cream);
  --dr-accent-primary: var(--dr-garnet);
  --dr-accent-warm: var(--dr-gold);
  --dr-accent-soft: var(--dr-rose);
  --dr-border: var(--dr-mauve);
}
```

---

## Typography

Dark Romance typography balances dramatic elegance with romantic warmth. Headings use high-contrast serifs and decorative display faces that evoke Victorian lettering, engraved invitations, and the title pages of antique books. Body text relies on refined old-style serifs with excellent readability at smaller sizes. Script and calligraphic faces appear sparingly for decorative accents, pull quotes, and ornamental initials -- suggesting handwritten love letters and personal correspondence.

### Recommended Google Fonts

| Font | Style | Weight(s) | Usage |
|------|-------|-----------|-------|
| **Playfair Display** | High-contrast transitional serif | 400-900 | Hero headings, display titles, dramatic emphasis |
| **Cormorant Garamond** | Refined display serif | 300-700 | Section headings, subheadings, elegant display text |
| **Cinzel** | Inscriptional serif | 400, 500, 600, 700, 900 | Navigation labels, uppercase headings, formal titles |
| **EB Garamond** | Classical old-style serif | 400-800 | Body text, long-form reading, paragraphs |
| **Spectral** | Screen-optimized serif | 200-800 | Alternative body text, UI labels, smaller text |
| **Great Vibes** | Formal calligraphic script | 400 | Decorative accents, pull quotes, ornamental initials |
| **Cormorant** | Display garalde serif | 300-700 | Feature text, large quotes, stylized subheadings |
| **Bodoni Moda** | High-contrast didone serif | 400-900 | Alternative display headings, editorial titles |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| Playfair Display 700 | EB Garamond 400 | Classic Dark Romance: dramatic contrast with old-world readability |
| Cormorant Garamond 600 | Spectral 400 | Refined elegance: delicate display with clean body text |
| Cinzel 700 | EB Garamond 400 | Formal opulence: inscriptional authority with warm serif body |
| Bodoni Moda 700 | Cormorant 400 | Editorial romance: extreme contrast heading with literary body |
| Playfair Display 700 | Cormorant Garamond 400 | Luxurious pairing: both fonts share romantic DNA |

### CSS Example

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap');

/* Hero / Display headings */
.dr-display {
  font-family: 'Playfair Display', 'Bodoni Moda', serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  color: var(--dr-cream);
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(200, 160, 80, 0.2);
}

/* Section headings */
h1, h2, h3 {
  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-weight: 600;
  color: var(--dr-ivory);
  letter-spacing: 0.04em;
  line-height: 1.25;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.8rem); }

/* Body text */
body {
  font-family: 'EB Garamond', 'Spectral', 'Cormorant', serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.85;
  letter-spacing: 0.015em;
  color: var(--dr-ivory);
}

/* Decorative script accent */
.dr-script {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8em;
  color: var(--dr-gold);
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* Formal labels and navigation */
.dr-label {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-variant: small-caps;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  color: var(--dr-orchid);
  text-transform: uppercase;
}

/* Pull quotes */
.dr-quote {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.6em;
  color: var(--dr-rose);
  letter-spacing: 0.02em;
  line-height: 1.5;
}
```

---

## Layout Principles

- **Warm, enclosed compositions** -- favor layouts that feel intimate and contained rather than open and airy; use dark vignettes, narrow max-widths, and generous padding to create the sense of a candlelit interior
- **Centered symmetry with organic accents** -- primary content is centered and balanced, but floral illustrations, decorative flourishes, and ornamental details break the rigid symmetry with organic asymmetry
- **Generous vertical rhythm** -- sections should breathe with ample vertical spacing (6-10rem between major sections), creating a slow, contemplative reading pace
- **Layered visual depth** -- build surfaces from multiple layers: dark base, subtle damask or floral texture overlay, ornamental borders, content, and decorative gilded accents on top
- **Ornate section dividers** -- use decorative horizontal rules with flourish SVGs, gold filigree borders, or floral divider graphics between sections rather than plain lines
- **Portrait-oriented cards** -- favor tall, narrow card proportions that echo antique portrait frames, book covers, and Victorian cartes de visite
- **Dark canvas, luminous focal points** -- the majority of the viewport should be dark; headings, images, and accent elements provide the light, like candles in a dark room
- **Soft maximum widths** -- body content constrained to 900-1000px with generous side margins creates an intimate reading column, like a page from a book
- **Full-bleed hero with vignette** -- hero sections span the full viewport width with dramatic floral imagery, heavy dark vignettes around edges, and centered text overlays
- **Narrow grid with ornamental gutters** -- a 2- or 3-column grid with wide gutters allows decorative dividers and breathing room between content blocks

---

## CSS / Design Techniques

### Dark Romance Card Component

```css
.dr-card {
  background: var(--dr-ebony);
  border: 1px solid var(--dr-mauve);
  border-radius: 2px;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;
}

/* Ornate gold top border accent */
.dr-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--dr-brass) 15%,
    var(--dr-gold) 50%,
    var(--dr-brass) 85%,
    transparent 100%
  );
}

/* Candlelight inner glow */
.dr-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(200, 160, 80, 0.05) 0%,
    transparent 55%
  );
  pointer-events: none;
}

.dr-card:hover {
  border-color: var(--dr-gold);
  box-shadow:
    0 0 30px rgba(200, 160, 80, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}

.dr-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  color: var(--dr-gold);
  margin-bottom: 1rem;
}

.dr-card p {
  font-family: 'EB Garamond', serif;
  color: var(--dr-ivory);
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Garnet accent variant */
.dr-card--garnet::before {
  background: linear-gradient(90deg,
    transparent 0%,
    var(--dr-burgundy) 15%,
    var(--dr-garnet) 50%,
    var(--dr-burgundy) 85%,
    transparent 100%
  );
}

.dr-card--garnet:hover {
  border-color: var(--dr-garnet);
  box-shadow:
    0 0 30px rgba(139, 26, 43, 0.1),
    0 12px 40px rgba(0, 0, 0, 0.5);
}
```

### Dark Romance Button Component

```css
.dr-btn {
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dr-gold);
  background: transparent;
  border: 1px solid var(--dr-gold);
  padding: 0.9rem 2.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

/* Decorative corner flourishes */
.dr-btn::before,
.dr-btn::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid var(--dr-gold);
  transition: all 0.5s ease;
  opacity: 0.6;
}

.dr-btn::before {
  top: 4px;
  left: 4px;
  border-right: none;
  border-bottom: none;
}

.dr-btn::after {
  bottom: 4px;
  right: 4px;
  border-left: none;
  border-top: none;
}

.dr-btn:hover {
  background: linear-gradient(135deg, var(--dr-garnet), var(--dr-burgundy));
  color: var(--dr-cream);
  border-color: var(--dr-garnet);
  box-shadow:
    0 0 24px rgba(139, 26, 43, 0.25),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.dr-btn:hover::before,
.dr-btn:hover::after {
  width: 14px;
  height: 14px;
  border-color: var(--dr-rose);
  opacity: 1;
}

/* Ghost variant -- subtle, secondary */
.dr-btn--ghost {
  color: var(--dr-orchid);
  border-color: var(--dr-mauve);
}

.dr-btn--ghost::before,
.dr-btn--ghost::after {
  border-color: var(--dr-mauve);
}

.dr-btn--ghost:hover {
  background: var(--dr-twilight);
  color: var(--dr-ivory);
  border-color: var(--dr-orchid);
  box-shadow: 0 0 16px rgba(90, 26, 74, 0.15);
}

/* Rose variant -- soft accent */
.dr-btn--rose {
  color: var(--dr-rose);
  border-color: var(--dr-rose);
}

.dr-btn--rose:hover {
  background: linear-gradient(135deg, rgba(196, 112, 122, 0.2), rgba(139, 26, 43, 0.3));
  color: var(--dr-cream);
  border-color: var(--dr-rose);
  box-shadow: 0 0 20px rgba(196, 112, 122, 0.15);
}
```

### Dark Romance Navigation Bar

```css
.dr-nav {
  background: linear-gradient(180deg, var(--dr-midnight) 0%, rgba(13, 10, 14, 0.95) 100%);
  border-bottom: 1px solid var(--dr-mauve);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
}

.dr-nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.dr-nav-brand {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--dr-gold);
  text-decoration: none;
  padding: 1.2rem 0;
  letter-spacing: 0.04em;
  transition: text-shadow 0.4s ease;
}

.dr-nav-brand:hover {
  text-shadow: 0 0 20px rgba(200, 160, 80, 0.3);
}

/* Decorative flourish after brand */
.dr-nav-brand::after {
  content: ' \2767';  /* rotated floral heart bullet */
  font-size: 0.7em;
  opacity: 0.5;
  margin-left: 0.3em;
}

.dr-nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
}

.dr-nav-links a {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dr-orchid);
  text-decoration: none;
  padding: 1.4rem 1.2rem;
  position: relative;
  transition: color 0.4s ease;
}

.dr-nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--dr-garnet);
  transform: translateX(-50%);
  transition: width 0.4s ease;
}

.dr-nav-links a:hover {
  color: var(--dr-cream);
}

.dr-nav-links a:hover::after {
  width: 60%;
}

.dr-nav-links a.active {
  color: var(--dr-gold);
}

.dr-nav-links a.active::after {
  width: 40%;
  background: var(--dr-gold);
}
```

### Dark Romance Hero Section

```css
.dr-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: var(--dr-midnight);
}

/* Background image with dark overlay */
.dr-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3) saturate(0.7);
}

/* Multi-layered vignette for intimacy */
.dr-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    transparent 20%,
    rgba(13, 10, 14, 0.4) 50%,
    rgba(13, 10, 14, 0.85) 80%,
    var(--dr-midnight) 100%
  );
  z-index: 1;
}

/* Bottom gradient fade */
.dr-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, var(--dr-midnight), transparent);
  z-index: 1;
}

.dr-hero-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
  padding: 2rem;
}

.dr-hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: clamp(2.8rem, 8vw, 6rem);
  color: var(--dr-cream);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
}

.dr-hero-script {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  color: var(--dr-gold);
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.dr-hero-subtitle {
  font-family: 'EB Garamond', serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--dr-orchid);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-style: italic;
}
```

### Floral Divider

```css
.dr-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 4rem auto;
  max-width: 500px;
}

.dr-divider::before,
.dr-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    var(--dr-mauve),
    transparent
  );
}

.dr-divider-ornament {
  color: var(--dr-gold);
  font-size: 1.2rem;
  opacity: 0.6;
  line-height: 1;
}

/* Alternate: purely CSS ornamental divider */
.dr-ornamental-rule {
  border: none;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--dr-mauve) 15%,
    var(--dr-gold) 40%,
    var(--dr-garnet) 50%,
    var(--dr-gold) 60%,
    var(--dr-mauve) 85%,
    transparent 100%
  );
  margin: 4rem auto;
  max-width: 600px;
}
```

### Candlelight Glow Effect

```css
/* Applies a warm, flickering candlelight glow to any element */
.dr-candleglow {
  position: relative;
}

.dr-candleglow::after {
  content: '';
  position: absolute;
  top: -20%;
  left: -20%;
  right: -20%;
  bottom: -20%;
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(212, 160, 48, 0.08) 0%,
    rgba(200, 160, 80, 0.03) 30%,
    transparent 60%
  );
  pointer-events: none;
  animation: dr-flicker 4s ease-in-out infinite alternate;
}

@keyframes dr-flicker {
  0%   { opacity: 0.8; }
  25%  { opacity: 1; }
  50%  { opacity: 0.85; }
  75%  { opacity: 0.95; }
  100% { opacity: 0.9; }
}

/* Text glow for headings */
.dr-text-glow {
  text-shadow:
    0 0 10px rgba(200, 160, 80, 0.15),
    0 0 40px rgba(200, 160, 80, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.5);
}
```

### Dark Floral Background Overlay

```css
/* Subtle damask/floral texture overlay */
.dr-floral-overlay {
  position: relative;
}

.dr-floral-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  /* Use a repeating CSS pattern to simulate damask */
  background-image:
    radial-gradient(ellipse at 25% 25%, rgba(90, 26, 74, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 75%, rgba(139, 26, 43, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(200, 160, 80, 0.02) 0%, transparent 40%);
  background-size: 200px 200px, 250px 250px, 180px 180px;
  pointer-events: none;
  opacity: 0.8;
}

/* Velvet texture effect */
.dr-velvet {
  background-image:
    linear-gradient(135deg,
      rgba(26, 19, 24, 0.5) 25%,
      rgba(42, 31, 40, 0.5) 25%,
      rgba(42, 31, 40, 0.5) 50%,
      rgba(26, 19, 24, 0.5) 50%,
      rgba(26, 19, 24, 0.5) 75%,
      rgba(42, 31, 40, 0.5) 75%
    );
  background-size: 4px 4px;
}
```

### Dark Romance Footer

```css
.dr-footer {
  background: var(--dr-midnight);
  border-top: 1px solid var(--dr-mauve);
  padding: 4rem 2rem 2rem;
  text-align: center;
  position: relative;
}

/* Ornamental top border */
.dr-footer::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    var(--dr-gold),
    transparent
  );
}

.dr-footer-brand {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--dr-gold);
  margin-bottom: 1rem;
  letter-spacing: 0.04em;
}

.dr-footer-tagline {
  font-family: 'Great Vibes', cursive;
  font-size: 1.3rem;
  color: var(--dr-rose);
  margin-bottom: 2rem;
  opacity: 0.7;
}

.dr-footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.dr-footer-links a {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--dr-orchid);
  text-decoration: none;
  transition: color 0.3s ease;
}

.dr-footer-links a:hover {
  color: var(--dr-gold);
}

.dr-footer-copy {
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  color: var(--dr-mauve);
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(74, 58, 72, 0.3);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use warm near-blacks** (deep brown-black, midnight plum) rather than pure `#000000` for backgrounds; this keeps the dark palette feeling velvety and inviting rather than stark and digital
- **Do layer subtle textures** (damask patterns, floral overlays, velvet grain) at very low opacity (3-8%) to create tactile depth without overwhelming content
- **Do use gold accents sparingly** for maximum impact -- reserve antique gold for key headings, ornamental borders, and the most important interactive elements
- **Do embrace floral imagery** as a core design element, not just decoration; dark roses, botanical illustrations, and wilting blooms are signature visual vocabulary
- **Do maintain generous white space** (in this case, "dark space") between elements; the abundance of negative dark area makes illuminated content feel more precious
- **Do use vignette effects** on images and hero sections to draw the eye inward and create the enclosed, intimate atmosphere that distinguishes Dark Romance from other dark aesthetics
- **Do pair high-contrast serif headings with refined old-style body text** to maintain the balance between drama and readability that defines the typographic character
- **Do let animations be slow and graceful** -- fade-ins of 0.5-1s, gentle hover transitions, subtle glow pulses -- reflecting the languid, contemplative mood

### Don'ts

- **Don't use pure black (`#000000`)** as a background -- it reads as digital void rather than romantic darkness; always add warm or plum undertones to keep surfaces feeling rich
- **Don't overload with ornamental detail** -- Dark Romance is opulent but not cluttered; every filigree, flourish, and floral accent should earn its place through purpose or emotional resonance
- **Don't use bright, saturated colors** -- all accents should be deep, muted, and jewel-toned; neons, pastels, and high-chroma primaries break the moody atmosphere instantly
- **Don't use sans-serif fonts for primary text** -- the aesthetic demands serif or script typography; sans-serif can appear for very small functional UI labels only if absolutely necessary
- **Don't use sharp, mechanical animations** (bouncing, snapping, sliding) that break the romantic mood; all motion should feel organic, gradual, and atmospheric
- **Don't neglect readability** -- while the aesthetic is dark and moody, body text must maintain sufficient contrast (WCAG AA minimum) against dark backgrounds; `#E8DDD0` on `#1A1318` passes comfortably
- **Don't use flat, textureless surfaces** -- even minimal implementations should include at least subtle gradients or border accents to avoid looking like a generic dark theme with red accents
- **Don't mix too many accent colors simultaneously** -- pick one primary jewel accent (garnet or plum) and one metallic (gold), and use secondary colors sparingly to maintain visual coherence

---

## Related Aesthetics

| Aesthetic | Relationship to Dark Romance |
|-----------|------------------------------|
| **Gothic** | Shares dark palettes and ornate details, but Gothic emphasizes architectural structure and medieval stone, while Dark Romance softens with florals, velvet, and romantic warmth |
| **Dark Academia** | Both favor dark, intellectual atmospheres with antique materials, but Dark Academia leans toward libraries and scholarly pursuits rather than passionate romance |
| **Baroque** | Shares the love of opulence, drama, and chiaroscuro; Baroque is more theatrical and gilded, Dark Romance more intimate and melancholic |
| **Victorian** | The historical period most directly influencing Dark Romance; Victorian design provides the mourning culture, floral language, and decorative sensibilities that Dark Romance romanticizes |
| **Dark Fantasy** | Both inhabit dark, atmospheric worlds, but Dark Fantasy draws from medieval mythology and sorcery rather than romantic passion and floral symbolism |
| **Whimsigothic** | A lighter, more playful cousin mixing gothic darkness with whimsical elements; Dark Romance takes itself more seriously and leans into passionate intensity over charm |
| **Cottagecore (Dark variant)** | Dark Cottagecore shares the botanical and handcrafted elements but with a rural, domestic context; Dark Romance is more opulent and urbane |
| **Romanticism (Art movement)** | The direct art-historical ancestor; Romantic-era painting's emotional intensity, nature worship, and sublime darkness flow directly into the Dark Romance aesthetic |
| **Film Noir** | Both use dramatic lighting and dark atmospheres, but Film Noir is urban, modernist, and monochromatic; Dark Romance is historical, ornate, and richly colored |
| **Pastel Goth** | Inverts the Dark Romance approach by lightening gothic elements with pastels; they share gothic underpinnings but diverge sharply in tonal warmth and saturation |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Romance -- Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap" rel="stylesheet">
  <style>
    /* -- Custom Properties -- */
    :root {
      --dr-midnight: #0D0A0E;  --dr-ebony: #1A1318;
      --dr-twilight: #2A1F28;  --dr-plum-bg: #3A1838;
      --dr-mauve: #4A3A48;     --dr-orchid: #7A6878;
      --dr-ivory: #E8DDD0;     --dr-cream: #F4EDE4;
      --dr-garnet: #8B1A2B;    --dr-burgundy: #6B1028;
      --dr-rose: #C4707A;      --dr-plum: #5A1A4A;
      --dr-gold: #C8A050;      --dr-amber: #D4A030;
      --dr-brass: #8A7A50;
      --dr-bg-primary: var(--dr-midnight);
      --dr-bg-surface: var(--dr-ebony);
      --dr-bg-elevated: var(--dr-twilight);
      --dr-text-primary: var(--dr-ivory);
      --dr-text-bright: var(--dr-cream);
      --dr-accent-primary: var(--dr-garnet);
      --dr-accent-warm: var(--dr-gold);
      --dr-accent-soft: var(--dr-rose);
      --dr-border: var(--dr-mauve);
    }
    /* -- Reset & Base -- */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'EB Garamond', 'Georgia', serif;
      font-size: 1.1rem; line-height: 1.85; letter-spacing: 0.015em;
      color: var(--dr-text-primary); background: var(--dr-bg-primary);
      min-height: 100vh; overflow-x: hidden;
    }
    a { color: var(--dr-accent-warm); text-decoration: none; transition: color 0.3s ease, text-shadow 0.3s ease; }
    a:hover { color: var(--dr-cream); text-shadow: 0 0 12px rgba(200, 160, 80, 0.2); }
    img { max-width: 100%; display: block; }
    /* -- Typography -- */
    h1, h2, h3, h4 {
      font-family: 'Cormorant Garamond', 'Playfair Display', serif;
      font-weight: 600; color: var(--dr-text-bright);
      letter-spacing: 0.04em; line-height: 1.25;
    }
    h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
    h2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); margin-bottom: 1.5rem; }
    h3 { font-size: clamp(1.2rem, 2.5vw, 1.8rem); margin-bottom: 1rem; }
    p { margin-bottom: 1.2rem; }
    /* -- Navigation -- */
    .dr-nav {
      background: linear-gradient(180deg, var(--dr-midnight) 0%, rgba(13, 10, 14, 0.95) 100%);
      border-bottom: 1px solid var(--dr-border);
      position: sticky; top: 0; z-index: 100;
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    }
    .dr-nav-inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between; padding: 0 2rem;
    }
    .dr-nav-brand {
      font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.45rem;
      color: var(--dr-accent-warm); text-decoration: none; padding: 1.2rem 0;
      letter-spacing: 0.04em; transition: text-shadow 0.4s ease;
    }
    .dr-nav-brand:hover { color: var(--dr-accent-warm); text-shadow: 0 0 20px rgba(200, 160, 80, 0.3); }
    .dr-nav-links { display: flex; list-style: none; gap: 0; }
    .dr-nav-links a {
      display: block; font-family: 'Cinzel', serif; font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase; color: var(--dr-orchid);
      text-decoration: none; padding: 1.4rem 1.1rem; position: relative; transition: color 0.4s ease;
    }
    .dr-nav-links a::after {
      content: ''; position: absolute; bottom: 0; left: 50%; width: 0; height: 2px;
      background: var(--dr-accent-primary); transform: translateX(-50%); transition: width 0.4s ease;
    }
    .dr-nav-links a:hover { color: var(--dr-cream); text-shadow: none; }
    .dr-nav-links a:hover::after { width: 60%; }
    /* -- Hero -- */
    .dr-hero {
      position: relative; min-height: 100vh; display: flex;
      align-items: center; justify-content: center; text-align: center;
      overflow: hidden; background: var(--dr-midnight);
    }
    .dr-hero-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 20% 80%, rgba(139, 26, 43, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(90, 26, 74, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(42, 31, 40, 0.8) 0%, var(--dr-midnight) 70%);
    }
    .dr-hero::before {
      content: ''; position: absolute; inset: 0; z-index: 1;
      background: radial-gradient(ellipse at 50% 50%,
        transparent 20%, rgba(13, 10, 14, 0.4) 50%,
        rgba(13, 10, 14, 0.85) 80%, var(--dr-midnight) 100%);
    }
    .dr-hero::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0;
      height: 35%; z-index: 1;
      background: linear-gradient(to top, var(--dr-midnight), transparent);
    }
    .dr-hero-content { position: relative; z-index: 2; max-width: 750px; padding: 2rem; }
    .dr-hero-title {
      font-family: 'Playfair Display', serif; font-weight: 700;
      font-size: clamp(2.8rem, 8vw, 5.5rem); color: var(--dr-cream);
      letter-spacing: 0.02em; line-height: 1.05; margin-bottom: 0.5rem;
      text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
    }
    .dr-hero-script {
      font-family: 'Great Vibes', cursive; font-size: clamp(1.3rem, 3.5vw, 2rem);
      color: var(--dr-accent-warm); margin-bottom: 1.5rem; opacity: 0.85;
    }
    .dr-hero-subtitle {
      font-family: 'EB Garamond', serif; font-size: clamp(1rem, 2vw, 1.25rem);
      color: var(--dr-orchid); line-height: 1.7; margin-bottom: 2.5rem; font-style: italic;
    }
    /* -- Buttons -- */
    .dr-btn {
      display: inline-block; font-family: 'Cinzel', serif; font-weight: 600;
      font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--dr-accent-warm); background: transparent;
      border: 1px solid var(--dr-accent-warm); padding: 0.9rem 2.6rem;
      cursor: pointer; position: relative; overflow: hidden;
      transition: all 0.5s ease; text-decoration: none;
    }
    .dr-btn::before, .dr-btn::after {
      content: ''; position: absolute; width: 10px; height: 10px;
      border: 1px solid var(--dr-accent-warm); transition: all 0.5s ease; opacity: 0.5;
    }
    .dr-btn::before { top: 4px; left: 4px; border-right: none; border-bottom: none; }
    .dr-btn::after { bottom: 4px; right: 4px; border-left: none; border-top: none; }
    .dr-btn:hover {
      background: linear-gradient(135deg, var(--dr-garnet), var(--dr-burgundy));
      color: var(--dr-cream); border-color: var(--dr-garnet); text-shadow: none;
      box-shadow: 0 0 24px rgba(139, 26, 43, 0.25), inset 0 0 20px rgba(0, 0, 0, 0.2);
    }
    .dr-btn:hover::before, .dr-btn:hover::after { width: 14px; height: 14px; border-color: var(--dr-rose); opacity: 1; }
    .dr-btn--ghost { color: var(--dr-orchid); border-color: var(--dr-border); }
    .dr-btn--ghost::before, .dr-btn--ghost::after { border-color: var(--dr-border); }
    .dr-btn--ghost:hover {
      background: var(--dr-twilight); color: var(--dr-ivory);
      border-color: var(--dr-orchid); box-shadow: 0 0 16px rgba(90, 26, 74, 0.15);
    }
    /* -- Dividers -- */
    .dr-divider {
      display: flex; align-items: center; justify-content: center;
      gap: 1.5rem; margin: 5rem auto; max-width: 500px; padding: 0 2rem;
    }
    .dr-divider::before, .dr-divider::after {
      content: ''; flex: 1; height: 1px;
      background: linear-gradient(90deg, transparent, var(--dr-border), transparent);
    }
    .dr-divider-icon { color: var(--dr-accent-warm); font-size: 1.1rem; opacity: 0.5; }
    .dr-ornamental-rule {
      border: none; height: 1px; margin: 5rem auto; max-width: 600px;
      background: linear-gradient(90deg,
        transparent 0%, var(--dr-border) 15%, var(--dr-accent-warm) 40%,
        var(--dr-garnet) 50%, var(--dr-accent-warm) 60%, var(--dr-border) 85%, transparent 100%);
    }
    /* -- Sections -- */
    .dr-section { max-width: 1100px; margin: 0 auto; padding: 5rem 2rem; }
    .dr-section-header { text-align: center; margin-bottom: 3.5rem; }
    .dr-section-header h2 { font-family: 'Cormorant Garamond', serif; font-weight: 600; color: var(--dr-cream); margin-bottom: 0.4rem; }
    .dr-section-header .dr-script-label { font-family: 'Great Vibes', cursive; font-size: 1.3rem; color: var(--dr-accent-warm); opacity: 0.7; }
    .dr-section-header p { font-family: 'EB Garamond', serif; font-style: italic; color: var(--dr-orchid); max-width: 600px; margin: 1rem auto 0; }
    /* -- Cards -- */
    .dr-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .dr-card {
      background: var(--dr-bg-surface); border: 1px solid var(--dr-border);
      border-radius: 2px; padding: 2.5rem 2rem; position: relative;
      overflow: hidden; transition: border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;
    }
    .dr-card::before {
      content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
      background: linear-gradient(90deg, transparent 0%, var(--dr-brass) 15%, var(--dr-accent-warm) 50%, var(--dr-brass) 85%, transparent 100%);
    }
    .dr-card::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse at 50% 0%, rgba(200, 160, 80, 0.04) 0%, transparent 55%);
    }
    .dr-card:hover {
      border-color: var(--dr-accent-warm); transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(200, 160, 80, 0.08), 0 12px 40px rgba(0, 0, 0, 0.5);
    }
    .dr-card-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
    .dr-card h3 {
      font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 1.35rem;
      letter-spacing: 0.05em; color: var(--dr-accent-warm); margin-bottom: 0.8rem;
    }
    .dr-card p { font-family: 'EB Garamond', serif; color: var(--dr-ivory); line-height: 1.75; }
    /* -- Quote -- */
    .dr-quote-block { text-align: center; max-width: 700px; margin: 0 auto; padding: 3rem 2rem; position: relative; }
    .dr-quote-block::before {
      content: '\201C'; font-family: 'Playfair Display', serif; font-size: 6rem;
      color: var(--dr-garnet); opacity: 0.25; position: absolute;
      top: -0.5rem; left: 50%; transform: translateX(-50%); line-height: 1;
    }
    .dr-quote-text {
      font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 300;
      font-size: 1.6rem; color: var(--dr-rose); line-height: 1.6;
      margin-bottom: 1.5rem; position: relative; z-index: 1;
    }
    .dr-quote-attribution {
      font-family: 'Cinzel', serif; font-size: 0.7rem;
      letter-spacing: 0.15em; text-transform: uppercase; color: var(--dr-orchid);
    }
    /* -- Featured Image -- */
    .dr-featured-image {
      position: relative; overflow: hidden; border: 1px solid var(--dr-border);
      margin: 3rem auto; max-width: 800px;
    }
    .dr-featured-image::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(13, 10, 14, 0.6) 100%);
    }
    .dr-featured-image::before {
      content: ''; position: absolute; inset: 8px;
      border: 1px solid rgba(200, 160, 80, 0.15); z-index: 2; pointer-events: none;
    }
    /* -- Footer -- */
    .dr-footer {
      background: var(--dr-midnight); border-top: 1px solid var(--dr-border);
      padding: 4rem 2rem 2rem; text-align: center; position: relative;
    }
    .dr-footer::before {
      content: ''; position: absolute; top: -1px; left: 10%; right: 10%; height: 2px;
      background: linear-gradient(90deg, transparent, var(--dr-accent-warm), transparent);
    }
    .dr-footer-brand { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.5rem; color: var(--dr-accent-warm); margin-bottom: 0.5rem; }
    .dr-footer-tagline { font-family: 'Great Vibes', cursive; font-size: 1.2rem; color: var(--dr-rose); margin-bottom: 2rem; opacity: 0.65; }
    .dr-footer-links { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .dr-footer-links a { font-family: 'Cinzel', serif; font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dr-orchid); transition: color 0.3s ease; }
    .dr-footer-links a:hover { color: var(--dr-accent-warm); text-shadow: none; }
    .dr-footer-copy { font-family: 'EB Garamond', serif; font-size: 0.85rem; color: var(--dr-mauve); margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(74, 58, 72, 0.3); }
    /* -- Animation -- */
    @keyframes dr-flicker { 0% { opacity: 0.8; } 50% { opacity: 0.85; } 100% { opacity: 1; } }
    .dr-candleglow { animation: dr-flicker 4s ease-in-out infinite alternate; }
    /* -- Responsive -- */
    @media (max-width: 768px) {
      .dr-nav-inner { flex-direction: column; padding: 0.5rem 1rem; }
      .dr-nav-brand { padding: 0.8rem 0 0.4rem; }
      .dr-nav-links { flex-wrap: wrap; justify-content: center; padding-bottom: 0.5rem; }
      .dr-nav-links a { padding: 0.6rem 0.8rem; font-size: 0.6rem; }
      .dr-hero-title { font-size: clamp(2rem, 10vw, 3.5rem); }
      .dr-card-grid { grid-template-columns: 1fr; }
      .dr-section { padding: 3rem 1.2rem; }
      .dr-footer-links { flex-direction: column; gap: 1rem; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="dr-nav">
    <div class="dr-nav-inner">
      <a href="#" class="dr-nav-brand">Thornfield</a>
      <ul class="dr-nav-links">
        <li><a href="#story">Story</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#journal">Journal</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero -->
  <section class="dr-hero" id="hero">
    <div class="dr-hero-bg"></div>
    <div class="dr-hero-content">
      <h1 class="dr-hero-title">Dark Romance</h1>
      <p class="dr-hero-script">where shadow meets desire</p>
      <p class="dr-hero-subtitle">
        An aesthetic of gothic romanticism, moody florals, jewel-toned opulence,
        and the warm glow of candlelight on velvet and gold.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#collection" class="dr-btn">Explore Collection</a>
        <a href="#story" class="dr-btn dr-btn--ghost">Read the Story</a>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="dr-divider"><span class="dr-divider-icon">&#10087;</span></div>

  <!-- Story / About -->
  <section class="dr-section" id="story">
    <div class="dr-section-header">
      <span class="dr-script-label">A tale of beauty and shadow</span>
      <h2>Our Story</h2>
      <p>
        Born from the intersection of Gothic grandeur and romantic passion,
        our work celebrates the beauty found in darkness -- the bloom that
        thrives in shadow, the warmth that endures the cold.
      </p>
    </div>
    <div style="max-width: 700px; margin: 0 auto; text-align: center;">
      <p>
        We draw inspiration from candlelit parlors filled with overblown roses,
        from rain against leaded glass, from love letters sealed with garnet wax.
        Every piece in our collection carries the weight of romantic history and
        the warmth of firelight on dark velvet.
      </p>
      <p>
        In a world of bright, sterile minimalism, we choose the richness of shadow.
        We believe that beauty is most powerful when it emerges from darkness --
        like gold filigree catching candlelight, or a deep red rose blooming
        against a midnight sky.
      </p>
    </div>
  </section>

  <hr class="dr-ornamental-rule">

  <!-- Quote -->
  <section class="dr-section">
    <div class="dr-quote-block">
      <p class="dr-quote-text">
        She had the kind of beauty that belonged to another century --
        the sort that painters once captured by candlelight and poets
        described in verses stained with red ink.
      </p>
      <p class="dr-quote-attribution">-- A Fragment of Correspondence</p>
    </div>
  </section>

  <div class="dr-divider"><span class="dr-divider-icon">&#10087;</span></div>

  <!-- Collection / Cards -->
  <section class="dr-section" id="collection">
    <div class="dr-section-header">
      <span class="dr-script-label">Curated with devotion</span>
      <h2>The Collection</h2>
      <p>
        Each piece embodies the tension between light and dark, passion and
        restraint, opulence and intimacy that defines the Dark Romance aesthetic.
      </p>
    </div>
    <div class="dr-card-grid">
      <div class="dr-card">
        <span class="dr-card-icon">&#127801;</span>
        <h3>Midnight Florals</h3>
        <p>
          Overblown roses and trailing wisteria rendered in deep burgundy and
          plum, arranged against velvet darkness. Each bloom carries the weight
          of passion and the beauty of impermanence.
        </p>
      </div>
      <div class="dr-card">
        <span class="dr-card-icon">&#128367;</span>
        <h3>Candlelit Atmospheres</h3>
        <p>
          The warm amber glow of beeswax candles illuminates ornate gold
          frames and aged parchment. Light becomes precious -- each flame
          a small rebellion against the encroaching dark.
        </p>
      </div>
      <div class="dr-card">
        <span class="dr-card-icon">&#128141;</span>
        <h3>Jewel-Tone Opulence</h3>
        <p>
          Deep garnets, rich amethysts, and midnight sapphires form a palette
          of precious intensity. These are the colors of velvet gowns, stained
          glass, and the hearts of dark roses.
        </p>
      </div>
      <div class="dr-card">
        <span class="dr-card-icon">&#9884;</span>
        <h3>Ornate Gilding</h3>
        <p>
          Antique gold filigree, tarnished brass flourishes, and delicate
          metalwork border every surface. The gilding speaks of old-world
          craftsmanship and enduring elegance.
        </p>
      </div>
      <div class="dr-card">
        <span class="dr-card-icon">&#128220;</span>
        <h3>Aged Parchment</h3>
        <p>
          Handwritten letters on cream-toned paper, leather-bound volumes
          with foxed pages, and ink that has faded to sepia. The written word
          as artifact, carrying the romance of correspondence.
        </p>
      </div>
      <div class="dr-card">
        <span class="dr-card-icon">&#127748;</span>
        <h3>Gothic Silhouettes</h3>
        <p>
          Cathedral spires against stormy skies, wrought-iron gates framing
          overgrown gardens, arched windows streaming with rain. Architecture
          as the stage for romantic narrative.
        </p>
      </div>
    </div>
  </section>

  <hr class="dr-ornamental-rule">

  <!-- Gallery -->
  <section class="dr-section" id="gallery">
    <div class="dr-section-header">
      <span class="dr-script-label">Captured in shadow</span>
      <h2>The Gallery</h2>
      <p>Images steeped in chiaroscuro lighting, where warm candlelight meets the cool embrace of shadow.</p>
    </div>
    <div class="dr-featured-image">
      <div style="aspect-ratio: 16/9; background: radial-gradient(ellipse at 30% 60%, rgba(139,26,43,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(200,160,80,0.1) 0%, transparent 50%), linear-gradient(135deg, var(--dr-ebony), var(--dr-twilight), var(--dr-ebony)); display: flex; align-items: center; justify-content: center;">
        <span style="font-family: 'Great Vibes', cursive; font-size: clamp(1.5rem, 4vw, 2.5rem); color: var(--dr-accent-warm); opacity: 0.4;">Dark floral imagery here</span>
      </div>
    </div>
  </section>

  <div class="dr-divider"><span class="dr-divider-icon">&#10087;</span></div>

  <!-- Journal -->
  <section class="dr-section" id="journal">
    <div class="dr-section-header">
      <span class="dr-script-label">Pages from the journal</span>
      <h2>Latest Entries</h2>
    </div>
    <div class="dr-card-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      <div class="dr-card">
        <p style="font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dr-orchid); margin-bottom: 0.8rem;">December 2025</p>
        <h3>The Language of Dark Flowers</h3>
        <p>In Victorian floriography, each bloom carried a secret message. The dark rose whispered of unconscious beauty, while the black dahlia spoke of betrayal and warning.</p>
      </div>
      <div class="dr-card">
        <p style="font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dr-orchid); margin-bottom: 0.8rem;">November 2025</p>
        <h3>Chiaroscuro in Digital Spaces</h3>
        <p>How the dramatic lighting techniques of Caravaggio and Rembrandt translate into modern web design through gradients, shadows, and strategic luminance.</p>
      </div>
      <div class="dr-card">
        <p style="font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dr-orchid); margin-bottom: 0.8rem;">October 2025</p>
        <h3>Velvet and Code</h3>
        <p>Recreating the tactile richness of crushed velvet, aged lace, and brocade through CSS textures, gradients, and layered background patterns.</p>
      </div>
    </div>
  </section>

  <!-- Contact CTA -->
  <hr class="dr-ornamental-rule">
  <section class="dr-section" id="contact" style="text-align: center;">
    <div class="dr-section-header">
      <span class="dr-script-label">Correspondence welcome</span>
      <h2>Write to Us</h2>
      <p>We cherish every letter. Reach out to discuss commissions, collaborations, or simply to share your love for the dark and the beautiful.</p>
    </div>
    <div style="margin-top: 2rem;">
      <a href="#" class="dr-btn">Send a Letter</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="dr-footer">
    <div class="dr-footer-brand">Thornfield</div>
    <p class="dr-footer-tagline">where shadow meets desire</p>
    <div class="dr-footer-links">
      <a href="#story">Story</a>
      <a href="#collection">Collection</a>
      <a href="#gallery">Gallery</a>
      <a href="#journal">Journal</a>
      <a href="#contact">Contact</a>
    </div>
    <p class="dr-footer-copy">&copy; 2026 Thornfield &middot; Crafted with passion in the candlelight</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the color foundation**: Set up CSS custom properties for all Dark Romance colors first; this ensures consistent theming across every component and makes it trivial to adjust tones during development
- **Test gold accents at multiple sizes**: Antique gold (`#C8A050`) reads differently at 12px body text versus 48px display headings; verify that the color maintains warmth and legibility at every scale used in your design
- **Layer backgrounds for texture depth**: Combine a solid dark base with 2-3 subtle radial gradients at very low opacity (3-6%) to simulate the richness of damask or floral wallpaper without requiring image assets
- **Use `backdrop-filter: blur()` for depth**: Applying a subtle blur (8-12px) behind navigation bars and modal overlays creates a frosted-glass effect that reinforces the layered, atmospheric quality of the aesthetic
- **Pair vignette overlays with `pointer-events: none`**: Decorative overlays (vignettes, glow effects, texture layers) should always disable pointer events so they never interfere with interactive elements beneath them
- **Verify WCAG contrast ratios**: The Dark Romance palette is designed with accessibility in mind -- Antique Ivory (`#E8DDD0`) on Ebony Rose (`#1A1318`) achieves a contrast ratio of approximately 11.5:1, well above the WCAG AA minimum of 4.5:1, but always test your specific color combinations
- **Keep animation durations above 0.4s**: The languid, romantic mood demands slower transitions; quick 0.15-0.2s durations feel jarring against the aesthetic's contemplative character
- **Use `clamp()` for responsive typography**: The Dark Romance display headings need to be dramatic at desktop sizes but must scale gracefully; `clamp()` provides fluid scaling without breakpoint jumps that would feel abrupt
