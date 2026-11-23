# Retro Anime Design Reference

Retro Anime is a visual aesthetic drawn directly from the golden age of Japanese cel animation spanning the 1980s and 1990s. This style captures the bold, hand-crafted energy of classic anime productions -- from the neon-lit cybercities of Akira and Bubblegum Crisis to the vibrant magical-girl palettes of Sailor Moon and the atmospheric depth of Cowboy Bebop. The aesthetic is defined by thick ink outlines, flat cel-shaded color fills with hard-edged shadow transitions, dramatic speed lines, and a warm analog grain that comes from traditional paint-on-celluloid production techniques photographed with analog cameras. Unlike modern digital anime, which favors smooth gradients, soft lighting, and pastel tones, retro anime embraces saturated punchy color, visible linework imperfections, and a deliberate roughness that gives each frame a handmade quality.

In web and UI design, the Retro Anime aesthetic translates to bold graphic compositions that treat typography as an expressive, emotional force rather than a neutral information carrier. Layouts draw from manga panel structures -- asymmetric, dynamic, and narrative-driven -- where the eye is guided through content the way it would be guided through comic pages. Color palettes mix vivid primaries and secondaries (hot pinks, electric blues, sunset oranges) with deeper navy and black backgrounds that evoke the dramatic lighting of late-night TV broadcasts. Speed lines, halftone dot patterns, and starburst effects are used as decorative and structural devices. Interface elements often feature thick dark borders reminiscent of cel outlines, and interactive states use exaggerated scale or color shifts that mirror anime's tradition of amplifying emotion through visual intensity. The overall mood is nostalgic yet energetic -- a celebration of analog craft filtered through digital execution, appealing to audiences who grew up with VHS fansubs and late-night anime blocks as well as a new generation discovering the style through lofi music videos and retro-inspired indie games.

---

## Visual Characteristics

### Core Design Traits

- **Thick, bold outlines** -- 2-4px dark borders around elements mimic the heavy ink lines of hand-drawn cel animation, giving UI components a graphic, illustrative quality
- **Cel-shaded color fills** -- flat color areas with hard-edged two-tone shadow transitions rather than smooth gradients, replicating the hand-painted cel look
- **Speed lines and action radials** -- radiating lines from focal points create drama and draw the eye, implemented via conic gradients or SVG patterns
- **Halftone and screentone patterns** -- dot patterns and crosshatch textures used as background fills or overlays, referencing manga print production techniques
- **Warm analog grain** -- subtle film noise overlays that evoke the texture of 80s/90s analog camera capture and VHS playback
- **Manga panel layouts** -- asymmetric, angular content divisions that reference comic page composition rather than standard grid layouts
- **Dramatic lighting contrasts** -- strong highlights and deep shadows with minimal midtones, creating the high-contrast look of classic anime key frames
- **Starburst and sparkle effects** -- four-pointed star highlights on interactive elements and headings, referencing the distinctive "anime shimmer" in eyes and metallic surfaces
- **CJK character accents** -- decorative katakana or kanji text used as atmospheric design elements, suggesting the Japanese cultural origin
- **VHS and CRT artifacts** -- scan lines, slight color bleeding, and chromatic aberration as subtle texture layers that reinforce the retro broadcast feel
- **Exaggerated emotional states** -- hover and active states use dramatic scale changes, color shifts, or motion bursts that mirror anime's tradition of amplified visual expression

### Design Principles

- Treat the interface as a narrative experience -- guide users through content like panels in a manga chapter
- Color is emotion: warm tones (sunset orange, hot pink) signal energy and action; cool tones (deep blue, teal) signal calm and atmosphere
- Outlines are structural -- every major element should feel like it has been "inked" with a deliberate border
- Embrace imperfection as character -- slight texture, grain, and hand-drawn qualities add warmth that sterile digital precision lacks
- Typography is expressive, not neutral -- text can shout, whisper, or move depending on context
- Use speed lines and radial effects sparingly for maximum dramatic impact
- Background atmospherics (grain, halftone, gradients) set mood without competing with foreground content
- Balance nostalgia with usability -- retro styling should enhance, not hinder, modern interaction patterns

---

## Color Palette

The retro anime palette draws from the specific constraints and character of 1980s-90s cel animation. Colors were hand-mixed paints applied to transparent celluloid sheets, resulting in saturated, slightly warm tones with a distinctive analog quality. The RGB limitations of broadcast television and VHS playback further shaped the palette -- colors appear punchy but never quite reach digital purity, retaining a warm, slightly amber-shifted quality. Dark navy and indigo backgrounds dominate night scenes (a staple of the genre), while vivid accent colors pop against them with theatrical intensity.

