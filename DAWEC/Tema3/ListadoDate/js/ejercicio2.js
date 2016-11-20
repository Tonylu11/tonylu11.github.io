/**
 * 2.Indica la utilidad de Date.now();
 * Realizado por Antonio Luque Bravo
*/
{
	let probandoDateNow = function () {
		let date = Date.now();
		return "<h4>Usando Date.now(), es un método de clase que nos permite colocar "
		 + "la fecha en la que nos encontramos en este momento pero nos la muestra en milisegundos desde el 1 de Enero de 1970: " + date + " ms</h4>"; 
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += probandoDateNow();
 	}
	window.onload= init;
}