# Biomorphic Design Reference

## Overview

Biomorphic design is a visual and architectural aesthetic rooted in the imitation and abstraction of forms found in living organisms. The term derives from the Greek words "bios" (life) and "morphe" (form), and the movement emerged in the early twentieth century through the works of artists like Jean Arp, Henry Moore, and Joan Miro, who explored abstracted organic shapes that evoked cellular structures, amoebas, bones, and plant life without directly copying them. In architecture, Antoni Gaudi's Sagrada Familia and Eero Saarinen's TWA Flight Center at JFK Airport stand as landmark examples of biomorphic thinking translated into built form -- structures that seem to grow, breathe, and flow rather than sit rigidly on their foundations.

In digital and web design, biomorphism manifests as fluid, curvilinear layouts that reject the hard rectangles and straight lines of conventional grid systems. Blob shapes, amoeba-like SVG backgrounds, wavy section dividers, rounded asymmetric containers, and soft gradient overlays replace sharp corners and rigid boxes. The aesthetic evokes a sense of comfort, warmth, and approachability -- making digital interfaces feel less mechanical and more human. Companies like Dropbox, Mailchimp, Spotify, and Stripe have all incorporated biomorphic elements into their visual identities, using soft fluid shapes as backgrounds, wavy separators, and rounded organic iconography to create friendly, inviting user experiences.

The color language of biomorphic design draws heavily from the natural world: muted earth tones, moss greens, warm sandstone, ocean blues, and soft terracotta, often paired with clean whites or gentle creams to maintain breathing room. Typography tends toward humanist sans-serifs and rounded geometric fonts that echo the softness of the surrounding shapes, avoiding harsh angular or condensed typefaces that would clash with the organic flow. The overall effect is a design language that feels alive -- as if the interface itself were a growing, adapting organism rather than a static arrangement of rectangles.

---

## Visual Characteristics

### Core Design Traits

- **Organic blob shapes**: Freeform, amoeba-like shapes used as backgrounds, containers, and decorative elements, often generated with tools like Blobmaker or hand-drawn SVG paths
- **Curvilinear edges**: All borders, containers, and section dividers use flowing curves rather than straight lines; border-radius values are large and asymmetric
- **Soft asymmetry**: Compositions are deliberately unbalanced in a natural way, mimicking the irregular symmetry found in leaves, shells, and cellular structures
- **Fluid gradients**: Smooth color transitions that suggest depth and dimensionality, often using nature-derived palettes that shift between warm and cool tones
- **Wavy section dividers**: SVG or CSS-generated wave shapes replace hard horizontal lines between page sections
- **Rounded iconography**: Icons and UI elements use soft, organic contours rather than geometric precision
- **Layered depth through overlap**: Blob shapes and organic forms layer over one another with varying opacity, creating a sense of natural growth and depth
- **Nature-derived textures**: Subtle references to cellular patterns, water ripples, leaf veins, topographic contours, and geological formations
- **Generous white space**: Clean, open layouts that let organic shapes breathe, avoiding clutter that would undermine the natural feel
- **Animated fluidity**: Gentle CSS animations that make shapes morph, pulse, or drift, reinforcing the sense of a living interface
- **Soft shadows and glows**: Diffuse, warm shadows replace hard drop shadows; light sources feel ambient rather than directional

### Design Principles

- **Nature as blueprint**: Every design decision should reference observable natural forms -- the curve of a wave, the branching of a tree, the asymmetry of a pebble
- **Softness over sharpness**: Round every edge, diffuse every shadow, and smooth every transition; nothing should feel brittle or angular
- **Comfort and approachability**: The design should make users feel welcome and at ease, as if entering a warm, sunlit greenhouse
- **Organic rhythm**: Layouts should flow with a natural cadence, guiding the eye along curves rather than snapping it between rigid grid columns
- **Imperfection as beauty**: Embrace asymmetry, irregular shapes, and gentle randomness; mathematical perfection belongs to geometric design, not biomorphic
- **Breathing room**: Every organic shape needs surrounding negative space to maintain its identity; crowded layouts destroy the effect
- **Sustainability in spirit**: Biomorphic design aligns with ecological consciousness; visual choices should evoke environmental harmony

---

## Color Palette

