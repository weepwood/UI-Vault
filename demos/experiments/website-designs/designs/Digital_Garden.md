# Digital Garden Design Reference

## Overview

The Digital Garden is a web design aesthetic rooted in the philosophy of personal knowledge management, interconnected note-taking, and the organic cultivation of ideas over time. Popularized by thinkers like Maggie Appleton, Andy Matuschak, and communities around tools such as Obsidian and Roam Research, the Digital Garden rejects the reverse-chronological blog format in favor of a wiki-like structure where pages are densely linked, continuously evolving, and never truly "finished." Each note is treated as a living plant: seedlings represent nascent ideas, budding notes are partially developed thoughts, and evergreen notes are fully mature concepts that have been refined through sustained attention.

Visually, the Digital Garden aesthetic draws from the warmth and tactility of old encyclopedias, personal journals, library card catalogs, and botanical illustrations. The palette is earthy and inviting: warm creams, soft sage greens, muted browns, and gentle amber tones create a reading environment that feels like a sunlit study or a well-worn library rather than a corporate dashboard. Typography leans toward readable serifs and humanist sans-serifs that evoke printed books, academic papers, and hand-annotated marginalia. Layouts favor generous whitespace, comfortable line lengths, and a single-column or asymmetric two-column structure that foregrounds content while offering unobtrusive navigation through backlinks, tag clusters, and optional graph visualizations.

The aesthetic embraces imperfection and process. Growth indicators (seedling, budding, evergreen icons), timestamps showing when a note was last tended, and explicit status labels signal that knowledge is alive and evolving. Hover previews allow readers to glimpse linked notes without navigating away, and interactive node graphs reveal the underlying web of connections. The overall experience is one of wandering through a personal library: warm, contemplative, non-linear, and deeply human. Unlike minimalist design movements that strip away personality, the Digital Garden celebrates the idiosyncratic voice of its author, encouraging readers to explore, linger, and discover unexpected connections between ideas.

---

## Visual Characteristics

### Core Design Traits

- **Warm, earthy color palette**: Cream backgrounds, sage greens, muted browns, and amber accents create a cozy, library-like reading environment that invites prolonged exploration
- **Readable serif typography**: Book-like typefaces such as Georgia, Lora, or Crimson Text anchor the body text, evoking the experience of reading a well-set printed volume
- **Dense internal linking**: Inline wikilinks and backlinks are styled distinctly from external links, often with dotted underlines, subtle highlight colors, or small link-preview icons
- **Growth status indicators**: Seedling, budding, and evergreen icons or labels mark the maturity level of each note, signaling ongoing cultivation rather than finality
- **Hover link previews**: Tooltip-style popups display a snippet of the linked note on hover, allowing non-linear browsing without full page navigation
- **Interactive knowledge graph**: An optional SVG or Canvas-based node graph visualizes connections between notes, typically using force-directed layouts with gentle spring physics
- **Generous whitespace and comfortable measure**: Content columns are capped at 65-75 characters per line with ample margins, prioritizing readability over information density
- **Botanical and organic motifs**: Leaf icons, vine-like decorative borders, seed imagery, and garden metaphors appear as subtle visual accents throughout the interface
- **Visible metadata**: Creation dates, last-tended timestamps, word counts, and tag clusters are displayed openly, emphasizing transparency and process
- **Subtle paper-like textures**: Faint grain, off-white backgrounds, or soft noise overlays lend a tactile quality reminiscent of aged paper or a notebook page
- **Non-linear navigation patterns**: Breadcrumbs, tag clouds, backlink sections, and "related notes" panels replace conventional hierarchical menus
- **Warm, low-contrast color relationships**: Text-to-background ratios are comfortable rather than stark, using dark brown or charcoal instead of pure black on warm off-white instead of pure white

### Design Principles

- **Content over chrome**: Every visual element should serve the reading and exploration experience; decorative flourishes are minimal and always purposeful
- **Growth over perfection**: The design communicates that content is continuously evolving; status labels and timestamps reinforce that notes are living documents
- **Connections over hierarchy**: Navigation emphasizes lateral links between concepts rather than rigid top-down taxonomies; readers wander rather than drill down
- **Warmth over sterility**: Color choices, typography, and spacing should feel inviting and personal, like entering someone's private study or greenhouse
- **Transparency over polish**: Visible metadata, edit histories, and maturity indicators show the work behind the ideas rather than hiding the process
- **Readability over novelty**: Typographic choices prioritize long-form reading comfort; experimental layouts never compromise the ability to absorb dense text
- **Exploration over consumption**: The interface encourages serendipitous discovery through backlinks, graph views, and related-note suggestions rather than linear scrolling
- **Personal voice over brand uniformity**: Each garden reflects its author's personality through custom typography, color choices, and organizational idiosyncrasies

---

## Color Palette

