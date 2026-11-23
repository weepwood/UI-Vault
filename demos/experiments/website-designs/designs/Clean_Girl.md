# Clean Girl Design Reference

## Overview

Clean Girl is a minimalist, polished, and fresh aesthetic that emerged on TikTok in late 2021 and early 2022, quickly evolving from a beauty microtrend into a full lifestyle and design philosophy. Rooted in the idea of disciplined effortlessness, the Clean Girl look celebrates dewy skin, slicked-back hair, neutral wardrobes, and immaculately organized spaces. Celebrities like Hailey Bieber and Bella Hadid are often credited as the visual archetypes, though the aesthetic draws heavily from earlier "that girl" wellness culture -- early risers, green juice, Pilates, and curated simplicity.

In digital and web design, Clean Girl translates into interfaces that feel spa-like and editorial: generous white space, warm neutral palettes of ivory, beige, and taupe, whisper-thin typography, and imagery that emphasizes luminous skin, natural light, and uncluttered surfaces. The visual language borrows from high-end skincare branding and fashion editorial layouts -- think Glossier's product pages, Aesop's typographic restraint, and the quiet luxury of a well-organized vanity. Every element serves a purpose; nothing competes for attention. Backgrounds are soft and creamy, text is refined and understated, and interactive elements feel smooth and intentional.

What distinguishes Clean Girl from broader minimalism is its warmth and femininity. Where Swiss-style minimalism is cold and systematic, Clean Girl is approachable and luminous. Where Japandi embraces imperfection and craft, Clean Girl pursues a polished, almost glass-like perfection -- dewy finishes, seamless gradients, and edges so clean they feel curated by algorithm. The palette avoids stark white-and-black contrasts in favor of soft warm neutrals that feel like a cashmere sweater or a satin pillowcase. Typography is airy and elegant, never heavy or industrial. The overall impression is one of quiet confidence: someone who has everything effortlessly together, and whose digital spaces reflect that same serene discipline.

---

## Visual Characteristics

### Core Design Traits

- **Dewy, luminous surfaces**: Soft gradients and subtle gloss effects that mimic the "glass skin" look central to the aesthetic -- interfaces should feel fresh and hydrated, not flat or matte
- **Warm neutral palette**: Ivory, beige, oat, taupe, and champagne form the foundation; color is restrained, never loud, always tonal
- **Generous white space**: Breathing room is essential; content is carefully spaced with wide margins and padding, giving each element room to exist quietly
- **Slick, streamlined shapes**: Clean edges with moderate border-radius (8-16px); nothing jagged or sharp, but not excessively rounded either -- polished, not bubbly
- **Soft, barely-there shadows**: Shadows are diffused and warm-toned, creating gentle depth without drama; elements rest on the surface rather than floating above it
- **Natural light photography**: Imagery features sun-drenched interiors, minimal product arrangements, soft-focus botanicals, and glowing skin with neutral backdrops
- **Thin, elegant borders**: When borders appear, they are 1px, low-opacity, and warm-toned -- they define without confining
- **Satin and silk textures**: Subtle background textures that suggest smooth fabric, cream, or soft paper rather than rough or industrial materials
- **Monochromatic layering**: Depth is created through subtle value shifts within the same warm hue family rather than through contrasting colors
- **Editorial-quality imagery**: Photography is always high-resolution, softly lit, and styled with intention -- no clutter, no visual noise
- **Seamless transitions**: Scroll effects, hover states, and page transitions feel smooth and effortless, matching the "no effort" philosophy of the aesthetic

### Design Principles

- Pursue the appearance of effortlessness through meticulous attention to detail; every pixel should feel intentional yet unstrained
- Prioritize clarity and readability above all decoration; if an element does not serve communication or atmosphere, remove it
- Maintain a warm, approachable tone through color and typography; the design should feel inviting, never clinical or cold
- Use negative space as a primary design tool; emptiness conveys luxury, confidence, and editorial sophistication
- Let high-quality imagery and typography carry the design; rely on content quality rather than ornamental flourishes
- Treat consistency as a form of care; spacing, alignment, and color usage should feel uniform and disciplined throughout
- Design for the feeling of calm; interactions should be smooth, layouts should be predictable, and nothing should feel urgent or aggressive
- Embrace subtlety in all micro-interactions; hover effects, transitions, and animations should be gentle and restrained

