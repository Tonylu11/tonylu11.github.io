$(document).ready(function () {
		let inputErrores = $("#nombres");
		let contenidoPag = $("#contenidoRespuesta");

		inputErrores.on('keyup', function () {
			$.ajax({
				url: "nombres.php?r=" + inputErrores.val(),
				success: function (data, textStatus, xhr) {
					contenidoPag.text(data);
				}
			});
		});
});