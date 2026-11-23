# Generative Pattern Design Reference

## Overview

Generative Pattern is a design aesthetic rooted in the marriage of algorithm and art, where code becomes the primary creative instrument and mathematical structures become visual beauty. Rather than hand-drawing every element, designers define rules, parameters, and systems -- then let computation produce intricate, often mesmerizing pattern work that would be impossible to create manually. The aesthetic draws from procedural geometry (Voronoi tessellations, Delaunay triangulations, fractal subdivisions), noise functions (Perlin noise, Simplex noise, fractal Brownian motion), and mathematical constants (the golden ratio, Fibonacci spirals, Lissajous curves) to generate compositions that feel simultaneously organic and precisely engineered.

The movement traces its lineage from early computer art pioneers like Vera Molnar and Manfred Mohr in the 1960s and 1970s, through the Processing creative coding environment created by Casey Reas and Ben Fry, to modern web-native tools like p5.js, Three.js, and GLSL shaders. In web design, the Generative Pattern aesthetic manifests as backgrounds built from real-time procedural textures, hero sections powered by canvas or SVG animations, data-driven visualizations that double as decoration, and UI elements whose surfaces shimmer with algorithmic detail. The look is unmistakably computational -- viewers can sense that a system produced the imagery -- yet it avoids the sterility of spreadsheets or dashboards by channeling the mathematics into genuinely beautiful, often hypnotic results.

Color palettes typically favor dark, moody backgrounds (deep navy, charcoal, near-black) that allow bright, luminous strokes and fills to glow like bioluminescent organisms or neon circuitry. Typography leans heavily on monospace and geometric sans-serif families, reinforcing the code-as-craft philosophy. Layouts tend toward generous negative space that lets the generative artwork breathe, with UI elements kept minimal and semi-transparent so as not to compete with the pattern layer. The overall impression is one of controlled complexity -- a design that reveals deeper structure the longer you look at it, where randomness is always bounded by elegant rules.

---

## Visual Characteristics

### Core Design Traits

- **Algorithm-driven pattern surfaces** -- backgrounds and hero areas filled with procedural geometry such as Voronoi cells, Delaunay meshes, flow fields, and fractal subdivisions rather than static images
- **Code-visible aesthetic** -- visual references to the underlying code, including monospace typography, terminal-inspired UI elements, and syntax-highlighted decorative snippets
- **Dark canvas with luminous strokes** -- predominantly dark backgrounds (near-black, deep navy, dark graphite) with bright, thin lines and fills that create a glowing, phosphorescent quality
- **Parametric variation** -- elements that shift subtly on each page load or in response to interaction, reinforcing the idea that the design is generated, not fixed
- **Mathematical precision** -- grids derived from golden ratios, Fibonacci sequences, or other mathematical constants; nothing is placed arbitrarily
- **Particle systems and flow fields** -- thousands of tiny elements (dots, short line segments) that follow vector forces, accumulating into organic density maps and directional textures
- **Noise-based textures** -- Perlin noise, Simplex noise, and fractal Brownian motion rendered as terrain-like gradients, cloud formations, or topographic contour lines
- **SVG and canvas rendering** -- heavy reliance on scalable vector graphics and HTML canvas for resolution-independent pattern output
- **Semi-transparent layering** -- multiple pattern layers stacked at low opacity to create depth and visual complexity without overwhelming the viewer
- **Recursive and self-similar structures** -- fractal motifs where the same geometric logic repeats at multiple scales, from macro layout down to micro texture
- **Subtle animation** -- slow, continuous motion (rotating nodes, drifting particles, undulating waves) that makes the interface feel alive without being distracting
- **Data-informed decoration** -- patterns that respond to real data inputs (time of day, cursor position, scroll depth) so the visual output is never purely arbitrary

### Design Principles

- **System over specimen** -- design the generative rules and parameters, not individual visual outputs; the system produces the art
- **Controlled randomness** -- every random element operates within defined boundaries; stochastic processes are seeded and constrained to maintain aesthetic coherence
- **Emergent complexity** -- simple rules, when repeated and layered, produce visually rich results that exceed the apparent complexity of the underlying code
- **Mathematical beauty** -- derive proportions, spacing, and relationships from mathematical constants and functions rather than subjective guesswork
- **Transparency of process** -- the computational origin of the visuals is celebrated, not hidden; viewers should sense that code created what they see
- **Performance as constraint** -- generative visuals must run smoothly at 60fps; optimization is a design requirement, not an afterthought
- **Interactivity as dialogue** -- user input (mouse movement, scroll, click) should feed back into the generative system, making the pattern responsive and alive
- **Resolution independence** -- prefer SVG and procedural rendering over raster images so patterns remain sharp at any display density

---

## Color Palette

### Generative Pattern Core Palette

