// 手機版選單開關
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// 滾動出場動畫
const revealEls = document.querySelectorAll('.info-card, .skill-card, .project-block');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Nav「目前在哪一節」的提示（scroll spy）
const sections = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
});

// 回到頂端按鈕
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 400);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});