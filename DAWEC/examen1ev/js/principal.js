{
	let enlaceDeTodoUnPoco,botonEmpleado,ventanaDeTodoUnPoco;

	let irFormularioEmpleado = function () {
		window.open("formularioEmpleado.html");
	}

	let crearVentanaDeTodoUnPoco = function (e) {
		//e.preventDefault();
		ventanaDeTodoUnPoco = window.open("", "", "width=500,height=500");
		ventanaDeTodoUnPoco.document.open();
		ventanaDeTodoUnPoco.document.write("<html>"+
												"<head>"+
													"<title>Antonio Luque Bravo</title>" +
													"<script src='js/detodounpoco.js' type='text/javascript' defer></script>" +
												"</head>" + 
												"<body>" + 
													"<button id='informa'>Informa</button>" +
													"<button id='raton'>Ratón</button>" +
													"<button id='salir'>Salir</button>" +
													"<div id='movimiento' style='height:200px'></div>" +
												"</body>" +
											"</html>");
		ventanaDeTodoUnPoco.document.close();
	}
	let init = function () {
		enlaceDeTodoUnPoco = document.getElementById('detodounpoco');
		botonEmpleado = document.getElementById('empleado');
		enlaceDeTodoUnPoco.addEventListener("click", crearVentanaDeTodoUnPoco);
		botonEmpleado.addEventListener("click", irFormularioEmpleado);
	}
	window.addEventListener("DOMContentLoaded", init);
}