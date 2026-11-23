# 3D Immersive Design Reference

## Overview

3D Immersive web design is a spatial, depth-driven aesthetic that leverages WebGL, Three.js, and GPU-accelerated rendering to transform flat browser windows into navigable three-dimensional environments. Rather than presenting content on a traditional 2D plane, this approach treats the viewport as a window into a scene with real depth, perspective, and physicality. Users scroll through layered parallax landscapes, interact with rotating 3D models, and trigger cinematic camera movements that unfold content like a directed visual narrative.

The aesthetic emerged from the convergence of powerful browser APIs (WebGL, WebGPU), mature JavaScript frameworks (Three.js, Babylon.js, R3F), and animation orchestration libraries like GSAP with its ScrollTrigger plugin. Together, these tools enable designers to build environments where scroll position drives camera paths, lighting transitions, and shader-based visual effects -- turning passive browsing into active exploration. Background layers move slower than foreground elements, creating the parallax depth illusion that has become a hallmark of the style.

Visually, 3D Immersive design favors dark, atmospheric backgrounds that allow luminous 3D objects and volumetric lighting to take center stage. Color palettes lean toward deep space blacks, rich indigos, and slate blues, punctuated by electric accent colors -- neon cyan, violet, warm amber -- that serve as focal points within the dimensional space. Typography is clean and geometric, chosen for legibility against complex 3D backdrops, and often integrated spatially so that text planes recede or advance in the z-axis.

Performance is a first-class concern. The difference between janky 30fps parallax and buttery smooth 60fps GPU-accelerated rendering is immediately felt by users. Optimized model formats (glTF, GLB, Draco-compressed meshes), lazy-loaded assets, and progressive enhancement ensure the experience remains fast. By 2026, 3D immersive design has matured from experimental gimmick to purposeful, interactive spatial storytelling -- responsive across desktop, tablet, and mobile without breaking layout or usability.

---

## Visual Characteristics

### Core Design Traits

- **Parallax depth layering**: Multiple content planes move at different scroll speeds, creating the illusion of z-depth; background elements scroll slower than foreground, producing a three-dimensional feel on a 2D screen
- **WebGL-rendered 3D scenes**: Full Three.js or Babylon.js scenes embedded as page backgrounds or section heroes, featuring real geometry, lighting, and camera perspectives
- **Scroll-triggered animation**: GSAP ScrollTrigger binds scroll position to camera movement, object rotation, material transitions, and shader uniforms, turning page navigation into a cinematic sequence
- **Volumetric and atmospheric lighting**: Soft fog, bloom, god rays, and ambient occlusion create a sense of atmosphere and spatial depth within scenes
- **Interactive object manipulation**: Users can rotate, zoom, or drag 3D models (product showcases, architectural walkthroughs, data visualizations) with pointer and touch input
- **Shader-driven visual effects**: Custom GLSL shaders produce distortion, ripple, noise, gradient transitions, and post-processing effects (chromatic aberration, film grain, depth of field)
- **Glassmorphism and frosted overlays**: Semi-transparent UI panels with backdrop-filter blur float above 3D scenes, anchoring readable content over dynamic backgrounds
- **Particle and point-cloud systems**: Floating particles, dust motes, star fields, or data-driven point clouds add ambient motion and spatial density
- **Perspective-aware typography**: Text elements that respond to scroll or mouse position with subtle 3D transforms, creating spatial hierarchy where closer text feels more immediate
- **Dark atmospheric environments**: Deep, dark base colors allow luminous 3D objects, light sources, and accent colors to command visual attention
- **Smooth easing and inertia**: Scroll-linked animations use custom easing curves and smooth damping so motion feels organic rather than mechanical
- **Progressive reveal sequences**: Content sections unfold through scroll, with elements fading, scaling, or sliding into position as the camera "moves" through the scene

### Design Principles

- **Depth as hierarchy**: Z-position communicates importance; elements closer to the viewer demand attention, while receding elements become contextual background
- **Motion with purpose**: Every animation must serve narrative or navigational function; gratuitous motion distracts and fatigues
- **Performance-first rendering**: Optimize aggressively (compressed meshes, texture atlases, LOD, lazy loading) to maintain 60fps; a slow 3D site is worse than a fast 2D one
- **Progressive enhancement**: Deliver a functional, attractive 2D fallback for devices that cannot run WebGL; 3D is an enhancement, not a requirement
- **Spatial storytelling**: Structure the page as a journey; the user travels through a scene, discovering content in a deliberate cinematic sequence
- **Restraint in complexity**: Limit the number of simultaneously animated elements; visual noise undermines the sense of spatial clarity
- **Contrast for legibility**: Ensure text, buttons, and interactive elements maintain high contrast against shifting 3D backgrounds through backplates, blur panels, or drop shadows
- **Responsive spatial design**: 3D environments must adapt across viewport sizes; simplify scenes on mobile, reduce particle counts, and adjust camera FOV