The Generative Pattern palette is built around a dark, immersive canvas punctuated by luminous accent colors. The dark base allows procedural strokes and fills to glow with intensity, evoking the look of oscilloscope traces, neon circuitry, or bioluminescent organisms. Accent colors are drawn from a spectrum that suggests energy, data flow, and mathematical precision -- electric cyans, algorithmic greens, signal magentas, and warm ambers.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Void Black** | `#0A0A0F` | Primary background, deepest canvas layer |
| **Code Dark** | `#12131A` | Card backgrounds, elevated surfaces |
| **Grid Gray** | `#1E2030` | Secondary backgrounds, panel surfaces |
| **Wire Gray** | `#2A2D42` | Borders, subtle dividers, inactive states |
| **Node Gray** | `#4A4E6A` | Muted text, disabled elements, grid lines |
| **Signal Silver** | `#8B90A8` | Secondary text, captions, metadata |
| **Light Mesh** | `#C8CCE0` | Primary body text on dark backgrounds |
| **White Glow** | `#F0F2FF` | Headings, high-emphasis text, bright accents |
| **Circuit Cyan** | `#00E5FF` | Primary accent, links, interactive highlights |
| **Matrix Green** | `#39FF85` | Success states, active indicators, growth data |
| **Fractal Magenta** | `#E040FB` | Secondary accent, creative emphasis, alerts |
| **Noise Amber** | `#FFB300` | Warnings, tertiary accent, warm highlights |
| **Wave Blue** | `#448AFF` | Information states, secondary links, cool accents |
| **Perlin Violet** | `#7C4DFF` | Decorative strokes, gradient endpoints, subtle flair |
| **Glow White** | `#FFFFFF` | Sparingly used for maximum-emphasis glow effects |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --gp-bg-void: #0a0a0f;
  --gp-bg-code: #12131a;
  --gp-bg-grid: #1e2030;
  --gp-bg-wire: #2a2d42;

  /* Text */
  --gp-text-muted: #4a4e6a;
  --gp-text-secondary: #8b90a8;
  --gp-text-primary: #c8cce0;
  --gp-text-heading: #f0f2ff;

  /* Accents */
  --gp-cyan: #00e5ff;
  --gp-cyan-dim: rgba(0, 229, 255, 0.15);
  --gp-green: #39ff85;
  --gp-green-dim: rgba(57, 255, 133, 0.15);
  --gp-magenta: #e040fb;
  --gp-magenta-dim: rgba(224, 64, 251, 0.15);
  --gp-amber: #ffb300;
  --gp-amber-dim: rgba(255, 179, 0, 0.15);
  --gp-blue: #448aff;
  --gp-blue-dim: rgba(68, 138, 255, 0.15);
  --gp-violet: #7c4dff;
  --gp-violet-dim: rgba(124, 77, 255, 0.15);

  /* Utilities */
  --gp-glow-white: #ffffff;
  --gp-border: #2a2d42;
  --gp-border-accent: rgba(0, 229, 255, 0.3);

  /* Radii */
  --gp-radius-sm: 4px;
  --gp-radius-md: 8px;
  --gp-radius-lg: 16px;

  /* Shadows / Glows */
  --gp-glow-cyan: 0 0 20px rgba(0, 229, 255, 0.25);
  --gp-glow-magenta: 0 0 20px rgba(224, 64, 251, 0.25);
  --gp-glow-green: 0 0 20px rgba(57, 255, 133, 0.25);
}
```

---

## Typography

### Typeface Characteristics

Generative Pattern typography is:

- **Monospace-forward** -- the primary identity typeface is monospace, referencing the code that drives the generative systems; it signals precision, computation, and the terminal environment
- **Geometric sans-serif for hierarchy** -- headings and display text use clean geometric sans-serifs that complement the mathematical nature of the patterns
- **Lightweight for body** -- body text uses regular or light weights to avoid visual competition with the pattern layer
- **Tight letter-spacing for headings** -- condensed tracking gives headlines a dense, data-packed appearance
- **Code-styled accents** -- inline code snippets, parameter values, and technical labels use monospace styling even within prose contexts

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **JetBrains Mono** | Monospace, code-optimized | Code snippets, labels, terminal UI, logo type |
| **Fira Code** | Monospace with ligatures | Code displays, decorative monospace headings |
| **Space Mono** | Expressive monospace | Display headings, hero text, brand identity |
| **IBM Plex Mono** | Corporate monospace | Body text in monospace contexts, data tables |
| **Space Grotesk** | Geometric sans-serif | Headings, display text, navigation labels |
| **Inter** | Humanist sans, screen-optimized | Body text, UI elements, long-form reading |
| **Outfit** | Geometric sans-serif | Headings, subheadings, button labels |
| **DM Sans** | Clean geometric sans | Secondary body text, captions |
| **Syne** | Variable geometric display | Hero text, experimental headings |
| **Overpass Mono** | Open-source monospace | Secondary monospace, metadata, timestamps |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Space Mono** (700) | **Inter** (400) | Classic generative: code meets clarity |
| **Space Grotesk** (700) | **JetBrains Mono** (400) | Technical sophistication with readable code |
| **Syne** (700) | **IBM Plex Mono** (400) | Experimental display with corporate precision |
| **Outfit** (700) | **Inter** (400) | Clean geometric with high legibility |
| **Fira Code** (700) | **DM Sans** (400) | All-code identity with soft sans body |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--gp-text-heading);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Display / Hero text */
.gp-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  background: linear-gradient(135deg, var(--gp-cyan), var(--gp-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Body text */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--gp-text-primary);
}

/* Code / Monospace */
.gp-mono, code, pre {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Labels */
.gp-label {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gp-cyan);
}

/* Caption */
.gp-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--gp-text-secondary);
  line-height: 1.5;
}
```

