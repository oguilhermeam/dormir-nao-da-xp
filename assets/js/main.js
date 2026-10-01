// ==========================================================================
// DORMIR NÃO DÁ XP - Main JavaScript
// Interações minimalistas, rápidas e sem dependências pesadas
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSearchAndFilter();
  initKeyboardShortcuts();
  initSmoothScroll();
});

// Busca em tempo real e filtros de categorias
function initSearchAndFilter() {
  const searchInput = document.getElementById('guideSearch');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.guide-card-item');

  if (!cards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
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
      } else {
        card.style.display = 'none';
      }
    });

    // Feedback de estado vazio se nenhum card for encontrado
    const noResultsEl = document.getElementById('noResults');
    if (noResultsEl) {
      const visibleCount = Array.from(cards).filter(c => c.style.display !== 'none').length;
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterCards();
    });
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

// Suavização do scroll para links do sumário (TOC)
function initSmoothScroll() {
  const tocLinks = document.querySelectorAll('.guide-toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', targetId);
        }
      }
    });
  });
}
