# Chromatic Blur Design Reference

## Overview

Chromatic Blur is a dreamy, atmospheric design aesthetic built on out-of-focus color fields, soft gradient transitions, and intentionally defocused palettes. Inspired by the optical phenomenon of chromatic aberration -- where a camera lens fails to converge all wavelengths of light to a single focal point, producing separated color fringes and beautifully blurred color halos -- Chromatic Blur translates this photographic artifact into a deliberate digital design language. The result is interfaces that feel like looking through frosted glass at a sunset: warm, immersive, and gently disorienting.

Where most design systems chase sharpness and pixel-perfect clarity, Chromatic Blur embraces the opposite. It treats defocus as a feature, not a flaw. Large, overlapping color fields with heavy Gaussian blur create ambient backgrounds that shift and breathe. Colors bleed into one another without hard boundaries, producing painterly transitions that feel organic and alive. The aesthetic draws from bokeh photography (the quality of blur in out-of-focus areas), color field painting (think Mark Rothko's luminous rectangles of pure color), and the smoky, ambient gradient trends that have emerged in web design since 2024, where gradients function as atmospheric lighting rather than decorative stripes.

The Chromatic Blur palette favors soft, desaturated tones -- lavenders, peach, powder blue, sage -- punctuated by warmer focal points of coral, amber, or rose. Typography sits atop these diffused color beds with careful contrast management, often using semi-transparent background chips or subtle text shadows to remain legible against the shifting hues beneath. Layouts are spacious and unhurried, with generous whitespace that lets the color fields expand and merge. Cards, buttons, and UI elements use frosted-glass effects (backdrop-filter blur) to maintain the defocused language at every layer. The overall mood is meditative, ethereal, and sensory -- a visual whisper rather than a shout.

---

## Visual Characteristics

### Core Design Traits

- **Large defocused color fields** -- oversized radial gradients with heavy Gaussian blur (40-120px) that create ambient, painterly backgrounds
- **Chromatic color separation** -- overlapping color blobs in adjacent hues (red-shifted and blue-shifted) that mimic lens chromatic aberration
- **Soft, bleeding edge transitions** -- no hard borders between color zones; everything feathers and dissolves into its neighbors
- **Bokeh-inspired decorative elements** -- circular, semi-transparent shapes of varying sizes that simulate out-of-focus light points
- **Frosted glass UI surfaces** -- cards, modals, and navigation use backdrop-filter blur to extend the defocused language into interactive elements
- **Muted, desaturated base palette** -- soft pastels and chalky tones dominate, with occasional saturated accents for focal points
- **Layered transparency** -- multiple semi-transparent color layers stack to produce rich, complex color interactions
- **Grain and noise texture** -- subtle film grain overlays add tactile warmth and prevent color fields from feeling too digitally smooth
- **Slow, ambient animation** -- color fields drift, pulse, and shift at glacial speeds, creating a living, breathing background
- **Light-dominant environments** -- the aesthetic works best on light or neutral bases where soft colors can glow without competing with dark contrast
- **Diffused shadows** -- drop shadows use large spread values and low opacity, extending the blur philosophy to depth cues
- **Intentional imprecision** -- edges are rounded, corners are soft, and nothing feels mechanically exact

### Design Principles

- Treat blur as a primary design tool, not a secondary effect -- the defocus IS the design
- Color fields should feel like ambient light, not painted surfaces; they illuminate rather than decorate
- Maintain readability through contrast management: frosted chips, text shadows, or solid-color text zones
- Less is more -- resist the urge to add sharp elements that break the dreamy atmosphere
- Animation should be imperceptible at first glance; the user should sense movement more than see it
- Layer colors transparently rather than mixing them -- let the eye blend, not the computer
- Embrace the accidental beauty of color overlap; not every interaction needs to be precisely designed
- Balance the ethereal quality with enough UI structure that users can still navigate confidently

---

## Color Palette

### Chromatic Blur Core Palette

Colors drawn from defocused photography, bokeh light studies, and color field painting. The palette balances soft, chalky pastels for ambient fields with warmer saturated tones for focal accents, all designed to look beautiful when blurred and overlapped.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Cloud White** | `#F7F5F2` | Page background, lightest base surface |
| **Warm Mist** | `#EDE8E3` | Secondary background, card surfaces |
| **Lavender Haze** | `#C8B8E8` | Primary blur field, decorative gradient stop |
| **Powder Blush** | `#E8C4C8` | Warm blur field, secondary gradient stop |
| **Peach Glow** | `#F0CDB5` | Warm accent blur field, highlight areas |
| **Sky Wash** | `#B5CCE0` | Cool blur field, balancing gradient stop |
| **Sage Mist** | `#B8CCBA` | Neutral-cool blur field, secondary accents |
| **Coral Focus** | `#E07A6B` | Primary CTA, focal accent, active states |
| **Rose Lens** | `#D4728A` | Secondary accent, hover states, badges |
| **Amber Flare** | `#D4A24E` | Tertiary accent, warm highlights, alerts |
| **Soft Indigo** | `#7B6FA0` | Primary text on light backgrounds |
| **Charcoal Fog** | `#4A4550` | Headings, high-contrast text |
| **Muted Plum** | `#8A7F96` | Secondary text, descriptions, captions |
| **Faded Dusk** | `#A899B8` | Tertiary text, placeholders, disabled states |
| **Glass Frost** | `rgba(255,255,255,0.55)` | Frosted glass card background |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --cb-bg-primary: #f7f5f2;
  --cb-bg-secondary: #ede8e3;
  --cb-bg-glass: rgba(255, 255, 255, 0.55);
  --cb-bg-glass-border: rgba(255, 255, 255, 0.7);

  /* Blur color fields */
  --cb-lavender: #c8b8e8;
  --cb-blush: #e8c4c8;
  --cb-peach: #f0cdb5;
  --cb-sky: #b5cce0;
  --cb-sage: #b8ccba;

  /* Accent / focal colors */
  --cb-coral: #e07a6b;
  --cb-rose: #d4728a;
  --cb-amber: #d4a24e;

  /* Text */
  --cb-text-primary: #4a4550;
  --cb-text-secondary: #8a7f96;
  --cb-text-muted: #a899b8;
  --cb-text-body: #7b6fa0;

  /* Blur values */
  --cb-blur-sm: 20px;
  --cb-blur-md: 40px;
  --cb-blur-lg: 80px;
  --cb-blur-xl: 120px;
  --cb-glass-blur: 16px;

  /* Signature gradients (pre-blurred via radial-gradient) */
  --cb-gradient-warm: radial-gradient(circle at 30% 40%, rgba(232,196,200,0.6), rgba(240,205,181,0.4), transparent 70%);
  --cb-gradient-cool: radial-gradient(circle at 70% 60%, rgba(181,204,224,0.5), rgba(200,184,232,0.4), transparent 70%);
  --cb-gradient-full: radial-gradient(circle at 25% 35%, rgba(200,184,232,0.5) 0%, transparent 50%),
                       radial-gradient(circle at 75% 25%, rgba(232,196,200,0.4) 0%, transparent 50%),
                       radial-gradient(circle at 50% 75%, rgba(181,204,224,0.4) 0%, transparent 50%);

  /* Radii */
  --cb-radius-sm: 12px;
  --cb-radius-md: 20px;
  --cb-radius-lg: 32px;
  --cb-radius-pill: 9999px;
}
```

---

## Typography

### Typeface Characteristics

Chromatic Blur typography is:

- **Light to regular weight** -- delicate letterforms that complement rather than overpower the soft color fields behind them
- **Rounded or humanist** -- geometric-humanist hybrids with soft terminals that echo the rounded, diffused aesthetic
- **High readability on variable backgrounds** -- generous x-height and open counters ensure legibility atop shifting blurred colors
- **Warm and approachable** -- typefaces should feel gentle and inviting, matching the dreamy visual language
- **Generously spaced** -- relaxed letter-spacing and line-height create the airy, unhurried reading rhythm the aesthetic demands

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **DM Sans** | Geometric, low contrast, clean | Headlines, hero text -- soft geometry matches blur fields |
| **Nunito** | Rounded terminals, friendly | Body text, UI elements -- warmth without whimsy |
| **Outfit** | Geometric, contemporary, variable | Headlines, display text, metrics |
| **Source Sans 3** | Humanist, highly readable | Body text, long-form content |
| **Figtree** | Geometric, open, friendly | Body text, approachable interfaces |
| **Josefin Sans** | Elegant, thin, geometric | Display headlines, hero statements |
| **Karla** | Grotesque, slightly quirky | Body text, captions, secondary content |
| **Manrope** | Semi-condensed, modern | Navigation, labels, UI components |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **DM Sans** (600) | **Nunito** (400) | Clean and soft, warm and rounded |
| **Outfit** (600) | **Source Sans 3** (400) | Contemporary display, excellent readability |
| **Josefin Sans** (300) | **Figtree** (400) | Elegant thin headlines, friendly body |
| **DM Sans** (700) | **Karla** (400) | Bold geometric headers, relaxed body text |
| **Manrope** (600) | **Nunito** (400) | Compact navigation, warm content |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Nunito:wght@400;500;600&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  color: var(--cb-text-primary);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.cb-display {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--cb-text-primary);
}

body {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--cb-text-body);
}

.cb-label {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cb-text-muted);
}

.cb-caption {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--cb-text-secondary);
}
```

