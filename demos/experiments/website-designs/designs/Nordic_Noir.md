# Nordic Noir Design Reference

## Overview

Nordic Noir is a design aesthetic that fuses the clean minimalism of Scandinavian design with the dark, atmospheric moodiness of Nordic crime fiction. Originating from the literary and cinematic genre that gave the world slow-burn thrillers set against bleak northern landscapes, the visual language of Nordic Noir translates into deep, muted color palettes, stark contrasts between light and shadow, and an overarching sense of restrained tension. Where traditional Scandinavian design celebrates bright whites and airy openness, Nordic Noir inverts the formula -- embracing charcoal blacks, slate blues, and cool grays while retaining the functional clarity and geometric precision that define the Nordic design tradition.

In web and digital design, Nordic Noir manifests as dark-mode interfaces with carefully controlled lighting effects, understated typography that favors geometric sans-serifs, and layouts that use generous negative space to create a sense of isolation and focus. The aesthetic draws from the visual vocabulary of crime dramas like "The Bridge," "Wallander," and "The Killing" -- overcast skies, rain-slicked streets, brutalist concrete, and the cold glow of fluorescent light in sparse interiors. Every element serves a purpose; ornamentation is stripped away in favor of raw texture, atmospheric depth, and quiet intensity.

The emotional register of Nordic Noir design sits between sophistication and unease. It creates digital spaces that feel modern and authoritative yet carry an undercurrent of mystery. The interplay of dark surfaces with subtle warm accents -- aged brass, muted amber, desaturated warm grays -- prevents the palette from becoming sterile. Shadows are not merely the absence of light but an active design element, used to create depth, direct attention, and evoke the contemplative moodiness that defines the genre. This is minimalism with weight, darkness with purpose, and restraint that speaks volumes.

---

## Visual Characteristics

### Core Design Traits

- **Dark, cool-toned backgrounds**: Deep charcoals, slate blacks, and near-black blues that evoke overcast Nordic skies and dimly lit interiors
- **Muted, desaturated palette**: Colors are never vivid or saturated; even accent colors are subdued, as if filtered through fog or rain
- **High contrast with restraint**: Strategic use of light elements against dark fields, but always controlled -- never garish or high-energy
- **Geometric sans-serif typography**: Clean, functional typefaces with even stroke widths that reflect Scandinavian design precision
- **Atmospheric lighting effects**: Subtle gradients, soft glows, and vignettes that simulate diffused northern light or fluorescent ambiance
- **Raw material textures**: Concrete grain, dark wood, brushed metal, and matte stone surfaces layered beneath content
- **Stark negative space**: Generous whitespace (or rather, darkspace) that creates a sense of isolation, focus, and deliberate quietness
- **Horizontal and vertical emphasis**: Strong grid lines, clean edges, and architectural alignment inspired by Nordic modernist architecture
- **Shadow as design element**: Intentional use of shadows to create depth, mystery, and visual hierarchy rather than decorative effect
- **Monochromatic imagery**: Photos and illustrations treated with desaturated, cool-toned filters that unify the visual language
- **Subtle warm accents**: Restrained touches of brass, amber, or warm gray that prevent the palette from becoming lifeless

### Design Principles

- **Functional darkness**: Every dark surface must serve a purpose -- improving readability, directing focus, or establishing mood; darkness is never arbitrary
- **Tension through restraint**: Create atmosphere not through excess but through what is withheld; let negative space and silence carry emotional weight
- **Light as narrative**: Treat lighting effects as storytelling tools; a soft glow suggests warmth, a hard edge suggests tension, a vignette suggests isolation
- **Material honesty**: Textures should reference real materials (concrete, wood, metal) rather than synthetic or fantastical surfaces
- **Scandinavian precision**: Maintain pixel-perfect alignment, consistent spacing, and mathematical grid relationships beneath the moody surface
- **Controlled warmth**: Introduce warm tones sparingly and deliberately to humanize the cold palette without disrupting the atmospheric darkness
- **Quiet hierarchy**: Guide the eye through subtle contrast shifts and spatial relationships rather than bold color or scale changes
- **Atmospheric depth**: Layer subtle gradients, textures, and shadows to create a sense of three-dimensional space within flat interfaces

