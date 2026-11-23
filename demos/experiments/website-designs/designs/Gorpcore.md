# Gorpcore Design Reference

Gorpcore is an outdoor-utility urban aesthetic that merges the technical functionality of hiking and trail gear with the confident casualness of modern streetwear. The name derives from "GORP" -- Good Ol' Raisins and Peanuts -- the classic trail mix snack synonymous with hiking culture. Coined by writer Jason Chen in The Cut in 2017, the term captures a fashion and design sensibility where performance outerwear, technical fabrics, and rugged outdoor equipment transcend their original wilderness context and become statements of practical, unpretentious style in everyday urban environments.

In web and UI design, Gorpcore translates into interfaces that prioritize **earthy, muted color palettes drawn from natural landscapes; utilitarian grid-based layouts that emphasize clarity and function; textured surfaces that evoke nylon ripstop, waxed canvas, and technical fleece; bold condensed typography reminiscent of trail signage and topographic maps; and an overall philosophy where every visual element serves a clear, practical purpose**. The aesthetic is inspired by brands such as Arc'teryx, Salomon, Patagonia, and The North Face -- companies known for minimalist, no-fuss product design, advanced material engineering, and a visual language that balances rugged durability with clean, modern sophistication.

The Gorpcore palette anchors itself in the colors of the trail: olive greens, sandstone beiges, slate grays, charcoal, and deep earth browns. These muted foundation tones are then punctuated by high-visibility signal colors -- blaze orange, highlighter yellow, ultraviolet, or alpine red -- borrowed from safety gear and summit equipment. This interplay between subdued natural tones and sharp functional accents is the signature visual tension of the aesthetic. Materials and textures matter deeply: the web equivalent of Gore-Tex and ripstop nylon manifests as subtle background textures, topographic line patterns, grid overlays, and technical-looking UI elements that communicate durability and precision. Layering, a core principle in outdoor apparel, translates to layered UI cards, stacked sections, and compositions that reveal depth through overlapping elements and careful use of shadow and elevation.

---

## Visual Characteristics

### Core Design Traits

- **Earth-tone color foundation**: Muted olive, sandstone, slate gray, charcoal, and warm brown dominate backgrounds, surfaces, and text, evoking natural rock, soil, and forest canopy
- **High-visibility accent pops**: Signal orange, safety yellow, alpine red, and electric blue punctuate the neutral palette as functional highlights, borrowed from trail markers and safety gear
- **Technical fabric textures**: Subtle background patterns that reference ripstop nylon weave, fleece grain, waxed canvas, and Gore-Tex membrane micro-textures
- **Topographic line art**: Contour-line patterns used as decorative backgrounds, section dividers, and hero overlays, evoking trail maps and geological survey charts
- **Condensed, utilitarian typography**: Bold, tightly-tracked sans-serif typefaces reminiscent of trail signage, military specification labels, and outdoor equipment branding
- **Grid-and-function layouts**: Clean, structured grid systems where every element has a clear purpose, mirroring the no-nonsense organization of a well-packed rucksack
- **Layered card compositions**: UI cards with subtle elevation and overlapping edges, referencing the layering system fundamental to outdoor apparel (base layer, mid layer, shell)
- **Carabiner and buckle iconography**: Functional hardware motifs -- clips, toggles, D-rings, cord locks -- used as decorative elements and interactive affordances
- **Matte and semi-matte surfaces**: Low-sheen finishes that contrast with glossy digital trends, evoking the tactile quality of treated outdoor fabrics
- **Badge and patch aesthetics**: Information presented in badge-like containers, label tags, and woven-patch-style elements that reference outdoor brand labeling
- **Coordinate and data overlays**: Subtle GPS coordinates, elevation markers, weather data, and measurement units used as decorative micro-content

### Design Principles

- **Function dictates form**: Every design element should serve a visible purpose; ornamentation is acceptable only when it communicates utility or outdoor context
- **Rugged simplicity**: Interfaces should feel durable and uncluttered, as if designed to withstand heavy use on the trail
- **Layered depth**: Compositions build depth through stacked elements, card elevation, and overlapping sections, mirroring the layering philosophy of outdoor apparel
- **Trail-ready legibility**: Typography and contrast must remain highly readable in all conditions, as if the interface needed to function on a rain-soaked phone screen
- **Material honesty**: Textures and surfaces should reference real-world materials truthfully; nothing should feel artificially glossy or plasticky
- **Signal through restraint**: Accent colors gain their power from scarcity; the muted earth-tone base makes each pop of orange or yellow feel intentional and urgent
- **Accessible terrain**: Navigation and information architecture should be as intuitive as well-marked trail blazes, guiding users confidently through content
- **Sustainable design thinking**: Efficiency in code, minimal resource usage, and purposeful design choices echo the environmental consciousness central to outdoor culture

---

## Color Palette

