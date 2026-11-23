# Post Digital Design Reference

## Overview

Post Digital is a hybrid physical/digital design aesthetic that occupies the tension-filled space between analog materiality and digital computation. Emerging in the late 2000s and gaining traction through the 2010s, it represents a critical response to the seamless, polished perfection of mainstream digital design -- deliberately reintroducing the artifacts, errors, and tactile qualities of physical media into screen-based work. Where modernist digital design sought to eliminate noise, Post Digital treats glitched print, misregistered color layers, halftone rasterization, scan artifacts, and compression errors as expressive design vocabulary. The movement draws heavily from risograph printing, photocopier degradation, screen-printing misalignment, and the deliberate corruption of digital files -- a philosophy rooted in the belief that imperfection signals authenticity in an era of algorithmic smoothness.

The term "post-digital" itself, as theorized by artists and critics such as Florian Cramer and Kim Cascone, does not mean "after digital" but rather describes a condition where digital technology is so pervasive that designers and artists become more interested in what happens at its boundaries -- where pixels bleed onto paper, where JPEG compression meets ink on cardstock, where a riso drum slightly misfeeds. Post Digital design is fundamentally concerned with the "phygital" -- physical/digital constructs that inhabit both material and computational spaces simultaneously. This manifests in web design as interfaces that simulate the tactile imperfections of analog printing: visible halftone dots, deliberate color separation misalignment, paper textures overlaid on screen elements, scan-line distortion, and the grainy, slightly-off registration of multi-pass print processes.

Unlike pure Glitch Art, which often celebrates catastrophic digital failure, Post Digital maintains a careful balance -- the design is intentionally imperfect but still structured and readable. It borrows the stripped-back minimalism and geometric clarity of modernist design while layering on the warm, human errors of analog reproduction. The color palette tends toward the muted, semi-transparent ink tones of risograph and screen-printing, with deliberate overprinting creating unexpected secondary hues where colors overlap. Typography favors clean geometric or grotesque sans-serifs -- not distressed or hand-drawn, but rendered imperfectly, as if a sharp digital typeface was printed on a slightly miscalibrated machine. The result is a design language that feels both contemporary and material, digital and handmade, precise and beautifully broken.

---

## Visual Characteristics

### Core Design Traits

- **Risograph-style color separation** -- designs appear to be printed in distinct spot-color layers with visible misregistration between passes, creating slight offsets where colors do not perfectly align
- **Halftone rasterization** -- images and gradients are rendered as visible dot patterns that simulate the physical rasterization of risograph or offset printing, with adjustable frequency and angle
- **Digital glitch artifacts on analog surfaces** -- JPEG compression blocks, datamoshing streaks, and pixel fragmentation are applied to elements that otherwise appear printed or physical
- **Paper and substrate textures** -- backgrounds and cards carry visible paper grain, fiber texture, and the slight off-white warmth of uncoated stock, grounding digital elements in physical materiality
- **Overprint color mixing** -- semi-transparent ink layers overlap to create unexpected secondary colors, mimicking the behavior of translucent risograph or screen-print inks
- **Scan and photocopy degradation** -- elements appear to have been scanned, photocopied, or faxed, introducing slight blur, contrast shifts, toner speckle, and edge softening
- **Misregistration and offset** -- deliberate 1-4px misalignment between color channels or design layers, as if the print drum shifted between passes
- **Noise and grain overlays** -- subtle-to-moderate film grain, scanner noise, or dithering patterns that break up clean digital gradients into tactile surfaces
- **Geometric minimalism under imperfection** -- underlying compositions use clean grids, circles, and rectangles, but every element carries some analog degradation
- **Visible process marks** -- crop marks, registration targets, color bars, and printer's marks are used as decorative elements that reference the physical production process
- **Compression and encoding artifacts** -- JPEG blocking, color banding, and posterization used intentionally to reveal the mechanics of digital image encoding

### Design Principles

- **Tension between precision and error** -- every layout should feel like a perfectly structured digital composition that has been run through an imperfect physical reproduction process
- **Materiality over virtuality** -- designs should evoke the tactile reality of printed matter even when rendered entirely on screen; the viewer should almost feel the paper grain
- **Process transparency** -- make the means of production visible; crop marks, halftone dots, misregistration, and print artifacts celebrate rather than hide the reproductive process
- **Controlled imperfection** -- unlike pure glitch or grunge, Post Digital errors are carefully calibrated; the design remains legible and structured while carrying analog warmth
- **Chromatic restraint with overprint richness** -- use a limited spot-color palette (2-4 primary inks) but generate visual richness through overlapping transparent layers
- **Digital-analog feedback loop** -- the most authentic Post Digital work involves cycling between physical and digital processes: print, scan, edit, reprint, rescan
- **Reduction to essentials** -- strip away decorative excess and let the interplay between clean structure and material imperfection carry the design's visual interest
- **Authenticity through artifact** -- in an era of AI-generated perfection, analog imperfection communicates human presence and material truth

---

## Color Palette

