 {
 	let gato;
 	let nombreGato, fechaNacimientoGato,pesoGato,animoGato,razaGato,imagenGatito;
	let btnComer, jugar, dormir, edad;

 	let alimentar = function () {
 		try{
	 		gato.comer();
			errores.innerHTML = "";
	 		imagenGatito.src = "img/gatitoComiendo.jpg";
	 		pesoGato.innerHTML = "Alimentaste al gatito, su peso es de " + gato.getPeso();
			animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 		} catch(e) {
 			gatoMuerto(e);
		}
 	}

 	let entretener = function () {
 		try{
	 		gato.jugar();
			errores.innerHTML = "";
	 		imagenGatito.src = "img/gatitoJugando.jpg";
	 		pesoGato.innerHTML = "Jugaste con el gatito, su peso es de " + gato.getPeso();
			animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 		} catch(e) {
 			gatoMuerto(e);
		}
 	}

 	let descansar = function () {
 		try{
	 		gato.dormir();
			errores.innerHTML = "";
	 		imagenGatito.src = "img/gatitoDurmiendo.jpg";
			animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 		} catch(e) {
 			gatoMuerto(e);
		}
 	}

 	let obtenerEdad = function () {
		errores.innerHTML = "";
		edadGato.innerHTML = gato.calcularEdad();
 	}

 	let gatoMuerto = function (e) {
 		imagenGatito.src = "img/gatitoMuerto.jpg";
		errores.innerHTML = e.message;
		btnComer.disabled = true;
		jugar.disabled = true;
		dormir.disabled = true;
		edad.disabled = true;
 	}

 	let cargarComponentes = function () {
 		nombreGato = document.getElementById('nombreGato');
		fechaNacimientoGato = document.getElementById('fechaNacimientoGato');
		pesoGato = document.getElementById('pesoGato');
		animoGato = document.getElementById('animoGato');
		razaGato = document.getElementById('razaGato');
		imagenGatito = document.getElementById('imagenGatito');
		errores = document.getElementById('errores');
 	}

 	let cargarBotones = function () {
 		btnComer = document.getElementById("comer");
		jugar = document.getElementById("jugar");
		dormir = document.getElementById("dormir");
		edad = document.getElementById("edad");
 	}

 	let inicializarComponentes = function () {
 		nombreGato.innerHTML = "Nombre: " + gato.getNombre();
		fechaNacimientoGato.innerHTML = "Fecha de nacimiento: " + gato.getFechaNacimiento();
		razaGato.innerHTML = "Raza: " + gato.getRaza();
		pesoGato.innerHTML = "Peso: " + gato.getPeso();
		animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 	}

 	let annadirFuncionalidadBotones = function () {
 		btnComer.addEventListener("click", alimentar);
		jugar.addEventListener("click", entretener);
		dormir.addEventListener("click", descansar);
		edad.addEventListener("click", obtenerEdad);
 	}

	let init = function () {
		gato = window.opener.getGato();
		cargarComponentes();
		cargarBotones();
		inicializarComponentes();
		annadirFuncionalidadBotones();
	}
	document.addEventListener("DOMContentLoaded", init);  
 }