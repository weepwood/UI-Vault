# Data Viz Art Design Reference

## Overview

Data Viz Art is a web design aesthetic that elevates data visualization from a functional communication tool into a primary design element -- treating charts, graphs, infographics, and analytical displays as the visual centerpiece of a page rather than supplementary illustrations. Rooted in the work of pioneers like Edward Tufte, Giorgia Lupi, Stefanie Posavec, and the Information is Beautiful movement led by David McCandless, this aesthetic blurs the line between analytical rigor and artistic expression. Where traditional web design uses photography or illustration as hero content, Data Viz Art places beautifully rendered scatter plots, radial charts, flow diagrams, and annotated data canvases at the center of the visual experience.

The philosophy draws heavily from Giorgia Lupi's concept of "Data Humanism" -- the idea that data is always a placeholder for real human stories, and that visualization should reconnect numbers to the lives and contexts they represent. This gives the aesthetic its distinctive warmth: despite being built on precision and measurement, Data Viz Art websites feel personal, narrative-driven, and deeply intentional. Every axis label, every color gradient, every annotation is a deliberate design choice that serves both comprehension and beauty.

Visually, the style is characterized by clean, expansive layouts that give breathing room to complex visualizations. Color palettes are carefully curated -- often drawing from sequential, diverging, or categorical color systems used in scientific publishing, but refined for screen aesthetics. Typography tends toward high-readability sans-serif families with strong tabular number support, paired with monospace or technical display faces for data labels. Grids are generous, whitespace is abundant, and the overall impression is one of calm authority: the design whispers confidence rather than shouting for attention.

This aesthetic has gained significant traction in editorial data journalism (The New York Times, The Pudding, Reuters Graphics), analytical SaaS dashboards, scientific communication platforms, and portfolio sites for data artists. It appeals to audiences who value intellectual depth and visual sophistication -- people who find a well-crafted slope chart as compelling as a full-bleed photograph.

---

## Visual Characteristics

### Core Design Traits

- **Data as hero content** -- charts, graphs, and infographic elements occupy primary visual real estate, serving as the main attraction rather than supporting illustrations
- **Generous whitespace around visualizations** -- every chart is framed with ample negative space, allowing complex information to breathe and preventing cognitive overload
- **Annotated, storytelling charts** -- visualizations include contextual labels, callout annotations, and narrative explanations directly integrated into the graphic rather than separated into captions
- **Sequential and diverging color gradients** -- palettes follow data visualization best practices with ordered hues for continuous data and centered diverging scales for comparison
- **Fine, precise linework** -- thin strokes (0.5-2px), delicate gridlines, and refined axis marks that convey precision without visual heaviness
- **Layered transparency** -- overlapping elements use opacity to show density, intersection, and depth within data representations
- **Tabular and monospace numerals** -- numbers are displayed in fonts with fixed-width digits for perfect column alignment in tables and chart labels
- **Micro-interactions on data points** -- hover states reveal tooltips, highlight related data, or animate transitions between views
- **Grid-line subtlety** -- background gridlines are rendered in very low contrast (5-10% opacity) to provide spatial reference without competing with data
- **Mixed media integration** -- SVG charts, CSS-drawn elements, and HTML annotations coexist seamlessly within the same layout
- **Responsive data density** -- visualizations adapt their level of detail to viewport size, showing simplified views on mobile and full complexity on desktop
- **Ink-to-data ratio consciousness** -- following Tufte's principle, every visual element must encode information; decorative elements are minimized or eliminated

### Design Principles

