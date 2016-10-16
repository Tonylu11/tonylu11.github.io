/**
 * 17. Implementa PiramideDos que mediante un bucle for visualice una pirámide del
 * siguiente tipo:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 123456
 * 1234567
 * 12345678
 * 123456789
 * 1234567890
 * Realizado por Antonio Luque Bravo
*/
{
	document.open();
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= i; j++) {
			if (j == 10) {
				document.write("0 ");
			}else {
				document.write(j + " ");
			}
		}
		document.write("<br/>");
	}
	document.close();
}