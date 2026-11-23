# Sunset Gradient Design Reference

Warm sunset-inspired gradients: orange-to-purple transitions, golden hour palettes.

---

## Overview

The Sunset Gradient aesthetic draws its visual language directly from the fleeting, luminous spectacle of a setting sun -- those brief minutes when the sky transforms into a layered canvas of molten gold, fiery orange, rose pink, and deep violet. In nature, this phenomenon occurs as sunlight passes through increasing layers of atmosphere at low angles, scattering shorter blue wavelengths and allowing longer red, orange, and yellow wavelengths to dominate. The result is a warm-to-cool color progression that humans have found universally captivating for millennia. As a design system, Sunset Gradient translates this natural gradient into digital interfaces that feel warm, inviting, and emotionally resonant.

Unlike flat color schemes or monochromatic palettes, Sunset Gradient relies on smooth, multi-stop color transitions as its defining visual element. The canonical progression moves from warm golden yellows through burning oranges and rosy pinks into dusky purples and twilight blues. This creates a sense of temporal depth -- the feeling that you are witnessing a moment of natural transition frozen in time. The warmth of the palette naturally evokes comfort, nostalgia, and optimism, making it particularly effective for lifestyle brands, travel platforms, wellness applications, creative portfolios, and any product that wants to communicate approachability and emotional warmth without sacrificing sophistication.

On the web, the Sunset Gradient aesthetic gained significant traction in the mid-2010s as CSS gradient support matured and designers sought alternatives to the flat, solid-color interfaces that had dominated since the Material Design and iOS 7 era. The trend accelerated through platforms like Instagram (whose own logo rebrand in 2016 adopted a sunset-inspired gradient), Spotify (which frequently uses warm gradient overlays on album art), and countless landing pages that discovered the conversion power of warm, enveloping hero sections. Modern implementations go beyond simple two-color linear gradients, incorporating radial gradients for sun-like focal points, animated gradient shifts that mimic the passage of golden hour, mesh gradients for organic color blending, and subtle noise textures that prevent color banding and add analog warmth. The aesthetic pairs naturally with clean sans-serif typography, generous whitespace, and photography that features warm ambient light, creating interfaces that feel both contemporary and timeless.

---

## Visual Characteristics

### Core Design Traits

- **Warm-to-cool gradient flow** -- the signature visual move is a seamless transition from golden yellows and fiery oranges through rosy pinks into dusky purples and twilight blues, mirroring the natural sunset spectrum
- **Golden hour color temperature** -- all colors lean toward warmth, even the cooler purple and blue tones carry warm undertones, creating a cohesive ambient glow
- **Multi-stop gradient complexity** -- rather than simple two-color blends, sunset gradients use 3-6 color stops to replicate the layered depth of a real sky at dusk
- **Radial gradient sun focal points** -- radial gradients emanating from a corner or edge simulate the sun as a light source, giving layouts a natural directional warmth
- **Soft, diffused color transitions** -- no hard edges or abrupt color changes; every transition is smooth and feathered, creating an atmospheric, hazy quality
- **Warm ambient glow effects** -- box shadows, text shadows, and overlay elements use warm tones (soft orange, rose, gold) rather than neutral grays
- **Silhouette and backlit imagery** -- photography and illustrations frequently use backlighting or silhouette techniques that reference the sun-behind-subject aesthetic
- **Subtle noise and grain texture** -- a light noise overlay prevents CSS gradient banding and adds the organic, filmic quality of an actual sunset photograph
- **Generous negative space** -- layouts breathe, allowing the gradient to serve as the primary visual element without competing clutter
- **Translucent overlapping layers** -- semi-transparent cards and sections overlap the gradient background, creating depth while maintaining the warm ambient feel
- **Warm metallic accents** -- gold, copper, and rose-gold decorative elements complement the palette and add a sense of premium warmth

### Design Principles

- Let the gradient be the hero; it is the centerpiece, not decoration -- all other elements should support and not compete with it
- Follow the natural color order of a sunset: gold at the light source, transitioning through orange and pink to purple at the edges
- Maintain warmth throughout the entire interface; even neutral elements should lean warm rather than cool gray
- Use smooth, multi-stop gradients rather than two-color blends to achieve naturalistic depth and avoid the "generic gradient" look
- Ensure text remains legible against gradient backgrounds through careful contrast management, solid-color text chips, or strategic text shadow
- Animate sparingly and slowly; gradient shifts should feel like watching the sky change, not a strobe light
- Balance visual warmth with functional clarity; the aesthetic should enhance usability, not obscure it
- Treat whitespace as atmosphere; empty areas of gradient create the same sense of expansive sky as negative space in a landscape photograph

---

## Color Palette

The Sunset Gradient palette is drawn from the actual spectral progression of a setting sun. At the horizon, where sunlight is strongest and most direct, golden yellows and fiery oranges dominate. Moving upward and outward, the light diffuses through rose pinks and coral tones before fading into dusky mauves, deep purples, and finally twilight blue. This palette captures the full arc of that transition, providing warm foundation colors, vivid midtone accents, cool counterpoint tones, and neutral support colors.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Golden Hour** | `#FFCE61` | Primary warm anchor, hero glow source, highlight accents |
| **Amber Sun** | `#F5A623` | Warm secondary, badges, notification indicators |
| **Tangerine Blaze** | `#F76218` | Strong warm accent, call-to-action buttons, active states |
| **Burnt Sunset** | `#E8512F` | Deep warm accent, hover states, emphasis elements |
| **Coral Dusk** | `#EE6C45` | Mid-tone bridge, card accents, secondary buttons |
| **Rose Horizon** | `#E8567F` | Warm-cool transition, featured highlights, tags |
| **Sunset Pink** | `#BF3475` | Rich pink accent, decorative elements, gradient midpoint |
| **Twilight Mauve** | `#9B4DCA` | Cool-warm bridge, secondary headings, accent borders |
| **Dusk Purple** | `#6B3FA0` | Primary cool accent, links, interactive elements |
| **Deep Violet** | `#50366F` | Dark accent, footer backgrounds, elevated surfaces |
| **Twilight Blue** | `#1F214D` | Deepest background, dark sections, contrast base |
| **Warm Cream** | `#FFF8F0` | Primary light background, card surfaces, body base |
| **Peach Whisper** | `#FFECD2` | Soft warm surface, secondary backgrounds, subtle fills |
| **Warm Charcoal** | `#3D2C2C` | Body text on light backgrounds, dark UI text |
| **Starlight White** | `#FFFDF9` | Brightest text on dark gradients, maximum contrast |

