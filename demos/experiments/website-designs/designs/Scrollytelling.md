# Scrollytelling Design Reference

## Overview

Scrollytelling is a narrative-driven web design paradigm that transforms the simple act of scrolling into an immersive storytelling experience. Originating in digital journalism -- most notably the New York Times' groundbreaking 2012 piece "Snow Fall: The Avalanche at Tunnel Creek" -- scrollytelling weds long-form narrative with interactive visuals, parallax layering, and progressive content reveals that unfold in direct response to the user's scroll position. The scroll itself becomes the primary input mechanism: as readers advance down the page, text fades in, charts animate, backgrounds shift at different speeds, and media elements slide into view, turning passive consumption into active participation.

At its core, scrollytelling is built on the principle that complex stories -- whether investigative journalism, brand narratives, annual reports, or data essays -- deserve more than a wall of text. Publications like The Pudding, Bloomberg, and the Guardian have elevated the form into a distinct design language characterized by generous white space, full-viewport sections, cinematic imagery, and carefully choreographed motion. Each scroll unit (often called a "step") represents a discrete narrative beat: one idea, one visual, one moment of revelation. The rhythm of these steps controls pacing just as cuts and dissolves control a film.

Technically, scrollytelling relies on a stack of modern CSS and JavaScript patterns: position sticky for anchoring graphic panels while text scrolls past them, the Intersection Observer API (and libraries like Scrollama) for triggering step-based transitions, the newer CSS Scroll-Driven Animations specification for hardware-accelerated parallax and progress-linked keyframes, and semantic HTML structures that separate narrative steps from their visual counterparts. Accessibility and performance are first-class concerns -- scroll-driven experiences must degrade gracefully, respect reduced-motion preferences, and remain readable without JavaScript.

The visual tone is editorial and cinematic: high-contrast type against immersive photography, muted palettes punctuated by data-visualization accents, and layouts that breathe with whitespace. Typography is bold and purposeful, often animated or sequentially revealed to control reading pace. The result is a web experience that feels closer to a documentary film or museum installation than a traditional webpage.

---

## Visual Characteristics

### Core Design Traits

- **Full-viewport sections** -- each narrative step occupies the full height of the viewport, creating a page-by-page reading cadence controlled entirely by scrolling
- **Parallax depth layers** -- foreground text, midground illustrations, and background imagery move at different scroll speeds, producing a three-dimensional sense of depth
- **Sticky graphic panels** -- a visualization or image remains fixed in place (via `position: sticky`) while explanatory text scrolls past it, anchoring the reader's attention
- **Progressive content reveal** -- elements fade in, slide up, or scale into view only when the user reaches their scroll position, preventing information overload
- **Cinematic imagery** -- edge-to-edge photography, looping video backgrounds, and dramatic cropping evoke documentary filmmaking
- **Generous white space** -- sections breathe with ample padding; negative space controls pacing and lets each narrative beat land
- **Scroll-linked animations** -- chart lines draw, counters increment, and diagrams assemble in direct response to scroll position, not time
- **Stepped progress indicators** -- subtle dots, bars, or chapter markers along the edge of the viewport communicate how far through the story the reader has progressed
- **Typographic hierarchy as wayfinding** -- oversized display type signals new chapters; smaller body text provides detail; pull-quotes punctuate key moments
- **Data-visualization integration** -- inline charts, annotated maps, and animated infographics are woven directly into the narrative flow rather than relegated to sidebars
- **Ambient motion** -- subtle floating particles, gradient shifts, or slowly panning backgrounds create a living, breathing atmosphere even when the user pauses scrolling

### Design Principles

- **One step, one idea** -- each scroll-triggered section communicates a single concept, keeping the cognitive load low and the narrative focused
- **Scroll position is the timeline** -- treat vertical scroll as a video scrub bar; every pixel of scroll travel maps to a specific state of the visual narrative
- **Show, then tell** -- lead with the visual (image, chart, animation) and let text arrive to explain it, not the other way around
- **Degrade gracefully** -- the story must remain readable and coherent even when JavaScript fails, animations are disabled, or the user has `prefers-reduced-motion` set
- **Pacing over decoration** -- motion should serve narrative rhythm; gratuitous animation that does not advance the story is noise
- **Respect the reader's agency** -- scrollytelling works because the user controls the speed; never auto-scroll, hijack scroll direction, or lock the viewport without consent
- **Anchor, then transition** -- sticky elements provide visual anchors; transitions between anchored states provide narrative momentum
- **Performance is storytelling** -- a janky frame drop breaks immersion just as surely as a plot hole; optimize for 60 fps scroll-linked rendering

---

## Color Palette

### Scrollytelling Core Palette

The scrollytelling palette is editorial and cinematic. A near-black primary background sets a stage that recedes, letting content and data visuals command attention. Warm off-white text ensures readability without the harshness of pure white on pure black. Accent colors are borrowed from data-visualization conventions -- blues for neutral information, coral and amber for emphasis, green for positive signals -- applied sparingly so each splash of color carries narrative weight.

