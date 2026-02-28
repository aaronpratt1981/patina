# Patina Components Reference

> Every component with class names, variants, and copy-pasteable HTML. For design tokens and layout structure, see PATINA.md.

## Buttons

**Base:** `.btn` — inline-flex, 12px 24px padding, radius-sm, 0.88rem, font-weight 600
**Sizes:** `.btn-sm` (8px 16px, 0.8rem, radius-xs), `.btn-lg` (14px 32px, 0.95rem)
**Icon:** `.btn-icon` (padding 10px), `.btn-icon.btn-sm` (padding 7px)

### Button Variants

**Primary**
```html
<button class="btn btn-primary">Save</button>
<button class="btn btn-primary" disabled>Disabled</button>
```

**Secondary**
```html
<button class="btn btn-secondary">Cancel</button>
```

**Ghost**
```html
<button class="btn btn-ghost">Link Button</button>
```

**Danger**
```html
<button class="btn btn-danger">Delete</button>
```

**Accent2**
```html
<button class="btn btn-accent2">Action</button>
```

**Accent3**
```html
<button class="btn btn-accent3">Action</button>
```

**Tonal**
```html
<button class="btn btn-tonal">Outlined</button>
<button class="btn btn-tonal-accent2">Outlined</button>
<button class="btn btn-tonal-accent3">Outlined</button>
```

**Elevated**
```html
<button class="btn btn-elevated">Elevated</button>
```

**Loading State**
```html
<button class="btn btn-primary loading">
  <span class="btn-label">Save</span>
  <span class="spinner"></span>
</button>
```

**Icon Button**
```html
<button class="btn btn-icon btn-sm">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
</button>
```

---

## Cards

Base: `.card` — bg white, border 1.5px solid border, radius-lg, padding 28px. Hover: shadow-lg

**Standard Card**
```html
<div class="card">
  <div class="card-header">
    <div class="card-title">Title</div>
    <span class="card-action">View All</span>
  </div>
  <!-- content -->
  <div class="card-footer">Footer content</div>
</div>
```

**Flat (no hover shadow)**
```html
<div class="card card--flat">Content here</div>
```

**Clickable**
```html
<div class="card card--clickable">Clickable content</div>
```

**Accent Variants**
```html
<div class="card card-accent">Accent card</div>
<div class="card card-accent2">Accent2 card</div>
<div class="card card-accent3">Accent3 card</div>
```

---

## Badges & Tags

### Badges

Base: `.badge` — 0.72rem, uppercase, pill shape, 4px 10px padding

```html
<span class="badge badge-accent">Label</span>
<span class="badge badge-highlight">Featured</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-neutral">Neutral</span>
<span class="badge badge-accent2">Accent2</span>
<span class="badge badge-accent3">Accent3</span>
```

### Tags

Base: `.tag` — 0.8rem, pill, 6px 14px padding, font-weight 500

```html
<span class="tag tag-accent">
  Design
  <button class="tag-close"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
</span>
```

---

## Alerts

Base: `.alert` — flex, gap 12px, padding 16px 20px, radius-14

```html
<div class="alert alert-success">
  <span class="alert-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
  <div class="alert-content">
    <div class="alert-title">Success</div>
    <div class="alert-desc">Your changes have been saved.</div>
  </div>
</div>

<div class="alert alert-info">
  <span class="alert-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
  <div class="alert-content">
    <div class="alert-title">Info</div>
    <div class="alert-desc">This is an informational message.</div>
  </div>
</div>

<div class="alert alert-warning">
  <span class="alert-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
  <div class="alert-content">
    <div class="alert-title">Warning</div>
    <div class="alert-desc">Please review this before proceeding.</div>
  </div>
</div>

<div class="alert alert-error">
  <span class="alert-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></span>
  <div class="alert-content">
    <div class="alert-title">Error</div>
    <div class="alert-desc">Something went wrong. Please try again.</div>
  </div>
</div>
```

---

## Forms

### Field (Text Input)

```html
<div class="field">
  <label class="field-label">Label</label>
  <input class="field-input" type="text" placeholder="Placeholder">
  <div class="field-hint">Helper text</div>
</div>
```

### Error State

```html
<div class="field">
  <label class="field-label">Email</label>
  <input class="field-input error" type="email" value="invalid">
  <div class="field-error">Invalid email address</div>
</div>
```

### Field Layouts

```html
<div class="field-row">
  <div class="field">
    <label class="field-label">First Name</label>
    <input class="field-input" type="text">
  </div>
  <div class="field">
    <label class="field-label">Last Name</label>
    <input class="field-input" type="text">
  </div>
</div>

<div class="field-row-3">
  <div class="field">
    <label class="field-label">City</label>
    <input class="field-input" type="text">
  </div>
  <div class="field">
    <label class="field-label">State</label>
    <input class="field-input" type="text">
  </div>
  <div class="field">
    <label class="field-label">ZIP</label>
    <input class="field-input" type="text">
  </div>
</div>
```

### Textarea

```html
<div class="field">
  <label class="field-label">Message</label>
  <textarea class="field-input" placeholder="Enter your message"></textarea>
</div>
```

### Select

```html
<div class="field">
  <label class="field-label">Category</label>
  <select class="field-input">
    <option value="">Choose an option</option>
    <option value="a">Option A</option>
    <option value="b">Option B</option>
  </select>
</div>
```

### Checkbox

```html
<label class="checkbox-row">
  <input type="checkbox">
  <span class="checkbox-label">I agree to the terms</span>
</label>

<label class="checkbox-row">
  <input type="checkbox" checked>
  <span class="checkbox-label">Remember me</span>
</label>
```

### Radio

```html
<label class="radio-row">
  <input type="radio" name="group" value="a">
  <label>Option A</label>
</label>

<label class="radio-row">
  <input type="radio" name="group" value="b" checked>
  <label>Option B</label>
</label>
```

### Toggle

```html
<div class="toggle-track">
  <div class="toggle-thumb"></div>
</div>

<div class="toggle-track active">
  <div class="toggle-thumb"></div>
</div>
```

### Text Toolbar

Rich text formatting bar attached above a textarea.

| Class | Purpose |
|-|-|
| `.text-toolbar` | Flex row toolbar container, white bg, 1.5px border, top-only border-radius |
| `.text-toolbar-btn` | 32x32 icon button, transparent bg, hover warm bg |
| `.text-toolbar-btn.active` | Active state: accent-bg + accent color |
| `.text-toolbar-sep` | 1px × 20px vertical separator |
| `.text-toolbar-select` | Inline select for block type (Paragraph, Heading, etc.) |

