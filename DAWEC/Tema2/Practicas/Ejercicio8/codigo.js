/**
 * Realizado por Antonio Luque Bravo
 */
var numero = prompt("Introduzca un número:")
if (isNaN(numero))
	alert("El valor " + numero + " no es un número");
else
	if (esParImpar(numero)) {
		alert("El número introducido: " + numero + " es par");
	}
function esParImpar(numero) {
	let resto = numero % 2;
	if (resto == 0)
		return true;
	return false;
}