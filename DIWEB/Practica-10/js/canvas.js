{
	
	let escala = 0.5;
	let color = "white";
	let c=document.getElementById("iconoContacto");
	let cxt=c.getContext("2d");

	cxt.fillStyle=(color);
	cxt.beginPath();
	cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(color);
	cxt.beginPath();
	cxt.arc(escala*50,escala*90,escala*39,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();

	c=document.getElementById("iconoInicio");
	cxt=c.getContext("2d");

	cxt.fillStyle=(color);
	cxt.beginPath();
	cxt.rect(escala*20,escala*39,escala*50,escala*50);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(color);
	cxt.beginPath();
    cxt.lineTo(40,20);
    cxt.lineTo(5,20);
    cxt.lineTo(23,0);
    cxt.fill();
	cxt.fillStyle=("black");
    cxt.beginPath();
    cxt.rect(27,25,5,5);
    cxt.rect(13,25,5,5);
    cxt.rect(20,39,5,6);
   	cxt.closePath();
	cxt.fill();
    cxt.beginPath();
	cxt.fillStyle=(color);
    
    cxt.rect(30,5,5,10);
   	cxt.closePath();
	cxt.fill();


	
}