---

## Layout Principles

- **Dark immersive canvas** -- the page background is always dark (near-black or deep navy) to maximize the luminous impact of generative pattern overlays
- **Full-bleed pattern layers** -- generative backgrounds extend edge-to-edge behind content, rendered via canvas, SVG, or CSS, creating an immersive environment
- **Generous negative space** -- content sections float within ample padding so the underlying pattern remains visible and the interface does not feel cluttered
- **Layered z-index architecture** -- pattern canvas sits at z-index 0, a subtle scrim or gradient overlay sits above it for readability, and content sits on top; this three-layer stack is fundamental
- **Grid-based content areas** -- while the pattern layer is organic, content is organized on strict grids (12-column or modular) to create tension between algorithmic chaos and structural order
- **Max-width containers** -- content constrained to 1000-1200px for readability, centered within the full-bleed pattern canvas
- **Semi-transparent cards** -- content cards use translucent dark backgrounds with subtle border accents, allowing the generative pattern to bleed through slightly
- **Responsive pattern scaling** -- generative canvas elements scale or regenerate at breakpoints; particle counts may reduce on smaller viewports for performance
- **Asymmetric hero compositions** -- hero sections split between large generative artwork (canvas/SVG) on one side and text content on the other, or use a full-bleed pattern behind centered text
- **Monospace data strips** -- thin horizontal bands of monospace text showing parameters, coordinates, or pseudo-code serve as decorative section dividers
- **Sticky or floating navigation** -- navigation overlays the pattern canvas with a semi-transparent dark backdrop that blurs the pattern beneath (backdrop-filter)
- **Scroll-linked interactivity** -- pattern parameters shift as the user scrolls, creating a sense of exploration and discovery as different sections reveal different algorithmic states

---

## CSS / Design Techniques

### Generative Card Component

```css
.gp-card {
  background: rgba(18, 19, 26, 0.85);
  border: 1px solid var(--gp-border);
  border-radius: var(--gp-radius-md);
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.gp-card:hover {
  border-color: var(--gp-cyan);
  box-shadow: var(--gp-glow-cyan);
}

/* Decorative gradient line at top */
.gp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gp-cyan), var(--gp-magenta), var(--gp-violet));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gp-card:hover::before {
  opacity: 1;
}

.gp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

### Generative Button

```css
.gp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--gp-cyan);
  border: 1px solid var(--gp-cyan);
  border-radius: var(--gp-radius-sm);
  padding: 12px 28px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.gp-button:hover {
  background: var(--gp-cyan-dim);
  box-shadow: var(--gp-glow-cyan);
  color: var(--gp-glow-white);
}

/* Filled variant */
.gp-button--filled {
  background: var(--gp-cyan);
  color: var(--gp-bg-void);
  border-color: var(--gp-cyan);
}

.gp-button--filled:hover {
  background: #33ebff;
  box-shadow: var(--gp-glow-cyan);
}

/* Magenta variant */
.gp-button--magenta {
  color: var(--gp-magenta);
  border-color: var(--gp-magenta);
}

.gp-button--magenta:hover {
  background: var(--gp-magenta-dim);
  box-shadow: var(--gp-glow-magenta);
  color: var(--gp-glow-white);
}

/* Scan-line animation on hover */
.gp-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.gp-button:hover::after {
  left: 100%;
}
```

### Navigation Bar

```css
.gp-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--gp-border);
}

.gp-nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--gp-text-heading);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.gp-nav__logo-icon {
  width: 28px;
  height: 28px;
  border: 2px solid var(--gp-cyan);
  border-radius: 50%;
  position: relative;
}

.gp-nav__logo-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--gp-cyan);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.gp-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.gp-nav__links a {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--gp-text-secondary);
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.2s ease;
  position: relative;
}

.gp-nav__links a:hover {
  color: var(--gp-cyan);
}

.gp-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gp-cyan);
  transition: width 0.3s ease;
}

.gp-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.gp-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 40px 80px;
  overflow: hidden;
}

.gp-hero__canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.gp-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 0%, var(--gp-bg-void) 70%);
  z-index: 1;
}

.gp-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
}

