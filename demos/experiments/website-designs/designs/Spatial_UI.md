# Spatial UI Design Reference

## Overview

Spatial UI is a design aesthetic born from Apple's Vision Pro and visionOS platform, translating the principles of spatial computing into two-dimensional interfaces that feel three-dimensional. Rather than simulating full 3D environments in the browser, Spatial UI borrows the language of depth, glass materials, and ambient layering to create interfaces where panels appear to float in physical space, content occupies distinct depth planes, and interactions feel tactile yet weightless. It is the web's interpretation of what Apple calls "designing for spatial computing" -- an approach where digital elements coexist with the user's environment rather than demanding full attention on a flat screen.

The defining visual element is the glass panel: translucent, frosted surfaces that blur whatever sits behind them, letting ambient color and light bleed through while maintaining sharp text legibility. Apple's visionOS uses a physically based "glass material" as its primary container, and Spatial UI adopts this with CSS `backdrop-filter: blur()` over semi-transparent backgrounds. These panels do not sit flush against a canvas; they hover above layered backgrounds with soft, diffused shadows that imply physical separation. The result is an interface that breathes -- one where negative space is not empty but atmospheric.

Color palettes are restrained and luminous. Backgrounds lean toward deep, muted tones (dark indigos, charcoal, soft blacks) that recede visually, while foreground elements use clean whites, soft blues, and carefully placed accent colors. Apple's visionOS defaults to white text on glass because it provides the highest legibility against unpredictable blurred backgrounds, and Spatial UI follows this convention. Accent colors are cool and ethereal -- lavender, sky blue, soft cyan -- applied sparingly to interactive elements and focus states rather than as decorative fills.

Typography is generous and airy. VisionOS uses a slightly heavier variant of SF Pro with increased tracking for readability in spatial environments, and web implementations mirror this with medium-weight sans-serifs, open letter-spacing, and generous line heights. The overall impression is one of calm precision: every element has room to exist, every surface suggests physical materiality, and the interface invites interaction through subtle depth cues rather than aggressive visual contrast.

---

## Visual Characteristics

### Core Design Traits

- **Frosted glass panels**: Translucent containers with `backdrop-filter: blur()` that soften the background into diffused color fields, mimicking visionOS's signature glass material; borders are subtle, often 1px with low-opacity white or light grey
- **Multi-layer depth hierarchy**: Content is organized across distinct z-planes -- background environment, mid-ground supporting elements, and foreground interactive panels -- creating the sensation of physical spatial separation
- **Soft diffused shadows**: Shadows are large, blurred, and low-opacity rather than tight and dark; they suggest floating elevation rather than hard contact with a surface
- **Generous negative space**: Layouts breathe with wide margins and padding; the space between elements is treated as an active design element that implies open, ambient environments
- **Ambient background gradients**: Subtle, large-scale radial gradients in cool tones create the impression of environmental lighting behind glass panels, as if light sources exist beyond the interface
- **Rounded, pill-shaped containers**: Border radii are large (16px-28px) and consistent, producing smooth, organic shapes that feel touchable and approachable
- **Subtle light-edge borders**: Thin borders using `rgba(255, 255, 255, 0.1-0.2)` along panel edges catch light and define boundaries without creating harsh visual lines
- **Minimal iconography**: Icons are thin-stroked, monoline, and optically balanced, following SF Symbols conventions -- geometric, legible, and never competing with content
- **Restrained color application**: Base UI surfaces are neutral or glass-tinted; color is reserved for interactive states, accent indicators, and focused elements
- **Smooth, physics-based transitions**: Animations use spring-like easing (ease-out curves with slight overshoot) and natural deceleration, never snapping or teleporting between states
- **Environmental responsiveness**: Elements subtly shift with interaction -- hover states lift panels, focus states brighten borders, scroll gently parallaxes depth layers

### Design Principles

- **Depth communicates hierarchy**: Elements closer to the viewer (higher z-index, larger shadow, more opaque) are more important; receding elements are contextual or environmental
- **Glass over opacity**: Prefer `backdrop-filter: blur()` over flat semi-transparent backgrounds; the blurred pass-through connects panels to their environment rather than isolating them
- **Comfort drives layout**: Keep primary content centered in the viewport; avoid requiring excessive head/eye movement, following visionOS guidance that centered content is most comfortable
- **Light text on glass**: Default to white or near-white text on glass surfaces, as Apple's visionOS does; dark text loses contrast on blurred, unpredictable backgrounds
- **Reduce, do not eliminate**: Respect `prefers-reduced-motion` by dampening animations rather than removing all visual feedback; spatial depth can be communicated through static shadows and layering
- **Touch-scale targets**: Interactive elements should be generously sized (minimum 44px touch targets), reflecting the imprecise nature of spatial input methods like eye tracking and hand gestures
- **Transparency builds trust**: Letting the background show through panels creates a feeling of openness and honesty; fully opaque containers feel heavy and disconnected in spatial contexts
- **Progressive disclosure**: Present only essential information at each depth layer; reveal supporting content through interaction, expansion, or navigating deeper into the spatial hierarchy

