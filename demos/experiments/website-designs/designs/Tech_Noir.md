# Tech Noir Design Reference

Tech Noir is a hybrid visual aesthetic born from the collision of 1940s-50s film noir and near-future cyberpunk science fiction. The term itself -- a portmanteau of "technology" and "noir" -- was coined as the name of a nightclub in James Cameron's _The Terminator_ (1984), and quickly became shorthand for a genre where shadowy crime narratives unfold against backdrops of advanced, often oppressive technology. Where pure cyberpunk revels in maximalist neon overload and terminal interfaces, Tech Noir pulls back into the chiaroscuro of classic detective cinema: deep pools of shadow, shafts of light slicing through venetian blinds, rain-slicked streets reflecting a single neon sign. The technology is present but lurking -- surveillance cameras in dark alleys, holographic displays in smoky back rooms, augmented reality overlays glimpsed through cracked monocles.

The visual language draws equally from Ridley Scott's _Blade Runner_ (1982), the rotoscoped shadows of classic noir posters, and the rain-soaked nocturnal cityscapes of 1940s Los Angeles reimagined with 2040s infrastructure. In web and UI design, Tech Noir translates to interfaces that feel like stepping into a dimly lit private investigator's office rebuilt inside a server room -- dark backgrounds punctuated not by broad neon washes but by singular, carefully placed light sources: an amber desk lamp, a cold blue terminal glow, a red neon bar sign bleeding through rain-streaked glass. Typography borrows from both worlds: Art Deco-influenced display faces with hairline strokes and geometric elegance share space with monospaced terminal readouts. The result is an aesthetic that feels simultaneously retro and futuristic, elegant and gritty, sophisticated and dangerous. Every design choice should serve the central tension: high technology wrapped in low-light atmosphere, where the future is not bright and clean but smoky, rain-soaked, and morally ambiguous.

---

## Visual Characteristics

### Core Design Traits

- **Deep shadow dominance** -- the majority of each composition lives in darkness; light is rare, directional, and narratively motivated
- **Single-source lighting** -- instead of broad neon washes, light comes from specific sources: a desk lamp, a neon sign, a terminal screen, headlights through rain
- **Rain and wet reflections** -- surfaces glisten with moisture, stretching and distorting neon reflections across asphalt, glass, and metal
- **Chiaroscuro contrast** -- extreme light-dark contrast borrowed directly from film noir cinematography and German Expressionist influence
- **Venetian blind shadow patterns** -- horizontal light-stripe motifs cut across surfaces, a quintessential noir visual signature adapted to digital interfaces
- **Monochromatic base with selective color** -- compositions are near-grayscale with one or two carefully chosen accent colors (typically cold blue, warm amber, or blood red)
- **Smoke, fog, and atmospheric haze** -- volumetric atmosphere softens harsh edges and creates depth between foreground and background planes
- **Art Deco typographic ornamentation** -- geometric borders, thin-rule frames, and elegant type treatments that reference 1930s-40s poster design
- **Industrial materiality** -- corrugated metal, brushed steel, concrete, diamond plate, and wire mesh textures ground the futuristic elements in physical grit
- **Analog-digital hybrid elements** -- CRT scan lines layered over Art Deco frames, holographic overlays behind frosted glass panels, neon tubes rendered with pixel artifacts
- **Silhouette and negative space** -- figures and objects defined by their outlines against illuminated backgrounds, creating mystery and dramatic tension
- **Surveillance and lens artifacts** -- subtle vignetting, lens flare from point light sources, and security-camera framing reinforce the voyeuristic atmosphere

### Design Principles

- Light is a narrative device, not decoration -- every illuminated element should feel like it has a source and a reason
- Darkness is not empty; it is full of implication -- use shadow to suggest depth, danger, and hidden information
- Color is scarce and therefore powerful -- restrict accent colors to one or two per composition for maximum emotional impact
- Balance the elegance of noir with the grit of cyberpunk -- neither too polished nor too chaotic
- Typography must serve dual heritage -- Art Deco refinement for display, utilitarian monospace for data and body text
- Atmosphere trumps clarity in decorative elements, but never in content -- readability of actual text is non-negotiable
- Every surface tells a story -- weathering, reflections, and material texture communicate the world's history
- Restraint is strength -- Tech Noir is cyberpunk with discipline, noir with circuitry

---

## Color Palette

### Rain-Slicked Neon Palette

