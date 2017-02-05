{
	let diasDeLaSemana;
	let fecha = new Date();
	$(document).ready(function () {
		$("#informa").on('click',function (e) {
			diasDeLaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			//DIA ACTUAL
			$("#movimiento").html(calcularDiaActual);
			$("#movimiento").append(manejarHoraActual);
		});

		$("#raton").on('click',function (e) {
			$("#movimiento").html("<h3>raton(x,y) [" + e.clientX + "," + e.clientY + "]");
			setTimeout(limpiar,2000);
		});
		
		$("#salir").on('click',function (e) {
			window.close();
		});
	});
	let limpiar = function () {
		$("#movimiento").html("");
	}

	let manejarHoraActual = function () {
		let minutos,texto2;
		
		if (fecha.getMinutes() < 10) {
			minutos = "0" + fecha.getMinutes();
		}else {
			minutos = fecha.getMinutes();
		}
		if (fecha.getHours() > 18) {
			texto2 = "<h4>Son las "+ fecha.getHours() + ":" + minutos +". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar</h4>";
		}else if (fecha.getHours() < 8) {
			texto2 = "<h4>Son las "+ fecha.getHours() + ":" + minutos +". Ya es hora de que comiences a trabajar. Hay que levantar el país</h4>";
		}else if (fecha.getHours() > 8  && fecha.getHours() < 18) {
			texto2 = "<h4>Son las "+ fecha.getHours() + ":" + minutos +". Pronto llegan las vacaciones. Aguanta</h4>";
		}
		return texto2;
	}

	let calcularDiaActual = function () {
		let texto = "";
		texto = "<h4>Hoy es " + diasDeLaSemana[fecha.getDay()] + "</h4>";
		return texto;
	}
}