---

## Color Palette

3D Immersive design relies on dark, atmospheric base colors that recede visually, allowing luminous accents, light sources, and 3D geometry to command attention. The palette draws from deep space, underwater environments, and cinematic sci-fi lighting -- rich blacks and indigos as canvas, with electric blues, violets, and warm ambers as focal-point accents.

| Swatch | Hex | Role/Usage |
|--------|-----|------------|
| Void Black | `#0B0B0F` | Primary page background; deepest depth layer |
| Deep Space | `#101018` | Secondary background; scene container |
| Midnight Indigo | `#161630` | Card and panel backgrounds |
| Slate Abyss | `#1E1E2E` | Elevated surface; modal backgrounds |
| Neon Cyan | `#00E5FF` | Primary accent; interactive highlights, links |
| Electric Violet | `#7C3AED` | Secondary accent; gradients, glow effects |
| Plasma Magenta | `#E040FB` | Tertiary accent; hover states, particle trails |
| Amber Glow | `#F59E0B` | Warm accent; call-to-action highlights |
| Holo Green | `#10B981` | Success states; positive indicators |
| Fog Grey | `#94A3B8` | Secondary text; muted UI elements |
| Cloud White | `#F1F5F9` | Primary text; headings on dark backgrounds |
| Ice Blue | `#E0F2FE` | Subtle text; descriptions, captions |
| Depth Blue | `#1E3A5F` | Mid-ground elements; subtle layering |
| Laser Red | `#EF4444` | Error states; danger indicators |
| Chrome Silver | `#CBD5E1` | Borders; subtle dividers; metadata |

### CSS Custom Properties

```css
:root {
  --imm-void: #0B0B0F;
  --imm-deep-space: #101018;
  --imm-indigo: #161630;
  --imm-slate: #1E1E2E;
  --imm-cyan: #00E5FF;
  --imm-violet: #7C3AED;
  --imm-magenta: #E040FB;
  --imm-amber: #F59E0B;
  --imm-green: #10B981;
  --imm-fog: #94A3B8;
  --imm-white: #F1F5F9;
  --imm-ice: #E0F2FE;
  --imm-depth-blue: #1E3A5F;
  --imm-red: #EF4444;
  --imm-chrome: #CBD5E1;
}
```

---

## Typography

3D Immersive sites demand typography that is geometric, clean, and highly legible against complex, animated backgrounds. Sans-serif faces with consistent stroke widths and generous x-heights perform best. Display headings may use wide tracking and uppercase styling to evoke a spatial, HUD-like quality, while body text stays neutral and readable. Spatial typography -- text that subtly responds to depth or perspective transforms -- adds dimensionality when used with restraint.

### Recommended Google Fonts