The Tech Noir palette is built on a foundation of near-blacks and deep cool grays, punctuated by carefully rationed accent colors. Unlike full cyberpunk which uses multiple vivid neons simultaneously, Tech Noir typically restricts itself to one primary accent (cold neon blue or warm amber) with a secondary accent (blood red or muted violet) used sparingly. The effect should feel like a single neon sign reflected in a rain puddle on an otherwise dark street.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#08080D](https://via.placeholder.com/16/08080D/08080D.png) | `#08080D` | Deepest black -- page background, void areas |
| ![#0E0E14](https://via.placeholder.com/16/0E0E14/0E0E14.png) | `#0E0E14` | Primary surface -- card backgrounds, panels |
| ![#161621](https://via.placeholder.com/16/161621/161621.png) | `#161621` | Elevated surface -- modal backgrounds, nav |
| ![#1E1E2C](https://via.placeholder.com/16/1E1E2C/1E1E2C.png) | `#1E1E2C` | Tertiary surface -- hover states, active panels |
| ![#2A2A3A](https://via.placeholder.com/16/2A2A3A/2A2A3A.png) | `#2A2A3A` | Border gray -- dividers, subtle outlines |
| ![#4A4A5E](https://via.placeholder.com/16/4A4A5E/4A4A5E.png) | `#4A4A5E` | Muted steel -- disabled text, secondary borders |
| ![#8888A0](https://via.placeholder.com/16/8888A0/8888A0.png) | `#8888A0` | Secondary text -- captions, timestamps, metadata |
| ![#C8C8D8](https://via.placeholder.com/16/C8C8D8/C8C8D8.png) | `#C8C8D8` | Primary text -- body copy, reading content |
| ![#3DA8D5](https://via.placeholder.com/16/3DA8D5/3DA8D5.png) | `#3DA8D5` | Cold neon blue -- primary accent, links, active states |
| ![#D4A843](https://via.placeholder.com/16/D4A843/D4A843.png) | `#D4A843` | Amber lamplight -- secondary accent, warm highlights |
| ![#C23B3B](https://via.placeholder.com/16/C23B3B/C23B3B.png) | `#C23B3B` | Blood red neon -- danger, alerts, dramatic emphasis |
| ![#7B5EA7](https://via.placeholder.com/16/7B5EA7/7B5EA7.png) | `#7B5EA7` | Muted violet -- tertiary accent, tags, decorative |
| ![#2E8B7A](https://via.placeholder.com/16/2E8B7A/2E8B7A.png) | `#2E8B7A` | Terminal green -- success states, data readouts |
| ![#1A3A4A](https://via.placeholder.com/16/1A3A4A/1A3A4A.png) | `#1A3A4A` | Deep teal -- tinted panels, atmospheric overlays |
| ![#E8E0D0](https://via.placeholder.com/16/E8E0D0/E8E0D0.png) | `#E8E0D0` | Warm white -- headlines, high-emphasis text (never pure white) |

### CSS Custom Properties

```css
:root {
  /* Backgrounds -- deep noir foundations */
  --noir-bg-void: #08080d;
  --noir-bg-surface: #0e0e14;
  --noir-bg-elevated: #161621;
  --noir-bg-active: #1e1e2c;

  /* Borders and structure */
  --noir-border: #2a2a3a;
  --noir-border-muted: #4a4a5e;

  /* Text hierarchy */
  --noir-text-headline: #e8e0d0;
  --noir-text-primary: #c8c8d8;
  --noir-text-secondary: #8888a0;
  --noir-text-muted: #4a4a5e;

  /* Accent colors -- used sparingly */
  --noir-blue: #3da8d5;
  --noir-amber: #d4a843;
  --noir-red: #c23b3b;
  --noir-violet: #7b5ea7;
  --noir-green: #2e8b7a;
  --noir-teal: #1a3a4a;

  /* Glow effects -- simulating neon light bleed */
  --noir-glow-blue: 0 0 8px rgba(61, 168, 213, 0.35), 0 0 30px rgba(61, 168, 213, 0.10);
  --noir-glow-amber: 0 0 8px rgba(212, 168, 67, 0.35), 0 0 30px rgba(212, 168, 67, 0.10);
  --noir-glow-red: 0 0 8px rgba(194, 59, 59, 0.40), 0 0 30px rgba(194, 59, 59, 0.12);

  /* Atmospheric overlays */
  --noir-fog: rgba(22, 22, 33, 0.6);
  --noir-rain-streak: rgba(61, 168, 213, 0.08);
  --noir-shadow-deep: rgba(0, 0, 0, 0.7);
}
```

---

## Typography

### Typeface Characteristics

Tech Noir typography lives at the intersection of two distinct eras. Display and heading type draws from Art Deco and 1940s film poster design -- geometric letterforms with elegant thin strokes, wide tracking, and condensed proportions that evoke sophistication and danger. Body and data text, by contrast, uses utilitarian monospaced or semi-monospaced faces that suggest terminal readouts, dossier files, and surveillance logs. The key is that neither family dominates entirely: the Art Deco display text grounds the aesthetic in noir tradition, while the monospace body text quietly insists that this is a world of machines and data.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Cinzel** | Elegant serif, Roman inscriptions | Display headlines, dramatic titles |
| **Poiret One** | Art Deco, thin geometric | Subheadings, elegant labels, decorative text |
| **Josefin Sans** | Geometric, Art Deco influenced | Headlines, navigation, UI labels |
| **Cormorant Garamond** | Classic serif, high contrast | Pull quotes, editorial body text |
| **Special Elite** | Typewriter, worn | Dossier text, case-file entries, flavor text |
| **Share Tech Mono** | Monospaced, technical | Data readouts, terminal text, code blocks |
| **IBM Plex Mono** | Clean monospace | Body text, readable technical content |
| **Bebas Neue** | Condensed sans, bold | Impactful headlines, poster-style display |
| **Rajdhani** | Condensed, semi-rounded tech | Navigation, labels, secondary headings |
| **Source Code Pro** | Monospace, neutral | Metadata, timestamps, secondary data |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Cinzel** (700) | **IBM Plex Mono** (400) | Classic noir elegance meets cold data -- the detective's desk |
| **Bebas Neue** (400) | **Share Tech Mono** (400) | Bold poster drama meets terminal readout -- rain-slicked billboard |
| **Josefin Sans** (600) | **Source Code Pro** (400) | Art Deco geometry meets clean monospace -- refined surveillance |
| **Poiret One** (400) | **Cormorant Garamond** (400) | Thin Deco elegance meets literary serif -- upscale noir lounge |
| **Rajdhani** (600) | **IBM Plex Mono** (400) | Condensed tech meets readable mono -- dashboard noir |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=IBM+Plex+Mono:wght@300;400;500&family=Poiret+One&display=swap');

/* Headings -- Art Deco noir influence */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cinzel', 'Josefin Sans', serif;
  font-weight: 700;
  color: var(--noir-text-headline);
  letter-spacing: 0.06em;
  line-height: 1.15;
}

/* Display / Hero text with subtle neon glow */
.noir-display {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--noir-blue);
  text-shadow: 0 0 10px rgba(61, 168, 213, 0.4), 0 0 40px rgba(61, 168, 213, 0.12);
}

/* Body / terminal text */
body {
  font-family: 'IBM Plex Mono', 'Source Code Pro', monospace;
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--noir-text-primary);
  font-weight: 300;
}

/* Elegant labels -- Deco influence */
.noir-label {
  font-family: 'Poiret One', 'Josefin Sans', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--noir-text-secondary);
}

/* Data readout */
.noir-data {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.82rem;
  color: var(--noir-green);
  line-height: 1.5;
}

/* Dossier / case-file style */
.noir-dossier {
  font-family: 'Special Elite', 'Courier New', monospace;
  font-size: 0.9rem;
  color: var(--noir-text-secondary);
  line-height: 1.8;
  letter-spacing: 0.02em;
}
```

---

## Layout Principles

- **Asymmetric composition** -- avoid perfectly centered, symmetrical layouts; offset content like a canted camera angle or a photo pinned crookedly to a corkboard
- **Generous negative space as darkness** -- unlike minimalism's white space, Tech Noir uses black space; empty areas are not empty but filled with shadow and implication
- **Cinematic aspect ratios** -- hero sections and key imagery benefit from wide, letterboxed proportions (21:9 or 2.35:1) that reference widescreen film noir
- **Layered depth through translucency and fog** -- overlapping panels with varying opacity create a sense of physical depth, like looking through rain-streaked glass
- **Single-column narrative flow** -- primary content follows a vertical scroll like reading a case file or watching a film unfold scene by scene
- **Sidebar dossier panels** -- secondary information (metadata, data readouts, timestamps) lives in narrow side panels styled as dossier margins or terminal windows
- **Thin-rule borders and frames** -- elegant single-pixel lines or thin Art Deco borders delineate sections, replacing heavy card shadows
- **Venetian blind light motifs** -- horizontal striped overlays on hero images or section backgrounds reference the iconic shadow pattern of noir cinematography
- **Directional lighting in layout** -- visually suggest that light is coming from one side; gradient overlays darker on one edge, lighter on the other
- **Content emerges from darkness** -- elements should feel like they are revealed by light rather than placed on a background; use opacity and blur to create entrance depth
- **Grid as infrastructure** -- when grids are visible, they should suggest surveillance monitors, evidence boards, or city block maps rather than clean design frameworks

---

## CSS / Design Techniques

### Tech Noir Card Component

```css
.noir-card {
  background: var(--noir-bg-surface);
  border: 1px solid var(--noir-border);
  padding: 32px;
  position: relative;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;
}

/* Subtle top-edge light -- like lamplight hitting a document */
.noir-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(61, 168, 213, 0.3),
    transparent
  );
  transition: opacity 0.4s ease;
}

.noir-card:hover {
  border-color: rgba(61, 168, 213, 0.25);
  box-shadow: var(--noir-glow-blue);
}

.noir-card:hover::before {
  opacity: 0;
}

/* Art Deco corner accents */
.noir-card::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border: 1px solid rgba(61, 168, 213, 0.06);
  pointer-events: none;
  transition: border-color 0.4s ease;
}

.noir-card:hover::after {
  border-color: rgba(61, 168, 213, 0.12);
}

/* Card grid */
.noir-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
```

### Tech Noir Button

```css
.noir-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--noir-blue);
  border: 1px solid var(--noir-blue);
  padding: 14px 36px;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.35s ease;
}

/* Subtle inner glow on hover */
.noir-button:hover {
  background: rgba(61, 168, 213, 0.08);
  box-shadow: var(--noir-glow-blue);
  color: var(--noir-text-headline);
  border-color: rgba(61, 168, 213, 0.6);
}

/* Thin decorative lines extending from button edges */
.noir-button::before,
.noir-button::after {
  content: '';
  position: absolute;
  background: var(--noir-blue);
  transition: width 0.35s ease;
}

.noir-button::before {
  top: -1px;
  left: 20%;
  width: 0;
  height: 1px;
}

.noir-button::after {
  bottom: -1px;
  right: 20%;
  width: 0;
  height: 1px;
}

.noir-button:hover::before {
  width: 60%;
}

.noir-button:hover::after {
  width: 60%;
}

/* Amber / warm variant */
.noir-button--amber {
  color: var(--noir-amber);
  border-color: var(--noir-amber);
}

.noir-button--amber:hover {
  background: rgba(212, 168, 67, 0.08);
  box-shadow: var(--noir-glow-amber);
  color: var(--noir-text-headline);
  border-color: rgba(212, 168, 67, 0.6);
}

.noir-button--amber::before,
.noir-button--amber::after {
  background: var(--noir-amber);
}

/* Red / danger variant */
.noir-button--red {
  color: var(--noir-red);
  border-color: var(--noir-red);
}

.noir-button--red:hover {
  background: rgba(194, 59, 59, 0.08);
  box-shadow: var(--noir-glow-red);
  color: var(--noir-text-headline);
  border-color: rgba(194, 59, 59, 0.6);
}

.noir-button--red::before,
.noir-button--red::after {
  background: var(--noir-red);
}
```

### Navigation Bar

```css
.noir-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 48px;
  background: rgba(8, 8, 13, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(61, 168, 213, 0.08);
  position: relative;
}

/* Thin decorative line below nav */
.noir-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 168, 67, 0.15),
    transparent
  );
}

.noir-nav__logo {
  font-family: 'Cinzel', serif;
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--noir-text-headline);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.noir-nav__logo span {
  color: var(--noir-blue);
  text-shadow: 0 0 6px rgba(61, 168, 213, 0.3);
}

.noir-nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.noir-nav__links a {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--noir-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  position: relative;
}

.noir-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--noir-blue);
  transition: width 0.3s ease;
}

