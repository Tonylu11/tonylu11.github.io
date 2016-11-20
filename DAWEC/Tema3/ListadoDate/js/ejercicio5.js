/**
 * 5.Crea el método incrementaDias() que incremente/decremente los días indicados.
 * Admitirá como primer argumento un entero positivo/negativo que reperesente el número de días.
 * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date(). 
 * Realizado por Antonio Luque Bravo
*/
{
	let incrementaDias = function (numeroDias, dia, mes, anno, horas, minutos, segundos) {
		return new Date(anno,mes-1,dia+numeroDias,horas,minutos,segundos);
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4>Incrementa 10 días: incrementaDias(10,15,11,2016,20,30,25): " + incrementaDias(10,15,11,2016,20,30,25) + "</h4>";
		texto.innerHTML += "<h4>Incrementa 30 días: incrementaDias(30,15,11,2016,20,30,25): " + incrementaDias(30,15,11,2016,20,30,25) + "</h4>";
		texto.innerHTML += "<h4>Incrementa -70 días: incrementaDias(-70,15,11,2016,20,30,25): " + incrementaDias(-70,15,11,2016,20,30,25) + "</h4>";
		texto.innerHTML += "<h4>Incrementa 15 días a una fecha incorrecta: incrementaDias(30,30,15,-32,20,30,25): " + incrementaDias(30,30,15,-32,20,30,25) + "</h4>";
 	}
	window.onload= init;
}