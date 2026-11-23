# Pointillism Design Reference

## Overview

Pointillism is a painting technique pioneered by Georges Seurat and Paul Signac in Paris in the mid-1880s, in which small, distinct dots of pure, unmixed color are applied in careful patterns to form an image. Rather than blending pigments on a palette, Pointillist artists placed tiny touches of contrasting color side by side on the canvas, relying on the viewer's eye and brain to optically blend them at a distance -- a phenomenon called **melange optique** (optical mixture). Rooted in the color theory of chemist Michel Eugene Chevreul and physicist Ogden Rood, the technique was a deliberate, scientific counterpoint to the intuitive brushwork of Impressionism, earning the broader movement the name **Neo-Impressionism**. Seurat's monumental 1886 painting *A Sunday Afternoon on the Island of La Grande Jatte* remains the definitive demonstration of the style: a shimmering, luminous surface composed entirely of thousands of meticulously placed dots.

Translated to web and UI design, the Pointillism aesthetic celebrates **dot-based composition, optical color mixing, stippled textures, and luminous vibrancy**. Where pixel art uses a rigid grid of uniform squares, Pointillism embraces the organic, circular dot as its fundamental unit -- closer to halftone printing than to a bitmap. Surfaces shimmer with dense fields of colored dots that, at normal viewing distance, coalesce into rich gradients, soft shadows, and vibrant imagery. The approach is inherently layered: foreground elements float over stippled backgrounds, colors interact through adjacency rather than blending, and negative space (the gaps between dots) contributes its own brightness. The resulting pages feel simultaneously scientific and painterly, precise yet warm, with a handcrafted quality that distinguishes them from flat or gradient-based design. The technique also carries a natural kinship with modern display technology -- after all, every screen image is itself composed of discrete dots of red, green, and blue light, making Pointillism arguably the first pixel art, conceived a century before the first computer monitor.

The philosophy at the core of this design system is that **beauty emerges from the deliberate arrangement of discrete, simple elements**. No single dot carries meaning; meaning arises from the collective. This maps elegantly to component-based design thinking and modular CSS architecture. Every button, card, and section is built from the same atomic unit -- the dot -- scaled and colored to serve its purpose. The aesthetic rewards patience and attention to detail, and invites the viewer to look closely, then step back and appreciate the whole.

---

## Visual Characteristics

### Core Design Traits

- **Dense dot fields as primary texture**: Surfaces are covered in small, circular dots of varying color, creating a stippled texture that replaces flat fills, gradients, and photographic backgrounds
- **Optical color mixing**: Adjacent dots of different hues (e.g., blue and yellow) are perceived as a blended color (green) by the viewer's eye, producing luminous, vibrant tones that feel more alive than pre-mixed equivalents
- **Visible dot structure at close range**: Unlike smooth gradients, the individual dots remain perceptible on inspection, rewarding close examination and creating a sense of handcrafted authenticity
- **Luminous, high-key brightness**: Because unmixed pure colors and white gaps between dots reflect more light, the overall palette reads as bright, sunlit, and airy -- reminiscent of Seurat's outdoor scenes
- **Complementary color juxtaposition**: Dots of complementary colors (blue/orange, red/green, violet/yellow) are placed adjacent to each other to intensify vibrancy, following Chevreul's law of simultaneous contrast
- **Circular and organic geometry**: The dot is the core shape; layouts favor rounded corners, circular containers, radial arrangements, and soft, organic compositions over hard rectangles and sharp angles
- **Layered depth through dot density**: Foreground elements use denser, larger dots; backgrounds use sparser, smaller dots, creating a natural depth hierarchy without drop shadows or z-index tricks
- **Painterly border treatments**: Edges of sections, cards, and images dissolve into scattered dots rather than ending at hard lines, mimicking the way Pointillist paintings dissolve at their margins
- **Subtle animation through dot shifting**: Gentle movements -- dots slowly drifting, pulsing, or color-cycling -- evoke the shimmering quality of sunlight on Seurat's canvases
- **White or cream canvas ground**: The underlying page background is warm white or cream, referencing the primed canvas that shows between dots and contributes to overall luminosity
- **Halftone-inspired scaling**: Dot size varies with tonal value -- larger dots in dark areas, smaller dots in highlights -- borrowing from print halftone technique while maintaining Pointillist character

### Design Principles

- **Emergence over specification**: Design for how elements appear at normal viewing distance, not just at zoom level; the whole is greater than the sum of its dots
- **Pure color, never muddy**: Favor saturated, unmixed hues for individual dot colors; let optical mixing handle subtlety rather than using desaturated or brownish tones
- **Complementary contrast for energy**: Place complementary colors adjacent to each other (in dot patterns, borders, and accent pairs) to maximize vibrancy and visual energy
- **Density communicates hierarchy**: Use dot density and dot size to signal importance -- denser regions draw the eye first, sparse regions recede
- **The canvas participates**: White space between dots is not empty; it is an active design element that contributes lightness and air to every surface
- **Scientific rigor, artistic warmth**: Balance the systematic, grid-like precision of dot placement with the warmth and imperfection of organic, hand-placed variation
- **Patience as a value**: The aesthetic rewards users who look closely; include details that reveal themselves on hover or at magnification
- **Light is the subject**: Like Seurat painting sunlight on water, prioritize brightness, luminosity, and the sensation of natural light in every color and layout decision

---

## Color Palette

