/*
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let devuelveArgumentosArray = function () {
		let array = [];
		for (let i = 0; i < arguments.length; i++) {
			if (Array.isArray(arguments[i])) {
				let arrayArg = arguments[i];
				for (let i = 0; i < arrayArg.length; i++) {
					array.push(arrayArg[i]);
				}
			}else{
				array.push(arguments[i]);
			}
		}
		return array.forEach(formatearArray);
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "devuelveArgumentosArray(\"Esto\",\"son\",\"argumentos\",\"que\",\"introduciremos\",\"en\",\"un\",[\"array\",\"dentro\" ,\"de\", \"otro\",\"array\"]); :";
		devuelveArgumentosArray("Esto","son","argumentos","que","introduciremos","en","un",["array","dentro" ,"de", "otro","array"]);
	}
	window.onload= init;
}