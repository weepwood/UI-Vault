# Blueprint Technical Design Reference

## Overview

Blueprint Technical is a web design aesthetic that translates the visual language of architectural and engineering technical drawings into digital interfaces. Rooted in the cyanotype reproduction process invented in 1842 -- where ferric ammonium citrate and potassium ferricyanide produced white lines on a distinctive Prussian blue background -- this aesthetic carries centuries of drafting precision into modern screen design. Every element communicates that it has been measured, specified, and intentionally placed.

The core visual identity is built on cyan-on-dark schematics: thin, precise line work rendered in cyan, white, and pale blue tones against deep navy or near-black backgrounds. Content is presented as if it were an engineering specification, complete with measurement lines, dimension callouts, exploded-view diagrams, grid overlays, and annotation markers. Typography is exclusively monospaced or geometric sans-serif, evoking the hand-lettered labeling conventions of traditional drafting and the machine-printed output of plotters and CAD systems.

Blueprint Technical is not merely "blue and white." It is a philosophy of informational clarity through engineering convention. Layouts are strictly grid-aligned. Borders use consistent stroke weights. Whitespace is treated as deliberate negative space measured in precise increments. Navigation elements resemble tabbed drawing sheets. Cards look like component specification panels. Buttons are rendered as control-panel switches with dimension annotations. The entire interface suggests that the viewer is examining a technical document produced by a careful draftsperson.

This aesthetic resonates in contexts that demand trust, precision, and technical authority: architecture firms, engineering consultancies, developer portfolios, data-driven dashboards, SaaS tooling, and product-specification pages. It also works as a distinctive creative statement in portfolio sites and agency landing pages where the "deconstructed schematic" approach turns everyday UI into technical art. The rising 2025-2026 trend of blueprint graphic design -- where deconstructed illustrations, mono fonts, connector lines, and strict two-color palettes are applied to everyday objects -- has pushed this aesthetic from niche engineering contexts into mainstream creative design.

---

## Visual Characteristics

### Core Design Traits

- **Cyan-on-dark color scheme**: Primary content rendered in cyan, light blue, and white line work against deep navy or dark blue-black backgrounds, directly referencing the cyanotype printing process
- **Uniform stroke-weight line work**: All lines -- borders, dividers, connectors, illustration outlines -- maintain a consistent 1px or 2px weight, mimicking the uniform pen strokes of technical drafting
- **Grid overlays and construction lines**: Subtle background grids (square or isometric) visible beneath content, conveying the graph-paper substrate of physical blueprints
- **Measurement and dimension lines**: Decorative annotation lines with arrows, tick marks, and numeric callouts placed alongside elements to indicate sizes, spacing, or proportions
- **Exploded-view and cutaway diagrams**: Illustrations that deconstruct objects into labeled component parts with connector lines and callout markers
- **Technical annotation markers**: Circled numbers, leader lines, and labeled callouts positioned near UI elements as if documenting a schematic
- **Crosshair and registration mark motifs**: Alignment targets, corner registration marks, and center-point crosshairs used as decorative and structural elements
- **Monospaced typography throughout**: All text rendered in fixed-width typefaces, reflecting the character spacing of technical lettering templates and CAD output
- **Corner-bracket framing**: Content panels framed with L-shaped bracket marks at corners rather than full continuous borders, referencing crop marks and drawing frames
- **Dashed and dotted construction lines**: Hidden edges, fold lines, and secondary grid lines rendered as dashed strokes following drafting convention (hidden lines dashed, center lines dash-dot)
- **Title block and revision table patterns**: Footer or sidebar areas formatted like the title blocks found in the lower-right corner of engineering drawings, containing metadata, revision numbers, and dates

### Design Principles

- **Precision over decoration**: Every visual element should serve an informational or structural purpose; ornament is replaced by measurement notation
- **Uniform line discipline**: Stroke weights remain consistent across the entire interface; no element is drawn with a heavier or lighter line than any other at the same hierarchy level
- **Information-as-aesthetic**: Data, dimensions, coordinates, and labels are the primary decorative content; the beauty comes from density of precise information
- **Grid-absolute alignment**: All elements snap to an explicit grid; nothing is casually placed or visually "floated"
- **Transparency of structure**: The underlying grid, alignment guides, and construction geometry are deliberately visible, not hidden
- **Functional hierarchy through line style**: Solid lines for primary content, dashed for secondary, dotted for tertiary -- following ANSI/ISO drafting line-type conventions
- **Restrained, purposeful animation**: Movement is limited to drawing-on effects (lines being traced), crosshair tracking, and subtle grid pulse; nothing bounces, wobbles, or sparkles
- **Dark-field presentation**: Content glows against a dark ground, like a technical display or backlit drafting table, ensuring maximum contrast for thin line work

---

## Color Palette