### CSS Custom Properties

```css
:root {
  /* Warm foundation */
  --sunset-golden-hour: #ffce61;
  --sunset-amber-sun: #f5a623;
  --sunset-tangerine: #f76218;
  --sunset-burnt: #e8512f;
  --sunset-coral: #ee6c45;

  /* Rose & pink transition */
  --sunset-rose: #e8567f;
  --sunset-pink: #bf3475;

  /* Cool twilight */
  --sunset-mauve: #9b4dca;
  --sunset-purple: #6b3fa0;
  --sunset-deep-violet: #50366f;
  --sunset-twilight: #1f214d;

  /* Neutrals & surfaces */
  --sunset-cream: #fff8f0;
  --sunset-peach-whisper: #ffecd2;
  --sunset-charcoal: #3d2c2c;
  --sunset-starlight: #fffdf9;

  /* Semantic aliases */
  --sunset-bg-primary: var(--sunset-cream);
  --sunset-bg-dark: var(--sunset-twilight);
  --sunset-text-primary: var(--sunset-charcoal);
  --sunset-text-on-dark: var(--sunset-starlight);
  --sunset-accent: var(--sunset-tangerine);
  --sunset-accent-hover: var(--sunset-burnt);

  /* Gradient presets */
  --sunset-gradient-full: linear-gradient(
    135deg,
    var(--sunset-golden-hour) 0%,
    var(--sunset-tangerine) 25%,
    var(--sunset-rose) 50%,
    var(--sunset-purple) 75%,
    var(--sunset-twilight) 100%
  );
  --sunset-gradient-warm: linear-gradient(
    135deg,
    var(--sunset-golden-hour) 0%,
    var(--sunset-tangerine) 50%,
    var(--sunset-rose) 100%
  );
  --sunset-gradient-cool: linear-gradient(
    135deg,
    var(--sunset-rose) 0%,
    var(--sunset-purple) 50%,
    var(--sunset-twilight) 100%
  );
  --sunset-gradient-radial: radial-gradient(
    circle at 30% 70%,
    var(--sunset-golden-hour) 0%,
    var(--sunset-tangerine) 20%,
    var(--sunset-rose) 40%,
    var(--sunset-mauve) 60%,
    var(--sunset-twilight) 100%
  );
}
```

---

## Typography

Sunset Gradient typography should complement, never compete with, the warm gradient backdrop. The ideal typefaces are clean, modern, and slightly rounded -- soft enough to harmonize with the organic color flow but structured enough to maintain legibility against multi-colored backgrounds. Display fonts can be bolder and more expressive for headlines, while body text should remain highly readable with generous line height. Warm, humanist sans-serifs work best as they echo the organic, natural quality of the palette. Serif faces can be used for editorial or luxury contexts, where their refined forms add sophistication to the warmth.

### Recommended Google Fonts

| Font Name | Category | Weight Range | Best Used For |
|-----------|----------|-------------|---------------|
| **Nunito** | Sans-serif | 200-900 | Body text, UI labels, rounded warmth |
| **Raleway** | Sans-serif | 100-900 | Headlines, nav, elegant display |
| **Playfair Display** | Serif | 400-900 | Editorial headlines, luxury contexts |
| **Lora** | Serif | 400-700 | Long-form body, blog posts, elegant reading |
| **Quicksand** | Sans-serif | 300-700 | Friendly headlines, buttons, soft UI |
| **Poppins** | Sans-serif | 100-900 | Modern UI text, versatile all-purpose |
| **Cormorant Garamond** | Serif | 300-700 | Large display, hero text, editorial |
| **Work Sans** | Sans-serif | 100-900 | Body text, data, functional interfaces |

### Font Pairing Recommendations

| Heading Font | Body Font | Mood / Context |
|-------------|-----------|---------------|
| Playfair Display | Nunito | Elegant warmth, editorial luxury |
| Raleway | Lora | Sophisticated storytelling, lifestyle brands |
| Quicksand | Work Sans | Friendly modern, approachable SaaS |
| Cormorant Garamond | Poppins | High contrast editorial, premium products |
| Raleway | Nunito | Clean contemporary, versatile general-purpose |

### CSS Typography Example

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap');

body {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: var(--sunset-charcoal);
  font-size: 1.0625rem;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--sunset-charcoal);
}

h1 {
  font-size: clamp(2.4rem, 5vw + 1rem, 4.2rem);
  font-weight: 300;
  letter-spacing: -0.02em;
}

h2 { font-size: clamp(1.8rem, 3vw + 0.5rem, 2.8rem); }
h3 { font-size: clamp(1.3rem, 2vw + 0.3rem, 1.8rem); }

