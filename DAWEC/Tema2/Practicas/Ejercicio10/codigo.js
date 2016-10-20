/**
 * Realizado por Antonio Luque Bravo
 */
{
	function calcularSiPalindromo(cadena){
		//Minuscula quita espacios y une la cadena.
		let cadenaQuitarEspacios = cadena.toLowerCase().split(" ").join("");
		//la rompe, le da la vuelta y la vuelve a unir.
		let cadenaInvertida = cadenaQuitarEspacios.split("").reverse("").join("");
		if(cadenaQuitarEspacios == cadenaInvertida)
			alert("Es un palíndromo.");
		else
			alert("No es un palíndromo.");
	}
	let cadena = prompt("Introduce una cadena y te diré si es palíndroma o no.");
	calcularSiPalindromo(cadena);	
}