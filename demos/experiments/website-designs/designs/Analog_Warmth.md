# Analog Warmth Design Reference

## Overview

Analog Warmth is a design aesthetic rooted in the visual language of film photography, drawing its identity from the warm tonal characteristics of classic film stocks like Kodak Portra, Fujifilm Superia, and Kodak Ektar. The style celebrates the organic imperfections inherent to analog processes: gentle film grain, soft light leaks that bleed warm oranges and ambers across compositions, slightly faded mid-tones, and the naturally desaturated color profiles that gave 35mm and medium-format photography their unmistakable character. Where digital precision favors clinical sharpness and color accuracy, Analog Warmth deliberately embraces the tactile, imperfect, and deeply human qualities of photochemical image-making.

In web and interface design, Analog Warmth translates into muted but warm color palettes dominated by ambers, soft peaches, faded ochres, and creamy off-whites. Backgrounds feel like aged photographic paper rather than sterile screens. Typography leans toward transitional serifs and humanist typefaces that echo the printed ephemera found in darkrooms and vintage photo albums -- think photo captions typed on mechanical typewriters, handwritten developer notes, or the understated elegance of mid-century editorial layouts. Layouts favor generous whitespace and softened edges, allowing content to breathe the way a well-composed photograph gives its subject room within the frame.

The emotional resonance of Analog Warmth lies in its ability to evoke nostalgia without being overtly retro. It does not attempt to recreate the 1970s or simulate a specific decade. Instead, it borrows the timeless sensory qualities of film -- the way grain gives an image texture you can almost feel, the way a light leak transforms a mundane scene into something luminous, the way faded tones suggest a memory rather than a document. This makes it particularly effective for brands and experiences that want to communicate authenticity, craftsmanship, intimacy, and emotional warmth. Photography portfolios, lifestyle brands, artisan product pages, personal journals, and editorial storytelling projects all benefit from this aesthetic's unique ability to make digital spaces feel analog, physical, and alive.

---

## Visual Characteristics

### Core Design Traits

