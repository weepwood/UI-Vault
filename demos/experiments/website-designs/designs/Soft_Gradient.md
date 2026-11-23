# Soft Gradient Design Reference

## Overview

Soft Gradient is a contemporary design aesthetic built around **subtle, dreamy color transitions, mesh gradient backgrounds, aurora-inspired luminosity, and gentle chromatic blending** that creates interfaces feeling almost painted by light. Rather than the hard-edged, saturated gradients of earlier web eras, Soft Gradient embraces organic, painterly transitions between colors -- muted teal flowing into soft coral, lavender dissolving into rose, peach bleeding into sky blue -- producing compositions that feel atmospheric, calming, and effortlessly modern. The aesthetic draws direct inspiration from natural light phenomena: the diffused glow of sunrise and sunset, the shimmering curtains of the aurora borealis, the soft color shifts in clouds at golden hour, and the way light refracts through fog or mist.

In web and UI design, Soft Gradient translates into **layered radial gradients that simulate mesh blends, large atmospheric hero sections with slow-moving color fields, frosted-glass panels floating over luminous backgrounds, and typography that either sits crisply against these dreamy backdrops or itself carries subtle gradient fills**. Unlike flat design's rigid solidity or glassmorphism's emphasis on transparency mechanics, Soft Gradient treats the entire canvas as a living, breathing color field. Cards and containers emerge gently from the background through subtle elevation and soft shadows rather than hard borders. Buttons glow with gentle color shifts on hover. Navigation bars carry whisper-thin translucency that lets the gradient beneath them breathe through.

The aesthetic has gained significant traction in 2024-2025 design trends as part of a broader shift toward what designers call "neo-pastel" palettes -- colors that combine the calmness of traditional pastels with unexpected vibrancy and intentional color tension. Mesh gradient tools, CSS blur techniques, and modern browser support for complex layered backgrounds have made these effects achievable in pure CSS without image dependencies. The result is a design language that communicates **serenity, sophistication, warmth, and approachability** -- making it particularly well-suited for wellness brands, creative portfolios, SaaS landing pages, fintech products, and any interface that wants to feel premium without being cold or corporate.

---

## Visual Characteristics

### Core Design Traits

- **Mesh gradient backgrounds**: Multiple overlapping radial gradients positioned at different coordinates, blurred together to create organic, multi-directional color blends that feel hand-painted rather than computed
- **Aurora-inspired color fields**: Undulating bands of soft color that reference the northern lights, often animated with slow, breathing keyframe movements across the viewport
- **Neo-pastel color palettes**: Colors that blend traditional pastel softness with unexpected warmth and saturation -- muted but not washed out, gentle but not lifeless
- **Frosted glass containers**: Cards, modals, and navigation bars use backdrop-filter blur over gradient backgrounds, creating depth through translucency rather than shadow alone
- **Soft, diffused shadows**: Box shadows use large spread values and low opacity with color tinting (not pure black), creating a glow-like elevation effect
- **Generous whitespace with color atmosphere**: Layouts breathe through ample spacing, but "whitespace" is not white -- it carries gradient color, making empty areas feel intentional and luminous
- **Rounded geometry everywhere**: Border radii of 16px-32px on cards, fully rounded pill buttons, and soft circular accents reinforce the gentle, approachable character
- **Subtle grain texture overlay**: A fine noise texture at very low opacity (2-5%) layered over gradients adds tactile quality and prevents banding artifacts in smooth color transitions
- **Fluid, organic shapes**: Decorative blob shapes and wavy dividers replace hard geometric lines, echoing the formless nature of the gradients themselves
- **Light-mode dominance with warm undertones**: The aesthetic strongly favors light backgrounds with warm gradient accents, though dark-mode variants use deep navy or charcoal with luminous gradient overlays
- **Gradient text treatments on headings**: Display typography occasionally carries gradient fills via background-clip, used sparingly on hero headlines or key feature callouts

### Design Principles

- **Softness over sharpness**: Every edge, shadow, and transition should feel gentle; nothing should jolt or jar the viewer
- **Color as atmosphere, not decoration**: Gradients are not applied to individual elements as paint; they establish the environmental mood of the entire composition
- **Intentional subtlety**: Restraint is key -- gradients should feel like natural light, not a color explosion; two or three harmonious hues per gradient, not a full rainbow
- **Depth through translucency**: Hierarchy is established by layering translucent surfaces over gradient fields rather than by stark color contrast or heavy borders
- **Breathing motion**: When animated, gradients move slowly and continuously, like clouds or water, never snapping or bouncing
- **Warmth and approachability**: The aesthetic communicates human warmth; even blue-dominant palettes should carry enough warm undertone to feel inviting rather than clinical
- **Progressive disclosure of complexity**: At first glance, the design looks simple and calm; closer inspection reveals layered gradients, subtle textures, and thoughtful color relationships

---

## Color Palette

Soft Gradient palettes draw from sunrise/sunset spectra, aurora phenomena, and neo-pastel blending. Colors are chosen for their ability to transition smoothly into one another without creating muddy midpoints. Each hue should feel luminous and airy, as if backlit.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Dawn Rose | `#F4A0C0` | Primary warm accent, hero gradient anchor, CTA button base |
| Petal Pink | `#FDDDE6` | Soft background tint, card surfaces, light gradient endpoint |
| Sunset Peach | `#FFCCB6` | Warm gradient midpoint, secondary accent, hover glow |
| Golden Haze | `#FFE0A3` | Warm highlight, gradient accent, badge backgrounds |
| Aurora Mint | `#A8E6CF` | Cool-tone balance, success states, fresh accent |
| Soft Teal | `#88D8C0` | Secondary cool accent, gradient transition hue, links |
| Sky Whisper | `#B8D4E3` | Light blue surface, cool gradient anchor, info states |
| Lavender Mist | `#C3B1E1` | Tertiary accent, gradient midpoint, decorative elements |
| Lilac Dream | `#D4B8E0` | Soft purple accent, gradient blending, tag backgrounds |
| Cloud White | `#F9F7F4` | Primary page background, warm-white base surface |
| Snow Drift | `#FFFFFF` | Card backgrounds, text surfaces, clean contrast layer |
| Soft Charcoal | `#3D3D4E` | Primary text color, headings, high-contrast elements |
| Muted Slate | `#6B7280` | Secondary text, captions, subtle UI labels |
| Deep Indigo | `#2D2B55` | Dark-mode background, contrast sections, footer base |
| Coral Bloom | `#FF8A80` | Accent highlight, notification dots, warm emphasis |

