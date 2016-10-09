/**
 * Realizado por Antonio Luque Bravo
 */

 function muestraOculta(numero) {
	// Recoge el párrafo con el id que corresponde a ese enlace 
	// (el que se va a ocultar/mostrar)
	var parrafo = document.getElementById("contenidos_"+numero);
	
	// Recoge el enlace con el id que corresponde a éste
	// (al que se le hará click)
	var enlace = document.getElementById("enlace_"+numero);

	// Si el párrafo está oculto, se muestra
	if (parrafo.style.display == "none") {
		parrafo.style.display = "block";
		enlace.innerHTML = "Ocultar contenidos"; // se cambia el texto del enlace
	}
	// Si el párrafo está visible, se oculta
	else {
		parrafo.style.display = "none"; // se oculta
		enlace.innerHTML = "Mostrar contenidos"; // se cambia el texto del enlace
	}
}