```html
<div class="field">
  <label class="field-label">Description</label>
  <div class="text-toolbar">
    <select class="text-toolbar-select">
      <option>Paragraph</option>
      <option>Heading 1</option>
    </select>
    <div class="text-toolbar-sep"></div>
    <button class="text-toolbar-btn active" title="Bold"><strong>B</strong></button>
    <button class="text-toolbar-btn" title="Italic"><em>I</em></button>
    <div class="text-toolbar-sep"></div>
    <button class="text-toolbar-btn" title="Link"><!-- link svg --></button>
    <button class="text-toolbar-btn" title="Code"><!-- code svg --></button>
  </div>
  <textarea class="field-input" rows="5" style="border-radius:0 0 var(--radius-sm) var(--radius-sm);"></textarea>
</div>
```

Attach to textarea with `border-radius: 0 0 var(--radius-sm) var(--radius-sm)` on the textarea and the text-toolbar gets `border-bottom: none` via `.text-toolbar + textarea.field-input` selector.

### Radio Option Cards

Card-style radio buttons for pricing tiers or plan selection.

| Class | Purpose |
|-|-|
| `.radio-option` | Bordered card row: flex, gap 12px, padding 14px, cursor pointer |
| `.radio-option.selected` | Selected: accent border + accent-bg |
| `.radio-option-info` | Flex-1 content area |
| `.radio-option-name` | Option title, 0.9rem, font-weight 500 |
| `.radio-option-price` | Subtitle/price, 0.82rem, text-muted |

```html
<div class="radio-option selected" onclick="selectPlan(this)">
  <input type="radio" name="plan" value="studio" checked style="accent-color:var(--accent)">
  <div class="radio-option-info">
    <div class="radio-option-name">Studio</div>
    <div class="radio-option-price">$12/mo — Unlimited projects</div>
  </div>
</div>
```

### Switch Layout

Settings-style rows with label, description, and toggle.

| Class | Purpose |
|-|-|
| `.switch-row` | Flex row, space-between, padding 14px 0, bottom border |
| `.switch-info` | Flex-1 text container |
| `.switch-label-text` | Label text, 0.9rem, font-weight 500 |
| `.switch-sub` | Description, 0.8rem, text-muted |

```html
<div class="switch-row">
  <div class="switch-info">
    <div class="switch-label-text">Dark Mode</div>
    <div class="switch-sub">Apply dark theme across the interface</div>
  </div>
  <div class="toggle-track" onclick="this.classList.toggle('active')">
    <div class="toggle-thumb"></div>
  </div>
</div>
```

### Slider Value Display

Range input with live value readout.

```html
<div class="field">
  <label class="field-label">Volume</label>
  <div class="slider-row">
    <input type="range" class="slider" min="0" max="100" value="60" oninput="updateSlider(this,'val','%')">
    <span class="slider-val" id="val">60%</span>
  </div>
</div>
```

| Class | Purpose |
|-|-|
| `.slider-row` | Flex row, items-center, gap 14px |
| `.slider-val` | 0.85rem, font-weight 500, text-secondary, min-width 40px |

### Slider

```html
<input type="range" class="slider" min="0" max="100" value="50" style="--val: 50%">
```

### Date Picker

```html
<div class="date-picker">
  <div class="date-picker-header">
    <button class="date-picker-nav">←</button>
    <span>February 2026</span>
    <button class="date-picker-nav">→</button>
  </div>
  <div class="date-picker-weekdays">
    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
  </div>
  <div class="date-picker-grid">
    <button class="date-picker-day muted">29</button>
    <button class="date-picker-day">1</button>
    <button class="date-picker-day today">15</button>
    <button class="date-picker-day active">20</button>
  </div>
</div>
```

### Picklist (Dropdown Select)

```html
<div class="picklist">
  <button class="picklist-trigger">
    <span>Select option</span>
    <svg class="picklist-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="picklist-dropdown">
    <input class="picklist-search" placeholder="Search...">
    <div class="picklist-options">
      <div class="picklist-option">Option 1</div>
      <div class="picklist-option selected">Option 2</div>
      <div class="picklist-option">Option 3</div>
    </div>
  </div>
</div>
```

Open state: add `.open` to `.picklist`

### Picklist Multi-select

```html
<div class="picklist picklist-multi">
  <button class="picklist-trigger">
    <div class="picklist-tags">
      <span class="picklist-tag">Tag 1 <span>×</span></span>
      <span class="picklist-tag">Tag 2 <span>×</span></span>
    </div>
    <svg class="picklist-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="picklist-dropdown">
    <input class="picklist-search" placeholder="Search...">
    <div class="picklist-options">
      <div class="picklist-option selected">Option 1</div>
      <div class="picklist-option selected">Option 2</div>
      <div class="picklist-option">Option 3</div>
    </div>
  </div>
</div>
```

### Month / Year Picker

Month and year selection without day-level precision. Uses the `.date-picker` container with a `.month-picker-grid` of 12 month options. Year changes via nav arrows.

| Class | Description |
|-|-|
| `.month-picker-grid` | 3-column grid for 12 months |
| `.month-picker-option` | Individual month button |
| `.month-picker-option.active` | Selected month (accent bg) |
| `.month-picker-option.current` | Current month (accent border) |
| `.month-picker-display` | Shows selected "Month Year" text |

```html
<div class="date-picker">
  <div class="date-picker-header">
    <button class="date-picker-nav" onclick="changeMonthPickerYear(-1)">...</button>
    <span class="date-picker-month-year" id="mpYearLabel">2026</span>
    <button class="date-picker-nav" onclick="changeMonthPickerYear(1)">...</button>
  </div>
  <div class="month-picker-grid" id="mpGrid">
    <!-- 12 .month-picker-option divs built by JS -->
  </div>
  <div class="month-picker-display" id="mpDisplay"></div>
</div>
```

### Time Picker

```html
<div class="time-picker">
  <button class="time-picker-trigger">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    <span>2:30 PM</span>
  </button>
  <div class="time-picker-dropdown">
    <div class="time-picker-col">
      <div class="time-picker-col-header">HR</div>
      <button class="time-picker-option selected">02</button>
      <button class="time-picker-option">03</button>
    </div>
    <div class="time-picker-col">
      <div class="time-picker-col-header">MIN</div>
      <button class="time-picker-option selected">30</button>
    </div>
    <div class="time-picker-col">
      <div class="time-picker-col-header">AM/PM</div>
      <button class="time-picker-option">AM</button>
      <button class="time-picker-option selected">PM</button>
    </div>
  </div>
</div>
```