The Gorpcore palette draws directly from natural landscapes: forest floors, mountain rock faces, alpine meadows, and overcast trail skies. The muted foundation is critical -- it creates the quiet backdrop against which high-visibility functional accents can do their work. Think of a charcoal-and-olive campsite scene where a single blaze-orange tent stakes its claim.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Trail Charcoal | `#2C2C2C` | Primary dark background, deep sections, footer |
| Slate Rock | `#4A4E54` | Secondary dark surface, card backgrounds, nav bar |
| Granite Gray | `#6B7280` | Body text on light backgrounds, secondary text |
| Sandstone | `#C2A878` | Warm accent surfaces, tag backgrounds, dividers |
| Khaki Dust | `#BFB49A` | Light warm neutral, subtle backgrounds, hover states |
| Parchment | `#F0EBE0` | Primary light background, card surfaces, page base |
| Trail White | `#F7F5F0` | Clean surface, light sections, text on dark |
| Olive Drab | `#5C6B47` | Primary brand green, nature accent, badges |
| Forest Canopy | `#3D4F2F` | Deep green for emphasis, headers, active states |
| Clay Brown | `#8B6F4E` | Warm mid-tone, borders, secondary buttons |
| Truffle Earth | `#5C4A3A` | Deep brown accent, text on light backgrounds |
| Signal Orange | `#E8651A` | Primary CTA accent, alerts, active markers |
| Summit Red | `#C43E2B` | Secondary alert, badges, important highlights |
| Safety Yellow | `#E3B830` | Warning states, tag highlights, attention accents |
| Alpine Sky | `#5B8BA0` | Cool accent, links, informational elements |

### CSS Custom Properties

```css
:root {
  /* Dark tones */
  --gorp-charcoal: #2c2c2c;
  --gorp-slate: #4a4e54;
  --gorp-granite: #6b7280;

  /* Warm neutrals */
  --gorp-sandstone: #c2a878;
  --gorp-khaki: #bfb49a;
  --gorp-clay: #8b6f4e;
  --gorp-truffle: #5c4a3a;

  /* Light tones */
  --gorp-parchment: #f0ebe0;
  --gorp-trail-white: #f7f5f0;

  /* Greens */
  --gorp-olive: #5c6b47;
  --gorp-forest: #3d4f2f;

  /* Signal accents */
  --gorp-orange: #e8651a;
  --gorp-red: #c43e2b;
  --gorp-yellow: #e3b830;
  --gorp-sky: #5b8ba0;

  /* Functional mappings */
  --gorp-bg-primary: var(--gorp-parchment);
  --gorp-bg-secondary: var(--gorp-trail-white);
  --gorp-bg-dark: var(--gorp-charcoal);
  --gorp-bg-dark-secondary: var(--gorp-slate);
  --gorp-bg-surface: var(--gorp-trail-white);
  --gorp-text-primary: var(--gorp-charcoal);
  --gorp-text-secondary: var(--gorp-granite);
  --gorp-text-on-dark: var(--gorp-trail-white);
  --gorp-accent: var(--gorp-orange);
  --gorp-accent-strong: var(--gorp-red);
  --gorp-border: rgba(107, 114, 128, 0.2);
  --gorp-border-strong: rgba(44, 44, 44, 0.15);

  /* Textures */
  --gorp-topo-opacity: 0.04;
  --gorp-ripstop-size: 8px;

  /* Shadows */
  --gorp-shadow-sm: 0 1px 3px rgba(44, 44, 44, 0.08);
  --gorp-shadow-md: 0 4px 12px rgba(44, 44, 44, 0.10);
  --gorp-shadow-lg: 0 8px 24px rgba(44, 44, 44, 0.14);
}
```

---

## Typography

Gorpcore typography prioritizes **legibility, utilitarian confidence, and trail-tested clarity**. Typefaces should feel like they belong on a topographic map, a technical spec sheet, or a national park trailhead sign. Condensed and semi-condensed sans-serif faces dominate headlines, while clean humanist or geometric sans-serifs handle body text. Monospace fonts appear in data labels, coordinates, and technical micro-content, reinforcing the precision-engineering dimension of the aesthetic.

### Recommended Google Fonts

| Font | Weight(s) | Style | Usage |
|------|-----------|-------|-------|
| **Barlow Condensed** | 400, 600, 700, 800 | Industrial condensed sans-serif, no-nonsense | Hero headlines, section titles, navigation |
| **Barlow** | 400, 500, 600 | Clean geometric sans-serif with utility feel | Body text, UI elements, descriptions |
| **Oswald** | 400, 500, 600, 700 | Tightly-spaced condensed sans with authority | Display headlines, banner text |
| **Source Sans 3** | 300, 400, 600, 700 | Versatile, highly legible humanist sans | Body text, long-form reading |
| **Archivo** | 400, 500, 600, 700 | Grotesque sans with technical precision | Subheadings, labels, buttons |
| **Overpass** | 400, 600, 700, 800 | Highway-signage-inspired sans-serif | Navigation, wayfinding labels |
| **IBM Plex Mono** | 400, 500, 600 | Technical monospace with excellent legibility | Data labels, coordinates, specs |
| **Saira Condensed** | 400, 600, 700 | Sporty condensed sans with dynamic energy | Tags, badges, accent headlines |

