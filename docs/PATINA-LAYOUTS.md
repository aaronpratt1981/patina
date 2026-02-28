# Patina Layout Patterns

> Common page compositions showing how components combine into full layouts. For tokens see PATINA.md, for individual components see PATINA-COMPONENTS.md.

## Page Shell

Every pattern uses this shell unless noted as standalone:

```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>
<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>
  <main class="main">
    <!-- pattern content here -->
  </main>
</div>
<script src="sidebar.js"></script>
</body>
```

## 1. Dashboard

Stats row at top, then 2-column grid of cards with mixed content (chart areas, activity feeds, progress bars).

```html
<div class="main-header">
  <h1 class="main-title">Dashboard</h1>
  <p class="main-subtitle">Here's what's happening across your workspace.</p>
</div>

<div class="stats-row mb-24">
  <div class="card stat-card">
    <div class="stat-label">Revenue</div>
    <div class="stat-value">$48,200</div>
    <span class="stat-change up">↑ 12.5%</span>
  </div>
  <div class="card stat-card">
    <div class="stat-label">Users</div>
    <div class="stat-value">2,847</div>
    <span class="stat-change up">↑ 8.2%</span>
  </div>
  <div class="card stat-card">
    <div class="stat-label">Orders</div>
    <div class="stat-value">384</div>
    <span class="stat-change down">↓ 3.1%</span>
  </div>
  <div class="card stat-card">
    <div class="stat-label">Conversion</div>
    <div class="stat-value">3.2%</div>
    <span class="stat-change up">↑ 0.4%</span>
  </div>
</div>

<div class="grid-2">
  <div class="card">
    <div class="card-header">
      <div class="card-title">Revenue Overview</div>
      <span class="card-action">View Report</span>
    </div>
    <div class="chart-container">
      <canvas id="revenue-chart"></canvas>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-title">Recent Activity</div>
      <span class="card-action">View All</span>
    </div>
    <div class="activity-feed">
      <div class="activity-item">
        <div class="activity-dot" style="background: var(--accent)"></div>
        <div class="activity-content"><strong>Jane</strong> created a new project</div>
        <span class="activity-time">2h ago</span>
      </div>
      <div class="activity-item">
        <div class="activity-dot" style="background: var(--success)"></div>
        <div class="activity-content"><strong>Mark</strong> completed a task</div>
        <span class="activity-time">4h ago</span>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-title">Progress</div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>Design</span><span>75%</span></div>
      <div class="progress-track"><div class="progress-fill fill-accent" style="width:75%"></div></div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>Development</span><span>45%</span></div>
      <div class="progress-track"><div class="progress-fill fill-accent3" style="width:45%"></div></div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-title">Team</div>
    </div>
    <div class="list">
      <div class="list-item">
        <div class="avatar avatar-sm avatar-accent">JD</div>
        <div class="list-item-text">
          <strong>Jane Doe</strong>
          <span>Product Designer</span>
        </div>
        <span class="badge badge-success">Online</span>
      </div>
    </div>
  </div>
</div>
```

## 2. Table / List Page

Toolbar with search + filters, then a card wrapping a data-table, then pagination.

```html
<div class="main-header-row">
  <div>
    <h1 class="main-title">Users</h1>
    <p class="main-subtitle">Manage your team members.</p>
  </div>
  <button class="btn btn-primary">Add User</button>
</div>

<div class="toolbar">
  <div class="toolbar-start">
    <div class="search-bar" style="min-width: 240px">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search users...">
    </div>
    <span class="chip chip-filter active">All</span>
    <span class="chip chip-filter">Active</span>
    <span class="chip chip-filter">Inactive</span>
  </div>
  <div class="toolbar-end">
    <button class="btn btn-secondary btn-sm">Export</button>
  </div>
</div>

<div class="card" style="padding: 0; overflow: hidden">
  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr>
          <td class="cell-primary">Jane Doe</td>
          <td>jane@company.com</td>
          <td>Admin</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
        <tr>
          <td class="cell-primary">Mark Smith</td>
          <td>mark@company.com</td>
          <td>Editor</td>
          <td><span class="badge badge-neutral">Inactive</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-top: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted)">
    <span>Showing 1–10 of 48</span>
    <div class="pagination">
      <button class="page-btn" disabled>←</button>
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">→</button>
    </div>
  </div>
</div>
```

## 3. Detail Page

Breadcrumbs, then a detail hero area, then tabs, then a 2-column layout (main content + sidebar info).

```html
<div class="breadcrumbs mb-24">
  <span class="breadcrumb-item"><a href="#">Projects</a></span>
  <span class="breadcrumb-item">Project Alpha</span>
</div>

<div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px">
  <div class="icon-box" style="background: var(--accent-bg); color: var(--accent); width: 60px; height: 60px; font-size: 1.4rem">🚀</div>
  <div style="flex: 1">
    <h1 class="main-title" style="margin-bottom: 6px">Project Alpha</h1>
    <div class="flex items-center gap-16" style="font-size: 0.82rem; color: var(--text-muted)">
      <span>Created Jan 15, 2026</span>
      <span class="badge badge-success">Active</span>
    </div>
  </div>
  <div class="flex gap-8">
    <button class="btn btn-secondary btn-sm">Edit</button>
    <button class="btn btn-primary btn-sm">Share</button>
  </div>
</div>

<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">Tasks</button>
  <button class="tab">Files</button>
  <button class="tab">Activity</button>
</div>

<div style="display: grid; grid-template-columns: 1fr 300px; gap: 28px">
  <div>
    <div class="card">
      <div class="card-title mb-16">Description</div>
      <p class="t-body t-secondary">Project description goes here with details about objectives and scope.</p>
    </div>
    <div class="card mt-16">
      <div class="card-header">
        <div class="card-title">Tasks</div>
        <span class="card-action">Add Task</span>
      </div>
      <!-- task list content -->
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-title mb-16">Details</div>
      <div class="stat-row">
        <span class="stat-row-label">Status</span>
        <span class="stat-row-value">In Progress</span>
      </div>
      <div class="stat-row">
        <span class="stat-row-label">Priority</span>
        <span class="stat-row-value">High</span>
      </div>
      <div class="stat-row">
        <span class="stat-row-label">Due Date</span>
        <span class="stat-row-value">Mar 15, 2026</span>
      </div>
    </div>
    <div class="card mt-16">
      <div class="card-title mb-16">Team</div>
      <div class="avatar-stack">
        <div class="avatar avatar-sm avatar-accent">JD</div>
        <div class="avatar avatar-sm avatar-info">MS</div>
        <div class="avatar avatar-sm avatar-success">AK</div>
      </div>
    </div>
  </div>
</div>
```

