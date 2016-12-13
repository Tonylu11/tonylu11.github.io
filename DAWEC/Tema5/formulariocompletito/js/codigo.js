{
	let nombre, dni, fecha, sexo, email, telefono, cuenta, campoUrl, ciudad, condiciones;
	let nombreError, dniError, fechaError, sexoError, emailError, telefonoError, cuentaError, urlError, ciudadError, condicionesError;
	let validaciones = [];

	let comprobarNombre = function() {
		//nombreError.innerHTML = Validar.comprobar(nombre, nombre.value, );

		if (comprobarSiVacio(nombre.value)) {
			nombreError.innerHTML = "El nombre no puede estar vacío."
		}else {
			if (/^[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}\s((de|del)\s)?[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}\s((de|del)\s)?[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}$/.test(nombre.value)) {
				nombreError.innerHTML = "";
			}else {
				nombreError.innerHTML = "Formato incorrecto";	
			}
		}

		if (nombreError.innerHTML != "") {
			validaciones.push(nombre); 
		}
	}

	let comprobarDni = function() {
		let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		let campoDni = dni.value;
		let dniTroceado = campoDni.split("-");
		let letraDni = dniTroceado[1];
		let numeroDni = parseInt(dniTroceado[0]);

		if (comprobarSiVacio(campoDni)) {
			dniError.innerHTML = "El DNI no puede estar vacío."

		}else {
			if (/^[0-9]{8}-[A-Za-z]$/.test(campoDni)) {
				if ((letraDni.toUpperCase() == letras[numeroDni % 23]) && (numeroDni > 0) && (numeroDni < 99999999)) {
					dniError.innerHTML = "";
				}
			}else {	
				dniError.innerHTML = "Formato incorrecto";
			}
		}
		if (dniError.innerHTML != "") {
			validaciones.push(dni); 
		}
	}


	let comprobarFecha = function(){
		if (comprobarSiVacio(fecha.value.trim())) {
			fechaError.innerHTML = "La fecha no puede estar vacía.";
		}
		else if (!esFechaCorrecta(fecha.value.trim())) {
			fechaError.innerHTML = "Compruebe que la fecha tenga alguno de estos formatos: dd-mm-aaaa, dd/mm/aaaa, dd mm aaaa. Debe ser una fecha válida: que el día coincida con el de ese mes y ese año concretos.";
		}
		else{
			fechaError.innerHTML = "";
		}
		if (fechaError.innerHTML != "") {
			validaciones.push(fecha);
		}
	}

	let esFechaCorrecta = function(fecha){
		let fechaArray = fecha.split(/[\s-/]/),
			anio = parseInt(fechaArray[2]),
			mes = parseInt(fechaArray[1]-1),
			dia = parseInt(fechaArray[0]),
			fechaNacimiento = new Date(anio, mes, dia);
			console.log(fechaNacimiento);
		return fechaNacimiento.getDate() === dia;
	}

	let comprobarSexo = function(){
		if (!esSexoSeleccionado()) {
			sexoError.innerHTML = "Debe seleccionar un sexo.";
		}
		else{
			sexoError.innerHTML = "";
		}
		if (sexoError.innerHTML != "") {
			validaciones.push(sexo);
		}
	}
	
	let esSexoSeleccionado = function(){ 
		return sexo[0].checked || sexo[1].checked;
	}

	let comprobarEmail = function() {
		if (comprobarSiVacio(email.value)) {
			emailError.innerHTML = "El email no puede estar vacío."
		}else {
			if (/^[A-z0-9]{4,}@[a-z]{4,}[.][a-z]{2,}$/.test(email.value)) {
				emailError.innerHTML = "";
			}else {	
				emailError.innerHTML = "Formato incorrecto";	
			}
		}
		if (emailError.innerHTML != "") {
			validaciones.push(email); 
		}
	}

	let comprobarTelefono = function() {
		if (comprobarSiVacio(telefono.value)) {
			telefonoError.innerHTML = "El número de teléfono no puede estar vacío."
		}else {
			if (/^[679][0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/.test(telefono.value)) {
				telefonoError.innerHTML = "";
			}else {
				telefonoError.innerHTML = "Formato incorrecto";	
			}
		}
		if (telefonoError.innerHTML != "") {
			validaciones.push(telefono); 
		}
	}

	let comprobarCuenta = function() {
		if (comprobarSiVacio(cuenta.value)) {
			cuentaError.innerHTML = "El campo de cuenta bancaria no puede estar vacía."
		}else {
			if (/^ES[\s-]?[0-9]{2}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{2}[\s-]?[0-9]{9}$/.test(cuenta.value)) {
				cuentaError.innerHTML = "";
			}else {
				cuentaError.innerHTML = "Formato incorrecto";	
			}
		}
		if (cuentaError.innerHTML != "") {
			validaciones.push(cuenta); 
		}
	}

	let comprobarUrl = function() {
		if (comprobarSiVacio(campoUrl.value)) {
			urlError.innerHTML = "La URL no puede estar vacía."
		}else {
			if (/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}$/.test(campoUrl.value)) {
				urlError.innerHTML = "";
			}else {
				urlError.innerHTML = "Formato incorrecto";	
			}
		}
		if (urlError.innerHTML != "") {
			validaciones.push(campoUrl); 
		}
	}

	let comprobarCiudad = function() {
		if (ciudad.selectedIndex == 0 
			|| ciudad.selectedIndex == null) {
			ciudadError.innerHTML = "Debes seleccionar una ciudad";
		}else {
			ciudadError.innerHTML = "";
		}
		if (ciudadError.innerHTML != "") {
			validaciones.push(ciudad); 
		}
	}

	let comprobarCondiciones = function(){
		if (!condiciones.checked) {
			condicionesError.innerHTML = "Hay que aceptar las condiciones.";
		}
		else{
			condicionesError.innerHTML = "";
		}
		if (condicionesError.innerHTML != "") { 
			validaciones.push(condiciones); 
		}
	}

	let comprobarSiVacio = function(campo) {
		if (campo.length == 0 || campo == " " || campo == null)
			return true;
		return false;
	}

	let irAlFoco = function(){
		if (validaciones.length != 0) { 
			validaciones[0].focus(); 
		}
	}

	let validar = function () {
		comprobarNombre();
		comprobarDni();
		comprobarFecha();
		comprobarSexo();
		comprobarSexo();
		comprobarEmail();
		comprobarTelefono();
		comprobarCuenta();
		comprobarUrl();
		comprobarCiudad();
	}

	let limpiarForm = function () {
		nombre.value = "";
		dni.value = "";
		fecha.value = "";
		sexo[0].checked = false;
		sexo[1].checked = false;
		email.value = "";
		telefono.value = "";
		cuenta.value = "";
		campoUrl.value = "";
		ciudad.value = "";
		condiciones.checked = false;

		nombreError.innerHTML = "";
		dniError.innerHTML = "";
		fechaError.innerHTML = "";
		sexoError.innerHTML = "";
		emailError.innerHTML = "";
		telefonoError.innerHTML = "";
		cuentaError.innerHTML = "";
		urlError.innerHTML = "";
		ciudadError.innerHTML = "";
		condicionesError.innerHTML = "";
		validaciones = [];
	}

	let comprobarEnviar = function (evento) {
		evento.preventDefault();
		validaciones = [];
		validar();

		if (nombreError.innerHTML == "" && 
			dniError.innerHTML == "" &&
			fechaError.innerHTML == "" &&
			sexoError.innerHTML == "" &&
			emailError.innerHTML == "" &&
			telefonoError.innerHTML == "" &&
			cuentaError.innerHTML == "" &&
			urlError.innerHTML == "" &&
			ciudadError.innerHTML == "") {
			document.getElementsByTagName('form')[0].sumbit();
		}else {
			irAlFoco();
		}
	}

	let inicializarCampos = function() {
		nombre = document.getElementById('nombre');
		dni = document.getElementById('dni');
		fecha = document.getElementById('fecha');
		sexo = document.getElementsByClassName('sexos');
		email = document.getElementById('email');
		telefono = document.getElementById('telefono');
		cuenta = document.getElementById('cuenta');
		campoUrl = document.getElementById('url');
		ciudad = document.getElementById('ciudad');
		condiciones = document.getElementById('condiciones');
		botonEnviar = document.getElementById('enviar');
		botonClear = document.getElementById('reset');
	}

	let inicializarErroresCampos = function() {
		nombreError = document.getElementById('nombreError');
		dniError = document.getElementById('dniError');
		fechaError = document.getElementById('fechaError');
		sexoError = document.getElementById('sexoError');
		emailError = document.getElementById('emailError');
		telefonoError = document.getElementById('telefonoError');
		cuentaError = document.getElementById('cuentaError');
		urlError = document.getElementById('urlError');
		ciudadError = document.getElementById('ciudadError');
		condicionesError = document.getElementById('condicionesError');
	}

	let eventosCampos = function() {
		nombre.addEventListener("blur", comprobarNombre);
		dni.addEventListener("blur", comprobarDni);
		fecha.addEventListener("blur", comprobarFecha);
		sexo[0].addEventListener("blur", comprobarSexo);
		sexo[1].addEventListener("blur", comprobarSexo);
		email.addEventListener("blur", comprobarEmail);
		telefono.addEventListener("blur", comprobarTelefono);
		cuenta.addEventListener("blur", comprobarCuenta);
		campoUrl.addEventListener("blur", comprobarUrl);
		ciudad.addEventListener("blur", comprobarCiudad);
		condiciones.addEventListener("blur", comprobarCondiciones);
		botonEnviar.addEventListener("click", comprobarEnviar);
		botonClear.addEventListener("click", limpiarForm);
	}

	let init = function () {
		//Campos
		inicializarCampos();

		//Errores de los campos
		inicializarErroresCampos();
	
		//eventos
		eventosCampos();
	}
	window.addEventListener("DOMContentLoaded", init);
}