### Date Range Picker

Two-click range selection on a calendar grid. Click once for start, again for end.

| Class | Purpose |
|-|-|
| `.date-picker-day.range-start` | Accent bg, white text, left-side rounded |
| `.date-picker-day.range-end` | Accent bg, white text, right-side rounded |
| `.date-picker-day.in-range` | Accent-bg, accent-dark text, no radius |
| `.date-range-display` | Text display below grid showing "Feb 5 – Feb 12" |

```html
<div class="date-picker" id="dateRangePicker">
  <div class="date-picker-header">
    <button class="date-picker-nav">...</button>
    <span class="date-picker-month-year">February 2026</span>
    <button class="date-picker-nav">...</button>
  </div>
  <div class="date-picker-weekdays">...</div>
  <div class="date-picker-grid">
    <button class="date-picker-day" onclick="selectRangeDay(this)">1</button>
    <!-- ... -->
  </div>
  <div class="date-range-display" id="drpDisplay"></div>
</div>
```

JS: `selectRangeDay(el)` manages `rangeState = { start, end }` and calls `updateRangeHighlight()`.

**Year Grid:** The date range picker includes a year selection view. Clicking the month-year label toggles between the day grid and a 4-column year grid. Functions: `toggleRangeYearGrid()`, `buildRangeYearGrid()`, `selectRangeYear(year)`.

---

## Tables

```html
<div class="table-wrapper">
  <table class="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="cell-primary">Jane Doe</td>
        <td><span class="badge badge-success">Active</span></td>
        <td class="cell-mono">$1,250.00</td>
      </tr>
      <tr>
        <td class="cell-primary">John Smith</td>
        <td><span class="badge badge-warning">Pending</span></td>
        <td class="cell-mono">$890.50</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Cell helpers:** `.cell-primary` (font-weight 600), `.cell-mono` (monospace, 0.82rem)

---

## Lists

```html
<div class="list">
  <div class="list-item">
    <div class="list-item-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <div class="list-item-text">
      <strong>Title</strong>
      <span>Description text</span>
    </div>
    <span class="list-item-secondary">Meta</span>
  </div>
  <div class="list-item">
    <div class="list-item-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    </div>
    <div class="list-item-text">
      <strong>Another item</strong>
      <span>More description</span>
    </div>
    <span class="list-item-secondary">Info</span>
  </div>
</div>
```

---

## Avatars

Base: `.avatar` — flex centered, font-weight 600, radius-sm

**Sizes**
```html
<div class="avatar avatar-sm avatar-accent">JD</div>
<div class="avatar avatar-md avatar-accent">JD</div>
<div class="avatar avatar-lg avatar-accent">JD</div>
<div class="avatar avatar-xl avatar-accent">JD</div>
```

**Color Variants**
```html
<div class="avatar avatar-md avatar-accent">A</div>
<div class="avatar avatar-md avatar-highlight">B</div>
<div class="avatar avatar-md avatar-info">C</div>
<div class="avatar avatar-md avatar-success">D</div>
<div class="avatar avatar-md avatar-accent2">E</div>
<div class="avatar avatar-md avatar-accent3">F</div>
```

**Avatar Stack**
```html
<div class="avatar-stack">
  <div class="avatar avatar-sm avatar-accent">A</div>
  <div class="avatar avatar-sm avatar-info">B</div>
  <div class="avatar avatar-sm avatar-success">C</div>
</div>
```

---

## Modals & Sheets

### Modal

```html
<div class="modal-overlay open">
  <div class="modal">
    <div class="modal-title">Confirm Action</div>
    <div class="modal-desc">Are you sure you want to proceed?</div>
    <div class="modal-actions">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

Show/hide: toggle `.open` on `.modal-overlay`

### Bottom Sheet

```html
<div class="sheet-backdrop open"></div>
<div class="bottom-sheet open">
  <div class="bottom-sheet-handle"></div>
  <!-- content -->
</div>
```

### Side Sheet

```html
<div class="sheet-backdrop open"></div>
<div class="side-sheet open">
  <div class="side-sheet-header">
    <div class="card-title">Sheet Title</div>
    <button class="btn btn-ghost btn-icon btn-sm">×</button>
  </div>
  <!-- content -->
</div>
```

---

## Navigation

### Tabs

```html
<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">Details</button>
  <button class="tab">Settings</button>
</div>
```

### Page Tabs (Section Anchors)

Horizontal tab strip for navigating to page sections. Includes scroll-spy to highlight the active section. Replaces the older pill-style `.toc` / `.toc-link` pattern.

```html
<nav class="page-tabs">
  <a class="page-tab" href="#colors">Colors</a>
  <a class="page-tab" href="#typography">Typography</a>
  <a class="page-tab" href="#spacing">Spacing</a>
</nav>
```

|-|-|
|Class|Description|
|`.page-tabs`|Warm background pill bar with border, horizontal scroll on overflow|
|`.page-tab`|Anchor link — rounded highlight on hover/active (no underline)|
|`.page-tab.active`|White background with shadow and accent text for current section|

Visually distinct from regular `.tabs` which use underline indicators for panel switching. Page tabs use a toolbar/pill-bar style to signal in-page anchor navigation.

Add scroll-spy JS to auto-update the active tab:

```html
<script>
(function(){
  const tabs = document.querySelectorAll('.page-tab');
  if (!tabs.length) return;
  const sections = Array.from(tabs).map(t => document.querySelector(t.getAttribute('href'))).filter(Boolean);
  function updateActive() {
    let current = sections[0];
    for (const s of sections) { if (s.getBoundingClientRect().top <= 120) current = s; }
    const id = current ? current.id : '';
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === '#' + id));
  }
  document.querySelector('.main').addEventListener('scroll', updateActive);
  window.addEventListener('scroll', updateActive);
  updateActive();
})();
</script>
```

### Breadcrumbs

```html
<div class="breadcrumbs">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Projects</a></span>
  <span class="breadcrumb-item">Current Page</span>
</div>
```

Separator `›` is added automatically via CSS

### Pagination