### CSS Custom Properties

```css
:root {
  /* Warm gradient anchors */
  --sg-dawn-rose: #f4a0c0;
  --sg-petal-pink: #fddde6;
  --sg-sunset-peach: #ffccb6;
  --sg-golden-haze: #ffe0a3;
  --sg-coral-bloom: #ff8a80;

  /* Cool gradient anchors */
  --sg-aurora-mint: #a8e6cf;
  --sg-soft-teal: #88d8c0;
  --sg-sky-whisper: #b8d4e3;

  /* Purple spectrum */
  --sg-lavender-mist: #c3b1e1;
  --sg-lilac-dream: #d4b8e0;

  /* Neutrals */
  --sg-cloud-white: #f9f7f4;
  --sg-snow: #ffffff;
  --sg-soft-charcoal: #3d3d4e;
  --sg-muted-slate: #6b7280;
  --sg-deep-indigo: #2d2b55;

  /* Functional tokens */
  --sg-text-primary: var(--sg-soft-charcoal);
  --sg-text-secondary: var(--sg-muted-slate);
  --sg-surface-primary: var(--sg-cloud-white);
  --sg-surface-card: var(--sg-snow);
  --sg-accent-primary: var(--sg-dawn-rose);
  --sg-accent-secondary: var(--sg-soft-teal);

  /* Gradient presets */
  --sg-gradient-warm: linear-gradient(135deg, var(--sg-dawn-rose), var(--sg-sunset-peach), var(--sg-golden-haze));
  --sg-gradient-cool: linear-gradient(135deg, var(--sg-sky-whisper), var(--sg-aurora-mint), var(--sg-soft-teal));
  --sg-gradient-aurora: linear-gradient(135deg, var(--sg-lavender-mist), var(--sg-dawn-rose), var(--sg-sunset-peach), var(--sg-aurora-mint));

  /* Shadows */
  --sg-shadow-sm: 0 2px 8px rgba(244, 160, 192, 0.12);
  --sg-shadow-md: 0 4px 20px rgba(244, 160, 192, 0.15);
  --sg-shadow-lg: 0 8px 40px rgba(195, 177, 225, 0.18);

  /* Radii */
  --sg-radius-sm: 12px;
  --sg-radius-md: 20px;
  --sg-radius-lg: 32px;
  --sg-radius-full: 9999px;

  /* Transitions */
  --sg-transition-gentle: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --sg-transition-slow: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## Typography

Soft Gradient typography prioritizes **clarity, lightness, and modern elegance**. Heading fonts should feel refined but warm -- geometric sans-serifs with rounded terminals or soft serifs with generous proportions. Body text must remain highly legible against gradient-tinted backgrounds, favoring medium-weight sans-serifs with open letter-spacing. The overall typographic voice is calm, confident, and approachable -- never heavy, never compressed, never aggressive.

### Recommended Google Fonts

| Font | Category | Weight Range | Usage |
|------|----------|-------------|-------|
| [Outfit](https://fonts.google.com/specimen/Outfit) | Geometric Sans | 300-700 | Primary headings, hero text |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Geometric Sans | 300-800 | Headings, subheadings, UI labels |
| [Inter](https://fonts.google.com/specimen/Inter) | Neo-Grotesque Sans | 300-700 | Body text, UI elements, forms |
| [Rubik](https://fonts.google.com/specimen/Rubik) | Rounded Sans | 300-700 | Friendly body text, buttons, tags |
| [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) | Transitional Serif | 400 | Elegant display headings, accents |
| [Manrope](https://fonts.google.com/specimen/Manrope) | Geometric Sans | 200-800 | Versatile heading/body, clean UI |

### Font Pairings

| Heading Font | Body Font | Mood |
|-------------|-----------|------|
| Outfit (600) | Inter (400) | Modern, clean, professional softness |
| DM Serif Display (400) | Rubik (400) | Elegant warmth, editorial quality |
| Plus Jakarta Sans (700) | Manrope (400) | Geometric harmony, SaaS-friendly |
| Outfit (300) | Rubik (300) | Ultra-light, airy, wellness-focused |

### CSS Typography Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* Base typography */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sg-text-primary);
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--sg-text-primary);
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
}

h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
}

h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
}

/* Gradient text treatment for hero headings */
.gradient-text {
  background: var(--sg-gradient-aurora);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Light-weight subheading */
.subheading {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--sg-text-secondary);
  line-height: 1.6;
}
```

---

## Layout Principles

