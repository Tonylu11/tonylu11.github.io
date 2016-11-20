{
	let init = function () {
		let texto = document.getElementById("texto");
		texto.innerHTML += "<ul>" +
								"<li>window.location.hostname(servidor): " + window.location.hostname + "</li>" + 
								"<li>window.location.href(url): " + window.location.href + "</li>" +
								"<li>window.location.pathname(ruta): " + window.location.pathname + "</li>" +
								"<li>window.location.port(puerto): " + window.location.port + "</li>" +
								"<li>window.location.protocol(protocolo): " + window.location.protocol + "</li>" +
							"</ul>";
	}
	window.onload= init;
}