---

## Layout Principles

- **Full-viewport ambient backgrounds** -- blurred color fields span the entire page, creating an immersive environment that wraps all content
- **Centered, narrow content columns** -- max-width 900-1080px keeps content tightly focused and readable against the shifting color backdrop
- **Generous vertical breathing room** -- 100-160px between major sections allows color fields to expand and merge naturally
- **Frosted glass card containers** -- content sits inside translucent, blurred cards that separate it from the background while maintaining the defocused language
- **Asymmetric color field placement** -- blur blobs should NOT be centered; offset positions (30/70, 25/75) create more natural, organic compositions
- **Layered depth through transparency** -- foreground elements are more opaque, background elements more transparent, creating atmospheric perspective
- **Minimal grid structure** -- prefer single-column or loose 2-column layouts; rigid multi-column grids feel too precise for this aesthetic
- **Organic section transitions** -- sections flow into each other through gradient fades rather than hard horizontal dividers
- **Responsive simplification** -- on mobile, reduce the number of blur blobs and lower blur radii for performance; the mood matters more than the complexity
- **Floating, detached elements** -- cards and UI components should feel like they hover above the color field, with soft shadows reinforcing the separation
- **Content islands** -- group related content into distinct frosted containers rather than spreading it across the open background

---

## CSS / Design Techniques

