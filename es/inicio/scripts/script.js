const barraNavegacion = document.querySelector('.barra-navegacion');
const seccionPrincipal = document.querySelector('.seccion-principal');
let barraNavegacionOffsetTop = barraNavegacion.offsetTop;

window.addEventListener('scroll', () => {
  if (!barraNavegacion.classList.contains('fixed')) {
    barraNavegacionOffsetTop = barraNavegacion.offsetTop;
  }

  if (window.scrollY >= barraNavegacionOffsetTop) {
    barraNavegacion.classList.add('fixed');
    seccionPrincipal.style.paddingTop = '72px';
  } else {
    barraNavegacion.classList.remove('fixed');
    seccionPrincipal.style.paddingTop = '';
  }
});