- **Warm, faded color palette**: Colors lean toward amber, peach, ochre, and soft brown -- emulating the warm tonal shift of Kodak Portra and other daylight-balanced film stocks
- **Film grain texture**: A subtle, organic noise pattern overlays surfaces and images, giving the design a tactile, photographic quality that digital flatness lacks
- **Light leak accents**: Soft washes of warm orange, golden yellow, or rosy pink bleed across edges and corners, mimicking the flare caused by light entering a camera body through worn seals
- **Desaturated mid-tones**: Colors are gently muted rather than vivid; greens lean olive, blues lean slate, and reds lean toward terracotta or dusty rose
- **Soft focus and rounded edges**: Hard geometric lines are avoided in favor of gentle curves, feathered edges, and subtle blur effects that emulate vintage lens characteristics
- **Vignette darkening**: Edges of sections and hero areas darken subtly toward the periphery, replicating the natural fall-off of light on film
- **Creamy whites and warm paper tones**: Pure white (#FFFFFF) is never used; backgrounds favor warm cream, aged ivory, and soft buff tones that suggest photographic paper
- **Halation glow**: Bright elements emit a subtle warm glow outward, mimicking the red-orange halation effect caused by light bouncing off film backing
- **Layered texture depth**: Multiple subtle textures -- grain, paper fiber, dust specks -- are composited to create rich tactile surfaces
- **Analog imperfection**: Slight misalignments, softened type rendering, and gentle inconsistencies are embraced as features rather than flaws
- **Warm shadow tinting**: Shadows carry a brown or sepia undertone rather than neutral gray or pure black, keeping the overall warmth consistent

### Design Principles

- **Warmth over sterility**: Every design decision should push toward organic warmth; if something feels clinical or cold, it needs more analog character
- **Imperfection as authenticity**: Grain, light leaks, slight desaturation, and soft edges are deliberate choices that communicate realness and human touch
- **Tactile suggestion**: The design should make screens feel like physical objects -- photographic prints, darkroom paper, vintage album pages
- **Restraint in saturation**: Colors should feel as though they have been naturally processed through film chemistry, never digitally boosted or neon
- **Nostalgia without pastiche**: The goal is timeless warmth, not period costume; avoid overtly dating the design to a specific decade
- **Photographic composition**: Layouts should feel composed like photographs -- balanced, deliberate, with meaningful negative space and a clear focal hierarchy
- **Light as a design element**: Use gradients, glows, and opacity shifts to suggest the behavior of natural light passing through and around physical media

---

## Color Palette

The Analog Warmth palette is derived from the tonal characteristics of classic film stocks. Kodak Portra contributes warm, peachy skin tones and soft amber highlights. Fujifilm stocks add subtle olive-greens and muted teals. The overall palette avoids pure hues in favor of colors that feel as though they have been developed, printed, and aged -- gently faded, warmly shifted, and unmistakably analog.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Portra Cream | `#F5EDE0` | Primary background; warm paper base |
| Darkroom Ivory | `#EDE4D3` | Card and surface background |
| Light Leak Amber | `#E8A54B` | Primary accent; CTA highlights, light leak overlays |
| Kodak Peach | `#E4B08A` | Secondary accent; warm highlights, badges |
| Faded Ochre | `#C4A265` | Tertiary accent; borders, subtle emphasis |
| Sepia Shadow | `#5C4A3A` | Primary text color |
| Exposure Brown | `#7A6150` | Secondary text; captions, metadata |
| Film Fog Rose | `#C89B97` | Soft accent; tags, hover states |
| Velvia Olive | `#8A8B6A` | Muted green accent; success states, natural elements |
| Halation Orange | `#D97A3E` | Strong accent; active states, glow effects |
| Dust Mote Gold | `#D4B876` | Decorative accent; dividers, star ratings |
| Emulsion Blue | `#7A8B96` | Cool neutral; links, secondary info |
| Shutter Black | `#3A332C` | Deep text; headings, high-contrast elements |
| Negative Strip | `#2C2520` | Darkest tone; footer backgrounds, overlays |
| Developer Tint | `#F9F3EA` | Lightest background; alternate sections |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --aw-cream: #F5EDE0;
  --aw-ivory: #EDE4D3;
  --aw-developer: #F9F3EA;

  /* Primary Accents */
  --aw-amber: #E8A54B;
  --aw-peach: #E4B08A;
  --aw-ochre: #C4A265;

  /* Text */
  --aw-sepia: #5C4A3A;
  --aw-brown: #7A6150;
  --aw-shutter: #3A332C;

  /* Secondary Accents */
  --aw-rose: #C89B97;
  --aw-olive: #8A8B6A;
  --aw-orange: #D97A3E;
  --aw-gold: #D4B876;
  --aw-blue: #7A8B96;

  /* Dark Tones */
  --aw-negative: #2C2520;
}
```

---

## Typography

Analog Warmth typography draws from two traditions: the elegant transitional serifs found in mid-century editorial layouts and photo book design, and the raw mechanical character of typewriter faces used for darkroom notes, contact sheet annotations, and personal correspondence. The pairing of refined serifs with monospaced or typewriter-style fonts creates a tension between the polished and the handmade that defines the aesthetic's character.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Libre Baskerville** | 400, 700 | Headings; warm, readable transitional serif | [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) |
| **Source Serif 4** | 300, 400, 600, 700 | Body text; versatile optical-size serif | [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) |
| **Special Elite** | 400 | Accent text; typewriter aesthetic for captions and labels | [Special Elite](https://fonts.google.com/specimen/Special+Elite) |
| **Courier Prime** | 400, 700 | Code, metadata, timestamps; clean monospace | [Courier Prime](https://fonts.google.com/specimen/Courier+Prime) |
| **Lora** | 400, 500, 600, 700 | Alternative headings; calligraphic serif with warmth | [Lora](https://fonts.google.com/specimen/Lora) |
| **DM Sans** | 300, 400, 500 | UI labels, navigation; clean humanist sans-serif | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Libre Baskerville 700 | Source Serif 4 400 | Classic editorial warmth; photo book feel |
| Lora 600 | DM Sans 400 | Warm serif headings with clean modern body |
| Special Elite 400 | Source Serif 4 400 | Darkroom notes meet polished prose |
| Libre Baskerville 700 | Courier Prime 400 | Vintage editorial with raw typewriter body |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600&family=Special+Elite&family=DM+Sans:wght@300;400;500&display=swap');

body {
  font-family: 'Source Serif 4', 'Georgia', serif;
  font-size: 1.05rem;
  line-height: 1.85;
  color: #5C4A3A;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Libre Baskerville', 'Times New Roman', serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #3A332C;
}

.typewriter {
  font-family: 'Special Elite', 'Courier New', monospace;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  color: #7A6150;
}

.meta, .caption {
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7A6150;
}

.ui-label {
  font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #5C4A3A;
}
```

