function Empleado (nombre, fechaNac, dni) {
	this.nombre = nombre;
	this.fechaNac = fechaNac;
	this.dni = dni;
}

Empleado.prototype.crearNuevaVentana = function () {
	let fecha = new Date();
	let finAnio = new Date(fecha.getFullYear(),11,31);
	let diasFinAnio = finAnio - new Date();
	diasFinAnio = Math.floor(diasFinAnio/1000/60/60/24)+1;
	let ventanaNueva = window.open("","","width=500,height=300,top=50,left=50");
	ventanaNueva.document.write("<html>"+
										"<head>"+
											"<title>Antonio Luque Bravo</title>" +
										"</head>" + 
										"<body>" + 
											"<h1>Antonio Luque Bravo</h1>" +
											"<p>Nombre: " + this.nombre + "</p>" +
											"<p>Fecha Nacimiento: " + this.fechaNac + "</p>" +
											"<p>DNI: " + this.dni + "</p>" +
											"<p>Quedan " + diasFinAnio + " días para fin de año</p>" +
										"</body>" +
								"</html>");
		ventanaNueva.document.close();
}