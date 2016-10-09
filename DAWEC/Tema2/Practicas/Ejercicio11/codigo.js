/**
 * Realizado por Antonio Luque Bravo
 */

var enlaces = document.getElementsByTagName('a');
var penultimoEnlace = enlaces[enlaces.length-2].href;

alert("Hay " + enlaces.length + " enlaces en la página.")
alert("La dirección a la que enlaza el penúltimo enlace es: " + penultimoEnlace);

var contador = 0;
for (var i = 0; i < enlaces.length; i++) {
	if (enlaces[i].href == 'http://prueba/') {
		contador++;
	}
}

alert("Hay " + contador + " enlaces que enlazan a http://prueba/");

var parrafos = document.getElementsByTagName('p');
var enlace = parrafos[2].getElementsByTagName('a');

alert("Hay " + enlace.length + " enlaces en el tercer párrafo.")