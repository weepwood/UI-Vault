# Dark Luxe Design Reference

## Overview

Dark Luxe is a premium digital design aesthetic that channels the opulence of high-end fashion houses, five-star hospitality, and exclusive luxury branding into web and interface design. The style is defined by its deep, near-black color foundations -- rich charcoals, obsidian blacks, and midnight tones -- paired with warm metallic accents in gold, champagne, and rose gold. Where minimalist dark themes aim for pure function, Dark Luxe deliberately infuses every surface with a sense of material richness: velvet-textured backgrounds, brushed-gold borders, and dramatic lighting gradients that evoke candlelit interiors and jewel-box boutiques.

The aesthetic draws from a long lineage of luxury visual language. Art Deco's geometric gold ornamentation, the moody chiaroscuro of Baroque painting, and the editorial restraint of modern high-fashion magazines all converge in Dark Luxe. Brands like Chanel, Rolex, Harry Winston, and Tom Ford have long relied on dark palettes with metallic detailing to communicate exclusivity and prestige, and this design language has been adapted for digital interfaces where dark backgrounds make imagery feel deeper and accent colors appear more vivid. The dark canvas itself becomes a statement of sophistication -- it signals that every element placed upon it has been curated with intention.

Typography in Dark Luxe leans heavily on high-contrast serif typefaces descended from the Didone tradition -- fonts with dramatic thick-thin stroke variation that embody classical elegance. These are paired with refined sans-serif companions for body text, creating a hierarchy that feels editorial and authoritative. Light text on dark backgrounds requires careful weight calibration, as letterforms appear optically heavier in this context; Dark Luxe accounts for this by favoring lighter body weights and generous letter-spacing.

The overall effect is immersive and theatrical. Dark Luxe interfaces do not merely display content -- they stage it. Strategic use of radial light gradients, subtle noise textures, and layered shadows creates a sense of physical depth, as though the viewer is looking into a dimly lit showroom where each element catches the light just so. It is design that demands slowness and attention, rewarding the viewer with rich detail at every scale.

---

## Visual Characteristics

### Core Design Traits