## 4. Form Page

Card containing form fields with sections and action footer.

```html
<div class="main-header">
  <h1 class="main-title">Create Project</h1>
  <p class="main-subtitle">Fill in the details to start a new project.</p>
</div>

<div class="card">
  <div class="card-title mb-24">Project Details</div>

  <div class="field">
    <label class="field-label">Project Name</label>
    <input class="field-input" type="text" placeholder="Enter project name">
  </div>

  <div class="field">
    <label class="field-label">Description</label>
    <textarea class="field-input" placeholder="Describe your project"></textarea>
  </div>

  <div class="field-row">
    <div class="field">
      <label class="field-label">Start Date</label>
      <input class="field-input" type="date">
    </div>
    <div class="field">
      <label class="field-label">End Date</label>
      <input class="field-input" type="date">
    </div>
  </div>

  <div class="field">
    <label class="field-label">Category</label>
    <select class="field-input">
      <option>Select category</option>
      <option>Design</option>
      <option>Engineering</option>
      <option>Marketing</option>
    </select>
  </div>

  <div class="field">
    <label class="field-label">Priority</label>
    <label class="radio-row"><input type="radio" name="priority" checked><label>Low</label></label>
    <label class="radio-row"><input type="radio" name="priority"><label>Medium</label></label>
    <label class="radio-row"><input type="radio" name="priority"><label>High</label></label>
  </div>

  <label class="checkbox-row mt-16">
    <input type="checkbox">
    <span class="checkbox-label">Send notifications to team members</span>
  </label>

  <div class="card-footer">
    <div class="flex justify-between">
      <button class="btn btn-ghost">Cancel</button>
      <div class="flex gap-8">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary">Create Project</button>
      </div>
    </div>
  </div>
</div>
```

## 5. Settings Page

Tabs switching between content panels, each panel is a card with setting rows (toggle controls).

```html
<div class="main-header">
  <h1 class="main-title">Settings</h1>
  <p class="main-subtitle">Manage your account preferences.</p>
</div>

<div class="tabs">
  <button class="tab active">Profile</button>
  <button class="tab">Notifications</button>
  <button class="tab">Security</button>
  <button class="tab">Billing</button>
</div>

<!-- Profile panel -->
<div class="card">
  <div class="card-title mb-24">Personal Information</div>
  <div class="field-row">
    <div class="field">
      <label class="field-label">First Name</label>
      <input class="field-input" type="text" value="Jane">
    </div>
    <div class="field">
      <label class="field-label">Last Name</label>
      <input class="field-input" type="text" value="Doe">
    </div>
  </div>
  <div class="field">
    <label class="field-label">Email</label>
    <input class="field-input" type="email" value="jane@company.com">
  </div>
  <div class="card-footer">
    <div class="flex justify-between">
      <div></div>
      <button class="btn btn-primary">Save Changes</button>
    </div>
  </div>
</div>

<!-- Notifications panel example -->
<div class="card mt-24">
  <div class="card-title mb-16">Notification Preferences</div>
  <div style="display:flex; align-items:center; justify-content:space-between; padding:16px 0; border-bottom:1px solid var(--border)">
    <div>
      <div style="font-size:0.9rem; font-weight:600">Email Notifications</div>
      <div style="font-size:0.82rem; color:var(--text-muted)">Receive email updates for important activity</div>
    </div>
    <div class="toggle-track active"><div class="toggle-thumb"></div></div>
  </div>
  <div style="display:flex; align-items:center; justify-content:space-between; padding:16px 0">
    <div>
      <div style="font-size:0.9rem; font-weight:600">Push Notifications</div>
      <div style="font-size:0.82rem; color:var(--text-muted)">Get push notifications on your device</div>
    </div>
    <div class="toggle-track"><div class="toggle-thumb"></div></div>
  </div>
</div>
```

## 6. Chat Layout

Full-height layout with conversation list sidebar and message thread. Note: `.main` gets special styles.

