/* =============================================
   0Tavinn Portfolio — main.js
   GSAP + ScrollTrigger animations
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile hamburger ---- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* ---- Active nav  ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('nav ul a');
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`nav ul a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));

  /* ---- Typed text ---- */
  const roles = [
    'Full Stack',
    'Python',
    '.NET & C#',
    'TypeScript',
    'Salesforce',
  ];
  
  let roleIdx = 0, charIdx = 0, deleting = false;
  const typedEl = document.getElementById('typed-role');

  function typeLoop() {
    if (!typedEl) return;
    const current = roles[roleIdx];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 55 : 90);
  }
  typeLoop();

  /* ---- GSAP ---- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    /* Hero entrance */
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-label',       { opacity: 0, y: 20, duration: .6, delay: .3 })
      .from('.hero-title',       { opacity: 0, y: 30, duration: .7 }, '-=.3')
      .from('.hero-subtitle',    { opacity: 0, y: 20, duration: .5 }, '-=.3')
      .from('.hero-desc',        { opacity: 0, y: 20, duration: .5 }, '-=.2')
      .from('.hero-btns',        { opacity: 0, y: 20, duration: .5 }, '-=.2')
      .from('.hero-card-illustration', { opacity: 0, x: 50, duration: .8 }, '-=.6')
      .from('.floating-sticker', { opacity: 0, scale: 0, stagger: .15, duration: .5 }, '-=.4');

    /* scroll reveals */
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.from(el, {
        opacity: 0, y: 40, duration: .7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
    gsap.utils.toArray('.reveal-left').forEach(el => {
      gsap.from(el, {
        opacity: 0, x: -50, duration: .8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });
    gsap.utils.toArray('.reveal-right').forEach(el => {
      gsap.from(el, {
        opacity: 0, x: 50, duration: .8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    /* card animations */
    gsap.utils.toArray('.stagger-group').forEach(group => {
      const cards = group.querySelectorAll(':scope > *');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: .12, duration: .65, ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 85%', once: true }
      });
    });

    /* Skills */
    gsap.utils.toArray('.skill-tag').forEach((tag, i) => {
      gsap.from(tag, {
        opacity: 0, scale: .7, duration: .4, ease: 'back.out(1.7)',
        delay: (i % 8) * 0.06,
        scrollTrigger: { trigger: tag.closest('.skill-category'), start: 'top 85%', once: true }
      });
    });

    /* Navbar */
    ScrollTrigger.create({
      start: 'top -60',
      onUpdate: self => {
        document.getElementById('navbar').style.height = self.isActive ? '54px' : '64px';
      }
    });

  } else {
    /* Fallback */
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }

  /* ---- Coffee Easter egg ---- */
  let clickCount = 0;
  const coffeeBtn = document.getElementById('coffee-egg');
  if (coffeeBtn) {
    coffeeBtn.addEventListener('click', () => {
      clickCount++;
      const msgs = [
        '☕ Mais um café?',
        '☕☕ Duas xícaras — foco total!',
        '☕☕☕ Agora sim, o código flui!',
        '💡 Ideia genial surgindo...',
        '🚀 Deploy em produção — com café, claro!'
      ];
      showToast(msgs[Math.min(clickCount - 1, msgs.length - 1)]);
      if (clickCount >= msgs.length) clickCount = 0;
    });
  }

  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      Object.assign(toast.style, {
        position: 'fixed', bottom: '2rem', right: '2rem',
        background: '#3D1F0A', color: '#F5EDD6',
        padding: '.9rem 1.6rem', borderRadius: '14px',
        border: '3px solid #C27A3A',
        fontFamily: "'Caveat', cursive", fontSize: '1.1rem',
        zIndex: '9999', boxShadow: '4px 4px 0 #6B3F1C',
        transform: 'translateY(80px)', opacity: '0',
        transition: 'transform .4s cubic-bezier(.34,1.56,.64,1), opacity .4s'
      });
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.transform = 'translateY(80px)';
      toast.style.opacity = '0';
    }, 2800);
  }

  /* ---- scroll for nav  ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 64;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
