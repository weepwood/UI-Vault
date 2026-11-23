# Variable Typography Design Reference

## Overview

Variable Typography is a design aesthetic built on the OpenType variable font specification, where typefaces contain an entire range of stylistic variations -- weight, width, slant, optical size, and custom designer-defined axes -- within a single font file. Rather than treating text as a static visual element, Variable Typography embraces type as a **dynamic, responsive, interactive medium** that shifts and animates in response to viewport size, user input, scroll position, and time. The aesthetic draws from kinetic typography traditions in film title design, motion graphics, and experimental type foundries, but recontextualizes them for the web using CSS `font-variation-settings`, custom properties, and keyframe animations.

At its philosophical core, Variable Typography rejects the notion that a typeface is a fixed artifact. Instead, it treats the design space between a font's minimum and maximum axis values as a continuous, explorable landscape. A heading might smoothly interpolate from Thin to Black weight as the user scrolls. A navigation label might narrow its width on smaller viewports not through a jarring font swap, but through a fluid `wdth` axis transition. Interactive elements respond to hover by shifting optical size or custom expressiveness axes, creating a living, breathing typographic surface that feels organic rather than mechanical.

The aesthetic is deeply connected to the work of type foundries like Google Fonts (Roboto Flex with its 12 axes), Dinamo (with ABC Diatype Variable), and Etcetera Type Company, as well as the broader movement toward parametric and generative typography. It is equally at home in editorial long-form reading -- where optical size adjustments improve legibility across breakpoints -- and in experimental brand sites where animated weight and width create dramatic visual impact. The color palette tends toward restrained, high-contrast schemes that keep the focus on typographic expression, with neutral backgrounds, sharp monochromatic accents, and selective use of color to highlight interactive type behaviors. Layout is typography-first: generous whitespace, strong vertical rhythm, and deliberate scale contrast let the variable type itself carry the visual weight of the design.

---

## Visual Characteristics

### Core Design Traits

- **Fluid weight transitions**: Text elements animate between thin and bold weights using the `wght` axis, creating smooth, organic emphasis shifts on hover, scroll, or time-based triggers
- **Responsive width adjustment**: The `wdth` axis compresses or expands letterforms fluidly to fit containers, replacing abrupt font-size changes with graceful typographic reflow
- **Optical size intelligence**: The `opsz` axis automatically adjusts stroke contrast and detail level for different display sizes -- thicker strokes at small sizes, refined detail at large sizes
- **Kinetic headline treatments**: Hero and display text uses CSS keyframe animations on `font-variation-settings` to create looping, breathing, or wave-like motion across multiple characters
- **Per-character animation**: Individual letters within a word receive staggered animation delays using CSS `nth-child` selectors or JavaScript splitting libraries, creating cascading typographic waves
- **Interactive axis manipulation**: Mouse position, scroll offset, or touch input maps directly to font axis values, letting users "explore" the typeface's design space through interaction
- **Monochromatic type-first layouts**: Backgrounds are minimal (white, near-black, or muted neutrals) so that the dynamic behavior of the typography itself becomes the primary visual element
- **Extreme scale contrast**: Massive display type (120px+) paired with small, precisely set body text creates dramatic hierarchy that showcases variable font capabilities at both ends
- **Axis-driven hover states**: Buttons, links, and interactive elements shift weight, width, or slant on hover rather than relying solely on color or background changes
- **Responsive typographic systems**: A single variable font replaces an entire type family, with `clamp()`, `calc()`, and container queries adjusting axes across breakpoints
- **Custom axis expressiveness**: Designer-defined custom axes (e.g., `CASL` for casualness in Recursive, `GRAD` for grade in Roboto Flex) add personality dimensions beyond standard weight/width/slant

### Design Principles

- **Type is the interface**: Typography is not decoration layered onto a layout; it is the layout, the interaction surface, and the primary visual expression
- **Motion with meaning**: Every animated axis change should communicate something -- emphasis, hierarchy, state change, or narrative progression -- never animation for its own sake
- **Fluidity over snapshots**: Prefer smooth interpolation across axis ranges over discrete jumps between fixed styles; the continuum is the point
- **Performance as a feature**: Variable fonts reduce HTTP requests and total file size compared to loading multiple static font files, making fluid typography a performance improvement rather than a cost
- **Accessibility through adaptation**: Use axis variation to improve readability -- heavier weights for dark-on-light body text, wider settings for small screens, optical size for legibility at all scales
- **Restraint amplifies impact**: Because the typography itself is dynamic and expressive, surrounding design elements (color, imagery, decoration) should be restrained to avoid competing for attention
- **Progressive enhancement**: Variable font features should enhance the experience but degrade gracefully; static fallback fonts must still produce a usable, attractive design
- **Parametric thinking**: Design decisions are expressed as ranges and relationships (weight 300-700 maps to scroll 0%-100%) rather than as fixed values

---

## Color Palette