Biomorphic palettes are grounded in the natural world -- earth, water, vegetation, and sky. Colors tend to be muted, warm, and low-contrast, creating a calming atmosphere that mirrors the organic shapes. Occasional vibrant botanical accents (a coral bloom, a spring leaf) provide focal-point energy without disrupting the overall serenity.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Warm Cream | `#FAF3E8` | Primary background; warm off-white canvas |
| Sandstone | `#D4B896` | Secondary background; card fills |
| Moss Green | `#5B7C5A` | Primary accent; buttons, links, active states |
| Deep Forest | `#2C4A2C` | Dark text on light backgrounds; headings |
| Ocean Teal | `#3D8B8B` | Secondary accent; interactive highlights |
| Terracotta | `#C17A56` | Warm accent; call-to-action emphasis |
| Soft Sage | `#A8BFA0` | Decorative fills; muted blob backgrounds |
| Clay Rose | `#C4938A` | Tertiary accent; hover states, badges |
| Pebble Grey | `#8A8578` | Secondary text; captions, metadata |
| River Blue | `#6A9EB5` | Informational accents; links, icons |
| Bark Brown | `#5C4A3A` | Border accents; dark container backgrounds |
| Ivory White | `#F5EFE4` | Card backgrounds; elevated surfaces |
| Coral Bloom | `#E07B60` | High-contrast CTA; notification accents |
| Lichen Yellow | `#D4C77A` | Warning states; decorative highlights |
| Deep Earth | `#3A3028` | Maximum contrast text; footer backgrounds |

### CSS Custom Properties

```css
:root {
  --bio-cream: #FAF3E8;
  --bio-sandstone: #D4B896;
  --bio-moss: #5B7C5A;
  --bio-forest: #2C4A2C;
  --bio-teal: #3D8B8B;
  --bio-terracotta: #C17A56;
  --bio-sage: #A8BFA0;
  --bio-rose: #C4938A;
  --bio-pebble: #8A8578;
  --bio-river: #6A9EB5;
  --bio-bark: #5C4A3A;
  --bio-ivory: #F5EFE4;
  --bio-coral: #E07B60;
  --bio-lichen: #D4C77A;
  --bio-earth: #3A3028;
}
```

---

## Typography

