/*
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let init = function () {
		let texto = document.getElementById("texto");
		let array = ["Esto" , "es" , "un" , "ejemplo", "con el" , "método", "forEach"];
		texto.innerHTML = "<p>El método forEach posee tres argumentos: element(valor del elemento), index(indice del elemento) y array(array que está siendo recorrido)</p>";
 		array.forEach(formatearArray);
 	}
	
	window.onload= init;
}