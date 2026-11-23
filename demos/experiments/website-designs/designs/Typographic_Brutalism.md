# Typographic Brutalism Design Reference

## Overview

Typographic Brutalism is a typography-dominant branch of brutalist design that treats letterforms as the primary structural and visual material of a composition. Where conventional brutalist web design might rely on raw HTML, stripped interfaces, and blocky layouts, Typographic Brutalism elevates type itself to the role of architecture -- oversized headings that consume entire viewports, extreme contrasts between font scales (a 200px headline beside 12px body copy), monospaced system fonts displayed without apology, and layouts that feel assembled rather than designed. The aesthetic draws from mid-20th-century Swiss poster design, 1960s concrete poetry, punk zine culture, and the raw-HTML ethos of early-web brutalism, but it filters all of these influences through a single obsession: the visual power of the letterform at scale.

The movement gained traction in the mid-2010s as designers reacted against the polished sameness of Material Design and Corporate Memphis. Studios and publications such as Bloomberg Businessweek under Richard Turley, Balenciaga's stripped-back campaigns, and agencies like Experimental Jetset demonstrated that type alone -- set enormous, tracked wide, stacked tight, or slammed edge-to-edge -- could carry an entire visual identity without illustration, photography, or decoration. On the web, Typographic Brutalism manifests as pages where headings dwarf everything else, where monospace fonts run in raw columns, where text wraps unexpectedly and whitespace is either absent or weaponized as a deliberate void. Navigation is often just a list of words. Images, when present, are subordinate to type.

The philosophy is confrontational honesty: the content is the design, the words are the interface, and the rawness is the point. There is no hiding behind stock imagery or decorative chrome. Typographic Brutalism demands that the reader engage with language directly, amplified by scale, weight, and spatial tension. It is not anti-design but rather hyper-design channeled through the single medium of typography, producing layouts that feel simultaneously minimal and overwhelming.

---

## Visual Characteristics

### Core Design Traits

- **Extreme font-scale contrast** -- headline type set at 120px-300px+ alongside 14px-16px body copy, creating dramatic hierarchical tension that forces the eye through the composition
- **Oversized viewport-filling headings** -- single words or short phrases scaled to fill the entire screen width, treating letterforms as graphic elements rather than mere text
- **Monospaced and system font usage** -- Courier, Monaco, or modern monospace faces used unapologetically, evoking terminal output, typewriter manuscripts, and raw code
- **Tight or negative leading** -- lines of large type stacked so closely they overlap or nearly touch, compressing vertical space and increasing visual density
- **Extreme letter-spacing** -- either massively tracked-out uppercase (W I D E) or ultra-tight tracking that compresses letterforms into solid blocks
- **Raw, grid-free layouts** -- elements positioned without apparent alignment logic, text blocks floating at unusual coordinates, deliberate avoidance of column-based order
- **Black-and-white dominance** -- stark monochrome palettes with at most one or two accent colors, keeping focus entirely on typographic form
- **Text as texture** -- repeated words, oversized characters cropped by viewport edges, or paragraphs set so dense they become visual pattern rather than readable content
- **Visible structural seams** -- thick horizontal rules, exposed borders, raw HTML-style stacking that reveals the construction of the page
- **Uppercase as default voice** -- headings and navigation set entirely in capitals for maximum visual impact and an assertive, confrontational tone
- **Mixed typeface collisions** -- intentional pairing of clashing type families (a geometric sans next to a raw monospace) to generate visual friction
- **Absence of imagery** -- photography and illustration are omitted or radically minimized; the page is built entirely from type, rules, and space

### Design Principles

- **Type is structure**: letterforms replace images, icons, and decorative elements as the primary building material of the layout
- **Scale communicates hierarchy**: the size difference between elements is the primary navigation cue, not color or iconography
- **Rawness is intentional**: unpolished, system-default, or deliberately harsh typographic choices signal authenticity and rejection of corporate smoothness
- **Whitespace is active**: empty space is not leftover but a deliberate compositional force that amplifies the weight of surrounding type
- **Friction over comfort**: layouts are meant to provoke attention, not provide frictionless scanning; discomfort is a valid design outcome
- **Content is the interface**: the words on the page serve as both the message and the navigation; decoration is unnecessary
- **Contrast drives energy**: the collision of massive and tiny, tight and loose, black and white generates the visual dynamism of the page
- **Honesty of medium**: the screen is a screen; the browser is a browser; no simulated textures, drop shadows, or skeuomorphic pretense