- Let the data drive the visual hierarchy -- the most important insight should be the most visually prominent element
- Use color with intention: every hue must map to a data dimension, category, or semantic meaning
- Annotations are first-class design elements, not afterthoughts -- they bridge the gap between raw data and human understanding
- Embrace the beauty of structure: well-aligned axes, consistent spacing, and mathematical precision are inherently aesthetic
- Design for progressive disclosure: overview first, zoom and filter, then details on demand (Shneiderman's mantra)
- Maintain a high signal-to-noise ratio by removing chartjunk, redundant elements, and decorative distractions
- Treat negative space as an active compositional tool that frames and elevates the data narrative
- Respect accessibility: never rely on color alone to encode meaning; use shape, position, and annotation as redundant channels

---

## Color Palette

### Data Viz Art Core Palette

The palette is structured around the three systems used in professional data visualization: a categorical palette for nominal groupings, a sequential gradient for ordered data, and a set of neutral interface tones. Colors are chosen for perceptual uniformity, colorblind safety, and screen readability -- beauty emerges from their systematic application rather than individual vibrancy.

| Color Name | Hex | Role / Usage |
|------------|-----|-------------|
| **Deep Ink** | `#1B2A4A` | Primary text, headings, axis labels |
| **Slate** | `#4A5568` | Secondary text, descriptions, annotation body |
| **Graphite** | `#718096` | Tertiary text, captions, tick labels |
| **Mist** | `#E2E8F0` | Gridlines, dividers, subtle borders |
| **Canvas** | `#F7FAFC` | Page background, chart area fill |
| **White** | `#FFFFFF` | Card backgrounds, tooltip surfaces |
| **Signal Blue** | `#3182CE` | Primary data series, links, interactive elements |
| **Coral** | `#E53E3E` | Negative values, alerts, decline indicators |
| **Teal** | `#319795` | Secondary data series, complementary category |
| **Amber** | `#D69E2E` | Tertiary data series, warning, highlight annotations |
| **Violet** | `#805AD5` | Fourth data series, qualitative category |
| **Seafoam** | `#38B2AC` | Fifth data series, positive trend accent |
| **Rose** | `#ED64A6` | Sixth data series, qualitative category |
| **Midnight** | `#0F1B2D` | Dark mode background, high-contrast panels |
| **Glow** | `#63B3ED` | Hover highlights, active data point emphasis |

### CSS Custom Properties

```css
:root {
  /* Interface Tones */
  --dvz-bg: #f7fafc;
  --dvz-surface: #ffffff;
  --dvz-border: #e2e8f0;
  --dvz-gridline: #e2e8f0;

  /* Text Hierarchy */
  --dvz-text-primary: #1b2a4a;
  --dvz-text-secondary: #4a5568;
  --dvz-text-tertiary: #718096;

  /* Categorical Data Palette */
  --dvz-cat-1: #3182ce;
  --dvz-cat-2: #e53e3e;
  --dvz-cat-3: #319795;
  --dvz-cat-4: #d69e2e;
  --dvz-cat-5: #805ad5;
  --dvz-cat-6: #38b2ac;
  --dvz-cat-7: #ed64a6;

  /* Semantic Colors */
  --dvz-positive: #38a169;
  --dvz-negative: #e53e3e;
  --dvz-neutral: #718096;
  --dvz-highlight: #63b3ed;

  /* Dark Surfaces */
  --dvz-dark-bg: #0f1b2d;
  --dvz-dark-surface: #1b2a4a;

  /* Layout Tokens */
  --dvz-chart-padding: 32px;
  --dvz-card-radius: 8px;
  --dvz-gap: 24px;
  --dvz-max-width: 1200px;
}
```

---

## Typography

### Typeface Characteristics

Data Viz Art typography prioritizes legibility at small sizes, precise number rendering, and a sense of scientific credibility. Fonts must perform well as chart labels at 10px, as annotation text at 13px, and as editorial headings at 48px. Sans-serif families dominate because they scale better on screens and avoid the visual noise that serifs introduce at small sizes. Monospace faces appear in data labels, code annotations, and tabular displays where digit alignment matters.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Inter** | Humanist sans-serif, tall x-height | Body text, descriptions, general UI -- exceptional at small sizes |
| **IBM Plex Sans** | Neo-grotesque, technical feel | Headlines, axis labels, data annotations -- strong tabular figures |
| **IBM Plex Mono** | Monospace companion | Data values, code snippets, chart tick labels, table numbers |
| **Source Sans 3** | Adobe's open-source workhorse | Long-form body text, annotations, captions |
| **Roboto** | Google's default, neutral clarity | Dashboard interfaces, chart labels, compact layouts |
| **Space Grotesk** | Monospace-inspired proportional | Display headings, metric callouts, modern data aesthetic |
| **JetBrains Mono** | Developer-focused monospace | Raw data display, code blocks, terminal-style data feeds |
| **DM Sans** | Clean geometric | Section headings, navigation, complementary display face |

### Font Pairing Suggestions

| Heading Font | Body Font | Data Font | Character |
|-------------|-----------|-----------|-----------|
| **Space Grotesk** (700) | **Inter** (400) | **IBM Plex Mono** (400) | Modern editorial data journalism |
| **IBM Plex Sans** (600) | **IBM Plex Sans** (400) | **IBM Plex Mono** (400) | Unified technical, IBM-style dashboards |
| **DM Sans** (700) | **Source Sans 3** (400) | **JetBrains Mono** (400) | Clean, developer-oriented analytics |
| **Inter** (700) | **Inter** (400) | **IBM Plex Mono** (400) | Minimalist, all-purpose data platform |
| **Space Grotesk** (600) | **Source Sans 3** (400) | **IBM Plex Mono** (400) | Scientific publication, research reports |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--dvz-text-primary);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--dvz-text-secondary);
}

.dvz-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.dvz-data-label {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: var(--dvz-text-tertiary);
}

.dvz-metric {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: -0.03em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.dvz-annotation {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--dvz-text-tertiary);
  line-height: 1.5;
}

.dvz-axis-label {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 0.7rem;
  fill: var(--dvz-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.dvz-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--dvz-text-tertiary);
  border-left: 3px solid var(--dvz-cat-1);
  padding-left: 12px;
}
```

---

## Layout Principles

### Grid and Structure

- **Content-width constraint** -- maximum width of 1000-1200px for body content; charts may bleed wider for full-viewport impact on editorial pieces
- **Generous vertical rhythm** -- sections separated by 80-120px of whitespace, giving each visualization room to be absorbed independently
- **Two-column annotation pattern** -- text and chart side by side, with the narrative column at 35-40% and the visualization column at 60-65%
- **Full-bleed chart sections** -- hero visualizations break out of the content column to span the full viewport width, creating dramatic scroll moments
- **Scrollytelling segments** -- fixed or sticky visualizations that update as the user scrolls through accompanying narrative text
- **Dashboard grid layout** -- for analytical interfaces, a 12-column grid with cards containing individual chart widgets at 4, 6, or 12 columns wide
- **Responsive chart scaling** -- SVG-based charts scale fluidly with `viewBox` attributes; canvas-based charts redraw at breakpoints
- **Consistent chart-to-caption spacing** -- a standardized 12-16px gap between every visualization and its source/caption line
- **Sticky axis headers** -- in long scrolling data tables or multi-panel charts, axis labels remain visible as the user scrolls
- **Progressive density** -- mobile views show simplified sparklines and summary metrics; desktop reveals full interactive chart suites
- **Vertical stacking on narrow viewports** -- side-by-side annotation layouts collapse to chart-above-text on mobile
- **Breathing room for tooltips** -- charts are padded sufficiently to prevent tooltip clipping at edges

---

## CSS / Design Techniques

### Card Component

```css
.dvz-card {
  background: var(--dvz-surface);
  border: 1px solid var(--dvz-border);
  border-radius: var(--dvz-card-radius);
  padding: var(--dvz-chart-padding);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.dvz-card:hover {
  box-shadow: 0 4px 20px rgba(27, 42, 74, 0.08);
  transform: translateY(-1px);
}

.dvz-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--dvz-border);
}

