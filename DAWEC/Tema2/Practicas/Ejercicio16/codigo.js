/**
 * Realizado por Antonio Luque Bravo
 */

function informacion(elEvento) {
	var evento = elEvento || window.event; 

	// Coordenadas X e Y del evento (ratón en este caso)
	var coordenadaX = evento.clientX;
	var coordenadaY = evento.clientY;

	// Dimensiones de la ventana del navegador
	var dimensiones = tamanoVentanaNavegador();
	var tamanoX = dimensiones[0];
	var tamanoY = dimensiones[1];

	// Posiciones Horizontal y Vertical (las que se indicarán)
	var posicionHorizontal = "";
	var posicionVertical = "";

	// Si la coordenada X del ratón es mayor que la mitad de la dimensión X de la ventana (horizontal)
	if(coordenadaX > tamanoX/2) { 
		posicionHorizontal = "derecha"; // Está a la derecha
	}
	
	else {
		posicionHorizontal = "izquierda"; // Sino, está a la izquierda
	}

	// Si la coordenada Y del ratón es mayor que la mitad de la dimensión Y de la ventana (vertical)
	if(coordenadaY > tamanoY/2) {
		posicionVertical = "abajo"; //Está abajo
	}
	
	else {
		posicionVertical = "arriba"; // Sino, está arriba
	}

	muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}

// Muestra el texto informativo
function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

// Haya la dimensión de la ventana del navegador
function tamanoVentanaNavegador(){ 
	var dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number') {
		// No es IE
		dimensiones = [window.innerWidth, window.innerHeight];
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6 en modo estandar (no quirks)
		dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		//IE en modo quirks
		dimensiones = [document.body.clientWidth, document.body.clientHeight];
	}
	
	return dimensiones;
}

// Tal cual
document.onclick = informacion;		