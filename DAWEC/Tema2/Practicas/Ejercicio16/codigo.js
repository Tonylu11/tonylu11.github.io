/**
 * Realizado por Antonio Luque Bravo
 */
{
	function informacion(elEvento) {
		let evento = elEvento || window.event; 

		// Coordenadas X e Y del evento (ratón en este caso)
		let coordenadaX = evento.clientX;
		let coordenadaY = evento.clientY;

		// Dimensiones de la ventana del navegador
		let dimensiones = tamanoVentanaNavegador();
		let tamanoX = dimensiones[0];
		let tamanoY = dimensiones[1];

		// Posiciones Horizontal y Vertical (las que se indicarán)
		let posicionHorizontal = "";
		let posicionVertical = "";

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
		
		for(let i=1; i<mensaje.length; i++) {
			document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
		}
	}

	// Haya la dimensión de la ventana del navegador
	function tamanoVentanaNavegador(){ 
		let dimensiones = [];
		if(typeof(window.innerWidth) == 'number') 
			dimensiones = [window.innerWidth, window.innerHeight];
		return dimensiones;
	}

	// Tal cual
	document.onclick = informacion;		
}