---

## Color Palette

Spatial UI palettes are built around deep, receding backgrounds and luminous, clean foreground surfaces. The glass material tints everything slightly cool, so the overall temperature leans blue-grey. Accent colors are ethereal and calming -- lavender, sky blue, soft teal -- never harsh neons. The philosophy follows visionOS: white is the default text color because it provides the highest contrast on glass, and backgrounds are dark enough to let translucent surfaces glow without washing out.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Void | `#0D0D12` | Deepest background; app canvas behind all layers |
| Deep Space | `#141420` | Secondary background; section containers |
| Charcoal Glass | `#1C1C2A` | Card and panel base tint beneath glass blur |
| Slate Layer | `#252536` | Elevated mid-ground surfaces; sidebar backgrounds |
| Glass White | `#FFFFFF` | Primary text on glass; highest legibility default |
| Soft White | `#F0F0F5` | Secondary text; descriptions and body content |
| Mist Grey | `#A0A0B8` | Tertiary text; captions, timestamps, metadata |
| Lavender Accent | `#9B8FFF` | Primary accent; interactive focus rings, active states |
| Sky Blue | `#64B5F6` | Secondary accent; links, informational highlights |
| Soft Cyan | `#80DEEA` | Tertiary accent; badges, subtle indicators |
| Warm Blush | `#F8A4C8` | Warm accent; notifications, gentle alerts |
| Faint Teal | `#4DB6AC` | Success states; confirmation indicators |
| Glass Border | `#FFFFFF1A` | Panel edge borders; light-catching separators (10% white) |
| Shadow Black | `#00000033` | Elevation shadows; floating panel depth (20% black) |
| Ambient Indigo | `#2A2A4A` | Background gradient midpoint; ambient glow source |

### CSS Custom Properties

```css
:root {
  --sp-void: #0D0D12;
  --sp-deep-space: #141420;
  --sp-charcoal: #1C1C2A;
  --sp-slate: #252536;
  --sp-white: #FFFFFF;
  --sp-soft-white: #F0F0F5;
  --sp-mist: #A0A0B8;
  --sp-lavender: #9B8FFF;
  --sp-sky: #64B5F6;
  --sp-cyan: #80DEEA;
  --sp-blush: #F8A4C8;
  --sp-teal: #4DB6AC;
  --sp-glass-border: rgba(255, 255, 255, 0.1);
  --sp-shadow: rgba(0, 0, 0, 0.2);
  --sp-ambient: #2A2A4A;

  /* Glass material tokens */
  --sp-glass-bg: rgba(255, 255, 255, 0.06);
  --sp-glass-bg-hover: rgba(255, 255, 255, 0.1);
  --sp-glass-blur: 40px;
  --sp-glass-border-width: 1px;
  --sp-glass-radius: 20px;
  --sp-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}
```

---

## Typography

Spatial UI typography follows Apple's visionOS conventions: slightly heavier font weights than typical web defaults, increased letter-spacing for readability against blurred glass surfaces, and generous line heights that prevent text from feeling cramped. VisionOS uses SF Pro at medium weight for body text and bold for titles -- heavier than the regular/semibold defaults on iOS -- because spatial environments demand higher contrast. On the web, geometric sans-serifs with clean strokes and open counters replicate this clarity. Display text stays sentence-case or title-case (never all-caps) to maintain the calm, approachable tone.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Inter** | 300, 400, 500, 600, 700 | Body text; labels; exceptional screen legibility at all sizes | [Inter](https://fonts.google.com/specimen/Inter) |
| **Plus Jakarta Sans** | 300, 400, 500, 600, 700, 800 | Headings; display text; soft geometric character | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **DM Sans** | 400, 500, 700 | Alternative body; clean low-contrast geometric | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Outfit** | 300, 400, 500, 600, 700 | Versatile geometric sans; friendly spatial feel | [Outfit](https://fonts.google.com/specimen/Outfit) |
| **IBM Plex Mono** | 400, 500 | Code snippets; technical labels; monospaced accent | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Plus Jakarta Sans 700 | Inter 400 | Clean spatial operating system; visionOS-inspired |
| Outfit 600 | DM Sans 400 | Soft, approachable ambient interface |
| Plus Jakarta Sans 600 | Outfit 400 | Modern spatial product UI; warm and precise |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--sp-white);
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--sp-white);
}

h1 { font-size: clamp(2rem, 4.5vw, 3.5rem); }
h2 { font-size: clamp(1.4rem, 3vw, 2.2rem); }
h3 { font-size: clamp(1.1rem, 2vw, 1.5rem); }

.caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--sp-mist);
}