Variable Typography favors restrained, high-contrast palettes that place maximum visual emphasis on the type itself. Dark-on-light and light-on-dark schemes dominate, with selective accent color used sparingly to highlight interactive states, axis change indicators, or editorial punctuation. The palette avoids competing with the dynamism of the typography.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Ink Black | `#0D0D0D` | Primary dark background, maximum contrast for white type |
| Charcoal | `#1A1A2E` | Secondary dark surface, card backgrounds, code blocks |
| Graphite | `#2D2D3A` | Tertiary dark surface, subtle elevation layers |
| Slate Mid | `#5A5A72` | Muted body text on light backgrounds, secondary labels |
| Cool Gray | `#9090A8` | Placeholder text, disabled states, axis value labels |
| Silver Wire | `#C8C8D8` | Borders, dividers, subtle UI chrome on dark backgrounds |
| Paper White | `#F5F5F0` | Primary light background, clean editorial surface |
| Pure White | `#FFFFFF` | Display text on dark, maximum contrast headlines |
| Signal Blue | `#2962FF` | Primary interactive accent, links, active axis indicators |
| Electric Violet | `#7C3AED` | Secondary accent, animation highlights, gradient endpoints |
| Kinetic Coral | `#FF6B6B` | Warning states, attention markers, hover emphasis |
| Axis Green | `#10B981` | Success states, active toggles, axis range indicators |
| Warm Amber | `#F59E0B` | Tertiary accent, weight axis highlight, caution states |
| Deep Navy | `#0F172A` | Alternative dark background, editorial depth |
| Whisper Gray | `#E8E8EC` | Light mode card surfaces, subtle backgrounds |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --vt-bg-dark: #0d0d0d;
  --vt-bg-charcoal: #1a1a2e;
  --vt-bg-graphite: #2d2d3a;
  --vt-bg-light: #f5f5f0;
  --vt-bg-whisper: #e8e8ec;
  --vt-bg-navy: #0f172a;

  /* Text */
  --vt-text-primary: #ffffff;
  --vt-text-secondary: #c8c8d8;
  --vt-text-muted: #9090a8;
  --vt-text-dark: #0d0d0d;
  --vt-text-body: #5a5a72;

  /* Accents */
  --vt-accent-blue: #2962ff;
  --vt-accent-violet: #7c3aed;
  --vt-accent-coral: #ff6b6b;
  --vt-accent-green: #10b981;
  --vt-accent-amber: #f59e0b;

  /* Borders & Chrome */
  --vt-border: #c8c8d8;
  --vt-border-subtle: rgba(200, 200, 216, 0.15);
  --vt-border-focus: var(--vt-accent-blue);

  /* Surfaces */
  --vt-surface-glass: rgba(255, 255, 255, 0.04);
  --vt-surface-elevated: rgba(255, 255, 255, 0.06);
  --vt-surface-hover: rgba(41, 98, 255, 0.08);

  /* Shadows */
  --vt-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --vt-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
  --vt-shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.3);
  --vt-shadow-glow-blue: 0 0 20px rgba(41, 98, 255, 0.15);
  --vt-shadow-glow-violet: 0 0 20px rgba(124, 58, 237, 0.15);

  /* Transitions */
  --vt-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --vt-transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --vt-transition-slow: 600ms cubic-bezier(0.4, 0, 0.2, 1);
  --vt-transition-font: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Font axis defaults */
  --vt-wght-light: 300;
  --vt-wght-regular: 400;
  --vt-wght-medium: 500;
  --vt-wght-bold: 700;
  --vt-wght-black: 900;
  --vt-wdth-condensed: 75;
  --vt-wdth-normal: 100;
  --vt-wdth-expanded: 125;
}
```

---

## Typography

Variable Typography is defined by its font choices. The aesthetic requires variable fonts with multiple axes -- ideally weight (`wght`) and width (`wdth`) at minimum, with optical size (`opsz`), grade (`GRAD`), and custom axes as bonuses. All recommended fonts below are available as variable fonts on Google Fonts.

### Recommended Google Fonts

| Font | Axes | Style | Usage |
|------|------|-------|-------|
| **Inter** | wght (100-900), slnt (-10-0) | Neutral, precise humanist sans-serif with 2600+ glyphs | Body text, UI elements, all-purpose workhorse |
| **Roboto Flex** | wght, wdth, opsz, GRAD, XTRA, YOPQ, YTAS, YTDE, YTFI, YTLC, YTUC, slnt | Google's most axis-rich variable font with 12 parametric axes | Display headlines, experimental axis demos, responsive systems |
| **Recursive** | wght (300-1000), CASL (0-1), slnt (-15-0), MONO (0-1), CRSV (0-1) | 5-axis sans/mono with casual-to-linear range | Code blocks, UI with personality, casual-to-formal transitions |
| **Outfit** | wght (100-900) | Clean geometric sans-serif | Subheadings, navigation, secondary text |
| **Fraunces** | wght (100-900), opsz (9-144), SOFT (0-100), WONK (0-1) | Old-style serif with "softness" and "wonkiness" custom axes | Editorial headlines, expressive display text |
| **DM Sans** | wght (100-1000), opsz (14-auto) | Low-contrast geometric sans with optical size axis | Body text, clean UI, accessible reading |
| **Source Serif 4** | wght (200-900), opsz (8-60) | Adobe's editorial serif with optical sizing | Long-form body text, editorial layouts |
| **Commissioner** | wght (100-900), FLAR (0-100), VOLM (0-100) | Sans-serif with custom "flair" and "volume" axes | Experimental display, interactive axis demos |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Fraunces 800 (SOFT 50) | Inter 400 | Expressive editorial serif meets precise Swiss sans |
| Roboto Flex 700 (wdth 120) | DM Sans 400 | Dynamic expanded display with clean geometric body |
| Recursive 800 (CASL 1) | Recursive 400 (CASL 0) | Same family casual-to-linear shift for unified personality |
| Commissioner 700 (FLAR 80) | Inter 400 | Decorative flair headline with neutral readable body |
| Outfit 700 | Source Serif 4 400 (opsz 14) | Modern geometric heading with classic editorial body |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  line-height: 1.7;
  letter-spacing: -0.01em;
  color: var(--vt-text-secondary);
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--vt-text-primary);
  font-variation-settings: 'opsz' 48, 'SOFT' 30, 'WONK' 1;
}

h1 {
  font-size: clamp(3rem, 2rem + 5vw, 7rem);
  font-weight: 900;
  font-variation-settings: 'opsz' 144, 'SOFT' 0, 'WONK' 1;
}

/* Variable weight animation on display text */
.vt-display {
  font-family: 'Roboto Flex', sans-serif;
  font-size: clamp(4rem, 3rem + 6vw, 9rem);
  font-weight: 100;
  line-height: 0.95;
  letter-spacing: -0.04em;
  animation: breathe-weight 4s ease-in-out infinite alternate;
}

@keyframes breathe-weight {
  from { font-variation-settings: 'wght' 100, 'wdth' 100; }
  to   { font-variation-settings: 'wght' 900, 'wdth' 125; }
}

/* Monospace code with Recursive */
code, pre {
  font-family: 'Recursive', 'Fira Code', monospace;
  font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 400;
  font-size: 0.9em;
}

/* Casual-to-linear interactive label */
.vt-interactive-label {
  font-family: 'Recursive', sans-serif;
  font-variation-settings: 'CASL' 0, 'wght' 400;
  transition: font-variation-settings var(--vt-transition-font);
}

.vt-interactive-label:hover {
  font-variation-settings: 'CASL' 1, 'wght' 700;
}
```

---

## Layout Principles

- **Typography as hero**: The largest visual element on every page should be type -- not an image, icon, or illustration. Variable font behavior replaces traditional hero imagery
- **Extreme vertical rhythm**: Use a strict baseline grid (8px or 4px increments) with generous line-height values (1.5-1.8 for body, 0.9-1.1 for display) to give animated type room to breathe
- **Whitespace as counterpoint**: Abundant negative space around display type amplifies the visual impact of weight and width changes; crowded layouts diminish the effect
- **Single-column editorial flow**: Long-form content favors a centered single column (max-width 680-750px) that lets optical size and weight adjustments do the hierarchical work
- **Full-bleed display sections**: Hero and section divider areas span the full viewport width, allowing large-scale type to fill the screen and create immersive typographic moments
- **Container-query-driven axes**: Layout containers adjust font axis values through CSS container queries, making typography respond to its local context rather than only the viewport
- **Asymmetric tension for headlines**: Display text positioned off-center or with dramatic left/right alignment creates dynamic visual tension that complements kinetic type behaviors
- **Grid as invisible scaffold**: Use CSS Grid with named areas for precise typographic placement, but keep the grid invisible -- no visible card borders or boxes unless essential
- **Scroll-linked sections**: Full-viewport-height sections with scroll-snap create discrete "slides" where each section showcases a different variable font axis or behavior
- **Responsive axis scaling**: Width axis (`wdth`) tightens on narrow viewports while weight axis (`wght`) compensates by increasing slightly, maintaining typographic color across breakpoints

