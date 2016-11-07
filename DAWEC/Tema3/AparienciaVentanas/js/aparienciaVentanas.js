/*
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * Realizado por Antonio Luque Bravo
 */
{
	var ventanaHija;
	let abrirVentanaHija=function(){
		ventanaHija = window.open("", "", "width=300, height=200, top=0, left=0");
		ventanaHija.document.open();
		ventanaHija.document.write(
			"<html>"+
				"<head>"+
					"<title>Ventana hija</title>"+
					"</head>"+
				"<body>"+
					"<p>Se han utilizado las propiedades:</p>"+
						"<ul>"+
							"<li>height="+ ventanaHija.innerHeight + "</li>"+
							"<li>width=" + ventanaHija.innerWidth + "</li>"+
						"</ul>"+
				"</body>"+
			"</html>");
		ventanaHija.document.close();
	}
	let init = function () {
		let ventana = document.getElementById("abrirVentana");
		ventana.addEventListener("click", abrirVentanaHija);
	}
	window.onload = init;
}