---

## Layout Principles

- **Single-column or asymmetric two-column layouts**: Favor editorial composition with a dominant content column and a narrow sidebar for metadata or captions, similar to a photo book spread
- **Generous whitespace**: Use 40-64px padding on cards and 32-48px gaps between elements; the layout should feel as unhurried as flipping through a photo album
- **Warm, rounded containers**: Cards and content blocks use border-radius of 8-14px with warm-tinted shadows; nothing should feel sharp or angular
- **Vignette framing**: Hero sections and large image areas darken subtly toward their edges using radial gradients, pulling focus toward the center
- **Contact-sheet grids for galleries**: Photo galleries can use evenly spaced grids with narrow gaps (4-8px), referencing the layout of a film contact sheet
- **Max-width constraint**: Keep primary content between 720-900px wide, centered on the page, to maintain comfortable reading measure
- **Layered depth through overlapping**: Allow images to slightly overlap card edges or section boundaries, creating a collage-like dimensionality
- **Vertical rhythm with texture breaks**: Insert grain texture dividers, light leak gradients, or film-strip ornaments between major sections rather than plain horizontal rules
- **Responsive scaling**: On mobile, stack columns vertically, maintain generous padding, and ensure grain and texture effects remain subtle (reduce opacity on small screens to preserve readability)
- **Photographic aspect ratios**: Image containers should favor classic film ratios -- 3:2 for 35mm, 1:1 for medium format, or 16:9 for cinematic pans

---

## CSS / Design Techniques

### Film Grain Overlay

```css
.grain-overlay {
  position: relative;
}

.grain-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
  z-index: 1;
  mix-blend-mode: multiply;
}
```

### Light Leak Gradient

```css
.light-leak {
  position: relative;
  overflow: hidden;
}

.light-leak::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(
    ellipse at center,
    rgba(232, 165, 75, 0.25) 0%,
    rgba(217, 122, 62, 0.12) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
  filter: blur(40px);
}

.light-leak::after {
  content: '';
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 45%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(200, 155, 151, 0.2) 0%,
    rgba(228, 176, 138, 0.1) 45%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
  filter: blur(35px);
}
```

### Analog Card

```css
.analog-card {
  background: #EDE4D3;
  border: 1px solid rgba(196, 162, 101, 0.3);
  border-radius: 10px;
  padding: 32px;
  box-shadow:
    0 2px 8px rgba(92, 74, 58, 0.08),
    0 0 0 1px rgba(196, 162, 101, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.analog-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(232, 165, 75, 0.6),
    rgba(228, 176, 138, 0.4),
    rgba(200, 155, 151, 0.3)
  );
}

.analog-card:hover {
  box-shadow:
    0 6px 20px rgba(92, 74, 58, 0.12),
    0 0 0 1px rgba(196, 162, 101, 0.15);
  transform: translateY(-2px);
}

.analog-card h3 {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.3rem;
  color: #3A332C;
  margin-bottom: 12px;
}

.analog-card p {
  color: #5C4A3A;
  line-height: 1.8;
}
```

### Analog Button

```css
.analog-btn {
  display: inline-block;
  background: #5C4A3A;
  color: #F5EDE0;
  border: none;
  border-radius: 6px;
  padding: 12px 28px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(58, 51, 44, 0.2);
  position: relative;
  overflow: hidden;
}

.analog-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(232, 165, 75, 0) 0%,
    rgba(232, 165, 75, 0.15) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.analog-btn:hover {
  background: #3A332C;
  box-shadow: 0 4px 14px rgba(58, 51, 44, 0.3);
  transform: translateY(-1px);
}

.analog-btn:hover::after {
  opacity: 1;
}

.analog-btn--warm {
  background: #E8A54B;
  color: #3A332C;
  box-shadow: 0 2px 6px rgba(232, 165, 75, 0.3);
}

.analog-btn--warm:hover {
  background: #D97A3E;
  color: #F5EDE0;
}
```

### Navigation Bar

```css
.analog-nav {
  background: #F5EDE0;
  border-bottom: 1px solid rgba(196, 162, 101, 0.25);
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(245, 237, 224, 0.92);
}

.analog-nav__brand {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #3A332C;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.analog-nav__links {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.analog-nav__links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  color: #5C4A3A;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;
  letter-spacing: 0.02em;
}

.analog-nav__links a:hover,
.analog-nav__links a.active {
  background: rgba(232, 165, 75, 0.12);
  color: #3A332C;
}
```