```html
<div class="pagination">
  <button class="page-btn" disabled>←</button>
  <button class="page-btn active">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn">→</button>
</div>
```

### Steps

```html
<div class="steps">
  <div class="step step-complete">✓ Account</div>
  <div class="step step-active">Profile</div>
  <div class="step">Review</div>
</div>
```

### Nav Bar (Mobile Bottom)

Hidden by default, shows at ≤860px

```html
<nav class="nav-bar">
  <button class="nav-bar-item active">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Home
  </button>
  <button class="nav-bar-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Search
  </button>
  <button class="nav-bar-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Profile
  </button>
</nav>
```

### Top App Bar

Sticky header bar that reveals title/icon content on scroll via IntersectionObserver (managed by `sidebar.js`). 56px height, white background, bottom border.

| Class | Purpose |
|-|-|
| `.top-bar` | Sticky container, z-index 100, flex row, gap 12px |
| `.top-bar-title` | Display font, 1.1rem, fades in on scroll (opacity 0 → 1) |
| `.top-bar-icon` | 32px icon container, accent2-bg, fades in on scroll |
| `.top-bar-text` | Muted text, 0.82rem, fades in on scroll |
| `.top-bar-spacer` | `flex: 1` — pushes items to opposite ends |
| `.top-bar-actions` | Flex row for action buttons, gap 4px |
| `.top-bar-divider` | 1px × 20px vertical separator |
| `.top-bar-badge` | Small pill badge, accent-bg + accent color |
| `.top-bar.scrolled` | Applied by JS — makes title/icon/text visible |

**Basic — Icon + Title**
```html
<div class="top-bar">
  <span class="top-bar-icon"><!-- icon svg --></span>
  <span class="top-bar-title">Page Title</span>
</div>
```

**Title + Actions**
```html
<div class="top-bar">
  <span class="top-bar-title">Page Title</span>
  <div class="top-bar-spacer"></div>
  <div class="top-bar-actions">
    <button class="btn btn-ghost btn-icon btn-sm"><!-- icon --></button>
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>
```

**Title + Badge**
```html
<div class="top-bar">
  <span class="top-bar-title">Page Title</span>
  <span class="top-bar-badge">Status</span>
</div>
```

**Title + Divider + Status Text**
```html
<div class="top-bar">
  <span class="top-bar-title">Page Title</span>
  <div class="top-bar-divider"></div>
  <span class="top-bar-text">Status text</span>
</div>
```

**Title + Icon Menu**
```html
<div class="top-bar">
  <span class="top-bar-title">Page Title</span>
  <div class="top-bar-spacer"></div>
  <div class="top-bar-actions">
    <button class="btn btn-ghost btn-icon btn-sm"><!-- search --></button>
    <button class="btn btn-ghost btn-icon btn-sm"><!-- filter --></button>
    <div class="top-bar-divider"></div>
    <button class="btn btn-ghost btn-icon btn-sm"><!-- settings --></button>
  </div>
</div>
```

**Title + Text Tabs**
```html
<div class="top-bar">
  <span class="top-bar-title">Page Title</span>
  <div class="top-bar-spacer"></div>
  <div class="tabs" style="border:none; margin:0; padding:0;">
    <button class="tab active">Tab 1</button>
    <button class="tab">Tab 2</button>
  </div>
</div>
```

### Search Bar

```html
<div class="search-bar">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  <input type="text" placeholder="Search...">
</div>
```

### Scroll to Top

Fixed bottom-center button that appears after scrolling 400px.

| Class | Purpose |
|-|-|
| `.scroll-top` | Fixed, bottom 20px, centered via translateX(-50%), 36px circle, white bg, border, shadow-sm |
| `.scroll-top.visible` | Fades in and slides up (opacity 1, translateY 0) |

Injected by `sidebar.js`. Click smooth-scrolls to top. Shows/hides on scroll via passive listener.

---

## Chips

### Standard Chip

```html
<span class="chip">
  Label
  <button class="chip-close"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
</span>
```

### Filter Chip

```html
<span class="chip chip-filter">Inactive</span>
<span class="chip chip-filter active">Active</span>
```

### Chip Field (Tag Input)

```html
<div class="chip-field">
  <span class="chip">Tag 1 <button class="chip-close">×</button></span>
  <span class="chip">Tag 2 <button class="chip-close">×</button></span>
  <input placeholder="Add tag...">
</div>
```

### Chip Bar

Horizontal scrollable container for filter chips, hides scrollbar.

```html
<div class="chip-bar">
  <span class="chip chip-filter active">All</span>
  <span class="chip chip-filter">Design</span>
  <span class="chip chip-filter">Engineering</span>
  <span class="chip chip-filter">Marketing</span>
</div>
```

`.chip-bar`: `display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none`

---

## Progress

```html
<div class="progress-row">
  <div class="progress-label">
    <span>Task name</span>
    <span>75%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill fill-accent" style="width: 75%"></div>
  </div>
</div>

<div class="progress-row">
  <div class="progress-label">
    <span>Another task</span>
    <span>45%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill fill-highlight" style="width: 45%"></div>
  </div>
</div>
```

**Fill colors:** `.fill-accent`, `.fill-highlight`, `.fill-info`, `.fill-success`, `.fill-accent2`, `.fill-accent3`

---

## Accordion

```html
<div class="accordion">
  <div class="accordion-item open">
    <button class="accordion-header">
      Section Title
      <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="accordion-body">This section is expanded.</div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      Another Section
      <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="accordion-body">This section is collapsed.</div>
  </div>
</div>
```

Open state: add `.open` to `.accordion-item`

---

## Dividers

| Class | Purpose |
|-|-|
| `.divider` | `border-top: 1px solid var(--border); margin: 16px 0` |
| `.divider-or` | Flex row with two `.divider` elements separated by a centered text label |

```html
<!-- Standard divider -->
<hr class="divider">

<!-- Labeled divider -->
<div class="divider-or">
  <hr class="divider">
  <span>or</span>
  <hr class="divider">
</div>
```

---

## Icon Box

```html
<div class="icon-box" style="background: var(--accent-bg); color: var(--accent)">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
</div>

<div class="icon-box-sm" style="background: var(--info-bg); color: var(--info)">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
</div>
```

Sizes: `.icon-box` (44x44), `.icon-box-sm` (36x36)

---

## Empty State