.noir-nav__links a:hover,
.noir-nav__links a.active {
  color: var(--noir-blue);
  text-shadow: 0 0 6px rgba(61, 168, 213, 0.25);
}

.noir-nav__links a:hover::after,
.noir-nav__links a.active::after {
  width: 100%;
}
```

### Hero Section

```css
.noir-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 48px;
  background: var(--noir-bg-void);
  overflow: hidden;
}

/* Rain streaks overlay */
.noir-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      var(--noir-rain-streak) 3px,
      var(--noir-rain-streak) 4px
    );
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
  animation: rain-drift 8s linear infinite;
}

@keyframes rain-drift {
  0% { transform: translateY(-100%) skewY(-5deg); }
  100% { transform: translateY(100%) skewY(-5deg); }
}

/* Venetian blind shadow overlay */
.noir-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 18px,
    rgba(0, 0, 0, 0.25) 18px,
    rgba(0, 0, 0, 0.25) 22px
  );
  pointer-events: none;
  z-index: 2;
  opacity: 0.3;
}

/* Directional light -- light source from upper left */
.noir-hero .noir-hero__light {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 20% 20%,
    rgba(61, 168, 213, 0.06) 0%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 1;
}

.noir-hero__content {
  position: relative;
  z-index: 3;
  max-width: 750px;
}

