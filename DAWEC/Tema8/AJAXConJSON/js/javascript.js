{
	let init = function () {
		let aceitesButton = document.getElementById("aceites");
		let jamonesButton = document.getElementById("jamones");
		let vinosButton = document.getElementById("vinos");
		let contenidoRespuesta = document.getElementById("contenidoRespuesta");
		let peticion = new XMLHttpRequest();
		let getDatos = function (json, tipoAlimento) {
			peticion.open('GET', json, true);
			peticion.onload = function () {
				console.log("asdsadas");
				if (peticion.status == 200) {
					mostrarDatos(JSON.parse(peticion.responseText), tipoAlimento);
				}
			};
			peticion.send(null);
		}
		let mostrarDatos = function (json, tipo) {
			let out = "<ul>";
			switch (tipo) {
				case "aceites":
					for (variable in json.aceites) {
						out += "<li><strong>" + json.aceites[variable].tipo + "</strong>:" + 
						 json.aceites[variable].descripcion + "</li>";
					}
					break;
				case "jamones":
					for (variable in json.jamones) {
						out += "<li><strong>" + json.jamones[variable].etiqueta + "</strong></li>";
					}
					break;
				case "vinos":
					for (variable in json.vinos) {
						out += "<li><strong>" + json.vinos[variable].tipo + "</strong></li>";
					}
					break;
			}
			out += "</ul>";
			contenidoRespuesta.innerHTML = out;
		}
		aceitesButton.addEventListener('click', function () {
			getDatos("js/aceites.json", "aceites");
		});
		jamonesButton.addEventListener('click', function () {
			getDatos("js/jamones.json", "jamones");
		});
		vinosButton.addEventListener('click', function () {
			getDatos("js/vinos.json", "vinos");
		});
	}

	window.addEventListener("DOMContentLoaded", init);
}