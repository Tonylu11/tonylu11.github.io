/**
 * Realizado por Antonio Luque Bravo
 */
 function anade() {
	var lista = document.getElementById("lista");

	var articuloNuevo = document.createElement("li");

	var textoElementoNuevo = document.createTextNode(
		(prompt("Introduce el contenido del nuevo elemento de la lista:")));

	articuloNuevo.appendChild(textoElementoNuevo);

	lista.appendChild(articuloNuevo);
 }