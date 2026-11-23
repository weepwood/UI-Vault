# Forestcore Design Reference

## Overview

Forestcore is a nature-immersive aesthetic rooted in the dark, whimsical imagery of deep woodlands, misty trails, moss-covered stones, and the quiet magic of old-growth forests. Unlike its sunlit cousin Cottagecore, Forestcore embraces the moody, atmospheric side of the natural world -- dappled light filtering through dense canopy, rain-soaked fern fronds, mushroom clusters on decaying logs, and the still silence of fog rolling between ancient trees. Its visual language draws on Celtic, Nordic, and Siberian woodland traditions, evoking a life lived in a timber cabin tucked among towering pines rather than a cottage surrounded by flower gardens.

In web and digital design, Forestcore translates into deeply saturated earth-tone palettes, layered organic textures, and typography that balances rustic warmth with quiet sophistication. Backgrounds feel like bark, moss, or damp stone. Layouts breathe with the unhurried rhythm of a forest walk, favoring generous spacing, vertical flow, and naturalistic ornamentation over rigid geometric grids. Decorative elements lean on botanical motifs -- fern silhouettes, mushroom illustrations, lichen patterns, leaf veins, and wood-grain textures -- applied with restraint to preserve the aesthetic's contemplative, grounded atmosphere.

The emotional register of Forestcore design is meditative and slightly mysterious. It invites users to slow down, wander, and discover, much like stepping off a trail into an unfamiliar grove. Color contrasts are soft and tonal rather than sharp, shadows are warm rather than black, and interactive elements feel tactile and organic rather than mechanical. The result is a digital experience that feels alive, breathing, and rooted in the earth -- a deliberate counterpoint to the bright, flat, and frictionless interfaces that dominate mainstream design.

---

## Visual Characteristics

### Core Design Traits

- **Deep woodland palette**: Rich moss greens, bark browns, misty greys, and midnight blues form the foundation, punctuated by muted accent tones drawn from mushroom caps, autumn leaves, and forest wildflowers
- **Dappled light effects**: Soft, radial light overlays that simulate sunlight breaking through canopy gaps, creating warmth and focal depth
- **Organic textures everywhere**: Bark grain, moss surfaces, lichen patches, damp stone, and weathered wood used as backgrounds, borders, and decorative fills
- **Mushroom and fungi motifs**: Toadstool illustrations, bracket fungi shapes, spore patterns, and cap silhouettes as recurring ornamental elements
- **Misty atmospheric layers**: Translucent gradient overlays and soft blur effects that evoke morning fog drifting between trees
- **Fern and botanical line art**: Delicate fern fronds, leaf vein patterns, pine needle sprays, and vine tendrils used as dividers, borders, and section accents
- **Naturalistic photography treatment**: Images processed with muted saturation, warm shadow tinting, and subtle vignettes to maintain the forest atmosphere
- **Earthy, hand-crafted feel**: Design elements that suggest woodblock printing, pressed botanicals, field-journal sketches, and naturalist illustration rather than digital precision
- **Layered depth**: Multiple translucent layers of texture, gradient, and pattern stacked to create a sense of looking through undergrowth into deeper forest
- **Warm low-contrast typography**: Text rendered in soft earth tones against textured backgrounds, avoiding harsh black-on-white contrast
- **Cabin and shelter references**: UI containers styled to evoke weathered timber, rough-hewn planks, or stone hearth surfaces

### Design Principles

