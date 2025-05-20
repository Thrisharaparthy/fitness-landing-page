// // Get references
// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// // Toggle nav menu on hamburger click
// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');         // Show/hide nav menu on mobile
//   menuToggle.classList.toggle('active');       // Optional toggle effect on hamburger
// });

// // Close nav menu when a nav link is clicked (mobile friendly)
// navLinks.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//     if (navLinks.classList.contains('active')) {
//       navLinks.classList.remove('active');
//       menuToggle.classList.remove('active');
//     }
//   });
// });

// // Smooth scroll effect when clicking nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', e => {
//     e.preventDefault();
//     const targetID = anchor.getAttribute('href');
//     const targetElement = document.querySelector(targetID);
//     if(targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }
//   });
// });
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const scrollBtn = document.getElementById('scrollTopBtn');

// Toggle mobile menu
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Show/hide scroll-to-top button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Scroll to top when scroll button clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