---

## Color Palette

Typographic Brutalism overwhelmingly defaults to black and white. Color, when used, arrives as a single high-impact accent or as an inverted background block. The palette is deliberately restrained so that type carries all the visual weight. Occasional brutalist palettes introduce a raw red, an industrial yellow, or a flat blue -- never gradients, never pastels, never more than two chromatic hues on a single page.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Pure Black** | `#000000` | Primary text, headings, rules, dominant surface |
| **Pure White** | `#FFFFFF` | Primary background, inverse text on dark sections |
| **Off-White** | `#F5F5F0` | Softer page background, content areas, card surfaces |
| **Warm Gray** | `#B0ADA8` | Secondary text, muted captions, structural rules |
| **Mid Gray** | `#6B6B6B` | Tertiary text, disabled states, subtle borders |
| **Dark Charcoal** | `#1A1A1A` | Dark-mode background, footer, inverse sections |
| **Signal Red** | `#E63025` | Primary accent, links, active states, emphasis marks |
| **Deep Red** | `#B8201A` | Hover/pressed state for red elements |
| **Industrial Yellow** | `#F5D000` | Secondary accent, highlight blocks, warning callouts |
| **Dark Yellow** | `#C8A800` | Hover/pressed state for yellow elements |
| **Flat Blue** | `#2050E0` | Hyperlinks (alternative accent), code highlights |
| **Dark Blue** | `#1838A8` | Hover/pressed state for blue elements |
| **Raw Green** | `#28A828` | Success states, terminal/code accent |
| **Concrete** | `#D8D5D0` | Divider lines, card borders, secondary backgrounds |
| **Ink** | `#0A0A0A` | Ultra-dark text for maximum contrast on off-white |

### CSS Custom Properties

```css
:root {
  /* Core monochrome */
  --tb-black: #000000;
  --tb-white: #ffffff;
  --tb-offwhite: #f5f5f0;
  --tb-ink: #0a0a0a;
  --tb-charcoal: #1a1a1a;

  /* Grays */
  --tb-warm-gray: #b0ada8;
  --tb-mid-gray: #6b6b6b;
  --tb-concrete: #d8d5d0;

  /* Accent: Red */
  --tb-red: #e63025;
  --tb-red-dark: #b8201a;

  /* Accent: Yellow */
  --tb-yellow: #f5d000;
  --tb-yellow-dark: #c8a800;

  /* Accent: Blue */
  --tb-blue: #2050e0;
  --tb-blue-dark: #1838a8;

  /* Accent: Green */
  --tb-green: #28a828;

  /* Semantic */
  --tb-bg-primary: #ffffff;
  --tb-bg-secondary: #f5f5f0;
  --tb-bg-inverse: #000000;
  --tb-text-primary: #000000;
  --tb-text-secondary: #6b6b6b;
  --tb-text-inverse: #ffffff;
  --tb-border: #000000;
  --tb-border-light: #d8d5d0;
}
```

---

## Typography

### Typeface Characteristics

