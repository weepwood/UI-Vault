# Ethereal Design Reference

## Overview

Ethereal is a dreamy, soft, and otherworldly design aesthetic built on light diffusion, pastel hazes, blurred edges, and luminous glow. It draws its visual language from the transient beauty of mist rolling over still water, sunlight filtered through gauze, and the liminal glow of early dawn or late dusk. Where most design systems seek crispness and definition, Ethereal deliberately dissolves boundaries -- softening edges, lowering contrast, and layering translucent washes of color so that every element appears to float in a state of gentle suspension. The result is an interface that feels less like a screen and more like a window into a quiet, luminous elsewhere.

The aesthetic traces roots through romantic fine art, fashion editorials, and the visual culture of angelic and celestial imagery. In web and digital design, it gained traction alongside the broader trend toward softer, more human interfaces -- a counter-movement to the sharp geometries of flat design and the high-contrast drama of dark-mode interfaces. Ethereal occupies the same emotional territory as Dreamcore and Danish Pastel, but distinguishes itself through its commitment to radiance: every surface glows, every color breathes, and every typographic choice whispers rather than shouts.

Key emotional registers include serenity, wonder, delicacy, and transcendence. Ethereal design is ideal for wellness brands, beauty and skincare, poetry and literary platforms, meditation apps, wedding and event sites, fine-art portfolios, and any digital experience where the goal is to slow the viewer down and invite contemplation rather than conversion-driven urgency. The palette centers on lavender, blush, powder blue, soft mint, pearl, and champagne -- colors that appear to emit their own quiet light. Typography leans thin, serif-accented, and generously spaced, reinforcing the sense that content floats within an atmosphere of gentle luminescence rather than sitting on a rigid scaffold.

---

## Visual Characteristics

### Core Design Traits

- **Soft-focus blur and diffusion** -- edges of images, containers, and decorative elements are intentionally blurred or feathered, creating a haze that mimics light seen through frosted glass or morning mist
- **Pastel and pale color dominance** -- the palette stays within the lightest 15-25% of the value range, favoring lavender, blush pink, powder blue, soft mint, pearl white, and champagne gold
- **Luminous glow effects** -- subtle radial gradients, soft box-shadows, and ambient light halos give elements the appearance of emitting gentle inner light
- **Low-contrast, high-value compositions** -- foreground and background sit close together on the lightness scale, producing a hushed, muted visual tone
- **Translucent layering** -- semi-transparent overlays, frosted-glass panels, and layered washes of color create atmospheric depth without hard separation
- **Organic and flowing shapes** -- rounded corners, elliptical blobs, and gently curving lines replace sharp angles and rigid geometry
- **Generous whitespace as atmosphere** -- empty space is not vacant but luminous, functioning as the ambient medium through which all elements float
- **Delicate line work and fine borders** -- if borders appear at all, they are hairline-thin and rendered in near-transparent tones
- **Soft gradient transitions** -- gradients flow between closely related pastels with no visible banding, evoking watercolor washes
- **Subtle iridescence and opalescence** -- occasional rainbow-shimmer effects on surfaces or text suggest light refracting through crystal or pearl
- **Floating, weightless composition** -- elements appear unanchored, as though drifting in a softly lit void rather than pinned to a grid

### Design Principles

- Dissolve rather than define: soften every edge, border, and boundary until the design feels like atmosphere rather than architecture
- Light is the primary material: treat glow, diffusion, and luminosity as structural elements, not decoration
- Whisper, never shout: all visual decisions -- color, type weight, spacing, animation -- should reduce intensity in favor of gentleness
- Depth through translucency: layer semitransparent surfaces to create spatial hierarchy without hard dividers
- Emptiness is radiance: whitespace glows; treat unused space as the luminous medium that connects all elements
- Slow everything down: transitions, animations, and scroll behaviors should be meditative and unhurried
- Harmony over contrast: adjacent elements should blend and echo each other rather than compete for attention
- Impermanence as beauty: the aesthetic embraces the fleeting -- elements that appear to be mid-dissolve, fading in, or gently evaporating

---

## Color Palette

