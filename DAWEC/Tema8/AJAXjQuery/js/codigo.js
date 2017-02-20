$(document).ready(function () {
		let direccion = $("#url");
		let contenidoPag = $("#contenidoPagina");
		let cabeceraHttp = $("#cabeceraHTTP");
		let ajaxState = $("#estadoAJAX");
		let mostrar = $("#enviar");

		mostrar.on('click', function () {
			contenidoPag.text("");
			cabeceraHttp.text("");
			ajaxState.text("");
			$.ajax({
				url: direccion.val(),
				success: function (data, textStatus, xhr) {
					contenidoPag.text(data);
				},
				complete: function (xhr, textStatus) {
					cabeceraHttp.append(xhr.status + ": " + textStatus + "<br>");
					ajaxState.append(xhr.readyState + "<br>");
				},
				error: function (xhr, textStatus, error) {
					contenidoPag.text("Pagina no encontrada.");
				}
			});
		});
});