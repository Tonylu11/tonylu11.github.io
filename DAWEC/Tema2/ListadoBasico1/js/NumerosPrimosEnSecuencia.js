/**
 * 5. Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
 * primos existen entre el 1 y dicho número
 * Realizado por Antonio Luque Bravo
*/
{
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
	let limite = prompt("Introduce un número que será el límite hasta donde encontraré los primos.");
	let mensaje = "Los números primos hasta " + limite + " son:";
	if (!isNaN(limite)) {
		for (var i = 2; i < limite; i++) {
			if (calcularSiPrimo(i)) {
				mensaje+=" " + i;
			};
		}
		console.log(mensaje);
	}
}