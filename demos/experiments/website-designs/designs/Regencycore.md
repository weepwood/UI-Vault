# Regencycore Design Reference

## Overview

Regencycore is a design aesthetic inspired by the English Regency era (1811-1820), popularized in modern culture by the Netflix series Bridgerton and the broader resurgence of interest in Regency-period romance novels. Rather than a strict historical recreation, Regencycore reinterprets the period's elegance through a contemporary lens, blending the classical proportions and restraint of Neoclassicism with the ornamental richness of late Georgian decorative arts. The style centers on empire waistlines, soft pastels, gold filigree, damask patterns, and an overarching sense of refined aristocratic grace.

In web and digital design, Regencycore translates into layouts governed by classical symmetry and generous whitespace, evoking the proportioned harmony of a Regency-era drawing room. Typography leans on high-contrast serif faces reminiscent of Didone typefaces popular in the early 19th century, paired with delicate calligraphic scripts for decorative accents. Color palettes draw from the period's documented preferences: soft celestial blues, maiden blush pinks, apple greens, and cream whites, punctuated by deeper jewel tones like emerald, sapphire, and ruby for dramatic contrast. Gold appears throughout as filigree borders, ornamental dividers, and metallic accent details, referencing the gilt plasterwork, gilded mirrors, and ormolu that defined Regency interiors.

The aesthetic distinguishes itself from related styles like Cottagecore (which is rustic and pastoral) and Rococo (which is more exuberant and asymmetric) by maintaining a Neoclassical sense of order and proportion. Regencycore is formal without being cold, ornamental without being chaotic, and romantic without losing structural clarity. It draws on Greco-Roman design principles filtered through the English sensibility of architects like John Nash and designers like Thomas Hope, who championed clean lines enriched by carefully placed decorative elements. Key motifs include laurel wreaths, acanthus scrollwork, urns, columns, medallions, and the characteristic Regency stripe. In digital application, Regencycore is ideal for luxury branding, editorial layouts, event invitations, lifestyle platforms, and any context that calls for cultivated, timeless elegance.

---

## Visual Characteristics

### Core Design Traits

- **Empire-line proportions**: Layouts echo the high-waisted silhouette of empire fashion, with content rising toward the top of containers and generous flowing space below
- **Gold filigree and gilt accents**: Thin gold borders, ornamental corner flourishes, and gilded dividers reference ormolu and gilt plasterwork found in Regency interiors
- **Damask and toile patterns**: Subtle background textures using classic two-toned damask florals or pastoral toile scenes add depth without overwhelming content
- **Classical symmetry**: Centered compositions with mirrored balance, drawing from Neoclassical principles of harmony and proportion
- **Soft pastel palette with jewel-tone accents**: A foundation of cream, blush, celestial blue, and sage green, enriched by emerald, sapphire, and burgundy highlights
- **High-contrast serif typography**: Didone-style typefaces with dramatic thick-thin stroke contrast evoke the printed matter of the Regency period
- **Decorative script accents**: Calligraphic letterforms used sparingly for labels, monograms, and flourish text, reminiscent of handwritten correspondence
- **Medallion and cameo motifs**: Oval and circular framing devices for portraits, icons, and featured content, referencing Wedgwood cameos and portrait miniatures
- **Regency stripe patterns**: Vertical stripes thicker than pinstripes but thinner than awning stripes, in alternating pastel and deeper tones
- **Botanical and floral ornamentation**: Hydrangeas, wisteria, roses, and laurel garlands used as decorative borders and section embellishments
- **Columnar and pilaster framing**: Vertical structural elements suggesting classical columns, used to frame sidebars or content sections
- **Crystal and candlelight textures**: Subtle sparkle effects and warm ambient glows referencing crystal chandeliers and candlelit ballrooms

### Design Principles

