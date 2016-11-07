/*
 * Indica la diferencia entre los siguientes métodos,
 * y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(),
 * Array.prototype.some() y Array.prototype.filter()
 * Realizado por Antonio Luque Bravo
*/
{	
	let formatearArray = function(element, index, array) {
		texto.innerHTML += "</br>array[" + index + "] = " + element;
	}
	let metodoForEach = function () {
		let array = [12, 5, 8, 130, 44];
		return array.forEach(formatearArray);
	}
	let metodoEvery = function () {
		function sonMayoresQueDiez(elemento, indice, array) {
  			return elemento >= 10;
		}
		let array = [12, 5, 8, 130, 44];
		let array2 = [12, 54, 18, 130, 44];
		texto.innerHTML += "<p>" + sonMayoresQueDiez + "</p>";
		texto.innerHTML += "<p>¿Son todos los elementos mayores que diez?:</p>"
		texto.innerHTML += "<p>Primer array:</p>";
		texto.innerHTML += "<p>[" + array + "]</p>";
		texto.innerHTML += array.every(sonMayoresQueDiez);
		texto.innerHTML += "<p>Segundo array: </p>";
		texto.innerHTML += "<p>[" + array2 + "]</p>";
		texto.innerHTML += array2.every(sonMayoresQueDiez);
	}
	let metodoSome = function () {
		function sonMayoresQueDiez(elemento, indice, array) {
  			return elemento >= 10;
		}
		let array = [1, 5, 8, 7, 0];
		let array2 = [12, 54, 18, 130, 44];
		texto.innerHTML += "<p>" + sonMayoresQueDiez + "</p>";
		texto.innerHTML += "<p>¿Hay algún elemento mayor que diez?:</p>"
		texto.innerHTML += "<p>Primer array: </p>";
		texto.innerHTML += "<p>[" + array + "]</p>";
		texto.innerHTML += array.some(sonMayoresQueDiez);
		texto.innerHTML += "<p>Segundo array: </p>";
		texto.innerHTML += "<p>[" + array2 + "]</p>";
		texto.innerHTML += array2.some(sonMayoresQueDiez);
	}
	let metodoFilter = function () {
		let arrayHeterogeneo = ["esto es una cadena", 1, 55.315, "y esto otra cadena"];
		texto.innerHTML += "<p>Mostrando Array....: (" + arrayHeterogeneo + ")</p>";
		texto.innerHTML += "<p>Ahora pasarán el filtro aquellos que sean Number con el método nombreArray.filter(Number) en este caso...</p>";
		let elementosFiltrados = arrayHeterogeneo.filter(Number);
		texto.innerHTML += "<p>Han pasado el filtro los siguientes elementos: [" + elementosFiltrados + "]</p>";
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<p>El método forEach() ejecuta la función indicada una vez por cada elemento del array.</p>";
		texto.innerHTML += "<p>El método every() verifica si todos los elementos en el array pasan la prueba implementada por la función dada.</p>";
		texto.innerHTML += "<p>El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada.</p>";
		texto.innerHTML += "<p>El metodo filter() crea un nuevo array con todos los elementos que pasen la prueba implementada por la función dada.</p>";
		texto.innerHTML += "<h3>Método forEach():</h3>";
		metodoForEach();
		texto.innerHTML += "<h3>Método every():</h3>";
		metodoEvery();
		texto.innerHTML += "<h3>Método some():</h3>";
		metodoSome();
		texto.innerHTML += "<h3>Método filter():</h3>";
		metodoFilter();
	}
	window.onload = init;
}