// ==========================================================================
// DORMIR NÃO DÁ XP — Sistema Interativo de Talentos do Jogador
// ==========================================================================

let activeTalentCategory = 'personagem';
let talentSearchQuery = '';
let showPortugueseAlways = false;

function getTalentsData() {
  if (typeof window !== 'undefined' && window.TALENTS_DATA) return window.TALENTS_DATA;
  if (typeof TALENTS_DATA !== 'undefined') return TALENTS_DATA;
  console.warn('[Talentos] TALENTS_DATA não encontrado.');
  return null;
}

function initTalentsPage() {
  renderTalentCategories();
  renderTalents();
  initTalentSearch();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTalentsPage);
} else {
  initTalentsPage();
}

function renderTalentCategories() {
  const container = document.getElementById('talentsCatList');
  const data = getTalentsData();
  if (!container || !data || !data.categories) return;

  container.innerHTML = data.categories.map(cat => {
    const isActive = cat.id === activeTalentCategory;
    return `
      <button type="button" class="talents-cat-btn ${isActive ? 'active' : ''}" onclick="selectTalentCategory('${cat.id}')">
        <div class="talents-cat-left">
          <img src="${cat.icon}" alt="${cat.name}" class="talents-cat-icon" onerror="this.src='assets/img/logo.webp'">
          <span>${cat.name}</span>
        </div>
        <span class="talents-cat-count">${cat.count}</span>
      </button>
    `;
  }).join('');
}

function selectTalentCategory(catId) {
  activeTalentCategory = catId;
  renderTalentCategories();
  renderTalents();
}

function toggleLanguageMode() {
  showPortugueseAlways = !showPortugueseAlways;
  const btn = document.getElementById('btnLangToggle');
  if (btn) {
    btn.innerHTML = showPortugueseAlways ? '🌐 Modo: <strong>Português</strong>' : '🌐 Modo: <strong>Inglês (Original)</strong>';
  }
  renderTalents();
}

