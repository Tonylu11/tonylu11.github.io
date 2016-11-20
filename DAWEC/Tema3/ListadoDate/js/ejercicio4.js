/**
 * 4.Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
 * Realizado por Antonio Luque Bravo
*/
{
	let esFecha = function (argumento) {
		return argumento instanceof Date;
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4>¿El parámetro introducido es una Fecha?: esFecha(new Date('20 Oct, 2013 15:10:53')): " + esFecha(new Date('20 Oct, 2013 15:10:53')) + "</h4>";
		texto.innerHTML += "<h4>¿El parámetro introducido es una Fecha?: esFecha('20 Oct, 2013 15:10:53'): " + esFecha('20 Oct, 2013 15:10:53') + "</h4>";
		texto.innerHTML += "<h4>¿El parámetro introducido es una Fecha?: esFecha(Date.now()): " + esFecha(Date.now()) + "</h4>";
		texto.innerHTML += "<h4>¿El parámetro introducido es una Fecha?: esFecha([]): " + esFecha([]) + "</h4>";
 	}
	window.onload= init;
}