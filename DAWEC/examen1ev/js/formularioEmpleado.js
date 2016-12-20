{
	let campoNombre,campoFechaNac,campoDni,aceptarCondicionesCheckbox, nuevoEmpleado;
	let campoNombreError,campoFechaNacError,campoDniError,aceptarCondicionesCheckboxError;
	let arrayValidaciones = [];

	let comprobarError = function (campoError) {
		let validar = new Validar(this);
		campoError.innerHTML = validar.comprobarSiVacio() || validar.validarCampo();
		if (this == campoFechaNac) {
			campoError.innerHTML = campoError.innerHTML || validar.fechaValida();
		}
		if (this == campoDni) {
			campoError.innerHTML = campoError.innerHTML || validar.comprobarLetraDni();
		}
		if (campoError.innerHTML != "") {
			arrayValidaciones.push(this);
		}
	}

	let comprobarCondicionesAceptadas = function(){
		if (!aceptarCondicionesCheckbox.checked) {
			aceptarCondicionesCheckboxError.innerHTML = "Hay que aceptar las condiciones.";
			arrayValidaciones.push(aceptarCondicionesCheckbox); 
		}
		else{
			aceptarCondicionesCheckboxError.innerHTML = "";
		}
	}

	let irAlFoco = function(){
		if (arrayValidaciones.length != 0) { 
			arrayValidaciones[0].focus(); 
		}
	}

	let validar = function () {
		arrayValidaciones = [];
		comprobarError.bind(campoNombre, campoNombreError)();
		comprobarError.bind(campoFechaNac, campoFechaNacError)();
		comprobarError.bind(campoDni, campoDniError)();
		comprobarCondicionesAceptadas();
	}

	let limpiar = function () {
		campoNombre.value = "";
		campoFechaNac.value = "";
		campoDni.value = "";
		aceptarCondicionesCheckbox.checked = false;
	}


	let comprobarEnviar = function () {
		validar();
		if (arrayValidaciones.length == 0) {
			let empleado = new Empleado(campoNombre.value,campoFechaNac.value,campoDni.value);
			empleado.crearNuevaVentana();
			limpiar();
		}else {
			irAlFoco();
		}
	}

	let init = function () {
		campoNombre = document.getElementById('nombre');
		campoFechaNac = document.getElementById('fechanac');
		campoDni = document.getElementById('dni');
		aceptarCondicionesCheckbox = document.getElementById('condiciones');
		nuevoEmpleado = document.getElementById('nuevoempleado');

		campoNombreError = document.getElementById('errorNombre');
		campoFechaNacError = document.getElementById('errorFechaNac');
		campoDniError = document.getElementById('errorDni');
		aceptarCondicionesCheckboxError = document.getElementById('errorCondiciones');

		campoNombre.addEventListener('blur', comprobarError.bind(campoNombre, campoNombreError));
		campoFechaNac.addEventListener('blur', comprobarError.bind(campoFechaNac, campoFechaNacError));
		campoDni.addEventListener('blur', comprobarError.bind(campoDni, campoDniError));
		aceptarCondicionesCheckbox.addEventListener('blur', comprobarCondicionesAceptadas);
		nuevoEmpleado.addEventListener('click', comprobarEnviar);
	}
	window.addEventListener('DOMContentLoaded', init)
}