```html
<main class="main" style="padding: 0; max-width: none; display: flex; height: 100vh; overflow: hidden">
  <!-- Conversation list -->
  <div style="width: 280px; border-right: 1px solid var(--border); display: flex; flex-direction: column; background: var(--bg-warm)">
    <div style="padding: 20px 16px 12px">
      <h2 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 400; margin-bottom: 12px">Messages</h2>
      <div class="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search...">
      </div>
    </div>
    <div style="overflow-y: auto; flex: 1">
      <!-- Conversation items -->
      <div style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--white); border-bottom:1px solid var(--border)">
        <div class="avatar avatar-sm avatar-accent">JD</div>
        <div style="flex:1; min-width:0">
          <div style="font-size:0.87rem; font-weight:600">Jane Doe</div>
          <div style="font-size:0.78rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis">Latest message preview...</div>
        </div>
        <span style="font-size:0.72rem; color:var(--text-dim)">2m</span>
      </div>
    </div>
  </div>

  <!-- Message thread -->
  <div style="flex: 1; display: flex; flex-direction: column; overflow: hidden">
    <div style="padding: 16px 24px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 14px; background: var(--white)">
      <div class="avatar avatar-sm avatar-accent">JD</div>
      <div>
        <div style="font-weight: 600; font-size: 0.95rem">Jane Doe</div>
        <div style="font-size: 0.78rem; color: var(--success)">Online</div>
      </div>
    </div>

    <div style="flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 8px">
      <div class="chat-bubble chat-bubble-received">Hey, how's the project going?</div>
      <div class="chat-time">2:30 PM</div>
      <div class="chat-bubble chat-bubble-sent">Going great! Almost done with the design phase.</div>
      <div class="chat-time" style="text-align: right">2:31 PM</div>
    </div>

    <div style="padding: 16px 24px; border-top: 1px solid var(--border); display: flex; gap: 12px; background: var(--white)">
      <input class="field-input" type="text" placeholder="Type a message..." style="flex: 1">
      <button class="btn btn-primary">Send</button>
    </div>
  </div>
</main>
```

## 7. Card Grid (User Directory)

Grid of user cards with avatars, roles, and actions.

```html
<div class="main-header-row">
  <div>
    <h1 class="main-title">Team Directory</h1>
    <p class="main-subtitle">Browse and connect with team members.</p>
  </div>
  <div class="search-bar" style="min-width: 240px">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" placeholder="Search people...">
  </div>
</div>

<div class="grid-3">
  <div class="card" style="text-align: center; padding: 32px 24px">
    <div class="avatar avatar-lg avatar-accent" style="margin: 0 auto 16px">JD</div>
    <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 2px">Jane Doe</div>
    <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px">Product Designer</div>
    <div class="flex gap-8" style="justify-content: center">
      <button class="btn btn-secondary btn-sm">Profile</button>
      <button class="btn btn-primary btn-sm">Message</button>
    </div>
  </div>
  <!-- repeat for more team members -->
</div>
```

## 8. Auth Pages (Login/Register)

Standalone layout (no sidebar). Two-column split: brand panel + form panel.

```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>

<div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh">
  <!-- Brand panel -->
  <div style="background: var(--bg); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 48px">
    <div style="max-width: 400px; text-align: center">
      <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; display: flex; align-items: center; gap: 10px; justify-content: center; margin-bottom: 40px">
        <div style="width: 12px; height: 12px; background: var(--accent); border-radius: 50%"></div>
        Patina
      </div>
      <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 400; margin-bottom: 12px">Welcome back</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; font-weight: 300; line-height: 1.6">Sign in to continue to your workspace.</p>
    </div>
  </div>

  <!-- Form panel -->
  <div style="display: flex; align-items: center; justify-content: center; padding: 48px">
    <div style="width: 100%; max-width: 380px">
      <h2 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 400; margin-bottom: 8px">Sign In</h2>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 32px">Enter your credentials below.</p>

      <div class="field">
        <label class="field-label">Email</label>
        <input class="field-input" type="email" placeholder="you@company.com">
      </div>
      <div class="field">
        <label class="field-label">Password</label>
        <input class="field-input" type="password" placeholder="••••••••">
      </div>
      <label class="checkbox-row mb-24">
        <input type="checkbox">
        <span class="checkbox-label">Remember me</span>
      </label>
      <button class="btn btn-primary w-full">Sign In</button>

      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 24px">
        Don't have an account? <a href="#" style="color: var(--accent); font-weight: 500">Sign up</a>
      </p>
    </div>
  </div>
</div>
</body>
```

## 9. Landing / Marketing Page

Standalone layout (no sidebar). Top nav + hero + features grid + testimonials + CTA.

```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>

<!-- Top nav -->
<nav style="position: sticky; top: 0; z-index: 200; background: var(--white); border-bottom: 1px solid var(--border); padding: 0 40px; height: 60px; display: flex; align-items: center; justify-content: space-between">
  <div style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; display: flex; align-items: center; gap: 8px">
    <div style="width: 10px; height: 10px; background: var(--accent); border-radius: 50%"></div>
    Patina
  </div>
  <div class="flex gap-8">
    <button class="btn btn-ghost">Sign In</button>
    <button class="btn btn-primary">Get Started</button>
  </div>
</nav>

<div class="hero" style="padding: 96px 24px 72px; max-width: 860px; margin: 0 auto">
  <h1 class="hero-title">Build something <em style="color: var(--accent)">beautiful</em></h1>
  <p class="hero-subtitle">A warm, editorial design system for modern web interfaces.</p>
  <div class="hero-actions">
    <button class="btn btn-primary btn-lg">Get Started Free</button>
    <button class="btn btn-secondary btn-lg">View Demo</button>
  </div>
</div>

<!-- Features -->
<div style="max-width: 1040px; margin: 0 auto; padding: 0 24px 80px">
  <div style="text-align: center; margin-bottom: 48px">
    <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 12px">Features</div>
    <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 400; letter-spacing: -0.03em">Everything you need</h2>
  </div>
  <div class="grid-3">
    <div class="card" style="padding: 28px">
      <div class="icon-box mb-16" style="background: var(--accent-bg); color: var(--accent)">⚡</div>
      <div style="font-family: var(--font-display); font-size: 1.05rem; margin-bottom: 8px">Fast Setup</div>
      <div style="font-size: 0.87rem; color: var(--text-secondary); line-height: 1.6">Get up and running in minutes.</div>
    </div>
    <!-- repeat feature cards -->
  </div>
</div>

<!-- CTA -->
<div style="text-align: center; padding: 80px 24px; background: var(--bg-warm); border-top: 1px solid var(--border)">
  <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 400; margin-bottom: 12px">Ready to get started?</h2>
  <p style="color: var(--text-secondary); margin-bottom: 28px; font-size: 1rem">Join thousands of teams using Patina.</p>
  <button class="btn btn-primary btn-lg">Start Free Trial</button>
</div>
</body>
```

