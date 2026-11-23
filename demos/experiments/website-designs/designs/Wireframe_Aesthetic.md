# Wireframe Aesthetic Design Reference

## Overview

The Wireframe Aesthetic is a deliberate design philosophy that elevates the skeletal framework of a webpage -- its grid lines, bounding boxes, placeholder markers, and structural annotations -- from hidden scaffolding to visible, intentional surface design. Where traditional web design treats wireframes as a temporary planning artifact to be replaced by polished visuals, this aesthetic freezes the design process at the blueprint stage and declares it complete. The result is an interface that looks perpetually under construction, revealing its own bones: dashed borders outline every container, column guides remain visible, placeholder crosses mark image regions, and annotation labels identify each component by name. It is the architectural blueprint hung on the gallery wall -- structure elevated to style.

Rooted in the same honesty-driven lineage as Brutalist Web Design and the broader "builder culture" of developers who live between code editors and design tools, the Wireframe Aesthetic emerged in the mid-2010s as designers began sharing low-fidelity mockups on portfolio sites and discovered that the raw, skeletal layouts possessed their own stark beauty. The style draws from UX wireframing conventions -- grayscale palettes, monospace fonts, placeholder boxes with diagonal crosses, and visible 12-column grid overlays -- but repurposes them as final visual output rather than intermediate documentation. Monospace typography reinforces the technical, diagrammatic quality. Colors are severely restricted to blacks, whites, and cool grays, with occasional accent lines in blueprint blue or annotation red to mark interactive elements or callouts.

The philosophy embraces constraint as creative liberation. Fixed-width grids, plain monospaced text, dashed outlines, and labeled bounding boxes create a visual language that is simultaneously minimal and information-dense. Every element announces what it is and where it sits in the layout hierarchy. Nothing is hidden behind gradients, shadows, or photographic imagery. The Wireframe Aesthetic appeals to technically minded audiences -- developers, designers, architects, and engineers -- who find elegance in exposed systems and legible structure. It communicates transparency, process-awareness, and a willingness to show the work behind the work.

---

## Visual Characteristics

### Core Design Traits

- **Dashed and dotted borders**: Containers, sections, and interactive elements are outlined with dashed or dotted borders rather than solid lines, evoking the selection marquees and bounding boxes of design software
- **Visible grid overlays**: Column guides (typically 12-column or 4-column systems) remain visible as faint lines or tinted background columns, making the underlying layout grid a permanent visual feature
- **Placeholder image crosses**: Image regions display a rectangular box with diagonal lines forming an X, the universal wireframe symbol for "image goes here," sometimes accompanied by dimension annotations
- **Monochrome and grayscale dominance**: The palette rarely exceeds black, white, and three to four shades of gray; color is used sparingly and only for functional annotation (link blue, error red, annotation markers)
- **Component labels and annotations**: Sections carry visible text labels like "HEADER," "NAV," "HERO," "SIDEBAR," or "CTA" rendered in small monospace uppercase, identifying the structural role of each region
- **Monospace typography throughout**: All text -- headings, body, labels, and metadata -- uses monospaced typefaces, reinforcing the technical, code-adjacent character of the design
- **Thin-weight line work**: Strokes are kept uniformly thin (1px or 2px), avoiding heavy borders that would shift the aesthetic toward Brutalism; the goal is precision, not weight
- **Generous use of whitespace**: Despite the visible grid, layouts maintain breathing room; the exposed structure should feel like a clean architectural drawing, not a cluttered diagram
- **Corner markers and registration marks**: Small L-shaped crop marks or crosshair registration marks appear at the corners of major sections, borrowed from print production and technical drawing conventions
- **Numbered or lettered grid cells**: Grid columns may carry alphanumeric labels (A, B, C or 1, 2, 3) along the top edge, reinforcing the blueprint-as-interface metaphor
- **Low-contrast text hierarchy**: Rather than dramatic size changes, text hierarchy is communicated through weight, letter-spacing, and subtle size increments, keeping everything within the restrained wireframe register

### Design Principles

- **Structure is the design**: The layout skeleton is not a means to an end but the final product; revealing structure is the primary aesthetic act
- **Process made permanent**: The wireframe stage -- normally hidden from end users -- becomes the deliverable, celebrating the design process itself
- **Constraint as language**: The strict limitations of wireframing (no color, no images, no ornamentation) become a coherent visual vocabulary rather than a restriction to overcome
- **Transparency of intent**: Every element visibly declares its purpose and position; there are no hidden layers, obscured mechanics, or decorative distractions
- **Precision over expression**: The aesthetic values alignment, measurement, and systematic consistency over individual creative flourish or emotional expression
- **Functional annotation**: Labels, dimensions, and grid markers serve both informational and decorative purposes simultaneously, collapsing the distinction between documentation and design
- **Reductive elegance**: Beauty is found in the minimum viable representation of each element; if a dashed rectangle communicates "card," no further embellishment is needed
- **Technical legibility**: The design should be instantly readable to someone familiar with design tools, development environments, or architectural drawings

---

## Color Palette