### Chromatic Blur Background

```css
.cb-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: var(--cb-bg-primary);
  overflow: hidden;
}

.cb-background::before,
.cb-background::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--cb-blur-xl));
  animation: cbDrift 25s ease-in-out infinite alternate;
}

.cb-background::before {
  width: 60vw;
  height: 60vw;
  top: -10%;
  left: -10%;
  background: radial-gradient(circle, rgba(200,184,232,0.5) 0%, rgba(232,196,200,0.3) 50%, transparent 70%);
}

.cb-background::after {
  width: 50vw;
  height: 50vw;
  bottom: -15%;
  right: -10%;
  background: radial-gradient(circle, rgba(181,204,224,0.45) 0%, rgba(240,205,181,0.3) 50%, transparent 70%);
  animation-delay: -12s;
  animation-direction: alternate-reverse;
}

@keyframes cbDrift {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(3%, -2%) scale(1.05); }
  66% { transform: translate(-2%, 3%) scale(0.97); }
  100% { transform: translate(1%, -1%) scale(1.02); }
}

/* Additional blur blobs as child elements */
.cb-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--cb-blur-lg));
  pointer-events: none;
  animation: cbDrift 30s ease-in-out infinite alternate;
}

.cb-blob--lavender {
  width: 40vw;
  height: 40vw;
  background: rgba(200, 184, 232, 0.35);
}

.cb-blob--blush {
  width: 35vw;
  height: 35vw;
  background: rgba(232, 196, 200, 0.3);
}

.cb-blob--sky {
  width: 45vw;
  height: 45vw;
  background: rgba(181, 204, 224, 0.3);
}

/* Grain overlay for tactile warmth */
.cb-grain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

### Card

```css
.cb-card {
  background: var(--cb-bg-glass);
  backdrop-filter: blur(var(--cb-glass-blur));
  -webkit-backdrop-filter: blur(var(--cb-glass-blur));
  border: 1px solid var(--cb-bg-glass-border);
  border-radius: var(--cb-radius-md);
  padding: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 32px rgba(74, 69, 80, 0.06);
}

.cb-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 16px 48px rgba(74, 69, 80, 0.1);
}

.cb-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
  color: var(--cb-text-primary);
}

.cb-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--cb-text-body);
}

/* Card with colored blur accent */
.cb-card--accent {
  position: relative;
  overflow: hidden;
}

.cb-card--accent::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  top: -30px;
  right: -30px;
  border-radius: 50%;
  background: rgba(200, 184, 232, 0.3);
  filter: blur(30px);
  pointer-events: none;
}
```

### Button

```css
.cb-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--cb-coral);
  color: #ffffff;
  border: none;
  border-radius: var(--cb-radius-pill);
  padding: 14px 36px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.3s ease, filter 0.3s ease;
  box-shadow: 0 4px 20px rgba(224, 122, 107, 0.25);
}