.noir-hero__content h1 {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--noir-text-headline);
  text-shadow: 0 0 30px rgba(61, 168, 213, 0.2);
  margin-bottom: 1.5rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.noir-hero__content h1 em {
  font-style: normal;
  color: var(--noir-blue);
  text-shadow: 0 0 12px rgba(61, 168, 213, 0.4), 0 0 40px rgba(61, 168, 213, 0.12);
}

.noir-hero__content p {
  font-size: 1rem;
  color: var(--noir-text-secondary);
  max-width: 580px;
  margin: 0 auto 2.5rem;
  line-height: 1.9;
}

@media (max-width: 768px) {
  .noir-hero {
    min-height: auto;
    padding: 60px 24px;
  }
}
```

### Venetian Blind Overlay

```css
.noir-blinds {
  position: relative;
  overflow: hidden;
}

.noir-blinds::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 14px,
    rgba(0, 0, 0, 0.3) 14px,
    rgba(0, 0, 0, 0.3) 18px
  );
  pointer-events: none;
  transform: rotate(-2deg) scale(1.1);
  opacity: 0.5;
}
```

### Fog / Atmospheric Depth

```css
.noir-fog {
  position: relative;
}

.noir-fog::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 30% 80%,
      rgba(22, 22, 33, 0.8) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 70% 20%,
      rgba(22, 22, 33, 0.6) 0%,
      transparent 40%
    );
  pointer-events: none;
  z-index: 1;
}
```

### Neon Sign Text Effect

```css
.noir-neon {
  font-family: 'Poiret One', 'Josefin Sans', sans-serif;
  color: var(--noir-blue);
  text-shadow:
    0 0 5px rgba(61, 168, 213, 0.6),
    0 0 15px rgba(61, 168, 213, 0.3),
    0 0 40px rgba(61, 168, 213, 0.1),
    0 0 80px rgba(61, 168, 213, 0.05);
  animation: neon-flicker 4s ease-in-out infinite;
}

@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.7; }
  94% { opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 1; }
}

/* Amber neon variant */
.noir-neon--amber {
  color: var(--noir-amber);
  text-shadow:
    0 0 5px rgba(212, 168, 67, 0.6),
    0 0 15px rgba(212, 168, 67, 0.3),
    0 0 40px rgba(212, 168, 67, 0.1),
    0 0 80px rgba(212, 168, 67, 0.05);
}

