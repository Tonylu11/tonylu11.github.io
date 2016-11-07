/*
 * Crea  una función que cree un array de la dimensión indicada,
 * cuyo contenido sean los números naturales comenzando desde 0
 * Realizado por Antonio Luque Bravo
*/
{	
	let init = function () {
		let texto = document.getElementById("texto");
		let dimension = prompt("Dime la dimensión del array.");
		crearArrayConDimensionDada(dimension);
	}
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let crearArrayConDimensionDada = function (dimension) {
		if (isNaN(dimension) || dimension <0) {
			throw "La dimension es errónea.";
		}

		let array = new Array(dimension);
		for (let i = 0; i < dimension; i++) {
			array[i] = i;
		}
		texto.innerHTML += "<p>Array de dimensión " + dimension + ": ";
		array.forEach(formatearArray) + "</p>";

	}
	window.onload= init;
}