# Stained Glass Design Reference

## Overview

Stained Glass is a design aesthetic rooted in the centuries-old art of assembling small pieces of colored glass into patterns and pictures, held together by strips of lead called *cames*. Originating in the medieval period and reaching its zenith in the great Gothic cathedrals of Europe -- Chartres, Notre-Dame, Sainte-Chapelle -- the technique transforms sunlight into narrative color, turning walls into luminous storytelling surfaces. In a web design context, the Stained Glass aesthetic translates these principles into **translucent colored panels**, **dark lead-line borders**, **jewel-tone palettes**, and a distinctive **light-through-color effect** that makes interfaces glow as if backlit by daylight streaming through a rose window.

The hallmark of this aesthetic is the interplay between structure and luminosity. Lead cames -- the dark, rigid lines separating each piece of glass -- serve both a structural and compositional purpose, creating bold geometric or organic outlines that define every panel, card, and section boundary. The glass itself is never opaque; it carries the memory of transmitted light, rendered on screen through semi-transparent backgrounds, radial gradients that simulate illumination from behind, and saturated jewel-tone hues inspired by cobalt blue, ruby red, emerald green, and amethyst purple. Color in stained glass is not surface decoration -- it is the material itself, and every hue carries symbolic weight: blue for the heavens and the Virgin Mary, red for the blood of Christ and sacrifice, green for rebirth and nature, gold for divine radiance.

On the web, the Stained Glass aesthetic occupies a space between the ornamental richness of Gothic Revival and the translucent layering of Glassmorphism, but distinguishes itself through its **compartmentalized panel structure**, its **heavy dark borders** (rather than soft frosted edges), and its use of **deeply saturated, jewel-like color** rather than pastel transparency. Typography draws from the blackletter, uncial, and inscriptional serif traditions of medieval manuscripts, lending a sense of sacred gravitas to headings and display text. Layouts echo the geometric tracery of Gothic windows -- pointed arches, rosettes, quatrefoils, and grid-like panel arrangements -- while maintaining modern responsiveness and readability. The result is a design language that feels simultaneously ancient and luminous, structural and ethereal, solemn and richly beautiful.

---

## Visual Characteristics

### Core Design Traits

- **Lead-line borders** -- thick, dark borders (near-black or dark charcoal) separating every panel, mimicking the H-shaped lead cames that hold glass pieces together in traditional stained glass construction
- **Jewel-tone color fields** -- deeply saturated, gemstone-inspired hues (ruby, sapphire, emerald, amethyst, topaz) used as translucent panel fills rather than flat opaque backgrounds
- **Light-through-color effect** -- radial or linear gradients within panels that simulate sunlight passing through colored glass, brighter at center, deeper at edges
- **Translucent layering** -- semi-transparent colored panels (`rgba` values between 0.6 and 0.85) allowing underlying textures or dark backgrounds to show through
- **Geometric tracery patterns** -- pointed arches, trefoils, quatrefoils, rose window rosettes, and lancet shapes used as decorative framing and layout structure
- **Dark substrate** -- a near-black or very dark background representing the stone wall of a cathedral, against which the luminous colored panels glow
- **Compartmentalized composition** -- content divided into distinct, bordered cells like the individual pieces of a stained glass window
- **Radiating focal points** -- circular or rose-window-inspired arrangements drawing the eye to a central illuminated element
- **Visible solder joints** -- small circular or diamond-shaped accent marks at the intersections of lead lines, rendered as subtle metallic dots
- **Textural glass simulation** -- subtle noise, grain, or streaked texture overlays within panels to evoke the irregularity of hand-blown medieval glass
- **Color gradation within panels** -- individual panels are not flat-filled but shift in saturation and brightness, mimicking how light intensity varies across a glass piece
- **Warm inner glow** -- `box-shadow: inset` effects that make panels appear to radiate warmth from within, as if lit from behind

### Design Principles

- **Structure defines beauty** -- the dark lead lines are not merely functional separators but an integral part of the visual composition, giving the design its distinctive character
- **Light as content** -- color and luminosity carry meaning; the glow of a panel communicates importance and hierarchy more than size alone
- **Symbolic color usage** -- colors are chosen with intentionality, drawing on the medieval tradition where each hue carried spiritual or narrative significance
- **Containment and revelation** -- each panel is a self-contained unit that simultaneously belongs to a larger compositional whole, like individual glass pieces forming a scene
- **Sacred geometry** -- layouts employ arches, circles, and symmetrical grid structures inspired by Gothic architectural tracery
- **Contrast between darkness and radiance** -- the dark lead lines and dark background serve to intensify the luminous brilliance of the colored glass panels
- **Handcrafted irregularity** -- subtle imperfections in texture, color variation, and border weight evoke the artisan nature of real stained glass
- **Hierarchical illumination** -- the most important content glows brightest; secondary elements use deeper, less saturated tones

---

## Color Palette