---

## CSS / Design Techniques

### Variable Type Card Component

```css
.vt-card {
  background: var(--vt-surface-glass);
  border: 1px solid var(--vt-border-subtle);
  border-radius: 12px;
  padding: 2rem 2.5rem;
  position: relative;
  overflow: hidden;
  transition: border-color var(--vt-transition-base),
              box-shadow var(--vt-transition-base);
}

.vt-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--vt-accent-blue),
    var(--vt-accent-violet),
    transparent
  );
  opacity: 0.4;
  transition: opacity var(--vt-transition-base);
}

.vt-card:hover {
  border-color: rgba(41, 98, 255, 0.25);
  box-shadow: var(--vt-shadow-glow-blue);
}

.vt-card:hover::before {
  opacity: 0.8;
}

/* Card title with weight shift on hover */
.vt-card__title {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-variation-settings: 'wght' 500;
  letter-spacing: -0.02em;
  color: var(--vt-text-primary);
  margin-bottom: 0.75rem;
  transition: font-variation-settings var(--vt-transition-font);
}

.vt-card:hover .vt-card__title {
  font-variation-settings: 'wght' 800;
}

/* Card body text */
.vt-card__body {
  font-family: 'Inter', sans-serif;
  font-variation-settings: 'wght' 380;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--vt-text-muted);
}
```

### Variable Type Button Component

```css
/* Primary button with weight-shift hover */
.vt-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: 1px solid var(--vt-accent-blue);
  background: var(--vt-accent-blue);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-variation-settings: 'wght' 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--vt-transition-base),
              font-variation-settings var(--vt-transition-font);
}

.vt-button:hover {
  font-variation-settings: 'wght' 700;
  background: #1a4fd9;
  box-shadow: var(--vt-shadow-glow-blue);
  transform: translateY(-1px);
}

.vt-button:active {
  font-variation-settings: 'wght' 800;
  transform: translateY(0);
}

/* Ghost variant */
.vt-button--ghost {
  background: transparent;
  color: var(--vt-accent-blue);
}

.vt-button--ghost:hover {
  background: var(--vt-surface-hover);
  box-shadow: none;
}

/* Large display variant with width animation */
.vt-button--display {
  font-family: 'Roboto Flex', sans-serif;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  font-variation-settings: 'wght' 400, 'wdth' 100;
}

.vt-button--display:hover {
  font-variation-settings: 'wght' 700, 'wdth' 115;
}
```

### Variable Type Navigation

```css
.vt-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(13, 13, 13, 0.92);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid var(--vt-border-subtle);
  position: sticky;
  top: 0;
  z-index: 100;
}

.vt-nav__logo {
  font-family: 'Roboto Flex', sans-serif;
  font-size: 1.25rem;
  font-variation-settings: 'wght' 800, 'wdth' 110;
  letter-spacing: -0.03em;
  color: var(--vt-text-primary);
  text-decoration: none;
  transition: font-variation-settings var(--vt-transition-font);
}

.vt-nav__logo:hover {
  font-variation-settings: 'wght' 900, 'wdth' 125;
}

.vt-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.vt-nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-variation-settings: 'wght' 400;
  letter-spacing: 0.01em;
  color: var(--vt-text-muted);
  text-decoration: none;
  padding: 0.25rem 0;
  position: relative;
  transition: color var(--vt-transition-fast),
              font-variation-settings var(--vt-transition-font);
}

.vt-nav__link:hover {
  color: var(--vt-text-primary);
  font-variation-settings: 'wght' 700;
}

.vt-nav__link--active {
  color: var(--vt-accent-blue);
  font-variation-settings: 'wght' 600;
}

/* Animated underline */
.vt-nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--vt-accent-blue);
  transition: width var(--vt-transition-base);
}

.vt-nav__link:hover::after,
.vt-nav__link--active::after {
  width: 100%;
}
```

### Variable Type Hero Section

```css
.vt-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.vt-hero__title {
  font-family: 'Roboto Flex', sans-serif;
  font-size: clamp(4rem, 3rem + 8vw, 12rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: var(--vt-text-primary);
  font-variation-settings: 'wght' 100, 'wdth' 100;
  animation: hero-breathe 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
}

@keyframes hero-breathe {
  0%   { font-variation-settings: 'wght' 100, 'wdth' 75; }
  25%  { font-variation-settings: 'wght' 400, 'wdth' 100; }
  50%  { font-variation-settings: 'wght' 700, 'wdth' 115; }
  75%  { font-variation-settings: 'wght' 1000, 'wdth' 125; }
  100% { font-variation-settings: 'wght' 700, 'wdth' 100; }
}

.vt-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  font-variation-settings: 'wght' 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vt-text-muted);
  margin-top: 2rem;
}

/* Per-character staggered animation */
.vt-hero__title span {
  display: inline-block;
  animation: char-wave 3s ease-in-out infinite;
}

@keyframes char-wave {
  0%, 100% { font-variation-settings: 'wght' 100, 'wdth' 100; }
  50%      { font-variation-settings: 'wght' 900, 'wdth' 120; }
}

/* Stagger each character */
.vt-hero__title span:nth-child(1)  { animation-delay: 0.0s; }
.vt-hero__title span:nth-child(2)  { animation-delay: 0.1s; }
.vt-hero__title span:nth-child(3)  { animation-delay: 0.2s; }
.vt-hero__title span:nth-child(4)  { animation-delay: 0.3s; }
.vt-hero__title span:nth-child(5)  { animation-delay: 0.4s; }
.vt-hero__title span:nth-child(6)  { animation-delay: 0.5s; }
.vt-hero__title span:nth-child(7)  { animation-delay: 0.6s; }
.vt-hero__title span:nth-child(8)  { animation-delay: 0.7s; }
.vt-hero__title span:nth-child(9)  { animation-delay: 0.8s; }
.vt-hero__title span:nth-child(10) { animation-delay: 0.9s; }
.vt-hero__title span:nth-child(11) { animation-delay: 1.0s; }
.vt-hero__title span:nth-child(12) { animation-delay: 1.1s; }
```

### Weight Wave Text Effect