The Pointillism palette draws directly from the pigments Seurat and Signac used on their canvases: pure spectral hues unmixed on the palette, applied as discrete touches and blended only by the eye. The colors are bright, saturated, and high-key, reflecting the outdoor, sunlit subject matter of Neo-Impressionist painting. Complementary pairs are essential -- blue with orange, red with green, violet with yellow -- as their adjacency intensifies both colors through simultaneous contrast. The warm white of primed canvas provides the ground tone, appearing between dots and lending the palette its characteristic luminosity.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Canvas Cream | `#FAF6EF` | Page background, the primed canvas ground visible between dots |
| Seurat Blue | `#2E5FA1` | Primary blue, sky and water dot fields, links and interactive elements |
| Cobalt Deep | `#1A3D7A` | Dark blue accents, headings, deep shadow dot regions |
| Signac Orange | `#E8841A` | Complementary accent to blue, warm highlights, call-to-action elements |
| Vermilion | `#D94423` | Warm red dots, energetic accents, alert and emphasis states |
| Cadmium Yellow | `#F5C623` | Sunlight and warmth, highlight dots, cheerful accents |
| Lemon Light | `#FBE87A` | Pale yellow dots, soft glow effects, hover highlights |
| Emerald Dot | `#2D8F5E` | Green foliage dots, nature references, success and confirm states |
| Viridian | `#1B7A5A` | Deep green accents, secondary action buttons, tonal variety |
| Violet Dusk | `#7B4FA0` | Purple dots for shadow mixtures, decorative accents, tertiary highlights |
| Rose Madder | `#C4456A` | Pinkish-red dots, figure tones, warm-accent variety |
| Warm Sienna | `#B56A3A` | Earth-tone dots, skin and ground references, nav backgrounds |
| Slate Shadow | `#4A4E5A` | Dark neutral for text, deep tonal regions, footer backgrounds |
| Soft Charcoal | `#2C2F36` | Darkest tone, high-contrast text, shadow-dense areas |
| Pure White | `#FFFFFF` | Maximum highlight, dot gaps, clean surfaces and overlays |

### CSS Custom Properties

```css
:root {
  /* Canvas */
  --pt-canvas: #faf6ef;
  --pt-white: #ffffff;

  /* Blues */
  --pt-blue: #2e5fa1;
  --pt-blue-deep: #1a3d7a;
  --pt-blue-light: #6a9fd8;

  /* Warm accents */
  --pt-orange: #e8841a;
  --pt-vermilion: #d94423;
  --pt-yellow: #f5c623;
  --pt-yellow-light: #fbe87a;

  /* Greens */
  --pt-green: #2d8f5e;
  --pt-viridian: #1b7a5a;

  /* Cool accents */
  --pt-violet: #7b4fa0;
  --pt-rose: #c4456a;

  /* Earth tones */
  --pt-sienna: #b56a3a;

  /* Neutrals */
  --pt-slate: #4a4e5a;
  --pt-charcoal: #2c2f36;
  --pt-gray-light: #c8c4bc;

  /* Functional mappings */
  --pt-bg-primary: var(--pt-canvas);
  --pt-bg-surface: var(--pt-white);
  --pt-text-primary: var(--pt-charcoal);
  --pt-text-secondary: var(--pt-slate);
  --pt-accent: var(--pt-blue);
  --pt-accent-warm: var(--pt-orange);
  --pt-accent-strong: var(--pt-vermilion);
  --pt-border: var(--pt-gray-light);

  /* Dot effect variables */
  --pt-dot-size: 4px;
  --pt-dot-gap: 6px;
  --pt-dot-opacity: 0.7;
}
```

---

## Typography

