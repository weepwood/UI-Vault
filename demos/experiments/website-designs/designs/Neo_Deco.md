# Neo Deco Design Reference

## Overview

Neo Deco is the contemporary revival of 1920s and 1930s Art Deco, filtering the original movement's core principles -- symmetry, geometry, and decorative sensibility -- through a modern lens of restraint, material honesty, and functional elegance. Where classic Art Deco celebrated the machine age with exuberant opulence and lavish ornamentation, Neo Deco works through subtraction: decoration becomes graphic gesture, surfaces are simplified, and color palettes are deepened and controlled rather than brightly saturated.

The aesthetic emerged as a reaction against both sterile minimalism and disposable fast-decor, offering a middle path that prioritizes depth, character, and visible craftsmanship. It retains iconic Art Deco geometries -- crisp chevrons, sunburst motifs, fan arches, and stepped forms -- but renders them in sharper, more refined ways suited to contemporary spaces and digital interfaces. The result is a sleeker, moodier version of its predecessor, one that feels architectural and intentional without tipping into museum-piece rigidity.

In web and UI design, Neo Deco translates to dark, rich backgrounds paired with warm metallic accents (gold, brass, brushed chrome), geometric border treatments, symmetrical grid layouts, and typography that balances Art Deco display confidence with modern readability. Materials like veined marble, smoked glass, satin brass, and lacquered surfaces find digital expression through carefully crafted gradients, textured overlays, and luminous metallic effects. The palette centers on deepened jewel tones -- bottle green, midnight blue, burgundy, dark terracotta -- balanced against warm neutrals like ivory, sand, and graphite. Every element communicates structured richness: luxury that is earned through proportion and craftsmanship rather than excess.

Neo Deco is particularly resonant in 2025-2026 design culture, identified by Pinterest and design forecasters as a leading trend that merges Art Deco glamour with modern comfort, reflecting a broader cultural shift toward layered sophistication and heritage-quality aesthetics in both physical and digital spaces.

---

## Visual Characteristics

### Core Design Traits

- **Geometric precision** -- chevrons, fan arches, stepped forms, and sunburst motifs rendered with clean, sharp edges rather than ornate filigree
- **Warm metallic accents** -- gold, brass, and brushed chrome used as borders, dividers, and typographic highlights to create luminous focal points
- **Deepened jewel tone palette** -- bottle green, midnight navy, burgundy, and dark amber replace the brighter primaries of classic Art Deco
- **Symmetrical compositions** -- strong bilateral and radial symmetry throughout layouts, reinforcing formality and architectural authority
- **Stepped and tiered structures** -- ziggurat-inspired layering in section breaks, card frames, and navigation elements
- **Restrained ornamentation** -- geometric decoration applied selectively as graphic gesture rather than saturating every surface
- **Layered depth through material contrast** -- matte dark backgrounds paired with glossy metallic elements and translucent smoked-glass panels
- **Herringbone and chevron patterns** -- used as subtle background textures or section dividers, connecting to Art Deco's love of repetitive geometric fills
- **Architectural detailing** -- corner brackets, double-line borders, and inset frames that suggest built environments rather than flat screens
- **Warm-cool material tension** -- cool chrome and marble textures balanced against warm wood, brass, and velvet-inspired surfaces
- **Fan and arch motifs** -- semicircular decorative elements with internal geometric divisions used as headers, dividers, or background accents
- **Controlled negative space** -- generous spacing around ornamented elements allows each geometric detail to register clearly

### Design Principles

- Treat decoration as structure, not embellishment -- every ornamental element should reinforce the layout grid
- Prioritize material honesty over illusion; textures should feel tactile and authentic, never plastic or artificial
- Maintain strict symmetry in primary compositions; break symmetry only with deliberate, confident intention
- Use metallic accents as chromatic punctuation, not background wallpaper -- gold and chrome should draw the eye, not overwhelm it
- Balance warmth and formality: the space should feel refined but livable, never sterile or cold
- Build hierarchy through scale and weight rather than color variety -- oversized headings, medium subheadings, refined body text
- Allow craft to be visible: hand-rubbed finishes, deliberate imperfections, and natural material grain over machine-perfect uniformity
- Reserve the richest colors and strongest metallic effects for primary focal points and calls to action

---

## Color Palette

