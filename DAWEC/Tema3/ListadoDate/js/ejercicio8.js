/**
 * 8.Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.
 * En caso de tener menos de un año, indicar días y meses transcurridos.
 * Indicar errores.
 * Realizado por Antonio Luque Bravo
*/
{
	let calcularEdad = function (fecha) {
		if (fecha instanceof Date) {
			let fechaActual = new Date();
			let edad = parseInt((fechaActual -fecha)/365/24/60/60/1000);
			return "Tienes " + edad + " años y tu fecha de nacimiento es: " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
		}
		throw "La fecha no es correcta";
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4>calcularEdad(new Date(1996,11,12)): " + calcularEdad(new Date(1996,11,12)) + "</h4>";
		try {
			texto.innerHTML += "<h4>calcularEdad('aaa')</h4>" + calcularEdad('aaa');
		} catch(e) {
			alert(e);
		}
 	}
	window.onload= init;
}