Pointillism-inspired typography should feel **clear, well-structured, and gently warm** -- complementing the organic dot textures without competing with them. Serif typefaces connect to the 19th-century French fine-art origins of the movement, while clean sans-serifs provide modern readability for body text. Display type can be paired with dot-stippled decorative effects (dotted underlines, stippled drop caps), but the letterforms themselves should remain crisp and legible, serving as an anchor of clarity against the textured backdrop.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Playfair Display** | 400, 700, 900 | Hero headlines, editorial titles, display text | [Google Fonts](https://fonts.google.com/specimen/Playfair+Display) |
| **Libre Baskerville** | 400, 400i, 700 | Subheadings, pull quotes, formal body text | [Google Fonts](https://fonts.google.com/specimen/Libre+Baskerville) |
| **Source Sans 3** | 300, 400, 600, 700 | Primary body text, UI labels, navigation | [Google Fonts](https://fonts.google.com/specimen/Source+Sans+3) |
| **Lora** | 400, 500, 600, 700 | Alternative body serif, article text, captions | [Google Fonts](https://fonts.google.com/specimen/Lora) |
| **Cormorant Garamond** | 300, 400, 600, 700 | Elegant display headlines, large pull quotes | [Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Inter** | 300, 400, 500, 600 | UI text, meta labels, small print, fallback body | [Google Fonts](https://fonts.google.com/specimen/Inter) |
| **Spectral** | 400, 500, 700 | Long-form reading, serif body alternative | [Google Fonts](https://fonts.google.com/specimen/Spectral) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Playfair Display 700 | Source Sans 3 400 | Classic gallery -- refined serif headlines with clean modern body |
| Cormorant Garamond 600 | Lora 400 | Full-serif elegance -- French literary warmth throughout |
| Playfair Display 900 | Inter 400 | High contrast -- bold artistic display with neutral, crisp body |
| Libre Baskerville 700 | Source Sans 3 300 | Balanced warmth -- traditional headings with airy modern text |
| Cormorant Garamond 700 | Spectral 400 | Editorial depth -- elegant display with comfortable reading serif |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Lora:wght@400;500;700&display=swap');

body {
  font-family: 'Source Sans 3', 'Segoe UI', Tahoma, sans-serif;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--pt-charcoal);
  letter-spacing: 0.01em;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 700;
  line-height: 1.2;
  color: var(--pt-blue-deep);
  letter-spacing: -0.01em;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.375rem;
}

blockquote {
  font-family: 'Lora', 'Georgia', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--pt-slate);
  border-left: 4px dotted var(--pt-blue);
  padding-left: 1.25rem;
}

.caption, .meta {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pt-slate);
}
```

---

## Layout Principles

- **Canvas-first composition**: Begin with a warm cream or white canvas and build up layers of dot texture, content, and color, just as a Pointillist painter builds from the primed ground
- **Generous whitespace as luminosity**: Ample spacing between sections and around elements lets the canvas "breathe" and maintains the light, airy quality essential to the aesthetic
- **Rounded containers over sharp rectangles**: Cards, buttons, and section panels use generous border-radius values or fully circular shapes to echo the fundamental dot motif
- **Asymmetric, organic arrangements**: Favor slightly irregular grid layouts, staggered card positions, and off-center compositions that feel composed rather than mechanical
- **Dot density gradients for visual flow**: Guide the eye through the page by varying the density of decorative dot patterns -- dense at focal points, sparse at margins
- **Overlapping dot fields for depth**: Layer translucent dot patterns at different scales to create a sense of atmospheric perspective and spatial depth
- **Modular dot-grid underlying structure**: Use a regular grid (e.g., 8px or 12px base) as the invisible scaffold, but allow visual elements to break the grid organically at edges
- **Section transitions via stipple dissolves**: Instead of hard horizontal rules, transition between page sections with dot patterns that fade from one density/color to another
- **Image integration through dot masking**: Photographs and illustrations can be masked or filtered to appear as dot fields, maintaining the consistent Pointillist surface treatment
- **Vertical rhythm tied to dot scale**: Line heights, margins, and padding should be proportional to the base dot size to create a harmonious mathematical relationship throughout
- **Progressive disclosure of detail**: Design pages so that the overall composition reads clearly at a glance, with finer dot details and micro-interactions revealing themselves on closer inspection
- **Centered, symmetrical hero sections**: Hero areas benefit from a centered, slightly formal composition -- echoing the balanced compositions of Seurat's large-scale paintings

---

## CSS / Design Techniques

### Stippled Dot Background

A repeating radial-gradient pattern creates a dense field of dots that evokes a Pointillist canvas surface. Adjust `--pt-dot-size` and `--pt-dot-gap` to control density.

```css
.stippled-bg {
  background-color: var(--pt-canvas);
  background-image:
    radial-gradient(circle, var(--pt-blue) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-orange) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-yellow) 1px, transparent 1px);
  background-size:
    12px 12px,
    18px 18px,
    15px 15px;
  background-position:
    0 0,
    6px 9px,
    3px 4px;
}
```

### Card Component

Cards float on the stippled canvas with rounded corners and a subtle dot-pattern border that dissolves at the edges.

```css
.pt-card {
  background: var(--pt-white);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(46, 95, 161, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pt-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 2px solid transparent;
  background:
    radial-gradient(circle at 2px 2px, var(--pt-blue) 1px, transparent 1px)
    border-box;
  background-size: 8px 8px;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.4;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.pt-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(46, 95, 161, 0.14);
}

.pt-card:hover::before {
  opacity: 0.8;
}

.pt-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--pt-blue-deep);
  margin-bottom: 0.75rem;
}

.pt-card__body {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--pt-text-secondary);
}

.pt-card__tag {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: radial-gradient(circle, var(--pt-orange) 1px, transparent 1px);
  background-size: 4px 4px;
  background-color: var(--pt-yellow-light);
  color: var(--pt-charcoal);
  font-weight: 600;
}
```

### Button Component

Buttons use stippled backgrounds that shift density on hover, with rounded pill shapes and dot-field underlays.

```css
.pt-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 999px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pt-btn--primary {
  background-color: var(--pt-blue);
  color: var(--pt-white);
}

.pt-btn--primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
  background-size: 6px 6px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pt-btn--primary:hover {
  background-color: var(--pt-blue-deep);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(46, 95, 161, 0.3);
}

.pt-btn--primary:hover::after {
  opacity: 1;
}

.pt-btn--warm {
  background-color: var(--pt-orange);
  color: var(--pt-white);
}

.pt-btn--warm:hover {
  background-color: #cf7215;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(232, 132, 26, 0.3);
}

.pt-btn--outline {
  background: transparent;
  color: var(--pt-blue);
  border: 2px dotted var(--pt-blue);
}

.pt-btn--outline:hover {
  background: var(--pt-blue);
  color: var(--pt-white);
  border-style: solid;
}
```

### Navigation Bar

A top navigation bar with a stippled underline and dot-based active indicator.

```css
.pt-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--pt-canvas);
  border-bottom: 3px dotted var(--pt-blue);
  position: sticky;
  top: 0;
  z-index: 100;
}

.pt-nav__brand {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--pt-blue-deep);
  text-decoration: none;
  position: relative;
}

.pt-nav__brand::after {
  content: '\25CF'; /* bullet dot */
  color: var(--pt-orange);
  margin-left: 0.25rem;
  font-size: 0.75rem;
  vertical-align: super;
}

.pt-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pt-nav__link {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--pt-slate);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
  padding-bottom: 0.25rem;
  transition: color 0.3s ease;
}

.pt-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pt-orange);
  transform: translateX(-50%) scale(0);
  transition: transform 0.3s ease;
}

.pt-nav__link:hover,
.pt-nav__link--active {
  color: var(--pt-blue);
}

.pt-nav__link:hover::after,
.pt-nav__link--active::after {
  transform: translateX(-50%) scale(1);
}
```

### Hero Section

A large hero section with layered stippled dot fields, centered display text, and a luminous, sunlit atmosphere.

```css
.pt-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  overflow: hidden;
  background-color: var(--pt-canvas);
}

