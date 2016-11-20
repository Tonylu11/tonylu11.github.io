{
	let init = function () {
		let bajarlinea = document.getElementById("bajarlinea");
		let subirlinea = document.getElementById("subirlinea");
		let bajarpagina = document.getElementById("bajarpagina");
		let subirpagina = document.getElementById("subirpagina");
		let inicio = document.getElementById("inicio");
		let fin = document.getElementById("fin");

		bajarlinea.addEventListener("click",function () {
			window.scrollByLines(1);
		});
		subirlinea.addEventListener("click",function () {
			window.scrollByLines(-1);
		});
		bajarpagina.addEventListener("click",function () {
			window.scrollByPages(1);
		});
		subirpagina.addEventListener("click",function () {
			window.scrollByPages(-1);
		});
		inicio.addEventListener("click",function () {
			window.scrollTo(0,0);
		});
		fin.addEventListener("click",function () {
			window.scrollTo(0, window.innerHeight);
		});
	}
	window.onload= init;
}