- **Deep, near-black backgrounds** -- rich charcoals (#0D0D0D to #1A1A1A) and midnight tones rather than pure black, reducing eye strain while maintaining dramatic depth
- **Warm metallic accents** -- gold, champagne, rose gold, and antique brass used for borders, headings, dividers, and interactive highlights
- **Velvet and fabric textures** -- subtle noise overlays and fine grain patterns that simulate plush, tactile surfaces like velvet, silk, or suede
- **Dramatic lighting gradients** -- radial and linear gradients that create focused pools of warm light against dark expanses, evoking spotlight or candlelight effects
- **High-contrast serif typography** -- Didone and transitional serifs with sharp thick-thin contrast for headlines, signaling editorial luxury
- **Generous negative space** -- dark space used deliberately to frame content, giving each element room to breathe and command attention
- **Layered depth and shadow** -- multiple shadow layers with warm undertones create a sense of physical elevation and three-dimensionality
- **Ornamental borders and dividers** -- thin gold lines, corner flourishes, and geometric frames that recall invitation design and fine stationery
- **Restrained color palette** -- a strict foundation of black, dark gray, gold, and cream with jewel-tone accents introduced sparingly
- **Photographic darkness** -- hero images with deep shadow, low-key lighting, and moody color grading that integrate seamlessly with the dark UI
- **Micro-animations with elegance** -- slow, deliberate transitions (fades, reveals, gentle parallax) that reinforce the sense of unhurried luxury

### Design Principles

- **Less is more, but more is more beautiful** -- every element that earns its place on the page must be rendered with maximum refinement
- **Dark space is active space** -- the dark background is not empty; it is a design element that creates drama and directs focus
- **Metallics communicate value** -- gold and champagne accents signal quality and exclusivity; use them for the most important elements
- **Hierarchy through luminance** -- the brightest element on the page commands the most attention; control the viewer's eye with strategic light placement
- **Texture creates tangibility** -- subtle surface textures bridge the gap between digital flatness and the tactile richness of physical luxury materials
- **Typography is identity** -- font selection carries brand weight; serif faces anchor the design in tradition while refined sans-serifs provide modern balance
- **Restraint is sophistication** -- resist the urge to add more; a single gold accent on a vast dark field is more powerful than gold everywhere
- **Transitions should feel cinematic** -- motion design mimics the slow reveal of a curtain, the gentle fade of a spotlight, never jarring or abrupt

---

## Color Palette

Dark Luxe palettes are built on a foundation of layered dark neutrals with warm metallic accents. The key principle is temperature contrast: cool-to-neutral dark bases paired with warm gold and champagne highlights. Jewel tones -- deep emerald, burgundy, sapphire -- are used as tertiary accents to add richness without competing with the gold hierarchy.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| **Obsidian** | `#0A0A0A` | Deepest background, page base, footer |
| **Onyx** | `#111111` | Primary surface, card backgrounds |
| **Charcoal** | `#1A1A1A` | Elevated surfaces, modal backgrounds |
| **Graphite** | `#252525` | Secondary surfaces, sidebar backgrounds |
| **Smoke** | `#333333` | Borders, dividers, subtle separators |
| **Pewter** | `#5C5C5C` | Muted text, disabled states, placeholders |
| **Champagne Gold** | `#D4AF37` | Primary accent, headings, borders, icons |
| **Antique Gold** | `#C5A258` | Secondary accent, hover states, warm highlights |
| **Pale Gold** | `#E8D48B` | Tertiary accent, gradient endpoints, subtle shimmer |
| **Rose Gold** | `#B76E79` | Feminine luxury accent, special highlights |
| **Ivory** | `#F5F0E1` | Primary text on dark backgrounds, light contrast |
| **Warm White** | `#E8E0D0` | Secondary text, descriptions, body copy |
| **Burgundy** | `#6B1024` | Jewel accent, alert highlights, wine-toned details |
| **Emerald** | `#1B5E3B` | Jewel accent, success states, nature-luxury elements |
| **Sapphire** | `#1A3A5C` | Jewel accent, information highlights, depth layers |

### CSS Custom Properties

```css
:root {
  /* Dark foundations */
  --luxe-obsidian: #0a0a0a;
  --luxe-onyx: #111111;
  --luxe-charcoal: #1a1a1a;
  --luxe-graphite: #252525;
  --luxe-smoke: #333333;
  --luxe-pewter: #5c5c5c;

  /* Metallic accents */
  --luxe-gold: #d4af37;
  --luxe-gold-antique: #c5a258;
  --luxe-gold-pale: #e8d48b;
  --luxe-rose-gold: #b76e79;

  /* Text */
  --luxe-ivory: #f5f0e1;
  --luxe-warm-white: #e8e0d0;
  --luxe-text-muted: #8a8070;

  /* Jewel accents */
  --luxe-burgundy: #6b1024;
  --luxe-emerald: #1b5e3b;
  --luxe-sapphire: #1a3a5c;

  /* Functional mappings */
  --luxe-bg-primary: var(--luxe-obsidian);
  --luxe-bg-surface: var(--luxe-onyx);
  --luxe-bg-elevated: var(--luxe-charcoal);
  --luxe-text-primary: var(--luxe-ivory);
  --luxe-text-secondary: var(--luxe-warm-white);
  --luxe-accent: var(--luxe-gold);
  --luxe-border: var(--luxe-smoke);

  /* Gold gradient shorthand */
  --luxe-gold-gradient: linear-gradient(
    135deg,
    #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c
  );

  /* Warm shadow */
  --luxe-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --luxe-shadow-md: 0 4px 24px rgba(0, 0, 0, 0.5);
  --luxe-shadow-lg: 0 8px 48px rgba(0, 0, 0, 0.6);
  --luxe-shadow-gold: 0 4px 24px rgba(212, 175, 55, 0.15);
}
```

---

## Typography

Dark Luxe typography is rooted in the editorial traditions of high-fashion magazines and luxury brand identity. Headlines rely on high-contrast serif typefaces -- fonts in the Didone tradition with dramatic thick-thin stroke variation, sharp hairline serifs, and vertical stress. These are the typographic equivalent of a tailored suit: precise, elegant, and unmistakably refined. Body text uses clean, modern sans-serifs at lighter weights to ensure readability on dark backgrounds, where letterforms appear optically heavier and must be calibrated accordingly.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Playfair Display** | High-contrast Didone serif | Headlines, hero text, display titles |
| **Cormorant Garamond** | Elegant, refined serif | Subheadings, pull quotes, editorial text |
| **Bodoni Moda** | Classic Didone, dramatic contrast | Feature headlines, brand-forward display |
| **Cinzel** | Classical proportioned serif | Formal headings, luxury labels |
| **EB Garamond** | Refined old-style serif | Long-form body text, editorial copy |
| **Montserrat** | Geometric sans-serif | Navigation, buttons, UI labels |
| **Raleway** | Elegant thin geometric sans | Body text, subheadings, captions |
| **Cormorant** | Display serif with stylistic alternates | Decorative headlines, invitations |
| **Libre Baskerville** | Traditional serif, excellent screen rendering | Secondary headings, blockquotes |
| **Lato** | Humanist sans-serif | Body text, descriptions, form labels |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Playfair Display** (700) | **Raleway** (300/400) | Classic luxury editorial, fashion-forward |
| **Cormorant Garamond** (600) | **Montserrat** (400) | Refined elegance, modern balance |
| **Bodoni Moda** (700) | **Lato** (300/400) | High-fashion drama, clean readability |
| **Cinzel** (600) | **Raleway** (300) | Formal luxury, architectural precision |
| **Cormorant** (600) | **EB Garamond** (400) | All-serif pairing, deeply editorial |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Raleway:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 700;
  color: var(--luxe-ivory);
  line-height: 1.15;
  letter-spacing: 0.01em;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  letter-spacing: -0.01em;
}

