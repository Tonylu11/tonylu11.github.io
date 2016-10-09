/**
 * Realizado por Antonio Luque Bravo
 */

function informacion(elEvento) {
	// Recogemos el evento en una variable
	var evento = elEvento || window.event;
	
	// Según el tipo de evento
	switch(evento.type) {
		case 'mousemove': // Si se mueve el ratón
			document.getElementById('info').style.backgroundColor = '#FFFFFF'; // Cambia el color de fondo
			
			var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
			
			var coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta; // Coordenadas X e Y
			
			if (ie) { // Si es IE
			    if(document.documentElement && document.documentElement.scrollTop){ 
				    coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
				    coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
			    }
			    else { 
				    coordenadaXabsoluta = evento.clientX + document.body.scrollLeft;
				    coordenadaYabsoluta = evento.clientY + document.body.scrollTop;
			    }
			}
			
			else { // Otros navegadores
			    coordenadaXabsoluta = evento.pageX; 
			    coordenadaYabsoluta = evento.pageY;
			}
			
			coordenadaXrelativa = evento.clientX; 
		
			coordenadaYrelativa = evento.clientY; 
		
			muestraInformacion(['Ratón', 'Navegador ['+coordenadaXrelativa+', '+coordenadaYrelativa+']', 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
			
			break;
		
		case 'keypress': // Si se presiona una tecla del teclado
			document.getElementById('info').style.backgroundColor = '#CCE6FF'; // Cambia el fonde de color
		
			var caracter = evento.charCode || evento.keyCode; // el carácter pulsado por teclado
		
			var letra = String.fromCharCode(caracter); // Letra del teclado que corresponde
		
			var codigo = letra.charCodeAt(0); // Código de esa letra
			
			muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
			
			break;
		
		case 'click': // Si se hace click con el ratón
			document.getElementById('info').style.backgroundColor = '#FFFFCC'; // Cambia el fondo de color
	
			break;
	}
}

function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

document.onmousemove = informacion;

document.onkeypress = informacion;
 
document.onclick = informacion;