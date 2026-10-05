/**
 * Dormir Não Dá XP - Calculadora de Ascensão Estelar
 * Lógica matemática de Star Atual -> Star Objetivo, Custo em DD & KK, Bônus de Dano e Comparativo de Economia
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const tierSelect = document.getElementById('starTier');
  const currentStarSelect = document.getElementById('currentStar');
  const targetStarSelect = document.getElementById('targetStar');
  const ddPriceInput = document.getElementById('ddPrice'); // em $k (ex: 263k)
  const fodderCostInput = document.getElementById('fodderCost'); // em $kk

  // Tabela Oficial de Custo por Upgrade de Estrela (100% Sucesso - Modo Mais Diamante)
  // [startStar -> startStar+1]: { dd, kk, pokes }
  const STAR_COSTS = {
    't3': [
      { from: 0, to: 1, dd: 4, kk: 1, pokes: 1 },
      { from: 1, to: 2, dd: 12, kk: 3, pokes: 2 },
      { from: 2, to: 3, dd: 24, kk: 6, pokes: 3 },
      { from: 3, to: 4, dd: 40, kk: 10, pokes: 4 },
      { from: 4, to: 5, dd: 60, kk: 15, pokes: 5 }
    ],
    't2': [
      { from: 0, to: 1, dd: 6, kk: 1.5, pokes: 1 },
      { from: 1, to: 2, dd: 18, kk: 4.5, pokes: 2 },
      { from: 2, to: 3, dd: 36, kk: 9, pokes: 3 },
      { from: 3, to: 4, dd: 60, kk: 15, pokes: 4 },
      { from: 4, to: 5, dd: 90, kk: 22.5, pokes: 5 }
    ],
    't1': [
      { from: 0, to: 1, dd: 10, kk: 2, pokes: 1 },
      { from: 1, to: 2, dd: 30, kk: 6, pokes: 2 },
      { from: 2, to: 3, dd: 60, kk: 12, pokes: 3 },
      { from: 3, to: 4, dd: 100, kk: 20, pokes: 4 },
      { from: 4, to: 5, dd: 150, kk: 30, pokes: 5 }
    ],
    'sr': [
      { from: 0, to: 1, dd: 16, kk: 4, pokes: 1 },
      { from: 1, to: 2, dd: 48, kk: 12, pokes: 2 },
      { from: 2, to: 3, dd: 96, kk: 24, pokes: 3 },
      { from: 3, to: 4, dd: 160, kk: 40, pokes: 4 },
      { from: 4, to: 5, dd: 240, kk: 60, pokes: 5 }
    ],
    'ur': [
      { from: 0, to: 1, dd: 24, kk: 6, pokes: 1 },
      { from: 1, to: 2, dd: 72, kk: 18, pokes: 2 },
      { from: 2, to: 3, dd: 144, kk: 36, pokes: 3 },
      { from: 3, to: 4, dd: 240, kk: 60, pokes: 4 },
      { from: 4, to: 5, dd: 360, kk: 90, pokes: 5 }
    ],
    'legendary': [
      { from: 0, to: 1, dd: 40, kk: 10, pokes: 1 },
      { from: 1, to: 2, dd: 120, kk: 30, pokes: 2 },
      { from: 2, to: 3, dd: 240, kk: 60, pokes: 3 },
      { from: 3, to: 4, dd: 400, kk: 100, pokes: 4 },
      { from: 4, to: 5, dd: 600, kk: 150, pokes: 5 }
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

  // Garante que Star Objetivo sempre seja maior que Star Atual
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

    const tierSteps = STAR_COSTS[tier] || STAR_COSTS['t3'];

    let totalDD = 0;
    let totalKK = 0;
    let totalPokes = 0;

    for (let s = curStar; s < tgtStar; s++) {
      const step = tierSteps[s];
      if (step) {
        totalDD += step.dd;
        totalKK += step.kk;
        totalPokes += step.pokes;
      }
    }

    // Atualiza indicadores diretos
    const ddDisplay = document.getElementById('costDiamondsDisplay');
    const kkDisplay = document.getElementById('costKkDisplay');
    const pokesDisplay = document.getElementById('pokesNeededDisplay');
    const stepsTitle = document.getElementById('ascensionStepsTitle');

    if (ddDisplay) ddDisplay.textContent = totalDD;
    if (kkDisplay) kkDisplay.textContent = `$${totalKK}kk`;
    if (pokesDisplay) pokesDisplay.textContent = `${totalPokes} Pokémon${totalPokes > 1 ? 's' : ''}`;
    if (stepsTitle) stepsTitle.textContent = `${curStar}★ ➔ ${tgtStar}★ (${tgtStar - curStar} ${tgtStar - curStar === 1 ? 'estrela' : 'estrelas'})`;

    // Dano de Ataque Ganho
    const dmgPerStar = TIER_DAMAGE_PER_STAR[tier] || 2;
    const totalDmgGain = (tgtStar - curStar) * dmgPerStar;
    const dmgGainDisplay = document.getElementById('dmgGainDisplay');
    if (dmgGainDisplay) dmgGainDisplay.textContent = `+${totalDmgGain}% (${dmgPerStar}% por estrela)`;

    // COMPARAÇÃO DAS 3 OPÇÕES DE PAGAMENTO (CONVERSÃO TOTAL EM KK):
    // 1. Mais Diamante (Base da planilha do usuário): totalDD * ddPriceKk + totalKK
    const costMoreDiaKk = (totalDD * ddPriceKk) + totalKK;

    // 2. Balanceado (Meio a meio): consome menos DD e mais KK
    // Ratio de conversão do jogo: ~0.55 DDs a menos, compensado com +1.4x KKs
    const diaBalanced = Math.round(totalDD * 0.55);
    const kkBalanced = Number((totalKK * 1.5).toFixed(2));
    const costBalancedKk = (diaBalanced * ddPriceKk) + kkBalanced;

    // 3. Mais KK: consome quase nada de DD e muito mais KK
    const diaMoreKk = Math.round(totalDD * 0.2);
    const kkMoreKk = Number((totalKK * 2.3).toFixed(2));
    const costMoreKkKk = (diaMoreKk * ddPriceKk) + kkMoreKk;

    // Renderiza cards de comparação
    const compMoreDiaEl = document.getElementById('compMoreDiaVal');
    const compBalancedEl = document.getElementById('compBalancedVal');
    const compMoreKkEl = document.getElementById('compMoreKkVal');

    if (compMoreDiaEl) compMoreDiaEl.textContent = `$${costMoreDiaKk.toFixed(3)}kk`;
    if (compBalancedEl) compBalancedEl.textContent = `$${costBalancedKk.toFixed(3)}kk`;
    if (compMoreKkEl) compMoreKkEl.textContent = `$${costMoreKkKk.toFixed(3)}kk`;

    // Identifica o melhor custo
    const options = [
      { id: 'moreDia', name: 'Mais Diamante', cost: costMoreDiaKk, elId: 'compItemMoreDia' },
      { id: 'balanced', name: 'Balanceado', cost: costBalancedKk, elId: 'compItemBalanced' },
      { id: 'moreKk', name: 'Mais KK', cost: costMoreKkKk, elId: 'compItemMoreKk' }
    ];
    options.sort((a, b) => a.cost - b.cost);

    const bestOption = options[0];
    const worstOption = options[options.length - 1];
    const savingsKk = worstOption.cost - bestOption.cost;
    const savingsK = savingsKk * 1000;

    // Destaca visualmente o card vencedor
    ['compItemMoreDia', 'compItemBalanced', 'compItemMoreKk'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('is-winner');
    });
    const winnerEl = document.getElementById(bestOption.elId);
    if (winnerEl) winnerEl.classList.add('is-winner');

    // Badge de topo
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

    // Totais com Pokémon Sacrificado
    const totalWithFodder = bestOption.cost + (totalPokes * fodderCostKk);
    const totalCostKkEl = document.getElementById('totalCostKkDisplay');
    const totalInvestEl = document.getElementById('totalInvestmentDisplay');

    if (totalCostKkEl) totalCostKkEl.textContent = `$${bestOption.cost.toFixed(3)}kk (~${(bestOption.cost * 1000).toFixed(0)}k)`;
    if (totalInvestEl) totalInvestEl.textContent = `$${totalWithFodder.toFixed(3)}kk (~${(totalWithFodder * 1000).toFixed(0)}k)`;

    // Banner de Economia
    const savingsEl = document.getElementById('savingsResultDisplay');
    if (savingsEl) {
      savingsEl.innerHTML = `<strong>🏆 Melhor escolha: <span style="text-decoration: underline;">${bestOption.name}</span></strong> — você economiza <strong>$${savingsKk.toFixed(3)}kk (~${savingsK.toFixed(0)}k)</strong> em relação à opção mais cara!`;
    }
  }

  // Inicialização
  syncStarSelects();
  calculate();
});
