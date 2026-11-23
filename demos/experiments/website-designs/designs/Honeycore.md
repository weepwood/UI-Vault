# Honeycore Design Reference

## Overview

Honeycore (also known as Beecore) is a warm, golden-toned aesthetic that celebrates honey in all its forms -- from the amber glow of sunlight through a jar of fresh honeycomb to the gentle hum of bees drifting across endless fields of sunflowers and daisies. Rooted in the broader cottagecore family, Honeycore narrows its visual focus to a palette of rich yellows, deep ambers, sun-warmed browns, and creamy whites, creating an atmosphere of sun-drenched sweetness and rural comfort. The aesthetic is not merely decorative; it carries a philosophy of environmental stewardship, bee conservation, and appreciation for the slow, cyclical rhythms of nature and apiculture.

In web and digital design, Honeycore translates into interfaces that radiate warmth and tactile richness. Backgrounds suggest the mellow glow of beeswax candles. Cards and containers echo the hexagonal geometry of honeycomb. Typography leans toward rounded, organic serif and handwritten faces that feel like handwritten labels on mason jars of golden honey. Textures reference natural materials -- linen, raw wood, dried wildflowers, and the waxy sheen of honeycomb. The overall impression is one of abundance without excess: every element should feel hand-gathered, sun-kissed, and sweetly inviting.

Unlike the pastel-leaning softness of Cottagecore or the earthy darkness of Goblincore, Honeycore occupies a distinctly golden middle ground. Its warmth is specific -- not the cool sage greens of a cottage garden, but the saturated marigolds, mustards, and dark topaz tones of late-summer meadows heavy with pollen. Photography and illustration within the aesthetic gravitate toward bee imagery, honey dippers, woven straw, sunflower fields, lemon slices, mason jars, waffles dripping with syrup, and rustic baked goods. The mood is perpetually golden hour: warm, glowing, and deeply comforting. When implemented well in digital design, Honeycore creates an experience that feels like stepping into a sun-warmed kitchen where bread is baking and honey is dripping from a wooden dipper into a ceramic bowl.

---

## Visual Characteristics

### Core Design Traits

- **Warm golden color dominance**: Every surface radiates with yellows, ambers, and honey-brown tones; cool colors are virtually absent from the palette
- **Hexagonal geometry**: Honeycomb patterns appear in backgrounds, grid layouts, borders, and decorative elements as the defining geometric motif
- **Bee and apiary imagery**: Illustrations of bees, beehives, honey dippers, and apiaries serve as icons, dividers, and ornamental details
- **Sunflower and wildflower motifs**: Botanical elements lean heavily toward sunflowers, daisies, chamomile, and other golden-petaled flowers
- **Natural textures**: Backgrounds and surfaces reference beeswax, raw linen, straw weave, aged wood grain, and parchment paper
- **Warm, glowing light quality**: Photography and gradients simulate golden-hour lighting with soft, diffused amber warmth
- **Mason jar and rustic vessel references**: Container shapes and card designs echo the silhouettes of honey jars, ceramic pots, and glass vessels
- **Drip and flow effects**: Honey-drip shapes appear in borders, decorative accents, and transition elements between sections
- **Hand-lettered and artisanal typography**: Fonts suggest hand-painted signage on a farmstand or handwritten labels on a jar of wildflower honey
- **Vintage and nostalgic references**: Seed packet illustrations, old apiary diagrams, and botanical field-guide styles inform the illustrative approach
- **Soft, rounded forms**: Corners are generously rounded, edges are gentle, and shapes suggest organic growth rather than mechanical precision

### Design Principles

- **Golden warmth above all**: Every design decision should reinforce a feeling of sun-warmed comfort; when in doubt, add more warmth
- **Hexagons as structure**: Use honeycomb geometry as an organizing principle for grids, patterns, and layout modules
- **Sweetness without saccharine**: The aesthetic should feel genuinely warm and inviting, not overly cute or childish
- **Natural abundance**: Fill space with botanical and apiary details rather than leaving stark, minimalist voids
- **Tactile authenticity**: Textures should feel real and touchable -- beeswax, linen, raw wood -- not glossy or synthetic
- **Conservation awareness**: The aesthetic carries an implicit respect for nature and bees; design choices should feel sustainable and grounded
- **Slow, unhurried rhythm**: Layouts should encourage leisurely browsing with generous spacing and a comfortable reading pace
- **Golden-hour light**: Mimic the quality of late-afternoon sunlight through gradients, overlays, and warm-tinted shadows

---

## Color Palette

