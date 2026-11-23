# Retro Computing Design Reference

## Overview

Retro Computing is a design aesthetic that channels the look and feel of early personal computers, command-line terminals, and monochrome CRT monitors from the late 1970s through the early 1990s. It draws its visual DNA from the green-phosphor glow of IBM 5151 monochrome displays, the amber warmth of Hercules monitors, the stark white-on-blue of Norton Commander, and the flickering command prompts of MS-DOS, CP/M, and early Unix systems. The aesthetic is defined by the physical characteristics of cathode-ray tube displays: scanlines created by the electron beam sweeping across phosphor coatings, the soft bloom of light around bright characters, the gentle curvature of glass screens, and the slight barrel distortion at the edges of the viewport.

Unlike broader retro or pixel-art aesthetics, Retro Computing focuses specifically on the text-mode era of computing -- the period before graphical user interfaces became dominant. Interaction was purely keyboard-driven, information was presented in rigid character grids (typically 80 columns by 25 rows), and the entire visual vocabulary consisted of alphanumeric characters, box-drawing glyphs, and a handful of block elements. Color, when available at all, was limited to the 16-color CGA or EGA palettes. The result was an interface that felt both austere and deeply functional, where every character on screen served a purpose.

In modern web and UI design, the Retro Computing aesthetic evokes nostalgia for this era of direct, unmediated interaction with machines. It appeals to developers, hackers, retrocomputing enthusiasts, and anyone who romanticizes the raw power of the command line. The style communicates technical competence, authenticity, and a rejection of the glossy, over-designed surfaces of contemporary software. When applied thoughtfully, it creates interfaces that feel intimate and focused -- a single user seated before a glowing terminal in a darkened room, typing commands that make things happen.

The aesthetic also carries cultural weight from its prominent role in science fiction cinema. The green-on-black terminal has become a universal visual shorthand for "computer" in films like The Matrix, WarGames, Alien, and Ghost in the Shell. This cinematic legacy gives the Retro Computing aesthetic a dramatic, almost theatrical quality that extends far beyond simple nostalgia.

---

## Visual Characteristics

### Core Design Traits

- **Monochrome or severely limited color palettes** -- phosphor green, amber, or white text on pure black backgrounds, echoing single-color CRT displays
- **Visible scanlines** -- horizontal line artifacts created by the electron beam of CRT monitors, rendered as semi-transparent repeating gradients
- **Phosphor glow and bloom** -- characters appear to emit light, with a soft luminous halo radiating outward from bright text via text-shadow effects
- **Fixed-width character grids** -- all content aligned to a rigid monospaced grid, typically mimicking 80-column terminal layouts
- **CRT screen curvature** -- subtle barrel distortion and rounded corners that replicate the convex glass surface of cathode-ray tubes
- **Vignette darkening** -- edges and corners of the viewport darken gradually, simulating the uneven illumination of real CRT screens
- **Blinking cursor** -- the iconic block or underscore cursor that pulses steadily, indicating the system awaits input
- **Box-drawing characters and ASCII art** -- borders, frames, and decorative elements constructed from Unicode box-drawing glyphs (single and double lines)
- **Command-line prompt syntax** -- content prefixed with `C:\>`, `$`, `#`, or `>` characters that evoke DOS and Unix shell prompts
- **Screen flicker and noise** -- subtle CSS animations that simulate the slight instability of analog CRT displays
- **Boot sequence and loading text** -- content revealed progressively as if being typed or loaded from a floppy disk
- **Low-resolution pixel rendering** -- text and elements rendered with crisp, aliased edges rather than smooth anti-aliased curves

### Design Principles

- The screen is the light source -- text glows against darkness, never the reverse
- Embrace the constraints of the era: fixed grids, limited colors, monospaced type, no images
- Every character on screen should feel purposeful and functional, never decorative for its own sake
- Interaction should feel direct and immediate, as if the user is issuing commands to a machine
- Visual hierarchy is achieved through brightness, color intensity, and text formatting (uppercase, borders) rather than font size variation
- Sound and motion should be minimal and mechanical -- keystrokes, beeps, cursor blinks -- never fluid or organic
- The interface should feel like a single-user, single-task environment: focused, quiet, and attentive
- Authenticity matters: reference real systems (DOS, VT100, Apple II, Commodore 64) rather than inventing fictional terminal aesthetics

---

## Color Palette

