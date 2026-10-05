/**
 * Dormir Não Dá XP - Calculadora de Ascensão Estelar
 * Lógica matemática de Star Atual -> Star Objetivo, Seleção de Modo (Mais DD, Balanceado, Mais KK)
 * e Destaque Claro de Economia e Custo Real
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const tierSelect = document.getElementById('starTier');
  const currentStarSelect = document.getElementById('currentStar');
  const targetStarSelect = document.getElementById('targetStar');
  const ddPriceInput = document.getElementById('ddPrice'); // em $k (ex: 263k)
  const fodderCostInput = document.getElementById('fodderCost'); // em $kk

  // Modo ativo de pagamento (padrão: 'moreDia', pode ser 'balanced' ou 'moreKk')
  let selectedMode = 'moreDia';

  // Estrutura com suporte completo aos 3 modos de pagamento por Tier e Estrela (100% Sucesso)
  // [from -> to]: { moreDia: { dd, kk }, balanced: { dd, kk }, moreKk: { dd, kk }, pokes }
  const STAR_TIER_DATA = {
    't3': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 4, kk: 1 }, balanced: { dd: 2, kk: 2 }, moreKk: { dd: 1, kk: 3 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 12, kk: 3 }, balanced: { dd: 6, kk: 6 }, moreKk: { dd: 2, kk: 9 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 24, kk: 6 }, balanced: { dd: 12, kk: 12 }, moreKk: { dd: 4, kk: 18 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 40, kk: 10 }, balanced: { dd: 20, kk: 20 }, moreKk: { dd: 6, kk: 30 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 60, kk: 15 }, balanced: { dd: 30, kk: 30 }, moreKk: { dd: 10, kk: 45 } }
    ],
    't2': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 6, kk: 1.5 }, balanced: { dd: 3, kk: 3 }, moreKk: { dd: 1, kk: 4.5 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 18, kk: 4.5 }, balanced: { dd: 9, kk: 9 }, moreKk: { dd: 3, kk: 13.5 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 36, kk: 9 }, balanced: { dd: 18, kk: 18 }, moreKk: { dd: 6, kk: 27 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 60, kk: 15 }, balanced: { dd: 30, kk: 30 }, moreKk: { dd: 10, kk: 45 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 90, kk: 22.5 }, balanced: { dd: 45, kk: 45 }, moreKk: { dd: 15, kk: 67.5 } }
    ],
    't1': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 10, kk: 2 }, balanced: { dd: 5, kk: 4 }, moreKk: { dd: 2, kk: 6 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 30, kk: 6 }, balanced: { dd: 15, kk: 12 }, moreKk: { dd: 5, kk: 18 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 60, kk: 12 }, balanced: { dd: 30, kk: 24 }, moreKk: { dd: 10, kk: 36 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 100, kk: 20 }, balanced: { dd: 50, kk: 40 }, moreKk: { dd: 15, kk: 60 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 150, kk: 30 }, balanced: { dd: 75, kk: 60 }, moreKk: { dd: 25, kk: 90 } }
    ],
    'sr': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 16, kk: 4 }, balanced: { dd: 8, kk: 8 }, moreKk: { dd: 3, kk: 12 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 48, kk: 12 }, balanced: { dd: 24, kk: 24 }, moreKk: { dd: 8, kk: 36 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 96, kk: 24 }, balanced: { dd: 48, kk: 48 }, moreKk: { dd: 16, kk: 72 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 160, kk: 40 }, balanced: { dd: 80, kk: 80 }, moreKk: { dd: 25, kk: 120 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 240, kk: 60 }, balanced: { dd: 120, kk: 120 }, moreKk: { dd: 40, kk: 180 } }
    ],
    'ur': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 24, kk: 6 }, balanced: { dd: 12, kk: 12 }, moreKk: { dd: 4, kk: 18 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 72, kk: 18 }, balanced: { dd: 36, kk: 36 }, moreKk: { dd: 12, kk: 54 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 144, kk: 36 }, balanced: { dd: 72, kk: 72 }, moreKk: { dd: 24, kk: 108 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 240, kk: 60 }, balanced: { dd: 120, kk: 120 }, moreKk: { dd: 40, kk: 180 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 360, kk: 90 }, balanced: { dd: 180, kk: 180 }, moreKk: { dd: 60, kk: 270 } }
    ],
    'legendary': [
      { from: 0, to: 1, pokes: 1, moreDia: { dd: 40, kk: 10 }, balanced: { dd: 20, kk: 20 }, moreKk: { dd: 6, kk: 30 } },
      { from: 1, to: 2, pokes: 2, moreDia: { dd: 120, kk: 30 }, balanced: { dd: 60, kk: 60 }, moreKk: { dd: 20, kk: 90 } },
      { from: 2, to: 3, pokes: 3, moreDia: { dd: 240, kk: 60 }, balanced: { dd: 120, kk: 120 }, moreKk: { dd: 40, kk: 180 } },
      { from: 3, to: 4, pokes: 4, moreDia: { dd: 400, kk: 100 }, balanced: { dd: 200, kk: 200 }, moreKk: { dd: 65, kk: 300 } },
      { from: 4, to: 5, pokes: 5, moreDia: { dd: 600, kk: 150 }, balanced: { dd: 300, kk: 300 }, moreKk: { dd: 100, kk: 450 } }
    ]
  };

  // Percentual de Dano por Nível de Estrela
  const TIER_DAMAGE_PER_STAR = {
    't3': 2,
    't2': 4,
    't1': 6,
    'sr': 8,
    'ur': 10,
    'legendary': 15
  };

  // Sincroniza selects de Star
  function syncStarSelects() {
    const current = parseInt(currentStarSelect.value, 10);
    const target = parseInt(targetStarSelect.value, 10);

    Array.from(targetStarSelect.options).forEach(opt => {
      const val = parseInt(opt.value, 10);
      opt.disabled = val <= current;
    });

    if (target <= current) {
      targetStarSelect.value = String(current + 1);
    }
  }

  // Interação ao clicar nos cards de opção
  function bindChoiceCards() {
    ['moreDia', 'balanced', 'moreKk'].forEach(mode => {
      const card = document.getElementById(`compItem_${mode}`);
      if (card) {
        card.addEventListener('click', () => {
          selectedMode = mode;
          calculate();
        });
      }
    });
  }

  if (currentStarSelect) currentStarSelect.addEventListener('change', () => {
    syncStarSelects();
    calculate();
  });

  [tierSelect, targetStarSelect, ddPriceInput, fodderCostInput].forEach(el => {
    if (el) {
      el.addEventListener('input', calculate);
      el.addEventListener('change', calculate);
    }
  });

  function calculate() {
    const tier = tierSelect ? tierSelect.value : 't3';
    const curStar = currentStarSelect ? parseInt(currentStarSelect.value, 10) : 0;
    const tgtStar = targetStarSelect ? parseInt(targetStarSelect.value, 10) : 1;
    const ddPriceK = ddPriceInput ? (parseFloat(ddPriceInput.value) || 0) : 263;
    const ddPriceKk = ddPriceK / 1000;
    const fodderCostKk = fodderCostInput ? (parseFloat(fodderCostInput.value) || 0) : 0;

    // Atualiza label do DD no header
    const ddRefHeader = document.getElementById('ddRefHeader');
    if (ddRefHeader) ddRefHeader.textContent = `${ddPriceK}k`;

    const tierSteps = STAR_TIER_DATA[tier] || STAR_TIER_DATA['t3'];

    // Totais para cada uma das 3 modalidades
    const totals = {
      moreDia: { dd: 0, kk: 0 },
      balanced: { dd: 0, kk: 0 },
      moreKk: { dd: 0, kk: 0 },
      pokes: 0
    };

    for (let s = curStar; s < tgtStar; s++) {
      const step = tierSteps[s];
      if (step) {
        totals.moreDia.dd += step.moreDia.dd;
        totals.moreDia.kk += step.moreDia.kk;

        totals.balanced.dd += step.balanced.dd;
        totals.balanced.kk += step.balanced.kk;

        totals.moreKk.dd += step.moreKk.dd;
        totals.moreKk.kk += step.moreKk.kk;

        totals.pokes += step.pokes;
      }
    }

    // Calcula o custo total equivalente em KK para cada opção
    const costMoreDiaKk = (totals.moreDia.dd * ddPriceKk) + totals.moreDia.kk;
    const costBalancedKk = (totals.balanced.dd * ddPriceKk) + totals.balanced.kk;
    const costMoreKkKk = (totals.moreKk.dd * ddPriceKk) + totals.moreKk.kk;

    const options = [
      { id: 'moreDia', name: 'Mais Diamante', cost: costMoreDiaKk, data: totals.moreDia },
      { id: 'balanced', name: 'Balanceado', cost: costBalancedKk, data: totals.balanced },
      { id: 'moreKk', name: 'Mais KK', cost: costMoreKkKk, data: totals.moreKk }
    ];

    // Ordena do menor custo para o maior para descobrir a MELHOR opção
    const sorted = [...options].sort((a, b) => a.cost - b.cost);
    const bestOption = sorted[0];
    const worstOption = sorted[sorted.length - 1];
    const maxSavingsKk = worstOption.cost - bestOption.cost;
    const maxSavingsK = maxSavingsKk * 1000;

    // Se o usuário selecionou uma opção, pegamos os dados dela para os displays superiores
    const currentOpt = options.find(o => o.id === selectedMode) || bestOption;

    // Atualiza os stats de DD, KK e Pokés do modo atualmente selecionado
    const ddDisplay = document.getElementById('costDiamondsDisplay');
    const kkDisplay = document.getElementById('costKkDisplay');
    const pokesDisplay = document.getElementById('pokesNeededDisplay');
    const stepsTitle = document.getElementById('ascensionStepsTitle');
    const activeModeTitle = document.getElementById('activeModeLabel');

    if (ddDisplay) ddDisplay.textContent = currentOpt.data.dd;
    if (kkDisplay) kkDisplay.textContent = `$${currentOpt.data.kk}kk`;
    if (pokesDisplay) pokesDisplay.textContent = `${totals.pokes} Pokémon${totals.pokes > 1 ? 's' : ''}`;
    if (stepsTitle) stepsTitle.textContent = `${curStar}★ ➔ ${tgtStar}★`;
    if (activeModeTitle) activeModeTitle.textContent = currentOpt.name;

    // Atualiza cards comparativos
    options.forEach(opt => {
      const card = document.getElementById(`compItem_${opt.id}`);
      const valEl = document.getElementById(`compVal_${opt.id}`);
      const breakdownEl = document.getElementById(`compBreak_${opt.id}`);

      if (valEl) valEl.textContent = `$${opt.cost.toFixed(3)}kk`;
      if (breakdownEl) breakdownEl.textContent = `${opt.data.dd} DD + $${opt.data.kk}kk`;

      if (card) {
        // Marca se é a opção selecionada pelo usuário
        card.classList.toggle('is-selected', opt.id === selectedMode);
        // Marca se é a opção mais barata objetivamente
        card.classList.toggle('is-best', opt.id === bestOption.id);
      }
    });

    // Badge no topo do comparador
    const badgeBest = document.getElementById('bestChoiceBadge');
    if (badgeBest) {
      if (bestOption.id === 'moreDia') {
        badgeBest.textContent = '💎 Mais Diamante é a mais barata';
        badgeBest.className = 'calc-badge badge-dia';
      } else if (bestOption.id === 'moreKk') {
        badgeBest.textContent = '💵 Mais KK é a mais barata';
        badgeBest.className = 'calc-badge badge-kk';
      } else {
        badgeBest.textContent = '⚖️ Balanceado é a mais barata';
        badgeBest.className = 'calc-badge badge-balanced';
      }
    }

    // Dano de Ataque Ganho
    const dmgPerStar = TIER_DAMAGE_PER_STAR[tier] || 2;
    const totalDmgGain = (tgtStar - curStar) * dmgPerStar;
    const dmgGainDisplay = document.getElementById('dmgGainDisplay');
    if (dmgGainDisplay) dmgGainDisplay.textContent = `+${totalDmgGain}% (${dmgPerStar}% por estrela)`;

    // Resumo de Custos Totais
    const totalWithFodder = currentOpt.cost + (totals.pokes * fodderCostKk);
    const totalCostKkEl = document.getElementById('totalCostKkDisplay');
    const totalInvestEl = document.getElementById('totalInvestmentDisplay');

    if (totalCostKkEl) totalCostKkEl.textContent = `$${currentOpt.cost.toFixed(3)}kk (~${(currentOpt.cost * 1000).toFixed(0)}k)`;
    if (totalInvestEl) totalInvestEl.textContent = `$${totalWithFodder.toFixed(3)}kk (~${(totalWithFodder * 1000).toFixed(0)}k)`;

    // Banner de Economia
    const savingsEl = document.getElementById('savingsResultDisplay');
    if (savingsEl) {
      if (selectedMode === bestOption.id) {
        savingsEl.innerHTML = `<strong>🏆 Você está usando a opção mais barata (${bestOption.name})!</strong> Economia máxima de <strong>$${maxSavingsKk.toFixed(3)}kk (~${maxSavingsK.toFixed(0)}k)</strong> em relação à opção mais cara.`;
        savingsEl.className = 'savings-banner-clean banner-optimal';
      } else {
        const diffFromBest = currentOpt.cost - bestOption.cost;
        savingsEl.innerHTML = `<strong>⚠️ Atenção:</strong> Escolhendo <u>${bestOption.name}</u> você economizaria <strong>+$${diffFromBest.toFixed(3)}kk (~${(diffFromBest * 1000).toFixed(0)}k)</strong>! Clique nela acima para mudar.`;
        savingsEl.className = 'savings-banner-clean banner-suboptimal';
      }
    }
  }

  // Inicializa eventos
  syncStarSelects();
  bindChoiceCards();
  calculate();
});
