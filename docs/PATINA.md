# Patina Design System — Reference

> Warm editorial aesthetic. Serif headings, sans-serif body, rust accent. Light theme optimized for readability.

## Getting Started

### Required Link Tags
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design-system.css">
```

### Page Skeleton
```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>

<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>
  <main class="main">
    <div class="main-header">
      <h1 class="main-title">Page Title</h1>
      <p class="main-subtitle">Description text</p>
    </div>
    <!-- content -->
  </main>
</div>
<script src="sidebar.js"></script>
</body>
```

### Main Header Variants

**Standard:**
```html
<div class="main-header">
  <h1 class="main-title">Title</h1>
  <p class="main-subtitle">Subtitle</p>
</div>
```

**With Action Button:**
```html
<div class="main-header-row">
  <div>
    <h1 class="main-title">Title</h1>
    <p class="main-subtitle">Subtitle</p>
  </div>
  <button class="btn btn-primary">Action</button>
</div>
```

---

## Design Tokens

### Colors — Neutrals

| Token | Value |
|-|-|
| `--bg` | `#FAFAF8` |
| `--bg-warm` | `#F5F3EF` |
| `--white` | `#FFFFFF` |
| `--border` | `#E8E5DF` |
| `--border-strong` | `#D4D0C8` |
| `--text` | `#1A1A1A` |
| `--text-secondary` | `#5C5C5C` |
| `--text-muted` | `#807B76` |
| `--text-dim` | `#9A958F` |

### Colors — Accent (Rust)

| Token | Value |
|-|-|
| `--accent` | `#B54332` |
| `--accent-light` | `#C45241` |
| `--accent-dark` | `#8F3528` |
| `--accent-bg` | `#FBF0EE` |
| `--accent-border` | `#E8C8C3` |

### Colors — Semantic

| Token | Value |
|-|-|
| `--highlight` | `#D4603A` |
| `--highlight-bg` | `#FEF1EC` |
| `--info` | `#4A3FB5` |
| `--info-bg` | `#EEEDF8` |
| `--success` | `#2E7D32` |
| `--success-bg` | `#EDF7ED` |
| `--success-border` | `#B8D8B8` |
| `--warning` | `#B8860B` |
| `--warning-bg` | `#FDF6E3` |
| `--danger` | `#C0392B` |
| `--danger-bg` | `#FDEDEB` |

### Colors — Accent2 (Sage Green)

| Token | Value |
|-|-|
| `--accent2` | `#7A9A7E` |
| `--accent2-light` | `#8DAE91` |
| `--accent2-dark` | `#5F7F63` |
| `--accent2-bg` | `#EFF5F0` |
| `--accent2-border` | `#B8D4BB` |

### Colors — Accent3 (Steel Blue)

| Token | Value |
|-|-|
| `--accent3` | `#6B8DB5` |
| `--accent3-light` | `#8BA8C8` |
| `--accent3-dark` | `#4E6E8F` |
| `--accent3-bg` | `#EDF2F7` |
| `--accent3-border` | `#A8BFCF` |

### Colors — AI Palette

| Token | Value |
|-|-|
| `--ai` | `#7B64A8` |
| `--ai-light` | `#9681BE` |
| `--ai-dark` | `#5E4B8B` |
| `--ai-bg` | `#F0ECF5` |
| `--ai-border` | `#C4B8D8` |

### Colors — Chart Palette

| Token | Value |
|-|-|
| `--chart-1` | `#E8634A` |
| `--chart-2` | `#5B6ABF` |
| `--chart-3` | `#2EA87A` |
| `--chart-4` | `#E5A832` |
| `--chart-5` | `#9B59B6` |
| `--chart-6` | `#3498DB` |
| `--chart-7` | `#E67E22` |
| `--chart-8` | `#1ABC9C` |

### Typography

| Token | Value | Usage |
|-|-|-|
| `--font-display` | `'Noto Serif', Georgia, serif` | Headings, titles, display text |
| `--font-body` | `'Inter', -apple-system, sans-serif` | Body text, UI elements, buttons |
| `--font-mono` | `'IBM Plex Mono', monospace` | Code, data values, timestamps |