.dvz-card__title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: var(--dvz-text-primary);
}

.dvz-card__subtitle {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  color: var(--dvz-text-tertiary);
  letter-spacing: 0.02em;
}

.dvz-card__chart-area {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dvz-card__footer {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--dvz-border);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  color: var(--dvz-text-tertiary);
}
```

### Button Component

```css
.dvz-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--dvz-cat-1);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  text-decoration: none;
}

.dvz-button:hover {
  background: #2c5282;
  transform: translateY(-1px);
}

.dvz-button--outline {
  background: transparent;
  color: var(--dvz-cat-1);
  border: 1.5px solid var(--dvz-cat-1);
}

.dvz-button--outline:hover {
  background: rgba(49, 130, 206, 0.08);
  transform: translateY(-1px);
}

.dvz-button--ghost {
  background: transparent;
  color: var(--dvz-text-secondary);
  padding: 8px 16px;
}

.dvz-button--ghost:hover {
  background: var(--dvz-border);
  color: var(--dvz-text-primary);
}

.dvz-button--small {
  padding: 6px 14px;
  font-size: 0.75rem;
  border-radius: 4px;
}

.dvz-button--icon {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 6px;
}
```

### Navigation Bar

```css
.dvz-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--dvz-max-width);
  margin: 0 auto;
  padding: 16px 24px;
  border-bottom: 1px solid var(--dvz-border);
}

.dvz-nav__logo {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--dvz-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dvz-nav__logo-mark {
  width: 28px;
  height: 28px;
  background: var(--dvz-cat-1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dvz-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.dvz-nav__links a {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--dvz-text-tertiary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.dvz-nav__links a:hover {
  color: var(--dvz-text-primary);
}

.dvz-nav__links a.active {
  color: var(--dvz-cat-1);
}

.dvz-nav__links a.active::after {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--dvz-cat-1);
}

.dvz-nav__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
```

### Hero Section

```css
.dvz-hero {
  max-width: var(--dvz-max-width);
  margin: 0 auto;
  padding: 80px 24px 60px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.dvz-hero__content {
  max-width: 480px;
}

.dvz-hero__eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dvz-cat-1);
  margin-bottom: 16px;
}

.dvz-hero__title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--dvz-text-primary);
  margin-bottom: 20px;
}

.dvz-hero__description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--dvz-text-tertiary);
  margin-bottom: 32px;
}

.dvz-hero__chart {
  background: var(--dvz-surface);
  border: 1px solid var(--dvz-border);
  border-radius: var(--dvz-card-radius);
  padding: 24px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .dvz-hero {
    grid-template-columns: 1fr;
    padding: 40px 16px 32px;
    gap: 32px;
  }
}
```

### Chart Container and Grid System

```css
.dvz-chart-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--dvz-gap);
  max-width: var(--dvz-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.dvz-chart-grid--col-4 { grid-column: span 4; }
.dvz-chart-grid--col-6 { grid-column: span 6; }
.dvz-chart-grid--col-8 { grid-column: span 8; }
.dvz-chart-grid--col-12 { grid-column: span 12; }

.dvz-chart-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.dvz-chart-container svg {
  width: 100%;
  height: auto;
  display: block;
}

.dvz-chart-container .gridline {
  stroke: var(--dvz-gridline);
  stroke-width: 0.5;
  opacity: 0.5;
}

.dvz-chart-container .axis-line {
  stroke: var(--dvz-text-tertiary);
  stroke-width: 1;
}

.dvz-chart-container .data-line {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 768px) {
  .dvz-chart-grid { grid-template-columns: 1fr; }
  .dvz-chart-grid--col-4,
  .dvz-chart-grid--col-6,
  .dvz-chart-grid--col-8 { grid-column: span 1; }
}
```

### Tooltip

```css
.dvz-tooltip {
  position: absolute;
  pointer-events: none;
  background: var(--dvz-dark-bg);
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 14px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dvz-tooltip.visible {
  opacity: 1;
  transform: translateY(0);
}

.dvz-tooltip__label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2px;
}

.dvz-tooltip__value {
  font-weight: 600;
  font-size: 0.85rem;
  color: #ffffff;
}

.dvz-tooltip__swatch {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}
```

### Metric / KPI Display

```css
.dvz-kpi {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dvz-kpi__value {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--dvz-text-primary);
  font-variant-numeric: tabular-nums;
}

.dvz-kpi__label {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dvz-text-tertiary);
}

.dvz-kpi__trend {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 0.75rem;
}

.dvz-kpi__trend--up {
  color: var(--dvz-positive);
}

.dvz-kpi__trend--down {
  color: var(--dvz-negative);
}

.dvz-kpi__sparkline {
  width: 100%;
  height: 40px;
  margin-top: 12px;
}

