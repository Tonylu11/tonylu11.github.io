/**
 * Realizado por Antonio Luque Bravo
 */
function informacion(elEvento) {
	var evento = elEvento || window.event; 

	var x = evento.clientX;
	var y = evento.clientY;

	var dimensiones = tamanoVentanaNavegador();
	var dimensionX = dimensiones[0];
	var dimensionY = dimensiones[1];

	var posicionHorizontal = "";
	var posicionVertical = "";

	if(x > tamanoX/2) { 
		posicionHorizontal = "derecha";
	}
	
	else {
		posicionHorizontal = "izquierda";
	}

	if(y > tamanoY/2) {
		posicionVertical = "abajo";
	}
	
	else {
		posicionVertical = "arriba";
	}

	muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}

function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

function tamanoVentanaNavegador(){ 
	var dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number')
		dimensiones = [window.innerWidth, window.innerHeight];
	return dimensiones;
}

document.onclick = informacion;		