Biomorphic typography favors humanist sans-serifs and rounded typefaces that complement the organic shapes and soft curves of the aesthetic. Letters should feel approachable, warm, and slightly imperfect -- reflecting natural forms rather than mechanical precision. Avoid condensed, sharp-cornered, or overly geometric fonts that would clash with the fluid design language.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Nunito** | 300, 400, 600, 700 | Primary body text; rounded humanist sans with soft terminals | [Nunito](https://fonts.google.com/specimen/Nunito) |
| **Comfortaa** | 300, 400, 500, 600, 700 | Display headings; geometric rounded with organic warmth | [Comfortaa](https://fonts.google.com/specimen/Comfortaa) |
| **Quicksand** | 300, 400, 500, 600, 700 | Subheadings and UI labels; rounded geometric sans | [Quicksand](https://fonts.google.com/specimen/Quicksand) |
| **Varela Round** | 400 | Friendly single-weight option for small text and captions | [Varela Round](https://fonts.google.com/specimen/Varela+Round) |
| **DM Sans** | 300, 400, 500, 600, 700 | Clean body alternative; humanist with subtle softness | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Comfortaa 700 | Nunito 400 | Soft organic warmth; friendly and approachable |
| Quicksand 600 | DM Sans 400 | Modern organic; clean with rounded accents |
| Comfortaa 500 | Quicksand 400 | Fully rounded; maximum biomorphic expression |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Nunito', 'Helvetica Neue', sans-serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3A3028;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #2C4A2C;
}

.display-title {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.2;
}

.label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

---

## Layout Principles

- **Fluid container widths**: Use `max-width` with percentage-based or `clamp()`-based widths rather than fixed pixel values; containers should feel like they flow and adapt organically
- **Asymmetric grid compositions**: Break out of equal-column grids; use CSS Grid with uneven column tracks (e.g., `1fr 1.5fr` or `2fr 1fr`) to create naturally imbalanced layouts
- **Curved section transitions**: Replace hard breaks between page sections with SVG wave dividers or `clip-path` curves that make sections flow into one another
- **Overlapping blob layers**: Position decorative blob shapes behind and around content using `position: absolute` with low-opacity fills to create depth without obscuring readability
- **Generous padding and margins**: Biomorphic layouts need ample breathing room; use `padding: 60px 40px` or larger for sections, and allow whitespace to serve as a design element
- **Organic card arrangements**: Avoid strict grid alignment for card groups; stagger cards vertically, vary their border-radius values, and let them feel naturally scattered
- **Floating decorative elements**: Place abstract organic shapes at page edges, behind headings, and around images as visual connectors that unify the composition
- **Vertical rhythm through curves**: Rather than using uniform spacing, vary section heights and let the eye follow a natural undulating path down the page
- **Responsive fluidity**: On smaller screens, blob backgrounds should scale gracefully, and curved dividers should simplify; the organic feel must persist across breakpoints
- **Content-first hierarchy**: Despite the visual playfulness of organic shapes, content hierarchy must remain clear; use size, weight, and color contrast to guide attention

---

## CSS / Design Techniques

### Biomorphic Card

```css
.bio-card {
  background: var(--bio-ivory, #F5EFE4);
  border: none;
  border-radius: 24px 48px 24px 48px;
  padding: 40px 36px;
  box-shadow: 0 8px 32px rgba(58, 48, 40, 0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bio-card::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: var(--bio-sage, #A8BFA0);
  border-radius: 50% 60% 40% 70% / 50% 40% 60% 50%;
  opacity: 0.25;
  pointer-events: none;
}

.bio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(58, 48, 40, 0.12);
}

.bio-card h3 {
  font-family: 'Comfortaa', cursive;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--bio-forest, #2C4A2C);
  margin-bottom: 12px;
}

.bio-card p {
  font-family: 'Nunito', sans-serif;
  color: var(--bio-pebble, #8A8578);
  line-height: 1.75;
}
```

### Organic Button

```css
.bio-button {
  display: inline-block;
  background: var(--bio-moss, #5B7C5A);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  padding: 14px 36px;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.bio-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.bio-button:hover {
  background: var(--bio-forest, #2C4A2C);
  transform: scale(1.04);
  box-shadow: 0 8px 24px rgba(91, 124, 90, 0.3);
}

.bio-button:hover::before {
  width: 300px;
  height: 300px;
}

.bio-button--secondary {
  background: transparent;
  color: var(--bio-moss, #5B7C5A);
  border: 2px solid var(--bio-moss, #5B7C5A);
}

.bio-button--secondary:hover {
  background: var(--bio-moss, #5B7C5A);
  color: #FFFFFF;
}
```

### Navigation Bar

```css
.bio-nav {
  background: rgba(250, 243, 232, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: none;
  box-shadow: 0 2px 20px rgba(58, 48, 40, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.bio-nav__logo {
  font-family: 'Comfortaa', cursive;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--bio-forest, #2C4A2C);
  text-decoration: none;
}

.bio-nav__links {
  display: flex;
  gap: 8px;
  list-style: none;
}

.bio-nav__links a {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bio-bark, #5C4A3A);
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 50px;
  transition: background 0.3s ease, color 0.3s ease;
}

.bio-nav__links a:hover,
.bio-nav__links a.active {
  background: var(--bio-sage, #A8BFA0);
  color: var(--bio-forest, #2C4A2C);
}
```

### Hero Section

```css
.bio-hero {
  text-align: center;
  padding: 120px 40px 100px;
  position: relative;
  overflow: hidden;
}

.bio-hero::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -10%;
  width: 55%;
  height: 500px;
  background: var(--bio-sage, #A8BFA0);
  opacity: 0.15;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: blob-drift 12s ease-in-out infinite alternate;
  pointer-events: none;
}

.bio-hero::after {
  content: '';
  position: absolute;
  bottom: -80px;
  right: -5%;
  width: 45%;
  height: 400px;
  background: var(--bio-teal, #3D8B8B);
  opacity: 0.1;
  border-radius: 50% 30% 50% 70% / 60% 40% 50% 40%;
  animation: blob-drift 15s ease-in-out infinite alternate-reverse;
  pointer-events: none;
}

@keyframes blob-drift {
  0% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%;
    transform: translate(30px, -20px) rotate(5deg);
  }
}

.bio-hero h1 {
  font-family: 'Comfortaa', cursive;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--bio-forest, #2C4A2C);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.bio-hero .subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: 1.15rem;
  color: var(--bio-pebble, #8A8578);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.85;
  position: relative;
  z-index: 1;
}
```

### SVG Wave Divider

```css
.bio-wave-divider {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin: -1px 0;
}

.bio-wave-divider svg {
  display: block;
  width: 100%;
  height: 80px;
}

/*
  Use inline SVG like:
  <div class="bio-wave-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#F5EFE4"/>
    </svg>
  </div>
*/
```

### Organic Background Blobs

```css
.bio-background {
  min-height: 100vh;
  background: var(--bio-cream, #FAF3E8);
  position: relative;
  overflow: hidden;
}

.bio-blob {
  position: absolute;
  pointer-events: none;
  opacity: 0.12;
}

.bio-blob--1 {
  top: 5%;
  left: -8%;
  width: 500px;
  height: 500px;
  background: var(--bio-moss, #5B7C5A);
  border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%;
  animation: blob-morph 18s ease-in-out infinite;
}

.bio-blob--2 {
  bottom: 10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: var(--bio-teal, #3D8B8B);
  border-radius: 55% 45% 38% 62% / 52% 48% 52% 48%;
  animation: blob-morph 22s ease-in-out infinite reverse;
}

.bio-blob--3 {
  top: 40%;
  right: 15%;
  width: 250px;
  height: 250px;
  background: var(--bio-terracotta, #C17A56);
  border-radius: 48% 52% 58% 42% / 55% 45% 55% 45%;
  animation: blob-morph 14s ease-in-out infinite;
}

@keyframes blob-morph {
  0%, 100% {
    border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%;
    transform: scale(1) rotate(0deg);
  }
  33% {
    border-radius: 55% 45% 35% 65% / 58% 42% 58% 42%;
    transform: scale(1.05) rotate(3deg);
  }
  66% {
    border-radius: 38% 62% 52% 48% / 42% 58% 42% 58%;
    transform: scale(0.97) rotate(-2deg);
  }
}
```

### Organic Image Mask

```css
.bio-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
  box-shadow: 0 12px 40px rgba(58, 48, 40, 0.1);
  transition: border-radius 0.8s ease;
}

.bio-image:hover {
  border-radius: 60% 40% 45% 55% / 45% 60% 40% 55%;
}
```

### Flowing Section Container

```css
.bio-section {
  padding: 80px 40px;
  position: relative;
}

.bio-section--tinted {
  background: var(--bio-ivory, #F5EFE4);
  clip-path: ellipse(120% 100% at 50% 100%);
  margin: -40px 0;
  padding: 100px 40px 80px;
}

.bio-section__inner {
  max-width: 960px;
  margin: 0 auto;
}
```

---

## Design Do's and Don'ts

### Do's

- Use generous border-radius values (24px+) and asymmetric radius combinations (e.g., `24px 48px 24px 48px`) to create organic container shapes
- Draw color inspiration from observable nature: forest floors, river stones, desert sand, ocean shallows, and botanical gardens
- Animate blob shapes subtly with long durations (10-20 seconds) and gentle easing to evoke slow, natural movement
- Let organic shapes overlap and layer with low opacity to create depth and visual richness
- Use SVG paths for wavy section dividers rather than hard horizontal rules
- Pair rounded fonts (Comfortaa, Nunito, Quicksand) with soft UI elements for a cohesive organic feel
- Maintain abundant whitespace; organic shapes need room to breathe and be perceived as individual forms
- Use `clip-path` and `border-radius` with percentage-based multi-value syntax to create unique, non-circular curves

### Don'ts

- Avoid sharp corners, hard angles, and strictly geometric shapes; a single rigid rectangle can break the entire organic mood
- Do not use high-contrast neon colors or electric palette choices; biomorphic design is earthy, warm, and muted
- Avoid fast, abrupt animations; quick snapping transitions contradict the slow, living quality of organic motion
- Do not overcrowd the layout with too many blob shapes; visual clutter negates the natural, open feeling
- Avoid purely symmetrical compositions; perfect mirror symmetry feels manufactured and contradicts the organic principle
- Do not use condensed, sharp, or angular typefaces (e.g., Impact, Oswald, Bebas Neue); they clash with curved design elements
- Avoid flat, uniform backgrounds without any textural or gradient variation; the result feels sterile rather than alive
- Do not ignore accessibility; ensure sufficient color contrast between muted earth tones and text, testing against WCAG AA standards

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Organic Minimalism** | Shares the emphasis on natural forms and whitespace but tends toward even greater restraint and less decorative expression |
| **Neomorphism** | Both use soft shadows and rounded forms, but Neomorphism focuses on embossed/debossed UI elements rather than freeform organic shapes |
| **Art Nouveau** | The historical predecessor; shares flowing curves and nature motifs, but Art Nouveau is more ornamental, detailed, and illustrative |
| **Liquid / Fluid Design** | Overlaps in use of flowing shapes and gradients, but Fluid Design is broader and may include sharp geometric contrasts |
| **Japandi** | Shares muted natural palettes and calm compositions, but Japandi is more geometric, minimal, and influenced by Japanese-Scandinavian fusion |
| **Eco / Green Design** | Both draw from nature, but Eco Design foregrounds environmental messaging and uses literal nature imagery (photos of plants, leaves) |
| **Memphis Design** | The polar opposite in many ways -- Memphis uses hard geometry, clashing colors, and intentional visual chaos -- but both reject rigid modernist grids |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biomorphic Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bio-cream: #FAF3E8;
      --bio-sandstone: #D4B896;
      --bio-moss: #5B7C5A;
      --bio-forest: #2C4A2C;
      --bio-teal: #3D8B8B;
      --bio-terracotta: #C17A56;
      --bio-sage: #A8BFA0;
      --bio-rose: #C4938A;
      --bio-pebble: #8A8578;
      --bio-river: #6A9EB5;
      --bio-bark: #5C4A3A;
      --bio-ivory: #F5EFE4;
      --bio-coral: #E07B60;
      --bio-lichen: #D4C77A;
      --bio-earth: #3A3028;
    }

    body {
      font-family: 'Nunito', 'Helvetica Neue', sans-serif;
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--bio-earth);
      background: var(--bio-cream);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ===========================
       Navigation
    =========================== */
    .nav {
      background: rgba(250, 243, 232, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 16px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 20px rgba(58, 48, 40, 0.06);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav__logo {
      font-family: 'Comfortaa', cursive;
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--bio-forest);
      text-decoration: none;
    }

    .nav__links {
      display: flex;
      gap: 6px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Quicksand', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--bio-bark);
      text-decoration: none;
      padding: 8px 18px;
      border-radius: 50px;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .nav__links a:hover,
    .nav__links a.active {
      background: var(--bio-sage);
      color: var(--bio-forest);
    }

    /* ===========================
       Hero Section
    =========================== */
    .hero {
      text-align: center;
      padding: 100px 40px 80px;
      position: relative;
      overflow: hidden;
    }

    .hero__blob--1 {
      position: absolute;
      top: -80px;
      left: -8%;
      width: 480px;
      height: 480px;
      background: var(--bio-sage);
      opacity: 0.15;
      border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%;
      animation: blob-drift 14s ease-in-out infinite alternate;
      pointer-events: none;
    }

    .hero__blob--2 {
      position: absolute;
      bottom: -60px;
      right: -5%;
      width: 380px;
      height: 380px;
      background: var(--bio-teal);
      opacity: 0.1;
      border-radius: 55% 45% 38% 62% / 52% 48% 52% 48%;
      animation: blob-drift 18s ease-in-out infinite alternate-reverse;
      pointer-events: none;
    }

    .hero__blob--3 {
      position: absolute;
      top: 30%;
      right: 10%;
      width: 200px;
      height: 200px;
      background: var(--bio-terracotta);
      opacity: 0.08;
      border-radius: 48% 52% 58% 42% / 55% 45% 55% 45%;
      animation: blob-drift 20s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes blob-drift {
      0% {
        border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%;
        transform: translate(0, 0) rotate(0deg);
      }
      100% {
        border-radius: 58% 42% 38% 62% / 55% 45% 55% 45%;
        transform: translate(25px, -15px) rotate(4deg);
      }
    }

    .hero__label {
      font-family: 'Quicksand', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--bio-moss);
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-family: 'Comfortaa', cursive;
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 700;
      color: var(--bio-forest);
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .hero p {
      font-size: 1.1rem;
      color: var(--bio-pebble);
      max-width: 540px;
      margin: 0 auto 32px;
      position: relative;
      z-index: 1;
    }

    /* ===========================
       Buttons
    =========================== */
    .button {
      display: inline-block;
      background: var(--bio-moss);
      color: #FFFFFF;
      border: none;
      border-radius: 50px;
      padding: 14px 36px;
      font-family: 'Quicksand', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .button:hover {
      background: var(--bio-forest);
      transform: scale(1.04);
      box-shadow: 0 8px 24px rgba(91, 124, 90, 0.3);
    }

    .button--outline {
      background: transparent;
      color: var(--bio-moss);
      border: 2px solid var(--bio-moss);
    }

    .button--outline:hover {
      background: var(--bio-moss);
      color: #FFFFFF;
      transform: scale(1.04);
    }

    .hero__buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }

    /* ===========================
       Wave Divider
    =========================== */
    .wave-divider {
      width: 100%;
      overflow: hidden;
      line-height: 0;
      margin: -1px 0;
    }

    .wave-divider svg {
      display: block;
      width: 100%;
      height: 80px;
    }

    /* ===========================
       Features Section
    =========================== */
    .features {
      background: var(--bio-ivory);
      padding: 80px 40px;
    }

    .features__inner {
      max-width: 960px;
      margin: 0 auto;
    }

    .features__header {
      text-align: center;
      margin-bottom: 48px;
    }

    .features__header h2 {
      font-family: 'Comfortaa', cursive;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--bio-forest);
      margin-bottom: 12px;
    }

    .features__header p {
      color: var(--bio-pebble);
      max-width: 480px;
      margin: 0 auto;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }

    /* ===========================
       Cards
    =========================== */
    .card {
      background: var(--bio-cream);
      border: none;
      border-radius: 24px 48px 24px 48px;
      padding: 36px 32px;
      box-shadow: 0 8px 32px rgba(58, 48, 40, 0.06);
      position: relative;
      overflow: hidden;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: -25px;
      right: -25px;
      width: 100px;
      height: 100px;
      border-radius: 50% 60% 40% 70% / 50% 40% 60% 50%;
      opacity: 0.2;
      pointer-events: none;
    }

    .card:nth-child(1)::before { background: var(--bio-sage); }
    .card:nth-child(2)::before { background: var(--bio-teal); }
    .card:nth-child(3)::before { background: var(--bio-terracotta); }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(58, 48, 40, 0.1);
    }

    .card__icon {
      width: 56px;
      height: 56px;
      border-radius: 50% 40% 60% 50% / 40% 60% 40% 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #FFFFFF;
    }

    .card:nth-child(1) .card__icon { background: var(--bio-moss); }
    .card:nth-child(2) .card__icon { background: var(--bio-teal); }
    .card:nth-child(3) .card__icon { background: var(--bio-terracotta); }

    .card h3 {
      font-family: 'Comfortaa', cursive;
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--bio-forest);
      margin-bottom: 10px;
    }

    .card p {
      color: var(--bio-pebble);
      font-size: 0.95rem;
      line-height: 1.75;
    }

    /* ===========================
       About / Split Section
    =========================== */
    .about {
      padding: 80px 40px;
      position: relative;
    }

    .about__inner {
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 60px;
      align-items: center;
    }

    .about__image-wrap {
      position: relative;
    }

    .about__image {
      width: 100%;
      aspect-ratio: 4 / 5;
      background: linear-gradient(135deg, var(--bio-sage), var(--bio-teal));
      border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.4);
      font-family: 'Comfortaa', cursive;
      font-size: 0.9rem;
      transition: border-radius 0.8s ease;
    }

    .about__image:hover {
      border-radius: 60% 40% 45% 55% / 45% 60% 40% 55%;
    }

    .about__image-accent {
      position: absolute;
      bottom: -20px;
      left: -20px;
      width: 140px;
      height: 140px;
      background: var(--bio-sandstone);
      border-radius: 52% 48% 42% 58% / 48% 52% 48% 52%;
      opacity: 0.25;
      z-index: -1;
    }

    .about__text h2 {
      font-family: 'Comfortaa', cursive;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--bio-forest);
      margin-bottom: 16px;
    }

    .about__text p {
      color: var(--bio-pebble);
      margin-bottom: 16px;
    }

    .about__text p:last-of-type {
      margin-bottom: 28px;
    }

    /* ===========================
       Testimonial Section
    =========================== */
    .testimonial {
      background: var(--bio-ivory);
      padding: 80px 40px;
      text-align: center;
    }

    .testimonial__inner {
      max-width: 640px;
      margin: 0 auto;
    }

    .testimonial blockquote {
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      font-style: italic;
      color: var(--bio-bark);
      line-height: 1.85;
      margin-bottom: 24px;
      position: relative;
    }

    .testimonial blockquote::before {
      content: '\201C';
      font-family: 'Comfortaa', cursive;
      font-size: 4rem;
      color: var(--bio-sage);
      position: absolute;
      top: -20px;
      left: -10px;
      line-height: 1;
    }

    .testimonial cite {
      font-family: 'Quicksand', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--bio-moss);
      font-style: normal;
    }

    /* ===========================
       CTA Section
    =========================== */
    .cta {
      padding: 80px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta__blob {
      position: absolute;
      width: 350px;
      height: 350px;
      background: var(--bio-moss);
      opacity: 0.06;
      border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
      animation: blob-drift 16s ease-in-out infinite alternate;
      pointer-events: none;
    }

    .cta__blob--left {
      top: -50px;
      left: -80px;
    }

    .cta__blob--right {
      bottom: -80px;
      right: -60px;
      animation-direction: alternate-reverse;
    }

    .cta h2 {
      font-family: 'Comfortaa', cursive;
      font-size: 2rem;
      font-weight: 700;
      color: var(--bio-forest);
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .cta p {
      color: var(--bio-pebble);
      max-width: 460px;
      margin: 0 auto 28px;
      position: relative;
      z-index: 1;
    }

    .cta .button {
      position: relative;
      z-index: 1;
    }

    /* ===========================
       Footer
    =========================== */
    .footer {
      background: var(--bio-earth);
      color: rgba(250, 243, 232, 0.6);
      padding: 40px;
      text-align: center;
      font-family: 'Quicksand', sans-serif;
      font-size: 0.85rem;
    }

    .footer a {
      color: var(--bio-sage);
      text-decoration: none;
    }

    .footer a:hover {
      color: #FFFFFF;
    }

    /* ===========================
       Responsive
    =========================== */
    @media (max-width: 768px) {
      .nav {
        padding: 14px 20px;
      }

      .nav__links {
        gap: 2px;
      }

      .nav__links a {
        padding: 6px 12px;
        font-size: 0.82rem;
      }

      .hero {
        padding: 70px 24px 60px;
      }

      .hero__blob--1,
      .hero__blob--2,
      .hero__blob--3 {
        display: none;
      }

      .features,
      .about,
      .testimonial,
      .cta {
        padding: 60px 24px;
      }

      .about__inner {
        grid-template-columns: 1fr;
        gap: 36px;
      }

      .about__image {
        max-width: 320px;
        margin: 0 auto;
      }

      .card {
        border-radius: 20px 36px 20px 36px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__logo">Flora</a>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__blob--1"></div>
    <div class="hero__blob--2"></div>
    <div class="hero__blob--3"></div>
    <p class="hero__label">Organic Design Studio</p>
    <h1>Design That Breathes</h1>
    <p>We craft digital experiences inspired by the flowing forms,
       soft curves, and living rhythms of the natural world.</p>
    <div class="hero__buttons">
      <a href="#" class="button">Explore Our Work</a>
      <a href="#" class="button button--outline">Learn More</a>
    </div>
  </section>

  <!-- Wave Divider -->
  <div class="wave-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#F5EFE4"/>
    </svg>
  </div>

  <!-- Features Section -->
  <section class="features">
    <div class="features__inner">
      <div class="features__header">
        <h2>Shaped by Nature</h2>
        <p>Every element draws from organic patterns --
           the arc of a wave, the spiral of a shell,
           the branching of a tree.</p>
      </div>
      <div class="features__grid">
        <div class="card">
          <div class="card__icon">&#x1F33F;</div>
          <h3>Organic Forms</h3>
          <p>Freeform shapes and fluid curves replace rigid grids,
             creating layouts that feel alive and naturally balanced.</p>
        </div>
        <div class="card">
          <div class="card__icon">&#x1F30A;</div>
          <h3>Flowing Motion</h3>
          <p>Gentle animations mimic the slow rhythm of ocean tides
             and swaying branches, adding life without distraction.</p>
        </div>
        <div class="card">
          <div class="card__icon">&#x1F343;</div>
          <h3>Earth Palette</h3>
          <p>Colors drawn from moss, sandstone, river water, and
             forest canopy ground the design in natural warmth.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Wave Divider (reverse) -->
  <div class="wave-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path d="M0,40 C360,0 720,80 1080,30 C1260,10 1380,50 1440,40 L1440,0 L0,0 Z"
            fill="#F5EFE4"/>
    </svg>
  </div>

  <!-- About Section -->
  <section class="about">
    <div class="about__inner">
      <div class="about__image-wrap">
        <div class="about__image">Image Placeholder</div>
        <div class="about__image-accent"></div>
      </div>
      <div class="about__text">
        <h2>Rooted in Living Systems</h2>
        <p>Biomorphic design draws from the patterns, structures,
           and rhythms of biological organisms. From the fractal
           geometry of fern fronds to the fluid dynamics of
           river deltas, nature provides an inexhaustible library
           of form and function.</p>
        <p>We translate these organic principles into digital
           experiences that feel warm, intuitive, and distinctly
           human -- spaces where technology serves life, not the
           other way around.</p>
        <a href="#" class="button">Our Philosophy</a>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial">
    <div class="testimonial__inner">
      <blockquote>
        Working with Flora transformed our brand. The organic shapes
        and natural color palette made our platform feel welcoming
        and alive in a way that rigid grid layouts never could.
      </blockquote>
      <cite>-- Maren Solberg, Creative Director at Terraverde</cite>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="cta__blob cta__blob--left"></div>
    <div class="cta__blob cta__blob--right"></div>
    <h2>Ready to Grow Something New?</h2>
    <p>Let natural forms guide your next digital project.
       Reach out and let us shape something organic together.</p>
    <a href="#" class="button">Start a Conversation</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>Flora Design Studio &middot; Inspired by living forms &middot;
       <a href="#">Privacy</a> &middot; <a href="#">Contact</a></p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Blob generation**: Use tools like [Blobmaker](https://www.blobmaker.app/) or [Haikei](https://haikei.app/) to generate unique SVG blob shapes, then paste them directly into your HTML or use them as CSS background images
- **CSS `border-radius` for organic shapes**: The eight-value `border-radius` shorthand (`border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%`) creates asymmetric, amoeba-like curves on any element without SVG
- **`clip-path` for sections**: Use `clip-path: ellipse()` or `clip-path: polygon()` on section wrappers to create curved, non-rectangular content areas that flow into each other
- **Performance with animations**: Limit animated blob shapes to 2-4 per viewport; use `transform` and `opacity` for GPU-accelerated animation, and apply `will-change: transform` sparingly to improve rendering performance
- **Accessible contrast**: Earth-tone palettes can easily fail WCAG contrast requirements; always test muted greens and browns against cream backgrounds using a contrast checker, and darken text colors as needed
- **SVG wave dividers**: Generate custom wave SVGs at [getwaves.io](https://getwaves.io/) for section transitions; use `preserveAspectRatio="none"` so waves stretch responsively across all viewport widths
- **Responsive blob scaling**: Use `vw`-based widths for decorative blobs (e.g., `width: 35vw`) so they scale proportionally on different screens; hide or simplify them on mobile with a media query to avoid layout overflow
- **Natural image masking**: Apply the multi-value `border-radius` technique to `<img>` elements with `object-fit: cover` to create organic, non-circular image crops that match the biomorphic aesthetic