---

## Color Palette

The Clean Girl palette is drawn from the world of skincare, cashmere, and latte foam -- warm neutrals that feel luminous and polished. Colors should layer together seamlessly, creating tonal depth without contrast shock. Accents are muted and organic: a hint of dusty rose, a breath of sage, a touch of warm cocoa. The overall impression should feel like soft natural light filtering through sheer linen curtains onto a marble vanity.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Ivory Cream | `#FAF7F2` | Primary page background, the canvas of the entire design |
| Warm White | `#FFFDF8` | Card backgrounds, modal overlays, elevated surfaces |
| Oat Milk | `#F0EAE0` | Secondary background, section alternation, soft fills |
| Soft Beige | `#E8DFD2` | Tertiary surface, input field backgrounds, subtle containers |
| Champagne | `#D9CEBD` | Border color, divider lines, quiet structural elements |
| Warm Taupe | `#B5A898` | Secondary text, captions, placeholder text, muted labels |
| Latte | `#A08E7D` | Icon color, subtle accent elements, inactive states |
| Cocoa | `#7A6B5D` | Primary text on light backgrounds, headings, body copy |
| Espresso | `#4A3F35` | High-contrast text, bold headings, primary action text |
| Dusty Rose | `#D4A5A5` | Warm accent, highlight states, subtle call-to-action tint |
| Blush Nude | `#E8C4B8` | Decorative accent, hover glow, soft badge backgrounds |
| Sage Whisper | `#B8C4B2` | Secondary accent, success states, organic freshness |
| Cloud Gray | `#E5E1DC` | Disabled states, skeleton loaders, neutral fill |
| Dewy Highlight | `#FFF5EC` | Hero gradient endpoint, glow overlays, luminous highlights |

### CSS Custom Properties

```css
:root {
  --clean-ivory: #FAF7F2;
  --clean-white: #FFFDF8;
  --clean-oat: #F0EAE0;
  --clean-beige: #E8DFD2;
  --clean-champagne: #D9CEBD;
  --clean-taupe: #B5A898;
  --clean-latte: #A08E7D;
  --clean-cocoa: #7A6B5D;
  --clean-espresso: #4A3F35;
  --clean-rose: #D4A5A5;
  --clean-blush: #E8C4B8;
  --clean-sage: #B8C4B2;
  --clean-cloud: #E5E1DC;
  --clean-highlight: #FFF5EC;
}
```

---

## Typography