| Font | Weight(s) | Usage | Link |
|------|-----------|-------|------|
| **Inter** | 300, 400, 500, 600, 700 | Body text; UI labels; excellent screen readability | [Inter](https://fonts.google.com/specimen/Inter) |
| **Space Grotesk** | 300, 400, 500, 600, 700 | Subheadings; technical text; modern geometric feel | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| **Exo 2** | 300, 400, 500, 600, 700, 800 | Display headings; futuristic geometric sans-serif | [Exo 2](https://fonts.google.com/specimen/Exo+2) |
| **Outfit** | 300, 400, 500, 600, 700, 800 | Versatile geometric sans; clean and contemporary | [Outfit](https://fonts.google.com/specimen/Outfit) |
| **JetBrains Mono** | 400, 500, 700 | Code blocks; technical data; monospaced accent | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

### Font Pairing Suggestions

| Heading | Body | Vibe |
|---------|------|------|
| Exo 2 700 | Inter 400 | Cinematic spatial interface |
| Space Grotesk 600 | Inter 400 | Technical 3D dashboard |
| Outfit 700 | Space Grotesk 400 | Clean immersive product showcase |

### CSS Example

```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.75;
  color: #F1F5F9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #F1F5F9;
}

h1 { font-size: clamp(2.2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.4rem, 3vw, 2rem); }
h3 { font-size: clamp(1.1rem, 2vw, 1.4rem); }

.mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}
```

---

## Layout Principles

- **Full-viewport sections**: Each content section occupies 100vh (or more), creating distinct "scenes" that the user scrolls through like frames in a film
- **Canvas as base layer**: A persistent `<canvas>` element (Three.js renderer) spans the full viewport behind all HTML content, serving as the living background
- **Floating glass panels**: Content containers use `backdrop-filter: blur()` and semi-transparent backgrounds to float above the 3D scene without fully obscuring it
- **Z-axis content stacking**: Layer content at different `translateZ` depths using CSS `perspective` to create real parallax without JavaScript for simpler implementations
- **Sticky scroll sections**: Use `position: sticky` to pin content panels while the 3D scene animates beneath or around them during scroll
- **Wide negative space**: Allow generous breathing room around text and interactive elements; the 3D environment itself serves as visual content, so UI elements should not crowd it
- **Asymmetric composition**: Offset text blocks and UI panels to one side, leaving the 3D scene visible on the other; avoid centering everything over the 3D content
- **Scroll-length as timeline**: Extend page height (300vh-500vh per scene) to give scroll-triggered animations enough distance to unfold smoothly and cinematically
- **Viewport-relative sizing**: Use `vw`, `vh`, `vmin`, and `clamp()` for sizing so spatial relationships scale proportionally across screen sizes
- **Layered z-index architecture**: Establish clear z-index layers -- canvas (0), background overlays (10), content panels (20), navigation (30), modals (40) -- to prevent stacking conflicts
- **Progressive loading placeholders**: Reserve space for 3D content with low-poly previews or gradient placeholders while assets load asynchronously
- **Mobile simplification**: On small viewports, replace complex 3D scenes with static atmospheric backgrounds or simplified particle effects to maintain performance

---

## CSS / Design Techniques

### Immersive Card

```css
.imm-card {
  background: rgba(22, 22, 48, 0.65);
  border: 1px solid rgba(0, 229, 255, 0.15);
  border-radius: 12px;
  padding: 36px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 0 30px rgba(0, 229, 255, 0.06),
    0 8px 32px rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.4s ease;
}

.imm-card:hover {
  transform: translateY(-4px) translateZ(0);
  box-shadow:
    0 0 40px rgba(0, 229, 255, 0.12),
    0 16px 48px rgba(0, 0, 0, 0.6);
  border-color: rgba(0, 229, 255, 0.3);
}

.imm-card h3 {
  font-family: 'Exo 2', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #00E5FF;
  margin-bottom: 12px;
}

.imm-card p {
  color: #CBD5E1;
  line-height: 1.7;
}
```

### Depth Button

```css
.imm-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(124, 58, 237, 0.15));
  color: #00E5FF;
  border: 1px solid rgba(0, 229, 255, 0.3);
  border-radius: 8px;
  padding: 14px 32px;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.imm-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.imm-button:hover {
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(124, 58, 237, 0.25));
  box-shadow:
    0 0 24px rgba(0, 229, 255, 0.2),
    0 0 48px rgba(124, 58, 237, 0.1);
  border-color: rgba(0, 229, 255, 0.5);
  transform: translateY(-2px);
}

.imm-button:hover::before {
  left: 100%;
}
```

### Spatial Navigation

```css
.imm-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: rgba(11, 11, 15, 0.7);
  border-bottom: 1px solid rgba(0, 229, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: background 0.3s ease;
}

.imm-nav.scrolled {
  background: rgba(11, 11, 15, 0.92);
  border-bottom-color: rgba(0, 229, 255, 0.2);
}

.imm-nav .logo {
  font-family: 'Exo 2', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #F1F5F9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.imm-nav a {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #94A3B8;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 8px 16px;
  border-radius: 6px;
  transition: color 0.25s ease, background 0.25s ease;
}

.imm-nav a:hover {
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.06);
}

.imm-nav a.active {
  color: #00E5FF;
}
```

### Hero Scene Overlay

```css
.imm-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.imm-hero .content {
  position: relative;
  z-index: 10;
  max-width: 720px;
  padding: 0 24px;
}

.imm-hero h1 {
  font-family: 'Exo 2', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #F1F5F9;
  text-shadow: 0 0 60px rgba(0, 229, 255, 0.2);
  margin-bottom: 20px;
  line-height: 1.1;
}

.imm-hero .subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: #CBD5E1;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto 32px;
}

.imm-hero .scroll-cue {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #94A3B8;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
```

### Parallax Layer System

```css
.imm-parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
}

.imm-parallax-layer--back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateZ(-2px) scale(3);
  z-index: -1;
}

.imm-parallax-layer--mid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateZ(-1px) scale(2);
  z-index: 0;
}

.imm-parallax-layer--front {
  position: relative;
  transform: translateZ(0);
  z-index: 1;
}
```

### Glow Text Effect

```css
.imm-glow-text {
  color: #F1F5F9;
  text-shadow:
    0 0 10px rgba(0, 229, 255, 0.4),
    0 0 30px rgba(0, 229, 255, 0.2),
    0 0 60px rgba(0, 229, 255, 0.1);
}

.imm-gradient-text {
  background: linear-gradient(135deg, #00E5FF, #7C3AED, #E040FB);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Atmospheric Background

```css
.imm-atmosphere {
  min-height: 100vh;
  background: #0B0B0F;
  background-image:
    radial-gradient(ellipse at 20% 30%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(0, 229, 255, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 40%);
  position: relative;
}

.imm-atmosphere::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(241, 245, 249, 0.4) 50%, transparent 50%),
    radial-gradient(1px 1px at 30% 60%, rgba(241, 245, 249, 0.3) 50%, transparent 50%),
    radial-gradient(1px 1px at 55% 15%, rgba(241, 245, 249, 0.5) 50%, transparent 50%),
    radial-gradient(1px 1px at 72% 45%, rgba(241, 245, 249, 0.25) 50%, transparent 50%),
    radial-gradient(1px 1px at 88% 78%, rgba(241, 245, 249, 0.35) 50%, transparent 50%),
    radial-gradient(1px 1px at 45% 90%, rgba(241, 245, 249, 0.2) 50%, transparent 50%);
  pointer-events: none;
  animation: starTwinkle 6s ease-in-out infinite alternate;
}

@keyframes starTwinkle {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}
```

### Scroll-Reveal Animation

```css
.imm-reveal {
  opacity: 0;
  transform: translateY(40px) translateZ(0);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.imm-reveal.visible {
  opacity: 1;
  transform: translateY(0) translateZ(0);
}

.imm-reveal.from-left {
  transform: translateX(-60px) translateZ(0);
}

.imm-reveal.from-left.visible {
  transform: translateX(0) translateZ(0);
}

.imm-reveal.from-right {
  transform: translateX(60px) translateZ(0);
}

.imm-reveal.from-right.visible {
  transform: translateX(0) translateZ(0);
}

.imm-reveal.scale-in {
  transform: scale(0.9) translateZ(0);
}

.imm-reveal.scale-in.visible {
  transform: scale(1) translateZ(0);
}
```

---

## Design Do's and Don'ts

### Do's

- **Maintain 60fps**: Profile every animation; use `transform` and `opacity` for GPU-composited changes; avoid layout-triggering properties (`top`, `left`, `width`, `height`) in animations
- **Provide scroll cues**: Users need visual indicators (animated chevrons, "scroll to explore" labels, progress indicators) to understand that the page is interactive and scroll-driven
- **Use progressive enhancement**: Build a solid 2D experience first, then layer 3D on top for capable devices; detect WebGL support before initializing Three.js scenes
- **Compress 3D assets aggressively**: Use Draco compression for meshes, basis/KTX2 for textures, and glTF/GLB as the delivery format; large unoptimized models destroy performance
- **Layer glassmorphic panels over 3D**: Use `backdrop-filter: blur()` on content containers so text remains legible while the 3D scene stays visible and atmospheric beneath
- **Test on real devices**: GPU performance varies wildly; test on mid-range phones, integrated-GPU laptops, and high-end desktops to calibrate scene complexity
- **Implement smooth scroll interpolation**: Use lerp-based scroll smoothing (or GSAP ScrollSmoother) so scroll-driven camera movements feel cinematic rather than jerky
- **Add loading states**: 3D assets take time; show progress bars, skeleton screens, or low-poly placeholders while scenes load

### Don'ts

- **Avoid blocking the main thread**: Offload heavy computation (physics, mesh generation) to Web Workers; a frozen UI during 3D loading is unacceptable
- **Do not auto-play heavy scenes on mobile**: Detect device capabilities and serve simplified versions; full particle systems on low-end devices cause battery drain and frame drops
- **Avoid scroll-jacking without escape**: Never prevent native scroll entirely; users must always be able to navigate with keyboard, trackpad, or touch as expected
- **Do not over-animate**: Resist the urge to make everything move; too many simultaneous animations create visual chaos and trigger motion sickness in sensitive users
- **Avoid text directly over unblurred 3D**: Placing text on rapidly animating, high-contrast 3D backgrounds without a frost panel or backdrop makes content unreadable
- **Do not ignore `prefers-reduced-motion`**: Respect the user's OS-level motion preference; disable parallax, reduce particle counts, and simplify transitions for users who opt out
- **Avoid enormous texture files**: A single 4K uncompressed texture can be 20MB+; always resize, compress, and use mipmaps appropriate for screen resolution
- **Do not neglect fallback content**: If WebGL fails to initialize (older browsers, disabled hardware acceleration), the user should still see styled HTML content, not a blank page

---

## Related Aesthetics

| Aesthetic | Relationship |
|-----------|-------------|
| **Glassmorphism** | Shares the frosted, translucent panel approach used to float UI elements over dynamic backgrounds; 3D Immersive uses glass panels as its primary content container strategy |
| **Dark Mode / Dark UI** | Both rely on dark backgrounds and luminous accents; 3D Immersive extends dark UI into literal spatial depth with WebGL scenes |
| **Cyberpunk** | Overlaps in neon accent colors, dark environments, and futuristic atmosphere, but Cyberpunk leans grittier with more saturated chaos |
| **Neomorphism** | Both explore depth and dimensionality, but Neomorphism uses soft shadows on flat surfaces while 3D Immersive uses actual rendered geometry |
| **Parallax Minimal** | A stripped-down relative; uses CSS-only parallax layers without full WebGL scenes, suitable as a lightweight alternative |
| **Spatial UI (Apple Vision)** | Shares the philosophy of UI elements existing in 3D space with depth-based hierarchy; visionOS design language is a native-app cousin |
| **Holographic** | Both use iridescent, light-refracting visual language; Holographic focuses on surface treatment while 3D Immersive focuses on spatial environment |
| **Sci-Fi Interface** | Shares the HUD-style typography and technical aesthetic, but Sci-Fi Interface is typically 2D with faux-depth styling rather than true 3D rendering |

---

## Quick-Start HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Immersive Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --imm-void: #0B0B0F;
      --imm-deep-space: #101018;
      --imm-indigo: #161630;
      --imm-slate: #1E1E2E;
      --imm-cyan: #00E5FF;
      --imm-violet: #7C3AED;
      --imm-magenta: #E040FB;
      --imm-amber: #F59E0B;
      --imm-green: #10B981;
      --imm-fog: #94A3B8;
      --imm-white: #F1F5F9;
      --imm-ice: #E0F2FE;
      --imm-depth-blue: #1E3A5F;
      --imm-red: #EF4444;
      --imm-chrome: #CBD5E1;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--imm-white);
      background: var(--imm-void);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    /* ===== CANVAS BACKGROUND ===== */
    #scene-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    /* ===== ATMOSPHERIC BACKGROUND FALLBACK ===== */
    .atmosphere {
      position: fixed;
      inset: 0;
      z-index: 0;
      background: var(--imm-void);
      background-image:
        radial-gradient(ellipse at 20% 30%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(0, 229, 255, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 40%);
    }

    .atmosphere::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(1px 1px at 8% 15%, rgba(241, 245, 249, 0.5) 50%, transparent 50%),
        radial-gradient(1px 1px at 22% 65%, rgba(241, 245, 249, 0.3) 50%, transparent 50%),
        radial-gradient(1px 1px at 38% 28%, rgba(241, 245, 249, 0.4) 50%, transparent 50%),
        radial-gradient(1px 1px at 52% 82%, rgba(241, 245, 249, 0.25) 50%, transparent 50%),
        radial-gradient(1px 1px at 68% 10%, rgba(241, 245, 249, 0.45) 50%, transparent 50%),
        radial-gradient(1px 1px at 75% 50%, rgba(241, 245, 249, 0.2) 50%, transparent 50%),
        radial-gradient(1px 1px at 90% 35%, rgba(241, 245, 249, 0.35) 50%, transparent 50%),
        radial-gradient(1px 1px at 15% 92%, rgba(241, 245, 249, 0.3) 50%, transparent 50%);
      animation: twinkle 8s ease-in-out infinite alternate;
    }

    @keyframes twinkle {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    /* ===== NAVIGATION ===== */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 40px;
      background: rgba(11, 11, 15, 0.6);
      border-bottom: 1px solid rgba(0, 229, 255, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      transition: background 0.4s ease, border-color 0.4s ease;
    }

    .nav.scrolled {
      background: rgba(11, 11, 15, 0.92);
      border-bottom-color: rgba(0, 229, 255, 0.2);
    }

    .nav .logo {
      font-family: 'Exo 2', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--imm-white);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .nav .logo span {
      color: var(--imm-cyan);
    }

    .nav-links {
      display: flex;
      gap: 4px;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--imm-fog);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 8px 16px;
      border-radius: 6px;
      transition: color 0.25s ease, background 0.25s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--imm-cyan);
      background: rgba(0, 229, 255, 0.06);
    }

    /* ===== CONTENT WRAPPER ===== */
    .content-wrapper {
      position: relative;
      z-index: 10;
    }

    /* ===== HERO SECTION ===== */
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
    }

    .hero .inner {
      position: relative;
      z-index: 5;
      max-width: 760px;
      padding: 0 24px;
    }

    .hero .tag {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--imm-cyan);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 20px;
      display: inline-block;
      padding: 6px 18px;
      border: 1px solid rgba(0, 229, 255, 0.2);
      border-radius: 20px;
      background: rgba(0, 229, 255, 0.05);
    }

    .hero h1 {
      font-family: 'Exo 2', sans-serif;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.1;
      color: var(--imm-white);
      margin-bottom: 24px;
    }

    .hero h1 .accent {
      background: linear-gradient(135deg, var(--imm-cyan), var(--imm-violet));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero .subtitle {
      font-size: 1.1rem;
      color: var(--imm-chrome);
      line-height: 1.8;
      max-width: 540px;
      margin: 0 auto 36px;
    }

    .hero .cta-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 36px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: var(--imm-fog);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      animation: bounce 2.5s ease-in-out infinite;
    }

    .scroll-indicator .line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--imm-cyan), transparent);
    }

    @keyframes bounce {
      0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
      50% { transform: translateX(-50%) translateY(10px); opacity: 0.5; }
    }

    /* ===== BUTTONS ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 32px;
      font-family: 'Exo 2', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
    }

    .btn-primary {
      background: linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2));
      color: var(--imm-cyan);
      border: 1px solid rgba(0, 229, 255, 0.3);
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, rgba(0, 229, 255, 0.3), rgba(124, 58, 237, 0.3));
      box-shadow: 0 0 24px rgba(0, 229, 255, 0.2), 0 0 48px rgba(124, 58, 237, 0.1);
      border-color: rgba(0, 229, 255, 0.5);
      transform: translateY(-2px);
    }

    .btn-ghost {
      background: transparent;
      color: var(--imm-fog);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .btn-ghost:hover {
      color: var(--imm-white);
      border-color: rgba(148, 163, 184, 0.4);
      background: rgba(148, 163, 184, 0.05);
    }

    /* ===== SECTION LAYOUT ===== */
    .section {
      padding: 120px 24px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .section-label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      color: var(--imm-cyan);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 12px;
    }

    .section-title {
      font-family: 'Exo 2', sans-serif;
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--imm-white);
      margin-bottom: 16px;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--imm-chrome);
      max-width: 600px;
      line-height: 1.8;
      margin-bottom: 48px;
    }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.15), rgba(124, 58, 237, 0.15), transparent);
      margin: 0 24px;
    }

    /* ===== CARDS GRID ===== */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .card {
      background: rgba(22, 22, 48, 0.55);
      border: 1px solid rgba(0, 229, 255, 0.1);
      border-radius: 12px;
      padding: 36px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  box-shadow 0.4s ease,
                  border-color 0.4s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 0 30px rgba(0, 229, 255, 0.08), 0 12px 40px rgba(0, 0, 0, 0.5);
      border-color: rgba(0, 229, 255, 0.25);
    }

    .card .icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(124, 58, 237, 0.15));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      margin-bottom: 20px;
      border: 1px solid rgba(0, 229, 255, 0.1);
    }

    .card h3 {
      font-family: 'Exo 2', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--imm-white);
      margin-bottom: 12px;
    }

    .card p {
      color: var(--imm-fog);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* ===== STATS ROW ===== */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }

    .stat {
      text-align: center;
      padding: 32px 16px;
      background: rgba(22, 22, 48, 0.4);
      border-radius: 12px;
      border: 1px solid rgba(0, 229, 255, 0.06);
    }

    .stat .number {
      font-family: 'Exo 2', sans-serif;
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--imm-cyan);
      display: block;
      margin-bottom: 6px;
    }

    .stat .label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.78rem;
      color: var(--imm-fog);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ===== FEATURE SPLIT ===== */
    .feature-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      margin-top: 80px;
    }

    .feature-visual {
      aspect-ratio: 4/3;
      border-radius: 16px;
      background: linear-gradient(135deg, var(--imm-indigo), var(--imm-slate));
      border: 1px solid rgba(0, 229, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .feature-visual::before {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%);
      animation: pulse 4s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; }
    }

    .feature-visual .placeholder-text {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      color: var(--imm-fog);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      z-index: 1;
    }

    .feature-content h3 {
      font-family: 'Exo 2', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--imm-white);
      margin-bottom: 16px;
    }

    .feature-content p {
      color: var(--imm-chrome);
      line-height: 1.8;
      margin-bottom: 24px;
    }

    .feature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .feature-list li {
      font-size: 0.92rem;
      color: var(--imm-fog);
      padding-left: 20px;
      position: relative;
    }

    .feature-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--imm-cyan);
      box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    }

    /* ===== FOOTER ===== */
    .footer {
      padding: 60px 40px;
      text-align: center;
      border-top: 1px solid rgba(0, 229, 255, 0.06);
      margin-top: 80px;
    }

    .footer p {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.82rem;
      color: var(--imm-fog);
    }

    .footer a {
      color: var(--imm-cyan);
      text-decoration: none;
      transition: opacity 0.2s;
    }

    .footer a:hover {
      opacity: 0.7;
    }

    /* ===== SCROLL REVEAL ===== */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ===== REDUCED MOTION ===== */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      .reveal {
        opacity: 1;
        transform: none;
      }
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .nav {
        padding: 14px 20px;
      }

      .nav-links {
        display: none;
      }

      .hero h1 {
        font-size: clamp(1.8rem, 8vw, 3rem);
      }

      .section {
        padding: 80px 20px;
      }

      .feature-split {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .cta-group {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <!-- Atmospheric background (CSS fallback; replace with <canvas> for Three.js) -->
  <div class="atmosphere"></div>

  <!-- Fixed navigation -->
  <nav class="nav" id="mainNav">
    <a href="#" class="logo">Depth<span>Lab</span></a>
    <ul class="nav-links">
      <li><a href="#features" class="active">Features</a></li>
      <li><a href="#showcase">Showcase</a></li>
      <li><a href="#stats">Metrics</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>

  <!-- Main content (sits above the canvas/atmosphere layer) -->
  <div class="content-wrapper">

    <!-- Hero -->
    <section class="hero">
      <div class="inner">
        <span class="tag">WebGL-Powered Experience</span>
        <h1>Enter the <span class="accent">Third Dimension</span></h1>
        <p class="subtitle">
          Spatial interfaces driven by scroll-triggered 3D,
          parallax depth, and real-time GPU rendering.
          Explore content as an environment, not just a page.
        </p>
        <div class="cta-group">
          <a href="#features" class="btn btn-primary">Explore Depth</a>
          <a href="#about" class="btn btn-ghost">Learn More</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="line"></div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Features -->
    <section class="section" id="features">
      <div class="reveal">
        <p class="section-label">Core Capabilities</p>
        <h2 class="section-title">Spatial Design Features</h2>
        <p class="section-desc">
          Every element exists in dimensional space. Scroll drives the camera,
          interaction reveals layers, and content unfolds like a cinematic sequence.
        </p>
      </div>

      <div class="card-grid">
        <div class="card reveal">
          <div class="icon">&#x25E6;</div>
          <h3>Parallax Depth</h3>
          <p>Multi-layer scroll at different velocities creates the illusion
             of spatial depth without full 3D rendering overhead.</p>
        </div>
        <div class="card reveal">
          <div class="icon">&#x25CB;</div>
          <h3>Scroll Cinema</h3>
          <p>GSAP ScrollTrigger binds page position to camera paths,
             lighting shifts, and shader transitions for narrative flow.</p>
        </div>
        <div class="card reveal">
          <div class="icon">&#x25C7;</div>
          <h3>Interactive Models</h3>
          <p>Rotate, zoom, and explore glTF models embedded in the page,
             driven by pointer input and GPU-accelerated rendering.</p>
        </div>
        <div class="card reveal">
          <div class="icon">&#x25A1;</div>
          <h3>Shader Effects</h3>
          <p>Custom GLSL shaders produce distortion, noise, chromatic
             aberration, and post-processing effects in real time.</p>
        </div>
        <div class="card reveal">
          <div class="icon">&#x25B3;</div>
          <h3>Particle Systems</h3>
          <p>Ambient particles, dust motes, and data-driven point clouds
             add atmospheric density and visual richness to scenes.</p>
        </div>
        <div class="card reveal">
          <div class="icon">&#x2B21;</div>
          <h3>Glass Panels</h3>
          <p>Frosted glassmorphic containers float above 3D scenes,
             keeping text legible while the environment stays visible.</p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Showcase split -->
    <section class="section" id="showcase">
      <div class="feature-split reveal">
        <div class="feature-visual">
          <span class="placeholder-text">3D Scene Viewport</span>
        </div>
        <div class="feature-content">
          <h3>Cinematic Scroll Sequences</h3>
          <p>
            Connect scroll position to camera movement and scene transitions.
            Each viewport-height section becomes a "shot" in a directed
            visual narrative, unfolding content through spatial motion.
          </p>
          <ul class="feature-list">
            <li>Camera path keyframes bound to scroll progress</li>
            <li>Lighting and material transitions between sections</li>
            <li>Smooth lerp-based scroll interpolation</li>
            <li>Progressive asset loading with skeleton placeholders</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Stats -->
    <section class="section" id="stats">
      <div class="reveal">
        <p class="section-label">Performance Metrics</p>
        <h2 class="section-title">Built for Speed</h2>
        <p class="section-desc">
          Immersive 3D must never sacrifice performance.
          Every asset is optimized, every animation GPU-composited.
        </p>
      </div>
      <div class="stats reveal">
        <div class="stat">
          <span class="number">60</span>
          <span class="label">Target FPS</span>
        </div>
        <div class="stat">
          <span class="number">&lt;3s</span>
          <span class="label">Scene Load</span>
        </div>
        <div class="stat">
          <span class="number">GLB</span>
          <span class="label">Asset Format</span>
        </div>
        <div class="stat">
          <span class="number">0</span>
          <span class="label">Layout Shifts</span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- About -->
    <section class="section" id="about">
      <div class="reveal">
        <p class="section-label">Philosophy</p>
        <h2 class="section-title">Depth with Purpose</h2>
        <p class="section-desc">
          3D Immersive design transforms the browser from a document viewer
          into a spatial environment. Every scroll, hover, and interaction
          reveals another layer of the experience. The page is not read --
          it is explored.
        </p>
      </div>
      <div style="text-align: center; margin-top: 36px;" class="reveal">
        <a href="#" class="btn btn-primary">Start Building</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>3D Immersive Design Reference &middot;
         Built with WebGL, Three.js &amp; GSAP</p>
    </footer>

  </div>

  <script>
    // --- Nav scroll effect ---
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // --- Scroll reveal (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Respect reduced motion ---
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(el => el.classList.add('visible'));
    }

    /*
     * NOTE: For a full 3D Immersive implementation, replace the
     * .atmosphere div with a Three.js <canvas> scene:
     *
     * import * as THREE from 'three';
     * import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
     * import gsap from 'gsap';
     * import { ScrollTrigger } from 'gsap/ScrollTrigger';
     *
     * gsap.registerPlugin(ScrollTrigger);
     *
     * const scene = new THREE.Scene();
     * const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
     * const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
     *
     * // Bind scroll to camera position:
     * ScrollTrigger.create({
     *   trigger: '.content-wrapper',
     *   start: 'top top',
     *   end: 'bottom bottom',
     *   onUpdate: (self) => {
     *     camera.position.z = 5 - self.progress * 4;
     *     camera.position.y = self.progress * 2;
     *   }
     * });
     */
  </script>

</body>
</html>
```

---

## Implementation Tips

- **Use Three.js with GSAP ScrollTrigger for scroll-driven 3D**: Register `ScrollTrigger` as a GSAP plugin, then bind `self.progress` (0 to 1) inside `onUpdate` to drive camera position, object rotation, and shader uniforms -- this creates cinematic sequences where scroll acts as a timeline scrubber
- **Deliver glTF/GLB with Draco compression**: Export 3D models in glTF binary format and apply Draco mesh compression to reduce file sizes by 80-90%; load via `GLTFLoader` with `DRACOLoader` set to the Draco decoder path for fast, efficient model delivery
- **Implement progressive enhancement with WebGL detection**: Check `document.createElement('canvas').getContext('webgl2')` before initializing Three.js; if it returns null, fall back to CSS-only atmospheric backgrounds (radial gradients, parallax layers) so the site remains functional and attractive
- **Use CSS `perspective` and `translateZ` for lightweight parallax**: For sections that do not need full WebGL, wrap content in a container with `perspective: 1px; overflow-y: auto;` and offset layers with `translateZ(-1px) scale(2)` to achieve GPU-accelerated parallax using only CSS
- **Respect `prefers-reduced-motion`**: Wrap all animation initialization in a `matchMedia` check; when reduced motion is preferred, skip parallax, disable particle systems, and serve static snapshots of 3D scenes to accommodate users with vestibular disorders
- **Throttle scroll handlers and use `requestAnimationFrame`**: Never update Three.js scene properties directly inside a scroll event listener; instead, store the scroll value and apply it in the render loop via `requestAnimationFrame` to avoid jank and ensure consistent 60fps rendering
- **Lazy-load 3D scenes below the fold**: Only initialize Three.js renderers and load model assets when their container section enters the viewport (via `IntersectionObserver`); this keeps initial page load fast and avoids wasting GPU resources on off-screen content
- **Profile with Chrome DevTools Performance panel**: Use the Performance tab to identify long frames, excessive draw calls, and texture memory usage; target under 16ms per frame and watch for layout thrashing caused by DOM reads interleaved with Three.js render calls