The Honeycore palette is built on layers of golden warmth, ranging from deep amber browns through rich honey golds to soft creamy whites. Every color should feel like it could be found in a beehive, a sunflower field, or a jar of golden honey held up to the light. Cool tones are used sparingly, if at all -- a muted sage green provides the only counterpoint, evoking the leafy stems of sunflowers and meadow grasses.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Honeycomb Gold | `#D4A017` | Primary accent; buttons, links, key highlights |
| Amber Glow | `#FFBF00` | Secondary accent; hover states, active elements |
| Dark Honey | `#945609` | Primary text color; deep warm brown |
| Beeswax Cream | `#FFF8E7` | Primary background; warm off-white |
| Golden Nectar | `#E8BE14` | Hero gradients; featured section highlights |
| Mustard Field | `#C5962E` | Tertiary accent; borders, subtle emphasis |
| Sunflower Petal | `#F4D03F` | Decorative elements; badges, tags |
| Honeydew White | `#FDF6EC` | Card and surface backgrounds |
| Warm Straw | `#DDBD73` | Muted accents; secondary borders, dividers |
| Toasted Amber | `#C07830` | Call-to-action buttons; emphasis elements |
| Pollen Dust | `#DFD492` | Subtle backgrounds; alternate section shading |
| Deep Topaz | `#8B6914` | Dark accent; footer, secondary headings |
| Meadow Sage | `#7A8B5D` | Nature accent; sparingly used for contrast |
| Clover Honey | `#D0902D` | Mid-tone accent; icons, progress bars |
| Linen Warm | `#F5ECD7` | Alternate card backgrounds; input fields |

### CSS Custom Properties

```css
:root {
  /* --- Honeycore Palette --- */
  --hc-honeycomb-gold: #D4A017;
  --hc-amber-glow: #FFBF00;
  --hc-dark-honey: #945609;
  --hc-beeswax-cream: #FFF8E7;
  --hc-golden-nectar: #E8BE14;
  --hc-mustard-field: #C5962E;
  --hc-sunflower-petal: #F4D03F;
  --hc-honeydew-white: #FDF6EC;
  --hc-warm-straw: #DDBD73;
  --hc-toasted-amber: #C07830;
  --hc-pollen-dust: #DFD492;
  --hc-deep-topaz: #8B6914;
  --hc-meadow-sage: #7A8B5D;
  --hc-clover-honey: #D0902D;
  --hc-linen-warm: #F5ECD7;

  /* --- Semantic Tokens --- */
  --hc-bg-primary: var(--hc-beeswax-cream);
  --hc-bg-surface: var(--hc-honeydew-white);
  --hc-bg-alt: var(--hc-linen-warm);
  --hc-text-primary: var(--hc-dark-honey);
  --hc-text-heading: var(--hc-deep-topaz);
  --hc-accent-primary: var(--hc-honeycomb-gold);
  --hc-accent-secondary: var(--hc-amber-glow);
  --hc-accent-cta: var(--hc-toasted-amber);
  --hc-border: var(--hc-warm-straw);
  --hc-shadow: rgba(148, 86, 9, 0.12);
}
```

---

## Typography