### Hero Section

```css
.analog-hero {
  background: linear-gradient(
    175deg,
    #F9F3EA 0%,
    #F5EDE0 40%,
    #EDE4D3 100%
  );
  padding: 100px 40px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Vignette effect */
.analog-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(44, 37, 32, 0.06) 100%
  );
  pointer-events: none;
}

/* Light leak wash */
.analog-hero::after {
  content: '';
  position: absolute;
  top: -30%;
  right: -15%;
  width: 50%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(232, 165, 75, 0.15) 0%,
    transparent 65%
  );
  pointer-events: none;
  filter: blur(50px);
}

.analog-hero h1 {
  font-family: 'Libre Baskerville', serif;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 700;
  color: #3A332C;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
}

.analog-hero .subtitle {
  font-family: 'Special Elite', monospace;
  font-size: 1.1rem;
  color: #7A6150;
  letter-spacing: 0.05em;
  margin-bottom: 32px;
  position: relative;
  z-index: 2;
}

.analog-hero p {
  font-family: 'Source Serif 4', serif;
  font-size: 1.15rem;
  color: #5C4A3A;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.85;
  position: relative;
  z-index: 2;
}
```

### Vignette Image Frame

```css
.analog-frame {
  position: relative;
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
}

.analog-frame img {
  display: block;
  width: 100%;
  height: auto;
  filter: saturate(0.85) contrast(0.95) brightness(1.02) sepia(0.08);
  transition: filter 0.4s ease;
}

.analog-frame::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 55%,
    rgba(44, 37, 32, 0.2) 100%
  );
  pointer-events: none;
}

.analog-frame:hover img {
  filter: saturate(0.9) contrast(0.97) brightness(1.04) sepia(0.05);
}
```

### Film Strip Divider

```css
.film-strip-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 48px auto;
  max-width: 300px;
  opacity: 0.4;
}

.film-strip-divider::before,
.film-strip-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    #C4A265,
    transparent
  );
}

.film-strip-divider span {
  display: flex;
  gap: 6px;
}

.film-strip-divider span i {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #C4A265;
  opacity: 0.6;
}
```

### Warm Photo Filter

```css
.warm-photo {
  filter: saturate(0.82) sepia(0.1) brightness(1.03) contrast(0.93);
  border-radius: 6px;
}

.warm-photo--strong {
  filter: saturate(0.7) sepia(0.18) brightness(1.05) contrast(0.88);
}

.warm-photo--subtle {
  filter: saturate(0.9) sepia(0.05) brightness(1.01) contrast(0.97);
}
```

---

## Design Do's and Don'ts

### Do's

- **Use warm, film-inspired color grading** on all photographs: apply subtle sepia, desaturation, and warm color shifts to maintain palette cohesion
- **Layer grain textures** over backgrounds and images using CSS pseudo-elements or SVG filters to create authentic analog tactility
- **Tint shadows warm**: use `rgba(92, 74, 58, 0.08)` or similar brown-based shadow colors instead of pure black for box-shadows
- **Favor off-white backgrounds**: use `#F5EDE0`, `#EDE4D3`, or `#F9F3EA` rather than `#FFFFFF` -- pure white breaks the analog warmth entirely
- **Pair serif headings with typewriter or monospace accents** to reference the interplay between polished photography and raw darkroom work
- **Use vignette effects** on hero areas and large images to naturally draw focus toward the center of compositions
- **Embrace whitespace generously**: film photography is about composition, and negative space is as important as content
- **Include subtle light leak gradients** as atmospheric touches on headers and feature sections

### Don'ts

