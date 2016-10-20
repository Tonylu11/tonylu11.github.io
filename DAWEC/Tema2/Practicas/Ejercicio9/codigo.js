/**
 * Realizado por Antonio Luque Bravo
 */
{
	let cadena = prompt("Introduzca una frase:")
	let mayusculasMinusculas = function (cadena) {
		if (cadena === cadena.toUpperCase())
			return "La cadena está formada sólo por mayúsculas.";
		else if (cadena === cadena.toLowerCase())
			return "La cadena está formada sólo por minúsculas.";	
		else
			return "La cadena está formada por máyusculas y minúsculas.";
	}
	alert(mayusculasMinusculas(cadena));
}
