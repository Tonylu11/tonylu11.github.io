/**
 * Realizado por Antonio Luque Bravo
 */
 {
	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
	'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let calcularLetraDni = function (letras) {
		return letras[numeroDNI % 23];
	}
	let numeroDNI = String(prompt("Introduzca el número de su DNI sin la letra."));
	let letraDNI = String(prompt("Introduzca su letra del DNI.")).toUpperCase();
	if(numeroDNI<0 || numeroDNI>99999999)
	    alert("El número proporcionado no es correcto.");
	else{
	    let restoLetraDNI = calcularLetraDni(letras);
	    if(restoLetraDNI!=letraDNI)
	        alert("La letra indicada no es correcta.");
	    else
	        alert("El número y la letra introducidos son correctos.");
	}

}