- **Avoid pure black text**: use deep brown (#3A332C or #5C4A3A) for body text to maintain warmth throughout the reading experience
- **Avoid neon or highly saturated colors**: the aesthetic relies on muted, chemically processed tones -- electric blues, hot pinks, and vivid greens will clash
- **Do not use sharp, geometric patterns**: hard-edged chevrons, triangles, or pixel-perfect geometric grids contradict the organic softness of analog media
- **Avoid glossy or glassy effects**: glassmorphism, chrome reflections, and shiny gradients feel digital and cold against this aesthetic
- **Do not overdo the grain**: film grain should be barely perceptible at normal viewing distance (3-6% opacity); heavy grain becomes distracting noise
- **Avoid cool-toned grays**: neutral or blue-tinted grays for text and borders undermine the warmth; always shift grays toward brown or taupe
- **Do not use stark drop shadows**: heavy, offset shadows with hard edges feel digital; prefer soft, diffused, warm-tinted shadows
- **Avoid overly processed or HDR-style photography**: images should feel natural and slightly faded, not hyper-detailed or oversaturated

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Earth Tones** | Shares the warm, muted palette and natural material references, but Earth Tones is grounded in landscape and geology rather than photographic process |
| **Cottagecore** | Both evoke nostalgia and tactile warmth, but Cottagecore leans pastoral and botanical while Analog Warmth is rooted in photographic and darkroom culture |
| **Dark Academia** | Shares the appreciation for aged materials, sepia tones, and editorial typography, but Dark Academia skews cooler and more intellectual |
| **Hygge** | Both prioritize warmth and comfort, but Hygge is Scandinavian-influenced with cooler neutrals; Analog Warmth runs amber and sepia throughout |
| **Wabi-Sabi** | Shares the embrace of imperfection and natural aging, but Wabi-Sabi is rooted in Japanese minimalism and prefers cooler, more austere tones |
| **Light Skeuomorphism** | Both reference physical materials and tactile qualities, but Light Skeuomorphism emulates precise UI objects while Analog Warmth emulates photographic media |
| **Faded Denim / Vintage** | Overlaps in the celebration of wear and aging, but Analog Warmth is specifically photographic in its visual vocabulary rather than broadly retro |
| **Grandmillennial** | Shares nostalgia and warmth but Grandmillennial is rooted in interior design patterns (chintz, toile) rather than analog photography |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analog Warmth - Film &amp; Light</title>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600&family=Special+Elite&family=DM+Sans:wght@300;400;500&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       ANALOG WARMTH - DESIGN SYSTEM
       Film photography inspired aesthetic
       ======================================== */

    /* --- Reset & Base --- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --aw-cream: #F5EDE0;
      --aw-ivory: #EDE4D3;
      --aw-developer: #F9F3EA;
      --aw-amber: #E8A54B;
      --aw-peach: #E4B08A;
      --aw-ochre: #C4A265;
      --aw-sepia: #5C4A3A;
      --aw-brown: #7A6150;
      --aw-shutter: #3A332C;
      --aw-rose: #C89B97;
      --aw-olive: #8A8B6A;
      --aw-orange: #D97A3E;
      --aw-gold: #D4B876;
      --aw-blue: #7A8B96;
      --aw-negative: #2C2520;
    }

    body {
      font-family: 'Source Serif 4', Georgia, serif;
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--aw-sepia);
      background-color: var(--aw-cream);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* --- Grain Overlay (applied to body) --- */
    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      z-index: 9999;
      mix-blend-mode: multiply;
    }

    a {
      color: var(--aw-orange);
      text-decoration: none;
      border-bottom: 1px solid rgba(217, 122, 62, 0.3);
      transition: color 0.2s ease, border-color 0.2s ease;
    }

    a:hover {
      color: var(--aw-shutter);
      border-bottom-color: var(--aw-shutter);
    }

    img {
      max-width: 100%;
      height: auto;
    }

    /* --- Navigation --- */
    .nav {
      background: rgba(245, 237, 224, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(196, 162, 101, 0.25);
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav__brand {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--aw-shutter);
      text-decoration: none;
      border-bottom: none;
      letter-spacing: -0.01em;
    }

    .nav__brand:hover {
      color: var(--aw-shutter);
      border-bottom: none;
    }

    .nav__links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.88rem;
      font-weight: 400;
      color: var(--aw-sepia);
      padding: 8px 14px;
      border-radius: 6px;
      border-bottom: none;
      letter-spacing: 0.02em;
      transition: background 0.2s ease, color 0.2s ease;
    }

    .nav__links a:hover,
    .nav__links a.active {
      background: rgba(232, 165, 75, 0.12);
      color: var(--aw-shutter);
      border-bottom: none;
    }

    /* --- Hero Section --- */
    .hero {
      background: linear-gradient(175deg, var(--aw-developer) 0%, var(--aw-cream) 40%, var(--aw-ivory) 100%);
      padding: 100px 40px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(ellipse at center, transparent 50%, rgba(44, 37, 32, 0.06) 100%);
      pointer-events: none;
    }

    .hero::after {
      content: '';
      position: absolute;
      top: -30%;
      right: -15%;
      width: 50%;
      height: 100%;
      background: radial-gradient(ellipse at center, rgba(232, 165, 75, 0.15) 0%, transparent 65%);
      pointer-events: none;
      filter: blur(50px);
    }

    .hero h1 {
      font-family: 'Libre Baskerville', serif;
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 700;
      color: var(--aw-shutter);
      margin-bottom: 12px;
      position: relative;
      z-index: 2;
    }

    .hero__tagline {
      font-family: 'Special Elite', monospace;
      font-size: 1rem;
      color: var(--aw-brown);
      letter-spacing: 0.06em;
      margin-bottom: 24px;
      position: relative;
      z-index: 2;
    }

    .hero__description {
      font-family: 'Source Serif 4', serif;
      font-size: 1.1rem;
      color: var(--aw-sepia);
      max-width: 580px;
      margin: 0 auto 32px;
      line-height: 1.85;
      position: relative;
      z-index: 2;
    }

    /* --- Buttons --- */
    .btn {
      display: inline-block;
      border: none;
      border-radius: 6px;
      padding: 12px 28px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      cursor: pointer;
      text-decoration: none;
      border-bottom: none;
      transition: all 0.3s ease;
      position: relative;
    }

    .btn:hover {
      border-bottom: none;
    }

    .btn--primary {
      background: var(--aw-sepia);
      color: var(--aw-cream);
      box-shadow: 0 2px 6px rgba(58, 51, 44, 0.2);
    }

    .btn--primary:hover {
      background: var(--aw-shutter);
      color: var(--aw-cream);
      box-shadow: 0 4px 14px rgba(58, 51, 44, 0.3);
      transform: translateY(-1px);
    }

    .btn--warm {
      background: var(--aw-amber);
      color: var(--aw-shutter);
      box-shadow: 0 2px 6px rgba(232, 165, 75, 0.3);
    }

    .btn--warm:hover {
      background: var(--aw-orange);
      color: var(--aw-cream);
      box-shadow: 0 4px 14px rgba(217, 122, 62, 0.35);
      transform: translateY(-1px);
    }

    /* --- Main Content --- */
    .container {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    /* --- Section Heading --- */
    .section-heading {
      text-align: center;
      margin-bottom: 40px;
    }

    .section-heading h2 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--aw-shutter);
      margin-bottom: 8px;
    }

    .section-heading .meta {
      font-family: 'Courier Prime', monospace;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--aw-brown);
    }

    /* --- Divider --- */
    .divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 48px auto;
      max-width: 280px;
      opacity: 0.35;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--aw-ochre), transparent);
    }

    .divider__dots {
      display: flex;
      gap: 6px;
    }

    .divider__dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--aw-ochre);
    }

    /* --- Cards --- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }

    .card {
      background: var(--aw-ivory);
      border: 1px solid rgba(196, 162, 101, 0.3);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 8px rgba(92, 74, 58, 0.08);
      position: relative;
      overflow: hidden;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(
        90deg,
        rgba(232, 165, 75, 0.6),
        rgba(228, 176, 138, 0.4),
        rgba(200, 155, 151, 0.3)
      );
    }

    .card:hover {
      box-shadow: 0 6px 20px rgba(92, 74, 58, 0.12);
      transform: translateY(-2px);
    }

    .card__label {
      font-family: 'Courier Prime', monospace;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--aw-brown);
      margin-bottom: 8px;
      display: block;
    }

    .card h3 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--aw-shutter);
      margin-bottom: 10px;
    }

    .card p {
      color: var(--aw-sepia);
      font-size: 0.98rem;
      line-height: 1.8;
    }

    /* --- Photo Grid (Contact Sheet) --- */
    .contact-sheet {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      margin: 40px 0;
      background: var(--aw-negative);
      padding: 6px;
      border-radius: 4px;
    }

    .contact-sheet__frame {
      position: relative;
      aspect-ratio: 3 / 2;
      overflow: hidden;
      border-radius: 2px;
      background: var(--aw-ivory);
    }

    .contact-sheet__frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: saturate(0.82) sepia(0.08) contrast(0.93) brightness(1.02);
      transition: filter 0.4s ease;
    }

    .contact-sheet__frame::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(ellipse at center, transparent 55%, rgba(44, 37, 32, 0.15) 100%);
      pointer-events: none;
    }

    .contact-sheet__frame:hover img {
      filter: saturate(0.9) sepia(0.04) contrast(0.97) brightness(1.04);
    }

    /* --- Feature Section --- */
    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      margin: 56px 0;
    }

    .feature--reverse {
      direction: rtl;
    }

    .feature--reverse > * {
      direction: ltr;
    }

    .feature__image {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
    }

    .feature__image img {
      display: block;
      width: 100%;
      border-radius: 8px;
      filter: saturate(0.85) sepia(0.08) brightness(1.02) contrast(0.95);
    }

    .feature__image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(ellipse at center, transparent 55%, rgba(44, 37, 32, 0.15) 100%);
      pointer-events: none;
    }

    .feature__text h3 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--aw-shutter);
      margin-bottom: 12px;
    }

    .feature__text p {
      margin-bottom: 16px;
      line-height: 1.85;
    }

    /* --- Testimonial / Quote --- */
    .quote-block {
      background: var(--aw-developer);
      border-left: 3px solid var(--aw-amber);
      border-radius: 0 8px 8px 0;
      padding: 32px 36px;
      margin: 40px 0;
      position: relative;
    }

    .quote-block::before {
      content: '\201C';
      font-family: 'Libre Baskerville', serif;
      font-size: 4rem;
      color: var(--aw-ochre);
      opacity: 0.3;
      position: absolute;
      top: 8px;
      left: 12px;
      line-height: 1;
    }

    .quote-block p {
      font-family: 'Source Serif 4', serif;
      font-style: italic;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--aw-sepia);
      padding-left: 20px;
    }

    .quote-block cite {
      display: block;
      margin-top: 12px;
      padding-left: 20px;
      font-family: 'Courier Prime', monospace;
      font-size: 0.8rem;
      font-style: normal;
      color: var(--aw-brown);
      letter-spacing: 0.05em;
    }

    /* --- Footer --- */
    .footer {
      background: var(--aw-negative);
      color: rgba(245, 237, 224, 0.7);
      padding: 48px 32px;
      text-align: center;
      margin-top: 64px;
    }

    .footer__brand {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--aw-cream);
      margin-bottom: 8px;
    }

    .footer p {
      font-family: 'Courier Prime', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      color: rgba(245, 237, 224, 0.5);
    }

    .footer a {
      color: var(--aw-amber);
      border-bottom-color: rgba(232, 165, 75, 0.3);
    }

    .footer a:hover {
      color: var(--aw-peach);
    }

    /* --- Responsive --- */
    @media (max-width: 768px) {
      .nav {
        padding: 0 16px;
      }

      .nav__links {
        gap: 0;
      }

      .nav__links a {
        padding: 8px 10px;
        font-size: 0.82rem;
      }

      .hero {
        padding: 64px 20px 56px;
      }

      .container {
        padding: 32px 16px;
      }

      .feature {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .feature--reverse {
        direction: ltr;
      }

      .contact-sheet {
        grid-template-columns: repeat(2, 1fr);
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      body::after {
        opacity: 0.025;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 1.8rem;
      }

      .contact-sheet {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__brand">Film &amp; Light</a>
    <ul class="nav__links">
      <li><a href="#" class="active">Gallery</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <h1>Analog Warmth</h1>
    <p class="hero__tagline">Kodak Portra 400 &mdash; 35mm &mdash; f/2.8</p>
    <p class="hero__description">
      Every photograph carries the warmth of the light that made it.
      We celebrate the gentle grain, the amber glow, and the quiet
      imperfections that make analog images feel alive.
    </p>
    <a href="#" class="btn btn--primary">View the Collection</a>
  </header>

  <!-- Main Content -->
  <main class="container">

    <!-- Section: Featured Work -->
    <div class="section-heading">
      <h2>Recent Work</h2>
      <span class="meta">Shot on film &bull; Developed by hand</span>
    </div>

    <!-- Contact Sheet Grid -->
    <div class="contact-sheet">
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=267&fit=crop" alt="Golden hour landscape">
      </div>
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=267&fit=crop" alt="Mountain sunrise">
      </div>
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=267&fit=crop" alt="Forest path">
      </div>
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=267&fit=crop" alt="Woodland light">
      </div>
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=267&fit=crop" alt="Valley vista">
      </div>
      <div class="contact-sheet__frame">
        <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=267&fit=crop" alt="Wildflower field">
      </div>
    </div>

    <!-- Divider -->
    <div class="divider">
      <div class="divider__dots">
        <span class="divider__dot"></span>
        <span class="divider__dot"></span>
        <span class="divider__dot"></span>
      </div>
    </div>

    <!-- Feature Section -->
    <div class="feature">
      <div class="feature__image">
        <img src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&h=350&fit=crop" alt="Warm portrait">
      </div>
      <div class="feature__text">
        <h3>The Portra Look</h3>
        <p>
          Kodak Portra's signature warmth renders skin tones as creamy
          and natural, with gentle amber highlights and softly faded
          shadows. Every frame carries the unmistakable character of
          silver halide chemistry.
        </p>
        <a href="#" class="btn btn--warm">Explore Series</a>
      </div>
    </div>

    <div class="feature feature--reverse">
      <div class="feature__image">
        <img src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=500&h=350&fit=crop" alt="Light and shadow">
      </div>
      <div class="feature__text">
        <h3>Light Leaks &amp; Happy Accidents</h3>
        <p>
          Where digital cameras see errors, film photographers find
          beauty. Light leaks pour warm amber and rose across the
          frame, turning technical flaws into signature moments that
          no algorithm can replicate.
        </p>
        <a href="#" class="btn btn--primary">Read the Story</a>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider">
      <div class="divider__dots">
        <span class="divider__dot"></span>
        <span class="divider__dot"></span>
        <span class="divider__dot"></span>
      </div>
    </div>

    <!-- Card Grid -->
    <div class="section-heading">
      <h2>From the Darkroom</h2>
      <span class="meta">Notes on process &bull; Volume XII</span>
    </div>

    <div class="card-grid">
      <div class="card">
        <span class="card__label">Technique</span>
        <h3>Push Processing</h3>
        <p>
          Deliberately underexposing film and overdeveloping to increase
          grain and contrast, creating images with dramatic tonal range
          and raw, visceral energy.
        </p>
      </div>
      <div class="card">
        <span class="card__label">Film Stock</span>
        <h3>Portra 400</h3>
        <p>
          The gold standard for warm natural tones. Fine grain,
          extraordinary latitude, and those unmistakable peachy
          skin tones that digital color science still chases.
        </p>
      </div>
      <div class="card">
        <span class="card__label">Equipment</span>
        <h3>Vintage Lenses</h3>
        <p>
          Older lens coatings produce softer contrast and gentle
          flare, contributing to the dreamy, low-contrast rendering
          that defines the analog warmth character.
        </p>
      </div>
    </div>

    <!-- Quote Block -->
    <div class="quote-block">
      <p>
        There is something about film that digital will never capture --
        the way light passes through silver and chemistry to become
        something you can hold. Every grain is evidence that the
        photograph was real.
      </p>
      <cite>&mdash; A Darkroom Journal, Frame 24</cite>
    </div>

  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__brand">Film &amp; Light</div>
    <p>Shot on Kodak Portra 400 &bull; Developed in C-41 &bull; Printed with warmth</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Film grain via SVG filter**: Use an inline SVG `feTurbulence` filter as a CSS background-image for the grain overlay rather than loading a raster texture file; this keeps the effect resolution-independent and eliminates an HTTP request
- **Light leak gradients are atmospheric, not structural**: Apply light leak radial gradients with `pointer-events: none` on pseudo-elements positioned absolutely; they should float over content as ambient light would, not shift layout
- **Warm your shadows consistently**: Every `box-shadow` should use brown-tinted rgba values like `rgba(92, 74, 58, 0.08)` -- never `rgba(0, 0, 0, 0.1)`, which introduces a cold gray that breaks the warmth
- **Photo filter with CSS `filter`**: Apply `filter: saturate(0.82) sepia(0.08) contrast(0.93) brightness(1.02)` to images to achieve the desaturated warm look of developed film; adjust sepia and saturation values per image as needed
- **Reduce grain opacity on mobile**: Film grain at 4-6% opacity works on desktop but can reduce readability on small screens; drop to 2-3% opacity below 768px breakpoints
- **Use `backdrop-filter: blur()` for navigation**: A frosted, translucent navigation bar with warm-tinted background maintains the analog paper feel while providing functional sticky positioning
- **Vignette with radial gradient**: Apply `background: radial-gradient(ellipse at center, transparent 50%, rgba(44, 37, 32, 0.06) 100%)` on pseudo-elements over hero and feature sections to naturally draw the eye toward center content, mimicking the light fall-off of vintage lenses
- **Avoid pure `#000000` anywhere**: The darkest tone in the palette is `#2C2520` (Negative Strip); use this for footers and deep backgrounds; for text, `#3A332C` or `#5C4A3A` maintains warmth even at maximum contrast
