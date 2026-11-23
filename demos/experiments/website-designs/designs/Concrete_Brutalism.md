# Concrete Brutalism Design Reference

## Overview

Concrete Brutalism is a design aesthetic rooted in the architectural movement that emerged in the 1950s, built upon the French term *beton brut* -- meaning "raw concrete." Coined by Le Corbusier during the construction of the Unite d'Habitation in Marseille (1952), the philosophy celebrates the honest, unfinished beauty of poured concrete: the grain impressions left by wooden formwork, the subtle imperfections of aggregate, the monolithic weight of massive structural forms. Where traditional design seeks to conceal materials behind paint, polish, and ornament, Concrete Brutalism elevates the material itself as the primary visual language, treating every crack, seam, and surface irregularity as a deliberate expression of authenticity.

Translated into digital design, Concrete Brutalism carries forward these principles of material honesty and monumental form. Interfaces adopt the muted, mineral palette of raw concrete -- grays ranging from pale cement dust to dark wet stone, accented sparingly with the rust of exposed rebar, the warm amber of formwork timber, or the oxidized green of weathered copper. Typography is heavy, structural, and unapologetic, echoing the massive geometric slabs of Brutalist architecture. Layouts favor bold asymmetry, visible grid structures, and generous negative space that evokes the stark plazas surrounding Brutalist buildings. Textures play a central role: noise overlays, grain patterns, and subtle surface irregularities replicate the tactile quality of bush-hammered, board-marked, or exposed-aggregate concrete surfaces.

Unlike its web-focused cousin Brutalist Web Design (which strips the browser to its bare defaults) or the colorful playfulness of Neubrutalism, Concrete Brutalism specifically channels the *architectural* tradition. It is about weight, permanence, and the deliberate beauty of raw materials. Every design element should feel as though it was cast in a mold and left unfinished -- massive, textured, honest, and unmistakably made of something real. The aesthetic rejects the frictionless glass-and-gradient smoothness of contemporary UI trends in favor of surfaces that communicate their construction, materials that announce their presence, and forms that assert their structural purpose without apology.

---

## Visual Characteristics

### Core Design Traits

- **Raw concrete textures**: Surfaces display the visual character of beton brut -- board-marked grain patterns, exposed aggregate, and the mottled inconsistency of poured and cured concrete, achieved through CSS noise, background images, or SVG filters
- **Monolithic scale**: Elements are oversized and imposing, echoing the massive geometric volumes of Brutalist architecture; headers span full viewport widths, sections feel like structural slabs
- **Formwork impressions**: Visual references to the wooden boards used to cast concrete appear as subtle horizontal or vertical grain patterns embedded in backgrounds and surface textures
- **Monochrome mineral palette**: Colors are drawn from real concrete, stone, and steel -- warm grays, cool cement tones, charcoal, and off-whites dominate, with deliberate absence of saturated hues
- **Exposed structural elements**: Grid lines, borders, and layout scaffolding are left visible as honest expressions of the page's underlying architecture, much like exposed beams and columns in a Brutalist building
- **Heavy geometric forms**: Rectangles, sharp angles, and cantilevered arrangements dominate; curves are rare and always structural (arches, barrel vaults) rather than decorative
- **Material contrast accents**: Sparingly used warm tones -- rust (rebar and Corten steel), timber amber (formwork wood), oxidized copper green -- provide controlled contrast against the concrete gray foundation
- **Visible weight and mass**: Elements convey physical heaviness through thick borders, dense fills, strong shadows, and generous padding; nothing feels lightweight or floating
- **Textural depth without gradients**: Surface interest comes from noise, grain, and pattern overlays rather than smooth color gradients; depth is achieved through layered textures, not blur or transparency
- **Stark negative space**: Large empty areas surround monumental elements, evoking the open plazas and raw landscapes characteristic of Brutalist urban planning
- **Honest typography**: Type is set in strong, geometric sans-serifs or slab serifs that feel architectural -- letterforms that could be chiseled into a concrete facade
- **Deliberate imperfection**: Subtle irregularities in alignment, texture, and spacing humanize the design, reflecting Le Corbusier's philosophy that faults of texture add richness and humanity to architecture

### Design Principles

- **Truth to materials**: Every visual element should honestly represent what it is; do not simulate materials that are not present or apply decorative finishes that mask the underlying structure
- **Form follows structure**: The visual form of an element emerges from its structural purpose; a navigation bar is a horizontal beam, a card is a concrete panel, a footer is a foundation slab
- **Monumental permanence**: Design for the impression of lasting solidity; elements should feel as though they were poured in place and will endure indefinitely, rejecting the ephemeral trends of contemporary UI
- **Controlled brutality**: Raw does not mean careless; every crack, grain line, and surface texture is deliberately placed to achieve the specific emotional weight of honest material expression
- **Material hierarchy**: Concrete (gray) is the primary material, steel (dark charcoal) provides structural reinforcement, wood (warm amber) adds human warmth, and oxidized metal (rust, verdigris) marks the passage of time
- **Structural rhythm**: Repetition of proportional modules creates visual rhythm analogous to the repeating window bays, balconies, and structural grids of Brutalist facades
- **Light as material**: The interplay of light and shadow across textured surfaces is as important as the surfaces themselves; use directional shadows and contrast to create the illusion of physical depth
- **Honest scale**: Do not miniaturize what should be massive or enlarge what should be modest; respect the natural proportional relationships between structural and decorative elements

---

## Color Palette