/* Gradient text for display headings */
.sunset-text {
  background: var(--sunset-gradient-warm);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Text on dark gradient backgrounds */
.on-gradient {
  color: var(--sunset-starlight);
  text-shadow: 0 1px 3px rgba(31, 33, 77, 0.3);
}

/* Small caps for labels and overlines */
.overline {
  font-family: 'Raleway', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sunset-tangerine);
}
```

---

## Layout Principles

- **Directional gradient flow** -- orient primary gradients to flow from the bottom-left (sun source) toward the top-right (sky), creating a natural sense of light direction across the layout
- **Generous padding and breathing room** -- sunset aesthetics thrive in open, airy layouts; use at least 4-8rem section padding and wide content margins to let the gradient backdrop shine
- **Asymmetric hero compositions** -- hero sections should feel panoramic and cinematic; use wide aspect ratios with content offset to one side, allowing the gradient to fill expansive negative space
- **Card-on-gradient layering** -- place semi-transparent or warm-toned cards over the gradient background to create depth; the gradient should peek through or glow around card edges
- **Single-column content with wide gradient margins** -- body content reads best in a constrained column (max 680-720px) centered over a wide gradient canvas, reinforcing the "looking through a window at a sunset" metaphor
- **Radial gradient anchoring** -- use a radial gradient focal point (simulating the sun) in one corner or edge of the viewport to ground the composition and provide directional warmth
- **Warm shadow depth system** -- replace standard gray box-shadows with warm-toned shadows (orange or rose tinted) that maintain the color temperature of the overall design
- **Section transitions via gradient shift** -- rather than hard dividers between sections, shift the gradient hue subtly (gold to orange, orange to pink, pink to purple) as the user scrolls, creating a journey through the sunset
- **Sticky elements with blur backdrop** -- navigation bars and sticky headers should use backdrop-filter: blur with a warm semi-transparent background, allowing the gradient to show through softly
- **Z-depth through warm luminosity** -- elevated elements glow warmer (closer to the sun), while recessed elements shift cooler (twilight), establishing a natural depth hierarchy tied to the color palette
- **Responsive gradient scaling** -- on mobile, simplify multi-stop gradients to fewer stops and shift radial gradient focal points to center, maintaining the effect without banding on smaller screens

---

## CSS / Design Techniques

### Hero Section with Sunset Gradient

```css
.sunset-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse at 30% 80%,
      rgba(255, 206, 97, 0.6) 0%,
      rgba(247, 98, 24, 0.4) 25%,
      transparent 50%
    ),
    linear-gradient(
      160deg,
      #1f214d 0%,
      #50366f 20%,
      #9b4dca 35%,
      #bf3475 48%,
      #e8567f 58%,
      #ee6c45 68%,
      #f76218 80%,
      #ffce61 100%
    );
  color: var(--sunset-starlight);
}

.sunset-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
  pointer-events: none;
  z-index: 1;
}

.sunset-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 720px;
  padding: 2rem;
}

.sunset-hero__title {
  font-size: clamp(2.8rem, 6vw + 1rem, 5rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 12px rgba(31, 33, 77, 0.35);
}

.sunset-hero__subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 300;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}
```

### Card Component

```css
.sunset-card {
  background: rgba(255, 248, 240, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 206, 97, 0.25);
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 4px 16px rgba(232, 81, 47, 0.08),
    0 1px 4px rgba(191, 52, 117, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sunset-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 32px rgba(232, 81, 47, 0.14),
    0 4px 12px rgba(191, 52, 117, 0.1);
}

.sunset-card__tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sunset-starlight);
  background: var(--sunset-gradient-warm);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
}

.sunset-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--sunset-charcoal);
  margin-bottom: 0.75rem;
}

.sunset-card__body {
  font-size: 0.95rem;
  color: #5c4a4a;
  line-height: 1.7;
}

/* Dark variant for cards on light backgrounds */
.sunset-card--dark {
  background: rgba(31, 33, 77, 0.8);
  border-color: rgba(155, 77, 202, 0.3);
  box-shadow:
    0 4px 16px rgba(31, 33, 77, 0.3),
    0 0 40px rgba(247, 98, 24, 0.05);
}

.sunset-card--dark .sunset-card__title {
  color: var(--sunset-starlight);
}

.sunset-card--dark .sunset-card__body {
  color: rgba(255, 253, 249, 0.75);
}
```

### Button Styles

```css
/* Primary gradient button */
.sunset-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--sunset-starlight);
  background: linear-gradient(
    135deg,
    var(--sunset-tangerine) 0%,
    var(--sunset-rose) 50%,
    var(--sunset-mauve) 100%
  );
  background-size: 200% 200%;
  background-position: 0% 50%;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  box-shadow:
    0 4px 16px rgba(247, 98, 24, 0.3),
    0 1px 4px rgba(191, 52, 117, 0.2);
  transition: background-position 0.4s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

.sunset-btn:hover {
  background-position: 100% 50%;
  box-shadow:
    0 6px 24px rgba(247, 98, 24, 0.4),
    0 2px 8px rgba(191, 52, 117, 0.25);
  transform: translateY(-1px);
}

.sunset-btn:active {
  transform: translateY(0);
  box-shadow:
    0 2px 8px rgba(247, 98, 24, 0.3),
    0 1px 3px rgba(191, 52, 117, 0.2);
}

/* Secondary outline button */
.sunset-btn--outline {
  background: transparent;
  border: 2px solid var(--sunset-tangerine);
  color: var(--sunset-tangerine);
  box-shadow: none;
}

.sunset-btn--outline:hover {
  background: var(--sunset-tangerine);
  color: var(--sunset-starlight);
  box-shadow: 0 4px 16px rgba(247, 98, 24, 0.3);
}

/* Ghost button for on-gradient contexts */
.sunset-btn--ghost {
  background: rgba(255, 253, 249, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 253, 249, 0.3);
  color: var(--sunset-starlight);
  box-shadow: none;
}