### Font Pairing Suggestions

| Heading | Body | Mood |
|---------|------|------|
| Barlow Condensed 700 | Source Sans 3 400 | Technical trail guide: authoritative yet readable |
| Oswald 600 | Barlow 400 | Rugged outfitter catalog: bold with clean utility |
| Archivo 700 | Source Sans 3 400 | Modern gear review: precise and trustworthy |
| Barlow Condensed 800 | Barlow 400 | Unified trail system: cohesive and systematic |
| Overpass 700 | Source Sans 3 300 | National park wayfinding: clear and accessible |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&family=Source+Sans+3:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

body {
  font-family: 'Source Sans 3', 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: var(--gorp-text-primary);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: 'Barlow Condensed', 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gorp-charcoal);
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  font-weight: 800;
}

h2 {
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  line-height: 1.15;
}

h3 {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.25;
}

/* Technical data label */
.gorp-data {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gorp-granite);
}

/* Trail tag / badge label */
.gorp-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gorp-trail-white);
  background: var(--gorp-olive);
  padding: 0.2em 0.7em;
  border-radius: 2px;
}

/* Accent headline with signal color */
.gorp-signal {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gorp-orange);
}
```

---

## Layout Principles

- **Structured utility grids**: Use clean 12-column or modular grid systems that echo the precision of topographic map grids; content should snap to clear alignment points
- **Full-width hero with layered depth**: Hero sections use stacked layers -- background texture, topographic overlay, content, and floating badge elements -- to create a sense of rugged terrain depth
- **Card-based content organization**: Information is presented in distinct card units with clear borders and subtle elevation, like pages in a field guide or gear specification sheets
- **Generous but purposeful whitespace**: Ample breathing room between sections, but never wasteful; space should feel like the open trail, not empty neglect
- **Sticky navigation with wayfinding clarity**: Navigation bars that remain accessible during scroll, styled as trail-marker systems with clear, uppercase labels
- **Asymmetric balance**: Layouts may break strict symmetry with offset images, staggered cards, or sidebar elements, reflecting the organic irregularity of natural terrain
- **Dark/light section alternation**: Pages alternate between light parchment sections and dark charcoal sections, creating the contrast rhythm of moving between forest shade and open meadow
- **Badge and label overlays**: Small tag-like elements (category labels, elevation markers, coordinates) overlay card corners or section edges, adding informational density
- **Mobile-first ruggedness**: On small screens, simplify to single-column stacked cards with maintained touch targets and high-contrast readability, as if optimized for gloved-hand trail use
- **Max content width of 1200px**: Body content is constrained to a comfortable reading width, with wider background textures and color sections extending to full viewport

---

## CSS / Design Techniques

### Topographic Background Texture

```css
/* SVG-based topographic contour line pattern */
.gorp-topo-bg {
  position: relative;
  background-color: var(--gorp-parchment);
}

.gorp-topo-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: var(--gorp-topo-opacity);
  background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 200 Q100 150 200 180 Q300 210 380 160' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 220 Q120 170 220 200 Q320 230 380 180' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 240 Q80 200 180 220 Q280 240 380 200' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 140 Q100 100 200 120 Q300 140 380 100' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 100 Q140 60 240 80 Q340 100 380 70' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 300 Q100 260 200 280 Q300 300 380 270' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3Cpath d='M20 340 Q120 300 220 320 Q320 340 380 310' fill='none' stroke='%234A4E54' stroke-width='0.8'/%3E%3C/svg%3E");
  background-size: 400px 400px;
  pointer-events: none;
}

/* Ripstop nylon grid texture */
.gorp-ripstop-bg {
  background-image:
    linear-gradient(
      0deg,
      rgba(74, 78, 84, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(74, 78, 84, 0.03) 1px,
      transparent 1px
    );
  background-size: var(--gorp-ripstop-size) var(--gorp-ripstop-size);
}
```

### Gorpcore Card Component

```css
.gorp-card {
  background: var(--gorp-trail-white);
  border: 1px solid var(--gorp-border);
  border-radius: 4px;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--gorp-shadow-sm);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

/* Top-edge accent stripe -- like a gear label */
.gorp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gorp-olive);
}

.gorp-card:hover {
  box-shadow: var(--gorp-shadow-md);
  transform: translateY(-2px);
}

/* Card with signal-orange accent */
.gorp-card--signal::before {
  background: var(--gorp-orange);
}

/* Card category badge */
.gorp-card__badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gorp-trail-white);
  background: var(--gorp-slate);
  padding: 0.2em 0.6em;
  border-radius: 2px;
}

/* Dark variant for dark sections */
.gorp-card--dark {
  background: var(--gorp-slate);
  border-color: rgba(255, 255, 255, 0.06);
  color: var(--gorp-trail-white);
}