.pt-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle, var(--pt-blue) 1.5px, transparent 1.5px),
    radial-gradient(circle, var(--pt-orange) 1.5px, transparent 1.5px),
    radial-gradient(circle, var(--pt-green) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-violet) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-yellow) 1px, transparent 1px);
  background-size:
    20px 20px,
    28px 28px,
    16px 16px,
    24px 24px,
    14px 14px;
  background-position:
    0 0,
    10px 14px,
    5px 8px,
    12px 3px,
    7px 11px;
  opacity: 0.25;
  z-index: 0;
}

.pt-hero__content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.pt-hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--pt-blue-deep);
  margin-bottom: 1.25rem;
  line-height: 1.1;
}

.pt-hero__subtitle {
  font-family: 'Lora', serif;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  font-style: italic;
  color: var(--pt-slate);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.pt-hero__dot-accent {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 2rem;
}

.pt-hero__dot-accent span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.pt-hero__dot-accent span:nth-child(1) { background: var(--pt-blue); }
.pt-hero__dot-accent span:nth-child(2) { background: var(--pt-orange); }
.pt-hero__dot-accent span:nth-child(3) { background: var(--pt-yellow); }
.pt-hero__dot-accent span:nth-child(4) { background: var(--pt-green); }
.pt-hero__dot-accent span:nth-child(5) { background: var(--pt-violet); }
.pt-hero__dot-accent span:nth-child(6) { background: var(--pt-rose); }
```

### Dot Shimmer Animation

A CSS animation that simulates the luminous, shimmering quality of light on a Pointillist canvas by subtly cycling dot opacity and position.

```css
@keyframes dotShimmer {
  0%, 100% {
    background-position:
      0 0,
      6px 9px,
      3px 4px;
    opacity: 0.25;
  }
  33% {
    background-position:
      1px 1px,
      7px 10px,
      4px 5px;
    opacity: 0.30;
  }
  66% {
    background-position:
      -1px 0px,
      5px 8px,
      2px 3px;
    opacity: 0.22;
  }
}

.pt-shimmer {
  background-image:
    radial-gradient(circle, var(--pt-blue) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-orange) 1px, transparent 1px),
    radial-gradient(circle, var(--pt-yellow) 1px, transparent 1px);
  background-size:
    12px 12px,
    18px 18px,
    15px 15px;
  animation: dotShimmer 8s ease-in-out infinite;
}
```

### Halftone Image Overlay

Apply a halftone-dot filter over images to integrate photographs into the Pointillist visual language using SVG filters.

```css
.pt-halftone {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.pt-halftone img {
  display: block;
  width: 100%;
  height: auto;
  filter: contrast(1.2) saturate(1.3);
}

.pt-halftone::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
  background-size: 4px 4px;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* SVG filter approach for stronger effect -- add to HTML:
  <svg width="0" height="0">
    <filter id="halftone">
      <feTurbulence type="turbulence" baseFrequency="5" numOctaves="1" result="noise" />
      <feComponentTransfer in="noise" result="spots">
        <feFuncR type="discrete" tableValues="0 1" />
        <feFuncG type="discrete" tableValues="0 1" />
        <feFuncB type="discrete" tableValues="0 1" />
      </feComponentTransfer>
      <feComposite operator="in" in="SourceGraphic" in2="spots" />
    </filter>
  </svg>
*/

.pt-halftone--strong img {
  filter: url(#halftone) contrast(1.1) saturate(1.2);
}
```

### Dot Divider

A section divider made of colored dots that replaces traditional horizontal rules.

```css
.pt-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 2rem 0;
}

.pt-divider__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.7;
}

.pt-divider__dot:nth-child(odd) {
  background: var(--pt-blue);
}

.pt-divider__dot:nth-child(even) {
  background: var(--pt-orange);
}

.pt-divider__dot:nth-child(3n) {
  background: var(--pt-yellow);
  width: 6px;
  height: 6px;
}

.pt-divider__dot:nth-child(5n) {
  background: var(--pt-green);
}

.pt-divider__dot:nth-child(7n) {
  background: var(--pt-violet);
  width: 10px;
  height: 10px;
  opacity: 0.5;
}