The Blueprint Technical palette is derived from the cyanotype printing process and modern CAD/schematic display conventions. The dominant impression is cyan luminance against deep, dark blue-black fields. Accent colors are used sparingly and follow engineering convention: red for warnings or critical dimensions, green for approved/active states, amber for caution or highlight.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Blueprint Dark | `#0A1628` | Primary background, deepest surface layer |
| Blueprint Navy | `#0D2137` | Secondary background, card surfaces, panels |
| Schematic Blue | `#132D4A` | Tertiary surface, elevated containers, sidebar |
| Grid Line | `#1A3A5C` | Background grid lines, subtle construction guides |
| Dimension Cyan | `#00B4D8` | Primary content color, line work, borders, icons |
| Bright Cyan | `#00E5FF` | High-emphasis elements, active states, key labels |
| Pale Blueprint | `#90E0EF` | Secondary text, muted annotations, helper lines |
| White Ink | `#E0F4FF` | Primary text, headings, high-contrast content |
| Pure White | `#FFFFFF` | Maximum emphasis, crosshair centers, highlights |
| Annotation Red | `#FF4C4C` | Warning callouts, critical dimensions, error states |
| Approval Green | `#00C853` | Success states, approved marks, active indicators |
| Caution Amber | `#FFB300` | Warning states, highlight annotations, important notes |
| Faded Cyan | `#4A8BA8` | Disabled states, background annotations, watermarks |
| Construction Dash | `#2A5A7A` | Dashed construction lines, hidden-edge indicators |
| Title Block Gray | `#8BADC4` | Metadata text, revision info, footer content |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --bp-bg-primary: #0a1628;
  --bp-bg-secondary: #0d2137;
  --bp-bg-surface: #132d4a;
  --bp-bg-elevated: #1a3a5c;

  /* Cyan spectrum */
  --bp-cyan: #00b4d8;
  --bp-cyan-bright: #00e5ff;
  --bp-cyan-pale: #90e0ef;
  --bp-cyan-faded: #4a8ba8;
  --bp-cyan-construction: #2a5a7a;

  /* Neutrals */
  --bp-white: #ffffff;
  --bp-white-ink: #e0f4ff;
  --bp-gray-title: #8badc4;
  --bp-grid-line: #1a3a5c;

  /* Semantic accents */
  --bp-red: #ff4c4c;
  --bp-green: #00c853;
  --bp-amber: #ffb300;

  /* Glow effects */
  --bp-glow-cyan: rgba(0, 180, 216, 0.3);
  --bp-glow-cyan-strong: rgba(0, 229, 255, 0.4);
  --bp-glow-red: rgba(255, 76, 76, 0.3);
  --bp-glow-green: rgba(0, 200, 83, 0.3);

  /* Borders */
  --bp-border: rgba(0, 180, 216, 0.25);
  --bp-border-strong: rgba(0, 180, 216, 0.5);
  --bp-border-grid: rgba(26, 58, 92, 0.6);

  /* Functional mappings */
  --bp-text-primary: var(--bp-white-ink);
  --bp-text-secondary: var(--bp-cyan-pale);
  --bp-text-muted: var(--bp-gray-title);
  --bp-accent: var(--bp-cyan);
  --bp-accent-bright: var(--bp-cyan-bright);
}
```

---

## Typography

Blueprint Technical typography draws from two traditions: the hand-lettered block capitals of architectural drafting (executed with lettering guides such as the Ames lettering guide) and the monospaced output of plotters, terminals, and CAD systems. Every typeface used must be either monospaced or strictly geometric sans-serif. Decorative, serif, script, and humanist typefaces are categorically excluded.

### Recommended Google Fonts

| Font | Weight(s) | Style | Usage |
|------|-----------|-------|-------|
| **Share Tech Mono** | 400 | Monospaced, geometric, technical | Primary body text, annotations, labels |
| **IBM Plex Mono** | 300, 400, 500, 700 | Monospaced, neutral, highly legible | Body text, code blocks, data displays |
| **Orbitron** | 400, 500, 700, 900 | Geometric, futuristic, squared | Display headlines, section titles, hero text |
| **Rajdhani** | 300, 400, 500, 600, 700 | Geometric sans, condensed, technical | Subheadings, navigation, UI labels |
| **Chakra Petch** | 300, 400, 500, 600, 700 | Geometric sans with technical flair | Headlines, card titles, badge labels |
| **Azeret Mono** | 400, 500, 700 | Monospaced, modern, clean | Data tables, dimension callouts, metadata |
| **Space Mono** | 400, 700 | Monospaced, editorial, distinctive | Annotation text, pull quotes, callouts |
| **JetBrains Mono** | 400, 500, 700 | Monospaced, developer-focused, readable | Code samples, terminal-style displays |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Orbitron 700 | Share Tech Mono 400 | Technical futurism with drafting-table readability |
| Chakra Petch 600 | IBM Plex Mono 400 | Modern engineering document with neutral precision |
| Rajdhani 600 | Azeret Mono 400 | Condensed industrial labeling with clean mono body |
| Orbitron 500 | JetBrains Mono 400 | Futuristic display paired with developer-grade body |
| Chakra Petch 500 | Space Mono 400 | Technical personality with distinctive character |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&family=IBM+Plex+Mono:wght@300;400;500;700&family=Rajdhani:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Share Tech Mono', 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.75;
  letter-spacing: 0.04em;
  color: var(--bp-text-primary);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Orbitron', 'Rajdhani', sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bp-cyan-bright);
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
}

h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1.25;
}

h3 {
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 500;
  color: var(--bp-cyan);
}

/* Dimension annotation text */
.bp-annotation {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bp-cyan-pale);
  opacity: 0.7;
}

/* Title block metadata */
.bp-title-block {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--bp-gray-title);
}
```

