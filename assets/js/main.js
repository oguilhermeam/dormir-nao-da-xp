// ==========================================================================
// DORMIR NÃO DÁ XP - Main JavaScript
// Interações minimalistas, rápidas e sem dependências pesadas
// ==========================================================================

// Inicialização imediata do tema para evitar FOUC (flash de cores)
(function initThemeEarly() {
  const savedTheme = localStorage.getItem('dnd_site_theme');
  // Padrão: Halloween ativo! Tema clássico preservado e restaurável a qualquer momento.
  if (savedTheme === 'classic') {
    document.documentElement.setAttribute('data-theme', 'classic');
  } else {
    document.documentElement.setAttribute('data-theme', 'halloween');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initSearchAndFilter();
  initKeyboardShortcuts();
});

// Utilitário para evitar execuções excessivas e quedas de frame (debouncing)
function debounce(fn, delay = 100) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Busca em tempo real e filtros de categorias
function initSearchAndFilter() {
  const searchInput = document.getElementById('guideSearch');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.guide-card-item');

  if (!cards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    let visibleCount = 0;
    cards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const desc = (card.getAttribute('data-desc') || '').toLowerCase();
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesSearch = !searchTerm || 
        title.includes(searchTerm) || 
        desc.includes(searchTerm) || 
        tags.includes(searchTerm);

      const matchesCategory = activeCategory === 'all' || category === activeCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Feedback de estado vazio se nenhum card for encontrado
    const noResultsEl = document.getElementById('noResults');
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterCards();
    }, 100));
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });
}

// Atalho de teclado rápido (/ ou Ctrl+K) para pesquisar
function initKeyboardShortcuts() {
  const searchInput = document.getElementById('guideSearch');
  if (!searchInput) return;

  window.addEventListener('keydown', (e) => {
    // Se o usuário apertar '/' fora de campos de texto ou Ctrl+K / Cmd+K
    const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if ((e.key === '/' && !isTyping) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
}


// ==========================================================================
// MODO LEVE (LITE MODE) & MONITOR DE DESEMPENHO (AUTO-FPS CHECKER)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLiteMode();
  initPerformanceMonitor();
});

// Inicializa o modo lite salvo no localStorage
function initLiteMode() {
  const isLite = localStorage.getItem('dnd_xp_mode') === 'lite';
  if (isLite) {
    document.documentElement.classList.add('mode-lite');
  }
  updateLiteToggleButton(isLite);
}

// Alterna manualmente o Modo Leve
function toggleLiteMode(forceState) {
  const root = document.documentElement;
  const shouldBeLite = forceState !== undefined ? forceState : !root.classList.contains('mode-lite');
  
  if (shouldBeLite) {
    root.classList.add('mode-lite');
    localStorage.setItem('dnd_xp_mode', 'lite');
  } else {
    root.classList.remove('mode-lite');
    localStorage.removeItem('dnd_xp_mode');
  }
  
  updateLiteToggleButton(shouldBeLite);
  
  // Feedback sutil se ativado manualmente
  const toast = document.getElementById('liteModeToast');
  if (toast) toast.remove();
}

// Atualiza o texto do botão no rodapé
function updateLiteToggleButton(isLite) {
  const btn = document.getElementById('btnLiteToggle');
  if (!btn) return;
  if (isLite) {
    btn.innerHTML = '<span class="lite-icon">⚡</span> <span class="lite-text">Modo Leve: <strong>ATIVADO</strong></span>';
    btn.classList.add('active');
  } else {
    btn.innerHTML = '<span class="lite-icon">⚡</span> <span class="lite-text">Modo Leve: Desativado</span>';
    btn.classList.remove('active');
  }
}

// Monitor inteligente de FPS: detecta se o navegador do jogador está engasgando
function initPerformanceMonitor() {
  // Não monitora se já estiver no Modo Leve ou se dispensou nesta sessão
  if (localStorage.getItem('dnd_xp_mode') === 'lite' || sessionStorage.getItem('dnd_dismiss_lite_notice')) {
    return;
  }

  let frameTimes = [];
  let lastTime = performance.now();
  let lowFpsDetections = 0;
  let isMonitoring = true;
  let userHasInteracted = false;

  // Só mede se o usuário estiver rolando ou interagindo na página
  const onUserActivity = () => {
    userHasInteracted = true;
  };
  window.addEventListener('scroll', onUserActivity, { passive: true });
  window.addEventListener('mousemove', onUserActivity, { passive: true });

  function checkFrame(currentTime) {
    if (!isMonitoring) return;

    const delta = currentTime - lastTime;
    lastTime = currentTime;

    // Ignora quando a aba estiver em segundo plano ou pausas anormais
    if (!document.hidden && userHasInteracted && delta > 5 && delta < 250) {
      const fps = 1000 / delta;
      frameTimes.push(fps);
      if (frameTimes.length > 50) frameTimes.shift();

      if (frameTimes.length >= 35) {
        const avgFps = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
        if (avgFps < 26) {
          lowFpsDetections++;
          if (lowFpsDetections >= 3) {
            isMonitoring = false;
            showLiteModeToast(Math.round(avgFps));
            return;
          }
        } else {
          lowFpsDetections = Math.max(0, lowFpsDetections - 1);
        }
      }
    }

    requestAnimationFrame(checkFrame);
  }

  requestAnimationFrame(checkFrame);

  // Encerra monitoramento após 40s para economizar processamento
  setTimeout(() => {
    isMonitoring = false;
    window.removeEventListener('scroll', onUserActivity);
    window.removeEventListener('mousemove', onUserActivity);
  }, 40000);
}

// Mostra o Toast estilizado em estilo MMO HUD avisando sobre a queda de FPS
function showLiteModeToast(detectedFps) {
  if (document.getElementById('liteModeToast')) return;

  const toast = document.createElement('div');
  toast.id = 'liteModeToast';
  toast.className = 'lite-toast';
  toast.innerHTML = `
    <div class="lite-toast-header">
      <span class="lite-toast-title">⚡ Desempenho Baixo (~${detectedFps} FPS)</span>
      <button class="lite-toast-close" onclick="dismissLiteToast()" aria-label="Fechar">&times;</button>
    </div>
    <p class="lite-toast-msg">Detectamos lentidão no seu navegador. Deseja ativar o <strong>Modo Leve (Lite)</strong> para remover efeitos visuais e deixar o site 100% fluido?</p>
    <div class="lite-toast-actions">
      <button type="button" class="lite-toast-btn btn-enable-lite" onclick="enableLiteModeFromToast()">Ativar Modo Leve</button>
      <button type="button" class="lite-toast-btn btn-dismiss-lite" onclick="dismissLiteToast()">Agora Não</button>
    </div>
  `;
  document.body.appendChild(toast);
}

function dismissLiteToast() {
  const toast = document.getElementById('liteModeToast');
  if (toast) toast.remove();
  sessionStorage.setItem('dnd_dismiss_lite_notice', '1');
}

function enableLiteModeFromToast() {
  toggleLiteMode(true);
  const toast = document.getElementById('liteModeToast');
  if (toast) {
    toast.innerHTML = `
      <div class="lite-toast-header">
        <span class="lite-toast-title" style="color: var(--teal);">⚡ Modo Leve Ativado!</span>
      </div>
      <p class="lite-toast-msg">Efeitos pesados desativados com sucesso. O site agora roda com foco em velocidade máxima.</p>
    `;
    setTimeout(() => toast.remove(), 2500);
  }
}

// ==========================================================================
// GERENCIADOR DE TEMAS: HALLOWEEN & CLÁSSICO (PRESERVADO)
// ==========================================================================

function initThemeSwitcher() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'halloween';

  // 1. Injeta Spooky Elements se ainda não existirem
  if (!document.querySelector('.halloween-spooks')) {
    const spooks = document.createElement('div');
    spooks.className = 'halloween-spooks';
    spooks.setAttribute('aria-hidden', 'true');
    spooks.innerHTML = `
      <div class="spook-item spook-bat-1">🦇</div>
      <div class="spook-item spook-bat-2">🦇</div>
      <div class="spook-item spook-ghost-1">👻</div>
    `;
    document.body.appendChild(spooks);
  }

  // 2. Injeta botão no Navbar se não existir
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !document.getElementById('themeToggleBtn')) {
    const li = document.createElement('li');
    li.className = 'nav-theme-item';
    li.innerHTML = `
      <button type="button" class="btn-theme-toggle" id="themeToggleBtn" onclick="toggleSiteTheme()" title="Alternar entre Tema Halloween e Tema Clássico">
        <span class="theme-icon">🎃</span>
        <span class="theme-text">Halloween</span>
      </button>
    `;
    navLinks.appendChild(li);
  }

  // 3. Injeta botão no Rodapé se não existir
  const footerActions = document.querySelector('.footer-actions');
  if (footerActions && !document.getElementById('btnThemeToggleFooter')) {
    const footerBtn = document.createElement('button');
    footerBtn.type = 'button';
    footerBtn.className = 'btn-theme-toggle btn-theme-footer';
    footerBtn.id = 'btnThemeToggleFooter';
    footerBtn.onclick = toggleSiteTheme;
    footerBtn.title = 'Alternar entre Tema Halloween e Tema Clássico';
    footerActions.appendChild(footerBtn);
  }

  updateThemeUI(currentTheme);
}

