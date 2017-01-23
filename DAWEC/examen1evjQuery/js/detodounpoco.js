{
	let botonInforma,botonRaton,botonSalir,movimientoRatonDiv;
	let texto,parrafo;
	let diasDeLaSemana,fecha;

	let calcularDiaActual = function () {
		parrafo = window.document.createElement('p');
		texto = document.createTextNode("Hoy es " + diasDeLaSemana[fecha.getDay()]);
		parrafo.appendChild(texto);
		document.body.appendChild(parrafo);
	}

	let manejarHoraActual = function () {
		parrafo = window.document.createElement('p');
		let minutos = "";
		if (fecha.getMinutes() < 10) {
			minutos = "0" + fecha.getMinutes();
		}else {
			minutos = fecha.getMinutes();
		}
		if (fecha.getHours() > 18) {
			texto = document.createTextNode("Son las "+ fecha.getHours() + ":" + minutos +". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar");
		}else if (fecha.getHours() < 8) {
			texto = document.createTextNode("Son las "+ fecha.getHours() + ":" + minutos +". Ya es hora de que comiences a trabajar. Hay que levantar el país");
		}else if (fecha.getHours() > 8  && fecha.getHours() < 18) {
			texto = document.createTextNode("Son las "+ fecha.getHours() + ":" + minutos +". Pronto llegan las vacaciones. Aguanta");
		}
		parrafo.appendChild(texto);
		document.body.appendChild(parrafo);
	}

	let diaYHoraFn = function () {
		diasDeLaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
		fecha = new Date();
		//DIA ACTUAL
		calcularDiaActual();
		//MANEJO HORA ACTUAL
		manejarHoraActual();
	}
	
	let mensajeRaton = function (e) {
		parrafoPosicion = document.createElement('p');
		parrafoPosicion.appendChild(document.createTextNode("raton(x,y) [" + e.clientX + "," + e.clientY + "]"));
		movimientoRatonDiv.appendChild(parrafoPosicion);
		setTimeout(limpiar, 2000);
	}

	let limpiar = function () {
		movimientoRatonDiv.innerHTML = "";
	}

	let mostrarPosicionRatonFn = function () {
		movimientoRatonDiv.addEventListener('click', mensajeRaton);
	}

	let salirVentana = function () {
		window.close();
	}
	let init = function () {
		botonInforma = document.getElementById('informa');
		botonRaton = document.getElementById('raton');
		botonSalir = document.getElementById('salir');
		movimientoRatonDiv = document.getElementById('movimiento');

		botonInforma.addEventListener('click', diaYHoraFn);
		botonRaton.addEventListener('click', mostrarPosicionRatonFn);
		botonSalir.addEventListener('click', salirVentana);
	}
	window.addEventListener("DOMContentLoaded", init);
}