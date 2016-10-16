/**
 * 11. Implementa MediaPositivos que calcule la media de una serie de números positivos,
 * introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
 * Realizado por Antonio Luque Bravo
*/
{
	let contador = 0;
	let media = 1;
	let numero = 0;
	let total = 0;
	do{
		numero = Number(prompt(
			"Introduce números para hacer su media, dejaré de leer cuando introduzcas un cero."));
		if (!isNaN(numero) && numero >= 0) {
			total+=numero;
			contador++;
		}else{
			console.log("Introduce un número positivo y correcto.");
		} 
	} while (numero!=0);
	media = total/contador;
	console.log("La media de los números introducidos es: " + media);
}