Neo Deco color palettes are intense but never overpowering. The foundation is dark and warm -- graphite, charcoal, and deep navy -- against which deepened jewel tones and warm metallics create controlled moments of richness. Unlike classic Art Deco's bright emerald and ruby, Neo Deco shifts toward bottle green, burgundy, and inky blue. Metals play a chromatic role: warm brass, oxidized bronze, and brushed nickel act as accents that capture and reflect light.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Graphite Black | `#1B1B1F` | Primary background, deepest layer |
| Charcoal Warm | `#2A2A2E` | Card backgrounds, secondary surfaces |
| Slate Deco | `#3A3A42` | Elevated panels, borders, dividers |
| Deep Navy | `#0F1A2E` | Alternative dark background, section contrast |
| Bottle Green | `#1A4D3E` | Primary jewel accent, feature panels |
| Burgundy | `#6B1D2A` | Secondary jewel accent, highlights |
| Midnight Blue | `#1A2744` | Tertiary accent, data panels |
| Dark Amber | `#8B6914` | Warm accent, decorative details |
| Satin Gold | `#C9A84C` | Primary metallic, borders, headings |
| Light Gold | `#E4D08E` | Metallic highlight, hover states |
| Brushed Chrome | `#B8BFC6` | Secondary metallic, subtle accents |
| Ivory Warm | `#F2EDE3` | Primary text on dark backgrounds |
| Sand | `#D9CDB8` | Secondary text, muted labels |
| Terracotta Deep | `#8B4A2B` | Warm decorative accent, badges |
| Marble White | `#F8F5F0` | Light background variant, contrast sections |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --neo-deco-bg-primary: #1B1B1F;
  --neo-deco-bg-secondary: #2A2A2E;
  --neo-deco-bg-elevated: #3A3A42;
  --neo-deco-bg-navy: #0F1A2E;

  /* Jewel Tones */
  --neo-deco-green: #1A4D3E;
  --neo-deco-burgundy: #6B1D2A;
  --neo-deco-blue: #1A2744;
  --neo-deco-amber: #8B6914;
  --neo-deco-terracotta: #8B4A2B;

  /* Metallics */
  --neo-deco-gold: #C9A84C;
  --neo-deco-gold-light: #E4D08E;
  --neo-deco-chrome: #B8BFC6;
  --neo-deco-gold-gradient: linear-gradient(
    135deg, #A67C2E, #C9A84C, #E4D08E, #C9A84C, #A67C2E
  );

  /* Text */
  --neo-deco-text-primary: #F2EDE3;
  --neo-deco-text-secondary: #D9CDB8;
  --neo-deco-text-muted: #8A8380;

  /* Light Theme */
  --neo-deco-bg-light: #F8F5F0;
  --neo-deco-text-dark: #1B1B1F;

  /* Functional */
  --neo-deco-border: #C9A84C;
  --neo-deco-border-subtle: rgba(201, 168, 76, 0.25);
  --neo-deco-shadow: rgba(0, 0, 0, 0.35);
}
```

---

## Typography

Neo Deco typography inherits Art Deco's geometric confidence and uppercase display energy but tempers it with contemporary restraint and readability. Headlines use bold geometric typefaces with wide letter-spacing and classical proportions, while body text shifts to elegant, light-weight sans-serifs that maintain legibility at extended reading lengths. The overall effect is authoritative yet refined -- type that commands attention without shouting.

### Recommended Google Fonts

| Font | Weight(s) | Style | Usage |
|------|-----------|-------|-------|
| **Josefin Sans** | 300, 400, 600, 700 | Geometric, vintage elegance | Primary headlines, display text |
| **Poiret One** | 400 | Thin geometric, Art Deco essence | Feature titles, decorative headings |
| **Cinzel** | 400, 600, 700 | Classical serif, architectural | Formal headings, section titles |
| **Cinzel Decorative** | 400, 700 | Ornamental classical serif | Hero headlines, logos |
| **Cormorant Garamond** | 300, 400, 600 | Elegant high-contrast serif | Subheadings, pull quotes |
| **Raleway** | 200, 300, 400, 500, 600 | Thin geometric sans-serif | Body text, interface labels |
| **Tenor Sans** | 400 | Clean geometric sans | Body copy, secondary text |
| **Bebas Neue** | 400 | Bold condensed uppercase | Banners, impact headlines |
| **Playfair Display** | 400, 600, 700 | High-contrast transitional serif | Editorial headlines, luxury feel |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Cinzel Decorative** (700) | **Raleway** (300) | Opulent luxury, formal elegance |
| **Josefin Sans** (600) | **Tenor Sans** (400) | Geometric purity, clean Deco |
| **Playfair Display** (700) | **Raleway** (300) | Editorial luxury, magazine quality |
| **Bebas Neue** (400) | **Cormorant Garamond** (400) | Bold impact paired with refined body |
| **Poiret One** (400) | **Raleway** (200) | Delicate, high-fashion, display-forward |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Josefin+Sans:wght@300;400;600;700&family=Raleway:wght@200;300;400;500&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Josefin Sans', 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--neo-deco-gold);
  font-weight: 600;
  line-height: 1.2;
}

/* Display / Hero text */
.neo-deco-display {
  font-family: 'Cinzel Decorative', 'Josefin Sans', serif;
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.05;
  text-transform: uppercase;
  background: var(--neo-deco-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Body text */
body {
  font-family: 'Raleway', 'Tenor Sans', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.02em;
  line-height: 1.75;
  color: var(--neo-deco-text-primary);
}

/* Subheadings */
.neo-deco-subtitle {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1.15rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--neo-deco-text-secondary);
}
```

