/*
 * Crea una función que elimine todos los undefined de un array.
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let eliminarUndefinedArray = function () {
		let array = ["Este","array","contiene","algunos","elementos","undefined","como","este:",undefined];
		texto.innerHTML+="<br/>Array en cuestión: ";
		array.forEach(formatearArray);
		for (let i = 0; i < array.length; i++) {
			if (array[i] === undefined) {
				texto.innerHTML += "<br/>SE HA ELIMINADO UNDEFINED: " + delete array[i];
			}
		}
		return array.forEach(formatearArray);
		
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "eliminarUndefinedArray();";
		eliminarUndefinedArray();
	}
	window.onload= init;
}