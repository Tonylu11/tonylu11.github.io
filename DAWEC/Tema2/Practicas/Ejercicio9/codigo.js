/**
 * Realizado por Antonio Luque Bravo
 */
var cadena = prompt("Introduzca una frase:")
function mayusculasMinusculas(cadena) {
	if (cadena === cadena.toUpperCase())
		return "La cadena está formada sólo por mayúsculas.";
	else if (cadena === cadena.toLowerCase())
		return "La cadena está formada sólo por minúsculas.";	
	else
		return "La cadena está formada por máyusculas y minúsculas.";
}
alert(mayusculasMinusculas(cadena));