---

## Layout Principles

- **Symmetrical grid structures** -- center-aligned content with mirrored columns and strong vertical axes that reference Art Deco architectural formality
- **Generous vertical spacing** -- sections separated by ample padding (80-120px) with geometric dividers, allowing each composition block to breathe
- **Stepped and tiered sections** -- content blocks arranged in pyramid or ziggurat formations, using indentation and width variation to create visual hierarchy
- **Geometric section dividers** -- chevron lines, double-rule borders, fan motifs, and stepped separators between major content areas instead of simple horizontal rules
- **Modular grid with golden proportions** -- column widths and spacing informed by classical ratios, reinforcing the architectural quality of the layout
- **Angular containers and frames** -- cards, panels, and hero sections bounded by geometric borders with corner ornaments rather than simple rounded rectangles
- **Dark-dominant full-bleed backgrounds** -- the viewport is a dark canvas; light sections appear as deliberate, framed exceptions rather than the default
- **Content hierarchy through scale** -- dramatic size differences between display headlines, subheadings, and body text (3:1 or greater ratio between hero and body)
- **Centered primary content** -- text blocks and feature cards align to a central vertical spine, reinforcing bilateral symmetry
- **Maximum content width of 1100-1200px** -- wide enough for multi-column layouts but narrow enough to maintain composed, architectural proportions
- **Metallic accent distribution** -- gold and chrome elements distributed evenly through the layout as a rhythmic pattern, appearing at consistent intervals

---

## CSS / Design Techniques

### Neo Deco Card Component

```css
.neo-deco-card {
  background: var(--neo-deco-bg-secondary);
  border: 1px solid var(--neo-deco-border-subtle);
  padding: 2.5rem;
  position: relative;
  text-align: center;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.neo-deco-card:hover {
  border-color: var(--neo-deco-gold);
  box-shadow: 0 8px 32px var(--neo-deco-shadow);
}

/* Geometric corner ornaments */
.neo-deco-card::before,
.neo-deco-card::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: var(--neo-deco-gold);
  border-style: solid;
  transition: width 0.3s ease, height 0.3s ease;
}

.neo-deco-card::before {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.neo-deco-card::after {
  bottom: 10px;
  right: 10px;
  border-width: 0 2px 2px 0;
}

.neo-deco-card:hover::before,
.neo-deco-card:hover::after {
  width: 36px;
  height: 36px;
}

/* Card grid layout */
.neo-deco-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
}
```

### Neo Deco Button

```css
.neo-deco-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--neo-deco-gold);
  border: 1px solid var(--neo-deco-gold);
  padding: 14px 40px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease;
}

.neo-deco-button:hover {
  background: var(--neo-deco-gold);
  color: var(--neo-deco-bg-primary);
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
}

/* Stepped outline variant */
.neo-deco-button--stepped {
  border: 2px solid var(--neo-deco-gold);
  outline: 1px solid var(--neo-deco-gold);
  outline-offset: 4px;
}

.neo-deco-button--stepped:hover {
  outline-offset: 6px;
}

/* Filled variant with gold gradient */
.neo-deco-button--filled {
  background: var(--neo-deco-gold-gradient);
  color: var(--neo-deco-bg-primary);
  border: none;
  font-weight: 700;
}

.neo-deco-button--filled:hover {
  filter: brightness(1.15);
  box-shadow: 0 4px 24px rgba(201, 168, 76, 0.35);
}
```