| Color Name | Hex | Role / Usage |
|------------|-----|-------------|
| **Midnight** | `#0D1117` | Primary background, immersive dark sections |
| **Ink** | `#161B22` | Card backgrounds, elevated dark surfaces |
| **Slate** | `#21262D` | Secondary surfaces, navigation backdrop |
| **Graphite** | `#30363D` | Borders, dividers, subtle outlines |
| **Ash** | `#8B949E` | Secondary text, captions, metadata |
| **Fog** | `#C9D1D9` | Primary body text on dark backgrounds |
| **Snow** | `#F0F6FC` | Headings, high-emphasis text on dark |
| **Canvas** | `#FAFBFC` | Light-mode section backgrounds, pull-quotes |
| **Signal Blue** | `#58A6FF` | Data visualization primary, links, interactive highlights |
| **Deep Teal** | `#3FB8AF` | Secondary data color, success states, chart accents |
| **Coral** | `#F97583` | Alert accents, key data callouts, emphasis |
| **Amber** | `#E3B341` | Warning highlights, annotations, progress indicators |
| **Lavender** | `#BC8CFF` | Tertiary data color, decorative accents |
| **Moss** | `#56D364` | Positive change indicators, upward trends |
| **Burnt Sienna** | `#DA6D42` | Warm accent, call-to-action on dark surfaces |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --scroll-bg-primary: #0d1117;
  --scroll-bg-surface: #161b22;
  --scroll-bg-elevated: #21262d;
  --scroll-bg-light: #fafbfc;

  /* Borders */
  --scroll-border: #30363d;

  /* Text */
  --scroll-text-heading: #f0f6fc;
  --scroll-text-body: #c9d1d9;
  --scroll-text-muted: #8b949e;
  --scroll-text-dark: #161b22;

  /* Accents */
  --scroll-accent-blue: #58a6ff;
  --scroll-accent-teal: #3fb8af;
  --scroll-accent-coral: #f97583;
  --scroll-accent-amber: #e3b341;
  --scroll-accent-lavender: #bc8cff;
  --scroll-accent-green: #56d364;
  --scroll-accent-sienna: #da6d42;

  /* Layout tokens */
  --scroll-section-padding: clamp(4rem, 10vh, 8rem);
  --scroll-content-width: 680px;
  --scroll-wide-width: 1120px;
  --scroll-step-gap: 80vh;
}
```

---

## Typography

### Typeface Characteristics

Scrollytelling typography is:

- **High-contrast and editorial** -- dramatic size differences between display headings and body text establish narrative hierarchy and chapter transitions
- **Serif for authority, sans-serif for data** -- serif headings lend journalistic gravitas; clean sans-serif body text ensures long-form readability
- **Generous line height and measure** -- body text is set at a comfortable 60-75 character measure with 1.6-1.8 line height for sustained reading
- **Animatable and modular** -- headings are often split into individually animatable spans for progressive reveal effects
- **Monospace for data callouts** -- tabular figures and monospaced numerals lend credibility to statistics and chart annotations

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Playfair Display** | High-contrast serif, editorial | Chapter titles, hero headlines, dramatic display |
| **Lora** | Contemporary serif, readable at length | Long-form body text, article prose |
| **Source Serif 4** | Sturdy transitional serif | Body text, serious editorial tone |
| **Inter** | Screen-optimized sans-serif | UI text, captions, navigation, data labels |
| **Space Grotesk** | Monospace-influenced proportional | Data callouts, chart labels, technical annotations |
| **JetBrains Mono** | True monospace, ligatures | Code snippets, tabular numbers, counters |
| **DM Sans** | Clean geometric sans-serif | Section subheadings, secondary display text |
| **Fraunces** | Soft serif with optical size axis | Display headings, expressive chapter titles |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Playfair Display** (700) | **Inter** (400) | Classic editorial, NYT-inspired gravitas |
| **Fraunces** (700) | **Source Serif 4** (400) | Warm, expressive, long-form narrative |
| **DM Sans** (700) | **Inter** (400) | Modern, data-forward, clean tech storytelling |
| **Playfair Display** (700) | **Lora** (400) | All-serif, literary, immersive deep reads |
| **Space Grotesk** (600) | **Inter** (400) | Technical, analytical, data journalism |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  color: var(--scroll-text-heading);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.scroll-display {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--scroll-text-body);
}

.scroll-prose {
  max-width: var(--scroll-content-width);
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
}

.scroll-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--scroll-text-muted);
}

.scroll-data {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 2.5rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--scroll-accent-blue);
}

.scroll-pullquote {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-size: 1.8rem;
  line-height: 1.4;
  color: var(--scroll-accent-amber);
  border-left: 3px solid var(--scroll-accent-amber);
  padding-left: 1.5rem;
  margin: 3rem 0;
}
```

---

## Layout Principles

- **Vertical single-column narrative flow** -- the primary content column is narrow (600-720px) and centered, creating a comfortable reading measure; full-bleed visuals break out to the viewport edges for dramatic contrast
- **Sticky graphic + scrolling text pattern** -- the canonical scrollytelling layout pins a graphic panel (chart, map, image) in place while narrative text steps scroll past it; the graphic updates in response to which step is active
- **Viewport-height sections** -- each major narrative beat occupies at least 100vh, ensuring the reader sees one idea at a time and scroll travel maps to story progression
- **Scroll-step spacing** -- narrative text blocks within a sticky section are separated by 60-100vh of empty space, controlling reading pace and giving each step room to breathe
- **Full-bleed breakout moments** -- at key narrative climaxes, visuals expand to fill the entire viewport (edge-to-edge, no padding), creating cinematic impact before returning to the contained column
- **Layered z-index architecture** -- backgrounds (z:0), sticky graphics (z:10), scrolling text (z:20), and overlay UI like progress bars and navigation (z:50) are organized in deliberate depth planes
- **Horizontal scroll sparingly** -- occasional horizontal-scroll sections can present timelines or image sequences, but the primary axis of navigation always remains vertical
- **Responsive stacking** -- on mobile, sticky graphic panels shift from side-by-side to stacked above the text; step animations simplify to opacity fades to conserve performance and screen space
- **Progress indicators along the edge** -- a thin vertical bar or dot-based chapter tracker on the viewport edge communicates overall story position without occupying content space
- **Media queries for motion** -- all scroll-linked animations are wrapped in `@media (prefers-reduced-motion: no-preference)` so that reduced-motion users see a clean, static long-form article
- **Threshold-based activation** -- elements trigger their entrance animation when they cross a specific viewport threshold (typically 60-80% from the top), not the instant they enter the viewport at all

---

## CSS / Design Techniques

### Sticky Graphic Section

The foundational scrollytelling layout: a graphic sticks in place while narrative text steps scroll over or beside it.