The Stained Glass palette draws directly from the jewel-tone colors produced by medieval glass-making techniques: cobalt oxide for deep blue, copper oxide for green, gold chloride and selenium for ruby red, manganese for amethyst purple, and silver stain for golden yellow. These are not pastel or muted -- they are richly saturated, deeply luminous hues that appear to glow against a dark background. Every color should feel as though light is passing through it.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| ![#0F52BA](https://via.placeholder.com/20/0F52BA/0F52BA) | `#0F52BA` | **Sapphire Blue** -- primary accent, header panels, heavenly/celestial associations |
| ![#1A3A6B](https://via.placeholder.com/20/1A3A6B/1A3A6B) | `#1A3A6B` | **Cathedral Blue** -- secondary blue, deeper panels, navigation backgrounds |
| ![#9B111E](https://via.placeholder.com/20/9B111E/9B111E) | `#9B111E` | **Ruby Red** -- call-to-action, emphasis, passion and sacrifice symbolism |
| ![#C41E3A](https://via.placeholder.com/20/C41E3A/C41E3A) | `#C41E3A` | **Cardinal Red** -- lighter red accent, hover states, warm highlights |
| ![#009473](https://via.placeholder.com/20/009473/009473) | `#009473` | **Emerald Green** -- nature, rebirth, secondary panels, success states |
| ![#1B5E20](https://via.placeholder.com/20/1B5E20/1B5E20) | `#1B5E20` | **Forest Green** -- deep green accents, backgrounds, eternal life symbolism |
| ![#7B2D8E](https://via.placeholder.com/20/7B2D8E/7B2D8E) | `#7B2D8E` | **Amethyst Purple** -- decorative accents, mystical/royal associations |
| ![#9966CC](https://via.placeholder.com/20/9966CC/9966CC) | `#9966CC` | **Violet Glass** -- lighter purple, secondary accents, text highlights |
| ![#D4AF37](https://via.placeholder.com/20/D4AF37/D4AF37) | `#D4AF37` | **Gold Stain** -- divine light, metallic accents, borders, sacred glow (mimics silver stain technique) |
| ![#B8860B](https://via.placeholder.com/20/B8860B/B8860B) | `#B8860B` | **Dark Gold** -- secondary metallic, solder joints, warm border highlights |
| ![#E8A317](https://via.placeholder.com/20/E8A317/E8A317) | `#E8A317` | **Topaz Yellow** -- warm accent, illumination effect, highlights |
| ![#1A1A2E](https://via.placeholder.com/20/1A1A2E/1A1A2E) | `#1A1A2E` | **Cathedral Dark** -- primary background, the dark stone behind the glass |
| ![#2D2D3F](https://via.placeholder.com/20/2D2D3F/2D2D3F) | `#2D2D3F` | **Lead Grey** -- border/came color, structural lines, separators |
| ![#F5F0E1](https://via.placeholder.com/20/F5F0E1/F5F0E1) | `#F5F0E1` | **Parchment** -- light text, body copy on dark backgrounds, manuscript reference |
| ![#FAFAFA](https://via.placeholder.com/20/FAFAFA/FAFAFA) | `#FAFAFA` | **Pure Light** -- brightest highlights, glow centers, maximum luminosity points |

### CSS Custom Properties

```css
:root {
  /* Background & Structure */
  --glass-bg-dark: #1a1a2e;
  --glass-bg-deep: #12121f;
  --glass-lead: #2d2d3f;
  --glass-lead-dark: #1e1e30;
  --glass-solder: #b8860b;

  /* Blues */
  --glass-sapphire: #0f52ba;
  --glass-cathedral-blue: #1a3a6b;
  --glass-sapphire-glow: rgba(15, 82, 186, 0.7);

  /* Reds */
  --glass-ruby: #9b111e;
  --glass-cardinal: #c41e3a;
  --glass-ruby-glow: rgba(155, 17, 30, 0.7);

  /* Greens */
  --glass-emerald: #009473;
  --glass-forest: #1b5e20;
  --glass-emerald-glow: rgba(0, 148, 115, 0.7);

  /* Purples */
  --glass-amethyst: #7b2d8e;
  --glass-violet: #9966cc;
  --glass-amethyst-glow: rgba(123, 45, 142, 0.7);

  /* Golds & Yellows */
  --glass-gold: #d4af37;
  --glass-gold-dark: #b8860b;
  --glass-topaz: #e8a317;

  /* Light & Text */
  --glass-parchment: #f5f0e1;
  --glass-light: #fafafa;
  --glass-text-primary: #f5f0e1;
  --glass-text-secondary: rgba(245, 240, 225, 0.75);

  /* Functional Aliases */
  --glass-bg-primary: var(--glass-bg-dark);
  --glass-border: var(--glass-lead);
  --glass-accent: var(--glass-sapphire);
  --glass-accent-warm: var(--glass-ruby);
  --glass-highlight: var(--glass-gold);
}
```

---

## Typography

Stained Glass typography draws from the manuscript and inscriptional traditions that accompanied medieval cathedral art. Display text uses blackletter, uncial, or heavily ornamented serif faces that evoke illuminated manuscripts, stone-carved inscriptions, and liturgical texts. Body text uses more readable serif faces with classical proportions, maintaining the sense of historical gravitas while ensuring legibility on screen. Text color is primarily warm parchment-toned against dark backgrounds, with gold used for accents and highlights. Letter-spacing tends to be generous, especially in headings, to echo the spaced-out inscriptional lettering found on cathedral facades.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **UnifrakturCook** | Blackletter / Fraktur | Decorative display titles, hero headings |
| **MedievalSharp** | Medieval serif | Subheadings, section titles, display text |
| **Cinzel** | Inscriptional serif | Primary headings, navigation labels |
| **Cinzel Decorative** | Ornamental inscriptional | Hero titles, special display moments |
| **EB Garamond** | Classical humanist serif | Body text, paragraphs, readable content |
| **Cormorant Garamond** | Elegant high-contrast serif | Body text alternative, pull quotes |
| **Spectral** | Modern organic serif | UI text, captions, smaller body copy |
| **Uncial Antiqua** | Uncial / half-uncial | Accent text, decorative labels, category names |

### Font Pairing Recommendations

| Context | Primary Font | Secondary Font | Notes |
|---------|-------------|---------------|-------|
| **Hero / Display** | Cinzel Decorative | Cormorant Garamond | Ornamental heading with elegant serif body |
| **Editorial / Article** | Cinzel | EB Garamond | Inscriptional headings with highly readable body |
| **Decorative / Atmospheric** | UnifrakturCook | Spectral | Blackletter display with clean serif body for contrast |
| **Modern Interpretation** | MedievalSharp | EB Garamond | Medieval-flavored headings with classic body text |
| **Formal / Ceremonial** | Cinzel Decorative | Cormorant Garamond italic | Maximum gravitas with flowing italic body |

### Typography CSS Example

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=UnifrakturCook:wght@700&display=swap');

/* Headlines */
h1, h2, h3 {
  font-family: 'Cinzel', 'Times New Roman', serif;
  color: var(--glass-parchment);
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.2;
}

/* Display / Hero text */
.glass-display {
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  letter-spacing: 0.12em;
  line-height: 1.1;
  font-weight: 400;
  color: var(--glass-gold);
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

/* Blackletter decorative accent */
.glass-blackletter {
  font-family: 'UnifrakturCook', cursive;
  font-size: 1.6em;
  color: var(--glass-gold);
  letter-spacing: 0.05em;
}

/* Body text */
body {
  font-family: 'EB Garamond', 'Cormorant Garamond', 'Georgia', serif;
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  line-height: 1.8;
  color: var(--glass-parchment);
}

/* Captions and small text */
.glass-caption {
  font-family: 'Spectral', 'EB Garamond', serif;
  font-size: 0.85rem;
  color: var(--glass-text-secondary);
  letter-spacing: 0.04em;
}
```

---

## Layout Principles

- **Dark canvas, luminous panels** -- the page background is always dark (near-black with a subtle blue-violet undertone), providing the "stone wall" against which colored glass panels glow
- **Grid-based panel structure** -- use CSS Grid to create compartmentalized layouts where each cell is a distinct "glass piece" separated by visible dark borders (lead cames)
- **Consistent border weight** -- lead lines should be 3-5px wide for major divisions, 2-3px for subdivisions, maintaining the structural feel of real came work
- **Pointed arch framing** -- hero sections and key content areas can use clip-path or SVG to create Gothic lancet arch shapes, evoking cathedral window forms
- **Rose window focal points** -- circular arrangements of content panels (using CSS Grid or flexbox) for feature sections, radiating outward from a center element
- **Symmetrical composition** -- unlike many modern asymmetric layouts, stained glass design favors bilateral or radial symmetry, reflecting the ordered geometry of cathedral windows
- **Hierarchical glow intensity** -- primary content panels glow brightest (stronger inner shadows, more saturated color); secondary content is dimmer and deeper-toned
- **Generous padding within panels** -- each glass panel should have ample internal spacing, preventing text from crowding against the dark lead borders
- **Vertical emphasis** -- tall, narrow panels and lancet-shaped containers echo the verticality of Gothic architecture, drawing the eye upward
- **Color grouping** -- adjacent panels use related or complementary jewel tones, creating harmonious color neighborhoods just as a glazier would compose a window section
- **Responsive panel reflow** -- on smaller screens, the grid collapses from multi-column tracery to stacked panels, maintaining lead-line borders between each element
- **Decorative intersection accents** -- where multiple lead lines meet, add small diamond or circle decorations (rendered as pseudo-elements or SVG) to simulate solder joints

---

## CSS / Design Techniques

### Stained Glass Card

```css
/* Individual glass panel / card */
.glass-card {
  background: rgba(15, 82, 186, 0.15);
  border: 3px solid var(--glass-lead);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

/* Inner glow -- light-through-color effect */
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(15, 82, 186, 0.25) 0%,
    rgba(15, 82, 186, 0.08) 50%,
    transparent 80%
  );
  pointer-events: none;
}

/* Glass texture overlay */
.glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: overlay;
}

.glass-card:hover {
  box-shadow:
    inset 0 0 30px rgba(15, 82, 186, 0.2),
    0 0 20px rgba(15, 82, 186, 0.15);
  border-color: var(--glass-sapphire);
}

/* Color variants */
.glass-card--ruby {
  background: rgba(155, 17, 30, 0.15);
}
.glass-card--ruby::before {
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(155, 17, 30, 0.25) 0%,
    rgba(155, 17, 30, 0.08) 50%,
    transparent 80%
  );
}

.glass-card--emerald {
  background: rgba(0, 148, 115, 0.15);
}
.glass-card--emerald::before {
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(0, 148, 115, 0.25) 0%,
    rgba(0, 148, 115, 0.08) 50%,
    transparent 80%
  );
}

.glass-card--amethyst {
  background: rgba(123, 45, 142, 0.15);
}
.glass-card--amethyst::before {
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(123, 45, 142, 0.25) 0%,
    rgba(123, 45, 142, 0.08) 50%,
    transparent 80%
  );
}

.glass-card--gold {
  background: rgba(212, 175, 55, 0.12);
}
.glass-card--gold::before {
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(212, 175, 55, 0.2) 0%,
    rgba(212, 175, 55, 0.06) 50%,
    transparent 80%
  );
}
```

### Stained Glass Button

```css
/* Base button -- jewel-tone glass with lead border */
.glass-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--glass-parchment);
  background: linear-gradient(
    135deg,
    rgba(15, 82, 186, 0.4) 0%,
    rgba(15, 82, 186, 0.6) 50%,
    rgba(15, 82, 186, 0.35) 100%
  );
  border: 2px solid var(--glass-lead);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
}

/* Simulated light catch */
.glass-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 40% 30%,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.glass-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(15, 82, 186, 0.55) 0%,
    rgba(15, 82, 186, 0.75) 50%,
    rgba(15, 82, 186, 0.5) 100%
  );
  box-shadow:
    0 0 15px rgba(15, 82, 186, 0.3),
    inset 0 0 15px rgba(15, 82, 186, 0.15);
  border-color: var(--glass-sapphire);
}

.glass-btn:active {
  transform: scale(0.98);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

/* Ruby variant */
.glass-btn--ruby {
  background: linear-gradient(
    135deg,
    rgba(155, 17, 30, 0.4) 0%,
    rgba(155, 17, 30, 0.6) 50%,
    rgba(155, 17, 30, 0.35) 100%
  );
}

/* Gold / highlight variant */
.glass-btn--gold {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.35) 0%,
    rgba(212, 175, 55, 0.55) 50%,
    rgba(212, 175, 55, 0.3) 100%
  );
  color: var(--glass-light);
}
```

### Stained Glass Navigation

```css
/* Navigation bar -- lead-bordered panel strip */
.glass-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: var(--glass-bg-deep);
  border-bottom: 3px solid var(--glass-lead);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Each nav item is a small glass panel */
.glass-nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.8rem;
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--glass-text-secondary);
  border-right: 2px solid var(--glass-lead);
  position: relative;
  transition: all 0.3s ease;
}

.glass-nav a:first-child {
  border-left: 2px solid var(--glass-lead);
}

/* Hover: glass panel lights up */
.glass-nav a:hover {
  color: var(--glass-parchment);
  background: rgba(15, 82, 186, 0.15);
  box-shadow: inset 0 0 20px rgba(15, 82, 186, 0.1);
}

/* Active state: fully illuminated */
.glass-nav a.active {
  color: var(--glass-gold);
  background: rgba(212, 175, 55, 0.1);
  box-shadow: inset 0 -3px 0 var(--glass-gold);
}

/* Solder dot at junctions */
.glass-nav a::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  background: var(--glass-solder);
  border-radius: 1px;
  z-index: 1;
}

.glass-nav a:last-child::after {
  display: none;
}
```

### Stained Glass Hero Section

```css
/* Hero: cathedral window with illuminated center */
.glass-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  background: var(--glass-bg-dark);
}

/* Rose window radial glow behind the content */
.glass-hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(15, 82, 186, 0.06) 25%,
    rgba(123, 45, 142, 0.04) 50%,
    rgba(155, 17, 30, 0.03) 70%,
    transparent 85%
  );
  border-radius: 50%;
  pointer-events: none;
}