The Digital Garden palette is drawn from the natural world of a well-tended garden: warm soil tones, leafy greens, sun-bleached paper, and the amber glow of a desk lamp. The overall feeling is warm, approachable, and easy on the eyes during long reading sessions. Backgrounds lean toward cream and parchment rather than pure white, while text uses dark brown or warm charcoal to avoid the harshness of pure black.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Parchment Cream | `#FAF6F0` | Primary page background; warm off-white base |
| Notebook White | `#FFFFFF` | Card and note surfaces for subtle lift |
| Garden Sage | `#6B8F71` | Primary accent; links, icons, active states |
| Deep Fern | `#3D6B4F` | Headings, strong emphasis, hover states |
| Warm Soil | `#5C4B3A` | Primary body text; warm dark brown |
| Bark Brown | `#3E2F23` | Bold text, high-emphasis headings |
| Amber Glow | `#D4A853` | Highlights, callout borders, star ratings |
| Soft Marigold | `#E8C56D` | Secondary highlight, tag backgrounds |
| Seedling Green | `#A8D5A2` | Growth indicators, success states, new notes |
| Budding Olive | `#8BA888` | Intermediate growth indicators, secondary accent |
| Dusty Rose | `#C4A0A0` | Tertiary accent, decorative elements |
| Fog Gray | `#B0A99F` | Muted secondary text, borders, dividers |
| Twilight Charcoal | `#2C2C2C` | Dark-mode text alternative, code blocks |
| Linen Tan | `#F0E8DA` | Alternate surface, sidebar background |
| Pressed Leaf | `#4A7C59` | Graph nodes, internal link underlines |

### CSS Custom Properties

```css
:root {
  --dg-parchment: #FAF6F0;
  --dg-white: #FFFFFF;
  --dg-sage: #6B8F71;
  --dg-fern: #3D6B4F;
  --dg-soil: #5C4B3A;
  --dg-bark: #3E2F23;
  --dg-amber: #D4A853;
  --dg-marigold: #E8C56D;
  --dg-seedling: #A8D5A2;
  --dg-budding: #8BA888;
  --dg-rose: #C4A0A0;
  --dg-fog: #B0A99F;
  --dg-charcoal: #2C2C2C;
  --dg-linen: #F0E8DA;
  --dg-leaf: #4A7C59;
}
```

---

## Typography

Digital Garden typography is designed for sustained, comfortable reading of dense, idea-rich text. Serif fonts dominate body copy, evoking the printed book or academic journal. Headings use either a slightly bolder weight of the same serif or a contrasting humanist sans-serif. Monospace fonts appear in code blocks, wikilink syntax, and metadata displays. The overall typographic tone is scholarly but approachable, never cold or corporate.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Lora** | 400, 500, 600, 700 | Body text; elegant transitional serif with excellent readability | [Lora](https://fonts.google.com/specimen/Lora) |
| **Source Serif 4** | 300, 400, 600 | Body text alternative; open-source serif inspired by scholarly publishing | [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) |
| **Inter** | 400, 500, 600 | UI elements, navigation, metadata labels; clean humanist sans-serif | [Inter](https://fonts.google.com/specimen/Inter) |
| **IBM Plex Sans** | 400, 500, 600 | Headings and navigation; warm and technical without being cold | [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) |
| **IBM Plex Mono** | 400, 500 | Code blocks, wikilink syntax, metadata; readable monospace | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| **Cormorant Garamond** | 400, 500, 600 | Display headings; refined old-style serif for large text | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| IBM Plex Sans 600 | Lora 400 | Scholarly but modern; clear hierarchy between navigation and reading |
| Cormorant Garamond 500 | Source Serif 4 400 | Classic literary garden; elegant and deeply bookish |
| Inter 600 | Lora 400 | Clean and functional; foregrounds content with minimal friction |
| Lora 700 | Lora 400 | Single-family harmony; cohesive and understated |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

body {
  font-family: 'Lora', 'Georgia', 'Times New Roman', serif;
  font-size: 1.125rem;
  line-height: 1.85;
  color: #5C4B3A;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #3D6B4F;
  line-height: 1.3;
}

code, pre, .wikilink-syntax {
  font-family: 'IBM Plex Mono', 'Menlo', 'Consolas', monospace;
  font-size: 0.9em;
}

.metadata, .note-status, .tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #B0A99F;
}
```

---

## Layout Principles

- **Single-column reading pane with optional sidebar**: The primary content area should be a comfortable 640-720px wide, with an optional collapsible sidebar for backlinks, table of contents, or graph navigation
- **Comfortable line length (60-75 characters)**: Body text should never span the full viewport; cap the measure at a readable width to reduce eye strain during long reading sessions
- **Generous vertical rhythm**: Use consistent spacing multiples (e.g., 8px base unit) with ample paragraph spacing (1.5-2em between paragraphs) to let dense ideas breathe
- **Sticky or floating table of contents**: For longer notes, a gently positioned TOC in the margin or sidebar helps readers orient themselves within the document
- **Backlink section at the bottom**: A dedicated section below each note listing all other notes that link to it, styled as a quiet panel with muted background
- **Stacked-panes layout (optional)**: Following Andy Matuschak's sliding-pane model, allow multiple notes to be open simultaneously in horizontal stacked columns for comparison and cross-referencing
- **Responsive narrowing**: On mobile, collapse sidebars into toggleable drawers, stack panes vertically, and increase body font size slightly for thumb-scrolling comfort
- **Graph view as supplementary navigation**: An interactive force-directed graph of note connections can appear as a sidebar widget, full-page view, or modal overlay, but should never replace text-based navigation
- **Clear visual hierarchy for note metadata**: Growth status, tags, dates, and word count appear in a compact header or footer zone that is visually distinct from the note body
- **Card-based index pages**: Overview or index pages display notes as cards with title, excerpt, growth status, and tag pills, arranged in a responsive grid or masonry layout
- **Breadcrumb trails for context**: Show the path of links that brought the reader to the current note, enabling easy backtracking through the exploration chain

---

## CSS / Design Techniques

### Digital Garden Card

```css
.garden-card {
  background: var(--dg-white);
  border: 1px solid rgba(107, 143, 113, 0.15);
  border-radius: 12px;
  padding: 28px 32px;
  box-shadow: 0 1px 4px rgba(92, 75, 58, 0.06);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  position: relative;
}

.garden-card:hover {
  box-shadow: 0 4px 16px rgba(92, 75, 58, 0.1);
  transform: translateY(-2px);
}

.garden-card .note-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--dg-sage);
  margin-bottom: 12px;
}