### Shadows

| Token | Value |
|-|-|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.03)` |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.04)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.06)` |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.08)` |
| `--shadow-focus` | `0 0 0 3px rgba(181,67,50,0.12)` |

### Border Radius

| Token | Value |
|-|-|
| `--radius-xs` | `6px` |
| `--radius-sm` | `10px` |
| `--radius` | `14px` |
| `--radius-lg` | `20px` |
| `--radius-xl` | `28px` |
| `--radius-full` | `100px` |

### Layout

| Token | Value |
|-|-|
| `--sidebar-w` | `260px` |

---

## Text Color Hierarchy

Four-tier system for semantic text ordering:

| Tier | Class | Color | Hex | Usage |
|-|-|-|-|-|
| Primary | (default) | `--text` | `#1A1A1A` | Headings, important content, primary labels |
| Secondary | `.t-secondary` | `--text-secondary` | `#5C5C5C` | Body text, descriptions, supporting content |
| Muted | `.t-muted` | `--text-muted` | `#807B76` | Hints, metadata, form labels |
| Dim | `.t-dim` | `--text-dim` | `#9A958F` | Timestamps, placeholders, disabled |

---

## Typography Classes

| Class | Properties |
|-|-|
| `.t-display` | `font-family: var(--font-display); font-weight: 400; letter-spacing: -0.03em` |
| `.t-display-lg` | `font-size: 2.4rem` |
| `.t-display-md` | `font-size: 2rem` |
| `.t-display-sm` | `font-size: 1.5rem` |
| `.t-heading` | `font-family: var(--font-display); font-size: 1.15rem; font-weight: 400` |
| `.t-body` | `font-size: 0.95rem; line-height: 1.6` |
| `.t-small` | `font-size: 0.85rem` |
| `.t-tiny` | `font-size: 0.75rem` |
| `.t-mono` | `font-family: var(--font-mono)` |
| `.t-label` | `font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em` |
| `.t-accent` | `color: var(--accent)` |

---

## Utility Classes

### Flex
| Class | Property |
|-|-|
| `.flex` | `display: flex` |
| `.flex-col` | `flex-direction: column` |
| `.items-center` | `align-items: center` |
| `.justify-between` | `justify-content: space-between` |

### Grid
| Class | Property |
|-|-|
| `.grid-2` | `display: grid; grid-template-columns: 1fr 1fr; gap: 16px` |
| `.grid-3` | `display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px` |

### Spacing
**Gap:** `.gap-4` (4px), `.gap-8` (8px), `.gap-12` (12px), `.gap-16` (16px), `.gap-20` (20px), `.gap-24` (24px)

**Margin Top:** `.mt-8` (8px), `.mt-16` (16px), `.mt-24` (24px), `.mt-32` (32px)

**Margin Bottom:** `.mb-8` (8px), `.mb-16` (16px), `.mb-24` (24px), `.mb-32` (32px)

**Width:** `.w-full` — `width: 100%`

**Divider:** `.divider` — `border-top: 1px solid var(--border); margin: 16px 0`

**Divider with label:** `.divider-or` — flex row with centered text label between two dividers:
```html
<div class="divider-or">
  <hr class="divider">
  <span>or</span>
  <hr class="divider">
</div>
```

**Chip Bar:** `.chip-bar` — `display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none` — horizontal scrollable container for filter chips

---

## Layout Structure

### Grid System
- `.layout`: `display: grid; grid-template-columns: var(--sidebar-w) 1fr; min-height: 100vh`
- `.sidebar`: `background: var(--white); border-right: 1px solid var(--border); position: sticky; top: 0; height: 100vh; overflow: hidden`
- `.main`: `padding: 40px 48px; max-width: 1040px`

