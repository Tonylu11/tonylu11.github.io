/**
 * 7. Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
 * a. Cuántas cifras tiene (7 cifras)
 * b. Lo muestre del revés
 * Realizado por Antonio Luque Bravo
*/
{
	let numero = prompt("Introduce un número y te dire cuantas cifras tiene y le daré la vuelta:");
	if (numero>0 && numero<10) {
		console.log("Número de cifras del número introducido: " + numero.length);
		console.log("Número al revés: " + numero.split("").reverse().join(""));
	}else
		console.log("El número introducido tiene que estar entre 0 y 10");
}