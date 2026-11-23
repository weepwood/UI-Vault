# Candy Pop Design Reference

Candy Pop is a sugar-sweet, bubblegum-drenched web design aesthetic defined by **bright pinks, purples, and saturated pastels**, ultra-rounded shapes, and playful, bouncy typography. It draws from the broader Candycore movement, Japanese kawaii culture, 1980s bubblegum pop packaging, and the cheerful visual language of confectionery branding. The result is a digital experience that feels like walking into a candy store: joyful, colorful, and unapologetically sweet.

---

## Overview

Candy Pop emerged at the intersection of several cultural currents. Its roots trace back to 1970s and 1980s Japanese kawaii culture, where cuteness was elevated into an entire visual language through Harajuku street fashion, Sanrio character design, and playful consumer product packaging. In the West, bubblegum pop music of the late 1990s and early 2000s -- with its glossy album covers, pink-saturated music videos, and candy-themed merchandise -- cemented a visual vocabulary of bright pinks, purples, and rounded, inflated letterforms. By the early 2020s, the Candycore aesthetic had crystallized on platforms like TikTok and Pinterest, fusing these influences into a cohesive design language built on the visual motifs of candy, confectionery, and desserts.

At its core, Candy Pop is an exercise in optimistic maximalism. Unlike minimalist design, which strips away decoration to reveal structure, Candy Pop revels in decoration as structure. Every surface is an opportunity for color, pattern, and playfulness. The color palette draws directly from fruit-flavored candies and bubblegum: hot pinks, lavender purples, mint greens, lemon yellows, and cotton-candy blues. These are not muted or sophisticated pastels -- they are saturated, confident, and unapologetically cheerful. The visual style uses candy as a decorative and textural element rather than as a realistic depiction of food, creating a world where sprinkles, frosting textures, lollipop shapes, and gummy-bear silhouettes become the building blocks of interface design.

Typography in Candy Pop is equally distinctive. Rounded, bubbly display fonts that look inflated or hand-drawn dominate headlines, evoking toy packaging, children's show titles, and candy wrapper branding. These are paired with clean, friendly sans-serifs for body text, maintaining readability while preserving the playful tone. The overall effect is approachable and warm -- the typographic equivalent of a smile.

In web and UI design, Candy Pop translates into interfaces with generous border-radius values, soft pink and purple gradients, glossy hover effects, and a general sense of bounciness in transitions and animations. Cards feel like candy boxes. Buttons look like gumdrops. Navigation bars glow with pastel neon. The entire experience should feel tactile and inviting, as if the interface itself were made of something sweet and soft. When executed well, Candy Pop creates digital spaces that are irresistibly engaging without sacrificing usability -- proving that fun and function can coexist.

---

## Visual Characteristics

### Core Design Traits

- **Saturated pink and purple dominance** -- hot pink, bubblegum pink, magenta, and lavender form the primary color backbone of every composition
- **Ultra-rounded shapes everywhere** -- border-radius values of 16px and above on cards, buttons, containers, and images; pill shapes and circles preferred over rectangles
- **Glossy, candy-like surfaces** -- subtle gradients, highlight reflections, and soft inner glows that mimic the sheen of hard candy or bubblegum
- **Playful, inflated typography** -- bubbly, rounded display fonts for headlines that look like balloon lettering or toy-box branding
- **Confectionery motifs and patterns** -- sprinkles, lollipops, gummy bears, candy canes, frosting swirls, and cotton candy used as decorative elements and textures
- **Generous white or pastel background space** -- neutral or very light pastel backgrounds that allow colorful candy elements to pop, following the 70/30 rule of main color to accent
- **Bouncy, elastic animations** -- hover effects, transitions, and micro-interactions that use spring-like easing curves to feel playful and tactile
- **Soft shadow systems** -- colored box-shadows in pink, purple, or pastel tones rather than traditional gray or black shadows
- **Gradient layering** -- multi-stop gradients that shift between pink, purple, blue, and yellow, mimicking the swirled colors of candy
- **Sticker and badge elements** -- pill-shaped tags, floating decorative badges, and emoji-style icons scattered through layouts
- **Polka dots, stripes, and confetti patterns** -- candy wrapper-inspired geometric patterns used as section backgrounds or decorative overlays

### Design Principles

- **Joy as a primary objective** -- every design decision should increase the feeling of delight and sweetness; if it does not spark joy, reconsider it
- **Approachability over sophistication** -- Candy Pop is not trying to be elegant or refined; it is trying to be friendly, warm, and welcoming
- **Color as architecture** -- use color boldly and structurally, not just decoratively; color defines hierarchy, sections, and navigation
- **Rounded over angular** -- when choosing between a sharp corner and a rounded one, always choose rounded; softness is fundamental
- **Texture through pattern** -- create visual depth through layered patterns (sprinkles, dots, waves) rather than through shadows or perspective
- **Playful contrast** -- pair saturated brights against soft pastels; use dark accents (deep purple, berry) sparingly for emphasis
- **Consistency in whimsy** -- the playfulness should feel intentional and systematic, not random; establish a visual vocabulary and apply it consistently
- **Accessibility within fun** -- ensure sufficient color contrast ratios despite the pastel palette; playful does not mean unreadable

---

## Color Palette

The Candy Pop palette is derived directly from the colors of fruit-flavored candies, bubblegum, cotton candy, and frosted confections. It ranges from soft pastels to fully saturated brights, with a deliberate emphasis on pinks and purples as the foundational hues. Deep berry and plum tones serve as dark accents for text and contrast, while whites and creams provide breathing room.

### Color Table