```html
<div class="empty-state">
  <div class="empty-icon" style="background: var(--accent-bg); color: var(--accent)">📭</div>
  <div class="empty-title">No items found</div>
  <div class="empty-desc">Try adjusting your search or filters.</div>
  <button class="btn btn-primary">Create New</button>
</div>
```

---

## Skeleton Loading

```html
<div class="skeleton skeleton-text" style="width: 60%"></div>
<div class="skeleton skeleton-text" style="width: 80%"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-circle" style="width: 40px; height: 40px"></div>
<div class="skeleton skeleton-rect" style="width: 100%; height: 120px"></div>
```

Shimmer animation is automatic

---

## Menus / Dropdowns

```html
<div class="menu" style="position: relative">
  <button class="menu-item">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Edit
  </button>
  <button class="menu-item">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Duplicate
  </button>
  <hr class="menu-divider">
  <button class="menu-item menu-item-danger">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
    Delete
  </button>
</div>
```

---

## FAB & Speed Dial

```html
<button class="fab">+</button>
<button class="fab fab-sm">+</button>
<button class="fab fab-extended">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
  New Item
</button>
<button class="fab fab-accent2">+</button>
<button class="fab fab-accent3">+</button>
```

Position: fixed bottom-right. At ≤860px: bottom 80px (above nav-bar)

---

## Segmented Controls

```html
<div class="seg-group">
  <button class="seg-btn active">Day</button>
  <button class="seg-btn">Week</button>
  <button class="seg-btn">Month</button>
</div>
```

---

## Snackbar

```html
<div class="snackbar show">
  Message text here
  <button class="snackbar-action">Undo</button>
</div>
```

Show: add `.show` class. Position: fixed bottom center

---

## Tooltip

```html
<span data-tooltip="Tooltip text" class="tooltip">Hover me</span>
```

Uses `::after` pseudo-element. No extra markup needed

---

## Stats

### Stat Card

```html
<div class="stats-row">
  <div class="card stat-card">
    <div class="stat-label">Revenue</div>
    <div class="stat-value">$48,200</div>
    <span class="stat-change up">↑ 12.5%</span>
  </div>
  <div class="card stat-card">
    <div class="stat-label">Users</div>
    <div class="stat-value">2,847</div>
    <span class="stat-change down">↓ 3.2%</span>
  </div>
</div>
```

Change direction: `.stat-change.up` (green), `.stat-change.down` (red)

### Stat Row

```html
<div class="stat-row">
  <span class="stat-row-label">Status</span>
  <span class="stat-row-value">Active</span>
</div>
```

---

## Spinner

```html
<div class="spinner-standalone"></div>
<div class="spinner-standalone spinner-sm"></div>
<div class="spinner-standalone spinner-lg"></div>

<div class="spinner-center">
  <div class="spinner-standalone"></div>
</div>
```

---

## Dot Loader

Bouncing-dot indicator for typing states and inline loading.

```html
<div class="dot-loader">
  <div class="dot"></div><div class="dot"></div><div class="dot"></div>
</div>

<!-- Small -->
<div class="dot-loader dot-loader-sm">
  <div class="dot"></div><div class="dot"></div><div class="dot"></div>
</div>

<!-- Large -->
<div class="dot-loader dot-loader-lg">
  <div class="dot"></div><div class="dot"></div><div class="dot"></div>
</div>
```

| Class | Purpose |
|-|-|
| `.dot-loader` | Container with flex layout and staggered bounce animation |
| `.dot` | Individual dot (8px default) |
| `.dot-loader-sm` | 6px dots |
| `.dot-loader-lg` | 10px dots |

---

## Activity Feed

```html
<div class="activity-feed">
  <div class="activity-item">
    <div class="activity-dot" style="background: var(--accent)"></div>
    <div class="activity-content"><strong>Jane</strong> updated the project</div>
    <span class="activity-time">2h ago</span>
  </div>
  <div class="activity-item">
    <div class="activity-dot" style="background: var(--info)"></div>
    <div class="activity-content"><strong>John</strong> left a comment</div>
    <span class="activity-time">4h ago</span>
  </div>
</div>
```

---

## Chat Bubbles

```html
<div class="chat-bubble chat-bubble-received">Hello there!</div>
<div class="chat-time">2:30 PM</div>

<div class="chat-bubble chat-bubble-sent">Hi! How are you?</div>
<div class="chat-time" style="text-align: right">2:31 PM</div>
```

---

## Kanban

```html
<div style="display: flex; gap: 16px; overflow-x: auto">
  <div class="kanban-col">
    <div class="kanban-header">
      <span>To Do</span>
      <span>3</span>
    </div>
    <div class="kanban-card">
      <div style="font-size: 0.88rem; font-weight: 500; margin-bottom: 8px">Task title</div>
      <div style="display: flex; align-items: center; gap: 8px">
        <span class="badge badge-accent">Design</span>
        <div class="avatar avatar-sm avatar-accent">JD</div>
      </div>
    </div>
  </div>
</div>
```

---

## File Card

```html
<div class="file-card">
  <div class="file-icon">📄</div>
  <div class="file-info">
    <strong style="font-size: 0.88rem">document.pdf</strong>
    <div style="font-size: 0.78rem; color: var(--text-muted)">2.4 MB · Updated 2 days ago</div>
  </div>
</div>
```

---

## Feature List

```html
<div class="feature-list">
  <div class="feature-item">
    <svg class="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    Feature description
  </div>
  <div class="feature-item">
    <svg class="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    Another feature
  </div>
</div>
```

---

## Hero Section

```html
<div class="hero">
  <h1 class="hero-title">Main Heading</h1>
  <p class="hero-subtitle">Supporting description text.</p>
  <div class="hero-actions">
    <button class="btn btn-primary btn-lg">Get Started</button>
    <button class="btn btn-secondary btn-lg">Learn More</button>
  </div>
</div>
```

---

## Notification Item

```html
<div class="notif-item">
  <div class="notif-icon" style="background: var(--success-bg); color: var(--success)">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
  <div class="notif-content">
    <div style="font-size: 0.88rem"><strong>New message</strong> from Jane</div>
    <div style="font-size: 0.82rem; color: var(--text-muted)">Please review the latest draft</div>
  </div>
  <span class="notif-time">5m ago</span>
</div>
```

---

## Search Typeahead

