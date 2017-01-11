$(document).ready(function () {
	$("a").mouseover(function(evento){
		$("#capa").addClass("clase")
	});
	$("a").mouseleave(function(evento){
		$("#capa").removeClass("clase");
	});
});