---

## Layout Principles

- **Strict grid alignment**: All elements snap to a base grid of 8px increments; larger structural divisions follow a 12-column grid with 24px gutters, mimicking the ruled grid of drafting paper
- **Visible grid substrate**: A subtle background grid pattern (typically 40px-80px squares) is rendered at low opacity beneath all content, reinforcing the technical-drawing context
- **Title block footer**: Every page includes a footer area styled as a drafting title block containing site name, page identifier, revision number, and date -- placed in the lower-right following engineering convention
- **Corner-bracket framing for containers**: Panels and cards use L-shaped bracket marks at their corners (via pseudo-elements) rather than continuous borders, referencing crop marks and drawing-sheet framing
- **Measurement annotation in margins**: Decorative dimension lines with arrow terminators and pixel/rem values appear alongside key layout elements, illustrating spacing and proportions
- **Linear, sequential flow**: Content is organized in a top-to-bottom, left-to-right flow with clear section breaks using horizontal rule lines with annotation markers
- **Narrow measure for body text**: Body text columns are constrained to 60-75 characters per line (approximately 600-720px), following readability best practices and technical-document conventions
- **Generous vertical rhythm**: Sections are separated by substantial vertical space (4rem-6rem) with annotated divider lines, creating the clear sectional organization of multi-sheet drawing sets
- **Sidebar annotation zones**: A narrow column (120-200px) on the left or right of main content holds reference annotations, dimension callouts, and metadata, mirroring drawing-margin notes
- **Isometric and orthographic layout variants**: For feature showcases, elements can be arranged in isometric grid patterns (30-degree angles) referencing axonometric projection drawing conventions

---

## CSS / Design Techniques

### Blueprint Card Component

```css
.bp-card {
  position: relative;
  background: rgba(13, 33, 55, 0.8);
  border: 1px solid var(--bp-border);
  padding: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Corner bracket marks */
.bp-card::before,
.bp-card::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: var(--bp-cyan);
  border-style: solid;
  pointer-events: none;
}

.bp-card::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.bp-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

.bp-card:hover {
  border-color: var(--bp-border-strong);
  box-shadow:
    0 0 20px rgba(0, 180, 216, 0.08),
    inset 0 0 30px rgba(0, 180, 216, 0.03);
}

/* Inner corner brackets using a wrapper */
.bp-card-inner::before,
.bp-card-inner::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: var(--bp-cyan);
  border-style: solid;
  pointer-events: none;
}

.bp-card-inner::before {
  top: -1px;
  right: -1px;
  border-width: 2px 2px 0 0;
}

.bp-card-inner::after {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 2px 2px;
}
```

### Blueprint Button Component

```css
/* Primary blueprint button */
.bp-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.75rem;
  border: 1px solid var(--bp-cyan);
  background: transparent;
  color: var(--bp-cyan);
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease;
}

/* Measurement tick marks on button edges */
.bp-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -6px;
  width: 6px;
  height: 1px;
  background: var(--bp-cyan);
  opacity: 0.5;
}

.bp-button::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -6px;
  width: 6px;
  height: 1px;
  background: var(--bp-cyan);
  opacity: 0.5;
}

.bp-button:hover {
  background: rgba(0, 180, 216, 0.1);
  box-shadow:
    0 0 15px rgba(0, 180, 216, 0.15),
    inset 0 0 15px rgba(0, 180, 216, 0.05);
  color: var(--bp-cyan-bright);
  border-color: var(--bp-cyan-bright);
}

.bp-button:active {
  background: rgba(0, 180, 216, 0.2);
  transform: scale(0.98);
}

/* Outlined secondary variant */
.bp-button--secondary {
  border-style: dashed;
  border-color: var(--bp-cyan-faded);
  color: var(--bp-cyan-faded);
}

.bp-button--secondary:hover {
  border-style: solid;
  border-color: var(--bp-cyan);
  color: var(--bp-cyan);
}
```

### Navigation Bar

```css
.bp-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--bp-border);
  background: rgba(10, 22, 40, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Horizontal ruler line beneath nav */
.bp-nav::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--bp-cyan) 0px,
    var(--bp-cyan) 4px,
    transparent 4px,
    transparent 8px
  );
  opacity: 0.3;
}

.bp-nav__logo {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bp-cyan-bright);
  text-decoration: none;
}

.bp-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.bp-nav__link {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bp-cyan-pale);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.25s ease;
}

.bp-nav__link::before {
  content: '[ ';
  opacity: 0;
  transition: opacity 0.25s ease;
}

.bp-nav__link::after {
  content: ' ]';
  opacity: 0;
  transition: opacity 0.25s ease;
}

.bp-nav__link:hover {
  color: var(--bp-cyan-bright);
}

.bp-nav__link:hover::before,
.bp-nav__link:hover::after {
  opacity: 1;
}

/* Active state with underline measurement tick */
.bp-nav__link--active {
  color: var(--bp-cyan-bright);
  border-bottom: 1px solid var(--bp-cyan);
}
```

