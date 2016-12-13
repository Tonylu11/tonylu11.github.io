{
	let init = function () {
		let html = document.documentElement;//HTML
		let body = html.lastChild;//BODY
		let head = html.childNodes[0];//HEAD
		let parrafo = document.getElementsByTagName('p')[0];//PRIMER PARRAFO
		let textoParrafo = document.createTextNode(" - Hay " + body.childNodes.length + " hijos de body");//CREA EL TEXTO QUE CUENTA LOS HIJOS DEL BODY
		parrafo.appendChild(textoParrafo);//AÑADE EL TEXTO AL PARRAFO
		let parrafo2 = document.createElement('p');//CREA ELEMENTO P
		parrafo2.appendChild(document.createTextNode("Hola a todos"));//AÑADIR AL PARRAFO 2 EL TEXTO HOLA A TODOS
		body.appendChild(parrafo2);//AÑADIR EL PARRAFO DE HOLA A TODOS AL BODY
		let lista = document.createElement("ol");
		let li = document.createElement('li');//CREAR ELEMENTO LI
		let li2 = document.createElement('li');//CREAR ELEMENTO LI
		let li3 = document.createElement('li');//CREAR ELEMENTO LI
		li.appendChild(document.createTextNode("Antonio"));//AÑADIR AL LI EL TEXTO CON EL NOMBRE
		li2.appendChild(document.createTextNode("Luque"));//AÑADIR AL LI EL TEXTO CON EL APELLIDO 1
		li3.appendChild(document.createTextNode("Bravo"));//AÑADIR AL LI EL TEXTO CON EL APELLIDO 2
		lista.appendChild(li);//AÑADIR A LA LISTA EL LI CON NOMBRE
		lista.appendChild(li2);//AÑADIR A LA LISTA EL LI CON APELLIDO 1
		lista.appendChild(li3);//AÑADIR A LA LISTA EL LI CON APELLIDO 2
		body.appendChild(lista);//AÑADIR LA LISTA AL BODY
		body.removeChild(body.childNodes[body.childNodes.length-4]);//BORRAR PARRAFO DOM 3
	}
	window.addEventListener("DOMContentLoaded", init);
}