The Retro Computing palette is rooted in the actual phosphor colors used in monochrome CRT monitors of the 1970s and 1980s. Green phosphor (P1 and P39) was the most common, followed by amber (P3) and white (P4). When color was available, it followed the rigid 16-color CGA standard. The palette is overwhelmingly dark, with bright text serving as the sole source of illumination.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Terminal Black** | `#0A0A0A` | Primary background, the void of an unpowered CRT |
| **Deep Screen** | `#0D1B0D` | Slightly green-tinted background for active terminal areas |
| **Phosphor Green** | `#33FF00` | Primary text color, classic P1 green phosphor |
| **Dim Green** | `#1A8A00` | Secondary text, comments, inactive elements |
| **Glow Green** | `#66FF33` | Highlighted text, active selections, bright emphasis |
| **Amber Primary** | `#FFB000` | Alternative primary text for amber-phosphor terminals |
| **Dim Amber** | `#996600` | Secondary text in amber mode, muted labels |
| **Bright Amber** | `#FFCC33` | Highlighted text in amber mode, active elements |
| **CRT White** | `#C0C0C0` | White phosphor text, neutral monochrome mode |
| **Bright White** | `#FFFFFF` | Maximum intensity white, headings and emphasis |
| **DOS Blue** | `#0000AA` | Norton Commander and BIOS setup background blue |
| **DOS Cyan** | `#55FFFF` | CGA bright cyan, information and link text |
| **DOS Red** | `#FF5555` | CGA bright red, error messages and warnings |
| **DOS Yellow** | `#FFFF55` | CGA bright yellow, caution and highlight text |
| **Border Gray** | `#555555` | Box-drawing characters, dividers, frame borders |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --retro-bg-black: #0a0a0a;
  --retro-bg-screen: #0d1b0d;
  --retro-bg-dos-blue: #0000aa;

  /* Green phosphor */
  --retro-green: #33ff00;
  --retro-green-dim: #1a8a00;
  --retro-green-bright: #66ff33;

  /* Amber phosphor */
  --retro-amber: #ffb000;
  --retro-amber-dim: #996600;
  --retro-amber-bright: #ffcc33;

  /* White phosphor */
  --retro-white: #c0c0c0;
  --retro-white-bright: #ffffff;

  /* CGA accent colors */
  --retro-cyan: #55ffff;
  --retro-red: #ff5555;
  --retro-yellow: #ffff55;
  --retro-border: #555555;

  /* Glow effects */
  --retro-glow-green: 0 0 5px rgba(51, 255, 0, 0.6), 0 0 20px rgba(51, 255, 0, 0.2), 0 0 60px rgba(51, 255, 0, 0.06);
  --retro-glow-amber: 0 0 5px rgba(255, 176, 0, 0.6), 0 0 20px rgba(255, 176, 0, 0.2), 0 0 60px rgba(255, 176, 0, 0.06);
  --retro-glow-white: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.15);

  /* Scanline overlay */
  --retro-scanline-color: rgba(0, 0, 0, 0.12);
  --retro-scanline-size: 4px;

  /* Timing */
  --retro-blink-speed: 1s;
  --retro-type-speed: 50ms;
}
```

---

## Typography

### Typeface Characteristics

Retro Computing typography is exclusively monospaced. Every character occupies the same horizontal space, producing the rigid grid alignment that defined text-mode displays. The original CRT fonts were bitmap rasterizations rendered at fixed resolutions (typically 8x8, 8x14, or 9x16 pixel cells for IBM-compatible systems). The iconic IBM VGA font, with its 9x16 character cells, remains the most recognizable typeface of the DOS era. Modern web implementations use TrueType or WOFF reproductions of these classic bitmap fonts, or contemporary monospaced typefaces that evoke the same mechanical, grid-locked feel.

Typography in this aesthetic is:

- **Strictly monospaced** -- proportional fonts are never used; the grid is sacred
- **Uppercase-heavy for headings and labels** -- early systems often lacked lowercase or used it sparingly
- **Low-contrast weight variation** -- bold was achieved through brightness, not stroke weight
- **Fixed line height** -- consistent vertical rhythm matching the character cell height
- **No kerning, no ligatures** -- every character stands alone in its cell

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **VT323** | Pixel monospace | Authentic CRT terminal text, retro body copy |
| **Press Start 2P** | Pixel, blocky | 8-bit headings, game-inspired display text |
| **Share Tech Mono** | Clean monospace | Modern terminal text, readable body copy |
| **IBM Plex Mono** | IBM heritage mono | Authentic IBM feel, professional terminal layouts |
| **Fira Mono** | Humanist monospace | Readable body text with retro character |
| **Space Mono** | Retro-futuristic mono | Editorial layouts, stylized terminal displays |
| **Source Code Pro** | Adobe monospace | Clean code blocks, documentation-style content |
| **Courier Prime** | Refined Courier | Typewriter-terminal hybrid, narrative text |
| **DotGothic16** | Japanese pixel font | Decorative pixel headings, Asian terminal style |
| **Silkscreen** | Bitmap screen font | Small pixel labels, UI chrome, status bars |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **VT323** (400) | **Share Tech Mono** (400) | Classic green-screen terminal, authentic CRT |
| **Press Start 2P** (400) | **VT323** (400) | 8-bit DOS game meets command prompt |
| **Share Tech Mono** (400) | **IBM Plex Mono** (400) | Clean modern terminal, professional retro |
| **VT323** (400) | **Fira Mono** (400) | Vintage headers with readable modern body |
| **Silkscreen** (400) | **Space Mono** (400) | Pixel UI chrome with retro-futuristic body text |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap');

/* Headings -- bright phosphor with glow */
h1, h2, h3, h4, h5, h6 {
  font-family: 'VT323', monospace;
  font-weight: 400;
  color: var(--retro-green-bright);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
  text-shadow: var(--retro-glow-green);
}

/* Display / Hero text */
.retro-display {
  font-family: 'VT323', monospace;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--retro-green);
  text-shadow: var(--retro-glow-green);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Body / terminal text */
body {
  font-family: 'Share Tech Mono', 'Courier New', monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--retro-green);
}

/* Prompt prefix */
.retro-prompt::before {
  content: 'C:\\> ';
  color: var(--retro-green-dim);
}

/* Blinking cursor */
.retro-cursor::after {
  content: '\2588';
  animation: blink var(--retro-blink-speed) step-end infinite;
  color: var(--retro-green);
}

@keyframes blink {
  50% { opacity: 0; }
}

/* DOS-style label */
.retro-label {
  font-family: 'VT323', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--retro-green-dim);
}
```