.cb-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(224, 122, 107, 0.35);
  filter: blur(0px) brightness(1.05);
}

.cb-button:active {
  transform: translateY(0px);
  box-shadow: 0 2px 12px rgba(224, 122, 107, 0.2);
}

/* Ghost / glass variant */
.cb-button--ghost {
  background: var(--cb-bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 184, 232, 0.4);
  color: var(--cb-text-primary);
  box-shadow: none;
}

.cb-button--ghost:hover {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(200, 184, 232, 0.6);
  box-shadow: 0 8px 24px rgba(74, 69, 80, 0.08);
}

/* Soft secondary */
.cb-button--soft {
  background: rgba(200, 184, 232, 0.2);
  color: var(--cb-text-primary);
  box-shadow: none;
}

.cb-button--soft:hover {
  background: rgba(200, 184, 232, 0.35);
}
```

### Navigation Bar

```css
.cb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
  z-index: 10;
}

.cb-nav--sticky {
  position: sticky;
  top: 0;
  background: rgba(247, 245, 242, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(200, 184, 232, 0.15);
  z-index: 100;
  max-width: 100%;
  padding: 16px 40px;
}

.cb-nav__logo {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--cb-text-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.cb-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cb-nav__links a {
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--cb-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.cb-nav__links a:hover {
  color: var(--cb-text-primary);
}

.cb-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--cb-coral);
  border-radius: 1px;
  transition: width 0.2s ease, left 0.2s ease;
}

.cb-nav__links a:hover::after {
  width: 100%;
  left: 0;
}
```

### Hero Section

```css
.cb-hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 40px;
  position: relative;
  z-index: 2;
}

.cb-hero__inner {
  max-width: 720px;
  margin: 0 auto;
}

.cb-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  color: var(--cb-text-primary);
  line-height: 1.08;
}

.cb-hero p {
  font-size: 1.2rem;
  color: var(--cb-text-body);
  margin-bottom: 2.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

/* Chromatic text effect -- color-separated shadow */
.cb-hero__chromatic {
  position: relative;
  display: inline-block;
}

.cb-hero__chromatic::before,
.cb-hero__chromatic::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.cb-hero__chromatic::before {
  color: rgba(200, 184, 232, 0.5);
  transform: translate(-3px, -2px);
  filter: blur(2px);
}

.cb-hero__chromatic::after {
  color: rgba(232, 196, 200, 0.5);
  transform: translate(3px, 2px);
  filter: blur(2px);
}
```

### Bokeh Decorative Elements

```css
.cb-bokeh {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.4;
  animation: cbFloat 20s ease-in-out infinite;
}

.cb-bokeh--sm {
  width: 60px;
  height: 60px;
  filter: blur(15px);
}

.cb-bokeh--md {
  width: 120px;
  height: 120px;
  filter: blur(30px);
}

.cb-bokeh--lg {
  width: 200px;
  height: 200px;
  filter: blur(50px);
}

.cb-bokeh--lavender { background: var(--cb-lavender); }
.cb-bokeh--blush { background: var(--cb-blush); }
.cb-bokeh--sky { background: var(--cb-sky); }
.cb-bokeh--peach { background: var(--cb-peach); }

@keyframes cbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(10px, -15px) scale(1.05); }
  50% { transform: translate(-5px, 10px) scale(0.95); }
  75% { transform: translate(8px, 5px) scale(1.02); }
}
```

### Section Container

```css
.cb-section {
  padding: 100px 40px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cb-section__header {
  text-align: center;
  margin-bottom: 60px;
}

.cb-section__header h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  margin-bottom: 1rem;
  color: var(--cb-text-primary);
}

.cb-section__header p {
  font-size: 1.05rem;
  color: var(--cb-text-secondary);
  max-width: 520px;
  margin: 0 auto;
}

.cb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* Frosted divider between sections */
.cb-divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--cb-lavender), var(--cb-blush), var(--cb-sky));
  border: none;
  border-radius: 2px;
  margin: 0 auto;
  opacity: 0.5;
  filter: blur(1px);
}
```

### CTA / Call-to-Action Block

```css
.cb-cta {
  text-align: center;
  padding: 100px 40px;
  position: relative;
  z-index: 2;
}