## 10. Error Pages

Standalone layout (no sidebar). Centered empty state with error-specific styling.

```html
<body>
<div class="bg-grain"></div>
<div class="bg-shape bg-shape-1"></div>
<div class="bg-shape bg-shape-2"></div>

<main class="main" style="max-width: 600px; margin: 0 auto; padding: 80px 24px; text-align: center">
  <!-- 404 -->
  <div style="font-family: var(--font-mono); font-size: 5rem; font-weight: 500; color: var(--accent); line-height: 1; margin-bottom: 16px">404</div>
  <div class="empty-state" style="padding: 0">
    <div class="empty-title">Page not found</div>
    <div class="empty-desc">The page you're looking for doesn't exist or has been moved.</div>
    <div class="flex gap-8" style="justify-content: center">
      <button class="btn btn-primary">Go Home</button>
      <button class="btn btn-secondary">Go Back</button>
    </div>
  </div>

  <!-- 500 variant (use danger color) -->
  <!--
  <div style="font-family: var(--font-mono); font-size: 5rem; font-weight: 500; color: var(--danger); line-height: 1; margin-bottom: 16px">500</div>
  <div class="empty-state" style="padding: 0">
    <div class="empty-title">Something went wrong</div>
    <div class="empty-desc">We're working on fixing this. Please try again later.</div>
    <button class="btn btn-primary">Refresh Page</button>
  </div>
  -->
</main>
</body>
```

## 11. Ecommerce Category (Filter + Grid)

Filter sidebar with product grid. Uses a 2-column layout: narrow filter panel on the left, auto-fill product grid on the right.

```html
<nav class="breadcrumbs mb-16">
  <span class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></span>
  <span class="breadcrumb-item"><a href="ecommerce-category.html">Shop</a></span>
  <span class="breadcrumb-item">Outerwear</span>
</nav>

<div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 24px">
  <div>
    <h1 class="main-title">Men's Outerwear</h1>
    <p class="main-subtitle">Showing 12 results</p>
  </div>
  <select class="field-input" style="width: auto">
    <option>Sort by: Featured</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
    <option>Newest</option>
  </select>
</div>

<div class="category-layout">
  <!-- Filter sidebar -->
  <aside class="filter-panel">
    <div class="card">
      <div class="filter-group">
        <div class="filter-group-label">Category</div>
        <!-- checkbox list -->
      </div>
      <div class="filter-group">
        <div class="filter-group-label">Price Range</div>
        <!-- min/max inputs -->
      </div>
      <div class="filter-group">
        <div class="filter-group-label">Rating</div>
        <!-- star radio buttons -->
      </div>
      <div class="filter-group">
        <div class="filter-group-label">Color</div>
        <div class="color-swatches">
          <span class="color-swatch" style="background: #2C2C2C"></span>
          <span class="color-swatch" style="background: #8B4513"></span>
          <!-- more swatches -->
        </div>
      </div>
    </div>
  </aside>

  <!-- Product grid -->
  <div class="product-grid">
    <div class="product-card">
      <a href="ecommerce-product.html">
        <div class="product-card-img">
          <img src="https://picsum.photos/seed/example/400/500" alt="Product">
        </div>
      </a>
      <div class="product-card-body">
        <div class="product-name">Alpine Shell</div>
        <div class="product-price">$189.00</div>
        <div class="star-rating">★★★★☆ <span>(42)</span></div>
        <button class="btn btn-sm btn-secondary" style="width:100%">Add to Cart</button>
      </div>
    </div>
    <!-- repeat product cards -->
  </div>
</div>
```

**Key CSS:**
- `.category-layout`: `grid-template-columns: 240px 1fr; gap: 28px` → single column at ≤860px
- `.product-grid`: `repeat(auto-fill, minmax(220px, 1fr)); gap: 20px`
- `.product-card`: white bg, border, border-radius, hover shadow
- `.color-swatch`: 24px circle, border, cursor pointer

## 12. Ecommerce Product Detail (Gallery + Info + Tabs)

Product page with image gallery, info panel, tabs, and related products.

