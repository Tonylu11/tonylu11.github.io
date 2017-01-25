{
	let ventanaDeTodoUnPoco;

	let irFormularioEmpleado = function () {
		window.open("formularioEmpleado.html");
	}

	let crearVentanaDeTodoUnPoco = function (e) {
		ventanaDeTodoUnPoco = window.open("", "", "width=500,height=500");
		ventanaDeTodoUnPoco.document.open();
		ventanaDeTodoUnPoco.document.write("<html lang='es'>"+
												"<head>"+
													"<title>Antonio Luque Bravo</title>" +
													"<meta charset='UTF-8'>" +
													"<script src='js/jquery-3.1.1.js' type='text/javascript' charset='utf-8'></script>" +
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
	$(document).ready(function () {
		$("#detodounpoco").on('click', crearVentanaDeTodoUnPoco);
		$("#empleado").on('click', irFormularioEmpleado);
	});
}