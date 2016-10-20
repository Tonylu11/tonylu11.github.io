/**
 * Realizado por Antonio Luque Bravo
 */
 {
	function anade() {
		let lista = document.getElementById("lista");

		let articuloNuevo = document.createElement("li");

		let textoElementoNuevo = document.createTextNode(
			(prompt("Introduce el contenido del nuevo elemento de la lista:")));

		articuloNuevo.appendChild(textoElementoNuevo);

		lista.appendChild(articuloNuevo);
	}
 }