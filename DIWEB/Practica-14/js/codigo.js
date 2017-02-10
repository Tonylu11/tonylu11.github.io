$(document).ready(function () {
	$("section").css("height" , window.innerHeight);
	$("section").on("resize", function () {
			$("section").css("height" , window.innerHeight);
	});
	$("#activarMenu").on('click',function (e) {
		$("nav").slideToggle(500);
	});
});