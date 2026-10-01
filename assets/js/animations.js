// ==========================================================================
// animations.js — Dormir Não Dá XP
// Animações reais, sem biblioteca, sem AI slop.
// Princípios: rápido pra carregar, suave pra ver, útil pro usuário.
// Otimizado contra vazamentos de memória e com transições suaves de página/seção.
// ==========================================================================

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. TRANSIÇÃO SUAVE ENTRE PÁGINAS (Page Transitions)
  //    Evita corte abrupto ao navegar entre Início, Rocket, Hoenn e Guias.
  // --------------------------------------------------------------------------
  function isInternalNavigation(url) {
    if (!url || url.startsWith('#') || url.startsWith('javascript:') || url.startsWith('mailto:') || url.startsWith('tel:')) {
      return false;
    }
    try {
      const link = new URL(url, window.location.href);
      return link.origin === window.location.origin && link.pathname !== window.location.pathname;
    } catch (_) {
      return false;
    }
  }

  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    // Se abrir em nova aba ou com tecla modificadora, navega normalmente
    if (anchor.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    const href = anchor.getAttribute('href');
    if (isInternalNavigation(href)) {
      e.preventDefault();
      document.body.classList.add('is-page-transitioning');
      setTimeout(() => {
        window.location.href = href;
      }, 160);
    }
  });

  // Previne ficar transparente se o usuário voltar pelo botão do navegador (bfcache)
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('is-page-transitioning');
  });

  // --------------------------------------------------------------------------
  // 2. PARALLAX SUTIL NO HERO
  //    O fundo de gameplay se move levemente enquanto você rola a página.
  // --------------------------------------------------------------------------
  const heroBg = document.getElementById('heroBg');

  if (heroBg) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 3. FADE-IN-UP ESCALONADO NA ENTRADA INICIAL
  // --------------------------------------------------------------------------
  const fadeEls = document.querySelectorAll('.fade-in-up');

  fadeEls.forEach(el => {
    const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });

  // --------------------------------------------------------------------------
  // 4. REVEAL ON SCROLL — Cards e seções aparecem conforme você rola
  //    IntersectionObserver nativo: unobserve() garante limpeza de memória.
  // --------------------------------------------------------------------------
  const revealEls = document.querySelectorAll('.card, .npc-card, .budget-card, .info-panel, .minimap-card');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target); // roda só uma vez e libera da memória
        }
      });
    }, {
      threshold: 0.06,
      rootMargin: '0px 0px -30px 0px'
    });

    revealEls.forEach((el, i) => {
      el.classList.add('reveal-ready');
      el.style.transitionDelay = `${(i % 4) * 45}ms`;
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 5. DESTAQUE DO LINK ATIVO NO NAV CONFORME O SCROLL
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(s => activeObserver.observe(s));
  }

  // --------------------------------------------------------------------------
  // 6. FEEDBACK DE CLIQUE NOS BOTÕES (Ripple seguro via Delegação de Eventos)
  //    Usa apenas 1 event listener global e remove nós com timeout de segurança
  //    para garantir 0 vazamento de memória.
  // --------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

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

    const cleanup = () => {
      if (ripple.parentNode) ripple.remove();
    };

    ripple.addEventListener('animationend', cleanup, { once: true });
    setTimeout(cleanup, 480);
  });

  // --------------------------------------------------------------------------
  // 7. SMOOTH SCROLL UNIVERSAL + FEEDBACK VISUAL NA SEÇÃO DE DESTINO
  // --------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href');
    if (targetId && targetId !== '#') {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Feedback suave de pulso na seção de destino
        target.classList.remove('section-target-highlight');
        void target.offsetWidth; // Força reflow limpo
        target.classList.add('section-target-highlight');

        setTimeout(() => {
          target.classList.remove('section-target-highlight');
        }, 1300);

        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', targetId);
        }
      }
    }
  });

})();
