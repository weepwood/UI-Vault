# Witchcore Design Reference

## Overview

Witchcore is a mystical, nature-rooted aesthetic influenced by modern witchcraft, herbalism, occultism, and the reclamation of feminine power. It draws from the visual language of apothecary shops, moonlit forests, dried-herb bundles, and candlelit altars to create an atmosphere steeped in ancient wisdom and quiet enchantment. Unlike purely gothic aesthetics that lean into horror, Witchcore centers on connection to the natural world -- moon phases, crystals, botanical remedies, and the cyclical rhythms of the earth -- wrapping them in a dark, moody visual palette of deep purples, forest greens, and shadowed blacks.

In web and digital design, Witchcore translates into rich dark backgrounds, aged parchment textures, botanical line-art illustrations, celestial iconography (moons, stars, planetary glyphs), and typography that references medieval manuscripts, Victorian apothecary labels, and hand-inked grimoires. The aesthetic favors layered depth -- think candle-glow gradients bleeding through darkness, translucent smoke overlays, and subtle grain textures that evoke old paper or dried leaves. Gold and copper metallic accents punctuate the dark palette, functioning as alchemical highlights that suggest transformation and hidden knowledge.

The mood Witchcore pursues is one of intimate mystery: the quiet corner of a herbalist's workshop, a moonlit clearing ringed with standing stones, the interior of a cottage where dried lavender hangs from exposed beams and crystals catch the last light of dusk. It is empowering rather than frightening, contemplative rather than chaotic. Layouts tend toward centered, vertical compositions with generous negative space that lets the darkness breathe, interrupted by carefully placed botanical ornaments, celestial dividers, and softly glowing call-to-action elements. Every design decision should feel intentional and slightly arcane, as though the interface itself holds secrets waiting to be discovered.

---

## Visual Characteristics

### Core Design Traits

- **Dark, moody color foundation**: Rich blacks, deep purples, and forest greens form the base palette, evoking nighttime forests and shadowed interiors
- **Celestial iconography**: Moon phases, star constellations, planetary symbols, and zodiac glyphs appear as decorative motifs, dividers, and section markers
- **Botanical line art**: Hand-drawn illustrations of dried herbs, mushrooms, ferns, and wildflowers serve as primary decorative elements
- **Apothecary-style labeling**: Vintage label frames, ornate borders, and specimen-catalog typography give content areas an old-world medicinal feel
- **Metallic accents**: Gold, copper, and antique brass tones used sparingly for borders, icons, and highlights to suggest alchemy and transformation
- **Candle-glow lighting effects**: Warm radial gradients and soft glows simulate candlelight, creating focal points against dark backgrounds
- **Aged texture overlays**: Paper grain, parchment creases, subtle noise, and smoke wisps add tactile depth to flat digital surfaces
- **Crystal and gemstone imagery**: Geometric crystal shapes, faceted forms, and prismatic light refractions used as accents and decorative fills
- **Occult geometry**: Pentagrams, triple-moon symbols, sacred geometry patterns, and sigil-like forms appear as subtle background watermarks
- **Velvet and fabric textures**: Deep-pile textile patterns suggested through gradients and shadow techniques convey richness and warmth
- **Potion bottle and vessel shapes**: Rounded, flask-like container shapes for cards, modals, and featured content areas
- **Smoke and mist effects**: Translucent layered gradients that drift across sections, creating an atmosphere of mystery

### Design Principles

- **Mystery over shock**: Create intrigue and curiosity, not horror; the mood is contemplative enchantment, not fear
- **Darkness as canvas**: Use deep dark backgrounds as active design space, not mere absence; let elements emerge from shadow
- **Nature as sacred language**: Every decorative element should reference the natural world -- plants, minerals, celestial bodies, elements
- **Intentional asymmetry**: Place elements as though arranged on an altar -- deliberate, meaningful, slightly off-center
- **Layered depth**: Build visual hierarchy through overlapping translucent layers, glows, and shadow to create the feeling of peering into depths
- **Warm light in cold dark**: Contrast the cool dark palette with warm golden glows and amber highlights for emotional warmth
- **Tactile authenticity**: Textures should feel real -- aged paper, dried botanicals, melted wax, polished stone
- **Symbolic resonance**: Design choices should carry meaning; the moon for cycles, herbs for healing, crystals for clarity

