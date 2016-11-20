{
	let init = function () {
		let texto = document.getElementById("texto");
			texto.innerHTML = "<ol>" +
								"<li>window.outerHeight: " + window.outerHeight + "</li>" + 
								"<li>window.innerHeight: " + window.innerHeight + "</li>" +
								"<li>window.screen.availHeight: " + window.screen.availHeight + "</li>" +
								"<li>window.screen.height: " + window.screen.height + "</li>" +
								"<li>window.document.body.clientHeight: " + window.document.body.clientHeight + "</li>" +
							"</ol>";
		window.addEventListener("resize", function () {
			texto.innerHTML = "<ol>" +
								"<li>window.outerHeight: " + window.outerHeight + "</li>" + 
								"<li>window.innerHeight: " + window.innerHeight + "</li>" +
								"<li>window.screen.availHeight: " + window.screen.availHeight + "</li>" +
								"<li>window.screen.height: " + window.screen.height + "</li>" +
								"<li>window.document.body.clientHeight: " + window.document.body.clientHeight + "</li>" +
							"</ol>";
		});
	}
	document.addEventListener("DOMContentLoaded", init);
}