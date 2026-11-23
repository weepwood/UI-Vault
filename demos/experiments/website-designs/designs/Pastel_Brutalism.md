# Pastel Brutalism Design Reference

Pastel Brutalism is a contemporary design aesthetic that fuses the raw, unapologetic structural language of brutalist design with a softened, candy-toned color palette. Where traditional web brutalism reveled in monochrome harshness, exposed grids, and deliberately unpolished interfaces, Pastel Brutalism retains all of that structural honesty while swapping the aggression for warmth. The result is a style that feels simultaneously bold and approachable -- thick black borders and hard-offset box shadows sit atop backgrounds of lavender, mint, baby pink, and buttercream, creating a visual tension that is both playful and architecturally rigorous.

---

## Overview

Pastel Brutalism emerged as a natural evolution of the neobrutalism (also called neubrutalism) trend that gained significant traction in web and UI design from 2020 onward. Platforms like Gumroad popularized the neobrutalist look -- thick black outlines, flat color fills, hard drop shadows with zero blur, and a rejection of the glossy, gradient-heavy aesthetic that dominated the 2010s. As the style matured, designers began exploring a softer variant: retaining the structural DNA of brutalism (blocky layouts, exposed grid mechanics, stark typographic hierarchy, zero-blur shadows) while replacing the aggressive primary-color palettes with pastels, muted tones, and candy hues. This "soft brutalism" subgenre is what we now call Pastel Brutalism.

The aesthetic draws philosophical inspiration from architectural brutalism, where raw concrete (beton brut) was left exposed rather than hidden behind decorative facades. In the digital translation, this means UI elements do not pretend to be something they are not. Buttons look like buttons -- chunky, bordered, obviously clickable. Cards are flat rectangles with visible edges. Shadows are hard and offset, as if the element were a physical cutout hovering above the page. There is no attempt at photorealism, no subtle gradients mimicking depth, no neumorphic softness. The honesty is structural.

What makes Pastel Brutalism distinctive is the emotional register that the color palette introduces. Pastels -- soft pinks, lilacs, sage greens, powder blues, peachy corals -- carry associations of gentleness, nostalgia, and playfulness. When these tones fill the rigid, angular containers of brutalist layout, the contrast creates something memorable: designs that feel both strong and tender, confident and friendly. The thick black borders act as a grounding force, preventing the pastels from reading as insipid or precious. Conversely, the pastels prevent the brutalist structure from feeling hostile or inaccessible.

This aesthetic has found particular traction in startups, creator-economy platforms, portfolio sites, educational tools, and lifestyle brands -- contexts where approachability matters but generic corporate smoothness feels inauthentic. It pairs naturally with bold, oversized display typography, generous whitespace, and a willingness to let individual UI elements breathe within their stark frames. The overall impression is of a design that takes its structure seriously but does not take itself too seriously.

---

## Visual Characteristics

### Core Design Traits

