# New Objectivity Design Reference

## Overview

New Objectivity (German: Neue Sachlichkeit) is a design and art aesthetic rooted in the cultural upheaval of Weimar-era Germany (1919--1933). Coined by Gustav Friedrich Hartlaub for his 1925 exhibition at the Kunsthalle Mannheim, the term described a sharp turn away from the emotional turbulence of Expressionism toward sober realism, clinical precision, and unflinching social commentary. Where Expressionism distorted form to externalize feeling, New Objectivity stripped away sentimentality to reveal the world as it was -- often uncomfortably so.

The movement divided into two distinct tendencies: the Verists (Otto Dix, George Grosz, Max Beckmann), who wielded sharp satirical realism to expose the corruption, inequality, and moral decay of postwar German society; and the Classicists or Magic Realists (Christian Schad, Georg Schrimpf, Alexander Kanoldt), who pursued a more detached, almost clinical precision -- smooth surfaces, static compositions, and an eerie stillness that suggested hidden psychological depth beneath outward composure.

In architecture and design, Neue Sachlichkeit overlapped heavily with early Bauhaus functionalism and the International Style. Flat roofs, white plastered walls, long bands of windows, exposed industrial materials (steel, concrete, glass), and the complete rejection of ornament defined the built environment. The architect's task was to fulfill the object's function -- sachlich, objectively, factually -- without emotional attachment or stylistic pretension. This ethos drove large-scale social housing projects addressing Germany's postwar crisis, including Ernst May's Neue Frankfurt and the Weissenhofsiedlung directed by Mies van der Rohe.

Translated into contemporary web and interface design, New Objectivity manifests as austere, grid-driven layouts with muted color palettes dominated by grays, cool earth tones, and restrained accent colors. Typography is functional and authoritative -- sans-serif faces with strong vertical rhythm. Imagery, when present, is presented with documentary directness rather than decorative gloss. The aesthetic communicates seriousness, intellectual rigor, and a refusal to flatter. It is design that looks you in the eye and tells the truth, however uncomfortable that truth may be.

---

## Visual Characteristics

### Core Design Traits

- **Clinical precision** -- every element is rendered with exacting clarity; crisp edges, sharp alignments, no blur or softness
- **Muted, subdued color palette** -- dominated by grays, ochres, muted blues, and cool earth tones with restrained chromatic accents
- **Flat, unadorned surfaces** -- rejection of ornament, texture effects, or decorative flourish; surfaces are honest and minimal
- **Strong grid structure** -- rigid underlying grid governs all placement; mathematical order is visible and intentional
- **Documentary-style imagery** -- photography and illustration treated with journalistic directness, not artistic embellishment
- **Sharp typographic hierarchy** -- clean sans-serif typefaces with pronounced size contrast between heading levels
- **Stark contrast and tonal range** -- interplay between light and dark zones, often with cool lighting that flattens dimensionality
- **Satirical edge in content framing** -- layouts can carry an undertone of critical commentary through juxtaposition and visual irony
- **Industrial material references** -- visual textures evoking concrete, steel, glass, and white plaster
- **Geometric simplicity** -- rectangles, straight lines, and right angles dominate; curves appear sparingly and deliberately
- **Static, composed layouts** -- compositions feel settled and deliberate rather than dynamic or kinetic
- **Unbroken contour lines** -- elements are clearly delineated with precise, continuous edges

### Design Principles

- **Function dictates form** -- every design decision must serve a practical communication purpose; nothing exists merely for decoration
- **Objectivity over emotion** -- the design should present information factually, without manipulative sentimentality or artificial excitement
- **Honesty of materials** -- digital surfaces should not simulate materials they are not; transparency about the medium is essential
- **Social awareness** -- design can and should serve the public good; accessibility and clarity are moral obligations
- **Reduction to essentials** -- strip away everything that does not directly serve the user's understanding
- **Rational structure** -- layouts must be logically organized; the grid is the structural backbone of all composition
- **Detached precision** -- maintain a cool, analytical distance; the design observes and presents rather than persuades or seduces
- **Contextual integrity** -- every element must be appropriate to its context; no borrowed styles or gratuitous references

---

## Color Palette

The New Objectivity palette draws from the muted, often somber tones found in the paintings of Dix, Grosz, and Schad: cool grays, desaturated ochres, subdued blues, and the pale, almost waxy flesh tones of Weimar-era portraiture. Accents are restrained -- a deep red for critical emphasis, a steel blue for functional elements. The overall impression is sober, analytical, and stripped of chromatic excess.