/* Red neon variant */
.noir-neon--red {
  color: var(--noir-red);
  text-shadow:
    0 0 5px rgba(194, 59, 59, 0.6),
    0 0 15px rgba(194, 59, 59, 0.3),
    0 0 40px rgba(194, 59, 59, 0.1),
    0 0 80px rgba(194, 59, 59, 0.05);
}
```

### Dossier / Case-File Panel

```css
.noir-dossier-panel {
  background: var(--noir-bg-surface);
  border: 1px solid var(--noir-border);
  padding: 32px;
  position: relative;
  font-family: 'IBM Plex Mono', monospace;
}

/* Stamped classification header */
.noir-dossier-panel__header {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--noir-red);
  border: 1px solid var(--noir-red);
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 20px;
  transform: rotate(-1deg);
}

.noir-dossier-panel__body {
  color: var(--noir-text-secondary);
  font-size: 0.85rem;
  line-height: 1.8;
}

/* Redacted text effect */
.noir-redacted {
  background: var(--noir-text-primary);
  color: var(--noir-text-primary);
  padding: 0 4px;
  user-select: none;
  cursor: not-allowed;
}
```

---

## Design Do's and Don'ts

### Do's

- Use darkness as your primary compositional tool -- let content emerge from shadow rather than sit on a flat background
- Restrict your neon accents to one or two colors per page; scarcity makes each glow more powerful and atmospheric
- Employ Art Deco-influenced typography for display headings to honor the noir half of the aesthetic
- Add atmospheric overlays (venetian blinds, rain streaks, fog gradients) to create cinematic depth and mood
- Use directional lighting in your layouts -- gradients should suggest a specific light source, not symmetrical ambiance
- Combine serif elegance for headlines with monospace utility for body text to bridge the noir-to-tech divide
- Include material textures subtly -- brushed metal, concrete grain, wire mesh -- to ground futuristic elements in physical grit
- Let hover states feel like lights switching on: subtle glows that reveal information emerging from darkness

### Don'ts

- Flood the page with multiple vivid neon colors simultaneously -- that is cyberpunk, not Tech Noir; restraint is essential
- Use pure white (#FFFFFF) anywhere -- it breaks the atmosphere; use warm whites (#E8E0D0) or cool grays (#C8C8D8) instead
- Apply bright, saturated backgrounds -- Tech Noir backgrounds should never be lighter than deep charcoal
- Use rounded, friendly, or playful typography -- the mood demands angular geometry, classic serifs, or cold monospace
- Add cheerful illustrations, emoji, or cartoon elements -- the tone is serious, atmospheric, and morally ambiguous
- Over-animate UI elements -- Tech Noir is slow, deliberate, and brooding; rapid glitch loops and bouncing effects undermine the mood
- Forget readability in pursuit of atmosphere -- body text must maintain strong contrast ratios even on the darkest backgrounds
- Mix too many decorative overlays on a single section -- one venetian blind pattern plus rain plus fog plus vignette creates mud, not mood

---

## Related Aesthetics

| Aesthetic | Relationship to Tech Noir |
|-----------|--------------------------|
| **Cyberpunk** | The most direct sibling -- shares the neon-on-dark palette and dystopian themes, but Cyberpunk is maximalist and neon-saturated while Tech Noir exercises noir restraint and shadow dominance |
| **Film Noir** | The ancestral foundation -- Tech Noir inherits chiaroscuro lighting, venetian blind shadows, detective narratives, and moral ambiguity, then adds technology and futurism |
| **Synthwave** | Shares 1980s roots and neon aesthetics, but Synthwave is nostalgic and celebratory (sunset grids, chrome) while Tech Noir is cynical and rain-soaked |
| **Dark Mode Neon** | Overlaps in dark backgrounds with neon accents, but Dark Mode Neon is a UI pattern without narrative context; Tech Noir adds story, atmosphere, and cinematic composition |
| **Art Deco** | Tech Noir borrows Art Deco's geometric typography, thin-rule ornamentation, and elegant proportions, recontextualizing them in a dystopian future |
| **Industrial Gothic** | Shares the emphasis on dark materiality, metal textures, and oppressive atmosphere, but Industrial Gothic lacks the neon technology and detective narrative |
| **Steampunk** | Both are "-punk" aesthetics that critique technology through retro-futurist lenses, but from different eras; Steampunk is Victorian brass, Tech Noir is 1940s shadow |
| **Neo-Brutalism** | Both embrace raw, unpolished materiality, but Neo-Brutalism is stark and daylit while Tech Noir is nocturnal and atmospheric |
| **Glassmorphism** | The frosted-glass panel technique appears in Tech Noir as rain-streaked or fogged windows, but Glassmorphism is clean and bright where Tech Noir is dark and moody |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tech Noir Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=IBM+Plex+Mono:wght@300;400;500&family=Poiret+One&display=swap" rel="stylesheet">
  <style>
    /* ========================================
       CSS CUSTOM PROPERTIES
       ======================================== */
    :root {
      --noir-bg-void: #08080d;
      --noir-bg-surface: #0e0e14;
      --noir-bg-elevated: #161621;
      --noir-bg-active: #1e1e2c;
      --noir-border: #2a2a3a;
      --noir-border-muted: #4a4a5e;
      --noir-text-headline: #e8e0d0;
      --noir-text-primary: #c8c8d8;
      --noir-text-secondary: #8888a0;
      --noir-text-muted: #4a4a5e;
      --noir-blue: #3da8d5;
      --noir-amber: #d4a843;
      --noir-red: #c23b3b;
      --noir-violet: #7b5ea7;
      --noir-green: #2e8b7a;
      --noir-teal: #1a3a4a;
      --noir-glow-blue: 0 0 8px rgba(61, 168, 213, 0.35), 0 0 30px rgba(61, 168, 213, 0.10);
      --noir-glow-amber: 0 0 8px rgba(212, 168, 67, 0.35), 0 0 30px rgba(212, 168, 67, 0.10);
      --noir-glow-red: 0 0 8px rgba(194, 59, 59, 0.40), 0 0 30px rgba(194, 59, 59, 0.12);
    }

    /* ========================================
       RESET & BASE
       ======================================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--noir-bg-void);
      color: var(--noir-text-primary);
      font-family: 'IBM Plex Mono', 'Source Code Pro', monospace;
      font-size: 0.92rem;
      font-weight: 300;
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Cinzel', serif;
      font-weight: 700;
      color: var(--noir-text-headline);
      letter-spacing: 0.06em;
      line-height: 1.15;
    }

    a {
      color: var(--noir-blue);
      text-decoration: none;
      transition: color 0.3s ease, text-shadow 0.3s ease;
    }

    a:hover {
      text-shadow: 0 0 6px rgba(61, 168, 213, 0.25);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* ========================================
       NAVIGATION
       ======================================== */
    .noir-nav-wrapper {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(8, 8, 13, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(61, 168, 213, 0.06);
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 48px;
    }

    nav .logo {
      font-family: 'Cinzel', serif;
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--noir-text-headline);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }

    nav .logo span {
      color: var(--noir-blue);
      text-shadow: 0 0 6px rgba(61, 168, 213, 0.3);
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav ul a {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--noir-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      position: relative;
    }

    nav ul a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--noir-blue);
      transition: width 0.3s ease;
    }

    nav ul a:hover {
      color: var(--noir-blue);
    }

    nav ul a:hover::after {
      width: 100%;
    }

    /* ========================================
       HERO
       ======================================== */
    .hero {
      position: relative;
      min-height: 88vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 100px 48px;
      overflow: hidden;
    }

    /* Directional light source -- upper left */
    .hero .hero-light {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 15% 15%,
        rgba(61, 168, 213, 0.05) 0%,
        transparent 55%
      );
      pointer-events: none;
      z-index: 1;
    }

    /* Rain streaks */
    .hero::before {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      right: 0;
      bottom: -100%;
      background: repeating-linear-gradient(
        95deg,
        transparent,
        transparent 3px,
        rgba(61, 168, 213, 0.04) 3px,
        rgba(61, 168, 213, 0.04) 4px
      );
      pointer-events: none;
      z-index: 1;
      animation: rain-fall 6s linear infinite;
    }

    @keyframes rain-fall {
      0% { transform: translateY(0); }
      100% { transform: translateY(50%); }
    }

    /* Venetian blind shadow */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 20px,
        rgba(0, 0, 0, 0.2) 20px,
        rgba(0, 0, 0, 0.2) 24px
      );
      pointer-events: none;
      z-index: 2;
      opacity: 0.25;
    }

    .hero-content {
      position: relative;
      z-index: 3;
      max-width: 700px;
    }

    .hero h1 {
      font-size: clamp(2.2rem, 5.5vw, 4.2rem);
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 30px rgba(61, 168, 213, 0.15);
    }

    .hero h1 em {
      font-style: normal;
      color: var(--noir-blue);
      text-shadow: 0 0 10px rgba(61, 168, 213, 0.4), 0 0 40px rgba(61, 168, 213, 0.12);
    }

    .hero .tagline {
      font-family: 'Poiret One', sans-serif;
      font-size: 1rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--noir-text-secondary);
      margin-bottom: 0.75rem;
    }

    .hero p {
      color: var(--noir-text-secondary);
      font-size: 0.9rem;
      max-width: 550px;
      margin: 0 auto 2.5rem;
      line-height: 1.9;
    }

    /* Thin decorative line */
    .hero .separator {
      width: 60px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--noir-blue), transparent);
      margin: 0 auto 2rem;
    }

    /* Button */
    .btn {
      display: inline-block;
      background: transparent;
      color: var(--noir-blue);
      border: 1px solid var(--noir-blue);
      padding: 14px 40px;
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      transition: all 0.35s ease;
    }

    .btn:hover {
      background: rgba(61, 168, 213, 0.08);
      box-shadow: var(--noir-glow-blue);
      color: var(--noir-text-headline);
      border-color: rgba(61, 168, 213, 0.6);
      text-shadow: none;
    }

    .btn--amber {
      color: var(--noir-amber);
      border-color: var(--noir-amber);
    }

    .btn--amber:hover {
      background: rgba(212, 168, 67, 0.08);
      box-shadow: var(--noir-glow-amber);
      color: var(--noir-text-headline);
      border-color: rgba(212, 168, 67, 0.6);
    }

    /* ========================================
       CASES / FEATURES SECTION
       ======================================== */
    .cases {
      padding: 100px 0;
      border-top: 1px solid rgba(61, 168, 213, 0.06);
    }

    .cases .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .cases .section-header .label {
      font-family: 'Poiret One', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--noir-amber);
      margin-bottom: 12px;
    }

    .cases .section-header h2 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      text-transform: uppercase;
    }

    .case-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 48px;
    }

    .case-card {
      background: var(--noir-bg-surface);
      border: 1px solid var(--noir-border);
      padding: 32px;
      position: relative;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
      overflow: hidden;
    }

    /* Top-edge light bar */
    .case-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 15%;
      right: 15%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(61, 168, 213, 0.25), transparent);
    }

    /* Inner frame */
    .case-card::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      bottom: 8px;
      border: 1px solid rgba(61, 168, 213, 0.04);
      pointer-events: none;
      transition: border-color 0.4s ease;
    }

    .case-card:hover {
      border-color: rgba(61, 168, 213, 0.2);
      box-shadow: var(--noir-glow-blue);
    }

    .case-card:hover::after {
      border-color: rgba(61, 168, 213, 0.1);
    }

    .case-card .case-id {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--noir-amber);
      margin-bottom: 16px;
    }

    .case-card h3 {
      font-size: 1.1rem;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .case-card p {
      color: var(--noir-text-secondary);
      font-size: 0.85rem;
      line-height: 1.7;
    }

    /* ========================================
       DOSSIER / ABOUT SECTION
       ======================================== */
    .dossier {
      padding: 100px 48px;
      border-top: 1px solid rgba(61, 168, 213, 0.06);
      max-width: 900px;
      margin: 0 auto;
    }

    .dossier .classified {
      font-family: 'Cinzel', serif;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--noir-red);
      border: 1px solid var(--noir-red);
      display: inline-block;
      padding: 4px 14px;
      margin-bottom: 28px;
      transform: rotate(-1deg);
    }

    .dossier h2 {
      font-size: 1.8rem;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .dossier p {
      color: var(--noir-text-secondary);
      margin-bottom: 1.25rem;
      line-height: 1.9;
    }

    .dossier .redacted {
      background: var(--noir-text-primary);
      color: var(--noir-text-primary);
      padding: 0 6px;
      user-select: none;
      cursor: not-allowed;
    }

    /* ========================================
       CTA SECTION
       ======================================== */
    .cta {
      text-align: center;
      padding: 100px 48px;
      border-top: 1px solid rgba(61, 168, 213, 0.06);
      position: relative;
      overflow: hidden;
    }

    /* Atmospheric fog */
    .cta::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 50% 100%,
        rgba(194, 59, 59, 0.04) 0%,
        transparent 60%
      );
      pointer-events: none;
    }

    .cta .content {
      position: relative;
      z-index: 2;
    }

    .cta h2 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .cta h2 em {
      font-style: normal;
      color: var(--noir-red);
      text-shadow: 0 0 10px rgba(194, 59, 59, 0.3);
    }

    .cta p {
      color: var(--noir-text-secondary);
      margin-bottom: 2.5rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn--red {
      color: var(--noir-red);
      border-color: var(--noir-red);
    }

    .btn--red:hover {
      background: rgba(194, 59, 59, 0.08);
      box-shadow: var(--noir-glow-red);
      color: var(--noir-text-headline);
      border-color: rgba(194, 59, 59, 0.6);
    }

    /* ========================================
       FOOTER
       ======================================== */
    footer {
      border-top: 1px solid rgba(61, 168, 213, 0.06);
      padding: 40px 48px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-brand {
      font-family: 'Cinzel', serif;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--noir-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    .footer-meta {
      font-size: 0.72rem;
      color: var(--noir-text-muted);
      letter-spacing: 0.05em;
    }

    /* Thin decorative line above footer text */
    footer::before {
      content: '';
      display: block;
      width: 40px;
      height: 1px;
      background: var(--noir-border);
      margin-bottom: 24px;
    }

    /* ========================================
       UTILITIES
       ======================================== */
    .neon-text {
      color: var(--noir-blue);
      text-shadow:
        0 0 5px rgba(61, 168, 213, 0.5),
        0 0 15px rgba(61, 168, 213, 0.2),
        0 0 40px rgba(61, 168, 213, 0.08);
    }

    .neon-text--amber {
      color: var(--noir-amber);
      text-shadow:
        0 0 5px rgba(212, 168, 67, 0.5),
        0 0 15px rgba(212, 168, 67, 0.2),
        0 0 40px rgba(212, 168, 67, 0.08);
    }

    .neon-text--red {
      color: var(--noir-red);
      text-shadow:
        0 0 5px rgba(194, 59, 59, 0.5),
        0 0 15px rgba(194, 59, 59, 0.2),
        0 0 40px rgba(194, 59, 59, 0.08);
    }

    /* ========================================
       RESPONSIVE
       ======================================== */
    @media (max-width: 768px) {
      nav {
        padding: 14px 24px;
      }

      nav ul {
        gap: 18px;
      }

      .hero {
        min-height: auto;
        padding: 60px 24px;
      }

      .cases {
        padding: 60px 0;
      }

      .case-grid {
        padding: 0 24px;
      }

      .dossier {
        padding: 60px 24px;
      }

      .cta {
        padding: 60px 24px;
      }

      footer {
        padding: 30px 24px;
      }

      .footer-inner {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <div class="noir-nav-wrapper">
    <nav>
      <a href="#" class="logo">Shadow<span>&</span>Signal</a>
      <ul>
        <li><a href="#cases">Cases</a></li>
        <li><a href="#dossier">Dossier</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">Terminal</a></li>
      </ul>
    </nav>
  </div>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-light"></div>
    <div class="hero-content">
      <div class="tagline">Private Investigations // Digital Forensics</div>
      <div class="separator"></div>
      <h1>The Truth Hides in the <em>Signal</em></h1>
      <p>In a city drowning in data, some secrets still prefer the dark. We trace the
         threads that others cannot see -- through encrypted channels, corrupted
         archives, and rain-washed server rooms.</p>
      <a href="#cases" class="btn">Open Case File</a>
    </div>
  </section>

  <!-- Cases Section -->
  <section class="cases" id="cases">
    <div class="section-header">
      <div class="label">Active Investigations</div>
      <h2>Recent Case Files</h2>
    </div>
    <div class="case-grid">
      <div class="case-card">
        <div class="case-id">Case No. 2049-7A</div>
        <h3>The Vanishing Protocol</h3>
        <p>A senior engineer at Meridian Systems disappeared forty-eight hours
           before a scheduled whistleblower hearing. Her terminal logs were wiped.
           Her biometric data was overwritten. But data never truly dies.</p>
      </div>
      <div class="case-card">
        <div class="case-id">Case No. 2049-12C</div>
        <h3>Ghost in the Ledger</h3>
        <p>Anomalous transactions routing through seventeen shell corporations,
           each registered to addresses that do not exist. The money trail ends
           at a server farm beneath the old waterfront district.</p>
      </div>
      <div class="case-card">
        <div class="case-id">Case No. 2050-01F</div>
        <h3>Neon Witness</h3>
        <p>The only witness to the Eastside incident is a surveillance AI with
           corrupted memory banks. Extracting testimony from a machine that does
           not know it is lying requires a different kind of interrogation.</p>
      </div>
    </div>
  </section>

  <!-- Dossier Section -->
  <section class="dossier" id="dossier">
    <div class="classified">Classified // Eyes Only</div>
    <h2>Operative Dossier</h2>
    <p>Shadow & Signal was established in <span class="redacted">REDACTED</span> by former
       corporate intelligence operatives who chose to work the other side of the
       firewall. We specialize in digital forensics, surveillance analysis, and
       the recovery of information that powerful entities would prefer stayed buried.</p>
    <p>Our methods combine traditional investigative craft -- interviews, stakeouts,
       document analysis -- with cutting-edge computational forensics. Every case
       begins in the dark. Our job is to find which shadows are worth illuminating.</p>
    <p>Operative clearance level: <span class="redacted">REDACTED</span>.
       Current jurisdiction: sectors 7 through 19.
       Handler designation: <span class="redacted">REDACTED</span>.</p>
  </section>

  <!-- CTA Section -->
  <section class="cta" id="contact">
    <div class="content">
      <h2>Something Doesn't <em>Add Up</em>?</h2>
      <p>If you have a case that the authorities cannot -- or will not -- pursue,
         we operate in the spaces between jurisdictions.</p>
      <a href="#" class="btn btn--red">Initiate Contact</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">Shadow & Signal // Est. 2041</div>
      <div class="footer-meta">Encrypted channel active. All transmissions monitored.</div>
    </div>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with darkness, add light** -- build your layout on the deepest background color first, then introduce lighter surfaces and accent glows incrementally; never start with a light canvas and try to darken it
- **Test neon glow on multiple screens** -- the subtle glow effects that define Tech Noir can appear invisible on cheap displays or overpowering on OLED; test across display types and adjust opacity accordingly
- **Use `backdrop-filter: blur()` for glass panels** -- frosted glass effects work well for overlaid panels and modals, simulating rain-streaked windows; pair with a dark semi-transparent background color
- **Animate sparingly and slowly** -- Tech Noir favors languid, deliberate motion (0.3s-0.5s transitions, slow rain animations, gentle neon flicker); avoid rapid, energetic animations that break the brooding mood
- **Layer atmospheric effects with `pointer-events: none`** -- rain streaks, venetian blind overlays, and fog gradients should be purely decorative pseudo-elements that never interfere with user interaction
- **Combine Art Deco borders with monospace data** -- the most distinctive Tech Noir compositions place elegant thin-rule frames around utilitarian terminal-style text, creating the central aesthetic tension
- **Reserve color for meaning** -- with such a restricted palette, each accent color should carry consistent semantic meaning (blue for interactive, amber for informational, red for danger/dramatic emphasis)
- **Consider `prefers-color-scheme` carefully** -- Tech Noir is inherently a dark aesthetic; if you need a light mode, consider a sepia-toned "case file" variant rather than simply inverting the palette