Typographic Brutalism draws from three typographic wells: (1) monospaced faces that evoke raw code and typewriter output, (2) heavy condensed or extended sans-serifs that dominate at display scale, and (3) grotesque sans-serifs with enough quirk or bluntness to feel un-corporate. Serif faces are rare but may appear as a deliberate collision -- a Times New Roman body under a massive Helvetica headline, for instance, recalling the aesthetic of early web pages rendered in browser defaults.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Space Mono** | Monospaced, geometric | Body text, code, navigation, captions |
| **Roboto Mono** | Monospaced, clean | Body text, labels, structural text |
| **JetBrains Mono** | Monospaced, developer-focused | Code blocks, terminal sections, raw data |
| **Inter** | Neo-grotesque sans | Body text when monospace is not desired |
| **Oswald** | Condensed gothic sans | Oversized headlines, viewport-width display type |
| **Anton** | Ultra-bold condensed | Hero text, single-word statements, impact headings |
| **Bebas Neue** | All-caps condensed | Display headings, section titles, poster-style type |
| **Archivo Black** | Heavy grotesque | Bold subheadings, button labels, navigation |
| **Space Grotesk** | Geometric sans with character | Headings, medium-weight display text |
| **IBM Plex Mono** | Monospaced, industrial | Body text alternative, data displays, captions |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Anton** (400) | **Space Mono** (400) | Maximum contrast: massive condensed meets raw monospace |
| **Bebas Neue** (400) | **Roboto Mono** (400) | Poster-style headlines with clean terminal body |
| **Oswald** (700) | **IBM Plex Mono** (400) | Industrial condensed headlines with corporate-raw body |
| **Archivo Black** (400) | **JetBrains Mono** (400) | Blunt sans headings with developer-friendly body |
| **Space Grotesk** (700) | **Space Mono** (400) | Same family lineage; geometric consistency with mono rawness |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

/* Headings -- oversized, condensed, uppercase */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Anton', 'Oswald', 'Impact', sans-serif;
  font-weight: 400;
  color: var(--tb-text-primary);
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0;
}

/* Display / Hero -- viewport-dominating scale */
.tb-display {
  font-family: 'Anton', sans-serif;
  font-size: clamp(4rem, 15vw, 14rem);
  line-height: 0.85;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

/* Body text -- raw monospace */
body {
  font-family: 'Space Mono', 'Courier New', monospace;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--tb-text-primary);
}

/* Small caps label */
.tb-label {
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Oversized accent text */
.tb-accent-text {
  font-family: 'Anton', sans-serif;
  font-size: clamp(2rem, 8vw, 7rem);
  line-height: 0.9;
  text-transform: uppercase;
  -webkit-text-stroke: 2px var(--tb-black);
  color: transparent;
}
```

---

## Layout Principles

- **Viewport-scale headings** -- hero text should fill 80-100% of the viewport width; use `clamp()` or `vw` units to ensure headings dominate at every breakpoint
- **Vertical stacking over columns** -- prefer a single-column flow where massive type blocks alternate with dense monospace paragraphs; multi-column layouts dilute typographic impact
- **Thick horizontal rules as section dividers** -- 4px-8px solid black lines between sections create an industrial, newspaper-like cadence
- **Edge-to-edge type** -- allow oversized text to touch or exceed container boundaries; cropped letterforms reinforce the raw, uncontained energy of the style
- **Asymmetric text placement** -- body text blocks pushed to one side with the opposite side left empty, creating active negative space that amplifies the type
- **No container max-width for display type** -- while body text may sit in a readable column (600-800px), display headings should break free and span the full viewport
- **Minimal or zero padding on hero sections** -- let large type press against screen edges; generous padding domesticates the rawness
- **Scroll-based reveals** -- large type appearing on scroll, letter by letter or word by word, leveraging the verticality of the web medium
- **Overlapping text layers** -- secondary text or decorative type placed behind or partially obscuring primary content to create depth through collision
- **Footer as typographic statement** -- the footer is not an afterthought; it can contain an oversized word or phrase that serves as a closing visual anchor
- **Navigation as plain text list** -- navigation links rendered as a flat list of uppercase words separated by slashes, pipes, or whitespace, without icons or hamburger menus

---

## CSS / Design Techniques

### Typographic Card Component

```css
.tb-card {
  background: var(--tb-bg-secondary);
  border: 3px solid var(--tb-black);
  padding: 0;
  position: relative;
  overflow: hidden;
}

.tb-card__header {
  background: var(--tb-black);
  color: var(--tb-white);
  padding: 20px 24px;
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1;
}

.tb-card__body {
  padding: 24px;
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}

.tb-card__number {
  position: absolute;
  top: -20px;
  right: 12px;
  font-family: 'Anton', sans-serif;
  font-size: 8rem;
  line-height: 1;
  color: var(--tb-concrete);
  pointer-events: none;
  z-index: 0;
}

.tb-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0;
  border-top: 3px solid var(--tb-black);
}

