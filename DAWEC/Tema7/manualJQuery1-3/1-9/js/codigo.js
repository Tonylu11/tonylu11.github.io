$(document).ready(function () {
	$("#enlaceajax").click(function(evento){
		$("#cargando").css("display","inline");
		$("#destino").load("pagina-lenta.php", function () {
			$("#cargando").css("display","none");
		});
	});
});