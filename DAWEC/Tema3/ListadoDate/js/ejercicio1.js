/**
 * 1.¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * Realizado por Antonio Luque Bravo
*/
{
	let usandoConstructor1 = function () {
		let date = new Date();
		return "<h4>Usando new Date(), te muestra la fecha actual del sistema: " + date + "</h4>";

	}
	let usandoConstructor2 = function () {
		let date = new Date(36000);
		return "<h4>Usando new Date(milisegundos), te muestra la fecha equivalente" 
		 + " a los milisegundos que le pases por parámetro: new Date(36000) -  " + date + "</h4>";

	}
	let usandoConstructor3 = function () {
		let date = new Date("9 Aug,2016 20:50");
		return "<h4>Usando new Date('9 Aug,2016 20:50'), te muestra la fecha contenida"
		+ " en la cadena que le pasas por parámetro: " + date + "</h4>";

	}
	let usandoConstructor4 = function () {
		let date = new Date(2016,11,15,18,16,50);
		return "<h4>Usando new Date(año,mes,dia,[hora,minutos,segundos,milisegundos]): new Date(2016,11,15,18,16,50) -  " + date + "</h4>";

	}
	let init = function () {
		let texto = document.getElementById("texto");
		// Date()
		texto.innerHTML += usandoConstructor1() + "</br>";
		// Date(ms)
		texto.innerHTML += usandoConstructor2() + "</br>";
		// Date(cadenaFecha)
		texto.innerHTML += usandoConstructor3() + "</br>";
		// Date(año,mes,dia,[hora,minutos,segundos,milisegundos]);
		texto.innerHTML += usandoConstructor4() + "</br>";
 	}
	window.onload= init;
}