```html
<nav class="breadcrumbs mb-16">
  <span class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></span>
  <span class="breadcrumb-item"><a href="ecommerce-category.html">Shop</a></span>
  <span class="breadcrumb-item"><a href="ecommerce-category.html">Outerwear</a></span>
  <span class="breadcrumb-item">Alpine Shell Jacket</span>
</nav>

<div class="product-layout">
  <!-- Image gallery -->
  <div class="product-gallery">
    <div class="product-gallery-main">
      <img src="https://picsum.photos/seed/patina-prod-1/800/1000" alt="Alpine Shell Jacket">
    </div>
    <div class="product-gallery-thumbs">
      <img src="https://picsum.photos/seed/patina-prod-1/200/250" class="active">
      <img src="https://picsum.photos/seed/patina-prod-2/200/250">
      <img src="https://picsum.photos/seed/patina-prod-3/200/250">
      <img src="https://picsum.photos/seed/patina-prod-4/200/250">
    </div>
  </div>

  <!-- Product info -->
  <div class="product-info">
    <h1 style="font-family: var(--font-display); font-size: 1.8rem">Alpine Shell Jacket</h1>
    <div class="product-price" style="font-size: 1.3rem">$189.00</div>
    <div class="star-rating">★★★★☆ <span>(128 reviews)</span></div>
    <p style="color: var(--text-secondary)">Product description...</p>

    <!-- Color swatches -->
    <div>
      <div class="filter-group-label">Color</div>
      <div class="color-swatches">
        <span class="color-swatch active" style="background: #2C2C2C"></span>
        <span class="color-swatch" style="background: #8B4513"></span>
      </div>
    </div>

    <!-- Size selector -->
    <div>
      <div class="filter-group-label">Size</div>
      <div class="size-selector">
        <button class="size-btn">XS</button>
        <button class="size-btn active">M</button>
        <button class="size-btn">L</button>
      </div>
    </div>

    <!-- Quantity + Add to Cart -->
    <div class="qty-stepper">
      <button>−</button>
      <input type="number" value="1" min="1" max="10">
      <button>+</button>
    </div>
    <button class="btn btn-primary" style="width: 100%">Add to Cart</button>
  </div>
</div>

<!-- Product tabs -->
<div class="product-tabs">
  <div class="tabs">
    <button class="tab active">Description</button>
    <button class="tab">Specifications</button>
    <button class="tab">Reviews</button>
  </div>
  <!-- Tab panels with description, spec table, review cards -->
</div>

<!-- Related products -->
<div class="related-products">
  <h2 style="font-family: var(--font-display)">You may also like</h2>
  <div class="product-grid">
    <!-- 4 product cards using same .product-card pattern -->
  </div>
</div>
```

**Key CSS:**
- `.product-layout`: `grid-template-columns: 55% 1fr; gap: 36px` → single column at ≤860px
- `.product-gallery-main img`: aspect-ratio 4:5, border-radius
- `.product-gallery-thumbs img`: ~80px, border, opacity transition, active = accent border
- `.size-selector`: inline button group, active = accent background
- `.qty-stepper`: flex row with −/+ buttons and number input
- `.review-card`: avatar, stars, date, text paragraph

**JavaScript:** Thumbnail switching, tab panel toggling, color/size selection, quantity stepper.

## 13. Article Page

Editorial content with sticky table of contents and threaded comments.

```html
<nav class="breadcrumbs mb-16">
  <span class="breadcrumb-item"><a href="index.html">Home</a></span>
  <span class="breadcrumb-item">Article</span>
</nav>

<div class="article-grid">
  <!-- Main content -->
  <div>
    <h1 class="article-title">Article Title</h1>
    <div class="article-meta">
      <div class="meta-author">
        <div class="avatar avatar-sm avatar-accent">EN</div>
        Author Name
      </div>
      <span class="meta-date">Feb 12, 2026</span>
      <span class="badge badge-muted">8 min read</span>
    </div>
    <div class="article-hero-img"></div>
    <div class="article-body">
      <h2 id="sec-intro">Introduction</h2>
      <p>Body text in serif font...</p>
      <h3 id="sec-sub">Subsection</h3>
      <p>More content...</p>
      <blockquote>Pull quote with accent left border</blockquote>
    </div>
    <div class="article-tags">
      <span class="badge badge-muted">Tag</span>
    </div>
    <hr>
    <!-- Comments with Reply buttons -->
    <div class="comment-item">
      <div class="comment-header">
        <div class="avatar avatar-sm avatar-accent">JD</div>
        <span class="comment-name">Name</span>
        <span class="comment-time">2h ago</span>
      </div>
      <div class="comment-body">Comment text</div>
      <div class="comment-actions"><button onclick="toggleReply(this)">Reply</button></div>
    </div>
    <!-- Nested reply -->
    <div class="comment-item comment-reply">...</div>
    <!-- Comment input -->
    <div class="comment-box">
      <div class="avatar avatar-sm avatar-accent">JD</div>
      <textarea class="field-input" rows="2" placeholder="Write a comment..."></textarea>
      <button class="btn btn-primary btn-sm">Post</button>
    </div>
  </div>

  <!-- Sidebar -->
  <div class="article-sidebar">
    <div class="card"><!-- Author bio card --></div>
    <div class="toc-wrapper">
      <nav class="toc" id="toc">
        <div class="toc-title">On this page</div>
        <!-- Auto-populated by JS from h2/h3 ids -->
      </nav>
    </div>
  </div>
</div>
```

**Key CSS:**
- `.article-grid`: `grid-template-columns: 1fr 220px; gap: 40px` → single column at ≤960px
- `.article-body`: Serif font (`--font-display`), `max-width: 680px`, `line-height: 1.8`
- `.article-sidebar`: Stretches full grid height so ToC can stick
- `.toc-wrapper`: `position: sticky; top: 24px` — pins after author card scrolls away
- `.toc a.toc-h3`: Indented 14px for hierarchy
- `.comment-reply`: `margin-left: 44px` for nested replies
- `.comment-reply-box`: Inline reply form injected by `toggleReply()` JS

**JavaScript:** ToC auto-built from `h2[id]` and `h3[id]` in `.article-body`. Scroll spy highlights active heading. `toggleReply()` inserts/removes inline reply forms.

## 14. AI Components Page

Showcase page for AI-specific components: chat window, options menu, summary card.

