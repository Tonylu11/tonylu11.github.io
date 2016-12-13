let Validaciones = {
	
	regexCampos : {
		cuenta: /^ES[\s-]?[0-9]{2}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{2}[\s-]?[0-9]{9}$/,
	}

	let comprobarDatos : function(campo, msgError,regex) {
		if (comprobarSiVacio(campo)) {
			return "msgError";
		}else {
			if (regex.test(campo)) {
				return "";
			}else {
				return "Formato incorrecto";	
			}
		}
		if (msgError.innerHTML != "") {
			validaciones.push(campo); 
		}
	}
}