# Grain and Grit Design Reference

## Overview

Grain and Grit is a texture-forward design aesthetic that celebrates the raw, tactile qualities of analog media -- film grain, noise overlays, rough surfaces, and the beautiful imperfections that emerge from physical production processes. Unlike polished digital design that strives for pixel-perfect smoothness, Grain and Grit deliberately embraces the visual artifacts of analog photography, aged paper, worn concrete, and weathered materials. Every surface carries evidence of time, touch, and physical reality. The aesthetic draws from the visual language of **35mm film photography, letterpress printing, darkroom processing, industrial materials, and natural erosion**, transforming what conventional design would call "defects" into the primary visual vocabulary.

Grain and Grit exists as a direct counterpoint to the sterile flatness of modern corporate UI. Where minimalist design removes every trace of materiality, Grain and Grit adds it back -- layering noise, stipple, speckle, and rough texture onto backgrounds, typography, images, and UI components. The effect is warmth, authenticity, and a sense of human presence. A Grain and Grit interface feels like something you could reach out and touch: a concrete wall with fine aggregate exposed, a photograph pulled from a chemical bath, a broadsheet printed on uncoated stock. The grain is not decorative afterthought but structural foundation -- it is the first thing applied and the last thing seen.

In web and UI contexts, the aesthetic relies heavily on **SVG feTurbulence filters, CSS noise generation, blend modes, and subtle animation** to simulate the organic randomness of analog grain. Colors tend toward muted, earthy, desaturated tones -- ochres, slates, warm grays, and deep charcoals -- that reinforce the material honesty of the style. Typography favors imperfect letterforms: slightly rough sans-serifs, ink-trapped serifs, and monospaced faces that evoke mechanical reproduction. The overall mood is contemplative, grounded, and unmistakably physical -- a design language for projects that want to communicate craftsmanship, authenticity, and resistance to digital homogeneity.

---

## Visual Characteristics

### Core Design Traits

- **Film grain noise overlays** -- persistent, fine-grained noise covering backgrounds and images, simulating the silver halide crystals of analog film stock at ISO 800-3200
- **Rough surface textures** -- concrete, stone, uncoated paper, raw canvas, and weathered wood serve as visual references for background treatments and container surfaces
- **Stipple and speckle patterns** -- dense fields of tiny dots and irregular marks that create visual density and tactile suggestion without specific imagery
- **Muted, desaturated color palette** -- warm grays, ochres, slate blues, and earth tones that avoid digital vibrancy in favor of pigment-like richness
- **Visible material imperfection** -- scratches, dust spots, fiber patterns, ink bleed, and registration errors are preserved and celebrated rather than cleaned away
- **Layered texture depth** -- multiple semi-transparent texture layers (grain, noise, vignette, scratch) stacked to create rich, dimensional surfaces
- **Analog photography references** -- light leaks, vignetting, halation, and depth-of-field blur recall darkroom printing and expired film stocks
- **Ink and print artifacts** -- uneven ink coverage, press marks, roller patterns, and the slight emboss of letterpress type inform typographic treatments
- **Soft vignetting** -- gradual darkening at edges that draws focus inward and references lens optics and analog printing falloff
- **Tactile contrast** -- smooth text and clean UI elements placed against rough, noisy backgrounds create a push-pull between readability and texture
- **Organic randomness** -- no two areas of noise are identical; the visual field has the natural irregularity of physical materials rather than tiled digital patterns

### Design Principles

- **Texture as foundation** -- grain and noise are not decorative additions but the base layer upon which all other design elements rest; apply texture first, then compose
- **Analog authenticity** -- every visual choice should reference a real physical process (film development, stone erosion, ink absorption, paper aging) rather than arbitrary digital effects
- **Restraint in roughness** -- the goal is warmth and tactility, not destruction; grain should enhance readability and mood, never overwhelm content
- **Material honesty** -- surfaces should feel like what they reference; concrete should look heavy, paper should feel fibrous, metal should appear cold and precise
- **Depth through layering** -- build visual richness by stacking semi-transparent texture layers at varying opacities and blend modes rather than using a single heavy effect
- **Functional clarity** -- despite pervasive texture, interactive elements remain clearly identifiable; buttons are pressable, links are followable, hierarchy is preserved
- **Warmth over coldness** -- the aesthetic leans toward organic warmth (amber, ochre, warm gray) rather than clinical coldness; even neutral grays carry a warm undertone
- **Imperfection with intention** -- every rough edge, noise artifact, and texture layer is a deliberate design choice; chaos is controlled, never accidental

---

## Color Palette