Post Digital palettes draw from the semi-transparent spot-color inks used in risograph and screen-printing. Colors are typically limited to 2-4 primary inks, with overprinting creating rich secondary tones. The palette favors muted, slightly desaturated tones that suggest ink absorbed into uncoated paper stock rather than the vivid saturation of backlit screens.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Riso Blue | `#0078BF` | Primary cool ink, headings, key interactive elements |
| Riso Red | `#E55A5A` | Primary warm ink, accents, error states, emphasis |
| Riso Yellow | `#F5C542` | Tertiary ink layer, highlights, badges, overprint mixing |
| Fluorescent Pink | `#FF6B8A` | Vibrant accent ink, call-to-action, decorative overprint |
| Overprint Purple | `#6B4C8A` | Blue + Red overprint result, secondary headings, tags |
| Overprint Green | `#5A8A6B` | Blue + Yellow overprint result, success states, accents |
| Overprint Brown | `#A0724A` | Red + Yellow overprint result, warm mid-tones, borders |
| Uncoated White | `#F2EDE4` | Paper stock base, primary background, card surfaces |
| Newsprint Gray | `#D8D0C4` | Secondary background, subtle section differentiation |
| Ink Black | `#1A1A1A` | Body text, key-line elements, high-contrast details |
| Carbon Gray | `#3D3A38` | Secondary text, code blocks, structural borders |
| Toner Gray | `#7A7570` | Captions, metadata, muted interface chrome |
| Scanner White | `#FAFAF7` | High-emphasis backgrounds, modal overlays |
| Drum Shift Cyan | `#4AC4D6` | Misregistration accent, alternate cool tone, links |
| Bleed Magenta | `#C44B7A` | Registration bleed accent, decorative offset elements |

### CSS Custom Properties

```css
:root {
  /* Primary spot-color inks */
  --pd-blue: #0078bf;
  --pd-red: #e55a5a;
  --pd-yellow: #f5c542;
  --pd-pink: #ff6b8a;

  /* Overprint results */
  --pd-purple: #6b4c8a;
  --pd-green: #5a8a6b;
  --pd-brown: #a0724a;

  /* Paper and substrate */
  --pd-paper: #f2ede4;
  --pd-newsprint: #d8d0c4;
  --pd-scanner-white: #fafaf7;

  /* Ink darks */
  --pd-black: #1a1a1a;
  --pd-carbon: #3d3a38;
  --pd-toner: #7a7570;

  /* Misregistration accents */
  --pd-cyan: #4ac4d6;
  --pd-magenta: #c44b7a;

  /* Functional mappings */
  --pd-bg: var(--pd-paper);
  --pd-text: var(--pd-black);
  --pd-text-muted: var(--pd-toner);
  --pd-link: var(--pd-blue);
  --pd-link-hover: var(--pd-cyan);
  --pd-accent: var(--pd-red);
  --pd-accent-secondary: var(--pd-pink);
  --pd-border: var(--pd-newsprint);
  --pd-surface: var(--pd-scanner-white);
}
```

---

## Typography

Post Digital typography pairs the geometric precision of modernist sans-serifs with the material imperfection of analog reproduction. The typefaces themselves are clean and contemporary -- the "analog" quality comes not from distressed letterforms but from how those clean letters are rendered: with slight misregistration, halftone rasterization, overprint transparency, or scan degradation applied on top. Monospaced faces appear frequently, referencing digital code, printer output, and the mechanical uniformity of typewriter text.

### Recommended Google Fonts

| Font Name | Style | Weight(s) | Usage |
|-----------|-------|-----------|-------|
| Space Grotesk | Geometric sans | 300, 400, 500, 700 | Primary headings, hero text |
| Inter | Neo-grotesque sans | 400, 500, 600 | Body text, UI labels, navigation |
| JetBrains Mono | Monospace | 400, 500, 700 | Code blocks, metadata, captions, process marks |
| DM Sans | Geometric sans | 400, 500, 700 | Alternative heading face, button labels |
| IBM Plex Mono | Monospace | 400, 500 | Secondary mono, registration marks, technical labels |

### Font Pairing Recommendations

| Pairing | Heading Font | Body Font | Best For |
|---------|-------------|-----------|----------|
| Precision + Process | Space Grotesk 700 | JetBrains Mono 400 | Editorial layouts, technical portfolios |
| Clean + Material | Space Grotesk 500 | Inter 400 | Marketing pages, agency sites |
| Code + Craft | JetBrains Mono 700 | Inter 400 | Developer tools, creative coding projects |
| Industrial + Readable | DM Sans 700 | Inter 400 | Product pages, e-commerce with post-digital flair |
| Systematic | IBM Plex Mono 500 | JetBrains Mono 400 | Data visualization, generative art documentation |

### CSS Typography Example

```css
/* Post Digital typography system */
body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--pd-black);
  font-feature-settings: 'liga' 1, 'kern' 1;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--pd-black);
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  /* Misregistration effect on headings */
  text-shadow:
    2px 1px 0 rgba(0, 120, 191, 0.2),
    -1px -1px 0 rgba(229, 90, 90, 0.15);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  text-shadow:
    1px 1px 0 rgba(0, 120, 191, 0.12),
    -1px 0 0 rgba(229, 90, 90, 0.08);
}

h3 {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 500;
  letter-spacing: 0;
}

/* Monospace for process and metadata */
code, pre, .pd-mono {
  font-family: 'JetBrains Mono', 'IBM Plex Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  letter-spacing: -0.01em;
}

/* Small caps for labels and section markers */
.pd-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pd-toner);
}
```

---

## Layout Principles

- **Grid with controlled drift** -- establish a clean baseline grid (8px or 12-column) but allow select elements to break alignment by 1-4px, simulating print misregistration without abandoning structure
- **Layered color separations** -- arrange design layers as if each color were a separate print pass; position elements with slight offsets between the "plates" to create visible misalignment
- **Generous white space on textured ground** -- use ample margins and padding, but never on pure white; backgrounds should always carry paper texture, grain, or subtle noise
- **Asymmetric but balanced compositions** -- avoid perfect symmetry; shift content blocks slightly off-center and vary column widths to evoke the organic irregularity of physical print
- **Overprint zones** -- create areas where two color layers deliberately overlap, generating rich secondary tones and calling attention to the layered nature of the design
- **Visible crop marks and bleed** -- extend color fills beyond their containers by 2-4px and include decorative crop marks, registration targets, and color swatches at layout edges
- **Modular card-based structure** -- organize content in discrete blocks that reference printed cards, inserts, or separate sheets laid out on a surface
- **Mixed scale typography** -- combine very large display type with very small technical labels (registration info, color codes, coordinates) to create dynamic scale contrast
- **Edge-to-edge texture, contained content** -- paper grain and noise overlays span the full viewport while readable content stays within a comfortable 680-900px measure
- **Halftone image treatment** -- photographs and illustrations are processed with visible halftone dots or dithering rather than smooth continuous tone
- **Print-inspired section breaks** -- separate content areas with crop marks, fold lines, color bars, or registration targets rather than simple horizontal rules

