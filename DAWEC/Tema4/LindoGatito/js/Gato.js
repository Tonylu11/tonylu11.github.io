{
	let estado = ["Jugando","Comiendo","Durmiendo","Muerto"];
	var gato;
	let nombreGato, fechaNacimientoGato, pesoGato, razaGato, newGato;

	function Gato (nombre,fechaNacimiento,raza,peso) {
		this.nombre = nombre;
		this.fechaNacimiento = new Date(fechaNacimiento);
		this.raza = raza;
		this.peso = peso;
		this.animo = 4; 
		this.estado = estado[0];
	}
	
	Gato.prototype.getNombre = function () {
		return this.nombre;
	}

	Gato.prototype.getFechaNacimiento = function () {
		return this.fechaNacimiento;
	}

	Gato.prototype.getRaza = function () {
		return this.raza;
	}

	Gato.prototype.getPeso = function () {
		return this.peso;
	}

	Gato.prototype.setPeso = function (peso) {
		if (peso<0 || peso>15) {
			this.estado = estado[3];
			throw new Exception("Tu gato ha muerto a causa del peso");
		}
		this.peso = peso;
	}

	Gato.prototype.getAnimo = function () {
		return this.animo;
	}

	Gato.prototype.setAnimo = function (animo) {
		if (animo<0 || animo>10) {
			this.estado = estado[3];
			throw new Exception("Tu gato ha muerto de euforia o de pena..");
		}
		this.animo = animo;
	}

	var getGato = function () {
		return gato;
	}

	Gato.prototype.setEstado = function (estado) {
		this.estado=estado;
	}

	Gato.prototype.aumentarAnimo = function () {
		this.setAnimo(this.getAnimo()+1);
	}

	Gato.prototype.disminuirAnimo = function () {
		this.setAnimo(this.getAnimo()-1);
	}

	Gato.prototype.jugar = function () {
		if (this.estado == estado[3]) {
			throw new Exception("Tu gato está muerto.");
		}
		this.estado = estado[0];
		this.setPeso(this.getPeso()-1);
		this.aumentarAnimo();
	}

	Gato.prototype.comer = function () {
		if (this.estado == estado[3]) {
			
			throw new Exception("Tu gato está muerto.");
		}
		this.estado = estado[1];
		this.setPeso(this.getPeso()+1);
		this.aumentarAnimo();
	}

	Gato.prototype.dormir = function () {
		if (this.estado == estado[3]) {
			throw new Exception("Tu gato está muerto.");
		}
		this.estado = estado[2];
		this.disminuirAnimo();
	}

	Gato.prototype.calcularEdad = function() {
		let fechaActual = new Date();
		let edad;
		if (fechaActual.getFullYear() == this.fechaNacimiento.getFullYear()) {
			return "El gato apenas llega al año de edad";
		}else{
			edad = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
			edad = parseInt((fechaActual -this.fechaNacimiento)/365/24/60/60/1000);
			return "El gato tiene "+edad +" años.";
		}

	};
	let crearGato = function (nombre, fechaNacimiento, raza, peso) {
		gato = new Gato(nombreGato.value,fechaNacimientoGato.value,razaGato.value,parseInt(pesoGato.value));
		console.log(gato);
		let ventanaGatito = window.open("gatito.html","","height=500, width=500,top=10,left=10");
	}

	let init = function () {
		nombreGato = document.getElementById('nombreGato');
		fechaNacimientoGato = document.getElementById('fechaNacimiento');
		pesoGato = document.getElementById('pesoGato');
		razaGato = document.getElementById('razaGato');
		newGato = document.getElementById('crearGato');
		newGato.addEventListener("click", crearGato);
	}
	document.addEventListener("DOMContentLoaded", init);

	function Exception (message) {
		this.message = message;
	}  
}