| Swatch | Hex | Role / Usage |
|--------|-----|--------------|
| Bubblegum Pink | `#FF69B4` | Primary brand color, headings, key interactive elements |
| Hot Magenta | `#FF1493` | Active states, primary buttons, hover accents |
| Cotton Candy | `#FFBAD2` | Card backgrounds, soft fills, secondary surfaces |
| Blush Rose | `#FFD1DC` | Light background washes, hero section gradients |
| Lavender Dream | `#C8A2C8` | Secondary accent, tags, decorative borders |
| Grape Fizz | `#9B59B6` | Secondary buttons, section accents, icon backgrounds |
| Berry Jam | `#6C3483` | Dark accent, footer backgrounds, deep contrast |
| Lemon Drop | `#FFF44F` | Highlight callouts, badges, attention-grabbing accents |
| Mint Chew | `#98FF98` | Success states, tertiary accent, fresh contrast |
| Sky Taffy | `#87CEEB` | Info states, cool accent, alternating section backgrounds |
| Cream Vanilla | `#FFF8F0` | Page background, card surfaces, breathing room |
| Marshmallow White | `#FFFFFF` | Clean backgrounds, text on dark, card surfaces |
| Frosting Pink | `#F8A4B8` | Borders, dividers, subtle surface differentiation |
| Deep Plum | `#2D1B33` | Primary text on light backgrounds, dark mode base |
| Candy Coral | `#FF6F61` | Warning states, warm accent, call-to-action variation |

### CSS Custom Properties

```css
:root {
  /* --- Primary Pinks --- */
  --candy-bubblegum: #ff69b4;
  --candy-hot-magenta: #ff1493;
  --candy-cotton: #ffbad2;
  --candy-blush: #ffd1dc;
  --candy-frosting: #f8a4b8;
  --candy-coral: #ff6f61;

  /* --- Purples --- */
  --candy-lavender: #c8a2c8;
  --candy-grape: #9b59b6;
  --candy-berry: #6c3483;
  --candy-deep-plum: #2d1b33;

  /* --- Accent Brights --- */
  --candy-lemon: #fff44f;
  --candy-mint: #98ff98;
  --candy-sky: #87ceeb;

  /* --- Neutrals --- */
  --candy-cream: #fff8f0;
  --candy-white: #ffffff;

  /* --- Functional Mappings --- */
  --candy-bg-primary: var(--candy-cream);
  --candy-bg-secondary: var(--candy-blush);
  --candy-bg-card: var(--candy-white);
  --candy-text-primary: var(--candy-deep-plum);
  --candy-text-secondary: var(--candy-berry);
  --candy-text-heading: var(--candy-bubblegum);
  --candy-accent-primary: var(--candy-hot-magenta);
  --candy-accent-secondary: var(--candy-grape);
  --candy-border: var(--candy-frosting);
  --candy-link: var(--candy-bubblegum);
  --candy-link-hover: var(--candy-hot-magenta);
  --candy-shadow: rgba(255, 105, 180, 0.25);
  --candy-shadow-hover: rgba(255, 20, 147, 0.35);

  /* --- Radius System --- */
  --candy-radius-sm: 12px;
  --candy-radius-md: 20px;
  --candy-radius-lg: 32px;
  --candy-radius-pill: 9999px;
  --candy-radius-circle: 50%;
}
```

---

## Typography

Candy Pop typography is defined by rounded, inflated, and bubbly letterforms for display use, paired with clean, friendly sans-serifs for body text. Headlines should evoke the feeling of toy packaging, candy wrappers, or children's show title cards. Body text must remain highly readable while still feeling warm and approachable. Fonts with geometric construction and rounded terminals are strongly preferred.

### Recommended Google Fonts

| Font | Style | Best Usage |
|------|-------|------------|
| **Bubblegum Sans** | Rounded, brushy display | Hero headings, large display text |
| **Baloo 2** | Bubbly, rounded display | Section headings, card titles |
| **Sour Gummy** | Playful, candy-inspired | Decorative headings, feature callouts |
| **Quicksand** | Geometric rounded sans-serif | Body text, UI elements, navigation |
| **Nunito** | Rounded, friendly sans-serif | Body text alternative, form labels |
| **Comfortaa** | Wide rounded sans-serif | Subheadings, buttons, navigation |
| **Fredoka** | Rounded, bold display | Badges, tags, short callout text |
| **Lilita One** | Heavy rounded display | Impact headings, banner text |

### Font Pairing Recommendations

| Heading Font | Body Font | Character |
|--------------|-----------|-----------|
| Bubblegum Sans | Quicksand | Classic candy shop signage meets clean readability |
| Baloo 2 | Nunito | Warm and rounded from top to bottom |
| Sour Gummy | Quicksand | Maximum playfulness with grounded body text |
| Lilita One | Nunito | Bold, impactful headlines with soft body text |
| Fredoka | Comfortaa | Consistently rounded and bubbly throughout |

### Typography CSS Example

