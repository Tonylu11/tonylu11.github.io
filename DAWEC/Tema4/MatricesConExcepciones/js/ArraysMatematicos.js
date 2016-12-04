{
	function ArraysMatematicos (filas, columnas) {
		if (filas < 0) {
			throw new Exception("Las filas deben de ser positivas.");
		}
		this.filas = filas;
		if (columnas < 0) {
			throw new Exception("Las columnas deben de ser positivas.");
		}
		this.columnas = columnas;
		this.contenido = this.crearArray();
	}

	ArraysMatematicos.prototype.crearArray = function(){
		let matriz = new Array();
		for (let i = 0; i < this.filas; i++) {
			matriz[i] = new Array();
			for (let j = 0; j < this.columnas; j++) {
				matriz[i][j] = Math.floor(Math.random() * 11);
			}
		}
		return matriz;
	}

	ArraysMatematicos.prototype.sumar = function (matriz) {
		if (this.filas != matriz.filas && this.columnas != matriz.columnas) {
			throw new Exception("Para sumar matrices deben tener las mismas dimensiones (mismas filas y columnas).");
		}
		let sumar = new ArraysMatematicos(this.filas,this.columnas);
		for (let i = 0; i < this.filas; i++) {
			for (let j = 0; j < this.columnas; j++) {
				sumar.contenido[i][j] = this.contenido[i][j] + matriz.contenido[i][j];
			}
		}
		return sumar;
	}

	ArraysMatematicos.prototype.restar = function (matriz) {
		if (this.filas != matriz.filas && this.columnas != matriz.columnas) {
			throw new Exception("Para restar matrices deben tener las mismas dimensiones (mismas filas y columnas).");
		}
		let restar = new ArraysMatematicos(this.filas,this.columnas);
		for (let i = 0; i < this.filas; i++) {
			for (let j = 0; j < this.columnas; j++) {
				restar.contenido[i][j] = this.contenido[i][j] - matriz.contenido[i][j];
			}
		}
		return restar;
	}

	ArraysMatematicos.prototype.trasponer = function () {
		let traspuesta = new ArraysMatematicos(this.columnas, this.filas);
		for (let i = 0; i < this.filas; i++) {
			for (let j = 0; j < this.columnas; j++) {
				traspuesta.contenido[i][j] = this.contenido[j][i];
			}
		}
		this.filas = traspuesta.filas;
		this.columnas = traspuesta.columnas;
		this.contenido = traspuesta.contenido;
	}

	ArraysMatematicos.prototype.multiplicar = function (f2) {
		if (this.columnas != f2.filas) {
			throw new Exception("Para multiplicar matrices el número de columnas de la primera matriz debe coincidir con el número de filas de la segunda matriz.");
		}
		let r = new ArraysMatematicos(this.filas,f2.columnas);
		for (let i = 0; i < this.filas; i++) {
			for (let j = 0; j < f2.columnas; j++) {
				for (let k = 0; k < f2.filas; k++) {
					r.contenido[i][j] += this.contenido[i][k] * f2.contenido[k][j];
				}
			}
		}
		return r;
	}
	ArraysMatematicos.prototype.mostrar = function() {
		let matriz  = this;
		let cadena="<table>";
		for (let i = 0; i < matriz.filas; i++) {
			cadena+="<tr>";
			for (let j = 0; j < matriz.columnas; j++) {
				cadena +="<td>" + matriz.contenido[i][j] + "</td>";
			}
			cadena+="</tr>";
		}
		cadena+="</table>";
		return cadena;
	}
		function Exception (message) {
		this.message = message;
		
	}
}