.garden-card .note-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dg-bark);
  margin-bottom: 8px;
  line-height: 1.35;
}

.garden-card .note-excerpt {
  font-family: 'Lora', serif;
  font-size: 0.95rem;
  color: var(--dg-soil);
  line-height: 1.7;
}

.garden-card .tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.garden-card .tag {
  background: rgba(107, 143, 113, 0.1);
  color: var(--dg-fern);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
}
```

### Digital Garden Button

```css
.garden-button {
  background: var(--dg-sage);
  color: var(--dg-parchment);
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(61, 107, 79, 0.2);
}

.garden-button:hover {
  background: var(--dg-fern);
  box-shadow: 0 2px 8px rgba(61, 107, 79, 0.3);
  transform: translateY(-1px);
}

.garden-button--secondary {
  background: transparent;
  color: var(--dg-sage);
  border: 1.5px solid var(--dg-sage);
  box-shadow: none;
}

.garden-button--secondary:hover {
  background: rgba(107, 143, 113, 0.08);
  box-shadow: none;
  transform: none;
}
```

### Digital Garden Navigation

```css
.garden-nav {
  background: var(--dg-parchment);
  border-bottom: 1px solid rgba(176, 169, 159, 0.3);
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(250, 246, 240, 0.92);
}

.garden-nav .logo {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--dg-fern);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.garden-nav .logo .leaf-icon {
  font-size: 1.2rem;
}

.garden-nav .nav-links {
  display: flex;
  gap: 4px;
  list-style: none;
}

.garden-nav .nav-links a {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--dg-soil);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  transition: background 0.15s ease, color 0.15s ease;
}

.garden-nav .nav-links a:hover,
.garden-nav .nav-links a.active {
  background: rgba(107, 143, 113, 0.1);
  color: var(--dg-fern);
}

.garden-nav .search-trigger {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--dg-fog);
  background: rgba(176, 169, 159, 0.12);
  border: 1px solid rgba(176, 169, 159, 0.25);
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
```

### Digital Garden Hero

```css
.garden-hero {
  background: linear-gradient(175deg, var(--dg-parchment) 0%, var(--dg-linen) 60%, rgba(168, 213, 162, 0.12) 100%);
  padding: 80px 40px 64px;
  text-align: center;
  position: relative;
}

.garden-hero h1 {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 3rem;
  font-weight: 500;
  color: var(--dg-bark);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.garden-hero .subtitle {
  font-family: 'Lora', serif;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--dg-soil);
  max-width: 540px;
  margin: 0 auto 24px;
  line-height: 1.7;
  opacity: 0.85;
}

.garden-hero .stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--dg-fog);
}

.garden-hero .stats strong {
  display: block;
  font-size: 1.5rem;
  color: var(--dg-fern);
  font-weight: 600;
}
```

### Wikilink and Backlink Styles

```css
/* Internal wikilinks - distinct from external links */
a.wikilink {
  color: var(--dg-fern);
  text-decoration: none;
  border-bottom: 1.5px dotted var(--dg-sage);
  padding-bottom: 1px;
  transition: border-color 0.15s ease, color 0.15s ease;
}

a.wikilink:hover {
  color: var(--dg-sage);
  border-bottom-style: solid;
  border-color: var(--dg-sage);
}

/* External links */
a.external {
  color: var(--dg-soil);
  text-decoration: underline;
  text-decoration-color: rgba(92, 75, 58, 0.3);
  text-underline-offset: 3px;
}

a.external::after {
  content: '\2197';
  font-size: 0.7em;
  margin-left: 2px;
  opacity: 0.5;
}

/* Hover preview tooltip */
.link-preview {
  position: absolute;
  background: var(--dg-white);
  border: 1px solid rgba(107, 143, 113, 0.2);
  border-radius: 10px;
  padding: 16px 20px;
  max-width: 320px;
  box-shadow: 0 8px 24px rgba(92, 75, 58, 0.12);
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--dg-soil);
  z-index: 200;
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.link-preview.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Backlinks panel */
.backlinks-panel {
  background: var(--dg-linen);
  border-radius: 12px;
  padding: 24px 28px;
  margin-top: 48px;
  border: 1px solid rgba(176, 169, 159, 0.2);
}

.backlinks-panel h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--dg-fog);
  margin-bottom: 16px;
}

.backlinks-panel .backlink-item {
  padding: 8px 0;
  border-bottom: 1px solid rgba(176, 169, 159, 0.15);
}

