document.addEventListener("DOMContentLoaded", () => {
    // Cambiar colores del fondo y texto al hacer scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const header = document.getElementById("navbar");
      const body = document.body;
  
      if (scrollY > window.innerHeight / 2) {
        header.classList.add("scrolled");
        body.classList.add("scrolled");
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
      } else {
        header.classList.remove("scrolled");
        body.classList.remove("scrolled");
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
      }
    });
  
    // Inicializar Swiper después de que todo cargue
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  