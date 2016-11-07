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
	let cerrarVentana = function(){
		window.close();
	}
	let init = function () {
		let ventana = document.getElementById("cerrar");
		ventana.addEventListener("click", cerrarVentana);
	}
	window.onload = init;
}