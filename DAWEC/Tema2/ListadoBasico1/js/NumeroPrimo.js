/**
 * 4. Implenta NumeroPrimo que pida un número e indique si es primo o no.
 * Realizado por Antonio Luque Bravo
*/
{
	let numero = prompt("Introduce un número, te diré si es primo o no.");
	if (!isNaN(numero)) {
		if(calcularSiPrimo(numero)){
			console.log("El número introducido es primo");
		}else {
			console.log("El número introducido no es primo");
		}
	}
	function calcularSiPrimo(numero) {
		let i = 2;
		while (i * i <= numero) {
			if (numero % i == 0) {
				return false;
			}
			return i++;
		}
		return true;
	}
}