Clean Girl typography is understated and refined. Fonts lean toward light-weight geometric sans-serifs and elegant modern serifs with generous letter-spacing and airy line heights. The goal is readability wrapped in quiet sophistication -- nothing heavy, nothing decorative, nothing that demands attention. Text should feel like it was placed by a high-end editorial art director: precise, minimal, and effortlessly legible.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Outfit** | 200, 300, 400, 500 | Clean geometric sans-serif for headings and UI | [Outfit](https://fonts.google.com/specimen/Outfit) |
| **DM Sans** | 300, 400, 500 | Versatile humanist sans for body text and labels | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Cormorant Garamond** | 300, 400, 500 | Elegant serif for editorial headings and pull quotes | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Inter** | 300, 400, 500 | Neutral, highly readable sans for UI elements and small text | [Inter](https://fonts.google.com/specimen/Inter) |
| **Jost** | 200, 300, 400 | Geometric sans-serif with a modern, refined character | [Jost](https://fonts.google.com/specimen/Jost) |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Cormorant Garamond 300 | DM Sans 400 | Editorial luxury, skincare branding, quiet elegance |
| Outfit 300 | Inter 400 | Modern minimalism, app-like clarity, polished simplicity |
| Jost 200 | DM Sans 300 | Airy sophistication, fashion-forward, ultra-light |
| Cormorant Garamond 400 | Jost 300 | Refined editorial, serif-sans contrast, high-end feel |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@200;300;400;500&display=swap');

body {
  font-family: 'DM Sans', 'Inter', -apple-system, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--clean-cocoa);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-weight: 300;
  line-height: 1.25;
  color: var(--clean-espresso);
  letter-spacing: 0.01em;
}

h1 { font-size: 2.75rem; }
h2 { font-size: 1.85rem; }
h3 { font-size: 1.25rem; font-weight: 400; }

.label, .caption {
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clean-taupe);
}
```

---

## Layout Principles

- **Centered, narrow content columns**: Text-heavy content sits within 640-800px; grid layouts extend to 1080px maximum. Contained layouts feel curated and intentional, never sprawling
- **Generous vertical rhythm**: Sections are separated by 80-120px of vertical space; elements within sections breathe with 24-48px gaps. The scroll should feel unhurried
- **Single-axis simplicity**: Prefer single-column layouts for editorial content; use two-column grids for card arrangements. Avoid complex multi-column magazine layouts that feel busy
- **Symmetry and centering**: Unlike wabi-sabi or editorial asymmetry, Clean Girl favors centered compositions that feel balanced, aligned, and polished -- nothing off-kilter
- **Soft section transitions**: Sections flow into each other with subtle gradient transitions or tonal background shifts rather than hard color breaks or heavy dividers
- **Whitespace as luxury**: Empty space is not wasted; it is the most important design element. Generous padding around content signals care and sophistication
- **Sticky, minimal navigation**: Navigation is thin, centered, and either sticky or hidden on scroll. It should never dominate the viewport or compete with content
- **Image-text balance**: Hero sections pair a single high-quality image with brief, elegant text. Avoid text-heavy sections without visual relief or image grids without breathing room
- **Consistent spacing scale**: Use a disciplined spacing system (8px base unit) to maintain visual harmony. Inconsistent spacing breaks the illusion of effortlessness
- **Mobile-first fluidity**: On smaller screens, maintain generous padding and vertical spacing. Scale down gracefully with a single-column flow that preserves the airy, polished feel

---

## CSS / Design Techniques

### Clean Girl Card

```css
.clean-card {
  background: var(--clean-white);
  border: 1px solid rgba(217, 206, 189, 0.5);
  border-radius: 12px;
  padding: 36px;
  box-shadow:
    0 1px 3px rgba(74, 63, 53, 0.03),
    0 4px 16px rgba(74, 63, 53, 0.04);
  transition: all 0.35s ease;
}

.clean-card:hover {
  box-shadow:
    0 2px 6px rgba(74, 63, 53, 0.05),
    0 8px 28px rgba(74, 63, 53, 0.06);
  transform: translateY(-2px);
}

.clean-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.35rem;
  color: var(--clean-espresso);
  margin-bottom: 12px;
}

.clean-card p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--clean-cocoa);
  line-height: 1.7;
}
```

### Polished Button

```css
/* Primary -- warm and understated */
.clean-btn {
  background: var(--clean-espresso);
  color: var(--clean-ivory);
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clean-btn:hover {
  background: var(--clean-cocoa);
  box-shadow: 0 4px 16px rgba(74, 63, 53, 0.15);
  transform: translateY(-1px);
}

/* Secondary -- ghost outline */
.clean-btn-secondary {
  background: transparent;
  color: var(--clean-espresso);
  border: 1px solid var(--clean-champagne);
  border-radius: 8px;
  padding: 13px 31px;
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clean-btn-secondary:hover {
  border-color: var(--clean-taupe);
  background: rgba(240, 234, 224, 0.4);
}

/* Blush accent -- soft call-to-action */
.clean-btn-blush {
  background: var(--clean-rose);
  color: #FFFDF8;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clean-btn-blush:hover {
  background: #C89494;
  box-shadow: 0 4px 16px rgba(212, 165, 165, 0.3);
}
```

### Minimal Navigation

```css
.clean-nav {
  background: rgba(250, 247, 242, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(217, 206, 189, 0.35);
  padding: 18px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.clean-nav .brand {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--clean-espresso);
  letter-spacing: 0.06em;
  text-decoration: none;
}

.clean-nav a {
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clean-cocoa);
  text-decoration: none;
  transition: color 0.25s ease;
  position: relative;
}

.clean-nav a:hover {
  color: var(--clean-espresso);
}

.clean-nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--clean-espresso);
  transition: width 0.3s ease;
}

