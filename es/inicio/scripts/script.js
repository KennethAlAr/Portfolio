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
const zonaPrincipal = document.getElementById('zonaPrincipal');
const boton = document.getElementById('toogleTema');
const imgGalgos = document.getElementById('imagenGalgos');
const galgos = document.querySelector('.galgos');
const tarjetas = document.querySelectorAll('.tarjeta');
const botonProyectos = document.querySelector('.boton-proyectos');
const intereses = document.querySelector('.intereses');
const botonToggle = document.querySelector('.boton-toggle');
const botonSubir = document.getElementById('botonArriba');
const menuLateral = document.querySelector('.menu-lateral');

boton.addEventListener("click", oscuro);

function oscuro(){
  zonaPrincipal.classList.toggle('oscuro');
  seccionPrincipal.classList.toggle('oscuro');
  galgos.classList.toggle('oscuro');
  botonProyectos.classList.toggle('oscuro');
  intereses.classList.toggle('oscuro');
  botonToggle.classList.toggle('oscuro');  
  botonSubir.classList.toggle('oscuro'); 
  menuLateral.classList.toggle('oscuro');
  tarjetas.forEach(tarjeta => {
    tarjeta.classList.toggle('oscuro');
  });
  if (imgGalgos.src.includes("negro")) {
    imgGalgos.src = "images/Galgos_blanco.webp";
  } else {
    imgGalgos.src = "images/Galgos_negro.webp";
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

const popup = document.getElementById("cookies");
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

  if(seccionTop < ventanaAltura - 80){
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

/*Ajustar posición botones y flechas Slider*/

const slider = document.querySelector('.slider');

function ajustarBotones(){
  const tarjetaVisible = document.querySelector('input:checked + .slide .tarjeta');
  if (tarjetaVisible){
    slider.style.height = tarjetaVisible.offsetHeight + 50 + "px";
  }
}

ajustarBotones();

window.addEventListener("load", ajustarBotones);
window.addEventListener("resize", ajustarBotones);
const botones = document.getElementsByName('boton-radio');
botones.forEach(boton => {
  boton.addEventListener("click", ajustarBotones);
});

function ajustarFlechas(){
  const imagen = document.querySelector('.tarjeta img');
  const flechas = document.querySelectorAll('.botones-laterales label span');
  const alturaImagen = imagen.clientHeight;

  flechas.forEach(span => {
    span.style.top = ((alturaImagen/2) - 40) + 'px';
  });
}

ajustarFlechas();

window.addEventListener("load", ajustarFlechas);
window.addEventListener("resize", ajustarFlechas);