// ==========================================================================
// animations.js — Dormir Não Dá XP
// Animações reais, sem biblioteca, sem AI slop.
// Princípios: rápido pra carregar, suave pra ver, útil pro usuário.
// ==========================================================================

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. PARALLAX SUTIL NO HERO
  //    O fundo de gameplay se move levemente enquanto você rola a página.
  //    Dá profundidade sem chamar atenção pra si mesmo.
  // --------------------------------------------------------------------------
  const heroBg = document.getElementById('heroBg');

  if (heroBg) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Move o bg na metade da velocidade do scroll (parallax clássico)
          heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 2. FADE-IN-UP ESCALONADO NA ENTRADA
  //    Cada elemento com .fade-in-up aparece suavemente ao carregar,
  //    com delay em ms definido pelo atributo data-delay.
  // --------------------------------------------------------------------------
  const fadeEls = document.querySelectorAll('.fade-in-up');

  fadeEls.forEach(el => {
    const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;

    // Inicia a animação no próximo frame pra garantir que o estado inicial foi pintado
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });

  // --------------------------------------------------------------------------
  // 3. REVEAL ON SCROLL — Cards e seções aparecem conforme você rola
  //    IntersectionObserver: nativo, performático, sem jQuery, sem ScrollMagic.
  // --------------------------------------------------------------------------
  const revealEls = document.querySelectorAll('.card, .npc-card, .budget-card, .info-panel, .minimap-card');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target); // roda só uma vez
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach((el, i) => {
      el.classList.add('reveal-ready');
      // Escalonamento suave baseado na posição no DOM dentro do grid
      el.style.transitionDelay = `${(i % 4) * 55}ms`;
      revealObserver.observe(el);
    });
  } else {
    // Fallback: mostra tudo imediatamente se IntersectionObserver não for suportado
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 4. DESTAQUE DO LINK ATIVO NO NAV conforme o scroll
  //    Quando o usuário chega em uma seção, o nav link correspondente acende.
  //    Só ativa se houver anchors na página (guia/rocket).
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length && navLinks.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => activeObserver.observe(s));
  }

  // --------------------------------------------------------------------------
  // 5. FEEDBACK DE CLIQUE NOS BOTÕES (ripple discreto)
  //    Quando o usuário clica num botão, uma onda se expande a partir do clique.
  //    Sem biblioteca. Só CSS + JS puro.
  // --------------------------------------------------------------------------
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.18);
        transform: scale(0);
        animation: btn-ripple 0.45s ease-out forwards;
        pointer-events: none;
      `;

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // --------------------------------------------------------------------------
  // 6. SMOOTH SCROLL UNIVERSAL PARA LINKS INTERNOS
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

})();
