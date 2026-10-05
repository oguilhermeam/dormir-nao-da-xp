/**
 * Dormir Não Dá XP - Calculadora de Ascensão Estelar
 * Lógica de cálculo, conversão de moedas (Diamond vs Dólares/kk) e análise de profit
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const tierSelect = document.getElementById('starTier');
  const starSelect = document.getElementById('starLevel');
  const ddPriceInput = document.getElementById('ddPrice');
  const marketPriceInput = document.getElementById('marketPrice');
  const fodderCostInput = document.getElementById('fodderCost');

  const splitPureDiaBtn = document.getElementById('splitPureDia');
  const splitBalancedBtn = document.getElementById('splitBalanced');
  const splitPureKkBtn = document.getElementById('splitPureKk');

  // Valores base de exemplo por Tier (1 a 5 estrelas)
  // [dia, kk] para cada estrela de 1 a 5
  // Estrutura editável: se o usuário ajustar inputs manuais, refletir em tempo real
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
  [tierSelect, starSelect, ddPriceInput, marketPriceInput, fodderCostInput].forEach(el => {
    if (el) {
      el.addEventListener('input', calculate);
      el.addEventListener('change', calculate);
    }
  });

  function calculate() {
    const tier = tierSelect ? tierSelect.value : '3';
    const star = starSelect ? parseInt(starSelect.value, 10) : 1;
    const ddPriceKk = ddPriceInput ? (parseFloat(ddPriceInput.value) || 0) : 0;
    const marketPriceKk = marketPriceInput ? (parseFloat(marketPriceInput.value) || 0) : 0;
    const fodderCostKk = fodderCostInput ? (parseFloat(fodderCostInput.value) || 0) : 0;

    // Custos base de referência para a ascensão
    const tierData = TIER_DEFAULTS[tier] || TIER_DEFAULTS['3'];
    // Multiplicador pela estrela
    let baseDia = tierData.dia * star;
    let baseKk = tierData.kk * star;

    let reqDia = 0;
    let reqKk = 0;

    if (currentMode === 'pure_dia') {
      // Paga tudo ou quase tudo em Diamonds
      reqDia = Math.round(baseDia * 1.8);
      reqKk = 0;
    } else if (currentMode === 'pure_kk') {
      // Paga tudo ou quase tudo em KKs
      reqDia = 0;
      reqKk = Number((baseKk * 2.2).toFixed(2));
    } else {
      // Balanceado (Meio a meio)
      reqDia = baseDia;
      reqKk = baseKk;
    }

    // Exibir requisitos na UI
    const reqDiaEl = document.getElementById('costDiamondsDisplay');
    const reqKkEl = document.getElementById('costKkDisplay');
    if (reqDiaEl) reqDiaEl.textContent = reqDia;
    if (reqKkEl) reqKkEl.textContent = `$${reqKk}kk`;

    // Custo convertido em KK considerando o preço do Diamond (DD) no mercado
    // 1 Diamond = (ddPriceKk) KKs
    const diaCostInKk = reqDia * ddPriceKk;
    const totalAscensionCostKk = diaCostInKk + reqKk;
    const totalInvestmentKk = totalAscensionCostKk + fodderCostKk;

    // Resumo de custos
    const totalCostKkEl = document.getElementById('totalCostKkDisplay');
    const totalInvestEl = document.getElementById('totalInvestmentDisplay');
    if (totalCostKkEl) totalCostKkEl.textContent = `$${totalAscensionCostKk.toFixed(2)}kk`;
    if (totalInvestEl) totalInvestEl.textContent = `$${totalInvestmentKk.toFixed(2)}kk`;

    // Análise de Melhor Opção de Pagamento (Comparativo de Custo Total em KK)
    // Opção 1: Pure Dia convertida
    const pureDiaCostKk = (Math.round(baseDia * 1.8)) * ddPriceKk;
    // Opção 2: Pure KK
    const pureKkCostKk = Number((baseKk * 2.2).toFixed(2));
    // Opção 3: Balanced
    const balancedCostKk = (baseDia * ddPriceKk) + baseKk;

    const compPureDiaEl = document.getElementById('compPureDiaVal');
    const compBalancedEl = document.getElementById('compBalancedVal');
    const compPureKkEl = document.getElementById('compPureKkVal');

    if (compPureDiaEl) compPureDiaEl.textContent = `$${pureDiaCostKk.toFixed(2)}kk`;
    if (compBalancedEl) compBalancedEl.textContent = `$${balancedCostKk.toFixed(2)}kk`;
    if (compPureKkEl) compPureKkEl.textContent = `$${pureKkCostKk.toFixed(2)}kk`;

    // Indicar a opção mais barata
    const bestCost = Math.min(pureDiaCostKk, pureKkCostKk, balancedCostKk);
    const badgeBest = document.getElementById('bestChoiceBadge');
    if (badgeBest) {
      if (bestCost === pureDiaCostKk) {
        badgeBest.textContent = '💎 Mais vantajoso pagar com Diamonds';
        badgeBest.className = 'calc-badge badge-dia';
      } else if (bestCost === pureKkCostKk) {
        badgeBest.textContent = '💵 Mais vantajoso pagar com KK ($Dólares)';
        badgeBest.className = 'calc-badge badge-kk';
      } else {
        badgeBest.textContent = '⚖️ Mais vantajoso modo Balanceado';
        badgeBest.className = 'calc-badge badge-balanced';
      }
    }

    // Lucro / Prejuízo (Profit)
    const profitKk = marketPriceKk - totalInvestmentKk;
    const profitEl = document.getElementById('profitResultDisplay');
    const profitCard = document.getElementById('profitCardContainer');

    if (profitEl && profitCard) {
      if (marketPriceKk <= 0) {
        profitEl.textContent = 'Insira o valor de mercado para ver o lucro';
        profitCard.className = 'calc-profit-box neutral';
      } else if (profitKk > 0) {
        profitEl.innerHTML = `<strong>Lucro Estimado: +$${profitKk.toFixed(2)}kk</strong> (${((profitKk / totalInvestmentKk) * 100).toFixed(1)}% ROI)`;
        profitCard.className = 'calc-profit-box profit';
      } else if (profitKk < 0) {
        profitEl.innerHTML = `<strong>Prejuízo Estimado: -$${Math.abs(profitKk).toFixed(2)}kk</strong> (${((profitKk / totalInvestmentKk) * 100).toFixed(1)}%)`;
        profitCard.className = 'calc-profit-box loss';
      } else {
        profitEl.textContent = 'Empate (Break-even): $0.00kk';
        profitCard.className = 'calc-profit-box neutral';
      }
    }
  }

  // Executa o cálculo inicial
  calculate();
});
