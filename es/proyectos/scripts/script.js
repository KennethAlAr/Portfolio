/*Modo Oscuro*/
const boton = document.getElementById("toogleTema");
const tarjetas = document.querySelectorAll('.tarjeta');
const botonToggle = document.querySelector('.boton-toggle');
const seccionPrincipal = document.querySelector('.seccion-principal');
const botonSubir = document.getElementById('botonArriba');

boton.addEventListener("click", oscuro);

function oscuro(){
  seccionPrincipal.classList.toggle("oscuro");
  botonToggle.classList.toggle("oscuro");
  botonSubir.classList.toggle("oscuro");
  tarjetas.forEach(tarjeta => {
    tarjeta.classList.toggle("oscuro");
  });
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