function toggleSiteTheme() {
  const isClassic = document.documentElement.getAttribute('data-theme') === 'classic';
  const newTheme = isClassic ? 'halloween' : 'classic';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('dnd_site_theme', newTheme);

  updateThemeUI(newTheme);

  if (newTheme === 'halloween') {
    showThemeToast('🎃 Tema de Halloween Ativado!');
  } else {
    showThemeToast('⚔️ Tema Clássico Restaurado!');
  }
}

function updateThemeUI(theme) {
  const isHalloween = theme !== 'classic';

  // Botão Navbar
  const navBtn = document.getElementById('themeToggleBtn');
  if (navBtn) {
    navBtn.innerHTML = isHalloween 
      ? '<span class="theme-icon">🎃</span> <span class="theme-text">Halloween</span>'
      : '<span class="theme-icon">⚔️</span> <span class="theme-text">Clássico</span>';
    navBtn.title = isHalloween ? 'Tema Halloween Ativo (Clique para mudar para Clássico)' : 'Tema Clássico Ativo (Clique para mudar para Halloween)';
  }

  // Botão Footer
  const footerBtn = document.getElementById('btnThemeToggleFooter');
  if (footerBtn) {
    footerBtn.innerHTML = isHalloween
      ? '<span class="theme-icon">🎃</span> <span class="theme-text">Tema: <strong>Halloween</strong> (Clique para Clássico)</span>'
      : '<span class="theme-icon">⚔️</span> <span class="theme-text">Tema: <strong>Clássico</strong> (Clique para Halloween)</span>';
  }
}

function showThemeToast(msg) {
  let toast = document.getElementById('themeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'themeToast';
    toast.className = 'theme-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.classList.add('show');
  clearTimeout(window._themeToastTimer);
  window._themeToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
