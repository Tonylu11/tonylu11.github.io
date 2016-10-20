/**
 * Realizado por Antonio Luque Bravo
 */
{
	let enlaces = document.getElementsByTagName('a');
	let penultimoEnlace = enlaces[enlaces.length-2].href;

	alert("Hay " + enlaces.length + " enlaces en la página.")
	alert("La dirección a la que enlaza el penúltimo enlace es: " + penultimoEnlace);

	let contador = 0;
	for (let i = 0; i < enlaces.length; i++) {
		if (enlaces[i].href == 'http://prueba/') {
			contador++;
		}
	}

	alert("Hay " + contador + " enlaces que enlazan a http://prueba/");

	let parrafos = document.getElementsByTagName('p');
	let enlace = parrafos[2].getElementsByTagName('a');

	alert("Hay " + enlace.length + " enlaces en el tercer párrafo.");
}