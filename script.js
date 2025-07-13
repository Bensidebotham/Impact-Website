// Highlight current nav link based on URL
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// (Optional) Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// }); 