.mono {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
}
```

---

## Layout Principles

- **Center-weighted content**: Place primary content within the central 60-70% of the viewport, following visionOS guidance that centered content is the most comfortable for the eyes; avoid forcing users to scan edges
- **Glass panel grid**: Organize content into discrete floating glass panels on a grid with generous gaps (24px-40px); each panel is a self-contained unit with its own elevation and blur
- **Layered z-architecture**: Establish clear depth layers -- environment background (z:0), ambient gradients (z:5), content panels (z:10), navigation (z:20), modals/overlays (z:30) -- to prevent stacking conflicts
- **Consistent border radius language**: Use a unified radius scale (12px for small elements, 20px for cards and panels, 28px for large containers, full pill for buttons) to maintain the soft, spatial feel
- **Generous inner padding**: Panels use 32px-48px padding internally; cramped glass panels look like bugs, not design -- space signals quality and breathability
- **Fluid, clamped sizing**: Use `clamp()` for typography and `min()`/`max()` for widths so spatial proportions scale naturally across devices without breakpoint jumps
- **Sticky navigation as spatial anchor**: The top nav bar is fixed, glass-blurred, and acts as a persistent spatial reference point; it grows slightly more opaque on scroll to reinforce presence
- **Asymmetric but balanced compositions**: Offset content groups rather than centering everything identically; spatial interfaces feel more natural when elements occupy different depth positions
- **Viewport-height hero sections**: Hero areas span the full viewport, creating an immersive entry point before the user scrolls into paneled content areas
- **Soft dividers over hard rules**: Separate sections with gradient fades, increased spacing, or subtle blur transitions rather than solid horizontal lines
- **Modal as elevated panel**: Dialogs and overlays are simply higher-z glass panels with a dimmed backdrop, maintaining the spatial metaphor rather than breaking it with flat opaque boxes

---

## CSS / Design Techniques

### Glass Panel (Card)

```css
.sp-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 36px;
  backdrop-filter: blur(40px) saturate(1.4);
  -webkit-backdrop-filter: blur(40px) saturate(1.4);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.4s ease,
              background 0.3s ease;
}

.sp-card:hover {
  transform: translateY(-4px) scale(1.005);
  background: rgba(255, 255, 255, 0.09);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
}

.sp-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.sp-card p {
  color: #A0A0B8;
  font-size: 0.95rem;
  line-height: 1.7;
}
```

### Spatial Button

```css
.sp-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  background: rgba(155, 143, 255, 0.2);
  border: 1px solid rgba(155, 143, 255, 0.3);
  border-radius: 14px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.sp-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  pointer-events: none;
}