### Cel Animation Palette

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#0B0E1A](https://via.placeholder.com/20/0B0E1A/0B0E1A.png) | `#0B0E1A` | Night sky background, deepest layer |
| ![#1A1E3A](https://via.placeholder.com/20/1A1E3A/1A1E3A.png) | `#1A1E3A` | Dark panel background, card surfaces |
| ![#2C3258](https://via.placeholder.com/20/2C3258/2C3258.png) | `#2C3258` | Elevated surfaces, nav background |
| ![#FF4081](https://via.placeholder.com/20/FF4081/FF4081.png) | `#FF4081` | Primary accent, hot pink -- magical girl energy, CTAs |
| ![#FF6B35](https://via.placeholder.com/20/FF6B35/FF6B35.png) | `#FF6B35` | Sunset orange -- warmth, energy, action highlights |
| ![#FFD54F](https://via.placeholder.com/20/FFD54F/FFD54F.png) | `#FFD54F` | Golden yellow -- sparkle effects, star highlights |
| ![#00BCD4](https://via.placeholder.com/20/00BCD4/00BCD4.png) | `#00BCD4` | Teal cyan -- cool accent, links, informational |
| ![#5C6BC0](https://via.placeholder.com/20/5C6BC0/5C6BC0.png) | `#5C6BC0` | Indigo -- secondary accent, twilight mood |
| ![#E040FB](https://via.placeholder.com/20/E040FB/E040FB.png) | `#E040FB` | Magenta purple -- neon signs, highlight glow |
| ![#D32F2F](https://via.placeholder.com/20/D32F2F/D32F2F.png) | `#D32F2F` | Anime red -- danger, intensity, blood moon |
| ![#66BB6A](https://via.placeholder.com/20/66BB6A/66BB6A.png) | `#66BB6A` | Soft green -- nature scenes, success states |
| ![#F5E6D3](https://via.placeholder.com/20/F5E6D3/F5E6D3.png) | `#F5E6D3` | Warm parchment -- primary text on dark backgrounds |
| ![#A89EC9](https://via.placeholder.com/20/A89EC9/A89EC9.png) | `#A89EC9` | Lavender mist -- secondary text, captions |
| ![#FFB570](https://via.placeholder.com/20/FFB570/FFB570.png) | `#FFB570` | Sun-washed peach -- skin tone reference, warm UI accents |
| ![#3A2A5C](https://via.placeholder.com/20/3A2A5C/3A2A5C.png) | `#3A2A5C` | Deep purple -- shadow tone, border accents |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --anime-bg-night: #0b0e1a;
  --anime-bg-dark: #1a1e3a;
  --anime-bg-panel: #2c3258;
  --anime-bg-shadow: #3a2a5c;

  /* Primary accents */
  --anime-pink: #ff4081;
  --anime-orange: #ff6b35;
  --anime-yellow: #ffd54f;
  --anime-cyan: #00bcd4;
  --anime-indigo: #5c6bc0;
  --anime-magenta: #e040fb;
  --anime-red: #d32f2f;
  --anime-green: #66bb6a;

  /* Skin & warm tones */
  --anime-peach: #ffb570;

  /* Text */
  --anime-text-primary: #f5e6d3;
  --anime-text-secondary: #a89ec9;

  /* Cel outline */
  --anime-outline: #0b0e1a;
  --anime-outline-width: 3px;

  /* Shadow tones (cel shading) */
  --anime-shadow-cool: rgba(26, 30, 58, 0.5);
  --anime-shadow-warm: rgba(210, 47, 47, 0.15);

  /* Glow effects */
  --anime-glow-pink: 0 0 12px rgba(255, 64, 129, 0.5), 0 0 40px rgba(255, 64, 129, 0.15);
  --anime-glow-cyan: 0 0 12px rgba(0, 188, 212, 0.5), 0 0 40px rgba(0, 188, 212, 0.15);
  --anime-glow-yellow: 0 0 12px rgba(255, 213, 79, 0.5), 0 0 40px rgba(255, 213, 79, 0.15);
}
```

---

## Typography

### Typeface Characteristics

Retro anime typography balances two worlds: the bold, expressive display text seen in anime title cards and manga covers, and the clean, slightly mechanical text used for subtitles and UI elements. Display text should feel dynamic and slightly aggressive -- condensed, italic, or stylized letterforms that convey motion and energy. Body text should remain legible but carry a hint of the era's aesthetic through slightly geometric or humanist sans-serif choices. Decorative katakana or kanji overlays are used atmospherically, not as primary readable content, echoing the convention of Japanese text appearing alongside translated titles in international anime releases.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Bangers** | Comic book display | Headlines, hero text, exclamatory titles |
| **Russo One** | Bold geometric | Section headings, navigation labels |
| **Bebas Neue** | Condensed uppercase | Subtitle-style text, overlays, labels |
| **Zen Kaku Gothic New** | Japanese-influenced sans | Body text with CJK flavor, bilingual layouts |
| **Noto Sans JP** | Clean Japanese sans | Decorative kanji/katakana accents |
| **Oswald** | Condensed sans-serif | Subheadings, compact navigation |
| **Righteous** | Retro rounded display | Playful headings, badge text |
| **Sawarabi Gothic** | Japanese gothic | Atmospheric Japanese text elements |
| **Lexend** | Readable geometric | Body text, paragraphs, descriptions |
| **Space Grotesk** | Geometric with character | UI labels, buttons, metadata |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Bangers** (400) | **Lexend** (400) | Classic manga energy, highly readable |
| **Russo One** (400) | **Zen Kaku Gothic New** (400) | Bold mecha-inspired, Japanese-inflected body |
| **Bebas Neue** (400) | **Space Grotesk** (400) | Cinematic subtitle feel, modern body |
| **Righteous** (400) | **Lexend** (400) | Playful magical-girl energy, clean body |
| **Oswald** (600) | **Zen Kaku Gothic New** (400) | Condensed action titles, bilingual feel |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Lexend:wght@300;400;500;700&family=Bebas+Neue&family=Noto+Sans+JP:wght@400;700&display=swap');

/* Headings -- bold, expressive, title-card energy */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bangers', 'Russo One', cursive;
  color: var(--anime-text-primary);
  letter-spacing: 0.04em;
  line-height: 1.1;
}

/* Display / Hero text with anime glow */
.anime-display {
  font-family: 'Bangers', cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--anime-yellow);
  text-shadow:
    3px 3px 0 var(--anime-outline),
    -1px -1px 0 var(--anime-outline),
    1px -1px 0 var(--anime-outline),
    -1px 1px 0 var(--anime-outline),
    0 0 20px rgba(255, 213, 79, 0.4);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Body text */
body {
  font-family: 'Lexend', 'Zen Kaku Gothic New', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--anime-text-primary);
}

/* Subtitle / overlay text */
.anime-subtitle {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--anime-yellow);
  text-shadow: 2px 2px 0 var(--anime-outline);
}

/* Decorative Japanese text */
.anime-kanji {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  font-size: 0.8em;
  color: var(--anime-text-secondary);
  opacity: 0.6;
  writing-mode: vertical-rl;
}
```

---

## Layout Principles

- **Manga panel composition** -- divide content areas into asymmetric, angular panels reminiscent of comic page layouts rather than uniform grids
- **Dark atmospheric backgrounds** -- deep navy and indigo base layers that evoke nighttime anime scenes; content floats above this dark stage
- **Bold border delineation** -- thick dark outlines (3-4px) separate content areas, mirroring the ink outlines of cel animation
- **Diagonal energy** -- tilted elements, skewed containers, and diagonal dividers inject the dynamic tension of anime action sequences
- **Layered depth** -- foreground content, mid-ground panels, and background atmosphere create parallax-like depth without complex JavaScript
- **Speed line sections** -- full-width dividers or section backgrounds using radiating line patterns to create dramatic transitions between content blocks
- **Staggered asymmetry** -- avoid perfectly centered, symmetrical layouts; offset elements to create visual rhythm like manga panel flow
- **Full-bleed hero sections** -- large, dramatic opening sections with oversized typography that mirror anime title cards and movie posters
- **Responsive panel reflow** -- manga-style multi-panel layouts collapse into stacked single panels on mobile, maintaining the bordered panel aesthetic
- **Atmospheric overlays** -- grain texture, halftone dots, or scan line effects applied as pseudo-element layers that add retro texture without impacting content
- **Generous padding within thick borders** -- content breathes inside its outlined containers; the thick borders need visual space around text
- **Accent color spotlighting** -- use vivid accent colors (pink, orange, yellow) on no more than 20-30% of the viewport to maintain dramatic impact

---

## CSS / Design Techniques

### Retro Anime Card Component

```css
.anime-card {
  background: var(--anime-bg-dark);
  border: var(--anime-outline-width) solid var(--anime-outline);
  border-radius: 4px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Cel-shaded shadow -- hard edge, no blur */
.anime-card::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  right: -6px;
  bottom: -6px;
  background: var(--anime-bg-shadow);
  border: var(--anime-outline-width) solid var(--anime-outline);
  border-radius: 4px;
  z-index: -1;
}

.anime-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 var(--anime-bg-shadow);
}

.anime-card__title {
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  color: var(--anime-pink);
  text-shadow: 2px 2px 0 var(--anime-outline);
  margin-bottom: 12px;
}

.anime-card__body {
  font-family: 'Lexend', sans-serif;
  font-size: 0.95rem;
  color: var(--anime-text-primary);
  line-height: 1.6;
}

/* Card grid */
.anime-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
```

### Retro Anime Button

```css
.anime-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--anime-pink);
  color: #fff;
  border: var(--anime-outline-width) solid var(--anime-outline);
  padding: 14px 36px;
  font-family: 'Bangers', cursive;
  font-size: 1.1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  text-shadow: 1px 1px 0 var(--anime-outline);
  box-shadow: 4px 4px 0 var(--anime-outline);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.anime-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--anime-outline);
}

.anime-button:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--anime-outline);
}

/* Cyan variant */
.anime-button--cyan {
  background: var(--anime-cyan);
}

/* Orange variant */
.anime-button--orange {
  background: var(--anime-orange);
}

/* Outline / ghost variant */
.anime-button--ghost {
  background: transparent;
  color: var(--anime-pink);
  box-shadow: 4px 4px 0 var(--anime-pink);
  border-color: var(--anime-pink);
}

.anime-button--ghost:hover {
  background: var(--anime-pink);
  color: #fff;
  text-shadow: 1px 1px 0 var(--anime-outline);
}
```

### Navigation Bar

```css
.anime-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px;
  background: var(--anime-bg-dark);
  border-bottom: var(--anime-outline-width) solid var(--anime-outline);
  position: relative;
}

.anime-nav__logo {
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: var(--anime-pink);
  text-decoration: none;
  text-shadow: 2px 2px 0 var(--anime-outline);
  letter-spacing: 0.04em;
}

/* Decorative kanji beside logo */
.anime-nav__logo::after {
  content: ' \30A2\30CB\30E1';  /* katakana: anime */
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.6em;
  color: var(--anime-text-secondary);
  margin-left: 8px;
  vertical-align: super;
}

.anime-nav__links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.anime-nav__links a {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  color: var(--anime-text-primary);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.anime-nav__links a:hover,
.anime-nav__links a.active {
  color: var(--anime-pink);
  border-bottom-color: var(--anime-pink);
}
```

### Hero Section

```css
.anime-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  background: var(--anime-bg-night);
  overflow: hidden;
}

/* Speed lines background */
.anime-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    transparent 3deg,
    rgba(255, 64, 129, 0.04) 3deg,
    rgba(255, 64, 129, 0.04) 4deg
  );
  pointer-events: none;
  z-index: 1;
}

/* Film grain overlay */
.anime-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  pointer-events: none;
  z-index: 2;
}

.anime-hero__content {
  position: relative;
  z-index: 3;
  max-width: 800px;
}

.anime-hero__content h1 {
  font-family: 'Bangers', cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--anime-yellow);
  text-shadow:
    4px 4px 0 var(--anime-outline),
    -2px -2px 0 var(--anime-outline),
    2px -2px 0 var(--anime-outline),
    -2px 2px 0 var(--anime-outline),
    0 0 30px rgba(255, 213, 79, 0.3);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.anime-hero__content p {
  font-family: 'Lexend', sans-serif;
  font-size: 1.15rem;
  color: var(--anime-text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .anime-hero {
    min-height: auto;
    padding: 60px 20px;
  }
}
```

### Speed Lines Effect

```css
/* Radiating speed lines -- apply to any container */
.anime-speed-lines {
  position: relative;
  overflow: hidden;
}

.anime-speed-lines::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: repeating-conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    transparent 4deg,
    rgba(255, 255, 255, 0.03) 4deg,
    rgba(255, 255, 255, 0.03) 5deg
  );
  pointer-events: none;
  z-index: 0;
}

/* Animated speed lines for emphasis */
@keyframes anime-speed-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.anime-speed-lines--animated::before {
  animation: anime-speed-rotate 60s linear infinite;
}

/* Horizontal speed / motion lines */
.anime-motion-lines {
  position: relative;
}

.anime-motion-lines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 8px,
    rgba(255, 255, 255, 0.02) 8px,
    rgba(255, 255, 255, 0.02) 9px
  );
  pointer-events: none;
}
```

### Halftone / Screentone Pattern

```css
/* Manga-style halftone overlay */
.anime-halftone {
  position: relative;
}

.anime-halftone::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    var(--anime-text-secondary) 1px,
    transparent 1px
  );
  background-size: 6px 6px;
  opacity: 0.08;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Denser halftone for shadow areas */
.anime-halftone--dense::after {
  background-size: 4px 4px;
  opacity: 0.12;
}
```

### Starburst / Sparkle Effect

```css
/* Four-pointed anime sparkle via CSS */
@keyframes anime-sparkle {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.6; transform: scale(0.8) rotate(45deg); }
}

.anime-sparkle {
  position: relative;
  display: inline-block;
}

.anime-sparkle::before,
.anime-sparkle::after {
  content: '';
  position: absolute;
  background: var(--anime-yellow);
  border-radius: 0;
}

.anime-sparkle::before {
  width: 2px;
  height: 16px;
  top: -8px;
  right: -6px;
  animation: anime-sparkle 1.5s ease-in-out infinite;
}

.anime-sparkle::after {
  width: 16px;
  height: 2px;
  top: -1px;
  right: -13px;
  animation: anime-sparkle 1.5s ease-in-out infinite 0.25s;
}
```

### VHS Scan Line Overlay

```css
.anime-scanlines {
  position: relative;
}

.anime-scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.12) 2px,
    rgba(0, 0, 0, 0.12) 4px
  );
  pointer-events: none;
  z-index: 10;
}

/* Chromatic aberration -- apply to images or containers */
.anime-chromatic {
  position: relative;
}

.anime-chromatic::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  mix-blend-mode: screen;
  opacity: 0.4;
  transform: translate(2px, 0);
  filter: hue-rotate(90deg);
  pointer-events: none;
}
```

---

## Design Do's and Don'ts

### Do's

- Use thick, dark outlines (3-4px) on cards, buttons, and panels to create the cel-animation look
- Apply hard-edged box shadows (no blur) to simulate flat cel-shaded depth -- e.g., `4px 4px 0 #0b0e1a`
- Use warm, saturated accent colors on dark navy/indigo backgrounds for high dramatic contrast
- Add subtle grain or halftone texture overlays to backgrounds for analog warmth
- Employ speed lines or conic gradient radiations sparingly at section transitions for energy
- Use expressive, comic-style display fonts (Bangers, Bebas Neue) for headings and title cards
- Include atmospheric decorative Japanese text (katakana, kanji) at reduced opacity for authenticity
- Animate hover states with slight scale or translation shifts that feel punchy and responsive

### Don'ts

- Use drop shadows with blur -- retro anime shading is flat and hard-edged, never soft or diffused
- Apply smooth linear or radial gradients as primary fills -- cel shading uses discrete color steps, not blends
- Choose thin, light, or minimal typefaces for headings -- display text should be bold and impactful
- Overwhelm the layout with speed lines and effects everywhere -- dramatic techniques need restraint to retain impact
- Use pure white (`#ffffff`) backgrounds -- the retro anime palette is warm; use off-white or parchment tones for light areas
- Mix too many accent colors at once -- limit vivid accents to 2-3 per section to avoid visual chaos
- Forget the outline -- removing borders makes the design lose its illustrative, hand-drawn character
- Add rounded, bubbly UI elements with large border-radius -- retro anime is angular, sharp, and bold, not soft and pillowy

---

## Related Aesthetics

| Aesthetic | Relationship to Retro Anime |
|-----------|----------------------------|
| **Cyberpunk** | Shares 80s sci-fi roots and neon-on-dark palettes; Cyberpunk is dystopian-tech while Retro Anime is broader in genre and warmer in tone |
| **Vaporwave** | Both mine 80s/90s nostalgia; Vaporwave is ironic and pastel-drenched while Retro Anime is sincere and saturated |
| **Synthwave** | Overlaps in neon aesthetics and 80s reverence; Synthwave focuses on music-driven chrome/grid visuals while Retro Anime foregrounds illustration |
| **8-Bit** | Shared retro gaming-era nostalgia; 8-Bit uses pixel art constraints while Retro Anime uses hand-drawn cel-animation language |
| **Ligne Claire** | Both emphasize bold outlines and flat color fills; Ligne Claire derives from Franco-Belgian comics (Herge) while Retro Anime from Japanese manga/animation |
| **Pop Art** | Shared use of halftone dots, bold outlines, and vivid color; Pop Art references Western commercial art while Retro Anime references Japanese broadcast animation |
| **Graffiti Pop** | Both use bold graphics, thick outlines, and high-energy color; Graffiti Pop is street-culture-rooted while Retro Anime is media/broadcast-rooted |
| **Dark Mode Neon** | Shares the vivid-accents-on-dark-backgrounds approach; Dark Mode Neon is UI-functional while Retro Anime is illustrative and narrative |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retro Anime Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Lexend:wght@300;400;500;700&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* Custom Properties */
    :root {
      --anime-bg-night: #0b0e1a;
      --anime-bg-dark: #1a1e3a;
      --anime-bg-panel: #2c3258;
      --anime-bg-shadow: #3a2a5c;
      --anime-pink: #ff4081;
      --anime-orange: #ff6b35;
      --anime-yellow: #ffd54f;
      --anime-cyan: #00bcd4;
      --anime-indigo: #5c6bc0;
      --anime-magenta: #e040fb;
      --anime-red: #d32f2f;
      --anime-green: #66bb6a;
      --anime-peach: #ffb570;
      --anime-text-primary: #f5e6d3;
      --anime-text-secondary: #a89ec9;
      --anime-outline: #0b0e1a;
      --anime-outline-width: 3px;
    }

    /* Reset & Base */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--anime-bg-night);
      color: var(--anime-text-primary);
      font-family: 'Lexend', 'Noto Sans JP', sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Bangers', cursive;
      letter-spacing: 0.04em;
      line-height: 1.1;
    }

    a { color: var(--anime-cyan); text-decoration: none; transition: color 0.2s ease; }
    a:hover { color: var(--anime-pink); }
    img { max-width: 100%; height: auto; }

    /* Navigation */
    .nav {
      display: flex; align-items: center; justify-content: space-between;
      max-width: 1200px; margin: 0 auto; padding: 16px 32px;
      background: var(--anime-bg-dark);
      border-bottom: var(--anime-outline-width) solid var(--anime-outline);
      position: sticky; top: 0; z-index: 100;
    }
    .nav__logo {
      font-family: 'Bangers', cursive; font-size: 1.8rem;
      color: var(--anime-pink); text-decoration: none;
      text-shadow: 2px 2px 0 var(--anime-outline);
    }
    .nav__logo span {
      font-family: 'Noto Sans JP', sans-serif; font-size: 0.55em;
      color: var(--anime-text-secondary); margin-left: 6px; vertical-align: super;
    }
    .nav__links { display: flex; gap: 24px; list-style: none; }
    .nav__links a {
      font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem;
      color: var(--anime-text-primary); text-transform: uppercase;
      letter-spacing: 0.08em; padding: 4px 8px;
      border-bottom: 3px solid transparent;
      transition: color 0.2s ease, border-color 0.2s ease;
    }
    .nav__links a:hover, .nav__links a.active {
      color: var(--anime-pink); border-bottom-color: var(--anime-pink);
    }

    /* Hero Section */
    .hero {
      position: relative; min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      text-align: center; padding: 80px 40px;
      background: var(--anime-bg-night); overflow: hidden;
    }
    .hero::before { /* Speed lines */
      content: ''; position: absolute; inset: -25%;
      background: repeating-conic-gradient(
        from 0deg at 50% 55%, transparent 0deg, transparent 3.5deg,
        rgba(255, 64, 129, 0.035) 3.5deg, rgba(255, 64, 129, 0.035) 4deg);
      pointer-events: none; z-index: 1;
    }
    .hero::after { /* Grain overlay */
      content: ''; position: absolute; inset: 0; opacity: 0.05;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 128px 128px; pointer-events: none; z-index: 2;
    }
    .hero__content { position: relative; z-index: 3; max-width: 800px; }
    .hero__badge {
      display: inline-block; font-family: 'Bebas Neue', sans-serif;
      font-size: 1rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--anime-cyan); border: 2px solid var(--anime-cyan);
      padding: 4px 16px; margin-bottom: 24px;
    }
    .hero__title {
      font-size: clamp(3rem, 8vw, 6rem); color: var(--anime-yellow);
      text-shadow: 4px 4px 0 var(--anime-outline), -2px -2px 0 var(--anime-outline),
        2px -2px 0 var(--anime-outline), -2px 2px 0 var(--anime-outline),
        0 0 30px rgba(255, 213, 79, 0.3);
      text-transform: uppercase; margin-bottom: 1.5rem;
    }
    .hero__subtitle {
      font-family: 'Lexend', sans-serif; font-size: 1.15rem;
      color: var(--anime-text-secondary); max-width: 600px;
      margin: 0 auto 2.5rem; line-height: 1.8;
    }
    .hero__buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* Buttons */
    .btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 14px 36px; font-family: 'Bangers', cursive; font-size: 1.1rem;
      letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none;
      cursor: pointer; border: var(--anime-outline-width) solid var(--anime-outline);
      text-shadow: 1px 1px 0 var(--anime-outline);
      box-shadow: 4px 4px 0 var(--anime-outline);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--anime-outline); }
    .btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--anime-outline); }
    .btn--pink { background: var(--anime-pink); color: #fff; }
    .btn--cyan { background: var(--anime-cyan); color: var(--anime-outline); }
    .btn--ghost {
      background: transparent; color: var(--anime-pink);
      border-color: var(--anime-pink); box-shadow: 4px 4px 0 var(--anime-pink);
      text-shadow: none;
    }
    .btn--ghost:hover {
      background: var(--anime-pink); color: #fff;
      text-shadow: 1px 1px 0 var(--anime-outline);
      box-shadow: 6px 6px 0 var(--anime-outline); border-color: var(--anime-outline);
    }

    /* Section Utilities */
    .section { max-width: 1200px; margin: 0 auto; padding: 80px 32px; }
    .section__header { text-align: center; margin-bottom: 48px; }
    .section__title {
      font-size: clamp(2rem, 5vw, 3.5rem); color: var(--anime-pink);
      text-shadow: 3px 3px 0 var(--anime-outline), -1px -1px 0 var(--anime-outline),
        1px -1px 0 var(--anime-outline), -1px 1px 0 var(--anime-outline);
      text-transform: uppercase; margin-bottom: 12px;
    }
    .section__subtitle {
      font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem;
      letter-spacing: 0.1em; color: var(--anime-text-secondary); text-transform: uppercase;
    }

    /* Speed Line Divider */
    .divider-speed {
      width: 100%; height: 60px; position: relative;
      background: repeating-conic-gradient(
        from 0deg at 50% 50%, transparent 0deg, transparent 5deg,
        rgba(255, 64, 129, 0.06) 5deg, rgba(255, 64, 129, 0.06) 6deg);
    }
    .divider-speed::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, var(--anime-bg-night),
        transparent 30%, transparent 70%, var(--anime-bg-night));
    }

    /* Cards */
    .card {
      background: var(--anime-bg-dark);
      border: var(--anime-outline-width) solid var(--anime-outline);
      border-radius: 4px; padding: 28px; position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 5px 5px 0 var(--anime-bg-shadow);
    }
    .card:hover { transform: translate(-3px, -3px); box-shadow: 8px 8px 0 var(--anime-bg-shadow); }
    .card__icon { font-size: 2rem; margin-bottom: 16px; }
    .card__title {
      font-size: 1.5rem; color: var(--anime-yellow);
      text-shadow: 2px 2px 0 var(--anime-outline); margin-bottom: 12px;
    }
    .card__text { font-size: 0.95rem; color: var(--anime-text-secondary); line-height: 1.6; }
    .card__tag {
      display: inline-block; font-family: 'Bebas Neue', sans-serif;
      font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--anime-cyan); border: 2px solid var(--anime-cyan);
      padding: 2px 10px; margin-top: 16px;
    }
    .card-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;
    }

    /* Manga Panel Layout */
    .manga-panel {
      display: grid; grid-template-columns: 1fr 1fr; gap: 4px;
      background: var(--anime-outline);
      border: var(--anime-outline-width) solid var(--anime-outline);
    }
    .manga-panel__cell { background: var(--anime-bg-dark); padding: 40px 32px; }
    .manga-panel__cell--wide { grid-column: span 2; }
    .manga-panel__cell--accent { background: var(--anime-bg-panel); }
    .manga-panel__cell h3 {
      font-size: 1.6rem; color: var(--anime-orange);
      text-shadow: 2px 2px 0 var(--anime-outline);
      margin-bottom: 12px; text-transform: uppercase;
    }
    .manga-panel__cell p { color: var(--anime-text-secondary); line-height: 1.6; }

    /* CTA Section */
    .cta {
      text-align: center; padding: 80px 32px; position: relative;
      overflow: hidden; background: var(--anime-bg-dark);
      border-top: var(--anime-outline-width) solid var(--anime-outline);
      border-bottom: var(--anime-outline-width) solid var(--anime-outline);
    }
    .cta::before { /* Halftone pattern */
      content: ''; position: absolute; inset: 0;
      background-image: radial-gradient(circle, var(--anime-text-secondary) 1px, transparent 1px);
      background-size: 8px 8px; opacity: 0.05; pointer-events: none;
    }
    .cta__content { position: relative; z-index: 1; }
    .cta__title {
      font-size: clamp(2rem, 5vw, 3.5rem); color: var(--anime-yellow);
      text-shadow: 3px 3px 0 var(--anime-outline), -1px -1px 0 var(--anime-outline),
        1px -1px 0 var(--anime-outline), -1px 1px 0 var(--anime-outline);
      text-transform: uppercase; margin-bottom: 16px;
    }
    .cta__text {
      font-size: 1.1rem; color: var(--anime-text-secondary);
      max-width: 500px; margin: 0 auto 2rem;
    }

    /* Footer */
    .footer {
      background: var(--anime-bg-dark);
      border-top: var(--anime-outline-width) solid var(--anime-outline);
      padding: 40px 32px; text-align: center;
    }
    .footer__brand {
      font-family: 'Bangers', cursive; font-size: 1.4rem;
      color: var(--anime-pink); text-shadow: 2px 2px 0 var(--anime-outline);
      margin-bottom: 12px;
    }
    .footer__links {
      display: flex; justify-content: center; gap: 24px;
      list-style: none; margin-bottom: 16px;
    }
    .footer__links a {
      font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
      color: var(--anime-text-secondary); letter-spacing: 0.06em; text-transform: uppercase;
    }
    .footer__links a:hover { color: var(--anime-pink); }
    .footer__copy { font-size: 0.85rem; color: var(--anime-text-secondary); opacity: 0.6; }
    .footer__kanji {
      font-family: 'Noto Sans JP', sans-serif; font-size: 0.9em;
      opacity: 0.4; margin-left: 8px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav { flex-direction: column; gap: 12px; padding: 12px 20px; }
      .nav__links { gap: 16px; }
      .hero { min-height: auto; padding: 60px 20px; }
      .hero__buttons { flex-direction: column; align-items: center; }
      .section { padding: 48px 20px; }
      .card-grid { grid-template-columns: 1fr; }
      .manga-panel { grid-template-columns: 1fr; }
      .manga-panel__cell--wide { grid-column: span 1; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav__logo">
      RetroAnime<span>&#12524;&#12488;&#12525;</span>
    </a>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__content">
      <span class="hero__badge">&#x2605; Episode 01</span>
      <h1 class="hero__title">The Golden Age of Cel Animation</h1>
      <p class="hero__subtitle">
        Step into a world of bold outlines, dramatic speed lines, and hand-painted
        celluloid frames. Where every pixel carries the warmth of analog craft.
      </p>
      <div class="hero__buttons">
        <a href="#features" class="btn btn--pink">Start Watching</a>
        <a href="#about" class="btn btn--ghost">Learn More</a>
      </div>
    </div>
  </section>

  <!-- Speed Line Divider -->
  <div class="divider-speed"></div>

  <!-- Features Section (Cards) -->
  <section id="features" class="section">
    <div class="section__header">
      <h2 class="section__title">Core Features</h2>
      <p class="section__subtitle">What makes retro anime design unforgettable</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <div class="card__icon">&#9998;</div>
        <h3 class="card__title">Bold Outlines</h3>
        <p class="card__text">
          Every element is defined by thick, confident ink lines that give the
          interface a hand-drawn illustrative quality rooted in cel animation.
        </p>
        <span class="card__tag">Visual Identity</span>
      </div>
      <div class="card">
        <div class="card__icon">&#127912;</div>
        <h3 class="card__title">Cel Shading</h3>
        <p class="card__text">
          Flat color fills with hard-edged shadow transitions replace smooth
          gradients, capturing the hand-painted aesthetic of traditional animation.
        </p>
        <span class="card__tag">Color Technique</span>
      </div>
      <div class="card">
        <div class="card__icon">&#128165;</div>
        <h3 class="card__title">Speed Lines</h3>
        <p class="card__text">
          Radiating lines from focal points inject dramatic energy into layouts,
          guiding the eye and creating a sense of motion and urgency.
        </p>
        <span class="card__tag">Dynamic Effects</span>
      </div>
      <div class="card">
        <div class="card__icon">&#128218;</div>
        <h3 class="card__title">Manga Panels</h3>
        <p class="card__text">
          Content is organized in asymmetric, angular panels that reference
          comic page composition and create dynamic visual rhythm.
        </p>
        <span class="card__tag">Layout System</span>
      </div>
      <div class="card">
        <div class="card__icon">&#128251;</div>
        <h3 class="card__title">Analog Texture</h3>
        <p class="card__text">
          Film grain, VHS scan lines, and halftone dot patterns add the warm,
          tactile quality of 80s/90s broadcast media.
        </p>
        <span class="card__tag">Atmosphere</span>
      </div>
      <div class="card">
        <div class="card__icon">&#10024;</div>
        <h3 class="card__title">Anime Sparkle</h3>
        <p class="card__text">
          Four-pointed star highlights and starburst effects on key elements
          recall the signature shimmer of classic anime key frames.
        </p>
        <span class="card__tag">Signature Detail</span>
      </div>
    </div>
  </section>

  <!-- Speed Line Divider -->
  <div class="divider-speed"></div>

  <!-- Manga Panel Section -->
  <section id="gallery" class="section">
    <div class="section__header">
      <h2 class="section__title">The Aesthetic Breakdown</h2>
      <p class="section__subtitle">Dissecting the visual language</p>
    </div>
    <div class="manga-panel">
      <div class="manga-panel__cell">
        <h3>Color Theory</h3>
        <p>
          Retro anime palettes mix saturated primaries against deep navy
          backgrounds. Colors were hand-mixed paints on celluloid, giving
          them a warm, slightly amber-shifted quality distinct from modern digital color.
        </p>
      </div>
      <div class="manga-panel__cell manga-panel__cell--accent">
        <h3>Typography</h3>
        <p>
          Bold display fonts with thick strokes carry the energy of anime
          title cards. Japanese katakana accents add atmospheric authenticity,
          while clean body fonts ensure readability.
        </p>
      </div>
      <div class="manga-panel__cell manga-panel__cell--accent">
        <h3>Composition</h3>
        <p>
          Diagonal lines create drama. Tilted angles and Dutch perspectives
          inject cinematic tension, while foreground elements like speed lines
          and halftone patterns add depth and immersion.
        </p>
      </div>
      <div class="manga-panel__cell">
        <h3>Atmosphere</h3>
        <p>
          The retro feel comes from layered textures: film grain, VHS fuzz,
          chromatic aberration, and scan lines. These artifacts are not flaws
          but features that provide warmth and nostalgia.
        </p>
      </div>
      <div class="manga-panel__cell manga-panel__cell--wide">
        <h3>The Soul of Cel Animation</h3>
        <p>
          At its heart, retro anime represents the peak of traditional hand-crafted
          animation. Every frame was drawn, inked, and painted by human hands on
          transparent celluloid, then photographed with analog cameras. This process
          created a visual warmth and subtle imperfection that digital tools can
          reference but never fully replicate. The aesthetic is a tribute to that craft.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="cta__content">
      <h2 class="cta__title">Ready to Transform?</h2>
      <p class="cta__text">
        Bring the energy and warmth of classic anime into your next project.
        Bold outlines, dramatic color, and analog soul.
      </p>
      <a href="#" class="btn btn--cyan">Get Started Now</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__brand">
      RetroAnime<span class="footer__kanji">&#12524;&#12488;&#12525;&#12450;&#12491;&#12513;</span>
    </div>
    <ul class="footer__links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p class="footer__copy">
      &copy; 2026 Retro Anime Design. Crafted with cel-shaded love.
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Outline everything with `border`** -- use `3px solid` dark borders on cards, buttons, panels, and images to maintain the cel-animation outline look across the entire interface
- **Use hard-edged box shadows** -- replace `box-shadow` blur values with `0` (e.g., `5px 5px 0 #0b0e1a`) to achieve the flat, cel-shaded shadow effect rather than soft diffused shadows
- **Layer pseudo-elements for texture** -- apply `::before` and `::after` with grain SVG backgrounds, halftone radial gradients, or scan line repeating-linear-gradients at low opacity to add analog warmth without impacting content accessibility
- **Use `repeating-conic-gradient` for speed lines** -- this CSS function creates radiating line patterns from a central point, perfect for hero backgrounds and section dividers without needing external images
- **Animate hover states with `translate`** -- shift elements -2px/-2px on hover and +2px/+2px on active to create the punchy, responsive feel of comic panel interactions; increase the box-shadow offset proportionally
- **Apply `text-shadow` with zero blur for outlined text** -- use multiple `text-shadow` declarations (top-left, top-right, bottom-left, bottom-right) with 0 blur to create the thick text outline effect characteristic of anime title cards
- **Implement manga layouts with CSS Grid** -- use `grid-template-columns` with varying span values and a 3-4px dark gap (`background` on the grid container) to simulate the thick-bordered panel divisions of manga pages
- **Test grain and halftone overlays at multiple sizes** -- these textures can appear too dense on small screens; use media queries to reduce opacity or increase `background-size` on mobile viewports for comfortable readability
