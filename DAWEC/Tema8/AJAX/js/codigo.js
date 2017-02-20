{
	let url, contenidoPag, cabeceraHttp, ajaxState, mostrar, httpRequest; 
	let estadosAJAX = ["No inicializada", "Abierta" , "Cabeceras recibidas", "Cargando", "Completada"];
	let muestraContenido = function() {
		ajaxState.innerHTML += httpRequest.readyState + ": " + estadosAJAX[httpRequest.readyState] + "</br>";
		cabeceraHttp.innerHTML += httpRequest.status + ": " + httpRequest.statusText + "</br>";
		if(httpRequest.readyState == 4) {
			if(httpRequest.status == 200) {
				contenidoPag.innerHTML = httpRequest.responseText;
			}
		}
	}
	let init = function () {
		url=document.getElementById("url");
		contenidoPag=document.getElementById("contenidoPagina");
		cabeceraHttp=document.getElementById("cabeceraHTTP");
		ajaxState=document.getElementById("estadoAJAX");
		mostrar=document.getElementById("enviar");	 

		url.value=location.href; //Al entrar se coloca por defecto la URL de la página en la que estamos.
		 
		mostrar.addEventListener('click', function() {
			ajaxState.innerHTML = "";
			cabeceraHttp.innerHTML = "";
			contenidoPag.innerHTML = "";
			httpRequest = new XMLHttpRequest();
			if(httpRequest) {
				httpRequest.onreadystatechange = muestraContenido;
				httpRequest.open("GET", url.value, true);
				httpRequest.send(null);
			}
		});
	}
	document.addEventListener('DOMContentLoaded', init);
}