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

const boton = document.getElementById("toogleTema");
const imgGalgos = document.getElementById("imagenGalgos");
const galgos = document.querySelector('.galgos');
const tarjetas = document.querySelectorAll('.tarjeta');
const botonProyectos = document.querySelector('.boton-proyectos');
const intereses = document.querySelector('.intereses');
const botonToggle = document.querySelector('.boton-toggle')

boton.addEventListener("click", oscuro);

function oscuro(){
    seccionPrincipal.classList.toggle("oscuro");
    galgos.classList.toggle("oscuro");
    botonProyectos.classList.toggle("oscuro");
    intereses.classList.toggle("oscuro");
    botonToggle.classList.toggle("oscuro");
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.toggle("oscuro");
    });
    if (imgGalgos.src.includes("negro")) {
        imgGalgos.src = "../../images/Galgos blanco.png";
    } else {
        imgGalgos.src = "../../images/Galgos negro.png";
    }
}