```css
/* Continuous weight wave across a line of text */
.vt-wave-text {
  font-family: 'Roboto Flex', sans-serif;
  font-size: clamp(2rem, 1.5rem + 3vw, 5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--vt-text-primary);
}

.vt-wave-text span {
  display: inline-block;
  animation: weight-wave 2.5s ease-in-out infinite;
}

@keyframes weight-wave {
  0%, 100% { font-variation-settings: 'wght' 200; }
  50%      { font-variation-settings: 'wght' 900; }
}

/* Generate staggered delays for up to 20 characters */
.vt-wave-text span:nth-child(1)  { animation-delay: calc(0 * 0.08s); }
.vt-wave-text span:nth-child(2)  { animation-delay: calc(1 * 0.08s); }
.vt-wave-text span:nth-child(3)  { animation-delay: calc(2 * 0.08s); }
.vt-wave-text span:nth-child(4)  { animation-delay: calc(3 * 0.08s); }
.vt-wave-text span:nth-child(5)  { animation-delay: calc(4 * 0.08s); }
.vt-wave-text span:nth-child(6)  { animation-delay: calc(5 * 0.08s); }
.vt-wave-text span:nth-child(7)  { animation-delay: calc(6 * 0.08s); }
.vt-wave-text span:nth-child(8)  { animation-delay: calc(7 * 0.08s); }
.vt-wave-text span:nth-child(9)  { animation-delay: calc(8 * 0.08s); }
.vt-wave-text span:nth-child(10) { animation-delay: calc(9 * 0.08s); }
.vt-wave-text span:nth-child(11) { animation-delay: calc(10 * 0.08s); }
.vt-wave-text span:nth-child(12) { animation-delay: calc(11 * 0.08s); }
.vt-wave-text span:nth-child(13) { animation-delay: calc(12 * 0.08s); }
.vt-wave-text span:nth-child(14) { animation-delay: calc(13 * 0.08s); }
.vt-wave-text span:nth-child(15) { animation-delay: calc(14 * 0.08s); }
.vt-wave-text span:nth-child(16) { animation-delay: calc(15 * 0.08s); }
.vt-wave-text span:nth-child(17) { animation-delay: calc(16 * 0.08s); }
.vt-wave-text span:nth-child(18) { animation-delay: calc(17 * 0.08s); }
.vt-wave-text span:nth-child(19) { animation-delay: calc(18 * 0.08s); }
.vt-wave-text span:nth-child(20) { animation-delay: calc(19 * 0.08s); }
```

### Scroll-Linked Weight Section

```css
/* Section where type weight maps to scroll progress */
.vt-scroll-section {
  min-height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.vt-scroll-section__text {
  font-family: 'Roboto Flex', sans-serif;
  font-size: clamp(3rem, 2rem + 6vw, 8rem);
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--vt-text-primary);
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  /* font-weight animated via JS scroll handler */
  font-variation-settings: 'wght' var(--scroll-weight, 100), 'wdth' var(--scroll-width, 75);
  transition: font-variation-settings 50ms linear;
}

/* JavaScript scroll handler (inline in template):
   Maps scroll position to CSS custom properties
   --scroll-weight: 100 to 900
   --scroll-width:  75 to 125
*/
```

### Axis Slider Control Panel

```css
/* UI panel for interactive axis exploration */
.vt-axis-panel {
  background: var(--vt-bg-charcoal);
  border: 1px solid var(--vt-border-subtle);
  border-radius: 12px;
  padding: 2rem;
  display: grid;
  gap: 1.25rem;
}

.vt-axis-panel__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Recursive', monospace;
  font-size: 0.8rem;
  font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vt-text-muted);
}

.vt-axis-panel__value {
  font-family: 'Recursive', monospace;
  font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 400;
  color: var(--vt-accent-blue);
}

/* Custom range slider */
.vt-axis-panel__slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: var(--vt-bg-graphite);
  border-radius: 2px;
  outline: none;
}

.vt-axis-panel__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: var(--vt-accent-blue);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--vt-bg-charcoal);
  box-shadow: 0 0 8px rgba(41, 98, 255, 0.3);
  transition: box-shadow var(--vt-transition-fast);
}

.vt-axis-panel__slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 16px rgba(41, 98, 255, 0.5);
}

.vt-axis-panel__preview {
  font-family: 'Roboto Flex', sans-serif;
  font-size: clamp(2rem, 1.5rem + 3vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--vt-text-primary);
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid var(--vt-border-subtle);
  /* Axis values set via JS from slider inputs */
}
```

### Responsive Axis Media Queries

```css
/* Adjust variable font axes across breakpoints */

/* Base (mobile-first) */
.vt-responsive-text {
  font-family: 'Roboto Flex', sans-serif;
  font-variation-settings: 'wght' 500, 'wdth' 85, 'opsz' 14;
  font-size: 1rem;
  line-height: 1.65;
}

/* Tablet */
@media (min-width: 640px) {
  .vt-responsive-text {
    font-variation-settings: 'wght' 420, 'wdth' 95, 'opsz' 18;
    font-size: 1.05rem;
    line-height: 1.7;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .vt-responsive-text {
    font-variation-settings: 'wght' 380, 'wdth' 100, 'opsz' 24;
    font-size: 1.1rem;
    line-height: 1.75;
  }
}

/* Large display */
@media (min-width: 1440px) {
  .vt-responsive-text {
    font-variation-settings: 'wght' 360, 'wdth' 105, 'opsz' 32;
    font-size: 1.15rem;
    line-height: 1.8;
  }
}

/* User preference: reduce motion */
@media (prefers-reduced-motion: reduce) {
  .vt-hero__title,
  .vt-hero__title span,
  .vt-wave-text span,
  .vt-display,
  .vt-nav__logo,
  .vt-button,
  .vt-card__title {
    animation: none !important;
    transition: color var(--vt-transition-fast),
                background var(--vt-transition-fast) !important;
  }
}
```

---

## Design Do's and Don'ts

### Do

- Use variable fonts with at least 2-3 axes (weight + width minimum) to justify the aesthetic; a single-axis weight-only font is just a regular font
- Map axis changes to meaningful interactions: weight increase on hover signals clickability, width narrowing on small screens improves reflow
- Respect `prefers-reduced-motion` by disabling or dramatically reducing all `font-variation-settings` animations for users who request it
- Pair a richly-axised display font (Roboto Flex, Fraunces) with a clean, precise body font (Inter, DM Sans) for hierarchy
- Use `font-optical-sizing: auto` on body text to let the browser intelligently adjust optical size across different `font-size` values
- Keep color palettes restrained so the dynamic typography has room to be the visual centerpiece
- Test axis animations on low-powered devices; `font-variation-settings` transitions can cause jank if too many elements animate simultaneously
- Provide meaningful fallback fonts in your `font-family` stack; use `@supports (font-variation-settings: normal)` to gate variable-font-specific styles

### Don't