- **Atmosphere over clarity**: Prioritize mood and immersion; let textures and tonal richness communicate feeling before information
- **Organic asymmetry**: Embrace slightly irregular spacing, rounded but imperfect shapes, and layouts that feel grown rather than constructed
- **Depth through layering**: Build visual depth with stacked textures, translucent overlays, and subtle parallax effects rather than drop shadows alone
- **Restraint in color**: Keep the palette narrow and tonal; let the forest palette speak through subtle variation rather than competing saturated hues
- **Nature as structure**: Use botanical forms -- branching paths, root networks, canopy layers -- as metaphors for navigation and information hierarchy
- **Quietness and slowness**: Design for contemplation; avoid flashy animations, aggressive CTAs, or jarring transitions
- **Material honesty**: Textures should reference real natural materials (wood, stone, moss, linen) rather than synthetic or metallic surfaces
- **Seasonal awareness**: Allow the design to suggest a specific forest moment -- autumn decay, spring emergence, winter stillness, or summer density

---

## Color Palette

The Forestcore palette is drawn directly from the woodland floor, canopy, and sky. Deep greens anchor the design, supported by warm browns, cool stone greys, and misty blues. Accent colors arrive sparingly from mushroom reds, lichen yellows, and wildflower purples -- always muted, never synthetic.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Deep Canopy | `#1B3A2A` | Primary dark background, dark sections |
| Moss Green | `#4A6741` | Primary accent, headings, key elements |
| Fern Frond | `#6B8E5A` | Secondary accent, hover states, highlights |
| Lichen Sage | `#8B9E7E` | Tertiary accent, muted UI elements |
| Bark Brown | `#5C4033` | Dark panels, navigation backgrounds |
| Damp Earth | `#3B2F2F` | Primary text color on light backgrounds |
| Mushroom Tan | `#C4A882` | Card surfaces, warm neutral backgrounds |
| Fallen Leaf | `#A0764A` | Call-to-action, warm interactive accent |
| Fog Grey | `#B8BAB0` | Muted text, subtle borders, disabled states |
| Morning Mist | `#E8E4DC` | Light background, surface base |
| Birch White | `#F2EDE6` | Lightest background, card interiors |
| Toadstool Red | `#8B4A3A` | Sparse warning or highlight accent |
| Pine Needle | `#2E4B3A` | Dark accent, section separators |
| Wildflower Violet | `#6B5B7B` | Rare tertiary accent, decorative elements |
| Dappled Gold | `#C9A84C` | Sunlight accent, selected states, badges |

### CSS Custom Properties

```css
:root {
  --fc-deep-canopy: #1B3A2A;
  --fc-moss: #4A6741;
  --fc-fern: #6B8E5A;
  --fc-lichen: #8B9E7E;
  --fc-bark: #5C4033;
  --fc-earth: #3B2F2F;
  --fc-mushroom: #C4A882;
  --fc-fallen-leaf: #A0764A;
  --fc-fog: #B8BAB0;
  --fc-mist: #E8E4DC;
  --fc-birch: #F2EDE6;
  --fc-toadstool: #8B4A3A;
  --fc-pine: #2E4B3A;
  --fc-wildflower: #6B5B7B;
  --fc-dappled-gold: #C9A84C;
}
```

---

## Typography

