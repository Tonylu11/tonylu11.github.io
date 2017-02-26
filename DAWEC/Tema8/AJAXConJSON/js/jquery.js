$(document).ready(function () {
	let aceitesButton = $("#aceites");
	let jamonesButton = $("#jamones");
	let vinosButton = $("#vinos");
	let contenidoRespuesta = $("#contenidoRespuesta");
	function getDatos (json, tipo) {
		$.getJSON(json,function (arrayJSON) {
			let out = "<ul>";
			switch (tipo) {
				case "aceites":
					for (variable in arrayJSON.aceites) {
						out += "<li><strong>" + arrayJSON.aceites[variable].tipo + "</strong>:" + 
						 arrayJSON.aceites[variable].descripcion + "</li>";
					}
					break;
				case "jamones":
					for (variable in arrayJSON.jamones) {
						out += "<li><strong>" + arrayJSON.jamones[variable].etiqueta + "</strong></li>";
					}
					break;
				case "vinos":
					for (variable in arrayJSON.vinos) {
						out += "<li><strong>" + arrayJSON.vinos[variable].tipo + "</strong></li>";
					}
					break;
			}
			out += "</ul>";
			contenidoRespuesta.html(out);
		});
	}
	aceitesButton.on('click', function () {
		getDatos("js/aceites.json" , "aceites");
	});
	jamonesButton.on('click', function () {
		getDatos("js/jamones.json" , "jamones");
	});
	vinosButton.on('click', function () {
		getDatos("js/vinos.json" , "vinos");
	});
});