.sp-button:hover {
  background: rgba(155, 143, 255, 0.3);
  border-color: rgba(155, 143, 255, 0.5);
  box-shadow:
    0 8px 24px rgba(155, 143, 255, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.sp-button:active {
  transform: translateY(0) scale(0.98);
  transition-duration: 0.1s;
}

.sp-button-ghost {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--sp-soft-white);
}

.sp-button-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### Glass Navigation

```css
.sp-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: rgba(13, 13, 18, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(40px) saturate(1.3);
  -webkit-backdrop-filter: blur(40px) saturate(1.3);
  transition: background 0.4s ease, border-color 0.4s ease;
}

.sp-nav.scrolled {
  background: rgba(13, 13, 18, 0.82);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.sp-nav .logo {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.sp-nav .logo span {
  color: var(--sp-lavender);
}

.sp-nav-links {
  display: flex;
  gap: 4px;
  list-style: none;
}

.sp-nav-links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sp-mist);
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 10px;
  transition: color 0.25s ease, background 0.25s ease;
}

.sp-nav-links a:hover {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.06);
}

.sp-nav-links a.active {
  color: var(--sp-lavender);
  background: rgba(155, 143, 255, 0.08);
}
```

### Hero Section

```css
.sp-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 120px 24px 80px;
}

.sp-hero .ambient-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(155, 143, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(100, 181, 246, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(128, 222, 234, 0.04) 0%, transparent 40%);
  pointer-events: none;
}

.sp-hero .content {
  position: relative;
  z-index: 5;
  max-width: 680px;
}

.sp-hero .eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--sp-lavender);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  background: rgba(155, 143, 255, 0.1);
  border: 1px solid rgba(155, 143, 255, 0.15);
}

.sp-hero h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.sp-hero .subtitle {
  font-size: 1.15rem;
  color: var(--sp-mist);
  line-height: 1.8;
  max-width: 520px;
  margin: 0 auto 36px;
}
```

### Depth Shadow System

```css
/* Elevation levels for spatial depth */
.sp-elevation-1 {
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
}

.sp-elevation-2 {
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.18),
    0 2px 8px rgba(0, 0, 0, 0.08);
}

.sp-elevation-3 {
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.25),
    0 8px 24px rgba(0, 0, 0, 0.12);
}

.sp-elevation-4 {
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.3),
    0 16px 40px rgba(0, 0, 0, 0.15);
}

/* Inset light edge for glass panels */
.sp-glass-inset {
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}
```

### Ambient Background

```css
.sp-ambient {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: var(--sp-void);
  overflow: hidden;
}

.sp-ambient::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 25% 25%, rgba(155, 143, 255, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 75%, rgba(100, 181, 246, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 10%, rgba(128, 222, 234, 0.03) 0%, transparent 40%);
  animation: ambientShift 20s ease-in-out infinite alternate;
}

.sp-ambient::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 60% 60%, rgba(248, 164, 200, 0.04) 0%, transparent 45%),
    radial-gradient(ellipse at 20% 80%, rgba(155, 143, 255, 0.03) 0%, transparent 40%);
  animation: ambientShift 25s ease-in-out infinite alternate-reverse;
}

@keyframes ambientShift {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-2%, 1%) scale(1.02); }
  100% { transform: translate(1%, -1%) scale(1); }
}
```

### Floating Depth Layers

```css
.sp-depth-container {
  perspective: 1200px;
  perspective-origin: 50% 50%;
}

.sp-layer-back {
  transform: translateZ(-80px) scale(1.06);
  opacity: 0.5;
  filter: blur(2px);
  pointer-events: none;
}

.sp-layer-mid {
  transform: translateZ(-30px) scale(1.02);
  opacity: 0.8;
}

.sp-layer-front {
  transform: translateZ(0);
  position: relative;
  z-index: 1;
}

/* Parallax scroll response */
.sp-parallax-section {
  transform-style: preserve-3d;
  overflow: hidden;
}

.sp-parallax-bg {
  position: absolute;
  inset: -20%;
  transform: translateZ(-1px) scale(1.2);
  z-index: -1;
}
```

### Glass Modal Overlay

```css
.sp-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.sp-modal {
  background: rgba(28, 28, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  max-width: 520px;
  width: 90%;
  backdrop-filter: blur(60px) saturate(1.5);
  -webkit-backdrop-filter: blur(60px) saturate(1.5);
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

---

## Design Do's and Don'ts

### Do's

- **Use `backdrop-filter: blur()` with `saturate()` for rich glass**: Combining blur with a slight saturation boost (1.2-1.5) produces the warm, luminous glass effect that visionOS achieves; pure blur alone feels flat and lifeless
- **Default to white text on glass surfaces**: Apple's visionOS uses white as the default text color because it maintains legibility across all blurred background conditions; follow this convention for body text and headings
- **Add inset light edges to glass panels**: Apply `inset 0 1px 0 rgba(255, 255, 255, 0.06)` to the top edge of glass containers to simulate light catching the panel rim, reinforcing the floating material illusion
- **Design generous touch targets**: Follow the 44px minimum from Apple's Human Interface Guidelines; spatial input (eye tracking, hand gestures) is inherently less precise than mouse clicks, so interactive elements need breathing room
- **Maintain depth consistency**: If a card sits at elevation-2, its children (buttons, icons) should not cast deeper shadows than their parent; depth must be hierarchically consistent
- **Respect `prefers-reduced-motion`**: Replace spring animations with instant transitions, disable ambient gradient animations, and simplify parallax into static depth for users who have opted for reduced motion
- **Test glass contrast across backgrounds**: Glass panels look different depending on what is behind them; verify text legibility against the lightest and darkest areas of your ambient background gradients
- **Use CSS `will-change` for animated glass panels**: Apply `will-change: transform` to elements that animate position, and `will-change: backdrop-filter` sparingly -- this hints the GPU to pre-composite layers, preventing jank on glass transitions

### Don'ts

- **Avoid stacking multiple glass layers directly**: Layering blurred panels on top of other blurred panels compounds the blur and obliterates all visual information; each glass panel should ideally blur the base background, not another glass surface
- **Do not use flat opaque containers**: Fully opaque cards and modals break the spatial metaphor; if you cannot use `backdrop-filter`, tint the background color (e.g., `rgba(28, 28, 42, 0.85)`) to at least suggest translucency
- **Avoid high-saturation accent colors**: Neon greens, hot pinks, and saturated reds fight the calm, ambient tone of Spatial UI; keep accents in the pastel-to-mid-saturation range (lavender, sky blue, soft teal)
- **Do not use sharp, tight shadows**: Drop shadows with small blur radii (2px-4px) and high opacity suggest flat material contact rather than spatial floating; always use large blur radii (16px-60px) with low opacity
- **Avoid all-caps typography**: VisionOS avoids uppercase text in most contexts because it feels aggressive in spatial environments; use sentence case or title case for a calmer, more readable tone
- **Do not neglect backdrop-filter fallbacks**: `backdrop-filter` lacks support in some contexts (older browsers, certain WebViews); always provide a fallback `background-color` with slightly higher opacity so panels remain visible
- **Avoid excessive blur values**: Blur beyond 60px produces diminishing visual returns while increasing GPU load; 20px-40px provides the ideal glass clarity-to-softness ratio
- **Do not crowd panels together**: The illusion of floating depth requires visible space between elements; panels with 4px gaps look glued together rather than independently suspended in space

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Glassmorphism** | The direct visual ancestor; Spatial UI extends glassmorphism with depth hierarchy, ambient environments, and Apple's spatial computing principles rather than treating it as a surface decoration |
| **3D Immersive** | Shares the philosophy of depth and spatial content organization; 3D Immersive uses WebGL-rendered environments while Spatial UI achieves dimensional feeling through CSS layers and glass |
| **Minimalism** | Both prioritize clean space, restrained color, and typographic clarity; Spatial UI adds the glass material layer and depth hierarchy that pure Minimalism avoids |
| **Neomorphism** | Both explore soft, touchable interfaces with subtle shadows; Neomorphism uses embossed/debossed surfaces on light backgrounds while Spatial UI uses translucent floating panels on dark environments |
| **Dark Mode UI** | Shares the dark background and light text convention; Spatial UI enhances dark mode with glass materials, depth layers, and ambient gradients rather than flat dark surfaces |
| **Soft UI** | Both favor rounded corners, gentle shadows, and approachable surfaces; Soft UI tends toward opaque pastels while Spatial UI is translucent and layered |
| **Holographic** | Both use light-refracting, luminous visual language; Holographic leans toward iridescent rainbow surfaces while Spatial UI is more restrained with cool-toned glass |
| **Futuristic / Sci-Fi Interface** | Both suggest advanced technology; Sci-Fi interfaces use harsh neons, grid lines, and HUD overlays while Spatial UI is deliberately calm, ambient, and human-centered |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spatial UI Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --sp-void: #0D0D12;
      --sp-deep-space: #141420;
      --sp-charcoal: #1C1C2A;
      --sp-slate: #252536;
      --sp-white: #FFFFFF;
      --sp-soft-white: #F0F0F5;
      --sp-mist: #A0A0B8;
      --sp-lavender: #9B8FFF;
      --sp-sky: #64B5F6;
      --sp-cyan: #80DEEA;
      --sp-blush: #F8A4C8;
      --sp-teal: #4DB6AC;
      --sp-glass-border: rgba(255, 255, 255, 0.1);
      --sp-shadow: rgba(0, 0, 0, 0.2);
      --sp-ambient: #2A2A4A;
      --sp-glass-bg: rgba(255, 255, 255, 0.06);
      --sp-glass-bg-hover: rgba(255, 255, 255, 0.1);
      --sp-glass-blur: 40px;
      --sp-glass-radius: 20px;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.75;
      color: var(--sp-white);
      background: var(--sp-void);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    /* ===== AMBIENT BACKGROUND ===== */
    .ambient {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background: var(--sp-void);
    }

    .ambient::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 25% 20%, rgba(155, 143, 255, 0.07) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 75%, rgba(100, 181, 246, 0.05) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(128, 222, 234, 0.03) 0%, transparent 40%);
      animation: ambientDrift 25s ease-in-out infinite alternate;
    }

    .ambient::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 60% 30%, rgba(248, 164, 200, 0.04) 0%, transparent 45%),
        radial-gradient(ellipse at 15% 70%, rgba(155, 143, 255, 0.03) 0%, transparent 40%);
      animation: ambientDrift 30s ease-in-out infinite alternate-reverse;
    }

    @keyframes ambientDrift {
      0% { transform: translate(0, 0) scale(1); opacity: 1; }
      50% { transform: translate(-1.5%, 1%) scale(1.01); opacity: 0.85; }
      100% { transform: translate(1%, -0.5%) scale(1); opacity: 1; }
    }

    /* ===== NAVIGATION ===== */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 40px;
      background: rgba(13, 13, 18, 0.45);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(40px) saturate(1.3);
      -webkit-backdrop-filter: blur(40px) saturate(1.3);
      transition: background 0.4s ease, border-color 0.4s ease;
    }

    .nav.scrolled {
      background: rgba(13, 13, 18, 0.8);
      border-bottom-color: rgba(255, 255, 255, 0.1);
    }

    .nav .logo {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--sp-white);
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    .nav .logo span {
      color: var(--sp-lavender);
    }

    .nav-links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--sp-mist);
      text-decoration: none;
      padding: 8px 18px;
      border-radius: 10px;
      transition: color 0.25s ease, background 0.25s ease;
    }

    .nav-links a:hover {
      color: var(--sp-white);
      background: rgba(255, 255, 255, 0.06);
    }

    .nav-links a.active {
      color: var(--sp-lavender);
      background: rgba(155, 143, 255, 0.08);
    }

    /* ===== CONTENT WRAPPER ===== */
    .content-wrapper {
      position: relative;
      z-index: 10;
    }

    /* ===== HERO ===== */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 24px 80px;
    }

    .hero .inner {
      position: relative;
      z-index: 5;
      max-width: 680px;
    }

    .hero .eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--sp-lavender);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 24px;
      display: inline-block;
      padding: 6px 20px;
      border-radius: 20px;
      background: rgba(155, 143, 255, 0.1);
      border: 1px solid rgba(155, 143, 255, 0.15);
    }

    .hero h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.4rem, 5.5vw, 4rem);
      font-weight: 800;
      line-height: 1.08;
      color: var(--sp-white);
      margin-bottom: 24px;
      letter-spacing: -0.02em;
    }

    .hero h1 .highlight {
      background: linear-gradient(135deg, var(--sp-lavender), var(--sp-sky));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero .subtitle {
      font-size: 1.1rem;
      color: var(--sp-mist);
      line-height: 1.8;
      max-width: 520px;
      margin: 0 auto 40px;
    }

    .hero .cta-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .scroll-hint {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: var(--sp-mist);
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      animation: hintFloat 3s ease-in-out infinite;
    }

    .scroll-hint .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--sp-lavender);
      opacity: 0.6;
    }

    @keyframes hintFloat {
      0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
      50% { transform: translateX(-50%) translateY(8px); opacity: 0.5; }
    }

    /* ===== BUTTONS ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 30px;
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-decoration: none;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%);
      pointer-events: none;
    }

    .btn-primary {
      color: var(--sp-white);
      background: rgba(155, 143, 255, 0.2);
      border: 1px solid rgba(155, 143, 255, 0.3);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .btn-primary:hover {
      background: rgba(155, 143, 255, 0.3);
      border-color: rgba(155, 143, 255, 0.5);
      box-shadow: 0 8px 28px rgba(155, 143, 255, 0.15);
      transform: translateY(-2px);
    }

    .btn-primary:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 0.1s;
    }

    .btn-ghost {
      color: var(--sp-soft-white);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-ghost:hover {
      color: var(--sp-white);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.18);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }

    /* ===== SECTION LAYOUT ===== */
    .section {
      padding: 120px 24px;
      max-width: 1080px;
      margin: 0 auto;
    }

    .section-eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--sp-lavender);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(1.5rem, 3.5vw, 2.4rem);
      font-weight: 700;
      color: var(--sp-white);
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--sp-mist);
      max-width: 560px;
      line-height: 1.8;
      margin-bottom: 48px;
    }

    .divider {
      height: 1px;
      max-width: 1080px;
      margin: 0 auto;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(155, 143, 255, 0.12),
        rgba(100, 181, 246, 0.08),
        transparent
      );
    }

    /* ===== CARD GRID ===== */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--sp-glass-bg);
      border: 1px solid var(--sp-glass-border);
      border-radius: var(--sp-glass-radius);
      padding: 36px;
      backdrop-filter: blur(var(--sp-glass-blur)) saturate(1.4);
      -webkit-backdrop-filter: blur(var(--sp-glass-blur)) saturate(1.4);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                  box-shadow 0.4s ease,
                  background 0.3s ease,
                  border-color 0.3s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      background: var(--sp-glass-bg-hover);
      box-shadow:
        0 16px 48px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.16);
    }

    .card .icon-wrap {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: rgba(155, 143, 255, 0.12);
      border: 1px solid rgba(155, 143, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    .card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--sp-white);
      margin-bottom: 10px;
    }

    .card p {
      color: var(--sp-mist);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* ===== FEATURE SPLIT ===== */
    .feature-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      margin-top: 60px;
    }

    .feature-visual {
      aspect-ratio: 4 / 3;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .feature-visual::before {
      content: '';
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(155, 143, 255, 0.12) 0%, transparent 70%);
      animation: softPulse 5s ease-in-out infinite;
    }

    .feature-visual::after {
      content: '';
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(100, 181, 246, 0.1) 0%, transparent 70%);
      top: 25%;
      right: 20%;
      animation: softPulse 6s ease-in-out 1s infinite;
    }

    @keyframes softPulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.15); opacity: 1; }
    }

    .feature-visual .placeholder {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--sp-mist);
      letter-spacing: 0.06em;
      z-index: 1;
    }

    .feature-content h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--sp-white);
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }

    .feature-content p {
      color: var(--sp-mist);
      line-height: 1.8;
      margin-bottom: 24px;
    }

    .feature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .feature-list li {
      font-size: 0.92rem;
      color: var(--sp-soft-white);
      padding-left: 22px;
      position: relative;
    }

    .feature-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--sp-lavender);
      box-shadow: 0 0 8px rgba(155, 143, 255, 0.4);
    }

    /* ===== STATS ===== */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }

    .stat {
      text-align: center;
      padding: 32px 16px;
      background: var(--sp-glass-bg);
      border: 1px solid var(--sp-glass-border);
      border-radius: 16px;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .stat .number {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--sp-lavender);
      display: block;
      margin-bottom: 6px;
    }

    .stat .label {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--sp-mist);
      letter-spacing: 0.04em;
    }

    /* ===== TESTIMONIAL / QUOTE PANEL ===== */
    .quote-panel {
      background: rgba(155, 143, 255, 0.06);
      border: 1px solid rgba(155, 143, 255, 0.1);
      border-radius: 24px;
      padding: 48px;
      text-align: center;
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      margin-top: 60px;
    }

    .quote-panel blockquote {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--sp-soft-white);
      line-height: 1.7;
      font-style: italic;
      max-width: 600px;
      margin: 0 auto 20px;
    }

    .quote-panel cite {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: var(--sp-mist);
      font-style: normal;
    }

    /* ===== FOOTER ===== */
    .footer {
      padding: 60px 40px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      margin-top: 80px;
    }

    .footer p {
      font-size: 0.85rem;
      color: var(--sp-mist);
    }

    .footer a {
      color: var(--sp-lavender);
      text-decoration: none;
      transition: opacity 0.25s;
    }

    .footer a:hover {
      opacity: 0.7;
    }

    /* ===== SCROLL REVEAL ===== */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ===== REDUCED MOTION ===== */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      .reveal {
        opacity: 1;
        transform: none;
      }
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .nav {
        padding: 14px 20px;
      }

      .nav-links {
        display: none;
      }

      .hero h1 {
        font-size: clamp(1.8rem, 8vw, 2.8rem);
      }

      .hero .subtitle {
        font-size: 1rem;
      }

      .section {
        padding: 80px 20px;
      }

      .feature-split {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .stats-row {
        grid-template-columns: repeat(2, 1fr);
      }

      .cta-group {
        flex-direction: column;
        align-items: center;
      }

      .quote-panel {
        padding: 32px 24px;
      }

      .quote-panel blockquote {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .stats-row {
        grid-template-columns: 1fr;
      }

      .hero {
        padding: 100px 16px 60px;
      }

      .card {
        padding: 28px;
      }
    }
  </style>
</head>
<body>

  <!-- Ambient background environment -->
  <div class="ambient"></div>

  <!-- Glass navigation -->
  <nav class="nav" id="mainNav">
    <a href="#" class="logo">Spatial<span>Flow</span></a>
    <ul class="nav-links">
      <li><a href="#features" class="active">Features</a></li>
      <li><a href="#showcase">Showcase</a></li>
      <li><a href="#metrics">Metrics</a></li>
      <li><a href="#philosophy">Philosophy</a></li>
    </ul>
  </nav>

  <!-- Content sits above ambient layer -->
  <div class="content-wrapper">

    <!-- Hero -->
    <section class="hero">
      <div class="inner">
        <span class="eyebrow">Spatial Computing for the Web</span>
        <h1>Interfaces That <span class="highlight">Float in Space</span></h1>
        <p class="subtitle">
          Glass panels, depth layers, and ambient environments.
          Design interfaces that feel like they exist in the room with you,
          not trapped behind a screen.
        </p>
        <div class="cta-group">
          <a href="#features" class="btn btn-primary">Explore Panels</a>
          <a href="#philosophy" class="btn btn-ghost">Learn More</a>
        </div>
      </div>
      <div class="scroll-hint">
        <span>Scroll</span>
        <div class="dot"></div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Features -->
    <section class="section" id="features">
      <div class="reveal">
        <p class="section-eyebrow">Core Capabilities</p>
        <h2 class="section-title">Spatial Design Principles</h2>
        <p class="section-desc">
          Every panel floats with purpose. Depth communicates hierarchy,
          glass reveals environment, and generous space lets the interface breathe.
        </p>
      </div>

      <div class="card-grid">
        <div class="card reveal">
          <div class="icon-wrap">&#9673;</div>
          <h3>Glass Material</h3>
          <p>Translucent panels with backdrop blur let ambient color and
             light pass through, connecting UI to its environment.</p>
        </div>
        <div class="card reveal">
          <div class="icon-wrap">&#9672;</div>
          <h3>Depth Hierarchy</h3>
          <p>Z-position communicates importance. Closer elements demand attention
             while receding layers provide context.</p>
        </div>
        <div class="card reveal">
          <div class="icon-wrap">&#9711;</div>
          <h3>Ambient Light</h3>
          <p>Subtle gradient backgrounds simulate environmental lighting,
             creating atmosphere behind floating panels.</p>
        </div>
        <div class="card reveal">
          <div class="icon-wrap">&#10070;</div>
          <h3>Soft Elevation</h3>
          <p>Large, diffused shadows with low opacity imply floating separation
             rather than hard surface contact.</p>
        </div>
        <div class="card reveal">
          <div class="icon-wrap">&#9676;</div>
          <h3>Generous Space</h3>
          <p>Wide margins and padding treat negative space as atmosphere,
             giving every element room to exist in its depth plane.</p>
        </div>
        <div class="card reveal">
          <div class="icon-wrap">&#10023;</div>
          <h3>Spring Motion</h3>
          <p>Animations use spring-like easing with natural deceleration,
             making transitions feel physical and responsive.</p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Showcase -->
    <section class="section" id="showcase">
      <div class="feature-split reveal">
        <div class="feature-visual">
          <span class="placeholder">Spatial Viewport</span>
        </div>
        <div class="feature-content">
          <h3>Panels That Float</h3>
          <p>
            Inspired by Apple Vision Pro, each UI surface exists as a
            translucent panel suspended in space. Glass materials blur
            the environment behind them while maintaining crisp, legible
            content in the foreground.
          </p>
          <ul class="feature-list">
            <li>Backdrop blur with saturation boost for rich glass</li>
            <li>Inset light edges simulate material rim lighting</li>
            <li>Multi-layer depth shadows for spatial elevation</li>
            <li>Hover interactions lift panels in the z-axis</li>
          </ul>
        </div>
      </div>

      <div class="quote-panel reveal">
        <blockquote>
          "When you look at an app in visionOS, it looks like it's right
          there in the room with you, and you can interact with it just
          by looking at it."
        </blockquote>
        <cite>Apple Design Team &mdash; Designing for visionOS</cite>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Metrics -->
    <section class="section" id="metrics">
      <div class="reveal">
        <p class="section-eyebrow">Performance</p>
        <h2 class="section-title">Built for Comfort</h2>
        <p class="section-desc">
          Spatial interfaces prioritize user comfort and smooth rendering.
          Every glass panel is GPU-composited. Every transition is natural.
        </p>
      </div>
      <div class="stats-row reveal">
        <div class="stat">
          <span class="number">40px</span>
          <span class="label">Glass Blur</span>
        </div>
        <div class="stat">
          <span class="number">44px</span>
          <span class="label">Min Touch Target</span>
        </div>
        <div class="stat">
          <span class="number">20px</span>
          <span class="label">Panel Radius</span>
        </div>
        <div class="stat">
          <span class="number">60fps</span>
          <span class="label">Target Rate</span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Philosophy -->
    <section class="section" id="philosophy">
      <div class="reveal">
        <p class="section-eyebrow">Philosophy</p>
        <h2 class="section-title">Space Invites Interaction</h2>
        <p class="section-desc">
          Spatial UI does not demand attention with bright colors and aggressive
          contrast. It invites interaction through depth, translucency, and
          atmosphere. Interfaces float calmly, revealing information through
          layered glass rather than flat screens.
        </p>
      </div>
      <div style="text-align: center; margin-top: 36px;" class="reveal">
        <a href="#" class="btn btn-primary">Start Building</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>Spatial UI Design Reference &middot;
         Inspired by <a href="https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos" target="_blank">Apple visionOS</a></p>
    </footer>

  </div>

  <script>
    // --- Nav scroll effect ---
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // --- Scroll reveal (IntersectionObserver) ---
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // --- Respect reduced motion ---
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealEls.forEach(el => el.classList.add('visible'));
    }
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Combine `backdrop-filter: blur()` with `saturate()` for authentic glass**: A blur value of 20px-40px paired with `saturate(1.2-1.5)` produces the warm, luminous frosted glass effect that visionOS achieves natively; without the saturation boost, glass panels look washed out and lifeless against dark backgrounds
- **Provide a fallback `background-color` for `backdrop-filter`**: Not all environments support `backdrop-filter` (older browsers, some in-app WebViews); always set a slightly more opaque `background: rgba(28, 28, 42, 0.85)` as a fallback so panels remain visible and legible when blur is unavailable
- **Use `will-change: transform` on animated glass panels**: Glass panels with hover lift effects or scroll-driven parallax benefit from GPU pre-compositing; apply `will-change: transform` to these elements, but remove it when not animating to avoid unnecessary memory allocation
- **Design at multiple blur levels for depth hierarchy**: Use 20px blur for surface-level elements (nav bars, small controls), 40px for primary content panels, and 60px for modal overlays; the blur amount itself becomes a depth signal, reinforcing the spatial hierarchy without explicit shadow tuning
- **Respect `prefers-reduced-motion` with static depth cues**: When the user has opted for reduced motion, replace spring animations with instant transitions but keep static depth elements (shadows, layered backgrounds, glass materials) intact; spatial depth can be communicated without movement
- **Test against both light and dark ambient backgrounds**: Glass panels that look perfect against a dark indigo gradient may lose contrast when the ambient background shifts lighter; always verify legibility at the extremes of your background's gradient range, especially for body text
- **Use CSS custom properties for theming glass tokens**: Abstract `--glass-bg`, `--glass-blur`, `--glass-border`, and `--glass-radius` into design tokens so the entire spatial language can be tuned from one place; this also enables easy adaptation for light-mode variants where glass tints shift from white to dark
- **Cap blur values at 60px for performance**: Higher blur values (80px-100px+) produce negligible visual difference while substantially increasing GPU compositing cost; 40px is the sweet spot for most glass panels, with 60px reserved for overlays that need maximum environmental softness