---

## Color Palette

The Witchcore palette is built on a foundation of darkness punctuated by the muted, earthy tones of a forest apothecary. Deep blacks and purples establish the base atmosphere, while mossy greens and herbal sage tones connect to the natural world. Metallic golds and coppers serve as alchemical highlights, and muted oranges and burgundies add warmth reminiscent of candlelight and dried autumn herbs.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Midnight Void | `#0D0D12` | Primary background, deepest dark |
| Cauldron Black | `#1A1A24` | Card backgrounds, elevated surfaces |
| Nightshade Purple | `#2D1B3D` | Secondary background, section contrast |
| Belladonna | `#6B3A6B` | Primary accent, interactive elements |
| Wisteria Haze | `#9B7BB8` | Lighter purple accent, hover states |
| Dried Sage | `#7A8B6F` | Nature accent, secondary interactive |
| Forest Moss | `#4A5E3A` | Dark green accent, borders |
| Apothecary Gold | `#C9A84C` | Metallic highlight, emphasis, icons |
| Tarnished Copper | `#A0714F` | Warm metallic, secondary highlight |
| Parchment Glow | `#E8DCC8` | Primary text on dark backgrounds |
| Bone White | `#D4C8B0` | Secondary text, muted labels |
| Candle Flame | `#D4883A` | Warm glow accents, notifications |
| Dried Blood | `#6E2C2C` | Error states, danger, deep warmth |
| Moonstone Silver | `#B8BCC8` | Tertiary text, subtle borders |
| Absinthe Green | `#8FB87B` | Success states, herbal highlights |

### CSS Custom Properties

```css
:root {
  --wc-void: #0D0D12;
  --wc-cauldron: #1A1A24;
  --wc-nightshade: #2D1B3D;
  --wc-belladonna: #6B3A6B;
  --wc-wisteria: #9B7BB8;
  --wc-sage: #7A8B6F;
  --wc-moss: #4A5E3A;
  --wc-gold: #C9A84C;
  --wc-copper: #A0714F;
  --wc-parchment: #E8DCC8;
  --wc-bone: #D4C8B0;
  --wc-flame: #D4883A;
  --wc-blood: #6E2C2C;
  --wc-moonstone: #B8BCC8;
  --wc-absinthe: #8FB87B;
}
```

---

## Typography

