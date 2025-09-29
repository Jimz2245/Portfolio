// script.js

const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

// ---- 1. Header fade-in on page load ----
window.addEventListener('load', () => {
  header.classList.add('visible');
});

// ---- 2. Sticky navbar ----
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Sticky navbar
  if (scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  // Header fade-out on scroll
  if (scrollY < window.innerHeight) {
    const opacity = 1 - scrollY / window.innerHeight; // fades out gradually
    header.style.opacity = opacity;
    header.style.transform = `translateY(${20 * (1 - opacity)}px)`; // subtle upward move
  } else {
    header.style.opacity = 0;
  }
});

// ---- 3. Smooth scrolling with sticky navbar offset ----
document.querySelectorAll('.nav-links a, .scroll-btn').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const navbarHeight = navbar.offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  });
});