```css
/* Import candy fonts */
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Baloo+2:wght@400;600;800&family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Comfortaa:wght@400;600;700&display=swap');

/* Headlines -- bubbly, inflated display */
h1, h2, h3 {
  font-family: 'Baloo 2', 'Bubblegum Sans', cursive;
  font-weight: 800;
  color: var(--candy-text-heading);
  line-height: 1.15;
  letter-spacing: 0.01em;
}

h1 {
  font-family: 'Bubblegum Sans', cursive;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

h3 {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
}

/* Body text -- rounded, friendly, readable */
body {
  font-family: 'Quicksand', 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--candy-text-primary);
}

/* Subheadings and navigation */
.candy-subheading,
nav a {
  font-family: 'Comfortaa', 'Quicksand', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
}

/* Decorative candy text */
.candy-display {
  font-family: 'Bubblegum Sans', cursive;
  font-size: 2rem;
  color: var(--candy-bubblegum);
  text-shadow:
    2px 2px 0 var(--candy-cotton),
    4px 4px 0 rgba(255, 105, 180, 0.15);
}

/* Tags and badges */
.candy-tag {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## Layout Principles

- **Generous border-radius on all containers** -- every card, section, button, and image container should use rounded corners (16px minimum); pill shapes and circles are preferred for small elements
- **Ample padding and breathing room** -- despite the maximalist color approach, spacing should be generous to prevent visual fatigue; let color fill the space rather than cramming elements
- **Grid-based card layouts** -- use CSS Grid or Flexbox to arrange content in uniform, candy-box-like card grids with consistent gaps
- **Alternating pastel section backgrounds** -- shift between cream, blush pink, light lavender, and soft blue backgrounds between major page sections to create visual rhythm
- **Floating decorative elements** -- sprinkle-like dots, small icons, or confetti patterns that break the grid and add playfulness without obstructing content
- **Centered, symmetrical hero sections** -- hero areas should be bold, centered, and gradient-filled, serving as the visual candy wrapper for the page
- **Sticky, rounded navigation** -- navigation bars with pill-shaped links, pastel backgrounds, and subtle shadow that float above content
- **Progressive disclosure with bouncy animations** -- reveal content sections with spring-like entrance animations as the user scrolls
- **Mobile-first responsive design** -- the rounded, card-based layout translates naturally to mobile; use single-column card stacks on small screens
- **Consistent vertical rhythm** -- maintain a regular spacing scale (e.g., 8px base unit) to keep the sweetness organized rather than chaotic
- **Visual hierarchy through color saturation** -- use the most saturated colors (hot magenta, bubblegum pink) for primary actions, and softer pastels for secondary content

---

## CSS / Design Techniques

### Card Component

```css
/* Candy card -- rounded, glossy, tactile */
.candy-card {
  background: var(--candy-bg-card);
  border: 2px solid var(--candy-border);
  border-radius: var(--candy-radius-md);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.35s ease;
  box-shadow: 0 4px 20px var(--candy-shadow);
}

.candy-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 36px var(--candy-shadow-hover);
  border-color: var(--candy-bubblegum);
}

/* Glossy highlight stripe across top */
.candy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--candy-bubblegum),
    var(--candy-grape),
    var(--candy-sky),
    var(--candy-lemon),
    var(--candy-bubblegum)
  );
  border-radius: var(--candy-radius-md) var(--candy-radius-md) 0 0;
}

/* Colored variant cards */
.candy-card--pink {
  background: linear-gradient(135deg, #fff0f5, #ffe0ec);
  border-color: var(--candy-bubblegum);
}

.candy-card--purple {
  background: linear-gradient(135deg, #f5f0ff, #ece0ff);
  border-color: var(--candy-lavender);
}

.candy-card--blue {
  background: linear-gradient(135deg, #f0f8ff, #e0f0ff);
  border-color: var(--candy-sky);
}
```

### Button Styles

```css
/* Primary candy button -- bubblegum gumdrop */
.candy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: 'Comfortaa', 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(135deg, var(--candy-bubblegum), var(--candy-hot-magenta));
  border: none;
  border-radius: var(--candy-radius-pill);
  cursor: pointer;
  box-shadow:
    0 4px 15px rgba(255, 20, 147, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
  text-decoration: none;
  letter-spacing: 0.02em;
}

.candy-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(255, 20, 147, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.candy-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(255, 20, 147, 0.2);
}

/* Secondary button -- outlined gumdrop */
.candy-btn--secondary {
  background: transparent;
  color: var(--candy-bubblegum);
  border: 2.5px solid var(--candy-bubblegum);
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.15);
}

.candy-btn--secondary:hover {
  background: var(--candy-cotton);
  color: var(--candy-hot-magenta);
  border-color: var(--candy-hot-magenta);
}

/* Purple variant */
.candy-btn--grape {
  background: linear-gradient(135deg, var(--candy-grape), var(--candy-berry));
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.3);
}

/* Small pill button for tags */
.candy-btn--sm {
  padding: 0.4rem 1rem;
  font-size: 0.75rem;
  border-radius: var(--candy-radius-pill);
}
```

### Navigation Bar

```css
/* Candy Pop sticky navigation */
.candy-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background: rgba(255, 248, 240, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid var(--candy-cotton);
  box-shadow: 0 2px 20px rgba(255, 105, 180, 0.12);
}

.candy-nav__brand {
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.6rem;
  color: var(--candy-bubblegum);
  text-decoration: none;
}

.candy-nav__links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.candy-nav__link {
  font-family: 'Comfortaa', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--candy-text-secondary);
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: var(--candy-radius-pill);
  transition: background 0.25s ease, color 0.25s ease;
}

.candy-nav__link:hover,
.candy-nav__link--active {
  background: var(--candy-cotton);
  color: var(--candy-hot-magenta);
}

/* Mobile hamburger toggle */
.candy-nav__toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--candy-bubblegum);
  cursor: pointer;
}

@media (max-width: 768px) {
  .candy-nav__links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 248, 240, 0.97);
    padding: 1rem;
    border-bottom: 2px solid var(--candy-cotton);
    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.12);
  }

  .candy-nav__links--open {
    display: flex;
  }

  .candy-nav__toggle {
    display: block;
  }
}
```

### Hero Section

```css
/* Candy Pop hero with gradient and floating elements */
.candy-hero {
  position: relative;
  text-align: center;
  padding: 6rem 2rem 5rem;
  background: linear-gradient(
    135deg,
    var(--candy-blush) 0%,
    var(--candy-cotton) 25%,
    #e8d0f0 50%,
    var(--candy-blush) 75%,
    #ffe0f0 100%
  );
  overflow: hidden;
}