.gp-hero__content h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.gp-hero__content p {
  font-size: 1.15rem;
  color: var(--gp-text-secondary);
  margin-bottom: 2.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.gp-hero__meta {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 3rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--gp-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.gp-hero__meta span {
  color: var(--gp-cyan);
}

@media (max-width: 768px) {
  .gp-hero {
    padding: 100px 24px 60px;
  }

  .gp-hero__meta {
    flex-direction: column;
    gap: 8px;
  }
}
```

### Generative Canvas Background (JavaScript)

```css
/* Container for the canvas element */
.gp-canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.gp-canvas-container canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* Optional CSS-only fallback pattern */
.gp-pattern-fallback {
  background-image:
    radial-gradient(circle at 20% 50%, var(--gp-cyan-dim) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--gp-magenta-dim) 0%, transparent 50%),
    radial-gradient(circle at 50% 80%, var(--gp-violet-dim) 0%, transparent 50%);
  background-color: var(--gp-bg-void);
}
```

### Parameter Display Strip

```css
.gp-param-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 12px 40px;
  background: var(--gp-bg-code);
  border-top: 1px solid var(--gp-border);
  border-bottom: 1px solid var(--gp-border);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--gp-text-muted);
  letter-spacing: 0.04em;
  overflow-x: auto;
  white-space: nowrap;
}

.gp-param-strip__item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.gp-param-strip__key {
  color: var(--gp-text-secondary);
}

.gp-param-strip__value {
  color: var(--gp-cyan);
}

.gp-param-strip__separator {
  color: var(--gp-text-muted);
  opacity: 0.4;
}
```

### Code Block Display

```css
.gp-code-block {
  background: var(--gp-bg-code);
  border: 1px solid var(--gp-border);
  border-radius: var(--gp-radius-md);
  padding: 24px;
  overflow-x: auto;
  position: relative;
}

.gp-code-block::before {
  content: attr(data-language);
  position: absolute;
  top: 8px;
  right: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--gp-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.gp-code-block code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--gp-text-primary);
}

