/**
 * Dormir Não Dá XP - Calculadora de Ascensão Estelar
 * Lógica matemática de Star Atual -> Star Objetivo
 * Dados Oficiais T3 (100% de Sucesso):
 * 0★ -> 1★: 4 DD + 1kk | 1 Poké
 * 1★ -> 2★: 12 DD + 3kk | 2 Pokés
 * 2★ -> 3★: 28 DD + 7kk | 4 Pokés
 * 3★ -> 4★: 60 DD + 15kk | 8 Pokés
 * 4★ -> 5★: 124 DD + 31kk | 16 Pokés
 * (Total 0★ -> 5★: 228 DD + 57kk | 31 Pokés)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const tierSelect = document.getElementById('starTier');
  const currentStarSelect = document.getElementById('currentStar');
  const targetStarSelect = document.getElementById('targetStar');
  const ddPriceInput = document.getElementById('ddPrice'); // em $k (ex: 263k)
  const fodderCostInput = document.getElementById('fodderCost'); // em $kk

  // Modo ativo de pagamento - por padrão a calculadora seleciona AUTOMATICAMENTE o melhor
  let selectedMode = 'auto'; // 'auto', 'moreDia', 'balanced', 'moreKk'

  // Proporções por Tier (Multiplicadores em relação ao T3, onde T3 = 1x):
  // T3: 4 DD / 1kk
  // T2: 6 DD / 1.5kk (1.5x)
  // T1: 10 DD / 2.5kk (2.5x)
  // SR: 16 DD / 4kk (4x)
  // UR: 24 DD / 6kk (6x)
  // Legendary: 40 DD / 10kk (10x)
  const TIER_MULTIPLIERS = {
    't3': 1.0,
    't2': 1.5,
    't1': 2.5,
    'sr': 4.0,
    'ur': 6.0,
    'legendary': 10.0
  };

  // Base Oficial T3 (Modo Mais Diamante)
  // [startStar]: { dd, kk, pokes }
  const T3_BASE_STEPS = [
    { from: 0, to: 1, dd: 4, kk: 1, pokes: 1 },
    { from: 1, to: 2, dd: 12, kk: 3, pokes: 2 },
    { from: 2, to: 3, dd: 28, kk: 7, pokes: 4 },
    { from: 3, to: 4, dd: 60, kk: 15, pokes: 8 },
    { from: 4, to: 5, dd: 124, kk: 31, pokes: 16 }
  ];

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
          // Se o usuário clicar, alterna para aquele modo manualmente
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

    const mult = TIER_MULTIPLIERS[tier] || 1.0;

    // Soma os passos selecionados na base oficial (Modo Mais Diamante)
    let totalBaseDD = 0;
    let totalBaseKK = 0;
    let totalPokes = 0;

    for (let s = curStar; s < tgtStar; s++) {
      const step = T3_BASE_STEPS[s];
      if (step) {
        totalBaseDD += Math.round(step.dd * mult);
        totalBaseKK += Number((step.kk * mult).toFixed(2));
        totalPokes += step.pokes;
      }
    }

    // Calcula os recursos para as 3 modalidades do jogo com base na taxa de conversão (1 DD = 500k = 0.5kk):
    // 1. Mais Diamante (Base da planilha)
    const dataMoreDia = { dd: totalBaseDD, kk: totalBaseKK };

    // 2. Balanceado (Gasta menos DDs e mais KKs a uma taxa de 500k por DD)
    // Reduz ~40% a 50% dos DDs e converte para KK
    const diffDiaBalanced = Math.round(totalBaseDD * 0.45);
    const dataBalanced = {
      dd: totalBaseDD - diffDiaBalanced,
      kk: Number((totalBaseKK + (diffDiaBalanced * 0.5)).toFixed(2))
    };

    // 3. Mais KK (Reduz ~75% dos DDs e converte para KK)
    const diffDiaMoreKk = Math.round(totalBaseDD * 0.75);
    const dataMoreKk = {
      dd: totalBaseDD - diffDiaMoreKk,
      kk: Number((totalBaseKK + (diffDiaMoreKk * 0.5)).toFixed(2))
    };

    // Custo Total Equivalente em KK para cada opção com base no preço real de mercado do DD
    const costMoreDiaKk = (dataMoreDia.dd * ddPriceKk) + dataMoreDia.kk;
    const costBalancedKk = (dataBalanced.dd * ddPriceKk) + dataBalanced.kk;
    const costMoreKkKk = (dataMoreKk.dd * ddPriceKk) + dataMoreKk.kk;

    const options = [
      { id: 'moreDia', name: 'Mais Diamante', cost: costMoreDiaKk, data: dataMoreDia },
      { id: 'balanced', name: 'Balanceado', cost: costBalancedKk, data: dataBalanced },
      { id: 'moreKk', name: 'Mais KK', cost: costMoreKkKk, data: dataMoreKk }
    ];

    // Ordena do menor para o maior para descobrir a OPÇÃO MAIS BARATA
    const sorted = [...options].sort((a, b) => a.cost - b.cost);
    const bestOption = sorted[0];
    const worstOption = sorted[sorted.length - 1];
    const maxSavingsKk = worstOption.cost - bestOption.cost;
    const maxSavingsK = maxSavingsKk * 1000;

    // Se estiver em modo 'auto' ou o usuário não tiver fixado, usa a mais barata
    const activeOpt = (selectedMode === 'auto')
      ? bestOption
      : (options.find(o => o.id === selectedMode) || bestOption);

    // Atualiza os stats de DD, KK e Pokés do topo (da opção ativa)
    const ddDisplay = document.getElementById('costDiamondsDisplay');
    const kkDisplay = document.getElementById('costKkDisplay');
    const pokesDisplay = document.getElementById('pokesNeededDisplay');
    const stepsTitle = document.getElementById('ascensionStepsTitle');

    if (ddDisplay) ddDisplay.textContent = activeOpt.data.dd;
    if (kkDisplay) kkDisplay.textContent = `$${activeOpt.data.kk}kk`;
    if (pokesDisplay) pokesDisplay.textContent = `${totalPokes} Pokémon${totalPokes > 1 ? 's' : ''}`;
    if (stepsTitle) stepsTitle.textContent = `${curStar}★ ➔ ${tgtStar}★ (${tgtStar - curStar} ${tgtStar - curStar === 1 ? 'estrela' : 'estrelas'})`;

    // Atualiza cards comparativos (apenas a melhor opção recebe destaque)
    options.forEach(opt => {
      const card = document.getElementById(`compItem_${opt.id}`);
      const valEl = document.getElementById(`compVal_${opt.id}`);
      const breakdownEl = document.getElementById(`compBreak_${opt.id}`);

      if (valEl) valEl.textContent = `$${opt.cost.toFixed(3)}kk`;
      if (breakdownEl) breakdownEl.textContent = `${opt.data.dd} DD + $${opt.data.kk}kk`;

      if (card) {
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
    const totalWithFodder = bestOption.cost + (totalPokes * fodderCostKk);
    const totalCostKkEl = document.getElementById('totalCostKkDisplay');
    const totalInvestEl = document.getElementById('totalInvestmentDisplay');

    if (totalCostKkEl) totalCostKkEl.textContent = `$${bestOption.cost.toFixed(3)}kk (~${(bestOption.cost * 1000).toFixed(0)}k)`;
    if (totalInvestEl) totalInvestEl.textContent = `$${totalWithFodder.toFixed(3)}kk (~${(totalWithFodder * 1000).toFixed(0)}k)`;

    // Banner de Economia
    const savingsEl = document.getElementById('savingsResultDisplay');
    if (savingsEl) {
      savingsEl.innerHTML = `<strong>🏆 Rota Otimizada (${bestOption.name}) Selecionada Automaticamente!</strong><br>Economia de <strong>$${maxSavingsKk.toFixed(3)}kk (~${maxSavingsK.toFixed(0)}k)</strong> em relação à pior opção.`;
      savingsEl.className = 'savings-banner-clean banner-optimal';
    }
  }

  // Inicializa eventos
  syncStarSelects();
  calculate();
});
