{
	let factura;
	let Factura = function(cliente, elementos){
		this.cliente = cliente;
		this.elementos = elementos;
	}

	let Cliente = function(nombre, apellidos, dni){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
	}

	let Elemento = function(nombreProducto, cantidad, precioUnitario){
		this.nombreProducto = nombreProducto;
		this.cantidad = cantidad;
		this.precioUnitario = precioUnitario;
		this.totalPrecio = cantidad * precioUnitario;
	}

	let crearFactura = function(){
		let nombre = "Antonio";
		let apellidos = "Luque Bravo";
		let dni = "31021208G";
		let cliente = new Cliente(nombre, apellidos, dni);
		let elementos = [new Elemento("salchichas",3,2), new Elemento("cervezas",10,1)];
		factura = new Factura(cliente, elementos);
	}

	let init = function(){
		let pantallaFactura = document.getElementById("factura");
		crearFactura();
		pantallaFactura.innerHTML += "<ul>" +
								"<li>Nombre: " + factura.cliente.nombre + "</li>" + 
								"<li>Apellidos: " + factura.cliente.apellidos + "</li>" +
								"<li>DNI: " + factura.cliente.dni + "</li>" +
								"<li>" +
									"<p><strong>Elemento 1:</strong></p>" +
									"<ul>"+
										"<li>Nombre del producto: " + factura.elementos[0].nombreProducto + "</li>" +
										"<li>Cantidad: " + factura.elementos[0].cantidad + "</li>" +
										"<li>Precio Total: " + factura.elementos[0].totalPrecio + "</li>" +
									"</ul>" +
									"<p><strong>Elemento 2:</strong></p>" +
									"<ul>"+
										"<li>Nombre del producto: " + factura.elementos[1].nombreProducto + "</li>" +
										"<li>Cantidad: " + factura.elementos[1].cantidad + "</li>" +
										"<li>Precio Total: " + factura.elementos[1].totalPrecio + "</li>" +
									"</ul>" +
								"</li>" +
							"</ul>";
	}
	document.addEventListener("DOMContentLoaded", init);  
}