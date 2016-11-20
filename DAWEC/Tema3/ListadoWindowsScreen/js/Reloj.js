{
	let actualizarReloj = function () {
		let texto = document.getElementById("texto");
		let date = new Date();
		let horas = date.getHours();
		let minutos = date.getMinutes();
		let segundos = date.getSeconds();
		if (horas <=9) {horas = "0" + horas}
		if (minutos <=9) {minutos = "0" + minutos}
		if (segundos <=9) {segundos = "0" + segundos}
		let mensaje = horas + ":" + minutos + ":" + segundos;
		texto.innerHTML = mensaje;
	}
	let init = function () {
		setInterval(actualizarReloj,1000);
	}
	window.onload= init;
}