/* Animated gradient shimmer */
.candy-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: candy-shimmer 6s ease-in-out infinite;
}

@keyframes candy-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.candy-hero__title {
  font-family: 'Bubblegum Sans', cursive;
  font-size: clamp(3rem, 8vw, 5.5rem);
  color: var(--candy-hot-magenta);
  text-shadow:
    3px 3px 0 var(--candy-cotton),
    6px 6px 0 rgba(155, 89, 182, 0.1);
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
}

.candy-hero__subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--candy-berry);
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.candy-hero__cta {
  position: relative;
  z-index: 1;
}

/* Floating candy circles decoration */
.candy-hero__decor-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: candy-float 8s ease-in-out infinite;
}

.candy-hero__decor-circle:nth-child(1) {
  width: 120px;
  height: 120px;
  background: var(--candy-bubblegum);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.candy-hero__decor-circle:nth-child(2) {
  width: 80px;
  height: 80px;
  background: var(--candy-grape);
  top: 20%;
  right: 10%;
  animation-delay: -2s;
}

.candy-hero__decor-circle:nth-child(3) {
  width: 60px;
  height: 60px;
  background: var(--candy-lemon);
  bottom: 15%;
  left: 15%;
  animation-delay: -4s;
}

.candy-hero__decor-circle:nth-child(4) {
  width: 100px;
  height: 100px;
  background: var(--candy-sky);
  bottom: 10%;
  right: 5%;
  animation-delay: -6s;
}

@keyframes candy-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}
```

### Sprinkle / Confetti Background Pattern

```css
/* Sprinkle pattern overlay for sections */
.candy-sprinkles {
  position: relative;
}

.candy-sprinkles::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 10% 15%, var(--candy-bubblegum) 2px, transparent 2px),
    radial-gradient(circle at 85% 25%, var(--candy-grape) 1.5px, transparent 1.5px),
    radial-gradient(circle at 20% 70%, var(--candy-lemon) 2px, transparent 2px),
    radial-gradient(circle at 75% 60%, var(--candy-sky) 1.5px, transparent 1.5px),
    radial-gradient(circle at 45% 10%, var(--candy-mint) 1.5px, transparent 1.5px),
    radial-gradient(circle at 55% 85%, var(--candy-coral) 2px, transparent 2px),
    radial-gradient(circle at 30% 45%, var(--candy-lavender) 1.5px, transparent 1.5px),
    radial-gradient(circle at 90% 80%, var(--candy-bubblegum) 1px, transparent 1px),
    radial-gradient(circle at 5% 50%, var(--candy-grape) 1px, transparent 1px),
    radial-gradient(circle at 65% 35%, var(--candy-lemon) 1px, transparent 1px);
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

/* Wavy section divider */
.candy-wave-divider {
  width: 100%;
  height: 60px;
  background: var(--candy-bg-primary);
  clip-path: polygon(
    0 60%, 5% 40%, 10% 55%, 15% 35%, 20% 50%,
    25% 30%, 30% 45%, 35% 25%, 40% 40%, 45% 20%,
    50% 35%, 55% 20%, 60% 40%, 65% 25%, 70% 45%,
    75% 30%, 80% 50%, 85% 35%, 90% 55%, 95% 40%,
    100% 60%, 100% 100%, 0 100%
  );
}
```

### Glossy / Candy Surface Effect

```css
/* Glossy candy surface -- mimics hard candy sheen */
.candy-glossy {
  position: relative;
  overflow: hidden;
}

.candy-glossy::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at 30% 20%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 1;
}

