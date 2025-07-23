/*Modo Oscuro*/
const boton = document.getElementById("toogleTema");
const botonToggle = document.querySelector('.boton-toggle');
const seccionPrincipal = document.querySelector('.seccion-principal');

boton.addEventListener("click", oscuro);

function oscuro(){
  seccionPrincipal.classList.toggle("oscuro");
  botonToggle.classList.toggle("oscuro");
}

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