```html
<div class="search-typeahead">
  <div class="search-bar">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" placeholder="Search...">
  </div>
  <div class="search-dropdown open">
    <div class="search-group-label">Recent</div>
    <div class="search-result">
      <div class="search-result-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
      </div>
      <div class="search-result-text"><strong>Result</strong></div>
      <span class="search-result-meta">Page</span>
    </div>
  </div>
</div>
```

---

## File Upload

### Dropzone

Dashed-border drop target with hover/dragover state.

| Class | Purpose |
|-|-|
| `.file-dropzone` | 2px dashed border, radius-lg, 40px padding, cursor pointer |
| `.file-dropzone.dragover` | Accent border + accent-bg |
| `.file-dropzone-content` | Flex column, centered, gap 8px |
| `.file-dropzone-text` | 0.88rem, text-secondary |
| `.file-browse-link` | Underlined accent link button |
| `.file-dropzone-hint` | 0.75rem, text-dim |

```html
<div class="file-dropzone">
  <div class="file-dropzone-content">
    <svg width="32" height="32"><!-- upload icon --></svg>
    <div class="file-dropzone-text">Drag files here or <button class="file-browse-link">browse</button></div>
    <div class="file-dropzone-hint">PNG, JPG, PDF up to 10MB</div>
  </div>
</div>
```

### File List + Progress

| Class | Purpose |
|-|-|
| `.file-list` | Flex column container, gap 2px |
| `.file-item` | Row: icon + info + actions, hover warm bg |
| `.file-item--error` | Danger-bg background |
| `.file-item-icon` | 36px, radius-sm. Variants: `--image` (accent2), `--doc` (accent), `--error` (danger) |
| `.file-item-info` | Flex 1, min-width 0 (truncation) |
| `.file-item-name` | 0.85rem, font-weight 500, truncated |
| `.file-item-meta` | 0.75rem, text-muted. `--error` variant: danger color |
| `.file-item-percent` | Mono font, accent color |
| `.file-item-remove` | 28px ghost button, appears on hover, danger on hover |
| `.file-progress` | 4px track bar |
| `.file-progress-fill` | Accent fill, animated width |

### Mini File Upload

Compact inline upload for forms and chat inputs.

| Class | Purpose |
|-|-|
| `.file-upload-mini` | Inline-flex wrapper |
| `.file-mini-btn` | Bordered button, accent hover. `--icon` variant: icon-only |
| `.file-mini-attachments` | Flex wrap container for chips |
| `.file-mini-chip` | Inline chip with file name + size + remove. `--uploading` variant |
| `.file-mini-size` | Mono font, 0.7rem, dim |
| `.file-mini-remove` | 20px ghost button, danger hover |
| `.file-mini-progress` | Absolute bottom progress bar (2px) |
| `.file-dropzone-mini` | Dashed inline dropzone, accent hover |

---

## Waffle / App Switcher

Toggle button + grid menu for switching between apps. Typically placed in the sidebar logo area.

- `.waffle-btn` — 56x56 icon button, positioned absolute top-left in sidebar-logo, border-right + border-bottom
- `.waffle-menu` — Fixed dropdown, 320px wide, radius-lg, shadow-lg. `display: none` by default
- `.waffle-menu.open` — `display: block`
- `.waffle-grid` — 3-column grid, gap 8px
- `.waffle-app` — Flex column, centered, padding 16px 8px, hover bg-warm
- `.waffle-app-icon` — 40x40 icon container, radius-sm
- `.waffle-app-name` — 0.75rem, font-weight 500

```html
<button class="waffle-btn" aria-label="App switcher">
  <!-- 9-dot grid SVG -->
</button>
<div class="waffle-menu open">
  <div class="waffle-grid">
    <a class="waffle-app" href="dashboard.html">
      <span class="waffle-app-icon" style="background: var(--accent-bg); color: var(--accent)"><!-- icon --></span>
      <span class="waffle-app-name">Dashboard</span>
    </a>
    <a class="waffle-app" href="analytics.html">
      <span class="waffle-app-icon" style="background: var(--info-bg); color: var(--info)"><!-- icon --></span>
      <span class="waffle-app-name">Analytics</span>
    </a>
  </div>
</div>
```

Waffle apps animate with staggered `popIn` when `prefers-reduced-motion: no-preference`.

## AI Components

Conversational interfaces, option selectors, and summary displays for AI-powered features. See `ai-components.html` for live examples.

### AI Chat Window

A multi-turn conversational interface with typing indicators.

| Class | Purpose |
|-|-|
| `.ai-chat` | Flex column container, fixed height, border, rounded |
| `.ai-chat-header` | Header bar with avatar, name, status |
| `.ai-chat-avatar` | 32px icon container, info-bg color |
| `.ai-messages` | Scrollable message area |
| `.ai-msg` | Message row (flex, gap). Add `.user` for right-aligned |
| `.ai-msg-avatar` | 28px avatar. `.ai` (info colors) or `.human` (accent colors) |
| `.ai-msg-bubble` | Message bubble. Styled by parent: `.assistant` = white border, `.user` = accent bg |
| `.ai-msg-meta` | Timestamp below bubble |
| `.ai-typing` | Typing indicator with animated dots |
| `.ai-typing-dot` | Animated dot (info color, staggered opacity) |
| `.ai-chat-input` | Input bar with textarea + send button |

```html
<div class="ai-chat">
  <div class="ai-chat-header">
    <div class="ai-chat-avatar"><!-- icon --></div>
    <div class="ai-chat-info">
      <div class="ai-chat-name">Assistant</div>
      <div class="ai-chat-status">Online</div>
    </div>
  </div>
  <div class="ai-messages">
    <div class="ai-msg assistant">
      <div class="ai-msg-avatar ai"><!-- icon --></div>
      <div>
        <div class="ai-msg-bubble">Hello! How can I help?</div>
        <div class="ai-msg-meta">10:30 AM</div>
      </div>
    </div>
    <div class="ai-msg user">
      <div class="ai-msg-avatar human">JD</div>
      <div>
        <div class="ai-msg-bubble">What components are available?</div>
      </div>
    </div>
  </div>
  <div class="ai-chat-input">
    <textarea rows="1" placeholder="Ask a question..."></textarea>
    <button class="btn btn-primary"><!-- send icon --></button>
  </div>
</div>
```

### AI Options Menu

Radio-style selectable cards for configuring AI behavior modes.