- **Full-viewport gradient hero sections**: Hero areas span 100vw and at least 80vh, filled with mesh gradient backgrounds that immediately establish the atmospheric mood
- **Single-column or gentle two-column grids**: Layouts favor simplicity; content flows vertically with occasional side-by-side pairings for features or testimonials
- **Maximum content width of 1200px**: Text and card grids are contained within a comfortable max-width, but gradient backgrounds always extend edge to edge
- **Generous vertical padding**: Sections use 80px-120px vertical padding to let gradients breathe and prevent content from feeling cramped against color transitions
- **Card grids with consistent gaps**: Feature or pricing cards sit in CSS Grid layouts with 24px-32px gaps, each card a frosted-glass surface floating above the gradient field
- **Wavy or curved section dividers**: Instead of hard horizontal lines between sections, SVG wave shapes or CSS clip-path curves create organic transitions between gradient zones
- **Sticky translucent navigation**: The top nav bar uses backdrop-filter blur and low-opacity background, remaining visible but never blocking the gradient atmosphere
- **Centered, short-measure text blocks**: Body text blocks max out at 65-70 characters per line (roughly 680px) for optimal readability against gradient backgrounds
- **Asymmetric decorative blobs**: Large, blurred circular shapes (200-400px) in accent colors are positioned absolutely behind content to add depth and color variation
- **Progressive gradient intensity**: The page starts with the most vivid gradient in the hero and gradually softens toward the footer, guiding the eye naturally downward
- **Responsive scaling with fluid typography**: clamp() functions on font sizes and fluid spacing ensure the dreamy proportions hold across all viewport sizes

---

## CSS / Design Techniques

### Mesh Gradient Background

Mesh gradients are created by layering multiple radial-gradient functions at different positions, each fading to transparent, and blending them over a base color. A subtle blur filter smooths the intersections.

```css
.mesh-gradient-bg {
  background-color: var(--sg-cloud-white);
  background-image:
    radial-gradient(circle at 20% 30%, rgba(244, 160, 192, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 75% 20%, rgba(184, 212, 227, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 70%, rgba(195, 177, 225, 0.35) 0%, transparent 50%),
    radial-gradient(circle at 85% 65%, rgba(168, 230, 207, 0.3) 0%, transparent 45%),
    radial-gradient(circle at 10% 80%, rgba(255, 204, 182, 0.35) 0%, transparent 50%);
  min-height: 100vh;
}

/* Animated mesh variant with slow drift */
.mesh-gradient-animated {
  background-color: var(--sg-cloud-white);
  background-image:
    radial-gradient(circle at 20% 30%, rgba(244, 160, 192, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 75% 20%, rgba(184, 212, 227, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 70%, rgba(195, 177, 225, 0.35) 0%, transparent 50%),
    radial-gradient(circle at 85% 65%, rgba(168, 230, 207, 0.3) 0%, transparent 45%);
  background-size: 200% 200%;
  animation: meshDrift 20s ease-in-out infinite alternate;
}

@keyframes meshDrift {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 50% 25%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 75%;
  }
  100% {
    background-position: 0% 100%;
  }
}
```

### Aurora Effect

The aurora effect uses large blurred elements with saturated gradients, positioned behind content and animated with slow, undulating motion.

```css
.aurora-container {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.aurora-container::before,
.aurora-container::after {
  content: '';
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: auroraFloat 15s ease-in-out infinite alternate;
}

.aurora-container::before {
  top: -20%;
  left: -10%;
  background: linear-gradient(135deg, var(--sg-dawn-rose), var(--sg-lavender-mist));
  animation-delay: 0s;
}

.aurora-container::after {
  bottom: -20%;
  right: -10%;
  background: linear-gradient(135deg, var(--sg-aurora-mint), var(--sg-sky-whisper));
  animation-delay: -7s;
}

/* Additional aurora layers via child elements */
.aurora-layer {
  position: absolute;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  top: 30%;
  left: 25%;
  background: linear-gradient(180deg, var(--sg-sunset-peach), var(--sg-lilac-dream));
  animation: auroraFloat 18s ease-in-out infinite alternate-reverse;
}

@keyframes auroraFloat {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(30px, -20px) scale(1.05) rotate(2deg);
  }
  66% {
    transform: translate(-20px, 15px) scale(0.95) rotate(-1deg);
  }
  100% {
    transform: translate(10px, -10px) scale(1.02) rotate(1deg);
  }
}
```

### Card Component

Cards are frosted-glass surfaces that float above the gradient background, using backdrop-filter for translucency and colored soft shadows for depth.

```css
.sg-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--sg-radius-md);
  padding: 2rem;
  box-shadow: var(--sg-shadow-md);
  transition: all var(--sg-transition-gentle);
}

.sg-card:hover {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--sg-shadow-lg);
  transform: translateY(-4px);
}

.sg-card__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--sg-radius-sm);
  background: var(--sg-gradient-warm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.sg-card__title {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--sg-text-primary);
}

.sg-card__description {
  font-size: 0.95rem;
  color: var(--sg-text-secondary);
  line-height: 1.6;
}

/* Card with gradient border */
.sg-card--gradient-border {
  background: rgba(255, 255, 255, 0.75);
  border: none;
  position: relative;
  isolation: isolate;
}

.sg-card--gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--sg-radius-md);
  padding: 1.5px;
  background: var(--sg-gradient-aurora);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
```

### Button Styles

Buttons use gradient fills with gentle glow effects on hover. Primary buttons carry the warm gradient; secondary buttons use frosted glass.

```css
.sg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: var(--sg-radius-full);
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--sg-transition-gentle);
  text-decoration: none;
  line-height: 1.4;
}

/* Primary: warm gradient pill */
.sg-btn--primary {
  background: var(--sg-gradient-warm);
  color: var(--sg-soft-charcoal);
  box-shadow: 0 4px 15px rgba(244, 160, 192, 0.3);
}

.sg-btn--primary:hover {
  box-shadow: 0 6px 25px rgba(244, 160, 192, 0.45);
  transform: translateY(-2px);
}

.sg-btn--primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(244, 160, 192, 0.3);
}

/* Secondary: frosted glass */
.sg-btn--secondary {
  background: rgba(255, 255, 255, 0.5);
  color: var(--sg-soft-charcoal);
  border: 1px solid rgba(244, 160, 192, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.sg-btn--secondary:hover {
  background: rgba(255, 255, 255, 0.75);
  border-color: rgba(244, 160, 192, 0.5);
  box-shadow: 0 4px 15px rgba(195, 177, 225, 0.2);
  transform: translateY(-2px);
}

/* Ghost: transparent with gradient text */
.sg-btn--ghost {
  background: transparent;
  color: var(--sg-dawn-rose);
  border: none;
  padding: 0.75rem 1rem;
}

.sg-btn--ghost:hover {
  background: rgba(244, 160, 192, 0.08);
  border-radius: var(--sg-radius-full);
}
```