### Sidebar Components
| Class | Purpose |
|-|-|
| `.sidebar-logo` | Branding area |
| `.nav-section` | Navigation grouping |
| `.nav-section-label` | Section title |
| `.nav-item` | Navigation link |
| `.nav-item.active` | Active state: accent bg + left border |
| `.nav-icon` | Icon container |
| `.nav-badge` | Count/status badge |
| `.nav-subsection` | Collapsible group of nav items |
| `.nav-subsection-label` | Clickable subsection header with chevron |
| `.nav-subsection.collapsed` | Hides child `.nav-item` elements |
| `.nav-home-row` | Flex wrapper for Home item + expand/collapse button |
| `.sidebar-expand-btn` | 28x28 ghost button, toggles all subsections |
| `.sidebar-footer` | Bottom area |
| `.sidebar-user` | User profile section |
| `.user-avatar` | Avatar image |
| `.user-name` | User name text |
| `.user-email` | User email text |
| `.sidebar-wordmark` | Gradient text fill on logo title (accent → accent-dark) |
| `.sidebar-logout` | Logout link in footer, dim text with red hover |

### Sidebar Collapse
- `.sidebar-toggle`: 56x56 hamburger button, positioned absolute in `.sidebar-logo` area (`right: 6px`). Moves to `position: fixed; top: 0; left: 0` when collapsed.
- `.sidebar-toggle--collapsed`: Fixed position state when sidebar is hidden
- `.sidebar.collapsed`: Sidebar hidden state
- `.layout.sidebar-hidden`: Main content expands
- Mobile breakpoint (860px): Sidebar becomes fixed overlay with `.mobile-open`

### Sidebar Expand/Collapse All
- Button placed inline with the Home nav item (inside `.nav-home-row`)
- Toggles all `.nav-subsection` elements based on majority state
- Re-expands the subsection containing the active page after collapse-all
- Updates `localStorage` key `nav-sub-{label}` for each subsection
- Icon switches between unfold (expand) and fold (collapse) SVGs

### Auto-injected by sidebar.js

**Breadcrumbs:** On component pages, `sidebar.js` auto-injects a `.breadcrumbs` nav above `.main-header` based on the current page's position in `navStructure`. Shows category and subsection (not the page name).

**Component Count Badge:** On component pages, `sidebar.js` counts `.demo-section` elements and injects a badge into the `.top-bar` with accent3 background and white text (e.g. "6 components").

**Scroll-to-Top Button:** `.scroll-top` circle button injected at bottom-center, appears after 400px scroll.

**Top Bar Scroll Reveal:** Uses IntersectionObserver to add `.scrolled` class to `.top-bar` when the main title scrolls out of view, fading in the top-bar title/icon/text.

### Main Content
| Class | Usage |
|-|-|
| `.main-header` | Page title area, `margin-bottom: 32px` |
| `.main-title` | Display font, `font-size: 2rem` |
| `.main-subtitle` | Secondary text, `font-size: 0.95rem` |
| `.section-header` | Flex row with title + action link |
| `.section-title` | Display font, `font-size: 1.15rem` |
| `.section-action` | Accent-colored action link |

### Toolbar
| Class | Usage |
|-|-|
| `.toolbar` | Flex row, space-between, wrapping, `margin-bottom: 20px` |
| `.toolbar-start` | Flex group (left items) |
| `.toolbar-end` | Flex group (right items) |

### Scroll to Top

`.scroll-top` — Fixed bottom-center circle button, appears after 400px scroll. Injected by `sidebar.js`.

| Class | Purpose |
|-|-|
| `.scroll-top` | Fixed, bottom 20px, left 50%, translateX(-50%), 36px radius-full, white bg, border, shadow-sm, hidden by default |
| `.scroll-top.visible` | opacity 1, pointer-events auto, translateY(0) — slides up into view |
| `.scroll-top:hover` | bg-warm, text color, border-strong |

### Responsive Behavior
At 860px breakpoint:
- `.layout` collapses to single column
- `.sidebar` becomes fixed overlay
- `.main` padding reduces to `24px 20px`
- `.stats-row`, `.grid-2`, `.grid-3`, `.field-row` → single column
- `.sidebar.mobile-open` visible on top
- `inputs.html` page has been split into `inputs.html` (form controls) and `pickers.html` (date/time/picklist widgets)

