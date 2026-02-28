// Patina — Component Inspector
(function() {
  const componentDocs = {
    'btn': 'actions.html', 'btn-primary': 'actions.html', 'btn-secondary': 'actions.html',
    'btn-ghost': 'actions.html', 'btn-danger': 'actions.html', 'btn-tonal': 'actions.html',
    'btn-elevated': 'actions.html', 'fab': 'actions.html', 'seg-group': 'actions.html',
    'card': 'layout.html', 'card-header': 'layout.html', 'card-title': 'layout.html',
    'badge': 'feedback.html', 'alert': 'feedback.html', 'snackbar': 'feedback.html',
    'progress-track': 'feedback.html', 'spinner-standalone': 'feedback.html',
    'chip': 'selection.html', 'chip-filter': 'selection.html', 'menu': 'selection.html',
    'avatar': 'data-display.html', 'data-table': 'data-display.html',
    'stat-card': 'data-display.html', 'empty-state': 'data-display.html',
    'activity-feed': 'data-display.html', 'accordion': 'data-display.html',
    'auth-layout': 'patterns.html', 'hero': 'patterns.html', 'error-section': 'patterns.html',
    'testimonial': 'patterns.html', 'feature-card': 'patterns.html', 'plan-card': 'patterns.html',
    'countdown': 'patterns.html', 'stats-section': 'patterns.html',
    'field-input': 'inputs.html', 'picklist': 'inputs.html', 'slider': 'inputs.html',
    'toggle-track': 'inputs.html', 'date-picker': 'inputs.html',
    'tabs': 'nav-components.html', 'breadcrumbs': 'nav-components.html',
    'pagination': 'nav-components.html', 'search-bar': 'nav-components.html',
    'nav-bar': 'nav-components.html', 'top-bar': 'nav-components.html',
    'toolbar': 'layout.html', 'list': 'layout.html', 'modal': 'layout.html',
    'side-sheet': 'layout.html', 'bottom-sheet': 'layout.html',
    'steps': 'inputs.html', 'kanban-col': 'layout.html',
  };

  const pathParts = window.location.pathname.split('/');
  const inAdmin = pathParts.some(p => p === 'admin');
  const docPrefix = inAdmin ? '../' : '';
  const currentPage = pathParts.pop() || '';

  // Only show on reference pages, not component pages
  const componentPages = [
    'foundations.html','actions.html','inputs.html','selection.html',
    'feedback.html','layout.html','nav-components.html','data-display.html',
    'charts.html','patterns.html','image-gallery.html','drag-drop.html',
    'ai-components.html','grids.html','pickers.html','index.html'
  ];
  if (componentPages.includes(currentPage)) return;

  const magnifierSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

  const style = document.createElement('style');
  style.textContent = `
    .inspector-highlight { outline: 3px solid var(--accent) !important; outline-offset: 3px; background-color: rgba(181,67,50,0.08) !important; }
    .inspector-tooltip {
      position: fixed; z-index: 10000; pointer-events: none;
      background: var(--text, #1a1a2e); color: #fff;
      font-family: var(--font-mono, monospace); font-size: 0.75rem;
      padding: 5px 10px; border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      white-space: nowrap;
      transform: translateY(-100%) translateX(-50%);
      margin-top: -8px;
    }
    .inspector-tooltip a {
      color: var(--accent-light, #c97e6e); margin-left: 8px;
      text-decoration: underline; pointer-events: auto; cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // Create FAB
  const fab = document.createElement('button');
  fab.className = 'inspector-fab';
  fab.setAttribute('aria-label', 'Toggle component inspector');
  fab.innerHTML = magnifierSVG;
  document.body.appendChild(fab);

  // Tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'inspector-tooltip';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  let active = false;
  let outlinedElements = [];
  let elementClassMap = new Map();

  function getComponentsFromComment() {
    const root = document.querySelector('main') || document.body;
    if (!root) return [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
    let node;
    while ((node = walker.nextNode())) {
      const match = node.nodeValue.match(/Components:\s*(.+)/i);
      if (match) {
        return match[1].split(',').map(s => s.trim().replace(/^\./, '')).filter(Boolean);
      }
    }
    return [];
  }

  function handleMouseOver(e) {
    const el = e.target.closest('.inspector-outline');
    if (!el) {
      tooltip.style.display = 'none';
      return;
    }
    const classes = elementClassMap.get(el);
    if (!classes || classes.length === 0) return;

    const label = classes.map(c => '.' + c).join(', ');
    const docLink = classes.find(c => componentDocs[c]);
    const href = docLink ? docPrefix + componentDocs[docLink] : null;

    tooltip.innerHTML = label;
    tooltip.style.display = '';

    const rect = el.getBoundingClientRect();
    let top = rect.top;
    let left = rect.left + rect.width / 2;

    // If tooltip would go above viewport, show below instead
    if (top < 40) {
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.style.marginTop = '0';
      top = rect.bottom + 8;
    } else {
      tooltip.style.transform = 'translateY(-100%) translateX(-50%)';
      tooltip.style.marginTop = '-8px';
    }

    tooltip.style.top = top + 'px';
    tooltip.style.left = Math.max(60, Math.min(left, window.innerWidth - 60)) + 'px';
  }

  function handleMouseOut(e) {
    const el = e.target.closest('.inspector-outline');
    if (!el) {
      tooltip.style.display = 'none';
    }
  }

  function activate() {
    active = true;
    fab.classList.add('active');
    elementClassMap.clear();

    const classes = getComponentsFromComment();

    classes.forEach(cls => {
      const els = document.querySelectorAll('.' + CSS.escape(cls));
      els.forEach(el => {
        el.classList.add('inspector-outline');
        if (!outlinedElements.includes(el)) outlinedElements.push(el);
        if (!elementClassMap.has(el)) elementClassMap.set(el, []);
        elementClassMap.get(el).push(cls);
      });
    });

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
  }

  function deactivate() {
    active = false;
    fab.classList.remove('active');
    outlinedElements.forEach(el => {
      el.classList.remove('inspector-outline');
      el.classList.remove('inspector-highlight');
    });
    outlinedElements = [];
    elementClassMap.clear();
    tooltip.style.display = 'none';
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
  }

  fab.addEventListener('click', () => {
    if (active) { deactivate(); } else { activate(); }
  });
})();
