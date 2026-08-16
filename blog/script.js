/* ============================================================
   BLOG — Câmara de Mediação Racial nas Relações de Consumo
   Comportamento: ajuste de altura mobile, nav e animação de entrada.
   ============================================================ */

/* Corrige a altura em telas mobile (barra de endereço) */
function setVh() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}
setVh();
window.addEventListener('resize', setVh);

/* Botão "Acionar a Câmara" fica vermelho ao rolar a página */
const navCta = document.querySelector('.nav-cta');
window.addEventListener('scroll', () => {
  if (navCta) navCta.classList.toggle('scrolled', window.scrollY > 60);
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