/* Outer ring -- simulated rose window tracery */
.glass-hero::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border: 2px solid rgba(45, 45, 63, 0.6);
  border-radius: 50%;
  pointer-events: none;
  box-shadow:
    0 0 0 30px rgba(26, 26, 46, 0.3),
    0 0 0 32px rgba(45, 45, 63, 0.4);
}

.glass-hero h1 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: var(--glass-gold);
  letter-spacing: 0.12em;
  text-shadow:
    0 0 30px rgba(212, 175, 55, 0.3),
    0 0 60px rgba(212, 175, 55, 0.1);
  position: relative;
  z-index: 1;
}

.glass-hero .subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-style: italic;
  color: var(--glass-text-secondary);
  margin-top: 1rem;
  letter-spacing: 0.06em;
  position: relative;
  z-index: 1;
}
```

### Lead-Line Grid Layout

```css
/* Stained glass panel grid -- dark gaps simulate lead cames */
.glass-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 4px; /* lead line width */
  background: var(--glass-lead); /* lead color fills the gaps */
  border: 4px solid var(--glass-lead);
  padding: 0;
}

.glass-grid > * {
  background: var(--glass-bg-dark);
  padding: 2rem;
  position: relative;
}

/* Solder dots at intersections using a repeating pattern */
.glass-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle 3px at center,
    var(--glass-solder) 0%,
    var(--glass-solder) 70%,
    transparent 71%
  );
  background-size: calc(100% / 3) calc(100% / 3);
  background-position: -2px -2px;
  pointer-events: none;
  z-index: 2;
  opacity: 0.6;
}
```

### Gothic Arch Frame

```css
/* Pointed arch container using clip-path */
.glass-arch {
  clip-path: polygon(
    0% 100%,
    0% 35%,
    15% 10%,
    50% 0%,
    85% 10%,
    100% 35%,
    100% 100%
  );
  background: var(--glass-lead);
  padding: 4px;
  display: inline-block;
}

