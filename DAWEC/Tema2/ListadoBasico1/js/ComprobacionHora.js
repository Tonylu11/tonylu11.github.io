/**
 * 9. Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
 * es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
 * Realizado por Antonio Luque Bravo
*/
{
	let horas = prompt("Introduce las horas:");
	let minutos = prompt("Introduce los minutos:");
	let segundos = prompt("Introduce los segundos:");
	if (horas < 0 || horas > 24) {
		console.log("La/s hora/s introducida/s no es/son correcta/s");
	}else if (minutos < 0 || minutos > 59) {
		console.log("Los minutos introducidos no son validos");
	}else if (segundos <0 || segundos > 59) {
		console.log("Los segundos introducidos no son válidos");
	}else{
		let tiempo = new Date(2016,10,14,horas,minutos,segundos);
		tiempo.setSeconds(tiempo.getSeconds()+1);
		console.log(tiempo.getHours()+"h "+tiempo.getMinutes()+" minutos y "+tiempo.getSeconds() + " segundos");
	}
}