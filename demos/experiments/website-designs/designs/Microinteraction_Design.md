# Microinteraction Design Design Reference

## Overview

Microinteraction Design is a UI/UX aesthetic philosophy built on the premise that small, purposeful animations and feedback loops elevate digital interfaces from static pages into living, responsive experiences. Coined and popularized by Dan Saffer in his 2013 book *Microinteractions: Designing with Details*, the concept draws from motion design, behavioral psychology, and interaction design to create interfaces where every hover, click, scroll, and state transition communicates meaning through carefully orchestrated visual feedback.

At its core, Microinteraction Design treats animation not as decoration but as a functional layer of the interface. A button does not simply change color on hover -- it subtly scales, shifts shadow depth, and transitions its background with a tailored easing curve that communicates "this element is interactive." A form field does not merely display an error message -- the input container gently shakes, the border animates to red, and a helper message slides into view with a spring-like ease. Loading states replace static spinners with skeleton screens, progressive reveals, and contextual progress indicators that keep users informed and engaged rather than frustrated.

The visual language of Microinteraction Design favors clean, modern aesthetics with generous whitespace, neutral color palettes accented by purposeful pops of color for interactive and state-change elements, and crisp sans-serif typography with clear hierarchy. The design system relies on restraint: animations are typically 150-400 milliseconds, easing curves feel natural and physics-based, and every motion serves one of four purposes -- providing feedback, indicating state, guiding attention, or reinforcing spatial relationships.

This aesthetic has become the standard for modern product design at companies like Apple, Google (Material Design), Stripe, Linear, and Vercel, where subtle motion communicates quality, attention to detail, and thoughtful engineering. It bridges the gap between flat design's simplicity and skeuomorphism's tactile feedback, creating interfaces that feel responsive, intuitive, and alive without being overwhelming or distracting. The four structural components of every microinteraction are the trigger, the rules, the feedback, and the loops/modes -- a framework that ensures every animation is intentional and purposeful.

---

## Visual Characteristics

### Core Design Traits

- **Purposeful motion**: Every animation serves a clear function -- confirming actions, indicating state changes, guiding focus, or revealing spatial relationships. No animation exists purely for decoration.
- **Hover state feedback**: Interactive elements respond to cursor proximity and hover with subtle transformations -- scale shifts, shadow elevation changes, background transitions, and icon morphing.
- **Loading state design**: Skeleton screens, shimmer effects, progressive content reveals, and contextual spinners replace generic loading indicators, keeping users oriented during wait times.
- **Scroll-triggered animations**: Content elements fade in, slide up, or scale into view as users scroll, creating a sense of discovery and narrative flow through the page.
- **Easing and physics-based motion**: Animations use custom cubic-bezier curves or spring physics rather than linear timing, creating natural-feeling motion that mimics real-world object behavior.
- **State transition continuity**: Elements animate smoothly between states (collapsed to expanded, inactive to active, hidden to visible) rather than snapping, preserving spatial context.
- **Micro-feedback loops**: Toggle switches animate their position, checkboxes draw their checkmark, radio buttons pulse on selection -- every input provides immediate, visible confirmation.
- **Progressive disclosure**: Complex interfaces reveal information in layers triggered by user interaction, using slide, fade, and scale transitions to maintain context.
- **Spatial awareness through motion**: Elements enter and exit from logical directions, maintaining a sense of physical space within the interface.
- **Subtle depth and elevation**: Shadows, blur, and scale dynamically change based on interaction state, creating a layered interface that responds to user input.
- **Staggered animations**: Lists and grids reveal their items with cascading delays, creating a ripple-like entrance that guides the eye through content.
- **Reduced motion respect**: The design system includes `prefers-reduced-motion` alternatives, ensuring accessibility without sacrificing the functional communication that motion provides.

### Design Principles

1. **Function over flair**: Every animation must answer the question "what does this communicate?" If the answer is nothing, remove it.
2. **Duration discipline**: Microinteractions stay between 100-400ms. Anything longer becomes a macro-interaction and risks feeling sluggish.
3. **Easing intentionality**: Use ease-out for entering elements, ease-in for exiting elements, and ease-in-out for state changes. Never use linear for UI motion.
4. **Consistency of motion language**: Similar actions produce similar animations across the entire interface -- a reveal is always a reveal, a dismiss is always a dismiss.
5. **Performance as a feature**: Animations run at 60fps by only animating `transform` and `opacity`. Layout-triggering properties like `width`, `height`, and `margin` are never animated directly.
6. **Contextual proportionality**: Small elements get small, fast animations. Large layout changes get slightly longer, more pronounced transitions.
7. **Reversibility**: Interactive animations (hover, focus) reverse gracefully when the trigger condition ends, using appropriate easing for the return.
8. **Invisible when perfect**: The best microinteractions go unnoticed by users -- they simply make the interface feel "right" without drawing conscious attention to themselves.

---

## Color Palette

