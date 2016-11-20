/**
 * 3.Indica el formato del parámetro cadena del método Date.parse().
 * Realizado por Antonio Luque Bravo
*/
{
	let formatoFechaConDateParse = function () {
		let date = Date.parse("20 Oct, 2016 20:50:12");
		return "<h4>El método de clase Date.parse(formato) contiene el siguiente formato, <i>Date.parse(dd mmm, yyyy hh:mm:ss)</i> donde:</h4>"
		 + "<ul>"
		 + "	<li>dd es el día numérico</li>"
		 + "	<li>mmm las tres primeras letras del mes en inglés</li>"
		 + "	<li>yyyy el año numérico</li>"
		 + "	<li>hh las horas</li>"
		 + "	<li>mm los minutos</li>"
		 + "	<li>ss los segundos</li>"
		 + "</ul>"
		 + "<h4>Con estos valores Date.parse('20 Oct, 2016 20:50:12') saldrían estos milisegundos: " + date + " ms</h4>"; 
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += formatoFechaConDateParse();
 	}
	window.onload= init;
}