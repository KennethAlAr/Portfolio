const barraNavegacion = document.querySelector('.barra-navegacion');
const sobreMi = document.querySelector('.sobre-mi');
let barraNavegacionOffsetTop = barraNavegacion.offsetTop;

window.addEventListener('scroll', () => {
  if (!barraNavegacion.classList.contains('fixed')) {
    barraNavegacionOffsetTop = barraNavegacion.offsetTop;
  }

  if (window.scrollY >= barraNavegacionOffsetTop) {
    barraNavegacion.classList.add('fixed');
    sobreMi.style.paddingTop = '97px';
  } else {
    barraNavegacion.classList.remove('fixed');
    sobreMi.style.paddingTop = '';
  }
});