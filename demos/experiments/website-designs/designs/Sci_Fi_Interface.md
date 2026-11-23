# Sci-Fi Interface Design Reference

## Overview

Sci-Fi Interface -- also called FUI (Fantasy User Interface) or Fictional User Interface -- is a design aesthetic modeled after the heads-up displays, tactical dashboards, and telemetry readouts seen in science fiction cinema and video games. Think of the targeting reticles in Iron Man's helmet, the holographic war tables in Star Wars, the pilot HUDs in Halo, the transparent data overlays in Minority Report, or the bridge consoles of Star Trek. These interfaces communicate vast quantities of real-time data through layered translucent panels, animated ring gauges, radar sweeps, trajectory arcs, and scrolling numerical readouts -- all rendered against a dark void that simulates the cockpit of a spacecraft or the visor of a combat suit.

The visual language is rooted in military avionics and aerospace instrumentation. Real-world fighter-jet HUDs project altitude, heading, pitch ladders, and targeting brackets onto glass canopies in monochromatic green phosphor. Sci-Fi Interface design takes that functional DNA and amplifies it: the monochrome green becomes electric cyan, the simple pitch ladder becomes an elaborate three-dimensional grid, and the targeting bracket becomes a concentric animated reticle with rotating segmented rings. Every element suggests that a computer system is actively scanning, computing, and tracking in real time.

In web and UI design, the Sci-Fi Interface aesthetic translates to dark backgrounds overlaid with thin luminous borders, animated SVG gauge elements, monospaced telemetry readouts, clipped geometric panel shapes, and generous use of CSS transforms and keyframe animations to simulate live data feeds. The typography is always uppercase, widely letter-spaced, and geometric -- Orbitron and Electrolize are the canonical choices, descended from the Eurostile Bold Extended typeface that has served as the "font of the future" since 2001: A Space Odyssey. Color is used sparingly and functionally: cyan for primary data, amber or gold for warnings, red for critical alerts, and white for neutral text. The overall impression is one of precision, authority, and technological omniscience -- you are the operator of an advanced system, and every pixel exists to keep you informed.

Frameworks like Arwes (a futuristic sci-fi UI web framework) have demonstrated how these concepts translate into living web components with animated borders, sound effects, and transition systems inspired by Cyberprep aesthetics and productions like TRON: Legacy and Star Citizen.

---

## Visual Characteristics

### Core Design Traits

- **Dark void backgrounds** -- near-black or deep navy surfaces that simulate the vacuum of space or the interior of a cockpit canopy
- **Thin luminous borders** -- hairline strokes in cyan, teal, or white that define panels and create the wireframe skeleton of the HUD
- **Concentric ring elements** -- rotating, segmented circles used as targeting reticles, loading indicators, radar sweeps, and decorative accents
- **Clipped and angled panel shapes** -- `clip-path` polygons that create beveled, chamfered, or hexagonal containers instead of standard rectangles
- **Animated telemetry readouts** -- scrolling numbers, counting-up statistics, fluctuating bar graphs, and sine-wave oscilloscopes that simulate live data
- **Grid overlays and crosshairs** -- faint coordinate grids, axis lines, and crosshair markers layered behind content to suggest spatial awareness
- **Translucent layered panels** -- semi-transparent surfaces with `backdrop-filter: blur()` that stack at different depths, creating parallax and dimensional hierarchy
- **Scanline and noise textures** -- subtle horizontal line patterns or film-grain noise overlaid to evoke CRT monitors and analog signal processing
- **Corner bracket accents** -- L-shaped or bracket-shaped decorations at the corners of panels, mimicking the framing marks of a camera viewfinder or targeting system
- **Segmented arc gauges** -- partial circles divided into discrete segments that fill or deplete to represent percentages, health, fuel, or power levels
- **Minimal iconography** -- small geometric shapes (triangles, diamonds, hexagons) used as status indicators and waypoint markers
- **Particle and light effects** -- subtle floating particles, lens flares, and pulse animations that suggest an energy field or active scanning beam

### Design Principles

- Every visual element must serve an informational or navigational purpose -- decoration disguised as data
- Color is purely functional: hue communicates status (cyan = nominal, amber = caution, red = critical, green = confirmed)
- The interface should feel alive -- constant subtle animation implies real-time data processing and system awareness
- Hierarchy is established through luminance and glow intensity, not through size or weight alone
- Negative space is not empty -- it represents the void of space or the transparent canopy through which the HUD is projected
- Typography is always machine-generated in character: uppercase, monospaced, and letter-spaced, never organic or handwritten
- Borders and lines do more work than fills -- the aesthetic favors wireframe outlines over solid shapes
- Complexity is controlled: dense information is organized into clearly bounded zones with consistent alignment to a master grid

---

## Color Palette

The Sci-Fi Interface palette is dominated by cool, high-luminance hues against near-black backgrounds. Cyan is the signature color -- a direct inheritance from the green phosphor of real avionics HUDs, shifted to blue-green for a more futuristic feel. Amber and gold serve as the secondary voice for warnings and secondary data. Red is reserved strictly for alerts and critical states. The background tones are desaturated blues and blue-grays that provide just enough warmth to prevent the interface from feeling completely lifeless.

