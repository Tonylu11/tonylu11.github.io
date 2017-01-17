$(document).ready(function () {
	$("#pilallamadas").click(function(event){
		event.preventDefault();
		$("#micapa").fadeOut(2000, function(){
			$("#micapa").css({'top': 400, 'left':120});
			$("#micapa").fadeIn(2000);
		});
	});
});