.clean-nav a:hover::after {
  width: 100%;
}
```

### Dewy Hero Section

```css
.clean-hero {
  background: linear-gradient(
    180deg,
    var(--clean-highlight) 0%,
    var(--clean-ivory) 60%,
    var(--clean-oat) 100%
  );
  text-align: center;
  padding: 120px 40px 100px;
  position: relative;
  overflow: hidden;
}

/* Soft radial glow -- the dewy luminous effect */
.clean-hero::before {
  content: '';
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 80%;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(232, 196, 184, 0.15) 0%,
    transparent 65%
  );
  pointer-events: none;
}

.clean-hero .overline {
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clean-taupe);
  margin-bottom: 16px;
  display: block;
  position: relative;
}

.clean-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 300;
  color: var(--clean-espresso);
  line-height: 1.15;
  position: relative;
  margin-bottom: 20px;
}

.clean-hero p {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--clean-latte);
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.7;
  position: relative;
}
```

### Soft Divider

```css
/* Thin gradient fade divider */
.clean-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--clean-champagne) 30%,
    var(--clean-champagne) 70%,
    transparent 100%
  );
  margin: 64px auto;
  max-width: 280px;
}

/* Dot divider -- minimal pearl-like accent */
.clean-divider-dot {
  border: none;
  text-align: center;
  margin: 56px auto;
}

.clean-divider-dot::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: var(--clean-champagne);
  border-radius: 50%;
}
```

### Luminous Section Background

```css
/* Alternating section tones for visual rhythm */
.section-ivory {
  background: var(--clean-ivory);
  padding: 80px 0;
}

.section-oat {
  background: var(--clean-oat);
  padding: 80px 0;
}

/* Dewy glow overlay for feature sections */
.section-glow {
  position: relative;
  background: var(--clean-ivory);
  padding: 80px 0;
}

.section-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(232, 196, 184, 0.08) 0%,
    transparent 60%
  );
  pointer-events: none;
}
```

### Glass Skin Input

```css
.clean-input {
  background: var(--clean-white);
  border: 1px solid var(--clean-champagne);
  border-radius: 8px;
  padding: 14px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--clean-espresso);
  width: 100%;
  transition: all 0.3s ease;
}

.clean-input:focus {
  outline: none;
  border-color: var(--clean-taupe);
  background: #FFFFFF;
  box-shadow: 0 0 0 3px rgba(181, 168, 152, 0.1);
}

.clean-input::placeholder {
  color: var(--clean-champagne);
  font-weight: 300;
  letter-spacing: 0.02em;
}

/* Label above input */
.clean-label {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clean-taupe);
  margin-bottom: 8px;
}
```

### Full Page Scaffold

```css
:root {
  --clean-ivory: #FAF7F2;
  --clean-white: #FFFDF8;
  --clean-oat: #F0EAE0;
  --clean-beige: #E8DFD2;
  --clean-champagne: #D9CEBD;
  --clean-taupe: #B5A898;
  --clean-latte: #A08E7D;
  --clean-cocoa: #7A6B5D;
  --clean-espresso: #4A3F35;
  --clean-rose: #D4A5A5;
  --clean-blush: #E8C4B8;
  --clean-sage: #B8C4B2;
  --clean-cloud: #E5E1DC;
  --clean-highlight: #FFF5EC;
  --clean-radius-sm: 6px;
  --clean-radius-md: 8px;
  --clean-radius-lg: 12px;
  --clean-radius-xl: 16px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: 'DM Sans', -apple-system, sans-serif;
  background-color: var(--clean-ivory);
  color: var(--clean-cocoa);
  line-height: 1.75;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 300;
  line-height: 1.25;
  color: var(--clean-espresso);
}

h1 { font-size: 2.75rem; letter-spacing: 0.01em; }
h2 { font-size: 1.85rem; letter-spacing: 0.01em; }
h3 { font-size: 1.25rem; font-weight: 400; }

p {
  max-width: 38em;
  margin-bottom: 1.5em;
}