Forestcore typography balances rustic warmth with readable elegance. Headings lean toward organic serif faces with slight irregularity or hand-drawn quality, while body text uses sturdy, warm serifs that feel like reading from a naturalist's journal. Decorative text may invoke handwritten field notes or carved woodland signage.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Cormorant Garamond** | 400, 500, 600, 700 | Display headings; elegant old-style serif with organic curves | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Libre Baskerville** | 400, 700 | Body text; warm, sturdy serif with excellent readability | [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) |
| **EB Garamond** | 400, 500, 600, 700 | Alternative body/heading; classical humanist serif | [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) |
| **Caveat** | 400, 500, 600, 700 | Decorative labels, annotations, handwritten accents | [Caveat](https://fonts.google.com/specimen/Caveat) |
| **Nunito** | 300, 400, 600 | UI labels, navigation, small text; soft rounded sans-serif | [Nunito](https://fonts.google.com/specimen/Nunito) |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Cormorant Garamond 600 | Libre Baskerville 400 | Elegant naturalist journal |
| EB Garamond 600 | Nunito 400 | Refined woodland with modern clarity |
| Cormorant Garamond 500 | EB Garamond 400 | Classical botanical reference |
| Caveat 700 | Libre Baskerville 400 | Hand-lettered field guide |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&family=Caveat:wght@400;600&display=swap');

body {
  font-family: 'Libre Baskerville', 'Georgia', serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--fc-earth);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', 'Garamond', serif;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--fc-moss);
}

.handwritten {
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  color: var(--fc-bark);
}
```

---

## Layout Principles

- **Single-column vertical flow**: Favor a natural, downward reading path that mirrors walking deeper into a forest; avoid complex multi-column layouts
- **Generous breathing room**: Use 40-60px padding inside content areas and 32-48px gaps between sections; the design should feel spacious like a forest clearing
- **Max-width containment**: Keep content readable at 740-900px max-width, centered on the page, creating a sense of a path through wider surroundings
- **Layered background depth**: Stack multiple subtle texture layers (bark grain, moss pattern, fog gradient) behind content to create a sense of looking through undergrowth
- **Organic section transitions**: Use botanical dividers, fern-frond SVG separators, or gradient fades between sections rather than hard horizontal rules
- **Rounded organic containers**: Cards and content blocks should use border-radius values of 10-18px or slightly irregular radii for a hand-carved feel
- **Dark-to-light progression**: Consider structuring the page from a dark canopy header through progressively lighter sections, ending in a misty, airy footer
- **Vertical rhythm through nature**: Let spacing follow a natural rhythm -- tighter groupings for related items (like mushroom clusters), wider gaps for section breaks (like clearings)
- **Image integration**: Photographs and illustrations should bleed into their containers or use soft, feathered edges rather than sharp rectangular crops
- **Responsive stacking**: On mobile, gracefully collapse to single-column, preserve textures at reduced opacity, and maintain generous touch targets styled as natural elements
- **Scroll-driven atmosphere**: Consider subtle parallax or opacity shifts on scroll that mimic the experience of light changing as one moves through a forest

---

## CSS / Design Techniques

### Forestcore Card

```css
.forest-card {
  background: var(--fc-birch);
  border: 1px solid var(--fc-lichen);
  border-radius: 12px 14px 12px 16px;
  padding: 32px;
  box-shadow:
    0 2px 8px rgba(59, 47, 47, 0.10),
    0 0 0 1px rgba(74, 103, 65, 0.08);
  position: relative;
  overflow: hidden;
}

.forest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    var(--fc-moss),
    var(--fc-fern),
    var(--fc-lichen));
  border-radius: 12px 14px 0 0;
}

