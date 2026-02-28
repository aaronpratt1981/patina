# Patina Design System

## CDN Base URL
`https://aaronpratt1981.github.io/patina/`

## Integration

### Required
```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

<!-- Patina CSS -->
<link rel="stylesheet" href="https://aaronpratt1981.github.io/patina/design-system.css">
```

### Optional
```html
<link rel="stylesheet" href="https://aaronpratt1981.github.io/patina/components.css">
<script src="https://aaronpratt1981.github.io/patina/sidebar.js"></script>
<script src="https://aaronpratt1981.github.io/patina/patina-charts.js"></script>
<script src="https://aaronpratt1981.github.io/patina/patina-sortable.js"></script>
```

### Page skeleton
```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>
<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>
  <main class="main">
    <div class="main-header">
      <h1 class="main-title">Title</h1>
      <p class="main-subtitle">Subtitle</p>
    </div>
    <!-- content -->
  </main>
</div>
<script src="https://aaronpratt1981.github.io/patina/sidebar.js"></script>
</body>
```

## Reference docs
- `docs/PATINA.md` — design tokens, color system, typography, spacing
- `docs/PATINA-COMPONENTS.md` — component catalog and usage
- `docs/PATINA-LAYOUTS.md` — page layout patterns and examples
- `template.html` — starter boilerplate with CDN links

## Rules
- Always use CSS custom properties (`var(--accent)`, `var(--bg)`, etc.) — never inline hex values
- Follow the token system defined in `design-system.css :root`
- Font stacks: `var(--font-display)` (Noto Serif), `var(--font-body)` (Inter), `var(--font-mono)` (IBM Plex Mono)
- Background texture: always include `bg-grain` and `bg-shape` divs