The Concrete Brutalism palette is derived directly from the materials of Brutalist architecture: poured concrete in its many shades from pale cement to dark wet stone, the warm browns of timber formwork, the rust of exposed rebar and Corten steel, the dark charcoal of structural steel, and the verdigris of weathered copper. Color is used sparingly and always references a real material rather than an abstract decorative choice.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#D5D0CA](https://via.placeholder.com/20/D5D0CA/D5D0CA) | `#D5D0CA` | Light concrete -- primary background, open surfaces, negative space |
| ![#B8B2A8](https://via.placeholder.com/20/B8B2A8/B8B2A8) | `#B8B2A8` | Warm concrete -- secondary surfaces, card backgrounds, panels |
| ![#9C9588](https://via.placeholder.com/20/9C9588/9C9588) | `#9C9588` | Weathered concrete -- muted text, dividers, metadata |
| ![#7A746A](https://via.placeholder.com/20/7A746A/7A746A) | `#7A746A` | Aged concrete -- secondary text, structural borders |
| ![#5C5650](https://via.placeholder.com/20/5C5650/5C5650) | `#5C5650` | Dark concrete -- headings on light backgrounds, heavy borders |
| ![#3B3733](https://via.placeholder.com/20/3B3733/3B3733) | `#3B3733` | Charcoal stone -- primary text, dark structural elements |
| ![#2A2725](https://via.placeholder.com/20/2A2725/2A2725) | `#2A2725` | Deep shadow -- dark backgrounds, footer, heavy masses |
| ![#F0ECE6](https://via.placeholder.com/20/F0ECE6/F0ECE6) | `#F0ECE6` | Cement dust -- lightest surface, highlight areas |
| ![#8B4513](https://via.placeholder.com/20/8B4513/8B4513) | `#8B4513` | Rust / rebar -- warm accent, call-to-action, links |
| ![#A0522D](https://via.placeholder.com/20/A0522D/A0522D) | `#A0522D` | Corten steel -- hover states, secondary accent |
| ![#C19A6B](https://via.placeholder.com/20/C19A6B/C19A6B) | `#C19A6B` | Formwork timber -- warm highlight, wood-grain accents |
| ![#4A6741](https://via.placeholder.com/20/4A6741/4A6741) | `#4A6741` | Oxidized copper -- tertiary accent, success states, patina |
| ![#6B8F71](https://via.placeholder.com/20/6B8F71/6B8F71) | `#6B8F71` | Verdigris -- light green accent, subtle interactive elements |
| ![#1A1816](https://via.placeholder.com/20/1A1816/1A1816) | `#1A1816` | Raw iron -- deepest dark, text on light concrete |
| ![#E8DFD0](https://via.placeholder.com/20/E8DFD0/E8DFD0) | `#E8DFD0` | Limestone wash -- warm light background variant |

### CSS Custom Properties

```css
:root {
  /* Concrete spectrum */
  --concrete-dust: #f0ece6;
  --concrete-light: #d5d0ca;
  --concrete-warm: #b8b2a8;
  --concrete-weathered: #9c9588;
  --concrete-aged: #7a746a;
  --concrete-dark: #5c5650;
  --concrete-charcoal: #3b3733;
  --concrete-shadow: #2a2725;
  --concrete-limestone: #e8dfd0;

  /* Material accents */
  --concrete-rust: #8b4513;
  --concrete-corten: #a0522d;
  --concrete-timber: #c19a6b;
  --concrete-copper: #4a6741;
  --concrete-verdigris: #6b8f71;
  --concrete-iron: #1a1816;

  /* Functional tokens */
  --concrete-bg: var(--concrete-light);
  --concrete-bg-alt: var(--concrete-warm);
  --concrete-bg-dark: var(--concrete-shadow);
  --concrete-text: var(--concrete-charcoal);
  --concrete-text-muted: var(--concrete-aged);
  --concrete-text-inverse: var(--concrete-dust);
  --concrete-border: var(--concrete-dark);
  --concrete-accent: var(--concrete-rust);
  --concrete-accent-hover: var(--concrete-corten);
  --concrete-highlight: var(--concrete-timber);
}
```

---

## Typography

Concrete Brutalism demands typography that feels architectural -- letterforms with the structural clarity and physical weight of characters carved into a concrete facade or cast from a steel mold. Geometric sans-serifs and heavy slab serifs dominate, chosen for their blocky, monumental quality. Body text uses clean, readable faces that maintain the industrial character without sacrificing legibility. The overall effect should evoke signage on a Brutalist building: bold, uppercase, tightly tracked, and permanently set.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| Bebas Neue | 400 | Display headlines, hero text, monumental titles | [fonts.google.com/specimen/Bebas+Neue](https://fonts.google.com/specimen/Bebas+Neue) |
| Oswald | 400, 500, 700 | Section headings, navigation, structural labels | [fonts.google.com/specimen/Oswald](https://fonts.google.com/specimen/Oswald) |
| Roboto Slab | 400, 700 | Body text, editorial content, architectural slab serif | [fonts.google.com/specimen/Roboto+Slab](https://fonts.google.com/specimen/Roboto+Slab) |
| Roboto Condensed | 400, 700 | Secondary headings, captions, compact structural text | [fonts.google.com/specimen/Roboto+Condensed](https://fonts.google.com/specimen/Roboto+Condensed) |
| IBM Plex Sans | 400, 500, 700 | Body text, UI elements, clean industrial sans-serif | [fonts.google.com/specimen/IBM+Plex+Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) |
| Archivo Black | 400 | Heavy impact headlines, all-caps display text | [fonts.google.com/specimen/Archivo+Black](https://fonts.google.com/specimen/Archivo+Black) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Bebas Neue | IBM Plex Sans | Towering concrete monolith meets clean industrial precision |
| Archivo Black | Roboto Slab | Heavyweight impact paired with grounded slab-serif solidity |
| Oswald (700) | Roboto Condensed | Condensed structural authority with efficient, compact readability |
| Bebas Neue | Roboto Slab | Monumental display type grounded by warm architectural serifs |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;700&family=Roboto+Slab:wght@400;700&display=swap');

/* === Base Typography === */
body {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: var(--concrete-text);
  background-color: var(--concrete-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.0;
  color: var(--concrete-iron);
  margin: 0 0 0.5em 0;
}

h1 {
  font-size: clamp(3.5rem, 10vw, 9rem);
  letter-spacing: 0.06em;
}

h2 {
  font-size: clamp(2rem, 5vw, 4.5rem);
  letter-spacing: 0.04em;
}

h3 {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0;
}

a {
  color: var(--concrete-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
}

a:hover {
  color: var(--concrete-accent-hover);
  background-color: var(--concrete-highlight);
  text-decoration-thickness: 3px;
}

blockquote {
  border-left: 6px solid var(--concrete-dark);
  margin: 1.5em 0;
  padding: 1em 1.5em;
  background-color: var(--concrete-warm);
  font-family: 'Roboto Slab', serif;
  font-style: normal;
  color: var(--concrete-charcoal);
}
```

---

## Layout Principles

- **Monolithic section blocks**: Each content section is a massive, self-contained slab -- visually separated by thick borders or contrasting background colors, evoking stacked concrete floor plates in a Brutalist tower
- **Asymmetric cantilever compositions**: Key elements extend beyond expected boundaries, jutting into negative space like cantilevered balconies on a Brutalist facade, creating dynamic tension without decorative ornamentation
- **Visible structural grid**: The underlying column grid is expressed rather than hidden; borders, background color shifts, and alignment guides make the layout's skeleton apparent to the viewer
- **Generous monumental margins**: Wide margins and ample padding surround content blocks, evoking the stark plazas and open grounds that characterize Brutalist urban planning
- **Vertical rhythm through mass**: Sections alternate between heavy (dark, textured, dense) and light (open, pale, spacious) to create a rhythmic visual cadence analogous to the alternating solids and voids in a Brutalist elevation
- **Full-bleed surface treatments**: Textured backgrounds span the full viewport width without containment, reinforcing the sense of continuous material surfaces -- as though the screen were a single slab of concrete
- **Horizontal banding**: Content is organized into strong horizontal bands separated by thick borders or material changes, echoing the layered floor-plate construction visible on Brutalist building exteriors
- **No floating or hovering elements**: Sticky headers, floating action buttons, and overlay modals break the illusion of physical mass; every element should feel anchored to the page as if cast in place
- **Pillar-based navigation**: Navigation elements align to the left edge like structural columns, providing vertical anchoring and reinforcing the architectural metaphor
- **Proportional module system**: Use a consistent base unit (8px or 16px) scaled by integer multiples to maintain the disciplined proportional relationships found in modular Brutalist facades
- **Depth through layering, not elevation**: Visual depth comes from overlapping opaque surfaces and textured layers rather than box-shadows or drop-shadows; surfaces sit on top of each other like stacked concrete panels

---

## CSS / Design Techniques

### Concrete Texture Card

A content card that evokes a precast concrete panel -- textured surface, sharp edges, and visible structural borders.

```css
.concrete-card {
  background-color: var(--concrete-warm);
  border: 3px solid var(--concrete-dark);
  padding: 2rem;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
}

/* Concrete grain noise overlay */
.concrete-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
  z-index: 1;
}

.concrete-card > * {
  position: relative;
  z-index: 2;
}

.concrete-card h3 {
  margin-top: 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--concrete-aged);
}

.concrete-card p {
  color: var(--concrete-charcoal);
  margin-bottom: 0;
}

.concrete-card:hover {
  border-color: var(--concrete-rust);
}
```

### Brutalist Button

Buttons that feel like they were cast from a mold -- heavy, rectangular, with blunt state changes and no rounded corners.

```css
.concrete-button {
  display: inline-block;
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  border: 3px solid var(--concrete-charcoal);
  background-color: var(--concrete-charcoal);
  color: var(--concrete-dust);
  cursor: pointer;
  text-decoration: none;
  transition: none;
  position: relative;
}

.concrete-button:hover {
  background-color: var(--concrete-rust);
  border-color: var(--concrete-rust);
  color: var(--concrete-dust);
}

.concrete-button:active {
  background-color: var(--concrete-iron);
  border-color: var(--concrete-iron);
}

.concrete-button--outline {
  background-color: transparent;
  color: var(--concrete-charcoal);
}

.concrete-button--outline:hover {
  background-color: var(--concrete-charcoal);
  color: var(--concrete-dust);
}
```

### Navigation Bar

A horizontal structural beam anchoring the page, with navigation links arranged like modular bay divisions.

```css
.concrete-nav {
  background-color: var(--concrete-shadow);
  border-bottom: 4px solid var(--concrete-iron);
  padding: 0;
}

.concrete-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.concrete-nav li {
  border-right: 1px solid var(--concrete-dark);
}

.concrete-nav a {
  display: block;
  padding: 1rem 1.5rem;
  color: var(--concrete-dust);
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.concrete-nav a:hover {
  background-color: var(--concrete-rust);
  color: var(--concrete-dust);
}

.concrete-nav a.active {
  background-color: var(--concrete-dark);
  border-bottom: 3px solid var(--concrete-rust);
}
```

### Hero Section

A monumental, full-viewport slab with textured concrete background, massive typography, and the weight of a Brutalist facade.

```css
.concrete-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 3rem;
  background-color: var(--concrete-shadow);
  position: relative;
  overflow: hidden;
}

/* Board-marked concrete texture */
.concrete-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 18px,
      rgba(0,0,0,0.05) 18px,
      rgba(0,0,0,0.05) 20px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 80px,
      rgba(0,0,0,0.03) 80px,
      rgba(0,0,0,0.03) 82px
    );
  pointer-events: none;
  z-index: 1;
}

/* Noise grain overlay */
.concrete-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  z-index: 2;
}

.concrete-hero > * {
  position: relative;
  z-index: 3;
}

.concrete-hero h1 {
  font-size: clamp(4rem, 12vw, 12rem);
  line-height: 0.9;
  color: var(--concrete-dust);
  margin: 0;
}

.concrete-hero p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.35rem);
  max-width: 55ch;
  margin-top: 2rem;
  color: var(--concrete-weathered);
  line-height: 1.7;
}
```

### Formwork Texture Background

A reusable CSS technique for creating the appearance of board-marked concrete using only CSS -- no images required.

```css
.formwork-texture {
  position: relative;
  background-color: var(--concrete-light);
}

.formwork-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    /* Horizontal board lines */
    repeating-linear-gradient(
      180deg,
      transparent,
      transparent 22px,
      rgba(0,0,0,0.04) 22px,
      rgba(0,0,0,0.04) 24px
    ),
    /* Vertical formwork seams */
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 120px,
      rgba(0,0,0,0.06) 120px,
      rgba(0,0,0,0.06) 122px
    ),
    /* Subtle wood grain */
    repeating-linear-gradient(
      178deg,
      transparent,
      transparent 3px,
      rgba(0,0,0,0.015) 3px,
      rgba(0,0,0,0.015) 5px
    );
  pointer-events: none;
}
```

### Exposed Aggregate Section

A section treatment that emulates the speckled, rough texture of exposed-aggregate concrete finishes.

```css
.aggregate-section {
  padding: 4rem 3rem;
  background-color: var(--concrete-warm);
  position: relative;
}

.aggregate-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, var(--concrete-aged) 1px, transparent 1px),
    radial-gradient(circle, var(--concrete-weathered) 0.5px, transparent 0.5px);
  background-size: 12px 12px, 7px 7px;
  background-position: 0 0, 4px 4px;
  opacity: 0.4;
  pointer-events: none;
}

.aggregate-section > * {
  position: relative;
  z-index: 1;
}
```

### Structural Divider

Heavy horizontal rules that evoke the expansion joints and floor-plate edges visible on Brutalist building facades.

```css
.concrete-divider {
  border: none;
  height: 6px;
  background: linear-gradient(
    to bottom,
    var(--concrete-dark) 0%,
    var(--concrete-dark) 40%,
    var(--concrete-charcoal) 40%,
    var(--concrete-charcoal) 60%,
    var(--concrete-dark) 60%,
    var(--concrete-dark) 100%
  );
  margin: 0;
}

.concrete-divider--heavy {
  height: 10px;
  background: var(--concrete-iron);
}

.concrete-divider--rust {
  height: 4px;
  background: linear-gradient(
    to right,
    var(--concrete-rust),
    var(--concrete-corten),
    var(--concrete-rust)
  );
}
```

### Pillar Sidebar Layout

A two-column layout where the sidebar acts as a structural pillar -- a dark, narrow, load-bearing column anchoring the content.

```css
.pillar-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.pillar-sidebar {
  background-color: var(--concrete-shadow);
  padding: 2rem 1.5rem;
  border-right: 4px solid var(--concrete-iron);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.pillar-sidebar a {
  display: block;
  padding: 0.6rem 0;
  color: var(--concrete-weathered);
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--concrete-dark);
}

.pillar-sidebar a:hover {
  color: var(--concrete-dust);
  background-color: var(--concrete-dark);
  padding-left: 0.5rem;
}

.pillar-content {
  padding: 3rem;
}

@media (max-width: 768px) {
  .pillar-layout {
    grid-template-columns: 1fr;
  }

  .pillar-sidebar {
    position: static;
    height: auto;
    border-right: none;
    border-bottom: 4px solid var(--concrete-iron);
  }
}
```

---

## Design Do's and Don'ts

### Do's

- **Use concrete texture overlays** with CSS noise filters or subtle SVG patterns to give surfaces the tactile quality of real beton brut; the texture should be felt rather than seen at a glance
- **Maintain a strict material palette** -- every color in your design should reference a real physical material (concrete, steel, rust, timber, copper); if you cannot name the material, the color does not belong
- **Employ heavy, visible borders** of 3px or more to delineate structural boundaries between sections, evoking the expansion joints and panel seams of precast concrete construction
- **Use uppercase display type sparingly** for maximum monumental impact; reserve it for hero headings and section titles where the text should feel carved into the surface
- **Create depth through layered opacity** -- overlapping panels with slightly different concrete tones build visual depth without resorting to drop shadows or elevation tricks
- **Allow generous whitespace** (or rather, "gray-space") around monumental elements; the open plazas surrounding Brutalist buildings are as much a part of the design as the buildings themselves
- **Include material-honest hover states** -- buttons darken like wet concrete, links reveal the rust beneath the surface, and interactive elements show wear rather than glow or bounce
- **Test on dark and light backgrounds** -- Concrete Brutalism works in both light (cement dust) and dark (shadow concrete) modes, and your design should feel equally massive and textured in both

### Don'ts

- **Don't use border-radius** -- rounded corners are antithetical to the sharp, angular geometry of cast concrete; all corners must be square and absolute
- **Don't apply smooth transitions or ease-in-out animations** -- state changes should be abrupt and immediate, like the blunt impact of concrete against steel; if movement is needed, use a step function or instant snap
- **Don't use bright, saturated colors** -- neon greens, electric blues, and hot pinks belong to other aesthetics; the only permitted bright accents are rust and copper, and these should be used with restraint
- **Don't employ glassmorphism or transparency effects** -- frosted glass, backdrop-blur, and semi-transparent overlays contradict the opacity and solidity of concrete; every surface should be fully opaque
- **Don't use thin, lightweight fonts** -- hairline weights, light italics, and delicate serif faces undermine the monumental weight of the aesthetic; minimum font-weight for headings should be 700
- **Don't add decorative illustrations or icons** -- if imagery is used, it should be photography of actual concrete, architecture, or raw materials; decorative SVG illustrations and icon sets feel foreign
- **Don't float elements above the surface** -- avoid box-shadow effects that create the illusion of hovering cards; elements are cast in place and connected to the ground plane
- **Don't use gradient color fills** -- smooth gradients suggest a polished, refined surface; use flat fills, noise overlays, and textured patterns to create visual interest instead

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| [Brutalist Web Design](Brutalist_Web_Design.md) | Shares the honesty-first philosophy but strips the browser to its raw defaults; Concrete Brutalism adds architectural texture and material specificity where Brutalist Web Design embraces pure HTML |
| [Neubrutalism](Neubrutalism.md) | A colorful, playful descendant that retains thick borders and bold typography but adds saturated accent colors and hard-offset shadows; less material-honest, more stylistically expressive |
| [Raw Industrial](Raw_Industrial.md) | Kindred spirit in celebrating exposed materials and construction processes; Raw Industrial favors metal, rivets, and machinery where Concrete Brutalism centers on cast concrete and formwork |
| [Minimalism](Minimalism.md) | Both reduce visual noise, but Minimalism pursues serene elegance while Concrete Brutalism embraces the rough, textured weight of honest materials |
| [Constructivism](Constructivism.md) | Historical parallel in using bold geometry and structural expression as ideological design tools; both movements reject decorative superficiality in favor of honest, functional composition |
| [Wabi-Sabi](Wabi_Sabi.md) | Shares the appreciation for imperfection, natural aging, and material honesty; Wabi-Sabi finds beauty in gentle decay while Concrete Brutalism finds it in deliberate, imposing roughness |
| [Dark Academia](Dark_Academia.md) | Both use muted, warm palettes and evoke institutional architecture, but Dark Academia romanticizes while Concrete Brutalism confronts |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Concrete Brutalism Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* --- Custom Properties --- */
    :root {
      /* Concrete spectrum */
      --concrete-dust: #f0ece6;
      --concrete-light: #d5d0ca;
      --concrete-warm: #b8b2a8;
      --concrete-weathered: #9c9588;
      --concrete-aged: #7a746a;
      --concrete-dark: #5c5650;
      --concrete-charcoal: #3b3733;
      --concrete-shadow: #2a2725;
      --concrete-limestone: #e8dfd0;

      /* Material accents */
      --concrete-rust: #8b4513;
      --concrete-corten: #a0522d;
      --concrete-timber: #c19a6b;
      --concrete-copper: #4a6741;
      --concrete-verdigris: #6b8f71;
      --concrete-iron: #1a1816;

      /* Functional tokens */
      --concrete-bg: var(--concrete-light);
      --concrete-bg-alt: var(--concrete-warm);
      --concrete-bg-dark: var(--concrete-shadow);
      --concrete-text: var(--concrete-charcoal);
      --concrete-text-muted: var(--concrete-aged);
      --concrete-text-inverse: var(--concrete-dust);
      --concrete-border: var(--concrete-dark);
      --concrete-accent: var(--concrete-rust);
      --concrete-accent-hover: var(--concrete-corten);
      --concrete-highlight: var(--concrete-timber);
    }

    /* --- Reset & Base --- */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
      font-size: 17px;
      line-height: 1.7;
      color: var(--concrete-text);
      background-color: var(--concrete-bg);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* --- Typography --- */
    h1, h2, h3, h4 {
      font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      line-height: 1.0;
      color: var(--concrete-iron);
    }

    h3 {
      font-family: 'Roboto Slab', Georgia, serif;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 700;
    }

    a {
      color: var(--concrete-accent);
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 2px;
      transition: none;
    }

    a:hover {
      color: var(--concrete-accent-hover);
      background-color: var(--concrete-highlight);
    }

    /* --- Concrete Noise Utility --- */
    .concrete-texture {
      position: relative;
    }

    .concrete-texture::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E");
      background-size: 200px 200px;
      pointer-events: none;
      z-index: 1;
    }

    .concrete-texture > * {
      position: relative;
      z-index: 2;
    }

    /* --- Navigation --- */
    .nav {
      background-color: var(--concrete-shadow);
      border-bottom: 4px solid var(--concrete-iron);
      padding: 0;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .nav-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.3rem;
      letter-spacing: 0.2em;
      color: var(--concrete-dust);
      text-decoration: none;
      padding: 1rem 1.5rem;
      border-right: 1px solid var(--concrete-dark);
    }

    .nav-brand:hover {
      background-color: var(--concrete-dark);
      color: var(--concrete-dust);
    }

    .nav ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    .nav li {
      border-left: 1px solid var(--concrete-dark);
    }

    .nav a {
      display: block;
      padding: 1rem 1.5rem;
      color: var(--concrete-weathered);
      text-decoration: none;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 0.95rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .nav a:hover {
      background-color: var(--concrete-rust);
      color: var(--concrete-dust);
    }

    /* --- Hero --- */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 5rem 3rem;
      background-color: var(--concrete-shadow);
      position: relative;
      overflow: hidden;
    }

    /* Board-marked formwork texture */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 20px,
          rgba(255,255,255,0.03) 20px,
          rgba(255,255,255,0.03) 22px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(255,255,255,0.02) 100px,
          rgba(255,255,255,0.02) 102px
        );
      pointer-events: none;
      z-index: 1;
    }

    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      z-index: 2;
    }

    .hero > * {
      position: relative;
      z-index: 3;
    }

    .hero h1 {
      font-size: clamp(4rem, 13vw, 13rem);
      line-height: 0.88;
      color: var(--concrete-dust);
      margin: 0;
    }

    .hero h1 span {
      display: block;
      color: var(--concrete-rust);
    }

    .hero-subtitle {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: clamp(1rem, 1.8vw, 1.3rem);
      max-width: 52ch;
      margin-top: 2rem;
      color: var(--concrete-weathered);
      line-height: 1.8;
    }

    .hero .btn-row {
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0;
    }

    /* --- Buttons --- */
    .btn {
      display: inline-block;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.9rem 2.2rem;
      border: 3px solid var(--concrete-dust);
      background-color: transparent;
      color: var(--concrete-dust);
      cursor: pointer;
      text-decoration: none;
      transition: none;
    }

    .btn:hover {
      background-color: var(--concrete-rust);
      border-color: var(--concrete-rust);
      color: var(--concrete-dust);
    }

    .btn:active {
      background-color: var(--concrete-iron);
      border-color: var(--concrete-iron);
    }

    .btn--solid {
      background-color: var(--concrete-rust);
      border-color: var(--concrete-rust);
      color: var(--concrete-dust);
    }

    .btn--solid:hover {
      background-color: var(--concrete-corten);
      border-color: var(--concrete-corten);
    }

    .btn--dark {
      background-color: var(--concrete-charcoal);
      border-color: var(--concrete-charcoal);
      color: var(--concrete-dust);
    }

    .btn--dark:hover {
      background-color: var(--concrete-rust);
      border-color: var(--concrete-rust);
    }

    /* --- Structural Divider --- */
    .divider {
      border: none;
      height: 6px;
      background: var(--concrete-iron);
      margin: 0;
    }

    .divider--rust {
      height: 4px;
      background: linear-gradient(
        to right,
        var(--concrete-rust),
        var(--concrete-corten),
        var(--concrete-rust)
      );
    }

    /* --- Section Container --- */
    .section {
      padding: 5rem 3rem;
      border-bottom: 3px solid var(--concrete-dark);
      position: relative;
    }

    .section h2 {
      font-size: clamp(2.5rem, 6vw, 5rem);
      margin-bottom: 1.5rem;
    }

    .section-intro {
      max-width: 65ch;
      margin-bottom: 2.5rem;
      color: var(--concrete-aged);
      font-size: 1.05rem;
    }

    /* --- Card Grid --- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 0;
      border-top: 3px solid var(--concrete-dark);
      border-left: 3px solid var(--concrete-dark);
    }

    .card {
      border-right: 3px solid var(--concrete-dark);
      border-bottom: 3px solid var(--concrete-dark);
      padding: 2rem;
      background-color: var(--concrete-bg);
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
      background-size: 200px 200px;
      pointer-events: none;
    }

    .card > * {
      position: relative;
      z-index: 1;
    }

    .card:hover {
      background-color: var(--concrete-warm);
    }

    .card h3 {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--concrete-aged);
    }

    .card p {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      color: var(--concrete-dark);
    }

    .card-tag {
      display: inline-block;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 2px solid var(--concrete-aged);
      padding: 0.15rem 0.5rem;
      margin-right: 0.3rem;
      color: var(--concrete-aged);
    }

    /* --- Feature Blocks --- */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
      margin-top: 3rem;
    }

    .feature {
      padding: 2rem 0;
      border-top: 4px solid var(--concrete-rust);
    }

    .feature-number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 3rem;
      color: var(--concrete-weathered);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .feature h3 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    .feature p {
      font-size: 0.95rem;
      color: var(--concrete-dark);
      line-height: 1.7;
    }

    /* --- Data Table --- */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      margin-top: 2rem;
    }

    .data-table th,
    .data-table td {
      border: 3px solid var(--concrete-dark);
      padding: 0.8rem 1rem;
      text-align: left;
      vertical-align: top;
    }

    .data-table th {
      background-color: var(--concrete-charcoal);
      color: var(--concrete-dust);
      font-family: 'Bebas Neue', sans-serif;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .data-table tr:hover td {
      background-color: var(--concrete-warm);
    }

    /* --- Testimonial / Quote Block --- */
    .quote-block {
      padding: 3rem;
      background-color: var(--concrete-shadow);
      border-left: 8px solid var(--concrete-rust);
      margin: 3rem 0;
      position: relative;
    }

    .quote-block blockquote {
      font-family: 'Roboto Slab', Georgia, serif;
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      line-height: 1.7;
      color: var(--concrete-limestone);
      border: none;
      padding: 0;
      margin: 0;
      background: none;
    }

    .quote-block cite {
      display: block;
      margin-top: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 0.9rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--concrete-weathered);
      font-style: normal;
    }

    /* --- Footer --- */
    .footer {
      padding: 3rem;
      background-color: var(--concrete-iron);
      border-top: 6px solid var(--concrete-charcoal);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer h4 {
      font-size: 1rem;
      letter-spacing: 0.15em;
      color: var(--concrete-weathered);
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--concrete-dark);
    }

    .footer ul {
      list-style: none;
    }

    .footer li {
      padding: 0.3rem 0;
    }

    .footer a {
      color: var(--concrete-aged);
      text-decoration: none;
      font-size: 0.9rem;
    }

    .footer a:hover {
      color: var(--concrete-dust);
      background: none;
      text-decoration: underline;
    }

    .footer-bottom {
      border-top: 1px solid var(--concrete-dark);
      padding-top: 1.5rem;
    }

    .footer-bottom p {
      font-size: 0.8rem;
      color: var(--concrete-dark);
    }

    /* --- Utilities --- */
    .mt-1 { margin-top: 1rem; }
    .mt-2 { margin-top: 2rem; }
    .mt-3 { margin-top: 3rem; }

    /* --- Responsive --- */
    @media (max-width: 768px) {
      .hero {
        min-height: 80vh;
        padding: 3rem 1.5rem;
      }

      .section {
        padding: 3rem 1.5rem;
      }

      .nav-brand {
        padding: 0.75rem 1rem;
      }

      .nav a {
        padding: 0.75rem 1rem;
        font-size: 0.85rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .features {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer {
        padding: 2rem 1.5rem;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- NAVIGATION -->
  <nav class="nav">
    <div class="nav-inner">
      <a href="#" class="nav-brand">Beton Brut</a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#materials">Materials</a></li>
        <li><a href="#data">Data</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="top">
    <h1>Concrete<br><span>Brutalism</span></h1>
    <p class="hero-subtitle">
      Raw concrete. Honest materials. Massive forms. We build with the
      truth of beton brut -- celebrating the grain of formwork, the weight
      of aggregate, and the unfinished beauty of architecture that refuses
      to hide what it is made of.
    </p>
    <div class="btn-row">
      <a href="#projects" class="btn btn--solid">View Projects</a>
      <a href="#about" class="btn">Learn More</a>
    </div>
  </section>

  <hr class="divider--rust">

  <!-- ABOUT SECTION -->
  <section class="section concrete-texture" id="about">
    <h2>About the Practice</h2>
    <p class="section-intro">
      Born from Le Corbusier's declaration that raw concrete is beautiful in its
      imperfection, our work embraces the material honesty of Brutalist architecture.
      Every surface tells the story of its making -- the grain of the timber formwork,
      the marks of the casting process, the slow patina of weather and time.
    </p>
    <div class="features">
      <div class="feature">
        <div class="feature-number">01</div>
        <h3>Material Honesty</h3>
        <p>
          We never conceal what a building is made of. Concrete is left
          exposed. Steel is left unclad. The structure is the finish.
        </p>
      </div>
      <div class="feature">
        <div class="feature-number">02</div>
        <h3>Monumental Form</h3>
        <p>
          Our buildings assert their presence through scale and geometry.
          Massive cantilevers, deep reveals, and bold silhouettes define
          the relationship between structure and sky.
        </p>
      </div>
      <div class="feature">
        <div class="feature-number">03</div>
        <h3>Textured Surfaces</h3>
        <p>
          Board-marked, bush-hammered, or exposed-aggregate -- every
          concrete surface carries the deliberate texture of its making,
          humanizing the architecture through tactile imperfection.
        </p>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- PROJECTS (CARD GRID) -->
  <section class="section" id="projects">
    <h2>Projects</h2>
    <p class="section-intro">
      Each project is a concrete panel in a larger structure. The grid reveals
      the modular system; the borders are expansion joints. Hover to see the
      material beneath.
    </p>
    <div class="card-grid">
      <div class="card">
        <h3>Unité Résidentielle</h3>
        <p>
          A 337-unit housing block cast entirely in board-marked concrete.
          The facade records every plank of the formwork that shaped it.
          Twelve stories of honest material rising from an open piloti ground floor.
        </p>
        <span class="card-tag">Housing</span>
        <span class="card-tag">Béton Brut</span>
      </div>
      <div class="card">
        <h3>Aggregate Pavilion</h3>
        <p>
          An exhibition space with exposed-aggregate walls revealing the
          river stone embedded within. Bush-hammered columns support a
          cantilevered roof slab spanning 18 meters without intermediate support.
        </p>
        <span class="card-tag">Cultural</span>
        <span class="card-tag">Cantilever</span>
      </div>
      <div class="card">
        <h3>Formwork Library</h3>
        <p>
          A public library where every interior wall bears the imprint of
          the timber boards used to cast it. Reading alcoves are carved
          directly into the concrete mass, lit by deep slit windows.
        </p>
        <span class="card-tag">Public</span>
        <span class="card-tag">Board-Marked</span>
      </div>
      <div class="card">
        <h3>Piloti Tower</h3>
        <p>
          A 24-story residential tower raised on massive concrete piloti,
          freeing the ground plane for public passage. The raw concrete
          core is expressed as a visible spine running the full height of the building.
        </p>
        <span class="card-tag">Tower</span>
        <span class="card-tag">Piloti</span>
      </div>
    </div>
  </section>

  <hr class="divider--rust">

  <!-- QUOTE -->
  <div class="quote-block">
    <blockquote>
      "The raw concrete surface, with all the imprints of the formwork,
      adds a certain richness to the architecture. It humanises it."
    </blockquote>
    <cite>Le Corbusier, on the Unite d'Habitation, 1952</cite>
  </div>

  <!-- MATERIALS TABLE -->
  <section class="section concrete-texture" id="materials">
    <h2>Materials</h2>
    <p class="section-intro">
      A reference table of the primary materials and surface treatments
      used in Concrete Brutalism. Each material is left honest and unfinished.
    </p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Material</th>
          <th>Finish</th>
          <th>Application</th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Poured Concrete</td>
          <td>Board-marked</td>
          <td>Walls, ceilings, structural cores</td>
          <td>Horizontal grain lines from timber formwork</td>
        </tr>
        <tr>
          <td>Precast Concrete</td>
          <td>Smooth / sandblasted</td>
          <td>Facade panels, cladding</td>
          <td>Uniform surface with visible panel joints</td>
        </tr>
        <tr>
          <td>Exposed Aggregate</td>
          <td>Bush-hammered</td>
          <td>Feature walls, columns, paving</td>
          <td>Rough, speckled texture revealing stone within</td>
        </tr>
        <tr>
          <td>Corten Steel</td>
          <td>Weathered patina</td>
          <td>Cladding, screens, structural accents</td>
          <td>Deep rust-orange that stabilizes over time</td>
        </tr>
        <tr>
          <td>Raw Timber</td>
          <td>Untreated / oiled</td>
          <td>Formwork references, interior warmth</td>
          <td>Warm grain that contrasts with cool concrete</td>
        </tr>
      </tbody>
    </table>
  </section>

  <hr class="divider">

  <!-- DATA SECTION -->
  <section class="section" id="data">
    <h2>By the Numbers</h2>
    <p class="section-intro">
      Quantified characteristics of the Concrete Brutalism approach.
    </p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Context</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary palette colors</td>
          <td>8 grays</td>
          <td>Derived from concrete at different moisture levels</td>
        </tr>
        <tr>
          <td>Accent materials</td>
          <td>3</td>
          <td>Rust, timber, copper -- each referencing real substances</td>
        </tr>
        <tr>
          <td>Minimum border weight</td>
          <td>3px</td>
          <td>Thinner borders feel insubstantial against concrete textures</td>
        </tr>
        <tr>
          <td>Border-radius permitted</td>
          <td>0px</td>
          <td>No rounded corners -- concrete is cast in angular forms</td>
        </tr>
        <tr>
          <td>Transition duration</td>
          <td>0ms</td>
          <td>State changes are instantaneous -- like light on stone</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- CONTACT -->
  <section class="section" id="contact">
    <h2>Contact</h2>
    <p class="section-intro">
      Structural inquiries and material consultations.
    </p>
    <p>
      Email: <a href="mailto:studio@betonbrut.example">studio@betonbrut.example</a>
      &nbsp;&bull;&nbsp;
      Location: Marseille, France
      &nbsp;&bull;&nbsp;
      <a href="#">View on map</a>
    </p>
    <div class="mt-2">
      <a href="#" class="btn btn--dark">Send Inquiry</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <h4>Studio</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4>Work</h4>
        <ul>
          <li><a href="#">Residential</a></li>
          <li><a href="#">Cultural</a></li>
          <li><a href="#">Public</a></li>
          <li><a href="#">Infrastructure</a></li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Material Library</a></li>
          <li><a href="#">Concrete Finishes</a></li>
          <li><a href="#">Formwork Guide</a></li>
          <li><a href="#">Brutalism Archive</a></li>
        </ul>
      </div>
      <div>
        <h4>References</h4>
        <ul>
          <li><a href="#">Le Corbusier</a></li>
          <li><a href="#">Reyner Banham</a></li>
          <li><a href="#">Barbican Estate</a></li>
          <li><a href="#">Trellick Tower</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        Built with raw HTML and CSS. No frameworks. No build steps.
        View source to verify. &copy; 2025 Beton Brut Studio.
      </p>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Build the concrete texture system first**: Start by creating the CSS custom properties and the SVG noise overlay utility class; once these foundational materials are in place, every component automatically inherits the right surface quality without additional effort
- **Layer multiple texture techniques for depth**: Combine the board-marked linear-gradient pattern with the fractal noise SVG filter and the exposed-aggregate radial-gradient dots at different opacities; real concrete has multiple scales of texture, and your digital surfaces should too
- **Use `transition: none` globally as a reset**: Add `* { transition: none !important; }` during development to catch any inherited transitions from resets or third-party CSS; Concrete Brutalism demands instant state changes, and even a 100ms ease-out feels wrong against this aesthetic
- **Derive every color from a material photograph**: When in doubt about a color choice, photograph a real concrete, rust, or timber surface and sample directly from it; this ensures the palette maintains material honesty rather than drifting into arbitrary decorative color
- **Set minimum border-width to 3px**: Thinner borders disappear visually against the textured, noisy backgrounds; 3px is the threshold where a border reads as a structural joint rather than a hairline artifact
- **Test on mid-range displays at natural viewing distance**: Concrete textures and noise overlays can appear too dense on high-DPI screens viewed up close; calibrate opacity values while sitting at arm's length from a standard laptop display to ensure the texture is felt but not overpowering
- **Pair with real architectural photography**: If your project includes images, use photographs of actual Brutalist buildings, raw concrete surfaces, and construction details; stock photography of polished interiors or smiling people will clash violently with the material honesty of the design system
- **Progressive enhancement from raw HTML**: Begin with semantic, unstyled HTML and add the concrete texture layer last; the page should be fully functional and structurally sound before any visual treatment is applied, mirroring the Brutalist principle that structure precedes surface