- Maintain classical symmetry and balanced proportions in all layout decisions; the golden ratio and rule of thirds guide placement
- Use ornamentation deliberately and sparingly: every flourish, border, and gilded detail should serve a compositional purpose
- Establish a clear visual hierarchy through scale, weight, and color rather than competing decorative elements
- Favor elegance over excess: the Regency aesthetic is refined restraint, not Rococo abundance
- Create warmth through soft, muted color and ambient lighting effects rather than bright saturation
- Treat whitespace as an active design element, evoking the spacious proportions of Regency-era rooms
- Layer textures subtly: damask patterns, linen grain, and parchment effects should whisper, not shout
- Balance historical reference with modern usability: classical motifs should enhance, not impede, the user experience

---

## Color Palette

The Regency-era palette was documented extensively in period pattern books and fabric samples. Fashionable colors included soft muslin whites, celestial blues, maiden blush pinks, and apple greens for daytime, with richer jewel tones reserved for evening and formal occasions. Gold appeared throughout in gilded furniture, ormolu mounts, and decorative plasterwork. This digital palette translates those historical references into a cohesive system for web design.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Ivory Muslin | `#FAF6F0` | Primary page background, evoking unbleached muslin fabric |
| Parchment Cream | `#F0E6D4` | Secondary background, card surfaces, content panels |
| Maiden Blush | `#F2C6C2` | Soft pink accent, decorative highlights, hover states |
| Celestial Blue | `#B8D4E3` | Primary accent color, links, interactive elements |
| Apple Green | `#C5D5A3` | Secondary accent, success states, botanical elements |
| Wisteria Lavender | `#C4B1D4` | Tertiary accent, tags, decorative accents |
| Regency Gold | `#C5A55A` | Filigree borders, ornamental details, premium accents |
| Gilt Bronze | `#D4A843` | Hover state for gold elements, active accents |
| Emerald Jewel | `#2E6E4E` | Deep accent for contrast, evening-tone elements |
| Sapphire Depth | `#2B4570` | Dark accent, deep headers, dramatic text |
| Burgundy Velvet | `#6E2142` | Rich accent, call-to-action, important highlights |
| Mahogany Dark | `#3E2223` | Primary text color, headings, high-contrast type |
| Slate Charcoal | `#4A4A4A` | Body text, secondary type, subtle UI elements |
| Damask Rose | `#D4838F` | Mid-tone pink, buttons, featured elements |
| Toile Blue | `#7BA0B8` | Mid-tone blue, secondary links, informational accents |

### CSS Custom Properties

```css
:root {
  --regency-ivory: #FAF6F0;
  --regency-parchment: #F0E6D4;
  --regency-blush: #F2C6C2;
  --regency-blue: #B8D4E3;
  --regency-green: #C5D5A3;
  --regency-lavender: #C4B1D4;
  --regency-gold: #C5A55A;
  --regency-gilt: #D4A843;
  --regency-emerald: #2E6E4E;
  --regency-sapphire: #2B4570;
  --regency-burgundy: #6E2142;
  --regency-mahogany: #3E2223;
  --regency-slate: #4A4A4A;
  --regency-damask-rose: #D4838F;
  --regency-toile-blue: #7BA0B8;
}
```

---

## Typography