.tb-card-grid .tb-card {
  border-top: none;
  border-right: none;
}

.tb-card-grid .tb-card:last-child {
  border-right: 3px solid var(--tb-black);
}
```

### Brutalist Button

```css
.tb-button {
  display: inline-block;
  background: var(--tb-black);
  color: var(--tb-white);
  border: 3px solid var(--tb-black);
  padding: 16px 40px;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: none;
}

.tb-button:hover {
  background: var(--tb-white);
  color: var(--tb-black);
}

.tb-button--outline {
  background: transparent;
  color: var(--tb-black);
}

.tb-button--outline:hover {
  background: var(--tb-black);
  color: var(--tb-white);
}

.tb-button--red {
  background: var(--tb-red);
  border-color: var(--tb-red);
}

.tb-button--red:hover {
  background: var(--tb-black);
  border-color: var(--tb-black);
}

/* Oversized text-link button */
.tb-button--text {
  background: none;
  border: none;
  color: var(--tb-black);
  padding: 0;
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 4px solid var(--tb-black);
}

.tb-button--text:hover {
  color: var(--tb-red);
  border-color: var(--tb-red);
}
```

### Navigation Bar

```css
.tb-nav {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 4px solid var(--tb-black);
  background: var(--tb-white);
}

.tb-nav__logo {
  font-family: 'Anton', sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: var(--tb-black);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.tb-nav__links {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: baseline;
}

.tb-nav__links li::after {
  content: '/';
  margin-left: 8px;
  font-family: 'Space Mono', monospace;
  color: var(--tb-warm-gray);
}

.tb-nav__links li:last-child::after {
  content: '';
}

.tb-nav__links a {
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--tb-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.tb-nav__links a:hover {
  color: var(--tb-red);
}

/* Mobile: stack vertically */
@media (max-width: 640px) {
  .tb-nav {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}
```

### Hero Section

```css
.tb-hero {
  padding: 0 32px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  border-bottom: 4px solid var(--tb-black);
}

.tb-hero__title {
  font-family: 'Anton', sans-serif;
  font-size: clamp(5rem, 18vw, 16rem);
  line-height: 0.85;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  color: var(--tb-black);
  margin-bottom: 0;
  /* Allow text to press against edges */
  margin-left: -0.04em;
}

.tb-hero__subtitle {
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  max-width: 480px;
  line-height: 1.6;
  margin: 24px 0 48px;
  color: var(--tb-mid-gray);
}

.tb-hero__label {
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tb-warm-gray);
  margin-bottom: 16px;
}

/* Decorative oversized background letter */
.tb-hero__bg-letter {
  position: absolute;
  top: -10%;
  right: -5%;
  font-family: 'Anton', sans-serif;
  font-size: 60vw;
  line-height: 1;
  color: var(--tb-offwhite);
  pointer-events: none;
  z-index: 0;
  user-select: none;
}
```

### Oversized Text Section

```css
.tb-text-section {
  padding: 80px 32px;
  border-bottom: 4px solid var(--tb-black);
}

.tb-text-section__heading {
  font-family: 'Anton', sans-serif;
  font-size: clamp(3rem, 10vw, 9rem);
  line-height: 0.88;
  text-transform: uppercase;
  margin-bottom: 40px;
  max-width: none;
}

.tb-text-section__body {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 560px;
  color: var(--tb-mid-gray);
}

/* Outline text variant */
.tb-text-section__heading--outline {
  -webkit-text-stroke: 3px var(--tb-black);
  color: transparent;
}
```

### Typographic Marquee / Ticker

```css
.tb-marquee {
  overflow: hidden;
  white-space: nowrap;
  border-top: 4px solid var(--tb-black);
  border-bottom: 4px solid var(--tb-black);
  padding: 16px 0;
  background: var(--tb-black);
  color: var(--tb-white);
}

.tb-marquee__inner {
  display: inline-block;
  animation: tb-scroll 20s linear infinite;
  font-family: 'Anton', sans-serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tb-marquee__inner span {
  margin-right: 60px;
}

@keyframes tb-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Footer

```css
.tb-footer {
  background: var(--tb-black);
  color: var(--tb-white);
  padding: 60px 32px 40px;
  border-top: 4px solid var(--tb-black);
}

.tb-footer__statement {
  font-family: 'Anton', sans-serif;
  font-size: clamp(2rem, 8vw, 6rem);
  text-transform: uppercase;
  line-height: 0.9;
  margin-bottom: 48px;
}

.tb-footer__meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tb-warm-gray);
}

.tb-footer__links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.tb-footer__links a {
  color: var(--tb-warm-gray);
  text-decoration: none;
}

.tb-footer__links a:hover {
  color: var(--tb-white);
}
```

---

## Design Do's and Don'ts

### Do

- **Let type dominate** -- make headings the largest, most prominent element on the page; they should be impossible to ignore
- **Use monospaced fonts for body text** -- the raw, mechanical quality of monospace type reinforces the brutalist ethos
- **Embrace extreme scale contrast** -- pair 14rem headlines with 0.85rem body copy; the gap is the point
- **Keep color minimal** -- restrict palettes to black, white, and at most one accent color per page or section
- **Use thick horizontal rules** -- 4px+ solid black lines between sections create an industrial rhythm
- **Allow text to be cropped by edges** -- oversized type that bleeds off the viewport feels raw and uncontained
- **Prioritize uppercase for headings** -- all-caps creates uniform letterform height and amplifies visual weight
- **Set intentionally tight line-height** -- display text at 0.85-0.95 line-height creates dense, compressed typographic blocks

### Don't

- **Add drop shadows or text-shadow effects** -- these soften the rawness; Typographic Brutalism demands flat, unembellished type
- **Use gradients on text or backgrounds** -- flat, solid fills only; gradients introduce smoothness that contradicts the aesthetic
- **Rely on images to carry the design** -- photography and illustration should be absent or severely subordinate to type
- **Apply rounded corners** -- sharp, square edges reinforce the brutalist structural vocabulary
- **Use decorative or script typefaces** -- no calligraphy, no handwriting fonts; only sans-serif, monospace, or deliberately blunt serifs
- **Smooth over transitions** -- avoid long easing curves and subtle fades; interactions should be instant or binary (hover-on, hover-off)
- **Center-align large blocks of body text** -- left-aligned monospace text is the default; centering softens the raw edge
- **Over-polish the layout** -- if it looks too clean, too balanced, too comfortable, you have deviated from the aesthetic; reintroduce tension

---

## Related Aesthetics

| Aesthetic | Relationship to Typographic Brutalism |
|-----------|--------------------------------------|
| **Neubrutalism** | Close sibling; shares thick borders, raw HTML energy, and bold type but adds playful color blocks and rounded accent elements |
| **International Typographic Style** | Ancestral influence; Swiss grid discipline and Helvetica dominance provide the formal foundation that Typographic Brutalism then deliberately disrupts |
| **Constructivism** | Shared DNA in the use of bold sans-serif type as a political and visual weapon; diagonal compositions and red-black palettes overlap |
| **DIY Punk** | Aesthetic cousin; xeroxed zines, hand-set type, and anti-polish attitude share the same rejection of design refinement |
| **Cyberminimalism** | Parallel movement; both strip the web to essentials, but Cyberminimalism is serene while Typographic Brutalism is confrontational |
| **Flat Design** | Both reject skeuomorphism and depth simulation, but Flat Design is corporate-friendly while Typographic Brutalism is deliberately uncomfortable |
| **Dadaism** | Historical predecessor; Dada's chaotic typography, cut-up text, and anti-art posture prefigure brutalist type experimentation |
| **De Stijl** | Shares the reductive black-white-primary palette and grid disruption, but De Stijl is more systematically geometric |
| **Corporate Grunge** | Borrows brutalist rawness and applies it to commercial contexts, often softening the typography to remain readable |
| **Bauhaus** | Provides the foundational belief that type is architecture; Typographic Brutalism takes the Bauhaus sans-serif and scales it to extremes |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typographic Brutalism</title>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    /* -- Custom Properties -- */
    :root {
      --tb-black: #000000;
      --tb-white: #ffffff;
      --tb-offwhite: #f5f5f0;
      --tb-ink: #0a0a0a;
      --tb-charcoal: #1a1a1a;
      --tb-warm-gray: #b0ada8;
      --tb-mid-gray: #6b6b6b;
      --tb-concrete: #d8d5d0;
      --tb-red: #e63025;
      --tb-red-dark: #b8201a;
    }

    /* -- Reset -- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* -- Base Typography -- */
    body {
      background: var(--tb-white);
      color: var(--tb-black);
      font-family: 'Space Mono', 'Courier New', monospace;
      font-size: 0.95rem;
      line-height: 1.65;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Anton', 'Impact', sans-serif;
      font-weight: 400;
      line-height: 0.9;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }

    a {
      color: var(--tb-black);
      text-decoration: none;
    }

    a:hover {
      color: var(--tb-red);
    }

    /* -- Navigation -- */
    .nav {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      padding: 24px 32px;
      border-bottom: 4px solid var(--tb-black);
    }

    .nav__logo {
      font-family: 'Anton', sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }

    .nav__links {
      display: flex;
      gap: 8px;
      list-style: none;
      align-items: baseline;
    }

    .nav__links li::after {
      content: '/';
      margin-left: 8px;
      color: var(--tb-warm-gray);
      font-family: 'Space Mono', monospace;
    }

    .nav__links li:last-child::after {
      content: '';
    }

    .nav__links a {
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    /* -- Hero -- */
    .hero {
      padding: 0 32px;
      min-height: 92vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      overflow: hidden;
      border-bottom: 4px solid var(--tb-black);
    }

    .hero__bg-letter {
      position: absolute;
      top: -8%;
      right: -5%;
      font-family: 'Anton', sans-serif;
      font-size: 60vw;
      line-height: 1;
      color: var(--tb-offwhite);
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }

    .hero__content {
      position: relative;
      z-index: 1;
      padding-bottom: 48px;
    }

    .hero__label {
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--tb-warm-gray);
      margin-bottom: 16px;
    }

    .hero__title {
      font-size: clamp(4.5rem, 16vw, 14rem);
      line-height: 0.85;
      letter-spacing: -0.03em;
      margin-left: -0.04em;
    }

    .hero__title .outline {
      -webkit-text-stroke: 3px var(--tb-black);
      color: transparent;
    }

    .hero__subtitle {
      font-family: 'Space Mono', monospace;
      font-size: clamp(0.78rem, 1.1vw, 0.95rem);
      max-width: 460px;
      line-height: 1.65;
      color: var(--tb-mid-gray);
      margin-top: 28px;
    }

    .hero__cta {
      display: inline-block;
      margin-top: 32px;
      background: var(--tb-black);
      color: var(--tb-white);
      border: 3px solid var(--tb-black);
      padding: 16px 44px;
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .hero__cta:hover {
      background: var(--tb-white);
      color: var(--tb-black);
    }

    /* -- Marquee -- */
    .marquee {
      overflow: hidden;
      white-space: nowrap;
      background: var(--tb-black);
      color: var(--tb-white);
      padding: 14px 0;
      border-bottom: 4px solid var(--tb-black);
    }

    .marquee__inner {
      display: inline-block;
      animation: marquee-scroll 25s linear infinite;
      font-family: 'Anton', sans-serif;
      font-size: clamp(1.2rem, 3vw, 2.2rem);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .marquee__inner span {
      margin-right: 80px;
    }

    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* -- Text Section -- */
    .text-section {
      padding: 80px 32px;
      border-bottom: 4px solid var(--tb-black);
    }

    .text-section__heading {
      font-size: clamp(3rem, 10vw, 9rem);
      line-height: 0.88;
      margin-bottom: 40px;
    }

    .text-section__body {
      font-family: 'Space Mono', monospace;
      font-size: 0.88rem;
      line-height: 1.7;
      max-width: 540px;
      color: var(--tb-mid-gray);
    }

    .text-section--alt {
      background: var(--tb-offwhite);
    }

    .text-section--alt .text-section__body {
      margin-left: auto;
      text-align: right;
    }

    /* -- Card Grid -- */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-bottom: 4px solid var(--tb-black);
    }

    .card {
      border-right: 3px solid var(--tb-black);
      padding: 0;
      position: relative;
      overflow: hidden;
    }

    .card:last-child {
      border-right: none;
    }

    .card__number {
      position: absolute;
      top: -24px;
      right: 8px;
      font-family: 'Anton', sans-serif;
      font-size: 10rem;
      line-height: 1;
      color: var(--tb-concrete);
      pointer-events: none;
      z-index: 0;
    }

    .card__header {
      background: var(--tb-black);
      color: var(--tb-white);
      padding: 18px 24px;
      font-family: 'Anton', sans-serif;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      position: relative;
      z-index: 1;
    }

    .card__body {
      padding: 24px;
      font-size: 0.82rem;
      line-height: 1.6;
      color: var(--tb-mid-gray);
      position: relative;
      z-index: 1;
    }

    /* -- Statement -- */
    .statement {
      background: var(--tb-red);
      color: var(--tb-white);
      padding: 80px 32px;
      border-bottom: 4px solid var(--tb-black);
    }

    .statement__text {
      font-family: 'Anton', sans-serif;
      font-size: clamp(2.5rem, 8vw, 7rem);
      line-height: 0.9;
      text-transform: uppercase;
    }

    .statement__credit {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 32px;
      opacity: 0.7;
    }

    /* -- Footer -- */
    .footer {
      background: var(--tb-black);
      color: var(--tb-white);
      padding: 60px 32px 36px;
    }

    .footer__word {
      font-family: 'Anton', sans-serif;
      font-size: clamp(3rem, 10vw, 8rem);
      text-transform: uppercase;
      line-height: 0.9;
      margin-bottom: 48px;
    }

    .footer__meta {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-family: 'Space Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--tb-warm-gray);
    }

    .footer__links {
      display: flex;
      gap: 20px;
      list-style: none;
    }

    .footer__links a {
      color: var(--tb-warm-gray);
    }

    .footer__links a:hover {
      color: var(--tb-white);
    }

    /* -- Responsive -- */
    @media (max-width: 900px) {
      .cards {
        grid-template-columns: 1fr;
      }

      .card {
        border-right: none;
        border-bottom: 3px solid var(--tb-black);
      }

      .card:last-child {
        border-bottom: none;
      }

    }

    @media (max-width: 640px) {
      .nav {
        flex-direction: column;
        gap: 14px;
        align-items: flex-start;
        padding: 20px 20px;
      }

      .hero {
        padding: 0 20px;
        min-height: 80vh;
      }

      .text-section {
        padding: 56px 20px;
      }

      .text-section--alt .text-section__body {
        margin-left: 0;
        text-align: left;
      }

      .statement {
        padding: 56px 20px;
      }

      .footer {
        padding: 48px 20px 28px;
      }

      .footer__meta {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>

  <!-- ===== NAVIGATION ===== -->
  <nav class="nav">
    <a href="#" class="nav__logo">Brutalist Type</a>
    <ul class="nav__links">
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#process">Process</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- ===== HERO ===== -->
  <section class="hero">
    <div class="hero__bg-letter">T</div>
    <div class="hero__content">
      <p class="hero__label">Design Studio -- Est. 2024</p>
      <h1 class="hero__title">
        Type<br>
        <span class="outline">Is</span><br>
        Everything
      </h1>
      <p class="hero__subtitle">
        We build digital experiences where typography is the architecture,
        the decoration, and the message. Nothing more is needed.
      </p>
      <a href="#work" class="hero__cta">View Work</a>
    </div>
  </section>

  <!-- ===== MARQUEE ===== -->
  <div class="marquee">
    <div class="marquee__inner">
      <span>Oversized</span>
      <span>Raw</span>
      <span>Monospaced</span>
      <span>Confrontational</span>
      <span>Typographic</span>
      <span>Brutalism</span>
      <span>Oversized</span>
      <span>Raw</span>
      <span>Monospaced</span>
      <span>Confrontational</span>
      <span>Typographic</span>
      <span>Brutalism</span>
    </div>
  </div>

  <!-- ===== TEXT SECTION: ABOUT ===== -->
  <section id="about" class="text-section">
    <h2 class="text-section__heading">About</h2>
    <p class="text-section__body">
      We are a studio obsessed with the raw power of letterforms.
      Our work strips away imagery, illustration, and ornament to reveal
      what design can be when typography carries every ounce of the
      visual and structural weight. Scale is our primary tool. Contrast
      is our language. The screen is our concrete.
    </p>
  </section>

  <!-- ===== CARD GRID: SERVICES ===== -->
  <section class="cards" id="work">
    <div class="card">
      <div class="card__number">01</div>
      <div class="card__header">Identity</div>
      <div class="card__body">
        Brand systems built entirely from type choices, scale
        relationships, and black-and-white conviction. No logos
        needed -- the typeface is the logo.
      </div>
    </div>
    <div class="card">
      <div class="card__number">02</div>
      <div class="card__header">Editorial</div>
      <div class="card__body">
        Publication design where headlines devour the page,
        body text runs in raw monospace columns, and whitespace
        is an active compositional force.
      </div>
    </div>
    <div class="card">
      <div class="card__number">03</div>
      <div class="card__header">Digital</div>
      <div class="card__body">
        Web experiences that load fast, hit hard, and communicate
        through scale and rhythm. No stock photos. No hero
        images. Just type at full volume.
      </div>
    </div>
  </section>

  <!-- ===== TEXT SECTION: PROCESS (Alt) ===== -->
  <section id="process" class="text-section text-section--alt">
    <h2 class="text-section__heading">Process</h2>
    <p class="text-section__body">
      We begin with words. The message determines the typeface.
      The typeface determines the scale. The scale determines
      the layout. Every decision flows from the content outward,
      never the other way around. The result is design that
      cannot be separated from what it says.
    </p>
  </section>

  <!-- ===== STATEMENT ===== -->
  <section class="statement">
    <p class="statement__text">
      The content is the design.<br>
      The words are the interface.<br>
      The rawness is the point.
    </p>
    <p class="statement__credit">-- Typographic Brutalism Manifesto</p>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="footer" id="contact">
    <div class="footer__word">Let's Talk.</div>
    <div class="footer__meta">
      <span>hello@brutalisttype.studio</span>
      <ul class="footer__links">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Arena</a></li>
      </ul>
      <span>&copy; 2024 Brutalist Type Studio</span>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use `clamp()` for all display type sizing** -- a declaration like `font-size: clamp(4rem, 15vw, 14rem)` ensures headings fill the viewport on desktop while remaining legible on mobile without media query breakpoints
- **Set `line-height` below 1.0 for display text** -- values of 0.85-0.95 for large headings create the compressed, stacked typographic blocks that define the aesthetic; only body text should have comfortable leading (1.6-1.7)
- **Leverage `-webkit-text-stroke` for outline text** -- combining `-webkit-text-stroke: 2px black` with `color: transparent` creates the hollow letterform effect common in Typographic Brutalism; note this is a non-standard property, so provide a solid-color fallback
- **Use `vw` units for truly viewport-spanning text** -- when `clamp()` is not extreme enough, setting a heading to `font-size: 18vw` guarantees it scales proportionally with the browser window and fills the horizontal space
- **Avoid `transition` on color/background for buttons** -- brutalist interactions should feel instant and binary; removing CSS transitions and letting hover states snap on/off reinforces the raw, mechanical character
- **Test with system monospace fallbacks** -- always include `'Courier New', monospace` in your font stack; if Google Fonts fail to load, the page should still look intentionally raw rather than broken
- **Apply `overflow: hidden` to hero containers** -- oversized background letters and cropped headings require the parent to clip content cleanly without triggering horizontal scrollbars
- **Profile web font loading** -- load only the weights you actually use (typically Regular 400 and Bold 700 for monospace, Regular 400 for Anton); each unused weight adds latency that undermines the fast, stripped-down loading experience this aesthetic demands