| Swatch | Hex | Role / Usage |
|--------|-----|--------------|
| **Void Black** | `#050A12` | Primary background, deepest layer of the cockpit void |
| **Deep Space** | `#0B1120` | Card and panel backgrounds, secondary surfaces |
| **Instrument Gray** | `#121B2E` | Elevated panels, navigation bars, modal backgrounds |
| **Grid Line** | `#1A2740` | Faint grid overlays, dividers, subtle structural lines |
| **HUD Cyan** | `#00E5FF` | Primary accent -- links, active elements, ring gauges, data readouts |
| **Teal Focus** | `#00B8D4` | Secondary interactive states, hover accents, progress indicators |
| **Reticle White** | `#E0F0FF` | Primary text, crosshair lines, high-priority labels |
| **Signal Amber** | `#FFAB00` | Warnings, caution indicators, secondary data highlights |
| **Alert Red** | `#FF1744` | Critical alerts, error states, danger zones, destruction indicators |
| **Confirm Green** | `#00E676` | Success states, lock-on confirmation, positive telemetry |
| **Scan Blue** | `#2979FF` | Tertiary accent, radar sweeps, scanning animations |
| **Dim Readout** | `#4A6080` | Secondary text, disabled states, muted telemetry labels |
| **Ghost Trace** | `#263850` | Inactive borders, subtle background accents, ghost elements |
| **Hologram Violet** | `#7C4DFF` | Decorative accent, holographic overlays, tertiary highlights |
| **Canopy Tint** | `#0A1628` | Full-page overlay tint, modal backdrop, depth layer |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --hud-bg-void: #050a12;
  --hud-bg-deep: #0b1120;
  --hud-bg-panel: #121b2e;
  --hud-bg-grid: #1a2740;
  --hud-bg-canopy: #0a1628;

  /* Primary accent */
  --hud-cyan: #00e5ff;
  --hud-cyan-rgb: 0, 229, 255;
  --hud-teal: #00b8d4;

  /* Status colors */
  --hud-amber: #ffab00;
  --hud-amber-rgb: 255, 171, 0;
  --hud-red: #ff1744;
  --hud-red-rgb: 255, 23, 68;
  --hud-green: #00e676;
  --hud-green-rgb: 0, 230, 118;
  --hud-blue: #2979ff;
  --hud-violet: #7c4dff;

  /* Text */
  --hud-text-primary: #e0f0ff;
  --hud-text-secondary: #4a6080;
  --hud-text-ghost: #263850;

  /* Glows */
  --hud-glow-cyan: 0 0 8px rgba(0, 229, 255, 0.5), 0 0 30px rgba(0, 229, 255, 0.15);
  --hud-glow-amber: 0 0 8px rgba(255, 171, 0, 0.5), 0 0 30px rgba(255, 171, 0, 0.15);
  --hud-glow-red: 0 0 8px rgba(255, 23, 68, 0.5), 0 0 30px rgba(255, 23, 68, 0.15);

  /* Borders */
  --hud-border: 1px solid rgba(0, 229, 255, 0.15);
  --hud-border-bright: 1px solid rgba(0, 229, 255, 0.5);
  --hud-border-amber: 1px solid rgba(255, 171, 0, 0.3);

  /* Sizing */
  --hud-radius: 2px;
  --hud-panel-padding: 24px;
}
```

---

## Typography

### Typeface Characteristics

Sci-Fi Interface typography inherits directly from the tradition established by Eurostile Bold Extended -- the typeface that appeared on HAL 9000's displays in 2001: A Space Odyssey and became the default "font of the future" for decades of cinema. The characteristics are:

- **Geometric and squared** -- letterforms built from circles, squares, and precise arcs with minimal organic curves
- **Uppercase-dominant** -- headings and labels are nearly always set in all-caps with generous letter-spacing to suggest machine-stamped stencils
- **Monospaced for data** -- any numerical readout, telemetry value, or data feed uses a monospaced typeface so digits align in columns
- **Thin to medium weight for ambient data** -- background telemetry uses lighter weights to remain visible without competing for attention
- **Bold weight for alerts and headings** -- critical information escalates in weight to demand the operator's focus
- **Wide or extended proportions** -- display fonts often have horizontally stretched letterforms, echoing the panoramic aspect ratios of cockpit displays

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Orbitron** | Geometric, squared, futuristic | Headlines, display text, HUD chrome labels |
| **Electrolize** | Square, digital, clean | Navigation, panel titles, data labels |
| **Share Tech Mono** | Monospaced, technical | Telemetry readouts, numerical data, code |
| **Exo 2** | Geometric, wide, variable | Hero text, large display headings |
| **Rajdhani** | Condensed, semi-rounded | Subheadings, secondary labels, compact UI text |
| **Space Mono** | Retro-futuristic monospace | Body text, data tables, terminal output |
| **Audiowide** | Wide, futuristic display | Logos, branding elements, splash screens |
| **Oxanium** | Rounded tech, geometric | Buttons, badges, interactive elements |
| **Zen Dots** | Sci-fi, dot-matrix feel | Decorative headings, loading screens |
| **IBM Plex Mono** | Clean, professional monospace | Long-form body text, readable data streams |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Orbitron** (700) | **Share Tech Mono** (400) | Classic HUD display -- the canonical sci-fi pairing |
| **Electrolize** (400) | **Space Mono** (400) | Clean tactical dashboard, data-rich layouts |
| **Exo 2** (700) | **IBM Plex Mono** (400) | Modern command center, readable at all sizes |
| **Audiowide** (400) | **Share Tech Mono** (400) | Cinematic display, splash pages, title sequences |
| **Rajdhani** (600) | **Space Mono** (400) | Compact instrument panel, dense UI layouts |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&family=Electrolize&display=swap');

/* Headings -- geometric and uppercase */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Orbitron', 'Electrolize', sans-serif;
  font-weight: 700;
  color: var(--hud-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
}

/* Display / Hero text with cyan glow */
.hud-display {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-cyan);
  text-shadow: 0 0 10px rgba(0, 229, 255, 0.6), 0 0 40px rgba(0, 229, 255, 0.2);
}

/* Body / telemetry text */
body {
  font-family: 'Share Tech Mono', 'Space Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--hud-text-primary);
}

/* Data readout values */
.hud-telemetry {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--hud-cyan);
  letter-spacing: 0.05em;
  font-variant-numeric: tabular-nums;
}

/* UI labels */
.hud-label {
  font-family: 'Electrolize', 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-text-secondary);
}

/* Alert text */
.hud-alert {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--hud-red);
  text-shadow: 0 0 8px rgba(255, 23, 68, 0.4);
}
```

---

## Layout Principles