.gorp-card--dark::before {
  background: var(--gorp-orange);
}

.gorp-card--dark h3 {
  color: var(--gorp-trail-white);
}
```

### Gorpcore Button Component

```css
/* Primary trail button */
.gorp-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.8rem;
  border-radius: 3px;
  border: none;
  background: var(--gorp-charcoal);
  color: var(--gorp-trail-white);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--gorp-shadow-sm);
  transition: all 0.2s ease;
}

.gorp-button:hover {
  background: var(--gorp-slate);
  box-shadow: var(--gorp-shadow-md);
  transform: translateY(-1px);
}

/* Signal accent button */
.gorp-button--signal {
  background: var(--gorp-orange);
  color: #ffffff;
}

.gorp-button--signal:hover {
  background: #d05a16;
  box-shadow: 0 4px 16px rgba(232, 101, 26, 0.25);
}

/* Outline / ghost variant */
.gorp-button--outline {
  background: transparent;
  border: 2px solid var(--gorp-charcoal);
  color: var(--gorp-charcoal);
  box-shadow: none;
}

.gorp-button--outline:hover {
  background: var(--gorp-charcoal);
  color: var(--gorp-trail-white);
}

/* Olive nature variant */
.gorp-button--olive {
  background: var(--gorp-olive);
  color: var(--gorp-trail-white);
}

.gorp-button--olive:hover {
  background: var(--gorp-forest);
}
```

### Navigation Bar

```css
.gorp-nav {
  background: var(--gorp-charcoal);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid var(--gorp-orange);
}

.gorp-nav__brand {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gorp-trail-white);
  text-decoration: none;
}

.gorp-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.gorp-nav__links a {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gorp-khaki);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.gorp-nav__links a:hover {
  color: var(--gorp-orange);
}

/* Active trail marker underline */
.gorp-nav__links a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gorp-orange);
}

/* Coordinate display in nav */
.gorp-nav__coord {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--gorp-granite);
}
```

### Hero Section

```css
.gorp-hero {
  position: relative;
  padding: 7rem 2rem 5rem;
  background: var(--gorp-charcoal);
  overflow: hidden;
  text-align: left;
}

/* Topo-line overlay */
.gorp-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 200 Q100 150 200 180 Q300 210 380 160' fill='none' stroke='%23F0EBE0' stroke-width='1'/%3E%3Cpath d='M20 240 Q80 200 180 220 Q280 240 380 200' fill='none' stroke='%23F0EBE0' stroke-width='1'/%3E%3Cpath d='M20 140 Q100 100 200 120 Q300 140 380 100' fill='none' stroke='%23F0EBE0' stroke-width='1'/%3E%3Cpath d='M20 300 Q100 260 200 280 Q300 300 380 270' fill='none' stroke='%23F0EBE0' stroke-width='1'/%3E%3Cpath d='M20 100 Q140 60 240 80 Q340 100 380 70' fill='none' stroke='%23F0EBE0' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 400px 400px;
  pointer-events: none;
}

/* Gradient fade for depth */
.gorp-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, var(--gorp-charcoal), transparent);
  pointer-events: none;
}

.gorp-hero__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.gorp-hero__tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gorp-orange);
  margin-bottom: 1rem;
  display: block;
}

.gorp-hero h1 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.0;
  color: var(--gorp-trail-white);
  margin-bottom: 1.5rem;
}

.gorp-hero p {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--gorp-khaki);
  max-width: 560px;
  margin-bottom: 2rem;
}
```

### Gear Spec Table

```css
/* Technical specification table -- like a gear data sheet */
.gorp-spec-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.9rem;
}

.gorp-spec-table thead {
  background: var(--gorp-charcoal);
  color: var(--gorp-trail-white);
}

.gorp-spec-table th {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: left;
  padding: 0.75rem 1rem;
}

.gorp-spec-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gorp-border);
  color: var(--gorp-text-primary);
}

.gorp-spec-table tbody tr:hover {
  background: rgba(92, 107, 71, 0.06);
}

/* Monospace data cells */
.gorp-spec-table td.data {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  color: var(--gorp-granite);
}
```

### Trail Divider

```css
/* Horizontal rule styled as trail blaze marker */
.gorp-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
}

.gorp-divider::before,
.gorp-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--gorp-border-strong);
}

/* Center diamond marker */
.gorp-divider__marker {
  width: 8px;
  height: 8px;
  background: var(--gorp-olive);
  transform: rotate(45deg);
  flex-shrink: 0;
}

/* Signal variant */
.gorp-divider--signal .gorp-divider__marker {
  background: var(--gorp-orange);
}

/* Elevation label variant */
.gorp-divider__label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gorp-granite);
  white-space: nowrap;
}
```

### Badge / Patch Component

```css
/* Woven-patch-style badge */
.gorp-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35em 0.75em;
  border: 1.5px solid var(--gorp-charcoal);
  border-radius: 2px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gorp-charcoal);
  background: var(--gorp-parchment);
}