.backlinks-panel .backlink-item:last-child {
  border-bottom: none;
}

.backlinks-panel .backlink-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  color: var(--dg-fern);
  font-size: 0.95rem;
}

.backlinks-panel .backlink-excerpt {
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  color: var(--dg-fog);
  margin-top: 4px;
  line-height: 1.5;
}
```

### Growth Status Badges

```css
.note-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 12px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.note-badge--seedling {
  background: rgba(168, 213, 162, 0.2);
  color: #4A7C59;
}

.note-badge--seedling::before {
  content: '\1F331';
  font-size: 0.85em;
}

.note-badge--budding {
  background: rgba(139, 168, 136, 0.2);
  color: #3D6B4F;
}

.note-badge--budding::before {
  content: '\1F33F';
  font-size: 0.85em;
}

.note-badge--evergreen {
  background: rgba(107, 143, 113, 0.15);
  color: #3D6B4F;
}

.note-badge--evergreen::before {
  content: '\1F332';
  font-size: 0.85em;
}
```

### Knowledge Graph Node

```css
.graph-container {
  background: var(--dg-parchment);
  border: 1px solid rgba(176, 169, 159, 0.2);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.graph-node {
  fill: var(--dg-sage);
  stroke: var(--dg-parchment);
  stroke-width: 2;
  cursor: pointer;
  transition: fill 0.15s ease;
}

.graph-node:hover {
  fill: var(--dg-fern);
}

.graph-node--active {
  fill: var(--dg-amber);
  r: 8;
}

.graph-link {
  stroke: rgba(176, 169, 159, 0.35);
  stroke-width: 1;
}

.graph-link--active {
  stroke: var(--dg-sage);
  stroke-width: 1.5;
}

.graph-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 11px;
  fill: var(--dg-soil);
  pointer-events: none;
}
```

### Callout Block

```css
.garden-callout {
  background: rgba(212, 168, 83, 0.08);
  border-left: 3px solid var(--dg-amber);
  border-radius: 0 10px 10px 0;
  padding: 20px 24px;
  margin: 24px 0;
  font-family: 'Lora', serif;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--dg-soil);
}