- **Full-viewport dark canvas** -- the entire page background is near-black, simulating the void of space or the dark interior of a cockpit; there are no white or light sections
- **Grid-based panel arrangement** -- content is organized into clearly bounded rectangular zones arranged on a master grid, mimicking the instrument panels of an aircraft cockpit or command bridge
- **Asymmetric dashboard composition** -- panels vary in size and proportion; a large central viewport is flanked by narrower side columns of telemetry readouts, status bars, and secondary controls
- **Corner-anchored HUD overlays** -- key indicators (system status, coordinates, timestamps) are positioned in the corners of the viewport using fixed or absolute positioning, framing the content like a heads-up display
- **Layered depth through translucency** -- panels use semi-transparent backgrounds with `backdrop-filter: blur()` so that background elements (star fields, grid lines, scan animations) remain visible beneath
- **Thin border delineation** -- panels are separated by hairline luminous borders rather than spacing or shadows; the border IS the structure
- **Horizontal data bars** -- long, narrow strips spanning the full width or a major portion of it, used for navigation, status bars, progress indicators, or scrolling ticker-style data feeds
- **Circular and radial elements** -- ring gauges, radar displays, and concentric targeting reticles are placed as focal points, breaking the rectilinear grid with intentional circular geometry
- **Generous letter-spacing in labels** -- because panels are often compact, wide letter-spacing on small uppercase labels ensures readability and reinforces the machine-precision aesthetic
- **Fixed HUD frame elements** -- some decorative borders, corner brackets, or coordinate readouts remain fixed on screen while content scrolls, maintaining the illusion that the user is looking through a helmet visor or cockpit canopy
- **Responsive stacking with preserved aesthetics** -- on mobile, panels stack vertically but retain dark backgrounds, luminous borders, and HUD corner accents; circular elements scale down proportionally
- **Minimal use of imagery** -- photographs are rare; when used, they are desaturated and overlaid with grid lines or scan effects to integrate them into the HUD visual language

---

## CSS / Design Techniques

### HUD Card Component

```css
.hud-card {
  background: rgba(11, 17, 32, 0.85);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: var(--hud-radius);
  padding: var(--hud-panel-padding);
  position: relative;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.hud-card:hover {
  border-color: rgba(0, 229, 255, 0.5);
  box-shadow: var(--hud-glow-cyan);
}

/* Corner bracket accents */
.hud-card::before,
.hud-card::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: var(--hud-cyan);
  border-style: solid;
  transition: border-color 0.3s ease;
}

.hud-card::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.hud-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

/* Inner label bar */
.hud-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 229, 255, 0.1);
}

.hud-card-header .label {
  font-family: 'Electrolize', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-text-secondary);
}

.hud-card-header .status {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  color: var(--hud-green);
}
```

### HUD Button Component

```css
.hud-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  font-family: 'Electrolize', 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-cyan);
  background: transparent;
  border: 1px solid rgba(0, 229, 255, 0.3);
  border-radius: var(--hud-radius);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hud-btn:hover {
  color: var(--hud-bg-void);
  background: var(--hud-cyan);
  border-color: var(--hud-cyan);
  box-shadow: var(--hud-glow-cyan);
  text-shadow: none;
}

/* Scan-line sweep on hover */
.hud-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 229, 255, 0.15) 50%,
    transparent 100%
  );
  transition: left 0.5s ease;
}

.hud-btn:hover::after {
  left: 100%;
}

/* Warning variant */
.hud-btn--warning {
  color: var(--hud-amber);
  border-color: rgba(255, 171, 0, 0.3);
}

.hud-btn--warning:hover {
  color: var(--hud-bg-void);
  background: var(--hud-amber);
  border-color: var(--hud-amber);
  box-shadow: var(--hud-glow-amber);
}

/* Critical variant */
.hud-btn--critical {
  color: var(--hud-red);
  border-color: rgba(255, 23, 68, 0.3);
}

.hud-btn--critical:hover {
  color: var(--hud-bg-void);
  background: var(--hud-red);
  border-color: var(--hud-red);
  box-shadow: var(--hud-glow-red);
}

/* Clipped / angled variant */
.hud-btn--clipped {
  clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
  padding: 10px 32px;
}
```

### Navigation Bar

```css
.hud-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 56px;
  background: rgba(5, 10, 18, 0.9);
  border-bottom: 1px solid rgba(0, 229, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.hud-nav__brand {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hud-cyan);
  text-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
}

.hud-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.hud-nav__link {
  font-family: 'Electrolize', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-text-secondary);
  text-decoration: none;
  padding: 4px 0;
  position: relative;
  transition: color 0.3s ease;
}

.hud-nav__link:hover,
.hud-nav__link--active {
  color: var(--hud-cyan);
}

/* Animated underline targeting bracket */
.hud-nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--hud-cyan);
  box-shadow: 0 0 6px rgba(0, 229, 255, 0.5);
  transition: width 0.3s ease, left 0.3s ease;
}

.hud-nav__link:hover::after,
.hud-nav__link--active::after {
  width: 100%;
  left: 0;
}

/* Status indicator in nav */
.hud-nav__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  color: var(--hud-text-secondary);
}

.hud-nav__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--hud-green);
  box-shadow: 0 0 6px rgba(0, 230, 118, 0.6);
  animation: hud-pulse 2s ease-in-out infinite;
}
```

### Hero / HUD Viewport

```css
.hud-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 120px 32px;
  background: var(--hud-bg-void);
  overflow: hidden;
}

/* Coordinate grid background */
.hud-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
}

/* Targeting reticle centerpiece */
.hud-hero__reticle {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(0, 229, 255, 0.1);
  border-radius: 50%;
  animation: hud-rotate 30s linear infinite;
}

.hud-hero__reticle::before {
  content: '';
  position: absolute;
  inset: 20px;
  border: 1px dashed rgba(0, 229, 255, 0.08);
  border-radius: 50%;
  animation: hud-rotate 20s linear infinite reverse;
}

.hud-hero__reticle::after {
  content: '';
  position: absolute;
  inset: 50px;
  border: 1px solid rgba(0, 229, 255, 0.06);
  border-radius: 50%;
  border-top-color: rgba(0, 229, 255, 0.2);
  animation: hud-rotate 15s linear infinite;
}

/* Corner HUD brackets */
.hud-hero__corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: rgba(0, 229, 255, 0.3);
  border-style: solid;
}

.hud-hero__corner--tl { top: 32px; left: 32px; border-width: 2px 0 0 2px; }
.hud-hero__corner--tr { top: 32px; right: 32px; border-width: 2px 2px 0 0; }
.hud-hero__corner--bl { bottom: 32px; left: 32px; border-width: 0 0 2px 2px; }
.hud-hero__corner--br { bottom: 32px; right: 32px; border-width: 0 2px 2px 0; }

/* Hero headline */
.hud-hero__title {
  position: relative;
  z-index: 2;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  color: var(--hud-cyan);
  text-shadow: 0 0 20px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.1);
  margin-bottom: 16px;
}

/* Subtitle coordinates */
.hud-hero__subtitle {
  position: relative;
  z-index: 2;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hud-text-secondary);
}

/* Rotation keyframes */
@keyframes hud-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Scanline Overlay Effect

```css
/* Apply to a container to add CRT-style scanlines */
.hud-scanlines {
  position: relative;
}

