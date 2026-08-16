/* ============================================================
   BLOG — Câmara de Mediação Racial nas Relações de Consumo
   Barra de progresso, nav, animações de entrada.
   ============================================================ */

/* Altura mobile (barra de endereço) */
function setVh() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}
setVh();
window.addEventListener('resize', setVh);

/* Barra de progresso de leitura + estado do botão da nav */
const progress = document.getElementById('progress');
const navCta = document.querySelector('.nav-cta');
function onScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  if (progress) progress.style.width = pct + '%';
  if (navCta) navCta.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Anima o risco embaixo da palavra em destaque do título */
window.addEventListener('load', () => {
  const mh = document.querySelector('.masthead');
  if (mh) mh.classList.add('lit');
});

/* Animação fade-up ao entrar na tela */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
