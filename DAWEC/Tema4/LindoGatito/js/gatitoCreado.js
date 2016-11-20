 {
 	let gato;
 	let nombreGato, fechaNacimientoGato,pesoGato,animoGato,razaGato,imagenGatito;
	let comer, jugar, dormir, edad;

 	let alimentar = function () {
 		try{
 		gato.comer();
		errores.innerHTML = "";
 		} catch(e) {
 			imagenGatito.src = "img/gatitoMuerto.jpg";
 			console.log("cargado");
			errores.innerHTML = e.message;
		}
 		imagenGatito.src = "img/gatitoComiendo.jpg";
 		pesoGato.innerHTML = "Alimentaste al gatito, su peso es de " + gato.getPeso();
		animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 	}

 	let entretener = function () {
 		try{
 		gato.jugar();
		errores.innerHTML = "";
 		} catch(e) {
			errores.innerHTML = e.message;
		}
 		imagenGatito.src = "img/gatitoJugando.jpg";
 		pesoGato.innerHTML = "Jugaste con el gatito, su peso es de " + gato.getPeso();
		animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 	}

 	let descansar = function () {
 		try{
 		gato.dormir();
		errores.innerHTML = "";
 		} catch(e) {
			errores.innerHTML = e.message;
		}
 		imagenGatito.src = "img/gatitoDurmiendo.jpg";
		animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
 	}
 	let obtenerEdad = function () {
 		try{
			errores.innerHTML = "";
 		} catch(e) {
			errores.innerHTML = e.message;
		}
 
		edadGato.innerHTML = gato.calcularEdad();
 	}

	let init = function () {
		gato = window.opener.gato;
		nombreGato = document.getElementById('nombreGato');
		fechaNacimientoGato = document.getElementById('fechaNacimientoGato');
		pesoGato = document.getElementById('pesoGato');
		animoGato = document.getElementById('animoGato');
		razaGato = document.getElementById('razaGato');
		errores = document.getElementById('errores');
		imagenGatito = document.getElementById('imagenGatito');
		
		comer = document.getElementById("comer");
		jugar = document.getElementById("jugar");
		dormir = document.getElementById("dormir");
		edad = document.getElementById("edad");
		

		nombreGato.innerHTML = "Nombre: " + gato.getNombre();
		fechaNacimientoGato.innerHTML = "Fecha de nacimiento: " + gato.getFechaNacimiento();
		razaGato.innerHTML = "Raza: " + gato.getRaza();
		pesoGato.innerHTML = "Peso: " + gato.getPeso();
		animoGato.innerHTML = "Ánimo: " + gato.getAnimo();
		comer.addEventListener("click", alimentar);
		jugar.addEventListener("click", entretener);
		dormir.addEventListener("click", descansar);
		edad.addEventListener("click", obtenerEdad);
	
	}
	document.addEventListener("DOMContentLoaded", init);  
 }