---

## CSS / Design Techniques

### Card Component

```css
/* Post Digital card -- printed card on paper surface */
.pd-card {
  background: var(--pd-scanner-white);
  border: 1px solid var(--pd-newsprint);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Halftone texture overlay */
.pd-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(26, 26, 26, 0.08) 0.6px,
    transparent 0.6px
  );
  background-size: 4px 4px;
  pointer-events: none;
  opacity: 0.5;
  mix-blend-mode: multiply;
}

/* Misregistered color accent bar */
.pd-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--pd-blue);
  /* Misregistration: red layer offset by 2px */
  box-shadow: 2px 1px 0 var(--pd-red);
}

.pd-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 4px 12px rgba(26, 26, 26, 0.08),
    0 1px 3px rgba(26, 26, 26, 0.05);
}

/* Card title */
.pd-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--pd-black);
  margin-bottom: 0.5rem;
  text-shadow: 1px 0 0 rgba(0, 120, 191, 0.1);
}

/* Card body text */
.pd-card p {
  font-family: 'Inter', sans-serif;
  color: var(--pd-carbon);
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Card metadata in mono */
.pd-card__meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--pd-toner);
  letter-spacing: 0.02em;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--pd-newsprint);
}
```

### Button Component

```css
/* Post Digital button -- clean form with analog registration artifacts */
.pd-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: var(--pd-scanner-white);
  background: var(--pd-blue);
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.15s ease;
}

/* Misregistered shadow layer (simulates offset ink pass) */
.pd-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--pd-red);
  transform: translate(2px, 1px);
  z-index: -1;
  transition: transform 0.15s ease;
}

.pd-btn:hover {
  background: var(--pd-cyan);
}

.pd-btn:hover::before {
  transform: translate(3px, 2px);
}

.pd-btn:active {
  transform: translate(1px, 1px);
}

.pd-btn:active::before {
  transform: translate(1px, 0px);
}

/* Ghost variant -- outlined with overprint hover */
.pd-btn--ghost {
  background: transparent;
  color: var(--pd-blue);
  border: 1.5px solid var(--pd-blue);
}

.pd-btn--ghost::before {
  background: transparent;
  border: 1.5px solid var(--pd-red);
}

.pd-btn--ghost:hover {
  background: rgba(0, 120, 191, 0.06);
  color: var(--pd-blue);
}

/* Overprint variant -- layered color effect */
.pd-btn--overprint {
  background: var(--pd-red);
  mix-blend-mode: multiply;
}

.pd-btn--overprint::before {
  background: var(--pd-blue);
  mix-blend-mode: multiply;
}

.pd-btn--overprint:hover {
  background: var(--pd-pink);
}
```

### Navigation Bar

```css
/* Post Digital navigation -- clean structure with registration marks */
.pd-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--pd-paper);
  border-bottom: 1px solid var(--pd-newsprint);
  position: relative;
}

/* Registration mark in top-left corner */
.pd-nav::before {
  content: '\2316';  /* registration target character */
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.6rem;
  color: var(--pd-toner);
  opacity: 0.4;
}

/* Color calibration bar along bottom edge */
.pd-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    var(--pd-blue) 0%,
    var(--pd-blue) 25%,
    var(--pd-red) 25%,
    var(--pd-red) 50%,
    var(--pd-yellow) 50%,
    var(--pd-yellow) 75%,
    var(--pd-black) 75%,
    var(--pd-black) 100%
  );
  opacity: 0.6;
}

.pd-nav__brand {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--pd-black);
  text-decoration: none;
  letter-spacing: -0.02em;
  /* Subtle misregistration on brand */
  text-shadow:
    1px 0 0 rgba(0, 120, 191, 0.15),
    -1px 0 0 rgba(229, 90, 90, 0.12);
}

.pd-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pd-nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--pd-carbon);
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 0.25rem 0;
  position: relative;
  transition: color 0.15s ease;
}

.pd-nav__link:hover {
  color: var(--pd-blue);
}

/* Active link with overprint underline */
.pd-nav__link--active {
  color: var(--pd-blue);
}

.pd-nav__link--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--pd-blue);
  box-shadow: 1px 1px 0 var(--pd-red);
}
```

### Hero Section

```css
/* Post Digital hero -- layered print passes with misregistration */
.pd-hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 2rem;
  background: var(--pd-paper);
  overflow: hidden;
}

/* Paper grain texture */
.pd-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  background-size: 512px 512px;
  pointer-events: none;
  mix-blend-mode: multiply;
}

/* Halftone dot pattern overlay */
.pd-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(0, 120, 191, 0.04) 1px,
    transparent 1px
  );
  background-size: 6px 6px;
  pointer-events: none;
}

.pd-hero__content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.pd-hero__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--pd-toner);
  margin-bottom: 1.5rem;
}

/* Registration mark before label */
.pd-hero__label::before {
  content: '\25C9  ';
  color: var(--pd-red);
  opacity: 0.6;
}

.pd-hero__title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  color: var(--pd-black);
  margin-bottom: 2rem;
  /* Three-color misregistration */
  text-shadow:
    3px 2px 0 rgba(0, 120, 191, 0.18),
    -2px -1px 0 rgba(229, 90, 90, 0.14),
    1px -1px 0 rgba(245, 197, 66, 0.1);
}

.pd-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--pd-carbon);
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* Decorative crop marks in hero corners */
.pd-hero__crop {
  position: absolute;
  width: 24px;
  height: 24px;
  opacity: 0.25;
}

.pd-hero__crop::before,
.pd-hero__crop::after {
  content: '';
  position: absolute;
  background: var(--pd-black);
}

.pd-hero__crop::before {
  width: 1px;
  height: 100%;
  left: 50%;
}

.pd-hero__crop::after {
  width: 100%;
  height: 1px;
  top: 50%;
}

.pd-hero__crop--tl { top: 2rem; left: 2rem; }
.pd-hero__crop--tr { top: 2rem; right: 2rem; }
.pd-hero__crop--bl { bottom: 2rem; left: 2rem; }
.pd-hero__crop--br { bottom: 2rem; right: 2rem; }
```

