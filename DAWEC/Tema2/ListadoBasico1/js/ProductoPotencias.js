/**
 * 13. Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
 * 2 entre 0 y 10.
 * Realizado por Antonio Luque Bravo
*/
{
	let resultado = 1;
	for (let i = 0; i <= 10; i++) {
		console.log("2 elevado a " + i + " = " + Math.pow(2, i));
		resultado *= Math.pow(2, i);
	}
	console.log("Resultado del producto de las potencias: " + resultado);
}