a {
  color: var(--clean-cocoa);
  text-decoration: underline;
  text-decoration-color: var(--clean-champagne);
  text-underline-offset: 3px;
  transition: color 0.25s ease, text-decoration-color 0.25s ease;
}

a:hover {
  color: var(--clean-espresso);
  text-decoration-color: var(--clean-taupe);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 80px 0;
}
```

---

## Design Do's and Don'ts

### Do

- Use warm, creamy neutrals as the foundation and layer tonal variations for depth
- Invest in high-quality, softly lit photography styled with minimal props and neutral backgrounds
- Apply generous padding and margins throughout; let every element breathe
- Keep typography light and airy; favor thin weights at large sizes for headings
- Use subtle hover effects -- gentle lifts, soft shadow deepening, understated color shifts
- Maintain a strict, consistent spacing system for visual harmony across all pages
- Employ soft gradient transitions between sections rather than hard color boundaries
- Treat the scrolling experience as a design element; the pace should feel calm and unhurried

### Don't

- Use saturated, bright colors or neon accents that break the tonal neutrality
- Apply heavy drop shadows, hard borders, or dark outlines that create visual harshness
- Set text in bold or black weights; avoid chunky, industrial, or display typefaces
- Clutter layouts with competing elements, dense grids, or visual noise
- Use dark mode as a default; the aesthetic relies on warmth and light (if dark mode is needed, use deep warm tones like #2A2520 rather than pure black)
- Mix in grunge textures, distressed effects, or rough, hand-drawn elements
- Overuse decorative flourishes, patterns, or ornamental borders; the beauty is in restraint
- Choose stock photography with artificial lighting, cluttered backgrounds, or aggressive color grading

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Minimalism** | Shares the commitment to simplicity and reduction, but Clean Girl is warmer and more feminine, rooted in lifestyle rather than philosophy |
| **Japandi** | Both value natural palettes and negative space; Japandi embraces imperfection and craft, while Clean Girl pursues polished perfection |
| **Hygge** | Overlapping warmth and comfort, but Hygge is cozier and more textural; Clean Girl is sleeker and more curated |
| **Quiet Luxury** | Close cousin in the fashion world; both reject logos and loud branding in favor of quality materials and understated elegance |
| **That Girl** | Direct predecessor on TikTok; "that girl" wellness culture (journaling, green smoothies, early mornings) laid the groundwork for Clean Girl |
| **Coastal Style** | Shares light, airy palettes and an emphasis on natural light; Coastal is nautical and breezy while Clean Girl is urban and polished |
| **Glossier Pink** | The Glossier brand aesthetic is a close parallel in the beauty industry: dewy, minimal, warm pink, millennial-friendly |
| **Soft Girl** | Both are TikTok-born feminine aesthetics; Soft Girl is more pastel, playful, and youthful while Clean Girl is more mature and refined |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clean Girl -- Aesthetic Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@200;300;400;500&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       Clean Girl -- CSS Foundation
       ======================================== */

    :root {
      --clean-ivory: #FAF7F2;
      --clean-white: #FFFDF8;
      --clean-oat: #F0EAE0;
      --clean-beige: #E8DFD2;
      --clean-champagne: #D9CEBD;
      --clean-taupe: #B5A898;
      --clean-latte: #A08E7D;
      --clean-cocoa: #7A6B5D;
      --clean-espresso: #4A3F35;
      --clean-rose: #D4A5A5;
      --clean-blush: #E8C4B8;
      --clean-sage: #B8C4B2;
      --clean-cloud: #E5E1DC;
      --clean-highlight: #FFF5EC;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.75;
      color: var(--clean-cocoa);
      background-color: var(--clean-ivory);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* ========================================
       Navigation
       ======================================== */

    .nav {
      background: rgba(250, 247, 242, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(217, 206, 189, 0.35);
      padding: 18px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav .brand {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--clean-espresso);
      letter-spacing: 0.06em;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 36px;
    }

    .nav-links a {
      font-family: 'Outfit', sans-serif;
      font-size: 0.72rem;
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--clean-cocoa);
      text-decoration: none;
      transition: color 0.25s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--clean-espresso);
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--clean-espresso);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    /* ========================================
       Hero Section
       ======================================== */

    .hero {
      background: linear-gradient(
        180deg,
        var(--clean-highlight) 0%,
        var(--clean-ivory) 60%,
        var(--clean-oat) 100%
      );
      text-align: center;
      padding: 120px 40px 100px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -30%;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 80%;
      background: radial-gradient(
        ellipse at 50% 50%,
        rgba(232, 196, 184, 0.15) 0%,
        transparent 65%
      );
      pointer-events: none;
    }

    .hero .overline {
      font-family: 'Outfit', sans-serif;
      font-size: 0.7rem;
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--clean-taupe);
      margin-bottom: 16px;
      display: block;
      position: relative;
    }

    .hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3.5rem;
      font-weight: 300;
      color: var(--clean-espresso);
      line-height: 1.15;
      position: relative;
      margin-bottom: 20px;
    }

    .hero h1 em {
      font-style: italic;
      color: var(--clean-rose);
    }

    .hero p {
      font-size: 1.05rem;
      color: var(--clean-latte);
      max-width: 460px;
      margin: 0 auto 36px;
      line-height: 1.7;
      position: relative;
    }

    .hero .btn-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      position: relative;
    }

    /* ========================================
       Buttons
       ======================================== */

    .btn {
      display: inline-block;
      border-radius: 8px;
      padding: 14px 32px;
      font-family: 'Outfit', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: var(--clean-espresso);
      color: var(--clean-ivory);
      border: none;
    }

    .btn-primary:hover {
      background: var(--clean-cocoa);
      box-shadow: 0 4px 16px rgba(74, 63, 53, 0.15);
      transform: translateY(-1px);
    }

    .btn-outline {
      background: transparent;
      color: var(--clean-espresso);
      border: 1px solid var(--clean-champagne);
    }

    .btn-outline:hover {
      border-color: var(--clean-taupe);
      background: rgba(240, 234, 224, 0.4);
    }

    /* ========================================
       Divider
       ======================================== */

    .divider {
      border: none;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--clean-champagne) 30%,
        var(--clean-champagne) 70%,
        transparent 100%
      );
      margin: 0 auto;
      max-width: 240px;
    }

    /* ========================================
       Content Sections
       ======================================== */

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section {
      padding: 80px 0;
    }

    .section-alt {
      padding: 80px 0;
      background: var(--clean-oat);
    }

    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-header .overline {
      font-family: 'Outfit', sans-serif;
      font-size: 0.68rem;
      font-weight: 400;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--clean-taupe);
      margin-bottom: 12px;
      display: block;
    }

    .section-header h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      font-weight: 300;
      color: var(--clean-espresso);
      margin-bottom: 12px;
    }

    .section-header p {
      font-size: 0.95rem;
      color: var(--clean-latte);
      max-width: 420px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* ========================================
       Card Grid
       ======================================== */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
    }

    .card {
      background: var(--clean-white);
      border: 1px solid rgba(217, 206, 189, 0.5);
      border-radius: 12px;
      padding: 36px;
      box-shadow:
        0 1px 3px rgba(74, 63, 53, 0.03),
        0 4px 16px rgba(74, 63, 53, 0.04);
      transition: all 0.35s ease;
    }

    .card:hover {
      box-shadow:
        0 2px 6px rgba(74, 63, 53, 0.05),
        0 8px 28px rgba(74, 63, 53, 0.06);
      transform: translateY(-2px);
    }

    .card .icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: var(--clean-oat);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      margin-bottom: 20px;
      color: var(--clean-latte);
    }

    .card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--clean-espresso);
      margin-bottom: 10px;
    }

    .card p {
      font-size: 0.92rem;
      color: var(--clean-cocoa);
      line-height: 1.7;
    }

    /* ========================================
       Feature -- Image + Text Split
       ======================================== */

    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .feature-img {
      width: 100%;
      aspect-ratio: 4 / 5;
      background: linear-gradient(
        135deg,
        var(--clean-beige) 0%,
        var(--clean-oat) 50%,
        var(--clean-blush) 100%
      );
      border-radius: 12px;
    }

    .feature-text .overline {
      font-family: 'Outfit', sans-serif;
      font-size: 0.68rem;
      font-weight: 400;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--clean-taupe);
      margin-bottom: 12px;
      display: block;
    }

    .feature-text h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.85rem;
      font-weight: 300;
      color: var(--clean-espresso);
      margin-bottom: 16px;
    }

    .feature-text p {
      font-size: 0.95rem;
      color: var(--clean-cocoa);
      line-height: 1.75;
      margin-bottom: 24px;
    }

    /* ========================================
       Testimonial / Quote
       ======================================== */

    .quote-block {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .quote-block blockquote {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 300;
      font-style: italic;
      color: var(--clean-espresso);
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .quote-block cite {
      font-family: 'Outfit', sans-serif;
      font-size: 0.72rem;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--clean-taupe);
    }

    /* ========================================
       Newsletter / CTA Section
       ======================================== */

    .cta-section {
      text-align: center;
      padding: 80px 40px;
      background: linear-gradient(
        180deg,
        var(--clean-oat) 0%,
        var(--clean-ivory) 100%
      );
    }

    .cta-section h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      font-weight: 300;
      color: var(--clean-espresso);
      margin-bottom: 12px;
    }

    .cta-section p {
      font-size: 0.95rem;
      color: var(--clean-latte);
      max-width: 380px;
      margin: 0 auto 28px;
    }

    .cta-form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      max-width: 440px;
      margin: 0 auto;
    }

    .cta-form input {
      flex: 1;
      background: var(--clean-white);
      border: 1px solid var(--clean-champagne);
      border-radius: 8px;
      padding: 14px 18px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.92rem;
      color: var(--clean-espresso);
      transition: all 0.3s ease;
    }

    .cta-form input:focus {
      outline: none;
      border-color: var(--clean-taupe);
      box-shadow: 0 0 0 3px rgba(181, 168, 152, 0.1);
    }

    .cta-form input::placeholder {
      color: var(--clean-champagne);
      font-weight: 300;
    }

    .cta-form .btn {
      white-space: nowrap;
    }

    /* ========================================
       Footer
       ======================================== */

    .footer {
      padding: 40px;
      text-align: center;
      border-top: 1px solid rgba(217, 206, 189, 0.35);
    }

    .footer p {
      font-family: 'Outfit', sans-serif;
      font-size: 0.72rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--clean-taupe);
      max-width: none;
      margin: 0;
    }

    /* ========================================
       Responsive
       ======================================== */

    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 16px;
        padding: 16px 24px;
      }

      .nav-links {
        gap: 20px;
      }

      .hero {
        padding: 80px 24px 60px;
      }

      .hero h1 {
        font-size: 2.4rem;
      }

      .hero .btn-group {
        flex-direction: column;
        gap: 12px;
      }

      .card-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .feature {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .cta-form {
        flex-direction: column;
      }

      .cta-form input,
      .cta-form .btn {
        width: 100%;
        text-align: center;
      }

      .container {
        padding: 0 1.25rem;
      }

      .section, .section-alt {
        padding: 56px 0;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="brand">Clean Girl</a>
    <div class="nav-links">
      <a href="#routine">Routine</a>
      <a href="#essentials">Essentials</a>
      <a href="#lifestyle">Lifestyle</a>
      <a href="#about">About</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <span class="overline">Minimalist &middot; Polished &middot; Fresh</span>
    <h1>Less Is <em>Luminous</em></h1>
    <p>Effortless elegance for those who believe simplicity
       is the ultimate form of sophistication.</p>
    <div class="btn-group">
      <a href="#routine" class="btn btn-primary">Discover</a>
      <a href="#essentials" class="btn btn-outline">Explore</a>
    </div>
  </header>

  <!-- Divider -->
  <hr class="divider" style="margin: 0 auto;">

  <!-- Cards Section -->
  <section class="section" id="routine">
    <div class="container">
      <div class="section-header">
        <span class="overline">Daily Ritual</span>
        <h2>The Clean Girl Routine</h2>
        <p>A curated approach to beauty, wellness, and everyday living.</p>
      </div>
      <div class="card-grid">
        <div class="card">
          <div class="icon">&#9702;</div>
          <h3>Glass Skin</h3>
          <p>Luminous, dewy skin achieved through intentional
             skincare: serums, moisturizers, and SPF layered
             with care for a lit-from-within glow.</p>
        </div>
        <div class="card">
          <div class="icon">&#9702;</div>
          <h3>Slicked Back</h3>
          <p>Clean, effortless hair styled into sleek buns, low
             ponytails, or soft claw clips. Never fussy,
             always polished.</p>
        </div>
        <div class="card">
          <div class="icon">&#9702;</div>
          <h3>Neutral Palette</h3>
          <p>A capsule wardrobe of elevated basics in ivory,
             beige, taupe, and soft camel. Every piece
             mixes seamlessly with every other.</p>
        </div>
        <div class="card">
          <div class="icon">&#9702;</div>
          <h3>Mindful Living</h3>
          <p>Early mornings, green juice, Pilates, journaling,
             and an immaculately organized space. Order as
             a form of self-care.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Section -->
  <section class="section-alt" id="essentials">
    <div class="container">
      <div class="feature">
        <div class="feature-img" aria-label="Soft neutral product arrangement"></div>
        <div class="feature-text">
          <span class="overline">Curated Essentials</span>
          <h2>Fewer Things, Better Things</h2>
          <p>The Clean Girl philosophy extends beyond beauty into
             every corner of life. A capsule wardrobe, a minimal
             vanity, a clear desk. Each object earns its place
             through quality and intention, not quantity.</p>
          <a href="#" class="btn btn-primary">Shop Essentials</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Quote Section -->
  <section class="section" id="lifestyle">
    <div class="container">
      <div class="quote-block">
        <blockquote>&ldquo;Simplicity is the keynote of all
          true elegance.&rdquo;</blockquote>
        <cite>Coco Chanel</cite>
      </div>
    </div>
  </section>

  <!-- CTA / Newsletter -->
  <section class="cta-section" id="about">
    <h2>Stay Effortless</h2>
    <p>Curated inspiration for the clean, polished life
       you are building.</p>
    <form class="cta-form" onsubmit="return false;">
      <input type="email" placeholder="Your email address">
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>Clean Girl &middot; Minimalist Polished Fresh</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the palette**: Define all CSS custom properties first. The warm neutral foundation drives every other design decision. Test your background and text colors for WCAG AA contrast compliance (the Espresso-on-Ivory pairing meets 7:1+)
- **Invest in photography**: The Clean Girl aesthetic depends heavily on high-quality, softly lit imagery. Stock photos with harsh lighting or busy backgrounds will undermine the entire design. Shoot against neutral backdrops with diffused natural light, or carefully curate stock that matches the warm, minimal mood
- **Use system font stacks as fallbacks**: Pair your Google Fonts with system fallbacks (-apple-system, BlinkMacSystemFont, Segoe UI) so the design degrades gracefully. The aesthetic can survive a font swap because the spacing and color do the heavy lifting
- **Test spacing at every breakpoint**: The generous whitespace that defines Clean Girl on desktop can feel empty or broken on mobile if not carefully adjusted. Reduce section padding and card gaps proportionally, but never eliminate the breathing room entirely
- **Apply backdrop-filter with caution**: The frosted glass navigation is beautiful but not supported in all browsers. Always include a solid background-color fallback (rgba with high alpha) for older browsers
- **Keep animations minimal and slow**: If adding motion, use ease timing functions with durations of 300-500ms. Avoid bouncy or elastic animations. The only acceptable motion vocabulary is gentle lifts, soft fades, and smooth slides
- **Limit your color accent to one or two uses per page**: Dusty rose and sage whisper are supporting actors, not leads. Overusing accent colors shifts the design toward Soft Girl or Coquette territory. Let the neutrals dominate
- **Treat dark mode as optional and tonal**: If implementing dark mode, avoid pure black backgrounds. Use deep warm tones (#2A2520, #1E1B18) and reduce contrast slightly. The dewy, luminous quality is harder to achieve in dark mode, so prioritize readability over atmospheric glow
