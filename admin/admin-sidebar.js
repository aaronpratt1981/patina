// Admin Dashboard — Sidebar (Patina design system)
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';

  const navItems = [
    { label: 'Home',                icon: 'home',     href: 'home.html' },
    { label: 'My Apps',             icon: 'apps',     href: 'my-apps.html' },
    { label: 'Profile',             icon: 'user',     href: 'profile.html' },
    { label: 'Password & Security', icon: 'shield',   href: 'password-security.html' },
    { label: 'Billing',             icon: 'card',     href: 'billing.html' },
  ];

  const icons = {
    home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    apps: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
    user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 00-16 0"/></svg>`,
    shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    card: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  };

  let html = `
    <div class="sidebar-logo"><div class="logo-dot"></div> Patina</div>
    <div class="app-switcher" style="padding:0 12px; margin-bottom:20px;">
      <div class="app-switcher-trigger" onclick="toggleAppSwitcher()" style="
        display:flex; align-items:center; gap:10px; padding:10px 12px;
        border-radius:10px; cursor:pointer; transition:all 0.15s;
        border:1.5px solid var(--border); background:var(--white);
      " onmouseover="this.style.borderColor='var(--border-strong)'" onmouseout="if(!document.getElementById('appMenu').classList.contains('open'))this.style.borderColor='var(--border)'">
        <div style="width:28px;height:28px;border-radius:8px;background:var(--accent-bg);display:flex;align-items:center;justify-content:center;font-size:0.8rem;flex-shrink:0;">🎨</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:0.82rem;font-weight:600;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Patina Studio</div>
          <div style="font-size:0.68rem;color:var(--text-muted);">Pro Plan</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div id="appMenu" class="app-switcher-menu" style="
        display:none; position:absolute; left:12px; right:12px; z-index:100;
        margin-top:6px; background:var(--white); border:1.5px solid var(--border);
        border-radius:14px; box-shadow:0 12px 40px rgba(0,0,0,0.1); padding:8px;
        animation:appMenuIn 0.15s ease;
      ">
        <div style="padding:6px 10px 10px; font-size:0.68rem; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-dim);">Switch App</div>
        <div class="app-option" onclick="selectApp(this)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;cursor:pointer;transition:background 0.12s;background:var(--accent-bg);">
          <div style="width:28px;height:28px;border-radius:8px;background:var(--white);display:flex;align-items:center;justify-content:center;font-size:0.8rem;">🎨</div>
          <div style="flex:1;"><div style="font-size:0.82rem;font-weight:600;">Patina Studio</div><div style="font-size:0.68rem;color:var(--text-muted);">12 members · Pro</div></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="app-option" onclick="selectApp(this)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;cursor:pointer;transition:background 0.12s;" onmouseover="this.style.background='var(--bg-warm)'" onmouseout="this.style.background='transparent'">
          <div style="width:28px;height:28px;border-radius:8px;background:var(--highlight-bg);display:flex;align-items:center;justify-content:center;font-size:0.8rem;">📊</div>
          <div style="flex:1;"><div style="font-size:0.82rem;font-weight:600;">Patina Analytics</div><div style="font-size:0.68rem;color:var(--text-muted);">4 members · Starter</div></div>
        </div>
        <div class="app-option" onclick="selectApp(this)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;cursor:pointer;transition:background 0.12s;" onmouseover="this.style.background='var(--bg-warm)'" onmouseout="this.style.background='transparent'">
          <div style="width:28px;height:28px;border-radius:8px;background:var(--info-bg);display:flex;align-items:center;justify-content:center;font-size:0.8rem;">⚙️</div>
          <div style="flex:1;"><div style="font-size:0.82rem;font-weight:600;">Patina DevOps</div><div style="font-size:0.68rem;color:var(--text-muted);">1 member · Trial</div></div>
        </div>
        <div style="border-top:1px solid var(--border); margin:6px 0;"></div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;cursor:pointer;transition:background 0.12s;color:var(--text-muted);font-size:0.82rem;font-weight:500;" onmouseover="this.style.background='var(--bg-warm)';this.style.color='var(--text)'" onmouseout="this.style.background='transparent';this.style.color='var(--text-muted)'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add new app
        </div>
      </div>
    </div>

    <div class="nav-section">
      <div class="nav-section-label">My Account</div>
  `;

  navItems.forEach(item => {
    const isActive = currentPage === item.href;
    html += `
      <a class="nav-item${isActive ? ' active' : ''}" href="${item.href}">
        <span class="nav-icon">${icons[item.icon]}</span>
        ${item.label}
      </a>`;
  });

  html += `</div>`;

  html += `
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="user-avatar">JD</div>
        <div>
          <div class="user-name">Jane Doe</div>
          <div class="user-email">jane@company.com</div>
        </div>
      </div>
      <button class="admin-logout-btn" onclick="handleLogout()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Log out
      </button>
    </div>
  `;

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.innerHTML = html;

  window.toggleAppSwitcher = function() {
    const menu = document.getElementById('appMenu');
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.style.display = 'none';
      menu.classList.remove('open');
    } else {
      menu.style.display = 'block';
      menu.classList.add('open');
    }
  };
  window.selectApp = function(el) { toggleAppSwitcher(); };
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('appMenu');
    if (!menu) return;
    const switcher = menu.parentElement;
    if (!switcher.contains(e.target) && menu.classList.contains('open')) {
      menu.style.display = 'none';
      menu.classList.remove('open');
    }
  });
  window.handleLogout = function() {
    if (confirm('Are you sure you want to log out?')) {
      alert('Logged out successfully.');
    }
  };
})();