| Class | Purpose |
|-|-|
| `.ai-options` | Flex column container, max-width 320px |
| `.ai-option` | Option card with border, hover/selected states |
| `.ai-option.selected` | Selected state: info border + info-bg |
| `.ai-option-icon` | 36px icon container. Variants: `.creative`, `.precise`, `.balanced`, `.concise` |
| `.ai-option-text` | Label + description |
| `.ai-option-label` | Option name, 0.88rem, font-weight 600 |
| `.ai-option-desc` | Description, 0.78rem, text-muted |
| `.ai-option-check` | Radio circle, fills with info color + checkmark when selected |

```html
<div class="ai-options">
  <div class="ai-option selected" onclick="selectAiOption(this)">
    <div class="ai-option-icon balanced"><!-- icon --></div>
    <div class="ai-option-text">
      <div class="ai-option-label">Balanced</div>
      <div class="ai-option-desc">Well-rounded replies</div>
    </div>
    <div class="ai-option-check"><!-- checkmark svg when selected --></div>
  </div>
</div>
```

### AI Summary Card

Displays AI-generated summaries with bullet points and confidence indicators.

| Class | Purpose |
|-|-|
| `.ai-summary` | Container with border, rounded, white bg |
| `.ai-summary-header` | Header bar with info-bg background |
| `.ai-summary-icon` | 28px icon, info color on white |
| `.ai-summary-title` | Title text, 0.85rem, font-weight 600 |
| `.ai-summary-badge` | "AI Generated" pill badge |
| `.ai-summary-body` | Content area with padding |
| `.ai-summary-text` | Summary paragraph |
| `.ai-summary-bullets` | Styled unordered list with info-colored dots |
| `.ai-summary-footer` | Action buttons + confidence indicator |

```html
<div class="ai-summary">
  <div class="ai-summary-header">
    <div class="ai-summary-icon"><!-- icon --></div>
    <div class="ai-summary-title">Summary</div>
    <span class="ai-summary-badge">AI Generated</span>
  </div>
  <div class="ai-summary-body">
    <p class="ai-summary-text">Key findings:</p>
    <ul class="ai-summary-bullets">
      <li>First insight</li>
      <li>Second insight</li>
    </ul>
    <div class="ai-summary-footer">
      <button class="btn btn-ghost btn-sm">Regenerate</button>
      <span class="confidence">92% confidence</span>
    </div>
  </div>
</div>
```

---

## Charts

Interactive charts via Chart.js with Patina design token integration. Requires `patina-charts.js` which wraps Chart.js with Patina colors, fonts, and defaults.

### Setup

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4"></script>
<script src="patina-charts.js"></script>
```

### Container Classes

| Class | Description |
|-|-|
| `.chart-container` | Standard 280px height, responsive width |
| `.chart-container-sm` | Compact 180px height |
| `.chart-container-lg` | Tall 400px height |
| `.chart-container-square` | 1:1 aspect ratio, max 320px, centered |

### API

**`patinaChart(canvasId, type, config)`** — creates a Chart.js instance styled with Patina defaults.

- **canvasId** `string` — ID of the `<canvas>` element
- **type** `string` — `'bar'`, `'line'`, `'area'`, `'doughnut'`, `'radar'`
- **config** `object` — `{ labels: [], datasets: [{ label, data, ...overrides }], options: {} }`
- Returns the Chart.js instance

**`patinaChartColors(count)`** — returns an array of `count` colors from `--chart-1` through `--chart-8` (cycles).

### Defaults Applied

- Font: Inter for labels, IBM Plex Mono for data values
- Grid lines: `--border` color
- Tooltip: dark (#1A1A1A), `--radius-sm` corner radius
- Palette: `--chart-1` through `--chart-8` auto-assigned per dataset
- Animations disabled when `prefers-reduced-motion: reduce`
- User `options` deep-merged over Patina defaults

### Bar Chart

```html
<div class="chart-container">
  <canvas id="my-bar"></canvas>
</div>
<script>
patinaChart('my-bar', 'bar', {
  labels: ['Mon','Tue','Wed','Thu','Fri'],
  datasets: [{ label: 'Revenue', data: [8400,11200,9800,14300,16100] }]
});
</script>
```

### Stacked Bar Chart

```html
<div class="chart-container">
  <canvas id="my-stacked"></canvas>
</div>
<script>
patinaChart('my-stacked', 'bar', {
  labels: ['Q1','Q2','Q3','Q4'],
  datasets: [
    { label: 'Product A', data: [12000,15000,18000,14000] },
    { label: 'Product B', data: [8000,9000,11000,13000] },
    { label: 'Product C', data: [5000,7000,6000,8000] }
  ],
  options: { scales: { x: { stacked: true }, y: { stacked: true } } }
});
</script>
```

### Doughnut Chart

```html
<div class="chart-container-square">
  <canvas id="my-doughnut"></canvas>
</div>
<script>
patinaChart('my-doughnut', 'doughnut', {
  labels: ['Organic','Direct','Referral','Paid'],
  datasets: [{ data: [42, 25, 15, 18] }]
});
</script>
```

### Line / Area Chart

```html
<div class="chart-container">
  <canvas id="my-line"></canvas>
