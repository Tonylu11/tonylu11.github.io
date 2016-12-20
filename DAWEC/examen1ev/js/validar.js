let letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let Validaciones = function () {
	Validaciones.prototype.regexCampos = {
		'nombre': /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,})?$/,
		'fechanac': /^\d\d-\d\d-\d\d\d\d$/,
		'dni': /^[\d]{8}-[trwagmyfdxbnjzsqvhlckeTRWAGMYFPDXBNJZSQVHLCKE]$/
	}

	Validaciones.prototype.erroresCampos = {
		'nombre': "El nombre no cumple con el patrón establecido(Nombre Apellido Apellido ó Nombre Apellido)",
		'fechanac': "Formato de fecha inválido (dd-mm-aaaa)",
		'dni': "Formato DNI inválido (12345678Z ó 12345678 Z ó 12345678-Z)"
	};
}

Validaciones.prototype.regexYMensaje = function (x) {
	let arrayRegexMensaje = [Validaciones.prototype.regexCampos[x], Validaciones.prototype.erroresCampos[x]];
	return arrayRegexMensaje;
}

let validaciones = new Validaciones();

function Validar(componente){
	this.regex = validaciones.regexYMensaje(componente.id)[0];
	this.mensaje = validaciones.regexYMensaje(componente.id)[1];
	this.componente = componente;
}
Validar.prototype.validarCampo = function () {
	if (!this.regex.test(this.componente.value)) {
		return this.mensaje;
	}
	return "";
}

Validar.prototype.comprobarSiVacio = function() {
		if (this.componente.value.length == 0){
			return "El campo no puede estar vacío";
		}
		return "";
	}

Validar.prototype.comprobarLetraDni = function(){
	let dniSplit = this.componente.value.split("-");
	let letra = dniSplit[1].toUpperCase();
	let numeroDNI = dniSplit[0];
	if (letrasDNI[numeroDNI%23] != letra) {
		return "Letra incorrecta";
	}
	return "";
}

Validar.prototype.fechaValida = function () {
		let fechaSplit = this.componente.value.split("-");
		let dia = parseInt(fechaSplit[0]);
		let mes = parseInt(fechaSplit[1]) - 1;
		let anio = parseInt(fechaSplit[2]);
		let fechaNacimiento = new Date(anio, mes, dia);
		if (dia != fechaNacimiento.getDate() || mes != fechaNacimiento.getMonth() || anio != fechaNacimiento.getFullYear() ) {
			return "Fecha inválida";
		}
		return "";
}