.hud-scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.08) 1px,
    rgba(0, 0, 0, 0.08) 2px
  );
  pointer-events: none;
  z-index: 10;
}

/* Animated scan sweep -- a single bright line that moves down */
.hud-scan-sweep::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 229, 255, 0.3) 20%,
    rgba(0, 229, 255, 0.6) 50%,
    rgba(0, 229, 255, 0.3) 80%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  animation: hud-scan-sweep 4s linear infinite;
  pointer-events: none;
  z-index: 11;
}

@keyframes hud-scan-sweep {
  0% { top: -2px; opacity: 1; }
  100% { top: 100%; opacity: 0.3; }
}
```

### Animated Gauge Ring (SVG + CSS)

```css
/* Container for circular gauge */
.hud-gauge {
  position: relative;
  width: 160px;
  height: 160px;
}

.hud-gauge svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.hud-gauge__track {
  fill: none;
  stroke: rgba(0, 229, 255, 0.1);
  stroke-width: 3;
}

.hud-gauge__fill {
  fill: none;
  stroke: var(--hud-cyan);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 377; /* circumference for r=60 */
  stroke-dashoffset: 95; /* 75% filled: 377 * 0.25 */
  transition: stroke-dashoffset 1s ease;
  filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.5));
}

.hud-gauge__label {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hud-gauge__value {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.8rem;
  color: var(--hud-cyan);
}

.hud-gauge__unit {
  font-family: 'Electrolize', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--hud-text-secondary);
}
```

### Clipped Panel Shape

```css
/* Hexagonal / chamfered panel using clip-path */
.hud-panel-clipped {
  background: rgba(11, 17, 32, 0.85);
  padding: 28px 32px;
  clip-path: polygon(
    16px 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    16px 100%,
    0 calc(100% - 16px),
    0 16px
  );
  position: relative;
}

/* Since clip-path clips borders, we use an outline overlay */
.hud-panel-clipped::before {
  content: '';
  position: absolute;
  inset: 0;
  clip-path: polygon(
    16px 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    16px 100%,
    0 calc(100% - 16px),
    0 16px
  );
  border: 1px solid rgba(0, 229, 255, 0.2);
  pointer-events: none;
}
```

### Pulse and Glow Animations

```css
/* Pulsing glow for status indicators */
@keyframes hud-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px currentColor; }
  50% { opacity: 0.5; box-shadow: 0 0 12px currentColor, 0 0 24px currentColor; }
}

/* Blink animation for alerts */
@keyframes hud-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Typewriter / data stream animation */
@keyframes hud-typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.hud-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--hud-cyan);
  animation:
    hud-typewriter 2s steps(30) 1s forwards,
    hud-blink 0.8s step-end infinite;
  width: 0;
}

/* Fade-in from below for panel entrance */
@keyframes hud-panel-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hud-animate-in {
  animation: hud-panel-enter 0.6s ease-out forwards;
}

