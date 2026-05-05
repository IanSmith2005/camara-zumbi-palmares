// Fix iOS Safari viewport height
  function setVh() {
    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  setVh();
  window.addEventListener('resize', setVh);

  // Smooth scroll without changing URL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Gold nav button only after scrolling past hero
  const navCta = document.querySelector('.nav-cta');
  const hero = document.querySelector('.hero');
  const onScroll = () => {
    if (window.scrollY > hero.offsetHeight * 0.8) {
      navCta.classList.add('scrolled');
    } else {
      navCta.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Pre-select service on contact form when coming from a specific button
  document.querySelectorAll('a[data-servico]').forEach(link => {
    link.addEventListener('click', function() {
      const servico = this.getAttribute('data-servico');
      setTimeout(() => {
        const sel = document.getElementById('f-servico');
        if (sel) sel.value = servico;
      }, 400);
    });
  });

  // Form submit — Web3Forms
  document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const data = new FormData(form);
    data.append('access_key', 'a28fd72e-1476-40d2-a84d-f9267644e5dd');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(r => {
      if (r.ok) {
        form.innerHTML = '<p style="color:#FFD584;text-align:center;padding:40px 0;font-size:1rem;">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>';
      } else {
        form.innerHTML = '<p style="color:#e74c3c;text-align:center;padding:40px 0;font-size:1rem;">Ocorreu um erro. Por favor tente novamente ou envie um e-mail para elisa.lucena@faleck.com.br</p>';
      }
    }).catch(() => {
      form.innerHTML = '<p style="color:#e74c3c;text-align:center;padding:40px 0;font-size:1rem;">Ocorreu um erro. Por favor tente novamente ou envie um e-mail para elisa.lucena@faleck.com.br</p>';
    });
  });

  // Open all mailto and external links in new tab
  document.querySelectorAll('a[href^="mailto:"], a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