/* Filled variants */
.gorp-badge--olive {
  background: var(--gorp-olive);
  border-color: var(--gorp-olive);
  color: var(--gorp-trail-white);
}

.gorp-badge--orange {
  background: var(--gorp-orange);
  border-color: var(--gorp-orange);
  color: #ffffff;
}

.gorp-badge--dark {
  background: var(--gorp-charcoal);
  border-color: var(--gorp-charcoal);
  color: var(--gorp-trail-white);
}

/* Dot indicator inside badge */
.gorp-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
```

---

## Design Do's and Don'ts

### Do

- Use earth-tone foundations (olive, sandstone, charcoal, slate) as your dominant palette, reserving bright signal colors for intentional accents only
- Apply subtle topographic or ripstop textures to backgrounds, adding tactile depth without overwhelming content
- Choose condensed, bold, uppercase sans-serif typefaces for headers that evoke trail signage and technical labeling
- Include functional micro-content like coordinates, elevation data, or weather icons as decorative detail that reinforces the outdoor theme
- Maintain high contrast and clear hierarchy for text, ensuring readability as if the interface were being used on a sun-washed trail
- Use card components with restrained elevation and top-edge accent stripes, referencing gear specification labels
- Embrace matte and semi-matte finishes over glossy surfaces, matching the tactile quality of technical outdoor fabrics
- Design navigation as a wayfinding system, with clear markers, active-state indicators, and utilitarian typography

### Don't

- Flood the palette with bright signal colors; the power of Gorpcore accents lies in their scarcity against muted backgrounds
- Use ornate, decorative, or script typefaces; typography should feel industrial, technical, and purpose-built
- Apply glossy, reflective, or metallic surfaces; the aesthetic is matte, tactile, and material-honest
- Create overly polished, luxury-fashion layouts; Gorpcore values rugged function over refined elegance
- Neglect texture entirely; flat, untextured backgrounds feel sterile and disconnect from the material-forward philosophy
- Over-animate interfaces with flashy transitions; movements should be subtle and functional, like a compass needle settling
- Mix in pastel, neon, or candy-colored palettes that contradict the natural earth-tone foundation
- Ignore mobile usability; Gorpcore design should be as functional on a rain-soaked trail phone as on a desktop monitor

---

## Related Aesthetics

| Aesthetic | Relationship to Gorpcore |
|-----------|--------------------------|
| **Techwear** | Close cousin; shares technical fabrics and functional design, but Techwear leans darker, more urban-cyberpunk, while Gorpcore stays rooted in nature and trail culture |
| **Normcore** | Both reject fashion excess for intentional simplicity; Normcore is more generic and unbranded, while Gorpcore specifically celebrates outdoor-gear branding and technical function |
| **Cottagecore** | Both romanticize nature, but Cottagecore idealizes pastoral, domestic rural life, while Gorpcore celebrates active outdoor adventure and technical preparedness |
| **Dark Academia** | Shares muted, earthy palettes; Dark Academia is literary and institutional, while Gorpcore is physical and trail-oriented |
| **Brutalism (Web)** | Both embrace raw, functional design and reject unnecessary decoration; Brutalism is intentionally jarring, while Gorpcore channels function into warm, natural approachability |
| **Militarycore** | Shares utility-first design, cargo pockets, and olive-drab palettes; Militarycore draws from combat/tactical gear, while Gorpcore draws from civilian outdoor recreation |
| **Scandinavian Minimalism** | Both value clean functionality and natural materials; Scandinavian design is lighter, more refined, while Gorpcore is earthier and more rugged |
| **Solarpunk** | Both carry environmental consciousness; Solarpunk imagines a green future, while Gorpcore equips you for the present-day trail |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gorpcore</title>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&family=Source+Sans+3:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --gorp-charcoal: #2c2c2c;
      --gorp-slate: #4a4e54;
      --gorp-granite: #6b7280;
      --gorp-sandstone: #c2a878;
      --gorp-khaki: #bfb49a;
      --gorp-clay: #8b6f4e;
      --gorp-truffle: #5c4a3a;
      --gorp-parchment: #f0ebe0;
      --gorp-trail-white: #f7f5f0;
      --gorp-olive: #5c6b47;
      --gorp-forest: #3d4f2f;
      --gorp-orange: #e8651a;
      --gorp-red: #c43e2b;
      --gorp-yellow: #e3b830;
      --gorp-sky: #5b8ba0;
      --gorp-shadow-sm: 0 1px 3px rgba(44,44,44,0.08);
      --gorp-shadow-md: 0 4px 12px rgba(44,44,44,0.10);
      --gorp-shadow-lg: 0 8px 24px rgba(44,44,44,0.14);
      --gorp-border: rgba(107,114,128,0.2);
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--gorp-parchment);
      color: var(--gorp-charcoal);
      font-family: 'Source Sans 3', 'Barlow', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7;
      letter-spacing: 0.01em;
      min-height: 100vh;
      overflow-x: hidden;
    }

    h1, h2, h3 {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--gorp-charcoal);
    }

    /* ========================================
       NAVIGATION
       ======================================== */
    nav {
      background: var(--gorp-charcoal);
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 3px solid var(--gorp-orange);
    }

    .nav-brand {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gorp-trail-white);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gorp-khaki);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--gorp-orange);
    }

    .nav-coord {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      color: var(--gorp-granite);
      letter-spacing: 0.05em;
    }

    /* ========================================
       HERO SECTION
       ======================================== */
    .hero {
      position: relative;
      padding: 7rem 2rem 5rem;
      background: var(--gorp-charcoal);
      overflow: hidden;
      text-align: left;
    }

    /* Topo line overlay */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.05;
      background-image:
        url("data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80 Q80 40 160 70 Q240 100 320 60 Q400 20 500 50' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3Cpath d='M0 120 Q100 80 200 110 Q300 140 400 100 Q450 80 500 90' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3Cpath d='M0 180 Q60 150 140 170 Q220 190 300 160 Q380 130 500 155' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3Cpath d='M0 230 Q100 200 200 220 Q300 240 400 210 Q460 195 500 200' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3Cpath d='M0 290 Q80 260 160 275 Q240 290 320 265 Q400 240 500 260' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3Cpath d='M0 340 Q120 310 240 330 Q360 350 500 320' fill='none' stroke='%23F0EBE0' stroke-width='0.8'/%3E%3C/svg%3E");
      background-size: 500px 400px;
      pointer-events: none;
    }

    /* Bottom gradient fade */
    .hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 35%;
      background: linear-gradient(to top, var(--gorp-charcoal), transparent);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gorp-orange);
      margin-bottom: 1rem;
      display: block;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 7vw, 5rem);
      font-weight: 800;
      line-height: 1.0;
      color: var(--gorp-trail-white);
      margin-bottom: 1.5rem;
    }

    .hero p {
      font-size: 1.1rem;
      color: var(--gorp-khaki);
      max-width: 540px;
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }

    /* ========================================
       BUTTONS
       ======================================== */
    .button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.8rem;
      border-radius: 3px;
      border: none;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .button--primary {
      background: var(--gorp-orange);
      color: #ffffff;
      box-shadow: var(--gorp-shadow-sm);
    }

    .button--primary:hover {
      background: #d05a16;
      box-shadow: 0 4px 16px rgba(232,101,26,0.25);
      transform: translateY(-1px);
    }

    .button--outline {
      background: transparent;
      border: 2px solid var(--gorp-trail-white);
      color: var(--gorp-trail-white);
    }

    .button--outline:hover {
      background: var(--gorp-trail-white);
      color: var(--gorp-charcoal);
    }

    .button--dark {
      background: var(--gorp-charcoal);
      color: var(--gorp-trail-white);
      box-shadow: var(--gorp-shadow-sm);
    }

    .button--dark:hover {
      background: var(--gorp-slate);
      transform: translateY(-1px);
    }

    .button--olive {
      background: var(--gorp-olive);
      color: var(--gorp-trail-white);
      box-shadow: var(--gorp-shadow-sm);
    }

    .button--olive:hover {
      background: var(--gorp-forest);
    }

    /* ========================================
       TRAIL DIVIDER
       ======================================== */
    .divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 3rem auto;
      max-width: 1100px;
      padding: 0 2rem;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(44,44,44,0.12);
    }

    .divider-marker {
      width: 8px;
      height: 8px;
      background: var(--gorp-olive);
      transform: rotate(45deg);
      flex-shrink: 0;
    }

    .divider-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gorp-granite);
      white-space: nowrap;
    }

    /* ========================================
       CONTENT SECTIONS
       ======================================== */
    .section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    .section-header {
      margin-bottom: 2.5rem;
    }

    .section-header h2 {
      font-size: clamp(1.4rem, 3vw, 2rem);
      margin-bottom: 0.5rem;
    }

    .section-header p {
      color: var(--gorp-granite);
      font-size: 0.95rem;
      max-width: 600px;
    }

    /* ========================================
       CARD GRID
       ======================================== */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--gorp-trail-white);
      border: 1px solid var(--gorp-border);
      border-radius: 4px;
      padding: 1.75rem;
      position: relative;
      overflow: hidden;
      box-shadow: var(--gorp-shadow-sm);
      transition: box-shadow 0.25s ease, transform 0.25s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gorp-olive);
    }

    .card:hover {
      box-shadow: var(--gorp-shadow-md);
      transform: translateY(-2px);
    }

    .card.signal::before {
      background: var(--gorp-orange);
    }

    .card h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      margin-top: 0.5rem;
    }

    .card p {
      font-size: 0.92rem;
      color: var(--gorp-granite);
      line-height: 1.65;
    }

    .card-badge {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gorp-trail-white);
      background: var(--gorp-slate);
      padding: 0.2em 0.6em;
      border-radius: 2px;
    }

    .card-badge.olive {
      background: var(--gorp-olive);
    }

    .card-badge.orange {
      background: var(--gorp-orange);
    }

    /* ========================================
       DARK SECTION
       ======================================== */
    .section--dark {
      background: var(--gorp-charcoal);
      max-width: 100%;
      padding: 4rem 0;
    }

    .section--dark .section-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section--dark h2 {
      color: var(--gorp-trail-white);
    }

    .section--dark p {
      color: var(--gorp-khaki);
    }

    .section--dark .card {
      background: var(--gorp-slate);
      border-color: rgba(255,255,255,0.06);
    }

    .section--dark .card h3 {
      color: var(--gorp-trail-white);
    }

    .section--dark .card p {
      color: var(--gorp-khaki);
    }

    .section--dark .card::before {
      background: var(--gorp-orange);
    }

    /* ========================================
       SPEC TABLE
       ======================================== */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1.5rem;
    }

    .spec-table thead {
      background: var(--gorp-charcoal);
    }

    .spec-table th {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: left;
      padding: 0.7rem 1rem;
      color: var(--gorp-trail-white);
    }

    .spec-table td {
      padding: 0.7rem 1rem;
      font-size: 0.9rem;
      border-bottom: 1px solid var(--gorp-border);
    }

    .spec-table tbody tr:hover {
      background: rgba(92,107,71,0.06);
    }

    .spec-table .data {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.78rem;
      color: var(--gorp-granite);
    }

    /* ========================================
       BADGE
       ======================================== */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.3em 0.7em;
      border: 1.5px solid var(--gorp-charcoal);
      border-radius: 2px;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .badge--olive {
      background: var(--gorp-olive);
      border-color: var(--gorp-olive);
      color: var(--gorp-trail-white);
    }

    .badge--orange {
      background: var(--gorp-orange);
      border-color: var(--gorp-orange);
      color: #ffffff;
    }

    .badge-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: currentColor;
    }

    /* ========================================
       RIPSTOP TEXTURE SECTION
       ======================================== */
    .section--textured {
      background-image:
        linear-gradient(0deg, rgba(74,78,84,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(74,78,84,0.03) 1px, transparent 1px);
      background-size: 8px 8px;
      background-color: var(--gorp-trail-white);
    }

    /* ========================================
       FOOTER
       ======================================== */
    footer {
      background: var(--gorp-charcoal);
      text-align: center;
      padding: 2rem;
      border-top: 3px solid var(--gorp-olive);
    }

    footer p {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gorp-granite);
    }

    footer span {
      color: var(--gorp-orange);
    }

    /* ========================================
       RESPONSIVE
       ======================================== */
    @media (max-width: 768px) {
      nav {
        padding: 0 1rem;
      }

      .nav-links {
        gap: 1.2rem;
      }

      .nav-coord {
        display: none;
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

      .button-group {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  </style>
</head>
<body>

  <!-- ======== NAVIGATION ======== -->
  <nav>
    <a href="#" class="nav-brand">Gorpcore</a>
    <ul class="nav-links">
      <li><a href="#">Trails</a></li>
      <li><a href="#">Gear</a></li>
      <li><a href="#">Specs</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <span class="nav-coord">47.6062N 122.3321W</span>
  </nav>

  <!-- ======== HERO ======== -->
  <header class="hero">
    <div class="hero-content">
      <span class="hero-tag">// Trail-Tested Design</span>
      <h1>Built for<br>the Trail</h1>
      <p>Technical fabrics, functional layouts, and earth-tone
         palettes forged from the intersection of outdoor utility
         and urban confidence.</p>
      <div class="button-group" style="display:flex;gap:1rem;flex-wrap:wrap;">
        <a href="#" class="button button--primary">Explore Gear</a>
        <a href="#" class="button button--outline">View Specs</a>
      </div>
    </div>
  </header>

  <!-- ======== DIVIDER ======== -->
  <div class="divider">
    <span class="divider-label">Elev. 4,392 ft</span>
  </div>

  <!-- ======== FEATURES SECTION ======== -->
  <section class="section">
    <div class="section-header">
      <h2>Core Design Features</h2>
      <p>Every element engineered for purpose. Every detail earned
         on the trail.</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <span class="card-badge olive">Layer 01</span>
        <h3>Earth-Tone Foundation</h3>
        <p>Olive, sandstone, charcoal, and slate form the muted
           base palette, drawn directly from forest floors and
           mountain rock faces.</p>
      </div>
      <div class="card signal">
        <span class="card-badge orange">Signal</span>
        <h3>High-Vis Accents</h3>
        <p>Blaze orange and safety yellow punctuate the neutral
           foundation, borrowed from trail markers and summit
           gear for functional emphasis.</p>
      </div>
      <div class="card">
        <span class="card-badge">Technical</span>
        <h3>Utility Typography</h3>
        <p>Bold condensed sans-serifs and monospace data labels
           reference trail signage, topographic maps, and
           gear specification sheets.</p>
      </div>
    </div>
  </section>

  <!-- ======== DARK SECTION ======== -->
  <div class="section--dark">
    <div class="section-inner">
      <div class="section-header">
        <h2>Technical Specifications</h2>
        <p>Material data and performance metrics for the
           trail-ready design system.</p>
      </div>
      <table class="spec-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary Background</td>
            <td class="data">#F0EBE0</td>
            <td class="data">Parchment</td>
          </tr>
          <tr>
            <td>Signal Accent</td>
            <td class="data">#E8651A</td>
            <td class="data">Blaze Orange</td>
          </tr>
          <tr>
            <td>Display Typeface</td>
            <td class="data">Barlow Condensed</td>
            <td class="data">700-800</td>
          </tr>
          <tr>
            <td>Body Typeface</td>
            <td class="data">Source Sans 3</td>
            <td class="data">400</td>
          </tr>
          <tr>
            <td>Border Radius</td>
            <td class="data">3-4px</td>
            <td class="data">Minimal</td>
          </tr>
          <tr>
            <td>Grid System</td>
            <td class="data">12-col / auto-fit</td>
            <td class="data">1100px max</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ======== DIVIDER ======== -->
  <div class="divider" style="background:var(--gorp-trail-white);">
    <span class="divider-marker"></span>
  </div>

  <!-- ======== TEXTURED SECTION WITH BADGES ======== -->
  <section class="section section--textured">
    <div class="section-header">
      <h2>Trail Categories</h2>
      <p>Organized by terrain type and difficulty rating.</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <h3>Alpine Ridge</h3>
        <p>Above the treeline. Exposed terrain, technical
           scrambles, and panoramic summit views reward
           those who push higher.</p>
        <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
          <span class="badge badge--olive"><span class="badge-dot"></span> Alpine</span>
          <span class="badge badge--orange"><span class="badge-dot"></span> Advanced</span>
        </div>
      </div>
      <div class="card">
        <h3>Forest Trail</h3>
        <p>Dense canopy cover, root-laced paths, and filtered
           light. The bread and butter of Pacific Northwest
           trail running.</p>
        <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
          <span class="badge badge--olive"><span class="badge-dot"></span> Forest</span>
          <span class="badge"><span class="badge-dot"></span> Moderate</span>
        </div>
      </div>
      <div class="card">
        <h3>River Valley</h3>
        <p>Waterside trails with creek crossings, gravel bars,
           and riparian vegetation. Waterproof footwear
           strongly recommended.</p>
        <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
          <span class="badge badge--olive"><span class="badge-dot"></span> Riparian</span>
          <span class="badge"><span class="badge-dot"></span> Easy</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ======== CTA SECTION ======== -->
  <div class="section" style="text-align:center;">
    <h2 style="margin-bottom:1rem;">Ready for the Trail?</h2>
    <p style="color:var(--gorp-granite);max-width:480px;margin:0 auto 2rem;">
      Gear up with a design system built for function, durability,
      and the confidence of the outdoors.
    </p>
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
      <a href="#" class="button button--primary">Start Building</a>
      <a href="#" class="button button--dark">View Components</a>
      <a href="#" class="button button--olive">Trail Map</a>
    </div>
  </div>

  <!-- ======== FOOTER ======== -->
  <footer>
    <p>Designed for the <span>trail</span> -- built for the city</p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the earth-tone base**: Set your background to Parchment (`#F0EBE0`) or Trail White (`#F7F5F0`) and text to Charcoal (`#2C2C2C`) before adding any accent colors; the muted foundation is the most critical part of the Gorpcore look
