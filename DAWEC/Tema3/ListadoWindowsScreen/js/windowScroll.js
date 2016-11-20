{
	let init = function () {
		let texto = document.getElementById("texto");
		window.addEventListener("scroll",function () {
			texto.innerHTML = "scrollX: " + window.scrollX + " scrollY: " + window.scrollY + " scrollbars: " + window.scrollbars.visible;
		});
	}
	window.onload= init;
}