/* Syntax highlighting classes */
.gp-code-block .keyword { color: var(--gp-magenta); }
.gp-code-block .function { color: var(--gp-cyan); }
.gp-code-block .string { color: var(--gp-green); }
.gp-code-block .number { color: var(--gp-amber); }
.gp-code-block .comment { color: var(--gp-text-muted); font-style: italic; }
```

### Section Divider

```css
.gp-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gp-border-accent),
    var(--gp-cyan),
    var(--gp-border-accent),
    transparent
  );
  margin: 80px auto;
  max-width: 600px;
}
```

---

## Design Do's and Don'ts

### Do

- **Use dark backgrounds** that allow generative patterns and glowing strokes to stand out with maximum contrast
- **Embrace monospace typography** for labels, metadata, and brand identity to reinforce the code-as-design philosophy
- **Let patterns breathe** with generous padding and negative space so the algorithmic artwork is visible and impactful
- **Implement real generative logic** using canvas, SVG, or CSS; use actual noise functions, particle systems, or tessellation algorithms rather than static images
- **Add subtle, continuous animation** (drifting particles, rotating nodes, undulating waves) to convey that the system is alive and running
- **Use semi-transparent card surfaces** that allow the underlying pattern to show through, integrating content and decoration
- **Provide interaction hooks** where mouse movement, scroll position, or clicks influence the generative parameters
- **Maintain a luminous, glowing color vocabulary** -- bright cyans, magentas, and greens on dark grounds create the signature look

### Don't

- **Use busy or cluttered layouts** -- the pattern layer provides visual richness, so UI elements must remain clean and minimal
- **Rely on static bitmap backgrounds** as a substitute for actual generative rendering; the aesthetic demands computational honesty
- **Ignore performance** -- unoptimized canvas rendering, excessive particle counts, or main-thread-blocking calculations will ruin the user experience
- **Use light/white backgrounds** for primary surfaces; the dark canvas is fundamental to the aesthetic's visual identity
- **Over-animate UI elements** -- buttons, cards, and navigation should have restrained transitions; only the pattern layer moves dramatically
- **Mix too many accent colors simultaneously** -- pick two or three from the palette per section; more creates visual noise rather than generative elegance
- **Forget accessibility** -- ensure sufficient contrast ratios for text over dark backgrounds and provide reduced-motion alternatives for users who prefer less animation
- **Let the pattern overwhelm content** -- always provide a readability scrim or overlay between the generative canvas and text content

---

## Related Aesthetics

| Aesthetic | Relationship to Generative Pattern |
|-----------|-----------------------------------|
| **Cyberpunk** | Shares the dark backgrounds and neon accents but emphasizes dystopian narrative over mathematical elegance |
| **Dark Mode Neon** | Similar dark-canvas-with-bright-accents palette; Generative Pattern adds algorithmic complexity and code-driven visuals |
| **Glassmorphism** | Shares the translucent, layered surface treatment; Generative Pattern uses it over procedural backgrounds rather than blurred photography |
| **Laser Grid** | Shares the geometric precision and luminous line work; Laser Grid is more 1980s retro-futurist, Generative Pattern is contemporary and mathematical |
| **Flat Design** | Opposes Generative Pattern's layered depth and textural complexity but shares the emphasis on geometric forms |
| **International Typographic Style** | Shares the grid discipline and systematic approach; Generative Pattern adds computation, animation, and dark-mode aesthetics |
| **Bauhaus** | Shares the mathematical and geometric foundations; Bauhaus is static and primary-colored, Generative Pattern is dynamic and luminous |
| **Cyberminimalism** | Both embrace dark themes and technical aesthetics; Cyberminimalism strips further while Generative Pattern adds procedural richness |
| **Aurora Gradient** | Shares flowing, organic color gradients; Aurora is more ambient and soft, Generative Pattern is more structured and algorithmic |
| **8-Bit** | Both reference computational origins; 8-Bit celebrates lo-fi pixel constraints while Generative Pattern celebrates hi-fi algorithmic possibility |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generative Pattern</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --gp-bg-void: #0a0a0f;
      --gp-bg-code: #12131a;
      --gp-bg-grid: #1e2030;
      --gp-bg-wire: #2a2d42;
      --gp-text-muted: #4a4e6a;
      --gp-text-secondary: #8b90a8;
      --gp-text-primary: #c8cce0;
      --gp-text-heading: #f0f2ff;
      --gp-cyan: #00e5ff;
      --gp-cyan-dim: rgba(0, 229, 255, 0.15);
      --gp-green: #39ff85;
      --gp-green-dim: rgba(57, 255, 133, 0.15);
      --gp-magenta: #e040fb;
      --gp-magenta-dim: rgba(224, 64, 251, 0.15);
      --gp-amber: #ffb300;
      --gp-violet: #7c4dff;
      --gp-violet-dim: rgba(124, 77, 255, 0.15);
      --gp-border: #2a2d42;
      --gp-border-accent: rgba(0, 229, 255, 0.3);
      --gp-radius-sm: 4px;
      --gp-radius-md: 8px;
      --gp-glow-cyan: 0 0 20px rgba(0, 229, 255, 0.25);
      --gp-glow-magenta: 0 0 20px rgba(224, 64, 251, 0.25);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--gp-bg-void);
      color: var(--gp-text-primary);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1, h2, h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      color: var(--gp-text-heading);
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    code, .mono {
      font-family: 'JetBrains Mono', monospace;
    }

    /* ===================== */
    /*     CANVAS LAYER      */
    /* ===================== */
    #gen-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    /* ===================== */
    /*      NAVIGATION       */
    /* ===================== */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 40px;
      background: rgba(10, 10, 15, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--gp-border);
    }

    nav .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 1rem;
      color: var(--gp-text-heading);
      text-decoration: none;
    }

    nav .logo-node {
      width: 24px;
      height: 24px;
      border: 2px solid var(--gp-cyan);
      border-radius: 50%;
      position: relative;
    }

    nav .logo-node::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      background: var(--gp-cyan);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    nav ul {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    nav ul a {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--gp-text-secondary);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      transition: color 0.2s;
    }

    nav ul a:hover {
      color: var(--gp-cyan);
    }

    /* ===================== */
    /*    PARAMETER STRIP    */
    /* ===================== */
    .param-strip {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 10px 40px;
      background: var(--gp-bg-code);
      border-bottom: 1px solid var(--gp-border);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: var(--gp-text-muted);
      letter-spacing: 0.03em;
      margin-top: 57px;
    }

    .param-strip .val { color: var(--gp-cyan); }
    .param-strip .sep { opacity: 0.3; }

    /* ===================== */
    /*         HERO          */
    /* ===================== */
    .hero {
      position: relative;
      z-index: 1;
      min-height: 92vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 40px;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at center, transparent 0%, var(--gp-bg-void) 65%);
      z-index: 0;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 740px;
    }

    .hero-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gp-cyan);
      margin-bottom: 1.5rem;
      display: block;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      margin-bottom: 1.5rem;
      line-height: 1.08;
    }

    .hero h1 .gradient-text {
      background: linear-gradient(135deg, var(--gp-cyan), var(--gp-magenta));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero p {
      font-size: 1.1rem;
      color: var(--gp-text-secondary);
      max-width: 520px;
      margin: 0 auto 2.5rem;
      line-height: 1.7;
    }

    .hero-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 28px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 500;
      font-size: 0.78rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: var(--gp-radius-sm);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: var(--gp-cyan);
      color: var(--gp-bg-void);
      border: 1px solid var(--gp-cyan);
    }

    .btn-primary:hover {
      background: #33ebff;
      box-shadow: var(--gp-glow-cyan);
    }

    .btn-outline {
      background: transparent;
      color: var(--gp-text-primary);
      border: 1px solid var(--gp-border);
    }

    .btn-outline:hover {
      border-color: var(--gp-cyan);
      color: var(--gp-cyan);
    }

    .hero-meta {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin-top: 3.5rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      color: var(--gp-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .hero-meta span { color: var(--gp-cyan); }

    /* ===================== */
    /*     SECTION BASE      */
    /* ===================== */
    .section {
      position: relative;
      z-index: 2;
      padding: 100px 40px;
    }

    .section-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gp-cyan);
      margin-bottom: 0.75rem;
      display: block;
    }

    .section h2 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      margin-bottom: 1rem;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--gp-text-secondary);
      max-width: 560px;
      margin-bottom: 3rem;
      line-height: 1.7;
    }

    /* ===================== */
    /*       FEATURES        */
    /* ===================== */
    .features-bg {
      background: var(--gp-bg-code);
      border-top: 1px solid var(--gp-border);
      border-bottom: 1px solid var(--gp-border);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .feature-card {
      background: rgba(30, 32, 48, 0.6);
      border: 1px solid var(--gp-border);
      border-radius: var(--gp-radius-md);
      padding: 28px;
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    .feature-card:hover {
      border-color: var(--gp-cyan);
      box-shadow: var(--gp-glow-cyan);
    }

    .feature-card .icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--gp-radius-sm);
      margin-bottom: 16px;
      font-size: 1.2rem;
    }

    .icon-cyan { background: var(--gp-cyan-dim); color: var(--gp-cyan); }
    .icon-magenta { background: var(--gp-magenta-dim); color: var(--gp-magenta); }
    .icon-green { background: var(--gp-green-dim); color: var(--gp-green); }
    .icon-violet { background: var(--gp-violet-dim); color: var(--gp-violet); }

    .feature-card h3 {
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
    }

    .feature-card p {
      font-size: 0.9rem;
      color: var(--gp-text-secondary);
      line-height: 1.6;
    }

    /* ===================== */
    /*      CODE BLOCK       */
    /* ===================== */
    .code-showcase {
      background: var(--gp-bg-code);
      border: 1px solid var(--gp-border);
      border-radius: var(--gp-radius-md);
      padding: 28px;
      overflow-x: auto;
      margin-top: 2rem;
      position: relative;
    }

    .code-showcase::before {
      content: 'p5.js';
      position: absolute;
      top: 10px;
      right: 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.6rem;
      color: var(--gp-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .code-showcase pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      line-height: 1.7;
      color: var(--gp-text-primary);
    }

    .code-showcase .kw { color: var(--gp-magenta); }
    .code-showcase .fn { color: var(--gp-cyan); }
    .code-showcase .str { color: var(--gp-green); }
    .code-showcase .num { color: var(--gp-amber); }
    .code-showcase .cmt { color: var(--gp-text-muted); font-style: italic; }

    /* ===================== */
    /*    STATEMENT / CTA    */
    /* ===================== */
    .statement {
      text-align: center;
      padding: 100px 40px;
      position: relative;
      z-index: 2;
      background: linear-gradient(180deg, var(--gp-bg-void) 0%, var(--gp-bg-code) 50%, var(--gp-bg-void) 100%);
    }

    .statement h2 {
      font-size: clamp(1.8rem, 4vw, 3rem);
      margin-bottom: 1.5rem;
    }

    .statement p {
      font-size: 1.1rem;
      color: var(--gp-text-secondary);
      max-width: 500px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }

    /* ===================== */
    /*  DIVIDER / SEPARATOR  */
    /* ===================== */
    .gp-divider {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gp-border-accent), var(--gp-cyan), var(--gp-border-accent), transparent);
      max-width: 500px;
      margin: 0 auto;
    }

    /* ===================== */
    /*        FOOTER         */
    /* ===================== */
    footer {
      position: relative;
      z-index: 2;
      background: var(--gp-bg-code);
      border-top: 1px solid var(--gp-border);
      padding: 48px 40px;
    }

    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .footer-brand {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--gp-text-heading);
    }

    .footer-links {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    .footer-links a {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--gp-text-secondary);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      transition: color 0.2s;
    }

    .footer-links a:hover { color: var(--gp-cyan); }

    .footer-copy {
      width: 100%;
      text-align: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid var(--gp-border);
      font-size: 0.75rem;
      color: var(--gp-text-muted);
    }

    /* ===================== */
    /*      RESPONSIVE       */
    /* ===================== */
    @media (max-width: 768px) {
      nav { padding: 14px 20px; }
      nav ul { gap: 16px; }
      .param-strip { gap: 12px; font-size: 0.58rem; padding: 8px 20px; }
      .hero { padding: 60px 20px; }
      .hero-meta { flex-direction: column; gap: 6px; }
      .section { padding: 60px 20px; }
      .footer-inner { flex-direction: column; text-align: center; }
    }

    /* ===================== */
    /*   REDUCED MOTION      */
    /* ===================== */
    @media (prefers-reduced-motion: reduce) {
      #gen-canvas { display: none; }
      * { animation-duration: 0s !important; transition-duration: 0s !important; }
    }
  </style>
</head>
<body>

  <!-- Generative Canvas Background -->
  <canvas id="gen-canvas"></canvas>

  <!-- Navigation -->
  <nav>
    <a href="#" class="logo">
      <div class="logo-node"></div>
      genpattern_
    </a>
    <ul>
      <li><a href="#algorithms">Algorithms</a></li>
      <li><a href="#patterns">Patterns</a></li>
      <li><a href="#code">Code</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>

  <!-- Parameter Strip -->
  <div class="param-strip">
    <span>noise_scale: <span class="val">0.005</span></span>
    <span class="sep">|</span>
    <span>particles: <span class="val">2048</span></span>
    <span class="sep">|</span>
    <span>octaves: <span class="val">4</span></span>
    <span class="sep">|</span>
    <span>lacunarity: <span class="val">2.0</span></span>
    <span class="sep">|</span>
    <span>seed: <span class="val" id="seed-val">--</span></span>
  </div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-label">// algorithm-driven design</span>
      <h1>Code Creates <span class="gradient-text">Pattern</span></h1>
      <p>Procedural geometry, noise functions, and mathematical beauty -- where algorithms become the artist and rules become the aesthetic.</p>
      <div class="hero-buttons">
        <a href="#patterns" class="btn btn-primary">Explore Patterns</a>
        <a href="#code" class="btn btn-outline">View Source</a>
      </div>
      <div class="hero-meta">
        <div>mode: <span>flow_field</span></div>
        <div>resolution: <span>2048x2048</span></div>
        <div>fps: <span>60</span></div>
      </div>
    </div>
  </section>

  <!-- Algorithms Section -->
  <section class="section features-bg" id="algorithms">
    <div class="section-inner">
      <span class="section-label">// core algorithms</span>
      <h2>Generative Foundations</h2>
      <p class="section-desc">Every pattern begins with a mathematical primitive -- noise, recursion, tessellation, or particle physics -- transformed into visual form through code.</p>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon icon-cyan">&#x25CB;</div>
          <h3>Flow Fields</h3>
          <p>Particles follow vector forces derived from Perlin noise, their trails accumulating into organic density maps with turbulent and calm zones.</p>
        </div>
        <div class="feature-card">
          <div class="icon icon-magenta">&#x25B3;</div>
          <h3>Voronoi Tessellation</h3>
          <p>Space partitioned into cells based on proximity to seed points, creating patterns that echo crystal growth, cracked earth, and cellular biology.</p>
        </div>
        <div class="feature-card">
          <div class="icon icon-green">&#x25A1;</div>
          <h3>Fractal Recursion</h3>
          <p>Self-similar structures generated through recursive subdivision -- branching trees, Sierpinski triangles, and Mandelbrot explorations at infinite scale.</p>
        </div>
        <div class="feature-card">
          <div class="icon icon-violet">&#x2662;</div>
          <h3>Circle Packing</h3>
          <p>Stochastic placement of non-overlapping circles that fill a space, balancing density with emptiness in compositions governed by collision detection.</p>
        </div>
      </div>
    </div>
  </section>

  <hr class="gp-divider">

  <!-- Code Showcase Section -->
  <section class="section" id="code">
    <div class="section-inner">
      <span class="section-label">// source</span>
      <h2>The Algorithm Is the Art</h2>
      <p class="section-desc">A simple flow field in p5.js. A few lines of code produce infinite visual variation through noise-driven particle movement.</p>
      <div class="code-showcase">
        <pre><span class="kw">let</span> particles = [];
<span class="kw">const</span> COUNT = <span class="num">2048</span>;
<span class="kw">const</span> SCALE = <span class="num">0.005</span>;

<span class="kw">function</span> <span class="fn">setup</span>() {
  <span class="fn">createCanvas</span>(<span class="fn">windowWidth</span>, <span class="fn">windowHeight</span>);
  <span class="fn">background</span>(<span class="num">10</span>, <span class="num">10</span>, <span class="num">15</span>);
  <span class="cmt">// Initialize particles at random positions</span>
  <span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i < COUNT; i++) {
    particles.<span class="fn">push</span>(<span class="fn">createVector</span>(
      <span class="fn">random</span>(<span class="fn">width</span>),
      <span class="fn">random</span>(<span class="fn">height</span>)
    ));
  }
}

<span class="kw">function</span> <span class="fn">draw</span>() {
  <span class="cmt">// Semi-transparent overlay for trail effect</span>
  <span class="fn">fill</span>(<span class="num">10</span>, <span class="num">10</span>, <span class="num">15</span>, <span class="num">5</span>);
  <span class="fn">noStroke</span>();
  <span class="fn">rect</span>(<span class="num">0</span>, <span class="num">0</span>, <span class="fn">width</span>, <span class="fn">height</span>);

  particles.<span class="fn">forEach</span>(p => {
    <span class="kw">let</span> angle = <span class="fn">noise</span>(p.x * SCALE, p.y * SCALE) * <span class="fn">TWO_PI</span> * <span class="num">2</span>;
    p.x += <span class="fn">cos</span>(angle);
    p.y += <span class="fn">sin</span>(angle);

    <span class="fn">stroke</span>(<span class="num">0</span>, <span class="num">229</span>, <span class="num">255</span>, <span class="num">30</span>);
    <span class="fn">point</span>(p.x, p.y);

    <span class="cmt">// Wrap around edges</span>
    <span class="kw">if</span> (p.x > <span class="fn">width</span>) p.x = <span class="num">0</span>;
    <span class="kw">if</span> (p.x < <span class="num">0</span>) p.x = <span class="fn">width</span>;
    <span class="kw">if</span> (p.y > <span class="fn">height</span>) p.y = <span class="num">0</span>;
    <span class="kw">if</span> (p.y < <span class="num">0</span>) p.y = <span class="fn">height</span>;
  });
}</pre>
      </div>
    </div>
  </section>

  <!-- Statement / CTA -->
  <section class="statement" id="about">
    <span class="section-label">// manifest</span>
    <h2>Rules Create Freedom</h2>
    <p>Define the system. Set the parameters. Let the algorithm run. Beauty emerges not from control, but from the elegant boundaries we give to chaos.</p>
    <a href="#" class="btn btn-primary">Generate New Seed</a>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">genpattern_</div>
      <ul class="footer-links">
        <li><a href="#">Repository</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Examples</a></li>
        <li><a href="#">License</a></li>
      </ul>
      <div class="footer-copy">
        Built with algorithms. Rendered in real time. Seed: <span class="mono" id="footer-seed">--</span>
      </div>
    </div>
  </footer>

  <!-- Generative Background Script -->
  <script>
    // Simple flow-field particle system for the background canvas
    (function() {
      const canvas = document.getElementById('gen-canvas');
      const ctx = canvas.getContext('2d');
      let w, h, particles, cols, rows, field;
      const PARTICLE_COUNT = 800;
      const SCALE = 20;
      const SPEED = 1.2;

      // Simple Perlin-like noise using sine combinations
      function pseudoNoise(x, y, seed) {
        return (
          Math.sin(x * 0.01 + seed) * Math.cos(y * 0.012 + seed * 0.7) +
          Math.sin(x * 0.023 - y * 0.018 + seed * 1.3) * 0.5 +
          Math.cos(x * 0.009 + y * 0.025 + seed * 0.4) * 0.3
        );
      }

      const seed = Math.random() * 1000;

      // Display seed values
      document.getElementById('seed-val').textContent = seed.toFixed(2);
      document.getElementById('footer-seed').textContent = seed.toFixed(2);

      function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        cols = Math.ceil(w / SCALE);
        rows = Math.ceil(h / SCALE);
        initField();
      }

      function initField() {
        field = [];
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const angle = pseudoNoise(x, y, seed) * Math.PI * 2;
            field.push(angle);
          }
        }
      }

      function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            prevX: 0,
            prevY: 0,
            speed: SPEED + Math.random() * 0.5,
            hue: Math.random() > 0.5 ? 187 : 292
          });
          particles[i].prevX = particles[i].x;
          particles[i].prevY = particles[i].y;
        }
      }

      function draw() {
        // Slight fade for trails
        ctx.fillStyle = 'rgba(10, 10, 15, 0.04)';
        ctx.fillRect(0, 0, w, h);

        particles.forEach(p => {
          const col = Math.floor(p.x / SCALE);
          const row = Math.floor(p.y / SCALE);
          const idx = row * cols + col;

          if (idx >= 0 && idx < field.length) {
            const angle = field[idx];
            p.prevX = p.x;
            p.prevY = p.y;
            p.x += Math.cos(angle) * p.speed;
            p.y += Math.sin(angle) * p.speed;

            const alpha = 0.12;
            ctx.strokeStyle = p.hue === 187
              ? `rgba(0, 229, 255, ${alpha})`
              : `rgba(224, 64, 251, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.prevX, p.prevY);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }

          // Wrap edges
          if (p.x < 0) { p.x = w; p.prevX = w; }
          if (p.x > w) { p.x = 0; p.prevX = 0; }
          if (p.y < 0) { p.y = h; p.prevY = h; }
          if (p.y > h) { p.y = 0; p.prevY = 0; }
        });

        requestAnimationFrame(draw);
      }

      window.addEventListener('resize', resize);
      resize();
      initParticles();

      // Clear canvas once before starting
      ctx.fillStyle = 'rgba(10, 10, 15, 1)';
      ctx.fillRect(0, 0, w, h);

      draw();
    })();
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Start with a static fallback** -- render a CSS radial-gradient or SVG pattern as the background before JavaScript loads; this ensures the dark-canvas-with-color-accents aesthetic appears immediately, even if scripts are slow or blocked
- **Throttle canvas rendering on mobile** -- reduce particle counts by 50-75% on viewports below 768px and consider pausing animation entirely when the canvas is not in the viewport using IntersectionObserver
- **Use `requestAnimationFrame` exclusively** -- never use `setInterval` or `setTimeout` for generative animation loops; `requestAnimationFrame` synchronizes with the display refresh rate and pauses when the tab is hidden
- **Respect `prefers-reduced-motion`** -- detect the media query in both CSS and JavaScript; stop canvas animation and remove transitions for users who have requested reduced motion in their operating system settings
- **Layer a readability scrim** -- always place a semi-transparent radial or linear gradient between the generative canvas and text content; without this layer, text legibility suffers against complex patterns
- **Seed your randomness** -- use a deterministic seed for your noise functions so that specific visual states can be reproduced, shared, or bookmarked via URL parameters
- **Offload heavy computation** -- for complex algorithms (large Voronoi diagrams, high-resolution fractal calculations), use Web Workers to keep the main thread free for smooth scrolling and interaction
- **Test across GPU tiers** -- generative canvas rendering is GPU-dependent; test on integrated graphics (Intel/AMD iGPU) and low-end mobile devices, not just dedicated GPUs, to catch performance regressions early
