/**
 * 6.Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual
 * o de la fecha indicada (similar al constructor)
 * Realizado por Antonio Luque Bravo
*/
{
	let diaDeLaSemana = function (dia, mes, anno, horas, minutos, segundos) {
		let fecha = new Date(anno,mes-1,dia,horas,minutos,segundos);
		let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
		return diasSemana[fecha.getDay()];
	}
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<h4>let diaDeLaSemana = function (dia, mes, anno, horas, minutos, segundos)</h4>";
		texto.innerHTML += "<h4>diaDeLaSemana(10,11,2016,19,22,10): " + diaDeLaSemana(10,11,2016,19,22,10) + " </h4>";
 	}
	window.onload= init;
}