```css
.scroll-section {
  position: relative;
  display: flex;
  gap: 2rem;
}

.scroll-graphic {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.scroll-graphic__inner {
  width: 100%;
  max-width: 600px;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-steps {
  width: 45%;
  padding: var(--scroll-section-padding) 0;
}

.scroll-step {
  min-height: var(--scroll-step-gap);
  display: flex;
  align-items: center;
  padding: 2rem;
  opacity: 0.2;
  transition: opacity 0.5s ease;
}

.scroll-step.is-active {
  opacity: 1;
}

@media (max-width: 768px) {
  .scroll-section {
    flex-direction: column;
  }

  .scroll-graphic {
    position: sticky;
    width: 100%;
    height: 50vh;
  }

  .scroll-steps {
    width: 100%;
    padding: 1rem;
  }

  .scroll-step {
    min-height: 60vh;
    background: linear-gradient(
      to bottom,
      rgba(13, 17, 23, 0.95),
      rgba(13, 17, 23, 0.7)
    );
    border-radius: 12px;
  }
}
```

### Hero Section

A cinematic, full-viewport opening that sets the narrative tone with layered parallax and a slow content reveal.

```css
.scroll-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--scroll-bg-primary);
}

.scroll-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  transform: scale(1.1);
  animation: heroZoom 20s ease-out forwards;
}

@keyframes heroZoom {
  to { transform: scale(1); }
}

.scroll-hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.scroll-hero__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.8rem, 7vw, 6rem);
  font-weight: 900;
  color: var(--scroll-text-heading);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  animation: heroReveal 1.2s ease-out 0.3s forwards;
}

.scroll-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: var(--scroll-text-muted);
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto 2rem;
  opacity: 0;
  animation: heroReveal 1.2s ease-out 0.6s forwards;
}

.scroll-hero__cue {
  opacity: 0;
  animation: heroReveal 1s ease-out 1.2s forwards;
}

.scroll-hero__cue span {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--scroll-text-muted);
  margin-bottom: 0.5rem;
}

.scroll-hero__cue::after {
  content: '';
  display: block;
  width: 1px;
  height: 60px;
  background: var(--scroll-text-muted);
  margin: 0 auto;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes heroReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}
```

### Card Component

Narrative cards that appear as the user scrolls, used for key statistics, quotes, or sidebar context.

```css
.scroll-card {
  background: var(--scroll-bg-surface);
  border: 1px solid var(--scroll-border);
  border-radius: 12px;
  padding: 2rem;
  max-width: 480px;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.scroll-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-card__eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--scroll-accent-blue);
  margin-bottom: 0.75rem;
}

.scroll-card__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--scroll-text-heading);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.scroll-card__body {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--scroll-text-body);
}

.scroll-card__stat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--scroll-accent-teal);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.scroll-card--highlight {
  border-color: var(--scroll-accent-blue);
  border-width: 2px;
  box-shadow: 0 0 30px rgba(88, 166, 255, 0.08);
}

.scroll-card--dark {
  background: var(--scroll-bg-primary);
  border-color: transparent;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}
```

### Button Styles

Action buttons for navigation between chapters, calls to action, and interactive data controls.

```css
.scroll-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.scroll-button--primary {
  background: var(--scroll-accent-blue);
  color: var(--scroll-bg-primary);
}

.scroll-button--primary:hover {
  background: #79b8ff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(88, 166, 255, 0.25);
}

.scroll-button--ghost {
  background: transparent;
  color: var(--scroll-text-heading);
  border: 1px solid var(--scroll-border);
}

.scroll-button--ghost:hover {
  background: var(--scroll-bg-elevated);
  border-color: var(--scroll-text-muted);
}

.scroll-button--cta {
  background: var(--scroll-accent-sienna);
  color: #ffffff;
  font-size: 1.05rem;
  padding: 16px 40px;
  border-radius: 10px;
}

.scroll-button--cta:hover {
  background: #e5885e;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(218, 109, 66, 0.3);
}

.scroll-button__arrow {
  transition: transform 0.3s ease;
}

.scroll-button:hover .scroll-button__arrow {
  transform: translateX(4px);
}
```

### Navigation Bar

A minimal, semi-transparent nav that stays out of the story's way but provides chapter-based wayfinding.

```css
.scroll-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(48, 54, 61, 0.5);
  transform: translateY(-100%);
  transition: transform 0.4s ease;
}

.scroll-nav.is-visible {
  transform: translateY(0);
}

.scroll-nav__logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--scroll-text-heading);
  text-decoration: none;
}

.scroll-nav__chapters {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.scroll-nav__chapter {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--scroll-text-muted);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: color 0.3s ease, background 0.3s ease;
}

.scroll-nav__chapter:hover {
  color: var(--scroll-text-heading);
  background: var(--scroll-bg-elevated);
}

.scroll-nav__chapter.is-active {
  color: var(--scroll-accent-blue);
  background: rgba(88, 166, 255, 0.1);
}

.scroll-nav__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--scroll-accent-blue);
  transition: width 0.2s ease-out;
}

@media (max-width: 768px) {
  .scroll-nav__chapters { display: none; }
  .scroll-nav { padding: 0.75rem 1.25rem; }
}
```

### Parallax Background Layer

Multi-speed parallax using CSS scroll-driven animations for buttery-smooth depth.

```css
.scroll-parallax {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.scroll-parallax__layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  will-change: transform;
}

.scroll-parallax__layer--back {
  transform: translateY(0);
  animation: parallaxBack linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

@keyframes parallaxBack {
  from { transform: translateY(-15%); }
  to   { transform: translateY(15%); }
}

.scroll-parallax__layer--mid {
  animation: parallaxMid linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

@keyframes parallaxMid {
  from { transform: translateY(-8%); }
  to   { transform: translateY(8%); }
}

.scroll-parallax__layer--front {
  animation: parallaxFront linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

@keyframes parallaxFront {
  from { transform: translateY(-3%); }
  to   { transform: translateY(3%); }
}

/* Fallback for browsers without scroll-driven animations */
@supports not (animation-timeline: view()) {
  .scroll-parallax__layer--back {
    animation: none;
  }
  .scroll-parallax__layer--mid {
    animation: none;
  }
  .scroll-parallax__layer--front {
    animation: none;
  }
}
```