</div>
<script>
patinaChart('my-line', 'line', {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [
    { label: 'Users', data: [1200,1900,3000,5000,4200,6100] },
    { label: 'Sessions', data: [2400,3200,4100,5800,5100,7200] }
  ]
});
// Use type 'area' for filled variant
</script>
```

## Drag & Drop

Nested drag-and-drop lists via SortableJS with Patina styling. Requires `patina-sortable.js` which wraps SortableJS with sensible defaults, nesting depth enforcement, and reduced-motion support.

### Setup

```html
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/Sortable.min.js"></script>
<script src="patina-sortable.js"></script>
```

### API

**`patinaSortable(elOrId, options)`** — creates a flat sortable list. Returns the Sortable instance.

- **elOrId** `string|Element` — element or ID of the container
- **options** `object` — SortableJS options merged over Patina defaults

**`patinaSortableNested(elOrId, options)`** — initializes root + all `.sortable-nested` children with a shared group. Returns array of Sortable instances.

- **elOrId** `string|Element` — root container element or ID
- **options.maxDepth** `number` — maximum nesting depth (default: 3). Enforced via `onMove` callback
- **options.group** `string` — SortableJS group name (auto-generated if omitted)
- Additional SortableJS options merged over defaults

### Defaults Applied

- Animation: 150ms (0 if `prefers-reduced-motion: reduce`)
- Ghost/chosen/drag classes: `sortable-ghost`, `sortable-chosen`, `sortable-drag`
- `swapThreshold: 0.65`, `fallbackOnBody: true`
- Handle: `.sortable-handle`

### CSS Classes

| Class | Purpose |
|-|-|
| `.sortable-list` | Root flex column container for task lists |
| `.sortable-tree` | Root container for file trees |
| `.sortable-item` | Task item: column flex, white bg, border, padding |
| `.sortable-item-row` | Inner flex row: handle + content |
| `.sortable-item--child` | Subtask: smaller font, warm bg |
| `.sortable-handle` | Drag grip: `cursor:grab`, 6-dot SVG icon |
| `.sortable-nested` | Child container: left margin, min-height drop target |
| `.sortable-ghost` | Placeholder: low opacity, dashed accent border |
| `.sortable-chosen` | Being held: shadow, slight rotation |
| `.sortable-drag` | Moving clone: `opacity:0.9` |
| `.sortable-folder` | Folder container |
| `.sortable-folder-header` | Flex row: handle + icon + name + toggle |
| `.sortable-file` | File row: handle + icon + name |

### Task List

```html
<div class="sortable-list" id="my-tasks">
  <div class="sortable-item">
    <div class="sortable-item-row">
      <div class="sortable-handle">
        <svg width="12" height="18" viewBox="0 0 12 18" fill="currentColor">
          <circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/>
          <circle cx="3" cy="9" r="1.5"/><circle cx="9" cy="9" r="1.5"/>
          <circle cx="3" cy="15" r="1.5"/><circle cx="9" cy="15" r="1.5"/>
        </svg>
      </div>
      <div class="sortable-content">
        <div class="task-title">Task name</div>
        <div class="task-meta">Priority &middot; Due date</div>
      </div>
    </div>
    <div class="sortable-nested">
      <!-- child sortable-items here -->
    </div>
  </div>
</div>
<script>
patinaSortableNested('my-tasks', { maxDepth: 2 });
</script>
```

### File Tree

```html
<div class="sortable-tree" id="my-tree">
  <div class="sortable-folder">
    <div class="sortable-folder-header">
      <div class="sortable-handle">&#x2801;&#x2802;</div>
      <span class="folder-icon">...</span>
      <span class="folder-name">Folder</span>
      <button class="folder-toggle">...</button>
    </div>
    <div class="sortable-nested">
      <div class="sortable-file">
        <div class="sortable-handle">&#x2801;&#x2802;</div>
        <span class="file-icon">...</span>
        file.js
      </div>
    </div>
  </div>
</div>
<script>
patinaSortableNested('my-tree', { maxDepth: 3 });
</script>
```

---

## Image Gallery

Responsive image layouts: grid, masonry, lightbox, hover captions, and carousel. Pure CSS with a small lightbox script.

### CSS Classes

| Class | Purpose |
|-|-|
| `.gallery-grid` | CSS grid, `auto-fill minmax(200px, 1fr)`, gap 12px |
| `.gallery-grid img` | `object-fit: cover`, `aspect-ratio: 1`, rounded, pointer cursor |
| `.gallery-masonry` | `column-count: 3` (responsive), `column-gap: 12px` |
| `.gallery-masonry-item` | `break-inside: avoid`, margin-bottom, rounded, overflow hidden |
| `.gallery-lightbox` | Fixed overlay, backdrop blur, z-index 1000, flex center |
| `.gallery-lightbox img` | Max 90vw/85vh, rounded, shadow |
| `.gallery-lightbox-close` | Absolute top-right close button |
| `.gallery-lightbox-nav` | Prev/next arrow buttons, positioned left/right |
| `.gallery-caption-grid` | Grid layout same as basic grid |
| `.gallery-caption-item` | `position: relative`, overflow hidden |
| `.gallery-caption-overlay` | Absolute bottom, gradient bg, slides up on hover |
| `.gallery-carousel` | `overflow-x: auto`, `scroll-snap-type: x mandatory`, flex row |
| `.gallery-carousel img` | `scroll-snap-align: start`, fixed width, flex-shrink 0 |
| `.gallery-carousel-wrapper` | Relative container for carousel + arrow buttons |
| `.gallery-carousel-btn` | Circular prev/next button, absolute positioned |

### Basic Grid

```html
<div class="gallery-grid">
  <img src="photo-1.jpg" alt="Description">
  <img src="photo-2.jpg" alt="Description">
  <img src="photo-3.jpg" alt="Description">
</div>
```

### Masonry

```html
<div class="gallery-masonry">
  <div class="gallery-masonry-item">
    <img src="photo-1.jpg" alt="Description">
  </div>
  <div class="gallery-masonry-item">
    <img src="photo-2.jpg" alt="Description">
  </div>
</div>
```

### Lightbox

```html
<div class="gallery-grid" id="my-lightbox-grid">
  <img src="thumb-1.jpg" alt="..." onclick="openLightbox(0)">
  <img src="thumb-2.jpg" alt="..." onclick="openLightbox(1)">
</div>

<div class="gallery-lightbox" id="gallery-lightbox">
  <button class="gallery-lightbox-close" onclick="closeLightbox()">&times;</button>
  <button class="gallery-lightbox-nav prev" onclick="navigateLightbox(-1)">&lsaquo;</button>
  <img id="lightbox-img" src="" alt="Lightbox view">
  <button class="gallery-lightbox-nav next" onclick="navigateLightbox(1)">&rsaquo;</button>
</div>
```

**JS API:** `openLightbox(index)`, `closeLightbox()`, `navigateLightbox(delta)`. Keyboard: Escape closes, Left/Right arrows navigate.

### Hover Captions

```html
<div class="gallery-caption-grid">
  <div class="gallery-caption-item">
    <img src="photo.jpg" alt="Description">
    <div class="gallery-caption-overlay">
      <div class="caption-title">Title</div>
      <div class="caption-desc">Description text</div>
    </div>
  </div>
</div>
```

### Carousel

```html
<div class="gallery-carousel-wrapper">
  <button class="gallery-carousel-btn prev" onclick="scrollCarousel(-1)">&lsaquo;</button>
  <div class="gallery-carousel" id="my-carousel">
    <img src="photo-1.jpg" alt="Description">
    <img src="photo-2.jpg" alt="Description">
    <img src="photo-3.jpg" alt="Description">
  </div>
  <button class="gallery-carousel-btn next" onclick="scrollCarousel(1)">&rsaquo;</button>
</div>
```
