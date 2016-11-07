/*  	
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * Realizado por Antonio Luque Bravo
*/
{
	let arrayVentanas = [];
	let cerrarVentanas = function () {
		for (let i = 0; i < arrayVentanas.length; i++) {
			arrayVentanas[i].close();
		}
		let longitudArray = arrayVentanas.length;
		for (let i = 0; i < longitudArray; i++) {
			arrayVentanas.pop();
		}
	}
	let multiplesVentanas = function(){
		for (let i = 1; i <= 5; i++) {
			let miVentana= window.open("","","width=200, height=200, top="+(i*5)+", left="+(i*5)+"");
			miVentana.document.open();
			miVentana.document.write(
				"<html>"+
					"<head>"+
						"<title>Ventana"+i+"</title>"+
						"<script type=\"text/javascript\" src=\"./js/nuevasVentanas.js\"></script>"+
					"</head>"+
					"<body>"+
						"<label>Ventana "+i+"</label>"+
						"<form><input type=\"button\" id=\"cerrar\" "+
							"value=\"Cerrar\" /></form>"+
					"</body>"+
				"</html>"
			);
			miVentana.document.close();
			arrayVentanas.push(miVentana);
		}	
	}
	let init = function () {
		let ventana = document.getElementById("multiplesVentanas");
		ventana.addEventListener("click", multiplesVentanas);
		let cerrarTodasVentanas = document.getElementById("cerrarTodas");
		cerrarTodasVentanas.addEventListener("click", cerrarVentanas);
	}
	window.onload = init;
}