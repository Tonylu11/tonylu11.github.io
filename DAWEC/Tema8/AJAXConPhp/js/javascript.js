{
	let init = function () {
	let nombres = document.getElementById("nombres");
	let contenidoPag=document.getElementById("contenidoPagina");	 
	let httpRequest;
		 
	function muestraContenido() {
		if(httpRequest.readyState == XMLHttpRequest.DONE) {
			if(httpRequest.status == 200) {
				contenidoPag.innerHTML = httpRequest.responseText;
			}
		}

	} 
	nombres.addEventListener('keyup', function() {
		httpRequest = new XMLHttpRequest();
		if(httpRequest) {
			httpRequest.onreadystatechange = muestraContenido;
			httpRequest.open("GET", "nombres.php?r=" + nombres.value , true);
			httpRequest.send(null);
		}
	});
	}
	document.addEventListener('DOMContentLoaded', init);
}