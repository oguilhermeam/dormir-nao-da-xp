// ==========================================================================
// DORMIR NÃO DÁ XP — Sistema Interativo de Talentos do Jogador
// ==========================================================================

let activeTalentCategory = 'personagem';
let talentSearchQuery = '';

function getTalentsData() {
  if (typeof window !== 'undefined' && window.TALENTS_DATA) return window.TALENTS_DATA;
  if (typeof TALENTS_DATA !== 'undefined') return TALENTS_DATA;
  console.warn('[Talentos] TALENTS_DATA não encontrado.');
  return null;
}

// Persistência de talentos aprendidos no navegador
function getUnlockedTalents() {
  try {
    const raw = localStorage.getItem('pa_unlocked_talents');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function setTalentUnlocked(talentId, state) {
  try {
    const unlocked = getUnlockedTalents();
    if (state) {
      unlocked[talentId] = true;
    } else {
      delete unlocked[talentId];
    }
    localStorage.setItem('pa_unlocked_talents', JSON.stringify(unlocked));
  } catch (e) {
    console.error('[Talentos] Erro ao salvar status no localStorage:', e);
  }
}

function toggleTalentUnlocked(talentId, event) {
  if (event && event.target && event.target.closest('.talent-item-pill')) {
    return;
  }
  const unlocked = getUnlockedTalents();
  const newState = !unlocked[talentId];
  setTalentUnlocked(talentId, newState);

  renderTalents();
  renderTalentCategories();
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

  const unlockedMap = getUnlockedTalents();

  container.innerHTML = data.categories.map(cat => {
    const isActive = cat.id === activeTalentCategory;
    const catTalents = (data.talents || []).filter(t => t.category === cat.id);
    const total = cat.total || catTalents.length;
    const unlockedCount = catTalents.filter(t => unlockedMap[t.id]).length;

    let countText = 'Em breve';
    if (total > 0) {
      countText = `${unlockedCount} / ${total}`;
    }

    return `
      <button type="button" class="talents-cat-btn ${isActive ? 'active' : ''}" onclick="selectTalentCategory('${cat.id}')">
        <div class="talents-cat-left">
          <img src="${cat.icon}" alt="${cat.name}" class="talents-cat-icon" onerror="this.src='assets/img/logo.webp'">
          <span>${cat.name}</span>
        </div>
        <span class="talents-cat-count">${countText}</span>
      </button>
    `;
  }).join('');
}

function selectTalentCategory(catId) {
  activeTalentCategory = catId;
  renderTalentCategories();
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
  const unlockedMap = getUnlockedTalents();
  const catTalents = (data.talents || []).filter(t => t.category === activeTalentCategory);
  const total = currentCat.total || catTalents.length;
  const unlockedCount = catTalents.filter(t => unlockedMap[t.id]).length;

  if (headerIcon) headerIcon.src = currentCat.icon;
  if (headerTitle) headerTitle.textContent = currentCat.name;

  if (progressText) {
    if (total > 0) {
      progressText.textContent = `${unlockedCount} / ${total} talentos`;
    } else {
      progressText.textContent = '0 / 0 talentos';
    }
  }

  if (progressFill) {
    if (total > 0) {
      const pct = Math.min(100, Math.round((unlockedCount / total) * 100));
      progressFill.style.width = pct + '%';
    } else {
      progressFill.style.width = '0%';
    }
  }

  // Atualiza botão e badge da Lista de Farm / Materiais
  const btnFarmList = document.getElementById('btnFarmList');
  const farmListBadge = document.getElementById('farmListBadge');
  if (btnFarmList && farmListBadge) {
    if (unlockedCount > 0) {
      btnFarmList.classList.add('has-selection');
      farmListBadge.textContent = `(${unlockedCount} marcados)`;
    } else {
      btnFarmList.classList.remove('has-selection');
      farmListBadge.textContent = `(Todos)`;
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
    const mainDesc = t.desc_en;
    const subDesc = t.desc_pt;
    const isUnlocked = !!unlockedMap[t.id];

    const itemsHtml = (t.items || []).map(it => {
      return `
        <div class="talent-item-pill" onclick="event.stopPropagation(); openItemDropModal('${it.id}')" title="${it.name} • Requerido: ${it.qty != null ? it.qty : 1}x">
          <img src="${it.icon}" alt="${it.name}" class="talent-item-img" onerror="this.src='assets/img/logo.webp'">
          <span class="talent-item-qty">${it.qty != null ? it.qty : 1}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="talent-card ${isUnlocked ? 'is-unlocked' : ''}" id="${t.id}" onclick="toggleTalentUnlocked('${t.id}', event)" title="Clique no card para marcar/desmarcar como obtido">
        <div class="talent-icon-wrap">
          <img src="${t.icon}" alt="Ícone de Talento" class="talent-icon-img" onerror="this.src='assets/img/logo.webp'">
        </div>
        <div class="talent-desc-wrap">
          <div class="talent-desc-en">${mainDesc}</div>
          <div class="talent-desc-pt">
            <span class="talent-desc-pt-badge">PT</span>
            <span>${subDesc}</span>
          </div>
          <div class="talent-status-row">
            <span class="talent-check-badge">
              <span class="talent-check-box">${isUnlocked ? '✓' : ''}</span>
              <span>${isUnlocked ? 'Desbloqueado' : 'Clique para marcar como obtido'}</span>
            </span>
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
      name: 'Em catalogação',
      sprite: 'assets/img/logo.webp',
      chance: '—',
      rarity: 'Aguardando dados',
      locations: ['Localização sendo mapeada pela guilda'],
      is_placeholder: true
    };

    const isPlaceholder = dropper.is_placeholder || dropper.name === 'Em catalogação';

    const locationsHtml = (dropper.locations || []).map(loc => `
      <div class="item-location-pill">
        <span>📍</span>
        <span>${loc}</span>
      </div>
    `).join('');

    const mapHtml = dropper.map_image ? `
      <div class="item-map-box" style="margin-top: 14px;">
        <div style="margin-bottom: 6px;">
          <span class="item-locations-title" style="margin: 0; display: flex; align-items: center; gap: 6px;">🗺️ Mapa / Como Chegar:</span>
        </div>
        <div class="map-zoom-viewport" id="mapViewport" onwheel="handleMapWheel(event)" onmousedown="handleMapMouseDown(event)">
          <div class="map-zoom-controls">
            <button type="button" class="btn-map-control" onclick="zoomMap(0.3)" title="Aumentar zoom">+</button>
            <button type="button" class="btn-map-control" onclick="zoomMap(-0.3)" title="Diminuir zoom">&minus;</button>
            <button type="button" class="btn-map-control" onclick="resetMapZoom()" title="Resetar zoom">↺</button>
          </div>
          <img id="mapZoomImage" src="${dropper.map_image}" alt="Mapa de ${dropper.name}" class="map-zoom-img" draggable="false">
        </div>
      </div>
    ` : '';

    const placeholderNotice = isPlaceholder ? `
      <div style="background: rgba(234, 179, 8, 0.08); border: 1px dashed var(--guild-gold); border-radius: var(--radius); padding: 8px 10px; font-size: 0.76rem; color: #fde047; display: flex; align-items: center; gap: 8px; margin-top: 10px;">
        <span>ℹ️</span>
        <span>Drop em catalogação pela guilda. Envie seu print com drop e localização para adicionarmos aqui!</span>
      </div>
    ` : '';

    container.innerHTML = `
      <div class="item-popover-backdrop" onmousedown="handleBackdropMouseDown(event)" onclick="handleBackdropClick(event)">
        <div class="item-popover" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()">
          <div class="item-popover-header">
            <div class="item-popover-title-wrap">
              <img src="${item.icon}" alt="${item.name}" class="item-popover-icon" onerror="this.src='assets/img/logo.webp'">
              <div>
                <div class="item-popover-name">${item.name}</div>
                <div class="item-popover-subname">Requerido: ${item.qty != null ? item.qty : 1}x</div>
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
                </div>
              </div>
              <div class="item-dropper-chance">
                <div class="chance-val">${dropper.chance}</div>
                <div class="chance-label">Chance de Drop</div>
              </div>
            </div>

            <div class="item-locations-box">
              <span class="item-locations-title">📍 Onde Encontrar / Melhores Hunts:</span>
              <div class="item-locations-list">
                ${locationsHtml}
              </div>
            </div>

            ${mapHtml}
            ${placeholderNotice}
          </div>
        </div>
      </div>
    `;

    // Reseta estado do zoom ao abrir novo modal
    mapZoomScale = 1.0;
    mapPanX = 0;
    mapPanY = 0;
    isMapDragging = false;
    hasJustDraggedMap = false;
  } catch (err) {
    console.error('Erro ao abrir popover de item:', err);
  }
}

// Controle interativo de Zoom e Pan no mapa
let mapZoomScale = 1.0;
let mapPanX = 0;
let mapPanY = 0;
let isMapDragging = false;
let hasJustDraggedMap = false;
let mapDragStartX = 0;
let mapDragStartY = 0;
let backdropMouseDownTarget = null;

function handleBackdropMouseDown(e) {
  backdropMouseDownTarget = e.target;
}

function handleBackdropClick(e) {
  // Se acabou de arrastar ou está arrastando o mapa, não fecha!
  if (hasJustDraggedMap || isMapDragging) {
    backdropMouseDownTarget = null;
    return;
  }
  // Só fecha se o clique começou e terminou estritamente no backdrop escuro
  if (backdropMouseDownTarget === e.target && e.target.classList.contains('item-popover-backdrop')) {
    closeItemDropModal();
  }
  backdropMouseDownTarget = null;
}

function handleMapWheel(e) {
  e.preventDefault();
  const delta = e.deltaY < 0 ? 0.3 : -0.3;
  zoomMap(delta);
}

function zoomMap(delta) {
  mapZoomScale = Math.max(1.0, Math.min(4.5, +(mapZoomScale + delta).toFixed(2)));
  if (mapZoomScale === 1.0) {
    mapPanX = 0;
    mapPanY = 0;
  }
  applyMapTransform();
}

function resetMapZoom() {
  mapZoomScale = 1.0;
  mapPanX = 0;
  mapPanY = 0;
  applyMapTransform();
}

function applyMapTransform() {
  const img = document.getElementById('mapZoomImage');
  if (!img) return;

  if (mapZoomScale > 1.0) {
    img.classList.add('is-zoomed');
  } else {
    img.classList.remove('is-zoomed');
  }

  img.style.transform = `translate(${mapPanX}px, ${mapPanY}px) scale(${mapZoomScale})`;
}

function handleMapMouseDown(e) {
  if (e.target.closest('.map-zoom-controls')) return;
  e.stopPropagation();
  isMapDragging = true;
  mapDragStartX = e.clientX - mapPanX;
  mapDragStartY = e.clientY - mapPanY;

  const startClientX = e.clientX;
  const startClientY = e.clientY;

  const img = document.getElementById('mapZoomImage');
  if (img) img.classList.add('is-dragging');

  const onMouseMove = (moveEvent) => {
    if (!isMapDragging) return;
    const dist = Math.hypot(moveEvent.clientX - startClientX, moveEvent.clientY - startClientY);
    if (dist > 4) {
      hasJustDraggedMap = true;
    }
    mapPanX = moveEvent.clientX - mapDragStartX;
    mapPanY = moveEvent.clientY - mapDragStartY;
    applyMapTransform();
  };

  const onMouseUp = () => {
    isMapDragging = false;
    if (img) img.classList.remove('is-dragging');
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);

    if (hasJustDraggedMap) {
      setTimeout(() => {
        hasJustDraggedMap = false;
      }, 150);
    }
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

function closeItemDropModal() {
  const container = document.getElementById('itemModalContainer');
  if (container) container.innerHTML = '';
  mapZoomScale = 1.0;
  mapPanX = 0;
  mapPanY = 0;
  isMapDragging = false;
  hasJustDraggedMap = false;
  backdropMouseDownTarget = null;
}

// ==========================================================================
// CALCULADORA DE MATERIAIS & CHECKLIST DE FARM
// ==========================================================================

let currentMaterialsData = [];
let currentMaterialsCategory = '';
let currentMaterialsModeTitle = '';
let materialsBackdropMouseDownTarget = null;

function getFarmedMaterials() {
  try {
    const raw = localStorage.getItem('pa_farmed_materials');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function setMaterialFarmed(itemId, state) {
  try {
    const farmed = getFarmedMaterials();
    if (state) {
      farmed[itemId] = true;
    } else {
      delete farmed[itemId];
    }
    localStorage.setItem('pa_farmed_materials', JSON.stringify(farmed));
  } catch (e) {
    console.error('[Talentos] Erro ao salvar farm de material:', e);
  }
}

function toggleFarmItemCheck(itemId, isChecked) {
  setMaterialFarmed(itemId, isChecked);
  const row = document.getElementById(`farmRow-${itemId}`);
  if (row) {
    if (isChecked) {
      row.classList.add('is-farmed');
    } else {
      row.classList.remove('is-farmed');
    }
  }
  updateFarmStats();
}

function clearFarmedMaterials() {
  if (!confirm('Deseja desmarcar todos os itens coletados desta lista?')) return;
  try {
    localStorage.removeItem('pa_farmed_materials');
    const checkboxes = document.querySelectorAll('.material-checkbox');
    checkboxes.forEach(cb => {
      cb.checked = false;
      const row = cb.closest('.material-item-row');
      if (row) row.classList.remove('is-farmed');
    });
    updateFarmStats();
  } catch (e) {
    console.error(e);
  }
}

function updateFarmStats() {
  const checkboxes = document.querySelectorAll('.material-checkbox');
  let doneCount = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) doneCount++;
  });
  const totalItems = checkboxes.length;
  const progressText = document.getElementById('farmProgressText');
  if (progressText) {
    progressText.textContent = `${doneCount} / ${totalItems} itens concluídos`;
  }
}

function openMaterialsModal(overrideMode) {
  const container = document.getElementById('materialsModalContainer');
  const data = getTalentsData();
  if (!container || !data) return;

  const currentCat = data.categories.find(c => c.id === activeTalentCategory) || data.categories[0];
  const unlockedMap = getUnlockedTalents();
  const catTalents = (data.talents || []).filter(t => t.category === activeTalentCategory);
  const unlockedCount = catTalents.filter(t => unlockedMap[t.id]).length;
  const totalCount = catTalents.length;

  let mode = overrideMode;
  if (!mode) {
    mode = unlockedCount > 0 ? 'checked' : 'all';
  }

  let selectedTalents = [];
  if (mode === 'checked') {
    selectedTalents = catTalents.filter(t => unlockedMap[t.id]);
    currentMaterialsModeTitle = `${unlockedCount} Talentos Selecionados`;
  } else {
    selectedTalents = catTalents;
    currentMaterialsModeTitle = `Todos os ${totalCount} Talentos da Categoria`;
  }

  currentMaterialsCategory = currentCat.name;

  // Agrupa e consolida itens por ID somando as quantidades
  const itemMap = new Map();
  selectedTalents.forEach(t => {
    const tLabel = t.desc_en || t.desc_pt || t.id;
    (t.items || []).forEach(it => {
      const qty = it.qty != null ? it.qty : 1;
      const existing = itemMap.get(it.id);
      if (existing) {
        existing.totalQty += qty;
        if (!existing.talents.includes(tLabel)) {
          existing.talents.push(tLabel);
        }
      } else {
        itemMap.set(it.id, {
          id: it.id,
          name: it.name,
          name_pt: it.name_pt,
          icon: it.icon,
          totalQty: qty,
          dropper: it.dropper,
          talents: [tLabel]
        });
      }
    });
  });

  const consolidatedItems = Array.from(itemMap.values());
  currentMaterialsData = consolidatedItems;

  const farmedMap = getFarmedMaterials();
  const completedCount = consolidatedItems.filter(it => farmedMap[it.id]).length;

  let contentBody = '';

  if (mode === 'checked' && unlockedCount === 0) {
    contentBody = `
      <div style="background: var(--bg-0); border: 2px dashed var(--bg-2); border-radius: var(--radius); padding: 36px 20px; text-align: center; color: var(--text-dim);">
        <p style="font-size: 1.15rem; color: #ffffff; margin-bottom: 8px;">Nenhum talento marcado nesta categoria ainda!</p>
        <p style="font-size: 0.88rem; max-width: 480px; margin: 0 auto 16px;">
          Clique nos cards de talentos na página para marcá-los com o check verde (✓), ou clique no botão abaixo para calcular os materiais de todos os talentos cadastrados em <strong>${currentCat.name}</strong>.
        </p>
        <button type="button" class="btn-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="openMaterialsModal('all')">
          📦 Calcular Todos os ${totalCount} Talentos
        </button>
      </div>
    `;
  } else if (consolidatedItems.length === 0) {
    contentBody = `
      <div style="background: var(--bg-0); border: 2px dashed var(--bg-2); border-radius: var(--radius); padding: 36px 20px; text-align: center; color: var(--text-dim);">
        <p style="font-size: 1.1rem; color: #ffffff; margin-bottom: 6px;">Nenhum material encontrado para a seleção atual.</p>
        <p style="font-size: 0.85rem;">Estamos catalogando os próximos talentos desta categoria.</p>
      </div>
    `;
  } else {
    const rowsHtml = consolidatedItems.map(it => {
      const isFarmed = !!farmedMap[it.id];
      const dropper = it.dropper;
      let dropInfoHtml = '';

      if (dropper && dropper.name && dropper.name !== 'Em catalogação') {
        dropInfoHtml = `
          <div class="material-dropper-tag" title="Dropado por: ${dropper.name} (${dropper.chance || '—'})">
            <img src="${dropper.sprite || 'assets/img/logo.webp'}" alt="${dropper.name}" class="material-dropper-sprite" onerror="this.src='assets/img/logo.webp'">
            <span style="color: #ffffff; font-weight: 600;">${dropper.name}</span>
            <span class="material-dropper-chance">${dropper.chance || '—'}</span>
          </div>
        `;
      }

      const hasMap = dropper && (dropper.imgur_map || (dropper.locations && dropper.locations.length > 0));
      const mapBtnHtml = hasMap ? `
        <button type="button" class="btn-material-map" onclick="openItemDropModal('${it.id}')" title="Ver mapa da hunt e localização">
          <span>🗺️ Ver Mapa</span>
        </button>
      ` : '';

      const talentChipsHtml = it.talents.map(tName => `
        <span class="material-talent-chip" title="Requerido por: ${tName}">${tName}</span>
      `).join('');

      return `
        <div class="material-item-row ${isFarmed ? 'is-farmed' : ''}" id="farmRow-${it.id}">
          <div class="material-row-left">
            <input 
              type="checkbox" 
              class="material-checkbox" 
              id="chk-${it.id}" 
              ${isFarmed ? 'checked' : ''} 
              onchange="toggleFarmItemCheck('${it.id}', this.checked)"
              title="Marcar como coletado/farmado"
            >
            <img src="${it.icon}" alt="${it.name}" class="material-item-icon" onerror="this.src='assets/img/logo.webp'">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="material-item-name">${it.name}</span>
                <span class="material-item-qty">${it.totalQty.toLocaleString('pt-BR')}x</span>
              </div>
              <div class="materials-talents-tags">
                ${talentChipsHtml}
              </div>
            </div>
          </div>
          <div class="material-row-right">
            ${dropInfoHtml}
            ${mapBtnHtml}
          </div>
        </div>
      `;
    }).join('');

    contentBody = `
      <div class="materials-stats-bar">
        <div class="materials-stat-item">
          <span>Progresso do Farm:</span>
          <span class="materials-stat-val" id="farmProgressText">${completedCount} / ${consolidatedItems.length} itens concluídos</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button type="button" class="btn-materials-copy" style="font-size: 0.72rem; padding: 3px 8px;" onclick="clearFarmedMaterials()" title="Desmarcar todos os itens">
            <span>↺ Limpar Checks</span>
          </button>
          <div class="materials-stat-item" style="color: var(--text-dim); font-size: 0.76rem;">
            Total de Itens: <strong style="color: #ffffff;">${consolidatedItems.length}</strong>
          </div>
        </div>
      </div>
      <div class="materials-cards-grid">
        ${rowsHtml}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="materials-modal-backdrop" onmousedown="handleMaterialsBackdropMouseDown(event)" onmouseup="handleMaterialsBackdropMouseUp(event)">
      <div class="materials-modal">
        <div class="materials-modal-header">
          <div>
            <h2 class="materials-modal-title">
              <span>📦 Lista de Farm & Materiais</span>
              <span style="font-size: 0.8rem; color: var(--teal); font-family: var(--font-mono); font-weight: 400;">(${currentCat.name})</span>
            </h2>
            <div class="materials-modal-subtitle">
              ${currentMaterialsModeTitle} • Materiais unificados para planejar seus drops
            </div>
          </div>
          <div class="materials-modal-actions">
            <div class="materials-mode-toggles">
              <button type="button" class="materials-mode-btn ${mode === 'checked' ? 'active' : ''}" onclick="openMaterialsModal('checked')" title="Calcular apenas os talentos marcados com check verde">
                ✓ Marcados (${unlockedCount})
              </button>
              <button type="button" class="materials-mode-btn ${mode === 'all' ? 'active' : ''}" onclick="openMaterialsModal('all')" title="Calcular todos os talentos cadastrados nesta categoria">
                Todos (${totalCount})
              </button>
            </div>
            <button type="button" class="btn-materials-copy" id="btnCopyMaterials" onclick="copyMaterialsToClipboard()" title="Copiar resumo formatado para Discord ou Bloco de Notas">
              <span>📋 Copiar Lista</span>
            </button>
            <button type="button" class="item-popover-close" onclick="closeMaterialsModal()" title="Fechar (Esc)">✕</button>
          </div>
        </div>
        <div class="materials-modal-body">
          ${contentBody}
        </div>
      </div>
    </div>
  `;
}

function closeMaterialsModal() {
  const container = document.getElementById('materialsModalContainer');
  if (container) container.innerHTML = '';
  materialsBackdropMouseDownTarget = null;
}

function handleMaterialsBackdropMouseDown(e) {
  materialsBackdropMouseDownTarget = e.target;
}

function handleMaterialsBackdropMouseUp(e) {
  if (materialsBackdropMouseDownTarget === e.target && e.target.classList.contains('materials-modal-backdrop')) {
    closeMaterialsModal();
  }
  materialsBackdropMouseDownTarget = null;
}

function copyMaterialsToClipboard() {
  const items = currentMaterialsData || [];
  if (!items.length) return;
  const farmedMap = getFarmedMaterials();

  let text = `📦 LISTA DE MATERIAIS PARA FARM — DORMIR NÃO DÁ XP\n`;
  text += `Categoria: ${currentMaterialsCategory}\n`;
  text += `Filtro: ${currentMaterialsModeTitle}\n`;
  text += `--------------------------------------------------\n`;

  items.forEach(it => {
    const isFarmed = !!farmedMap[it.id];
    const status = isFarmed ? '[✓ CONCLUÍDO]' : '[ ] PENDENTE ';
    const dropInfo = (it.dropper && it.dropper.name && it.dropper.name !== 'Em catalogação') 
      ? ` • Drop: ${it.dropper.name} (${it.dropper.chance || '—'})` 
      : '';
    text += `${status} ${it.name} x${it.totalQty.toLocaleString('pt-BR')}${dropInfo}\n`;
  });
  text += `--------------------------------------------------\n`;
  text += `Gerado no Compêndio da Guilda: https://dormirnaodaxppka.vercel.app/talentos.html`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btnCopyMaterials');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `<span style="color: #4ade80; font-weight: 700;">✓ Copiado!</span>`;
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    alert('Não foi possível copiar automaticamente para a área de transferência.');
  });
}

// Fechamento com tecla Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const itemContainer = document.getElementById('itemModalContainer');
    if (itemContainer && itemContainer.children.length > 0) {
      closeItemDropModal();
      return;
    }
    const matContainer = document.getElementById('materialsModalContainer');
    if (matContainer && matContainer.children.length > 0) {
      closeMaterialsModal();
      return;
    }
  }
});

