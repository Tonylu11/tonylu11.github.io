/**
 * 19. Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas. 
 * Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.
 * Realizado por Antonio Luque Bravo
*/
{
	document.open();
	for (let i = 1; i <= 100; i++) {
			if (i % 7 == 0 || /^[0-9]+7$/.test(i)) {
				document.write("<br/>" + i + ", ");
			}else if (i == 100) {
				document.write(i + ".");
			}
			else {
				document.write(i + ", ");
			}
	}
	document.close();
}