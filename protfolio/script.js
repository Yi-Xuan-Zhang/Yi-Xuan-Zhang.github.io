// 手機版選單開關
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// 點選連結後自動關閉手機選單
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});