- **Thick black borders (2-4px)** -- every major element is outlined with solid, unapologetic black strokes that define shapes with absolute clarity
- **Hard-offset box shadows** -- shadows use zero blur and a fixed pixel offset (typically 4-8px), creating a flat, cutout-paper effect rather than realistic depth
- **Pastel background fills** -- cards, sections, and containers use soft candy tones (lavender, mint, baby pink, buttercream, powder blue) as their primary fill colors
- **High-contrast text on soft backgrounds** -- near-black (#1a1a1a or #2b2b2b) text sits directly on pastel surfaces, maintaining WCAG accessibility while preserving the soft palette
- **Flat, non-gradient color application** -- colors are applied as solid fills with no gradients, transparencies, or blending; each surface is a single tone
- **Oversized, heavyweight display typography** -- headings use extra-bold or black weight fonts at large sizes, creating a typographic brutality that contrasts with the gentle colors
- **Minimal or zero border-radius** -- corners are sharp (0-4px radius), preserving the angular, architectural quality of brutalist design; occasionally slightly rounded (6-8px) in the softer variant
- **Generous whitespace and padding** -- despite the dense visual weight of borders and shadows, internal padding is ample (24-40px), letting content breathe inside its frames
- **Visible grid structure** -- the underlying layout grid is not hidden; columns, rows, and gutters are often perceptible through consistent alignment and deliberate spacing
- **Monospace or system-font accents** -- secondary text elements (labels, tags, metadata) may use monospace or intentionally "un-designed" typefaces to reinforce the raw aesthetic
- **Stacked, offset interactive states** -- hover effects shift elements by reducing or increasing the shadow offset, creating a tactile "press" sensation
- **Bold iconography with thick strokes** -- icons match the weight of the borders, using 2-3px stroke widths and simple geometric forms

### Design Principles

- **Structural honesty** -- every element reveals what it is; buttons look pressable, cards look like contained surfaces, links look like links
- **Tension through contrast** -- the visual identity derives from the deliberate mismatch between soft color and hard structure
- **Hierarchy through scale and weight** -- importance is communicated via size and typographic boldness, not through color intensity or decorative embellishment
- **Consistency of construction** -- all elements share the same border weight, shadow offset, and padding rhythm, creating a unified visual system
- **Playfulness within discipline** -- the pastel palette invites whimsy and personality, but the brutalist grid keeps everything anchored and organized
- **Accessibility by default** -- the high contrast between dark borders/text and light pastel backgrounds naturally produces accessible color ratios
- **Function before decoration** -- every visual choice serves a structural or communicative purpose; nothing is purely ornamental
- **Deliberate imperfection** -- slight asymmetries, bold mismatches in element sizing, and raw edges are features, not flaws

---

## Color Palette

### Pastel Brutalism Core Palette

The palette balances soft, desaturated candy tones with stark neutrals. Every pastel is chosen to maintain sufficient contrast against dark text and thick black borders. The key principle is that no single pastel dominates -- instead, different pastels are assigned to different UI regions or component types, creating a patchwork quilt effect held together by the consistent black framework.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#FFD6E0](https://via.placeholder.com/20/FFD6E0/FFD6E0) | `#FFD6E0` | Baby Pink -- primary accent cards, hero backgrounds, CTA sections |
| ![#C5B4E3](https://via.placeholder.com/20/C5B4E3/C5B4E3) | `#C5B4E3` | Soft Lavender -- secondary cards, featured content blocks, tag backgrounds |
| ![#B8E8D0](https://via.placeholder.com/20/B8E8D0/B8E8D0) | `#B8E8D0` | Mint Cream -- success states, positive indicators, alternate section fills |
| ![#FFF1C1](https://via.placeholder.com/20/FFF1C1/FFF1C1) | `#FFF1C1` | Buttercream -- warning states, highlight badges, warm accent areas |
| ![#B6D8F2](https://via.placeholder.com/20/B6D8F2/B6D8F2) | `#B6D8F2` | Powder Blue -- info states, link highlights, cool accent sections |
| ![#FFCBA4](https://via.placeholder.com/20/FFCBA4/FFCBA4) | `#FFCBA4` | Peach Sorbet -- tertiary accent, illustration backgrounds, hover fills |
| ![#F0F0F0](https://via.placeholder.com/20/F0F0F0/F0F0F0) | `#F0F0F0` | Concrete -- page canvas, neutral background, structural base |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | Pure White -- card backgrounds (alternate), modal surfaces, input fields |
| ![#1A1A1A](https://via.placeholder.com/20/1A1A1A/1A1A1A) | `#1A1A1A` | Near Black -- primary text, borders, shadows, structural lines |
| ![#2B2B2B](https://via.placeholder.com/20/2B2B2B/2B2B2B) | `#2B2B2B` | Charcoal -- secondary text, body copy, descriptions |
| ![#6B6B6B](https://via.placeholder.com/20/6B6B6B/6B6B6B) | `#6B6B6B` | Slate -- tertiary text, captions, disabled labels |
| ![#E8C5E8](https://via.placeholder.com/20/E8C5E8/E8C5E8) | `#E8C5E8` | Orchid Mist -- decorative accents, secondary badges, alternate tags |
| ![#D4F0B4](https://via.placeholder.com/20/D4F0B4/D4F0B4) | `#D4F0B4` | Lime Sorbet -- positive metrics, growth indicators, fresh accents |
| ![#F5C6C6](https://via.placeholder.com/20/F5C6C6/F5C6C6) | `#F5C6C6` | Blush -- error states, destructive action warnings, alert backgrounds |
| ![#D0D0D0](https://via.placeholder.com/20/D0D0D0/D0D0D0) | `#D0D0D0` | Silver -- borders (alternate), dividers, disabled elements |

### CSS Custom Properties

```css
:root {
  /* Pastel Fills */
  --pb-pink: #ffd6e0;
  --pb-lavender: #c5b4e3;
  --pb-mint: #b8e8d0;
  --pb-buttercream: #fff1c1;
  --pb-blue: #b6d8f2;
  --pb-peach: #ffcba4;
  --pb-orchid: #e8c5e8;
  --pb-lime: #d4f0b4;
  --pb-blush: #f5c6c6;

  /* Neutrals */
  --pb-canvas: #f0f0f0;
  --pb-white: #ffffff;
  --pb-black: #1a1a1a;
  --pb-charcoal: #2b2b2b;
  --pb-slate: #6b6b6b;
  --pb-silver: #d0d0d0;

  /* Structural Tokens */
  --pb-border-width: 3px;
  --pb-border-color: #1a1a1a;
  --pb-shadow-offset: 6px;
  --pb-shadow: var(--pb-shadow-offset) var(--pb-shadow-offset) 0 var(--pb-border-color);
  --pb-shadow-sm: 4px 4px 0 var(--pb-border-color);
  --pb-shadow-lg: 8px 8px 0 var(--pb-border-color);
  --pb-radius: 0px;
  --pb-radius-soft: 6px;
  --pb-padding: 28px;
  --pb-gap: 20px;
}
```

---

## Typography

### Typeface Characteristics

Pastel Brutalism typography is aggressive in scale and weight while remaining legible and modern. The contrast between oversized, black-weight display headings and compact, clean body text mirrors the broader aesthetic tension between raw structure and soft color. Monospace typefaces are frequently introduced for labels, code snippets, or metadata to reinforce the "exposed-construction" ethos. System fonts or intentionally plain sans-serifs are also common, echoing early-web and brutalist traditions where typography was functional rather than decorative.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Space Grotesk** | Monospace-inspired proportional sans | Display headings, navigation, hero text |
| **Space Mono** | True monospace with character | Labels, tags, metadata, code-like accents |
| **Inter** | Highly legible screen sans-serif | Body text, descriptions, form labels |
| **DM Sans** | Clean geometric with warmth | Subheadings, card titles, button text |
| **Syne** | Bold, expressive display face | Hero headlines, impactful statements |
| **Outfit** | Geometric variable-weight sans | Headlines, metrics, callout numbers |
| **JetBrains Mono** | Developer-friendly monospace | Code blocks, technical labels, raw accents |
| **Work Sans** | Versatile humanist sans | Body text, navigation, general-purpose |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Space Grotesk** (700) | **Inter** (400) | Technical, structured, modern brutalism |
| **Syne** (800) | **Work Sans** (400) | Expressive, bold, high-contrast editorial |
| **Outfit** (800) | **DM Sans** (400) | Clean, geometric, friendly yet strong |
| **Space Grotesk** (700) | **Space Mono** (400) | Full monospace family, raw developer aesthetic |
| **DM Sans** (700) | **Inter** (400) | Warm, approachable, softer pastel variant |

### Typography CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--pb-black);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.pb-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.0;
  text-transform: uppercase;
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--pb-charcoal);
}

.pb-mono {
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

.pb-label {
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--pb-black);
}

.pb-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--pb-slate);
}
```

---

## Layout Principles

- **Flat, exposed grid structure** -- use CSS Grid with visible alignment; columns and rows should feel intentional and architectural, not hidden behind smooth surfaces
- **Asymmetric but balanced** -- mix card sizes and column spans to create visual interest, but distribute visual weight evenly across the layout
- **Generous padding inside rigid containers** -- internal padding of 24-40px keeps content from feeling trapped within the thick borders
- **Consistent gap spacing (16-24px)** -- gaps between cards and sections are uniform, acting as the structural mortar between building blocks
- **Full-bleed sections with contrasting pastels** -- alternate page sections use different pastel backgrounds (pink section, then mint section, then lavender) to create a color-blocked rhythm
- **Stacked vertical rhythm** -- sections flow top-to-bottom with clear delineation; horizontal scrolling or complex overlapping layouts are avoided
- **Max-width containment (1100-1200px)** -- content is centered within a max-width wrapper, with the canvas color visible on either side
- **Cards as primary content unit** -- nearly all content lives inside bordered, shadowed card components; very little "free-floating" text
- **Explicit hover/active states** -- every interactive element must visibly change on hover (shadow shift, color swap, border thickening) to maintain the tactile, physical metaphor
- **Mobile-first stacking** -- on narrow viewports, the grid collapses to a single column with cards stacking vertically; borders and shadows are preserved at all breakpoints
- **No overlapping or layering** -- elements do not overlap; the hard shadows create an illusion of depth, but actual z-index stacking is avoided in favor of flat, honest placement

---

## CSS / Design Techniques

### Card Component

```css
.pb-card {
  background: var(--pb-pink);
  border: var(--pb-border-width) solid var(--pb-border-color);
  box-shadow: var(--pb-shadow);
  padding: var(--pb-padding);
  position: relative;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.pb-card:hover {
  box-shadow: var(--pb-shadow-sm);
  transform: translate(2px, 2px);
}

.pb-card--lavender { background: var(--pb-lavender); }
.pb-card--mint { background: var(--pb-mint); }
.pb-card--buttercream { background: var(--pb-buttercream); }
.pb-card--blue { background: var(--pb-blue); }
.pb-card--peach { background: var(--pb-peach); }
.pb-card--white { background: var(--pb-white); }

.pb-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: var(--pb-black);
}

.pb-card p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: var(--pb-charcoal);
  line-height: 1.6;
}
```

### Button Component

```css
.pb-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 14px 32px;
  border: var(--pb-border-width) solid var(--pb-border-color);
  box-shadow: var(--pb-shadow-sm);
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.12s ease, transform 0.12s ease;
  background: var(--pb-buttercream);
  color: var(--pb-black);
}

.pb-button:hover {
  box-shadow: 2px 2px 0 var(--pb-border-color);
  transform: translate(2px, 2px);
}

.pb-button:active {
  box-shadow: 0px 0px 0 var(--pb-border-color);
  transform: translate(4px, 4px);
}

.pb-button--pink { background: var(--pb-pink); }
.pb-button--lavender { background: var(--pb-lavender); }
.pb-button--mint { background: var(--pb-mint); }
.pb-button--blue { background: var(--pb-blue); }

.pb-button--dark {
  background: var(--pb-black);
  color: var(--pb-white);
}

.pb-button--outline {
  background: transparent;
  color: var(--pb-black);
}
```

### Navigation Bar

```css
.pb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  border-bottom: var(--pb-border-width) solid var(--pb-border-color);
}

.pb-nav__logo {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--pb-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.pb-nav__links {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pb-nav__links a {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--pb-black);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 8px 16px;
  border: 2px solid transparent;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.pb-nav__links a:hover {
  border: 2px solid var(--pb-border-color);
  background: var(--pb-buttercream);
}

.pb-nav__links a.active {
  border: 2px solid var(--pb-border-color);
  background: var(--pb-pink);
  box-shadow: 2px 2px 0 var(--pb-border-color);
}
```

### Hero Section

```css
.pb-hero {
  background: var(--pb-lavender);
  border: var(--pb-border-width) solid var(--pb-border-color);
  box-shadow: var(--pb-shadow-lg);
  padding: 60px 48px;
  text-align: center;
  margin-bottom: var(--pb-gap);
}

.pb-hero__title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--pb-black);
  margin-bottom: 20px;
}

.pb-hero__subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--pb-charcoal);
  max-width: 550px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.pb-hero__tag {
  display: inline-block;
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 16px;
  border: 2px solid var(--pb-border-color);
  background: var(--pb-buttercream);
  margin-bottom: 20px;
}
```

### Grid Container

```css
.pb-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--pb-gap);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.pb-grid--2col { grid-template-columns: repeat(2, 1fr); }
.pb-grid--4col { grid-template-columns: repeat(4, 1fr); }
.pb-grid .pb-card--wide { grid-column: span 2; }
.pb-grid .pb-card--full { grid-column: 1 / -1; }

@media (max-width: 900px) {
  .pb-grid { grid-template-columns: repeat(2, 1fr); }
  .pb-grid .pb-card--wide { grid-column: span 2; }
}

@media (max-width: 600px) {
  .pb-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
    gap: 16px;
  }
  .pb-grid .pb-card--wide,
  .pb-grid .pb-card--full { grid-column: span 1; }
}
```

### Tag / Badge Component

```css
.pb-tag {
  display: inline-block;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border: 2px solid var(--pb-border-color);
  background: var(--pb-mint);
  color: var(--pb-black);
}

.pb-tag--pink { background: var(--pb-pink); }
.pb-tag--blue { background: var(--pb-blue); }
.pb-tag--buttercream { background: var(--pb-buttercream); }
.pb-tag--lavender { background: var(--pb-lavender); }
```

### Input / Form Field

```css
.pb-input {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  padding: 12px 16px;
  border: var(--pb-border-width) solid var(--pb-border-color);
  box-shadow: var(--pb-shadow-sm);
  background: var(--pb-white);
  color: var(--pb-black);
  outline: none;
  width: 100%;
  transition: box-shadow 0.12s ease, transform 0.12s ease;
}

.pb-input:focus {
  box-shadow: var(--pb-shadow);
  background: var(--pb-buttercream);
}

.pb-input::placeholder {
  color: var(--pb-slate);
  font-style: italic;
}

.pb-input-label {
  display: block;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--pb-black);
  margin-bottom: 8px;
}
```

### Footer Section

```css
.pb-footer {
  background: var(--pb-black);
  color: var(--pb-silver);
  border-top: var(--pb-border-width) solid var(--pb-border-color);
  padding: 40px 24px;
  text-align: center;
}

.pb-footer__brand {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--pb-white);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.pb-footer__links {
  display: flex;
  justify-content: center;
  gap: 24px;
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}

.pb-footer__links a {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pb-silver);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.15s ease;
}

.pb-footer__links a:hover {
  color: var(--pb-pink);
}

.pb-footer__copy {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: var(--pb-slate);
}
```

---

## Design Do's and Don'ts

### Do's

- **Use consistent border weight** across all elements -- if your cards use 3px borders, your buttons, inputs, tags, and nav links should share that same weight
- **Assign different pastels to different content types** -- give cards, sections, and interactive elements distinct pastel fills to create a color-blocked, quilt-like visual rhythm
- **Maintain hard, zero-blur box shadows** -- the flat, offset shadow is the signature of this aesthetic; never add blur or spread that softens the shadow into realism
- **Keep typography bold and oversized** -- headlines should feel architecturally scaled; do not shy away from clamp-based sizes that reach 4-5rem on desktop
- **Test contrast ratios** -- pastel backgrounds with dark text naturally produce high contrast, but always verify that color combinations meet WCAG AA (4.5:1 for body text)
- **Embrace the tactile hover interaction** -- make buttons and cards visually "press in" on hover by reducing the shadow offset and translating the element toward the shadow
- **Use monospace accents for labels and metadata** -- a monospace font for tags, dates, and technical labels reinforces the raw, structural honesty of the design
- **Let the black framework unify everything** -- the thick borders and shadows are the connective tissue; as long as they are consistent, even a wide variety of pastel fills will feel cohesive

### Don'ts

- **Do not use gradients** -- the aesthetic depends on flat, solid color fills; introducing gradients undermines the brutalist honesty and muddies the pastel clarity
- **Do not add blur to shadows** -- blurred box shadows belong to material design, neumorphism, and glassmorphism; Pastel Brutalism demands zero-blur, hard-edge shadows only
- **Do not use too many pastels on a single screen** -- limit each view to 3-4 pastel tones plus neutrals; a full rainbow of candy colors becomes overwhelming and loses cohesion
- **Do not round corners excessively** -- border-radius above 8px starts to soften the brutalist edge; keep radii at 0-6px to preserve the angular, architectural feel
- **Do not hide the grid** -- resist the urge to create "seamless" layouts; the visible structure (gaps, borders, alignment) is a deliberate part of the aesthetic
- **Do not use thin or light-weight typography for headings** -- delicate, thin fonts contradict the boldness of the structural elements; headings need weight 600-800 minimum
- **Do not combine with glossy or realistic effects** -- reflections, 3D transforms, parallax depth, and photorealistic textures clash with the flat, honest construction
- **Do not forget hover and active states** -- static, unresponsive elements break the physical metaphor; every interactive element must react to user input with visible state changes

---

## Related Aesthetics

| Aesthetic | Relationship to Pastel Brutalism |
|-----------|----------------------------------|
| **Neobrutalism / Neubrutalism** | The direct parent aesthetic; Pastel Brutalism is neobrutalism with the palette shifted from saturated primaries to soft pastels |
| **Web Brutalism** | The original digital brutalism -- raw HTML, monochrome, system fonts; Pastel Brutalism retains the structural ethos but rejects the harshness |
| **Flat Design** | Shares the commitment to zero-depth, solid-color surfaces; Pastel Brutalism adds thick borders and hard shadows that Flat Design avoids |
| **Memphis Design** | Both use bold geometric shapes and playful color; Memphis is more chaotic and pattern-heavy, while Pastel Brutalism is more grid-disciplined |
| **Danish Pastel** | Shares the soft color palette but pairs it with organic curves and minimalism rather than hard edges and thick borders |
| **Dopamine Design** | Both aim for joyful, colorful interfaces; Dopamine Design is maximalist and gradient-friendly, while Pastel Brutalism is structurally restrained |
| **Claymorphism** | Both are playful and pastel-friendly, but Claymorphism uses puffy 3D shadows and rounded forms, opposing the flat hardness of brutalism |
| **Corporate Memphis** | Shares the flat-color, illustration-forward approach; Pastel Brutalism swaps the smooth corporate polish for raw, bordered construction |
| **Bento Grid** | Both use modular card-based layouts, but Bento Grid favors rounded corners and subtle depth while Pastel Brutalism uses sharp edges and hard shadows |
| **Gen Z Maximalism** | Both embrace bold color and personality; Gen Z Maximalism is denser and more eclectic, while Pastel Brutalism maintains grid discipline |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pastel Brutalism Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* ===========================
       CSS Custom Properties
       =========================== */
    :root {
      /* Pastel Fills */
      --pb-pink: #ffd6e0;
      --pb-lavender: #c5b4e3;
      --pb-mint: #b8e8d0;
      --pb-buttercream: #fff1c1;
      --pb-blue: #b6d8f2;
      --pb-peach: #ffcba4;
      --pb-orchid: #e8c5e8;
      --pb-lime: #d4f0b4;
      --pb-blush: #f5c6c6;

      /* Neutrals */
      --pb-canvas: #f0f0f0;
      --pb-white: #ffffff;
      --pb-black: #1a1a1a;
      --pb-charcoal: #2b2b2b;
      --pb-slate: #6b6b6b;
      --pb-silver: #d0d0d0;

      /* Structural Tokens */
      --pb-border-width: 3px;
      --pb-border-color: #1a1a1a;
      --pb-shadow: 6px 6px 0 #1a1a1a;
      --pb-shadow-sm: 4px 4px 0 #1a1a1a;
      --pb-shadow-lg: 8px 8px 0 #1a1a1a;
      --pb-radius: 0px;
      --pb-padding: 28px;
      --pb-gap: 20px;
    }

    /* ===========================
       Reset & Base
       =========================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--pb-canvas);
      color: var(--pb-charcoal);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.65;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      color: var(--pb-black);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    img { max-width: 100%; display: block; }
    a { color: inherit; }

    /* ===========================
       Navigation
       =========================== */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 24px;
      border-bottom: var(--pb-border-width) solid var(--pb-border-color);
    }

    .nav__logo {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--pb-black);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    .nav__links {
      display: flex;
      gap: 8px;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--pb-black);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 8px 16px;
      border: 2px solid transparent;
      transition: border-color 0.15s, background 0.15s;
    }

    .nav__links a:hover {
      border-color: var(--pb-border-color);
      background: var(--pb-buttercream);
    }

    .nav__links a.active {
      border-color: var(--pb-border-color);
      background: var(--pb-pink);
      box-shadow: 2px 2px 0 var(--pb-border-color);
    }

    /* ===========================
       Hero Section
       =========================== */
    .hero {
      background: var(--pb-lavender);
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow-lg);
      padding: 72px 48px;
      text-align: center;
      max-width: 1200px;
      margin: var(--pb-gap) auto;
      margin-left: max(24px, calc((100% - 1200px) / 2));
      margin-right: max(24px, calc((100% - 1200px) / 2));
    }

    .hero__tag {
      display: inline-block;
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 6px 16px;
      border: 2px solid var(--pb-border-color);
      background: var(--pb-buttercream);
      margin-bottom: 24px;
    }

    .hero__title {
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: -0.03em;
      line-height: 1.0;
      margin-bottom: 20px;
    }

    .hero__subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 1.15rem;
      color: var(--pb-charcoal);
      max-width: 550px;
      margin: 0 auto 36px;
      line-height: 1.6;
    }

    /* ===========================
       Buttons
       =========================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 14px 32px;
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow-sm);
      cursor: pointer;
      text-decoration: none;
      transition: box-shadow 0.12s, transform 0.12s;
      background: var(--pb-buttercream);
      color: var(--pb-black);
    }

    .btn:hover {
      box-shadow: 2px 2px 0 var(--pb-border-color);
      transform: translate(2px, 2px);
    }

    .btn:active {
      box-shadow: 0 0 0 var(--pb-border-color);
      transform: translate(4px, 4px);
    }

    .btn--dark {
      background: var(--pb-black);
      color: var(--pb-white);
    }

    .btn--pink { background: var(--pb-pink); }
    .btn--mint { background: var(--pb-mint); }
    .btn--blue { background: var(--pb-blue); }

    /* ===========================
       Grid Layout
       =========================== */
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--pb-gap);
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--pb-gap) 24px;
    }

    /* ===========================
       Cards
       =========================== */
    .card {
      background: var(--pb-white);
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow);
      padding: var(--pb-padding);
      transition: box-shadow 0.15s, transform 0.15s;
    }

    .card:hover {
      box-shadow: var(--pb-shadow-sm);
      transform: translate(2px, 2px);
    }

    .card--pink { background: var(--pb-pink); }
    .card--lavender { background: var(--pb-lavender); }
    .card--mint { background: var(--pb-mint); }
    .card--buttercream { background: var(--pb-buttercream); }
    .card--blue { background: var(--pb-blue); }
    .card--peach { background: var(--pb-peach); }
    .card--wide { grid-column: span 2; }
    .card--full { grid-column: 1 / -1; }

    .card__tag {
      display: inline-block;
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 12px;
      border: 2px solid var(--pb-border-color);
      background: var(--pb-buttercream);
      margin-bottom: 16px;
    }

    .card__tag--mint { background: var(--pb-mint); }
    .card__tag--pink { background: var(--pb-pink); }
    .card__tag--blue { background: var(--pb-blue); }
    .card__tag--lavender { background: var(--pb-lavender); }

    .card h3 {
      font-size: 1.3rem;
      margin-bottom: 12px;
    }

    .card p {
      font-size: 0.95rem;
      color: var(--pb-charcoal);
      line-height: 1.6;
    }

    .card__icon {
      width: 56px;
      height: 56px;
      border: 2px solid var(--pb-border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      margin-bottom: 16px;
      background: var(--pb-white);
    }

    /* ===========================
       Stats Row
       =========================== */
    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--pb-gap);
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px var(--pb-gap);
    }

    .stat {
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow-sm);
      padding: 24px;
      text-align: center;
    }

    .stat--pink { background: var(--pb-pink); }
    .stat--mint { background: var(--pb-mint); }
    .stat--buttercream { background: var(--pb-buttercream); }
    .stat--blue { background: var(--pb-blue); }

    .stat__number {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: var(--pb-black);
      line-height: 1;
      letter-spacing: -0.03em;
    }

    .stat__label {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--pb-charcoal);
      margin-top: 8px;
    }

    /* ===========================
       CTA / Banner Section
       =========================== */
    .cta {
      background: var(--pb-pink);
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow-lg);
      padding: 48px;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto var(--pb-gap);
      margin-left: max(24px, calc((100% - 1200px) / 2));
      margin-right: max(24px, calc((100% - 1200px) / 2));
    }

    .cta h2 {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cta p {
      font-size: 1.05rem;
      color: var(--pb-charcoal);
      margin-bottom: 28px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    /* ===========================
       Form Section
       =========================== */
    .form-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px var(--pb-gap);
    }

    .form-card {
      background: var(--pb-white);
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow);
      padding: 40px;
      max-width: 500px;
      margin: 0 auto;
    }

    .form-card h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-bottom: 24px;
      text-align: center;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--pb-black);
      margin-bottom: 8px;
    }

    .form-group input,
    .form-group textarea {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      padding: 12px 16px;
      border: var(--pb-border-width) solid var(--pb-border-color);
      box-shadow: var(--pb-shadow-sm);
      background: var(--pb-white);
      color: var(--pb-black);
      outline: none;
      width: 100%;
      transition: box-shadow 0.12s, background 0.12s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      box-shadow: var(--pb-shadow);
      background: var(--pb-buttercream);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    /* ===========================
       Section Heading
       =========================== */
    .section-heading {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--pb-gap) 24px 12px;
    }

    .section-heading h2 {
      font-size: 1.8rem;
      text-transform: uppercase;
      display: inline-block;
      padding-bottom: 4px;
      border-bottom: var(--pb-border-width) solid var(--pb-border-color);
    }

    /* ===========================
       Footer
       =========================== */
    .footer {
      background: var(--pb-black);
      color: var(--pb-silver);
      border-top: var(--pb-border-width) solid var(--pb-border-color);
      padding: 40px 24px;
      text-align: center;
    }

    .footer__brand {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--pb-white);
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .footer__links {
      display: flex;
      justify-content: center;
      gap: 24px;
      list-style: none;
      margin-bottom: 20px;
    }

    .footer__links a {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--pb-silver);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      transition: color 0.15s;
    }

    .footer__links a:hover {
      color: var(--pb-pink);
    }

    .footer__copy {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      color: var(--pb-slate);
    }

    /* ===========================
       Responsive
       =========================== */
    @media (max-width: 900px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .stats { grid-template-columns: repeat(2, 1fr); }
      .card--wide { grid-column: span 2; }
      .hero { padding: 48px 28px; }
      .cta { padding: 36px 28px; }
    }

    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
        padding: 16px;
        gap: 16px;
      }
      .stats {
        grid-template-columns: 1fr;
        padding: 0 16px 16px;
        gap: 16px;
      }
      .card--wide,
      .card--full { grid-column: span 1; }
      .nav {
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }
      .nav__links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
      }
      .hero {
        padding: 36px 20px;
        margin-left: 16px;
        margin-right: 16px;
      }
      .cta {
        padding: 28px 20px;
        margin-left: 16px;
        margin-right: 16px;
      }
      .form-card { padding: 24px; }
      .footer__links {
        flex-wrap: wrap;
        gap: 12px;
      }
    }
  </style>
</head>
<body>

  <!-- ===========================
       Navigation
       =========================== -->
  <nav class="nav">
    <a href="#" class="nav__logo">PastelBrut</a>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- ===========================
       Hero Section
       =========================== -->
  <section class="hero">
    <div class="hero__tag">Now in Public Beta</div>
    <h1 class="hero__title">Soft on the eyes.<br>Hard on convention.</h1>
    <p class="hero__subtitle">
      Build bold, beautiful interfaces that reject corporate blandness.
      Pastel tones meet raw structure for designs with real personality.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="#" class="btn btn--dark">Get Started</a>
      <a href="#" class="btn">Learn More</a>
    </div>
  </section>

  <!-- ===========================
       Stats Row
       =========================== -->
  <div class="stats">
    <div class="stat stat--pink">
      <div class="stat__number">12K+</div>
      <div class="stat__label">Active Users</div>
    </div>
    <div class="stat stat--mint">
      <div class="stat__number">98%</div>
      <div class="stat__label">Satisfaction</div>
    </div>
    <div class="stat stat--buttercream">
      <div class="stat__number">340+</div>
      <div class="stat__label">Components</div>
    </div>
    <div class="stat stat--blue">
      <div class="stat__number">4.9</div>
      <div class="stat__label">Star Rating</div>
    </div>
  </div>

  <!-- ===========================
       Features Section
       =========================== -->
  <div class="section-heading">
    <h2>Core Features</h2>
  </div>

  <div class="grid">
    <!-- Card 1: Wide -->
    <div class="card card--pink card--wide">
      <div class="card__tag">Design System</div>
      <h3>Consistent by Construction</h3>
      <p>
        Every component shares the same border weight, shadow offset, and spacing
        rhythm. Mix and match pastel fills while the black framework holds everything
        together. No guesswork, no inconsistency.
      </p>
    </div>

    <!-- Card 2 -->
    <div class="card card--mint">
      <div class="card__icon">&#9670;</div>
      <div class="card__tag card__tag--mint">Layout</div>
      <h3>Grid-First Architecture</h3>
      <p>
        Built on CSS Grid with explicit column spans. Asymmetric but balanced,
        every card earns its space.
      </p>
    </div>

    <!-- Card 3 -->
    <div class="card card--buttercream">
      <div class="card__icon">&#9733;</div>
      <div class="card__tag">Typography</div>
      <h3>Bold Type Hierarchy</h3>
      <p>
        Oversized Space Grotesk headings meet clean Inter body text.
        Scale and weight do the talking.
      </p>
    </div>

    <!-- Card 4 -->
    <div class="card card--blue">
      <div class="card__icon">&#9998;</div>
      <div class="card__tag card__tag--blue">Accessible</div>
      <h3>WCAG-Ready Colors</h3>
      <p>
        Dark text on pastel backgrounds naturally produces high contrast ratios.
        Accessibility is baked into the palette.
      </p>
    </div>

    <!-- Card 5 -->
    <div class="card card--lavender">
      <div class="card__icon">&#9881;</div>
      <div class="card__tag card__tag--lavender">Responsive</div>
      <h3>Mobile-First Stacking</h3>
      <p>
        The grid collapses cleanly to single-column on small screens. Borders
        and shadows persist at every breakpoint.
      </p>
    </div>

    <!-- Card 6 -->
    <div class="card card--peach">
      <div class="card__icon">&#9829;</div>
      <div class="card__tag card__tag--pink">Interaction</div>
      <h3>Tactile Hover States</h3>
      <p>
        Buttons press in, cards shift toward their shadow, inputs glow on focus.
        Every click feels physical.
      </p>
    </div>
  </div>

  <!-- ===========================
       CTA Section
       =========================== -->
  <section class="cta">
    <h2>Ready to build something bold?</h2>
    <p>
      Join thousands of designers who have ditched the corporate polish for
      honest, colorful, structurally sound interfaces.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="#" class="btn btn--dark">Start Free Trial</a>
      <a href="#" class="btn btn--mint">View Examples</a>
    </div>
  </section>

  <!-- ===========================
       Contact Form
       =========================== -->
  <div class="section-heading">
    <h2>Get in Touch</h2>
  </div>

  <div class="form-section">
    <div class="form-card">
      <h3>Send a Message</h3>
      <form>
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" placeholder="Ada Lovelace">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="ada@example.com">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Tell us about your project..."></textarea>
        </div>
        <button type="submit" class="btn btn--dark" style="width: 100%; justify-content: center;">
          Send Message
        </button>
      </form>
    </div>
  </div>

  <!-- ===========================
       Footer
       =========================== -->
  <footer class="footer">
    <div class="footer__brand">PastelBrut</div>
    <ul class="footer__links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">GitHub</a></li>
    </ul>
    <p class="footer__copy">
      Built with the Pastel Brutalism aesthetic.
      Soft colors. Hard edges. Real personality.
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the structural tokens** -- define `--pb-border-width`, `--pb-shadow`, and `--pb-gap` first; these three variables control the entire brutalist framework, and changing them globally updates every component instantly
- **Build one card component, then color-variant it** -- write a single `.pb-card` base class with all structural styles (border, shadow, padding, hover), then create color modifier classes (`.pb-card--pink`, `.pb-card--mint`) that only change `background`; this keeps CSS lean and consistent
- **Use `translate()` for hover states, not `margin` or `position` changes** -- the tactile press effect is achieved by shifting the element toward its shadow with `transform: translate(2px, 2px)` while simultaneously reducing the shadow offset; transform triggers GPU compositing for smoother animation
- **Pair no more than 3-4 pastels per page section** -- while the full palette has 8+ pastel tones, any single viewport should use a restrained subset; assign one "hero" pastel (e.g., lavender for the hero section) and 2-3 supporting tones for cards within that section
- **Keep border-radius at 0px for pure brutalism, 4-6px for softer variant** -- the strict aesthetic uses sharp corners exclusively; if your audience or brand requires more friendliness, a small radius (max 6px) softens the edge without losing the brutalist identity
- **Always include the dark inverse** -- every Pastel Brutalism system needs a dark component (`.btn--dark`, dark footer, dark card variant) to provide grounding contrast; without it, the pastels can feel unanchored
- **Test at extremes: zoom to 200%, narrow to 320px** -- the thick borders and large type scale can cause overflow issues on very small screens or high zoom levels; ensure padding and font sizes use `clamp()` and relative units
- **Use `Space Mono` sparingly** -- monospace accents are powerful for labels, tags, and metadata, but overusing monospace for body text reduces readability; reserve it for short, uppercase text elements that benefit from the raw, code-like quality
