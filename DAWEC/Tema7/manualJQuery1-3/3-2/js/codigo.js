$(document).ready(function(){
	$("#boton").click(function(evento){
		let selectorEscrito = $("#camposelector").prop("value");
		if(selectorEscrito == ""){
			alert("Escribe algo en el campo de texto");
		}else{
			let elementosSeleccionados = $(selectorEscrito);
			elementosSeleccionados.fadeOut("slow", function () {
				elementosSeleccionados.fadeIn("slow");
			});
		}
	});
});