Regency-era printed matter was dominated by Didone typefaces, characterized by extreme contrast between thick and thin strokes, unbracketed hairline serifs, and a vertical stress axis. These typefaces, developed by Firmin Didot and Giambattista Bodoni, perfectly captured the era's taste for refined elegance. For digital Regencycore design, high-contrast serif fonts paired with elegant calligraphic scripts create the essential typographic character.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Playfair Display** | 400, 500, 700, 900 | Primary heading font with Didone-inspired high contrast and elegant proportions | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |
| **Cormorant Garamond** | 300, 400, 500, 600, 700 | Refined body serif with classical proportions and excellent readability | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| **Cinzel** | 400, 500, 600, 700, 900 | Display font inspired by Roman inscriptions, ideal for aristocratic headings | [Cinzel](https://fonts.google.com/specimen/Cinzel) |
| **Cinzel Decorative** | 400, 700, 900 | Ornamental display variant for hero titles and monograms | [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) |
| **Great Vibes** | 400 | Calligraphic script for decorative labels, invitations, and flourish accents | [Great Vibes](https://fonts.google.com/specimen/Great+Vibes) |
| **EB Garamond** | 400, 500, 600, 700 | Classical Garamond for long-form body text with period-appropriate character | [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Playfair Display 700 | Cormorant Garamond 400 | Bridgerton editorial: dramatic contrast meets classical refinement |
| Cinzel 600 | EB Garamond 400 | Formal aristocratic: Roman grandeur with Renaissance readability |
| Cinzel Decorative 700 | Cormorant Garamond 300 | Grand ballroom: ornamental display with light, airy body text |
| Playfair Display 500 italic | EB Garamond 400 | Romantic correspondence: intimate yet structured |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Cinzel:wght@400;600;700;900&family=Great+Vibes&display=swap');

body {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 1.125rem;
  line-height: 1.85;
  color: var(--regency-mahogany);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--regency-mahogany);
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
  line-height: 1.3;
}

h3 {
  font-size: 1.4rem;
  line-height: 1.4;
}

.display-title {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.script-accent {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: var(--regency-gold);
}

.small-caps {
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--regency-slate);
}
```

---

## Layout Principles

- **Classical column grid**: Use a 12-column grid with content centered in the middle 8-10 columns, leaving generous margins that evoke the proportioned spacing of Regency architecture
- **Golden ratio proportions**: Apply 1:1.618 ratios to key layout relationships, including hero section height, sidebar-to-content ratios, and image aspect ratios
- **Symmetrical balance**: Center-align primary content and mirror decorative elements on either side of the vertical axis
- **Generous vertical spacing**: Allow 80-120px between major sections, creating the airy, spacious feel of a Regency drawing room
- **Empire-line content hierarchy**: Place the most important content (headlines, hero imagery) high within containers, with supporting content flowing gracefully below
- **Framed content areas**: Use thin gold borders or ornamental corner brackets to define content panels, referencing the architectural moldings of Regency interiors
- **Single-column reading**: Body text should occupy a narrow column (600-750px) for comfortable reading, echoing the proportions of Regency-era book pages
- **Decorative section dividers**: Use ornamental rules, laurel motifs, or filigree flourishes between major content sections rather than plain horizontal rules
- **Card-based content modules**: Present featured items within bordered cards with subtle parchment textures and gold accent borders
- **Responsive with grace**: On smaller screens, maintain symmetry and proportions; scale down ornamental details but preserve the overall sense of order and elegance
- **Header and footer framing**: Treat the navigation and footer as architectural elements, like the cornice and base of a classical building

---

## CSS / Design Techniques

### Regency Card

```css
.regency-card {
  background: var(--regency-parchment);
  border: 1px solid rgba(197, 165, 90, 0.35);
  border-radius: 4px;
  padding: 40px;
  position: relative;
  box-shadow:
    0 2px 12px rgba(62, 34, 35, 0.06),
    0 1px 3px rgba(62, 34, 35, 0.04);
}

/* Gold filigree corner accents */
.regency-card::before,
.regency-card::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--regency-gold);
  border-style: solid;
}

.regency-card::before {
  top: 8px;
  left: 8px;
  border-width: 2px 0 0 2px;
}

.regency-card::after {
  bottom: 8px;
  right: 8px;
  border-width: 0 2px 2px 0;
}

.regency-card h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--regency-mahogany);
  margin-bottom: 12px;
}