### Neo Deco Navigation Bar

```css
.neo-deco-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  border-bottom: 1px solid var(--neo-deco-border-subtle);
}

.neo-deco-nav__logo {
  font-family: 'Cinzel Decorative', serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--neo-deco-gold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.neo-deco-nav__links {
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.neo-deco-nav__links a {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--neo-deco-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
  position: relative;
}

.neo-deco-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--neo-deco-gold);
  transition: width 0.3s ease, left 0.3s ease;
}

.neo-deco-nav__links a:hover,
.neo-deco-nav__links a.active {
  color: var(--neo-deco-gold);
}

.neo-deco-nav__links a:hover::after,
.neo-deco-nav__links a.active::after {
  width: 100%;
  left: 0;
}
```

### Neo Deco Hero Section

```css
.neo-deco-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 40px;
  background: var(--neo-deco-bg-primary);
  overflow: hidden;
}

/* Subtle herringbone background pattern */
.neo-deco-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(45deg, rgba(201, 168, 76, 0.03) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(201, 168, 76, 0.03) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(201, 168, 76, 0.03) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(201, 168, 76, 0.03) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
  pointer-events: none;
}

/* Decorative top border with stepped effect */
.neo-deco-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: var(--neo-deco-gold-gradient);
}

.neo-deco-hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.neo-deco-hero__content h1 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: var(--neo-deco-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.neo-deco-hero__content p {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 1.15rem;
  color: var(--neo-deco-text-secondary);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  letter-spacing: 0.03em;
}

@media (max-width: 768px) {
  .neo-deco-hero {
    min-height: auto;
    padding: 80px 20px;
  }
}
```

### Gold Metallic Gradient Effects

```css
/* Gold gradient text */
.neo-deco-gold-text {
  background: linear-gradient(
    135deg,
    #A67C2E, #C9A84C, #E4D08E, #C9A84C, #A67C2E
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gold metallic border */
.neo-deco-gold-border {
  border: 2px solid transparent;
  border-image: linear-gradient(
    135deg,
    #A67C2E, #C9A84C, #E4D08E, #C9A84C
  ) 1;
}

/* Chrome / brushed metal gradient */
.neo-deco-chrome-surface {
  background: linear-gradient(
    135deg,
    #9EA5AD, #B8BFC6, #D4DAE0, #B8BFC6, #9EA5AD
  );
}

/* Stepped double-border frame */
.neo-deco-frame {
  border: 2px solid var(--neo-deco-gold);
  outline: 1px solid var(--neo-deco-gold);
  outline-offset: 6px;
  padding: 2.5rem;
}
```

### Geometric Dividers and Separators

```css
/* Double-line geometric divider */
.neo-deco-divider {
  height: 0;
  border: none;
  border-top: 2px solid var(--neo-deco-gold);
  border-bottom: 1px solid var(--neo-deco-gold);
  margin: 3rem auto;
  width: 50%;
  position: relative;
  padding-top: 4px;
}

/* Diamond center accent */
.neo-deco-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: var(--neo-deco-gold);
  transform: translate(-50%, -50%) rotate(45deg);
}

/* Chevron separator */
.neo-deco-chevron-divider {
  text-align: center;
  margin: 3rem 0;
  position: relative;
}

.neo-deco-chevron-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--neo-deco-border-subtle);
}

.neo-deco-chevron-divider::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border-right: 2px solid var(--neo-deco-gold);
  border-bottom: 2px solid var(--neo-deco-gold);
  transform: rotate(45deg);
  background: var(--neo-deco-bg-primary);
  position: relative;
  z-index: 1;
}

/* Fan arch decorative element */
.neo-deco-fan {
  width: 180px;
  height: 90px;
  background: conic-gradient(
    from 180deg at 50% 100%,
    var(--neo-deco-gold) 0deg,
    transparent 15deg,
    var(--neo-deco-gold) 30deg,
    transparent 45deg,
    var(--neo-deco-gold) 60deg,
    transparent 75deg,
    var(--neo-deco-gold) 90deg,
    transparent 105deg,
    var(--neo-deco-gold) 120deg,
    transparent 135deg,
    var(--neo-deco-gold) 150deg,
    transparent 165deg,
    var(--neo-deco-gold) 180deg
  );
  border-radius: 180px 180px 0 0;
  opacity: 0.15;
  margin: 0 auto;
}
```