### Progressive Reveal Animation

Reusable entrance animations for elements that appear as the user scrolls into their viewport region.

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal--left {
  transform: translateX(-60px);
}

.scroll-reveal--left.is-visible {
  transform: translateX(0);
}

.scroll-reveal--right {
  transform: translateX(60px);
}

.scroll-reveal--right.is-visible {
  transform: translateX(0);
}

.scroll-reveal--scale {
  transform: scale(0.9);
}

.scroll-reveal--scale.is-visible {
  transform: scale(1);
}

.scroll-reveal--fade {
  transform: none;
}

.scroll-reveal--fade.is-visible {
  opacity: 1;
}

/* Stagger children */
.scroll-reveal-group .scroll-reveal:nth-child(1) { transition-delay: 0s; }
.scroll-reveal-group .scroll-reveal:nth-child(2) { transition-delay: 0.1s; }
.scroll-reveal-group .scroll-reveal:nth-child(3) { transition-delay: 0.2s; }
.scroll-reveal-group .scroll-reveal:nth-child(4) { transition-delay: 0.3s; }
.scroll-reveal-group .scroll-reveal:nth-child(5) { transition-delay: 0.4s; }

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### Data Counter Animation

Scroll-triggered number counters for presenting statistics and key figures within the narrative.

```css
.scroll-counter {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--scroll-accent-blue);
  line-height: 1;
  white-space: nowrap;
}

.scroll-counter__label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--scroll-text-muted);
  margin-top: 0.75rem;
}

.scroll-counter-row {
  display: flex;
  gap: 4rem;
  justify-content: center;
  padding: 4rem 2rem;
}

.scroll-counter-row__item {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-counter-row__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-counter-row__item:nth-child(2) { transition-delay: 0.15s; }
.scroll-counter-row__item:nth-child(3) { transition-delay: 0.3s; }
.scroll-counter-row__item:nth-child(4) { transition-delay: 0.45s; }

@media (max-width: 640px) {
  .scroll-counter-row {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
}
```

---

## Design Do's and Don'ts

### Do's

- **Do test on real scroll hardware** -- trackpads, mouse wheels, and touch screens all produce different scroll velocities; animations must feel natural across all of them
- **Do provide a static fallback** -- wrap all scroll-linked animations in `@media (prefers-reduced-motion: no-preference)` and ensure the no-JS experience is a clean, readable long-form article
- **Do use position:sticky over JavaScript scroll listeners** -- CSS sticky positioning is jank-free and compositor-optimized; reserve JS for step detection only (via IntersectionObserver)
- **Do keep the narrative text column narrow** -- 600-720px maximum width ensures comfortable line lengths; wider layouts cause reader fatigue on long-form content
- **Do signal scrollability explicitly** -- use a "scroll to explore" prompt, a pulsing arrow, or a visible scroll cue so first-time visitors understand the interaction model
- **Do use a progress indicator** -- a thin bar, dot markers, or chapter labels along the viewport edge reassure readers that the story has a finite length and trackable position
- **Do optimize media aggressively** -- use `loading="lazy"`, WebP/AVIF formats, and `<picture>` elements; a scrollytelling page can easily exceed 20MB without careful asset management
- **Do time your transitions to the scroll speed** -- fast scrollers should see content snap into place; slow scrollers should see smooth, satisfying interpolation

### Don'ts