### Misregistration Text Effect

```css
/* Color-separated misregistration effect for display text */
.pd-misreg {
  position: relative;
  color: var(--pd-black);
}

/* Cyan plate offset */
.pd-misreg::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 2px;
  color: var(--pd-blue);
  opacity: 0.25;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: -1;
}

/* Red plate offset */
.pd-misreg::after {
  content: attr(data-text);
  position: absolute;
  top: 1px;
  left: -1px;
  color: var(--pd-red);
  opacity: 0.2;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: -1;
}

/* Animated registration drift on hover */
.pd-misreg:hover::before {
  animation: pd-drift-cyan 2s ease-in-out infinite alternate;
}

.pd-misreg:hover::after {
  animation: pd-drift-red 2.5s ease-in-out infinite alternate;
}

@keyframes pd-drift-cyan {
  0% { transform: translate(2px, 0); }
  100% { transform: translate(3px, 1px); }
}

@keyframes pd-drift-red {
  0% { transform: translate(-1px, 1px); }
  100% { transform: translate(-2px, -1px); }
}
```

### Halftone Image Treatment

```css
/* Halftone dot pattern applied over images */
.pd-halftone {
  position: relative;
  overflow: hidden;
  line-height: 0;
}

.pd-halftone img {
  width: 100%;
  height: auto;
  filter: grayscale(0.3) contrast(1.1);
}

/* Halftone dot grid overlay */
.pd-halftone::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(26, 26, 26, 0.35) 1.2px,
    transparent 1.2px
  );
  background-size: 5px 5px;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 1;
}

/* Color tint overlay (simulates single-ink riso print) */
.pd-halftone::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--pd-blue);
  mix-blend-mode: color;
  opacity: 0.15;
  pointer-events: none;
  z-index: 2;
}

/* Red channel variant */
.pd-halftone--red::after {
  background: var(--pd-red);
}

/* Yellow channel variant */
.pd-halftone--yellow::after {
  background: var(--pd-yellow);
}

/* Duotone: two overlapping color passes */
.pd-halftone--duotone {
  background: var(--pd-blue);
}

.pd-halftone--duotone img {
  filter: grayscale(1) contrast(1.2);
  mix-blend-mode: multiply;
}

.pd-halftone--duotone::after {
  background: linear-gradient(
    135deg,
    rgba(229, 90, 90, 0.4) 0%,
    transparent 60%
  );
  mix-blend-mode: screen;
}
```

### Overprint Section Divider

```css
/* Color bar divider mimicking printer calibration strips */
.pd-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 0;
  position: relative;
}

.pd-divider::before {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--pd-newsprint);
}

.pd-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--pd-newsprint);
}

/* Center color calibration block */
.pd-divider__marks {
  display: flex;
  gap: 3px;
}

.pd-divider__mark {
  width: 12px;
  height: 12px;
  display: block;
}

.pd-divider__mark:nth-child(1) { background: var(--pd-blue); }
.pd-divider__mark:nth-child(2) { background: var(--pd-red); }
.pd-divider__mark:nth-child(3) { background: var(--pd-yellow); }
.pd-divider__mark:nth-child(4) { background: var(--pd-black); }

/* Registration target divider */
.pd-divider--target {
  justify-content: center;
}

.pd-divider--target::before,
.pd-divider--target::after {
  max-width: 40%;
}
```

### Glitch Scan Effect

```css
/* Scan-line glitch effect for sections or images */
.pd-glitch-scan {
  position: relative;
  overflow: hidden;
}

/* Horizontal scan lines */
.pd-glitch-scan::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 2px,
    rgba(26, 26, 26, 0.03) 2px,
    rgba(26, 26, 26, 0.03) 4px
  );
  pointer-events: none;
  z-index: 3;
}

/* Random glitch displacement band */
.pd-glitch-scan::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 42%;
  height: 6px;
  background: var(--pd-paper);
  transform: translateX(4px);
  mix-blend-mode: difference;
  opacity: 0.15;
  pointer-events: none;
  z-index: 4;
}

/* Animated glitch on hover */
.pd-glitch-scan:hover::after {
  animation: pd-scanglitch 0.3s steps(4) infinite;
}

@keyframes pd-scanglitch {
  0% { top: 42%; transform: translateX(4px); height: 6px; }
  25% { top: 18%; transform: translateX(-3px); height: 4px; }
  50% { top: 67%; transform: translateX(6px); height: 8px; }
  75% { top: 31%; transform: translateX(-2px); height: 3px; }
  100% { top: 55%; transform: translateX(5px); height: 5px; }
}
```

---

## Design Do's and Don'ts

### Do's

