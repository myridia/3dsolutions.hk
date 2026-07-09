document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');

  if (toggle) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav') && links.classList.contains('open')) {
      links.classList.remove('open');
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('href') === current);
  });
});
