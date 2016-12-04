{
	let matriz1;
	let matriz2;
	let generarMatrices = function () {
		filasMatriz1 = document.getElementById("filasm1").value;
		columnasMatriz1 = document.getElementById("columnasm1").value;
		filasMatriz2 = document.getElementById("filasm2").value;
		columnasMatriz2 = document.getElementById("columnasm2").value;
		try {
			matriz1 = new ArraysMatematicos(filasMatriz1, columnasMatriz1);
			matriz2 = new ArraysMatematicos(filasMatriz2, columnasMatriz2);
			mostrarMatriz1.innerHTML = "<h2>MATRIZ 1:</h2>" + matriz1.mostrar();
			mostrarMatriz2.innerHTML = "<h2>MATRIZ 2:</h2>" + matriz2.mostrar();
		} catch (e) {
				errores.innerHTML = e.message;
		}
	}

	let sumaMatrices = function () {
		errores.innerHTML = "";
		try {
			suma = matriz1.sumar(matriz2);
			msgResultado.innerHTML = "<h2>Suma:</h2>" + suma.mostrar();
		} catch (e) {
			errores.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	let restaMatrices = function () {
		errores.innerHTML = "";
		try {
			resta = matriz1.restar(matriz2);
			msgResultado.innerHTML = "<h2>Resta:</h2>" + resta.mostrar();
		} catch (e) {
			errores.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	let multiplicaMatrices = function () {
		errores.innerHTML = "";
		try {
			resultado = matriz1.multiplicar(matriz2);
			msgResultado.innerHTML = "<h2>Producto:</h2>" + resultado.mostrar();
		} catch (e) {
			errores.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	let trasponeMatrices = function() {
		errores.innerHTML = "";
		matriz1.trasponer();
		matriz2.trasponer();
		msgResultado.innerHTML = "<h2>Matriz traspuesta 1:</h2>" + matriz1.mostrar();
		msgResultado.innerHTML += "<h2>Matriz traspuesta 2:</h2>" + matriz2.mostrar();
		mostrarMatriz1.innerHTML = "<h2>MATRIZ 1:</h2>" + matriz1.mostrar();
		mostrarMatriz2.innerHTML = "<h2>MATRIZ 2:</h2>" + matriz2.mostrar();
	}

	let init = function () {
		errores = document.getElementById("errores");
		mostrarMatriz1 = document.getElementById("matriz1");
		mostrarMatriz2 = document.getElementById("matriz2");
		msgResultado = document.getElementById("resultado");
		document.getElementById("botonGenerar").addEventListener("click", generarMatrices);
		document.getElementById("botonSumar").addEventListener("click", sumaMatrices);
		document.getElementById("botonRestar").addEventListener("click", restaMatrices);
		document.getElementById("botonMultiplicar").addEventListener("click", multiplicaMatrices);
		document.getElementById("botonTrasponer").addEventListener("click", trasponeMatrices);
		
	}
	document.addEventListener("DOMContentLoaded", init); 
}