.regency-card p {
  color: var(--regency-slate);
  line-height: 1.85;
}
```

### Regency Button

```css
.regency-button {
  display: inline-block;
  background: var(--regency-burgundy);
  color: var(--regency-ivory);
  border: 1px solid var(--regency-burgundy);
  border-radius: 2px;
  padding: 14px 40px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.regency-button:hover {
  background: var(--regency-mahogany);
  border-color: var(--regency-mahogany);
  box-shadow: 0 4px 16px rgba(110, 33, 66, 0.25);
}

/* Gold-outlined variant */
.regency-button--outline {
  background: transparent;
  color: var(--regency-gold);
  border: 1px solid var(--regency-gold);
}

.regency-button--outline:hover {
  background: var(--regency-gold);
  color: var(--regency-ivory);
  box-shadow: 0 4px 16px rgba(197, 165, 90, 0.25);
}
```

### Regency Navigation

```css
.regency-nav {
  background: var(--regency-ivory);
  border-bottom: 1px solid rgba(197, 165, 90, 0.30);
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  position: relative;
}

/* Gold filigree border along the bottom */
.regency-nav::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--regency-gold) 20%,
    var(--regency-gold) 80%,
    transparent 100%
  );
}

.regency-nav__logo {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  color: var(--regency-mahogany);
  text-transform: uppercase;
  padding: 24px 0;
}

.regency-nav__links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
}

.regency-nav__links a {
  color: var(--regency-slate);
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 24px 0;
  position: relative;
  transition: color 0.3s ease;
}

.regency-nav__links a:hover {
  color: var(--regency-gold);
}

.regency-nav__links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--regency-gold);
  transition: width 0.3s ease;
}

.regency-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.regency-hero {
  background: linear-gradient(
    180deg,
    var(--regency-parchment) 0%,
    var(--regency-ivory) 100%
  );
  text-align: center;
  padding: 120px 40px;
  position: relative;
  overflow: hidden;
}

/* Subtle damask texture overlay */
.regency-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-conic-gradient(
    rgba(197, 165, 90, 0.03) 0% 25%,
    transparent 0% 50%
  ) 0 0 / 40px 40px;
  pointer-events: none;
}

/* Decorative gold border frame */
.regency-hero::after {
  content: '';
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  bottom: 24px;
  border: 1px solid rgba(197, 165, 90, 0.25);
  pointer-events: none;
}

.regency-hero .script-label {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: var(--regency-gold);
  display: block;
  margin-bottom: 8px;
  position: relative;
}

.regency-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--regency-mahogany);
  text-transform: uppercase;
  position: relative;
}

.regency-hero p {
  max-width: 600px;
  margin: 20px auto 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--regency-slate);
  line-height: 1.8;
  position: relative;
}
```

### Filigree Divider

```css
.regency-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 64px 0;
}

.regency-divider::before,
.regency-divider::after {
  content: '';
  width: 120px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--regency-gold),
    transparent
  );
}

/* Central ornament */
.regency-divider span {
  width: 12px;
  height: 12px;
  border: 1px solid var(--regency-gold);
  transform: rotate(45deg);
  position: relative;
}

.regency-divider span::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: var(--regency-gold);
}
```

### Damask Background Texture

```css
.regency-damask-bg {
  background-color: var(--regency-ivory);
  background-image:
    radial-gradient(
      ellipse at 25% 25%,
      rgba(197, 165, 90, 0.04) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 75% 75%,
      rgba(197, 165, 90, 0.04) 0%,
      transparent 50%
    );
  background-size: 80px 80px;
}
```

### Medallion Image Frame

```css
.regency-medallion {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--regency-gold);
  box-shadow:
    0 0 0 6px var(--regency-ivory),
    0 0 0 8px rgba(197, 165, 90, 0.3),
    0 8px 24px rgba(62, 34, 35, 0.12);
  margin: 0 auto;
}

