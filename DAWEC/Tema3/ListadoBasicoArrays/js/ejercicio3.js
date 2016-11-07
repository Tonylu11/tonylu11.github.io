/*
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * Realizado por Antonio Luque Bravo
*/
{	
	let init = function () {
		let texto = document.getElementById("texto");
		let array = ["Esto" , "es" , "un" , "ejemplo", "ejercicio",2];
		texto.innerHTML += "<h3>Esta función te indica si lo que pasas por parametro es un array (true) o no (false)</h3>";
		texto.innerHTML += "<p>Array.isArray(array): " + Array.isArray(array) + "</p>";
		texto.innerHTML += "<p>Array.isArray(\"hola soy una cadena\"): " + Array.isArray("hola soy una cadena");
		texto.innerHTML += "<p>Array.isArray(1234): " + Array.isArray(1234) + "</p>";
	}
	
	window.onload= init;
}