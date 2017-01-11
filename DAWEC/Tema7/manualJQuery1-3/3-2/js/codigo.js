$(document).ready(function(){
	$("#boton").click(function(evento){
		let selectorId = $("#camposelector").prop("value");
		let selectorClase = $(".clasecamposelector").prop("value");
		let selectorElemento = $("p").prop("value");
		let selectorVariasClases = $(".clase1.clase2").prop("value");
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