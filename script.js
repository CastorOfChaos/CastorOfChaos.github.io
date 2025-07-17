// banner + books
const banner = document.querySelector('.profile-banner');
const books = document.querySelector('.books-icon');

function onScroll() {
  const rect = banner.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    banner.classList.add('visible');
    books.classList.add('float');
    window.removeEventListener('scroll', onScroll);
  }
}

window.addEventListener('scroll', onScroll);
onScroll();

const fadeElements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();



// menu
const links = document.querySelectorAll('.main-menu a');
const content = document.querySelector('.frame-content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('href').substring(1); // gets "works", "faq", etc.
    loadPage(page);
    setActiveLink(link);
  });
});

function setActiveLink(activeLink) {
  links.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

function loadPageCSS(cssPath) {
  if (document.querySelector(`link[href="${cssPath}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssPath;
  document.head.appendChild(link);
}

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
      loadPageCSS(`pages/${page}.css`);
      if (page === 'faq') initFAQ();
    })
    .catch(err => {
      content.innerHTML = '<p>Error loading content 😢</p>';
    });
}

function initFAQ() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('open');
    });
  });
}
loadPage('home');