.garden-callout .callout-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dg-amber);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
```

---

## Design Do's and Don'ts

### Do's

- **Use dotted underlines for internal wikilinks** to visually distinguish them from standard external hyperlinks and reinforce the interconnected nature of the garden
- **Display note growth status** with seedling, budding, and evergreen indicators so readers understand the maturity and reliability of each piece of content
- **Provide a backlinks section** at the bottom of each note showing all notes that reference the current one, encouraging exploration of related ideas
- **Use warm, off-white backgrounds** like cream or parchment tones to create a comfortable long-reading environment that avoids the clinical feel of pure white
- **Prioritize readable body typography** with generous line-height (1.7-1.9), comfortable font size (17-19px), and capped line length (65-75 characters)
- **Include hover previews for internal links** so readers can glimpse connected notes without full navigation, supporting non-linear exploration
- **Show last-tended dates** rather than only publication dates to reinforce the idea that notes are continuously cultivated and updated
- **Let the author's personal voice shine** through custom color choices, idiosyncratic organization, and visible thinking-in-progress

### Don'ts

- **Avoid pure black text on pure white backgrounds**: the Digital Garden aesthetic relies on warm tonal relationships; use dark brown on cream instead
- **Do not impose rigid chronological ordering**: gardens are organized by topic and connection, not by date; avoid blog-style reverse-chronological layouts
- **Avoid corporate design systems**: the aesthetic is personal and handcrafted; Material Design, Bootstrap defaults, or corporate blue palettes undermine the warmth
- **Do not hide the process**: polished, "finished" presentations contradict the garden ethos; visible growth indicators and edit histories are features, not flaws
- **Avoid aggressive call-to-action patterns**: no pop-up modals, sticky banners, or attention-grabbing CTAs; the garden invites gentle exploration, not conversion pressure
- **Do not rely solely on the graph view for navigation**: while visually appealing, graph views are supplementary; always provide text-based navigation through backlinks, tags, and search
- **Avoid overly dense information layouts**: resist the temptation to cram sidebars, widgets, and metadata panels around the content; let the note body breathe
- **Do not use cold or neon accent colors**: electric blue, hot pink, or fluorescent green clash with the earthy, warm-toned palette that defines the aesthetic

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Dark Academia** | Shares the scholarly, book-loving atmosphere and serif typography, but Dark Academia is moody and somber where Digital Garden is warm and sunlit |
| **Cottagecore** | Both use earthy palettes and organic motifs, but Cottagecore is pastoral and decorative while Digital Garden is knowledge-focused and structurally wiki-like |
| **Hygge** | Shares the emphasis on warmth, comfort, and inviting atmospheres; Hygge focuses on physical coziness while Digital Garden applies it to intellectual spaces |
| **Flat Design** | Both value clean layouts and clear typography, but Flat Design is neutral and system-like while Digital Garden is personal and warm-toned |
| **Japandi** | Shares minimalist restraint and natural material references, but Japandi is cooler and more austere where Digital Garden embraces visible complexity |
| **Wabi-Sabi** | Both celebrate imperfection and organic growth, but Wabi-Sabi is rooted in Japanese aesthetics while Digital Garden draws from Western library and botanical traditions |
| **Arts and Crafts** | Shares the rejection of industrial uniformity and love of handmade quality; Arts and Crafts focuses on physical craft while Digital Garden applies similar values to digital knowledge work |
| **Earth Tones** | Shares the warm, natural color palette foundation; Earth Tones is a broader color movement while Digital Garden adds specific structural and navigational patterns on top |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Digital Garden</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       DIGITAL GARDEN - Quick-Start Template
       ============================================ */

    /* --- Reset & Base --- */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --dg-parchment: #FAF6F0;
      --dg-white: #FFFFFF;
      --dg-sage: #6B8F71;
      --dg-fern: #3D6B4F;
      --dg-soil: #5C4B3A;
      --dg-bark: #3E2F23;
      --dg-amber: #D4A853;
      --dg-marigold: #E8C56D;
      --dg-seedling: #A8D5A2;
      --dg-budding: #8BA888;
      --dg-rose: #C4A0A0;
      --dg-fog: #B0A99F;
      --dg-charcoal: #2C2C2C;
      --dg-linen: #F0E8DA;
      --dg-leaf: #4A7C59;
    }

    body {
      font-family: 'Lora', 'Georgia', 'Times New Roman', serif;
      font-size: 1.125rem;
      line-height: 1.85;
      color: var(--dg-soil);
      background-color: var(--dg-parchment);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      color: var(--dg-fern);
      text-decoration: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    /* --- Navigation --- */
    .nav {
      background: rgba(250, 246, 240, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(176, 169, 159, 0.25);
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-logo {
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--dg-fern);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.9rem;
      color: var(--dg-soil);
      padding: 8px 14px;
      border-radius: 6px;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      background: rgba(107, 143, 113, 0.1);
      color: var(--dg-fern);
    }

    .search-btn {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.85rem;
      color: var(--dg-fog);
      background: rgba(176, 169, 159, 0.12);
      border: 1px solid rgba(176, 169, 159, 0.25);
      border-radius: 8px;
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .search-btn:hover {
      background: rgba(176, 169, 159, 0.2);
      color: var(--dg-soil);
    }

    /* --- Hero --- */
    .hero {
      background: linear-gradient(175deg, var(--dg-parchment) 0%, var(--dg-linen) 60%, rgba(168, 213, 162, 0.1) 100%);
      padding: 72px 40px 56px;
      text-align: center;
    }

    .hero h1 {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-size: 3rem;
      font-weight: 500;
      color: var(--dg-bark);
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    .hero .subtitle {
      font-family: 'Lora', serif;
      font-size: 1.15rem;
      font-style: italic;
      color: var(--dg-soil);
      max-width: 520px;
      margin: 0 auto;
      line-height: 1.7;
      opacity: 0.8;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 36px;
      font-family: 'IBM Plex Sans', sans-serif;
    }

    .hero-stat {
      text-align: center;
    }

    .hero-stat strong {
      display: block;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--dg-fern);
    }

    .hero-stat span {
      font-size: 0.8rem;
      color: var(--dg-fog);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* --- Main Layout --- */
    .main-layout {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 32px;
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 48px;
    }

    .content-area {
      max-width: 720px;
    }

    .sidebar {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    /* --- Note Cards Grid --- */
    .notes-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }

    .note-card {
      background: var(--dg-white);
      border: 1px solid rgba(107, 143, 113, 0.12);
      border-radius: 12px;
      padding: 24px 28px;
      box-shadow: 0 1px 4px rgba(92, 75, 58, 0.05);
      transition: box-shadow 0.25s ease, transform 0.25s ease;
      text-decoration: none;
      display: block;
      color: inherit;
    }

    .note-card:hover {
      box-shadow: 0 4px 16px rgba(92, 75, 58, 0.1);
      transform: translateY(-2px);
    }

    .note-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 10px;
    }

    .badge-seedling {
      background: rgba(168, 213, 162, 0.2);
      color: var(--dg-leaf);
    }

    .badge-budding {
      background: rgba(139, 168, 136, 0.2);
      color: var(--dg-fern);
    }

    .badge-evergreen {
      background: rgba(107, 143, 113, 0.15);
      color: var(--dg-fern);
    }

    .note-card h3 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dg-bark);
      margin-bottom: 8px;
      line-height: 1.35;
    }

    .note-card p {
      font-size: 0.9rem;
      color: var(--dg-soil);
      line-height: 1.65;
      opacity: 0.85;
    }

    .note-card .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 14px;
    }

    .tag {
      background: rgba(107, 143, 113, 0.08);
      color: var(--dg-sage);
      padding: 2px 9px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
    }

    .note-card .meta {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.75rem;
      color: var(--dg-fog);
      margin-top: 12px;
    }

    /* --- Single Note View --- */
    .note-view {
      margin-top: 40px;
    }

    .note-header {
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(176, 169, 159, 0.2);
    }

    .note-header h2 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--dg-bark);
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .note-header .note-meta {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.82rem;
      color: var(--dg-fog);
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .note-body p {
      margin-bottom: 1.4em;
    }

    .note-body a.wikilink {
      color: var(--dg-fern);
      border-bottom: 1.5px dotted var(--dg-sage);
      padding-bottom: 1px;
      transition: border-color 0.15s ease;
    }

    .note-body a.wikilink:hover {
      border-bottom-style: solid;
    }

    .note-body blockquote {
      border-left: 3px solid var(--dg-amber);
      background: rgba(212, 168, 83, 0.06);
      padding: 16px 20px;
      margin: 24px 0;
      border-radius: 0 8px 8px 0;
      font-style: italic;
    }

    .note-body code {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.88em;
      background: rgba(176, 169, 159, 0.12);
      padding: 2px 6px;
      border-radius: 4px;
      color: var(--dg-bark);
    }

    .note-body pre {
      background: var(--dg-charcoal);
      color: #E8E0D4;
      padding: 20px 24px;
      border-radius: 10px;
      overflow-x: auto;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.88rem;
      line-height: 1.6;
      margin: 24px 0;
    }

    /* --- Callout --- */
    .callout {
      background: rgba(212, 168, 83, 0.07);
      border-left: 3px solid var(--dg-amber);
      border-radius: 0 10px 10px 0;
      padding: 18px 22px;
      margin: 24px 0;
    }

    .callout-label {
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--dg-amber);
      margin-bottom: 6px;
    }

    .callout p {
      font-size: 0.95rem;
      margin-bottom: 0;
    }

    /* --- Backlinks Panel --- */
    .backlinks {
      background: var(--dg-linen);
      border-radius: 12px;
      padding: 24px 28px;
      margin-top: 48px;
      border: 1px solid rgba(176, 169, 159, 0.18);
    }

    .backlinks h3 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--dg-fog);
      margin-bottom: 14px;
    }

    .backlink-item {
      padding: 10px 0;
      border-bottom: 1px solid rgba(176, 169, 159, 0.15);
    }

    .backlink-item:last-child {
      border-bottom: none;
    }

    .backlink-item a {
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      color: var(--dg-fern);
      font-size: 0.92rem;
    }

    .backlink-item a:hover {
      text-decoration: underline;
    }

    .backlink-item .excerpt {
      font-size: 0.82rem;
      color: var(--dg-fog);
      margin-top: 3px;
      line-height: 1.5;
    }

    /* --- Sidebar --- */
    .sidebar-section {
      margin-bottom: 32px;
    }

    .sidebar-section h4 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--dg-fog);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(176, 169, 159, 0.2);
    }

    .sidebar-toc a {
      display: block;
      font-size: 0.88rem;
      color: var(--dg-soil);
      padding: 4px 0;
      transition: color 0.15s ease;
    }

    .sidebar-toc a:hover {
      color: var(--dg-fern);
    }

    .sidebar-toc a.active {
      color: var(--dg-fern);
      font-weight: 500;
    }

    .sidebar-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .sidebar-tags .tag {
      font-size: 0.78rem;
      padding: 4px 11px;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .sidebar-tags .tag:hover {
      background: rgba(107, 143, 113, 0.18);
    }

    /* Mini graph placeholder */
    .mini-graph {
      background: var(--dg-linen);
      border: 1px solid rgba(176, 169, 159, 0.2);
      border-radius: 10px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--dg-fog);
      font-size: 0.85rem;
    }

    /* --- Recently Tended --- */
    .recent-list {
      list-style: none;
    }

    .recent-list li {
      padding: 8px 0;
      border-bottom: 1px solid rgba(176, 169, 159, 0.12);
      font-size: 0.88rem;
    }

    .recent-list li:last-child {
      border-bottom: none;
    }

    .recent-list a {
      color: var(--dg-soil);
    }

    .recent-list a:hover {
      color: var(--dg-fern);
    }

    .recent-list .date {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: var(--dg-fog);
      margin-left: 8px;
    }

    /* --- Buttons --- */
    .btn {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      padding: 10px 22px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: var(--dg-sage);
      color: var(--dg-parchment);
      box-shadow: 0 1px 3px rgba(61, 107, 79, 0.2);
    }

    .btn-primary:hover {
      background: var(--dg-fern);
      box-shadow: 0 2px 8px rgba(61, 107, 79, 0.3);
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: transparent;
      color: var(--dg-sage);
      border: 1.5px solid var(--dg-sage);
    }

    .btn-secondary:hover {
      background: rgba(107, 143, 113, 0.08);
    }

    /* --- Footer --- */
    .footer {
      text-align: center;
      padding: 40px 32px;
      margin-top: 48px;
      border-top: 1px solid rgba(176, 169, 159, 0.2);
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.82rem;
      color: var(--dg-fog);
    }

    .footer a {
      color: var(--dg-sage);
    }

    .footer a:hover {
      text-decoration: underline;
    }

    /* --- Divider --- */
    .section-divider {
      text-align: center;
      margin: 40px 0;
      color: var(--dg-seedling);
      font-size: 0.9rem;
      letter-spacing: 0.4em;
      opacity: 0.6;
    }

    /* --- Responsive --- */
    @media (max-width: 900px) {
      .main-layout {
        grid-template-columns: 1fr;
        padding: 24px 20px;
      }

      .sidebar {
        order: -1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .notes-grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 2.2rem;
      }

      .hero-stats {
        gap: 24px;
      }

      .nav {
        padding: 0 16px;
      }

      .nav-links {
        display: none;
      }
    }

    @media (max-width: 600px) {
      .sidebar {
        grid-template-columns: 1fr;
      }

      .hero {
        padding: 48px 20px 40px;
      }

      .hero h1 {
        font-size: 1.8rem;
      }

      .hero-stats {
        flex-direction: column;
        gap: 16px;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav-logo">
      <span>&#127793;</span> My Digital Garden
    </a>
    <ul class="nav-links">
      <li><a href="#" class="active">Garden</a></li>
      <li><a href="#">Notes</a></li>
      <li><a href="#">Topics</a></li>
      <li><a href="#">Graph</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <button class="search-btn">
      &#128269; Search &middot; <kbd>/</kbd>
    </button>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <h1>A Garden of Connected Ideas</h1>
    <p class="subtitle">
      A personal knowledge base where thoughts grow, branch, and intertwine
      over time. Nothing here is finished; everything is evolving.
    </p>
    <div class="hero-stats">
      <div class="hero-stat">
        <strong>127</strong>
        <span>Notes</span>
      </div>
      <div class="hero-stat">
        <strong>384</strong>
        <span>Connections</span>
      </div>
      <div class="hero-stat">
        <strong>18</strong>
        <span>Topics</span>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="main-layout">

    <!-- Content Area -->
    <main class="content-area">

      <!-- Notes Grid -->
      <section>
        <div class="notes-grid">

          <a href="#note" class="note-card">
            <span class="note-badge badge-evergreen">&#127794; Evergreen</span>
            <h3>Evergreen Notes Should Be Atomic</h3>
            <p>Each note captures a single concept, making it easier to form
              connections across disparate topics and reuse ideas in new contexts.</p>
            <div class="tags">
              <span class="tag">note-taking</span>
              <span class="tag">knowledge</span>
            </div>
            <div class="meta">Tended 2 days ago</div>
          </a>

          <a href="#note" class="note-card">
            <span class="note-badge badge-budding">&#127807; Budding</span>
            <h3>Spaced Repetition and Long-Term Memory</h3>
            <p>Exploring how systematic review intervals transform fleeting
              encounters with information into durable understanding.</p>
            <div class="tags">
              <span class="tag">learning</span>
              <span class="tag">memory</span>
            </div>
            <div class="meta">Tended 5 days ago</div>
          </a>

          <a href="#note" class="note-card">
            <span class="note-badge badge-seedling">&#127793; Seedling</span>
            <h3>Tools Shape the Thoughts They Hold</h3>
            <p>Early reflections on how the medium of note-taking influences
              the structure and quality of the ideas we develop.</p>
            <div class="tags">
              <span class="tag">tools-for-thought</span>
            </div>
            <div class="meta">Planted 1 week ago</div>
          </a>

          <a href="#note" class="note-card">
            <span class="note-badge badge-evergreen">&#127794; Evergreen</span>
            <h3>Writing as Thinking</h3>
            <p>The act of writing is not merely recording what you already know;
              it is a process of discovering what you think by articulating it.</p>
            <div class="tags">
              <span class="tag">writing</span>
              <span class="tag">thinking</span>
            </div>
            <div class="meta">Tended 1 day ago</div>
          </a>

        </div>
      </section>

      <div class="section-divider">&#8226; &#8226; &#8226;</div>

      <!-- Single Note View Example -->
      <section class="note-view" id="note">
        <div class="note-header">
          <span class="note-badge badge-evergreen">&#127794; Evergreen</span>
          <h2>Evergreen Notes Should Be Atomic</h2>
          <div class="note-meta">
            <span>Planted: Jan 12, 2025</span>
            <span>Last tended: Mar 2, 2026</span>
            <span>843 words</span>
          </div>
        </div>

        <div class="note-body">
          <p>
            The most effective evergreen notes are <strong>atomic</strong>: each note
            captures exactly one idea, concept, or claim. This constraint is not a
            limitation but a liberating structure. When notes are atomic, they become
            composable building blocks that can be recombined in surprising ways.
          </p>

          <p>
            Atomicity supports <a href="#" class="wikilink">dense linking</a> because
            a tightly scoped note can be referenced from many different contexts without
            ambiguity. If a note tries to cover three ideas, any link to it becomes
            imprecise -- the reader cannot tell which of the three ideas is being referenced.
          </p>

          <div class="callout">
            <div class="callout-label">&#128161; Key Insight</div>
            <p>
              Think of atomic notes like LEGO bricks. A single, well-shaped piece can
              participate in hundreds of different structures. A fused, multi-purpose
              piece is useful in exactly one.
            </p>
          </div>

          <p>
            This principle connects to the broader idea that
            <a href="#" class="wikilink">writing is thinking</a>. The discipline of
            expressing one idea per note forces clarity. If you cannot articulate the
            note's core concept in a single title, the idea likely needs further
            decomposition. See also
            <a href="#" class="wikilink">spaced repetition and long-term memory</a>
            for how atomicity aids review.
          </p>

          <p>
            In practice, atomic notes range from a single paragraph to a few hundred
            words. They have a clear title that functions as an <code>API</code> for
            the idea -- other notes reference them by title, creating a web of meaning
            that grows richer with each new connection.
          </p>

          <pre><code># Example note structure
---
title: Evergreen Notes Should Be Atomic
status: evergreen
planted: 2025-01-12
tended: 2026-03-02
tags: [note-taking, knowledge-management]
---

One idea per note. Composable. Linkable. Reusable.</code></pre>
        </div>

        <!-- Backlinks -->
        <div class="backlinks">
          <h3>&#128279; 4 Notes Link Here</h3>
          <div class="backlink-item">
            <a href="#">Writing as Thinking</a>
            <p class="excerpt">"...the atomic structure of evergreen notes forces the kind of precision that transforms vague intuitions into clear claims..."</p>
          </div>
          <div class="backlink-item">
            <a href="#">Tools Shape the Thoughts They Hold</a>
            <p class="excerpt">"...tools that enforce atomicity, like Zettelkasten-inspired apps, nudge thinkers toward..."</p>
          </div>
          <div class="backlink-item">
            <a href="#">Knowledge Graphs as Thinking Environments</a>
            <p class="excerpt">"...atomic notes are the ideal node size for a knowledge graph because each node represents exactly one concept..."</p>
          </div>
          <div class="backlink-item">
            <a href="#">The Collector's Fallacy</a>
            <p class="excerpt">"...collecting sprawling notes creates the illusion of learning; atomic notes require genuine processing..."</p>
          </div>
        </div>
      </section>

      <div style="margin-top: 32px; display: flex; gap: 12px;">
        <a href="#" class="btn btn-primary">Explore the Garden</a>
        <a href="#" class="btn btn-secondary">View Graph</a>
      </div>

    </main>

    <!-- Sidebar -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h4>On This Page</h4>
        <nav class="sidebar-toc">
          <a href="#" class="active">Evergreen Notes Should Be Atomic</a>
          <a href="#">Key Insight</a>
          <a href="#">Note Structure Example</a>
          <a href="#">Backlinks</a>
        </nav>
      </div>

      <div class="sidebar-section">
        <h4>Graph View</h4>
        <div class="mini-graph">
          Interactive graph
        </div>
      </div>

      <div class="sidebar-section">
        <h4>Topics</h4>
        <div class="sidebar-tags">
          <span class="tag">note-taking</span>
          <span class="tag">knowledge</span>
          <span class="tag">learning</span>
          <span class="tag">writing</span>
          <span class="tag">thinking</span>
          <span class="tag">tools-for-thought</span>
          <span class="tag">memory</span>
          <span class="tag">creativity</span>
          <span class="tag">reading</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h4>Recently Tended</h4>
        <ul class="recent-list">
          <li>
            <a href="#">Writing as Thinking</a>
            <span class="date">Mar 3</span>
          </li>
          <li>
            <a href="#">Evergreen Notes Should Be Atomic</a>
            <span class="date">Mar 2</span>
          </li>
          <li>
            <a href="#">Bi-Directional Links</a>
            <span class="date">Feb 28</span>
          </li>
          <li>
            <a href="#">The Collector's Fallacy</a>
            <span class="date">Feb 25</span>
          </li>
          <li>
            <a href="#">Spaced Repetition</a>
            <span class="date">Feb 20</span>
          </li>
        </ul>
      </div>

    </aside>

  </div>

  <!-- Footer -->
  <footer class="footer">
    <p>
      &#127793; Tended with care &middot;
      This garden grows in public &middot;
      <a href="#">RSS</a> &middot;
      <a href="#">Source</a> &middot;
      <a href="#">About the Gardener</a>
    </p>
    <p style="margin-top: 8px; opacity: 0.7;">
      Inspired by the digital gardening movement. Nothing here is finished.
    </p>
  </footer>

</body>
</html>
```

