$(document).ready(function () {
	$("#enlaceajax").click(function(evento){
		$("#destino").load("pagina-lenta.php",{nombre:"Antonio",edad:20}, function () {
			alert("recibidos los datos por ajax");
		});
	});
});