The Grain and Grit palette draws from the colors of physical materials: unbleached paper, wet concrete, oxidized metal, photographic sepia, slate stone, and natural earth pigments. Colors are universally desaturated, as if filtered through a layer of dust or printed on uncoated stock. Warm neutrals dominate, with muted accent tones providing just enough contrast for hierarchy without breaking the material illusion.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| Deep Charcoal | `#1A1916` | Primary dark background, deepest shadows |
| Wet Concrete | `#2C2B28` | Secondary background, card surfaces, containers |
| Quarry Stone | `#3D3A35` | Elevated surfaces, active states, subtle contrast panels |
| Slate Gray | `#5A5650` | Borders, dividers, structural UI lines |
| Cement Dust | `#7D7870` | Muted body text, secondary labels, metadata |
| Pumice | `#9E978D` | Placeholder text, disabled states, subtle accents |
| Sandstone | `#B5A998` | Secondary text on dark, light-mode body text |
| Raw Linen | `#D6CCBC` | Primary text on dark backgrounds, headings |
| Unbleached Paper | `#EAE3D6` | High-emphasis text, hero display, bright foreground |
| Burnt Ochre | `#A6743B` | Primary warm accent, links, interactive highlights |
| Rust Oxide | `#8B4F2A` | Strong emphasis, hover states, warm callouts |
| Dried Clay | `#6E3E28` | Deep warm accent, pressed states, decorative marks |
| Slate Blue | `#5B6A78` | Cool accent, secondary interactive, information states |
| Storm Gray | `#47545F` | Cool background accent, code blocks, inset panels |
| Lichen Green | `#6B7A5E` | Success states, positive indicators, natural accent |

### CSS Custom Properties

```css
:root {
  /* Dark tones */
  --grit-charcoal: #1a1916;
  --grit-concrete: #2c2b28;
  --grit-quarry: #3d3a35;
  --grit-slate: #5a5650;

  /* Mid tones */
  --grit-cement: #7d7870;
  --grit-pumice: #9e978d;
  --grit-sandstone: #b5a998;

  /* Light tones */
  --grit-linen: #d6ccbc;
  --grit-paper: #eae3d6;

  /* Warm accents */
  --grit-ochre: #a6743b;
  --grit-rust: #8b4f2a;
  --grit-clay: #6e3e28;

  /* Cool accents */
  --grit-blue: #5b6a78;
  --grit-storm: #47545f;
  --grit-lichen: #6b7a5e;

  /* Functional mappings */
  --grit-bg-primary: var(--grit-charcoal);
  --grit-bg-secondary: var(--grit-concrete);
  --grit-bg-surface: var(--grit-quarry);
  --grit-text-primary: var(--grit-paper);
  --grit-text-secondary: var(--grit-linen);
  --grit-text-muted: var(--grit-cement);
  --grit-accent-primary: var(--grit-ochre);
  --grit-accent-strong: var(--grit-rust);
  --grit-accent-cool: var(--grit-blue);
  --grit-border: var(--grit-slate);
  --grit-border-subtle: rgba(90, 86, 80, 0.4);
}
```

---

## Typography

Grain and Grit typography favors typefaces that carry visible evidence of their production method -- ink traps from metal type, slight irregularities from optical sizing, the mechanical rhythm of typewriter keys, or the honest weight of industrial signage. Display faces can be rougher and more expressive, but body text must remain legible against textured backgrounds. The key tension is between tactile imperfection in the typeface and functional clarity in the layout.

### Recommended Google Fonts

| Font | Style | Usage |
|------|-------|-------|
| **DM Serif Display** | High-contrast serif with ink traps | Hero headlines, section titles, display text |
| **Libre Baskerville** | Classic serif with warm, printed feel | Subheadings, pull quotes, editorial emphasis |
| **Source Serif 4** | Sturdy workhorse serif | Long-form body text, article content |
| **Inter** | Clean geometric sans with optical sizing | UI labels, navigation, metadata |
| **Space Mono** | Monospaced with industrial character | Code blocks, technical data, timestamps |
| **IBM Plex Mono** | Precise industrial monospace | Secondary mono, captions, tags |
| **Playfair Display** | High-contrast display serif | Decorative headings, editorial titles |
| **Bitter** | Slab serif designed for screen readability | Body text alternative, card content |
| **JetBrains Mono** | Developer monospace with ligatures | Code snippets, terminal-style elements |

### Font Pairing Suggestions

| Pairing | Headings | Body | Mood |
|---------|----------|------|------|
| **Darkroom Print** | DM Serif Display | Source Serif 4 | Elegant, printed, photographic editorial |
| **Industrial Manual** | Inter (700) | Space Mono | Technical, precise, factory-floor documentation |
| **Letterpress Studio** | Playfair Display | Bitter | Rich, tactile, artisan craft communication |
| **Concrete & Steel** | DM Serif Display | Inter | High contrast between ornate display and clean utility |
| **Analog Terminal** | Libre Baskerville | IBM Plex Mono | Warm editorial headings with mechanical body text |

### CSS Example