.glass-arch-inner {
  clip-path: polygon(
    0% 100%,
    0% 35%,
    15% 10%,
    50% 0%,
    85% 10%,
    100% 35%,
    100% 100%
  );
  background: rgba(15, 82, 186, 0.2);
  padding: 4rem 2.5rem 2.5rem;
  position: relative;
}

/* Light effect within the arch */
.glass-arch-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 60%;
  background: radial-gradient(
    ellipse at 50% 20%,
    rgba(212, 175, 55, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Rose Window Decorative Element

```css
/* Circular rose window using layered radial gradients */
.glass-rose {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid var(--glass-lead);
  position: relative;
  overflow: hidden;
  margin: 2rem auto;
}

.glass-rose::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    /* Central medallion */
    radial-gradient(
      circle at 50% 50%,
      rgba(212, 175, 55, 0.4) 0%,
      rgba(212, 175, 55, 0.15) 15%,
      transparent 16%
    ),
    /* Inner ring segments */
    conic-gradient(
      from 0deg,
      rgba(15, 82, 186, 0.3) 0deg,
      rgba(155, 17, 30, 0.3) 60deg,
      rgba(0, 148, 115, 0.3) 120deg,
      rgba(123, 45, 142, 0.3) 180deg,
      rgba(15, 82, 186, 0.3) 240deg,
      rgba(155, 17, 30, 0.3) 300deg,
      rgba(15, 82, 186, 0.3) 360deg
    );
}

.glass-rose::after {
  content: '';
  position: absolute;
  inset: 0;
  /* Lead line cross pattern */
  background:
    linear-gradient(0deg, transparent 48%, var(--glass-lead) 48%, var(--glass-lead) 52%, transparent 52%),
    linear-gradient(90deg, transparent 48%, var(--glass-lead) 48%, var(--glass-lead) 52%, transparent 52%),
    linear-gradient(45deg, transparent 48.5%, var(--glass-lead) 48.5%, var(--glass-lead) 51.5%, transparent 51.5%),
    linear-gradient(-45deg, transparent 48.5%, var(--glass-lead) 48.5%, var(--glass-lead) 51.5%, transparent 51.5%);
  border-radius: 50%;
}

/* Inner circle lead line */
.glass-rose .inner-ring {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border: 3px solid var(--glass-lead);
  border-radius: 50%;
  z-index: 1;
}
```

### Illuminated Divider

```css
/* Horizontal divider simulating a strip of decorative glass */
.glass-divider {
  width: 60%;
  max-width: 500px;
  height: 3px;
  margin: 3rem auto;
  position: relative;
  background: var(--glass-lead);
}

/* Central gold diamond ornament */
.glass-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: var(--glass-gold);
  border: 2px solid var(--glass-lead);
}

/* Side accent dots */
.glass-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--glass-solder);
  border-radius: 50%;
  box-shadow:
    calc(50% * 2) 0 0 var(--glass-solder);
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use a dark background** as the foundation -- the luminous glass effect depends entirely on colored panels glowing against a dark substrate, just as real stained glass depends on sunlight against a dark stone wall
- **Do maintain consistent lead-line borders** between all panels and sections -- the came structure is the defining visual signature; without it, the design is merely glassmorphism
- **Do use radial gradients within panels** to simulate the light-through-color effect -- flat color fills look dead; gradient fills with brighter centers feel alive and backlit
- **Do employ jewel-tone colors at appropriate saturation** -- the palette should be rich and deeply saturated, not pastel or muted; these are gemstone hues, not watercolors
- **Do add subtle texture** to glass panels (noise filters, slight grain) to evoke the irregularity of hand-blown medieval glass rather than smooth modern glass
- **Do use gold sparingly but intentionally** for accents, dividers, and highlighting key text -- gold represents divine light in the stained glass tradition and should feel precious, not overused
- **Do create visual hierarchy through luminosity** -- brighter, more intensely colored panels draw the eye before dimmer, deeper-toned ones
- **Do test contrast ratios** for text on translucent colored backgrounds -- WCAG compliance is essential; use parchment or white text on dark panels, and ensure sufficient contrast within colored panels

### Don'ts

- **Don't use bright or white backgrounds** -- the entire aesthetic depends on dark surroundings; a white page with colored panels looks like infographics, not stained glass
- **Don't omit the lead lines** -- removing the dark borders between panels destroys the stained glass illusion and leaves you with generic colored tiles
- **Don't use thin, subtle borders** -- lead cames are heavy, structural, and visually prominent; 1px hairline borders do not convey the aesthetic at all
- **Don't mix in neon or fluorescent colors** -- the palette is jewel-toned (deep, saturated, natural mineral colors), not electric or synthetic
- **Don't make all panels the same color** -- real stained glass windows use carefully composed color arrangements; monotone panels lose the characteristic polychrome richness
- **Don't over-blur with backdrop-filter** -- stained glass is translucent but not frosted; the color itself is clear and vivid, just semi-transparent; heavy blur belongs to glassmorphism, not stained glass
- **Don't neglect the solder details** -- small diamond or dot accents at border intersections add authenticity; their absence makes the grid feel too clean and digital
- **Don't use sans-serif display fonts** -- the aesthetic demands serif, inscriptional, or blackletter typefaces for headings; sans-serif headings undercut the medieval-ecclesiastical mood entirely

---

## Related Aesthetics

| Aesthetic | Relationship to Stained Glass |
|-----------|-------------------------------|
| **Gothic Revival** | Direct architectural ancestor; shares pointed arches, tracery patterns, ecclesiastical mood, and medieval references |
| **Glassmorphism** | Shares translucent panel concept but differs fundamentally -- glassmorphism uses frosted blur and soft edges; stained glass uses hard lead borders and saturated color |
| **Art Nouveau** | Historical overlap through Tiffany and Art Nouveau stained glass; shares organic leading patterns and nature motifs, but Art Nouveau is lighter and more curvilinear |
| **Art Deco** | Shares geometric panel structures and bold color blocking, but Art Deco uses metallic chrome and streamlined geometry rather than medieval tracery |
| **Dark Mode / Dark UI** | Shares the dark background foundation, but Dark UI is utilitarian; Stained Glass adds ornament, symbolism, and luminous color |
| **Jewel Tone Maximalism** | Shares the saturated gemstone palette, but Maximalism lacks the structured panel grid and lead-line borders that define stained glass |
| **Medieval / Illuminated Manuscript** | Shares the historical period, typography traditions, gold leaf accents, and rich symbolic color language |
| **Cathedral / Sacred Geometry** | Shares architectural geometry (arches, rose windows, tracery) and the spiritual-luminous quality of light as a design element |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stained Glass Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
  <style>
    /* ============================
       CSS CUSTOM PROPERTIES
       ============================ */
    :root {
      --glass-bg-dark: #1a1a2e;
      --glass-bg-deep: #12121f;
      --glass-lead: #2d2d3f;
      --glass-lead-dark: #1e1e30;
      --glass-solder: #b8860b;

      --glass-sapphire: #0f52ba;
      --glass-cathedral-blue: #1a3a6b;
      --glass-ruby: #9b111e;
      --glass-cardinal: #c41e3a;
      --glass-emerald: #009473;
      --glass-forest: #1b5e20;
      --glass-amethyst: #7b2d8e;
      --glass-violet: #9966cc;

      --glass-gold: #d4af37;
      --glass-gold-dark: #b8860b;
      --glass-topaz: #e8a317;

      --glass-parchment: #f5f0e1;
      --glass-light: #fafafa;
      --glass-text-primary: #f5f0e1;
      --glass-text-secondary: rgba(245, 240, 225, 0.7);
    }

    /* ============================
       RESET & BASE
       ============================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--glass-bg-dark);
      color: var(--glass-text-primary);
      font-family: 'EB Garamond', 'Georgia', serif;
      font-size: 1.1rem;
      line-height: 1.8;
      letter-spacing: 0.02em;
      min-height: 100vh;
    }

    h1, h2, h3, h4 {
      font-family: 'Cinzel', 'Times New Roman', serif;
      font-weight: 600;
      letter-spacing: 0.08em;
      line-height: 1.25;
      color: var(--glass-parchment);
    }

    a {
      color: var(--glass-gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--glass-topaz);
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ============================
       NAVIGATION
       ============================ */
    .glass-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-bg-deep);
      border-bottom: 3px solid var(--glass-lead);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .glass-nav a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem;
      font-family: 'Cinzel', serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--glass-text-secondary);
      border-right: 2px solid var(--glass-lead);
      position: relative;
      transition: all 0.3s ease;
    }

    .glass-nav a:first-child {
      border-left: 2px solid var(--glass-lead);
    }

    .glass-nav a:hover {
      color: var(--glass-parchment);
      background: rgba(15, 82, 186, 0.12);
      box-shadow: inset 0 0 20px rgba(15, 82, 186, 0.08);
    }

    .glass-nav a.active {
      color: var(--glass-gold);
      background: rgba(212, 175, 55, 0.08);
      box-shadow: inset 0 -3px 0 var(--glass-gold);
    }

    /* Solder dot at nav junctions */
    .glass-nav a::after {
      content: '';
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 5px;
      height: 5px;
      background: var(--glass-solder);
      border-radius: 1px;
      z-index: 1;
    }

    .glass-nav a:last-child::after {
      display: none;
    }

    /* ============================
       HERO SECTION
       ============================ */
    .glass-hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;
    }

    /* Rose window radial glow */
    .glass-hero::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 750px;
      height: 750px;
      background: radial-gradient(
        circle,
        rgba(212, 175, 55, 0.07) 0%,
        rgba(15, 82, 186, 0.05) 25%,
        rgba(123, 45, 142, 0.04) 45%,
        rgba(155, 17, 30, 0.03) 65%,
        transparent 85%
      );
      border-radius: 50%;
      pointer-events: none;
    }

    /* Rose window outer ring */
    .glass-hero::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 550px;
      height: 550px;
      border: 2px solid rgba(45, 45, 63, 0.5);
      border-radius: 50%;
      pointer-events: none;
      box-shadow:
        0 0 0 25px rgba(26, 26, 46, 0.25),
        0 0 0 27px rgba(45, 45, 63, 0.35);
    }

    .glass-hero h1 {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(2.5rem, 8vw, 5.5rem);
      color: var(--glass-gold);
      letter-spacing: 0.12em;
      text-shadow:
        0 0 30px rgba(212, 175, 55, 0.25),
        0 0 60px rgba(212, 175, 55, 0.1);
      position: relative;
      z-index: 1;
    }

    .glass-hero .tagline {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1rem, 2.5vw, 1.4rem);
      font-style: italic;
      color: var(--glass-text-secondary);
      margin-top: 1rem;
      letter-spacing: 0.05em;
      position: relative;
      z-index: 1;
    }

    .glass-hero .scroll-hint {
      position: relative;
      z-index: 1;
      margin-top: 3rem;
      font-family: 'Cinzel', serif;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--glass-text-secondary);
      opacity: 0.6;
      animation: pulseGlow 3s ease-in-out infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }

    /* ============================
       DIVIDERS
       ============================ */
    .glass-divider {
      width: 50%;
      max-width: 400px;
      height: 3px;
      margin: 3rem auto;
      position: relative;
      background: var(--glass-lead);
    }

    .glass-divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: var(--glass-gold);
      border: 2px solid var(--glass-lead);
    }

    /* ============================
       SECTION HEADINGS
       ============================ */
    .section-heading {
      text-align: center;
      padding: 4rem 2rem 2rem;
    }

    .section-heading h2 {
      font-family: 'Cinzel', serif;
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      letter-spacing: 0.1em;
      color: var(--glass-parchment);
    }

    .section-heading p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      color: var(--glass-text-secondary);
      margin-top: 0.5rem;
      font-size: 1.1rem;
    }

    /* ============================
       GLASS PANEL GRID
       ============================ */
    .glass-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 4px;
      background: var(--glass-lead);
      border: 4px solid var(--glass-lead);
      max-width: 1100px;
      margin: 0 auto 3rem;
      position: relative;
    }

    /* ============================
       GLASS CARDS
       ============================ */
    .glass-card {
      background: var(--glass-bg-dark);
      padding: 2.2rem;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .glass-card::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.4s ease;
    }

    .glass-card:hover {
      z-index: 1;
    }

    /* Color variants -- radial glow + hover illumination */
    .glass-card--sapphire::before { background: radial-gradient(ellipse at 50% 30%, rgba(15,82,186,0.22) 0%, rgba(15,82,186,0.06) 55%, transparent 80%); }
    .glass-card--sapphire:hover { box-shadow: inset 0 0 30px rgba(15,82,186,0.15), 0 0 15px rgba(15,82,186,0.1); }
    .glass-card--ruby::before { background: radial-gradient(ellipse at 50% 30%, rgba(155,17,30,0.22) 0%, rgba(155,17,30,0.06) 55%, transparent 80%); }
    .glass-card--ruby:hover { box-shadow: inset 0 0 30px rgba(155,17,30,0.15), 0 0 15px rgba(155,17,30,0.1); }
    .glass-card--emerald::before { background: radial-gradient(ellipse at 50% 30%, rgba(0,148,115,0.22) 0%, rgba(0,148,115,0.06) 55%, transparent 80%); }
    .glass-card--emerald:hover { box-shadow: inset 0 0 30px rgba(0,148,115,0.15), 0 0 15px rgba(0,148,115,0.1); }
    .glass-card--amethyst::before { background: radial-gradient(ellipse at 50% 30%, rgba(123,45,142,0.22) 0%, rgba(123,45,142,0.06) 55%, transparent 80%); }
    .glass-card--amethyst:hover { box-shadow: inset 0 0 30px rgba(123,45,142,0.15), 0 0 15px rgba(123,45,142,0.1); }
    .glass-card--gold::before { background: radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 55%, transparent 80%); }
    .glass-card--gold:hover { box-shadow: inset 0 0 30px rgba(212,175,55,0.12), 0 0 15px rgba(212,175,55,0.08); }

    .glass-card h3 {
      font-family: 'Cinzel', serif;
      font-size: 1.15rem;
      letter-spacing: 0.08em;
      margin-bottom: 0.8rem;
      position: relative;
    }

    .glass-card p {
      color: var(--glass-text-secondary);
      font-size: 1rem;
      line-height: 1.7;
      position: relative;
    }

    .glass-card .card-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
      display: block;
      position: relative;
    }

    /* ============================
       BUTTONS
       ============================ */
    .glass-btn {
      display: inline-block;
      padding: 0.85rem 2.2rem;
      font-family: 'Cinzel', serif;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--glass-parchment);
      background: linear-gradient(
        135deg,
        rgba(15, 82, 186, 0.35) 0%,
        rgba(15, 82, 186, 0.55) 50%,
        rgba(15, 82, 186, 0.3) 100%
      );
      border: 2px solid var(--glass-lead);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .glass-btn::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at 35% 25%,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 50%
      );
      pointer-events: none;
    }

    .glass-btn:hover {
      background: linear-gradient(
        135deg,
        rgba(15, 82, 186, 0.5) 0%,
        rgba(15, 82, 186, 0.7) 50%,
        rgba(15, 82, 186, 0.45) 100%
      );
      box-shadow:
        0 0 15px rgba(15, 82, 186, 0.25),
        inset 0 0 15px rgba(15, 82, 186, 0.12);
      border-color: var(--glass-sapphire);
      color: var(--glass-light);
    }

    .glass-btn:active {
      transform: scale(0.98);
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.25);
    }

    .glass-btn--ruby { background: linear-gradient(135deg, rgba(155,17,30,0.35) 0%, rgba(155,17,30,0.55) 50%, rgba(155,17,30,0.3) 100%); }
    .glass-btn--ruby:hover { background: linear-gradient(135deg, rgba(155,17,30,0.5) 0%, rgba(155,17,30,0.7) 50%, rgba(155,17,30,0.45) 100%); box-shadow: 0 0 15px rgba(155,17,30,0.25), inset 0 0 15px rgba(155,17,30,0.12); border-color: var(--glass-ruby); }
    .glass-btn--gold { background: linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.5) 50%, rgba(212,175,55,0.25) 100%); }
    .glass-btn--gold:hover { background: linear-gradient(135deg, rgba(212,175,55,0.45) 0%, rgba(212,175,55,0.65) 50%, rgba(212,175,55,0.4) 100%); box-shadow: 0 0 15px rgba(212,175,55,0.2), inset 0 0 15px rgba(212,175,55,0.1); border-color: var(--glass-gold); }

    /* ============================
       ABOUT SECTION
       ============================ */
    .about-section {
      max-width: 750px;
      margin: 0 auto;
      padding: 3rem 2rem;
      text-align: center;
    }

    .about-section p {
      color: var(--glass-text-secondary);
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
      text-align: justify;
    }

    /* ============================
       FEATURE PANELS -- 2-column split */
    .feature-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
      background: var(--glass-lead);
      border: 4px solid var(--glass-lead);
      max-width: 1100px;
      margin: 0 auto 3rem;
    }

    .feature-panel {
      background: var(--glass-bg-dark);
      padding: 3rem 2.5rem;
      position: relative;
      overflow: hidden;
    }

    .feature-panel::before { content: ''; position: absolute; inset: 0; pointer-events: none; }
    .feature-panel--left::before { background: radial-gradient(ellipse at 30% 50%, rgba(155,17,30,0.15) 0%, transparent 70%); }
    .feature-panel--right::before { background: radial-gradient(ellipse at 70% 50%, rgba(0,148,115,0.15) 0%, transparent 70%); }

    .feature-panel h3 {
      font-family: 'Cinzel', serif;
      font-size: 1.3rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .feature-panel p {
      color: var(--glass-text-secondary);
      position: relative;
      line-height: 1.75;
    }

    /* CTA Section */
    .cta-section { text-align: center; padding: 5rem 2rem; position: relative; overflow: hidden; }
    .cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 60%); pointer-events: none; }
    .cta-section h2 { font-family: 'Cinzel Decorative', serif; font-size: clamp(1.8rem, 5vw, 3rem); color: var(--glass-gold); margin-bottom: 1rem; position: relative; }
    .cta-section p { color: var(--glass-text-secondary); max-width: 550px; margin: 0 auto 2rem; font-style: italic; position: relative; }

    /* Footer */
    .glass-footer { border-top: 3px solid var(--glass-lead); background: var(--glass-bg-deep); text-align: center; padding: 2.5rem 2rem; }
    .glass-footer p { font-family: 'Cinzel', serif; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--glass-text-secondary); }
    .glass-footer .footer-accent { display: inline-block; width: 8px; height: 8px; background: var(--glass-gold); transform: rotate(45deg); margin: 0 0.8rem; vertical-align: middle; opacity: 0.7; }

    /* Responsive */
    @media (max-width: 768px) {
      .glass-nav { flex-wrap: wrap; }
      .glass-nav a { padding: 0.8rem 1.2rem; font-size: 0.65rem; }
      .glass-hero h1 { font-size: clamp(2rem, 10vw, 3.5rem); }
      .glass-hero::after { width: 350px; height: 350px; }
      .feature-split { grid-template-columns: 1fr; }
      .glass-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- ======== NAVIGATION ======== -->
  <nav class="glass-nav">
    <a href="#home" class="active">Sanctum</a>
    <a href="#about">Chronicle</a>
    <a href="#features">Relics</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Vespers</a>
  </nav>

  <!-- ======== HERO ======== -->
  <header id="home" class="glass-hero">
    <h1>Lux Aeterna</h1>
    <p class="tagline">Light eternal, rendered in glass and lead</p>
    <p class="scroll-hint">Descend into the nave</p>
  </header>

  <!-- ======== DIVIDER ======== -->
  <div class="glass-divider"></div>

  <!-- ======== ABOUT ======== -->
  <div id="about" class="section-heading">
    <h2>The Art of Light</h2>
    <p>Where color is not surface, but substance</p>
  </div>
  <div class="about-section">
    <p>
      For a thousand years, stained glass has transformed the interplay of
      light and color into a medium of storytelling and transcendence.
      Each jewel-toned panel, held fast by dark lines of lead, glows with
      an inner fire that shifts with the passing hours. This is not mere
      decoration -- it is architecture made luminous, stone walls dissolved
      into fields of sapphire, ruby, and gold.
    </p>
    <p>
      In the great cathedrals of Chartres and Sainte-Chapelle, the technique
      reached its zenith: narratives rendered in cobalt and crimson, saints
      haloed in silver-stained gold, the heavens themselves brought down
      to earth through panes of colored glass. This aesthetic carries that
      legacy forward into the digital realm.
    </p>
  </div>

  <!-- ======== DIVIDER ======== -->
  <div class="glass-divider"></div>

  <!-- ======== FEATURES GRID ======== -->
  <div id="features" class="section-heading">
    <h2>Sacred Relics</h2>
    <p>Panels of light, each bearing its own purpose</p>
  </div>
  <div class="glass-grid">
    <div class="glass-card glass-card--sapphire">
      <span class="card-icon">&#9670;</span>
      <h3>Sapphire Clarity</h3>
      <p>The blue of the heavens, symbol of divine truth and the mantle of the Virgin. Used where understanding must shine through.</p>
    </div>
    <div class="glass-card glass-card--ruby">
      <span class="card-icon">&#9670;</span>
      <h3>Ruby Devotion</h3>
      <p>The red of sacrifice and passion. This glass burns with the intensity of conviction, drawing the eye to what matters most.</p>
    </div>
    <div class="glass-card glass-card--emerald">
      <span class="card-icon">&#9670;</span>
      <h3>Emerald Renewal</h3>
      <p>The green of rebirth and eternal spring. A color of hope and growth, it brings life to every composition it touches.</p>
    </div>
    <div class="glass-card glass-card--amethyst">
      <span class="card-icon">&#9670;</span>
      <h3>Amethyst Wisdom</h3>
      <p>The purple of royalty and contemplation. Reserved for the sacred and the profound, it speaks in the language of mystery.</p>
    </div>
    <div class="glass-card glass-card--gold">
      <span class="card-icon">&#9670;</span>
      <h3>Gold Radiance</h3>
      <p>The warmth of divine light itself, achieved through the ancient silver stain technique. Gold illuminates and sanctifies.</p>
    </div>
    <div class="glass-card glass-card--sapphire">
      <span class="card-icon">&#9670;</span>
      <h3>Cathedral Blue</h3>
      <p>A deeper shade of the celestial, for quiet reverence and contemplative spaces where the light is soft and even.</p>
    </div>
  </div>

  <!-- ======== DIVIDER ======== -->
  <div class="glass-divider"></div>

  <!-- ======== FEATURE SPLIT ======== -->
  <div id="gallery" class="section-heading">
    <h2>The Twin Naves</h2>
    <p>Paired panels of contrasting light</p>
  </div>
  <div class="feature-split">
    <div class="feature-panel feature-panel--left">
      <h3>The Rose Window</h3>
      <p>
        Circular, radiating, and symmetrical -- the rose window is the
        crowning achievement of Gothic glaziers. Its geometry speaks of
        cosmic order, each petal of colored glass a meditation on the
        harmony between the earthly and the divine.
      </p>
    </div>
    <div class="feature-panel feature-panel--right">
      <h3>The Lancet</h3>
      <p>
        Tall, narrow, and pointed -- the lancet window draws the eye
        heavenward. Its vertical emphasis embodies the Gothic aspiration
        to transcend the material world, reaching ever upward through
        layers of luminous color.
      </p>
    </div>
  </div>

  <!-- ======== DIVIDER ======== -->
  <div class="glass-divider"></div>

  <!-- ======== CTA ======== -->
  <div id="contact" class="cta-section">
    <h2>Enter the Light</h2>
    <p>Step through the colored glass into a world where every surface glows with meaning.</p>
    <a href="#" class="glass-btn">Begin the Journey</a>
    <span style="display:inline-block; width:1rem;"></span>
    <a href="#" class="glass-btn glass-btn--ruby">Light a Candle</a>
    <span style="display:inline-block; width:1rem;"></span>
    <a href="#" class="glass-btn glass-btn--gold">Illuminate</a>
  </div>

  <!-- ======== FOOTER ======== -->
  <footer class="glass-footer">
    <p>
      <span class="footer-accent"></span>
      Lux Aeterna
      <span class="footer-accent"></span>
      Stained Glass Aesthetic
      <span class="footer-accent"></span>
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use CSS Grid `gap` as lead lines** -- set the grid container's `background` to your lead color and use `gap: 3-5px`; child elements get their own dark background, and the gap becomes visible as the structural lead came between panels
- **Layer radial gradients for the glow effect** -- a single flat `background-color` on a panel looks lifeless; add a `::before` pseudo-element with a `radial-gradient` (brighter center, transparent edges) to simulate light passing through glass
- **Prefer `rgba()` over solid hex for panel colors** -- translucency is essential; always let the dark background bleed through slightly to maintain the light-through-material illusion
- **Use `box-shadow: inset` for inner illumination** -- on hover or for primary panels, an inset box-shadow with a colored glow simulates the way stained glass brightens when sunlight intensifies behind it
- **Apply subtle noise texture via SVG data URIs** -- real glass has imperfections; a faint `feTurbulence` SVG filter (at 0.02-0.05 opacity) overlaid with `mix-blend-mode: overlay` adds the hand-blown irregularity that makes digital glass feel authentic
- **Test on dark backgrounds only** -- the entire aesthetic collapses on light backgrounds; if you need a light-mode variant, invert the paradigm completely by using dark lead lines on a bright surface with heavily saturated flat-color fills (this becomes a fundamentally different look)
- **Keep border/gap widths consistent** -- inconsistent lead-line widths break the illusion; establish a 3-4px standard for major divisions and 2px for subdivisions, and maintain it rigorously across all breakpoints
- **Use `text-shadow` with colored glow for headings** -- a subtle colored `text-shadow` (e.g., `0 0 30px rgba(212, 175, 55, 0.3)`) on gold headings makes them feel like they are radiating light, reinforcing the luminous quality of the entire composition