h2 {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
}

/* Gold accent headings */
.luxe-heading-gold {
  color: var(--luxe-gold);
}

/* Display text with metallic gradient */
.luxe-display {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  background: var(--luxe-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

/* Italic accent for pull quotes */
.luxe-quote {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--luxe-gold-pale);
  line-height: 1.6;
}

body {
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--luxe-warm-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Uppercase labels and navigation */
.luxe-label {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--luxe-gold-antique);
}
```

---

## Layout Principles

- **Center-aligned, narrow containers** -- max-width of 1100-1200px with generous side padding; content feels curated within a refined frame rather than sprawling edge-to-edge
- **Vertical rhythm through generous spacing** -- sections separated by 80-120px of dark breathing room; internal padding of 40-60px within content blocks
- **Symmetrical, balanced compositions** -- center-aligned headings, evenly distributed columns, and mirrored layouts reinforce the sense of formal elegance
- **Full-bleed dark sections with contained content** -- dark backgrounds extend to viewport edges while text and cards remain within the centered container
- **Card elevation through layered darks** -- cards use a slightly lighter dark shade than their parent section, creating subtle depth without borders
- **Gold dividers as section transitions** -- thin horizontal gold rules or ornamental separators mark the passage between content sections
- **Hero sections with dramatic scale** -- oversized typography and full-viewport height heroes establish the luxurious tone immediately
- **Asymmetric image-text pairs** -- editorial-style layouts where a dark, moody image occupies 55-60% of the width alongside text in the remaining space
- **Grid systems with generous gutters** -- 2 or 3-column grids with 32-48px gaps; never cramped, always airy
- **Sticky navigation with dark transparency** -- a fixed nav bar using semi-transparent dark backgrounds with a subtle gold bottom border
- **Footer as signature** -- a minimal, elegant footer with gold accent text on the deepest black, functioning as the visual "endnote" of the page

---

## CSS / Design Techniques

### Luxury Card Component

```css
.luxe-card {
  background: var(--luxe-onyx);
  border: 1px solid var(--luxe-smoke);
  border-radius: 4px;
  padding: 40px;
  position: relative;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.luxe-card:hover {
  border-color: var(--luxe-gold);
  box-shadow: var(--luxe-shadow-gold);
}

/* Gold corner accents */
.luxe-card::before,
.luxe-card::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--luxe-gold);
  border-style: solid;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.luxe-card::before {
  top: -1px;
  left: -1px;
  border-width: 1px 0 0 1px;
}

.luxe-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 1px 1px 0;
}

.luxe-card:hover::before,
.luxe-card:hover::after {
  opacity: 1;
}

.luxe-card__label {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--luxe-gold-antique);
  margin-bottom: 12px;
}

.luxe-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--luxe-ivory);
  margin-bottom: 16px;
}

.luxe-card__text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--luxe-warm-white);
}
```

### Luxury Button

```css
.luxe-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  color: var(--luxe-gold);
  border: 1px solid var(--luxe-gold);
  padding: 14px 40px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.luxe-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.08),
    transparent
  );
  transition: left 0.6s ease;
}

.luxe-btn:hover::before {
  left: 100%;
}

.luxe-btn:hover {
  background: rgba(212, 175, 55, 0.08);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
}

/* Filled variant */
.luxe-btn--filled {
  background: var(--luxe-gold);
  color: var(--luxe-obsidian);
  border-color: var(--luxe-gold);
}

.luxe-btn--filled:hover {
  background: var(--luxe-gold-pale);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.25);
}

/* Slim variant for inline use */
.luxe-btn--slim {
  padding: 10px 28px;
  font-size: 0.8rem;
}
```

### Navigation Bar

```css
.luxe-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  transition: background 0.3s ease;
}

.luxe-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
}

.luxe-nav__logo {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--luxe-gold);
  text-decoration: none;
  letter-spacing: 0.08em;
}

.luxe-nav__links {
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.luxe-nav__links a {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--luxe-warm-white);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.luxe-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--luxe-gold);
  transition: width 0.3s ease;
}

.luxe-nav__links a:hover {
  color: var(--luxe-gold);
}

.luxe-nav__links a:hover::after {
  width: 100%;
}
```

### Hero Section

```css
.luxe-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 40px 100px;
  position: relative;
  overflow: hidden;
  background: var(--luxe-obsidian);
}

/* Dramatic radial lighting effect */
.luxe-hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(
    ellipse at center,
    rgba(212, 175, 55, 0.06) 0%,
    rgba(212, 175, 55, 0.02) 40%,
    transparent 70%
  );
  pointer-events: none;
}

/* Velvet noise texture overlay */
.luxe-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
}

.luxe-hero__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.luxe-hero__label {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--luxe-gold-antique);
  margin-bottom: 24px;
}