### Navigation Bar

A sticky translucent navigation that lets the gradient atmosphere show through, with gentle blur and minimal visual weight.

```css
.sg-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(249, 247, 244, 0.6);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: all var(--sg-transition-gentle);
}

.sg-nav--scrolled {
  background: rgba(249, 247, 244, 0.85);
  box-shadow: 0 2px 20px rgba(195, 177, 225, 0.1);
}

.sg-nav__brand {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--sg-text-primary);
  text-decoration: none;
  background: var(--sg-gradient-aurora);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sg-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sg-nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--sg-text-secondary);
  text-decoration: none;
  position: relative;
  transition: color var(--sg-transition-gentle);
}

.sg-nav__link:hover {
  color: var(--sg-text-primary);
}

.sg-nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--sg-gradient-warm);
  border-radius: 1px;
  transition: width var(--sg-transition-gentle);
}

.sg-nav__link:hover::after {
  width: 100%;
}

/* Mobile menu toggle */
.sg-nav__toggle {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
}

@media (max-width: 768px) {
  .sg-nav__links {
    display: none;
  }

  .sg-nav__links--open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(249, 247, 244, 0.95);
    backdrop-filter: blur(20px);
    padding: 1.5rem 2rem;
    gap: 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .sg-nav__toggle {
    display: block;
  }
}
```

### Hero Section

A full-viewport hero section that combines the mesh gradient background with centered content and animated aurora layers.

```css
.sg-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 6rem 2rem;
}

.sg-hero__bg {
  position: absolute;
  inset: 0;
  background-color: var(--sg-cloud-white);
  background-image:
    radial-gradient(ellipse at 15% 25%, rgba(244, 160, 192, 0.35) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 15%, rgba(184, 212, 227, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 45% 75%, rgba(195, 177, 225, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 90% 70%, rgba(168, 230, 207, 0.3) 0%, transparent 45%),
    radial-gradient(ellipse at 5% 85%, rgba(255, 224, 163, 0.3) 0%, transparent 45%);
  z-index: 0;
}

.sg-hero__content {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.sg-hero__title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  color: var(--sg-text-primary);
}

.sg-hero__subtitle {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--sg-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.sg-hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Decorative blob behind hero */
.sg-hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: auroraFloat 20s ease-in-out infinite alternate;
  z-index: 0;
  pointer-events: none;
}
```

### Grain Texture Overlay

A subtle noise texture overlay that adds tactile quality to gradient backgrounds and prevents color banding in smooth transitions.

```css
.sg-grain::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* Alternative: CSS-only grain using repeating gradients */
.sg-grain-alt::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  background-image:
    repeating-radial-gradient(circle at 17% 32%, rgba(0,0,0,0.06) 0px, transparent 1px),
    repeating-radial-gradient(circle at 62% 78%, rgba(0,0,0,0.04) 0px, transparent 1px),
    repeating-radial-gradient(circle at 89% 14%, rgba(0,0,0,0.05) 0px, transparent 1px);
  background-size: 3px 3px, 4px 4px, 5px 5px;
}
```

### Wavy Section Divider

Organic wave shapes that create smooth visual transitions between sections with different gradient fields.