/* Generate via HTML: 12-20 spans with class .pt-divider__dot */
```

---

## Design Do's and Don'ts

### Do's

- **Do use pure, saturated colors for individual dots** -- the optical mixing effect only works when each dot is a distinct, unmixed hue
- **Do leave visible canvas between dots** -- the warm white gaps are essential to the luminous, light-filled quality of the aesthetic
- **Do pair complementary colors adjacently** -- blue beside orange, red beside green, violet beside yellow maximizes the vibrancy that defines Pointillism
- **Do vary dot sizes to convey tonal depth** -- larger dots for shadows, smaller dots for highlights, mimicking halftone and Seurat's own technique
- **Do use rounded, organic UI shapes** -- circular dots, pill buttons, rounded cards, and radial layouts reinforce the core dot motif
- **Do test your designs at multiple zoom levels** -- the composition should read as a unified whole at distance and reveal dot structure on close inspection
- **Do use subtle, slow animations** -- gentle shimmer, drift, and pulse effects evoke sunlight on water; avoid fast or aggressive motion
- **Do maintain a warm, sunlit overall tone** -- the aesthetic is fundamentally optimistic, bright, and associated with outdoor light

### Don'ts

- **Don't pre-mix or muddy your dot colors** -- desaturated, brownish, or grayish dots defeat the purpose of optical mixing and kill luminosity
- **Don't use hard, sharp edges for containers** -- square corners and rigid borders conflict with the organic, circular language of dots
- **Don't overcrowd with dense dot patterns everywhere** -- variation in density is essential; uniformly dense stippling becomes visual noise and loses hierarchy
- **Don't use dark backgrounds as the default** -- Pointillism depends on the bright canvas ground; dark themes undermine the fundamental luminosity of the aesthetic
- **Don't apply dot textures to text** -- body text and headings must remain crisp and readable; the stippled texture belongs on backgrounds, borders, and decorative elements
- **Don't use photorealistic imagery without dot treatment** -- unfiltered photographs break the Pointillist surface; apply halftone overlays, dot masks, or CSS filters to integrate them
- **Don't animate dots aggressively** -- rapid movement, spinning, or flashing destroys the contemplative, patient quality of the aesthetic and can cause accessibility issues
- **Don't confuse Pointillism with generic polka dots** -- Pointillism dots are deliberately placed for optical color mixing, not decorative pattern; each dot's color and position should serve a tonal purpose

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| Impressionism | Direct predecessor -- Pointillism was a systematic, scientific response to Impressionism's intuitive brushwork; they share a focus on light and color |
| Pixel Art | Structural cousin -- both build images from discrete colored units on a grid, but Pointillism uses round dots and optical mixing vs. square pixels and flat color |
| 8-Bit | Related through discrete-unit composition; 8-Bit embraces the square pixel grid and hardware constraints while Pointillism uses organic dots and fine-art precision |
| Halftone / Pop Art | Halftone printing uses the same principle of sized dots to simulate tone; Pop Art (Lichtenstein) foregrounded halftone dots as a graphic motif |
| Generative Art | Shares the algorithmic, rule-based approach -- generative artists frequently use dot-placement algorithms that produce Pointillist-style compositions |
| Watercolor | Both emphasize luminosity and the visible surface texture of the medium; watercolor uses washes where Pointillism uses dots, but both let the paper show through |
| Flat Design | Contrast aesthetic -- Flat Design uses solid, uniform color fills; Pointillism breaks every fill into visible dot components, adding texture and depth |
| Art Nouveau | Period neighbor (1890s-1910s) with shared interest in natural forms and decorative beauty, but Art Nouveau uses flowing lines where Pointillism uses dots |
| Mosaic / Tessellation | Both construct images from discrete small units; mosaic uses angular tile shapes while Pointillism uses dots, but the principle of emergence from fragments is the same |
| Risograph | Shares the visible mechanical process (overprinted dot patterns, limited spot colors) and the warmth of imperfect, textured reproduction |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pointillism -- Design Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
  <style>
    :root {
      --pt-canvas: #faf6ef; --pt-white: #ffffff;
      --pt-blue: #2e5fa1; --pt-blue-deep: #1a3d7a; --pt-blue-light: #6a9fd8;
      --pt-orange: #e8841a; --pt-vermilion: #d94423;
      --pt-yellow: #f5c623; --pt-yellow-light: #fbe87a;
      --pt-green: #2d8f5e; --pt-viridian: #1b7a5a;
      --pt-violet: #7b4fa0; --pt-rose: #c4456a; --pt-sienna: #b56a3a;
      --pt-slate: #4a4e5a; --pt-charcoal: #2c2f36; --pt-gray-light: #c8c4bc;
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Source Sans 3', sans-serif; font-size: 1.0625rem; line-height: 1.75; color: var(--pt-charcoal); background: var(--pt-canvas); }
    h1, h2, h3, h4 { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; line-height: 1.2; color: var(--pt-blue-deep); }
    a { color: var(--pt-blue); text-decoration: none; transition: color 0.3s; }
    a:hover { color: var(--pt-orange); }
    img { max-width: 100%; height: auto; display: block; }

    /* Nav */
    .pt-nav { display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; background: var(--pt-canvas); border-bottom: 3px dotted var(--pt-blue); position: sticky; top: 0; z-index: 100; }
    .pt-nav__brand { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; color: var(--pt-blue-deep); text-decoration: none; }
    .pt-nav__brand::after { content: '\25CF'; color: var(--pt-orange); margin-left: 0.25rem; font-size: 0.75rem; vertical-align: super; }
    .pt-nav__links { display: flex; gap: 2rem; list-style: none; }
    .pt-nav__link { font-family: 'Source Sans 3', sans-serif; font-weight: 600; font-size: 0.9375rem; color: var(--pt-slate); text-decoration: none; text-transform: uppercase; letter-spacing: 0.06em; position: relative; padding-bottom: 0.25rem; transition: color 0.3s; }
    .pt-nav__link::after { content: ''; position: absolute; bottom: -4px; left: 50%; width: 6px; height: 6px; border-radius: 50%; background: var(--pt-orange); transform: translateX(-50%) scale(0); transition: transform 0.3s; }
    .pt-nav__link:hover, .pt-nav__link--active { color: var(--pt-blue); }
    .pt-nav__link:hover::after, .pt-nav__link--active::after { transform: translateX(-50%) scale(1); }

    /* Hero */
    .pt-hero { position: relative; min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem; overflow: hidden; background: var(--pt-canvas); }
    .pt-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, var(--pt-blue) 1.5px, transparent 1.5px), radial-gradient(circle, var(--pt-orange) 1.5px, transparent 1.5px), radial-gradient(circle, var(--pt-green) 1px, transparent 1px), radial-gradient(circle, var(--pt-violet) 1px, transparent 1px), radial-gradient(circle, var(--pt-yellow) 1px, transparent 1px); background-size: 20px 20px, 28px 28px, 16px 16px, 24px 24px, 14px 14px; background-position: 0 0, 10px 14px, 5px 8px, 12px 3px, 7px 11px; opacity: 0.25; z-index: 0; animation: dotShimmer 8s ease-in-out infinite; }
    @keyframes dotShimmer { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.30; } }
    .pt-hero__content { position: relative; z-index: 1; max-width: 700px; }
    .pt-hero__title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 1.25rem; line-height: 1.1; }
    .pt-hero__subtitle { font-family: 'Lora', serif; font-size: clamp(1.125rem, 2.5vw, 1.5rem); font-style: italic; color: var(--pt-slate); margin-bottom: 2rem; line-height: 1.6; }
    .pt-hero__dots { display: flex; gap: 8px; justify-content: center; margin-bottom: 2rem; }
    .pt-hero__dots span { width: 10px; height: 10px; border-radius: 50%; display: inline-block; animation: dotPulse 3s ease-in-out infinite; }
    .pt-hero__dots span:nth-child(1) { background: var(--pt-blue); animation-delay: 0s; }
    .pt-hero__dots span:nth-child(2) { background: var(--pt-orange); animation-delay: 0.3s; }
    .pt-hero__dots span:nth-child(3) { background: var(--pt-yellow); animation-delay: 0.6s; }
    .pt-hero__dots span:nth-child(4) { background: var(--pt-green); animation-delay: 0.9s; }
    .pt-hero__dots span:nth-child(5) { background: var(--pt-violet); animation-delay: 1.2s; }
    .pt-hero__dots span:nth-child(6) { background: var(--pt-rose); animation-delay: 1.5s; }
    @keyframes dotPulse { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.3); opacity: 1; } }
    .pt-hero__cta { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* Buttons */
    .pt-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 2rem; border: none; border-radius: 999px; font-family: 'Source Sans 3', sans-serif; font-size: 1rem; font-weight: 600; cursor: pointer; position: relative; overflow: hidden; transition: all 0.3s; text-decoration: none; }
    .pt-btn--primary { background: var(--pt-blue); color: var(--pt-white); }
    .pt-btn--primary::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px); background-size: 6px 6px; opacity: 0; transition: opacity 0.3s; }
    .pt-btn--primary:hover { background: var(--pt-blue-deep); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(46,95,161,0.3); }
    .pt-btn--primary:hover::after { opacity: 1; }
    .pt-btn--outline { background: transparent; color: var(--pt-blue); border: 2px dotted var(--pt-blue); }
    .pt-btn--outline:hover { background: var(--pt-blue); color: var(--pt-white); border-style: solid; }

    /* Divider */
    .pt-divider { display: flex; justify-content: center; align-items: center; gap: 6px; padding: 2rem 0; }
    .pt-divider span { border-radius: 50%; opacity: 0.7; }
    .pt-divider span:nth-child(odd) { width: 8px; height: 8px; background: var(--pt-blue); }
    .pt-divider span:nth-child(even) { width: 6px; height: 6px; background: var(--pt-orange); }
    .pt-divider span:nth-child(3n) { background: var(--pt-yellow); }
    .pt-divider span:nth-child(5n) { background: var(--pt-green); width: 7px; height: 7px; }
    .pt-divider span:nth-child(7n) { background: var(--pt-violet); width: 10px; height: 10px; opacity: 0.5; }

    /* Sections */
    .pt-section { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; }
    .pt-section__title { font-size: 2rem; text-align: center; margin-bottom: 0.5rem; }
    .pt-section__subtitle { text-align: center; color: var(--pt-slate); font-family: 'Lora', serif; font-style: italic; font-size: 1.1rem; margin-bottom: 3rem; }

    /* Card Grid */
    .pt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .pt-card { background: var(--pt-white); border-radius: 16px; padding: 2rem; position: relative; overflow: hidden; box-shadow: 0 2px 20px rgba(46,95,161,0.08); transition: transform 0.3s, box-shadow 0.3s; }
    .pt-card::before { content: ''; position: absolute; inset: 0; border-radius: 16px; background: radial-gradient(circle, var(--pt-blue) 1px, transparent 1px); background-size: 8px 8px; opacity: 0; pointer-events: none; transition: opacity 0.4s; }
    .pt-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(46,95,161,0.14); }
    .pt-card:hover::before { opacity: 0.06; }
    .pt-card__dot { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
    .pt-card__dot--blue { background: radial-gradient(circle, var(--pt-blue) 2px, transparent 2px), var(--pt-blue-light); background-size: 6px 6px; }
    .pt-card__dot--orange { background: radial-gradient(circle, var(--pt-orange) 2px, transparent 2px), var(--pt-yellow-light); background-size: 6px 6px; }
    .pt-card__dot--green { background: radial-gradient(circle, var(--pt-green) 2px, transparent 2px), #b3e6cc; background-size: 6px 6px; }
    .pt-card__title { font-family: 'Playfair Display', serif; font-size: 1.375rem; font-weight: 700; color: var(--pt-blue-deep); margin-bottom: 0.75rem; }
    .pt-card__body { font-size: 1rem; line-height: 1.7; color: var(--pt-slate); margin-bottom: 1.25rem; }
    .pt-card__tag { display: inline-block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; padding: 0.25rem 0.75rem; border-radius: 999px; background: var(--pt-yellow-light); color: var(--pt-charcoal); font-weight: 600; }

    /* Palette */
    .pt-palette { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2rem; }
    .pt-palette__swatch { width: 80px; text-align: center; }
    .pt-palette__color { width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 0.5rem; border: 3px solid var(--pt-white); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .pt-palette__label { font-size: 0.6875rem; font-weight: 600; color: var(--pt-slate); text-transform: uppercase; letter-spacing: 0.04em; }

    /* Quote */
    .pt-quote { max-width: 700px; margin: 3rem auto; text-align: center; padding: 2.5rem 2rem; position: relative; }
    .pt-quote::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, var(--pt-blue) 1px, transparent 1px), radial-gradient(circle, var(--pt-orange) 1px, transparent 1px); background-size: 10px 10px, 14px 14px; background-position: 0 0, 5px 7px; opacity: 0.08; border-radius: 16px; }
    .pt-quote__text { font-family: 'Lora', serif; font-style: italic; font-size: 1.375rem; line-height: 1.6; color: var(--pt-blue-deep); position: relative; z-index: 1; }
    .pt-quote__author { font-family: 'Source Sans 3', sans-serif; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--pt-slate); margin-top: 1rem; position: relative; z-index: 1; }

    /* Footer */
    .pt-footer { text-align: center; padding: 2rem; border-top: 3px dotted var(--pt-blue); color: var(--pt-slate); font-size: 0.875rem; }
    .pt-footer a { color: var(--pt-blue); font-weight: 600; }

    /* Stippled backgrounds */
    .pt-stippled-section--subtle { background-image: radial-gradient(circle, rgba(46,95,161,0.12) 1px, transparent 1px), radial-gradient(circle, rgba(232,132,26,0.10) 1px, transparent 1px); background-size: 14px 14px, 20px 20px; background-position: 0 0, 7px 10px; }

    /* Responsive */
    @media (max-width: 768px) {
      .pt-nav { flex-direction: column; gap: 1rem; padding: 1rem; }
      .pt-nav__links { gap: 1rem; flex-wrap: wrap; justify-content: center; }
      .pt-hero { min-height: 60vh; padding: 3rem 1.5rem; }
      .pt-section { padding: 3rem 1.5rem; }
      .pt-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- ==========================================
       Navigation
       ========================================== -->
  <nav class="pt-nav">
    <a href="#" class="pt-nav__brand">Pointillisme</a>
    <ul class="pt-nav__links">
      <li><a href="#about" class="pt-nav__link pt-nav__link--active">About</a></li>
      <li><a href="#technique" class="pt-nav__link">Technique</a></li>
      <li><a href="#palette" class="pt-nav__link">Palette</a></li>
      <li><a href="#gallery" class="pt-nav__link">Gallery</a></li>
      <li><a href="#contact" class="pt-nav__link">Contact</a></li>
    </ul>
  </nav>

  <!-- ==========================================
       Hero Section
       ========================================== -->
  <header class="pt-hero">
    <div class="pt-hero__content">
      <div class="pt-hero__dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 class="pt-hero__title">Every Dot Tells a Story</h1>
      <p class="pt-hero__subtitle">
        Where science meets art, and thousands of pure color points
        merge into luminous, shimmering compositions.
      </p>
      <div class="pt-hero__cta">
        <a href="#technique" class="pt-btn pt-btn--primary">Explore the Technique</a>
        <a href="#gallery" class="pt-btn pt-btn--outline">View Gallery</a>
      </div>
    </div>
  </header>

  <!-- ==========================================
       Dot Divider
       ========================================== -->
  <div class="pt-divider">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>

  <!-- ==========================================
       About Section
       ========================================== -->
  <section class="pt-section" id="about">
    <h2 class="pt-section__title">The Art of Optical Mixing</h2>
    <p class="pt-section__subtitle">
      Born in 1880s Paris, refined by science, reborn in pixels
    </p>

    <div class="pt-grid">
      <div class="pt-card">
        <div class="pt-card__dot pt-card__dot--blue"></div>
        <h3 class="pt-card__title">Pure Color</h3>
        <p class="pt-card__body">
          Every dot is a single, unmixed hue -- blue, orange, yellow, green --
          applied directly to the canvas. The eye does the blending,
          producing colors more luminous than any mixture on a palette.
        </p>
        <span class="pt-card__tag">Chromatic Purity</span>
      </div>

      <div class="pt-card">
        <div class="pt-card__dot pt-card__dot--orange"></div>
        <h3 class="pt-card__title">Scientific Precision</h3>
        <p class="pt-card__body">
          Grounded in Chevreul's color theory and the law of simultaneous
          contrast, each dot's placement is deliberate. Complementary colors
          sit side by side to intensify each other's vibrancy.
        </p>
        <span class="pt-card__tag">Color Theory</span>
      </div>

      <div class="pt-card">
        <div class="pt-card__dot pt-card__dot--green"></div>
        <h3 class="pt-card__title">Emergent Beauty</h3>
        <p class="pt-card__body">
          Step back, and thousands of individual dots coalesce into
          shimmering landscapes, figures bathed in sunlight, and
          reflections on water. The whole is greater than its parts.
        </p>
        <span class="pt-card__tag">Optical Fusion</span>
      </div>
    </div>
  </section>

  <!-- ==========================================
       Quote Section
       ========================================== -->
  <div class="pt-quote">
    <p class="pt-quote__text">
      "Some say they see poetry in my paintings; I see only science."
    </p>
    <p class="pt-quote__author">-- Georges Seurat</p>
  </div>

  <!-- ==========================================
       Dot Divider
       ========================================== -->
  <div class="pt-divider">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>

  <!-- ==========================================
       Technique Section
       ========================================== -->
  <section class="pt-stippled-section--subtle" id="technique">
    <div class="pt-section">
      <h2 class="pt-section__title">The Technique</h2>
      <p class="pt-section__subtitle">
        Dot by dot, layer by layer, light emerges
      </p>

      <div class="pt-grid">
        <div class="pt-card">
          <h3 class="pt-card__title">Complementary Contrast</h3>
          <p class="pt-card__body">
            Blue dots beside orange dots. Red beside green. Violet beside
            yellow. Each pair intensifies the other through simultaneous
            contrast, producing a vibrancy impossible with pre-mixed color.
          </p>
        </div>

        <div class="pt-card">
          <h3 class="pt-card__title">Density as Value</h3>
          <p class="pt-card__body">
            Shadows are rendered with dense clusters of dark-hued dots.
            Highlights emerge where dots are sparse and the bright canvas
            ground shows through. Dot size and spacing control tonal range.
          </p>
        </div>

        <div class="pt-card">
          <h3 class="pt-card__title">The Canvas Participates</h3>
          <p class="pt-card__body">
            The warm white ground between dots is not empty space -- it is
            an active participant in the color mixture, contributing
            brightness and air to every passage of the composition.
          </p>
        </div>

        <div class="pt-card">
          <h3 class="pt-card__title">Distance Transforms</h3>
          <p class="pt-card__body">
            Up close, you see individual dots of pure color. Step back,
            and they merge into rich, shimmering tones. The viewing
            distance is part of the artistic experience.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================
       Palette Showcase
       ========================================== -->
  <section class="pt-section" id="palette">
    <h2 class="pt-section__title">The Palette</h2>
    <p class="pt-section__subtitle">
      Pure spectral hues, unmixed on the palette, blended only by the eye
    </p>

    <div class="pt-palette">
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #2e5fa1;"></div>
        <span class="pt-palette__label">Seurat Blue</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #1a3d7a;"></div>
        <span class="pt-palette__label">Cobalt Deep</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #e8841a;"></div>
        <span class="pt-palette__label">Signac Orange</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #d94423;"></div>
        <span class="pt-palette__label">Vermilion</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #f5c623;"></div>
        <span class="pt-palette__label">Cadmium Yellow</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #fbe87a;"></div>
        <span class="pt-palette__label">Lemon Light</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #2d8f5e;"></div>
        <span class="pt-palette__label">Emerald Dot</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #1b7a5a;"></div>
        <span class="pt-palette__label">Viridian</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #7b4fa0;"></div>
        <span class="pt-palette__label">Violet Dusk</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #c4456a;"></div>
        <span class="pt-palette__label">Rose Madder</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #b56a3a;"></div>
        <span class="pt-palette__label">Warm Sienna</span>
      </div>
      <div class="pt-palette__swatch">
        <div class="pt-palette__color" style="background: #faf6ef;"></div>
        <span class="pt-palette__label">Canvas Cream</span>
      </div>
    </div>
  </section>

  <!-- ==========================================
       Gallery Section (Cards)
       ========================================== -->
  <div class="pt-divider">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>

  <section class="pt-stippled-section--subtle" id="gallery">
    <div class="pt-section">
      <h2 class="pt-section__title">Gallery</h2>
      <p class="pt-section__subtitle">
        Compositions built dot by dot, each one a study in light
      </p>

      <div class="pt-grid">
        <div class="pt-card">
          <h3 class="pt-card__title">Sunday Afternoon</h3>
          <p class="pt-card__body">
            Seurat's masterwork: a monumental canvas depicting Parisians
            at leisure on the banks of the Seine, composed entirely of
            meticulously placed dots over two years of labor.
          </p>
          <span class="pt-card__tag">1884-1886</span>
        </div>

        <div class="pt-card">
          <h3 class="pt-card__title">The Lighthouse at Honfleur</h3>
          <p class="pt-card__body">
            Seurat's study of harbor light, where the shimmer of water
            and sky is achieved through layers of blue, green, and
            orange dots that optically blend at distance.
          </p>
          <span class="pt-card__tag">1886</span>
        </div>

        <div class="pt-card">
          <h3 class="pt-card__title">The Pine Tree at Saint-Tropez</h3>
          <p class="pt-card__body">
            Signac's vibrant southern landscape, where Mediterranean
            sunlight is captured through bold, larger dots of pure
            complementary color -- blue sky against orange earth.
          </p>
          <span class="pt-card__tag">1909</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================
       Contact Section
       ========================================== -->
  <section class="pt-section" id="contact">
    <h2 class="pt-section__title">Get in Touch</h2>
    <p class="pt-section__subtitle">
      Every great composition begins with a single dot
    </p>
    <div style="text-align: center; margin-top: 2rem;">
      <a href="#" class="pt-btn pt-btn--primary">Start a Conversation</a>
    </div>
  </section>

  <!-- ==========================================
       Footer
       ========================================== -->
  <footer class="pt-footer">
    <p>
      Built with the patience of a Pointillist.
      Inspired by <a href="#">Georges Seurat</a> &amp; <a href="#">Paul Signac</a>.
    </p>
    <p style="margin-top: 0.5rem; opacity: 0.6;">
      &copy; 2026 Pointillisme. Every dot matters.
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use CSS `radial-gradient` for dot patterns**: Layering multiple radial-gradient backgrounds with offset positions is the most performant way to create dense, multi-colored dot fields without JavaScript or image assets
- **Test performance with dense dot backgrounds**: Multiple layered radial-gradients can impact rendering performance on low-powered devices; reduce the number of gradient layers or increase dot spacing for mobile breakpoints
- **Leverage SVG filters for halftone image effects**: CSS-only halftone overlays work for subtle treatments, but SVG `<filter>` elements (using `feTurbulence` and `feComponentTransfer`) produce more convincing Pointillist transformations of photographs
- **Provide prefers-reduced-motion alternatives**: The shimmer and pulse animations are subtle, but always wrap them in a `@media (prefers-reduced-motion: no-preference)` block and provide a static fallback for users who disable motion
- **Scale dot size relative to viewport**: Use `clamp()` or viewport-relative units for dot sizes in background patterns so the stippled effect reads well on both mobile screens and large desktop monitors
- **Use `mix-blend-mode` for color interaction**: Overlapping translucent dot layers with `mix-blend-mode: multiply` or `screen` can simulate the optical color mixing effect more faithfully than simple opacity stacking
- **Keep body text on solid white or cream surfaces**: Even though the dot texture defines the aesthetic, extended reading passages must sit on clean, un-stippled backgrounds for accessibility and readability
- **Consider canvas-based rendering for complex scenes**: For hero illustrations or interactive Pointillist artworks, use HTML `<canvas>` with JavaScript to place and animate thousands of individual colored dots -- CSS patterns are ideal for backgrounds, but programmatic rendering unlocks true per-dot control
