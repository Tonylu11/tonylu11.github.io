/**
 * 6. Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
 * mayor.
 * Realizado por Antonio Luque Bravo
*/
{
	let numero1= Number(prompt("Dame un primer número"));
	let numero2= Number(prompt("Dame un segundo número"));
	let numero3= Number(prompt("Dame un tercer número"));
	if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
		if (numero1 > numero2 && numero1 > numero3) {
			if (numero2 > numero3)
				console.log(numero3 + " < " + numero2 + " < " + numero1);
			else
				console.log(numero2 + " < " + numero3 + " < " + numero1);
		}else if (numero2 > numero1 && numero2 > numero3) {
			if (numero1 > numero3)
				console.log(numero3 + " < " + numero1 + " < " + numero2);
			else
				console.log(numero1 + " < " + numero3 + " < " + numero2);
		}else if (numero3 > numero1 && numero3 > numero2) {
			if (numero1 > numero2)
				console.log(numero2 + " < " + numero1 + " < " + numero3);
			else
				console.log(numero1 + " < " + numero2 + " < " + numero3);
		}
	}
}