- **Do layer semi-transparent color passes** -- use `mix-blend-mode: multiply` on overlapping elements to create authentic overprint effects that generate secondary colors
- **Do include process artifacts as decoration** -- crop marks, registration targets, color calibration bars, and halftone swatches add authenticity and visual interest
- **Do keep underlying structure clean** -- Post Digital is imperfection applied to order, not chaos; maintain a clear grid and hierarchy beneath the analog texture
- **Do use limited spot-color palettes** -- restrict yourself to 2-4 primary ink colors plus their overprint combinations, just as a risograph printer would
- **Do apply misregistration subtly** -- 1-3px of offset between color layers is enough; the effect should be noticeable but not overwhelming
- **Do mix digital and physical textures** -- combine paper grain with pixel artifacts, halftone dots with JPEG compression, scan noise with vector geometry
- **Do maintain strong readability** -- body text should always be crisp and legible; save the heavy effects for display type, decorative elements, and images
- **Do reference the printing process** -- monospaced labels like "CMYK", "300 DPI", "RISO BLUE", or plate numbers reinforce the production-aware aesthetic

### Don'ts

- **Don't make everything glitchy** -- Post Digital is about controlled tension between clean and broken; if everything is distorted, the effect loses meaning
- **Don't use distressed or hand-drawn typefaces** -- the typography should be geometrically clean; imperfection comes from rendering, not from the letterforms themselves
- **Don't over-saturate the palette** -- risograph and screen-print inks on uncoated paper are naturally muted; avoid vivid neon or backlit-screen-level saturation
- **Don't abandon hierarchy for effect** -- decorative misregistration and halftone overlays must not compromise the user's ability to scan and navigate the page
- **Don't simulate only one medium** -- Post Digital is specifically about the hybrid space; purely digital glitch or purely analog texture misses the point
- **Don't apply uniform effects everywhere** -- vary the intensity of grain, misregistration, and halftone across the page; some areas should be nearly clean while others are heavily processed
- **Don't forget about accessibility** -- ensure sufficient color contrast even with overlay effects; test that text remains WCAG 2.1 AA compliant under all textures
- **Don't use heavy drop shadows or gradients** -- Post Digital depth comes from layered flat ink passes, not from simulated 3D lighting

---

## Related Aesthetics

