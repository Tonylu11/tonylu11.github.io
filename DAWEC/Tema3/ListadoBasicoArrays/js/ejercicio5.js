/*
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let devuelveArgumentosArray = function () {
		let array = [];
		for (var i = 0; i < arguments.length; i++) {
			array.push(arguments[i]);
		}
		return array.forEach(formatearArray);
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "devuelveArgumentosArray(\"Esto\",\"son\",\"argumentos\",\"que\",\"introduciremos\",\"en\",\"un\",\"array\"); :"
		devuelveArgumentosArray("Esto","son","argumentos","que","introduciremos","en","un","array");
	}
	window.onload= init;
}