### Marble Texture Overlay

```css
/* Simulated marble veining background */
.neo-deco-marble {
  position: relative;
  background: var(--neo-deco-bg-light);
  color: var(--neo-deco-text-dark);
}

.neo-deco-marble::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(180, 170, 155, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(160, 150, 130, 0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 60% 80%, rgba(170, 160, 140, 0.12) 0%, transparent 45%);
  pointer-events: none;
}
```

---

## Design Do's and Don'ts

### Do's

- Use deep, warm dark backgrounds as the primary canvas -- graphite, charcoal, and navy create the moody foundation Neo Deco requires
- Apply gold and brass metallic accents as deliberate focal points on borders, headings, dividers, and calls to action
- Maintain strict bilateral symmetry in primary layouts, with content centered on a strong vertical axis
- Use geometric dividers (chevrons, double-rules, diamond accents, fan motifs) between sections instead of plain horizontal lines
- Choose typefaces with geometric Art Deco DNA (Josefin Sans, Cinzel, Poiret One) and set headlines in uppercase with generous letter-spacing
- Layer stepped borders and corner ornaments on cards and panels to evoke architectural detailing
- Balance richness with restraint -- limit jewel tone accents to one or two per section, allowing the dark background to anchor the composition

### Don'ts

- Saturate the page with metallic effects -- if every element is gold, the accent loses its power and the design becomes gaudy
- Use rounded, bubbly typefaces or playful sans-serifs that undermine the architectural gravitas of the aesthetic
- Apply bright, fully saturated primary colors (pure red, electric blue, neon green) -- Neo Deco favors deepened, moody jewel tones
- Neglect contrast and readability -- warm ivory text on dark backgrounds must still meet WCAG accessibility standards
- Mix too many ornamental patterns (herringbone + chevron + sunburst + fan) in a single viewport -- choose one geometric motif per section
- Use casually rounded corners on cards and buttons -- Neo Deco prefers sharp edges, stepped corners, or very subtle rounding (2-4px maximum)
- Introduce organic, flowing, or hand-drawn elements -- the aesthetic is architecturally geometric, not natural or freeform
- Rely on drop shadows alone for depth -- use border treatments, stepped outlines, and material contrast instead

---

## Related Aesthetics