```html
<div class="main-header">
  <h1 class="main-title">AI Components</h1>
  <p class="main-subtitle">Conversational interfaces, option selectors, and summary displays.</p>
</div>

<!-- Full-width AI Chat demo -->
<div class="demo-section">
  <h2 class="demo-title">Chat Window</h2>
  <p class="demo-desc">Multi-turn AI conversation interface.</p>
  <div class="ai-chat"><!-- see PATINA-COMPONENTS.md AI section --></div>
</div>

<!-- 2-column: Options + Summary -->
<div class="demo-grid-2">
  <div class="demo-section">
    <h2 class="demo-title">AI Options</h2>
    <div class="ai-options"><!-- option cards --></div>
  </div>
  <div class="demo-section">
    <h2 class="demo-title">Summary Card</h2>
    <div class="ai-summary"><!-- summary content --></div>
  </div>
</div>
```

**Key CSS:**
- `.demo-grid-2`: `grid-template-columns: 1fr 1fr; gap: 28px` → single column at ≤860px
- AI component styles are page-scoped (see `ai-components.html`)

## 15. Analytics (Stats + Charts + Filters)

Dashboard with stat cards in a row, two-column chart layout, filter chips, and metrics table.

```html
<div class="stats-row mb-24">
  <div class="card stat-card">
    <div class="stat-label">Total Revenue</div>
    <div class="stat-value">$84,210</div>
    <span class="stat-change up">↑ 12.4%</span>
  </div>
  <!-- repeat stat cards -->
</div>

<div class="charts-row">
  <div class="card">
    <div class="card-header"><div class="card-title">Weekly Revenue</div></div>
    <div class="chart-container"><canvas id="revenue-chart"></canvas></div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">Traffic Sources</div></div>
    <div class="chart-container-square"><canvas id="traffic-chart"></canvas></div>
  </div>
</div>

<div class="filter-toolbar">
  <span class="t-label t-muted">Filter:</span>
  <div class="chip-bar">
    <span class="chip chip-filter active">All Metrics</span>
    <span class="chip chip-filter">Revenue</span>
    <!-- more chips -->
  </div>
</div>

<div class="card card--flat">
  <div class="card-header"><div class="card-title">Top Pages</div></div>
  <div class="table-wrapper"><table class="data-table"><!-- rows --></table></div>
</div>
```

**Key CSS:** `.charts-row: grid-template-columns: 1fr 280px` — stacks on mobile. `.stats-row` uses `repeat(auto-fit, minmax(200px, 1fr))`.

## 16. Kanban Board (Columns + Cards)

Horizontal scrolling board with status columns, draggable task cards, labels, and metadata.

```html
<div class="board">
  <div class="board-col">
    <div class="col-header">
      <div class="col-title">
        <span class="col-count" style="background:var(--bg-warm);">3</span> Backlog
      </div>
      <button class="col-add"><svg><!-- add icon --></svg></button>
    </div>
    <div class="col-cards">
      <div class="task-card">
        <div class="task-card-labels"><span class="chip task-label">Research</span></div>
        <div class="task-card-title">Competitor analysis report</div>
        <div class="task-card-desc">Research details...</div>
        <div class="task-card-footer">
          <div class="task-card-meta">
            <span class="task-meta-item">Mar 5</span>
            <span class="task-meta-item">2</span>
          </div>
          <div class="avatar avatar-sm">SC</div>
        </div>
      </div>
    </div>
  </div>
  <!-- repeat for more columns -->
</div>
```

**Key CSS:** `.board: display: flex; gap: 20px; overflow-x: auto` → vertical stack at ≤860px. `.board-col: min-width: 280px; max-width: 300px`.

## 17. Calendar (Month Grid + Toolbar + Upcoming List)

Month calendar grid with event indicators, navigation controls, view toggle, and upcoming events sidebar.

```html
<div class="cal-toolbar">
  <div class="cal-nav">
    <button class="cal-nav-btn">‹</button>
    <div class="cal-month">March 2026</div>
    <button class="cal-nav-btn">›</button>
    <button class="btn btn-ghost btn-sm">Today</button>
  </div>
  <div style="display:flex;gap:8px;">
    <div class="seg-group">
      <button class="seg-btn active">Month</button>
      <button class="seg-btn">Week</button>
      <button class="seg-btn">List</button>
    </div>
    <button class="btn btn-primary btn-sm">New event</button>
  </div>
</div>

<div class="cal-grid">
  <div class="cal-header-row">
    <div class="cal-header-cell">Sun</div>
    <!-- repeat for each day -->
  </div>
  <div class="cal-body" id="calBody"></div>
</div>

<div class="card upcoming-card">
  <div class="card-header"><div class="card-title">Upcoming</div></div>
  <div class="upcoming-item">
    <div class="upcoming-date"><div class="day">28</div>Feb</div>
    <div class="upcoming-info">
      <div class="upcoming-title">Event title</div>
      <div class="upcoming-meta">Project · Owner</div>
    </div>
    <span class="badge">Tag</span>
  </div>
</div>
```

**Key CSS:** `.cal-grid: grid-template-columns: repeat(7, 1fr)`. `.cal-cell: min-height: 110px` → 60px on mobile.

## 18. Inbox (Split-Pane Email Layout)

Three-pane layout: folder sidebar, email list, reading pane. Responsive: folders collapse on mobile.

