/**
 * 15. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
 * secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
 * (menor que 1), que lo indique.
 * Realizado por Antonio Luque Bravo
*/
{
	let mensaje = "";
	numero = Number(prompt(
		"Dame un número e indicaré la secuencia desde 1 hasta el número introducido."));
		if (!isNaN(numero)){
			if (numero > 0){
				for (var i = 1; i <= numero; i++)
					mensaje += " " + i;
				console.log("Secuencia desde 1 hasta " + numero + ":"+ mensaje);
			}else 
				console.log("No se puede generar la secuencia.");
		}
		else{ 
			console.log("No se puede generar la secuencia.");
		}
	
}