- **Don't hijack the scroll** -- never override native scroll behavior, lock the scroll axis, or use scroll snapping that fights the user's intent; the reader must always feel in control
- **Don't animate everything** -- if every element bounces, slides, and fades, the reader cannot focus on the narrative; animate only what advances the story
- **Don't rely solely on parallax for depth** -- parallax is one tool, not the entire toolbox; overuse creates motion sickness and distracts from content
- **Don't forget about page weight** -- scroll-driven pages tend to be media-heavy; lazy-load off-screen assets and consider a loading sequence for above-the-fold content
- **Don't use autoplay video with sound** -- background video loops should always be muted by default with an explicit unmute control; unexpected audio breaks immersion and trust
- **Don't hide critical content behind failed animations** -- if JavaScript does not load, every piece of text, image, and data point must still be visible in the DOM
- **Don't create scroll-locked dead zones** -- ensure there are no viewport regions where scrolling produces no visible change; dead zones make users think the page is broken
- **Don't ignore mobile performance** -- the same animations that run smoothly on a desktop GPU can drop to 15fps on a mid-range phone; test on real devices and simplify accordingly

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Parallax Design** | Scrollytelling's foundational visual technique; multi-speed layer movement creates depth and immersion |
| **Editorial / Magazine Layout** | Shares the narrow-column, high-contrast typographic sensibility and cinematic image treatment |
| **Data Visualization** | Scrollytelling is the preferred delivery mechanism for interactive data stories and annotated charts |
| **Brutalist Web Design** | Both reject conventional page templates; brutalism strips back, scrollytelling layers up |
| **Cinematic Web** | Full-viewport sections, dramatic imagery, and ambient motion overlap heavily with cinematic web aesthetics |
| **Minimalism** | Scrollytelling's generous whitespace and single-focus sections share minimalism's restraint philosophy |
| **Dark Mode UI** | Many scrollytelling pieces use dark backgrounds for cinematic atmosphere and to make data visuals pop |
| **Motion Design** | Scroll-linked animation is a subset of motion design; timing, easing, and choreography principles apply directly |
| **Longform / Immersive Journalism** | The editorial genre that birthed scrollytelling; Snow Fall, The Pudding, and Bloomberg Businessweek are canonical examples |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scrollytelling -- Story Title</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    /* ============================================
       RESET & BASE
       ============================================ */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* Backgrounds */
      --scroll-bg-primary: #0d1117;
      --scroll-bg-surface: #161b22;
      --scroll-bg-elevated: #21262d;
      --scroll-bg-light: #fafbfc;

      /* Borders */
      --scroll-border: #30363d;

      /* Text */
      --scroll-text-heading: #f0f6fc;
      --scroll-text-body: #c9d1d9;
      --scroll-text-muted: #8b949e;
      --scroll-text-dark: #161b22;

      /* Accents */
      --scroll-accent-blue: #58a6ff;
      --scroll-accent-teal: #3fb8af;
      --scroll-accent-coral: #f97583;
      --scroll-accent-amber: #e3b341;
      --scroll-accent-lavender: #bc8cff;
      --scroll-accent-green: #56d364;
      --scroll-accent-sienna: #da6d42;

      /* Layout */
      --scroll-content-width: 680px;
      --scroll-wide-width: 1120px;
      --scroll-step-gap: 80vh;
      --scroll-section-padding: clamp(4rem, 10vh, 8rem);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 1.125rem;
      line-height: 1.75;
      color: var(--scroll-text-body);
      background: var(--scroll-bg-primary);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      color: var(--scroll-text-heading);
      line-height: 1.15;
    }

    a {
      color: var(--scroll-accent-blue);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: rgba(13, 17, 23, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(48, 54, 61, 0.5);
      transform: translateY(-100%);
      transition: transform 0.4s ease;
    }

    .nav.is-visible {
      transform: translateY(0);
    }

    .nav__logo {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--scroll-text-heading);
      text-decoration: none;
    }

    .nav__links {
      display: flex;
      gap: 0.25rem;
      list-style: none;
    }

    .nav__link {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--scroll-text-muted);
      text-decoration: none;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      transition: color 0.3s ease, background 0.3s ease;
    }

    .nav__link:hover {
      color: var(--scroll-text-heading);
      background: var(--scroll-bg-elevated);
      text-decoration: none;
    }

    .nav__link.is-active {
      color: var(--scroll-accent-blue);
      background: rgba(88, 166, 255, 0.1);
    }

    .nav__progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0%;
      background: var(--scroll-accent-blue);
      transition: width 0.15s ease-out;
    }

    @media (max-width: 768px) {
      .nav__links { display: none; }
    }

    /* ============================================
       HERO
       ============================================ */
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero__bg {
      position: absolute;
      inset: -10%;
      background: linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1a2332 70%, #0d1117 100%);
      animation: heroDrift 20s ease-in-out infinite alternate;
    }

    @keyframes heroDrift {
      0% { transform: scale(1) translate(0, 0); }
      100% { transform: scale(1.05) translate(-1%, -1%); }
    }

    .hero__particles {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .hero__particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--scroll-accent-blue);
      border-radius: 50%;
      opacity: 0;
      animation: particleFloat 8s ease-in-out infinite;
    }

    .hero__particle:nth-child(1) { left: 15%; top: 20%; animation-delay: 0s; }
    .hero__particle:nth-child(2) { left: 70%; top: 60%; animation-delay: 2s; }
    .hero__particle:nth-child(3) { left: 40%; top: 80%; animation-delay: 4s; animation-duration: 10s; }
    .hero__particle:nth-child(4) { left: 85%; top: 30%; animation-delay: 1s; animation-duration: 7s; }
    .hero__particle:nth-child(5) { left: 25%; top: 55%; animation-delay: 3s; animation-duration: 9s; }
    .hero__particle:nth-child(6) { left: 60%; top: 15%; animation-delay: 5s; }

    @keyframes particleFloat {
      0%, 100% { opacity: 0; transform: translateY(0) scale(1); }
      20% { opacity: 0.6; }
      50% { opacity: 0.3; transform: translateY(-40px) scale(1.5); }
      80% { opacity: 0.5; }
    }

    .hero__content {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 800px;
      padding: 2rem;
    }

    .hero__eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--scroll-accent-blue);
      margin-bottom: 1.5rem;
      opacity: 0;
      animation: fadeUp 1s ease-out 0.2s forwards;
    }

    .hero__title {
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      opacity: 0;
      animation: fadeUp 1.2s ease-out 0.4s forwards;
    }

    .hero__subtitle {
      font-size: clamp(1rem, 2vw, 1.3rem);
      color: var(--scroll-text-muted);
      max-width: 520px;
      margin: 0 auto 3rem;
      opacity: 0;
      animation: fadeUp 1.2s ease-out 0.7s forwards;
    }

    .hero__scroll-cue {
      opacity: 0;
      animation: fadeUp 1s ease-out 1.2s forwards;
      text-align: center;
    }

    .hero__scroll-cue span {
      display: block;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--scroll-text-muted);
      margin-bottom: 0.75rem;
    }

    .hero__scroll-line {
      display: block;
      width: 1px;
      height: 50px;
      background: var(--scroll-text-muted);
      margin: 0 auto;
      animation: scrollPulse 2s ease-in-out infinite;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes scrollPulse {
      0%, 100% { opacity: 0.2; transform: scaleY(0.5); transform-origin: top; }
      50% { opacity: 1; transform: scaleY(1); }
    }

    /* ============================================
       CONTENT SECTIONS
       ============================================ */
    .section {
      padding: var(--scroll-section-padding) 2rem;
    }

    .section--dark {
      background: var(--scroll-bg-primary);
    }

    .section--surface {
      background: var(--scroll-bg-surface);
    }

    .section--light {
      background: var(--scroll-bg-light);
      color: var(--scroll-text-dark);
    }

    .section--light h2,
    .section--light h3 {
      color: var(--scroll-text-dark);
    }

    .prose {
      max-width: var(--scroll-content-width);
      margin: 0 auto;
    }

    .prose p {
      margin-bottom: 1.5rem;
    }

    .wide {
      max-width: var(--scroll-wide-width);
      margin: 0 auto;
    }

    .section__eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--scroll-accent-blue);
      margin-bottom: 1rem;
    }

    .section__title {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: 1.5rem;
    }

    .section__subtitle {
      font-size: 1.15rem;
      color: var(--scroll-text-muted);
      max-width: 540px;
      margin-bottom: 3rem;
    }

    /* ============================================
       STICKY SCROLLYTELLING SECTION
       ============================================ */
    .scrolly {
      position: relative;
      display: flex;
      gap: 2rem;
      max-width: var(--scroll-wide-width);
      margin: 0 auto;
      padding: 0 2rem;
    }

    .scrolly__graphic {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 55%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .scrolly__graphic-inner {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 4 / 3;
      background: var(--scroll-bg-surface);
      border: 1px solid var(--scroll-border);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .scrolly__graphic-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1rem;
      color: var(--scroll-text-muted);
    }

    .scrolly__steps {
      width: 45%;
      padding: var(--scroll-section-padding) 0;
    }

    .scrolly__step {
      min-height: var(--scroll-step-gap);
      display: flex;
      align-items: center;
      padding: 2rem;
      opacity: 0.15;
      transition: opacity 0.6s ease;
    }

    .scrolly__step.is-active {
      opacity: 1;
    }

    .scrolly__step-content {
      background: var(--scroll-bg-surface);
      border: 1px solid var(--scroll-border);
      border-radius: 12px;
      padding: 2rem;
    }

    .scrolly__step-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--scroll-accent-blue);
      margin-bottom: 0.5rem;
    }

    .scrolly__step-title {
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
    }

    .scrolly__step-text {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--scroll-text-body);
    }

    @media (max-width: 768px) {
      .scrolly {
        flex-direction: column;
        padding: 0 1rem;
      }

      .scrolly__graphic {
        position: sticky;
        width: 100%;
        height: 45vh;
      }

      .scrolly__steps {
        width: 100%;
        position: relative;
        z-index: 10;
        margin-top: -10vh;
      }

      .scrolly__step {
        min-height: 70vh;
      }

      .scrolly__step-content {
        background: rgba(22, 27, 34, 0.92);
        backdrop-filter: blur(8px);
      }
    }

    /* ============================================
       COUNTER ROW
       ============================================ */
    .counters {
      display: flex;
      gap: 3rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 2rem 0;
    }

    .counter {
      text-align: center;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .counter.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .counter:nth-child(2) { transition-delay: 0.15s; }
    .counter:nth-child(3) { transition-delay: 0.3s; }

    .counter__value {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      color: var(--scroll-accent-blue);
      line-height: 1;
    }

    .counter__value--teal { color: var(--scroll-accent-teal); }
    .counter__value--coral { color: var(--scroll-accent-coral); }
    .counter__value--amber { color: var(--scroll-accent-amber); }

    .counter__label {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--scroll-text-muted);
      margin-top: 0.5rem;
    }

    /* ============================================
       CARDS
       ============================================ */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--scroll-bg-surface);
      border: 1px solid var(--scroll-border);
      border-radius: 12px;
      padding: 2rem;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease;
    }

    .card.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .card:nth-child(2) { transition-delay: 0.12s; }
    .card:nth-child(3) { transition-delay: 0.24s; }

    .card:hover {
      border-color: var(--scroll-accent-blue);
    }

    .card__icon {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .card__title {
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--scroll-text-heading);
      margin-bottom: 0.5rem;
    }

    .card__text {
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--scroll-text-muted);
    }

    /* ============================================
       PULLQUOTE
       ============================================ */
    .pullquote {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: clamp(1.4rem, 3vw, 1.8rem);
      line-height: 1.5;
      color: var(--scroll-accent-amber);
      border-left: 3px solid var(--scroll-accent-amber);
      padding-left: 1.5rem;
      margin: 3rem 0;
      max-width: var(--scroll-content-width);
      margin-left: auto;
      margin-right: auto;
    }

    .pullquote__cite {
      display: block;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-size: 0.85rem;
      color: var(--scroll-text-muted);
      margin-top: 1rem;
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 32px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn--primary {
      background: var(--scroll-accent-blue);
      color: var(--scroll-bg-primary);
    }

    .btn--primary:hover {
      background: #79b8ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(88, 166, 255, 0.25);
      text-decoration: none;
    }

    .btn--ghost {
      background: transparent;
      color: var(--scroll-text-heading);
      border: 1px solid var(--scroll-border);
    }

    .btn--ghost:hover {
      background: var(--scroll-bg-elevated);
      border-color: var(--scroll-text-muted);
      text-decoration: none;
    }

    .btn__arrow {
      transition: transform 0.3s ease;
    }

    .btn:hover .btn__arrow {
      transform: translateX(4px);
    }

    /* ============================================
       FULL-BLEED IMAGE
       ============================================ */
    .full-bleed {
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      position: relative;
      overflow: hidden;
    }

    .full-bleed__img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
      display: block;
    }

    .full-bleed__caption {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.7);
      background: rgba(0, 0, 0, 0.5);
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
    }

    /* ============================================
       FOOTER
       ============================================ */
    .footer {
      padding: 4rem 2rem;
      text-align: center;
      background: var(--scroll-bg-surface);
      border-top: 1px solid var(--scroll-border);
    }

    .footer__title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .footer__text {
      color: var(--scroll-text-muted);
      max-width: 480px;
      margin: 0 auto 2rem;
    }

    .footer__links {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--scroll-border);
    }

    .footer__link {
      font-size: 0.85rem;
      color: var(--scroll-text-muted);
    }

    .footer__link:hover {
      color: var(--scroll-accent-blue);
    }

    /* ============================================
       SCROLL REVEAL
       ============================================ */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============================================
       REDUCED MOTION
       ============================================ */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .reveal,
      .card,
      .counter,
      .scrolly__step {
        opacity: 1;
        transform: none;
      }

      html {
        scroll-behavior: auto;
      }
    }
  </style>