```css
/* Import texture-appropriate Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:wght@300;400;600;700&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;500&family=Bitter:wght@400;500;700&display=swap');

/* Hero / Display -- high-contrast serif with ink-trap character */
h1 {
  font-family: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: var(--grit-paper);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
}

/* Section headings -- warm editorial serif */
h2 {
  font-family: 'Libre Baskerville', 'Source Serif 4', Georgia, serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--grit-linen);
  letter-spacing: 0.01em;
  line-height: 1.2;
  margin-bottom: 1rem;
}

/* Sub-headings -- clean utility sans */
h3 {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--grit-sandstone);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Body text -- readable serif for long-form content */
body {
  font-family: 'Source Serif 4', 'Bitter', Georgia, serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--grit-text-secondary);
}

/* Metadata, labels, technical text */
.grit-label {
  font-family: 'Space Mono', 'IBM Plex Mono', 'Courier New', monospace;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--grit-cement);
}

/* Display accent -- large editorial statement */
.grit-display {
  font-family: 'Playfair Display', 'DM Serif Display', Georgia, serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 400;
  font-style: italic;
  color: var(--grit-ochre);
  line-height: 0.95;
  letter-spacing: -0.03em;
}
```

---

## Layout Principles

- **Generous whitespace with textured fills** -- negative space is never truly empty; even open areas carry a subtle grain or noise layer that maintains the tactile atmosphere
- **Content-first hierarchy** -- despite heavy texture, information architecture is clean and conventional; grain supports content rather than competing with it
- **Centered, readable columns** -- body content sits in a narrow column (600-780px) for comfortable reading, while textured backgrounds extend full-bleed
- **Subtle asymmetry** -- layouts are mostly structured but break the grid occasionally with offset images, pull quotes, or slightly off-center section titles
- **Layered z-depth** -- cards and surfaces use grain intensity and shadow to communicate elevation; rougher, noisier surfaces feel closer to the viewer
- **Strong horizontal rhythm** -- generous, consistent vertical spacing between sections punctuated by textured dividers (grain bars, stipple lines, rough rules)
- **Image-text integration** -- photographs blend into backgrounds through shared grain treatment; images feel embedded in the surface rather than placed on top of it
- **Progressive texture density** -- hero sections and featured areas carry heavier grain; secondary content areas use lighter texture to create natural focus hierarchy
- **Responsive texture scaling** -- grain size and overlay opacity adjust at breakpoints to remain visible but not overwhelming on small screens
- **Edge-to-edge immersion** -- background textures, noise overlays, and vignettes extend to every edge of the viewport, creating an immersive material environment

---

## CSS / Design Techniques

### Film Grain Overlay

```css
/* Global film grain overlay using SVG feTurbulence noise */
.grit-grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
  background-size: 512px 512px;
}

/* Animated grain -- subtle movement for organic feel */
@keyframes grit-grain-drift {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-2px, 1px); }
  50%  { transform: translate(1px, -1px); }
  75%  { transform: translate(-1px, 2px); }
  100% { transform: translate(0, 0); }
}

.grit-grain-overlay--animated {
  animation: grit-grain-drift 0.8s steps(4) infinite;
  background-size: calc(100% + 4px) calc(100% + 4px);
}

/* Heavy grain variant for hero sections and featured areas */
.grit-grain-overlay--heavy {
  opacity: 0.12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hg)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
}
```

### Card Component

```css
/* Textured card -- feels like a slab of rough material */
.grit-card {
  background: var(--grit-concrete);
  border: 1px solid var(--grit-border-subtle);
  border-radius: 2px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.25),
    0 6px 20px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

/* Card surface grain texture */
.grit-card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cg)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Subtle stipple bottom edge */
.grit-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--grit-ochre) 0%,
    var(--grit-rust) 50%,
    var(--grit-ochre) 100%
  );
  opacity: 0.5;
}

.grit-card:hover {
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

/* Card heading */
.grit-card h3 {
  font-family: 'DM Serif Display', Georgia, serif;
  color: var(--grit-paper);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

/* Card body text */
.grit-card p {
  font-family: 'Source Serif 4', Georgia, serif;
  color: var(--grit-sandstone);
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Card metadata */
.grit-card__meta {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--grit-cement);
  margin-bottom: 1rem;
}
```

### Button Component

```css
/* Primary Grain and Grit button -- solid, tactile, grounded */
.grit-btn {
  display: inline-block;
  padding: 0.7rem 1.8rem;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--grit-charcoal);
  background: var(--grit-ochre);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.15s ease;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Grain texture on button surface */
.grit-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bg)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  pointer-events: none;
  mix-blend-mode: multiply;
}

.grit-btn:hover {
  background: var(--grit-rust);
  color: var(--grit-paper);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.grit-btn:active {
  transform: translateY(1px);
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Ghost / outline variant */
.grit-btn--ghost {
  background: transparent;
  border: 1px solid var(--grit-slate);
  color: var(--grit-sandstone);
}

.grit-btn--ghost::before {
  display: none;
}

.grit-btn--ghost:hover {
  border-color: var(--grit-ochre);
  color: var(--grit-ochre);
  background: rgba(166, 116, 59, 0.06);
}

/* Large variant for hero sections */
.grit-btn--lg {
  padding: 1rem 2.5rem;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
}
```

