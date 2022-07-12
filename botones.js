const contenedor = document.querySelector(".cont_animacion");

function animacion1() {
  contenedor.classList.remove("inicial");
  contenedor.classList.remove("animacion_2");
  contenedor.classList.add("animacion_1");
}

function animacion2() {
  contenedor.classList.remove("inicial");
  contenedor.classList.remove("animacion_1");
  contenedor.classList.add("animacion_2");
}
