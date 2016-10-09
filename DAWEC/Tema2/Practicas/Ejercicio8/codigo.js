/**
 * Realizado por Antonio Luque Bravo
 */
var numero = prompt("Introduzca un número:")
if (!/^(\d)*$/.test(numero))
	alert("El valor " + numero + " no es un número");
else
	alert(esParImpar(numero));
function esParImpar(numero) {
	let resto = numero % 2;
	if (resto == 0)
		return "El número  introducido es par.";
	return "El número es impar.";
}