### Navigation Bar

```css
/* Grain and Grit navigation -- clean structure, textured surface */
.grit-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--grit-charcoal);
  border-bottom: 1px solid var(--grit-border-subtle);
  position: relative;
  z-index: 100;
}

/* Subtle grain on nav surface */
.grit-nav::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ng'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ng)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.grit-nav__brand {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.3rem;
  color: var(--grit-paper);
  text-decoration: none;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
}

.grit-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
}

.grit-nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--grit-cement);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease;
}

.grit-nav__link:hover {
  color: var(--grit-ochre);
  border-bottom-color: var(--grit-ochre);
}

.grit-nav__link--active {
  color: var(--grit-paper);
  border-bottom-color: var(--grit-rust);
}
```

### Hero Section

```css
/* Full-bleed textured hero with layered grain */
.grit-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 2rem;
  background:
    /* Warm vignette */
    radial-gradient(ellipse at center, transparent 35%, rgba(26, 25, 22, 0.75) 100%),
    /* Warm light from bottom-left */
    radial-gradient(circle at 20% 80%, rgba(166, 116, 59, 0.06) 0%, transparent 50%),
    /* Cool shadow from top-right */
    radial-gradient(circle at 85% 15%, rgba(71, 84, 95, 0.08) 0%, transparent 45%),
    var(--grit-charcoal);
  overflow: hidden;
}

/* Heavy film grain overlay on hero */
.grit-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hg)'/%3E%3C/svg%3E");
  background-size: 512px 512px;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
}

/* Fine horizontal scan lines for analog TV feel */
.grit-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.015) 3px,
    rgba(0, 0, 0, 0.015) 4px
  );
  pointer-events: none;
  z-index: 1;
}

.grit-hero__content {
  position: relative;
  z-index: 2;
  max-width: 780px;
}

.grit-hero__title {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1.05;
  color: var(--grit-paper);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.grit-hero__title em {
  color: var(--grit-ochre);
  font-style: normal;
}

.grit-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 1.05rem);
  font-weight: 500;
  color: var(--grit-cement);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
}

.grit-hero__body {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--grit-sandstone);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 2rem;
}
```

### Stipple Divider

```css
/* Stipple-dot horizontal divider -- simulates ink-stipple illustration technique */
.grit-divider {
  border: none;
  height: 2px;
  background: var(--grit-slate);
  position: relative;
  margin: 3rem 0;
  opacity: 0.4;
}

/* Stipple dots scattered along the divider */
.grit-divider::before {
  content: '';
  position: absolute;
  inset: -8px 0;
  background-image: radial-gradient(circle, var(--grit-cement) 0.7px, transparent 0.7px);
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  opacity: 0.3;
  pointer-events: none;
}

/* Ochre accent dot cluster */
.grit-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--grit-ochre);
  box-shadow:
    -12px 0 0 2px var(--grit-ochre),
    12px 0 0 2px var(--grit-ochre);
  opacity: 0.5;
}

/* Full-width textured section break */
.grit-section-break {
  height: 60px;
  position: relative;
  overflow: hidden;
}

.grit-section-break::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sb'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5 1.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sb)'/%3E%3C/svg%3E");
  background-size: 256px 64px;
  opacity: 0.06;
  mix-blend-mode: overlay;
}
```

### Grainy Gradient Background

```css
/* Grainy gradient -- smooth color transition with visible dithering noise */
.grit-gradient {
  position: relative;
  background: linear-gradient(
    135deg,
    var(--grit-charcoal) 0%,
    var(--grit-quarry) 40%,
    var(--grit-concrete) 100%
  );
}

/* Noise layer that creates the grainy dithering effect */
.grit-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='gg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23gg)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
  filter: contrast(1.5) brightness(1.2);
}

/* Warm ochre grainy gradient variant */
.grit-gradient--warm {
  background: linear-gradient(
    160deg,
    var(--grit-charcoal) 0%,
    var(--grit-clay) 45%,
    var(--grit-rust) 100%
  );
}

/* Cool storm grainy gradient variant */
.grit-gradient--cool {
  background: linear-gradient(
    145deg,
    var(--grit-charcoal) 0%,
    var(--grit-storm) 50%,
    var(--grit-blue) 100%
  );
}
```

### Image Treatment

