/**
 * Realizado por Antonio Luque Bravo
*/
{
	let valores = [true,5,false,"hola","adios",2];
	//Comprobar si es mayor, menor o igual entre sí.
	if(valores[3] > valores[4]){
		alert(valores[3] + " es mayor que " + valores[4]);
	}
	else{
		alert(valores[4] + " es mayor que " + valores[3]);
	}

	//Booleanos
	let resultado1= valores[0] && valores[2];
	let resultado2 = valores[0] || valores[2];

	alert(valores[0] + " && " + valores[2] + ": " + resultado1 + "\n"
		 + valores[0] + " || " + valores[2] + ": " + resultado2);

	//Operaciones matemáticas.
	let resultado = valores[1] + valores[5];
	let resultado2 = valores[1] - valores[5];
	let resultado3 = valores[1] * valores[5];
	let resultado4 = valores[1] / valores[5];
	let resultado5 = valores[1] % valores[5];

	alert(
	    valores[1] + " + " + valores[5] + " = " + resultado + "\n" + 
	    valores[1] + " - " + valores[5] + " = " + resultado2 + "\n" + 
	    valores[1] + " * " + valores[5] + " = " + resultado3 + "\n" + 
	    valores[1] + " / " + valores[5] + " = " + resultado4 + "\n" + 
	    valores[1] + " % " + valores[5] + " = " + resultado5);
}