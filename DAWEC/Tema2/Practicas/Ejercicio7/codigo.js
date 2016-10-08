/**
 * Realizado por Antonio Luque Bravo
 */
var numero = prompt("Introduzca un número y calcularé su factorial.");
var factorial = 1;
for (var i = numero; i >= 1; i--)
	factorial*=i;
alert("El factorial de " + numero + " es: " + factorial);