```css
/* Apply grain and analog treatment to images */
.grit-img {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 2px;
}

/* Grain overlay on image */
.grit-img::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ig'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ig)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.grit-img img {
  display: block;
  width: 100%;
  height: auto;
  filter: contrast(1.05) saturate(0.8) brightness(0.95);
}

/* Desaturated, high-contrast treatment -- darkroom print feel */
.grit-img--darkroom img {
  filter: contrast(1.3) saturate(0.3) brightness(0.9) sepia(0.15);
}

/* Full desaturation for monochrome grain effect */
.grit-img--mono img {
  filter: grayscale(1) contrast(1.2) brightness(1.05);
}

/* Warm sepia toning */
.grit-img--sepia img {
  filter: sepia(0.4) contrast(1.1) saturate(0.7) brightness(0.95);
}

/* Vignette frame overlay */
.grit-img--vignette::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(26, 25, 22, 0.5) 100%
  );
  pointer-events: none;
  z-index: 1;
}
```

---

## Design Do's and Don'ts

### Do's

- **Do** apply film grain and noise overlays to every major surface -- backgrounds, cards, hero sections, and image containers should all carry visible texture
- **Do** use SVG feTurbulence filters with fractalNoise for organic, non-repeating grain that scales cleanly across resolutions
- **Do** keep texture subtle on content areas; grain opacity between 0.03 and 0.08 on cards and 0.06 to 0.15 on backgrounds strikes the right balance
- **Do** desaturate and slightly increase contrast on photographs to integrate them with the overall textured environment
- **Do** use warm, muted accent colors (ochre, rust, clay) that feel like natural pigments rather than digital neon
- **Do** maintain readable typography against textured backgrounds by using sufficient weight and contrast; grain should enhance, not obscure
- **Do** layer multiple texture effects at low opacity rather than applying a single heavy texture; subtlety creates richness
- **Do** pair high-contrast display serifs with clean sans-serif or monospace body text for a printed-document feel

### Don'ts

- **Don't** apply grain so heavily that text becomes illegible or images lose their content -- the aesthetic is "gritty", not "destroyed"
- **Don't** use bright, fully saturated colors; every hue should be pulled toward gray as if printed on uncoated stock or filtered through dust
- **Don't** use perfectly smooth gradients without noise; in this aesthetic, all color transitions should carry visible dithering grain
- **Don't** mix Grain and Grit textures with glossy, reflective, or glass-morphism effects -- they are fundamentally incompatible material languages
- **Don't** use large border-radius values; hard edges and minimal rounding (1-3px) maintain the raw, material-honest character
- **Don't** tile small grain textures at sizes where the repetition pattern becomes visible; use large SVG viewboxes (256px-512px) with stitchTiles
- **Don't** animate textures aggressively; if grain moves, it should be a subtle 2-4 frame drift, not a rapid flicker that causes visual fatigue
- **Don't** neglect performance -- SVG filter noise can be GPU-intensive; use will-change on overlay elements and test on lower-powered devices

---

## Related Aesthetics