---

## Layout Principles

- **80-column maximum width** -- constrain content to the classic 80-character terminal width using `max-width` set to approximately `80ch`
- **Character-grid alignment** -- all spacing (padding, margins, gaps) should be multiples of the line height to maintain grid integrity
- **Single-column dominance** -- most layouts follow the single-column, top-to-bottom flow of a terminal session; multi-column is used sparingly for side-by-side panels
- **Full-viewport dark backgrounds** -- the entire screen is dark, as if the browser window is a CRT monitor; no white margins or light backgrounds
- **Box-drawing borders** -- sections are framed using CSS borders styled to evoke ASCII box-drawing characters (single lines, double lines, corners)
- **Top-down information flow** -- content reads like a terminal session: sequential, chronological, command-and-response
- **Fixed-position status bar** -- a persistent status line at the bottom of the viewport (like the DOS status bar or Vim status line) showing context information
- **No floating or overlapping elements** -- the text-mode grid does not support overlapping windows; elements tile cleanly
- **Minimal whitespace** -- screens are information-dense, like a directory listing or system log; empty space feels like wasted display area
- **Hierarchical indentation** -- nested information is conveyed through indentation (2 or 4 spaces) rather than font size changes or color shifts
- **Header bars span full width** -- section headers use full-width background color bands, mimicking the inverted-color title bars of DOS applications like Norton Commander or Turbo Pascal

---

## CSS / Design Techniques

### CRT Screen Container

```css
.crt-screen {
  position: relative;
  background: var(--retro-bg-black);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    inset 0 0 80px rgba(51, 255, 0, 0.04),
    0 0 20px rgba(0, 0, 0, 0.8);
}

/* Scanline overlay */
.crt-screen::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    var(--retro-scanline-color) 2px,
    var(--retro-scanline-color) var(--retro-scanline-size)
  );
  pointer-events: none;
  z-index: 10;
}

/* Vignette / edge darkening */
.crt-screen::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
  z-index: 11;
}

/* CRT flicker animation */
@keyframes crt-flicker {
  0%   { opacity: 0.97; }
  5%   { opacity: 1; }
  10%  { opacity: 0.98; }
  15%  { opacity: 1; }
  50%  { opacity: 0.99; }
  100% { opacity: 1; }
}

.crt-screen--flicker {
  animation: crt-flicker 0.15s infinite;
}
```

### Retro Computing Card

```css
.retro-card {
  background: var(--retro-bg-black);
  border: 1px solid var(--retro-green-dim);
  padding: 20px 24px;
  position: relative;
  font-family: 'Share Tech Mono', monospace;
}

/* ASCII-style top border with title */
.retro-card__title {
  position: absolute;
  top: -0.75em;
  left: 16px;
  background: var(--retro-bg-black);
  padding: 0 8px;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: var(--retro-green-bright);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.retro-card:hover {
  border-color: var(--retro-green);
  box-shadow: 0 0 8px rgba(51, 255, 0, 0.15);
}

.retro-card p {
  color: var(--retro-green);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Double-border variant */
.retro-card--double {
  border: 3px double var(--retro-green-dim);
}

.retro-card--double:hover {
  border-color: var(--retro-green);
}

/* Card grid */
.retro-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
```

### Retro Computing Button

```css
.retro-btn {
  display: inline-block;
  background: transparent;
  color: var(--retro-green);
  border: 1px solid var(--retro-green);
  padding: 10px 28px;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.retro-btn:hover {
  background: var(--retro-green);
  color: var(--retro-bg-black);
  box-shadow: var(--retro-glow-green);
}

.retro-btn:active {
  filter: brightness(0.85);
}

/* Prompt-style button with bracket indicators */
.retro-btn--bracket::before { content: '[ '; }
.retro-btn--bracket::after { content: ' ]'; }

.retro-btn--bracket {
  border: none;
  padding: 10px 16px;
}

.retro-btn--bracket:hover {
  background: transparent;
  color: var(--retro-green-bright);
  text-shadow: var(--retro-glow-green);
  box-shadow: none;
}

/* Amber variant */
.retro-btn--amber {
  color: var(--retro-amber);
  border-color: var(--retro-amber);
}

.retro-btn--amber:hover {
  background: var(--retro-amber);
  color: var(--retro-bg-black);
  box-shadow: var(--retro-glow-amber);
}

/* Function key style */
.retro-btn--fkey {
  font-size: 0.85rem;
  padding: 6px 14px;
  border: 1px solid var(--retro-border);
  color: var(--retro-white);
  background: var(--retro-bg-black);
}

.retro-btn--fkey:hover {
  background: var(--retro-white);
  color: var(--retro-bg-black);
}
```