### Hero Section

```css
.bp-hero {
  position: relative;
  padding: 8rem 2rem 6rem;
  text-align: center;
  overflow: hidden;
}

/* Crosshair at center */
.bp-hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 180, 216, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

.bp-hero::after {
  content: '+';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 2rem;
  color: rgba(0, 180, 216, 0.08);
  pointer-events: none;
}

.bp-hero__label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bp-cyan);
  margin-bottom: 1.5rem;
  display: block;
}

.bp-hero__title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bp-white-ink);
  line-height: 1.15;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 30px rgba(0, 229, 255, 0.15);
}

.bp-hero__subtitle {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  font-weight: 300;
  color: var(--bp-cyan-pale);
  max-width: 640px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

/* Dimension annotation line */
.bp-hero__dimension {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
  opacity: 0.4;
}

.bp-hero__dimension span {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  color: var(--bp-cyan);
  letter-spacing: 0.1em;
}

.bp-hero__dimension::before,
.bp-hero__dimension::after {
  content: '';
  width: 80px;
  height: 1px;
  background: var(--bp-cyan);
}
```

### Grid Background Overlay

```css
/* Subtle graph-paper grid background */
.bp-grid-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(
      rgba(0, 180, 216, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(0, 180, 216, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(0, 180, 216, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(0, 180, 216, 0.08) 1px,
      transparent 1px
    );
  background-size:
    20px 20px,
    20px 20px,
    100px 100px,
    100px 100px;
}
```

### Measurement Dimension Line

```css
/* Horizontal dimension annotation */
.bp-dimension {
  display: flex;
  align-items: center;
  gap: 0;
  height: 20px;
  margin: 1rem 0;
}

/* Left arrow terminal */
.bp-dimension::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 6px solid var(--bp-cyan-faded);
  flex-shrink: 0;
}

/* Right arrow terminal */
.bp-dimension::after {
  content: '';
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--bp-cyan-faded);
  flex-shrink: 0;
}

.bp-dimension__line {
  flex: 1;
  height: 1px;
  background: var(--bp-cyan-faded);
}

.bp-dimension__value {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  color: var(--bp-cyan-pale);
  letter-spacing: 0.08em;
  padding: 0 0.5rem;
  background: var(--bp-bg-primary);
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

/* Vertical tick marks at dimension endpoints */
.bp-dimension__tick {
  width: 1px;
  height: 12px;
  background: var(--bp-cyan-faded);
  flex-shrink: 0;
}
```

### Section Divider with Annotation

```css
/* Technical section divider */
.bp-section-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0;
  padding: 0 1rem;
}

.bp-section-divider__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--bp-cyan) 10%,
    var(--bp-cyan) 90%,
    transparent
  );
  opacity: 0.3;
}

.bp-section-divider__marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--bp-cyan);
  border-radius: 50%;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  color: var(--bp-cyan);
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.bp-section-divider__label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bp-cyan-faded);
  white-space: nowrap;
}
```

### Draw-On Line Animation

```css
/* SVG-style line draw-on animation */
@keyframes bp-draw-on {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.bp-draw-on svg path,
.bp-draw-on svg line,
.bp-draw-on svg rect,
.bp-draw-on svg circle {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: bp-draw-on 2s ease-out forwards;
}

/* CSS-only line draw for borders */
@keyframes bp-border-trace {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.bp-trace-border {
  animation: bp-border-trace 1.5s ease-out forwards;
}

/* Crosshair cursor tracking (applied to hero or interactive areas) */
.bp-crosshair {
  cursor: crosshair;
}

/* Blinking cursor / active indicator */
@keyframes bp-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.bp-cursor-blink {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--bp-cyan-bright);
  margin-left: 2px;
  animation: bp-blink 1s step-end infinite;
}
```

---

## Design Do's and Don'ts

### Do

- Use consistent 1px stroke weights for all line work; vary opacity rather than thickness to create hierarchy
- Apply corner-bracket framing (L-shaped marks) on cards and panels for an authentic technical-drawing feel
- Include decorative dimension lines and measurement annotations alongside key UI elements
- Render all text in monospaced or geometric sans-serif typefaces; mixing proportional fonts breaks the illusion
- Maintain a visible background grid at very low opacity (3-8%) to reinforce the drafting-paper context
- Use dashed and dotted line styles deliberately, following drafting convention (dashed for hidden/secondary, dash-dot for center lines)
- Add technical metadata (coordinates, section numbers, revision labels) as subtle ambient content in margins and footers
- Keep animations restrained and purposeful: line-drawing effects, crosshair tracking, and subtle grid pulse only

### Don't

