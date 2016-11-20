{
	var array = [1,2,3,4];
	let init = function(){
		let pantallaArrays = document.getElementById("array");
		Array.prototype.annadir = function (elemento, permitirDuplicados) {
			if (!permitirDuplicados){
				if (elemento in array)
					throw "No se permiten duplicados";
				this.push(elemento);
			}else 
				this.push(elemento);


		}
		pantallaArrays.innerHTML += "<h3>Declaramos e inicializamos un array: " + array + "</h3>";
		pantallaArrays.innerHTML += "<h3>Introducimos un elemento(12) en el array con la funcion creada de annadir:  " + array.annadir + "</h3>";
		array.annadir(12);
		pantallaArrays.innerHTML += "<h3>Mostramos el array con el elemento añadido: " + array + "</h3>";

	}
	document.addEventListener("DOMContentLoaded", init);  
}