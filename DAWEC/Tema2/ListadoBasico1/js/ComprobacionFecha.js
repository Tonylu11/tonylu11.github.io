/**
 * 8. Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
 * fecha es correcta. Si lo fuera, ha de mostrar el día después.
 * Realizado por Antonio Luque Bravo
*/
{
	let dia = prompt("Introduce el día:");
	let mes = prompt("Introduce el mes:");
	let anio = prompt("Introduce el año:");
	let union = anio+"-"+mes+"-"+dia;
	let fecha = new Date(union);
	if (fecha == "Invalid Date") {
		console.log("La fecha no es correcta");
	}else{
		fecha.setSeconds(86400);//1 día
		 console.log("Fecha final: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
	}
}