.sunset-btn--ghost:hover {
  background: rgba(255, 253, 249, 0.25);
  border-color: rgba(255, 253, 249, 0.5);
  box-shadow: 0 4px 16px rgba(255, 206, 97, 0.15);
}
```

### Navigation Bar

```css
.sunset-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(31, 33, 77, 0.6);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid rgba(255, 206, 97, 0.1);
  transition: background 0.3s ease;
}

.sunset-nav--scrolled {
  background: rgba(31, 33, 77, 0.85);
  border-bottom-color: rgba(255, 206, 97, 0.2);
}

.sunset-nav__brand {
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--sunset-starlight);
  text-decoration: none;
  background: linear-gradient(135deg, var(--sunset-golden-hour), var(--sunset-tangerine));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sunset-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sunset-nav__link {
  font-family: 'Raleway', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255, 253, 249, 0.75);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.sunset-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--sunset-gradient-warm);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.sunset-nav__link:hover {
  color: var(--sunset-starlight);
}

.sunset-nav__link:hover::after {
  width: 100%;
}

.sunset-nav__link--active {
  color: var(--sunset-golden-hour);
}

.sunset-nav__link--active::after {
  width: 100%;
}
```

### Animated Gradient Background

```css
.sunset-animated-bg {
  background: linear-gradient(
    -45deg,
    #ffce61,
    #f76218,
    #e8567f,
    #bf3475,
    #9b4dca,
    #50366f,
    #1f214d
  );
  background-size: 400% 400%;
  animation: sunset-shift 20s ease infinite;
}

@keyframes sunset-shift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Animated radial glow (simulates sun movement) */
.sunset-sun-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--sun-x, 30%) var(--sun-y, 70%),
    rgba(255, 206, 97, 0.5) 0%,
    rgba(247, 98, 24, 0.2) 30%,
    transparent 60%
  );
  animation: sun-drift 30s ease-in-out infinite;
  pointer-events: none;
}

@keyframes sun-drift {
  0%   { --sun-x: 20%; --sun-y: 80%; }
  25%  { --sun-x: 35%; --sun-y: 65%; }
  50%  { --sun-x: 50%; --sun-y: 55%; }
  75%  { --sun-x: 65%; --sun-y: 60%; }
  100% { --sun-x: 20%; --sun-y: 80%; }
}
```

### Section Divider

```css
.sunset-divider {
  width: 100%;
  height: 4px;
  border: none;
  border-radius: 2px;
  background: var(--sunset-gradient-warm);
  opacity: 0.6;
  margin: 3rem auto;
  max-width: 200px;
}

/* Wave-style section transition */
.sunset-wave-divider {
  position: relative;
  height: 80px;
  overflow: hidden;
}

.sunset-wave-divider svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
}

.sunset-wave-divider path {
  fill: var(--sunset-cream);
}
```

### Gradient Text and Decorative Elements

```css
/* Gradient text */
.sunset-gradient-text {
  background: linear-gradient(
    135deg,
    var(--sunset-golden-hour) 0%,
    var(--sunset-tangerine) 30%,
    var(--sunset-rose) 60%,
    var(--sunset-mauve) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Warm glow around elements */
.sunset-glow {
  box-shadow:
    0 0 20px rgba(255, 206, 97, 0.15),
    0 0 60px rgba(247, 98, 24, 0.08),
    0 0 100px rgba(191, 52, 117, 0.04);
}

/* Decorative gradient circle (sun motif) */
.sunset-sun-motif {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--sunset-golden-hour) 0%,
    var(--sunset-tangerine) 40%,
    var(--sunset-rose) 70%,
    transparent 100%
  );
  filter: blur(40px);
  opacity: 0.5;
  position: absolute;
  pointer-events: none;
}

/* Gradient border effect */
.sunset-gradient-border {
  position: relative;
  border-radius: 16px;
  padding: 2px;
  background: var(--sunset-gradient-warm);
}