.cb-cta__inner {
  background: var(--cb-bg-glass);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--cb-bg-glass-border);
  border-radius: var(--cb-radius-lg);
  padding: 72px 48px;
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* Ambient color blob inside the CTA */
.cb-cta__inner::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  top: -60px;
  right: -60px;
  background: rgba(232, 196, 200, 0.3);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.cb-cta__inner::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  background: rgba(181, 204, 224, 0.25);
  border-radius: 50%;
  filter: blur(50px);
  pointer-events: none;
}

.cb-cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.cb-cta p {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}
```

---

## Design Do's and Don'ts

### Do

- Use large, heavily blurred radial gradients as ambient background fields -- the bigger and softer, the better
- Maintain text readability with frosted glass chips, subtle text shadows, or solid-color containers beneath text
- Embrace asymmetric color placement; off-center blobs at 30/70 positions create more natural compositions
- Add a subtle grain or noise texture overlay to prevent color fields from feeling too smooth and digital
- Animate color fields slowly (20-30 second cycles) so movement feels atmospheric rather than distracting
- Test on multiple screen sizes; reduce blur radius and blob count on mobile for performance
- Use the chromatic separation effect (offset color shadows) sparingly on key headlines for maximum impact
- Layer multiple semi-transparent colors rather than using pre-mixed solid tones -- let transparency do the blending

### Don't

- Use sharp borders, hard shadows, or pixel-perfect geometric elements that clash with the defocused language
- Place body text directly on shifting color fields without a frosted or solid container behind it
- Over-saturate the palette; chromatic blur works with muted, chalky tones, not neon or vivid primaries
- Animate blurs quickly or erratically -- rapid movement destroys the meditative, dreamy atmosphere
- Stack too many blur layers; each additional `filter: blur()` or `backdrop-filter` taxes GPU performance
- Use dark backgrounds by default; the aesthetic is built for light, airy environments where pastels glow
- Apply chromatic effects to every element -- the defocused language should frame content, not consume it
- Ignore accessibility; ensure all text meets WCAG AA contrast ratios despite the decorative blur layers

---

## Related Aesthetics

| Aesthetic | Relationship to Chromatic Blur |
|-----------|-------------------------------|
| **Aurora Gradient** | Shares flowing gradient language but uses vivid, saturated aurora-spectrum colors on dark backgrounds; Chromatic Blur is lighter and softer |
| **Glassmorphism** | Core technique overlap; both use frosted glass and backdrop-filter blur, but Chromatic Blur builds entire environments from blur, not just UI panels |
| **Frosted Touch** | Close sibling; both use translucent glass surfaces, but Chromatic Blur foregrounds the color fields themselves as the primary visual element |
| **Danish Pastel** | Shares the muted, soft pastel palette but with flat, solid color blocks rather than defocused gradients |
| **Dreamcore** | Both pursue dreamy, surreal atmospheres, but Dreamcore leans nostalgic and liminal while Chromatic Blur stays polished and contemporary |
| **Flat Design** | Opposite approach; Flat Design eliminates all blur, gradient, and depth in favor of crisp, solid surfaces |
| **Acid Design** | Both use blur and color overlap, but Acid Design pushes toward chaotic, neon intensity while Chromatic Blur maintains soft restraint |
| **Dopamine Design** | Shares color richness but through bold, saturated, sharp-edged maximalism rather than diffused, muted fields |
| **Bright Tertiaries** | Adjacent palette territory with tertiary color mixing, but rendered as solid fills rather than defocused fields |
| **Minimalism** | Chromatic Blur borrows minimalist layout restraint but adds atmospheric color depth that pure minimalism avoids |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chromatic Blur Page</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Nunito:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --cb-bg-primary: #f7f5f2;
      --cb-bg-secondary: #ede8e3;
      --cb-bg-glass: rgba(255, 255, 255, 0.55);
      --cb-bg-glass-border: rgba(255, 255, 255, 0.7);

      --cb-lavender: #c8b8e8;
      --cb-blush: #e8c4c8;
      --cb-peach: #f0cdb5;
      --cb-sky: #b5cce0;
      --cb-sage: #b8ccba;

      --cb-coral: #e07a6b;
      --cb-rose: #d4728a;
      --cb-amber: #d4a24e;

      --cb-text-primary: #4a4550;
      --cb-text-secondary: #8a7f96;
      --cb-text-muted: #a899b8;
      --cb-text-body: #7b6fa0;

      --cb-blur-sm: 20px;
      --cb-blur-md: 40px;
      --cb-blur-lg: 80px;
      --cb-blur-xl: 120px;
      --cb-glass-blur: 16px;

      --cb-radius-sm: 12px;
      --cb-radius-md: 20px;
      --cb-radius-lg: 32px;
      --cb-radius-pill: 9999px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--cb-bg-primary);
      color: var(--cb-text-body);
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      line-height: 1.75;
      overflow-x: hidden;
      min-height: 100vh;
    }

    h1, h2, h3, h4 {
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      color: var(--cb-text-primary);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    /* ===== Ambient Background ===== */
    .cb-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .cb-background .blob {
      position: absolute;
      border-radius: 50%;
    }

    .blob--1 {
      width: 55vw;
      height: 55vw;
      top: -15%;
      left: -10%;
      background: radial-gradient(circle, rgba(200,184,232,0.45) 0%, transparent 70%);
      filter: blur(100px);
      animation: drift1 28s ease-in-out infinite alternate;
    }

    .blob--2 {
      width: 45vw;
      height: 45vw;
      top: 10%;
      right: -15%;
      background: radial-gradient(circle, rgba(232,196,200,0.4) 0%, transparent 70%);
      filter: blur(90px);
      animation: drift2 24s ease-in-out infinite alternate;
    }

    .blob--3 {
      width: 50vw;
      height: 50vw;
      bottom: -20%;
      left: 20%;
      background: radial-gradient(circle, rgba(181,204,224,0.4) 0%, transparent 70%);
      filter: blur(110px);
      animation: drift3 32s ease-in-out infinite alternate;
    }

    .blob--4 {
      width: 30vw;
      height: 30vw;
      top: 45%;
      left: 55%;
      background: radial-gradient(circle, rgba(240,205,181,0.3) 0%, transparent 70%);
      filter: blur(80px);
      animation: drift1 20s ease-in-out infinite alternate-reverse;
    }

    .blob--5 {
      width: 25vw;
      height: 25vw;
      bottom: 10%;
      right: 10%;
      background: radial-gradient(circle, rgba(184,204,186,0.25) 0%, transparent 70%);
      filter: blur(70px);
      animation: drift2 26s ease-in-out infinite alternate-reverse;
    }

    @keyframes drift1 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(4%, -3%) scale(1.06); }
      100% { transform: translate(-2%, 2%) scale(0.97); }
    }

    @keyframes drift2 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-3%, 4%) scale(0.95); }
      100% { transform: translate(2%, -1%) scale(1.04); }
    }

    @keyframes drift3 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(2%, 3%) scale(1.03); }
      100% { transform: translate(-3%, -2%) scale(0.98); }
    }

    /* Grain overlay */
    .cb-grain {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      opacity: 0.035;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 256px 256px;
    }

    /* ===== Content Layer ===== */
    .content {
      position: relative;
      z-index: 2;
    }

    /* ===== Navigation ===== */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      padding: 24px 40px;
    }

    nav .logo {
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 1.35rem;
      color: var(--cb-text-primary);
      text-decoration: none;
      letter-spacing: -0.02em;
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Nunito', sans-serif;
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--cb-text-secondary);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    nav ul a:hover {
      color: var(--cb-text-primary);
    }

    /* ===== Hero ===== */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 40px;
      position: relative;
    }

    .hero__inner {
      max-width: 680px;
    }

    .hero .overline {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--cb-text-muted);
      margin-bottom: 1.25rem;
      display: block;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.2rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.08;
      margin-bottom: 1.5rem;
      color: var(--cb-text-primary);
    }

    /* Chromatic text shift effect */
    .chromatic-text {
      position: relative;
      display: inline;
    }

    .chromatic-text::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: -3px;
      color: rgba(200, 184, 232, 0.4);
      filter: blur(2px);
      pointer-events: none;
      z-index: -1;
    }

    .chromatic-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 3px;
      color: rgba(232, 196, 200, 0.4);
      filter: blur(2px);
      pointer-events: none;
      z-index: -1;
    }

    .hero p {
      font-size: 1.15rem;
      margin-bottom: 2.5rem;
      color: var(--cb-text-body);
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
    }

    .hero__actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ===== Buttons ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: none;
      border-radius: var(--cb-radius-pill);
      padding: 14px 36px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    .btn--primary {
      background: var(--cb-coral);
      color: #ffffff;
      box-shadow: 0 4px 20px rgba(224, 122, 107, 0.25);
    }

    .btn--primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(224, 122, 107, 0.35);
    }

    .btn--ghost {
      background: var(--cb-bg-glass);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(200, 184, 232, 0.35);
      color: var(--cb-text-primary);
    }

    .btn--ghost:hover {
      background: rgba(255, 255, 255, 0.7);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(74, 69, 80, 0.08);
    }

    /* ===== Features Section ===== */
    .features {
      padding: 100px 40px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .features__header {
      text-align: center;
      margin-bottom: 60px;
    }

    .features__header h2 {
      font-size: clamp(1.75rem, 3.5vw, 2.5rem);
      margin-bottom: 0.75rem;
    }

    .features__header p {
      font-size: 1.05rem;
      color: var(--cb-text-secondary);
      max-width: 480px;
      margin: 0 auto;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }

    .feature-card {
      background: var(--cb-bg-glass);
      backdrop-filter: blur(var(--cb-glass-blur));
      -webkit-backdrop-filter: blur(var(--cb-glass-blur));
      border: 1px solid var(--cb-bg-glass-border);
      border-radius: var(--cb-radius-md);
      padding: 36px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(74, 69, 80, 0.1);
    }

    /* Ambient color accent per card */
    .feature-card::after {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      top: -25px;
      right: -25px;
      filter: blur(35px);
      pointer-events: none;
      opacity: 0.4;
    }

    .feature-card:nth-child(1)::after { background: var(--cb-lavender); }
    .feature-card:nth-child(2)::after { background: var(--cb-blush); }
    .feature-card:nth-child(3)::after { background: var(--cb-sky); }

    .feature-card__icon {
      width: 48px;
      height: 48px;
      border-radius: var(--cb-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      font-size: 0.95rem;
      line-height: 1.65;
    }

    /* ===== Showcase / Metrics ===== */
    .showcase {
      padding: 80px 40px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .showcase__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      text-align: center;
    }

    .metric-card {
      background: var(--cb-bg-glass);
      backdrop-filter: blur(var(--cb-glass-blur));
      -webkit-backdrop-filter: blur(var(--cb-glass-blur));
      border: 1px solid var(--cb-bg-glass-border);
      border-radius: var(--cb-radius-md);
      padding: 40px 24px;
    }

    .metric-card__number {
      font-family: 'DM Sans', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--cb-coral);
      letter-spacing: -0.02em;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .metric-card__label {
      font-size: 0.9rem;
      color: var(--cb-text-secondary);
    }

    /* ===== CTA Section ===== */
    .cta {
      text-align: center;
      padding: 100px 40px;
    }

    .cta__inner {
      background: var(--cb-bg-glass);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid var(--cb-bg-glass-border);
      border-radius: var(--cb-radius-lg);
      padding: 72px 48px;
      max-width: 780px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .cta__inner::before {
      content: '';
      position: absolute;
      width: 220px;
      height: 220px;
      top: -50px;
      right: -50px;
      background: rgba(232, 196, 200, 0.3);
      border-radius: 50%;
      filter: blur(55px);
      pointer-events: none;
    }

    .cta__inner::after {
      content: '';
      position: absolute;
      width: 180px;
      height: 180px;
      bottom: -40px;
      left: -40px;
      background: rgba(200, 184, 232, 0.25);
      border-radius: 50%;
      filter: blur(50px);
      pointer-events: none;
    }

    .cta h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .cta p {
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
      color: var(--cb-text-secondary);
    }

    .cta .btn {
      position: relative;
      z-index: 1;
    }

    /* ===== Footer ===== */
    footer {
      text-align: center;
      padding: 48px 40px;
      font-size: 0.85rem;
      color: var(--cb-text-muted);
    }

    footer a {
      color: var(--cb-text-secondary);
      text-decoration: none;
    }

    footer a:hover {
      color: var(--cb-text-primary);
    }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      nav {
        padding: 16px 20px;
      }

      nav ul {
        gap: 16px;
      }

      .hero {
        min-height: 70vh;
        padding: 60px 20px;
      }

      .hero h1 {
        font-size: clamp(2rem, 8vw, 2.8rem);
      }

      .features,
      .showcase,
      .cta {
        padding: 60px 20px;
      }

      .showcase__grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .cta__inner {
        padding: 48px 28px;
      }

      .blob--1,
      .blob--2,
      .blob--3 {
        filter: blur(60px);
      }

      .blob--4,
      .blob--5 {
        display: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .blob--1,
      .blob--2,
      .blob--3,
      .blob--4,
      .blob--5 {
        animation: none;
      }
    }
  </style>
</head>
<body>
  <!-- Ambient blur background -->
  <div class="cb-background">
    <div class="blob blob--1"></div>
    <div class="blob blob--2"></div>
    <div class="blob blob--3"></div>
    <div class="blob blob--4"></div>
    <div class="blob blob--5"></div>
  </div>

  <!-- Grain texture overlay -->
  <div class="cb-grain"></div>

  <!-- Page content -->
  <div class="content">
    <nav>
      <a href="#" class="logo">Chroma</a>
      <ul>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <section class="hero">
      <div class="hero__inner">
        <span class="overline">A new way to see</span>
        <h1>
          Design through the
          <span class="chromatic-text" data-text="soft lens">soft lens</span>
          of color
        </h1>
        <p>
          Embrace the beauty of defocus. Let color fields drift
          and merge, creating interfaces that feel alive, warm,
          and gently immersive.
        </p>
        <div class="hero__actions">
          <a href="#" class="btn btn--primary">Explore Gallery</a>
          <a href="#" class="btn btn--ghost">Learn More</a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="features__header">
        <h2>Dreamy by design</h2>
        <p>Every element is crafted to feel soft, ambient, and beautifully out of focus.</p>
      </div>
      <div class="features__grid">
        <div class="feature-card">
          <div class="feature-card__icon" style="background: rgba(200,184,232,0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b6fa0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </div>
          <h3>Ambient Color Fields</h3>
          <p>Large, blurred color gradients create living backgrounds that shift and breathe with gentle motion.</p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon" style="background: rgba(232,196,200,0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4728a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3>Frosted Layers</h3>
          <p>Translucent glass surfaces separate content from the ambient background while maintaining the dreamy atmosphere.</p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon" style="background: rgba(181,204,224,0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5a8bb0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v18M3 12h18"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
          </div>
          <h3>Soft Precision</h3>
          <p>Intentional imprecision meets careful craft. Every blur, every fade, every transition is deliberately designed.</p>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div class="showcase__grid">
        <div class="metric-card">
          <div class="metric-card__number">120px</div>
          <div class="metric-card__label">Maximum blur radius</div>
        </div>
        <div class="metric-card">
          <div class="metric-card__number">0.55</div>
          <div class="metric-card__label">Glass opacity</div>
        </div>
        <div class="metric-card">
          <div class="metric-card__number">28s</div>
          <div class="metric-card__label">Animation cycle</div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta__inner">
        <h2>Ready to blur the lines?</h2>
        <p>Start creating interfaces that feel as warm and immersive as light through a soft lens.</p>
        <a href="#" class="btn btn--primary">Get Started</a>
      </div>
    </section>

    <footer>
      <p>Built with the Chromatic Blur aesthetic. Soft, warm, deliberately out of focus.</p>
    </footer>
  </div>
</body>
</html>
```