- Animate every piece of text on the page; variable font motion should be selective and purposeful, used on 1-3 key elements per viewport
- Use `font-variation-settings` for properties that have dedicated CSS equivalents; prefer `font-weight: 600` over `font-variation-settings: 'wght' 600` for registered axes when not animating
- Combine variable typography with heavy decoration (complex backgrounds, dense illustration, ornamental borders) that competes with the type
- Forget to subset variable fonts in production; a full Roboto Flex file with all axes can be 1MB+ uncompressed, negating performance benefits
- Apply width axis changes that distort text beyond readability; stay within the font designer's intended `wdth` axis range
- Use custom axes without explaining their effect to the user in interactive contexts; if users control a `CASL` slider, label it "Casualness" not "CASL"
- Set animation durations below 200ms for font-variation-settings; sub-200ms axis transitions appear as jarring jumps rather than fluid interpolation
- Rely on variable font features without testing in Safari, Firefox, and Chrome; axis animation support and rendering quality still varies across browsers

---

## Related Aesthetics

| Aesthetic | Relationship to Variable Typography |
|-----------|-------------------------------------|
| **Kinetic Typography** | Direct ancestor; Variable Typography applies kinetic type principles (motion, timing, expression) specifically through variable font axis manipulation rather than positional animation |
| **Swiss/International Style** | Shares the typography-first ethos and grid discipline; Variable Typography extends Swiss rationalism with fluid, parametric axis control |
| **Editorial Magazine Layout** | Both prioritize typographic hierarchy and scale contrast; Variable Typography adds dynamic responsiveness to the editorial tradition of carefully set type |
| **Brutalist Web Design** | Both strip away decoration to foreground raw structural elements; Brutalism uses fixed, aggressive type while Variable Typography uses fluid, animated type |
| **Minimalism** | Shares restraint in color and decoration; Variable Typography channels minimalism's "less is more" into "less decoration, more typographic dynamism" |
| **Generative Design** | Both treat design elements as parametric, code-driven outputs; generative typography is a subset where variable font axes serve as the parameters |
| **Motion Design** | Overlapping concern with timing, easing, and choreography; Motion Design uses positional/transform animation while Variable Typography uses axis interpolation |
| **Responsive Web Design** | Variable Typography extends responsive principles beyond layout reflow into the letterforms themselves, adjusting width and optical size per breakpoint |
| **Neubrutalism** | Both foreground bold, oversized type with restrained palettes; Neubrutalism uses static heavy weight while Variable Typography animates across weight ranges |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variable Typography</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&family=Fraunces:opsz,wght@9..144,100..900&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       CSS Custom Properties
       ======================================== */
    :root {
      --vt-bg-dark: #0d0d0d;
      --vt-bg-charcoal: #1a1a2e;
      --vt-bg-graphite: #2d2d3a;
      --vt-bg-light: #f5f5f0;
      --vt-bg-whisper: #e8e8ec;
      --vt-bg-navy: #0f172a;

      --vt-text-primary: #ffffff;
      --vt-text-secondary: #c8c8d8;
      --vt-text-muted: #9090a8;
      --vt-text-dark: #0d0d0d;
      --vt-text-body: #5a5a72;

      --vt-accent-blue: #2962ff;
      --vt-accent-violet: #7c3aed;
      --vt-accent-coral: #ff6b6b;
      --vt-accent-green: #10b981;
      --vt-accent-amber: #f59e0b;

      --vt-border-subtle: rgba(200, 200, 216, 0.12);
      --vt-border-focus: var(--vt-accent-blue);

      --vt-surface-glass: rgba(255, 255, 255, 0.04);
      --vt-surface-hover: rgba(41, 98, 255, 0.08);

      --vt-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
      --vt-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
      --vt-shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.3);
      --vt-shadow-glow-blue: 0 0 20px rgba(41, 98, 255, 0.15);

      --vt-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --vt-transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
      --vt-transition-font: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* ========================================
       Reset & Base
       ======================================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-snap-type: y proximity;
    }

    body {
      background: var(--vt-bg-dark);
      color: var(--vt-text-secondary);
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 400;
      font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
      line-height: 1.7;
      letter-spacing: -0.01em;
      font-optical-sizing: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    a {
      color: var(--vt-accent-blue);
      text-decoration: none;
      transition: color var(--vt-transition-fast);
    }

    a:hover {
      color: var(--vt-accent-violet);
    }

    /* ========================================
       Navigation
       ======================================== */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: rgba(13, 13, 13, 0.92);
      backdrop-filter: blur(16px) saturate(1.2);
      -webkit-backdrop-filter: blur(16px) saturate(1.2);
      border-bottom: 1px solid var(--vt-border-subtle);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav__logo {
      font-family: 'Roboto Flex', sans-serif;
      font-size: 1.2rem;
      font-variation-settings: 'wght' 800, 'wdth' 110;
      letter-spacing: -0.03em;
      color: var(--vt-text-primary);
      text-decoration: none;
      transition: font-variation-settings var(--vt-transition-font);
    }

    .nav__logo:hover {
      font-variation-settings: 'wght' 900, 'wdth' 130;
      color: var(--vt-text-primary);
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav__link {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-variation-settings: 'wght' 400;
      color: var(--vt-text-muted);
      text-decoration: none;
      padding: 0.25rem 0;
      position: relative;
      transition: color var(--vt-transition-fast),
                  font-variation-settings var(--vt-transition-font);
    }

    .nav__link:hover {
      color: var(--vt-text-primary);
      font-variation-settings: 'wght' 700;
    }

    .nav__link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--vt-accent-blue);
      transition: width var(--vt-transition-base);
    }

    .nav__link:hover::after {
      width: 100%;
    }

    /* ========================================
       Hero Section
       ======================================== */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 6rem 2rem;
      scroll-snap-align: start;
      position: relative;
    }

    .hero__eyebrow {
      font-family: 'Recursive', monospace;
      font-size: 0.8rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--vt-accent-blue);
      margin-bottom: 2rem;
    }

    .hero__title {
      font-family: 'Roboto Flex', sans-serif;
      font-size: clamp(3.5rem, 2rem + 8vw, 11rem);
      line-height: 0.9;
      letter-spacing: -0.05em;
      color: var(--vt-text-primary);
    }

    .hero__title span {
      display: inline-block;
      animation: char-breathe 4s ease-in-out infinite;
    }

    @keyframes char-breathe {
      0%, 100% { font-variation-settings: 'wght' 100, 'wdth' 80; }
      50%      { font-variation-settings: 'wght' 900, 'wdth' 120; }
    }

    .hero__title span:nth-child(1)  { animation-delay: 0.00s; }
    .hero__title span:nth-child(2)  { animation-delay: 0.08s; }
    .hero__title span:nth-child(3)  { animation-delay: 0.16s; }
    .hero__title span:nth-child(4)  { animation-delay: 0.24s; }
    .hero__title span:nth-child(5)  { animation-delay: 0.32s; }
    .hero__title span:nth-child(6)  { animation-delay: 0.40s; }
    .hero__title span:nth-child(7)  { animation-delay: 0.48s; }
    .hero__title span:nth-child(8)  { animation-delay: 0.56s; }
    .hero__title span:nth-child(9)  { animation-delay: 0.64s; }
    .hero__title span:nth-child(10) { animation-delay: 0.72s; }
    .hero__title span:nth-child(11) { animation-delay: 0.80s; }
    .hero__title span:nth-child(12) { animation-delay: 0.88s; }
    .hero__title span:nth-child(13) { animation-delay: 0.96s; }
    .hero__title span:nth-child(14) { animation-delay: 1.04s; }
    .hero__title span:nth-child(15) { animation-delay: 1.12s; }
    .hero__title span:nth-child(16) { animation-delay: 1.20s; }
    .hero__title span:nth-child(17) { animation-delay: 1.28s; }
    .hero__title span:nth-child(18) { animation-delay: 1.36s; }

    .hero__subtitle {
      font-family: 'Inter', sans-serif;
      font-size: clamp(1rem, 0.85rem + 0.8vw, 1.4rem);
      font-variation-settings: 'wght' 300;
      color: var(--vt-text-muted);
      margin-top: 2.5rem;
      max-width: 600px;
      line-height: 1.6;
    }

    .hero__cta-group {
      display: flex;
      gap: 1rem;
      margin-top: 3rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    /* ========================================
       Buttons
       ======================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 2rem;
      border-radius: 8px;
      border: 1px solid var(--vt-accent-blue);
      background: var(--vt-accent-blue);
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-variation-settings: 'wght' 500;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition: all var(--vt-transition-base),
                  font-variation-settings var(--vt-transition-font);
    }

    .btn:hover {
      font-variation-settings: 'wght' 700;
      background: #1a4fd9;
      box-shadow: var(--vt-shadow-glow-blue);
      transform: translateY(-1px);
      color: #ffffff;
    }

    .btn--ghost {
      background: transparent;
      color: var(--vt-accent-blue);
    }

    .btn--ghost:hover {
      background: var(--vt-surface-hover);
      box-shadow: none;
      color: var(--vt-accent-blue);
    }

    /* ========================================
       Section Utility
       ======================================== */
    .section {
      padding: 6rem 2rem;
      scroll-snap-align: start;
    }

    .section--alt {
      background: var(--vt-bg-charcoal);
    }

    .section__inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .section__eyebrow {
      font-family: 'Recursive', monospace;
      font-size: 0.75rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--vt-accent-blue);
      margin-bottom: 1rem;
    }

    .section__title {
      font-family: 'Fraunces', Georgia, serif;
      font-size: clamp(2rem, 1.5rem + 3vw, 4rem);
      font-weight: 800;
      font-variation-settings: 'opsz' 72, 'SOFT' 20, 'WONK' 1;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--vt-text-primary);
      margin-bottom: 1.5rem;
    }

    .section__desc {
      font-variation-settings: 'wght' 380;
      font-size: 1.05rem;
      color: var(--vt-text-muted);
      max-width: 650px;
      line-height: 1.7;
      margin-bottom: 3rem;
    }

    /* ========================================
       Card Grid
       ======================================== */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--vt-surface-glass);
      border: 1px solid var(--vt-border-subtle);
      border-radius: 12px;
      padding: 2rem;
      position: relative;
      overflow: hidden;
      transition: border-color var(--vt-transition-base),
                  box-shadow var(--vt-transition-base);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--vt-accent-blue),
        var(--vt-accent-violet),
        transparent
      );
      opacity: 0;
      transition: opacity var(--vt-transition-base);
    }

    .card:hover {
      border-color: rgba(41, 98, 255, 0.2);
      box-shadow: var(--vt-shadow-glow-blue);
    }

    .card:hover::before {
      opacity: 0.6;
    }

    .card__axis {
      font-family: 'Recursive', monospace;
      font-size: 0.7rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--vt-accent-blue);
      margin-bottom: 0.75rem;
    }

    .card__title {
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      font-variation-settings: 'wght' 500;
      letter-spacing: -0.02em;
      color: var(--vt-text-primary);
      margin-bottom: 0.75rem;
      transition: font-variation-settings var(--vt-transition-font);
    }

    .card:hover .card__title {
      font-variation-settings: 'wght' 800;
    }

    .card__text {
      font-variation-settings: 'wght' 380;
      font-size: 0.9rem;
      line-height: 1.65;
      color: var(--vt-text-muted);
    }

    /* ========================================
       Interactive Axis Demo
       ======================================== */
    .axis-demo {
      background: var(--vt-bg-graphite);
      border-radius: 16px;
      padding: 3rem;
      text-align: center;
    }

    .axis-demo__preview {
      font-family: 'Roboto Flex', sans-serif;
      font-size: clamp(2.5rem, 2rem + 4vw, 6rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--vt-text-primary);
      margin-bottom: 2.5rem;
      min-height: 1.3em;
    }

    .axis-demo__controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      text-align: left;
    }

    .axis-control {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .axis-control__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .axis-control__name {
      font-family: 'Recursive', monospace;
      font-size: 0.75rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--vt-text-muted);
    }

    .axis-control__value {
      font-family: 'Recursive', monospace;
      font-size: 0.75rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 400;
      color: var(--vt-accent-blue);
    }

    .axis-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--vt-bg-dark);
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .axis-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: var(--vt-accent-blue);
      border-radius: 50%;
      border: 2px solid var(--vt-bg-graphite);
      box-shadow: 0 0 8px rgba(41, 98, 255, 0.3);
    }

    .axis-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: var(--vt-accent-blue);
      border-radius: 50%;
      border: 2px solid var(--vt-bg-graphite);
      box-shadow: 0 0 8px rgba(41, 98, 255, 0.3);
    }

    /* ========================================
       Wave Text Demo
       ======================================== */
    .wave-demo {
      text-align: center;
      padding: 4rem 0;
    }

    .wave-text {
      font-family: 'Roboto Flex', sans-serif;
      font-size: clamp(2.5rem, 1.5rem + 5vw, 6rem);
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--vt-text-primary);
    }

    .wave-text span {
      display: inline-block;
      animation: weight-wave 3s ease-in-out infinite;
    }

    @keyframes weight-wave {
      0%, 100% { font-variation-settings: 'wght' 100; color: var(--vt-text-muted); }
      50%      { font-variation-settings: 'wght' 900; color: var(--vt-text-primary); }
    }

    .wave-text span:nth-child(1)  { animation-delay: calc(0 * 0.1s); }
    .wave-text span:nth-child(2)  { animation-delay: calc(1 * 0.1s); }
    .wave-text span:nth-child(3)  { animation-delay: calc(2 * 0.1s); }
    .wave-text span:nth-child(4)  { animation-delay: calc(3 * 0.1s); }
    .wave-text span:nth-child(5)  { animation-delay: calc(4 * 0.1s); }
    .wave-text span:nth-child(6)  { animation-delay: calc(5 * 0.1s); }
    .wave-text span:nth-child(7)  { animation-delay: calc(6 * 0.1s); }
    .wave-text span:nth-child(8)  { animation-delay: calc(7 * 0.1s); }
    .wave-text span:nth-child(9)  { animation-delay: calc(8 * 0.1s); }
    .wave-text span:nth-child(10) { animation-delay: calc(9 * 0.1s); }
    .wave-text span:nth-child(11) { animation-delay: calc(10 * 0.1s); }
    .wave-text span:nth-child(12) { animation-delay: calc(11 * 0.1s); }
    .wave-text span:nth-child(13) { animation-delay: calc(12 * 0.1s); }

    /* ========================================
       Scroll-Weight Section
       ======================================== */
    .scroll-weight {
      min-height: 150vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .scroll-weight__text {
      font-family: 'Roboto Flex', sans-serif;
      font-size: clamp(3rem, 2rem + 6vw, 9rem);
      line-height: 1.0;
      letter-spacing: -0.04em;
      color: var(--vt-text-primary);
      position: sticky;
      top: 50vh;
      transform: translateY(-50%);
      text-align: center;
      transition: font-variation-settings 60ms linear;
    }

    /* ========================================
       Casual-Formal Demo
       ======================================== */
    .casual-demo {
      text-align: center;
      padding: 4rem 0;
    }

    .casual-demo__text {
      font-family: 'Recursive', sans-serif;
      font-size: clamp(2rem, 1.5rem + 3vw, 4.5rem);
      line-height: 1.2;
      color: var(--vt-text-primary);
      font-variation-settings: 'CASL' 0, 'wght' 400, 'slnt' 0;
      transition: font-variation-settings 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: pointer;
      user-select: none;
    }

    .casual-demo__text:hover {
      font-variation-settings: 'CASL' 1, 'wght' 800, 'slnt' -12;
      color: var(--vt-accent-blue);
    }

    .casual-demo__label {
      font-family: 'Recursive', monospace;
      font-size: 0.75rem;
      font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 400;
      color: var(--vt-text-muted);
      margin-top: 1rem;
      letter-spacing: 0.05em;
    }

    /* ========================================
       Footer
       ======================================== */
    .footer {
      padding: 3rem 2rem;
      text-align: center;
      border-top: 1px solid var(--vt-border-subtle);
    }

    .footer__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-variation-settings: 'wght' 350;
      color: var(--vt-text-muted);
    }

    .footer__credit {
      font-family: 'Roboto Flex', sans-serif;
      font-size: clamp(1.5rem, 1rem + 2vw, 3rem);
      font-variation-settings: 'wght' 200, 'wdth' 100;
      letter-spacing: -0.03em;
      color: var(--vt-text-secondary);
      margin-top: 1.5rem;
      transition: font-variation-settings 600ms ease;
    }

    .footer__credit:hover {
      font-variation-settings: 'wght' 900, 'wdth' 125;
    }

    /* ========================================
       Reduced Motion
       ======================================== */
    @media (prefers-reduced-motion: reduce) {
      .hero__title span,
      .wave-text span {
        animation: none !important;
        font-variation-settings: 'wght' 700, 'wdth' 100 !important;
      }

      * {
        transition-duration: 0.01ms !important;
      }
    }

    /* ========================================
       Responsive
       ======================================== */
    @media (max-width: 768px) {
      .nav {
        padding: 0.75rem 1.25rem;
      }

      .nav__links {
        gap: 1.25rem;
      }

      .nav__link {
        font-size: 0.8rem;
      }

      .section {
        padding: 4rem 1.25rem;
      }

      .axis-demo {
        padding: 2rem 1.5rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__logo">VarType</a>
    <ul class="nav__links">
      <li><a href="#axes" class="nav__link">Axes</a></li>
      <li><a href="#wave" class="nav__link">Wave</a></li>
      <li><a href="#interactive" class="nav__link">Interactive</a></li>
      <li><a href="#scroll" class="nav__link">Scroll</a></li>
      <li><a href="#casual" class="nav__link">Casual</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <p class="hero__eyebrow">Variable Font Aesthetic</p>
    <h1 class="hero__title" aria-label="Variable Typography">
      <span>V</span><span>a</span><span>r</span><span>i</span><span>a</span><span>b</span><span>l</span><span>e</span>
      <br>
      <span>T</span><span>y</span><span>p</span><span>o</span><span>g</span><span>r</span><span>a</span><span>p</span><span>h</span><span>y</span>
    </h1>
    <p class="hero__subtitle">
      Dynamic responsive type that breathes, flows, and responds.
      One font file. Infinite expressions. Every axis a design decision.
    </p>
    <div class="hero__cta-group">
      <a href="#interactive" class="btn">Explore Axes</a>
      <a href="#wave" class="btn btn--ghost">See the Wave</a>
    </div>
  </section>

  <!-- Axis Feature Cards -->
  <section id="axes" class="section section--alt">
    <div class="section__inner">
      <p class="section__eyebrow">Registered Axes</p>
      <h2 class="section__title">The Five Dimensions of Type</h2>
      <p class="section__desc">
        Variable fonts expose continuous design axes that replace
        discrete font files. Each axis is a slider from minimum to
        maximum, interpolating every value in between.
      </p>
      <div class="card-grid">
        <div class="card">
          <p class="card__axis">wght 100-1000</p>
          <h3 class="card__title">Weight</h3>
          <p class="card__text">
            Controls stroke thickness from hairline Thin to ultra-heavy
            Black. The most commonly used axis, replacing the need for
            separate Light, Regular, Medium, Bold, and Black font files.
          </p>
        </div>
        <div class="card">
          <p class="card__axis">wdth 25-200</p>
          <h3 class="card__title">Width</h3>
          <p class="card__text">
            Adjusts the horizontal proportion of letterforms from
            ultra-condensed to ultra-expanded. Essential for responsive
            typography, allowing headlines to reflow naturally across
            viewport sizes.
          </p>
        </div>
        <div class="card">
          <p class="card__axis">opsz 8-144</p>
          <h3 class="card__title">Optical Size</h3>
          <p class="card__text">
            Adapts stroke contrast and detail to display size. Small
            optical sizes use thicker strokes for legibility; large sizes
            refine details for elegance. Browsers can apply this
            automatically.
          </p>
        </div>
        <div class="card">
          <p class="card__axis">slnt -15-0</p>
          <h3 class="card__title">Slant</h3>
          <p class="card__text">
            Tilts letterforms along a continuous oblique angle.
            Unlike italic, slant does not change letterform construction,
            making it ideal for subtle emphasis without changing the
            typographic texture.
          </p>
        </div>
        <div class="card">
          <p class="card__axis">ital 0-1</p>
          <h3 class="card__title">Italic</h3>
          <p class="card__text">
            A binary or continuous axis that activates true italic
            letterform alternates. In variable fonts with both slant and
            italic axes, this triggers actual italic letter shapes rather
            than simple oblique slanting.
          </p>
        </div>
        <div class="card">
          <p class="card__axis">CASL, GRAD, SOFT...</p>
          <h3 class="card__title">Custom Axes</h3>
          <p class="card__text">
            Font designers can define any custom axis: Casualness (CASL)
            in Recursive, Grade (GRAD) in Roboto Flex, Softness (SOFT)
            in Fraunces. These unlock unique personality dimensions
            beyond standard typography.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Wave Text Demo -->
  <section id="wave" class="section">
    <div class="section__inner">
      <p class="section__eyebrow">Kinetic Effect</p>
      <h2 class="section__title">Weight Wave</h2>
      <p class="section__desc">
        Per-character staggered weight animation creates a ripple
        effect across the text. Each letter cycles between thin and
        black with a slight delay, producing an organic wave of
        typographic emphasis.
      </p>
      <div class="wave-demo">
        <p class="wave-text" aria-label="Fluid Motion">
          <span>F</span><span>l</span><span>u</span><span>i</span><span>d</span><span>&nbsp;</span><span>M</span><span>o</span><span>t</span><span>i</span><span>o</span><span>n</span>
        </p>
      </div>
    </div>
  </section>

  <!-- Interactive Axis Demo -->
  <section id="interactive" class="section section--alt">
    <div class="section__inner">
      <p class="section__eyebrow">Interactive</p>
      <h2 class="section__title">Explore the Design Space</h2>
      <p class="section__desc">
        Drag the sliders to manipulate variable font axes in real
        time. The preview text responds instantly, letting you
        feel the continuous interpolation between style extremes.
      </p>
      <div class="axis-demo">
        <p class="axis-demo__preview" id="axisPreview">
          Parametric Type
        </p>
        <div class="axis-demo__controls">
          <div class="axis-control">
            <div class="axis-control__header">
              <span class="axis-control__name">Weight (wght)</span>
              <span class="axis-control__value" id="wghtValue">400</span>
            </div>
            <input type="range" class="axis-slider" id="wghtSlider"
                   min="100" max="1000" value="400" step="1">
          </div>
          <div class="axis-control">
            <div class="axis-control__header">
              <span class="axis-control__name">Width (wdth)</span>
              <span class="axis-control__value" id="wdthValue">100</span>
            </div>
            <input type="range" class="axis-slider" id="wdthSlider"
                   min="25" max="151" value="100" step="1">
          </div>
          <div class="axis-control">
            <div class="axis-control__header">
              <span class="axis-control__name">Optical Size (opsz)</span>
              <span class="axis-control__value" id="opszValue">48</span>
            </div>
            <input type="range" class="axis-slider" id="opszSlider"
                   min="8" max="144" value="48" step="1">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll-Linked Weight -->
  <section id="scroll" class="scroll-weight">
    <h2 class="scroll-weight__text" id="scrollText">
      Scroll to transform
    </h2>
  </section>

  <!-- Casual-to-Formal Demo -->
  <section id="casual" class="section">
    <div class="section__inner">
      <p class="section__eyebrow">Custom Axis: CASL</p>
      <h2 class="section__title">Casual to Formal</h2>
      <p class="section__desc">
        Recursive's Casualness axis transitions letterforms from
        rational, linear geometry to friendly, handwritten curves.
        Hover over the text below to see the shift.
      </p>
      <div class="casual-demo">
        <p class="casual-demo__text">
          Hover to shift personality
        </p>
        <p class="casual-demo__label">
          Linear (CASL 0) &rarr; Casual (CASL 1)
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p class="footer__text">
      Built with variable fonts from Google Fonts.
      All axes animated with pure CSS and minimal JavaScript.
    </p>
    <p class="footer__credit">Variable Typography</p>
  </footer>

  <!-- JavaScript: Interactive Axis Sliders -->
  <script>
    (function() {
      const preview = document.getElementById('axisPreview');
      const sliders = {
        wght: document.getElementById('wghtSlider'),
        wdth: document.getElementById('wdthSlider'),
        opsz: document.getElementById('opszSlider'),
      };
      const values = {
        wght: document.getElementById('wghtValue'),
        wdth: document.getElementById('wdthValue'),
        opsz: document.getElementById('opszValue'),
      };

      function updatePreview() {
        const wght = sliders.wght.value;
        const wdth = sliders.wdth.value;
        const opsz = sliders.opsz.value;
        preview.style.fontVariationSettings =
          `'wght' ${wght}, 'wdth' ${wdth}, 'opsz' ${opsz}`;
        values.wght.textContent = wght;
        values.wdth.textContent = wdth;
        values.opsz.textContent = opsz;
      }

      Object.values(sliders).forEach(slider => {
        slider.addEventListener('input', updatePreview);
      });

      updatePreview();
    })();

    // Scroll-linked weight
    (function() {
      const scrollText = document.getElementById('scrollText');
      const section = scrollText.closest('.scroll-weight');

      function onScroll() {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportH = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const total = sectionHeight - viewportH;
        const progress = Math.min(1, Math.max(0, scrolled / total));

        const wght = Math.round(100 + progress * 900);
        const wdth = Math.round(75 + progress * 76);
        scrollText.style.fontVariationSettings =
          `'wght' ${wght}, 'wdth' ${wdth}`;
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    })();
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Subset your variable fonts for production**: Use tools like `pyftsubset` (from fonttools) or Google Fonts' built-in subsetting via the `&text=` URL parameter to strip unused glyphs and axes, reducing file size by 50-80%
- **Use `font-display: swap` or `optional`**: Variable font files can be larger than static fonts; ensure text remains visible during load by setting `font-display` in your `@font-face` declarations or Google Fonts import
- **Prefer high-level CSS properties over `font-variation-settings` for registered axes**: Use `font-weight: 600` instead of `font-variation-settings: 'wght' 600` for weight, width, slant, and optical size -- this ensures proper cascade behavior and accessibility tool compatibility
- **Use `font-variation-settings` only for custom axes and animation**: Reserve the low-level property for designer-defined axes (CASL, GRAD, SOFT) and for CSS keyframe animations where you need to interpolate multiple axes simultaneously
- **Test scroll-linked animations with `passive: true` event listeners**: Scroll-driven font axis changes must use passive scroll handlers to avoid jank; consider the new CSS `animation-timeline: scroll()` spec for pure-CSS scroll linking where browser support allows
- **Implement `prefers-reduced-motion` from the start**: Wrap all `@keyframes` animations and long transitions in a `@media (prefers-reduced-motion: no-preference)` query, or disable them with a `reduce` query as shown in the template
- **Limit simultaneous axis animations to 3-5 elements per viewport**: Animating `font-variation-settings` forces glyph re-rasterization on every frame; too many concurrent animations will drop frames on mobile devices and low-powered hardware
- **Cache font files aggressively**: Set `Cache-Control: public, max-age=31536000, immutable` headers for self-hosted variable font files; their single-file nature means one cached download covers all styles permanently
