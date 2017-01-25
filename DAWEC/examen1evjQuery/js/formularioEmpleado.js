/*{
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
}*/
jQuery.validator.addMethod( "nifES", function ( value, element ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)') ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}
	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );


jQuery.validator.addMethod( "nieES", function ( value, element ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)') ) {
		return false;
	}

	// Test NIE
	//T
	if ( /^[T]{1}/.test( value ) ) {
		return ( value[ 8 ] === /^[T]{1}[A-Z0-9]{8}$/.test( value ) );
	}

	//XYZ
	if ( /^[XYZ]{1}/.test( value ) ) {
		return (
				value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
						value.replace( 'X', '0' )
								.replace( 'Y', '1' )
								.replace( 'Z', '2' )
								.substring( 0, 8 ) % 23
				)
		);
	}

	return false;

}, "Please specify a valid NIE number." );



jQuery.validator.addMethod( "cifES", function ( value, element ) {
	"use strict";

	var sum,
			num = [],
			controlDigit;

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( '((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)' ) ) {
		return false;
	}

	for ( var i = 0; i < 9; i++ ) {
		num[ i ] = parseInt( value.charAt( i ), 10 );
	}

	// Algorithm for checking CIF codes
	sum = num[ 2 ] + num[ 4 ] + num[ 6 ];
	for ( var count = 1; count < 8; count += 2 ) {
		var tmp = ( 2 * num[ count ] ).toString(),
				secondDigit = tmp.charAt( 1 );

		sum += parseInt( tmp.charAt( 0 ), 10 ) + ( secondDigit === '' ? 0 : parseInt( secondDigit, 10 ) );
	}

	// CIF test
	if ( /^[ABCDEFGHJNPQRSUVW]{1}/.test( value ) ) {
		sum += '';
		controlDigit = 10 - parseInt( sum.charAt( sum.length - 1 ), 10 );
		value += controlDigit;
		return ( num[ 8 ].toString() === String.fromCharCode( 64 + controlDigit ) || num[ 8 ].toString() === value.charAt( value.length - 1 ) );
	}

	return false;

}, "Please specify a valid CIF number." );