{
	let divClick, divDoubleClick, divMouseDown, divMouseEnter, divMouseLeave,
	 divMouseMove, divMouseOut, divMouseOver, divMouseUp;
	let colorAleatorio = function () {
	 	return "rgb(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
	}
	let colorAleatorioTrasparencia = function () {
	 	return "rgba(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ",0.5)";
	}
	let aleatorio = function (min,max) {
	 	return parseInt(min) + Math.floor(Math.random() * (max - min));

	}
	let clickear = function (evento) {
		divClick.style.backgroundColor = colorAleatorio();
		divClick.innerHTML = "Clickado en XY[" + evento.clientX + "," + evento.clientY + "]";
	}

	let dobleclick = function (evento) {
		let color1= colorAleatorio();
		let color2= colorAleatorio();
		divDoubleClick.style.background = "radial-gradient(" + color1 + "," + color2 + ")";
		divDoubleClick.innerHTML = "Clickado doble en XY[" + evento.clientX + "," + evento.clientY + "]";
	}

	let fnMouseDown = function (evento) {
		divMouseDown.style.backgroundColor = colorAleatorioTrasparencia();
		switch (evento.button) {
			case 1:
				divMouseDown.innerHTML = "click con la rueda";
				break;
			case 2:
				divMouseDown.innerHTML = "click derecho";
				break;
			default://Boton Izquierdo
				divMouseDown.innerHTML = "click izquierdo";
				break;
		}
		divMouseDown.innerHTML += " XY[" + evento.clientX + "," + evento.clientY + "]";
	}
	let fnMouseEnter = function () {
		divMouseEnter.style.backgroundColor = colorAleatorio();
	}
	let fnMouseLeave = function () {
		divMouseLeave.style.backgroundColor = colorAleatorio();
		
	}
	let fnMouseMove = function (evento) {
		divMouseMove.innerHTML = "Mouse Move: XY [" + evento.clientX + "," + evento.clientY + "]";
	}
	let fnMouseOut = function () {
		divMouseOut.style.backgroundColor = colorAleatorio();
	}
	let fnMouseOver = function () {
		divMouseOver.style.backgroundColor = colorAleatorio();
	}
	let fnMouseUp = function (evento) {
		divMouseUp.style.backgroundColor = colorAleatorioTrasparencia();
		switch (evento.button) {
			case 1:
				divMouseUp.innerHTML = "click con la rueda";
				break;
			case 2:
				divMouseUp.innerHTML = "click derecho";
				break;
			default://Boton Izquierdo
				divMouseUp.innerHTML = "click izquierdo";
				break;
		}
		divMouseUp.innerHTML += " XY[" + evento.clientX + "," + evento.clientY + "]";

	}
	let init = function () {
		/*let divClick = document.createElement('div');
		let body = document.getElementsByTagName('body');
		body[0].appendChild(divClick);*/
		//divClick.addEventListener('click',, capture?: boolean)

		divClick = document.getElementById('click');
		divDoubleClick = document.getElementById('doubleclick');
		divMouseDown = document.getElementById('mousedown');
		divMouseEnter = document.getElementById('mouseenter');
		divMouseLeave = document.getElementById('mouseleave');
		divMouseMove = document.getElementById('mousemove');
		divMouseOut = document.getElementById('mouseout');
		divMouseOver = document.getElementById('mouseover');
		divMouseUp = document.getElementById('mouseup');

		divClick.addEventListener('click',clickear);
		divDoubleClick.addEventListener('dblclick',dobleclick);
		divMouseDown.addEventListener('mousedown',fnMouseDown);
		divMouseEnter.addEventListener('mouseenter',fnMouseEnter);
		divMouseLeave.addEventListener('mouseleave',fnMouseLeave);
		divMouseMove.addEventListener('mousemove',fnMouseMove);
		divMouseOut.addEventListener('mouseout',fnMouseOut);
		divMouseOver.addEventListener('mouseover',fnMouseOver);
		divMouseUp.addEventListener('mouseup',fnMouseUp);
	}
	window.addEventListener("DOMContentLoaded", init);
}