| Aesthetic | Relationship to Neo Deco |
|-----------|--------------------------|
| **Art Deco** | Direct ancestor; Neo Deco inherits its geometric vocabulary and metallic palette but applies contemporary restraint and moodier tones |
| **Hollywood Regency** | Shares the luxury-forward sensibility and metallic accents; Hollywood Regency is more maximalist and eclectic |
| **Bauhaus** | Both prize geometric precision and structural clarity; Bauhaus is minimalist and functional, Neo Deco adds decorative warmth |
| **Japandi** | Both value restraint, natural materials, and craftsmanship; Japandi is neutral and minimal, Neo Deco is darker and metallic |
| **Dark Academia** | Overlaps in dark, warm palettes and appreciation for heritage; Dark Academia is literary and organic, Neo Deco is geometric and architectural |
| **Chromecore** | Shares the metallic surface fascination; Chromecore is cooler and more futuristic, Neo Deco is warmer and historically rooted |
| **Grandmillennial** | Both revive historical styles with modern sensibility; Grandmillennial is softer, textile-focused, and floral |
| **Glassmorphism** | Neo Deco can borrow translucent panel techniques, but replaces the frosted-glass effect with smoked glass and geometric frames |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neo Deco Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Josefin+Sans:wght@300;400;600;700&family=Raleway:wght@200;300;400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Backgrounds */
      --nd-bg-primary: #1B1B1F;
      --nd-bg-secondary: #2A2A2E;
      --nd-bg-elevated: #3A3A42;
      --nd-bg-navy: #0F1A2E;

      /* Jewel Tones */
      --nd-green: #1A4D3E;
      --nd-burgundy: #6B1D2A;
      --nd-blue: #1A2744;
      --nd-amber: #8B6914;
      --nd-terracotta: #8B4A2B;

      /* Metallics */
      --nd-gold: #C9A84C;
      --nd-gold-light: #E4D08E;
      --nd-chrome: #B8BFC6;
      --nd-gold-gradient: linear-gradient(
        135deg, #A67C2E, #C9A84C, #E4D08E, #C9A84C, #A67C2E
      );

      /* Text */
      --nd-text-primary: #F2EDE3;
      --nd-text-secondary: #D9CDB8;
      --nd-text-muted: #8A8380;

      /* Functional */
      --nd-border: #C9A84C;
      --nd-border-subtle: rgba(201, 168, 76, 0.25);
      --nd-shadow: rgba(0, 0, 0, 0.35);

      /* Light */
      --nd-bg-light: #F8F5F0;
      --nd-text-dark: #1B1B1F;
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
      background: var(--nd-bg-primary);
      color: var(--nd-text-primary);
      font-family: 'Raleway', 'Helvetica Neue', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      letter-spacing: 0.02em;
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Josefin Sans', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nd-gold);
      font-weight: 600;
      line-height: 1.2;
    }

    a {
      color: var(--nd-gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--nd-gold-light);
    }

    img {
      max-width: 100%;
      height: auto;
    }

    /* --- Navigation --- */

    .nav-wrapper {
      border-bottom: 1px solid var(--nd-border-subtle);
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 40px;
    }

    .nav-logo {
      font-family: 'Cinzel Decorative', serif;
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--nd-gold);
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .nav-links {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      color: var(--nd-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 1px;
      background: var(--nd-gold);
      transition: width 0.3s ease, left 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--nd-gold);
    }

    .nav-links a:hover::after {
      width: 100%;
      left: 0;
    }

    /* --- Hero Section --- */

    .hero {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 100px 40px;
      overflow: hidden;
    }

    /* Herringbone background pattern */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(45deg, rgba(201, 168, 76, 0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(201, 168, 76, 0.03) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(201, 168, 76, 0.03) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(201, 168, 76, 0.03) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0;
      pointer-events: none;
    }

    /* Top gold bar */
    .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 3px;
      background: var(--nd-gold-gradient);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    .hero h1 {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(2.5rem, 7vw, 5.5rem);
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      background: var(--nd-gold-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nd-text-secondary);
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.1rem;
      color: var(--nd-text-secondary);
      max-width: 600px;
      margin: 0 auto 2.5rem;
      line-height: 1.8;
    }

    /* Decorative fan element */
    .hero-fan {
      width: 120px;
      height: 60px;
      background: conic-gradient(
        from 180deg at 50% 100%,
        var(--nd-gold) 0deg,
        transparent 15deg,
        var(--nd-gold) 30deg,
        transparent 45deg,
        var(--nd-gold) 60deg,
        transparent 75deg,
        var(--nd-gold) 90deg,
        transparent 105deg,
        var(--nd-gold) 120deg,
        transparent 135deg,
        var(--nd-gold) 150deg,
        transparent 165deg,
        var(--nd-gold) 180deg
      );
      border-radius: 120px 120px 0 0;
      opacity: 0.2;
      margin: 0 auto 2rem;
    }

    /* --- Buttons --- */

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      color: var(--nd-gold);
      border: 1px solid var(--nd-gold);
      padding: 14px 44px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    .btn:hover {
      background: var(--nd-gold);
      color: var(--nd-bg-primary);
      box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
    }

    .btn--filled {
      background: var(--nd-gold-gradient);
      color: var(--nd-bg-primary);
      border: none;
      font-weight: 700;
    }

    .btn--filled:hover {
      filter: brightness(1.15);
      box-shadow: 0 4px 24px rgba(201, 168, 76, 0.35);
    }

    .btn--stepped {
      border: 2px solid var(--nd-gold);
      outline: 1px solid var(--nd-gold);
      outline-offset: 4px;
    }

    .btn--stepped:hover {
      background: var(--nd-gold);
      color: var(--nd-bg-primary);
      outline-offset: 6px;
    }

    /* --- Dividers --- */

    .divider {
      height: 0;
      border: none;
      border-top: 2px solid var(--nd-gold);
      border-bottom: 1px solid var(--nd-gold);
      margin: 0 auto;
      width: 40%;
      padding-top: 4px;
      position: relative;
    }

    .divider::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background: var(--nd-gold);
      transform: translate(-50%, -50%) rotate(45deg);
    }

    /* --- Features Section --- */

    .features {
      padding: 100px 40px;
      background: var(--nd-bg-primary);
    }

    .features-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .features-header h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .features-header p {
      color: var(--nd-text-secondary);
      max-width: 550px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      background: var(--nd-bg-secondary);
      border: 1px solid var(--nd-border-subtle);
      padding: 2.5rem;
      text-align: center;
      position: relative;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }

    .feature-card:hover {
      border-color: var(--nd-gold);
      box-shadow: 0 8px 32px var(--nd-shadow);
    }

    /* Corner ornaments */
    .feature-card::before,
    .feature-card::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      border-color: var(--nd-gold);
      border-style: solid;
      transition: width 0.3s ease, height 0.3s ease;
    }

    .feature-card::before {
      top: 10px;
      left: 10px;
      border-width: 2px 0 0 2px;
    }

    .feature-card::after {
      bottom: 10px;
      right: 10px;
      border-width: 0 2px 2px 0;
    }

    .feature-card:hover::before,
    .feature-card:hover::after {
      width: 32px;
      height: 32px;
    }

    .feature-card .icon {
      font-size: 2rem;
      margin-bottom: 1.2rem;
      display: block;
      color: var(--nd-gold);
    }

    .feature-card h3 {
      font-size: 1rem;
      margin-bottom: 0.8rem;
      letter-spacing: 0.15em;
    }

    .feature-card p {
      color: var(--nd-text-secondary);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* --- About / Jewel Section --- */

    .about {
      padding: 100px 40px;
      background: var(--nd-bg-navy);
      position: relative;
    }

    .about::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--nd-gold-gradient);
    }

    .about-inner {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    .about h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    .about p {
      color: var(--nd-text-secondary);
      font-size: 1.05rem;
      line-height: 1.9;
      margin-bottom: 1.5rem;
    }

    .about blockquote {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nd-gold-light);
      border-left: 3px solid var(--nd-gold);
      padding-left: 1.5rem;
      margin: 2.5rem auto;
      max-width: 600px;
      text-align: left;
      font-style: italic;
      letter-spacing: 0.04em;
    }

    /* --- Gallery Section --- */

    .gallery {
      padding: 100px 40px;
      background: var(--nd-bg-primary);
    }

    .gallery-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .gallery-header h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .gallery-item {
      aspect-ratio: 1;
      background: var(--nd-bg-secondary);
      border: 1px solid var(--nd-border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 0.8rem;
      color: var(--nd-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      transition: background 0.4s ease, border-color 0.4s ease;
    }

    .gallery-item:hover {
      background: var(--nd-bg-elevated);
      border-color: var(--nd-gold);
    }

    .gallery-item--accent {
      background: var(--nd-green);
    }

    .gallery-item--warm {
      background: var(--nd-burgundy);
    }

    .gallery-item--deep {
      background: var(--nd-blue);
    }

    /* --- CTA Section --- */

    .cta {
      text-align: center;
      padding: 100px 40px;
      background: var(--nd-bg-secondary);
      position: relative;
    }

    .cta::before,
    .cta::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--nd-border-subtle);
    }

    .cta::before { top: 0; }
    .cta::after { bottom: 0; }

    .cta h2 {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
    }

    .cta p {
      color: var(--nd-text-secondary);
      max-width: 500px;
      margin: 0 auto 2.5rem;
      font-size: 1.05rem;
    }

    /* --- Footer --- */

    footer {
      text-align: center;
      padding: 40px;
      border-top: 1px solid var(--nd-border-subtle);
    }

    .footer-logo {
      font-family: 'Cinzel Decorative', serif;
      font-weight: 400;
      font-size: 1rem;
      color: var(--nd-gold);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    footer p {
      color: var(--nd-text-muted);
      font-size: 0.85rem;
    }

    /* --- Responsive --- */

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 16px;
        padding: 16px 20px;
      }

      .nav-links {
        gap: 20px;
      }

      .hero {
        min-height: auto;
        padding: 80px 20px;
      }

      .features,
      .about,
      .gallery,
      .cta {
        padding: 60px 20px;
      }

      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .btn {
        padding: 12px 32px;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <div class="nav-wrapper">
    <nav>
      <a href="#" class="nav-logo">Aurelian</a>
      <ul class="nav-links">
        <li><a href="#features">Collection</a></li>
        <li><a href="#about">Heritage</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-fan"></div>
      <div class="hero-subtitle">Geometric Luxury Redefined</div>
      <h1>Neo Deco</h1>
      <p>
        Where Art Deco geometry meets modern restraint.
        Structured richness, warm metallics, and architectural
        elegance for the contemporary era.
      </p>
      <a href="#features" class="btn">Explore Collection</a>
    </div>
  </section>

  <!-- Divider -->
  <hr class="divider">

  <!-- Features Section -->
  <section class="features" id="features">
    <div class="features-header">
      <h2>The Collection</h2>
      <p>
        Crafted with precision, each piece balances geometric
        authority with warm, tactile refinement.
      </p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <span class="icon">&#9670;</span>
        <h3>Geometric Precision</h3>
        <p>
          Clean chevrons, stepped forms, and fan arches
          rendered with architectural clarity and intentional restraint.
        </p>
      </div>
      <div class="feature-card">
        <span class="icon">&#9674;</span>
        <h3>Metallic Warmth</h3>
        <p>
          Satin gold, brushed brass, and warm chrome accents
          that capture light and create luminous focal points.
        </p>
      </div>
      <div class="feature-card">
        <span class="icon">&#9632;</span>
        <h3>Material Honesty</h3>
        <p>
          Natural wood grain, veined marble, and hand-finished
          surfaces that develop authentic character over time.
        </p>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="about-inner">
      <h2>Heritage Reimagined</h2>
      <p>
        Neo Deco draws from the symmetry, geometry, and decorative
        sensibility of the original Art Deco movement, filtering them
        through a contemporary lens of restraint and material honesty.
      </p>
      <blockquote>
        "Decoration becomes graphic gesture, surfaces are simplified,
        and color palettes are deepened and controlled."
      </blockquote>
      <p>
        The result is structured richness -- luxury earned through
        proportion and craftsmanship rather than excess. Every line,
        every metallic accent, every jewel-toned panel serves the
        architecture of the whole.
      </p>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="gallery" id="gallery">
    <div class="gallery-header">
      <h2>Palette</h2>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item gallery-item--accent">Bottle Green</div>
      <div class="gallery-item gallery-item--warm">Burgundy</div>
      <div class="gallery-item gallery-item--deep">Midnight Blue</div>
      <div class="gallery-item" style="background: var(--nd-amber);">Dark Amber</div>
      <div class="gallery-item" style="background: var(--nd-gold);">Satin Gold</div>
      <div class="gallery-item" style="background: var(--nd-terracotta);">Terracotta</div>
      <div class="gallery-item" style="background: var(--nd-bg-elevated);">Slate Deco</div>
      <div class="gallery-item" style="background: var(--nd-chrome); color: var(--nd-text-dark);">Chrome</div>
      <div class="gallery-item" style="background: var(--nd-bg-light); color: var(--nd-text-dark);">Marble White</div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta" id="contact">
    <h2>Begin Your Design</h2>
    <p>
      Step into structured richness. Geometric luxury
      awaits your next project.
    </p>
    <a href="#" class="btn--stepped btn">Get Started</a>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-logo">Aurelian</div>
    <p>Geometric luxury, modern restraint. Built with Neo Deco principles.</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Gold gradient rendering** -- always use a multi-stop linear gradient for metallic gold effects (`#A67C2E` to `#C9A84C` to `#E4D08E` and back) rather than a flat gold hex value; the gradient creates the luminous shift that distinguishes satin metal from flat color
- **Font loading strategy** -- load Cinzel Decorative only for display headlines and Josefin Sans for subheadings; use Raleway as the primary body font to keep the page weight manageable while maintaining the geometric personality
- **Corner ornament sizing** -- scale corner bracket decorations proportionally with card size; 24-28px works for standard cards, 16-20px for compact items, and 36-40px for hero-scale panels
- **Stepped border technique** -- combine `border` with `outline` and `outline-offset` to create the characteristic Neo Deco double-frame effect without extra HTML elements
- **Dark background contrast** -- test all text against the dark backgrounds using a contrast checker; warm ivory (`#F2EDE3`) on graphite (`#1B1B1F`) achieves approximately 13:1 contrast, well above WCAG AAA requirements
- **Geometric pattern subtlety** -- keep herringbone and chevron background patterns at very low opacity (0.02-0.05) so they add texture without competing with foreground content
- **Responsive symmetry** -- on mobile breakpoints, maintain the centered vertical axis and symmetrical alignment even as multi-column grids collapse to single columns; the feeling of formality should persist at every viewport width
- **Performance consideration** -- gold gradient text (`background-clip: text`) triggers GPU compositing; limit this technique to headlines and key display elements rather than applying it to all heading levels