</head>
<body>

  <!-- ============ NAVIGATION ============ -->
  <nav class="nav" id="nav" aria-label="Story navigation">
    <a href="#" class="nav__logo">The Story</a>
    <ul class="nav__links">
      <li><a href="#opening" class="nav__link is-active" data-chapter="opening">Opening</a></li>
      <li><a href="#data" class="nav__link" data-chapter="data">The Data</a></li>
      <li><a href="#deep-dive" class="nav__link" data-chapter="deep-dive">Deep Dive</a></li>
      <li><a href="#impact" class="nav__link" data-chapter="impact">Impact</a></li>
    </ul>
    <div class="nav__progress" id="navProgress"></div>
  </nav>

  <!-- ============ HERO ============ -->
  <header class="hero" id="opening">
    <div class="hero__bg"></div>
    <div class="hero__particles" aria-hidden="true">
      <div class="hero__particle"></div>
      <div class="hero__particle"></div>
      <div class="hero__particle"></div>
      <div class="hero__particle"></div>
      <div class="hero__particle"></div>
      <div class="hero__particle"></div>
    </div>
    <div class="hero__content">
      <p class="hero__eyebrow">A Visual Investigation</p>
      <h1 class="hero__title">The Story Unfolds<br>As You Scroll</h1>
      <p class="hero__subtitle">
        An immersive narrative experience that transforms data into understanding,
        one scroll at a time.
      </p>
      <div class="hero__scroll-cue">
        <span>Scroll to explore</span>
        <span class="hero__scroll-line" aria-hidden="true"></span>
      </div>
    </div>
  </header>

  <!-- ============ INTRODUCTION ============ -->
  <section class="section section--dark">
    <div class="prose reveal">
      <p class="section__eyebrow">Chapter 1</p>
      <h2 class="section__title">Setting the Scene</h2>
      <p>
        Every great story starts with context. This opening section establishes
        the who, what, and why -- grounding the reader before the narrative
        accelerates. The narrow column and generous line spacing encourage
        focused, sustained reading.
      </p>
      <p>
        Scrollytelling works because it puts the reader in control. Each
        paragraph, each visual, each data point appears precisely when the
        reader is ready for it. There is no autoplay, no timer, no rush.
        Only the steady downward pull of curiosity.
      </p>
    </div>
  </section>

  <!-- ============ DATA COUNTERS ============ -->
  <section class="section section--surface" id="data">
    <div class="wide">
      <div class="prose reveal">
        <p class="section__eyebrow">Chapter 2</p>
        <h2 class="section__title">By the Numbers</h2>
        <p class="section__subtitle">
          Key figures that frame the scale of the story.
        </p>
      </div>
      <div class="counters">
        <div class="counter">
          <span class="counter__value" data-target="2847">0</span>
          <span class="counter__label">Data Points Analyzed</span>
        </div>
        <div class="counter">
          <span class="counter__value counter__value--teal" data-target="142">0</span>
          <span class="counter__label">Sources Verified</span>
        </div>
        <div class="counter">
          <span class="counter__value counter__value--coral" data-target="37">0</span>
          <span class="counter__label">Months of Research</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PULLQUOTE ============ -->
  <section class="section section--dark">
    <div class="pullquote reveal">
      "The best scrollytelling doesn't just present information -- it
      creates a journey where each revelation builds on the last, pulling
      the reader deeper into understanding."
      <cite class="pullquote__cite">-- Senior Data Editor, The Pudding</cite>
    </div>
  </section>

  <!-- ============ STICKY SCROLLYTELLING ============ -->
  <section class="section section--dark" id="deep-dive">
    <div class="prose reveal" style="margin-bottom: 4rem;">
      <p class="section__eyebrow">Chapter 3</p>
      <h2 class="section__title">The Deep Dive</h2>
      <p class="section__subtitle">
        Scroll through each step to see the data transform.
      </p>
    </div>

    <div class="scrolly">
      <div class="scrolly__graphic">
        <div class="scrolly__graphic-inner" id="stickyGraphic">
          <span class="scrolly__graphic-label">Visualization Area</span>
        </div>
      </div>
      <div class="scrolly__steps">
        <div class="scrolly__step is-active" data-step="1">
          <div class="scrolly__step-content">
            <p class="scrolly__step-number">Step 01</p>
            <h3 class="scrolly__step-title">The Baseline</h3>
            <p class="scrolly__step-text">
              We begin with the raw data -- unfiltered and unprocessed.
              The visualization shows the full dataset as an undifferentiated
              scatter of points.
            </p>
          </div>
        </div>
        <div class="scrolly__step" data-step="2">
          <div class="scrolly__step-content">
            <p class="scrolly__step-number">Step 02</p>
            <h3 class="scrolly__step-title">Patterns Emerge</h3>
            <p class="scrolly__step-text">
              As we apply the first filter, clusters begin to form. The data
              is not random -- there are clear groupings that correspond to
              the three primary categories identified in our research.
            </p>
          </div>
        </div>
        <div class="scrolly__step" data-step="3">
          <div class="scrolly__step-content">
            <p class="scrolly__step-number">Step 03</p>
            <h3 class="scrolly__step-title">The Outliers</h3>
            <p class="scrolly__step-text">
              Now we highlight the anomalies -- data points that defy the
              established patterns. These outliers are where the real story
              lives, revealing unexpected connections.
            </p>
          </div>
        </div>
        <div class="scrolly__step" data-step="4">
          <div class="scrolly__step-content">
            <p class="scrolly__step-number">Step 04</p>
            <h3 class="scrolly__step-title">The Conclusion</h3>
            <p class="scrolly__step-text">
              With all layers visible, the complete picture comes into focus.
              What seemed like noise was signal all along -- the data tells
              a story of transformation hiding in plain sight.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CARDS ============ -->
  <section class="section section--surface" id="impact">
    <div class="wide">
      <div class="prose reveal">
        <p class="section__eyebrow">Chapter 4</p>
        <h2 class="section__title">Impact &amp; Implications</h2>
        <p class="section__subtitle">
          Three key takeaways from the investigation.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card__icon" aria-hidden="true">&#9670;</div>
          <h3 class="card__title">Finding One</h3>
          <p class="card__text">
            The primary discovery challenges long-held assumptions about the
            dataset. When viewed through the lens of temporal analysis, the
            trend reverses entirely.
          </p>
        </div>
        <div class="card">
          <div class="card__icon" aria-hidden="true">&#9671;</div>
          <h3 class="card__title">Finding Two</h3>
          <p class="card__text">
            Cross-referencing with external data reveals a correlation that
            was previously invisible. This connection opens an entirely new
            avenue for further research.
          </p>
        </div>
        <div class="card">
          <div class="card__icon" aria-hidden="true">&#9672;</div>
          <h3 class="card__title">Finding Three</h3>
          <p class="card__text">
            The implications extend well beyond the original scope. Policy
            decisions, industry practices, and public understanding all
            stand to be reshaped by these results.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CLOSING ============ -->
  <section class="section section--dark">
    <div class="prose reveal" style="text-align: center;">
      <h2 class="section__title">The Scroll Continues</h2>
      <p style="margin-bottom: 2rem;">
        This story is ongoing. As new data emerges, we will update this
        investigation. Bookmark this page and return for the next chapter.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#" class="btn btn--primary">
          Share This Story <span class="btn__arrow" aria-hidden="true">&rarr;</span>
        </a>
        <a href="#" class="btn btn--ghost">View Methodology</a>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="footer">
    <h2 class="footer__title">Scrollytelling Template</h2>
    <p class="footer__text">
      Built with semantic HTML, CSS custom properties, IntersectionObserver,
      and a respect for reduced-motion preferences.
    </p>
    <div class="footer__links">
      <a href="#" class="footer__link">Credits</a>
      <a href="#" class="footer__link">Methodology</a>
      <a href="#" class="footer__link">Data Sources</a>
      <a href="#" class="footer__link">License</a>
    </div>
  </footer>

  <!-- ============ JAVASCRIPT ============ -->
  <script>
    (function () {
      'use strict';

      /* ------ NAV: show after scrolling past hero ------ */
      const nav = document.getElementById('nav');
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          nav.classList.toggle('is-visible', !entry.isIntersecting);
        },
        { threshold: 0 }
      );
      heroObserver.observe(document.querySelector('.hero'));

      /* ------ NAV: progress bar ------ */
      const progressBar = document.getElementById('navProgress');
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = Math.min((scrolled / total) * 100, 100);
        progressBar.style.width = pct + '%';
      }, { passive: true });

      /* ------ REVEAL: fade in elements on scroll ------ */
      const revealEls = document.querySelectorAll('.reveal, .card, .counter');
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));

      /* ------ COUNTERS: animate numbers ------ */
      function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1800;
        const start = performance.now();
        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      const counterEls = document.querySelectorAll('.counter__value[data-target]');
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counterEls.forEach((el) => counterObserver.observe(el));

      /* ------ SCROLLY: step activation ------ */
      const steps = document.querySelectorAll('.scrolly__step');
      const graphic = document.getElementById('stickyGraphic');
      const graphicColors = [
        'var(--scroll-bg-surface)',
        'rgba(88,166,255,0.08)',
        'rgba(249,117,131,0.08)',
        'rgba(63,184,175,0.12)'
      ];
      const graphicLabels = [
        'Raw Data',
        'Clustered View',
        'Outliers Highlighted',
        'Full Picture'
      ];

      const stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              steps.forEach((s) => s.classList.remove('is-active'));
              entry.target.classList.add('is-active');
              const idx = parseInt(entry.target.getAttribute('data-step'), 10) - 1;
              if (graphic) {
                graphic.style.background = graphicColors[idx] || graphicColors[0];
                graphic.querySelector('.scrolly__graphic-label').textContent = graphicLabels[idx] || '';
              }
            }
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      steps.forEach((step) => stepObserver.observe(step));

      /* ------ NAV: active chapter links ------ */
      const chapters = document.querySelectorAll('[id]');
      const navLinks = document.querySelectorAll('.nav__link[data-chapter]');
      const chapterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('data-chapter') === id);
              });
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      chapters.forEach((ch) => {
        if (ch.getAttribute('id')) chapterObserver.observe(ch);
      });
    })();
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Use Scrollama or the native Scroll-Driven Animations API** -- Scrollama (https://github.com/russellsamora/scrollama) wraps IntersectionObserver for clean step-based triggers; the newer CSS `animation-timeline: scroll()` and `animation-timeline: view()` can handle parallax and progress-linked animations without any JavaScript at all, though browser support should be verified
- **Measure scroll-step spacing in viewport heights, not pixels** -- setting `min-height: 80vh` on each step ensures consistent pacing regardless of screen size; pixel values break at different resolutions
- **Lazy-load everything below the fold** -- use `loading="lazy"` on images, defer non-critical scripts, and consider using `content-visibility: auto` on off-screen sections to reduce initial paint cost on media-heavy pages
- **Build the static article first, then layer on interactivity** -- write the full story as a plain long-form page; once it reads well without any animation, add scroll-triggered enhancements as progressive enrichment
- **Test with `prefers-reduced-motion: reduce` enabled** -- in Chrome DevTools (Rendering tab > Emulate CSS media feature), verify that the page degrades to a clean, fully readable static article with no missing content
- **Profile GPU paint and composite layers** -- open Chrome DevTools Performance panel, record a scroll through the page, and verify that scroll-linked animations stay on the compositor thread (no layout or paint thrashing); `will-change: transform` on parallax layers helps but overuse hurts memory
- **Keep the JavaScript payload under 20 KB gzipped** -- scrollytelling pages are already asset-heavy with images and video; keep the JS lean by using IntersectionObserver directly or a micro-library rather than a full framework
- **Provide keyboard and assistive-technology navigation** -- ensure every chapter anchor has a corresponding skip link or keyboard shortcut; screen readers should encounter a logical heading hierarchy (h1 > h2 > h3) that mirrors the visual chapter structure