.forest-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle at bottom right,
    rgba(107, 142, 90, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Forestcore Button

```css
.forest-button {
  background: var(--fc-moss);
  color: var(--fc-birch);
  border: 1px solid var(--fc-pine);
  border-radius: 8px;
  padding: 12px 28px;
  font-family: 'Libre Baskerville', serif;
  font-size: 0.95rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(46, 75, 58, 0.20);
  position: relative;
  overflow: hidden;
}

.forest-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(242, 237, 230, 0.08),
    transparent
  );
  transition: left 0.5s ease;
}

.forest-button:hover {
  background: var(--fc-pine);
  box-shadow: 0 4px 12px rgba(46, 75, 58, 0.30);
  transform: translateY(-1px);
}

.forest-button:hover::before {
  left: 100%;
}
```

### Woodland Navigation

```css
.forest-nav {
  background: var(--fc-bark);
  border-bottom: 2px solid var(--fc-pine);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.forest-nav::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    180deg,
    rgba(59, 47, 47, 0.15),
    transparent
  );
}

.forest-nav a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--fc-mist);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.forest-nav a:hover {
  color: var(--fc-dappled-gold);
  background: rgba(74, 103, 65, 0.15);
}

.forest-nav .brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--fc-fern);
  letter-spacing: 0.04em;
}
```

### Hero Section

```css
.forest-hero {
  background: var(--fc-deep-canopy);
  color: var(--fc-mist);
  padding: 100px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.forest-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 25% 80%, rgba(107, 142, 90, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 20%, rgba(201, 168, 76, 0.08) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 50%, rgba(139, 74, 58, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.forest-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(27, 58, 42, 0.4)
  );
  pointer-events: none;
}

.forest-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--fc-dappled-gold);
  position: relative;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.forest-hero p {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.15rem;
  color: rgba(232, 228, 220, 0.80);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
}
```

### Moss Texture Background

```css
.moss-bg {
  background-color: var(--fc-mist);
  background-image:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(74, 103, 65, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 30%,
      rgba(74, 103, 65, 0.04) 0%,
      transparent 40%
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(59, 47, 47, 0.015) 3px,
      rgba(59, 47, 47, 0.015) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 5px,
      rgba(74, 103, 65, 0.01) 5px,
      rgba(74, 103, 65, 0.01) 6px
    );
}
```

### Fern Divider

```css
.fern-divider {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 48px 0;
  padding: 0 24px;
}

.fern-divider::before,
.fern-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--fc-lichen),
    transparent
  );
}

.fern-divider span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--fc-moss);
  letter-spacing: 0.15em;
}
```

### Dappled Light Overlay

```css
.dappled-light {
  position: relative;
}

.dappled-light::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle 60px at 15% 25%, rgba(201, 168, 76, 0.10), transparent),
    radial-gradient(circle 40px at 45% 15%, rgba(201, 168, 76, 0.07), transparent),
    radial-gradient(circle 80px at 70% 60%, rgba(201, 168, 76, 0.08), transparent),
    radial-gradient(circle 35px at 85% 35%, rgba(201, 168, 76, 0.06), transparent),
    radial-gradient(circle 50px at 30% 75%, rgba(107, 142, 90, 0.06), transparent);
  pointer-events: none;
  z-index: 1;
}
```

### Footer with Root Pattern

```css
.forest-footer {
  background: var(--fc-deep-canopy);
  color: var(--fc-fog);
  padding: 48px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.forest-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--fc-pine),
    var(--fc-moss),
    var(--fc-fern),
    var(--fc-moss),
    var(--fc-pine)
  );
}

.forest-footer a {
  color: var(--fc-lichen);
  text-decoration: none;
  transition: color 0.3s ease;
}

.forest-footer a:hover {
  color: var(--fc-dappled-gold);
}

.forest-footer .footer-note {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  color: var(--fc-fog);
  margin-top: 16px;
  opacity: 0.7;
}
```

---

## Design Do's and Don'ts

### Do's

- Use deep, muted earth tones drawn from real forest environments -- moss, bark, stone, fog, and mushroom
- Layer organic textures (wood grain, moss patterns, bark surfaces) behind content for tactile depth and atmosphere
- Apply warm-tinted shadows using brown or green rgba values instead of pure black
- Incorporate botanical motifs -- fern silhouettes, mushroom illustrations, leaf veins, pine needles -- as dividers and accents
- Use serif or humanist typefaces that feel rooted and organic rather than clinical
- Create dappled-light effects with soft radial gradients to simulate sunlight through canopy
- Allow generous whitespace (or rather "greenspace") between sections to evoke forest clearings
- Treat photography with muted saturation, warm shadows, and soft vignettes to maintain palette cohesion

### Don'ts

- Avoid bright, saturated colors, neon accents, or high-contrast corporate palettes -- Forestcore is muted and tonal
- Do not use pure white (`#FFFFFF`) or pure black (`#000000`) backgrounds; always use tinted earth tones
- Avoid sharp geometric shapes, hard grid lines, or pixel-perfect mechanical precision
- Do not use glossy gradients, metallic finishes, or chrome-like surfaces that feel synthetic
- Avoid fast, flashy animations or aggressive transitions; movement should be slow and organic like wind through branches
- Do not overcrowd layouts with dense information grids; Forestcore needs room to breathe like a forest floor
- Avoid sans-serif fonts exclusively; the aesthetic requires warmth and character that serifs and handwritten faces provide
- Do not mix with neon-lit, cyberpunk, or high-tech aesthetics -- Forestcore is fundamentally analog and natural

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Cottagecore** | Close sibling sharing nature-love and handmade warmth; Cottagecore is sunlit meadows and gardens while Forestcore is shaded woodland and deep forest |
| **Goblincore** | Overlapping woodland palette and mushroom motifs; Goblincore is earthier, messier, and more about collecting curiosities from the forest floor |
| **Dark Academia** | Shares muted earth tones and contemplative atmosphere; Dark Academia is scholarly and architectural while Forestcore is wild and botanical |
| **Earth Tones** | Forestcore is a thematic specialization of Earth Tones, applying the broader palette to a specific woodland narrative |
| **Japandi** | Both value natural materials, restraint, and quiet atmosphere, but Japandi is minimal and architectural while Forestcore is textured and organic |
| **Arts and Crafts** | Shares reverence for natural materials and handmade quality; Arts and Crafts adds William Morris-era ornamental structure |
| **Frutiger Eco** | Both celebrate nature imagery, but Frutiger Eco is glossy, digital-optimistic, and corporate-friendly while Forestcore is raw and atmospheric |
| **Hygge** | Both pursue cozy comfort and warmth, but Hygge is Scandinavian domestic interior while Forestcore is outdoor wilderness |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forestcore Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&family=Caveat:wght@400;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --fc-deep-canopy: #1B3A2A;
      --fc-moss: #4A6741;
      --fc-fern: #6B8E5A;
      --fc-lichen: #8B9E7E;
      --fc-bark: #5C4033;
      --fc-earth: #3B2F2F;
      --fc-mushroom: #C4A882;
      --fc-fallen-leaf: #A0764A;
      --fc-fog: #B8BAB0;
      --fc-mist: #E8E4DC;
      --fc-birch: #F2EDE6;
      --fc-toadstool: #8B4A3A;
      --fc-pine: #2E4B3A;
      --fc-wildflower: #6B5B7B;
      --fc-dappled-gold: #C9A84C;
    }

    body {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--fc-earth);
      background-color: var(--fc-mist);
      min-height: 100vh;
    }

    /* ── Navigation ── */

    .nav {
      background: var(--fc-bark);
      border-bottom: 2px solid var(--fc-pine);
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(180deg, rgba(59, 47, 47, 0.15), transparent);
    }

    .nav .brand {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--fc-fern);
      text-decoration: none;
      letter-spacing: 0.04em;
    }

    .nav-links {
      display: flex;
      gap: 8px;
    }

    .nav-links a {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--fc-mist);
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--fc-dappled-gold);
      background: rgba(74, 103, 65, 0.15);
    }

    /* ── Hero ── */

    .hero {
      background: var(--fc-deep-canopy);
      color: var(--fc-mist);
      padding: 100px 40px;
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
      background:
        radial-gradient(ellipse at 25% 80%, rgba(107, 142, 90, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 20%, rgba(201, 168, 76, 0.08) 0%, transparent 45%),
        radial-gradient(ellipse at 50% 50%, rgba(139, 74, 58, 0.05) 0%, transparent 60%);
      pointer-events: none;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(180deg, transparent, rgba(27, 58, 42, 0.4));
      pointer-events: none;
    }

    .hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3.2rem;
      font-weight: 600;
      color: var(--fc-dappled-gold);
      position: relative;
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }

    .hero .subtitle {
      font-family: 'Caveat', cursive;
      font-size: 1.5rem;
      color: rgba(139, 158, 126, 0.9);
      position: relative;
      margin-bottom: 12px;
    }

    .hero p {
      font-size: 1.1rem;
      color: rgba(232, 228, 220, 0.80);
      max-width: 580px;
      margin: 0 auto;
      line-height: 1.8;
      position: relative;
    }

    .hero .cta {
      display: inline-block;
      margin-top: 32px;
      background: var(--fc-moss);
      color: var(--fc-birch);
      border: 1px solid var(--fc-pine);
      border-radius: 8px;
      padding: 14px 36px;
      font-family: 'Libre Baskerville', serif;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(46, 75, 58, 0.25);
      position: relative;
    }

    .hero .cta:hover {
      background: var(--fc-pine);
      box-shadow: 0 4px 14px rgba(46, 75, 58, 0.35);
      transform: translateY(-2px);
    }

    /* ── Section Divider ── */

    .divider {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 0;
      padding: 48px 24px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--fc-lichen), transparent);
    }

    .divider span {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--fc-moss);
      letter-spacing: 0.15em;
    }

    /* ── Content Sections ── */

    .section {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 32px 60px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--fc-moss);
      margin-bottom: 8px;
    }

    .section-header p {
      font-size: 1rem;
      color: var(--fc-bark);
      max-width: 500px;
      margin: 0 auto;
      opacity: 0.8;
    }

    /* ── Card Grid ── */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 28px;
    }

    .card {
      background: var(--fc-birch);
      border: 1px solid var(--fc-lichen);
      border-radius: 12px 14px 12px 16px;
      padding: 32px;
      box-shadow:
        0 2px 8px rgba(59, 47, 47, 0.10),
        0 0 0 1px rgba(74, 103, 65, 0.08);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--fc-moss), var(--fc-fern), var(--fc-lichen));
      border-radius: 12px 14px 0 0;
    }

    .card::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle at bottom right, rgba(107, 142, 90, 0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow:
        0 6px 20px rgba(59, 47, 47, 0.12),
        0 0 0 1px rgba(74, 103, 65, 0.12);
    }

    .card .tag {
      display: inline-block;
      font-family: 'Caveat', cursive;
      font-size: 0.9rem;
      color: var(--fc-bark);
      background: var(--fc-mushroom);
      padding: 2px 12px;
      border-radius: 4px;
      margin-bottom: 12px;
      opacity: 0.85;
    }

    .card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--fc-moss);
      margin-bottom: 10px;
    }

    .card p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--fc-earth);
    }

    .card .card-link {
      display: inline-block;
      margin-top: 16px;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--fc-fallen-leaf);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s ease;
    }

    .card .card-link:hover {
      border-bottom-color: var(--fc-fallen-leaf);
    }

    /* ── Feature Row ── */

    .feature-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      margin-bottom: 48px;
    }

    .feature-image {
      background: var(--fc-deep-canopy);
      border-radius: 12px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .feature-image::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        radial-gradient(circle 50px at 30% 40%, rgba(201, 168, 76, 0.10), transparent),
        radial-gradient(circle 35px at 65% 70%, rgba(201, 168, 76, 0.07), transparent);
      pointer-events: none;
    }

    .feature-image .placeholder-text {
      font-family: 'Caveat', cursive;
      font-size: 1.2rem;
      color: var(--fc-lichen);
      opacity: 0.6;
      position: relative;
    }

    .feature-text h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--fc-moss);
      margin-bottom: 12px;
    }

    .feature-text p {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--fc-earth);
      margin-bottom: 16px;
    }

    /* ── Testimonial / Quote ── */

    .quote-block {
      background: var(--fc-deep-canopy);
      color: var(--fc-mist);
      border-radius: 12px;
      padding: 48px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
      margin: 40px 0;
    }

    .quote-block::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        radial-gradient(ellipse at 20% 80%, rgba(107, 142, 90, 0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.06) 0%, transparent 40%);
      pointer-events: none;
    }

    .quote-block blockquote {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
      font-weight: 500;
      font-style: italic;
      color: var(--fc-mushroom);
      max-width: 600px;
      margin: 0 auto 16px;
      position: relative;
      line-height: 1.6;
    }

    .quote-block cite {
      font-family: 'Caveat', cursive;
      font-size: 1.1rem;
      color: var(--fc-lichen);
      font-style: normal;
      position: relative;
    }

    /* ── Newsletter / CTA Section ── */

    .cta-section {
      background: var(--fc-mushroom);
      border-radius: 12px;
      padding: 48px 40px;
      text-align: center;
      margin: 40px 0;
      border: 1px solid rgba(92, 64, 51, 0.15);
    }

    .cta-section h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--fc-deep-canopy);
      margin-bottom: 8px;
    }

    .cta-section p {
      color: var(--fc-bark);
      margin-bottom: 24px;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-section .input-group {
      display: flex;
      gap: 12px;
      max-width: 420px;
      margin: 0 auto;
    }

    .cta-section input[type="email"] {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid var(--fc-lichen);
      border-radius: 8px;
      background: var(--fc-birch);
      font-family: 'Libre Baskerville', serif;
      font-size: 0.9rem;
      color: var(--fc-earth);
      outline: none;
      transition: border-color 0.3s ease;
    }

    .cta-section input[type="email"]:focus {
      border-color: var(--fc-moss);
    }

    .cta-section input[type="email"]::placeholder {
      color: var(--fc-fog);
    }

    .cta-section button {
      background: var(--fc-moss);
      color: var(--fc-birch);
      border: 1px solid var(--fc-pine);
      border-radius: 8px;
      padding: 12px 24px;
      font-family: 'Libre Baskerville', serif;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 6px rgba(46, 75, 58, 0.20);
    }

    .cta-section button:hover {
      background: var(--fc-pine);
      box-shadow: 0 4px 12px rgba(46, 75, 58, 0.30);
    }

    /* ── Footer ── */

    .footer {
      background: var(--fc-deep-canopy);
      color: var(--fc-fog);
      padding: 48px 32px;
      text-align: center;
      position: relative;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg,
        var(--fc-pine),
        var(--fc-moss),
        var(--fc-fern),
        var(--fc-moss),
        var(--fc-pine));
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 20px;
    }

    .footer-links a {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1rem;
      color: var(--fc-lichen);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--fc-dappled-gold);
    }

    .footer .footer-note {
      font-family: 'Caveat', cursive;
      font-size: 1.1rem;
      color: var(--fc-fog);
      opacity: 0.6;
      margin-top: 8px;
    }

    /* ── Responsive ── */

    @media (max-width: 768px) {
      .hero {
        padding: 64px 24px;
      }

      .hero h1 {
        font-size: 2.4rem;
      }

      .feature-row {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .feature-image {
        height: 200px;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .nav {
        flex-direction: column;
        gap: 12px;
        padding: 12px 24px;
      }

      .cta-section .input-group {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="brand">Forestcore</a>
    <div class="nav-links">
      <a href="#">Trails</a>
      <a href="#">Flora</a>
      <a href="#">Field Notes</a>
      <a href="#">Gallery</a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <h1>Into the Deep Woods</h1>
    <p class="subtitle">where moss meets morning light</p>
    <p>Wander through ancient groves where ferns unfurl beneath
       cathedral canopies, mushrooms cluster on fallen logs, and
       the air carries the quiet scent of damp earth and pine.</p>
    <a href="#" class="cta">Begin the Trail</a>
  </header>

  <!-- Divider -->
  <div class="divider">
    <span>&#x2E3B;</span>
  </div>

  <!-- Card Section -->
  <section class="section">
    <div class="section-header">
      <h2>Woodland Discoveries</h2>
      <p>Each path through the forest reveals something unexpected,
         something quietly magnificent.</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <span class="tag">canopy</span>
        <h3>Dappled Glades</h3>
        <p>Sunlight filters through layered leaves, casting shifting
           patterns of gold and green across the mossy ground below.
           Each step changes the light.</p>
        <a href="#" class="card-link">Explore &rarr;</a>
      </div>
      <div class="card">
        <span class="tag">floor</span>
        <h3>Mushroom Circles</h3>
        <p>Hidden beneath bracken and bark, fairy rings emerge after
           autumn rain -- clusters of toadstool caps in amber, cream,
           and deep umber.</p>
        <a href="#" class="card-link">Explore &rarr;</a>
      </div>
      <div class="card">
        <span class="tag">stream</span>
        <h3>Mossy Stones</h3>
        <p>Where the brook bends, stones wear thick cloaks of emerald
           moss, and the water moves with a murmur that sounds older
           than the trees.</p>
        <a href="#" class="card-link">Explore &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="divider">
    <span>&#x2E3B;</span>
  </div>

  <!-- Feature Row -->
  <section class="section">
    <div class="feature-row">
      <div class="feature-image">
        <span class="placeholder-text">[ forest photograph ]</span>
      </div>
      <div class="feature-text">
        <h3>The Understory</h3>
        <p>Beneath the canopy lies a world of its own -- layers of fern,
           wood sorrel, and creeping ivy that thrive in filtered light.
           The understory is where the forest's quiet details live: a
           beetle navigating bark ridges, lichen painting silver on
           stone, spider silk catching dew.</p>
        <a href="#" class="cta" style="font-size: 0.9rem; padding: 10px 24px;">Read More</a>
      </div>
    </div>
  </section>

  <!-- Quote -->
  <section class="section">
    <div class="quote-block">
      <blockquote>"The clearest way into the universe is through
        a forest wilderness."</blockquote>
      <cite>-- John Muir</cite>
    </div>
  </section>

  <!-- CTA / Newsletter -->
  <section class="section">
    <div class="cta-section">
      <h3>Join the Trail</h3>
      <p>Receive woodland notes, seasonal observations, and
         quiet reflections from the forest floor.</p>
      <div class="input-group">
        <input type="email" placeholder="your@email.com">
        <button type="button">Subscribe</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-links">
      <a href="#">Trails</a>
      <a href="#">Flora</a>
      <a href="#">Field Notes</a>
      <a href="#">About</a>
    </div>
    <p style="font-size: 0.9rem;">&copy; 2026 Forestcore. All paths lead deeper.</p>
    <p class="footer-note">designed with moss, mushrooms, and morning mist</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Warm shadow tinting**: Always tint box-shadows with brown or green rgba values (`rgba(59, 47, 47, 0.10)` or `rgba(46, 75, 58, 0.20)`) rather than pure black; pure black shadows feel cold and synthetic against earth-tone palettes
- **Dappled light with radial gradients**: Layer multiple small `radial-gradient` circles with low-opacity gold or green tones to simulate sunlight filtering through leaves; vary the sizes and positions for naturalistic randomness
- **Avoid pure white and black**: Use `var(--fc-birch)` (#F2EDE6) instead of `#FFFFFF` and `var(--fc-earth)` (#3B2F2F) instead of `#000000` to keep the entire page within the forest tonal range
- **Texture through CSS, not images**: Use layered `repeating-linear-gradient` and `radial-gradient` patterns to create moss, bark, and linen textures without loading heavy image files
- **Muted photography**: Apply CSS filters to photographs (`filter: saturate(0.85) sepia(0.08) contrast(0.95)`) to harmonize them with the Forestcore palette regardless of original color grading
- **Organic border-radius values**: Use slightly different values per corner (e.g., `border-radius: 12px 14px 12px 16px`) to suggest hand-carved or natural shapes rather than mechanical perfection
- **Progressive depth on scroll**: Use `backdrop-filter: blur()` or decreasing background opacity on scroll to create the sensation of moving from dense forest into clearings
- **SVG botanical elements**: Inline single-color SVG fern fronds, leaf silhouettes, or mushroom outlines for dividers and accents; keep them monochrome and low-opacity so they enhance without competing with content