The Wireframe Aesthetic operates within a severely restricted palette derived from the conventions of low-fidelity wireframing and technical drawing. The dominant register is grayscale, with functional color limited to annotation markers, interactive state indicators, and the occasional blueprint blue accent. The palette should feel like a printed schematic -- precise, clinical, and deliberately un-decorative.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | Primary background, empty canvas areas |
| ![#F5F5F5](https://via.placeholder.com/20/F5F5F5/F5F5F5) | `#F5F5F5` | Alternate section background, grid column fill |
| ![#E0E0E0](https://via.placeholder.com/20/E0E0E0/E0E0E0) | `#E0E0E0` | Grid lines, column guides, subtle dividers |
| ![#BDBDBD](https://via.placeholder.com/20/BDBDBD/BDBDBD) | `#BDBDBD` | Placeholder fills, disabled states, muted borders |
| ![#9E9E9E](https://via.placeholder.com/20/9E9E9E/9E9E9E) | `#9E9E9E` | Secondary text, annotations, dimension labels |
| ![#757575](https://via.placeholder.com/20/757575/757575) | `#757575` | Tertiary text, metadata, timestamps |
| ![#424242](https://via.placeholder.com/20/424242/424242) | `#424242` | Primary body text, paragraph content |
| ![#212121](https://via.placeholder.com/20/212121/212121) | `#212121` | Headings, structural borders, strong emphasis |
| ![#000000](https://via.placeholder.com/20/000000/000000) | `#000000` | Maximum contrast elements, active borders |
| ![#2196F3](https://via.placeholder.com/20/2196F3/2196F3) | `#2196F3` | Blueprint accent, interactive links, selection indicators |
| ![#1565C0](https://via.placeholder.com/20/1565C0/1565C0) | `#1565C0` | Blueprint dark, hover state for links, active annotations |
| ![#E53935](https://via.placeholder.com/20/E53935/E53935) | `#E53935` | Annotation red, error states, redline markers |
| ![#43A047](https://via.placeholder.com/20/43A047/43A047) | `#43A047` | Success states, approval markers, dimension confirmations |
| ![#FFF9C4](https://via.placeholder.com/20/FFF9C4/FFF9C4) | `#FFF9C4` | Sticky note highlight, annotation callout background |
| ![#90CAF9](https://via.placeholder.com/20/90CAF9/90CAF9) | `#90CAF9` | Blueprint tint, selected region highlight, grid overlay |

### CSS Custom Properties

```css
:root {
  /* Grayscale spectrum */
  --wire-white: #ffffff;
  --wire-gray-50: #f5f5f5;
  --wire-gray-200: #e0e0e0;
  --wire-gray-400: #bdbdbd;
  --wire-gray-500: #9e9e9e;
  --wire-gray-600: #757575;
  --wire-gray-800: #424242;
  --wire-gray-900: #212121;
  --wire-black: #000000;

  /* Functional accents */
  --wire-blue: #2196f3;
  --wire-blue-dark: #1565c0;
  --wire-red: #e53935;
  --wire-green: #43a047;
  --wire-note: #fff9c4;
  --wire-blue-tint: #90caf9;

  /* Semantic tokens */
  --wire-bg: var(--wire-white);
  --wire-bg-alt: var(--wire-gray-50);
  --wire-text: var(--wire-gray-800);
  --wire-heading: var(--wire-gray-900);
  --wire-border: var(--wire-gray-400);
  --wire-border-strong: var(--wire-gray-900);
  --wire-grid-line: var(--wire-gray-200);
  --wire-annotation: var(--wire-gray-500);
  --wire-link: var(--wire-blue);
  --wire-link-hover: var(--wire-blue-dark);
  --wire-accent: var(--wire-blue);
  --wire-error: var(--wire-red);
  --wire-success: var(--wire-green);
}
```

---

## Typography

The Wireframe Aesthetic relies exclusively on monospaced typefaces to maintain the technical, diagrammatic quality of design-tool output. Monospace fonts create a visible character grid that aligns with the broader grid-exposure philosophy, and their association with code editors and terminal interfaces reinforces the "under construction" reading of the design. Hierarchy is established through weight, letter-spacing, and modest size increments rather than dramatic scale contrasts or serif/sans-serif pairing.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| IBM Plex Mono | 300, 400, 500, 700 | Primary body text, annotations, labels | [fonts.google.com/specimen/IBM+Plex+Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| JetBrains Mono | 400, 500, 700, 800 | Headlines, display text, component labels | [fonts.google.com/specimen/JetBrains+Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Space Mono | 400, 700 | Alternate body text, code blocks, metadata | [fonts.google.com/specimen/Space+Mono](https://fonts.google.com/specimen/Space+Mono) |
| Source Code Pro | 300, 400, 600, 700 | Technical annotations, dimension labels, grid markers | [fonts.google.com/specimen/Source+Code+Pro](https://fonts.google.com/specimen/Source+Code+Pro) |
| Fira Code | 300, 400, 500, 700 | Ligature-enhanced code, decorative monospace accents | [fonts.google.com/specimen/Fira+Code](https://fonts.google.com/specimen/Fira+Code) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| JetBrains Mono (800) | IBM Plex Mono (400) | Bold structural headings with clean, readable body text; the quintessential wireframe pairing |
| Space Mono (700) | Source Code Pro (400) | Quirky geometric headings paired with neutral technical prose; a balance of personality and precision |
| JetBrains Mono (700) | Fira Code (400) | Developer-native pairing with programming ligatures in body text; appeals to the builder audience |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap');

/* === Base Typography === */
body {
  font-family: 'IBM Plex Mono', 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.7;
  color: var(--wire-text);
  background-color: var(--wire-bg);
  letter-spacing: 0.01em;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
  color: var(--wire-heading);
  margin: 0 0 0.75em 0;
}

h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.12em;
}

h2 {
  font-size: clamp(1.25rem, 3vw, 2rem);
}

h3 {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 500;
}

a {
  color: var(--wire-link);
  text-decoration: underline;
  text-decoration-style: dashed;
  text-underline-offset: 3px;
}

a:hover {
  color: var(--wire-link-hover);
  text-decoration-style: solid;
}

code, pre {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.875em;
  background-color: var(--wire-bg-alt);
  border: 1px dashed var(--wire-border);
  padding: 0.2em 0.4em;
}

pre {
  padding: 1.25em;
  overflow-x: auto;
  white-space: pre;
}

/* Annotation labels */
.label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--wire-annotation);
}
```

---

## Layout Principles

- **Visible 12-column grid**: The underlying column system remains visible through faint vertical lines or alternating tinted columns, making the layout grid a permanent design element rather than a hidden aid
- **Dashed-border containers**: Every major section and component is outlined with dashed borders, creating a visible bounding-box hierarchy that reveals how the layout is constructed
- **Component labeling**: Sections carry visible uppercase monospace labels (HEADER, NAV, MAIN, SIDEBAR, FOOTER) positioned at the top-left corner of their bounding box, identifying structural roles
- **Generous gutters and margins**: Grid gutters are wider than typical production layouts to keep the schematic feeling open and readable, preventing the exposed structure from feeling cluttered
- **Consistent spacing system**: All margins and padding derive from a base unit (typically 8px) to create the measurable, systematic rhythm expected of a technical drawing
- **Flat hierarchy with clear nesting**: Nested components use progressively thinner or lighter dashed borders to indicate depth without introducing shadows or three-dimensional effects
- **Responsive grid annotation**: At different breakpoints, the visible grid adapts and shows column count changes (12 columns on desktop, 4 on tablet, 1 on mobile), making the responsive behavior itself visible
- **Alignment to character grid**: Because monospace type is used throughout, text and elements can align to a character-width grid, creating the precise registration of a technical schematic
- **Placeholder-first content strategy**: Image areas use crossed-box placeholders with dimension annotations rather than actual photographs, maintaining the wireframe register even when the design is "complete"
- **Minimal z-axis stacking**: The design avoids overlapping elements, drop shadows, and layered compositions; everything exists on a single flat plane, as in a 2D technical drawing

---

## CSS / Design Techniques

### Wireframe Card

A content card rendered in the wireframe idiom: dashed borders, visible label, placeholder image region with diagonal cross, and monospace text throughout.

```css
.wire-card {
  border: 1px dashed var(--wire-border);
  padding: 1.25rem;
  margin: 0.75rem 0;
  background-color: var(--wire-bg);
  position: relative;
}

.wire-card::before {
  content: 'CARD';
  position: absolute;
  top: -0.5em;
  left: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--wire-annotation);
  background-color: var(--wire-bg);
  padding: 0 0.35rem;
}

.wire-card:hover {
  border-color: var(--wire-blue);
  border-style: solid;
}

.wire-card h3 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px dashed var(--wire-gray-200);
}

.wire-card p {
  font-size: 0.8rem;
  color: var(--wire-gray-600);
  line-height: 1.6;
}

/* Placeholder image region with diagonal cross */
.wire-card .placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px dashed var(--wire-border);
  margin-bottom: 1rem;
  position: relative;
  background:
    linear-gradient(
      to top right,
      transparent calc(50% - 0.5px),
      var(--wire-gray-200) calc(50% - 0.5px),
      var(--wire-gray-200) calc(50% + 0.5px),
      transparent calc(50% + 0.5px)
    ),
    linear-gradient(
      to bottom right,
      transparent calc(50% - 0.5px),
      var(--wire-gray-200) calc(50% - 0.5px),
      var(--wire-gray-200) calc(50% + 0.5px),
      transparent calc(50% + 0.5px)
    );
  display: flex;
  align-items: center;
  justify-content: center;
}

.wire-card .placeholder span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--wire-annotation);
  background-color: var(--wire-bg);
  padding: 0.15rem 0.5rem;
}
```

### Wireframe Button

Buttons that look like wireframe annotations of buttons -- dashed borders, monospace labels, and minimal state changes that keep the schematic register intact.

```css
.wire-button {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.6rem 1.25rem;
  border: 1px dashed var(--wire-border-strong);
  background-color: var(--wire-bg);
  color: var(--wire-heading);
  cursor: pointer;
  text-decoration: none;
  transition: border-style 0.1s ease;
  position: relative;
}

.wire-button:hover {
  border-style: solid;
  border-color: var(--wire-blue);
  color: var(--wire-blue);
}

.wire-button:active {
  background-color: var(--wire-blue);
  color: var(--wire-white);
  border-color: var(--wire-blue);
  border-style: solid;
}

.wire-button--primary {
  background-color: var(--wire-gray-900);
  color: var(--wire-white);
  border-color: var(--wire-gray-900);
  border-style: solid;
}

.wire-button--primary:hover {
  background-color: var(--wire-blue);
  border-color: var(--wire-blue);
  color: var(--wire-white);
}

/* Ghost / annotation variant */
.wire-button--ghost {
  border: 1px dotted var(--wire-gray-400);
  color: var(--wire-gray-500);
  background-color: transparent;
}

.wire-button--ghost:hover {
  border-style: dashed;
  color: var(--wire-gray-800);
  border-color: var(--wire-gray-800);
}
```

### Wireframe Navigation

A navigation bar that appears as a labeled wireframe region, with links styled as inline annotation markers.

```css
.wire-nav {
  border: 1px dashed var(--wire-border);
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.wire-nav::before {
  content: 'NAV';
  position: absolute;
  top: -0.5em;
  left: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--wire-annotation);
  background-color: var(--wire-bg);
  padding: 0 0.35rem;
}

.wire-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.wire-nav a {
  display: block;
  padding: 0.4rem 0.75rem;
  color: var(--wire-gray-800);
  text-decoration: none;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px dotted transparent;
}

.wire-nav a:hover {
  border-color: var(--wire-blue);
  color: var(--wire-blue);
}

.wire-nav a.active {
  border: 1px dashed var(--wire-blue);
  color: var(--wire-blue);
}
```

### Wireframe Hero Section

A hero region that announces itself as a wireframe component, with structural labels, a placeholder image area, and typographic hierarchy maintained entirely in monospace.

```css
.wire-hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  border: 1px dashed var(--wire-border);
  margin-bottom: 1.5rem;
  position: relative;
}

.wire-hero::before {
  content: 'HERO SECTION';
  position: absolute;
  top: -0.5em;
  left: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--wire-annotation);
  background-color: var(--wire-bg);
  padding: 0 0.35rem;
}

/* Corner registration marks */
.wire-hero::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-top: 1px solid var(--wire-gray-400);
  border-right: 1px solid var(--wire-gray-400);
}

.wire-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.15;
}

.wire-hero p {
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  max-width: 55ch;
  margin-top: 1.5rem;
  line-height: 1.8;
  color: var(--wire-gray-600);
}

.wire-hero .btn-row {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

### Visible Grid Overlay

A CSS-only grid overlay that makes the 12-column structure permanently visible behind page content.

```css
.wire-grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding: 0 2rem;
  pointer-events: none;
}

.wire-grid-overlay .col {
  background-color: var(--wire-blue-tint);
  opacity: 0.04;
  border-left: 1px solid var(--wire-gray-200);
  border-right: 1px solid var(--wire-gray-200);
}

/* Toggle visibility */
.wire-grid-overlay.hidden {
  display: none;
}

/* Column labels along top */
.wire-grid-labels {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding: 0 2rem;
  z-index: 1000;
  pointer-events: none;
}

.wire-grid-labels span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.5rem;
  color: var(--wire-gray-400);
  text-align: center;
  padding: 2px 0;
  letter-spacing: 0.05em;
}
```

### Placeholder Image Box

The signature wireframe element: a rectangle with diagonal cross lines indicating where an image would be placed.

```css
.wire-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px dashed var(--wire-border);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--wire-bg-alt);
}

/* Diagonal cross lines */
.wire-placeholder::before,
.wire-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 141.42%;
  height: 1px;
  background-color: var(--wire-gray-200);
  transform-origin: top left;
}

.wire-placeholder::before {
  transform: rotate(33.69deg); /* atan(9/16) for 16:9 ratio */
}

.wire-placeholder::after {
  top: auto;
  bottom: 0;
  transform-origin: bottom left;
  transform: rotate(-33.69deg);
}

.wire-placeholder span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--wire-annotation);
  background-color: var(--wire-bg-alt);
  padding: 0.15rem 0.5rem;
  z-index: 1;
}

/* Size variants */
.wire-placeholder--square { aspect-ratio: 1 / 1; }
.wire-placeholder--portrait { aspect-ratio: 3 / 4; }
.wire-placeholder--wide { aspect-ratio: 21 / 9; }
```

### Annotation Tooltip

Floating annotation markers that mimic the comment/note tools found in design software like Figma or Sketch.

```css
.wire-annotation {
  position: relative;
  display: inline-block;
}

.wire-annotation::after {
  content: attr(data-note);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--wire-red);
  background-color: var(--wire-note);
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--wire-red);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.wire-annotation:hover::after {
  opacity: 1;
}

/* Persistent annotation marker (always visible) */
.wire-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: var(--wire-red);
  color: var(--wire-white);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.55rem;
  font-weight: 700;
  cursor: default;
}
```

### Wireframe Section Divider

A section separator that includes dimension annotations and dashed rules, mimicking the measurement lines of technical drawings.

```css
.wire-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0;
  color: var(--wire-annotation);
}

.wire-divider::before,
.wire-divider::after {
  content: '';
  flex: 1;
  height: 0;
  border-top: 1px dashed var(--wire-gray-200);
}

.wire-divider span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  white-space: nowrap;
}

/* Measurement-style divider with end caps */
.wire-divider--measured {
  position: relative;
}

.wire-divider--measured::before,
.wire-divider--measured::after {
  border-top-style: solid;
  border-top-color: var(--wire-gray-400);
}

.wire-divider--measured span {
  background-color: var(--wire-bg);
  padding: 0 0.5rem;
}
```

---

## Design Do's and Don'ts

### Do's

- **Use dashed borders consistently** to outline all containers, sections, and interactive elements; the dashed line is the fundamental visual unit of the wireframe register and should appear everywhere structure exists
- **Label components visibly** with small monospace uppercase text (HEADER, CARD, CTA, SIDEBAR) so that every region of the page declares its structural purpose to the viewer
- **Maintain the monospace type system** throughout the entire design -- headings, body, labels, buttons, and navigation should all use monospaced fonts to reinforce the technical drawing quality
- **Use placeholder crosses for images** by drawing diagonal lines within bordered rectangles wherever photographs or illustrations would normally appear; annotate dimensions within the placeholder
- **Keep the grid visible** through faint column guidelines, alternating tinted columns, or numbered column headers that make the underlying layout structure a permanent design feature
- **Design in grayscale first and add color only for function** -- the palette should remain overwhelmingly gray, with blues, reds, and greens used only to indicate interactive states, errors, or annotation markers
- **Include corner marks and registration indicators** at the edges of major sections to reinforce the print-production and technical-drawing lineage of the aesthetic
- **Embrace whitespace as part of the schematic** -- a wireframe is a technical document, and adequate spacing between elements is essential for legibility and the feeling of precision

### Don'ts

- **Don't use photographs or rich media** -- the entire aesthetic depends on the absence of finished visual content; once real images appear, the design reads as incomplete rather than intentionally skeletal
- **Don't apply drop shadows or depth effects** -- wireframes exist on a flat plane; adding shadows, gradients, or layered compositions breaks the 2D schematic metaphor entirely
- **Don't use rounded corners excessively** -- while slight rounding (2-3px) can soften the clinical feel, generous border-radius values push the design toward modern UI and away from the technical-drawing register
- **Don't mix serif or display fonts with the monospace system** -- introducing typographic variety destroys the uniform grid alignment and technical consistency that define the aesthetic
- **Don't use solid fills for large areas** -- heavy blocks of solid color belong to other aesthetics; the Wireframe Aesthetic communicates through outlines, strokes, and minimal fills
- **Don't hide structural elements** -- if the layout uses a grid, show the grid; if a component has a bounding box, show the bounding box; concealing structure defeats the core purpose of the style
- **Don't add complex animations or transitions** -- subtle border-style changes (dashed to solid on hover) are acceptable, but elaborate motion design contradicts the static, blueprint-like nature of the aesthetic
- **Don't forget functional annotation colors** -- while the palette is predominantly gray, neglecting the blue/red/green accent system removes the functional layer that makes wireframe designs readable and interactive

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| [Brutalist Web Design](Brutalist_Web_Design.md) | Shares the ethos of structural honesty and visible construction, but Brutalism uses heavy solid borders and raw HTML defaults where Wireframe uses thin dashed lines and deliberate annotation |
| [Minimalism](Minimalism.md) | Both strip away ornament and imagery, but Minimalism pursues quiet elegance through absence, while Wireframe Aesthetic fills the space with visible structure and annotation |
| [Blueprint Design](Blueprint_Design.md) | Close sibling that draws specifically from architectural blueprints (blue backgrounds, white lines); Wireframe Aesthetic uses a broader wireframing-tool language on white backgrounds |
| [Flat Design](Flat_Design.md) | Shares the rejection of depth and skeuomorphism; Flat Design fills shapes with solid color and smooth type, while Wireframe keeps shapes outlined and type monospaced |
| [Bento Grid](Bento_Grid.md) | Both celebrate visible grid structure, but Bento Grid uses filled, colorful cells with rounded corners as a polished layout system; Wireframe strips the grid to its structural skeleton |
| [Neubrutalism](Neubrutalism.md) | Descendant of Brutalism that adds thick borders and bold color; Wireframe Aesthetic shares the border-heavy approach but uses thin strokes, dashes, and gray tones instead of heavy black outlines |
| [Constructivism](Constructivism.md) | Historical parallel in using geometric structure as both framework and ornament; both movements expose the underlying system, though Constructivism layers political ideology onto the visual structure |
| [Terminal / CLI](Terminal_CLI.md) | Shares the monospace typography and developer-culture associations; Terminal aesthetic is about dark screens and command-line interaction, while Wireframe is about light backgrounds and spatial layout |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wireframe Aesthetic Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
  <style>
    /* =============================================
       CSS CUSTOM PROPERTIES
       ============================================= */
    :root {
      /* Grayscale */
      --wire-white: #ffffff;
      --wire-gray-50: #f5f5f5;
      --wire-gray-200: #e0e0e0;
      --wire-gray-400: #bdbdbd;
      --wire-gray-500: #9e9e9e;
      --wire-gray-600: #757575;
      --wire-gray-800: #424242;
      --wire-gray-900: #212121;
      --wire-black: #000000;

      /* Accents */
      --wire-blue: #2196f3;
      --wire-blue-dark: #1565c0;
      --wire-blue-tint: #90caf9;
      --wire-red: #e53935;
      --wire-green: #43a047;
      --wire-note: #fff9c4;

      /* Semantic */
      --wire-bg: var(--wire-white);
      --wire-bg-alt: var(--wire-gray-50);
      --wire-text: var(--wire-gray-800);
      --wire-heading: var(--wire-gray-900);
      --wire-border: var(--wire-gray-400);
      --wire-border-strong: var(--wire-gray-900);
      --wire-grid-line: var(--wire-gray-200);
      --wire-annotation: var(--wire-gray-500);
      --wire-link: var(--wire-blue);
      --wire-link-hover: var(--wire-blue-dark);
    }

    /* =============================================
       RESET & BASE
       ============================================= */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 14px;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'IBM Plex Mono', 'Consolas', 'Courier New', monospace;
      line-height: 1.7;
      color: var(--wire-text);
      background-color: var(--wire-bg);
      letter-spacing: 0.01em;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem;
    }

    /* =============================================
       GRID OVERLAY
       ============================================= */
    .grid-overlay {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 1200px;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.5rem;
      padding: 0 1.5rem;
      pointer-events: none;
      z-index: -1;
    }

    .grid-overlay .col {
      border-left: 1px solid var(--wire-grid-line);
      border-right: 1px solid var(--wire-grid-line);
      background-color: rgba(144, 202, 249, 0.03);
    }

    .grid-overlay .col:first-child {
      border-left: 1px solid var(--wire-gray-200);
    }

    .grid-overlay .col:last-child {
      border-right: 1px solid var(--wire-gray-200);
    }

    /* Grid column labels */
    .grid-labels {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .grid-labels span {
      font-size: 0.55rem;
      color: var(--wire-gray-400);
      text-align: center;
      letter-spacing: 0.05em;
    }

    /* =============================================
       TYPOGRAPHY
       ============================================= */
    h1, h2, h3, h4, h5, h6 {
      font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      line-height: 1.2;
      color: var(--wire-heading);
    }

    h1 { font-size: clamp(1.75rem, 4vw, 3rem); font-weight: 800; letter-spacing: 0.12em; }
    h2 { font-size: clamp(1.25rem, 3vw, 2rem); margin-bottom: 1rem; }
    h3 { font-size: clamp(1rem, 2vw, 1.35rem); font-weight: 500; }

    p { margin-bottom: 0.75rem; max-width: 70ch; }

    a {
      color: var(--wire-link);
      text-decoration: underline;
      text-decoration-style: dashed;
      text-underline-offset: 3px;
    }

    a:hover {
      color: var(--wire-link-hover);
      text-decoration-style: solid;
    }

    /* =============================================
       ANNOTATION LABEL MIXIN
       ============================================= */
    .labeled {
      position: relative;
    }

    .labeled::before {
      content: attr(data-label);
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.55rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    /* Corner registration mark */
    .corner-mark::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 10px;
      height: 10px;
      border-top: 1px solid var(--wire-gray-400);
      border-right: 1px solid var(--wire-gray-400);
    }

    /* =============================================
       NAVIGATION
       ============================================= */
    .nav {
      border: 1px dashed var(--wire-border);
      padding: 0.75rem 1.5rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .nav::before {
      content: 'NAV';
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.55rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    .nav ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      align-items: center;
    }

    .nav li:first-child {
      margin-right: auto;
    }

    .nav .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-heading);
      text-decoration: none;
    }

    .nav .logo:hover {
      color: var(--wire-blue);
    }

    .nav a {
      display: block;
      padding: 0.35rem 0.65rem;
      color: var(--wire-gray-800);
      text-decoration: none;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border: 1px dotted transparent;
    }

    .nav a:hover {
      border-color: var(--wire-blue);
      color: var(--wire-blue);
    }

    /* =============================================
       HERO SECTION
       ============================================= */
    .hero {
      min-height: 75vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem 2rem;
      border: 1px dashed var(--wire-border);
      margin-bottom: 1.5rem;
      position: relative;
    }

    .hero::before {
      content: 'HERO';
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.55rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    .hero::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 10px;
      height: 10px;
      border-top: 1px solid var(--wire-gray-400);
      border-right: 1px solid var(--wire-gray-400);
    }

    .hero h1 {
      line-height: 1.15;
      margin-bottom: 0;
    }

    .hero .subtitle {
      font-size: clamp(0.75rem, 1.2vw, 0.95rem);
      max-width: 55ch;
      margin-top: 1.25rem;
      line-height: 1.8;
      color: var(--wire-gray-600);
    }

    .hero .btn-row {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .hero .dimensions {
      position: absolute;
      bottom: 8px;
      right: 12px;
      font-size: 0.5rem;
      color: var(--wire-gray-400);
      letter-spacing: 0.05em;
    }

    /* =============================================
       BUTTONS
       ============================================= */
    .btn {
      display: inline-block;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 0.6rem 1.25rem;
      border: 1px dashed var(--wire-border-strong);
      background-color: var(--wire-bg);
      color: var(--wire-heading);
      cursor: pointer;
      text-decoration: none;
      transition: border-style 0.1s ease;
    }

    .btn:hover {
      border-style: solid;
      border-color: var(--wire-blue);
      color: var(--wire-blue);
    }

    .btn:active {
      background-color: var(--wire-blue);
      color: var(--wire-white);
      border-color: var(--wire-blue);
    }

    .btn--filled {
      background-color: var(--wire-gray-900);
      color: var(--wire-white);
      border-color: var(--wire-gray-900);
      border-style: solid;
    }

    .btn--filled:hover {
      background-color: var(--wire-blue);
      border-color: var(--wire-blue);
      color: var(--wire-white);
    }

    /* =============================================
       SECTIONS
       ============================================= */
    .section {
      border: 1px dashed var(--wire-border);
      padding: 2.5rem 2rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .section::before {
      content: attr(data-label);
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.55rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    .section::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 10px;
      height: 10px;
      border-top: 1px solid var(--wire-gray-400);
      border-right: 1px solid var(--wire-gray-400);
    }

    /* =============================================
       DIVIDER
       ============================================= */
    .divider {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 1.5rem 0;
      color: var(--wire-annotation);
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-top: 1px dashed var(--wire-gray-200);
    }

    .divider span {
      font-size: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    /* =============================================
       PLACEHOLDER IMAGE
       ============================================= */
    .placeholder {
      width: 100%;
      aspect-ratio: 16 / 9;
      border: 1px dashed var(--wire-border);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--wire-bg-alt);
      overflow: hidden;
    }

    .placeholder::before,
    .placeholder::after {
      content: '';
      position: absolute;
      width: 200%;
      height: 1px;
      background-color: var(--wire-gray-200);
      top: 50%;
      left: 50%;
    }

    .placeholder::before {
      transform: translate(-50%, -50%) rotate(26deg);
    }

    .placeholder::after {
      transform: translate(-50%, -50%) rotate(-26deg);
    }

    .placeholder span {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg-alt);
      padding: 0.15rem 0.5rem;
      z-index: 1;
    }

    .placeholder--square { aspect-ratio: 1 / 1; }

    /* =============================================
       CARD GRID
       ============================================= */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .card {
      border: 1px dashed var(--wire-border);
      padding: 1.25rem;
      position: relative;
      background-color: var(--wire-bg);
    }

    .card::before {
      content: 'CARD';
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-size: 0.5rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    .card:hover {
      border-color: var(--wire-blue);
      border-style: solid;
    }

    .card h3 {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px dashed var(--wire-gray-200);
    }

    .card p {
      font-size: 0.75rem;
      color: var(--wire-gray-600);
      line-height: 1.65;
    }

    .card .tag {
      display: inline-block;
      font-size: 0.55rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border: 1px dotted var(--wire-gray-400);
      padding: 0.15rem 0.4rem;
      margin-right: 0.2rem;
      margin-top: 0.5rem;
      color: var(--wire-gray-600);
    }

    .card .placeholder {
      margin-bottom: 0.75rem;
      aspect-ratio: 16 / 10;
    }

    /* =============================================
       FEATURES GRID
       ============================================= */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .feature {
      border: 1px dotted var(--wire-gray-400);
      padding: 1.25rem;
      text-align: center;
    }

    .feature .icon-placeholder {
      width: 48px;
      height: 48px;
      border: 1px dashed var(--wire-border);
      margin: 0 auto 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
      color: var(--wire-annotation);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .feature h4 {
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
      letter-spacing: 0.1em;
    }

    .feature p {
      font-size: 0.7rem;
      color: var(--wire-gray-600);
      max-width: none;
    }

    /* =============================================
       DATA TABLE
       ============================================= */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.75rem;
      margin-top: 1.5rem;
    }

    .data-table th,
    .data-table td {
      border: 1px dashed var(--wire-gray-200);
      padding: 0.6rem 0.8rem;
      text-align: left;
      vertical-align: top;
    }

    .data-table th {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--wire-heading);
      border-bottom: 1px solid var(--wire-gray-900);
      font-size: 0.65rem;
    }

    .data-table tr:hover td {
      background-color: var(--wire-bg-alt);
    }

    /* =============================================
       ANNOTATION MARKERS
       ============================================= */
    .marker {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.15rem;
      height: 1.15rem;
      border-radius: 50%;
      background-color: var(--wire-red);
      color: var(--wire-white);
      font-size: 0.5rem;
      font-weight: 700;
      cursor: default;
      vertical-align: super;
      margin-left: 0.15rem;
    }

    /* =============================================
       FOOTER
       ============================================= */
    .footer {
      border: 1px dashed var(--wire-border);
      padding: 2rem;
      margin-top: 1.5rem;
      position: relative;
    }

    .footer::before {
      content: 'FOOTER';
      position: absolute;
      top: -0.5em;
      left: 0.75rem;
      font-size: 0.55rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--wire-annotation);
      background-color: var(--wire-bg);
      padding: 0 0.35rem;
    }

    .footer p {
      font-size: 0.7rem;
      color: var(--wire-gray-600);
    }

    .footer a {
      color: var(--wire-gray-800);
    }

    .footer .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1.5rem;
    }

    .footer .footer-grid h4 {
      font-size: 0.6rem;
      margin-bottom: 0.5rem;
      color: var(--wire-annotation);
      border-bottom: 1px dotted var(--wire-gray-200);
      padding-bottom: 0.3rem;
    }

    .footer .footer-grid ul {
      list-style: none;
    }

    .footer .footer-grid li {
      padding: 0.15rem 0;
    }

    .footer .footer-grid a {
      font-size: 0.7rem;
      text-decoration: none;
    }

    .footer .footer-grid a:hover {
      color: var(--wire-blue);
      text-decoration-style: dashed;
      text-decoration-line: underline;
    }

    .footer .copyright {
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px dashed var(--wire-gray-200);
      font-size: 0.6rem;
      color: var(--wire-gray-500);
    }

    /* =============================================
       UTILITIES
       ============================================= */
    .mt-1 { margin-top: 0.75rem; }
    .mt-2 { margin-top: 1.5rem; }
    .mt-3 { margin-top: 2.25rem; }
    .text-muted { color: var(--wire-gray-600); }
    .text-annotation { color: var(--wire-annotation); font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.1em; }

    /* =============================================
       RESPONSIVE
       ============================================= */
    @media (max-width: 768px) {
      html { font-size: 13px; }

      body { padding: 1rem; }

      .hero {
        min-height: 60vh;
        padding: 2rem 1.5rem;
      }

      .section {
        padding: 2rem 1.5rem;
      }

      .grid-overlay {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        padding: 0 1rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .features {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero { min-height: 50vh; padding: 1.5rem 1rem; }
      .section { padding: 1.5rem 1rem; }
      .features { grid-template-columns: 1fr; }
      .nav ul { flex-direction: column; }
      .nav li:first-child { margin-right: 0; margin-bottom: 0.5rem; }
    }
  </style>
</head>
<body>

  <!-- GRID OVERLAY -->
  <div class="grid-overlay" aria-hidden="true">
    <div class="col"></div><div class="col"></div><div class="col"></div>
    <div class="col"></div><div class="col"></div><div class="col"></div>
    <div class="col"></div><div class="col"></div><div class="col"></div>
    <div class="col"></div><div class="col"></div><div class="col"></div>
  </div>

  <!-- GRID COLUMN LABELS -->
  <div class="grid-labels" aria-hidden="true">
    <span>1</span><span>2</span><span>3</span><span>4</span>
    <span>5</span><span>6</span><span>7</span><span>8</span>
    <span>9</span><span>10</span><span>11</span><span>12</span>
  </div>

  <!-- NAVIGATION -->
  <nav class="nav">
    <ul>
      <li><a href="#" class="logo">[Wireframe]</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#data">Data</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="home">
    <h1>Structure<br>Is the Design</h1>
    <p class="subtitle">
      A design aesthetic where the wireframe is the final product.
      Exposed grids, dashed borders, annotation labels, and monospace
      typography transform the skeletal framework into intentional
      visual style.
    </p>
    <div class="btn-row">
      <a href="#projects" class="btn">View Projects</a>
      <a href="#about" class="btn btn--filled">Learn More</a>
    </div>
    <span class="dimensions">1200 x 800</span>
  </section>

  <!-- ABOUT SECTION -->
  <section class="section" data-label="ABOUT" id="about">
    <h2>About This Approach</h2>
    <p>
      The Wireframe Aesthetic freezes the design process at the blueprint
      stage and declares it complete. Every container is outlined with
      dashed borders. Every region carries a structural label. The grid
      is permanently visible. Nothing is hidden.
    </p>
    <p>
      This is not a design in progress. This is the design. The skeleton
      is the style. The structure is the ornament.
    </p>

    <div class="divider"><span>Section Break</span></div>

    <div class="placeholder mt-2">
      <span>Image -- 1200 x 675</span>
    </div>
  </section>

  <!-- PROJECTS SECTION -->
  <section class="section" data-label="PROJECTS" id="projects">
    <h2>Projects</h2>
    <p>
      Each card below is a wireframe component. The dashed borders
      indicate container boundaries. Placeholder images use the
      conventional diagonal cross. Hover to see interactive states.
    </p>

    <div class="card-grid">
      <div class="card">
        <div class="placeholder">
          <span>Thumbnail</span>
        </div>
        <h3>Layout Engine</h3>
        <p>A CSS grid system that renders its own column guides as a permanent visual layer, making the 12-column structure visible to end users.</p>
        <span class="tag">CSS Grid</span>
        <span class="tag">Layout</span>
      </div>

      <div class="card">
        <div class="placeholder">
          <span>Thumbnail</span>
        </div>
        <h3>Schematic UI Kit</h3>
        <p>A component library where every element looks like a wireframe annotation, complete with dashed borders, labels, and dimension markers.</p>
        <span class="tag">Components</span>
        <span class="tag">Figma</span>
      </div>

      <div class="card">
        <div class="placeholder">
          <span>Thumbnail</span>
        </div>
        <h3>Blueprint Theme</h3>
        <p>A CMS theme that renders published content in wireframe style, proving that skeletal aesthetics work for real content at scale.</p>
        <span class="tag">Theme</span>
        <span class="tag">CMS</span>
      </div>

      <div class="card">
        <div class="placeholder">
          <span>Thumbnail</span>
        </div>
        <h3>Mono Type Specimen</h3>
        <p>A type specimen website built entirely in monospace, demonstrating that rich typographic hierarchy is achievable within a single font family.</p>
        <span class="tag">Typography</span>
        <span class="tag">Monospace</span>
      </div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section class="section" data-label="FEATURES" id="features">
    <h2>Features</h2>
    <p>
      Core characteristics of the wireframe design approach,
      presented as annotated feature blocks.
    </p>

    <div class="features">
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Visible Grid</h4>
        <p>Column guides remain visible, transforming layout scaffolding into surface design.</p>
      </div>
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Dashed Borders</h4>
        <p>Every container is outlined with dashed strokes, revealing structural boundaries.</p>
      </div>
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Annotations</h4>
        <p>Components carry visible labels identifying their structural role in the layout.</p>
      </div>
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Monospace Type</h4>
        <p>All text uses monospaced fonts for character-grid alignment and technical character.</p>
      </div>
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Placeholders</h4>
        <p>Image regions use the conventional diagonal-cross wireframe symbol.</p>
      </div>
      <div class="feature">
        <div class="icon-placeholder">Icon</div>
        <h4>Grayscale Palette</h4>
        <p>Color is restricted to functional accents; the palette is predominantly gray.</p>
      </div>
    </div>
  </section>

  <!-- DATA SECTION -->
  <section class="section" data-label="DATA TABLE" id="data">
    <h2>Specifications</h2>
    <p>Technical parameters for the wireframe design system.</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
          <th>Unit</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Grid Columns</td>
          <td>12</td>
          <td>columns</td>
          <td>Visible overlay with numbered labels</td>
        </tr>
        <tr>
          <td>Base Font Size</td>
          <td>14</td>
          <td>px</td>
          <td>IBM Plex Mono, all monospace stack</td>
        </tr>
        <tr>
          <td>Gutter Width</td>
          <td>24</td>
          <td>px</td>
          <td>1.5rem between grid columns</td>
        </tr>
        <tr>
          <td>Border Style</td>
          <td>dashed</td>
          <td>--</td>
          <td>1px dashed for containers; dotted for subtle</td>
        </tr>
        <tr>
          <td>Color Range</td>
          <td>15</td>
          <td>swatches</td>
          <td>10 grayscale + 5 functional accents</td>
        </tr>
        <tr>
          <td>Max Content Width</td>
          <td>1200</td>
          <td>px</td>
          <td>Centered with auto margins</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- CONTACT SECTION -->
  <section class="section" data-label="CONTACT" id="contact">
    <h2>Contact</h2>
    <p>
      Email: <a href="mailto:hello@example.com">hello@example.com</a><span class="marker">1</span>
      &nbsp;&mdash;&nbsp;
      Source: <a href="#">View Repository</a>
      &nbsp;&mdash;&nbsp;
      License: MIT
    </p>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#features">Features</a></li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Component Library</a></li>
          <li><a href="#">Grid System</a></li>
          <li><a href="#">Type Specimen</a></li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Discussions</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Contributing</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Licenses</a></li>
        </ul>
      </div>
    </div>
    <p class="copyright">
      Built with HTML and CSS. Monospace type. Dashed borders. Visible grid.
      The wireframe is the design. &copy; 2025
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the grid overlay** as the first element in your HTML: create a fixed 12-column grid behind all content using `position: fixed` and `z-index: -1`, then tint the columns at 3-4% opacity so the layout structure is permanently visible without competing with foreground content
- **Use the `data-label` attribute pattern** to create self-labeling components: apply a `::before` pseudo-element that reads `content: attr(data-label)` and positions the text as a small monospace label at the top-left corner of each dashed container, so adding labels requires only an HTML attribute change
- **Set `border-style: dashed` as your global default** and reserve `solid` borders for hover states and active selections; this single CSS choice establishes the wireframe register immediately and makes interactive state changes feel like "selecting" an element in a design tool
- **Keep your base font size at 14px or smaller** -- wireframe designs read best at slightly reduced scale because the monospace type, thin borders, and annotation labels evoke the zoomed-out view of a design canvas rather than the up-close reading experience of a finished page
- **Create placeholder image components** using pure CSS (diagonal linear gradients or pseudo-element borders) rather than actual SVG or image files; this keeps the wireframe self-contained and avoids external asset dependencies while maintaining the classic crossed-rectangle visual
- **Test at multiple viewport widths and visually update the grid overlay** to show column count changes (12 to 4 to 1) so that the responsive behavior itself becomes part of the visible design language
- **Use the `transition: border-style 0.1s ease` pattern** as your primary interaction feedback; the shift from dashed to solid on hover mimics the "selection" action in design software and provides clear interactive affordance without violating the schematic aesthetic
- **Pair this aesthetic with real content** to prove it works at production scale; the Wireframe Aesthetic is most impressive when it demonstrates that skeletal design can communicate actual information, not just placeholder lorem ipsum
