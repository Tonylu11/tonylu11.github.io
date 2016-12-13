{
	let usuario, password, colocarCookie;
	let usuarioError, passError;
	let ventanaNueva;
	let validaciones = [];

	let setCookie = function(cname, cvalue, exdays) {
		let d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie += cname + "=" + cvalue + ";" + expires + ";path=/";
	} 

	let getCookie = function(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return "";
	}

	let comprobarUsuario = function() {
		if (comprobarSiVacio(usuario.value)) {
			usuarioError.innerHTML = "El nombre no puede estar vacío."
		}else {
			if (/^[A-Z-ÁÉÍÓÚÑa-záéíóúñ0-9_-]{5,}$/.test(usuario.value)) {
				usuarioError.innerHTML = "";
			}else {
				usuarioError.innerHTML = "Formato incorrecto";	
			}
		}
		if (usuarioError.innerHTML != "") {
			validaciones.push(usuario); 
		}
	}

	let comprobarPassword = function() {
		if (comprobarSiVacio(password.value)) {
			passError.innerHTML = "La contraseña no puede estar vacía"
		}else {
			if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/.test(password.value)) {
				passError.innerHTML = "";
			}else {
				passError.innerHTML = "Formato incorrecto, mínimo de 6 caracteres y ha de tener al menos un dígito, una letra y un carácter especial ($%@#)";	
			}
		}
		if (passError.innerHTML != "") {
			validaciones.push(password); 
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
		comprobarUsuario();
		comprobarPassword();
	}

	let limpiar = function () {
		limpiarForm();
		limpiarCookie();
		validaciones = [];
	}

	let limpiarCookie = function () {
		setCookie("usuario","",-2);
		setCookie("password","",-2);
	}

	let limpiarForm = function () {
		usuario.value = "";
		password.value = "";
		usuarioError.innerHTML = "";
		passError.innerHTML = "";
	}

	let comprobarEnviar = function (evento) {
		evento.preventDefault();
		validaciones = [];
		validar();

		if (validaciones.length == 0) {
			setCookie("usuario",usuario.value,1);
			setCookie("password",password.value,1);
			ventanaNueva = window.open("", "", "width=500, height=500, top=0, left=0");
			ventanaNueva.document.open();
			ventanaNueva.document.write(
				"<html>"+
					"<head>"+
						"<title>Ventana Aux</title>"+
						"</head>"+
					"<body>"+
						"<p>Cookie:</p>"+
							"<ul>"+
								"<li>"+ getCookie("usuario") +"</li>"+
								"<li>" + getCookie("password") + "</li>"+
							"</ul>"+
					"</body>"+
				"</html>");
			ventanaNueva.document.close();
		}else {
			irAlFoco();
		}
	}

	let init = function () {
		//Campos
		usuario = document.getElementById('usuario');
		password = document.getElementById('pass');
		usuario.value = usuario.value.trim();
		password.value = password.value.trim();
		colocarCookie = document.getElementById('cookie');
		botonEnviar = document.getElementById('enviar');
		botonClear = document.getElementById('limpiar');


		//Errores de los campos
		usuarioError = document.getElementById('usuarioError');
		passError = document.getElementById('passError');
	
		//eventos
		usuario.addEventListener("blur", comprobarUsuario);
		password.addEventListener("blur", comprobarPassword);
		botonEnviar.addEventListener("click", comprobarEnviar);
		botonClear.addEventListener("click", limpiar);
	}
	window.addEventListener("DOMContentLoaded", init);
}