Microinteraction Design relies on a predominantly neutral palette with strategic accent colors that highlight interactive elements, state changes, and feedback moments. The color system is functional: neutrals provide structure and readability, while accents draw attention precisely where animation and interaction occur. Color transitions themselves become microinteractions -- smooth hue shifts on hover, opacity changes on focus, and state-dependent color mapping (success green, error red, warning amber).

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | Primary background, card surfaces |
| ![#FAFAFA](https://via.placeholder.com/20/FAFAFA/FAFAFA) | `#FAFAFA` | Secondary background, subtle separation |
| ![#F1F5F9](https://via.placeholder.com/20/F1F5F9/F1F5F9) | `#F1F5F9` | Skeleton screen shimmer base, muted areas |
| ![#E2E8F0](https://via.placeholder.com/20/E2E8F0/E2E8F0) | `#E2E8F0` | Borders, dividers, inactive states |
| ![#94A3B8](https://via.placeholder.com/20/94A3B8/94A3B8) | `#94A3B8` | Placeholder text, disabled elements |
| ![#64748B](https://via.placeholder.com/20/64748B/64748B) | `#64748B` | Secondary text, captions, metadata |
| ![#334155](https://via.placeholder.com/20/334155/334155) | `#334155` | Primary body text |
| ![#0F172A](https://via.placeholder.com/20/0F172A/0F172A) | `#0F172A` | Headings, high-emphasis text |
| ![#3B82F6](https://via.placeholder.com/20/3B82F6/3B82F6) | `#3B82F6` | Primary interactive accent, links, focus rings |
| ![#2563EB](https://via.placeholder.com/20/2563EB/2563EB) | `#2563EB` | Hover state for primary accent, active buttons |
| ![#8B5CF6](https://via.placeholder.com/20/8B5CF6/8B5CF6) | `#8B5CF6` | Secondary accent, animated highlights, progress |
| ![#10B981](https://via.placeholder.com/20/10B981/10B981) | `#10B981` | Success state, completion animations, confirmations |
| ![#F59E0B](https://via.placeholder.com/20/F59E0B/F59E0B) | `#F59E0B` | Warning state, attention-required indicators |
| ![#EF4444](https://via.placeholder.com/20/EF4444/EF4444) | `#EF4444` | Error state, destructive action feedback, shake triggers |
| ![#06B6D4](https://via.placeholder.com/20/06B6D4/06B6D4) | `#06B6D4` | Info state, tooltip accents, loading indicators |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --mi-bg-primary: #FFFFFF;
  --mi-bg-secondary: #FAFAFA;
  --mi-bg-skeleton: #F1F5F9;

  /* Borders & Dividers */
  --mi-border: #E2E8F0;
  --mi-border-focus: #3B82F6;

  /* Text */
  --mi-text-primary: #0F172A;
  --mi-text-body: #334155;
  --mi-text-secondary: #64748B;
  --mi-text-placeholder: #94A3B8;

  /* Interactive Accent */
  --mi-accent: #3B82F6;
  --mi-accent-hover: #2563EB;
  --mi-accent-secondary: #8B5CF6;

  /* State Colors */
  --mi-success: #10B981;
  --mi-warning: #F59E0B;
  --mi-error: #EF4444;
  --mi-info: #06B6D4;

  /* Shadows (animated on hover/focus) */
  --mi-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --mi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --mi-shadow-lg: 0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
  --mi-shadow-xl: 0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Animation Tokens */
  --mi-duration-fast: 150ms;
  --mi-duration-normal: 250ms;
  --mi-duration-slow: 400ms;
  --mi-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --mi-ease-in: cubic-bezier(0.55, 0, 1, 0.45);
  --mi-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --mi-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --mi-ease-bounce: cubic-bezier(0.34, 1.8, 0.64, 1);
}
```

---

## Typography

Microinteraction Design pairs clean, geometric sans-serif typefaces with strong weight hierarchies. Typography in this aesthetic is highly legible and unadorned -- the motion layer provides the personality, so the type stays functional and clear. Font sizes use a modular scale, and transitions between typographic states (placeholder to filled, label to floating label) are themselves key microinteractions. Weight and size shifts in text should use smooth transitions rather than abrupt swaps.

### Recommended Google Fonts

| Font | Weight Range | Role | Character |
|------|-------------|------|-----------|
| [Inter](https://fonts.google.com/specimen/Inter) | 300-700 | Primary UI / Body | Neutral, highly legible, variable font with optical sizing |
| [Manrope](https://fonts.google.com/specimen/Manrope) | 300-800 | Headings / Display | Geometric, modern, slightly rounded terminals |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | 400-700 | Code / Data | Monospaced, clear distinction between similar glyphs |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | 400-700 | Alternative Body | Low contrast, geometric, slightly wider |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | 300-700 | Alternative Headings | Proportional companion to Space Mono, distinctive |

### Font Pairing Recommendations

| Pairing | Heading Font | Body Font | Mood |
|---------|-------------|-----------|------|
| Modern Product | Manrope 700 | Inter 400 | Clean, professional, startup-ready |
| Technical / Dev Tool | Space Grotesk 600 | Inter 400 + JetBrains Mono 400 | Developer-oriented, precise |
| Soft & Approachable | DM Sans 700 | DM Sans 400 | Friendly, rounded, SaaS |
| Editorial Hybrid | Manrope 800 | Inter 300 | Bold headlines with light body |

### CSS Typography Example

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

/* Type scale (1.250 ratio - Major Third) */
:root {
  --mi-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --mi-font-heading: 'Manrope', 'Inter', sans-serif;
  --mi-font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --mi-text-xs: 0.75rem;    /* 12px */
  --mi-text-sm: 0.875rem;   /* 14px */
  --mi-text-base: 1rem;     /* 16px */
  --mi-text-lg: 1.125rem;   /* 18px */
  --mi-text-xl: 1.25rem;    /* 20px */
  --mi-text-2xl: 1.563rem;  /* 25px */
  --mi-text-3xl: 1.953rem;  /* 31px */
  --mi-text-4xl: 2.441rem;  /* 39px */
  --mi-text-5xl: 3.052rem;  /* 49px */

  --mi-leading-tight: 1.2;
  --mi-leading-normal: 1.6;
  --mi-leading-relaxed: 1.75;
}

body {
  font-family: var(--mi-font-body);
  font-size: var(--mi-text-base);
  line-height: var(--mi-leading-normal);
  color: var(--mi-text-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--mi-font-heading);
  line-height: var(--mi-leading-tight);
  color: var(--mi-text-primary);
}

/* Animated floating label -- a signature microinteraction */
.input-group {
  position: relative;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--mi-text-base);
  color: var(--mi-text-placeholder);
  pointer-events: none;
  transition: all var(--mi-duration-normal) var(--mi-ease-out);
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-50%);
  font-size: var(--mi-text-xs);
  color: var(--mi-accent);
  background: var(--mi-bg-primary);
  padding: 0 4px;
}
```

---

## Layout Principles

- **Generous whitespace as a canvas for motion**: Ample spacing between elements ensures animations have room to breathe and remain legible during transitions.
- **Component-based architecture**: UI is composed of discrete, self-contained components (cards, buttons, inputs, modals) that each manage their own animation states.
- **Consistent spacing scale**: Use a 4px or 8px base unit for all spacing, ensuring alignment is preserved even when elements animate in size or position.
- **Content-first hierarchy**: Layout priorities are determined by content importance. Animation draws attention to the hierarchy but never overrides it.
- **Responsive with adaptive animation**: Layout shifts at breakpoints, and animation intensity scales down on smaller screens and lower-powered devices.
- **Sticky and fixed elements with transitions**: Navigation bars, CTAs, and toolbars transition smoothly when switching between relative and fixed positioning on scroll.
- **Grid-based with animated flow**: CSS Grid and Flexbox provide structure, while elements animate into their grid positions using staggered reveals.
- **Z-axis layering for depth**: Modals, dropdowns, tooltips, and toasts occupy distinct elevation layers, entering and exiting with appropriate directional motion.
- **Scroll-snap with momentum**: Sections or carousels use CSS scroll-snap for precise positioning combined with smooth scroll behavior.
- **Max-width containers**: Content is constrained to 1200-1400px max-width for readability, centered with auto margins.
- **Card-based content organization**: Information is grouped into card containers that serve as natural animation boundaries for hover, reveal, and transition effects.

---

## CSS / Design Techniques

### Card Component with Hover Microinteraction

Cards are the fundamental container in Microinteraction Design. On hover, they elevate via shadow deepening and a subtle upward translate, signaling interactivity and creating a tactile, pressable feel.

```css
.mi-card {
  background: var(--mi-bg-primary);
  border: 1px solid var(--mi-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--mi-shadow-sm);
  transition:
    transform var(--mi-duration-normal) var(--mi-ease-out),
    box-shadow var(--mi-duration-normal) var(--mi-ease-out),
    border-color var(--mi-duration-normal) var(--mi-ease-out);
  will-change: transform;
}

.mi-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--mi-shadow-lg);
  border-color: var(--mi-accent);
}

.mi-card:active {
  transform: translateY(-1px);
  box-shadow: var(--mi-shadow-md);
  transition-duration: var(--mi-duration-fast);
}

/* Card content reveal on hover */
.mi-card .card-details {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity var(--mi-duration-normal) var(--mi-ease-out),
    transform var(--mi-duration-normal) var(--mi-ease-out);
}

.mi-card:hover .card-details {
  opacity: 1;
  transform: translateY(0);
}
```

### Button with Ripple Effect and State Feedback

Buttons in this aesthetic provide immediate tactile feedback through multiple layers: background transition, scale press, ripple expansion, and optional icon animation.

```css
.mi-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--mi-accent);
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-family: var(--mi-font-body);
  font-weight: 600;
  font-size: var(--mi-text-sm);
  cursor: pointer;
  overflow: hidden;
  transition:
    background var(--mi-duration-fast) var(--mi-ease-out),
    transform var(--mi-duration-fast) var(--mi-ease-spring),
    box-shadow var(--mi-duration-normal) var(--mi-ease-out);
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
}

.mi-button:hover {
  background: var(--mi-accent-hover);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
  transform: translateY(-1px);
}

.mi-button:active {
  transform: translateY(0) scale(0.98);
  transition-duration: 80ms;
}

/* Ripple effect */
.mi-button .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transform: scale(0);
  animation: mi-ripple 600ms ease-out forwards;
  pointer-events: none;
}

@keyframes mi-ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Button loading state */
.mi-button.loading {
  pointer-events: none;
  opacity: 0.85;
}

.mi-button.loading .btn-text {
  opacity: 0;
  transition: opacity var(--mi-duration-fast) var(--mi-ease-in);
}

.mi-button.loading::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: mi-spin 700ms linear infinite;
}

@keyframes mi-spin {
  to { transform: rotate(360deg); }
}

/* Success state */
.mi-button.success {
  background: var(--mi-success);
  transition: background var(--mi-duration-normal) var(--mi-ease-out);
}
```

### Navigation Bar with Scroll Transition

The navigation bar demonstrates scroll-aware microinteractions -- it transitions from a transparent overlay to a solid, elevated bar as the user scrolls, and menu items feature animated underline indicators.

```css
.mi-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: transparent;
  transition:
    background var(--mi-duration-slow) var(--mi-ease-out),
    padding var(--mi-duration-slow) var(--mi-ease-out),
    box-shadow var(--mi-duration-slow) var(--mi-ease-out),
    backdrop-filter var(--mi-duration-slow) var(--mi-ease-out);
}

.mi-nav.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

/* Animated underline indicator for nav links */
.mi-nav-link {
  position: relative;
  text-decoration: none;
  color: var(--mi-text-body);
  font-weight: 500;
  padding: 4px 0;
  transition: color var(--mi-duration-fast) var(--mi-ease-out);
}

.mi-nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--mi-accent);
  border-radius: 1px;
  transition: width var(--mi-duration-normal) var(--mi-ease-out);
}

.mi-nav-link:hover {
  color: var(--mi-accent);
}

.mi-nav-link:hover::after,
.mi-nav-link.active::after {
  width: 100%;
}

/* Hamburger menu animation */
.mi-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
}

.mi-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--mi-text-primary);
  border-radius: 1px;
  transition:
    transform var(--mi-duration-normal) var(--mi-ease-spring),
    opacity var(--mi-duration-fast) var(--mi-ease-out);
}

.mi-hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mi-hamburger.open span:nth-child(2) {
  opacity: 0;
}

.mi-hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
```

### Hero Section with Scroll-Triggered Reveal

The hero section uses staggered entrance animations and a parallax scroll effect to create depth and narrative momentum as users enter the page.

```css
.mi-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}

/* Entrance animations */
.mi-hero-title {
  font-family: var(--mi-font-heading);
  font-size: var(--mi-text-5xl);
  font-weight: 800;
  color: var(--mi-text-primary);
  opacity: 0;
  transform: translateY(30px);
  animation: mi-fade-up 800ms var(--mi-ease-out) 200ms forwards;
}

.mi-hero-subtitle {
  font-size: var(--mi-text-lg);
  color: var(--mi-text-secondary);
  max-width: 580px;
  margin-top: 16px;
  opacity: 0;
  transform: translateY(20px);
  animation: mi-fade-up 800ms var(--mi-ease-out) 400ms forwards;
}

.mi-hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  opacity: 0;
  transform: translateY(20px);
  animation: mi-fade-up 800ms var(--mi-ease-out) 600ms forwards;
}

@keyframes mi-fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating background elements with parallax */
.mi-hero-bg-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
  background: var(--mi-accent);
  filter: blur(60px);
  animation: mi-float 20s ease-in-out infinite;
}

.mi-hero-bg-shape:nth-child(1) {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  animation-delay: 0s;
}

.mi-hero-bg-shape:nth-child(2) {
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: -50px;
  background: var(--mi-accent-secondary);
  animation-delay: -7s;
}

@keyframes mi-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.05); }
  66% { transform: translate(-15px, 15px) scale(0.95); }
}
```

### Skeleton Loading Screen

Skeleton screens are a signature microinteraction pattern -- they provide spatial context during loading by showing placeholder shapes that pulse with a shimmer animation, replacing the content layout.

```css
.mi-skeleton {
  background: var(--mi-bg-skeleton);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

.mi-skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  animation: mi-shimmer 1.8s ease-in-out infinite;
}

@keyframes mi-shimmer {
  to { transform: translateX(100%); }
}

.mi-skeleton-title {
  height: 28px;
  width: 60%;
  margin-bottom: 12px;
}

.mi-skeleton-text {
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
}

.mi-skeleton-text:last-child {
  width: 75%;
}

.mi-skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.mi-skeleton-image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
}
```

### Scroll-Triggered Reveal Animation

Using the Intersection Observer API, elements animate into view as they enter the viewport. This CSS defines the animation states, while the JavaScript in the template handles the trigger logic.

```css
/* Initial hidden state */
.mi-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--mi-duration-slow) var(--mi-ease-out),
    transform var(--mi-duration-slow) var(--mi-ease-out);
}

.mi-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Direction variants */
.mi-reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition:
    opacity var(--mi-duration-slow) var(--mi-ease-out),
    transform var(--mi-duration-slow) var(--mi-ease-out);
}

.mi-reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition:
    opacity var(--mi-duration-slow) var(--mi-ease-out),
    transform var(--mi-duration-slow) var(--mi-ease-out);
}

.mi-reveal-scale {
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity var(--mi-duration-slow) var(--mi-ease-out),
    transform var(--mi-duration-slow) var(--mi-ease-spring);
}

.mi-reveal-left.visible,
.mi-reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.mi-reveal-scale.visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger children */
.mi-stagger > * {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity var(--mi-duration-normal) var(--mi-ease-out),
    transform var(--mi-duration-normal) var(--mi-ease-out);
}

.mi-stagger.visible > *:nth-child(1) { transition-delay: 0ms; }
.mi-stagger.visible > *:nth-child(2) { transition-delay: 80ms; }
.mi-stagger.visible > *:nth-child(3) { transition-delay: 160ms; }
.mi-stagger.visible > *:nth-child(4) { transition-delay: 240ms; }
.mi-stagger.visible > *:nth-child(5) { transition-delay: 320ms; }
.mi-stagger.visible > *:nth-child(6) { transition-delay: 400ms; }

.mi-stagger.visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

### Toggle Switch and Form Feedback

Interactive form elements use microinteractions to communicate their state changes -- toggle switches slide with spring easing, inputs provide border and label animations, and validation feedback appears with purposeful motion.

```css
/* Toggle switch */
.mi-toggle {
  position: relative;
  width: 48px;
  height: 26px;
  background: var(--mi-border);
  border-radius: 13px;
  cursor: pointer;
  transition: background var(--mi-duration-normal) var(--mi-ease-out);
}

.mi-toggle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: var(--mi-bg-primary);
  border-radius: 50%;
  box-shadow: var(--mi-shadow-sm);
  transition:
    transform var(--mi-duration-normal) var(--mi-ease-spring),
    box-shadow var(--mi-duration-normal) var(--mi-ease-out);
}

.mi-toggle.active {
  background: var(--mi-accent);
}

.mi-toggle.active::after {
  transform: translateX(22px);
  box-shadow: var(--mi-shadow-md);
}

/* Input focus animation */
.mi-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--mi-border);
  border-radius: 8px;
  font-family: var(--mi-font-body);
  font-size: var(--mi-text-base);
  color: var(--mi-text-body);
  background: var(--mi-bg-primary);
  outline: none;
  transition:
    border-color var(--mi-duration-fast) var(--mi-ease-out),
    box-shadow var(--mi-duration-fast) var(--mi-ease-out);
}

.mi-input:focus {
  border-color: var(--mi-accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.mi-input.error {
  border-color: var(--mi-error);
  animation: mi-shake 400ms var(--mi-ease-out);
}

.mi-input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

@keyframes mi-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(2px); }
}

/* Validation message enter */
.mi-validation-msg {
  font-size: var(--mi-text-sm);
  margin-top: 6px;
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity var(--mi-duration-fast) var(--mi-ease-out),
    transform var(--mi-duration-fast) var(--mi-ease-out);
}

.mi-validation-msg.visible {
  opacity: 1;
  transform: translateY(0);
}

.mi-validation-msg.error { color: var(--mi-error); }
.mi-validation-msg.success { color: var(--mi-success); }
```

### Toast Notification System

Toast notifications slide in from the edge of the viewport, display for a set duration, then exit with a smooth reverse animation. They use the state color system for semantic meaning.

```css
.mi-toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mi-toast {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--mi-bg-primary);
  border-radius: 10px;
  box-shadow: var(--mi-shadow-lg);
  border-left: 3px solid var(--mi-info);
  min-width: 320px;
  animation: mi-toast-in 400ms var(--mi-ease-spring) forwards;
}

.mi-toast.success { border-left-color: var(--mi-success); }
.mi-toast.warning { border-left-color: var(--mi-warning); }
.mi-toast.error   { border-left-color: var(--mi-error); }

.mi-toast.exiting {
  animation: mi-toast-out 300ms var(--mi-ease-in) forwards;
}

@keyframes mi-toast-in {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes mi-toast-out {
  to {
    opacity: 0;
    transform: translateX(100%) scale(0.95);
  }
}

/* Progress bar auto-dismiss */
.mi-toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--mi-accent);
  border-radius: 0 0 0 10px;
  animation: mi-toast-progress 4s linear forwards;
}

@keyframes mi-toast-progress {
  from { width: 100%; }
  to { width: 0%; }
}
```

---

## Design Do's and Don'ts

### Do's

1. **Do animate only `transform` and `opacity`** for smooth 60fps performance. These properties are compositor-friendly and avoid triggering layout recalculations.
2. **Do use `will-change` sparingly** on elements you know will animate, such as cards that elevate on hover. Apply it in advance of the animation, not during.
3. **Do implement `prefers-reduced-motion`** media queries to disable or simplify animations for users with vestibular disorders or motion sensitivity.
4. **Do keep durations under 400ms** for microinteractions. Research shows that animations between 100-300ms feel the most natural and responsive for UI feedback.
5. **Do use custom cubic-bezier easing** curves that match the character of the motion -- spring curves for playful bounces, ease-out for entrances, ease-in for exits.
6. **Do provide immediate visual feedback** for every interactive element. Users should never wonder whether their click, tap, or hover was registered.
7. **Do use semantic color for state feedback** -- green for success, red for error, amber for warning. Combined with motion, this creates redundant coding that improves accessibility.
8. **Do design the reverse animation** as carefully as the forward animation. A hover-out should feel just as intentional as the hover-in.

### Don'ts

1. **Don't animate layout properties** like `width`, `height`, `top`, `left`, `margin`, or `padding` directly. These trigger expensive browser reflows. Use `transform: scale()` and `translate()` instead.
2. **Don't add animation for its own sake**. Every motion must serve a functional purpose: feedback, state indication, attention guidance, or spatial orientation.
3. **Don't exceed 400ms for feedback animations**. Anything longer introduces perceived lag and makes the interface feel sluggish rather than responsive.
4. **Don't use linear easing for UI transitions**. Linear motion feels robotic and unnatural. Always use an ease variant or custom cubic-bezier curve.
5. **Don't animate too many elements simultaneously**. Competing animations create visual noise and prevent users from focusing on the intended feedback.
6. **Don't block user interaction during animations**. Users should be able to click through or interrupt non-critical animations without waiting.
7. **Don't use `animation-delay` as a loading workaround**. If content takes time to appear, use actual loading states (skeleton screens, spinners) rather than faking latency with delays.
8. **Don't ignore the exit animation**. Elements that appear with animation but disappear abruptly create an asymmetric, unfinished experience.

---

## Related Aesthetics

| Aesthetic | Relationship | Key Difference |
|-----------|-------------|----------------|
| Material Design | Strong overlap | Material codifies motion with elevation-based shadow and surface metaphors; Microinteraction Design is framework-agnostic |
| Flat Design | Foundation layer | Flat provides the visual simplicity; Microinteraction Design adds the motion and feedback layer on top |
| Neumorphism | Visual complement | Neumorphism uses soft shadows for depth; Microinteraction Design animates those shadows in response to interaction |
| Glassmorphism | Aesthetic pairing | Glass blur effects pair well with hover-reveal microinteractions and focus transitions |
| Minimalism | Philosophical alignment | Both prioritize restraint and purpose; Microinteraction Design expresses minimalism through motion |
| Brutalist Web Design | Conceptual opposite | Brutalism rejects polish and animation; Microinteraction Design celebrates refined, intentional motion |
| Skeuomorphism | Historical predecessor | Skeuomorphism used static visual metaphors for affordance; Microinteraction Design uses motion for the same purpose |
| Motion Design (Kinetic) | Parent discipline | Motion design encompasses all animation; Microinteraction Design specifically focuses on small, functional UI animations |
| Dark Mode UI | Frequently combined | Dark backgrounds make subtle glows, focus rings, and color-shift microinteractions more visually prominent |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Microinteraction Design - Quick Start</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    /* ============================================
       CSS Custom Properties (Design Tokens)
       ============================================ */
    :root {
      /* Backgrounds */
      --mi-bg-primary: #FFFFFF;
      --mi-bg-secondary: #FAFAFA;
      --mi-bg-skeleton: #F1F5F9;

      /* Borders */
      --mi-border: #E2E8F0;

      /* Text */
      --mi-text-primary: #0F172A;
      --mi-text-body: #334155;
      --mi-text-secondary: #64748B;
      --mi-text-placeholder: #94A3B8;

      /* Accent */
      --mi-accent: #3B82F6;
      --mi-accent-hover: #2563EB;
      --mi-accent-secondary: #8B5CF6;

      /* State */
      --mi-success: #10B981;
      --mi-warning: #F59E0B;
      --mi-error: #EF4444;
      --mi-info: #06B6D4;

      /* Shadows */
      --mi-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --mi-shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
      --mi-shadow-lg: 0 10px 25px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04);
      --mi-shadow-xl: 0 20px 40px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.04);

      /* Typography */
      --mi-font-body: 'Inter', system-ui, -apple-system, sans-serif;
      --mi-font-heading: 'Manrope', 'Inter', sans-serif;
      --mi-font-mono: 'JetBrains Mono', monospace;

      /* Animation Tokens */
      --mi-duration-fast: 150ms;
      --mi-duration-normal: 250ms;
      --mi-duration-slow: 400ms;
      --mi-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
      --mi-ease-in: cubic-bezier(0.55, 0, 1, 0.45);
      --mi-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
      --mi-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* ============================================
       Reset & Base
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
      font-family: var(--mi-font-body);
      font-size: 16px;
      line-height: 1.6;
      color: var(--mi-text-body);
      background: var(--mi-bg-primary);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--mi-font-heading);
      color: var(--mi-text-primary);
      line-height: 1.2;
    }

    a {
      color: var(--mi-accent);
      text-decoration: none;
      transition: color var(--mi-duration-fast) var(--mi-ease-out);
    }

    a:hover {
      color: var(--mi-accent-hover);
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ============================================
       Accessibility: Reduced Motion
       ============================================ */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* ============================================
       Navigation
       ============================================ */
    .mi-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 48px;
      background: transparent;
      transition:
        background var(--mi-duration-slow) var(--mi-ease-out),
        padding var(--mi-duration-slow) var(--mi-ease-out),
        box-shadow var(--mi-duration-slow) var(--mi-ease-out);
    }

    .mi-nav.scrolled {
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 12px 48px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .mi-nav-brand {
      font-family: var(--mi-font-heading);
      font-weight: 800;
      font-size: 1.25rem;
      color: var(--mi-text-primary);
      letter-spacing: -0.02em;
    }

    .mi-nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
    }

    .mi-nav-link {
      position: relative;
      color: var(--mi-text-body);
      font-weight: 500;
      font-size: 0.938rem;
      padding: 4px 0;
      transition: color var(--mi-duration-fast) var(--mi-ease-out);
    }

    .mi-nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--mi-accent);
      border-radius: 1px;
      transition: width var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-nav-link:hover {
      color: var(--mi-accent);
    }

    .mi-nav-link:hover::after {
      width: 100%;
    }

    /* ============================================
       Hero Section
       ============================================ */
    .mi-hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 24px 80px;
      overflow: hidden;
    }

    .mi-hero-bg {
      position: absolute;
      border-radius: 50%;
      opacity: 0.07;
      filter: blur(80px);
      pointer-events: none;
      animation: mi-float 20s ease-in-out infinite;
    }

    .mi-hero-bg-1 {
      width: 600px;
      height: 600px;
      top: -150px;
      right: -100px;
      background: var(--mi-accent);
    }

    .mi-hero-bg-2 {
      width: 500px;
      height: 500px;
      bottom: -120px;
      left: -80px;
      background: var(--mi-accent-secondary);
      animation-delay: -7s;
    }

    @keyframes mi-float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(20px, -30px) scale(1.05); }
      66% { transform: translate(-15px, 15px) scale(0.95); }
    }

    .mi-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: rgba(59, 130, 246, 0.08);
      color: var(--mi-accent);
      border-radius: 20px;
      font-size: 0.813rem;
      font-weight: 600;
      margin-bottom: 24px;
      opacity: 0;
      transform: translateY(20px);
      animation: mi-fade-up 700ms var(--mi-ease-out) 100ms forwards;
    }

    .mi-hero-badge .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--mi-accent);
      animation: mi-pulse 2s ease-in-out infinite;
    }

    @keyframes mi-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    .mi-hero-title {
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      max-width: 720px;
      opacity: 0;
      transform: translateY(30px);
      animation: mi-fade-up 800ms var(--mi-ease-out) 250ms forwards;
    }

    .mi-hero-title .accent {
      background: linear-gradient(135deg, var(--mi-accent), var(--mi-accent-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .mi-hero-subtitle {
      font-size: 1.125rem;
      color: var(--mi-text-secondary);
      max-width: 540px;
      margin-top: 16px;
      opacity: 0;
      transform: translateY(20px);
      animation: mi-fade-up 800ms var(--mi-ease-out) 450ms forwards;
    }

    .mi-hero-actions {
      display: flex;
      gap: 12px;
      margin-top: 36px;
      opacity: 0;
      transform: translateY(20px);
      animation: mi-fade-up 800ms var(--mi-ease-out) 650ms forwards;
    }

    @keyframes mi-fade-up {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ============================================
       Buttons
       ============================================ */
    .mi-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 28px;
      border: none;
      border-radius: 8px;
      font-family: var(--mi-font-body);
      font-weight: 600;
      font-size: 0.938rem;
      cursor: pointer;
      overflow: hidden;
      transition:
        background var(--mi-duration-fast) var(--mi-ease-out),
        transform var(--mi-duration-fast) var(--mi-ease-spring),
        box-shadow var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-btn-primary {
      background: var(--mi-accent);
      color: #FFFFFF;
      box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    }

    .mi-btn-primary:hover {
      background: var(--mi-accent-hover);
      box-shadow: 0 4px 16px rgba(59, 130, 246, 0.35);
      transform: translateY(-1px);
    }

    .mi-btn-primary:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 80ms;
    }

    .mi-btn-secondary {
      background: transparent;
      color: var(--mi-text-body);
      border: 1.5px solid var(--mi-border);
    }

    .mi-btn-secondary:hover {
      border-color: var(--mi-accent);
      color: var(--mi-accent);
      transform: translateY(-1px);
    }

    .mi-btn-secondary:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 80ms;
    }

    /* Ripple */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: mi-ripple 600ms ease-out forwards;
      pointer-events: none;
    }

    @keyframes mi-ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* ============================================
       Section Wrapper
       ============================================ */
    .mi-section {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .mi-section-header {
      text-align: center;
      margin-bottom: 64px;
    }

    .mi-section-label {
      font-size: 0.813rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--mi-accent);
      margin-bottom: 12px;
    }

    .mi-section-title {
      font-size: clamp(1.75rem, 4vw, 2.25rem);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .mi-section-desc {
      color: var(--mi-text-secondary);
      max-width: 520px;
      margin: 12px auto 0;
      font-size: 1.063rem;
    }

    /* ============================================
       Feature Cards
       ============================================ */
    .mi-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }

    .mi-card {
      background: var(--mi-bg-primary);
      border: 1px solid var(--mi-border);
      border-radius: 14px;
      padding: 32px;
      box-shadow: var(--mi-shadow-sm);
      transition:
        transform var(--mi-duration-normal) var(--mi-ease-out),
        box-shadow var(--mi-duration-normal) var(--mi-ease-out),
        border-color var(--mi-duration-normal) var(--mi-ease-out);
      will-change: transform;
    }

    .mi-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--mi-shadow-xl);
      border-color: transparent;
    }

    .mi-card:active {
      transform: translateY(-2px);
      transition-duration: var(--mi-duration-fast);
    }

    .mi-card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
      transition: transform var(--mi-duration-normal) var(--mi-ease-spring);
    }

    .mi-card:hover .mi-card-icon {
      transform: scale(1.1) rotate(-3deg);
    }

    .mi-card-icon.blue { background: rgba(59, 130, 246, 0.1); }
    .mi-card-icon.purple { background: rgba(139, 92, 246, 0.1); }
    .mi-card-icon.green { background: rgba(16, 185, 129, 0.1); }
    .mi-card-icon.cyan { background: rgba(6, 182, 212, 0.1); }

    .mi-card h3 {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .mi-card p {
      color: var(--mi-text-secondary);
      font-size: 0.938rem;
      line-height: 1.65;
    }

    .mi-card-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 16px;
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--mi-accent);
      opacity: 0;
      transform: translateY(6px);
      transition:
        opacity var(--mi-duration-normal) var(--mi-ease-out),
        transform var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-card:hover .mi-card-link {
      opacity: 1;
      transform: translateY(0);
    }

    .mi-card-link .arrow {
      transition: transform var(--mi-duration-fast) var(--mi-ease-out);
    }

    .mi-card-link:hover .arrow {
      transform: translateX(3px);
    }

    /* ============================================
       Interactive Demo Section
       ============================================ */
    .mi-demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
    }

    .mi-demo-panel {
      background: var(--mi-bg-secondary);
      border-radius: 14px;
      padding: 32px;
      text-align: center;
    }

    .mi-demo-panel h4 {
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--mi-text-secondary);
      margin-bottom: 24px;
    }

    /* Toggle demo */
    .mi-toggle {
      position: relative;
      width: 52px;
      height: 28px;
      background: var(--mi-border);
      border-radius: 14px;
      cursor: pointer;
      border: none;
      margin: 0 auto;
      display: block;
      transition: background var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-toggle::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 22px;
      height: 22px;
      background: #FFFFFF;
      border-radius: 50%;
      box-shadow: var(--mi-shadow-sm);
      transition:
        transform var(--mi-duration-normal) var(--mi-ease-spring),
        box-shadow var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-toggle.active {
      background: var(--mi-accent);
    }

    .mi-toggle.active::after {
      transform: translateX(24px);
      box-shadow: var(--mi-shadow-md);
    }

    .mi-toggle-label {
      margin-top: 12px;
      font-size: 0.875rem;
      color: var(--mi-text-secondary);
      transition: color var(--mi-duration-fast) var(--mi-ease-out);
    }

    /* Input demo */
    .mi-input-wrapper {
      position: relative;
      text-align: left;
    }

    .mi-input {
      width: 100%;
      padding: 14px 16px;
      border: 1.5px solid var(--mi-border);
      border-radius: 8px;
      font-family: var(--mi-font-body);
      font-size: 0.938rem;
      color: var(--mi-text-body);
      background: var(--mi-bg-primary);
      outline: none;
      transition:
        border-color var(--mi-duration-fast) var(--mi-ease-out),
        box-shadow var(--mi-duration-fast) var(--mi-ease-out);
    }

    .mi-input::placeholder {
      color: var(--mi-text-placeholder);
    }

    .mi-input:focus {
      border-color: var(--mi-accent);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }

    .mi-input-hint {
      font-size: 0.813rem;
      color: var(--mi-text-placeholder);
      margin-top: 8px;
      opacity: 0;
      transform: translateY(-4px);
      transition:
        opacity var(--mi-duration-fast) var(--mi-ease-out),
        transform var(--mi-duration-fast) var(--mi-ease-out);
    }

    .mi-input:focus ~ .mi-input-hint {
      opacity: 1;
      transform: translateY(0);
    }

    /* Skeleton demo */
    .mi-skeleton-demo {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .mi-skeleton {
      background: #E8ECF1;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
    }

    .mi-skeleton::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: mi-shimmer 1.8s ease-in-out infinite;
    }

    @keyframes mi-shimmer {
      to { transform: translateX(100%); }
    }

    .mi-skeleton-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .mi-skeleton-lines {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .mi-skeleton-line {
      height: 14px;
      border-radius: 4px;
    }

    .mi-skeleton-line:nth-child(1) { width: 50%; }
    .mi-skeleton-line:nth-child(2) { width: 100%; }
    .mi-skeleton-line:nth-child(3) { width: 75%; }

    /* Progress demo */
    .mi-progress-bar {
      width: 100%;
      height: 6px;
      background: var(--mi-bg-skeleton);
      border-radius: 3px;
      overflow: hidden;
    }

    .mi-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--mi-accent), var(--mi-accent-secondary));
      border-radius: 3px;
      width: 0%;
      transition: width 1.5s var(--mi-ease-out);
    }

    .mi-progress-label {
      margin-top: 10px;
      font-size: 0.875rem;
      color: var(--mi-text-secondary);
      font-variant-numeric: tabular-nums;
    }

    /* ============================================
       Scroll Reveal
       ============================================ */
    .mi-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition:
        opacity var(--mi-duration-slow) var(--mi-ease-out),
        transform var(--mi-duration-slow) var(--mi-ease-out);
    }

    .mi-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .mi-stagger > * {
      opacity: 0;
      transform: translateY(16px);
      transition:
        opacity var(--mi-duration-normal) var(--mi-ease-out),
        transform var(--mi-duration-normal) var(--mi-ease-out);
    }

    .mi-stagger.visible > *:nth-child(1) { transition-delay: 0ms; }
    .mi-stagger.visible > *:nth-child(2) { transition-delay: 100ms; }
    .mi-stagger.visible > *:nth-child(3) { transition-delay: 200ms; }
    .mi-stagger.visible > *:nth-child(4) { transition-delay: 300ms; }

    .mi-stagger.visible > * {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============================================
       Toast Notifications
       ============================================ */
    .mi-toast-container {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .mi-toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      background: var(--mi-bg-primary);
      border-radius: 10px;
      box-shadow: var(--mi-shadow-lg);
      border-left: 3px solid var(--mi-info);
      min-width: 300px;
      font-size: 0.875rem;
      font-weight: 500;
      animation: mi-toast-in 400ms var(--mi-ease-spring) forwards;
      position: relative;
      overflow: hidden;
    }

    .mi-toast.success { border-left-color: var(--mi-success); }
    .mi-toast.error   { border-left-color: var(--mi-error); }

    .mi-toast.exiting {
      animation: mi-toast-out 300ms var(--mi-ease-in) forwards;
    }

    @keyframes mi-toast-in {
      from { opacity: 0; transform: translateX(100%) scale(0.95); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }

    @keyframes mi-toast-out {
      to { opacity: 0; transform: translateX(100%) scale(0.95); }
    }

    .mi-toast-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      border-radius: 0 0 0 10px;
      animation: mi-toast-progress 3.5s linear forwards;
    }

    .mi-toast.success .mi-toast-progress { background: var(--mi-success); }
    .mi-toast.error .mi-toast-progress { background: var(--mi-error); }
    .mi-toast .mi-toast-progress { background: var(--mi-info); }

    @keyframes mi-toast-progress {
      from { width: 100%; }
      to   { width: 0%; }
    }

    /* ============================================
       CTA / Footer Section
       ============================================ */
    .mi-cta {
      text-align: center;
      padding: 80px 24px;
      background: var(--mi-bg-secondary);
    }

    .mi-cta h2 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      margin-bottom: 12px;
    }

    .mi-cta p {
      color: var(--mi-text-secondary);
      margin-bottom: 28px;
      font-size: 1.063rem;
    }

    .mi-footer {
      text-align: center;
      padding: 40px 24px;
      font-size: 0.813rem;
      color: var(--mi-text-placeholder);
      border-top: 1px solid var(--mi-border);
    }

    /* ============================================
       Responsive
       ============================================ */
    @media (max-width: 768px) {
      .mi-nav {
        padding: 16px 24px;
      }

      .mi-nav.scrolled {
        padding: 10px 24px;
      }

      .mi-nav-links {
        display: none;
      }

      .mi-hero {
        padding: 100px 20px 60px;
      }

      .mi-section {
        padding: 64px 20px;
      }

      .mi-card-grid {
        grid-template-columns: 1fr;
      }

      .mi-demo-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  <!-- Toast Container -->
  <div class="mi-toast-container" id="toastContainer"></div>

  <!-- Navigation -->
  <nav class="mi-nav" id="mainNav">
    <div class="mi-nav-brand">Microinteraction</div>
    <ul class="mi-nav-links">
      <li><a href="#features" class="mi-nav-link">Features</a></li>
      <li><a href="#demo" class="mi-nav-link">Demo</a></li>
      <li><a href="#cta" class="mi-nav-link">Get Started</a></li>
      <li>
        <button class="mi-btn mi-btn-primary mi-btn-sm"
                onclick="showToast('Welcome! You clicked the nav button.', 'success')"
                style="padding: 8px 18px; font-size: 0.813rem;">
          Try It
        </button>
      </li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="mi-hero">
    <div class="mi-hero-bg mi-hero-bg-1"></div>
    <div class="mi-hero-bg mi-hero-bg-2"></div>

    <div class="mi-hero-badge">
      <span class="dot"></span>
      Animation-Driven UI
    </div>

    <h1 class="mi-hero-title">
      Design That <span class="accent">Responds</span> to Every Interaction
    </h1>

    <p class="mi-hero-subtitle">
      Hover reveals, loading states, scroll triggers, and functional motion.
      Every animation serves a purpose.
    </p>

    <div class="mi-hero-actions">
      <button class="mi-btn mi-btn-primary" id="heroBtn">
        Explore Components
      </button>
      <button class="mi-btn mi-btn-secondary"
              onclick="showToast('Documentation link copied!', 'info')">
        View Docs &rarr;
      </button>
    </div>
  </section>

  <!-- Features Section -->
  <section class="mi-section" id="features">
    <div class="mi-section-header mi-reveal">
      <p class="mi-section-label">Features</p>
      <h2 class="mi-section-title">Purposeful Motion, Pixel-Perfect Feedback</h2>
      <p class="mi-section-desc">
        Every microinteraction is designed to communicate, confirm, and guide
        without ever distracting from the content.
      </p>
    </div>

    <div class="mi-card-grid mi-stagger">
      <div class="mi-card">
        <div class="mi-card-icon blue">&#9672;</div>
        <h3>Hover Reveals</h3>
        <p>
          Cards, buttons, and links respond to cursor proximity with
          elevation shifts, color transitions, and content reveals.
        </p>
        <a href="#" class="mi-card-link">
          Learn more <span class="arrow">&rarr;</span>
        </a>
      </div>

      <div class="mi-card">
        <div class="mi-card-icon purple">&#9881;</div>
        <h3>Loading States</h3>
        <p>
          Skeleton screens, shimmer effects, and progressive reveals
          keep users oriented during data fetching.
        </p>
        <a href="#" class="mi-card-link">
          Learn more <span class="arrow">&rarr;</span>
        </a>
      </div>

      <div class="mi-card">
        <div class="mi-card-icon green">&#9660;</div>
        <h3>Scroll Triggers</h3>
        <p>
          Content animates into view with staggered fade-ups and
          directional reveals as users scroll through sections.
        </p>
        <a href="#" class="mi-card-link">
          Learn more <span class="arrow">&rarr;</span>
        </a>
      </div>

      <div class="mi-card">
        <div class="mi-card-icon cyan">&#10003;</div>
        <h3>State Feedback</h3>
        <p>
          Toggle switches, form validation, success confirmations,
          and error shakes provide instant, clear feedback.
        </p>
        <a href="#" class="mi-card-link">
          Learn more <span class="arrow">&rarr;</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Demo Section -->
  <section class="mi-section" id="demo" style="background: var(--mi-bg-secondary); max-width: none; padding-left: 24px; padding-right: 24px;">
    <div style="max-width: 1200px; margin: 0 auto;">
      <div class="mi-section-header mi-reveal">
        <p class="mi-section-label">Interactive Demo</p>
        <h2 class="mi-section-title">Try These Microinteractions</h2>
        <p class="mi-section-desc">
          Each panel below is a live, interactive example. Click, type,
          and observe the motion feedback.
        </p>
      </div>

      <div class="mi-demo-grid mi-stagger">

        <!-- Toggle Demo -->
        <div class="mi-demo-panel">
          <h4>Toggle Switch</h4>
          <button class="mi-toggle" id="demoToggle"
                  aria-label="Toggle switch demo"></button>
          <p class="mi-toggle-label" id="toggleLabel">Off</p>
        </div>

        <!-- Input Demo -->
        <div class="mi-demo-panel">
          <h4>Input Focus State</h4>
          <div class="mi-input-wrapper">
            <input type="text" class="mi-input"
                   placeholder="Start typing here...">
            <p class="mi-input-hint">
              Focus ring and hint appear with animated transitions
            </p>
          </div>
        </div>

        <!-- Skeleton Demo -->
        <div class="mi-demo-panel">
          <h4>Skeleton Loading</h4>
          <div class="mi-skeleton-demo">
            <div class="mi-skeleton mi-skeleton-avatar"></div>
            <div class="mi-skeleton-lines">
              <div class="mi-skeleton mi-skeleton-line"></div>
              <div class="mi-skeleton mi-skeleton-line"></div>
              <div class="mi-skeleton mi-skeleton-line"></div>
            </div>
          </div>
        </div>

        <!-- Progress Demo -->
        <div class="mi-demo-panel">
          <h4>Progress Bar</h4>
          <div class="mi-progress-bar">
            <div class="mi-progress-fill" id="progressFill"></div>
          </div>
          <p class="mi-progress-label" id="progressLabel">0%</p>
          <button class="mi-btn mi-btn-secondary"
                  style="margin-top: 16px; padding: 8px 18px; font-size: 0.813rem;"
                  id="progressBtn">
            Animate
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="mi-cta mi-reveal" id="cta">
    <h2>Ready to Add Life to Your Interfaces?</h2>
    <p>Start building with purposeful, performant microinteractions today.</p>
    <button class="mi-btn mi-btn-primary"
            onclick="showToast('Project initialized! Happy building.', 'success')">
      Get Started &rarr;
    </button>
  </section>

  <!-- Footer -->
  <footer class="mi-footer">
    <p>Microinteraction Design &mdash; Animation-driven UI. Built with purpose.</p>
  </footer>

  <!-- ============================================
       JavaScript: Interaction Logic
       ============================================ -->
  <script>
    /* ------------------------------------------
       Navigation scroll effect
       ------------------------------------------ */
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    /* ------------------------------------------
       Scroll-triggered reveal (Intersection Observer)
       ------------------------------------------ */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.mi-reveal, .mi-stagger').forEach(el => {
      revealObserver.observe(el);
    });

    /* ------------------------------------------
       Button ripple effect
       ------------------------------------------ */
    document.querySelectorAll('.mi-btn-primary').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    });

    /* ------------------------------------------
       Toggle switch demo
       ------------------------------------------ */
    const toggle = document.getElementById('demoToggle');
    const toggleLabel = document.getElementById('toggleLabel');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      const isActive = toggle.classList.contains('active');
      toggleLabel.textContent = isActive ? 'On' : 'Off';
      toggleLabel.style.color = isActive
        ? 'var(--mi-accent)'
        : 'var(--mi-text-secondary)';
    });

    /* ------------------------------------------
       Progress bar demo
       ------------------------------------------ */
    const progressFill = document.getElementById('progressFill');
    const progressLabel = document.getElementById('progressLabel');
    const progressBtn = document.getElementById('progressBtn');
    let progressRunning = false;

    progressBtn.addEventListener('click', () => {
      if (progressRunning) return;
      progressRunning = true;
      progressFill.style.width = '0%';
      progressLabel.textContent = '0%';

      requestAnimationFrame(() => {
        progressFill.style.width = '100%';
      });

      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        if (count > 100) {
          clearInterval(interval);
          progressRunning = false;
          showToast('Progress complete!', 'success');
          return;
        }
        progressLabel.textContent = count + '%';
      }, 15);
    });

    /* ------------------------------------------
       Toast notification system
       ------------------------------------------ */
    function showToast(message, type = 'info') {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = `mi-toast ${type}`;
      toast.innerHTML = `
        <span>${message}</span>
        <div class="mi-toast-progress"></div>
      `;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('exiting');
        toast.addEventListener('animationend', () => toast.remove());
      }, 3500);
    }

    /* ------------------------------------------
       Hero CTA smooth scroll
       ------------------------------------------ */
    document.getElementById('heroBtn').addEventListener('click', () => {
      document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
      });
    });
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Use CSS custom properties for animation tokens**: Define `--duration`, `--ease`, and `--delay` values as design tokens so that timing can be adjusted globally and consistently across all components.
- **Prefer `transform` and `opacity` for all animations**: These two properties are handled by the GPU compositor and do not trigger layout or paint recalculations, ensuring smooth 60fps performance even on mobile devices.
- **Implement Intersection Observer for scroll reveals**: Rather than listening to scroll events (which fire constantly and can cause jank), use the `IntersectionObserver` API to trigger entrance animations only when elements enter the viewport.
- **Test with `prefers-reduced-motion: reduce`**: Always provide a fallback for users who have enabled reduced motion in their operating system settings. At minimum, replace animations with instant state changes; at best, provide simplified crossfades.
- **Keep animation durations between 100-400ms**: Research from the Nielsen Norman Group and Google's Material Design guidelines consistently shows that UI feedback animations in this range feel responsive without being sluggish. Reserve durations above 400ms for page-level transitions only.
- **Use `will-change` judiciously**: Apply `will-change: transform` to elements that will animate on hover or scroll, but remove it (or avoid applying it to too many elements) to prevent excessive GPU memory usage.
- **Design for animation choreography, not isolated effects**: Plan how multiple elements animate together -- stagger card reveals by 80-100ms, coordinate hero text entrance with background motion, and ensure exit animations are the reverse of entrances for spatial consistency.
- **Profile in browser DevTools**: Use Chrome's Performance panel and the "Rendering" tab's paint flashing overlay to verify that your animations are not triggering unexpected layout shifts or repaints, especially on lower-end devices.
