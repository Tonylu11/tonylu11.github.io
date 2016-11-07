/*
 * Averigua qué método es el más eficiente para manejarse con arrays.
 *  Compruébalo mediante performance.now() o similares
 * Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let annadirConPush = function () {
		let array = [];
		for (var i = 0; i < 10; i++) {
			array.push(i);
		}
	}
	let annadirConUnshift = function () {
		let array = [];
		for (var i = 0; i < 10; i++) {
			array.unshift(i);
		}
	}
	let annadirDirectamente = function () {
		let array = [0,1,2,3,4,5,6,7,8,9];
	}
	let annadirFijandoTamanno = function () {
		let array = new Array(0,1,2,3,4,5,6,7,8,9);
	}
	let eliminarConPop = function () {
		let array = [0,1,2,3,4,5,6,7,8,9];
		for (var i = 0; i < array.length; i++) {
			array.pop(i);
		}
	}
	let eliminarConShift = function () {
		let array = [0,1,2,3,4,5,6,7,8,9];
		for (var i = 0; i < array.length; i++) {
			array.shift(i);
		}
	}
	let eliminarDirectamente = function () {
		let array = [0,1,2,3,4,5,6,7,8,9];
		array = [];
	}
	let eliminarFijandoTamanno = function () {
		let array = new Array(0,1,2,3,4,5,6,7,8,9);
		array = new Array();
	}
	
	let init = function () {
		let texto = document.getElementById("texto")
		
		//PUSH----------------------------------------------------
		texto.innerHTML += "<h3>Añadiendo al array con push():</h3>";
		let antes = performance.now();
		annadirConPush();
		let despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por push para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//UNSHIFT----------------------------------------------------
		texto.innerHTML += "<h3>Añadiendo al array con unshift():</h3>";
		antes = performance.now();
		annadirConUnshift();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por unshift para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//DIRECTAMENTE----------------------------------------------------
		texto.innerHTML += "<h3>Añadiendo al array directamente:</h3>";
		antes = performance.now();
		annadirDirectamente();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por añadir directamente para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//FIJANDO TAMAÑO CON NEW ARRAY----------------------------------------------------
		texto.innerHTML += "<h3>Añadiendo al array estableciendo el tamaño al inicio:</h3>";
		antes = performance.now();
		annadirFijandoTamanno();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por fijar el tamaño para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//POP---------------------------------------------------
		texto.innerHTML += "<h3>Eliminando del array con pop():</h3>";
		antes = performance.now();
		eliminarConPop();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por pop() para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//SHIFT----------------------------------------------------
		texto.innerHTML += "<h3>Eliminando del array con shift():</p>";
		antes = performance.now();
		eliminarConShift();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por shift() para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//DIRECTAMENTE----------------------------------------------------
		texto.innerHTML += "<h3>Eliminando del array directamente:</h3>";
		antes = performance.now();
		eliminarDirectamente();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por eliminar directamente para realizar la acción: " + (despues-antes) + " ms</p>";
		
		//FIJANDO TAMAÑO----------------------------------------------------
		texto.innerHTML += "<h3>Eliminando del array estableciendo el tamaño al inicio:</h3>";
		antes = performance.now();
		eliminarFijandoTamanno();
		despues = performance.now();
		texto.innerHTML += "<p>Tiempo tomado por fijar el tamaño para realizar la acción: " + (despues-antes) + " ms</p>";
	}
	window.onload = init;
}