.luxe-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  color: var(--luxe-ivory);
  margin-bottom: 24px;
  line-height: 1.1;
}

.luxe-hero h1 em {
  font-style: italic;
  color: var(--luxe-gold);
}

.luxe-hero p {
  font-size: 1.15rem;
  color: var(--luxe-warm-white);
  margin-bottom: 40px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}
```

### Gold Metallic Gradient Effects

```css
/* Gold gradient text */
.luxe-gold-text {
  background: linear-gradient(
    135deg,
    #bf953f 0%,
    #fcf6ba 30%,
    #b38728 50%,
    #fbf5b7 70%,
    #aa771c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animated gold shimmer on hover */
.luxe-shimmer {
  background: linear-gradient(
    110deg,
    var(--luxe-gold) 0%,
    var(--luxe-gold-pale) 20%,
    var(--luxe-gold) 40%,
    var(--luxe-gold-pale) 60%,
    var(--luxe-gold) 80%,
    var(--luxe-gold-pale) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* Gold border gradient */
.luxe-gold-border {
  border: 1px solid transparent;
  border-image: linear-gradient(
    135deg,
    #bf953f, #fcf6ba, #b38728
  ) 1;
}
```

### Velvet Texture and Noise Overlay

```css
/* Velvet texture background */
.luxe-velvet {
  background-color: var(--luxe-onyx);
  position: relative;
}

.luxe-velvet::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Dramatic spotlight gradient */
.luxe-spotlight {
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(212, 175, 55, 0.05) 0%,
    rgba(10, 10, 10, 0) 60%
  ),
  var(--luxe-obsidian);
}

/* Vignette effect for sections */
.luxe-vignette {
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5);
}
```

### Ornamental Dividers

```css
/* Gold line divider */
.luxe-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--luxe-gold) 20%,
    var(--luxe-gold) 80%,
    transparent 100%
  );
  width: 60%;
  margin: 48px auto;
}

/* Diamond ornament divider */
.luxe-divider-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 48px auto;
  width: 60%;
}

.luxe-divider-ornament::before,
.luxe-divider-ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--luxe-gold)
  );
}

.luxe-divider-ornament::after {
  background: linear-gradient(
    90deg,
    var(--luxe-gold),
    transparent
  );
}

.luxe-divider-ornament span {
  width: 8px;
  height: 8px;
  background: var(--luxe-gold);
  transform: rotate(45deg);
  flex-shrink: 0;
}
```

### Image Treatment

```css
/* Dark, moody image overlay */
.luxe-image-container {
  position: relative;
  overflow: hidden;
}

.luxe-image-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7) contrast(1.1) saturate(0.85);
  transition: filter 0.6s ease, transform 0.6s ease;
}

.luxe-image-container:hover img {
  filter: brightness(0.8) contrast(1.05) saturate(0.9);
  transform: scale(1.03);
}