/* Radar sweep rotation */
@keyframes hud-radar-sweep {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use animation sparingly and purposefully** -- every moving element should suggest that a system is computing, scanning, or tracking; gratuitous animation breaks the illusion of a functional instrument
- **Do maintain strict color-to-meaning mapping** -- cyan for primary/nominal, amber for warning, red for critical, green for confirmed; consistency in this palette is what makes the interface feel like a real system
- **Do build hierarchy through luminance** -- the brightest elements are the most important; dim readouts recede into the background while glowing values demand attention
- **Do use monospaced fonts for all numerical data** -- tabular number alignment is essential for the telemetry aesthetic; digits must stack and scroll cleanly
- **Do add corner bracket accents to panels** -- these small L-shaped marks at the corners of cards and sections are the single most recognizable HUD motif and should appear consistently
- **Do layer translucent panels over a grid or starfield** -- the sense of depth and transparency is what separates a HUD from a flat dashboard
- **Do include fixed "visor frame" elements** -- coordinates, timestamps, or status indicators pinned to viewport corners maintain the first-person cockpit perspective
- **Do test animations on lower-powered devices** -- CSS glow filters and backdrop-blur can be performance-intensive; provide reduced-motion fallbacks with `prefers-reduced-motion`

### Don'ts

- **Don't use rounded corners or soft shapes** -- the aesthetic is angular, precise, and mechanical; border-radius should be 0-2px at most, never pill shapes or large radii
- **Don't introduce light or white backgrounds** -- the HUD only works against darkness; even modal overlays should use dark semi-transparent backgrounds, never white cards
- **Don't use decorative or handwritten fonts** -- script faces, serif faces, and playful typefaces are antithetical to the machine-generated, stencil-stamped feel of a military HUD
- **Don't use color randomly** -- if cyan means "nominal" in one section and "warning" in another, the entire system's credibility collapses; every hue must have a single consistent meaning
- **Don't add photographic backgrounds or busy textures** -- the background should be a void, a grid, or a subtle starfield; complex imagery competes with the translucent panel layers
- **Don't overload with too many simultaneous animations** -- a real HUD is calm under nominal conditions; constant flickering and spinning everywhere looks broken, not advanced
- **Don't forget accessibility** -- thin low-contrast text on dark backgrounds can be unreadable for many users; ensure that primary text meets WCAG AA contrast ratios (4.5:1) even within the dark palette
- **Don't skip the `prefers-reduced-motion` media query** -- users who are sensitive to motion should see a static version of the interface with all animations disabled

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Cyberpunk** | Shares dark backgrounds and neon accents, but Cyberpunk adds urban decay, rain, and cultural grit; Sci-Fi Interface is cleaner, more military/aerospace |
| **Brutalist** | Both favor exposed structure and raw geometry, but Brutalist rejects the polished precision and color coding of the HUD aesthetic |
| **Vaporwave** | Shares retro-futuristic vibes and grid motifs, but Vaporwave is pastel, nostalgic, and ironic; Sci-Fi Interface is earnest and functional |
| **Dark Mode UI** | Sci-Fi Interface is an extreme, narrative-driven extension of dark mode principles -- all the same contrast rules apply |
| **Glassmorphism** | Both use translucent blurred panels, but Glassmorphism is light-themed and soft; Sci-Fi Interface uses translucency against darkness with sharp borders |
| **Retrowave / Synthwave** | Shares neon-on-dark and grid aesthetics from 1980s sci-fi cinema; Retrowave is more nostalgic and music-culture-oriented |
| **3D Immersive** | Both create depth and spatial environments; Sci-Fi Interface achieves this through 2D layering and perspective tricks rather than WebGL |
| **Military / Tactical** | The direct real-world ancestor; actual fighter-jet HUDs, radar screens, and command centers are the source material that Sci-Fi Interface romanticizes |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sci-Fi Interface -- HUD Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <style>
    /* =============================================
       CSS CUSTOM PROPERTIES
       ============================================= */
    :root {
      /* Backgrounds */
      --hud-bg-void: #050a12;
      --hud-bg-deep: #0b1120;
      --hud-bg-panel: #121b2e;
      --hud-bg-grid: #1a2740;
      --hud-bg-canopy: #0a1628;

      /* Primary accent */
      --hud-cyan: #00e5ff;
      --hud-cyan-rgb: 0, 229, 255;
      --hud-teal: #00b8d4;

      /* Status colors */
      --hud-amber: #ffab00;
      --hud-amber-rgb: 255, 171, 0;
      --hud-red: #ff1744;
      --hud-red-rgb: 255, 23, 68;
      --hud-green: #00e676;
      --hud-green-rgb: 0, 230, 118;
      --hud-blue: #2979ff;
      --hud-violet: #7c4dff;

      /* Text */
      --hud-text-primary: #e0f0ff;
      --hud-text-secondary: #4a6080;
      --hud-text-ghost: #263850;

      /* Glows */
      --hud-glow-cyan: 0 0 8px rgba(0, 229, 255, 0.5), 0 0 30px rgba(0, 229, 255, 0.15);
      --hud-glow-amber: 0 0 8px rgba(255, 171, 0, 0.5), 0 0 30px rgba(255, 171, 0, 0.15);
      --hud-glow-red: 0 0 8px rgba(255, 23, 68, 0.5), 0 0 30px rgba(255, 23, 68, 0.15);

      /* Borders */
      --hud-border: 1px solid rgba(0, 229, 255, 0.15);
      --hud-border-bright: 1px solid rgba(0, 229, 255, 0.5);

      /* Sizing */
      --hud-radius: 2px;
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
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--hud-text-primary);
      background: var(--hud-bg-void);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      line-height: 1.2;
    }

    a {
      color: var(--hud-cyan);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--hud-text-primary);
      text-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* =============================================
       SCANLINE OVERLAY (full-page)
       ============================================= */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.06) 1px,
        rgba(0, 0, 0, 0.06) 2px
      );
      pointer-events: none;
      z-index: 9999;
    }

    /* =============================================
       NAVIGATION
       ============================================= */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      height: 56px;
      background: rgba(5, 10, 18, 0.92);
      border-bottom: 1px solid rgba(0, 229, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .nav__brand {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--hud-cyan);
      text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
    }

    .nav__links {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    .nav__link {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
      text-decoration: none;
      position: relative;
      padding: 4px 0;
      transition: color 0.3s ease;
    }

    .nav__link:hover,
    .nav__link--active {
      color: var(--hud-cyan);
      text-shadow: 0 0 6px rgba(0, 229, 255, 0.3);
    }

    .nav__link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 1px;
      background: var(--hud-cyan);
      box-shadow: 0 0 6px rgba(0, 229, 255, 0.5);
      transition: width 0.3s ease, left 0.3s ease;
    }

    .nav__link:hover::after,
    .nav__link--active::after {
      width: 100%;
      left: 0;
    }

    .nav__status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.68rem;
      color: var(--hud-text-secondary);
    }

    .nav__status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--hud-green);
      box-shadow: 0 0 6px rgba(0, 230, 118, 0.6);
      animation: pulse 2s ease-in-out infinite;
    }

    /* =============================================
       HERO SECTION
       ============================================= */
    .hero {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 120px 32px 80px;
      overflow: hidden;
    }

    /* Grid background */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0, 229, 255, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 229, 255, 0.035) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 55% 55% at 50% 50%, black 20%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse 55% 55% at 50% 50%, black 20%, transparent 70%);
    }

    /* Rotating targeting reticle */
    .hero__reticle {
      position: absolute;
      width: 350px;
      height: 350px;
      border: 1px solid rgba(0, 229, 255, 0.08);
      border-radius: 50%;
      border-top-color: rgba(0, 229, 255, 0.2);
      animation: rotate 30s linear infinite;
    }

    .hero__reticle-inner {
      position: absolute;
      inset: 30px;
      border: 1px dashed rgba(0, 229, 255, 0.06);
      border-radius: 50%;
      animation: rotate 20s linear infinite reverse;
    }

    .hero__reticle-core {
      position: absolute;
      inset: 65px;
      border: 1px solid rgba(0, 229, 255, 0.05);
      border-radius: 50%;
      border-bottom-color: rgba(0, 229, 255, 0.15);
      animation: rotate 12s linear infinite;
    }

    /* Crosshair lines */
    .hero__crosshair-h,
    .hero__crosshair-v {
      position: absolute;
      background: rgba(0, 229, 255, 0.06);
    }

    .hero__crosshair-h {
      width: 60%;
      height: 1px;
      top: 50%;
      left: 20%;
    }

    .hero__crosshair-v {
      width: 1px;
      height: 40%;
      left: 50%;
      top: 30%;
    }

    /* HUD corner brackets */
    .hero__corner {
      position: absolute;
      width: 36px;
      height: 36px;
      border-color: rgba(0, 229, 255, 0.25);
      border-style: solid;
    }

    .hero__corner--tl { top: 28px; left: 28px; border-width: 2px 0 0 2px; }
    .hero__corner--tr { top: 28px; right: 28px; border-width: 2px 2px 0 0; }
    .hero__corner--bl { bottom: 28px; left: 28px; border-width: 0 0 2px 2px; }
    .hero__corner--br { bottom: 28px; right: 28px; border-width: 0 2px 2px 0; }

    .hero__content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
    }

    .hero__label {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
      margin-bottom: 20px;
    }

    .hero__title {
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 900;
      letter-spacing: 0.12em;
      color: var(--hud-cyan);
      text-shadow:
        0 0 20px rgba(0, 229, 255, 0.4),
        0 0 60px rgba(0, 229, 255, 0.1);
      margin-bottom: 20px;
    }

    .hero__subtitle {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      color: var(--hud-text-secondary);
      margin-bottom: 40px;
    }

    .hero__coords {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.7rem;
      color: var(--hud-text-ghost);
      letter-spacing: 0.1em;
      margin-top: 60px;
    }

    /* =============================================
       BUTTONS
       ============================================= */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 28px;
      font-family: 'Electrolize', sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--hud-cyan);
      background: transparent;
      border: 1px solid rgba(0, 229, 255, 0.3);
      border-radius: var(--hud-radius);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .btn:hover {
      color: var(--hud-bg-void);
      background: var(--hud-cyan);
      border-color: var(--hud-cyan);
      box-shadow: var(--hud-glow-cyan);
      text-shadow: none;
    }

    .btn::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 229, 255, 0.12),
        transparent
      );
      transition: left 0.5s ease;
    }

    .btn:hover::after {
      left: 100%;
    }

    .btn--amber {
      color: var(--hud-amber);
      border-color: rgba(255, 171, 0, 0.3);
    }

    .btn--amber:hover {
      color: var(--hud-bg-void);
      background: var(--hud-amber);
      border-color: var(--hud-amber);
      box-shadow: var(--hud-glow-amber);
    }

    .btn--clipped {
      clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
      padding: 12px 36px;
    }

    /* =============================================
       STATUS BAR
       ============================================= */
    .status-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 14px 32px;
      background: var(--hud-bg-deep);
      border-top: 1px solid rgba(0, 229, 255, 0.1);
      border-bottom: 1px solid rgba(0, 229, 255, 0.1);
    }

    .status-bar__item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .status-bar__label {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
    }

    .status-bar__value {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.85rem;
      color: var(--hud-cyan);
    }

    .status-bar__value--amber { color: var(--hud-amber); }
    .status-bar__value--green { color: var(--hud-green); }

    /* =============================================
       SECTION WRAPPER
       ============================================= */
    .section {
      padding: 80px 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section__header {
      text-align: center;
      margin-bottom: 56px;
    }

    .section__label {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
      margin-bottom: 12px;
    }

    .section__title {
      font-size: clamp(1.5rem, 3.5vw, 2.2rem);
      letter-spacing: 0.1em;
      color: var(--hud-text-primary);
    }

    .section__divider {
      width: 60px;
      height: 1px;
      background: var(--hud-cyan);
      box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
      margin: 20px auto 0;
    }

    /* =============================================
       CARD GRID
       ============================================= */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .card {
      background: rgba(11, 17, 32, 0.85);
      border: 1px solid rgba(0, 229, 255, 0.15);
      border-radius: var(--hud-radius);
      padding: 28px;
      position: relative;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      border-color: rgba(0, 229, 255, 0.45);
      box-shadow: var(--hud-glow-cyan);
    }

    /* Corner brackets */
    .card::before,
    .card::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--hud-cyan);
      border-style: solid;
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

    .card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(0, 229, 255, 0.08);
    }

    .card__tag {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
    }

    .card__status {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      color: var(--hud-green);
    }

    .card__title {
      font-family: 'Orbitron', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      color: var(--hud-text-primary);
      margin-bottom: 12px;
    }

    .card__text {
      font-size: 0.82rem;
      color: var(--hud-text-secondary);
      line-height: 1.7;
    }

    .card__metric {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-top: 20px;
      padding-top: 14px;
      border-top: 1px solid rgba(0, 229, 255, 0.08);
    }

    .card__metric-value {
      font-family: 'Share Tech Mono', monospace;
      font-size: 1.6rem;
      color: var(--hud-cyan);
    }

    .card__metric-unit {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
    }

    /* =============================================
       GAUGE ROW
       ============================================= */
    .gauge-row {
      display: flex;
      justify-content: center;
      gap: 48px;
      flex-wrap: wrap;
      margin-top: 48px;
    }

    .gauge {
      position: relative;
      width: 140px;
      height: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .gauge svg {
      width: 140px;
      height: 140px;
      transform: rotate(-90deg);
    }

    .gauge__track {
      fill: none;
      stroke: rgba(0, 229, 255, 0.08);
      stroke-width: 3;
    }

    .gauge__fill {
      fill: none;
      stroke: var(--hud-cyan);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-dasharray: 339;
      stroke-dashoffset: 85;
      transition: stroke-dashoffset 1.5s ease;
      filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.5));
    }

    .gauge__fill--amber {
      stroke: var(--hud-amber);
      stroke-dashoffset: 136;
      filter: drop-shadow(0 0 4px rgba(255, 171, 0, 0.5));
    }

    .gauge__fill--green {
      stroke: var(--hud-green);
      stroke-dashoffset: 34;
      filter: drop-shadow(0 0 4px rgba(0, 230, 118, 0.5));
    }

    .gauge__label-group {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .gauge__value {
      font-family: 'Share Tech Mono', monospace;
      font-size: 1.5rem;
      color: var(--hud-cyan);
    }

    .gauge__value--amber { color: var(--hud-amber); }
    .gauge__value--green { color: var(--hud-green); }

    .gauge__unit {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.6rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
      margin-top: 2px;
    }

    /* =============================================
       TELEMETRY SECTION
       ============================================= */
    .telemetry {
      padding: 48px 32px;
      background: var(--hud-bg-deep);
      border-top: 1px solid rgba(0, 229, 255, 0.1);
      border-bottom: 1px solid rgba(0, 229, 255, 0.1);
    }

    .telemetry__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .telemetry__item {
      text-align: center;
    }

    .telemetry__value {
      font-family: 'Share Tech Mono', monospace;
      font-size: 2rem;
      color: var(--hud-cyan);
      line-height: 1;
      margin-bottom: 8px;
    }

    .telemetry__label {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
    }

    /* =============================================
       CTA / ALERT SECTION
       ============================================= */
    .cta {
      position: relative;
      text-align: center;
      padding: 100px 32px;
      overflow: hidden;
    }

    .cta::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse 50% 50% at 50% 50%,
        rgba(0, 229, 255, 0.04),
        transparent
      );
    }

    .cta__title {
      position: relative;
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      letter-spacing: 0.1em;
      color: var(--hud-text-primary);
      margin-bottom: 16px;
    }

    .cta__subtitle {
      position: relative;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.85rem;
      color: var(--hud-text-secondary);
      margin-bottom: 36px;
      letter-spacing: 0.1em;
    }

    /* =============================================
       FOOTER
       ============================================= */
    .footer {
      padding: 40px 32px;
      border-top: 1px solid rgba(0, 229, 255, 0.1);
      background: var(--hud-bg-deep);
    }

    .footer__inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer__brand {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
    }

    .footer__links {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    .footer__link {
      font-family: 'Electrolize', sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--hud-text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer__link:hover {
      color: var(--hud-cyan);
    }

    .footer__coords {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      color: var(--hud-text-ghost);
    }

    /* =============================================
       ANIMATIONS
       ============================================= */
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    @keyframes scan-sweep {
      0% { top: -2px; opacity: 0.8; }
      100% { top: 100%; opacity: 0.2; }
    }

    /* =============================================
       REDUCED MOTION
       ============================================= */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* =============================================
       RESPONSIVE
       ============================================= */
    @media (max-width: 768px) {
      .nav {
        padding: 0 16px;
      }

      .nav__links {
        gap: 16px;
      }

      .nav__status {
        display: none;
      }

      .hero {
        padding: 100px 20px 60px;
      }

      .hero__reticle {
        width: 220px;
        height: 220px;
      }

      .hero__corner {
        width: 24px;
        height: 24px;
      }

      .hero__corner--tl { top: 16px; left: 16px; }
      .hero__corner--tr { top: 16px; right: 16px; }
      .hero__corner--bl { bottom: 16px; left: 16px; }
      .hero__corner--br { bottom: 16px; right: 16px; }

      .section { padding: 56px 20px; }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .status-bar {
        flex-wrap: wrap;
        gap: 16px 32px;
      }

      .gauge-row { gap: 24px; }

      .footer__inner {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <!-- =========================================
       NAVIGATION
       ========================================= -->
  <nav class="nav">
    <div class="nav__brand">Nexus HUD</div>
    <ul class="nav__links">
      <li><a href="#systems" class="nav__link nav__link--active">Systems</a></li>
      <li><a href="#telemetry" class="nav__link">Telemetry</a></li>
      <li><a href="#diagnostics" class="nav__link">Diagnostics</a></li>
      <li><a href="#comms" class="nav__link">Comms</a></li>
    </ul>
    <div class="nav__status">
      <span class="nav__status-dot"></span>
      SYS:ONLINE
    </div>
  </nav>

  <!-- =========================================
       HERO
       ========================================= -->
  <section class="hero">
    <!-- Corner brackets -->
    <div class="hero__corner hero__corner--tl"></div>
    <div class="hero__corner hero__corner--tr"></div>
    <div class="hero__corner hero__corner--bl"></div>
    <div class="hero__corner hero__corner--br"></div>

    <!-- Targeting reticle -->
    <div class="hero__reticle">
      <div class="hero__reticle-inner"></div>
      <div class="hero__reticle-core"></div>
    </div>

    <!-- Crosshair lines -->
    <div class="hero__crosshair-h"></div>
    <div class="hero__crosshair-v"></div>

    <!-- Content -->
    <div class="hero__content">
      <p class="hero__label">// System Interface v4.7.2 -- Operational</p>
      <h1 class="hero__title">Nexus Command</h1>
      <p class="hero__subtitle">Heads-up display &bull; Tactical awareness &bull; Telemetry integration</p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <a href="#systems" class="btn">Initialize Systems</a>
        <a href="#telemetry" class="btn btn--amber">View Telemetry</a>
      </div>
      <p class="hero__coords">LAT 34.0522 &bull; LON -118.2437 &bull; ALT 12,400 FT &bull; HDG 270&deg;</p>
    </div>
  </section>

  <!-- =========================================
       STATUS BAR
       ========================================= -->
  <div class="status-bar">
    <div class="status-bar__item">
      <span class="status-bar__label">Reactor</span>
      <span class="status-bar__value status-bar__value--green">NOMINAL</span>
    </div>
    <div class="status-bar__item">
      <span class="status-bar__label">Hull</span>
      <span class="status-bar__value">98.7%</span>
    </div>
    <div class="status-bar__item">
      <span class="status-bar__label">Shields</span>
      <span class="status-bar__value status-bar__value--amber">CHARGING</span>
    </div>
    <div class="status-bar__item">
      <span class="status-bar__label">Fuel</span>
      <span class="status-bar__value">74.2%</span>
    </div>
    <div class="status-bar__item">
      <span class="status-bar__label">Signal</span>
      <span class="status-bar__value status-bar__value--green">LOCKED</span>
    </div>
  </div>

  <!-- =========================================
       SYSTEMS SECTION (Cards)
       ========================================= -->
  <section class="section" id="systems">
    <div class="section__header">
      <p class="section__label">// Module Overview</p>
      <h2 class="section__title">Active Systems</h2>
      <div class="section__divider"></div>
    </div>
    <div class="card-grid">
      <div class="card">
        <div class="card__header">
          <span class="card__tag">NAV-01</span>
          <span class="card__status">ONLINE</span>
        </div>
        <h3 class="card__title">Navigation Array</h3>
        <p class="card__text">
          Inertial navigation and star-tracker fusion providing sub-arcsecond positional accuracy across all operational theaters.
        </p>
        <div class="card__metric">
          <span class="card__metric-value">0.003</span>
          <span class="card__metric-unit">arcsec error</span>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <span class="card__tag">TGT-02</span>
          <span class="card__status">ONLINE</span>
        </div>
        <h3 class="card__title">Targeting Matrix</h3>
        <p class="card__text">
          Multi-spectrum lock-on tracking with predictive trajectory analysis. Supports simultaneous engagement of multiple designated contacts.
        </p>
        <div class="card__metric">
          <span class="card__metric-value">12</span>
          <span class="card__metric-unit">active tracks</span>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <span class="card__tag">COM-03</span>
          <span class="card__status">ONLINE</span>
        </div>
        <h3 class="card__title">Comms Relay</h3>
        <p class="card__text">
          Encrypted wideband communications array with quantum key distribution. Maintains link integrity across subspace relay network.
        </p>
        <div class="card__metric">
          <span class="card__metric-value">2.4</span>
          <span class="card__metric-unit">TB/s bandwidth</span>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================
       TELEMETRY READOUT
       ========================================= -->
  <div class="telemetry" id="telemetry">
    <div class="telemetry__grid">
      <div class="telemetry__item">
        <div class="telemetry__value">12,400</div>
        <div class="telemetry__label">Altitude (ft)</div>
      </div>
      <div class="telemetry__item">
        <div class="telemetry__value">MACH 2.4</div>
        <div class="telemetry__label">Velocity</div>
      </div>
      <div class="telemetry__item">
        <div class="telemetry__value">270&deg;</div>
        <div class="telemetry__label">Heading</div>
      </div>
      <div class="telemetry__item">
        <div class="telemetry__value">+3.2G</div>
        <div class="telemetry__label">G-Force</div>
      </div>
      <div class="telemetry__item">
        <div class="telemetry__value">98.7%</div>
        <div class="telemetry__label">Hull Integrity</div>
      </div>
    </div>
  </div>

  <!-- =========================================
       DIAGNOSTICS (Gauges)
       ========================================= -->
  <section class="section" id="diagnostics">
    <div class="section__header">
      <p class="section__label">// Diagnostics</p>
      <h2 class="section__title">System Health</h2>
      <div class="section__divider"></div>
    </div>
    <div class="gauge-row">
      <div class="gauge">
        <svg viewBox="0 0 140 140">
          <circle class="gauge__track" cx="70" cy="70" r="54" />
          <circle class="gauge__fill" cx="70" cy="70" r="54" />
        </svg>
        <div class="gauge__label-group">
          <span class="gauge__value">75%</span>
          <span class="gauge__unit">Reactor</span>
        </div>
      </div>
      <div class="gauge">
        <svg viewBox="0 0 140 140">
          <circle class="gauge__track" cx="70" cy="70" r="54" />
          <circle class="gauge__fill gauge__fill--amber" cx="70" cy="70" r="54" />
        </svg>
        <div class="gauge__label-group">
          <span class="gauge__value gauge__value--amber">60%</span>
          <span class="gauge__unit">Shields</span>
        </div>
      </div>
      <div class="gauge">
        <svg viewBox="0 0 140 140">
          <circle class="gauge__track" cx="70" cy="70" r="54" />
          <circle class="gauge__fill gauge__fill--green" cx="70" cy="70" r="54" />
        </svg>
        <div class="gauge__label-group">
          <span class="gauge__value gauge__value--green">90%</span>
          <span class="gauge__unit">Life Supp.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================
       CTA SECTION
       ========================================= -->
  <section class="cta" id="comms">
    <h2 class="cta__title">Open Communications Channel</h2>
    <p class="cta__subtitle">// Encrypted link available -- quantum key exchange ready</p>
    <a href="#" class="btn btn--clipped">Establish Link</a>
  </section>

  <!-- =========================================
       FOOTER
       ========================================= -->
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__brand">Nexus HUD v4.7.2</span>
      <ul class="footer__links">
        <li><a href="#" class="footer__link">Systems</a></li>
        <li><a href="#" class="footer__link">Telemetry</a></li>
        <li><a href="#" class="footer__link">Diagnostics</a></li>
        <li><a href="#" class="footer__link">Comms</a></li>
      </ul>
      <span class="footer__coords">EPOCH 1741123200 // SOL-3 // SEC-7G</span>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the color system** -- define your CSS custom properties for `--hud-cyan`, `--hud-amber`, `--hud-red`, and background tones first; every other component depends on consistent color-to-meaning mapping throughout the interface
- **Use SVG for circular elements** -- ring gauges, targeting reticles, radar sweeps, and segmented arcs are far easier to create, animate, and scale using SVG `<circle>` and `<path>` elements with `stroke-dasharray` and `stroke-dashoffset` than attempting pure CSS border tricks
- **Lean on `backdrop-filter: blur()`** -- this single property creates the translucent panel-over-void effect that defines the HUD look; always pair it with a semi-transparent `rgba()` background and provide a solid fallback for browsers that do not support it
- **Animate with restraint and purpose** -- one or two subtle rotating reticles and a pulsing status dot create the "living system" feel; adding more than that risks looking like a screensaver rather than a functional instrument
- **Explore the Arwes framework** -- the [Arwes](https://arwes.dev/) open-source project provides low-level primitives for sci-fi UI including animated borders, sound integration, and transition systems; it is an excellent reference even if you build your own implementation
- **Test performance on mobile** -- `backdrop-filter`, `box-shadow` with large blur radii, and multiple simultaneous CSS animations can be expensive on lower-powered devices; use `will-change` sparingly and always respect `prefers-reduced-motion`
- **Use `clip-path` for non-rectangular panels** -- chamfered, beveled, and hexagonal shapes are essential to the HUD vocabulary and `clip-path: polygon()` makes them trivial; remember that `clip-path` clips borders too, so you may need a pseudo-element overlay for visible edge strokes
- **Consider adding ambient sound** -- real HUD systems have subtle audio feedback (beeps, hums, confirmation tones); libraries like Howler.js or the Web Audio API can add an optional ambient soundscape that dramatically enhances immersion when the user has opted in
