/**
 * 1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
 * entre el 1 y el 100. Mostrará un mensaje:
 * a. Para indicar si has acertado (en una nueva ventana)
 * b. Para indicar si la solución es mayor o es menor.
 * Al finalizar, se le preguntará al usuario si quiere repetir el juego
 * Realizado por Antonio Luque Bravo
*/
{
	
	let aleatorio= function (){
	    return Math.floor(Math.random() * 101);
	}
	let deseaContinuar =function (){
		let respuesta = prompt("¿Desea volver a jugar?");
		if(respuesta == 'S' || respuesta == 's')
			return true;
		else
			return false;
	}

	let adivina = function (n, a){
		if (n == a) {
			console.log("Acertaste."); 
			return true;
		}
		if (n > a) {
			console.log("El número introducido es mayor");	
		}
		else {
			console.log("El número introducido es menor");	
		}
		return false;
	}

	do{
		let adivinalo = aleatorio();
		let numero;
		let hayAcierto;
		do{
			numero = prompt("Introduce un número y se indicará si es mayor o menor por consola:");
			if (!isNaN(numero)){
				hayAcierto = adivina(numero,adivinalo);
			}else{
				hayAcierto = false;
				console.log("El mensaje introducido no es un número.")
			}
		}while (!hayAcierto);
	} while (deseaContinuar());
}