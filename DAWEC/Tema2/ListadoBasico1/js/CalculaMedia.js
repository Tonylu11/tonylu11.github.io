/**
 * 14. Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
 * Entonces, que muestre la media.
 * Realizado por Antonio Luque Bravo
*/
{
	let contador = 0;
	let media = 1;
	let numero = 0;
	let total = 0;
	do{
		numero = Number(prompt(
			"Introduce números positivos, pararé cuando introduzcas un número negativo."));
		if (!isNaN(numero)){
			if (numero < 0)
				break;
			else{
				total+=numero;
				contador++;
			}
		}
		else
			console.log("Introduce un número.");
	} while (numero>0);
	media = total/contador;
	console.log("La media de todos los números introducidos es: " + media);
}