.sunset-gradient-border__inner {
  background: var(--sunset-cream);
  border-radius: 14px;
  padding: 2rem;
}
```

### Form Elements

```css
.sunset-input {
  width: 100%;
  padding: 0.875rem 1.25rem;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: var(--sunset-charcoal);
  background: rgba(255, 248, 240, 0.9);
  border: 2px solid rgba(238, 108, 69, 0.2);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.sunset-input::placeholder {
  color: rgba(61, 44, 44, 0.4);
}

.sunset-input:focus {
  border-color: var(--sunset-tangerine);
  box-shadow: 0 0 0 4px rgba(247, 98, 24, 0.1);
}

.sunset-input--dark {
  background: rgba(31, 33, 77, 0.4);
  border-color: rgba(155, 77, 202, 0.3);
  color: var(--sunset-starlight);
}

.sunset-input--dark::placeholder {
  color: rgba(255, 253, 249, 0.35);
}

.sunset-input--dark:focus {
  border-color: var(--sunset-mauve);
  box-shadow: 0 0 0 4px rgba(155, 77, 202, 0.15);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use multi-stop gradients** -- three to six color stops create the rich, layered depth of a real sunset; simple two-color blends look flat and generic by comparison
- **Do add subtle noise texture** -- a 3-5% opacity noise overlay prevents visible CSS gradient banding and adds the organic, filmic quality that separates premium sunset designs from amateur ones
- **Do maintain a consistent light source direction** -- pick one corner or edge as the "sun" and orient all gradients, shadows, and highlights relative to it for visual coherence
- **Do use warm-tinted shadows** -- replace default gray `box-shadow` values with warm hues (soft orange, rose, mauve) that maintain the color temperature of the overall design
- **Do ensure text contrast on gradients** -- use text-shadow for subtle lift, solid-color text chips behind labels, or semi-transparent background overlays to guarantee readability across all gradient regions
- **Do embrace generous whitespace** -- the gradient itself is the decoration; crowded layouts fight against the atmospheric quality that makes this aesthetic effective
- **Do test gradients across screen sizes** -- gradient banding is more visible on some displays; test on both high-DPI and standard screens, and adjust stop positions as needed
- **Do use radial gradients for focal warmth** -- a radial gradient simulating the sun as a light source adds naturalistic depth that linear gradients alone cannot achieve

### Don'ts

- **Don't use pure cool grays** -- neutral grays break the warm immersion; tint all grays toward warm brown, mauve, or peach to stay within the sunset color temperature
- **Don't create harsh gradient transitions** -- abrupt color jumps look like banding errors, not design choices; always ensure smooth interpolation between stops
- **Don't overload with competing warm accents** -- while the palette is inherently warm, using too many saturated warm colors simultaneously creates visual fatigue; vary intensity and saturation
- **Don't place small text directly on busy gradient regions** -- gradients with multiple vivid stops create uneven contrast; body text needs a solid or semi-solid surface behind it
- **Don't animate gradients too quickly** -- rapid color cycling destroys the meditative, golden-hour mood; keep animation durations above 15 seconds for background shifts
- **Don't forget dark mode considerations** -- sunset gradients work on both light and dark bases, but the palette balance shifts; darker bases need more luminous gradient stops
- **Don't use flat, single-color backgrounds alongside gradient sections** -- the contrast between a rich gradient section and a plain flat section is jarring; use subtle warm tints or gentle gradients even in "quiet" areas
- **Don't ignore color accessibility** -- warm reds and oranges on warm backgrounds can fail WCAG contrast requirements; test all text/background combinations and adjust opacity or value as needed

---

## Related Aesthetics

| Aesthetic | Relationship | Key Difference |
|-----------|-------------|---------------|
| **Aurora Gradient** | Sister gradient aesthetic | Aurora uses cool tones (green, blue, purple); Sunset uses warm tones (gold, orange, pink) |
| **Vaporwave** | Shared purple/pink spectrum | Vaporwave is retro-ironic with 80s/90s nostalgia; Sunset is organic and nature-inspired |
| **Glassmorphism** | Complementary layering technique | Glassmorphism provides the translucent card style; Sunset provides the gradient canvas beneath |
| **Dopamine Design** | Overlapping warm palettes | Dopamine uses bold, saturated primaries for energy; Sunset uses flowing gradients for calm warmth |
| **Bright Tertiaries** | Adjacent color approach | Bright Tertiaries pairs unexpected tertiary hues; Sunset follows the natural spectral order of dusk |
| **Earth Tones** | Shared warmth, different saturation | Earth Tones are muted and grounded; Sunset is vibrant and atmospheric |
| **Dark Mode Neon** | Contrast aesthetic | Both use glowing color on dark backgrounds; Neon is electric and synthetic, Sunset is organic and warm |
| **Flat Design** | Historical predecessor | Flat Design's solid-color simplicity often serves as the starting point that Sunset Gradient enriches with depth |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sunset Gradient -- Quick-Start Template</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />

  <style>
    /* ============================================
       CSS CUSTOM PROPERTIES
       ============================================ */
    :root {
      /* Warm foundation */
      --sunset-golden-hour: #ffce61;
      --sunset-amber-sun: #f5a623;
      --sunset-tangerine: #f76218;
      --sunset-burnt: #e8512f;
      --sunset-coral: #ee6c45;

      /* Rose & pink transition */
      --sunset-rose: #e8567f;
      --sunset-pink: #bf3475;

      /* Cool twilight */
      --sunset-mauve: #9b4dca;
      --sunset-purple: #6b3fa0;
      --sunset-deep-violet: #50366f;
      --sunset-twilight: #1f214d;

      /* Neutrals */
      --sunset-cream: #fff8f0;
      --sunset-peach-whisper: #ffecd2;
      --sunset-charcoal: #3d2c2c;
      --sunset-starlight: #fffdf9;

      /* Gradient presets */
      --sunset-gradient-full: linear-gradient(
        135deg,
        var(--sunset-golden-hour) 0%,
        var(--sunset-tangerine) 25%,
        var(--sunset-rose) 50%,
        var(--sunset-purple) 75%,
        var(--sunset-twilight) 100%
      );
      --sunset-gradient-warm: linear-gradient(
        135deg,
        var(--sunset-golden-hour) 0%,
        var(--sunset-tangerine) 50%,
        var(--sunset-rose) 100%
      );
      --sunset-gradient-cool: linear-gradient(
        135deg,
        var(--sunset-rose) 0%,
        var(--sunset-purple) 50%,
        var(--sunset-twilight) 100%
      );
    }

    /* ============================================
       RESET & BASE
       ============================================ */
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      line-height: 1.7;
      color: var(--sunset-charcoal);
      background: var(--sunset-cream);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4 {
      font-family: 'Raleway', sans-serif;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    a {
      color: var(--sunset-tangerine);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--sunset-burnt);
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
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2.5rem;
      background: rgba(31, 33, 77, 0.55);
      backdrop-filter: blur(16px) saturate(1.4);
      -webkit-backdrop-filter: blur(16px) saturate(1.4);
      border-bottom: 1px solid rgba(255, 206, 97, 0.1);
      transition: background 0.3s ease;
    }

    .nav__brand {
      font-family: 'Raleway', sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      text-decoration: none;
      background: linear-gradient(135deg, var(--sunset-golden-hour), var(--sunset-tangerine));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav__links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav__link {
      font-family: 'Raleway', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      color: rgba(255, 253, 249, 0.75);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav__link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--sunset-gradient-warm);
      border-radius: 1px;
      transition: width 0.3s ease;
    }

    .nav__link:hover {
      color: var(--sunset-starlight);
    }

    .nav__link:hover::after {
      width: 100%;
    }

    /* ============================================
       HERO
       ============================================ */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      background:
        radial-gradient(
          ellipse at 30% 80%,
          rgba(255, 206, 97, 0.55) 0%,
          rgba(247, 98, 24, 0.35) 25%,
          transparent 50%
        ),
        linear-gradient(
          160deg,
          #1f214d 0%,
          #50366f 18%,
          #9b4dca 32%,
          #bf3475 46%,
          #e8567f 56%,
          #ee6c45 68%,
          #f76218 80%,
          #ffce61 100%
        );
      background-size: 100% 100%, 200% 200%;
      animation: hero-gradient-drift 25s ease-in-out infinite;
    }

    @keyframes hero-gradient-drift {
      0%   { background-position: center, 0% 50%; }
      50%  { background-position: center, 100% 50%; }
      100% { background-position: center, 0% 50%; }
    }

    /* Noise overlay */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 256px 256px;
      pointer-events: none;
      z-index: 1;
    }

    .hero__content {
      position: relative;
      z-index: 2;
      max-width: 740px;
      padding: 2rem;
    }

    .hero__overline {
      font-family: 'Raleway', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--sunset-golden-hour);
      margin-bottom: 1.25rem;
    }

    .hero__title {
      font-size: clamp(2.6rem, 6vw + 1rem, 5rem);
      font-weight: 300;
      color: var(--sunset-starlight);
      line-height: 1.08;
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 16px rgba(31, 33, 77, 0.3);
    }

    .hero__title strong {
      font-weight: 700;
    }

    .hero__subtitle {
      font-size: clamp(1.05rem, 2vw, 1.35rem);
      color: rgba(255, 253, 249, 0.88);
      line-height: 1.65;
      max-width: 600px;
      margin: 0 auto 2.5rem;
    }

    .hero__actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.875rem 2rem;
      font-family: 'Raleway', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.35s ease;
    }

    .btn--primary {
      color: var(--sunset-starlight);
      background: linear-gradient(
        135deg,
        var(--sunset-tangerine) 0%,
        var(--sunset-rose) 50%,
        var(--sunset-mauve) 100%
      );
      background-size: 200% 200%;
      background-position: 0% 50%;
      box-shadow:
        0 4px 16px rgba(247, 98, 24, 0.3),
        0 1px 4px rgba(191, 52, 117, 0.2);
    }

    .btn--primary:hover {
      background-position: 100% 50%;
      transform: translateY(-2px);
      box-shadow:
        0 8px 28px rgba(247, 98, 24, 0.4),
        0 2px 8px rgba(191, 52, 117, 0.25);
    }

    .btn--ghost {
      color: var(--sunset-starlight);
      background: rgba(255, 253, 249, 0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 253, 249, 0.3);
      box-shadow: none;
    }

    .btn--ghost:hover {
      background: rgba(255, 253, 249, 0.22);
      border-color: rgba(255, 253, 249, 0.5);
      transform: translateY(-2px);
    }

    .btn--outline {
      color: var(--sunset-tangerine);
      background: transparent;
      border: 2px solid var(--sunset-tangerine);
    }

    .btn--outline:hover {
      color: var(--sunset-starlight);
      background: var(--sunset-tangerine);
      box-shadow: 0 4px 16px rgba(247, 98, 24, 0.3);
      transform: translateY(-2px);
    }

    /* ============================================
       FEATURES SECTION
       ============================================ */
    .features {
      padding: 6rem 2rem;
      background: var(--sunset-cream);
    }

    .features__header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    .features__overline {
      font-family: 'Raleway', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--sunset-tangerine);
      margin-bottom: 0.75rem;
    }

    .features__title {
      font-size: clamp(1.8rem, 3vw + 0.5rem, 2.8rem);
      font-weight: 700;
      color: var(--sunset-charcoal);
      margin-bottom: 1rem;
    }

    .features__description {
      font-size: 1.05rem;
      color: #6b5555;
      line-height: 1.7;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1120px;
      margin: 0 auto;
    }

    /* ============================================
       CARDS
       ============================================ */
    .card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 206, 97, 0.2);
      border-radius: 16px;
      padding: 2rem;
      box-shadow:
        0 4px 16px rgba(232, 81, 47, 0.06),
        0 1px 4px rgba(191, 52, 117, 0.04);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow:
        0 16px 40px rgba(232, 81, 47, 0.12),
        0 4px 12px rgba(191, 52, 117, 0.08);
    }

    .card__icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: var(--sunset-gradient-warm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .card__title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--sunset-charcoal);
      margin-bottom: 0.75rem;
    }

    .card__body {
      font-size: 0.95rem;
      color: #6b5555;
      line-height: 1.7;
    }

    /* ============================================
       SHOWCASE (dark gradient section)
       ============================================ */
    .showcase {
      position: relative;
      padding: 6rem 2rem;
      overflow: hidden;
      background:
        radial-gradient(
          ellipse at 70% 30%,
          rgba(155, 77, 202, 0.3) 0%,
          transparent 50%
        ),
        linear-gradient(
          180deg,
          var(--sunset-twilight) 0%,
          var(--sunset-deep-violet) 50%,
          #2a1a3e 100%
        );
      color: var(--sunset-starlight);
    }

    /* Decorative sun glow */
    .showcase::after {
      content: '';
      position: absolute;
      bottom: -100px;
      left: 20%;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(255, 206, 97, 0.2) 0%,
        rgba(247, 98, 24, 0.1) 40%,
        transparent 70%
      );
      filter: blur(60px);
      pointer-events: none;
    }

    .showcase__inner {
      position: relative;
      z-index: 1;
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .showcase__title {
      font-size: clamp(1.8rem, 3vw + 0.5rem, 2.8rem);
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    .showcase__text {
      font-size: 1.05rem;
      color: rgba(255, 253, 249, 0.78);
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .showcase__visual {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .showcase__swatch-row {
      display: flex;
      gap: 0.75rem;
    }

    .showcase__swatch {
      flex: 1;
      height: 64px;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }

    .showcase__swatch:hover {
      transform: scale(1.08);
    }

    /* ============================================
       TESTIMONIAL / QUOTE
       ============================================ */
    .quote-section {
      padding: 5rem 2rem;
      background: var(--sunset-peach-whisper);
      text-align: center;
    }

    .quote-section__inner {
      max-width: 680px;
      margin: 0 auto;
    }

    .quote-section__text {
      font-family: 'Raleway', sans-serif;
      font-size: clamp(1.3rem, 2.5vw, 1.8rem);
      font-weight: 300;
      font-style: italic;
      color: var(--sunset-charcoal);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .quote-section__attribution {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--sunset-tangerine);
    }

    /* ============================================
       CONTACT / CTA SECTION
       ============================================ */
    .cta {
      position: relative;
      padding: 6rem 2rem;
      text-align: center;
      overflow: hidden;
      background:
        radial-gradient(
          ellipse at 50% 100%,
          rgba(255, 206, 97, 0.4) 0%,
          rgba(247, 98, 24, 0.2) 30%,
          transparent 60%
        ),
        linear-gradient(
          0deg,
          var(--sunset-golden-hour) 0%,
          var(--sunset-tangerine) 20%,
          var(--sunset-rose) 45%,
          var(--sunset-mauve) 70%,
          var(--sunset-twilight) 100%
        );
      color: var(--sunset-starlight);
    }

    .cta__inner {
      position: relative;
      z-index: 1;
      max-width: 600px;
      margin: 0 auto;
    }

    .cta__title {
      font-size: clamp(1.8rem, 3vw + 0.5rem, 2.6rem);
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 12px rgba(31, 33, 77, 0.25);
    }

    .cta__text {
      font-size: 1.1rem;
      color: rgba(255, 253, 249, 0.85);
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }

    .cta__form {
      display: flex;
      gap: 0.75rem;
      max-width: 480px;
      margin: 0 auto;
    }

    .cta__input {
      flex: 1;
      padding: 0.875rem 1.25rem;
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      color: var(--sunset-charcoal);
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 100px;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .cta__input::placeholder {
      color: rgba(61, 44, 44, 0.5);
    }

    .cta__input:focus {
      border-color: var(--sunset-golden-hour);
      box-shadow: 0 0 0 4px rgba(255, 206, 97, 0.2);
    }

    /* ============================================
       FOOTER
       ============================================ */
    .footer {
      padding: 3rem 2rem;
      background: var(--sunset-twilight);
      color: rgba(255, 253, 249, 0.6);
      text-align: center;
      font-size: 0.85rem;
    }

    .footer a {
      color: var(--sunset-golden-hour);
    }

    .footer a:hover {
      color: var(--sunset-tangerine);
    }

    .footer__links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      list-style: none;
      margin-bottom: 1.25rem;
    }

    /* ============================================
       UTILITIES
       ============================================ */
    .gradient-text {
      background: var(--sunset-gradient-warm);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 768px) {
      .nav {
        padding: 0.875rem 1.25rem;
      }

      .nav__links {
        gap: 1.25rem;
      }

      .nav__link {
        font-size: 0.8rem;
      }

      .hero {
        min-height: 90vh;
      }

      .features__grid {
        grid-template-columns: 1fr;
      }

      .showcase__inner {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }

      .cta__form {
        flex-direction: column;
      }

      .cta__input {
        width: 100%;
      }
    }
  </style>
</head>

<body>
  <!-- ==========================================
       NAVIGATION
       ========================================== -->
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <a href="#" class="nav__brand">SunsetUI</a>
    <ul class="nav__links">
      <li><a href="#features" class="nav__link">Features</a></li>
      <li><a href="#showcase" class="nav__link">Palette</a></li>
      <li><a href="#quote" class="nav__link">About</a></li>
      <li><a href="#cta" class="nav__link">Contact</a></li>
    </ul>
  </nav>

  <!-- ==========================================
       HERO
       ========================================== -->
  <header class="hero">
    <div class="hero__content">
      <p class="hero__overline">Sunset Gradient Aesthetic</p>
      <h1 class="hero__title">
        Design with the<br />
        warmth of <strong>golden hour</strong>
      </h1>
      <p class="hero__subtitle">
        Capture the fleeting beauty of dusk -- warm amber fading
        through coral and rose into deep twilight purple. Every
        interface element glows with the natural radiance of a
        setting sun.
      </p>
      <div class="hero__actions">
        <a href="#features" class="btn btn--primary">Explore the Palette</a>
        <a href="#showcase" class="btn btn--ghost">See Examples</a>
      </div>
    </div>
  </header>

  <!-- ==========================================
       FEATURES
       ========================================== -->
  <section class="features" id="features">
    <div class="features__header">
      <p class="features__overline">Core Principles</p>
      <h2 class="features__title">Warmth in Every Pixel</h2>
      <p class="features__description">
        The Sunset Gradient aesthetic translates nature's most
        breathtaking color show into digital interfaces that feel
        inviting, organic, and emotionally warm.
      </p>
    </div>
    <div class="features__grid">
      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </div>
        <h3 class="card__title">Golden Hour Palette</h3>
        <p class="card__body">
          Every color is drawn from the natural spectrum of a setting
          sun -- from molten gold through fiery orange to dusky
          purple. The warmth is authentic and scientifically grounded.
        </p>
      </article>
      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <h3 class="card__title">Multi-Stop Gradients</h3>
        <p class="card__body">
          Rich, layered gradients with three to six color stops
          create the depth and complexity of a real sky at dusk.
          No flat two-color shortcuts here.
        </p>
      </article>
      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h3 class="card__title">Warm Depth System</h3>
        <p class="card__body">
          Elevated elements glow warmer; recessed elements shift
          cooler. Shadows are tinted with rose and amber, never
          neutral gray. Every layer reinforces the sunset atmosphere.
        </p>
      </article>
    </div>
  </section>

  <!-- ==========================================
       SHOWCASE (dark section with palette)
       ========================================== -->
  <section class="showcase" id="showcase">
    <div class="showcase__inner">
      <div class="showcase__copy">
        <h2 class="showcase__title">
          A Palette Born from <span class="gradient-text">Nature</span>
        </h2>
        <p class="showcase__text">
          From the luminous gold of the horizon through the burning
          coral of mid-sky to the deep violet of approaching night,
          every tone in this system has a role. Warm colors anchor
          and attract; cool twilight tones provide depth and contrast.
        </p>
        <a href="#cta" class="btn btn--primary">Start Building</a>
      </div>
      <div class="showcase__visual">
        <div class="showcase__swatch-row">
          <div class="showcase__swatch" style="background: #ffce61;" title="Golden Hour"></div>
          <div class="showcase__swatch" style="background: #f5a623;" title="Amber Sun"></div>
          <div class="showcase__swatch" style="background: #f76218;" title="Tangerine Blaze"></div>
          <div class="showcase__swatch" style="background: #e8512f;" title="Burnt Sunset"></div>
        </div>
        <div class="showcase__swatch-row">
          <div class="showcase__swatch" style="background: #ee6c45;" title="Coral Dusk"></div>
          <div class="showcase__swatch" style="background: #e8567f;" title="Rose Horizon"></div>
          <div class="showcase__swatch" style="background: #bf3475;" title="Sunset Pink"></div>
          <div class="showcase__swatch" style="background: #9b4dca;" title="Twilight Mauve"></div>
        </div>
        <div class="showcase__swatch-row">
          <div class="showcase__swatch" style="background: #6b3fa0;" title="Dusk Purple"></div>
          <div class="showcase__swatch" style="background: #50366f;" title="Deep Violet"></div>
          <div class="showcase__swatch" style="background: #1f214d;" title="Twilight Blue"></div>
          <div class="showcase__swatch" style="background: #3d2c2c;" title="Warm Charcoal"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================
       QUOTE
       ========================================== -->
  <section class="quote-section" id="quote">
    <div class="quote-section__inner">
      <p class="quote-section__text">
        "Every sunset brings the promise of a new dawn. In design
        as in nature, warm gradients create the emotional bridge
        between what was and what is coming."
      </p>
      <p class="quote-section__attribution">
        -- Inspired by Ralph Waldo Emerson
      </p>
    </div>
  </section>

  <!-- ==========================================
       CTA
       ========================================== -->
  <section class="cta" id="cta">
    <div class="cta__inner">
      <h2 class="cta__title">Ready to Design with Warmth?</h2>
      <p class="cta__text">
        Subscribe for sunset-inspired design resources, gradient
        presets, and component libraries delivered to your inbox.
      </p>
      <form class="cta__form" action="#" method="post">
        <label for="email" class="sr-only">Email address</label>
        <input
          type="email"
          id="email"
          class="cta__input"
          placeholder="you@example.com"
          required
        />
        <button type="submit" class="btn btn--primary">Subscribe</button>
      </form>
    </div>
  </section>

  <!-- ==========================================
       FOOTER
       ========================================== -->
  <footer class="footer">
    <ul class="footer__links">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Figma</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">License</a></li>
    </ul>
    <p>Sunset Gradient Quick-Start Template. Built for warm, inviting interfaces.</p>
  </footer>
</body>
</html>
```

---

## Implementation Tips

- **Prevent gradient banding** -- add a subtle noise texture overlay at 3-5% opacity on top of all gradient surfaces; CSS gradients rendered by browsers are limited to 8-bit color channels and will show visible bands on large, smooth transitions without this technique
- **Use `background-size` larger than 100% for animation** -- set `background-size: 200% 200%` or `400% 400%` and animate `background-position` to create smooth, continuous gradient drift without jarring resets; keep duration above 15 seconds for a natural golden-hour feel
- **Warm your neutrals consistently** -- every gray in the system should be mixed with a warm base; pure `#808080` or `#333333` will read as cold spots against the warm palette; shift toward `#6b5555` or `#3d2c2c` for warm alternatives
- **Leverage `backdrop-filter` for glass layers** -- cards and navigation bars placed over gradient backgrounds benefit from `backdrop-filter: blur(12px) saturate(1.3)`, which creates the warm, hazy atmospheric quality of looking through heat shimmer at golden hour
- **Test text contrast at every gradient stop** -- a gradient that passes WCAG AA at one end may fail at another; use tools like the WebAIM contrast checker at multiple sample points along the gradient, and consider adding a semi-transparent scrim behind text blocks
- **Provide a fallback solid color** -- always declare a solid `background-color` before the `background` gradient property so that older browsers or environments with gradients disabled still display a warm, on-brand color
- **Use CSS custom properties for theme switching** -- by defining the entire palette as custom properties, you can offer both a light-base variant (warm cream backgrounds, gradient accents) and a dark-base variant (twilight backgrounds, luminous gradient overlays) with a single class swap on `<html>`
- **Optimize gradient performance on mobile** -- complex multi-stop gradients with blur filters and animations can cause jank on lower-powered devices; reduce stop count, simplify blur radius, and use `will-change: background-position` or `transform: translateZ(0)` to promote gradient layers to the GPU