| Swatch | Hex | Role / Usage |
|--------|-----|-------------|
| ![#2C2C2E](https://via.placeholder.com/20/2C2C2E/2C2C2E.png) | `#2C2C2E` | Primary text, headings, structural elements |
| ![#4A4A4D](https://via.placeholder.com/20/4A4A4D/4A4A4D.png) | `#4A4A4D` | Secondary text, body copy on light backgrounds |
| ![#7A7A7D](https://via.placeholder.com/20/7A7A7D/7A7A7D.png) | `#7A7A7D` | Tertiary text, captions, metadata |
| ![#B0AFA8](https://via.placeholder.com/20/B0AFA8/B0AFA8.png) | `#B0AFA8` | Borders, dividers, subtle structural lines |
| ![#D6D3CB](https://via.placeholder.com/20/D6D3CB/D6D3CB.png) | `#D6D3CB` | Secondary backgrounds, card surfaces |
| ![#EDEAE3](https://via.placeholder.com/20/EDEAE3/EDEAE3.png) | `#EDEAE3` | Primary background, warm off-white paper tone |
| ![#F5F4F0](https://via.placeholder.com/20/F5F4F0/F5F4F0.png) | `#F5F4F0` | Lightest background, white-adjacent neutral |
| ![#8C3A2B](https://via.placeholder.com/20/8C3A2B/8C3A2B.png) | `#8C3A2B` | Primary accent, critical emphasis, call-to-action |
| ![#6B2D22](https://via.placeholder.com/20/6B2D22/6B2D22.png) | `#6B2D22` | Hover/active state for red accent elements |
| ![#4A6670](https://via.placeholder.com/20/4A6670/4A6670.png) | `#4A6670` | Secondary accent, links, interactive elements |
| ![#3A525A](https://via.placeholder.com/20/3A525A/3A525A.png) | `#3A525A` | Hover/active state for blue-gray accent |
| ![#C4A96A](https://via.placeholder.com/20/C4A96A/C4A96A.png) | `#C4A96A` | Tertiary accent, muted gold, highlight details |
| ![#D8C4A0](https://via.placeholder.com/20/D8C4A0/D8C4A0.png) | `#D8C4A0` | Warm ochre, background tinting, decorative tone |
| ![#1A1A1C](https://via.placeholder.com/20/1A1A1C/1A1A1C.png) | `#1A1A1C` | Dark mode background, footer, high-contrast blocks |
| ![#E8D5B7](https://via.placeholder.com/20/E8D5B7/E8D5B7.png) | `#E8D5B7` | Flesh tone reference, portrait-context backgrounds |

### CSS Custom Properties

```css
:root {
  /* Text hierarchy */
  --no-text-primary: #2C2C2E;
  --no-text-secondary: #4A4A4D;
  --no-text-tertiary: #7A7A7D;
  --no-text-inverse: #F5F4F0;

  /* Backgrounds */
  --no-bg-primary: #EDEAE3;
  --no-bg-secondary: #D6D3CB;
  --no-bg-light: #F5F4F0;
  --no-bg-dark: #1A1A1C;
  --no-bg-ochre: #D8C4A0;

  /* Accents */
  --no-accent-red: #8C3A2B;
  --no-accent-red-dark: #6B2D22;
  --no-accent-blue: #4A6670;
  --no-accent-blue-dark: #3A525A;
  --no-accent-gold: #C4A96A;

  /* Structural */
  --no-border: #B0AFA8;
  --no-border-strong: #2C2C2E;
  --no-surface: #D6D3CB;

  /* Flesh / Portrait reference */
  --no-flesh-tone: #E8D5B7;

  /* Shadows (minimal, sharp) */
  --no-shadow-sm: 2px 2px 0 rgba(44, 44, 46, 0.10);
  --no-shadow-md: 4px 4px 0 rgba(44, 44, 46, 0.12);
}
```

---

## Typography

New Objectivity typography is functional, authoritative, and restrained. It favors geometric or grotesque sans-serifs that communicate clarity and rational order. Headings are set in medium-to-bold weights with tight leading, evoking the typography of Weimar-era publications and functionalist posters. Body text is highly legible, with generous line-height and neutral proportions. There is no room for decorative script or playful display faces -- every letterform serves the content.

### Recommended Web Fonts (Google Fonts)

| Font | Style | Best For |
|------|-------|----------|
| **Inter** | Humanist sans-serif, highly legible | Body text, UI elements, all-purpose |
| **IBM Plex Sans** | Neo-grotesque, industrial clarity | Headings and body, editorial layouts |
| **Source Sans 3** | Rational sans-serif, neutral | Body text, data-heavy layouts |
| **Archivo** | Grotesque with geometric leanings | Headlines, navigation, labels |
| **DM Sans** | Low-contrast geometric | Body text, captions, supporting copy |
| **Barlow** | Slightly condensed grotesque | Navigation, labels, compact layouts |
| **Jost** | Geometric sans (Futura-inspired) | Display headings, hero text |
| **Libre Franklin** | Franklin Gothic reinterpretation | Headings, editorial contexts |
| **Space Grotesk** | Geometric grotesque | Technical content, modern headings |
| **Roboto** | Neo-grotesque, mechanical | UI text, forms, data tables |

### Font Pairing Suggestions

| Heading Font | Body Font | Character |
|-------------|-----------|-----------|
| **Archivo** (700) | **Inter** (400) | Authoritative and precise |
| **IBM Plex Sans** (600) | **Source Sans 3** (400) | Industrial clarity, editorial |
| **Jost** (700) | **DM Sans** (400) | Functionalist with Weimar echo |
| **Libre Franklin** (700) | **Inter** (400) | Bold editorial, documentary |
| **Space Grotesk** (600) | **IBM Plex Sans** (400) | Technical, contemporary Sachlichkeit |

### Typography CSS Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Archivo', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  color: var(--no-text-primary);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

/* Display / Hero text */
.no-display {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  text-transform: uppercase;
}

/* Body text */
body {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--no-text-secondary);
}

/* Labels and captions */
.no-label {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--no-text-tertiary);
}

/* Block quote -- documentary voice */
.no-blockquote {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  font-style: italic;
  color: var(--no-text-secondary);
  border-left: 3px solid var(--no-accent-red);
  padding-left: 1.5rem;
  margin: 2rem 0;
  line-height: 1.7;
}
```

---

## Layout Principles

- **Rigid grid system** -- use a 12-column grid with consistent gutters (24--32px); every element aligns precisely to grid lines
- **Generous white space** -- let the background breathe; negative space communicates restraint and intellectual clarity
- **Clear sectional division** -- use thin horizontal rules (1--2px) to separate content blocks; avoid decorative dividers
- **Flat hierarchy** -- avoid deeply nested visual levels; two to three levels of depth are sufficient for most layouts
- **Left-aligned asymmetry** -- content anchored to the left with measured asymmetry; avoid centered layouts except for hero statements
- **Max-width containers** -- constrain content to 1000--1100px for comfortable reading; narrower than typical modern sites
- **Functional header area** -- navigation is compact, unadorned, and text-based; no hamburger menus on desktop
- **Column-based text flow** -- long-form content benefits from two-column layouts reminiscent of newspaper and journal design
- **Data-first presentation** -- prioritize information density and logical ordering; tables and lists over decorative cards
- **Minimal elevation** -- avoid drop shadows and layering effects; elements sit flat on the surface plane
- **Consistent vertical rhythm** -- maintain baseline grid alignment; spacing between elements follows a modular scale (8px base)
- **Restrained imagery** -- photographs are presented at documentary scale, never bleeding edge-to-edge without purpose

---

## CSS / Design Techniques

### Card Component

```css
.no-card {
  background: var(--no-bg-light);
  border: 1px solid var(--no-border);
  padding: 2rem;
  position: relative;
  transition: border-color 0.2s ease;
}

.no-card:hover {
  border-color: var(--no-border-strong);
}

/* Accent stripe along the top */
.no-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--no-accent-red);
}

.no-card__label {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--no-text-tertiary);
  margin-bottom: 0.75rem;
}

.no-card__title {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--no-text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.no-card__body {
  font-size: 0.95rem;
  color: var(--no-text-secondary);
  line-height: 1.7;
}

.no-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### Button Component

```css
.no-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--no-accent-red);
  color: var(--no-text-inverse);
  border: 2px solid var(--no-accent-red);
  border-radius: 0;
  padding: 12px 32px;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
}

.no-button:hover {
  background: var(--no-accent-red-dark);
  border-color: var(--no-accent-red-dark);
}

/* Secondary button -- outline */
.no-button--secondary {
  background: transparent;
  color: var(--no-text-primary);
  border-color: var(--no-border-strong);
}

.no-button--secondary:hover {
  background: var(--no-text-primary);
  color: var(--no-text-inverse);
  border-color: var(--no-text-primary);
}

/* Blue-gray variant */
.no-button--blue {
  background: var(--no-accent-blue);
  border-color: var(--no-accent-blue);
}

.no-button--blue:hover {
  background: var(--no-accent-blue-dark);
  border-color: var(--no-accent-blue-dark);
}

/* Minimal / text-only button */
.no-button--minimal {
  background: transparent;
  color: var(--no-accent-red);
  border: none;
  padding: 8px 0;
  letter-spacing: 0.06em;
  border-bottom: 1px solid transparent;
}

.no-button--minimal:hover {
  border-bottom-color: var(--no-accent-red);
}
```

### Navigation Bar

```css
.no-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2.5rem;
  border-bottom: 1px solid var(--no-border);
}

.no-nav__logo {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--no-text-primary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.no-nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.no-nav__links a {
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--no-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}

.no-nav__links a:hover {
  color: var(--no-accent-red);
  border-bottom-color: var(--no-accent-red);
}

.no-nav__links a.active {
  color: var(--no-text-primary);
  border-bottom-color: var(--no-text-primary);
}
```

### Hero Section

```css
.no-hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2.5rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.no-hero__content {
  max-width: 480px;
}

.no-hero__label {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--no-accent-red);
  margin-bottom: 1.25rem;
}

.no-hero__title {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--no-text-primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.no-hero__description {
  font-size: 1.05rem;
  color: var(--no-text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 400px;
}

.no-hero__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--no-surface);
  border: 1px solid var(--no-border);
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .no-hero {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem 2.5rem;
    gap: 2rem;
  }
}
```

### Section Divider

```css
.no-divider {
  border: none;
  height: 1px;
  background: var(--no-border);
  margin: 3rem auto;
  max-width: 1100px;
}

.no-divider--strong {
  height: 2px;
  background: var(--no-border-strong);
}

.no-divider--accent {
  height: 3px;
  background: var(--no-accent-red);
  max-width: 80px;
  margin: 2rem 0;
}
```

### Feature Grid

```css
.no-features {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
}

.no-features__header {
  margin-bottom: 3rem;
}

.no-features__header h2 {
  font-size: 1.75rem;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.no-features__header p {
  font-size: 1rem;
  color: var(--no-text-tertiary);
  max-width: 480px;
}

.no-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.no-feature-item {
  padding: 2rem 0;
  border-top: 2px solid var(--no-border-strong);
}

.no-feature-item__number {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--no-accent-red);
  margin-bottom: 1rem;
  letter-spacing: 0.06em;
}

.no-feature-item h3 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.no-feature-item p {
  font-size: 0.9rem;
  color: var(--no-text-secondary);
  line-height: 1.65;
}
```

### Testimony / Quote Block

```css
.no-quote-block {
  background: var(--no-bg-dark);
  color: var(--no-text-inverse);
  padding: 4rem 2.5rem;
}

.no-quote-block__inner {
  max-width: 700px;
  margin: 0 auto;
}

.no-quote-block__text {
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.no-quote-block__attribution {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.7;
}
```

### Data Table

```css
.no-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.no-table th {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--no-text-tertiary);
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid var(--no-border-strong);
}

.no-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--no-border);
  color: var(--no-text-secondary);
}

.no-table tr:hover td {
  background: var(--no-bg-secondary);
}
```

---

## Design Do's and Don'ts

### Do

- Use muted, desaturated colors that evoke sobriety and analytical distance
- Maintain strict grid alignment and consistent vertical rhythm throughout every layout
- Employ generous white space to communicate intellectual restraint and clarity
- Use sans-serif typefaces with clear hierarchical sizing for headings, body, and captions
- Present imagery with documentary directness -- no filters, no effects, no stylization
- Apply thin, precise rules and borders to delineate sections and structure
- Design with information density in mind -- tables, lists, and structured data are appropriate
- Allow the content to speak for itself; the design should serve, not compete with, the message

### Don't

- Use bright, saturated accent colors, neons, or playful gradients -- they contradict the sober tone
- Apply decorative ornament, rounded corners, or whimsical illustrations
- Add drop shadows, heavy elevation, or material-style depth simulation
- Use script, handwritten, or display typefaces -- they inject emotion where objectivity is needed
- Center-align large blocks of body text; left-alignment with a clear rag is more precise
- Overcrowd layouts with competing visual elements; let each component breathe
- Rely on animation or motion for storytelling -- static clarity is the priority
- Simulate vintage or distressed textures; the aesthetic is precise, not nostalgic or worn

---

## Related Aesthetics

| Aesthetic | Relationship to New Objectivity |
|-----------|-------------------------------|
| **Bauhaus** | Closest sibling; shared the Weimar context and functionalist principles, but Bauhaus embraced primary color and geometric abstraction where Neue Sachlichkeit favored muted realism |
| **International Typographic Style** | Direct descendant; Swiss designers formalized Neue Sachlichkeit's grid discipline and objective clarity into a systematic typographic methodology |
| **Constructivism** | Parallel avant-garde movement; shared the rejection of bourgeois aesthetics but pursued revolutionary dynamism rather than sober detachment |
| **Flat Design** | Digital descendant; applies the anti-ornament, function-first, flat-surface principles to modern UI without the critical social dimension |
| **Brutalism (Web)** | Shares the raw honesty and refusal to decorate, but Brutalism embraces deliberate roughness where Neue Sachlichkeit demands precision |
| **Minimalism** | Philosophical descendant; extends the reductive impulse but often strips away the social commentary that defined the original movement |
| **De Stijl** | Contemporary sibling; both rejected ornament and embraced geometry, but De Stijl was more abstractly utopian while Neue Sachlichkeit was grounded in observed reality |
| **Expressionism** | The direct predecessor and foil; Neue Sachlichkeit defined itself as a reaction against Expressionist emotional excess and formal distortion |
| **Social Realism** | Parallel global movement; shared the commitment to depicting social conditions truthfully, though with different political frameworks |
| **Dark Academia** | Modern aesthetic descendant; shares the muted palette, intellectual tone, and preference for structured typography, though filtered through nostalgia |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Objectivity -- Neue Sachlichkeit</title>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* ================================
       CSS CUSTOM PROPERTIES
    ================================ */
    :root {
      /* Text */
      --no-text-primary: #2C2C2E;
      --no-text-secondary: #4A4A4D;
      --no-text-tertiary: #7A7A7D;
      --no-text-inverse: #F5F4F0;

      /* Backgrounds */
      --no-bg-primary: #EDEAE3;
      --no-bg-secondary: #D6D3CB;
      --no-bg-light: #F5F4F0;
      --no-bg-dark: #1A1A1C;

      /* Accents */
      --no-accent-red: #8C3A2B;
      --no-accent-red-dark: #6B2D22;
      --no-accent-blue: #4A6670;
      --no-accent-blue-dark: #3A525A;
      --no-accent-gold: #C4A96A;

      /* Structural */
      --no-border: #B0AFA8;
      --no-border-strong: #2C2C2E;
      --no-surface: #D6D3CB;
    }

    /* ================================
       RESET & BASE
    ================================ */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--no-bg-primary);
      color: var(--no-text-secondary);
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Archivo', 'Helvetica Neue', sans-serif;
      font-weight: 700;
      color: var(--no-text-primary);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }

    a {
      color: var(--no-accent-blue);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: var(--no-accent-red);
    }

    img {
      display: block;
      max-width: 100%;
    }

    /* ================================
       NAVIGATION
    ================================ */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      padding: 1.25rem 2.5rem;
      border-bottom: 1px solid var(--no-border);
    }

    .nav__logo {
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--no-text-primary);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .nav__links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav__links a {
      font-family: 'Archivo', sans-serif;
      font-weight: 500;
      font-size: 0.8rem;
      color: var(--no-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
    }

    .nav__links a:hover {
      color: var(--no-accent-red);
      border-bottom-color: var(--no-accent-red);
    }

    /* ================================
       HERO SECTION
    ================================ */
    .hero {
      max-width: 1100px;
      margin: 0 auto;
      padding: 5rem 2.5rem 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .hero__label {
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--no-accent-red);
      margin-bottom: 1.25rem;
    }

    .hero__title {
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      line-height: 1.08;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .hero__description {
      font-size: 1.05rem;
      color: var(--no-text-secondary);
      line-height: 1.75;
      margin-bottom: 2rem;
      max-width: 420px;
    }

    .hero__visual {
      position: relative;
      aspect-ratio: 4 / 3;
      background: var(--no-surface);
      border: 1px solid var(--no-border);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__visual-inner {
      width: 70%;
      height: 60%;
      position: relative;
    }

    .hero__visual-rect {
      position: absolute;
      background: var(--no-accent-blue);
      width: 60%;
      height: 80%;
      top: 10%;
      left: 5%;
    }

    .hero__visual-rect--overlay {
      background: var(--no-accent-red);
      width: 50%;
      height: 60%;
      top: 25%;
      left: 35%;
      opacity: 0.85;
    }

    .hero__visual-line {
      position: absolute;
      height: 2px;
      width: 90%;
      background: var(--no-text-primary);
      bottom: 15%;
      left: 5%;
    }

    /* ================================
       BUTTONS
    ================================ */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 32px;
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 0;
      cursor: pointer;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    .btn--primary {
      background: var(--no-accent-red);
      color: var(--no-text-inverse);
      border: 2px solid var(--no-accent-red);
    }

    .btn--primary:hover {
      background: var(--no-accent-red-dark);
      border-color: var(--no-accent-red-dark);
      color: var(--no-text-inverse);
    }

    .btn--outline {
      background: transparent;
      color: var(--no-text-primary);
      border: 2px solid var(--no-border-strong);
    }

    .btn--outline:hover {
      background: var(--no-text-primary);
      color: var(--no-text-inverse);
    }

    /* ================================
       DIVIDER
    ================================ */
    .divider {
      border: none;
      height: 1px;
      background: var(--no-border);
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ================================
       PRINCIPLES / FEATURES SECTION
    ================================ */
    .principles {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 2.5rem;
    }

    .principles__header {
      margin-bottom: 3rem;
      max-width: 480px;
    }

    .principles__header h2 {
      font-size: 1.75rem;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    .principles__header p {
      font-size: 0.95rem;
      color: var(--no-text-tertiary);
    }

    .principles__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .principle-card {
      padding: 2rem 0;
      border-top: 2px solid var(--no-border-strong);
    }

    .principle-card__number {
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--no-accent-red);
      margin-bottom: 1rem;
      letter-spacing: 0.06em;
    }

    .principle-card h3 {
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .principle-card p {
      font-size: 0.9rem;
      color: var(--no-text-secondary);
      line-height: 1.65;
    }

    /* ================================
       STATEMENT / QUOTE SECTION
    ================================ */
    .statement {
      background: var(--no-bg-dark);
      color: var(--no-text-inverse);
      padding: 5rem 2.5rem;
    }

    .statement__inner {
      max-width: 700px;
      margin: 0 auto;
    }

    .statement__label {
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      opacity: 0.5;
      margin-bottom: 1.5rem;
    }

    .statement__text {
      font-family: 'Inter', sans-serif;
      font-size: 1.35rem;
      font-weight: 400;
      line-height: 1.75;
      margin-bottom: 1.5rem;
    }

    .statement__attribution {
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      opacity: 0.6;
    }

    /* ================================
       CONTENT CARDS SECTION
    ================================ */
    .cards-section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 2.5rem;
    }

    .cards-section__header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 2.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--no-border);
    }

    .cards-section__header h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--no-bg-light);
      border: 1px solid var(--no-border);
      padding: 2rem;
      position: relative;
      transition: border-color 0.2s ease;
    }

    .card:hover {
      border-color: var(--no-border-strong);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--no-accent-red);
    }

    .card__label {
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--no-text-tertiary);
      margin-bottom: 0.75rem;
    }

    .card__title {
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--no-text-primary);
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }

    .card__body {
      font-size: 0.9rem;
      color: var(--no-text-secondary);
      line-height: 1.7;
    }

    .card__link {
      display: inline-block;
      margin-top: 1.25rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--no-accent-red);
      border-bottom: 1px solid transparent;
    }

    .card__link:hover {
      border-bottom-color: var(--no-accent-red);
      color: var(--no-accent-red);
    }

    /* ================================
       DATA TABLE SECTION
    ================================ */
    .table-section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 2.5rem;
    }

    .table-section h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--no-text-tertiary);
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 2px solid var(--no-border-strong);
    }

    .data-table td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--no-border);
      font-size: 0.9rem;
    }

    .data-table tr:hover td {
      background: var(--no-bg-secondary);
    }

    .data-table .accent {
      color: var(--no-accent-red);
      font-weight: 500;
    }

    /* ================================
       CTA SECTION
    ================================ */
    .cta {
      background: var(--no-accent-red);
      color: var(--no-text-inverse);
      padding: 4rem 2.5rem;
      text-align: center;
    }

    .cta h2 {
      color: var(--no-text-inverse);
      font-size: clamp(1.5rem, 3vw, 2.25rem);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .cta p {
      font-size: 1rem;
      max-width: 480px;
      margin: 0 auto 2rem;
      opacity: 0.9;
    }

    .cta .btn--inverse {
      background: var(--no-bg-light);
      color: var(--no-accent-red);
      border: 2px solid var(--no-bg-light);
    }

    .cta .btn--inverse:hover {
      background: var(--no-text-primary);
      color: var(--no-text-inverse);
      border-color: var(--no-text-primary);
    }

    /* ================================
       FOOTER
    ================================ */
    .footer {
      background: var(--no-bg-dark);
      padding: 3rem 2.5rem;
    }

    .footer__inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }

    .footer__col h4 {
      color: var(--no-text-inverse);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
      opacity: 0.6;
    }

    .footer__col ul {
      list-style: none;
    }

    .footer__col ul li {
      margin-bottom: 0.5rem;
    }

    .footer__col ul a {
      color: var(--no-text-inverse);
      font-size: 0.85rem;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    .footer__col ul a:hover {
      opacity: 1;
      color: var(--no-text-inverse);
    }

    .footer__bottom {
      max-width: 1100px;
      margin: 2rem auto 0;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(245, 244, 240, 0.1);
      font-size: 0.8rem;
      color: var(--no-text-inverse);
      opacity: 0.4;
    }

    /* ================================
       RESPONSIVE
    ================================ */
    @media (max-width: 768px) {
      .nav {
        padding: 1rem 1.5rem;
      }

      .nav__links {
        gap: 1rem;
      }

      .hero {
        grid-template-columns: 1fr;
        padding: 3rem 1.5rem 2.5rem;
        gap: 2rem;
      }

      .principles__grid {
        grid-template-columns: 1fr;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .footer__inner {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .table-section {
        padding: 2.5rem 1.5rem;
        overflow-x: auto;
      }
    }
  </style>
</head>
<body>

  <!-- ======================== NAVIGATION ======================== -->
  <nav class="nav">
    <a href="#" class="nav__logo">Sachlichkeit</a>
    <ul class="nav__links">
      <li><a href="#">Archive</a></li>
      <li><a href="#">Analysis</a></li>
      <li><a href="#">Documents</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>

  <!-- ======================== HERO ======================== -->
  <section class="hero">
    <div class="hero__content">
      <p class="hero__label">Neue Sachlichkeit -- 1919-1933</p>
      <h1 class="hero__title">Sharp Realism, Clinical Precision</h1>
      <p class="hero__description">
        The world observed without sentiment. Design stripped to its functional
        core, serving truth over comfort, clarity over decoration.
      </p>
      <div style="display: flex; gap: 1rem;">
        <a href="#" class="btn btn--primary">Explore Archive</a>
        <a href="#" class="btn btn--outline">Read More</a>
      </div>
    </div>
    <div class="hero__visual">
      <div class="hero__visual-inner">
        <div class="hero__visual-rect"></div>
        <div class="hero__visual-rect hero__visual-rect--overlay"></div>
        <div class="hero__visual-line"></div>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- ======================== PRINCIPLES ======================== -->
  <section class="principles">
    <div class="principles__header">
      <h2>Guiding Principles</h2>
      <p>Design shaped by objective analysis, social awareness, and the rejection of decorative excess.</p>
    </div>
    <div class="principles__grid">
      <div class="principle-card">
        <div class="principle-card__number">01</div>
        <h3>Objectivity</h3>
        <p>Every design decision is grounded in rational analysis. The object is examined for what it is, not what we wish it to be.</p>
      </div>
      <div class="principle-card">
        <div class="principle-card__number">02</div>
        <h3>Function</h3>
        <p>Form emerges from purpose. Architecture and design fulfill objective requirements without stylistic pretension.</p>
      </div>
      <div class="principle-card">
        <div class="principle-card__number">03</div>
        <h3>Precision</h3>
        <p>Clinical attention to detail. Unbroken contour lines, measured proportions, and meticulous execution define every element.</p>
      </div>
      <div class="principle-card">
        <div class="principle-card__number">04</div>
        <h3>Social Awareness</h3>
        <p>Design exists within society, not above it. The Verist tradition demands that we confront reality, not embellish it.</p>
      </div>
      <div class="principle-card">
        <div class="principle-card__number">05</div>
        <h3>Restraint</h3>
        <p>Chromatic sobriety. Muted palettes, measured spacing, and the absence of ornament communicate intellectual clarity.</p>
      </div>
      <div class="principle-card">
        <div class="principle-card__number">06</div>
        <h3>Honesty</h3>
        <p>Materials are what they are. Surfaces do not simulate. The medium is acknowledged, not disguised.</p>
      </div>
    </div>
  </section>

  <hr class="divider">

  <!-- ======================== STATEMENT ======================== -->
  <section class="statement">
    <div class="statement__inner">
      <p class="statement__label">Documentation</p>
      <p class="statement__text">
        "The object, the subject matter, was scrutinized in order to fulfill its
        function and serve its user as best as possible. The way in which this
        was approached was sachlich -- objectively and factually -- without
        emotional attachment."
      </p>
      <p class="statement__attribution">-- On the Principles of Neue Sachlichkeit</p>
    </div>
  </section>

  <!-- ======================== CONTENT CARDS ======================== -->
  <section class="cards-section">
    <div class="cards-section__header">
      <h2>Case Studies</h2>
      <a href="#" class="btn btn--outline" style="font-size: 0.7rem; padding: 8px 20px;">View All</a>
    </div>
    <div class="card-grid">
      <article class="card">
        <p class="card__label">Verist Approach</p>
        <h3 class="card__title">Social Commentary Through Design</h3>
        <p class="card__body">
          The Verist wing -- Otto Dix, George Grosz -- tore apart the surface
          of Weimar society with merciless precision, exposing corruption and
          moral decay beneath bourgeois respectability.
        </p>
        <a href="#" class="card__link">Read Analysis</a>
      </article>
      <article class="card">
        <p class="card__label">Classicist Approach</p>
        <h3 class="card__title">Clinical Detachment and Stillness</h3>
        <p class="card__body">
          Christian Schad and the Classicists pursued an almost photographic
          precision -- smooth surfaces, static compositions, and intimate
          knowledge rendered with empirical detachment.
        </p>
        <a href="#" class="card__link">Read Analysis</a>
      </article>
      <article class="card">
        <p class="card__label">Architecture</p>
        <h3 class="card__title">Functionalism in the Built Environment</h3>
        <p class="card__body">
          Flat roofs, white walls, steel-and-glass construction, and long
          window bands. Architecture serving objective functions, free from
          historical ornament or personal taste.
        </p>
        <a href="#" class="card__link">Read Analysis</a>
      </article>
    </div>
  </section>

  <hr class="divider">

  <!-- ======================== DATA TABLE ======================== -->
  <section class="table-section">
    <h2>Key Figures</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Contribution</th>
          <th>Wing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="accent">Otto Dix</td>
          <td>Painter</td>
          <td>Merciless portraiture of Weimar society and war</td>
          <td>Verist</td>
        </tr>
        <tr>
          <td class="accent">George Grosz</td>
          <td>Painter, Satirist</td>
          <td>Caricatural social critique of bourgeois decadence</td>
          <td>Verist</td>
        </tr>
        <tr>
          <td class="accent">Christian Schad</td>
          <td>Painter</td>
          <td>Clinical precision and intimate, detached portraiture</td>
          <td>Classicist</td>
        </tr>
        <tr>
          <td class="accent">Max Beckmann</td>
          <td>Painter</td>
          <td>Monumental figures, existential narrative</td>
          <td>Independent</td>
        </tr>
        <tr>
          <td class="accent">Ernst May</td>
          <td>Architect</td>
          <td>Neue Frankfurt social housing program</td>
          <td>Architecture</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- ======================== CTA ======================== -->
  <section class="cta">
    <h2>Design With Clarity</h2>
    <p>
      The New Objectivity demands that we look at the world as it is.
      Build interfaces that inform, not inflate.
    </p>
    <a href="#" class="btn btn--inverse">Get Started</a>
  </section>

  <!-- ======================== FOOTER ======================== -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col">
        <h4>Archive</h4>
        <ul>
          <li><a href="#">Paintings</a></li>
          <li><a href="#">Architecture</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Typography</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Design Guide</a></li>
          <li><a href="#">Color Reference</a></li>
          <li><a href="#">Font Pairings</a></li>
          <li><a href="#">Component Library</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>About</h4>
        <ul>
          <li><a href="#">Methodology</a></li>
          <li><a href="#">Contributors</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <p class="footer__bottom">
      Neue Sachlichkeit. Weimar Republic, 1919--1933. Objectivity in all things.
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Start with the palette** -- set up CSS custom properties for the muted New Objectivity color system before building any components; the restrained tones unify every element
- **Prioritize typographic hierarchy** -- establish clear size, weight, and spacing distinctions between headings, body, labels, and captions; the aesthetic depends on precision in type
- **Use thin borders, not shadows** -- delineate sections and cards with 1--2px solid borders in the muted gray rather than box-shadows; flat surfaces are fundamental to the style
- **Limit accent color usage** -- the deep red and steel blue accents should appear sparingly, only for interactive elements, labels, and critical emphasis; overuse destroys the sober tone
- **Design content-first** -- build layouts around actual text and data rather than placeholder imagery; New Objectivity rewards information density and structured presentation
- **Test on muted displays** -- the subtle palette distinctions between background tones and borders require careful contrast testing; ensure WCAG AA compliance despite the narrow tonal range
- **Avoid decorative motion** -- if animation is used at all, restrict it to subtle opacity or color transitions on hover states; the aesthetic is fundamentally static and composed
- **Embrace asymmetry within the grid** -- left-aligned layouts with deliberate offset columns create the composed-but-not-centered quality characteristic of Sachlichkeit design; avoid symmetrical centering for body content