---

## Color Palette

The Nordic Noir palette draws from the landscapes and interiors of Scandinavian crime fiction: overcast skies, rain-darkened concrete, slate rooftops, cold seas, and the rare warmth of an interior light glimpsed through a window. The dominant tones are cool and dark, anchored by near-blacks with blue or green undertones. Accent colors are muted and desaturated -- no color should appear as if it exists in direct sunlight. Warm accents, when used, suggest aged brass fixtures, dim incandescent bulbs, or weathered leather.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Midnight Charcoal | `#111318` | Primary background; deepest dark tone |
| Slate Black | `#1B1E26` | Card and surface backgrounds |
| Storm Gray | `#2A2E38` | Elevated surfaces; secondary containers |
| Fjord Blue | `#1E2A35` | Alternate dark background with cool blue undertone |
| Iron Gray | `#3A3F4B` | Borders, dividers, and subtle separators |
| Overcast | `#6B7280` | Secondary text; muted labels |
| Fog | `#9CA3AF` | Tertiary text; placeholder content |
| Cold Silver | `#D1D5DB` | Primary body text on dark backgrounds |
| Arctic White | `#F0F2F5` | High-emphasis headings and primary text |
| Brass | `#A68B5B` | Primary warm accent; buttons and highlights |
| Dim Amber | `#8B7340` | Secondary warm accent; hover states |
| Muted Copper | `#7A6550` | Decorative borders and icon accents |
| Deep Teal | `#1A3A3A` | Alternate accent for data or callouts |
| Dried Blood | `#4A2832` | Danger or emphasis accent; crime-fiction nod |
| Lichen | `#3A4A3A` | Success or nature accent; muted green |

### CSS Custom Properties

```css
:root {
  --nn-midnight: #111318;
  --nn-slate: #1B1E26;
  --nn-storm: #2A2E38;
  --nn-fjord: #1E2A35;
  --nn-iron: #3A3F4B;
  --nn-overcast: #6B7280;
  --nn-fog: #9CA3AF;
  --nn-silver: #D1D5DB;
  --nn-white: #F0F2F5;
  --nn-brass: #A68B5B;
  --nn-amber: #8B7340;
  --nn-copper: #7A6550;
  --nn-teal: #1A3A3A;
  --nn-blood: #4A2832;
  --nn-lichen: #3A4A3A;
}
```

---

## Typography

Nordic Noir typography reflects the Scandinavian design tradition of clean, functional typefaces. Geometric and grotesque sans-serifs dominate, chosen for their precision, evenness, and quiet authority. Display headings may employ condensed or light weights to evoke the sparse, editorial quality of Nordic magazine design. Body text prioritizes legibility in dark-mode contexts with slightly increased letter-spacing and line-height. The overall typographic tone is understated and professional -- no decorative flourishes, no playful curves.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Inter** | 300, 400, 500, 600, 700 | Body text; highly legible geometric sans-serif optimized for screens | [Inter](https://fonts.google.com/specimen/Inter) |
| **Space Grotesk** | 300, 400, 500, 600, 700 | Headings; modern grotesque with distinctive character | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| **Hanken Grotesk** | 300, 400, 500, 600, 700 | Alternative body; clean grotesque in the Nordic tradition | [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) |
| **IBM Plex Sans** | 300, 400, 500, 600 | UI elements and labels; neutral and precise | [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) |
| **DM Sans** | 400, 500, 700 | Display headings; geometric with slightly rounded terminals | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **JetBrains Mono** | 400, 500, 700 | Code blocks and data; monospaced with Scandinavian clarity | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Space Grotesk 600 | Inter 400 | Modern editorial precision meets screen-optimized readability |
| DM Sans 700 | Hanken Grotesk 400 | Geometric boldness paired with Nordic grotesque tradition |
| Space Grotesk 300 | IBM Plex Sans 400 | Light, airy headlines with neutral, systematic body text |
| Inter 700 | Inter 300 | Monofamily contrast using weight alone; maximum cohesion |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.75;
  color: #D1D5DB;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #F0F2F5;
  line-height: 1.2;
}

