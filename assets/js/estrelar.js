/**
 * Dormir Não Dá XP - Calculadora de Ascensão Estelar
 * Lógica de cálculo, conversão de moedas (Diamond vs Dólares/kk) e otimização de custo
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const tierSelect = document.getElementById('starTier');
  const starSelect = document.getElementById('starLevel');
  const ddPriceInput = document.getElementById('ddPrice'); // em $k (ex: 263k)
  const fodderCostInput = document.getElementById('fodderCost'); // em $kk

  const splitPureDiaBtn = document.getElementById('splitPureDia');
  const splitBalancedBtn = document.getElementById('splitBalanced');
  const splitPureKkBtn = document.getElementById('splitPureKk');

  // Valores base de exemplo por Tier (1 a 5 estrelas)
  // [dia, kk] para cada estrela de 1 a 5
  const TIER_DEFAULTS = {
    '1': { dia: 2, kk: 1 },
    '2': { dia: 3, kk: 1.5 },
    '3': { dia: 5, kk: 2 },
    '4': { dia: 8, kk: 4 },
    '5': { dia: 12, kk: 6 }
  };

  let currentMode = 'balanced'; // 'pure_dia', 'balanced', 'pure_kk'

  // Alternância de modo de pagamento
  function setMode(mode) {
    currentMode = mode;
    [splitPureDiaBtn, splitBalancedBtn, splitPureKkBtn].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (mode === 'pure_dia' && splitPureDiaBtn) splitPureDiaBtn.classList.add('active');
    if (mode === 'balanced' && splitBalancedBtn) splitBalancedBtn.classList.add('active');
    if (mode === 'pure_kk' && splitPureKkBtn) splitPureKkBtn.classList.add('active');

    calculate();
  }

  if (splitPureDiaBtn) splitPureDiaBtn.addEventListener('click', () => setMode('pure_dia'));
  if (splitBalancedBtn) splitBalancedBtn.addEventListener('click', () => setMode('balanced'));
  if (splitPureKkBtn) splitPureKkBtn.addEventListener('click', () => setMode('pure_kk'));

  // Listener para inputs
  [tierSelect, starSelect, ddPriceInput, fodderCostInput].forEach(el => {
    if (el) {
      el.addEventListener('input', calculate);
      el.addEventListener('change', calculate);
    }
  });

  function calculate() {
    const tier = tierSelect ? tierSelect.value : '3';
    const star = starSelect ? parseInt(starSelect.value, 10) : 1;
    // Preço do DD em $k (ex: 263k = 0.263kk)
    const ddPriceK = ddPriceInput ? (parseFloat(ddPriceInput.value) || 0) : 0;
    const ddPriceKk = ddPriceK / 1000;
    const fodderCostKk = fodderCostInput ? (parseFloat(fodderCostInput.value) || 0) : 0;

    // Custos base de referência para a ascensão
    const tierData = TIER_DEFAULTS[tier] || TIER_DEFAULTS['3'];
    let baseDia = tierData.dia * star;
    let baseKk = tierData.kk * star;

    let reqDia = 0;
    let reqKk = 0;

    if (currentMode === 'pure_dia') {
      reqDia = Math.round(baseDia * 1.8);
      reqKk = 0;
    } else if (currentMode === 'pure_kk') {
      reqDia = 0;
      reqKk = Number((baseKk * 2.2).toFixed(2));
    } else {
      reqDia = baseDia;
      reqKk = baseKk;
    }

    // Exibir requisitos na UI do box in-game
    const reqDiaEl = document.getElementById('costDiamondsDisplay');
    const reqKkEl = document.getElementById('costKkDisplay');
    if (reqDiaEl) reqDiaEl.textContent = reqDia;
    if (reqKkEl) reqKkEl.textContent = `$${reqKk}kk`;

    // Custo convertido em KK considerando o preço do Diamond (DD) no mercado
    const diaCostInKk = reqDia * ddPriceKk;
    const totalAscensionCostKk = diaCostInKk + reqKk;
    const totalInvestmentKk = totalAscensionCostKk + fodderCostKk;

    // Resumo de custos
    const totalCostKkEl = document.getElementById('totalCostKkDisplay');
    const totalInvestEl = document.getElementById('totalInvestmentDisplay');
    if (totalCostKkEl) totalCostKkEl.textContent = `$${totalAscensionCostKk.toFixed(3)}kk (${(totalAscensionCostKk * 1000).toFixed(0)}k)`;
    if (totalInvestEl) totalInvestEl.textContent = `$${totalInvestmentKk.toFixed(3)}kk (${(totalInvestmentKk * 1000).toFixed(0)}k)`;

    // Comparativo das 3 Opções de Pagamento (Convertendo tudo para KK)
    const pureDiaCostKk = (Math.round(baseDia * 1.8)) * ddPriceKk;
    const pureKkCostKk = Number((baseKk * 2.2).toFixed(2));
    const balancedCostKk = (baseDia * ddPriceKk) + baseKk;

    const compPureDiaEl = document.getElementById('compPureDiaVal');
    const compBalancedEl = document.getElementById('compBalancedVal');
    const compPureKkEl = document.getElementById('compPureKkVal');

    if (compPureDiaEl) compPureDiaEl.textContent = `$${pureDiaCostKk.toFixed(3)}kk`;
    if (compBalancedEl) compBalancedEl.textContent = `$${balancedCostKk.toFixed(3)}kk`;
    if (compPureKkEl) compPureKkEl.textContent = `$${pureKkCostKk.toFixed(3)}kk`;

    // Indicar a opção mais barata e economia
    const costs = [
      { mode: 'pure_dia', name: 'Mais Diamante', cost: pureDiaCostKk },
      { mode: 'balanced', name: 'Balanceado', cost: balancedCostKk },
      { mode: 'pure_kk', name: 'Mais KK', cost: pureKkCostKk }
    ];
    costs.sort((a, b) => a.cost - b.cost);

    const bestOption = costs[0];
    const worstOption = costs[costs.length - 1];
    const diffSavingsKk = worstOption.cost - bestOption.cost;
    const diffSavingsK = diffSavingsKk * 1000;

    const badgeBest = document.getElementById('bestChoiceBadge');
    if (badgeBest) {
      if (bestOption.mode === 'pure_dia') {
        badgeBest.textContent = '💎 Mais vantajoso pagar com Diamonds';
        badgeBest.className = 'calc-badge badge-dia';
      } else if (bestOption.mode === 'pure_kk') {
        badgeBest.textContent = '💵 Mais vantajoso pagar com KK ($Dólares)';
        badgeBest.className = 'calc-badge badge-kk';
      } else {
        badgeBest.textContent = '⚖️ Mais vantajoso modo Balanceado';
        badgeBest.className = 'calc-badge badge-balanced';
      }
    }

    // Painel de Economia
    const savingsEl = document.getElementById('savingsResultDisplay');
    const savingsCard = document.getElementById('savingsCardContainer');
    if (savingsEl && savingsCard) {
      if (diffSavingsKk > 0) {
        savingsEl.innerHTML = `<strong>Economia de até $${diffSavingsKk.toFixed(3)}kk (~${diffSavingsK.toFixed(0)}k)</strong> escolhendo <u>${bestOption.name}</u> ao invés de ${worstOption.name}!`;
        savingsCard.className = 'calc-profit-box profit';
      } else {
        savingsEl.textContent = 'Todas as opções possuem custos praticamente equivalentes.';
        savingsCard.className = 'calc-profit-box neutral';
      }
    }
  }

  // Executa o cálculo inicial
  calculate();
});