### Navigation Bar

```css
.retro-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 24px;
  background: var(--retro-bg-black);
  border-bottom: 1px solid var(--retro-green-dim);
  font-family: 'VT323', monospace;
}

.retro-nav__logo {
  font-size: 1.3rem;
  color: var(--retro-green-bright);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 6px rgba(51, 255, 0, 0.4);
}

.retro-nav__links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.retro-nav__links a {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.9rem;
  color: var(--retro-green-dim);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.15s, text-shadow 0.15s;
}

.retro-nav__links a:hover,
.retro-nav__links a.active {
  color: var(--retro-green);
  text-shadow: 0 0 6px rgba(51, 255, 0, 0.4);
}

/* DOS menu bar variant */
.retro-nav--dos {
  background: var(--retro-white);
  border-bottom: none;
}

.retro-nav--dos .retro-nav__logo {
  color: var(--retro-bg-black);
  text-shadow: none;
}

.retro-nav--dos .retro-nav__links a {
  color: var(--retro-bg-black);
  text-shadow: none;
}

.retro-nav--dos .retro-nav__links a:hover {
  background: var(--retro-bg-black);
  color: var(--retro-white);
  padding: 2px 6px;
  margin: -2px -6px;
}
```

### Hero Section

```css
.retro-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  background: var(--retro-bg-black);
  overflow: hidden;
}

/* Scanline overlay */
.retro-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  z-index: 2;
}

/* Vignette */
.retro-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
  z-index: 3;
}

.retro-hero__content {
  position: relative;
  z-index: 5;
  max-width: 70ch;
}

.retro-hero__content h1 {
  font-family: 'VT323', monospace;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--retro-green);
  text-shadow: var(--retro-glow-green);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.retro-hero__content p {
  font-family: 'Share Tech Mono', monospace;
  color: var(--retro-green-dim);
  font-size: 1rem;
  max-width: 60ch;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

/* Typing animation for hero subtitle */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.retro-hero__typed {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--retro-green);
  animation:
    typing 3s steps(40, end) forwards,
    blink var(--retro-blink-speed) step-end infinite;
}
```

### Terminal Output Block

```css
.retro-terminal {
  background: var(--retro-bg-screen);
  border: 1px solid var(--retro-green-dim);
  padding: 20px 24px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--retro-green);
  overflow-x: auto;
  white-space: pre-wrap;
  position: relative;
}

/* Terminal header bar */
.retro-terminal__header {
  display: flex;
  justify-content: space-between;
  background: var(--retro-green-dim);
  color: var(--retro-bg-black);
  margin: -20px -24px 16px;
  padding: 4px 12px;
  font-family: 'VT323', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.retro-terminal .prompt {
  color: var(--retro-green-bright);
}

.retro-terminal .comment {
  color: var(--retro-green-dim);
}

.retro-terminal .error {
  color: var(--retro-red);
}

.retro-terminal .highlight {
  color: var(--retro-yellow);
}
```

### Status Bar

```css
.retro-status-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--retro-green-dim);
  color: var(--retro-bg-black);
  padding: 4px 16px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  z-index: 100;
}

.retro-status-bar__section {
  display: flex;
  gap: 24px;
}

/* Function key labels */
.retro-status-bar__fkey {
  display: inline-flex;
  gap: 4px;
}

.retro-status-bar__fkey span:first-child {
  color: var(--retro-bg-black);
  font-weight: bold;
}

.retro-status-bar__fkey span:last-child {
  color: var(--retro-bg-screen);
}
```

### Boot Sequence Animation

```css
@keyframes boot-line {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.retro-boot .boot-line {
  opacity: 0;
  animation: boot-line 0.1s ease-out forwards;
}

.retro-boot .boot-line:nth-child(1) { animation-delay: 0.2s; }
.retro-boot .boot-line:nth-child(2) { animation-delay: 0.5s; }
.retro-boot .boot-line:nth-child(3) { animation-delay: 0.9s; }
.retro-boot .boot-line:nth-child(4) { animation-delay: 1.4s; }
.retro-boot .boot-line:nth-child(5) { animation-delay: 2.0s; }
.retro-boot .boot-line:nth-child(6) { animation-delay: 2.7s; }

.retro-boot .boot-ok {
  color: var(--retro-green-bright);
}

.retro-boot .boot-label {
  color: var(--retro-green-dim);
}

.retro-boot .boot-value {
  color: var(--retro-green);
}
```

---

## Design Do's and Don'ts

### Do

- Use monospaced fonts exclusively -- the fixed-width grid is the foundation of the entire aesthetic
- Apply phosphor glow via `text-shadow` to primary text to simulate CRT light emission
- Add scanline overlays using `repeating-linear-gradient` to create authentic CRT texture
- Constrain layouts to approximately 80 characters wide, matching classic terminal dimensions
- Use box-drawing characters and ASCII art for borders and decorative framing
- Include interactive details like blinking cursors, typing animations, and boot sequences
- Reference real systems and software (DOS, Norton Commander, vi, BASIC) for authentic UI patterns
- Test designs at different brightness levels -- the glow effect should be visible but not blinding

