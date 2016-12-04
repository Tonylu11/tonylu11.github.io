{
	let spanKeyUp, spanKeyDown, spanKeyPress;
	let codigo, letraInfo;

	let fnKeyUp = function () {
		spanKeyUp.innerHTML = "Se ha soltado una tecla";
	}

	let fnKeyDown = function () {
		spanKeyDown.innerHTML = "Se ha mantenido pulsada una tecla";
	}
	let fnKeyPress = function (e) {
		spanKeyPress.innerHTML = "Se ha pulsado una tecla";
		let caracter = e.charCode || e.keyCode;
		let letra = String.fromCharCode(caracter);

		switch(e.keyCode || e.charCode){
			case 13:
				letra = "Enter";
				break;
			case 8:
				letra = "Retroceso";
				break;
			case 9:
				letra = "Tabulador";
				break;
			case 32:
				letra = "Barra Espaciadora";
				break;
			case 27:
				letra = "Esc";
				break;
		}	
		
		codigo.innerHTML = caracter;
		letraInfo.innerHTML = letra;
	}

	let init = function () {
		/*let divClick = document.createElement('div');
		let body = document.getElementsByTagName('body');
		body[0].appendChild(divClick);*/
		//divClick.addEventListener('click',, capture?: boolean)

		codigo = document.getElementById('codigo');
		letraInfo= document.getElementById('caracter');

		spanKeyUp = document.getElementById('up');
		spanKeyDown = document.getElementById('down');
		spanKeyPress = document.getElementById('press');

		document.addEventListener('keyup',fnKeyUp);
		document.addEventListener('keydown',fnKeyDown);
		document.addEventListener('keypress',fnKeyPress);
	}

	window.addEventListener("DOMContentLoaded", init);
}