| Aesthetic | Relationship | Key Difference |
|-----------|-------------|----------------|
| Glitch Art | Close sibling | Glitch Art focuses on catastrophic digital failure; Post Digital balances glitch with structured composition |
| Risograph | Core influence | Risograph is a specific printing technique; Post Digital abstracts its qualities into a broader design language |
| Brutalism (Web) | Shares rawness | Brutalism strips design bare for ideology; Post Digital layers analog warmth onto digital structure |
| Vaporwave | Distant cousin | Vaporwave nostalgically remixes 80s/90s digital culture; Post Digital is forward-looking and process-focused |
| Swiss / International | Foundational ancestor | Swiss design provides the clean grid and geometric type that Post Digital then disrupts with analog artifacts |
| Lo-Fi / Anti-Design | Tonal overlap | Anti-Design rejects polish entirely; Post Digital carefully controls the degree of imperfection |
| 90s Grunge | Analog precursor | Grunge is fully analog chaos; Post Digital specifically explores the analog-digital boundary |
| Generative Art | Process kinship | Both celebrate visible process; Generative Art uses algorithms while Post Digital uses reproduction artifacts |
| New Aesthetic | Philosophical sibling | Both examine how digital systems see and represent the physical world, but New Aesthetic is more theoretical |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post Digital -- Hybrid Physical/Digital Aesthetic</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

  <style>
    /* ============================================
       POST DIGITAL -- CSS CUSTOM PROPERTIES
       ============================================ */
    :root {
      /* Primary spot-color inks */
      --pd-blue: #0078bf;
      --pd-red: #e55a5a;
      --pd-yellow: #f5c542;
      --pd-pink: #ff6b8a;

      /* Overprint results */
      --pd-purple: #6b4c8a;
      --pd-green: #5a8a6b;
      --pd-brown: #a0724a;

      /* Paper and substrate */
      --pd-paper: #f2ede4;
      --pd-newsprint: #d8d0c4;
      --pd-scanner-white: #fafaf7;

      /* Ink darks */
      --pd-black: #1a1a1a;
      --pd-carbon: #3d3a38;
      --pd-toner: #7a7570;

      /* Misregistration accents */
      --pd-cyan: #4ac4d6;
      --pd-magenta: #c44b7a;

      /* Functional mappings */
      --pd-bg: var(--pd-paper);
      --pd-text: var(--pd-black);
      --pd-text-muted: var(--pd-toner);
      --pd-link: var(--pd-blue);
      --pd-accent: var(--pd-red);
      --pd-border: var(--pd-newsprint);
      --pd-surface: var(--pd-scanner-white);
    }

    /* ============================================
       RESET & BASE
       ============================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      color: var(--pd-text);
      background: var(--pd-bg);
      -webkit-font-smoothing: antialiased;
      position: relative;
    }

    /* Full-page paper grain texture */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      opacity: 0.035;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: multiply;
    }

    a { color: var(--pd-link); text-decoration: none; }
    a:hover { color: var(--pd-cyan); }

    img { max-width: 100%; height: auto; display: block; }

    /* ============================================
       TYPOGRAPHY
       ============================================ */
    h1, h2, h3, h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    h1 {
      font-size: clamp(3rem, 8vw, 5.5rem);
      text-shadow:
        3px 2px 0 rgba(0, 120, 191, 0.18),
        -2px -1px 0 rgba(229, 90, 90, 0.14);
    }

    h2 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      text-shadow:
        2px 1px 0 rgba(0, 120, 191, 0.12),
        -1px 0 0 rgba(229, 90, 90, 0.08);
    }

    h3 {
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 500;
    }

    .mono {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      letter-spacing: -0.01em;
    }

    .label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--pd-toner);
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--pd-paper);
      border-bottom: 1px solid var(--pd-newsprint);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        var(--pd-blue) 0%, var(--pd-blue) 25%,
        var(--pd-red) 25%, var(--pd-red) 50%,
        var(--pd-yellow) 50%, var(--pd-yellow) 75%,
        var(--pd-black) 75%, var(--pd-black) 100%
      );
      opacity: 0.5;
    }

    .nav__brand {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--pd-black);
      text-decoration: none;
      text-shadow:
        1px 0 0 rgba(0, 120, 191, 0.15),
        -1px 0 0 rgba(229, 90, 90, 0.12);
    }

    .nav__links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav__link {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--pd-carbon);
      text-decoration: none;
      transition: color 0.15s;
      position: relative;
    }

    .nav__link:hover { color: var(--pd-blue); }

    .nav__link--active {
      color: var(--pd-blue);
    }

    .nav__link--active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--pd-blue);
      box-shadow: 1px 1px 0 var(--pd-red);
    }

    /* ============================================
       HERO SECTION
       ============================================ */
    .hero {
      position: relative;
      min-height: 85vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5rem 2rem;
      overflow: hidden;
    }

    /* Halftone dot pattern overlay */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        rgba(0, 120, 191, 0.04) 1px,
        transparent 1px
      );
      background-size: 6px 6px;
      pointer-events: none;
    }

    .hero__content {
      position: relative;
      z-index: 2;
      max-width: 860px;
      margin: 0 auto;
      width: 100%;
    }

    .hero__label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--pd-toner);
      margin-bottom: 1.5rem;
    }

    .hero__label::before {
      content: '\25C9  ';
      color: var(--pd-red);
      opacity: 0.6;
    }

    .hero__title {
      margin-bottom: 1.5rem;
    }

    .hero__subtitle {
      font-size: clamp(1rem, 2vw, 1.2rem);
      color: var(--pd-carbon);
      max-width: 580px;
      margin-bottom: 2.5rem;
      line-height: 1.75;
    }

    /* Crop marks */
    .crop-mark {
      position: absolute;
      width: 20px;
      height: 20px;
      opacity: 0.2;
    }

    .crop-mark::before,
    .crop-mark::after {
      content: '';
      position: absolute;
      background: var(--pd-black);
    }

    .crop-mark::before {
      width: 1px;
      height: 100%;
      left: 50%;
    }

    .crop-mark::after {
      width: 100%;
      height: 1px;
      top: 50%;
    }

    .crop-mark--tl { top: 1.5rem; left: 1.5rem; }
    .crop-mark--tr { top: 1.5rem; right: 1.5rem; }
    .crop-mark--bl { bottom: 1.5rem; left: 1.5rem; }
    .crop-mark--br { bottom: 1.5rem; right: 1.5rem; }

    /* ============================================
       BUTTONS
       ============================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.8rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      text-decoration: none;
      color: var(--pd-scanner-white);
      background: var(--pd-blue);
      border: none;
      cursor: pointer;
      position: relative;
      transition: all 0.15s ease;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--pd-red);
      transform: translate(2px, 1px);
      z-index: -1;
      transition: transform 0.15s ease;
    }

    .btn:hover { background: var(--pd-cyan); color: var(--pd-scanner-white); }
    .btn:hover::before { transform: translate(3px, 2px); }
    .btn:active { transform: translate(1px, 1px); }

    .btn--ghost {
      background: transparent;
      color: var(--pd-blue);
      border: 1.5px solid var(--pd-blue);
    }

    .btn--ghost::before {
      background: transparent;
      border: 1.5px solid var(--pd-red);
    }

    .btn--ghost:hover {
      background: rgba(0, 120, 191, 0.06);
      color: var(--pd-blue);
    }

    /* ============================================
       SECTION DIVIDER
       ============================================ */
    .divider {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 2.5rem 2rem;
      max-width: 960px;
      margin: 0 auto;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--pd-newsprint);
    }

    .divider__marks {
      display: flex;
      gap: 3px;
    }

    .divider__mark {
      width: 10px;
      height: 10px;
      display: block;
    }

    .divider__mark:nth-child(1) { background: var(--pd-blue); }
    .divider__mark:nth-child(2) { background: var(--pd-red); }
    .divider__mark:nth-child(3) { background: var(--pd-yellow); }
    .divider__mark:nth-child(4) { background: var(--pd-black); }

    /* ============================================
       CONTENT SECTIONS
       ============================================ */
    .section {
      max-width: 960px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .section__label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--pd-toner);
      margin-bottom: 0.75rem;
    }

    .section__title {
      margin-bottom: 1.5rem;
    }

    .section__text {
      max-width: 680px;
      color: var(--pd-carbon);
      margin-bottom: 2rem;
    }

    /* ============================================
       CARD GRID
       ============================================ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card {
      background: var(--pd-scanner-white);
      border: 1px solid var(--pd-newsprint);
      padding: 2rem;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        rgba(26, 26, 26, 0.07) 0.5px,
        transparent 0.5px
      );
      background-size: 4px 4px;
      pointer-events: none;
      opacity: 0.4;
      mix-blend-mode: multiply;
    }

    .card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--pd-blue);
      box-shadow: 2px 1px 0 var(--pd-red);
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow:
        0 4px 12px rgba(26, 26, 26, 0.08),
        0 1px 3px rgba(26, 26, 26, 0.05);
    }

    .card__number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: var(--pd-toner);
      letter-spacing: 0.1em;
      margin-bottom: 0.75rem;
    }

    .card h3 {
      font-family: 'Space Grotesk', sans-serif;
      color: var(--pd-black);
      margin-bottom: 0.5rem;
      text-shadow: 1px 0 0 rgba(0, 120, 191, 0.08);
    }

    .card p {
      color: var(--pd-carbon);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .card__tag {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.2rem 0.6rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.05em;
      color: var(--pd-purple);
      border: 1px solid var(--pd-purple);
      opacity: 0.7;
    }

    /* ============================================
       OVERPRINT SHOWCASE
       ============================================ */
    .overprint-demo {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    .overprint-demo__layer {
      position: relative;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--pd-scanner-white);
    }

    .overprint-demo__layer::before {
      content: '';
      position: absolute;
      inset: 8%;
      border-radius: 50%;
      mix-blend-mode: multiply;
    }

    .overprint-demo__layer::after {
      content: '';
      position: absolute;
      inset: 12%;
      border-radius: 50%;
      mix-blend-mode: multiply;
      transform: translate(8px, 6px);
    }

    .overprint-demo__layer:nth-child(1)::before { background: var(--pd-blue); }
    .overprint-demo__layer:nth-child(1)::after { background: var(--pd-red); }

    .overprint-demo__layer:nth-child(2)::before { background: var(--pd-red); }
    .overprint-demo__layer:nth-child(2)::after { background: var(--pd-yellow); }

    .overprint-demo__layer:nth-child(3)::before { background: var(--pd-blue); }
    .overprint-demo__layer:nth-child(3)::after { background: var(--pd-yellow); }

    .overprint-demo__label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: var(--pd-toner);
      text-align: center;
      margin-top: 0.5rem;
      letter-spacing: 0.08em;
    }

    /* ============================================
       MISREGISTRATION TEXT
       ============================================ */
    .misreg {
      position: relative;
      display: inline-block;
    }

    .misreg::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 2px;
      color: var(--pd-blue);
      opacity: 0.25;
      mix-blend-mode: multiply;
      pointer-events: none;
      z-index: -1;
    }

    .misreg::after {
      content: attr(data-text);
      position: absolute;
      top: 1px;
      left: -1px;
      color: var(--pd-red);
      opacity: 0.2;
      mix-blend-mode: multiply;
      pointer-events: none;
      z-index: -1;
    }

    /* ============================================
       PROCESS MARKS FOOTER
       ============================================ */
    .footer {
      padding: 3rem 2rem;
      border-top: 1px solid var(--pd-newsprint);
      text-align: center;
    }

    .footer__process {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: var(--pd-toner);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .footer__calibration {
      display: inline-flex;
      gap: 4px;
      margin: 1rem auto;
    }

    .footer__swatch {
      width: 16px;
      height: 16px;
      display: block;
    }

    .footer__swatch:nth-child(1) { background: var(--pd-blue); }
    .footer__swatch:nth-child(2) { background: var(--pd-red); }
    .footer__swatch:nth-child(3) { background: var(--pd-yellow); }
    .footer__swatch:nth-child(4) { background: var(--pd-black); }
    .footer__swatch:nth-child(5) { background: var(--pd-purple); }
    .footer__swatch:nth-child(6) { background: var(--pd-green); }

    .footer__copy {
      font-size: 0.8rem;
      color: var(--pd-toner);
      margin-top: 1rem;
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav__links { gap: 1rem; flex-wrap: wrap; justify-content: center; }

      .hero { min-height: 70vh; padding: 3rem 1.5rem; }

      .overprint-demo { grid-template-columns: 1fr; max-width: 200px; margin: 2rem auto; }

      .card-grid { grid-template-columns: 1fr; }

      .section { padding: 2rem 1.5rem; }
    }
  </style>
</head>
<body>

  <!-- ============================================
       NAVIGATION
       ============================================ -->
  <nav class="nav">
    <a href="#" class="nav__brand">POST/DIGITAL</a>
    <ul class="nav__links">
      <li><a href="#" class="nav__link nav__link--active">Work</a></li>
      <li><a href="#" class="nav__link">Process</a></li>
      <li><a href="#" class="nav__link">Archive</a></li>
      <li><a href="#" class="nav__link">About</a></li>
      <li><a href="#" class="nav__link">Contact</a></li>
    </ul>
  </nav>

  <!-- ============================================
       HERO
       ============================================ -->
  <section class="hero">
    <span class="crop-mark crop-mark--tl"></span>
    <span class="crop-mark crop-mark--tr"></span>
    <span class="crop-mark crop-mark--bl"></span>
    <span class="crop-mark crop-mark--br"></span>

    <div class="hero__content">
      <p class="hero__label">RISO BLUE / 300 DPI / PASS 01 OF 03</p>
      <h1 class="hero__title">
        <span class="misreg" data-text="Hybrid">Hybrid</span>
        <span class="misreg" data-text="Materiality">Materiality</span>
      </h1>
      <p class="hero__subtitle">
        Where digital precision meets analog imperfection. Post Digital design
        celebrates the artifacts of physical reproduction -- halftone dots,
        misregistered ink layers, paper grain -- rendered on screen with
        intentional warmth and material honesty.
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="#work" class="btn">View Work</a>
        <a href="#process" class="btn btn--ghost">Our Process</a>
      </div>
    </div>
  </section>

  <!-- ============================================
       DIVIDER
       ============================================ -->
  <div class="divider">
    <span class="divider__marks">
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
    </span>
  </div>

  <!-- ============================================
       FEATURED WORK (CARDS)
       ============================================ -->
  <section class="section" id="work">
    <p class="section__label">01 -- FEATURED WORK</p>
    <h2 class="section__title">Selected Projects</h2>
    <p class="section__text">
      Each project explores the boundary between computational precision and
      physical materiality -- cycling between screen, printer, scanner, and
      back again until the layers of process become visible in the final form.
    </p>

    <div class="card-grid">
      <div class="card">
        <p class="card__number">PD-001</p>
        <h3>Offset Identity</h3>
        <p>
          Visual identity system built from deliberately misregistered color
          separations. Each print run produces unique variations as the riso
          drum drifts between passes.
        </p>
        <span class="card__tag">IDENTITY</span>
      </div>

      <div class="card">
        <p class="card__number">PD-002</p>
        <h3>Scan Feedback</h3>
        <p>
          Editorial series exploring recursive scanning -- each page was
          printed, scanned, edited, reprinted, and rescanned until digital
          and analog artifacts became inseparable.
        </p>
        <span class="card__tag">EDITORIAL</span>
      </div>

      <div class="card">
        <p class="card__number">PD-003</p>
        <h3>Halftone Interface</h3>
        <p>
          Web application UI where all imagery is processed through a visible
          halftone rasterization pipeline, rendering smooth photographs as
          tactile dot patterns.
        </p>
        <span class="card__tag">UI / UX</span>
      </div>

      <div class="card">
        <p class="card__number">PD-004</p>
        <h3>Overprint Posters</h3>
        <p>
          Poster series using a strict two-color palette with overprint zones
          generating a third hue. Designed digitally, printed on riso, scanned
          back for web display.
        </p>
        <span class="card__tag">PRINT</span>
      </div>

      <div class="card">
        <p class="card__number">PD-005</p>
        <h3>Glitch Codex</h3>
        <p>
          Generative book where each spread is corrupted by a custom
          datamoshing algorithm, then printed on uncoated stock to add the
          texture of physical paper to digital noise.
        </p>
        <span class="card__tag">GENERATIVE</span>
      </div>

      <div class="card">
        <p class="card__number">PD-006</p>
        <h3>Material Web</h3>
        <p>
          Website designed entirely using scanned physical collage elements --
          cut paper, ink marks, tape -- reassembled in code with CSS blend
          modes preserving their analog texture.
        </p>
        <span class="card__tag">WEB</span>
      </div>
    </div>
  </section>

  <!-- ============================================
       DIVIDER
       ============================================ -->
  <div class="divider">
    <span class="divider__marks">
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
    </span>
  </div>

  <!-- ============================================
       PROCESS SECTION
       ============================================ -->
  <section class="section" id="process">
    <p class="section__label">02 -- PROCESS</p>
    <h2 class="section__title">The Feedback Loop</h2>
    <p class="section__text">
      Post Digital work is defined by its process: a continuous cycle between
      physical and digital media. Design in vectors, print on riso, scan the
      output, edit the scan, reprint. Each pass adds its own artifacts --
      misregistration, grain, compression -- until the work becomes a layered
      record of its own production.
    </p>

    <div class="overprint-demo">
      <div>
        <div class="overprint-demo__layer"></div>
        <p class="overprint-demo__label">BLUE + RED = PURPLE</p>
      </div>
      <div>
        <div class="overprint-demo__layer"></div>
        <p class="overprint-demo__label">RED + YELLOW = BROWN</p>
      </div>
      <div>
        <div class="overprint-demo__layer"></div>
        <p class="overprint-demo__label">BLUE + YELLOW = GREEN</p>
      </div>
    </div>
  </section>

  <!-- ============================================
       DIVIDER
       ============================================ -->
  <div class="divider">
    <span class="divider__marks">
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
      <span class="divider__mark"></span>
    </span>
  </div>

  <!-- ============================================
       ABOUT / PHILOSOPHY
       ============================================ -->
  <section class="section" id="about">
    <p class="section__label">03 -- PHILOSOPHY</p>
    <h2 class="section__title">
      <span class="misreg" data-text="Beyond Seamless">Beyond Seamless</span>
    </h2>
    <p class="section__text">
      In an era where algorithms generate flawless imagery on demand, the
      deliberate embrace of material imperfection becomes a radical act of
      authenticity. Post Digital design does not reject technology -- it
      reveals technology by making its processes visible. Every halftone dot,
      every misregistered color pass, every grain of scanner noise is evidence
      of a physical encounter between idea and medium.
    </p>
    <p class="section__text" style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: var(--pd-toner); border-left: 2px solid var(--pd-blue); padding-left: 1.25rem;">
      "Post-digital art is more concerned with being human than with being digital."
      <br>-- Florian Cramer, Post-digital Aesthetics, 2015
    </p>
  </section>

  <!-- ============================================
       FOOTER
       ============================================ -->
  <footer class="footer">
    <p class="footer__process">
      RISO BLUE / RISO RED / RISO YELLOW -- 300 DPI -- UNCOATED 120GSM
    </p>
    <div class="footer__calibration">
      <span class="footer__swatch"></span>
      <span class="footer__swatch"></span>
      <span class="footer__swatch"></span>
      <span class="footer__swatch"></span>
      <span class="footer__swatch"></span>
      <span class="footer__swatch"></span>
    </div>
    <p class="footer__copy">
      &copy; 2026 Post/Digital Studio -- All artifacts intentional
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use `mix-blend-mode: multiply`** on overlapping colored elements to simulate authentic overprint behavior; semi-transparent inks on paper naturally multiply when layered
- **Generate paper grain with inline SVG filters** -- the `feTurbulence` filter with `fractalNoise` type at `baseFrequency` 0.5-0.8 creates convincing paper grain without external image assets
- **Apply misregistration with `text-shadow` on headings** -- offset cyan/red/yellow shadows by 1-3px to simulate color separation plate misalignment without duplicating DOM elements
- **Use `radial-gradient` dot patterns for halftone** -- `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)` with a 4-6px `background-size` creates a convincing halftone screen
- **Process photographs through CSS filters** -- combine `grayscale()`, `contrast()`, and a `mix-blend-mode: multiply` color overlay to create authentic single-ink risograph image rendering
- **Keep the design system modular** -- build components (cards, buttons, dividers) as independent units that can be "printed" in different color combinations by swapping CSS custom property values
- **Test overprint colors in advance** -- when two semi-transparent layers overlap with `mix-blend-mode: multiply`, the resulting color may not match expectations; preview all overlap combinations and adjust opacity to achieve usable contrast
- **Progressively enhance the analog effects** -- use `@supports (mix-blend-mode: multiply)` to ensure core content remains accessible in browsers that do not support blend modes; the clean underlying structure should work without any effects applied
