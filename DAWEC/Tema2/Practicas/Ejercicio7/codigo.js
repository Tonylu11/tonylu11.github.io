/**
 * Realizado por Antonio Luque Bravo
 */
{
	let numero = prompt("Introduzca un número y calcularé su factorial.");
	if (isNaN(numero)) {
		alert("Lo que has introducido no es un número.");
	}else {
		let factorial = 1;
		for (let i = numero; i >= 1; i--)
			factorial*=i;
		alert("El factorial de " + numero + " es: " + factorial);
	}
}