---

## Background Atmosphere

Decorative layered background elements (fixed, z-index: 0, pointer-events: none):

| Class | Effect | Notes |
|-|-|-|
| `.bg-grain` | Fixed noise texture overlay | Subtle texture, positioned behind all content |
| `.bg-shape` | Blurred gradient circle | Set z-index: 0 |
| `.bg-shape-1` | 500px circle, top-right | `rgba(181,67,50,0.04)` accent tint |
| `.bg-shape-2` | 400px circle, bottom-left | `rgba(212,96,58,0.03)` highlight tint |

---

## Animations

All animations wrapped in `@media (prefers-reduced-motion: no-preference)` for accessibility.

| Keyframe | Effect |
|-|-|
| `fadeSlideIn` | `opacity: 0 → 1, translateY(8px → 0)` |
| `popIn` | `opacity: 0 → 1, scale(0.92 → 1.02 → 1)` |
| `fadeIn` | `opacity: 0 → 1` |
| `slideUp` | `opacity: 0 → 1, translateY(12px → 0)` — modal entrance |
| `menuIn` | `opacity: 0 → 1, translateY(-6px → 0) scale(0.97 → 1)` — dropdown entrance |
| `shimmer` | `background-position: -400px → 400px` — skeleton loading |
| `spin` | `rotate(0 → 360deg)` — spinner |
| `glowPulse` | `box-shadow pulse 0 → 4px accent glow` — focus ring |

**Auto-animations:**
- Cards animate with `fadeSlideIn`, staggered 0.04s per child
- Badges use `popIn`
- Modals use `slideUp`
- Dropdowns use `menuIn`

---

## Component Reference

### Buttons
Apply `.btn` base + variant: `.btn-primary`, `.btn-secondary`, `.btn-ghost`. All support `:hover`, `:active`, `:disabled`, `:focus` states with focus ring via `--shadow-focus`.

### Inputs & Forms
Typography: `--font-body`, `font-size: 0.95rem`. Border: `1px solid var(--border)`. Focus: `border-color: var(--accent)` + `--shadow-focus`. Placeholder: `color: var(--text-dim)`.

### Cards
Base: `background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm)`. Auto-animates with `fadeSlideIn`.

### Badges & Pills
Base: `padding: 4px 8px; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600`. Animates with `popIn`. Variants: `.badge-accent`, `.badge-success`, `.badge-warning`, `.badge-danger`.

### Links
Base: `color: var(--accent); text-decoration: none`. Hover: `text-decoration: underline`. Focus: `outline: 2px solid var(--accent); outline-offset: 2px`.

---

## Standalone Pages (No Sidebar)

Pages that don't use the sidebar layout (login, landing, error, pricing, ecommerce, checkout) must include this script since `sidebar.js` is not loaded:

```html
<script>document.fonts.ready.then(()=>document.documentElement.classList.add('fonts-ready'));</script>
```

Without it, the page will be blank — `design-system.css` sets `html:not(.fonts-ready) body { opacity: 0 }` to prevent FOUT, and `sidebar.js` normally adds the `fonts-ready` class.

---

## Code Generation Rules

1. Always import colors, fonts, shadows, radii, spacing from tokens above
2. Use utility classes for layout (flex, grid, gap, mt, mb)
3. Never inline hex values; use CSS custom properties
4. Wrap animations in `@media (prefers-reduced-motion: no-preference)`
5. Apply `.main-header` + `.main-title` + `.main-subtitle` for page headers
6. Use `.sidebar`, `.nav-item`, `.nav-section` for navigation
7. Apply background shapes (`.bg-grain`, `.bg-shape-1`, `.bg-shape-2`) in body
8. Ensure 860px responsive breakpoint for sidebar/main collapse
9. Text color hierarchy: primary (default) → `.t-secondary` → `.t-muted` → `.t-dim`
10. Always test focus states and reduced-motion preferences