.regency-medallion img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(10%) saturate(90%);
}
```

### Regency Stripe Accent

```css
.regency-stripe {
  background: repeating-linear-gradient(
    90deg,
    var(--regency-ivory) 0px,
    var(--regency-ivory) 12px,
    var(--regency-blue) 12px,
    var(--regency-blue) 14px
  );
  padding: 40px;
  border-top: 1px solid var(--regency-gold);
  border-bottom: 1px solid var(--regency-gold);
}
```

---

## Design Do's and Don'ts

### Do's

- Use gold filigree borders and ornamental corner brackets to frame content, evoking gilt plasterwork and ormolu mounts
- Maintain strict classical symmetry in layout composition; center headings and balance decorative elements
- Pair high-contrast Didone serif headings with lighter-weight Garamond body text for period-appropriate typography
- Apply damask or toile patterns as subtle background textures at very low opacity (3-6%)
- Use a restrained color palette with soft pastels as the foundation and jewel tones reserved for strategic accents
- Include decorative section dividers using filigree rules, laurel motifs, or diamond ornaments
- Treat whitespace as a luxury element, giving content room to breathe like a Regency drawing room
- Apply warm, candlelight-inspired ambient effects through subtle radial gradients in warm gold tones

### Don'ts

- Overload the design with competing ornamental elements; Regency is refined restraint, not Rococo excess
- Use modern sans-serif typefaces as primary fonts; they break the historical character entirely
- Apply bright, saturated neon or primary colors that conflict with the muted, cultured palette
- Use rounded pill-shaped buttons or heavy border-radius values; Regency design favors sharp or subtly squared corners
- Mix the aesthetic with industrial, brutalist, or cyberpunk elements that contradict its classical elegance
- Set large blocks of body text in script or decorative fonts; reserve calligraphy for small accent labels
- Use dark mode or black backgrounds; the Regency palette requires a light, warm foundation
- Neglect responsive considerations: scale down ornamental flourishes on mobile rather than removing the aesthetic entirely

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Empire Style** | Direct historical sibling; Empire Style shares the Neoclassical foundation, empire-line proportions, and Napoleonic-era design vocabulary |
| **Baroque** | Shares ornamental opulence and gilded details, but Baroque is heavier, darker, and more dramatically theatrical |
| **Rococo** | Both employ pastels, gold, and decorative flourish; Rococo is more playful, asymmetric, and exuberant where Regencycore is structured |
| **Coquette** | Overlaps in soft pastels and feminine ornament; Coquette is more modern, pink-dominant, and focused on bows and lace |
| **Dark Academia** | Both reference historical periods and classical typography; Dark Academia is moody and scholarly where Regencycore is light and aristocratic |
| **Cottagecore** | Both celebrate Englishness and romantic nostalgia; Cottagecore is rustic and pastoral, Regencycore is urban and formal |
| **Grandmillennial** | Shares appreciation for traditional patterns like damask, chintz, and antique furniture, with a more eclectic contemporary twist |
| **Art Nouveau** | Both use organic ornamentation and decorative elegance; Art Nouveau is more botanical and curvilinear |
| **Gustavian** | Shares the Neoclassical foundation and soft pastel palette; Gustavian is more specifically Scandinavian and pared-back |
| **Hollywood Regency** | A mid-century glamour reinterpretation of Regency style with bolder contrasts and more metallic surfaces |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Regencycore Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Cinzel:wght@400;600;700;900&family=Great+Vibes&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --regency-ivory: #FAF6F0;
      --regency-parchment: #F0E6D4;
      --regency-blush: #F2C6C2;
      --regency-blue: #B8D4E3;
      --regency-green: #C5D5A3;
      --regency-lavender: #C4B1D4;
      --regency-gold: #C5A55A;
      --regency-gilt: #D4A843;
      --regency-emerald: #2E6E4E;
      --regency-sapphire: #2B4570;
      --regency-burgundy: #6E2142;
      --regency-mahogany: #3E2223;
      --regency-slate: #4A4A4A;
      --regency-damask-rose: #D4838F;
      --regency-toile-blue: #7BA0B8;
    }

    body {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.125rem;
      line-height: 1.85;
      color: var(--regency-mahogany);
      background: var(--regency-ivory);
      min-height: 100vh;
    }

    /* Navigation */
    .nav {
      background: var(--regency-ivory);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 60px;
      position: relative;
      border-bottom: 1px solid rgba(197,165,90,0.25);
    }

    .nav::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 10%; right: 10%;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--regency-gold), transparent);
    }

    .nav-logo {
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: 0.12em;
      color: var(--regency-mahogany);
      text-transform: uppercase;
      text-decoration: none;
      padding: 24px 0;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 36px;
      list-style: none;
    }

    .nav-links a {
      color: var(--regency-slate);
      font-family: 'Cormorant Garamond', serif;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 24px 0;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a:hover { color: var(--regency-gold); }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0; left: 50%;
      transform: translateX(-50%);
      width: 0; height: 2px;
      background: var(--regency-gold);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after { width: 100%; }

    /* Hero */
    .hero {
      background: linear-gradient(180deg, var(--regency-parchment) 0%, var(--regency-ivory) 100%);
      text-align: center;
      padding: 120px 40px 100px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        radial-gradient(ellipse at 30% 40%, rgba(197,165,90,0.05) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 60%, rgba(242,198,194,0.06) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero::after {
      content: '';
      position: absolute;
      top: 28px; left: 28px; right: 28px; bottom: 28px;
      border: 1px solid rgba(197,165,90,0.2);
      pointer-events: none;
    }

    .hero-script {
      font-family: 'Great Vibes', cursive;
      font-size: 1.8rem;
      color: var(--regency-gold);
      display: block;
      margin-bottom: 8px;
      position: relative;
    }

    .hero h1 {
      font-family: 'Cinzel', serif;
      font-size: 3.2rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--regency-mahogany);
      text-transform: uppercase;
      position: relative;
      margin-bottom: 20px;
    }

    .hero p {
      max-width: 580px;
      margin: 0 auto 32px;
      font-size: 1.2rem;
      font-weight: 300;
      color: var(--regency-slate);
      line-height: 1.8;
      position: relative;
    }

    .hero .btn { position: relative; }

    /* Buttons */
    .btn {
      display: inline-block;
      background: var(--regency-burgundy);
      color: var(--regency-ivory);
      border: 1px solid var(--regency-burgundy);
      border-radius: 2px;
      padding: 14px 40px;
      font-family: 'Cinzel', serif;
      font-weight: 600;
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: var(--regency-mahogany);
      border-color: var(--regency-mahogany);
      box-shadow: 0 4px 16px rgba(110,33,66,0.25);
    }

    .btn--outline {
      background: transparent;
      color: var(--regency-gold);
      border-color: var(--regency-gold);
    }

    .btn--outline:hover {
      background: var(--regency-gold);
      color: var(--regency-ivory);
    }

    /* Divider */
    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 64px auto;
      max-width: 400px;
    }

    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--regency-gold), transparent);
    }

    .divider span {
      width: 10px; height: 10px;
      border: 1px solid var(--regency-gold);
      transform: rotate(45deg);
      position: relative;
    }

    .divider span::before {
      content: '';
      position: absolute;
      top: 2px; left: 2px; right: 2px; bottom: 2px;
      background: var(--regency-gold);
    }

    /* Section */
    .section {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .section-title {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-title h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--regency-mahogany);
      margin-bottom: 8px;
    }

    .section-title p {
      font-size: 1.1rem;
      font-weight: 300;
      color: var(--regency-slate);
    }

    /* Cards */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .card {
      background: var(--regency-parchment);
      border: 1px solid rgba(197,165,90,0.3);
      border-radius: 4px;
      padding: 36px;
      position: relative;
      box-shadow: 0 2px 12px rgba(62,34,35,0.05);
      transition: box-shadow 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 6px 24px rgba(62,34,35,0.08);
    }

    .card::before, .card::after {
      content: '';
      position: absolute;
      width: 20px; height: 20px;
      border-color: var(--regency-gold);
      border-style: solid;
    }

    .card::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
    .card::after { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

    .card-icon {
      font-size: 1.8rem;
      margin-bottom: 16px;
      display: block;
      color: var(--regency-gold);
    }

    .card h3 {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--regency-mahogany);
      margin-bottom: 12px;
    }

    .card p { color: var(--regency-slate); font-size: 1rem; line-height: 1.8; }

    /* Feature */
    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      margin: 80px auto;
      max-width: 960px;
      padding: 0 40px;
    }

    .feature-image {
      width: 100%;
      aspect-ratio: 4/5;
      background: linear-gradient(135deg, var(--regency-blush) 0%, var(--regency-blue) 100%);
      border: 1px solid rgba(197,165,90,0.3);
      border-radius: 4px;
    }

    .feature-text h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 700;
      color: var(--regency-mahogany);
      margin-bottom: 16px;
    }

    .feature-text p { color: var(--regency-slate); margin-bottom: 24px; line-height: 1.85; }

    /* Quote */
    .quote-section {
      background: var(--regency-parchment);
      padding: 80px 40px;
      text-align: center;
      position: relative;
      border-top: 1px solid rgba(197,165,90,0.2);
      border-bottom: 1px solid rgba(197,165,90,0.2);
    }

    .quote-section::before {
      content: '\201C';
      font-family: 'Playfair Display', serif;
      font-size: 6rem;
      color: var(--regency-gold);
      opacity: 0.3;
      position: absolute;
      top: 20px; left: 50%; transform: translateX(-50%); line-height: 1;
    }

    .quote-section blockquote {
      max-width: 640px; margin: 0 auto;
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem; font-style: italic;
      color: var(--regency-mahogany); line-height: 1.6;
    }

    .quote-section cite {
      display: block; margin-top: 20px;
      font-size: 1rem; font-style: normal; color: var(--regency-slate);
    }

    /* Stripe Banner */
    .stripe-banner {
      background: repeating-linear-gradient(
        90deg, var(--regency-ivory) 0px, var(--regency-ivory) 14px,
        var(--regency-blue) 14px, var(--regency-blue) 16px
      );
      padding: 48px 40px;
      text-align: center;
      border-top: 1px solid var(--regency-gold);
      border-bottom: 1px solid var(--regency-gold);
    }

    .stripe-banner h2 {
      font-family: 'Cinzel', serif;
      font-size: 1.6rem; font-weight: 600;
      letter-spacing: 0.1em; color: var(--regency-mahogany);
      text-transform: uppercase; margin-bottom: 12px;
    }

    .stripe-banner p {
      font-size: 1.1rem; color: var(--regency-slate);
      max-width: 500px; margin: 0 auto 24px;
    }

    /* Footer */
    .footer {
      background: var(--regency-mahogany);
      color: var(--regency-parchment);
      text-align: center;
      padding: 48px 40px;
      position: relative;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0; left: 10%; right: 10%;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--regency-gold), transparent);
    }

    .footer-logo {
      font-family: 'Cinzel', serif; font-weight: 700; font-size: 1rem;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--regency-gold); margin-bottom: 12px;
    }

    .footer p { font-size: 0.9rem; color: rgba(240,230,212,0.6); }

    .footer-links {
      display: flex; justify-content: center; gap: 24px;
      list-style: none; margin-top: 16px;
    }

    .footer-links a {
      color: rgba(240,230,212,0.5); font-size: 0.85rem;
      text-decoration: none; transition: color 0.3s ease;
    }

    .footer-links a:hover { color: var(--regency-gold); }

    /* Responsive */
    @media (max-width: 768px) {
      .nav { flex-direction: column; padding: 16px 24px; gap: 12px; }
      .nav-links { gap: 20px; }
      .hero { padding: 80px 24px 60px; }
      .hero h1 { font-size: 2.2rem; letter-spacing: 0.06em; }
      .hero::after { top: 16px; left: 16px; right: 16px; bottom: 16px; }
      .cards { grid-template-columns: 1fr; gap: 24px; }
      .feature { grid-template-columns: 1fr; gap: 32px; padding: 0 24px; }
      .section { padding: 0 24px; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav-logo">Thornfield</a>
    <ul class="nav-links">
      <li><a href="#">Society</a></li>
      <li><a href="#">Collection</a></li>
      <li><a href="#">Promenade</a></li>
      <li><a href="#">Correspondence</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <span class="hero-script">The Season Awaits</span>
    <h1>Regencycore</h1>
    <p>Bridgerton-era elegance translated into digital design.
       Empire proportions, soft pastels, gold filigree, and the
       refined grace of classical symmetry.</p>
    <a href="#" class="btn">Enter the Ballroom</a>
  </header>

  <div class="divider"><span></span></div>

  <!-- Cards -->
  <section class="section">
    <div class="section-title">
      <h2>The Pillars of Regency Design</h2>
      <p>Classical proportion, restrained ornament, and cultivated elegance</p>
    </div>
    <div class="cards">
      <div class="card">
        <span class="card-icon">&#9826;</span>
        <h3>Classical Symmetry</h3>
        <p>Every composition is governed by balanced proportions
           drawn from Neoclassical architecture and the golden ratio.</p>
      </div>
      <div class="card">
        <span class="card-icon">&#10047;</span>
        <h3>Damask & Toile</h3>
        <p>Period-authentic patterns grace backgrounds and accent
           panels, adding texture without overwhelming content.</p>
      </div>
      <div class="card">
        <span class="card-icon">&#9733;</span>
        <h3>Gold Filigree</h3>
        <p>Gilt borders, ornamental corners, and metallic accents
           reference the ormolu and gilded plasterwork of the era.</p>
      </div>
    </div>
  </section>

  <div class="divider"><span></span></div>

  <!-- Feature -->
  <section class="feature">
    <div class="feature-image"></div>
    <div class="feature-text">
      <h2>An Evening at the Assembly</h2>
      <p>The Regency ballroom was a masterclass in proportioned elegance:
         crystal chandeliers casting warm candlelight across damask walls,
         empire-waisted gowns in maiden blush and celestial blue, and
         gilded moldings framing every architectural detail.</p>
      <p>This same principle of structured beauty guides digital
         Regencycore: warmth, symmetry, and deliberate ornament creating
         an atmosphere of cultivated grace.</p>
      <a href="#" class="btn--outline btn">Discover More</a>
    </div>
  </section>

  <!-- Quote -->
  <section class="quote-section">
    <blockquote>
      Elegance is not about being noticed, it is about being remembered.
    </blockquote>
    <cite>-- Attributed to the Regency sensibility</cite>
  </section>

  <div class="divider"><span></span></div>

  <!-- Stripe Banner -->
  <section class="stripe-banner">
    <h2>The Promenade Collection</h2>
    <p>Seasonal pieces crafted with the refined proportions
       and soft palette of the English Regency.</p>
    <a href="#" class="btn">View Collection</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-logo">Thornfield</div>
    <p>Bridgerton-era elegance for the digital age</p>
    <ul class="footer-links">
      <li><a href="#">Society</a></li>
      <li><a href="#">Collection</a></li>
      <li><a href="#">Correspondence</a></li>
      <li><a href="#">Gazette</a></li>
    </ul>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the palette and typography**: Import the CSS custom properties and Google Fonts first; these two elements establish the Regencycore character more than any layout or ornament decision
- **Use gold sparingly**: The gold filigree and gilt accents are the signature of this aesthetic, but they lose their impact when overused; limit gold to borders, dividers, hover states, and small accent details
- **Test ornamental details at all breakpoints**: Filigree corner brackets and border frames should scale down gracefully on mobile; use media queries to reduce their size rather than hiding them entirely
- **Layer background textures at low opacity**: Damask patterns and parchment grain should register as subtle depth, not competing content; keep pattern opacity between 3-8%
- **Pair jewel tones with pastels intentionally**: Use emerald, sapphire, and burgundy for interactive elements and calls to action, while pastels form the ambient background; this mirrors the Regency approach of rich evening tones against soft daytime neutrals
- **Maintain wide margins and vertical breathing room**: The sense of spacious proportion is essential to Regencycore; resist the urge to pack content tightly, and let 80-120px of space separate major sections
- **Use Cinzel for display, Playfair Display for editorial, and Cormorant Garamond for body**: This three-tier type system covers the full range of Regencycore typography from monumental to intimate
- **Reference period proportions**: The golden ratio (1:1.618) should guide key layout decisions including hero aspect ratios, sidebar widths, and the relationship between heading and body text sizes