function renderTalents() {
  const listEl = document.getElementById('talentsList');
  const headerIcon = document.getElementById('currentCatIcon');
  const headerTitle = document.getElementById('currentCatTitle');
  const progressText = document.getElementById('currentCatProgress');
  const progressFill = document.getElementById('currentCatFill');
  const data = getTalentsData();

  if (!listEl || !data) return;

  const currentCat = data.categories.find(c => c.id === activeTalentCategory) || data.categories[0];
  if (headerIcon) headerIcon.src = currentCat.icon;
  if (headerTitle) headerTitle.textContent = currentCat.name;
  if (progressText) {
    progressText.textContent = currentCat.count.includes('/') ? currentCat.count + ' desbloqueados' : currentCat.count;
  }
  if (progressFill) {
    if (currentCat.count.includes('/')) {
      const parts = currentCat.count.split('/').map(s => parseInt(s.trim(), 10));
      if (parts.length === 2 && parts[1] > 0) {
        progressFill.style.width = Math.min(100, Math.round((parts[0] / parts[1]) * 100)) + '%';
      }
    } else {
      progressFill.style.width = '0%';
    }
  }

  // Filtra talentos pela categoria ou busca textual
  let filtered = (data.talents || []).filter(t => {
    if (talentSearchQuery) {
      const q = talentSearchQuery.toLowerCase();
      const matchDescEn = (t.desc_en || '').toLowerCase().includes(q);
      const matchDescPt = (t.desc_pt || '').toLowerCase().includes(q);
      const matchNameEn = (t.name_en || '').toLowerCase().includes(q);
      const matchNamePt = (t.name_pt || '').toLowerCase().includes(q);
      const matchItem = (t.items || []).some(it => 
        (it.name || '').toLowerCase().includes(q) || 
        (it.name_pt || '').toLowerCase().includes(q) ||
        (it.dropper && (it.dropper.name || '').toLowerCase().includes(q))
      );
      return matchDescEn || matchDescPt || matchNameEn || matchNamePt || matchItem;
    }
    return t.category === activeTalentCategory;
  });

  if (!filtered.length) {
    listEl.innerHTML = `
      <div style="background: var(--bg-1); border: 2px dashed var(--bg-2); border-radius: var(--radius); padding: 32px; text-align: center; color: var(--text-dim);">
        <p style="font-size: 1.1rem; color: #ffffff; margin-bottom: 6px;">Nenhum talento cadastrado nesta categoria ainda.</p>
        <p style="font-size: 0.85rem;">Estamos catalogando os prints dos membros da guilda. Em breve!</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(t => {
    const mainDesc = showPortugueseAlways ? t.desc_pt : t.desc_en;
    const subDesc = showPortugueseAlways ? t.desc_en : t.desc_pt;
    const subBadge = showPortugueseAlways ? 'EN' : 'PT';

    const itemsHtml = (t.items || []).map(it => {
      return `
        <div class="talent-item-pill" onclick="openItemDropModal('${it.id}')" title="${it.name_pt} (${it.name}) • Clique para ver drop e local">
          <img src="${it.icon}" alt="${it.name}" class="talent-item-img" onerror="this.src='assets/img/logo.webp'">
          <span class="talent-item-qty">${it.qty > 1 ? it.qty : ''}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="talent-card" id="${t.id}">
        <div class="talent-icon-wrap">
          <img src="${t.icon}" alt="Ícone de Talento" class="talent-icon-img" onerror="this.src='assets/img/logo.webp'">
        </div>
        <div class="talent-desc-wrap">
          <div class="talent-desc-en">${mainDesc}</div>
          <div class="talent-desc-pt">
            <span class="talent-desc-pt-badge">${subBadge}</span>
            <span>${subDesc}</span>
          </div>
        </div>
        <div class="talent-items-wrap">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function initTalentSearch() {
  const searchInput = document.getElementById('talentSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    talentSearchQuery = e.target.value.trim();
    renderTalents();
  });
}

function findItemById(itemId) {
  const data = getTalentsData();
  if (!data || !data.talents) return null;
  for (const t of data.talents) {
    if (!t.items) continue;
    const found = t.items.find(it => it.id === itemId);
    if (found) return found;
  }
  return null;
}

// Modal Popover de Onde Dropar e Localização
function openItemDropModal(itemId) {
  try {
    const item = findItemById(itemId);
    if (!item) {
      console.warn('[Talentos] Item não encontrado:', itemId);
      return;
    }
    const container = document.getElementById('itemModalContainer');
    if (!container) return;

    const dropper = item.dropper || {
      name: 'Desconhecido',
      sprite: 'assets/img/pokemon/unown.png',
      chance: '—',
      rarity: 'Comum',
      locations: ['Em catalogação']
    };

    const locationsHtml = (dropper.locations || []).map(loc => `
      <div class="item-location-pill">
        <span>📍</span>
        <span>${loc}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="item-popover-backdrop" onclick="closeItemDropModal(event)">
        <div class="item-popover" onclick="event.stopPropagation()">
          <div class="item-popover-header">
            <div class="item-popover-title-wrap">
              <img src="${item.icon}" alt="${item.name}" class="item-popover-icon" onerror="this.src='assets/img/logo.webp'">
              <div>
                <div class="item-popover-name">${item.name_pt}</div>
                <div class="item-popover-subname">${item.name} • Requerido: ${item.qty}x</div>
              </div>
            </div>
            <button class="item-popover-close" onclick="closeItemDropModal()">&times;</button>
          </div>

          <div class="item-popover-body">
            <div class="item-dropper-box">
              <div class="item-dropper-left">
                <img src="${dropper.sprite}" alt="${dropper.name}" class="item-dropper-sprite" onerror="this.src='assets/img/logo.webp'">
                <div>
                  <div class="item-dropper-name">${dropper.name}</div>
                  <div class="item-dropper-sub">Raridade: <strong>${dropper.rarity}</strong></div>
                </div>
              </div>
              <div class="item-dropper-chance">
                <div class="chance-val">${dropper.chance}</div>
                <div class="chance-label">Chance de Drop</div>
              </div>
            </div>

            <div class="item-locations-box">
              <span class="item-locations-title">🗺️ Onde Encontrar / Melhores Hunts:</span>
              <div class="item-locations-list">
                ${locationsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    console.error('Erro ao abrir popover de item:', err);
  }
}

function closeItemDropModal(e) {
  if (e && e.target && !e.target.classList.contains('item-popover-backdrop') && !e.target.classList.contains('item-popover-close')) {
    return;
  }
  const container = document.getElementById('itemModalContainer');
  if (container) container.innerHTML = '';
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeItemDropModal();
  }
});