h1 { font-size: 2.75rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }

.label {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6B7280;
}

code, pre {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
}
```

---

## Layout Principles

- **Dark-first responsive grid**: Build on a 12-column grid with generous gutters (24-32px); the grid should feel architectural and precise, like the floor plan of a Nordic modernist building
- **Maximum content width of 1200px**: Center the main container with ample side margins to create a sense of focused isolation on wide screens
- **Generous vertical spacing**: Major sections should be separated by 80-120px of space; let the darkness breathe between content blocks
- **Card-based content organization**: Use elevated surface cards (slightly lighter than the background) to group related content; cards should have subtle borders rather than heavy shadows
- **Asymmetric compositions**: Break the grid occasionally with offset elements or unequal column splits (e.g., 7/5 or 8/4) to create visual tension
- **Sticky minimal navigation**: Top navigation should be thin, dark, and nearly invisible -- it is infrastructure, not decoration
- **Single-column reading zones**: Long-form text should be constrained to 680-720px width for optimal readability in dark mode
- **Layered depth through elevation**: Use 3-4 elevation levels (background, surface, raised surface, overlay) distinguished by subtle lightness shifts rather than shadows
- **Edge-to-edge imagery**: When images are used, let them bleed to container edges; avoid rounded corners or decorative frames
- **Horizontal rules as breathing space**: Use thin, low-opacity dividers to segment content without adding visual clutter
- **Footer as quiet resolution**: The footer should be darker than the body, minimal, and feel like the credits rolling after a film

---

## CSS / Design Techniques

### Nordic Noir Card

A card in the Nordic Noir style is a subtle elevation from the background -- not floating with heavy shadows, but rising gently like a concrete slab. Borders are thin and low-contrast, and the surface color is only marginally lighter than the background beneath it.

```css
.nn-card {
  background: #1B1E26;
  border: 1px solid rgba(58, 63, 75, 0.6);
  border-radius: 2px;
  padding: 32px;
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.nn-card:hover {
  border-color: rgba(166, 139, 91, 0.3);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.nn-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #F0F2F5;
  margin-bottom: 12px;
}

.nn-card p {
  color: #9CA3AF;
  line-height: 1.7;
}
```

### Brass Accent Button

Buttons in Nordic Noir are restrained and functional. The primary action uses the brass accent color with clean geometry. Hover states are subtle shifts, not dramatic transformations.

```css
.nn-button {
  background: transparent;
  color: #A68B5B;
  border: 1px solid #A68B5B;
  border-radius: 2px;
  padding: 12px 28px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.nn-button:hover {
  background: #A68B5B;
  color: #111318;
  box-shadow: 0 0 20px rgba(166, 139, 91, 0.15);
}

.nn-button--ghost {
  border-color: rgba(58, 63, 75, 0.6);
  color: #9CA3AF;
}

.nn-button--ghost:hover {
  border-color: #9CA3AF;
  color: #D1D5DB;
  background: transparent;
}
```

### Navigation Bar

The navigation bar should be nearly invisible -- a dark, thin strip that serves its function without demanding attention. It uses the deepest background tone and minimal typographic treatment.

```css
.nn-nav {
  background: rgba(17, 19, 24, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(58, 63, 75, 0.3);
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nn-nav__brand {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #F0F2F5;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.nn-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nn-nav__links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #6B7280;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
}

.nn-nav__links a:hover {
  color: #D1D5DB;
}

.nn-nav__links a.active {
  color: #A68B5B;
}
```

### Hero Section

The hero in Nordic Noir is restrained and atmospheric. No bright gradients or busy backgrounds -- just darkness, careful typography, and perhaps a subtle atmospheric gradient suggesting distant light.

```css
.nn-hero {
  padding: 120px 40px 100px;
  text-align: center;
  position: relative;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(30, 42, 53, 0.4) 0%, transparent 70%),
    linear-gradient(180deg, #111318 0%, #1B1E26 100%);
}

.nn-hero__label {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #A68B5B;
  margin-bottom: 24px;
}

.nn-hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  color: #F0F2F5;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
  line-height: 1.1;
}

.nn-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #6B7280;
  max-width: 520px;
  margin: 0 auto 40px;
  line-height: 1.7;
}
```

### Atmospheric Background

The signature Nordic Noir background uses layered gradients to create depth and mood without any visible imagery. The effect should feel like standing in a dimly lit room with a single cold light source overhead.

```css
.nn-atmosphere {
  min-height: 100vh;
  background: #111318;
  background-image:
    radial-gradient(ellipse at 50% -10%, rgba(30, 42, 53, 0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(26, 58, 58, 0.08) 0%, transparent 40%),
    radial-gradient(ellipse at 10% 60%, rgba(74, 40, 50, 0.04) 0%, transparent 30%);
  position: relative;
}

.nn-atmosphere::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}
```

### Fluorescent Glow Divider

A subtle horizontal divider that evokes the cold glow of fluorescent strip lighting -- a signature visual motif from Nordic crime dramas.

```css
.nn-divider {
  width: 100%;
  height: 1px;
  margin: 64px 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(58, 63, 75, 0.4) 20%,
    rgba(58, 63, 75, 0.6) 50%,
    rgba(58, 63, 75, 0.4) 80%,
    transparent 100%
  );
  position: relative;
}

.nn-divider--warm {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(166, 139, 91, 0.15) 20%,
    rgba(166, 139, 91, 0.3) 50%,
    rgba(166, 139, 91, 0.15) 80%,
    transparent 100%
  );
}
```

### Shadow Depth Effect

A technique for creating layered depth on containers, using multiple box-shadows that mimic the way light falls in a dim Nordic interior.

```css
.nn-depth-1 {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.2);
}

