// Selecciona todos los enlaces del navbar
const navLinks = document.querySelectorAll('.navLinks a');

// Itera sobre cada enlace del navbar
navLinks.forEach(link => {
  // Agrega un evento 'click' a cada enlace
  link.addEventListener('click', e => {
    // Previene el comportamiento predeterminado del enlace
    e.preventDefault();
    
    // Obtiene el identificador de la sección correspondiente
    const targetId = link.getAttribute('href');
    
    // Obtiene la distancia entre la sección y la parte superior de la página
    const targetPosition = document.querySelector(targetId).offsetTop;
    
    // Agrega una animación a la transición hacia la sección
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


