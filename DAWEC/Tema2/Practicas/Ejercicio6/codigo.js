/**
 * Realizado por Antonio Luque Bravo
 */
 var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt("Introduzca el número de su DNI sin la letra.");
var letraDNI = prompt("Introduzca su letra del DNI.");

if(numeroDNI<0 || numeroDNI>99999999)
    alert("El número proporcionado no es correcto.");
else{
    var restoLetraDNI = letras[numeroDNI % 23];
    if(restoLetraDNI!=letraDNI)
        alert("La letra indicada no es correcta.");
    else
        alert("El número y la letra introducidos son correctos.");
}