```css
.sg-wave-divider {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.sg-wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 2px);
  height: 80px;
}

.sg-wave-divider--flip {
  transform: rotate(180deg);
}

/* CSS-only wave using clip-path */
.sg-section-wave {
  position: relative;
}

.sg-section-wave::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: var(--sg-cloud-white);
  clip-path: ellipse(55% 100% at 50% 100%);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use 2-3 harmonious hues per gradient**: Stick to analogous or split-complementary colors that blend without creating muddy brown midpoints (e.g., rose-to-peach, lavender-to-mint)
- **Do add a subtle grain texture overlay**: A 2-5% opacity noise layer prevents color banding, adds tactile depth, and makes digital gradients feel more organic and print-like
- **Do let gradients breathe with ample whitespace**: Give gradient sections generous padding (80px+) so the color fields have room to transition; cramped gradients feel claustrophobic
- **Do use frosted glass for content containers**: backdrop-filter blur over gradients creates beautiful depth and ensures text readability without hiding the atmospheric background
- **Do maintain strong text contrast**: Even on soft backgrounds, body text should meet WCAG AA contrast ratios (4.5:1); use dark charcoal text, not medium gray, against light gradients
- **Do animate gradients slowly and subtly**: If using motion, keep it under 20s cycle times with ease-in-out curves; the effect should feel like breathing, not bouncing
- **Do test gradient rendering across devices**: Gradients render differently on various screens; test on both high-DPI and standard displays to ensure smooth transitions without visible stepping

### Don'ts

- **Don't use rainbow gradients with all spectrum colors**: Five or more disparate hues create visual noise; soft gradient design is about restraint, not color chaos
- **Don't apply gradients to every element**: If the background is a gradient, cards and buttons should be solid or frosted; layering gradient on gradient creates visual confusion
- **Don't use pure black text on gradient backgrounds**: Pure #000000 is too harsh against soft pastels; use charcoal (#3D3D4E or similar) for a gentler contrast that matches the aesthetic's tone
- **Don't neglect mobile performance**: Animated mesh gradients with blur filters consume significant GPU resources; simplify or disable animation on mobile and test frame rates
- **Don't use sharp corners or hard-edged elements**: Right angles, 0px border-radius, and 1px solid borders conflict with the organic, flowing nature of the gradient aesthetic
- **Don't make gradients the only visual hierarchy tool**: Relying solely on color temperature to separate sections creates an amorphous page; combine gradients with typography scale, spacing changes, and content structure
- **Don't forget about color accessibility**: Ensure gradient backgrounds never interfere with text readability; always provide a solid-color fallback behind text content areas
- **Don't over-blur**: Excessive backdrop-filter blur (>30px) on too many overlapping elements can cause rendering issues and make content feel unfocused rather than dreamy

---

## Related Aesthetics

| Aesthetic | Relationship to Soft Gradient |
|-----------|-------------------------------|
| Glassmorphism | Shares the frosted-glass, translucent container approach; Soft Gradient focuses more on the atmospheric background than the glass effect itself |
| Neumorphism | Both prioritize softness and subtlety, but Neumorphism uses same-surface light/shadow illusions rather than color gradients for depth |
| Aurora Design | Essentially a sub-style of Soft Gradient that specifically references northern-lights color patterns and undulating motion |
| Neo-Brutalism | Polar opposite in intent -- hard edges, stark contrast, bold solids -- but occasionally combined with gradient accents for a striking tension |
| Vaporwave | Shares gradient-heavy palettes (pink, purple, teal) but pushes them to saturated, nostalgic extremes versus Soft Gradient's muted restraint |
| Pastel Minimalism | Close cousin that uses similar color values but applies them as flat fills rather than gradient transitions |
| Organic Design | Shares the preference for curved shapes and natural forms; Soft Gradient adds the chromatic dimension of color blending |
| Claymorphism | Both use rounded, soft shapes and gentle shadows, but Claymorphism adds a 3D "inflated" material quality absent from Soft Gradient's flat luminosity |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soft Gradient - Dreamy Design</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

  <style>
    /* ========================================
       CSS Custom Properties
       ======================================== */
    :root {
      /* Warm gradient anchors */
      --sg-dawn-rose: #f4a0c0;
      --sg-petal-pink: #fddde6;
      --sg-sunset-peach: #ffccb6;
      --sg-golden-haze: #ffe0a3;
      --sg-coral-bloom: #ff8a80;

      /* Cool gradient anchors */
      --sg-aurora-mint: #a8e6cf;
      --sg-soft-teal: #88d8c0;
      --sg-sky-whisper: #b8d4e3;

      /* Purple spectrum */
      --sg-lavender-mist: #c3b1e1;
      --sg-lilac-dream: #d4b8e0;

      /* Neutrals */
      --sg-cloud-white: #f9f7f4;
      --sg-snow: #ffffff;
      --sg-soft-charcoal: #3d3d4e;
      --sg-muted-slate: #6b7280;
      --sg-deep-indigo: #2d2b55;

      /* Functional tokens */
      --sg-text-primary: var(--sg-soft-charcoal);
      --sg-text-secondary: var(--sg-muted-slate);
      --sg-surface-primary: var(--sg-cloud-white);
      --sg-surface-card: var(--sg-snow);

      /* Gradient presets */
      --sg-gradient-warm: linear-gradient(135deg, #f4a0c0, #ffccb6, #ffe0a3);
      --sg-gradient-cool: linear-gradient(135deg, #b8d4e3, #a8e6cf, #88d8c0);
      --sg-gradient-aurora: linear-gradient(135deg, #c3b1e1, #f4a0c0, #ffccb6, #a8e6cf);

      /* Shadows */
      --sg-shadow-sm: 0 2px 8px rgba(244, 160, 192, 0.12);
      --sg-shadow-md: 0 4px 20px rgba(244, 160, 192, 0.15);
      --sg-shadow-lg: 0 8px 40px rgba(195, 177, 225, 0.18);

      /* Radii */
      --sg-radius-sm: 12px;
      --sg-radius-md: 20px;
      --sg-radius-lg: 32px;
      --sg-radius-full: 9999px;

      /* Transitions */
      --sg-transition-gentle: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --sg-transition-slow: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      color: var(--sg-text-primary);
      background-color: var(--sg-cloud-white);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.02em;
      color: var(--sg-text-primary);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ========================================
       Grain Overlay
       ======================================== */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 256px 256px;
    }

    /* ========================================
       Navigation
       ======================================== */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(249, 247, 244, 0.6);
      backdrop-filter: blur(20px) saturate(1.2);
      -webkit-backdrop-filter: blur(20px) saturate(1.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      transition: all var(--sg-transition-gentle);
    }

    .nav.scrolled {
      background: rgba(249, 247, 244, 0.85);
      box-shadow: 0 2px 20px rgba(195, 177, 225, 0.1);
    }

    .nav__brand {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 1.35rem;
      background: var(--sg-gradient-aurora);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav__link {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--sg-text-secondary);
      position: relative;
      transition: color var(--sg-transition-gentle);
    }

    .nav__link:hover {
      color: var(--sg-text-primary);
    }

    .nav__link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--sg-gradient-warm);
      border-radius: 1px;
      transition: width var(--sg-transition-gentle);
    }

    .nav__link:hover::after {
      width: 100%;
    }

    .nav__cta {
      padding: 0.5rem 1.5rem;
      background: var(--sg-gradient-warm);
      border-radius: var(--sg-radius-full);
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--sg-text-primary);
      border: none;
      cursor: pointer;
      transition: all var(--sg-transition-gentle);
      box-shadow: 0 2px 10px rgba(244, 160, 192, 0.25);
    }

    .nav__cta:hover {
      box-shadow: 0 4px 20px rgba(244, 160, 192, 0.4);
      transform: translateY(-1px);
    }

    /* Mobile nav toggle */
    .nav__toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 28px;
      height: 20px;
      position: relative;
    }

    .nav__toggle span,
    .nav__toggle::before,
    .nav__toggle::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: var(--sg-text-primary);
      border-radius: 2px;
      position: absolute;
      left: 0;
      transition: all 0.3s ease;
    }

    .nav__toggle::before { top: 0; }
    .nav__toggle span { top: 50%; transform: translateY(-50%); }
    .nav__toggle::after { bottom: 0; }

    /* ========================================
       Hero Section
       ======================================== */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      padding: 8rem 2rem 6rem;
    }

    /* Mesh gradient background */
    .hero__bg {
      position: absolute;
      inset: 0;
      background-color: var(--sg-cloud-white);
      background-image:
        radial-gradient(ellipse at 15% 25%, rgba(244, 160, 192, 0.35) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 15%, rgba(184, 212, 227, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 45% 75%, rgba(195, 177, 225, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at 90% 70%, rgba(168, 230, 207, 0.3) 0%, transparent 45%),
        radial-gradient(ellipse at 5% 85%, rgba(255, 224, 163, 0.3) 0%, transparent 45%);
      z-index: 0;
    }

    /* Aurora blobs */
    .hero__blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.35;
      z-index: 0;
      pointer-events: none;
    }

    .hero__blob--1 {
      width: 500px;
      height: 500px;
      top: -10%;
      left: -5%;
      background: linear-gradient(135deg, var(--sg-dawn-rose), var(--sg-lavender-mist));
      animation: blobFloat1 18s ease-in-out infinite alternate;
    }

    .hero__blob--2 {
      width: 400px;
      height: 400px;
      bottom: -10%;
      right: -5%;
      background: linear-gradient(135deg, var(--sg-aurora-mint), var(--sg-sky-whisper));
      animation: blobFloat2 22s ease-in-out infinite alternate;
    }

    .hero__blob--3 {
      width: 350px;
      height: 350px;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(180deg, var(--sg-sunset-peach), var(--sg-lilac-dream));
      animation: blobFloat3 20s ease-in-out infinite alternate;
    }

    @keyframes blobFloat1 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(40px, 30px) scale(1.08); }
      100% { transform: translate(-20px, 50px) scale(0.95); }
    }

    @keyframes blobFloat2 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-30px, -25px) scale(1.05); }
      100% { transform: translate(20px, -40px) scale(0.97); }
    }

    @keyframes blobFloat3 {
      0% { transform: translateX(-50%) translate(0, 0) scale(1); }
      50% { transform: translateX(-50%) translate(25px, -20px) scale(1.06); }
      100% { transform: translateX(-50%) translate(-15px, 30px) scale(0.96); }
    }

    .hero__content {
      position: relative;
      z-index: 1;
      max-width: 720px;
    }

    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: var(--sg-radius-full);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--sg-text-secondary);
      margin-bottom: 2rem;
    }

    .hero__badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--sg-aurora-mint);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.85); }
    }

    .hero__title {
      font-size: clamp(2.75rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.08;
      margin-bottom: 1.5rem;
    }

    .hero__title .gradient-text {
      background: var(--sg-gradient-aurora);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero__subtitle {
      font-family: 'Outfit', sans-serif;
      font-weight: 300;
      font-size: clamp(1.1rem, 2vw, 1.3rem);
      color: var(--sg-text-secondary);
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero__actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* ========================================
       Buttons
       ======================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.85rem 2.25rem;
      border: none;
      border-radius: var(--sg-radius-full);
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all var(--sg-transition-gentle);
      text-decoration: none;
      line-height: 1.4;
    }

    .btn--primary {
      background: var(--sg-gradient-warm);
      color: var(--sg-text-primary);
      box-shadow: 0 4px 15px rgba(244, 160, 192, 0.3);
    }

    .btn--primary:hover {
      box-shadow: 0 6px 25px rgba(244, 160, 192, 0.45);
      transform: translateY(-2px);
    }

    .btn--secondary {
      background: rgba(255, 255, 255, 0.55);
      color: var(--sg-text-primary);
      border: 1px solid rgba(244, 160, 192, 0.25);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    .btn--secondary:hover {
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(244, 160, 192, 0.45);
      box-shadow: 0 4px 15px rgba(195, 177, 225, 0.2);
      transform: translateY(-2px);
    }

    /* ========================================
       Wave Divider
       ======================================== */
    .wave-divider {
      position: relative;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      margin-top: -1px;
    }

    .wave-divider svg {
      display: block;
      width: 100%;
      height: 60px;
    }

    /* ========================================
       Features Section
       ======================================== */
    .features {
      padding: 6rem 2rem;
      background: var(--sg-snow);
      position: relative;
    }

    .features__header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    .features__label {
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--sg-dawn-rose);
      margin-bottom: 0.75rem;
    }

    .features__title {
      font-size: clamp(1.75rem, 3.5vw, 2.5rem);
      margin-bottom: 1rem;
    }

    .features__subtitle {
      color: var(--sg-text-secondary);
      font-size: 1.05rem;
      line-height: 1.7;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ========================================
       Card Component
       ======================================== */
    .card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: var(--sg-radius-md);
      padding: 2rem;
      box-shadow: var(--sg-shadow-sm);
      transition: all var(--sg-transition-gentle);
    }

    .card:hover {
      background: rgba(255, 255, 255, 0.9);
      box-shadow: var(--sg-shadow-md);
      transform: translateY(-4px);
    }

    .card__icon {
      width: 52px;
      height: 52px;
      border-radius: var(--sg-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
    }

    .card__icon--warm { background: var(--sg-gradient-warm); }
    .card__icon--cool { background: var(--sg-gradient-cool); }
    .card__icon--aurora { background: var(--sg-gradient-aurora); }

    .card__title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .card__text {
      font-size: 0.95rem;
      color: var(--sg-text-secondary);
      line-height: 1.65;
    }

    /* ========================================
       Showcase / Gradient Display Section
       ======================================== */
    .showcase {
      padding: 6rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .showcase__bg {
      position: absolute;
      inset: 0;
      background-color: var(--sg-cloud-white);
      background-image:
        radial-gradient(ellipse at 30% 50%, rgba(195, 177, 225, 0.3) 0%, transparent 55%),
        radial-gradient(ellipse at 70% 40%, rgba(168, 230, 207, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 80%, rgba(244, 160, 192, 0.2) 0%, transparent 50%);
      z-index: 0;
    }

    .showcase__content {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .showcase__text-side {
      max-width: 480px;
    }

    .showcase__label {
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--sg-soft-teal);
      margin-bottom: 0.75rem;
    }

    .showcase__title {
      font-size: clamp(1.75rem, 3vw, 2.25rem);
      margin-bottom: 1rem;
    }

    .showcase__desc {
      color: var(--sg-text-secondary);
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .showcase__visual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .gradient-swatch {
      aspect-ratio: 1;
      border-radius: var(--sg-radius-md);
      box-shadow: var(--sg-shadow-sm);
      transition: all var(--sg-transition-gentle);
    }

    .gradient-swatch:hover {
      transform: scale(1.04);
      box-shadow: var(--sg-shadow-md);
    }

    .gradient-swatch--1 {
      background: linear-gradient(135deg, #f4a0c0, #ffccb6);
      grid-row: span 2;
    }

    .gradient-swatch--2 {
      background: linear-gradient(135deg, #b8d4e3, #a8e6cf);
    }

    .gradient-swatch--3 {
      background: linear-gradient(135deg, #c3b1e1, #fddde6);
    }

    /* ========================================
       Testimonial Section
       ======================================== */
    .testimonial {
      padding: 6rem 2rem;
      background: var(--sg-snow);
      text-align: center;
    }

    .testimonial__inner {
      max-width: 680px;
      margin: 0 auto;
    }

    .testimonial__quote {
      font-family: 'Outfit', sans-serif;
      font-weight: 300;
      font-size: clamp(1.25rem, 2.5vw, 1.75rem);
      line-height: 1.6;
      color: var(--sg-text-primary);
      margin-bottom: 2rem;
      font-style: italic;
    }

    .testimonial__quote::before {
      content: '\201C';
      display: block;
      font-size: 4rem;
      line-height: 1;
      background: var(--sg-gradient-warm);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .testimonial__author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .testimonial__avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sg-gradient-aurora);
    }

    .testimonial__name {
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      font-size: 1rem;
    }

    .testimonial__role {
      font-size: 0.85rem;
      color: var(--sg-text-secondary);
    }

    /* ========================================
       CTA Section
       ======================================== */
    .cta {
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta__bg {
      position: absolute;
      inset: 0;
      background-color: var(--sg-cloud-white);
      background-image:
        radial-gradient(ellipse at 25% 40%, rgba(244, 160, 192, 0.3) 0%, transparent 55%),
        radial-gradient(ellipse at 75% 60%, rgba(168, 230, 207, 0.3) 0%, transparent 55%),
        radial-gradient(ellipse at 50% 30%, rgba(184, 212, 227, 0.25) 0%, transparent 50%);
      z-index: 0;
    }

    .cta__content {
      position: relative;
      z-index: 1;
      max-width: 600px;
      margin: 0 auto;
    }

    .cta__title {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 1rem;
    }

    .cta__desc {
      color: var(--sg-text-secondary);
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }

    .cta__form {
      display: flex;
      gap: 0.75rem;
      max-width: 440px;
      margin: 0 auto;
    }

    .cta__input {
      flex: 1;
      padding: 0.85rem 1.5rem;
      border: 1px solid rgba(244, 160, 192, 0.25);
      border-radius: var(--sg-radius-full);
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      color: var(--sg-text-primary);
      outline: none;
      transition: all var(--sg-transition-gentle);
    }

    .cta__input::placeholder {
      color: var(--sg-muted-slate);
    }

    .cta__input:focus {
      border-color: var(--sg-dawn-rose);
      box-shadow: 0 0 0 3px rgba(244, 160, 192, 0.15);
      background: rgba(255, 255, 255, 0.85);
    }

    /* ========================================
       Footer
       ======================================== */
    .footer {
      padding: 3rem 2rem;
      background: var(--sg-deep-indigo);
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
    }

    .footer__brand {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      background: var(--sg-gradient-aurora);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      display: inline-block;
    }

    .footer__links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      list-style: none;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .footer__link {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
      transition: color var(--sg-transition-gentle);
    }

    .footer__link:hover {
      color: rgba(255, 255, 255, 0.95);
    }

    .footer__copy {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.4);
    }

    /* ========================================
       Utilities
       ======================================== */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .gradient-text {
      background: var(--sg-gradient-aurora);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ========================================
       Responsive
       ======================================== */
    @media (max-width: 768px) {
      .nav__links { display: none; }
      .nav__toggle { display: block; }

      .hero { padding: 7rem 1.5rem 4rem; }
      .hero__blob { opacity: 0.2; }

      .features, .showcase, .testimonial, .cta {
        padding: 4rem 1.5rem;
      }

      .showcase__content {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .showcase__visual {
        max-width: 320px;
        margin: 0 auto;
      }

      .cta__form {
        flex-direction: column;
      }

      .btn { width: 100%; justify-content: center; }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero__blob,
      .hero__badge-dot {
        animation: none;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="nav">
    <a href="#" class="nav__brand">Lumina</a>
    <ul class="nav__links">
      <li><a href="#features" class="nav__link">Features</a></li>
      <li><a href="#showcase" class="nav__link">Showcase</a></li>
      <li><a href="#testimonial" class="nav__link">Reviews</a></li>
      <li><a href="#cta" class="nav__link">Contact</a></li>
    </ul>
    <button class="nav__cta">Get Started</button>
    <button class="nav__toggle" aria-label="Toggle menu">
      <span></span>
    </button>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__blob hero__blob--1"></div>
    <div class="hero__blob hero__blob--2"></div>
    <div class="hero__blob hero__blob--3"></div>

    <div class="hero__content">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        Designed with light
      </div>
      <h1 class="hero__title">
        Where Color<br>
        Meets <span class="gradient-text">Serenity</span>
      </h1>
      <p class="hero__subtitle">
        A dreamy design experience crafted from soft mesh gradients,
        gentle aurora effects, and the quiet beauty of light in motion.
      </p>
      <div class="hero__actions">
        <a href="#cta" class="btn btn--primary">Start Creating</a>
        <a href="#features" class="btn btn--secondary">Explore More</a>
      </div>
    </div>
  </section>

  <!-- Wave Divider -->
  <div class="wave-divider">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- Features Section -->
  <section class="features" id="features">
    <div class="features__header">
      <p class="features__label">Why Choose Soft Gradient</p>
      <h2 class="features__title">Thoughtful Design, Effortless Beauty</h2>
      <p class="features__subtitle">
        Every element is designed to feel gentle, intentional,
        and quietly remarkable.
      </p>
    </div>

    <div class="features__grid">
      <div class="card">
        <div class="card__icon card__icon--warm">
          <span>&#9775;</span>
        </div>
        <h3 class="card__title">Atmospheric Backgrounds</h3>
        <p class="card__text">
          Multi-layered mesh gradients create depth and atmosphere,
          making every page feel like a canvas of light.
        </p>
      </div>

      <div class="card">
        <div class="card__icon card__icon--cool">
          <span>&#10052;</span>
        </div>
        <h3 class="card__title">Frosted Glass Surfaces</h3>
        <p class="card__text">
          Translucent containers with backdrop blur float above gradient
          fields, creating sophisticated visual layers.
        </p>
      </div>

      <div class="card">
        <div class="card__icon card__icon--aurora">
          <span>&#10024;</span>
        </div>
        <h3 class="card__title">Aurora Motion</h3>
        <p class="card__text">
          Slow, breathing animations reference the northern lights,
          adding life without distraction or performance cost.
        </p>
      </div>
    </div>
  </section>

  <!-- Showcase Section -->
  <section class="showcase" id="showcase">
    <div class="showcase__bg"></div>
    <div class="showcase__content">
      <div class="showcase__text-side">
        <p class="showcase__label">Gradient Palette</p>
        <h2 class="showcase__title">Colors That Breathe Together</h2>
        <p class="showcase__desc">
          Our palette draws from sunrise spectra and aurora phenomena.
          Each hue is chosen for its ability to flow seamlessly into
          the next, creating transitions that feel painted by nature.
        </p>
        <a href="#" class="btn btn--primary">View Full Palette</a>
      </div>
      <div class="showcase__visual">
        <div class="gradient-swatch gradient-swatch--1"></div>
        <div class="gradient-swatch gradient-swatch--2"></div>
        <div class="gradient-swatch gradient-swatch--3"></div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial" id="testimonial">
    <div class="testimonial__inner">
      <blockquote class="testimonial__quote">
        The soft gradient approach transformed our product. Users describe
        the experience as calming and premium -- something they actually
        enjoy spending time in.
      </blockquote>
      <div class="testimonial__author">
        <div class="testimonial__avatar"></div>
        <div>
          <p class="testimonial__name">Elena Vasquez</p>
          <p class="testimonial__role">Design Lead, Aetheria Studio</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta" id="cta">
    <div class="cta__bg"></div>
    <div class="cta__content">
      <h2 class="cta__title">Ready to Design with <span class="gradient-text">Light</span>?</h2>
      <p class="cta__desc">
        Join thousands of designers creating serene, atmospheric interfaces
        that users love to inhabit.
      </p>
      <form class="cta__form" onsubmit="event.preventDefault()">
        <input type="email" class="cta__input" placeholder="Enter your email" required>
        <button type="submit" class="btn btn--primary">Subscribe</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__brand">Lumina</div>
    <ul class="footer__links">
      <li><a href="#" class="footer__link">About</a></li>
      <li><a href="#" class="footer__link">Docs</a></li>
      <li><a href="#" class="footer__link">Showcase</a></li>
      <li><a href="#" class="footer__link">Blog</a></li>
      <li><a href="#" class="footer__link">Contact</a></li>
    </ul>
    <p class="footer__copy">&copy; 2025 Lumina. Designed with soft light.</p>
  </footer>

  <!-- Scroll effect for nav -->
  <script>
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');
    if (toggle) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('nav__links--open');
      });
    }
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Layer gradients from back to front**: Start with the most diffuse, largest gradient blobs on the page background, then add progressively smaller, more focused color accents on section backgrounds, with solid or frosted-glass surfaces on top for content
- **Use CSS custom properties for gradient consistency**: Define your 3-4 core gradient presets as custom properties so every component draws from the same palette; this prevents gradient drift where different sections feel like different designs
- **Respect prefers-reduced-motion**: Always wrap animated gradients and floating blobs in a `@media (prefers-reduced-motion: reduce)` query that disables or significantly slows animation, making the experience comfortable for motion-sensitive users
- **Provide solid-color fallback backgrounds**: Not all browsers support `backdrop-filter`; set a semi-opaque solid background on frosted-glass elements so they remain readable even without blur support
- **Optimize gradient performance on mobile**: Complex mesh gradients with blur filters can tax mobile GPUs; consider reducing the number of gradient layers from 5 to 2-3 and lowering blur radius on screens under 768px
- **Test gradient banding on standard displays**: Smooth gradients can show visible color stepping on 8-bit displays; the grain texture overlay (2-3% opacity noise) is not merely decorative -- it is a technical solution to perceptual banding
- **Use `will-change: transform` sparingly on animated blobs**: Adding `will-change` promotes elements to their own compositing layer for smoother animation, but applying it to too many elements simultaneously can increase memory consumption
- **Keep gradient color stops to 2-3 per gradient function**: Each radial-gradient in a mesh should transition between just two colors (one hue to transparent); complexity comes from layering many simple gradients, not from making individual gradients complicated
