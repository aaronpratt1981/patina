// Patina — Shared sidebar injection (sliding panels)
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';

  const navStructure = [
    {
      type: 'link',
      label: 'Home', icon: 'book', href: 'index.html'
    },
    {
      type: 'category',
      label: 'Components', icon: 'layout',
      subsections: [
        {
          label: 'Core',
          items: [
            { label: 'Foundations',   icon: 'palette',   href: 'foundations.html' },
            { label: 'Layout',        icon: 'layout',    href: 'layout.html' },
            { label: 'Grids',         icon: 'grid',      href: 'grids.html' },
          ]
        },
        {
          label: 'Forms',
          items: [
            { label: 'Inputs',        icon: 'edit',      href: 'inputs.html' },
            { label: 'Pickers',       icon: 'calendar',  href: 'pickers.html' },
            { label: 'Selection',     icon: 'check-sq',  href: 'selection.html' },
            { label: 'Actions',       icon: 'zap',       href: 'actions.html' },
          ]
        },
        {
          label: 'Display',
          items: [
            { label: 'Data Display',  icon: 'table',     href: 'data-display.html' },
            { label: 'Charts',        icon: 'chart',     href: 'charts.html' },
            { label: 'Image Gallery', icon: 'image',     href: 'image-gallery.html' },
          ]
        },
        {
          label: 'Interaction',
          items: [
            { label: 'Feedback',      icon: 'alert',     href: 'feedback.html' },
            { label: 'Navigation',    icon: 'compass',   href: 'nav-components.html' },
            { label: 'Drag & Drop',   icon: 'box',       href: 'drag-drop.html' },
          ]
        },
        {
          label: 'AI',
          items: [
            { label: 'AI Components', icon: 'sparkle',   href: 'ai-components.html' },
          ]
        },
        {
          label: 'Patterns',
          items: [
            { label: 'Patterns',      icon: 'layout',    href: 'patterns.html' },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference Pages', icon: 'file',
      subsections: [
        {
          label: 'Overview',
          items: [
            { label: 'Dashboard',  icon: 'grid',     href: 'dashboard.html' },
            { label: 'Analytics',  icon: 'chart',    href: 'analytics.html' },
            { label: 'Board',      icon: 'board',    href: 'kanban.html' },
            { label: 'Calendar',   icon: 'calendar', href: 'calendar.html' },
          ]
        },
        {
          label: 'Content',
          items: [
            { label: 'Table View',   icon: 'list',   href: 'table-list.html' },
            { label: 'Detail',       icon: 'file',   href: 'detail-page.html' },
            { label: 'Article',      icon: 'file',   href: 'article.html' },
            { label: 'File Manager', icon: 'folder', href: 'file-manager.html' },
          ]
        },
        {
          label: 'Communication',
          items: [
            { label: 'Inbox',         icon: 'mail',    href: 'inbox.html', external: true },
            { label: 'Chat',          icon: 'message', href: 'chat.html', external: true },
            { label: 'Notifications', icon: 'bell',    href: 'notifications.html', badge: '3' },
          ]
        },
        {
          label: 'Ecommerce',
          items: [
            { label: 'Category',       icon: 'shop',    href: 'ecommerce-category.html', external: true },
            { label: 'Product',        icon: 'package', href: 'ecommerce-product.html',  external: true },
            { label: 'Checkout',       icon: 'cart',    href: 'checkout.html',            external: true },
          ]
        },
        {
          label: 'Account',
          items: [
            { label: 'Profile',        icon: 'user',     href: 'profile.html' },
            { label: 'Settings',       icon: 'settings', href: 'settings.html' },
            { label: 'User Directory', icon: 'users',    href: 'user-directory.html' },
          ]
        },
        {
          label: 'Patterns',
          items: [
            { label: 'Error Pages',  icon: 'alert', href: 'error-pages.html', external: true },
            { label: 'Login Page',   icon: 'lock',  href: 'login.html',        external: true },
            { label: 'Landing Page', icon: 'globe', href: 'landing.html',      external: true },
            { label: 'Pricing',      icon: 'tag',   href: 'pricing.html',      external: true },
          ]
        },
      ]
    },
  ];

  const icons = {
    palette:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1" fill="currentColor"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`,
    zap:        `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    edit:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    'check-sq': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
    layout:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    compass:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    table:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
    grid:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    chart:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    board:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="12" rx="1"/><rect x="17" y="3" width="5" height="15" rx="1"/></svg>`,
    calendar:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    list:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    file:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    folder:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>`,
    mail:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    message:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    bell:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
    user:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    settings:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
    cart:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
    users:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    box:        `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    shop:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l1-4h16l1 4"/><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/><path d="M9 21V13h6v8"/><path d="M3 9h18"/></svg>`,
    package:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    image:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    alert:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    lock:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    globe:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    tag:        `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
    book:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    sparkle:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/></svg>`,
  };

  const chevronRightSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>`;
  const arrowLeftSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;
  const hamburgerSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

  const ICON_TOGGLE = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

  const waffleSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="19" r="1.5" fill="currentColor" stroke="none"/></svg>`;

  const waffleApps = [
    { name: 'Dashboard', icon: 'grid', href: 'dashboard.html' },
    { name: 'Analytics', icon: 'chart', href: 'analytics.html' },
    { name: 'Inbox', icon: 'mail', href: 'inbox.html' },
    { name: 'Calendar', icon: 'calendar', href: 'calendar.html' },
    { name: 'Files', icon: 'folder', href: 'file-manager.html' },
    { name: 'Settings', icon: 'settings', href: 'settings.html' },
  ];

  function buildNavItem(item) {
    const isActive = currentPage === item.href;
    const externalAttrs = item.external ? ' target="_blank"' : '';
    const externalIcon = item.external ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="opacity:0.4;margin-left:auto"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>` : '';
    return `<a class="nav-item${isActive ? ' active' : ''}" href="${item.href}"${externalAttrs}>
      <span class="nav-icon">${icons[item.icon]}</span>
      ${item.label}
      ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
      ${externalIcon}
    </a>`;
  }

  // Find which category the current page belongs to
  let activeCategory = null;
  navStructure.forEach(entry => {
    if (entry.type === 'category' && entry.subsections) {
      entry.subsections.forEach(sub => {
        sub.items.forEach(item => {
          if (currentPage === item.href) activeCategory = entry.label;
        });
      });
    }
  });

  // --- Build HTML ---
  let html = `<div class="sidebar-logo" style="position:relative;">
    <div style="display:flex;align-items:center;gap:10px;">
      <button class="waffle-btn" id="sidebar-waffle" aria-label="App switcher">${waffleSVG}</button>
      <span class="sidebar-wordmark">Patina</span>
    </div>
    <div class="waffle-menu" id="sidebar-waffle-menu">
      <div class="waffle-grid">
        ${waffleApps.map(a => `<a class="waffle-app" href="${a.href}"><span class="waffle-app-icon">${icons[a.icon]}</span><span class="waffle-app-name">${a.name}</span></a>`).join('')}
      </div>
    </div>
  </div>`;

  // Panels container
  html += `<div class="sidebar-panels">`;

  // --- Root panel ---
  html += `<div class="sidebar-panel sidebar-panel-root">`;
  navStructure.forEach(entry => {
    if (entry.type === 'link') {
      html += buildNavItem(entry);
    } else if (entry.type === 'category') {
      html += `<button class="nav-category" data-category="${entry.label}">
        <span style="display:flex;align-items:center;gap:12px;">
          <span class="nav-icon">${icons[entry.icon]}</span>
          ${entry.label}
        </span>
        ${chevronRightSVG}
      </button>`;
    }
  });
  html += `</div>`;

  // --- Detail panel (populated dynamically) ---
  html += `<div class="sidebar-panel sidebar-panel-detail" id="sidebar-detail"></div>`;

  html += `</div>`; // close sidebar-panels

  // Footer (pinned)
  const logoutSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`;
  html += `
    <div class="sidebar-footer">
      <a class="sidebar-user" href="admin/home.html" style="text-decoration:none;color:inherit;">
        <div class="user-avatar">JD</div>
        <div>
          <div class="user-name">Jane Doe</div>
          <div class="user-email">jane@company.com</div>
        </div>
      </a>
      <a class="sidebar-logout" href="login.html">${logoutSVG} Log out</a>
    </div>
  `;

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.innerHTML = html;

  // --- Drill-in logic ---
  function drillInto(categoryLabel) {
    const category = navStructure.find(e => e.label === categoryLabel);
    if (!category || !category.subsections) return;

    const detail = document.getElementById('sidebar-detail');
    let detailHTML = `<button class="sidebar-back" id="sidebar-back-btn">${arrowLeftSVG} ${categoryLabel}</button>`;
    category.subsections.forEach(sub => {
      detailHTML += `<div class="nav-group-label">${sub.label}</div>`;
      sub.items.forEach(item => { detailHTML += buildNavItem(item); });
    });
    detail.innerHTML = detailHTML;
    sidebar.classList.add('drilled');

    // Scroll active item into view, otherwise reset to top
    const activeItem = detail.querySelector('.nav-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'center' });
    } else {
      detail.scrollTop = 0;
    }

    document.getElementById('sidebar-back-btn').addEventListener('click', () => {
      sidebar.classList.remove('drilled');
    });
  }

  // Category click handlers
  document.querySelectorAll('.nav-category').forEach(btn => {
    btn.addEventListener('click', () => {
      drillInto(btn.getAttribute('data-category'));
    });
  });

  // Auto-drill if current page is inside a category
  if (activeCategory) {
    drillInto(activeCategory);
  }

  // --- Sidebar toggle button ---
  const toggle = document.createElement('button');
  toggle.className = 'sidebar-toggle';
  toggle.setAttribute('aria-label', 'Toggle sidebar');
  toggle.innerHTML = ICON_TOGGLE;
  const sidebarLogo = sidebar.querySelector('.sidebar-logo');
  if (sidebarLogo) {
    sidebarLogo.appendChild(toggle);
  } else {
    document.body.appendChild(toggle);
  }

  // --- Backdrop for mobile overlay ---
  const backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  backdrop.style.cssText = 'display:none;position:fixed;inset:0;z-index:398;background:rgba(0,0,0,0.4);';
  document.body.appendChild(backdrop);

  const isMobile = () => window.innerWidth < 860;
  const layout = document.querySelector('.layout');

  function applyState(collapsed) {
    if (isMobile()) {
      if (collapsed) {
        sidebar.classList.remove('mobile-open');
        backdrop.style.display = 'none';
        toggle.classList.add('sidebar-toggle--collapsed');
        toggle.classList.remove('sidebar-toggle--open');
        toggle.innerHTML = ICON_TOGGLE;
        document.body.appendChild(toggle);
      } else {
        sidebar.classList.add('mobile-open');
        backdrop.style.display = 'block';
        toggle.classList.add('sidebar-toggle--open');
        if (sidebarLogo) sidebarLogo.appendChild(toggle);
      }
      sidebar.classList.remove('collapsed');
      if (layout) layout.classList.remove('sidebar-hidden');
    } else {
      if (collapsed) {
        sidebar.classList.add('collapsed');
        if (layout) layout.classList.add('sidebar-hidden');
        toggle.classList.add('sidebar-toggle--collapsed');
        toggle.innerHTML = ICON_TOGGLE;
        document.body.appendChild(toggle);
      } else {
        sidebar.classList.remove('collapsed');
        if (layout) layout.classList.remove('sidebar-hidden');
        toggle.classList.remove('sidebar-toggle--collapsed');
        toggle.innerHTML = ICON_TOGGLE;
        if (sidebarLogo) sidebarLogo.appendChild(toggle);
      }
      sidebar.classList.remove('mobile-open');
      toggle.classList.remove('sidebar-toggle--open');
      backdrop.style.display = 'none';
    }
  }

  let isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (isMobile()) isCollapsed = true;
  applyState(isCollapsed);

  toggle.addEventListener('click', () => {
    if (isMobile()) {
      const isOpen = sidebar.classList.contains('mobile-open');
      applyState(!isOpen ? false : true);
    } else {
      isCollapsed = !isCollapsed;
      localStorage.setItem('sidebar-collapsed', isCollapsed);
      applyState(isCollapsed);
    }
  });

  backdrop.addEventListener('click', () => {
    applyState(true);
  });

  window.addEventListener('resize', () => {
    if (isMobile()) {
      applyState(true);
    } else {
      applyState(isCollapsed);
    }
  });

  // --- Waffle menu toggle ---
  const waffleBtn = document.getElementById('sidebar-waffle');
  const waffleMenu = document.getElementById('sidebar-waffle-menu');
  if (waffleBtn && waffleMenu) {
    document.body.appendChild(waffleMenu);
    waffleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = waffleMenu.style.display === 'block';
      if (!open) {
        const r = waffleBtn.getBoundingClientRect();
        waffleMenu.style.top = (r.bottom + 6) + 'px';
        waffleMenu.style.left = r.left + 'px';
        waffleMenu.style.display = 'block';
      } else {
        waffleMenu.style.display = 'none';
      }
    });
    document.addEventListener('click', (e) => {
      if (!waffleMenu.contains(e.target) && !waffleBtn.contains(e.target)) {
        waffleMenu.style.display = 'none';
      }
    });
  }

  // --- Scroll-to-top button ---
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // --- Top bar scroll reveal: move icon to main title, show in top bar on scroll ---
  const topBar = document.querySelector('.top-bar');
  const mainTitle = document.querySelector('.main-title');
  const topBarIcon = topBar ? topBar.querySelector('.top-bar-icon') : null;

  if (topBar && mainTitle && topBarIcon) {
    // Clone the icon SVG into the main title
    const titleIcon = document.createElement('span');
    titleIcon.className = 'main-title-icon';
    titleIcon.innerHTML = topBarIcon.innerHTML;
    mainTitle.prepend(titleIcon);

    // Observe when main title scrolls out of view
    const observer = new IntersectionObserver(([entry]) => {
      topBar.classList.toggle('scrolled', !entry.isIntersecting);
    }, { threshold: 0, rootMargin: '-56px 0px 0px 0px' });
    observer.observe(mainTitle);
  }

  // --- Auto-inject breadcrumbs on component/reference pages ---
  const mainHeader = document.querySelector('.main-header');
  if (mainHeader) {
    let crumbCategory = null;
    let crumbSubsection = null;
    let crumbItem = null;
    navStructure.forEach(entry => {
      if (entry.type === 'category' && entry.subsections) {
        entry.subsections.forEach(sub => {
          sub.items.forEach(item => {
            if (currentPage === item.href) {
              crumbCategory = entry.label;
              crumbSubsection = sub.label;
              crumbItem = item.label;
            }
          });
        });
      }
    });
    if (crumbCategory && crumbSubsection) {
      const nav = document.createElement('nav');
      nav.className = 'breadcrumbs';
      nav.style.marginBottom = '8px';
      nav.innerHTML = `<span class="breadcrumb-item">${crumbCategory}</span>`
        + `<span class="breadcrumb-item">${crumbSubsection}</span>`;
      mainHeader.parentNode.insertBefore(nav, mainHeader);
    }

    // Component count badge in top bar
    if (topBar) {
      const count = document.querySelectorAll('.demo-section').length;
      if (count > 0) {
        // Remove any existing static badge
        const existing = topBar.querySelector('.top-bar-badge');
        if (existing) existing.remove();
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = count + ' component' + (count !== 1 ? 's' : '');
        badge.style.cssText = 'background:var(--accent3);color:#fff;margin-left:auto;';
        topBar.appendChild(badge);
      }
    }
  }

  // Eliminate FOUT — reveal page once web fonts are loaded
  document.fonts.ready.then(() => document.documentElement.classList.add('fonts-ready'));
})();
