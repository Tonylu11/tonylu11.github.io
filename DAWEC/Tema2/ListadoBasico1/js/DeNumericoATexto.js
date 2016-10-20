/**
 * 10. Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
 * escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que
 * sea lo más eficiente posibleImplementa MultiplicaImpares que multiplique los 20
 * primeros números impares y muestre el resultado en pantalla.
 * Realizado por Antonio Luque Bravo
*/
{
	let numero = prompt("Introduce un número y lo convertire en letra");
	if(numero <0 || numero>99 || numero.length==0 || isNaN(numero)){
		console.log("Número en blanco o invalido");
	}else{
		console.log(decenasNumeroALetra(numero));
	}
	function unidadNumeroALetra(numero){
		switch(numero){
			case 0:
				return "cero";
			case 1:
				return "uno";
			case 2:
				return "dos";
			case 3:
				return "tres";
			case 4:
				return "cuatro";
			case 5:
				return "cinco";
			case 6:
				return "seis";
			case 7:
				return "siete";
			case 8:
				return "ocho";
			case 9:
				return "nueve";
		}
	}
	function decenasNumeroALetra(numero){
		let decenas= Math.floor(numero/10);
		let unidad =numero - (decenas*10);
		switch(decenas){
			case 1:
				switch(unidad){
					case 0: 
						return "diez";
			        case 1: 
			        	return "once";
			        case 2: 
			        	return "doce";
			        case 3: 
			        	return "trece";
			        case 4: 
			        	return "catorce";
			        case 5: 
			        	return "quince";
			        default: 
			        	return "dieci" + unidadNumeroALetra(unidad);
				}
			case 2:
				switch(unidad){
					case 0:
						return "veinte";
					default:
						return "veinti" + unidadNumeroALetra(unidad);
				}
			case 3:
				return "treinta y " + unidadNumeroALetra(unidad);
			case 4:
				return "cuarenta y " + unidadNumeroALetra(unidad);
			case 5:
				return "cincuenta y " + unidadNumeroALetra(unidad);
			case 6:
				return "sesenta y " + unidadNumeroALetra(unidad);
			case 7:
				return "setenta y " + unidadNumeroALetra(unidad);
			case 8:
				return "ochenta y " + unidadNumeroALetra(unidad);
			case 9:
				return "noventa y " + unidadNumeroALetra(unidad);
			case 0:
				return unidadNumeroALetra(unidad);
		}
	}
	function multiplicarImpares(){
		let resultado =1;
		for (let i = 1; i < 20; i=i+2) {
			resultado*=i;
		};
		console.log("El resultado de la multiplicación de los primeros 20 números impares es: " + resultado);
	}
}