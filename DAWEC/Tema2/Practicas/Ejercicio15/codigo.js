/**
 * Realizado por Antonio Luque Bravo
 */
{
	let informacion = function (elEvento) {
		// Recogemos el evento en una variable
		let evento = elEvento;
		// Según el tipo de evento
		switch(evento.type) {
			case 'mousemove': // Si se mueve el ratón
				document.getElementById('info').style.backgroundColor = '#FFFFFF'; // Cambia el color de fondo
				
				let coordenadaXrelativa, 
				coordenadaYrelativa, 
				coordenadaXabsoluta, 
				coordenadaYabsoluta; // Coordenadas X e Y
	
				coordenadaXabsoluta = evento.pageX; 
				coordenadaYabsoluta = evento.pageY;
				coordenadaXrelativa = evento.clientX; 
				coordenadaYrelativa = evento.clientY; 
			
				muestraInformacion(['Ratón', 
											 'Navegador ['+coordenadaXrelativa+', '+coordenadaYrelativa+']', 
											 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
				break;
			case 'keypress': // Si se presiona una tecla del teclado
				document.getElementById('info').style.backgroundColor = '#CCE6FF'; // Cambia el fondo de color
			
				let caracter = evento.charCode || evento.keyCode; // el carácter pulsado por teclado
			
				let letra = String.fromCharCode(caracter); // Letra del teclado que corresponde
			
				let codigo = letra.charCodeAt(0); // Código de esa letra
				
				muestraInformacion(['Teclado', 
											'Carácter ['+letra+']',
											'Código ['+codigo+']']);
				break;
			
			case 'click': // Si se hace click con el ratón
				document.getElementById('info').style.backgroundColor = '#FFFFCC'; // Cambia el fondo de color
				break;
		}
	}

	let muestraInformacion = function (mensaje) {
		document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
		
		for(let i=1; i<mensaje.length; i++) {
			document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
		}
	}
	
	document.onmousemove = informacion;

	document.onkeypress = informacion;
	 
	document.onclick = informacion;
}