### Don't

- Use proportional or serif fonts -- they immediately break the terminal illusion
- Add photographic images, illustrations, or icons -- the text-mode era had none of these
- Use light or white backgrounds -- the CRT is dark when unpowered; light backgrounds feel wrong
- Overdo the flicker and noise effects -- real CRTs were stable most of the time; excessive animation feels gimmicky
- Apply rounded corners to interactive elements like buttons or cards -- the character grid is rectangular
- Mix too many phosphor colors on one screen -- a real monochrome monitor only had one color
- Use large font-size variations for hierarchy -- terminal text was uniform in size; use brightness and formatting instead
- Add drop shadows, gradients, or glassmorphism effects -- these belong to a different era entirely

---

## Related Aesthetics

| Aesthetic | Relationship to Retro Computing |
|-----------|--------------------------------|
| **8-Bit** | Shares pixel-grid origins and hardware-constrained palettes, but 8-Bit focuses on game graphics and sprites while Retro Computing centers on text-mode terminals |
| **Cyberpunk** | Borrows the green-on-black terminal motif and scanline effects, but wraps them in a broader neon-soaked dystopian narrative with more color and visual complexity |
| **Dial-Up Delight** | Both reference early computing eras, but Dial-Up Delight focuses on the early web (1996-2002) with GIFs and tiled backgrounds, not the pre-GUI terminal era |
| **Early Cyber** | Overlaps in its fascination with early digital interfaces, but Early Cyber leans toward pre-millennial internet aesthetics and 3D renders |
| **Synthwave** | Shares the retro-technology nostalgia and neon-on-dark palette, but Synthwave is rooted in 1980s music and pop culture rather than actual computing hardware |
| **Vaporwave** | Both reference outdated technology, but Vaporwave uses irony and pastel palettes to critique consumer culture, while Retro Computing is earnest and functional |
| **Laser Grid** | Shares the grid-line motif and dark backgrounds, but Laser Grid is purely about the neon wireframe aesthetic without the text-mode computing context |
| **Dark Mode Neon** | Overlaps in the bright-on-dark color scheme, but Dark Mode Neon is a modern UI convention without the historical computing references |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retro Computing Terminal</title>
  <link href="https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       CSS Custom Properties
       ============================================ */
    :root {
      --retro-bg-black: #0a0a0a;
      --retro-bg-screen: #0d1b0d;
      --retro-bg-dos-blue: #0000aa;

      --retro-green: #33ff00;
      --retro-green-dim: #1a8a00;
      --retro-green-bright: #66ff33;

      --retro-amber: #ffb000;
      --retro-amber-dim: #996600;
      --retro-amber-bright: #ffcc33;

      --retro-white: #c0c0c0;
      --retro-white-bright: #ffffff;

      --retro-cyan: #55ffff;
      --retro-red: #ff5555;
      --retro-yellow: #ffff55;
      --retro-border: #555555;

      --retro-glow-green: 0 0 5px rgba(51, 255, 0, 0.6),
                          0 0 20px rgba(51, 255, 0, 0.2),
                          0 0 60px rgba(51, 255, 0, 0.06);
      --retro-glow-amber: 0 0 5px rgba(255, 176, 0, 0.6),
                          0 0 20px rgba(255, 176, 0, 0.2),
                          0 0 60px rgba(255, 176, 0, 0.06);

      --retro-scanline-color: rgba(0, 0, 0, 0.12);
      --retro-blink-speed: 1s;
    }

    /* ============================================
       Reset and Base Styles
       ============================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--retro-bg-black);
      color: var(--retro-green);
      font-family: 'Share Tech Mono', 'Courier New', monospace;
      font-size: 1rem;
      line-height: 1.6;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ============================================
       Scanline Overlay (covers entire page)
       ============================================ */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        var(--retro-scanline-color) 2px,
        var(--retro-scanline-color) 4px
      );
      pointer-events: none;
      z-index: 9999;
    }

    /* ============================================
       Typography
       ============================================ */
    h1, h2, h3, h4, h5, h6 {
      font-family: 'VT323', monospace;
      font-weight: 400;
      color: var(--retro-green-bright);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.3;
      text-shadow: var(--retro-glow-green);
    }

    h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
    h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); margin-bottom: 1rem; }
    h3 { font-size: 1.3rem; margin-bottom: 0.75rem; }

    p { margin-bottom: 1rem; }

    a {
      color: var(--retro-green-bright);
      text-decoration: underline;
      transition: color 0.15s, text-shadow 0.15s;
    }

    a:hover {
      color: var(--retro-green);
      text-shadow: 0 0 6px rgba(51, 255, 0, 0.4);
    }

    /* ============================================
       Cursor Blink Animation
       ============================================ */
    @keyframes blink {
      50% { opacity: 0; }
    }

    .cursor::after {
      content: '\2588';
      animation: blink var(--retro-blink-speed) step-end infinite;
      margin-left: 2px;
    }

    /* ============================================
       Boot Sequence Animation
       ============================================ */
    @keyframes boot-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .boot-line {
      opacity: 0;
      animation: boot-fade 0.1s ease-out forwards;
    }

    .boot-line:nth-child(1) { animation-delay: 0.3s; }
    .boot-line:nth-child(2) { animation-delay: 0.7s; }
    .boot-line:nth-child(3) { animation-delay: 1.1s; }
    .boot-line:nth-child(4) { animation-delay: 1.5s; }
    .boot-line:nth-child(5) { animation-delay: 2.0s; }
    .boot-line:nth-child(6) { animation-delay: 2.5s; }
    .boot-line:nth-child(7) { animation-delay: 3.0s; }
    .boot-line:nth-child(8) { animation-delay: 3.5s; }

    .boot-ok { color: var(--retro-green-bright); }
    .boot-label { color: var(--retro-green-dim); }
    .boot-value { color: var(--retro-green); }

    /* ============================================
       Navigation
       ============================================ */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 960px;
      margin: 0 auto;
      padding: 12px 24px;
      border-bottom: 1px solid var(--retro-green-dim);
    }

    nav .logo {
      font-family: 'VT323', monospace;
      font-size: 1.3rem;
      color: var(--retro-green-bright);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-shadow: 0 0 6px rgba(51, 255, 0, 0.4);
    }

    nav ul {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.9rem;
      color: var(--retro-green-dim);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: color 0.15s, text-shadow 0.15s;
    }

    nav ul a:hover {
      color: var(--retro-green);
      text-shadow: 0 0 6px rgba(51, 255, 0, 0.4);
    }

    /* ============================================
       Hero Section
       ============================================ */
    .hero {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 70vh;
      padding: 80px 24px;
      overflow: hidden;
    }

    /* Vignette */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at center,
        transparent 35%,
        rgba(0, 0, 0, 0.6) 100%
      );
      pointer-events: none;
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 70ch;
    }

    .hero-content h1 {
      margin-bottom: 1.5rem;
    }

    .hero-content p {
      color: var(--retro-green-dim);
      font-size: 1rem;
      max-width: 60ch;
      margin: 0 auto 2rem;
    }

    /* Typing animation */
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }

    .typed-text {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid var(--retro-green);
      animation:
        typing 2.5s steps(35, end) forwards,
        blink var(--retro-blink-speed) step-end infinite;
      font-family: 'Share Tech Mono', monospace;
      color: var(--retro-green);
    }

    /* ============================================
       Buttons
       ============================================ */
    .btn {
      display: inline-block;
      background: transparent;
      color: var(--retro-green);
      border: 1px solid var(--retro-green);
      padding: 10px 28px;
      font-family: 'VT323', monospace;
      font-size: 1.1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, box-shadow 0.15s;
    }

    .btn:hover {
      background: var(--retro-green);
      color: var(--retro-bg-black);
      box-shadow: var(--retro-glow-green);
      text-shadow: none;
    }

    .btn--bracket {
      border: none;
      padding: 10px 16px;
    }

    .btn--bracket::before { content: '[ '; }
    .btn--bracket::after { content: ' ]'; }

    .btn--bracket:hover {
      background: transparent;
      color: var(--retro-green-bright);
      text-shadow: var(--retro-glow-green);
      box-shadow: none;
    }

    /* ============================================
       Sections (shared)
       ============================================ */
    .section {
      max-width: 960px;
      margin: 0 auto;
      padding: 60px 24px;
      border-top: 1px solid var(--retro-green-dim);
    }

    .section__header {
      margin-bottom: 2rem;
    }

    .section__header::before {
      content: '>>> ';
      color: var(--retro-green-dim);
    }

    /* ============================================
       Feature Cards
       ============================================ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .card {
      background: var(--retro-bg-black);
      border: 1px solid var(--retro-green-dim);
      padding: 20px 24px;
      position: relative;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      border-color: var(--retro-green);
      box-shadow: 0 0 8px rgba(51, 255, 0, 0.12);
    }

    .card__label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.8rem;
      color: var(--retro-green-dim);
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .card h3 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    .card p {
      color: var(--retro-green-dim);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* ============================================
       Terminal Block
       ============================================ */
    .terminal {
      background: var(--retro-bg-screen);
      border: 1px solid var(--retro-green-dim);
      padding: 20px 24px;
      font-size: 0.9rem;
      line-height: 1.7;
      white-space: pre-wrap;
      overflow-x: auto;
    }

    .terminal__bar {
      display: flex;
      justify-content: space-between;
      background: var(--retro-green-dim);
      color: var(--retro-bg-black);
      margin: -20px -24px 16px;
      padding: 4px 12px;
      font-family: 'VT323', monospace;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .terminal .prompt { color: var(--retro-green-bright); }
    .terminal .output { color: var(--retro-green); }
    .terminal .comment { color: var(--retro-green-dim); }
    .terminal .error { color: var(--retro-red); }
    .terminal .info { color: var(--retro-cyan); }

    /* ============================================
       About / Content Block
       ============================================ */
    .about-content {
      max-width: 70ch;
    }

    .about-content p {
      margin-bottom: 1.2rem;
      color: var(--retro-green);
    }

    .about-content .highlight {
      color: var(--retro-green-bright);
      text-shadow: 0 0 4px rgba(51, 255, 0, 0.3);
    }

    /* ============================================
       ASCII Divider
       ============================================ */
    .ascii-divider {
      text-align: center;
      color: var(--retro-green-dim);
      padding: 16px 0;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.85rem;
      letter-spacing: 0.2em;
      user-select: none;
    }

    /* ============================================
       CTA Section
       ============================================ */
    .cta {
      text-align: center;
      padding: 60px 24px;
      max-width: 960px;
      margin: 0 auto;
      border-top: 1px solid var(--retro-green-dim);
    }

    .cta h2 {
      margin-bottom: 1rem;
    }

    .cta p {
      color: var(--retro-green-dim);
      margin-bottom: 2rem;
      max-width: 50ch;
      margin-left: auto;
      margin-right: auto;
    }

    /* ============================================
       Status Bar (Footer)
       ============================================ */
    .status-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--retro-green-dim);
      color: var(--retro-bg-black);
      padding: 4px 24px;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-top: 40px;
    }

    .status-bar__keys {
      display: flex;
      gap: 20px;
    }

    .status-bar__key-num {
      font-weight: bold;
    }

    /* ============================================
       Responsive
       ============================================ */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }

      nav ul {
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero {
        min-height: auto;
        padding: 50px 16px;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .status-bar {
        flex-direction: column;
        gap: 4px;
        text-align: center;
        padding: 8px 16px;
      }

      .status-bar__keys {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      h1 { font-size: 1.8rem; }
      .section { padding: 40px 16px; }
    }
  </style>
</head>
<body>

  <!-- ==========================================
       Navigation
       ========================================== -->
  <nav>
    <a href="#" class="logo">RETROTERM v2.1</a>
    <ul>
      <li><a href="#boot">Boot</a></li>
      <li><a href="#systems">Systems</a></li>
      <li><a href="#terminal">Terminal</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#access">Access</a></li>
    </ul>
  </nav>

  <!-- ==========================================
       Hero Section
       ========================================== -->
  <section class="hero" id="boot">
    <div class="hero-content">
      <div style="margin-bottom: 2rem; text-align: left; font-size: 0.85rem;">
        <div class="boot-line"><span class="boot-label">BIOS Date: </span><span class="boot-value">11/15/88</span></div>
        <div class="boot-line"><span class="boot-label">CPU: </span><span class="boot-value">Intel 80386 @ 33MHz</span></div>
        <div class="boot-line"><span class="boot-label">Memory Test: </span><span class="boot-value">4096K </span><span class="boot-ok">OK</span></div>
        <div class="boot-line"><span class="boot-label">FDD 0: </span><span class="boot-value">1.44M, 3.5 in.</span></div>
        <div class="boot-line"><span class="boot-label">HDD 0: </span><span class="boot-value">Type 47, 120MB</span></div>
        <div class="boot-line">&nbsp;</div>
        <div class="boot-line"><span class="boot-value">Starting MS-DOS...</span></div>
        <div class="boot-line">&nbsp;</div>
      </div>
      <h1>Welcome to RetroTerm</h1>
      <p>A vintage computing experience. Command-line interfaces, phosphor-green displays, and the quiet hum of a CRT monitor in a darkened room.</p>
      <a href="#systems" class="btn">[ EXECUTE ]</a>
    </div>
  </section>

  <!-- ==========================================
       ASCII Divider
       ========================================== -->
  <div class="ascii-divider">
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  </div>

  <!-- ==========================================
       Systems / Features Section
       ========================================== -->
  <section class="section" id="systems">
    <h2 class="section__header">System Modules</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card__label">[MODULE 01]</div>
        <h3>Command Processor</h3>
        <p>Direct keyboard-to-kernel communication. No GUI abstraction layers. Every keystroke is a conversation with the machine.</p>
      </div>
      <div class="card">
        <div class="card__label">[MODULE 02]</div>
        <h3>File Manager</h3>
        <p>Navigate directory trees with precision. Two-panel interface inspired by Norton Commander. See everything, touch nothing unnecessary.</p>
      </div>
      <div class="card">
        <div class="card__label">[MODULE 03]</div>
        <h3>Text Editor</h3>
        <p>Full-screen editing in 80x25 character resolution. Syntax highlighting in 16 colors. Modal operation for maximum efficiency.</p>
      </div>
      <div class="card">
        <div class="card__label">[MODULE 04]</div>
        <h3>System Monitor</h3>
        <p>Real-time diagnostics rendered in monospaced columns. CPU load, memory allocation, disk I/O -- all visible at a glance.</p>
      </div>
      <div class="card">
        <div class="card__label">[MODULE 05]</div>
        <h3>Modem Interface</h3>
        <p>Dial-up connectivity at 2400 baud. AT command set fully supported. Connect to bulletin board systems worldwide.</p>
      </div>
      <div class="card">
        <div class="card__label">[MODULE 06]</div>
        <h3>BASIC Interpreter</h3>
        <p>Line-numbered programming environment. Immediate mode for quick calculations. GOTO considered essential.</p>
      </div>
    </div>
  </section>

  <!-- ==========================================
       Terminal Demo Section
       ========================================== -->
  <section class="section" id="terminal">
    <h2 class="section__header">Live Terminal</h2>
    <div class="terminal">
      <div class="terminal__bar">
        <span>COMMAND.COM</span>
        <span>C:\RETROTERM</span>
      </div>
<span class="prompt">C:\RETROTERM&gt;</span> <span class="output">dir /w</span>

<span class="comment"> Volume in drive C is RETRODISK</span>
<span class="comment"> Volume Serial Number is 1337-C0DE</span>
<span class="comment"> Directory of C:\RETROTERM</span>
<span class="comment"></span>
<span class="output">COMMAND  COM     README   TXT     CONFIG   SYS</span>
<span class="output">AUTOEXEC BAT     EDIT     EXE     MOUSE    DRV</span>
<span class="output">ANSI     SYS     HIMEM    SYS     DOSSHELL EXE</span>
<span class="comment">        9 file(s)        234,567 bytes</span>
<span class="comment">                      89,432,064 bytes free</span>

<span class="prompt">C:\RETROTERM&gt;</span> <span class="output">type README.TXT</span>

<span class="info">=======================================</span>
<span class="info">  RETROTERM v2.1 - (c) 1989          </span>
<span class="info">  Vintage Terminal Emulation System   </span>
<span class="info">=======================================</span>

<span class="output">This system emulates the experience</span>
<span class="output">of classic DOS-era computing.</span>
<span class="output">All modules operational.</span>

<span class="prompt">C:\RETROTERM&gt;</span> <span class="cursor"></span>
    </div>
  </section>

  <!-- ==========================================
       About Section
       ========================================== -->
  <section class="section" id="about">
    <h2 class="section__header">About This System</h2>
    <div class="about-content">
      <p>
        RetroTerm is built on the principle that the <span class="highlight">command line is the most honest interface</span> between human and machine. No icons to misinterpret. No animations to distract. Just text -- precise, immediate, and under your complete control.
      </p>
      <p>
        Our phosphor-green displays reference the <span class="highlight">IBM 5151 monochrome monitor</span>, first shipped in 1981 alongside the original IBM PC. The P39 green phosphor coating gave characters their distinctive warm glow -- a glow that became synonymous with computing itself.
      </p>
      <p>
        Every element on this page respects the constraints of the era: monospaced fonts, fixed-width layouts, box-drawing borders, and a palette limited to shades of a single phosphor color. The result is an interface that feels focused, functional, and deeply authentic.
      </p>
    </div>
  </section>

  <!-- ==========================================
       CTA Section
       ========================================== -->
  <section class="cta" id="access">
    <h2>Ready to Log In?</h2>
    <p>Access the mainframe. All you need is a terminal, a modem, and the right credentials.</p>
    <a href="#" class="btn">[ CONNECT ]</a>
    <span style="display: block; margin-top: 1rem; font-size: 0.8rem; color: var(--retro-green-dim);">
      Login: GUEST &nbsp; Password: ********
    </span>
  </section>

  <!-- ==========================================
       Status Bar (Footer)
       ========================================== -->
  <div class="status-bar">
    <div class="status-bar__keys">
      <span><span class="status-bar__key-num">F1</span> Help</span>
      <span><span class="status-bar__key-num">F2</span> Save</span>
      <span><span class="status-bar__key-num">F3</span> Open</span>
      <span><span class="status-bar__key-num">F5</span> Refresh</span>
      <span><span class="status-bar__key-num">F10</span> Quit</span>
    </div>
    <div>
      RETROTERM v2.1 // 640K Ought to Be Enough
    </div>
  </div>

</body>
</html>
```

---

## Implementation Tips

- **Test your phosphor glow intensity** -- use `text-shadow` with multiple layers (near glow at 5px, mid glow at 20px, far glow at 60px) and adjust the alpha channels until the text looks luminous without becoming blurry or unreadable
- **Keep scanlines subtle** -- a `repeating-linear-gradient` with black bars at approximately 10-15% opacity and 4px spacing produces the most authentic CRT effect; higher opacity makes text difficult to read
- **Use the `ch` unit for width constraints** -- setting `max-width: 80ch` on your content container naturally produces the 80-column layout that defined terminal computing, and it scales correctly with your chosen monospaced font
- **Animate sparingly and mechanically** -- cursor blinks should use `step-end` timing (not ease or linear), and typing animations should use `steps()` to advance one character at a time; smooth animations feel wrong in this aesthetic
- **Layer your CRT effects with z-index** -- place scanlines and vignette overlays on `::before` and `::after` pseudo-elements with `pointer-events: none` so they sit above content visually but do not interfere with clicks or text selection
- **Provide a "phosphor mode" toggle** -- let users switch between green, amber, and white phosphor palettes by swapping CSS custom properties on the root element; this adds interactivity while respecting authentic hardware variations
- **Consider accessibility** -- pure green-on-black can be harsh for extended reading; offer a reduced-glow mode or ensure that your green and background colors meet WCAG AA contrast minimums (the recommended `#33FF00` on `#0A0A0A` achieves a contrast ratio above 10:1, which is excellent)
- **Use `white-space: pre-wrap`** for terminal output blocks -- this preserves the exact spacing and line breaks that are essential to the command-line aesthetic while still allowing text to wrap on narrow screens
