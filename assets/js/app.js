'use strict'

// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#to-up");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Carrusel con glider
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carrusel__indicadores',
		arrows: {
			prev: '.carrusel__anterior',
			next: '.carrusel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			  }
			},{
			  breakpoint: 480,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			  }
			}
		]
	});
});