| Aesthetic | Relationship to Grain and Grit |
|-----------|-------------------------------|
| **90s Grunge** | Ideological sibling; shares distressed textures and analog imperfection, but Grunge is more chaotic and rebellious while Grain and Grit is more controlled and contemplative |
| **Wabi-Sabi** | Philosophical alignment; both celebrate imperfection and the beauty of aging, though Wabi-Sabi is rooted in Japanese aesthetics and tends toward minimalism |
| **Brutalist Web Design** | Shares the rejection of polish and the embrace of raw materiality, but Brutalism strips texture to expose structure while Grain and Grit adds texture to enrich surface |
| **Industrial Design** | Overlaps in material references (concrete, steel, raw surfaces) and muted palettes; Industrial leans more mechanical and functional, less warm and organic |
| **Analog / Retro Photography** | Direct visual ancestor; Grain and Grit applies the artifacts of analog photography (grain, light leaks, vignettes) to digital interfaces |
| **Dark Academia** | Shares muted earth tones and a fondness for aged paper and warm lighting, though Dark Academia is scholarly and ornamental where Grain and Grit is material and textural |
| **Risograph / Print** | Close cousin; Risograph design celebrates the artifacts of a specific mechanical printing process, while Grain and Grit draws from a broader range of analog production methods |
| **Organic Minimalism** | Both value warmth and natural materials over digital sterility; Organic Minimalism reduces visual noise while Grain and Grit embraces it as a defining feature |
| **Corporate Grunge** | Commercialized texture aesthetic that borrows grain and rough surfaces but contains them within polished corporate layouts, lacking the material conviction of Grain and Grit |
| **Kinfolk / Editorial** | Shares desaturated photography and warm muted palettes; Kinfolk is cleaner and more curated, while Grain and Grit is rougher and more textural |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grain and Grit</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:wght@300;400;600;700&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Bitter:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    /* ================================================================
       GRAIN AND GRIT -- Quick-Start Template
       Heavy texture aesthetic: film grain, noise overlays,
       rough surfaces, analog imperfection
       ================================================================ */

    :root {
      /* Dark tones */
      --grit-charcoal: #1a1916;
      --grit-concrete: #2c2b28;
      --grit-quarry: #3d3a35;
      --grit-slate: #5a5650;

      /* Mid tones */
      --grit-cement: #7d7870;
      --grit-pumice: #9e978d;
      --grit-sandstone: #b5a998;

      /* Light tones */
      --grit-linen: #d6ccbc;
      --grit-paper: #eae3d6;

      /* Warm accents */
      --grit-ochre: #a6743b;
      --grit-rust: #8b4f2a;
      --grit-clay: #6e3e28;

      /* Cool accents */
      --grit-blue: #5b6a78;
      --grit-storm: #47545f;
      --grit-lichen: #6b7a5e;

      /* Functional */
      --grit-bg-primary: var(--grit-charcoal);
      --grit-bg-secondary: var(--grit-concrete);
      --grit-bg-surface: var(--grit-quarry);
      --grit-text-primary: var(--grit-paper);
      --grit-text-secondary: var(--grit-linen);
      --grit-text-muted: var(--grit-cement);
      --grit-accent-primary: var(--grit-ochre);
      --grit-accent-strong: var(--grit-rust);
      --grit-accent-cool: var(--grit-blue);
      --grit-border: var(--grit-slate);
      --grit-border-subtle: rgba(90, 86, 80, 0.4);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--grit-bg-primary);
      color: var(--grit-text-secondary);
      font-family: 'Source Serif 4', 'Bitter', Georgia, serif;
      font-size: 1rem;
      line-height: 1.8;
      position: relative;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ---- Global Film Grain Overlay ---- */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      opacity: 0.06;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      mix-blend-mode: overlay;
      z-index: 9999;
    }

    /* ---- Navigation ---- */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--grit-charcoal);
      border-bottom: 1px solid var(--grit-border-subtle);
      position: relative;
      z-index: 100;
    }

    nav::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ng'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ng)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    .brand {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 1.3rem;
      color: var(--grit-paper);
      text-decoration: none;
      letter-spacing: 0.02em;
      position: relative;
      z-index: 1;
    }

    nav ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      position: relative;
      z-index: 1;
    }

    nav a {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--grit-cement);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding-bottom: 0.25rem;
      border-bottom: 2px solid transparent;
      transition: color 0.15s ease, border-color 0.15s ease;
    }

    nav a:hover,
    nav a.active {
      color: var(--grit-ochre);
      border-bottom-color: var(--grit-ochre);
    }

    /* ---- Hero Section ---- */
    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5rem 2rem;
      background:
        radial-gradient(ellipse at center, transparent 35%, rgba(26, 25, 22, 0.75) 100%),
        radial-gradient(circle at 20% 80%, rgba(166, 116, 59, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 85% 15%, rgba(71, 84, 95, 0.08) 0%, transparent 45%),
        var(--grit-charcoal);
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.1;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hg)'/%3E%3C/svg%3E");
      background-size: 512px 512px;
      pointer-events: none;
      mix-blend-mode: overlay;
      z-index: 1;
    }

    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(0, 0, 0, 0.015) 3px,
        rgba(0, 0, 0, 0.015) 4px
      );
      pointer-events: none;
      z-index: 1;
    }

    .hero-content {
      max-width: 780px;
      position: relative;
      z-index: 2;
    }

    .hero h1 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: clamp(3rem, 7vw, 5.5rem);
      line-height: 1.05;
      color: var(--grit-paper);
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero h1 em {
      color: var(--grit-ochre);
      font-style: normal;
    }

    .hero .subtitle {
      font-family: 'Inter', sans-serif;
      font-size: clamp(0.8rem, 1.4vw, 1rem);
      font-weight: 500;
      color: var(--grit-cement);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2.5rem;
    }

    .hero .lead {
      font-family: 'Source Serif 4', Georgia, serif;
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      color: var(--grit-sandstone);
      line-height: 1.8;
      max-width: 600px;
      margin-bottom: 2.5rem;
    }

    /* ---- Buttons ---- */
    .btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.15s ease;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bg)'/%3E%3C/svg%3E");
      background-size: 128px 128px;
      pointer-events: none;
      mix-blend-mode: multiply;
    }

    .btn--primary {
      color: var(--grit-charcoal);
      background: var(--grit-ochre);
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .btn--primary:hover {
      background: var(--grit-rust);
      color: var(--grit-paper);
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .btn--ghost {
      color: var(--grit-sandstone);
      background: transparent;
      border: 1px solid var(--grit-slate);
    }

    .btn--ghost::before {
      display: none;
    }

    .btn--ghost:hover {
      border-color: var(--grit-ochre);
      color: var(--grit-ochre);
      background: rgba(166, 116, 59, 0.06);
    }

    .btn-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* ---- Stipple Divider ---- */
    .divider {
      border: none;
      height: 1px;
      background: var(--grit-slate);
      position: relative;
      margin: 0;
      opacity: 0.3;
    }

    .divider::before {
      content: '';
      position: absolute;
      inset: -6px 0;
      background-image: radial-gradient(circle, var(--grit-cement) 0.6px, transparent 0.6px);
      background-size: 5px 5px;
      opacity: 0.25;
      pointer-events: none;
    }

    /* ---- Content Sections ---- */
    .section {
      max-width: 780px;
      margin: 0 auto;
      padding: 5rem 2rem;
    }

    .section__label {
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--grit-cement);
      margin-bottom: 1rem;
      display: block;
    }

    .section h2 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      color: var(--grit-paper);
      line-height: 1.15;
      margin-bottom: 1.5rem;
      letter-spacing: -0.01em;
    }

    .section h2 em {
      color: var(--grit-ochre);
      font-style: italic;
    }

    .section p {
      color: var(--grit-sandstone);
      margin-bottom: 1.5rem;
      max-width: 650px;
    }

    /* ---- Card Grid ---- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2.5rem;
    }

    .card {
      background: var(--grit-concrete);
      border: 1px solid var(--grit-border-subtle);
      border-radius: 2px;
      padding: 2rem;
      position: relative;
      overflow: hidden;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.25),
        0 6px 20px rgba(0, 0, 0, 0.15);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cg)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    .card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--grit-ochre), var(--grit-rust), var(--grit-ochre));
      opacity: 0.4;
    }

    .card:hover {
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.3),
        0 10px 30px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }

    .card__icon {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      display: block;
    }

    .card h3 {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--grit-paper);
      margin-bottom: 0.75rem;
    }

    .card p {
      font-family: 'Source Serif 4', Georgia, serif;
      color: var(--grit-sandstone);
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 0;
    }

    /* ---- Feature Section with Image ---- */
    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-top: 3rem;
    }

    .feature__image {
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      aspect-ratio: 4 / 3;
      background: var(--grit-quarry);
    }

    .feature__image::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at center,
        transparent 50%,
        rgba(26, 25, 22, 0.45) 100%
      );
      z-index: 2;
      pointer-events: none;
    }

    .feature__image::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fg)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      mix-blend-mode: overlay;
      pointer-events: none;
      z-index: 3;
    }

    .feature__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      filter: contrast(1.05) saturate(0.75) brightness(0.95);
    }

    .feature__image .placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--grit-cement);
    }

    .feature__text h3 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: clamp(1.4rem, 3vw, 2rem);
      color: var(--grit-paper);
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .feature__text p {
      color: var(--grit-sandstone);
      margin-bottom: 1rem;
    }

    .feature__meta {
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--grit-cement);
    }

    /* ---- Textured Quote Block ---- */
    .quote-block {
      position: relative;
      padding: 3rem 2.5rem;
      margin: 3rem 0;
      background: var(--grit-quarry);
      border-left: 3px solid var(--grit-ochre);
      border-radius: 2px;
      overflow: hidden;
    }

    .quote-block::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.05;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='qg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23qg)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    .quote-block blockquote {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      font-style: italic;
      color: var(--grit-linen);
      line-height: 1.7;
      position: relative;
      z-index: 1;
    }

    .quote-block cite {
      display: block;
      margin-top: 1rem;
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--grit-cement);
      position: relative;
      z-index: 1;
    }

    /* ---- Grainy Gradient Banner ---- */
    .banner {
      position: relative;
      padding: 4rem 2rem;
      text-align: center;
      background: linear-gradient(
        135deg,
        var(--grit-charcoal) 0%,
        var(--grit-quarry) 40%,
        var(--grit-concrete) 100%
      );
      overflow: hidden;
    }

    .banner::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.15;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bg2)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
      filter: contrast(1.5) brightness(1.2);
    }

    .banner h2 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: clamp(1.6rem, 3.5vw, 2.5rem);
      color: var(--grit-paper);
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .banner p {
      font-family: 'Source Serif 4', Georgia, serif;
      color: var(--grit-sandstone);
      max-width: 550px;
      margin: 0 auto 2rem;
      position: relative;
      z-index: 1;
    }

    .banner .btn {
      position: relative;
      z-index: 1;
    }

    /* ---- Footer ---- */
    footer {
      padding: 3rem 2rem;
      background: var(--grit-charcoal);
      border-top: 1px solid var(--grit-border-subtle);
      position: relative;
    }

    footer::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fg2)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    .footer-inner {
      max-width: 780px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .footer-brand {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 1.1rem;
      color: var(--grit-linen);
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }

    .footer-links a {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: var(--grit-cement);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      transition: color 0.15s ease;
    }

    .footer-links a:hover {
      color: var(--grit-ochre);
    }

    .footer-copy {
      font-family: 'Space Mono', monospace;
      font-size: 0.65rem;
      color: var(--grit-slate);
      text-align: center;
      margin-top: 2rem;
      position: relative;
      z-index: 1;
    }

    /* ---- Responsive ---- */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      nav ul {
        gap: 1rem;
      }

      .hero {
        min-height: 70vh;
        padding: 3rem 1.5rem;
      }

      .section {
        padding: 3rem 1.5rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .feature {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-inner {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
      }

      .btn-group {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <a href="#" class="brand">Grain &amp; Grit</a>
    <ul>
      <li><a href="#" class="active">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Process</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <p class="subtitle">Studio for Visual Craft</p>
      <h1>Design with <em>texture</em>,<br>build with intention</h1>
      <p class="lead">
        We believe in the beauty of imperfection. Every grain of noise,
        every rough surface, every analog artifact tells a story that
        sterile digital perfection never could.
      </p>
      <div class="btn-group">
        <a href="#" class="btn btn--primary">View Our Work</a>
        <a href="#" class="btn btn--ghost">Our Process</a>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- Services Section -->
  <section class="section">
    <span class="section__label">What We Do</span>
    <h2>Crafted with <em>analog soul</em></h2>
    <p>
      Our approach treats texture as foundation, not decoration. Film grain,
      noise overlays, and material honesty are built into every layer of
      the design process from the first sketch to the final pixel.
    </p>

    <div class="card-grid">
      <div class="card">
        <span class="card__icon">&#9670;</span>
        <h3>Brand Identity</h3>
        <p>
          Visual systems rooted in material authenticity. Logos, typography,
          and color palettes that feel printed on uncoated stock, not
          rendered on a screen.
        </p>
      </div>
      <div class="card">
        <span class="card__icon">&#9671;</span>
        <h3>Editorial Design</h3>
        <p>
          Layouts that honor the printed page. Long-form content treated
          with the care of letterpress composition, where every margin
          and gutter serves the reading experience.
        </p>
      </div>
      <div class="card">
        <span class="card__icon">&#9674;</span>
        <h3>Digital Interfaces</h3>
        <p>
          Web and product design with tactile depth. Grain-textured
          surfaces, muted palettes, and typography that bridges the
          gap between screen and paper.
        </p>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- Feature Section -->
  <section class="section">
    <span class="section__label">Featured Project</span>
    <h2>The Darkroom Sessions</h2>

    <div class="feature">
      <div class="feature__image">
        <div class="placeholder">[ 4:3 image ]</div>
      </div>
      <div class="feature__text">
        <h3>Where analog process meets digital craft</h3>
        <p>
          A visual identity for an independent photography collective,
          built entirely from scanned darkroom textures, hand-mixed ink
          swatches, and typography set in lead. Every digital asset carries
          the DNA of its physical origin.
        </p>
        <p>
          The result is a brand that feels lived-in from day one -- warm,
          honest, and impossible to replicate with stock assets or AI
          generation.
        </p>
        <span class="feature__meta">Identity / Editorial / Web -- 2025</span>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- Quote Block -->
  <section class="section">
    <div class="quote-block">
      <blockquote>
        "Perfection is not when there is nothing more to add, but when
        every surface carries the honest evidence of how it was made.
        The grain is not noise -- it is the voice of the material."
      </blockquote>
      <cite>Studio Principle</cite>
    </div>
  </section>

  <!-- Grainy Gradient CTA Banner -->
  <div class="banner">
    <h2>Ready to add some grit?</h2>
    <p>
      We work with studios, brands, and independent creators who value
      craft over convenience and texture over polish.
    </p>
    <a href="#" class="btn btn--primary">Start a Conversation</a>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <span class="footer-brand">Grain &amp; Grit</span>
      <ul class="footer-links">
        <li><a href="#">Work</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <p class="footer-copy">&copy; 2025 Grain &amp; Grit Studio. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use SVG feTurbulence with `stitchTiles='stitch'`** to generate seamless noise textures that tile without visible seams; the `baseFrequency` value controls grain coarseness (0.5-0.8 for medium grain, 1.0+ for fine stipple)
- **Apply grain overlays with `mix-blend-mode: overlay`** and low opacity (0.03-0.15) on a `position: fixed` element to ensure consistent texture across scroll without performance-heavy per-element application
- **Add `pointer-events: none`** to every texture overlay element to prevent grain layers from blocking user interaction with underlying buttons, links, and form elements
- **Test grain rendering across browsers** -- SVG filter-based noise renders slightly differently in Chromium, Firefox, and WebKit; adjust `numOctaves` and `baseFrequency` values and verify visual consistency
- **Use `will-change: transform` on animated grain overlays** to promote the element to its own compositor layer, reducing repaint cost during the subtle drift animation
- **Scale texture intensity with viewport size** -- on mobile devices, reduce grain overlay opacity by 30-40% and increase `baseFrequency` slightly so the texture remains visible but does not overwhelm the smaller screen area
- **Desaturate photographs to match the palette** -- apply `filter: saturate(0.6-0.8) contrast(1.05)` to all images so they blend with the muted, textured environment rather than appearing as bright digital rectangles on a rough surface
- **Prefer inline SVG data URIs for grain textures** over external image files to eliminate an HTTP request and ensure the texture loads synchronously with the CSS; the base64 overhead is minimal compared to the round-trip latency of a separate file
