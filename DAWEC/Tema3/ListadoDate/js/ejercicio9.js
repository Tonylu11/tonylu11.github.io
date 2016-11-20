/**
 * 9.Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * Realizado por Antonio Luque Bravo
*/
{
	let calcularHastaFinDeAnno = function () {
		let fechaActual = new Date();
		let finDeAnno = new Date(fechaActual.getFullYear(),11,31);
		return Number.parseInt((finDeAnno-fechaActual)/1000/60/60/24);
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4>Días que quedan para fin de año: " + calcularHastaFinDeAnno() + "</h4>";
 	}
	window.onload= init;
}