.nn-depth-2 {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(58, 63, 75, 0.2);
}

.nn-depth-3 {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 16px 48px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(58, 63, 75, 0.15);
}
```

### Image Treatment

Photographs in Nordic Noir should feel desaturated and cool-toned, as if shot on an overcast day in Stockholm or Copenhagen. This CSS filter chain achieves that cinematic quality.

```css
.nn-image {
  width: 100%;
  display: block;
  filter: saturate(0.35) brightness(0.85) contrast(1.1);
  transition: filter 0.4s ease;
}

.nn-image:hover {
  filter: saturate(0.5) brightness(0.9) contrast(1.05);
}

.nn-image--warm {
  filter: saturate(0.3) brightness(0.8) contrast(1.1) sepia(0.15);
}
```

---

## Design Do's and Don'ts

### Do's

- Use cool-toned near-blacks with blue or green undertones as primary backgrounds rather than pure black
- Maintain generous negative space; let the darkness itself become a design element that conveys mood and focus
- Choose geometric or grotesque sans-serif typefaces that reflect Scandinavian design precision
- Introduce warm brass or amber accents sparingly to prevent the palette from feeling lifeless or sterile
- Layer subtle atmospheric gradients to create depth without resorting to obvious effects
- Desaturate all imagery to match the muted tonal range of the overall palette
- Use thin, low-opacity borders rather than heavy shadows for card and container definition
- Keep animations subtle and slow (300-500ms); movements should feel deliberate and unhurried

### Don'ts

- Avoid pure black (`#000000`) backgrounds; always add a slight blue, green, or warm undertone for depth
- Avoid bright, saturated accent colors; even call-to-action elements should use muted, desaturated tones
- Do not use decorative or display serif fonts for primary text; the aesthetic demands functional simplicity
- Avoid rounded, bubbly UI elements; border-radius should be 0-4px for a sharp, architectural quality
- Do not use colorful gradients, rainbow effects, or vibrant imagery that breaks the muted atmospheric mood
- Avoid heavy drop shadows; depth should come from layered surface elevation, not dramatic shadow casting
- Do not overcrowd layouts; clutter is the antithesis of the Scandinavian minimalism that underlies this aesthetic
- Avoid playful illustrations, emojis, or cartoon-style graphics; all visual elements should feel photographic and grounded

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Scandinavian Minimalism** | The direct ancestor; Nordic Noir takes Scandi minimalism's clean lines and functional philosophy and wraps them in darkness |
| **Dark Mode Neon** | Both are dark-first aesthetics, but Dark Mode Neon uses vivid neon accents while Nordic Noir keeps everything muted and desaturated |
| **Cyberpunk** | Shares the dark urban atmosphere but Cyberpunk is maximalist and neon-saturated; Nordic Noir is restrained and natural |
| **Dark Academia** | Both embrace dark palettes and intellectual weight, but Dark Academia is warm and classical where Nordic Noir is cool and modern |
| **Japandi** | Shares the reverence for minimalism and natural materials but Japandi is warmer and lighter in overall tone |
| **Industrial Gothic** | Both use raw materials and dark palettes, but Industrial Gothic is heavier and more aggressive in its texture use |
| **Brutalism** | Shares the love of raw concrete and stark geometry but Brutalism in web design is intentionally confrontational where Nordic Noir is quiet |
| **Hygge** | The cozy, warm counterpart to Nordic Noir; both are rooted in Scandinavian culture but occupy opposite ends of the light/dark spectrum |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nordic Noir Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --nn-midnight: #111318;
      --nn-slate: #1B1E26;
      --nn-storm: #2A2E38;
      --nn-fjord: #1E2A35;
      --nn-iron: #3A3F4B;
      --nn-overcast: #6B7280;
      --nn-fog: #9CA3AF;
      --nn-silver: #D1D5DB;
      --nn-white: #F0F2F5;
      --nn-brass: #A68B5B;
      --nn-amber: #8B7340;
      --nn-copper: #7A6550;
      --nn-teal: #1A3A3A;
      --nn-blood: #4A2832;
      --nn-lichen: #3A4A3A;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--nn-silver);
      background: var(--nn-midnight);
      background-image:
        radial-gradient(ellipse at 50% -10%, rgba(30, 42, 53, 0.5) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 90%, rgba(26, 58, 58, 0.08) 0%, transparent 40%);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* ========================================
       Navigation
       ======================================== */

    .nav {
      background: rgba(17, 19, 24, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(58, 63, 75, 0.3);
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav__brand {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--nn-white);
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    .nav__links {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 400;
      color: var(--nn-overcast);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      transition: color 0.2s ease;
      padding: 4px 0;
    }

    .nav__links a:hover,
    .nav__links a.active {
      color: var(--nn-white);
    }

    /* ========================================
       Hero Section
       ======================================== */

    .hero {
      padding: 120px 40px 100px;
      text-align: center;
      position: relative;
      background:
        radial-gradient(ellipse at 50% 0%, rgba(30, 42, 53, 0.4) 0%, transparent 70%);
    }

    .hero__label {
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--nn-brass);
      margin-bottom: 24px;
    }

    .hero h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 3.5rem;
      font-weight: 300;
      color: var(--nn-white);
      letter-spacing: -0.03em;
      margin-bottom: 20px;
      line-height: 1.1;
    }

    .hero__subtitle {
      font-size: 1.1rem;
      font-weight: 300;
      color: var(--nn-overcast);
      max-width: 520px;
      margin: 0 auto 40px;
      line-height: 1.7;
    }

    /* ========================================
       Divider
       ======================================== */

    .divider {
      width: 100%;
      height: 1px;
      margin: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(58, 63, 75, 0.4) 20%,
        rgba(58, 63, 75, 0.6) 50%,
        rgba(58, 63, 75, 0.4) 80%,
        transparent 100%
      );
    }

    /* ========================================
       Content Container
       ======================================== */

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 80px 40px;
    }

    .section-label {
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--nn-brass);
      margin-bottom: 12px;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--nn-white);
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }

    .section-description {
      color: var(--nn-fog);
      max-width: 600px;
      margin-bottom: 48px;
      line-height: 1.7;
    }

    /* ========================================
       Card Grid
       ======================================== */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .card {
      background: var(--nn-slate);
      border: 1px solid rgba(58, 63, 75, 0.5);
      border-radius: 2px;
      padding: 32px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      border-color: rgba(166, 139, 91, 0.3);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
    }

    .card__number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--nn-iron);
      margin-bottom: 20px;
      letter-spacing: 0.05em;
    }

    .card h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--nn-white);
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }

    .card p {
      color: var(--nn-fog);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* ========================================
       Feature Section
       ======================================== */

    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      padding: 80px 0;
    }

    .feature__content h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      font-weight: 600;
      color: var(--nn-white);
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }

    .feature__content p {
      color: var(--nn-fog);
      margin-bottom: 28px;
      line-height: 1.7;
    }

    .feature__visual {
      background: var(--nn-slate);
      border: 1px solid rgba(58, 63, 75, 0.4);
      border-radius: 2px;
      aspect-ratio: 4 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .feature__visual::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 30% 40%, rgba(30, 42, 53, 0.6) 0%, transparent 60%);
    }

    .feature__visual-text {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--nn-iron);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      position: relative;
      z-index: 1;
    }

    /* ========================================
       Buttons
       ======================================== */

    .button {
      display: inline-block;
      background: transparent;
      color: var(--nn-brass);
      border: 1px solid var(--nn-brass);
      border-radius: 2px;
      padding: 12px 28px;
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .button:hover {
      background: var(--nn-brass);
      color: var(--nn-midnight);
      box-shadow: 0 0 20px rgba(166, 139, 91, 0.15);
    }

    .button--ghost {
      border-color: var(--nn-iron);
      color: var(--nn-fog);
    }

    .button--ghost:hover {
      border-color: var(--nn-fog);
      color: var(--nn-silver);
      background: transparent;
    }

    /* ========================================
       Stats Row
       ======================================== */

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      padding: 60px 0;
    }

    .stat {
      text-align: center;
      padding: 24px 16px;
      border-right: 1px solid rgba(58, 63, 75, 0.3);
    }

    .stat:last-child {
      border-right: none;
    }

    .stat__number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.5rem;
      font-weight: 300;
      color: var(--nn-white);
      letter-spacing: -0.03em;
      margin-bottom: 8px;
    }

    .stat__label {
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nn-overcast);
    }

    /* ========================================
       Testimonial / Quote
       ======================================== */

    .quote {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      padding: 80px 40px;
    }

    .quote blockquote {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 300;
      color: var(--nn-silver);
      line-height: 1.6;
      letter-spacing: -0.01em;
      margin-bottom: 24px;
    }

    .quote cite {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--nn-overcast);
      font-style: normal;
      letter-spacing: 0.05em;
    }

    .quote cite strong {
      color: var(--nn-brass);
      font-weight: 500;
    }

    /* ========================================
       Footer
       ======================================== */

    .footer {
      background: rgba(11, 13, 17, 0.8);
      border-top: 1px solid rgba(58, 63, 75, 0.2);
      padding: 48px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer__brand {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--nn-overcast);
    }

    .footer__links {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    .footer__links a {
      font-size: 0.78rem;
      color: var(--nn-iron);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer__links a:hover {
      color: var(--nn-fog);
    }

    /* ========================================
       Responsive
       ======================================== */

    @media (max-width: 900px) {
      .card-grid {
        grid-template-columns: 1fr 1fr;
      }
      .feature {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .stats {
        grid-template-columns: repeat(2, 1fr);
      }
      .stat {
        border-right: none;
      }
    }

    @media (max-width: 600px) {
      .nav {
        padding: 0 20px;
      }
      .nav__links {
        gap: 16px;
      }
      .hero {
        padding: 80px 20px 60px;
      }
      .hero h1 {
        font-size: 2.2rem;
      }
      .container {
        padding: 48px 20px;
      }
      .card-grid {
        grid-template-columns: 1fr;
      }
      .stats {
        grid-template-columns: 1fr;
      }
      .footer {
        flex-direction: column;
        gap: 20px;
        text-align: center;
        padding: 32px 20px;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__brand">NORDVIK</a>
    <ul class="nav__links">
      <li><a href="#" class="active">Cases</a></li>
      <li><a href="#">Archive</a></li>
      <li><a href="#">Evidence</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <p class="hero__label">Investigative Design Studio</p>
    <h1>Where Silence Speaks</h1>
    <p class="hero__subtitle">
      We craft digital experiences shaped by restraint, precision,
      and the quiet intensity of the northern dark.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <a href="#" class="button">View Cases</a>
      <a href="#" class="button button--ghost">Our Method</a>
    </div>
  </section>

  <div class="divider"></div>

  <!-- Cards Section -->
  <div class="container">
    <p class="section-label">Services</p>
    <h2 class="section-title">Methodical Approach</h2>
    <p class="section-description">
      Every project begins with observation. We study the terrain,
      identify the patterns, and construct solutions with the precision
      of a well-ordered investigation.
    </p>

    <div class="card-grid">
      <div class="card">
        <p class="card__number">01</p>
        <h3>Strategic Analysis</h3>
        <p>Systematic examination of the problem space, mapping
           connections and uncovering the underlying structure.</p>
      </div>
      <div class="card">
        <p class="card__number">02</p>
        <h3>Interface Design</h3>
        <p>Clean, functional interfaces built on Scandinavian
           principles of clarity, honesty, and purposeful restraint.</p>
      </div>
      <div class="card">
        <p class="card__number">03</p>
        <h3>Development</h3>
        <p>Precise, efficient code architecture that mirrors the
           minimal elegance of the design it serves.</p>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- Feature Section -->
  <div class="container">
    <div class="feature">
      <div class="feature__content">
        <p class="section-label">Case Study</p>
        <h2>The Malmo Protocol</h2>
        <p>A complete digital transformation for a Nordic security
           consultancy. Dark interfaces, real-time data visualization,
           and an experience as focused as the work itself.</p>
        <a href="#" class="button">Read More</a>
      </div>
      <div class="feature__visual">
        <span class="feature__visual-text">Visual Placeholder</span>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- Stats -->
  <div class="container">
    <div class="stats">
      <div class="stat">
        <p class="stat__number">147</p>
        <p class="stat__label">Cases Closed</p>
      </div>
      <div class="stat">
        <p class="stat__number">12</p>
        <p class="stat__label">Active Investigations</p>
      </div>
      <div class="stat">
        <p class="stat__number">98%</p>
        <p class="stat__label">Resolution Rate</p>
      </div>
      <div class="stat">
        <p class="stat__number">6</p>
        <p class="stat__label">Nordic Offices</p>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- Quote -->
  <section class="quote">
    <blockquote>
      "The best design, like the best detective work, reveals
       the truth through what it chooses not to show."
    </blockquote>
    <cite><strong>Astrid Lindqvist</strong> &mdash; Creative Director, Nordvik</cite>
  </section>

  <div class="divider"></div>

  <!-- Footer -->
  <footer class="footer">
    <span class="footer__brand">Nordvik &copy; 2026</span>
    <ul class="footer__links">
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Colophon</a></li>
    </ul>
  </footer>
</body>
</html>
```

---

## Implementation Tips

- **Cool-toned near-blacks**: Use `#111318` or `#1B1E26` instead of pure black; the slight blue undertone creates depth and prevents the flat, lifeless quality of `#000000`
- **Atmospheric gradients**: Layer 2-3 radial gradients on the body using `rgba()` values at 3-8% opacity to create subtle environmental lighting without visible edges
- **Noise texture overlay**: Add a fixed-position SVG noise filter at 2-3% opacity over the entire page to simulate the grain of analogue film, reinforcing the crime-drama visual language
- **Font rendering**: Always include `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to ensure clean, thin letterforms on dark backgrounds
- **Brass accent discipline**: Limit brass/amber accent usage to no more than 10-15% of visible surface area; overuse transforms the moody atmosphere into a warm, inviting one, losing the Nordic Noir tension
- **Image desaturation**: Apply `filter: saturate(0.3) brightness(0.85) contrast(1.1)` to all photographic content to unify imagery with the muted palette
- **Slow transitions**: Set transition durations to 300-500ms with `ease` or `ease-in-out` timing functions; fast, snappy animations feel too energetic for this contemplative aesthetic
- **Border over shadow**: Prefer `1px solid rgba()` borders at 30-50% opacity over box-shadows for container definition; this produces the clean, architectural feel that distinguishes Nordic Noir from other dark-mode aesthetics
