$(document).ready(function(){
	$("p").each(function (i) {
		if(i%2==0){
			$(this).css("background-color","#EEE");
		}else{
			$(this).css("background-color","#CCC");
		}
	});
});