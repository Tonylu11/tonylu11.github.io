/*
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * Realizado por Antonio Luque Bravo
*/
{	
	let init = function () {
		let texto = document.getElementById("texto");
		let array = ["Esto" , "es" , "un" , "ejemplo", "ejercicio",2];
		texto.innerHTML += "<h2>El operador in devuelve true si la propiedad especificada está en el objeto especificado."
		texto.innerHTML += "<p>¿El array (" + array + ") contiene la propiedad \"length\"?</p>";
		texto.innerHTML +="\"length\" in array: "  +  ("length" in array);
	}
	
	window.onload= init;
}