```html
<aside class="inbox-folders">
  <div class="folders-title">Mailboxes</div>
  <div class="folder-item active">
    <svg><!-- icon --></svg> Inbox
    <span class="ml-auto"><span class="badge">12</span></span>
  </div>
  <!-- repeat folders -->
</aside>

<div class="email-list-pane">
  <div class="email-list-header">
    <h2>Inbox</h2>
    <div class="search-bar"><input placeholder="Search messages…"></div>
  </div>
  <div class="email-list-scroll">
    <div class="email-item unread active">
      <div class="avatar avatar-sm">SR</div>
      <div class="email-meta">
        <div class="email-sender">Sarah Reynolds</div>
        <div class="email-subject">Subject line</div>
        <div class="email-preview">Preview text…</div>
      </div>
      <div class="email-time">10:42</div>
    </div>
  </div>
</div>

<div class="reading-pane">
  <div class="reading-header">
    <div class="reading-subject">Subject</div>
    <div class="reading-from"><div class="avatar">SR</div> Sender info</div>
  </div>
  <div class="reading-body">Email content…</div>
  <div class="reading-actions">
    <textarea class="reply-input" placeholder="Write a reply…"></textarea>
  </div>
</div>
```

**Key CSS:** `.main: display: flex; height: 100vh` — stacks at ≤860px via JS class toggles.

## 19. File Manager (Toolbar + Breadcrumbs + Grid/List Toggle)

Hierarchical file browser with toolbar (search, view toggle, new folder), file grid cards, and list view table.

```html
<div class="toolbar">
  <div class="breadcrumbs">
    <div class="breadcrumb-item">Root</div>
    <div class="breadcrumb-item">Projects</div>
    <div class="breadcrumb-item">Assets</div>
  </div>
  <div style="margin-left:auto;display:flex;gap:10px;">
    <div class="search-bar"><input placeholder="Search files…"></div>
    <div class="seg-group" id="view-seg">
      <button class="seg-btn active" onclick="setView('grid', this)">Grid</button>
      <button class="seg-btn" onclick="setView('list', this)">List</button>
    </div>
    <button class="btn btn-secondary btn-sm">New Folder</button>
  </div>
</div>

<div class="chip-bar">
  <span class="chip chip-filter active">All Files</span>
  <span class="chip chip-filter">Images</span>
  <!-- more filters -->
</div>

<div class="file-grid" id="file-grid">
  <div class="card file-card">
    <div class="file-icon folder-icon">📁</div>
    <div class="file-name">Brand Assets</div>
    <div class="file-meta"><span class="file-meta-size">18 items</span></div>
  </div>
  <!-- repeat file cards -->
</div>
```

**Key CSS:** `.file-grid: repeat(auto-fill, minmax(200px, 1fr))`. Toggle between grid and list view with JS.

## 20. Notifications (List with Icons + Time + Actions)

Notification feed with date separators, unread indicators, user avatars, and dismissible actions.

```html
<div class="notif-toolbar">
  <div class="notif-filters">
    <button class="chip chip-filter active">All</button>
    <button class="chip chip-filter">Unread</button>
    <button class="chip chip-filter">Mentions</button>
    <!-- more filters -->
  </div>
</div>

<div class="notif-list">
  <div class="date-separator">Today</div>

  <div class="notif-item unread">
    <div class="notif-icon avatar avatar-md">PS</div>
    <div class="notif-content">
      <div class="notif-text"><strong>Priya Sharma</strong> uploaded new files</div>
      <div class="notif-project">Brand Refresh</div>
    </div>
    <div class="notif-time">3h ago</div>
    <div class="notif-actions">
      <button class="notif-action-btn" title="Mark as read"><svg><!-- icon --></svg></button>
      <button class="notif-action-btn" title="Dismiss"><svg><!-- icon --></svg></button>
    </div>
  </div>
</div>
```

**Key CSS:** `.notif-item: display: flex; gap: 14px; padding: 18px 20px`. Unread items have subtle background color.

## 21. Profile (Hero + Stats + Activity Grid)

Profile card with avatar, name, bio, stats, contribution grid, pinned projects, and activity timeline.

```html
<div class="profile-hero">
  <div class="profile-avatar">JD</div>
  <div class="profile-info">
    <h1 class="profile-name">Jane Doe</h1>
    <div class="profile-handle">@janedoe42</div>
    <p class="profile-bio">Designer and builder…</p>
    <div class="profile-meta">
      <span class="profile-meta-item">Design Team</span>
      <span class="profile-meta-item">San Francisco, CA</span>
      <span class="profile-meta-item">Joined Sep 2024</span>
    </div>
  </div>
  <div class="profile-actions">
    <button class="btn btn-primary btn-sm">Edit profile</button>
    <button class="btn btn-secondary btn-sm">Share</button>
  </div>
</div>

<div class="profile-stats">
  <div class="profile-stat"><div class="profile-stat-value">24</div><div class="profile-stat-label">Projects</div></div>
  <div class="profile-stat"><div class="profile-stat-value">142</div><div class="profile-stat-label">Contributions</div></div>
</div>

<div class="profile-grid">
  <div>
    <div class="card">
      <div class="card-header"><div class="card-title">Activity</div></div>
      <div class="contrib-grid" id="contribGrid"></div>
    </div>
  </div>
  <div><!-- Sidebar: Skills + Recent Activity --></div>
</div>
```

**Key CSS:** `.profile-grid: grid-template-columns: 1fr 320px` → 1 column at ≤860px. `.contrib-grid: repeat(52, 1fr)`.

## 22. Checkout (Multi-Step Flow + Order Summary Sidebar)

Four-step checkout (cart, shipping, payment, confirmation) with step indicators and persistent order summary.