Witchcore typography draws from medieval manuscripts, Victorian apothecary labels, and hand-inked grimoires. Heading fonts should feel archaic, ornate, or hand-lettered, while body text remains readable with a warm serif character. Decorative text can lean into blackletter or script styles for labels, quotes, and atmospheric detail.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Cinzel** | 400, 500, 600, 700 | Primary headings; inscriptional Roman capitals with an ancient, carved quality | [Cinzel](https://fonts.google.com/specimen/Cinzel) |
| **Cinzel Decorative** | 400, 700 | Display headings, hero titles; ornamental variant for maximum impact | [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) |
| **EB Garamond** | 400, 500, 600, 700 | Body text; elegant old-style serif with excellent readability | [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) |
| **Libre Baskerville** | 400, 700 | Alternate body text; warm, sturdy serif with classic proportions | [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) |
| **MedievalSharp** | 400 | Decorative labels, section markers; blackletter-influenced uncial | [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp) |
| **Cormorant SC** | 300, 400, 500, 600, 700 | Small caps for labels, navigation, meta text; refined and antiquarian | [Cormorant SC](https://fonts.google.com/specimen/Cormorant+SC) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Cinzel Decorative 700 | EB Garamond 400 | Ancient grimoire, inscribed and scholarly |
| Cinzel 600 | Libre Baskerville 400 | Carved stone meets classic bookwork |
| MedievalSharp 400 | EB Garamond 400 | Medieval manuscript, herbalist's journal |
| Cormorant SC 500 | EB Garamond 400 | Refined apothecary catalog, specimen labels |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=EB+Garamond:wght@400;500;600&family=Cormorant+SC:wght@400;500;600&display=swap');

body {
  font-family: 'EB Garamond', 'Georgia', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #E8DCC8;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Cinzel', 'Times New Roman', serif;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #C9A84C;
}

h1 {
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-weight: 700;
}

.label, .meta {
  font-family: 'Cormorant SC', serif;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #B8BCC8;
}
```

---

## Layout Principles

- **Centered vertical flow**: Use single-column or narrow two-column layouts centered on the page; content should unfold like a scroll or grimoire page
- **Deep dark negative space**: Embrace generous dark margins and padding (48-80px between sections); the darkness is part of the design, not wasted space
- **Max-width containment**: Keep content between 720-960px wide to maintain an intimate, focused reading experience
- **Altar-like composition**: Arrange key elements symmetrically or with intentional asymmetry, as if placed on a ritual altar -- centered focal points with flanking accents
- **Layered card depth**: Elevate content cards above the background using subtle box-shadows and slightly lighter surface colors to create depth without harsh edges
- **Celestial dividers**: Use moon-phase sequences, star patterns, or botanical line art as section separators instead of plain horizontal rules
- **Vertical rhythm with breathing room**: Maintain consistent spacing between typographic elements; let paragraphs and headings breathe with 1.5-2x normal margins
- **Sticky navigation with transparency**: Navigation bars should use semi-transparent dark backgrounds with backdrop blur, appearing to float above the content
- **Grid for collections**: When displaying multiple items (herbs, crystals, spells), use a responsive grid with consistent card sizing and adequate gutter spacing (24-32px)
- **Hero as portal**: The hero section should function as a threshold -- a full-viewport dark canvas with a central illuminated element that draws the visitor in
- **Footer as grounding**: End pages with a dense, earth-toned footer that anchors the design, containing navigation and a closing botanical ornament

---

## CSS / Design Techniques

### Witchcore Card

```css
.witch-card {
  background: #1A1A24;
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 4px;
  padding: 32px;
  position: relative;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(201, 168, 76, 0.08);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.witch-card:hover {
  border-color: rgba(201, 168, 76, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(201, 168, 76, 0.12);
}

.witch-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #C9A84C, transparent);
}

.witch-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #6B3A6B, transparent);
}
```

### Witchcore Button

```css
.witch-button {
  background: linear-gradient(135deg, #6B3A6B 0%, #4A2A4A 100%);
  color: #E8DCC8;
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 2px;
  padding: 12px 32px;
  font-family: 'Cormorant SC', serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.witch-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 168, 76, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.witch-button:hover {
  background: linear-gradient(135deg, #7D4A7D 0%, #5A3A5A 100%);
  border-color: rgba(201, 168, 76, 0.5);
  box-shadow: 0 0 20px rgba(107, 58, 107, 0.3);
}

.witch-button:hover::before {
  left: 100%;
}
```

### Witchcore Navigation

```css
.witch-nav {
  background: rgba(13, 13, 18, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.witch-nav .logo {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.2rem;
  color: #C9A84C;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.witch-nav a {
  font-family: 'Cormorant SC', serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #B8BCC8;
  text-decoration: none;
  letter-spacing: 0.12em;
  padding: 8px 16px;
  transition: color 0.3s ease;
  position: relative;
}

.witch-nav a:hover {
  color: #C9A84C;
}

.witch-nav a::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1px;
  background: #C9A84C;
  transition: width 0.3s ease;
}

.witch-nav a:hover::after {
  width: 60%;
}
```

### Witchcore Hero Section

```css
.witch-hero {
  min-height: 100vh;
  background: radial-gradient(ellipse at center bottom, #2D1B3D 0%, #0D0D12 70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
}

.witch-hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.witch-hero h1 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #C9A84C;
  margin-bottom: 16px;
  text-shadow: 0 0 40px rgba(201, 168, 76, 0.2);
}

.witch-hero .subtitle {
  font-family: 'EB Garamond', serif;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #B8BCC8;
  max-width: 560px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.witch-hero .moon-phases {
  font-size: 1.8rem;
  letter-spacing: 0.6em;
  color: #9B7BB8;
  margin-bottom: 32px;
  opacity: 0.7;
}
```

### Candle-Glow Effect

```css
.candle-glow {
  position: relative;
}

.candle-glow::after {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle,
    rgba(212, 136, 58, 0.15) 0%,
    rgba(212, 136, 58, 0.05) 40%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  animation: flicker 3s ease-in-out infinite alternate;
}

@keyframes flicker {
  0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
  33% { opacity: 0.85; transform: translateX(-50%) scale(0.97); }
  66% { opacity: 0.95; transform: translateX(-50%) scale(1.02); }
}
```

### Parchment Texture Background

```css
.parchment-bg {
  background-color: #1A1A24;
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}

/* Alternative pure CSS grain */
.dark-grain {
  background-color: #0D0D12;
  position: relative;
}

.dark-grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-conic-gradient(
    rgba(232, 220, 200, 0.02) 0% 25%,
    transparent 0% 50%
  );
  background-size: 4px 4px;
  pointer-events: none;
}
```

### Celestial Divider

```css
.celestial-divider {
  text-align: center;
  margin: 48px 0;
  color: #9B7BB8;
  font-size: 1.2rem;
  letter-spacing: 0.4em;
  opacity: 0.5;
  position: relative;
}

.celestial-divider::before {
  content: '\25CF \263E \25CB \263D \25CF';
  /* Filled circle, waning crescent, empty circle, waxing crescent, filled circle */
}

.celestial-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(155, 123, 184, 0.2), transparent);
  z-index: -1;
}
```

---

## Design Do's and Don'ts

### Do's

- Use deep, dark backgrounds as the foundation; let content emerge from shadow like candlelight
- Incorporate botanical line art, moon phases, and celestial symbols as decorative elements throughout
- Apply warm gold and copper metallic accents sparingly for borders, icons, and interactive highlights
- Pair inscriptional serif headings (Cinzel) with warm body serifs (EB Garamond) for an archaic yet readable feel
- Use subtle grain or noise textures to give digital surfaces a tactile, aged quality
- Add soft radial glows behind focal elements to simulate candlelight and draw attention
- Reference apothecary-style label frames, specimen catalogs, and grimoire page layouts for content containers
- Maintain generous dark negative space to let the atmosphere breathe and build mystery

### Don'ts

- Avoid bright, saturated neon colors or candy-colored palettes that break the moody atmosphere
- Do not use rounded, bubbly sans-serif fonts; Witchcore demands serif and blackletter character
- Avoid pure white (`#FFFFFF`) for text or backgrounds; use parchment (`#E8DCC8`) or bone (`#D4C8B0`) instead
- Do not overcrowd layouts with competing decorative elements; restraint creates mystique
- Avoid glossy gradients, plastic-looking surfaces, or tech-corporate design patterns
- Do not use stock photography of modern technology, bright offices, or contemporary urban settings
- Avoid heavy drop shadows with blue or gray tint; shadows should be deep black or warm-tinted
- Do not make the aesthetic cartoonish or kitschy; maintain a grounded, reverent tone toward nature and craft

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Cottagecore** | Shares the emphasis on herbs, nature, and handmade craft, but Cottagecore is light and pastoral where Witchcore is dark and mystical |
| **Dark Academia** | Both embrace antiquarian typography and scholarly depth, but Dark Academia centers on literature and institutions while Witchcore centers on nature and occultism |
| **Goblincore** | Shares the love of moss, mushrooms, and forest floor treasures, but Goblincore is whimsical and chaotic where Witchcore is reverent and intentional |
| **Gothic** | Both use dark palettes and archaic references, but Gothic leans architectural and dramatic while Witchcore leans botanical and spiritual |
| **Dreamcore** | Both create atmospheric, liminal moods, but Dreamcore is surreal and disorienting while Witchcore is grounded in natural symbolism |
| **Art Nouveau** | Shares flowing organic forms and botanical motifs, but Art Nouveau is ornamental and light while Witchcore is dark and mystical |
| **Medievalcore** | Both reference pre-modern aesthetics, manuscripts, and pre-industrial craft; Medievalcore is broader while Witchcore focuses on the occult and herbal traditions |
| **Cybersigilism** | Shares occult symbolism and dark palettes, but Cybersigilism is digital, techno-tribal, and body-focused while Witchcore is organic and nature-rooted |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Witchcore Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+SC:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       WITCHCORE - Quick-Start Template
       ======================================== */

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --wc-void: #0D0D12;
      --wc-cauldron: #1A1A24;
      --wc-nightshade: #2D1B3D;
      --wc-belladonna: #6B3A6B;
      --wc-wisteria: #9B7BB8;
      --wc-sage: #7A8B6F;
      --wc-moss: #4A5E3A;
      --wc-gold: #C9A84C;
      --wc-copper: #A0714F;
      --wc-parchment: #E8DCC8;
      --wc-bone: #D4C8B0;
      --wc-flame: #D4883A;
      --wc-blood: #6E2C2C;
      --wc-moonstone: #B8BCC8;
      --wc-absinthe: #8FB87B;
    }

    body {
      font-family: 'EB Garamond', Georgia, serif;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--wc-parchment);
      background-color: var(--wc-void);
      -webkit-font-smoothing: antialiased;
    }

    /* --- Noise Overlay --- */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: repeating-conic-gradient(
        rgba(232, 220, 200, 0.015) 0% 25%,
        transparent 0% 50%
      );
      background-size: 4px 4px;
      pointer-events: none;
      z-index: 9999;
    }

    /* --- Navigation --- */
    .nav {
      background: rgba(13, 13, 18, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(201, 168, 76, 0.1);
      padding: 16px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-logo {
      font-family: 'Cinzel Decorative', serif;
      font-size: 1.15rem;
      color: var(--wc-gold);
      text-decoration: none;
      letter-spacing: 0.08em;
    }

    .nav-links {
      display: flex;
      gap: 8px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Cormorant SC', serif;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--wc-moonstone);
      text-decoration: none;
      letter-spacing: 0.12em;
      padding: 8px 16px;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 1px;
      background: var(--wc-gold);
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--wc-gold);
    }

    .nav-links a:hover::after {
      width: 60%;
    }

    /* --- Hero Section --- */
    .hero {
      min-height: 100vh;
      background: radial-gradient(ellipse at center bottom, var(--wc-nightshade) 0%, var(--wc-void) 70%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 24px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .hero-moon {
      font-size: 1.8rem;
      letter-spacing: 0.6em;
      color: var(--wc-wisteria);
      margin-bottom: 32px;
      opacity: 0.6;
    }

    .hero h1 {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      font-weight: 700;
      color: var(--wc-gold);
      margin-bottom: 20px;
      text-shadow: 0 0 40px rgba(201, 168, 76, 0.15);
      letter-spacing: 0.06em;
    }

    .hero p {
      font-family: 'EB Garamond', serif;
      font-size: clamp(1.05rem, 1.8vw, 1.3rem);
      color: var(--wc-bone);
      max-width: 540px;
      line-height: 1.9;
      margin-bottom: 40px;
    }

    .hero-cta {
      display: inline-block;
      background: linear-gradient(135deg, var(--wc-belladonna) 0%, #4A2A4A 100%);
      color: var(--wc-parchment);
      border: 1px solid rgba(201, 168, 76, 0.25);
      border-radius: 2px;
      padding: 14px 40px;
      font-family: 'Cormorant SC', serif;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .hero-cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.1), transparent);
      transition: left 0.5s ease;
    }

    .hero-cta:hover {
      border-color: rgba(201, 168, 76, 0.5);
      box-shadow: 0 0 24px rgba(107, 58, 107, 0.25);
    }

    .hero-cta:hover::before {
      left: 100%;
    }

    /* --- Celestial Divider --- */
    .divider {
      text-align: center;
      margin: 56px 0;
      position: relative;
    }

    .divider span {
      font-size: 1.1rem;
      letter-spacing: 0.5em;
      color: var(--wc-wisteria);
      opacity: 0.45;
      position: relative;
      z-index: 1;
      background: var(--wc-void);
      padding: 0 20px;
    }

    .divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 15%;
      right: 15%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(155, 123, 184, 0.2), transparent);
    }

    /* --- Container --- */
    .container {
      max-width: 860px;
      margin: 0 auto;
      padding: 60px 24px;
    }

    /* --- Section Title --- */
    .section-title {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-title .label {
      font-family: 'Cormorant SC', serif;
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      color: var(--wc-wisteria);
      text-transform: uppercase;
      margin-bottom: 12px;
      display: block;
    }

    .section-title h2 {
      font-family: 'Cinzel', serif;
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 600;
      color: var(--wc-gold);
      letter-spacing: 0.05em;
    }

    /* --- Card Grid --- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
      margin-bottom: 48px;
    }

    .card {
      background: var(--wc-cauldron);
      border: 1px solid rgba(201, 168, 76, 0.12);
      border-radius: 4px;
      padding: 32px 28px;
      position: relative;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      border-color: rgba(201, 168, 76, 0.28);
      box-shadow: 0 8px 36px rgba(0, 0, 0, 0.45);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--wc-gold), transparent);
    }

    .card-icon {
      font-size: 1.8rem;
      margin-bottom: 16px;
      display: block;
    }

    .card h3 {
      font-family: 'Cinzel', serif;
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--wc-gold);
      margin-bottom: 12px;
      letter-spacing: 0.04em;
    }

    .card p {
      font-size: 1rem;
      color: var(--wc-bone);
      line-height: 1.75;
    }

    /* --- Featured Section (Herb of the Moon) --- */
    .featured {
      background: linear-gradient(180deg, rgba(45, 27, 61, 0.3) 0%, rgba(13, 13, 18, 0) 100%);
      border: 1px solid rgba(155, 123, 184, 0.1);
      border-radius: 4px;
      padding: 48px 40px;
      text-align: center;
      position: relative;
      margin-bottom: 48px;
    }

    .featured::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--wc-wisteria), var(--wc-gold), var(--wc-wisteria), transparent);
    }

    .featured .label {
      font-family: 'Cormorant SC', serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      color: var(--wc-moonstone);
      text-transform: uppercase;
      margin-bottom: 16px;
      display: block;
    }

    .featured h3 {
      font-family: 'Cinzel', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--wc-gold);
      margin-bottom: 8px;
    }

    .featured .botanical {
      font-family: 'EB Garamond', serif;
      font-style: italic;
      color: var(--wc-sage);
      margin-bottom: 20px;
      display: block;
    }

    .featured p {
      max-width: 520px;
      margin: 0 auto;
      color: var(--wc-bone);
      line-height: 1.85;
    }

    /* --- Quote / Incantation --- */
    .incantation {
      text-align: center;
      padding: 40px 32px;
      margin: 48px 0;
      position: relative;
    }

    .incantation blockquote {
      font-family: 'EB Garamond', serif;
      font-style: italic;
      font-size: 1.3rem;
      color: var(--wc-wisteria);
      line-height: 1.8;
      max-width: 500px;
      margin: 0 auto 16px;
    }

    .incantation cite {
      font-family: 'Cormorant SC', serif;
      font-size: 0.82rem;
      letter-spacing: 0.15em;
      color: var(--wc-moonstone);
      font-style: normal;
    }

    .incantation::before,
    .incantation::after {
      content: '';
      position: absolute;
      left: 25%;
      right: 25%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.15), transparent);
    }

    .incantation::before { top: 0; }
    .incantation::after { bottom: 0; }

    /* --- Footer --- */
    .footer {
      background: var(--wc-cauldron);
      border-top: 1px solid rgba(201, 168, 76, 0.08);
      padding: 48px 40px 32px;
      text-align: center;
      margin-top: 80px;
    }

    .footer-sigil {
      font-size: 1.6rem;
      color: var(--wc-wisteria);
      opacity: 0.4;
      margin-bottom: 20px;
      letter-spacing: 0.4em;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 32px;
      list-style: none;
      margin-bottom: 24px;
    }

    .footer-links a {
      font-family: 'Cormorant SC', serif;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      color: var(--wc-moonstone);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--wc-gold);
    }

    .footer-copy {
      font-size: 0.85rem;
      color: rgba(184, 188, 200, 0.35);
    }

    /* --- Candle Glow Utility --- */
    .candle-glow {
      position: relative;
    }

    .candle-glow::after {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, rgba(212, 136, 58, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: flicker 3s ease-in-out infinite alternate;
    }

    @keyframes flicker {
      0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
      33% { opacity: 0.82; transform: translateX(-50%) scale(0.96); }
      66% { opacity: 0.93; transform: translateX(-50%) scale(1.03); }
    }

    /* --- Responsive --- */
    @media (max-width: 768px) {
      .nav {
        padding: 12px 20px;
        flex-direction: column;
        gap: 12px;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero {
        min-height: 80vh;
        padding: 60px 20px;
      }

      .container {
        padding: 40px 16px;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .featured {
        padding: 32px 20px;
      }

      .footer-links {
        flex-direction: column;
        gap: 16px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav-logo">Nightshade Apothecary</a>
    <ul class="nav-links">
      <li><a href="#herbs">Herbs</a></li>
      <li><a href="#remedies">Remedies</a></li>
      <li><a href="#moon">Moon Cycles</a></li>
      <li><a href="#journal">Journal</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-moon">&#x25CF; &#x263E; &#x25CB; &#x263D; &#x25CF;</div>
    <h1>Nightshade Apothecary</h1>
    <p>Where moonlit herbs and ancient remedies converge.
       A sanctuary for those who seek the quiet power
       hidden in root, leaf, and celestial rhythm.</p>
    <a href="#herbs" class="hero-cta">Enter the Workshop</a>
  </section>

  <!-- Divider -->
  <div class="divider">
    <span>&#x2726; &#x2726; &#x2726;</span>
  </div>

  <!-- Herb Cards -->
  <section class="container" id="herbs">
    <div class="section-title">
      <span class="label">From the Drying Rack</span>
      <h2>Materia Medica</h2>
    </div>
    <div class="card-grid">
      <div class="card">
        <span class="card-icon">&#x2618;</span>
        <h3>Mugwort</h3>
        <p>Artemisia vulgaris. Gathered under the waning moon for dream work
           and protection. Hang above doorways or steep as a bitter tea
           to open the veil between waking and sleeping.</p>
      </div>
      <div class="card">
        <span class="card-icon">&#x2741;</span>
        <h3>Lavender</h3>
        <p>Lavandula angustifolia. Harvested at midsummer when the oils
           peak. Used in sachets for restful sleep, bath rituals for
           purification, and burned as incense for peace.</p>
      </div>
      <div class="card">
        <span class="card-icon">&#x2740;</span>
        <h3>Wormwood</h3>
        <p>Artemisia absinthium. The bitter herb of visions and boundaries.
           Combined with mugwort in smudge bundles or infused in spirits.
           Handle with respect and clear intention.</p>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="divider">
    <span>&#x263E; &#x25CB; &#x263D;</span>
  </div>

  <!-- Featured Herb -->
  <section class="container" id="moon">
    <div class="featured candle-glow">
      <span class="label">Herb of the Waning Moon</span>
      <h3>Belladonna</h3>
      <span class="botanical">Atropa belladonna</span>
      <p>Known as deadly nightshade, this powerful plant has been associated
         with witchcraft for centuries. Its dark berries and bell-shaped
         flowers embody the duality of beauty and danger. In the apothecary,
         it is kept behind glass -- respected, studied, never handled lightly.</p>
    </div>
  </section>

  <!-- Incantation -->
  <section class="incantation">
    <blockquote>
      &ldquo;By root and stem, by leaf and flower,<br>
      by moon that marks the witching hour,<br>
      what sleeps in soil shall rise to light --<br>
      the garden keeps its own at night.&rdquo;
    </blockquote>
    <cite>-- Traditional Herbalist's Verse</cite>
  </section>

  <!-- Divider -->
  <div class="divider">
    <span>&#x2726; &#x2726; &#x2726;</span>
  </div>

  <!-- Remedies Section -->
  <section class="container" id="remedies">
    <div class="section-title">
      <span class="label">From the Workbench</span>
      <h2>Remedies &amp; Preparations</h2>
    </div>
    <div class="card-grid">
      <div class="card">
        <span class="card-icon">&#x2697;</span>
        <h3>Dream Tincture</h3>
        <p>Mugwort and chamomile steeped in grain alcohol under a full moon.
           Three drops on the tongue before sleep to invite prophetic dreams
           and gentle recall upon waking.</p>
      </div>
      <div class="card">
        <span class="card-icon">&#x2604;</span>
        <h3>Protection Salt</h3>
        <p>Black lava salt blended with crushed rosemary, dried sage, and
           iron filings. Sprinkled across thresholds and windowsills during
           the dark moon to ward and ground.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-sigil">&#x25CF; &#x263E; &#x25CB; &#x263D; &#x25CF;</div>
    <ul class="footer-links">
      <li><a href="#herbs">Herbs</a></li>
      <li><a href="#remedies">Remedies</a></li>
      <li><a href="#moon">Moon Cycles</a></li>
      <li><a href="#journal">Journal</a></li>
    </ul>
    <p class="footer-copy">Nightshade Apothecary &mdash; Crafted under the waning moon</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Avoid pure white text**: Use `#E8DCC8` (parchment) or `#D4C8B0` (bone) for body text on dark backgrounds; pure white creates harsh contrast that feels clinical rather than mystical
- **Warm your shadows**: Tint box-shadows with deep purple (`rgba(45, 27, 61, 0.3)`) or warm black (`rgba(0, 0, 0, 0.4)`) rather than cool gray to maintain the atmospheric warmth
- **Grain texture is essential**: Apply a subtle CSS noise or grain overlay to the entire page; without it, flat dark backgrounds feel sterile instead of aged and tactile
- **Use gold sparingly**: The `#C9A84C` gold is powerful -- reserve it for headings, interactive highlights, and key borders; overuse dilutes its alchemical impact
- **Moon-phase Unicode characters**: The symbols `&#x25CF;` (full), `&#x263E;` (waning), `&#x25CB;` (new), and `&#x263D;` (waxing) render natively and make excellent dividers without loading icon fonts
- **Candle-glow animation**: Keep the `flicker` animation subtle (3-5% opacity and scale variance); large fluctuations feel distracting rather than atmospheric
- **Test on light-ambient screens**: Dark aesthetics can wash out on screens in bright environments; ensure sufficient contrast between `#1A1A24` card surfaces and `#0D0D12` backgrounds
- **Inline SVG for botanicals**: Use single-color SVG line art for herb illustrations and divider ornaments; keep stroke widths thin (1-1.5px) and colors at low opacity for an etched, delicate quality