---

## Implementation Tips

- **Start with the blur blobs first** -- define your ambient background color fields before any UI work; these set the entire mood of the page and every subsequent design decision should respond to them
- **Use `will-change: transform` on animated blur blobs** -- large blurred elements with CSS animation can cause significant repaint overhead; hinting the browser with `will-change` enables GPU compositing and dramatically improves scroll performance
- **Test glass card contrast early** -- the most common Chromatic Blur accessibility failure is text on frosted glass that shifts readability as the background color field moves beneath it; use the semi-opaque `rgba(255,255,255,0.55)` minimum and verify with a contrast checker against the darkest possible background state
- **Reduce blur complexity on mobile** -- each `filter: blur()` and `backdrop-filter: blur()` is GPU-intensive; on mobile devices, reduce the number of background blobs from 5 to 2-3 and lower blur radii by 30-40% to maintain smooth 60fps scrolling
- **Apply grain at exactly 3-4% opacity** -- the noise texture overlay is essential for preventing the "too-digital" look of pure CSS gradients, but too much grain makes the page feel dirty; 0.035-0.04 opacity strikes the right balance
- **Wrap all animations in `@media (prefers-reduced-motion: no-preference)`** -- the drifting blob animations are core to the aesthetic but must respect user accessibility settings; provide a beautiful static fallback with the blobs in their default positions
- **Use `clamp()` for all headline sizing** -- Chromatic Blur's spacious layout means headlines need to scale gracefully from mobile to desktop; `clamp(2rem, 6vw, 4.5rem)` ensures the dreamy proportions work at every breakpoint
- **Layer colors transparently, never pre-mix** -- the magic of Chromatic Blur comes from overlapping semi-transparent color fields that blend in the browser; pre-mixing colors in a picker produces flat results that lack the luminous depth of true transparency stacking
