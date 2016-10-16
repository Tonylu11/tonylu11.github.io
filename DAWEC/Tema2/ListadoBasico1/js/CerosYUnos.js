/**
 * 12. Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
 * de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
 * Realizado por Antonio Luque Bravo
*/
{
	let contador = 0;
	let numero;
	do{
		numero = Number(prompt(
			"Introduce ceros y unos, pararé cuando introduzcas un dos."));
		if (!isNaN(numero)){
			if (numero == 0) 
				contador++;
		}
		else
			console.log("Introduce un número.");
	} while (numero!=2);
	console.log("Número de ceros introducidos: " + contador);
}