/* Frosted glass candy panel */
.candy-frosted {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border: 1.5px solid rgba(255, 105, 180, 0.2);
  border-radius: var(--candy-radius-lg);
  box-shadow: 0 8px 32px rgba(255, 105, 180, 0.1);
}
```

### Candy Gradient Text

```css
/* Rainbow candy gradient text */
.candy-gradient-text {
  background: linear-gradient(
    90deg,
    var(--candy-bubblegum),
    var(--candy-grape),
    var(--candy-sky),
    var(--candy-bubblegum)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: candy-text-flow 4s linear infinite;
}

@keyframes candy-text-flow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* Candy text shadow (non-gradient fallback) */
.candy-text-glow {
  color: var(--candy-hot-magenta);
  text-shadow:
    0 0 10px rgba(255, 20, 147, 0.3),
    0 0 30px rgba(255, 105, 180, 0.15),
    0 0 60px rgba(255, 105, 180, 0.05);
}
```

### Footer

```css
/* Candy Pop footer */
.candy-footer {
  background: linear-gradient(135deg, var(--candy-berry), var(--candy-deep-plum));
  color: var(--candy-cotton);
  padding: 3rem 2rem;
  text-align: center;
  border-radius: var(--candy-radius-lg) var(--candy-radius-lg) 0 0;
}

.candy-footer a {
  color: var(--candy-bubblegum);
  text-decoration: none;
  transition: color 0.25s ease;
}

.candy-footer a:hover {
  color: var(--candy-lemon);
}

.candy-footer__links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.candy-footer__brand {
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.8rem;
  color: var(--candy-bubblegum);
  margin-bottom: 0.5rem;
}

.candy-footer__copy {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 1.5rem;
}
```

---

## Design Do's and Don'ts

### Do's

- **Do use generous border-radius values** -- 16px minimum on cards and containers; pill shapes on buttons, tags, and badges
- **Do embrace bright, saturated pinks and purples** -- they are the heart and soul of Candy Pop; do not shy away from bold color
- **Do add micro-interactions and bounce animations** -- use spring-like cubic-bezier easing (e.g., `cubic-bezier(0.34, 1.56, 0.64, 1)`) on hover states and transitions
- **Do use colored shadows** -- pink, purple, and pastel-tinted box-shadows rather than gray or black ones
- **Do maintain readability** -- pair your bright colors with dark text (deep plum or berry) and ensure WCAG AA contrast ratios
- **Do layer gradients** -- multi-stop gradients between pink, purple, blue, and yellow create that signature candy swirl effect
- **Do include playful details** -- sprinkle patterns, confetti overlays, candy-themed icons, and emoji-style decorative elements
- **Do use consistent spacing** -- an 8px grid system keeps the playfulness structured and professional

### Don'ts

- **Don't use sharp corners or angular shapes** -- hard edges and sharp rectangles break the candy illusion; everything should feel soft and rounded
- **Don't use dark, muted, or desaturated colors** -- grays, browns, olive tones, and muted neutrals are antithetical to the aesthetic
- **Don't use traditional serif fonts** -- serif typefaces feel too formal and academic for Candy Pop; stick to rounded sans-serifs and bubbly display fonts
- **Don't use standard gray box-shadows** -- `rgba(0,0,0,0.1)` shadows feel lifeless; always tint your shadows with pink or purple
- **Don't overcrowd without breathing room** -- while the palette is maximalist, the layout should still have generous padding and spacing
- **Don't use harsh, linear transitions** -- avoid `ease-in` or linear timing functions; candy pop animations should feel bouncy, elastic, and playful
- **Don't ignore accessibility** -- pastel-on-pastel text is a common failure; always test contrast ratios with tools like WebAIM
- **Don't mix in industrial or brutalist elements** -- exposed grids, monospace fonts, and raw concrete textures clash with the candy aesthetic

---

## Related Aesthetics

| Aesthetic | Relationship to Candy Pop |
|-----------|---------------------------|
| **Candycore** | The broader parent aesthetic; Candy Pop is essentially Candycore applied to digital/web design |
| **Cutecore** | Shares pastel pinks and rounded forms but adds darker, dissonant horror elements that Candy Pop avoids |
| **Kawaii** | Japanese cute aesthetic that is a major influence; Candy Pop is kawaii filtered through Western candy culture |
| **Dopamine Design** | Shares the emphasis on bright, joy-inducing color and playful interactions |
| **Danish Pastel** | Shares soft pastels but is much more muted and minimalist; Candy Pop is the maximalist, saturated version |
| **Bubblegum Bitch** | Fashion aesthetic cousin using highly saturated pinks and purples with feminine, childlike elements |
| **Frutiger Aero** | Shares glossy surfaces and bright colors but leans toward nature imagery and eco-tech rather than candy |
| **Y2K Glam** | Shares pink and purple palettes and glossy surfaces; Y2K adds metallic and futuristic elements |
| **Gen Z Maximalism** | Shares bold color usage and anti-minimalist philosophy; Candy Pop is a specific flavor of this broader trend |
| **Coquette** | Shares pink palettes and feminine motifs but is more refined, romantic, and bow-centric |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Candy Pop -- Sweet Design Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Baloo+2:wght@400;600;800&family=Quicksand:wght@400;500;600;700&family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       CANDY POP -- CSS CUSTOM PROPERTIES
       ============================================ */
    :root {
      --candy-bubblegum: #ff69b4;
      --candy-hot-magenta: #ff1493;
      --candy-cotton: #ffbad2;
      --candy-blush: #ffd1dc;
      --candy-frosting: #f8a4b8;
      --candy-coral: #ff6f61;
      --candy-lavender: #c8a2c8;
      --candy-grape: #9b59b6;
      --candy-berry: #6c3483;
      --candy-deep-plum: #2d1b33;
      --candy-lemon: #fff44f;
      --candy-mint: #98ff98;
      --candy-sky: #87ceeb;
      --candy-cream: #fff8f0;
      --candy-white: #ffffff;
      --candy-shadow: rgba(255, 105, 180, 0.25);
      --candy-shadow-hover: rgba(255, 20, 147, 0.35);
      --candy-radius-sm: 12px;
      --candy-radius-md: 20px;
      --candy-radius-lg: 32px;
      --candy-radius-pill: 9999px;
    }

    /* ============================================
       RESET & BASE
       ============================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Quicksand', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--candy-deep-plum);
      background: var(--candy-cream);
      overflow-x: hidden;
    }

    h1, h2, h3, h4 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: var(--candy-bubblegum);
      line-height: 1.15;
    }

    a {
      color: var(--candy-bubblegum);
      text-decoration: none;
      transition: color 0.25s ease;
    }

    a:hover {
      color: var(--candy-hot-magenta);
    }

    img {
      max-width: 100%;
      display: block;
      border-radius: var(--candy-radius-md);
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    .nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 2rem;
      background: rgba(255, 248, 240, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--candy-cotton);
      box-shadow: 0 2px 20px rgba(255, 105, 180, 0.12);
    }

    .nav__brand {
      font-family: 'Bubblegum Sans', cursive;
      font-size: 1.6rem;
      color: var(--candy-bubblegum);
      text-decoration: none;
    }

    .nav__links {
      display: flex;
      gap: 0.5rem;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Comfortaa', sans-serif;
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--candy-berry);
      padding: 0.5rem 1.2rem;
      border-radius: var(--candy-radius-pill);
      transition: background 0.25s ease, color 0.25s ease;
    }

    .nav__links a:hover,
    .nav__links a.active {
      background: var(--candy-cotton);
      color: var(--candy-hot-magenta);
    }

    .nav__toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--candy-bubblegum);
      cursor: pointer;
    }

    /* ============================================
       HERO SECTION
       ============================================ */
    .hero {
      position: relative;
      text-align: center;
      padding: 7rem 2rem 5rem;
      background: linear-gradient(
        135deg,
        var(--candy-blush) 0%,
        var(--candy-cotton) 30%,
        #e8d0f0 60%,
        var(--candy-blush) 100%
      );
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.15) 50%,
        transparent 70%
      );
      background-size: 200% 200%;
      animation: shimmer 6s ease-in-out infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .hero__decor {
      position: absolute;
      border-radius: 50%;
      opacity: 0.12;
      animation: float 8s ease-in-out infinite;
    }

    .hero__decor--1 {
      width: 140px; height: 140px;
      background: var(--candy-bubblegum);
      top: 8%; left: 4%;
    }

    .hero__decor--2 {
      width: 90px; height: 90px;
      background: var(--candy-grape);
      top: 18%; right: 8%;
      animation-delay: -2s;
    }

    .hero__decor--3 {
      width: 65px; height: 65px;
      background: var(--candy-lemon);
      bottom: 12%; left: 12%;
      animation-delay: -4s;
    }

    .hero__decor--4 {
      width: 110px; height: 110px;
      background: var(--candy-sky);
      bottom: 8%; right: 6%;
      animation-delay: -6s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.06); }
    }

    .hero__content {
      position: relative;
      z-index: 1;
      max-width: 700px;
      margin: 0 auto;
    }

    .hero__title {
      font-family: 'Bubblegum Sans', cursive;
      font-size: clamp(3rem, 8vw, 5.5rem);
      color: var(--candy-hot-magenta);
      text-shadow:
        3px 3px 0 var(--candy-cotton),
        6px 6px 0 rgba(155, 89, 182, 0.1);
      margin-bottom: 1rem;
    }

    .hero__subtitle {
      font-family: 'Quicksand', sans-serif;
      font-size: clamp(1.1rem, 2.5vw, 1.4rem);
      font-weight: 600;
      color: var(--candy-berry);
      margin-bottom: 2.5rem;
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 2rem;
      font-family: 'Comfortaa', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      border: none;
      border-radius: var(--candy-radius-pill);
      cursor: pointer;
      text-decoration: none;
      letter-spacing: 0.02em;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                  box-shadow 0.3s ease;
    }

    .btn--primary {
      color: #fff;
      background: linear-gradient(135deg, var(--candy-bubblegum), var(--candy-hot-magenta));
      box-shadow:
        0 4px 15px rgba(255, 20, 147, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    .btn--primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow:
        0 8px 25px rgba(255, 20, 147, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    .btn--secondary {
      color: var(--candy-bubblegum);
      background: transparent;
      border: 2.5px solid var(--candy-bubblegum);
      box-shadow: 0 4px 15px rgba(255, 105, 180, 0.15);
    }

    .btn--secondary:hover {
      background: var(--candy-cotton);
      color: var(--candy-hot-magenta);
      transform: translateY(-3px);
    }

    /* ============================================
       SECTION CONTAINERS
       ============================================ */
    .section {
      padding: 5rem 2rem;
      max-width: 1140px;
      margin: 0 auto;
    }

    .section__title {
      text-align: center;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      margin-bottom: 0.75rem;
    }

    .section__subtitle {
      text-align: center;
      color: var(--candy-berry);
      font-weight: 600;
      max-width: 550px;
      margin: 0 auto 3rem;
    }

    .bg-blush {
      background: var(--candy-blush);
    }

    .bg-lavender {
      background: #f0e6f6;
    }

    /* ============================================
       CARD GRID
       ============================================ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--candy-white);
      border: 2px solid var(--candy-frosting);
      border-radius: var(--candy-radius-md);
      padding: 2rem;
      position: relative;
      overflow: hidden;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                  box-shadow 0.35s ease;
      box-shadow: 0 4px 20px var(--candy-shadow);
    }

    .card:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 12px 36px var(--candy-shadow-hover);
      border-color: var(--candy-bubblegum);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(
        90deg,
        var(--candy-bubblegum),
        var(--candy-grape),
        var(--candy-sky)
      );
      border-radius: var(--candy-radius-md) var(--candy-radius-md) 0 0;
    }

    .card__icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .card__title {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .card__text {
      color: var(--candy-berry);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .card__tag {
      display: inline-block;
      padding: 0.25rem 0.8rem;
      font-family: 'Quicksand', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #fff;
      border-radius: var(--candy-radius-pill);
      margin-bottom: 0.75rem;
    }

    .card__tag--pink { background: var(--candy-bubblegum); }
    .card__tag--grape { background: var(--candy-grape); }
    .card__tag--sky { background: var(--candy-sky); }
    .card__tag--coral { background: var(--candy-coral); }

    /* ============================================
       FEATURES ROW
       ============================================ */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .feature {
      padding: 2rem 1.5rem;
    }

    .feature__icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature__title {
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
    }

    .feature__text {
      font-size: 0.9rem;
      color: var(--candy-berry);
    }

    /* ============================================
       TESTIMONIAL / QUOTE SECTION
       ============================================ */
    .quote-section {
      background: linear-gradient(135deg, var(--candy-berry), var(--candy-deep-plum));
      color: var(--candy-cotton);
      padding: 5rem 2rem;
      text-align: center;
    }

    .quote-section__text {
      font-family: 'Baloo 2', cursive;
      font-size: clamp(1.4rem, 3vw, 2.2rem);
      font-weight: 600;
      max-width: 700px;
      margin: 0 auto 1.5rem;
      line-height: 1.4;
      color: var(--candy-cotton);
    }

    .quote-section__author {
      font-family: 'Comfortaa', sans-serif;
      font-size: 0.95rem;
      color: var(--candy-bubblegum);
      font-weight: 600;
    }

    /* ============================================
       NEWSLETTER / CTA SECTION
       ============================================ */
    .cta-section {
      text-align: center;
      padding: 5rem 2rem;
      background: linear-gradient(
        135deg,
        #ffe0f0 0%,
        var(--candy-cotton) 50%,
        #e8d0f0 100%
      );
    }

    .cta-section__title {
      font-family: 'Bubblegum Sans', cursive;
      font-size: clamp(2rem, 5vw, 3.5rem);
      color: var(--candy-hot-magenta);
      margin-bottom: 1rem;
    }

    .cta-section__text {
      color: var(--candy-berry);
      font-weight: 600;
      max-width: 480px;
      margin: 0 auto 2rem;
    }

    .cta-form {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 500px;
      margin: 0 auto;
    }

    .cta-form__input {
      flex: 1;
      min-width: 220px;
      padding: 0.85rem 1.5rem;
      font-family: 'Quicksand', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      border: 2.5px solid var(--candy-frosting);
      border-radius: var(--candy-radius-pill);
      outline: none;
      background: var(--candy-white);
      color: var(--candy-deep-plum);
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .cta-form__input:focus {
      border-color: var(--candy-bubblegum);
      box-shadow: 0 0 0 4px rgba(255, 105, 180, 0.15);
    }

    .cta-form__input::placeholder {
      color: var(--candy-lavender);
    }

    /* ============================================
       FOOTER
       ============================================ */
    .footer {
      background: linear-gradient(135deg, var(--candy-berry), var(--candy-deep-plum));
      color: var(--candy-cotton);
      padding: 3rem 2rem;
      text-align: center;
      border-radius: var(--candy-radius-lg) var(--candy-radius-lg) 0 0;
    }

    .footer__brand {
      font-family: 'Bubblegum Sans', cursive;
      font-size: 1.8rem;
      color: var(--candy-bubblegum);
      margin-bottom: 1rem;
    }

    .footer__links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      list-style: none;
      margin-bottom: 1.5rem;
    }

    .footer__links a {
      color: var(--candy-cotton);
      font-family: 'Comfortaa', sans-serif;
      font-weight: 600;
      font-size: 0.85rem;
    }

    .footer__links a:hover {
      color: var(--candy-lemon);
    }

    .footer__copy {
      font-size: 0.8rem;
      opacity: 0.6;
    }

    /* ============================================
       UTILITIES & ANIMATIONS
       ============================================ */
    .text-center { text-align: center; }
    .mt-1 { margin-top: 0.5rem; }
    .mt-2 { margin-top: 1rem; }
    .mt-3 { margin-top: 2rem; }
    .mb-3 { margin-bottom: 2rem; }

    @keyframes bounce-in {
      0% { opacity: 0; transform: translateY(30px) scale(0.95); }
      60% { transform: translateY(-5px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    .animate-in {
      animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      opacity: 0;
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 768px) {
      .nav__links {
        display: none;
        position: absolute;
        top: 100%; left: 0; right: 0;
        flex-direction: column;
        background: rgba(255, 248, 240, 0.97);
        padding: 1rem;
        border-bottom: 2px solid var(--candy-cotton);
        box-shadow: 0 8px 20px rgba(255, 105, 180, 0.12);
      }

      .nav__links.open {
        display: flex;
      }

      .nav__toggle {
        display: block;
      }

      .hero {
        padding: 5rem 1.5rem 3.5rem;
      }

      .section {
        padding: 3rem 1.5rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .cta-form {
        flex-direction: column;
        align-items: stretch;
      }
    }
  </style>
</head>
<body>

  <!-- ========== NAVIGATION ========== -->
  <nav class="nav">
    <a href="#" class="nav__brand">CandyPop</a>
    <button class="nav__toggle" onclick="document.querySelector('.nav__links').classList.toggle('open')" aria-label="Toggle menu">
      &#9776;
    </button>
    <ul class="nav__links">
      <li><a href="#features" class="active">Features</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#testimonial">Praise</a></li>
      <li><a href="#cta">Join</a></li>
    </ul>
  </nav>

  <!-- ========== HERO ========== -->
  <header class="hero">
    <div class="hero__decor hero__decor--1"></div>
    <div class="hero__decor hero__decor--2"></div>
    <div class="hero__decor hero__decor--3"></div>
    <div class="hero__decor hero__decor--4"></div>
    <div class="hero__content">
      <h1 class="hero__title">Sweet Designs Start Here</h1>
      <p class="hero__subtitle">A bubblegum-bright, candy-coated experience that turns every pixel into a treat.</p>
      <div>
        <a href="#features" class="btn btn--primary">Explore Flavors</a>
        <a href="#cta" class="btn btn--secondary" style="margin-left: 0.75rem;">Get Started</a>
      </div>
    </div>
  </header>

  <!-- ========== FEATURES ========== -->
  <section class="section" id="features">
    <h2 class="section__title">Why Candy Pop?</h2>
    <p class="section__subtitle">Every detail is designed to spark joy and keep visitors coming back for more.</p>
    <div class="features">
      <div class="feature animate-in">
        <div class="feature__icon">&#127853;</div>
        <h3 class="feature__title">Sugar-Sweet Palettes</h3>
        <p class="feature__text">Bright pinks, dreamy purples, and bubblegum pastels that radiate warmth and happiness.</p>
      </div>
      <div class="feature animate-in" style="animation-delay: 0.1s;">
        <div class="feature__icon">&#127880;</div>
        <h3 class="feature__title">Bouncy Interactions</h3>
        <p class="feature__text">Spring-loaded animations and elastic hover effects that make every click feel playful.</p>
      </div>
      <div class="feature animate-in" style="animation-delay: 0.2s;">
        <div class="feature__icon">&#9786;</div>
        <h3 class="feature__title">Friendly Typography</h3>
        <p class="feature__text">Rounded, bubbly fonts that feel like candy wrapper branding and toy packaging.</p>
      </div>
      <div class="feature animate-in" style="animation-delay: 0.3s;">
        <div class="feature__icon">&#127752;</div>
        <h3 class="feature__title">Gradient Magic</h3>
        <p class="feature__text">Multi-stop gradients that swirl between pink, purple, and blue like cotton candy.</p>
      </div>
    </div>
  </section>

  <!-- ========== CARD GALLERY ========== -->
  <section class="bg-blush" id="gallery">
    <div class="section">
      <h2 class="section__title">Sweet Collection</h2>
      <p class="section__subtitle">A showcase of candy-inspired components and design patterns.</p>
      <div class="card-grid">
        <div class="card animate-in">
          <span class="card__tag card__tag--pink">Branding</span>
          <div class="card__icon">&#127852;</div>
          <h3 class="card__title">Lollipop Logos</h3>
          <p class="card__text">Circular, swirled logo marks that use the candy palette to create instantly recognizable brand identities.</p>
        </div>
        <div class="card animate-in" style="animation-delay: 0.1s;">
          <span class="card__tag card__tag--grape">Layout</span>
          <div class="card__icon">&#127856;</div>
          <h3 class="card__title">Candy Box Grids</h3>
          <p class="card__text">Uniform card grids that feel like opening a box of assorted sweets, each card a different flavor.</p>
        </div>
        <div class="card animate-in" style="animation-delay: 0.2s;">
          <span class="card__tag card__tag--sky">Animation</span>
          <div class="card__icon">&#10024;</div>
          <h3 class="card__title">Sparkle Effects</h3>
          <p class="card__text">Micro-interactions with glitter particles and shimmer effects that catch the eye like candy wrappers in sunlight.</p>
        </div>
        <div class="card animate-in" style="animation-delay: 0.3s;">
          <span class="card__tag card__tag--coral">UI Kit</span>
          <div class="card__icon">&#127846;</div>
          <h3 class="card__title">Gumdrop Buttons</h3>
          <p class="card__text">Pill-shaped, gradient-filled buttons with glossy highlights and spring-loaded hover states.</p>
        </div>
        <div class="card animate-in" style="animation-delay: 0.4s;">
          <span class="card__tag card__tag--pink">Pattern</span>
          <div class="card__icon">&#127881;</div>
          <h3 class="card__title">Sprinkle Textures</h3>
          <p class="card__text">Confetti and sprinkle background patterns that add depth and whimsy to any section of the page.</p>
        </div>
        <div class="card animate-in" style="animation-delay: 0.5s;">
          <span class="card__tag card__tag--grape">Typography</span>
          <div class="card__icon">&#127851;</div>
          <h3 class="card__title">Bubble Letters</h3>
          <p class="card__text">Inflated, rounded display fonts that look like they were formed from bubblegum and candy dough.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== TESTIMONIAL ========== -->
  <section class="quote-section" id="testimonial">
    <p class="quote-section__text">"Candy Pop turned our landing page from forgettable to irresistible. Users spend twice as long exploring, and our conversion rate jumped 40%."</p>
    <p class="quote-section__author">-- Sweet Tooth Studio, Design Lead</p>
  </section>

  <!-- ========== CTA ========== -->
  <section class="cta-section" id="cta">
    <h2 class="cta-section__title">Ready for Something Sweet?</h2>
    <p class="cta-section__text">Join our community of designers who believe that fun and usability go hand in hand.</p>
    <form class="cta-form" onsubmit="event.preventDefault();">
      <input type="email" class="cta-form__input" placeholder="your@email.com" aria-label="Email address">
      <button type="submit" class="btn btn--primary">Subscribe</button>
    </form>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="footer__brand">CandyPop</div>
    <ul class="footer__links">
      <li><a href="#features">Features</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#testimonial">Praise</a></li>
      <li><a href="#cta">Join</a></li>
    </ul>
    <p class="footer__copy">Candy Pop Design System. Made with sweetness.</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the color custom properties** -- define the full `--candy-*` variable system in `:root` first; this ensures every component automatically adopts the Candy Pop palette when you reference variables
- **Use `cubic-bezier(0.34, 1.56, 0.64, 1)` for bounce** -- this specific easing curve creates the signature Candy Pop "overshoot and settle" animation that makes interactions feel elastic and playful
- **Test contrast ratios early** -- the most common Candy Pop accessibility failure is pastel text on pastel backgrounds; use deep plum (`#2D1B33`) or berry (`#6C3483`) for text, and always verify with a contrast checker
- **Apply the radius system consistently** -- use `--candy-radius-sm` (12px) for small elements, `--candy-radius-md` (20px) for cards and containers, `--candy-radius-lg` (32px) for hero sections and modals, and `--candy-radius-pill` (9999px) for buttons and tags
- **Layer gradients for depth** -- combine background gradients with pseudo-element overlays (sprinkle patterns, shimmer effects) to build the rich, candy-like surface quality without relying on images
- **Use colored box-shadows exclusively** -- replace every `rgba(0,0,0,...)` shadow with `rgba(255,105,180,...)` or similar pink/purple tints; this single change transforms a generic UI into a Candy Pop UI
- **Optimize font loading** -- load only the weights you need from Google Fonts using the `display=swap` parameter to prevent layout shifts; Bubblegum Sans for headlines and Quicksand for body covers most use cases
- **Progressive enhancement for animations** -- wrap complex animations in `@media (prefers-reduced-motion: no-preference)` to respect user accessibility settings while still providing the full Candy Pop experience for users who want it