- **Limit signal colors to a 10:90 ratio**: For every ten parts of muted earth tones, allow only one part of blaze orange, safety yellow, or alpine red; overuse of accents destroys the utilitarian restraint that defines the aesthetic
- **Add topographic texture as a final layer**: Apply contour-line SVG patterns or ripstop grid backgrounds at very low opacity (3-6%) to create tactile depth without distracting from content
- **Use monospace sparingly for technical flair**: Reserve `IBM Plex Mono` or similar monospace fonts for coordinates, data labels, elevation markers, and spec values; overuse makes the entire page feel like a terminal rather than a trail guide
- **Test on dark and light sections**: Gorpcore designs benefit from alternating dark charcoal and light parchment sections; ensure all text, buttons, and badges maintain WCAG AA contrast in both contexts
- **Keep border radii minimal**: Use 2-4px border radius consistently; the aesthetic demands sharp, functional edges rather than soft, rounded, friendly shapes
- **Reference real outdoor brands for inspiration**: Study the web presence of Arc'teryx, Salomon, Patagonia, and The North Face for how technical outdoor brands balance clean minimalism with functional information density
- **Embrace the matte finish**: Avoid glossy gradients, metallic effects, and reflective surfaces; every element should feel like it has the tactile quality of waxed canvas, treated nylon, or brushed aluminum