---

## Implementation Tips

- **Use CSS custom properties throughout**: Define your entire palette in `:root` variables so the garden's tone can be adjusted in one place; this also makes it trivial to offer a dark-mode variant by swapping variable values under a `[data-theme="dark"]` selector
- **Implement hover link previews with JavaScript**: Attach `mouseenter` and `mouseleave` listeners to `.wikilink` elements that fetch note excerpts (via a JSON index or data attributes) and display them in an absolutely positioned tooltip near the cursor
- **Build a lightweight graph with D3.js or vis.js**: Generate a JSON file mapping note slugs to their outgoing links, then render a force-directed graph using `d3-force`; keep node counts manageable (under 500) and use progressive disclosure to show labels only on hover
- **Distinguish link types visually**: Use dotted underlines for internal wikilinks, solid underlines with an arrow icon for external links, and a dashed border for links to notes that do not yet exist (akin to red links in MediaWiki)
- **Automate growth status from content length and edit frequency**: Rather than manually tagging each note's maturity, write a build script that sets "seedling" for notes under 200 words or less than 3 edits, "budding" for intermediate notes, and "evergreen" for heavily edited, longer pieces
- **Generate backlinks at build time**: When using a static site generator (Hugo, Eleventy, Astro, Quartz), parse all notes for internal links during the build step and inject a backlinks section into each page template automatically
- **Optimize for reading sessions**: Consider adding an estimated reading time in the note header, a subtle scroll progress indicator, and keyboard shortcuts for navigating between recently visited notes (e.g., `Alt+Left` for back, `/` for search)
- **Keep the design lightweight**: Digital gardens thrive on fast page loads; avoid heavy JavaScript frameworks, optimize font loading with `font-display: swap`, and prefer CSS-based decorative effects over image assets