Honeycore typography should feel warm, organic, and handcrafted. Headings lean toward rounded serifs and elegant display faces that echo the curves of honey dripping from a dipper. Body text should be highly readable with a gentle, old-fashioned warmth -- think handwritten labels, farmstand signage, and illustrated botanical field guides. Handwritten and script fonts are used sparingly for decorative accents, quotes, and labels, adding the personal touch of a beekeeper's journal.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Playfair Display** | 400, 500, 600, 700 | Display headings; elegant serif with warm contrast | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |
| **Lora** | 400, 500, 600, 700 | Subheadings; classic serif with gentle curves | [Lora](https://fonts.google.com/specimen/Lora) |
| **Merriweather** | 300, 400, 700 | Body text; warm, highly readable serif | [Merriweather](https://fonts.google.com/specimen/Merriweather) |
| **Amatic SC** | 400, 700 | Decorative labels, quotes; hand-drawn condensed | [Amatic SC](https://fonts.google.com/specimen/Amatic+SC) |
| **Nunito** | 300, 400, 600, 700 | UI elements, navigation; soft rounded sans-serif | [Nunito](https://fonts.google.com/specimen/Nunito) |
| **Caveat** | 400, 500, 600, 700 | Handwritten accents, annotations, journal entries | [Caveat](https://fonts.google.com/specimen/Caveat) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Playfair Display 600 | Merriweather 400 | Refined honey-label elegance with warm readability |
| Lora 600 | Nunito 400 | Classic warmth with modern approachability |
| Playfair Display 700 | Nunito 300 | Bold artisan signage with clean body text |
| Amatic SC 700 | Merriweather 400 | Farmstand charm with serious readability |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Merriweather:wght@300;400;700&family=Caveat:wght@400;600&family=Nunito:wght@300;400;600&display=swap');

body {
  font-family: 'Merriweather', 'Georgia', serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #945609;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #8B6914;
}

h1 {
  font-size: 2.8rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.4rem;
}

.handwritten {
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  color: #C5962E;
}

.label-text {
  font-family: 'Nunito', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #D4A017;
}
```

---

## Layout Principles

- **Hexagonal grid influence**: Use honeycomb-inspired grid modules for gallery sections, feature cards, and image layouts; CSS clip-path hexagons for thumbnails
- **Warm, generous spacing**: Internal padding of 32-48px on cards and 24-40px gaps between sections; the layout should feel spacious and sun-warmed, never cramped
- **Single-column or soft two-column layouts**: Favor a natural, vertical reading flow reminiscent of scrolling through a beekeeper's journal
- **Centered content with max-width**: Keep main content at 780-920px max-width, centered on the page with warm-toned backgrounds extending to the edges
- **Layered depth with warm shadows**: Stack elements with amber-tinted box-shadows to create the feeling of layered parchment, wax paper, or stacked honeycomb frames
- **Organic section transitions**: Use honey-drip SVG shapes, wavy dividers, or honeycomb pattern strips between major sections instead of hard horizontal rules
- **Rounded containers everywhere**: Cards, buttons, and content blocks use generous border-radius (14-24px) to echo the soft, rounded forms found in nature
- **Golden gradient backgrounds**: Use subtle warm gradients (cream to straw, or straw to pollen) for section backgrounds to simulate the glow of ambient golden-hour light
- **Responsive approach**: Stack columns vertically on mobile; maintain generous padding; scale honeycomb patterns proportionally; keep the golden warmth across all breakpoints
- **Sticky navigation with warmth**: Navigation bars should feel like a wooden shelf or honey-jar label strip -- warm, grounded, and inviting

---

## CSS / Design Techniques

### Honeycore Card

```css
.honey-card {
  background: var(--hc-bg-surface, #FDF6EC);
  border: 1px solid var(--hc-border, #DDBD73);
  border-radius: 18px;
  padding: 32px;
  box-shadow:
    0 2px 8px rgba(148, 86, 9, 0.08),
    0 1px 3px rgba(148, 86, 9, 0.05);
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.honey-card::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 24px;
  right: 24px;
  height: 4px;
  background: linear-gradient(90deg, #D4A017, #FFBF00, #F4D03F);
  border-radius: 4px;
}

.honey-card:hover {
  box-shadow:
    0 6px 20px rgba(148, 86, 9, 0.14),
    0 2px 6px rgba(148, 86, 9, 0.08);
  transform: translateY(-2px);
}

.honey-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #8B6914;
  margin-bottom: 12px;
}

.honey-card p {
  color: #945609;
  line-height: 1.8;
}
```

### Honeycore Button

```css
.honey-button {
  display: inline-block;
  background: linear-gradient(135deg, #D4A017, #C07830);
  color: #FFF8E7;
  border: none;
  border-radius: 28px;
  padding: 14px 36px;
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(148, 86, 9, 0.25);
  letter-spacing: 0.02em;
}

.honey-button:hover {
  background: linear-gradient(135deg, #C07830, #945609);
  box-shadow: 0 5px 16px rgba(148, 86, 9, 0.35);
  transform: translateY(-2px);
}

.honey-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(148, 86, 9, 0.2);
}

/* --- Outline variant --- */
.honey-button--outline {
  background: transparent;
  color: #D4A017;
  border: 2px solid #D4A017;
  box-shadow: none;
}

.honey-button--outline:hover {
  background: #D4A017;
  color: #FFF8E7;
  box-shadow: 0 3px 10px rgba(148, 86, 9, 0.2);
}
```

### Honeycore Navigation

```css
.honey-nav {
  background: linear-gradient(180deg, #FDF6EC 0%, #F5ECD7 100%);
  border-bottom: 2px solid #DDBD73;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(148, 86, 9, 0.06);
}

.honey-nav__logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #8B6914;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.honey-nav__logo::before {
  content: '\1F41D';
  font-size: 1.2rem;
}

.honey-nav__links {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.honey-nav__links a {
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #945609;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 10px;
  transition: background 0.2s ease, color 0.2s ease;
}

.honey-nav__links a:hover {
  background: rgba(212, 160, 23, 0.12);
  color: #8B6914;
}

.honey-nav__links a.active {
  background: #D4A017;
  color: #FFF8E7;
}
```

### Honeycore Hero Section

```css
.honey-hero {
  background:
    linear-gradient(
      180deg,
      #FFF8E7 0%,
      #F5ECD7 40%,
      #DDBD73 100%
    );
  padding: 100px 40px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.honey-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(255, 191, 0, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(244, 208, 63, 0.12) 0%, transparent 50%);
  pointer-events: none;
}

.honey-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #8B6914;
  margin-bottom: 16px;
  position: relative;
}

.honey-hero .subtitle {
  font-family: 'Caveat', cursive;
  font-size: 1.6rem;
  color: #C5962E;
  margin-bottom: 24px;
  position: relative;
}

.honey-hero p {
  font-family: 'Merriweather', serif;
  font-size: 1.15rem;
  color: #945609;
  max-width: 620px;
  margin: 0 auto 32px;
  line-height: 1.8;
  position: relative;
}
```

### Honeycomb Background Pattern

```css
.honeycomb-bg {
  background-color: #FFF8E7;
  background-image:
    linear-gradient(30deg, #DDBD7318 12%, transparent 12.5%, transparent 87%, #DDBD7318 87.5%, #DDBD7318),
    linear-gradient(150deg, #DDBD7318 12%, transparent 12.5%, transparent 87%, #DDBD7318 87.5%, #DDBD7318),
    linear-gradient(30deg, #DDBD7318 12%, transparent 12.5%, transparent 87%, #DDBD7318 87.5%, #DDBD7318),
    linear-gradient(150deg, #DDBD7318 12%, transparent 12.5%, transparent 87%, #DDBD7318 87.5%, #DDBD7318),
    linear-gradient(60deg, #F4D03F14 25%, transparent 25.5%, transparent 75%, #F4D03F14 75%, #F4D03F14),
    linear-gradient(60deg, #F4D03F14 25%, transparent 25.5%, transparent 75%, #F4D03F14 75%, #F4D03F14);
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
```

### Honey Drip Divider

```css
.honey-drip-divider {
  width: 100%;
  height: 40px;
  position: relative;
  overflow: hidden;
  margin: 0;
}

.honey-drip-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #D4A017, #FFBF00, #D4A017);
}

.honey-drip-divider::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  height: 32px;
  background:
    radial-gradient(ellipse 20px 24px at 10% 0%, #FFBF00 70%, transparent 71%),
    radial-gradient(ellipse 14px 18px at 30% 0%, #D4A017 70%, transparent 71%),
    radial-gradient(ellipse 18px 28px at 55% 0%, #FFBF00 70%, transparent 71%),
    radial-gradient(ellipse 12px 16px at 75% 0%, #D4A017 70%, transparent 71%),
    radial-gradient(ellipse 16px 20px at 92% 0%, #FFBF00 70%, transparent 71%);
}
```

### Golden Glow Text Effect

```css
.golden-text {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(
    135deg,
    #8B6914 0%,
    #D4A017 25%,
    #FFBF00 50%,
    #D4A017 75%,
    #8B6914 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.golden-text--glow {
  filter: drop-shadow(0 0 12px rgba(255, 191, 0, 0.3));
}
```

### Beeswax Texture Background

```css
.beeswax-bg {
  background-color: #FDF6EC;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(148, 86, 9, 0.03) 3px,
      rgba(148, 86, 9, 0.03) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(148, 86, 9, 0.02) 3px,
      rgba(148, 86, 9, 0.02) 4px
    ),
    radial-gradient(
      ellipse at 50% 50%,
      rgba(212, 160, 23, 0.05) 0%,
      transparent 70%
    );
}
```

---

## Design Do's and Don'ts

### Do's

- **Use amber-tinted shadows**: Tint all box-shadows with warm brown (`rgba(148, 86, 9, ...)`) rather than pure black for soft golden depth
- **Incorporate hexagonal shapes**: Use honeycomb geometry in grids, image masks, decorative patterns, and icon containers
- **Pair serif headings with rounded sans-serif body**: This combination creates the warm, artisanal feel central to the aesthetic
- **Apply warm photo filters**: Add a slight warm/amber filter to photographs (`filter: sepia(8%) saturate(110%) brightness(102%)`) to maintain palette cohesion
- **Use cream and straw tones instead of pure white**: Backgrounds should always lean warm; use `#FFF8E7` or `#FDF6EC` instead of `#FFFFFF`
- **Include bee and botanical illustrations**: Hand-drawn or simple line-art bees, sunflowers, and honey dippers as icons and ornamental details
- **Layer subtle textures**: Combine linen weave, beeswax sheen, and parchment textures for tactile depth
- **Design with golden-hour lighting in mind**: Gradients and overlays should simulate the warm, diffused glow of late-afternoon sunlight

### Don'ts

- **Avoid cool-toned palettes**: No blues, cool grays, teals, or lavenders; these break the golden warmth that defines the aesthetic
- **Avoid sharp, angular geometry**: No hard-edged triangles, aggressive diagonals, or brutalist grid systems; everything should feel organic and rounded
- **Do not use dark mode or black backgrounds**: Honeycore is fundamentally a light, warm aesthetic; dark themes contradict its core identity
- **Avoid glossy or chrome-like surfaces**: No metallic gradients, glass morphism, or high-sheen reflections; textures should feel matte and natural
- **Do not use sans-serif fonts exclusively**: The aesthetic requires the warmth of serif typefaces; sans-serifs alone feel too clinical
- **Avoid neon colors or electric accents**: High-saturation fluorescents clash with the natural, earthy warmth of honey tones
- **Do not overcrowd layouts**: Despite the abundance principle, individual elements need breathing room; avoid dense, information-heavy layouts
- **Avoid modern, techy imagery**: No screenshots of devices, cityscapes, or futuristic elements; imagery should feel rural, natural, and timeless

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Cottagecore** | Parent aesthetic; Honeycore narrows Cottagecore's broad pastoral vision to specifically golden, honey-focused warmth with yellows and ambers replacing Cottagecore's sage greens and dusty pinks |
| **Farmcore** | Shares rural agricultural imagery and values, but Farmcore encompasses the full farm experience while Honeycore zeroes in on apiaries, meadows, and honey production |
| **Grandmillennial** | Both draw from vintage domestic traditions and handcraft; Grandmillennial leans toward chintz and needlepoint while Honeycore leans toward beeswax and wildflowers |
| **Earth Tones** | Overlapping warm-brown palettes, but Earth Tones is broader and more muted; Honeycore adds specific golden saturation and apiary imagery |
| **Goblincore** | Both celebrate natural specimens and foraging, but Goblincore favors mossy greens and muddy browns while Honeycore stays firmly in golden amber territory |
| **Hygge** | Shared emphasis on warmth and comfort, but Hygge is Scandinavian-cool and neutral while Honeycore is golden-warm and saturated |
| **Arts and Crafts** | Both value handmade quality and natural materials; Arts and Crafts provides a historical design-movement grounding for Honeycore's artisanal sensibility |
| **Craftcore** | Shares the emphasis on handmade, DIY aesthetics; Craftcore is broader in scope while Honeycore focuses specifically on bee- and honey-related crafts and warmth |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Honeycore - Golden Sweetness</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Merriweather:wght@300;400;700&family=Caveat:wght@400;600&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       HONEYCORE DESIGN SYSTEM
       Warm golden hues, bees, sunflowers,
       honey jars, amber tones, sun-drenched
       sweetness.
       ======================================== */

    /* --- CSS Custom Properties --- */
    :root {
      --hc-honeycomb-gold: #D4A017;
      --hc-amber-glow: #FFBF00;
      --hc-dark-honey: #945609;
      --hc-beeswax-cream: #FFF8E7;
      --hc-golden-nectar: #E8BE14;
      --hc-mustard-field: #C5962E;
      --hc-sunflower-petal: #F4D03F;
      --hc-honeydew-white: #FDF6EC;
      --hc-warm-straw: #DDBD73;
      --hc-toasted-amber: #C07830;
      --hc-pollen-dust: #DFD492;
      --hc-deep-topaz: #8B6914;
      --hc-meadow-sage: #7A8B5D;
      --hc-clover-honey: #D0902D;
      --hc-linen-warm: #F5ECD7;

      --hc-bg-primary: var(--hc-beeswax-cream);
      --hc-bg-surface: var(--hc-honeydew-white);
      --hc-bg-alt: var(--hc-linen-warm);
      --hc-text-primary: var(--hc-dark-honey);
      --hc-text-heading: var(--hc-deep-topaz);
      --hc-accent-primary: var(--hc-honeycomb-gold);
      --hc-accent-cta: var(--hc-toasted-amber);
      --hc-border: var(--hc-warm-straw);
      --hc-shadow: rgba(148, 86, 9, 0.12);
      --hc-radius: 16px;
      --hc-radius-lg: 24px;
      --hc-radius-pill: 28px;
    }

    /* --- Reset & Base --- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--hc-text-primary);
      background-color: var(--hc-bg-primary);
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(148, 86, 9, 0.025) 3px,
          rgba(148, 86, 9, 0.025) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 3px,
          rgba(148, 86, 9, 0.018) 3px,
          rgba(148, 86, 9, 0.018) 4px
        );
      -webkit-font-smoothing: antialiased;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    a {
      color: var(--hc-accent-primary);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: var(--hc-accent-cta);
    }

    /* --- Navigation --- */
    .honey-nav {
      background: linear-gradient(180deg, var(--hc-bg-surface) 0%, var(--hc-bg-alt) 100%);
      border-bottom: 2px solid var(--hc-border);
      padding: 14px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px var(--hc-shadow);
    }

    .honey-nav__logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--hc-text-heading);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .honey-nav__logo .bee-icon {
      font-size: 1.3rem;
    }

    .honey-nav__links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .honey-nav__links a {
      font-family: 'Nunito', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--hc-text-primary);
      padding: 8px 18px;
      border-radius: 10px;
      transition: background 0.2s ease, color 0.2s ease;
    }

    .honey-nav__links a:hover,
    .honey-nav__links a.active {
      background: rgba(212, 160, 23, 0.14);
      color: var(--hc-text-heading);
    }

    /* --- Hero Section --- */
    .honey-hero {
      background:
        linear-gradient(
          180deg,
          var(--hc-bg-primary) 0%,
          var(--hc-bg-alt) 50%,
          var(--hc-warm-straw) 100%
        );
      padding: 100px 40px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .honey-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 25% 75%, rgba(255, 191, 0, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, rgba(244, 208, 63, 0.10) 0%, transparent 50%);
      pointer-events: none;
    }

    .honey-hero__content {
      position: relative;
      z-index: 1;
      max-width: 700px;
      margin: 0 auto;
    }

    .honey-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--hc-text-heading);
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .honey-hero .subtitle {
      font-family: 'Caveat', cursive;
      font-size: 1.6rem;
      color: var(--hc-mustard-field);
      margin-bottom: 20px;
    }

    .honey-hero p {
      font-size: 1.1rem;
      color: var(--hc-text-primary);
      margin-bottom: 32px;
      line-height: 1.9;
    }

    /* --- Buttons --- */
    .honey-btn {
      display: inline-block;
      background: linear-gradient(135deg, var(--hc-honeycomb-gold), var(--hc-toasted-amber));
      color: var(--hc-bg-primary);
      border: none;
      border-radius: var(--hc-radius-pill);
      padding: 14px 36px;
      font-family: 'Merriweather', serif;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 3px 12px rgba(148, 86, 9, 0.25);
      letter-spacing: 0.02em;
    }

    .honey-btn:hover {
      background: linear-gradient(135deg, var(--hc-toasted-amber), var(--hc-dark-honey));
      color: var(--hc-bg-primary);
      box-shadow: 0 5px 18px rgba(148, 86, 9, 0.35);
      transform: translateY(-2px);
    }

    .honey-btn--outline {
      background: transparent;
      color: var(--hc-honeycomb-gold);
      border: 2px solid var(--hc-honeycomb-gold);
      box-shadow: none;
    }

    .honey-btn--outline:hover {
      background: var(--hc-honeycomb-gold);
      color: var(--hc-bg-primary);
    }

    /* --- Container --- */
    .container {
      max-width: 880px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* --- Section --- */
    .section {
      padding: 64px 0;
    }

    .section--alt {
      background: var(--hc-bg-alt);
    }

    .section__header {
      text-align: center;
      margin-bottom: 48px;
    }

    .section__header h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--hc-text-heading);
      margin-bottom: 8px;
    }

    .section__header .tagline {
      font-family: 'Caveat', cursive;
      font-size: 1.3rem;
      color: var(--hc-mustard-field);
    }

    /* --- Card Grid --- */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }

    .honey-card {
      background: var(--hc-bg-surface);
      border: 1px solid var(--hc-border);
      border-radius: var(--hc-radius);
      padding: 32px;
      box-shadow: 0 2px 8px var(--hc-shadow);
      position: relative;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .honey-card::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 20px;
      right: 20px;
      height: 4px;
      background: linear-gradient(90deg, var(--hc-honeycomb-gold), var(--hc-amber-glow), var(--hc-sunflower-petal));
      border-radius: 4px;
    }

    .honey-card:hover {
      box-shadow: 0 6px 24px rgba(148, 86, 9, 0.16);
      transform: translateY(-3px);
    }

    .honey-card__icon {
      font-size: 2.2rem;
      margin-bottom: 16px;
      display: block;
    }

    .honey-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--hc-text-heading);
      margin-bottom: 10px;
    }

    .honey-card p {
      font-size: 0.98rem;
      line-height: 1.75;
      color: var(--hc-text-primary);
    }

    /* --- Honey Drip Divider --- */
    .honey-divider {
      width: 100%;
      height: 36px;
      position: relative;
      overflow: hidden;
    }

    .honey-divider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, var(--hc-honeycomb-gold), var(--hc-amber-glow), var(--hc-honeycomb-gold));
    }

    .honey-divider::after {
      content: '';
      position: absolute;
      top: 6px;
      left: 0;
      right: 0;
      height: 30px;
      background:
        radial-gradient(ellipse 18px 22px at 12% 0%, var(--hc-amber-glow) 68%, transparent 70%),
        radial-gradient(ellipse 12px 16px at 35% 0%, var(--hc-honeycomb-gold) 68%, transparent 70%),
        radial-gradient(ellipse 16px 26px at 58% 0%, var(--hc-amber-glow) 68%, transparent 70%),
        radial-gradient(ellipse 10px 14px at 78% 0%, var(--hc-honeycomb-gold) 68%, transparent 70%),
        radial-gradient(ellipse 14px 18px at 93% 0%, var(--hc-amber-glow) 68%, transparent 70%);
    }

    /* --- Feature Row --- */
    .feature-row {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 48px;
    }

    .feature-row--reverse {
      flex-direction: row-reverse;
    }

    .feature-row__image {
      flex: 0 0 40%;
      border-radius: var(--hc-radius-lg);
      overflow: hidden;
      box-shadow: 0 4px 16px var(--hc-shadow);
      background: var(--hc-pollen-dust);
      min-height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
    }

    .feature-row__text {
      flex: 1;
    }

    .feature-row__text h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--hc-text-heading);
      margin-bottom: 12px;
    }

    .feature-row__text p {
      margin-bottom: 16px;
      line-height: 1.8;
    }

    /* --- Testimonial / Blockquote --- */
    .honey-quote {
      background: var(--hc-bg-surface);
      border-left: 5px solid var(--hc-honeycomb-gold);
      border-radius: 0 var(--hc-radius) var(--hc-radius) 0;
      padding: 28px 32px;
      margin: 40px 0;
      position: relative;
    }

    .honey-quote::before {
      content: '\201C';
      position: absolute;
      top: -10px;
      left: 16px;
      font-family: 'Playfair Display', serif;
      font-size: 4rem;
      color: var(--hc-amber-glow);
      opacity: 0.4;
      line-height: 1;
    }

    .honey-quote p {
      font-style: italic;
      font-size: 1.1rem;
      color: var(--hc-text-primary);
      margin-bottom: 12px;
    }

    .honey-quote cite {
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--hc-mustard-field);
    }

    /* --- Newsletter / CTA Banner --- */
    .honey-cta {
      background: linear-gradient(135deg, var(--hc-warm-straw) 0%, var(--hc-pollen-dust) 100%);
      border-radius: var(--hc-radius-lg);
      padding: 48px 40px;
      text-align: center;
      margin: 48px 0;
      box-shadow: 0 4px 16px var(--hc-shadow);
    }

    .honey-cta h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--hc-text-heading);
      margin-bottom: 12px;
    }

    .honey-cta p {
      max-width: 500px;
      margin: 0 auto 24px;
      color: var(--hc-text-primary);
    }

    .honey-cta__form {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .honey-cta__form input[type="email"] {
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      padding: 12px 20px;
      border: 2px solid var(--hc-border);
      border-radius: var(--hc-radius-pill);
      background: var(--hc-bg-primary);
      color: var(--hc-text-primary);
      min-width: 260px;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .honey-cta__form input[type="email"]:focus {
      border-color: var(--hc-honeycomb-gold);
    }

    .honey-cta__form input[type="email"]::placeholder {
      color: var(--hc-warm-straw);
    }

    /* --- Footer --- */
    .honey-footer {
      background: var(--hc-deep-topaz);
      color: var(--hc-pollen-dust);
      padding: 48px 32px 32px;
      text-align: center;
    }

    .honey-footer__brand {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--hc-amber-glow);
      margin-bottom: 16px;
    }

    .honey-footer p {
      font-family: 'Nunito', sans-serif;
      font-size: 0.9rem;
      color: var(--hc-warm-straw);
      line-height: 1.6;
      max-width: 500px;
      margin: 0 auto 24px;
    }

    .honey-footer__links {
      display: flex;
      justify-content: center;
      gap: 24px;
      list-style: none;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }

    .honey-footer__links a {
      font-family: 'Nunito', sans-serif;
      font-size: 0.9rem;
      color: var(--hc-pollen-dust);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .honey-footer__links a:hover {
      color: var(--hc-amber-glow);
    }

    .honey-footer__copy {
      font-size: 0.8rem;
      color: var(--hc-mustard-field);
      opacity: 0.7;
      border-top: 1px solid rgba(221, 189, 115, 0.2);
      padding-top: 20px;
    }

    /* --- Dot Divider --- */
    .dot-divider {
      text-align: center;
      margin: 24px 0;
      color: var(--hc-honeycomb-gold);
      font-size: 1.2rem;
      letter-spacing: 0.6em;
      opacity: 0.5;
    }

    /* --- Utility --- */
    .text-center { text-align: center; }
    .mt-32 { margin-top: 32px; }
    .mb-32 { margin-bottom: 32px; }

    /* --- Responsive --- */
    @media (max-width: 768px) {
      .honey-hero h1 {
        font-size: 2.2rem;
      }

      .honey-hero .subtitle {
        font-size: 1.3rem;
      }

      .honey-nav {
        flex-direction: column;
        gap: 12px;
        padding: 12px 20px;
      }

      .honey-nav__links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .feature-row,
      .feature-row--reverse {
        flex-direction: column;
      }

      .feature-row__image {
        flex: none;
        width: 100%;
        min-height: 180px;
      }

      .section {
        padding: 40px 0;
      }

      .honey-cta {
        padding: 32px 20px;
      }

      .honey-cta__form {
        flex-direction: column;
        align-items: center;
      }

      .honey-cta__form input[type="email"] {
        min-width: 100%;
      }
    }

    @media (max-width: 480px) {
      .honey-hero {
        padding: 60px 20px 50px;
      }

      .honey-hero h1 {
        font-size: 1.8rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .honey-card {
        padding: 24px;
      }
    }
  </style>
</head>
<body>

  <!-- ===== Navigation ===== -->
  <nav class="honey-nav">
    <a href="#" class="honey-nav__logo">
      <span class="bee-icon">&#x1F41D;</span>
      Honeycore
    </a>
    <ul class="honey-nav__links">
      <li><a href="#about" class="active">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#journal">Journal</a></li>
      <li><a href="#newsletter">Subscribe</a></li>
    </ul>
  </nav>

  <!-- ===== Hero Section ===== -->
  <header class="honey-hero">
    <div class="honey-hero__content">
      <h1>Sun-Drenched Sweetness</h1>
      <p class="subtitle">where golden light meets wildflower meadows</p>
      <p>
        Welcome to a world steeped in amber warmth, where bees hum
        through sunflower fields and every moment drips with the
        golden sweetness of raw honey. Life is slow, light is warm,
        and everything tastes like summer.
      </p>
      <a href="#features" class="honey-btn">Explore the Hive</a>
    </div>
  </header>

  <!-- ===== Honey Drip Divider ===== -->
  <div class="honey-divider"></div>

  <!-- ===== About Section ===== -->
  <section id="about" class="section">
    <div class="container">
      <div class="section__header">
        <h2>The Art of Golden Living</h2>
        <span class="tagline">sweetness in every detail</span>
      </div>

      <div class="feature-row">
        <div class="feature-row__image">&#x1F33B;</div>
        <div class="feature-row__text">
          <h3>Born from the Meadow</h3>
          <p>
            Honeycore draws its soul from the apiary -- the golden glow
            of beeswax, the intricate architecture of honeycomb, and the
            tireless dance of bees across fields of sunflowers. Every
            design choice echoes this natural abundance.
          </p>
          <a href="#" class="honey-btn--outline honey-btn">Learn More</a>
        </div>
      </div>

      <div class="feature-row feature-row--reverse">
        <div class="feature-row__image">&#x1F36F;</div>
        <div class="feature-row__text">
          <h3>Sweetness as Philosophy</h3>
          <p>
            More than decoration, Honeycore celebrates a way of living
            that values warmth, conservation, and the gentle rhythms of
            nature. It is the aesthetic of beekeeper's journals, farmers'
            market mornings, and honey dripping from a wooden dipper.
          </p>
          <a href="#" class="honey-btn--outline honey-btn">Discover</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Feature Cards Section ===== -->
  <section id="features" class="section section--alt">
    <div class="container">
      <div class="section__header">
        <h2>Elements of the Hive</h2>
        <span class="tagline">the building blocks of golden design</span>
      </div>

      <div class="card-grid">
        <div class="honey-card">
          <span class="honey-card__icon">&#x1F41D;</span>
          <h3>Bee Conservation</h3>
          <p>
            At its heart, Honeycore carries a message of environmental
            stewardship. The bees that inspire the aesthetic are also
            its cause -- protecting pollinators and celebrating their
            vital role in our ecosystem.
          </p>
        </div>

        <div class="honey-card">
          <span class="honey-card__icon">&#x2B21;</span>
          <h3>Hexagonal Harmony</h3>
          <p>
            The honeycomb is nature's most efficient structure. In
            Honeycore design, hexagonal geometry provides the foundational
            grid -- a pattern that is both mathematically precise and
            organically beautiful.
          </p>
        </div>

        <div class="honey-card">
          <span class="honey-card__icon">&#x1F33E;</span>
          <h3>Golden Harvest</h3>
          <p>
            Warm amber tones, sun-ripened wheat fields, and the rich
            gold of fresh honey define a palette that makes every
            surface feel like it has been kissed by late-afternoon
            sunlight.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Dot Divider ===== -->
  <div class="dot-divider">&bull; &bull; &bull;</div>

  <!-- ===== Testimonial Section ===== -->
  <section id="journal" class="section">
    <div class="container">
      <div class="section__header">
        <h2>From the Beekeeper's Journal</h2>
        <span class="tagline">words dripping with warmth</span>
      </div>

      <div class="honey-quote">
        <p>
          The bees teach us that the sweetest things in life require
          patience, cooperation, and a deep respect for the rhythms
          of the natural world. Every jar of honey is a collaboration
          between a thousand tiny artists and the flowers they love.
        </p>
        <cite>-- A Beekeeper's Almanac</cite>
      </div>

      <div class="honey-quote">
        <p>
          There is something profoundly comforting about a kitchen
          that smells of beeswax and warm bread. It is the scent of
          time slowing down, of Sunday mornings that stretch into
          forever.
        </p>
        <cite>-- Golden Hour Living</cite>
      </div>
    </div>
  </section>

  <!-- ===== CTA / Newsletter ===== -->
  <section id="newsletter" class="section">
    <div class="container">
      <div class="honey-cta">
        <h3>Join the Hive</h3>
        <p>
          Subscribe to our newsletter for seasonal recipes, beekeeping
          tips, and a weekly dose of golden inspiration.
        </p>
        <form class="honey-cta__form" onsubmit="return false;">
          <input type="email" placeholder="your.email@meadow.com" aria-label="Email address">
          <button type="submit" class="honey-btn">Subscribe</button>
        </form>
      </div>
    </div>
  </section>

  <!-- ===== Footer ===== -->
  <footer class="honey-footer">
    <div class="honey-footer__brand">&#x1F41D; Honeycore</div>
    <p>
      Celebrating the golden warmth of honey, the tireless beauty of
      bees, and the sun-drenched sweetness of slow, intentional living.
    </p>
    <ul class="honey-footer__links">
      <li><a href="#">About</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Conservation</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="honey-footer__copy">
      &copy; 2026 Honeycore &mdash; Made with warmth and wildflower honey
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Amber-tinted shadows everywhere**: Always use `rgba(148, 86, 9, ...)` for box-shadows instead of pure black; this maintains the warm golden cohesion across the entire design and prevents cool-toned shadows from breaking the aesthetic
- **Honeycomb clip-paths for images**: Use CSS `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)` to create hexagonal image masks for gallery thumbnails and profile photos
- **Warm photo filtering**: Apply `filter: sepia(8%) saturate(115%) brightness(103%)` to all photographs so they feel naturally integrated with the golden palette, even if the source images have cooler tones
- **SVG bee illustrations**: Inline simple SVG bee motifs for dividers, bullet markers, and loading states; keep them single-color (using `currentColor`) and slightly transparent so they serve as texture rather than distraction
- **Avoid pure white and pure black**: Replace `#FFFFFF` with `#FFF8E7` (beeswax cream) and `#000000` with `#945609` (dark honey) throughout; pure neutrals feel cold against the warm palette
- **Honey-drip transitions**: Use the radial-gradient drip technique for section dividers rather than sharp horizontal lines; this reinforces the liquid, flowing quality of the aesthetic
- **CSS honeycomb grids**: For gallery or feature sections, consider using CSS Grid with hexagonal clip-paths on each item rather than standard rectangular cards; this creates a genuine honeycomb layout
- **Progressive warmth on scroll**: Use subtle background-color transitions between sections, moving from lighter creams at the top to warmer golds toward the middle and back to cream at the bottom, simulating the deepening warmth of golden hour
