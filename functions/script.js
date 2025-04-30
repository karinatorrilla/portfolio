function selectActiveNav(clickedElement) {
    const navLinks = document.querySelectorAll('.nav-link');
    // Elimina la clase 'active' de todos los a
    navLinks.forEach(link => link.classList.remove('active'));
    // Agrega la clase active al a clickeado
    clickedElement.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Encuentra ek tag con active inicial y simula un click
    const initialActiveLink = document.querySelector('.nav-link.active');
    if (initialActiveLink) {
      selectActiveNav(initialActiveLink);
    }
  });