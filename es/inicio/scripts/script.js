/*Menú anclado al llegar arriba*/
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

/*Modo Oscuro*/
const boton = document.getElementById("toogleTema");
const imgGalgos = document.getElementById("imagenGalgos");
const galgos = document.querySelector('.galgos');
const tarjetas = document.querySelectorAll('.tarjeta');
const botonProyectos = document.querySelector('.boton-proyectos');
const intereses = document.querySelector('.intereses');
const botonToggle = document.querySelector('.boton-toggle');
const botonSubir = document.getElementById('botonArriba');

boton.addEventListener("click", oscuro);

function oscuro(){
  seccionPrincipal.classList.toggle("oscuro");
  galgos.classList.toggle("oscuro");
  botonProyectos.classList.toggle("oscuro");
  intereses.classList.toggle("oscuro");
  botonToggle.classList.toggle("oscuro");  
  botonSubir.classList.toggle("oscuro");
  tarjetas.forEach(tarjeta => {
    tarjeta.classList.toggle("oscuro");
  });
  if (imgGalgos.src.includes("negro")) {
    imgGalgos.src = "images/Galgos blanco.png";
  } else {
    imgGalgos.src = "images/Galgos negro.png";
  }
  if (seccionPrincipal.classList.contains("oscuro")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

/*Comprobar modo oscuro*/

function comprobarModoOscuro() {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    oscuro();
  }
}

document.addEventListener("DOMContentLoaded", comprobarModoOscuro);

/*Menú desplegable*/
const burger = document.getElementById("noDesplegado");
const menu = document.getElementById("desplegado");
const cerrar = document.getElementById("cerrar");

burger.addEventListener("click", abrirMenu);

function abrirMenu(){
  burger.style.display = "none";
  menu.style.display = "block";
}

cerrar.addEventListener("click", cerrarMenu);

function cerrarMenu(){
  burger.style.display = "block";
  menu.style.display = "none";
}

/*Popup de cookies*/

const popup = document.getElementById("cookiePopup");
const botonPopup = document.getElementById("aceptarCookies");

if (!localStorage.cookiesAccepted) {
    popup.classList.add("show");
}

botonPopup.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
})

/*Botón para subir arriba*/

const seccion = document.getElementById('sobre-mi');

window.addEventListener('scroll', () => {
  const seccionTop = seccion.getBoundingClientRect().bottom;
  const ventanaAltura = window.innerHeight;

  if(seccionTop < ventanaAltura - 100){
    botonSubir.classList.add("visible");
  } else {
    botonSubir.classList.remove("visible");
  }
});

window.addEventListener('scroll', () => {
  const scrollTotal = document.documentElement.scrollHeight;
  const scrollActual = window.innerHeight + window.scrollY;

  if (scrollTotal - scrollActual < 80) {
    const diferencia = 80 - (scrollTotal - scrollActual);
    botonSubir.style.bottom = `${10 + diferencia}px`;
  } else {
    botonSubir.style.bottom = '10px';
  }
});