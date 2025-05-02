// script.js

// Datos de noticias
const noticias = {
    futbol: "El equipo local ha ganado el campeonato tras un emocionante partido contra el equipo visitante, en el que se definió por penales.",
    baloncesto: "El equipo defensor del título se enfrentó ayer al equipo sorpresa, el cual se llevó la victoria en un juego muy competitivo.",
    tenis: "El número uno del mundo, que sigue en racha, ha ganado todos sus partidos en el torneo internacional, demostrando su dominio total sobre la cancha."
  };
  
  // Función para mostrar las noticias
  document.querySelectorAll('.btn-noticia').forEach(button => {
    button.addEventListener('click', (event) => {
      const deporte = event.target.getAttribute('data-deporte');
      alert(noticias[deporte]);
    });
  });
  
