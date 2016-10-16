/**
 * 3. Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de
 * 5.
 * Realizado por Antonio Luque Bravo
 */
for (let i = 0; i <=6; i++) {
	let numero = prompt("Introduce un número y te dire si es múltiplo de 5 o no.");
	if (!isNaN(numero)) {
		if (numero % 5 == 0) {
			console.log(numero + " es múltiplo de 5");
		}else {
			console.log(numero + " no es múltiplo de 5");
		}
	}else {
		console.log(numero + " no es un número");
		i--;
	}
}