- Use rounded corners or soft, organic shapes; blueprint aesthetics demand sharp, geometric precision
- Apply gradients, shadows, or depth effects that suggest three-dimensional surfaces; the look should remain flat and diagrammatic
- Introduce colors outside the cyan-blue spectrum without clear semantic purpose (red for errors, green for success, amber for warnings only)
- Use serif, script, handwriting, or decorative typefaces; they contradict the technical precision of the aesthetic
- Add bouncy, elastic, or playful animations; motion should feel mechanical and precise, like a plotter tracing a line
- Clutter the interface with excessive annotation; measurement lines and callouts are decorative accents, not covering every element
- Ignore the grid; casually placing elements without alignment destroys the fundamental premise of technical precision
- Use thick borders or heavy stroke weights; blueprint lines are characteristically thin and uniform

---

## Related Aesthetics

| Aesthetic | Relationship to Blueprint Technical |
|-----------|-------------------------------------|
| **Cyberpunk** | Shares the dark background and neon-on-dark color scheme, but Cyberpunk is chaotic and dystopian where Blueprint Technical is ordered and precise |
| **Brutalist Web** | Both reject decoration in favor of raw structure; Brutalism exposes HTML/CSS defaults while Blueprint exposes engineering geometry |
| **Terminal / Hacker** | Shares monospaced typography and dark backgrounds; Terminal is text-stream focused while Blueprint is spatial and diagrammatic |
| **Frutiger Aero** | Both reference technical/industrial contexts, but Frutiger Aero uses glossy 3D renders and bright gradients against white, the visual opposite of flat cyan-on-dark |
| **Neubrutalism** | Shares the raw, structural exposure philosophy; Neubrutalism uses bold colors and thick strokes while Blueprint uses thin lines and restrained cyan |
| **Wireframe / Low-Fi** | Shares the line-drawing approach, but Wireframe is a design-process tool with placeholder content; Blueprint Technical is a finished, polished aesthetic |
| **Sci-Fi HUD** | Shares cyan-on-dark displays and technical overlays; HUD design focuses on heads-up combat/navigation displays while Blueprint focuses on engineering documentation |
| **Data Visualization** | Both communicate quantitative information precisely; Data Viz is chart-focused while Blueprint wraps the entire UI in technical-drawing conventions |
| **Grid / Swiss Design** | Shares obsessive grid alignment and systematic layout; Swiss Design is warm, print-oriented modernism while Blueprint is cold, technical, and screen-native |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blueprint Technical</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&family=IBM+Plex+Mono:wght@300;400;500;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bp-bg-primary: #0a1628;
      --bp-bg-secondary: #0d2137;
      --bp-bg-surface: #132d4a;
      --bp-bg-elevated: #1a3a5c;
      --bp-cyan: #00b4d8;
      --bp-cyan-bright: #00e5ff;
      --bp-cyan-pale: #90e0ef;
      --bp-cyan-faded: #4a8ba8;
      --bp-cyan-construction: #2a5a7a;
      --bp-white: #ffffff;
      --bp-white-ink: #e0f4ff;
      --bp-gray-title: #8badc4;
      --bp-grid-line: #1a3a5c;
      --bp-red: #ff4c4c;
      --bp-green: #00c853;
      --bp-amber: #ffb300;
      --bp-border: rgba(0, 180, 216, 0.25);
      --bp-border-strong: rgba(0, 180, 216, 0.5);
      --bp-glow-cyan: rgba(0, 180, 216, 0.3);
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--bp-bg-primary);
      color: var(--bp-white-ink);
      font-family: 'Share Tech Mono', 'IBM Plex Mono', monospace;
      font-size: 0.95rem;
      line-height: 1.75;
      letter-spacing: 0.04em;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ================================
       GRID BACKGROUND
       ================================ */
    .grid-bg {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background-image:
        linear-gradient(rgba(0, 180, 216, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 180, 216, 0.03) 1px, transparent 1px),
        linear-gradient(rgba(0, 180, 216, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 180, 216, 0.07) 1px, transparent 1px);
      background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
    }

    /* ================================
       NAVIGATION
       ================================ */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--bp-border);
      background: rgba(10, 22, 40, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 1px;
      background: repeating-linear-gradient(
        90deg,
        var(--bp-cyan) 0px, var(--bp-cyan) 4px,
        transparent 4px, transparent 8px
      );
      opacity: 0.25;
    }

    .nav-logo {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--bp-cyan-bright);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--bp-cyan-pale);
      text-decoration: none;
      transition: color 0.25s ease;
    }

    .nav-links a:hover {
      color: var(--bp-cyan-bright);
    }

    .nav-links a.active {
      color: var(--bp-cyan-bright);
      border-bottom: 1px solid var(--bp-cyan);
      padding-bottom: 2px;
    }

    .nav-meta {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      color: var(--bp-cyan-faded);
      letter-spacing: 0.08em;
    }

    /* ================================
       HERO SECTION
       ================================ */
    .hero {
      position: relative;
      text-align: center;
      padding: 8rem 2rem 6rem;
      overflow: hidden;
    }

    /* Crosshair decoration */
    .hero::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      transform: translate(-50%, -50%);
      border: 1px solid rgba(0, 180, 216, 0.08);
      border-radius: 50%;
      pointer-events: none;
    }

    .hero::after {
      content: '+';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Share Tech Mono', monospace;
      font-size: 3rem;
      color: rgba(0, 180, 216, 0.06);
      pointer-events: none;
    }

    .hero-label {
      display: inline-block;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--bp-cyan);
      margin-bottom: 1.5rem;
      padding: 0.3rem 1rem;
      border: 1px solid var(--bp-border);
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: clamp(2.2rem, 6vw, 4.5rem);
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--bp-white-ink);
      line-height: 1.15;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 40px rgba(0, 229, 255, 0.12);
      position: relative;
      z-index: 1;
    }

    .hero-subtitle {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 1rem;
      font-weight: 300;
      color: var(--bp-cyan-pale);
      max-width: 640px;
      margin: 0 auto 2.5rem;
      line-height: 1.85;
      position: relative;
      z-index: 1;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      position: relative;
      z-index: 1;
    }

    /* Dimension annotation below hero */
    .hero-dimension {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 4rem;
      opacity: 0.3;
      position: relative;
      z-index: 1;
    }

    .hero-dimension span {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.6rem;
      color: var(--bp-cyan);
      letter-spacing: 0.1em;
    }

    .hero-dimension::before,
    .hero-dimension::after {
      content: '';
      width: 80px;
      height: 1px;
      background: var(--bp-cyan);
    }

    /* ================================
       BUTTONS
       ================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.75rem;
      border: 1px solid var(--bp-cyan);
      background: transparent;
      color: var(--bp-cyan);
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      transition: all 0.25s ease;
    }

    .btn:hover {
      background: rgba(0, 180, 216, 0.1);
      box-shadow: 0 0 15px rgba(0, 180, 216, 0.12), inset 0 0 15px rgba(0, 180, 216, 0.04);
      color: var(--bp-cyan-bright);
      border-color: var(--bp-cyan-bright);
    }

    .btn--filled {
      background: rgba(0, 180, 216, 0.12);
      border-color: var(--bp-cyan);
    }

    .btn--filled:hover {
      background: rgba(0, 180, 216, 0.22);
    }

    .btn--secondary {
      border-style: dashed;
      border-color: var(--bp-cyan-faded);
      color: var(--bp-cyan-faded);
    }

    .btn--secondary:hover {
      border-style: solid;
      border-color: var(--bp-cyan);
      color: var(--bp-cyan);
    }

    /* ================================
       CONTENT WRAPPER
       ================================ */
    .content {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ================================
       SECTION DIVIDER
       ================================ */
    .divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 5rem 0;
    }

    .divider-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--bp-cyan) 10%, var(--bp-cyan) 90%, transparent);
      opacity: 0.25;
    }

    .divider-marker {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: 1px solid var(--bp-cyan);
      border-radius: 50%;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.7rem;
      color: var(--bp-cyan);
      flex-shrink: 0;
    }

    .divider-label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--bp-cyan-faded);
      white-space: nowrap;
    }

    /* ================================
       SECTION HEADINGS
       ================================ */
    .section-heading {
      margin-bottom: 3rem;
    }

    .section-heading h2 {
      font-family: 'Orbitron', sans-serif;
      font-size: clamp(1.3rem, 3vw, 1.8rem);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--bp-cyan-bright);
      margin-bottom: 0.75rem;
    }

    .section-heading p {
      font-size: 0.88rem;
      color: var(--bp-cyan-pale);
      max-width: 640px;
      line-height: 1.8;
    }

    /* ================================
       CARDS
       ================================ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .card {
      position: relative;
      background: rgba(13, 33, 55, 0.7);
      border: 1px solid var(--bp-border);
      padding: 2rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    /* Corner brackets */
    .card::before,
    .card::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--bp-cyan);
      border-style: solid;
      pointer-events: none;
      transition: border-color 0.3s ease;
    }

    .card::before {
      top: -1px;
      left: -1px;
      border-width: 2px 0 0 2px;
    }

    .card::after {
      bottom: -1px;
      right: -1px;
      border-width: 0 2px 2px 0;
    }

    .card:hover {
      border-color: var(--bp-border-strong);
      box-shadow: 0 0 20px rgba(0, 180, 216, 0.06), inset 0 0 30px rgba(0, 180, 216, 0.02);
    }

    .card:hover::before,
    .card:hover::after {
      border-color: var(--bp-cyan-bright);
    }

    .card-number {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      color: var(--bp-cyan-faded);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .card h3 {
      font-family: 'Orbitron', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--bp-cyan-bright);
      margin-bottom: 0.75rem;
    }

    .card p {
      font-size: 0.85rem;
      color: var(--bp-cyan-pale);
      line-height: 1.8;
    }

    .card-annotation {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
      padding-top: 1rem;
      border-top: 1px dashed rgba(0, 180, 216, 0.15);
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.08em;
      color: var(--bp-cyan-faded);
    }

    .card-annotation::before {
      content: '';
      width: 6px;
      height: 6px;
      border: 1px solid var(--bp-cyan);
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* ================================
       SPECS TABLE
       ================================ */
    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.82rem;
    }

    .specs-table thead th {
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--bp-cyan);
      color: var(--bp-cyan-bright);
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 0.72rem;
    }

    .specs-table tbody td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(0, 180, 216, 0.1);
      color: var(--bp-cyan-pale);
    }

    .specs-table tbody tr:hover td {
      background: rgba(0, 180, 216, 0.04);
      color: var(--bp-white-ink);
    }

    /* ================================
       EXPLODED VIEW SECTION
       ================================ */
    .exploded-view {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin: 3rem 0;
    }

    .exploded-diagram {
      position: relative;
      aspect-ratio: 4 / 3;
      border: 1px solid var(--bp-border);
      background: rgba(13, 33, 55, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Inner crosshair */
    .exploded-diagram::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent 20%, rgba(0, 180, 216, 0.1) 50%, transparent 80%);
    }

    .exploded-diagram::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background: linear-gradient(180deg, transparent 20%, rgba(0, 180, 216, 0.1) 50%, transparent 80%);
    }

    .diagram-placeholder {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.7rem;
      color: var(--bp-cyan-faded);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      text-align: center;
      z-index: 1;
    }

    .exploded-details h3 {
      margin-bottom: 1rem;
    }

    .exploded-details p {
      font-size: 0.88rem;
      color: var(--bp-cyan-pale);
      line-height: 1.85;
      margin-bottom: 1.5rem;
    }

    .detail-list {
      list-style: none;
    }

    .detail-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(0, 180, 216, 0.08);
      font-size: 0.85rem;
      color: var(--bp-cyan-pale);
    }

    .detail-list li::before {
      content: attr(data-n);
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      color: var(--bp-cyan);
      border: 1px solid var(--bp-cyan);
      border-radius: 50%;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ================================
       TITLE BLOCK FOOTER
       ================================ */
    footer {
      margin-top: 6rem;
      border-top: 1px solid var(--bp-border);
      padding: 2rem;
    }

    .title-block {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 2rem;
      max-width: 1100px;
      margin: 0 auto;
      align-items: end;
    }

    .title-block-left {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.72rem;
      color: var(--bp-cyan-faded);
      line-height: 2;
      letter-spacing: 0.06em;
    }

    .title-block-right {
      border: 1px solid var(--bp-border);
      padding: 1rem 1.5rem;
      text-align: right;
    }

    .title-block-right .project-name {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--bp-cyan-bright);
      margin-bottom: 0.25rem;
    }

    .title-block-right .project-meta {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      color: var(--bp-cyan-faded);
      letter-spacing: 0.06em;
      line-height: 1.8;
    }

    /* ================================
       UTILITIES
       ================================ */
    .text-cyan { color: var(--bp-cyan); }
    .text-bright { color: var(--bp-cyan-bright); }
    .text-muted { color: var(--bp-cyan-faded); }
    .text-mono { font-family: 'Share Tech Mono', monospace; }

    /* ================================
       RESPONSIVE
       ================================ */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
        padding: 0.75rem 1.5rem;
      }

      .nav-links {
        gap: 1.25rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      .nav-meta { display: none; }

      .hero {
        padding: 5rem 1.5rem 4rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .exploded-view {
        grid-template-columns: 1fr;
      }

      .title-block {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .title-block-right {
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <!-- Grid background -->
  <div class="grid-bg" aria-hidden="true"></div>

  <!-- Navigation -->
  <nav>
    <a href="#" class="nav-logo">Blueprint</a>
    <ul class="nav-links">
      <li><a href="#overview" class="active">Overview</a></li>
      <li><a href="#specs">Specifications</a></li>
      <li><a href="#components">Components</a></li>
      <li><a href="#docs">Documentation</a></li>
    </ul>
    <span class="nav-meta">REV 03 // 2026-03-04</span>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <span class="hero-label">Section 01 // System Overview</span>
    <h1>Blueprint Technical</h1>
    <p class="hero-subtitle">
      Precision-engineered interface design built on the visual language of
      architectural drafting, technical schematics, and engineering documentation.
    </p>
    <div class="hero-actions">
      <a href="#specs" class="btn btn--filled">View Specifications</a>
      <a href="#docs" class="btn btn--secondary">Documentation</a>
    </div>
    <div class="hero-dimension">
      <span>0,0</span>
      <span>1100px</span>
    </div>
  </section>

  <div class="content">

    <!-- Divider -->
    <div class="divider">
      <div class="divider-line"></div>
      <div class="divider-marker">02</div>
      <span class="divider-label">Specifications</span>
      <div class="divider-line"></div>
    </div>

    <!-- Specs Section -->
    <section id="specs">
      <div class="section-heading">
        <h2>System Specifications</h2>
        <p>Core technical parameters and dimensional constraints governing the
           interface architecture.</p>
      </div>

      <table class="specs-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
            <th>Tolerance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Grid Unit</td>
            <td>8px</td>
            <td>Exact</td>
          </tr>
          <tr>
            <td>Content Max-Width</td>
            <td>1100px</td>
            <td>+/- 0px</td>
          </tr>
          <tr>
            <td>Column Count</td>
            <td>12</td>
            <td>Fixed</td>
          </tr>
          <tr>
            <td>Gutter Width</td>
            <td>24px</td>
            <td>+/- 0px</td>
          </tr>
          <tr>
            <td>Stroke Weight</td>
            <td>1px</td>
            <td>Uniform</td>
          </tr>
          <tr>
            <td>Border Radius</td>
            <td>0px</td>
            <td>None Permitted</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Divider -->
    <div class="divider">
      <div class="divider-line"></div>
      <div class="divider-marker">03</div>
      <span class="divider-label">Components</span>
      <div class="divider-line"></div>
    </div>

    <!-- Cards Section -->
    <section id="components">
      <div class="section-heading">
        <h2>Component Assembly</h2>
        <p>Modular interface components designed for systematic composition
           and precise alignment.</p>
      </div>

      <div class="card-grid">
        <div class="card">
          <div class="card-number">Component 01 / Grid System</div>
          <h3>Structural Grid</h3>
          <p>An 8px base grid provides the foundational measurement system.
             All spacing, sizing, and positioning derive from multiples of this unit.</p>
          <div class="card-annotation">REF: Layout / Grid / Base-8</div>
        </div>
        <div class="card">
          <div class="card-number">Component 02 / Line Work</div>
          <h3>Dimension Lines</h3>
          <p>Measurement annotations with arrow terminators and value callouts.
             Applied decoratively alongside UI elements to reinforce technical context.</p>
          <div class="card-annotation">REF: Annotation / Dimension / H-01</div>
        </div>
        <div class="card">
          <div class="card-number">Component 03 / Typography</div>
          <h3>Monospaced System</h3>
          <p>All text rendered in fixed-width typefaces. Display headings use geometric
             sans-serif for impact while maintaining technical precision.</p>
          <div class="card-annotation">REF: Type / Mono / System-A</div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="divider">
      <div class="divider-line"></div>
      <div class="divider-marker">04</div>
      <span class="divider-label">Documentation</span>
      <div class="divider-line"></div>
    </div>

    <!-- Exploded View Section -->
    <section id="docs">
      <div class="section-heading">
        <h2>Exploded View</h2>
        <p>Deconstructed component analysis showing internal structure and
           assembly relationships.</p>
      </div>

      <div class="exploded-view">
        <div class="exploded-diagram">
          <div class="diagram-placeholder">
            [ Exploded View Diagram ]<br>
            Scale 1:1 // Sheet 4 of 6
          </div>
        </div>
        <div class="exploded-details">
          <h3>Interface Layers</h3>
          <p>The Blueprint Technical interface is composed of discrete layers,
             each serving a specific structural or informational role within
             the overall system architecture.</p>
          <ul class="detail-list">
            <li data-n="1">Grid substrate layer -- visible construction geometry</li>
            <li data-n="2">Background surface -- primary dark field</li>
            <li data-n="3">Content panels -- elevated card components</li>
            <li data-n="4">Line work overlay -- borders, dimension lines, connectors</li>
            <li data-n="5">Typography layer -- all text content and annotations</li>
            <li data-n="6">Interactive layer -- buttons, links, hover states</li>
          </ul>
        </div>
      </div>
    </section>

  </div>

  <!-- Footer / Title Block -->
  <footer>
    <div class="title-block">
      <div class="title-block-left">
        Blueprint Technical Design System<br>
        All dimensions in pixels unless noted<br>
        Grid: 8px base // 12-col // 24px gutter
      </div>
      <div class="title-block-right">
        <div class="project-name">Blueprint Technical</div>
        <div class="project-meta">
          Drawn: 2026-03-04<br>
          Scale: 1:1 @ 96dpi<br>
          Sheet: 1 of 1 // Rev 03
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use SVG for dimension lines and annotations**: While CSS can simulate measurement lines using pseudo-elements and borders, SVG provides precise control over arrowheads, dashed patterns, and text-on-path callouts; embed inline SVGs for maximum flexibility
- **Layer the grid background with `position: fixed`**: The graph-paper grid should remain stationary as content scrolls over it, reinforcing the drafting-table metaphor; use `pointer-events: none` to prevent interaction blocking
- **Prefer `border` over `box-shadow` for all framing**: The blueprint aesthetic demands crisp, single-pixel lines; `box-shadow` introduces subpixel softness that undermines the technical precision, so reserve it only for subtle glow effects on hover states
- **Test at 100% zoom on standard-DPI screens**: Thin 1px lines can disappear or render inconsistently at fractional zoom levels or on high-DPI displays; test across zoom levels and consider using `1.5px` or `2px` strokes if 1px lines vanish on retina screens
- **Use CSS `repeating-linear-gradient` for dashed lines**: Native `border-style: dashed` renders inconsistently across browsers; for precise control of dash length and gap, use repeating gradients as backgrounds on thin elements
- **Animate sparingly with `stroke-dashoffset`**: The most authentic blueprint animation is the draw-on effect, where lines appear to be traced by an invisible pen; apply `stroke-dasharray` and animate `stroke-dashoffset` on SVG paths for this effect
- **Build the title block as a reusable component**: The engineering-drawing title block (project name, date, revision, scale, sheet number) is a signature element; template it as a footer component with CSS Grid for consistent reproduction across all pages
- **Maintain the two-color discipline**: The visual power of blueprint design comes from its severe color restriction; resist the temptation to add accent colors beyond the cyan spectrum unless they serve a clear semantic role (red for errors, green for success, amber for caution)