The Ethereal palette is anchored in the palest reaches of the color spectrum. Every hue is pushed toward white, as if seen through layers of sheer fabric or soft morning fog. Accent colors remain muted and luminous; even the deepest tones in the system read as gentle rather than heavy. The goal is a palette that appears to glow from within -- colors that emit light rather than absorb it.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Pearl White** | `#FAF8FF` | Primary background, the luminous void |
| **Morning Mist** | `#F0ECF5` | Secondary background, card surfaces |
| **Lavender Haze** | `#DDD3EC` | Decorative washes, soft overlays |
| **Wisteria** | `#C4B1DC` | Primary accent, interactive focus rings |
| **Soft Lilac** | `#B59AD8` | Buttons, links, primary interactive color |
| **Blush Cloud** | `#F2DAE0` | Warm accent, notification badges, highlights |
| **Rose Quartz** | `#E8C1CA` | Secondary warm accent, hover states |
| **Powder Blue** | `#D4E4F7` | Cool accent, info states, tag backgrounds |
| **Sky Veil** | `#BDD5F0` | Secondary cool accent, progress indicators |
| **Seafoam Whisper** | `#D5EDE6` | Success states, positive indicators |
| **Champagne Glow** | `#F5EDD6` | Warning states, warm highlights |
| **Opal** | `#E6E0F3` | Tertiary surfaces, divider fills |
| **Moonstone** | `#8A7CA8` | Primary text on light backgrounds |
| **Dusk Violet** | `#5E4F78` | Headings, high-emphasis text |
| **Mist Shadow** | `#9B93A8` | Secondary text, captions, placeholders |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --eth-pearl: #FAF8FF;
  --eth-mist: #F0ECF5;
  --eth-opal: #E6E0F3;

  /* Purple / Lavender spectrum */
  --eth-lavender-haze: #DDD3EC;
  --eth-wisteria: #C4B1DC;
  --eth-soft-lilac: #B59AD8;

  /* Warm accents */
  --eth-blush-cloud: #F2DAE0;
  --eth-rose-quartz: #E8C1CA;
  --eth-champagne: #F5EDD6;

  /* Cool accents */
  --eth-powder-blue: #D4E4F7;
  --eth-sky-veil: #BDD5F0;
  --eth-seafoam: #D5EDE6;

  /* Text */
  --eth-text-primary: #5E4F78;
  --eth-text-body: #8A7CA8;
  --eth-text-muted: #9B93A8;

  /* Signature gradients */
  --eth-gradient-haze: linear-gradient(135deg, #F0ECF5, #DDD3EC, #D4E4F7);
  --eth-gradient-blush: linear-gradient(135deg, #F2DAE0, #DDD3EC, #E6E0F3);
  --eth-gradient-dawn: linear-gradient(180deg, #FAF8FF, #F0ECF5, #DDD3EC);
  --eth-gradient-iridescent: linear-gradient(135deg, #D4E4F7, #DDD3EC, #F2DAE0, #D5EDE6);

  /* Glow */
  --eth-glow-soft: 0 0 40px rgba(181, 154, 216, 0.15);
  --eth-glow-warm: 0 0 40px rgba(242, 218, 224, 0.2);
  --eth-glow-cool: 0 0 40px rgba(212, 228, 247, 0.2);

  /* Glass */
  --eth-glass-bg: rgba(255, 255, 255, 0.45);
  --eth-glass-border: rgba(181, 154, 216, 0.15);
  --eth-glass-blur: 20px;
}
```

---

## Typography

Ethereal typography is thin, airy, and generously spaced. The type system favors light-to-regular weight fonts with high x-heights and open letterforms that allow the luminous background to breathe through the text. Headings often use elegant serifs or thin geometric sans-serifs to evoke a sense of quiet refinement. Script accents, used sparingly, add a whisper of romantic calligraphy. Every typographic choice should feel like words spoken softly in a sunlit room.

### Recommended Google Fonts

| Font | Weight(s) | Style | Best For | Link |
|------|-----------|-------|----------|------|
| **Cormorant Garamond** | 300, 400, 500 | Elegant serif | Display headings, hero text | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Raleway** | 200, 300, 400 | Geometric thin sans | Subheadings, labels, navigation | [Raleway](https://fonts.google.com/specimen/Raleway) |
| **Josefin Sans** | 200, 300, 400 | Geometric, airy | Headlines, elegant modern headings | [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) |
| **Nunito** | 300, 400, 500 | Rounded sans | Body text, readable and soft | [Nunito](https://fonts.google.com/specimen/Nunito) |
| **Lora** | 400, 500 | Calligraphic serif | Body text, editorial content | [Lora](https://fonts.google.com/specimen/Lora) |
| **Prata** | 400 | High-contrast Didone | Display titles, pull quotes | [Prata](https://fonts.google.com/specimen/Prata) |
| **La Belle Aurore** | 400 | Handwritten script | Decorative accents, signatures | [La Belle Aurore](https://fonts.google.com/specimen/La+Belle+Aurore) |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Cormorant Garamond** (300) | **Nunito** (300) | Classical elegance meets soft warmth |
| **Josefin Sans** (200) | **Lora** (400) | Airy geometry paired with calligraphic grace |
| **Prata** (400) | **Raleway** (300) | High-contrast drama with delicate lightness |
| **Cormorant Garamond** (400) | **Raleway** (300) | Traditional refinement, modern airiness |
| **Josefin Sans** (300) | **Nunito** (400) | Clean, luminous, and deeply approachable |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Nunito:wght@300;400;500&family=La+Belle+Aurore&display=swap');

body {
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--eth-text-body);
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-weight: 300;
  color: var(--eth-text-primary);
  line-height: 1.25;
  letter-spacing: 0.02em;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
}

.eth-display {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(3rem, 7vw, 5.5rem);
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: var(--eth-text-primary);
}

.eth-script {
  font-family: 'La Belle Aurore', cursive;
  font-size: 1.4rem;
  color: var(--eth-wisteria);
  letter-spacing: 0.02em;
}

.eth-label {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--eth-text-muted);
}
```

---

## Layout Principles

- **Centered, breathing compositions** -- content lives within a narrow max-width (700-900px) surrounded by generous luminous whitespace that functions as the ambient atmosphere
- **Vertical flow with deep spacing** -- sections are separated by 120-180px of vertical space, letting each content block float independently in the glow
- **No hard dividers** -- instead of lines or borders between sections, use gradient fades, increased whitespace, or subtle shifts in background color
- **Floating card layers** -- translucent, rounded cards with soft box-shadows hover above the background, reinforcing the weightless, suspended quality
- **Asymmetric balance** -- elements can drift slightly off-center, mimicking the gentle imperfection of organic light and natural phenomena
- **Stacked simplicity** -- prefer single-column or simple two-column layouts; complex multi-column grids feel too structured for the aesthetic
- **Images as atmosphere** -- photos and illustrations should be soft-focused, desaturated, and integrated as background washes rather than hard-edged rectangles
- **Decorative blur orbs** -- large, soft, colorful gradient blobs placed behind content create ambient depth and the signature luminous haze
- **Responsive softness** -- on mobile, increase vertical spacing even further; the design should feel more spacious as the viewport narrows, not cramped
- **Navigation as whisper** -- nav elements should be minimal, thin-weight, and translucent, blending into the atmosphere rather than anchoring the page
- **Progressive revelation** -- content fades gently into view on scroll rather than appearing abruptly; entrance animations should be slow and feathered

---

## CSS / Design Techniques

### Ethereal Card

```css
.eth-card {
  background: var(--eth-glass-bg);
  backdrop-filter: blur(var(--eth-glass-blur));
  -webkit-backdrop-filter: blur(var(--eth-glass-blur));
  border: 1px solid var(--eth-glass-border);
  border-radius: 24px;
  padding: 40px;
  box-shadow: var(--eth-glow-soft);
  transition: box-shadow 0.5s ease, transform 0.5s ease;
}

.eth-card:hover {
  box-shadow:
    0 0 60px rgba(181, 154, 216, 0.2),
    0 8px 32px rgba(181, 154, 216, 0.08);
  transform: translateY(-4px);
}

.eth-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--eth-text-primary);
  margin-bottom: 12px;
}

.eth-card p {
  font-size: 0.95rem;
  color: var(--eth-text-muted);
  line-height: 1.75;
}
```

### Ethereal Button

```css
.eth-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--eth-gradient-blush);
  color: var(--eth-text-primary);
  border: none;
  border-radius: 50px;
  padding: 14px 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  cursor: pointer;
  text-decoration: none;
  box-shadow: var(--eth-glow-warm);
  transition: box-shadow 0.5s ease, transform 0.4s ease;
}

.eth-button:hover {
  box-shadow:
    0 0 50px rgba(232, 193, 202, 0.3),
    0 4px 20px rgba(181, 154, 216, 0.15);
  transform: translateY(-2px);
}

.eth-button--ghost {
  background: transparent;
  border: 1px solid var(--eth-glass-border);
  box-shadow: none;
  color: var(--eth-text-body);
}

.eth-button--ghost:hover {
  background: rgba(255, 255, 255, 0.4);
  box-shadow: var(--eth-glow-soft);
  border-color: var(--eth-wisteria);
}
```

### Ethereal Navigation

```css
.eth-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 40px;
  position: relative;
  z-index: 10;
}

.eth-nav__logo {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--eth-text-primary);
  text-decoration: none;
  letter-spacing: 0.06em;
}

.eth-nav__links {
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.eth-nav__links a {
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
  color: var(--eth-text-muted);
  text-decoration: none;
  transition: color 0.4s ease;
}

.eth-nav__links a:hover {
  color: var(--eth-text-primary);
}
```

### Ethereal Hero Section

```css
.eth-hero {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}

.eth-hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 60%;
  background: radial-gradient(ellipse, rgba(212, 228, 247, 0.4) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  animation: ethFloat 12s ease-in-out infinite alternate;
}

.eth-hero::after {
  content: '';
  position: absolute;
  bottom: -15%;
  right: -10%;
  width: 50%;
  height: 50%;
  background: radial-gradient(ellipse, rgba(242, 218, 224, 0.35) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  animation: ethFloat 15s ease-in-out infinite alternate-reverse;
}

@keyframes ethFloat {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -20px) scale(1.05); }
}

.eth-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(2.8rem, 6vw, 5rem);
  color: var(--eth-text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  letter-spacing: 0.03em;
}

.eth-hero p {
  font-size: 1.15rem;
  color: var(--eth-text-muted);
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.9;
  position: relative;
  z-index: 1;
}
```

### Ambient Glow Orbs

```css
.eth-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.5;
}

.eth-orb--lavender {
  width: 400px;
  height: 400px;
  background: var(--eth-lavender-haze);
  animation: ethOrb 18s ease-in-out infinite alternate;
}

.eth-orb--blush {
  width: 350px;
  height: 350px;
  background: var(--eth-blush-cloud);
  animation: ethOrb 22s ease-in-out infinite alternate-reverse;
}

.eth-orb--blue {
  width: 300px;
  height: 300px;
  background: var(--eth-powder-blue);
  animation: ethOrb 15s ease-in-out infinite alternate;
}

@keyframes ethOrb {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.08); }
  66% { transform: translate(-15px, 15px) scale(0.95); }
  100% { transform: translate(10px, -10px) scale(1.03); }
}
```

### Soft Divider

```css
.eth-divider {
  width: 120px;
  height: 2px;
  margin: 60px auto;
  background: var(--eth-gradient-iridescent);
  border: none;
  border-radius: 2px;
  opacity: 0.5;
}
```

### Iridescent Text Shimmer

```css
.eth-shimmer {
  background: var(--eth-gradient-iridescent);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ethShimmer 8s ease-in-out infinite;
}

@keyframes ethShimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Fade-In on Scroll

```css
.eth-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.eth-fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Design Do's and Don'ts

### Do's

- Use generous whitespace as a glowing atmosphere that connects and cradles every element
- Layer soft, diffused gradient orbs behind content to create the signature luminous haze
- Choose thin, light-weight fonts and generous letter-spacing to reinforce the airy quality
- Apply rounded, pill-shaped, or elliptical containers to maintain organic softness
- Use slow, meditative transitions (0.5s-1.2s) for hover states and scroll reveals
- Keep the color palette within a narrow, pale value range where everything glows quietly
- Blur image backgrounds and decorative elements to maintain the soft-focus atmosphere
- Treat translucent glass surfaces as the primary container style, anchoring nothing with hard edges

### Don'ts

- Use sharp corners, hard drop-shadows, or heavy solid borders that break the softness
- Introduce high-contrast or saturated colors that shatter the pale, luminous harmony
- Set heavy font weights (700+) or dense, tightly packed text blocks
- Use abrupt transitions or fast animations; nothing should snap, bounce, or jolt
- Fill the layout with dense content grids; emptiness is essential to the atmosphere
- Apply dark backgrounds as the primary surface; Ethereal is a light-mode aesthetic
- Use harsh, unblurred photographic images that import visual noise and sharp edges into the composition
- Overcrowd the interface with interactive elements, icons, or badges; every addition dilutes the serenity

---

## Related Aesthetics

| Aesthetic | Relationship to Ethereal |
|-----------|--------------------------|
| **Dreamcore** | Shares the misty, floating quality but Dreamcore leans uncanny and unsettling where Ethereal remains serene and beautiful |
| **Danish Pastel** | Both use soft pastel palettes; Danish Pastel is warmer, more playful, and interior-design-focused |
| **Glassmorphism** | Core technique overlap: frosted glass and blur effects; Glassmorphism is a UI pattern while Ethereal is a complete emotional system |
| **Aurora Gradient** | Shares luminous glow and soft gradients; Aurora works against dark backgrounds with vivid spectrum, Ethereal stays pale and light |
| **Cottagecore** | Both evoke gentle beauty and nostalgia; Cottagecore is earthy and rustic while Ethereal is celestial and weightless |
| **Coquette** | Overlapping use of blush pink, ribbons, and femininity; Coquette is more deliberately ornamental and playful |
| **Frosted Touch** | Shares translucent layering and blur; Frosted Touch emphasizes the glass material itself, Ethereal uses it as atmosphere |
| **Frutiger Aero** | Both feel luminous and optimistic; Frutiger Aero is glossy, dimensional, and nature-tech-fused where Ethereal is flat, muted, and transcendent |
| **Light Skeuomorphism** | Shares light backgrounds and subtle depth cues; Light Skeuo is more structured, with realistic material references |
| **Art Nouveau** | Both celebrate organic curves and natural beauty; Art Nouveau is ornamental and linear while Ethereal dissolves form into atmosphere |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ethereal -- Dreamy Design</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Nunito:wght@300;400;500&family=La+Belle+Aurore&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Backgrounds */
      --eth-pearl: #FAF8FF;
      --eth-mist: #F0ECF5;
      --eth-opal: #E6E0F3;

      /* Purple / Lavender spectrum */
      --eth-lavender-haze: #DDD3EC;
      --eth-wisteria: #C4B1DC;
      --eth-soft-lilac: #B59AD8;

      /* Warm accents */
      --eth-blush-cloud: #F2DAE0;
      --eth-rose-quartz: #E8C1CA;
      --eth-champagne: #F5EDD6;

      /* Cool accents */
      --eth-powder-blue: #D4E4F7;
      --eth-sky-veil: #BDD5F0;
      --eth-seafoam: #D5EDE6;

      /* Text */
      --eth-text-primary: #5E4F78;
      --eth-text-body: #8A7CA8;
      --eth-text-muted: #9B93A8;

      /* Gradients */
      --eth-gradient-haze: linear-gradient(135deg, #F0ECF5, #DDD3EC, #D4E4F7);
      --eth-gradient-blush: linear-gradient(135deg, #F2DAE0, #DDD3EC, #E6E0F3);
      --eth-gradient-dawn: linear-gradient(180deg, #FAF8FF, #F0ECF5, #DDD3EC);
      --eth-gradient-iridescent: linear-gradient(135deg, #D4E4F7, #DDD3EC, #F2DAE0, #D5EDE6);

      /* Glow */
      --eth-glow-soft: 0 0 40px rgba(181, 154, 216, 0.15);
      --eth-glow-warm: 0 0 40px rgba(242, 218, 224, 0.2);

      /* Glass */
      --eth-glass-bg: rgba(255, 255, 255, 0.45);
      --eth-glass-border: rgba(181, 154, 216, 0.15);
      --eth-glass-blur: 20px;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Nunito', 'Segoe UI', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.85;
      color: var(--eth-text-body);
      background: var(--eth-pearl);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-weight: 300;
      color: var(--eth-text-primary);
      line-height: 1.25;
      letter-spacing: 0.02em;
    }

    /* =============================================
       AMBIENT BACKGROUND ORBS
    ============================================= */
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      z-index: 0;
      opacity: 0.45;
    }

    .orb--1 {
      width: 500px;
      height: 500px;
      background: var(--eth-lavender-haze);
      top: -10%;
      left: -5%;
      animation: orbFloat 18s ease-in-out infinite alternate;
    }

    .orb--2 {
      width: 400px;
      height: 400px;
      background: var(--eth-blush-cloud);
      top: 30%;
      right: -8%;
      animation: orbFloat 22s ease-in-out infinite alternate-reverse;
    }

    .orb--3 {
      width: 350px;
      height: 350px;
      background: var(--eth-powder-blue);
      bottom: -5%;
      left: 20%;
      animation: orbFloat 15s ease-in-out infinite alternate;
    }

    .orb--4 {
      width: 300px;
      height: 300px;
      background: var(--eth-seafoam);
      top: 60%;
      left: -10%;
      animation: orbFloat 20s ease-in-out infinite alternate-reverse;
    }

    @keyframes orbFloat {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(25px, -30px) scale(1.06); }
      66% { transform: translate(-20px, 15px) scale(0.94); }
      100% { transform: translate(10px, -10px) scale(1.02); }
    }

    /* All content above orbs */
    .page-content {
      position: relative;
      z-index: 1;
    }

    /* =============================================
       NAVIGATION
    ============================================= */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      padding: 28px 40px;
    }

    .logo {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: 1.5rem;
      color: var(--eth-text-primary);
      text-decoration: none;
      letter-spacing: 0.08em;
    }

    nav ul {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    nav ul a {
      font-family: 'Nunito', sans-serif;
      font-weight: 300;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      color: var(--eth-text-muted);
      text-decoration: none;
      transition: color 0.4s ease;
    }

    nav ul a:hover {
      color: var(--eth-text-primary);
    }

    /* =============================================
       HERO SECTION
    ============================================= */
    .hero {
      min-height: 88vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 40px;
      position: relative;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 6vw, 5rem);
      letter-spacing: 0.03em;
      margin-bottom: 1.5rem;
    }

    .hero .script-accent {
      font-family: 'La Belle Aurore', cursive;
      font-size: 1.3rem;
      color: var(--eth-wisteria);
      margin-bottom: 1rem;
      display: block;
    }

    .hero p {
      font-size: 1.15rem;
      color: var(--eth-text-muted);
      max-width: 540px;
      margin: 0 auto 2.5rem;
      line-height: 1.9;
    }

    /* =============================================
       BUTTONS
    ============================================= */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--eth-gradient-blush);
      color: var(--eth-text-primary);
      border: none;
      border-radius: 50px;
      padding: 14px 40px;
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 0.06em;
      cursor: pointer;
      text-decoration: none;
      box-shadow: var(--eth-glow-warm);
      transition: box-shadow 0.5s ease, transform 0.4s ease;
    }

    .btn:hover {
      box-shadow:
        0 0 50px rgba(232, 193, 202, 0.3),
        0 4px 20px rgba(181, 154, 216, 0.15);
      transform: translateY(-2px);
    }

    .btn--ghost {
      background: transparent;
      border: 1px solid var(--eth-glass-border);
      box-shadow: none;
      color: var(--eth-text-body);
    }

    .btn--ghost:hover {
      background: rgba(255, 255, 255, 0.4);
      box-shadow: var(--eth-glow-soft);
      border-color: var(--eth-wisteria);
    }

    /* =============================================
       DIVIDER
    ============================================= */
    .divider {
      width: 120px;
      height: 2px;
      margin: 80px auto;
      background: var(--eth-gradient-iridescent);
      border: none;
      border-radius: 2px;
      opacity: 0.5;
    }

    /* =============================================
       FEATURES SECTION
    ============================================= */
    .features {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 40px 100px;
    }

    .features h2 {
      text-align: center;
      font-size: clamp(2rem, 4vw, 2.8rem);
      margin-bottom: 16px;
    }

    .features > p {
      text-align: center;
      color: var(--eth-text-muted);
      max-width: 520px;
      margin: 0 auto 60px;
      font-size: 1rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }

    .card {
      background: var(--eth-glass-bg);
      backdrop-filter: blur(var(--eth-glass-blur));
      -webkit-backdrop-filter: blur(var(--eth-glass-blur));
      border: 1px solid var(--eth-glass-border);
      border-radius: 24px;
      padding: 40px;
      box-shadow: var(--eth-glow-soft);
      transition: box-shadow 0.5s ease, transform 0.5s ease;
    }

    .card:hover {
      box-shadow:
        0 0 60px rgba(181, 154, 216, 0.2),
        0 8px 32px rgba(181, 154, 216, 0.08);
      transform: translateY(-4px);
    }

    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      font-size: 1.35rem;
      margin-bottom: 10px;
    }

    .card p {
      font-size: 0.93rem;
      color: var(--eth-text-muted);
      line-height: 1.75;
    }

    /* =============================================
       QUOTE / TESTIMONIAL
    ============================================= */
    .quote-section {
      max-width: 700px;
      margin: 0 auto;
      padding: 40px 40px 100px;
      text-align: center;
    }

    .quote-section blockquote {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(1.4rem, 3vw, 2rem);
      font-style: italic;
      color: var(--eth-text-primary);
      line-height: 1.6;
      margin-bottom: 24px;
      position: relative;
    }

    .quote-section blockquote::before {
      content: '\201C';
      font-size: 4rem;
      color: var(--eth-lavender-haze);
      position: absolute;
      top: -20px;
      left: -10px;
      line-height: 1;
    }

    .quote-section cite {
      font-family: 'Nunito', sans-serif;
      font-weight: 300;
      font-size: 0.85rem;
      color: var(--eth-text-muted);
      font-style: normal;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* =============================================
       CTA SECTION
    ============================================= */
    .cta {
      text-align: center;
      padding: 60px 40px 120px;
    }

    .cta-inner {
      background: var(--eth-glass-bg);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid var(--eth-glass-border);
      border-radius: 32px;
      padding: 70px 50px;
      max-width: 720px;
      margin: 0 auto;
      box-shadow: var(--eth-glow-soft);
    }

    .cta h2 {
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      margin-bottom: 16px;
    }

    .cta p {
      color: var(--eth-text-muted);
      margin-bottom: 2rem;
      max-width: 440px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta .btn-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* =============================================
       FOOTER
    ============================================= */
    footer {
      text-align: center;
      padding: 40px;
      font-size: 0.82rem;
      color: var(--eth-text-muted);
      letter-spacing: 0.03em;
    }

    footer a {
      color: var(--eth-wisteria);
      text-decoration: none;
    }

    /* =============================================
       FADE-IN ANIMATION
    ============================================= */
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 1.2s ease, transform 1.2s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* =============================================
       RESPONSIVE
    ============================================= */
    @media (max-width: 768px) {
      nav { padding: 20px 24px; }
      nav ul { gap: 20px; }
      .hero { min-height: 70vh; padding: 60px 24px; }
      .features { padding: 20px 24px 80px; }
      .card { padding: 30px; }
      .cta-inner { padding: 50px 28px; }
      .quote-section { padding: 20px 24px 80px; }

      .orb { opacity: 0.3; filter: blur(60px); }
    }

    @media (max-width: 480px) {
      nav ul { gap: 14px; }
      nav ul a { font-size: 0.8rem; }
      .hero h1 { font-size: 2.2rem; }
      .features-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <!-- Ambient glow orbs -->
  <div class="orb orb--1"></div>
  <div class="orb orb--2"></div>
  <div class="orb orb--3"></div>
  <div class="orb orb--4"></div>

  <div class="page-content">
    <!-- Navigation -->
    <nav>
      <a href="#" class="logo">Ethereal</a>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <span class="script-accent">a place of gentle light</span>
      <h1>Where softness<br>becomes clarity</h1>
      <p>An experience designed for stillness. Every surface glows, every edge dissolves, every moment invites you to breathe.</p>
      <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center;">
        <a href="#" class="btn">Enter the light</a>
        <a href="#" class="btn btn--ghost">Learn more</a>
      </div>
    </section>

    <hr class="divider">

    <!-- Features -->
    <section class="features">
      <h2>Luminous by nature</h2>
      <p>Three principles that guide every surface, every glow, every whispered detail.</p>
      <div class="features-grid">
        <div class="card fade-in">
          <div class="card-icon" style="background: rgba(181,154,216,0.15);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" stroke="#B59AD8" stroke-width="1.5"/>
              <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#B59AD8" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Radiant Glow</h3>
          <p>Every element emits a gentle luminescence. Soft halos and ambient light replace hard shadows, creating depth through radiance rather than darkness.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon" style="background: rgba(212,228,247,0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#BDD5F0" stroke-width="1.5"/>
              <path d="M8 12s1.5 3 4 3 4-3 4-3-1.5-3-4-3-4 3-4 3z" stroke="#BDD5F0" stroke-width="1.5"/>
            </svg>
          </div>
          <h3>Dissolved Edges</h3>
          <p>Boundaries blur and soften. Translucent glass, feathered gradients, and diffused imagery create an atmosphere where form melts into light.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon" style="background: rgba(242,218,224,0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#E8C1CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Quiet Presence</h3>
          <p>Space breathes. Generous whitespace is not emptiness but luminous atmosphere, holding each element in a gentle, floating suspension.</p>
        </div>
      </div>
    </section>

    <hr class="divider">

    <!-- Quote -->
    <section class="quote-section fade-in">
      <blockquote>
        The most beautiful things are not objects, not places -- they are moments of light, suspended between one breath and the next.
      </blockquote>
      <cite>On Impermanent Beauty</cite>
    </section>

    <hr class="divider">

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner fade-in">
        <h2>Step into the glow</h2>
        <p>Join those who design with softness, intention, and light. Beauty begins at the threshold of stillness.</p>
        <div class="btn-group">
          <a href="#" class="btn">Begin</a>
          <a href="#" class="btn btn--ghost">Explore further</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>Crafted with the Ethereal aesthetic. Softness is not weakness -- it is light, choosing to be gentle.</p>
    </footer>
  </div>

  <!-- Scroll fade-in script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.15 }
      );

      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    });
  </script>
</body>
</html>
```

---

## Implementation Tips

- **Always include `-webkit-` prefixes** for `backdrop-filter` and `background-clip: text` -- Safari and older WebKit browsers require `-webkit-backdrop-filter` and `-webkit-background-clip` for the frosted glass and gradient text effects to render
- **Test blur performance on mobile** -- large `filter: blur()` values on fixed-position orb elements are GPU-intensive; reduce orb opacity and blur radius on smaller viewports via media queries, or replace fixed orbs with a static CSS gradient on low-powered devices
- **Provide `@supports` fallbacks for `backdrop-filter`** -- on browsers without support, fall back to a solid semi-transparent background such as `rgba(240, 236, 245, 0.85)` to maintain the layered appearance without the frosted glass effect
- **Verify WCAG contrast ratios carefully** -- the low-contrast, pale palette is central to the aesthetic but requires extra attention; pair `--eth-text-primary` (#5E4F78) against `--eth-pearl` (#FAF8FF) for body text to clear AA standards (contrast ratio approximately 5.2:1), and avoid using `--eth-text-muted` for any essential content
- **Keep animated orbs to a maximum of 4-5 per page** -- each blurred, animated element triggers GPU compositing; test on real devices to catch frame-rate drops, and use `will-change: transform` judiciously
- **Use `clamp()` for responsive typography** -- the thin, light-weight display fonts that define Ethereal can become illegibly small on mobile; `clamp()` with generous minimums ensures headings remain readable without losing their airy proportions
- **Optimize images for the soft-focus treatment** -- apply a slight Gaussian blur and desaturation to photographs before serving them; this reduces file size while reinforcing the aesthetic, and avoids the visual jolt of a sharp-edged photograph in an otherwise diffused layout
- **Animate slowly and deliberately** -- all transitions should range from 0.4s to 1.5s with `ease` or `ease-in-out` timing; the Ethereal mood breaks instantly with any snappy or bouncy motion
