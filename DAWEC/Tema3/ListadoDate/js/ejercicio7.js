/**
 * 7.Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no.
 * En caso de que el argumento no sea una fecha, que salte una excepción.
 * Admitirá tantos parámetros como el constructor Date().
 * Pruébalo con varias invocaciones fallidas (y capturadas)
 * Realizado por Antonio Luque Bravo
*/
{
	let esBisiesto = function (fecha) {
		if (fecha instanceof Date){
			let anio = fecha.getFullYear();
			if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
				return "es bisiesto";
			return "no es bisiesto";
		}
			throw "CAPTURADA! (" + fecha + ") no es una fecha..";
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4></h4>";
		try {
			texto.innerHTML += "<h4>esBisiesto(new Date(2016,10,11,20,15,23)), el año 2016: " + esBisiesto(new Date(2016,10,11,20,15,23)) + "</h4>";
		} catch(e) {
			alert(e);
		}
		try {
			texto.innerHTML += "<h4>esBisiesto(new Date(2015,10,11,20,15,23)), el año 2015: " + esBisiesto(new Date(2015,10,11,20,15,23)) + "</h4>";
		} catch(e) {
			alert(e);
		}
		try {
			texto.innerHTML += "<h4>esBisiesto('no soy una fecha'): " + esBisiesto('no soy una fecha') + "</h4>";
		} catch(e) {
			alert(e);
		}
		try {
			texto.innerHTML += "<h4>esBisiesto(123): " + esBisiesto(123) + "</h4>";
		} catch(e) {
			alert(e);
		}
		try {
			texto.innerHTML += "<h4>esBisiesto([]): " + esBisiesto([]) + "</h4>";
		} catch(e) {
			alert(e);
		}
 	}
	window.onload= init;
}