```html
<div class="steps-center">
  <div class="steps" id="stepIndicator">
    <div class="step step-active">Cart</div>
    <div class="step">Shipping</div>
    <div class="step">Payment</div>
    <div class="step">Confirmation</div>
  </div>
</div>

<div class="checkout-layout">
  <div class="checkout-main">
    <div class="page-section active" id="step1">
      <div class="page-header"><h1 class="page-title">Your cart</h1></div>
      <div class="card">
        <div class="card-header"><div class="card-title">Items (4)</div></div>
        <div class="list">
          <div class="list-item">
            <div class="icon-box">📊</div>
            <div class="list-item-text"><strong>Product</strong><span>Details</span></div>
            <span class="qty-badge">1</span>
            <span>$228.00</span>
          </div>
        </div>
      </div>
      <div class="nav-actions">
        <button class="btn btn-primary" onclick="goToStep(2)">Continue →</button>
      </div>
    </div>
    <!-- repeat for steps 2, 3, 4 -->
  </div>

  <div class="order-sidebar">
    <div class="card">
      <div class="card-header"><div class="card-title">Order summary</div></div>
      <div class="order-line"><span class="order-label">Subtotal</span><span>$795.00</span></div>
      <div class="order-total-row"><span class="order-total-label">Total due</span><span class="order-total-amount">$776.37</span></div>
    </div>
  </div>
</div>
```

**Key CSS:** `.checkout-layout: grid-template-columns: 1fr 340px` → 1 column on mobile. Steps managed by JS page sections.

## 23. Pricing (Tier Cards + Comparison Table + FAQ)

Pricing hero, three plan cards (with featured style), feature comparison table, and expandable FAQ.

```html
<div class="hero">
  <span class="badge badge-accent">New — Annual plans save 30%</span>
  <h1 class="t-display">Simple, honest pricing</h1>
  <p class="hero-sub">Start free, scale when needed.</p>
  <div class="billing-toggle">
    <span class="billing-label">Monthly</span>
    <div class="toggle-track active" id="billing-toggle">
      <div class="toggle-thumb"></div>
    </div>
    <span class="billing-label">Annual <span class="billing-save">Save 30%</span></span>
  </div>
</div>

<div class="pricing-grid">
  <div class="card plan-card">
    <div class="plan-name">Starter</div>
    <div class="plan-price"><span class="plan-currency">$</span><span class="plan-amount">0</span><span class="plan-period">/mo</span></div>
    <p class="plan-desc">Everything to get started.</p>
    <ul class="plan-features"><li><svg>✓</svg> Up to 3 projects</li></ul>
    <button class="btn btn-secondary w-full">Get started free</button>
  </div>
  <div class="card plan-card featured">
    <div class="plan-badge">Most Popular</div>
    <!-- Pro plan with primary button -->
  </div>
  <div class="card plan-card">
    <!-- Enterprise plan -->
  </div>
</div>

<div class="comparison-section">
  <h2>Compare all features</h2>
  <table class="data-table comparison-table"><!-- rows --></table>
</div>

<div class="faq-section">
  <h2>Frequently asked questions</h2>
  <div class="accordion">
    <div class="accordion-item open">
      <div class="accordion-header">Can I switch plans anytime?</div>
      <div class="accordion-body">Yes, anytime with prorated upgrades.</div>
    </div>
  </div>
</div>
```

**Key CSS:** `.pricing-grid: 1fr 1fr 1fr` → 1 column at ≤760px. `.plan-card.featured` has accent border and shadow.

## 24. Admin Pages (Quick Links + Card Grid + Alert Bars)

Admin dashboard with alert bars, quick link cards, account details, security overview, and apps table.

```html
<div class="page-alert alert-warning">
  <span class="alert-icon"><svg><!-- warning icon --></svg></span>
  <div class="alert-body">
    <strong>Your trial expires in 3 days</strong>
    <span>Add a payment method to continue.</span>
  </div>
  <button class="btn btn-sm">Upgrade now</button>
  <button class="alert-dismiss" onclick="this.parentElement.style.display='none'">×</button>
</div>

<div class="admin-card-grid mb-32">
  <a class="quick-link" href="profile.html">
    <div class="quick-link-icon" style="background:var(--accent-bg);">👤</div>
    <div class="quick-link-info">
      <div class="quick-link-title">Edit Profile</div>
      <div class="quick-link-desc">Name, email, bio</div>
    </div>
    <svg class="quick-link-arrow">→</svg>
  </a>
  <!-- repeat quick links -->
</div>

<div class="grid-2 mb-32">
  <div class="card">
    <div class="card-header"><div class="card-title">Account Details</div></div>
    <div style="display:flex;gap:16px;margin-bottom:20px;">
      <div class="avatar avatar-xl">JD</div>
      <div><div style="font-weight:600;">Jane Doe</div><div style="color:var(--text-muted);">jane@company.com</div></div>
    </div>
    <hr class="divider">
    <div style="display:flex;justify-content:space-between;padding:10px 0;">
      <span style="color:var(--text-muted);">Member since</span>
      <span style="font-family:var(--font-mono);">Sep 14, 2024</span>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">Security Overview</div></div>
    <div class="security-item">
      <div class="security-icon" style="background:var(--success-bg);">🔒</div>
      <div class="security-info"><div class="security-name">Password</div><div class="security-desc">Last changed 28 days ago</div></div>
      <div class="security-status enabled">● Strong</div>
    </div>
  </div>
</div>
```

**Key CSS:** `.admin-card-grid: repeat(auto-fill, minmax(200px, 1fr))`. `.quick-link: flex; align-items: center; gap: 14px` with hover effects.

---

## Tips

- All sidebar-based layouts use `<script src="sidebar.js"></script>` before `</body>` to inject the sidebar navigation
- Standalone pages (auth, landing, error) skip the `.layout` wrapper and sidebar
- Use `.grid-2` / `.grid-3` for card grids; they collapse to single column at ≤860px
- Use `.stats-row` for stat cards; it uses `repeat(auto-fit, minmax(200px, 1fr))`
- For charts, use `patina-charts.js` with Chart.js — see the Charts section in PATINA-COMPONENTS.md for API details and container classes