.dvz-kpi__sparkline path {
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
}
```

---

## Design Do's and Don'ts

### Do

- Use a limited, purposeful color palette where every color maps to a specific data dimension or semantic meaning
- Include source citations and methodology notes below every visualization -- transparency builds trust and is part of the aesthetic
- Design responsive chart alternatives: sparklines for mobile, full interactive charts for desktop
- Annotate directly on the chart surface -- in-context labels are faster to parse than external legends
- Use animation sparingly and meaningfully, such as transitions between data states or progressive reveal of data points during scrollytelling
- Test color palettes with colorblind simulation tools (Coblis, Sim Daltonism) to ensure all data remains distinguishable
- Maintain consistent axis formatting: same date format, same number precision, same currency symbols across all charts on a page
- Provide text alternatives: every chart should have a summary paragraph or data table equivalent for screen readers

### Don't

- Use 3D effects on charts -- they distort data perception and introduce parallax errors that make accurate reading impossible
- Truncate Y-axes without clear visual indication, as this exaggerates differences and misleads the viewer
- Apply decorative gradients or textures to data-encoding elements like bars, lines, or areas
- Use more than 7-8 categorical colors in a single chart -- beyond this threshold, colors become indistinguishable and the chart loses clarity
- Rely solely on color to differentiate data series -- always pair color with shape, pattern, or direct labels
- Add unnecessary chart chrome: heavy borders, drop shadows on bars, or ornamental grid patterns that Tufte would call "chartjunk"
- Auto-play complex animations that prevent the user from studying the visualization at their own pace
- Use pie charts for more than 3-4 categories, or when precise comparison between slices matters -- bar charts are almost always more readable

---

## Related Aesthetics

| Aesthetic | Relationship to Data Viz Art |
|-----------|------------------------------|
| **Flat Design** | Shares the emphasis on clean shapes and minimal ornamentation; Data Viz Art adds analytical structure and data-driven color logic |
| **Swiss / International Typographic Style** | The grid discipline, sans-serif typography, and objective visual language are direct ancestors of Data Viz Art |
| **Bento Grid** | Modular card layouts that work well for dashboard-style Data Viz Art arrangements with one chart per tile |
| **Cyberminimalism** | Both reduce visual noise to essential elements; Data Viz Art replaces cyber's coolness with analytical warmth |
| **Neubrutalism** | Shares bold type and raw honesty, but Data Viz Art channels that honesty through precise data rather than rough aesthetics |
| **Infographic / Editorial** | The closest sibling -- editorial infographics are essentially Data Viz Art applied to journalistic storytelling |
| **Scientific / Academic** | Shares rigor and citation culture; Data Viz Art elevates academic chart conventions with refined design polish |
| **Corporate Memphis** | Often appears alongside data viz in SaaS dashboards; the flat illustration style contrasts with Data Viz Art's precision |
| **Dark Mode / Developer UI** | Terminal-inspired interfaces with monospace type and dark backgrounds are a popular Data Viz Art variant for technical audiences |
| **Generative Art** | Data-driven generative visuals (like those by Jer Thorp or Nicholas Felton) sit at the artistic extreme of the Data Viz Art spectrum |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DataLens -- Data Viz Art</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       CSS Custom Properties
       ======================================== */
    :root {
      --dvz-bg: #f7fafc;
      --dvz-surface: #ffffff;
      --dvz-border: #e2e8f0;
      --dvz-gridline: #e2e8f0;

      --dvz-text-primary: #1b2a4a;
      --dvz-text-secondary: #4a5568;
      --dvz-text-tertiary: #718096;

      --dvz-cat-1: #3182ce;
      --dvz-cat-2: #e53e3e;
      --dvz-cat-3: #319795;
      --dvz-cat-4: #d69e2e;
      --dvz-cat-5: #805ad5;
      --dvz-cat-6: #38b2ac;
      --dvz-cat-7: #ed64a6;

      --dvz-positive: #38a169;
      --dvz-negative: #e53e3e;
      --dvz-highlight: #63b3ed;

      --dvz-dark-bg: #0f1b2d;
      --dvz-dark-surface: #1b2a4a;

      --dvz-chart-padding: 32px;
      --dvz-card-radius: 8px;
      --dvz-gap: 24px;
      --dvz-max-width: 1200px;
    }

    /* ========================================
       Reset & Base
       ======================================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--dvz-bg);
      color: var(--dvz-text-secondary);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      color: var(--dvz-text-primary);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    a { color: var(--dvz-cat-1); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* ========================================
       Navigation
       ======================================== */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 16px 24px;
      border-bottom: 1px solid var(--dvz-border);
    }

    .logo {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--dvz-text-primary);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo-mark {
      width: 28px;
      height: 28px;
      background: var(--dvz-cat-1);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-mark svg { width: 16px; height: 16px; }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      color: var(--dvz-text-tertiary);
      font-weight: 500;
      font-size: 0.875rem;
      transition: color 0.2s;
    }

    nav ul a:hover { color: var(--dvz-text-primary); text-decoration: none; }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    /* ========================================
       Buttons
       ======================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--dvz-cat-1);
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 10px 24px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
      text-decoration: none;
    }

    .btn:hover {
      background: #2c5282;
      transform: translateY(-1px);
      text-decoration: none;
    }

    .btn--outline {
      background: transparent;
      color: var(--dvz-cat-1);
      border: 1.5px solid var(--dvz-cat-1);
    }

    .btn--outline:hover {
      background: rgba(49, 130, 206, 0.08);
    }

    .btn--ghost {
      background: transparent;
      color: var(--dvz-text-secondary);
      padding: 8px 16px;
    }

    .btn--ghost:hover {
      background: var(--dvz-border);
      color: var(--dvz-text-primary);
    }

    /* ========================================
       Hero Section
       ======================================== */
    .hero {
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 80px 24px 60px;
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 60px;
      align-items: center;
    }

    .hero-eyebrow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--dvz-cat-1);
      margin-bottom: 16px;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .hero-desc {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--dvz-text-tertiary);
      margin-bottom: 32px;
      max-width: 460px;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .hero-chart {
      background: var(--dvz-surface);
      border: 1px solid var(--dvz-border);
      border-radius: var(--dvz-card-radius);
      padding: 24px;
      position: relative;
    }

    .hero-chart__header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .hero-chart__title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--dvz-text-primary);
    }

    .hero-chart__period {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: var(--dvz-text-tertiary);
    }

    /* ========================================
       KPI Row
       ======================================== */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--dvz-gap);
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 0 24px 60px;
    }

    .kpi-card {
      background: var(--dvz-surface);
      border: 1px solid var(--dvz-border);
      border-radius: var(--dvz-card-radius);
      padding: 24px;
    }

    .kpi-label {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 400;
      font-size: 0.7rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--dvz-text-tertiary);
      margin-bottom: 8px;
    }

    .kpi-value {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--dvz-text-primary);
      font-variant-numeric: tabular-nums;
      margin-bottom: 8px;
    }

    .kpi-trend {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      font-size: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .kpi-trend--up { color: var(--dvz-positive); }
    .kpi-trend--down { color: var(--dvz-negative); }

    /* ========================================
       Chart Dashboard Grid
       ======================================== */
    .dashboard {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: var(--dvz-gap);
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 0 24px 60px;
    }

    .chart-card {
      background: var(--dvz-surface);
      border: 1px solid var(--dvz-border);
      border-radius: var(--dvz-card-radius);
      padding: var(--dvz-chart-padding);
      display: flex;
      flex-direction: column;
    }

    .chart-card--col-8 { grid-column: span 8; }
    .chart-card--col-6 { grid-column: span 6; }
    .chart-card--col-4 { grid-column: span 4; }
    .chart-card--col-12 { grid-column: span 12; }

    .chart-card__header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--dvz-border);
    }

    .chart-card__title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 1rem;
    }

    .chart-card__meta {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: var(--dvz-text-tertiary);
    }

    .chart-card__body {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }

    .chart-card__footer {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid var(--dvz-border);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: var(--dvz-text-tertiary);
    }

    .chart-card__legend {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: var(--dvz-text-tertiary);
    }

    .legend-swatch {
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }

    /* ========================================
       Annotation / Insight Section
       ======================================== */
    .insight-section {
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 60px 24px;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: start;
    }

    .insight-section h2 {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }

    .insight-text {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--dvz-text-secondary);
      margin-bottom: 16px;
    }

    .insight-caption {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: var(--dvz-text-tertiary);
      border-left: 3px solid var(--dvz-cat-1);
      padding-left: 12px;
      font-style: italic;
    }

    /* ========================================
       Data Table
       ======================================== */
    .dvz-table-wrapper {
      overflow-x: auto;
      border: 1px solid var(--dvz-border);
      border-radius: var(--dvz-card-radius);
      background: var(--dvz-surface);
    }

    .dvz-table {
      width: 100%;
      border-collapse: collapse;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
    }

    .dvz-table thead {
      background: var(--dvz-bg);
      border-bottom: 2px solid var(--dvz-border);
    }

    .dvz-table th {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--dvz-text-tertiary);
      padding: 12px 16px;
      text-align: left;
    }

    .dvz-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--dvz-border);
      color: var(--dvz-text-secondary);
      font-variant-numeric: tabular-nums;
    }

    .dvz-table tbody tr:hover {
      background: rgba(49, 130, 206, 0.03);
    }

    .dvz-table .cell-number {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      text-align: right;
    }

    .dvz-table .cell-positive { color: var(--dvz-positive); }
    .dvz-table .cell-negative { color: var(--dvz-negative); }

    /* ========================================
       Footer
       ======================================== */
    footer {
      max-width: var(--dvz-max-width);
      margin: 0 auto;
      padding: 40px 24px;
      border-top: 1px solid var(--dvz-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--dvz-text-tertiary);
    }

    footer a {
      color: var(--dvz-text-tertiary);
      transition: color 0.2s;
    }

    footer a:hover { color: var(--dvz-text-primary); }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-source {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
    }

    /* ========================================
       Responsive
       ======================================== */
    @media (max-width: 1024px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 48px 24px 40px;
        gap: 32px;
      }
      .kpi-row { grid-template-columns: repeat(2, 1fr); }
      .dashboard { grid-template-columns: repeat(6, 1fr); }
      .chart-card--col-8,
      .chart-card--col-4 { grid-column: span 6; }
      .insight-section { grid-template-columns: 1fr; gap: 32px; }
    }

    @media (max-width: 640px) {
      nav { padding: 12px 16px; }
      nav ul { gap: 16px; }
      .hero { padding: 32px 16px 24px; }
      .kpi-row {
        grid-template-columns: 1fr;
        padding: 0 16px 40px;
      }
      .dashboard {
        grid-template-columns: 1fr;
        padding: 0 16px 40px;
      }
      .chart-card--col-8,
      .chart-card--col-6,
      .chart-card--col-4 { grid-column: span 1; }
      .insight-section { padding: 40px 16px; }
      footer {
        flex-direction: column;
        gap: 16px;
        text-align: center;
        padding: 32px 16px;
      }
      .footer-links { flex-wrap: wrap; justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- ========================================
       Navigation
       ======================================== -->
  <nav>
    <a href="#" class="logo">
      <span class="logo-mark">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M2 12L5 4L8 9L11 2L14 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      DataLens
    </a>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
    <div class="nav-actions">
      <a href="#" class="btn--ghost btn">Log In</a>
      <a href="#" class="btn">Get Started</a>
    </div>
  </nav>

  <!-- ========================================
       Hero Section
       ======================================== -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-eyebrow">Analytics Platform</div>
      <h1>See the story your data is telling</h1>
      <p class="hero-desc">
        Transform raw numbers into beautiful, interactive visualizations
        that reveal patterns, trends, and insights at a glance.
      </p>
      <div class="hero-actions">
        <a href="#" class="btn">Start Exploring</a>
        <a href="#" class="btn btn--outline">View Examples</a>
      </div>
    </div>
    <div class="hero-chart">
      <div class="hero-chart__header">
        <span class="hero-chart__title">Revenue Trend</span>
        <span class="hero-chart__period">Jan -- Dec 2025</span>
      </div>
      <svg viewBox="0 0 500 240" fill="none" style="width:100%;height:auto;">
        <!-- Gridlines -->
        <line x1="40" y1="20" x2="490" y2="20" stroke="#e2e8f0" stroke-width="0.5"/>
        <line x1="40" y1="65" x2="490" y2="65" stroke="#e2e8f0" stroke-width="0.5"/>
        <line x1="40" y1="110" x2="490" y2="110" stroke="#e2e8f0" stroke-width="0.5"/>
        <line x1="40" y1="155" x2="490" y2="155" stroke="#e2e8f0" stroke-width="0.5"/>
        <line x1="40" y1="200" x2="490" y2="200" stroke="#e2e8f0" stroke-width="0.5"/>
        <!-- Y-axis labels -->
        <text x="32" y="24" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="end">$50k</text>
        <text x="32" y="69" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="end">$40k</text>
        <text x="32" y="114" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="end">$30k</text>
        <text x="32" y="159" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="end">$20k</text>
        <text x="32" y="204" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="end">$10k</text>
        <!-- Area fill -->
        <path d="M60 170 L100 155 L140 160 L180 130 L220 120 L260 95 L300 100 L340 75 L380 60 L420 45 L460 30 L460 200 L60 200 Z"
              fill="url(#areaGrad)" opacity="0.3"/>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3182ce" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#3182ce" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Data line -->
        <polyline points="60,170 100,155 140,160 180,130 220,120 260,95 300,100 340,75 380,60 420,45 460,30"
                  fill="none" stroke="#3182ce" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Data points -->
        <circle cx="60" cy="170" r="3.5" fill="#fff" stroke="#3182ce" stroke-width="2"/>
        <circle cx="140" cy="160" r="3.5" fill="#fff" stroke="#3182ce" stroke-width="2"/>
        <circle cx="220" cy="120" r="3.5" fill="#fff" stroke="#3182ce" stroke-width="2"/>
        <circle cx="300" cy="100" r="3.5" fill="#fff" stroke="#3182ce" stroke-width="2"/>
        <circle cx="380" cy="60" r="3.5" fill="#fff" stroke="#3182ce" stroke-width="2"/>
        <circle cx="460" cy="30" r="4" fill="#3182ce" stroke="#fff" stroke-width="2"/>
        <!-- Annotation -->
        <line x1="460" y1="30" x2="460" y2="50" stroke="#3182ce" stroke-width="1" stroke-dasharray="3,2"/>
        <rect x="420" y="52" width="80" height="20" rx="4" fill="#3182ce"/>
        <text x="460" y="65" font-family="IBM Plex Mono" font-size="9" fill="#fff" text-anchor="middle">$48.2k peak</text>
        <!-- X-axis labels -->
        <text x="60" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">Jan</text>
        <text x="140" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">Mar</text>
        <text x="220" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">May</text>
        <text x="300" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">Jul</text>
        <text x="380" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">Sep</text>
        <text x="460" y="218" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">Nov</text>
      </svg>
      <div style="display:flex;gap:16px;margin-top:12px;">
        <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;"></span> Revenue</span>
        <span class="legend-item"><span class="legend-swatch" style="background:#e53e3e;"></span> Target</span>
      </div>
    </div>
  </section>

  <!-- ========================================
       KPI Row
       ======================================== -->
  <section class="kpi-row">
    <div class="kpi-card">
      <div class="kpi-label">Total Revenue</div>
      <div class="kpi-value">$1.24M</div>
      <div class="kpi-trend kpi-trend--up">
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 2L10 7H2L6 2Z" fill="currentColor"/></svg>
        +18.3% YoY
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Active Users</div>
      <div class="kpi-value">34,891</div>
      <div class="kpi-trend kpi-trend--up">
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 2L10 7H2L6 2Z" fill="currentColor"/></svg>
        +7.2% MoM
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Conversion Rate</div>
      <div class="kpi-value">3.8%</div>
      <div class="kpi-trend kpi-trend--down">
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 10L2 5H10L6 10Z" fill="currentColor"/></svg>
        -0.4% MoM
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Avg. Session</div>
      <div class="kpi-value">4m 12s</div>
      <div class="kpi-trend kpi-trend--up">
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 2L10 7H2L6 2Z" fill="currentColor"/></svg>
        +22s vs prev
      </div>
    </div>
  </section>

  <!-- ========================================
       Dashboard Chart Grid
       ======================================== -->
  <section class="dashboard">
    <!-- Main chart: 8-col wide area chart -->
    <div class="chart-card chart-card--col-8">
      <div class="chart-card__header">
        <span class="chart-card__title">User Growth by Channel</span>
        <span class="chart-card__meta">Last 12 months</span>
      </div>
      <div class="chart-card__body">
        <svg viewBox="0 0 600 220" fill="none" style="width:100%;height:auto;">
          <!-- Grid -->
          <line x1="0" y1="0" x2="600" y2="0" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="0" y1="55" x2="600" y2="55" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="0" y1="110" x2="600" y2="110" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="0" y1="165" x2="600" y2="165" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="0" y1="200" x2="600" y2="200" stroke="#e2e8f0" stroke-width="1"/>
          <!-- Organic line -->
          <polyline points="0,180 50,170 100,155 150,150 200,135 250,120 300,115 350,100 400,85 450,70 500,55 550,40 600,30"
                    fill="none" stroke="#3182ce" stroke-width="2" stroke-linecap="round"/>
          <!-- Paid line -->
          <polyline points="0,190 50,185 100,180 150,170 200,165 250,155 300,150 350,140 400,130 450,120 500,115 550,108 600,100"
                    fill="none" stroke="#319795" stroke-width="2" stroke-linecap="round"/>
          <!-- Referral line -->
          <polyline points="0,195 50,192 100,188 150,185 200,180 250,178 300,175 350,170 400,165 450,162 500,158 550,155 600,150"
                    fill="none" stroke="#805ad5" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="chart-card__footer">
        <div class="chart-card__legend">
          <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;"></span> Organic</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#319795;"></span> Paid</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#805ad5;"></span> Referral</span>
        </div>
        <span style="margin-left:auto;">Source: Internal Analytics</span>
      </div>
    </div>

    <!-- Side chart: 4-col donut chart -->
    <div class="chart-card chart-card--col-4">
      <div class="chart-card__header">
        <span class="chart-card__title">Traffic Sources</span>
        <span class="chart-card__meta">This month</span>
      </div>
      <div class="chart-card__body">
        <svg viewBox="0 0 200 200" fill="none" style="width:180px;height:180px;">
          <!-- Donut segments -->
          <circle cx="100" cy="100" r="80" fill="none" stroke="#e2e8f0" stroke-width="24"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#3182ce" stroke-width="24"
                  stroke-dasharray="201 503" stroke-dashoffset="0"
                  transform="rotate(-90 100 100)"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#319795" stroke-width="24"
                  stroke-dasharray="126 503" stroke-dashoffset="-201"
                  transform="rotate(-90 100 100)"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#805ad5" stroke-width="24"
                  stroke-dasharray="88 503" stroke-dashoffset="-327"
                  transform="rotate(-90 100 100)"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#d69e2e" stroke-width="24"
                  stroke-dasharray="88 503" stroke-dashoffset="-415"
                  transform="rotate(-90 100 100)"/>
          <!-- Center label -->
          <text x="100" y="94" font-family="Space Grotesk" font-size="22" font-weight="700" fill="#1b2a4a" text-anchor="middle">34.8k</text>
          <text x="100" y="112" font-family="IBM Plex Mono" font-size="9" fill="#718096" text-anchor="middle">TOTAL VISITS</text>
        </svg>
      </div>
      <div class="chart-card__footer">
        <div class="chart-card__legend" style="flex-direction:column;gap:8px;">
          <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;"></span> Direct (40%)</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#319795;"></span> Search (25%)</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#805ad5;"></span> Social (18%)</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#d69e2e;"></span> Other (17%)</span>
        </div>
      </div>
    </div>

    <!-- Bar chart: full width -->
    <div class="chart-card chart-card--col-12">
      <div class="chart-card__header">
        <span class="chart-card__title">Monthly Performance by Region</span>
        <span class="chart-card__meta">Q4 2025</span>
      </div>
      <div class="chart-card__body">
        <svg viewBox="0 0 700 180" fill="none" style="width:100%;height:auto;">
          <!-- Gridlines -->
          <line x1="80" y1="10" x2="690" y2="10" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="80" y1="50" x2="690" y2="50" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="80" y1="90" x2="690" y2="90" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="80" y1="130" x2="690" y2="130" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="80" y1="160" x2="690" y2="160" stroke="#718096" stroke-width="0.5"/>
          <!-- Region labels -->
          <text x="75" y="30" font-family="Inter" font-size="11" fill="#4a5568" text-anchor="end">North America</text>
          <text x="75" y="70" font-family="Inter" font-size="11" fill="#4a5568" text-anchor="end">Europe</text>
          <text x="75" y="110" font-family="Inter" font-size="11" fill="#4a5568" text-anchor="end">Asia Pacific</text>
          <text x="75" y="150" font-family="Inter" font-size="11" fill="#4a5568" text-anchor="end">Latin America</text>
          <!-- Bars: Oct, Nov, Dec grouped -->
          <!-- North America -->
          <rect x="85" y="18" width="170" height="10" rx="2" fill="#3182ce"/>
          <rect x="85" y="30" width="195" height="10" rx="2" fill="#3182ce" opacity="0.6"/>
          <rect x="85" y="42" width="210" height="10" rx="2" fill="#3182ce" opacity="0.35"/>
          <!-- Europe -->
          <rect x="85" y="58" width="140" height="10" rx="2" fill="#319795"/>
          <rect x="85" y="70" width="155" height="10" rx="2" fill="#319795" opacity="0.6"/>
          <rect x="85" y="82" width="162" height="10" rx="2" fill="#319795" opacity="0.35"/>
          <!-- Asia Pacific -->
          <rect x="85" y="98" width="120" height="10" rx="2" fill="#805ad5"/>
          <rect x="85" y="110" width="135" height="10" rx="2" fill="#805ad5" opacity="0.6"/>
          <rect x="85" y="122" width="150" height="10" rx="2" fill="#805ad5" opacity="0.35"/>
          <!-- Latin America -->
          <rect x="85" y="138" width="80" height="10" rx="2" fill="#d69e2e"/>
          <rect x="85" y="150" width="90" height="10" rx="2" fill="#d69e2e" opacity="0.6"/>
          <rect x="85" y="162" width="105" height="10" rx="2" fill="#d69e2e" opacity="0.35"/>
          <!-- Values -->
          <text x="260" y="26" font-family="IBM Plex Mono" font-size="9" fill="#718096">$420k</text>
          <text x="285" y="38" font-family="IBM Plex Mono" font-size="9" fill="#718096">$480k</text>
          <text x="300" y="50" font-family="IBM Plex Mono" font-size="9" fill="#718096">$512k</text>
        </svg>
      </div>
      <div class="chart-card__footer">
        <div class="chart-card__legend">
          <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;"></span> October</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;opacity:0.6;"></span> November</span>
          <span class="legend-item"><span class="legend-swatch" style="background:#3182ce;opacity:0.35;"></span> December</span>
        </div>
        <span style="margin-left:auto;">Source: Finance Dept.</span>
      </div>
    </div>
  </section>

  <!-- ========================================
       Insight / Annotation Section
       ======================================== -->
  <section class="insight-section">
    <div>
      <h2>Key Insight</h2>
      <p class="insight-text">
        North American revenue accelerated by 22% in Q4, driven by enterprise
        adoption. The trendline shows consistent month-over-month growth
        since August, outpacing all other regions.
      </p>
      <p class="insight-caption">
        "The data reveals a clear inflection point in September when
        the enterprise sales team expanded their outreach program."
      </p>
    </div>
    <div class="chart-card">
      <div class="chart-card__header">
        <span class="chart-card__title">Regional Comparison</span>
        <span class="chart-card__meta">Normalized to Q1 baseline</span>
      </div>
      <div class="chart-card__body">
        <svg viewBox="0 0 400 200" fill="none" style="width:100%;height:auto;">
          <line x1="0" y1="100" x2="400" y2="100" stroke="#e2e8f0" stroke-width="0.5" stroke-dasharray="4,4"/>
          <text x="395" y="96" font-family="IBM Plex Mono" font-size="8" fill="#718096" text-anchor="end">baseline</text>
          <polyline points="0,120 40,115 80,110 120,105 160,100 200,90 240,78 280,65 320,50 360,38 400,25"
                    fill="none" stroke="#3182ce" stroke-width="2" stroke-linecap="round"/>
          <polyline points="0,115 40,112 80,108 120,106 160,102 200,98 240,94 280,90 320,85 360,82 400,78"
                    fill="none" stroke="#319795" stroke-width="2" stroke-linecap="round"/>
          <polyline points="0,110 40,108 80,107 120,108 160,110 200,105 240,100 280,95 320,92 360,88 400,85"
                    fill="none" stroke="#805ad5" stroke-width="2" stroke-linecap="round" stroke-dasharray="6,3"/>
          <!-- Annotation callout -->
          <circle cx="200" cy="90" r="12" fill="none" stroke="#3182ce" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="218" y="82" font-family="Inter" font-size="9" fill="#3182ce" font-style="italic">inflection point</text>
        </svg>
      </div>
    </div>
  </section>

  <!-- ========================================
       Data Table Section
       ======================================== -->
  <section style="max-width:var(--dvz-max-width);margin:0 auto;padding:0 24px 60px;">
    <h2 style="margin-bottom:20px;font-size:1.4rem;">Detailed Breakdown</h2>
    <div class="dvz-table-wrapper">
      <table class="dvz-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Q3 Revenue</th>
            <th>Q4 Revenue</th>
            <th>Change</th>
            <th>Users</th>
            <th>Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>North America</td>
            <td class="cell-number">$1,012,400</td>
            <td class="cell-number">$1,412,000</td>
            <td class="cell-number cell-positive">+39.5%</td>
            <td class="cell-number">18,420</td>
            <td class="cell-number">4.2%</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td class="cell-number">$724,800</td>
            <td class="cell-number">$857,000</td>
            <td class="cell-number cell-positive">+18.2%</td>
            <td class="cell-number">9,870</td>
            <td class="cell-number">3.6%</td>
          </tr>
          <tr>
            <td>Asia Pacific</td>
            <td class="cell-number">$498,200</td>
            <td class="cell-number">$635,000</td>
            <td class="cell-number cell-positive">+27.5%</td>
            <td class="cell-number">12,340</td>
            <td class="cell-number">2.9%</td>
          </tr>
          <tr>
            <td>Latin America</td>
            <td class="cell-number">$312,600</td>
            <td class="cell-number">$275,000</td>
            <td class="cell-number cell-negative">-12.0%</td>
            <td class="cell-number">4,261</td>
            <td class="cell-number">3.1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- ========================================
       Footer
       ======================================== -->
  <footer>
    <span class="footer-source">Data last updated: 2025-12-31T23:59:00Z</span>
    <div class="footer-links">
      <a href="#">Methodology</a>
      <a href="#">API</a>
      <a href="#">Privacy</a>
      <a href="#">GitHub</a>
    </div>
    <span>Built with the Data Viz Art aesthetic</span>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use SVG for charts whenever possible** -- SVGs scale perfectly to any resolution, are fully styleable with CSS, and remain accessible to screen readers through `<title>` and `<desc>` elements
- **Adopt a data visualization library** -- D3.js offers maximum control for bespoke visualizations; Observable Plot and Chart.js provide faster setup for standard chart types with sensible defaults
- **Implement tabular-nums in CSS** -- apply `font-variant-numeric: tabular-nums` to any element displaying numbers so that digits align vertically in columns, tables, and changing counters
- **Test at real data extremes** -- design with edge cases in mind: what happens when a label is 40 characters long, when a value is negative, or when there are 200 data points instead of 12
- **Lazy-load heavy visualizations** -- use `IntersectionObserver` to initialize charts only when they scroll into view, keeping initial page load fast and reducing memory usage
- **Provide a "download data" option** -- include CSV or JSON export links near each chart; this transparency is both functionally useful and aesthetically consistent with the data-first philosophy
- **Prefer semantic color variables** -- reference `--dvz-positive` and `--dvz-negative` rather than raw green and red hex codes, so switching to a dark theme or accessible palette requires changing only the variable definitions
- **Annotate the interesting, not the obvious** -- chart annotations should highlight anomalies, inflection points, and insights; labeling every data point creates noise rather than narrative