/* Gold frame border */
.luxe-image-frame {
  padding: 3px;
  border: 1px solid var(--luxe-gold);
  outline: 1px solid var(--luxe-gold);
  outline-offset: 6px;
}
```

---

## Design Do's and Don'ts

### Do's

- **Use layered dark values** -- build depth with 3-4 dark shades (obsidian, onyx, charcoal, graphite) rather than relying on a single flat black
- **Reserve gold for hierarchy** -- apply metallic accents to headings, primary CTAs, dividers, and key borders; gold loses its power when overused
- **Choose high-contrast serif fonts** for headlines -- Didone-style faces like Playfair Display and Bodoni communicate luxury at a typographic level
- **Apply subtle noise textures** -- a faint grain overlay (2-4% opacity) transforms flat dark surfaces into something that feels tactile and velvet-like
- **Use radial gradients for dramatic lighting** -- a soft warm glow emanating from the top center or behind key elements creates the effect of a spotlight in a darkened room
- **Maintain readability with lighter font weights** -- on dark backgrounds, text appears optically heavier; use 300-400 weight for body copy and increase letter-spacing slightly
- **Design with restraint and whitespace** -- let the dark canvas do the work; fewer elements with more breathing room creates a stronger luxury impression
- **Test gold accents at small sizes** -- thin gold lines and small gold text must remain visible and legible at all viewport widths

### Don'ts

- **Don't use pure black (#000000) as the sole background** -- it causes halation (text glow) on OLED screens and feels lifeless; use off-blacks like #0A0A0A or #111111 instead
- **Don't combine gold with bright, saturated colors** -- neon greens, electric blues, and hot pinks clash with the warm luxury palette and cheapen the aesthetic
- **Don't use thin sans-serif fonts for headlines** -- lightweight geometric sans-serifs undermine the luxury positioning; save them for body text and labels
- **Don't apply gold to every border, icon, and element** -- when everything is gold, nothing is; the accent must be selective to retain its premium signal
- **Don't neglect contrast ratios** -- dark-on-dark text pairings and low-contrast gold-on-dark combinations may look elegant but can fail WCAG accessibility standards; always verify
- **Don't use harsh, abrupt transitions** -- luxury motion design is slow and cinematic; avoid snappy 100ms transitions in favor of 300-600ms eased movements
- **Don't pair cheap-looking stock photography** -- the entire aesthetic collapses if images don't match the moody, low-key lighting and premium subject matter
- **Don't overcrowd the layout** -- Dark Luxe is about curated exclusivity, not information density; dense, cramped grids contradict the aesthetic entirely

---

## Related Aesthetics

| Aesthetic | Relationship to Dark Luxe |
|-----------|--------------------------|
| **Art Deco** | Shares black-and-gold palette, geometric ornamentation, and premium positioning; Art Deco adds angular geometry and sunburst motifs |
| **Dark Academia** | Shares dark palettes and serif typography but draws from scholarly/literary culture rather than fashion and luxury |
| **Hollywood Regency** | Interior design cousin; shares the love of gold, velvet, and dramatic contrast in a glamorous context |
| **Baroque** | Historical ancestor; Baroque's chiaroscuro lighting and ornamental excess are distilled into Dark Luxe's digital elegance |
| **Glassmorphism** | Can be combined: frosted glass cards on dark backgrounds with gold borders create a modern luxury hybrid |
| **Chromecore** | Shares metallic accent language but uses cool silver/chrome tones instead of warm gold |
| **Cyberpunk** | Both use dark backgrounds with accent colors, but Cyberpunk is gritty and dystopian where Dark Luxe is polished and aspirational |
| **Minimalism** | Shares the principle of restraint and negative space, but Minimalism strips away the textural richness and ornamental detail |
| **Empire Style** | Historical inspiration; Napoleonic-era gold and dark green palettes with classical motifs echo in Dark Luxe's formal elegance |
| **Dark Aero** | Shares dark translucent surfaces but focuses on glossy, tech-forward interfaces rather than warm luxury textures |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Luxe -- Premium Template</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Raleway:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <style>
    /* =============================================
       CSS CUSTOM PROPERTIES
       ============================================= */
    :root {
      /* Dark foundations */
      --luxe-obsidian: #0a0a0a;
      --luxe-onyx: #111111;
      --luxe-charcoal: #1a1a1a;
      --luxe-graphite: #252525;
      --luxe-smoke: #333333;
      --luxe-pewter: #5c5c5c;

      /* Metallics */
      --luxe-gold: #d4af37;
      --luxe-gold-antique: #c5a258;
      --luxe-gold-pale: #e8d48b;
      --luxe-rose-gold: #b76e79;

      /* Text */
      --luxe-ivory: #f5f0e1;
      --luxe-warm-white: #e8e0d0;
      --luxe-text-muted: #8a8070;

      /* Jewel accents */
      --luxe-burgundy: #6b1024;
      --luxe-emerald: #1b5e3b;

      /* Shadows */
      --luxe-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
      --luxe-shadow-md: 0 4px 24px rgba(0, 0, 0, 0.5);
      --luxe-shadow-lg: 0 8px 48px rgba(0, 0, 0, 0.6);
      --luxe-shadow-gold: 0 4px 24px rgba(212, 175, 55, 0.15);

      /* Gold gradient */
      --luxe-gold-gradient: linear-gradient(
        135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c
      );
    }

    /* =============================================
       RESET AND BASE
       ============================================= */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--luxe-obsidian);
      color: var(--luxe-warm-white);
      font-family: 'Raleway', 'Helvetica Neue', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.8;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', 'Georgia', serif;
      font-weight: 700;
      color: var(--luxe-ivory);
      line-height: 1.15;
    }

    a {
      color: var(--luxe-gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--luxe-gold-pale);
    }

    img {
      display: block;
      max-width: 100%;
    }

    /* =============================================
       UTILITY CLASSES
       ============================================= */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .text-gold {
      color: var(--luxe-gold);
    }

    .text-center {
      text-align: center;
    }

    .gold-gradient-text {
      background: var(--luxe-gold-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Gold divider */
    .divider {
      border: none;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--luxe-gold) 20%,
        var(--luxe-gold) 80%,
        transparent 100%
      );
      width: 50%;
      margin: 48px auto;
    }

    /* Diamond ornament divider */
    .divider-ornament {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 56px auto;
      width: 50%;
    }

    .divider-ornament::before,
    .divider-ornament::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--luxe-gold));
    }

    .divider-ornament::after {
      background: linear-gradient(90deg, var(--luxe-gold), transparent);
    }

    .divider-ornament span {
      width: 8px;
      height: 8px;
      background: var(--luxe-gold);
      transform: rotate(45deg);
      flex-shrink: 0;
    }

    /* =============================================
       VELVET NOISE TEXTURE (applied to body)
       ============================================= */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
      opacity: 0.5;
      mix-blend-mode: overlay;
    }

    /* =============================================
       NAVIGATION
       ============================================= */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.92);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(212, 175, 55, 0.12);
    }

    .nav__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 18px 40px;
    }

    .nav__logo {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--luxe-gold);
      text-decoration: none;
      letter-spacing: 0.06em;
    }

    .nav__links {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--luxe-warm-white);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav__links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--luxe-gold);
      transition: width 0.3s ease;
    }

    .nav__links a:hover {
      color: var(--luxe-gold);
    }

    .nav__links a:hover::after {
      width: 100%;
    }

    /* =============================================
       HERO SECTION
       ============================================= */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 140px 40px 100px;
      position: relative;
      overflow: hidden;
    }

    /* Dramatic spotlight */
    .hero::before {
      content: '';
      position: absolute;
      top: -15%;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 700px;
      background: radial-gradient(
        ellipse at center,
        rgba(212, 175, 55, 0.06) 0%,
        rgba(212, 175, 55, 0.02) 40%,
        transparent 70%
      );
      pointer-events: none;
    }

    .hero__content {
      position: relative;
      z-index: 1;
      max-width: 780px;
    }

    .hero__label {
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--luxe-gold-antique);
      margin-bottom: 28px;
      display: block;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 6vw, 5rem);
      font-weight: 700;
      margin-bottom: 28px;
      line-height: 1.1;
    }

    .hero h1 em {
      font-style: italic;
      color: var(--luxe-gold);
    }

    .hero__subtitle {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.25rem;
      font-weight: 400;
      font-style: italic;
      color: var(--luxe-text-muted);
      margin-bottom: 48px;
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    /* Button */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: transparent;
      color: var(--luxe-gold);
      border: 1px solid var(--luxe-gold);
      padding: 14px 44px;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 0.82rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(212, 175, 55, 0.08),
        transparent
      );
      transition: left 0.6s ease;
    }

    .btn:hover {
      background: rgba(212, 175, 55, 0.06);
      box-shadow: 0 0 24px rgba(212, 175, 55, 0.12);
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn--filled {
      background: var(--luxe-gold);
      color: var(--luxe-obsidian);
    }

    .btn--filled:hover {
      background: var(--luxe-gold-pale);
      box-shadow: 0 4px 24px rgba(212, 175, 55, 0.25);
    }

    /* =============================================
       ABOUT / INTRO SECTION
       ============================================= */
    .about {
      padding: 100px 0;
      text-align: center;
    }

    .about__label {
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--luxe-gold-antique);
      margin-bottom: 20px;
    }

    .about h2 {
      font-size: clamp(2rem, 4vw, 3.2rem);
      margin-bottom: 32px;
    }

    .about p {
      max-width: 640px;
      margin: 0 auto 24px;
      font-size: 1.05rem;
      color: var(--luxe-warm-white);
      line-height: 1.9;
    }

    .about blockquote {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.4rem;
      color: var(--luxe-gold-pale);
      max-width: 580px;
      margin: 40px auto 0;
      padding: 24px 0;
      border-top: 1px solid rgba(212, 175, 55, 0.2);
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      line-height: 1.6;
    }

    /* =============================================
       FEATURES / SERVICES GRID
       ============================================= */
    .features {
      padding: 100px 0;
      background: var(--luxe-onyx);
    }

    .features__header {
      text-align: center;
      margin-bottom: 64px;
    }

    .features__header h2 {
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
      margin-bottom: 16px;
    }

    .features__header p {
      color: var(--luxe-text-muted);
      font-size: 1rem;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
    }

    .feature-card {
      background: var(--luxe-charcoal);
      border: 1px solid var(--luxe-smoke);
      padding: 44px 36px;
      position: relative;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }

    .feature-card:hover {
      border-color: var(--luxe-gold);
      box-shadow: var(--luxe-shadow-gold);
    }

    /* Gold corner accents on hover */
    .feature-card::before,
    .feature-card::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-color: var(--luxe-gold);
      border-style: solid;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .feature-card::before {
      top: -1px;
      left: -1px;
      border-width: 1px 0 0 1px;
    }

    .feature-card::after {
      bottom: -1px;
      right: -1px;
      border-width: 0 1px 1px 0;
    }

    .feature-card:hover::before,
    .feature-card:hover::after {
      opacity: 1;
    }

    .feature-card__icon {
      font-size: 2rem;
      margin-bottom: 20px;
      color: var(--luxe-gold);
    }

    .feature-card__label {
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--luxe-gold-antique);
      margin-bottom: 10px;
    }

    .feature-card h3 {
      font-size: 1.35rem;
      margin-bottom: 14px;
      color: var(--luxe-ivory);
    }

    .feature-card p {
      font-size: 0.95rem;
      color: var(--luxe-warm-white);
      line-height: 1.7;
    }

    /* =============================================
       EDITORIAL / SPLIT SECTION
       ============================================= */
    .editorial {
      padding: 100px 0;
    }

    .editorial__row {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 64px;
      align-items: center;
    }

    .editorial__image {
      position: relative;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: var(--luxe-charcoal);
    }

    .editorial__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.65) contrast(1.1) saturate(0.8);
    }

    /* Gold frame */
    .editorial__image::after {
      content: '';
      position: absolute;
      inset: 12px;
      border: 1px solid rgba(212, 175, 55, 0.25);
      pointer-events: none;
    }

    .editorial__text h2 {
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      margin-bottom: 24px;
    }

    .editorial__text p {
      font-size: 1rem;
      line-height: 1.9;
      margin-bottom: 16px;
      color: var(--luxe-warm-white);
    }

    .editorial__text .btn {
      margin-top: 24px;
    }

    /* =============================================
       TESTIMONIAL / QUOTE SECTION
       ============================================= */
    .testimonial {
      padding: 100px 0;
      text-align: center;
      background: var(--luxe-onyx);
      position: relative;
    }

    /* Spotlight glow */
    .testimonial::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 300px;
      background: radial-gradient(
        ellipse at center,
        rgba(212, 175, 55, 0.04) 0%,
        transparent 70%
      );
      pointer-events: none;
    }

    .testimonial__quote {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: clamp(1.4rem, 3vw, 2rem);
      color: var(--luxe-ivory);
      max-width: 700px;
      margin: 0 auto 32px;
      line-height: 1.6;
      position: relative;
      z-index: 1;
    }

    .testimonial__author {
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--luxe-gold-antique);
      position: relative;
      z-index: 1;
    }

    /* =============================================
       CALL TO ACTION
       ============================================= */
    .cta {
      padding: 120px 0;
      text-align: center;
      position: relative;
    }

    .cta__inner {
      max-width: 700px;
      margin: 0 auto;
      padding: 64px 48px;
      border: 1px solid rgba(212, 175, 55, 0.2);
      position: relative;
    }

    /* Corner ornaments */
    .cta__inner::before,
    .cta__inner::after {
      content: '';
      position: absolute;
      width: 32px;
      height: 32px;
      border-color: var(--luxe-gold);
      border-style: solid;
    }

    .cta__inner::before {
      top: -1px;
      left: -1px;
      border-width: 1px 0 0 1px;
    }

    .cta__inner::after {
      bottom: -1px;
      right: -1px;
      border-width: 0 1px 1px 0;
    }

    .cta h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 20px;
    }

    .cta p {
      font-size: 1.05rem;
      color: var(--luxe-text-muted);
      margin-bottom: 40px;
      max-width: 480px;
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
    .footer {
      padding: 48px 40px;
      border-top: 1px solid rgba(212, 175, 55, 0.1);
      text-align: center;
      background: var(--luxe-obsidian);
    }

    .footer__logo {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--luxe-gold);
      letter-spacing: 0.08em;
      margin-bottom: 16px;
    }

    .footer p {
      font-size: 0.82rem;
      color: var(--luxe-pewter);
      letter-spacing: 0.04em;
    }

    .footer__links {
      display: flex;
      gap: 28px;
      justify-content: center;
      list-style: none;
      margin: 16px 0;
    }

    .footer__links a {
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--luxe-text-muted);
      transition: color 0.3s ease;
    }

    .footer__links a:hover {
      color: var(--luxe-gold);
    }

    /* =============================================
       RESPONSIVE
       ============================================= */
    @media (max-width: 768px) {
      .nav__inner {
        padding: 16px 20px;
      }

      .nav__links {
        gap: 20px;
      }

      .nav__links a {
        font-size: 0.72rem;
        letter-spacing: 0.1em;
      }

      .hero {
        padding: 120px 24px 80px;
      }

      .container {
        padding: 0 24px;
      }

      .features__grid {
        grid-template-columns: 1fr;
      }

      .editorial__row {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .cta__inner {
        padding: 48px 28px;
      }

      .btn {
        padding: 12px 32px;
        font-size: 0.78rem;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="nav__inner">
      <a href="#" class="nav__logo">MAISON NOIR</a>
      <ul class="nav__links">
        <li><a href="#about">Atelier</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#editorial">Editorial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__content">
      <span class="hero__label">Established MMXII</span>
      <h1>Where Darkness Meets <em>Elegance</em></h1>
      <p class="hero__subtitle">
        A curated experience of uncompromising luxury,
        crafted for those who appreciate the art of refinement.
      </p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <a href="#collection" class="btn btn--filled">Explore Collection</a>
        <a href="#about" class="btn">Our Story</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about container" id="about">
    <div class="divider-ornament"><span></span></div>
    <p class="about__label">The Atelier</p>
    <h2>Crafted Without Compromise</h2>
    <p>
      Every detail is considered. Every material is chosen with intention.
      We believe that true luxury is not excess -- it is the relentless
      pursuit of perfection in every element, no matter how small.
    </p>
    <p>
      Our atelier draws inspiration from the quiet opulence of midnight
      interiors, the warmth of candlelit gold, and the timeless elegance
      of materials that only grow more beautiful with age.
    </p>
    <blockquote>
      "Luxury is in each detail."
    </blockquote>
  </section>

  <!-- Features / Services -->
  <section class="features" id="collection">
    <div class="container">
      <div class="features__header">
        <p class="about__label">The Collection</p>
        <h2>Three Pillars of Excellence</h2>
        <p>Each offering represents our commitment to the highest standard.</p>
      </div>
      <div class="features__grid">
        <div class="feature-card">
          <div class="feature-card__icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <p class="feature-card__label">Premiere</p>
          <h3>Bespoke Design</h3>
          <p>
            Tailored from concept to completion, each project is a singular
            expression of your vision, rendered with meticulous precision
            and an unwavering eye for detail.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <p class="feature-card__label">Heritage</p>
          <h3>Timeless Craft</h3>
          <p>
            Drawing from centuries of artisanal tradition, we employ
            techniques that have been refined over generations, ensuring
            each piece endures beyond passing trends.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p class="feature-card__label">Exclusif</p>
          <h3>Rare Materials</h3>
          <p>
            We source only the finest and most distinctive materials,
            each selected for its character, quality, and ability to
            transform the ordinary into the extraordinary.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Editorial / Split Section -->
  <section class="editorial container" id="editorial">
    <div class="editorial__row">
      <div class="editorial__image">
        <!-- Placeholder for a dark, moody editorial image -->
        <div style="width:100%;height:100%;background:linear-gradient(135deg, var(--luxe-charcoal) 0%, var(--luxe-onyx) 100%);display:flex;align-items:center;justify-content:center;">
          <span style="color:var(--luxe-pewter);font-family:'Raleway',sans-serif;font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;">Editorial Image</span>
        </div>
      </div>
      <div class="editorial__text">
        <p class="about__label">The Process</p>
        <h2>An Art Born of Patience</h2>
        <p>
          Great work cannot be rushed. Our process begins with listening --
          understanding not just what you want, but what you truly need.
          From there, we move through stages of conceptualisation, refinement,
          and meticulous execution.
        </p>
        <p>
          The result is never merely a product. It is an expression of
          shared vision, realised with the care and precision that only
          time and dedication can provide.
        </p>
        <a href="#" class="btn">Learn More</a>
      </div>
    </div>
  </section>

  <!-- Testimonial -->
  <section class="testimonial">
    <div class="container">
      <div class="divider-ornament"><span></span></div>
      <p class="testimonial__quote">
        "They did not simply meet our expectations -- they redefined
        what we believed was possible. A truly transcendent experience."
      </p>
      <p class="testimonial__author">Alexandra Whitmore -- Creative Director</p>
      <div class="divider-ornament"><span></span></div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta" id="contact">
    <div class="container">
      <div class="cta__inner">
        <h2>Begin Your Journey</h2>
        <p>
          Exceptional experiences start with a single conversation.
          We invite you to reach out.
        </p>
        <div class="btn-group">
          <a href="#" class="btn btn--filled">Book a Consultation</a>
          <a href="#" class="btn">View Portfolio</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__logo">MAISON NOIR</div>
    <ul class="footer__links">
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p>Crafted with intention. Dark Luxe aesthetic.</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Always use off-black, not pure black** -- values like #0A0A0A or #111111 produce richer, more comfortable dark surfaces than #000000, which causes halation on OLED displays and eye strain on LCD panels
- **Calibrate font weight for dark backgrounds** -- light text on dark surfaces appears optically heavier than dark text on light surfaces; reduce body text weight by one step (e.g., use 300 instead of 400) and add 0.02-0.04em letter-spacing to compensate
- **Layer your shadows warm** -- standard box-shadow with pure black rgba creates lifeless depth; add a faint warm tone (rgba(212, 175, 55, 0.05)) to shadow colors to integrate them with the gold accent system
- **Use CSS noise for velvet texture** -- an inline SVG feTurbulence filter at 2-4% opacity with mix-blend-mode: overlay creates a convincing velvet/suede texture without loading external image assets
- **Gold gradients require multiple stops** -- a convincing metallic gold effect uses at least 4-5 gradient stops alternating between darker (#bf953f) and lighter (#fcf6ba) gold tones; two-stop gold gradients look flat and cheap
- **Test gold on multiple screens** -- gold hex values render very differently across sRGB and P3 displays; what looks warm and rich on a MacBook may appear muddy on an older external monitor
- **Provide fallbacks for backdrop-filter** -- the semi-transparent navigation and glassmorphism-hybrid effects require backdrop-filter support; use @supports to provide a solid dark fallback background
- **Animate with restraint** -- luxury motion design favors long, eased transitions (400-600ms cubic-bezier) with subtle property changes; avoid bouncy spring animations or flashy keyframe sequences that undermine the premium tone
